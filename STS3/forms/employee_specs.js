/**
 * @properties={typeid:35,uuid:"EB4B3603-F4EE-421B-9460-9578DB5EA104",variableType:-4}
 */
var editEmployeeFlag = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"036642FB-E0FD-4511-A172-1D3D0EFE22A9"}
 */
var windowName = "Employee Edit";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"28E6463C-7DA4-4B84-A250-A7DCB8E628E3"}
 */
var employeeFullName = "";
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"EA67BADD-A0DE-431B-990E-658FFA0FB68F"}
 */
function onRender(event) {
	if (employee_lastname != null) {
		elements.employeeFullName.text = 'RECORD: '+employee_firstname+" "+employee_middlename+" "+employee_lastname;
	}
}
/**
 *
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"7FD30029-67F1-43B1-81F2-88F062280C00"}
 */
function onEdit(event,editStatus){
	var formRev = scopes.globals.getInstanceForm(event);

	forms["employees"+formRev].controller.readOnly = !editStatus;
	forms["employees_lst"+formRev].controller.enabled = !editStatus;
	forms["employees"+formRev].editEmployeeFlag = editStatus;
	forms["employees_rec"+formRev].elements.btn_New.visible = !editStatus;
	forms["employee_specs"+formRev].elements.btn_Cancel.visible = editStatus;
	forms["employee_specs"+formRev].elements.btn_Save.visible = editStatus;
	forms["employee_specs"+formRev].elements.btn_Edit.visible = !editStatus;
	forms["employee_specs"+formRev].elements.btn_Delete.visible = !editStatus;
	forms["employee_logins"+formRev].controller.enabled = editStatus;
	forms["employee_logins"+formRev].elements.btn_Activate.enabled = editStatus;
	forms["employee_logins"+formRev].elements.btn_Deactivate.enabled = editStatus;
	forms["employee_logins"+formRev].elements.btn_DisableAll.enabled = editStatus;
	forms["addressesEmployee"+formRev].elements.btn_New.enabled = editStatus;
	globals.permissionsCacheHit(event,"employees"+formRev);
	globals.permissionsCacheHit(event,"employees_lst"+formRev);
	globals.permissionsCacheHit(event,"employees_rec"+formRev);
	globals.permissionsCacheHit(event,"employee_specs"+formRev);
	globals.permissionsCacheHit(event,"employee_logins"+formRev);
	globals.permissionsCacheHit(event,"addressesEmployee"+formRev);
}

/**
 *
 * @param {JSEvent} event
 * @param {Boolean} editStatus
 *
 * @properties={typeid:24,uuid:"CC3812E4-6FD8-461F-9749-A972DF579433"}
 */
function onActionEdit(event, editStatus) {
	if (!editStatus && elements.btn_Edit.enabled == true && elements.btn_Edit.visible == true){return}
	var formRev = scopes.globals.getInstanceForm(event);
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionEdit){forms[tabFormName].onActionEdit(event,editStatus)}
	}
	elements.btn_Cancel.visible = editStatus;
	elements.btn_Delete.visible = !editStatus;
	elements.btn_Save.visible = editStatus;
	elements.btn_Edit.visible = !editStatus;
	forms["employees_rec"+formRev].controller.enabled = !editStatus;
	forms['employees_rec'+formRev].elements.btn_New.visible = !editStatus;
	if (forms['employees_rec'+formRev].currentRecord && event.getElementName() != 'btn_New'){//remove !editStatus
		//forms['employees_rec'+formRev].refreshUsers(event);//20190219 editing employee not synced with list
		var empId = forms['employees_rec'+formRev].currentRecord.employee_id;
		var fs = forms['employees_lstB'+formRev].foundset;
		for (var idx = 1;idx <= fs.getSize();idx++){
			/** @type {JSFoundSet<db:/stsservoy/employee>} */
			var rec = fs.getRecord(idx);
			if (rec.employee_id.toString() == empId){
				fs.setSelectedIndex(idx);
				break;
			}
		}
	}
	//forms['employees_rec'+formRev].currentRecord = foundset.getSelectedRecord();//20190219 editing employee not synced with list
	forms['employee_login_lst'+formRev].onRecordSelection(event);
	databaseManager.setAutoSave(false);
	globals.permissionsCacheHit(event,"employees_rec"+formRev);
	globals.permissionsCacheHit(event,'employees_lstB'+formRev);

}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"868EBCCD-CB9C-4014-A79F-9BF649AE09C0"}
 */
function onActionCancelEdit(event) {
	databaseManager.revertEditedRecords(foundset);
	onActionEdit(event,false);
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionCancelEdit){forms[tabFormName].onActionCancelEdit(event)}
	}
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"7C64DFF6-6587-439E-B5C3-F9204FDA3248"}
 */
