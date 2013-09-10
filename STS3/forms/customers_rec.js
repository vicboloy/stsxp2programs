
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"081939EA-C4C9-44E6-9462-46A2FE8A9FB7"}
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
 * @properties={typeid:24,uuid:"C8FE22F3-9879-4FD0-A0ED-8D4F46D0F3CF"}
 */
function addCustomerRecord(event) {
	globals.selectedCustomerIndex = controller.getSelectedIndex();
	forms.customer_contact.onEditCustomer(event,true);
	var success = forms.customers_lst.controller.newRecord();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D5D74E8-E2A8-40A8-8B86-3EC42C03D07F"}
 */
function onShow(firstShow, event) {
	var customersDivider = globals.customersDividerLocation;
	if (customersDivider == 0.0){
		forms.customers.elements.tabs.dividerLocation = 317.0;
	}
}
