//TODO Work Navigation test
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
//TODO When pushing tables to remote sts, the UUID is left out.  Need to automate distribution.
//------------------ Public Variables from STS ---------------------------------------
//Version-----------------------------------------------------------------------------
/**
 * @properties={typeid:35,uuid:"BDF33A45-AB00-4C21-9381-BCC5748760D0",variableType:-4}
 */
var categoryTmp1 = [];
/**
 * @properties={typeid:35,uuid:"08F451D2-F32E-4550-B890-61832FF2B032",variableType:-4}
 */
var categoryTmp2 = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5CBFD046-1730-4762-8AF1-DD0BFE1A397E"}
 */
var vJobIDXref = "";
/**
 * @properties={typeid:35,uuid:"FE89CF50-1B43-46F8-A8DD-250A8C617C79",variableType:-4}
 */
var change_to_remote = false;
/**
 * @properties={typeid:35,uuid:"6ACA8CE7-B08B-45EA-80DD-C6543E3393A0",variableType:-4}
 */
var debug = false;
/**
 *
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E95D70E8-A990-4219-9FFE-3A9A957570B5"}
 */
var selectedTenants = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4DA2A86A-4705-43F2-B33F-25E0557345E1"}
 */
var STS_UNIVERSAL_TENANT = "01234567-0123-4567-89AB-0123456789AB";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"715F3FA9-EF61-4230-9341-6E0E042F243C"}
 */
var solutionTables = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6E529CE4-313E-463D-B35D-4CE852FD885F"}
 */
var lookupItem = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D35A9875-04D9-4403-B673-20B8CD59CB06"}
 */
var lookupItem2 = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8FF33969-FEA3-4DE9-8B3D-23263C4BFEDD"}
 */
var compileVersion = "0.1";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4A2D3762-336A-4CB6-BD15-9E1F1AD94FA0"}
 */
var compileDate = '2013.01.01';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"019BA213-87C9-4DE4-8AD5-F01DADDBE917"}
 */
var compileTime = '00:00:00';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9E3C988C-F438-48E1-80E7-0060051093A1"}
 */
var cSwitch = 'PC';
//--------------------------------------------------------------------------------------
/**
 * @properties={typeid:35,uuid:"25BCF05F-27A8-4993-9992-6BFF1BAF769F",variableType:-4}
 * @type uomarray {Array} Array containing units of measure
 */
var uomarray = new Array;
/**
 * @properties={typeid:24,uuid:"0BBCD0D9-982E-4B88-96E2-EA8002870A69"}
 */
function initUomArray() {
	if (uomarray.length == 0 ){
		uomarray[1] = 'CWT';
		uomarray.push('EACH');
		uomarray.push('LBS');
		uomarray.push('LNFT');
		uomarray.push('METR');
		uomarray.push('MTON');
		uomarray.push('MTR2');
		uomarray.push('PNLS');
		uomarray.push('SQFT');
		uomarray.push('TON');
	}
}
/**
 * @properties={typeid:35,uuid:"35B65CE5-89D3-4ECF-93F2-D9058F73272D",variableType:-4}
 */
var transactions = false;
/**
 * @properties={typeid:35,uuid:"75DABA6A-1EB2-4E4E-BCA4-6B65DF8804B7",variableType:-4}
 * @type aStatusTypes {Array} Status condition types
 */
var aStatusTypes = new Array;
/**
 * @properties={typeid:35,uuid:"0A0B01AA-138B-4C3F-85E0-1EBE650867EE",variableType:-4}
 * @type aTrackWindows {Array} Windows lists
 */
var aTrackWindows = ['STS - Main'];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EBD2A621-C2C3-49BE-B7D8-E421721AB0C2"}
 */
var com = '';
/**
 * List of idfiles/barcode id_serial_numbers that have been printed.
 * @properties={typeid:35,uuid:"FC357C54-6A5F-4015-AF29-4F2AD3718DB3",variableType:-4}
 */
var barcodePrintedArray = [];
//--------------------------------------------------------------------------------------
/**
 * @properties={typeid:24,uuid:"E55D375F-2EA8-4D4E-8234-B7AF6A47619E"}
 */
//do not resort this array, needed in this order for export to tekla
/**
 * @properties={typeid:24,uuid:"DB2DE8B0-A170-4F59-A02B-81575B60B3FF"}
 */
function initStatusTypes(){
	if (aStatusTypes.length == 0){
		aStatusTypes.push(i18n.getI18NMessage('sts.status.none'));//'None');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.raw.received'));//Fab Raw Received');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.receive'));//'Fab Receive');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.cut'));//'Fab Cut');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.beam.line'));//'Fab Beam Line');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.blasted'));//'Fab Blased');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.drilled'));//'Fab Drilled');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.layout'));//'Fab Layout');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.fitup'));//'Fab Fitup');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.weldup'));//'Fab Welded');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.1stinspect'));//'Fab 1stInspect');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.2ndinspect'));//'Fab 2ndInspect');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.3rdinspect'));//'Fab 3rdInspect');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.4thinspect'));//'Fab 4thInspect');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.inspected'));//'Fab Inspected');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.fabricated'));//'Fab Fabricated');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.painted'));//'Fab Paint');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.bundled'));//'Fab Bundled');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.move'));//'Fab Move');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.transfer'));//'Fab Transfer');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.loading'));//'Fab Loading');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.loaded'));//'Fab Loaded');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.loadverify'));//'Fab LoadVerify');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fab.ship'));//'Fab Ship');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.galavanizer.received'));//'Galvanizer Received');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.galavanizer.shipped'));//'Galvanizer Shipped');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.galavanizer.loadverify'));//'Galvan LoadVerify');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.painter.received'));//'Painter Received');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.painter.shipped'));//'Painter Shipped');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.painter.loadverify'));//'Paint LoadVerify');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fireproofer.received'));//'FireProofer Received');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fireproofer.shipped'));//'FireProofer Shipped');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.fireproofer.loadverify'));//'FireProof LoadVerify');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.other.received'));//'Other Received');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.other.shipped'));//'Other Shipped');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.other.loadverify'));//'Other LoadVerify');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.received'));//'Jobsite Received');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.shipped'));//'Jobsite Shipped');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.loadverify'));//'Jobsite LoadVerify');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.inspected'));//'Jobsite Inspected');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.painted'));//'Jobsite Painted');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.field.work'));//'Jobsite Field Work');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.move'));//'Jobsite Move');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.issued'));//'Jobsite Issued');
		aStatusTypes.push(i18n.getI18NMessage('sts.status.jobsite.erected'));//'Jobsite Erected');
	}
}
/**
 * @properties={typeid:35,uuid:"0FA5E1F6-D008-4A83-8DDE-0D72F434B116",variableType:-4}
 */
var aLaborCodes = [];
/**
 * @properties={typeid:35,uuid:"20A27450-2211-4BAA-B056-85498C096831",variableType:-4}
 */
var instanceReg = null;
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C8E73EE3-0C3E-484C-ADE7-ECF0D06813E7"}
 * @AllowToRunInFind
 */
function doLogout(event) {
	var response = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.logout.exit'),
		i18n.getI18NMessage('sts.txt.logout.exit.query'),
		i18n.getI18NMessage('sts.btn.yes'),
		i18n.getI18NMessage('sts.btn.cancel')); // ticket #119 //'Exit Steel Tracking System','Exit STS program?','Exit','Cancel');))	
	//globals.doDialog(i18n.getI18NMessage('sts.txt.logout.exit'),
	//	i18n.getI18NMessage('sts.txt.logout.exit.query'),
	//	i18n.getI18NMessage('sts.btn.yes'),
	//	i18n.getI18NMessage('sts.btn.cancel')
	//	); // ticket #119 //'Exit Steel Tracking System','Exit STS program?','Exit','Cancel');
	if (response == i18n.getI18NMessage('sts.btn.yes')){
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
			application.showURL("http://" + application.getHostName() + "/webclient.html", "_top");
			//application.output('sesson.appName '+session.appName);
			//go through and remove ALL windows besides main
			/** var windowArray = globals.aTrackWindows;
			for (var index = 1;index < windowArray.length;index++){
				var windowName = windowArray[index];
				if (windowName == null){return}
				if (windowName == " "){return}
				if (windowName.search('STS') == 0){continue}//cannot bring main to front, so ignore
				var windowx = application.getWindow(windowName.trim());
				windowx.setSize(30,30);
				application.sleep(10);
				windowx.hide();
				application.sleep(4);
				//windowx.destroy();
			} */
		} else {
			globals.secLogout('STS3','','');
		}
		security.logout();
	}
}
/**
 * @properties={typeid:24,uuid:"5F61D7B0-929D-4EF0-A151-60BA15B93690"}
 */
