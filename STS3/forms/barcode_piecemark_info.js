/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4A3FA93-7F61-4EE8-A461-4A81493011C2"}
 */
var labelSource = '';
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FDD2EE60-7C8B-4736-9694-E4D9E8EAF75B"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		globals.setUserFormPermissions(event,false);
		scopes.prefs.screenFull = false;
		labelSource = event.getFormName();
		//if (application.isInDeveloper()){application.output('RM setting labelSource Form')}
	}
	var formName = event.getFormName();
	//var formPrefix = formName.split("_")[0];
	//var formCriteria = formPrefix+"idlabel";
	var formNameTable = formName+'_table';
	scopes.jobs.removeFormHist(formNameTable);
	forms[formName].elements.tabless.addTab(formNameTable);
	//scopes.jobs.tablePrefsLoad(null);// table is built in barcode_idlabel, barcode_piecemark_info, onGetInformation
	return _super.onShow(firstShow, event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B057EF49-C6A1-4AC8-8355-BDBD2BE5B4D2"}
 * @AllowToRunInFind
 */
function onHide(event) {
	versionForm = globals.getInstanceForm(event);
	var formName = event.getFormName();
	if (formName.search('raw') != -1){
		var parentForm = 'barcode_id_raw';
	} else if (formName.search('barcode') != -1){
		parentForm = 'barcode_idlabel';
	}
	var newFormName = parentForm+versionForm;
	if (forms[newFormName]){
		forms[newFormName].elements.btn_PrintSelected.enabled = true;
		forms[newFormName].elements.btn_Clear.enabled = true;
	}
	return _super.onHide(event)
}
