/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B5CEB37-700B-4C6B-B9C6-F32EDC27BE37"}
 */
function addCustomerRecord(event) {
	controller.newRecord();
	foundset.loadAllRecords();
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"45E6DEE1-E4D1-45B7-A3F8-1BC20E53ED2E"}
 */
function onShow(firstShow, event) {
	scopes.jobs.formPermissions(event,false);
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B98F39D-4597-4DF7-ACF3-D770A5D03EDF"}
 */
function onLoad(event) {
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A02FC23A-F21A-4A30-95FA-AC497B6153F8"}
 */
function onRecordSelection(event) {
	var instance = scopes.globals.getInstanceForm(event);
	var rec = foundset.getSelectedRecord();
	if (!rec){return}
	var empId = rec.employee_id;//forms.employees.foundset.loadRecords()
	databaseManager.revertEditedRecords(forms['employees'+instance].foundset);//20180720 error showing changed foundset, this cleared error
	if (empId){
		forms['employees'+instance].foundset.loadRecords(application.getUUID(empId));//
	}
	null;
}
