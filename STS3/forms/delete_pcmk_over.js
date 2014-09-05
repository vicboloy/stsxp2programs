
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"442BD1C3-C61C-439C-9E4C-A26A0055244C"}
 */
function onShow(firstShow, event) {
	controller.loadRecords();
	return _super.onShow(firstShow, event)
}
