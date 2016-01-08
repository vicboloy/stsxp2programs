/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C8FE22F3-9879-4FD0-A0ED-8D4F46D0F3CF"}
 */
function addRecord(event) {
	databaseManager.setAutoSave(false);
	globals.selectedCustomerIndex = controller.getSelectedIndex();
	forms.customer_specs.onEdit(event,true);
	forms.customers_lst.controller.newRecord();
	globals.newCustomerRecord = null; //reset customer record for save current edit record
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
	globals.setUserFormPermissions(event);
}
