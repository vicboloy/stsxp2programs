
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CCB7506F-F490-4FAE-85A0-9C7EE0A29DA1"}
 * @AllowToRunInFind
 */
function onRecordSelection(event) {
	var instance = scopes.globals.getInstanceForm(event);
	var rec = foundset.getSelectedRecord();
	if (!rec){return}
	var hideAll = (application.getActiveWindow().controller.getName().search('view') != -1);

	var masterUser = (rec && rec.user_name.toUpperCase() == 'P');
	var inEdit = (forms['employee_specs'+instance].elements.btn_Edit.visible == false);
	var form = forms['employee_logins'+instance];
	form.elements.btn_Deactivate.enabled = (!masterUser && inEdit && rec && rec.is_account_active != null && rec.is_account_active);
	form.elements.btn_Activate.enabled = !masterUser && inEdit && rec && !(rec.is_account_active);
	form.elements.btn_DisableAll.enabled = !masterUser && inEdit && rec && true;
	if (hideAll){
		form.elements.btn_Deactivate.visible = false;
		form.elements.btn_Activate.visible = false;
		form.elements.btn_DisableAll.visible = false;
	}
	application.updateUI();
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"87473691-8A67-4C50-AB64-A3226CD4B1E2"}
 */
function onRenderLoginList(event) {
	var rec = event.getRecord();
	var fld = event.getRenderable();
	if (rec && fld && rec[fld.getDataProviderID()] == 1){
		fld.bgcolor = "yellow";
	}
}
