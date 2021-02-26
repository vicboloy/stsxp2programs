
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC48C4DA-1691-4F14-9A7D-1AE283AA5FFE"}
 */
function onActionEnable(event) {
	var fabsuiteEnabled = scopes.prefs.lFabsuiteInstalled == 1;
	elements.fabsuiteRootPath.enabled = fabsuiteEnabled;
	elements.fabsuiteDatabase.enabled = fabsuiteEnabled && scopes.prefs.lFabsuiteSqlVersion == 1;
	elements.fabsuitepassword.enabled = fabsuiteEnabled && scopes.prefs.lFabsuiteSqlVersion == 1;
	elements.fabsuiteServerName.enabled = fabsuiteEnabled && scopes.prefs.lFabsuiteSqlVersion == 1;
	elements.fabsuiteUserid.enabled = fabsuiteEnabled && scopes.prefs.lFabsuiteSqlVersion == 1;
	elements.lFabsuiteImportOnly.enabled = fabsuiteEnabled;
	elements.lFabsuiteSqlVersion.enabled = fabsuiteEnabled;
	elements.lFabsuitePassWorker.enabled = fabsuiteEnabled;
	elements.lFsLocnBatch.enabled = fabsuiteEnabled;
	elements.lFsAllowNonSerial.enabled = fabsuiteEnabled;
	elements.getFabsuiteRootPath.enabled = fabsuiteEnabled;
	elements.lFsPrintIDFromCutList.enabled = fabsuiteEnabled;
	elements.lFsFlipPrimSecWhenShop.enabled = (fabsuiteEnabled && scopes.prefs.promptFabShop == 1);
	
	if (!event){return}
	scopes.prefs.onDataChangePrefsGeneral(null,null,event,'Prefs');
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7EB6AD38-6529-444D-BA79-ED9C327B3FB4"}
 */
function onShow(firstShow, event) {
	onActionEnable(null);
	scopes.jobs.formPermissions(event,false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3FB93242-8CDD-4EA6-976B-02AB7F207559"}
 */
function onAction(event) {
	onActionEnable(null);
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"904CEC10-60CB-4EBB-8922-289F384DF5C0"}
 */
function onDataChangeFlipLocs(oldValue, newValue, event) {
	elements.lFsNoPushSecLoc.enabled = (newValue == 1);
	scopes.prefs.onDataChangePrefsGeneral(oldValue,newValue,event,null);
	if (newValue == 0){
		scopes.prefs.lFsNoPushSecLoc = 0;
	}
	return true
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"568A9818-F4BE-4616-96A0-70475A110BEA"}
 */
function onActionVerifyEPM(event) {
	var status = scopes.fs.checkComFabsuite(event)
	scopes.jobs.warningsX(event);
	application.output('status: '+status);
	if (status != ''){
		globals.errorDialogMobile(event,'1170',null,status);
	} else {
		status = 'V'+scopes.fs.getVersion(event);
		globals.errorDialogMobile(event,'1214','info',status);
		scopes.fs.fsGetJobList(event);
	}
}
