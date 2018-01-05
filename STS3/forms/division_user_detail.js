/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C557198-C9F9-4CDE-A4E8-262691B7184F"}
 */
var employeeNumber = "";
/**
 * @properties={typeid:35,uuid:"A3113F28-DACF-4D38-AC63-842C626ADDB5",variableType:-4}
 */
var populatedEmployees = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D2B4276E-0759-43EF-B9C5-36F1E10736A0"}
 */
var association = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B20E308D-70AB-48EE-896D-7282640446CF"}
 */
var isAdminAccount = "";
/**
 * @properties={typeid:24,uuid:"ABA5AEB5-9EA0-4D10-BAE9-AB3561481EEA"}
 * @SuppressWarnings(wrongparameters)
 */
function getEmployees(){
	/**
	 * employee_number ... employee_id
	 * remove deployed users
	 * 
	 * user query builder. SQL speed not necessary
	 */
	populatedEmployees = [];
	var logins = [];
	var loginIds = [];
	/** @type {QBSelect<db:/stsservoy/users>} */
	var q = databaseManager.createSelect('db:/stsservoy/users');
	q.result.add(q.columns.user_uuid);
	q.result.add(q.columns.user_name);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid))
	);
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		loginIds.push(rec.user_uuid);
		logins.push(rec.user_name);
	}
	
	var emps = []; // return all employees without a login .  employee to login is 1:1
	var empIds = [];
	emps.push("");
	empIds.push(null);
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var r = databaseManager.createSelect('db:/stsservoy/employee');
	r.result.add(r.columns.employee_id);
	r.result.add(r.columns.employee_number);
	r.where.add(
	r.and
		.add(r.columns.delete_flag.isNull)
		.add(r.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		//.add(r.columns.user_uuid.isNull)
		//		.add(r.columns.user_uuid.not.isin(loginIds)) CANNOT NEGATE AN ISIN FIELD
	);
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var resultR = databaseManager.getFoundSet(r);
	for (index = 1;index <= resultR.getSize();index++){
		rec = resultR.getRecord(index);
		populatedEmployees.push(rec.employee_number);
		emps.push(rec.employee_number);
		empIds.push(rec.employee_id);
	}
	if (application.isInDeveloper()){	
		application.output(globals.session.tenant_uuid);
		application.output(loginIds);
		application.output(logins);
		application.output(emps);
		application.output(empIds);
	}
	application.setValueListItems('stsvlg_userNames',emps,empIds);
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4659E1C1-B131-476F-8EF3-45F2C0122D71"}
 */
function onShow(firstShow, event) {
	onEdit(event,false);
	association = "";
	getEmployees();
	updateFields(event);
	//return _super.onShow(firstShow, event)
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7AF43C83-8A89-4926-938B-F58334D566A7"}
 */
function onRecordSelection(event) {
	/** var message = 'No Password';
	if (user_password != null){
		message = '********';
	}
	elements.userPass.placeholderText = message;
	elements.userPassConf.placeholderText = message; */
	var fs = st2_users_to_employee;
	if (fs){
		employeeNumber = fs.employee_id;
	} else {
		employeeNumber = "";
	}
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var assoc = databaseManager.createSelect('db:/stsservoy/associations');
	assoc.where.add(assoc.columns.association_uuid.eq(association_uuid));
	assoc.result.add(assoc.columns.logic_flag);
	/** @type {JSRecord<db:/stsservoy/associations>} */
	var a = databaseManager.getFoundSet(assoc);
	if (a.getSize() != 0){
		var rec = a.getRecord(1);
		isAdminAccount = (rec.logic_flag == 1) ? i18n.getI18NMessage('sts.txt.login.administrative') : i18n.getI18NMessage('sts.txt.login.shop');
	}
	userGroups = databaseManager.getFoundSetDataProviderAsArray(users_to_user_groups,'group_uuid').join('\n');

	updateFields(event);
	//return _super.onRecordSelection(event)
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
 * @properties={typeid:24,uuid:"96367965-D7A6-4161-B689-5475D88D61BC"}
 * @SuppressWarnings(wrongparameters)
 */
function validateUserName(oldValue, newValue, event) {
	if (newValue != ""){
		//is_account_active = true;
	}
	var validation = _super.validateUserName(oldValue, newValue, event);
	if (!validation){
		stopEditing(event);
		/** @type {QBSelect<db:/stsservoy/users>} */
		var u = databaseManager.createSelect('db:/stsservoy/users');
		u.where.add(u.columns.user_name.eq(newValue));
		u.where.add(u.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		u.result.add(u.columns.user_uuid);
		var U = databaseManager.getFoundSet(u);
		U.loadRecords();
		if (U.getSize() != 0){
			/** @type {JSRecord<db:/stsservoy/users>} */
			var rec = U.getRecord(1);
			foundset.selectRecord(rec.user_uuid);
			return true;
		}
	}
	return true;
}
/**
 * @param {JSEvent} event
 * @param editing
 *
 * @properties={typeid:24,uuid:"71EDEF79-0EE1-47D5-9B6B-003F3F641299"}
 */
function onEdit(event,editing){
	var formController = globals.getParentForm();
	if (typeof forms[formController].onEditControllerState == 'function'){
		forms[formController].onEditControllerState(editing);
	}
	controller.enabled = editing;
	elements.btn_Cancel.visible = editing;
	elements.btn_Cancel.enabled = editing;
	elements.btn_Edit.enabled = !editing;
	elements.btn_Edit.visible = !editing;
	elements.btn_Save.visible = editing;
	elements.btn_Password.enabled = editing;
	forms.division_users.elements.btn_New.enabled = !editing;
	updateFields(event);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A0754AF-9F8E-4F11-8B06-6DE55BFEE243"}
 */
function startEditing(event) {
	getEmployees();
	onEdit(event,true);
	//return _super.startEditing(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C3729BF6-2B55-40D9-96CD-0174C9578481"}
 */
function stopEditing(event) {
	databaseManager.revertEditedRecords(foundset);
	onEdit(event,false);
	//return _super.stopEditing(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {JSRecord} record
 * @param {Boolean} stopEdit
 *
 * @properties={typeid:24,uuid:"C2852854-E526-4E84-8D85-6BBE100EA028"}
 */
function saveEdits(event, record, stopEdit) {
	if (!user_password){
		is_account_active = null;
	}
	onEdit(event,false);
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var fs = databaseManager.getFoundSet('stsservoy','employee');
	if (employeeNumber != ""){
		var recuuid = application.getUUID(employeeNumber);
		employee_id = recuuid;
		fs.loadRecords(recuuid);
		/** @type {JSRecord<db:/stsservoy/employee>} */
		var rec = fs.getRecord(1);
	}
	databaseManager.saveData();
	if (!user_password){
		globals.errorDialogMobile(event,'1251','userPass','');
	}
	getEmployees();
	stopEditing(event);
	//return _super.saveEdits(event, record, stopEdit)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FBF8D035-C29C-460B-8AF3-F0B1651F34DE"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords(foundset);
	onEdit(event,false);
	forms.division_users.elements.btn_New.enabled = true;
	//return _super.onHide(event);
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
 * @properties={typeid:24,uuid:"0F54EE3F-591A-4271-8617-4C7C71207F4B"}
 */
function onDataChangeEmployeeNum(oldValue, newValue, event) {
	null;
	if (populatedEmployees.indexOf(newValue) != -1){
		newValue = "";
		return true;
	}
	is_account_active = (newValue == null || newValue == 0) ? 0 : 1;
	if (is_account_active == 1){newValue.toUpperCase()}
	employee_id = (newValue == null || newValue == 0) ? null : newValue;
	return true;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"37AFC1C0-ABDF-4BAF-8ABE-7A9CFE0E5EB0"}
 */
function updateFields(event){
	if (association_uuid){
		assoc = association_uuid;
	}
	if (user_password != null && user_password != ""){
		elements.userPass.placeholderText = "********";
		elements.userPassConf.placeholderText = "********";
	} else {
		elements.userPass.placeholderText = i18n.getI18NMessage('sts.txt.pass.inactive');
		elements.userPassConf.placeholderText = i18n.getI18NMessage('sts.txt.pass.inactive');
		errorMessage = i18n.getI18NMessage('sts.txt.pass.warn');
	}
}
/**
 * @param {JSEvent} event
 * @param oldValue
 * @param newValue
 *
 * @properties={typeid:24,uuid:"5AD8C91F-2275-41D7-A3CB-B0FF83BD48D4"}
 */
function updatePassword(event,oldValue,newValue){
	elements.btn_Password.enabled = (newValue != "");
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"23BD5D49-3E45-4F3C-8F9B-698E95D75634"}
 */
function onDataChangeAccountType(oldValue, newValue, event) {
	oldValue = newValue;
	return true
}
