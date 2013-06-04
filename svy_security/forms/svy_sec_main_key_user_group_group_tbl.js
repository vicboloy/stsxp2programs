/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1D19D58C-7903-4D97-A58E-BD3B3F1CE539"}
 */
function deleteRecord(event) {
	foundset.deleteRecord();
	
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_applied_tbl")].loadRecords();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3F42D021-7244-4B94-8A9F-1FA96F2AA34B"}
 */
function addRecord(event) {
	var _query = 'SELECT group_id FROM sec_group WHERE group_id NOT IN (SELECT group_id FROM sec_user_right WHERE security_key_id = ? AND group_id IS NOT NULL)';
	var _arguments = [forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_group")].foundset.security_key_id.toString()];
	var _dataSet = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, _arguments, -1);
	
	if (globals.svy_sec_showSelectionDialog('db:/' + globals.nav_db_framework + '/sec_group', _dataSet, ['group_id'], ['name'], ['Group'], [200], 600, true) == 'select') {
		var tempFoundset = forms['svy_sec_selection_dialog_sec_group'].foundset.duplicateFoundSet();
		for (var i = 1; i <= tempFoundset.getSize(); i++) {
			tempFoundset.setSelectedIndex(i);
			
			if (tempFoundset['is_selected'] == 1) {
				foundset.newRecord();
				foundset.group_id = tempFoundset['group_id'];
			}
		}
		
		databaseManager.saveData();
		
		forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_applied_tbl")].loadRecords();
	}
}
