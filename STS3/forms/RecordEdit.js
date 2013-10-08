/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"F05A6777-53B2-41A7-9FB5-B88BC814F6BB",variableType:8}
 */
var selectedIndex = 0;
/**
 *
 * @properties={typeid:35,uuid:"D7E3DA3F-3F1C-40C0-A9C1-A9D1920B9967",variableType:-4}
 */
var editFlag = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AA27341F-9B53-4E78-AA52-B5E4D85DE604"}
 */
function onShow(firstShow, event) {
	var dataset = controller.getFormContext().getValue(1,2);
	application.output('employee class list form parent on show '+dataset);

	controller.readOnly = true;
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	}
	elements.deleteButton.text = 'Delete class \''+class_code+'\'';
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"1C48C95D-A375-495D-9D45-70364F986DDB"}
 */
function onActionAdd(event){
	selectedIndex = controller.getSelectedIndex();
	onEdit(event,true);
	controller.newRecord();
	//globals.newRecordKey = employee_clas_id;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"30AE3F2F-AA0B-4BC4-9E02-96FFD937D512"}
 */
function onActionDelete(event) {
	var itemDescription;
	var itemDescr = "Remove "+itemDescription;
	globals.doDialog(itemDescr,"Delete this Class?","Delete","Cancel");
	if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}

}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D273E9E-ECB7-4362-9492-21A6DACDA13D"}
 */
function onRecordSelection(event) {
	//elements.deleteButton.text = 'Delete \''+type_code+'\'';
	elements.deleteButton.text = 'Delete';
	forms.status_descriptions.currentStatusCode = code;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5A03D84F-63FE-439C-908A-54F4839CD8F2"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	databaseManager.setAutoSave(false);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus Status of boolean for record edit status changes
 *
 *
 * @properties={typeid:24,uuid:"2CA6B5AA-5E72-412F-9002-67AB9698B7E9"}
 */
function onEdit(event,editStatus){
	editFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.addButton.visible = !editStatus;
	elements.saveButton.visible = editStatus;
	elements.cancelButton.visible = editStatus;
	elements.editButton.visible = !editStatus;
	elements.deleteButton.visible = !editStatus;
	elements.tablessX.enabled = !editStatus;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C9F5DFA1-D2EA-414C-87B3-A158BD655AB1"}
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
 *
 * @properties={typeid:24,uuid:"1F45CB1F-7119-4FFE-AFDE-B311BBCB3DC9"}
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
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DA80D0B2-0857-4B1E-9481-96DB80FEDA1C"}
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
