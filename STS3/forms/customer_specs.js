/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"173C7486-B3E9-48F9-9895-23BEFBE8DF07"}
 */
var findCustomerString = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DCCC099D-F886-4D5C-9523-EEE35A0DED06"}
 */
var findCustomerStringLast = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D1737956-8001-4DD5-A3C3-03257A5F2CB5",variableType:4}
 */
var findCustomerStringIdx = 0;
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
	globals.setUserFormPermissions(event,false);
	
	findCustomerString = '';
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

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A1BD9D12-D378-47E3-A098-94A22C86DCD6"}
 */
function onDataChangeFindCustomer(oldValue, newValue, event) {
	if (!newValue){return}
	findCustomerStringLast = newValue;
	onActionReFind(event);
	if (1){return}
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var q = databaseManager.createSelect('db:/stsservoy/customers');
	q.where.add(q.columns.customer_number.eq(newValue.toUpperCase()));
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() == 1){
		var rec = Q.getRecord(1);
		foundset.setSelectedIndex(foundset.getRecordIndex(rec));
	} else {
		q.where.clear();
		q.where.add(q.columns.name.upper.like(newValue.toUpperCase()+'%'));
		q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
		Q = databaseManager.getFoundSet(q);
		if (Q.getSize() > 0){
			if (findCustomerStringIdx && findCustomerStringIdx < Q.getSize()){findCustomerStringIdx++}else{findCustomerStringIdx = 1}
			rec = Q.getRecord(findCustomerStringIdx);
			var limit = 120;
			var idx = foundset.getRecordIndex(rec);
			while (idx == -1 && limit > 0){
				limit--;
				foundset.getRecord(foundset.getSize()+1);
				foundset.setSelectedIndex(idx);
				if (foundset.getSelectedIndex() == idx){break}
				//controller.setSelectedIndex(foundset.getRecordIndex(rec))
			}
			foundset.setSelectedIndex(idx);
			//findCustomerStringIdx = idx;
		}
	}
	findCustomerString = '';
	elements.custSearch.requestFocus();
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C41FE927-E7C0-4474-9305-825063B568B0"}
 */
function onActionReFind(event) {
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var q = databaseManager.createSelect('db:/stsservoy/customers');
	q.where.add(q.columns.customer_number.eq(findCustomerStringLast.toUpperCase()));
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() == 1){
		var rec = Q.getRecord(1);
		foundset.setSelectedIndex(foundset.getRecordIndex(rec));
	} else {
		q.where.clear();
		q.where.add(q.columns.name.upper.like(findCustomerStringLast.toUpperCase()+'%'));
		q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
		Q = databaseManager.getFoundSet(q);
		if (Q.getSize() > 0){
			if (findCustomerStringIdx && findCustomerStringIdx < Q.getSize()){findCustomerStringIdx++}else{findCustomerStringIdx = 1}
			rec = Q.getRecord(findCustomerStringIdx);
			var limit = 120;
			var idx = foundset.getRecordIndex(rec);
			while (idx == -1 && limit > 0){
				limit--;
				foundset.getRecord(foundset.getSize()+1);
				foundset.setSelectedIndex(idx);
				if (foundset.getSelectedIndex() == idx){break}
				//controller.setSelectedIndex(foundset.getRecordIndex(rec))
			}
			foundset.setSelectedIndex(idx);
			//findCustomerStringIdx = idx;
		}
	}
	findCustomerString = '';
	elements.custSearch.requestFocus();

}
