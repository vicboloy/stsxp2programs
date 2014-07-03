/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7072EF26-CEAA-4164-B5CE-73F6C0676DA7"}
 */
var vCustNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3DE05ECE-6929-46FD-8910-AACA991D08D5"}
 */
var vCustomerName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4974EA09-E924-4A8C-86F4-6619DE02F562"}
 */
var vCustomerID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFEE1A6D-5B49-4EDE-A7B7-258FFD9AEA37"}
 */
var vJobNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"975112F5-9E7D-4868-B8C1-654EFEFF5667"}
 */
var vJobName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE4E278C-EBE5-479F-A005-ED63F5FA4595"}
 */
var vJobID = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0154F9FB-F97C-48D3-99C4-EAF60C64BB22",variableType:4}
 */
var vLabIDNums = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"94B4D1D2-4661-439C-9C91-75CD791E40EB",variableType:4}
 */
var vLabTotPieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"28DAF216-B491-4E44-A1F8-22762388B410",variableType:4}
 */
var vLabTotalWt = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8357B404-7B2C-43C8-B534-22F5B8596A8D",variableType:4}
 */
var vLabNumPcmks = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA3668FD-DAC0-402D-8C9E-1D7D0DD3B0A2"}
 */
var vSeqNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A45C7F4-D07A-4E13-A75E-144FB48356C0"}
 */
var vSheetNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"223DF198-32EC-4A32-B3D0-BB38BF03479E"}
 */
var vSONum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D77C4418-D3AD-48BD-B89E-F388994794A1"}
 */
var vLoadNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0E92AE7-3638-4EA0-AEB5-5BC5ED422FF9"}
 */
var vLoadAll = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C11896CD-C9D7-4914-A36B-BF765C839C0E"}
 */
var vLoadRef = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA1B3E24-1EB7-4791-89C4-78482F032516"}
 */
var vPiecemark = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"192C2B1A-6AEE-4526-B8C2-70F3FCEC10D1"}
 */
var vPcmkRef = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D1C7B6A6-87A0-4F07-9395-97435A28173E"}
 */
var vFabShop = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"58FFBC46-C984-4747-B114-3D318C036CB2"}
 */
var vJobRef = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"846491C4-16FF-4FD8-A85A-C224C85367B7"}
 */
var vArea = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"49EA1A21-D422-4EEA-B3B5-510775E80980"}
 */
var vBatch = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2CC9DA9E-9C21-4673-B504-C545CDBE0D20"}
 */
var vCowCode = "";
/**
 * @properties={typeid:35,uuid:"49A2E987-AF1D-48A2-BC12-349246C612AB",variableType:-4}
 */
var jobFound = false;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B7F8C7A-B000-4AA8-85AB-05A6519B73E3"}
 */
function onShow(firstShow, event) {
	scopes.jobs.getJobsList();
	scopes.jobs.getCustomersList();
	application.setValueListItems('stsvl_jobs_by_cust',scopes.jobs.jobsArray);
	return _super.onShow(firstShow, event)
}
/**
 * TODO generated, please specify type and doc for the params
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
			vJobName = "No Jobs For This Customer";
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
			var vCustId = rec.customer_id;
			vCustNum = rec.sts_job_to_customer2.customer_number;
			vCustomerName = rec.sts_job_to_customer2.name;
			scopes.jobs.browseJobID = rec.job_id;
			status = true;
			vLabIDNums = 0;//idfile count
			vLabTotPieces = 0;//totalpieces
			vLabTotalWt = 0;//totalweight
			vLabNumPcmks = 0;//total piecemarks
		} else {
			jobFound = false;
			status = false;
		}
	}
	browseInfoEnable();
	return status;
}
/**
 * @properties={typeid:24,uuid:"7A941D9A-5D56-4B77-BC2C-165EC3F8DE8B"}
 */
function collectCriteria(){
	var area = arrayToString(vArea);
	var batch = arrayToString(vBatch);
	var cowCode = arrayToString(vCowCode);
	var fabShop = arrayToString(vFabShop);
	var jobRef = arrayToString(vJobRef);
	if (vLoadAll){
		var loadAll = null;
	} else {
		loadAll = arrayToString(vLoadNum);
	}
	var loadRef = arrayToString(vLoadRef);
	var pcmkRef = arrayToString(vPcmkRef);
	var pmark = arrayToString(vPiecemark);
	var seqNum = arrayToString(vSeqNum);
	var sheetNum = arrayToString(vSheetNum);
	var soNum = arrayToString(vSONum);
	var criteria = {
		area: area, 
		batch: batch,
		cowcode: cowCode,
		fabshop: fabShop,
		jobref : jobRef,
		loadall : loadAll,
		loadref : loadRef,
		pcmkref : pcmkRef,
		piecemark : pmark,
		seqnum : seqNum,
		sheetnum : sheetNum,
		sonum : soNum
	}
	scopes.jobs.viewBTableAlt(criteria);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param arrayN
 *
 * @properties={typeid:24,uuid:"3D134DB8-8264-4793-82B5-6F7ABED9EB1D"}
 */
function arrayToString(stringN){
	var arrayN = stringN.split(",");
	var arrayStr = "(";
	var comma = ",";
	var length = arrayN.length;
	for (var index = 0;index<length;index++){
		if (index == length-1){comma = ""}
		arrayStr = arrayStr+"\'"+arrayN[index]+"\'"+comma;
	}
	var arrayStr = arrayStr+")";
	if (arrayStr == "(\'\')"){arrayStr = null}
	return arrayStr;
}
/**
 * @properties={typeid:24,uuid:"FC21F138-6A2E-4046-9408-12838403079D"}
 */
function browseInfoEnable(){
	if (jobFound){
		elements.buttBrowse.enabled = true;
		elements.buttInfo.enabled = true;
	} else {
		elements.buttBrowse.enabled = false;
		elements.buttInfo.enabled = false;		
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
	for(var index in forms.loads_criteria){
		var name = index;
		if (name == 'validate'){continue}
		if (name.search('v') == 0){
			forms.loads_criteria[index] = null;
		}
	}
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
function onGetInformation(event) {
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
	var queryIdfiles =  'select count(*) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '+
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
