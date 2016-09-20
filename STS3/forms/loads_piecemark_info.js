/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0207D782-DDD5-4021-9D62-F62169C498A8"}
 */
var versionForm = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8DD2E625-C8F3-4348-83C5-544283E4717A"}
 */
var baseForm = "";
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7AFD5A0-2C28-41AA-83F6-129766ADC149"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		versionForm = globals.getInstanceForm(event);
		baseForm = event.getFormName().replace(versionForm,'');
	}
	return _super.onShow(firstShow, event)
}
