
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"894C70EE-A699-4A5C-BE53-3AA560BDD9A8"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	permissionForm = 'app_keys';
	return _super.onShow(firstShow, event)
}
