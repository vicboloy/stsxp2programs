/**
 * TODO generated, please specify type and doc for the params
 * @param edit
 *
 * @properties={typeid:24,uuid:"D7C111F4-9C2F-486B-B364-D6F36E7F90C9"}
 */
function editStatus(edit){
	controller.readOnly = !edit;
	elements.addButton.visible = !edit;
	elements.addButtonAux.enabled = !edit;
	elements.cancelButton.visible = edit;
	elements.deleteButton.visible = !edit;
	elements.editButton.visible = !edit;
	elements.saveButton.visible = edit;
	elements.tabless.enabled = !edit;
	elements.tabless_1.enabled = !edit;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"0B2399A8-EB0A-412A-AEC1-FB22DE3BAF36"}
 */
function deleteRecord(event, index) {
	editStatus(false);
	return _super.deleteRecord(event, index)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {JSRecord} record
 * @param {Boolean} stopEdit
 *
 * @properties={typeid:24,uuid:"9B121F2A-5E04-4F92-8644-C52613C0FC27"}
 */
function saveEdits(event, record, stopEdit) {
	editStatus(false);
	edit_date = new Date();
	return _super.saveEdits(event, record, stopEdit)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D0F4F129-3D31-4A13-BD3F-DC986FBB0F2C"}
 */
function startEditing(event) {
	editStatus(true);
	tenant_uuid = globals.secCurrentTenantID;
	return _super.startEditing(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B5EAC0B5-3A3C-4584-9252-D480C08B0950"}
 */
function stopEditing(event) {
	editStatus(false)
	return _super.stopEditing(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"55A7B21B-C8DA-4A31-8991-49FBD468B7F0"}
 */
function newRecord(event, location, changeSelection) {
	editStatus(true);
	return _super.newRecord(event, location, changeSelection)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B811C1C-FC56-43B5-84FB-ACA37A214F7E"}
 */
function onShow(firstShow, event) {
	editStatus(false);
	scopes.jobs.loadTablePrefs('cost_of_work_int');
	return _super.onShow(firstShow, event)
}


/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"58754A69-D713-4AA4-827C-281BB12A3884"}
 */
function onDataChangeCow(oldValue, newValue, event) {
	var selIndex = controller.getSelectedIndex();
	if (newValue == "") {return false}
	var count = foundset.getSize();	
	for (var index = 1; index <= count;index++){
		if (selIndex == index){continue}
		var fs = foundset.getRecord(index);
		if (fs.cow_code == newValue){
			cow_code = oldValue;
			if (oldValue == null){
				stopEditing(event);
				controller.setSelectedIndex(index-1);
			} else {
				controller.setSelectedIndex(index);
			}
			break;
		}
	}
	return true;
}
