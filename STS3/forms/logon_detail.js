/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7F2A845C-B950-424C-BDCF-2EF030C9FBEB"}
 */
var userName = "";
/**
 * @properties={typeid:24,uuid:"9678F23C-3E98-4FF7-9653-83B511DF83BA"}
 */
function updateFields(event){
	if (user_password != null && user_password != ""){
		elements.userPass.placeholderText = "********";
		elements.userPassConf.placeholderText = "********";
	} else {
		elements.userPass.placeholderText = "";
		elements.userPassConf.placeholderText = "";
	}
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DE863A38-BA1D-428F-BFD5-60BC9DD30DA9"}
 */
function refreshUsers(){
	var usableIDs = [];
	usableIDs.push(null);
	usableIDs.push(globals.secCurrentUserID);
	var userNames = [];
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var q = databaseManager.getFoundSet('db:/stsservoy/users'); 
	//var parent = scopes.globals.getParentForm(); won't work here on show or load
	if (q.find()){
		q.employee_id = usableIDs;
		q.tenant_uuid = globals.sec_current_user.tenant_uuid;
		count = q.search();
		if (count){
			for (var index = 1;index <= q.getSize();index++){
				var rec = q.getRecord(index);
				userNames.push(rec.user_name);
			}
			userNames.sort();
			application.setValueListItems('stsvlg_userNames',userNames);
		}
	}
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
	updateFields(event);
	// show usernames with null employee_id in users table and current employee_id
	refreshUsers();
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
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var u = databaseManager.getFoundSet('db:/stsservoy/users');
	if (u.find()){
		u.user_name = newValue;
		u.tenant_uuid = globals.secCurrentTenantID;
		if (u.search()){
			var record = u.getRecord(1);
			foundset.selectRecord(record.user_id);
			foundset.deleteRecord(newRec);
			forms[globals.getParentForm()].cancelEdit(event);
		}
		return true;
	}
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var e = databaseManager.getFoundSet('db:/stsservoy/employee');
	if (e.find()){
		e.employee_userid = userID;
		e.tenant_uuid = globals.secCurrentTenantID;
		if (e.search()){
			return false;
		} else {
			controller.loadRecords(u);
			var parent = scopes.globals.getParentForm();
			forms[parent].employee_userid = u.user_id;
			return true;
		}
	}	
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
	updateFields(event);
	return _super.onRecordSelection(event)
}
