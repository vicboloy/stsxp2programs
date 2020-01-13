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
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FEBFA4D4-CEDB-42ED-9148-7DB8B0F313E6"}
 */
function onDataChange(oldValue, newValue, event) {
	databaseManager.nullColumnValidatorEnabled = false;

	if (globals.newEmployeeRecord == null){
		globals.newEmployeeRecord = employee_id;
	}
	databaseManager.removeTableFilterParam('stsservoy','filterAssocEMPLOYEE');
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var e = databaseManager.createSelect('db:/stsservoy/employee'); //#task02
	//e.result.add(e.columns.employee_id);
	e.where.add(e.columns.employee_number.eq(newValue.trim()));
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
	var employeeExists = (E.getSize() != 0);
	if (employeeExists && !globals.session.corpUser && record.association_uuid.toString() != globals.session.associationId.toString()){
		plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1227'),i18n.getI18NMessage('1227'));//employee is in another division 1227
		employee_number = oldValue;
		return false;
	}
	foundset.sts_employee_container.loadRecords();
	//foundset.setSelectedIndex(foundset.getRecordIndex(record));

	var instance = scopes.globals.getInstanceForm(event);
	//var rec = null;//foundset.getSelectedRecord();
	//if (!rec){return}
	//var empId = record.employee_id.toString();
	var fs = forms['employees_lstB'+instance].foundset;
	for (var idx = 1;idx <= fs.getSize();idx++){
		var rec = fs.getRecord(idx);
		if (rec.employee_number == newValue){
			forms['employees_lstB'+instance].foundset.setSelectedIndex(idx);
			databaseManager.revertEditedRecords(foundset);
			break;
		}
	}
	verifyEmployeeInput(event);
	if (!globals.session.corpUser){
		if (application.isInDeveloper()){application.output('association for users listing '+globals.session.associationId)}
		databaseManager.addTableFilterParam('stsservoy','users','association_uuid','=',globals.session.associationId.toString(),'filterAssocEMPLOYEE');//Re-enable user assoc table filters
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
	globals.permissionsCacheHit(event,null);
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
	var empId = (employee_id) ? employee_id.toString() : employee_id;
	userFS.where.add(userFS.columns.employee_id.eq(empId));
	var U = databaseManager.getFoundSet(userFS);
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var rec = null; var index = 1;
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
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"AEF52A66-75D9-4B8C-9FFF-FCA362749439"}
 */
function verifyEmployeeInput(event){
	var instance_form = globals.getInstanceForm(event);
	var saveBtn = forms['employee_specs'+instance_form].elements.btn_Save;
	//saveBtn.enabled = false;
	var enableEitherName = (!(!employee_firstname && !employee_lastname));
	var enableSave = !(!association_uuid || !employee_number || !enableEitherName);
	saveBtn.enabled = enableSave;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"83D825BD-4765-4A6F-9533-BFBC8590E967"}
 */
function onActionEmployeeFirst(event) {
	verifyEmployeeInput(event);
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"AF668EB7-66FD-47A8-AD1C-778FBBFD4DB9"}
 */
function onActionEmployeeLast(event) {
	verifyEmployeeInput(event);
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D066AB87-56BA-4CA5-B2CC-F83A53CC461E"}
 */
function onDataChangeDivision(oldValue, newValue, event) {
	verifyEmployeeInput(event);
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8333A8F7-303A-4B3B-BC78-FC1FC9860E09"}
 */
function onDataChangeFirst(oldValue, newValue, event) {
	verifyEmployeeInput(event);
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BC50AAA6-1725-43BF-9DAB-5CC35169DB03"}
 */
function onDataChangeLast(oldValue, newValue, event) {
	verifyEmployeeInput(event);
	return true
}
