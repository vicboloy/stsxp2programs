/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A6258BE3-C7DA-4FB4-A074-8A05A292E248"}
 */
var userName = "";

/**
 * @type {JSRecord}
 *
 * @properties={typeid:35,uuid:"3103E91B-7468-4B78-9EA1-37B28B490FA4",variableType:-4}
 */
var newRec = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"539B89D4-6C52-4103-8299-CC3B527A0D01"}
 */
var assoc = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40D9C042-640A-4110-854B-4C35068F9DE0"}
 */
var oldAssoc = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C708A559-14E7-4458-A21E-2FC783B823D0"}
 */
var employeeID = "";

/**
 * @properties={typeid:24,uuid:"C0A61BCE-89A1-4191-8793-911930F4CF2C"}
 */
function updateFields(event){
	if (association_uuid){
		assoc = association_uuid;
	}
	if (user_password != null && user_password != ""){
		elements.userPass.placeholderText = "********";
		elements.userPassConf.placeholderText = "********";
	} else {
		elements.userPass.placeholderText = "<Empty>";
		elements.userPassConf.placeholderText = "<Empty>";
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"61115357-5820-4F10-ADAE-923C30FA93F8"}
 */
function refreshUsers(){
	var currentUserName = user_name;
	var formFunc = forms[application.getActiveWindow().controller.getName()].formFunc;
	var readOnly = (formFunc != "CreateLogin");
	var userNames = [];
	elements.user_name.editable = (!readOnly);
	//usableIDs.push(globals.secCurrentUserID);
	
	/** @type {QBSelect<db:/stsservoy/users>} */
	var qq = databaseManager.createSelect('db:/stsservoy/users');
	qq.where.add(qq.columns.tenant_uuid.eq(globals.sec_current_user.tenant_uuid));
	qq.where.add(qq.columns.delete_flag.isNull);
	if (readOnly){
		qq.where.add(qq.columns.employee_id.isNull);
		qq.where.add(qq.columns.association_uuid.eq(assoc));
	}
	var resultQQ = databaseManager.getFoundSet(qq);
	var qqSize = resultQQ.getSize();
	if (qqSize != 0){
		for (var index = 1;index <= qqSize;index++){
			var rec = resultQQ.getRecord(index);
			userNames.push(rec.user_name);
		}		
	}
	
	//userNames.sort();
	application.setValueListItems('stsvlg_userNames',userNames);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BA067E7-105D-4367-80C0-15AB15528467"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow){
		onEdit(true);
	}
	
	var win = application.getActiveWindow();
	var formName = win.controller.getName();
	if (forms[formName].formFunc){
		if (application.isInDeveloper()){application.output('form '+forms[formName].formFunc)}
		elements.btn_Disconnect.visible = (!controller.readOnly && forms[formName].formFunc != "CreateLogin" && forms[formName].employee_id != null);
		/** @type {QBSelect<db:/stsservoy/users>} */
		var localFS = databaseManager.createSelect('db:/stsservoy/users');
		localFS.where.add(localFS.columns.employee_id.eq(forms[formName].employee_id));
		var resultLocalFS = databaseManager.getFoundSet(localFS);
	} //else {
	//	updateFields(event);
	//}
	updateFields(event);
	refreshUsers(); // show usernames with null employee_id in users table and current employee_id
	return _super.onShow(firstShow, event)
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
 * @properties={typeid:24,uuid:"E110FD86-549E-47A4-B232-4CF447C2FA67"}
 * @AllowToRunInFind
 */
function onDataChangeUserName(oldValue, newValue, event) {
	if (oldValue == "ADMIN"){
		var provider = forms[event.getFormName()].elements[event.getElementName()].getDataProviderID();
		forms[event.getFormName()].controller.setDataProviderValue(provider,oldValue);
		return true;
	}
	var currRec = foundset.getSelectedRecord();
	/** @type {QBSelect<db:/stsservoy/users>} */
	var uu = databaseManager.createSelect('db:/stsservoy/users');
	uu.where.add(uu.columns.user_name.eq(newValue));
	uu.where.add(uu.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var resultUU = databaseManager.getFoundSet(uu);
	if (resultUU.getSelectedIndex() != 0){
		var rec = resultUU.getRecord(1);
		var mainForm = forms[application.getActiveWindow().controller.getName()].controlsForm;
		/** @type {String} */
		var formFunc = forms[application.getActiveWindow().controller.getName()].formFunc;
		if (formFunc.search("CreateLogin") == -1){
			if (currRec && currRec.user_uuid == rec.user_uuid){return true}
			user_uuid = user_uuid;
			rec.employee_id = employee_id;
			rec.association_uuid = assoc;
			elements.btn_Disconnect.visible = (!controller.readOnly == true);
			databaseManager.saveData(rec);
			if (newRec){foundset.deleteRecord(newRec)} //created upon new record
		} else {
			var mainFormName = application.getActiveWindow().controller.getName();
			user_name = newValue;
			forms[mainFormName].onActionCancelEdit(event);//accept here iff it is a readonly
			elements.btn_Disconnect.visible = false;
		}
		return true;
	}
	/**		controller.loadRecords(u);
			var parent = scopes.globals.getParentForm();
			forms[parent].user_uuid = u.user_uuid;
			return true; */
	association_uuid = assoc;
	return _super.onDataChangeUserName(oldValue, newValue, event)
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"31911893-9F23-4A0A-89C8-BEAC26A67215"}
 */
function onRecordSelection(event) {
	if (foundset.getSize() != 0 && (employee_id && user_name && user_name != "P")){
		/** @type {Boolean} */
		var visButton = (employee_id && employee_id != null);
		if (visButton == null){visButton = false}
		elements.btn_Disconnect.visible = visButton;
		if (user_uuid){
			assoc = association_uuid;
		} else {
			assoc = "";
		}
		updateFields(event);
	} else {  // protect admin account
		elements.btn_Disconnect.visible = false;
	}
	elements.btn_Disconnect.enabled = (!controller.readOnly);
	return _super.onRecordSelection(event)
}

/**
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B242CBC3-0E02-47C0-89E1-A47F2F050CEC"}
 */
function onDataChangeActive(oldValue,newValue,event){
	var formName = event.getFormName();
	if (forms[formName].user_name == "ADMIN"){
		///var elName = event.getElementName();
		forms[formName].controller.setDataProviderValue(is_account_active,1);
		forms[formName].is_account_active = 1;
		return true;
	}
	return true;
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
 * @properties={typeid:24,uuid:"D08AFD6F-F2DB-4738-8A9B-C3945E636453"}
 * @AllowToRunInFind
 */
function onDataChangeDivision(oldValue, newValue, event) {
	//var windowName = application.getActiveWindow().controller.getName().windowName;
	//if (windowName.search('Employee') == -1){return false}
	oldAssoc = oldValue;
	if (user_uuid){
		assoc = newValue;
		association_uuid = newValue;
	}
	refreshUsers();
	return true
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4C04B32F-6DF9-420F-B4AD-ACABBA724033"}
 */
function onHide(event) {
	if (!user_name && newRec){
		foundset.deleteRecord(newRec);
	} else {
		var fs = forms[event.getFormName()].foundset;
		if (fs.getSize() != 0){
			var rec = fs.getSelectedRecord();
			employee_id = rec.employee_id;
		}
	}
	return _super.onHide(event)
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C9932EB9-7202-4538-A610-B37CBBFB6F78"}
 */
function onFocusGainedDivision(event) {
	if (foundset.getSize() == 0){
		newRec = foundset.getRecord(foundset.newRecord());
		newRec.delete_flag = 99;
		var rec = foundset.getSelectedRecord();
		databaseManager.saveData(rec);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E745214-1221-47FA-916E-78ECA2E7CAFC"}
 * @AllowToRunInFind
 */
function onActionDisconnect(event) {
	if (foundset.getSize() == 0){return}
	if (user_name == "P"){return}//Protect admin account 201608
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var u = databaseManager.createSelect('db:/stsservoy/employee');
	u.where.add(u.columns.user_uuid.eq(userUUID));
	var fs = databaseManager.getFoundSet(u);
	fs.loadRecords();
	if (formFunc.search("CreateLogin") == -1){
		var index = 1;
		while (index <= fs.getSize()){
			var rec2 = fs.getRecord(index);
			rec2.user_uuid = null;
			databaseManager.saveData(rec2);
			index++; 
		}
	}
	var mainForm = forms[application.getActiveWindow().controller.getName()];
	var rec = mainForm.foundset.getSelectedRecord();
	var userUUID = rec.user_uuid;
	employee_id = null;
	rec.user_uuid = null;
	rec.is_account_active = 0;
	rec = foundset.getSelectedRecord();
	var formFunc = forms[application.getActiveWindow().controller.getName()].formFunc;
	//var saveRecArray = forms[application.getActiveWindow().controller.getName()].saveTheseRecs;
	databaseManager.saveData(rec);
}

/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 *
 * @properties={typeid:24,uuid:"809C891B-5F90-45FB-BB1B-C36451E8BA0A"}
 */
function onActionEdit(event,editing){
	controller.readOnly = !editing;
	elements.editMessage.visible = editing;
	onEdit(editing);
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
 * @properties={typeid:24,uuid:"0D9047D7-A566-437C-9813-E75B1B14570C"}
 */
function onDataChangePass(oldValue, newValue, event) {
	if (!newValue){
	} else {
		elements.btn_Update.enabled = true;
		elements.userPassConf.requestFocus();
	}
	return true
}

/**
 * @param enabled
 *
 * @properties={typeid:24,uuid:"B32246D9-E97B-4DA6-9D07-F55AA150CFBD"}
 */
function updatePassword(enabled){
	elements.btn_Update.enabled = enabled;
}

/**
 * @param editing
 *
 * @properties={typeid:24,uuid:"3E7A9E3B-A445-46E8-8E9E-BA74C58D4D46"}
 */
function onEdit(editing){
	if (editing && employee_id){
		employeeID = employee_id;
	}
	elements.btn_Disconnect.enabled = (editing);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"0518EE09-36A2-4A22-A133-AD53E4E711ED"}
 */
function verifyReqUserInput(event){
	var saveBtn = forms['logons_m'].elements.btn_Save;
	var form = forms['logon_detail'];
	saveBtn.enabled = !(!form.assoc | !form.user_name);
}
