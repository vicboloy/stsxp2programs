/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"068CB534-21FC-4F4D-8096-1B20991BF6B4",variableType:4}
 */
var useLocalDirectory = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3F4EFF4F-88CC-4FBF-B55A-D67BEA97ED54",variableType:4}
 */
var useLabeLasePrinter = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"322D2EF8-C0BA-4A05-8351-0530156DB9E0",variableType:4}
 */
var useBarTender = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1326B9E-8FCE-412C-9EA6-08AA349C9481"}
 */
var printerName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0BD2161E-BBA8-449E-8BA4-466177E2AE99"}
 */
var labelName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F69D512D-89C8-4D49-8630-74688C440F10"}
 */
var localDir = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1B41F652-4BA2-4088-84E5-DDFE956D4D32"}
 */
var labeLaseFormat = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F1E0237-5585-4A4E-9740-42FBDA90C34C",variableType:4}
 */
var useServerPrinters = 1;
/**
 * print is driven off of the criteria page
 * 
 * only if selection criteria exists and a foundset exists
 * 
 */
 /**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8E7F0FB-EDC8-49A9-9958-91E34DDFBC29"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	onActionClear(event);
	//application.output('load printer order label');
	if (firstShow){
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
	printerName = scopes.printer.idBarcodePrinter;
	labelName = scopes.printer.idBarcodeLabelFormat;
	application.output('scopes.printer.labelLaseFormat'+scopes.printer.idLabeLaseTemplate);
	labeLaseFormat = scopes.printer.idLabeLaseTemplate;
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
 * @properties={typeid:24,uuid:"3A786F20-292F-4BD4-BBD5-3F25A07EE1A4"}
 * @AllowToRunInFind
 */
function onActionPrint(event) {
	elements.frmServerPrinters.requestFocus();
	var printers = application.getValueListArray('stsvl_get_printer_list');
	var debug = 1;
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
	var newFormName = formName+versionForm;
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

	win.show(forms[newFormName]);
	scopes.jobs.removeFormHist(newFormName+'_table');
	//var win2 = application.getWindow(returnWin);
	//win2.toFront();
	elements.btn_Clear.enabled = false;
	elements.btn_PrintSelected.enabled = false;
}
/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"3989EEE5-5DE2-492A-8456-D9EB616B8A63"}
 */
function collectCriteria(formName){
	var loadAll = (vLoadAll == 1);
	
	var loadIds = [];
	if (vLoadNum != '' || loadAll){
		/** @type {QBSelect<db:/stsservoy/loads>} */
		var q = databaseManager.createSelect('db:/stsservoy/loads');
		q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		if (vJobID){
			q.where.add(q.columns.job_id.eq(vJobID))
		}
		if (!loadAll && vLoadNum != ''){
			q.where.add(q.columns.load_number.isin(scopes.globals.csvToArray(vLoadNum)));
		}
		q.result.add(q.columns.load_id);
		var Q = databaseManager.getDataSetByQuery(q,-1);
		if (Q.getMaxRowIndex() > 0){
			loadIds = Q.getColumnAsArray(1);
		}
	}

	criteria = {
		area: scopes.globals.arrayToString(vArea),
		areaa: scopes.globals.csvToArray(vArea),
		batch: scopes.globals.arrayToString(vBatch),
		batcha: scopes.globals.csvToArray(vBatch),
		cowcode: scopes.globals.arrayToString(vCowCode),
		cowcodea:scopes.globals.csvToArray(vCowCode),
		fabshop: scopes.globals.arrayToString(vFabShop),
		fabshopa: scopes.globals.csvToFabshopID(vFabShop),
		jobid : vJobID,
		loadall : loadAll,
		loadalla : loadIds,
		loadnum : vLoadNum,
		loadnuma : scopes.globals.csvToArray(vLoadNum),
		loadrel : scopes.globals.convertLoadToId(vLoadRel,false),
		loadrela : scopes.globals.csvToArray(vLoadRel),
		lotnum : scopes.globals.convertLotToId(vLotNum,false), //ticket#7
		lotnuma : scopes.globals.csvToArray(vLotNum),
		pcmkrel : scopes.globals.arrayToString(vPcmkRel),
		pcmkrela : scopes.globals.csvToArray(vPcmkRel),
		piecemark : vPiecemark,
		piecemarka : scopes.globals.csvToArray(vPiecemark),
		pkgnum : scopes.globals.arrayToString(vPkgNum), //ticket#7, currently pkgNum is a FabTrol reference number,
		pkgnuma : scopes.globals.csvToArray(vPkgNum),
		seqnum : scopes.globals.arrayToString(vSeqNum),
		seqnuma : scopes.globals.csvToArray(vSeqNum),
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
 * @properties={typeid:24,uuid:"7A62A5CE-DDA9-4C58-9D17-136AECB5CFCE"}
 * @AllowToRunInFind
 */
function onActionClear(event) {
	var formName = event.getFormName();
	var form = forms[formName];
	form.foundset.clear();
	//forms[formName].elements.btn_Print.enabled = false;
	form.elements.btn_PrintSelected.enabled = false;
	//forms[formName].elements.btn_PrintAll.enabled = false;
	//var form = forms[formName];
	for (var element in form.elements){
		if (element.search('frm') == 0 && element.search(/JobNum/) == -1){elements[element].enabled = false;}
		if (forms[formName].elements[element].getElementType() == "CHECK"){
			var provider = form.elements[element].getDataProviderID();
			application.output('provider '+provider);
			form[provider] = 0;			
		}
		if (form.elements[element].getElementType().search(/(TEXT|TYPE)/) == -1){continue}
		provider = form.elements[element].getDataProviderID();
		form[provider] = "";
		form.elements[element].bgcolor = 'white';
	}
	useServerPrinters = 1;
}
/**
 * @param event
 * @param formName
 *
 * @properties={typeid:24,uuid:"F60EBFE4-5CB9-4AFE-A243-E03AC15290AB"}
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
 * @properties={typeid:24,uuid:"B5CD1955-B3E4-40AD-9D87-003EFAE6FF64"}
 */
function onActionBarTenderPrinter(event) {
	checkPrinterSelection(event);
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5B2F9750-65E9-465D-A92B-FEECFCB58618"}
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
 * @properties={typeid:24,uuid:"F3B38C06-5F13-42F3-8255-2887B749C020"}
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
 * @properties={typeid:24,uuid:"5E05D197-475E-4B5F-BB50-FEA18968FE86"}
 */
function onDataChangeChgPrinters(oldValue, newValue, event) {
	var printers = (newValue) ? scopes.prefs.useServerPrinters(true) : scopes.prefs.useServerPrinters(false);
	application.setValueListItems('stsvl_get_printer_list',printers);
	return true
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
 * @properties={typeid:24,uuid:"3A195EA9-4858-4C2A-A19C-3602275CBBB4"}
 */
function onDataChangeLoad(oldValue, newValue, event) {
	if (newValue == 1){
		vLoadNum = '';
	}
	return true
}
