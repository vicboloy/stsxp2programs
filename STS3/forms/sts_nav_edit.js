
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A2CACF3D-BA2C-4561-8F03-AD20DD6387F4"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event);
	return _super.onShow(firstShow, event)
}
