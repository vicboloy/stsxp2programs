
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"95C06E52-B3D9-4FED-B4D2-F595307B3E71"}
 */
function newRecord(event, location, changeSelection) {
	var rec = _super.newRecord(event, location, changeSelection);
	if (typeof edit_date !== "undefined"){edit_date = new Date();}
	if (typeof tenant_uuid !== "undefined" && tenant_uuid === null && globals.secCurrentTenantID !== undefined){
		tenant_uuid = globals.secCurrentTenantID;
	}
	return rec;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30EEE7DC-102B-413D-9999-FA2AE63ED9D9"}
 */
function onShow(firstShow, event) {
	//foundset.loadAllRecords();
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"980113C3-D41B-4B2D-9B05-59F3BCDE4255"}
 * @AllowToRunInFind
 */
function deleteRecord(event, index) {
	/** @type {JSFoundSet<db:/stsservoy/group_keys>} */
	var fs = databaseManager.getFoundSet('stsservoy','group_keys');
	if (fs.find()){
		fs.key_id = key_id;
		if (fs.search()){
			globals.DIALOGS.showErrorDialog('Cannot delete Permission','Permission Key already used within Permission Group.');
			return true;
		}
	}
	return _super.deleteRecord(event, index);
}
