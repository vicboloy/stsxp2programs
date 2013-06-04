/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8E4DF73C-4E6A-4AB8-B6CF-27ACAE0B60E4"}
 */
function deleteRecord(event) {
	var _btnOK = i18n.getI18NMessage('svy.fr.lbl.ok');
	if (globals.DIALOGS.showQuestionDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.delete_group'), _btnOK, i18n.getI18NMessage('svy.fr.lbl.cancel')) == _btnOK) {
		foundset.deleteRecord();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"453ED6E8-63B7-4BF9-908B-24E9D1E2F308"}
 */
function addRecord(event) {
	foundset.newRecord();
	forms[globals.svy_utl_getFrameworkFormName('sec_main_group')].foundset['owner_id'] = globals.svy_sec_lgn_owner_id;
	forms[globals.svy_utl_getFrameworkFormName('sec_main_group')].controller.focusFirstField();
}
