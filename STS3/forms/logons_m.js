/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F710F1F7-49B7-48AD-900E-6F225D3DAD1C"}
 */
function onActionTempNewUser(event) {
	application.output("onActionTempNewUser user_management "+globals.secCurrentTenantID);
}
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6019A443-F0FC-425F-B29D-03FBE67C6345"}
 */
function onHide(event) {
	onEdit(event,false);
	databaseManager.revertEditedRecords(foundset);
	globals.setWindowClosed();
	return _super.onHide(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AA944071-CA23-4099-8DF6-19DD86CEF6C7"}
 */
function onActionClose(event) {
	onEdit(event,false);
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editFlag
 *
 * @properties={typeid:24,uuid:"A4BA6336-BA1F-48EB-B816-A4A5B3F2D47F"}
 */
function onEdit(event,editFlag){
	if (!editFlag){
		newRec = null;
	}
	elements.editButton.visible = !editFlag;
	elements.cancelButton.visible = editFlag;
	elements.saveButton.visible = editFlag;
	elements.split.getLeftForm().controller.enabled = !editFlag;
	elements.split.getRightForm().controller.enabled = editFlag;
	elements.split.getRightForm().elements.user_name.editable = editFlag;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"23C234C1-325A-4265-A4D4-AD643F6284DA"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	_super.startEditing(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {JSRecord} record
 * @param {Boolean} stopEdit
 *
 * @properties={typeid:24,uuid:"A7D4B571-2BDD-4EF7-BA77-D45BCD0CA43E"}
 */
function saveEdits(event, record, stopEdit) {
	onEdit(event,false);
	return _super.saveEdits(event, record, stopEdit)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69FBB4DA-B107-4FDF-90C4-92A75D439466"}
 */
function cancelEdit(event) {
	onEdit(event,false);
	databaseManager.revertEditedRecords(foundset);
	stopEditing(event);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C535CDB6-BA40-4E92-A96D-4B78AE10E8C6"}
 */
function onShow(firstShow, event) {
	newRec = null;
	onEdit(event,false);
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"04D6CF4D-3AD1-4D86-A9D5-431F65B088B4"}
 */
function newRecord(event, location, changeSelection) {
	tenant_uuid = globals.session.tenant_uuid;
	edit_date = new Date();
	onEdit(event,true);
	var status = _super.newRecord(event, location, changeSelection);
	newRec = foundset.getSelectedRecord();
	return status;
}
