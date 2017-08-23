/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8EEF0D8A-8555-4008-BFD7-05E4D40F44D3",variableType:4}
 */
var viewValidation = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AE9B7FBF-DC3C-4BDC-8C31-60B41DD8C20C",variableType:4}
 */
var importtotal = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3D1AA7EE-D83F-4621-B149-554FF44F7150",variableType:4}
 */
var importRemaining = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B929876A-0679-4886-A084-48F43B62E680",variableType:4}
 */
var importBorders = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"36111792-EC0C-4688-93F2-7DA2633D2698",variableType:4}
 */
var importPcmks = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"54515E2E-A0B1-44B8-8909-6A74C9167539",variableType:4}
 */
var importBoms = 0;
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2BE9EA58-04BD-4BFA-8BE8-941693C9B4C2"}
 */
function onActionClose(event) {
	forms.import_performance_txt.clear();
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"23516DC6-8FAF-420D-B88E-3A0A89B42D02"}
 */
function actionImport(event){
	elements.btn_Import.enabled = false;
	forms.import_performance_txt.getBorderKss(event);
	scopes.jobs.importPerformance(event);
	elements.btn_Import.enabled = false;

}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"788AE06A-ABC0-405C-B7A9-90F33C0CCFA8"}
 */
function onActionClear(event) {
	forms.import_performance_txt.clear();
	forms.import_performance_setting.clear();
	viewValidation = 0;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7824CE98-F1CF-47D6-9C48-EA2A5D85ADB5"}
 */
function onShow(firstShow, event) {
	viewValidation = 0;
	enableTab(event);
	elements.tabs.tabIndex = 0;
}
/**
 * @properties={typeid:24,uuid:"08D77204-F254-4AAD-975B-AAA489ADF6E8"}
 */
function enableTab(event){
	var enable = ((viewValidation & 7) == 7) ? true : false;
			
	elements.tabs.setTabEnabledAt(2,enable);
	elements.btn_Import.enabled = enable;
	if (!enable){elements.tabs.tabIndex = 1}
	if (enable){
		//read all files and create source data arrays
		processPerformance(event);
		forms.import_performance_bom.elements.tabs.tabIndex = 2;
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8E6B72C8-355C-4F9D-8E5C-238FA3379648"}
 */
function processPerformance(event){
	forms.import_performance_txt.getBorderKss(event);
	forms.import_performance_txt.getSpoolInfo(event);
}
/**
 * @param {Number} number
 *
 * @properties={typeid:24,uuid:"566E63C3-0B4F-4459-A08A-5364C546E935"}
 */
function importProgressUpdate(number){
	var progress = forms.import_performance_bom;
	forms.import_performance_bom.importRemaining -= number;
	if (number == 0){progress.importRemaining = 0}
	forms.import_performance_setting.importProgress = progress.importRemaining+' / '+progress.importtotal;
}