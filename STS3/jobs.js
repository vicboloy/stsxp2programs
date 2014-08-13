/**
* @type abcPrinterList {Array} Array containing units of measure
 *
 * @properties={typeid:35,uuid:"4E21A316-7E58-4E95-86A4-2D8FAEEDF8F3",variableType:-4}
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
 * @properties={typeid:35,uuid:"02B9543F-345C-4593-8040-1815159F3615",variableType:-4}
 */
var aLabelType = new Array;
aLabelType.push("Raw Matl");
aLabelType.push("Serial #");
aLabelType.push("Serial01");
aLabelType.push("Standard");
/**
 * @type lanUsers {Array} lanUsers Array containing units of measure
 *
 * @properties={typeid:35,uuid:"A543810F-CC73-4F16-A330-E50E11B16632",variableType:-4}
 */
var lanUsers = new Array;
/**
 * @properties={typeid:35,uuid:"C21C7885-423A-458D-A0AC-E90ACF5D7D37",variableType:-4}
 */
var importResults = [];
/**
 * @properties={typeid:35,uuid:"C2F4D612-6B67-4D98-A897-BE724811CB53",variableType:-4}
 */
var importErrors = [];
/**
 * Array for all labels by unique piecemark and sequence.
 * piecemark_sequence
 * @properties={typeid:35,uuid:"A877E055-7119-4979-9401-CF712A1865B9",variableType:-4}
 */
var importLabelCounts = [];
/**
 * @properties={typeid:35,uuid:"14A210F9-34D2-4D24-8E4E-95AE97FCF96B",variableType:-4}
 */
var mappedFormatArray = [];
/**
 * @properties={typeid:35,uuid:"1C39F0C7-0609-47D5-AF72-C34E9A51E89F",variableType:-4}
 */
var mappedFormatArrayDescrips = [];
/**
 * Piecemarks added to the job during import.
 * @properties={typeid:35,uuid:"D30A3E84-E690-4C4F-AF7E-C42D6ACDE301",variableType:-4}
 */
var insertedPiecemarks = [];
/**
 * Idfiles added to the job during import.
 * @properties={typeid:35,uuid:"E6D5018E-D7D9-42CF-BED5-916C278D2E44",variableType:-4}
 */
var insertedIdfiles = [];
/**
 * Barcodes added to the job during import.
 * @properties={typeid:35,uuid:"F2ACBCCA-AF76-4140-BB12-1EBF816D637E",variableType:-4}
 */
var insertedBarcodes = [];
/**
 * Idfiles deleted upon import.  idfile_id pushed.
 * @properties={typeid:35,uuid:"1405113A-63BC-4CEA-81B6-4783C3AE5B29",variableType:-4}
 */
var deletedIdfiles = [];
/**
 * Barcodes deleted upon import. barcode_id pushed.
 * @properties={typeid:35,uuid:"E8B59730-0AB5-4F36-935A-3867C94E91DA",variableType:-4}
 */
var deletedBarcodes = [];
/**
 * Piecemarks deleted upon import.  piecemark_id pushed.
 * @properties={typeid:35,uuid:"0850D05A-D4AB-458C-AE36-1C84684E4BE5",variableType:-4}
 */
var deletedPiecemarks = [];
/**
 * @properties={typeid:35,uuid:"B0537C89-1A5D-49F3-AB0E-1B48C3102D29",variableType:-4}
 */
var browseTable = [];
/**
 * @properties={typeid:35,uuid:"288F5458-B8B4-4571-B4DD-8377CE856783",variableType:-4}
 */
var browseFieldOrder = [];
/**
 * @properties={typeid:35,uuid:"82F23C4D-B38B-49FD-B850-6A577B56F83A",variableType:-4}
 */
var dsBrowse = null;
/**
 * @properties={typeid:35,uuid:"17D0F819-B25D-4BFB-9E3E-EC5DEB88CDE3",variableType:-4}
 */
var browseDatasource = null;
/**
 * @properties={typeid:35,uuid:"2208D6CF-B80A-4D01-B7AD-3B57C9E2C3AC",variableType:-4}
 */
var fsBrowse = null;
/**
 * @properties={typeid:35,uuid:"21E07FB4-9806-44F4-B42D-DFC7172427EB",variableType:-4}
 */
var browseArray = [];
/**
 * @properties={typeid:35,uuid:"E6FF48A0-2A3F-4E63-87E3-845825030B68",variableType:-4}
 */
var dsSheets = null;
/**
 * Index into dsSheets by sheet_id.
 * dsSheetList.rowIndex = index. dsSheets is sheet_record index.
 * @properties={typeid:35,uuid:"6A3705A7-4763-41BA-AB78-561ABCF7B280",variableType:-4}
 */
var dsSheetList = [];
/**
 * Sheet_id indexed by unique sheet_number.
 * dsSheetArray["_"+sheet_number] = sheet_id;
 * @properties={typeid:35,uuid:"9E8C080F-B2AB-4156-9664-30F00DBA2108",variableType:-4}
 */
var dsSheetArray = [];
/**
 * @properties={typeid:35,uuid:"EA531D1D-DF62-4C69-9FDF-705742718596",variableType:-4}
 */
var dsTossedList = [];
/**
 * @properties={typeid:35,uuid:"9748D291-D502-4870-9F05-31DC81AE5C01",variableType:-4}
 */
var dsTossedArray = [];
/**
 * @properties={typeid:35,uuid:"2C696A9F-0A79-4626-A81B-3ED1B2BAB34C",variableType:-4}
 */
var dsTossed = null;
/**
 * Array of piecemark records, indexed by integer. 
 * @properties={typeid:35,uuid:"C2B44F80-9A2F-4853-9AFB-5882EF6896F8",variableType:-4}
 */
var dsPiecemarks = null;
/**
 * 
 * @properties={typeid:35,uuid:"38E6551E-2750-46D3-B470-5F8009B628EA",variableType:-4}
 */
var dsDiffPiecemarks = [];
/**
 * Index integer into dsPiecemarks, indexed by piecemark_id.
 * dsPiecemarkList[piecemark_id] = index.  dsPiecemarks[index] is piecemark_record.
 * @properties={typeid:35,uuid:"20F33FCC-F415-4D88-86DD-9B4E346562EF",variableType:-4}
 */
var dsPiecemarkList = [];
/**
 * Index into a piecemark_id array by uniqueness of a piecemark, identified within unique piecemark function.
 * Unique piecemark is defined by function uniquePiecemark().
 * dsPiecemarkArray[unique_piecemark] = piecemark_id.
 * @properties={typeid:35,uuid:"5BCCA6D0-E161-4130-915E-770E5E547317",variableType:-4}
 */
var dsPiecemarkArray = [];
/**
 * Array of idfiles, indexed by integer.
 * @properties={typeid:35,uuid:"3E4E4833-8DE8-4D58-9BFD-5633D5B5D6A2",variableType:-4}
 */
var dsIdfiles = null;
/**
 * @properties={typeid:35,uuid:"2ED014E1-A1B9-4C0C-B517-DCF2030F5AA8",variableType:-4}
 */
var dsDiffIdfiles = [];
/**
 * Holds idfile_id, indexed by integer that maps to dsIdfiles. 
 * @properties={typeid:35,uuid:"1410BFB8-F727-4037-98FF-2E764017E1C8",variableType:-4}
 */
var dsIdfileList = [];
/**
 * Holds barcode count, indexed by id_serial_number_id.
 * Holds the barcode count array per idfiles of a piecemark, indexed by unique piecemark for that piecemark.
 * dsIdfileArray[uniquePiecemark+"_"+sequence_id]][barcode1count,barcode2count, barcode3count...]
 * @properties={typeid:35,uuid:"C10FFB81-5E94-4EAA-9AD0-337FA0340022",variableType:-4}
 */
var dsIdfileArray = [];
/**
 * List of idfiles for a piecemark, indexed by piecemark_id.
 * @properties={typeid:35,uuid:"BB02953F-F65B-4862-85E2-AF9E67B690BF",variableType:-4}
 */
var dsIdfileListByPm = [];
/**
 * @properties={typeid:35,uuid:"BD23E2C8-A060-43F2-AFFF-ABF3A3FA29E4",variableType:-4}
 */
var dsIdfileCounts = [];
/**
 * @properties={typeid:35,uuid:"1AF39EAD-81DB-479A-B585-3B32F189E417",variableType:-4}
 */
var dsBarcodes = null;
/**
 * @properties={typeid:35,uuid:"CEF296A9-6A8F-4E92-A024-C267461B2B24",variableType:-4}
 */
var dsBarcodeList = [];
/**
 * Holds id_serial_number_id, indexed by id_serial_number/barcode.
 * dsBarcodeArray[id_serial_number_id] = dsBarcodes[index_integer].
 * @properties={typeid:35,uuid:"FE1D72BB-7F94-49F5-B70A-D37E35D5036F",variableType:-4}
 */
var dsBarcodeArray = [];
/**
 * @properties={typeid:35,uuid:"ED66984C-AB7B-4F5F-90DA-049351B78692",variableType:-4}
 */
var dsLots = null;
/**
 * @properties={typeid:35,uuid:"729647E7-A3C6-45A0-B04F-C479908ABB7C",variableType:-4}
 */
var dsLotList = [];
/**
 * @properties={typeid:35,uuid:"02FD2640-D907-46BD-BCA7-85DAB90F7271",variableType:-4}
 */
var dsLotArray = [];
/**
 * @properties={typeid:35,uuid:"E76197EF-9F9D-4F6F-9194-1940A287CD1C",variableType:-4}
 */
var newRow = [];
/**
 * @properties={typeid:35,uuid:"9384E4F9-0E8A-43D0-A455-0AAB48590750",variableType:-4}
 */
var nullRow = [];
/**
 * dsSequence records. dsSequences[index] = sequence_record.
 * @properties={typeid:35,uuid:"C1C4A1F7-415B-45E8-9C63-3271833C6E86",variableType:-4}
 */
var dsSequences = null;
/**
 * Sequence List. Index into dsSequences.
 * dsSequenceList[sequence_id] = index.
 * @properties={typeid:35,uuid:"2BFC2F12-EAD3-409E-AF1D-2C4D08722E76",variableType:-4}
 */
var dsSequenceList = [];
/**
 * Sequences indexed by Sheet_number. Since sheet_number may be blank or non-indexed, it is 
 * prefixed by "_".  dsSequenceArray["_"+sequence_number] = sequence_id
 * @properties={typeid:35,uuid:"F8D6D4A5-DC0B-4EAD-B899-E1E522245E02",variableType:-4}
 */
var dsSequenceArray = [];
/**
 * @properties={typeid:35,uuid:"7445E671-3137-437B-9240-AFE9CCE38848",variableType:-4}
 */
var usedFields = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B57177F-1D0C-4856-8047-692D87829775"}
 */
var importJobNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31C27CBE-0E9D-4730-A03C-922F0BA707C8"}
 */
var importDate = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9CCA6C50-C08B-48C2-8788-11261608EA40"}
 */
var importJobName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"176425AB-BB7A-45A3-81D2-523AF5D2345C"}
 */
var importFormatType = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"81E84729-E1EF-47E4-A897-243F3CB748EA"}
 */
var barcodeLast = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B9EDAD34-EE02-46C6-88B8-F26A6052F795"}
 */
var barcodePrefix = "";
/**
 * @properties={typeid:35,uuid:"09E04C8F-95CA-45E4-9FF5-AFCBA9D21A3D",variableType:-4}
 */
var jobName = forms.kiss_option_import.jobName;
/**
 * @properties={typeid:35,uuid:"4D045C72-EE06-4B4A-935E-B36322243638",variableType:-4}
 */
var jobDate = forms.kiss_option_import.jobDate;
/**
 * @properties={typeid:35,uuid:"0A52C811-0F92-48C2-937A-B107E61B09CA",variableType:-4}
 */
var jobMetric = forms.kiss_option_import.jobMetric;

/**
 * @properties={typeid:35,uuid:"0581EEED-9060-47E7-AD2D-BD9A5BC4BEDB",variableType:-4}
 */
var keepMinors = forms.kiss_option_import.keepMinors;
/**
 * @properties={typeid:35,uuid:"2E65EA10-17FD-43E5-9FBC-63ACAE67D007",variableType:-4}
 */
var weightPerID = scopes.prefs.wtPrompt;
/**
 * @properties={typeid:35,uuid:"56431830-8634-4400-8776-5593CA0F6B6C",variableType:-4}
 */
var quantityPerID = scopes.prefs.qtyPrompt;
/**
 * @properties={typeid:35,uuid:"C7DADD30-8A8C-4DE1-8DEE-F39B8E267139",variableType:-4}
 */
var excludeFS = forms.kiss_option_import.transitionFSsink;
/**
 * @properties={typeid:35,uuid:"77AE18E2-8E70-4AA7-83EF-B33D954C53E2",variableType:-4}
 */
var excludeStr = forms.kiss_option_import.jobImportExc;
/**
 * @properties={typeid:35,uuid:"0BA760FD-232C-4D8A-B363-633BDBF25F94",variableType:-4}
 */
var retainStr = forms.kiss_option_import.jobImportSum;
/**
 * @properties={typeid:35,uuid:"84229498-2E07-4027-9015-ED388057C9F0",variableType:-4}
 */
var fields = forms.kiss_option_import.fieldOrderTempTable;
/**
 * @type {String}
 * Hold customerIDs for a single job number, usually one, but will be additional customer ids.
 * @properties={typeid:35,uuid:"82F8A27F-0E0A-402C-8732-A03DD34C71D8",variableType:-4}
 */
var customerIDs = [];
/**
 * Upon load get jobs in array 
 * @properties={typeid:35,uuid:"1510C6F6-171F-4C1C-A992-954D08577746",variableType:-4}
 */
var jobsArray = [];
/**
 * Upon load get customers in array
 * @properties={typeid:35,uuid:"CE6A53F9-5747-4B66-807C-622684996A60",variableType:-4}
 */
var customersArray = [];
/**
 * @properties={typeid:35,uuid:"01A0825D-70F3-4489-A9AF-CE64541BD976",variableType:-4}
 */
var jobIDs = [];
/**
 * @type {String}
 * Id for browsing under total table browsing.
 * @properties={typeid:35,uuid:"0D3F9CAD-31BC-4D34-8540-C01ED3BF5BE6"}
 */
var browseJobID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"352B2DEE-67EB-40F7-A0F5-3652043A0910"}
 */
var jobUnderCustomer = "";
/**
 * List of piecemarks under selected job
 * @properties={typeid:35,uuid:"1F0B2EA3-BF51-40A1-A817-F435786033CE",variableType:-4}
 */
var jobPiecemarks = [];
/**
 * List of sheets under selected job
 * @properties={typeid:35,uuid:"57E9EC31-2CA6-42D8-8713-F4D96D70A535",variableType:-4}
 */
var jobSheets = [];
/**
 * list of sequences under selected job
 * @properties={typeid:35,uuid:"3AA03172-349A-4940-AE5E-411EEA057923",variableType:-4}
 */
var jobSequences = [];
/**
 * list of SOs undder selected job
 * @properties={typeid:35,uuid:"EB4E667D-2B4D-4918-95BC-1EE00F553341",variableType:-4}
 */
var jobSONums = [];
/** 
 * List of Loads under selected job
 * @properties={typeid:35,uuid:"401864F5-0BBB-4687-A460-9897E8C0AF0C",variableType:-4}
 */
var jobLoadNums = [];
/**
 * List of piecemark references under selected job
 * @properties={typeid:35,uuid:"F961D489-858C-4537-BC75-627C8E0207A1",variableType:-4}
 */
var jobPcmkRefs = [];
/**
 * List of FabShops under selected job
 * @properties={typeid:35,uuid:"7F520CCD-6C7D-4EEE-B2EF-B9C9868F8549",variableType:-4}
 */
var jobFabShops = [];
/**
 * List of Areas under selected job
 * @properties={typeid:35,uuid:"911811AB-62BE-4883-AAD4-B3099367326B",variableType:-4}
 */
var jobAreas = [];
/**
 * List of batches under selected job
 * @properties={typeid:35,uuid:"0C4A15D3-2CE1-4DBB-8BC3-28E8B05C986E",variableType:-4}
 */
var jobBatches = [];
/**
 * List of Cost of Work Codes under selected job
 * @properties={typeid:35,uuid:"E5560014-B24E-4E0E-BDFE-95E98D0D57D2",variableType:-4}
 */
var jobCowCodes = [];
/**
 * Selected job's total weight
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F85F4E54-3EAB-4D48-8379-CE5009F8EB17",variableType:4}
 */
var jobWeightTotal = 0;
/**
 * Selected job's number of barcodes
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"76D1DC7F-2B17-4004-A8C9-9B9CC19B8221",variableType:4}
 */
var jobBarcodes = 0;
/**
 * Selected job's total piece count
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0439F1D8-8BF3-4161-AD14-BD94C82A6DB7",variableType:4}
 */
var jobPiecesCount = 0;
/**
 * Selected job's unique piecemark count
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A7A8B1EE-980A-43C5-8BBF-2750D1DA56A1",variableType:4}
 */
var jobPcmkCount = 0;
/**
 * Holds the current customer record for import.
 * @properties={typeid:35,uuid:"7BC883A5-863E-4975-B6AF-801A0C32CABC",variableType:-4}
 */
var custRec = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D7955C3D-2918-48D4-87A0-FB2ABE281306"}
 */
