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

	if (globals.newEmployeeRecord == null){
		globals.newEmployeeRecord = employee_id;
	}
	
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var e = databaseManager.createSelect('db:/stsservoy/employee'); //#task02
	e.result.add(e.columns.employee_id);
	e.where.add(e.columns.employee_number.eq(newValue));
	e.where.add(e.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var E = databaseManager.getFoundSet(e);
	if (E.getSize() > 1){
		/** @type {JSRecord<db:/stsservoy/employee>} */
		var record;
		for (var index = 1;index <= foundset.getSize(); index++){
			record = E.getRecord(index);
			if (record.employee_firstname == null || record.employee_lastname == null){
				E.deleteRecord(index);
			}
		}
	}
	record = E.getRecord(1);
	foundset.sts_employee_container.loadRecords();
	foundset.setSelectedIndex(foundset.getRecordIndex(record));
	
	return true;
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
	/** @type {QBSelect<db:/stsservoy/users>} */
	var userFS = databaseManager.createSelect('db:/stsservoy/users');
	
	userFS.result.add(userFS.columns.user_uuid);
	userFS.where.add(userFS.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	userFS.where.add(userFS.columns.delete_flag.isNull);
	userFS.where.add(userFS.columns.employee_id.eq(employee_id));
	var U = databaseManager.getFoundSet(userFS);
	/** @type {JSRecord<db:/stsservoy/users>} */
	var rec = U.getRecord(1);
	activeLogin = false;
	if (rec){
		activeLogin = rec.is_account_active;
	}
}
