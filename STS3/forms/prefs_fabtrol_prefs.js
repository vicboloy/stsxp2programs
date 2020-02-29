
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"868AFB1F-A0DB-4410-B3A3-1B25578AD0CE"}
 */
function onActionEnable(event) {
	
	var fabtrolIn = (scopes.prefs.lFabtrolInstalled == 1);
	var fabTrolSqlVerIn = (scopes.prefs.lFabtrolInstalled == 1) && (scopes.prefs.lFabtrolSqlVersion == 1);
	var fabtrolMrpIn = (scopes.prefs.lFabtrolInstalled == 1) && (scopes.prefs.lFabtrolMrp == 1);
	
	
	elements.lFabtrolImportOnly.enabled = fabtrolIn;
	elements.lFabtrolSeqTesting.enabled = fabtrolIn;
	elements.getFabtrolRootPath.enabled = fabtrolIn;
	elements.ftMatchType.enabled = fabtrolIn;
	
	elements.lFabtrolSqlVersion.enabled = fabtrolIn;
	elements.lFabtrolShip.enabled = fabtrolIn;
	elements.ftDoNotMuliplyMinors.enabled = fabtrolIn;
	elements.ftVer2x.enabled = fabtrolIn;
		
	elements.fabtrolDatabase.enabled = fabTrolSqlVerIn;
	elements.fabtrolPassword.enabled = fabTrolSqlVerIn;
	elements.fabtrolUserid.enabled = fabTrolSqlVerIn;
	elements.ftSimpleJobs.enabled = fabTrolSqlVerIn;
	elements.fabtrolServerName.enabled = fabTrolSqlVerIn
	
	elements.lFabtrolMrp.enabled = fabtrolIn;
	elements.ftFabtrolOdbc.enabled = fabtrolMrpIn;
	elements.ftProjectOdbc.enabled = fabtrolMrpIn;
	elements.ftSystemOdbc.enabled = fabtrolMrpIn;
	elements.ftUnitOdbc.enabled = fabtrolMrpIn;
	
	if (event == ""){return}
	scopes.prefs.onDataChangePrefsGeneral(null,null,event,'Prefs');
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BA0E5A22-1F10-460B-9725-0B1E9F69BF50"}
 */
function onShow(firstShow, event) {
	onActionEnable("");
	scopes.jobs.formPermissions(event,false);
}
