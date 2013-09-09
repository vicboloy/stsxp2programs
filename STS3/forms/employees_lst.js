/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B5CEB37-700B-4C6B-B9C6-F32EDC27BE37"}
 */
function addCustomerRecord(event) {
	var success = forms.customers_lst.controller.newRecord();
	if (success) {
		application.output("Success adding customer record.")
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"69C2916D-21E8-4005-A033-21CFC070BB79"}
 */
function delCustomerRecord(event) {
	//var success = forms.customers_lst.controller.deleteRecord();
	// TODO confirmation Delete
	application.output('Deleting Record. '+forms.customers_lst.customer_number);
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BD7FBED-A508-4D66-83DE-47ABC6CAD1A5"}
 */
function onCustomerRecordSelection(event) {
	globals.currentCustomer = controller.getDataProviderValue('customer');
}
