/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65A4F30A-75A8-4750-BCD9-CF2FFEBFADD5"}
 */
var btnSelect = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD9BF588-A753-40EB-9CC7-EEA20A9638EE"}
 */
var revisionReason = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4611CC88-82AF-4D36-B05C-055FB0588F93",variableType:4}
 */
var selected_doc_id = null;

/**
 * @type {Function}
 * 
 * @properties={typeid:35,uuid:"91A4C610-6814-4B49-A5C1-291A4EBFE5B5",variableType:-4}
 */
var upload_callback_method = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"40DBA3C1-D7F1-434D-88DA-D015B9CEEF9F"}
 */
var checkedOutRevId = null;

/**
 *  @type {Date}
 *  
 * @properties={typeid:35,uuid:"48807C43-469F-4FB6-82A1-3D964E753B2F",variableType:93}
 */
var lastModified = null;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"C0E59F02-C98F-4E7E-A457-F117C7EEFC80",variableType:-4}
 */
var messageOnDisplay = false;

/**
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2B5279D3-6B8C-4E02-89BD-C87E42274B8A"}
 */
function attachDocument (event) {
	uploadDocuments();
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"ADED0986-4D2C-4357-A210-675CB645D4D9"}
 */
function dc_new(_event, _triggerForm) {
	
	// In normal document management, when no folder is selected , just skip the action
	if (globals.nav_program_name == 'Document Tree View' && !scopes.svyDocumentManagement$model.selectedFolder) {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.upload_document'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_folder_selected'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	
	// Only Administrator or permitted user can upload the document.
	if(globals.svy_doc_isSuperAdminOrAdmin() || 
			globals.svy_doc_folderSecurityPermission(scopes.svyDocumentManagement$model.selectedFolder))
		uploadDocuments();
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.upload_document'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.no_previlege', ['upload']), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/**
 * @properties={typeid:24,uuid:"4C650912-668E-4AE7-9097-53BC7429DCC8"}
 */
function uploadDocuments() {
	var title = i18n.getI18NMessage('i18n:svy.fr.dlg.upload_document');
	var msg = i18n.getI18NMessage('i18n:svy.fr.dlg.file_plugin_missing');
	
	if (!plugins.file) {
		globals.DIALOGS.showInfoDialog(title, msg, 'i18n:svy.fr.lbl.close');
		return;
	}
	
	var filesObj = plugins.file.showFileOpenDialog(1, null, true, globals.svy_doc_getDocumentFilter(), uploadCallback, title);
	if (!filesObj)
		return;
}

/**
 * @param {plugins.file.JSFile[]} files
 * 
 * @return {Array<JSRecord<db:/svy_framework/doc_document>>} documents
 *
 * @properties={typeid:24,uuid:"7C001597-07EA-4FAD-BB38-4FDBB513235B"}
 * @AllowToRunInFind
 */
function uploadCallback(files) {
	// Check if any file is selected
	if (!files) {
		return null;
	}
	
	/** @type {Array<JSRecord<db:/svy_framework/doc_document>>} */
	var result = new Array();
	
	// Copy files to Remote server machine
	for (var fileCnt = 0 ; fileCnt < files.length ; fileCnt++) {	
		
		var docTypeId = null;
		if (!scopes.svyProperties.getPropertyValueAsBoolean("document_management_allow_all_file_types")) {
			docTypeId = getDocumentType(files[fileCnt].getName());					// get the document id
			if (!docTypeId) {															// Document type not supported
				continue;
			}
		}
		
		var docRecord;
		
		// create new document record		
		var docLayoutId;		
		/** @type {JSFoundSet<db:/svy_framework/nav_layout>} */
		var layoutFs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_layout');
		if (layoutFs.find()) {
			layoutFs.name = 'dmDocuments';
			if (layoutFs.search())
				docLayoutId = layoutFs.layout_id;
		}
		
		if (globals.nav_currentPanel1Form &&  globals.nav_layout_id == docLayoutId) {
			foundset.newRecord()												// Create record in documents table			
			docRecord = foundset.getSelectedRecord();
			docRecord.doc_folder_id = scopes.svyDocumentManagement$model.selectedFolder;
		}
		else {
			docRecord = foundset.getRecord(foundset.newRecord(false));			// Attach document for the selected program
			
			// Set the linked_id and linked_table fields
			docRecord.linked_id = globals.svy_nav_getRowIdentifierValues( globals.nav_currentPanel1Form).join(',');
			docRecord.linked_table = forms[globals.nav_currentPanel1Form].controller.getDataSource().split('/')[2];
			docRecord.doc_folder_id = null;
		}

		//Create Default Public security.
		docRecord.security_level = scopes.svyDocumentManagement.DOC_SECURITY.PUBLIC;
		docRecord.doc_document_to_doc_security.newRecord(false);
		docRecord.doc_document_to_doc_security.security_level = scopes.svyDocumentManagement.DOC_SECURITY.PUBLIC;
		docRecord.user_created_id = globals.svy_sec_lgn_user_id;
		
		// Set data in document table
		docRecord.name = files[fileCnt].getName();
		docRecord.doc_document_type_id = docTypeId;
		
		// upload file		
		if (doUpload(files[fileCnt])) {
			result.push(docRecord);
		}
		
		// Save data
		databaseManager.saveData(docRecord);
		databaseManager.saveData(docRecord.doc_document_to_doc_security);
	}
	
	
	if (upload_callback_method) {
		upload_callback_method.apply(this, [result]);
	}
	
	
	// refresh foundset
	globals.svy_doc_documentSecurityPermission()
	
	return result;
}

/**
 * Actual file upload process is done 
 * 
 * @param {plugins.file.JSFile} file
 * 
 * @return {Boolean} true when upload succeeded
 *
 * @properties={typeid:24,uuid:"89E0E26E-0AB4-41E9-B572-575B3BA16225"}
 */
function doUpload (file) {
	
	var uploadTo = scopes.svyProperties.getPropertyValue('document_management_in_database');
	var revision = null;
	var thumbnail = null;
	
	if (uploadTo && uploadTo == true && foundset.doc_document_to_doc_revision) {								// Create revision
	
		if (scopes.svyProperties.getPropertyValue('document_management_revision'))
			revision = foundset.doc_document_to_doc_revision.getRecord(foundset.doc_document_to_doc_revision.newRecord(false));
		else {
			if (!databaseManager.hasRecords(foundset.doc_document_to_doc_revision))
				foundset.doc_document_to_doc_revision.newRecord(false);
			
			revision = foundset.doc_document_to_doc_revision.getSelectedRecord();
			if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_binary))				// Remove binary file
				revision.doc_revision_to_doc_document_binary.deleteAllRecords();
			if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_thumbnail))			// Remove thumbnail file
				revision.doc_revision_to_doc_document_thumbnail.deleteAllRecords();
			
			globals.onRecordDelete_doc_revision(revision);
		}
			
		revision.revision_number = foundset.doc_document_to_doc_revision.getSize();
		revision.original_filename = foundset.name;
		
		if (revision.doc_revision_to_doc_document_binary) {					// Load Binary file
		
			var binary = revision.doc_revision_to_doc_document_binary.getRecord(revision.doc_revision_to_doc_document_binary.newRecord(false));
			binary.document_binary = file.getBytes();
		}
		
		if (file.getContentType().split('/')[0] == 'image' && plugins.images && 
		revision.doc_revision_to_doc_document_thumbnail) {						// Load Binary Thumbnail
		
			thumbnail = revision.doc_revision_to_doc_document_thumbnail.getRecord(revision.doc_revision_to_doc_document_thumbnail.newRecord(false));
			thumbnail.document_thumbnail = plugins.images.getImage(file).resize(200,200);
		}
		
		databaseManager.saveData(revision);
		databaseManager.saveData(binary);
		databaseManager.saveData(thumbnail);
		
		return true;
	}
	else {
		// upload file to file system
		uploadToFileSystem(file, foundset.name);
		return true;				
	}
}

