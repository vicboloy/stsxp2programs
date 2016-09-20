
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E651C76-6B8A-4E00-9E35-84E98F1DD18F"}
 */
function onAction(event) {
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"BDA82489-751B-4DE4-BF07-2936A720B5BF"}
 */
function newRecord(event, location, changeSelection) {
	var rec = _super.newRecord(event, location, changeSelection);
	if (typeof edit_date !== "undefined"){edit_date = new Date();}
	if (typeof tenant_uuid !== "undefined"){
		if (tenant_uuid == null && globals.secCurrentTenantID != null){
			tenant_uuid = globals.secCurrentTenantID;
		}
	}
	return rec;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"2A9BE440-9F96-4B68-9D09-0DF5778D6F8B"}
 * @AllowToRunInFind
 */
function deleteRecord(event, index) {
	/** @type {JSFoundSet<db:/stsservoy/user_groups>} */
	var fs = databaseManager.getFoundSet('stsservoy','user_groups');
	if (fs.find()){
		fs.group_uuid = group_uuid;
		if (fs.search()){
			globals.DIALOGS.showErrorDialog('Cannot delete Permission Group','Group Key already used within User Group Keys.');
			return true;
		}
	}
	return _super.deleteRecord(event, index);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9763F85B-5156-46CC-9A37-0E526289361C"}
 */
function onShow(firstShow, event) {
	//foundset.loadAllRecords();
	return _super.onShow(firstShow, event)
}
