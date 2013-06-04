/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"2CDDD1FD-7E27-44B7-947C-D2011BDD95FF",variableType:-4}
 */
var vItems = [];

/**
 * @param {JSRecord} _rec
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"2D677B83-2C03-497D-A687-20CD6C949589"}
 */
function updateUI(_rec) {
	vItems = globals['svy_doc_getDocuments'](_rec)
	globals.nav.documents = vItems
	elements.tab.removeAllTabs()
	var form = drawItems(vItems, 'documents')
	elements.tab.addTab(forms[form])
	forms[form]['vParentForm'] = controller.getName()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D0896E36-936D-47EF-BEFB-069169FEE147"}
 */
function newBookmark(event) {
	globals.svy_nav_bookmarkCreate()
	forms[globals.nav.mainFormName].showBookmarks(event,true)
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"C95DE407-A9DE-4537-A904-2F112D0BDD7F"}
 * @AllowToRunInFind
 */
function onClick(event) {
	
	var item_nr = utils.stringRight(event.getElementName(), 1) * 1
	
	if(utils.stringPatternCount(event.getElementName(),'icon')>0)
	{
		showDocument(vItems[item_nr].doc_document_id)
		return
	}
	
	globals.nav.openNewTab = 1
	var layout = 'dmDocuments_pinned';
	
	/** @type {JSFoundSet<db:/svy_framework/nav_layout>} */
	var layoutFs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_layout');
	if (layoutFs && layoutFs.find()) {
		layoutFs.name = layout;
		if (layoutFs.search()) {
			var layout_id = layoutFs.layout_id;
			
			if (!layout_id) {
				return;
			}
			
			// show the form and update the menu
			forms[globals.nav.mainFormName].layoutSwitch(null,layout_id);
			forms[globals.nav.mainFormName].updateMenu(layout_id);
			
			// reload documents for the selected program record
			if (vItems[item_nr].doc_document_id) {
				
				/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
				var fs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/doc_document');
				fs.loadRecords(vItems[item_nr].doc_document_id);
				
				if (fs && fs.getSize() > 0) {
					var linkedTable = fs.linked_table;
					var linkedId = fs.linked_id;
					if (fs.find()) {
						fs.linked_table = linkedTable;
						fs.linked_id = linkedId;
						fs.search();
						
						// Loaded pinned documents
						forms.svy_doc_documents_tbl.foundset.loadRecords(fs);
						forms.svy_doc_documents_tbl.foundset.selectRecord(vItems[item_nr].doc_document_id);
					}
				}				
			}
			
			// This function will refresh the document foundset.
//			globals['svy_doc_documentSecurityPermission']();
		}
	}
	
}

/**
 * @properties={typeid:24,uuid:"13056B5E-B9B2-44DA-9889-F0BEB1216D05"}
 */
function onRightClick(event) {
	var popupmenu = plugins.window.createPopupMenu()
	var item_nr = utils.stringRight(event.getElementName(), 1) * 1
	var menuitem1 = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.document_delete'), deleteDocument)
	menuitem1.methodArguments = [item_nr]
	
	var source = event.getSource()
	if (source != null) {
		popupmenu.show(source);
	}
}

/**
 * Delete the document pinned to the program
 * 
 * @properties={typeid:24,uuid:"8D886065-8CC2-4CE9-BA37-368E48698DE8"}
 */
function deleteDocument(arg1, arg2, arg3, arg4, arg5, _documentnr) {
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var fs = databaseManager.getFoundSet('db:/svy_framework/doc_document');
	if (vItems[_documentnr].doc_document_id && fs.loadRecords(vItems[_documentnr].doc_document_id) && fs.getSize() == 1 && fs.deleteRecord()) {
		forms[globals.nav.mainFormName].showDocuments(null,true)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38A916C7-03A1-4238-9D71-3144D5116D45"}
 * @AllowToRunInFind
 */
function attachDocument(event) {
	// Attach a new document to the program other than dmDocuments and dmDocuments_pinned
	var docLayoutId;
	var docPinnedLayoutId;
	
	/** @type {JSFoundSet<db:/svy_framework/nav_layout>} */
	var layoutFs = databaseManager.getFoundSet('db:/svy_framework/nav_layout');
	if (layoutFs.find()) {
		layoutFs.name = 'dmDocuments';
		if (layoutFs.search())
			docLayoutId = layoutFs.layout_id;
	}
	if (layoutFs.find()) {
		layoutFs.name = 'dmDocuments_pinned';
		if (layoutFs.search())
			docPinnedLayoutId = layoutFs.layout_id;
	}
	
	if (globals.nav_currentPanel1Form &&  globals.nav_layout_id != docLayoutId &&  globals.nav_layout_id != docPinnedLayoutId)
	{
		var title = i18n.getI18NMessage('i18n:svy.fr.dlg.upload_document');
		var msg = i18n.getI18NMessage('i18n:svy.fr.dlg.file_plugin_missing');
		
		if (!plugins.file) {
			globals.DIALOGS.showInfoDialog(title, msg, 'i18n:svy.fr.lbl.close');
			return;
		}
		
		var filesObj = plugins.file.showFileOpenDialog(1, null, true, globals['svy_doc_getDocumentFilter'](), uploadCallback, title);
		if (!filesObj)
			return;
	}
	else {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.attach_document'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.open_program_to_continue'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	forms[globals.nav.mainFormName].showDocuments(event,true)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile[]} files
 *
 * @properties={typeid:24,uuid:"FBF19005-04F5-451B-9C51-FD7E4C6B48A7"}
 */
function uploadCallback(files) {
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var fs_doc = databaseManager.getFoundSet('db:/svy_framework/doc_document')
	
	// Check if any file is selected
	if (!files)
		return false;
	
	// Copy files to Remote server machine
	for (var fileCnt = 0 ; fileCnt < files.length ; fileCnt++) {	
		
		var docTypeId = null;
		if (!scopes.svyProperties.getPropertyValueAsBoolean("document_management_allow_all_file_types")) {
			docTypeId = getDocumentType(files[fileCnt].getName());					// get the document id
			if (!docTypeId) {															// Document type not supported
				continue;
			}
		}
			
		// create new document record
		if (globals.nav_program_name == 'dmDocuments') {
			fs_doc.newRecord()															// Create record in documents table
			fs_doc.doc_folder_id = scopes.svyDocumentManagement$model.selectedFolder;
		}
		else {
			fs_doc.newRecord(false);												// Attach document for the selected program
			
			// Set the linked_id and linked_table fields
			fs_doc.linked_id = globals.svy_nav_getRowIdentifierValues( globals.nav_currentPanel1Form).join(',');
			fs_doc.linked_table = forms[globals.nav_currentPanel1Form].controller.getDataSource().split('/')[2];
			fs_doc.doc_folder_id = null;
		}

		//Create Default Public security.
		fs_doc.security_level = scopes.svyDocumentManagement.DOC_SECURITY.PUBLIC;
		fs_doc.doc_document_to_doc_security.newRecord(false);
		fs_doc.doc_document_to_doc_security.security_level = scopes.svyDocumentManagement.DOC_SECURITY.PUBLIC;
		fs_doc.user_created_id = globals.svy_sec_lgn_user_id;
		
		// Set data in document table
		fs_doc.name = files[fileCnt].getName();
		fs_doc.doc_document_type_id = docTypeId;
		
		// upload file		
		doUpload(files[fileCnt], fs_doc);
	}
	
	databaseManager.saveData(fs_doc);
	databaseManager.saveData(fs_doc.doc_document_to_doc_security);
	
	return true;
}

/**
 * 
 * @param {String} docName
 * @return {UUID}
 *
 * @properties={typeid:24,uuid:"2D503175-9F71-4DD6-A465-2A40B0283C90"}
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
 * Actual file upload process is done 
 * 
 * @param {plugins.file.JSFile} file
 * @param {JSFoundset<db:/svy_framework/doc_document>} fs_doc
 * 
 * @return {Boolean} true when upload succeeded
 *
 * @properties={typeid:24,uuid:"DAE05177-DABE-406B-B19E-229883C0C6C2"}
 */
function doUpload (file, fs_doc) {
	
	var uploadTo = scopes.svyProperties.getPropertyValueAsBoolean("document_management_in_database");
	var revision = null;
	var thumbnail = null;
	
	if (uploadTo && uploadTo == true && fs_doc.doc_document_to_doc_revision) {								// Create revision
	
		if (scopes.svyProperties.getPropertyValueAsBoolean('document_management_revision'))
			revision = fs_doc.doc_document_to_doc_revision.getRecord(fs_doc.doc_document_to_doc_revision.newRecord(false));
		else {
			if (!databaseManager.hasRecords(fs_doc.doc_document_to_doc_revision))
				fs_doc.doc_document_to_doc_revision.newRecord(false);
			
			revision = fs_doc.doc_document_to_doc_revision.getSelectedRecord();
			if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_binary))				// Remove binary file
				revision.doc_revision_to_doc_document_binary.deleteAllRecords();
			if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_thumbnail))			// Remove thumbnail file
				revision.doc_revision_to_doc_document_thumbnail.deleteAllRecords();
			
			globals.onRecordDelete_doc_revision(revision);
		}
			
		revision.revision_number = fs_doc.doc_document_to_doc_revision.getSize();
		revision.original_filename = fs_doc.name;
		
		if (revision.doc_revision_to_doc_document_binary) {					// Load Binary file
		
			var binary = revision.doc_revision_to_doc_document_binary.getRecord(revision.doc_revision_to_doc_document_binary.newRecord(false));
			binary.document_binary = file.getBytes();
		}
		
		if (file.getContentType() && file.getContentType().split('/')[0] == 'image' && plugins.images && 
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
		uploadToFileSystem(file, fs_doc.name, fs_doc);
		return true;				
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} file
 * @param {String} thisFileName
 * @param {JSFoundset<db:/svy_framework/doc_document>} fs_doc
 *
 * @properties={typeid:24,uuid:"400E1128-A21E-4982-9BE2-7254F17EBD54"}
 */
function uploadToFileSystem(file, thisFileName, fs_doc) {
	
	var revision = null;
	if (scopes.svyProperties.getPropertyValue('document_management_revision'))
		revision = fs_doc.doc_document_to_doc_revision.getRecord(fs_doc.doc_document_to_doc_revision.newRecord(false));
	else {
		if (!databaseManager.hasRecords(fs_doc.doc_document_to_doc_revision))
			fs_doc.doc_document_to_doc_revision.newRecord(false);
		
		revision = fs_doc.doc_document_to_doc_revision.getSelectedRecord();
		if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_binary))				// Remove binary file
			revision.doc_revision_to_doc_document_binary.deleteAllRecords();
		if (databaseManager.hasRecords(revision.doc_revision_to_doc_document_thumbnail))			// Remove thumbnail file
			revision.doc_revision_to_doc_document_thumbnail.deleteAllRecords();
		
		globals.onRecordDelete_doc_revision(revision);
	}
	
	revision.revision_number = fs_doc.doc_document_to_doc_revision.getSize();
	revision.original_filename = thisFileName;
	revision.revision_by_user = globals.svy_sec_lgn_user_id;
	revision.revision_reason = forms.svy_doc_revision_reason_dlg.vRevisionReason;
	
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		plugins.file.writeFile(plugins.file.createFile(plugins.file.getDefaultUploadLocation() + globals.svy_doc_getServerFileName(revision)), file.getBytes(), file.getContentType())
	}
	else
		plugins.file.streamFilesToServer(file, globals.svy_doc_getServerFileName(revision));		// Upload done to file system
	
	if (file.getContentType() && file.getContentType().split('/')[0] == 'image' && plugins.images && 
	revision.doc_revision_to_doc_document_thumbnail) {												// Load Binary Thumbnail
	
		var thumbnail = revision.doc_revision_to_doc_document_thumbnail.getRecord(revision.doc_revision_to_doc_document_thumbnail.newRecord(false));
		thumbnail.document_thumbnail = plugins.images.getImage(file.getBytes()).resize(200,200);
	}
	
	// Save revision
	databaseManager.saveData(revision);
	databaseManager.saveData(thumbnail);
}