/** *
 * Overridden cancel to refresh revision form
 * 
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"808DF5EF-08F7-426E-8F07-0B40172C5230"}
 */
function dc_cancel(_event, _triggerForm) {
	_super.dc_cancel(_event, _triggerForm);
	
	// Refresh forms
	if (!databaseManager.hasRecords(doc_document_to_doc_revision))
		forms.svy_doc_revision_dtl.foundset.clear();
}

/**
 * Method to be attached to check out button
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"DE19646B-0091-4F81-9006-54D6C369D937"}
 */
function checkOut (event) {	
	
	// For smart and runtime client when tracked checkout is activated, just use tracked checkout by default
	if (scopes.modUtils$system.isSwingClient() && scopes.svyProperties.getPropertyValue('document_management_tracked_checkout')) {
		checkOutTracked(event);
		return;
	}
	
	if (databaseManager.hasRecords(doc_document_to_doc_revision$latest_revision)) {
		var revisionRec = doc_document_to_doc_revision$latest_revision.getSelectedRecord();
		var option = null;
		
		if (is_checked_out && revisionRec.checked_out_by_user != globals.svy_sec_lgn_user_id) {																		// When document alreday checked out by some user
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.document_already_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		} 
		else if (is_checked_out && revisionRec.checked_out_by_user == globals.svy_sec_lgn_user_id) {																		// When document alreday checked out by some user
			option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'), 
					i18n.getI18NMessage('i18n:svy.fr.dlg.document_undo_checkout'), i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), 
					i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			
			if (option && option == 'i18n:svy.fr.lbl.yes') {
				is_checked_out = 0;
				revisionRec.checked_out_by_user = null;
				revisionRec.checked_out_datetime = null;
				
				plugins.scheduler.removeJob('TrackedDocCheckOut');
				globals.svy_doc_tracked_checkout_document_id = null;
				globals.svy_doc_is_tracked_doc_checked_out = false;
			}
			
			//save edited records
			databaseManager.saveData(revisionRec);
			databaseManager.saveData(foundset);
			
			return;
		}
		
		var fileLocation = plugins.file.showFileSaveDialog(revisionRec.original_filename, i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'));
		if (!fileLocation)
			return;
		
		if (fileLocation.exists()) {
			option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.override_existing_document'), i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			
			if (!option || option == i18n.getI18NMessage('i18n:svy.fr.lbl.no'))
				return;
		}
		
		if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {		// When document is in database	
			if (databaseManager.hasRecords(revisionRec.doc_revision_to_doc_document_binary)) {// Validate binary file
				var docByte = revisionRec.doc_revision_to_doc_document_binary.document_binary;
				plugins.file.writeFile(fileLocation, docByte);
				foundset.is_checked_out = 1;
				revisionRec.checked_out_datetime = application.getServerTimeStamp();
				revisionRec.checked_out_by_user = globals.svy_sec_lgn_user_id;
			}
		}
		else {																					// When file is in file system
			plugins.file.streamFilesFromServer(fileLocation, globals.svy_doc_getServerFileName(revisionRec));
			foundset.is_checked_out = 1;
			revisionRec.checked_out_datetime = application.getServerTimeStamp();
			revisionRec.checked_out_by_user = globals.svy_sec_lgn_user_id;
		}
		
		databaseManager.saveData(revisionRec);
		databaseManager.saveData(foundset);
		
	}
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.latest_revision_not_found'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/**
 * Method to be attached to check in button
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BBE584CF-565C-4719-8C50-E484DCAA6D0C"}
 */
function checkIn (event) {
	
	// Validate
	if (!foundset.is_checked_out)
		return;
	
	if (databaseManager.hasRecords(doc_document_to_doc_revision$latest_revision)) {
		
		var revisionRec = doc_document_to_doc_revision$latest_revision.getSelectedRecord();
		
		// When document is not checked out, don't allow to check in
		if (!foundset.is_checked_out) {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin'), 
					i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin_not_allowed'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}	
		
		if (foundset.is_checked_out && revisionRec.checked_out_by_user == globals.svy_sec_lgn_user_id) {
			
			var filesObj = plugins.file.showFileOpenDialog(1, null, false, globals.svy_doc_getDocumentFilter(), 
						checkinCallback, i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin'));
			if (!filesObj)
				return;
		}
		else {			
			if (revisionRec.revision_by_user != globals.svy_sec_lgn_user_id)
				globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin'), 
						i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin_allowed_for_checkout_user'), 
						i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
	}
}

/**
 * Method to be attached to the download button
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"DDCAC60E-161D-43C5-A988-0684391C1146"}
 */
function downloadCurrentRevision (event) {
		
	if (!foundset || (foundset && foundset.getSize() < 1))
		return;
	
	if (databaseManager.hasRecords(doc_document_to_doc_revision$latest_revision)) {
		var revisionRec = doc_document_to_doc_revision$latest_revision.getSelectedRecord();
		
		var fileLocation = plugins.file.showFileSaveDialog(revisionRec.original_filename, i18n.getI18NMessage('i18n:svy.fr.lbl.document_download'));
		if (!fileLocation)
			return;
		
		if (fileLocation.exists()) {
			var option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.document_download'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.override_existing_document'), i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), 
					i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			if (!option || option == i18n.getI18NMessage('i18n:svy.fr.lbl.no'))
				return;
		}
		
		if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {		// When file is in database	
			if (databaseManager.hasRecords(revisionRec.doc_revision_to_doc_document_binary)) {// Validate binary file
				var docByte = revisionRec.doc_revision_to_doc_document_binary.document_binary;
				plugins.file.writeFile(fileLocation, docByte);
			}
		}
		else {																					// When file is in file system
			plugins.file.streamFilesFromServer(fileLocation, globals.svy_doc_getServerFileName(revisionRec));
		}
	}
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.document_download'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.latest_revision_not_found'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/**
 * @param {plugins.file.JSFile[]} files
 *
 * @properties={typeid:24,uuid:"6B0672DD-A4B7-4A44-8648-3C9A004355F0"}
 */
function checkinCallback(files) {
	
	// Check if any file is selected
	if (!files)
		return false;
	
	var docTypeId = null;
	if (!scopes.svyProperties.getPropertyValueAsBoolean("document_management_allow_all_file_types")) {
		docTypeId = getDocumentType(files[0].getName());					// get the document id
		if (!docTypeId) {													// Document type not supported
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkin'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.doc_type_not_supported'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'))
			return false;
		}
	}
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var fs = foundset;
	
	if (scopes.svyProperties.getPropertyValueAsBoolean("document_management_tracked_checkout") &&
			globals.svy_doc_tracked_checkout_document_id) {
		fs = databaseManager.getFoundSet(foundset.getDataSource())
		fs.loadRecords(globals.svy_doc_tracked_checkout_document_id);
	}
	
	forms.svy_doc_revision_reason_dlg.foundset.loadRecords(fs);
	var title =  i18n.getI18NMessage('i18n:svy.fr.dlg.checkin_reason') ? i18n.getI18NMessage('i18n:svy.fr.dlg.checkin_reason') : 'Check in reason';
	var winName = 'revision_reason' + application.getUUID().toString();
	globals.DIALOGS.showFormInModalDialog(forms.svy_doc_revision_reason_dlg, null, null, null, null, title, true, false, winName);
	
	if (!forms.svy_doc_documents.btnSelect || forms.svy_doc_documents.btnSelect == 'cancel')
		return null;
	
	// UnSet checked out flag	
	fs.is_checked_out = 0;
	
	var revision = null;
	var thumbnail = null;
	
	// Copy files to Remote server machine
	for (var fileCnt = 0 ; fileCnt < files.length ; fileCnt++) {
		
		// Set data in document table
		var thisFileName = '';
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
			thisFileName = files[fileCnt].getName();
		else {
			var path = utils.stringReplace(files[fileCnt]+'','/', '\\');
			thisFileName = path.split('\\')[path.split('\\').length - 1];
		}			
		
		// upload file
		var file = files[0];
		var uploadTo = scopes.svyProperties.getPropertyValue("document_management_in_database")
	
		if (uploadTo && foundset.doc_document_to_doc_revision) {											// Create revision
		
			if (scopes.svyProperties.getPropertyValue('document_management_revision'))
				revision = fs.doc_document_to_doc_revision.getRecord(fs.doc_document_to_doc_revision.newRecord(false));
			else {
				if (!databaseManager.hasRecords(fs.doc_document_to_doc_revision))
					fs.doc_document_to_doc_revision.newRecord(false);
				
				revision = fs.doc_document_to_doc_revision.getSelectedRecord();
				if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_binary))				// Remove binary file
					revision.doc_revision_to_doc_document_binary.deleteAllRecords();
				if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_thumbnail))			// Remove thumbnail file
					revision.doc_revision_to_doc_document_thumbnail.deleteAllRecords();
				
				globals.onRecordDelete_doc_revision(revision);
			}
			
			revision.revision_number = fs.doc_document_to_doc_revision.getSize();
			revision.original_filename = thisFileName;
			revision.revision_by_user = globals.svy_sec_lgn_user_id;
			revision.revision_reason = forms.svy_doc_documents.revisionReason;
			
			if (revision.doc_revision_to_doc_document_binary) {					// Load Binary file
			
				var binary = revision.doc_revision_to_doc_document_binary.getRecord(revision.doc_revision_to_doc_document_binary.newRecord(false));
				binary.document_binary = file.getBytes();
			}
			
			if (file.getContentType() && file.getContentType().split('/')[0] == 'image' && plugins.images && 
			revision.doc_revision_to_doc_document_thumbnail) {						// Load Binary Thumbnail
			
				thumbnail = revision.doc_revision_to_doc_document_thumbnail.getRecord(revision.doc_revision_to_doc_document_thumbnail.newRecord(false));
				thumbnail.document_thumbnail = plugins.images.getImage(file.getBytes()).resize(200,200);
			}
			
			databaseManager.saveData(revision);
			databaseManager.saveData(thumbnail);
			databaseManager.saveData(binary);
		}
		else {
			// Upload file to file system
			uploadToFileSystem(file,thisFileName);
		}
		
		databaseManager.saveData(fs);
		
		plugins.scheduler.removeJob('TrackedDocCheckOut');
		globals.svy_doc_tracked_checkout_document_id = null;
		globals.svy_doc_is_tracked_doc_checked_out = false;
	}
	
	return true;
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7656E249-913F-4357-A1EA-DD4C1CA3647D"}
 * @AllowToRunInFind
 */
