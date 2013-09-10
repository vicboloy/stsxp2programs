/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11FFFF66-EEDC-44A2-87F7-9EC38EE99CF5"}
 */
 function delCustomerRecord(event) {
		var takeAction = globals.doDialog("Delete Record","Delete this Customer?","Delete","Cancel");
		if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}
	}
 
	/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B080F990-8273-4617-99BC-F5DC8B431ACC"}
 */
function delCustomerRecordCancel(event) {
		//var success = forms.customer_contact.controller.deleteRecord();
		//controller.deleteRecord();
		// TODO confirmation Delete
		//application.output('Deleting Record. '+forms.customers_lst.customer_number);
	}
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"6756ADA3-D8F6-4D60-8D6A-ABD51DEE1680"}
 */
function onRenderCustomer(event) {
	// TODO Auto-generated method stub
	// NOTE: a property set on the renderable, will be kept on the element only during onRender
	/**
	 * if (event.isRecordSelected()) {
		event.getRenderable().fgcolor = '#00ff00';
	} else if (event.getRecordIndex() % 2) {
		event.getRenderable().fgcolor = '#ff0000';
	}
	**/
	elements.delCustomerButton.text = 'Delete Customer \''+name+'\'';
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"34AAA300-B75F-4801-8CF1-003984DEDBA2"}
 * @AllowToRunInFind
 */
function onDataChange(oldValue, newValue, event) {
	//databaseManager.setAutoSave(false);
	var foundCustomer = false;
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		name = newValue;
		foundCustomer = foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			foundset.deleteRecord();
		}
		foundset.sts_customer_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedCustomerIndex);
	}
	application.output("found "+newValue+" Customer ");
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event button event
 * @param editStatus set event status to editing or not to disable buttons, etc
 *
 * @properties={typeid:24,uuid:"E7FE9A7F-8D92-459A-A1E8-7DBE7BFFFB1C"}
 */
function onEditCustomer(event,editStatus){
	forms.customer_specs.editCustomerFlag = !editStatus;
	forms.customer_contact.elements.coverSheet.visible = !editStatus;
	forms.customer_barcode.elements.coverSheet.visible = !editStatus;
	forms.customer_contact.elements.cancelButton.visible = editStatus;
	forms.customer_contact.elements.saveButton.visible = editStatus;
	forms.customer_contact.elements.editButton.visible = !editStatus;
	forms.customer_contact.elements.editMessage.visible = editStatus;
	forms.customer_barcode.elements.editMessage.visible = editStatus;
	forms.customer_taxes.elements.editMessage.visible = editStatus;
	//forms.addressesCustomer.elements.editMessage.visible = editStatus;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"73627914-DC7D-4E58-B968-7F35A79246F7"}
 */
function onActionEditCustomer(event) {
	//var status = false;
	onEditCustomer(event,true);
	databaseManager.setAutoSave(false);
	//forms.customer_specs.editCustomerFlag = status;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8798C5E6-4D6B-4E89-9CE8-FF5E8ED73D60"}
 */
function onActionCancelEditCustomer(event) {
	//var status = false;
	onEditCustomer(event,false);
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
	//forms.customer_specs.editCustomerFlag = status;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C223AFB3-E018-4DDB-B8E3-CA37A0AF0C3A"}
 */
function onActionSaveEditCustomer(event){
	onEditCustomer(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A8AAD25-897E-4AA0-AA35-2B8716A9DD96"}
 */
function onActionCoverButton(event) {
	// cover buttons rather than set enabled for edit
}
