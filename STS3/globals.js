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
var compileDate = "2013.01.01";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"019BA213-87C9-4DE4-8AD5-F01DADDBE917"}
 */
var compileTime = "00:00:00";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9E3C988C-F438-48E1-80E7-0060051093A1"}
 */
var cSwitch = "PC";
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
		uomarray[1] = "CWT";
		uomarray.push("EACH");
		uomarray.push("LBS");
		uomarray.push("LNFT");
		uomarray.push("METR");
		uomarray.push("MTON");
		uomarray.push("MTR2");
		uomarray.push("PNLS");
		uomarray.push("SQFT");
		uomarray.push("TON");
	}
}
//--------------------------------------------------------------------------------------
/**
 * @properties={typeid:35,uuid:"75DABA6A-1EB2-4E4E-BCA4-6B65DF8804B7",variableType:-4}
 * @type aStatusTypes {Array} Status condition types
 */
var aStatusTypes = new Array;
/**
 * @properties={typeid:35,uuid:"0A0B01AA-138B-4C3F-85E0-1EBE650867EE",variableType:-4}
 * @type aTrackWindows {Array} Windows lists
 */
var aTrackWindows = ["STS - Main"];
/**
 * @properties={typeid:24,uuid:"E55D375F-2EA8-4D4E-8234-B7AF6A47619E"}
 */
//do not resort this array, needed in this order for export to tekla
/**
 * @properties={typeid:24,uuid:"DB2DE8B0-A170-4F59-A02B-81575B60B3FF"}
 */
function initStatusTypes(){
	if (aStatusTypes.length == 0){
		aStatusTypes.push("None");
		aStatusTypes.push("Fab Raw Received");
		aStatusTypes.push("Fab Receive");
		aStatusTypes.push("Fab Cut");
		aStatusTypes.push("Fab Beam Line");
		aStatusTypes.push("Fab Blased");
		aStatusTypes.push("Fab Drilled");
		aStatusTypes.push("Fab Layout");
		aStatusTypes.push("Fab Fitup");
		aStatusTypes.push("Fab Welded");
		aStatusTypes.push("Fab 1stInspect");
		aStatusTypes.push("Fab 2ndInspect");
		aStatusTypes.push("Fab 3rdInspect");
		aStatusTypes.push("Fab 4thInspect");
		aStatusTypes.push("Fab Inspected");
		aStatusTypes.push("Fab Fabricated");
		aStatusTypes.push("Fab Paint");
		aStatusTypes.push("Fab Bundled");
		aStatusTypes.push("Fab Move");
		aStatusTypes.push("Fab Transfer");
		aStatusTypes.push("Fab Loading");
		aStatusTypes.push("Fab Loaded");
		aStatusTypes.push("Fab LoadVerify");
		aStatusTypes.push("Fab Ship");
		aStatusTypes.push("Galvanizer Received");
		aStatusTypes.push("Galvanizer Shipped");
		aStatusTypes.push("Galvan LoadVerify");
		aStatusTypes.push("Painter Received");
		aStatusTypes.push("Painter Shipped");
		aStatusTypes.push("Paint LoadVerify");
		aStatusTypes.push("FireProofer Received");
		aStatusTypes.push("FireProofer Shipped");
		aStatusTypes.push("FireProof LoadVerify");
		aStatusTypes.push("Other Received");
		aStatusTypes.push("Other Shipped");
		aStatusTypes.push("Other LoadVerify");
		aStatusTypes.push("Jobsite Received");
		aStatusTypes.push("Jobsite Shipped");
		aStatusTypes.push("Jobsite LoadVerify");
		aStatusTypes.push("Jobsite Inspected");
		aStatusTypes.push("Jobsite Painted");
		aStatusTypes.push("Jobsite Field Work");
		aStatusTypes.push("Jobsite Move");
		aStatusTypes.push("Jobsite Issued");
		aStatusTypes.push("Jobsite Erected");
	}
}
/**
 * @properties={typeid:35,uuid:"0FA5E1F6-D008-4A83-8DDE-0D72F434B116",variableType:-4}
 */
var aLaborCodes = [];
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C8E73EE3-0C3E-484C-ADE7-ECF0D06813E7"}
 */
