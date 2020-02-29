
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6589130-F3D7-4212-B71A-1A595C2F6D09"}
 */
function onShow(firstShow, event) {
	var returnMsg = _super.onShow(firstShow, event)
	globals.setUserFormPermissions(event,false);
	return returnMsg;
}
