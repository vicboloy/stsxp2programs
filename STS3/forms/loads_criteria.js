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
		}
	globals.setUserFormPermissions(event);
	//forms.loads_pcmk_combo;
}
/**
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"0C78BB23-5954-4E47-B68D-7717DD49BAD0"}
 */
function onDataChangeCustomerNumber(oldValue, newValue, event) {
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
	browseInfoEnable();
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
 * @AllowToRunInFind
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = sts_jobs.duplicateFoundSet();
	fs.loadAllRecords();
	if (fs.find()){
		fs.job_number = newValue;
		var count = fs.search();
		if (count > 0){
			jobFound = true;
			var rec = fs.getRecord(1);
			vJobName = rec.job_title;
			vJobID = rec.job_id;
			vJobMetric = (rec.metric_job == 1);
			var vCustId = rec.customer_id;
			vCustNum = rec.sts_job_to_customer2.customer_number;
			vCustomerName = rec.sts_job_to_customer2.name;
			scopes.jobs.browseJobID = rec.job_id;
			var status = true;
			vLabIDNums = 0;//idfile count
			vLabTotPieces = 0;//totalpieces
			vLabTotalWt = 0;//totalweight
			vLabNumPcmks = 0;//total piecemarks
			browseInfoEnable();
			scopes.jobs.onGetInformation(event,false);
			controller.focusField('frmSeqNum',true);
		} else {
			jobFound = false;
			status = false;
		}
	}
	return status;
}
/**
 * @properties={typeid:24,uuid:"7A941D9A-5D56-4B77-BC2C-165EC3F8DE8B"}
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
		loadrel : scopes.globals.convertLoadToId(vLoadRel),
		loadrela : scopes.globals.csvToArray(vLoadRel),
		lotnum : scopes.globals.convertLotToId(vLotNum), //ticket#7
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
 * @properties={typeid:24,uuid:"5497D571-E5BA-4996-AB84-4C60EC27F459"}
 */
function onActionShowWindow(){
	//scopes.jobs.xxxviewBTableThrowSplit(event,winTitle);
	//return;
	//var formName = event.getFormName();
	versionForm = globals.getInstanceForm(null);
	//application.output('form version '+versionForm);
	var winTitle = 'Browse Loads'+versionForm;
	var formName = 'loads_pcmk_combo'+versionForm;
	//application.output('formname '+formName);
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var win = application.createWindow(winTitle, JSWindow.MODAL_DIALOG);
	win.setInitialBounds(xOrigin+10, yOrigin+10, width, height);
	win.title = winTitle;

	forms[formName];// pre-load form for speed
	win.show(forms[formName]);
	scopes.jobs.removeFormHist(formName+'_table');
}
/**
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"3D134DB8-8264-4793-82B5-6F7ABED9EB1D"}
 */
