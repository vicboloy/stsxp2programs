/**
 * @properties={typeid:35,uuid:"771DC8CA-C43E-43D4-B00F-A46693305167",variableType:-4}
 */
var editAddressFlag = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1965D683-4062-420F-A3A7-09CE735A5E8E"}
 */
function delSelectedAddress(event) {
	globals.doDialog("Delete Record","Delete this address?","Delete","Cancel Action");
	if (globals.dialogResponse == "yes"){
		foundset.deleteRecord();
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3268BC50-5A10-4EE0-9547-CC071F13BFDA"}
 */
function addNewAddress(event) {
	onEditAddress(event,true);
	var employeeUUID = forms.employees_lst.employee_id;
	var customerUUID = forms.customers_lst.customer_id;
	var form = application.getActiveWindow();
	foundset.newRecord();
	if (form.title == "Employees"){
		foundset.customer_id = employeeUUID;
	}
	if (form.title == "Customers"){
		foundset.customer_id = customerUUID;
		//forms.addressesCustomer.onActionEditAddress(event);
	}
	foundset.tenant_uuid = globals.secCurrentTenantID;
	onActionEditAddress(event);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"2D2C9CB6-BC69-4956-A0EF-ED3990541D03"}
 */
function onDataChangeZipCode(oldValue, newValue, event) {
	if (!utils.hasRecords(sts_addresses_to_zip)){
		//TODO throw dialog error this zipcode does not exist, need to add zipcode
		return false
	} else {
		if(!city){
			city = sts_addresses_to_zip.primary_city;
		} else if(city != sts_addresses_to_zip.primary_city) {
			//TODO throw dialog city is wrong
			// set focus to city field
			
		}
		if(!state){
			state = sts_addresses_to_zip.state;
		} else if(state != sts_addresses_to_zip.state) {
			//TODO throw dialog state is wrong
			// set focus to state field
		}
	}
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"EC5EA9E7-95A5-4380-A18D-20EDCE050212"}
 * @AllowToRunInFind
 */
function onAddressTypeChange(oldValue, newValue, event) {
	var ds = application.getValueListItems('address_types').getColumnAsArray(2);
	if(ds.indexOf(newValue) == -1) {
		/**@type {JSFoundSet<db:/stsservoy/valuelists>} */
		var fs = databaseManager.getFoundSet("db:/stsservoy/valuelists");
		fs.newRecord();
		fs.value1 = newValue;
		fs.creation_date = new Date;
		fs.value2 = null;
		fs.valuelist_name = "address_types";
		fs.value_id = application.getValueListArray('address_types').length + 1;
		fs.tenant_uuid = globals.secCurrentTenantID;
	}
	//TODO Address should have only one in each Address Type
	//var fs = databaseManager.getFoundSet('db:/stsservoy/addresses')
	/** var fs = databaseManager.getFoundSet('db:/stsservoy/customers');
	if(fs.find()){
		fs.customer_id = globals.selectedCustomerID;
		sts_cust_to_address.address_id = address_id;
		var count = fs.search();
		if (count > 0) {
			controller.deleteRecord();
			controller.setSelectedIndex(globals.selectedAddressIndex);
		}
	}
	**/
 	return true
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"AC080D32-4094-4A4B-9591-EA87495D8865"}
 */
function onRenderDeleteAddressButton(event) {
	if (!editAddressFlag){
		var addyType = address_type;
		if (addyType != null){
			elements.deleteButton.text = "Delete \'"+addyType+"\'";
			elements.deleteButton.visible = true;
		} else {
			elements.deleteButton.visible = false;
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"86B853C9-AA6A-4395-89A8-B1BB1F8939C7"}
 */
function onRenderEditAddressButton(event) {
	if (!editAddressFlag){
		var addyType = address_type;
		if (addyType != null){
			elements.editButton.visible = true;
		} else {
			elements.editButton.visible = false;
		}
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D92C5F5E-161C-410F-A7DA-0243B2333602"}
 */
function onActionEditAddress(event) {
	onEditAddress(event,true);
	databaseManager.setAutoSave(false);
	var count = databaseManager.getFoundSetCount(foundset);
	if (count == 0){
		controller.newRecord();
	}

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"ED0E61C4-70AF-43D4-949A-4632C8344733"}
 */
function onEditAddress(event,editStatus){
	editAddressFlag = editStatus;
	elements.deleteButton.visible = !editStatus;
	elements.addAddressButton.visible = !editStatus;
	elements.cancelButton.visible = editStatus;
	elements.saveButton.visible = editStatus;
	elements.editButton.visible = !editStatus;
	controller.readOnly = !editStatus;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FF7606F7-99DE-4C97-8E9E-385A230040D9"}
 */
function onActionSaveEditAddress(event) {
	onEditAddress(event,false);
	foundset.tenant_uuid = globals.secCurrentTenantID;
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E71A7A0A-4F5D-4AE6-AC22-33D055AD20FB"}
 */
function onActionCancelEditAddress(event) {
	onEditAddress(event,false);
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
}
