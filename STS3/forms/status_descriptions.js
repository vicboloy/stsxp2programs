/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"4CC0E715-714C-4429-827A-A66B5BBA0410",variableType:8}
 */
var selectedIndex = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35A9EEFD-D19A-45DB-B25F-EC4BFD735A8D"}
 */
var currentStatusCode = "";
/**
 *
 * @properties={typeid:35,uuid:"C8B05923-9241-4808-9CA0-3C3CCD38D84D",variableType:-4}
 */
var editFlag = false;


/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"E44816A6-43AC-40C4-AB19-74B1B1EB170C"}
 * @AllowToRunInFind
 */
function onShowStatusDescr(firstShow, event) {
	//var dataset = controller.getFormContext().getValue(1,2);
	//application.output('employee class list form parent on show '+dataset);
	globals.initLaborCodes();
	globals.initStatusCodes();
	elements.fab_shop.enabled = globals.promptFabShop;
	elements.fab_shop.transparent = !globals.promptFabShop;
	elements.push_transaction.enabled = globals.promptFabShop;
	elements.percent_complete.enabled = globals.promptFabShop;
	elements.fabtrol_labor_code.enabled = globals.lFabtrolInstalled;
	elements.fabtrol_labor_code.transparent = !globals.lFabtrolInstalled;
	controller.readOnly = true;
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	}
	elements.deleteButton.text = 'Delete class \''+status_code+'\'';
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"91BAAD22-DC07-4128-BB22-7E3F0002F1A0"}
 */
function onActionAdd(event){
	selectedIndex = controller.getSelectedIndex();
	onEdit(event,true);
	controller.newRecord();
	globals.newRecordKey = status_description_id;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} itemDescription item description to delete
 *
 * @properties={typeid:24,uuid:"2BD445F0-CAC3-47A9-8209-748004C6544E"}
 */
function onActionDelete(event,itemDescription) {
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
 *
 * @properties={typeid:24,uuid:"119085D9-B7D7-4FD9-AFFA-9F82FC9CBAA1"}
 */
function onRecordSelection(event) {
	//elements.deleteButton.text = 'Delete class \''+status_code+'\'';
	elements.deleteButton.text = 'Delete';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6655BA1E-3C2E-47A7-BE61-C19CBCE5239D"}
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
 * @properties={typeid:24,uuid:"7AB91C86-4EF3-462B-8B2C-9E754824FDF4"}
 * @AllowToRunInFind
 */
function onEdit(event,editStatus){
	editFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.addButton.visible = !editStatus;
	elements.saveButton.visible = editStatus;
	elements.cancelButton.visible = editStatus;
	elements.editButton.visible = !editStatus;
	elements.deleteButton.visible = !editStatus;
	if (status_code.search(RegExp('TRANS')) != -1 || status_code.search(RegExp('XFER')) != -1) {
		elements.req_xfer_status.enabled = true;
	} else {
		elements.req_xfer_status.enabled = false;
	}
	try {
		elements.tablessX.enabled = !editStatus; //just ignore the tabless on some screens
	}
	catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"63DF1572-0114-4457-A490-415629F7DD57"}
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
 * @properties={typeid:24,uuid:"CA01300F-DA75-49DC-A18A-CEE45DCE7324"}
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
 * @properties={typeid:24,uuid:"B6ABBA02-E6AC-434D-9F92-E50C12FD5FE4"}
 */
function onDataChange(oldValue, newValue, event) {
	databaseManager.nullColumnValidatorEnabled = false;
	databaseManager.setAutoSave(true);
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		status_code = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		if (count > 1){
			var record = null;
			for (var index = 1;index <= foundset.getSize(); index++){
				record = foundset.getRecord(index);
				if (record.status_description_id == globals.newRecordKey){
					foundset.deleteRecord(record);
				}
			}
			onEdit(event,false);
		}
		foundset.sts_status_code_container.loadAllRecords();
		foundset.setSelectedIndex(globals.selectedEmpClassIndex);
		
	}
	databaseManager.setAutoSave(true);
	globals.newRecordKey = "";
	index = onEntryStatusCode(newValue);
	if (index != -1){
		status_type = globals.aStatusTypes[index];
	}
	return true
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B0300964-0FDA-4658-A268-379475A5D0F4"}
 */
function onActionOverwrite(event) {
	globals.currentStatusCodeSequence = status_sequence;
	var windowTitle = "Overwritable Status Codes by this code...";
	var win = application.createWindow(windowTitle, JSWindow.MODAL_DIALOG);
	/* var xBeg = xOrigin;
	var yBeg = yOrigin;
	var xEnd = xOrigin+xWidth;
	var yEnd = yOrigin+yHeight;
	*/
	win.setInitialBounds(50, 50, 610, 350);

	win.title = windowTitle;
	win.show('status_condition_overwrite');
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param statusCode
 *
 * @properties={typeid:24,uuid:"88505C08-1487-4B7C-81A0-BC87C51DB9BB"}
 */
function onEntryStatusCode(statusCode) {
	// globals.aStatusTypes
	var processString = "";
	var upCasedElement = "";
	for (var index = 0;index < globals.aStatusTypes.length;index++){
		upCasedElement = globals.aStatusTypes[index].toUpperCase();
		if (upCasedElement.search(RegExp(statusCode)) != -1){
			return index;
		}
	}
	return -1;
}

