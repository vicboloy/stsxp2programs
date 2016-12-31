
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"42E0F80E-2BE7-40A7-B882-5D7FBAD5628F"}
 */
function onHide(event) {
	var formName = event.getFormName();
	var formNameTable = formName+'_table';
	scopes.jobs.removeFormHist(formNameTable);
	//var status = history.removeForm(formNameTable);
	//var status2 = solutionModel.removeForm(formNameTable);

	return _super.onHide(event)
}
