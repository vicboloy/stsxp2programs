
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17D85BA2-FF21-4F2C-B6CB-DA8F23A36AC8"}
 */
function onActionEnable(event) {
	elements.romacRootPath.enabled = scopes.prefs.lRomacInstalled;
	elements.lRomacImportOnly.enabled = scopes.prefs.lRomacInstalled;
	elements.lRomacPassWorker.enabled = scopes.prefs.lRomacInstalled;
	elements.getRomacRootPath.enabled = scopes.prefs.lRomacInstalled;
	if (event == ""){return}
	scopes.prefs.onDataChangePrefsGeneral(null,null,event,'Prefs');
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA3C31ED-3AF5-4D56-A86D-EB65BC562A0D"}
 */
function onShow(firstShow, event) {
	onActionEnable("");
}
