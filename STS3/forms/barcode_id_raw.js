/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5E6B20CD-CC41-47F6-A35E-589A4C58B4FF",variableType:4}
 */
var useLocalDirectory = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"565F0E00-E340-4BBA-B591-AA072A6D9491",variableType:4}
 */
var useLabeLasePrinter = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5E0B70F0-B9A0-4B84-8B4B-1BB9DC1AB722",variableType:4}
 */
var useBarTender = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"748A4E28-39F6-4739-90AD-DA3774125BFC"}
 */
var printerName = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2A19B5B3-C4AA-4214-9D3C-9CB0D2E48F09"}
 */
var labelName = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EBC4B8D0-259E-4EF1-85CF-BF0B94D2FA0A"}
 */
var localDir = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"51594784-1190-4D8A-8A4D-B33D65AE445F"}
 */
var labeLaseFormat = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A6A867D-4BF3-41FA-9245-EADFBFE43FC9",variableType:4}
 */
var useServerPrinters = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"411DE1E4-6BB2-458E-8148-766447E48F13",variableType:4}
 */
var allSerialNumbers = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A0CF2D15-27AF-45E5-8AC7-436D754CC034",variableType:4}
 */
var useWildCards = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"707C7C20-A885-42D1-9E8B-DE3F6F2EA45A",variableType:4}
 */
var allControlNumbers = 1;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC1F3669-10F4-407D-B735-64B0B7BF03D7"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	onActionClear(event);
	//application.output('load printer order label');
	if (firstShow){
		labelPrintOrder = i18n.getI18NMessage('sts.print.order.id.number');
		elements.useBarTender.enabled = (scopes.printer.barTender_installed == 1);
		useBarTender = (scopes.printer.barTender_installed == 1) ? 1 : 0;
		elements.useLabeLase.enabled = (scopes.printer.labeLaseInstalled == 1);
		//versionForm = globals.getInstanceForm(event);
		//baseForm = event.getFormName().replace(versionForm,'');
		globals.setFieldOrder(event);
		var printers = application.getPrinters().sort();
		application.setValueListItems('stsvl_get_printer_list',scopes.prefs.useServerPrinters(true));
	}
	if (application.isInDeveloper()){application.output('temp path '+scopes.printer.userTempPath);}
	localDir = scopes.printer.userTempPath;
	elements.writeTemp.enabled = (localDir != '');
	scopes.prefs.getBTLabelFormats();
	scopes.prefs.getLabeLaseLabelFormats();
	printerName = scopes.printer.rawMaterialPrinter;//.idBarcodePrinter;
	labelName = scopes.printer.rawMaterialLabelFormat;// idBarcodeLabelFormat;
	//application.output('scopes.printer.labelLaseFormat'+scopes.printer.idLabeLaseTemplate);
	labeLaseFormat = scopes.printer.rawLabeLaseTemplate;//idLabeLaseTemplate;
	//scopes.prefs.getLabelFormats();
	printingLabel = scopes.printer.default_label_name;
	//if (firstShow){
	scopes.jobs.formPermissions(event,true);
	//}
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4303B193-90CB-4C00-8D27-EB1572FCFEF4"}
 * @AllowToRunInFind
 */
