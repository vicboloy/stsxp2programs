
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E76A0C5-1857-4089-8E25-97D995FC0B4A"}
 */
function onActionAdd(event) {
	var formRev = scopes.globals.getInstanceForm(event);
	controller.newRecord();
	tenant_uuid = globals.session.tenant_uuid;
	application.updateUI();
	forms["employee_specs"+formRev].onEdit(event,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F7DC238-3B8B-4803-AA21-E9786FD009B1"}
 */
function onActionRefresh(event) {
	foundset.loadAllRecords();
}
