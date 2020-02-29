
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6AF268D-3F1D-44E8-BAFC-C5562B3077DB"}
 */
function onActionEnable(event) {
		elements.validProcess.enabled = scopes.prefs.lPartMasterModule;
		elements.lAutoPartNum.enabled = scopes.prefs.lPartMasterModule;
		elements.pnPadCharacter.enabled = scopes.prefs.lAutoPartNum;
		elements.partNumLength.enabled = scopes.prefs.lAutoPartNum;
		elements.cValidatePartNumber.enabled = scopes.prefs.lPartMasterModule;
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AD6478E1-745B-4E7D-9F61-D125B32A5287"}
 */
function onDataChangeRawIdLength(oldValue, newValue, event) {
	if (newValue < 9 || newValue > 15){
		scopes.prefs.barcodeRawLength = oldValue;
		return true;
	}
	scopes.prefs.onDataChangePrefsGeneral(oldValue,newValue,event,'prefs');
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"00D44A69-18CD-4A7A-8179-17A833C935A7"}
 */
function onShow(firstShow, event) {
	scopes.jobs.formPermissions(event,false);
}
