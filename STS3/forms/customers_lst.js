
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09698FA2-3239-4260-BCEA-8F319508B3C2"}
 */
function addCustomerRecord(event) {
	var instance = globals.getInstanceForm(event);
	forms['customers_lst'+instance].controller.newRecord();
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5676FC4B-0DA9-4836-88A8-09A587AA36D6"}
 */
function onRecordSelection(event) {
	var instance = globals.getInstanceForm(event);
	globals.selectedCustomerIndex = controller.getSelectedIndex(); 
	globals.selectedCustomerID = customer_id; 
	forms['customer_specs'+instance].elements.btn_Delete.enabled =  (globals.checkCustEmpty(customer_id)) && (forms.customers_rec.elements.btn_New.visible);
	forms['customer_specs'+instance].elements.btn_Edit.enabled = true;
	forms['customer_barcode'+instance].calcBarcode();
}
