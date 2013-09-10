/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA29E187-8F22-43AD-B141-BE6934214905"}
 */
function addCarrierRecord(event) {
	var newCarrier = forms.carriers_lst.controller.newRecord();
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
		forms.carriers.elements.split.dividerLocation = 317.0;
	}
}
