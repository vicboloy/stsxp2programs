
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
