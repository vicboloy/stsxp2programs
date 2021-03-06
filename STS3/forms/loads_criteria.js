/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B7F8C7A-B000-4AA8-85AB-05A6519B73E3"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		_super.onShow(firstShow, event);
		scopes.jobs.getJobsList();
		scopes.jobs.getCustomersList();
		application.setValueListItems('stsvl_jobs_by_cust',scopes.jobs.jobsArray);
		onActionClear(event);
		forms[event.getFormName()].versionForm = globals.getInstanceForm(event);
		forms[event.getFormName()].baseForm = event.getFormName().replace(forms[event.getFormName()].versionForm,'');
		elements.btn_Browse.enabled  = false;
	}
	scopes.globals.hideEmptyColumns = 0;//20200513 request by PP by text message Could you make default for the check box
	// to hide empty columns on the viewloads window UNCHECKED.
	globals.setUserFormPermissions(event,false);
	//forms.loads_pcmk_combo;
}
/**
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"0C78BB23-5954-4E47-B68D-7717DD49BAD0"}
 */
function xxxunusedonDataChangeCustomerNumber(oldValue, newValue, event) {
	globals.lookupItem = newValue;
	var fs = sts_customernum_to_name;
	var status = true;
	if (fs.getSize() >0){
		globals.lookupItem2 = newValue;
		vCustomerName = sts_check_custnum.name;
		vCustomerID = sts_check_custnum.customer_id;
		var fs2 = fs.sts_customers_to_jobs;
		fs2.sort('job_number asc');
		if (fs2.getSize() >0){
			scopes.jobs.jobsArray = [];
			for (var index = 1;index < fs2.getSize();index++){
				var rec = fs2.getRecord(index);
				scopes.jobs.jobsArray.push(rec.job_number);
			}
		} else {
			vJobNum = "";
			vJobName = 'No Jobs For This Customer';
			scopes.jobs.jobUnderCustomer = "";
		}
		application.setValueListItems('stsvl_jobs_by_cust',scopes.jobs.jobsArray);
		status = true;
	} else {
		status = false;
	}
	browseInfoEnable(event);
	return status;	
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
 * @properties={typeid:24,uuid:"105C8AB5-9447-48F1-ABFB-5BB900A1338C"}
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var fs = databaseManager.createSelect('db:/stsservoy/jobs');
	fs.result.add(fs.columns.job_id);
	fs.where.add(fs.columns.job_number.like(newValue));
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
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
		browseInfoEnable(event);
		scopes.jobs.onGetInformation(event,false);
		controller.focusField('frmSeqNum',true);
	} else {
		vJobNum = null;
		return false;
	}
	return true;
}
/**
 * @properties={typeid:24,uuid:"7A941D9A-5D56-4B77-BC2C-165EC3F8DE8B"}
 */
function collectCriteria(){
	//versionForm = globals.getInstanceForm(null);
	// feeds jobs.viewBTableToForm()

	if (vLoadAll){
		var loadAll = null;
	} else {
		loadAll = scopes.globals.arrayToString(vLoadNum);
	}
	application.output('criteria '+vLoadNum+' '+loadAll)
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
		loadall : vLoadAll,
		loadalla : scopes.globals.convertLoadToId(vLoadNum,false),
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
		minors : vMinors
	}
	return criteria;
}
/**
 * @properties={typeid:24,uuid:"5497D571-E5BA-4996-AB84-4C60EC27F459"}
 */
