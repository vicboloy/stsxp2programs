
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"941E2E7E-C075-422E-A9EE-DE483236BCF4"}
 */
function onShow(firstShow, event) {
	//foundset.loadAllRecords();
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF6CC4E9-735D-445F-BD17-8B4AB1C8A102"}
 */
function onActionDupe(event) {
	var currentRec = foundset.getSelectedRecord();
	application.output('current '+currentRec);
}
