
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A785614B-DB14-4162-B492-EBA64064C985"}
 */
function onLoadCreateRecord(event) {
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord()
	}
	if (globals.customersDividerLocation == 0.0) {
		elements.tabs.dividerLocation = 195.0;
	}
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"139836B6-AE07-4E83-8B58-AEEDFAD3A352"}
 */
function onTabChange(previousIndex, event) {
	globals.customersDividerLocation = elements.tabs.dividerLocation;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"782359C0-6519-4B97-B1C4-D2A2D50918EE"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event);
}
