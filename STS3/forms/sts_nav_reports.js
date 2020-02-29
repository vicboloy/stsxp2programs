
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC5CB582-E4B0-4AF4-8D5B-7EB8890F19EA"}
 */
function onShow(firstShow, event) {
	elements.btn_FoxfireReports.enabled = !(!scopes.prefs.foxfireexe);
	//if (firstShow){
	globals.setUserFormPermissions(event,false);
	//}

	return _super.onShow(firstShow, event)
}
