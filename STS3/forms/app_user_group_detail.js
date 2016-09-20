/** *
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"1B460724-30AD-44C9-B150-AA0E16562564"}
 */
function updateUI(event) {
	controller.readOnly = foundset.getSize() == 0;
	return _super.updateUI(event);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"559025E1-0811-405F-A8C9-4BAC6AE698EB"}
 */
function onShow(firstShow, event) {
	//foundset.loadAllRecords();
	return _super.onShow(firstShow, event)
}
