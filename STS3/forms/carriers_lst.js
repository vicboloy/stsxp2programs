/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"641D28AD-D74F-4189-9829-A4EA0422A688"}
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
 * @properties={typeid:24,uuid:"84AC098F-7D5F-4889-8D7F-26BF1B77EB9B"}
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
 * @properties={typeid:24,uuid:"C7209F87-C977-4622-A7B0-2E89F0D8BB28"}
 */
function onCustomerRecordSelection(event) {
	globals.currentCustomer = controller.getDataProviderValue('customer');
}
