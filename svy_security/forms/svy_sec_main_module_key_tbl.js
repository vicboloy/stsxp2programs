/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F25F8E6E-1CFA-44BC-B8A8-32CA40738DE2"}
 * @AllowToRunInFind
 */
function addRecord(event) {
	var _query = 'SELECT security_key_id FROM sec_security_key WHERE module_id IS NULL';
	var _dataSet = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, null, -1);
	
	if (globals.svy_sec_showSelectionDialog('db:/' + globals.nav_db_framework + '/sec_security_key', _dataSet, ['security_key_id'], ['name'], ['Key'], [200], 600, true) == 'select') {
		var tempFoundset = forms['svy_sec_selection_dialog_sec_security_key'].foundset.duplicateFoundSet();
		/** @type {JSFoundSet<db:/svy_framework/sec_security_key>} */
		var _fsSecurityKeys = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/sec_security_key');
		for (var i = 1; i <= tempFoundset.getSize(); i++) {
			tempFoundset.setSelectedIndex(i);
			
			if (tempFoundset['is_selected'] == 1) {
				_fsSecurityKeys.find();
				_fsSecurityKeys.security_key_id = tempFoundset['security_key_id'];
				_fsSecurityKeys.search();
				_fsSecurityKeys.module_id = forms[globals.svy_utl_getFrameworkFormName("sec_main_module")].module_id;
			}
		}
		
		databaseManager.saveData();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DBFF3E44-9F8F-4006-90D3-68D2F74B64A9"}
 */
function deleteRecord(event) {
	foundset.module_id = null;
	
	databaseManager.saveData();
}
