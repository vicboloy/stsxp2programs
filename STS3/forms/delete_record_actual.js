
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
	var form = event.getFormName();
	
	var win = application.getActiveWindow();
	//application.output(form+' '+win.getName());
	//win = application.getWindow(win.getName());
	//forms.delete_record_actual.controller.getWindow().hide();
	//forms[form].elements.tabs.removeAllTabs();
	win.hide();
	//win.destroy();
	//scopes.jobs.removeFormHist('delete_pcmk_combo_table');
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
	var formNameTable = 'delete_pcmk_combo_table';
	scopes.jobs.removeFormHist(formNameTable);
	//var success = history.removeForm(formNameTable);
	//var success2 = solutionModel.removeForm(formNameTable);
	forms.delete_criteria.collectCriteria('delete_pcmk_combo');
	forms.delete_pcmk_combo.elements.split.setRightForm('delete_pcmk_transaction','sts_idfile_to_transactions');
	var top = forms.delete_pcmk_combo.elements.split.getRightForm().controller.getName();
	var bot = forms.delete_pcmk_combo.elements.split.getLeftForm().controller.getName();
	forms.delete_pcmk_over.elements.tabless.addTab(formNameTable);
	scopes.jobs.loadTablePrefs(top);
	scopes.jobs.loadTablePrefs(bot);
}
