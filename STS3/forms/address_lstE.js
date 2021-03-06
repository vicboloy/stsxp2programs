
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6BA1A6BA-22CB-4EBA-A076-3771E468C9A3"}
 */
function onShow(firstShow, event) {
	scopes.jobs.formPermissions(event,false);
}
