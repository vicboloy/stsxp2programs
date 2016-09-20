
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97502051-1127-4175-A3E6-52F200147563"}
 */
function onActionCoverSheet(event) {
	// Intercept button clicks for buttons under Cover Sheet
}
/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 *
 * @properties={typeid:24,uuid:"BD554DD1-55D2-4FE0-8A9F-3475871864DD"}
 */
function onActionEdit(event,editing){
	controller.readOnly = !editing;	
	elements.editMessage.visible = editing;
}