function onActionPrint(event) {
	elements.frmServerPrinters.requestFocus();
	scopes.jobs.labelPrintStatus = event.getFormName();
	var printers = application.getValueListArray('stsvl_get_printer_list');
	var debug = 0;
	if (printers.indexOf(printerName) == -1){
		globals.DIALOGS.showErrorDialog('1252',i18n.getI18NMessage('1252'));//Selected Printer Not Available.  Please Select Another.
		return false;		
	}
	var fileBtw = plugins.file.getDefaultUploadLocation()+scopes.prefs.reportpath+'\\'+labelName;
	fileBtw = fileBtw.replace(/\/+/g,'\\').replace('.','');
	if (debug){application.output('fileBTW '+fileBtw);}

	var fileObj = plugins.file.createFile(fileBtw);
	if (!fileObj.exists()){
		globals.DIALOGS.showErrorDialog('1253',i18n.getI18NMessage('1253'));//BarTender File Does Not Exist. Please Select Another.
		return false;		
	}
	lastForm = event.getFormName();
	var resp = "Cancel";
	switch (event.getElementName()){
		case "btn_PrintAll":{
			scopes.jobs.tmp_Print = "ALL";
			resp = globals.DIALOGS.showSelectDialog('Print Selection','Select One Of The Following Options:',[i18n.getI18NMessage('sts.txt.print.barcodes.not.printed'),i18n.getI18NMessage('sts.txt.print.barcodes.all'),i18n.getI18NMessage('sts.txt.print.barcodes.none')]);
			if (!resp){resp = i18n.getI18NMessage('sts.txt.print.barcodes.none')}
			if (resp == i18n.getI18NMessage('sts.txt.print.barcodes.not.printed')){
				scopes.jobs.tmp_Print += ",P_UNPRINTED";
			} else if (resp == i18n.getI18NMessage('sts.txt.print.barcodes.all')){
				scopes.jobs.tmp_Print += ",P_ALLPRINT";				
			} else { // Print Cancelled
				globals.DIALOGS.showErrorDialog('Print Cancelled',i18n.getI18NMessage('7000'));
				return false;
			}
			break;
		}
		case "btn_Print":{
			scopes.jobs.tmp_Print = "ID";
			resp = globals.DIALOGS.showSelectDialog('Print Selection','Select One Of The Following Options:',[i18n.getI18NMessage('sts.txt.print.barcodes.not.printed'),i18n.getI18NMessage('sts.txt.print.barcodes.all'),i18n.getI18NMessage('sts.txt.print.barcodes.none')]);
			if (!resp){resp = i18n.getI18NMessage('sts.txt.print.barcodes.none')}
			if (resp == i18n.getI18NMessage('sts.txt.print.barcodes.not.printed')){
				scopes.jobs.tmp_Print += ",P_UNPRINTED";
			} else if (resp == i18n.getI18NMessage('sts.txt.print.barcodes.all')){
				scopes.jobs.tmp_Print += ",P_ALLPRINT";				
			} else { // Print Cancelled
				globals.DIALOGS.showErrorDialog('Print Cancelled',i18n.getI18NMessage('7000'));
				return false;
			}
			//if (vIDNumber == ""){return}
		}
		default:{
			scopes.jobs.tmp_Print = "SELECT";
		}
	}
	scopes.jobs.tmp_LabelSort = forms[event.getFormName()].labelPrintOrder;
	var returnWin = forms[event.getFormName()].controller.getWindow().getName();
	scopes.jobs.onGetInformation(event,false);
	versionForm = globals.getInstanceForm(event);
	var formName = 'barcode_piecemark_info';
	var formWidth = solutionModel.getForm(formName).width+10;
	if (event.getFormName().search('raw') == -1){
		var newFormName = formName+versionForm;
	} else {
		newFormName = formName+'_raw'+versionForm;
	}
	if (!forms[formName]){
		solutionModel.cloneForm(newFormName,solutionModel.getForm(formName));
	}
	var winTitle = 'Print Selected Labels'+versionForm;
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var win = application.createWindow(winTitle, JSWindow.DIALOG);
	win.setInitialBounds(xOrigin+10, yOrigin+10, formWidth, height);
	win.title = winTitle;

	elements.btn_PrintSelected.enabled = false;
	elements.btn_Clear.enabled = false;

	win.show(forms[newFormName]);
	scopes.jobs.removeFormHist(newFormName+'_table');
	elements.btn_PrintSelected.enabled = false;
	elements.btn_Clear.enabled = false;
	//var win2 = application.getWindow(returnWin);
	//if (win2){
	//	win2.toFront();
	//}
}

/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"5280D3E4-D850-444C-B86E-221435EE2A8E"}
 */
