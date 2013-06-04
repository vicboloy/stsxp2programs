/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B59BA012-3B6D-45EF-A5BF-BD481E5AC060"}
 */
var folderName = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"395101D4-2341-46F5-BECC-C6385343D1F6",variableType:4}
 */
var isRoot = 1;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"334D2948-49AE-4EAC-B118-786A870E4291"}
 */
function closeForm(event) {
	
	application.closeAllWindows();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F706E655-6941-4C12-B58E-7431C7453ACA"}
 * @AllowToRunInFind
 */
function createFolder(event) {
	
	var seqStr;
	// Folder Name needs to be entered.
	if(!folderName){
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.create_folder'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.folder_name_required'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
	
	// Create new record and set fields.
	// Set the parent Id.
	if(isRoot){
		foundset.newRecord(false);
		name = folderName;
		parent_id = null;
		
		// By default it is set to public
		security_level = globals.svy_doc_public_folder_security;
		doc_folder_to_doc_security.newRecord(false);
		doc_folder_to_doc_security.security_level = globals.svy_doc_public_folder_security;
		//databaseManager.saveData(foundset);
		
		var _fs = foundset.duplicateFoundSet();
		if (_fs.find()) {
			_fs.parent_id = '^';
			_fs.search();
		}
		//generating for the parent folder sequence.
		seqStr = _fs.getSize();
	}
	else{
		
		// If no parent folder exists.
		if(!foundset.getSize()){
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.create_folder'), 
					i18n.getI18NMessage('i18n:svy.fr.dlg.parent_folder_required'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		foundset.newRecord(false);
		name = folderName;
		parent_id = scopes.svyDocumentManagement$model.selectedFolder;
				
		//generating for the child folder sequence.
					
		if (databaseManager.hasRecords(doc_folder_to_doc_folder$child_to_parent))
			seqStr = doc_folder_to_doc_folder$child_to_parent.sequence + 
			'.' + doc_folder_to_doc_folder$parent_id.getSize();
		else {
			parent_id = 0;
			seqStr = doc_folder_to_doc_folder$parent_id.getSize();
		}
			
		// If it is a sub folder then security level will be of parent.
		// If public Type.
		if(doc_folder_to_doc_folder$child_to_parent.security_level == 
			globals.svy_doc_public_folder_security){
			security_level = globals.svy_doc_public_folder_security;
			doc_folder_to_doc_security.newRecord(false);
			doc_folder_to_doc_security.security_level = globals.svy_doc_public_folder_security;
			
		}
		// If it is group type.
		else if(doc_folder_to_doc_folder$child_to_parent.security_level == 
			globals.svy_doc_group_folder_security){
			// Looping through all the child records.	
			for(var i=1; i<=foundset.doc_folder_to_doc_folder$child_to_parent
				.doc_folder_to_doc_security.getSize();i++){
				
				foundset.doc_folder_to_doc_folder$child_to_parent.
				doc_folder_to_doc_security.setSelectedIndex(i);
				doc_folder_to_doc_security.newRecord(false);
				security_level = foundset.doc_folder_to_doc_folder$child_to_parent.security_level;
				doc_folder_to_doc_security.security_level = 
					foundset.doc_folder_to_doc_folder$child_to_parent.security_level;
				doc_folder_to_doc_security.sec_group_id = 
				foundset.doc_folder_to_doc_folder$child_to_parent.doc_folder_to_doc_security.sec_group_id;
			}
		}
		
	}
	// Setting the sequence field.
	sequence = seqStr;
	databaseManager.saveData(foundset);  //save data
	databaseManager.saveData(doc_folder_to_doc_security);
	
	application.closeAllWindows();
	scopes.svyDocumentManagement$model.selectedFolder = doc_folder_id;
	
	// Setting the selected element.
	var selectionPath = new Array();
	var recObj = foundset.getSelectedRecord();
	selectionPath.push(recObj.doc_folder_id);
	
	// This loop gets the reverse selection path.
	while(recObj.parent_id){
		recObj = recObj.doc_folder_to_doc_folder$child_to_parent.getSelectedRecord();
		selectionPath.push(recObj.doc_folder_id);
	}
	
	// Refreshing the tree.
	forms.svy_doc_tree.vDidTreeViewInit = 0;
	forms.svy_doc_tree.elements.dbtreeview.removeAllRoots();
	forms.svy_doc_tree.init_tree();
	
	// Select the newly created folder.
	forms.svy_doc_tree.elements.dbtreeview.selectionPath = selectionPath.reverse();
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5A4F9CF-19B4-4D23-B5B1-47F7FFAADE41"}
 */
function onShow(firstShow, event) {
	
	// Set Initials.
	folderName = i18n.getI18NMessage('i18n:svy.fr.lbl.default_folder_name') ? i18n.getI18NMessage('i18n:svy.fr.lbl.default_folder_name') : 'New Folder';
	foundset.loadAllRecords();
	if(foundset.getSize())
		isRoot = 0;
	else
		isRoot = 1;
	elements.fld_name.requestFocus();
	elements.fld_name.selectAll();
}
