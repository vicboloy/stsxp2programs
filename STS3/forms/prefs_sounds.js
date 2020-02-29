
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"20108D2A-2985-4EA1-B3AC-D78C67C6F425"}
 */
function onShow(firstShow, event) {
	scopes.jobs.formPermissions(event,false);
}
