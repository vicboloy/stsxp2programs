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
//TODO When pushing tables to remote sts, the UUID is left out.  Need to automate distribution.
//------------------ Public Variables from STS ---------------------------------------
//Version-----------------------------------------------------------------------------
/**
 * @properties={typeid:35,uuid:"FE89CF50-1B43-46F8-A8DD-250A8C617C79",variableType:-4}
 */
var change_to_remote = false;
/**
 * @properties={typeid:35,uuid:"6ACA8CE7-B08B-45EA-80DD-C6543E3393A0",variableType:-4}
 */
var debug = false;
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
var aTrackWindows = new Array;
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
 * @properties={typeid:24,uuid:"5F61D7B0-929D-4EF0-A151-60BA15B93690"}
 */
function initLaborCodes(){
	aLaborCodes = [];
	aLaborCodes.push('<None>');
	/**@type {JSFoundSet<db:/stsservoy/labor_codes>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/labor_codes');
	fs.loadAllRecords();
	for (var index = 1;index <= fs.getSize();index++){
		fs.setSelectedIndex(index);
		aLaborCodes.push(fs.labor_code);
	}
	application.setValueListItems('stsvl_labor_code',aLaborCodes);
}
/**
 * @properties={typeid:35,uuid:"DB46C8F5-C5AC-416D-B39E-626D3A727099",variableType:-4}
 */
var aStatusCodes = [];
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
		aStatusCodes.push(fs.status_code);
	}
	application.setValueListItems('stsvl_status_code',aStatusCodes);
}
//Globals------------------------------------------------------------------------------
/**
 * @properties={typeid:35,uuid:"E1DC94D2-8655-4C50-9A57-2658AD82EFB6",variableType:-4}
 */
var promptFabShop = false;
/**
 * @properties={typeid:35,uuid:"B007F807-72DF-4D25-8E3B-69DDD61AF26B",variableType:-4}
 */
var lFabtrolInstalled =false;

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
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"D0109E13-1A5A-42E8-91A7-1211E35A99EC"}
 */
function onSolutionOpen() {
	databaseManager.nullColumnValidatorEnabled = false;
	var success = false;
	current_db = "stsservoy";
	new_project_db = "stsservoy_remote";
	//new_project_db = "";
	if (globals.change_to_remote) {
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
	
	application.overrideStyle('baseStyle', 'sts_one'); // was baseStyle
	globals.secSetCurrentApplication(globals.secGetApplicationID(APPLICATION_NAME));
	globals.secCurrentUserID = security.getUserUID();
	globals.secCurrentTenantID = sec_current_user.tenant_uuid;
	var tenantID = sec_current_user.tenant_uuid;
	secSetCurrentTenant(tenantID);
	getTablesFilters(tenantID);	
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
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8DA2C40-ECF1-4137-9F4E-1778F13040AE"}
 */
function onActionCancelButton(event) {
	// Generic close on Cancel
	var win = application.getActiveWindow();
	win.hide();
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
	var dirs = plugins.file.showFileOpenDialog(2, "\\", false, null);
	var path = dirs.getAbsolutePath();
}
//----------------------------------------
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC04042B-4656-4CB8-A49A-80DF6FA28D94"}
 */
var APPLICATION_NAME = 'Servoy Security Example';

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
 * TODO generated, please specify type and doc for the params
 * @param windowName
 *
 * @properties={typeid:24,uuid:"DA5676A8-77BE-4A25-86C3-B1FF6FE993E5"}
 */
function setWindowOpened(windowName){
	if (globals.aOpenWindows[windowName] == null) {
		globals.aOpenWindows[windowName] = true;
		//application.setValueListItems('xsts_nav_openWindows',globals.aOpenWindows);
		application.setValueListItems('sts_nav_openWindows',globals.aOpenWindows);

	}
	application.output(globals.aOpenWindows); //joeremove
}
/**
 * Set tenant filters on applicable tables to enable access to creating more tenants, but not view other information.  This expressly leaves out the 
 * tenant table, filtering all other tables which reference the current login's tenant.
 * 
 * Delete flag is set as well for the entire database.
 *
 * @properties={typeid:24,uuid:"1261FFFE-27A8-4F4B-8986-6B13DF623AC6"}
 */
function getTablesFilters(tenantID) {
	var tableNames = databaseManager.getTableNames(SEC_SERVER);
	var tableName = "";
	var controlledTable = false;
	for (var index = 0;index < tableNames.length; index++){
		tableName = tableNames[index];
		if (tableName == 'tenant_list'){continue}
		var dataSource = 'db:/'+SEC_SERVER+'/'+tableName; 
		var jsTableColumns = databaseManager.getTable(dataSource);
		var tableColumn = jsTableColumns.getColumn('tenant_uuid');
		if (tableColumn == null){continue}
		tableFilter = 'Filter_'+tableName;
		//application.output('table '+tableName+' filter '+tableFilter)
		databaseManager.addTableFilterParam(SEC_SERVER,tableName,'tenant_uuid','=',tenantID,tableFilter);
	}
	// Enable filter of all deleted records.
	databaseManager.addTableFilterParam(SEC_SERVER,null,'delete_flag','!=',0,'enableDelete');
 }