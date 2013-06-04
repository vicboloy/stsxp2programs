/**
 * @type {String}
 * 
 * @deprecated use scopes.svyDocumentManagement$model.docType instead
 *
 * @properties={typeid:35,uuid:"D0B7EF38-9A24-45E3-B726-13D36AE6BDF5"}
 */
var svy_doc_type = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"94CB580F-916E-46C7-B85B-34F11F17D231",variableType:4}
 */
var svy_doc_group_document_security = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FD98FCCF-4985-400B-B092-79228D6E77D8",variableType:4}
 */
var svy_doc_group_folder_security = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E0F2FE47-AE45-42A6-B9FB-66B93D37EFD1"}
 */
var svy_doc_group_selection_form = null;

/**
 * Is true when a tracked document is checked out
 * 
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"5321BB0A-6891-4171-A405-7B2742A36325",variableType:-4}
 */
var svy_doc_is_tracked_doc_checked_out = false;

/**
 * @type {Number}
 * 
 * @deprecated use scopes.svyDocumentManagement$model.documentSecurityPublic instead
 *
 * @properties={typeid:35,uuid:"B0ECB42F-9ACA-4C88-872F-AEA0EF3AED32",variableType:4}
 */
var svy_doc_public_document_security = 2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"44A42517-647C-4538-B7ED-F9F2539FB8DC",variableType:4}
 */
var svy_doc_public_folder_security = 0;

/**
 * @type {String}
 * 
 * @deprecated use scopes.svyDocumentManagement$model.selectedFolder instead
 *
 * @properties={typeid:35,uuid:"5C77DC83-E8A6-4A95-B12D-9729AC590236"}
 */
var svy_doc_selected_folder = null;

/**
 * @type {String}
 * 
 * @deprecated use scopes.svyDocumentManagement$model.selectedFileExtension instead
 *
 * @properties={typeid:35,uuid:"A4F1EDB7-4351-45DA-BB53-B4538B9EB187"}
 */
var svy_doc_selectedFileExtension = null;

/**
 * This variable is used to keep track of the checked out docuement id.
 * 
 * @type {UUID}
 *
 * @properties={typeid:35,uuid:"4366F55E-FEAE-4382-A3DB-B85E78A2B418",variableType:-4}
 */
var svy_doc_tracked_checkout_document_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18981E4C-3D73-48BC-B173-8E04810CDA73"}
 */
var svy_doc_tracked_checkout_file = null;

/**
 * Used to distinguish whether normal folder view is ON, or the program documents view is ON
 * Values=program/folder
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DCA3008B-EEB9-45A8-976A-6D88568040BB"}
 */
var svy_doc_view_type = null;

/**
 * This method will build a selection dialog for the specified foundset
 * 
 * @author Vincent Schuurhof
 * @since 2011-07-09
 * 
 * @param {String} dataSource the data source on which the selection dialog will be based
 * @param {JSDataSet} displayDataSet the data set with primary keys which will be used to display a foundset
 * @param {Array<String>} returnDataProviders the data providers which will be returned after selection
 * @param {Array<String>} displayDataProviders the data providers which should be displayed in the dialog
 * @param {Array<String>} displayDataProviderTitles the title of each displayed data provider
 * @param {Array<Number>} displayDataProvidersWidth the width of the each displayed data provider
 * @param {Number} dialogHeight the height of the selection dialog
 * @param {Boolean} multiSelect flag if multiple records can be selected
 * 
 * @properties={typeid:24,uuid:"1856EFA0-AECF-499F-9A74-405E0D54477A"}
 */
