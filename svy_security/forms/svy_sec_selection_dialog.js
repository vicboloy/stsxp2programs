/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D6DD46AB-CCF1-4015-87B1-7D60C95607F1"}
 */
var buttonClicked = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"86E2FE2E-F857-4D82-B4E3-6467E1FF93DA"}
 */
var searchArgument = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2674550A-3EB1-4F2F-A071-B0B72B4D934E"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	buttonClicked = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C53D39C-D9CC-49FF-B59C-7D2CE4509A49"}
 */
function onCancel(event) {
	buttonClicked = 'cancel';
	globals.svy_nav_closeForm(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0054B5A-D704-46B7-AD5E-6780899C2734"}
 */
function onSelect(event) {
	buttonClicked = 'select';
	globals.svy_nav_closeForm(event);
}
