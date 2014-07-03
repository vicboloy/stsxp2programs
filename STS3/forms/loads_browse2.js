/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"15F3702A-AA2E-40FD-9C0D-F661E2829106"}
 */
function onShow(firstShow, event) {
	var window = controller.getWindow();
	var height = window.getHeight();
	window.setLocation(0, 0);
	window.setSize(application.getScreenWidth(),height);
	return _super.onShow(firstShow, event)
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63F7E439-74CD-4D0C-B390-177D161770D0"}
 */
function onActionHide(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
