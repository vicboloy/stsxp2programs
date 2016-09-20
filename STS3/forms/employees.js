/**
 * @properties={typeid:35,uuid:"D7F2AC4F-B13B-4D37-8678-75C421B7AE0C",variableType:-4}
 */
var editEmployeeFlag = false;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6F28D92-40D4-4CE3-8583-A89421109813"}
 */
function onLoadCreateRecord(event) {
	var count = databaseManager.getTableCount(sts_employee_container);
	if (count == 0){
		controller.newRecord();
		tenant_uuid = globals.session.tenant_uuid;
	}
	if (globals.employeesDividerLocation == 0.0) {
		elements.tabs.dividerLocation = 250.0;
	}
	
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B1A1C77F-17CF-443D-B809-46E96695E39F"}
 */
function onTabChange(previousIndex, event) {
	globals.employeesDividerLocation = elements.tabs.dividerLocation;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"ED2A7507-650C-4E32-B610-5214AF60E105"}
 */
function onLoadEmployees(event) {
	//foundset.loadAllRecords();
	controller.readOnly = true;
	if (globals.employeesDividerLocation == 0.0) {
		elements.tabs.dividerLocation = 270.0;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"151F799C-77E1-43B7-AD95-3ED15DA80091"}
 */
function onShow(firstShow, event) {
	//if (firstShow){foundset.loadAllRecords();}
	onLoadCreateRecord(event);
	globals.setUserFormPermissions(event);
	
}
/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"B7EDE72A-F320-4CF0-98E6-C45DD801847B"}
 */
function onActionAddRecord(event) {
	///var formRev = scopes.globals.getInstanceForm(event);
	controller.newRecord();
	tenant_uuid = globals.session.tenant_uuid;
	onEdit(event,true);
	application.updateUI();
}
