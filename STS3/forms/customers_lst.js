
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
	var rec = foundset.getSelectedRecord();
	if (!rec){return}
	globals.selectedCustomerIndex = controller.getSelectedIndex(); 
	globals.selectedCustomerID = customer_id; 
	var custId = rec.customer_id;//forms.employees.foundset.loadRecords()
	databaseManager.revertEditedRecords(forms['customers'+instance].foundset);//20180720 error showing changed foundset, this cleared error
	if (custId){
		//forms['customers'+instance].foundset.loadRecords(application.getUUID(custId));//
	}
	var windowName = application.getActiveWindow().getName();
	//application.output('windowname is '+windowName);
	if (forms['customers_rec'+instance].elements.btn_New.enabled){ //#task01
		forms['customer_specs'+instance].elements.btn_Delete.enabled = (globals.checkCustEmpty(customer_id)) && (forms.customers_rec.elements.btn_New.visible);
		forms['customer_specs'+instance].elements.btn_Edit.enabled = true;
		forms['customer_contact'+instance].verifyCustomerInput(event);
	}
	forms['customer_barcode'+instance].calcBarcode();
	forms['addressesCustomer'+instance].onActionEdit(event,false);
	globals.permissionsCacheHit(event,'customers_rec'+instance);
	globals.permissionsCacheHit(event,'customer_specs'+instance);
	globals.permissionsCacheHit(event,'customer_contact'+instance);
	globals.permissionsCacheHit(event,'customer_barcode'+instance);
	globals.permissionsCacheHit(event,'addressesCustomer'+instance);

}