function onActionShowWindow(){
	//scopes.jobs.xxxviewBTableThrowSplit(event,winTitle);
	//return;
	//var formName = event.getFormName();
	//versionForm = globals.getInstanceForm(null);
	//application.output('form version '+versionForm);
	var winTitle = 'Browse Loads'+versionForm;
	var formName = 'loads_pcmk_combo'+versionForm;
	//application.output('RM formname '+formName+' version '+versionForm);
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var winExist = application.getWindow(winTitle);
	//application.output('window is existing'+winExist);
	scopes.jobs.tableOrderingData = scopes.jobs.tablePrefsPreLoad(formName+'_table');

	if (!winExist){//20180802 show browse loads if exists or create
		var win = application.createWindow(winTitle, JSWindow.MODAL_DIALOG);
		win.setInitialBounds(xOrigin+10, yOrigin+10, width, height);
		win.title = winTitle;
	
		forms[formName];// pre-load form for speed
		scopes.jobs.viewBTableCreateForm2(formName,scopes.jobs.browseFS2[formName]);
		win.show(forms[formName]);
	} else {
		scopes.jobs.viewBTableCreateForm2(formName,scopes.jobs.browseFS2[formName]);
		//application.output('RM formname '+formName);
		winExist.show(formName);//20180802 added
	}//20180802 show browse loads if exists or create
	//application.output('RM formname '+formName);
	if (forms[formName].foundset.getSize() > 0){
		forms[formName].foundset.setSelectedIndex(1);
	}
	//scopes.jobs.removeFormHist(formName+'_table');
}
/**
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"3D134DB8-8264-4793-82B5-6F7ABED9EB1D"}
 */
function arrayToString(itemCSV){
	/** @type {Array} */
	var arrayN = itemCSV.split(",");
	var arrayStr = "(";
	var comma = ",";
	var length = arrayN.length;
	for (var index = 0;index<length;index++){
		if (index == length-1){comma = ""}
		arrayStr = arrayStr+"\'"+arrayN[index]+"\'"+comma;
	}
	arrayStr = arrayStr+")";
	if (arrayStr == "(\'\')"){arrayStr = null}
	return arrayStr;
}
/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"FC21F138-6A2E-4046-9408-12838403079D"}
 */
function browseInfoEnable(event){
	var instance = scopes.globals.getInstanceForm(event);
	
	if (jobFound){
		elements.btn_Browse.enabled = true;
		elements.btn_Info.enabled = true;
		forms['loads_tabs'+instance].elements.tabs.setTabEnabledAt(2,true);
		forms['loads_tabs'+instance].elements.tabs.setTabEnabledAt(3,true);
	} else {
		elements.btn_Browse.enabled = false;
		elements.btn_Info.enabled = false;		
		forms['loads_tabs'+instance].elements.tabs.setTabEnabledAt(2,false);
		forms['loads_tabs'+instance].elements.tabs.setTabEnabledAt(3,false);
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"55BB4998-16BC-43F7-8A0C-557919A306C7"}
 * @AllowToRunInFind
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
	if (form.elements.chkMinors){form.elements.chkMinors.enabled = true}
	form.elements['frmJobNum'].requestFocus();
	jobFound = false;
	browseInfoEnable(event);
}
/**
 * @param criteria
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"691EE7E2-97CD-4BBB-B4A3-57C87D0E87B0"}
 */
function openBrowseTable(criteria,event){
	var regexp = new RegExp(/(_[0-9]+)/)
	versionForm = event.getFormName().match(regexp)[1];

	var formName = 'loads_pcmk_combo'+versionForm;
	scopes.jobs.viewBTableToFormQB(event,criteria,formName);
	scopes.jobs.warningsX();
	onActionShowWindow();
}
/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"3261ECE1-7C4F-4E31-8D33-34561FEA55B6"}
 */
function collectAndBrowse(event){
	onActionShowWindow();
	
	if (1==1){return}//20180802 disable further info gathering
	versionForm = '';
	var matchVer = event.getFormName().match(scopes.globals.instanceReg);
	if (matchVer){
		versionForm = matchVer[1];
	}
	scopes.jobs.warningsMessage('sts.txt.collecting.info',true);//-----------------------------------//
	openBrowseTable(collectCriteria(),event);

	scopes.jobs.warningsX();
}
/**
 * @properties={typeid:24,uuid:"8ED9C835-157C-438B-956F-62E3E4C26AFF"}
 */
