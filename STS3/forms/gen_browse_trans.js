
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D90AFB1C-613F-4B96-9D4A-0EFA64D6173A"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		scopes.jobs.tablePrefsPreLoad(event.getFormName());
	}
	//foundset.sort('transaction_date desc');
}
