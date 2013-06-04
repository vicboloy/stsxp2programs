/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"67CD5545-8DCA-4EF6-8CD7-BB6CACF4A62B"}
 */
function deleteRecord(event) {
	var _btnOK = i18n.getI18NMessage('svy.fr.lbl.ok');
	if (globals.DIALOGS.showQuestionDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.delete_user'), _btnOK, i18n.getI18NMessage('svy.fr.lbl.cancel')) == _btnOK) {
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
 * @properties={typeid:24,uuid:"5F7D8C71-A05C-480D-BBB7-F9CBD4075D8A"}
 */
function addRecord(event) {
	foundset.newRecord();
	forms[globals.svy_utl_getFrameworkFormName('sec_main_user')].foundset['owner_id'] = globals.svy_sec_lgn_owner_id;	
	forms[globals.svy_utl_getFrameworkFormName('sec_main_user')].controller.focusFirstField();	
}
