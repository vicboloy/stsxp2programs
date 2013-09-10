
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1965D683-4062-420F-A3A7-09CE735A5E8E"}
 */
function delSelectedAddress(event) {
	var takeAction = globals.doDialog("Delete Record","Delete this address?","Delete","Cancel Action");
	if (globals.dialogResponse == "yes"){
		foundset.deleteRecord();
	}
	
	// TODO handle dialog for proper delete
	//application.output("deleting address")
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3268BC50-5A10-4EE0-9547-CC071F13BFDA"}
 */
function addNewAddress(event) {
	var employeeUUID = forms.employees_lst.employee_id;
	var customerUUID = forms.customers_lst.customer_id;
	var form = application.getActiveWindow();
	var success = foundset.newRecord();
	if (form.title == "Employees"){
		foundset.customer_id = employeeUUID;
	}
	if (form.title == "Customers"){
		foundset.customer_id = customerUUID;
		onActionEditAddress(event);
	}
	
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
	}
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
	// TODO Auto-generated method stub
	// NOTE: a property set on the renderable, will be kept on the element only during onRender
	/** if (event.isRecordSelected()) {
		event.getRenderable().fgcolor = '#00ff00';
	} else if (event.getRecordIndex() % 2) {
		event.getRenderable().fgcolor = '#ff0000';
	}
	**/
	var addyType = address_type;
	if (addyType != null){
		elements.deleteButton.text = "Delete \'"+addyType+"\'";
		elements.deleteButton.visible = true;
	} else {
		elements.deleteButton.visible = false;
	}
	
}
