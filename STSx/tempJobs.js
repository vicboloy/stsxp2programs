/**
* @type abcPrinterList {Array} Array containing units of measure
 * small change
 * 
 *
 * @properties={typeid:35,uuid:"935BB011-54BE-48E1-86D1-8B2BEB90FF78",variableType:-4}
 */
var abcPrinterList = new Array;
abcPrinterList.push("Allegro");
abcPrinterList.push("DataMax");
abcPrinterList.push("LabeLase 1000");
abcPrinterList.push("Pinnacle");
abcPrinterList.push("Prodigy Plus");
abcPrinterList.push("TEC B-400");
abcPrinterList.push("Zebra");
/**
 * @type aLabelType {Array} aLabelType Array containing units of measure
*
 * 
 *
 * @properties={typeid:35,uuid:"78C46DE9-7439-41A1-BCDB-1EBAB7DAB86B",variableType:-4}
 */
var aLabelType = new Array;
aLabelType.push("Raw Matl");
aLabelType.push("Serial #");
aLabelType.push("Serial01");
aLabelType.push("Standard");
/**
 * @type lanUsers {Array} lanUsers Array containing units of measure
 *
 * 
 *
 * @properties={typeid:35,uuid:"C622AEEB-F88A-432D-88AB-122267AE4CFF",variableType:-4}
 */
var lanUsers = new Array;
/**
 * 
 *
 * @properties={typeid:35,uuid:"844A8F68-2CB1-4266-929B-FEA8271FFEFB",variableType:-4}
 */
var importResults = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"B37ECF23-567C-4FC8-BD26-57799FCD6146",variableType:-4}
 */
var importErrors = [];
/**
 * Array for all labels by unique piecemark and sequence.
 * piecemark_sequence
 * 
 *
 * @properties={typeid:35,uuid:"BEC17847-F590-4069-BAAD-680A3FDDEAE9",variableType:-4}
 */
var importLabelCounts = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"D7B49F23-30C8-43B9-9CCA-1E9F780FD1CF",variableType:-4}
 */
var mappedFormatArray = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"59E0BEB0-6C04-412E-9D0D-4864F6976CF1",variableType:-4}
 */
var mappedFormatArrayDescrips = [];

/**
 * 
 *
 * @properties={typeid:35,uuid:"D1376660-2F69-4F8F-A756-1B90FE4504B9",variableType:-4}
 */
var browseTable = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"BB392133-02B1-4632-BB24-B98D69E0FB84",variableType:-4}
 */
var browseFS = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"DF8E1255-A835-4C03-BC82-4FE9C55C8054",variableType:-4}
 */
var browseFS2 = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"A7B39FD2-2E1A-44EB-B8BD-910DAB9B51A5",variableType:-4}
 */
var browseFieldOrder = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"54B8DC4C-5619-43DD-AAE5-209577DEDD6A",variableType:-4}
 */
var dsBrowse = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"FDAFE8A7-A369-4C70-BA03-54447B1F21D9",variableType:-4}
 */
var browseDatasource = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"EE175CEC-E3F5-4C3E-B7B4-D0935C52DBED",variableType:-4}
 */
var fsBrowse = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"D86F8C66-5F4A-4521-85B2-E16029327FC9",variableType:-4}
 */
var browseArray = [];

/**
 * Status on databaseManager saves.
 * 
 *
 * @properties={typeid:35,uuid:"0C47DFB9-30B3-4791-8670-8B9545F20BEC",variableType:-4}
 */
var saveStat = true;
/**
 * 
 *
 * @properties={typeid:35,uuid:"7829189A-6B16-4ACE-B131-C274D6F8587D",variableType:-4}
 */
var usedFields = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"10865814-C0AF-4DF1-9169-435BCA91A80F",variableType:-4}
 */
var importJob = {
	bcFormId : null,//#87ticket#87
	jobId : "",
	jobNumber : "",
	title : "",
	name : "",
	date : "",
	associationId : null,
	customerId : null,
	metricFlag : 0
}
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"CDE50203-8168-45B9-8190-9EDF4DB6BE31"}
 */
var importJobNumber = "";
/**
 * @type {Date}
 *
 * 
 *
 * @properties={typeid:35,uuid:"97921F81-14AF-417C-8763-0D615A081ADF",variableType:93}
 */
var importDate = null;
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"CF1F5FE6-DB3D-4282-BF01-7464870DC838"}
 */
var importJobName = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"BE308EA4-9B35-4FF6-B570-8395E45D26BF"}
 */
var importFormatType = "";
/**
 * 
 *
 * @properties={typeid:35,uuid:"D69931FC-E12A-4C74-BF78-D03AA8B26C2C",variableType:-4}
 */
var jobName = forms.kiss_option_import.jobName;
/**
 * 
 *
 * @properties={typeid:35,uuid:"1CA9F875-6895-4993-9CD5-B5ACD5EA86CA",variableType:-4}
 */
var jobDate = forms.kiss_option_import.jobDate;
/**
 * 
 *
 * @properties={typeid:35,uuid:"289DE5E9-7BD0-4046-96D0-63D08769CAC4",variableType:-4}
 */
var jobMetric = forms.kiss_option_import.jobMetric;

/**
 * 
 *
 * @properties={typeid:35,uuid:"71DB23CE-67B1-46D2-8EE5-6115C8B686F9",variableType:-4}
 */
var keepMinors = forms.kiss_option_import.keepMinors;
/**
 * 
 *
 * @properties={typeid:35,uuid:"DA19B0B0-FB34-4A0A-A8C4-BD1B214698A9",variableType:-4}
 */
var weightPerID = scopes.prefs.wtPrompt;
/**
 * GUI and import update times tracker
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"C4237236-F8F2-4A3B-A226-E3DC1A1932C6",variableType:8}
 */
var timeIn;
/**
 * temporary hold table for which columns to hide when saving preferences
 * 
 *
 * @properties={typeid:35,uuid:"FD0CF28E-407D-4A28-BF42-DB87D409153B",variableType:-4}
 */
var tempTableColumnsHide = [];
/**
 * GUI and import update times tracker
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"0E5F44B7-8A32-4450-911F-DEFC10C211DF"}
 */
var timeOut;
/**
 * GUI and import update times tracker
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"58D7CEA9-2995-461F-8456-23B5D0087689"}
 */
var timeUpdate;
/**
 * 
 *
 * @properties={typeid:35,uuid:"D37E790D-6D5A-490B-B381-04A9DD829F8A",variableType:-4}
 */
var quantityPerID = scopes.prefs.qtyPrompt;
/**
 * 
 *
 * @properties={typeid:35,uuid:"2EB465DF-90CB-48C8-B1FE-C69D07C259A0",variableType:-4}
 */
var excludeFS = forms.kiss_option_import.transitionFSsink;
/**
 * 
 *
 * @properties={typeid:35,uuid:"FA1544B9-16A9-4857-962F-B2C4180DD387",variableType:-4}
 */
var excludeStr = forms.kiss_option_import.jobImportExc;
/**
 * @type {String}
 * Hold customerIDs for a single job number, usually one, but will be additional customer ids.
 * 
 *
 * @properties={typeid:35,uuid:"E8D5DFA8-8075-4DC4-8151-1F3AF13E7D5E",variableType:-4}
 */
var customerIDs = [];
/**
 * Upon load get jobs in array 
 * 
 *
 * @properties={typeid:35,uuid:"D7254A13-DCB5-461E-A749-8A9C2B87D10A",variableType:-4}
 */
var jobsArray = [];
/**
 * Upon load get customers in array
 * 
 *
 * @properties={typeid:35,uuid:"6DC93898-9105-40E4-A7C0-FA67E37380E9",variableType:-4}
 */
var customersArray = [];
/**
 * @type {String}
 * Hold the selected idfile_id for view transactions for the idfile_id
 * 
 *
 * @properties={typeid:35,uuid:"BEBE1510-9D94-4DB3-8F65-D5E0B01A8565"}
 */
var transactionIdfileId = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"D6DA40AB-49F0-4C4F-A1DF-02A6DA81C2B4",variableType:-4}
 */
var cowInfo = {
	custCode : null,
	commCode : null,
	currency : null,
	weight : null,
	cost : null
}
/**
 * 
 *
 * @properties={typeid:35,uuid:"F22B47DD-7333-44FB-9712-97559D78BED8",variableType:-4}
 */
var jobIDs = [];
/**
 * @type {String}
 * Id for browsing under total table browsing.
 * 
 *
 * @properties={typeid:35,uuid:"0B02C106-83D5-4884-8263-C77EB806C2B9"}
 */
var browseJobID = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"6479BA03-8A36-4D67-841F-B7ADACAA46F1"}
 */
var browseJobIDrecall = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"1200AFB4-CABC-4694-A475-F4C54F71AE62"}
 */
var jobUnderCustomer = "";
/**
 * List of piecemarks under selected job
 * 
 *
 * @properties={typeid:35,uuid:"418BE0CD-6DC7-48E2-9A48-8D3B722C26ED",variableType:-4}
 */
var jobPiecemarks = [];
/**
 * Barcodes which need to be deleted. in bulk. id_serial_number_id records.
 * 
 *
 * @properties={typeid:35,uuid:"1E25F2E9-BADA-4F2D-A802-40E6F31498B8",variableType:-4}
 */
var barcodesToDelete = [];

/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"36BA25B7-A5E7-4A16-BAF4-18D2E05C7F2C"}
 */
var customerName = "";
/**
 * 
 *
 * @properties={typeid:35,uuid:"BD60C8BC-6891-46E1-9272-9185F2DB8234",variableType:-4}
 */
var columnNames = forms.kiss_option_import.columnNames; // columnNames indexed into array
/**
 * 
 *
 * @properties={typeid:35,uuid:"90FFA6B8-7D60-428D-861F-2487C979E780",variableType:-4}
 */
var columnNames2 = []; // columnNames for browsing sql-based forms
/**
 * 
 *
 * @properties={typeid:35,uuid:"A5AE0CE4-2D37-4C5A-B3E0-5167E13319D1",variableType:-4}
 */
var removeColumns = [];
/**
 * Keep separate count for job load information browsing.
 * @type {String}
 * 
 *
 * @properties={typeid:35,uuid:"E25D9266-E9C5-4F2A-8598-EEE62830D8A8"}
 */
var loadCountsJobId = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"3034109B-89D2-4B27-883D-AA1A854D7069",variableType:-4}
 */
var tablePKs = ['tenant_uuid','sheet_id','sequence_id','piecemark_id',
	'idfile_id','loads_id','status_description_id','e_route_code_id','routing_id','job_id',
	'lot_id','id_creation_date','id_serial_number_id','association_uuid'];
/**
 * tableOrderingArray[index'order'] = columnName
 * 
 *
 * @properties={typeid:35,uuid:"1172AB96-0FFC-46E9-B72B-2D30132634A4",variableType:-4}
 */
var tableOrderingArray = [];
/**
 * tableOrderingData = [columnName,positionX,columnLength,visible]
 * 
 *
 * @properties={typeid:35,uuid:"3200E49E-33F2-4C44-B3B5-25C52A9F2666",variableType:-4}
 */
var tableOrderingData = [];
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"4E14C959-6209-46F6-A9ED-A6972987856C"}
 */
var generalTableOrderTableName = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"7A4AB973-F406-4934-937C-EB5E15C9ED0B"}
 */
var versionForm = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"BCE52281-1377-4689-BABA-8C316A71BD22"}
 */
var tmp_LabelSort = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"3EA27DDC-B211-475A-BB65-A853261AD2B4"}
 */
var tmp_Print = "";
/**
 * 
 *
 * @properties={typeid:35,uuid:"FBF9D635-7390-4E08-9DFF-AE71E6919F37",variableType:-4}
 */
var parseArray = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"28E78785-8069-4A90-A83E-C35A53E7D533",variableType:-4}
 */
var parseLines = [];
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"9154578D-0900-4146-B17A-8857F4FB7666",variableType:8}
 */
var recordSaveLimit = 20;
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"1C453130-F260-452F-9175-D69E0E5EA169",variableType:8}
 */
var recordSaveDur = 40;
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"F700B57C-57A7-4C9E-99C4-C61B6B8ADE5C",variableType:8}
 */
var idCreationCount = 0;
/**
 * List of new barcodes if they are not located in the db by primary key, meaning they are not yet saved
 * 
 *
 * @properties={typeid:35,uuid:"09571970-B82C-4BAA-866A-D5DE48E75B87",variableType:-4}
 */
var idBarcodePool = [];
/**
 * This is to keep a cache of import records by primary key as the index, so that they may be cached 
 * while building piecemarks during the import process.
 * 
 * 
 *
 * @properties={typeid:35,uuid:"1180E489-7CE8-4714-9CBF-908677F52C33",variableType:-4}
 */
var importRecordCache = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"16388B14-A153-43FD-A94A-EC3118023F26",variableType:-4}
 */
var i18nColumnNames = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"1212EA5F-5F5B-41A8-9642-0EE1F9BE8FF3",variableType:-4}
 */
var dsQuerySave = [];
// -------------------------------------------------------------------------------------------------------------------
/**
 * dsLotArray["_"+lotNum+"|"+"_"+seqNum] = lot_id
 * dsLotArray[lot_id] = "_"+lotNum+"|"+"_"+seqNum
 * dsLotList[lot_id] = *index into dsLots
 * dsLots = *lots dataset*
 *
 * 
 *
 * @properties={typeid:24,uuid:"B374C22C-DABA-4B14-B9BE-F1200185655F"}
 */
function readLots(){
	dsLotArray = [];
	dsLotList = [];
	dsLots = null;
	var length = 0;
	for (var item in dsSequenceArray){length++;break;}
	if (length == 0){return}
	var tempSeqIdList = []
	for (var sequence in dsSequenceArray){
		application.output('sequence '+sequence+' '+dsSequenceArray[sequence]);
		//if (dsSequenceArray[sequence].length != 36){continue}
		tempSeqIdList.push(dsSequenceArray[sequence]);
	}
	/** @type {QBSelect<db:/stsservoy/lots>} */
	var q = databaseManager.createSelect('db:/stsservoy/lots');
	q.result.add(q.columns.lot_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.sequence_id.isin(tempSeqIdList));
	dsLots = databaseManager.getFoundSet(q);
	
	dsLotList = []; // lots reference sequences, so grab list of sequences for this job
	dsLotArray = [];
	var lotId = ""; var seqId = ""; var lotNum = ""; var seqNum = "";
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var rec = null; var index = 1;
	while (rec = dsLots.getRecord(index++)){
		lotId = rec.lot_id;
		seqId = rec.sequence_id;
		lotNum = rec.lot;
		seqNum = dsSequenceArray[seqId].split("_")[1];
		//application.output('sequence should be blank REMOVE'+seqNum);
		dsLotList[lotId] = index-1;
		var unique = "_"+lotNum+"|_"+seqNum;
		dsLotArray[unique] = lotId;
		dsLotArray[lotId] = unique;
	}
	if (application.isInDeveloper()){application.output("lots "+dsLots.getSize())}
}
/**
 * dsBarcodeArray[id_serial_number_id] = *rowIndex into dsBarcodes dataset*
 * 
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param jobID
 *
 * @properties={typeid:24,uuid:"4E11A1A3-DBBA-459A-BD68-BD7EB62A306F"}
 */
function readBarcodes(jobID){
	//dsBarcodeList already defined in readIdfiles()
	var bcListArray = []; //temporary array list of barcode ids
	if (!dsIdfiles){return}
	var rec = null; var index = 1;
	while (rec = dsIdfiles.getRecord(index++)){
		var serialID = dsIdfiles.id_serial_number_id;
		if (!bcListArray[serialID]){bcListArray.push(serialID)}
	}

	
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.result.add(q.columns.id_serial_number_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.id_serial_number_id.isin(bcListArray));
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	dsBarcodes = databaseManager.getFoundSet(q);
	if (dsBarcodes.getSize == 0){return}
	dsBarcodeArray = [];
	rec = null; index = 1;
	while (rec = dsBarcodes.getRecord(index++)){
		serialID = rec.id_serial_number_id;
		dsBarcodeArray[serialID] = index;
	}
	bcListArray = [];//temporary array, clear memory
	scopes.jobs.jobBarcodes = dsBarcodes.getSize();
	if (application.isInDeveloper()){application.output("barcodes "+scopes.jobs.jobBarcodes)}
}
/**
 * dsSequenceArray["_"+seqNum] = sequence_id
 * dsSequenceArray[sequence_id] = "_"+"_"+seqNum
 * dsSequenceList[sequence_id] = *index into dsSequences.rowIndex*
 * 
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param jobID
 *
 * @properties={typeid:24,uuid:"0692AE13-E96C-49A6-B3AE-9E753CC6D881"}
 */
function readSequences(jobID){
	var seqNameList = scopes.jobs.jobSheets;
	dsSequenceList = [];
	dsSequences = null;
	dsSequenceArray = [];
	/** @type {QBSelect<db:/stsservoy/sequences>} */
	var q = databaseManager.createSelect('db:/stsservoy/sequences');
	q.result.add(q.columns.sequence_id);
	q.where.add(q.columns.job_id.eq(jobID));
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	/** @type {JSDataSet} */
	dsSequences = databaseManager.getFoundSet(q);

	var seqId = ""; var seqNum = ""; var unique = "";
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
	var rec = null; var index = 1;
	while (rec = dsSequences.getRecord(index++)){
		seqId = rec.sequence_id;
		seqNum = rec.sequence_number;
		unique = "_"+seqNum;
		if (seqNameList.indexOf(unique) == -1){
			seqNameList.push(unique);
		}
		dsSequenceArray[unique] = seqId;
		dsSequenceArray[seqId] = unique;
		dsSequenceList[seqId] = index-1;
	}
	if (application.isInDeveloper()){application.output("sequences "+dsSequences.getSize())}
}
/**
 * 	 * dsBarcodeList[id_serial_number_id] = [idfile_id1...idfile_id2]
	 * dsBarcodeList[idfile_id] = id_serial_number_id
	 * dsIdfileArray[id_serial_number_id] = *count idfiles this barcode*
	 * dsIdfileList[idfile_id] = *index into dsIdfiles*
	 * dsIdfileArray[uniqueIdfileId] = dsIdfileArray[id_serial_number_id]
	 * dsIdfileListByPm[piecemark_id] = [idfileId1..idfileIdn] list of idfiles by piecemark
 * 
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"58D20332-D026-47E4-8502-0A758A19344D"}
 */
function readIdfiles(){
	dsBarcodeList = [];
	dsIdfileList = [];
	dsIdfiles = null;
	dsIdfileArray = [];
	dsIdfileListByPm = []; 
	var barcodeRecorded = [];
	var piecemarkArray = [];
	
	if (dsPiecemarks == null){return}
	if (dsPiecemarks.getMaxRowIndex() == 0){return}
	var length = dsPiecemarks.getMaxRowIndex();
	if (application.isInDeveloper()){application.output('piecemarks found '+length);}
	for (var index2 = 1;index2 <= length;index2++){
		dsPiecemarks.rowIndex = index2;
		piecemarkArray.push(application.getUUID(dsPiecemarks.piecemark_id));
	}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.where.add(q.columns.piecemark_id.isin(piecemarkArray));
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	
	dsIdfiles = databaseManager.getFoundSet(q);
	var rows = dsIdfiles.getSize();
	// unique is piecemark_id, barcodeCount, sequence_id, lot_id
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var rec = null; var index = 1;
	while (rec = dsIdfiles.getRecord(index++)){
		var pmId = rec.piecemark_id;//check here
		var holdPmIndex = index-1;

		var bcId = rec.id_serial_number_id;
		var seqId = rec.sequence_id;
		var lotId = rec.lot_id;
		var idId = rec.idfile_id;
		(dsIdfileArray[bcId] != null) ?	dsIdfileArray[bcId]++ : dsIdfileArray[bcId] = 1;

		pmId = rec.piecemark_id;
		bcId = rec.id_serial_number_id;
		seqId = rec.sequence_id;
		lotId = rec.lot_id;
		idId = rec.idfile_id;

		if (dsBarcodeList[bcId] == null){dsBarcodeList[bcId] = []}
		dsBarcodeList[bcId].push(idId);//barcodes->idfiles (1..n)
		dsBarcodeList[idId] = bcId;//reverse idfile->barcode (1..1)
		var uniqueIdfileId = uniqueIdfile(rec);

		var barcodeCount = dsIdfileArray[bcId];
		if (dsIdfileArray[uniqueIdfileId] == null){dsIdfileArray[uniqueIdfileId] = []}
		//foreach each idfile, get piecemark, if barcode count isn't collected, then store the number in the array
		// the length of the array is the number of labels, the count is for each label
		if (barcodeRecorded.indexOf(bcId) == -1){
			dsIdfileArray[uniqueIdfileId].push(barcodeCount);
			barcodeRecorded.push(bcId);
			//application.output(unique+" "+barcodeCount);
		}
		if (!dsIdfileListByPm[pmId]){dsIdfileListByPm[pmId] = []}
		dsIdfileListByPm[pmId].push(idId);
	}
	if (application.isInDeveloper()){application.output("idfiles "+dsIdfiles.getSize())}
}
/**
 * dsTossed.rowIndex dataset
 * dsTossedArray[material,grade,finish] = piecemark_id
 * dsTossedArray[piecemark_id] = material,grade,finish
 * dsTossedList[piecemark_id] = *rowIndex into dsTossed dataset*
 * 
 * 
 *
 * @properties={typeid:24,uuid:"42699170-570F-4AA1-87D7-9A5576275E23"}
 */
function readSummedMarks(){
	dsTossedList = [];
	dsTossed = null;
	dsTossedArray = [];
	if (dsSheets.getMaxRowIndex() == 0){return}
	var textList = "("; var comma = ",";
	if (dsSheets == null){return}
	var length = dsSheets.getMaxRowIndex();
	for (var index2 = 1;index2 <= length;index2++){
		if (index2 == length || length == 1){comma=""}
		dsSheets.rowIndex = index2;
		textList = textList + "\'"+dsSheets.sheet_id+"\'"+comma;
	}
	textList += ")";
	var maxReturnedRows = -1;
	var query = "SELECT *" +
		"FROM piecemarks " +
		"WHERE sheet_id IN " + textList + " "+
		" AND delete_flag = 11 " +
		"AND tenant_uuid = ? ";
	var args = [globals.session.tenant_uuid];
	dsTossed = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	dsTossedArray = [];
	var rows = dsTossed.getMaxRowIndex();
	var pmId = "";
	for (var index = 1;index <= rows;index++){
		dsTossed.rowIndex = index;
		pmId = dsTossed.piecemark_id;
		dsTossedList[pmId] = index;
		// unique to piecemark, grade, sequence, lot
		//var unique = dsPiecemarks.piecemark+","+dsPiecemarks.material+","+dsPiecemarks.grade;
		////var unique = dsTossed.piecemark+","+dsTossed.parent_piecemark+","+dsTossed.sheet_id+","+dsTossed.grade+","+dsTossed.finish;
		var unique = uniquePiecemark(dsTossed)
		dsTossedArray[unique] = pmId;
		dsTossedArray[pmId] = unique;
		/**

		 */
	}
	application.output("summarized "+dsTossed.getMaxRowIndex());
}
/**
 * dsPiecemarks dataset
 * dsPiecemarkList[piecemark_id] = *index into dsPiecemarks dataset*
 * dsPiecemarkArray[(piecemark,parent_piecemark,sheet_number,grade,finish)|(material,grade,finish)] = piecemark_id
 * dsPiecemarkIds[int] list of piecemark ids for sheets under job id
 * Also returns total weight, total piecemarks, total pieces, number barcodes
 * 
 * 
 *
 * @properties={typeid:24,uuid:"8635259B-522D-4747-8CA4-640576CC21CC"}
 */