/**
 * @properties={typeid:24,uuid:"7EB98354-51A7-44BC-B500-FE3C13E8C62A"}
 */
function showDocument(pk) {
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var fs_doc = databaseManager.getFoundSet('db:/svy_framework/doc_document')
	fs_doc.loadRecords(pk)
	
	
	if (databaseManager.hasRecords(fs_doc.doc_document_to_doc_revision$latest_revision)) {
		var revisionRec = fs_doc.doc_document_to_doc_revision$latest_revision.getSelectedRecord();
		
		// Get the file for preview
		if (scopes.svyProperties.getPropertyValue('document_management_in_database')) {		// When file is in database
		
			if (databaseManager.hasRecords(revisionRec.doc_revision_to_doc_document_binary)) {
				forms.svy_doc_revision_preview_dlg.vRevisionPreview = revisionRec.doc_revision_to_doc_document_binary.document_binary;
				forms.svy_doc_revision_preview_dlg.vRevisonRec = revisionRec;
			}
			else {
				forms.svy_doc_revision_preview_dlg.vRevisionPreview = null;
				forms.svy_doc_revision_preview_dlg.vRevisonRec = null;
			}
				
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
			var tempFile = plugins.file.createTempFile('','.' + ext);
			forms.svy_doc_revision_preview_dlg.vRevisonRec = revisionRec;
			plugins.file.streamFilesFromServer(tempFile, globals.svy_doc_getServerFileName(revisionRec), previewCallback);
		}
	}	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} tempFile
 *
 * @properties={typeid:24,uuid:"FCA3D8DA-C9CA-4816-8789-F9A71152EC49"}
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
