/**
 * @properties={typeid:35,uuid:"875A0E2C-8EB8-4619-87F7-D28341B835BB",variableType:-4}
 */
var editFlag = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AE5913C3-B7F9-4BC5-891B-D932C7EF7EC9",variableType:4}
 */
var selectedUOMIndex = 0;
/**
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"36033168-4C98-4CC2-87E0-FD49B6946777"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event,true);
	controller.readOnly = true;
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E48C67E7-992B-409E-8B64-2F280239F708"}
 */
function onActionAdd(event){
	globals.selectedUOMIndex = controller.getSelectedIndex();
	controller.newRecord();
	onEdit(event,true);
	tenant_uuid = globals.session.tenant_uuid;
	edit_date = new Date();
}

/**
* @param event
 *
 * @properties={typeid:24,uuid:"2E41F535-CE15-4213-B79C-20B4F4122D6D"}
 */
function onActionDelete(event) {
	globals.doDialog(i18n.getI18NMessage('sts.txt.units.of.measure.remove'),
		i18n.getI18NMessage('sts.txt.units.of.measure.remove.delete'),
		i18n.getI18NMessage('sts.txt.delete'),
		i18n.getI18NMessage('sts.txt.cancel'));
	if (globals.dialogResponse.toLowerCase() == 'yes'){
		edit_date = new Date();
		delete_flag = 99;
		databaseManager.saveData(foundset);
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"8BFBB16C-B5EB-4D10-8E51-77728A017A2A"}
 */
function onRecordSelection(event) {
	elements.uom_to_get_value.toolTipText = uom_to_get_value;
	elements.uom_to_get_wt.toolTipText = uom_to_get_wt;
	//elements.btn_Delete.text = 'Delete UOM \''+uom_code+'\'';
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"592AC6AF-8E61-42CB-AED4-6DF63CAD4403"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	databaseManager.setAutoSave(false);	
}

/**
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"AE63828B-36C7-46F0-88F2-05CC8FA1FF64"}
 */
function onEdit(event,editStatus){
	editFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.btn_New.visible = !editStatus;
	elements.btn_Save.visible = editStatus;
	elements.btn_Cancel.visible = editStatus;
	if (foundset.getSize() > 0){
		elements.btn_Edit.visible = !editStatus;
		elements.btn_Delete.visible = !editStatus;
	}
}


/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3675CD88-2B85-4DA5-AA05-B005CA40B258"}
 */
function onActionCancelEdit(event) {
	databaseManager.revertEditedRecords(foundset);
	onEdit(event,false);
}

/**
 @param event
 *
 * @properties={typeid:24,uuid:"EB19EADC-193D-44C9-9455-8EC9DC5D406A"}
 */
function onActionSaveEdit(event) {
	databaseManager.saveData(foundset);
	onEdit(event,false);
}

/**
 * @AllowToRunInFind
 * 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"E76BFEA2-E89F-4F46-B86C-021B8EC86E2F"}
 */
function onDataChange(oldValue, newValue, event) {
	/** @type {QBSelect<db:/stsservoy/uom_types>} */
	var q = databaseManager.createSelect('db:/stsservoy/uom_types');
	q.result.add(q.columns.uom_code);
	q.where.add(q.columns.uom_code.eq(newValue));
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var Q = databaseManager.getFoundSet(q);
	var size = Q.getSize();
	if (size > 0){
		var rec = Q.getRecord(1);
		onActionCancelEdit(event);
		var recIndex = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(recIndex);
	}
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BB8E60D-76B2-4108-A501-802EDE589148"}
 */
function onActionClose(event) {
	onActionCancelEdit(event);
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
