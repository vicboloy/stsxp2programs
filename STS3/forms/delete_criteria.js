/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5826A19F-BAF5-4383-8661-9400155C7549"}
 */
var vCustNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89072BF4-DA51-4963-8A92-DD55D20A9AD4"}
 */
var vCustomerName = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D4944A3B-CE63-42A7-A74E-20720ED0FC9D"}
 */
var vCustomerID = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BE85CB84-95D5-459F-B049-6D2E854E6336"}
 */
var vJobNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06390DA3-B58D-4801-9BE1-758585CC8AA5"}
 */
var vJobName = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"56DEBCC7-E07C-484D-B857-D122D49FA13D"}
 */
var vJobID = "";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95086CDB-234C-4157-88DB-239A47A628B7",variableType:4}
 */
var vLabIDNums = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E6CED4E-1DB3-4FA9-814F-2FDD2B006D53",variableType:4}
 */
var vLabTotPieces = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B5C8EF7B-B1CB-419E-B298-A5482A6BC7D7",variableType:4}
 */
var vLabTotalWt = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9030CBCF-A727-4997-92EA-BC95AFF8E82B",variableType:4}
 */
var vLabNumPcmks = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69D72F36-65B5-4EBC-AB19-730A01CB4152"}
 */
var vSeqNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F785E03B-1F03-45D1-AD46-9DA034036684"}
 */
var vSheetNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"938C9EB0-1A32-45C8-B87C-6E17424BDD85"}
 */
var vSONum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1F02CC8-447F-4D6B-A9AD-2608A3671269"}
 */
var vLoadNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7BC8FE61-854B-4DE5-9F77-0BCF5C09ECB5"}
 */
var vLotNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1781408A-6DD2-4925-81CC-D9B2790519C4"}
 */
var vPkgNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2B5CA517-9AB5-480F-B63B-A1BD0ECD555A"}
 */
var vLoadAll = "";

/**
 * @type {String}
 * Load Release loads.load_release
 * @properties={typeid:35,uuid:"7FDF40FA-DA0C-4BC5-805A-228605726532"}
 */
var vLoadRel = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"282EB30D-FC62-4A94-8B5D-D04AA69333B3"}
 */
var vPiecemark = "";

/**
 * @type {String}
 * Piecemark Release idfiles.piece_release
 * @properties={typeid:35,uuid:"4053EFB6-92A9-47DA-B111-15551B317FDA"}
 */
var vPcmkRel = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BED80944-F819-4211-80B3-155633FBE4F4"}
 */
var vFabShop = "";

/**
 * @type {String}
 * Job PO Release jobs.po_release 
 * @properties={typeid:35,uuid:"9A23AC08-9482-44C2-8A29-EC8FD5BAAA59"}
 */
var vJobRel = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAB887BC-601D-4B2B-A47F-E91152E199B2"}
 */
var vArea = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2DA98BE2-D7DD-4812-94D5-96328032CDFE"}
 */
var vBatch = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E3B0408-2C60-4C7B-92E5-7EC48C15E1B9"}
 */
var vCowCode = "";

/**
 * @properties={typeid:35,uuid:"0C67F96B-0000-47EC-8E4A-7A8577FC7ABD",variableType:-4}
 */
var jobFound = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"620FACFC-1270-4391-84B5-AA6295D5B3B6"}
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
 * @properties={typeid:24,uuid:"B413014E-5E28-428A-8BBD-692F6E2A7710"}
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
 * @properties={typeid:24,uuid:"427C542C-E90E-4162-879A-2569A49EA56D"}
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
			var status = true;
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
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"B7085E33-A4A5-41BB-BD90-FD4BF20E5605"}
 */
