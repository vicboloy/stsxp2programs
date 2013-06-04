/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"EB0E2C21-C9E2-4C1F-B60C-C658DFD756B2"}
 */
var _checkedOutRevId = null;

/**
 *  @type {Date}
 *  
 * @properties={typeid:35,uuid:"3AFD4CA9-9C66-4029-A843-D107BE07BA43",variableType:93}
 */
var _lastModified = null;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"A1F329AA-9FCE-4B2A-8E4A-BF75B04E0979",variableType:-4}
 */
var _messageOnDisplay = false;

/**
 * Method to be attached to check out button
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4634C262-62C1-4531-BE1E-6895ABDF82D0"}
 * @AllowToRunInFind
 */
function checkOut (event) {
	
	var _docRec = foundset.doc_revision_to_doc_document;
	if (!_docRec)
		return;
	
	databaseManager.saveData(_docRec.doc_document_to_doc_revision)
		
	if (databaseManager.hasRecords(_docRec.doc_document_to_doc_revision$latest_revision)) {
		var _dupRevision = _docRec.doc_document_to_doc_revision$latest_revision;
		var _option = null;
		
		// Only allow the latest revision for check out
		if (_dupRevision.revision_number != foundset.revision_number) {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.latest_revision_can_be_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		
		if (_docRec.is_checked_out && _dupRevision.checked_out_by_user != globals.svy_sec_lgn_user_id) {																		// When document already checked out by some user
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.document_already_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		else if (_docRec.is_checked_out && _dupRevision.checked_out_by_user == globals.svy_sec_lgn_user_id) {																		// When document alreday checked out by some user
			_option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'),
				i18n.getI18NMessage('i18n:svy.fr.dlg.document_undo_checkout'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			if (_option && _option == i18n.getI18NMessage('i18n:svy.fr.lbl.yes')) {
				_docRec.is_checked_out = 0;
				_dupRevision.checked_out_by_user = null;
				_dupRevision.checked_out_datetime = null;
				
				plugins.scheduler.removeJob('TrackedDocCheckOut');
				globals.svy_doc_tracked_checkout_document_id = null;
				globals.svy_doc_is_tracked_doc_checked_out = false;
			}
			
			return;
		}		
				
		var _fileLocation = plugins.file.showFileSaveDialog(original_filename, i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'));
		if (!_fileLocation)
			return;
		
		if (_fileLocation.exists()) {
			_option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.override_existing_document'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			if (!_option || _option == i18n.getI18NMessage('i18n:svy.fr.lbl.no'))
				return;
		}
			
		if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {		// When document is in database
			if (databaseManager.hasRecords(doc_revision_to_doc_document_binary)) {// Validate binary file
				var _byte = doc_revision_to_doc_document_binary.document_binary;
				plugins.file.writeFile(_fileLocation, _byte);
				_docRec.is_checked_out = 1;
				checked_out_datetime = application.getServerTimeStamp();
				checked_out_by_user = globals.svy_sec_lgn_user_id;
			}
		}
		else {																					// When file is in file system
			plugins.file.streamFilesFromServer(_fileLocation, globals.svy_doc_getServerFileName(foundset.getSelectedRecord()));
			_docRec.is_checked_out = 1;
			checked_out_datetime = application.getServerTimeStamp();
			checked_out_by_user = globals.svy_sec_lgn_user_id;
		}
	}
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.latest_revision_not_found'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/**
 * Method to be attached to check in button
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B9876151-D931-4311-A409-1045D78E344A"}
 * @AllowToRunInFind
 */
function checkIn (event) {
	
	var _docRec = foundset.doc_revision_to_doc_document;
	if (!_docRec)
		return;
	
	// When document is not checked out, don't allow to check in
	if (!_docRec.is_checked_out) {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkin_revision'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin_not_allowed'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	
	databaseManager.saveData(_docRec.doc_document_to_doc_revision);
	databaseManager.recalculate(_docRec.getSelectedRecord());									// Recalculate the record
	
	if (databaseManager.hasRecords(_docRec.doc_document_to_doc_revision$latest_revision)) {
		
		var _dupRevision = _docRec.doc_document_to_doc_revision$latest_revision;
		
		if (_dupRevision.doc_revision_id != doc_revision_id)
			return;
		
		if (!_docRec.is_checked_out || (_docRec.is_checked_out && checked_out_by_user == globals.svy_sec_lgn_user_id)) {
			
			var _filesObj = plugins.file.showFileOpenDialog(1, null, false, globals.svy_doc_getDocumentFilter(), checkinCallback, i18n.getI18NMessage('i18n:svy.fr.dlg.checkin_revision'));
			if (!_filesObj)
				return;
		}
		else {			
			if (revision_by_user != globals.svy_sec_lgn_user_id)
				globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkin_revision'), 
					 i18n.getI18NMessage('i18n:svy.fr.dlg.checkin_allowed_for_only_checkedout_user'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
	}
}

/**
 * Method to be attached to the download button
 * @param {JSEvent} event
 * @param {JSRecord<db:/svy_framework/doc_revision>} [record] The revision record to be downloaded
 *
 * @properties={typeid:24,uuid:"71BFA753-7E9E-4FDD-BC37-799B86B8A551"}
 */
function downloadCurrentRevision (event, record) {	
	
	if (record == undefined)
		record = foundset.getSelectedRecord();
	
	var _fileLocation = plugins.file.showFileSaveDialog(record.original_filename, i18n.getI18NMessage('i18n:svy.fr.dlg.download_revision'));
	if (!_fileLocation)
		return;
	
	if (_fileLocation.exists()) {
		var _option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.download_revision'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.override_existing_document'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
		if (!_option || _option == i18n.getI18NMessage('i18n:svy.fr.lbl.no'))
			return;
	}
	
	if (scopes.svyProperties.getPropertyValueAsBoolean('document_management_in_database')) {		// When file is in database
		if (databaseManager.hasRecords(record.doc_revision_to_doc_document_binary)) {				// Validate binary file
			var _byte = record.doc_revision_to_doc_document_binary.document_binary;
			plugins.file.writeFile(_fileLocation, _byte);
		}
	}
	else {																					// When file is in file system
		plugins.file.streamFilesFromServer(_fileLocation, globals.svy_doc_getServerFileName(record));
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile[]} _files
 *
 * @properties={typeid:24,uuid:"0657AA45-557F-4156-984B-91881A356CCB"}
 */
function checkinCallback(_files) {
	// Check if any file is selected
	if (!_files)
		return false;
	
	var _docRec = foundset.doc_revision_to_doc_document;
	
	/*	
	 * The requirement for certain document types is too heavy
	 * Added a property document_management_allow_all_file_types to configure that
	 */
	if (!scopes.svyProperties.getPropertyValueAsBoolean("document_management_allow_all_file_types")) {
		var _docTypeId = getDocumentType(_files[0].getName());							// get the document id
		if (!_docTypeId) {																// Document type not supported
			
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.check_in'),
				i18n.getI18NMessage('i18n:svy.fr.dlg.doc_type_not_supported'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return false;
		}
	}
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var fs = _docRec;
	
	if (scopes.svyProperties.getPropertyValue('document_management_tracked_checkout')) {
		fs = databaseManager.getFoundSet(foundset.doc_revision_to_doc_document.getDataSource())
		fs.loadRecords(globals.svy_doc_tracked_checkout_document_id);
		_docRec = fs;
	}
	
	// Show revision reason dialog
	forms.svy_doc_revision_reason_dlg.foundset.loadRecords(fs);
	var _title =  i18n.getI18NMessage('i18n:svy.fr.dlg.checkin_reason') ? i18n.getI18NMessage('i18n:svy.fr.dlg.checkin_reason') : 'Check in reason';
	var winName = 'revision_reason' + application.getUUID().toString();
	globals.DIALOGS.showFormInModalDialog(forms.svy_doc_revision_reason_dlg, null, null, null, null, _title, true, false, winName);
	
	if (!forms.svy_doc_revision_reason_dlg.buttonClicked || forms.svy_doc_revision_reason_dlg.buttonClicked == 'cancel')
		return null;
	
	// UnSet checked out flag	
	_docRec.is_checked_out = 0;
	
	// Copy files to Remote server machine
	for (var fileCnt = 0 ; fileCnt < _files.length ; fileCnt++) {	
		
		// Set data in document table
		var _thisFileName = '';
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
			_thisFileName = _files[fileCnt].getName();
		else {
			var path = utils.stringReplace(_files[fileCnt]+'','/', '\\');
			_thisFileName = path.split('\\')[path.split('\\').length - 1];
		}			
		
		// upload file
		var _file = _files[0];
		var _uploadTo = scopes.svyProperties.getPropertyValue('document_management_in_database')
		
		if (_uploadTo) {								// Create revision
		
			var _revision = null;
			if (scopes.svyProperties.getPropertyValue('document_management_revision'))
				_revision = _docRec.doc_document_to_doc_revision.getRecord(_docRec.doc_document_to_doc_revision.newRecord(false));
			else {
				if (!databaseManager.hasRecords( _docRec.doc_document_to_doc_revision))
					 _docRec.doc_document_to_doc_revision.newRecord(false);
				
				_revision = _docRec.doc_document_to_doc_revision.getSelectedRecord();
				if (databaseManager.hasRecords(_revision.doc_revision_to_doc_document_binary))				// Remove binary file
					_revision.doc_revision_to_doc_document_binary.deleteAllRecords();
				if (databaseManager.hasRecords(_revision.doc_revision_to_doc_document_thumbnail))			// Remove thumbnail file
					_revision.doc_revision_to_doc_document_thumbnail.deleteAllRecords();
				
				globals.onRecordDelete_doc_revision(_revision);
			}
			
			_revision.revision_number = _docRec.doc_document_to_doc_revision.getSize();
			_revision.original_filename = _thisFileName;
			_revision.revision_by_user = globals.svy_sec_lgn_user_id;
			_revision.revision_reason = forms.svy_doc_revision_reason_dlg.vRevisionReason;
			
			if (_revision.doc_revision_to_doc_document_binary) {					// Load Binary file
			
				var _binary = _revision.doc_revision_to_doc_document_binary.getRecord(_revision.doc_revision_to_doc_document_binary.newRecord(false));
				_binary.document_binary = _file.getBytes();
			}
			
			if (_file.getContentType() && _file.getContentType().split('/')[0] == 'image' && plugins.images && 
				_revision.doc_revision_to_doc_document_thumbnail) {						// Load Binary Thumbnail
			
				var _thumbnail = _revision.doc_revision_to_doc_document_thumbnail.getRecord(_revision.doc_revision_to_doc_document_thumbnail.newRecord(false));
				_thumbnail.document_thumbnail = plugins.images.getImage(_file.getBytes()).resize(200,200);
			}
		}
		else {
			// Upload file to file system
			uploadToFileSystem(_file, _thisFileName, _docRec);
		}
		
		plugins.scheduler.removeJob('TrackedDocCheckOut');
		globals.svy_doc_tracked_checkout_document_id = null;
		globals.svy_doc_is_tracked_doc_checked_out = false;
	}
	
	return true;
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} _file
 * @param {String} _thisFileName
 * @param {JSFoundset<db:/svy_framework/doc_document>} _docRec
 *
 * @properties={typeid:24,uuid:"F9FB32CA-8F0E-4984-A96F-4FB77086CEFA"}
 */
function uploadToFileSystem(_file, _thisFileName, _docRec) {
	
	var _revision = null;
	if (scopes.svyProperties.getPropertyValue('document_management_revision'))
		_revision = _docRec.doc_document_to_doc_revision.getRecord(_docRec.doc_document_to_doc_revision.newRecord(false));
	else {
		if (!databaseManager.hasRecords( _docRec.doc_document_to_doc_revision))
			 _docRec.doc_document_to_doc_revision.newRecord(false);
		
		_revision = _docRec.doc_document_to_doc_revision.getSelectedRecord();
		if (databaseManager.hasRecords(_revision.doc_revision_to_doc_document_binary))				// Remove binary file
			_revision.doc_revision_to_doc_document_binary.deleteAllRecords();
		if (databaseManager.hasRecords(_revision.doc_revision_to_doc_document_thumbnail))			// Remove thumbnail file
			_revision.doc_revision_to_doc_document_thumbnail.deleteAllRecords();
		
		globals.onRecordDelete_doc_revision(_revision);
	}
	
	_revision.revision_number = _docRec.doc_document_to_doc_revision.getSize();
	_revision.original_filename = _thisFileName;
	_revision.revision_by_user = globals.svy_sec_lgn_user_id;
	_revision.revision_reason = forms.svy_doc_revision_reason_dlg.vRevisionReason;
	
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		plugins.file.writeFile(plugins.file.createFile(plugins.file.getDefaultUploadLocation() + globals.svy_doc_getServerFileName(_revision)), _file.getBytes(), _file.getContentType())
	}
	else
		plugins.file.streamFilesToServer(_file, globals.svy_doc_getServerFileName(_revision));				// Upload done to file system
	
	if (_file.getContentType() && _file.getContentType().split('/')[0] == 'image' && plugins.images && 
	_revision.doc_revision_to_doc_document_thumbnail) {										// Load Binary Thumbnail
	
		var _thumbnail = _revision.doc_revision_to_doc_document_thumbnail.getRecord(_revision.doc_revision_to_doc_document_thumbnail.newRecord(false));
		_thumbnail.document_thumbnail = plugins.images.getImage(_file.getBytes()).resize(200,200);
	}
	
	// Save revision
	databaseManager.saveData(_revision);
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E0C5D3DD-5ABB-4A9E-BEA1-87F1E82BA1F2"}
 */
function revisionPreview (event) {
	
	// Get the file for preview
	if (scopes.svyProperties.getPropertyValueAsBoolean('document_management_in_database')) {		// When file is in database
	
		if (databaseManager.hasRecords(doc_revision_to_doc_document_binary)) {
			forms.svy_doc_revision_preview_dlg.vRevisionPreview = forms.svy_doc_revision_left_sub_dtl.foundset.doc_revision_to_doc_document_binary.document_binary;
			forms.svy_doc_revision_preview_dlg.vRevisonRec = forms.svy_doc_revision_left_sub_dtl.foundset.getSelectedRecord();
		}
		else {
			forms.svy_doc_revision_preview_dlg.vRevisionPreview = null;
			forms.svy_doc_revision_preview_dlg.vRevisonRec = null;
		}
			
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
		var _ext = original_filename.split('.')[original_filename.split('.').length - 1];
		var _tempFile = plugins.file.createTempFile('','.' + _ext);
		forms.svy_doc_revision_preview_dlg.vRevisonRec = null;
		plugins.file.streamFilesFromServer(_tempFile, globals.svy_doc_getServerFileName(foundset.getSelectedRecord()), previewCallback);
	}	
}

/**
 * Method called when a file is downloaded from file system of the server
 * 
 * @param {plugins.file.JSFile} _tempFile File downloaded
 * 
 * @properties={typeid:24,uuid:"8BADCFEC-1645-40A8-B0AF-5C880B71A1D1"}
 */
function previewCallback (_tempFile) {
	
	if (_tempFile.getContentType() && _tempFile.getContentType().split('/')[0] == 'image')
		forms.svy_doc_revision_preview_dlg.vRevisionPreview = _tempFile.getBytes();
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

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"0D4E4B25-1389-4DE4-A6FF-E2BAFE08C506"}
 */
function dc_delete(_event, _triggerForm) {
	// Delete revision. Allowed when the last check in user tries to remove the revision and no other check outs are done.
	var _docRec = foundset.doc_revision_to_doc_document;
	if (!_docRec)
		return;	
	
	if (!foundset.getSize())
		return;
	
	// Refresh revision aggregation
	databaseManager.saveData(_docRec.doc_document_to_doc_revision)
		
	if (databaseManager.hasRecords(_docRec.doc_document_to_doc_revision$latest_revision)) {
		var _dupRevision = _docRec.doc_document_to_doc_revision$latest_revision;
		
		// Only allow the latest revision for check out
		if (foundset.revision_number == 1) {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.delete_latest_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.base_revision_should_not_removed'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		
		// Check if the last check in user is the currently logged in user
		if (!globals.svy_doc_isSuperAdminOrAdmin() && _dupRevision.revision_by_user != globals.svy_sec_lgn_user_id) {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.delete_latest_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.only_last_checkedin_user_can_remove'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		
		// Check if the last check in revision is already checked out
		if (_docRec.is_checked_out) {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.delete_latest_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.doc_already_checkedout'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		
		// Delete Revision
		_super.dc_delete(_event,_triggerForm);
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"4A4F9178-7AC0-43B4-B611-73F506EACFD5"}
 */
function onRenderCheckIn(event) {
	
	/** @type {JSRecord<db:/svy_framework/doc_revision>} */
	var _rec = event.getRecord();
	
	/** @type {JSRecord<db:/svy_framework/doc_document>} */
	var _docRec = _rec.doc_revision_to_doc_document;
	
	databaseManager.saveData(_docRec.doc_document_to_doc_revision);
	
	if ((databaseManager.hasRecords(_docRec.doc_document_to_doc_revision$latest_revision) && _rec.revision_number < _docRec.doc_document_to_doc_revision$latest_revision.revision_number) 
			|| (!_docRec.is_checked_out)
			|| (_docRec.is_checked_out && _rec.checked_out_by_user != globals.svy_sec_lgn_user_id)) {
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
 * @properties={typeid:24,uuid:"77A27F3D-102A-4EA2-8726-861C899CB24D"}
 */
function onRenderCheckOut(event) {
	
	/** @type {JSRecord<db:/svy_framework/doc_revision>} */
	var _rec = event.getRecord();
	
	/** @type {JSRecord<db:/svy_framework/doc_document>} */
	var _docRec = _rec.doc_revision_to_doc_document;
	
	databaseManager.saveData(_docRec.doc_document_to_doc_revision);
	
	if (_docRec.is_checked_out) {
		if (_rec.checked_out_by_user == globals.svy_sec_lgn_user_id && _rec.revision_number == _docRec.doc_document_to_doc_revision$latest_revision.revision_number)
			event.getRenderable().enabled = true;
		else
			event.getRenderable().enabled = false;
	}
	else {
		if (_rec.revision_number < _docRec.doc_document_to_doc_revision$latest_revision.revision_number)
			event.getRenderable().enabled = false;
		else
			event.getRenderable().enabled = true;
	}
}

/**
 * 
 * @param {String} _docName
 * @return {String}
 *
 * @properties={typeid:24,uuid:"CC58ED26-629C-425F-A14A-4C5256FAF3F2"}
 */
function getDocumentType( _docName) {
	var _parts = _docName.split('.');
	scopes.svyDocumentManagement$model.selectedFileExtension = _parts[_parts.length - 1].toLowerCase();
	
	if (!scopes.svyDocumentManagement$model.selectedFileExtension)
		return null;
	
	if (databaseManager.hasRecords(_to_doc_document_type))
		return _to_doc_document_type.doc_document_type_id.toString();
	else 
		return null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"44B93A0F-7B4C-4D0C-B47C-0D4750F0766E"}
 */
function checkOutTracked(event) {
	
	var _docRec = foundset.doc_revision_to_doc_document;
	if (!_docRec)
		return;
	
	if (globals.svy_doc_is_tracked_doc_checked_out && _checkedOutRevId != doc_revision_id && !_docRec.is_checked_out) {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.one_doc_already_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	
	databaseManager.saveData(_docRec.doc_document_to_doc_revision)
		
	if (databaseManager.hasRecords(_docRec.doc_document_to_doc_revision$latest_revision)) {
		var _dupRevision = _docRec.doc_document_to_doc_revision$latest_revision;
		var _option = null;
		
		// Only allow the latest revision for check out
		if (_dupRevision.revision_number != foundset.revision_number) {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.latest_revision_can_be_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		
		if (_docRec.is_checked_out && _dupRevision.checked_out_by_user != globals.svy_sec_lgn_user_id) {																		// When document already checked out by some user
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.document_already_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		else if (_docRec.is_checked_out && _dupRevision.checked_out_by_user == globals.svy_sec_lgn_user_id) {																		// When document alreday checked out by some user
			_option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.document_undo_checkout'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			if (_option && _option == i18n.getI18NMessage('i18n:svy.fr.lbl.yes')) {
				_docRec.is_checked_out = 0;
				_dupRevision.checked_out_by_user = null;
				_dupRevision.checked_out_datetime = null;
				
				plugins.scheduler.removeJob('TrackedDocCheckOut');
				globals.svy_doc_tracked_checkout_document_id = null;
				globals.svy_doc_is_tracked_doc_checked_out = false;
			}
			
			return;
		}		
				
		var _fileLocation = null;
		
		if (scopes.svyProperties.getPropertyValue('document_management_tracked_checkout')) {				// Check out to temporary location
			var _ext = original_filename.split('.')[original_filename.split('.').length - 1];
			var primaryName = original_filename.split('.')[0];
			_fileLocation = plugins.file.createTempFile(primaryName,'.' + _ext);
		}
		else {
			_fileLocation = plugins.file.showFileSaveDialog(original_filename, i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'));
		}
		if (!_fileLocation)
			return;
		
		if (scopes.svyProperties.getPropertyValue('document_management_tracked_checkout'))
			if (_fileLocation.exists()) {
				_option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_document'), 
					i18n.getI18NMessage('i18n:svy.fr.dlg.override_existing_document'), 
					i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
				if (!_option || _option == i18n.getI18NMessage('i18n:svy.fr.lbl.no'))
					return;
			}
			
		if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {		// When document is in database
			if (databaseManager.hasRecords(doc_revision_to_doc_document_binary)) {// Validate binary file
				var _byte = doc_revision_to_doc_document_binary.document_binary;
				plugins.file.writeFile(_fileLocation, _byte);
				_docRec.is_checked_out = 1;
				checked_out_datetime = application.getServerTimeStamp();
				checked_out_by_user = globals.svy_sec_lgn_user_id;
			}
		}
		else {																					// When file is in file system
			plugins.file.streamFilesFromServer(_fileLocation, globals.svy_doc_getServerFileName(foundset.getSelectedRecord()));
			_docRec.is_checked_out = 1;
			checked_out_datetime = application.getServerTimeStamp();
			checked_out_by_user = globals.svy_sec_lgn_user_id;
		}
		
		if (scopes.svyProperties.getPropertyValue('document_management_tracked_checkout')) {				// Check out to temporary location
			scopes.modUtils$IO.openFileWithDefaultViewer(_fileLocation);
			
			globals.svy_doc_tracked_checkout_file = _fileLocation.getAbsolutePath();
			_lastModified = new Date(_fileLocation.lastModified());
			_checkedOutRevId = doc_revision_id;

			plugins.scheduler.removeJob('TrackedDocCheckOut');
			plugins.scheduler.addJob('TrackedDocCheckOut', new Date(), TrackedCheckOutCallback, 5000);
			globals.svy_doc_tracked_checkout_document_id = _docRec.doc_document_id;
			globals.svy_doc_is_tracked_doc_checked_out = true;
		}

		
	}
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.checkout_revision'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.latest_revision_not_found'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
}

/**
 * @properties={typeid:24,uuid:"345CE3C1-AAE4-4C0A-A1EA-7E2FA34C03E9"}
 */
function TrackedCheckOutCallback () {
	var _jsFile = plugins.file.createFile(globals.svy_doc_tracked_checkout_file);
	
	if (_jsFile.lastModified().getTime() > _lastModified.getTime() && !_messageOnDisplay) {
		_messageOnDisplay = true;
		var _option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.check_in'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.checkin_last_checked_out_doc'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
		
		if (_option && _option == i18n.getI18NMessage('i18n:svy.fr.lbl.yes')) {
			
			/** @type {plugins.file.JSFile[]} */
			var _param = [_jsFile];
			
			/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
			var fs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/doc_document');
			fs.loadRecords(globals.svy_doc_tracked_checkout_document_id);
			var _fileNameBck = fs.doc_document_to_doc_revision$latest_revision.original_filename;
			
			checkinCallback(_param);
			original_filename = _fileNameBck;
			
			plugins.scheduler.removeJob('TrackedDocCheckOut');
			globals.svy_doc_tracked_checkout_document_id = null;
			globals.svy_doc_is_tracked_doc_checked_out = false;
		}
		
		_messageOnDisplay = false;
		_lastModified = new Date(_jsFile.lastModified());
	}

}

/** *
 * @param _method
 *
 * @properties={typeid:24,uuid:"6D27AFD1-FE28-495B-A03E-BAF726F329DA"}
 * @AllowToRunInFind
 */
function isMethodAllowed(_method) {
	var _allowed = true
	
	if (foundset && foundset.getSize() > 0) {
		
		/** @type {JSRecord<db:/svy_framework/doc_revision>} */
		var _rec = foundset.getSelectedRecord();
		
		if (!_rec)
			return false;
		
		/** @type {JSRecord<db:/svy_framework/doc_document>} */
		var _docRec = _rec.doc_revision_to_doc_document;
		
		databaseManager.saveData(_docRec.doc_document_to_doc_revision);
		
		if (_method == 'checkIn') {
			if ((databaseManager.hasRecords(_docRec.doc_document_to_doc_revision$latest_revision) && 
					_rec.revision_number < _docRec.doc_document_to_doc_revision$latest_revision.revision_number) 
					|| (!_docRec.is_checked_out)
					|| (_docRec.is_checked_out && _rec.checked_out_by_user != globals.svy_sec_lgn_user_id))
				_allowed = false;
			else
				_allowed = true;
		}
		else if (_method == 'checkOut') {
			
			if (_docRec.is_checked_out) {
				if (_rec.checked_out_by_user == globals.svy_sec_lgn_user_id && 
						_rec.revision_number == _docRec.doc_document_to_doc_revision$latest_revision.revision_number)
					_allowed = true;
				else
				_allowed = false;
			}
			else {
				if (_rec.revision_number < _docRec.doc_document_to_doc_revision$latest_revision.revision_number)
					_allowed = false;
				else
				_allowed = true;
			}
		}
	}
	else
		_allowed = false;
		
	// Due to framework issue always enable checkin button
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
 * @properties={typeid:24,uuid:"1F9AEDD3-DE40-441D-B25F-1004C0665DC2"}
 */
function onShowForm(firstShow, event) {
	
	return _super.onShowForm(firstShow, event)
}

/**
*
* @param _event
* @param _triggerForm
* @param _toolbarForm
*
* @properties={typeid:24,uuid:"0B09060E-AE45-4044-BAC4-A566C806C753"}
*/
function dc_edit(_event, _triggerForm, _toolbarForm) {
	
	var _docRec = foundset.doc_revision_to_doc_document;
	if (_docRec && databaseManager.hasRecords(_docRec.doc_document_to_doc_revision$latest_revision)) {
		var _dupRevision = _docRec.doc_document_to_doc_revision$latest_revision;
		// Check if the last check in user is the currently logged in user
		if (!globals.svy_doc_isSuperAdminOrAdmin() && 
				(_dupRevision.revision_by_user != globals.svy_sec_lgn_user_id && _docRec.user_created_id != globals.svy_sec_lgn_user_id)) {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.delete_latest_revision'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.only_last_checkedin_user_can_edit'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		}
		else
			_super.dc_edit(_event, _triggerForm, _toolbarForm);	
	}	
}
