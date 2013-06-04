/**
 * Method to create a new Folder
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8121CC41-AAAA-4DFF-87F1-429E322F9BCF"}
 */
function createFolder(event) 
{
	var win = application.createWindow("CreateFolder", JSWindow.DIALOG);
	win.title = i18n.getI18NMessage('i18n:svy.fr.dlg.create_folder') ? i18n.getI18NMessage('i18n:svy.fr.dlg.create_folder') : 'Create Folder';
	win.resizable = true;
	win.show(forms.svy_doc_create_folder_dlg);
}

/**
 * Rename the folder
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C90BF030-4365-4BCD-B19B-FAD7C9E9765E"}
 */
function renameFolder(event)
{	
	foundset.loadAllRecords();
	if(!foundset.getSize()){
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.rename_folder'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_folder_existing'),i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	
	var win = application.createWindow('RenameFolder', JSWindow.DIALOG);
	win.title = i18n.getI18NMessage('i18n:svy.fr.lbl.rename_folder');
	win.resizable = true;
	win.show(forms.svy_doc_rename_folder_dlg);
}

/**
 * @AllowToRunInFind
 * 
 * Delete selected folder
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"77956A57-DA47-49D4-9492-054B612DD718"}
 */
function deleteFolder(event)
{
	foundset.loadAllRecords();
	if(!foundset.getSize()){
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.delete_folder'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_folder_existing'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}

	var pressBtn1 =	i18n.getI18NMessage('i18n:svy.fr.lbl.no');
	var pressBtn2 = i18n.getI18NMessage('i18n:svy.fr.lbl.no');
	var pressBtn3 =	i18n.getI18NMessage('i18n:svy.fr.lbl.no');
	var pressBtn4 =	i18n.getI18NMessage('i18n:svy.fr.lbl.no');
		
	if(utils.hasRecords(doc_folder_to_doc_folder$parent_to_child) && 
		!utils.hasRecords(doc_folder_to_doc_document))
			
		pressBtn1 =	globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.delete_folder'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.sub_folders_existing'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
		
	
	
	else if(!utils.hasRecords(doc_folder_to_doc_folder$parent_to_child) && 
		utils.hasRecords(doc_folder_to_doc_document))
			
		pressBtn2 =	globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.delete_folder'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.docs_existing_in_folder'), 
				i18n.getI18NMessage('i18n:svy.fr.lbl.yes') , i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
		
	
	else if(utils.hasRecords(doc_folder_to_doc_folder$parent_to_child) && 
		utils.hasRecords(doc_folder_to_doc_document))
			
		pressBtn3 =	globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.delete_folder'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.subfolders_docs_existing_in_folder'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.yes') , i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
		
	else
	
		pressBtn4 =	globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.delete_folder'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.delete_folder_confirm'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.yes') , i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
	
	var _btnYes = i18n.getI18NMessage('i18n:svy.fr.lbl.yes');
	
	if(pressBtn1 == _btnYes || pressBtn2 == _btnYes || pressBtn3 == _btnYes || pressBtn4 == _btnYes){
		
		foundset.deleteRecord();
				
		// Set tree selection path
		var _treeFs = foundset.duplicateFoundSet();
		if (foundset.doc_folder_id)
			_treeFs.loadRecords(foundset.doc_folder_id);
			
		// Setting the selected element.
		var selectionPath = new Array();
		
		selectionPath.push(_treeFs.doc_folder_id);
			
		// This loop gets the reverse selection path.
		while(_treeFs.parent_id){
			_treeFs = _treeFs.doc_folder_to_doc_folder$child_to_parent;
			selectionPath.push(_treeFs.doc_folder_id);
		}		
		forms.svy_doc_tree.elements.dbtreeview.selectionPath = selectionPath.reverse();
		scopes.svyDocumentManagement$model.selectedFolder = selectionPath[selectionPath.length - 1];		
	}		
}

/**
 * Change folder permissions
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"32CCA0B4-124A-410E-8B4D-B92D69241BAC"}
 */
function changePermissions(event) {

	foundset.loadAllRecords();
	if(!foundset.getSize()){
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.change_security_permission'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_folder_existing'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	
	var win = application.createWindow("ChangePermissions", JSWindow.DIALOG);
	win.title = i18n.getI18NMessage('i18n:svy.fr.dlg.change_permissions') ? i18n.getI18NMessage('i18n:svy.fr.dlg.change_permissions') : 'Change Permissions';
	win.setSize(500, 200)
	win.resizable = true;
	win.show(forms.svy_doc_change_Permissions_dlg);
	
}

/**
 * Manage document types
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"60A9B7E8-4C8E-4678-B1D0-A39B1D9EFEB9"}
 */
function createDocumentTypes(event) {

	var win = application.createWindow("Document Types", JSWindow.DIALOG);
	win.setSize(700,700)
	win.title = i18n.getI18NMessage('i18n:svy.fr.lbl.document_types') ? i18n.getI18NMessage('i18n:svy.fr.lbl.document_types') : 'Document Types';
	win.resizable = false;
	win.show(forms.svy_doc_document_types_tbl);
			
}
