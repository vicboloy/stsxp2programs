
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A444C58-DEF1-4966-BCCE-588F80A8B96A"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event,false);
}
