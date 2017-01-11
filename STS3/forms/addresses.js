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
	globals.doDialog(i18n.getI18NMessage('sts.txt.delete.record'),i18n.getI18NMessage('sts.txt.delete.this.address.question'),i18n.getI18NMessage('sts.txt.delete'),i18n.getI18NMessage('sts.txt.cancel'));
	if (globals.dialogResponse.toLowerCase() == 'yes'){
		delete_flag = 99;
		edit_date = new Date();
		var rec = foundset.getSelectedRecord();
		databaseManager.saveData(rec);
		if (foundset.getSize() == 0){
			//var topForm = globals.getParentForm();
			//while (true){
				//for (element in forms[topForm]){
					
				//}
				//forms.customer_specs.elements.
			//} set up for multiple windows
			if (forms.customer_specs.onActionEdit){forms.customer_specs.onActionEdit(event,false)}
		}
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3268BC50-5A10-4EE0-9547-CC071F13BFDA"}
 * @AllowToRunInFind
 */
function addNewAddress(event) {
	var formRev = scopes.globals.getInstanceForm(event);
	//onActionEdit(event,true);
	var form = application.getActiveWindow();
	var entityId = "";
	if (form.title.search('Employees') != -1){
		entityId = forms["employees_lst"+formRev].employee_id;
	}
	if (form.title.search('Customers') != -1){
		entityId = forms["customers_lst"+formRev].customer_id;
	}
	_super.newRecord(event,null,true,true);
	customer_id = entityId;
	tenant_uuid = globals.secCurrentTenantID;
	onActionEdit(event,true);
}

/**
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"2D2C9CB6-BC69-4956-A0EF-ED3990541D03"}
 */
function onDataChangeZipCode(oldValue, newValue, event) {
	if (!utils.hasRecords(sts_addresses_to_zip)){
		globals.errorDialogMobile(event,"7001",zip_postal_code,"");
		var response = globals.DIALOGS.showQuestionDialog(
			i18n.getI18NMessage('sts.txt.use.this.entry.anyway'),
			i18n.getI18NMessage('sts.txt.use.this.entry.anyway'),
			[i18n.getI18NMessage('sts.btn.yes'),
			i18n.getI18NMessage('sts.btn.no')]);
		if (response == i18n.getI18NMessage('sts.btn.yes')){
			return true;
		} else {
			return false
		}
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
 * @param {JSEvent} event
 * @param oldValue
 * @param newValue
 *
 * @properties={typeid:24,uuid:"EC5EA9E7-95A5-4380-A18D-20EDCE050212"}
 * @AllowToRunInFind
 */
function onAddressTypeChange(event, oldValue, newValue) {
	var formName = event.getFormName();
	var instance = globals.getInstanceForm(event);
	var isCustAddr = (formName.search('Cust') != -1);
	var isEmpAddr = (formName.search('Emp') != -1);
	if (isCustAddr){//#task11 change to QBSelect, also 
		var entityId = forms['customers_rec'+instance].customer_id;
	}
	if (isEmpAddr){
		entityId = forms['employees_rec'+instance].employee_id;
	}
	
	/** @type {QBSelect<db:/stsservoy/addresses>} */
	var e = databaseManager.createSelect('db:/stsservoy/addresses');

	e.result.add(e.columns.address_id);
	e.where.add(e.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	e.where.add(e.columns.delete_flag.isNull);
	e.where.add(e.columns.address_type.eq(address_type.trim()));
	e.where.add(e.columns.customer_id.eq(entityId));
	var E = databaseManager.getFoundSet(e);
	if (E.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/addresses>} */
		var rec = E.getRecord(1);
		databaseManager.revertEditedRecords(foundset);
		var index = foundset.getRecordIndex(rec);
		controller.setSelectedIndex(index);
		onActionCancelEdit(event);
	}
 	return true
}
/**
 * @param {JSEvent} event
 * @param {Boolean} editStatus
 *
 * @properties={typeid:24,uuid:"D92C5F5E-161C-410F-A7DA-0243B2333602"}
 */
function onActionEdit(event, editStatus) {
	editAddressFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.btn_Delete.visible = editStatus;
	elements.btn_New.visible = editStatus;
	elements.tabless.readOnly = !editStatus;
	elements.editMessage.visible = editStatus;
	elements.btn_Delete.enabled = (foundset.getSize() != 0 && !(!foundset.address_type));

	databaseManager.setAutoSave(false);
	//var count = databaseManager.getFoundSetCount(foundset);
	if (editStatus && foundset.getSize() == 0){
		//controller.newRecord();
		addNewAddress(event);
	}
	elements.btn_New.enabled = true;
	var addTypeValue = elements.address_type.getDataProviderID();
	if (editStatus && !foundset[addTypeValue]){
		elements.address_type.requestFocus()
		elements.btn_New.enabled = false;
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"FF7606F7-99DE-4C97-8E9E-385A230040D9"}
 * @AllowToRunInFind
 */
function onActionSaveEdit(event) {
	//onActionEdit(event, false);
	var formName = application.getActiveWindow().getName();
	var instance = globals.getInstanceForm(event);
	var isCustAddr = (formName.search('Cust') != -1);
	var isEmpAddr = (formName.search('Emp') != -1);
	if (isCustAddr){
		var entityId = forms['customers_rec'+instance].customer_id;
	}
	if (isEmpAddr){
		entityId = forms['employees_rec'+instance].employee_id;
	}
	customer_id = entityId; //Saving to address record, but customer_id represents both employee and customer, but primary keys differ
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(false);
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E71A7A0A-4F5D-4AE6-AC22-33D055AD20FB"}
 */
function onActionCancelEdit(event) {
	onActionEdit(event,false);
	databaseManager.revertEditedRecords(foundset);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24D5F6D8-B068-4741-8454-B8460E276AAD"}
 */
function onActionClose(event) {
	onActionCancelEdit(event);
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
	
	//onEditAddress(event,false);
	var form = application.getActiveWindow();
	//var selIndex = 1;
	var currentID = "";
	if (form.title.search('Employees') != -1){
		currentID = forms["employee_specs"+formRev].employee_id;
		//forms["employee_specs_"+formRev].currentSelection = forms["employees_lst_"+formRev].foundset.getSelectedIndex();
		
	}
	if (form.title.search('Customers') != -1){
		currentID = forms["customers_lst"+formRev].customer_id;
		//selIndex = foundset.getSelectedIndex();//forms["customers_lst_"+formRev].foundset.getSelectedIndex();
	}
	//controller.setSelectedIndex(selIndex);
	
	var tempArray = [];
	/** @type {QBSelect<db:/stsservoy/addresses>} */
	var fs = databaseManager.createSelect('db:/stsservoy/addresses');
	fs.result.add(fs.columns.address_type);
	fs.where.add(fs.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	fs.where.add(fs.columns.customer_id.eq(currentID));
	var A = databaseManager.getFoundSet(fs);
	var count = A.getSize();
	for (var index = 1;index <= count;index++){
		/** @type {JSRecord<db:/stsservoy/addresses>} */
		var rec = A.getRecord(index);
		if (tempArray.indexOf(rec.address_type) == -1){
			tempArray.push(rec.address_type);
		}
	}
	application.setValueListItems('stsvl_address_types',tempArray);
	elements.btn_Delete.enabled = (count > 0);
	globals.setUserFormPermissions(event);
}


/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"718BC3DA-0399-48C1-B30B-4F89819F2C79"}
 */
function onRecordSelection(event) {
	if (!address_type){
		elements.address_type.requestFocus();
	}
	return _super.onRecordSelection(event)
}
