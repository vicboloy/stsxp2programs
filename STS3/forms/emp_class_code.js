
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
