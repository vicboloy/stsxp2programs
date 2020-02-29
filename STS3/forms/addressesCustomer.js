
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2632DFF0-86D4-4C8D-AE75-B637766A798B"}
 */
function onShow(firstShow, event) {
	var returnMsg = _super.onShow(firstShow, event);
	globals.setUserFormPermissions(event,false);
	return returnMsg;
}
