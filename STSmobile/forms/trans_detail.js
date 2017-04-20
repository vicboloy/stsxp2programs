
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87050456-1953-4F21-999C-C5202E60098F"}
 */
function onActionClose(event) {
	//forms.rf_mobile_view.elements.tablessHistory.setTabEnabledAt(1,true);
	//forms.rf_mobile_view.elements.tablessHistory.setTabEnabledAt(2,true);
	forms.rf_mobile_view.elements.tablessHistory.tabIndex = 1;
	return true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"425867EF-E4EB-4E1E-B092-D8AEA4F53963"}
 */
function onShow(firstShow, event) {
}
