
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25605883-A2FE-498C-884D-C0F309F05695"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		var version = globals.getInstanceForm(event);
		var formName = event.getFormName();
		formName = formName.replace(version,'');
		scopes.jobs.tablePrefsLoad(formName);
	}}