function svy_doc_showSelectionDocDialog(dataSource, displayDataSet, returnDataProviders, displayDataProviders, displayDataProviderTitles, displayDataProvidersWidth, dialogHeight, multiSelect) {
	if (displayDataSet.getMaxRowIndex() == 0) {
		globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.no_records_to_select'), i18n.getI18NMessage('svy.fr.lbl.ok'));
		return;
	}
	
	var tableName = databaseManager.getDataSourceTableName(dataSource);
	var formName = 'svy_doc_selection_dialog_' + tableName;
	
	if (history.removeForm(formName)) {
		solutionModel.removeForm(formName);
	}
	
	var form = solutionModel.cloneForm(formName, solutionModel.getForm('svy_doc_selection_dialog'));
	form.dataSource = dataSource;
	form.styleName = 'security';
	
	var x = 0;
	
	// if multi-select then add a selection checkbox
	if (multiSelect) {
		var _dn = solutionModel.getDataSourceNode(dataSource)
		_dn.removeCalculation('is_selected')
		_dn.newCalculation('function is_selected() { return; }', JSVariable.INTEGER)
		
		var selectionField = form.newField('is_selected', JSField.CHECKS, x, 22, 20, 20);
		selectionField.name = 'is_selected';
		selectionField.borderType = 'EmptyBorder, 0, 0, 0, 0';
		selectionField.transparent = true;
		selectionField.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.SOUTH;
		
		var selectionHeader = form.newLabel(null, x, 0, 20, 20);
		selectionHeader.labelFor = 'is_selected';
		selectionField.styleClass = 'table';
		selectionHeader.transparent = false;
		x += 20;
	}
	
	// add data providers to the form
	for (var i = 0; i < displayDataProviders.length; i++) {
		var field = form.newField(displayDataProviders[i], JSField.TEXT_FIELD, x, 20 , displayDataProvidersWidth[i], 20);
		field.name = displayDataProviders[i];
		field.editable = false;
		field.styleClass = 'table';
		field.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST | SM_ANCHOR.WEST;
		
		var header = form.newLabel(displayDataProviderTitles[i], x, 0, displayDataProvidersWidth[i], 20);
		header.labelFor = displayDataProviders[i];
		header.styleClass = 'table';
		header.horizontalAlignment = SM_ALIGNMENT.LEFT;
		header.transparent = false;
		header.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST | SM_ANCHOR.WEST;
		
		x += displayDataProvidersWidth[i];
	}
	
	forms[formName].controller.recreateUI();
	forms[formName].foundset.loadRecords(displayDataSet);
	
	if (multiSelect) {
		for (var j = 1; j <= forms[formName].foundset.getSize(); j++) {
			forms[formName].foundset.setSelectedIndex(j);
			forms[formName].foundset['is_selected'] = 0;
		}
	}
	// This loops checks the selected groups.
	if (multiSelect) {
		
		var k = 1;
		
		if (globals.svy_doc_group_selection_form == 'svy_doc_change_Permissions_dlg') {
			for (j = 1; j <= forms[formName].foundset.getSize(); j++) {
			forms[formName].foundset.setSelectedIndex(j);
				if(utils.hasRecords(forms[globals.svy_doc_group_selection_form].doc_folder_to_doc_security)){
					for(k = 1; k <= forms[globals.svy_doc_group_selection_form].doc_folder_to_doc_security.getSize(); k++){
						forms[globals.svy_doc_group_selection_form].doc_folder_to_doc_security.setSelectedIndex(k);
						
						if(forms[globals.svy_doc_group_selection_form].doc_folder_to_doc_security['sec_group_id'] == 
							forms[formName].foundset['group_id'])
							forms[formName].foundset['is_selected'] = 1;
					}
				}
			
			}
		}
		else if (globals.svy_doc_group_selection_form == 'svy_doc_document_change_Permissions_dlg') {
			for (j = 1; j <= forms[formName].foundset.getSize(); j++) {forms.svy_doc_document_change_Permissions_dlg.doc_document_to_doc_security
				forms[formName].foundset.setSelectedIndex(j);
					if(utils.hasRecords(forms[globals.svy_doc_group_selection_form].doc_document_to_doc_security)){
						for(k = 1; k <= forms[globals.svy_doc_group_selection_form].doc_document_to_doc_security.getSize(); k++){
							forms[globals.svy_doc_group_selection_form].doc_document_to_doc_security.setSelectedIndex(k);
							
							if(forms[globals.svy_doc_group_selection_form].doc_document_to_doc_security['sec_group_id'] == 
								forms[formName].foundset['group_id'])
								forms[formName].foundset['is_selected'] = 1;
						}
					}
				
				}
			}
	}
		
	globals.DIALOGS.showFormInModalDialog(forms[formName], null, null, x, dialogHeight, i18n.getI18NMessage('svy.fr.lbl.selection'), true, false, 
			formName + '_' + application.getUUID().toString());
}

/**
 * @properties={typeid:24,uuid:"F6FE29B3-B915-40C2-B316-7442E8C98AD0"}
 */