function doLogout(event) {
	globals.doDialog("Exit Steel Tracking System","Exit STS program?","Exit","Cancel");
	if (globals.dialogResponse == "yes"){
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
			application.showURL("http://" + application.getHostName() + "/webclient.html", "_top");
		}	    	  
	} else {
		globals.secLogout('STS3','','');
	}
	security.logout();
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
		if (fs.tenant_uuid != globals.secCurrentTenantID){continue}
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
var aOpenWindows = ["STS - Main Window"];
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
		if (fs.tenant_uuid != globals.secCurrentTenantID){continue}
		if (fs.association_id != globals.secCurrentAssociationID){continue}
		if (aStatusCodes.indexOf(fs.status_code) == -1){
			aStatusCodes.push(fs.status_code);
		}
	}
	application.setValueListItems('stsvl_status_code',aStatusCodes);
}
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
var popupName = "MASTEREDIT";
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
var cssMessage = "Fully Registered LAN Version.";

//-------------------------------------------------------------------------------------------------------
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76D088DC-9D24-43BE-8D42-6B30046D8575"}
 */
var action = "Cancel";
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
var lanVersion = "TESTING";
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
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"D0109E13-1A5A-42E8-91A7-1211E35A99EC"}
 */
function onSolutionOpen() {
	application.output('globals onSolutionOpen opened. STS3/globals.js');
	plugins.UserManager.updateClientInfo();
	APPLICATION_NAME = application.getSolutionName();
	secCreateApplication('STSmobile');
	var mobileID = secGetApplicationID('STSmobile');
	application.output('mobile id '+mobileID);

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
			application.output("CHANGED to REMOTE Database.");
		} else {
			application.output('FAILED change to REMOTE Database.')
		}
		current_db = new_project_db;
	} else {
		application.output('USING local development Database.')
	}
	application.output('okay, here2 '+APPLICATION_NAME);
	
	application.overrideStyle('baseStyle', 'sts_one'); // was baseStyle
	secSetCurrentApplication(secGetApplicationID(APPLICATION_NAME));
	secCurrentUserID = security.getUserUID();
	secCurrentTenantID = sec_current_user.tenant_uuid; 
	scopes.globals.mobTenantId = secCurrentTenantID; 
	secCurrentAssociationID = sec_current_user.association_uuid;
	//secCurrentAssociationMasterID = secGetCurrentMasterAssociation(secCurrentTenantID);
	//secSetCurrentApplication(17); // 17 is already STS, could be anything
	application.output('assoc master '+secCurrentAssociationMasterID+' assoc '+secCurrentAssociationID+' tenant '+secCurrentTenantID);
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
	session.loginId = sec_current_user.user_id;
	session.tenant_uuid = secCurrentTenantID;
	session.sessionId = security.getClientID();
	session.sessionIp = application.getIPAddress();
	session.program = "STS Desktop";
	session.login = session.loginUserNum;
	session.loginDate = new Date();
	session.capture;
	getLoggedEmployee(session.loginId);
	loginUserInfo(secCurrentUserID);
	globals.getAssociation(secCurrentAssociationID);
	session.association = mobAssoc;
	onStartLoadPrefs("");	
	globals.getMappings();
	application.setValueListItems('stsvl_fab_shop',l.assocs);
	databaseManager.addTableFilterParam('stsservoy',null,'tenant_uuid','=',globals.secCurrentTenantID,'filterCurrentTenant');
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
/**
 * @param s
 *
 * @properties={typeid:24,uuid:"8C60BFB7-E653-4F70-BBF2-05337CF0959B"}
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
}
/**
 * @AllowToRunInFind
 * 
 * @param userId
 *
 * @properties={typeid:24,uuid:"BF5D68D1-CB2D-496A-8414-BE0D7E84040D"}
 */
