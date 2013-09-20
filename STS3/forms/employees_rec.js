
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E76A0C5-1857-4089-8E25-97D995FC0B4A"}
 */
function onActionAdd(event) {
	forms.employees_lst.controller.newRecord();
	forms.employee_specs.onEdit(event,true);
}
