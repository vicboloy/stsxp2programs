
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
	databaseManager.nullColumnValidatorEnabled = false;
	if (customer_number == null){
		customer_number = 'Number Required';
	}
	if (globals.newCustomerRecord == null){
		globals.newCustomerRecord = customer_id;
	} // #task 11 remove Servoy find
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var f = databaseManager.createSelect('db:/stsservoy/customers');
	f.result.add(f.columns.customer_id);
	f.where.add(f.columns.name.eq(newValue));
	f.where.add(f.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	f.where.add(f.columns.delete_flag.isNull);
	
	var F = databaseManager.getFoundSet(f);
	if (F.getSize() > 1){
		/** @type {JSRecord<db:/stsservoy/customers>} */
		var rec = "";
		var index = 1;
		while (rec = F.getRecord(index++)){
			if (rec.name == 'Name Required' || rec.customer_number == 'Number Required'){
				foundset.deleteRecord(rec);
			}
		}
		foundset.sts_customer_container.loadRecords();
	}
	if (F.getSize() > 0){
		//var variabl = event.getElementName();
		//forms[variabl] = oldValue;
		databaseManager.revertEditedRecords(foundset);
		rec = F.getRecord(1);
		foundset.setSelectedIndex(foundset.getRecordIndex(rec));
	}
	
	forms.customer_specs.elements.tabs.tabIndex = 2;

	verifyCustomerInput(event);
	return true;
}
/**
 * 
 * 
 *
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"01D244B3-B723-422D-9634-598FA70A6A99"}
 * @AllowToRunInFind
 */
function onDataChangeCustomerNumber(oldValue, newValue, event) {
	if (globals.newCustomerRecord != null){
		globals.newCustomerRecord = customer_id;
	}
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var q = databaseManager.createSelect('db:/stsservoy/customers');
	q.result.add(q.columns.customer_number);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.customer_number.eq(newValue));
	var fsQ = databaseManager.getFoundSet(q);
	if (!oldValue && fsQ.getSize() > 0){
		var rec = fsQ.getRecord(1);
		var idx = foundset.getSelectedIndex();
		foundset.deleteRecord(idx);
		idx = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(idx);
		var instance = globals.getInstanceForm(event);
		forms['customer_specs'+instance].onActionCancelEdit(event);
		onActionEdit(event,false);
	} else {
		instance = globals.getInstanceForm(event);
		forms['customer_specs'+instance].elements.btn_Save.enabled = (!barcode_prefix || !customer_number) ? false : true;
	}
	verifyCustomerInput(event);
	return true;
}
/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 * @properties={typeid:24,uuid:"BCB40946-F763-4D0B-9A00-D397271AF6D2"}
 */
function onActionEdit(event,editing){
	controller.readOnly = !editing;
	elements.editMessage.visible = editing;
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"793D348C-F602-4DB0-B024-CDA5C3B1928C"}
 */
function onShow(firstShow, event) {
	if (!customer_number){
		elements.customer_number.requestFocus();
	}
	verifyCustomerInput(event);
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F3522909-E2C5-44A3-B127-98E0A96272B5"}
 */
function onRecordSelection(event) {
	if (foundset.getSize() == 0){return}
	if (!customer_number){
		elements.customer_number.requestFocus();
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"335D4639-1D51-4A5B-81B7-6F96A93C57EE"}
 */
function onDataChangeBarCodePrefix(oldValue, newValue, event) {
	barcode_include_prefix = i18n.getI18NMessage('i18n:sts.txt.barcode.include.prefix');
	barcode_job_length = 3;
	barcode_job_start = i18n.getI18NMessage('sts.txt.barcode.last.characters');
	barcode_preamble_length = 5;
	barcode_fixed_length = 0;
	var instance = globals.getInstanceForm(event);
	//forms['customer_specs'+instance].elements.btn_Save.enabled = (!barcode_prefix || !customer_number) ? false : true;
	verifyCustomerInput(event);
	return true;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"520BB145-D5BF-432A-B7FB-585E88EDEA7C"}
 */
function verifyCustomerInput(event){
	var instance_form = globals.getInstanceForm(event);
	var saveBtn = forms['customer_specs'+instance_form].elements.btn_Save;
	var form = forms['customer_contact'+instance_form];
	//saveBtn.enabled = false;
	saveBtn.enabled = !(!form.customer_number | !form.name | !form.barcode_prefix);
}