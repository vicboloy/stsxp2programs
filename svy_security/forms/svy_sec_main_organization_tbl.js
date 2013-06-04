/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6DEEB82A-3E49-41BC-8967-8156E8E02140"}
 */
function deleteRecord(event) {
	var _btnOK = i18n.getI18NMessage('svy.fr.lbl.ok');
	if (globals.DIALOGS.showQuestionDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.delete_organization'), _btnOK, i18n.getI18NMessage('svy.fr.lbl.cancel')) == _btnOK) {
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
 * @properties={typeid:24,uuid:"93A47E5A-9A84-4845-9B87-4B57543F3370"}
 */
function addRecord(event) {	
	forms.svy_sec_main_new_organization.foundset.newRecord();
	forms.svy_sec_main_new_organization.foundset.owner_id = forms[globals.svy_utl_getFrameworkFormName("sec_main_owner")].foundset.owner_id;
	
	var window = application.createWindow('svy_sec_main_new_organization', JSWindow.MODAL_DIALOG);
	window.title = i18n.getI18NMessage('svy.fr.lbl.organization');
	window.show('svy_sec_main_new_organization');
}
