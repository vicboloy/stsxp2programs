
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"41C6029A-BC29-4525-B403-ACA73D655FD8"}
 */
function onHide(event) {
	globals.setWindowClosed("");
	return _super.onHide(event)
}



/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECB24AB3-5DAE-46D2-9E35-7361D5FFE6BE"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