function documentPreview (event) {
	
	// save data
	databaseManager.saveData(doc_document_to_doc_revision);
	
	if (databaseManager.hasRecords(doc_document_to_doc_revision$latest_revision)) {
		var revisionRec = doc_document_to_doc_revision$latest_revision.getSelectedRecord();
		
		// Get the file for preview
		if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {		// When file is in database
		
			if (databaseManager.hasRecords(revisionRec.doc_revision_to_doc_document_binary))
				forms.svy_doc_revision_preview_dlg.vRevisionPreview = revisionRec.doc_revision_to_doc_document_binary.document_binary;
			else
				forms.svy_doc_revision_preview_dlg.vRevisionPreview = null;
				
			// Display preview in window
			var win = application.getWindow('revision_preview');	
			if (!win) {
				win = application.createWindow('revision_preview', JSWindow.MODAL_DIALOG);
				win.title = i18n.getI18NMessage('i18n:svy.fr.dlg.revision_preview') ? i18n.getI18NMessage('i18n:svy.fr.dlg.revision_preview') : 'Revision preview';
				win.resizable = true;
				win.setSize(500,500);
			}
			win.show(forms.svy_doc_revision_preview_dlg);	
		}
		else {		
			var ext = revisionRec.original_filename.split('.')[revisionRec.original_filename.split('.').length - 1];
			var tempFile = plugins.file.createTempFile('', '.' + ext)
			plugins.file.streamFilesFromServer(tempFile, globals.svy_doc_getServerFileName(revisionRec), previewCallback);
		}
	}	
}

