/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3DBD4B76-9F9D-480F-B30E-33A160F4B553",variableType:4}
 */
var activeLogin = 0;
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
/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 *
 * @properties={typeid:24,uuid:"C9FE0EA4-4662-4FB3-AD98-048BAF5FD6CB"}
 */
function onActionEdit(event,editing){
	controller.readOnly = !editing;
	elements.editMessage.visible = editing;
}
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C32FDF51-8D3F-4607-A4C4-A8BA6B76B1BD"}
 * @AllowToRunInFind
 */
function onRecordSelection(event) {
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var userFS = databaseManager.getFoundSet('stsservoy','users');
	if (userFS.find()){
		userFS.employee_id = employee_id;
		if (userFS.search()){
			activeLogin = userFS.is_account_active;
		}
	}
}