function onActionSaveEdit(event){
	//error 1259 cannot save unless Emp id, division, first/last name
	var rec = foundset.getRecord(controller.getSelectedIndex());
	var currentEmpId = rec.employee_id;
	rec.tenant_uuid = scopes.globals.session.tenant_uuid;
	databaseManager.saveData(rec);
	application.setValueListItems('stsvlt_customers',globals.getCustomerList());
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionSaveEdit){forms[tabFormName].onActionSaveEdit(event)}
	}
	onActionEdit(event,false);
	elements.tabs.setTabEnabledAt(3,true);//disable addresses tab after save
	forms['employees_lst'+scopes.globals.getInstanceForm(event)].foundset.clear();
	forms['employees_rec'+scopes.globals.getInstanceForm(event)].refreshUsers(event);
	//onActionEdit(event,true);
	//onActionEdit(event,false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F545C75F-A84C-43DF-BA74-1AB91158C183"}
 * @SuppressWarnings(wrongparameters)
 */
function delRecord(event) {
	//var win = application.getActiveWindow();
	//var formSplit = win.controller.getName().split("_");
	//var formRev = formSplit[formSplit.length-1];

	var rec = foundset.getSelectedRecord();
	var status = globals.checkEmployeeEmpty(event,rec);
	if (status != ''){
		scopes.globals.errorDialogMobile(event,'1071',null,status);
		return;
	}
	globals.doDialog(i18n.getI18NMessage('sts.txt.remove.employee'),
			i18n.getI18NMessage('sts.txt.delete.this.employee'),
			i18n.getI18NMessage('sts.btn.remove'),
			i18n.getI18NMessage('sts.btn.cancel'));
	if (globals.dialogResponse.toLowerCase() == 'yes'){
		try {
			delete_flag = 99;
			edit_date = new Date();
			rec = foundset.getSelectedRecord();
			databaseManager.saveData(rec);
		//controller.deleteRecord(); 
		} catch (e) {}
		//var sortOrder = foundset.getCurrentSort();
		//forms["employees_lst_"+formRev].foundset.sort(sortOrder);
		//forms["employee_specs_"+formRev].foundset.sort(sortOrder);
	}
	scopes.jobs.createEmpAssocList(event);
	onActionEdit(event,false);
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"C74EDC7C-1D05-4C89-A7DD-DDA85668ACD1"}
 */
function onRenderDelButton(event) {
	elements.btn_Delete.text = 'Delete '+employee_lastname+", "+employee_firstname;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE427593-ABE1-4D76-AE72-7AAFF8E12156"}
 */
function onActionClose(event) {
	onActionCancelEdit(event);
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionClose){forms[tabFormName].onActionClose(event)}
	}
	globals.stopWindowTrackEvent(event);

}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"636B132D-6A0E-4E10-A916-30A9CBC1B3D6"}
 */
function onShow(firstShow, event) {
	//set this up for edit, save, cancel
	var instance = globals.getInstanceForm(event); //#task01
	if (forms['employees_rec'+instance].elements.btn_New.enabled){
		onActionEdit(event,false);
		elements.btn_Delete.visible =  (employee_number != "P2"); // protect admin account
	}
	if (firstShow){
		scopes.jobs.formPermissions(event,false);
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B95D8BF7-792E-41C5-83FE-76D7127C9670"}
 */
function onRecordSelection(event) {
	var instance = globals.getInstanceForm(event);
	employeeFullName = employee_firstname+' '+employee_middlename+' '+employee_lastname;
	employeeFullName = employeeFullName.replace(/  /g,' ');
	forms['employee_logins'+instance].fullUserName = employeeFullName;
	if (forms['employees_rec'+instance].elements.btn_New.enabled){ //#task01
		elements.btn_Delete.visible =  (employee_number != "P2") // protect admin account
	}
	var empId = employee_id;
	if (empId){empId = empId.toString()}
	/** @type {QBSelect<db:/stsservoy/users>} */
	var u = databaseManager.createSelect('db:/stsservoy/users');
	u.where.add(u.columns.employee_id.eq(empId));
	var uFs = databaseManager.getFoundSet(u);
	uFs.loadRecords();
	if (uFs.getSize() != 0){
		/** @type {JSRecord<db:/stsservoy/users>} */
		var rec = uFs.getRecord(1);
		user_uuid = rec.user_uuid;
	}
	null;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4FCC6ED8-C077-4989-AA97-806EA8CC67E5"}
 */
function onHide(event) {
	onActionClose(event);
	return true
}
