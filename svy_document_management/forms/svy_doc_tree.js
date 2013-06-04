/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D2160E31-A3B9-450F-959C-E6BC30FDD699",variableType:4}
 */
var vDidTreeViewInit = 0;

/**
 * Init the tree
 * 
 * @author Ashutos Lenka
 * @since 2011-08-08
 * @return  none
 *
 * @properties={typeid:24,uuid:"55CBA696-ADDA-44EA-8425-48563328DC80"}
 * @AllowToRunInFind
 */
function init_tree()
{
	// Load all records.
	foundset.loadAllRecords();
	databaseManager.recalculate(foundset)
	
	if (vDidTreeViewInit == 0)
	{
		var _binding = elements.dbtreeview.createBinding(foundset.getDataSource())
		
		_binding.setChildSortDataprovider('doc_folder_id');
		_binding.setNRelationName('doc_folder_to_doc_folder$parent_to_child');
		_binding.setTextDataprovider('clc_display_name_security_permission');
		_binding.setImageMediaDataprovider('folder_icon');
		_binding.setCallBackInfo(svy_doc_treeNodeSelected, 'doc_folder_id');
		
		// Context menu should only be visible for admin or super admin.
		if(globals.svy_doc_isSuperAdminOrAdmin())
			_binding.setMethodToCallOnRightClick(showContextMenu , 'doc_folder_id')
			_binding.setMethodToCallOnDoubleClick(showContextMenu,'doc_folder_id')
		
		var _folderFs = foundset.duplicateFoundSet();
		// All the parent folders.
		if(_folderFs.find()){
			_folderFs.parent_id = '^= 0';
			_folderFs.search();
		}
		
		_folderFs.sort('sequence asc');
		elements.dbtreeview.addRoots(_folderFs);
		vDidTreeViewInit = 1;
		
		// Select the first node
		if (_folderFs.getSize())
			elements.dbtreeview.selectionPath = [_folderFs.getRecord(1).doc_folder_id]
	}
}

/**
 * 
 * @properties={typeid:24,uuid:"7F5CCD4C-D45C-48D6-97AF-E7D6FB513A4A"}
 */
function showContextMenu(folderId, _tableName, _mouseX, _mouseY){
	
	var _treeFs = foundset.duplicateFoundSet();
	_treeFs.loadRecords(folderId);
		
	// Setting the selected element.
	var selectionPath = new Array();
	
	selectionPath.push(_treeFs.doc_folder_id);
		
	// This loop gets the reverse selection path.
	while(_treeFs.parent_id){
		_treeFs = _treeFs.doc_folder_to_doc_folder$child_to_parent;
		selectionPath.push(_treeFs.doc_folder_id);
	}
	
	// Select the newly created folder.
	forms.svy_doc_tree.elements.dbtreeview.selectionPath = selectionPath.reverse();
	
	svy_doc_treeNodeSelected(folderId);
	// Generating the popup menu for all the controls.
	var popupmenu = plugins.window.createPopupMenu()

	/** @type {plugins.window.MenuItem} */
	var _item = null;
	_item = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.create_folder'), forms.svy_doc_treeview_dtl.createFolder);
	_item.setIcon('media:///pv_tb_new.png');
	_item = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.rename_folder'), forms.svy_doc_treeview_dtl.renameFolder);
	_item.setIcon('media:///pv_tb_edit.png');
	_item = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.delete_folder'), forms.svy_doc_treeview_dtl.deleteFolder);
	_item.setIcon('media:///pv_tb_delete.png');
	popupmenu.addSeparator();
	_item = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.security_permission'), forms.svy_doc_treeview_dtl.changePermissions);
	_item.setIcon('media:///Security.png');
	popupmenu.addSeparator();
	_item = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.document_types'), forms.svy_doc_treeview_dtl.createDocumentTypes);
	_item.setIcon('media:///document_type.gif');
		
	popupmenu.show(_mouseX, _mouseY);
	
}

/** 
 * // TODO generated, please specify type and doc for the params
 * @param {UUID|String} folderId
 *
 * @properties={typeid:24,uuid:"F4FDF0BD-5022-4F3B-B65F-62D6F710EB3B"}
 */
function svy_doc_treeNodeSelected(folderId) {

	scopes.svyDocumentManagement$model.selectedFolder = folderId;
	
	foundset.selectRecord(folderId)
	forms.svy_doc_treeview_dtl.foundset.selectRecord(folderId);
	
//	if (_to_doc_document$current_folder_documents) {								// Load documents
//		_to_doc_document$current_folder_documents.loadAllRecords()	
//		forms.svy_doc_documents_tbl.foundset.loadRecords(_to_doc_document$current_folder_documents);
//	}
	
	// This function will refresh the document foundset.
	globals.svy_doc_documentSecurityPermission();
	
	// When there is no record for a folder, clear the revision foundset
	if (forms.svy_doc_documents_tbl.foundset.getSize() == 0)
		forms.svy_doc_revision_tbl.foundset.clear()

}
