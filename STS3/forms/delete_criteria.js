/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"620FACFC-1270-4391-84B5-AA6295D5B3B6"}
 */
function onShow(firstShow, event) {
	if (firstShow){
	}
	onActionClear(event,event.getFormName());
	globals.setUserFormPermissions(event);
	scopes.jobs.getJobsList();
	scopes.jobs.getCustomersList();
	application.setValueListItems('stsvl_jobs_by_cust',scopes.jobs.jobsArray);
	return _super.onShow(firstShow, event)
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
 * @properties={typeid:24,uuid:"427C542C-E90E-4162-879A-2569A49EA56D"}
 * @AllowToRunInFind
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var fs = databaseManager.createSelect('db:/stsservoy/jobs');
	fs.result.add(fs.columns.job_id);
	fs.where.add(fs.columns.job_number.like(newValue));
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var FS = databaseManager.getFoundSet(fs);

	if (FS.getSize() > 0){
		jobFound = true;
		/** @type {JSFoundSet<db:/stsservoy/jobs>} */
		var rec = FS.getRecord(1);
		vJobName = rec.job_title;
		vJobID = rec.job_id;
		vJobMetric = (rec.metric_job == 1);
		vCustomerID = rec.customer_id;
		vCustNum = rec.sts_job_to_customer2.customer_number;
		vCustomerName = rec.sts_job_to_customer2.name;
		scopes.jobs.browseJobID = rec.job_id;
		vLabIDNums = 0;//idfile count
		vLabTotPieces = 0;//totalpieces
		vLabTotalWt = 0;//totalweight
		vLabNumPcmks = 0;//total piecemarks
		scopes.jobs.onGetInformation(event,false);
		controller.focusField('frmSeqNum',true);
	} else {
		vJobNum = null;
		return false;
	}
	var formName = event.getFormName();
	formName = formName.split('_')[0]+'_piecemark_info';
	if (forms[formName]){
		forms[formName].elements.tabless.removeAllTabs();
		scopes.jobs.removeFormHist(formName+"_table");
	}
	browseInfoEnable(formName);
	return true;
}
/**
 * @properties={typeid:24,uuid:"86087C50-E905-4A7C-A726-3DB659540029"}
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
		sonuma : scopes.globals.csvToArray(vSONum),
		minors : 1
	}
	return criteria;
	//scopes.jobs.removeFormHist(formName+"_table");
	//scopes.jobs.browseJobID = vJobID;
	//scopes.jobs.viewBTableToForm(criteria,formName);
}
/**
 * @param {String} formName
 * 
 * @properties={typeid:24,uuid:"C475BEBD-83D4-4676-828B-D6C8AB673616"}
 */
function browseInfoEnable(formName){
	var prefix = formName.split('_')[0];
	if (application.isInDeveloper()){application.output('tst '+prefix+'_piecemark_info')}
	if (jobFound){
		elements.btn_Info.enabled = true;
		forms[prefix+'_records_tabs'].elements.tabs.setTabEnabledAt(2,true);
	} else {
		elements.btn_Browse.enabled = false;
		elements.btn_Info.enabled = false;	
		forms[prefix+'_records_tabs'].elements.tabs.setTabEnabledAt(2,false);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} formName
 *
 * @properties={typeid:24,uuid:"24AD80C5-DC06-4258-9587-54CFAAF778EE"}
 * @AllowToRunInFind
 */
function onActionClear(event,formName) {
	if (formName == null){
		formName = event.getFormName();
	}
	var formPrefix = event.getFormName().split("_")[0];
	var formNameTable = formPrefix+'_piecemark_info_table';
	formName = formPrefix+"_criteria";
	//application.output(event);
	for(var index in forms[formName]){
		var name = index;
		if (name.search('validate') != -1){continue}
		if (name.search('v') == 0){
			if ((typeof forms[formName][index]) == "number"){
				forms[formName][index] = 0
			} else {
				//application.output(name+" "+typeof forms[formName][index]);
				forms[formName][index] = "";
			}
		}
	}
	jobFound = false;
	switch (formPrefix){
	case 'delete':
		//	if (formName.search(/delete/) != -1){
		forms.delete_piecemark_info.elements.tabless.removeAllTabs();
		history.removeForm(formNameTable);
		break;
	case 'recall':
	case 'remove':
		//if (formName.search(/(recall|remove)/) != -1){
		forms[formPrefix+'_piecemark_info'].elements.tabless.removeAllTabs();
		forms[formPrefix+'_records_tabs'].elements.tabs.setTabEnabledAt(2,false);
		history.removeForm(formNameTable);
		break;
	default:
	}
	browseInfoEnable(formName);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} winTitle
 *
 * @properties={typeid:24,uuid:"3DAECF38-C686-4432-A939-6C97466A4A28"}
 */
function onActionDeleteWindow(event,winTitle) {
	//scopes.jobs.xxxviewBTableThrowSplit(event,winTitle);
	//return;
	//var formName = event.getFormName();
	var formName = 'delete_pcmk_combo';
	if (application.isInDeveloper()){application.output('formname '+formName)}
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var win = application.createWindow(winTitle, JSWindow.MODAL_DIALOG);
	win.setInitialBounds(xOrigin+10, yOrigin+10, width, height);
	win.title = winTitle;

	scopes.jobs.warningsX();
	win.show(forms.delete_record_actual);
	scopes.jobs.removeFormHist(formName+'_table');
	//return true;
	//collectCriteria('delete_piecemark_combo');
	//forms.delete_pcmk_combo.elements.split.
	//controller.show(win);
	//return true;
}
/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"5CD9BBB2-C6CF-4DD8-BB15-9450C5905D70"}
 */
function collectAndTab(formName){
	criteria = collectCriteria();
	//scopes.jobs.viewBTableSQL2(criteria,formName);
	scopes.jobs.warningsMessage('sts.txt.collecting.info',true);//-----------------------------------//
	scopes.jobs.viewBTableSQLSummary(criteria,formName);
	//var summaryQuery = scopes.jobs.queryAssembly(criteria,formName,'stations');
	//var summaryForm = 'loads_summary_info'+versionForm;
	//var removeFormName = summaryForm+'_table';
	//forms[summaryForm].elements.tabless.removeAllTabs();
	//scopes.jobs.removeFormHist(removeFormName);
	//scopes.jobs.createRouteSummaryForm(summaryQuery,formName.replace('piecemark','summary'));

	forms['loads_piecemark_info'+versionForm].elements.tabless.removeAllTabs();
	if (forms[formName+"_table"] && forms[formName+"_table"].hide){forms[formName+"_table"].hide();}
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.warningsMessage('sts.txt.collecting.info',true);//-----------------------------------//
	scopes.jobs.viewBTableToFormQB(criteria,formName);
	//forms['loads_criteria'+versionForm].vLabNumPcmks = forms[formName+'_table'].foundset.getSize();
	scopes.jobs.warningsX();
	null;
}
