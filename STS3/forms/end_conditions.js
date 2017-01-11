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
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"16DA5ADC-AD41-4B59-93B4-EBB53F37C097"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event);
	controller.readOnly = true;
	loadFoundset();
	if (foundset.getSize() < 0){
		elements.btn_Edit.enabled = false;
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"BBCAFF29-FA7C-4C79-89F3-B649CD227D28"}
 */
function onActionAdd(event){
	globals.selectedEndPrepIndex = controller.getSelectedIndex();
	controller.newRecord();
	onEdit(event,true);
	edit_date = new Date();
	tenant_uuid = globals.session.tenant_uuid;
	globals.newRecordKey = end_condition_id;
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"CDFF9131-9C62-44EC-9FB4-AD364EEAA176"}
 */
function onActionDelete(event) {
	var response = globals.doDialog(i18n.getI18NMessage('sts.txt.delete.record'),
		i18n.getI18NMessage('sts.txt.delete.this.end.condition'),
		i18n.getI18NMessage('sts.txt.delete'),
		i18n.getI18NMessage('sts.txt.cancel'));
		//'Remove End Condition','Delete this End Condition?','Delete','Cancel');
	if (globals.dialogResponse.toLowerCase() == 'yes'){
		delete_flag = 99;
		edit_date = new Date();
		var rec = foundset.getSelectedRecord();
		databaseManager.saveData(rec);
		databaseManager.saveData(foundset);
		loadFoundset();
		onEdit(event,false);
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C7BBBE77-1B45-4874-BCF4-C79131018700"}
 */
function onRecordSelectionEP(event) {
	null;
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"1248B902-DB67-48F1-BD63-FB87D937D5D0"}
 */
function onActionEdit(event) {
	onEdit(event,true);
}

/**
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"BE307F94-F375-403F-8A60-7CD895058CF8"}
 */
function onEdit(event,editStatus){
	var records = (foundset.getSize() > 0);
	elements.btn_Edit.visible = !editStatus && records;
	elements.btn_Delete.visible = !editStatus && records;
	//if (!records){return}
	editFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.btn_New.visible = !editStatus;
	elements.btn_Save.visible = editStatus;
	elements.btn_Cancel.visible = editStatus;
	elements.tablessX.enabled = !editStatus;
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"A6202325-9051-40BE-B2D6-7474956362B2"}
 */
function onActionCancelEdit(event) {
	databaseManager.revertEditedRecords(foundset);
	onEdit(event,false);
	loadFoundset();
	//databaseManager.setAutoSave(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"2CD566F5-14CB-4CC4-9AAC-E158AA9E3B99"}
 */
function onActionSaveEdit(event) {
	edit_date = new Date();
	databaseManager.saveData(foundset);
	onEdit(event,false);
	//databaseManager.setAutoSave(true);
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
	/** @type {JSFoundSet<db:/stsservoy/end_conditions>} */
	/** @type {QBSelect<db:/stsservoy/end_conditions>} */
	var e = databaseManager.createSelect('db:/stsservoy/end_conditions');
	e.result.add(e.columns.end_condition_id);
	e.where.add(e.columns.delete_flag.isNull);
	e.where.add(e.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	e.where.add(e.columns.end_prep.eq(newValue));
	var E = databaseManager.getFoundSet(e);
	if (E.getSize() > 0){
		onActionCancelEdit(event);
		var rec = E.getRecord(1);
		var recIndex = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(recIndex);
	}
	onActionEdit(event);
	//foundset.sts_end_conditions.loadAllRecords();

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
	onActionCancelEdit(event);
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
/**
 * @properties={typeid:24,uuid:"F8C719B4-53B2-491C-B582-F96AE633DEE7"}
 */
function loadFoundset(){
	/** @type {QBSelect<db:/stsservoy/end_conditions>} */
	var e = databaseManager.createSelect('db:/stsservoy/end_conditions');
	e.result.add(e.columns.end_condition_id);
	e.where.add(e.columns.delete_flag.isNull);
	e.where.add(e.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var E = databaseManager.getFoundSet(e);
	foundset.loadRecords(E);
}