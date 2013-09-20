
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
		customer_number = "Number Required";
	}
	databaseManager.setAutoSave(true);
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
	databaseManager.setAutoSave(true);
	return true
}
/**
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"01D244B3-B723-422D-9634-598FA70A6A99"}
 * @AllowToRunInFind
 */
function onDataChangeCustomerNumber(oldValue, newValue, event) {
	if (name == null){
		name = "Name Required";
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
			var record = null;
			for (var index = 1;index <= foundset.getSize(); index++){	
				record = foundset.getRecord(index);
				if (record.name == 'Name Required'){
					foundset.deleteRecord();
				}
			}
		}
		foundset.sts_customer_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedCustomerIndex);
	}
	databaseManager.setAutoSave(true);
	return true
}
