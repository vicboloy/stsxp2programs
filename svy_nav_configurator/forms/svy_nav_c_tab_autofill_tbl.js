/**
 *	 Create a new record
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"661739F5-3FA0-41AA-B281-27BF364F61DC"}
 */
function newRecord()
{
	controller.newRecord()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A5910F0D-EE7A-4E34-9F25-DF9A8C32EDFA"}
 */
function deleteRecord(event) {
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer =  globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no); 	
	if(_answer == _ok)
	{
		controller.deleteRecord()
	}
}
