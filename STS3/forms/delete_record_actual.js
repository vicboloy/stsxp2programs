
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BE8F0471-C806-499B-8D2E-177695E7B4C8"}
 */
function onActionClose(event) {
	//return;
	// just close the window to return to base selection, execute a clear on remaining window
	///var form = event.getFormName();
	if (application.isInDeveloper()){application.output('hide window '+event.getFormName())}
	var win = forms[event.getFormName()].controller.getWindow();
	//var win = application.getActiveWindow();
	//application.output(form+' '+win.getName());
	//win = application.getWindow(win.getName());
	//forms.delete_record_actual.controller.getWindow().hide();
	//forms[form].elements.tabs.removeAllTabs();
	win.hide();
	//win.destroy();
	//scopes.jobs.removeFormHist('delete_pcmk_combo_table');
	//scopes.jobs.warningsX();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10165E5B-19D4-4AEB-A67A-45FA10277C2B"}
 */
function onShow(firstShow, event) {
	//scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.collecting.info'),true);

	var formPrefix = event.getFormName().split("_")[0];
	var formNameTable = formPrefix+'_pcmk_combo_table';
	var formCombo = formPrefix+'_pcmk_combo';
	var formOverview = formPrefix+'_pcmk_over';
	var formCriteria = formPrefix+'_criteria';
	scopes.jobs.removeFormHist(formNameTable);
	//var success = history.removeForm(formNameTable);
	//var success2 = solutionModel.removeForm(formNameTable);
	//forms[formCriteria].collectCriteria(formCombo);
	scopes.jobs.viewBTableToFormQB(event,forms[formCriteria].collectCriteria(formCombo),formCombo);
	//scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.collecting.info'),true);

	forms[formCombo].elements.split.setRightForm(formPrefix+'_pcmk_transaction','sts_idfile_to_transactions');
//	scopes.jobs.hideEmptyColumns(event,1);
	var rightForm = forms[formCombo].elements.split.getRightForm();
	var leftForm = forms[formCombo].elements.split.getLeftForm();
	if (rightForm){
		var bot = forms[formCombo].elements.split.getRightForm().controller.getName();
	}
	if (leftForm){
		var top = forms[formCombo].elements.split.getLeftForm().controller.getName();
	}
	forms[formOverview].elements.tabless.addTab(formNameTable);
	if (top){scopes.jobs.tablePrefsLoad(top)}
	if (bot){scopes.jobs.tablePrefsLoad(bot)}
	scopes.jobs.warningsX();
}
/**
 * @param event
 * @properties={typeid:24,uuid:"0257FA0B-56ED-464D-BF0F-D9A274E25857"}
 */
function collectAndBrowse(event){
	var brDS = scopes.jobs.queryAssemblyFaster(criteria,null,'browse');
	openBrowseTable(event,collectCriteria());
}
/**
 * @param event
 * @param criteria
 *
 * @properties={typeid:24,uuid:"4D6010F5-DFFA-4D60-8E67-C95622363BF9"}
 */
function openBrowseTable(event,criteria){
	var formName = 'loads_pcmk_combo'+versionForm;
	scopes.jobs.viewBTableToFormQB(event,criteria,formName);
	onActionShowWindow();
}
