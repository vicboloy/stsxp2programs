/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C8FE22F3-9879-4FD0-A0ED-8D4F46D0F3CF"}
 */
function addRecord(event) {
	var instance = globals.getInstanceForm(event);
	var spec_form = 'customer_specs'+instance;
	var list_form = 'customers_lst'+instance;
	forms[spec_form].elements.tabs.tabIndex = 1;
	databaseManager.setAutoSave(false);
	globals.selectedCustomerIndex = controller.getSelectedIndex();
	forms[spec_form].onActionEdit(event,true);
	forms[list_form].controller.newRecord();
	forms[spec_form].elements.tabs.setTabEnabledAt(4,false);//disable addresses tab after save

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
	var instance = globals.getInstanceForm(event);
	var customersDivider = globals.customersDividerLocation;
	if (customersDivider == 0.0){
		forms['customers'+instance].elements.tabs.dividerLocation = 317.0;
	}
	//globals.setUserFormPermissions(event);
}
/**
 * @param event
 * @param editing
 *
 * @properties={typeid:24,uuid:"12323A23-7C38-45F7-BD1B-1D7F2DC6FBD1"}
 */
function onEdit(event,editing){
	controller.enabled = !editing;
	controller.readOnly = !editing;	
	elements.btn_New.visible = !editing;
}