function readPiecemarks(){
	dsPiecemarkList = [];
	dsPiecemarks = null;
	dsPiecemarkArray = [];
	if (dsSheets.getMaxRowIndex() == 0){return}
	
	var textList = "("; var comma = ",";
	if (dsSheets == null){return}
	var length = dsSheets.getMaxRowIndex();
	for (var index2 = 0;index2 < length;index2++){
		if (index2 == length-1){comma=""}
		dsSheets.rowIndex = index2;
		textList = textList + "\'"+dsSheets.sheet_id+"\'"+comma;
	}
	textList += ")";
	var maxReturnedRows = -1;
	var query = "SELECT *" +
		"FROM piecemarks " +
		"WHERE sheet_id IN " + textList + " "+
		" AND delete_flag IS null " +
		"AND tenant_uuid = ? ";
	var args = [globals.session.tenant_uuid];
	
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var pm = databaseManager.createSelect('db:/stsservoy/piecemarks');
	pm.result.add(pm.columns.piecemark_id);
	pm.result.add(pm.columns.piecemark);
	pm.result.add(pm.columns.parent_piecemark);
	pm.result.add(pm.columns.grade);
	pm.result.add(pm.columns.material);
	pm.result.add(pm.columns.sheet_id);
	pm.result.add(pm.columns.finish);
	pm.where.add(pm.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	pm.where.add(pm.columns.delete_flag.isNull);
	pm.where.add(pm.columns.sheet_id.isin(dsSheetIds));
	dsPiecemarks = databaseManager.getDataSetByQuery(pm,-1);
	//dsPiecemarks = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	dsPiecemarkArray = [];
	dsPiecemarkIds = [];
	var rows = dsPiecemarks.getMaxRowIndex();
	var pmId = "";
	for (var index = 1;index <= rows;index++){
		dsPiecemarks.rowIndex = index;
		pmId = dsPiecemarks.piecemark_id;
		dsPiecemarkIds.push(pmId);
		dsPiecemarkList[pmId] = index;
		// unique to piecemark, grade, sequence, lot - see function uniquePiecemark
		var unique = uniquePiecemark(dsPiecemarks);
		dsPiecemarkArray[unique] = pmId;
	}
	query = "SELECT sum(item_quantity),sum(item_weight*item_quantity) " +
	"FROM piecemarks " +
	"WHERE sheet_id IN " + textList + " "+
	" AND delete_flag IS null " +
	"AND tenant_uuid = ? ";
	args = [globals.session.tenant_uuid];
	/** @type {JSDataSet} */
	var weightTotal = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	scopes.jobs.jobWeightTotal  = weightTotal[0][1]; 	
	scopes.jobs.jobPiecesCount  = weightTotal[0][0]; 	
	scopes.jobs.jobPcmkCount = dsPiecemarks.getMaxRowIndex();
	if (application.isInDeveloper()){application.output("piecemarks "+scopes.jobs.jobPcmkCount)}
}
/**
 * 
 * @param jobID
 *
 * dsSheetArray["_"+sheetNum] = sheet_id
 * dsSheetArray[sheet_id] = "_"+sheetNum
 * dsSheetArrayRev[sheet_id] = "_"+sheetNum
 * dsSheetList[sheet_id] = *rowIndex into dsSheets*
 * dsSheetIds[int] = array of sheet ids for job id
 * dsSheets *sheets dataset*
 * 
 * 
 *
 * @properties={typeid:24,uuid:"8FCF1FE7-E53A-4BAC-B454-149111DFA9A1"}
 */
function readSheets(jobID){
	var sheetNameList = scopes.jobs.jobSheets;
	dsSheetList = [];
	dsSheets = null;
	dsSheetArray = [];
	dsSheetIds = [];
	//var maxReturnedRows = -1;
	//var query = "SELECT * " +
	//	"FROM sheets " +
	//	"WHERE job_id = ?" +
	//	" AND delete_flag IS null " +
	//	"AND tenant_uuid = ?";
	//var args = [];
	//args.push(jobID);
	//args.push(globals.session.tenant_uuid);
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var sh = databaseManager.createSelect('db:/stsservoy/sheets');
	sh.result.add(sh.columns.sheet_id);
	sh.result.add(sh.columns.sheet_number);
	sh.where.add(sh.columns.job_id.eq(jobID));
	sh.where.add(sh.columns.delete_flag.isNull);
	sh.where.add(sh.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	dsSheets = databaseManager.getFoundSet(sh);
	dsSheets = databaseManager.getDataSetByQuery(sh,-1);
	//dsSheets = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	var sheetNum = ""; var sheetId = "";
	var rows = dsSheets.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		dsSheets.rowIndex = index;
		sheetNum = dsSheets.sheet_number;
		sheetId = dsSheets.sheet_id;
		dsSheetIds.push(sheetId);
		dsSheetList[sheetId] = index;
		var unique = "_"+sheetNum;
		dsSheetArray[unique] = sheetId;
		dsSheetArray[sheetId] = unique;
		dsSheetArrayRev[sheetId] = unique;
		if (sheetNameList.indexOf(unique) == -1){sheetNameList.push(unique)}
	}
	if (application.isInDeveloper()){application.output("sheets "+dsSheets.getMaxRowIndex())}
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"05978674-5427-42D3-9F55-FA2E17FF7D04"}
 */
function readPieceTables(){
	var jobID = scopes.jobs.jobUnderCustomer;
	if (!jobID){
		var win = application.getActiveWindow();
		var formName = win.controller.getName();
		if (formName.search('import_performance') == 0){
			jobID = forms.import_performance_setting.jobUUID;
		}
	}
	if (application.isInDeveloper()){application.output('readpiecetables job id '+jobID+'----------------------------------------')}
	if (!jobID || jobID == ""){return}
	readSheets(jobID);
	readSheetBoms(jobID);
	readPiecemarks();
	readSummedMarks();
	readIdfiles();
	readBarcodes(jobID);
	readSequences(jobID);
	readLots();
}
/**
 * @param sourceDb
 *
 * 
 *
 * @properties={typeid:24,uuid:"F3A37641-448F-4EFA-8B6E-9D06CCFCC2C1"}
 */
function createSummedMarks(sourceDb){
	var jobID = scopes.jobs.jobUnderCustomer;
	var length = sourceDb.getMaxRowIndex();
	/** @type {JSFoundset<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	for (var index = 0;index < length;index++){
		sourceDb.rowIndex = index+1;
		////var unique = sourceDb.piecemark+","+sourceDb.parent_piecemark+","+dsSheetArray["_"+sourceDb.sheet_number]+","+sourceDb.grade+","+sourceDb.finish;
		var unique = uniquePiecemark(sourceDb);
		commitTransactions();
		if (dsPiecemarkArray[unique] == null){
			/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
			var fsRec = sourceDb;		
			var recIndex = fs.newRecord();
			var rec = fs.getRecord(recIndex);
			rec.job_id = jobID;
			rec.tenant_uuid = globals.session.tenant_uuid;
			rec.material = fsRec.material;
			rec.finish = fsRec.finish;
			rec.grade = fsRec.grade;
			rec.item_length = fsRec.item_length*1;
			rec.item_quantity = fsRec.item_quantity;
			rec.item_weight = fsRec.item_weight*1;
			rec.parent_piecemark = fsRec.parent_piecemark
			rec.piecemark = fsRec.piecemark;
			rec.sheet_id = dsSheetArray["_"+fsRec.sheet_number];
			rec.e_route_code_id = forms.kiss_option_import.importRouting;
			rec.delete_flag = 11; // 1+1 is summarization record
			rec.edit_date = new Date();
			dsPiecemarkArray[unique] = rec.piecemark_id;
			createdRecords++;
		}
	}
}
/**
 * @param seqId
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"0FC45FA6-A592-46BB-A390-C006D49FB8DD"}
 */
function loadSequences(seqId){
	// load sheets into newRow
	var index = dsSequenceList[seqId];
	var cols = dsSequences.getMaxColumnIndex();
	for (var index2 = 1;index2 <= cols;index2++){
		var name = dsSequences.getColumnName(index2)+"_dsSequences";
		newRow[browseFieldOrder[name]] = dsSequences.getValue(index,index2);
		if (name == "sequences_id_dsLots"){loadLots(seqId)}
	}
}
/**
 * @param sequenceId
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"67CF2E6D-3AF2-4424-8A07-99C0878F8CC6"}
 */
function loadLots(sequenceId){
	// load lots into newRow
	var index = dsLotList[sequenceId];
	var cols = dsLots.getMaxColumnIndex();
	for (var index2 = 1;index2 <= cols;index2++){
		var name = dsLots.getColumnName(index2)+"_dsLots";
		newRow[browseFieldOrder[name]] = dsLots.getValue(index,index2);
	}
}

/**
 * @param barcodeId
 *
 * 
 *
 * @properties={typeid:24,uuid:"E72B92B0-97CA-4231-A61F-2EAA34D2D41C"}
 */
function loadBarcodes(barcodeId){
	// load sheets into newRow
	var index = dsBarcodeList.indexOf(barcodeId);
	var cols = dsBarcodes.getMaxColumnIndex();
	for (var index2 = 0;index2 < cols;index2++){
		var name = dsBarcodes.getColumnName(index2+1)+"_dsBarcodes";
		newRow[browseFieldOrder[name]] = dsBarcodes[index][index2];
	}
}
/**
 * @param sheetId
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"4F47388F-027D-4400-8204-AA9F90EB5875"}
 */
function loadSheets(sheetId){
	// load sheets into newRow
	var index = dsSheetList[sheetId];
	var cols = dsSheets.getMaxColumnIndex();
	for (var index2 = 1;index2 <= cols;index2++){
		var name = dsSheets.getColumnName(index2)+"_dsSheets";
		newRow[browseFieldOrder[name]] = dsSheets.getValue(index,index2);
	}
}
/**
 * @param pcmkId
 * 
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"F5941580-3366-421F-918A-95C2B0E88BB4"}
 */
function loadPiecemarks(pcmkId){
	// load piecemarks into newRow
	if (dsPiecemarks == null){return}
	var index = dsPiecemarkList[pcmkId];
	var cols = dsPiecemarks.getMaxColumnIndex();
	for (var index2 = 1;index2 <= cols;index2++){
		dsPiecemarks.rowIndex = index2;
		var name = dsPiecemarks.getColumnName(index2)+"_dsPiecemarks";
		newRow[browseFieldOrder[name]] = dsPiecemarks.getValue(index,index2);
		if (name == "sheet_id_dsPiecemarks"){loadSheets(dsPiecemarks.getValue(index,index2));}
	}
}
/**
 * Search import table (transitionFS) and load any piecemark records that are not in the import file but are
 * in the database into sheets table (sheetsFS)
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"714FE11D-F666-487B-86FF-D074AA26BF68"}
 */
function loadCurrentJobsRecords(){
	if (dsIdfiles == null){return}
	warningsYes();
	///var missCount = 0;
	//timeIn = new Date().getTime();
	///var found = false;
	var inPiecemarkId, inSequenceId, inLotNumber,inLotId;
	var incoming = forms.kiss_option_import.transitionFS;
	var length2 = incoming.getMaxRowIndex();
	var lengthDb = dsIdfiles.getMaxRowIndex();
	var visitId = new Array(lengthDb);
	for (var index = 0;index < lengthDb;index++){visitId[index] = 0} // set all idfiles to zero
	for (var index2 = 1;index2 <= length2;index2++){
		warningsMessage('Checking current line '+index2+" of "+length2);
		incoming.rowIndex = index2;
		inPiecemarkId = dsPiecemarkArray[uniquePiecemark(incoming)]; // get unique piecemark from incoming record then into piecemarkArray for piecemark_id
		inSequenceId = dsSequenceArray["_"+incoming.sequence_number]; // get complete matching criteria for normal piecemark
		inLotNumber = incoming.lot_number;
		if (!inLotNumber){inLotNumber = ""}
		inLotId = dsLotArray["_"+inLotNumber+"|_"+incoming.sequence_number];
		// Kiss_option_import is attached to the jobs table, so need to use query builder instead for a search
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var q =  databaseManager.createSelect("db:/stsservoy/idfiles");
		q.result.add(q.columns.idfile_id);
		q.where.add(
			q.and
				.add(q.columns.piecemark_id.eq(inPiecemarkId))
				.add(q.columns.sequence_id.eq(inSequenceId))
				.add(q.columns.lot_id.eq(inLotId))
				.add(q.columns.delete_flag.isNull)
				.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid))
			);
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var resultI = databaseManager.getFoundSet(q);  
		var lengthI = databaseManager.getFoundSetCount(resultI);
		//application.output('length is '+length);
		warningsMessage('Checking current line '+index2+" of "+length2+' ('+lengthI+' items)');
		///var length5 = 0;
 		for (var index3 = 1;index3 <= resultI.getSize();index3++){ // set visitId with each idfile comparable to idfiles listing
			var idRec = resultI.getRecord(index3);
			var visIndex = dsIdfileList[idRec.idfile_id]-1;
			//application.output('record index '+index3+' record idfileID '+newIndex+' visit index '+' dsidfilelist index '+dsIdfileList[idRec.idfile_id]);
			visitId[visIndex] = 1;
			///length5 += 1;
		}
 		//application.output('length adding '+length5);
		resultI = null;
	}
	var indexPmSqLt = [];
	var existingIdfiles = [];
	///var idfileRec = null;
	for (index3 = 0;index3 < visitId.length;index3++){
		if (visitId[index3] == 0){
			dsIdfiles.rowIndex = index3+1*1;
			var idIdfile = dsIdfiles.piecemark_id+' '+dsIdfiles.sequence_id+' '+dsIdfiles.lot_id;
			if (!indexPmSqLt[idIdfile]){
				indexPmSqLt[idIdfile] = index3+1*1; // one or many idfiles for a piecemark, get it once
				existingIdfiles.push(dsIdfiles.idfile_id);
				dsPiecemarks.rowIndex = dsPiecemarkList[dsIdfiles.piecemark_id];
				loadBlindIntoImportTable(dsIdfiles);// check this, works but do i need idfileRec = dsIdfiles
				///missCount += 1;
				//application.output('missing '+index3+' '+dsIdfiles.idfile_id+' '+dsPiecemarks.material+' pmid '+idIdfile);
			}
			//null;
		}
	}
	//application.output('miss count is '+missCount);
	//for (var pmId in indexPmSqLt){
	//	application.output('pm id '+pmId);
	//}
	
	/**
	 * deleted
	 * 
	 
	var incoming = forms.kiss_option_import.transitionFS;
	var lengthI = (!dsIdfiles) ? 0 : dsIdfiles.getMaxRowIndex();
	var visited = [];
	incoming = forms.kiss_option_import.transitionFS;
	var inSeqId, inLotId, dbSeqId, dbLotId, inPiecemarkId, dbPiecemarkId, dbPiecemark, dbSummed, inSummed, inPiecemark;
	for (index = 1;index<=lengthI;index++){
		//application.output('checking '+index);
		 // This must be by piecemark, sequence_number, lot_number
		dsIdfiles.rowIndex = index; // access indexed records with dsPiecemarks
		//var idfileId = uniqueIdfileIdDb(dsPiecemarks);
		var uniqueIdfileId = dsIdfiles.piecemark_id+dsIdfiles.sequence_id+dsIdfiles.lot_id;
		if (visited.indexOf(uniqueIdfileId) != -1){continue}
		dbSeqId = dsIdfiles.sequence_id;
		dbLotId = dsIdfiles.lot_id;
		dbPiecemarkId = dsIdfiles.piecemark_id;
		dsPiecemarks.rowIndex = dsPiecemarkList[dbPiecemarkId];
		dbPiecemark = dsPiecemarks.piecemark;
		//application.output('     DATABASE '+dbPiecemarkId+' '+' Seq '+dbSeqId+' Lot '+dbLotId);

		dbSummed = (dbPiecemark == "");
		if (dbSummed){
			if (visited.indexOf(dbPiecemarkId) != -1){continue}
		} else {
			if (visited.indexOf(dsIdfiles.piecemark_id+dsIdfiles.sequence_id+dsIdfiles.lot_id) != -1){continue}
		}
		var found = false;
		var length2 = incoming.getMaxRowIndex();
		for (var index2 = 1;index2 <= length2;index2++){
			warningsMessage('Checking current job'+index+":"+index2);
			//application.output('unmatched '+ index2);
			incoming.rowIndex = index2;
			inSummed = incoming.piecemark == ""; // summarized record?
			if (dbSummed != inSummed){continue} // match both incoming and db records, either both summarized or both not, continue
			if (inSummed && visited.indexOf(dbPiecemarkId) != -1){found = true;break} // summarized and already included this idfile in search, so true, break
			//application.output(uniquePiecemark(incoming));
			inPiecemarkId = dsPiecemarkArray[uniquePiecemark(incoming)]; // get unique piecemark from incoming record then into piecemarkArray for piecemark_id
			//application.output (dbPiecemark +' = '+inPiecemark);
			//dsPiecemarks.rowIndex = dsPiecemarkList[dsPiecemarkArray[]]; // return summed or unsummed piecemark_id
			//inPiecemarkId = dsPiecemarks.piecemark_id;
			//if (!summed && (dbPiecemarkId != inPiecemarkId)){continue}
			if (dbPiecemarkId != inPiecemarkId){continue} // does not match by piecemark_id, so continue
			//application.output('This code is never REACHED');
			inSeqId = dsSequenceArray["_"+incoming.sequence_number]; // get complete matching criteria for normal piecemark
			inLotId = dsLotArray["_"+incoming.lot_number];
			inPiecemark = incoming.piecemark;
			//application.output('     incoming '+inPiecemarkId+' Seq '+inSeqId+' Lot '+inLotId);
			if (inSummed){
				found = (dbPiecemarkId == inPiecemarkId); //(dbMaterial == incoming.material);
				visited.push(dbPiecemarkId);
			} else {
				found = (dbPiecemarkId == inPiecemarkId) && (dbSeqId == inSeqId) && (dbLotId == inLotId);
				visited.push(inPiecemarkId+inSeqId+inLotId);
			}
			if (found){break}
		}
		if (!found) {
			if (inSummed){
				visited.push(dbPiecemarkId);
			} else {
				visited.push(dbPiecemarkId+dbSeqNum+dbLotNum);
			}
			//application.output('     unmatched DB'+dsIdfiles.piecemark_id+' Seq '+dbSeqId+' Lot '+dbLotId);
			loadBlindIntoImportTable(dsIdfiles);
		}
	}
	*/
	warningsX();
}
/**
 * @param record
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3C6880CC-523E-4878-BC12-D478AB335B6A"}
 */
function loadBlindIntoImportTable(record){
	///var incoming = forms.kiss_option_import.transitionFS;
	var sheets = forms.kiss_option_import.sheetsFS;

	var columns = sheets.getMaxColumnIndex();
	///var idfilesList = dsIdfileListByPm[record.piecemark_id]; // are these idfiles not in the import file?

	/**var seqs = [];
	for (var index2 = 0;index2 < idfilesList.length;index2++){
		var pmIdfile = idfilesList[index2];
		dsIdfiles.rowIndex = dsIdfileList[pmIdfile];
		dsSequences.rowIndex = dsSequenceList[dsIdfiles.sequence_id];
		var sequenceNum = dsSequences.sequence_number;
		var sequenceQty = dsIdfiles.original_quantity;
		if (seqs[sequenceNum] == null){
			seqs[sequenceNum] = "";
		}
		seqs[sequenceNum] = seqs[sequenceNum] + sequenceQty;
	}*/
	dsPiecemarks.rowIndex = dsPiecemarkList[record.piecemark_id];
	var pcmkRec = dsPiecemarks;
	var nullRow2 = [];
	//for (index2 in seqs){ // insert current db record into browse table iterating through the columns to match
	dsSequences.rowIndex = dsSequenceList[record.sequence_id];
	var seqNum = dsSequences.sequence_number;
	dsPiecemarks.rowIndex = dsPiecemarkList[record.piecemark_id];
	var sheetNum = dsSheetArrayRev[dsPiecemarks.sheet_id];
	if (sheetNum){
		sheetNum = sheetNum.split('_')[1];
	}
	//application.output('sheetNumber ' +sheetNum+' '+dsPiecemarks.sheet_id+' '+dsSheetArray);
	for (var index = 1;index <= columns;index++){
		var columnName = sheets.getColumnName(index);
		if (columnName.search('sequence_number') != -1 ) {nullRow2.push(seqNum);continue}
		if (columnName.search('sequence_quantity') != -1) {nullRow2.push(record.original_quantity);continue}
		if (columnName.search('select_hidebool') != -1) {nullRow2.push(1);continue}
		if (columnName.search('import_status') != -1) {nullRow2.push("delPM");continue}
		if (columnName.search('action') != -1) {nullRow2.push("DELETE");continue}
		if (columnName.search('sheet_number') != -1) {nullRow2.push(sheetNum);continue}
		if (pcmkRec[columnName]){nullRow2.push(pcmkRec[columnName]);continue}
		nullRow2.push(null);
		//application.output(columnName);
	}
	sheets.addRow(nullRow2);
		//application.output(nullRow+' columns '+columns+' '+nullRow.length);	
	//}
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"5E66B91D-9CB9-4833-9C48-AAB0AA97B6EC"}
 */
function tableHideFieldsReset(){
	//globals.a.tempHiddenColumns = [];
	globals.a.tempHiddenEmpty = [];
}
/**
 * Hide elements if element is in hide colum list and 
 * @param fieldName
 * @param formName
 *
 * 
 *
 * @properties={typeid:24,uuid:"D728F4F8-4297-4780-A701-9BEE79DD8370"}
 */
function tableHideField(fieldName,formName){
	var hideColumnList = globals.a.tempHiddenColumns[formName];
	var hideEmptyList = globals.a.tempHiddenEmpty;
	var hideEmptyColumnFlag = (globals.hideEmptyColumns == 1);
	var hideColumn = (hideColumnList.indexOf(fieldName) != -1);
	var hideEmpty = (hideEmptyList.indexOf(fieldName) != -1) && hideEmptyColumnFlag;
	var hide = !(hideColumn || hideEmpty);
	/**if (fieldName == 'bom_source_file'){
		application.output('hide columns: '+hideColumnList.length+' '+hideColumnList);
		application.output('hide emty list: '+hideEmptyList.length+' '+hideEmptyList);
	application.output('field: '+fieldName+' hidecolumn: '+hideColumn+' hideemtpyindex: '+hideEmptyList.indexOf(fieldName)+' hideempty: '+hideEmpty+' globalhide: '+globals.hideEmptyColumns+' hidden: '+!hide);
	}*/
	return hide;
}
/**
 * @AllowToRunInFind
 *
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param formx
 *
 * @properties={typeid:24,uuid:"252010A2-7DC3-4F64-A2C7-C638DA90CCEC"}
 */