function arrayToString(itemCSV){
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
 * @properties={typeid:24,uuid:"FC21F138-6A2E-4046-9408-12838403079D"}
 */
function browseInfoEnable(){
	if (jobFound){
		elements.btn_Browse.enabled = true;
		elements.btn_Info.enabled = true;
	} else {
		elements.btn_Browse.enabled = false;
		elements.btn_Info.enabled = false;		
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
	form.elements['frmJobNum'].requestFocus();
	jobFound = false;
	browseInfoEnable();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8206E21B-8B05-4261-90FE-94191969C2A0"}
 */
function xxxunusedonGetInformation(event) {
	if (!jobFound) {return}
	//scopes.jobs.loadCountsJobId = job_id;
	var queryWeight =  'select sum(item_weight*item_quantity) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '
		+ ' and sheets.delete_flag IS NULL'
		+ ' and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL and piecemarks.piecemark = piecemarks.parent_piecemark '
		+ ' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL'
	var queryIdfiles =  'select count(*) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id \
		and sheets.delete_flag IS NULL \
		and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL \
		inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL \
		inner join sequences on idfiles.sequence_id = sequences.sequence_id and sequences.delete_flag IS NULL';
	queryIdfiles =  'select count(*) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '+
	' and sheets.job_id = ? AND sheets.tenant_uuid = ? AND sheets.delete_flag IS null '+
	' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id AND idfiles.delete_flag IS null '+
	' inner join sequences on sequences.sequence_id = idfiles.sequence_id inner join '+
	' id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id ';
	var queryBarcodes = 'select count (distinct id_serial_number) id_serial_number from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id \
		and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL \
		inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL \
		inner join id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id';
	var queryPiecemarks = 'SELECT count(*) FROM piecemarks INNER JOIN sheets ON piecemarks.sheet_id = sheets.sheet_id ' + 
		' AND sheets.delete_flag IS NULL ' + 
		' AND sheets.job_id = ? AND sheets.tenant_uuid = ? AND piecemarks.delete_flag IS NULL';
	var maxReturnedRows = -1;
	var args = [];
	args.push(vJobID.toString());
	args.push(globals.secCurrentTenantID);
	//var args = [job_id,globals.secCurrentTenantID];
	vLabNumPcmks = databaseManager.getDataSetByQuery('stsservoy', queryPiecemarks, args , maxReturnedRows)[0][0];
	vLabIDNums = databaseManager.getDataSetByQuery('stsservoy', queryBarcodes, args , maxReturnedRows)[0][0];
	vLabTotPieces = databaseManager.getDataSetByQuery('stsservoy', queryIdfiles, args , maxReturnedRows)[0][0];
	vLabTotalWt = databaseManager.getDataSetByQuery('stsservoy', queryWeight, args , maxReturnedRows)[0][0];
}
/**
 * @param jobID
 *
 * @properties={typeid:24,uuid:"0F6D8D82-0FEA-441A-A4CB-60A1DEA4B89E"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(unused)
 */
function xxxtestBuildFS(jobID){
	/**
	query = 'select random()*1000000 AS "browsing_id",0 AS "selection",* from piecemarks p '+
	' right join routings rt on rt.routing_id = p.e_route_code_id '+
	' inner join sheets s on p.sheet_id = s.sheet_id SHT '+
	' and s.job_id = ? AND s.delete_flag IS null PCMK '+
	' inner join idfiles i on i.piecemark_id = p.piecemark_id AND i.delete_flag FLAG SONUM FABS AREA PCRL LDN COW LOT PKG'+
	' inner join sequences ss on ss.sequence_id = i.sequence_id SEQN ' +
	' inner join id_serial_numbers b on b.id_serial_number_id = i.id_serial_number_id ' +
	' left join status_description sd on sd.status_description_id = i.status_description_id ' +
	' left join loads l on l.load_id = i.current_load_id LDRR '+
	' order by p.parent_piecemark, p.piecemark';

	/** @type {QBSelect<db:/stsservoy/jobs>} * /
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.result.add(q.columns.job_id);
	q.result.add(q.columns.job_number);
	q.result.add(q.columns.metric_job);
	q.result.distinct = true;
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.job_number.eq(jobNumber))
		);
	var resultQ = databaseManager.getFoundSet(q);
	null;
	*/
}
/**
 * @param criteria
 * @param formName
 *
 * @properties={typeid:24,uuid:"691EE7E2-97CD-4BBB-B4A3-57C87D0E87B0"}
 */
function openBrowseTable(criteria){
	var formName = 'loads_pcmk_combo'+versionForm;
	scopes.jobs.viewBTableToFormQB(criteria,formName);
	onActionShowWindow();
}
/**
 * @properties={typeid:24,uuid:"3261ECE1-7C4F-4E31-8D33-34561FEA55B6"}
 */
function collectAndBrowse(){
	var brDS = scopes.jobs.queryAssembly(criteria,null,'browse');
	openBrowseTable(collectCriteria());
}
/**
 * @properties={typeid:24,uuid:"8ED9C835-157C-438B-956F-62E3E4C26AFF"}
 */
function collectAndTab(formName){
	criteria = collectCriteria();
	//scopes.jobs.viewBTableSQL2(criteria,formName);
	scopes.jobs.viewBTableSQLSummary(criteria,formName);
	var summaryQuery = scopes.jobs.queryAssembly(criteria,formName,'stations');
	var summaryForm = 'loads_summary_info'+versionForm;
	var removeFormName = summaryForm+'_table';
	forms[summaryForm].elements.tabless.removeAllTabs();
	scopes.jobs.removeFormHist(removeFormName);
	scopes.jobs.createRouteSummaryForm(summaryQuery,formName.replace('piecemark','summary'));

	forms['loads_piecemark_info'+versionForm].elements.tabless.removeAllTabs();
	if (forms[formName+"_table"] && forms[formName+"_table"].hide){forms[formName+"_table"].hide();}
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.viewBTableToFormQB(criteria,formName);
	//forms['loads_criteria'+versionForm].vLabNumPcmks = forms[formName+'_table'].foundset.getSize();
	null;
}