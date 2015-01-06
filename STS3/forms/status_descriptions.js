/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35A9EEFD-D19A-45DB-B25F-EC4BFD735A8D"}
 */
var currentStatusCode = "";
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
	var assocs = []; //assocs.push(''); no blank fabshops
	for (var index in globals.aMobAssocs){
		assocs.push(globals.aMobAssocs[index]);
	}
	//application.setValueListItems('stsvl_fab_shop',assocs);
	var promptFS = (scopes.prefs.promptFabShop) ? true : false;
	elements.fab_shop.enabled = promptFS;
	elements.fab_shop.transparent = !scopes.prefs.promptFabShop;
	elements.push_transaction.enabled = promptFS;
	elements.percent_complete.enabled = promptFS;
	elements.fabtrol_labor_code.enabled = promptFS;
	elements.fabtrol_labor_code.transparent = !promptFS;
	controller.readOnly = true;
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	}
	globals.newRecordKey = null;
	if (foundset.getSize() == 0){
		elements.deleteButton.visible = false;
		elements.editButton.visible = false;
	}
	//elements.deleteButton.text = 'Delete class \''+status_code+'\'';
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
	databaseManager.setAutoSave(false);
	onEdit(event,true);
	controller.newRecord();
	globals.newRecordKey = status_description_id;
	tenant_uuid = globals.secCurrentTenantID;
	//elements.deleteButton.visible = true;
	//elements.editButton.visible = true;
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
	globals.doDialog(itemDescr,"Delete?","Delete","Cancel");
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
	databaseManager.setAutoSave(false);	
	onEdit(event,true);
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
	databaseManager.nullColumnValidatorEnabled = false;
	editFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.addButton.visible = !editStatus;
	elements.editButton.visible = !editStatus;
	elements.deleteButton.visible = !editStatus;
	elements.saveButton.visible = editStatus;
	elements.cancelButton.visible = editStatus;
	if (status_code && (status_code.search(RegExp('TRANS')) != -1 || status_code.search(RegExp('XFER')) != -1)) {
		elements.req_xfer_status.enabled = true;
	} else {
		elements.req_xfer_status.enabled = false;
	}
	try {
		elements.tablessX.enabled = !editStatus; //just ignore the tabless on some screens
	}
	catch (e) {}
	if (!editStatus){
		databaseManager.saveData(foundset);
		forms.status_description_lst.controller.sort('status_sequence asc');
	}
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
	if (globals.newRecordKey != null){
		controller.deleteRecord();
		globals.newRecordKey = null
	}
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
	null;
	if (association_id == "" || association_id == null){
		globals.errorDialogMobile(-1);
		elements.fab_shop.requestFocus();
		return;
	}
	if (status_code == "" || status_code == null){
		globals.errorDialogMobile(401);
		elements.status_code.requestFocus();
		return;
	}
	if (status_sequence == "" || status_sequence == null){
		globals.errorDialogMobile(-1);
		elements.status_sequence.requestFocus();
		return
	}
	onEdit(event,false);
	databaseManager.saveData(foundset);
	databaseManager.setAutoSave(true);
}
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B848F299-A871-4A13-A798-6EBB73ADEB6F"}
 * @AllowToRunInFind
 */
function onDataChangeProcess(oldValue, newValue, event) {
	if (newValue == ""){
		globals.errorDialog(-1);
		return false;
	}
	return true
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
function onDataChangeStatus(oldValue, newValue, event) {
	if (newValue.toUpperCase() != newValue){
		newValue = newValue.toUpperCase();
		status_code = newValue;
	}
	if (newValue == "" || newValue == null){
		return false;
	}
	newValue = newValue.toUpperCase();
	var status = onActionCheckStatusFabShop(event);
	if (!status){
		return false;
	}
	//databaseManager.setAutoSave(true);
	//globals.newRecordKey = "";
	var statusCodesTemp = application.getValueListArray('stsvl_status_codes');
	var statusCodes = [];
	for (var index in statusCodesTemp){
		statusCodes.push(statusCodesTemp[index]);
	}
	if (statusCodes.indexOf(newValue) == -1){
		statusCodes.push(newValue);
		application.setValueListItems('stsvl_status_codes',statusCodes);
	}
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
	//var processString = "";
	var upCasedElement = "";
	for (var index = 0;index < globals.aStatusTypes.length;index++){
		upCasedElement = globals.aStatusTypes[index].toUpperCase();
		if (upCasedElement.search(RegExp(statusCode)) != -1){
			return index;
		}
	}
	return -1;
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C86DD7A-7054-461D-837C-63849E991890"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
/**
 * @properties={typeid:24,uuid:"FCD33A7F-ACF1-4899-82AD-7E0B5DB5794A"}
 * @AllowToRunInFind
 */
function onActionCheckStatusFabShop(event){
	var currLocation = association_id;
	var currStatus = status_code;
	if (currLocation == null || currStatus == null){
		return true;
	}
	databaseManager.saveData(foundset);
	//var record = null;
	if (foundset.find()) { //find will fail if autosave is disabled and there are unsaved records
		association_id = currLocation;
		status_code = currStatus;
		tenant_uuid = globals.secCurrentTenantID;
		var selectRec = null;
		var count = foundset.search();
		if (count > 1){
			if (globals.newRecordKey == null){return false}
			for (var index = 1;index <= foundset.getSize(); index++){
				var record = foundset.getRecord(index);
				if (count != 1 && record.status_description_id == globals.newRecordKey){
					foundset.deleteRecord(record);
					globals.newRecordKey = null;
				} else {
					selectRec = record;
				}
			}
			onEdit(event,false);
			foundset.sts_status_code_container.loadAllRecords();
			foundset.setSelectedIndex(foundset.getRecordIndex(selectRec));
			globals.newRecordKey = null;
			return true;
		}
		if (count == 1){
			foundset.sts_status_code_container.loadAllRecords();
			globals.newRecordKey = null;
			return true;
		}
		if (count == 0){
			return false;
		}
		
	}
	return true;
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
 * @properties={typeid:24,uuid:"7A0C7C5E-62FD-4F81-8ED6-EB07E4193343"}
 */
function onDataChangeFabShop(oldValue, newValue, event) {
	if (newValue == "" || newValue == null){
		return false;
	}
	return onActionCheckStatusFabShop(event);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param index
 *
 * @properties={typeid:24,uuid:"628420C0-F583-4FA4-9612-E365F2CF28BA"}
 */
function setFormIndex(index){
	controller.setSelectedIndex(index);
}