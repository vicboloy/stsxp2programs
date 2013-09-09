/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A030A8E-D2AA-4965-9650-2C5465BDF161"}
 */
function delCarrierRecord(event) {
	//var success = forms.carriers_lst.controller.deleteRecord();
	// TODO confirmation Delete
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA29E187-8F22-43AD-B141-BE6934214905"}
 */
function addCarrierRecord(event) {
	var newCarrier = forms.carriers_lst.controller.newRecord();
	var newAddy = sts_carrier_to_address.newRecord;
	newCarrier.carrier_address = newAddy.address_id;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA37CF27-B7CE-44F2-BC8E-9A49E8285114"}
 */
function onShow(firstShow, event) {
	var carriersDivider = globals.carriersDividerLocation;
	if (carriersDivider == 0.0){
		forms.carriers.elements.tabs.dividerLocation = 317.0;
	}
}
