/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"641D28AD-D74F-4189-9829-A4EA0422A688"}
 */
function addCustomerRecord(event) {
	forms.customers_lst.controller.newRecord();
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"84AC098F-7D5F-4889-8D7F-26BF1B77EB9B"}
 */
function delCustomerRecord(event) {
	// TODO This probably isn't used.  Wrong place to put the deletion...
	application.output('Deleting Record. '+forms.customers_lst.customer_number);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"52897698-F5FB-49DC-B819-3527F96F7045"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		globals.setUserFormPermissions(event,false);

	}
}
