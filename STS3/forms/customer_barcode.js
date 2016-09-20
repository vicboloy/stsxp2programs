/**
 * Perform the element default action.
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3DFB0DE-C8E8-46A0-B6E0-D4D0402AAC01"}
 * @AllowToRunInFind
 */
function onActionStartingPosition(oldValue,newValue,event) {
		elements.barcode_fixed_length.visible = (newValue.search('Starting') == 0);
}
/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 *
 * @properties={typeid:24,uuid:"7EC0215F-9139-4B31-A08E-BA857FFD8B33"}
 */
function onActionEdit(event,editing){
	controller.readOnly = !editing;
	elements.editMessage.visible = editing;
}