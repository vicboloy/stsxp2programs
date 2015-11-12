/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33AA8696-319E-48B2-99C5-05F400BF1E31"}
 */
function onShow(firstShow, event) {
	//var window = controller.getWindow();
	//var height = window.getHeight();
	//window.setLocation(0, 0);
	//window.setSize(application.getScreenWidth(),height);
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"19CBCA4E-4785-4AF3-B632-95E90BE43E42"}
 */
function onActionHide(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"06E6E42C-CC68-43C0-8292-61EEC7F96F34"}
 */
function onRecordSelection(event) {
	null;
	var index = forms[event.getFormName()].controller.getSelectedIndex();
	var rec = forms[event.getFormName()];
	//var fs = databaseManager.getFoundSetCount('sts_piecemarks');
	//fs.sts_piecemark.loadRecords();
	//var fs = rec.piecemark_id.rr;
	///application.output('record select '+rec.id_serial_number);
	//application.output('barcode id '+id_serial_number_id);
	return _super.onRecordSelection(event)
}
