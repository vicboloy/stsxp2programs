
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"058BCBC0-CBF7-4535-BAEB-E7F72AFD29C3"}
 */
function onShow(firstShow, event) {
	scopes.jobs.formPermissions(event,false);
}
