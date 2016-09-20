
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
	//databaseManager.setAutoSave(true);
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

	//databaseManager.setAutoSave(true);
	return true
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
	//databaseManager.setAutoSave(true);
	databaseManager.nullColumnValidatorEnabled = false;
	if (globals.newCustomerRecord != null){
		globals.newCustomerRecord = customer_id;
	}
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var q = databaseManager.createSelect('db:/stsservoy/customers');
	q.result.add(q.columns.customer_number);
	q.where.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID));
	var fsQ = databaseManager.getFoundSet(q);
	/** var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		customer_number = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			var record = null;
			for (var index = 1;index <= foundset.getSize(); index++){	
				record = foundset.getRecord(index);
				if (!record.name){
					foundset.deleteRecord();
				}
			}
		}
		foundset.sts_customer_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedCustomerIndex);
	}*/
	//databaseManager.setAutoSave(true);
	databaseManager.saveData(foundset);
	if (fsQ.getSize() == 0){
		return false;
	}else {
		elements.name.requestFocus();
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
