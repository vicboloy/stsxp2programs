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

