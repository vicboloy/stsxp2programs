/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FCCA991E-1F48-470D-9E5D-3963743C7593"}
 * @AllowToRunInFind
 */
function addRecord(event) {
	
	var _key = forms[globals.svy_utl_getFrameworkFormName("sec_main_key")].security_key_id
	
	/** @type {JSFoundSet<db:/svy_framework/nav_function>} */
	var _fs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_function')
	
	var _tempRec
	
	/** @type {QBSelect<db:/svy_framework/nav_function>} */
	var q = databaseManager.createSelect('db:/' + globals.nav_db_framework + '/nav_function')
	q.result.addPk()
	q.where.add(q.or.add(q.columns.security_key_id.isNull).add(q.columns.security_key_id.not.eq(_key)))

	var _dataSet = databaseManager.getDataSetByQuery(q, -1)
	
	var _select = globals.svy_sec_showSelectionDialog(	'db:/' + globals.nav_db_framework + '/nav_function', 
														_dataSet, 
														['function_id'], 
														['display_description'], 
														['Name'], 
														[300, 400], 
														600, 
														true)
	
	if (_select == 'select') {
		var tempFoundset = forms['svy_sec_selection_dialog_nav_function'].foundset.duplicateFoundSet();
		for (var i = 1; i <= tempFoundset.getSize(); i++) {
			_tempRec = tempFoundset.getRecord(i)
			if (_tempRec['is_selected'] == 1) {
				_fs.loadRecords(_tempRec['function_id'])
				if(_fs.security_key_id) //layout already has a key
				{
					var _warning = i18n.getI18NMessage('svy.fr.dlg.function_has_key',
																					[
																					_tempRec['display_description'], 
																					_tempRec['display_description'], 
																					_tempRec['nav_function_to_sec_security_key.name'], 
																					_tempRec['nav_function_to_sec_security_key.name']
																					])
					var _yes = i18n.getI18NMessage('svy.fr.lbl.yes')
					var _answer = globals.DIALOGS.showWarningDialog('i18n:svy.fr.lbl.add_function',_warning,_yes,'i18n:svy.fr.lbl.cancel')
					if(_answer != _yes) 
					{
						continue
					}
				}
				_fs.security_key_id = _key
			}
		}
		
		databaseManager.saveData(_fs);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3DE61329-FC15-4BEA-9EAF-43E2C52C7FBC"}
 */
function deleteRecord(event) {
	security_key_id = null
	databaseManager.saveData(foundset.getSelectedRecord());
}