function loginUserInfo(userId){
	application.output('useruseruser '+userId);
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var fs = databaseManager.getFoundSet(globals.SEC_SERVER,'employee');
	if (fs.find()){
		fs.employee_userid = userId;
		fs.search();
		var rec = fs.getRecord(1);
		if (rec){
			session.loginUser = rec.employee_firstname;
			session.loginUserNum = rec.employee_number;
			//session.fullName = "";
			//if (!rec.employee_firstname){session.fullName += rec.employee_firstname}
			//if (!rec.employee_lastname){session.fullName += rec.employee_lastname}
			session.logging = (rec.employee_rf_logging == 1) ? 0 : 1;
			session.rfLogging = (rec.employee_save_rftransaction == 1) ? 0 : 1;
		} else {
			
		}
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
	scopes.globals.logger(true,winName+' closed.');
	var formName = win.controller.getName();
	win.hide();
	if (formName.search(/_[0-9]+/) != -1){
		var success = history.removeForm(formName);
		//removes the named form from this session, please make sure you called history.remove() first
		if(success)
		{
			solutionModel.removeForm(formName)
		}
	}
	return true;
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
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A6F4FD9B-D10C-4BFD-9ADB-89DAA8CBDCD7"}
 */
function unusedonStartLoadPrefs(){
	//var prefs = scopes.prefs;
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var fs = databaseManager.getFoundSet('stsservoy','preferences2');
	if (fs.find()){
		fs.user_id = -1;
		fs.tenant_uuid = globals.secCurrentTenantID;
		var recIndex = 1;
		var recCount = fs.search();
		recCount = databaseManager.getFoundSetCount(fs);
		var record = null;
		while (recCount > 0 && recIndex < recCount){
			//while (recCount > 0 && recIndex <= recCount){
			record = fs.getRecord(recIndex);
			if (record.field_type == "boolean"){
				scopes.prefs[record.field_name] = record.field_value == "true" ? true : false;
			} else {
				scopes.prefs[record.field_name] = record.field_value;
			}
			recIndex++;
		}

	}
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
		globals.aOpenWindows.push(windowName);
		//application.setValueListItems('xsts_nav_openWindows',globals.aOpenWindows);
	//application.output(globals.aOpenWindows); //joeremove
		application.setValueListItems('sts_nav_openWindows',globals.aOpenWindows);
//sts_nav_openWindows
	}
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
	var ignoreTableList = 'associations users groups keys group_keys keys_table permissions tenant_list user_groups ';
	
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
	var count = parseInt(plugins.UserManager.Server().getSettingsProperty('licenseManager.numberOfLicenses'), 10);
	if(count) {
		for (var i = 0; i < count; i++) {
			if (parseInt(plugins.UserManager.Server().getSettingsProperty('license.' + i + '.product'), 10) == 1){continue}//developer license
			number += parseInt(plugins.UserManager.Server().getSettingsProperty('license.' + i + '.licenses'), 10);
		}
	}
	/** @type {JSFoundSet<db:/stsservoy/tenant_list>} */
	var tenantFS = getTenantFS();
	if (tenantFS.getSize() > 1){
		if (tenantFS.find()) {
			tenantFS.tenant_uuid = globals.session.tenant_uuid;
			if (tenantFS.search()){
				number = tenantFS.licenses;
			}
		}
	}
	return number;
}
/**
 * @properties={typeid:24,uuid:"FEED84CF-DF1F-429D-BA95-A3B87E94AE80"}
 * @SuppressWarnings(wrongparameters)
 */
function getTenantFS(){
	/** @type {QBSelect<db:/stsservoy/tenant_list>} */
	var q = databaseManager.createSelect('db:/stsservoy/tenant_list');
	q.result.add(q.columns.company_name);
	q.result.add(q.columns.tenant_uuid);
	//q.result.add(q.columns)
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		//.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
	);
	var resultQ = databaseManager.getFoundSet(q);
	return resultQ;
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
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.association_uuid.isin(assocIds))
	);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/associations>} */
		var rec = resultQ.getRecord(index);
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
	}
	if (formEls['btn_Cancel']){
		formEls['btn_Cancel'].visible = false;
	}
	if (formEls['btn_Save']){
		formEls['btn_Save'].visible = false;
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
	}
	if (formEls['btn_Cancel']){
		formEls['btn_Cancel'].visible = true;
	}
	if (formEls['btn_Save']){
		formEls['btn_Save'].visible = true;
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
	}
	if (formEls['btn_Cancel']){
		formEls['btn_Cancel'].visible = false;
	}
	if (formEls['btn_Save']){
		formEls['btn_Save'].visible = false;
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"8BD00EEA-9B56-4860-9DB2-AB7CB69D2E2C"}
 */
function onActionEdit(event) {
	//forms[event.getFormName()].onEdit(event,true);
	databaseManager.setAutoSave(false);	
	formModeEdit(event);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"7244C4DA-2CB9-4277-9D14-1475F213FD8F"}
 */
function onActionCancelEdit(event) {
	//forms[event.getFormName()].onEdit(event,false);
	databaseManager.revertEditedRecords();
	databaseManager.setAutoSave(true);
	formModeCancel(event);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3482DAE1-3AA8-4BFF-8C84-57BAE8802433"}
 */
function onActionSaveEdit(event) {
	//onEdit(event,false);
	databaseManager.saveData();
	//databaseManager.setAutoSave(true);
	
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"85EFBB5F-595A-4078-AFE8-2661EA574BA3"}
 * @SuppressWarnings(wrongparameters)
 */
function updateWindowFS(){
	application.output('window '+application.getActiveWindow().getName());
	var formRev = windowRev();
	if (formRev == ""){
		return;
	}
	var win = application.getActiveWindow();
	///var joe = win.controller
	var windowName = win.title;
	var windowCut = windowName.search(formRev)-1;
	
	windowName = windowName.slice(0,windowCut);
	application.output(windowName);
	application.output(globals.aTrackWindows);
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