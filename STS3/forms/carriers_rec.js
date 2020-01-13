/**
 * @properties={typeid:35,uuid:"332FE402-4622-4F72-9188-55118DE52E0A",variableType:-4}
 */
var addressRec = null;
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
	var idx = forms['carriers_lst'+instance].foundset.newRecord();
	/** @type {JSFoundSet<db:/stsservoy/carrier>} */
	var rec = forms['carriers_lst'+instance].foundset.getRecord(idx);
	/** @type {JSFoundSet<db:/stsservoy/addresses>} */
	var addressFS = databaseManager.getFoundSet('db:/stsservoy/addresses');
	var addIdx = addressFS.newRecord();
	addressRec = addressFS.getRecord(addIdx);
	addressRec.tenant_uuid = globals.session.tenant_uuid;
	addressRec.address_type = i18n.getI18NMessage('sts.txt.carrier.shipper').toUpperCase();
	addressRec.edit_date = new Date();
	rec.carrier_address_uuid = addressRec.address_id;
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
	if (application.isInDeveloper()){application.output(event.getFormName()+' parent is '+globals.formParent(event))}
	/** var carriersDivider = globals.carriersDividerLocation;
	if (carriersDivider == 0.0){
		forms.carriers.elements.split.dividerLocation = 317.0;
	} */
}
