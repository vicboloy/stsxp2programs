/**
 * @properties={typeid:24,uuid:"EDB3B7AC-8EC8-4994-835F-26B040B51986"}
 */
function collectCriteria(){
	versionForm = globals.getInstanceForm(null);
	// feeds jobs.viewBTableToForm()

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
		cowcode: scopes.globals.arrayToString(vCowCode),
		cowcodea:scopes.globals.csvToArray(vCowCode),
		fabshop: scopes.globals.arrayToString(vFabShop),
		fabshopa: scopes.globals.csvToFabshopID(vFabShop),
		jobid : vJobID,
		loadall : loadAll,
		loadalla : scopes.globals.csvToArray(vLoadAll),
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
		sonuma : scopes.globals.csvToArray(vSONum)
	}
	return criteria;
}
/**
 * @AllowToRunInFind
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"1DB4E60C-C736-4EF8-ADFB-8E3EB9BC7F78"}
 */
function onActionClear(event) {
	var form = forms[event.getFormName()]; // mw change
	for(var index in form){
		var name = index;
		if (name.search('validate') != -1){continue}
		if (name.search('v') == 0){
			if ((typeof form[index]) == "number"){
				form[index] = 0
			} else {
				form[index] = "";
			}
		}
	}
	if (form.elements['frmJobNum']){
		form.elements['frmJobNum'].requestFocus();
		jobFound = false;
		browseInfoEnable(event);
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"08093563-6BE9-4386-9874-CE243CA5ED79"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	var formName = event.getFormName().replace('piecemark','summary');
	formName = formName +"_table";
	if (forms[formName]){
		forms[formName].controller.loadAllRecords();
	}
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D433D0B9-A700-47AF-B2B9-9CF00BE4510D"}
 * @AllowToRunInFind
 */
function onGetInformation(event) {
	var mainCriteria = forms['loads_criteria'+versionForm].criteria;
	var subCriteria = collectCriteria();
	subCriteria.jobid = mainCriteria.jobid;
	for (var entry in mainCriteria){
		if (mainCriteria[entry] && typeof mainCriteria[entry] === 'object' && mainCriteria[entry].length > 0){
			for (var index = 0;index < mainCriteria[entry].length;index++){
				var newCrit = mainCriteria[entry][index];
				if (!subCriteria[entry]){subCriteria[entry] = [];}
				if (subCriteria[entry].indexOf(newCrit) == -1){subCriteria[entry].push(newCrit)}
			}
		}
	}
	var summaryForm = 'loads_summary_info'+versionForm;
	var removeFormName = summaryForm+'_table';
	var summaryQuery = scopes.jobs.queryAssemblyFaster(subCriteria,summaryForm,'stations');
	forms[summaryForm].elements.tabless.removeAllTabs();
	scopes.jobs.removeFormHist(removeFormName);
	scopes.jobs.createRouteSummaryForm(summaryQuery,summaryForm);
	forms[summaryForm+'_table'].controller.loadAllRecords();
}
