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
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"9BB07BFE-2A7E-4FF1-B4B8-CB45896D9AE7"}
 */
function onRecordSelection(event) {
	null;
	application.output('select form name '+event.getFormName());
	var index = forms[event.getFormName()].controller.getSelectedIndex();
	var rec = forms[event.getFormName()];
	//var fs = databaseManager.getFoundSetCount('sts_piecemarks');
	//fs.sts_piecemark.loadRecords();
	//var fs = rec.piecemark_id.rr;
	application.output('record selectxx '+rec.id_serial_number);
	//application.output('barcode id '+id_serial_number_id);
	return _super.onRecordSelection(event)
}
