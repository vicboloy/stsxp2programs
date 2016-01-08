
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"112F7418-7209-41CE-9A6C-06D5C540D45D"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event);
	return _super.onShow(firstShow, event)
}
