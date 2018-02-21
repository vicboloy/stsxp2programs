/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3DBD4B76-9F9D-480F-B30E-33A160F4B553",variableType:4}
 */
var activeLogin = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C4F17BD2-ADD3-40D6-8E2C-7EFAEA968D37"}
 */
var empLoginList = '';
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

	var instance = scopes.globals.getInstanceForm(event);
	var rec = foundset.getSelectedRecord();
	if (!rec){return}
	var empId = rec.employee_id.toString();
	var fs = forms['employees_lstB'+instance].foundset;
	for (var idx = 1;idx <= fs.getSize();idx++){
		var rec = fs.getRecord(idx);
		if (rec.employee_id.toString() == empId){
			fs.setSelectedIndex(idx);
			break;
		}
	}

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
	activeLogin = false;
	var loginArray = [];
	/** @type {QBSelect<db:/stsservoy/users>} */
	var userFS = databaseManager.createSelect('db:/stsservoy/users');
	
	userFS.result.add(userFS.columns.user_uuid);
	userFS.where.add(userFS.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	userFS.where.add(userFS.columns.delete_flag.isNull);
	userFS.where.add(userFS.columns.employee_id.eq(employee_id));
	var U = databaseManager.getFoundSet(userFS);
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var rec = null; index = 1;
	while (rec = U.getRecord(index++)){
		if (!activeLogin){if (rec.is_account_active){activeLogin = true}}
		loginArray.push(rec.user_name);
	}
	loginArray = loginArray.sort();
	empLoginList = loginArray.toString().replace('[','').replace(']','');
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7AC2ED6B-8536-4DF8-A3E1-302698B9D8C2"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		scopes.jobs.formPermissions(event,false);
	}
}
