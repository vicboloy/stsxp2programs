
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09698FA2-3239-4260-BCEA-8F319508B3C2"}
 */
function addCustomerRecord(event) {
	forms.customers_lst.controller.newRecord();
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5676FC4B-0DA9-4836-88A8-09A587AA36D6"}
 */
function onRecordSelection(event) {
	globals.selectedCustomerIndex = controller.getSelectedIndex(); 
}