function convertLoadToId(itemCSV){
	if (itemCSV == ""){return null}
	var arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return}
	/** @type {JSFoundSet<db:/stsservoy/loads>} */
	var fs = databaseManager.getFoundSet('stsservoy','loads');
	var idCSV = "";
	for (var index = 0;index < arrayN.length;index++){
		if (fs.find()){
			fs.load_number = arrayN[index];
			if (fs.search()){
				var rec = fs.getRecord(1);
				idCSV = idCSV + "," + rec.load_id;
			}
		}
	}
	if (idCSV == "") {return null}
	idCSV.replace(",","");
	return arrayToString(idCSV);
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"A07D26ED-9C2B-4DEA-84B0-BBE7B2585B6F"}
 */
function convertLotToId(itemCSV){
	if (itemCSV == ""){return null}
	var arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return}
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	var idCSV = "";
	for (var index = 0;index < arrayN.length;index++){
		if (fs.find()){
			fs.lot_number = arrayN[index];
			if (fs.search()){
				var rec = fs.getRecord(1);
				idCSV = idCSV + "," + rec.load_id;
			}
		}
	}
	if (idCSV == "") {return null}
	idCSV.replace(",","");
	return arrayToString(idCSV);
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"A14EC31F-DA3C-474C-926F-D30AA149D9F8"}
 */
function convertPkgToId(itemCSV){
	if (itemCSV == ""){return null}
	var arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return}
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	var idCSV = "";
	for (var index = 0;index < arrayN.length;index++){
		if (fs.find()){
			fs.lot_number = arrayN[index];
			if (fs.search()){
				var rec = fs.getRecord(1);
				idCSV = idCSV + "," + rec.load_id;
			}
		}
	}
	if (idCSV == "") {return null}
	idCSV.replace(",","");
	return arrayToString(idCSV);
}

/**
 * @properties={typeid:24,uuid:"86087C50-E905-4A7C-A726-3DB659540029"}
 */
function collectCriteria(){
	// feeds jobs.viewBTableAlt()
	var area = arrayToString(vArea);
	var batch = arrayToString(vBatch);
	var cowCode = arrayToString(vCowCode);
	var fabShop = arrayToString(vFabShop);
	var jobRel = arrayToString(vJobRel);
	if (vLoadAll){
		var loadAll = null;
	} else {
		loadAll = arrayToString(vLoadNum);
	}
	application.output('vLoadRel '+vLoadRel);
	var loadRel = convertLoadToId(vLoadRel);
	application.output('loadRel '+loadRel);
	var lotNum = convertLotToId(vLotNum);//ticket#7
	var pkgNum = arrayToString(vPkgNum);//ticket#7, currently pkgNum is a FabTrol reference number
	var pcmkRel = arrayToString(vPcmkRel);
	var pmark = arrayToString(vPiecemark);
	var seqNum = arrayToString(vSeqNum);
	var sheetNum = arrayToString(vSheetNum);
	var soNum = arrayToString(vSONum);
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
	scopes.jobs.viewBTableToForm(criteria,'delete_piecemark_info');
}

/**
 * TODO generated, please specify type and doc for the params
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"F0049A56-F0B8-4991-98EE-2FD5C7DF64FA"}
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
 * @properties={typeid:24,uuid:"C475BEBD-83D4-4676-828B-D6C8AB673616"}
 */
function browseInfoEnable(){
	if (jobFound){
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
 * @properties={typeid:24,uuid:"24AD80C5-DC06-4258-9587-54CFAAF778EE"}
 * @AllowToRunInFind
 */
function onActionClear(event) {
	var formName = event.getFormName();
	application.output(event);
	for(var index in forms[formName]){
		var name = index;
		if (name == 'validate'){continue}
		if (name.search('v') == 0){
			if ((typeof forms[formName][index]) == "number"){
				forms[formName][index] = 0
			} else {
				forms[formName][index] = "";
			}
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
 * @properties={typeid:24,uuid:"E00DC544-46CE-4685-BC78-596AB741318A"}
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
	if (vLabTotPieces != 0){
		elements.buttBrowse.enabled = true;
	}
}

