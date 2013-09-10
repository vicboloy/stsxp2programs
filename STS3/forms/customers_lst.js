
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
