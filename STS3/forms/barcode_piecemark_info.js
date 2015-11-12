
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FDD2EE60-7C8B-4736-9694-E4D9E8EAF75B"}
 */
function onShow(firstShow, event) {
	var formName = event.getFormName();
	var formPrefix = formName.split("_")[0];
	var formCriteria = formPrefix+"idlabel";
	var formNameTable = formName+'_table';
	scopes.jobs.removeFormHist(formNameTable);
	forms[formName].elements.tabless.addTab(formNameTable);
	//scopes.jobs.tablePrefsLoad(top);
	return _super.onShow(firstShow, event)
}
