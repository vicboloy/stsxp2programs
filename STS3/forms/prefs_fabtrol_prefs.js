
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"868AFB1F-A0DB-4410-B3A3-1B25578AD0CE"}
 */
function onActionEnable(event) {
	
	elements.fabtrolDatabase.enabled = scopes.prefs.lFabtrolSqlVersion;
	elements.fabtrolPassword.enabled = scopes.prefs.lFabtrolSqlVersion;
	elements.fabtrolRootPath.enabled = scopes.prefs.lFabtrolInstalled;
	elements.fabtrolServerName.enabled = scopes.prefs.lFabtrolSqlVersion;
	elements.fabtrolUserid.enabled = scopes.prefs.lFabtrolSqlVersion;
	elements.ftFabtrolOdbc.enabled = scopes.prefs.lFabtrolMrp;
	elements.ftMatchType.enabled = scopes.prefs.lFabtrolInstalled;
	elements.ftProjectOdbc.enabled = scopes.prefs.lFabtrolMrp;
	elements.ftSystemOdbc.enabled = scopes.prefs.lFabtrolMrp;
	elements.ftUnitOdbc.enabled = scopes.prefs.lFabtrolMrp;
	elements.lFabtrolImportOnly.enabled = scopes.prefs.lFabtrolInstalled;
	elements.lFabtrolMrp.enabled = scopes.prefs.lFabtrolInstalled;
	elements.lFabtrolSeqTesting.enabled = scopes.prefs.lFabtrolInstalled;
	elements.lFabtrolSqlVersion.enabled = scopes.prefs.lFabtrolInstalled;
	elements.lFabtrolShip.enabled = scopes.prefs.lFabtrolInstalled;
}