function initLaborCodes(){
	aLaborCodes = [];
	aLaborCodes.push('<None>');
	/**@type {JSFoundSet<db:/stsservoy/labor_codes>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/labor_codes');
	fs.loadAllRecords();
	//fs.loadRecords();
	for (var index = 1;index <= fs.getSize();index++){
		fs.setSelectedIndex(index);
		if (fs.tenant_uuid != session.tenant_uuid){continue}
		aLaborCodes.push(fs.labor_code);
	}
	application.setValueListItems('stsvl_labor_code',aLaborCodes);
}
/**
 * @properties={typeid:35,uuid:"DB46C8F5-C5AC-416D-B39E-626D3A727099",variableType:-4}
 */
var aStatusCodes = [];
/**
 * Keep track of open windows for tracknig.
 * @properties={typeid:35,uuid:"A025872B-C6F5-4D3C-A876-7EAF54B3A6D6",variableType:-4}
 */
var aOpenWindows = ['STS - Main Window'];
/**
 * @properties={typeid:24,uuid:"445AB0E6-10DB-401A-8DDF-D685503FEAF4"}
 */
function initStatusCodes(){
	aStatusCodes = [];
	aStatusCodes.push('<None>');
	/**@type {JSFoundSet<db:/stsservoy/status_description>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/status_description');
	fs.loadAllRecords();
	for (var index = 1;index <= fs.getSize();index++){
		fs.setSelectedIndex(index);
		if (fs.tenant_uuid != session.tenant_uuid){continue}
		if (fs.association_id != globals.secCurrentAssociationID){continue}
		if (aStatusCodes.indexOf(fs.status_code) == -1){
			aStatusCodes.push(fs.status_code);
		}
	}
	application.setValueListItems('stsvl_status_code',aStatusCodes);
}
/**
 * @properties={typeid:35,uuid:"277A8868-1497-4A12-8859-3EE4EDD5BCFA",variableType:-4}
 */
var existingCowsCheckBoxes = new Array();
//Globals-------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------

/**
 * @properties={typeid:35,uuid:"A273F180-96BD-4234-BAE6-B07C601DF865",variableType:-4}
 */
var exitProgram = false;
/**
 * @properties={typeid:35,uuid:"BF27F113-E9CC-4E37-B6EE-0B50471CC8B8",variableType:-4}
 */
var lockError = false;
/**
 * @properties={typeid:35,uuid:"1460BA7D-844E-410E-BC2D-01E0371907AA",variableType:-4}
 */
var yn = true;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F93A1E07-F780-45C9-BCB4-BF306C176DD2"}
 */
var popupName = 'MASTEREDIT';
/**
 * @properties={typeid:35,uuid:"0E0D99A8-09E1-4CF5-A5DB-CE91BC1DD411",variableType:-4}
 */
var localError = false;
/**
 * @properties={typeid:35,uuid:"52512AEE-9748-414A-B770-0DD46CF12844",variableType:-4}
 */
var printerName = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"179D1F32-D3FD-4CBE-97F9-E93405E2AEFA",variableType:8}
 */
var tries = 0.000000;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DECD6AC9-F643-496D-B01F-BB70011FC26B"}
 */
var passwrd = "P";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0E76E40-3281-479A-8E2F-7AB502FDD0CA"}
 */
var loginID = "P";
/**
 * @properties={typeid:35,uuid:"FB55AA97-C630-4E58-8B91-418C137F187F",variableType:-4}
 */
var lok2Exit = false;
/**
 * @properties={typeid:35,uuid:"87AB7E7D-6F6A-4383-B1FE-B202314C7351",variableType:-4}
 */
var lprintPreview = false;
/**
 * @properties={typeid:35,uuid:"09A4C7C8-13E9-4F16-804F-BFC15C530FB9",variableType:-4}
 */
var sndPlaySound = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"65904E40-B333-4FBF-83B3-F90693B91129",variableType:4}
 */
var playFlag = 1;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"55287C3F-69F2-43FD-9553-EA0DAF0FF188"}
 */
var fileAlias = "_3WC0UCC5Z";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6C4B45F-3C94-499A-8C52-95DD2379D3EB"}
 */
var ulApp = "LDTUPLD.APP";
/**
 * @properties={typeid:35,uuid:"BE1BDDE4-CCCB-464D-BC97-844C2109E73A",variableType:-4}
 */
var poPort = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"55AEFA70-3234-422D-B2F9-B2560D9BC7CC"}
 */
var lanGroup = "P";
//-------------------------------------------------------------------------------------------------------
/**
 * @properties={typeid:35,uuid:"903F0872-DBD5-4121-B764-B0CEC8A1893E",variableType:-4}
 */
var rfSystem = false; //set to .T. when run through an RF unit
/**
 * @properties={typeid:35,uuid:"6E8A0074-7A0A-4E79-A9DF-482659BE98B5",variableType:-4}
 */
var lrfSystem = false; //set to "true" in rf modules
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27D0F09B-3CEF-4ACC-9CD9-12926383C04D"}
 */
var password = "P";
/**
 * @properties={typeid:35,uuid:"A5651DB0-66E9-4CE4-8863-81DDD324EC73",variableType:-4}
 */
var lPortMultiuse = false; //set to "true" when two programs (main
/**
 * @properties={typeid:35,uuid:"0EB099E3-264A-4D11-AEEF-8C85604F383A",variableType:-4}
 */
var lRemoveDeleted = false;

//-------------------------------------------------------------------------------------------------------
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82EC16FD-E366-481D-A60F-4C2516CD4E70"}
 */
var yourNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A3A9A73-4801-434A-9258-A40AA5789B54"}
 */
var yourName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06819820-CB0F-4D06-887E-786F6AE06A04"}
 */
var yourAddr = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6BADCF94-96C3-4614-AD64-D58720659BCD"}
 */
var yourCity = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69C280F4-CB4C-459E-9786-1B5DE20E5252"}
 */
var yourState = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BFC03FDC-E324-49F3-A066-7D0450837664"}
 */
var yourZip = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"01DD3E0A-278E-4CB7-82C2-850F557E3FA4"}
 */
var yourPhone = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"64D4098A-4DE9-4B61-B0A6-59961BD79901"}
 */
var yourShipTo = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"96BAB961-D570-45E4-8996-31C67C0FB4A3"}
 */
var yourBillTo = "";
/**
 * @properties={typeid:35,uuid:"24A2DB72-C30C-48D7-AF2A-92EAAC8E35A2",variableType:-4}
 */
var yourFax = false;

//-------------------------------------------------------------------------------------------------------
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EB13A06D-98B5-4C12-8630-09FE0FA605A5"}
 */
var recvLabel = ""; //receive label
/**
 * @properties={typeid:35,uuid:"BD222655-0ABE-424A-A4BA-C8C3C4109D20",variableType:-4}
 */
var lprntControl = false; // logical print control
/**
 * @properties={typeid:35,uuid:"6F6D8A8B-7E03-41BC-90E3-51224F8C5F1D",variableType:-4}
 */
var laskLablQty = false; // ask for label quantity
/**
 * @properties={typeid:35,uuid:"AACBFBAD-2F2B-485D-8836-3029F5FB894B",variableType:-4}
 */
var laskWt = false; //ask for weight
//STSdialog boxes-------------------------------------------------------------------------------------
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D78EB4A-64D9-49E9-9F38-E903A26577B8",variableType:8}
 */
var mb_ok = 0.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EA5C2C9B-6BB2-466F-8ADA-875E2285207D",variableType:8}
 */
var mb_okcancel = 1.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9AE4F1AF-10F0-496C-80E6-8F2A71F2F89D",variableType:8}
 */
var mb_abortretryignore = 2.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D4AC7590-72E4-4309-B509-B9DEBD25A936",variableType:8}
 */