var customerName = "";
/**
 * @properties={typeid:35,uuid:"12AA24A0-7E1D-462A-BCEC-06DCA2F5D61C",variableType:-4}
 */
var columnNames = forms.kiss_option_import.columnNames; // columnNames indexed into array
/**
 * Keep separate count for job load information browsing.
 * @type {String}
 * @properties={typeid:35,uuid:"F4DAEC4A-73A1-490F-AE39-D8E9CFFF5DDA"}
 */
var loadCountsJobId = null;
// -------------------------------------------------------------------------------------------------------------------
/**
 * TODO generated, please specify type and doc for the params
 * 
 *
 * @properties={typeid:24,uuid:"6E2CF020-94D1-47F6-9386-AA2D60663083"}
 */
function readLots(){
	var length = dsSequences.getMaxRowIndex();
	if (length == 0){return}
	var textList = "("; var comma = ",";
	for (var index2 = 0;index2 < length;index2++){
		if (index2 == length-1){comma=""}
		textList = textList + "\'"+dsSequenceList[index2]+"\'"+comma;
	}
	textList += ")";
	var maxReturnedRows = -1;
	var query = "SELECT * " +
		"FROM lots " +
		"WHERE sequence_id IN " + textList + " " +
		" AND delete_flag IS null " +
		"AND tenant_uuid = ? ";
	var args = [globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	dsLots = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	dsLotList = []; // lots reference sequences, so grab list of sequences for this job
	dsLotArray = [];
	var lotsLength = dsLots.getMaxRowIndex();
	for (var index = 1;index <= lotsLength;index++){
		dsLots.rowIndex = index;
		dsLotList[dsLots.sequence_id] = index;
		var unique = dsLots.lot
		dsLotArray[unique] = dsLots.lot_id;
	}
	application.output("lots "+lotsLength);
}
/**
 * @properties={typeid:24,uuid:"572C709C-5984-4FAA-9EFC-CB7738A8FE28"}
 */
function readBarcodes(jobID){
	/** @type {Array} */
	dsBarcodeList = [];
	if (dsIdfiles == null || dsIdfiles.getMaxRowIndex() == 0){return}
	var rows = dsIdfiles.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		dsIdfiles.rowIndex = index;
		var serialIDrec = dsIdfiles;
		var serialID = serialIDrec.id_serial_number_id;
		if (dsBarcodeList.indexOf(serialID) != -1){continue}
		dsBarcodeList.push(serialID)
		//tempArray[serialID] = index;
	}
	var textList = "("; var comma = ",";
	for (var index2 = 0;index2 < dsBarcodeList.length;index2++){
		if (index2 == dsBarcodeList.length-1){comma=""}
		textList = textList + "\'"+dsBarcodeList[index2]+"\'"+comma;
	}
	textList += ")";
	var maxReturnedRows = -1;
	var query = "SELECT * " +
		"FROM id_serial_numbers " +
		"WHERE id_serial_number_id IN " + textList + " " +
		" AND delete_flag IS null " +
		"AND tenant_uuid = ? ";
	var args = [globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	dsBarcodes = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	dsBarcodeArray = [];
	dsBarcodeList = [];
	var length = dsBarcodes.getMaxRowIndex();
	for (var index3 = 1;index3 <= length;index3++){
		dsBarcodes.rowIndex = index3;
		var unique = dsBarcodes.id_serial_number;
		dsBarcodeArray[unique] = index3;
	}
	scopes.jobs.jobBarcodes = dsBarcodes.getMaxRowIndex();
	application.output("barcodes "+scopes.jobs.jobBarcodes);
}
/**
 * @properties={typeid:24,uuid:"CE89DA18-B60E-4ECB-A003-860BED5AD4B6"}
 */
function readSequences(jobID){
	var seqNameList = scopes.jobs.jobSheets;
	dsSequenceList = [];
	dsSequences = null;
	var maxReturnedRows = -1;
	var query = "SELECT * " +
		"FROM sequences " +
		"WHERE job_id = ? " +
		" AND delete_flag IS null " +
		"AND tenant_uuid = ? ";
	var args = [jobID,globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	dsSequences = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	var rows = dsSequences.getMaxRowIndex();
	dsSequenceArray = [];
	for (var index = 1;index <= rows;index++){
		dsSequences.rowIndex = index;
		var unique = "_"+dsSequences.sequence_number;
		if (seqNameList.indexOf(unique) == -1){
			seqNameList.push(unique);
		}
		dsSequenceArray[unique] = dsSequences.sequence_id;
		dsSequenceList[dsSequences.sequence_id] = index;
	}
	application.output("sequences "+dsSequences.getMaxRowIndex());
}
/**
 * @properties={typeid:24,uuid:"43E161F1-BDDC-4019-9B37-E2263D4C2866"}
 */
function readIdfiles(){
	dsIdfileList = [];
	dsIdfiles = null;
	dsIdfileArray = [];
	dsIdfileListByPm = [];
	if (dsPiecemarks == null){return}
	if (dsPiecemarks.getMaxRowIndex() == 0){return}
	var textList = "("; var comma = ",";
	var length = dsPiecemarks.getMaxRowIndex();
	for (var index2 = 0;index2 < length;index2++){
		if (index2 == length-1){comma=""}
		dsPiecemarks.rowIndex = index2;
		textList = textList + "\'"+dsPiecemarks.piecemark_id+"\'"+comma;
	}
	textList += ")";
	var maxReturnedRows = -1;
	var query = "SELECT * " +
		"FROM idfiles " +
		"WHERE piecemark_id IN " + textList + " " +
		" AND delete_flag IS null " +
		"AND tenant_uuid = ? ";
	var args = [globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	dsIdfiles = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	var rows = dsIdfiles.getMaxRowIndex();
	// unique is piecemark_id, barcodeCount, sequence_id, lot_id
	///dsIdfileList.push('blank');
	for (var index = 1;index <= rows;index++){
		dsIdfiles.rowIndex = index;
		dsIdfileList.push(dsIdfiles.idfile_id);
		if (dsIdfileArray[dsIdfiles.id_serial_number_id] != null) {
			dsIdfileArray[dsIdfiles.id_serial_number_id]++;
		} else {
			dsIdfileArray[dsIdfiles.id_serial_number_id] = 1;
		}
	}
	var barcodeRecorded = [];
	for (index = 1;index <= rows;index++){
		dsIdfiles.rowIndex = index;
		//var dsIdfileRow = dsIdfiles;
		//dsPiecemarks.rowIndex = dsPiecemarkList[dsIdfiles.piecemark_id];
		//var piecemarkLine = dsPiecemarks;
		//var seqId = dsIdfiles.sequence_id;
		//var unique = uniquePiecemark(dsPiecemarks);
		var uniqueIdfile = dsIdfiles.piecemark_id+"_"+dsIdfiles.sequence_id;
		var barcodeId = dsIdfiles.id_serial_number_id;
		var barcodeCount = dsIdfileArray[barcodeId];
		if (dsIdfileArray[uniqueIdfile] == null){
			dsIdfileArray[uniqueIdfile] = [];
		}//foreach each idfile, get piecemark, if barcode count isn't collected, then store the number in the array
		// the length of the array is the number of labels, the count is for each label
		if (barcodeRecorded.indexOf(barcodeId) == -1){
			dsIdfileArray[uniqueIdfile].push(barcodeCount);
			barcodeRecorded.push(barcodeId);
			//application.output(unique+" "+barcodeCount);
		}
		if (!dsIdfileListByPm[dsIdfiles.piecemark_id]){
			dsIdfileListByPm[dsIdfiles.piecemark_id] = []
		}
		dsIdfileListByPm[dsIdfiles.piecemark_id].push(dsIdfiles.idfile_id);
	}
	application.output("idfiles "+dsIdfileList.length);
}
/**
 * @properties={typeid:24,uuid:"52527FC9-05AE-4ADE-9BB0-3023FB80591D"}
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
	var args = [globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	dsTossed = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	dsTossedArray = [];
	var rows = dsTossed.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		dsTossed.rowIndex = index;
		dsTossedList.push(dsTossed.piecemark_id);
		// unique to piecemark, grade, sequence, lot
		//var unique = dsPiecemarks.piecemark+","+dsPiecemarks.material+","+dsPiecemarks.grade;
		////var unique = dsTossed.piecemark+","+dsTossed.parent_piecemark+","+dsTossed.sheet_id+","+dsTossed.grade+","+dsTossed.finish;
		var unique = uniquePiecemark(dsTossed)
		dsTossedArray[unique] = dsTossed.piecemark_id;
	}
	application.output("summarized "+dsTossedList.length);
}
/**
 * @properties={typeid:24,uuid:"0270F289-5EB9-4BF9-9E88-8823DC00E8EB"}
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
	var args = [globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	dsPiecemarks = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	dsPiecemarkArray = [];
	var rows = dsPiecemarks.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		dsPiecemarks.rowIndex = index;
		dsPiecemarkList[dsPiecemarks.piecemark_id] = index;
		// unique to piecemark, grade, sequence, lot
		//var unique = dsPiecemarks[index].piecemark+","+dsPiecemarks.material+","+dsPiecemarks.grade;
		////var unique = dsPiecemarks.piecemark+","+dsPiecemarks.parent_piecemark+","+dsPiecemarks.sheet_id+","+dsPiecemarks.grade+","+dsPiecemarks.finish;
		////if (dsPiecemarks[index].piecemark == ""){
		////	unique = dsPiecemarks.material+","+dsPiecemarks.grade+","+dsPiecemarks.finish; 
		////}
		var unique = uniquePiecemark(dsPiecemarks);
		dsPiecemarkArray[unique] = dsPiecemarks.piecemark_id;
	}
	query = "SELECT sum(item_quantity),sum(item_weight*item_quantity) " +
	"FROM piecemarks " +
	"WHERE sheet_id IN " + textList + " "+
	" AND delete_flag IS null " +
	"AND tenant_uuid = ? ";
	args = [globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	var weightTotal = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	scopes.jobs.jobWeightTotal  = weightTotal[0][1]; 	
	scopes.jobs.jobPiecesCount  = weightTotal[0][0]; 	
	scopes.jobs.jobPcmkCount = dsPiecemarks.getMaxRowIndex();
	application.output("piecemarks "+scopes.jobs.jobPcmkCount);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param jobID
 *
 * @properties={typeid:24,uuid:"867AA77B-A76C-4F66-A3DD-F80ACD6A0699"}
 */
function readSheets(jobID){
	var sheetNameList = scopes.jobs.jobSheets;
	dsSheetList = [];
	dsSheets = null;
	dsSheetArray = [];
	var maxReturnedRows = -1;
	var query = "SELECT * " +
		"FROM sheets " +
		"WHERE job_id = ?" +
		" AND delete_flag IS null " +
		"AND tenant_uuid = ?";
		var args = [];
		args.push(jobID);
		args.push(globals.secCurrentTenantID)
	/** @type {JSDataSet} */
	dsSheets = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	var rows = dsSheets.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		dsSheets.rowIndex = index;
		dsSheetList[dsSheets.sheet_id] = index;
		var unique = "_"+dsSheets.sheet_number
		dsSheetArray[unique] = dsSheets.sheet_id;
		if (sheetNameList.indexOf(unique) == -1){sheetNameList.push(unique);}
	}
	application.output("sheets "+dsSheets.getMaxRowIndex());
}
/**
 * @properties={typeid:24,uuid:"4C13DDBB-0E51-42C1-B575-7426FA1B0419"}
 */
function readResetLabelQuants(){
	var retainFS = forms.kiss_option_import.transitionFS;
	var rows = retainFS.getMaxRowIndex();
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		var record = retainFS;
		var unique = uniquePiecemark(record);
		var uniqueIdfile = dsPiecemarkArray[unique]+"_"+dsSequenceArray["_"+record.sequence_number]
		if (!dsIdfileArray[uniqueIdfile]){continue}
		var length = dsIdfileArray[uniqueIdfile].length;
		if (record.barcode_qty*1 == length*1){continue}
		record.barcode_qty = length*1;
		var itemQuant = (record.sequence_quantity == "") ? record.item_quantity : record.sequence_quantity;
		var bcInfo = createBCnums(length,itemQuant,record.item_weight)
		record.total_label_qty = bcInfo.per;
		record.set_bc_qty = bcInfo.full;
		record.last_bc_qty = bcInfo.last;
		record.item_weight = bcInfo.totwt;
	}
}
/**
 * @properties={typeid:24,uuid:"86255815-5347-479B-AF2D-55778E4DF0EB"}
 */
function readPieceTables(){
	var jobID = scopes.jobs.jobUnderCustomer;
	if (!jobID || jobID == ""){return}
	readSheets(jobID);
	readPiecemarks();
	readSummedMarks();
	readIdfiles();
	readBarcodes(jobID);
	readSequences(jobID);
	readLots();
}
/**
 * @properties={typeid:24,uuid:"DFD9FD73-F260-4519-A662-B93F09F3E2BA"}
 */
function readAsIsTable(){
	var dsAsis = null;
	dsAsis = databaseManager.createEmptyDataSet();
	var jobID = scopes.jobs.jobUnderCustomer;
}
/**
 * @properties={typeid:24,uuid:"9A549511-92BB-4AE0-8389-6D2EBBEF238E"}
 */
function readBTable(){
	history.removeForm('loads_browse_tab');
	solutionModel.removeForm('loads_browse_tab');
	var jobID = scopes.jobs.jobUnderCustomer;
	readPieceTables();
	if (!jobID || jobID == ""){return}
	buildBTable();
	loadBTable();
	null;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sourceDb
 *
 * @properties={typeid:24,uuid:"9DE8FC30-5705-47E1-B2E0-05D7F9AA9A4F"}
 */
function createSummedMarks(sourceDb){
	var jobID = scopes.jobs.jobUnderCustomer;
	var length = sourceDb.getMaxRowIndex();
	/** @type {JSDataSet<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	for (var index = 0;index < length;index++){
		sourceDb.rowIndex = index+1;
		////var unique = sourceDb.piecemark+","+sourceDb.parent_piecemark+","+dsSheetArray["_"+sourceDb.sheet_number]+","+sourceDb.grade+","+sourceDb.finish;
		var unique = uniquePiecemark(sourceDb);
		if (dsPiecemarkArray[unique] == null){
			var fsRec = sourceDb;		
			var recIndex = fs.newRecord();
			var rec = fs.getRecord(recIndex);
			rec.job_id = jobID;
			rec.tenant_uuid = scopes.globals.secCurrentTenantID;
			rec.material = fsRec.material;
			rec.finish = fsRec.finish;
			rec.grade = fsRec.grade;
			rec.item_length = fsRec.item_length*1;
			rec.item_quantity = fsRec.item_quantity;
			rec.item_weight = fsRec.item_weight*1;
			rec.parent_piecemark = fsRec.parent_piecemark
			rec.piecemark = fsRec.piecemark;
			rec.sheet_id = dsSheetArray["_"+fsRec.sheet_number];
			rec.delete_flag = 11; // 1+1 is summarization record
			rec.edit_date = new Date();
			dsPiecemarkArray[unique] = rec.piecemark_id;
		}
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param seqId
 *
 * @properties={typeid:24,uuid:"5F8167FE-C1DF-499A-835E-497FE1260FF2"}
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
 * TODO generated, please specify type and doc for the params
 * @param sequenceId
 *
 * @properties={typeid:24,uuid:"4A2A8BE1-2494-470B-B5F1-029F6E69E481"}
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
 * TODO generated, please specify type and doc for the params
 * @param barcodeId
 *
 * @properties={typeid:24,uuid:"B868913D-DCB1-4AAE-9249-731F9274C290"}
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
 * TODO generated, please specify type and doc for the params
 * @param sheetId
 *
 * @properties={typeid:24,uuid:"F19577F0-F617-452A-83AF-7208565D45DB"}
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
 * TODO generated, please specify type and doc for the params
 * @param pcmkId
 * 
 *
 * @properties={typeid:24,uuid:"AFA4B946-C698-4D8D-8EE1-37B282DD3BC9"}
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
 * @properties={typeid:24,uuid:"03642EF1-4D23-423D-973C-B7F3DBF03703"}
 */
function loadCurrentJobsRecords(){
	var sheets =forms.kiss_option_import.sheetsFS;
	/*
	 * piecemarks: piecemark, parent_piecemark, sheet_number, grade, finish
	 * sheets: sheet_number
	 * idfiles: piecemark_id, id_serial_number_id, sequence_id, idfile count is number for that piecemark, then to each bc
	 * sequence_number, lot_number, barcode_count 
	 * Has this barcode been printed? 
	 */
	var length = dsPiecemarks.getMaxRowIndex();
	for (var index = 1;index<=length;index++){
		dsPiecemarks.rowIndex = index;
		var pcmkIdfileList = dsIdfileListByPm[dsPiecemarks.piecemark_id];
		var lengthPIL = pcmkIdfileList.length;
		var visited = [];
		for (var index2 = 0; index2 < lengthPIL;index2++){
			var idfileId = pcmkIdfileList[index2];
			dsIdfiles.rowIndex = dsIdfileList.indexOf(idfileId)+1;
			var seqId = dsIdfiles.sequence_id;
			var piecemkIndex = dsPiecemarks.piecemark_id+"_"+seqId;
			if (visited.indexOf(piecemkIndex) != -1) {continue}
			visited.push(piecemkIndex);
			var bcUseArray = dsIdfileArray[piecemkIndex];
			for (var index3 = 0;index3<bcUseArray.length;index3++){
				application.output(' bcs '+piecemkIndex+' seq '+seqId+' labels '+bcUseArray.length+' count '+bcUseArray[index3]);
			}
			// next is to consolidate records into summary lines for comparison to import kiss summary records
		}
	}
}
/**
 * @properties={typeid:24,uuid:"D910BAEA-3615-490B-B018-23B1A4519E11"}
 */
function loadBTable(){
	// start with sheets
	var index = 0; var name = "";
	if (dsIdfiles == null){return}
	var length = dsIdfiles.getMaxRowIndex();
	for (index = 0;index < length;index++){
		newRow = [];
		newRow = nullRow.concat();
		for (var index2 = 1;index2 <= length;index2++){
			name = dsIdfiles.getColumnName(index2)+"_dsIdfiles";
			newRow[browseFieldOrder[name]] = dsIdfiles.getValue(index,index2);
			if (name == "piecemark_id_dsIdfiles"){loadPiecemarks(dsIdfiles.getValue(index,index2));}
			if (name == "id_serial_number_id_dsIdfiles"){loadBarcodes(dsIdfiles.getValue(index,index2));}
			if (name == "sequence_id_dsIdfiles"){loadSequences(dsIdfiles.getValue(index,index2));}
		}
		//application.output(index+" "+newRow.length+" "+newRow);
		var aRow = [];
		aRow = newRow.concat();
		dsBrowse.addRow(aRow);
	}
	// insert sheets
	//	insert piecemarks contained in sheets
	//		insert idfiles contained in piecemarks
	//			insert barcodes for each piecemarks, many-to-one
	//			insert sheets for each piecemarks, many-to-one
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6F0DC9D2-F762-48DB-8986-1B959B8F4C8B"}
 */
function loadTablePrefs(formx){
	if (!formx || formx == ""){
		var formx = controller.getName();
	}
	var formy = forms[formx].elements.tabless.getTabFormNameAt(1);
	var elems = forms[formy].elements;
	/** @type {JSDataSet<db:/stsservoy/preferences2>} */
	var prefsFS = databaseManager.getFoundSet('stsservoy','preferences2');
	for (var index = 0;index < elems.length;index++){
		var colName = elems[index].getName();
		var colDims = elems[index].getLocationX()+","+0+","+elems[index].getWidth();
		if (prefsFS.find()) {
			prefsFS.user_id = -1;
			prefsFS.form_name = formy;
			prefsFS.field_name = colName;
			var index2 = prefsFS.search();
			if (index2 > 0) {
				if (prefsFS.field_value != colDims){
					//application.output('field '+colName+" dims "+colDims+" prefs "+prefsFS.field_value);
					var sets = prefsFS.field_value.split(",");
					elems[index].setLocation(sets[0],sets[1]);
					elems[index].setSize(sets[2],elems[index].getHeight());
				}
			}
		}
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"14DEEB4E-751E-49C1-9413-A3019516DB6D"}
 * @AllowToRunInFind
 */
function saveTablePrefs(event){
	//application.output(event);
	var formx = event.getFormName();
	forms[formx].errorMessage = "Saving table column order.";
	application.updateUI();
	var formy = forms[formx].elements.tabless.getTabFormNameAt(1);
	var elems = forms[formy].elements;
	/** @type {JSDataSet<db:/stsservoy/preferences2>} */
	var prefsFS = databaseManager.getFoundSet('stsservoy','preferences2');
	for (var index = 0;index < elems.length;index++){
		var colName = elems[index].getName();
		var colDims = elems[index].getLocationX()+","+0+","+elems[index].getWidth();
		if (prefsFS.find()) {
			prefsFS.user_id = -1;
			prefsFS.form_name = formy;
			prefsFS.field_name = colName;
			//prefsFS.value_material = rec.shape;
			var index2 = prefsFS.search();
			if (index2 > 0) {
				if (prefsFS.field_value != colDims){
					prefsFS.field_value = colDims;
					databaseManager.saveData(prefsFS);
				}
			} else {
				var newDex = prefsFS.newRecord();
				var newRec = prefsFS.getRecord(newDex);
				newRec.tenant_uuid = globals.secCurrentTenantID;
				newRec.user_id = -1;
				newRec.form_name = formy;
				newRec.field_name = colName;
				//newRec.value_material = rec.shape;
				newRec.field_value = colDims;
				databaseManager.saveData(newRec);
			}
		}
	}
	forms[formx].errorMessage = "Column ordering SAVED.";
}
/**
 * @properties={typeid:24,uuid:"0920030A-EFA9-4626-BDF7-5D62D4C8D963"}
 * @SuppressWarnings(wrongparameters)
 */
function viewBTableAlt(criteria){
	/**
	 * create dataset
	 * load dataset
	 * create columns
	 * dsPiecemarks,dsBarcodes,dsIdfiles,dsSequences,dsLots,dsSheets
	 */
	history.removeForm('loads_browse_tabless2');
	solutionModel.removeForm('loads_browse_tabless2');	
	dsBrowse = null;
	dsBrowse = databaseManager.createEmptyDataSet();
	var win = application.createWindow('Browse Job', JSWindow.WINDOW);

	win.setInitialBounds(10, 10, 800, 700);
	win.title = 'Browse Job';
	win.show('loads_browse2');
	var maxReturnedRows = -1;
	var args = [];
	args.push(scopes.jobs.browseJobID);
/** deleted
	var query = 'select random()*1000000 AS "browsing_id",* from piecemarks p inner join sheets s on p.sheet_id = s.sheet_id '+
	' and s.job_id = ? AND s.delete_flag IS null '+
	' inner join idfiles i on i.piecemark_id = p.piecemark_id AND i.delete_flag IS null '+
	' inner join sequences ss on ss.sequence_id = i.sequence_id inner join '+
	' id_serial_numbers b on b.id_serial_number_id = i.id_serial_number_id ';
	*/
	/**
	 * Left join for records  which may not exist.  inner join for necessary records.
	 */
	var query = 'select random()*1000000 AS "browsing_id",* from piecemarks p '+
	' inner join sheets s on p.sheet_id = s.sheet_id SHT '+
	' and s.job_id = ? AND s.delete_flag IS null PCMK '+
	' inner join idfiles i on i.piecemark_id = p.piecemark_id AND i.delete_flag IS null SONUM FABS AREA PCRL LDN COW LOT PKG'+
	' inner join sequences ss on ss.sequence_id = i.sequence_id SEQN ' +
	' left join loads l on l.load_id = i.current_load_id LDR ' +
	' inner join id_serial_numbers b on b.id_serial_number_id = i.id_serial_number_id ';
	//  PCMK SHT SEQN SONUM LDN LDR PCRL FABS JOBR AREA BTCH COW (LOT) (PKG)
	if (criteria.piecemark){
		query = query.replace('PCMK'," AND p.piecemark IN "+criteria.piecemark);
	} else {
		query = query.replace('PCMK','');
	}
	if (criteria.sheetnum){
		query = query.replace('SHT'," AND s.sheet_number IN "+criteria.sheetnum);
	} else {
		query = query.replace('SHT','');
	}
	if (criteria.seqnum){
		query = query.replace('SEQN'," AND ss.sequence_number IN "+criteria.seqnum);
	} else {
		query = query.replace('SEQN','');
	}
	if (criteria.sonum){
		query = query.replace('SONUM'," AND i.shop_order IN "+criteria.sonum);
	} else {
		query = query.replace('SONUM','');
	}
	if (criteria.batch){
		query = query.replace('BTCH'," AND i.id_batch IN "+criteria.batch);
	} else {
		query = query.replace('BTCH','');
	}
	if (criteria.area){
		query = query.replace('AREA'," AND i.id_area IN "+criteria.area);
	} else {
		query = query.replace('AREA','');
	}
	if (criteria.cow){
		query = query.replace('COW'," AND p.piecemark_cow_code IN "+criteria.cow);// cost_of_work_code (10) ticket#6
	} else {
		query = query.replace('COW','');
	}
	if (criteria.lotnum){
		query = query.replace('LOT'," AND i.lot_id IN "+criteria.lotnum);//ticket#7
	} else {
		query = query.replace('LOT','');
	}
	if (criteria.pkgnum){
		query = query.replace('PKG'," AND i.ft_pkgid IN "+criteria.pkgnum);//ticket#7
	} else {
		query = query.replace('PKG','');
	}
	if (criteria.fabshop){
		query = query.replace('FABS'," AND i.id_fabrication_shop IN "+criteria.fabshop);
	} else {
		query = query.replace('FABS','');
	}
	if (criteria.pcmkrel){
		query = query.replace('PCRL'," AND i.piece_release IN "+criteria.pcmkrel);
	} else {
		query = query.replace('PCRL','');
	}
	if (criteria.loadrel){
		query = query.replace('LDR'," AND l.load_release IN "+criteria.loadrel);
	} else {
		query = query.replace('LDR','');
	}
	if (criteria.loadall){//need number to id current_load_id
		query = query.replace('LDN'," AND i.current_load_id IN "+criteria.loadall);
	} else {
		query = query.replace('LDN','');
	}
	var browseFS = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	application.output("query size "+browseFS.getMaxRowIndex());
	
	forms.loads_browse2.elements.tabless.removeAllTabs();
	var browseIndex = 0;
	browseArray = [];
	var columnNames = []; var index = 0;
	nullRow = [];
	var cols = browseFS.getMaxColumnIndex();
	var last = ""; 
	var offset = 0;
	var colLength = 0;
	var fieldIndex = 0;
	var removeColumns = [];
	//removeColumns.push('piecemark_id'); // input string of piecemark_id error, Error Setting form foundset, for input string
	for (index = 1;index <= cols;index++){
		var columnName = browseFS.getColumnName(index);
		if (columnName == null){continue}
		if (columnNames.indexOf(columnName) != -1){
			removeColumns.push(index);
			continue}
		columnNames[fieldIndex] = columnName;
		dsBrowse.addColumn(columnName,fieldIndex+1,JSColumn.TEXT);
		browseArray.push(JSColumn.TEXT);
		nullRow.push(null); // prep blank row for table entry
		fieldIndex++;
	}
	for (index=removeColumns.length-1;index > -1;index--){
		//var status = dsBrowse.removeColumn(removeColumns[index]);
		var status1 = browseFS.removeColumn(removeColumns[index]);
		//application.output(" stat2 "+status1);
	}
	var uniqueBC = [];
	var removeRows = [];
	var uniqueBCount = [];
	var rows = browseFS.getMaxRowIndex()
	for (index=1;index <= rows;index++){
		browseFS.rowIndex = index;//remove duplicate id_serial_number_id barcode ids
		var bcID = browseFS.id_serial_number_id;
		if (uniqueBC.indexOf(bcID) != -1) {
			removeRows.push(index);
			uniqueBCount[bcID]++;
		} else {
			uniqueBC.push(bcID);
			uniqueBCount[bcID] = 1;
		}
	}
	for (index = removeRows.length-1;index > -1;index--){
		browseFS.removeRow(removeRows[index]);//delete marked row
	}
	for (index = 1;index <= browseFS.getMaxRowIndex();index++){
		browseFS.rowIndex = index;
		/** @type {Integer} */
		var intQuant = Math.floor(uniqueBCount[browseFS.id_serial_number_id])+"";
		browseFS.sequence_quantity = intQuant;
	}
	//swap piecemark_id and first columns
	browseDatasource = browseFS.createDataSource('browsingAll',browseArray); 
	var checkForm = solutionModel.newForm('loads_browse_tabless2',browseDatasource,'sts_one',false,500,600);
	var code = 'function onRecordSelection(event){\
			forms.loads_browse2.onRecordSelection(event);\
		}\
	';
	
	checkForm.onRecordSelection = checkForm.newMethod(code);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	//checkForm.namedFoundSet = JSForm.EMPTY_FOUNDSET; 
	//checkForm.dataSource = 'mem:browsingAll'; //
	//checkForm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_NEVER;
	for (index = 0;index < columnNames.length;index++){
		columnName = columnNames[index];
		if (columnName == "browsing_id"){
			colLength = 0;
		} else {
			colLength = columnName.length * 8;
		}
	 	last = checkForm.newLabel(columnName,offset,0,colLength,20)
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	if (index == columnName.length -1){
	 		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	 	}
	 	last.labelFor=columnNames[index];
	 	last.toolTipText = last.labelFor;
		last = checkForm.newField(columnName,JSField.TEXT_FIELD,offset,20,colLength,20);
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
		last.name = columnName;
		last.editable = false;
	 	offset += colLength;		
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;

	
	forms.loads_browse2.elements.tabless.addTab('loads_browse_tabless2');
	loadTablePrefs('loads_browse2');
}
/**
 * @properties={typeid:24,uuid:"1C92C447-A951-426E-A713-8495A7DE92BA"}
 */
function buildBTable(){
	/*
	 * create dataset
	 * load dataset
	 * create columns
	 * dsPiecemarks,dsBarcodes,dsIdfiles,dsSequences,dsLots,dsSheets
	 */
	dsBrowse = null;
	dsBrowse = databaseManager.createEmptyDataSet();
	var win = application.createWindow('Browse Job', JSWindow.WINDOW);

	win.setInitialBounds(10, 10, 800, 700);
	win.title = 'Browse Job';
	win.show('loads_browse');
	forms.loads_browse.elements.tabless.removeAllTabs();
	browseFieldOrder = [];
	var browseIndex = 0;
	browseArray = [];
	var ds = ['dsSheets','dsPiecemarks','dsSequences','dsBarcodes','dsIdfiles','dsLots'];
	var columnNames = []; var index = 0;
	nullRow = [];
	for (index = 0;index < ds.length;index++){
		var nameDs = ds[index];
		/** @type {JSDataSet} */
		var locDs = eval(nameDs);
		if (locDs == undefined){break}
		var dsLength = locDs.getMaxColumnIndex();
		for (var index2 = 1;index2 <= dsLength;index2++){
			var columnName = locDs.getColumnName(index2);
			columnNames.push(columnName+"_"+nameDs);
			nullRow.push(null); // prep blank row for table entry	
		}
	}
	var last = ""; 
	var offset = 0;
	var colLength = 0;
	var fieldIndex = 0;
	for (index = 0;index < columnNames.length;index++){
		columnName = columnNames[index];
		dsBrowse.addColumn(columnName,fieldIndex+1,JSColumn.TEXT);
		browseArray.push(JSColumn.TEXT);
		browseFieldOrder[columnName] = fieldIndex++;
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	browseDatasource = dsBrowse.createDataSource('browsing',browseArray);
	var checkForm = solutionModel.newForm('loads_browse_tab',browseDatasource,'sts_one',false,500,600); 
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	for (index = 0;index < columnNames.length;index++){
		columnName = columnNames[index];
		colLength = columnName.lastIndexOf("_")*8;
		
	 	last = checkForm.newLabel(columnName,offset,0,colLength,20)
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	if (index == columnName.length -1){
	 		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	 	}
	 	last.labelFor=columnNames[index];
	 	last.toolTipText = last.labelFor;
		last = checkForm.newField(columnName,JSField.TEXT_FIELD,offset,20,colLength,20);
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
		last.name = columnName;
	 	offset += colLength;		
	}
	forms.loads_browse.elements.tabless.addTab('loads_browse_tab');
	loadTablePrefs('loads_browse');
}
/**
 * @properties={typeid:24,uuid:"45A2608F-DF18-4BAE-B137-44FD41D23A77"}
 */
function getJobsList(){
	jobsArray=[];
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/jobs');
	fs.loadAllRecords();
	for (var index = 1;index <= fs.getSize();index++){
		fs.setSelectedIndex(index);
		jobsArray.push(fs.job_number);
	}
}
/**
 * @properties={typeid:24,uuid:"E1A5DF3B-EA4D-486D-9230-D1DE261CF9FE"}
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
 * TODO generated, please specify type and doc for the params
 * @param columnName
 * @param content
 *
 * @properties={typeid:24,uuid:"784F88EE-9CEB-40C4-B720-54D4928FF9C1"}
 * @AllowToRunInFind
 */
function getFieldDataMapping(columnName, content){
	var fieldMap = "";
	/** @type {JSFoundSet<db:/stsservoy/mapping>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/mapping');
	if (fs.find()){
		fs[columnName] = content;
		fs.mapped_format = "FabSuite";
		if (fs.search() > 0){
			var rec = fs.getSelectedRecord();
			fieldMap = rec.mapping_key+","+rec.field_order;
			return fieldMap;
		} else {
			return "";
		}
	}
}
/**
 * @properties={typeid:24,uuid:"A7AE0B04-B8F0-4939-A721-E2698FF530FA"}
 */
function existsJobNumber(jobNumber){
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = databaseManager.getFoundSet("db:/stsservoy/jobs");
	if (find()){
		fs.job_number = jobNumber;
		if (search()){
			return true;
		} else {
			return false;
		}
	}
}
/**
 * 
 * @param piecemarkId Piecemark_id into piecemark table
 * @param sequence Sequence number either the sequence_id or sequence_number. Number retrieved from earlier lookup table.
 * @param barcodeId Barcode_id from already created barcode
 * @param quantity quantity of items on barcode
 * @param remarks
 *
 * @properties={typeid:24,uuid:"A2125947-31D2-4027-B244-E012A6567B59"}
 * @AllowToRunInFind
 */
function createIdfileRecord(piecemarkId,sequence,barcodeId,quantity,remarks){
	/** @type {JSDataSet<db:/stsservoy/idfiles>} */
	var fs = databaseManager.getFoundSet('stsservoy','idfiles');
	if (sequence.length != 36){
		sequence = dsSequenceArray["_"+sequence];
	}
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	rec.piecemark_id = piecemarkId;
	rec.sequence_id = sequence;
	rec.id_serial_number_id = barcodeId;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	rec.original_quantity = quantity;
	rec.shop_order = forms.kiss_option_import.jobShopOrder;
	rec.id_area = forms.kiss_option_import.importArea;
	if (remarks){
		if (forms.kiss_option_import.saveNotesInto.search('Control #') != -1){
			rec.control_number = remarks;
		}
		if (forms.kiss_option_import.saveNotesInto.search('Erection Dwg') != -1){
			rec.erection_drawing = remarks;
		}
		if (forms.kiss_option_import.notesContainCamber){
				rec.camber = camberInfo(remarks);//resolves ticket#5
		}
	}
	rec.id_creation_date = new Date();
	return rec.idfile_id;
}
/**
 * @properties={typeid:24,uuid:"99F219A7-590A-438C-AF6F-044016213A3E"}
 */
function createIdfiles(newFS){
	dsDiffIdfiles = [];
	var timeIn = new Date().getTime();
	var timeLast = timeIn;
	scopes.globals.stsMessages = "Creating Idfiles.";application.updateUI();
	var progress = false;
	if (newFS == null){
		var retainFS = forms.kiss_option_import.transitionFS;
	} else {
		retainFS = newFS;
	}
	//var jobID = scopes.jobs.jobUnderCustomer;
	var rows = retainFS.getMaxRowIndex();
	scopes.globals.importRecordCount = rows;
	for (var index = 0;index < rows;index++){
		var timeNow = new Date().getTime();
		if (timeNow-timeLast > 1000){
			timeLast = timeNow;
			databaseManager.saveData();
			scopes.globals.stsMessages = "Creating Idfile "+index+" of "+rows;application.updateUI();
		}
		retainFS.rowIndex = index+1;
		if (retainFS.lot){
			var lot = dsLotArray[retainFS.lot];
		} else {
			lot = "";
		}
		/** deleted
		 * var unique = piecemark+","+dsSequenceArray["_"+retainFS.sequence_number]+","+lot;
		 * uniqueness changed to the following
		 * var unique = retainFS.piecemark+","+retainFS.parent_piecemark+","+dsSheetArray["_"+retainFS.sheet_number]+","+retainFS.grade+","+retainFS.finish; */
		var unique = uniquePiecemark(retainFS);
		var piecemarkId = dsPiecemarkArray[unique];//was piecemark
		var uniqueIdfile = piecemarkId+"_"+dsSequenceArray["_"+retainFS.sequence_number];
		var qtyCorrect = true;
		var qtyLabelOk = true;
		var qtyIdfiles = retainFS.sequence_quantity;
		if (qtyIdfiles == ""){qtyIdfiles = retainFS.item_quantity;}
		if (dsIdfileArray[uniqueIdfile] != null){
			if (progress) {scopes.globals.stsMessages = "Idfile exists";application.updateUI();}
			var totalCodes = 0;
			for (var i=0;i<dsIdfileArray[uniqueIdfile].length;i++){
				totalCodes += dsIdfileArray[uniqueIdfile][i];
			}
			if (qtyIdfiles != totalCodes){
				qtyCorrect = false;
				if (progress) {scopes.globals.stsMessages = "quantity label "+totalCodes+" incorrect";application.updateUI();}
			}
			if (qtyCorrect){
				for (i=0;i<dsIdfileArray[uniqueIdfile][i].length;i++){
					var itemsPerBarcode = retainFS.total_label_qty;
					if (retainFS.last_bc_qty != 0 && i2 == retainFS.barcode_qty-1){
						itemsPerBarcode = retainFS.last_bc_qty;
					}
					if (dsIdfileArray[uniqueIdfile][i] != itemsPerBarcode){
						qtyLabelOk = false;
						if (progress) {scopes.globals.stsMessages = "quantity ea label "+i+" incorrect";application.updateUI();}
					}
				}
			}
		} else {
			application.output("create Idfile(s) "+retainFS.piecemark);
			for (var i2=0;i2 < retainFS.barcode_qty;i2++){ // number of barcodes
				var barcodeId = createValidBarcode();
				itemsPerBarcode = retainFS.total_label_qty;
				if (retainFS.last_bc_qty != 0 && i2 == retainFS.barcode_qty-1){
					itemsPerBarcode = retainFS.last_bc_qty;
				}
				for (var i3=0;i3 < itemsPerBarcode;i3++){
					application.output("new Idfile: barcode"+i2+" label serial "+i3);
					//continue
					var idfileIdNew = createIdfileRecord(piecemarkId,retainFS.sequence_number,barcodeId,retainFS.item_quantity,retainFS.remarks);
				}
			}
		}
	}
	var timeOut=new Date().getTime()-timeIn;
	application.output("create idfiles time ms "+timeOut);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param fsRec
 * @param unique
 *
 * @properties={typeid:24,uuid:"35BDF200-4B33-4380-9746-D44B53F163FC"}
 * @AllowToRunInFind
 */
function createPiecemark(fsRec,unique){
	/** @type {JSDataSet<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	rec.job_id = scopes.jobs.jobUnderCustomer;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	rec.material = fsRec.material;
	rec.finish = fsRec.finish;
	rec.grade = fsRec.grade;
	rec.item_length = fsRec.item_length*1;
	rec.item_quantity = fsRec.item_quantity;
	rec.item_weight = fsRec.item_weight*1;
	rec.parent_piecemark = fsRec.parent_piecemark
	rec.piecemark = fsRec.piecemark;
	rec.sheet_id = dsSheetArray["_"+fsRec.sheet_number];
	rec.route_code = forms.kiss_option_import.importRouting;
	if (fsRec.remarks){
		if (forms.kiss_option_import.saveNotesInto.search('Description') != -1){
			rec.description = fsRec.remarks;
		}
	}
	dsPiecemarkArray[unique] = rec.piecemark_id;
	insertedPiecemarks.push(rec.piecemark_id);
}
/**
 * @properties={typeid:24,uuid:"C5510BFA-2477-4BF9-95BD-1C54BAAC370E"}
 * @AllowToRunInFind
 */
function createPiecemarks(){
	dsDiffPiecemarks = [];
	databaseManager.saveData();
	scopes.globals.stsMessages = "Creating piecemarks.";application.updateUI();
	var retainFS = forms.kiss_option_import.transitionFS;
	// tenantuuid, piecemark, grade, sequence, lot
	var jobID = scopes.jobs.jobUnderCustomer;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = rows;
	//databaseManager.setAutoSave(false);
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		////var unique = retainFS.piecemark+","+retainFS.parent_piecemark+","+dsSheetArray["_"+retainFS.sheet_number]+","+retainFS.grade+","+retainFS.finish;
		////	unique = retainFS.material+","+retainFS.grade+","+retainFS.finish; 
		var unique = uniquePiecemark(retainFS);
		if (dsPiecemarkArray[unique] != null){
			application.output('piecemark '+unique+" exists.");
			/**
			 * check for count of idfiles that have piecemark_id, sequence_id, Lot_id and count equal to record
			 * count is an aggregate of idfile counts
			 * What if less records or more records?
			 */
			var lotId = "";
			var pmarkId = dsPiecemarkArray[unique];
			var seqId = retainFS.sequence_number;
			/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
			var fs = databaseManager.getFoundSet('stsservoy','idfiles');
			var idfileCount = retainFS.item_quantity;
			if (retainFS.sequence_quantity != ""){idfileCount = retainFS.sequence_quantity}//part of a sequence, not total items
			if (fs.find()){
				fs.piecemark_id = pmarkId;
				fs.sequence_id = seqId;
				var count = fs.search()
				if (count > 0){
					if (count != idfileCount){
						application.output('idfile Count is incorrect.');
						dsDiffPiecemarks.push(pmarkId);
					} else {
						var diffBars = [];
						for (var bIndex = 1;bIndex <= count;bIndex++){
							var idRec = fs.getRecord(bIndex);
							if (diffBars[idRec.id_serial_number_id]) {
								diffBars[idRec.id_serial_number]++;
							} else {
								diffBars[idRec.id_serial_number] = 1;
							}
						}
						for (index in diffBars){
							var barCountsAs = retainFS.total_label_qty
							application.output('barcode count '+pmarkId+" "+seqId+" "+diffBars[index]);
						}
						
					}
				}
			}
		} else {
			application.output('create piecemark '+unique);
			var fsRec = retainFS;		
			createPiecemark(fsRec,unique)
		}
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sheetNumber
 *
 * @properties={typeid:24,uuid:"039F7538-22A0-4C09-BD85-FE9ED186F966"}
 */
function createSheet(sheetNumber){
	/** @type {JSDataSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet('stsservoy','sheets');
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	rec.sheet_number = sheetNumber;
	rec.job_id = scopes.jobs.jobUnderCustomer;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	dsSheetArray["_"+sheetNumber] = rec.sheet_id;
}
/**
 * @properties={typeid:24,uuid:"C69E27A8-6A48-41A4-965E-203DC14DEC4A"}
 */
function createSheets(){
	databaseManager.saveData()
	scopes.globals.stsMessages = "Creating sheets.";application.updateUI();
	var newItems = [];
	//var rows = dsBrowse.getMaxRowIndex();
	var retainFS = forms.kiss_option_import.transitionFS;
	var jobID = scopes.jobs.jobUnderCustomer;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = length;
	var insertCount = 0;//how many lines to insert with this barcode
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		var sheet_num = retainFS.sheet_number;
		if (newItems.indexOf(sheet_num) == -1){
			newItems.push(sheet_num);
		}
	}
	var length = newItems.length;
	//databaseManager.setAutoSave(false);
	for (index = 0;index < length;index++){
		if (dsSheetArray["_"+newItems[index]] != null){
			application.output("do not create sheeet "+newItems[index]);
			continue}
		application.output("create sheet "+newItems[index]);
		//continue
		createSheet(newItems[index]);
	}
	//databaseManager.setAutoSave(true);
	//application.output(newItems+" sequences in transition");
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sequenceNumber
 *
 * @properties={typeid:24,uuid:"94C0C292-78B1-4029-AC41-08153C635676"}
 */
function createSequenceNumber(sequenceNumber){
	/** @type {JSDataSet<db:/stsservoy/sequences>} */
	var fs = databaseManager.getFoundSet('stsservoy','sequences');
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	rec.sequence_number = sequenceNumber;
	rec.job_id = scopes.jobs.jobUnderCustomer;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	dsSequenceArray["_"+sequenceNumber] = rec.sequence_id;
	//dsSequenceList[rec.sequence_id] = newItems[index];
}
/**
 * @properties={typeid:24,uuid:"EC33F91A-05F5-41A5-831C-857B708912DD"}
 */
function createSequenceNumbers(){
	databaseManager.saveData()
	scopes.globals.stsMessages = "Creating sequences.";application.updateUI();
	var newItems = [];
	//var rows = dsBrowse.getMaxRowIndex();
	var retainFS = forms.kiss_option_import.transitionFS;
	//var jobID = scopes.jobs.jobUnderCustomer;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = length;
	var insertCount = 0;//how many lines to insert with this barcode
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		var seq_num = retainFS.sequence_number;
		if (newItems.indexOf(seq_num) == -1){
			newItems.push(seq_num);
		}
	}
	var length = newItems.length;
	//databaseManager.setAutoSave(false);
	for (index = 0;index < length;index++){
		if (dsSequenceArray["_"+newItems[index]] != null){
			scopes.globals.stsMessages = "do not create sequence "+newItems[index];
			continue}
			scopes.globals.stsMessages = "create sequence "+newItems[index];
		createSequenceNumber(newItems[index]);
		//dsSequenceList[rec.sequence_id] = newItems[index];
	}
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E7F28924-AB5E-4156-8E66-38353F110FE5"}
 */
function createBarCodePrefix(){
	if (barcodePrefix == ""){
		var tenantID = scopes.globals.secCurrentTenantID;
		/** @type {JSFoundSet<db:/stsservoy/customers>} */
		var custFS = databaseManager.getFoundSet('stsservoy','customers');
		if (custFS.find()){
			custFS.customer_id = scopes.jobs.customerIDs[0];
			custFS.delete_flag = null;
			if (custFS.search()){
				var size = custFS.getSize();//should be one, get first
				custRec = custFS.getRecord(1);
			}
		}
		/** 
		 * load customer barcode specs
		 * field.barcode_include_prefix(include,exclude)
		 *	field.barcode_prefix_label (twochars)
		 *	field.barcode_preamble_length (4 or 5)
		 *	field.barcode_job_start (last characters, first characters, starting at position)
		 * 	field.barcode_fixed_length (1..8)
		 *	field.barcode_job_length (1..20)
		 */
		var barcode_include_prefix = custRec.barcode_include_prefix;
		var barcode_prefix_label = custRec.barcode_prefix;
		var barcode_preamble_length = custRec.barcode_preamble_length;
		var barcode_job_start = custRec.barcode_job_start;
		var barcode_fixed_length = custRec.barcode_fixed_length;
		var barcode_job_length = custRec.barcode_job_length;
		var jobNumber = jobName;
		var serial = barcodeLast; //SSSSSS, length=6
		
		var barcodeLength = scopes.prefs.barcodeLength;//fixed unless changed in preferences
		var bPrefix = barcode_include_prefix == "Include Prefix" ? true : false;
		var begStr,endStr;
		var jobNameLength = bPrefix ? barcode_preamble_length-2 : barcode_preamble_length;
		var serialLength = barcodeLength-barcode_preamble_length;
		var jobStrLength = jobNumber.length;
		//barcode_fixed_length - adjust for string position start = 0
		var lastSerial = barcodeLast;//save to barcode table
		var barcode = "";
		var jobPrefix = "";
		if (barcode_job_start.search('Last') != -1) {
			begStr = jobStrLength-jobNameLength;
			endStr = jobStrLength;
		} else if (barcode_job_start.search('Starting') != -1) {
			begStr = (barcode_fixed_length+jobNameLength > jobStrLength) ? jobStrLength-jobNameLength : barcode_fixed_length-1;
			endStr = begStr+jobNameLength;
		} else {
			begStr = 0;
			endStr = jobNameLength;
		}
		jobPrefix = jobNumber.slice(begStr,endStr);
		if (bPrefix){
			barcodePrefix = barcode_prefix_label+jobPrefix;
		} else {
			//barcode = jobPrefix+serial;	
			barcodePrefix = jobPrefix;
		}	//set serial
		createBarCodeSerial();
	}
	return barcodePrefix;
}
/**
 * @properties={typeid:24,uuid:"B16AB869-1385-422D-AE81-39AD47A9E7B4"}
 * @AllowToRunInFind
 */
function createBarCodeNextNumber(){
	var barcodeLength = scopes.prefs.barcodeLength;
	var prefix = createBarCodePrefix(); // serial is loaded in this call, too
	var serialLength = barcodeLength-barcodePrefix.length;
	var serial = countUpNumbers(barcodeLast);
	return prefix+serial;
}
/**
 * @properties={typeid:24,uuid:"BCCE02C0-1777-4531-885F-A15D1AB4B98F"}
 */
function numbersUp(){
	application.output("ZZY999 "+countUpNumbers("ZZY999"));
	application.output("000000 "+countUpNumbers("000000"));
	application.output("999999 "+countUpNumbers("999999"));
	application.output("ZR0000 "+countUpNumbers("ZR0000"));
	application.output("M90001 "+countUpNumbers("M90001"));
	application.output("M99998 "+countUpNumbers("M99998"));
	application.output("M99999 "+countUpNumbers("M99999"));
	application.output("ZZY000 "+countUpNumbers("ZZY000"));
	application.output("ZZY999 "+countUpNumbers("ZZY999"));

}
/**
 * TODO generated, please specify type and doc for the params
 * @param convertType
 * @param decimal
 * @param length
 * @param returnType
 *
 * @properties={typeid:24,uuid:"3E377215-F898-4D37-90A5-1D2780ED8116"}
 */
function decToFrac(convertType, decimal, length, returnType){
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
						return;//exit
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
			break;
	
	default:
		return "";
	}
	if (returnType == ""){
		return 
	} else {
		switch( returnType ){
		case 'FEET':
			feet = feet + "    ";
			return feet.substr(length);
		case 'INCH':
			number = number + "    ";
			return number.substr(length);
		case 'NUMERATOR':
			break;
		case 'DENOMINATOR':
			break;
		case 'FRACTION':
			break;
		case 'FRACSLASH':
			break;
		default:
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
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param camberNote
 *
 * @properties={typeid:24,uuid:"D7AD9A2B-4F7D-4542-9506-C125D0DA4916"}
 */
function camberInfo(camberNote){
	// if there is more than one 'c=' statement, this will fail, can do last c= on a string position search first
	var pattern = new RegExp("c *= *(.*)$","i");
	var camber = camberNote.match(pattern);
	if (camber){
		camber = camber[1];
		if (camber.search('/') != -1){
			if (camber.search("\"") != -1){
				camber = scopes.jobs.fracToDec(camber.trim());
			} else {
				camber = scopes.jobs.fracToDec(camber.trim()+"\"");
			}
		}
	} else {
		camber = 0;
	}
	
	//scopes.jobs.fracToDec(camber);
	//application.output('camber '+camber);
	return camber;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param fraction
 *
 * @properties={typeid:24,uuid:"57A73A31-434A-4AAF-9AA7-CFF19DC3F9A0"}
 */
function fracToDec(fraction){
	//(6'-3 1/2"), (0'-10 15/16"), (0 15/16"), (36 3/4"), (12'-4")
	/** @type {String} */
	fraction = fraction.trim();
	var length = fraction.length;
	var feet = 0;
	var inches = 0;
	var numerator = 0;
	var denom = 0;
	var decimal = 0;
	var number = "";
	for (var index = 0;index < length;index++){
		var character = fraction[index];
		switch( character ){
			case '\'':
				feet = number * 12;
				number = "";
				//character = "";
				break;
			case ' ':
				inches = number;
				number = "";
			case '-':
				//character = "";
				break;
			case '/':
				numerator = number;
				number = "";
				break;
			case '"':
				if (numerator > 0){
					denom = number;
				} else {
					inches = number;
				}
				number = "";
				break;
		default:
				number = number + character;
		}
	}
	if (numerator > 0 && denom > 0){decimal = numerator*1/denom*1}
	
	decimal = feet*1 + inches*1 + decimal*1;
	
	if (decimal < 0){decimal = -1} // -1 is an error
	if (decimal == "NaN"){decimal = -1}//did not resolve to a number
	return decimal;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param serial
 *
 * @properties={typeid:24,uuid:"A7DD2FA9-39E5-4123-A543-A41E6D4B63F0"}
 */
function countUpNumbers(serial){
	var serialLength = scopes.prefs.barcodeLength-custRec.barcode_preamble_length;
	var padZeroes = "000000000000000000000000000000";
	var numLength = serialLength-custRec.barcode_preamble_length; // zero is prefix length
	var matched = serial.match(/[A-Z]+/);
	if (matched == null){letS = ""} else {var letS = matched[0]}
	var letSLen = letS.length;
	var numSLen = serialLength-letSLen;
	var numS = serial.slice(letS.length,serialLength);
	//var numSLen = numS.length;
	numS++;
	numS = padZeroes+numS;
	numS = numS.slice(numS.length-numSLen,numS.length);
	if (numS == 0){
		if (letS == ""){
			letS = "A";
			letSLen++; numSLen--;
		} else {
			var letLast = letS.charAt(letSLen-1);
			if (letLast == "Z"){
				letS = letS+"A";
				letSLen++; numSLen--;
			} else {
				var charCode = String.fromCharCode(letS.charCodeAt(letSLen-1)+1);
				letS = letS.slice(0,letSLen-1)+charCode;
			}
		}
	}
	numS = padZeroes+numS;
	numS = numS.slice(numS.length-numSLen,numS.length);
	//application.output(serial+' matched '+letS+' num '+numS);
	barcodeLast = letS+numS;
	return barcodeLast;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param qtyBarcodes
 * @param qtyPcmk
 * @param weight
 *
 * @properties={typeid:24,uuid:"AABB40AE-D606-4F96-A282-F01D0C9D9A76"}
 */
function createBCnums(qtyBarcodes,qtyPcmk,weight){
	var calc = {bcs: null, pms:null, per: null, last: null, totwt: null};
	var qtyPerBarcode = Math.ceil(qtyPcmk/qtyBarcodes);
	var qtyLastIdfile = 0;
	if ((qtyBarcodes > 1) && (qtyPerBarcode*qtyBarcodes > qtyPcmk)){
		qtyLastIdfile = qtyPcmk - (qtyPerBarcode*(qtyBarcodes-1));
	}
	var totWeight = qtyPerBarcode*weight;
	var fullBarcodesTotalled = (qtyPcmk == qtyPerBarcode*qtyBarcodes) ? qtyPerBarcode*qtyBarcodes : qtyPerBarcode*(qtyBarcodes-1);
	calc.per = qtyPerBarcode;
	calc.last = qtyLastIdfile;
	calc.totwt = totWeight;
	calc.pms = qtyPcmk;
	calc.bcs = qtyBarcodes;
	calc.full =  fullBarcodesTotalled;

	return calc;
}
/**
 * @properties={typeid:24,uuid:"7C32E63D-9AD0-473F-B146-705DE8B3E68C"}
 * @AllowToRunInFind
 */
function createBarCodeSerial(){
	if (barcodePrefix == "") {return}
	/** @type {JSFoundSet<db:/stsservoy/last_id_serial>} */
	var bcFS = databaseManager.getFoundSet('stsservoy','last_id_serial');
	var rec = null;
	if (bcFS.find()){
		bcFS.tenant_uuid = globals.secCurrentTenantID;
		bcFS.prefix = barcodePrefix;
		if (bcFS.search() == 0){
			var recIndex = bcFS.newRecord();
			rec = bcFS.getRecord(recIndex);
			rec.serial = 0;
			rec.tenant_uuid = globals.secCurrentTenantID;
			rec.prefix = barcodePrefix;
		} else {
			rec = bcFS.getRecord(1);
		}
	}
	barcodeLast = rec.serial;
}
/**
 * @properties={typeid:24,uuid:"1668236D-BFCD-42D5-BC2F-36B767DD09C8"}
 * @AllowToRunInFind
 */
function saveBarCodeSerial(){
	if (scopes.jobs.barcodePrefix == "") {return}
	/** @type {JSFoundSet<db:/stsservoy/last_id_serial>} */
	var bcFS = databaseManager.getFoundSet('stsservoy','last_id_serial');
	if (bcFS.find()){
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
	}
	//get last barcode serial for this customer
}
/**
 * Preamble is (4,5)
 * Barcode prefix is always (2)
 * if include prefix, then the preamble is prefix (2) and job number (2,3) (preambleLength-2)
 * if exclude prefix, then preamble (4,5) is job number only(4,5), matching jobnumber from position
 * the total length of the barcode is (10), so the serial gets 10 minus the preamble
 * jobNumber is not changeable, follows prefix length, plus or minus the prefix
 * 
 * 
 * @properties={typeid:24,uuid:"A9901D66-1405-4F29-B763-64E296A272BE"}
 * @AllowToRunInFind
 */
function createBarCode(notSample){
	//if (barcodePrefix != )
	var padZeroes = "00000000000000000000000000000";
	if (notSample){//total length = 10
		var barcode_include_prefix = "Exclude Prefix";//"Include Prefix";//
		var barcode_prefix_label = "P2";//PP
		var barcode_preamble_length = 4;
		var barcode_job_start = "First characters";//"JobNumber. Starting at Position";//"Last Characters of Job Number";//
		var barcode_fixed_length = 2;
		var barcode_job_length = 0;
		var jobNumber = "ABCDEF";
		var serial = "7654321"; //SSSSSS, length=6
	} else {
		var tenantID = scopes.globals.secCurrentTenantID;
		/** @type {JSFoundSet<db:/stsservoy/customers>} */
		var custFS = databaseManager.getFoundSet('stsservoy','customers');
		/** 		load customer barcode specs
		 	field.barcode_include_prefix(include,exclude)
			field.barcode_prefix_label (twochars)
			field.barcode_preamble_length (4 or 5)
			field.barcode_job_start (last characters, first characters, starting at position)
		 	field.barcode_fixed_length (1..8)
		 	field.barcode_job_length (1..20)
		 */
				
		barcode_include_prefix = custRec.barcode_include_prefix;
		barcode_prefix_label = custRec.barcode_prefix;
		barcode_preamble_length = custRec.barcode_preamble_length;
		barcode_job_start = custRec.barcode_job_start;
		barcode_fixed_length = custRec.barcode_fixed_length;
		barcode_job_length = custRec.barcode_job_length;
		jobNumber = jobName;
		serial = barcodeLast; //SSSSSS, length=6
		
		//get last barcode serial for this customer
	}
	serial = ++barcodeLast;
	serial = padZeroes+serial;
	serial = serial.slice(serial.length-serialLength,serial.length);

	var barcode = barcodePrefix+serial;
	//application.output(barcode+" serial length "+serialLength+" begin "+begStr+" end "+endStr);
	return barcode;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param file
 *
 * @properties={typeid:24,uuid:"82933605-B94C-4B67-979A-6E8B9A0BF807"}
 */
function readKissTextFile(file) {
	var prefs = {
		delimiter: ",",
		header:false,
		dynamicTyping:false
	}
	var path = "C:\\Users\\Alienware\\Documents\\STS p2programs\\KISS\\";	//TODO general program preferences
	if (file == "") {file = path} else {file = file[0]}
	var fileText = "";
	//var fileJS = plugins.file.convertToJSFile(file);
	fileText = plugins.file.readTXTFile(file);
	var header = fileText.indexOf("\nH,");
	var headerEnd = fileText.indexOf("*",header);
	application.output(fileText.substring(header,headerEnd));
    
    importResults =  parse(fileText,prefs);
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
	if (!mappingDone){return}
	//savePiecemarks();
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"89287D7F-6E72-4A30-8E10-3D8F4268A46C"}
 */
function loadKissMapping(){
	/** @type {JSFoundSet<db:/stsservoy/mapping>} */
	var fs5 = databaseManager.getFoundSet("db:/stsservoy/mapping");
	var mappedFormat = 'FabSuite';
	mappedFormatArray = [];
	mappedFormatArrayDescrips = [];
	var mapLine = [];
	if (fs5.find()){
		fs5.mapped_format = mappedFormat;
		var oldMapTo = "";
		var mapTo = "";
		var mapCount = 0;
		if (fs5.search()){
			fs5.sort('mapped_format asc, mapping_key asc, field_order asc');
			var count = fs5.getSize();
			for (var i6=1;i6 <= count;i6++){
				var rec6 = fs5.getRecord(i6);
				mapTo = rec6.mapping_key+','+rec6.field_order;
				//if (mapTo == oldMapTo){mapCount++}else{mapCount = 0}
				if (rec6.mapped_field == null){continue}  // skip null mappings, won't work
				mappedFormatArray[mapTo] = rec6.mapped_field+'.'+rec6.field_sort_order;
				mappedFormatArrayDescrips[mapTo] = rec6.field_name;
				oldMapTo = mapTo;
			}
		}
	}
	// verify that all provided elements have been mapped, this is an error if any are missed from KISS file
	// errors in mapping should cancel an import
	var data = importResults.results;
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
	application.output('NOT MAPPED:'+needsMap);
	return needsMap.length == 0;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8F81FA19-1380-4635-8F1D-16C3D6AAD275"}
 */
function idHeaders(){
	var format = "";
	var data = importResults.results;
	var length = data.length;
	if (data[0].length >2 && data[0][2].search("FabSuite") != -1){format = "FabSuite"}
	application.output('File Format '+format);
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
			/** @type {JSFoundset<db:/stsservoy/mappings>} */
			var fs2 = databaseManager.getFoundSet("db:/stsservoy/mapping");
			fieldName = data[index][i3].trim();
			if (fieldName.search(RegExp('[A-Za-z]+')) == -1){fieldName = "UNDEFINED";}
			var fieldPosition = i3;
			if (fs2.find()){
				fs2.mapped_format = format;
				fs2.mapping_line = mappingLine;
				fs2.field_name = fieldName;
				if (!fs2.search()){
					fs2.newRecord();
					var rec = fs2.getSelectedRecord();
					//application.output('rec '+rec);
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
		}
		index++;		
		//var fs9 = sts_mapping;
		//application.output('mapping lines: '+fs9.getSize());	
	}

	return index;


}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param index
 *
 * @properties={typeid:24,uuid:"CE27525E-3CCF-4431-B250-555756249AE8"}
 */
function dataErrorCheck(index) {
 	var data = importResults.results;
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


/*
 Papa Parse
 v2.0.3
 https://github.com/mholt/jquery.parse
 */

	/**
 * TODO generated, please specify type and doc for the params
 * @param e
 *
 * @properties={typeid:24,uuid:"47520824-FBB2-456A-B43E-9CC14EDDE74C"}
 */
function t(e) {
		return typeof e === "function"
	}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"51338C04-3DB6-4787-9395-7D5D21637D3A"}
 */
function getBarcodeLatest(){
	/** @type {JSFoundSet<db:/stsservoy/last_id_serial>} */
	var barsFS = databaseManager.getFoundSet('stsservoy', 'last_id_serial');
	if (barsFS.find()){
			barsFS.id_serial_number = barcode;
			if (barsFS.search() == 0){
				barcodeSafe = true;
			}
	}
}
/**
 * @AllowToRunInFind
 * Ensure barcode is unique, then save
 * @properties={typeid:24,uuid:"58DDAB06-73D8-46ED-8243-DFD286C220F3"}
 */
function createValidBarcode(){
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var barsFS = databaseManager.getFoundSet('stsservoy', 'id_serial_numbers');
	var recIndex = barsFS.newRecord();
	var barRec = barsFS.getRecord(recIndex);
	barRec.id_serial_number = createBarCodeNextNumber(); 
	barRec.tenant_uuid = scopes.globals.secCurrentTenantID;
	return barRec.id_serial_number_id;
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param table
 *
 * @properties={typeid:24,uuid:"518DA0F5-7B81-4E38-AAFC-374B2BC7424A"}
 */
function insertAggregPcmk(table){
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var pieceFS = databaseManager.getFoundSet('stsservoy','piecemarks');
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var sheetFS = databaseManager.getFoundSet('stsservoy','sheets');
	var length = table.getMaxRowIndex();
	var sheetID = "";
	for (var index = 0;index < length;index++){
		//if (table[index].parent_piecemark == ""){continue}
		//if (table[index].sheet_number != ""){
			if (sheetFS.find()){
				sheetFS.job_id = scopes.jobs.jobIDs[0];
				sheetFS.sheet_number = table[index].sheet_number;
				if (sheetFS.search()){
					sheetID = sheetFS.sheet_id;
				} else {
					var newIndex = sheetFS.newRecord();
					var newRec = sheetFS.getRecord(newIndex);
					newRec.job_id = scopes.jobs.jobIDs[0];
					newRec.sheet_number = table[index].sheet_number;
					newRec.tenant_uuid = scopes.globals.secCurrentTenantID;
					sheetID = newRec.sheet_id;
					databaseManager.saveData(newRec);
				}
			}
		//}
		if (pieceFS.find()){
			//pieceFS.material = table[index].material;
			//pieceFS.grade = table[index].grade;
			pieceFS.piecemark = table[index].piecemark;
			pieceFS.parent_piecemark = table[index].parent_piecemark;
			pieceFS.sheet_id = sheetID;
			pieceFS.grade = table[index].grade;
			pieceFS.finish = table[index].finish;
			var count = pieceFS.search();
			if (count == 0){
				newIndex = pieceFS.newRecord();
				var newRecP = pieceFS.getRecord(newIndex);
				newRecP.material = table[index].material;
				newRecP.finish = table[index].finish;
				newRecP.grade = table[index].grade;
				newRecP.item_length = table[index].item_length*1;
				newRecP.item_quantity = table[index].item_quantity;
				newRecP.item_weight = table[index].item_weight*1;
				newRecP.parent_piecemark = table[index].parent_piecemark
				newRecP.piecemark = table[index].piecemark;
				newRecP.sheet_id = sheetID;
				newRecP.tenant_uuid = scopes.globals.secCurrentTenantID;
				databaseManager.saveData(newRecP);
			} else {
				//overwrite but must match sequence
			}
		}
	}

}
/**
 * @properties={typeid:24,uuid:"F12A2069-9AAD-4175-8B7D-ED09B211A5E0"}
 */
function insertPiecemarks(){
	insertAggregPcmk(forms.kiss_option_import.transitionFS);
	insertAggregPcmk(forms.kiss_option_import.transitionFSsumm);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param row
 * @param barcount
 * @param piecemarkId
 * @param seqId
 *
 * @properties={typeid:24,uuid:"D5A0CE07-4B2C-47F0-B85C-FF5216B90229"}
 * @AllowToRunInFind
 */
function insertIdFile(row, barcount,piecemarkId,seqId) { 
	/*
	 * use jobId, tenantId,
	 * create piecemark with major and minor, 
	 * 		check summaries, 
	 * 		skip discards, 
	 * 		set sheetId, idfileId, tenantId
	 * create sheetnum for piecemark, 
	 * 		set jobId, idfileId
	 * 		set sheetNumber
	 * Insert barcode into barcode table
	 * 		set barcodeNumber
	 * Insert id record in idfiles table
	 * 		set piecemarkId, sequenceId, loadId, sequenceId, tenantId
	 */
	var retainFS = forms.kiss_option_import.transitionFS;
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idsFS = databaseManager.getFoundSet('stsservoy','idfiles');
	var totalQty = retainFS[row].item_quantity;
	var barcodeID = createValidBarcode();
	for (var index = 1;index <= barcount;index++){

		/*
		if (idsFS.find()){
			idsFS.sequence_id = seqId;
			idsFS.piecemark_id = piecemarkId;
			//idsFS.id_serial_number_id = barcodeId;
			var count = idsFS.search();
			if (count*1 < totalQty*1){//the total quantity is all that we are after with a unique barcode for this quantity
		*/
				application.output("row:"+row+" bar:"+barcodeID+" "+barcount+":"+index+" >> "+retainFS.getRowAsArray(row+1));					var newIndex = idsFS.newRecord();
				var newRec = idsFS.getRecord(newIndex);
				newRec.id_serial_number_id = barcodeID;
				newRec.tenant_uuid = scopes.globals.secCurrentTenantID;
				newRec.piecemark_id = piecemarkId;
				newRec.sequence_id = seqId;
				newRec.original_quantity = retainFS[row].item_quantity;
				newRec.shipped_quantity = retainFS[row].sequence_quantity*1;  //sequence quantity versus original quantity
		/*
			}
		}
		*/
	}

}
/**
 * @properties={typeid:24,uuid:"5796C81D-F2E2-479E-8B71-616BC5ED206B"}
 */
function deleteLotsJob(){
	var dsLotList = scopes.jobs.dsLotList;
	application.output('Lots to delete '+dsLotList.length);
	dsLots = null;
	dsLotList = [];
	dsLotArray = [];
	//deleteFoundSet(fs);
}
/**
 * @properties={typeid:24,uuid:"EA8A5666-7188-44FA-BD6A-DFC4ABC5C383"}
 * @SuppressWarnings(hides)
 * @AllowToRunInFind
 */
function deleteSequencesJob(jobID){
	var dsSequenceList = scopes.jobs.dsSequenceList;
	var count2 = 0;
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
	var fs = databaseManager.getFoundSet('stsservoy','sequences');
	if (fs.find()){
		fs.job_id = jobID;
		fs.tenant_uuid = globals.secCurrentTenantID;
		if (fs.search() > 0){
			count2 = fs.getSize();
			deleteFoundSet(fs);
			//fs.deleteAllRecords();
		}
	}
	application.output("Sequences to delete "+count2);
	dsSequences = null;
	dsSequenceList = [];
	dsSequenceArray = [];
}
/**
 * TODO generated, please specify type and doc for the params
 * @param foundset
 *
 * @properties={typeid:24,uuid:"A56C2F42-2A50-443E-98EE-350DD5DEDF20"}
 */
function deleteFoundSet(foundset){
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset);
	fsUpdater.setColumn('delete_flag',99);
	fsUpdater.setColumn('edit_date',new Date());
	fsUpdater.performUpdate();
}
/**
 * @properties={typeid:24,uuid:"E7E44ABE-3A97-4BFD-BFD1-15213AF73CBC"}
 */
function deleteBarcodesJob(){
	if (!dsBarcodes){return}
	for (var index2 = 1;index2 <= dsBarcodes.getMaxRowIndex();index2++){
		dsBarcodes.rowIndex = index2;
		dsBarcodeList.push(dsBarcodes.id_serial_number_id);
	}
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */	
	var fs = databaseManager.getFoundSet('stsservoy','id_serial_numbers');
	fs.loadRecords(databaseManager.convertToDataSet(dsBarcodeList));
	var count = fs.getSize();
	deleteFoundSet(fs);
	//fs.deleteAllRecords();
	application.output('Barcodes to delete '+dsBarcodeList.length+" fssize "+count);
	dsBarcodes = null;
	dsBarcodeList = [];
	dsBarcodeArray = [];
}
/**
 * @properties={typeid:24,uuid:"7E2F7378-916C-4EE8-942B-94615566E8B2"}
 */
function deleteIdfilesJob(){
	var dsIdfileList = scopes.jobs.dsIdfileList;
	if (dsIdfileList.length == 0){return}
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */	
	var fs = databaseManager.getFoundSet('stsservoy','idfiles');
	fs.loadRecords(databaseManager.convertToDataSet(dsIdfileList));
	var count = fs.getSize();
	deleteFoundSet(fs);
	//fs.deleteAllRecords();
	application.output('Idfiles to delete '+dsIdfileList.length);
	dsIdfiles = null;
	dsIdfileList = [];
	dsIdfileArray = [];
}
/**
 * @properties={typeid:24,uuid:"44394894-C88C-4BD2-B97E-5F376DB12520"}
 */
function deleteImportBatch(){
	if (deletedIdfiles.length > 0){
		var date = new Date();
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var FS = databaseManager.getFoundSet('stsservoy','idfiles');
		var ds = databaseManager.convertToDataSet(deletedIdfiles);
		var ud = FS.loadRecords(ds);
		var update = databaseManager.getFoundSetUpdater(FS);
		update.setColumn('delete_flag',99);
		update.setColumn('edit_date',date);
		update.setColumn('deleted_date',date);
		update.performUpdate();
		application.output('deleted idfiles '+deletedIdfiles)
	}
	if (deletedBarcodes.length > 0){
		/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
		FS = databaseManager.getFoundSet('stsservoy','id_serial_numbers');
		ds = databaseManager.convertToDataSet(deletedBarcodes);
		ud = FS.loadRecords(ds);
		update = databaseManager.getFoundSetUpdater(FS);
		update.setColumn('delete_flag',99);
		update.setColumn('edit_date',date);
		update.performUpdate();
		application.output('deleted codes '+deletedBarcodes);
	}
	if (false && deletedPiecemarks.length > 0){
		/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
		FS = databaseManager.getFoundSet('stsservoy','piecemarks');
		ds = databaseManager.convertToDataSet(deletedPiecemarks);
		FS.loadRecords(ds);
		update = databaseManager.getFoundSetUpdater(FS);
		update.setColumn('delete_flag',99);
		update.setColumn('edit_date',date);
		update.performUpdate();
		application.output('deleted piecemarks '+deletePiecemarksJob());
	}
}
/**
 * @properties={typeid:24,uuid:"6A51C543-4175-4FE3-8AC5-1D074349A1E4"}
 */
function deletePiecemarksJob(){
	//var dsPiecemarkList = scopes.jobs.dsPiecemarkList;
	scopes.globals.tempArray = [];
	for (var index in dsPiecemarkList){
		scopes.globals.tempArray.push(index);
	}
	for (index = 0;index<dsTossedList.length;index++){
		scopes.globals.tempArray.push(dsTossedList[index]);
	}
	var count = 0;
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */	
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	fs.loadRecords(databaseManager.convertToDataSet(scopes.globals.tempArray));
	count = fs.getSize();
	deleteFoundSet(fs);
	//fs.deleteAllRecords();
	application.output('Piecemarks to delete '+count);
	dsPiecemarks = null;
	dsPiecemarkList = [];
	dsPiecemarkArray = [];
	dsTossed = null;
	dsTossedList = [];
	dsTossedArray = [];
}
/**
 * @properties={typeid:24,uuid:"402FD64E-FFF8-4F3B-99A7-F526FC2A2557"}
 */
function deleteSheetsJob(jobID){
	var dsSheetList = scopes.jobs.dsSheetList;
	var count = 0;
	scopes.globals.tempArray = [];
	for (var index in dsSheetList){
		scopes.globals.tempArray.push(index);
	}
	count = 0;
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */	
	var fs = databaseManager.getFoundSet('stsservoy','sheets');
	fs.loadRecords(databaseManager.convertToDataSet(scopes.globals.tempArray));
	count = fs.getSize();
	deleteFoundSet(fs);
	//fs.deleteAllRecords();
	application.output('Sheets to delete '+count);
	dsSheets = null;
	dsSheetList = [];
	dsSheetArray = [];
}
/**
 * TODO generated, please specify type and doc for the params
 * @param record
 * @param correct Determine whether to correct/update the records or just report
 * @properties={typeid:24,uuid:"DCB17FBC-FC12-462F-BD92-9EF854672DB9"}
 */
function importRecordPiecemarkExist(record,correct){
	var unique = uniquePiecemark(record);
	if (dsPiecemarkArray[unique] != null){
		return "";
	}
	if (dsPiecemarkArray[uniqueSummedPiecemark(record)] != null){
		return ",noPM*summed*";
	} else {
		if (correct){
			createPiecemark(record,unique);
		}
		return ",noPM";
	}
}
/**
 * Summarized piecemark for special checks
 * @param record
 *
 * @properties={typeid:24,uuid:"4DE828A8-251B-474C-829B-F177E64A92E5"}
 */
function uniqueSummedPiecemark(record){
	return record.material+","+record.grade+","+record.finish;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param record
 *
 * @properties={typeid:24,uuid:"18AB23B9-D9C1-40BB-9F8D-74AFA04C134D"}
 */
function uniqueIdfile(record){
	return record.piecemark_if+","+record.parent_piecemark+","+dsSheetArray["_"+record.sheet_number]+","+record.grade+","+record.finish;
}
/**
 * Return unique piecemark for both minor, parent and summarized piecemarks
 * @param record
 *
 * @properties={typeid:24,uuid:"9AC99B19-A08B-4606-9CBE-81D37508AAB2"}
 * @AllowToRunInFind
 */
function uniquePiecemark(record){
	var unique = record.piecemark+","+record.parent_piecemark+","+dsSheetArray["_"+record.sheet_number]+","+record.grade+","+record.finish;
	if (unique.search('undefined') != -1){
		unique = record.piecemark+","+record.parent_piecemark+","+record.sheet_id+","+record.grade+","+record.finish;
	}
	if (record.piecemark == ""){
		unique = record.material+","+record.grade+","+record.finish
	}
	return unique;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param record
 * @param count
 *
 * @properties={typeid:24,uuid:"0170114F-60F3-4B2A-9F15-F5CB495768C8"}
 */
function importRecordChangeIdfileCount(record,count){
	/**
	 * pre-process barcode counts and set new barcode labels to last value if job exists
	 * 
	 * need  to update the piecemark with new record info if changed, sequence, sequence_quantity, item_quantity
	 * if labels not printed, just delete or add labels
	 * idfile count amounts to more than piecemarks item_count
	 * 	delete idfiles with least amount of activity
	 *  delete barcode if orphaned
	 * idfile count amounts to less than piecemarks item_count
	 * 	add idfiles to new barcode
	 * 	redistribute idfiles to new barcodes
	 * 	
	 * go through list of piecemarks and see which can be added or removed
	 * need label count needed
	 * need each label count
	 */
	var sequence = [];
	var barcodes = [];//push of id_serial_number_id
	var barcodeIdfiles = [];//list of idfiles for a barcode_id
	//var labelsNeeded = record.barcode_qty;
	var quantityEach = record.total_label_qty;
	var uniquePm = uniquePiecemark(record);
	var piecemarkId = dsPiecemarkArray[uniquePm];
	var length = dsIdfileListByPm[piecemarkId].length;//get number of idfiles for this pm
	var idfileList = dsIdfileListByPm[piecemarkId];
	for (var index = 0;index < length;index++){
		var idfileId = idfileList[index];
		dsIdfiles.rowIndex = dsIdfileList.indexOf(idfileId)+1;
		var barcodeId = dsIdfiles.id_serial_number_id;
		if (barcodes.indexOf(barcodeId) == -1){barcodes.push(barcodeId)}
		//var piecemarkId = dsPiecemarkArray[uniquePm].piecemark_id;
		if (!sequence[idfileId]){sequence[idfileId] = [];}
		if (!sequence[idfileId][barcodeId]){sequence[idfileId][barcodeId]=0}
		sequence[idfileId][barcodeId] +=1;
		if (!barcodeIdfiles[barcodeId]){barcodeIdfiles[barcodeId] = [];}
		barcodeIdfiles[barcodeId].push(idfileId);
	}
	var shortest = "";
	//if (null){return}
	if (count > 0) {
		/**
		 * add idfile and then add it to the correct barcode group
		 * add to the current barcodes only if it has not been printed
		 * add remaining barcodes to idfiles adding quantity and 
		 */
		// if barcode hasn't been printed and other codes are not yet active, else create a new barcode.
		var shortNum = quantityEach;
		for (barcodeId in barcodeIdfiles){
			dsIdfiles.rowIndex = dsIdfileList.indexOf(barcodeIdfiles[barcodeId][0]);
			if (dsIdfiles.lprint != null){deletedBarcodes.push(barcodeId)}
			if (deletedBarcodes.indexOf(barcodeId) != -1) {continue}
			if (barcodeIdfiles[barcodeId].length < quantityEach){
				//insert new idfile to barcode_id, piecemarkId, 
				var idfileIdNew = createIdfileRecord(piecemarkId,record.sequence_number,barcodeId,record.item_quantity);	//joe check for proper quantity creation, might not be item_quantity, rather quantityEach
				insertedIdfiles.push(idfileIdNew);
				barcodeIdfiles[barcodeId].push(idfileIdNew);
				count -= 1;
			}
		}
		while (count > 0) {//create barcode, add idfiles to barcode until limit or full, then repeat until done
			var barcodeNewId = createValidBarcode();
			insertedBarcodes.push(barcodeNewId);
			for (index = 0;index < quantityEach;index++){
				if (count == 0){break}
				count -= 1;
				idfileIdNew = createIdfileRecord(piecemarkId,record.sequence_number,barcodeNewId,record.item_quantity);
				insertedIdfiles.push(idfileIdNew);
			}
		}
	} else {
		count = count*-1;
		while (count > 0){
			shortNum = Number.MAX_VALUE;
			for (barcodeId in barcodeIdfiles){
				if (deletedBarcodes.indexOf(barcodeId) != -1) {continue}
				if (barcodeIdfiles[barcodeId].length < shortNum){
					shortest = barcodeId;
					shortNum = barcodeIdfiles[barcodeId].length;
				}
			}
			if (shortNum <= count){//completely delete idfiles from barcode, so barcode is not useful anymore
				count -= shortNum;
				for (index = 0;index < barcodeIdfiles[shortest].length;index++){
					var idfileIdDel = barcodeIdfiles[shortest][index];
					if (deletedIdfiles.indexOf(idfileIdDel) != -1){continue}
					deletedIdfiles.push(idfileIdDel);//build list of deleted idfiles
				}
				deletedBarcodes.push(shortest);//consumes all of the idfiles for which this barcode exists
			} else {
				for (index = 0;index < barcodeIdfiles[shortest].length;index++){
					if (count == 0){break}
					idfileIdDel = barcodeIdfiles[shortest][index];
					if (deletedIdfiles.indexOf(idfileIdDel) != -1){continue}
					deletedIdfiles.push(idfileIdDel);//build list of deleted idfiles
					count -= 1;
				}
			}
		}
		//delete
	}
	application.output('deleted bc '+deletedBarcodes.length+' deleted idfile '+deletedIdfiles.length);
	for (index = 0;index < barcodeIdfiles.length;index++){
		
		//first order delete non-printed idfiles
		//delete oldest accessed
		//delete first
		
	}
	application.output('barcodes '+barcodes.length+' pm '+uniquePm);
	null;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param record
 * @param correct
 *
 * @properties={typeid:24,uuid:"724D3E52-B02F-4CB1-96D5-531AE5BD2207"}
 * @AllowToRunInFind
 */
function importRecordCheckIdfileCount(record,correct){
	// How many idfiles for the piecemark
	// How many barcodes for each prospective idfile
	//var recSheetId = dsSheetArray["_"+record.sheet_number];
	var id="";var bc="";//idfile, barcode messages
	var unique = uniquePiecemark(record);
	var uniqueIdfile = dsPiecemarkArray[unique]+"_"+dsSequenceArray["_"+record.sequence_number];
	//var qtyBarcodes = record.barcode_qty;
	//var qtyItemsPcmk = record.sequence_quantity;//sequence quantity
	var qtyItemsPcmk = (record.sequence_quantity == "") ? record.item_quantity : record.sequence_quantity;
	//if (qtyItemsPcmk == ""){qtyItemsPcmk = record.item_quantity}//sequence quantity used first
	//var codeNums = scopes.jobs.createBCnums(record.barcode_qty,qtyItemsPcmk,record.item_weight);
	//var qtyPerBarcode = codeNums.per;
	//var qtyLastIdfile = codeNums.last;
	var bcCount = 0;
	if (dsIdfileArray[uniqueIdfile]){
		var length = dsIdfileArray[uniqueIdfile].length;//now check barcode count for idfiles under this record/piecemark
	} else {
		length = 0;
		bc = ",noBC,noID";
		return bc;
	}
	for (var index = 0;index < length;index++){
		bcCount += dsIdfileArray[uniqueIdfile][index];
	}
	var idDiff = qtyItemsPcmk*1 - bcCount*1; 
	if (idDiff != 0){
		if (correct){
			importRecordChangeIdfileCount(record,idDiff);// not enough idfiles for piecemarks, must be equal
		} else {
			id = " ID"+idDiff
			if (idDiff > 0){id = ",ID+"+idDiff}
		}
	}
	var bcDiff = record.barcode_qty*1 - length;
	if (bcDiff != 0){
		if (correct){
			//importRecordChangeBCCount(record,bcDiff);//barcode number requested doesn't match barcodes in use
			null;
		} else {
			bc = " BC"+bcDiff;
			if (bcDiff >0){bc = ",BC+"+bcDiff}//just adding plus sign to make it more logical to add BC
		}
	}
	return id+bc;
}
/**
 * @properties={typeid:24,uuid:"EEE5479C-487A-463E-B9BE-DE52A4626A9E"}
 */
function importRecordCheckSequence(record){
	if (dsSequenceArray["_"+record.sheet_number] == null){
		createSequenceNumber(record.sequence_number);
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param record
 *
 * @properties={typeid:24,uuid:"F9DCEE8F-A17D-430C-8866-BA4893E6D268"}
 */
function importRecordCheckSheets(record){
	if (dsSheetArray["_"+record.sheet_number] == null){
		createSheet(record.sheet_number);
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param record
 * @param correct
 *
 * @properties={typeid:24,uuid:"920D10D5-E973-4BE6-9AF9-A19B50BC621C"}
 */
function importRecordCheckSheet(record,correct){
	if (record.piecemark == "") {return ""}//no sheetnumber for summarized records
	var recSheetId = dsSheetArray["_"+record.sheet_number];//match to this sheet_id
	
	var unique = uniquePiecemark(record);//unique piecemark with new sheet_id
	if (dsPiecemarkArray[unique]) {return ""}//valid
	var subText = new RegExp(recSheetId);//sub current sheet_id
	for (var sheetId in dsSheetList){
		if (sheetId == recSheetId){continue}//skip, already know this piecemark with sheetnum doesn't match
		var unique2 = unique.replace(subText,sheetId);
		if (dsPiecemarkArray[unique2]){
			if (correct){
				importRecordChangeSheet(record,unique2,sheetId);
				return "";
			} else {
				return ",chgSHT";
			}
		}
	}
	/** piecemark not found.  Create piecemark in piecemark check function. 
	if (correct){
		createPiecemark(record,unique);
	}
	*/
	return ",newSHT";
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param record
 * @param unique
 * @param sheetId
 *
 * @properties={typeid:24,uuid:"E61F5760-1788-4399-AADA-47E1B097FE94"}
 */
function importRecordChangeSheet(record,unique,sheetId){
	//update piecemark
	//var unique = scopes.jobs.uniquePiecemark(record);
	var piecemarkId = dsPiecemarkArray[unique];
	dsPiecemarkList[unique]=null;//mark old piecemark index as BAD
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	if (fs.find()){
		fs.piecemark_id = piecemarkId;
		if (fs.search()){
			fs.sheet_id = sheetId;
			var unique2 = uniquePiecemark(fs);
			dsPiecemarks[unique2] = fs.piecemark_id;
			dsPiecemarkList.push(fs.piecemark_id);
			//dsPiecemarkArray
		}
	}
}
/**
 * @properties={typeid:24,uuid:"D9999ACD-2FBC-4187-9D7B-0AF13810CB50"}
 */
function importRecordsCheck(){
	
	var jobID = scopes.jobs.jobIDs[0];
	scopes.jobs.jobUnderCustomer = jobID;
	readPieceTables(); // existing records
	//createSheets();//make sure sheets exist before import
	var retainFS = forms.kiss_option_import.transitionFS;
	/// ** @type {JSFoundSet<db:/stsservoy/piecemarks>} * /
	var rows = retainFS.getMaxRowIndex();
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		retainFS.import_status = "";
		var record = retainFS;
		//application.output('--->>> index '+index+' pm '+retainFS.piecemark);
		retainFS.import_status += importRecordCheckSheet(record,false);
		retainFS.import_status += importRecordPiecemarkExist(record,false);
		retainFS.import_status += importRecordCheckIdfileCount(record,false);
		if (retainFS.import_status != ""){
			retainFS.import_status = utils.stringRight(retainFS.import_status, retainFS.import_status.length-1);
		}
	}
}
/**
 * @properties={typeid:24,uuid:"7151B6F4-4020-4235-96A4-23D7E120A974"}
 */
function importRecords_append(){
	
}
/**
 * @properties={typeid:24,uuid:"C1F04FD4-C30C-4FDA-8C8F-E2148BD8BE31"}
 */
function importRecords_overwrite(){
	importRecordsDelete();
	createSequenceNumbers();
	createSheets();
	createPiecemarks();
	createSummedMarks(forms.kiss_option_import.transitionFSsumm);
	databaseManager.setAutoSave(true);
	databaseManager.setAutoSave(false);
	createIdfiles(null);
	databaseManager.setAutoSave(true);
}
/**
 * @properties={typeid:24,uuid:"011150DC-20FC-44C0-B2EB-09220E02CEE9"}
 * @AllowToRunInFind
 */
function importRecords_sheet(){
	var jobID = scopes.jobs.jobIDs[0];
	scopes.jobs.jobUnderCustomer = jobID;
	insertedBarcodes = []; insertedIdfiles = []; insertedPiecemarks = [];
	deletedBarcodes = []; deletedIdfiles = []; deletedPiecemarks = [];
	//insertedSequences = []; deletedSequences = [];
	readPieceTables(); // existing records
	createSheets();//make sure sheets exist before import
	loadCurrentJobsRecords();
	if (true){return}
	var retainFS = forms.kiss_option_import.transitionFS;
	/// ** @type {JSFoundSet<db:/stsservoy/piecemarks>} * /
	var rows = retainFS.getMaxRowIndex();
	databaseManager.setAutoSave(false);
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		retainFS.import_status = "";
		var record = retainFS;
		importRecordCheckSheets(record);
		importRecordCheckSequence(record);
		importRecordPiecemarkExist(record,true);
		importRecordCheckIdfileCount(record,true);
	}
	deleteImportBatch();
	databaseManager.setAutoSave(true);
	if (true) {return;}
}
/**
 * @properties={typeid:24,uuid:"9D848588-A588-4F00-8EB2-1E3D9A385777"}
 */
function importRecordsDelete(){
	var jobID = scopes.jobs.jobIDs[0];
	scopes.jobs.jobUnderCustomer = jobID;
	/*
	 * 5 delete piecemarks attached to sheets
	 * 6 delete sheets for job - attached to job
	 * 1 delete lots for job - attached to sequences
	 * 3 delete id_serial_numbers for job - jattached to idfile
	 * 2 delete sequences for job - attached to idfile and/or job
	 * 4 delete idfiles for job - idfiles attached to piecemarks
	 */
	readPieceTables(); // existing records
	deleteLotsJob();
	deleteSequencesJob(jobID);
	deleteBarcodesJob();
	deleteIdfilesJob();
	deletePiecemarksJob();
	deleteSheetsJob(jobID);
}
/**
 * @properties={typeid:24,uuid:"BCD308C1-D704-4BF1-9B26-6B2402E58C9C"}
 * @AllowToRunInFind
 */
function importRecordsAlt(){
	var importOpt = forms.kiss_option_import.importOption;
	var win = application.createWindow("STS Message", JSWindow.DIALOG);
	win.setInitialBounds(10, 10, 460, 110);
	win.title = "STS Message";
	win.show('messagesWarnings');
	
	var jobID = scopes.jobs.jobIDs[0];
	scopes.jobs.jobUnderCustomer = jobID;
	readPieceTables(); // existing records
	barcodePrefix = "";
	barcodeLast = 0;
	var timeIn, timeOut;
	databaseManager.setAutoSave(true);
	databaseManager.setAutoSave(false);
	///////////forms.kiss_option_import.controller.enabled = false;
	timeIn = new Date().getTime();
	if (importOpt.search('Overwrite') != -1) {
		importRecords_overwrite();
	} else if (importOpt.search('Append') != -1){
		importRecords_append();
	} else if (importOpt.search('Match') != -1){
		importRecords_sheet();
	} else {
		return;
	}
	///////////forms.kiss_option_import.controller.enabled = true;
	win.hide();
	win.destroy();	
	scopes.globals.stsMessages = "Records imported";application.updateUI();
	forms.kiss_option_import.controller.enabled = true;
	saveBarCodeSerial();
	scopes.globals.stsMessages = "Autosave enabled";application.updateUI();
	databaseManager.setAutoSave(true);
	timeOut = new Date().getTime()-timeIn;
	application.output('total import time ms '+timeOut);
	win.hide();
	win.destroy();
	scopes.jobs.importRecordsCheck();
}

/**
 * @properties={typeid:24,uuid:"905EDD6A-24B2-4341-82E2-3000B6D6AD42"}
 * @AllowToRunInFind
 */
function importRecords(){
	var win = application.createWindow("STS Message", JSWindow.DIALOG);
	win.setInitialBounds(10, 10, 460, 110);
	win.title = "STS Message";
	win.show('messagesWarnings');
	scopes.globals.stsMessages = "Creating piecemark entries.";
	insertPiecemarks();
	var retainFS = forms.kiss_option_import.transitionFS;
	importJobNumber = forms.kiss_option_import.jobNumber;
	var length = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = length;
	var insertCount = 0;//how many lines to insert with this barcode
	for (var index = 0;index < length-1;index++){
		//forms.kiss_option_import.importRecordCount--;
		application.updateUI(1500);
		scopes.globals.stsMessages = index+" of "+length+" ID piecemark entries. ";

		//if (retainFS[index].parent_piecemark == "") {continue} // TODO skip minors for now. not sure how to store, searches will fail below
		//forms.kiss_barcode_request.controller.recordIndex = index+1;
		// create sequence table entry
		/** @type {JSFoundSet<db:/stsservoy/sequences>} */
		var seqFS = databaseManager.getFoundSet('stsservoy','sequences');
		var seqID = "";
		if (seqFS.find()) {
			seqFS.job_id = scopes.jobs.jobIDs[0];
			seqFS.sequence_number = retainFS[index].sequence_number;
			if (seqFS.search()) {
				seqID = seqFS.sequence_id;
			} else {
				var newIndex = seqFS.newRecord();
				var newRec = seqFS.getRecord(newIndex);
				newRec.job_id = scopes.jobs.jobIDs[0];
				newRec.sequence_number = retainFS[index].sequence_number;
				newRec.tenant_uuid = scopes.globals.secCurrentTenantID;
				seqID = newRec.sequence_id;
				databaseManager.saveData(newRec);
			}
		}
		//var barcodeQty = retainFS[index].barcode_qty;
		var barcodeCount = retainFS[index].barcode_qty;
		var itemCount = retainFS[index].item_quantity;
		var fullCodes = retainFS[index].set_bc_qty;
		var itemsShorted = retainFS[index].last_bc_qty;
		if (itemsShorted*1 != 0){
			var itemsPerCode = Math.ceil(fullCodes/barcodeCount);
		} else {
			itemsPerCode = itemCount/barcodeCount;
		}
		/*
		 * get limits for barcodes per piecemark
		 * check for total idfiles up to limit
		 * create barcodes for each idfile up to barcode limits
		 * /
		/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
		var pieceFS = databaseManager.getFoundSet('stsservoy','piecemarks');
		var pieceRec = "";
		if (pieceFS.find()){
			pieceFS.parent_piecemark = retainFS[index].parent_piecemark;
			pieceFS.piecemark = retainFS[index].piecemark;
			pieceFS.grade = retainFS[index].grade;
			var count = pieceFS.search();
			if (count > 0){
				// should be one, but handle if more
				pieceRec = pieceFS.getRecord(1);
				piecemarkId = pieceRec.piecemark_id;
			} else {
				//piecemark not found, serious, since added already
			}
		}
		// get idfiles representing barcodeCount
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var idsFS = databaseManager.getFoundSet('stsservoy','idfiles');
		var barcodeCountCheck = 0;
		if (idsFS.find()){
			idsFS.piecemark_id = piecemarkId;
			barcodeCountCheck = idsFS.search();
		}
		if (barcodeCountCheck == 0){barcodeCountCheck = 1}
		
		var piecemarkId = pieceRec.piecemark_id;
		for (var index2 = barcodeCountCheck;index2 <= barcodeCount;index2++){
			insertCount = itemsPerCode;
			// last barcode quantity might be less than items per barcode
			if (index2 == barcodeCount && itemsShorted*1 != 0){insertCount = itemsShorted;}
			insertIdFile(index,insertCount,piecemarkId,seqID);
		}
	}
	/*
	 * get barcode count for each item in transitionFS table
	 * create barcode, save to barcodes
	 * create id in idfile, save barcode in that file
	 * create associated piecemark, save in piecemark file
	 * 
	 * link barcode to a number of ids
	 * link each id to an actual piecemark, use saved piecemark information for each piecemark
	 * link each piecemark to sheet
	 * link each id to sequences
	 * 		what to do with guids
	 */
	 win.hide();
	 win.destroy();
	 var dex = 1;
	 while (dex < idsFS.getSize()){
		 var recGet = idsFS.getRecord(dex++);
	 }
}
/**
 * TODO generated, please specify type and doc for the params
 * @param e
 * @param t
 *
 * @SuppressWarnings(deprecated,hides,wrongparameters,undeclared,unused,nls)
* @properties={typeid:24,uuid:"F2FD7DA1-2F64-47EB-8A2B-416FBAC080AF"}
 */
function n(e, t) {
		function a(n) {
			var r = s + n.target.result;
			s = "";
			if (r >= t.chunkSize) {
				var u = r.lastIndexOf("\n");
				if (u < 0)u = r.lastIndexOf("\r");
				if (u > -1) {
					s = r.substring(u + 1);
					r = r.substring(0, u)
				}
			}
			var a = o.parse(r);
			if (i >= e.size)return f(n);
			else if (a.errors.abort)return;
			else c()
		}
		function f(n) {
			if (typeof t.onComplete === "function")t.onComplete(undefined, e, t.inputElem, n)
		}
		function l() {
			if (typeof t.onFileError === "function")t.onFileError(u.error, e, t.inputElem)
		}
		function c() {
			if (i < e.size) {
				u.readAsText(e.slice(i, Math.min(i + t.chunkSize, e.size)));
				i += t.chunkSize
			}
		}
		if (!t)t = { };
		if (!t.chunkSize)t.chunkSize = 1024 * 1024 * 5;
		if (t.config.step) {
			var n = t.config.step;
			t.config.step = function(r) {
				n(r, e, t.inputElem)
			}
		}
		var i = 0;
		var s = "";
		var o = new r(t.config);
		var u = new FileReader;
		u.onload = a;
		u.onerror = l;
		this.stream = function(e, n) {
			t.onComplete = e;
			t.onFileError = n;
			c()
		};
	}
/**
 * TODO generated, please specify type and doc for the params
 * @param e
 *
 *
 * @SuppressWarnings(deprecated,hides,wrongparameters,undeclared,unused,nls)
 * @properties={typeid:24,uuid:"0115493C-393C-4FA6-820C-B7CEEB46F4F7"}
 */
function r(e) {
		function c(e) {
			if (typeof e !== "object")e = { };
			if (typeof e.delimiter !== "string" || e.delimiter.length != 1)e.delimiter = f.delimiter;
			if (e.deimiter == '"' || e.delimiter == "\n")e.delimiter = f.delimiter;
			if (typeof e.header !== "boolean")e.header = f.header;
			if (typeof e.dynamicTyping !== "boolean")e.dynamicTyping = f.dynamicTyping;
			if (typeof e.preview !== "number")e.preview = f.preview;
			if (typeof e.step !== "function")e.step = f.step;
			return e
		}
		function h(e) {
			var t = [",", "	", "|", ";"];
			var n, i, s;
			for (var o in t) {
				var a = t[o];
				var f = 0, l = 0;
				var c = (new r({ delimiter: a, header: false, dynamicTyping: false, preview: 10 })).parse(e);
				for (var h in c.results) {
					var p = c.results[h].length;
					l += p;
					if (typeof s === "undefined") {
						s = p;
						continue
					} else if (p > 1) {
						f += Math.abs(p - s);
						s = p
					}
				}
				l /= c.results.length;
				if ( (typeof i === "undefined" || f < i) && l > 1.99) {
					i = f;
					n = a
				}
			}
			u.delimiter = n;
			return !!n
		}
		function p() {
			var e = a.i > 0 && g(a.i - 1) || a.i == 0;
			var t = a.i < i.length - 1 && g(a.i + 1) || a.i == i.length - 1;
			var n = a.i < i.length - 1 && i[a.i + 1] == '"';
			if (a.inQuotes && n) {
				a.fieldVal += '"';
				a.i++
			} else if (e || t)a.inQuotes = !a.inQuotes;
			else C("Quotes", "UnexpectedQuotes", "Unexpected quotes")
		}
		function pp() {
			var nn = a.i < i.length - 1 
						&& a.ch == ')';
			if (nn)
				a.inParens = false;
			else if (a.ch == '(')
				a.inParens = true;
			else
				C("Parentheses", "UnexpectedParentheses", "Unexpected parentheses");		
		}
		function d() {
			v()
		}
		function v() {
			a.fieldVal += a.ch
		}
		function m() {
			if (a.ch == u.delimiter)b();
			else if (a.ch == "\r" && a.i < i.length - 1 && i[a.i + 1] == "\n" || a.ch == "\n" && a.i < i.length - 1 && i[a.i + 1] == "\r") {
				w();
				a.i++
			} else if (a.ch == "\n" || a.ch == "\r")w();
			else v()
		}
		function g(e) {
			if (e >= i.length)return false;
			var t = i[e];
			if (t == u.delimiter || t == "\n" || t == "\r" && e < i.length - 1 && i[e + 1] == "\n")return true;
			else return false
		}
		function y(e) {
			if (e >= i.length)return false;
			if (e < i.length - 1)return i[e] == "\n" || i[e] == "\r" && i[e + 1] == "\n";
			else return i[e] == "\n"
		}
		function b() {
			if (u.header) {
				if (a.lineNum == 1 && n == 1)a.parsed.fields.push(a.fieldVal);
				else {
					var e = a.parsed.rows[a.parsed.rows.length - 1];
					var t = a.parsed.fields[a.field];
					if (t) {
						if (u.dynamicTyping)a.fieldVal = x(a.fieldVal);
						e[t] = a.fieldVal
					} else {
						if (typeof e.__parsed_extra === "undefined")e.__parsed_extra = [];
						e.__parsed_extra.push(a.fieldVal)
					}
				}
			} else {
				if (u.dynamicTyping)a.fieldVal = x(a.fieldVal);
				a.parsed[a.parsed.length - 1].push(a.fieldVal)
			}
			a.fieldVal = "";
			a.field++
		}
		function w() {
			E();
			if (S()) {
				a.errors = { };
				a.errors.length = 0
			}
			if (u.header && a.lineNum > 0) {
				if (S())a.parsed.rows = [{ }];
				else a.parsed.rows.push({ })
			} else {
				if (S())a.parsed = [[]];
				else a.parsed.push([])
			}
			a.lineNum++;
			a.line = "";
			a.field = 0
		}
		function E() {
			if (o)return;
			b();
			var e = T();
			if (!e && u.header)N();
			if (S() && (!u.header || u.header && a.parsed.rows.length > 0)) {
				var t = u.step(k());
				if (t === false)o = true
			}
		}
		function S() {
			return typeof u.step === "function"
		}
		function x(e) {
			var t = l.floats.test(e);
			return t ? parseFloat(e) : e
		}
		function T() {
			if (l.empty.test(a.line)) {
				if (u.header) {
					if (a.lineNum == 1) {
						a.parsed.fields = [];
						a.lineNum--
					} else a.parsed.rows.splice(a.parsed.rows.length - 1, 1)
				} else a.parsed.splice(a.parsed.length - 1, 1);
				return true
			}
			return false
		}
		function N() {
			if (!u.header)return true;
			if (a.parsed.rows.length == 0)return true;
			var e = a.parsed.fields.length;
			var t = 0;
			var n = a.parsed.rows[a.parsed.rows.length - 1];
			for (var r in n)
				if (n.hasOwnProperty(r))t++;
			if (t < e)return C("FieldMismatch", "TooFewFields", "Too few fields: expected " + e + " fields but parsed " + t);
			else if (t > e)return C("FieldMismatch", "TooManyFields", "Too many fields: expected " + e + " fields but parsed " + t);
			return true
		}
		function C(e, t, n, r) {
			var i = u.header ? a.parsed.rows.length ? a.parsed.rows.length - 1 : undefined : a.parsed.length - 1;
			var o = r || i;
			if (typeof a.errors[o] === "undefined")a.errors[o] = [];
			a.errors[o].push({ type: e, code: t, message: n, line: a.lineNum, row: i, index: a.i + s });
			a.errors.length++;
			return false
		}
		function k() {
			return { results: a.parsed, errors: a.errors }
		}
		function L(e) {
			n++;
			if (n > 1 && S())s += e.length;
			a = A();
			i = e
		}
		function A() {
			var e;
			if (u.header) {
				e = { fields: S() ? a.parsed.fields || [] : [], rows: S() && n > 1 ? [{ }] : [] }
			} else e = [[]];
			return { i: 0, lineNum: S() ? a.lineNum : 1, field: 0, fieldVal: "", line: "", ch: "", inQuotes: false, inParens: false, parsed: e, errors: { length: 0 } }
		}
		var t = this;
		var n = 0;
		var i = "";
		var s = 0;
		var o = false;
		var u = { };
		var a = A();
		var f = { delimiter: "", header: true, dynamicTyping: true, preview: 0 };
		var l = { floats: /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i, empty: /^\s*$/ };
		e = c(e);
		u = { delimiter: e.delimiter, header: e.header, dynamicTyping: e.dynamicTyping, preview: e.preview, step: e.step };
		this.parse = function(e) {
			if (typeof e !== "string")return k();
			L(e);
			if (!u.delimiter && !h(e)) {
				C("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to comma", "config");
				u.delimiter = ","
			}
			for (a.i = 0; a.i < i.length; a.i++) {
				if (o || u.preview > 0 && a.lineNum > u.preview)break;
				a.ch = i[a.i];
				a.line += a.ch;
				if (a.ch == '(' || a.ch == ')')pp();
				if (a.inParens)d();
				if (a.ch == '"')p();
				if (a.inQuotes) d();
				if (!a.inQuotes && !a.inParens)m();
			}
			if (o)C("Abort", "ParseAbort", "Parsing was aborted by the user's step function", "abort");
			else {
				E();
				if (a.inQuotes)C("Quotes", "MissingQuotes", "Unescaped or mismatched quotes")//joe
				if (a.inParens)C("Parentheses", "MissingParentheses", "Unescaped or mistached parentheses")
			}
			return k()
		};
		this.getOptions = function() {
			return { delimiter: u.delimiter, header: u.header, dynamicTyping: u.dynamicTyping, preview: u.preview, step: u.step }
		}
	}
	e.fn.parse = function(r) {
		function o(i) {
			var s = a, o;
			if (t(r.error))o = function() {
					r.error(c.error, i.file, i.inputElem)
				};
			if (t(r.complete))s = function(e, t, n, i) {
					r.complete(e, t, n, i);
					a()
				};
			if (t(r.before)) {
				var f = r.before(i.file, i.inputElem);
				if (typeof f === "object")i.instanceConfig = e.extend(i.instanceConfig, f);
				else if (f === "skip")return a();
				else if (f === false) {
					u("AbortError", i.file, i.inputElem);
					return
				}
			}
			if (i.instanceConfig.step) {
				var l = new n(i.file, { inputElem: i.inputElem, config: e.extend({ }, i.instanceConfig) });
				l.stream(s, o)
			} else {
				var c = new FileReader;
				c.onerror = o;
				c.onload = function(t) {
					var n = t.target.result;
					var r = e.parse(n, i.instanceConfig);
					s(r, i.file, i.inputElem, t)
				};
				c.readAsText(i.file)
			}
		}
		function u(e, n, i) {
			if (t(r.error))r.error({ name: e }, n, i)
		}
		function a() {
			s.splice(0, 1);
			if (s.length > 0)o(s[0])
		}
		var i = r.config || { };
		var s = [];
		this.each(function(t) {
			var n = e(this).prop("tagName").toUpperCase() == "INPUT" && e(this).attr("type") == "file" && window.FileReader;
			if (!n)return true;
			var r = e.extend({ }, i);
			if (!this.files || this.files.length == 0) {
				u("NoFileError", undefined, this);
				return true
			}
			for (var a = 0; a < this.files.length; a++)s.push({ file: this.files[a], inputElem: this, instanceConfig: r });
			if (s.length > 0)o(s[0])
		});
		return this
	};
	e.parse = function(e, t) {
		var n = new r(t);
		return n.parse(e)
	}
	
	/**
 * TODO generated, please specify type and doc for the params
 * @param e
 * @param t
 * @SuppressWarnings(deprecated,hides,wrongparameters,undeclared,unused,nls)
 * @properties={typeid:24,uuid:"A4A8DE34-3A1B-4963-819A-7918F84E36B3"}
 */
function parse(e, t) {
		var n = new r(t);// either r or Parser
		return n.parse(e)
	}

	// Parser is the actual parsing component.
	// It is under test and does not depend on jQuery.
	// You could rip this entire function out of the plugin
	// and use it independently (with attribution).
	/**
 * TODO generated, please specify type and doc for the params
 * @param config
 *
 * @properties={typeid:24,uuid:"CB7133A6-6AC8-4DE0-AE43-D7318B9B880D"}
 */
function Parser(config)
	{
	}

/**
		var self = this;
		var _invocations = 0;
		var _input = "";
		var _chunkOffset = 0;
		var _abort = false;
		var _config = {};
		var _state = freshState();
		var _defaultConfig = {
			delimiter: "",
			header: true,
			dynamicTyping: true,
			preview: 0
		};
		var _regex = {
			floats: /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
			empty: /^\s*$/
		};

		config = validConfig(config);
		_config = {
			delimiter: config.delimiter,
			header: config.header,
			dynamicTyping: config.dynamicTyping,
			preview: config.preview,
			step: config.step
		};

		this.parse = function(input)
		{
			if (typeof input !== 'string')
				return returnable();

			reset(input);

			if (!_config.delimiter && !guessDelimiter(input))
			{
				addError("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to comma", "config");
				_config.delimiter = ",";
			}

			for (_state.i = 0; _state.i < _input.length; _state.i++)
			{
				if (_abort || (_config.preview > 0 && _state.lineNum > _config.preview))
					break;

				_state.ch = _input[_state.i];
				_state.line += _state.ch;
				
				if (_state.ch == '(' || _state.ch == ')')
					handleParens();
				if (_state.inParens)
					inParens();
				if (_state.ch == '"')
					handleQuote();
				else if (_state.inQuotes)
					inQuotes();
				if (!_state.inQuotes && !_state.inParens){
					notEscaped();
				}
			}

			if (_abort)
				addError("Abort", "ParseAbort", "Parsing was aborted by the user's step function", "abort");
			else
			{
				endRow();	// End of input is also end of the last row
				if (_state.inQuotes)
					addError("Quotes", "MissingQuotes", "Unescaped or mismatched quotes");
			}

			return returnable();
		};

		this.getOptions = function()
		{
			return {
				delimiter: _config.delimiter,
				header: _config.header,
				dynamicTyping: _config.dynamicTyping,
				preview: _config.preview,
				step: _config.step
			};
		};

		function validConfig(config)
		{
			if (typeof config !== 'object')
				config = {};

			if (typeof config.delimiter !== 'string'
				|| config.delimiter.length != 1)
				config.delimiter = _defaultConfig.delimiter;

			if (config.delimiter == '"' || config.delimiter == "\n")
				config.delimiter = _defaultConfig.delimiter;

			if (typeof config.header !== 'boolean')
				config.header = _defaultConfig.header;
			
			if (typeof config.dynamicTyping !== 'boolean')
				config.dynamicTyping = _defaultConfig.dynamicTyping;

			if (typeof config.preview !== 'number')
				config.preview = _defaultConfig.preview;

			if (typeof config.step !== 'function')
				config.step = _defaultConfig.step;

			return config;
		}

		function guessDelimiter(input)
		{
			var delimiters = [",", "\t", "|", ";"];
			var bestDelim, bestDelta, fieldCountPrevRow;

			for (var i in delimiters)
			{
				var delim = delimiters[i];
				var delta = 0, avgFieldCount = 0;

				var preview = new Parser({
					delimiter: delim,
					header: false,
					dynamicTyping: false,
					preview: 10
				}).parse(input);

				for (var j in preview.results)
				{
					var fieldCount = preview.results[j].length;
					avgFieldCount += fieldCount;

					if (typeof fieldCountPrevRow === 'undefined')
					{
						fieldCountPrevRow = fieldCount;
						continue;
					}
					else if (fieldCount > 1)
					{
						delta += Math.abs(fieldCount - fieldCountPrevRow);
						fieldCountPrevRow = fieldCount;
					}
				}

				avgFieldCount /= preview.results.length;

				if ((typeof bestDelta === 'undefined' || delta < bestDelta)
					&& avgFieldCount > 1.99)
				{
					bestDelta = delta;
					bestDelim = delim;
				}
			}

			_config.delimiter = bestDelim;

			return !!bestDelim;
		}

		function handleParens()
		{
			var delimBefore = (_state.i > 0 && isBoundary(_state.i-1))
								|| _state.i == 0;
			var delimAfter  = (_state.i < _input.length - 1 && isBoundary(_state.i+1))
								|| _state.i == _input.length - 1;
			var escaped     = _state.i < _input.length - 1
								&& _input[_state.i+1] == '(';
			var releaseEscape = _state.i < _input.length - 1 
								&& _state.ch == ')';
				
			if (releaseEscape)
				_state.inParens = false;
			else if (_state.ch == '(')
				_state.inParens = true;
			else
				addError("Parentheses", "UnexpectedParentheses", "Unexpected parentheses");
		}
		
		function handleQuote()
		{
			var delimBefore = (_state.i > 0 && isBoundary(_state.i-1))
								|| _state.i == 0;
			var delimAfter  = (_state.i < _input.length - 1 && isBoundary(_state.i+1))
								|| _state.i == _input.length - 1;
			var escaped     = _state.i < _input.length - 1
								&& _input[_state.i+1] == '"';

			if (_state.inQuotes && escaped)
			{
				_state.fieldVal += '"';
				_state.i++;
			}
			else if (delimBefore || delimAfter)
				_state.inQuotes = !_state.inQuotes;
			else
				addError("Quotes", "UnexpectedQuotes", "Unexpected quotes");
		}

		function inQuotes()
		{
			appendCharToField();
		}
		
		function inParens()
		{
			appendCharToField();
		}

		function appendCharToField()
		{
			_state.fieldVal += _state.ch;
		}

		function notEscaped()
		{
			if (_state.ch == _config.delimiter)
				saveValue();
			else if ((_state.ch == "\r" && _state.i < _input.length - 1
						&& _input[_state.i+1] == "\n")
					|| (_state.ch == "\n" && _state.i < _input.length - 1
						&& _input[_state.i+1] == "\r"))
			{
				newRow();
				_state.i++;
			}
			else if (_state.ch == "\n" || _state.ch == "\r")
				newRow();
			else
				appendCharToField();
		}

		function isBoundary(i)
		{
			if (i >= _input.length)
				return false;
			
			var ch = _input[i];

			if (ch == _config.delimiter
				|| ch == "\n"
				|| (ch == "\r" && i < _input.length - 1 && _input[i+1] == "\n"))
				return true;
			else
				return false;
		}

		function isLineEnding(i)
		{
			if (i >= _input.length)
				return false;

			if (i < _input.length - 1)
				return _input[i] == "\n" || (_input[i] == "\r" && _input[i+1] == "\n");
			else
				return _input[i] == "\n";
		}

		function saveValue()
		{
			if (_config.header)
			{
				if (_state.lineNum == 1 && _invocations == 1)
					_state.parsed.fields.push(_state.fieldVal)
				else
				{
					var currentRow = _state.parsed.rows[_state.parsed.rows.length - 1];
					var fieldName = _state.parsed.fields[_state.field];
					if (fieldName)
					{
						if (_config.dynamicTyping)
							_state.fieldVal = tryParseFloat(_state.fieldVal);
						currentRow[fieldName] = _state.fieldVal;
					}
					else
					{
						if (typeof currentRow.__parsed_extra === 'undefined')
							currentRow.__parsed_extra = [];
						currentRow.__parsed_extra.push(_state.fieldVal);
					}
				}
			}
			else
			{
				if (_config.dynamicTyping)
					_state.fieldVal = tryParseFloat(_state.fieldVal);
				_state.parsed[_state.parsed.length - 1].push(_state.fieldVal);
			}
			
			_state.fieldVal = "";
			_state.field ++;
		}

		function newRow()
		{
			endRow();

			if (streaming())
			{
				_state.errors = {};
				_state.errors.length = 0;
			}

			if (_config.header && _state.lineNum > 0)
			{
				if (streaming())
					_state.parsed.rows = [ {} ];
				else
					_state.parsed.rows.push({});
			}
			else
			{
				if (streaming())
					_state.parsed = [ [] ];
				else
					_state.parsed.push([]);
			}

			_state.lineNum ++;
			_state.line = "";
			_state.field = 0;
		}

		function endRow()
		{
			if (_abort)
				return;

			saveValue();

			var emptyLine = trimEmptyLine();
			
			if (!emptyLine && _config.header)
				inspectFieldCount();

			if (streaming() && (!_config.header ||
					(_config.header && _state.parsed.rows.length > 0)))
			{
				var keepGoing = _config.step(returnable());
				if (keepGoing === false)
					_abort = true;
			}
		}

		function streaming()
		{
			return typeof _config.step === 'function';
		}

		function tryParseFloat(num)
		{
			var isNumber = _regex.floats.test(num);
			return isNumber ? parseFloat(num) : num;
		}

		function trimEmptyLine()
		{
			if (_regex.empty.test(_state.line))
			{
				if (_config.header)
				{
					if (_state.lineNum == 1)
					{
						_state.parsed.fields = [];
						_state.lineNum --;
					}
					else
						_state.parsed.rows.splice(_state.parsed.rows.length - 1, 1);
				}
				else
					_state.parsed.splice(_state.parsed.length - 1, 1);

				return true;
			}
			return false;
		}

		function inspectFieldCount()
		{
			if (!_config.header)
				return true;

			if (_state.parsed.rows.length == 0)
				return true;

			var expected = _state.parsed.fields.length;
			
			// Actual field count tabulated manually because IE<9 doesn't support Object.keys
			var actual = 0;
			var lastRow = _state.parsed.rows[_state.parsed.rows.length - 1];
			for (var prop in lastRow)
				if (lastRow.hasOwnProperty(prop))
					actual++;

			if (actual < expected)
				return addError("FieldMismatch", "TooFewFields", "Too few fields: expected " + expected + " fields but parsed " + actual);
			else if (actual > expected)
				return addError("FieldMismatch", "TooManyFields", "Too many fields: expected " + expected + " fields but parsed " + actual);
			return true;
		}

		function addError(type, code, msg, errKey)
		{
			var row = _config.header
						? (_state.parsed.rows.length ? _state.parsed.rows.length - 1 : undefined)
						: _state.parsed.length - 1;
			var key = errKey || row;

			if (typeof _state.errors[key] === 'undefined')
				_state.errors[key] = [];

			_state.errors[key].push({
				type: type, 
				code: code,
				message: msg,
				line: _state.lineNum,
				row: row,
				index: _state.i + _chunkOffset
			});

			_state.errors.length ++;

			return false;
		}

		function returnable()
		{
			return {
				results: _state.parsed,
				errors: _state.errors
			};
		}

		function reset(input)
		{
			_invocations++;
			if (_invocations > 1 && streaming())
				_chunkOffset += input.length;
			_state = freshState();
			_input = input;
		}

		function freshState()
		{
			// If streaming, and thus parsing the input in chunks, this
			// is careful to preserve what we've already got, when necessary.
			var parsed;
			if (_config.header)
			{
				parsed = {
					fields: streaming() ? _state.parsed.fields || [] : [],
					rows: streaming() && _invocations > 1 ? [ {} ] : []
				};
			}
			else
				parsed = [ [] ];

			return {
				i: 0,
				lineNum: streaming() ? _state.lineNum : 1,
				field: 0,
				fieldVal: "",
				line: "",
				ch: "",
				inQuotes: false,
				inParens: false,
				parsed: parsed,
				errors: { length: 0 }
			};
		}
	}	
		*/