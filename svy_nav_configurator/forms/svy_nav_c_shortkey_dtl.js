/**
 *	Delete Record
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"BA16D7BA-FA1D-4396-B892-768698D8FE8C"}
 */
function deleteRecord()
{
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer =  globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no); 	
	if(_answer == _ok)
	{
		controller.deleteRecord()
	}
}

/**
 *	Duplicate record
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"83995EB8-C53D-446A-8E80-7D038357A6AB"}
 */
function duplicateRecord()
{
	controller.duplicateRecord()
}

/**
 *	Create new record
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"A352617D-574A-444E-AC43-4BF283D6FCD2"}
 */
function newRecord()
{
	controller.newRecord()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} _event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F031D65-3FCA-4AFE-8F79-E7B3DD8BB18E"}
 */
function closeForm(_event) {
	globals.svy_nav_closeForm(_event)
}

/**
 *
 * @param {JSEvent} _event the event that triggered the action
 * @param {Boolean} _all
 *
 * @properties={typeid:24,uuid:"F197928F-C868-4E21-B5B5-42786952C3BA"}
 */
function dc_save(_event, _all) {
	
	//check if shortkey is not a duplicate
	var _query = 'SELECT shortkey_id \
					FROM nav_shortkey \
					WHERE shortkey_id != ? \
					AND shortkey = ? \
					AND flag_alt = ? \
					AND flag_system  = ? \
					AND flag_control = ? \
					AND flag_shift = ?'
	var _args = [shortkey_id.toString(), shortkey, flag_alt, flag_system, flag_control, flag_shift]
	var _dataset = databaseManager.getDataSetByQuery(globals.nav_db_framework,_query,_args,1)
	if(_dataset.getValue(1,1))
	{
		globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.excuse_me'), i18n.getI18NMessage('svy.fr.dlg.shortkey_exist'), i18n.getI18NMessage('svy.fr.lbl.ok'));
		return
	}
	_super.dc_save(_event, _all)
	globals.svy_nav_closeForm(_event)
}

/**
 *  @param {JSEvent} _event the event that triggered the action
 * @properties={typeid:24,uuid:"C285708D-2035-4A9B-8F97-583545EF0974"}
 */
function dc_cancel(_event) {
	_super.dc_cancel(_event)
	globals.svy_nav_closeForm(_event)
}