function tablePrefsLoad(formx){
	if (!formx || formx == ""){
		formx = application.getActiveWindow().controller.getName();
	}
	var version = "";
	if (forms[formx].baseForm == formx){
		version = forms[formx].versionForm;
	}
	version = globals.getInstanceForm(formx);
	var formy = null;
	if (forms[formx].elements.tabless){
		var formy = forms[formx].elements.tabless.getTabFormNameAt(1);
	} else {
		formy = formx; // already adjudicated as a table form
	}
	var prefsFormName = formy.replace(version,"");
	globals.a.tempHiddenColumns[formy] = [];
	var elems = forms[formy].elements;
	
	
	if (application.isInDeveloper()){application.output('xxx tablePrefsLoad table '+formy.replace(version,"")+'_table')}
	for (var index in elems){
		var colName = elems[index].getName();
		var vis = (elems[index].isVisible()) ? 1 : 0;
		var colDims = elems[index].getLocationX()+","+0+","+elems[index].getWidth()+","+vis;
		/** @type {QBSelect<db:/stsservoy/preferences2>} */
		var pp = databaseManager.createSelect('db:/stsservoy/preferences2');
		pp.result.add(pp.columns.preferences2_id);
		pp.where.add(pp.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		pp.where.add(pp.columns.user_uuid.eq(application.getUUID('FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF')));
		pp.where.add(pp.columns.form_name.eq(formy.replace(version,"")+'_table'));
		pp.where.add(pp.columns.field_name.eq(colName));
		var PP = databaseManager.getFoundSet(pp);
		//application.output('element '+colName+' formy '+formy + ' get size '+PP.getSize());
		

		if (PP.getSize() > 0) {
			/** @type {JSRecord<db:/stsservoy/preferences2>} */
			var rec = PP.getRecord(1);
			//application.output('element '+colName+' field value '+rec.field_value);
			var sets = rec.field_value.split(",");
			if (rec.field_value != colDims){
				//application.output('field '+colName+" dims "+colDims+" prefs "+prefsFS.field_value);
				elems[index].setLocation(sets[0],sets[1]);
				elems[index].setSize(sets[2],elems[index].getHeight());
				if (sets[3]){
					//application.output('entering visible '+sets[3]);
					elems[index].visible = (sets[3] == 1);
				}
			}
			if (sets[3] && sets[3] == 0 && globals.a.tempHiddenColumns[formy].indexOf(colName) == -1){
				globals.a.tempHiddenColumns[formy].push(colName);
			}
		} else {

			elems[index].visible = tableHideField(colName,formy);
		}
	}
}
/**
 * @param jobId
 * @param tenantId
 * @param flaggedDeleted
 *
 * 
 *
 * @properties={typeid:24,uuid:"84711662-4469-4CF5-9EDA-DAEA5AAAF992"}
 */
function getJobPieces(jobId,tenantId,flaggedDeleted){
	var queryIdfiles =  'select sum(original_quantity) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '+
	' and sheets.job_id = ? AND sheets.tenant_uuid = ? AND sheets.delete_flag IS null '+
	' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id AND idfiles.delete_flag IS null '+
	' inner join sequences on sequences.sequence_id = idfiles.sequence_id inner join '+
	' id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id AND id_serial_numbers.delete_flag IS null';
	if (flaggedDeleted){
		queryIdfiles =  'select sum(original_quantity) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '+
		' and sheets.job_id = ? AND sheets.tenant_uuid = ? '+
		' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id AND idfiles.delete_flag = 99';
	}
	var maxReturnedRows = -1;
	var args = [];
	args.push(jobId.toString());
	args.push(tenantId);
	
	return databaseManager.getDataSetByQuery('stsservoy', queryIdfiles, args , maxReturnedRows)[0][0];
}
/**
 * @param jobId
 * @param tenantId
 * @param flaggedDeleted
 *
 * 
 *
 * @properties={typeid:24,uuid:"616352F6-4E04-4FDF-91E2-747E542AFEFF"}
 */
function getJobPiecemarkCount(jobId,tenantId,flaggedDeleted){
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var s = databaseManager.createSelect('db:/stsservoy/sheets');
	s.result.add(s.columns.sheet_id);
	s.result.distinct = true;
	s.groupBy.add(s.columns.sheet_id);
	s.where.add(s.columns.job_id.eq(jobId));
	s.where.add(s.columns.tenant_uuid.eq(scopes.globals.session.tenant_uuid));
	s.where.add(s.columns.delete_flag.isNull);
	
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var p = databaseManager.createSelect('db:/stsservoy/piecemarks');
	p.result.clear();
	p.result.distinct = true;
	p.groupBy.add(p.columns.piecemark_id);
	p.result.add(p.columns.piecemark_id.count,'piecemark_count');
	if (flaggedDeleted){
		p.where.add(p.columns.delete_flag.eq(99));
	} else {
		p.where.add(p.columns.delete_flag.isNull);
	}
	p.where.add(p.columns.sheet_id.isin(s));
	p.where.add(p.columns.delete_flag.isNull);
	var pieces = databaseManager.getDataSetByQuery(p,3);
	
	pieces.rowIndex = 1;
	return pieces.piecemark_count;
	/** var queryPiecemarks = 'SELECT count(*) FROM piecemarks INNER JOIN sheets ON piecemarks.sheet_id = sheets.sheet_id ' + 
		' AND sheets.delete_flag IS NULL ' + 
		' AND sheets.job_id = ? AND sheets.tenant_uuid = ? AND piecemarks.delete_flag IS NULL';
	if (flaggedDeleted){
		queryPiecemarks = 'SELECT count(*) FROM piecemarks INNER JOIN sheets ON piecemarks.sheet_id = sheets.sheet_id ' + 
		' AND sheets.delete_flag IS NULL ' + 
		' AND sheets.job_id = ? AND sheets.tenant_uuid = ? AND piecemarks.delete_flag = 99';
	}
	var maxReturnedRows = -1;
	var args = [];
	args.push(jobId.toString());
	//var fs = databaseManager.getFoundSet(queryPiecemarks);
	args.push(tenantId);
	//return fs.getSize();
	return databaseManager.getDataSetByQuery('stsservoy', queryPiecemarks, args , maxReturnedRows)[0][0];
	*/
}
/**
 * @param jobId
 * @param tenantId
 * @param flaggedDeleted
 *
 * 
 *
 * @properties={typeid:24,uuid:"D3E3A593-D056-4648-8977-F89988AA7E00"}
 */
function getJobBarcodeCount(jobId,tenantId,flaggedDeleted){
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var s = databaseManager.createSelect('db:/stsservoy/sheets');
	s.result.add(s.columns.sheet_id);
	s.result.distinct = true;
	s.groupBy.add(s.columns.sheet_id);
	s.where.add(s.columns.job_id.eq(jobId));
	s.where.add(s.columns.tenant_uuid.eq(scopes.globals.session.tenant_uuid));
	s.where.add(s.columns.delete_flag.isNull);
	
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var p = databaseManager.createSelect('db:/stsservoy/piecemarks');
	p.result.clear();
	p.result.distinct = true;
	p.where.add(p.columns.sheet_id.isin(s));
	p.where.add(p.columns.delete_flag.isNull);
	var pieces = databaseManager.getFoundSet(p);
	
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var i = p.joins.add('db:/stsservoy/idfiles');
	i.on.add(i.columns.piecemark_id.eq(p.columns.piecemark_id));
	p.result.add(i.columns.id_serial_number_id.count,'barcode_count');
	p.groupBy.add(i.columns.id_serial_number_id);
	if (flaggedDeleted){
		i.root.where.add(i.columns.delete_flag.eq(99));
	} else {
		i.root.where.add(i.columns.delete_flag.isNull);
	}
	var barcodes = databaseManager.getDataSetByQuery(p,3);
	barcodes.rowIndex = 1;
	if (1==1){return barcodes.barcode_count}
	var queryBarcodes = 'select count (distinct id_serial_number) id_serial_number from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id \
		and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL \
		inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL \
		inner join id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id AND id_serial_numbers.delete_flag IS null';
	if (flaggedDeleted){
		queryBarcodes = 'select count (distinct id_serial_number) id_serial_number from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id \
			and sheets.job_id = ? and sheets.tenant_uuid = ? \
			inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id \
			inner join id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id and id_serial_numbers.delete_flag = 99';
	}
	var maxReturnedRows = -1;
	var args = [];
	args.push(jobId.toString());
	args.push(tenantId);
	return databaseManager.getDataSetByQuery('stsservoy', queryBarcodes, args , maxReturnedRows)[0][0];
}
/**
 * @param jobId
 * @param tenantId
 * @param metric Integer
 * @param flaggedDeleted Boolean
 *
 * 
 *
 * @properties={typeid:24,uuid:"AEDE8DFA-1A26-41F7-BB0D-4B970A2E8526"}
 */
function getJobTotalWeight(jobId,tenantId,metric,flaggedDeleted){
	if (flaggedDeleted){return 0} //not reporting weight on deleted items
	// example of how to get sums and calcs on records, ticket task#07
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var s = databaseManager.createSelect('db:/stsservoy/sheets');
	s.result.add(s.columns.sheet_id);
	s.result.distinct = true;
	s.groupBy.add(s.columns.sheet_id);
	s.where.add(s.columns.job_id.eq(jobId));
	s.where.add(s.columns.tenant_uuid.eq(scopes.globals.session.tenant_uuid));
	s.where.add(s.columns.delete_flag.isNull);
	
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var p = databaseManager.createSelect('db:/stsservoy/piecemarks');
	p.result.clear();
	p.result.distinct = true;
	p.where.add(p.columns.sheet_id.isin(s));
	p.where.add(p.columns.delete_flag.isNull);
	var pieces = databaseManager.getFoundSet(p);
	
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var i = p.joins.add('db:/stsservoy/idfiles');
	i.on.add(i.columns.piecemark_id.eq(p.columns.piecemark_id));
	i.root.where.add(i.columns.delete_flag.isNull);

	p.result.add(i.columns.summed_quantity.sum,'total_pieces');
	var counts = databaseManager.getDataSetByQuery(p,-1);
	counts.rowIndex = 1;
	var count = counts.total_pieces;
	
	p.result.clear();
	p.result.distinct = true;

	//i.root.result.distinct = true;
	if (metric){
		p.result.add(p.columns.item_weight.multiply(i.columns.summed_quantity).sum,'total_weight');
	} else {
		p.result.add(p.columns.item_weight_lbs.multiply(i.columns.summed_quantity).sum,'total_weight');		
	}
	var weights = databaseManager.getDataSetByQuery(p,-1);
	weights.rowIndex = 1;
	var weight = weights.total_weight;
	if (application.isInDeveloper()){application.output('weight is '+weight)}
	//		weight += (metric) ? weightFS.item_weight * weightFS.summed_quantity : weightFS.item_weight_lbs  * weightFS.summed_quantity;
	var stats = [weight,count];// 0/pieces is an INT

	return stats;
	/**
	var queryWeight =  'select * from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '
	+ ' and sheets.delete_flag IS NULL'
	+ ' and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL and piecemarks.piecemark = piecemarks.parent_piecemark '
	+ ' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL'
	if (application.isInDeveloper()){application.output(queryWeight)}
	var maxReturnedRows = -1;
	var args = [];
	args.push(jobId.toString());
	args.push(tenantId);
	/ ** @type {JSFoundSet<db:/stsservoy/piecemarks>} * /
	var weightFS = databaseManager.getDataSetByQuery('stsservoy', queryWeight, args , maxReturnedRows);
	var index = 1;
	var weight = 0; var pieces = 0;
	var count = weightFS.getMaxRowIndex();
	//var visited = [];
	while (index <= count){
		weightFS.rowIndex = index;
		//if (typeof weightFS === 'undefined'){break;}
		//if (visited.indexOf(weightFS.piecemark_id) != 0){
			//visited.push(weightFS.idfile_id);//okay, need to add info to idfile or hard to determine loading on summary items
		weight += (metric) ? weightFS.item_weight * weightFS.summed_quantity : weightFS.item_weight_lbs  * weightFS.summed_quantity;
		pieces = pieces + weightFS.summed_quantity;
		//}
		//count = weightFS.getMaxRowIndex();
		index++;
	}
	var stats = [weight,pieces];
	return stats;*/
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} flaggedDeleted Information is flaggedDeleted
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6547B6F8-1AC1-4CD2-A1B3-B52F6A311643"}
 */
function onGetInformation(event,flaggedDeleted) {
	if (!forms[event.getFormName()].jobFound && event.getFormName().search('summary') == -1) {return}
	var formX = forms[event.getFormName()];
	var formXName = event.getFormName();
	var vJobID = formX.vJobID;
	var vJobMetric = formX.vJobMetric; //task07
	if (!formX.vLabTotalWt) {formX.vLabTotalWt = 0}
	if (!formX.vLabTotPieces) {formX.vLabTotPieces = 0}
	
	if (formX.elements.btn_Browse && (formX.vLabTotPieces != 0 || formX.vLabIDNums != 0)){
		formX.elements.btn_Browse.enabled = true;
	}
	formX.vUnits = (vJobMetric) ? 'kgs' : 'lbs';
	if (application.isInDeveloper()){application.output('GETINFO form name '+formXName)}
	versionForm = globals.getInstanceForm(event);
	formXPrefix = formXName.split("_")[0];
	oldFormName = formXPrefix+'_piecemark_info';
	newFormName = oldFormName+versionForm;
	if (application.isInDeveloper()){application.output('oldformname '+oldFormName)}
	if (!forms[newFormName]){
		solutionModel.cloneForm(newFormName,solutionModel.getForm(oldFormName));
	}
	if (forms[newFormName+'_table']){
		removeFormHist(newFormName+'_table');
	}
	formX.collectAndTab(newFormName); //table dataset is built within
}
/**
 * @param {JSEvent} event
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"EAC87F6A-3B9C-4CED-967B-9C148314BB94"}
 */
function tablePrefsSave(event){
	var response = plugins.dialogs.showSelectDialog(i18n.getI18NMessage('sts.txt.modify.table.settings'),
			i18n.getI18NMessage('sts.txt.save.or.modify.table.preferences'),
			[i18n.getI18NMessage('sts.btn.save'),i18n.getI18NMessage('sts.btn.modify')]);
	if (response == null){return}
	var blankUID = application.getUUID('FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF');
	var buttonName = event.getElementName();
	var leftPanel = (buttonName.search('Right') == -1);
	
	// table element button name settingsTop settingsBottom settingsLeft settingsRight
	///var controlName = event.getElementName();
	// get current column ordering
	var formx = event.getFormName();
	//forms[formx].errorMessage = "Saving table column order.";
	//application.updateUI();
	var formsInUse = [];
	/** @type String */
	var formy = null;
	if (forms[formx].elements.tabless){
		var tabIdx = forms[formx].elements.tabless.tabIndex;
		//if (application.isInDeveloper()){application.output('Tab active at '+tabIdx)}
		formy = forms[formx].elements.tabless.getTabFormNameAt(tabIdx);
		if (forms[formy].elements.tabless){
			formy = forms[formy].elements.tabless.getTabFormNameAt(1);
		}
		if (formy.search('list|list') == 0){
			var tabIdx2 = forms[formy].elements.tabless.tabIndex;
			formy = forms[formy].elements.tabless.getTabFormNameAt(tabIdx2);
		}
		formsInUse.push(formy);
	}
	if (forms[formx].elements.split){
		var formCombo = event.getFormName().split("_")[0]+'_pcmk_combo';
		if (leftPanel){
			formy = forms[formCombo+versionForm].elements.split.getLeftForm().controller.getName();
		} else {
			formy = forms[formCombo+versionForm].elements.split.getRightForm().controller.getName();
		}
	}
	//while (formsInUse.length > 0){
	//formy = formsInUse.pop();
	generalTableOrderTableName = formy;
	if (response == i18n.getI18NMessage('sts.btn.save')){
		warningsYes();
		if (application.isInDeveloper()){application.output('saving '+formy.replace(versionForm,""))}
		/** @type {QBSelect<db:/stsservoy/preferences2>} */
		var pp = databaseManager.createSelect('db:/stsservoy/preferences2');
		pp.result.add(pp.columns.preferences2_id);
		pp.where.add(pp.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		//pp.where.add(pp.columns.field_name.eq(colName));
		//pp.where.add(pp.columns.user_uuid.eq(blankUID));
		if (formy.search('_table') == -1){
			pp.where.add(pp.columns.form_name.eq(formy.replace(versionForm,"")+'_table'));
		} else {
			pp.where.add(pp.columns.form_name.eq(formy.replace(versionForm,"")));				
		}
		var PP = databaseManager.getFoundSet(pp);
		var tableCol = []; var tabLoc = [];
		/** @type {JSRecord<db:/stsservoy/preferences2>} */
		var rec = null;var idx = 1;
		while (rec = PP.getRecord(idx++)){
			tableCol[rec.field_name] = idx-1;
			tabLoc[rec.field_name] = rec.field_value;
		}
		var savedElems = new Array();savedElems.push("");

		var elems = forms[formy].elements;
		databaseManager.startTransaction();
		for (var index in elems){

			warningsMessage(i18n.getI18NMessage('sts.txt.saving.column.settings'),false);
			var colName = elems[index].getName();
			if (colName == ""){continue}//sometimes a blank entry after array and value list manip

			var visible = (elems[index].visible) ? 1 : 0;
			if (visible){
				var colDims = elems[index].getLocationX()+","+0+","+elems[index].getWidth()+","+visible;
			} else {
				colDims = "0,0,"+elems[index].getWidth()+",0";
			}
			//var colDims = elems[index].getLocationX()+","+0+",110";
			//var rec = null;
			//if (PP.getSize() > 0){
			//	rec = PP.getRecord(1);
			//}
			if (colDims != tabLoc[colName]) {
				if ((PP.getSize() >= tableCol[colName]) && (rec = PP.getRecord(tableCol[colName]))){
					rec.field_value = colDims;
					rec.edit_date = new Date();
				} else {
					if (application.isInDeveloper()){application.output('form '+ formy+' create '+colName)}
					var newDex = PP.newRecord(false);
					var newRec = PP.getRecord(newDex);
					newRec.tenant_uuid = globals.session.tenant_uuid;
					//newRec.user_uuid = blankUID;
					if (formy.search('_table') == -1){
						newRec.form_name = formy.replace(versionForm,"")+'_table';
					} else {
						newRec.form_name = formy.replace(versionForm,"");
					}
					newRec.field_name = colName;
					//newRec.value_material = rec.shape;
					newRec.field_value = colDims;
					newRec.edit_date = new Date();
					//var status = databaseManager.saveData(newRec);
					//if (status){globals.loggerDev(this,'Record not saved')}
				}
			}
		}

		//commitTransactions();
		databaseManager.commitTransaction();
		forms[formx].errorMessage = i18n.getI18NMessage('sts.txt.column.ordering.saved');
		warningsMessage(i18n.getI18NMessage('sts.txt.column.ordering.saved'),true);
		warningsX();
	}
	if (response == i18n.getI18NMessage('sts.btn.modify')){
		var win = application.createWindow(i18n.getI18NMessage('sts.txt.column.order'), JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 555, 485);
		win.title = i18n.getI18NMessage('sts.txt.this.is.the.column.settings.window');
		globals.modalResponse = "";
		win.show(forms.gen_table_order);
		//if (globals.modalResponse == "Cancel"){return}
		
	}
}
/**
  * @param criteria
 * @param formName
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"467085D8-7F51-4ABA-AAEE-353329763CF2"}
 */
function viewBTableToForm(criteria,formName){
	/**
	 * create dataset
	 * load dataset
	 * create columns
	 * dsPiecemarks,dsBarcodes,dsIdfiles,dsSequences,dsLots,dsSheets
	 */
	dsQuery = viewBTableSQL(criteria,formName);
	if (application.isInDeveloper()){application.output('x --- viewBTableToForm '+dsQuery);}
	var maxReturnedRows = -1;
	var args = [];
	/** @type  {JSDataSet} */
	//1browseFS2[versionForm] = databaseManager.getDataSetByQuery(dsQuery, maxReturnedRows);
	browseFS2[versionForm] = databaseManager.getDataSetByQuery('stsservoy', dsQuery, args , maxReturnedRows);
	//3browseFS2[versionForm] = databaseManager.getDataSetByQuery(dsQuery, 200);//limit on returned rows
	

	if (application.isInDeveloper()){application.output('sql \n'+dsQuery+'\ndataset size '+browseFS2[versionForm].getMaxRowIndex())}
	viewBTableRemoveColumns();//dsBrowse and browseFS
	viewBTableRemoveRows();//browseFS
	///browseDatasource = browseFS.createDataSource(formName+'_browse',browseArray);
	browseDatasource = browseFS2[versionForm].createDataSource(formName+'_browse',dsBrowse);
	//--browseDatasource = browseFS.createDataSource(formName+'_browse',dsBrowse);
	///application.output('datasource form '+formName+"_browse");
	tableOrderingData = tablePrefsPreLoad(formName+'_table');
	versionForm = globals.getInstanceForm(null);
	viewBTableCreateForm(formName);
	//tablePrefsLoad(formName)
}
/**
 * @AllowToRunInFind
 * 
 * @param criteria
 * @param formName
 *
 * 
 *
 * @properties={typeid:24,uuid:"CA44631F-95D8-4C82-8994-99F63294BB85"}
 */
function viewBTableSQL(criteria,formName){
	/**
	 * Left join for records  which may not exist.  inner join for necessary records.
	 */
	null; //stop here 20160219
	var query = "select random()*1000000 AS browsing_id,0 AS \"selection\",FLD from piecemarks "+
		' left join routings on routings.routing_id = piecemarks.e_route_code_id '+
		' inner join sheets on piecemarks.sheet_id = sheets.sheet_id SHT '+
		' and sheets.job_id = JOBID AND sheets.delete_flag IS null '+
		' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id AND idfiles.delete_flag FLAG SONUM FABS AREA PCRL LDN COW LOT PKG'+
		' inner join sequences on sequences.sequence_id = idfiles.sequence_id SEQN ' +
		' inner join id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id AND id_serial_numbers.delete_flag IS null IDNM ' +
		' left join status_description on idfiles.status_description_id = status_description.status_description_id ' +
		' left join associations on status_description.association_id = associations.association_uuid ' +
		' left join jobs on sheets.job_id = jobs.job_id ' +
		' left join customers on  jobs.customer_id = customers.customer_id ' +
//		' left join heats on '
//		' left join addresses on customers.customer_id = addresses.customer_id'
		' left join lots on idfiles.lot_id = lots.lot_id ' +
		' left join loads on loads.load_id = idfiles.current_load_id LDRR ';
	var addOrderQuery = ' order by piecemarks.parent_piecemark, piecemarks.piecemark';
	if (formName.search("barcode_") != -1) {
		var ordered = scopes.jobs.tmp_LabelSort;
		switch (ordered){
			case 'Piece Mark':
				addOrderQuery = ' order by piecemarks.parent_piecemark, piecemarks.piecemark';
				break;
			case 'ID Number':
				addOrderQuery = ' order by id_serial_numbers.id_serial_number, piecemarks.piecemark';
				break;
			case 'Drawing Number':
				addOrderQuery = ' order by sheets.reference_drawing, piecemarks.piecemark';
				break;
			case 'Material':
				addOrderQuery = ' order by piecemarks.material, piecemarks.piecemark';
				break;
			default:
				addOrderQuery = ' order by piecemarks.parent_piecemark, piecemarks.piecemark';
		}
	}
	var FLD = "";
	var DBs = ["id_serial_numbers","piecemarks","routings","sheets","idfiles","status_description","loads","associations","sequences","jobs","customers","lots"];
	var skipFields = ['logic_flag','edit_date'];//'delete_flag',
	//var skipFields = [];
	for (var index1 = 0;index1 < DBs.length;index1++){
		//application.output('table '+DBs[index1])
		var table = databaseManager.getTable("stsservoy",DBs[index1]);
		var tableColumns = table.getColumnNames();
		for (var index2 = 0;index2 < tableColumns.length;index2++){
			var fieldName = tableColumns[index2];
			if (skipFields.indexOf(fieldName) != -1){continue}
			//application.output(DBs[index1]+"."+tableColumns[index2])
			FLD += DBs[index1]+"."+tableColumns[index2];
			if ((index1 != DBs.length-1)|| (index2 != tableColumns.length-1)){FLD += ","}
		}
	}
	//var fieldNames = FLD.split(',');
	if (typeof versionForm === 'undefined'){ var versionForm = ""};
	var prefsFormName = formName.replace(versionForm,"");
	tablePrefsPreOrderFields(prefsFormName,versionForm,FLD);
	if (formName.search(/(recall|remove)/) == -1){
		query = query.replace('FLAG',"IS null");
	} else {
		query = query.replace('FLAG','= 99');
	}
	//  FLAG PCMK SHT SEQN SONUM LDN LDR PCRL FABS JOBR AREA BTCH COW (LOT) (PKG)
	query = query.replace('FLD',FLD);
	query = query.replace('JOBID',"\'"+scopes.jobs.browseJobID+"\'");
	if (criteria.idnum){
		query = query.replace('IDNM'," AND id_serial_numbers.id_serial_number IN "+criteria.idnum);
	} else {
		query = query.replace('IDNM','');
	}
	var PCMK = " WHERE piecemarks.piecemark LIKE '%"+criteria.piecemark+"%'";
	if (criteria.piecemark){
		//query = query.replace('PCMK'," WHERE piecemarks.piecemark LIKE %"+criteria.piecemark+"%");
	} else {
		//query = query.replace('PCMK','');
		PCMK = "";
	}
	if (criteria.sheetnum){
		query = query.replace('SHT'," AND sheets.sheet_number IN "+criteria.sheetnum);
	} else {
		query = query.replace('SHT','');
	}
	if (criteria.seqnum){
		query = query.replace('SEQN'," AND sequences.sequence_number IN "+criteria.seqnum);
	} else {
		query = query.replace('SEQN','');
	}
	if (criteria.sonum){
		query = query.replace('SONUM'," AND idfiles.shop_order IN "+criteria.sonum);
	} else {
		query = query.replace('SONUM','');
	}
	if (criteria.batch){
		query = query.replace('BTCH'," AND idfiles.id_batch IN "+criteria.batch);
	} else {
		query = query.replace('BTCH','');
	}
	if (criteria.area){
		query = query.replace('AREA'," AND idfiles.id_location IN "+criteria.area);
	} else {
		query = query.replace('AREA','');
	}
	if (criteria.cow){
		query = query.replace('COW'," AND piecemarks.piecemark_cow_code IN "+criteria.cow);// cost_of_work_code (10) ticket#6
	} else {
		query = query.replace('COW','');
	}
	if (criteria.lotnum){
		query = query.replace('LOT'," AND idfiles.lot_id IN "+criteria.lotnum);//ticket#7
	} else {
		query = query.replace('LOT','');
	}
	if (criteria.pkgnum){
		query = query.replace('PKG'," AND idfiles.ft_pkgid IN "+criteria.pkgnum);//ticket#7
	} else {
		query = query.replace('PKG','');
	}
	if (criteria.fabshop){
		query = query.replace('FABS'," AND idfiles.status_description_id IN "+criteria.fabshop);
	} else {
		query = query.replace('FABS','');
	}
	if (criteria.pcmkrel){
		query = query.replace('PCRL'," AND idfiles.piece_release IN "+criteria.pcmkrel);
	} else {
		query = query.replace('PCRL','');
	}
	if (criteria.loadrel){
		query = query.replace('LDRR'," AND loads.load_release IN "+criteria.loadrel);
	} else {
		query = query.replace('LDRR','');
	}
	if (criteria.loadall){//need number to id current_load_id
		query = query.replace('LDN'," AND idfiles.current_load_id IN "+criteria.loadall);
	} else {
		query = query.replace('LDN','');
	}
	query += PCMK + addOrderQuery;
	if (application.isInDeveloper()){application.output('sql2-- '+query)}
	return query;
}
/**
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"06461915-F3CE-4539-AE92-511230F74060"}
 */
function viewBTableRemoveColumnArray(){
	for (var index=removeColumns.length-1;index > -1;index--){
		browseFS2[versionForm].removeColumn(removeColumns[index]);
	}	
}
/**
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"8D8EFE0F-A1EF-4A39-86BC-2586C2B66C94"}
 */
function viewBTableRemoveColumns(){
	columnNames2 = []; var index = 0; var fieldIndex = 0; removeColumns = [];
	columnNames2.push('selection');//Want this one first
	browseArray = [];
	nullRow = [];
	var cols = browseFS2[versionForm].getMaxColumnIndex();
	dsBrowse = null;
	dsBrowse = databaseManager.createEmptyDataSet();
	for (index = 1;index <= cols;index++){
		var columnName = browseFS2[versionForm].getColumnName(index);
		
		if (columnName == null){continue}
		//if (tablePKs.indexOf(columnName) != -1 || 
		if (columnNames2.indexOf(columnName) != -1){
			removeColumns.push(index);
			continue}
		columnNames2[fieldIndex] = columnName;
		if (columnName == "selection"){
			dsBrowse.addColumn(columnName,fieldIndex+1,JSColumn.INTEGER);
			browseArray.push(JSColumn.INTEGER);
		} else {
			dsBrowse.addColumn(columnName,fieldIndex+1,JSColumn.TEXT);
			browseArray.push(JSColumn.TEXT);
		}
		nullRow.push(null); // prep blank row for table entry
		fieldIndex++;
	}
	for (index=removeColumns.length-1;index > -1;index--){
		browseFS2[versionForm].removeColumn(removeColumns[index]);
	}
}
/**
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"A556FEC0-DD2A-4D39-9D80-ECE165242E38"}
 */
function viewBTableRemoveRows(){
	var uniqueBC = [];
	var removeRows = [];
	var uniqueBCount = [];
	var rows = browseFS2[versionForm].getMaxRowIndex();
	for (var index=1;index <= rows;index++){
		browseFS2[versionForm].rowIndex = index;//remove duplicate id_serial_number_id barcode ids
		var bcID = browseFS2[versionForm].id_serial_number_id;
		if (uniqueBC.indexOf(bcID) != -1) {
			removeRows.push(index);
			uniqueBCount[bcID]++;
		} else {
			uniqueBC.push(bcID);
			uniqueBCount[bcID] = 1;
		}
	}
	for (index = removeRows.length-1;index > -1;index--){
		browseFS2[versionForm].removeRow(removeRows[index]);//delete marked row
	}
	for (index = 1;index <= browseFS2[versionForm].getMaxRowIndex();index++){
		browseFS2[versionForm].rowIndex = index;
		/** @type {Number} */
		var intQuant = Math.floor(uniqueBCount[browseFS2[versionForm].id_serial_number_id]).toFixed();
		browseFS2[versionForm].sequence_quantity = intQuant;
	}
}
/**
 * @param formName
 *
 * 
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"78CDBBE3-7259-4B46-9CEE-4989827594E7"}
 */
function viewBTableCreateForm(formName){
	versionForm = globals.getInstanceForm(null);
	var formNameTable = formName+'_table';
	var checkForm = solutionModel.newForm(formNameTable,browseDatasource,'sts_one',false,500,600);
	var code = 'function onRecordSelection(event){scopes.jobs.onRecordSelectIdfile(event);}';
	var code2 = 'function onRender3(event){null;}';
	if (formName.search('barcode') != -1){
		code2 = 'function onRender3(event){scopes.printer.onRenderPrint(event);}';
	}

	checkForm.onRecordSelection = checkForm.newMethod(code);
	checkForm.onRender = checkForm.newMethod(code2);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	var last = ""; 
	var offset = 0;
	var colLength = 0;
	var setVisible = true;
	var posArray = [];
	var altColNames = i18nColumnNames;
	var defArray = ['default column',0,scopes.prefs.defaultColumnWidth,1];
	for (var index = 0;index < columnNames2.length;index++){
		var columnName = columnNames2[index];
		if (columnName == ""){continue}
		
		var columnDataIndex = tableOrderingArray.indexOf(columnName);
		if (tablePKs.indexOf(columnName) != -1){continue}
		if (columnDataIndex == -1){
			//continue;
			posArray = defArray;
		} else {
			posArray = tableOrderingData[columnDataIndex];
		} // column not in prefs, add basic config
		//if (tableOrderingData[columnDataIndex].length != 4){tableOrderingData[columnDataIndex] = new Array(columnName,0,20,1)} // prefs data incorrect
		//if (typeof tableOrderingData[columnDataIndex][1] == "string"){tableOrderingData[columnDataIndex][1] = 0}
		setVisible = true;
		if (columnName == "browsing_id"){
			colLength = 0;
		} else {
			colLength = posArray[2]; //scopes.prefs.defaultColumnWidth;
		}
		if (posArray[3] == 0){colLength = 0;setVisible = false;}

	 	last = checkForm.newLabel(columnName,offset,0,colLength,20)
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	if (index == columnName.length -1){
	 		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	 	}
	 	last.labelFor=columnNames2[index];
	 	last.dataProviderID = columnNames2[index];
	 	var textName = columnName;
	 	if (i18nColumnNames[columnName]){
	 		textName = i18nColumnNames[columnName];
	 	}
	 	last.text = textName;
	 	last.toolTipText = textName;
	 	if (columnName == "selection"){
			last = checkForm.newField(columnName,JSField.CHECKS,posArray[1],20,colLength,20);
	 	} else {
	 		//application.output(' column data '+columnName+" "+posArray[1]);
			last = checkForm.newField(columnName,JSField.TEXT_FIELD,posArray[1],20,colLength,20);
	 	}
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
		last.name = columnName;
		last.editable = false;
		last.visible = setVisible;
		if (columnName == "selection"){
			last.editable = true;
			last.horizontalAlignment = SM_ALIGNMENT.LEFT;
		}
	 	offset += colLength*1;		
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	if (!forms[formName]){
		//versionForm = globals.getInstanceForm(null);
		var newFormName = 'loads_pcmk_combo'+versionForm;
		solutionModel.cloneForm(newFormName,solutionModel.getForm('loads_pcmk_combo'));
	}
	var status = false;
	if (forms[formName].elements.tabless){
		status = forms[formName].elements.tabless.addTab(formNameTable);
	}
	if (!status){
		status = forms[formName].elements.split.setLeftForm(formNameTable);		//forms.delete_pcmk_combo.elements.split.setLeftForm(formNameTable);
	}
	var relationInfo = solutionModel.getRelation('sts_idfile_to_transactions');
	if (!solutionModel.getRelation(relationInfo.name+versionForm)){
		var newRelation = solutionModel.newRelation(relationInfo.name+versionForm,relationInfo.primaryDataSource,relationInfo.foreignDataSource,relationInfo.joinType);
		null;
		var newGlobal = solutionModel.newGlobalVariable('jobs','transactionIdfileId'+versionForm,JSVariable.TEXT);
		newRelation.newRelationItem(relationInfo.getRelationItems()[0].primaryDataProviderID+versionForm,'=','idfile_id');
	}
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8D2FEE48-3669-45F1-8561-21548B51CA45"}
 */
function getJobsList(){
	var assocOffice = globals.isOfficeFunction(null);
	
	jobsArray=[];
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var fs = databaseManager.createSelect('db:/stsservoy/jobs');
	
	fs.result.add(fs.columns.job_id);
	fs.where.add(fs.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	//if (!assocOffice){
		fs.where.add(fs.columns.association_id.eq(globals.session.associationId));
	//}
	var FS = databaseManager.getFoundSet(fs);
	//FS.loadRecords();
	

	var count = 1;
	while (count <= FS.getSize()){
		/** @type {JSRecord<db:/stsservoy/jobs>} */
		var rec = FS.getRecord(count);
		jobsArray.push(rec.job_number);
		if (application.isInDeveloper()){application.output('rec '+rec.job_number)}
		count++;
	}

}
/**
 * 
 *
 * @properties={typeid:24,uuid:"28969FCA-F152-45C2-BE67-99C9C5453855"}
 */
function getCustomersList(){
	customersArray = [];
	/** @type {JSFoundSet<db:/stsservoy/customers>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/customers');
	fs.loadAllRecords();
	for (var index = 1;index <= fs.getSize();index++){
		fs.setSelectedIndex(index);
		 customersArray.push(fs.customer_number);
	}
}
/**
 * @param columnName
 * @param content
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"FE237B44-DFAB-43CB-9FB6-31B746032E92"}
 */
function getFieldDataMapping(columnName, content){
	var fieldMap = "";
	/** @type {QBSelect<db:/stsservoy/mapping>} */
	var m = databaseManager.createSelect('db:/stsservoy/mapping');
	m.result.add(m.columns.mapping_id);
	m.where.add(m.columns.mapped_field.eq(content));
	m.where.add(m.columns.mapped_format.eq('FabSuite'));
	var M = databaseManager.getFoundSet(m);
	if (M.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/mapping>} */
		var rec = M.getRecord(1);
		fieldMap = rec.mapping_key+","+rec.field_order;
		return fieldMap;
	} else {
		return "";
	}
}
/**
 * 
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param jobNumber
 *
 * @properties={typeid:24,uuid:"F6238006-D5AA-4A52-BAC2-253DE42B4798"}
 */
function existsJobNumber(jobNumber){
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.getFoundSet('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.job_number.eq(jobNumber));
	var J = databaseManager.getFoundSet(j);
	if (J.getSize() > 0){
		return true;
	} else {
		return false;
	}
}

/**
 * @param sheetNumber
 *
 * 
 *
 * @properties={typeid:24,uuid:"19F527B8-186E-4C54-B46D-C8CD84AEC95A"}
 */
function createSheet(sheetNumber){
	if ('checkthis' != 'checkthis'){
		var sheet_num = retainFS.sheet_number;
	}
	var editDate = perfImportDate;
	var unique = "_"+sheet_num;
	unique = "_"+sheetNumber;
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet('stsservoy','sheets');
	if (dsSheetArray[unique]){
		/** @type {String} */
		var pk = application.getUUID(dsSheetArray[unique]);
		fs.loadRecords(pk);
		var rec = fs.getRecord(1);
		null;
		//return chkRec;
	}
	var update = false;
	if (!rec){
		update = true;
		var recIndex = fs.newRecord();
		rec = fs.getRecord(recIndex);
	}
	var sheetId = rec.sheet_id+"";
	rec.edit_date - editDate;
	rec.sheet_number = sheetNumber;
	rec.job_id = scopes.jobs.jobUnderCustomer;
	rec.tenant_uuid = globals.session.tenant_uuid;
	if (forms.import_performance_setting.insSheetPO){
		rec.sheet_po = forms.import_performance_setting.insSheetPO;
	}
	if (update){
		dsSheetArray["_"+sheetNumber] = sheetId;
		dsSheetArray[sheetId] = "_"+sheetNumber;
	}
	createdRecords++;
	return rec;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"F3FF7D84-FEDD-47CF-BF4B-49F6878F8B0A"}
 */
function createSheets(){
	scopes.globals.stsMessages = "Creating sheets.";
	databaseManager.startTransaction();
	///var newItems = [];
	//var rows = dsBrowse.getMaxRowIndex();
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var retainFS = forms.kiss_option_import.transitionFS;
	///var jobID = scopes.jobs.jobUnderCustomer;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = rows;
	///var insertCount = 0;//how many lines to insert with this barcode
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		var sheet_num = retainFS.sheet_number;
		var unique = "_"+sheet_num;
		if (dsSheetArray[unique]){
			//application.output("do not create sheet "+sheet_num);
			null;
		} else {
			scopes.jobs.warningsMessage("Create sheet "+sheet_num);
			commitTransactions();
			createSheet(sheet_num);
		}
	}
	if (databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.commitTransaction();}
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"F1EF7136-65C2-48F0-9179-AE4F8ABDFE9E"}
 */
function numbersUp(){
	var serials = ['ZZZZZZ','ZZZY999','000000','000001','999999','Z99999','ZY9999','ZR0000','M90801','M99998','ZZY000','ZZY999','ZZZY999','00000','99999','ZR000','M0801','M9998','ZZY00','ZY999'];
	for (var index = 0;index < serials.length;index++){
		application.output(serials[index]+' next bc '+countUpNumbers(serials[index]));
	}
}
/**
 * @param {String} formula
 * @param {String} uom
 * @param {Number} quantity
 * @param {Number} length
 * @param {Number} width
 * @param {Number} weight
 * 
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"73C685A9-D480-48EA-BEF6-E6639A94F80E"}
 */
function convertUomToFormula(formula, uom, quantity, length, width, weight){
	/**
	 * 	None
		$/CWT = Qty * (Weight Each/100) * $/UOM
		$/TON = Qty * (Weight Each/2000) * $/UOM
		$/LBS = Qty * Weight Each * $/UOM
		$/SQFT = Qty * (Length/12) * (Width/12) * $/UOM
		$/LF = Qty * (Length/12) * $/UOM
		$/EA = Qty * $/UOM
		$/100 = Qty/100 * $/UOM
		$/SQMTR = Qty * ((Length/12) * (Width/12) * (1/10.76387)) * $/UOM
		$/MTR = Qty * ((Length/12) * (1/3.280833)) * $/UOM
		$/MTON = Qty * ((Weight Each*0.4536)/1000.0000) * $/UOM
		
		None
		#/LF = Qty * (Length/12) * Weight Each
		#/SQFT = (Qty * Weight Each )/((Length/12) * (Width/12))
		#/EA = Qty * Weight Each
		#/100 = (Qty * Weight Each)/100
		#/TON = (Qty * Weight Each)/2000
		
		$/UOM is the cost each
		"Weight Each" substitution for item_weight
		"Length" substitution for item_length
		"Qty" is substition  for item_quantity
		
		UOM = Unit of Measure from uom table maps 
		read cust cow code to get local codes
		get local code for UOM code for weight and cost
		o cow_xref.uom_dollar
		INFO uom_types.uom_code(15) <> cowcodes.cowcode(10). They aren't the same, but the uom is much larger.
		INFO uom_types.uom_code(15) <> cowcodes.uom(4). Changed to 15 from 4.
		o customer cost of work code(10) -> cow_xref.cust_cow_code(cowcode_id) -> cowcodes.uom(text) -> uom_types.uom_code(text) -> uom_types.uom_to_get_weight(100),
		o	uom_types.uom_to_get_value(100)
		
	 */
	//var uomVal = application.getValueListNames('stsvl_uom_value');
	//var uomWgt = application.getValueListItems('stsvl_uom_weight');
	formula = formula.toUpperCase().trim();
	if (formula.search('QTY') != -1) {
		formula = formula.replace(new RegExp(/QTY/g), quantity);
	}
	if (formula.search('LENGTH') != -1) {
		formula = formula.replace(new RegExp(/LENGTH/g), length);
	}
	if (formula.search('WIDTH') != -1) {
		formula = formula.replace(new RegExp(/WIDTH/g), width);
	}
	if (formula.search('WEIGHT') != -1) {
		formula = formula.replace(new RegExp(/WEIGHT *(EACH)+/g), weight);
	}
	if (formula.search(/\$\/UOM/) != -1) {
		formula = formula.replace(new RegExp(/\$\/UOM/g), uom);
	}
	if (formula.search('NONE') != -1) {
		formula = "";
	}
	return formula;
}
/**
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param cuom
 * @param nunitdollars
 * @param nunitqty
 * @param nwdthin
 * @param nlinewt
 * @param nlgthin
 *
 * @properties={typeid:24,uuid:"2FD1AAA5-12E0-46A7-86A9-66915488A9CD"}
 */
function extd2qty(cuom, nunitdollars, nunitqty, nwdthin, nlinewt, nlgthin){
	/**
	 * 	PARAMETERS cuom, nunitdollars, nunitqty, nwdthin, nlinewt, nlgthin

	nwidth = nwdthin/12
	nlength = nlgthin/12
	nsqft = nwidth * nlength		&& calculate the squate feet of the item
	
	 * cuom - current unit of measure of the category code
	 * nunitdollars - the dollars per unit of measure
	 * nunitqty - original quantity
	 * nwidth - width of the item being charged in feet
	 * nlinewt - the weight of the item being charged
	 * nlength - length of the item being charged in feet
	 * 
	 */
	var newValue = 0;
	switch(cuom)
	{
		case 'SQFT':		// $5/sqft * sqft
			newValue = nsqft * nunitdollars * nunitqty;
			break;
			
		case 'LBS ':		// $5/lb * lbs
			newValue = nlinewt * nunitdollars * nunitqty;
			break;

		case 'CWT ':		// 5$/cwt * (lbs/100)
			newValue = (nlinewt/100.0000) * nunitdollars * nunitqty;
			break;

		case 'TON ':		// $5/ton * lbs/2000
			newValue = (nlinewt/2000.0000) * nunitdollars * nunitqty;
			break;

		case 'LNFT':		// $5/lnft * length
			newValue = nlength * nunitdollars * nunitqty
			break;
			
		case 'PNLS':	// $5/each * qty
		case 'EACH':
			newValue = nunitqty * nunitdollars			//  * nunitqty
			break;
			
		case 'MTR2':		// ft2->m2 * $5/m2 * m2
			newValue = (nsqft * (1/10.76387)) * nunitdollars * nunitqty
			break;
			
		case 'METR':		// $5/m * m
			newValue = (nlength * (1/3.280833)) * nunitdollars * nunitqty
			break;
			
		case 'MTON':		// $5/mt * kg/1000
			newValue = ((nlinewt*0.4536)/1000.0000) * nunitdollars * nunitqty
			break;
		default:
			newValue = 0;
	}
	return newValue;
}
/**
 *
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param millimeters
 *
 * @properties={typeid:24,uuid:"BD4376C2-7C4D-481F-8922-8B593CD3FC63"}
 */
function decToFeet(millimeters){
	var decInches = millimeters/25.4;  //supposed to yield greater precision than  MILLIMETERS X 0.03937
	var feet = Math.floor(decInches/12);
	var inches =  Math.floor(decInches - feet * 12);
	var remain = decInches - (feet*12) - inches;
	var denom = 64;
	var division = [64,32,16,8,4,2];
	var num = Math.floor((remain * denom)+0.5);
	if (num/2 == Math.floor(num/2)){
		for (var index = 0;index < 6;index++) {
			var value = division[index];
			if (num < value){continue}
			if (Math.floor(num/value) == num/value && Math.floor(denom/value) == denom/value){
				num = num/value;
				denom = denom/value;
				break;
			}
		}
	}
	var feetStr = ((feet == 0) ? "0'-" : feet + "'-") + ((inches == 0) ? "0" : inches) + ((num == 0) ? "" : " "+num+"/"+denom)+'"';
	return feetStr;
}
/**
 * @param convertType
 * @param decimal
 * @param length
 * @param returnType
 *
 * 
 *
 * @properties={typeid:24,uuid:"B6DACF13-4A46-491A-9FC8-7338925EFB2F"}
 */
function decToString(convertType, decimal, length, returnType){
	/**
	* convertType - type of conversion, inches or feet
	* decimal  - decimal value passed to program
	* length - length of return string
	* returnType - if left blank or not passed to this function, return
	*	the string equalvalent of the numeric
	*	FEET - return the foot portion of the decimal
	*	INCH - return the inch portion of the decimal
	*	NUMERATOR - return the numerator
	*	DENOMINATOR - return the denominator

	* fraction - text version of decimal value

	* pass a numeric value that will be converted to feet and inches and
	*  this function will return the text version of that decimal value
	*/
	convertType = convertType.toUpperCase();
	returnType = returnType.toUpperCase();
	var itemdimen = "";
	var fractionOut = "";
	var feet = 0;
	var base = 2;                           //denominator of fraction
	var number = 0;
	var fraction = 0;
	var number2 = 0;
	var number16 = 0;
	var fraction2 = 0;
	
	number = Math.floor(decimal);
	fraction = decimal - number;
	switch( convertType ){
		case 'INCHES':
			if (fraction > 0){
				while (base < 32){
					number2 = Math.floor(fraction * base);
					if (base == 16){
						number16 = Math.floor(fraction * base + .5);//init16 = ROUND((FRAC * BASE),0)
					}
					fraction2 = (fraction * base) - number2;
					if (fraction2 != 0){
						base = base * 2;
					} else {
						break;//exit
					}
				}
				if (base < 32){
					fractionOut = number+" "+number2+"/"+base+"\"";
				} else {
					fractionOut = number+" "+number16+"/16\"";
				}
			} else {
				if (number == 0){
					fractionOut = "0\"";
				} else {
					fractionOut = number+"\"";
				}
			}
			break;
		case 'FEET':
			if (number > 0){
				feet = Math.floor(number/12) //whole feet
				number = number - (feet *12); //inches
			} else {
				feet = 0; //zero feet
				number = 0; // zero inches
			}
			if (fraction > 0){
				while (base <= 32){
					number2 = Math.floor(fraction * base);
					if (base == 16){
						number16 = Math.floor((fraction * base)+.5);
					}
					fraction2 = (fraction * base) - number2;
					if (fraction2 != 0){
						base = base * 2;
					} else {
						break;
					}
				}
				if (base <= 32){ //fraction within 32ths of an inch
					itemdimen = feet + "'-" + number + " " + number2 + "/" + base + '"';
				} else {
					itemdimen = feet + "'-" + number + " " + number16 + '/16"';
				}
			} else {
				if (number == 0 && feet == 0){
					itemdimen = '0"';
				} else {
					itemdimen = feet + "'-" + number + '"';
				}
			}
	break;
	
	default:
		return "";
	}
	if (returnType == ""){
		return "";
	} else {
		switch( returnType ){
		case 'FEET':
			feet = feet + "    ";
			return feet.substr(0,length);
		case 'INCH':
			number = number + "    ";
			return number.substr(0,length);
		case 'NUMERATOR':
			return number2;
			break;
		case 'DENOMINATOR':
			return (number2 > 0) ? base : 0;
			break;
		case 'FRACTION':
			if (base < 32) {
				return (number2 > 0) ? number2 + base : "0000";
			} else {
				return number16 + '16';
			}
			break;
		case 'FRACSLASH':
			if (base < 32){
				return (number2 > 0) ? number2 + "/" + base : "0000";
			} else {
				return number16 + "/16";
			}
			break;
		default:
			return "0000";
		}
	}
	/**
	 * 	Init = INT(itemdec)                 && interger portion of data
	FRAC = itemdec - INIT               && decimal portion of data

	DO CASE
		CASE convertype = "INCHES"

			IF FRAC > 0
				DO WHILE BASE < 32
					init2 = INT(FRAC * BASE)
					IF BASE = 16
						init16 = ROUND((FRAC * BASE),0)
					ENDIF
					frac2 = (FRAC * BASE) - init2
					IF frac2 <> 0
						Base = BASE * 2
					ELSE
						EXIT
					ENDIF
				ENDDO

				IF BASE < 32
					itemdimen = ALLTRIM(STR(INIT)) + ' ' + ALLTRIM(STR(init2)) + '/' + ALLTRIM(STR(BASE)) + '"'
				ELSE			&& if all else fails, return it in 1/16" fraction
					itemdimen = ALLTRIM(STR(INIT)) + ' ' + ALLTRIM(STR(init16)) + '/16' + '"'
				ENDIF

			ELSE

				IF EMPTY(INIT)
					itemdimen = "0" + '"'
				ELSE
					itemdimen = ALLTRIM(STR(INIT)) + '"'
				ENDIF

			ENDIF





		CASE convertype = "FEET"

			IF INIT > 0
				feet = INT( (INIT/12) )		&& whole feet
				Init = INIT - (feet * 12)	&& inches
			ELSE
				feet = 0					&& zero feet
				Init = 0					&& zero inches
			ENDIF

			IF FRAC > 0
				DO WHILE BASE <= 32
					init2 = INT(FRAC * BASE)
					IF BASE = 16
						init16 = ROUND((FRAC * BASE),0)
					ENDIF
					frac2 = (FRAC * BASE) - init2
					IF frac2 <> 0
						Base = BASE * 2
					ELSE
						EXIT
					ENDIF
				ENDDO

				IF BASE <= 32			&& fraction within 32ths of an inch
					itemdimen = ALLTRIM(STR(feet)) + "'-" + ALLTRIM(STR(INIT)) + ' ' + ALLTRIM(STR(init2)) + '/' + ALLTRIM(STR(BASE)) + '"'
				ELSE					&& if all else fails, return it in 1/16" fraction
					itemdimen = ALLTRIM(STR(feet)) + "'-" + ALLTRIM(STR(INIT)) + ' ' + ALLTRIM(STR(init16)) + '/16' + '"'
				ENDIF (BASE <= 32			&& fraction within 32ths of an inch)

			ELSE

				IF EMPTY(INIT) AND EMPTY(feet)
					itemdimen = "0" + "'"
				ELSE
					itemdimen = ALLTRIM(STR(feet)) + "'-" + ALLTRIM(STR(INIT)) + '"'
				ENDIF

			ENDIF

	ENDCASE


	IF EMPTY(creturntype)

		itemdimen = PADR(itemdimen,nlength,' ')
		RETURN (itemdimen)

	ELSE

		DO CASE
			CASE creturntype = 'FEET'
				RETURN (STR(feet,nlength))
			CASE creturntype = 'INCH'
				RETURN (STR(INIT,nlength))
			CASE creturntype = 'NUMERATOR'
				RETURN (STR(init2,nlength))
			CASE creturntype = 'DENOMINATOR'
				RETURN (IIF(init2 > 0, STR(BASE,nlength), STR(0,nlength)))
			CASE creturntype = 'FRACTION'
				IF BASE < 32
					RETURN (IIF(init2 > 0, PADL(ALLTRIM(STR(init2)),2) + PADL(ALLTRIM(STR(BASE)),2), "0000"))
				ELSE
					RETURN (STR(init16,2)+'16')
				ENDIF
			CASE creturntype = 'FRACSLASH'
				IF BASE < 32
					RETURN (IIF(init2 > 0, ALLTRIM(STR(init2)) + '/' + ALLTRIM(STR(BASE)), "0000"))
				ELSE
					RETURN ( ALLTRIM(STR(init16,2)) + '/' + '16' )
				ENDIF
			OTHERWISE
				RETURN ('0000')
		ENDCASE

	ENDIF
	 */
}

/**
 * 
 *
 * @properties={typeid:24,uuid:"6E405DC1-0480-4CA4-B8D8-0042401CAB90"}
 */
function importAmendQuantities(){
	/**
	 * Idfiles are individual. Go through idfiles, saving by uniquePiecemark+SeqNum+LotNum
	 * Called by import options change to append, or other selection from sheet matching within kiss_option_import
	 * Upon import, then these numbers are added to each line.
	 */
	scopes.jobs.appendQuantityToIdfile = [];
	var amendList = scopes.jobs.appendQuantityToIdfile;
	//readPieceTables();
	//var importFS = forms.kiss_option_import.transitionFS;
	if (!dsIdfiles){return}
	var length = dsIdfiles.getMaxRowIndex();
	for (var index = 1;index <= length;index++){
		/** @type {JSDataSet} */
		dsIdfiles.rowIndex = index;
		var pcmkId = dsIdfiles.piecemark_id+"";
		var seqId = dsIdfiles.sequence_id+"";
		var lotId = dsIdfiles.lot_id+"";
		dsPiecemarks.rowIndex = dsPiecemarkList[pcmkId];
		var uniqPcmk = uniquePiecemark(dsPiecemarks);
		var pcmk = dsPiecemarks.piecemark;
		var isSummary = (pcmk == "");
		//application.output('piecemark '+uniqPcmk+' i1 '+dsPiecemarkList[pcmkId]+' i2 '+index+' length '+length);

		dsSequences.rowIndex = dsSequenceList[seqId];
		var seqNum = dsSequences.sequence_number;
		dsLots.rowIndex = dsLotList[lotId];
		var lotNum = dsLots.lot;
		
		var idfile = uniqPcmk+seqNum+lotNum;
		if (!amendList[idfile]){
			amendList[idfile] = 0.0;
		}
		if (isSummary){
			//------------  summary record
			amendList[idfile] = amendList[idfile] + dsIdfiles.original_quantity;
			//------------  summary record
		} else {
			amendList[idfile] = amendList[idfile] + 1.0;
		}
	}
	null;
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4E338552-97DA-4349-8286-DC1FEF909673"}
 */
function saveBarCodeSerial(){
	if (scopes.jobs.barcodePrefix == "") {return}
	/** @type {QBSelect<db:/stsservoy/last_id_serial>} */
	var s = databaseManager.createSelect('db:/stsservoy/last_id_serial');
	s.result.add(s.columns.last_id_serial_id);
	s.where.add(s.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	s.where.add(s.columns.prefix.eq(barcodePrefix));
	s.where.add(s.columns.delete_flag.isNull);
	var S = databaseManager.getFoundSet(s);
	if (S.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/last_id_serial>} */
		var rec = S.getRecord(1);
		rec.serial = barcodeLast;
		rec.edit_date = new Date();
	} else {
		// raise error message
	}
	
	/* * @type {JSFoundSet<db:/stsservoy/last_id_serial>} * /
	var bcFS = databaseManager.getFoundSet('stsservoy','last_id_serial');
	if (bcFS.fin d()){
		bcFS.tenant_uuid = globals.secCurrentTenantID;
		bcFS.prefix = barcodePrefix;
		var count = bcFS.search();
		if (count == 0){
			var recIndex = bcFS.newRecord();
			var rec = bcFS.getRecord(recIndex);
			rec.prefix = barcodePrefix;
			rec.serial = barcodeLast;
			rec.tenant_uuid = globals.secCurrentTenantID;
		} else {
			rec = bcFS.getRecord(1);
			rec.serial = barcodeLast;
		}
	} */
	//get last barcode serial for this customer
}
/**
 * @param file
 *
 * 
 *
 * @properties={typeid:24,uuid:"312BF9C4-051C-4CA1-979D-D61A4FF7F028"}
 */
function readKissTextFile(file) {
	//warningsYes();
	//warningsMessage('Reading import file.');
	var prefs = {
		delimiter: ",",
		header:false,
		dynamicTyping:false
	}
	//var path = "C:\\Users\\Alienware\\Documents\\STS p2programs\\KISS\\";	//TODO general program preferences
	var path = scopes.prefs.importpath;
	if (file == "") {file = path} else {file = file[0]}
	var fileText = "";
	//var fileJS = plugins.file.convertToJSFile(file);
	fileText = plugins.file.readTXTFile(file);
	parseIntoLines(fileText);
	fileText = "";//clear file input string
    
    //importResults =  parse(fileText,prefs);
/*
    var length = importResults.results.length;
    var linePre = "";
    var rec1 = null;
    for (var index = 0;index <300;index++){
    	linePre = index+' ';
    	rec1 = importResults.results[index];
    	err1 = importResults.errors[index];
    	for (var prop in rec1){
    		linePre = linePre+'||'+rec1[prop];
    	}
    	for (var prop2 in err1){
    		linePre = linePre+" EEE "+err1[prop2].length;
    	}
    	application.output(linePre);
    }
*/
    var index = idHeaders();
	dataErrorCheck(index);
	var mappingDone = loadKissMapping();
	
	//warningsX();
	if (!mappingDone){return}
	//savePiecemarks();
}
/**
 * @AllowToRunInFind
 *
 * 
 *
 * @properties={typeid:24,uuid:"19A375D5-8457-40F7-885E-47D0F022B6DF"}
 */
function loadKissMapping(){
	var mappedFormat = 'FabSuite';
	mappedFormatArray = [];
	mappedFormatArrayDescrips = [];
	/** @type {QBSelect<db:/stsservoy/mapping>} */
	var fs5 = databaseManager.createSelect('db:/stsservoy/mapping');
	fs5.result.add(fs5.columns.mapping_id);
	fs5.where.add(fs5.columns.mapped_format.eq(mappedFormat));
	var M5 = databaseManager.getFoundSet(fs5);
	M5.sort('mapped_format asc, mapping_key asc, field_order asc');
	var mapTo = "";
	var i6 = 1;
	/** @type {JSFoundSet<db:/stsservoy/mapping>} */
	var rec6 = "";
	while (rec6 = M5.getRecord(i6++)){
		mapTo = rec6.mapping_key+','+rec6.field_order;
		if (rec6.mapped_field == null){continue}  // skip null mappings, won't work
		mappedFormatArray[mapTo] = rec6.mapped_field+'.'+rec6.field_sort_order;
		mappedFormatArrayDescrips[mapTo] = rec6.field_name;
	}
	// verify that all provided elements have been mapped, this is an error if any are missed from KISS file
	// errors in mapping should cancel an import
	/** @type {Array} */
	var data = importResults;
	var dataLength = data.length;
	var needsMap = [];
	for (i6=1;i6<dataLength;i6++){ // start at line 1 (one) to skip header title
		var lineNumber = data[i6];	// get line
		if (lineNumber[0] == "*"){continue} // skip comments
		var fieldCount = data[i6].length;
		for (var i7=1;i7<fieldCount;i7++){ // start at index=1 since line name is the prefix and is not mapped
			var fieldValue = data[i6][i7];
			if (fieldValue == ""){continue}	// no need to map empty fields
			var indexName = lineNumber[0]+","+i7; //at least this field is mapped.  ignore additional mappings, not fatal
			if (!mappedFormatArray[indexName]){
				if (!(indexName in needsMap)){
					needsMap[indexName]="";
				}
			}
		}
	}
	if (application.isInDeveloper()){application.output('NOT MAPPED:'+needsMap)}
	return needsMap.length == 0;
}
/**
 * @param event
 * @param table
 *
 * 
 *
 * @properties={typeid:24,uuid:"CE385D94-37FD-42FF-B111-6406A2FBF919"}
 */
function findEmptyColumns(event,table){
	//if (true != false){return}
	//globals.a.tempHiddenEmpty = [];
	var altForm = (table == 1);
	var formName = event.getFormName();
	var prefix = formName.split('_')[0];
	var hideEm = (globals.hideEmptyColumns == 1);
	//application.output(prefix+' form name '+formName+' loads_pcmk_combo');
	//forms.loads_pcmk_combo.elements.split.getRightForm().elements.checklist_line.visible
	if (prefix == 'loads'){
		var form = 'loads_pcmk_combo'+versionForm;
		if (forms[form].elements.split.getLeftForm().elements.selection){
			if (application.isInDeveloper()){application.output('hiding visibility of elements.selection column')}
			//forms[form].elements.split.getLeftForm().elements.selection.visible = false;
		}
	}
	form = prefix+'_pcmk_combo'+versionForm;
	var formEls = forms[form].elements.split.getLeftForm().elements;
	///var browse = databaseManager.getFoundSet(forms[form].elements.split.getLeftForm().controller.getDataSource());
	var browseSet = forms[form].elements.split.getLeftForm().foundset;
	var formTable = forms[form].elements.split.getLeftForm().controller.getName();
	//var disableList = ['checklist','uuid'];
	//for (var tab = 0;tab < 2;tab++){
	if (table != 0){
		var formRt = forms[form].elements.split.getRightForm();
		if (formRt == null){return}
		///var browse = databaseManager.getFoundSet(forms[form].elements.split.getRightForm().controller.getDataSource());			
		browseSet = forms[form].elements.split.getRightForm().foundset;
		formTable = forms[form].elements.split.getRightForm().controller.getName();
		formEls = forms[form].elements.split.getRightForm().elements;
		browseSet.sort('transaction_date desc');
	}
	var recCount = databaseManager.getFoundSetCount(browseSet);
	//var formName = forms.loads_pcmk_combo.elements.split.getLeftForm().getName();
	//var fs = forms[prefix+'_pcmk_combo_table'].foundset;
	/** @type {JSFoundSet} */
	var fs = browseSet;
	//browseSet = forms.loads_pcmk_combo.elements.split.getRightForm().foundset;
	recCount = databaseManager.getFoundSetCount(browseSet);
	application.output('record set size transaction '+recCount);
	//hideEm = (hideEm && (recCount > 1) && (table != 0));
	//application.output('DEBUG hiding '+hideEm);
	var maxCount = (recCount > 100) ?  Math.floor(recCount*.10) : recCount;
	for (var item in formEls){
		var empty = true && (recCount <2);
		var dataProvider = formEls[item].getDataProviderID();
//application.output('form '+formTable+' '+globals.a.tempHiddenColumns);
		for (var index = 1;index <= maxCount;index++){
			if (globals.a.tempHiddenColumns[formTable] &&
					globals.a.tempHiddenColumns[formTable].indexOf(item) != -1){
				empty = true;
				break;
			}
			var rec = fs.getRecord(index);
			if (!hideEm){
				empty = false;
				break;
			}
			var value = fs.getDataProviderValue(dataProvider);
			if (value != undefined && (value != "" && value != null)){
				empty = false;
				break;
			}
		}
		if (empty && !altForm){
			globals.a.tempHiddenEmpty.push(item);
		}
		if (altForm){
			formEls[item].visible = !empty;
		}
		//formEls[item].visible = !empty;
		if (globals.a.tempHiddenColumns[formTable] && 
				globals.a.tempHiddenColumns[formTable].indexOf(item) != -1){
			formEls[item].visible = false;
		}
	}
	//application.output('empty fields ' + globals.a.tempHiddenEmpty);
}
/**
 * @AllowToRunInFind
 *
 * 
 *
 * @properties={typeid:24,uuid:"712435AE-A92F-46C8-A4BF-DAD3FCD89B48"}
 */
function idHeaders(){
	var format = "";
	var data = importResults;
	///var length = data.length;
	if (data[0].length >2 && data[0][2].search("FabSuite") != -1){format = "FabSuite"}
	if (application.isInDeveloper()){application.output('File Format '+format)}
	var index = 1;
	while (data[index][0] == "*"){ // get headers if 
		//application.output(data[index][1]);
		var headLineSize = data[index].length;
		if (headLineSize <= 1) {continue}
		var mappingLine = data[index][1];
		var fieldName = ""; 	//compare to other non-header lines in file
		var mappingLineIndex = mappingLine.search(RegExp('\\b[A-Z\\*]\\b'));		///get regexp of 'x' 1 char
		if (mappingLineIndex != -1){
			var mappingKey = mappingLine[mappingLineIndex];
		}
		for (var i3=1;i3 < headLineSize;i3++){
			//create records for missing mapping fields under mapping format
			fieldName = data[index][i3].trim();
			if (fieldName.search(RegExp('[A-Za-z]+')) == -1){fieldName = "UNDEFINED";}
			var fieldPosition = i3;
			/** @type {QBSelect<db:/stsservoy/mapping>} */
			var fs2 = databaseManager.createSelect('db:/stsservoy/mapping');
			fs2.result.add(fs2.columns.mapping_id);
			fs2.where.add(fs2.columns.mapped_format.eq(format));
			fs2.where.add(fs2.columns.mapping_line.eq(mappingLine));
			fs2.where.add(fs2.columns.field_name.eq(fieldName));
			var M2 = databaseManager.getFoundSet(fs2);
			
			if (M2.getSize() == 0){
				var idx = M2.newRecord();
				var rec = M2.getRecord(idx);
				rec.mapped_format = format;
				rec.mapping_line = mappingLine;
				rec.mapping_key = mappingKey;
				if (mappingLine == fieldName){
					rec.field_value = mappingKey;
				}
				rec.field_name = fieldName;
				rec.field_order = fieldPosition-1;
				databaseManager.saveData(rec);
			}
		}
		index++;		
	}

	return index;
}
/**
 * @param event
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"AD4315E9-E4CF-42C4-837F-273C7C3E415C"}
 */
function onRecordSelectIdfile(event){
	//application.output('selected line');
	var versionForm = globals.getInstanceForm(event);
	var formName = event.getFormName();
	var tableParent = formName.replace("_table","");
	//application.output('on record select '+formName);
	if (typeof forms[tableParent].elements.tabless === 'object'){return}
	//if (formName.search('barcode') != -1){return}
	var prefix = event.getFormName().split("_")[0];
	///var index = forms[event.getFormName()].controller.getSelectedIndex();
	var rec = forms[event.getFormName()];null;null;
	//var fs = databaseManager.getFoundSetCount('sts_piecemarks');
	//fs.sts_piecemark.loadRecords();
	//var fs = rec.piecemark_id.rr;
	scopes.jobs['transactionIdfileId'+versionForm] = rec.idfile_id;
	//application.output('idfileid '+scopes.jobs.transactionIdfileId);
	//application.output('form name '+prefix+'_pcmk_transaction'+versionForm);
	//forms.gen_browse_trans.controller.loadRecords();
	if (!forms[prefix+'_pcmk_transaction'+versionForm]){return}
	forms[prefix+'_pcmk_transaction'+versionForm].controller.loadRecords();
	findEmptyColumns(event,1);
	//application.output('barcode id '+id_serial_number_id);
	//return _super.onRecordSelection(event);
}
/**
 * @AllowToRunInFind
 * 
 * @param index
 *
 * 
 *
 * @properties={typeid:24,uuid:"FCAC16DF-D92B-4A99-B993-BC258ECCB55F"}
 */
function dataErrorCheck(index) {
	///var importRouteCodes = [];
	/** @type {Array} */
 	var data = importResults;
 	usedFields = [];
	//var index2 = index;
	//var length2 = length < 3000 ? length : length*.10;
	var lines = [];
	var lineType = "";
	var typeFieldCount = 0;
	var length = data.length;
	for (var i = index;i < length; i++){ // get sample line types and sizes
		lineType = data[i][0];
		typeFieldCount = data[i].length;
		if (lines[lineType] == null){
			lines[lineType] = typeFieldCount
			//application.output('Line '+lineType+' '+typeFieldCount)
		} else {
			if (lines[lineType] != typeFieldCount){
				application.output('Found '+lineType+' '+typeFieldCount+' but had '+lines[lineType]+' fields')
			}
		}
		for (var i5=1;i5<typeFieldCount;i5++){
			if (lineType == "H"){continue}
			var indexed = lineType+","+i5;
			if (data[i][i5] && !usedFields[indexed]){usedFields[indexed] = true;} // get list of unused/blank fields
		}
		if (lineType == ""){
			data[i][scopes.jobs.getFieldDataMapping("mapped_field","jobs.metric_job").split(",")[1]]
		}
	}
	// Update key code temp
	/** @type {JSFoundSet<db:/stsservoy/mapping>} */
 	var fs3 = databaseManager.getFoundSet("db:/stsservoy/mapping");
 	
	fs3.loadRecords();
	var fs3Size = fs3.getSize();
	for (var i4 = 1;i4 <= fs3Size;i4++){
		var rec2 = fs3.getRecord(i4);
		if (rec2.mapping_key == null) {
			var keySource = rec2.mapping_line;
			var keyIndex = keySource.search(RegExp('\\b[A-Z\\*]\\b'));
			var key = rec2.mapping_line[keyIndex];
			rec2.mapping_key = key;
			databaseManager.saveData(rec2);
			application.output('KEY SEARCH. Line: '+rec2.mapping_line+', key: '+key);
		}
	}
}
/**
 * @AllowToRunInFind
 * 
 * @param table
 *
 * 
 *
 * @properties={typeid:24,uuid:"41DC04CC-46E0-449C-A277-FD77B71E0DEC"}
 */
function insertAggregPcmk(table){
	var length = table.getMaxRowIndex();
	var sheetID = "";
	for (var index = 0;index < length;index++){
		/** @type {QBSelect<db:/stsservoy/sheets>} */
		var sheetFS = databaseManager.createSelect('db:/stsservoy/sheets');
		sheetFS.result.add(sheetFS.columns.sheet_id);
		sheetFS.where.add(sheetFS.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		sheetFS.where.add(sheetFS.columns.job_id.eq(scopes.jobs.jobIDs[0]));
		sheetFS.where.add(sheetFS.columns.delete_flag.not.eq(99));
		sheetFS.where.add(sheetFS.columns.sheet_number.eq(table[index].sheet_number));
		var S = databaseManager.getFoundSet(sheetFS);
		if (S.getSize() > 0){
			/** @type {JSRecord<db:/stsservoy/sheets>} */
			var rec = S.getRecord(1);
			sheetID = rec.sheet_id;
		} else {
			var newIndex = S.newRecord();
			/** @type {JSRecord<db:/stsservoy/sheets>} */
			var newRec = S.getRecord(newIndex);
			newRec.job_id = scopes.jobs.jobIDs[0];
			newRec.sheet_number = table[index].sheet_number;
			newRec.tenant_uuid = globals.session.tenant_uuid;
			sheetID = newRec.sheet_id;
			databaseManager.saveData(newRec);
		}
		/** @type {QBSelect<db:/stsservoy/piecemarks>} */
		var pieceFS = databaseManager.createSelect('db:/stsservoy/piecemarks>');
		pieceFS.result.add(pieceFS.columns.piecemark_id);
		pieceFS.where.add(pieceFS.columns.piecemark.eq(table[index].piecemark));
		pieceFS.where.add(pieceFS.columns.parent_piecemark.eq(table[index].parent_piecemark));
		pieceFS.where.add(pieceFS.columns.sheet_id.eq(sheetID));
		pieceFS.where.add(pieceFS.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		pieceFS.where.add(pieceFS.columns.grade.eq(table[index].grade));
		pieceFS.where.add(pieceFS.columns.finish.eq(table[index].finish));
		var P = databaseManager.getFoundSet(pieceFS);
		if (P.getSize() == 0){
			newIndex = P.newRecord();
			/** @type {JSRecord<db:/stsservoy/piecemarks>} */
			var newRecP = P.getRecord(newIndex);
			newRecP.material = table[index].material;
			newRecP.finish = table[index].finish;
			newRecP.grade = table[index].grade;
			newRecP.item_length = table[index].item_length*1;
			newRecP.item_quantity = table[index].item_quantity;
			newRecP.item_weight = table[index].item_weight*1;
			newRecP.parent_piecemark = table[index].parent_piecemark
			newRecP.piecemark = table[index].piecemark;
			newRecP.sheet_id = sheetID;
			newRecP.tenant_uuid = globals.session.tenant_uuid;
			databaseManager.saveData(newRecP);
		} else {
			//overwrite but must match sequence
		}
	}
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"F60681E8-94B9-43B7-BE6C-D787C87A79FA"}
 */
function deleteLotsJob(){
	if (!dsLots){return}
	var tempCodes = [];
	for (var index2 = 1;index2 <= dsLots.getMaxRowIndex();index2++){
		dsLots.rowIndex = index2;
		tempCodes.push(dsLots.lot_id);
	}	

	///var count2 = 0;
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	fs.loadRecords(databaseManager.convertToDataSet(tempCodes));
	///var count = fs.getSize();
	deleteFoundSet(fs);
	if (application.isInDeveloper()){application.output('Lots to delete '+fs.getSize());}
	dsLots = null;
	dsLotList = [];
	dsLotArray = [];
}
/**
 * 
 * @SuppressWarnings(hides)
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 * @SuppressWarnings(unused)
 * 
 * TODO generated, please specify type and doc for the params
 * @param jobID
 *
 * @properties={typeid:24,uuid:"DCC7B8EE-3B52-42E5-955B-8E05DB91CEDD"}
 */
function deleteSequencesJob(jobID){
	var dsSequenceList = scopes.jobs.dsSequenceList;
	var count2 = 0;
	/** @type {QBSelect<db:/stsservoy/sequences>} */
	var fs = databaseManager.createSelect('db:/stsservoy/sequences');
	fs.result.add(fs.columns.sequence_id);
	fs.where.add(fs.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	fs.where.add(fs.columns.job_id.eq(jobID));
	var S = databaseManager.getFoundSet(fs);
	if (S.getSize() > 0){
		count2 = S.getSize();
		deleteFoundSet(S);
	}
	if (application.isInDeveloper()){application.output("Sequences to delete "+count2)}
	dsSequences = null;
	dsSequenceList = [];
	dsSequenceArray = [];
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"7DA69C86-8843-49EA-8124-37AA2BBF863A"}
 */
function deleteBarcodesJob(){
	if (!dsBarcodes){return}
	var tempCodes = [];
	for (var index2 = 1;index2 <= dsBarcodes.getMaxRowIndex();index2++){
		dsBarcodes.rowIndex = index2;
		tempCodes.push(dsBarcodes.id_serial_number_id);
	}
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */	
	var fs = databaseManager.getFoundSet('stsservoy','id_serial_numbers');
	fs.loadRecords(databaseManager.convertToDataSet(tempCodes));
	var count = fs.getSize();
	deleteFoundSet(fs);
	application.output('Barcodes to delete '+dsBarcodeList.length+" fssize "+count);
	dsBarcodes = null;
	dsBarcodeList = [];
	dsBarcodeArray = [];
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"735ECB68-21FE-4B14-B0CB-4EFBEBCA5789"}
 */
function deleteIdfilesJob(){
	///var dsIdfileList = scopes.jobs.dsIdfileList;
	if (dsIdfileList.length == 0){return}
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */	
	var fs = databaseManager.getFoundSet('stsservoy','idfiles');
	fs.loadRecords(databaseManager.convertToDataSet(dsIdfileList));
	///var count = fs.getSize();
	deleteFoundSet(fs);
	application.output('Idfiles to delete '+dsIdfileList.length);
	dsIdfiles = null;
	dsIdfileList = [];
	dsIdfileArray = [];
}
/**
 *
 * 
 *
 * @properties={typeid:24,uuid:"D28FFBF3-BC22-4A60-9298-1BC4EFDBAEB5"}
 */
function recallDeletedBarcodes(){
	var recall = true;
	purgeDeletedBarcodes(recall);
}
/**
 * @param {Boolean} recall
 * 
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"A19F19CE-B15C-4C20-8921-5B2E1EDC9CEB"}
 */
function purgeDeletedIdfiles(){
	warningsYes();
	warningsMessage('Purging Idfile information.');
	var message = 'Purging ';
	///var purgeRecordList = [];
	/* 
	 * id_serial_number_id*, idfile_id*, transaction_id*, piecemark_id^, lot_id*, sequence_id*, sheet_id*, job_id 
	 */
	if (!scopes.globals.purgeBarcodeRecords){
		scopes.globals.purgeBarcodeRecords = [];
	}
	/** @type {Array} */
	var purgeCodes = scopes.globals.purgeBarcodeRecords;
	if (purgeCodes.length == 0){return}
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var b =  databaseManager.createSelect("db:/stsservoy/id_serial_numbers");
	b.result.add(b.columns.id_serial_number_id);
	b.result.add(b.columns.delete_flag);
	b.where.add(b.columns.id_serial_number_id.isin(purgeCodes));
	var resultB = databaseManager.getFoundSet(b);
	if (application.isInDeveloper()){application.output('barcodes '+resultB.getSize())}
	if (typeof recall != 'undefined'){
		var recallable = databaseManager.getFoundSetUpdater(resultB);
		recallable.setColumn('delete_flag',null);
		recallable.performUpdate();
	} else {
		resultB.deleteAllRecords();
	}
	
	warningsMessage(message+' pm status information.');
	var idfiles = [];
	var lots = [];
	var sequences = [];
	var piecemarks = [];
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i =  databaseManager.createSelect("db:/stsservoy/idfiles");
	i.result.add(i.columns.idfile_id);
	i.result.add(i.columns.delete_flag);
	i.result.add(i.columns.deleted_date);
	i.result.add(i.columns.piecemark_id);
	i.result.add(i.columns.lot_id);
	i.result.add(i.columns.sequence_id);
	//i.result.add(i.columns.ship_load_id);
	//i.result.add(i.columns.received_load_id);
	//i.result.add(i.columns.current_load_id);
	i.where.add(i.and
		.add(i.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(i.columns.id_serial_number_id.isin(purgeCodes))
		.add(i.columns.delete_flag.eq(99))
		);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultI = databaseManager.getFoundSet(i);
	var length = resultI.getSize();
	for (var index = 1;index <= length;index++){
		var rec = resultI.getRecord(index);
		var idfileID = rec.idfile_id;
		var pcmkID = rec.piecemark_id;
		var lotID = rec.lot_id;
		var seqID = rec.sequence_id;
		if (idfiles.indexOf(idfileID+"") == -1){idfiles.push(idfileID+"")}
		if (piecemarks.indexOf(pcmkID+"") == -1){piecemarks.push(pcmkID+"")}
		if (lots.indexOf(lotID+"") == -1){lots.push(lotID+"")}
		if (sequences.indexOf(seqID+"") == -1){sequences.push(seqID+"")}
	}
	if (application.isInDeveloper()){application.output('idfile size '+resultI.getSize())}
	if (typeof recall != 'undefined'){
		recallable = databaseManager.getFoundSetUpdater(resultI);
		recallable.setColumn('delete_flag',null);
		recallable.performUpdate();
	} else {
		resultI.deleteAllRecords();
	}

	
	warningsMessage(message+' transaction histories.');
	if (idfiles.length > 0){
		/** @type {QBSelect<db:/stsservoy/transactions>} */
		var t =  databaseManager.createSelect("db:/stsservoy/transactions");
		t.result.add(t.columns.trans_id);
		t.result.add(t.columns.delete_flag);
		t.where.add(t.columns.idfile_id.isin(idfiles));
		var resultT = databaseManager.getFoundSet(t);
		application.output('transaction '+resultT.getSize());
		if (typeof recall != 'undefined'){
			recallable = databaseManager.getFoundSetUpdater(resultT);
			recallable.setColumn('delete_flag',null);
			recallable.performUpdate();
		} else {
			resultT.deleteAllRecords();
		}
	}

	warningsMessage(message+' piecemark data.');
	var sheets = [];
	if (piecemarks.length > 0){
		/**
		 * piecemarks that are 99 only
		 * confirm piecemarks, in list of idfiles, but get list of all idfiles for each piecemark
		 * and purge only those piecemarks that are in both lists
		 */
		var piecemarksToPurge = [];
		/** @type {QBSelect<db:/stsservoy/piecemarks>} */
		var p =  databaseManager.createSelect("db:/stsservoy/piecemarks");
		p.result.add(p.columns.piecemark_id);
		p.result.add(p.columns.sheet_id);
		p.where.add(p.and
				.add(p.columns.tenant_uuid.eq(globals.session.tenant_uuid))
				.add(p.columns.piecemark_id.isin(piecemarks))
				.add(p.columns.delete_flag.eq(99))
			);
		var resultP = databaseManager.getFoundSet(p);
		length = resultP.getSize();
		for (index = 1;index <= length;index++){
			rec = resultP.getRecord(index);
			var sheetID = rec.sheet_id; pcmkID = rec.piecemark_id;
			if (sheets.indexOf(sheetID+"") == -1){sheets.push(sheetID+"")}
			if (piecemarksToPurge.indexOf(pcmkID+"") == -1){piecemarksToPurge.push(pcmkID+"")}
		}
		var piecemarksPurge = []; // all idfiles for piecemarks to delete, if 
		for (index = 0;index < piecemarksToPurge.length;index++){
			var piecemarkID = piecemarksToPurge[index];
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			i =  databaseManager.createSelect("db:/stsservoy/idfiles");
			i.result.add(i.columns.piecemark_id);
			i.where.add(i.and
					.add(i.columns.piecemark_id.eq(piecemarkID))
					.add(i.columns.idfile_id.not.isin(idfiles))
				);
			resultI = databaseManager.getFoundSet(i);
			if (resultI.getSize() == 0){
				piecemarksPurge.push(piecemarkID+"");//okay to delete because for this piecemark, no idfiles remain to be deleted
			}
		}
		if (piecemarksPurge.length > 0){
			/** @type {QBSelect<db:/stsservoy/piecemarks>} */
			p =  databaseManager.createSelect("db:/stsservoy/piecemarks");
			p.result.add(p.columns.piecemark_id);
			p.result.add(p.columns.delete_flag);
			p.result.distinct;
			p.result.add(p.columns.sheet_id);
			p.where.add(p.columns.piecemark_id.isin(piecemarksPurge));
			resultP = databaseManager.getFoundSet(p);
			application.output('piecemark size '+resultP.getSize());
			if (typeof recall != 'undefined'){
				var recallSet = databaseManager.getFoundSetUpdater(resultP);
				recallSet.setColumn('delete_flag',null);
				recallSet.performUpdate();
			} else {
				resultP.deleteAllRecords();
			}
		}
	}
	
	warningsMessage(message+' lot membership.');
	if (lots.length > 0){ // get list of all identified lots from above, get list of all idfiles using lot, for each lot, delete only if no idfiles use the lot
		var lotsDelete = []; // all lots with no idfiles to delete 
		for (index = 0;index < lots.length;index++){
			lotID = lots[index];
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			i =  databaseManager.createSelect("db:/stsservoy/idfiles");
			i.result.add(i.columns.lot_id);
			i.result.add(i.columns.delete_flag);
			i.result.distinct;
			i.where.add(i.columns.lot_id.eq(lotID));
			resultI = databaseManager.getFoundSet(i);
			if (resultI.getSize() == 0){lotsDelete.push(lotID)}
		}
		if (lotsDelete.length > 0){
			/** @type {QBSelect<db:/stsservoy/lots>} */
			var l =  databaseManager.createSelect("db:/stsservoy/lots");
			l.result.add(l.columns.lot_id);
			l.where.add(l.columns.lot_id.isin(lotsDelete));
			var resultL = databaseManager.getFoundSet(l);
			application.output('lot size '+resultL.getSize());
			if (typeof recall != 'undefined'){
				recallSet = databaseManager.getFoundSetUpdater(resultL);
				recallSet.setColumn('delete_flag',null);
				recallSet.performUpdate();
			} else {
				resultL.deleteAllRecords();
			}
		}
	}
	
	warningsMessage(message+' sequence membership.');
	if (sequences.length > 0){ // get list of all identified lots from above, get list of all idfiles using lot, for each lot, delete only if no idfiles use the lot
		var seqsDelete = []; // all lots with no idfiles to delete 
		for (index = 0;index < sequences.length;index++){
			seqID = sequences[index];
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			i =  databaseManager.createSelect("db:/stsservoy/idfiles");
			i.result.add(i.columns.sequence_id);
			i.result.distinct;
			i.where.add(i.columns.sequence_id.eq(seqID));
			resultI = databaseManager.getFoundSet(i);
			if (resultI.getSize() == 0){seqsDelete.push(seqID)}
		}
		if (seqsDelete.length > 0){
			/** @type {QBSelect<db:/stsservoy/sequences>} */
			var s =  databaseManager.createSelect("db:/stsservoy/sequences");
			s.result.add(s.columns.sequence_id);
			s.result.add(s.columns.delete_flag);
			s.where.add(s.columns.sequence_id.isin(seqsDelete));
			var resultS = databaseManager.getFoundSet(s);
			application.output('sequence size '+resultS.getSize());
			if (typeof recall != 'undefined'){
				recallSet = databaseManager.getFoundSetUpdater(resultS);
				recallSet.setColumn('delete_flag',null);
				recallSet.performUpdate();
			} else {
				resultS.deleteAllRecords();
			}
		}
	}
	
	warningsMessage(message+' sheet membership.');
	if (sheets.length > 0){ // get list of all identified lots from above, get list of all idfiles using lot, for each lot, delete only if no idfiles use the lot
		var sheetsDelete = []; // all lots with no idfiles to delete 
		for (index = 0;index < sheets.length;index++){
			sheetID = sheets[index];
			/** @type {QBSelect<db:/stsservoy/piecemarks>} */
			p =  databaseManager.createSelect("db:/stsservoy/piecemarks");
			p.result.add(p.columns.sheet_id);
			p.result.distinct;
			p.where.add(p.columns.sheet_id.eq(sheetID));
			resultI = databaseManager.getFoundSet(p);
			if (resultI.getSize() == 0){sheetsDelete.push(sheetID)}
		}
		if (sheetsDelete.length > 0){
			/** @type {QBSelect<db:/stsservoy/sheets>} */
			var ss =  databaseManager.createSelect("db:/stsservoy/sheets");
			ss.result.add(ss.columns.sheet_id);
			ss.result.add(ss.columns.delete_flag);
			ss.where.add(ss.columns.sheet_id.isin(sheetsDelete));
			resultS = databaseManager.getFoundSet(ss);
			application.output('sheet size '+resultS.getSize());
			if (typeof recall != 'undefined'){
				recallSet = databaseManager.getFoundSetUpdater(resultS);
				recallSet.setColumn('delete_flag',null);
				recallSet.performUpdate();
			} else {
				resultS.deleteAllRecords();
			}
		}
	}
	scopes.globals.purgeBarcodeRecords = [];
	warningsX();
	return;
}
/**
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param jobID
 *
 * @properties={typeid:24,uuid:"7E387C07-6DFA-4D82-B7A2-8503F116C142"}
 */
function deleteSheetsJob(jobID){
	var dsSheetList2 = scopes.jobs.dsSheetList;
	var count = 0;
	scopes.globals.tempArray = [];
	for (var index in dsSheetList2){
		scopes.globals.tempArray.push(index);
	}
	count = 0;
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */	
	var fs = databaseManager.getFoundSet('stsservoy','sheets');
	fs.loadRecords(databaseManager.convertToDataSet(scopes.globals.tempArray));
	count = fs.getSize();
	deleteFoundSet(fs);
	application.output('Sheets to delete '+count);
	dsSheets = null;
	dsSheetList2 = [];
	dsSheetArray = [];
}
/**
 * @param srcArray
 * @param dstArray
 *
 * 
 *
 * @properties={typeid:24,uuid:"3EE5DA1D-5106-4B96-97B9-ECBBE7034C75"}
 */
function removeFromList(srcArray,dstArray){
	var dstLength = dstArray.length;
	var tempArray = [];
	for (var index = 0;index < dstLength;index++){
		var item = dstArray.pop();
		if (srcArray.indexOf(item) == -1){
			tempArray.push(item);
		}
	}
	dstArray = [].concat(tempArray);
}
/**
 * @param formName
 *
 * 
 *
 * @properties={typeid:24,uuid:"6ED669C5-6F01-4689-A505-D105BA70927A"}
 */
function removeFormHist(formName){
	//application.getActiveWindow().
	var statHis = history.removeForm(formName);
	var statMod = solutionModel.removeForm(formName);
	if (application.isInDeveloper()){application.output(formName+' history remove: '+statHis+' solution model remove form: '+statMod);}
	return (statHis && statMod);
}
/**
 * @param importRec
 *
 * 
 *
 * @properties={typeid:24,uuid:"213297F6-8659-48B5-A9B7-C10C2962916F"}
 */
function importRecordAllIdfiles(importRec){
	// importRec indicates it is from a table, not db
	var pcmk = uniquePiecemark(importRec);
	var pcmkId = dsPiecemarkArray[pcmk];
	var seqNum = importRec.sequence_number;
	var lotNum = importRec.lot_number;
	var seqId = dsSequenceArray["_"+seqNum];
	if (lotNum){
		var lotId = dsLotArray["_"+lotNum];
	}
	var idfileListPM = dsIdfileListByPm[pcmkId];
	var length = idfileListPM.length;
	var pmIdfileList = [];
	for (var index = 0;index<length;index++){
		var idfileId = idfileListPM[index];
		dsIdfiles.rowIndex = dsIdfileList[idfileId];
		if ((seqId == dsIdfiles.sequence_id) && (lotId == dsIdfiles.lot_id)){
			if (pmIdfileList.indexOf(idfileId) == -1){
				pmIdfileList.push(idfileId);
			}
		}
	}
	return pmIdfileList;
}
/**
 * @AllowToRunInFind
 * 
 * @param record
 *
 * 
 *
 * @properties={typeid:24,uuid:"3273C81F-9278-4C79-80F5-441D2A8B7B13"}
 */
function preserveHistory(record){
	var loseHist = record.action.search('LOSE') != -1;
	return !loseHist;
}
/**
 * @AllowToRunInFind
 * 
 * @param record
 * @param unique
 * @param sheetId
 *
 * 
 *
 * @properties={typeid:24,uuid:"EC1B28AB-1CD4-4CC6-B2C6-8DE6EE02BF9F"}
 */
function importRecordChangeSheet(record,unique,sheetId){
	//update piecemark
	//var unique = scopes.jobs.uniquePiecemark(record);
	var piecemarkId = dsPiecemarkArray[unique];
	dsPiecemarkList[unique]=null;//mark old piecemark index as BAD
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.createSelect('db:/stsservoy/piecemarks');
	fs.result.add(fs.columns.tenant_uuid);
	fs.where.add(fs.columns.piecemark_id.eq(piecemarkId));
	var P = databaseManager.getFoundSet(fs);
	if (P.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/piecemarks>} */
		var rec = P.getRecord(1);
		P.sheet_id = sheetId;
		var unique2 = uniquePiecemark(rec);
		dsPiecemarks[unique2] = rec.piecemark_id;
		dsPiecemarkList.push(rec.piecemark_id);
	}
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"D1A621A5-0F33-4EA3-8444-7D4A8068DBE1"}
 */
function importRecordsCheck(){
	//var jobID = scopes.jobs.jobIDs[0];
	//scopes.jobs.jobUnderCustomer = jobID;
	///var jobID = scopes.jobs.jobUnderCustomer;
	readPieceTables(); // existing records
	//createSheets();//make sure sheets exist before import
	var retainFS = forms.kiss_option_import.transitionFS;
	/// ** @type {JSFoundSet<db:/stsservoy/piecemarks>} * /
	var rows = retainFS.getMaxRowIndex();
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		retainFS.import_status = "";
		var record = retainFS;
		var status = "";
		if (!retainFS.action){retainFS.action = ""}
		//application.output('--->>> index '+index+' pm '+retainFS.piecemark);
		//retainFS.import_status += importRecordCheckSheet(record,false);
		status = importRecordPiecemarkExist(record,false); // return blank upon success; it's a status
		if (record.select_hidebool){
			status = status+",delPM";
			record.action = "DELETE";
		}
		retainFS.import_status += status;
		//if (status.search('noPM') != -1){
		if (status == "" ||status.search('summ') != -1){ // check for idfile disposition
			retainFS.import_status += importRecordCheckIdfileCount(record,false);
		}
		if (retainFS.import_status != ""){
			retainFS.import_status = utils.stringRight(retainFS.import_status, retainFS.import_status.length-1);
			//application.output(' idfile entry '+uniqueIdfileIdFromImp(retainFS));
			if (retainFS.import_status.search('BC') != -1){
				record.action = "UPDATE";
			}
			if (retainFS.import_status.search('QTY') != -1){ // +QTY is implied, since it is a qualifier for the search method, left it out
				record.action = "CREATE";
			}
			if (retainFS.import_status.search('-QTY') != -1){
				record.action = "DELETE";
			}
		}
		if (forms.kiss_option_import.importOption.search('Append') != - 1 && appendQuantityToIdfile[uniqueIdfileIdFromImp(retainFS)]){
			var appendQuant = appendQuantityToIdfile[uniqueIdfileIdFromImp(retainFS)];
			record.action = "CREATE";
			if (retainFS.import_status == ""){
				retainFS.import_status = "+APP"+appendQuant;
			} else {
				retainFS.import_status = "+APP"+appendQuant+","+retainFS.import_status;
			}
		}
		if (forms.kiss_option_import.importOption.search('Overwrite') != -1){
			record.action = "CREATE";
		}
	}
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"B30AAE4D-80C1-4291-A467-C8B1B7E67C19"}
 */
function importRecords_append(){
	///var append = true; // ceremonial. Don't use this variable.
	// see importAmendQuantities() for adjustments to append quantities
	importRecords_sheet();
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"20460AB2-71FA-4B54-86A8-9D82A229DBA1"}
 */
function importRecords_overwriteX(){
	warningsMessage('Overwrite - Deleting current job information.')
	importRecordsDeleteX();
	///var append = false;
	warningsMessage('Overwrite - New Data . . .');
	importRecords_sheetX();
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"47118707-E27B-4092-80D5-64B9A3DB34DB"}
 */
/**
 * 
 *
 * @properties={typeid:24,uuid:"E1E0102E-88DF-4454-907C-83465391D670"}
 */
function importRecordsDeleteX(){
	warningsMessageX('Begin overwrite of data.');
	var jobID = scopes.jobs.jobUnderCustomer;
	scopes.jobs.jobUnderCustomer = jobID;
	/*
	 * 5 delete piecemarks attached to sheets
	 * 6 delete sheets for job - attached to job
	 * 1 delete lots for job - attached to sequences
	 * 3 delete id_serial_numbers for job - jattached to idfile
	 * 2 delete sequences for job - attached to idfile and/or job
	 * 4 delete idfiles for job - idfiles attached to piecemarks
	 */
	readPieceTableXs(); // existing records
	deleteLotsJobX();
	warningsMessageX('Delete Lots');
	deleteSequencesJobX(jobID);
	warningsMessageX('Delete Sequences');
	deleteBarcodesJobX();
	warningsMessageX('Delete Barcodes');
	deleteIdfilesJobX();
	warningsMessageX('Delete Idfiles');
	deletePiecemarksJobX();
	warningsMessageX('Delete Piecemarks');
	deleteSheetsJobX(jobID);
	warningsMessageX('Delete Sheets');
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8762D30E-8046-453F-9781-122AFAC71D3E"}
 */
function importRecordsAlt(){
	///var win = application.getActiveWindow();
	///win.controller.enabled = false;
	var beginTime = new Date().getTime();
	importDate = new Date().getDate();
	var importOpt = forms.kiss_option_import.importOption;
	warningsYes();
	//var win = application.createWindow("STS Message", JSWindow.DIALOG);
	//win.setInitialBounds(10, 10, 460, 110);
	//win.title = "STS Message";
	//win.show('messagesWarnings');
	
	//var jobID = scopes.jobs.jobIDs[0];
	//scopes.jobs.jobUnderCustomer = jobID;
	//readPieceTables(); // existing records
	barcodePrefix = "";
	barcodeLast = 0;
	var statusSave = databaseManager.saveData(); //  clean save
	databaseManager.setAutoSave(false);
	if (databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.startTransaction();}
	warningsMessage('Start (save:'+statusSave+')'+forms.kiss_option_import.importOption);
	//timeIn = new Date().getTime();
	if (importOpt.search('Overwrite') != -1) {
		importRecords_overwrite();
	} else if (importOpt.search('Append') != -1){
		importRecords_append();
	} else if (importOpt.search('Match') != -1){
		importRecords_sheet();
	} else {
		if (databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.commitTransaction();}
		return;
	}
	if (databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.commitTransaction();}

	//win.hide();
	//win.destroy();
	///win.controller.enabled = true;
	warningsMessage('Records imported',true);
	//forms.kiss_option_import.controller.enabled = true;
	saveBarCodeSerial();
	warningsMessage('Save remaining records.',true);
	//databaseManager.setAutoSave(true);//
	var duration = new Date().getTime()-beginTime;
	application.output('Total import time minutes '+duration/1000/60+ 'saving at record count: '+commitRecAt);
	warningsMessage('Total import time minutes '+duration/1000/60+ 'saving at record count: '+commitRecAt,true);
	//application.output('total import time ms '+timeOut);
	//win.hide();
	//win.destroy();
	warningsX();
	//scopes.jobs.importRecordsCheck();
	forms.kiss_option_import.onHide(null);
	if (databaseManager.hasTransaction()){
		databaseManager.saveData();
		databaseManager.commitTransaction();
	} else {
		databaseManager.saveData();
	}
	//databaseManager.setAutoSave(true);
}
/**
 * @param {String} message
 * @param {Boolean} showAnyway
 *
 * 
 *
 * @properties={typeid:24,uuid:"A8C71DB4-BBC2-46F4-B1D6-85B8F785EF35"}
 */
function warningsMessage(message,showAnyway){
	timeOut = new Date().getTime();
	//var newTime = timeOut-timeUpdate;
	/** if (false && (newTime > 3000) || false && (createdRecords > recordSaveLimit)){
		timeUpdate = timeOut;
		if (databaseManager.hasTransaction()){
			var saveBegin = timeOut;
			if (application.isInDeveloper()){application.output('committing '+createdRecords);}
			databaseManager.commitTransaction();
			databaseManager.startTransaction();
			createdRecords = 0;
			var saveEnd = new Date().getTime();
			var dur = saveEnd - saveBegin;
			recordSaveLimit = (dur < recordSaveDur) ? recordSaveLimit-2 : recordSaveLimit+2;
			recordSaveLimit = (recordSaveLimit < 1) ? 2 : recordSaveLimit; 
			recordSaveDur = dur;
		} 
		else {
			databaseManager.saveData();
			if (application.isInDeveloper()){application.output('saving warning message saveDATA .............');}
		}

	} */
	if (timeOut - timeIn < 1000){
		return;
		if (showAnyway != true){return}
	}
	if (message == scopes.globals.stsMessages){message = message + " x"}
	scopes.globals.stsMessages = message;
	if (application.isInDeveloper()){
		var timeOutMessage = timeOut - timeIn;
		application.output(message+' '+timeOutMessage+' ms');
	}
	application.updateUI();
	timeIn = timeOut;

}
/**
 * 
 *
 * @properties={typeid:24,uuid:"075798F3-232C-448B-A235-5CAD85E80E33"}
 */
function warningsYes(){
	if (!scopes.jobs.warnWindow){scopes.jobs.warnWindow = null}
	if (!scopes.jobs.timeIn){scopes.jobs.timeIn = new Date().getTime()}
	var win = application.createWindow("STS Message", JSWindow.DIALOG);
	scopes.jobs.warnWindow = win;
	win.setInitialBounds(10, 10, 460, 110);
	win.title = "STS Message";
	win.show('messagesWarnings');
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"9400EBBB-48DA-4302-AABD-0C74A8CCF05D"}
 */
function warningsX(){
	application.output('close warning window');
	application.updateUI();
	/** @type {JSWindow} */
	var win = scopes.jobs.warnWindow;
	win.hide();
	win.destroy();
	var skip = true;
	if (skip) {return}
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
 * 
 *
 * @properties={typeid:24,uuid:"CA08785A-0EBA-4A8E-9379-15AE3A1FA50C"}
 */
function onDataChangeInteger(oldValue, newValue, event) {
	return globals.maxIntExceeded(newValue);
}
/**
 * @AllowToRunInFind
 * 
 * @param {JSRenderEvent} event
 *
 * 
 *
 * @properties={typeid:24,uuid:"02160804-11D6-42D9-AA8B-6CAB3583358B"}
 */
function onRender2(event) {
	var stat=forms.kiss_option_import.jobImportExc+forms.kiss_option_import.jobImportSum;
	/** @type {JSRecord<{material:String,barcode_qty:Number,select_hidebool:Number,last_bc_qty:Number,sequence_quantity:Number,item_quantity:Number}>} */
	var rec=event.getRecord();
	var rend=event.getRenderable();
	var hidebool=rec&&rec.select_hidebool==1;
	var discard=rec && rec.material && (stat.search(" "+rec.material.split(" ")[0]+" ") != -1);
	///var wght=rec && (scopes.prefs.wtPrompt*1 > 0)&&(rec.item_weight*1 > 0)&&(rec.item_weight*1 < scopes.prefs.wtPrompt*1)&&(rec.item_quantity*1 > 1*1);
	if (rec){
		if (rec.sequence_quantity != "") {var quant = rec.sequence_quantity} else {quant = rec.item_quantity}
	}
	if (!discard && (rend.bgcolor=="#ff0000")){rend.bgcolor="#f3f5f7"}
	if (quant < 2){rend.enabled=false;}
	if (rend.getName()=="action"){rend.enabled=true}
	if (discard){rend.bgcolor="cyan"}
	if (rec&&rec.last_bc_qty&& (rend.getName()=="last_bc_qty")&&(rec.last_bc_qty<0)){rend.bgcolor="red"}
	if (rec && rend.getName()=="barcode_qty"){
		var itemChng = rec.barcode_qty*1!=1 && quant*1!=1;
		if (!quant){quant = rec.item_quantity}
		if (quant*1!= 1 && quant*1==rec.barcode_qty*1) {rend.bgcolor="#daa520";itemChng=false;}
		if (quant*1>1 && rec.barcode_qty*1==1) {rend.bgcolor="#daa520";itemChng=false}
		if (quant*1 <= scopes.prefs.qtyPrompt*1 && quant*1!=rec.barcode_qty*1){itemChng=true}
		if (itemChng){rend.bgcolor="yellow"}
	}
	if (rec && rec.select_hidebool == 1&&rend.getName()!="action"){rend.enabled=false}
	if (hidebool){rend.bgcolor="yellow"}
}
/**
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7FC6D280-EB09-4E4E-9473-5765B0316AA8"}
 */
function barTenderTest(event){
	sampleBCPrint(event)
}
/**
 * @param {JSEvent} event
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"187228E3-E932-4973-AAC8-3DCA771D4F74"}
 */
function sampleBCPrint(event){
	null;
	var formName = event.getFormName();
	var top = forms[formName].elements.split.getLeftForm().controller.getName();
	if (top){}
	var browseSet = forms[formName].elements.split.getLeftForm().foundset;
	var browseSetSize = browseSet.getMaxRecordIndex();
	var record = null; var line = "";
	var fileName = "c:\\barcodelabel.txt"; var data = "";
	var randFileName = "C:\\" + application.getUUID().toString().split("-")[4] +".txt";
	application.output(randFileName);
	var status = plugins.file.writeTXTFile(fileName,data);
	if (!status){
		//TODO text file write error occurred.
	}
	for (var index = 1;index <= browseSetSize;index++){
		record = browseSet.getRecord(index);
		line = "";
		line += "Record #" + index + "\t";
		line += "*"+ record.id_serial_number + "*\t";
		status = plugins.file.appendToTXTFile(fileName,line + "\n");
		
	}
	//application.output('printers '+application.getPrinters())
	plugins.file.copyFile(fileName,randFileName);
	null;
	//if (1==1){return}
	//application.output('Version '+plugins.servoyguy_servoycom.getVersion());
	
	if (!plugins.servoyguy_servoycom.isJACOBInstalled()) {
		globals.errorDialog('952');
		//plugins.dialogs.showErrorDialog( "Error", "Jacob is not installed.");
		return;
	}
	
	//var com = plugins.servoyguy_servoycom.getNewClientJSCOM("SAPI.SpVoice");
	var com = plugins.servoyguy_servoycom.getNewClientJSCOM("BarTender.Application");
	if (!com || !com.isJACOBLoaded()) {
		globals.errorDialog('953');
		plugins.dialogs.showErrorDialog( "Error", "Error loading COM: \n" + plugins.servoyguy_servoycom.getLastError());
		return;
	}
	com.put("Visible","true");
	var formats = com.getChildJSCOM("Formats");
	var format = formats.getChildJSCOM("Open","",["c://sample.BTW","false",""]);
	var DBs = format.getChildJSCOM("Databases");
	var db = DBs.getChildJSCOM("GetDatabase","",["Text File 1"]);
	//var setDb = db.getChildJSCOM("TextFile");
	// Need db.TextFile.FileName = "c:\\barcodelabel.txt"
	var oleDb = db.getChildJSCOM("TextFile");
	oleDb.put("FileName",randFileName);
	/**
	var db = DBs.getChildJSCOM("GetDatabase","",["PostgreSQL35W"]);
	var ole = db.getChildJSCOM("ODBC");
	var sql = 'SELECT "bc_id", "bc_text1" FROM "public"."barcode_test" WHERE bc_id <> \'*EX0B022680*\'';
	ole.put("SQLStatement",sql);
	ole.put("UserId","DBA");
	application.output("sql "+ole.get("SQLStatement"));*/
	//format.put("Printer","Bullzip PDF Printer");
	format.getChildJSCOM("PrintOut","",["false","true"]);
	//formatsFile.call("ExportToClipboard",0,0);
	//var comItems = formats.get("NamedSubStrings");
	//var comMaterial = comItems.get('Item("Material")');
	//com.getChildJSCOM("Quit","BarTender.Application",[1]);
	//com.getChildJSCOM("Quit","BarTender.Application",[1]);
	//com.getChildJSCOM("Quit","BarTender.Application",[1]);
	com.call("Quit",1); // BarTender.BtSaveOptions.btDoNotSaveChanges = 1
	com.release();
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"048616B1-BDD1-457F-86CB-A0AD0B34CA38"}
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	var formName = event.getFormName();
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.tenant_uuid.eq(scopes.globals.session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.job_number.eq(newValue));
	var J = databaseManager.getFoundSet(j);

	if (J.getSize() > 0){
		forms[formName].jobFound = true;
		application.output('formformform '+formName);
		if (forms[formName].browseInfoEnable){forms[formName].browseInfoEnable(formName)}
		/** @type {JSRecord<db:/stsservoy/jobs>} */
		var rec = J.getRecord(1);
		forms[formName].vJobName = rec.job_title;
		forms[formName].vJobID = rec.job_id;
		forms[formName].vJobMetric = (rec.metric_job == 1);
		forms[formName].vCustId = rec.customer_id;
		forms[formName].vCustNum = rec.sts_job_to_customer2.customer_number;
		forms[formName].vCustomerName = rec.sts_job_to_customer2.name;
		//forms[formName].vFabShop = rec.sts3_job_to_assoc.association_name;
		scopes.jobs.browseJobID = rec.job_id;
		var status = true;
		forms[formName].vLabIDNums = 0;//idfile count
		forms[formName].vLabTotPieces = 0;//totalpieces
		forms[formName].vLabTotalWt = 0;//totalweight
		forms[formName].vLabNumPcmks = 0;//total piecemarks
		var info = getJobIdInfo(newValue);
		forms[info.topForm].jobIdData = info;
		if (formName.search("barcode_idlabel") == -1 || formName.search(/(recall|remove)/) != -1){
			browseInfoEnable(event);
			scopes.jobs.onGetInformation(event,false);
			forms[formName].controller.focusField('frmArea',false);
		} else {
			//forms[formName].onActionClear(event);
			//forms[formName].elements.btn_Print.enabled = true;
			forms[formName].elements.btn_PrintSelected.enabled = true;
			forms[formName].elements.btn_PrintAll.enabled = true;
			for (var element in forms[formName].elements){
				if (element.search(/frm/) != -1){
					forms[formName].elements[element].enabled = true;
				}
			}
			forms[formName].controller.focusField('frmArea',false);
			forms[formName].elements.frmSeqNum.requestFocus();
		}
		status = true;
	} else {
		var dataProvider = forms[formName].elements.frmJobNum.getDataProviderID();
		forms[formName][dataProvider] = null;
		// jobFound = false;
		status = false;
		if (formName.search("barcode_idlabel") == -1) {
			if (forms[formName].elements.btn_Print){
				forms[formName].elements.btn_Print.enabled = true;
			}
		}
	}

	return true;
}
/**
 * @param {JSEvent} event
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3BDCF5D6-F430-46BC-9433-575BFD53589A"}
 */
function browseInfoEnable(event){
	var formName = event.getFormName();
	if (forms[formName].elements.btn_Browse){
		forms[formName].elements.btn_Browse.enabled = true;
	}
	if (forms[formName].elements.btn_Info){
		forms[formName].elements.btn_Info.enabled = true;
	}
	if (forms[formName].elements.btn_PrintSelected){
		forms[formName].elements.btn_PrintSelected.enabled = true;
	}
	if (forms[formName].elements.btn_PrintAll){
		forms[formName].elements.btn_PrintAll.enabled = true;
	}
	for (var element in forms[formName].elements){
		if (element.search('frm') != -1){
			forms[formName].elements[element].enabled = true;
		}
	}
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"FAC86EA6-E600-4C83-A9EA-18B415720704"}
 */
function collectCriteria(){
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
	var loadRel = scopes.globals.convertLoadToId(vLoadRel,true);
	var lotNum = scopes.globals.convertLotToId(vLotNum,true);//ticket#7
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
	var formName = 'loads_pcmk_combo';
	scopes.jobs.viewBTableToForm(criteria,formName);
}
/**
 * @AllowToRunInFind
 * Output: Array[columnName,xPosition,columnLength,visible]
 * @param formx
 *
 * 
 *
 * @properties={typeid:24,uuid:"F6715574-3B30-4D18-A6C2-B68D07CC8BE7"}
 */
function tablePrefsPreLoad(formx){
	if (application.isInDeveloper()){application.output('tablePrefsPreLoad')}
	var thisVersion = scopes.globals.getInstanceForm(null);
	var tableArray = [];
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var pp = databaseManager.createSelect('db:/stsservoy/preferences2');
	pp.result.add(pp.columns.preferences2_id);
	pp.where.add(pp.columns.user_uuid.eq(application.getUUID('FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF')));
	if (formx.search('_table') == -1){
		pp.where.add(pp.columns.form_name.eq(formx.replace(thisVersion,"")+'_table'));
	} else {
		pp.where.add(pp.columns.form_name.eq(formx.replace(thisVersion,"")));
	}
	pp.where.add(pp.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var PP = databaseManager.getFoundSet(pp);

	if (PP.getSize() > 0) {
		var count = PP.getSize();
		if (count > 0) {
			var index = 1;//var maxIndex = 0;
			while (index <= PP.getSize()){
				/** @type {JSRecord<db:/stsservoy/preferences2>} */
				var record = PP.getRecord(index);
				var position = record.field_value.split(",");
				if (position.length != 4){position = new Array(0,0,scopes.prefs.defaultColumnWidth,0)}
				//var sortOrd = "00000"+position[0].substring(position[0].length)+","+record.field_name;
				//application.output(' number '+position[0])
				if (isNaN(position[0])){
					position[0] = 0} //x position
				//if (position[2] !== 'number'){position[2] = scopes.prefs.defaultColumnWidth}
				//if (position[3] !== 'number'){position[3] = 1} // visible setting
				tableArray.push(new Array(record.field_name,position[0],position[2],position[3]));
				index++;maxIndex = index;
			}
		}
	}
	tableArray.sort(function(a,b){return a[1]-b[1]});
	var tableArrayLength = tableArray.length;
	tableOrderingArray = []; var tempLastArray = [];
	var newXPos = 0;
	for (index = 0;index < tableArrayLength;index++){
		if (tableArray[index] != 0){
			tableArray[index][1] = newXPos;
			newXPos += tableArray[index][2]*1;
			tableOrderingArray.push(tableArray[index][0]);
		} else {
			tempLastArray.push(tableArray[index][0]);
		}
	}
	while (tempLastArray.length > 0){
		tableOrderingArray.push(tempLastArray.pop());
	}
	null;
	return tableArray;
}

/**
 * Update job plant name when updating association for job.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * 
 *
 * @properties={typeid:24,uuid:"09C88495-715E-46A3-9619-BBA5D77277D9"}
 */
function onDataChangeJobPlant(oldValue, newValue, event) {
	var fs = st2_tenantid_associations;
	var index = 1;
	while (index <= fs.getSize()){
		var rec = fs.getRecord(index);
		if (rec.association_uuid+"" == newValue+""){forms[event.getFormName()].job_plant = rec.association_name;break;}
		index++;
	}
	return true;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * 
 *
 * @properties={typeid:24,uuid:"694C0047-EBF9-4E7C-AB75-F68D1D7D7C30"}
 */
function onHideMW(event) {
	var formName = event.getFormName();
	var instance = globals.getInstanceForm(event);
	//remove from history
	if (instance != ""){
		globals.formsToRemove.push(formName);
	}
	globals.setWindowClosed(event.getFormName());
	var win = application.getActiveWindow();
	win.destroy();
	return true;
}
/**
 * @AllowToRunInFind
 * 
 * @param {String} formName
 * @param {String} version
 * @param {String} fieldStr
 *
 * 
 *
 * @properties={typeid:24,uuid:"75D8C149-CCC6-4F3D-BB67-B5440EB62D94"}
 */
function tablePrefsPreOrderFields(formName,version,fieldStr){
	function fldOrderSort(r1, r2)
	{
		var o = 0; var frst = r1.field_value.split(',')[0]*1.0;var scnd = r2.field_value.split(',')[0]*1.0;
		if(frst < scnd)
		{
			o = -1;
		}
		else if(frst > scnd)
		{
			o = 1;
		}
		return o;
	}
	
	if (application.isInDeveloper()){application.output('tablePrefsPreOrderFields')}
	var prefsFormName = formName.replace(versionForm,"");
	var fields = fieldStr.split(',');
	if (application.isInDeveloper()){application.output('PREFS: table '+formName+' table prefs '+prefsFormName);}
	//if (1==1){return}
	var FLD2 = "";
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var pp = databaseManager.createSelect('db:/stsservoy/preferences2');
	pp.result.add(pp.columns.preferences2_id);
	pp.where.add(pp.columns.user_uuid.eq(application.getUUID('FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF')));
	pp.where.add(pp.columns.form_name.eq(prefsFormName+"_table"));
	pp.where.add(pp.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var PP = databaseManager.getFoundSet(pp);
	

	var orderedList = [];
	for (var index3 = 1;index3 <= PP.getSize();index3++){
		/** @type {JSRecord<db:/stsservoy/preferences2>} */
		var rec = PP.getRecord(index3);
		//if (application.isInDeveloper()){application.output(rec.field_name+" "+rec.field_value);}
		var name = rec.field_name;
		if (orderedList.indexOf(name) == -1){orderedList.push(name)}
	}
	for (index3 = 0;index3 < fields.length;index3++){
		name = fields[index3].split('.')[1];
		if (orderedList.indexOf(name) == -1){orderedList.push(name)}		
	}
	for (index3 = 0;index3 < orderedList.length;index3++){
		FLD2 += orderedList[index3];
		if (index3 != PP.getSize()){FLD2 += ","}
	}
	if (application.isInDeveloper()){application.output('fld order '+FLD2);}
}
/**
 * @param {String} textString
 *
 * 
 *
 * @properties={typeid:24,uuid:"CD6497B4-AA23-410F-8D4E-0F8E8AC13FB5"}
 */
function parseIntoLines(textString){
	importResults = textString.split("\n");

	var lineCount = importResults.length;
	for (var index = 0;index < lineCount;index++){
		importResults[index] = importResults[index].split(',');
	}
	null;
}
/**
 * @param topForm {String}
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"E253ACA6-C6CE-4069-A657-B505495BD1B0"}
 */
function jobSheetAndDrawingNumbers(topForm){
	var jobData = forms[topForm].jobIdData;
	var jobId = jobData.job_id;
	if (jobData.sheet_nums) {return}
	
	jobData.sheet_nums = [];
	jobData.sheet_ids = [];
	jobData.ref_drawings = [];
	
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var sh = databaseManager.createSelect('db:/stsservoy/sheets');
	sh.result.add(sh.columns.sheet_id);
	sh.result.add(sh.columns.sheet_number);
	sh.result.add(sh.columns.reference_drawing);
	sh.result.distinct = true;
	sh.sort.add(sh.columns.sheet_number);
	sh.where.add(
	sh.and
		.add(sh.columns.delete_flag.isNull)
		.add(sh.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(sh.columns.job_id.eq(jobId))
	);
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fsSh = databaseManager.getFoundSet(sh);
	var index = 1;
	while (index <= fsSh.getSize()){
		var rec = fsSh.getRecord(index);
		jobData.sheet_ids.push(rec.sheet_id);
		jobData.sheet_nums.push(rec.sheet_number);
		if (rec.reference_drawing){
			if (jobData.ref_drawings.indexOf(rec.reference_drawing) == -1){
				jobData.ref_drawings.push(rec.reference_drawing);
			}
		}
		index++;
	}	
}
/**
 * @param topForm {String}
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"1861AE3B-D5AE-40FF-B226-F1E277DC3325"}
 */
function jobSequenceNumbers(topForm){
	var jobData = forms[topForm].jobIdData;
	var jobId = jobData.job_id;
	jobData.sequence_nums = [];
	jobData.sequence_ids = [];
	/** @type {QBSelect<db:/stsservoy/sequences>} */
	var sq = databaseManager.createSelect('db:/stsservoy/sequences');
	sq.result.add(sq.columns.sequence_id);
	sq.result.add(sq.columns.sequence_number);
	sq.result.distinct = true;
	sq.sort.add(sq.columns.sequence_number);
	sq.where.add(
	sq.and
		.add(sq.columns.delete_flag.isNull)
		.add(sq.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(sq.columns.job_id.eq(jobId))
	);
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
	var fsS = databaseManager.getFoundSet(sq);
	var index = 1;
	while (index <= fsS.getSize()){
		var rec = fsS.getRecord(index);
		jobData.sequence_ids.push(rec.sequence_id);
		jobData.sequence_nums.push(rec.sequence_number);
		index++;
	}
}
/**
 * @param topForm {String}
 * @param sequenceIds
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"10AAECF3-0341-4C60-9D40-E6AD996814BA"}
 */
function jobLotNumbers(topForm){
	var jobData = forms[topForm].jobIdData;
	var jobId = jobData.job_id;
	if (jobData.lot_nums) {return}
	
	// Dependencies
	jobSequenceNumbers(topForm);
	
	jobData.lot_nums = [];
	jobData.lot_ids = [];
	/** @type {QBSelect<db:/stsservoy/lots>} */
	var lt = databaseManager.createSelect('db:/stsservoy/lots');
	lt.result.add(lt.columns.lot_id);
	lt.result.add(lt.columns.lot);
	lt.result.distinct = true;
	lt.sort.add(lt.columns.lot);
	lt.where.add(
	lt.and
		.add(lt.columns.delete_flag.isNull)
		.add(lt.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(lt.columns.sequence_id.isin(jobData.sequence_ids))
	);
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fsLot = databaseManager.getFoundSet(lt);
	var index = 1;
	while (index <= fsLot.getSize()){
		var rec = fsLot.getRecord(index);
		jobData.lot_ids.push(rec.lot_id);
		jobData.lot_nums.push(rec.lot);
		index++;
	}
	// JOE check lot number creation 
	for (index = jobData.lot_nums.length-1;index != -1;index--){
		if (jobData.lot_nums[index] == ""){
			jobData.lot_nums.pop();
			jobData.lot_ids.pop();
		}
	}
}
/**
 * @SuppressWarnings(wrongparameters)
* 
 * @param topForm
 *
 * 
 *
 * @properties={typeid:24,uuid:"3396BF92-0FBD-4B57-BFF8-541FE0B3D6CF"}
 */
function jobLoadsAndReleases(topForm){
	var jobData = forms[topForm].jobIdData;
	var jobId = jobData.job_id;
	if (jobData.load_nums) {return}
	
	jobData.load_nums = [];
	jobData.load_ids = [];
	jobData.load_rels = [];
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var ld = databaseManager.createSelect('db:/stsservoy/loads');
	ld.result.add(ld.columns.load_id);
	ld.result.add(ld.columns.load_number);
	ld.result.add(ld.columns.load_release);
	ld.result.distinct = true;
	ld.where.add(
	ld.and
		.add(ld.columns.delete_flag.isNull)
		.add(ld.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(ld.columns.job_id.eq(jobId))
	);
	/** @type {JSFoundSet<db:/stsservoy/loads>} */
	var fsL = databaseManager.getFoundSet(ld);
	var index = 1;
	while (index <= fsL.getSize()){
		var rec = fsL.getRecord(index);
		jobData.load_ids.push(rec.load_id);
		jobData.load_nums.push(Math.floor(rec.load_number)+"");
		if (rec.load_release && jobData.load_rels.indexOf(rec.load_release) != -1){jobData.load_rels.push(rec.load_release);}
		index++;
	}
}
/**
 * @param topForm
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"3F7B959A-C230-4F07-97B6-F0AF98C3A368"}
 */
function jobPcmks(topForm){
	var jobData = forms[topForm].jobIdData;
	//var jobId = jobData.job_id;
	if (jobData.load_nums) {return}
	
	//Dependecies
	scopes.jobs.jobSheetAndDrawingNumbers(topForm);
	
	jobData.piecemark_ids = [];
	jobData.piecemarks = [];
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var pm = databaseManager.createSelect('db:/stsservoy/piecemarks');
	pm.result.add(pm.columns.piecemark_id);
	pm.result.add(pm.columns.piecemark);
	pm.where.add(
	pm.and
		.add(pm.columns.delete_flag.isNull)
		.add(pm.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(pm.columns.sheet_id.isin(jobData.sheet_ids))
	);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fsPm = databaseManager.getFoundSet(pm);
	var index = 1;
	while (index <= fsPm.getSize()){
		var rec = fsPm.getRecord(index);
		jobData.piecemark_ids.push(rec.piecemark_id);
		jobData.piecemarks.push(rec.piecemark);
		index++;
	}

}
/**
 * @param topForm {String}
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"4DBDD7CE-CA91-455C-9A90-E7754031FDDE"}
 */
function jobIdfileMiscInfo(topForm){
	var jobData = forms[topForm].jobIdData;
	//var jobId = jobData.job_id;
	if (jobData.load_nums) {return}
	warningsYes();
	
	// Dependencies
	jobStatii(topForm);
	jobPcmks(topForm);

	jobData.batch_names = [];
	jobData.area_names = [];
	jobData.shoporder_nums = [];
	jobData.pcmk_rels = [];
	jobData.active_stations = [];
	jobData.package_nums = [];
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var id = databaseManager.createSelect('db:/stsservoy/idfiles');
	id.result.add(id.columns.idfile_id);
	id.result.add(id.columns.id_location);
	id.result.add(id.columns.id_batch);
	id.result.add(id.columns.shop_order);
	id.result.add(id.columns.piece_release);
	id.result.add(id.columns.status_description_id);
	id.result.add(id.columns.ft_pkgno);
	id.where.add(
	id.and
		.add(id.columns.delete_flag.isNull)
		.add(id.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(id.columns.piecemark_id.isin(jobData.piecemark_ids))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var fsId = databaseManager.getFoundSet(id);
	var index = 1;
	while (index <= fsId.getSize()){
		warningsMessage('Collecting data',false);
		var rec = fsId.getRecord(index);
		if (rec.id_batch && jobData.batch_names.indexOf(rec.id_batch) == -1){jobData.batch_names.push(rec.id_batch);}
		if (rec.id_location && jobData.area_names.indexOf(rec.id_location) == -1){jobData.area_names.push(rec.id_location);}
		if (rec.shop_order && jobData.shoporder_nums.indexOf(rec.shop_order)== -1){jobData.shoporder_nums.push(rec.shop_order);}
		if (rec.piece_release && jobData.pcmk_rels.indexOf(rec.piece_release)== -1){jobData.pcmk_rels.push(rec.piece_release);}
		if (rec.ft_pkgno && jobData.package_nums.indexOf(rec.ft_pkgno)== -1){jobData.package_nums.push(rec.ft_pkgno);}
		if (rec.status_description_id){
			var station = globals.m.stations[rec.status_description_id];
			///if (jobData.status_codes[rec.status_description_id]){
			///	var station = jobData.status_codes[rec.status_description_id];
			station = station.split(", ")[1];
			if (jobData.active_stations.indexOf(station) == -1) {jobData.active_stations.push(station);}
			///}
		}
		index++;
	}
	
	if (jobData.batch_names.length > 1){jobData.batch_names = jobData.batch_names.sort();}
	if (jobData.area_names.length > 1){jobData.area_names = jobData.area_names.sort();}
	if (jobData.active_stations.length > 1){jobData.active_stations = jobData.active_stations.sort();}
	if (jobData.package_nums.length > 1){jobData.package_nums = jobData.package_nums.sort();}
	if (jobData.shoporder_nums.length > 1){jobData.shoporder_nums = jobData.shoporder_nums.sort();}
	warningsX();
}
/**
 * @SuppressWarnings(wrongparameters)
* 
 * @param topForm
 *
 * 
 *
 * @properties={typeid:24,uuid:"75492E77-BD6B-4B22-A01A-BFF4213AC70A"}
 */
function jobStatii(topForm){
	var jobData = forms[topForm].jobIdData;
	if (jobData.load_nums) {return}

	jobData.status_codes = [];
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var sd = databaseManager.createSelect('db:/stsservoy/status_description');
	sd.result.add(sd.columns.status_description_id);
	sd.result.add(sd.columns.status_code);
	sd.sort.add(sd.columns.status_sequence);
	sd.sort.add(sd.columns.status_code);
	sd.where.add(
	sd.and
		.add(sd.columns.delete_flag.isNull)
		.add(sd.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(sd.columns.association_id.eq(globals.secCurrentAssociationID))
	);
	/** @type {JSFoundSet<db:/stsservoy/status_description>} */
	var fsSd = databaseManager.getFoundSet(sd);
	var index = 1;
	while (index <= fsSd.getSize()){	
		var rec = fsSd.getRecord(index);
		jobData.status_codes[rec.status_description_id] = rec.status_code;
		index++;
	}
}
/**
 * @AllowToRunInFind
 * 
 * @param criteria
 * @param formName
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"0C484931-D07F-4310-A73B-259661661ED2"}
 */
function viewBTableSQLSummary(criteria,formName){
	var dsName = "dsSQL";
	var count = 1;
	var newDsName = dsName;
	while (databaseManager.dataSourceExists("mem:PM"+newDsName)){
		this[newDsName] = -1;
		newDsName = dsName+count;
		count++;
	}

	var queryPM = queryAssembly(criteria,formName,"piecemark");
	var pmDS = databaseManager.createDataSourceByQuery('PM'+newDsName,queryPM,-1);
	var pmFS = databaseManager.getFoundSet(pmDS);
	pmFS.loadAllRecords();
	//var tableFilters = databaseManager.getTableFilterParams('stsservoy');//#task07
	var index = 1;
	while (index < pmFS.getSize()){
		index = pmFS.getSize();
		pmFS.getRecord(index);
		index++;
	}
	var pmSize = pmFS.getSize();
	var querySM = queryAssembly(criteria,formName,"summarized");
	var smDS = databaseManager.createDataSourceByQuery('SM'+newDsName,querySM,-1);
	var smFS = databaseManager.getFoundSet(smDS);
	smFS.loadAllRecords();
	//var summarizedCount = 0;
	/**var summVisited = [];
	index = 1;
	while (index <= smFS.getSize()){
		var rec = smFS.getRecord(index);
		var recId = rec.piecemark_id;
		//if (application.isInDeveloper()){application.output('piecemark id '+recId)}
		if (summVisited.indexOf(recId) == -1){
			summVisited.push(recId);
		}
		//index = smFS.getSize();
		index++;
	}*/
	//if (application.isInDeveloper()){
	//	for (index = 1;index <= smFS.getSize();index++){
	//		rec = smFS.getRecord(index);
	//		//application.output('summary rec '+rec);
	//	}
	//}
	
	//if (application.isInDeveloper()){
	//	//application.output('pcmks '+pmFS.getSize()+' summarized '+smFS.getSize()+' '+summVisited.length);
	//}
	var jobDATA = {
		weight : 0,
		weight_lbs : 0,
		//pcmks : pmFS.getSize()*1+smFS.getSize()*1,
		pcmks : pmSize,
		idfiles : 0,
		idnumbers : 0
	}

	var query = queryAssembly(criteria,formName,'piecemark');
	var stDS = databaseManager.createDataSourceByQuery('ST'+newDsName,query,-1);
	var stFS = databaseManager.getFoundSet(stDS);
	stFS.loadAllRecords();
	//if (application.isInDeveloper()){application.output('matching records count '+fsST.getSize())}
	//if (application.isInDeveloper()){
	//	for (index = 1;index <= stFS.getSize();index++){application.output(stFS.getRecord(index))}
	//}

	index = 1;
	while (index <= stFS.getSize()){
		/** @type {JSRecord} */
		rec = stFS.getRecord(index);
		jobDATA.idfiles = jobDATA.idfiles*1 + rec.total_marks;
		jobDATA.weight = jobDATA.weight*1 + rec.item_weight*rec.total_marks;
		jobDATA.weight_lbs = jobDATA.weight_lbs*1 + rec.item_weight_lbs * rec.total_marks;
		
		index++;
	}
	
	
	var snQuery = queryAssembly(criteria,formName,'idnumbers');
	var snDS = databaseManager.createDataSourceByQuery('SN'+newDsName,snQuery,-1);
	var snFS = databaseManager.getFoundSet(snDS);
	snFS.loadAllRecords();
	index = 1;
	while (index < snFS.getSize()){
		index = snFS.getSize();
		snFS.getRecord(index);
		index++;
	}
	jobDATA.idnumbers = snFS.getSize();

	if (application.isInDeveloper()){
		for (var item in jobDATA){
			application.output('item '+item+': '+jobDATA[item]);
		}
	}

	var instance = globals.getInstanceForm(null);
	var currForm = formName.split("_")[0]+"_criteria"+instance;
	if (typeof forms[currForm].vLabTotalWt != 'undefined'){
		if (forms[currForm].vJobMetric){
			forms[currForm].vLabTotalWt = jobDATA.weight;			
		} else {
			forms[currForm].vLabTotalWt = jobDATA.weight_lbs;
		}
		forms[currForm].vLabTotPieces = jobDATA.idfiles;
		forms[currForm].vLabIDNums = jobDATA.idnumbers;
		forms[currForm].vLabNumPcmks = jobDATA.pcmks;
	}
}
/**
 * @AllowToRunInFind
 * 
 * @param criteria
 * @param formName
 *
 * 
 *
 * @properties={typeid:24,uuid:"0F7A69CD-60C4-4327-905C-F4F29163BA39"}
 */
function viewBTableSQL2(criteria,formName){
	/**
	 * Left join for records  which may not exist.  inner join for necessary records.
	 */
	null; //stop here 20160219
	var query = "select random()*1000000 AS browsing_id,0 AS \"selection\",FLD from piecemarks "+
		' right join routings on routings.routing_id = piecemarks.e_route_code_id '+
		' inner join sheets on piecemarks.sheet_id = sheets.sheet_id SHT '+
		' and sheets.job_id = JOBID AND sheets.delete_flag IS null '+
		' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id AND idfiles.delete_flag FLAG SONUM FABS AREA PCRL LDN COW LOT PKG'+
		' inner join sequences on sequences.sequence_id = idfiles.sequence_id SEQN ' +
		' inner join id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id IDNM ' +
		' left join status_description on idfiles.status_description_id = status_description.status_description_id ' +
		' left join associations on status_description.association_id = associations.association_uuid ' +
		' left join jobs on sheets.job_id = jobs.job_id ' +
		' left join customers on  jobs.customer_id = customers.customer_id ' +
//		' left join heats on '
//		' left join addresses on customers.customer_id = addresses.customer_id'
		' left join lots on idfiles.lot_id = lots.lot_id ' +
		' left join loads on loads.load_id = idfiles.current_load_id LDRR ';
	var addOrderQuery = ' order by piecemarks.parent_piecemark, piecemarks.piecemark';
	if (formName.search("barcode_") != -1) {
		var ordered = scopes.jobs.tmp_LabelSort;
		switch (ordered){
			case 'Piece Mark':
				addOrderQuery = ' order by piecemarks.parent_piecemark, piecemarks.piecemark';
				break;
			case 'ID Number':
				addOrderQuery = ' order by id_serial_numbers.id_serial_number, piecemarks.piecemark';
				break;
			case 'Drawing Number':
				addOrderQuery = ' order by sheets.reference_drawing, piecemarks.piecemark';
				break;
			case 'Material':
				addOrderQuery = ' order by piecemarks.material, piecemarks.piecemark';
				break;
			default:
				addOrderQuery = ' order by piecemarks.parent_piecemark, piecemarks.piecemark';
		}
	}
	var FLD = "";
	var DBs = ["id_serial_numbers","piecemarks","routings","sheets","idfiles","status_description","loads","associations","sequences","jobs","customers","lots"];
	var skipFields = ['logic_flag','edit_date'];//'delete_flag',
	//var skipFields = [];
	for (var index1 = 0;index1 < DBs.length;index1++){
		//application.output('table '+DBs[index1])
		var table = databaseManager.getTable("stsservoy",DBs[index1]);
		var tableColumns = table.getColumnNames();
		for (var index2 = 0;index2 < tableColumns.length;index2++){
			var fieldName = tableColumns[index2];
			if (skipFields.indexOf(fieldName) != -1){continue}
			//application.output(DBs[index1]+"."+tableColumns[index2])
			FLD += DBs[index1]+"."+tableColumns[index2];
			if ((index1 != DBs.length-1)|| (index2 != tableColumns.length-1)){FLD += ","}
		}
	}
	//var fieldNames = FLD.split(',');
	if (typeof versionForm === 'undefined'){ var versionForm = ""};
	var prefsFormName = formName.replace(versionForm,"");
	tablePrefsPreOrderFields(prefsFormName,versionForm,FLD);
	if (formName.search(/(recall|remove)/) == -1){
		query = query.replace('FLAG',"IS null");
	} else {
		query = query.replace('FLAG','= 99');
	}
	//  FLAG PCMK SHT SEQN SONUM LDN LDR PCRL FABS JOBR AREA BTCH COW (LOT) (PKG)
	query = query.replace('FLD',FLD);
	query = query.replace('JOBID',"\'"+scopes.jobs.browseJobID+"\'");
	if (criteria.idnum){
		query = query.replace('IDNM'," AND id_serial_numbers.id_serial_number IN "+criteria.idnum);
	} else {
		query = query.replace('IDNM','');
	}
	var PCMK = " WHERE ";
	if (criteria.piecemarka.length > 0){
		for (var index3 = 0;index3 < criteria.piecemarka.length;index3++){
			if (index2 == 0) {
				PCMK += " piecemarks.piecemark LIKE '%"+criteria.piecemarka[index3]+"%'";
			} else {
				PCMK += " OR piecemarks.piecemark LIKE '%"+criteria.piecemarka[index3]+"%'";
			}
		}
		//query = query.replace('PCMK'," WHERE piecemarks.piecemark LIKE %"+criteria.piecemark+"%");
	} else {
		//query = query.replace('PCMK','');
		PCMK = "";
	}
	if (criteria.sheetnum){
		query = query.replace('SHT'," AND sheets.sheet_number IN "+criteria.sheetnum);
	} else {
		query = query.replace('SHT','');
	}
	if (criteria.seqnum){
		query = query.replace('SEQN'," AND sequences.sequence_number IN "+criteria.seqnum);
	} else {
		query = query.replace('SEQN','');
	}
	if (criteria.sonum){
		query = query.replace('SONUM'," AND idfiles.shop_order IN "+criteria.sonum);
	} else {
		query = query.replace('SONUM','');
	}
	if (criteria.batch){
		query = query.replace('BTCH'," AND idfiles.id_batch IN "+criteria.batch);
	} else {
		query = query.replace('BTCH','');
	}
	if (criteria.area){
		query = query.replace('AREA'," AND idfiles.id_location IN "+criteria.area);
	} else {
		query = query.replace('AREA','');
	}
	if (criteria.cow){
		query = query.replace('COW'," AND piecemarks.piecemark_cow_code IN "+criteria.cow);// cost_of_work_code (10) ticket#6
	} else {
		query = query.replace('COW','');
	}
	if (criteria.lotnum){
		query = query.replace('LOT'," AND idfiles.lot_id IN "+criteria.lotnum);//ticket#7
	} else {
		query = query.replace('LOT','');
	}
	if (criteria.pkgnum){
		query = query.replace('PKG'," AND idfiles.ft_pkgid IN "+criteria.pkgnum);//ticket#7
	} else {
		query = query.replace('PKG','');
	}
	if (criteria.fabshop){
		query = query.replace('FABS'," AND idfiles.status_description_id IN "+criteria.fabshop);
	} else {
		query = query.replace('FABS','');
	}
	if (criteria.pcmkrel){
		query = query.replace('PCRL'," AND idfiles.piece_release IN "+criteria.pcmkrel);
	} else {
		query = query.replace('PCRL','');
	}
	if (criteria.loadrel){
		query = query.replace('LDRR'," AND loads.load_release IN "+criteria.loadrel);
	} else {
		query = query.replace('LDRR','');
	}
	if (criteria.loadall){//need number to id current_load_id
		query = query.replace('LDN'," AND idfiles.current_load_id IN "+criteria.loadall);
	} else {
		query = query.replace('LDN','');
	}
	query += PCMK + addOrderQuery;
	if (application.isInDeveloper()){application.output('sql2-- '+query)}
	return query;
}
/**
 * @param criteria
 * @param formName
 * @param subquery
 *
 * 
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DBCF8018-E20E-4225-B1DF-3E34D466D78D"}
 */
function queryAssembly(criteria,formName,subquery){
	/**
	 * Sequences, Sheets, ShopOrder Numbers, Load Numbers/ALL, Load Releases
	 * Piecemark, Pcmk Releases, FaB Shop Stations, Lot Numbers, Package Numbers, 
	 * Areas, Batches, COW Codes 
	 */

	null;//idserials
	var jobId = criteria.jobid; //forms.loads_criteria.vJobID
	//var shownCols = [];
	var getDeleted = false;
	if (formName.search(/(recall)|(remove)/) != -1){
		getDeleted = true;
	}

	if (application.isInDeveloper()){application.output('QAssemb '+formName+' get deleted '+getDeleted)}
	// Get transactions subquery
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var trans = databaseManager.createSelect('db:/stsservoy/sheets');
	trans.where.add(trans.columns.delete_flag.isNull);
	trans.where.add(trans.columns.job_id.eq(jobId));
	trans.where.add(trans.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var trpm = trans.joins.add('db:/stsservoy/piecemarks');
	trpm.on.add(trans.columns.sheet_id.eq(trpm.columns.sheet_id));
	trans.result.add(trpm.columns.piecemark_id);
	if (getDeleted){
		trpm.root.where.add(trpm.columns.delete_flag.eq(99));		
	} else {
		trpm.root.where.add(trpm.columns.delete_flag.isNull);
	}
	trpm.root.where.add(trpm.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	//trpm.root.where.add(trans.columns.sheet_id.eq(trpm.columns.sheet_id));
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var trIdf = trans.joins.add('db:/stsservoy/idfiles');
	trIdf.on.add(trIdf.columns.piecemark_id.eq(trpm.columns.piecemark_id));
	if (getDeleted){
		trIdf.root.where.add(trIdf.columns.delete_flag.eq(99));
	} else {
		trIdf.root.where.add(trIdf.columns.delete_flag.isNull);
	}
	trIdf.root.where.add(trIdf.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var trSd = trans.joins.add('db:/stsservoy/transactions');
	trSd.on.add(trSd.columns.idfile_id.eq(trIdf.columns.idfile_id));
	//if (getDeleted){
	//	trSd.root.where.add(trSd.columns.delete_flag.eq(99));
	//} else {
	trSd.root.where.add(trSd.columns.delete_flag.isNull);
	//}
	trSd.root.where.add(trSd.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	trans.result.distinct = true;
	trans.result.add(trSd.columns.status_description_id);
	
	// Get unique idfile subquery -------------------------------------------------------------------
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var uIdfile = databaseManager.createSelect('db:/stsservoy/sheets');
	//if (getDeleted){
	//	uIdfile.where.add(uIdfile.columns.delete_flag.eq(99));	
	//} else {
	uIdfile.where.add(uIdfile.columns.delete_flag.isNull);
	//}
	uIdfile.where.add(uIdfile.columns.job_id.eq(jobId));
	uIdfile.where.add(uIdfile.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var uIdpm = uIdfile.joins.add('db:/stsservoy/piecemarks');
	uIdpm.on.add(uIdfile.columns.sheet_id.eq(uIdpm.columns.sheet_id));
	if (getDeleted){
		uIdpm.root.where.add(uIdpm.columns.delete_flag.eq(99));
	} else {
		uIdpm.root.where.add(uIdpm.columns.delete_flag.isNull);
	}
	uIdpm.root.where.add(uIdpm.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var uIdIdfile = uIdfile.joins.add('db:/stsservoy/idfiles');
	uIdIdfile.on.add(uIdIdfile.columns.piecemark_id.eq(uIdpm.columns.piecemark_id));
	//if (getDeleted){
	//	uIdIdfile.root.where.add(uIdIdfile.columns.delete_flag.eq(99));		
	//} else {
	uIdIdfile.root.where.add(uIdIdfile.columns.delete_flag.isNull);		
	//}
	uIdIdfile.root.where.add(uIdIdfile.columns.tenant_uuid.eq(globals.session.tenant_uuid))
	/** @type {QBJoin<db:/stsservoy/transactions>} */
	var uIdTrans = uIdfile.joins.add('db:/stsservoy/transactions');
	uIdTrans.on.add(uIdTrans.columns.idfile_id.eq(uIdIdfile.columns.idfile_id));
	//if (getDeleted){
	//	uIdTrans.root.where.add(uIdTrans.columns.delete_flag.eq(99));
	//} else {
	uIdTrans.root.where.add(uIdTrans.columns.delete_flag.isNull);
	//}
	uIdTrans.root.where.add(uIdTrans.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	if (criteria.fabshopa && criteria.fabshopa.length > 0){
		uIdTrans.root.where.add(uIdTrans.columns.status_description_id.isin(criteria.fabshopa));
	}
	uIdfile.result.distinct = true;
	uIdfile.groupBy.add(uIdIdfile.columns.idfile_id);
	uIdfile.result.add(uIdIdfile.columns.idfile_id);
	
	/**	var uniqBarcodes = [];  var uniqIdfiles = [];
	var FS = databaseManager.getFoundSet(uIdfile);
	var idx = 1;
	var rec = null;
	while (rec = FS.getRecord(idx++)){
		if (uniqBarcodes.indexOf(rec.id_serial_number_id) == -1){
			uniqBarcodes.push(rec.id_serial_number_id);
			uniqIdfiles.push(rec.idfile_id);
		}
	}
	*/
	// Get unique idfile subquery +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
	
	// Get unique piecemarks subquery
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var upcmk = databaseManager.createSelect('db:/stsservoy/sheets');
	upcmk.result.add(upcmk.columns.sheet_id);
	//if (getDeleted){
	//	upcmk.where.add(upcmk.columns.delete_flag.eq(99));
	//} else {
	upcmk.where.add(upcmk.columns.delete_flag.isNull);		
	//}
	upcmk.where.add(upcmk.columns.job_id.eq(jobId));
	upcmk.where.add(upcmk.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var upmm = upcmk.joins.add('db:/stsservoy/piecemarks');
	upmm.on.add(upcmk.columns.sheet_id.eq(upmm.columns.sheet_id));
	if (getDeleted){
		upcmk.where.add(upmm.columns.delete_flag.eq(99));
	} else {
		upcmk.where.add(upmm.columns.delete_flag.isNull);
	}
	upcmk.where.add(upmm.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	upcmk.result.distinct = true;
	upcmk.result.add(upmm.columns.piecemark_id);
	
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var st = databaseManager.createSelect('db:/stsservoy/sheets');
	st.sort.add(st.columns.sheet_number);
	st.where.add(st.columns.delete_flag.isNull);
	st.where.add(st.columns.job_id.eq(jobId));
	st.where.add(st.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	if (criteria.sheetnuma && criteria.sheetnuma.length > 0){
		st.where.add(st.columns.sheet_number.isin(criteria.sheetnuma));
	}
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var pmm = st.joins.add('db:/stsservoy/piecemarks');
	pmm.on.add(st.columns.sheet_id.eq(pmm.columns.sheet_id));
	if (criteria.piecemarka && criteria.piecemarka.length == 1){
		st.where.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"));
	} else if (criteria.piecemarka && criteria.piecemarka.length > 1){
		st.where.add(st.or
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.piecemark.like("%"+criteria.piecemarka.pop()+"%"))
		)
	} // overkill, but satisfies n-1 approach for search criteria

	st.result.distinct;
	st.sort.add(pmm.columns.piecemark);
	st.sort.add(pmm.columns.parent_piecemark);
	//if (subquery == 'summarized'){
	//	st.sort.add(pmm.columns.material);
	//	st.where.add(pmm.columns.piecemark.eq(""));
	//}
	st.groupBy.add(pmm.columns.piecemark_id);
	st.groupBy.add(st.columns.sheet_number);
	st.groupBy.add(st.columns.sheet_id);
	st.where.add(pmm.columns.delete_flag.isNull);
	
	var pmTable = databaseManager.getTable('stsservoy','piecemarks');
	var pmCols = pmTable.getColumnNames();
	for (var index = 0;index < pmCols.length;index++){
		st.result.add(pmm.columns[pmCols[index]]);
	}


	/** @type {QBJoin<db:/stsservoy/routings>} */
	var rt1 = pmm.joins.add('db:/stsservoy/routings');
	rt1.on.add(pmm.columns.e_route_code_id.eq(rt1.columns.routing_id));
	st.groupBy.add(rt1.columns.route_code);
	st.result.add(rt1.columns.route_code);

	if (subquery == 'browse'){

	}
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var id1 = st.joins.add('db:/stsservoy/idfiles');
	id1.on.add(pmm.columns.piecemark_id.eq(id1.columns.piecemark_id));
	if (getDeleted){
		id1.root.where.add(id1.columns.delete_flag.not.isNull);// deleted idfiles still show, fix
	} else {
		id1.root.where.add(id1.columns.delete_flag.isNull);// deleted idfiles still show, fix
	}
	if (subquery == "summarized"){
		id1.root.result.distinct;
		id1.root.groupBy.add(id1.columns.piecemark_id);
		st.result.add(id1.columns.summed_quantity.sum,'piece_count');
	}
	if (criteria.areaa && criteria.areaa.length > 0){
		st.where.add(id1.columns.id_location.isin(criteria.areaa));
		st.groupBy.add(id1.columns.id_location);
		st.result.add(id1.columns.id_location);
	}
	if (criteria.batcha && criteria.batcha.length > 0){
		st.where.add(id1.columns.id_batch.isin(criteria.batcha));
	}
	if (criteria.loadalla && criteria.loadalla.length > 0){
		st.where.add(id1.columns.current_load_id.isin(criteria.loadalla));
	}
	/**if (criteria.loadrela && criteria.loadrela.length > 0){
		st.where.add(id1.columns..isin(criteria.loadrela));
	}*/
	if (criteria.pcmkrela && criteria.pcmkrela.length > 0){
		st.where.add(id1.columns.piece_release.isin(criteria.pcmkrela));
	}
	if (criteria.pkgnuma && criteria.pkgnuma.length > 0){
		st.where.add(id1.columns.ft_pkgno.isin(criteria.pkgnuma));//fabtrol specific
	}
	if (criteria.seqida && criteria.seqida.length > 0){
		st.where.add(id1.columns.sequence_id.isin(criteria.seqida));//fabtrol specific
	}
	
	if (criteria.fabshopa && criteria.fabshopa.length > 0){
		if (subquery != 'summary'){
			st.where.add((st.exists(uIdIdfile.root.where.add(id1.columns.idfile_id.eq(uIdIdfile.columns.idfile_id)).root)))
		}
	} else {
		//st.result.add(id1.columns.summed_quantity.sum,'total_marks');		
	}
	/** @type {QBJoin<db:/stsservoy/sequences>} */
	var sq1 = st.joins.add('db:/stsservoy/sequences');
	sq1.on.add(sq1.columns.sequence_id.eq(id1.columns.sequence_id));
	st.sort.add(sq1.columns.sequence_id);
	st.groupBy.add(sq1.columns.sequence_id);
	st.where.add(sq1.columns.delete_flag.isNull);
	st.where.add(sq1.columns.job_id.eq(jobId));
	st.where.add(sq1.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	//st.where.add(sq1.columns.sequence_id.eq(id1.columns.sequence_id));
	if (criteria.seqnuma && criteria.seqnuma.length > 0){
		sq1.on.add(id1.columns.sequence_id.eq(sq1.columns.sequence_id));
		st.where.add(sq1.columns.sequence_number.isin(criteria.seqnuma));
	}
	if (subquery == "browse"){//joe
		// get idfile list that is the first of all idserialnumbers 
		/** @type {QBSelect<db:/stsservoy/sheets>} */
		var sbs = databaseManager.createSelect('db:/stsservoy/sheets');
		sbs.where.add(sbs.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		//if (getDeleted){
		//	sbs.where.add(sbs.columns.delete_flag.eq(99));
		//} else {
		sbs.where.add(sbs.columns.delete_flag.isNull);
		//}
		sbs.where.add(sbs.columns.job_id.eq(jobId));
		/** @type {QBJoin<db:/stsservoy/piecemarks>} */
		var sbp = sbs.joins.add('db:/stsservoy/piecemarks',JSRelation.RIGHT_OUTER_JOIN);
		sbp.on.add(sbs.columns.sheet_id.eq(sbp.columns.sheet_id));
		/** @type {QBJoin<db:/stsservoy/idfiles>} */
		var sbi = sbs.joins.add('db:/stsservoy/idfiles');
		sbi.on.add(sbp.columns.piecemark_id.eq(sbi.columns.piecemark_id));
		sbi.root.result.add(sbi.columns.idfile_id.max);
		/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} */
		var sbb = sbi.joins.add('db:/stsservoy/id_serial_numbers');
		sbb.on.add(sbi.columns.id_serial_number_id.eq(sbb.columns.id_serial_number_id));
		sbs.result.add(sbb.columns.id_serial_number);
		sbs.groupBy.add(sbb.columns.id_serial_number);
		sbs.sort.add(sbb.columns.id_serial_number);

		var fsds = databaseManager.createDataSourceByQuery('dsa',sbs,-1);
		var fss2 = databaseManager.getFoundSet(fsds);
		fss2.loadRecords();
		var markedIds = [];
		var idx = 1; 
		/** @type {JSRecord<string:idfile_id>} */
		var rec = null;
		while (rec = fss2.getRecord(idx++)){
			markedIds.push(application.getUUID(rec.max));
		}
		null;
		// get idfile list that is the first of all idserialnumbers END
		id1.root.where.add(id1.columns.idfile_id.isin(markedIds));
		var stShown = [];
		/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} */
		var sn1 = st.joins.add('db:/stsservoy/id_serial_numbers');
		sn1.on.add(id1.columns.id_serial_number_id.eq(sn1.columns.id_serial_number_id));
		//sn1.on.add(id1.columns.idfile_id.isin(sbs));
		/** @type {QBJoin<db:/stsservoy/status_description>} */
		var stat1 = st.joins.add('db:/stsservoy/status_description');
		stat1.on.add(id1.columns.status_description_id.eq(stat1.columns.status_description_id));
		stat1.root.result.add(stat1.columns.status_description_id);
		///** @type {QBJoin<db:/stsservoy/transactions>} */
//		var trans1 = st.joins.add('db:/stsservoy/transactions');
//		trans1.on.add(id1.columns.idfile_id.eq(trans1.columns.idfile_id));
		st.result.clear();
		st.sort.clear();
		st.groupBy.clear();
		st.result.addValue(0,"selection");
		var tables = ['id_serial_numbers','piecemarks','status_description','idfiles','sheets','sequences'];
		for (var itemDex = 0;itemDex < tables.length;itemDex++){
			var table = databaseManager.getTable('stsservoy',tables[itemDex]);
			var cols = table.getColumnNames();
			for (index = 0;index < cols.length;index++){
				if (stShown.indexOf(cols[index]) == -1){
					stShown.push(cols[index]);
					switch (tables[itemDex]){
						case 'id_serial_numbers' : var tableCol = sn1.getColumn(cols[index]);break;
						case 'piecemarks' : tableCol = pmm.getColumn(cols[index]);break;
						case 'status_description' : tableCol = stat1.getColumn(cols[index]);break;
						case 'idfiles' : tableCol = id1.getColumn(cols[index]);break;
						case 'sheets' : tableCol = st.getColumn(cols[index]);break;
						case 'sequences' : tableCol = sq1.getColumn(cols[index]);break;
						default: null;
					}
					st.result.add(tableCol);
				}
			}
		}
		st.sort.add(sn1.columns.id_serial_number);
		stShown = [];
		return st;
	}
	if (subquery == "idnumbers"){
		/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} */
		sn1 = st.joins.add('db:/stsservoy/id_serial_numbers');
		sn1.on.add(id1.columns.id_serial_number_id.eq(sn1.columns.id_serial_number_id));
		st.result.clear();
		st.sort.clear();
		st.groupBy.clear();
		st.result.distinct = true;
		st.result.add(sn1.columns.id_serial_number);
		st.groupBy.add(sn1.columns.id_serial_number);
		return st;
	}

	if (subquery == 'piecemark'){
		id1.root.result.add(id1.columns.summed_quantity);
		st.result.clear();
		st.groupBy.clear();
		st.sort.clear();
		st.result.distinct = true;
		st.result.add(id1.columns.summed_quantity.sum,'total_marks');
		st.groupBy.add(pmm.columns.piecemark_id);
		for (index = 0;index < pmCols.length;index++){
			if (pmCols[index] == "piecemark_id"){continue}
			st.result.add(pmm.columns[pmCols[index]]);
		}
		null;
	}

	if (subquery == 'summarized'){
		//pmm.parent.result.distinct;
		st.result.distinct;
		id1.root.result.distinct;
		pmm.root.result.distinct;
		rt1.root.result.distinct;
		
		st.groupBy.add(pmm.columns.piecemark_id);
		id1.root.groupBy.add(id1.columns.piecemark_id);
		pmm.root.groupBy.add(pmm.columns.piecemark_id);
		
		//st.where.add(pmm.columns.piecemark.eq(""));
		//st.groupBy.add(pmm.columns.material);
		//st.where.add(pmm.columns.piecemark.eq(""));
	}
	
	if (subquery == 'stations'){
		id1.root.result.add(id1.columns.idfile_id);
			id1.root.groupBy.add(id1.columns.idfile_id);
		id1.root.result.add(id1.columns.summed_quantity);
		id1.root.groupBy.add(id1.columns.summed_quantity);
		/** @type {QBJoin<db:/stsservoy/transactions>} */
		var tr2 = st.joins.add('db:/stsservoy/transactions');///2241
		tr2.on.add(tr2.columns.idfile_id.eq(id1.columns.idfile_id));
		tr2.root.result.distinct;
		tr2.root.groupBy.add(tr2.columns.status_description_id);
		tr2.root.result.add(tr2.columns.status_description_id);
		tr2.root.where.add((tr2.root.exists(trans.where.add(tr2.columns.status_description_id.eq(tr2.columns.status_description_id)).root)))
		/** @type {QBJoin<db:/stsservoy/status_description>} */
		var sd2 = st.joins.add('db:/stsservoy/status_description');
		sd2.on.add(tr2.columns.status_description_id.eq(sd2.columns.status_description_id));
		//sd2.root.result.distinct;
		//sd2.root.groupBy.add(sd2.columns.status_description_id);
		sd2.root.groupBy.add(sd2.columns.status_code);
		sd2.root.groupBy.add(sd2.columns.association_id);
		sd2.root.groupBy.add(sd2.columns.status_sequence);
		sd2.root.groupBy.add(sd2.columns.status_description);
		sd2.root.result.add(sd2.columns.status_code);
		sd2.root.result.add(sd2.columns.association_id);
		sd2.root.result.add(sd2.columns.status_sequence);
		sd2.root.result.add(sd2.columns.status_description);
		if (criteria.statusa && criteria.statusa.length > 0){
			sd2.root.where.add(sd2.columns.status_code.isin(criteria.statusa))
		}
		/** @type {QBJoin<db:/stsservoy/associations>} */
		var pl2 = st.joins.add('db:/stsservoy/associations');
		pl2.on.add(pl2.columns.association_uuid.eq(sd2.columns.association_id));
		pl2.root.groupBy.add(pl2.columns.association_name);
		pl2.root.result.add(pl2.columns.association_name);
	}
    if (application.isInDeveloper()){
    	application.output(st);
    }
null;
	return st;
}
/**
 * @param query
 * @param formName
 *
 * 
 *
 * @properties={typeid:24,uuid:"3CD11EBC-7D8D-4356-A9D8-B691C5208A30"}
 */
function createRouteSummaryForm(query,formName){
	tableOrderingArray = [];
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var stat = databaseManager.createSelect('db:/stsservoy/status_description');
	stat.result.add(stat.columns.status_sequence);
	stat.result.add(stat.columns.status_code);
	stat.result.addValue(0,'quantity');
	stat.result.addValue(0,'weight');
	stat.result.addValue(0,'percent');
	stat.result.addValue("",'plant');
	stat.result.add(stat.columns.status_description_id);
	stat.sort.add(stat.columns.status_sequence);
	stat.sort.add(stat.columns.status_code);
	stat.where.add(stat.columns.delete_flag.isNull);
	stat.where.add(stat.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var statDS = databaseManager.createDataSourceByQuery('statDS',stat,-1);
	
	var statFS = databaseManager.getFoundSet(statDS); 
	statFS.loadRecords();
	
	var ds = 'dbDS';
	var newDs = ds;
	var count = 1;//createsummaryform, STOP
	while (databaseManager.dataSourceExists('mem:'+newDs)){
		newDs = -1;
		newDs = ds+count++;
	}
	var dbDS = databaseManager.createDataSourceByQuery(newDs,query,-1);
	var dbFS = databaseManager.getFoundSet(dbDS);
	dbFS.loadRecords();
	var codeToStat = [];
	var index2 = 1;
	while (index2 <= statFS.getSize()){
		var rec2 = statFS.getRecord(index2);
		var statId = rec2.status_description_id;
		codeToStat[statId] = index2;
		index2++;
	}
	var index = 1;
	while (index <= dbFS.getSize()){
		var rec = dbFS.getRecord(index);
		var plant = rec.association_name;
		var weight = rec.item_weight;
		count = rec.summed_quantity;
		var codeId = rec.status_description_id;
		if (!codeId){continue}
		var statRec = statFS.getRecord(codeToStat[codeId]);
		statRec.plant = plant;
		statRec.quantity = statRec.quantity*1+count*1;
		statRec.weight = statRec.weight*1 + weight*count;
		index++;
	}
	
	var divisorQty = (!forms['loads_summary_info'+versionForm]) ? false : (forms['loads_summary_info'+versionForm].vPercentByQty == 0);
	var overallWeight = forms['loads_criteria'+versionForm].vLabTotalWt;
	var overallCount = forms['loads_criteria'+versionForm].vLabTotPieces;
	for (index = 1;index <= statFS.getSize();index++){
		rec = statFS.getRecord(index);
		if (!rec.quantity){continue}
		if (divisorQty){
			rec.percent = Math.floor(10000*(rec.quantity/overallCount+.00005))/100;
		} else {
			rec.percent = Math.floor(10000*(rec.weight/overallWeight+.00005))/100;
		}
		if (application.isInDeveloper()){application.output(rec)}
	}
	viewBTableCreateForm2('loads_summary_info'+versionForm,statFS.getDataSource());
}
/**
 * @AllowToRunInFind
 * 
 * @param criteria
 * @param formName
 *
 * 
 *
 * @properties={typeid:24,uuid:"2FA4AB44-011B-445D-90E2-18F9666BD1A8"}
 */
function viewBTableToFormQB(criteria,formName){
	if (formName.search('summary_info') != -1){
		dsQuery = queryAssembly(criteria,formName,'stations');
	} else 	if (formName.search('combo') != -1){
		dsQuery = queryAssembly(criteria,formName,'browse');
	} else {
		dsQuery = queryAssembly(criteria,formName,'piecemark');
	}
	scopes.jobs.removeFormHist(formName+'_table');
	tableOrderingData = tablePrefsPreLoad(formName+'_table');
	var dsName = 'tableDS';
	var newDsName = dsName; var count = 1;
	while (databaseManager.dataSourceExists('mem:'+newDsName)){
		newDsName = dsName+count++;
	}
	/** @type  {JSDataSet} */
	browseFS2[formName] = databaseManager.createDataSourceByQuery(newDsName,dsQuery,-1);
	dsQuerySave[formName] = dsQuery;
	//browseFS2[formName] = adjustBarcodeIdfileCount(browseFS2[formName]);
	versionForm = globals.getInstanceForm(null);
	viewBTableCreateForm2(formName,browseFS2[formName]);
	//tablePrefsLoad(formName)
}
/**
 * No reorder table
 * @AllowToRunInFind
 * 
 * @param formName
 * @param datasource
 *
 * 
 *
 * @properties={typeid:24,uuid:"E510EA06-E719-4EC6-A93C-114C5A5C0C29"}
 */
function viewBTableCreateForm2(formName,datasource){
	versionForm = globals.getInstanceForm(null);
	var formNameTable = formName+'_table';
	scopes.jobs.removeFormHist(formNameTable);
	
	//tableOrderingData = tablePrefsPreLoad(formName);
	var formFS = databaseManager.getFoundSet(datasource);
	formFS.loadRecords();
	viewBTableRemoveColumnsQB(formFS);//dsBrowse and browseFS
	var checkForm = solutionModel.newForm(formNameTable,datasource,'sts_one',false,500,600);
	var code = 'function onRecordSelection(event){scopes.jobs.onRecordSelectIdfile(event);}';
	var code2 = 'function onRender3(event){null;}';
	if (formName.search('barcode') != -1){
		code2 = 'function onRender3(event){scopes.printer.onRenderPrint(event);}';
	}
	if (formName.search('combo') != -1){
		checkForm.onRecordSelection = checkForm.newMethod(code);
		//checkForm.onRender = checkForm.newMethod(code2);
	}
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	if (formName.search('summary_info') != -1){
		checkForm.onSortCmd = checkForm.newMethod(code2);
	}
	var last = ""; 
	var offset = 0;
	var colLength = 0;
	var setVisible = true;
	var posArray = [];
	var defArray = ['default column',0,scopes.prefs.defaultColumnWidth,1];
	var rec = formFS.getRecord(1);
	var columnNames4 = [];
	null;
	null;
	null;
	if (!rec){return}
	for (var index2 = 0;index2 < tableOrderingArray.length;index2++){
		//if (!tableOrderingArray[index2]){continue}
		//if (!rec){continue}
		if (tableOrderingArray[index2] in rec){columnNames4.push(tableOrderingArray[index2])}
	}
	for (var column in rec){
		if (typeof rec[column] == 'function'){continue}
		if (columnNames4.indexOf(column) == -1 && columnNames4.indexOf(column) == -1){columnNames4.push(column)}
	}
	var columnCnt = 1; var fieldPos = 0;
	//var altColNames = i18nColumnNames;
	for (var index = 0;index < columnNames4.length;index++){
		/** @type {String} */
		var columnName = columnNames4[index];
		if (columnName == ""){continue}
		if (formName.search('summary') != -1 && columnName.search('status_description_id') != -1){continue}
		//if (columnName.search("rowid") != -1){continue}
		var columnDataIndex = tableOrderingArray.indexOf(columnName);
		posArray = tableOrderingData[columnDataIndex];
		if (!posArray){posArray = defArray}
		// column not in prefs, add basic config
		//if (tableOrderingData[columnDataIndex].length != 4){tableOrderingData[columnDataIndex] = new Array(columnName,0,20,1)} // prefs data incorrect
		//if (typeof tableOrderingData[columnDataIndex][1] == "string"){tableOrderingData[columnDataIndex][1] = 0}
		setVisible = !(scopes.globals.hideEmptyColumns == 1 && removeColumns.indexOf(columnName) != -1) &&
			((scopes.prefs.maxColumnShow == 0) || (columnCnt <= scopes.prefs.maxColumnShow)) && (posArray[3] == 1);
			//if (posArray[3] == 0){colLength = 0;setVisible = false;}
		//application.output(columnName+'column count '+columnCnt+' visible '+setVisible+' hideEmpty '+scopes.globals.hideEmptyColumns+' remove '+removeColumns.indexOf(columnName));
		if (setVisible){columnCnt++}
		if (!setVisible){var offsetHide = 9999999} else {offsetHide = 0}
		if (columnName.search(/(_rowid|browsing_id)/) != -1){
			colLength = 0;
		} else {
			colLength = posArray[2]; //scopes.prefs.defaultColumnWidth;
		}
		//if (application.isInDeveloper()){application.output('column '+columnName+ ' length '+ colLength+ ' position '+fieldPos+' visibile '+setVisible);}

	 	last = checkForm.newLabel(columnName,fieldPos*1+offsetHide*1,0,colLength,20);
	 	last.enabled = false;
		if (columnName.search(/(_rowid|browsing_id)/) != -1){
			last.visible = false;
		}
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	if (index == columnName.length -1){
	 		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	 	}
	 	last.labelFor=columnName;//columnNames2[index];
	 	last.dataProviderID = columnName;//columnNames2[index];
	 	var textName = columnName;
	 	if (i18nColumnNames[columnName]){
	 		textName = i18nColumnNames[columnName];
	 	}
	 	last.toolTipText = textName;
	 	last.text = textName;
	 	if (columnName == 'selection'){
	 		//if (removeColumns.indexOf('selection') == -1){setVisible = true}
			last = checkForm.newField(columnName,JSField.CHECKS,fieldPos*1+offsetHide*1,20,colLength,20);
	 	} else {
	 		//if (removeColumns.indexOf(columnName) == -1){setVisible = true}
	 		//application.output(' column data '+columnName+" "+posArray[1]);
			last = checkForm.newField(columnName,JSField.TEXT_FIELD,fieldPos*1+offsetHide*1,20,colLength,20);
	 	}
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
		last.name = columnName;
		//if (application.isInDeveloper()){application.output('column '+columnName+' = '+altColNames[columnName])}
		var typeCol = typeof rec[columnName];
		//application.output('type '+typeCol+ ' '+columnName);
 		if (typeof rec[columnName] == "number"){
 			last.horizontalAlignment = SM_ALIGNMENT.RIGHT;
 		}	
		last.editable = false;
		last.visible = setVisible;
		if (columnName == "selection"){
			last.editable = true;
			last.horizontalAlignment = SM_ALIGNMENT.LEFT;
		}
	 	offset += colLength*1;	
	 	//if (columnName == "selection"){
	 		//if (application.isInDeveloper()){application.output('selection: '+last)}
	 	//}
	 	fieldPos += colLength*1;
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	if (!forms[formName]){
		//versionForm = globals.getInstanceForm(null);
		var newFormName = 'loads_pcmk_combo'+versionForm;
		solutionModel.cloneForm(newFormName,solutionModel.getForm('loads_pcmk_combo'));
	}
	var status = false;
	if (forms[formName].elements.tabless){
		forms[formName].elements.tabless.removeAllTabs();
		status = forms[formName].elements.tabless.addTab(formNameTable);
		//forms[formName].controller.loadAllRecords();
	}
	if (!status){
		status = forms[formName].elements.split.setLeftForm(formNameTable);		//forms.delete_pcmk_combo.elements.split.setLeftForm(formNameTable);
	}
	var relationInfo = solutionModel.getRelation('sts_idfile_to_transactions');
	if (!solutionModel.getRelation(relationInfo.name+versionForm)){
		var newRelation = solutionModel.newRelation(relationInfo.name+versionForm,relationInfo.primaryDataSource,relationInfo.foreignDataSource,relationInfo.joinType);
		null;
		var newGlobal = solutionModel.newGlobalVariable('jobs','transactionIdfileId'+versionForm,JSVariable.TEXT);
		newRelation.newRelationItem(relationInfo.getRelationItems()[0].primaryDataProviderID+versionForm,'=','idfile_id');
	}
	fieldPos += posArray[1];
}
/**
 * @SuppressWarnings(wrongparameters)
* 
 * @param topForm
 *
 * 
 *
 * @properties={typeid:24,uuid:"8A500F11-66A5-44A4-B04D-4D004E5701B7"}
 */
function jobStations(topForm){
	var jobData = forms[topForm].jobIdData;
	if (jobData.stations) {return}
	
	jobData.stations = [];
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var sq = databaseManager.createSelect('db:/stsservoy/status_description');
	sq.result.distinct = true;
	sq.result.add(sq.columns.status_code);
	sq.sort.add(sq.columns.status_code);
	sq.where.add(
	sq.and
		.add(sq.columns.delete_flag.isNull)
		.add(sq.columns.tenant_uuid.eq(globals.session.tenant_uuid))
	);
	/** @type {JSFoundSet<db:/stsservoy/status_description>} */
	var fsS = databaseManager.getFoundSet(sq);
	var index = 1;
	while (index <= fsS.getSize()){
		var rec = fsS.getRecord(index);
		/** @type {JSRecord<db:/stsservoy/status_description>} */
		if (jobData.stations.indexOf(rec.status_code) == -1){jobData.stations.push(rec.status_code);}
		index++;
	}
}
/**
 * @param foundset
 *
 * 
 *
 * @properties={typeid:24,uuid:"DB2F259A-7A84-4301-A930-66611DA6E176"}
 */
function viewBTableRemoveColumnsQB(foundset){
	if (foundset.getSize() == 0){return}
	columnNames2 = []; var index = 0; var fieldIndex = 0; removeColumns = [];
	var hasDataCol = [];
	columnNames2.push('selection');//Want this one first
	browseArray = [];
	nullRow = [];
	for (var item in foundset.getRecord(1)){
		columnNames2.push(item);
	}
	hasDataCol.push('selection');
	var maxRows = (foundset.getSize() < 100) ? foundset.getSize() : 100;
	for (index = 1;index <= maxRows;index++){
		var rec = foundset.getRecord(index);
		for (fieldIndex = 0;fieldIndex < columnNames2.length;fieldIndex++){
			var fldName = columnNames2[fieldIndex];
			if (hasDataCol.indexOf(fldName) != -1){continue}//already tagged as containing info
			if (!rec[fldName]){continue}//empty, anything past this has data
			hasDataCol.push(columnNames2[fieldIndex]);
			
		}
	}
	for (fieldIndex = 0;fieldIndex < columnNames2.length;fieldIndex++){
		fldName = columnNames2[fieldIndex];
		if (hasDataCol.indexOf(fldName) == -1){removeColumns.push(fldName)}
	}
	null;
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
 * 
 *
 * @properties={typeid:24,uuid:"F1B16632-6B3B-4969-9E98-D8F769DBC047"}
 */
function onDataChangeAssociation(oldValue, newValue, event) {
	var form = event.getFormName();
	// stsvlg_userNames
	if (event.getFormName() == 'division_user_detail'){
		if (forms[form].user_name == "P"){
			forms[form].association_uuid = oldValue;
			return true;
		}
		/** @type {QBSelect<db:/stsservoy/associations>} */
		var assoc = databaseManager.createSelect('db:/stsservoy/associations');
		assoc.where.add(assoc.columns.association_uuid.eq(newValue));
		assoc.result.add(assoc.columns.logic_flag);
		var a = databaseManager.getFoundSet(assoc);
		/** @type {JSRecord<db:/stsservoy/associations>} */
		var rec = a.getRecord(1);
		forms.division_user_detail.isAdminAccount = (rec.logic_flag == 1) ? i18n.getI18NMessage('sts.txt.login.administrative') : i18n.getI18NMessage('sts.txt.login.shop');
	}
	return true
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"22864FEB-C233-4129-898B-24D5E531C349"}
 */
function i18nTableColumns(){
	i18nColumnNames['weight'] = i18n.getI18NMessage('table.general.weight');
	i18nColumnNames['percent'] = i18n.getI18NMessage('table.general.percent');
	i18nColumnNames['quantity'] = i18n.getI18NMessage('table.transactions.quantity');
	i18nColumnNames['plant'] = i18n.getI18NMessage('table.general.division');
	i18nColumnNames['selection'] = i18n.getI18NMessage('table.general.selection');
	// KISS IMPORT SPECIFIC
	/**
	i18nColumnNames['set_bc_qty'] = i18n.getI18NMessage('');
	i18nColumnNames['last_bc_qty'] = i18n.getI18NMessage('');
	i18nColumnNames['barcode_qty'] = i18n.getI18NMessage('');
	i18nColumnNames['ext_wt_qty'] = i18n.getI18NMessage('');
	i18nColumnNames['import_status'] = i18n.getI18NMessage('');
	i18nColumnNames['action'] = i18n.getI18NMessage('');
	i18nColumnNames['sheet_number'] = i18n.getI18NMessage('');
	i18nColumnNames['parent_piecemark'] = i18n.getI18NMessage('');
	i18nColumnNames['piecemark'] = i18n.getI18NMessage('');
	i18nColumnNames['item_quantity'] = i18n.getI18NMessage('');
	i18nColumnNames['material'] = i18n.getI18NMessage('');
	i18nColumnNames['grade'] = i18n.getI18NMessage('');
	i18nColumnNames['item_length'] = i18n.getI18NMessage('');
	i18nColumnNames['finish'] = i18n.getI18NMessage('');
	i18nColumnNames['reference_drawing'] = i18n.getI18NMessage('');
	i18nColumnNames['e_route_code_id'] = i18n.getI18NMessage('');
	i18nColumnNames['sequence_number'] = i18n.getI18NMessage('');
	i18nColumnNames['sequence_quantity'] = i18n.getI18NMessage('');
	i18nColumnNames['item_weight'] = i18n.getI18NMessage('');
	*/
	
	var tables = databaseManager.getTableNames('stsservoy');
	for (var index = 0;index < tables.length;index++){
		var table = databaseManager.getTable('stsservoy',tables[index]);
		var columns = table.getColumnNames();
		for (var index2 = 0;index2 < columns.length;index2++){
			var colTitle = table.getColumn(columns[index2]).getTitle();
			i18nColumnNames[columns[index2]] = colTitle;
		}
	}
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"643AE8F2-E007-436E-85B8-2507FF971DE5"}
 */
function getAllTenantJobs(){
	var jobArray = [];
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.tenant_uuid.eq(scopes.globals.session.tenant_uuid));
	var J = databaseManager.getFoundSet(j);
	var index = 1;
	while (index <= J.getSize()){
		/** @type {JSRecord<db:/stsservoy/jobs>} */
		var rec = J.getRecord(index);
		jobArray.push(rec.job_number);
		index++;
	}
	return jobArray;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"B34E7253-75F2-4178-B97E-B7A5CEA2F8C6"}
 */
function recallIdfiles(){
	warningsYes();
	warningsMessage('Recalling idfiles information.');
	var purgeCodes = scopes.globals.purgeBarcodeRecords;
	if (purgeCodes.length == 0){return}
	//application.output('purgeBarcodeRecords has '+purgeCodes.length+' items '+purgeCodes);

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i =  databaseManager.createSelect("db:/stsservoy/idfiles");
	i.result.add(i.columns.idfile_id);
	i.result.add(i.columns.delete_flag);
	i.result.add(i.columns.deleted_date);
	i.where.add(i.columns.tenant_uuid.eq(globals.session.tenant_uuid))
	i.where.add(i.columns.idfile_id.isin(purgeCodes))
	i.where.add(i.columns.delete_flag.eq(99))
	var I = databaseManager.getFoundSet(i);
	var updateI = databaseManager.getFoundSetUpdater(I);
	updateI.setColumn('delete_flag',null);
	updateI.setColumn('deleted_date',null);
	updateI.performUpdate();
	warningsX();
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"36E9F333-82E5-44BE-9472-C9ACBA801899"}
 */
function getDefaultCustomerIdForBc(){
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var c = databaseManager.createSelect('db:/stsservoy/customers');
	c.result.add(c.columns.customer_id);
	c.where.add(c.columns.customer_number.eq(scopes.prefs.stsCustomerNum));
	c.where.add(c.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var C = databaseManager.getFoundSet(c);
	if (C.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/customers>} */
		var rec = C.getRecord(1);
		return rec.customer_id;
	}
	return null;
}
/**
 * @param jobId
 *
 * 
 *
 * @properties={typeid:24,uuid:"57BCCE06-2298-430F-9F09-4477B8BED127"}
 */
function tempGetIdfilesToBarcodeCount(jobId){
	// get idfles to barcode count, want idfile_id, piecemark_id, id_serial_number.count
	application.output('inside sample count');
	// return bar code for specific idfile bc count
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var idf2 = databaseManager.createSelect('db:/stsservoy/sheets');
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var idp2 = idf2.joins.add('db:/stsservoy/piecemarks');
	idp2.on.add(idf2.columns.sheet_id.eq(idp2.columns.sheet_id));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var idi2 = idp2.joins.add('db:/stsservoy/idfiles');
	idi2.on.add(idi2.columns.piecemark_id.eq(idp2.columns.piecemark_id));
	idi2.root.groupBy.add(idi2.columns.id_serial_number_id);
	idf2.result.add(idi2.columns.idfile_id.max.count);

	
	
	
	application.output('inside sample count');
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var idf = databaseManager.createSelect('db:/stsservoy/sheets');
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var idp = idf.joins.add('db:/stsservoy/piecemarks');
	idp.on.add(idf.columns.sheet_id.eq(idp.columns.sheet_id));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var idi = idp.joins.add('db:/stsservoy/idfiles');
	idi.on.add(idi.columns.piecemark_id.eq(idp.columns.piecemark_id));
	idi.root.groupBy.add(idi.columns.id_serial_number_id);
	idi.root.result.add(idi.columns.id_serial_number_id.count);
	idi.root.result.add(idi.columns.idfile_id.max);
	idf.result.add(idp.columns.piecemark);
	idf.root.groupBy.add(idp.columns.piecemark);
	var memds = 'mem';
	var id2 = 0;
	var memDS = memds+id2++;

	while (databaseManager.dataSourceExists(memDS)){
		memDS = memds+id2++;
	}
	var memSet = databaseManager.createDataSourceByQuery(memDS,idf,-1);
	var res = databaseManager.getFoundSet(memSet);
	res.loadRecords();
	//var idx = 1;
	//var rec = null;
	//while (rec = res.getRecord(idx++)){
	//	if (true || rec.count > 1){
	//		application.output('sample count '+ rec.piecemark+ ' ' +rec.max+'  '+rec.count);
	//	}
	//}
	null;
}
/**
 * @param event
 *
 * 
 *
 * @properties={typeid:24,uuid:"21532DA9-C1F2-46DE-942E-01D6C831FFDD"}
 */
function createEmpAssocList(event){
	null;
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var dv = databaseManager.createSelect('db:/stsservoy/associations');
	dv.result.add(dv.columns.association_uuid);
	dv.result.add(dv.columns.association_name);
	dv.where.add(dv.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	dv.where.add(dv.columns.delete_flag.isNull);
	var DV = databaseManager.getFoundSet(dv);
	/** @type {JSDataSet<association_name:String,association_uuid:String>} */
	var rec = null; var idx = 1; var divIds = []; var divNames = [];
	while (rec = DV.getRecord(idx++)){
		divIds.push(rec.association_uuid);
		divNames.push(rec.association_name.replace(/ /g,'').toLowerCase());
	}

	/** @type {QBSelect<db:/stsservoy/employee>} */
	var ee = databaseManager.createSelect('db:/stsservoy/employee');
	ee.result.add(ee.columns.employee_id);
	ee.result.add(ee.columns.employee_firstname);
	ee.result.add(ee.columns.employee_lastname);
	ee.result.add(ee.columns.employee_number);
	for (idx = 0;idx < divIds.length;idx++){
		/** @type {String} */
		var divName = divNames[idx];
		ee.result.addValue(0,divName);
	}
	ee.where.add(ee.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	ee.where.add(ee.columns.delete_flag.isNull);
	/** @type {JSDataSet<employee_id:String>} */
	var EE = databaseManager.getDataSetByQuery(ee, -1);

	/** @type {QBSelect<db:/stsservoy/users>} */
	var us = databaseManager.createSelect('db:/stsservoy/users');
	us.result.add(us.columns.user_uuid);
	us.result.add(us.columns.employee_id);
	us.result.add(us.columns.association_uuid);
	us.where.add(us.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	us.where.add(us.columns.delete_flag.isNull);
	var US = databaseManager.getFoundSet(us);
	/** @type {JSDataSet<association_uuid:String,employee_id:String>} */
	var rec2 = null; idx = 1; var employeeUserAssocList = [];
	while (rec2 = US.getRecord(idx++)){
		if (!employeeUserAssocList[rec2.employee_id]){
			employeeUserAssocList[rec2.employee_id] = [];
		}
		var divIdx = divIds.indexOf(rec2.association_uuid);
		employeeUserAssocList[rec2.employee_id].push(divNames[divIdx]);
	}

	for (idx = 1;idx <= EE.getMaxRowIndex();idx++){
		EE.rowIndex = idx;
		if (employeeUserAssocList[EE.employee_id]){
			while (divName = employeeUserAssocList[EE.employee_id].pop()){
				EE[divName] = 1;
			}

		}
	}
	EEDataSource = EE.createDataSource('employeeDivs');
	//if (1==1){return}
	//var newFS = databaseManager.getFoundSet(EEDataSource);
	//newFS.loadRecords();
	//forms['employees_lstB'].controller.loadRecords(newFS);
	//if (application.isInDeveloper()){
	//	for (idx = 1;idx <= newFS.getSize();idx++){
	//		application.output('pig '+newFS.getRecord(idx));
	//	}
	//}
}
/**
 * @param {JSRenderEvent} event
 *
 * 
 *
 * @properties={typeid:24,uuid:"8AC0395D-CB10-4698-9776-98B1E8DF93A6"}
 */
function onRenderSetLogical(event){
	var rec = event.getRecord();
	var fld = event.getRenderable();
	if (rec && fld && rec[fld.getDataProviderID()] == 1){
		fld.bgcolor = 'pink';
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param jobNumber
 *
 * 
 *
 * @properties={typeid:24,uuid:"E966809B-0F2A-4F72-8754-1C980BD933CE"}
 */
function resetSampleData(jobNumber){
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id)
	j.where.add(j.columns.job_number.eq(jobNumber));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var J = databaseManager.getFoundSet(j);
	if (J.getSize() == 0){
		globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.job.not.found',jobNumber),i18n.getI18NMessage('sts.txt.job.not.found',jobNumber));
		return;
	}
	var jobRec = J.getRecord(1);
	var jobId = jobRec.job_id;
	// get sheets, get piecemarks, act on idfiles, act on transactions of idfiles
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var sh = databaseManager.createSelect('db:/stsservoy/sheets');
	sh.where.add(sh.columns.delete_flag.isNull);
	sh.where.add(sh.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	sh.where.add(sh.columns.job_id.eq(jobId));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var pm = sh.joins.add('db:/stsservoy/piecemarks');
	pm.on.add(pm.columns.sheet_id.eq(pm.columns.sheet_id));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var id = sh.joins.add('db:/stsservoy/idfiles');
	id.on.add(id.columns.piecemark_id.eq(pm.columns.piecemark_id));
	sh.result.add(id.columns.idfile_id);
	sh.groupBy.add(id.columns.idfile_id);
	sh.result.distinct = true;
	/** @type {JSDataSet<idfile_id:String>} */
	var ID = databaseManager.getDataSetByQuery(sh,-1);
	var idfileIdList = [];
	for (var index = 1;index <= ID.getMaxRowIndex();index++){
		ID.rowIndex = index;
		//if (idfileIdList.indexOf(ID.idfile_id) == -1){
			idfileIdList.push(ID.idfile_id);
		//}
		//application.output('rec '+ID.idfile_id);
	}
	null;
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var id2 = databaseManager.createSelect('db:/stsservoy/idfiles');
	id2.result.add(id2.columns.idfile_id);
	id2.where.add(id2.columns.idfile_id.isin(idfileIdList));
	var ID2 = databaseManager.getFoundSet(id2);
	
	if (ID2.getSize() > 0){ // update idfiles
		var up2 = databaseManager.getFoundSetUpdater(ID2);
		up2.setColumn('status_description_id',null);
		up2.setColumn('id_location',null);
		up2.setColumn('bundle_id',null);
		up2.setColumn('heat_id',null);
		up2.setColumn('id_on_hold',0);
		up2.setColumn('shipped_quantity',0);
		up2.setColumn('ship_load_id',null);
		up2.setColumn('received_load_id',null);
		up2.setColumn('current_load_id',null);
		up2.setColumn('delete_flag',null);
		up2.setColumn('deleted_date',null);
		up2.setColumn('edit_date',new Date());
		up2.performUpdate();
	}
	
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var id4 = databaseManager.createSelect('db:/stsservoy/transactions');
	id4.result.add(id4.columns.trans_id);
	id4.where.add(id4.columns.idfile_id.isin(idfileIdList));
	id4.where.add(id4.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var ID4 = databaseManager.getFoundSet(id4);
	
	if (ID4.getSize() > 0){ //delete all transactions, purged from database
		ID4.deleteAllRecords();
	}
}
/**
 * @param {String} windowName
 * @param {Array} dataArray
 * @param {Array} columnNames
 *
 * 
 *
 * @properties={typeid:24,uuid:"091564CE-F209-4386-A88B-1F89FE3EF46C"}
 */
function viewTemporaryData(windowName,dataArray,columnNamesArray){
	//read array columns,  convert to dataset, then datasource
	var dataSet = databaseManager.createEmptyDataSet(dataArray.length,columnNamesArray);
	
	//forms.address_lst.foundset.loadRecords(dataset);
	forms.import_performance_bom.foundset.loadRecords(dataSet);
	
}
/**
 * @param {JSEvent} event
 * 
 *
 * @properties={typeid:24,uuid:"41980170-1D83-42B1-B05F-19AA0D062761"}
 */
function importPerformance(event){
	perfImportDate = new Date();
	scopes.jobs.jobUnderCustomer = forms.import_performance_setting.jobUUID;
	readPieceTables();
	scopes.jobs.createSheetsPerf();
	databaseManager.saveData();
	scopes.jobs.createSheetBomsPerf();
	databaseManager.saveData();
	scopes.jobs.createPiecemarksPerf();
	databaseManager.saveData();
	scopes.jobs.createIdfilesPerf();
	databaseManager.saveData();
	/**
	 * update job data:
	 */
	var formData = forms.import_performance_setting;
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var qq = databaseManager.createSelect('db:/stsservoy/jobs');
	qq.result.add(qq.columns.job_id);
	qq.where.add(qq.columns.delete_flag.isNull);
	qq.where.add(qq.columns.job_number.eq(formData.vJobNumber));
	qq.where.add(qq.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var jobData = databaseManager.getFoundSet(qq);
	if (jobData){
		/** @type {JSFoundSet<db:/stsservoy/jobs>} */
		var rec2 = jobData.getRecord(1);
		rec2.customer_po = formData.insCustPO; //jobs.customer_po 30
		rec2.po_release = formData.insReleasePO; //jobs.po_release 25
		databaseManager.saveData(rec2);
	}
	forms.import_performance_bom.importProgressUpdate(0);

}
/**
 * @param {String} jobID
 *
 * 
 *
 * @properties={typeid:24,uuid:"39063039-8C61-43D1-825D-011E4384025B"}
 */
/**
 *
 * 
 *
 * @properties={typeid:24,uuid:"35111DC3-4041-421F-A701-37B14EAA8BA6"}
 */
function createSheetsPerf(){
	var sheets = forms.import_performance_txt._arraysheets;
	databaseManager.startTransaction();
	for (var idx = 0;idx < sheets.length;idx++){
		var sheet = sheets[idx];
		var sheetInfo = forms.import_performance_txt._arrayborderkss[sheet];
		if (application.isInDeveloper()){application.output('sheet number '+sheets[idx])}
		/** @type {JSFoundSet<db:/stsservoy/sheets>} */
		var sheetRec = createSheet(sheet);
		if (sheetRec){
			for (var key in forms.import_performance_txt.objborderkss){
				if (typeof sheetRec[key] != 'undefined'){sheetRec[key] = sheetInfo[key]}
			}
			var comment = forms.import_performance_txt._arraycomments[sheet];
			sheetRec.bom_comment = comment;
			//application.output('sheet '+sheet+' memo : '+forms.import_performance_txt._arraycomments[sheet]);
		}
		forms.import_performance_bom.importProgressUpdate(1);
	}
	databaseManager.commitTransaction();
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"6F3AAA9E-44DC-44B1-9878-97F5CB818D01"}
 */
function createSheetBomsPerf(){
	var sheets = forms.import_performance_txt._arraysheets;
	databaseManager.startTransaction();
	for (var idx = 0;idx < sheets.length;idx++){
		var sheet = sheets[idx];
		var sheetBomArray = forms.import_performance_txt._arraybom[sheet];
		if (application.isInDeveloper()){application.output('sheet number '+sheets[idx])}
		/** @type {JSFoundSet<db:/stsservoy/sheet_bom>} */
		for (var idx2 = 0;idx2 < sheetBomArray.length;idx2++){
			var bomLine = sheetBomArray[idx2];
			var itemNumber = bomLine.item_number;
			if (application.isInDeveloper()){application.output('create bom sheet '+sheet+' bom item '+itemNumber);}
			var bomRec = createSheetBom(sheet,itemNumber);
			
			for (var key in bomLine){ //forms.import_performance_txt.objsheetbom){
				if (typeof bomRec[key] != 'undefined'){bomRec[key] = bomLine[key]}
			}
			forms.import_performance_bom.importProgressUpdate(1);
		}
	}
	var sheetCutArray = forms.import_performance_txt._arraycuts;
	for (idx2 = 0;idx2 < sheetCutArray.length;idx2++){
		bomLine = sheetCutArray[idx2];
		sheet = bomLine.sheet;
		itemNumber = bomLine.item_number;
		bomRec = createSheetBom(sheet,itemNumber);
		for (key in bomLine){
			if (typeof bomRec[key] != 'undefined'){bomRec[key] = bomLine[key]}
		}
		
	}
	databaseManager.commitTransaction();
}
/**
 * @param sheetNumber
 * @param itemNumber
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"365D3F4F-440D-4ED4-AF8D-B1869334B6DA"}
 */
function createSheetBom(sheetNumber,itemNumber){
	var uniqueSht = "_"+sheetNumber;
	/** @type {JSFoundSet<db:/stsservoy/sheet_bom>} */
	var fs = databaseManager.getFoundSet('stsservoy','sheet_bom');
	var sheetId = dsSheetArray[uniqueSht]+'';
	var unique = sheetId+"_"+itemNumber;
	var update = false;
	if (dsSheetBomArray[unique]){
		/** @type {String} */
		var pk = application.getUUID(dsSheetBomArray[unique]);
		fs.loadRecords(pk);
		/** @type {JSFoundSet<db:/stsservoy/sheet_bom>} */
		var bomRec = fs.getRecord(1);
		//return bomRec;
	}
	if (!bomRec){
		update = true;
		var recIndex = fs.newRecord();
		bomRec = fs.getRecord(recIndex);
	}
	bomRec.edit_date = perfImportDate;
	bomRec.item_number = itemNumber;
	bomRec.sheet_id = application.getUUID(sheetId);
	bomRec.tenant_uuid = globals.session.tenant_uuid;
	if (update){
		dsSheetArrayRev[unique] = sheetId;
		dsSheetArray[sheetId] = unique;
	}
	return bomRec;
}
/**
 * @param {String} length
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"342F7531-5ABA-4F2C-9255-036C4EE1150E"}
 */
function ft_to_mm(length){
	// make conversion to mm
	//length = fracToDec(length);
	application.output('length '+length);

	//length = length * 12 * 25.4;
	//return length;
	return 0;
}
/**
 * @param {String} mm
 *
 * 
 *
 * @properties={typeid:24,uuid:"51DF022A-5091-486F-9FCC-F6FD3B6AF763"}
 */
function mm_to_ft(mm){
	// make conversion to ft
	return 0;
}
/**
 * @param length
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"69BE7AD4-C192-47A9-8132-757BB852147B"}
 */
function ft_to_in(length){
	length = fracToDec(length);
	if (1==1){return length}
	application.output(length);
	if (length.search('.') != -1){
		length = length.replace("'",'');
		length = length * 12;
		return length;
	}
	if (length.search('"') != -1){
		length = length.replace('"','');
		return length;
	}
	return fracToDec(length);
}
/**
 * @param {String} material
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E825DAE9-9390-421A-8652-F9CC180D0EA7"}
 */
function pipeDescripToFieldValue(material){
	material = material.toUpperCase();
	if (material.search(i18n.getI18NMessage('sts.txt.pipe.field.support')) != -1){
		return i18n.getI18NMessage('sts.txt.pipe.field.return.support');
		
	} else if (material.search(i18n.getI18NMessage('sts.txt.pipe.field.pipe')) != -1){
		return i18n.getI18NMessage('sts.txt.pipe.field.return.pipe');
		
	} else if (material.search(i18n.getI18NMessage('sts.txt.pipe.field.flanges')) != -1){
		return i18n.getI18NMessage('sts.txt.pipe.field.return.flanges');
		
	} else if (material.search(i18n.getI18NMessage('sts.txt.pipe.field.fittings')) != -1){
		return i18n.getI18NMessage('sts.txt.pipe.field.return.fittings');
		
	} else if (material.search(i18n.getI18NMessage('sts.txt.pipe.field.valves')) != -1){
		return i18n.getI18NMessage('sts.txt.pipe.field.return.valves');
		
	} else if (material.search(i18n.getI18NMessage('sts.txt.pipe.field.instrument')) != -1){
		return i18n.getI18NMessage('sts.txt.pipe.field.return.instrument');
		
	} else if (material.search(i18n.getI18NMessage('sts.txt.pipe.field.field.material')) != -1){
		return i18n.getI18NMessage('sts.txt.pipe.field.return.field.material');
		
	} else 
		return '';
}
/**
 * @param {String} piecemark
 * @param {String} sheet
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"5CE5ACE0-0696-4EDA-BC97-296FD30AFF2B"}
 */
function createPiecemarkPerf(piecemark, sheet){
	//var origEmployee = globals.session.employeeId; // used in idfile
	// record.piecemark+","+record.parent_piecemark+","+sheetNum+","+record.grade+","+record.finish
	var pRec = {piecemark:piecemark,grade:'',parent_piecemark:'',finish:'',sheet_id:dsSheetArray['_'+sheet]};
	var uniquePcmk = uniquePiecemark(pRec);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var q = databaseManager.getFoundSet('db:/stsservoy/piecemarks');
	var update = false;
	if (dsPiecemarkArray[uniquePcmk]){
		var piecemarkId = application.getUUID(dsPiecemarkArray[uniquePcmk]);
		q.loadRecords(piecemarkId);
		var newRec = q.getRecord(1);
		//return newRec;
	}
	if (!newRec){
		update = true;
		var recIdx = q.newRecord();
		newRec = q.getRecord(recIdx);
	}
	newRec.piecemark = piecemark;
	newRec.sheet_id = application.getUUID(dsSheetArray['_'+sheet]);
	newRec.grade = '';
	newRec.finish = '';
	newRec.parent_piecemark = '';
	newRec.tenant_uuid = globals.session.tenant_uuid;
	newRec.edit_date = perfImportDate;
	newRec.e_route_code_id = application.getUUID(forms.import_performance_setting.insRoutingCode);
	if (!dsPiecemarkArray[uniquePcmk]){dsPiecemarkArray[uniquePcmk] = []}
	if (update){
		dsPiecemarkArray[uniquePcmk] = newRec.piecemark_id;
		dsPiecemarkIds.push(newRec.piecemark_id);
		dsPiecemarkList[newRec.piecemark_id] = recIdx;
	}
	forms.import_performance_bom.importProgressUpdate(4);

	null;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"EC6639FF-3C2D-4D42-9ABA-04202D8CB944"}
 */
function createPiecemarksPerf(){
	databaseManager.startTransaction();
	var pcmks = forms.import_performance_txt._arraypcmks;
	for (var idx = 0;idx < pcmks.length;idx++){
		var pcmkLine = pcmks[idx];
		application.output(pcmkLine);
		if (application.isInDeveloper()){application.output(pcmkLine.piecemark+' '+pcmkLine.spoolfile+' '+pcmkLine.sheet)}
		createPiecemarkPerf(pcmkLine.piecemark,pcmkLine.sheet);
	}
	databaseManager.commitTransaction();
	application.output('done with piecemarks');

}
/**
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"2BF71406-AFA1-4B7B-9EEF-56FEAA9076A5"}
 */
function createIdfilesPerf(){
	databaseManager.startTransaction();
	var pcmks = forms.import_performance_txt._arraypcmks;
	for (var idx = 0;idx < pcmks.length;idx++){
		var pcmkLine = pcmks[idx];
		var piecemark = pcmkLine.piecemark;
		var sheet = pcmkLine.sheet;
		if (application.isInDeveloper()){application.output('IDfiles for '+pcmkLine.piecemark+' '+pcmkLine.spoolfile+' '+pcmkLine.sheet)}
		var pRec = {piecemark:piecemark,grade:'',parent_piecemark:'',finish:'',sheet_id:dsSheetArray['_'+sheet]};
		var uniquePcmk = uniquePiecemark(pRec);
		if (!dsPiecemarkArray[uniquePcmk]){
			application.output('unknown piecemark');
			continue
		}

		var piecemarkId = application.getUUID(dsPiecemarkArray[uniquePcmk]);
		if (dsIdfileListByPm[piecemarkId]){ //list of idfiles for this piecemark
			var found = false;
			/** @type {QBSelect<db:/stsservoy/idfiles>} * /
			var q = databaseManager.createSelect('db:/stsservoy/idfiles');
			// only one idfile per pipe piecemark
			q.result.add(q.columns.idfile_id);
			q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
			q.where.add(q.columns.piecemark_id.eq(piecemarkId));
			q.where.add(q.columns.delete_flag.isNull);
			var R = databaseManager.getFoundSet(q); * /
			/ ** @type {JSFoundSet<db:/stsservoy/idfiles>} * /
			var rec = null; var recIdx = 1;
			while (rec = R.getRecord(recIdx++)){
				if (dsIdfileListByPm.indexOf(rec.idfile_id) == -1){dsIdfileListByPm.push(rec.idfile_id)}
			} */
			for (var idx2 = 0;idx2 < dsIdfileListByPm[piecemarkId].length;idx2++){
				found = true;
				dsIdfileListByPm[piecemarkId][idx2];//return first for now, the piecemark:idfile is 1:1
				break;
			}
			continue;
		}
		var formData = forms.import_performance_setting;
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = createIdfileRecord(uniquePcmk,piecemarkId,formData.insSeqNumber,'',null,1,1,0,'');
		//idfRec.current_load_id;
		rec.edit_date = perfImportDate;
		rec.id_creation_date = perfImportDate;
		
		rec.original_employee = globals.session.employeeId;
		rec.id_area = formData.insArea; // size 10
		rec.shop_order = formData.insJobSO;
		rec.sequence_id = dsSequenceArray['_'+formData.insSeqNumber];
		if (!dsIdfileListByPm[piecemarkId]){dsIdfileListByPm[piecemarkId] = []}
		dsIdfileListByPm[piecemarkId].push(rec.idfile_id);
	}
	databaseManager.commitTransaction();
}
/**
 * Change an array of objects into a view table
 * @param {JSEvent} event
 * @param arrayName
 * @param formName
 *
 * 
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"1BE21BDA-0D00-46BC-B155-69004995490F"}
 */
function viewCTableToForm(event,arrayName, formName){
	scopes.jobs.removeFormHist(formName+'_table');
	tableOrderingData = tablePrefsPreLoad(formName+'_table');
	var dsName = 'tableDS';
	var newDsName = dsName; var count = 1;
	while (databaseManager.dataSourceExists('mem:'+newDsName)){
		newDsName = dsName+count++;
	}
    var sourceTypes = [];
	/** @type  {JSDataSet} */
	browseFS2[formName] = databaseManager.createEmptyDataSet();
	/** @type  {JSDataSet} */
	var dataset = browseFS2[formName];
	var toBeCount = 0;
	//var jj = databaseManager.createEmptyDataSet();
	if (arrayName.length == 0){ // assoc array of sheet objects
		var firstShow = true;
		for (var sheet in arrayName) {
			toBeCount++;
			if (typeof arrayName[sheet].length != 'number'){ //bom
				id2 = 1;
				newArray = new Array();
				dataObj = arrayName[sheet];
				for (item in dataObj){
					if (firstShow){
						dataset.addColumn(item,id2++,JSColumn.TEXT);sourceTypes.push(JSColumn.TEXT)
					}
					/** @type {String} */
					var data = dataObj[item];
					if (data && typeof data !== 'string'){data = data.toDateString()}
					newArray.push(data);
				}
				toBeCount++;
				firstShow = false;
				dataset.addRow(newArray);				

			} else {//border
				for (var index = 0;index < arrayName[sheet].length;index++){
					var id2 = 1;
					var newArray = new Array();
					var dataObj = arrayName[sheet][index];
					for (var item in dataObj){
						if (firstShow){dataset.addColumn(item,id2++,JSColumn.TEXT);sourceTypes.push(JSColumn.TEXT)}
						newArray.push(dataObj[item].toString());
					}
					firstShow = false;
					dataset.addRow(newArray);
					toBeCount++;
					if (newArray.length != dataset.getMaxColumnIndex()){
						application.output('wrong columns entered '+newArray.length);
					}
				}
			}
		}
	} else { // indexed array of objects
		firstShow = true; id2 = 1;
		for (index = 0;index < arrayName.length;index++){
			newArray = new Array();
			for (item in arrayName[index]){
				if (firstShow){dataset.addColumn(item,id2++,JSColumn.TEXT);sourceTypes.push(JSColumn.TEXT)}
				newArray.push(arrayName[index][item])
			}
			
			firstShow = false;
			dataset.addRow(newArray);
			toBeCount += 3;
		}
	}
	var countFrm = forms.import_performance_bom;
	var currentView = forms.import_performance_validation.currentView;
	if (currentView.search('bom') != -1){
		countFrm.importBoms = toBeCount;
	}
	if (currentView.search('border') != -1){
		countFrm.importBorders = toBeCount;
	}
	if (currentView.search('pcmk') != -1){
		countFrm.importPcmks = toBeCount;
	}

		
	forms.import_performance_setting.importCount = countFrm.importBoms+countFrm.importBorders+countFrm.importPcmks;
	versionForm = globals.getInstanceForm(null);
	var dataSource = dataset.createDataSource(newDsName,sourceTypes);
	viewBTableCreateForm2(formName,dataSource);
	var win = application.createWindow('Preview Data', JSWindow.MODAL_DIALOG);
	win.show(formName);
}
