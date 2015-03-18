
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F710F1F7-49B7-48AD-900E-6F225D3DAD1C"}
 */
function onActionTempNewUser(event) {
	application.output("onActionTempNewUser user_management "+globals.secCurrentTenantID);
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6019A443-F0FC-425F-B29D-03FBE67C6345"}
 */
function onHide(event) {
	globals.setWindowClosed();
	return _super.onHide(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AA944071-CA23-4099-8DF6-19DD86CEF6C7"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"23C234C1-325A-4265-A4D4-AD643F6284DA"}
 */
function onActionEdit(event) {
	elements.editButton.enabled = false;
	elements.saveButton.enabled = true;
	_super.startEditing(event);
}
