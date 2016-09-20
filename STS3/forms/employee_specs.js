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
 * TODO generated, please specify type and doc for the params
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
	forms["logon_detail"+formRev].controller.enabled = editStatus;
	forms["logon_detail"+formRev].elements.btn_Disconnect.enabled = editStatus;
	forms["logon_detail"+formRev].elements.btn_Update.enabled = editStatus;
	forms["addressesEmployee"+formRev].elements.btn_New.enabled = editStatus;
	
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
	databaseManager.setAutoSave(false);
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
	//databaseManager.setAutoSave(true);
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"7C64DFF6-6587-439E-B5C3-F9204FDA3248"}
 */
function onActionSaveEdit(event){
	var rec = foundset.getRecord(controller.getSelectedIndex());
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	databaseManager.saveData(rec);
	application.setValueListItems('stsvlt_customers',globals.getCustomerList());
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionSaveEdit){forms[tabFormName].onActionSaveEdit(event)}
	}
	onActionEdit(event,false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F545C75F-A84C-43DF-BA74-1AB91158C183"}
 */
function delRecord(event) {
	//var win = application.getActiveWindow();
	//var formSplit = win.controller.getName().split("_");
	//var formRev = formSplit[formSplit.length-1];

	globals.doDialog(i18n.getI18NMessage('sts.txt.remove.employee'),
			i18n.getI18NMessage('sts.txt.delete.this.employee'),
			i18n.getI18NMessage('sts.btn.remove'),
			i18n.getI18NMessage('sts.btn.cancel'));
	if (globals.dialogResponse == 'yes'){
		try {
		controller.deleteRecord(); } catch (e) {}
		//var sortOrder = foundset.getCurrentSort();
		//forms["employees_lst_"+formRev].foundset.sort(sortOrder);
		//forms["employee_specs_"+formRev].foundset.sort(sortOrder);
	}
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
	globals.stopWindowTrack();
	globals.mainWindowFront();
	//globals.updateWindowFS();
	//globals.stopWindowTrack();
	//globals.mainWindowFront();

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
	onActionEdit(event,false);
	elements.btn_Delete.visible =  (employee_number != "P2"); // protect admin account
	//globals.setUserFormPermissions(event);
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
	employeeFullName = employee_firstname+' '+employee_middlename+' '+employee_lastname;
	elements.btn_Delete.visible =  (employee_number != "P2") // protect admin account
	/** @type {QBSelect<db:/stsservoy/users>} */
	var u = databaseManager.createSelect('db:/stsservoy/users');
	u.where.add(u.columns.employee_id.eq(employee_id));
	var uFs = databaseManager.getFoundSet(u);
	uFs.loadRecords();
	if (uFs.getSize() != 0){
		var rec = uFs.getRecord(1);
		user_uuid = rec.user_uuid;
	}
	null;
}
