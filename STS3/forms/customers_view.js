
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F16830D-56B9-4F5D-A2BF-05CFB953BD34"}
 */
function onShow(firstShow, event) {
	globals.makeFormReadOnly(event,event.getFormName(),'');
}
