
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10E18E11-E1F6-4D5D-8FEC-F6AF8ADAC194"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event);
	return _super.onShow(firstShow, event)
}
