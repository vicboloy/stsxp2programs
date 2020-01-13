/**
 * @properties={typeid:35,uuid:"4137BDC4-EC26-4862-85D9-B069B6EEE5C2",variableType:-4}
 */
var editCustomerFlag = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6B4C0C75-68C1-4903-A9B5-F49D0FF64BFF"}
 */
function onShow(firstShow, event) {
	//set this up for edit, save, cancel
	//onActionEdit(event,false);//#task01
	//controller.readOnly = true;
	onActionEdit(event,false);
	globals.setUserFormPermissions(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF3A2D9F-98D2-4CB9-AADB-49103C11E1C5"}
 */
 function delRecord(event) {
		globals.doDialog(i18n.getI18NMessage('sts.txt.delete.record'),
			i18n.getI18NMessage('sts.txt.delete.this.customer'),
			i18n.getI18NMessage('sts.txt.delete'),
			i18n.getI18NMessage('sts.txt.cancel'));
		if (globals.dialogResponse.toLowerCase() == 'yes'){
			controller.deleteRecord();
		}
}
/**
 *
 * @param event button event
 * @param editStatus set event status to editing or not to disable buttons, etc
 *
 *
 * @properties={typeid:24,uuid:"3F935FD7-0489-42AA-A670-C26F73B09E0C"}
 */
function onActionEdit(event,editStatus){
	var instance = globals.getInstanceForm(event);
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionEdit){forms[tabFormName].onActionEdit(event,editStatus)}
	}
	forms['customer_specs'+instance].elements.tabs.setTabEnabledAt(4,true);//enable addresses tab after save

	elements.btn_Cancel.visible = editStatus;
	elements.btn_Delete.visible = !editStatus;
	elements.btn_Save.visible = editStatus;
	elements.btn_Edit.visible = !editStatus;
	forms['customers_rec'+instance].controller.enabled = !editStatus;
	if (!editStatus){
		globals.permissionsCacheHit(event,'customers_rec'+instance);
	}
	globals.permissionsCacheHit(event,null);
	editCustomerFlag = editStatus;
	
	databaseManager.setAutoSave(false);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"14967395-D34F-4E4A-ACEB-91B1FCE3E9C5"}
 */
function onActionCancelEdit(event) {
	onActionEdit(event,false);
	databaseManager.revertEditedRecords(foundset);
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionCancelEdit){forms[tabFormName].onActionCancelEdit(event)}
	}
	globals.permissionsCacheHit(event,null);
}
/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"5FFCF8BA-36DB-46CC-8AD3-1391CAEBFB4D"}
 */
function onActionSaveEdit(event){
	onActionEdit(event,false);
	var rec = foundset.getRecord(controller.getSelectedIndex());
	rec.tenant_uuid = scopes.globals.session.tenant_uuid;
	databaseManager.saveData(rec);
	application.setValueListItems('stsvlt_customers',globals.getCustomerList());
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionSaveEdit){forms[tabFormName].onActionSaveEdit(event)}
	}
	var instance = globals.getInstanceForm(event);

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89C383DE-E736-4E50-8603-1524629ED635"}
 */
function onActionClose(event) {
	onActionCancelEdit(event);
	var tabCount = elements.tabs.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabs.getTabFormNameAt(index);
		if (forms[tabFormName].onActionClose){forms[tabFormName].onActionClose(event)}
	}
	globals.stopWindowTrackEvent(event);
}


/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"79CFCC7F-B3A1-4B57-9D6F-87588AAC03DE"}
 */
function onHide(event) {
	onActionClose(event);
	return true
}
