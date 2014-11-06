
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50C962C1-634B-4610-A8A2-8C2C63849FD5"}
 */
function onActionClose(event) {
	null;
	var win = controller.getWindow();
	//var win = application.getActiveWindow();
	
	win.hide();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86BC1E96-D97A-43EF-8767-63CAC3F08C9A"}
 */
function onShow(firstShow, event) {
	//scopes.globals.onErrorDisplayReturn = new Continuation();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5DA8ABA3-8E21-440F-BB5F-237D1A689CE9"}
 */
function onHide(event) {
	scopes.globals.onErrorDisplayReturn();
	return true
}
