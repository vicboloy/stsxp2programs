/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAAF5F1A-DEDC-44BF-ABA3-F95E9F9E0BCD"}
 */
var folderName = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0042C0CC-E215-4EE2-A6EE-3A2B141BF1E4"}
 */
function closeForm(event) {

	application.closeAllWindows();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6F2C633-5DAC-49EE-BAB0-08F05C333655"}
 */
function renameFolder(event) {

	// Folder Name needs to be entered.
	if(!folderName){
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.rename_folder'),
			i18n.getI18NMessage('i18n:svy.fr.lbl.folder_name_required'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
		
	}
		
	name = folderName;
	application.closeAllWindows();
	
	// Set Initials.
	folderName = null;
	
	// Recalculate the foundset.
	databaseManager.recalculate(forms.svy_doc_tree.foundset.getSelectedRecord());
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91C64F5A-2ECF-42D8-A992-A91AF03906A8"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {

	// Set the current folder.
	foundset.loadAllRecords();
	if(foundset.find()){
		doc_folder_id = scopes.svyDocumentManagement$model.selectedFolder;
		foundset.search();
	}
	
	folderName = name;
	elements.fld_name.requestFocus();
	elements.fld_name.selectAll();
}
