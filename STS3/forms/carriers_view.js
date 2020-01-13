
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DE56A4C-895E-49F7-9708-4DE97E2C70E8"}
 */
function onShow(firstShow, event) {
	foundset.sts_carrier_container_view;
	foundset.loadAllRecords();
	var newFS = foundset.duplicateFoundSet();
	controller.loadRecords(newFS);
	globals.makeFormReadOnly(event,event.getFormName(),'');
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"791BFA8F-EA10-4F0E-B019-932114FE0927"}
 */
function onHide(event) {
	globals.stopWindowTrackEvent(event);
	return true
}
