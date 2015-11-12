
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39452C4A-A572-4299-A82E-E3F10C84731B"}
 */
function onShow(firstShow, event) {
	scopes.prefs.getLocalPrinters();
	scopes.prefs.getBTLabelFormats();
}
