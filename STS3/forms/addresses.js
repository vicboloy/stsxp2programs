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
 * @AllowToRunInFind
 */
function addNewAddress(event) {
	var formRev = scopes.globals.getInstanceForm(event);
	onEditAddress(event,true);
	var form = application.getActiveWindow();
	var entityId = "";
	if (form.title.search("Employees") != -1){
		entityId = forms["employees_lst"+formRev].employee_id;
	}
	if (form.title.search("Customers") != -1){
		entityId = forms["customers_lst"+formRev].customer_id;
	}
	var rec = _super.newRecord(event,null,true,true);
	foundset.customer_id = entityId;
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
	//TODO Address should have only one in each Address Type, per Job
	/** @type {JSFoundSet<db:/stsservoy/addresses>} */
	var fs = databaseManager.getFoundSet('stsservoy','addresses');
	if(fs.find()){
		fs.customer_id = customer_id;
		fs.tenant_uuid = globals.secCurrentTenantID;
		fs.address_type = address_type;
		var count = fs.search();
		if (count > 0) {
			controller.deleteRecord();
			globals.selectedAddressIndex = controller.getSelectedIndex();
			controller.setSelectedIndex(2);
			onActionCancelEditAddress(event);
		}
	}
	//forms.addresses.controller.loadRecords(fs);
	//forms.addresses.controller.loadAllRecords();
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
			//elements.deleteButton.visible = false;
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
	//controller.enabled = status;
	editAddressFlag = editStatus;
	elements.deleteButton.visible = !editStatus;
	elements.addAddressButton.visible = !editStatus;
	elements.cancelButton.visible = editStatus;
	elements.saveButton.visible = editStatus;
	elements.editButton.visible = !editStatus;
	elements.tabless.enabled = !editStatus;
	elements.address_type.enabled = editStatus;
	elements.address_type.editable = editStatus;
	elements.address_type.readOnly = !editStatus;
	elements.line1.editable = editStatus;
	elements.line2.editable = editStatus;
	elements.city.editable = editStatus;
	elements.state.editable = editStatus;
	elements.zip_postal_code.editable = editStatus;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FF7606F7-99DE-4C97-8E9E-385A230040D9"}
 */
function onActionSaveEditAddress(event) {
	onEditAddress(event,false);
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

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E4D57B4-E6C1-4A99-AF34-6B12A4F2BE23"}
 */
function onRecordSelection(event) {
	application.output('test')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24D5F6D8-B068-4741-8454-B8460E276AAD"}
 */
function onActionClose(event) {
	onActionCancelEditAddress(event);
	globals.setWindowClosed(event.getFormName());
	globals.mainWindowFront();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"58D23BAB-196E-45BC-9D0D-1390DA9370E1"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	var formRev = scopes.globals.getInstanceForm(event);
	
	onEditAddress(event,false);
	var form = application.getActiveWindow();
	//var selIndex = 1;
	var currentID = "";
	if (form.title.search("Employees") != -1){
		currentID = forms["employee_specs"+formRev].employee_id;
		//forms["employee_specs_"+formRev].currentSelection = forms["employees_lst_"+formRev].foundset.getSelectedIndex();
		
	}
	if (form.title.search("Customers") != -1){
		currentID = forms["customers_lst"+formRev].customer_id;
		//selIndex = foundset.getSelectedIndex();//forms["customers_lst_"+formRev].foundset.getSelectedIndex();
	}
	//controller.setSelectedIndex(selIndex);
	
	var tempArray = [];
	/** @type {JSFoundSet<db:/stsservoy/addresses>} */
	var fs = databaseManager.getFoundSet('stsservoy','addresses');
	if (fs.find()){
		fs.tenant_uuid = globals.session.tenant_uuid;
		fs.customer_id = currentID;
		var count = fs.search();
		for (var index = 1;index <= count;index++){
			var rec = fs.getRecord(index);
			if (tempArray.indexOf(rec.address_type) == -1){
				tempArray.push(rec.address_type);
			}
		}
	}
	application.setValueListItems('stsvl_address_types',tempArray);

}
