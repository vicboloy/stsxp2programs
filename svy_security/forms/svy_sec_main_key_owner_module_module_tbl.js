/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CA22E5FE-A85D-4CD6-9533-0B688A7797E6"}
 */
function deleteRecord(event) {
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_module")].foundset['module_id'] = null;
	
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_applied_tbl")].loadRecords();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4F0DC038-3829-4A67-B12C-02649EA8D30A"}
 * @AllowToRunInFind
 */
function addRecord(event) {
	var _dataSet = databaseManager.createEmptyDataSet(0, ['module_id']);
	if (!forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_module")].foundset.module_id) {
		var _query = 'SELECT module_id FROM sec_module';
		_dataSet = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, null, -1);
	}
	
	if (globals.svy_sec_showSelectionDialog('db:/' + globals.nav_db_framework + '/sec_module', _dataSet, ['module_id'], ['name'], ['Module'], [200], 600, false) == 'select') {
		forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_module")].foundset['module_id'] = forms['svy_sec_selection_dialog_sec_module'].foundset['module_id'];
		
		databaseManager.saveData();
		
		forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_applied_tbl")].loadRecords();
	}
}
