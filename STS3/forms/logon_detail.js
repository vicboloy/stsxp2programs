/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7F2A845C-B950-424C-BDCF-2EF030C9FBEB"}
 */
var userName = "";
/**
 * @type {JSRecord}
 *
 * @properties={typeid:35,uuid:"8B2C99F4-A646-453D-ADA0-C0F2F52882FE",variableType:-4}
 */
var newRec = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A32A5C8D-122D-4DC2-8431-A3C3B5C50D42"}
 */
var assoc = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AF2E0525-23E2-453B-B569-6FA2D66E45A0"}
 */
var oldAssoc = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B43574E-7C0D-44A1-90DF-AC35FE45E2E7"}
 */
var employeeID = "";
/**
 * @properties={typeid:24,uuid:"9678F23C-3E98-4FF7-9653-83B511DF83BA"}
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
 * @properties={typeid:24,uuid:"DE863A38-BA1D-428F-BFD5-60BC9DD30DA9"}
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
 * @properties={typeid:24,uuid:"06E3910A-C5EC-4843-9923-EBED24550D19"}
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
 * @properties={typeid:24,uuid:"D3234A60-6684-4BD8-98F7-70CAA325B738"}
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
 * @properties={typeid:24,uuid:"3EE95260-0591-4998-94B5-17D7815153C6"}
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
 * @properties={typeid:24,uuid:"99B55E10-9A36-4074-912F-DE940E6365FB"}
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
 * @properties={typeid:24,uuid:"9D452621-B7E1-4F7A-9E60-883AEC27C7E3"}
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
 * @properties={typeid:24,uuid:"9092BEE4-6A59-4864-9381-1F83F7F5D12F"}
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
 * @properties={typeid:24,uuid:"C68F20D5-1616-4BCD-9F41-BDEB57231F73"}
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
 * @properties={typeid:24,uuid:"A1BD36E1-B991-48A8-B662-255A2CD51494"}
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
 * @properties={typeid:24,uuid:"FFD34D67-35DD-4022-B08F-514805259D31"}
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
 * @properties={typeid:24,uuid:"9686EB82-2A0D-42CC-AB0E-1EC621C7E2AA"}
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
 * @properties={typeid:24,uuid:"AFDEEE00-55C5-4ADC-931C-827B81D4D921"}
 */
function updatePassword(enabled){
	elements.btn_Update.enabled = enabled;
}
/**
 * @param editing
 *
 * @properties={typeid:24,uuid:"0EC30516-8C3C-479A-9849-2B6B77FDFAFB"}
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
 * @properties={typeid:24,uuid:"DE8A8600-E1ED-4A13-A0F9-AA737556D05F"}
 */
function verifyReqUserInput(event){
	var saveBtn = forms['logons_m'].elements.btn_Save;
	var form = forms['logon_detail'];
	saveBtn.enabled = !(!form.assoc | !form.user_name);
}