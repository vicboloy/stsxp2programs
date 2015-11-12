/**
 * print is driven off of the criteria page
 * 
 * only if selection criteria exists and a foundset exists
 * 
 */
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"AC0CD874-923E-4E0E-9313-6870D5AAF1C7"}
  */
 var vCustNum = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"36CBEEF2-CBAC-476B-BE66-0EE01011D7B8"}
  */
 var vCustomerName = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"DAA5D9F6-D99D-481B-81DA-25FD061F1BA0"}
  */
 var vCustomerID = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"58F76BD6-9214-4EB9-AA7F-49EDBDE6710F"}
  */
 var vJobNum = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"FBA4F714-2959-4E1F-AC3F-0433ED749947"}
  */
 var vJobName = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"2A4B4802-F2D7-4EE3-8E6F-CA342EDF945C"}
  */
 var vJobID = "";
 /**
  * @type {Number}
  *
  * @properties={typeid:35,uuid:"7AF76063-15FF-4FD5-BC01-7A1F54BF8C13",variableType:4}
  */
 var vLabIDNums = 0;
 /**
  * @type {Number}
  *
  * @properties={typeid:35,uuid:"FF564B38-FF08-4C15-A51B-0C26FD067597",variableType:4}
  */
 var vLabTotPieces = 0;
 /**
  * @type {Number}
  *
  * @properties={typeid:35,uuid:"BF602A18-B0BB-4630-87B3-7DBFC6B1056C",variableType:4}
  */
 var vLabTotalWt = 0;
 /**
  * @type {Number}
  *
  * @properties={typeid:35,uuid:"BFC378CF-CD76-4CE0-BE2F-D64D2555664E",variableType:4}
  */
 var vLabNumPcmks = 0;
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"A2BA7E51-2C08-4568-8AA2-AF2D1F9AA920"}
  */
 var vSeqNum = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"3D22B3D1-A170-4D6F-BC8E-7076E263F6E8"}
  */
 var vSheetNum = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"8BD39602-C78C-4C9C-B71B-E399D3764ACC"}
  */
 var vSONum = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"7F681D70-C1DF-4F11-BA22-DFB33564E961"}
  */
 var vLoadNum = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"2CAF8A60-DEAD-41DD-A44A-840F1BA12DFC"}
  */
 var vLotNum = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"6C313F73-723D-429B-9C40-F95C2DA71AAA"}
  */
 var vPkgNum = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"6B76A9D6-443B-4CBD-90F8-66F77278493E"}
  */
 var vLoadAll = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"1D87A01C-9E8C-4230-93BD-F0EE41A6B5D6"}
  */
 var vLoadRel = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"FF1C1F05-6965-476E-8459-D534FDF00119"}
  */
 var vPiecemark = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"6DA758E7-6B58-4951-AC9A-7BECF94C7147"}
  */
 var vPcmkRel = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"4CDF92F5-5441-4CB6-980C-04EF6F480BA9"}
  */
 var vFabShop = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"895C6C58-C989-4616-8F00-A910BE3F5154"}
  */
 var vJobRel = ""
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"FDE882D3-0501-43F3-B1CB-CAB7651E6277"}
  */
 var vArea = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"9369436B-3089-48B5-A424-F94756A643B4"}
  */
 var vBatch = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"3AA69E78-045D-4B36-A573-5FFB8F4DA435"}
  */
 var vCowCode = "";
 /**
  * @type {String}
  *
  * @properties={typeid:35,uuid:"DADC87AA-4A16-4F08-BC70-76FDBD68375F"}
  */
 var vUnits = "";
 /**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4AE46672-91DE-4270-9628-65994D66516F",variableType:4}
 */
var vIncludeMinor = 0;
 /**
  * @properties={typeid:35,uuid:"86B398BF-FBEB-4846-A281-664D51FA0B76",variableType:-4}
  */
 var vJobMetric = true;
 /**
  * @properties={typeid:35,uuid:"C7603E29-E6E0-425F-BCCD-A9F17F78D1B5",variableType:-4}
  */
 var jobFound = false;
 /**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CEA0FC53-21A0-4C70-86CB-867DCA0B0F39"}
 */
var printingLabel = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8B5DEF06-E77B-4BF4-952F-54FB7992E941"}
 */
var labelPrintOrder = "Piece Mark";

 
 /**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8E7F0FB-EDC8-49A9-9958-91E34DDFBC29"}
 */
function onShow(firstShow, event) {
	//application.output('load printer order label');
	scopes.printer.loadPrintOrder();
	scopes.prefs.getBTLabelFormats();
	//scopes.prefs.getLabelFormats();
	printingLabel = scopes.printer.default_label_name;
}
 
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A786F20-292F-4BD4-BBD5-3F25A07EE1A4"}
 */
function onActionPrint(event) {
	scopes.jobs.onGetInformation(event,false);
	var formName = 'barcode_piecemark_info';
	var winTitle = "Print Selected Labels";
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var win = application.createWindow(winTitle, JSWindow.MODAL_DIALOG);
	win.setInitialBounds(xOrigin+10, yOrigin+10, width, height);
	win.title = winTitle;

	win.show(forms[formName]);
	scopes.jobs.removeFormHist(formName+'_table');
}
/**
 * TODO generated, please specify type and doc for the params
 * @param formName
 *
 * @properties={typeid:24,uuid:"3989EEE5-5DE2-492A-8456-D9EB616B8A63"}
 */
function collectCriteria(formName){
	// feeds jobs.viewBTableToForm()
	var area = scopes.globals.arrayToString(vArea);
	var batch = scopes.globals.arrayToString(vBatch);
	var cowCode = scopes.globals.arrayToString(vCowCode);
	var fabShop = scopes.globals.arrayToString(vFabShop);
	var jobRel = scopes.globals.arrayToString(vJobRel);
	if (vLoadAll){
		var loadAll = null;
	} else {
		loadAll = scopes.globals.arrayToString(vLoadNum);
	}
	//application.output('vLoadRel '+vLoadRel);
	var loadRel = scopes.globals.convertLoadToId(vLoadRel);
	//application.output('loadRel '+loadRel);
	var lotNum = scopes.globals.convertLotToId(vLotNum);//ticket#7
	var pkgNum = scopes.globals.arrayToString(vPkgNum);//ticket#7, currently pkgNum is a FabTrol reference number
	var pcmkRel = scopes.globals.arrayToString(vPcmkRel);
	var pmark = scopes.globals.arrayToString(vPiecemark);
	var seqNum = scopes.globals.arrayToString(vSeqNum);
	var sheetNum = scopes.globals.arrayToString(vSheetNum);
	var soNum = scopes.globals.arrayToString(vSONum);
	var criteria = {
		area: area, 
		batch: batch,
		cowcode: cowCode,
		fabshop: fabShop,
		loadall : loadAll,
		loadrel : loadRel,
		lotnum : lotNum,
		pcmkrel : pcmkRel,
		piecemark : pmark,
		pkgnum : pkgNum,
		seqnum : seqNum,
		sheetnum : sheetNum,
		sonum : soNum
	}
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.viewBTableToForm(criteria,formName);
}