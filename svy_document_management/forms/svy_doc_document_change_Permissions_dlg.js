/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6BF47AAC-4475-4950-A7A3-443D2DE40030"}
 */
var btnCancel = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A4EE6E26-5CBD-461D-A0CB-1B11F6CF94DE",variableType:4}
 */
var btnClickedGroupsSelected = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"876163C6-692E-4AB0-8860-D5DAE85488ED"}
 */
var groupNames = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"669ED340-4B77-433D-B30F-5E948095D310",variableType:4}
 */
var vIsCancelled = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E793EE6E-D57D-4BE5-9CD0-965F6BF46AF5",variableType:4}
 */
var vSecurityLevelBackup = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E966369-E80F-46E9-AC8D-43824EE3ED63"}
 */
function cancelWindow(event) {

	vIsCancelled = 1;
	application.closeAllWindows();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DAFB574B-1B54-4A7B-8C94-5D21D091FA2E"}
 */
function onShow(firstShow, event) {

	foundset.loadRecords(forms.svy_doc_documents_tbl.foundset);
	vIsCancelled = 1;
	vSecurityLevelBackup = security_level;
	
	groupNames = '';
	
	if(utils.hasRecords(foundset.doc_document_to_doc_security) && foundset.security_level == globals.svy_doc_group_document_security){
		security_level = globals.svy_doc_group_document_security;
		for(var p = 1; p <= foundset.doc_document_to_doc_security.getSize(); p++){
			foundset.doc_document_to_doc_security.setSelectedIndex(p);
			groupNames = groupNames + 
				foundset.doc_document_to_doc_security.doc_security_to_sec_group.name + '\n';
			
		}
	}
	
	//button  select group is not visible for public. 
	if(security_level == globals.svy_doc_group_document_security && globals.svy_doc_isSuperAdminOrAdmin()){
		elements.btn_selectGroup.visible = true;
		elements.lbl_groupNames.visible = true;
	}
	else{
		elements.btn_selectGroup.visible = false;
		elements.lbl_groupNames.visible = false;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49CDDC1F-AFA6-4DDC-805D-F234AABBD8D1"}
 */
function createSecurityRecords(event) {
	
	// For Group the group Id will be stored. This is for normal user
	if (!globals.svy_doc_isSuperAdminOrAdmin() && security_level == globals.svy_doc_group_document_security) {
		
		if (databaseManager.hasRecords(doc_document_to_doc_security))												// Remove all the security record
			doc_document_to_doc_security.deleteAllRecords();
		
		for (var  i = 1 ; i<= _to_sec_user_in_group$logged_in.getSize() ; i++) {
			var _rec = _to_sec_user_in_group$logged_in.getRecord(i);
			
			doc_document_to_doc_security.newRecord();
			doc_document_to_doc_security.security_level  = globals.svy_doc_group_document_security;
			doc_document_to_doc_security.sec_group_id = _rec.group_id;
		}
	}
	else if (globals.svy_doc_isSuperAdminOrAdmin() && security_level == globals.svy_doc_group_document_security) {	// Admin and super admin can set the access privilege to other groups
	
		security_level = globals.svy_doc_group_document_security;													// Setting group access privilege in document record

		// Check if groups are selected
		if (!groupNames || groupNames == '') {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.select_groups'), i18n.getI18NMessage('i18n:svy.fr.dlg.no_groups_are_selected'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'))
			return;
		}
		
		if (databaseManager.hasRecords(doc_document_to_doc_security))												// Remove all the security record
			doc_document_to_doc_security.deleteAllRecords();
		
		// Create new security records
		
		// Get the foundset for the group selected
		if (forms['svy_doc_selection_dialog_sec_group']) {
			var tempFoundset = forms['svy_doc_selection_dialog_sec_group'].foundset.duplicateFoundSet();
			
			for (var l = 1; l <= tempFoundset.getSize(); l++) {
				tempFoundset.setSelectedIndex(l);
				// If it is selected.
				if (tempFoundset['is_selected'] == 1) {
					doc_document_to_doc_security.newRecord();
					doc_document_to_doc_security.sec_group_id = tempFoundset['group_id'];
					doc_document_to_doc_security.security_level  = globals.svy_doc_group_document_security;
				}
			}
		}
	}
	else {
		// For public and private setting
		if (databaseManager.hasRecords(doc_document_to_doc_security))												// Remove all the security record
			doc_document_to_doc_security.deleteAllRecords();
		
		doc_document_to_doc_security.newRecord();
		doc_document_to_doc_security.security_level = security_level;
	}
	 	
 	// Set flag to know the operation is not canceled
 	vIsCancelled = 0;
 	
	//save new security record and document record
	databaseManager.saveData(foundset);
	databaseManager.saveData(foundset.doc_document_to_doc_security);
	
	application.closeAllWindows();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"51318B82-AD48-475F-A52E-22ED7D2A7238"}
 */
function onHide(event) {
	if (vIsCancelled)
		security_level = vSecurityLevelBackup;
	
	databaseManager.saveData(foundset.doc_document_to_doc_security);
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EF73123D-8EAB-44A3-B6CB-7269B7550C80"}
 */
function selectGroups(event) {
	// This displays the dialog to choose group.
	btnClickedGroupsSelected = 1;
	
	// Set the current form name in the global variable svy_doc_group_selection_form
	globals.svy_doc_group_selection_form = controller.getName();
	
	var _query = 'SELECT group_id FROM sec_group';
	var _dataSet = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, null, -1);
	globals.svy_doc_showSelectionDocDialog('db:/' + globals.nav_db_framework + '/sec_group', _dataSet, ['group_id'], 
			['name'], ['Group'], [200], 600, true);
			
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7CD201BE-5C04-4BFF-9339-208BEBF479F4"}
 */
function onDataChange(oldValue, newValue, event) {
	
	//button  select group is not visible for public. 
	if(security_level == globals.svy_doc_group_document_security && globals.svy_doc_isSuperAdminOrAdmin()){
		elements.btn_selectGroup.visible = true;
		elements.lbl_groupNames.visible = true;
	}
	else{
		elements.btn_selectGroup.visible = false;
		elements.lbl_groupNames.visible = false;
	}
		
	return true;	
}
