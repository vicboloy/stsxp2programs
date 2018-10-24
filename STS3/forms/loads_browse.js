
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DBCAA96E-A13B-49F3-9DB9-BC2B9572A5F3"}
 */
function onShow(firstShow, event) {
	var versionForm = scopes.jobs.versionForm;
	var formPrefix = event.getFormName().split("_")[0];
	formPrefix = 'loads_browse';
	var formNameTable = formPrefix+'_table';
	var formStatus = formPrefix+'_stats_table';
	//var formOverview = formPrefix+'_over';
	//var formCriteria = formPrefix+'_criteria';
	scopes.jobs.removeFormHist(formNameTable);
	//var success = history.removeForm(formNameTable);
	//var success2 = solutionModel.removeForm(formNameTable);
	//forms[formCriteria].collectCriteria(formCombo);
	var origFormName = formPrefix+'_pcmk_transaction';
	var rightFormName = origFormName+versionForm;
	if (!forms[rightFormName]){
		solutionModel.cloneForm(rightFormName,solutionModel.getForm(origFormName));
	}
	//application.output('REMOVE '+rightFormName);
	forms[formPrefix].elements.split.setRightForm(rightFormName,'sts_idfile_to_transactions');
	var top = forms[formPrefix].elements.split.getRightForm().controller.getName();
	var bot = forms[formPrefix].elements.split.getLeftForm().controller.getName();
	//forms[formCombo].elements.tabless.addTab(formNameTable);
	scopes.jobs.tablePrefsLoad(top);
	scopes.jobs.tablePrefsLoad(bot);
	return _super.onShow(firstShow, event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3A38C10B-3502-4524-94DE-D11A2017E1C7"}
 */
function onHide(event) {
	//var instance = scopes.globals.getInstanceForm(event);
	///form['loads_criteria'+instance].elements['btn_Browse'].enabled = true;
	return _super.onHide(event)
}
