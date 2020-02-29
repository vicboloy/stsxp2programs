
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B556485-D5DC-47F8-9118-73C8A7B13450"}
 */
function onShow(firstShow, event) {
	scopes.jobs.formPermissions(event,false);
}
