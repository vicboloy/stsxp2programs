/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1361C603-528D-41B1-94D5-FC05CDF8D501"}
 */
var fullUserName = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"924D47AD-4248-4F40-84D2-78D2E9B7CDEF"}
 */
function onActionActivate(event) {
	var instance = scopes.globals.getInstanceForm(event);
	var rec = forms['employee_login_lst'+instance].foundset.getSelectedRecord();
	if (!rec){return}
	rec.is_account_active = true;
	databaseManager.saveData(rec);
	elements.btn_Deactivate.enabled = true;
	elements.btn_Activate.enabled = false;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"05E5C418-FF08-4D8E-A6E3-9B57C6E7B3F3"}
 */
function onActionDeactivate(event) {
	var instance = scopes.globals.getInstanceForm(event);
	var rec = forms['employee_login_lst'+instance].foundset.getSelectedRecord();
	if (!rec){return}
	rec.is_account_active = true;
	if (!rec){return}
	rec.is_account_active = false;
	databaseManager.saveData(rec);
	elements.btn_Deactivate.enabled = false;
	elements.btn_Activate.enabled = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"234A6732-FD00-415B-8C83-DE75298673FA"}
 */
function onActionDisableAllLogins(event) {
	var instance = scopes.globals.getInstanceForm(event);
	var fs = forms['employee_login_lst'+instance].foundset;
	if (!fs){return}
	var disableAll = databaseManager.getFoundSetUpdater(fs);
	disableAll.setColumn('is_account_active',false);
	disableAll.performUpdate();
	elements.btn_Deactivate.enabled = false;
	elements.btn_Activate.enabled = true;
}
