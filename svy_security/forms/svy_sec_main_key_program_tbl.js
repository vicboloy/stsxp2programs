/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D39D4E85-00CC-40A2-88AE-35F56C5C0D67"}
 * @AllowToRunInFind
 */
function addRecord(event) {
	
	var _key = forms[globals.svy_utl_getFrameworkFormName("sec_main_key")].security_key_id.toString()
	
	/** @type {JSFoundSet<db:/svy_framework/nav_program>} */
	var _fs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_program')
	
	
	var _query = "select \
						p.program_id \
						from nav_program p \
						where program_id not in (select program_id \
										   from nav_navigation_keys n \
										   where n.code = 'program' and \
										   n.program_id = p.program_id and \
										   security_key_id = ?)"
	
	
	var _tempRec

	var _dataSet = databaseManager.getDataSetByQuery(globals.nav_db_framework,_query,[_key],-1)
	
	var _select = globals.svy_sec_showSelectionDialog(	'db:/' + globals.nav_db_framework + '/nav_program', 
														_dataSet, 
														['program_id'], 
														['program_name', 'display_description'], 
														['Name', 'Description'], 
														[300, 400], 
														600, 
														true)
	
	if (_select == 'select') {
		var tempFoundset = forms['svy_sec_selection_dialog_nav_program'].foundset.duplicateFoundSet();
		for (var i = 1; i <= tempFoundset.getSize(); i++) {
			_tempRec = tempFoundset.getRecord(i)
			if (_tempRec['is_selected'] == 1) {
				
				if(_fs.find())
				{
					_fs.program_id = _tempRec['program_id']
					_fs.search()
				}
				
				if(utils.hasRecords(_fs.nav_program_to_nav_navigation_keys$key_program) && _fs.nav_program_to_nav_navigation_keys$key_program.security_key_id) //layout already has a key
				{
					//Are you sure you want to add layout {0} to this key. Layout {1} already is connected to key {2}. A layout can only be connected to one key so the connection to key {3} will be lost.
					var _warning = i18n.getI18NMessage('svy.fr.dlg.program_has_key',
																					[
																					_tempRec['display_description'], 
																					_tempRec['display_description'], 
																					_tempRec['nav_program_to_nav_navigation_keys$key_program.nav_navigation_keys_to_sec_security_key.name'], 
																					_tempRec['nav_program_to_nav_navigation_keys$key_program.nav_navigation_keys_to_sec_security_key.name']
																					])
					var _yes = i18n.getI18NMessage('svy.fr.lbl.yes')
					var _answer = globals.DIALOGS.showWarningDialog('i18n:svy.fr.lbl.add_program',_warning,_yes,'i18n:svy.fr.lbl.cancel')
					if(_answer != _yes) 
					{
						continue
					}
				}
				if(!utils.hasRecords(_fs.nav_program_to_nav_navigation_keys$key_program))
				{
					_fs.nav_program_to_nav_navigation_keys$key_program.newRecord()
				}
				_fs.nav_program_to_nav_navigation_keys$key_program.security_key_id = _key
			}
		}
		databaseManager.saveData(_fs);
	}
	controller.loadRecords()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"02D1B7A4-0AFD-4E86-B98E-D30316C1F9B8"}
 */
function deleteRecord(event) {
	nav_program_to_nav_navigation_keys$key_program.deleteRecord()
	databaseManager.saveData(foundset.getSelectedRecord());
}
