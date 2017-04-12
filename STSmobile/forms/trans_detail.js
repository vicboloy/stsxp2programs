
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87050456-1953-4F21-999C-C5202E60098F"}
 */
function onActionClose(event) {
	if (!application.isInDeveloper()){return}//DISABLE current operation
	var win = application.getWindow('Transaction Detail');
	win.hide();
}
