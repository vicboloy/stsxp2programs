/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"652E2398-0997-4E06-92F1-97C211AA45E1"}
 */
var jobNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D8AD9937-A3EA-4406-9138-22A37389F9F8"}
 */
var jobID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4A7AB9AA-42C7-4AE1-9F33-56644D36AEFD"}
 */
var customerNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"477B2270-0C5C-4AC8-A828-276EFD7E57F5"}
 */
var customerName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"88C4E157-49E0-45AC-99ED-EEB512A9AAA1"}
 */
var customerID = "";
/**
 * @properties={typeid:35,uuid:"06C34116-9333-47C7-8BC2-D7937CAC6013",variableType:-4}
 */
var cowCodes = [];


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A0686BA-33BF-4794-BB5D-7945C21A6807"}
 */
function onActionClose(event) {
	forms.cost_of_work_category.clearForm();
	forms.cost_of_work_category.editStatus(false);
	//forms.cost_of_work_category.controller.readOnly = true;
	forms.cost_of_work_category.elements.jobNumberEntry.enabled = true;

	globals.stopWindowTrack();
	globals.mainWindowFront();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0C8E248C-5C45-4D9F-8A25-00233B2FA859"}
 */
function onHide(event) {
	foundset.removeFoundSetFilterParam('job_cowxref');
	return _super.onHide(event)
}
