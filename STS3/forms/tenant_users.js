
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"C05B33D2-8DB3-4F9A-9817-88889B1E20AB"}
 */
function newRecord(event, location, changeSelection) {
	var newRec = _super.newRecord(event, location, changeSelection);
	user_name = "";
	tenant_uuid = globals.secCurrentTenantID;
	return newRec;
}
