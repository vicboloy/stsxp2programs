/**
 * @properties={typeid:24,uuid:"C53979B3-7CAF-4472-B6B8-865E64B159E4"}
 */
function mainWindowFront(){
	var windowx = application.getWindow();
	if (windowx != null){
		windowx.toFront();
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA29E187-8F22-43AD-B141-BE6934214905"}
 */
function addCarrierRecord(event) {
	var instance = globals.getInstanceForm(event);
	forms['carriers_lst'+instance].controller.newRecord();
	forms['carrier_info'+instance].onEditCarrier(event,true);
	forms['carrier_info'+instance].elements.carrier_number.requestFocus();
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
	if (firstShow){
		globals.setUserFormPermissions(event,false);
	}
	/** var carriersDivider = globals.carriersDividerLocation;
	if (carriersDivider == 0.0){
		forms.carriers.elements.split.dividerLocation = 317.0;
	} */
}
