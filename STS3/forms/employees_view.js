/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"075038E5-DB7B-4674-8DE9-D3C65B0BFCCE"}
 */
var controlsForm = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D05ECA71-19BC-441F-B385-89B482CA96BF"}
 */
var formFunc = "View Employees";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6A8DEFBA-5515-436D-B03D-319AB5B96B59",variableType:8}
 */
var currentIndex = 1;
/**
 * @properties={typeid:35,uuid:"F8C22222-634D-4DE2-8A0B-3F9E43D7EC08",variableType:-4}
 */
var saveTheseRecs = [];
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A40B1CA-7179-4EDE-B1E5-4A59240C1517"}
 */
function onShow(firstShow, event) {
	foundset.sts_employee_container;
	foundset.loadAllRecords();
	var newFS = foundset.duplicateFoundSet();
	controller.loadRecords(newFS);
	globals.makeFormReadOnly(event,event.getFormName(),'');
}
