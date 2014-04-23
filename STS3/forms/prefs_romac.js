
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
}
