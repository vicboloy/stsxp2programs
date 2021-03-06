
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4BBA8123-E902-4C5A-A90E-D3E469558098"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		var version = globals.getInstanceForm(event);
		var formName = event.getFormName();
		formName = formName.replace(version,'');
		scopes.jobs.tablePrefsLoad(formName);
	}
}
