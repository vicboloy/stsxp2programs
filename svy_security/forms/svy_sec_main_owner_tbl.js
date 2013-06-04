/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"35E9FC50-EF71-4374-96F6-A51215DA6D61"}
 */
function deleteRecord(event) {
	var _btnOK = i18n.getI18NMessage('svy.fr.lbl.ok');
	if (globals.DIALOGS.showQuestionDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.delete_owner'), _btnOK, i18n.getI18NMessage('svy.fr.lbl.cancel')) == _btnOK) {
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
 * @properties={typeid:24,uuid:"FA53CFEE-349F-486E-80FD-22200CAD3A1B"}
 */
function addRecord(event) {
	foundset.newRecord();
	forms[globals.svy_utl_getFrameworkFormName("sec_main_owner")].controller.focusFirstField();
}