var mb_yesnocancel = 3.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61162E7C-BF66-4D04-8517-794873AF60F3",variableType:8}
 */
var mb_yesno = 4.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4132E592-B2E5-49C9-B4DE-B1AFB841A6B7",variableType:8}
 */
var mb_retrycancel = 5.000000;

//STSdialog boxes 2--------------------------------------------------------------------------------
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9154645B-4065-4A3B-85FE-50E7CD9D6B8D",variableType:8}
 */
var mb_iconhand = 16.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3442378F-1114-44C7-A27D-B3742F111C7B",variableType:8}
 */
var mb_iconstop = 16.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"47F8012C-6139-43AE-B1B5-3310030310D2",variableType:8}
 */
var mb_iconquestion = 32.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3B8AE7CE-6E83-453F-967C-C3B089E14FA0",variableType:8}
 */
var mb_iconexclamation = 48.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C54AE248-84F8-4ED9-BE41-225836184398",variableType:8}
 */
var mb_iconasterisk = 64.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1F17015F-A531-45C3-B455-654334DCBB63",variableType:8}
 */
var mb_iconinformation = 64.000000;
//STSdialog boxes 3--------------------------------------------------------------------------------
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"77A44C50-70E7-431F-B4B7-000F24D764CF",variableType:8}
 */
var mb_1defbutton = 0.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7971B642-0247-4149-AF3B-C0CC47EE120E",variableType:8}
 */
var mb_2defbutton = 256.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F0D163AB-ACF3-4753-9F56-E5368F96E4AE",variableType:8}
 */
var mb_3defbutton = 512.000000;
//STSdialog boxes 4------------------------------------------------------------------------------------
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"153ABB20-6E3E-45B7-A3FD-7AD2F3A685A4",variableType:8}
 */
var mb_applmodal = 0.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"55DAEB2C-413E-47D4-94D1-177168BD78DE",variableType:8}
 */
var mb_systemmodal = 4096.000000;

//STSdialog boxes 5-----------------------------------------------------------------------------------
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"316BD415-133B-4D4B-8D94-5BAABBCC086C",variableType:8}
 */
var idok = 1.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"354D764F-4E82-43D0-893C-11BEB9F8A7C6",variableType:8}
 */
var idcancel = 2.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"26876783-2703-4B65-8DF1-E31D476EC832",variableType:8}
 */
var idabort = 3.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7E1DC0A2-8D2B-4CC4-A1A1-919FAE7D69BC",variableType:8}
 */
var idretry = 4.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BC383ED2-961C-4D1A-BA5D-47F7EBD1EF20",variableType:8}
 */
var idignore = 5.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0675A047-ACC1-48CF-B2FE-A4A6BC9C0B77",variableType:8}
 */
var idyes = 6.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1F893C55-4596-4F39-80AE-9D3B9FBC038C",variableType:8}
 */
var idno = 7.000000;
//SS where return value is stored from SS-----------------------------------------------------------------------------
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5ADBA556-FC64-4F33-A373-A7BD6D00A386"}
 */
var nssValue = "792.000000";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"167B74CA-D390-4D68-BA3A-C9D449309A6E"}
 */
var cssMessage = 'Fully Registered LAN Version.';

//-------------------------------------------------------------------------------------------------------
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76D088DC-9D24-43BE-8D42-6B30046D8575"}
 */
var action = 'Cancel';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A92A9190-6463-42B9-9DD8-CA47064F6352"}
 */
var cTempSTSInstalled = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87A0D8D8-D7CA-4EDC-A65F-827A452A922E"}
 */
var lanVersion = 'TESTING';
/**
 * @properties={typeid:35,uuid:"407B0805-31EE-4952-9FE6-A56DA26922BC",variableType:-4}
 */
var debugtesting = false;
//-------------------------------------------------------------------------------------------------------
//* markzip & recvrzip are the names of the zip files on exportation
//* m.idfline - first line of the id barcode label - used if you want to override the bcform, prgsetup screen
//* m.idsline - second line of the id barcode label - used if you want to override the bcform, prgsetup screen
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AC67E605-2910-487E-87C2-ABFAFD7CC071"}
 */
var idFLine = ""; 
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"490F650A-2301-46E3-9B8B-5DDA70A58B91"}
 */
var idSLine = "";
/**
 * @properties={typeid:35,uuid:"E07A7909-6CE4-40A9-AFA1-F65B01B378E4",variableType:-4}
 */
var aSTSMasterTables = new Array;

//SERVOY BEGINS--------------------------------------------------------------------------------------------
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B0B8EA2A-9677-4E9F-A83A-1DAB9E4A96CC"}
 */
var route_code = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A22242D-4F65-4DCB-8EAA-8453B5A09EAB",variableType:4}
 */
var currentStatusCodeSequence = 0;


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
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B7FC57AD-E13F-43EB-B80A-A1861B205B63",variableType:4}
 */
var newRecordIndex = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41980ABA-12F7-4A94-A4BE-C85866E13679"}
 */
var newRecordKey = "";
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3AB6046F-A623-4E3B-B2D1-0E306BC21FF2"}
 */
var importCustomerID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F7FFD927-E1DC-4740-BF04-1B8DDC3F1893"}
 */
var importCustomerName = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8AB2EAB0-28A6-4575-940C-BC5C813524F5",variableType:4}
 */
var selectedAddressIndex = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1D679179-739D-4050-8676-4166740233DE",variableType:4}
 */
var selectedEPIndex = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"16B48E49-BF05-48DD-931D-F0FF183BE3A4",variableType:4}
 */
var selectedEndPrepIndex = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B5E00747-6C17-4F14-BBA0-03E869AF3B08",variableType:4}
 */
var selectedEmployeeIndex = 0;
/**
 * @properties={typeid:35,uuid:"317091B8-7FA8-415A-BC35-A79383A99DE2",variableType:-4}
 */
var newEmployeeRecord = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"467BBBB0-DF3C-4DFB-A50D-550A25BC6C67",variableType:4}
 */
var selectedEmpClassIndex = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"516042AE-9CA5-4549-8E9A-4452AE9F562F",variableType:4}
 */
var selectedEndCondIndex = 0;
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"11E851BE-AE58-4698-A1D7-D014829866BD"}
 */
var stsMessages = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"720F3278-AE0F-4C98-A456-B5A35BA878A4",variableType:4}
 */
var importRecordCount=0;
/**
 * @properties={typeid:35,uuid:"C66FF7FA-8440-4E0E-B47E-31C478698CDA",variableType:-4}
 */
var tempArray = [];
/**
 * @properties={typeid:35,uuid:"9B53D57D-E63F-4EA7-B47E-E46831EE61B6",variableType:-4}
 */
var formsToRemove = [];
/**
 * @properties={typeid:35,uuid:"BCAFD77D-9FB1-4973-9FED-F8549994234E",variableType:-4}
 */
var showElementReferences = false;//20180105 show element references
/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"D0109E13-1A5A-42E8-91A7-1211E35A99EC"}
 */
