
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8F6E0604-5FC9-4148-A918-08CDE12AC6A2"}
 */
function onDataChangeCOW(oldValue, newValue, event) {
	if (forms.cost_of_work.cowCodes.length == 0){
		//get new cowcodes
	}
	return true
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"044309D4-FEF3-43E8-885F-4FDACEE61BF4"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		var version = globals.getInstanceForm(event);
		var formName = event.getFormName();
		formName = formName.replace(version,'');
		scopes.jobs.tablePrefsLoad(formName);
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"382E543C-368B-4A2D-987E-B6AB1F20B195"}
 */
function onRecordSelection(event) {
	var sel = foundset.getSelectedIndexes();
	if (sel){
		forms.cost_of_work_missing.elements.btn_MultiSelect.enabled = (sel.length > 1);
	}
}