/**
 * Method called when a file is downloaded from file system of the server
 * 
 * @param {plugins.file.JSFile} tempFile File downloaded
 * 
 * @properties={typeid:24,uuid:"759870B9-4AD5-4C41-8122-E1F1436B7661"}
 */
function previewCallback (tempFile) {
	
	if (tempFile.getContentType() && tempFile.getContentType().split('/')[0] == 'image')
		forms.svy_doc_revision_preview_dlg.vRevisionPreview = tempFile.getBytes();
	else
		forms.svy_doc_revision_preview_dlg.vRevisionPreview = null;	
	
	var win = application.getWindow('revision_preview');	
	if (!win) {
		win = application.createWindow('revision_preview', JSWindow.MODAL_DIALOG);
		win.title = i18n.getI18NMessage('i18n:svy.fr.dlg.revision_preview') ? i18n.getI18NMessage('i18n:svy.fr.dlg.revision_preview') : 'Revision preview';
		win.resizable = true;
		win.setSize(500,500);
	}
		win.show(forms.svy_doc_revision_preview_dlg);	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} file
 * @param {String} thisFileName
 *
 * @properties={typeid:24,uuid:"400E1129-A21E-4982-9BE2-7254F17EBD54"}
 */
function uploadToFileSystem(file, thisFileName) {
	
	var revision = null;
	if (scopes.svyProperties.getPropertyValue('document_management_revision'))
		revision = foundset.doc_document_to_doc_revision.getRecord(foundset.doc_document_to_doc_revision.newRecord(false));
	else {
		if (!databaseManager.hasRecords(foundset.doc_document_to_doc_revision))
			foundset.doc_document_to_doc_revision.newRecord(false);
		
		revision = foundset.doc_document_to_doc_revision.getSelectedRecord();
		if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_binary))				// Remove binary file
			revision.doc_revision_to_doc_document_binary.deleteAllRecords();
		if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_thumbnail))			// Remove thumbnail file
			revision.doc_revision_to_doc_document_thumbnail.deleteAllRecords();
		
		globals.onRecordDelete_doc_revision(revision);
	}
	
	revision.revision_number = foundset.doc_document_to_doc_revision.getSize();
	revision.original_filename = thisFileName;
	revision.revision_by_user = globals.svy_sec_lgn_user_id;
	revision.revision_reason = forms.svy_doc_revision_reason_dlg.vRevisionReason;
	
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		plugins.file.writeFile(plugins.file.createFile(plugins.file.getDefaultUploadLocation() + globals.svy_doc_getServerFileName(revision)), file.getBytes(), file.getContentType())
	}
	else
		plugins.file.streamFilesToServer(file, globals.svy_doc_getServerFileName(revision));				// Upload done to file system
	
	if (file.getContentType().split('/')[0] == 'image' && plugins.images && 
	revision.doc_revision_to_doc_document_thumbnail) {												// Load Binary Thumbnail
	
		var thumbnail = revision.doc_revision_to_doc_document_thumbnail.getRecord(revision.doc_revision_to_doc_document_thumbnail.newRecord(false));
		thumbnail.document_thumbnail = plugins.images.getImage(file.getBytes()).resize(200,200);
	}
	
	// Save revision and thumbnail
	databaseManager.saveData(revision);
	databaseManager.saveData(thumbnail);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91800161-9974-421F-BA7D-518400FE475D"}
 */