function svy_doc_isSuperAdminOrAdmin() {
	
	if(utils.hasRecords(_to_sec_user$loggedin)){
		if(_to_sec_user$loggedin.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$loggedin.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.TENANT_MANAGER || _to_sec_user$loggedin.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER){
			return true;		
		}
		else
			return false;
	}
	return false;
}

/**
 * @param {String} _name the data 
 * 
 * @return {Array}
 * 
 * @deprecated not used anywhere
 * 
 * @properties={typeid:24,uuid:"C0AC39A4-70BC-4CC1-BAEE-853C1E394B57"}
 * @AllowToRunInFind
 */
function svy_doc_getProperty(_name) {
	return scopes.svyProperties.getPropertyValues(_name);
}

/**
 * @param {String|UUID} folderId The folder Id for which security needs to be checked
 * 
 * @properties={typeid:24,uuid:"90962D37-DC55-4E38-B7C0-86E71F56B9F6"}
 * @AllowToRunInFind
 */
function svy_doc_folderSecurityPermission(folderId) {
	
	// For super admin return always true.
	if(svy_doc_isSuperAdminOrAdmin())
		return true;
	
	/** @type {JSFoundSet<db:/svy_framework/doc_folder>} */
	var _folderFs = databaseManager.getFoundSet(globals.nav_db_framework,'doc_folder');
	_folderFs.find();
	_folderFs.doc_folder_id = folderId;
	_folderFs.search();
	
	// For public return always true.	
	var recPresent = 0;
	if(!_folderFs.security_level || _folderFs.security_level == globals.svy_doc_public_folder_security)
		return true;
	else{
		if(utils.hasRecords(_folderFs.doc_folder_to_doc_security)){
			// This loop through all the security records.
			for(var i = 0;i <= _folderFs.doc_folder_to_doc_security.getSize();i++){
				_folderFs.doc_folder_to_doc_security.setSelectedIndex(i);
				
				for(var j = 0;j <= _to_sec_user_in_group$logged_in.getSize();j++){
					_to_sec_user_in_group$logged_in.setSelectedIndex(j);
					
					// This loop loops through all the sec_in_user records.
					if(_folderFs.doc_folder_to_doc_security.sec_group_id && 
						_folderFs.doc_folder_to_doc_security.sec_group_id == _to_sec_user_in_group$logged_in.group_id
							){
						recPresent = 1;
						break;
					}
					
				}
									
			}
		}
		
		if(recPresent == 0){
			return false;
		}
			
		else{
			return true;
		}		
	}	
}

/**
 * Delete the file from file system when the revision is removed
 *
 * @param {JSRecord<db:/svy_framework/doc_revision>} record record that will be deleted
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4B66B9A8-5102-435A-B6ED-22916CB9489C"}
 */
function onRecordDelete_doc_revision(record) {
	
	if (scopes.svyProperties.getPropertyValue("document_management_in_database")) {
		
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
			plugins.file.deleteFile(plugins.file.getDefaultUploadLocation() + globals.svy_doc_getServerFileName(record))
		}
		else {
			record.original_filename.split('.')[record.original_filename.split('.').length - 1];
			
			var _remoteJs = plugins.file.convertToRemoteJSFile(globals.svy_doc_getServerFileName(record));
			_remoteJs.deleteFile();
		}
	}
	
	// return boolean to indicate success
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord<db:/svy_framework/doc_revision>} _revisionRec
 *
 * @properties={typeid:24,uuid:"D77A08A4-1AFD-4459-A636-50B8467DF398"}
 */
function svy_doc_getServerFileName(_revisionRec) {
	 var _ext = _revisionRec.original_filename.split('.')[_revisionRec.original_filename.split('.').length - 1];
	 
	 return '/' + globals.svy_sec_lgn_organization_id + '/' + _revisionRec.doc_revision_id + '.' + _ext;
}

/**
 * @properties={typeid:24,uuid:"BB161945-BAC2-4709-BEA3-326C7FD13D99"}
 * @AllowToRunInFind
 */
