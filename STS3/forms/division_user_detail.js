/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C557198-C9F9-4CDE-A4E8-262691B7184F"}
 */
var employeeNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35D3A952-5344-428C-80DC-EC0707825E9C"}
 */
var employeeNum = '';
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"119B1918-A7FD-42FC-A40B-038758BA20B4"}
 */
var userMobileViewList = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"029FD687-3D5E-44F7-A23B-9EE5BED6197C"}
 */
var employeeName = '';
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
	scopes.jobs.onMobileViewLoadValueList();
	onRecordSelection(event);
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
		employeeNum = fs.employee_number;
		employeeNumber = fs.employee_id;
		employeeName = fs.employee_firstname+' '+fs.employee_lastname;
	} else {
		employeeNumber = "";
		employeeName = "";
		employeeNum = '';
	}
	if (association_uuid){
		/** @type {QBSelect<db:/stsservoy/associations>} */
		var assoc = databaseManager.createSelect('db:/stsservoy/associations');
		assoc.where.add(assoc.columns.association_uuid.eq(association_uuid.toString()));
		assoc.result.add(assoc.columns.logic_flag);
		/** @type {JSRecord<db:/stsservoy/associations>} */
		var a = databaseManager.getFoundSet(assoc);
	}
	rec = null;
	if (association_uuid && a.getSize() != 0){
		/** @type {JSFoundSet<db:/stsservoy/associations>} */
		var rec = a.getRecord(1);
		isAdminAccount = (rec.association_uuid == rec.tenant_group_uuid) ? i18n.getI18NMessage('sts.txt.login.corporate') : '';
	}
	userGroups = databaseManager.getFoundSetDataProviderAsArray(users_to_user_groups,'group_uuid').join('\n');
	if (rec && rec.logic_flag){
		var officeViewsMobile = globals.session.rfViewsOffice.concat([]);
		officeViewsMobile.unshift(i18n.getI18NMessage('sts.mobile.allow.no.views'));
		application.setValueListItems('stsvlt_remoteViews',officeViewsMobile);
		if (application.isInDeveloper()){application.output('remoteView office '+globals.session.rfViewsOffice)}
	} else {
		var allViewsMobile = globals.session.rfViewsMobile.concat(globals.session.rfViewsOffice);
		allViewsMobile.sort();
		allViewsMobile.unshift(i18n.getI18NMessage('sts.mobile.allow.no.views'));
		application.setValueListItems('stsvlt_remoteViews',allViewsMobile);
		if (application.isInDeveloper()){application.output('remoteView Mobile '+globals.session.rfViewsMobile)}
	}
	application.updateUI();
	scopes.jobs.onLoadRemoteViews(event);
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
		if (!globals.session.corpUser){//if not CORP skip loading current user
			databaseManager.revertEditedRecords(foundset);
			stopEditing(event);
			//foundset.relookup();
			foundset.setSelectedIndex(1);
			verifyNewUserInput(event);
			return true;			
		}
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
			verifyNewUserInput(event);
			return true;
		}
	}
	verifyNewUserInput(event);
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
	var win = forms['mc_label_dests'].controller.getWindow();
	if (win){win.hide()}
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
	onActionCancelEditLabelDests(event);
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
		var recuuid = employeeNumber.toString();
		employee_id = recuuid.toString();
		fs.loadRecords(recuuid);
		/** @type {JSRecord<db:/stsservoy/employee>} */
		var rec = fs.getRecord(1);
	}
	scopes.jobs.onSaveRemoteViews(event);
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

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A0B7066-35D2-4D55-8ACB-C361316CD533"}
 * @AllowToRunInFind
 */
function onActionSelectMCView(event) {
	var showNone = i18n.getI18NMessage('sts.mobile.allow.no.views');
	if (userMobileViewList && userMobileViewList.search(showNone) != -1){
		userMobileViewList = '';
	}
	null;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C350AD48-8592-4968-977C-2D643E7113A5"}
 */
function verifyNewUserInput(event){
	if (is_account_active == null){is_account_active = false}
	if (use_dual_entry == null){use_dual_entry = false}
	if (is_admin_account == null){is_admin_account = false}
	var form = forms['division_user_detail'];
	var saveBtn = form.elements.btn_Save;
	saveBtn.enabled = !(!form.user_name || !form.association_uuid || !userGroups);
}
/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"146E2F02-6B16-463F-9F54-924C2E4E1C3F"}
 */
function onFocusLostPermGroups(event) {
	verifyNewUserInput(event);
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
 * @properties={typeid:24,uuid:"159F638A-59EE-402F-B93F-7C0A57E561AF"}
 */
function onDataChangeActive(oldValue, newValue, event) {
	if (!employee_id && newValue){
		is_account_active = 0;
		scopes.globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.active.login.warn'),i18n.getI18NMessage('sts.txt.active.login.warn'))
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61B75172-A382-46DC-AD79-B1327439BEFF"}
 */
function onActionSetLabelDests(event) {
	forms.MWBase.onActionLabelDestsSet(event);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"A855FEF7-60D1-460D-AAE5-A2C179735D53"}
 */
function onActionCancelEditLabelDests(event){
	var form = forms['division_user_detail'];
	var userID = form.user_uuid.toString();
	/** @type {QBSelect<db:/stsservoy/users>} */
	var u = databaseManager.createSelect('db:/stsservoy/users');
	u.result.add(u.columns.user_uuid);
	u.where.add(u.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	u.where.add(u.columns.user_uuid.eq(userID));
	var U = databaseManager.getFoundSet(u);
	if (U.getSize() > 0){return}
	
	/** @type {QBSelect<db:/stsservoy/label_destinations>} */
	var q = databaseManager.createSelect('db:/stsservoy/label_destinations');
	q.result.add(q.columns.label_destination_uuid.toString());
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.user_uuid.eq(userID));
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() > 0){
		Q.deleteAllRecords();
	}
}