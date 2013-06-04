/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F1798210-94F4-4802-AA80-B234373B6E1C"}
 * @AllowToRunInFind
 */
function addRecord(event) {
	foundset.newRecord()
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key")].controller.focusFirstField();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E7AB9B7C-20B0-4996-98D7-CE08578039DE"}
 */
function deleteRecord(event) {
	var _btnOK = i18n.getI18NMessage('svy.fr.lbl.ok');
	if (globals.DIALOGS.showQuestionDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.delete_key'), _btnOK, i18n.getI18NMessage('svy.fr.lbl.cancel')) == _btnOK) {
		foundset.deleteRecord();
	}
}