function svy_doc_documentSecurityPermission() {

	// If the logged In user is Admin or Super Admin load all documents
	
	if (globals.svy_doc_view_type == 'program') {
		forms.svy_doc_documents_tbl.foundset.loadRecords(forms.svy_doc_program_documents.foundset);
		return;
	}
	
	// For normal Folder view tab is on display
	if(globals.svy_doc_isSuperAdminOrAdmin()){
		forms.svy_doc_documents_tbl.foundset.loadAllRecords();
		return;
	}
	
	// Here it refreshes the foundset.
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var documentFs = forms.svy_doc_documents_tbl.foundset;
	if(documentFs.find()) {
		
		// Search for documents created by user
		documentFs.user_created_id  = globals.svy_sec_lgn_user_id;
		documentFs.doc_folder_id = scopes.svyDocumentManagement$model.selectedFolder;
		documentFs.organization_id = globals.svy_sec_lgn_organization_id;
		
		// Public documents
		documentFs.newRecord();
		documentFs.doc_folder_id = scopes.svyDocumentManagement$model.selectedFolder;
		documentFs.security_level = scopes.svyDocumentManagement$model.documentSecurityPublic;
		documentFs.organization_id = globals.svy_sec_lgn_organization_id;
		
		// Documents shared to currently logged in user's Group
		for (var  i = 1 ; i<= _to_sec_user_in_group$logged_in.getSize() ; i++) {
			var _rec = _to_sec_user_in_group$logged_in.getRecord(i);
			documentFs.newRecord();
			documentFs.doc_folder_id = scopes.svyDocumentManagement$model.selectedFolder;
			documentFs.organization_id = globals.svy_sec_lgn_organization_id;
			documentFs.doc_document_to_doc_security.sec_group_id = _rec.group_id;
		}
		
		documentFs.search();
	}
	
	// Load the foundset.
//	forms.svy_doc_documents_tbl.foundset.loadRecords(documentFs);
	
	if (!documentFs.getSize())
		forms.svy_doc_revision_tbl.foundset.clear()
	
}

/**
 * @return {Array}
 * 
 * @properties={typeid:24,uuid:"16DFCC12-D46F-4392-A58D-575E3EC2D9C6"}
 * @AllowToRunInFind
 */
function svy_doc_getDocumentFilter() {
	// Return the filter array for document uploads
	if (scopes.svyProperties.getPropertyValueAsBoolean("document_management_allow_all_file_types")) {
		return [];
	}
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document_type>} */
	var _docTypeFs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/doc_document_type');
	if (!_docTypeFs)
		return [];
	
	if (_docTypeFs.find()) {
		_docTypeFs.organization_id = globals.svy_sec_lgn_organization_id;
		if (!_docTypeFs.search()) {
			return null;
		}
	}
	
	var _arr = new Array();
	
	for (var i = 1; i <= _docTypeFs.getSize() ; i++){
		_arr.push(_docTypeFs.getRecord(i).extension)
	}
	_arr.unshift(_arr.join(', ')); // First element of the array should contain all the filtered data types 
	
	return _arr;
}

/**
 * 
 * Returns a JSFoundset of documents for the given record or the 
 * selected main record if no record is given
 * 
 * @param {JSRecord} [_record]
 * @return {JSFoundset<db:/svy_framework/doc_document>}
 * 
 * @author Patrick G. Ruhsert
 * @since 2012-02-21
 * 
 * @properties={typeid:24,uuid:"0FC0123D-3A5F-4D7A-B2E0-C3442AE3F282"}
 * @AllowToRunInFind
 */
function svy_doc_getDocumentFoundset(_record) {
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var _docFs = databaseManager.getFoundSet(globals.nav_db_framework,"doc_document");
	
	var _linkedTable;
	var _linkedId;
	
	if (_record) {
		// record given; get table and PK
		var _jsTable = databaseManager.getTable(_record);

		if (!_jsTable) {
			return _docFs;
		}

		var _pkColumns = _jsTable.getRowIdentifierColumnNames();
		var _recordIds = new Array();
		for (var i = 0; i < _pkColumns.length; i++) {
			// get the record PK values
			_recordIds[i] = _record[_pkColumns[i]];
		}
		
		_linkedTable = _jsTable.getSQLName().toLowerCase();
		_linkedId = _recordIds.join(",");
	} else {
		// no record given; use main record
		_linkedTable = databaseManager.getDataSourceTableName(forms[globals.nav_currentPanel1Form].controller.getDataSource());
		_linkedId = globals.svy_nav_getRowIdentifierValues(globals.nav_currentPanel1Form).join(',');;
	}
	
	if (_docFs.find()) {
		_docFs.organization_id = globals.svy_sec_lgn_organization_id;
		_docFs.linked_table = _linkedTable;
		_docFs.linked_id = _linkedId;
		_docFs.search();
	}
	
	return _docFs;
}

