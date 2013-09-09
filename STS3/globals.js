
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
 * @param message
 * @param buttonYes
 * @param buttonNo
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