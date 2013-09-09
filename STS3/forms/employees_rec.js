/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E88532B2-DBA7-44FE-AB97-9CB7F2C2B423"}
 */
function delCustomerRecord(event) {
	//var success = forms.customers_lst.controller.deleteRecord();
	// TODO confirmation Delete
	application.output('Deleting Record. '+forms.customers_lst.customer_number);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9270663C-8A5A-40DE-A4A1-FB1B9F481DAB"}
 */
function addEmployeeRecord(event) {
	var success = forms.employees_lst.controller.newRecord();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B925DC6-4609-4234-9C84-7063123F32F2"}
 */
function onShow(firstShow, event) {
	var employeesDivider = globals.employeesDividerLocation;
	if (employees = 0.0){
		forms.employees.elements.tabs.dividerLocation = 317.0;
	}
}
