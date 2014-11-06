
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DDB299FC-B22B-4363-897B-9AA470816369"}
 * @AllowToRunInFind
 */
function onShowLog(firstShow, event) {
	controller.loadAllRecords();
	controller.sort('transaction_date desc');
}
