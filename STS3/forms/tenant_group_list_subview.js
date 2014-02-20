
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FFC8D8A1-8E13-49CB-9A5A-D857F53F6986"}
 */
function onShow(firstShow, event) {
	/** @type {JSFounset<db:/stsservoy/associations>} */
	sec_master_associations.loadRecords();
	return _super.onShow(firstShow, event)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7586B5C2-52D3-4E7D-AA6B-8CCF54874B15"}
 */
function onRecordSelection(event) {
	globals.secCurrentAssociationID = association_uuid;
	globals.secCurrentAssociationName = association_name;
	//sec_tenant_to_associations.loadRecords();
	forms.tenant_list.setTenantCheck();
	return _super.onRecordSelection(event)
}

