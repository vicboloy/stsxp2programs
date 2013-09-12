/**
 * @properties={typeid:35,uuid:"2E713F4C-7CE4-44ED-9B1F-2C1334A562B5",variableType:-4}
 */
var editEmployeeClassFlag = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4E0A0F7-3C92-4804-8FFA-98BC9B85EAB5"}
 */
function onActionRecordSelect(event) {
	elements.empClassDeleteButton.text = elements.class_code.titleText;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E47D7FF2-8473-4AD4-AD69-AC99BA008846"}
 */
function onShowEmployeeClasses(firstShow, event) {
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	}
	elements.empClassDeleteButton.text = 'Delete code \''+class_code+'\'';
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"0AC1F465-7E38-41C1-9CB9-AC43FEAB1DEE"}
 */
function onActionAddClass(event){
	controller.newRecord();
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F0E5A77-AE9D-496C-B320-6F45FB46FE36"}
 */
function onActionDeleteClass(event) {
	globals.doDialog("Remove Employee Class","Delete this Class?","Delete","Cancel");
	if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}

}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76EF827F-5EBC-488E-AF0B-920AE2FC2807"}
 */
function onRecordSelectionEmpClass(event) {
	elements.empClassDeleteButton.text = 'Delete code \''+class_code+'\'';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88A9ED29-5564-4694-A956-13D2D5BA098C"}
 */
function onActionEditEmpClass(event) {
	onEditEmpClass(event,true);
	databaseManager.setAutoSave(false);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param status
 *
 * @properties={typeid:24,uuid:"39586DFE-D834-4968-8522-100C81C768A9"}
 */
function onEditEmpClass(event,status){
	forms.emp_class_code.editEmployeeClassFlag = !editStatus;
	forms.emp_class_code.elements.coverSheet.visible = !editStatus;
	forms.emp_class_code.elements.saveButton.visible = editStatus;
	forms.emp_class_code.elements.cancelButton.visible = editStatus;
	forms.emp_class_code.elements.editButton.visible = !editStatus;
	//forms.customer_barcode.elements.editMessage.visible = editStatus;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84142266-FF85-4162-912D-D02BCBE7310A"}
 */
function onActionCancelEditEmpClass(event) {
	onEditEmpClass(event,false);
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79A78EA7-A841-4268-9B58-8F4C44C432EB"}
 */
function onActionSaveEditEmpClass(event) {
	onEditEmpClass(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
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
 * @properties={typeid:24,uuid:"9C590279-636E-480A-85F3-41C7518730A7"}
 * @AllowToRunInFind
 */
function onDataChangeEmpClassCode(oldValue, newValue, event) {
	databaseManager.nullColumnValidatorEnabled = false;
	databaseManager.setAutoSave(true);
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		class_code = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			foundset.deleteRecord();
			onEditCustomer(event,false);
		}
		foundset.sts_customer_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedCustomerIndex);
		
	}
	databaseManager.setAutoSave(true);
	return true
}
