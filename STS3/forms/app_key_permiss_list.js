
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
	forms.app_permiss_detail.newRecord(event,location,changeSelection, transactional);
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