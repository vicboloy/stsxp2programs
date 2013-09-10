/**
 * @properties={typeid:35,uuid:"98459067-14E1-4E7B-94B9-C1F8956781B7",variableType:-4}
 */
var editCustomerAddressFlag = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50DD0501-7C3F-40A7-8894-82B5E7DBAC56"}
 */
function onActionEditAddress(event) {
	onEditAddress(event,true);
	databaseManager.setAutoSave(false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"84B2D92F-35FC-4F0E-8655-0244571BE03E"}
 */
function onEditAddress(event,editStatus){
	forms.addressesCustomer.editCustomerAddressFlag = !editStatus;
	forms.addressesCustomer.elements.editMessage.visible = editStatus;
	forms.addressesCustomer.elements.coverSheet.visible = !editStatus;
	forms.addressesCustomer.elements.cancelButton.visible = editStatus;
	forms.addressesCustomer.elements.saveButton.visible = editStatus;
	forms.addressesCustomer.elements.editButton.visible = !editStatus;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9831D84F-EC5A-4F02-9E78-9A6D5909C76D"}
 */
function onActionSaveEditAddress(event) {
	onEditAddress(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50D45652-DD7A-4CB6-B43B-0C11A30ADFB4"}
 */
function onActionCancelEditAddress(event) {
	onEditAddress(event,false);
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37B360EE-FBFB-4C4B-A231-D5677474A5B1"}
 */
function onActionCoverSheet(event) {
	//Intercept data entry field clicks to prohibit editing
}