/**
 * Returns an object array of all documents attached to the given record
 * or the selected main record if no record was given
 * 
 * @param {JSRecord} [_record]
 * @return {Array<{doc_document_id:Number, layout_id:UUID, text1:String, text2: String, image_name: String, image_name_bg: String}>}
 * 
 * @author Patrick G. Ruhsert
 * @since 2012-02-21
 * 
 * @properties={typeid:24,uuid:"D6F5AA33-4CD5-44E0-9BD9-34B1D7F373E0"}
 */
function svy_doc_getDocuments(_record) {
	/** @type Array<{doc_document_id:Number, layout_id:UUID, text1:String, text2: String, image_name: String, image_name_bg: String}> */
	var _result = new Array();
	var _docFs = svy_doc_getDocumentFoundset(_record);
	
	if (!utils.hasRecords(_docFs)) {
		return _result;
	}
	
	var _layout_id = null;
	if (globals.nav.program["dmDocuments"] && globals.nav.program["dmDocuments"].layout_id)	{
		_layout_id = globals.nav.program["dmDocuments"].layout_id;
	}
	
	for (var i = 1; i <= _docFs.getSize(); i++) {
		var _docRec = _docFs.getRecord(i);
		_result[i-1] = new Object();
		_result[i-1].doc_document_id = _docRec.doc_document_id;
		_result[i-1].layout_id = _layout_id;
		_result[i-1].text1 = _docRec.name;
		_result[i-1].text2 = _docRec.description;
		_result[i-1].image_name = "fg_button_search.png";
		_result[i-1].image_name_bg = "bg_button_lightgreen.png"
	}
	
	return _result;
}

/**
 * Asks the user for one or more files to upload<br><br>
 * 
 * Returns false if the user selects no files or no callback method is given<br><br>
 * 
 * If successful, uploads the selected files and calls the callback method with<br>
 * an array of doc_documents records of the newly created records<br><br>
 * 
 * @param {Function} _callbackMethod
 * @param {Boolean} [_multiSelect] - allow the user to select more than one file (defaults to true)
 * @param {plugins.file.JSFile} [_file] - if given, no file select dialog is shown
 * 
 * @return {Array<plugins.file.JSFile>} files
 * 
 * @author Patrick G. Ruhsert
 * @since 2012-05-25
 * 
 * @properties={typeid:24,uuid:"7C5C808E-95C4-42A9-859E-C7195624AC2F"}
 */
function svy_doc_uploadDocuments(_callbackMethod, _multiSelect, _file) {
	if (!_callbackMethod) {
		return null;
	}
	if (_multiSelect != false && _multiSelect != true) {
		_multiSelect = true;
	}
	forms.svy_doc_documents.upload_callback_method = _callbackMethod;
	if (_file) {
		forms.svy_doc_documents.uploadCallback([_file]);
		return [_file];
	} else {
		var _files = plugins.file.showFileOpenDialog(1, null, _multiSelect, globals.svy_doc_getDocumentFilter(), forms.svy_doc_documents.uploadCallback, "i18n:svy.fr.dlg.upload_document");
		if (!_files) {
			return null;
		}
		return _files;
	}
}

/**
 * @param {JSRecord<db:/svy_framework/doc_document>} _documentRecord
 * 
 * @author Patrick G. Ruhsert
 * @since 2012-05-25
 * 
 * @return {plugins.file.JSFile} file
 * 
 * @properties={typeid:24,uuid:"7F445078-8FE9-44E3-B05B-48BB33CBC5D8"}
 */