function AssignDocumentSecurity(event) {

	// Only Administrator or created user can delete the document.
	
	if(globals.svy_doc_isSuperAdminOrAdmin() || 
		user_created_id == globals.svy_sec_lgn_user_id){
		var win = application.createWindow('ChangePermissions', JSWindow.DIALOG);
		win.title = i18n.getI18NMessage('i18n:svy.fr.dlg.document_permissions') ? i18n.getI18NMessage('i18n:svy.fr.dlg.document_permissions') : 'Document Permission';
		win.resizable = true;
		win.show(forms.svy_doc_document_change_Permissions_dlg);	
	}
	else{
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_permissions'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.not_authorized_to_change_permission'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		} 
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"BBB49093-60D1-444D-AC6F-7CB79D71D689"}
 */
function dc_delete(_event, _triggerForm) {
	// Only Administrator or created user can delete the document.
	if(globals.svy_doc_isSuperAdminOrAdmin() || 
			user_created_id == globals.svy_sec_lgn_user_id)
		 _super.dc_delete(_event, _triggerForm);
	else{
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.delete'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_previlege_on_doc', ['delete']), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"5D31B216-822D-474A-AEC8-D9DBCD45C0B6"}
 */
function dc_edit(_event, _triggerForm) {
	// Only Administrator or created user can edit the document.
	if(globals.svy_doc_isSuperAdminOrAdmin() || 
			user_created_id == globals.svy_sec_lgn_user_id)
			_super.dc_edit(_event, _triggerForm)
	else{
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.edit_document'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_previlege_on_doc', ['edit']), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/** *
 * @param _event
 *
 * @properties={typeid:24,uuid:"3E8C9283-5B4E-4BE4-AC5F-0FEA1781E9F5"}
 */
function dc_loadAll(_event) {
	globals.svy_doc_documentSecurityPermission();
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"9D127F74-6C67-453D-9AEC-8D38EAECF0D1"}
 */
function onRenderCheckIn(event) {
	
	/** @type {JSRecord<db:/svy_framework/doc_document>} */
	var rec = event.getRecord();
	databaseManager.saveData(rec.doc_document_to_doc_revision);
	
	if (!rec.is_checked_out || 
			(rec.is_checked_out && databaseManager.hasRecords(rec.doc_document_to_doc_revision$latest_revision) && 
					rec.doc_document_to_doc_revision$latest_revision.checked_out_by_user != globals.svy_sec_lgn_user_id)) 
		event.getRenderable().enabled = false;
	else
		event.getRenderable().enabled = true;
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"ABB4694E-B719-46CB-BEA1-74F560F59D6B"}
 */
function onRenderCheckOut(event) {
	
	/** @type {JSRecord<db:/svy_framework/doc_document>} */
	var rec = event.getRecord();
	
	if (rec.doc_document_to_doc_revision)
		databaseManager.saveData(rec.doc_document_to_doc_revision);
	var revRec = rec.doc_document_to_doc_revision$latest_revision;
	
	if (rec.is_checked_out) {
		if (revRec.checked_out_by_user == globals.svy_sec_lgn_user_id)
			event.getRenderable().enabled = true;
		else
			event.getRenderable().enabled = false;
	}
	else
		event.getRenderable().enabled = true;
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"CF8EFBD5-1B03-450B-927F-FB84DBBC24E8"}
 */
function onRenderDocumentPrivileges(event) {
	
	/** @type {JSRecord<db:/svy_framework/doc_document>} */
	var rec = event.getRecord();
	
	if (globals.svy_doc_isSuperAdminOrAdmin() || rec.user_created_id == globals.svy_sec_lgn_user_id) 
		event.getRenderable().enabled = true;
	else
		event.getRenderable().enabled = false;
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"B78EEF80-7DD5-47AF-BBE8-92DF250EB12C"}
 */
function dc_duplicate(_event, _triggerForm) {
	
	if (!foundset.getSize())
		return;
	
	// Only Administrator or created user can duplicate the document.
	if(!(globals.svy_doc_isSuperAdminOrAdmin() || user_created_id == globals.svy_sec_lgn_user_id)) {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.duplicate_document'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_previlege_on_doc', ['duplicate']), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	
	var i = 0;
	
	// Duplicate the document with all the related data
	var choice = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.duplicate_document'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.duplicate_document_confirm'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'))
	
	if (!choice || (choice && choice == i18n.getI18NMessage('i18n:svy.fr.lbl.no')))
		return;
	
	// Hold selected record
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var selDoc = databaseManager.getFoundSet(foundset.getDataSource());
	selDoc.loadRecords(foundset.doc_document_id);
	
	// Create new document
	foundset.duplicateRecord(false)
	var newDoc = foundset;
	
	// Duplicate Security
	var size = selDoc.doc_document_to_doc_security.getSize();
	for (i = 1; i <= size; i++){
		selDoc.doc_document_to_doc_security.setSelectedIndex(i);
		selDoc.doc_document_to_doc_security.duplicateRecord(false);
		selDoc.doc_document_to_doc_security.doc_document_id = newDoc.doc_document_id;
	}
	
	// Duplicate Revisions
	size = selDoc.doc_document_to_doc_revision.getSize();
	for (i = 1; i <= size; i++){
		selDoc.doc_document_to_doc_revision.setSelectedIndex(i);
		selDoc.doc_document_to_doc_revision.duplicateRecord(false);
		var newRevId = selDoc.doc_document_to_doc_revision.doc_revision_id;						// Backup new revision ID
		selDoc.doc_document_to_doc_revision.doc_document_id = newDoc.doc_document_id;
		
		
		// Duplicate thumbnail
		selDoc.doc_document_to_doc_revision.setSelectedIndex(i);
		/** @type {JSRecord<db:/svy_framework/doc_revision>} */
		var rev = selDoc.doc_document_to_doc_revision;		
		if (databaseManager.hasRecords(rev.doc_revision_to_doc_document_thumbnail)) {
			
			rev.doc_revision_to_doc_document_thumbnail.getRecord(rev.doc_revision_to_doc_document_thumbnail.duplicateRecord(false));
			rev.doc_revision_to_doc_document_thumbnail.doc_revision_id = newRevId;
		}
		
		// Duplicate Binary
		selDoc.doc_document_to_doc_revision.setSelectedIndex(i);
		rev = selDoc.doc_document_to_doc_revision;		
		if (databaseManager.hasRecords(rev.doc_revision_to_doc_document_binary)) {
			rev.doc_revision_to_doc_document_binary.duplicateRecord(false);
			rev.doc_revision_to_doc_document_binary.doc_revision_id = newRevId;
		}	
		else if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {	// Binary file is kept in file system
			
			var ext = rev.original_filename.split('.')[rev.original_filename.split('.').length - 1];
			var oldpath = '/' + globals.svy_sec_lgn_organization_id + '/' + rev.doc_revision_id + '.' + ext;
			var newpath = '/' + globals.svy_sec_lgn_organization_id + '/' + newRevId + '.' + ext;

			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
				// get remote file
				var oldFile = plugins.file.createFile(plugins.file.getDefaultUploadLocation() + oldpath);
				
				plugins.file.writeFile(plugins.file.createFile(plugins.file.getDefaultUploadLocation() + newpath), oldFile.getBytes(), oldFile.getContentType())
			}
			else {				
				var tempFile = plugins.file.createTempFile(globals.svy_sec_lgn_organization_id + '__' + newRevId + '__' + ext + '__', '.' + ext);
				plugins.file.streamFilesFromServer(tempFile, oldpath, duplicateFileCallback);					
				
			}
		}
	}
	
	databaseManager.saveData();
	onRecordSelection(_event, controller.getName());

//	// refresh foundset
//	if (_to_doc_document$current_folder_documents) {								// Load documents
//		_to_doc_document$current_folder_documents.loadAllRecords()	
//		forms.svy_doc_documents_tbl.foundset.loadRecords(_to_doc_document$current_folder_documents);
//	}
}

