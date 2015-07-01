/**
* @type abcPrinterList {Array} Array containing units of measure
 * small change
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
 * @properties={typeid:35,uuid:"9BA511C5-BBC0-4854-A2CC-B9EE4396446A",variableType:-4}
 */
var browseFS = null;
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
 * @properties={typeid:35,uuid:"33233339-7813-4B0C-BB40-1CC5E50D95FF",variableType:-4}
 */
var dsQuery = [];
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
 * Sheet number index by sheet_id.
 * dsSheetArrayRev[sheet_id] = "_"+sheet_number;
 * @properties={typeid:35,uuid:"EA7937A0-1D06-4E58-8ED1-BBF16C308870",variableType:-4}
 */
var dsSheetArrayRev = [];
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
 * Index integer mapping into dsIdfiles, index by idfile_id. 
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
 * dsIdfileListByPm[piecemark_id] = [idfile1,2,3...]
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
 * dsBarcodeList[id_serial_number_id] = [idfile_id,idfile_id,idfile_id,...]
 * idfile_id array list indexed by barcodeid/id_serial_number_id (1..n)
 * id_serial_number indexed by idfile_id (should always be 1..1)
 * 
 * @properties={typeid:35,uuid:"CEF296A9-6A8F-4E92-A024-C267461B2B24",variableType:-4}
 */
var dsBarcodeList = [];
/**
 * Holds id_serial_number_id, indexed by id_serial_number/barcode.
 * dsBarcodeArray[dsBarcodes.id_serial_number_id] = index_integer into dsBarcodes.
 * 
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
var countsBCandID = null;
/**
 * @properties={typeid:35,uuid:"E94FE975-C814-4098-80B4-3B96BC84F169",variableType:-4}
 */
var createRecordsArray = [];
/**
 * Status on databaseManager saves.
 * @properties={typeid:35,uuid:"33C4B5E5-BA06-4F8A-949F-5BD3844BE1EC",variableType:-4}
 */
var saveStat = true;
/**
 * @properties={typeid:35,uuid:"679573FF-6ACA-4FE3-B107-EA66D08E30FE",variableType:-4}
 */
var usedFields = [];
/**
 * Boolean to set import data append to existing data or not.
 * @properties={typeid:35,uuid:"95280E62-200B-4F04-B3AD-1D78BD22144B",variableType:-4}
 */
var appendToData = false;
/**
 * Boolean to indicate quantities have been appended to transitionFS table.
 * @properties={typeid:35,uuid:"24136611-2D30-4D0D-BA0D-9F748F98A1DE",variableType:-4}
 */
var appendedToData = false;
/**
 * Array of idfiles, unique by uniquePiecemark+SequenceNumber+LotNumber.
 * appendQuantityToIdfile[uniqueIdfile] = existing_item_count
 * @properties={typeid:35,uuid:"D036DA77-7DB2-4903-8F64-DAC1E37F61DF",variableType:-4}
 */
var appendQuantityToIdfile = null;
/**
 * @properties={typeid:35,uuid:"58092B91-9902-41CF-872F-639478065339",variableType:-4}
 */
var importJob = {
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
 * GUI and import update times tracker
 * @type Number}
 *
 * @properties={typeid:35,uuid:"7294EC86-7843-44FF-AABE-1DA2FDDD2BB5",variableType:-4}
 */
var timeIn;
/**
 * temporary hold table for which columns to hide when saving preferences
 * @properties={typeid:35,uuid:"A8D7FCB2-C9D3-483D-8EBB-54E06CFAF5DA",variableType:-4}
 */
var tempTableColumnsHide = [];
/**
 * GUI and import update times tracker
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0D715106-7CBF-490F-8DB0-81FEB8C2C09C"}
 */
var timeOut;
/**
 * GUI and import update times tracker
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAE8F0AA-FA7F-4071-9E34-A72436E8CB9F"}
 */
var timeUpdate;
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
 * @type {String}
 * Hold the selected idfile_id for view transactions for the idfile_id
 * @properties={typeid:35,uuid:"AD4C4756-8406-4414-BFC8-8AE718C60C0D"}
 */
var transactionIdfileId = null;
/**
 * @properties={typeid:35,uuid:"AABDF6B8-AEA2-44A9-AF6B-FC19B543C9D4",variableType:-4}
 */
var cowInfo = {
	custCode : null,
	commCode : null,
	currency : null,
	weight : null,
	cost : null
}
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
 * @properties={typeid:35,uuid:"F6946598-108D-4E85-8E7E-0647506213D4"}
 */
var browseJobIDrecall = "";
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
 * Piecemarks which need to be deleted. in Bulk.  piecemark_id files.
 * @properties={typeid:35,uuid:"728D1505-B9B0-49BF-82D2-386673E78B8C",variableType:-4}
 */
var piecemarksToDelete = [];
/**
 * Idfiles which need to be deleted. in Bulk. idfile_id files.
 * @properties={typeid:35,uuid:"DBA7AED4-8984-4F69-B2D8-CD75F68FA35B",variableType:-4}
 */
var idfilesToDelete = [];
/**
 * Barcodes which need to be deleted. in bulk. id_serial_number_id records.
 * @properties={typeid:35,uuid:"D90C164E-1B19-466E-9D49-8E79CA3D8CAC",variableType:-4}
 */
var barcodesToDelete = [];
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
 * @properties={typeid:35,uuid:"ABC9E86F-0C84-4FFC-A70A-19E888A421F8",variableType:-4}
 */
var columnNames2 = []; // columnNames for browsing sql-based forms
/**
 * @properties={typeid:35,uuid:"1D1DC7BD-66CD-442D-BE61-BB6305AEE98C",variableType:-4}
 */
var removeColumns = [];
/**
 * Keep separate count for job load information browsing.
 * @type {String}
 * @properties={typeid:35,uuid:"F4DAEC4A-73A1-490F-AE39-D8E9CFFF5DDA"}
 */
var loadCountsJobId = null;
// -------------------------------------------------------------------------------------------------------------------
/**
 * dsLotArray["_"+lotNum+"|"+"_"+seqNum] = lot_id
 * dsLotArray[lot_id] = "_"+lotNum+"|"+"_"+seqNum
 * dsLotList[lot_id] = *index into dsLots
 * dsLots = *lots dataset*
 *
 * @properties={typeid:24,uuid:"6E2CF020-94D1-47F6-9386-AA2D60663083"}
 */
function readLots(){
	dsLotArray = [];
	dsLotList = [];
	dsLots = null;
	var length = dsSequences.getMaxRowIndex();
	if (length == 0){return}
	var textList = "("; var comma = ",";
	var index2 = 1;
	for (var sequence in dsSequenceArray){
		//application.output('sequence '+sequence+' '+sequence.length);
		if (sequence.length != 36){continue}
		if (index2++ == length){comma=""}
		textList = textList + "\'"+sequence+"\'"+comma;
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
	var lotId = ""; var seqId = ""; var lotNum = ""; var seqNum = "";
	var lotsLength = dsLots.getMaxRowIndex();
	for (var index = 1;index <= lotsLength;index++){
		dsLots.rowIndex = index;
		lotId = dsLots.lot_id;
		seqId = dsLots.sequence_id;
		lotNum = dsLots.lot;
		seqNum = dsSequenceArray[seqId];
		dsLotList[lotId] = index;
		var unique = "_"+lotNum+"|_"+seqNum.split("_")[1];
		dsLotArray[unique] = lotId;
		dsLotArray[lotId] = unique;
	}
	application.output("lots "+lotsLength);
}
/**
 * dsBarcodeArray[id_serial_number_id] = *rowIndex into dsBarcodes dataset*
 * 
 * @properties={typeid:24,uuid:"572C709C-5984-4FAA-9EFC-CB7738A8FE28"}
 */
function readBarcodes(jobID){
	//dsBarcodeList already defined in readIdfiles()
	var bcListArray = []; //temporary array list of barcode ids
	if (dsIdfiles == null || dsIdfiles.getMaxRowIndex() == 0){return}
	var rows = dsIdfiles.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		dsIdfiles.rowIndex = index;
		var serialID = dsIdfiles.id_serial_number_id;
		if (!bcListArray[serialID]){
			bcListArray.push(serialID);
		}
	}
	var textList = "("; var comma = ",";var length2 = bcListArray.length;
	for (var index2 = 0;index2 < length2;index2++){
		if (index2 == length2-1){comma=""}
		textList = textList + "\'"+bcListArray[index2]+"\'"+comma;
	}
	textList += ")";
	bcListArray = [];//temporary array, clear memory
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
	var length = dsBarcodes.getMaxRowIndex();
	for (var index3 = 1;index3 <= length;index3++){
		dsBarcodes.rowIndex = index3;
		serialID = dsBarcodes.id_serial_number_id;
		dsBarcodeArray[serialID] = index3;
	}
	scopes.jobs.jobBarcodes = dsBarcodes.getMaxRowIndex();
	application.output("barcodes "+scopes.jobs.jobBarcodes);
}
/**
 * dsSequenceArray["_"+seqNum] = sequence_id
 * dsSequenceArray[sequence_id] = "_"+"_"+seqNum
 * dsSequenceList[sequence_id] = *index into dsSequences.rowIndex*
 * 
 * @properties={typeid:24,uuid:"CE89DA18-B60E-4ECB-A003-860BED5AD4B6"}
 */
function readSequences(jobID){
	var seqNameList = scopes.jobs.jobSheets;
	dsSequenceList = [];
	dsSequences = null;
	dsSequenceArray = [];
	var query = "SELECT * " +
		"FROM sequences " +
		"WHERE job_id = ? " +
		" AND delete_flag IS null " +
		"AND tenant_uuid = ? ";
	var args = [jobID,globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	dsSequences = databaseManager.getDataSetByQuery('stsservoy', query, args , -1);
	var rows = dsSequences.getMaxRowIndex();
	var seqId = ""; var seqNum = ""; var unique = "";
	for (var index = 1;index <= rows;index++){
		dsSequences.rowIndex = index;
		seqId = dsSequences.sequence_id;
		seqNum = dsSequences.sequence_number;
		var unique = "_"+seqNum;
		if (seqNameList.indexOf(unique) == -1){
			seqNameList.push(unique);
		}
		dsSequenceArray[unique] = seqId;
		dsSequenceArray[seqId] = unique;
		dsSequenceList[seqId] = index;
	}
	application.output("sequences "+dsSequences.getMaxRowIndex());
}
/**
 * 	 * dsBarcodeList[id_serial_number_id] = [idfile_id1...idfile_id2]
	 * dsBarcodeList[idfile_id] = id_serial_number_id
	 * dsIdfileArray[id_serial_number_id] = *count idfiles this barcode*
	 * dsIdfileList[idfile_id] = *index into dsIdfiles*
	 * dsIdfileArray[uniqueIdfileId] = dsIdfileArray[id_serial_number_id]
	 * dsIdfileListByPm[piecemark_id] = [idfileId1..idfileIdn] list of idfiles by piecemark
 * @properties={typeid:24,uuid:"43E161F1-BDDC-4019-9B37-E2263D4C2866"}
 */
function readIdfiles(){
	dsBarcodeList = [];
	dsIdfileList = [];
	dsIdfiles = null;
	dsIdfileArray = [];
	dsIdfileListByPm = []; 
	var barcodeRecorded = [];
	if (dsPiecemarks == null){return}
	if (dsPiecemarks.getMaxRowIndex() == 0){return}
	var textList = "("; var comma = ",";
	var length = dsPiecemarks.getMaxRowIndex();
	for (var index2 = 1;index2 <= length;index2++){
		if (index2 == length){comma=""}
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
	var pmId = ""; var bcId = ""; var seqId = ""; var lotId = ""; var idId = "";
	for (var index = 1;index <= rows;index++){
		dsIdfiles.rowIndex = index;
		pmId = dsIdfiles.piecemark_id;
var holdPmIndex = dsPiecemarks.rowIndex;
dsPiecemarks.rowIndex = dsPiecemarkList[pmId];
application.output(index+' piecemark for dsIdfiles creation '+dsPiecemarkList[pmId]+' '+dsPiecemarks.material);
dsPiecemarks.rowIndex = holdPmIndex;

		bcId = dsIdfiles.id_serial_number_id;
		seqId = dsIdfiles.sequence_id;
		lotId = dsIdfiles.lot_id;
		idId = dsIdfiles.idfile_id;
		dsIdfileList[idId] = index;// index into dsIdfiles
		if (dsIdfileArray[bcId] != null) {
			dsIdfileArray[bcId]++;
		} else {
			dsIdfileArray[bcId] = 1;
		}
	}
	for (index = 1;index <= rows;index++){
		dsIdfiles.rowIndex = index;
		pmId = dsIdfiles.piecemark_id;
		bcId = dsIdfiles.id_serial_number_id;
		seqId = dsIdfiles.sequence_id;
		lotId = dsIdfiles.lot_id;
		idId = dsIdfiles.idfile_id;

		if (dsBarcodeList[bcId] == null){
			dsBarcodeList[bcId] = [];
		}
		dsBarcodeList[bcId].push(idId);//barcodes->idfiles (1..n)
		dsBarcodeList[idId] = bcId;//reverse idfile->barcode (1..1)
		var uniqueIdfileId = uniqueIdfile(dsIdfiles);
		var barcodeId = bcId;
		var barcodeCount = dsIdfileArray[bcId];
		if (dsIdfileArray[uniqueIdfileId] == null){
			dsIdfileArray[uniqueIdfileId] = [];
		}//foreach each idfile, get piecemark, if barcode count isn't collected, then store the number in the array
		// the length of the array is the number of labels, the count is for each label
		if (barcodeRecorded.indexOf(bcId) == -1){
			dsIdfileArray[uniqueIdfileId].push(barcodeCount);
			barcodeRecorded.push(bcId);
			//application.output(unique+" "+barcodeCount);
		}
		if (!dsIdfileListByPm[pmId]){
			dsIdfileListByPm[pmId] = []
		}
		dsIdfileListByPm[pmId].push(idId);
	}
	application.output("idfiles "+dsIdfiles.getMaxRowIndex());
}
/**
 * dsTossed.rowIndex dataset
 * dsTossedArray[material,grade,finish] = piecemark_id
 * dsTossedArray[piecemark_id] = material,grade,finish
 * dsTossedList[piecemark_id] = *rowIndex into dsTossed dataset*
 * 
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
 * 
 * Also returns total weight, total piecemarks, total pieces, number barcodes
 * 
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
	var pmId = "";
	for (var index = 1;index <= rows;index++){
		dsPiecemarks.rowIndex = index;
		pmId = dsPiecemarks.piecemark_id;
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
	args = [globals.secCurrentTenantID];
	/** @type {JSDataSet} */
	var weightTotal = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	scopes.jobs.jobWeightTotal  = weightTotal[0][1]; 	
	scopes.jobs.jobPiecesCount  = weightTotal[0][0]; 	
	scopes.jobs.jobPcmkCount = dsPiecemarks.getMaxRowIndex();
	application.output("piecemarks "+scopes.jobs.jobPcmkCount);
}
/**
 * 
 * @param jobID
 *
 * dsSheetArray["_"+sheetNum] = sheet_id
 * dsSheetArray[sheet_id] = "_"+sheetNum
 * dsSheetArrayRev[sheet_id] = "_"+sheetNum
 * dsSheetList[sheet_id] = *rowIndex into dsSheets*
 * dsSheets *sheets dataset*
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
	args.push(globals.secCurrentTenantID);
	/** @type {JSDataSet} */
	dsSheets = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	var sheetNum = ""; var sheetId = "";
	var rows = dsSheets.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		dsSheets.rowIndex = index;
		sheetNum = dsSheets.sheet_number;
		sheetId = dsSheets.sheet_id;
		dsSheetList[sheetId] = index;
		var unique = "_"+sheetNum;
		dsSheetArray[unique] = sheetId;
		dsSheetArray[sheetId] = unique;
		dsSheetArrayRev[sheetId] = unique;
		if (sheetNameList.indexOf(unique) == -1){sheetNameList.push(unique)}
		/**

		 */
	}
	application.output("sheets "+dsSheets.getMaxRowIndex());
}
/**
 * @properties={typeid:24,uuid:"86255815-5347-479B-AF2D-55778E4DF0EB"}
 */
