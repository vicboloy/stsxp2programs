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
function onRenderEmployeeData(event) {
	if (employee_lastname != null) {
		elements.employeeFullName.text = "RECORD: "+employee_firstname+" "+employee_middlename+" "+employee_lastname;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"7FD30029-67F1-43B1-81F2-88F062280C00"}
 */
function onEditEmployee(event,editStatus){
	forms.employees.controller.readOnly = !editStatus;
	forms.employees.editEmployeeFlag = !editStatus;
	forms.employee_specs.elements.cancelButton.visible = editStatus;
	forms.employee_specs.elements.saveButton.visible = editStatus;
	forms.employee_specs.elements.editButton.visible = !editStatus;
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CC3812E4-6FD8-461F-9749-A972DF579433"}
 */
function onActionEditEmployee(event) {
	onEditEmployee(event,true);
	databaseManager.setAutoSave(false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"868EBCCD-CB9C-4014-A79F-9BF649AE09C0"}
 */
function onActionCancelEditEmployee(event) {
	onEditEmployee(event,false);
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7C64DFF6-6587-439E-B5C3-F9204FDA3248"}
 */
function onActionSaveEditEmployee(event){
	onEditEmployee(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}