function collectCriteria(formName){
	if (vLoadAll){
		var loadAll = null;
	} else {
		loadAll = scopes.globals.arrayToString(vLoadNum);
	}
	
	criteria = {
		area: scopes.globals.arrayToString(vArea),
		areaa: scopes.globals.csvToArray(vArea),
		batch: scopes.globals.arrayToString(vBatch),
		batcha: scopes.globals.csvToArray(vBatch),
		controls : scopes.globals.csvToArray(vControlNumber),//raw material
		cowcode: scopes.globals.arrayToString(vCowCode),
		cowcodea:scopes.globals.csvToArray(vCowCode),
		fabshop: scopes.globals.arrayToString(vFabShop),
		fabshopa: scopes.globals.csvToFabshopID(vFabShop),
		heats : scopes.globals.csvToArray(vHeatNum),//raw material
		jobid : vJobID,
		location: scopes.globals.csvToArray(vLocation),//raw material
		loadall : loadAll,
		loadnum : vLoadNum,
		loadnuma : scopes.globals.csvToArray(vLoadNum),
		loadrel : scopes.globals.convertLoadToId(vLoadRel,false),
		loadrela : scopes.globals.csvToArray(vLoadRel),
		lotnum : scopes.globals.convertLotToId(vLotNum,false), //ticket#7
		lotnuma : scopes.globals.csvToArray(vLotNum),
		modelnums : scopes.globals.csvToArray(vModelPartNum),//raw material
		pcmkrel : scopes.globals.arrayToString(vPcmkRel),
		pcmkrela : scopes.globals.csvToArray(vPcmkRel),
		piecemark : vPiecemark,
		piecemarka : scopes.globals.csvToArray(vPiecemark),
		pkgnum : scopes.globals.arrayToString(vPkgNum), //ticket#7, currently pkgNum is a FabTrol reference number,
		pkgnuma : scopes.globals.csvToArray(vPkgNum),
		seqnum : scopes.globals.arrayToString(vSeqNum),
		seqnuma : scopes.globals.csvToArray(vSeqNum),
		serials : scopes.globals.csvToArray(vSerialNumRaw),//raw material
		sheetnum : scopes.globals.arrayToString(vSheetNum),
		sheetnuma : scopes.globals.csvToArray(vSheetNum),
		statusa : scopes.globals.csvToFabCodes(vFabShop),
		sonum : scopes.globals.arrayToString(vSONum),
		sonuma : scopes.globals.csvToArray(vSONum),
		sortby : labelPrintOrder,
		minors : vMinors // ticket #278
	}
	if (1==1){return criteria;}
	// feeds jobs.viewBTableToForm()
	var area = scopes.globals.arrayToString(vArea);
	var batch = scopes.globals.arrayToString(vBatch);
	var cowCode = scopes.globals.arrayToString(vCowCode);
	var fabShop = scopes.globals.arrayToString(scopes.globals.convertFabShopToStatusDescripId(vFabShop,true));
	var jobRel = scopes.globals.arrayToString(vJobRel);
	if (vLoadAll){
		var loadAll = null;
	} else {
		loadAll = scopes.globals.convertLoadToId(vLoadNum,true);
	}
	//application.output('vLoadRel '+vLoadRel);
	var loadRel = scopes.globals.convertLoadToId(vLoadRel,true);
	//application.output('loadRel '+loadRel);
	var lotNum = scopes.globals.convertLotToId(vLotNum,true);//ticket#7
	var pkgNum = scopes.globals.arrayToString(vPkgNum);//ticket#7, currently pkgNum is a FabTrol reference number
	var pcmkRel = scopes.globals.arrayToString(vPcmkRel);
	var seqNum = scopes.globals.arrayToString(vSeqNum);
	var sheetNum = scopes.globals.arrayToString(vSheetNum);
	var soNum = scopes.globals.arrayToString(vSONum);
	var idNum = scopes.globals.arrayToString(vIDNumber);
	var criteria = {
		area: area, 
		batch: batch,
		cowcode: cowCode,
		fabshop: fabShop,
		idnum : idNum,
		jobRel : jobRel,
		jobid : vJobID,
		loadall : loadAll,
		loadrel : loadRel,
		lotnum : lotNum,
		pcmkrel : pcmkRel,
		piecemark : vPiecemark,
		pkgnum : pkgNum,
		seqnum : seqNum,
		sheetnum : sheetNum,
		sonum : soNum
	}
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.viewBTableToForm(criteria,formName); // here to generate sql
	return criteria;
	null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB1D835A-0F7B-4F6F-802A-DA7C63A03F6E"}
 * @AllowToRunInFind
 */
function onActionClear(event) {
	var formName = event.getFormName();
	forms[formName].foundset.clear();
	//forms[formName].elements.btn_Print.enabled = false;
	forms[formName].elements.btn_PrintSelected.enabled = true;//disabled for raw material
	//forms[formName].elements.btn_PrintAll.enabled = false;
	var form = forms[formName];
	 for (var element in forms[formName].elements){
		if (element.search('frm') == 0){elements[element].enabled = true;}
		if (forms[formName].elements[element].getElementType() == "CHECK"){
			var provider = forms[formName].elements[element].getDataProviderID();
			form[provider] = 0;			
		}
		if (forms[formName].elements[element].getElementType().search(/(TEXT|TYPE)/) == -1){continue}
		provider = forms[formName].elements[element].getDataProviderID();
		form[provider] = "";
		forms[formName].elements[element].bgcolor = 'white';
	}
	useServerPrinters = 1;
	allControlNumbers = 1;
	allSerialNumbers = 1;
}

/**
 * @param event
 * @param formName
 *
 * @properties={typeid:24,uuid:"F13D3BEC-98AE-4F6B-8547-A104C65413BD"}
 */
function collectAndTab(event,formName){
	scopes.jobs.warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	criteria = collectCriteria(formName);
	//scopes.jobs.viewBTableSQL2(criteria,formName);

	/**
	scopes.jobs.warningsMessage('sts.txt.collecting.info',false);
	scopes.jobs.viewBTableSQLSummary(criteria,formName);
	var summaryQuery = scopes.jobs.queryAssembly(criteria,formName,'stations');
	var summaryForm = 'loads_summary_info'+versionForm;
	var removeFormName = summaryForm+'_table';
	forms[summaryForm].elements.tabless.removeAllTabs();
	scopes.jobs.removeFormHist(removeFormName);
	scopes.jobs.warningsMessage('sts.txt.collecting.info',false);
	scopes.jobs.createRouteSummaryForm(summaryQuery,formName.replace('piecemark','summary'));
	forms['loads_piecemark_info'+versionForm].elements.tabless.removeAllTabs(); */
	
	if (forms[formName+"_table"] && forms[formName+"_table"].hide){forms[formName+"_table"].hide();}
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	scopes.jobs.viewBTableToFormQB(event,criteria,formName);
	//forms['loads_criteria'+versionForm].vLabNumPcmks = forms[formName+'_table'].foundset.getSize();
	null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6EE5CD97-6303-4013-8ADA-CE2355F3EAF1"}
 */
function onActionBarTenderPrinter(event) {
	checkPrinterSelection(event);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F79462EE-3EA4-4C19-A367-64020671F250"}
 */
function checkPrinterSelection(event){
	var form = forms[event.getFormName()];
	var btDataProv = elements.useBarTender.getDataProviderID();
	var llDataProv = elements.useLabeLase.getDataProviderID();
	
	var noPrinter =  (form[btDataProv] == 0 && form[llDataProv] == 0);
	if (noPrinter){
		globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1267'),i18n.getI18NMessage('1267'));
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81B7CA37-253C-4FC2-BF7A-8C4511137129"}
 */
function onActionLabeLasePrinter(event) {
	checkPrinterSelection(event);
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"71968DD8-9ACF-4B4E-B0ED-B56F17B68614"}
 */
function onDataChangeChgPrinters(oldValue, newValue, event) {
	var printers = (newValue) ? scopes.prefs.useServerPrinters(true) : scopes.prefs.useServerPrinters(false);
	application.setValueListItems('stsvl_get_printer_list',printers);
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B7450991-0B24-4A27-97EF-2D58D40144BC"}
 */
function onDataChangeAllControlNums(oldValue, newValue, event) {
	vControlNumber = '';
	if (newValue == 0) {
		elements.frmControlNumber.requestFocus();
	} else {
		elements.frmModelPartNumber.requestFocus();
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C0A60EF7-B497-4C70-AA41-125A96B47C22"}
 */
function onDataChangeAllSerialNum(oldValue, newValue, event) {
	vSerialNumRaw = '';
	(newValue == 0) ? elements.frmSerialNumber.requestFocus() : elements.frmLocation.requestFocus();
	return true;
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9CB66D4D-3040-4A51-9524-15CB3EBCB74C"}
 */
function onDataChangeControlNum(oldValue, newValue, event) {
	if (newValue == ''){
		allControlNumbers = 1;
		elements.frmModelPartNumber.requestFocus();
	} else {
		allControlNumbers = 0;
		elements.frmControlNumber.requestFocus();
	}
	return true;
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"1511A929-76D4-4B7E-BE38-E9D2DE21ECAE"}
 */
function onDataChangeSerialNum(oldValue, newValue, event) {
	if (newValue == ''){
		allSerialNumbers = 1;
		elements.frmLocation.requestFocus();
	} else {
		allSerialNumbers = 0;
		elements.frmSerialNumber.requestFocus();
	}
	return true
}
