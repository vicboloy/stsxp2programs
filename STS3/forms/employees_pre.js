/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A2C35F3A-4320-4226-9262-1EC9EC09B149",variableType:8}
 */
var currentIndex = 1;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6BFCC577-371D-4B8B-B1B8-39454A6F8BE9"}
 */
function onShow(firstShow, event) {
	foundset.sts_employee_container;
	foundset.loadAllRecords();
	var newFS = foundset.duplicateFoundSet();
	controller.loadRecords(newFS);
}
