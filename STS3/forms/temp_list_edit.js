/**
 *
 * @param edit
 *
 * @properties={typeid:24,uuid:"7F4C15B6-BC70-411B-8BF2-27BDB95D193D"}
 */
function editStatus(edit){
	controller.readOnly = !edit;
	elements.btn_New.visible = !edit;
	elements.btn_New_2.enabled = !edit;
	elements.btn_Cancel.visible = edit;
	elements.btn_Delete.visible = !edit;
	elements.btn_Edit.visible = !edit;
	elements.btn_Save.visible = edit;
	elements.tabless.enabled = !edit;
	elements.tabless_1.enabled = !edit;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"C3D6B0EC-981A-4F1D-B952-4AF47413C838"}
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
 * @properties={typeid:24,uuid:"B430DC4E-616F-43DC-A1C4-4AA10BC3CDEC"}
 */
function saveEdits(event, record, stopEdit) {
	editStatus(false);
	return _super.saveEdits(event, record, stopEdit)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A0DF026-2D5C-422F-8472-2A8A18BBEAF1"}
 */
function startEditing(event) {
	editStatus(true);
	return _super.startEditing(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A49F5599-C013-4967-ACA3-8547602C989A"}
 */
function stopEditing(event) {
	databaseManager.revertEditedRecords(foundset);
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
 * @properties={typeid:24,uuid:"490C9BC0-350E-411D-8F1F-5DAB03A7C7AB"}
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
 * @properties={typeid:24,uuid:"4012D792-FB77-49F9-B0F6-E642CD42277E"}
 */
function onShow(firstShow, event) {
	editStatus(false);
	return _super.onShow(firstShow, event)
}
