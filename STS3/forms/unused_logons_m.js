/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18C9D8B7-9B13-4B7B-9749-4422DD5DC74C"}
 */
var formFunc = "CreateLogin";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A69F9F37-51F2-4FBE-BF85-13A22915490A",variableType:4}
 */
var showIndex = 0;
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
	onActionClose(event);
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
 *
 * @param event
 * @param editFlag
 *
 * @properties={typeid:24,uuid:"A4BA6336-BA1F-48EB-B816-A4A5B3F2D47F"}
 */
function onEdit(event,editFlag){
	if (!editFlag){
		newRec = null;
	}
	elements.btn_Edit.visible = !editFlag;
	elements.btn_Cancel.visible = editFlag;
	elements.btn_Save.visible = editFlag;
	elements.btn_New.enabled = !editFlag;
	elements.split.getLeftForm().controller.enabled = !editFlag;
	elements.split.getRightForm().controller.enabled = editFlag;
	elements.split.getRightForm().elements.user_name.editable = editFlag;
	var rightForm = elements.split.getRightForm();
	rightForm.elements.btn_Update.enabled = editFlag;
	
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
 * @param {Boolean} stopEdit
 *
 * @properties={typeid:24,uuid:"A7D4B571-2BDD-4EF7-BA77-D45BCD0CA43E"}
 */
function saveEdits(event, stopEdit) {
	var record = foundset.getSelectedRecord();
	var assoc = forms[event.getFormName()].elements.split.getRightForm().assoc;
	//record.association_uuid = assoc;
	onEdit(event,false);
	databaseManager.saveData(record);
	return _super.saveEdits(event, record, stopEdit)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69FBB4DA-B107-4FDF-90C4-92A75D439466"}
 */
function onActionCancelEdit(event) {
	onEdit(event,false);
	databaseManager.revertEditedRecords(foundset);
	//stopEditing(event);
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
	globals.setUserFormPermissions(event);
	var newRec = null;
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
	onEdit(event,true);
	var status = _super.newRecord(event, location, changeSelection);
	var newRec = foundset.getSelectedRecord();
	tenant_uuid = globals.session.tenant_uuid;
	edit_date = new Date();
	return status;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"249E7B98-1CB7-45AB-8AF2-ABA89D241637"}
 */
function onActionSelectInterval(event) {
	for (var index = 1;index <= foundset.getSize();index++){
		var date = new Date().getTime()+1000;
		var newDate = new Date().getTime();
		while (newDate < date){
			newDate = new Date().getTime();
			
		}
		application.output('date '+newDate+' '+date);
		application.output('select '+index);
		foundset.setSelectedIndex(index);
		application.updateUI();
	}
}
