/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8E0F2B14-295C-4365-A8C8-7E4B9FD4D98E"}
 */
function addRecord(event) {
	
	var _key = forms[globals.svy_utl_getFrameworkFormName("sec_main_key")].security_key_id
	
	/** @type {JSFoundSet<db:/svy_framework/nav_menu>} */
	var _fs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_menu')
	
	var _tempRec
	
	/** @type {QBSelect<db:/svy_framework/nav_menu>} */
	var q = databaseManager.createSelect('db:/svy_framework/nav_menu')
	q.result.addPk()
	q.where.add(q.or.add(q.columns.security_key_id.isNull).add(q.columns.security_key_id.not.eq(_key)))

	var _dataSet = databaseManager.getDataSetByQuery(q, -1)
	
	var _select = globals.svy_sec_showSelectionDialog(	'db:/' + globals.nav_db_framework + '/nav_menu', 
														_dataSet, 
														['menu_id'], 
														['name'], 
														['Name'], 
														[400], 
														600, 
														true)
	
	if (_select == 'select') {
		var tempFoundset = forms['svy_sec_selection_dialog_nav_menu'].foundset.duplicateFoundSet();
		for (var i = 1; i <= tempFoundset.getSize(); i++) {
			_tempRec = tempFoundset.getRecord(i)
			if (_tempRec['is_selected'] == 1) {
				_fs.loadRecords(_tempRec['menu_id'])
				if(_fs.security_key_id) //layout already has a key
				{
					//Are you sure you want to add layout {0} to this key. Layout {1} already is connected to key {2}. A layout can only be connected to one key so the conection to key {3} will be lost.
					var _warning = i18n.getI18NMessage('svy.fr.dlg.menu_has_key',
																					[
																					_tempRec['name'], 
																					_tempRec['name'], 
																					_tempRec['nav_menu_to_sec_security_key.name'], 
																					_tempRec['nav_menu_to_sec_security_key.name']
																					])
					var _yes = i18n.getI18NMessage('svy.fr.lbl.yes')
					var _answer = globals.DIALOGS.showWarningDialog('i18n:svy.fr.lbl.add_menu',_warning,_yes,'i18n:svy.fr.lbl.cancel')
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
 * @properties={typeid:24,uuid:"53CD9D95-D145-4D03-B786-731979FDD81C"}
 */
function deleteRecord(event) {
	security_key_id = null
	databaseManager.saveData(foundset.getSelectedRecord());
}
