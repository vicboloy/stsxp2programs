

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1A919AE1-4409-44ED-92C2-613A21580D4E"}
 */
function onActionSelectTenant(event) {
	application.output('unstored'+unstored+' index '+controller.getSelectedIndex());
	var fs = controller.getMaxRecordIndex();
	var selectionTenantArray = [];
	for (var index = 1;index <= fs;index++){
		controller.setSelectedIndex(index);
		selectionTenantArray.push(company_name+' '+unstored);
	}
	//globals.selectedTenants = '';
	application.output('count'+fs+' '+selectionTenantArray);
	//application.setValueListItems('stsvl_selected_item_list',selectionTenantArray);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"29B3273F-8C67-454B-87FF-56B71BBD2640"}
 */
function onShow(firstShow, event) {
	return _super.onShow(firstShow, event)
}
