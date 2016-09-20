/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15CF8AEF-895B-4583-85F4-7712B2E645C4",variableType:4}
 */
var selectedIndex = 0;
/**
 * @properties={typeid:35,uuid:"2E713F4C-7CE4-44ED-9B1F-2C1334A562B5",variableType:-4}
 */
var editFlag = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E47D7FF2-8473-4AD4-AD69-AC99BA008846"}
 */
function onShow(firstShow, event) {
	if (firstShow){
	}
	globals.setUserFormPermissions(event);
	controller.getFormContext().getValue(1,2);

	controller.readOnly = true;
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	}
	elements.btn_Delete.text = 'Delete class \''+class_code+'\'';
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"0AC1F465-7E38-41C1-9CB9-AC43FEAB1DEE"}
 */
function onActionAdd(event){
	selectedIndex = controller.getSelectedIndex();
	onEdit(event,true);
	controller.newRecord();
	globals.newRecordKey = employee_clas_id;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F0E5A77-AE9D-496C-B320-6F45FB46FE36"}
 */
function onActionDelete(event) {
	globals.doDialog('Remove Employee Class','Delete this Class?','Delete','Cancel');
	if (globals.dialogResponse == 'yes'){
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
function onRecordSelection(event) {
	elements.btn_Delete.text = 'Delete class \''+class_code+'\'';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88A9ED29-5564-4694-A956-13D2D5BA098C"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	databaseManager.setAutoSave(false);	
}

/**
 *
 * @param event
 * @param editStatus Status of boolean for record edit status changes
 *
 * @properties={typeid:24,uuid:"39586DFE-D834-4968-8522-100C81C768A9"}
 */
function onEdit(event,editStatus){
	editFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.btn_New.visible = !editStatus;
	elements.btn_Save.visible = editStatus;
	elements.btn_Cancel.visible = editStatus;
	elements.btn_Edit.visible = !editStatus;
	elements.btn_Delete.visible = !editStatus;
	elements.tablessX.enabled = !editStatus;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84142266-FF85-4162-912D-D02BCBE7310A"}
 */
function onActionCancelEdit(event) {
	onEdit(event,false);
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
function onActionSaveEdit(event) {
	onEdit(event,false);
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
function onDataChange(oldValue, newValue, event) {
	databaseManager.nullColumnValidatorEnabled = false;
	databaseManager.setAutoSave(true);
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		class_code = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			var record = null;
			for (var index = 1;index <= foundset.getSize(); index++){
				record = foundset.getRecord(index);
				if (record.employee_clas_id == globals.newRecordKey){
					foundset.deleteRecord(record);
				}
			}
			onEdit(event,false);
		}
		foundset.sts_employee_class_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedEmpClassIndex);
		
	}
	databaseManager.setAutoSave(true);
	globals.newRecordKey = "";
	return true
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75348F35-ED33-450C-B4F7-3FA566D5A6C0"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
