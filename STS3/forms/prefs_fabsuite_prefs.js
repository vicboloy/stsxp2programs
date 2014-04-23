
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC48C4DA-1691-4F14-9A7D-1AE283AA5FFE"}
 */
function onActionEnable(event) {
	elements.fabsuiteRootPath.enabled = scopes.prefs.lFabsuiteInstalled;
	elements.fabsuiteDatabase.enabled = scopes.prefs.lFabsuiteInstalled;
	elements.fabsuitepassword.enabled = scopes.prefs.lFabsuiteInstalled;
	elements.fabsuiteServerName.enabled = scopes.prefs.lFabsuiteInstalled;
	elements.fabsuiteUserid.enabled = scopes.prefs.lFabsuiteInstalled;
	elements.lFabsuiteImportOnly.enabled = scopes.prefs.lFabsuiteInstalled;
	elements.lFabsuiteSqlVersion.enabled = scopes.prefs.lFabsuiteInstalled;
}