function readPieceTables(){
	var jobID = scopes.jobs.jobUnderCustomer;
	application.output('readpiecetables job id '+jobID+'----------------------------------------');
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
			rec.e_route_code_id = forms.kiss_option_import.importRouting;
			rec.delete_flag = 11; // 1+1 is summarization record
			rec.edit_date = new Date();
			dsPiecemarkArray[unique] = rec.piecemark_id;
			createRecordsArray.push(rec);
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
 * Search import table (transitionFS) and load any piecemark records that are not in the import file but are
 * in the database into sheets table (sheetsFS)
 * @properties={typeid:24,uuid:"03642EF1-4D23-423D-973C-B7F3DBF03703"}
 */
function loadCurrentJobsRecords(){
	if (dsIdfiles == null){return}
	warningsYes();
	var missCount = 0;
	//timeIn = new Date().getTime();
	var found = false;
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
				.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			);
		var resultI = databaseManager.getFoundSet(q);  
		var lengthI = databaseManager.getFoundSetCount(resultI);
		//application.output('length is '+length);
		warningsMessage('Checking current line '+index2+" of "+length2+' ('+lengthI+' items)');
		var length5 = 0;
 		for (var index3 = 1;index3 <= resultI.getSize();index3++){ // set visitId with each idfile comparable to idfiles listing
			var idRec = resultI.getRecord(index3);
			var visIndex = dsIdfileList[idRec.idfile_id]-1;
			//application.output('record index '+index3+' record idfileID '+newIndex+' visit index '+' dsidfilelist index '+dsIdfileList[idRec.idfile_id]);
			visitId[visIndex] = 1;
			length5 += 1;
		}
 		//application.output('length adding '+length5);
		resultI = null;
	}
	var indexPmSqLt = [];
	var existingIdfiles = [];
	var idfileRec = null;
	for (index3 = 0;index3 < visitId.length;index3++){
		if (visitId[index3] == 0){
			dsIdfiles.rowIndex = index3+1*1;
			var idIdfile = dsIdfiles.piecemark_id+' '+dsIdfiles.sequence_id+' '+dsIdfiles.lot_id;
			if (!indexPmSqLt[idIdfile]){
				indexPmSqLt[idIdfile] = index3+1*1; // one or many idfiles for a piecemark, get it once
				existingIdfiles.push(dsIdfiles.idfile_id);
				dsPiecemarks.rowIndex = dsPiecemarkList[dsIdfiles.piecemarkid];
				loadBlindIntoImportTable(idfileRec = dsIdfiles);
				missCount += 1;
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
 * TODO generated, please specify type and doc for the params
 * @param record
 *
 * @properties={typeid:24,uuid:"0F4A5AB0-7805-44A5-8BB9-DAAC25E24150"}
 * @AllowToRunInFind
 */
function loadBlindIntoImportTable(record){
	var incoming = forms.kiss_option_import.transitionFS;
	var sheets = forms.kiss_option_import.sheetsFS;

	var columns = sheets.getMaxColumnIndex();
	var idfilesList = dsIdfileListByPm[record.piecemark_id]; // are these idfiles not in the import file?

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
 * @properties={typeid:24,uuid:"8691EA68-B1E1-4815-A878-AD60BDC0B929"}
 */
function tableHideFieldsReset(){
	//globals.a.tempHiddenColumns = [];
	globals.a.tempHiddenEmpty = [];
}
/**
 * Hide elements if element is in hide colum list and 
 * @param fieldName
 *
 * @properties={typeid:24,uuid:"27A3F6A8-2E09-4502-84FA-13F501015E86"}
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
 * @properties={typeid:24,uuid:"6F0DC9D2-F762-48DB-8986-1B959B8F4C8B"}
 */
function tablePrefsLoad(formx){
	if (!formx || formx == ""){
		var formx = controller.getName();
	}
	if (forms[formx].elements.tabless){
		var formy = forms[formx].elements.tabless.getTabFormNameAt(1);
	} else {
		formy = formx; // already adjudicated as a table form
	}
	globals.a.tempHiddenColumns[formy] = [];
	var elems = forms[formy].elements;
	/** @type {JSDataSet<db:/stsservoy/preferences2>} */
	var prefsFS = databaseManager.getFoundSet('stsservoy','preferences2');
	for (var index in elems){
		var colName = elems[index].getName();
		var vis = (elems[index].isVisible()) ? 1 : 0;
		var colDims = elems[index].getLocationX()+","+0+","+elems[index].getWidth()+","+vis;
		if (prefsFS.find()) {
			prefsFS.user_id = -1;
			prefsFS.form_name = formy;
			prefsFS.field_name = colName;
			prefsFS.tenant_uuid = globals.secCurrentTenantID;
			var index2 = prefsFS.search();
			if (index2 > 0) {
				var sets = prefsFS.field_value.split(",");
				if (prefsFS.field_value != colDims){
					//application.output('field '+colName+" dims "+colDims+" prefs "+prefsFS.field_value);
					elems[index].setLocation(sets[0],sets[1]);
					elems[index].setSize(sets[2],elems[index].getHeight());
					/**if (sets[3]){
						application.output('entering visible '+sets[3]);
						//elems[index].visible = (sets[3] == 1);
					}*/
				}
				if (sets[3] && sets[3] == 0 && globals.a.tempHiddenColumns[formy].indexOf(colName) == -1){
					globals.a.tempHiddenColumns[formy].push(colName);
				}
			}
		}
		elems[index].visible = tableHideField(colName,formy);
	}
	//application.output('hiding '+globals.a.tempHiddenColumns.length);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param jobId
 * @param tenantId
 *
 * @properties={typeid:24,uuid:"3BD3B478-4AF1-4C64-BEC8-7A14C5CAFF18"}
 */
function getJobPieces(jobId,tenantId,flaggedDeleted){
	var queryIdfiles =  'select sum(original_quantity) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '+
	' and sheets.job_id = ? AND sheets.tenant_uuid = ? AND sheets.delete_flag IS null '+
	' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id AND idfiles.delete_flag IS null '+
	' inner join sequences on sequences.sequence_id = idfiles.sequence_id inner join '+
	' id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id ';
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
 * TODO generated, please specify type and doc for the params
 * @param jobId
 * @param tenantId
 *
 * @properties={typeid:24,uuid:"BFD7E5BF-5ED9-4B9B-BD87-7423A902FFB7"}
 */
function getJobPiecemarkCount(jobId,tenantId,flaggedDeleted){
	var queryPiecemarks = 'SELECT count(*) FROM piecemarks INNER JOIN sheets ON piecemarks.sheet_id = sheets.sheet_id ' + 
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
	args.push(tenantId);
	return databaseManager.getDataSetByQuery('stsservoy', queryPiecemarks, args , maxReturnedRows)[0][0];
}
/**
 * TODO generated, please specify type and doc for the params
 * @param jobId
 * @param tenantId
 *
 * @properties={typeid:24,uuid:"44B4B0B6-DDE4-4BA3-B129-A2F7BA413F18"}
 */
function getJobBarcodeCount(jobId,tenantId,flaggedDeleted){
	var queryBarcodes = 'select count (distinct id_serial_number) id_serial_number from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id \
		and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL \
		inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL \
		inner join id_serial_numbers on id_serial_numbers.id_serial_number_id = idfiles.id_serial_number_id';
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
 * TODO generated, please specify type and doc for the params
 * @param jobId
 * @param tenantId
 *
 * @properties={typeid:24,uuid:"B5E0D2DF-099B-46C7-A8C6-44CA9DF0D09D"}
 */
function getJobTotalWeight(jobId,tenantId,flaggedDeleted){
	if (flaggedDeleted){return 0} //not reporting weight on deleted items
	var queryWeight =  'select * from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '
	+ ' and sheets.delete_flag IS NULL'
	+ ' and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL and piecemarks.piecemark = piecemarks.parent_piecemark '
	+ ' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL'
	var maxReturnedRows = -1;
	var args = [];
	args.push(jobId.toString());
	args.push(tenantId);
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
		weight = weight + weightFS.item_weight * weightFS.summed_quantity;
		pieces = pieces + weightFS.summed_quantity;
		//}
		//count = weightFS.getMaxRowIndex();
		index++;
	}
	var stats = [weight,pieces];
	return stats;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} Information is flaggedDeleted
 *
 * @properties={typeid:24,uuid:"99D86CE4-07A3-4625-8174-9F332A538ACD"}
 * @AllowToRunInFind
 */
function onGetInformation(event,flaggedDeleted) {
	if (!forms[event.getFormName()].jobFound) {return}
	var formX = forms[event.getFormName()];
	var formXName = event.getFormName();
	var vJobID = formX.vJobID;
	formX.vLabNumPcmks = scopes.jobs.getJobPiecemarkCount(vJobID,globals.secCurrentTenantID,flaggedDeleted);
	formX.vLabIDNums = scopes.jobs.getJobBarcodeCount(vJobID,globals.secCurrentTenantID,flaggedDeleted);
	var arrayWghtPc = scopes.jobs.getJobTotalWeight(vJobID,globals.secCurrentTenantID,flaggedDeleted);
	formX.vLabTotPieces = arrayWghtPc[1]; //scopes.jobs.getJobPieces(vJobID,globals.secCurrentTenantID,flaggedDeleted);
	formX.vLabTotalWt = arrayWghtPc[0]; //scopes.jobs.getJobTotalWeight(vJobID,globals.secCurrentTenantID,flaggedDeleted);
	if (!formX.vLabTotalWt) {formX.vLabTotalWt = 0}
	if (!formX.vLabTotPieces) {formX.vLabTotPieces = 0}
	
	if (formX.vLabTotPieces != 0 || formX.vLabIDNums != 0){
		formX.elements.buttBrowse.enabled = true;
	}
	if (formXName.search('load') == -1){
		var formXPrefix = formXName.split("_")[0];
		formX.collectCriteria(formXPrefix+'_piecemark_info');
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"14DEEB4E-751E-49C1-9413-A3019516DB6D"}
 * @AllowToRunInFind
 */
function tablePrefsSave(event){
	var win = application.createWindow("Column Order", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(10, 10, 555, 485);
	win.title = "This is the column settings window.";
	globals.modalResponse = "";
	win.show(forms.gen_table_order);
	//if (globals.modalResponse == "Cancel"){return}
	var formx = event.getFormName();
	warningsYes();
	//application.output(event);
	//application.updateUI();
	forms[formx].errorMessage = "Saving table column order.";
	application.updateUI();
	var formsInUse = [];
	var formy = null;
	if (forms[formx].elements.tabless){
		var formy = forms[formx].elements.tabless.getTabFormNameAt(1);
		formsInUse.push(formy);
	}
	if (forms[formx].elements.split){
		var formCombo = event.getFormName().split("_")[0]+'_pcmk_combo';
		var top = forms[formCombo].elements.split.getLeftForm().controller.getName();
		var bot = forms[formCombo].elements.split.getRightForm().controller.getName();
		formsInUse.push(top);
		formsInUse.push(bot);
	}
	if (formsInUse.length == 0){
		return;
	}
	while (formsInUse.length > 0){
		formy = formsInUse.pop();
		var elems = forms[formy].elements;
		/** @type {JSDataSet<db:/stsservoy/preferences2>} */
		var prefsFS = databaseManager.getFoundSet('stsservoy','preferences2');
		for (var index in elems){
			warningsMessage('Saving column settings');
			var colName = elems[index].getName();
			if (colName == ""){continue}//sometimes a blank entry after array and value list manip
			//application.output('colname -'+colName+'- form form '+formy+' '+scopes.globals.a.tempHiddenColumns);
			var visible = (scopes.globals.a.tempHiddenColumns[formy].indexOf(colName) != -1) ? 0 : 1;
			var colDims = elems[index].getLocationX()+","+0+","+elems[index].getWidth()+","+visible;
			//var colDims = elems[index].getLocationX()+","+0+",110";
			if (prefsFS.find()) {
				prefsFS.user_id = -1;
				prefsFS.form_name = formy;
				prefsFS.field_name = colName;
				prefsFS.tenant_uuid = globals.secCurrentTenantID;
				//prefsFS.value_material = rec.shape;
				var index2 = prefsFS.search();
				if (index2 > 0) {
					var maxIndex = prefsFS.getSize();
					var rec = prefsFS.getRecord(1);
					if (prefsFS.field_value != colDims){
						rec.field_value = colDims;
						rec.edit_date = new Date();
						status = databaseManager.saveData(rec);
						//application.output('save status change '+status);
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
					newRec.edit_date = new Date();
					var status = databaseManager.saveData(newRec);
					//application.output('save status '+status);
				}
			}
		}
		forms[formx].errorMessage = "Column ordering SAVED.";
		warningsMessage('Column ordering SAVED.');
		warningsX();
	}
}
/**
  * @param criteria
 * @param formName
 *
 * @properties={typeid:24,uuid:"291002AB-CA66-478B-9A31-02A35914B265"}
 * @AllowToRunInFind
 */
function viewBTableToForm(criteria,formName){
	/**
	 * create dataset
	 * load dataset
	 * create columns
	 * dsPiecemarks,dsBarcodes,dsIdfiles,dsSequences,dsLots,dsSheets
	 */
	dsQuery = viewBTableSQL(criteria,formName);
	var maxReturnedRows = -1;
	var args = [];
	args.push(scopes.jobs.browseJobID);
	/** @type  {JSDataSet} */
	browseFS = databaseManager.getDataSetByQuery('stsservoy', dsQuery, args , maxReturnedRows);
	viewBTableRemoveColumns();//dsBrowse and browseFS
	viewBTableRemoveRows();//browseFS
	///browseDatasource = browseFS.createDataSource(formName+'_browse',browseArray);
	browseDatasource = browseFS.createDataSource(formName+'_browse',dsBrowse);
	///application.output('datasource form '+formName+"_browse");
	viewBTableCreateForm(formName);
	tablePrefsLoad(formName)
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param criteria
 *
 * @properties={typeid:24,uuid:"5A86864F-9E7D-4360-B2ED-A560C169623F"}
 */
function viewBTableSQL(criteria,formName){
	/**
	 * Left join for records  which may not exist.  inner join for necessary records.
	 */
	query = 'select random()*1000000 AS "browsing_id",0 AS "Selection",* from piecemarks p '+
	' right join routings rt on rt.routing_id = p.e_route_code_id '+
	' inner join sheets s on p.sheet_id = s.sheet_id SHT '+
	' and s.job_id = ? AND s.delete_flag IS null PCMK '+
	' inner join idfiles i on i.piecemark_id = p.piecemark_id AND i.delete_flag FLAG SONUM FABS AREA PCRL LDN COW LOT PKG'+
	' inner join sequences ss on ss.sequence_id = i.sequence_id SEQN ' +
	' inner join id_serial_numbers b on b.id_serial_number_id = i.id_serial_number_id ' +
	' left join status_description sd on sd.status_description_id = i.status_description_id ' +
	' left join loads l on l.load_id = i.current_load_id LDRR '+
	' order by p.parent_piecemark, p.piecemark';
	
	if (formName.search(/(recall|remove)/) == -1){
		query = query.replace('FLAG',"IS null");
	} else {
		query = query.replace('FLAG','= 99');
	}
		/**query = 'select random()*1000000 AS "browsing_id",0 AS "Selection",* from piecemarks p '+
		' right join routings rt on rt.routing_id = p.e_route_code_id '+
		' inner join sheets s on p.sheet_id = s.sheet_id SHT '+
		' and s.job_id = ? PCMK '+
		' inner join idfiles i on i.piecemark_id = p.piecemark_id AND i.delete_flag = 99 SONUM FABS AREA PCRL LDN COW LOT PKG'+
		' inner join sequences ss on ss.sequence_id = i.sequence_id SEQN ' +
		' inner join id_serial_numbers b on b.id_serial_number_id = i.id_serial_number_id ' +
		' left join status_description sd on sd.status_description_id = i.status_description_id ' +
		' left join loads l on l.load_id = i.current_load_id LDRR'+
		' order by p.parent_piecemark, p.piecemark';	
	}*/
	//  FLAG PCMK SHT SEQN SONUM LDN LDR PCRL FABS JOBR AREA BTCH COW (LOT) (PKG)
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
		query = query.replace('LDRR'," AND l.load_release IN "+criteria.loadrel);
	} else {
		query = query.replace('LDRR','');
	}
	if (criteria.loadall){//need number to id current_load_id
		query = query.replace('LDN'," AND i.current_load_id IN "+criteria.loadall);
	} else {
		query = query.replace('LDN','');
	}
	//application.output('sql here');
	return query;
}
/**
 * @properties={typeid:24,uuid:"D24C1FF9-3120-488F-8A7E-FEE2E8A48D82"}
 */
function viewBTableRemoveColumnArray(){
	for (index=removeColumns.length-1;index > -1;index--){
		browseFS.removeColumn(removeColumns[index]);
	}	
}
/**
 * @properties={typeid:24,uuid:"28B0AC58-327F-49AD-8C12-D4A87EF0E894"}
 */
function viewBTableRemoveColumns(){
	columnNames2 = []; var index = 0; var fieldIndex = 0; removeColumns = [];

	columnNames2.push('Selection');//Want this one first
	browseArray = [];
	nullRow = [];
	var cols = browseFS.getMaxColumnIndex();
	dsBrowse = null;
	dsBrowse = databaseManager.createEmptyDataSet();
	for (index = 1;index <= cols;index++){
		var columnName = browseFS.getColumnName(index);
		if (columnName == null){continue}
		//application.output(' column for delete table '+columnName);
		if (columnNames2.indexOf(columnName) != -1){
			removeColumns.push(index);
			continue}
		columnNames2[fieldIndex] = columnName;
		if (columnName == "Selection"){
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
		browseFS.removeColumn(removeColumns[index]);
	}
}
/**
 * @properties={typeid:24,uuid:"CA416456-63D1-4201-8A14-AA2BE558094B"}
 */
function viewBTableRemoveRows(){
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
		var intQuant = Math.floor(uniqueBCount[browseFS.id_serial_number_id]).toFixed();
		browseFS.sequence_quantity = intQuant;
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param formName
 *
 * @properties={typeid:24,uuid:"8A450FAC-741E-4BF2-A98F-92790F073662"}
 */
function viewBTableCreateForm(formName){
	var formNameTable = formName+'_table';
	var checkForm = solutionModel.newForm(formNameTable,browseDatasource,'sts_one',false,500,600);
	var code = 'function onRecordSelection(event){scopes.jobs.onRecordSelectIdfile(event);}';
	
	checkForm.onRecordSelection = checkForm.newMethod(code);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	var last = ""; 
	var offset = 0;
	var colLength = 0;
	for (index = 0;index < columnNames2.length;index++){
		var columnName = columnNames2[index];
		if (columnName == "browsing_id"){
			colLength = 0;
		} else {
			colLength = scopes.prefs.defaultColumnWidth;
		}
	 	last = checkForm.newLabel(columnName,offset,0,colLength,20)
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	if (index == columnName.length -1){
	 		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	 	}
	 	last.labelFor=columnNames2[index];
	 	last.dataProviderID = columnNames2[index];
	 	last.toolTipText = last.labelFor;
	 	if (columnName == "Selection"){
			last = checkForm.newField(columnName,JSField.CHECKS,offset,20,colLength,20);
	 	} else {
			last = checkForm.newField(columnName,JSField.TEXT_FIELD,offset,20,colLength,20);
	 	}
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
		last.name = columnName;
		last.editable = false;
		if (columnName == "Selection"){
			last.editable = true;
		}
	 	offset += colLength;		
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;

	var status = false;
	if (forms[formName].elements.tabless){
		status = forms[formName].elements.tabless.addTab(formNameTable);
	}
	if (!status){
		status = forms[formName].elements.split.setLeftForm(formNameTable);		//forms.delete_pcmk_combo.elements.split.setLeftForm(formNameTable);
	}
}
/**
 * @properties={typeid:24,uuid:"D8DA5987-3E63-41C0-B087-CF2207E337BB"}
 */
function viewBrowseTableRefresh(){
	var args = [];
	args.push(browseJobID); 
	browseDatasource = scopes.jobs.browseSF.getDataSetByQuery('stsservoy', dsQuery, args , -1); 
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
 * @properties={typeid:24,uuid:"EE1A8F6B-A919-402B-A1CA-DFD527B5916D"}
 */
function getCurrentJobID(){
	
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
 * Create idfile for piecemark
 * Uniqueness is piecemark_id, sequence_id, lot_id, except for summmarized piecemarks, which is just piecemark_id.
 * A "" sequence is a summarized piecemark.
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
function createIdfileRecord(pmkUniq,piecemarkId,sequence,lot,barcodeId,quantity,origQuant,summQuantity,remarks){
	/** @type {JSDataSet<db:/stsservoy/idfiles>} */
	var fs = databaseManager.getFoundSet('stsservoy','idfiles');
	//application.output(sequence+' sequence ');
	var lotId = ""; var seqId = "";
	seqId = dsSequenceArray["_"+sequence];
	lotId = dsLotArray["_"+lot+"|_"+sequence];
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	rec.piecemark_id = piecemarkId;
	rec.sequence_id = seqId;
	rec.lot_id = lotId;
	rec.id_serial_number_id = barcodeId;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	rec.original_quantity = origQuant;
	rec.summed_quantity = summQuantity;
	warningsMessage('Pm '+pmkUniq+' : '+utils.stringRight(piecemarkId, 8)+', '+quantity+' items');
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
	createRecordsArray.push(rec);
	return rec.idfile_id;
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
	warningsMessage('Create pm '+unique);
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	rec.job_id = scopes.jobs.jobUnderCustomer;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	rec.material = fsRec.material;
	rec.finish = fsRec.finish;
	rec.grade = fsRec.grade;
	rec.item_length = fsRec.item_length*1;
	rec.item_quantity = fsRec.item_quantity;
	rec.item_weight = fsRec.item_weight;
	rec.parent_piecemark = fsRec.parent_piecemark
	rec.piecemark = fsRec.piecemark;
	rec.sheet_id = dsSheetArray["_"+fsRec.sheet_number];
	var routeCode = fsRec.e_route_code;
	if (globals.m.routes.indexOf(fsRec.e_route_code_id) == -1){
		rec.e_route_code_id = forms.kiss_option_import.importRouting;
	} else {
		rec.e_route_code_id = globals.m.routes[fsRec.e_route_code_id];
	}
	//application.output('route code id '+rec.e_route_code_id);
	if (fsRec.remarks){
		if (forms.kiss_option_import.saveNotesInto.search('Description') != -1){
			rec.description = fsRec.remarks;
		}
	}
	dsPiecemarkArray[unique] = rec.piecemark_id;
	insertedPiecemarks.push(rec.piecemark_id);
	dsIdfileListByPm[rec.piecemark_id] = [];
	createRecordsArray.push(rec);
}
/**
 * @properties={typeid:24,uuid:"C5510BFA-2477-4BF9-95BD-1C54BAAC370E"}
 * @AllowToRunInFind
 */
function createPiecemarks(){
	dsDiffPiecemarks = [];
	warningsMessage('Creating piecemarks.');
	var retainFS = forms.kiss_option_import.transitionFS;
	// tenantuuid, piecemark, grade, sequence, lot
	var jobID = scopes.jobs.jobUnderCustomer;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = rows;
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		////var unique = retainFS.piecemark+","+retainFS.parent_piecemark+","+dsSheetArray["_"+retainFS.sheet_number]+","+retainFS.grade+","+retainFS.finish;
		////	unique = retainFS.material+","+retainFS.grade+","+retainFS.finish; 
		var unique = uniquePiecemark(retainFS);
		if (dsPiecemarkArray[unique] != null){
			//xx application.output('piecemark '+unique+" exists.");
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
						//application.output('idfile Count is incorrect.');
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
							//application.output('barcode count '+pmarkId+" "+seqId+" "+diffBars[index]);
						}
						
					}
				}
			}
		} else {
			//application.output('create piecemark '+unique);
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
	var sheetId = rec.sheet_id+"";
	rec.sheet_number = sheetNumber;
	rec.job_id = scopes.jobs.jobUnderCustomer;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	dsSheetArray["_"+sheetNumber] = sheetId;
	dsSheetArray[sheetId] = "_"+sheetNumber;
	createRecordsArray.push(rec);
}
/**
 * @properties={typeid:24,uuid:"C69E27A8-6A48-41A4-965E-203DC14DEC4A"}
 */
function createSheets(){
	scopes.globals.stsMessages = "Creating sheets.";application.updateUI();
	var newItems = [];
	//var rows = dsBrowse.getMaxRowIndex();
	var retainFS = forms.kiss_option_import.transitionFS;
	var jobID = scopes.jobs.jobUnderCustomer;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = rows;
	var insertCount = 0;//how many lines to insert with this barcode
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		var sheet_num = retainFS.sheet_number;
		var unique = "_"+sheet_num;
		if (dsSheetArray[unique]){
			//application.output("do not create sheet "+sheet_num);
			null;
		} else {
			application.output("create sheet "+sheet_num);
			createSheet(sheet_num);
		}
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sequenceNumber
 *
 * @properties={typeid:24,uuid:"94C0C292-78B1-4029-AC41-08153C635676"}
 * @AllowToRunInFind
 */
function createSequenceNumber(sequenceNumber){
	/** @type {JSDataSet<db:/stsservoy/sequences>} */
	var fs = databaseManager.getFoundSet('stsservoy','sequences');
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	var seqId = rec.sequence_id;
	if (sequenceNumber.search("_") != -1){
		sequenceNumber = sequenceNumber.split("_")[1];
	}
	rec.sequence_number = sequenceNumber;
	rec.job_id = scopes.jobs.jobUnderCustomer;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	var unique = "_"+sequenceNumber;
	dsSequenceArray[unique] = seqId;
	dsSequenceArray[seqId] = unique;
	createRecordsArray.push(rec);
	//dsSequenceList[rec.sequence_id] = newItems[index];
}
/**
 * TODO generated, please specify type and doc for the params
 * @param lotNumber
 * @param sequence
 *
 * @properties={typeid:24,uuid:"90F9B755-75C6-4673-BE5D-4F6DC6DC9512"}
 * @AllowToRunInFind
 */
function createLotNumber(lotNumber,sequence){
	/** @type {JSDataSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	var lotId = rec.lot_id+"";
	var lotNum = lotNumber;
	var seqNum = sequence;
	if (lotNumber.search("_")!= -1){
		lotNum = lotNumber.split("_")[1];
	}
	if (seqNum.search("_")!= -1){
		seqNum = sequence.split("_")[1];
	}
	var	seqId = dsSequenceArray["_"+seqNum];
	rec.lot = lotNum;
	rec.sequence_id = seqId;
	rec.tenant_uuid = scopes.globals.secCurrentTenantID;
	var unique = "_"+lotNum+"|_"+seqNum;
	dsLotArray[unique] = lotId;
	dsLotArray[lotId] = unique;
	createRecordsArray.push(rec);
}
/**
 * @properties={typeid:24,uuid:"234B6EE5-1FBC-4C47-8303-B9A8D35A968F"}
 */
function createLotNumbers(){
	warningsMessage('Creating lots.');
	//var newItems = [];
	var retainFS = forms.kiss_option_import.transitionFS;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		var seq_num = retainFS.sequence_number;
		var lot_num = retainFS.lot_number;
		if (!retainFS.lot_number){
			lot_num = "";
		}
		/**if (!newItems[seq_num]){
			newItems[seq_num] = [];
		}
		if (newItems[seq_num].indexOf(lot_num) == -1){
			newItems[seq_num].push(lot_num);
		}*/
		var unique = "_"+lot_num+"|_"+seq_num;
		if (dsLotArray[unique]){
			warningsMessage('Lot '+unique+' exists');
		} else {
			createLotNumber(lot_num,seq_num);
			warningsMessage('Create lot: '+lot_num+', seq: '+seq_num);
		}
	}
	/**
	 * deleted
	 
		for (var lot = 0;lot < newItems[sequence].length;lot++){
			if (dsLotArray[newItems[sequence][lot]]){
				warningsMessage('Lot exists '+newItems[sequence][lot]);
				continue
			}
		}
		*/
		//dsLotList[rec.lot_id] = newItems[sequence][lot];
}
/**
 * @properties={typeid:24,uuid:"EC33F91A-05F5-41A5-831C-857B708912DD"}
 */
function createSequenceNumbers(){
	warningsMessage('Creating sequences.');
	var newItems = [];
	var retainFS = forms.kiss_option_import.transitionFS;
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
	for (index = 0;index < length;index++){
		if (dsSequenceArray["_"+newItems[index]] != null){
			warningsMessage('Sequence exists '+newItems[index]);
			continue
		}
		warningsMessage('Create sequence '+newItems[index]);
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
 * @param {String} formula
 * @param {String} uom
 * @param {Number} quantity
 * @param {Number} length
 * @param {Number} width
 * @param {Number} weight
 * 
 * @properties={typeid:24,uuid:"8831838A-3512-4C00-ABDB-C0E46B1F7CB2"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"913FDFA7-500F-4AD0-B7E6-5165C446E92F"}
 */
function extd2qty(){
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
	switch(uom)
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
 * TODO generated, please specify type and doc for the params
 * @param decInches
 *
 * @properties={typeid:24,uuid:"59A9B458-FF77-4592-A328-64F7C8565A76"}
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
 * TODO generated, please specify type and doc for the params
 * @param convertType
 * @param decimal
 * @param length
 * @param returnType
 *
 * @properties={typeid:24,uuid:"3E377215-F898-4D37-90A5-1D2780ED8116"}
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
	calc.per = Math.floor(qtyPerBarcode).toFixed();
	calc.last = Math.floor(qtyLastIdfile).toFixed();
	calc.totwt = totWeight;
	calc.pms = Math.floor(qtyPcmk).toFixed();
	calc.bcs = Math.floor(qtyBarcodes).toFixed();
	calc.full =  Math.floor(fullBarcodesTotalled).toFixed();
	return calc;
}
/**
 * @properties={typeid:24,uuid:"38EE56CF-ABB3-4749-B105-34EB010EA0BD"}
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
	return barcode;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param file
 *
 * @properties={typeid:24,uuid:"82933605-B94C-4B67-979A-6E8B9A0BF807"}
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
	
	//warningsX();
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
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param table
 *
 * @properties={typeid:24,uuid:"0B6983DE-9208-499A-AFD2-76A33B879DCB"}
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
		var form = 'loads_pcmk_combo'
		forms[form].elements.split.getLeftForm().elements.Selection.visible = false;
	}
	form = prefix+'_pcmk_combo';
	var formEls = forms[form].elements.split.getLeftForm().elements;
	var browse = databaseManager.getFoundSet(forms[form].elements.split.getLeftForm().controller.getDataSource());
	var browseSet = forms[form].elements.split.getLeftForm().foundset;
	var formTable = forms[form].elements.split.getLeftForm().controller.getName();
	//var disableList = ['checklist','uuid'];
	//for (var tab = 0;tab < 2;tab++){
	if (table != 0){
		var formRt = forms[form].elements.split.getRightForm();
		if (formRt == null){return}
		browse = databaseManager.getFoundSet(forms[form].elements.split.getRightForm().controller.getDataSource());			
		browseSet = forms[form].elements.split.getRightForm().foundset;
		formTable = forms[form].elements.split.getRightForm().controller.getName();
		formEls = forms[form].elements.split.getRightForm().elements;
		browseSet.sort('transaction_date desc');
	}
	var recCount = databaseManager.getFoundSetCount(browseSet);
	//var formName = forms.loads_pcmk_combo.elements.split.getLeftForm().getName();
	//var fs = forms[prefix+'_pcmk_combo_table'].foundset;
	var fs = browseSet;
	//browseSet = forms.loads_pcmk_combo.elements.split.getRightForm().foundset;
	var recCount = databaseManager.getFoundSetCount(browseSet);
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
	}

	return index;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"900C5960-678A-433E-9FD9-9A15388C2368"}
 * @AllowToRunInFind
 */
function onRecordSelectIdfile(event){
	var prefix = event.getFormName().split("_")[0];
	var index = forms[event.getFormName()].controller.getSelectedIndex();
	var rec = forms[event.getFormName()];
	//var fs = databaseManager.getFoundSetCount('sts_piecemarks');
	//fs.sts_piecemark.loadRecords();
	//var fs = rec.piecemark_id.rr;
	scopes.jobs.transactionIdfileId = rec.idfile_id;
	application.output('idfileid '+scopes.jobs.transactionIdfileId);
	application.output('record select '+rec.id_serial_number);
	//forms.gen_browse_trans.controller.loadRecords();
	forms[prefix+'_pcmk_transaction'].controller.loadRecords();
	findEmptyColumns(event,1);
	//application.output('barcode id '+id_serial_number_id);
	//return _super.onRecordSelection(event);
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
	importRouteCodes = [];
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
	createRecordsArray.push(barRec);
	databaseManager.saveData(barRec);
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
		if (pieceFS.find()){
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
 * @properties={typeid:24,uuid:"5796C81D-F2E2-479E-8B71-616BC5ED206B"}
 */
function deleteLotsJob(){
	if (!dsLots){return}
	var tempCodes = [];
	for (var index2 = 1;index2 <= dsLots.getMaxRowIndex();index2++){
		dsLots.rowIndex = index2;
		tempCodes.push(dsLots.lot_id);
	}	

	var count2 = 0;
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	fs.loadRecords(databaseManager.convertToDataSet(tempCodes));
	var count = fs.getSize();
	deleteFoundSet(fs);
	application.output('Lots to delete '+fs.getSize());
	dsLots = null;
	dsLotList = [];
	dsLotArray = [];
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
	application.output('Piecemarks to delete '+count);
	dsPiecemarks = null;
	dsPiecemarkList = [];
	dsPiecemarkArray = [];
	dsTossed = null;
	dsTossedList = [];
	dsTossedArray = [];
}
/**
 * @properties={typeid:24,uuid:"2FDFA49B-79F7-48B5-813C-993E104F30DB"}
 */
function deleteIdfiles(){
	var index = 0;
	var lots = [];
	var barcodes = [];
	var piecemarks = [];
	var piecemarkRec = null;
	if (scopes.jobs.idfilesToDelete.length == 0){return}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q =  databaseManager.createSelect("db:/stsservoy/idfiles");
	q.result.add(q.columns.delete_flag);
	q.result.add(q.columns.lprint);
	q.result.add(q.columns.deleted_date);
	q.result.add(q.columns.lot_id);
	q.result.add(q.columns.edit_date);
	q.where.add(q.columns.idfile_id.isin(scopes.jobs.idfilesToDelete));
	var resultI = databaseManager.getFoundSet(q);
	var length = resultI.getSize();
	for (index = 1;index <= length;index++){
		var rec = resultI.getRecord(index);
		if (barcodes.indexOf(rec.id_serial_number_id+"") == -1){
			barcodes.push(rec.id_serial_number_id+"");
		}
		if (piecemarks.indexOf(rec.piecemark_id+"") == -1){
			piecemarks.push(rec.piecemark_id+"");
		}
	}
	
	if (scopes.jobs.idfilesToDelete.length > 0){
		/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
		p =  databaseManager.createSelect("db:/stsservoy/id_serial_numbers");
		p.result.add(p.columns.id_serial_number_id);
		p.result.add(p.columns.delete_flag);
		p.result.add(p.columns.edit_date);
		p.where.add(p.columns.id_serial_number_id.isin(barcodes));
		var resultB = databaseManager.getFoundSet(p);

		/** @type {JSFoundSet<db:/stsservoy/transactions>} */
		var t = databaseManager.createSelect("db:/stsservoy/transactions");
		t.result.add(t.columns.trans_id);
		t.result.add(t.columns.delete_flag);
		t.result.add(t.columns.edit_date);
		t.where.add(t.columns.idfile_id.isin(scopes.jobs.idfilesToDelete));
		var resultT = databaseManager.getFoundSet(t);
		
		/** piecemarksCheck[] holds all piecemark that have had piecemarks deleted
		 * piecemarksKeep[] identifies piecemarks with active idfiles
		 * pop piecemarksCheck[] and push to piecemarksDelete unless it is in piecemarksKeep[]
		 */
		var piecemarksCheck = [].concat(piecemarks);
		var piecemarksKeep = [];
		var piecemarksDelete = [];
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var u = databaseManager.createSelect("db:/stsservoy/idfiles");
		u.result.add(u.columns.piecemark_id);
		u.where.add(u.and
				 .add(u.columns.piecemark_id.isin(piecemarks))
				 .add(u.columns.idfile_id.not.isin(idfilesToDelete))
				 .add(u.columns.delete_flag.isNull)
				 .add(u.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			);
		var resultP = databaseManager.getFoundSet(u);
		index = 1;
		while (index <= resultP.getSize()){
			rec = resultP.getRecord(index);
			if (piecemarksKeep.indexOf(rec.piecemark_id+"") == -1){
				piecemarksKeep.push(rec.piecemark_id+"");
			}
			index++;
		}
		while (piecemarksCheck.length > 0){
			piecemark = piecemarksCheck.pop();
			if (piecemarksKeep.indexOf(piecemark) == -1){
				piecemarksDelete.push(piecemark);
			}
		}
		if (piecemarksDelete.length > 0){
			/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
			var u = databaseManager.createSelect("db:/stsservoy/piecemarks");
			u.result.add(u.columns.piecemark_id);
			u.result.add(u.columns.delete_flag);
			u.result.add(u.columns.edit_date);
			u.where.add(u.and
					 .add(u.columns.piecemark_id.isin(piecemarksDelete))
					 .add(u.columns.delete_flag.isNull)
					 .add(u.columns.tenant_uuid.eq(globals.secCurrentTenantID))
				);
			var resultP = databaseManager.getFoundSet(u);
			
		}
	}
	
	//null;
	var deleteDate = new Date();
	if (resultI.getSize() > 0){
		var delIdfiles = databaseManager.getFoundSetUpdater(resultI);
		delIdfiles.setColumn('delete_flag',99);
		delIdfiles.setColumn('deleted_date',deleteDate);
		delIdfiles.setColumn('edit_date',deleteDate);
		delIdfiles.performUpdate();
		scopes.jobs.idfilesToDelete = [];
	}
	if (resultB.getSize() > 0){
		var delBarcodes = databaseManager.getFoundSetUpdater(resultB);
		delBarcodes.setColumn('delete_flag',99);
		delBarcodes.setColumn('edit_date',deleteDate);
		delBarcodes.performUpdate();
	}
	if (resultT.getSize() > 0){
		var delTrans = databaseManager.getFoundSetUpdater(resultT);
		delTrans.setColumn('delete_flag',99);
		delTrans.setColumn('edit_date',deleteDate);
		delTrans.performUpdate();
	}
	var delPms = databaseManager.getFoundSetUpdater(resultP);
	if (piecemarksDelete.length > 0){
		delPms.setColumn('delete_flag',99);
		delPms.setColumn('edit_date',deleteDate);
		delPms.performUpdate();
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param rec
 *
 * @properties={typeid:24,uuid:"F3C9FF19-63E4-424D-86B6-E0F3544C31B3"}
 */
function recallDeletedBarcodes(){
	var recall = true;
	purgeDeletedBarcodes(recall);
}
/**
 * @type {recall} Boolean
 * 
 * @properties={typeid:24,uuid:"F824C0EF-A3A4-4F93-813F-CAED4FC5BE36"}
 */
function purgeDeletedBarcodes(recall){
	var message = "Removing/purging";
	if (recall){
		message = "Recalling";
	}
	warningsYes();
	warningsMessage(message+' Barcode information.');
	var purgeRecordList = [];
	/* 
	 * id_serial_number_id*, idfile_id*, transaction_id*, piecemark_id^, lot_id*, sequence_id*, sheet_id*, job_id 
	 */
	if (!scopes.globals.purgeBarcodeRecords){
		scopes.globals.purgeBarcodeRecords = [];
	}
	var purgeCodes = scopes.globals.purgeBarcodeRecords;
	if (purgeCodes.length == 0){return}
	//application.output('purgeBarcodeRecords has '+purgeCodes.length+' items '+purgeCodes);
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var b =  databaseManager.createSelect("db:/stsservoy/id_serial_numbers");
	b.result.add(b.columns.id_serial_number_id);
	b.result.add(b.columns.delete_flag);
	b.where.add(b.columns.id_serial_number_id.isin(purgeCodes));
	var resultB = databaseManager.getFoundSet(b);
	application.output('barcodes '+resultB.getSize());
	if (recall){
		var recall = databaseManager.getFoundSetUpdater(resultB);
		recall.setColumn('delete_flag',null);
		recall.performUpdate();
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
	i.result.add(i.columns.piecemark_id);
	i.result.add(i.columns.lot_id);
	i.result.add(i.columns.sequence_id);
	//i.result.add(i.columns.ship_load_id);
	//i.result.add(i.columns.received_load_id);
	//i.result.add(i.columns.current_load_id);
	i.where.add(i.and
		.add(i.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(i.columns.id_serial_number_id.isin(purgeCodes))
		.add(i.columns.delete_flag.eq(99))
		);
	var resultI = databaseManager.getFoundSet(i);
	var length = resultI.getSize();
	for (index = 1;index <= length;index++){
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
	application.output('idfile size '+resultI.getSize());
	if (recall){
		var recall = databaseManager.getFoundSetUpdater(resultI);
		recall.setColumn('delete_flag',null);
		recall.performUpdate();
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
		if (recall){
			var recall = databaseManager.getFoundSetUpdater(resultT);
			recall.setColumn('delete_flag',null);
			recall.performUpdate();
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
				.add(p.columns.tenant_uuid.eq(scopes.globals.secCurrentTenantID))
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
			piecemarkID = piecemarksToPurge[index];
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
			var p =  databaseManager.createSelect("db:/stsservoy/piecemarks");
			p.result.add(p.columns.piecemark_id);
			p.result.add(p.columns.delete_flag);
			p.result.distinct;
			p.result.add(p.columns.sheet_id);
			p.where.add(p.columns.piecemark_id.isin(piecemarksPurge));
			resultP = databaseManager.getFoundSet(p);
			application.output('piecemark size '+resultP.getSize());
			if (recall){
				var recall = databaseManager.getFoundSetUpdater(resultP);
				recall.setColumn('delete_flag',null);
				recall.performUpdate();
			} else {
				resultP.deleteAllRecords();
			}
		}
	}
	
	warningsMessage(message+' lot membership.');
	if (lots.length > 0){ // get list of all identified lots from above, get list of all idfiles using lot, for each lot, delete only if no idfiles use the lot
		var lotsDelete = []; // all lots with no idfiles to delete 
		for (index = 0;index < lots.length;index++){
			var lotID = lots[index];
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
			if (recall){
				var recall = databaseManager.getFoundSetUpdater(resultL);
				recall.setColumn('delete_flag',null);
				recall.performUpdate();
			} else {
				resultL.deleteAllRecords();
			}
		}
	}
	
	warningsMessage(message+' sequence membership.');
	if (sequences.length > 0){ // get list of all identified lots from above, get list of all idfiles using lot, for each lot, delete only if no idfiles use the lot
		var seqsDelete = []; // all lots with no idfiles to delete 
		for (index = 0;index < sequences.length;index++){
			var seqID = sequences[index];
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
			if (recall){
				var recall = databaseManager.getFoundSetUpdater(resultS);
				recall.setColumn('delete_flag',null);
				recall.performUpdate();
			} else {
				resultS.deleteAllRecords();
			}
		}
	}
	
	warningsMessage(message+' sheet membership.');
	if (sheets.length > 0){ // get list of all identified lots from above, get list of all idfiles using lot, for each lot, delete only if no idfiles use the lot
		var sheetsDelete = []; // all lots with no idfiles to delete 
		for (index = 0;index < sheets.length;index++){
			var sheetID = sheets[index];
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
			var s =  databaseManager.createSelect("db:/stsservoy/sheets");
			s.result.add(s.columns.sheet_id);
			s.result.add(s.columns.delete_flag);
			s.where.add(l.columns.sheet_id.isin(sheetsDelete));
			var resultS = databaseManager.getFoundSet(s);
			application.output('sheet size '+resultS.getSize());
			if (recall){
				var recall = databaseManager.getFoundSetUpdater(resultS);
				recall.setColumn('delete_flag',null);
				recall.performUpdate();
			} else {
				resultS.deleteAllRecords();
			}
		}
	}
	scopes.globals.purgeBarcodeRecords = [];
	warningsX();
}
/**
 * Uses array scopes.jobs.piecemarksToDelete
 * Delete - flag a piecemark as deleted.
 *  flag all idfiles idfiles.piecemark_id
 *  flag all summarized records piecemarks.job_id
 *  flag all barcodes id_serial_number_id.idfile_id
 *  flag all transaction history transactions.idfile_id
 *  flag all sequences sequences.sequence_id
 *
 * @properties={typeid:24,uuid:"EEDD963D-A1E8-4596-B2BC-D1A69196B1FD"}
 */
function deletePiecemarks(){
	// clear piecemarksToDelete afterward
	//return;
	var index = 0;
	var lots = [];
	var barcodes = [];
	var sequences = [];
	var piecemarks = [];
	var idfiles = [];
	var deleteDate = new Date();

	var piecemarkRec = null;
	if (scopes.jobs.piecemarksToDelete.length == 0){return}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q =  databaseManager.createSelect("db:/stsservoy/idfiles");
	q.result.add(q.columns.piecemark_id);
	q.result.add(q.columns.lot_id);
	q.result.add(q.columns.sequence_id);
	q.result.add(q.columns.tenant_uuid);
	q.result.add(q.columns.id_serial_number_id);
	q.where.add(q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.piecemark_id.isin(piecemarksToDelete))
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
	);
	var resultI = databaseManager.getFoundSet(q);
	var length = resultI.getSize();
	for (index = 1;index <= length;index++){
		var idfileRec = resultI.getRecord(index);
		if (idfileRec.lot_id) {lots.push(idfileRec.lot_id)}
		if (idfileRec.id_serial_number_id) {barcodes.push(idfileRec.id_serial_number_id)}
		if (idfileRec.sequence_id){sequences.push(idfileRec.sequence_id)}
		var pmId2 = idfileRec.piecemark_id.toString();
		if (piecemarks.indexOf(pmId2) == -1){piecemarks.push(pmId2)}
		if (idfileRec.idfile_id){idfiles.push(idfileRec.idfile_id)}
	} // interim list of possible deletes in each array.  Verify they are not referenced by other piecemarks/idfiles before deletion
	var pmActive = [];
	var pmDelete = [];
	while(piecemarksToDelete.length != 0){
		var pmId = piecemarksToDelete.pop();  // pm delete candidate
		if (piecemarks.indexOf(pmId) == -1){  // pm is not in active idfiles
			pmDelete.push(pmId);  // delete piecemark list
			//application.output('PM delete '+dsPiecemarkArray[pmId]);
		}
	}
	
	if (pmDelete.length > 0){
		/** @type {QBSelect<db:/stsservoy/piecemarks>} */
		var p =  databaseManager.createSelect("db:/stsservoy/piecemarks");
		// piecemarks array are piecemarks that appear in the delete list of deleted idfiles
		p.result.add(p.columns.piecemark_id);
		p.result.add(p.columns.delete_flag);
		p.result.add(p.columns.edit_date);
		p.where.add(p.columns.piecemark_id.isin(pmDelete));
		var resultP = databaseManager.getFoundSet(p);
		application.output('deleting piecemarks '+piecemarks);
		var delPmarks = databaseManager.getFoundSetUpdater(resultP);
		if (delPmarks){
			delPmarks.setColumn('delete_flag',99);
			//delPmarks.setColumn('deleted_date',deleteDate);
			delPmarks.setColumn('edit_date',deleteDate);
			delPmarks.performUpdate();
		}
	}
	
	if (false && barcodes.length > 0){
		// are the barcodes used by surviving idfiles
		var barcodesDelete = [];
		var barcodesActive = [];
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		databaseManager.createSelect("db:/stsservoy/idfiles");
		q.result.add(q.columns.id_serial_number_id);
		q.where.add(q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.id_serial_number_id.isin(barcodes))
		); // this is a list of active barcodes in the barcodes delete list
		resultI = databaseManager.getFoundSet(q);
		length = resultI.getSize();
		for (index = 1;index <= length;index++){
			barcodesActive.push(resultI.getRecord(index));
		}
		while (barcodes.length > 0){
			var barcode = barcodes.pop();
			if (barcodesActive.indexOf(barcode) == -1){
				barcodesDelete.push(barcode);
			}
		}
		if (false && barcodesDelete.length > 0){
			/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
			b =  databaseManager.createSelect("db:/stsservoy/id_serial_numbers");
			b.result.add(p.columns.id_serial_number_id);
			b.result.add(p.columns.delete_flag);
			b.result.add(p.columns.edit_date);
			b.where.add(p.columns.id_serial_number_id.isin(barcodesDelete));
			var resultB = databaseManager.getFoundSet(b);
			var delBarcodes = databaseManager.getFoundSetUpdater(resultB);
			if (delBarcodes){
				delBarcodes.setColumn('delete_flag',99);
				delBarcodes.setColumn('edit_date',deleteDate);
				delBarcodes.performUpdate();
			}
		}
	}
	scopes.jobs.piecemarksToDelete = [];
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
	application.output('Sheets to delete '+count);
	dsSheets = null;
	dsSheetList = [];
	dsSheetArray = [];
}
/**
 * TODO generated, please specify type and doc for the params
 * @param srcArray
 * @param dstArray
 *
 * @properties={typeid:24,uuid:"C5614E6F-A1DB-4B7D-96A8-78E147A13D74"}
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
 * TODO generated, please specify type and doc for the params
 * @param formName
 *
 * @properties={typeid:24,uuid:"4FE55909-73F9-4F37-8413-79AF14AE5FCC"}
 */
function removeFormHist(formName){
	//application.getActiveWindow().
	var statHis = history.removeForm(formName);
	var statMod = solutionModel.removeForm(formName);
	application.output(formName+' history remove: '+statHis+' solution model remove form: '+statMod);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param record
 * @param correct Determine whether to correct/update the records or just report
 * 
 * returns "","summedPM","noPM", or corrects the missing item
 * 
 * @properties={typeid:24,uuid:"DCB17FBC-FC12-462F-BD92-9EF854672DB9"}
 * @AllowToRunInFind
 */
function importRecordPiecemarkExist(record,correct){
	//record.select_hidebool = 1;//is the import record in the sheet already?
	// May exist, now how many items?  That is resolved within the idfile check. Beyond the scope of piecemark.
	var unique = uniquePiecemark(record);
	if (correct){
		if (record.action.search('DELETE') != -1){
			var pmId = dsPiecemarkArray[unique];
			if (piecemarksToDelete.indexOf(pmId) == -1){
				piecemarksToDelete.push(pmId);
			}
			return true;// should not exist after piecemark deleted, idfiles will be flagged too, don't worry the idfiles

		}
		if (record.action.search('CREATE') != -1){
			if (!dsPiecemarkArray[unique]){
				application.output('create piecemark '+unique);
				createPiecemark(record,unique);
			}
			return true;
		}
		return true;
	}
	if (dsPiecemarkArray[uniqueSummedPiecemark(record)] != null){
		record.action = "";
		if (forms.kiss_option_import.importOption.search('Overwrite') != -1){
			record.action = "CREATE";
		}
		return ",*summedPM*";
	} else if (dsPiecemarkArray[unique] != null){
		record.action = "";
		if (forms.kiss_option_import.importOption.search('Overwrite') != -1){
			record.action = "CREATE";
		}
		return "";
	} else {
		if (!record.select_hidebool || record.select_hidebool == 0){
			record.action = "CREATE";
		} else {
			record.action = "";
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
 * unique idfile is piecemark_id, barcodeCount, sequence_id, lot_id

 * @properties={typeid:24,uuid:"18AB23B9-D9C1-40BB-9F8D-74AFA04C134D"}
 */
function uniqueIdfile(record){ 
	return record.piecemark_id+","+record.sequence_id+","+record.lot_id;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param tableRec
 *
 * @properties={typeid:24,uuid:"3FCBE18D-7F26-4E5D-A036-6F86DE9043B5"}
 */
function uniqueIdfileIdFromImp(tableRec){
	var uniqPcmk = scopes.jobs.uniquePiecemark(tableRec);
	var seqNum = tableRec.sequence_number;
	var lotNum = tableRec.lot_number;
	if (!lotNum) {
		lotNum = ""
	}
	var idfile = uniqPcmk+seqNum+lotNum;
	return idfile;
}
/**
 * Return unique piecemark for both minor, parent and summarized piecemarks
 * 
 * @param record
 * 
 * summed PMs = material+","+grade+","+finish
 * native PMs = piecemark+","+parent_piecemark+","+sheetNum+","+grade+","+finish
 * 
 * @properties={typeid:24,uuid:"9AC99B19-A08B-4606-9CBE-81D37508AAB2"}
 * @AllowToRunInFind
 */
function uniquePiecemark(record){
	var unique = "";
	if (!record.piecemark || record.piecemark == ""){
		unique = record.material+","+record.grade+","+record.finish
	} else {
		var sheetNum = dsSheetArrayRev[record.sheet_id]+"";
		if (sheetNum.search('undefined') != -1) {sheetNum = "_"+record.sheet_number}
		unique = record.piecemark+","+record.parent_piecemark+","+sheetNum+","+record.grade+","+record.finish;
	}
	return unique;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param importRec
 *
 * @properties={typeid:24,uuid:"A555C731-0CE3-4BB2-887F-37AEDC5BA038"}
 */
function importRecordAllIdfiles(importRec){
	// importRec indicates it is from a table, not db
	var pcmk = uniquePiecemark(importRec);
	var pcmkId = dsPiecemarkArray[pcmk];
	var seqNum = importRec.sequence_number;
	var lotNum = importRec.lot_number;
	var seqId = dsSequenceArray["_"+seqNum];
	if (lotNum){
		var lotId = dsLotArray["_"+LotNum];
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
 * TODO generated, please specify type and doc for the params
 * @param record
 *
 * @properties={typeid:24,uuid:"56855B40-E53E-4957-AE99-CA057371608D"}
 */
function preserveHistory(record){
	var loseHist = record.action.search('LOSE') != -1;
	return !loseHist;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param record
 *
 * @properties={typeid:24,uuid:"8F38C855-EE91-41E7-9409-F1A6831D9790"}
 */
function dbRecBCList(record){
	var c = scopes.jobs.countsBCandID;
	var length = c.dbIdfiles.length;
	for (var index = 0;index < length;index++){
		dsIdfiles.rowIndex = dsIdfileList[c.dbIdfiles[index]];
		var bcId = dsIdfiles.id_serial_number_id; // current barcode ID which reps for 1 or more idfiles, giving a count for that barcode
		var idfileId = dsIdfiles.idfile_id;
		if (!c.bcIdfiles[bcId]){
			c.bcIdfiles[bcId] = [];
		}
		c.bcIdfiles[bcId].push(idfileId);
	}	
}
/**
 * This collects the barcode information record for incoming versus database counts.
 * label quantity each, number of barcodes, total idfile/item count, and calls function  for barcodes and each barcode's idfile list
 * @param record
 *
 * @properties={typeid:24,uuid:"3FF1BF77-94CC-4BAF-A5AA-DA872857E9E1"}
 * @AllowToRunInFind
 */
function dbRecCounts(record){
	var deleteMod = (record.action == "DELETE");
	var deleteAll = (record.select_hidebool == 1);
	var appendData = (scopes.jobs.appendToData);
	var summaryRec = (record.piecemark == ""); // add global setting to process summary records for for idfile complement
	scopes.jobs.countsBCandID = {
		inLabelQntEa : 0,
		dbLabelQntEa : 0,
		inItemCnt : 0,
		dbItemCnt : 0,
		inLabelCount : 0,
		dbLabelCount : 0,
		bcAdd : 0,
		bcDel : 0,
		idfileAdd : 0,
		idfileDel : 0,
		dbIdfiles : [],
		bcCodes : [],
		bcIdfiles : [],
		inSummCountEa :0
	}
	var c = scopes.jobs.countsBCandID;
	/**
	 * get Barcode needs for this record
	 */
	var uniquePm = uniquePiecemark(record);
	var pcmkId = dsPiecemarkArray[uniquePm];
	var tDbIdFiles = [];//temporary listing for iterating pm idfiles for a particular idfile sequence quantity need
	tDbIdFiles = dsIdfileListByPm[pcmkId];
	if (!tDbIdFiles){tDbIdFiles = []}
	c.dbIdfiles = [];
	if (forms.kiss_option_import.importOption.search('Overwrite') == -1){
		for (index = 0; index < tDbIdFiles.length;index++){ // get idfiles that are for this sequence and lot
			dsIdfiles.rowIndex = dsIdfileList[tDbIdFiles[index]];
			var seqNum = record.sequence_number;
			var lotNum = record.lot;
			if (!lotNum){lotNum = ""}
			var lotId = dsLotArray["_"+lotNum+"|_"+seqNum];
			var seqId = dsSequenceArray["_"+seqNum];
			if (dsIdfiles.lprint == 1 && !preserveHistory(record)){continue} // skip printed or dirty records
			if (dsIdfiles.sequence_id == seqId && dsIdfiles.lot_id == lotId){
				c.dbIdfiles.push(tDbIdFiles[index]);
			}
		}
	} //if (forms.kiss_option_import.importOption.search('Overwrite') != -1){
	//	c.dbIdfiles = [];
	//}
	c.dbItemCnt = c.dbIdfiles.length;
	c.inItemCnt = (record.sequence_quantity == "") ? record.item_quantity : record.sequence_quantity;
	//if (summaryRec){
	//	null;
	//}
	if (summaryRec){
		//------------  summary record
		//c.inItemCnt = record.barcode_qty;//summary record, 1:1 barcode:idfile
		c.dbItemCnt = 0;
		c.inSummCountEa = Math.floor(c.inItemCnt/record.barcode_qty);
		c.dbItemCnt = 0;
		var maxSummedQtyEa = 0;
		for (index = 0; index < c.dbIdfiles.length;index++){ // read summed_quantity from database files
			var idfileIndex = dsIdfileList[c.dbIdfiles[index]];
			dsIdfiles.rowIndex = idfileIndex;
			var itemCount = dsIdfiles.summed_quantity;
			maxSummedQtyEa = (itemCount > maxSummedQtyEa) ? itemCount : maxSummedQtyEa;
			c.dbItemCnt += itemCount;
		}
		//------------  summary record
	}
	c.dbLabelQntEa = 0;
	//for (index = 0;index < c.dbItemCnt;index++){ // get barcodes for this pm idfiles
	for (index = 0;index < c.dbIdfiles.length;index++){ // get barcodes for this pm idfiles
		dsIdfiles.rowIndex = dsIdfileList[c.dbIdfiles[index]];
		thisBarcodeId = dsIdfiles.id_serial_number_id;
		if (c.bcCodes.indexOf(thisBarcodeId) == -1){
			c.bcCodes.push(thisBarcodeId);
			var maxIdCnt = dsBarcodeList[thisBarcodeId].length;
			if (maxIdCnt > c.dbLabelQntEa){
				c.dbLabelQntEa = maxIdCnt;
			}
		}
	}
	if (summaryRec){
		c.dbLabelQntEa = maxSummedQtyEa;
	}
	c.inLabelQntEa = record.total_label_qty;
	c.dbLabelCount = c.bcCodes.length;
	c.inLabelCount = record.barcode_qty;
	var count = c.dbLabelCount - c.inLabelCount;
	if (count > 0){c.bcDel = count} // DB has more barcode labels than needed
	if (count < 0){c.bcAdd = -count} // DB needs more labels
	if (deleteMod && deleteAll){c.bcDel = c.dbLabelCount; c.bcAdd = 0} // DB doesn't need this record set anymore
	count = c.dbItemCnt - c.inItemCnt;
	if (count > 0){c.idfileDel = count} // DB has too many idfiles than needed
	if (count < 0){c.idfileAdd = -count} // DB file needs more idfiles for this pm
	if (deleteMod && deleteAll){c.idfileDel = c.dbItemCnt; c.idfileAdd = 0;} //DB doesn't need the record set
	//if (summaryRec){
		//if (c.bcDel != 0){c.idfileDel = c.dbItemCnt - c.bcDel}
		//if (c.bcAdd != 0){c.idfileAdd = c.dbItemCnt - c.bcAdd}
	//}
	dbRecBCList(record);
	return c;
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
	// printed idfiles cannot be changed
	var bc="";//idfile, barcode messages
	var nums = dbRecCounts(record);
	var uniquePm = uniquePiecemark(record);
	var pcmkId = dsPiecemarkArray[uniquePm];
	var deleteLine = (record.action == "Delete");
	var summaryRec = (record.piecemark == ""); // summary idfile processing
	var summaryQuant = 0; //summary idfile original quantity
	/**
	 * from the piecemark, get the barcode count and idfile count per barcode
	 * Holds barcode count, indexed by id_serial_number_id.   
	 *  Holds the barcode count array per idfiles of a piecemark,indexed by unique piecemark for that piecemark.
	 *  dsIdfileArray[uniquePiecemark+"_"+sequence_id]][barcode1count,barcode2count, barcode3count...]
	 *  dsBarcodeList[id_serial_number_id]  = [idfile1,2,3...]
	 *  dsBarcodeArray[id_serial_number_id] = index into dsBarcodes.
	 */
	//var uniqueIdfile = dsPiecemarkArray[unique]+"_"+dsSequenceArray["_"+record.sequence_number];
	// how to select JUST those uniqueIdfiles???? dbIdfiles culled by sheet_id and lot_id
	var tDbIdFiles = dsIdfileListByPm[pcmkId];
	if (!tDbIdFiles){tDbIdFiles = []}
	var dbIdfiles = [];
	var dbIdfilePrinted = [];
	if (forms.kiss_option_import.importOption.search('Overwrite') == -1){
		for (index = 0; index < tDbIdFiles.length;index++){ // get idfiles that are for this sequence and lot
			dsIdfiles.rowIndex = dsIdfileList[tDbIdFiles[index]];
			if (dsIdfiles.lprint == 1){
				dbIdfilePrinted.push(dsIdfiles.idfile_id);//cannot modify printed barcodes without override, reset if overridden
			}
			var recSeq = record.sequence_number;
			var recLot = record.lot;
			if (!recLot){recLot = ""}
			var recSeqId = dsSequenceArray["_"+recSeq];
			var recLotId = dsLotArray["_"+recLot+"|_"+recSeq];
			if (dsIdfiles.sequence_id+"" == recSeqId && dsIdfiles.lot_id == recLotId){
				dbIdfiles.push(tDbIdFiles[index]);
			}
		}
	}
	var inItemQty = (record.sequence_quantity == "") ? record.item_quantity : record.sequence_quantity;
	var dbItemQty = dbIdfiles.length;
	var diffItemQty = inItemQty-dbItemQty;
	if (summaryRec && dsIdfiles){
		//------------  summary record
		summaryQuant = nums.inLabelQntEa ;// save to idfile in original_qty to retain accountability
		inItemQty = nums.inLabelCount;//summary record to one idfile per barcode
		dbItemQty = dbIdfiles.length;
		diffItemQty =  inItemQty-dbItemQty; //nums.dbIdfiles.length;
		//------------  summary record
	}
	if (diffItemQty != 0){
		if (diffItemQty > 0){
			bc = ",+QTY"+diffItemQty;
			nums.idfileAdd = diffItemQty;
		} else {
			bc = ",-QTY"+Math.floor(-1*diffItemQty);
			nums.idfileDel = diffItemQty;
		}
		
	}
	//var inBcCount = record.barcode_qty;
	var dbBcQntEa = []; // for each barcode, how many idfiles are in there?
	// need list of barcode ids for each piecemark
	// use idfile_id to get a barcode id, record barcode id and set length, disregard that barcode (continue)
	var bCIdSeen = []; // visited array indicating already got count from this barcode ID
	for (var index = 0;index < dbIdfiles.length;index++){
		dsIdfiles.rowIndex = dsIdfileList[dbIdfiles[index]];
		var tBcId = dsIdfiles.id_serial_number_id; // current barcode ID which reps for 1 or more idfiles, giving a count for that barcode
		if (bCIdSeen.indexOf(tBcId) == -1){
			if (summaryRec){
				//------------  summary record
				dbBcQntEa.push(dsIdfiles.summed_quantity); //original_quantity)
				//------------  summary record
			} else {
				dbBcQntEa.push(dsBarcodeList[tBcId].length);
			}
			bCIdSeen.push(tBcId);
		} else {
			continue;
		}
	}
	var dbBcCount = dbBcQntEa.length;//number of barcodes/idfiles for this piecemark
	var inBcCount = record.barcode_qty;//temp Barcode Quantity Each in Db
	var dbIdfileEaBC = 0;
	var maxBcQntEa = [];//barcode array with each index for number of idfiles for that barcode [index]
	var maxBcCount = (dbBcCount < inBcCount)?inBcCount:dbBcCount;// get max barcode count size for removal and add for each bc
	var inIdfileEaBC = record.total_label_qty;
	if (summaryRec){
		inIdfileEaBC = nums.inLabelQntEa; //inItemCnt;
	}

	for (index = 0;index < maxBcCount;index++){
		if (record.last_bc_qty != 0 && index == inBcCount-1){
			inIdfileEaBC = record.last_bc_qty;//last import barcode may contain less than the rest, due to full bc's prior
		}
		dbIdfileEaBC = dbBcQntEa[index];//current barcode idfile allocation in db
		var db = (index < dbBcCount) ? dbIdfileEaBC : 0;
		var imp = (index < inBcCount) ? inIdfileEaBC : 0;
		var change = imp - db;
		maxBcQntEa.push(change);
		
	}
	
	/**
	 * Actions:  Incoming connections are the TO_BE state, the database is the AS_IS state.  Changes are to the AS_IS state
	 *   - added as a valuelist stsvl_import_actions
	 *   - bc incorrect item quants, incorrect max quants, 
	 * PCMK_CREATE - create new piecemark
	 * DELETE - delete piecemark, code = 99. Code = 11 means unused or placeholder for non-actionable piecemarks, ie summarized records
	 * BAR_REPRINT - override barcodes that have been printed and redistribute
	 * BAR_ASSIGN - redo barcodes if the barcode count does not match, ie barcode1=15,bc2=15,bc3=3
	 * QUANT_ADD - create missing idfiles, and get barcodes, new barcodes if the existing idfiles have a barcode
	 * QUANT_DEL - delete extra idfiles, unless the barcode has been printed and there is no transaction data
	 * LOSE_PCMK_HISTORY - delete idfiles without consideration of either printing or transaction data
	 * 
	 * if bcCount < 0 then delete. if no data (lprint 0=false) or override (lose history).
	 * if bcCount > 0 add if no data to current barcode scheme. add to new barcode.
	 */
	var bcCount = inBcCount - dbBcCount;
	if (bcCount != 0){
		if (bcCount > 0){
			bc = bc+",+BC"+bcCount;
			nums.bcAdd = bcCount;
		} else {
			bc = bc+",-BC"+Math.floor(-1*bcCount);
			nums.bcDel = bcCount;
		}
	}
	// Are the arrays correct? Count each barcode for piecemark in db vs incoming? 
	var summedBcCounts = [];  // counts for multiple idfiles for summarized records
	var finalBcCounts = [];
	var bcAdjust = " [";
	for (index = 0;index < maxBcQntEa.length;index++){
		if (maxBcQntEa[index]!=0){
			var plus = (maxBcQntEa[index] > 0) ? "+" : "";
			var inCurrent = (typeof dbBcQntEa[index] !== 'undefined') ? dbBcQntEa[index] : "0";
			bcAdjust = bcAdjust+inCurrent+plus+maxBcQntEa[index];
			summedBcCounts.push(inCurrent+maxBcQntEa[index]);
		} else {
			bcAdjust += "0";
			summedBcCounts.push(0);
		}
		if (index < inBcCount){
			finalBcCounts.push(inCurrent*1+maxBcQntEa[index]*1);
		}
		if (index != maxBcQntEa.length-1){
			bcAdjust += ",";
		}
	}
	bc = bc+bcAdjust+"]";
	if (!correct){
		if (record.action == ""){
			record.action == 'UPDATE';
		}
		return bc;
	}
	/**----------------------------------------------------------------------------------------------------------------
	// Correct the items within the database
	// how many idfiles are there? adjust number of idfiles according to barcode settings
	// if any idfiles in a barcode are changed, do not change
	//application.output(nums);
	 */
	if (scopes.jobs.appendToData && appendQuantityToIdfile && appendQuantityToIdfile[uniqueIdfileIdFromImp(record)]){ // append incoming quantity if already
		if (appendQuantityToIdfile[uniqueIdfileIdFromImp(record)]){
			nums.idfileAdd = nums.idfileAdd + appendQuantityToIdfile[uniqueIdfileIdFromImp(record)]*1;
			if (true && scopes.jobs.importAppendAddBarcode){ // always add a barcode on append
				nums.bcAdd = nums.bcAdd + record.barcode_qty*1;
				nums.inLabelCount = nums.dbLabelCount*2; // twice the number of labels as already in Db
			} else {
				nums.inLabelQntEa = nums.inLabelQntEa*2;
			}
		}
	}
	var edited = (nums.bcAdd != 0) || (nums.bcDel != 0) || (nums.idfileAdd != 0) || (nums.idfileDel != 0);
	nums.bcAdd = Math.abs(nums.bcAdd); nums.bcDel = Math.abs(nums.bcDel); 
	nums.idfileAdd = Math.abs(nums.idfileAdd); nums.idfileDel = Math.abs(nums.bcDel); 
	var origQuant;
	if (edited){
		var action = record.action;
		application.output('actions to be taken '+action);
		var orphanIdfileList = [];

		var createNumberBarcodes = nums.bcAdd;
		while (createNumberBarcodes > 0){  // add barcodes
			var newBcId = createValidBarcode();
			nums.bcCodes.push(newBcId);
			dsBarcodeList[newBcId] = []; // update listing of idfles 
			nums.bcIdfiles[newBcId] = [];//comment out
			//nums.dbIdfiles.push(newBcId);
			createNumberBarcodes--;
		}		
		application.output('created barcodes '+nums.bcAdd);
		
		var deleteNumberBarcodes = nums.bcDel;
		while (deleteNumberBarcodes > 0){ // delete barcodes, keep list of idfiles on each deleted barcode
			var bcCode = nums.bcCodes.pop();
			barcodesToDelete.push(bcCode);
			var barIdlist5 = nums.bcIdfiles[bcCode];
			var length5 = barIdlist5.length;
			for (var index5 = 0;index5 < length5;index5++){
				orphanIdfileList.push(barIdlist5[index5]);//no break since orphanIdfiles will be reallocated to another barcode
			}
			deleteNumberBarcodes--;
			nums.bcIdfiles[bcCode] = null; // barcode no longer in use
		}
		application.output('deleted barcodes '+nums.bcDel);
		
		if (nums.idfileAdd > 0){  // include orphans first, and then new idfiles to orphan list, not yet allocated to barcode
			var createNumberIdfiles2 = (orphanIdfileList.length >= nums.idfileAdd) ? 0 : nums.idfileAdd - orphanIdfileList.length;
			origQuant = (summaryRec) ? createNumberIdfiles2:1;//summary record processing
			//if (summaryRec){
				
			//}
			while (createNumberIdfiles2 > 0){
				// get free barcode
				bcCode = 'FFFFFFFF-0000-0000-0000-DDDDDDDDDDDD';
				var idSequence = (record.piecemark == "")?"":record.sequence_number;
				var idLot = (record.piecemark == "")?"":(record.lot_number)?record.lot_number:"";
				var createQuant = inItemQty;
				var summQuant = 1;
				var totalQuant = nums.inItemCnt;
				if (summaryRec){
					totalQuant = totalQuant - nums.inSummCountEa;
					createQuant = nums.inSummCountEa; //(createNumberIdfiles2 - nums.inSummCountEa >= 0) ? nums.inSummCountEa : createNumberIdfiles2;
					summQuant = nums.inSummCountEa;
					if (totalQuant < summQuant){
						summQuant = totalQuant;
					}
				}
				application.output('----create quant '+createQuant+' item count '+nums.inItemCnt+' summQuant '+summQuant);
				var newIdfileId = createIdfileRecord(uniquePm,pcmkId,idSequence,idLot,bcCode,createQuant,nums.inItemCnt,summQuant,record.remarks);
				orphanIdfileList.push(newIdfileId);
				//nums.bcIdfiles[barCode].push(newIdfileId);
				nums.dbIdfiles.push(newIdfileId);
				createNumberIdfiles2 -= 1;//was createQuant, but that is only copied to the idfile, not creating idfiles, BUT summarized items are set otherwise
			}
			application.output('added idfiles '+nums.idfileAdd);
		}
		
		if (nums.idfileDel > 0){
			var deleteNumberIdfiles = (orphanIdfileList.length >= nums.idfileDel) ? 0 : nums.idfileDel - orphanIdfileList.length;
			var index7;
			for (index7 = nums.bcCodes.length-1;index7 >= 0;index7--){//start at end of allocated barcodes
				var barId7 = nums.bcCodes[index7];
				var barId7list = nums.bcIdfiles[barId7];
				while (barId7list.length > nums.inLabelQntEa && deleteNumberIdfiles != 0){ // remove orphans from each barcode to barcode max quant
					orphanIdfileList.push(barId7list.pop());
					deleteNumberIdfiles--;
				}
				if (deleteNumberIdfiles == 0){break}
			} // Now at max idfiles, but barcodes not optimal, some may be at max, but last may have more than idfile count
			for (index7 = nums.bcCodes.length-1;index7 >= 0 ;index7--){
				var barId7 = nums.bcCodes[index7];
				var barId7list = nums.bcIdfiles[barId7];
				while (deleteNumberIdfiles != 0){ 
					orphanIdfileList.push(barId7list.pop());
					deleteNumberIdfiles--;
				}
				if (deleteNumberIdfiles == 0){break}
			} // remove orphans from end barcodes to achieve import quantity
			application.output('deleted idfiles '+nums.idfileDel);
		}
		
		for (index7 = 0;index7 < nums.bcCodes.length;index7++){
			barId7 = nums.bcCodes[index7];
			barId7list = nums.bcIdfiles[barId7];
			while ((barId7list.length > nums.inLabelQntEa && !summaryRec) || (barId7list.length > 1 && summaryRec)){
				orphanIdfileList.push(barId7list.pop()); // adjust barcode idfile quantity to lower if necessary
			}
			while ((barId7list.length < nums.inLabelQntEa && !summaryRec) || (barId7list.length == 0 && summaryRec)){
				barId7list.push(orphanIdfileList.pop()); // add orphan idfiles to a barcode that is not at capacity
			} // this is where the idfile.id_serial_number_id needs to start set
		}
		timeIn = 0; warningsMessage('Setting '+record.material);
		var idfileListing = []; // get list of all idfiles in the barcodes for the pm to update the id_serial_number_id
		if (summaryRec){
			//------------  summary record
			var summaryIdfileCount = []; // summary record: summaryIdfileCount[idfile_id] = original_qty/label_qty
			var summaryOriginalCountdown = inItemQty; // per barcode quant = nums.inLabelQntEa;
			//------------  summary record
		}
		
		var idfileBarcodes = [];
		for (index = 0;index < nums.bcCodes.length;index++){ // each barcode for this 
			var barId = nums.bcCodes[index];
			var barList = nums.bcIdfiles[barId];
			if (summaryRec){
				//------------  summary record
				if ((summaryOriginalCountdown - nums.inLabelQntEa) < 0){
					summaryIdfileCount[barList[0]] = summaryOriginalCountdown;
				} else {
					summaryIdfileCount[barList[0]] = nums.inLabelQntEa;
					summaryOriginalCountdown = summaryOriginalCountdown - nums.inLabelQntEa;
				}
				//------------  summary record
			}
			idfileListing = idfileListing.concat(barList);
			for (var indexB = 0;indexB < barList.length;indexB++){
				idfileBarcodes[barList[indexB]] = barId;
			}
			warningsMessage('Setting '+record.material+' id'+index+'_'+idfileListing.length);
		}
		if (record.action){
			var loseHist = (record.action.search('LOSE') != -1);
		} else {
			loseHist = false;
		}

		/**
		 * SAVE all save records or an sql search will not find new records
		 * all idfiles for this listing
		 * check to see if already in a barcode for this pm
		 * add to barcode within bc limit
		 * save idfile changes
		 */
		databaseManager.saveData();//inclusive, reverify and save ONLY records in this action
		while (idfileListing.length != 0){// put each idfile in the correct barcode
			application.output(' enter final idfilelisting corrections ');
			var templist = [];
			if (idfileListing.length > 200){
				templist = [].concat(idfileListing.slice(200));
				idfileListing = [].concat(idfileListing.slice(201));
				//while (idfileListing.length > 300){templist.push(idfileListing.shift())} // reduce size of idfile listing for sql query
			} else {
				templist = [].concat(idfileListing);
				idfileListing = [];
			}
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			var q = databaseManager.createSelect("db:/stsservoy/idfiles");
			q.result.add(q.columns.idfile_id);
			q.result.add(q.columns.id_serial_number_id);
			q.result.add(q.columns.original_quantity);
			q.result.add(q.columns.summed_quantity);
			q.result.add(q.columns.lprint);
			if (loseHist){
				q.where.add(q.and
					 .add(q.columns.idfile_id.isin(templist))
					 .add(q.columns.delete_flag.isNull)
					 .add(q.columns.lprint.eq(0)));
			} else {
				q.where.add(q.and
					.add(q.columns.idfile_id.isin(templist))
					.add(q.columns.delete_flag.isNull)
					);
			}
			var dsIdListForPmDyn2 = databaseManager.getFoundSet(q); //unique to this record by sheet and lot (dbIdfiles)
			dsIdListForPmDyn2.sort('idfile_id asc');
			//for (var index99 = 1;index99 <= dsIdListForPmDyn2.getSize();index99++){
			//	var joeRec = dsIdListForPmDyn2.getRecord(index99);
			//	application.output('record ' + joeRec.idfile_id+' id_serial_number_id');
			//}
			var shortIdlist = dsIdListForPmDyn2;
			var length = nums.bcCodes.length;
			for (var indexId = 1;indexId <= dsIdListForPmDyn2.getSize();indexId++){
				shortIdlist.setSelectedIndex(indexId);
				/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
				var recIdfile = shortIdlist.getRecord(indexId); 
				if (nums.bcCodes.indexOf(recIdfile.id_serial_number_id) == -1){ //not already in bc
					var recId = recIdfile.idfile_id;
					barId = idfileBarcodes[recId];
					recIdfile.id_serial_number_id = barId; // add idfile to barcode
					recIdfile.summed_quantity =  (summaryRec) ? finalBcCounts[nums.bcCodes.indexOf(barId)] : 1;
					barList.push(recIdfile.idfile_id+""); // update barList
					createRecordsArray.push(recIdfile);
					saveRec = true;
				}
			}
		}
		//warningsMessage('Update idfile barcodes.');
		databaseManager.saveData();
		while (orphanIdfileList.length != 0){
			/** @type {JSFoundSet<db:/stsservoy/idfiles>} */	
			//var fs = databaseManager.getFoundSet('stsservoy','idfiles');
			//fs.loadRecords(databaseManager.convertToDataSet(orphanIdfileList));
			//var count = fs.getSize();
			//deleteFoundSet(fs);
			idfilesToDelete.push(orphanIdfileList.pop());
			if (idfilesToDelete.length > 100){
				deleteIdfiles();
			}
		}
		//warningsMessage('Deleted orphans. '+count);
	}
	/**
	 * check barcode, if one idfile is printed and not overridden, they all are. 
	 * check barcode, if one idfile is printed and not lose history, next barcode.
	 * if no more barcode, then add barcode.
	 * if barcode full, then next barcode.
	 * if barcode overfull, then hold idfile in list for barcode not full.
	 * if barcodes are overfull and dirty, then skip unless override is set to reprint barcodes
	 *  if barcode are overfull and clean, then redistribute
	 *  two groups clean and dirty by barcode
	 *  get smallest barcode for piecemar
	 *  delete idfiles if they are clean or overridden
	 *  add idfiles only to clean barcodes
	 *  balance out the idfiles in each barcode
	 *  do not change barcodes which have been printed or have not been marked as redo
	 *  bcCodes[index] for barcodes this pm, bcDirty[index] for printed barcodes
	 *  dsBarcodeList[barcodeID] for idfiles list for barcodeID/id_serial_number_id
	 *   dbIdfiles[index] list of idfiles for this pm, not by barcode
	 *   if incoming number of barcodes is less, then delete one barcode and push idfiles onto orphan
	 *   put orphans on each remaining barcode until complete
	 *   if incoming number of barcodes is more, then add barcode
	 *   go through each barcode if more then orphan.  if less then put on orphans
	 */
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
 * @AllowToRunInFind
 */
function importRecordsCheck(){
	//var jobID = scopes.jobs.jobIDs[0];
	//scopes.jobs.jobUnderCustomer = jobID;
	var jobID = scopes.jobs.jobUnderCustomer;
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
 * @properties={typeid:24,uuid:"7151B6F4-4020-4235-96A4-23D7E120A974"}
 */
function importRecords_append(){
	var append = true; // ceremonial. Don't use this variable.
	// see importAmendQuantities() for adjustments to append quantities
	importRecords_sheet();
}
/**
 * @properties={typeid:24,uuid:"C1F04FD4-C30C-4FDA-8C8F-E2148BD8BE31"}
 */
function importRecords_overwrite(){
	warningsMessage('Overwrite - Deleting current job information.')
	importRecordsDelete();
	var append = false;
	warningsMessage('Overwrite - New Data . . .');
	importRecords_sheet();
}
/**
 * @properties={typeid:24,uuid:"011150DC-20FC-44C0-B2EB-09220E02CEE9"}
 * @AllowToRunInFind
 */
function importRecords_sheet(){
	var jobID = scopes.jobs.jobUnderCustomer;;
	//scopes.jobs.jobUnderCustomer = jobID;
	insertedBarcodes = []; insertedIdfiles = []; insertedPiecemarks = [];
	deletedBarcodes = []; deletedIdfiles = []; deletedPiecemarks = [];
	idfilesToDelete = [];
	//insertedSequences = []; deletedSequences = [];
	readPieceTables(); // existing records
	createSheets();//make sure sheets exist before import
	warningsMessage('Saving Sheets');
	createSequenceNumbers();
	warningsMessage('Saving Sequences');
	createLotNumbers();
	warningsMessage('Saving Lots');

	var retainFS = forms.kiss_option_import.transitionFS;
	var rows = retainFS.getMaxRowIndex();
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		if (!retainFS.action || retainFS.action == ""||retainFS.select_hidebool == 1){continue}
		warningsMessage('Processing piecemarks line '+index);
		var record = retainFS;
		importRecordPiecemarkExist(record,true);
	}
	timeIn = 0;	warningsMessage('Saving Piecemark markers ');
	
	//readPiecemarks();
	for (index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		if (!retainFS.action || retainFS.action == ""){continue}
		warningsMessage('Processing idfiles line '+index);
		//retainFS.import_status = "";
		record = retainFS;
		var exists = importRecordPiecemarkExist(record,true);
		if (exists) {
			importRecordCheckIdfileCount(record,true);
		}
	}
	createSummedMarks(forms.kiss_option_import.transitionFSsumm);
	warningsMessage('Summed file stubs created.');
	deleteIdfiles(); // delete marked Idfiles, along with transaction and barcodes
	deletePiecemarks();
	deleteImportBatch();
}
/**
 * @properties={typeid:24,uuid:"9D848588-A588-4F00-8EB2-1E3D9A385777"}
 */
function importRecordsDelete(){
	warningsMessage('Begin overwrite of data.');
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
	readPieceTables(); // existing records
	deleteLotsJob();
	warningsMessage('Delete Lots');
	deleteSequencesJob(jobID);
	warningsMessage('Delete Sequences');
	deleteBarcodesJob();
	warningsMessage('Delete Barcodes');
	deleteIdfilesJob();
	warningsMessage('Delete Idfiles');
	deletePiecemarksJob();
	warningsMessage('Delete Piecemarks');
	deleteSheetsJob(jobID);
	warningsMessage('Delete Sheets');
}
/**
 * @properties={typeid:24,uuid:"BCD308C1-D704-4BF1-9B26-6B2402E58C9C"}
 * @AllowToRunInFind
 */
function importRecordsAlt(){
	var beginTime = new Date().getTime();
	var importOpt = forms.kiss_option_import.importOption;
	warningsYes();
	//var win = application.createWindow("STS Message", JSWindow.DIALOG);
	//win.setInitialBounds(10, 10, 460, 110);
	//win.title = "STS Message";
	//win.show('messagesWarnings');
	
	var jobID = scopes.jobs.jobIDs[0];
	scopes.jobs.jobUnderCustomer = jobID;
	//readPieceTables(); // existing records
	barcodePrefix = "";
	barcodeLast = 0;
	var statusSave = databaseManager.saveData(); //  clean save
	databaseManager.setAutoSave(false);
	warningsMessage('Start (save:'+statusSave+')'+forms.kiss_option_import.importOption);
	//timeIn = new Date().getTime();
	if (importOpt.search('Overwrite') != -1) {
		importRecords_overwrite();
	} else if (importOpt.search('Append') != -1){
		importRecords_append();
	} else if (importOpt.search('Match') != -1){
		importRecords_sheet();
	} else {
		return;
	}
	//win.hide();
	//win.destroy();
	warningsMessage('Records imported');
	//forms.kiss_option_import.controller.enabled = true;
	saveBarCodeSerial();
	timeIn = 0;warningsMessage('Save remaining records.');
	databaseManager.setAutoSave(true);
	var duration = new Date().getTime()-beginTime;
	warningsMessage('Total import time minutes '+duration/1000/60);
	//application.output('total import time ms '+timeOut);
	//win.hide();
	//win.destroy();
	warningsX();
	//scopes.jobs.importRecordsCheck();
	forms.kiss_option_import.onHide(null);
	databaseManager.saveData();
}
/**
 * TODO generated, please specify type and doc for the params
 * @param message
 *
 * @properties={typeid:24,uuid:"99C38E1E-7B95-45DB-B7D0-6159795027B0"}
 */
function warningsMessage(message){
	timeOut = new Date().getTime();
	if (timeOut - timeIn < 4000){return}
	if (message == scopes.globals.stsMessages){message = message + " x"}
	scopes.globals.stsMessages = message;
	if (application.isInDeveloper()){
		application.output(message+eval(timeOut - timeIn))
	}
	application.updateUI();
	timeIn = timeOut;
	if ((timeOut-timeUpdate > 60000) || (createRecordsArray && createRecordsArray.length > 0) || createRecordsArray.length > 100){
		timeUpdate = timeOut;
		while (createRecordsArray.length != 0){
			try {
			var record = createRecordsArray.shift();
			} catch (e) {
				application.output('record catch '+record);
				saveStat = databaseManager.saveData(record);
			}
			if (!saveStat){
				application.output('not saved '+record);
			}
		}
	}
}
/**
 * @properties={typeid:24,uuid:"11C43EF7-2680-4EA7-9AEB-B11E629275BC"}
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
 * @properties={typeid:24,uuid:"CC81217A-D9DE-4B01-8636-1849F3F07FB5"}
 */
function warningsX(){
	var win = scopes.jobs.warnWindow;
	win.hide();
	win.destroy();
	var skip = true;
	if (skip) {return}
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
		/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"66BEB95D-FBC3-425B-A053-FBDE880FD40C"}
 */
function onDataChangeInteger(oldValue, newValue, event) {
	return globals.maxIntExceeded(newValue);
}
		