function collectAndTab(event,formName){
	scopes.jobs.warningsMessage('sts.txt.collecting.info',true);//-----------------------------------//
	scopes.jobs.removeFormHist(formName+'_table');
	criteria = collectCriteria();
	//scopes.jobs.viewBTableSQL2(criteria,formName);
	var beginDate = new Date().getTime(); var timeDur = 0; var endDate = new Date().getTime();
	if (application.isInDeveloper()){application.output(timeDur+' Summary -------------- ')}

	var summaryQuery = scopes.jobs.queryAssemblyFaster(criteria,formName,'stations');
	var summaryForm = 'loads_summary_info'+versionForm;
	var removeFormName = summaryForm+'_table';
	forms[summaryForm].elements.tabless.removeAllTabs();
	scopes.jobs.removeFormHist(removeFormName);
	scopes.jobs.warningsMessage('sts.txt.collecting.info',true);//-----------------------------------//
	endDate = new Date().getTime(); timeDur = endDate - beginDate; beginDate = endDate; 
	if (application.isInDeveloper()){application.output(timeDur+' Route Summary -------------- ')}
	scopes.jobs.createRouteSummaryForm(summaryQuery,formName.replace('piecemark','summary'));

	forms['loads_piecemark_info'+versionForm].elements.tabless.removeAllTabs();
	if (forms[formName+"_table"] && forms[formName+"_table"].hide){forms[formName+"_table"].hide();}
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.warningsMessage('sts.txt.collecting.info',true);//-----------------------------------//
	endDate = new Date().getTime(); timeDur = endDate - beginDate; beginDate = endDate; 
	if (application.isInDeveloper()){application.output(timeDur+' Summary -------------- ')}
	scopes.jobs.viewBTableToFormQB(event,criteria,formName);//JOE stop here
	//forms['loads_criteria'+versionForm].vLabNumPcmks = forms[formName+'_table'].foundset.getSize();
	endDate = new Date().getTime(); timeDur = endDate - beginDate; beginDate = endDate; 
	if (application.isInDeveloper()){application.output(timeDur+' Summary -------------- ')}
	scopes.jobs.viewBTableToFormQB(event,criteria,'loads_pcmk_combo'+versionForm);//20180802 move query build for browsing table
	scopes.jobs.warningsMessage('sts.txt.collecting.info',true);//-----------------------------------//
	endDate = new Date().getTime(); timeDur = endDate - beginDate; beginDate = endDate; 
	if (application.isInDeveloper()){application.output(timeDur+' View Specs -------------- ')}
	scopes.jobs.viewBTableSQLSummary(criteria,formName);//JOE
	endDate = new Date().getTime(); timeDur = endDate - beginDate; beginDate = endDate; 
	if (application.isInDeveloper()){application.output(timeDur+' Summary -------------- ')}
	null;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AECB3B66-3CCF-4241-95C7-C566B344A6A3"}
 */
function onActionJobNumberList(event) {
	// Populate type ahead with all tenant jobs regardless of association ID
	var jobArray = scopes.jobs.getAllTenantJobs();
	application.setValueListItems('stsvl_jobs_by_cust',jobArray);//#95 populate jobs list
	elements.frmJobNum.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6812572-8D9E-4F46-879D-2AA31C919E33"}
 */
function onActionChangeMinors(event) {
	if (1==1){return;}
	var instance = globals.getInstanceForm(event);
	var tableName = 'loads_pcmk_comboREPLACE_table';
	tableName = tableName.replace('REPLACE',instance);
	if (forms[tableName]){
		application.output('remove form '+tableName);
		forms[tableName].onHide(event);
	}
	
	application.output('--------------------------form name '+ tableName);
	scopes.jobs.removeFormHist(tableName);//loads_pcmk_combo_3_table

}
