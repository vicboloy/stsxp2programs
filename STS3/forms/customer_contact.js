
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
	}
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		name = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			var record = "";
			for (var index = 1;index <= foundset.getSize(); index++){	
				record = foundset.getRecord(index);
				if (record.name == 'Name Required' || record.customer_number == 'Number Required'){
					foundset.deleteRecord();
				}
			}
		}
		foundset.sts_customer_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedCustomerIndex);
	}
	forms.customer_specs.elements.tabs.tabIndex = 2;

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
	q.where.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID));
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
		var instance = globals.getInstanceForm(event);
		forms['customer_specs'+instance].elements.btn_Save.enabled = (!barcode_prefix || !customer_number) ? false : true;
	}
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
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F3522909-E2C5-44A3-B127-98E0A96272B5"}
 */
function onRecordSelection(event) {
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
	barcode_job_start = i18n.getI18NMessage('i18n:sts.txt.barcode.first.characters');
	barcode_preamble_length = 5;
	barcode_fixed_length = 0;
	var instance = globals.getInstanceForm(event);
	forms['customer_specs'+instance].elements.btn_Save.enabled = (!barcode_prefix || !customer_number) ? false : true;
	return true;
}