/**
 * This is the call back method to duplicate the files in server
 * 
 * @param {plugins.file.JSFile} tempFile
 * 
 * @properties={typeid:24,uuid:"4AF45F00-C2F4-46C4-B610-67FF4E1EB953"}
 */
function duplicateFileCallback(tempFile) {
	
	var parts = tempFile.getName();
	
	parts = parts.split('__') ;
	var orgId = parts[0];
	var revId = parts[1];
	var ext = parts[2];
	var newFileName = '/' + orgId + '/' + revId + '.' + ext;
	
	plugins.file.streamFilesToServer(tempFile, newFileName);				// Upload done to file system
}

/**
 * 
 * @param {String} docName
 * @return {UUID}
 *
 * @properties={typeid:24,uuid:"E9232D97-892E-473B-93BA-8BDD3FAD245E"}
 */
function getDocumentType( docName) {
	var parts = docName.split('.');
	scopes.svyDocumentManagement$model.selectedFileExtension = parts[parts.length - 1].toLowerCase();
	if (!scopes.svyDocumentManagement$model.selectedFileExtension)
		return null;
	
	if (databaseManager.hasRecords(_to_doc_document_type))
		return _to_doc_document_type.doc_document_type_id;
	else 
		return null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E62F5F09-D270-4CD4-9CED-859FA728531E"}
 */
function attachDocumentToProgram(event) {
	// Attach a new document to the program
	var docLayoutId;
	if (globals.nav.program["dmDocuments"] && globals.nav.program["dmDocuments"].layout_id) {
		docLayoutId = globals.nav.program["dmDocuments"].layout_id;
	}
	if ( globals.nav_currentPanel1Form &&  globals.nav_layout_id != docLayoutId)
		attachDocument(event);
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.attach_document'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.open_program_to_continue'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/**
 * Delete the document which is attached to any program/record
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A38211DB-1959-4B49-A24D-118C0174E604"}
 */
function deleteAttachedDocument(event) {
	// Delete the document
	
	if (foundset && foundset.getSize() < 1)
		return;
	
	//Only Administrator or created user can delete the document.
	if(globals.svy_doc_isSuperAdminOrAdmin() || user_created_id == globals.svy_sec_lgn_user_id) {
		
		if (globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.delete_document'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.delete_document_confirm'), i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no')) == i18n.getI18NMessage('i18n:svy.fr.lbl.yes')) {
			foundset.deleteRecord();
			forms.svy_doc_program_documents.setUpFoundset(event);
		}
	}
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.delete_document'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_previlege_on_doc', ['delete']), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"71EFD889-1615-4A5C-9C88-A212888A2142"}
 */
