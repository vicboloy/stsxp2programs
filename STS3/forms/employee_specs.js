/**
 * @properties={typeid:35,uuid:"EB4B3603-F4EE-421B-9460-9578DB5EA104",variableType:-4}
 */
var editEmployeeFlag = false;

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"EC2B3965-7A1D-4E43-83D4-8A09844BD098"}
 */
function onRender(event) {
	if (employee_lastname != null) {
		elements.employeeFullName.text = "RECORD: "+employee_firstname+" "+employee_middlename+" "+employee_lastname;
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
	
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"CC3812E4-6FD8-461F-9749-A972DF579433"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	databaseManager.setAutoSave(false);
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"868EBCCD-CB9C-4014-A79F-9BF649AE09C0"}
 */
function onActionCancelEdit(event) {
	onEdit(event,false);
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"7C64DFF6-6587-439E-B5C3-F9204FDA3248"}
 */
function onActionSaveEdit(event){
	onEdit(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
	globals.updateWindowFS();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F545C75F-A84C-43DF-BA74-1AB91158C183"}
 */
function delRecord(event) {
	var win = application.getActiveWindow();
	var formSplit = win.controller.getName().split("_");
	var formRev = formSplit[formSplit.length-1];

	globals.doDialog("Remove Employee","Delete this Employee?","Remove","Cancel");
	if (globals.dialogResponse == "yes"){
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
	globals.updateWindowFS();
	globals.stopWindowTrack();
	globals.mainWindowFront();

}

