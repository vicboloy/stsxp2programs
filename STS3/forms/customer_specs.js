/**
 * @properties={typeid:35,uuid:"4137BDC4-EC26-4862-85D9-B069B6EEE5C2",variableType:-4}
 */
var editCustomerFlag = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"802350B1-D095-4D37-BC3A-4E412FDAFEB1"}
 */
 function delDialog(event) {
		globals.doDialog("Delete Record","Delete this Customer?","Delete","Cancel");
		if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1FC02317-CBF4-4ED9-A5EF-EF22CD4EB0E3"}
 */
function onShow(firstShow, event) {
	//set this up for edit, save, cancel
	controller.readOnly = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F94C7F1E-1DC1-401C-B4F0-2BEFF570F3D3"}
 */
 function delRecord(event) {
		globals.doDialog("Delete Record","Delete this Customer?","Delete","Cancel");
		if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}
}
 
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"4E55E3A9-A2A1-4E0F-9334-3CCBA4C0849A"}
 */
function onRenderDelButton(event) {
	elements.delButton.text = 'Delete \''+name+'\'';
}

/**
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"F3350810-0151-4CB9-A0F6-5AE417EB6BA6"}
 * @AllowToRunInFind
 */
function onDataChangeCustomerNumber(oldValue, newValue, event) {
	if (name == null){
		name = "X";
	}
	databaseManager.setAutoSave(true);
	databaseManager.nullColumnValidatorEnabled = false;
	if (globals.newCustomerRecord != null){
		globals.newCustomerRecord = customer_id;
	}
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		customer_number = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			foundset.deleteRecord();
			onEdit(event,false);
		}
		foundset.sts_customer_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedCustomerIndex);
	}
	databaseManager.setAutoSave(true);
	return true
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event button event
 * @param editStatus set event status to editing or not to disable buttons, etc
 *
 * @properties={typeid:24,uuid:"4A63FEF7-8E1D-4259-8802-458387506F0A"}
 */
function onEdit(event,editStatus){
	//forms.customers_rec.controller.readOnly = !editStatus;
	forms.customers_rec.controller.enabled = !editStatus;
	forms.customer_contact.controller.readOnly = !editStatus;
	forms.customer_barcode.controller.readOnly = !editStatus;
	forms.customer_taxes.controller.readOnly = !editStatus;
	forms.customer_specs.editCustomerFlag = editStatus;
	forms.customers_rec.elements.addNewButton.visible = !editStatus;
	forms.customer_specs.elements.cancelButton.visible = editStatus;
	forms.customer_specs.elements.delButton.visible = !editStatus;
	forms.customer_specs.elements.saveButton.visible = editStatus;
	forms.customer_specs.elements.editButton.visible = !editStatus;
	forms.customer_contact.elements.editMessage.visible = editStatus;
	forms.customer_barcode.elements.editMessage.visible = editStatus;
	forms.customer_taxes.elements.editMessage.visible = editStatus;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"294916D7-4D48-4FBF-AC0B-5FD36F6396BF"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	databaseManager.setAutoSave(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"601D6CBF-6388-4BAA-977C-B2F99A0803E4"}
 */
function onActionCancelEdit(event) {
	onEdit(event,false);
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A1A1A785-417C-4E54-8753-674C58E45BA9"}
 */
function onActionSaveEdit(event){
	onEdit(event,false);
	tenant_uuid = scopes.globals.secCurrentTenantID;
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}
