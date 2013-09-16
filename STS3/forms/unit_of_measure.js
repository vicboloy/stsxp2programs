/**
 * @properties={typeid:35,uuid:"875A0E2C-8EB8-4619-87F7-D28341B835BB",variableType:-4}
 */
var editUOMFlag = false;

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"36033168-4C98-4CC2-87E0-FD49B6946777"}
 */
function onShowUOM(firstShow, event) {
	controller.readOnly = true;
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	}
	elements.deleteButton.text = 'Delete UOM \''+uom_code+'\'';
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E48C67E7-992B-409E-8B64-2F280239F708"}
 */
function onActionAddUOM(event){
	globals.selectedUOMIndex = controller.getSelectedIndex();
	forms.unit_of_measure.onEditUOM(event,true);
	controller.newRecord();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2E41F535-CE15-4213-B79C-20B4F4122D6D"}
 */
function onActionDeleteUOM(event) {
	globals.doDialog("Remove UOM","Delete this UOM?","Delete","Cancel");
	if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"8BFBB16C-B5EB-4D10-8E51-77728A017A2A"}
 */
function onRecordSelectionUOM(event) {
	elements.deleteButton.text = 'Delete UOM \''+uom_code+'\'';
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"592AC6AF-8E61-42CB-AED4-6DF63CAD4403"}
 */
function onActionEditUOM(event) {
	onEditUOM(event,true);
	databaseManager.setAutoSave(false);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"AE63828B-36C7-46F0-88F2-05CC8FA1FF64"}
 */
function onEditUOM(event,editStatus){
	editUOMFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.addUOMButton.visible = !editStatus;
	elements.saveButton.visible = editStatus;
	elements.cancelButton.visible = editStatus;
	elements.editButton.visible = !editStatus;
	elements.deleteButton.visible = !editStatus;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3675CD88-2B85-4DA5-AA05-B005CA40B258"}
 */
function onActionCancelEditUOM(event) {
	onEditUOM(event,false);
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"EB19EADC-193D-44C9-9455-8EC9DC5D406A"}
 */
function onActionSaveEditUOM(event) {
	uom_edit_date = new Date;
	onEditUOM(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"E76BFEA2-E89F-4F46-B86C-021B8EC86E2F"}
 */
function onDataChangeUOMCode(oldValue, newValue, event) {
	databaseManager.nullColumnValidatorEnabled = false;
	databaseManager.setAutoSave(true);
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		uom_code = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			foundset.deleteRecord();
			onEditUOM(event,false);
		}
		foundset.sts_units_of_measure.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedUOMIndex);
		
	}
	databaseManager.setAutoSave(true);
	return true
}
