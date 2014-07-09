/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2FAF1A6C-CC6A-40DB-9C3A-D9FA9C9CCD96"}
 */
var mappingType = "";

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA130BDD-7A7A-4595-A0AE-6872CA354E02"}
 */
function onShow(firstShow, event) {
	databaseManager.setAutoSave(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D26E5E5-ABEE-4388-94B6-FF4CA6B2ED3B"}
 */
function onActionHide(event) {
	scopes.globals.mainWindowFront();
	scopes.globals.stopWindowTrack();
}
