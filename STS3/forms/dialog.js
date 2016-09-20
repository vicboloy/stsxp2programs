
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BD6BE02-12C5-4332-A53A-6DC287F8FA38"}
 */
function onDialogLoad(event) {
	globals.dialogResponse = "";
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E4F3D84-9DF2-40B8-9805-2A5F41665675"}
 */
function onShow(firstShow, event) {
	elements.btn_Yes.requestFocus();
	if (scopes.globals.dialogMessage == i18n.getI18NMessage('1072')){
		elements.btn_No.requestFocus();
	}
}
