//TODO Work Navigation
//TODO UUID/bolt-on issues speak with Jason
//TODO Codes left/data on the right
//TODO Pull record upon entry of data
//TODO Category codes
//TODO Customer codes
//TODO Navicat with Mark on resolving changes in Model
//TODO Ensure uniqueness of record since UUID doesn't do this for employee, etc
//TODO Customer record select on Customer Number entry
//TODO Address record by address type, one per type per customer
//TODO Carrier search on entry
//TODO Customer Class search on entry
//TODO test
//TODO Work Login and security

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2560643-8DED-47E5-8286-E2FF84C20A36"}
 */
var current_db;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AEA18AFC-E1F3-4EDA-A35C-43C5304CCF2F"}
 */
var new_project_db;

/**
 * @properties={typeid:35,uuid:"74338781-F357-47CA-B0D9-FDC670EBEACF",variableType:-4}
 */
var newCustomerRecord = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3675EA64-17BD-4B4E-A636-14D3251F077A",variableType:4}
 */
var selectedCustomerIndex = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B0F4055-3996-4A9D-A4BB-B90E10470D37"}
 */
var selectedCustomerID = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8AB2EAB0-28A6-4575-940C-BC5C813524F5",variableType:4}
 */
var selectedAddressIndex = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B5E00747-6C17-4F14-BBA0-03E869AF3B08",variableType:4}
 */
var selectedEmployeeIndex = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"467BBBB0-DF3C-4DFB-A50D-550A25BC6C67",variableType:4}
 */
var selectedEmpClassIndex = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BF79272C-B516-4388-B4F4-DB6CE3E2394D",variableType:4}
 */
var selectedUOMIndex = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6543531E-F775-417D-B5ED-702402B31B02",variableType:8}
 */
var dividerLocation = 0.0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5CB1F67A-DDCA-4A57-A471-1818675B0ADE"}
 */
var carriersDividerLocation = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D97999A0-3F8A-4030-A3D9-2D8C7A047E44"}
 */
var customersDividerLocation = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B52D3B6-8D12-4F91-91C0-41FFBBB125E5"}
 */
var employeesDividerLocation = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"43084A1B-ECDD-4986-A87C-2B0344C73050"}
 */
var dialogResponse = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4BDB4882-6740-4CF9-B50C-344C35A5E6B7"}
 */
var dialogMessage = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6171CC37-FD4E-4D5A-B42D-92CB73B88FC3"}
 */
var dialogButtonYes = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4CE72FCD-265B-48D2-9208-ADAF4F9F9F5A"}
 */
var dialogButtonNo = "";


/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"D0109E13-1A5A-42E8-91A7-1211E35A99EC"}
 */
function onSolutionOpen() {
	databaseManager.nullColumnValidatorEnabled = false;
	var success = false;
	current_db = "stsservoy";
	new_project_db = "stsservoy_remote";
	new_project_db = "";
	if (globals.new_project_db != globals.current_db && globals.new_project_db != null && globals.new_project_db != "") 

{
		//TODO Change database to production versus development
		success = databaseManager.switchServer(current_db,new_project_db);
		application.output(success+" CHANGED "+current_db+" changed to "+new_project_db,LOGGINGLEVEL.WARNING);
		current_db = new_project_db;
	} else {
		application.output(success+" FAIL: "+current_db+" changed to "+new_project_db,LOGGINGLEVEL.WARNING);
	}
	
	application.overrideStyle('baseStyle', 'sts_one'); // was baseStyle
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3CE9BBAA-04DA-498B-93E1-371EBCA7861E"}
 */
function onDialogYes(event) {
	globals.dialogResponse = "yes";
	var win = application.getActiveWindow();
	win.destroy();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"08692DE9-A9EE-46FB-BEC0-02207AD52611"}
 */
function onDialogNo(event) {
	globals.dialogResponse = "no";
	var win = application.getActiveWindow();
	win.destroy();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param winTitle Name of window in border
 * @param message Message for delete operation
 * @param buttonYes Well, yes.
 * @param buttonNo Maybe, no.
 *
 * @properties={typeid:24,uuid:"B57D889C-179C-491D-83DC-A9647BD2EF93"}
 */
function doDialog(winTitle,message,buttonYes,buttonNo){
	globals.dialogMessage = message;
	globals.dialogButtonYes = buttonYes;
	globals.dialogButtonNo = buttonNo;
	var win = application.createWindow(winTitle,JSWindow.MODAL_DIALOG);
	win.title = winTitle;
	win.show('dialog');
}