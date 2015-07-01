/**
 * @properties={typeid:35,uuid:"EB4B3603-F4EE-421B-9460-9578DB5EA104",variableType:-4}
 */
var editEmployeeFlag = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"129539DC-291F-41D8-8801-CD89027F7E7B"}
 */
var instance = "";
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
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E9AAE20F-6E81-4D9E-99EA-BB703579208C"}
 */
function getInstanceNum(event){
	application.output(event);
	instance = "";
	var formName = event.getFormName();
	var formSplit = formName.split("_");
	var regExp = new RegExp('_/0-9/+$');
	return formName.search(regExp);
	
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"7FD30029-67F1-43B1-81F2-88F062280C00"}
 */
function onEdit(event,editStatus){
	application.output('regexp ' +getInstanceNum(event));
	forms.employees.controller.readOnly = !editStatus;
	forms.employees_lst.controller.enabled = !editStatus;
	forms.employees.editEmployeeFlag = editStatus;
	forms.employees_rec.elements.addNewButton.visible = !editStatus;
	forms.employee_specs.elements.cancelButton.visible = editStatus;
	forms.employee_specs.elements.saveButton.visible = editStatus;
	forms.employee_specs.elements.editButton.visible = !editStatus;
	forms.employee_specs.elements.delButton.visible = !editStatus;
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CC3812E4-6FD8-461F-9749-A972DF579433"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	databaseManager.setAutoSave(false);
}

/**
 * TODO generated, please specify type and doc for the params
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7C64DFF6-6587-439E-B5C3-F9204FDA3248"}
 */
function onActionSaveEdit(event){
	onEdit(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F545C75F-A84C-43DF-BA74-1AB91158C183"}
 */
function delRecord(event) {
		globals.doDialog("Remove Employee","Delete this Employee?","Remove","Cancel");
		if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
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
	elements.delButton.text = 'Delete '+employee_lastname+", "+employee_firstname;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE427593-ABE1-4D76-AE72-7AAFF8E12156"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