function svy_doc_checkoutDocument(_documentRecord) {
	if (!_documentRecord || !(_documentRecord instanceof JSRecord)) {
		return null;
	}
	
	if (utils.hasRecords(_documentRecord.doc_document_to_doc_revision$latest_revision)) {
		var _lastRevisionRec = _documentRecord.doc_document_to_doc_revision$latest_revision.getRecord(1);
		var _option = null;
		
		if (_documentRecord.is_checked_out && _lastRevisionRec.checked_out_by_user != globals.svy_sec_lgn_user_id) {
			// document already checked out by another user
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.document_already_checked_out'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return null;
		} else if (_documentRecord.is_checked_out) {
			_option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.document_undo_checkout'), i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			if (_option == i18n.getI18NMessage('i18n:svy.fr.lbl.yes')) {
				_documentRecord.is_checked_out = 0;
				_lastRevisionRec.checked_out_by_user = null;
				_lastRevisionRec.checked_out_datetime = null;
			}
		}
		
		var _fileLocation = plugins.file.showFileSaveDialog(_lastRevisionRec.original_filename, i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'));
		if (!_fileLocation)
			return null;
		
		if (_fileLocation.exists()) {
			_option = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.override_existing_document'), i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
			
			if (!_option || _option == i18n.getI18NMessage('i18n:svy.fr.lbl.no'))
				return null;
		}
		
		if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {		// When document is in database	
			if (databaseManager.hasRecords(_lastRevisionRec.doc_revision_to_doc_document_binary)) {// Validate binary file
				var _byte = _lastRevisionRec.doc_revision_to_doc_document_binary.document_binary;
				plugins.file.writeFile(_fileLocation, _byte);
				_documentRecord.is_checked_out = 1;
				_lastRevisionRec.checked_out_datetime = application.getServerTimeStamp();
				_lastRevisionRec.checked_out_by_user = globals.svy_sec_lgn_user_id;
				databaseManager.saveData(_documentRecord);
				databaseManager.saveData(_lastRevisionRec);	
				return _fileLocation;
			}
		}
		else {																					// When file is in file system
			plugins.file.streamFilesFromServer(_fileLocation, globals.svy_doc_getServerFileName(_lastRevisionRec));
			_documentRecord.is_checked_out = 1;
			_lastRevisionRec.checked_out_datetime = application.getServerTimeStamp();
			_lastRevisionRec.checked_out_by_user = globals.svy_sec_lgn_user_id;
			databaseManager.saveData(_documentRecord);
			databaseManager.saveData(_lastRevisionRec);	
			return _fileLocation;
		}
		
	} else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkout'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.latest_revision_not_found'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return null;
	}
	return null
}

/**
 * @param {JSRecord<db:/svy_framework/doc_document>} _documentRecord
 * 
 * @author Patrick G. Ruhsert
 * @since 2012-05-25
 * 
 * @return {plugins.file.JSFile} file
 * 
 * @properties={typeid:24,uuid:"40A10CC7-A1FB-4071-A892-408C01410465"}
 */
function svy_doc_checkinDocument(_documentRecord) {
	if (!_documentRecord || !(_documentRecord instanceof JSRecord)) {
		return null;
	}
	if (databaseManager.hasRecords(_documentRecord.doc_document_to_doc_revision$latest_revision)) {
		var _revisionRec = _documentRecord.doc_document_to_doc_revision$latest_revision.getRecord(1);

		// When document is not checked out, don't allow to check in
		if (!_documentRecord.is_checked_out) {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin'),
				i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin_not_allowed'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return null;
		}

		if (_documentRecord.is_checked_out && _revisionRec.checked_out_by_user == globals.svy_sec_lgn_user_id) {
			globals.svy_doc_tracked_checkout_document_id = _documentRecord.doc_document_id;
			var _filesObj = plugins.file.showFileOpenDialog(1, null, false, globals.svy_doc_getDocumentFilter(),
				forms.svy_doc_documents.checkinCallback, i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin'));
			if (!_filesObj) {
				return null;
			} else {
				return _filesObj;
			}
		} else {
			if (_revisionRec.revision_by_user != globals.svy_sec_lgn_user_id)
				globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin'),
					i18n.getI18NMessage('i18n:svy.fr.lbl.document_checkin_allowed_for_checkout_user'),
					i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return null;
		}
	}
	
	return null;
}

/**
 * Returns a foundset of all documents the current user has currently checked out
 * 
 * @properties={typeid:24,uuid:"08E06B88-926D-41BB-94D7-5D4081356314"}
 */
function svy_doc_getCheckedOutDocuments() {
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, "doc_document");
	var _query = "SELECT doc_document.doc_document_id FROM doc_document INNER JOIN doc_revision ON doc_document.doc_document_id = doc_revision.doc_document_id WHERE doc_document.is_checked_out = ? AND doc_revision.checked_out_datetime IS NOT NULL AND doc_revision.checked_out_by_user = ?";
	_fs.loadRecords(_query,[1,globals.svy_sec_lgn_user_id]);
	return _fs;
}
