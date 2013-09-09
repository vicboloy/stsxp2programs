
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09698FA2-3239-4260-BCEA-8F319508B3C2"}
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
 * @properties={typeid:24,uuid:"8D4AD023-995D-4D64-9E26-8BE07730CA63"}
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
 * @properties={typeid:24,uuid:"F9CC4451-2D7A-4846-8DB7-5BD91C240CA9"}
 */
function onCustomerRecordSelection(event) {
	globals.currentCustomer = controller.getDataProviderValue('customer');
}
