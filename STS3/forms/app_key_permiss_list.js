
/** *
 * @param event
 * @param location
 * @param changeSelection
 * @param transactional
 *
 *
 * @properties={typeid:24,uuid:"453B141B-0364-4C02-965F-AD288007EC60"}
 */
function newRecord(event, location, changeSelection, transactional) {
	forms.app_permiss_detail.controller.loadRecords(foundset);
	///forms.app_permiss_detail.newRecord(event,location,changeSelection, transactional);
	forms.app_permiss_detail.showDialog(event);
}

/** *
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"F731CD85-5019-4392-A98B-A3D0EC46B9CE"}
 */
function startEditing(event) {
	forms.app_permiss_detail.controller.loadRecords(foundset);
	forms.app_permiss_detail.showDialog(event);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"62A39563-B392-4E1D-B920-C8E3F51133D5"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
