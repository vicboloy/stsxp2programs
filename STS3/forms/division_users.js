
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C05B33D2-8DB3-4F9A-9817-88889B1E20AB"}
 */
function newRecord(event) {
	var newRec = _super.newRecord(event);
	user_name = "";
	tenant_uuid = globals.session.tenant_uuid;
	forms.division_user_detail.startEditing(event);
	elements.btn_New.enabled = false;
	return newRec;
}