function onSolutionOpen() {
	//scopes.prefs.loadArrays();
	//application.setUIProperty("ComboBoxUI.disabledForeground", 'Color.black');
	//application.setUIProperty('ComboBoxUI.disabledForeground', new Packages.javax.swing.plaf.ColorUIResource(java.awt.Color.decode('#000000')));
	application.putClientProperty("ComboBoxUI", 'com.sun.java.swing.plaf.motif.MotifComboBoxUI');
	application.setUIProperty("ComboBox.disabledForeground", new Packages.javax.swing.plaf.ColorUIResource(java.awt.Color.BLACK));
	application.setUIProperty("TextField.disabledForeground", new Packages.javax.swing.plaf.ColorUIResource(java.awt.Color.BLACK));
	application.setUIProperty("TextPane.inactiveForeground", new Packages.javax.swing.plaf.ColorUIResource(java.awt.Color.BLACK));
	application.setUIProperty("TextArea.inactiveForeground", new Packages.javax.swing.plaf.ColorUIResource(java.awt.Color.BLACK));
	plugins.VelocityReport;
	scopes.globals.instanceReg = new RegExp(/(_[0-9]+)/);

	if (application.isInDeveloper()){application.output('globals onSolutionOpen opened. STS3/globals.js')}
	var registered = plugins.UserManager.register( "P2Programs", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCFyAbTPbuHQraeSHsu3pM3DS4nPwTJM/B" );
	//application.output('Client Registered '+registered);
	plugins.UserManager.getRegistration();
	//plugins.UserManager.updateClientInfo();
	APPLICATION_NAME = application.getSolutionName();
	secCreateApplication('STSmobile');
	var mobileID = secGetApplicationID('STSmobile');
	if (application.isInDeveloper()){application.output('mobile id '+mobileID)}

	databaseManager.nullColumnValidatorEnabled = false;
	var success = false;
	current_db = "stsservoy";
	new_project_db = "stsservoy_remote";
	var switchRemote = databaseManager.switchServer(current_db,new_project_db) && application.isInDeveloper();
	//new_project_db = "";
	if (switchRemote) {
		//TODO Change database to remote db versus local development
		success = databaseManager.switchServer(current_db,new_project_db);
		if (success){
			if (application.isInDeveloper()){application.output("CHANGED to REMOTE Database.")}
		} else {
			if (application.isInDeveloper()){application.output('FAILED change to REMOTE Database.')}
		}
		current_db = new_project_db;
	} else {
		if (application.isInDeveloper()){application.output('USING local development Database.')}
	}
	if (application.isInDeveloper()){application.output('okay, here2 '+APPLICATION_NAME)}
	
	application.overrideStyle('baseStyle', 'sts_one'); // was baseStyle
	secSetCurrentApplication(secGetApplicationID(APPLICATION_NAME));
	secCurrentUserID = security.getUserUID();
	secCurrentTenantID = sec_current_user.tenant_uuid; 
	scopes.globals.mobTenantId = secCurrentTenantID; 
	secCurrentAssociationID = sec_current_user.association_uuid;
	//secCurrentAssociationMasterID = secGetCurrentMasterAssociation(secCurrentTenantID);
	//secSetCurrentApplication(17); // 17 is already STS, could be anything
	if (application.isInDeveloper()){application.output('assoc master '+secCurrentAssociationMasterID+' assoc '+secCurrentAssociationID+' tenant '+secCurrentTenantID)}
	var tenantID = sec_current_user.tenant_uuid;
	secCurrentTenantIDs = secGetTenantIDs(secCurrentAssociationMasterID);
	secSetCurrentTenant(tenantID.toString());
	getTablesFilters(tenantID);
	var appType = application.getApplicationType();
	//application.output(appType+"app type"); //2 is smart client
	if (appType == 1){
		var texts = plugins.file.readFile('c:\\STS.txt');
		application.output(texts);
	}
	session.associationId = sec_current_user.association_uuid;
	session.loginUserNum = sec_current_user.user_name;
	session.loginId = sec_current_user.user_uuid;
	session.tenant_uuid = secCurrentTenantID;
	session.sessionId = security.getClientID();
	session.sessionIp = application.getIPAddress();
	session.program = "STS Desktop";
	session.login = session.loginUserNum;
	session.loginDate = new Date();
	session.adminUser = sec_current_user.is_admin_account;
	session.corpUser = (sec_current_association.association_uuid == sec_current_association.tenant_group_uuid);
	session.parentAssociationId = sec_current_association.tenant_group_uuid;
	session.corporate = getAssocCorporate(secCurrentAssociationID);
	//scopes.globals.getBasePermissions(session.loginId,'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF'); // using to install FFF on current active app
	getLoggedEmployee(session.loginId);
	loginUserInfo(secCurrentUserID);
	globals.getAssociation(secCurrentAssociationID);
	session.association = mobAssoc;
	onStartLoadPrefs("");
	globals.createStations();
	globals.getMappings();
	application.setValueListItems('stsvl_fab_shop',l.assocs);
	databaseManager.removeTableFilterParam('stsservoy','filterCurrentTenant');//20171228 filter current tenant and assoc for nonOffice access
	databaseManager.addTableFilterParam('stsservoy',null,'tenant_uuid','=',session.tenant_uuid,'filterCurrentTenant');
	if (globals.SEC_ASSOCIATION_FILTER && session.corporate){
		databaseManager.removeTableFilterParam('stsservoy',globals.SEC_ASSOCIATION_FILTER);
	}
	scopes.jobs.i18nTableColumns();
	databaseManager.removeTableFilterParam('stsservoy','filterCurrentAssoc');//20171228 filter current tenant and assoc for nonOffice access
	if (!session.corpUser){//only corp users get access to full association list
		var tables = ['associations', 'employee', 'status_description', 'users', 'jobs'];
		for (var idx = 0;idx < tables.length;idx++){
			var tableCols = databaseManager.getTable('stsservoy',tables[idx]).getColumnNames();
			var filterName = 'filterAssoc'+tables[idx].toUpperCase();
			if (tableCols.indexOf('association_id') != -1){
				databaseManager.addTableFilterParam('stsservoy',tables[idx],'association_id','=',session.associationId,filterName);
			}
			if (tableCols.indexOf('association_uuid') != -1){
				databaseManager.addTableFilterParam('stsservoy',tables[idx],'association_uuid','=',session.associationId,filterName);
			}
		}
	}
	if (application.isInDeveloper()){
		var filters = databaseManager.getTableFilterParams('stsservoy','filterCurrentAssoc');
		application.output('Filters: '+filters);
		// REM get table names and columns 
		//
		if (1==0){
			application.output('Table\tColumn\tType\tLength\tPKEY\tUUID');
			var tables = databaseManager.getTableNames('stsservoy');
			for (var tdex = 0;tdex < tables.length;tdex++){
				var table = databaseManager.getTable('db:/stsservoy/'+tables[tdex]);
				var columns = table.getColumnNames();
				for (var jdex = 0;jdex < columns.length;jdex++){
					var jCol = table.getColumn(columns[jdex]);
					var length = jCol.getLength();
					var typeNum = jCol.getType();
					var type = '';
					var uuid = '';
					var pkey = '';
					switch (typeNum){
						case JSColumn.INTEGER :
							type = 'Integer';
							break;
						case JSColumn.TEXT:
							type = 'Text';
							break;
						case JSColumn.NUMBER:
							type = 'Real';
							break;
						case JSColumn.DATETIME:
							type = 'DateTime';
							break;
						default:
							null;
					}
					if (jCol.hasFlag(JSColumn.UUID_COLUMN)){
						uuid = 'UUID';
					}
					if (jCol.getRowIdentifierType() == JSColumn.PK_COLUMN){
						pkey = 'PKey';
					}
					application.output('db:/stsservoy/'+tables[tdex]+'\t'+columns[jdex]+'\t'+type+'\t'+length+'\t'+pkey+'\t'+uuid);
					
				}
			}
		}
	}
	if (appType == 1){
		var client = plugins.UserManager.getClientByUID(session.sessionId);
		client.maxIdleTime = 0;
	}
	scopes.jobs.createMissingPermissionGroups();
	//createPostGreSqlIndexes();//20180925 Tue set up indexing for better speed
	scopes.prefs.loadArrays();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3CE9BBAA-04DA-498B-93E1-371EBCA7861E"}
 */
function onDialogYes(event) {
	globals.dialogResponse = 'yes';
	var win = application.getActiveWindow();
	win.destroy();
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"08692DE9-A9EE-46FB-BEC0-02207AD52611"}
 */
function onDialogNo(event) {
	globals.dialogResponse = 'no';
	var win = application.getActiveWindow();
	win.destroy();
}

/**
 * @param winTitle Name of window in border
 * @param message Message for delete operation
 * @param buttonYes Well, yes.
 * @param buttonNo Maybe, no.
 *
 * @properties={typeid:24,uuid:"B57D889C-179C-491D-83DC-A9647BD2EF93"}
 * @AllowToRunInFind
 */
function doDialog(winTitle,message,buttonYes,buttonNo){
	globals.dialogMessage = message;
	globals.dialogButtonYes = buttonYes;
	globals.dialogButtonNo = buttonNo;
	var win = application.createWindow(winTitle,JSWindow.MODAL_DIALOG);
	win.title = winTitle;
	win.show('dialog');
	if (buttonNo.search('Cancel') != -1 || buttonYes.search){
		forms[win.controller.getName()].elements.btn_Yes.requestFocus();
	}
}
/**
 * @param s
 *
 * @properties={typeid:24,uuid:"8C60BFB7-E653-4F70-BBF2-05337CF0959B"}
 * @SuppressWarnings(hides)
 */
function capitalize(s){
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}
/**
 * @properties={typeid:24,uuid:"0F7CB54B-C3AC-4211-9A81-5E931253B58C"}
 */
function mainWindowFront(){
	application.updateUI();
	var windowx = application.getWindow();
	if (windowx != null){
		windowx.toFront();
	}
	//plugins.WebClientUtils.executeClientSideJS('var win = localStorage.WinMain;win.focus();alert("win");');
}
/**
 * @AllowToRunInFind
 * 
 * @param userId
 *
 * @properties={typeid:24,uuid:"BF5D68D1-CB2D-496A-8414-BE0D7E84040D"}
 */
function loginUserInfo(userId){
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var u = databaseManager.createSelect('db:/stsservoy/employee');
	u.result.add(u.columns.employee_id);
	u.where.add(u.columns.delete_flag.isNull);
	u.where.add(u.columns.tenant_uuid.eq(session.tenant_uuid));
	u.where.add(u.columns.user_uuid.eq(userId));
	var U = databaseManager.getFoundSet(u);
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var rec = U.getRecord(1);
	if (rec){
		session.loginUser = rec.employee_firstname;
		session.loginUserNum = rec.employee_number;
		session.logging = (rec.employee_rf_logging == 1) ? 0 : 1;
		session.rfLogging = (rec.employee_save_rftransaction == 1) ? 0 : 1;
	}
}
/**
 * @properties={typeid:24,uuid:"17CF390E-9F2B-4248-BDA8-274828359D3C"}
 * @AllowToRunInFind
 */
function stopWindowTrack(){
	globals.setWindowClosed("");
	var win = application.getActiveWindow();
	var winName = win.title;
	scopes.globals.logger(true,i18n.getI18NMessage('sts.txt.window.closed',new Array(winName)));
	var formName = win.controller.getName();
	application.output('win '+win);
	try {
		win.hide()
	} catch (e) {}
	if (formName.search(/_[0-9]+/) != -1){
		var success = history.removeForm(formName);
		//removes the named form from this session, please make sure you called history.remove() first
		if(success)
		{
			solutionModel.removeForm(formName)
		}
	}
	return;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8DA2C40-ECF1-4137-9F4E-1778F13040AE"}
 */
function onActionCancelButton(event) {
	// Generic close on Cancel
	//var win = application.getActiveWindow();
	globals.mainWindowFront();
	globals.stopWindowTrack()
	//win.hide();
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {string} updateValue string Dataprovider value to update with new value
 *
 * @properties={typeid:24,uuid:"3227F354-E244-4B7C-9F63-D4C4B2F0BF5C"}
 */
function onActionFileOpenDialog(event,updateValue) {
	var file = plugins.file.showFileOpenDialog(2, "\\", false, null);
	if (file){globals.loggerDev(this,'File open diaglog failed.')}
}
//----------------------------------------
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC04042B-4656-4CB8-A49A-80DF6FA28D94"}
 */
var APPLICATION_NAME = 'Steel Tracking System';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA1268E9-881B-4390-A14A-E648C2C977B5"}
 */
var rowBGColorEven = '#FFFFFF';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B89F6530-467F-402D-A497-3D16F6D1A34A"}
 */
var rowBGColorOdd = '#EEEEFF';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB9F536B-7DAF-4194-9EEA-B5A8054E3A67"}
 */
var rowBGColorSelected = '#FFFF80';
/**
 * @properties={typeid:24,uuid:"2B1E88D0-4689-428D-8D82-DE330FC85D97"}
 */
function getParentForm() {
	null;
	var win = application.getActiveWindow();
	/** @type {JSDataSet} */
	var dataset = win.controller.getFormContext();
	//if (dataset.getMaxRowIndex() > 1) {
		// form is in a tabpanel
		var parentFormName = dataset.getValue(1, 2);
		return parentFormName;
	//}
	/**
	else {
		if (globals.debugtesting){
			//throw new Error ('getParentForm() called from a form that is a top-level form and therefore has no parent.')
		}
	}*/
	///return null;
}
/**
 * @param {Number} index row index
 * @param {Boolean} selected is the row selected
 * @param {String} elementType element type
 * @param {String} dataProviderID element data provider
 * @param {String} formName form name
 * @param {JSRecord} record selected record
 * @param {Boolean} edited is the record edited
 *
 * @returns {String}
 * @properties={typeid:24,uuid:"591CD53E-FB57-4531-B6F1-7ED95C91CE42"}
 */
function rowBGColor(index, selected, elementType, dataProviderID, formName, record, edited) {

	if (selected)
		return rowBGColorSelected;
	else if (index % 2)
		return rowBGColorOdd;
	else
		return rowBGColorEven;
}
/**
 * @properties={typeid:24,uuid:"B382C799-AD08-4B8C-A26E-4CA3B8E2D59B"}
 */
function debugPause (){
	var joe = "debug";
	application.output(joe);
}
/**
 * @param windowName
 *
 * @properties={typeid:24,uuid:"DA5676A8-77BE-4A25-86C3-B1FF6FE993E5"}
 */
function setWindowOpened(windowName){
	if (globals.aOpenWindows.indexOf(windowName) == -1) {
		globals.aOpenWindows.push(windowName);application.getValueListArray('stsvl_nav_openWindows')
		//application.setValueListItems('xsts_nav_openWindows',globals.aOpenWindows);
	//application.output(globals.aOpenWindows); //joeremove
//sts_nav_openWindows
	}
	application.setValueListItems('stsvl_nav_openWindows',globals.aOpenWindows);//was sts_nav_openWindows 20180802
}
/**
 * @param windowName
 *
 * @properties={typeid:24,uuid:"D0A287B8-0F23-4C9E-8821-023919515D46"}
 * @AllowToRunInFind
 */
function setWindowClosed(windowName){
	var win = application.getActiveWindow();
	var formName = win.title;
	if (formName == null){return}
	if (formName.search('STS - Main') == 0){return}
	var tempArray2 = new Array;
	//tempArray2 = globals.aTrackWindows;
	var tempLength = globals.aTrackWindows.length;
	var windowName2 = "";
	for (var index = 0; index < tempLength; index++){
		windowName2 = globals.aTrackWindows[index];
		if (formName.search(windowName2) != 0){
			tempArray2.push(windowName2);
		}
	}
	globals.aTrackWindows = tempArray2;
	application.setValueListItems('stsvl_nav_windows',tempArray2);
}
/**
 * Set tenant filters on applicable tables to enable access to creating more tenants, but not view other information.  This expressly leaves out the 
 * tenant table, filtering all other tables which reference the current login's tenant.
 * 
 * Delete flag is set as well for the entire database.
 *
 * @properties={typeid:24,uuid:"1261FFFE-27A8-4F4B-8986-6B13DF623AC6"}
 * @AllowToRunInFind
 */
function getTablesFilters(tenantID) {
	var permitArray = [];
	permitArray.push(null);
	databaseManager.addTableFilterParam(SEC_SERVER,'associations','tenant_uuid','=',tenantID,'tenantAssocsOnly');
	databaseManager.addTableFilterParam(SEC_SERVER,'users','tenant_uuid','=',tenantID,'tenantUsersOnly');
	databaseManager.addTableFilterParam(SEC_SERVER,'employee','tenant_uuid','=',tenantID,'tenantEmpsOnly');
	var ignoreTableList = 'applications associations users groups keys group_keys keys_table permissions tenant_list user_groups ';
	
	for (var index0 in secCurrentTenantIDs){
		permitArray.push(index0)
	}
	permitArray.push(globals.secCurrentTenantID);
	var tableNames = databaseManager.getTableNames(SEC_SERVER);
	var tableName = "";
	var tableFilter = "";
	var regex = "";
	var ignoreindex5 = 0;
	for (var index = 0;index < tableNames.length; index++){
		tableName = tableNames[index];
		regex = new RegExp(tableName+" ");
		ignoreindex5 = ignoreTableList.search(regex);
		if (ignoreindex5 != -1){continue}
		var dataSource = 'db:/'+SEC_SERVER+'/'+tableName; 
		var jsTableColumns = databaseManager.getTable(dataSource);
		var tableColumn = jsTableColumns.getColumn('tenant_uuid');
		if (tableColumn == null){continue}
		tableFilter = 'Filter_'+tableName;
		//databaseManager.addTableFilterParam(SEC_SERVER,tableName,'tenant_uuid','=',tenantID,tableFilter);
		databaseManager.addTableFilterParam(SEC_SERVER,tableName,'tenant_uuid','IN',permitArray,tableFilter);
		//application.output(success+' table '+tableName+' filter '+tableFilter+" "+permitArray);
		tableColumn = jsTableColumns.getColumn('delete_flag');
		//if (tableColumn == null){continue}
		//databaseManager.addTableFilterParam(SEC_SERVER,tableName,'delete_flag','!=',0,'enableDelete');
	}
	databaseManager.addTableFilterParam(SEC_SERVER,null,'delete_flag',"^||!=",99,'deletedRecords');
	// Filter associations table for all present
	//databaseManager.addTableFilterParam(SEC_SERVER,'associations','tenant_group_uuid','=',secCurrentAssociationMasterID,'associationFilter');
	// Enable filter of all deleted records.
 }
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C4A6BAC3-7D9A-44DC-A872-B7E8524A432F",variableType:4}
 */
var sortColumn = -8;
/**
 * @properties={typeid:35,uuid:"397D4445-2560-47C3-B455-6FCB47F00B5B",variableType:-4}
 */
var sortType = false;//alpha
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"56AC3759-5C9A-4430-8994-6C872E0F877F",variableType:4}
 */
var firstTimeKISS = 1;
/**
 * @properties={typeid:35,uuid:"DB610743-AF57-491A-A949-B4D3A7DC3FFD",variableType:-4}
 */
var kissed = [];
/**
 * @param r1
 * @param r2
 *
 * @properties={typeid:24,uuid:"6ADD2E9F-8324-4B4B-A9B3-6A86880647AD"}
 */
function numSort(r1,r2){ //use negative number for reverse sort or read column header
	var c = globals.sortColumn;
	var s = c < 0 ? -1 : 1;
	c = Math.abs(c);
	var o = 0;
	if (r1[c] * s < r2[c] * s) {
		o = -1;
	} else if (r1[c] * s > r2[c] * s) {
		o = 1;
	}
	return o;
}
/**
 * @param intNumber
 *
 * @properties={typeid:24,uuid:"6B1819D8-85F1-47E3-995F-69ED03CE9A03"}
 */
function maxIntExceeded(intNumber){
	if (intNumber > 2147483647 || intNumber < 0) {return false}
	return true;
}
/**
 * @param r1
 * @param r2
 *
 * @properties={typeid:24,uuid:"17676391-205F-4234-9C9E-032A903CEFBA"}
 */
function alphaSort(r1,r2){
	//use negative number for reverse sort or read column header
	var c = globals.sortColumn;
	var s = c < 0 ? -1 : 1;
	c = Math.abs(c);
	var o = 0;
	if (s > 0) {
		if (r1[c] < r2[c]) {
			o = -1;
		} else if (r1[c] > r2[c]) {
			o = 1;
		}
	} else {
		if (r1[c] > r2[c]) {
			o = -1;
		} else if (r1[c] < r2[c]) {
			o = 1;
		}
	}
	return o;
}
/**
 * @properties={typeid:24,uuid:"1230523D-B33D-49FE-9497-EB29B7CA19D8"}
 * @AllowToRunInFind
 */
function licenseCount() {
	var number = 0;
	var count = 0;
	var licenseInfo = plugins.UserManager.Server().getSettingsProperty('licenseManager.numberOfLicenses');
	if (licenseInfo){
		count = parseInt(licenseInfo, 10);
	}
	if(count) {
		for (var i = 0; i < count; i++) {
			if (parseInt(plugins.UserManager.Server().getSettingsProperty('license.' + i + '.product'), 10) == 1){continue}//developer license
			number += parseInt(plugins.UserManager.Server().getSettingsProperty('license.' + i + '.licenses'), 10);
		}
	}
	/** @type {QBSelect<db:/stsservoy/tenant_list>} */
	var q = databaseManager.createSelect('db:/stsservoy/tenant_list');
	q.result.add(q.columns.tenant_uuid);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	var T = databaseManager.getFoundSet(q);
	if (T.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/tenant_list>} */
		var rec = T.getRecord(1);
		var numberSet = rec.licenses;
		if (numberSet != number){
			rec.licenses = number;
		}
	}
	return (!number) ? 0 : number;
}
/**
 * @properties={typeid:24,uuid:"E1C40A88-88CC-49CB-AE0A-1877E3053716"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function getTenantUsedLicenses(){
	var totalLicenses = parseInt(licenseCount());
	var usedLicenses = 0;
	var assocIds = [];
	///var searchStr = new RegExp("[A-Z]");
	for (var indexT in m.assocs){
		if (indexT.search("-") == -1) {continue}
		assocIds.push(indexT);
	}
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var q = databaseManager.createSelect('db:/stsservoy/associations');
	q.result.add(q.columns.association_uuid);
	q.result.add(q.columns.licenses_desktop);
	q.result.add(q.columns.licenses_mobile);
	q.where.add(q.columns.delete_flag.isin([null,0]));
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	var resultQ = databaseManager.getFoundSet(q);
	usedLicenses = 0; var index = 1;
	/** @type {JSRecord<db:/stsservoy/associations>} */
	var rec = null;
	while (rec = resultQ.getRecord(index++)){
		/** @type {JSFoundSet<db:/stsservoy/associations>} */
		usedLicenses += rec.licenses_desktop*1+rec.licenses_mobile*1;
	}
	var remaining = parseInt(totalLicenses-usedLicenses);
	var avail = "";
	if (remaining > 0){avail = "+";}
	var licenseRatio = '('+avail+remaining+') '+parseInt(usedLicenses)+'/'+totalLicenses;
	licenseError = (usedLicenses > totalLicenses) && !application.isInDeveloper();
	return licenseRatio;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A5D9FAFB-5B2B-4E9D-BE6F-9CFD09A810F3"}
 */
function onDataChangeLicenseDesktop(oldValue, newValue, event) {
	forms[event.getFormName()].licenses_desktop = newValue;
	forms[event.getFormName()].showLicensing();
	if (licenseError){
		licenseError = false;
		forms[event.getFormName()].licenses_desktop = newValue;
		forms[event.getFormName()].showLicensing();
	}
	return true;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"398FB5E4-B7CB-4BE9-A220-1036A34F2CE2"}
 */
function onDataChangeLicenseMobile(oldValue, newValue, event) {
	forms[event.getFormName()].licenses_mobile = newValue;
	forms[event.getFormName()].showLicensing();
	if (licenseError){
		licenseError = false;
		forms[event.getFormName()].licenses_mobile = oldValue;
		forms[event.getFormName()].showLicensing();
	}
	
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2219D1BA-B10F-431B-82D7-9EAD0C87A27C"}
 */
function onActionCloseButton(event) {
	formModeShow(event);
	onActionCancelEdit(event);
	stopWindowTrack();
	mainWindowFront();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4BCB8DF-B7B1-4117-8C85-F550F20E86C3"}
 */
function formModeShow(event) {
	var formName = event.getFormName();
	var formEls = forms[formName].elements;
	var formTabless = formEls['tabless'];
	if (formTabless){
		//var formTab = forms[formTabless.getTabFormNameAt(1)];
		if (formTabless.editInactive){
			formTabless.editInactive(event);
		}
	}
	
	if (formEls['btn_Edit']){
		formEls['btn_Edit'].visible = true;
		formEls['btn_Edit'].enabled = true;
	}
	if (formEls['btn_Cancel']){
		formEls['btn_Cancel'].visible = false;
		formEls['btn_Cancel'].enabled = false;
	}
	if (formEls['btn_Save']){
		formEls['btn_Save'].visible = false;
		formEls['btn_Save'].enabled = false;
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3554F1FA-4822-43F8-A1E5-1717AFBA43C3"}
 */
function formModeEdit(event) {
	var formName = event.getFormName();
	var formEls = forms[formName].elements;
	var formTabless = formEls['tabless'];
	if (formTabless){
		//var formTab = forms[formTabless.getTabFormNameAt(1)];
		if (formTabless.editInactive){
			formTabless.editInactive(event);
		}
	}
	
	if (formEls['btn_Edit']){
		formEls['btn_Edit'].visible = false;
		formEls['btn_Edit'].enabled = false;
	}
	if (formEls['btn_Cancel']){
		formEls['btn_Cancel'].visible = true;
		formEls['btn_Cancel'].enabled = true;
	}
	if (formEls['btn_Save']){
		formEls['btn_Save'].visible = true;
		formEls['btn_Save'].enabled = true;
	}
}
/**

 * @param event
 *
 * @properties={typeid:24,uuid:"74B76F6F-F506-43EA-9F9B-CA8477DFE31D"}
 */
function formModeCancel(event) {
	var formName = event.getFormName();
	var formEls = forms[formName].elements;
	var formTabless = formEls['tabless'];
	if (formTabless){
		//var formTab = forms[formTabless.getTabFormNameAt(1)];
		if (formTabless.editInactive){
			formTabless.editInactive(event);
		}
	}

	if (formEls['btn_Edit']){
		formEls['btn_Edit'].visible = true;
		formEls['btn_Edit'].enabled = true;
	}
	if (formEls['btn_Cancel']){
		formEls['btn_Cancel'].visible = false;
		formEls['btn_Cancel'].enabled = false;
	}
	if (formEls['btn_Save']){
		formEls['btn_Save'].visible = false;
		formEls['btn_Save'].enabled = false;
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"8BD00EEA-9B56-4860-9DB2-AB7CB69D2E2C"}
 */
function onActionEdit(event) {
	if (forms[event.getFormName()].onEdit){forms[event.getFormName()].onEdit(event,true)}
	databaseManager.setAutoSave(false);	
	formModeEdit(event);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"7244C4DA-2CB9-4277-9D14-1475F213FD8F"}
 */
function onActionCancelEdit(event) {
	if (forms[event.getFormName()].onEdit){forms[event.getFormName()].onEdit(event,false)}
	databaseManager.revertEditedRecords();
	//databaseManager.setAutoSave(true);
	formModeCancel(event);
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3482DAE1-3AA8-4BFF-8C84-57BAE8802433"}
 * @AllowToRunInFind
 */
function onActionSaveEdit(event) {
	if (forms[event.getFormName()].onEdit){forms[event.getFormName()].onEdit(event,false)}
	var formName = event.getFormName();
	databaseManager.saveData();
	if (formName.search('tenant_division') != -1){
		forms[formName].foundset.sort('logic_flag desc, association_name asc');
	}
	formModeCancel(event);
	//databaseManager.setAutoSave(true);
	
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"85EFBB5F-595A-4078-AFE8-2661EA574BA3"}
 * @SuppressWarnings(wrongparameters)
 */
function updateWindowFS(){
	if (application.isInDeveloper()){application.output('window '+application.getActiveWindow().getName())}
	var formRev = windowRev();
	if (formRev == ""){
		return;
	}
	var win = application.getActiveWindow();
	///var joe = win.controller
	var windowName = win.title;
	var windowCut = windowName.search(formRev)-1;
	
	windowName = windowName.slice(0,windowCut);
	if (application.isInDeveloper()){application.output(windowName)}
	if (application.isInDeveloper()){application.output(globals.aTrackWindows)}
	var tempLength = globals.aTrackWindows.length;
	var windowList = [];
	for (var index = 0; index < tempLength; index++){
		if (globals.aTrackWindows[index].search(windowName) != -1){
			windowList.push(globals.aTrackWindows[index]);
		}
	}
	for (index = 0;index < windowList.length;index++){
		if (application.getWindow(windowList[index])){
			application.output('window remain '+windowList[index]);
			win = application.getWindow(windowList[index]);
			var form = win.controller.getName();
			/** @type JSFoundSet */
			var fs = forms[form].foundset.sts_employee_container;
			fs.loadAllRecords();
			var newFS = fs.duplicateFoundSet();
			forms[form].controller.loadRecords(newFS);		
		}
	}
}
/**
 *
 * @properties={typeid:24,uuid:"18144C0E-C3C0-4FA6-B1B3-BE28A36CEBB8"}
 */
function windowRev(){
	var win = application.getActiveWindow();
	var formSplit = win.controller.getName().split("_");
	var formRev = formSplit[formSplit.length-1];
	return formRev;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D1D7CE4-2BA6-4116-99D0-3B33BF587D1F"}
 */
function onActionCloseModal(event) {
	var formName = event.getFormName();
	var win = forms[formName].controller.getWindow();
	win.hide();
	scopes.jobs.removeFormHist(event.getFormName()+' table');
	//stopWindowTrack();
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"ABD9D8FD-0BCD-42E8-BBC3-913C100812D4"}
 * @AllowToRunInFind
 */
function loadZipCodeFile(event){
	var path = "C:\\";
	var zips = plugins.file.showFileOpenDialog(1, path, false);
	if (zips){
		var zipList = [];
		/** @type {JSFoundSet<db:/stsservoy/zipcodes>} */
		var zipFS = databaseManager.getFoundSet('stsservoy','zipcodes');
		zipFS.loadRecords();
		var recIndex = 1;
		while (recIndex <= zipFS.getSize()){
			rec = zipFS.getRecord(recIndex);
			zipList.push(rec.zipcode_id);
			recIndex++;
		}
		var openZips = plugins.file.readTXTFile(zips);
		var zipLines = openZips.split('\n');
		var zipCount = zipLines.length;
		var index = 0;
		var count = 20;
		databaseManager.setAutoSave(false);
		databaseManager.startTransaction();
		for (index = 1; index < zipCount;index++){

			var zipInfo = zipLines[index];
			application.output(zipInfo);
			if (count == 0){// administrative clear of foundset. speed up data additions?
				zipFS.clear();
				count = 20;
				databaseManager.commitTransaction();
				databaseManager.saveData(zipFS);
				databaseManager.startTransaction();
			}
			zipInfo = zipInfo.split(',');
			var decommed = zipInfo[7];
			if (decommed == "1"){continue}
			var zipLength = zipInfo.length;
			var zipNumber = zipInfo[0];
			var zipType = zipInfo[1];
			var zipCity = zipInfo[2]
			var zipState = zipInfo[3];
			var zipCounty = zipInfo[4];
			var zipCountry = zipInfo[6];
			//application.output('zip:'+zipNumber+' type:'+zipType+' city:'+zipCity+ ' state: '+zipState+' county:'+zipCounty+' country:'+zipCountry);
			if (zipList.indexOf(zipNumber) != -1){
				application.output('found '+zipNumber);
			} else {

				application.output('missing '+zipInfo);
				//continue;
				zipFS.newRecord();
				var rec = zipFS.getSelectedRecord();
				rec.primary_city = zipCity;
				rec.country = zipCountry;
				rec.zipcode_id = zipNumber;
				rec.state = zipState;
				if (rec.county != ""){rec.county = zipCounty;}
				rec.ziptype = zipType;
				count--;
			}
		}
		databaseManager.commitTransaction();
		databaseManager.saveData(zipFS);
	}
	application.output('total zip line size is '+zipLines.length);
}
/**
 * @param assocId
 *
 * @properties={typeid:24,uuid:"4A36187E-1368-4475-A412-4B5CD4A20BF8"}
 * @SuppressWarnings(wrongparameters)
 */
function getAssocCorporate(assocId){
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var q = databaseManager.createSelect('db:/stsservoy/associations');
	q.where.add(q.columns.association_uuid.eq(assocId));
	q.where.add(q.columns.tenant_group_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.tenant_group_uuid.eq(assocId));
	var fs = databaseManager.getFoundSet(q);
	if (fs.getSize() != 0){
		var rec = fs.getRecord(1);
		return (!rec.logic_flag) ? false : true;
	} else {
		return false;
	}
	
}
/**
 * @param namedVar
 *
 * @properties={typeid:24,uuid:"873B0310-62CA-4B0A-BC08-C07DEF16BC6A"}
 */
function trackURL(namedVar){
	application.output('tracked URL is '+namedVar);
}
/**
 * @param {JSEvent} event
 * @param {Array} elementArray
 *
 * @properties={typeid:24,uuid:"0BFC2C99-F21D-44A5-B1F5-7BB14FBD003F"}
 * @AllowToRunInFind
 */
function savePrefsLocal(event,elementArray){
	var formName = event.getFormName();
	var prefArray = [];
	if (elementArray){
		prefArray = prefArray.concat(elementArray);
	}
	for (var el in forms[formName]){
		if ((elementArray && elementArray.indexOf(el) != -1) ||
			el.search('pref') != -1){//if there is a pref variable in the form, save preference value
			prefArray.push(el);
		}
	}
	if (prefArray.length == 0){return}
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var q = databaseManager.createSelect('db:/stsservoy/preferences2');
	q.result.add(q.columns.preferences2_id);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.form_name.eq(formName));
	var Q = databaseManager.getFoundSet(q);
	var index = 0;
	/** @type {JSRecord<db:/stsservoy/preferences2>} */
	var rec;
	var changedSet = false;
	var checkedArray = new Array();
	index = 1;
	while (rec = Q.getRecord(index++)){
		var fldName = rec.field_name;
		checkedArray.push(fldName);
		var fldVal = rec.field_value;
		var localVal = forms[formName][fldName];
		if (fldVal != localVal){
			rec.field_value = localVal;
			rec.edit_date = new Date();
			changedSet = true;
		}
	}
	var dataProv = '';
	application.output(checkedArray);
	while (dataProv = prefArray.pop()){
		if (checkedArray.indexOf(dataProv) == -1){
			changedSet = true;
			var idx = Q.newRecord();
			rec = Q.getRecord(idx);
			rec.tenant_uuid = globals.session.tenant_uuid;
			rec.form_name = formName;
			rec.edit_date = new Date();
			rec.field_name = dataProv;
			rec.field_type = (typeof forms[formName][dataProv]);
			rec.field_value = forms[formName][dataProv];
		}
	}
	if (changedSet){
		databaseManager.saveData(Q);
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"2749BA2C-9936-4D54-8FF4-D014FBC54608"}
 */
function restorePrefsLocal(event){
	var formName = event.getFormName();
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var q = databaseManager.createSelect('db:/stsservoy/preferences2');
	q.result.add(q.columns.preferences2_id);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.form_name.eq(formName));
	var Q = databaseManager.getFoundSet(q);
	var index = 1;
	/** @type {JSRecord<db:/stsservoy/preferences2>} */
	var rec;
	while (rec = Q.getRecord(index++)){
		var fldName = rec.field_name;
		if (forms[formName][fldName] && rec.field_value != ''){
			forms[formName][fldName] = rec.field_value;
		}
	}
}
/**
 * @param {String} dateString
 *
 * @properties={typeid:24,uuid:"0FA3E913-4714-4A86-B15C-9422D60B9EBB"}
 */
function getDateTime(dateString){
	var dt = dateString.split('/');
	if (dt.length != 3){return null}
	var dated = new Date('20'+dt[2],dt[0]-1,dt[1]-1,12,0,0,0);
	return dated;
}
/**
 * @param {JSEvent} event
 * @param {String} i18nString
 *
 * @properties={typeid:24,uuid:"87BF46A4-C111-4248-A26A-38E104B8A15E"}
 */
function confirmDialog(event,i18nString){
	globals.doDialog(i18n.getI18NMessage(i18nString),
		i18n.getI18NMessage(i18nString),
		i18n.getI18NMessage('sts.btn.yes'),
		i18n.getI18NMessage('sts.txt.cancel'));
		//'Delete Selected Records','Delete the Selected Records?','Delete','Cancel');
	if (globals.dialogResponse.toLowerCase() != 'yes'){
		//application.output('delete cancelled');
		return false;
	}
	//application.output('ask second question');
	globals.doDialog(i18n.getI18NMessage(i18nString),
			i18n.getI18NMessage('sts.txt.are.you.sure'),
			i18n.getI18NMessage('sts.txt.cancel'),
			i18n.getI18NMessage('sts.btn.yes'));
	//'Delete Selected Records','This is a permanent delete. Continue with deletion?','Cancel','Delete');
	if (globals.dialogResponse.toLowerCase() == 'yes'){
		//application.output('delete aborted');
		return false;
	}
	return true;
}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"D499405C-B506-44D5-8C16-7B082F1A816C"}
 */
function getDataSetForValueList(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
	var args = null;
	/** @type QBSelect<db:/example_data/employees> */
	var query = databaseManager.createSelect('db:/example_data/employees');
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) {
		// TODO think about caching this result. can be called often!
		// return the complete list
		query.result.add(query.columns.firstname.concat(' ').concat(query.columns.lastname)).add(query.columns.employeeid);
		result = databaseManager.getDataSetByQuery(query, 100);
	} else if (displayValue != null) {
		// TYPE_AHEAD filter call, return a filtered list
		args = [displayValue + "%", displayValue + "%"];
		query.result.add(query.columns.firstname.concat(' ').concat(query.columns.lastname)).add(query.columns.employeeid).root.where.add(query.or.add(query.columns.firstname.lower.like(args[0] + '%')).add(query.columns.lastname.lower.like(args[1] + '%')));
		result = databaseManager.getDataSetByQuery(query, 100);
	} else if (realValue != null) {
		// TODO think about caching this result. can be called often!
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		query.result.add(query.columns.firstname.concat(' ').concat(query.columns.lastname)).add(query.columns.employeeid).root.where.add(query.columns.employeeid.eq(args[0]));
		result = databaseManager.getDataSetByQuery(query, 1);
	}
	return result;

}

/**
 * @AllowToRunInFind
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"939EBF9D-EB98-4C2C-8275-52D576C7211D"}
 */
function stopWindowTrackEvent(event){
	if (!event){return}
	var formName = event.getFormName();
	var win = forms[formName].controller.getWindow();
	if (!win){return}
	var winName = win.getName();
	setWindowClosedByName(winName);
	win.hide();
	
	
	scopes.globals.logger(true,i18n.getI18NMessage('sts.txt.window.closed',new Array(winName)));

	if (formName.search(/_[0-9]+/) != -1){
		var success = history.removeForm(formName);	//removes the named form from this session, please make sure you called history.remove() first
		if(success){
			solutionModel.removeForm(formName);
		}
	}
	return;
}
/**
 * @AllowToRunInFind
 * 
 * @param {String} windowName
 *
 * @properties={typeid:24,uuid:"918332A9-B084-4E50-8CEE-69EB6BA56344"}
 */
function setWindowClosedByName(windowName){
	var windowNameAlt = windowName.replace(/_/g,' ');
	if (windowName.search('STS - Main') == 0){return}
	var tempArray2 = new Array;
	//tempArray2 = globals.aTrackWindows;
	var tempLength = globals.aTrackWindows.length;

	for (var index = 0; index < tempLength; index++){
		var windowName2 = globals.aTrackWindows[index];
		if (windowName.search(windowName2) != 0 && windowNameAlt.search(windowName2) != 0){
			tempArray2.push(windowName2);
		}
	}
	globals.aTrackWindows = tempArray2;
	application.setValueListItems('stsvl_nav_windows',tempArray2);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"D8CA4A32-E5BE-45F9-88AA-7F03275F6AD5"}
 */
function createPostGreSqlIndexes(){
	//plugins.rawSQL.executeSQL('stsservoy','jobs','');
	plugins.rawSQL.executeSQL('stsservoy', 'jobs','DROP INDEX IF EXISTS job_idx;');
	plugins.rawSQL.executeSQL('stsservoy', 'jobs','DROP INDEX IF EXISTS import_tab_idx;');
	plugins.rawSQL.executeSQL('stsservoy', 'jobs','DROP INDEX IF EXISTS import_guid_idx;');
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY bundle_idx ON idfiles (bundle_bc NULLS LAST);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY ship_idx ON idfiles (ship_load_id  NULLS LAST);');
	} catch (e) {}

	
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'jobs', 'CREATE INDEX CONCURRENTLY jobs_idx ON jobs (job_number);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','import_table','CREATE INDEX CONCURRENTLY import_tab_idx ON import_table (job_number,parent_piecemark,piecemark);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','import_guids','CREATE INDEX CONCURRENTLY import_guid_idx ON import_guids (assem_guid,part_guid);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','piecemarks','CREATE INDEX CONCURRENTLY piecemark_idx ON piecemarks (sheet_id,parent_piecemark,piecemark);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_idx ON idfiles (sequence_id,piecemark_id);');
	} catch (e) {}
	
}