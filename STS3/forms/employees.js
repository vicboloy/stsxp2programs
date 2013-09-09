/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6F28D92-40D4-4CE3-8583-A89421109813"}
 */
function onLoadCreateRecord(event) {
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord()
	}
	if (globals.employeesDividerLocation == 0.0) {
		elements.tabs.dividerLocation = 333.0;
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
