/**
 * @AllowToRunInFind
 * 
 *
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"FEBFA4D4-CEDB-42ED-9148-7DB8B0F313E6"}
 */
function onDataChange(oldValue, newValue, event) {
	databaseManager.nullColumnValidatorEnabled = false;
	if (employee_number == null){
		employee_number = "Employee Number Required";
	}
	databaseManager.setAutoSave(true);
	if (globals.newEmployeeRecord == null){
		globals.newEmployeeRecord = employee_id;
	}
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		employee_number = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			var record = null;
			for (var index = 1;index <= foundset.getSize(); index++){
				record = foundset.getRecord(index);
				if (record.employee_firstname == null || record.employee_lastname == null){
					foundset.deleteRecord(index);
				}
			}
		}
		foundset.sts_employee_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedEmployeeIndex);
	}
	databaseManager.setAutoSave(true);
	//forms.employee_specs.onEdit(event,false);
	return true
}
