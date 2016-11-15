
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E5A32FD-8CF5-451B-A164-04B3E008F894"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		var instance = scopes.globals.getInstanceForm(event);
		var formName = event.getFormName();
		formName = formName.replace(instance,'');
		scopes.jobs.tablePrefsLoad(formName);
	}
}
