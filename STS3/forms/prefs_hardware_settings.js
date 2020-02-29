
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"321CF562-478E-4D57-8754-19540487C6E3"}
 */
function onShow(firstShow, event) {
	scopes.jobs.formPermissions(event,false);
}
