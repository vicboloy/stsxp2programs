
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D6141D0-3298-4D11-9211-D6536912D19D"}
 */
function onShow(firstShow, event) {
	elements.split.dividerLocation = 0.75;
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37F5FBBB-4F5A-4F3C-A488-A0EF4FAB6668"}
 */
function onActionBrowseExit(event) {
	var win = application.getActiveWindow();
	win.destroy();
	// TODO Auto-generated method stub
}