function showDocumentProgram(event) {
	
	// Backup selected document id
	selected_doc_id = doc_document_id;
	
	// Show the document program
	
	globals.nav.openNewTab = 1
	var program = 'dmDocuments';
	
	if (!globals.nav.program[program]) {
		return;
	}

	var layout_id = globals.nav.program[program].layout_id;
	
	if (!layout_id) {
		return;
	}

	// show the form and update the menu
	forms[globals.nav.mainFormName].layoutSwitch(null,layout_id);
	forms[globals.nav.mainFormName].updateMenu(layout_id);
	
	// This function will refresh the document foundset.
	globals.svy_doc_documentSecurityPermission();
}

/** *
 * @param _method
 *
 * @properties={typeid:24,uuid:"FA3C8804-65C2-4569-A0A9-F02708A15846"}
 * @AllowToRunInFind
 */
function isMethodAllowed(_method) {
	var _allowed = true
	
	if (_method != 'dc_new' && foundset && foundset.getSize() > 0) {
		
		/** @type {JSRecord<db:/svy_framework/doc_document>} */
		var _rec = foundset.getSelectedRecord();
		if (_rec) {
		
			if (_rec && _rec.doc_document_to_doc_revision)
				databaseManager.saveData(_rec.doc_document_to_doc_revision);
			
			// Validation for Check in button
			if (_rec && _method == 'checkIn' && !_rec.is_checked_out || 
					(_rec.is_checked_out && databaseManager.hasRecords(_rec.doc_document_to_doc_revision$latest_revision) && 
							_rec.doc_document_to_doc_revision$latest_revision.checked_out_by_user != globals.svy_sec_lgn_user_id)) 
				_allowed = false;
			else
				_allowed = true;
		}
		else
			_allowed = false;
	}
	else
		_allowed = false;
		
	// These buttons need to be enabled always
	if (_method == 'dc_new')
		_allowed = true;
	
	// Enable document additional tools when foundset has some records
	if (foundset.getSize() > 0 && (_method == 'documentPreview' || _method == 'checkOut' || 
				_method == 'downloadCurrentRevision' || _method == 'AssignDocumentSecurity'))
		return true;
		
	// For default buttons, always enable
	if (_method == 'dc_showDetail' || _method == 'dc_showTable' || _method == 'dc_recFirst' || _method == 'dc_recPrev' || 
			_method == 'dc_recInfo' || _method == 'dc_recNext' || _method == 'dc_recLast' || _method == 'dc_help' ||
			_method == 'dc_edit' || _method == 'dc_delete' || _method == 'dc_duplicate' || 
			_method == 'dc_save' || _method == 'dc_cancel')
		return _super.isMethodAllowed(_method);
	
	// For now always enable the checkin button, as there is some framework issue on enabling this button automatically
	if (foundset.getSize() > 0 && _method == 'checkIn')
		return true;
	
	return _super.isMethodAllowed(_method) && _allowed;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6AC3B609-0AF5-4773-A6CF-4EC068280C33"}
 */
function onShowForm(firstShow, event) {
	
	// Always hide the pinned area tab panel, when regular document management is started
	if (forms[globals.nav.mainFormName].elements.tab_popmenu && forms[globals.nav.mainFormName].elements.tab_popmenu.getTabFormNameAt(1) == 'svy_nav_fr_popmenuDocuments' &&
			forms[globals.nav.mainFormName].elements.tab_popmenu.visible  == true) {
		forms[globals.nav.mainFormName].elements['tab_popmenu']['visible'] = false; 
	}
	
	return _super.onShowForm(firstShow, event)
}

/**
 * Method to be attached to check out button
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9618D6F9-A70C-4A42-8F71-3EFDE85B4509"}
 */
function checkOutTracked (event) {	
	
	if (globals.svy_doc_is_tracked_doc_checked_out && checkedOutRevId != doc_document_to_doc_revision$latest_revision.doc_revision_id && !is_checked_out) {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.one_doc_already_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	
	if (databaseManager.hasRecords(doc_document_to_doc_revision$latest_revision)) {
		var revisionRec = doc_document_to_doc_revision$latest_revision.getSelectedRecord();
		var option = null;
		
		if (is_checked_out && revisionRec.checked_out_by_user != globals.svy_sec_lgn_user_id) {																		// When document alreday checked out by some user
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.document_already_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		else if (is_checked_out && revisionRec.checked_out_by_user == globals.svy_sec_lgn_user_id) {																		// When document alreday checked out by some user
			option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'), 
					i18n.getI18NMessage('i18n:svy.fr.dlg.document_undo_checkout'), 
					i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			if (option && option == i18n.getI18NMessage('i18n:svy.fr.lbl.yes')) {
				is_checked_out = 0;
				revisionRec.checked_out_by_user = null;
				revisionRec.checked_out_datetime = null;
				
				plugins.scheduler.removeJob('TrackedDocCheckOut');			// Remove scheduler to track checked out Document
				globals.svy_doc_tracked_checkout_document_id = null;
				globals.svy_doc_is_tracked_doc_checked_out = false;
			}
			
			//save updated records
			databaseManager.saveData(foundset);
			databaseManager.saveData(revisionRec);
			
			return;
		}
		
		var fileLocation = null;
		
		if (scopes.svyProperties.getPropertyValue('document_management_tracked_checkout')) {				// Check out to temporary location
			var ext = doc_document_to_doc_revision$latest_revision.original_filename.split('.')[doc_document_to_doc_revision$latest_revision.original_filename.split('.').length - 1];
			var primaryName = doc_document_to_doc_revision$latest_revision.original_filename.split('.')[0];
			fileLocation = plugins.file.createTempFile(primaryName, '.' + ext);
		}
		else {
			fileLocation = plugins.file.showFileSaveDialog(doc_document_to_doc_revision$latest_revision.original_filename, i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'));
		}
		
		if (!fileLocation)
			return;
		
		if (scopes.svyProperties.getPropertyValue('document_management_tracked_checkout'))
			if (fileLocation.exists()) {
				option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'), 
						i18n.getI18NMessage('i18n:svy.fr.dlg.override_existing_document'), 
						i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
				if (!option || option == i18n.getI18NMessage('i18n:svy.fr.lbl.no'))
					return;
			}
		
		if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {		// When document is in database	
			if (databaseManager.hasRecords(revisionRec.doc_revision_to_doc_document_binary)) {// Validate binary file
				var docByte = revisionRec.doc_revision_to_doc_document_binary.document_binary;
				plugins.file.writeFile(fileLocation, docByte);
				foundset.is_checked_out = 1;
				revisionRec.checked_out_datetime = application.getServerTimeStamp();
				revisionRec.checked_out_by_user = globals.svy_sec_lgn_user_id;
			}
		}
		else {																					// When file is in file system
			plugins.file.streamFilesFromServer(fileLocation, globals.svy_doc_getServerFileName(revisionRec));
			foundset.is_checked_out = 1;
			revisionRec.checked_out_datetime = application.getServerTimeStamp();
			revisionRec.checked_out_by_user = globals.svy_sec_lgn_user_id;
		}
		
		if (scopes.svyProperties.getPropertyValue('document_management_tracked_checkout')) {				// Check out to temporary location
		
			scopes.modUtils$IO.openFileWithDefaultViewer(fileLocation);
			globals.svy_doc_tracked_checkout_file = fileLocation.getAbsolutePath();
			lastModified = new Date(fileLocation.lastModified());
			checkedOutRevId = doc_document_to_doc_revision$latest_revision.doc_revision_id;
			globals.svy_doc_is_tracked_doc_checked_out = true;

			plugins.scheduler.removeJob('TrackedDocCheckOut');							// Remove scheduler to track checked out Document
			plugins.scheduler.addJob('TrackedDocCheckOut', new Date(), trackedCheckOutCallback, 5000);
			globals.svy_doc_tracked_checkout_document_id = doc_document_id;
		}
		
		//save updated records
		databaseManager.saveData(foundset);
		databaseManager.saveData(revisionRec);
		
	}
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.latest_revision_not_found'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/**
 * @properties={typeid:24,uuid:"709B7017-EF26-46F7-9C5C-F03C53D9D4E3"}
 */
function trackedCheckOutCallback () {
	var jsFile = plugins.file.createFile(globals.svy_doc_tracked_checkout_file);
	
	if (jsFile.lastModified().getTime() > lastModified.getTime() && !messageOnDisplay) {
		messageOnDisplay = true;
		var option = globals.DIALOGS.showQuestionDialog('Check In', 'The last checked out document is modified. Will you like to check in the modified document ?', 'Yes', 'No');
		
		if (option && option == 'Yes') {
			
			/** @type {plugins.file.JSFile[]} */
			var param = [jsFile];
			
			/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
			var fs = databaseManager.getFoundSet('db:/svy_framework/doc_document');
			fs.loadRecords(globals.svy_doc_tracked_checkout_document_id);
			var fileNameBck = fs.doc_document_to_doc_revision$latest_revision.original_filename;
			checkinCallback(param);
			
			fs.doc_document_to_doc_revision$latest_revision.original_filename = fileNameBck;
			databaseManager.saveData(fs.doc_document_to_doc_revision);
			
			plugins.scheduler.removeJob('TrackedDocCheckOut');								// Remove scheduler to track checked out Document
			checkedOutRevId = null;
			globals.svy_doc_tracked_checkout_document_id = null;
			globals.svy_doc_is_tracked_doc_checked_out = false;
		}
		
		messageOnDisplay = false;
		lastModified = new Date(jsFile.lastModified());
	}

}
