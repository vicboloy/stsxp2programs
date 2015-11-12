/**
 * @properties={typeid:35,uuid:"455A2791-CC8F-45FE-A564-C1C02BA5B179",variableType:-4}
 */
var editFlag = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"54B21135-162E-4ABD-B337-4CB15D5A67D8",variableType:4}
 */
var selectedIndex = 0;

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"16DA5ADC-AD41-4B59-93B4-EBB53F37C097"}
 */
function onShow(firstShow, event) {
	controller.readOnly = true;
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"BBCAFF29-FA7C-4C79-89F3-B649CD227D28"}
 */
function onActionAdd(event){
	globals.selectedEndPrepIndex = controller.getSelectedIndex();
	onEdit(event,true);
	controller.newRecord();
	globals.newRecordKey = end_condition_id;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CDFF9131-9C62-44EC-9FB4-AD364EEAA176"}
 */
function onActionDelete(event) {
	globals.doDialog("Remove End Condition","Delete this End Condition?","Delete","Cancel");
	if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C7BBBE77-1B45-4874-BCF4-C79131018700"}
 */
function onRecordSelectionEP(event) {
	null;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"1248B902-DB67-48F1-BD63-FB87D937D5D0"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	databaseManager.setAutoSave(false);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"BE307F94-F375-403F-8A60-7CD895058CF8"}
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
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"A6202325-9051-40BE-B2D6-7474956362B2"}
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
 * @properties={typeid:24,uuid:"2CD566F5-14CB-4CC4-9AAC-E158AA9E3B99"}
 */
function onActionSaveEdit(event) {
	edit_date = new Date;
	onEdit(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * @AllowToRunInFind
 * 
 * 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"CF0DAAF4-CED6-447C-8442-F3F050C78726"}
 */
function onDataChange(oldValue, newValue, event) {
	databaseManager.nullColumnValidatorEnabled = false;
	databaseManager.setAutoSave(true);
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		end_prep = newValue;
		foundset.search();
		var index = 0;
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			var record = null;
			for (index = 1;index <= foundset.getSize(); index++){
				record = foundset.getRecord(index);
				if (record.end_condition_id == globals.newRecordKey){
					foundset.deleteRecord(record);
				}
			}
			onEdit(event,false);
		}
		foundset.sts_end_conditions.loadAllRecords();
		foundset.setSelectedIndex(globals.newRecordIndex);
	}
	for (index = 1; index <= foundset.getSize(); index++){
		if (foundset.getRecord(index).end_prep == newValue){
			controller.setSelectedIndex(index);
		}
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
 * @properties={typeid:24,uuid:"0776FE40-F23B-4ECA-9DB8-009284BFA9E6"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
