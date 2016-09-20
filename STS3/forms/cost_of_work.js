/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"652E2398-0997-4E06-92F1-97C211AA45E1"}
 */
var jobNumber = "";
/**
 * @properties={typeid:35,uuid:"3D5D7207-3AC0-48ED-818B-2A95A4A38686",variableType:-4}
 */
var jobChangeE = false;
/**
 * @properties={typeid:35,uuid:"31450D18-58FE-4F98-8202-3362F9C775D7",variableType:-4}
 */
var jobchangeM = false;
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
 * Cust Code to dollar value, indexed by cow code in piecemarks.cow_code_name to number
 * @properties={typeid:35,uuid:"7A62529E-8223-4749-8D36-6D309D6E32F4",variableType:-4}
 */
var aCostwCode = [];
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
	var tabCount = elements.tabless.getMaxTabIndex();
	for (var index = 1;index <= tabCount;index++){
		var tabFormName = elements.tabless.getTabFormNameAt(index);
		if (forms[tabFormName].onActionClose){forms[tabFormName].onActionClose(event)}
	}

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


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0F3DDD6-9707-4057-9E29-7CFD2E51B3D4"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow){
		var maxTabs = elements.tabless.getMaxTabIndex();
		var searchTrm = new RegExp(/(missing)|(existing)/i);
		for (var index = 1;index <= maxTabs;index++){
			var tabName = elements.tabless.getTabFormNameAt(index);
			if (tabName && tabName.search(searchTrm) != -1){
				elements.tabless.setTabEnabledAt(index,false);
			}
		}
	}
	return _super.onShow(firstShow, event)
}
