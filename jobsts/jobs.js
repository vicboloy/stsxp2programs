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
 * @properties={typeid:35,uuid:"2E05DD3E-4C78-4582-980D-99BF7A958389",variableType:-4}
 */
var browseFS2 = [];
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
 * @type {JSFoundSet<db:/stsservoy/sheets>}
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
 * @properties={typeid:35,uuid:"EF9BA59B-762B-4246-9CFE-B3A0AE65F042",variableType:-4}
 */
var dsSheetIds = [];
/**
 * Sheet number index by sheet_id.
 * dsSheetArrayRev[sheet_id] = "_"+sheet_number;
 * @properties={typeid:35,uuid:"EA7937A0-1D06-4E58-8ED1-BBF16C308870",variableType:-4}
 */
var dsSheetArrayRev = [];
/**
 * Sheet Bom number index by sheet_bom_id.
 * dsSheetArrayRev[sheet_bom_id] = sheet_id+"_"+item_number;
 * @properties={typeid:35,uuid:"C29E6AB5-CCFA-4794-8227-44D5DFA15E85",variableType:-4}
 */
var dsSheetBomArrayRev = [];
/**
 * @properties={typeid:35,uuid:"EA531D1D-DF62-4C69-9FDF-705742718596",variableType:-4}
 */
var dsTossedList = [];
/**
 * @properties={typeid:35,uuid:"9748D291-D502-4870-9F05-31DC81AE5C01",variableType:-4}
 */
var dsTossedArray = [];
/**
 * @type {JSFoundSet<db:/stsservoy/piecemarks>}
 * @properties={typeid:35,uuid:"2C696A9F-0A79-4626-A81B-3ED1B2BAB34C",variableType:-4}
 */
var dsTossed = null;
/**
 * @type {JSFoundSet<db:/stsservoy/piecemarks>}
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
 * @properties={typeid:35,uuid:"772E8BDD-3595-48EA-8B25-9D246B58FCD3",variableType:-4}
 */
var dsPiecemarkIds = [];
/**
 * @type {JSFoundSet<db:/stsservoy/idfiles>}
 * Foundset of idfiles.
 * @properties={typeid:35,uuid:"3E4E4833-8DE8-4D58-9BFD-5633D5B5D6A2",variableType:-4}
 */
var dsIdfiles = null;
/**
 * @type {JSFoundSet<db:/stsservoy/idfiles>}
 * @properties={typeid:35,uuid:"2ED014E1-A1B9-4C0C-B517-DCF2030F5AA8",variableType:-4}
 */
var dsDiffIdfiles = [];
/**
 * Index integer mapping into dsIdfiles, index by idfile_id. 
 * @properties={typeid:35,uuid:"1410BFB8-F727-4037-98FF-2E764017E1C8",variableType:-4}
 */
var dsIdfileList = [];
/**
 * @type {Array}
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
 * @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} 
 * @properties={typeid:35,uuid:"1AF39EAD-81DB-479A-B585-3B32F189E417",variableType:-4}
 */
var dsBarcodes = null;
/**
 *  @type {Array} 
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
 * @type {JSFoundSet<db:/stsservoy/lots>}
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
 * @type {JSFoundSet<db:/stsservoy/sequences>}
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
 * Sheet_boms indexed by (piecenumber:CUT or partnumber:BOM) sheet_bom.bom_item_number. Since bom_item_number may be blank or non-indexed, it is 
 * prefixed by "_".  dsSheetBomArray[sheet_id+"_"+bom_item_number] = sheet_bom_id
 * @properties={typeid:35,uuid:"B028CA7A-6002-4495-8522-CCD6A2BD8FE9",variableType:-4}
 */
var dsSheetBomArray = [];
/**
 * Sheet_bom List. Index into dsSheetBoms.
 * dsSheetBomList[sheet_bom_id] = index.
 * @properties={typeid:35,uuid:"7AF1A3CE-3CAF-4DBF-A4E7-928C537FD8C3",variableType:-4}
 */
var dsSheetBomList = [];
/**
 * @type {JSFoundSet<db:/stsservoy/sheet_bom>}
 * dsShtBm records. dsShtBms[index] = sheet_bom_record.
 * @properties={typeid:35,uuid:"16621A20-4F11-4328-A7B3-3E870385A059",variableType:-4}
 */
var dsSheetBoms = null;
/**
 * @properties={typeid:35,uuid:"7445E671-3137-437B-9240-AFE9CCE38848",variableType:-4}
 */
var countsBCandID = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E94FE975-C814-4098-80B4-3B96BC84F169",variableType:4}
 */
var createdRecords = 0;
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
	bcFormId : null,//#87ticket#87
	jobId : "",
	jobNumber : "",
	title : "",
	name : "",
	date : "",
	associationId : null,
	associationName : '',
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
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"31C27CBE-0E9D-4730-A03C-922F0BA707C8",variableType:93}
 */
var importDate = null;
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"09E04C8F-95CA-45E4-9FF5-AFCBA9D21A3D"}
 */
var jobName = '';//forms.kiss_option_import.jobName;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D045C72-EE06-4B4A-935E-B36322243638"}
 */
var jobDate = '';//forms.kiss_option_import.jobDate;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A52C811-0F92-48C2-937A-B107E61B09CA",variableType:4}
 */
var jobMetric = 0;//forms.kiss_option_import.jobMetric;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0581EEED-9060-47E7-AD2D-BD9A5BC4BEDB",variableType:4}
 */
var keepMinors = 0;//forms.kiss_option_import.keepMinors;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E65EA10-17FD-43E5-9FBC-63ACAE67D007",variableType:4}
 */
var weightPerID = 0;//scopes.prefs.wtPrompt;
/**
 * GUI and import update times tracker
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7294EC86-7843-44FF-AABE-1DA2FDDD2BB5",variableType:8}
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C7DADD30-8A8C-4DE1-8DEE-F39B8E267139"}
 */
var excludeFS = '';//forms.kiss_option_import.transitionFSsink;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77AE18E2-8E70-4AA7-83EF-B33D954C53E2"}
 */
var excludeStr = '';//forms.kiss_option_import.jobImportExc;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0BA760FD-232C-4D8A-B363-633BDBF25F94"}
 */
var retainStr = '';//forms.kiss_option_import.jobImportSum;
/**
 * @properties={typeid:35,uuid:"84229498-2E07-4027-9015-ED388057C9F0",variableType:-4}
 */
var fields = null;//forms.kiss_option_import.fieldOrderTempTable;
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
 * @type {JSRecord<db:/stsservoy/customers>}
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
var columnNames = null;//forms.kiss_option_import.columnNames; // columnNames indexed into array
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
/**
 * @properties={typeid:35,uuid:"EFDE9CA2-94A9-402F-BADA-AB6AC70DD8B9",variableType:-4}
 */
var tablePKs = ['tenant_uuid','sheet_id','sequence_id','piecemark_id',
	'idfile_id','loads_id','status_description_id','e_route_code_id','routing_id','job_id',
	'lot_id','id_creation_date','id_serial_number_id','association_uuid'];
/**
 * tableOrderingArray[index'order'] = columnName
 * @properties={typeid:35,uuid:"7886C7DE-1B50-4E80-8F6B-2983D5BB518F",variableType:-4}
 */
var tableOrderingArray = [];
/**
 * tableOrderingData = [columnName,positionX,columnLength,visible]
 * @properties={typeid:35,uuid:"C5EBA2BA-4CFC-4731-BAD3-DC8717790767",variableType:-4}
 */
var tableOrderingData = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F5322DE8-E954-41A2-9749-28C19E3185F5"}
 */
var generalTableOrderTableName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2021418E-22BA-43E6-894D-CC7739166ECB"}
 */
var versionForm = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C596BAD6-0911-4FAA-A8AF-983CAB7C1811"}
 */
var tmp_LabelSort = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12D32104-0E17-4D9C-8A20-7CF71B1F67E0"}
 */
var tmp_Print = "";
/**
 * @properties={typeid:35,uuid:"E6DE4DAF-44E1-4107-9654-A861BD4BE156",variableType:-4}
 */
var parseArray = [];
/**
 * @properties={typeid:35,uuid:"0938BA6C-F971-453E-BE39-5F8D0295170A",variableType:-4}
 */
var parseLines = [];
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7D3677A2-E9AB-40CB-BA4A-B5FD7961B57E",variableType:4}
 */
var recordSaveLimit = 20;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D599E37-A3A6-403A-889E-82592AF49808",variableType:4}
 */
var recordSaveDur = 40;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B1BF3C15-4FDE-4DF0-9289-09BBF82C3F99",variableType:4}
 */
var idCreationCount = 0;
/**
 * List of new barcodes if they are not located in the db by primary key, meaning they are not yet saved
 * @properties={typeid:35,uuid:"2B60F91D-407F-4D2E-BC15-ED2A6625CE08",variableType:-4}
 */
var idBarcodePool = [];
/**
 * This is to keep a cache of import records by primary key as the index, so that they may be cached 
 * while building piecemarks during the import process.
 * 
 * @properties={typeid:35,uuid:"A983CC8F-33D1-4246-BF5D-54947242D569",variableType:-4}
 */
var importRecordCache = [];
/**
 * @properties={typeid:35,uuid:"00A52664-9097-4B32-9A20-4B80A17A222A",variableType:-4}
 */
var idfilePool = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E0A7B238-7C46-42DB-96C5-602DC3E2A9E4"}
 */
var remainingTime = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C9AC0F7B-06CD-4AAC-A356-27B6AF9A1664",variableType:4}
 */
var createdIdfileCount = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F291F55-9F86-457A-BC7C-A3BD3ABCA624",variableType:4}
 */
var commitStart = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"71CACE69-EEF8-432C-B24E-9E9DFF46D5AB",variableType:4}
 */
var commitLastDur = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B6E83BB-E004-4844-8A02-CBED067CA707",variableType:4}
 */
var commitRecAt = 20;
/**
 * @properties={typeid:35,uuid:"1AF3FB7E-169F-46CE-8A31-AFAE19565329",variableType:-4}
 */
var i18nColumnNames = [];
/**
 * @properties={typeid:35,uuid:"448ADD8C-7EF9-49CC-942E-982303DDD9CA",variableType:-4}
 */
var dsQuerySave = [];

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D798F2CB-DC63-4AC6-A78D-D2E5205D0588"}
 */
var importMessages = '';
/**
 * @properties={typeid:35,uuid:"4F9288E9-47D0-4A53-A243-67C96FB7A577",variableType:-4}
 */
var perfImportDate = null;
/**
 * List of GUIDs for a particular record, clear after use
 * @properties={typeid:35,uuid:"202C320B-70D4-4C6D-86C8-9A2E952B8B17",variableType:-4}
 */
var dsGUIDs = [];
/**
 * List of internal GUIDs for each pcmk, created along with idfiles
 * @properties={typeid:35,uuid:"0EB4F1CD-272B-4274-B2C7-FAFA184071D6",variableType:-4}
 */
var orphanInternalBCList = [];
/**
 * @properties={typeid:35,uuid:"AEC6F894-2319-4475-A877-9C8B8FB50BB8",variableType:-4}
 */
var jobID = null; 
/**
 * @properties={typeid:35,uuid:"FE654BFF-2D0F-45C2-99D7-1BC06117F2AE",variableType:-4}
 */
var dsPcmkIdAndBcList = {};
/**
 * @properties={typeid:35,uuid:"0EE4FE11-7F8E-41D4-BE31-369E3321F885",variableType:-4}
 */
var barcodePool = [];
/**
 * @properties={typeid:35,uuid:"4799AD57-1218-43A2-819E-C9D7F400A3FD",variableType:-4}
 */
var deleteBcPool = [];
/**
 * @properties={typeid:35,uuid:"42D00C1A-92CB-46EB-B02C-5CBEA41A7F49",variableType:-4}
 */
var deleteIdfilePool = [];
/**
 * @properties={typeid:35,uuid:"B7EA81F5-4F1B-4771-85F2-909CF227DA2C",variableType:-4}
 */
var applyDiscardTypes = false;
/**
 * @properties={typeid:35,uuid:"7E728553-298C-4C0F-B687-E804C24C5CD4",variableType:-4}
 */
var deleteDataJobId = null;
/**
 * @properties={typeid:35,uuid:"A71D58D7-C734-460D-9FC2-7702992B7FE9",variableType:-4}
 */
var purgeBarcodeRecords = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C9CEBC9-D96A-414C-ADC4-0ED9CED4960F"}
 */
var currentPcmkParentId = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07F3CFA8-E7FE-4757-8199-E6CE4FE7A3EC",variableType:-4}
 */
var currentIdflParentId = [];
/**
 * @properties={typeid:35,uuid:"5FB45FF1-659C-4B3D-8771-89EA7901126C",variableType:-4}
 */
var currentGuidsPcmk = [];
/**
 * @properties={typeid:35,uuid:"58D3C77D-1F8E-4319-BA79-D66671BCB960",variableType:-4}
 */
var currentGuidsPcmkParent = [];
/**
 * @properties={typeid:35,uuid:"0A642226-093C-4FCF-8B4A-710C6A02C67A",variableType:-4}
 */
var currentPcmkInfo = {};
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8BAF7FAD-B888-4C60-B87D-8BCE58E3C66A"}
 */
var tmpParentRecId = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B71F7CC2-B777-44BD-BAEF-F2BED247F459",variableType:4}
 */
var tableStartSelection = -1;
/**
 * @properties={typeid:35,uuid:"0C759538-8383-402F-A1BA-A4B180A84820",variableType:-4}
 */
var tableStartSelectTime = null;
/**
 * @properties={typeid:35,uuid:"7F3841B5-E667-4FFB-9B9F-C3BA1F2D9E18",variableType:-4}
 */
var endVars = null;
// -------------------------------------------------------------------------------------------------------------------
/**
 * dsLotArray["_"+lotNum+"|"+"_"+seqNum] = lot_id
 * dsLotArray[lot_id] = "_"+lotNum+"|"+"_"+seqNum
 * dsLotList[lot_id] = *index into dsLots
 * dsLots = *lots dataset*
 *
 * 
 *
 * @properties={typeid:24,uuid:"7644C0ED-965D-4199-B27E-3CAA1C540800"}
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
		if (application.isInDeveloper()){application.output('sequence '+sequence+' '+dsSequenceArray[sequence])}
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
 * @properties={typeid:24,uuid:"56E3C8B8-235B-488B-9C1A-7F637D94699C"}
 */
function readBarcodes(jobID){
	//dsBarcodeList already defined in readIdfiles()
	var bcListArray = []; //temporary array list of barcode ids
	if (!dsIdfiles){return}
	var rec = null; var index = 1;
	while (rec = dsIdfiles.getRecord(index++)){
		var serialID = rec.id_serial_number_id;
		if (bcListArray.indexOf(serialID) == -1){bcListArray.push(serialID)}
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
 * @properties={typeid:24,uuid:"D4CD7C15-54B0-413A-81D7-E7BE01F3991A"}
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
 * @properties={typeid:24,uuid:"40C81559-2375-44C9-8C48-85BE66D62624"}
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
		dsIdfileList[rec.idfile_id] = holdPmIndex;

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
 * @properties={typeid:24,uuid:"DD822BEB-42B1-4F27-B4EA-70BCD980946B"}
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
	var args = [globals.session.tenant_uuid.toString()];
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
 * @properties={typeid:24,uuid:"CC432FCA-4C57-4615-B04E-D7D522E63FD8"}
 */
function readPiecemarks(){
	dsPiecemarkList = [];
	dsPiecemarks = null;
	dsPiecemarkArray = [];
	if (dsSheets.getMaxRowIndex() == 0){return}
	
	if (dsSheets == null){return}
	

	var length = dsSheets.getMaxRowIndex();
	var textList = "("; var comma = ",";
	for (var index2 = 0;index2 < length;index2++){
		if (index2 == length-1){comma=""}
		dsSheets.rowIndex = index2;
		textList = textList + "\'"+dsSheets.sheet_id+"\'"+comma;
	}
	textList += ")";
	/**
	var maxReturnedRows = -1;
	var query = "SELECT *" +
		"FROM piecemarks " +
		"WHERE sheet_id IN " + textList + " "+
		" AND delete_flag IS null " +
		"AND tenant_uuid = ? ";
	var args = [globals.session.tenant_uuid];*/
	
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
	args = [globals.session.tenant_uuid.toString()];
	/** @type {JSDataSet} */
	var weightTotal = databaseManager.getDataSetByQuery('stsservoy', query, args , -1);
	scopes.jobs.jobWeightTotal  = weightTotal[0][1]; 	
	scopes.jobs.jobPiecesCount  = weightTotal[0][0]; 	
	scopes.jobs.jobPcmkCount = dsPiecemarks.getMaxRowIndex();
	if (application.isInDeveloper()){application.output("piecemarks "+scopes.jobs.jobPcmkCount)}
}
/**
 * 
 * @param jobId {String}
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
 * @properties={typeid:24,uuid:"7A999D1E-0007-4778-94C8-D3E998BDEC30"}
 */
function readSheets(jobId){
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
	sh.where.add(sh.columns.job_id.eq(jobId));
	sh.where.add(sh.or
		.add(sh.columns.delete_flag.isNull)
		.add(sh.columns.delete_flag.eq(0))
		);
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
 * @properties={typeid:24,uuid:"13F3CB41-170F-4B35-A47F-76AAA9478AB4"}
 */
function readPieceTables(typeRead){
	warningsMessage('Read existing piecemarks',true);
	var jobId = scopes.jobs.importJob.jobId;
	if (!jobId && globals.session.appName == "STS X Embedded"){
		var jobInfo = scopes.globals.getJobIdInfo(globals.session.jobNumber);
		globals.session.jobId = jobInfo.job_id;
		jobId = jobInfo.job_id;
	} else {
		jobId = scopes.jobs.importJob.jobId;//scopes.globals.session.jobId;//scopes.jobs.jobUnderCustomer;
	}
	if (!jobId){
		var win = application.getActiveWindow();
		var formName = win.controller.getName();
		if (formName.search('import_performance') == 0){
			jobId = forms.import_performance_setting.jobUUID;
		}
	}
	if (typeRead  ==  'delete'){
		jobId = forms['delete_criteria'].vJobID;
		
	}
	if (application.isInDeveloper()){application.output('readpiecetables job id X '+jobId+'----------------------------------------')}
	if (!jobId || jobId == ""){return false}
	readSheets(jobId);
	readSheetBoms(jobId);
	readPiecemarks();
	readSummedMarks();
	application.output('formname '+application.getActiveWindow().controller.getName())
	if (typeRead != 'import'){
		readIdfiles();
		readBarcodes(jobId);
	}
	readSequences(jobId);
	readLots();
	return true;

	
	
	/**
	var jobID = scopes.jobs.jobUnderCustomer;
	if (!jobID){
		jobID = globals.session.jobId;
	}
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
	readLots();*/
}
/**
 * @param sourceDb
 *
 * 
 *
 * @properties={typeid:24,uuid:"3B8676A8-B686-472A-90F5-0AECADE75DEF"}
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
 * @properties={typeid:24,uuid:"260DA285-2549-4FE6-98C3-80ADF4A1D1D0"}
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
 * @properties={typeid:24,uuid:"1A616228-4336-467C-B287-61BCA9893E14"}
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
 * @properties={typeid:24,uuid:"4EC34F46-8B9D-48C5-A15A-BFDA06C7751E"}
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
 * @properties={typeid:24,uuid:"5B8CDEC1-9ACD-4500-8559-57D6178D62FF"}
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
 * @properties={typeid:24,uuid:"1B62299E-50A5-4FD1-971A-CCA5F10765F7"}
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
 * @properties={typeid:24,uuid:"28621369-3A80-46CC-A96E-3212D1623365"}
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
 * @properties={typeid:24,uuid:"E5818C3E-7ECD-4021-A3B0-D36CF607BFB3"}
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
 * @properties={typeid:24,uuid:"05D33525-501D-4556-BB50-0B2EBB67363C"}
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
 * @properties={typeid:24,uuid:"E9426958-AE4B-4BCE-9C85-4B2BD6E8C16F"}
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
 * @properties={typeid:24,uuid:"940FA344-F7E0-46B5-B229-64516EFC25DC"}
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
	
	
	if (application.isInDeveloper()){application.output('xxx tablePrefsLoad table '+formy.replace(version,"")+'_table'+' '+formy)}
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
 * @properties={typeid:24,uuid:"5ACD49AF-C87A-4EA0-86AE-FCFF5DC66628"}
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
 * @properties={typeid:24,uuid:"3DDD47FD-900C-457F-91B6-1B434AA0DEBE"}
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
 * @properties={typeid:24,uuid:"62C8F7C5-C859-4A8B-80F9-9ED66B7510FF"}
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
 * @properties={typeid:24,uuid:"791D233B-D348-4C89-AA81-95037B457958"}
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
 * @properties={typeid:24,uuid:"A98C66C7-B597-44CA-A364-EC1E03C57F99"}
 */
function onGetInformation(event,flaggedDeleted) {
	warningsYes();//-----------------------------------//
	warningsMessage('sts.txt.collecting.info',true);//-----------------------------------//
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
	var formXPrefix = formXName.split("_")[0];
	var oldFormName = formXPrefix+'_piecemark_info';
	var newFormName = oldFormName+versionForm;
	if (application.isInDeveloper()){application.output('oldformname '+oldFormName+' newFormName '+newFormName)}
	if (!forms[newFormName]){
		solutionModel.cloneForm(newFormName,solutionModel.getForm(oldFormName));
	}
	if (forms[newFormName+'_table']){
		removeFormHist(newFormName+'_table');
	}
	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	if (application.isInDeveloper()){application.output('formX '+formXName)}
	formX.collectAndTab(newFormName); //table dataset is built within
	warningsX();//-----------------------------------//
}
/**
 * @param {JSEvent} event
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"9B76F79D-345F-4C2A-830E-CB035E55E972"}
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
 * @properties={typeid:24,uuid:"EC84191E-7552-4CED-852F-7D980C036056"}
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
 * @properties={typeid:24,uuid:"C1F7ABF9-81D6-45A8-9820-A87C543350B5"}
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
	//  FLAG PCMK MINR SHT SEQN SONUM LDN LDR PCRL FABS JOBR AREA BTCH COW (LOT) (PKG)
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
	if (criteria.minors == 1){
		MINR = '';
	} else {
		if (PCMK == ""){
			var MINR = ' WHERE piecemarks.piecemark = piecemarks.parent_piecemark ';
		} else {
			MINR = ' AND piecemarks.piecemark = piecemarks.parent_piecemark ';
		}
	}
	
	query += PCMK + MINR + addOrderQuery;
	if (application.isInDeveloper()){application.output('sql2-- '+query)}
	return query;
}
/**
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"F3739E4A-FCB6-41E4-AF50-D762853B4B86"}
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
 * @properties={typeid:24,uuid:"9CA48276-CD99-4D90-8414-EB78A5D6E1C7"}
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
 * @properties={typeid:24,uuid:"CB654B44-E742-4B63-B115-A43AAB360D6C"}
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
 * @properties={typeid:24,uuid:"C86BC222-CFE6-4589-AC1E-C05EFD362A1C"}
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
 * @properties={typeid:24,uuid:"8A4DC821-D1CD-4343-BEC9-BC9C4E1EE986"}
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
	jobsArray.sort();
	return jobsArray;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"B3705382-D4DB-4187-A845-65F734219102"}
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
 * @properties={typeid:24,uuid:"E1DC113F-D15D-4419-8EF2-4AA7A55BE15A"}
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
 * @properties={typeid:24,uuid:"73F46CF5-D772-4017-8891-11E20E64B1DF"}
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
 * Create idfile for piecemark
 * Uniqueness is piecemark_id, sequence_id, lot_id, except for summmarized piecemarks, which is just piecemark_id.
 * A "" sequence is a summarized piecemark.
 * 
 * @param piecemarkId Piecemark_id into piecemark table
 * @param sequence Sequence number either the sequence_id or sequence_number. Number retrieved from earlier lookup table.
 * @param lot
 * @param barcodeId Barcode_id from already created barcode
 * @param quantity quantity of items on barcode
 * @param remarks
 * @param pmkUniq
 * @param origQuant
 * @param summQuantity
 *
 * 
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"AF45BA80-61E9-4B6E-9BD7-B71CD1157287"}
 */
function createIdfileRecord(pmkUniq,piecemarkId,sequence,lot,barcodeId,quantity,origQuant,summQuantity,remarks){
	//if (dsIdfileArray){return dsIdfileArray
	//** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	//var fs = databaseManager.getFoundSet('stsservoy','idfiles');
	///var fs = dsIdfiles;

	var seqId = dsSequenceArray["_"+sequence];
	if (!seqId){seqId = createSequenceNumber(sequence)}
	var lotId = dsLotArray["_"+lot+"|_"+sequence];
	if (!lotId){lotId = createLotNumber(lot,sequence)}
	
	if (!barcodeId){
		barcodeId = createValidBarcode();
	}

	if (!dsIdfiles){
		dsIdfiles = databaseManager.getFoundSet('db:/stsservoy/idfiles');dsIdfiles.clear()
	}
	var lastIdx = dsIdfiles.getSize();
	var recIndex = dsIdfiles.newRecord(++lastIdx);
	var rec = dsIdfiles.getRecord(recIndex);
	dsIdfileList[rec.idfile_id] = recIndex;dsIdfileList[recIndex] = rec.idfile_id;
	if (!dsIdfileListByPm[piecemarkId]){dsIdfileListByPm[piecemarkId] = []}
	dsIdfileListByPm[piecemarkId].push(rec.idfile_id);
	if (!orphanInternalBCList){createBCSubBarcodes(1)}
	var idBarcode = orphanInternalBCList.pop();
	if (false && application.isInDeveloper()){application.output('id barcode is '+idBarcode)}
	if (false && application.isInDeveloper()){application.output(recIndex+' created idfile '+rec);}
	rec.piecemark_id = piecemarkId;
	rec.sequence_id = seqId;
	rec.lot_id = lotId;
	rec.id_serial_number_id = barcodeId;
	rec.tenant_uuid = globals.session.tenant_uuid;
	rec.original_quantity = origQuant;
	rec.summed_quantity = summQuantity;
	rec.id_guid = idBarcode;
	warningsMessage('Pm '+pmkUniq+' : '+utils.stringRight(piecemarkId, 8)+', '+quantity+' items',false);
	if (globals.session.appName != 'STS X Embedded'){
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
	}
	rec.id_creation_date = importDate;
	if (forms.import_performance_setting && forms.import_performance_setting.insJobSO){
		rec.shop_order = forms.import_performance_setting.insJobSO;
	}
	//createdRecords++;
	return rec;
}
/**
 * @param {JSRecord<'db:/stsservoy/import_table'>} fsRec
 * @param unique
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6B7CC441-0D80-437B-A251-4809C83CB448"}
 */
function createPiecemark(fsRec,unique){
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	commitTransactions();
	var recIndex = fs.newRecord(false);
	var rec = fs.getRecord(recIndex);
	if (fsRec.piecemark == fsRec.parent_piecemark){
		currentPcmkParentId = rec.piecemark_id;
	}
	rec.create_date = importDate;
	rec.job_id = scopes.jobs.importJob.jobId;
	rec.tenant_uuid = globals.session.tenant_uuid;
	rec.part_serial = createPartSerial();
	warningsMessage('Create pm '+unique+' PN: '+rec.part_serial,false);
	rec.parent_template_id = currentPcmkParentId;//save parentId of piecemark parent in piecemarks table.  This isn't an instance
	rec.material = fsRec.material;
	rec.finish = fsRec.finish;
	rec.grade = fsRec.grade;
	rec.item_length = fsRec.item_length*1;
	rec.item_quantity = fsRec.item_qty;
	rec.pcmk_qty = fsRec.pcmk_qty;
	rec.item_weight = fsRec.item_weight;
	rec.item_weight_lbs = scopes.globals.kgToLb(fsRec.item_weight);
	rec.item_length_in = scopes.globals.mmToIn(fsRec.item_length);
	rec.parent_piecemark = fsRec.parent_piecemark
	rec.piecemark = fsRec.piecemark;
	rec.sheet_id = dsSheetArray["_"+fsRec.sheet_number];
	///var routeCode = fsRec.e_route_code;
	if (globals.session.appName != 'STS X Embedded'){
		if (globals.m.routes.indexOf(fsRec.e_route_code_id) == -1){
			rec.e_route_code_id = forms.kiss_option_import.importRouting;
		} else {
			rec.e_route_code_id = globals.m.routes[fsRec.e_route_code_id];
		}
	}
	//application.output('route code id '+rec.e_route_code_id);
	if (fsRec.remarks && (globals.session.appName != 'STS X Embedded')){
		if (forms.kiss_option_import.saveNotesInto.search('Description') != -1){
			rec.description = fsRec.remarks;
		}
	}
	dsPiecemarkArray[unique] = rec.piecemark_id;
	insertedPiecemarks.push(rec.piecemark_id);
	dsIdfileListByPm[rec.piecemark_id] = [];
	createdRecords++;
}

/**
 * @param sheetNumber
 *
 * 
 *
 * @properties={typeid:24,uuid:"EDF37E38-D15B-4D3A-B680-5A1FC953B06E"}
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
	fs.loadRecords();
	fs.clear();
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
		var recIndex = fs.newRecord(false);
		rec = fs.getRecord(recIndex);
	}
	var sheetId = rec.sheet_id+"";
	rec.edit_date - editDate;
	rec.sheet_number = sheetNumber;
	rec.job_id = (scopes.jobs.jobUnderCustomer) ? scopes.jobs.jobUnderCustomer : globals.session.jobId;
	rec.tenant_uuid = globals.session.tenant_uuid;
	if (forms.import_performance_setting && forms.import_performance_setting.insSheetPO){
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
 * @properties={typeid:24,uuid:"D18BD757-7EF1-4701-A437-840BEC7DE92A"}
 */
function createSheets(){
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.result.add(q.columns.sheet_number);
	q.groupBy.add(q.columns.sheet_number);
	q.result.distinct = true;
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	//q.where.add(q.columns.job_id.eq(globals.session.jobId));
	var Q = databaseManager.getDataSetByQuery(q,-1);
	databaseManager.startTransaction();
	for (var idx = 1;idx <= Q.getMaxRowIndex();idx++){
		Q.rowIndex = idx;
		var sheet_num = Q.sheet_number;
		var unique = "_"+sheet_num;
		if (!dsSheetArray[unique]){
			//scopes.jobs.warningsMessage("Create sheet "+sheet_num);
			commitTransactions();
			createSheet(sheet_num);
		}
	}
	if (databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.commitTransaction();}
	if (1==1){return}
	///scopes.globals.stsMessages = "Creating sheets.";
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
 * @param sequenceNumber
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"14800E41-0744-40D9-96B7-6DAD6C42E8AB"}
 */
function createSequenceNumber(sequenceNumber){
	var unique = "_"+sequenceNumber;
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
	var fs = databaseManager.getFoundSet('stsservoy','sequences');
	if (dsSequenceArray[unique]){return dsSequenceArray[unique]}
	var recIndex = fs.newRecord(false);
	var rec = fs.getRecord(recIndex);
	rec.sequence_number = sequenceNumber;
	rec.job_id = (scopes.jobs.jobUnderCustomer) ? scopes.jobs.jobUnderCustomer : globals.session.jobId;
	rec.tenant_uuid = globals.session.tenant_uuid;
	dsSequenceArray[unique] = rec.sequence_id;
	dsSequenceArray[rec.sequence_id] = unique;
	return rec.sequence_id;
	//createdRecords++;
	//dsSequenceList[rec.sequence_id] = newItems[index];
}
/**
 * @param lotNumber
 * @param sequence
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F7557498-BEE0-49F6-90D6-5E1D7796E89F"}
 */
function createLotNumber(lotNumber,sequence){
	var uniqueLot = '_'+lotNumber;
	var uniqueSeq = '_'+sequence;

	var unique = uniqueLot+"|_"+uniqueSeq;
	if (dsLotArray[unique]){return dsLotArray[unique]}
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	var recIndex = fs.newRecord(false);
	var rec = fs.getRecord(recIndex);
	rec.lot = lotNumber;
	var seqId = dsSequenceArray[uniqueSeq]+'';
	rec.sequence_id = application.getUUID(seqId);
	rec.tenant_uuid = globals.session.tenant_uuid;
	dsLotArray[unique] = rec.lot_id;
	dsLotArray[rec.lot_id] = unique;
	//createdRecords++;
	return rec.lot_id;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"070B921A-5100-41C0-9E04-2685E6C7B715"}
 */
function createLotNumbers(){
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.result.add(q.columns.sequence_number);
	q.result.add(q.columns.lot_number);
	q.groupBy.add(q.columns.sequence_number);
	q.groupBy.add(q.columns.lot_number);
	q.result.distinct = true;
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var Q = databaseManager.getDataSetByQuery(q,-1);
	databaseManager.startTransaction();
	for (var idx = 1;idx <= Q.getMaxRowIndex();idx++){
		Q.rowIndex = idx;
/**	databaseManager.startTransaction();
	warningsMessage('Creating lots.');
	///var newItems = [];
	var retainFS = forms.kiss_option_import.transitionFS;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;*/
		var seq_num = Q.sequence_number;
		var lot_num = Q.sequence_lot_number;
		if (!Q.lot_number){
			lot_num = "";
		}
		var unique = "_"+lot_num+"|_"+seq_num;
		if (dsLotArray[unique]){
			//warningsMessage('Lot '+unique+' exists');
			null;
		} else {
			createLotNumber(lot_num,seq_num);
			commitTransactions();
			//warningsMessage('Create lot: '+lot_num+', seq: '+seq_num);
		}
	}
	if (databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.commitTransaction();}
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"43AC18E2-1EEE-41A2-A4BD-FCDED01608D7"}
 */
function createSequenceNumbers(){
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.result.add(q.columns.sequence_number);
	q.groupBy.add(q.columns.sequence_number);
	q.result.distinct = true;
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var Q = databaseManager.getDataSetByQuery(q,-1);
	databaseManager.startTransaction();
	for (var idx = 1;idx <= Q.getMaxRowIndex();idx++){
		Q.rowIndex = idx;
/**	databaseManager.startTransaction();
	//warningsMessage('Creating sequences.');
	var newItems = [];
	var retainFS = forms.kiss_option_import.transitionFS;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = length;
	///var insertCount = 0;//how many lines to insert with this barcode
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		var seq_num = Q.sequence_number;
		if (newItems.indexOf(seq_num) == -1){
			newItems.push(seq_num);
		}
	}
	var length = newItems.length;
	for (index = 0;index < length;index++){*/
		var seq_num = Q.sequence_number;
		if (dsSequenceArray["_"+seq_num] != null){
			//warningsMessage('Sequence exists '+newItems[index]);
			continue
		}
		//warningsMessage('Create sequence '+newItems[index]);
		commitTransactions();
		createSequenceNumber(seq_num);
	}
	
	if (databaseManager.hasTransaction()){databaseManager.commitTransaction()}
}
/**
 * @AllowToRunInFind
 *
 * 
 *
 * @properties={typeid:24,uuid:"5426AB7B-9366-42A3-8B70-B44970ECA2DF"}
 */
function createBarCodePrefix(){
	if (barcodePrefix == ""){//#87ticket#87
		//Get prefix from default customer record
		/** @type {QBSelect<db:/stsservoy/customers>} */
		var c = databaseManager.createSelect('db:/stsservoy/customers');
		c.result.add(c.columns.customer_id);
		c.where.add(c.columns.customer_id.eq(importJob.customerId));
		c.where.add(c.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		c.where.add(c.columns.delete_flag.isNull);
		var C = databaseManager.getFoundSet(c);
		custRec = C.getRecord(1);
		//var barcode_prefix_label = custRec.barcode_prefix;//change to customer's prefix, not selected

		if (scopes.jobs.importJob.jobId){
			var useCustId = importJob.bcFormId;//addresses ticket #87 ticket#87
		} else {
			useCustId = importJob.customerId;
		}
		
		/** @type {QBSelect<db:/stsservoy/customers>} */
		var c2 = databaseManager.createSelect('db:/stsservoy/customers');
		c2.result.add(c2.columns.customer_id);
		c2.where.add(c2.columns.customer_id.eq(useCustId));
		c2.where.add(c2.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		c2.where.add(c2.columns.delete_flag.isNull);
		/** @type {JSFoundSet<db:/stsservoy/customers>} */
		var C2 = databaseManager.getFoundSet(c2);
		var custRec2 = C2.getRecord(1);
		/** 
		 * load customer barcode specs
		 * field.barcode_include_prefix(include,exclude)
		 *	field.barcode_prefix_label (twochars)
		 *	field.barcode_preamble_length (4 or 5)
		 *	field.barcode_job_start (last characters, first characters, starting at position)
		 * 	field.barcode_fixed_length (1..8)
		 *	field.barcode_job_length (1..20)
		 */
		var embeddedPrefix = {
			barcode_include_prefix : i18n.getI18NMessage('sts.txt.barcode.include.prefix'),
			barcode_prefix : 'P2',
			barcode_preamble_length : 5,
			barcode_job_start : i18n.getI18NMessage('sts.txt.barcode.last.characters'),
			barcode_fixed_length : 8
		}
		if (globals.session.appName == "STS X Embedded" && !custRec2){
			barcode_include_prefix = embeddedPrefix.barcode_include_prefix;
			barcode_prefix_label = embeddedPrefix.barcode_prefix;
			barcode_preamble_length = embeddedPrefix.barcode_preamble_length;
			barcode_job_start = embeddedPrefix.barcode_job_start;
			barcode_fixed_length = embeddedPrefix.barcode_fixed_length;
		} else {
			var barcode_include_prefix = custRec2.barcode_include_prefix;
			var barcode_prefix_label = custRec2.barcode_prefix;
			var barcode_preamble_length = custRec2.barcode_preamble_length;
			var barcode_job_start = custRec2.barcode_job_start;
			var barcode_fixed_length = custRec2.barcode_fixed_length;
		}
		var jobNumber = globals.session.jobNumber;
		// If prefix is not two characters, pad with "P"
		if (barcode_prefix_label.length == 1){barcode_prefix_label = "P"+barcode_prefix_label}
		// Pad job number if too short
		var lengthJobNeeded = 0;
		lengthJobNeeded = (barcode_preamble_length == 4) ? 2 : 3;
		lengthJobNeeded = (barcode_include_prefix == i18n.getI18NMessage('sts.label.barcode.include.prefix')) ? lengthJobNeeded : lengthJobNeeded*1 + 2;
		while (jobNumber.length < lengthJobNeeded){
			jobNumber = "0"+jobNumber; // #76 pad job number for barcode creation
		}

		var bPrefix = (barcode_include_prefix == i18n.getI18NMessage('sts.txt.barcode.include.prefix'));
		var begStr,endStr;
		var jobNameLength = bPrefix ? barcode_preamble_length-2 : barcode_preamble_length;
		var jobStrLength = jobNumber.length;

		var jobPrefix = "";
		if (barcode_job_start == i18n.getI18NMessage('sts.txt.barcode.last.characters')) {
			begStr = jobStrLength-jobNameLength;
			endStr = jobStrLength;
		} else if (barcode_job_start == i18n.getI18NMessage('i18n:sts.txt.barcode.start.position')) {
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
	}
	barcodePrefix = barcodePrefix.toUpperCase();
	return barcodePrefix;
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6A7E104F-902F-448F-B34D-FA2570E44E07"}
 */
function createBarCodeNextNumber(){
	///var barcodeLength = scopes.prefs.barcodeLength;
	var prefix = createBarCodePrefix(); // serial is loaded in this call, too
	///var serialLength = barcodeLength-barcodePrefix.length;
	

	var serial = createBarCodeSerial();
	return prefix+serial;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"F3623BEE-5EEB-4A23-BC13-C58317D5E010"}
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
 * @properties={typeid:24,uuid:"21B0CA2E-C13B-4DD1-AD21-BAB1F3EADE67"}
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
 * @properties={typeid:24,uuid:"234E7655-4E84-424B-B127-CA94EC59691C"}
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
 * @properties={typeid:24,uuid:"F66327B2-2ABE-48B9-864A-3A8BBC6262A7"}
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
 * @properties={typeid:24,uuid:"96BAC533-834E-4125-9D3A-C263ADBFCA5B"}
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
 * @param camberNote
 *
 * 
 *
 * @properties={typeid:24,uuid:"F8F64276-1650-4607-8935-11314A2E14A9"}
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
 * @param fraction
 *
 * 
 *
 * @properties={typeid:24,uuid:"DAAD709A-834A-47F9-BDC1-C5CD8BD42713"}
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
 * @param {String} serial
 *
 * 
 *
 * @properties={typeid:24,uuid:"32AEFF1A-E0E5-4044-B494-FE6F54F29660"}
 */
function countUpNumbers(serial){
	if (!custRec){
		var serialLength = serial.length;
		if (globals.session.appName == "STS X Embedded"){
			serialLength = 10;
		}
	} else {
		if (globals.session.appName == "STS X Embedded"){
			serialLength = 10;
		} else {
			serialLength = scopes.prefs.barcodeLength-custRec.barcode_preamble_length;
		}
	}
	var padZeroes = "000000000000000000000000000000";
	serial = padZeroes+serial;
	serial = serial.substr(serial.length-serialLength,serial.length);
	var rollover = true;
	var index = serial.length-1;
	while(rollover){
		rollover = false;
		var digit = serial.substring(index,index+1);
		var slice1 = serial.slice(0,index);
		var slice2 = serial.slice(index+1);
		if (digit == '9'){serial = slice1+'A'+slice2;continue}
		if (digit == 'Z'){
			serial = slice1+'0'+slice2;rollover = true;index--;continue
		}
		serial = slice1+String.fromCharCode(serial.charCodeAt(index)+1)+slice2;
	}
	return serial;
}
/**
 * @param qtyBarcodes
 * @param qtyPcmk
 * @param weight
 *
 * 
 *
 * @properties={typeid:24,uuid:"9022F153-BA2D-47EC-A275-3567955DCBE4"}
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
 * 
 *
 * @properties={typeid:24,uuid:"459D1975-E633-4792-A453-32E1ECF70B7C"}
 */
function ximportAmendQuantities(){
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
 * @properties={typeid:24,uuid:"E4E8EE58-09B9-4DAA-AC6E-FBFBB5923065"}
 */
function createBarCodeSerial(){
	if (barcodePrefix == "") {return ''}
	var serial = '0';
	/** @type {JSRecord<db:/stsservoy/last_id_serial>} */
	var rec = null;
	/** @type {QBSelect<db:/stsservoy/last_id_serial>} */
	var b = databaseManager.createSelect('db:/stsservoy/last_id_serial');
	b.result.add(b.columns.last_id_serial_id);
	b.where.add(b.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	b.where.add(b.columns.prefix.eq(barcodePrefix));
	var B = databaseManager.getFoundSet(b);
	if (B.getSize() > 0){
		rec = B.getRecord(1);
		serial = rec.serial;
	} else {
		var recIndex = B.newRecord();
		rec = B.getRecord(recIndex);
		rec.tenant_uuid = globals.session.tenant_uuid;
		rec.prefix = barcodePrefix;
	}
	serial = countUpNumbersNonOdo(serial);
	rec.serial = serial;
	rec.edit_date = new Date();
	databaseManager.saveData(rec);
	barcodeLast = rec.serial;
	return serial;
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"31DF1E54-E000-4C2A-BF73-ACDAEBEB417E"}
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
 * @properties={typeid:24,uuid:"547C9999-1D0E-49C3-84DA-A1CA5DA11D2B"}
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
 * @properties={typeid:24,uuid:"0044A240-452E-4CA0-9D04-8C86661743F5"}
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
 * @properties={typeid:24,uuid:"A3319983-8B0F-4AC6-9230-CB2B86D6A215"}
 */
function findEmptyColumns(event,table){
	//if (true != false){return}
	//globals.a.tempHiddenEmpty = [];
	var altForm = (table == 1);
	var formName = event.getFormName();
	var regexp = new RegExp(/(_[0-9]+)/);
	versionMatch = event.getFormName().match(regexp);
	if (versionMatch){versionForm = versionMatch[1]}
	var prefix = formName.split('_')[0];
	var hideEm = (globals.hideEmptyColumns == 1);
	//application.output(prefix+' form name '+formName+' loads_pcmk_combo');
	//forms.loads_pcmk_combo.elements.split.getRightForm().elements.checklist_line.visible
	if (prefix == 'loads'){
		var form = 'loads_pcmk_combo'+versionForm;
		if (forms[form] && forms[form].elements && forms[form].elements.split.getLeftForm().elements.selection){
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
 * @properties={typeid:24,uuid:"1B4D1317-794C-4379-A653-DD897F0DC594"}
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
 * @properties={typeid:24,uuid:"FCE1FC80-315C-4835-82FC-83B520962BC1"}
 */
function onRecordSelectIdfile(event){
	//application.output('selected line');
	if (!versionForm){versionForm = globals.getInstanceForm(event);}
	var formName = event.getFormName();
	var tableParent = formName.replace("_table","");
	if (application.isInDeveloper()){application.output('on record select '+formName+' version '+versionForm);}
	if (typeof forms[tableParent].elements.tabless === 'object'){return}
	//if (formName.search('barcode') != -1){return}
	var prefix = event.getFormName().split("_")[0];
	///var index = forms[event.getFormName()].controller.getSelectedIndex();
	var rec = forms[event.getFormName()];null;null;
	//var fs = databaseManager.getFoundSetCount('sts_piecemarks');
	//fs.sts_piecemark.loadRecords();
	//var fs = rec.piecemark_id.rr;
	if (rec.idfile_id){//20180226 changed from idfile_id for showing transaction
		scopes.jobs['transactionIdfileId'+versionForm] = rec.idfile_id;
	} else {
		scopes.jobs['transactionIdfileId'+versionForm] = rec.if_idfile_id;//20180226 changed from idfile_id for showing transaction
	}
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
 * @properties={typeid:24,uuid:"9B293B6F-E95F-47AF-BA41-B9A684C2E9E0"}
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
 * Ensure barcode is unique, then save
 * 
 *
 * @properties={typeid:24,uuid:"970C5AF4-2D0C-4C5C-AC8C-5FA0C9FC6E55"}
 */
function createValidBarcode(){
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var barsFS = databaseManager.getFoundSet('stsservoy', 'id_serial_numbers');
	var recIndex = barsFS.newRecord();
	var barRec = barsFS.getRecord(recIndex);
	barRec.id_serial_number = createBarCodeNextNumber(); 
	barRec.tenant_uuid = globals.session.tenant_uuid;
	barRec.edit_date = new Date();
	createdRecords++;
	//databaseManager.saveData(barRec);
	return barRec.id_serial_number_id;
}
/**
 * @AllowToRunInFind
 * 
 * @param table
 *
 * 
 *
 * @properties={typeid:24,uuid:"503F1EA1-6225-4950-A9D9-B052E4ECCEA5"}
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
 * @properties={typeid:24,uuid:"6B38EA59-CD5B-4474-A64D-359A0C363699"}
 */
function deleteLotsJob(){
	if (!dsLots){return}
	var tempCodes = [];
	for (var index2 = 1;index2 <= dsLots.getSize();index2++){
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
 * @properties={typeid:24,uuid:"70B48D15-B093-4E4D-A9C8-25B0248FF08F"}
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
 * @param foundset
 *
 * 
 *
 * @properties={typeid:24,uuid:"41AE4EEB-27B1-4A1B-8FC7-87BBB3A5EEBB"}
 */
function deleteFoundSet(foundset){
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset);
	fsUpdater.setColumn('delete_flag',99);
	fsUpdater.setColumn('edit_date',new Date());
	fsUpdater.performUpdate();
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"A5DEF5A0-EB29-4586-99AB-E4758EA2B06F"}
 */
function deleteBarcodesJob(){
	if (!dsBarcodes){return}
	var tempCodes = [];
	var rec = null; var index2 = 1;
	while (rec = dsBarcodes.getRecord(index2++)){
		tempCodes.push(rec.id_serial_number_id);
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
 * @properties={typeid:24,uuid:"498CCC42-80C0-4E17-A47C-118FDC41BF75"}
 */
function deleteIdfilesJob(){
	///var dsIdfileList = scopes.jobs.dsIdfileList;
	if (dsIdfiles.getSize() == 0){return}
	var idFileIds = [];
	var rec = null; var idx = 1;
	while (rec = dsIdfiles.getRecord(idx++)){
		idFileIds.push(rec.idfile_id);
	}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */	
	var f = databaseManager.createSelect('db:/stsservoy/idfiles');
	
	f.result.add(f.columns.idfile_id);
	f.where.add(f.columns.idfile_id.isin(idFileIds));
	var fs = databaseManager.getFoundSet(f);
	///var count = fs.getSize();
	deleteFoundSet(fs);
	application.output('Idfiles to delete '+idFileIds.length);
	dsIdfiles = null;
	dsIdfileList = [];
	dsIdfileArray = [];
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"2B8F1C0C-9DE1-44A7-8AE8-9A628B7770FD"}
 */
function deleteImportBatch(){
	if (deletedIdfiles.length > 0){
		var date = new Date();
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var FS = databaseManager.getFoundSet('stsservoy','idfiles');
		var ds = databaseManager.convertToDataSet(deletedIdfiles);
		FS.loadRecords(ds);
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
		FS.loadRecords(ds);
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
 * 
 *
 * @properties={typeid:24,uuid:"64DD6763-ADA5-49FC-A850-0FEA37BBDCF7"}
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
 * 
 * @param {Boolean} deleteHistory 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"2242DBCB-B3FE-41B1-9B40-919439411989"}
 */
function deleteIdfiles(deleteHistory){
	// Just set idfiles to '99' or set transactions to '99' and idfiles to '99'
	if (scopes.jobs.idfilesToDelete.length == 0){return}
	//var itd = scopes.jobs.idfilesToDelete;
	//for (var i = 0;i < itd.length;i++){
	//	itd[i] = application.getUUID(itd[i]);
	//}

	var deleteDate = new Date();
	var idfileId = null;
	while (scopes.jobs.idfilesToDelete.length != 0){
		var tempDeleteIdfiles = []; var idx = 200;
		while ((idx-- != 0) && (scopes.jobs.idfilesToDelete.length != 0)){
			tempDeleteIdfiles.push(scopes.jobs.idfilesToDelete.pop()+'');//push 400 idfile ids at a time for deletion.  Seems to be a limit on isin(guid_list) for QBSelect
		}
		
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var p = databaseManager.createSelect('db:/stsservoy/idfiles');
		p.result.distinct = true;
		p.result.add(p.columns.id_serial_number_id);
		p.groupBy.add(p.columns.id_serial_number_id);
		p.where.add(p.columns.idfile_id.isin(tempDeleteIdfiles));
		var subQ = databaseManager.getDataSetByQuery(p,-1);
		var subArray = subQ.getColumnAsArray(1);
		//p.where.add(p.columns.idfile_id.isin(tempDeleteIdfiles));
		
		
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var i = databaseManager.createSelect('db:/stsservoy/idfiles');
		i.result.add(i.columns.idfile_id);
		i.result.distinct = true;
		i.where.add(i.columns.id_serial_number_id.isin(subArray));
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var resultII = databaseManager.getFoundSet(i);
		if (resultII.getSize() == 0){return}
		var markIdfiles = databaseManager.getFoundSetUpdater(resultII);
		if (!deleteHistory){
			markIdfiles.setColumn('delete_flag',99);
			markIdfiles.setColumn('deleted_date',deleteDate);
			var status = markIdfiles.performUpdate();
			if (application.isInDeveloper()){application.output('idfiles files updated to deleted 99 '+status)}
		} else {//deleteHistory is true, do not delete idfiles, just update normal edits on status
			i.result.clear();
			/** @type {QBJoin<db:/stsservoy/transactions>} */
			var j = i.joins.add('db:/stsservoy/transactions');
			j.on.add(j.columns.idfile_id.eq(i.columns.idfile_id));
			i.result.add(j.columns.trans_id);
			var Iset = databaseManager.getDataSetByQuery(i,-1);
			var transArray = Iset.getColumnAsArray(1);
			
			if (transArray.length > 0){
				/** @type {QBSelect<db:/stsservoy/transactions>} */
				var k = databaseManager.createSelect('db:/stsservoy/transactions');
				k.result.distinct = true;
				k.result.add(k.columns.trans_id);
				k.where.add(k.columns.trans_id.isin(transArray));
				
				var resultIII = databaseManager.getFoundSet(k);
				if (resultIII.getSize() > 0){
					var markTransFiles = databaseManager.getFoundSetUpdater(resultIII);
					markTransFiles.setColumn('delete_flag',99);
					markTransFiles.setColumn('deleted_date',deleteDate);
					status = markTransFiles.performUpdate();
					if (application.isInDeveloper()){application.output('transaction files set to 99')}
				}
			}
			markIdfiles.setColumn('status_description_id',null);
			markIdfiles.setColumn('id_location',null);
			markIdfiles.setColumn('bundle_id',null);
			status = markIdfiles.performUpdate();
			if (application.isInDeveloper()){application.output('idfile files reset history')}
		}
	}
}
/**
 *
 * 
 *
 * @properties={typeid:24,uuid:"D724870D-5C87-42BF-81D7-5960A4E21920"}
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
 * @properties={typeid:24,uuid:"D3CB3B29-34B7-4579-835E-2CEAB65BE357"}
 */
function purgeDeletedIdfiles(){
	
	//TODO kill off transactions for each idfile
	warningsYes();
	warningsMessage('Purging Idfile information.');

	if (scopes.jobs.purgeBarcodeRecords.length == 0){return}
	while (scopes.jobs.purgeBarcodeRecords.length != 0){
		var tempPurgeIdfiles = []; var idx = 200;
		while ((idx-- != 0) && (scopes.jobs.purgeBarcodeRecords.length != 0)){
			tempPurgeIdfiles.push(scopes.jobs.purgeBarcodeRecords.pop()+'');//push 400 idfile ids at a time for deletion.  Seems to be a limit on isin(guid_list) for QBSelect
		}
		// Remove all idfiles from purge list
		/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
		var id = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
		id.result.add(id.columns.id_serial_number_id);
		id.where.add(id.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		id.where.add(id.columns.id_serial_number_id.isin(tempPurgeIdfiles));
		var ID = databaseManager.getFoundSet(id);
		ID.deleteAllRecords();
		
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var p = databaseManager.createSelect('db:/stsservoy/idfiles');
		p.result.distinct = true;
		p.result.add(p.columns.id_serial_number_id);
		p.groupBy.add(p.columns.id_serial_number_id);
		p.where.add(p.columns.id_serial_number_id.isin(tempPurgeIdfiles));
		var subQ = databaseManager.getDataSetByQuery(p,-1);
		var subArray = subQ.getColumnAsArray(1);
		
		// Remove all transactions from idfiles
		/** @type {QBSelect<db:/stsservoy/transactions>} */
		var tr = databaseManager.createSelect('db:/stsservoy/transactions');
		tr.result.add(tr.columns.trans_id);
		tr.where.add(tr.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		tr.where.add(tr.columns.idfile_id.isin(p));
		var TR = databaseManager.getFoundSet(tr);
		TR.deleteAllRecords();
		
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var i = databaseManager.createSelect('db:/stsservoy/idfiles');
		i.result.add(i.columns.idfile_id);
		i.result.distinct = true;
		i.where.add(i.columns.id_serial_number_id.isin(p));
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var resultII = databaseManager.getFoundSet(i);
		if (resultII.getSize() == 0){return}
		resultII.loadAllRecords();
		var rec = null;var idx = resultII.getSize();
		while (rec = resultII.getRecord(idx+1)){
			idx = resultII.getSize();
		}
		while (idx != 0){
			resultII.deleteRecord(idx);
			idx--;
		}
		//resultII.deleteAllRecords();
	}
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
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"ACDD0BB6-660F-4D03-B7E7-B6E26C9F274D"}
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

	///var piecemarkRec = null;
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
		.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
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
	///var pmActive = [];
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
			var bb =  databaseManager.createSelect("db:/stsservoy/id_serial_numbers");
			bb.result.add(bb.columns.id_serial_number_id);
			bb.result.add(bb.columns.delete_flag);
			bb.result.add(bb.columns.edit_date);
			bb.where.add(bb.columns.id_serial_number_id.isin(barcodesDelete));
			var resultB = databaseManager.getFoundSet(bb);
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
 * 
 * 
 * TODO generated, please specify type and doc for the params
 * @param jobID
 *
 * @properties={typeid:24,uuid:"D9599171-65BC-472C-A1B0-61BD75488531"}
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
 * @properties={typeid:24,uuid:"6CD4062D-A11D-48AF-875B-BB006989E7AA"}
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
 * @properties={typeid:24,uuid:"FE7E7ACD-CF3B-4A8D-A3C7-B00BFAC73B87"}
 */
function removeFormHist(formName){
	//application.getActiveWindow().
	var statHis = history.removeForm(formName);
	var statMod = solutionModel.removeForm(formName);
	if (application.isInDeveloper()){application.output(formName+' history remove: '+statHis+' solution model remove form: '+statMod);}
	return (statHis && statMod);
}
/**
 * @param {JSFoundSet<db:/stsservoy/import_table>} record
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"859F4EF2-9379-43FC-A2C1-5F85887CD779"}
 */
function importRecordPiecemarkExist(record){
	//record.select_hidebool = 1;//is the import record in the sheet already?
	// May exist, now how many items?  That is resolved within the idfile check. Beyond the scope of piecemark.
	var unique = uniquePiecemark(record);
	if (record.import_status.search(i18n.getI18NMessage('import.delete')) != -1){
		var pmId = dsPiecemarkArray[unique];
		if (piecemarksToDelete.indexOf(pmId) == -1){
			piecemarksToDelete.push(pmId);
		}
		return false;// should not exist after piecemark deleted, idfiles will be flagged too, don't worry the idfiles
	}
	if (record.import_status.search(i18n.getI18NMessage('import.ignore')) == -1 ){
		if (!dsPiecemarkArray[unique]){
			
			//if (false && application.isInDeveloper()){application.output('create piecemark '+unique)}
			createPiecemark(record,unique);
		} else {
			updatePiecemark(record,unique);
		}
		return true;
	}
	return true;
}
/**
 * Summarized piecemark for special checks
 * @param record
 *
 * 
 *
 * @properties={typeid:24,uuid:"FD2230C6-10F3-4C63-910C-1A58943DA5F6"}
 */
function uniqueSummedPiecemark(record){
	return record.material+","+record.grade+","+record.finish;
}
/**
 * @param record
 * unique idfile is piecemark_id, barcodeCount, sequence_id, lot_id

 * 
 *
 * @properties={typeid:24,uuid:"CAFC99BE-D8AD-444F-8DAF-ED75E81AC67D"}
 */
function uniqueIdfile(record){ 
	return record.piecemark_id+","+record.sequence_id+","+record.lot_id;
}
/**
 * @param tableRec
 *
 * 
 *
 * @properties={typeid:24,uuid:"2FB8E0DA-056F-4F35-9DE9-4069EFA906BE"}
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B23D483D-DAE7-44A1-BE94-3F6116BCC7D8"}
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
 * @param importRec
 *
 * 
 *
 * @properties={typeid:24,uuid:"EDAFF1C0-FE1B-4696-A51A-C84C7C777653"}
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
 * @properties={typeid:24,uuid:"6BD012FA-53F9-41C5-BDC1-CD7F953B6BD5"}
 */
function preserveHistory(record){
	var loseHist = record.action.search('LOSE') != -1;
	return !loseHist;
}
/**
 * @param record
 *
 * 
 *
 * @properties={typeid:24,uuid:"FF55698B-9896-460E-8267-BB98D4711E40"}
 */
function dbRecBCList(record){
	var c = scopes.jobs.countsBCandID;
	var length = c.dbIdfiles.length;
	for (var index = 0;index < length;index++){
		var rec = dsIdfiles.getRecord(dsIdfileList[c.dbIdfiles[index]]);
		var bcId = rec.id_serial_number_id; // current barcode ID which reps for 1 or more idfiles, giving a count for that barcode
		var idfileId = rec.idfile_id;
		if (!c.bcIdfiles[bcId]){
			c.bcIdfiles[bcId] = [];
		}
		c.bcIdfiles[bcId].push(idfileId);
	}	
}
/**
 * This collects the barcode information record for incoming versus database counts.
 * label quantity each, number of barcodes, total idfile/item count, and calls function  for barcodes and each barcode's idfile list
 * 
 * @param {JSFoundSet<db:/stsservoy/import_table>} record
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"630A21FA-2756-4590-9A8A-E76D905C2B4F"}
 */
function dbRecCounts(record){
	var deleteMod = (record.import_status == "DELETE");
	var deleteAll = (record.select_hidebool == 1);
	///var appendData = (scopes.jobs.appendToData);
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
	if ((globals.session.appName == 'STS X Embedded') || (forms.kiss_option_import && forms.kiss_option_import.importOption.search('Overwrite') == -1)){
		for (var index = 0; index < tDbIdFiles.length;index++){ // get idfiles that are for this sequence and lot
			var rec = dsIdfiles.getRecord(dsIdfileList[tDbIdFiles[index]]);
			var seqNum = record.sequence_number;
			var lotNum = record.lot_number;
			if (!lotNum){lotNum = ""}
			var lotId = dsLotArray["_"+lotNum+"|_"+seqNum];
			var seqId = dsSequenceArray["_"+seqNum];
			if ((rec && rec.lprint && rec.lprint == 1) && !preserveHistory(record)){continue} // skip printed or dirty records
			if (rec.sequence_id == seqId && rec.lot_id == lotId){
				c.dbIdfiles.push(tDbIdFiles[index]);
			}
		}
	} //if (forms.kiss_option_import.importOption.search('Overwrite') != -1){
	//	c.dbIdfiles = [];
	//}
	c.dbItemCnt = c.dbIdfiles.length;
	var isSubAssembly = (record.parent_piecemark != record.piecemark);
	c.inItemCnt = (isSubAssembly || !record.sequence_quantity || record.sequence_quantity == '') ? record.item_qty : record.sequence_quantity;
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
			rec = dsIdfiles.getRecord(idfileIndex);
			var itemCount = rec.summed_quantity;
			maxSummedQtyEa = (itemCount > maxSummedQtyEa) ? itemCount : maxSummedQtyEa;
			c.dbItemCnt += itemCount;
		}
		//------------  summary record
	}
	c.dbLabelQntEa = 0;
	//for (index = 0;index < c.dbItemCnt;index++){ // get barcodes for this pm idfiles
	for (index = 0;index < c.dbIdfiles.length;index++){ // get barcodes for this pm idfiles
		rec = dsIdfiles.getRecord(dsIdfileList[c.dbIdfiles[index]]);
		var thisBarcodeId = rec.id_serial_number_id;
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
	c.inLabelQntEa = record.barcode_qty;
	c.dbLabelCount = c.bcCodes.length;
	c.inLabelCount = record.set_bc_qty;
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
 * @param {JSFoundSet<db:/stsservoy/import_table>} record
 * @param {Boolean} correct
 *
 * 
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"15B25031-9788-4762-9852-322D87FBF4C4"}
 */
function importRecordCheckIdfileCount(record,correct){
	// How many idfiles for the piecemark 
	// How many barcodes for each prospective idfile
	// printed idfiles cannot be changed
	var bc="";//idfile, barcode messages
	var nums = dbRecCounts(record);
	if (false){for (var num in nums){application.output('nums '+num+' : '+nums[num])}}
	var uniquePm = uniquePiecemark(record);
	var pcmkId = dsPiecemarkArray[uniquePm];
	
	///if (record.item_qty > 1){getPiecemarkIdfiles(uniquePm)}
	///var deleteLine = (record.action == "Delete");
	var noIdsOnSubAssembly = (globals.session.appName == 'STS X Embedded' && record.parent_piecemark != record.piecemark);
	var summaryRec = (record.piecemark == ""); // summary idfile processing
	///var summaryQuant = 0; //summary idfile original quantity
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
	/// if (1==0){
	var tDbIdFiles = dsIdfileListByPm[pcmkId];
	if (!tDbIdFiles){tDbIdFiles = []}
	var dbIdfiles = [];
	var dbIdfilePrinted = [];
	if ((globals.session.appName == 'STS X Embedded') || (forms.kiss_option_import && forms.kiss_option_import.importOption.search('Overwrite') == -1)){
		for (index = 0; index < tDbIdFiles.length;index++){ // get idfiles that are for this sequence and lot
			var recIdfile = dsIdfiles.getRecord(dsIdfileList[tDbIdFiles[index]]);
			if (recIdfile.lprint == 1){
				dbIdfilePrinted.push(recIdfile.idfile_id);//cannot modify printed barcodes without override, reset if overridden
			}
			var recSeq = record.sequence_number;
			var recLot = record.lot_number;
			if (!recLot){recLot = ""}
			var recSeqId = dsSequenceArray["_"+recSeq];
			var recLotId = dsLotArray["_"+recLot+"|_"+recSeq];
			if (recIdfile.sequence_id+"" == recSeqId+"" && recIdfile.lot_id == recLotId){
				dbIdfiles.push(tDbIdFiles[index]);
			}
		}
	}
	var isSubAssembly = (record.piecemark != record.parent_piecemark);
	var inItemQty = (record.sequence_quantity == "" || isSubAssembly) ? record.item_qty : record.sequence_quantity;
	var dbItemQty = dbIdfiles.length;
	var diffItemQty = inItemQty-dbItemQty;
	if (summaryRec && dsIdfiles){
		//------------  summary record
		///summaryQuant = nums.inLabelQntEa ;// save to idfile in original_qty to retain accountability
		inItemQty = nums.inLabelCount;//summary record to one idfile per barcode
		dbItemQty = dbIdfiles.length;
		diffItemQty =  inItemQty-dbItemQty; //nums.dbIdfiles.length;
		//------------  summary record
	}
	if (diffItemQty != 0){
		if (diffItemQty > 0){
			//bc = ",+QTY"+diffItemQty;
			nums.idfileAdd = diffItemQty;
		} else {
			//bc = ",-QTY"+Math.floor(-1*diffItemQty);
			nums.idfileDel = diffItemQty;
		}
		
	}
	//var inBcCount = record.barcode_qty;
	var dbBcQntEa = []; // for each barcode, how many idfiles are in there?
	// need list of barcode ids for each piecemark
	// use idfile_id to get a barcode id, record barcode id and set length, disregard that barcode (continue)
	var bCIdSeen = []; // visited array indicating already got count from this barcode ID
	for (var index = 0;index < dbIdfiles.length;index++){
		recIdfile = dsIdfiles.getRecord(dsIdfileList[dbIdfiles[index]]);
		var tBcId = recIdfile.id_serial_number_id; // current barcode ID which reps for 1 or more idfiles, giving a count for that barcode
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
	var inBcCount = record.set_bc_qty;//temp Barcode Quantity Each in Db
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
	/ **
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
	 * /
	var bcCount = inBcCount - dbBcCount;
	if (bcCount != 0){
		if (bcCount > 0){
			//bc = bc+",+BC"+bcCount;
			nums.bcAdd = bcCount;
		} else {
			//bc = bc+",-BC"+Math.floor(-1*bcCount);
			nums.bcDel = bcCount;
		}
	}
	*/
	// Are the arrays correct? Count each barcode for piecemark in db vs incoming? 
	var summedBcCounts = [];  // counts for multiple idfiles for summarized records
	var finalBcCounts = [];
	//var bcAdjust = " [";
	for (index = 0;index < maxBcQntEa.length;index++){
		if (maxBcQntEa[index]!=0){
			//var plus = (maxBcQntEa[index] > 0) ? "+" : "";
			var inCurrent = (typeof dbBcQntEa[index] !== 'undefined') ? dbBcQntEa[index] : "0";
			//bcAdjust = bcAdjust+inCurrent+plus+maxBcQntEa[index];
			summedBcCounts.push(inCurrent+maxBcQntEa[index]);
		} else {
			//bcAdjust += "0";
			summedBcCounts.push(0);
		}
		if (index < inBcCount){
			finalBcCounts.push(inCurrent*1+maxBcQntEa[index]*1);
		}
		if (index != maxBcQntEa.length-1){
			//bcAdjust += ",";
		}
	}
	/**
	//bc = bc+bcAdjust+"]";
	if (!correct){
		if (record.import_status == ""){
			record.import_status == 'UPDATE';
		}
		return bc;
	}
	/ **----------------------------------------------------------------------------------------------------------------
	// Correct the items within the database
	// how many idfiles are there? adjust number of idfiles according to barcode settings
	// if any idfiles in a barcode are changed, do not change
	//application.output(nums);
	 * /
	}*/
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
	nums.idfileAdd = Math.abs(nums.idfileAdd); nums.idfileDel = Math.abs(nums.idfileDel); 
	///var origQuant;
	if (edited){
		var action = record.import_status;
		if (false && application.isInDeveloper()){application.output('actions to be taken '+action);}
		var orphanIdfileList = [];

		if (nums.bcAdd > 0){
			///summaryRec = (noIdsOnSubAssembly);//handle STS X Embedded barcode non-use for subassemblies
			//if (!noIdsOnSubAssembly){
			createNumberBarcodes(noIdsOnSubAssembly);//noIdsOnSubAssembly is for STS X Embedded
			//}
			if (false && application.isInDeveloper()){application.output('created barcodes '+nums.bcAdd);}
		}
		
		if (nums.bcDel > 0){
			orphanIdfileList = deleteNumberBarcodes(orphanIdfileList);
			if (false && application.isInDeveloper()){application.output('deleted barcodes '+nums.bcDel);}
		}
		
		if (nums.idfileAdd > 0){  // include orphans first, and then new idfiles to orphan list, not yet allocated to barcode
			createBCSubBarcodes(nums.idfileAdd);
			if (false && application.isInDeveloper()){application.output('created internal BCs'+orphanInternalBCList.length);}
			orphanIdfileList = createBCIdfiles(orphanIdfileList,record,nums.inItemCnt,summaryRec,uniquePm,pcmkId);
		}
		
		if (nums.idfileDel > 0){
			orphanIdfileList = deleteBCIdfiles(orphanIdfileList);
		}
		// Get GUID list for this pcmk
		if (dsGUIDs.length == 0){
			/** @type {QBSelect<db:/stsservoy/import_guids>} */
			var q = databaseManager.createSelect('db:/stsservoy/import_guids');
			q.result.add(q.columns.pcmk_id);
			q.where.add(q.columns.import_table_id.eq(record.import_table_id));
			q.sort.add(q.columns.guid_order);
			var Q = databaseManager.getFoundSet(q);
			/** @type {JSFoundSet<db:/stsservoy/import_guids>} */				
			var gRec = null; var ix = 1;
			while (gRec = Q.getRecord(ix++)){
				dsGUIDs.push(gRec.assem_guid+','+gRec.part_guid);
			}
		}
		var processedQnt = 0;
		for (var index7 = 0;index7 < nums.bcCodes.length;index7++){
			var barId7 = nums.bcCodes[index7]; // each barcode as in this piecemark import record
			var barId7list = nums.bcIdfiles[barId7]; // all idfiles for this import record
			while ((barId7list.length > nums.inLabelQntEa && !summaryRec) || (barId7list.length > 1 && summaryRec)){
				orphanIdfileList.push(barId7list.pop()); // reduce barcode idfile quantity, indicated by the bc on the idfile, but this only goes to a list, no changes
			}
			processedQnt += barId7list.length;
			while ((barId7list.length < nums.inLabelQntEa && !summaryRec && orphanIdfileList.length != 0 && processedQnt != nums.inItemCnt) || (barId7list.length == 0 && summaryRec)){
				var idfileId = orphanIdfileList.pop();
				barId7list.push(idfileId); // add orphan idfiles to a barcode that is not at capacity, since same pcmk, reuse orphan idfiles and change barcode to reflect that change
				if (false && application.isInDeveloper()){application.output(' new idfile '+idfileId+' '+dsIdfileList[idfileId]);}
				var idfileRec = dsIdfiles.getRecord(dsIdfileList[idfileId]);
				//idfileRec.edit_date = null;
				idfileRec.id_serial_number_id = barId7; // add idfile to barcode #task 12
				if (dsGUIDs.length != 0){
					var guid = dsGUIDs.shift().split(',');
					idfileRec.guid_major = guid[0];
					idfileRec.guid_minor = guid[1]
				}
				if (false && application.isInDeveloper()){application.output('barcode is '+barId7);}
				idfileRec.summed_quantity =  (summaryRec) ? finalBcCounts[nums.bcCodes.indexOf(barId7)] : 1;
				if (!dsBarcodeList[barId7]){
					dsBarcodeList[barId7] = [];
				}				
				dsBarcodeList[barId7].push(idfileId);
				//idfilePool.push(idFile);
				processedQnt++;
			} // this is where the idfile.id_serial_number_id needs to start set
		}
		//commitTransactions(true);
		/** 
		timeIn = 0; warningsMessage('Setting '+record.piecemark+' '+record.material);
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
			/ ** @type {Array} * /
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
		if (record.import_status){
			var loseHist = (record.import_status.search('LOSE') != -1);
		} else {
			loseHist = false;
		}

		/ **
		 * SAVE all save records or an sql search will not find new records, NOW use caching. SAVE too slow.
		 * all idfiles for this listing
		 * check to see if already in a barcode for this pm
		 * add to barcode within bc limit
		 * save idfile changes
		 * /
		//databaseManager.saveData();///inclusive, reverify and save ONLY records in this action
		while (idfileListing.length != 0){// put each idfile in the correct barcode
			if (application.isInDeveloper()){application.output(' enter final idfilelisting corrections ');}
			var templist = [];
			if (idfileListing.length > 200){
				templist = [].concat(idfileListing.slice(200));
				idfileListing = [].concat(idfileListing.slice(201));
				//while (idfileListing.length > 300){templist.push(idfileListing.shift())} // reduce size of idfile listing for sql query
			} else {
				templist = [].concat(idfileListing);
				idfileListing = [];
			}
			/ ** @type {QBSelect<db:/stsservoy/idfiles>} * /
			var q = databaseManager.createSelect("db:/stsservoy/idfiles");
			q.result.add(q.columns.idfile_id);
			q.result.add(q.columns.id_serial_number_id);
			q.result.add(q.columns.original_quantity);
			q.result.add(q.columns.summed_quantity);
			q.result.add(q.columns.lprint);
			q.result.add(q.columns.guid_major);
			q.result.add(q.columns.guid_minor);
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
			///var shortIdlist = dsIdListForPmDyn2;
			///var length = nums.bcCodes.length;
			//for (var indexId = 1;indexId <= dsIdListForPmDyn2.getSize();indexId++){
			//	existingIds.push(shortIdlist.getRecord(indexId));
			//}
			//application.output('existing '+existingIds.length+' created '+idfilePool.length);
			
			var idfileId = null;
			while (idfileId = idfilePool.pop()){
			//for (var indexId = 0;indexId < idfilePool.length;indexId++){
				//shortIdlist.setSelectedIndex(indexId);
				//var idfileId = idfilePool[indexId];
				if (nums.bcCodes.indexOf(idfileId) == -1){ //not already in any bc
					/** @type {JSFoundSet<db:/stsservoy/idfiles>} * /
					recIdfile = dsIdfiles.getRecord(dsIdfileList(idfileId));
					//var recId = recIdfile;
					barId = idfileBarcodes[idfileId];
					recIdfile.id_serial_number_id = barId; // add idfile to barcode #task 12
					recIdfile.summed_quantity =  (summaryRec) ? finalBcCounts[nums.bcCodes.indexOf(barId)] : 1;
					barList.push(recIdfile.idfile_id+""); // update barList

					warningsMessage('Id File normalization.');
					///saveRec = true;
				}
			}
		} */
		//warningsMessage('Update idfile barcodes.',true);
		//databaseManager.saveData();
		if (orphanIdfileList.length != 0){
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
		warningsMessage('Deleted orphans.',true);
		}
	}
	idfilePool = [];
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
	return null;
}
/**
 * 
 * 
 * @param {JSFoundSet<db:/stsservoy/import_table>} record
 *
 * @properties={typeid:24,uuid:"249128C9-AB56-427D-9E59-17C10BEB18FF"}
 */
function importRecordCheckSequence(record){
	if (dsSequenceArray["_"+record.sheet_number] == null){
		createSequenceNumber(record.sequence_number);
	}
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
 * @properties={typeid:24,uuid:"2FC24BEE-780F-411D-A4C5-3F95867BCE6A"}
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
 * @properties={typeid:24,uuid:"9481190F-6D39-4C5D-A0EB-2F62B8A53D50"}
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
 * @properties={typeid:24,uuid:"8E3615E9-574D-4D30-84D2-71B5DC81B35A"}
 */
function importRecords_append(){
	///var append = true; // ceremonial. Don't use this variable.
	// see importAmendQuantities() for adjustments to append quantities
	importRecords_sheet();
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"DD831A07-CF0E-421F-8B6D-38C91E8C1E70"}
 */
function importRecords_overwrite(){
	warningsMessage('Overwrite - Deleting current job information.',true)
	importRecordsDelete();
	///var append = false;
	warningsMessage('Overwrite - New Data . . .',true);
	importRecords_sheet();
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"527CF0EE-235E-49B7-8B8B-DBA2697032F9"}
 */
function importRecords_sheet(){
	var jobId = scopes.jobs.importJob.jobId;// scopes.jobs.jobUnderCustomer;
	if (!jobId){
		jobId = globals.session.jobId;
	}
	if (!jobId){
		var win = application.getActiveWindow();
		var formName = win.controller.getName();
		if (formName.search('import_performance') == 0){
			jobId = forms.import_performance_setting.jobUUID;
		}
	}
	///insertedBarcodes = []; insertedIdfiles = []; insertedPiecemarks = [];
	///deletedBarcodes = []; deletedIdfiles = []; deletedPiecemarks = [];
	///idfilesToDelete = [];
	//insertedSequences = []; deletedSequences = [];
	importDate = new Date();
	warningsYes();
	warningsMessage('Begin import. Reading Piecemark tables.',true);
	readPieceTables(); // existing records DEBUG
	//warningsMessage('Create Sheets',true);
	createSheets();//make sure sheets exist before import
	warningsMessage('Saving Sheets',true);
	//warningsMessage('Create Sequences',true);
	createSequenceNumbers();
	warningsMessage('Saving Sequences',true);
	//warningsMessage('Create Lots',true);
	createLotNumbers();
	warningsMessage('Saving Lots',true);

	if (databaseManager.saveData()){databaseManager.commitTransaction()}
	databaseManager.startTransaction();

	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.result.add(q.columns.import_table_id);
	q.sort.add(q.columns.sequence_number);
	q.sort.add(q.columns.parent_piecemark);
	q.sort.add(q.columns.piecemark);
	q.sort.add(q.columns.sheet_number);
	q.sort.add(q.columns.grade);
	q.sort.add(q.columns.finish);
	if (application.getSolutionName() == "STS X Embedded"){
		q.where.add(q.columns.selected.not.eq(0));
	}
	var Q = databaseManager.getFoundSet(q);
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var record = null; var idx = 1;
	var maxSize = 1;
	while (record = Q.getRecord(maxSize)){maxSize = Q.getSize()+1;}
	//var retainFS = forms.kiss_option_import.transitionFS;
	//var rows = retainFS.getMaxRowIndex();
	//for (var index = 0;index < rows;index++){
	var routeList = [];
	for (var route in globals.m.routes){if (route.length > 30){routeList.push(route)}}
	idx = 1;Q.sort('sequence_number asc,piecemark asc,parent_piecemark asc');
	while (record = Q.getRecord(idx++)){
		application.output(record.piecemark+' '+record.parent_piecemark+' '+record.sequence_number);
		//retainFS.rowIndex = index+1;
		//if (!record.action || record.action == ""||record.select_hidebool == 1){continue}
		if (globals.session.appName != "STS X Embedded"){
			if (!record.import_status || record.import_status == ""){continue}
			if (record.import_status == i18n.getI18NMessage('import.ignore')){continue}//RECENT import_status settings
		}
		//warningsMessage('Processing piecemarks line '+index);
		warningsMessage('Check '+idx+'/'+maxSize+' pcmk '+record.parent_piecemark+' '+record.piecemark,false);

		if (record.route_code){
			if (routeList.indexOf(record.route_code) == -1){
				var routeId = addRouteCode(record.route_code);
				globals.m.routes[routeId] = route;
				globals.m.routes[record.route_code] = routeId.routing_id;
				
			}

		}
		if (record.piecemark.toUpperCase() == record.parent_piecemark.toUpperCase()){
			currentPcmkInfo = {
				totalMarks : 0,
				totalBCs : 0,
				removeID : [], // IDs that are obviously removeable
				removeIDBC :[], // BCs that can be removed
				lockedBC : [], // BCs that are locked, good for count
				lockedID : [], // IDs that are locked, good for count
				printed : [],//indexed printed idfile ID and BC ID array
				dirty : [], // indexed ID and BC ID dirty array
				guids : [], // guids seen in import files
				distribution : [] //assoc array of barcodes holding arrays of idfiles
			}
		}
		var exists = importRecordPiecemarkExist(record);
		if (exists) {
			var uniquePm = uniquePiecemark(record);
			/** @type {String} */
			var pcmkId = dsPiecemarkArray[uniquePm];
			getImportTableGuids(record.import_table_id);
            /** @type {JSFoundSet<db:/stsservoy/idfiles>} */
        	var idfilesFSet = getPiecemarkIdfiles2(pcmkId);//list of db idfiles for this pcmk

        	if (idfilesFSet.getSize() > 0){databaseManager.saveData(idfilesFSet);}//keep job number, blank load, pcmks, barcodes, any bom data checkbox}

			var bc = getIdfileBcIDs(idfilesFSet,record)
			importRecordCheckIdfileCount2(record,bc);
		}
		commitTransactions(true);
	}
	timeIn = 0;	//warningsMessage('Saving Piecemark markers ');
	if (databaseManager.hasTransaction()){commitTransactions(true)}
	
	//readPiecemarks();
	var recStart = new Date().getTime();
	if (!databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.startTransaction()}
	createdIdfileCount = 0;
	/**for (index = 0;index < rows;index++){
	idx = 1;
	while (record = Q.getRecord(idx++)){

		var recCnt = rows-index;
		var recCurrT = new Date().getTime();
		var dur = recCurrT-recStart;
		var recSec = Math.floor(10*index/(dur/1000))/10;
		if (application.isInDeveloper()){application.output('rec sec '+recSec)}
		forms.kiss_option_import.importRecordCount = recCnt;
		forms.kiss_option_import.importSpeed = '('+recSec+'/s)';
		forms.kiss_option_import.errorMessage = Math.floor(rows/recSec/6)/10+' min '+createdIdfileCount+' pieces';
		remainingTime = Math.floor((rows-index)/recSec/6)/10+' min ';
		retainFS.rowIndex = index+1;
		if (!retainFS.action || retainFS.action == ""){continue}
		warningsMessage('Processing idfiles line '+index);
		//retainFS.import_status = "";
		record = retainFS;
		var exists = importRecordPiecemarkExist(record,true);
		if (exists) {
			importRecordCheckIdfileCount(record,true);
		}
		commitTransactions();
	}
	databaseManager.commitTransaction();databaseManager.startTransaction();
	warningsMessage('Committing non-aggregate piecemarks.');
	*/
	//createSummedMarks(forms.kiss_option_import.transitionFSsumm);
	commitTransactions(true);
	if (databaseManager.hasTransaction()){databaseManager.commitTransaction()}
	//warningsMessage('Summed piecemarks saving.',true);
	deleteIdfiles(); // delete marked Idfiles, along with transaction and barcodes
	deletePiecemarks();
	deleteImportBatch();
	databaseManager.commitTransaction();
	warningsX();
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"24CFA528-FB94-4230-81D2-F5597D78F573"}
 */
function importRecordsDelete(deleteJobId){
	
	/*
	 * 5 delete piecemarks attached to sheets
	 * 6 delete sheets for job - attached to job
	 * 1 delete lots for job - attached to sequences
	 * 3 delete id_serial_numbers for job - jattached to idfile
	 * 2 delete sequences for job - attached to idfile and/or job
	 * 4 delete idfiles for job - idfiles attached to piecemarks
	 */
	readPieceTables('delete'); // existing records
	/**
	 * delete id_serial_numbers
	 * delete transactions
	 * delete loads
	 * delete idfiles
	 * delete piecemarks
	 * delete sheetboms
	 * delete lots
	 * delete sheets
	 * 
	 */
	//deleteLotsJob();
	//warningsMessage('Delete Lots',true);
	//deleteSequencesJob(deleteJobId);
	//warningsMessage('Delete Sequences',true);
	//deleteBarcodesJob();
	//warningsMessage('Delete Barcodes',true);
	deleteIdfilesJob();
	warningsMessage('Delete Idfiles',true);
	//deletePiecemarksJob();
	//warningsMessage('Delete Piecemarks',true);
	//deleteSheetsJob(jobID);
	//warningsMessage('Delete Sheets',true);
}
/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"616B15A2-66EA-42B5-8356-84B97EA81454"}
 */
function importRecordsAlt(){
	importDate = new Date().getDate();

	// Are you sure you wish to discard the shapes?
	// Is routing to be used in the import?
	// Other import settings?
	null;
	/**
	reply = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
		i18n.getI18NMessage('sts.txt.question.discard.types'),
		[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')])
	applyDiscardTypes = (reply == i18n.getI18NMessage('sts.btn.yes'))
	if (applyDiscardTypes){
		
	} */
	forms['kiss_option_import'].applyImportPreferences();
	var fs = forms['import_table'].foundset.duplicateFoundSet();
	fs.sort('asc route_code');
	var rec = fs.getRecord(1);
	if (rec && rec.route_code){
		forms['kiss_option_import'].useImportRouting = false;
		var reply = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
			i18n.getI18NMessage('sts.txt.question.routing.used.import'),
			[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
		forms['kiss_option_import'].useImportRouting = (reply == i18n.getI18NMessage('sts.btn.yes'));
	}
	if (!forms['kiss_option_import'].useImportRouting){
		if (!forms['kiss_option_import'].importRouting){	
			var reply = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
				i18n.getI18NMessage('sts.txt.question.use.a.routing.code'),
				[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
			if (reply == i18n.getI18NMessage('sts.btn.yes')){
				return;
			}
		}
	}
	var databaseChanged = databaseManager.hasRecordChanges(forms.import_table.foundset);
	if (databaseChanged){
		reply = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
			i18n.getI18NMessage('sts.txt.question.have.import.table.changed'),
			[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')])
		if (reply == i18n.getI18NMessage('sts.btn.no')){return}
	}

	var minorsChanged = (forms.kiss_option_import.minorsChanged);
	if (minorsChanged){
		reply = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
			i18n.getI18NMessage('sts.txt.question.have.import.settings.been.applied'),
			[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
		if (reply == i18n.getI18NMessage('sts.btn.yes')){return}
	}
	reply = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
		i18n.getI18NMessage('sts.txt.question.continue.with.import'),
		[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
	if (reply == i18n.getI18NMessage('sts.btn.no')){return}
	forms.kiss_option_import.elements.btn_Apply.enabled = false;
	forms.kiss_option_import.elements.btn_Import.enabled = false;
	scopes.kiss.performImportTable();
	forms.kiss_option_import.onHide(null);
	if (databaseManager.hasTransaction()){
		databaseManager.saveData();
		databaseManager.commitTransaction();
	} else {
		databaseManager.saveData();
	}

	if (1==1){return}
	//----------------------------------------------------------------------------
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
	warningsMessage('KISS import complete',true);
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
 * @properties={typeid:24,uuid:"0F5143E7-C178-44B1-90D8-FC99C3C8E7E1"}
 * @AllowToRunInFind
 */
function warningsMessage(message,showAnyway){
	if (globals.session.appName.search('mobile') != -1){return}
	if (!scopes.jobs.warnWindow){warningsYes()}
	message = i18n.getI18NMessage(message);
	timeOut = new Date().getTime();
	//var newTime = timeOut-timeUpdate;
	if (!showAnyway && (timeOut - timeIn < 1000)){
		//if (showAnyway != true){return}
		return;
	}
	if (message == scopes.globals.stsMessages){message = message + " x"}
	if (forms.messagesWarnings){
		forms.messagesWarnings.message = message;
	}
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
 * @properties={typeid:24,uuid:"65CE9DCA-3471-4C75-85D1-524C40BA5B07"}
 * @AllowToRunInFind
 */
function warningsYes(){
	if (globals.session.appName.search('mobile') != -1){return}
	if (!scopes.jobs.warnWindow){scopes.jobs.warnWindow = null}
	if (!scopes.jobs.timeIn){scopes.jobs.timeIn = new Date().getTime()}
	var win = application.createWindow("STS Message", JSWindow.DIALOG);
	scopes.jobs.warnWindow = win;
	var screenX = application.getScreenWidth();
	//var screenY = application.getScreenHeight();
	win.setInitialBounds(screenX-470, 10, 460, 110);
	win.title = "STS Message";
	win.show('messagesWarnings');
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"C4EF8B77-A396-41CD-A316-00AAF79347B8"}
 * @AllowToRunInFind
 */
function warningsX(){
	if (globals.session.appName.search('mobile') != -1){return}
	//application.output('close warning window');
	forms.messagesWarnings.message = '';
	application.updateUI()
	var win = application.getWindow('STS Message');
	if (win && win.controller.getName() != 'messagesWarnings'){return}
	/** @type {JSWindow} */
	//var win = scopes.jobs.warnWindow;
	if (win){
		win.hide();
		win.destroy();
	}
	scopes.jobs.warnWindow = null;
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
 * @properties={typeid:24,uuid:"792802FD-D564-4BB4-A6D3-917DEC3E7E21"}
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
 * @properties={typeid:24,uuid:"34BA116F-1D04-4F6B-B059-E0167CE312D8"}
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
 * @properties={typeid:24,uuid:"D58B76CD-25F0-4441-A7F4-1B9787423D17"}
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
 * @properties={typeid:24,uuid:"517DE8DC-33E4-4417-864C-D2F9A300A22D"}
 */
function sampleBCPrint(event){
	null;
	var formName = event.getFormName();
	var top = forms[formName].elements.split.getLeftForm().controller.getName();
	if (top){}
	var browseSet = forms[formName].elements.split.getLeftForm().foundset;
	var browseSetSize = browseSet.getMaxRecordIndex();
	var record = null; var line = "";
	var baseDir = scopes.prefs.reportpath;
	var fileName = baseDir+"\\barcodelabel.txt"; var data = "";
	var randFileName = baseDir+"\\" + application.getUUID().toString().split("-")[4] +".txt";
	application.output(randFileName);
	//var file = plugins.file.createFile(fileName);
	//var status = file.createNewFile();
	var status = plugins.file.writeTXTFile(fileName,data);
	
	if (!status){
		application.output('BT data file write failed.');
		return;
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
 * @properties={typeid:24,uuid:"100148DA-341F-4087-AED3-413147E0B60F"}
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	var formName = event.getFormName();
	if (forms[formName].elements.btn_GetKiss){
		forms[formName].elements.btn_GetKiss.enabled = false;
	}
	//databaseManager.getTableFilterParams('stsservoy');
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.tenant_uuid.eq(scopes.globals.session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.job_number.eq(newValue));
	var J = databaseManager.getFoundSet(j);

	if (J.getSize() > 0){
		forms[formName].jobFound = true;
		if (application.isInDeveloper()){application.output('formformform '+formName)}
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
		if (forms[formName].elements.btn_GetKiss){
			forms[formName].elements.btn_GetKiss.enabled = true;
		}
		if (formName.search("barcode_idlabel") == -1 || formName.search(/(recall|remove)/) != -1){
			browseInfoEnable(event);
			//scopes.jobs.onGetInformation(event,false);
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
		if (globals.session.tenantJobArray.indexOf(newValue) == -1){
			plugins.dialogs.showErrorDialog('1217',i18n.getI18NMessage('1217'));
			newValue = '';
			return true;
		}
		if (globals.session.assocJobArray.indexOf(newValue) == -1){
			plugins.dialogs.showErrorDialog('1215',i18n.getI18NMessage('1215'));
			newValue = '';
			return true;
		}
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
 * @properties={typeid:24,uuid:"A0690877-523C-4B0E-82E0-67BC082DD10F"}
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
 * @properties={typeid:24,uuid:"10885A30-A995-4203-B428-CDCC57FB5680"}
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
 * @properties={typeid:24,uuid:"17FC7E37-852A-4B5A-9F36-41197308DDBE"}
 */
function tablePrefsPreLoad(formx){
	if (application.isInDeveloper()){application.output('tablePrefsPreLoad')}
	var thisVersion = '';
	var versionMatch = formx.match(scopes.globals.instanceReg);
	if (versionMatch){thisVersion = versionMatch[1]}
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
 * @param jobNum
 *
 * @properties={typeid:24,uuid:"09B770BA-1EB2-4FBC-8E3F-F34CE1E8C31E"}
 */
function createdEmbededJob(jobNum){
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/jobs');
	var idx = fs.newRecord(false);
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var rec = fs.getRecord(idx);
	var embedded = 'EEEEEEEE-EEEE-EEEE-EEEE-EEEEEEEEEEEE';
	rec.association_id = embedded;
	rec.customer_id = embedded;
	rec.edit_date = new Date();
	rec.tenant_uuid = embedded;
	rec.barcode_form = embedded;
	databaseManager.saveData(rec);
	return rec;
}
/**
 * Get job info with jobNumber, returning arrays of sheets, loads, etc
 * big procedure. may break into smaller
 * return {topForm : parent, job_id : jobId, job_num : jobNum};
 * 
 * @param jobNum
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"75A6935E-4648-4FA7-B190-16F9BBE0647B"}
 */
function getJobIdInfo(jobNum){
	//databaseManager.getTableFilterParams('stsservoy');
	//databaseManager.removeTableFilterParam('stsservoy','secTenantFilter');
	//databaseManager.removeTableFilterParam('stsservoy','embedded');
	/*
	 * return sequence_number, load_number, load_release, customer so, shop, Lot, package, area, batch, drawing num, 
	 */
	//application.output(globals.session.tenant_uuid);
	var altTen = +'';
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var p = databaseManager.createSelect('db:/stsservoy/jobs');
	p.result.add(p.columns.job_id);
	p.where.add(p.columns.delete_flag.isNull);
	p.where.add(p.columns.job_number.eq(jobNum));
	p.where.add(p.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fsJ = databaseManager.getFoundSet(p);
	/** @type JSRecord<db:/stsservoy/jobs> */
	var rec = fsJ.getRecord(1);
	if (!rec && application.getSolutionName() == "STSx"){
		rec = createdEmbededJob(jobNum);
	}
	var jobId = rec.job_id;
	var jobAssocId = rec.association_id;

	var win = application.getActiveWindow();
	var parent = win.controller.getName();
	/** sheetRefDrawing = sheetRefDrawing.sort();
	loadRels = loadRels.sort();
	shopOrderNumbers = shopOrderNumbers.sort();
	pcmkReleases = pcmkReleases.sort();
	activeStations = activeStations.sort();
	areaNames = areaNames.sort();
	batchNames = batchNames.sort();
	{sheet_ids :sheetIds, sheet_nums :sheetNumbers, ref_drawing :sheetRefDrawing,
		sequence_ids :sequenceIds, sequence_nums :sequenceNumbers,
		load_ids :loadIds, load_nums :loadNumbers, load_rels :loadRels,
		lot_ids :lotIds, lot_nums :lotNumbers,
		area_names : areaNames, batch_names :batchNames, customer_sos :shopOrderNumbers,
		pcmk_releases :pcmkReleases, active_stations :activeStations, package_nums: packageNumbers}
	 */
	globals.session.jobId = jobId;
	globals.session.jobNumber = jobNum;
	importJob.jobId = jobId;
	importJob.jobNumber = jobNum
	var jobAssocName = globals.m.assocs[jobAssocId];
	importJob.associationId = jobAssocId;
	importJob.associationName = jobAssocName;
	return {topForm : parent, job_id : jobId, job_num : jobNum, job_assoc : jobAssocName};
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
 * @properties={typeid:24,uuid:"65E59C24-D831-4CD0-B9EB-A321D736977C"}
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
 * @properties={typeid:24,uuid:"C1E9C383-F757-4DAA-84C5-15E8A88D0CA3"}
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
 * @properties={typeid:24,uuid:"B94F5227-5582-4BDD-8907-A28BC70B23E7"}
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
 * @properties={typeid:24,uuid:"3E46EC0B-E8CD-468E-B075-513F252BA674"}
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
 * 
 *
 * @properties={typeid:24,uuid:"42C0755E-F2C7-4D9A-9AB4-05F40E088420"}
 */
function createBarcodes(){
	while (idCreationCount > 0){
		var barcodeRec = createValidBarcode();
		idBarcodePool.push(barcodeRec.id_serial_number_id);
		importRecordCache.push(barcodeRec);
		idCreationCount--;
	}
}
/**
 * @param orphanFileList
 *
 * 
 *
 * @properties={typeid:24,uuid:"205D567D-C88F-44F8-A759-5E3B3D388690"}
 */
function createNumberBarcodes(skipCreateBarcode){
	var nums = scopes.jobs.countsBCandID;
	nums.bcAdd;nums.bcCodes;
	var createNumBarcodes = nums.bcAdd;
	while (createNumBarcodes > 0){  // add barcodes
		var newBcId = (skipCreateBarcode) ? 'FFFFFFFF-0000-0000-0000-DDDDDDDDDDDD' : createValidBarcode();
		//var newBcId = newBcRec;//.id_serial_number_id;
		nums.bcCodes.push(newBcId);
		dsBarcodeList[newBcId] = []; // update listing of idfles 
		nums.bcIdfiles[newBcId] = [];//comment out
		//nums.dbIdfiles.push(newBcId);
		createdRecords++;
		commitTransactions();
		createNumBarcodes--;
	}
	//return orphanIdfileList;
}
/**
 * @param orphanIdfileList
 *
 * 
 *
 * @properties={typeid:24,uuid:"1FBAC131-106F-4144-B1F5-04F10157478A"}
 */
function deleteNumberBarcodes(orphanIdfileList){
	var nums = scopes.jobs.countsBCandID;
	var deleteNumBarcodes = nums.bcDel;
	while (deleteNumBarcodes > 0){ // delete barcodes, keep list of idfiles on each deleted barcode
		var bcCode = nums.bcCodes.pop();
		barcodesToDelete.push(bcCode);
		/** @type {Array} */
		var barIdlist5 = nums.bcIdfiles[bcCode];
		var length5 = barIdlist5.length;
		for (var index5 = 0;index5 < length5;index5++){
			orphanIdfileList.push(barIdlist5[index5]);//no break since orphanIdfiles will be reallocated to another barcode
		}
		deleteNumBarcodes--;
		nums.bcIdfiles[bcCode] = null; // barcode no longer in use
	}
	return orphanIdfileList;
}
/**
 *
 * @properties={typeid:24,uuid:"E4402E50-E991-4809-A2FF-7CBDE6D7EB57"}
 * /
	var newIdfileRecs = [];*/
/**
 * TODO generated, please specify type and doc for the params
 * @param orphanIdfileList
 * @param record
 * @param inItemQty
 * @param summaryRec
 * @param uniquePm
 * @param pcmkId
 *
 * @properties={typeid:24,uuid:"0EDCA8AE-C4FA-420E-B370-C15452A707CF"}
 */
function createBCIdfiles(orphanIdfileList,record,inItemQty,summaryRec,uniquePm,pcmkId){
	var newIdfileIds = [];
	var nums = scopes.jobs.countsBCandID;
	var createNumberIdfiles2 = (orphanIdfileList.length >= nums.idfileAdd) ? 0 : nums.idfileAdd - orphanIdfileList.length;
	///origQuant = (summaryRec) ? createNumberIdfiles2:1;//summary record processing
	//if (summaryRec){
		
	//}
	while (createNumberIdfiles2 > 0){
		// get free barcode
		var bcCode = 'FFFFFFFF-0000-0000-0000-DDDDDDDDDDDD';
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
		if (false && application.isInDeveloper()){application.output('----create quant '+createQuant+' item count '+nums.inItemCnt+' summQuant '+summQuant);}
		var newIdfileRec = createIdfileRecord(uniquePm,pcmkId,idSequence,idLot,bcCode,createQuant,nums.inItemCnt,summQuant,record.remarks);
		//var guid = getValidGuidMajMin(record.guid_hideindex);
		//newIdfileRec.guid_major = guid.major;
		//newIdfileRec.guid_minor = guid.minor;
		//newIdfileRecs[newIdfileRec.idfile_id] = newIdfileRec;
		newIdfileIds.push(newIdfileRec.idfile_id);
		//nums.bcIdfiles[barCode].push(newIdfileId);
		nums.dbIdfiles.push(newIdfileRec.idfile_id);
		orphanIdfileList.push(newIdfileRec.idfile_id);
		idfilePool.push(newIdfileRec);
		createNumberIdfiles2 -= 1;//was createQuant, but that is only copied to the idfile, not creating idfiles, BUT summarized items are set otherwise
	}
	if (application.isInDeveloper()){application.output('added idfiles !!! '+nums.idfileAdd)}//DEBUG
	return orphanIdfileList;
}
/**
 *
 * @properties={typeid:24,uuid:"9E3C7B35-7F1C-4084-95CA-8E3E2481780C"}
 */
function deleteBCIdfiles(orphanIdfileList){
	var nums = scopes.jobs.countsBCandID;
	var deleteNumberIdfiles = (orphanIdfileList.length >= nums.idfileDel) ? 0 : nums.idfileDel - orphanIdfileList.length;
	var index7;
	for (index7 = nums.bcCodes.length-1;index7 >= 0;index7--){//start at end of allocated barcodes
		var barId7 = nums.bcCodes[index7];//.id_serial_number_id;
		/** @type {Array} */
		var barId7list = nums.bcIdfiles[barId7];
		while (barId7list.length > nums.inLabelQntEa && deleteNumberIdfiles != 0){ // remove orphans from each barcode to barcode max quant
			orphanIdfileList.push(barId7list.pop());
			deleteNumberIdfiles--;
		}
		if (deleteNumberIdfiles == 0){break}
	} // Now at max idfiles, but barcodes not optimal, some may be at max, but last may have more than idfile count
	for (index7 = nums.bcCodes.length-1;index7 >= 0 ;index7--){
		barId7 = nums.bcCodes[index7];
		barId7list = nums.bcIdfiles[barId7];
		while (deleteNumberIdfiles != 0){ 
			orphanIdfileList.push(barId7list.pop());
			deleteNumberIdfiles--;
		}
		if (deleteNumberIdfiles == 0){break}
	} // remove orphans from end barcodes to achieve import quantity
	if (DEBUG && DEBUG == 1 && application.isInDeveloper()){application.output('deleted idfiles '+nums.idfileDel);}
	return orphanIdfileList;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"9FE26F4D-B518-403F-A0DF-866FE3F8BA95"}
 */
function commitTransactions(commit){
	if (createdRecords > commitRecAt || commit){
		var timeIn = new Date().getTime();
		createdRecords = 0;
		if (databaseManager.saveData()){
			databaseManager.commitTransaction();
			databaseManager.startTransaction();
			var thisDur = timeIn-commitStart;
			if (thisDur-commitLastDur > 0){
				commitRecAt--;
			} else {
				commitRecAt++;
			}
			commitLastDur = thisDur;
			commitStart = timeIn;
		}
		//application.output("--------------- committing at "+commitRecAt);
	}
}
/**
 * @param topForm {String}
 *
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"67E3FDF5-9495-4930-9A25-6907FAF84465"}
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
 * @properties={typeid:24,uuid:"AC9A3946-3CA4-4255-963C-5DEB75B1EBB0"}
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
 * @properties={typeid:24,uuid:"18F0C348-C9F9-4218-9C6C-27E3E691B4B2"}
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
 * @properties={typeid:24,uuid:"BEFE27B4-C706-48BC-A9E9-75B5C8769B4C"}
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
 * @properties={typeid:24,uuid:"C4BDE2B8-5F6B-4B99-92A4-B417B214F02D"}
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
 * @properties={typeid:24,uuid:"7A6F6902-D0D0-4476-BE5C-3C3949B117E8"}
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
 * @properties={typeid:24,uuid:"29B21117-D422-4E0D-9CC3-21292042A314"}
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
 * @properties={typeid:24,uuid:"9E665698-E993-4BCC-9187-92901E711FDE"}
 */
function viewBTableSQLSummary(criteria,formName){
	var dsName = "dsSQL";
	var count = 1;
	var newDsName = dsName;
	while (databaseManager.dataSourceExists("mem:PM"+newDsName)){
		warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
		this[newDsName] = -1;
		newDsName = dsName+count;
		count++;
	}

	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	var queryPM = queryAssembly(criteria,formName,"piecemark");
	var pmDS = databaseManager.createDataSourceByQuery('PM'+newDsName,queryPM,-1);
	var pmFS = databaseManager.getFoundSet(pmDS);
	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	pmFS.loadAllRecords();
	//var tableFilters = databaseManager.getTableFilterParams('stsservoy');//#task07
	var index = 1; var rec22 = null;
	while (rec22 = pmFS.getRecord(index+1)){
		warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
		index = pmFS.getSize();
	}
	/** while (index < pmFS.getSize()){
		warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
		index = pmFS.getSize();
		pmFS.getRecord(index);
		index++;
	} */
	var pmSize = pmFS.getSize();
	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	var querySM = queryAssembly(criteria,formName,"summarized");
	var smDS = databaseManager.createDataSourceByQuery('SM'+newDsName,querySM,-1);
	var smFS = databaseManager.getFoundSet(smDS);
	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	smFS.loadAllRecords();

	var jobDATA = {
		weight : 0,
		weight_lbs : 0,
		//pcmks : pmFS.getSize()*1+smFS.getSize()*1,
		pcmks : pmSize,
		idfiles : 0,
		idnumbers : 0
	}

	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	var query = queryAssembly(criteria,formName,'piecemark');
	var stDS = databaseManager.createDataSourceByQuery('ST'+newDsName,query,-1);
	var stFS = databaseManager.getFoundSet(stDS);
	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	stFS.loadAllRecords();
	//if (application.isInDeveloper()){application.output('matching records count '+fsST.getSize())}
	//if (application.isInDeveloper()){
	//	for (index = 1;index <= stFS.getSize();index++){application.output(stFS.getRecord(index))}
	//}

	index = 1;
	while (index <= stFS.getSize()){
		warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
		/** @type {JSRecord} */
		rec = stFS.getRecord(index);
		jobDATA.idfiles = jobDATA.idfiles*1 + rec.total_marks;
		if (rec.piecemark == rec.parent_piecemark){
			jobDATA.weight = jobDATA.weight*1 + rec.item_weight*rec.item_quantity;
			jobDATA.weight_lbs = jobDATA.weight_lbs*1 + rec.item_weight_lbs * rec.item_quantity;
		}
		
		index++;
	}
		
	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	var snQuery = queryAssembly(criteria,formName,'idnumbers');
	var snDS = databaseManager.createDataSourceByQuery('SN'+newDsName,snQuery,-1);
	var snFS = databaseManager.getFoundSet(snDS);
	warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
	snFS.loadAllRecords();
	index = 1;
	while (index < snFS.getSize()){
		warningsMessage('sts.txt.collecting.info',false);//-----------------------------------//
		index = snFS.getSize();
		snFS.getRecord(index);
		index++;
	}
	jobDATA.idnumbers = snFS.getSize();

	//var instance = globals.getInstanceForm(null);
	
	if (formName.search(/_[0-9]+$/) != -1){
		var formSplit = formName.split("_");
		var instance = "_"+formSplit[formSplit.length-1];
	}
	if (!instance){instance = '';}

	var currForm = formName.split("_")[0]+"_criteria"+instance;

	if (application.isInDeveloper()){
		for (var item in jobDATA){
			application.output('item '+item+': '+jobDATA[item]);
		}
		application.output('current form is '+currForm)
	}

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
 * @properties={typeid:24,uuid:"97BA3417-4A95-4E1E-B397-FC1ADE1C15E7"}
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
 * @param {String} subquery
 * subquery can be summarized, piecemark, idnumbers, stations, browse (general)
 * 
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"1B0D5B7E-3856-43D8-A44A-18D0F99AFEFC"}
 */
function queryAssembly(criteria,formName,subquery){
	//application.output('subquery command is '+subquery);
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
    if (subquery == "browse2"){
    	subquery = "browse";
    	//return queryAssembly2(criteria,formName,subquery);
    }
	if (application.isInDeveloper()){application.output('QAssemb '+formName+' get deleted '+getDeleted)}
	// Get transactions subquery
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var trans = databaseManager.createSelect('db:/stsservoy/sheets');
	trans.where.add(trans.columns.delete_flag.isNull);
	trans.where.add(trans.columns.job_id.eq(jobId));
	trans.where.add(trans.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	if (criteria.sheetnuma && criteria.sheetnuma.length > 0){
		trans.where.add(trans.columns.sheet_number.isin(criteria.sheetnuma));
	}
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var trpm = trans.joins.add('db:/stsservoy/piecemarks');
	trpm.on.add(trans.columns.sheet_id.eq(trpm.columns.sheet_id));
	trans.result.add(trpm.columns.piecemark_id);
	trpm.root.where.add(trpm.columns.delete_flag.isNull);
	trpm.root.where.add(trpm.columns.tenant_uuid.eq(globals.session.tenant_uuid));
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
	var trSd = trans.joins.add('db:/stsservoy/transactions',JSRelation.LEFT_OUTER_JOIN);
	trSd.on.add(trIdf.columns.idfile_id.eq(trSd.columns.idfile_id));
	trSd.root.where.add(trSd.root.or
		.add(trSd.columns.delete_flag.eq(10))
		.add(trSd.columns.delete_flag.isNull)
		);
	trSd.root.where.add(trSd.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	trans.result.distinct = true;
	trans.result.add(trSd.columns.status_description_id);
	
	// Get unique idfile subquery -------------------------------------------------------------------
	if (subquery != 'summary'){
		/** @type {QBSelect<db:/stsservoy/sheets>} */
		var uIdfile = databaseManager.createSelect('db:/stsservoy/sheets');
		uIdfile.where.add(uIdfile.columns.delete_flag.isNull);
		uIdfile.where.add(uIdfile.columns.job_id.eq(jobId));
		uIdfile.where.add(uIdfile.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		if (criteria.sheetnuma && criteria.sheetnuma.length > 0){
			uIdfile.where.add(uIdfile.columns.sheet_number.isin(criteria.sheetnuma));
		}
		/** @type {QBJoin<db:/stsservoy/piecemarks>} */
		var uIdpm = uIdfile.joins.add('db:/stsservoy/piecemarks');
		uIdpm.on.add(uIdfile.columns.sheet_id.eq(uIdpm.columns.sheet_id));
		uIdpm.root.where.add(uIdpm.columns.delete_flag.isNull);
		uIdpm.root.where.add(uIdpm.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		/** @type {QBJoin<db:/stsservoy/idfiles>} */
		var uIdIdfile = uIdfile.joins.add('db:/stsservoy/idfiles');
		uIdIdfile.on.add(uIdIdfile.columns.piecemark_id.eq(uIdpm.columns.piecemark_id));
		if (getDeleted){
			uIdIdfile.root.where.add(uIdIdfile.columns.delete_flag.eq(99));		
		} else {
			uIdIdfile.root.where.add(uIdIdfile.columns.delete_flag.isNull);		
		}
		uIdIdfile.root.where.add(uIdIdfile.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		/** @type {QBJoin<db:/stsservoy/transactions>} */
		var uIdTrans = uIdfile.joins.add('db:/stsservoy/transactions');
		uIdTrans.on.add(uIdTrans.columns.idfile_id.eq(uIdIdfile.columns.idfile_id));
		uIdTrans.root.where.add(uIdTrans.root.or
				.add(uIdTrans.columns.delete_flag.eq(10))
				.add(uIdTrans.columns.delete_flag.isNull)
			);
		uIdTrans.root.where.add(uIdTrans.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		if (criteria.fabshopa && criteria.fabshopa.length > 0){
			uIdTrans.root.where.add(uIdTrans.columns.status_description_id.isin(criteria.fabshopa));
		}
		uIdfile.result.distinct = true;
		uIdfile.groupBy.add(uIdIdfile.columns.idfile_id);
		uIdfile.result.add(uIdIdfile.columns.idfile_id);
	}
	// Get unique idfile subquery +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
	
	// Get unique piecemarks subquery
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var upcmk = databaseManager.createSelect('db:/stsservoy/sheets');
	upcmk.result.add(upcmk.columns.sheet_id);
	upcmk.where.add(upcmk.columns.delete_flag.isNull);		
	upcmk.where.add(upcmk.columns.job_id.eq(jobId));
	upcmk.where.add(upcmk.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	if (criteria.sheetnuma && criteria.sheetnuma.length > 0){
		upcmk.where.add(upcmk.columns.sheet_number.isin(criteria.sheetnuma));
	}
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var upmm = upcmk.joins.add('db:/stsservoy/piecemarks');
	upmm.on.add(upcmk.columns.sheet_id.eq(upmm.columns.sheet_id));
	upcmk.root.where.add(upmm.root.columns.delete_flag.isNull);
	upcmk.root.where.add(upmm.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	if (criteria.minors != null){
		if (criteria.minors == 0){
			upcmk.root.where.add(upmm.columns.piecemark.eq(upmm.columns.parent_piecemark));
		}
	}
	upcmk.root.result.distinct = true;
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
	/** @type {QBJoin<db:/stsservoy/jobs>} */
	var stj = st.joins.add('db:/stsservoy/jobs');
	stj.on.add(st.columns.job_id.eq(stj.columns.job_id));
	
	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/associations>} */
		var stji = stj.joins.add('db:/stsservoy/associations');
		stji.on.add(stj.columns.association_id.eq(stji.columns.association_uuid));
	}
	
	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/sheet_bom>} */
		var shbom = st.joins.add('db:/stsservoy/sheet_bom');
		shbom.on.add(st.columns.sheet_id.eq(shbom.columns.sheet_id));
		var tableSB = databaseManager.getTable('stsservoy','sheet_bom');
		var tableCols = tableSB.getColumnNames();
		for (var idx = 0;idx < tableCols.length;idx++){
			var colName = tableCols[idx];
			if (colName.search('bom_') != 0){
				st.result.add(shbom.columns[colName],'bom_'+colName);
			}
		}
		/** @type {QBJoin<db:/stsservoy/end_conditions>} */
		var endCon = shbom.joins.add('db:/stsservoy/end_conditions');
		endCon.on.add(shbom.columns.end_condition_id.eq(endCon.columns.end_condition_id));
		st.result.add(endCon.columns.end_prep,'bom_end_condition');//213 BOMENDPREP
	}
	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/customers>} */
		var jship = stj.joins.add('db:/stsservoy/customers');
		jship.on.add(stj.columns.ship_to.eq(jship.columns.customer_id));
		st.result.add(jship.columns.name,'barcode_customer_name');//3 BCCUST printer.js
		st.result.add(jship.columns.customer_number,'barcode_customer_number');//23 CUSTNUM printer.js
	}
	
	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/customers>} */
		var jbcformat = stj.joins.add('db:/stsservoy/customers');
		jbcformat.on.add(stj.columns.barcode_form.eq(jbcformat.columns.customer_id));
		st.result.add(jbcformat.columns.name,'barcode_format_customer_name');//52 JOLINE1STR printer.js
		st.result.add(jbcformat.columns.barcode_include_prefix,'bc_include_prefix');//5 BCINCLDPFX printer.js
		st.result.add(jbcformat.columns.barcode_job_start,'bc_job_start');//6 BCJOBSTART printer.js
		st.result.add(jbcformat.columns.barcode_prefix,'bc_prefix');//7 BCPREFIX printer.js
		st.result.add(jbcformat.columns.customer_number,'barcode_format_customer_number');//4 BCFORM printer.js
		
	}
	
	if (subquery == 'browse'){
		/** @type {QBSelect<db:/stsservoy/customers>} */
		var jcust = stj.joins.add('db:/stsservoy/customers');
		jcust.on.add(stj.columns.customer_id.eq(jcust.columns.customer_id));
		st.result.add(jcust.columns.fax,'job_customer_fax');//15 CUSFAX printer.js
		st.result.add(jcust.columns.representative,'job_customer_rep');//16 CUSFIRST printer.js
		st.result.add(jcust.columns.name,'job_customer_name');//19 CUSNAME printer.js
		st.result.add(jcust.columns.phone,'job_customer_phone');//20 CUSPHONE printer.js
		st.result.add(jcust.columns.customer_number,'job_customer_number');//23 CUSTNUMB printer.js
		st.result.add(jcust.columns.lsotoload,'job_so_to_load');//130 LSOTOLOAD printer.js
	}
	
	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/addresses>} */
		var jcustAddr = jcust.joins.add('db:/stsservoy/addresses');
		jcustAddr.on.add(jcust.columns.customer_id.eq(jcustAddr.columns.customer_id));
		st.result.add(jcustAddr.columns.city,'customer_city');//14 CUSCITY printer.js
		st.result.add(jcustAddr.columns.state,'customer_state');//21 CUSSTATE printer.js
		st.result.add(jcustAddr.columns.line1,'cust_addr_line1');//22 CUSSTREET printer.js
		st.result.add(jcustAddr.columns.zip_postal_code,'cust_zip_code');//26 CUSZIP printer.js
	}
	
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var pmm = st.joins.add('db:/stsservoy/piecemarks');
	pmm.on.add(st.columns.sheet_id.eq(pmm.columns.sheet_id));
	if (criteria.minors != null){
		if (criteria.minors == 0){
			pmm.root.where.add(pmm.columns.piecemark.eq(pmm.columns.parent_piecemark));
		}
	}
	if (criteria.piecemarka && criteria.piecemarka.length == 1){
		st.where.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"));
	} else if (criteria.piecemarka && criteria.piecemarka.length > 1){
		st.where.add(st.or
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
			.add(pmm.columns.parent_piecemark.like("%"+criteria.piecemarka.pop()+"%"))
		)
	} // overkill, but satisfies n-1 approach for search criteria

	st.where.add(pmm.columns.delete_flag.isNull);
	
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

	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var id1 = pmm.joins.add('db:/stsservoy/idfiles');
	id1.on.add(pmm.columns.piecemark_id.eq(id1.columns.piecemark_id));
	if (subquery == 'browse'){//if (subquery != 'summarized' && subquery != 'stations'){
		id1.root.result.distinct = true;
		id1.root.groupBy.add(id1.columns.idfile_id);
	}
	if (getDeleted){
		id1.root.where.add(id1.columns.delete_flag.eq(99));// deleted idfiles still show, fix
	} else {
		id1.root.where.add(id1.columns.delete_flag.isNull);
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
	if (criteria.loadnuma && criteria.loadnuma.length > 0){
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
	
	if (false && subquery == 'browse'){ // will never get parent  piecemark from just the piecemark of the parent, needs to be during import
		/**
		 * find idfile parent id_serial_number
		 * idfile_id -> piecemark_id -> parent_piecemark -> piecemark_id -> idfile_id -> id_serial_number_id -> id_serial_number
		 * get parent_piecemark piecemark -> get parent_piecemark_id piecemark -> get idfile_id -> get id_serial_number_id -> get parent id_serial_number
		 */
		/** @type {QBJoin<db:/stsservoy/piecemarks>} * /
		var pId = id1.joins.add('db:/stsservoy/piecemarks');
		pId.on.add(id1.columns.piecemark_id.eq(pId.columns.piecemark_id));
		pId.root.result.distinct = true;
		pId.root.groupBy.add(pId.columns.piecemark_id);
		/** @type {QBJoin<db:/stsservoy/piecemarks>} * /
		var pId2 = pId.joins.add('db:/stsservoy/piecemarks');
		pId2.on.add(pId.columns.parent_piecemark.eq(pId2.columns.piecemark));
		pId2.root.where.add(pId2.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		pId2.root.where.add(pId2.columns.sheet_id.eq(pId.columns.sheet_id));
		pId2.root.result.distinct = true;
		pId2.root.groupBy.add(pId2.columns.piecemark_id);
		pId2.root.result.add(pId2.columns.piecemark_id.max);
		/** @type {QBJoin<db:/stsservoy/idfiles>} * /
		var pIf = pId2.joins.add('db:/stsservoy/idfiles');
		pIf.on.add(pId2.columns.piecemark_id.eq(pIf.columns.piecemark_id));
		pIf.root.result.distinct = true;
		pIf.root.groupBy.add(pIf.columns.id_serial_number_id); 
		/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} * /
		var pIs = id1.joins.add('db:/stsservoy/id_serial_numbers',JSRelation.RIGHT_OUTER_JOIN);
		pIs.on.add(id1.columns.id_serial_number_id.eq(pIs.columns.id_serial_number_id));
		pIs.root.result.distinct = true;
		pIs.root.groupBy.add(pIs.columns.id_serial_number);
		pIs.root.result.add(pIs.columns.id_serial_number); */
	}
	// Finish finding parent piecemark

	if (subquery == 'browse'){//-------------------------------------------------------------------------------
		// TEST PIECEMARK ID COLLECTION
		/** @type {QBSelect<db:/stsservoy/sheets>} */
		var sh3 = databaseManager.createSelect('db:/stsservoy/sheets');
		sh3.where.add(sh3.columns.job_id.eq(jobId));
		sh3.where.add(sh3.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		sh3.where.add(sh3.columns.delete_flag.isNull);
		/** @type {QBJoin<db:/stsservoy/piecemarks>} */
		var pm3 = sh3.joins.add('db:/stsservoy/piecemarks'); 
		pm3.on.add(sh3.columns.sheet_id.eq(pm3.columns.sheet_id));
		pm3.root.where.add(pm3.columns.delete_flag.isNull);
		pm3.root.where.add(pm3.columns.parent_piecemark.eq(pm3.columns.piecemark));
		sh3.result.add(pm3.columns.piecemark_id);
		sh3.sort.add(pm3.columns.piecemark_id);
		//var pcmkList = databaseManager.getDataSetByQuery(sh3,-1);
		
		//var colNum = pcmkList.getColumnNames().indexOf('piecemark_id')+1
		//var pcmkArray = pcmkList.getColumnAsArray(colNum);
		//if (application.isInDeveloper()){application.output('pcmkArray '+pcmkArray.length+' ' +pcmkList.getMaxRowIndex()+' '+ pcmkArray);}
		// TEST PIECEMARK ID COLLECTION
		/** @type {QBJoin<db:/stsservoy/piecemarks>} */
		var pm2 = pmm.joins.add('db:/stsservoy/piecemarks');
		pm2.on.add(pmm.columns.parent_piecemark.eq(pm2.columns.piecemark));
		//pm2.root.where.add(pm2.columns.piecemark_id.isin(pcmkArray));
		pm2.root.where.add(pm2.columns.piecemark_id.isin(sh3));
		pm2.root.where.add(pm2.columns.delete_flag.isNull);

		/** @type {QBJoin<db:/stsservoy/idfiles>} * /
		var id2 = pm2.joins.add('db:/stsservoy/idfiles');
		id2.on.add(pm2.columns.piecemark_id.eq(id2.columns.piecemark_id));
		if (getDeleted){
			id2.root.where.add(id2.columns.delete_flag.eq(99));
		} else {
			id2.root.where.add(id2.columns.delete_flag.isNull);
		} */
		//id2.root.result.distinct = true;
		//id2.root.groupBy.add(id2.columns.idfile_id);
		
		// Get count of id_serial_number_id without the extra group_by settings for all st outputs
		/** @type {QBJoin<db:/stsservoy/idfiles>} * /
		var id3 = id1.joins.add('db:/stsservoy/idfiles');
		id3.on.add(id3.columns.idfile_id.eq(id1.columns.idfile_id));
		if (getDeleted){
			id3.root.where.add(id3.columns.delete_flag.eq(99));
		} else {
			id3.root.where.add(id3.columns.delete_flag.isNull);
		}
		id3.root.groupBy.add(id3.columns.idfile_id); */
		
		/** @type {QBJoin<db:/stsservoy/idfiles>} * /
		var id4 = id3.joins.add('db:/stsservoy/idfiles');
		id4.on.add(id4.columns.idfile_id.eq(id3.columns.idfile_id));
		id4.root.result.add(id4.columns.id_serial_number_id);
		id4.root.result.distinct = true;
		id4.root.groupBy.add(id4.columns.idfile_id); */

		/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} * /
		var sn2 = id2.joins.add('db:/stsservoy/id_serial_numbers');
		sn2.on.add(id2.columns.id_serial_number_id.eq(sn2.columns.id_serial_number_id)); */
		//st.result.add(sn2.columns.id_serial_number.max,'bc_parent_id_serial_number');//207 PARENTID printer.js
	}
	
	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/loads>} */
		var loads = id1.joins.add('db:/stsservoy/loads');
		loads.on.add(id1.columns.ship_load_id.eq(loads.columns.load_id));
		st.result.add(loads.columns.bill_of_lading_out,'ship_bol_out');//9 BOLOUT printer.js
		st.result.add(loads.columns.carrier_number,'ship_carrier_number');//10 CARRNUM  printer.js
		st.result.add(loads.columns.load_comment,'ship_load_comment');//11 COMMENTS printer.js
		st.result.add(loads.columns.sent_engineer,'ship_sent_engineer');//30 ENGXTIME printer.js
		st.result.add(loads.columns.fabricator_invoice,'ship_fabricator_invoiced');//31 FABINVOICE printer.js
		st.result.add(loads.columns.sent_fabrication,'ship_sent_fabricator');//33 FABXTIME printer.js
		st.result.add(loads.columns.sent_fireproofer,'ship_sent_fireproofer');//34 FIREXTIME printer.js
		st.result.add(loads.columns.sent_galvinizer,'ship_sent_galvinizer');//35 GALVXTIME printer.js
		st.result.add(loads.columns.invoice,'ship_load_invoice');//42 INVOICE printer.js
		st.result.add(loads.columns.load_number,'ship_load_number');//79 LOADNUM printer.js
		st.result.add(loads.columns.care_of,'ship_load_care_of');//80 LODCAREOF printer.js
		st.result.add(loads.columns.load_po,'ship_load_po');//81 LODPO printer.js
		st.result.add(loads.columns.load_release,'ship_load_release');//82 LODRELEASE printer.js
		st.result.add(loads.columns.ship_date,'ship_load_date');//107 SHIPLOAD printer.js
		st.result.add(loads.columns.ship_date,'ship_load_time');//109 SHIPTIME printer.js
		st.result.add(loads.columns.trailer_information,'ship_load_trailer_info');//111 TRAILINFO printer.js
		st.result.add(loads.columns.shipped_weight,'ship_load_shipped_weight');//152 SHIPWT printer.js
		st.result.add(loads.columns.total_weight,'ship_load_total_weight');//153 TOTALWT printer.js
		
	}

	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/customers>} */
		var loadsshipto = loads.joins.add('db:/stsservoy/customers');
		loadsshipto.on.add(loads.columns.ship_to.eq(loadsshipto.columns.customer_number));
		st.result.add(loadsshipto.columns.customer_number,'ship_customer_number');//83 LODSHIPTO
	}
		
	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/loads>} */
		var loadsrcv = id1.joins.add('db:/stsservoy/loads');
		loadsrcv.on.add(id1.columns.received_load_id.eq(loads.columns.load_id));
		st.result.add(loadsrcv.columns.load_number,'recv_load_number');//99 RECVLOAD printer.js
		st.result.add(loadsrcv.columns.receipt_date,'recv_load_date');//100 RECVTIME printer.js
		st.result.add(loadsrcv.columns.receiving_weight,'recv_load_receiving_wt');//149 RECVWT printer.js
	}
	
	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/heats>} */
		var heats = id1.joins.add('db:/stsservoy/heats');
		heats.on.add(id1.columns.heat_id.eq(heats.columns.heat_id));
		st.result.add(heats.columns.heat_number);//37 HEAT
	}

	if (subquery == 'browse'){
		/** @type {QBJoin<db:/stsservoy/status_description>} */
		var stat2 = id1.joins.add('db:/stsservoy/status_description');
		stat2.on.add(id1.columns.status_description_id.eq(stat2.columns.status_description_id));
		/** @type {QBJoin<db:/stsservoy/associations>} */
		var assoc = stat2.joins.add('db:/stsservoy/associations');
		assoc.on.add(stat2.columns.association_id.eq(assoc.columns.association_uuid));
		st.result.add(assoc.columns.association_name,'pcmk_fab_shop');//32 FABSHOP
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
	
	/** @type {QBJoin<db:/stsservoy/lots>} */
	var lots = sq1.joins.add('db:/stsservoy/lots');
	lots.on.add(sq1.columns.sequence_id.eq(lots.columns.lot_id));
	//if (subquery == 'browse'){
	//	st.result.add(lots.columns.lot);//84 LOT printer.js
	//}
	
	if (subquery == "browse"){
		// get idfile list that is the first of all idserialnumbers 
		/** @type {QBSelect<db:/stsservoy/sheets>} */
		var sbs = databaseManager.createSelect('db:/stsservoy/sheets');
		sbs.where.add(sbs.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		sbs.where.add(sbs.columns.delete_flag.isNull);
		sbs.where.add(sbs.columns.job_id.eq(jobId));
		if (criteria.sheetnuma && criteria.sheetnuma.length > 0){
			sbs.where.add(sbs.columns.sheet_number.isin(criteria.sheetnuma));
		}
		

		/** @type {QBJoin<db:/stsservoy/piecemarks>} */
		var sbp = sbs.joins.add('db:/stsservoy/piecemarks',JSRelation.RIGHT_OUTER_JOIN);
		sbp.on.add(sbs.columns.sheet_id.eq(sbp.columns.sheet_id));
		
		/** @type {QBJoin<db:/stsservoy/routings>} */
		var route = pmm.joins.add('db:/stsservoy/routings');
		route.on.add(pmm.columns.e_route_code_id.eq(route.columns.routing_id));
		//st.result.add(route.columns.route_code,'piecemark_route_code');//103 ROUTECODE printer.js
		
		/** @type {QBJoin<db:/stsservoy/idfiles>} */
		var sbi = sbp.joins.add('db:/stsservoy/idfiles');//CHECK sbp was sbs
		sbi.on.add(sbp.columns.piecemark_id.eq(sbi.columns.piecemark_id));
		if (getDeleted){
			sbi.root.where.add(sbi.columns.delete_flag.eq(99));
		} else {
			sbi.root.where.add(sbi.columns.delete_flag.isNull);			
		}
		sbi.root.result.add(sbi.columns.idfile_id.max);
		
		/** @type {QBJoin<db:/stsservoy/employee>} */
		var emp = id1.joins.add('db:/stsservoy/employee');
		emp.on.add(id1.columns.original_employee.eq(emp.columns.employee_number));
		st.result.add(emp.columns.employee_number,'job_employee_number');//86 ORIGEMPL printer.js

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
		idx = 1; 
		/** @type {JSRecord<{max:String}>} */
		var rec = null;
		while (rec = fss2.getRecord(idx++)){
			markedIds.push(application.getUUID(rec.max));
		}
		null;
		// get idfile list that is the first of all idserialnumbers END
		id1.root.where.add(id1.columns.idfile_id.isin(markedIds));
		//var stShown = [];
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
		var tables = ['jobs','id_serial_numbers','piecemarks','status_description','idfiles','sheets','sequences','lots','routings','sheet_bom','associations'];
		for (var itemDex = 0;itemDex < tables.length;itemDex++){
			var table = databaseManager.getTable('stsservoy',tables[itemDex]);
			var cols = table.getColumnNames(); var tableColAlt = ''; var shortTable = '';
			for (index = 0;index < cols.length;index++){
				//if (stShown.indexOf(cols[index]) == -1){
					switch (tables[itemDex]){
						case 'jobs' : var tableCol = stj.getColumn(cols[index]);shortTable = 'job_';break;
						case 'associations': tableCol = stji.getColumn(cols[index]);shortTable = 'pt_';break;
						case 'id_serial_numbers' : tableCol = sn1.getColumn(cols[index]);shortTable = 'bc_';break;
						case 'piecemarks' : tableCol = pmm.getColumn(cols[index]);shortTable = 'pm_';break;
						case 'status_description' : tableCol = stat1.getColumn(cols[index]);shortTable = 'st_';break;
						case 'idfiles' : tableCol = id1.getColumn(cols[index]);shortTable = 'if_';break;
						case 'sheets' : tableCol = st.getColumn(cols[index]);shortTable = 'sh_';break;
						case 'sequences' : tableCol = sq1.getColumn(cols[index]);shortTable = 'sq_';break;
						case 'lots' : tableCol = lots.getColumn(cols[index]);shortTable = 'lt_';break;
						case 'routings' : tableCol = route.getColumn(cols[index]);shortTable = 'rt_';break;
						case 'sheet_bom' : tableCol = shbom.getColumn(cols[index]);shortTable = 'bom_';break;
						case 'customers' : tableCol = loadsshipto.getColumn(cols[index]);shortTable = 'lds_';break;
						default: null;
					}
					if (cols[index].search(shortTable) != 0){
						tableColAlt = cols[index];
						tableColAlt = shortTable+tableColAlt;
						st.result.add(tableCol,tableColAlt);
						st.groupBy.add(tableCol);
						//if (application.isInDeveloper()){application.output('setting alt col as '+tableColAlt)}
					} else {
						st.result.add(tableCol);
						st.groupBy.add(tableCol);
						//if (application.isInDeveloper()){application.output('setting reg col as '+tableCol+' '+tables[itemDex])}
					}
					//stShown.push(cols[index]);
				//} else {
				//	if (application.isInDeveloper()){application.output('skipping column '+cols[index]+' '+tables[itemDex])}
				//}
			}
		}
		st.result.add(jship.columns.name,'barcode_customer_name');//3 BCCUST printer.js
		st.result.add(jship.columns.customer_number,'barcode_customer_number');//23 CUSTNUM printer.js
		st.result.add(jbcformat.columns.name,'barcode_format_customer_name');//52 JOLINE1STR printer.js 
		st.result.add(jbcformat.columns.barcode_include_prefix,'bc_include_prefix');//5 BCINCLDPFX printer.js
		st.result.add(jbcformat.columns.barcode_job_start,'bc_job_start');//6 BCJOBSTART printer.js
		st.result.add(jbcformat.columns.barcode_prefix,'bc_prefix');//7 BCPREFIX printer.js
		st.result.add(jbcformat.columns.customer_number,'barcode_format_customer_number');//4 BCFORM printer.js
		st.result.add(jcust.columns.fax,'job_customer_fax');//15 CUSFAX printer.js 'fax','representative','name','phone','customer_number','lsotoload'
		st.result.add(jcust.columns.representative,'job_customer_rep');//16 CUSFIRST printer.js
		st.result.add(jcust.columns.name,'job_customer_name');//19 CUSNAME printer.js
		st.result.add(jcust.columns.phone,'job_customer_phone');//20 CUSPHONE printer.js
		st.result.add(jcust.columns.customer_number,'job_customer_number');//23 CUSTNUMB printer.js
		st.result.add(jcust.columns.lsotoload,'job_so_to_load');//130 LSOTOLOAD printer.js
		st.result.add(jcustAddr.columns.city,'customer_city');//14 CUSCITY printer.js 'city','state','line1','zip_postal_code'
		st.result.add(jcustAddr.columns.state,'customer_state');//21 CUSSTATE printer.js
		st.result.add(jcustAddr.columns.line1,'cust_addr_line1');//22 CUSSTREET printer.js
		st.result.add(jcustAddr.columns.zip_postal_code,'cust_zip_code');//26 CUSZIP printer.js
		st.result.add(loads.columns.bill_of_lading_out,'ship_bol_out');//9 BOLOUT printer.js 'bill_of_lading_out','carrier_number','load_comment','sent_engineer','fabricator_invoice','
		st.result.add(loads.columns.carrier_number,'ship_carrier_number');//10 CARRNUM  printer.js sent_fabrication','sent_fireproofer','sent_galvinizer','invoice','load_number','care_of'
		st.result.add(loads.columns.load_comment,'ship_load_comment');//11 COMMENTS printer.js ,'load_po','load_release','ship_date','trailer_information','shipped_weight','total_weight'
		st.result.add(loads.columns.sent_engineer,'ship_sent_engineer');//30 ENGXTIME printer.js
		st.result.add(loads.columns.fabricator_invoice,'ship_fabricator_invoice');//31 FABINVOICE printer.js
		st.result.add(loads.columns.sent_fabrication,'ship_sent_fabricator');//33 FABXTIME printer.js
		st.result.add(loads.columns.sent_fireproofer,'ship_sent_fireproofer');//34 FIREXTIME printer.js
		st.result.add(loads.columns.sent_galvinizer,'ship_sent_galvinizer');//35 GALVXTIME printer.js
		st.result.add(loads.columns.invoice,'ship_load_invoice');//42 INVOICE printer.js
		st.result.add(loads.columns.load_number,'ship_load_number');//79 LOADNUM printer.js
		st.result.add(loads.columns.care_of,'ship_load_care_of');//80 LODCAREOF printer.js
		st.result.add(loads.columns.load_po,'ship_load_po');//81 LODPO printer.js
		st.result.add(loads.columns.load_release,'ship_load_release');//82 LODRELEASE printer.js
		st.result.add(loads.columns.ship_date,'ship_load_date');//107 SHIPLOAD printer.js
		st.result.add(loads.columns.ship_date,'ship_load_time');//109 SHIPTIME printer.js
		st.result.add(loads.columns.trailer_information,'ship_load_trailer_info');//111 TRAILINFO printer.js
		st.result.add(loads.columns.shipped_weight,'ship_load_shipped_weight');//152 SHIPWT printer.js
		st.result.add(loads.columns.total_weight,'ship_load_total_weight');//153 TOTALWT printer.js
		st.result.add(loadsshipto.columns.customer_number,'ship_customer_number');//83 LODSHIPTO
		st.result.add(loadsrcv.columns.load_number,'recv_load_number');//99 RECVLOAD printer.js
		st.result.add(loadsrcv.columns.receipt_date,'recv_load_date');//100 RECVTIME printer.js
		st.result.add(loadsrcv.columns.receiving_weight,'recv_load_receiving_wt');//149 RECVWT printer.js
		st.result.add(heats.columns.heat_number);//37 HEAT printer.js
		st.result.add(emp.columns.employee_number,'job_original_employee');//86 ORIGEMPL printer.js
		st.result.add(assoc.columns.association_name,'pcmk_fab_shop');//32 FABSHOP
		st.result.add(endCon.columns.end_prep,'bom_end_condition');//213 BOMENDPREP
		//st.result.add(sn2.columns.id_serial_number,'bc_parent_id_serial_number');//207 PARENTID

		//st.result.add(id3.columns.id_serial_number_id.count,'barcode_item_qty');//181 MINORQTY printer.js

		sbi.root.result.add(sbi.columns.idfile_id.max); 
		jship.root.groupBy.add(jship.columns.name);
		jship.root.groupBy.add(jship.columns.customer_number);
		cols = ['name','barcode_include_prefix','barcode_job_start','barcode_prefix','customer_number'];
		for (idx = 0;idx < cols.length;idx++){
			jbcformat.root.groupBy.add(jbcformat.getColumn(cols[idx]));
		}
		cols = ['fax','representative','name','phone','customer_number','lsotoload'];
		for (idx = 0;idx < cols.length;idx++){
			jcust.root.groupBy.add(jcust.getColumn(cols[idx]));
		}
		cols = ['city','state','line1','zip_postal_code'];
		for (idx = 0;idx < cols.length;idx++){
			jcustAddr.root.groupBy.add(jcustAddr.getColumn(cols[idx]));
		}
		cols = ['bill_of_lading_out','carrier_number','load_comment','sent_engineer','fabricator_invoice','sent_fabrication','sent_fireproofer','sent_galvinizer','invoice','load_number','care_of','load_po','load_release','ship_date','trailer_information','shipped_weight','total_weight'];
		for (idx = 0;idx < cols.length;idx++){
			loads.root.groupBy.add(loads.getColumn(cols[idx]));
		}
		loadsshipto.root.groupBy.add(loadsshipto.columns.customer_number);
		cols = ['load_number','receipt_date','receiving_weight'];
		for (idx = 0;idx < cols.length;idx++){
			loadsrcv.root.groupBy.add(loadsrcv.getColumn(cols[idx]));
		}
		heats.root.groupBy.add(heats.columns.heat_number);
		emp.root.groupBy.add(emp.columns.employee_number);
		assoc.root.groupBy.add(assoc.columns.association_name);
		endCon.root.groupBy.add(endCon.columns.end_prep);
		//sn2.root.groupBy.add(sn2.columns.id_serial_number);
		//id2.root.groupBy.add(id2.columns.id_serial_number_id);
		//id3.root.groupBy.add(id3.columns.id_serial_number_id);
		
		if (typeof lastForm === 'undefined'){var lastForm = null}
		if (lastForm && forms[lastForm] && forms[lastForm].printerName){
			var barPrinter = forms[lastForm].printerName;
			st.result.addValue(barPrinter,'barcode_printer_name');
		}
		var labelPath = scopes.prefs.reportpath;
		st.result.addValue(labelPath,"btw_file_path");
		
		if (criteria.sortby){
			/**
			 * i18n:sts.print.order.piecemark
			 i18n:sts.print.order.id.number
			 i18n:sts.print.order.drawing.number
			 i18n:sts.print.order.material
			 */
			switch (criteria.sortby){
			case i18n.getI18NMessage('sts.print.order.piecemark'):
				st.sort.add(pmm.columns.piecemark);
				break;
			case i18n.getI18NMessage('sts.print.order.id.number'):
				st.sort.add(sn1.columns.id_serial_number);
				break;
			case i18n.getI18NMessage('sts.print.order.drawing.number'):
				st.sort.add(st.columns.sheet_number);
				break;
			case i18n.getI18NMessage('sts.print.order.material'):
				st.sort.add(pmm.columns.material);
				break;
			default:
				st.sort.add(sn1.columns.id_serial_number);
			} 
		} else {
			st.sort.add(sn1.columns.id_serial_number);
		}
		//stShown = [];
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
		st.result.distinct;
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
    null;
	return st;
}
/**
 * @param query
 * @param formName
 *
 * 
 *
 * @properties={typeid:24,uuid:"685E3B10-7C72-4760-ABB2-BD59A98A37F6"}
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
 * @properties={typeid:24,uuid:"7139D601-FF2B-4E09-B640-0534E056B713"}
 */
function viewBTableToFormQB(criteria,formName){
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.collecting.info'),true);
	if (formName.search('summary_info') != -1){
		dsQuery = queryAssembly(criteria,formName,'stations');
	} else 	if (formName.search('combo') != -1){
		dsQuery = queryAssembly(criteria,formName,'browse2');
	} else if (formName.search('barcode') != -1){
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
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.collecting.info'),true);
	/** @type  {JSDataSet} */
	browseFS2[formName] = databaseManager.createDataSourceByQuery(newDsName,dsQuery,-1);
	dsQuerySave[formName] = dsQuery;
	//browseFS2[formName] = adjustBarcodeIdfileCount(browseFS2[formName]);
	//versionForm = globals.getInstanceForm(null);
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.collecting.info'),true);
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
 * @properties={typeid:24,uuid:"85A876B4-08AE-477E-80E4-8BDB4DECE219"}
 */
function viewBTableCreateForm2(formName,datasource){
	var matchReg = formName.match(scopes.globals.instanceReg);
	if (matchReg){versionForm = matchReg[1]}
	var formNameTable = formName+'_table';
	scopes.jobs.removeFormHist(formNameTable);
	
	//tableOrderingData = tablePrefsPreLoad(formName);
	var formFS = databaseManager.getFoundSet(datasource);
	if (application.isInDeveloper()){application.output('form query = '+databaseManager.getSQL(formFS))}
	formFS.loadRecords();
	viewBTableRemoveColumnsQB(formFS);//dsBrowse and browseFS
	var checkForm = solutionModel.newForm(formNameTable,datasource,'sts_one',false,500,600);
	var code = 'function onRecordSelection(event){scopes.jobs.onRecordSelectIdfile(event);scopes.jobs.setTableRowRange(event)}';
	var code2 = 'function onRender3(event){null;}';
	if (formName.search('barcode') != -1 || formName.search('print') != -1){
		code2 = 'function onRender3(event){scopes.printer.onRenderPrint(event);}';
		checkForm.onRender = checkForm.newMethod(code2);
	}
	if (formName.search('combo') != -1){
		checkForm.onRecordSelection = checkForm.newMethod(code);
		//checkForm.onRender = checkForm.newMethod(code2);
	}
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	checkForm.selectionMode = JSForm.SELECTION_MODE_MULTI;
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
		//if (application.isInDeveloper()){application.output('column barcode '+columnNames4[index])}
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
			last.onRightClick = checkForm.newMethod('function selectRange(event){scopes.jobs.setTableRowRange(event)}');//ticket #279
			//last.onAction = checkForm.newMethod('function selectRangeOnAction(event){scopes.jobs.setTableRowRange(event)}');//ticket #279
			last.onDataChange = checkForm.newMethod('function selectRangeOnAction(oldValue,newValue,event){application.output("E:"+(event.getModifiers() & JSEvent.MODIFIER_SHIFT));scopes.jobs.setTableRowRange(event)}');
			last.toolTipText = i18n.getI18NMessage('sts.txt.multi.select');
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
		var regexp = new RegExp(/(_[0-9]+)/);
		var regMatch = formName.match(regexp);
		if (regMatch){
			versionForm = regMatch[1];
		}
		var newFormName = 'loads_pcmk_combo'+versionForm;
		solutionModel.cloneForm(newFormName,solutionModel.getForm('loads_pcmk_combo'));
	}
	var status = false;
	if (forms[formName] && forms[formName].elements.tabless){
		forms[formName].elements.tabless.removeAllTabs();
		status = forms[formName].elements.tabless.addTab(formNameTable);
		//forms[formName].controller.loadAllRecords();
	}
	if (forms[formName] && forms[formName].elements.split && !status){
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
 * @properties={typeid:24,uuid:"1FB0E849-B968-48F8-A0C5-97E543BD1903"}
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
 * This assigns guids that are not yet in the system to imported piecemarks, represented as idfiles
 * 	major guid and minor guid are both represented
 * When performing subassembly or minor guid additions, the major guid is NOT represented, but is 
 *  present somewhere in the db.  True GUIDs are unique, so there can only be one represented within the db
 *  as a minor guid_minor.  Major guids are repeated in the guid_major field.
 *  
 * @param guidIndex
 *
 * 
 *
 * @properties={typeid:24,uuid:"55138F46-4E8B-4800-B90C-5F3697EFC453"}
 */
function getValidGuidMajMin(guidIndex){
	guidIndex = guidIndex*1;
	/** @type {Array} */
	var minorGUIDs = new Array(); // associative array, must iterate won't push/shift
	minorGUIDs = forms.kiss_option_import.importSubGuidList[guidIndex];
	/** @type {Array} */
	var majorGUIDs = new Array();
	if (forms.kiss_option_import.importMainGuidList[guidIndex].length > 0){
		majorGUIDs = forms.kiss_option_import.importMainGuidList[guidIndex];
	} else { // no Z record for the import, so recall major assembly guid of Y record
		for (var key in minorGUIDs){
			majorGUIDs.push(key);
		}
	}
	for (var index = 0;index < majorGUIDs.length;index++){
		var major = majorGUIDs.pop();
		for (var index2 = 0;index2 < minorGUIDs[major].length;index2++){
			var minor = minorGUIDs[major].pop();
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			var ids = databaseManager.createSelect('db:/stsservoy/idfiles');
			ids.result.add(ids.columns.idfile_id);
			ids.where.add(ids.columns.guid_major.eq(major));
			ids.where.add(ids.columns.guid_minor.eq(minor));
			var idFS = databaseManager.getFoundSet(ids);
			idFS.loadRecords();
			if (idFS.getSize() == 0) {
				return {major: major, minor: minor};
			}
		}
	}
	return {major: null,minor:null};
}
/**
 * @param foundset
 *
 * 
 *
 * @properties={typeid:24,uuid:"66ACFAE2-B325-43BA-8D1F-B402EC075119"}
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
 * @properties={typeid:24,uuid:"4AC83B74-8E66-43B7-B76E-FC7898E02B71"}
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
 * @properties={typeid:24,uuid:"2A6AF519-2D7E-4E87-8896-7C73BF14E0CB"}
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
 * @properties={typeid:24,uuid:"70F6C3F4-A0C1-45FC-B7C0-67EE4CE0A245"}
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
 * @properties={typeid:24,uuid:"37AD4A12-0DF8-48A5-8631-D2F44E1C22D3"}
 */
function recallIdfiles(){
	warningsYes();
	warningsMessage('Recalling idfiles information.');
	var purgeCodes = scopes.globals.purgeBarcodeRecords;
	if (purgeCodes.length == 0){return}
	//application.output('purgeBarcodeRecords has '+purgeCodes.length+' items '+purgeCodes);

	while (purgeCodes.length != 0){
		var tempRecall = [];var count = 200;
		while ((count-- != 0) && (purgeCodes.length != 0)){
			tempRecall.push(purgeCodes.pop());
		}

		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var p = databaseManager.createSelect('db:/stsservoy/idfiles');
		p.result.distinct = true;
		p.result.add(p.columns.id_serial_number_id);
		p.groupBy.add(p.columns.id_serial_number_id);
		p.where.add(p.columns.idfile_id.isin(tempRecall));
		var subQ = databaseManager.getDataSetByQuery(p,-1);
		var subArray = subQ.getColumnAsArray(1);
		//p.where.add(p.columns.idfile_id.isin(tempDeleteIdfiles));
		
		
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var i = databaseManager.createSelect('db:/stsservoy/idfiles');
		i.result.add(i.columns.idfile_id);
		i.result.distinct = true;
		i.where.add(i.columns.id_serial_number_id.isin(subArray));
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var resultII = databaseManager.getFoundSet(i);
		if (resultII.getSize() == 0){return}
		var markIdfiles = databaseManager.getFoundSetUpdater(resultII);
		markIdfiles.setColumn('delete_flag',null);
		markIdfiles.setColumn('deleted_date',null);
		var status = markIdfiles.performUpdate();
		if (application.isInDeveloper()){application.output('idfiles files updated to deleted 99 '+status)}

		
		
		
		/** @type {QBSelect<db:/stsservoy/idfiles>} * /
		var i =  databaseManager.createSelect("db:/stsservoy/idfiles");
		i.result.add(i.columns.idfile_id);
		i.result.add(i.columns.delete_flag);
		i.result.add(i.columns.deleted_date);
		i.where.add(i.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		i.where.add(i.columns.idfile_id.isin(tempRecall))
		i.where.add(i.columns.delete_flag.eq(99))
		var I = databaseManager.getFoundSet(i);
		var updateI = databaseManager.getFoundSetUpdater(I);
		updateI.setColumn('delete_flag',null);
		updateI.setColumn('deleted_date',null);
		updateI.performUpdate(); */
	}
	warningsX();
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"C9967225-9BA9-42B9-92DC-7E87A449657B"}
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
 * @properties={typeid:24,uuid:"BDBA6063-24EA-464B-832D-C59299A6A73D"}
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
 * @properties={typeid:24,uuid:"D002B8AA-C5A7-4841-A028-CA840B93961E"}
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
	/** @type {QBJoin<db:/stsservoy/associations>} */
	var ff = ee.joins.add('db:/stsservoy/associations');
	ff.on.add(ee.columns.association_uuid.eq(ff.columns.association_uuid));
	ee.result.add(ff.columns.association_name);
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
 * @properties={typeid:24,uuid:"C44FD6BA-3406-4F6E-BC14-8A5DF3DABCAA"}
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
 * @properties={typeid:24,uuid:"5087CA5E-86F6-4977-B615-763FED1F3A7B"}
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
 * @properties={typeid:24,uuid:"780D82BB-41C2-46DD-891A-301CCCE3E3F3"}
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
 * @properties={typeid:24,uuid:"72153421-C48D-488E-BE2B-AC50E79EB2E5"}
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
 * @properties={typeid:24,uuid:"1E45524A-71C7-4FC0-90E8-5736CC4690F6"}
 */
function readSheetBoms(jobID){
	//var seqNameList = scopes.jobs.jobSheets;
	dsSheetBomList = [];
	dsSheetBoms = null;
	dsSheetBomArray = [];
	dsSheetBomArrayRev = [];
	var sheetIdsList = [];
	//if (dsSheetBomArray.length == 0){return}
	for (var sheetNum in dsSheetArray){sheetIdsList.push(dsSheetArray[sheetNum])}

	/** @type {QBSelect<db:/stsservoy/sheet_bom>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheet_bom');
	q.result.add(q.columns.sheet_bom_id);
	q.result.add(q.columns.sheet_id);
	q.result.add(q.columns.item_number);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.sheet_id.isin(sheetIdsList));

	/** @type {JSDataSet} */
	dsSheetBoms = databaseManager.getDataSetByQuery(q,-1)
	var rows = dsSheetBoms.getMaxRowIndex();
	var shtBmId = ""; var shtBmNum = ""; var unique = "";
	for (var index = 1;index <= rows;index++){
		dsSheetBoms.rowIndex = index;
		shtBmId = dsSheetBoms.sheet_bom_id;
		shtBmNum = dsSheetBoms.item_number;
		var sheetId = dsSheetBoms.sheet_id;
		unique = sheetId+"_"+shtBmNum;
		if (dsSheetBomList.indexOf(unique) == -1){
			dsSheetBomList.push(unique);
		}
		dsSheetBomList[shtBmId] = index;
		dsSheetBomArray[unique] = shtBmId;
		dsSheetBomArrayRev[shtBmId] = unique;
	}
	if (application.isInDeveloper()){application.output("sheet boms")}
}
/**
 *
 * 
 *
 * @properties={typeid:24,uuid:"3DF12940-68A5-42C9-8769-59E229517D5C"}
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
 * @properties={typeid:24,uuid:"ED2ED268-F379-419F-AA1F-EE6AA0FCC464"}
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
 * @properties={typeid:24,uuid:"0F72CB13-BD95-42F2-A238-3A9FEEA1CE6F"}
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
 * @properties={typeid:24,uuid:"97B0BC00-CEFB-4EDE-BABF-09B083703C03"}
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
 * @properties={typeid:24,uuid:"63D3AC22-A15B-4734-8388-0C02AA959B58"}
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
 * @properties={typeid:24,uuid:"FD89310D-63B5-45ED-A0F5-3776BFD73A1B"}
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
 * @properties={typeid:24,uuid:"0A6CDC80-614B-457F-AF7E-908EAA911881"}
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
 * @properties={typeid:24,uuid:"F3DC9513-C13B-4392-8791-1C6716CB3C6B"}
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
 * @properties={typeid:24,uuid:"5AF5B5CB-6B7E-49E0-8840-627251C2B46F"}
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
 * @properties={typeid:24,uuid:"009D9363-AC02-4E40-BB39-6A08EC84C1FC"}
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
 * @properties={typeid:24,uuid:"4E2297F0-55FE-4215-9EA2-F2489D7FD4F6"}
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
/**
 * @properties={typeid:24,uuid:"5841CA35-09EE-486E-AAD0-BCE3BF2C86D7"}
 */
function createBCSubBarcodes(count){
	var serial = "0000000000";
	var year = new Date().getFullYear().toString().substring(2,4);
	/** @type {QBSelect<db:/stsservoy/last_id_serial>} */
	var q = databaseManager.createSelect('db:/stsservoy/last_id_serial');
	q.result.add(q.columns.last_id_serial_id);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.prefix.eq('EMBED'));
	var Q = databaseManager.getFoundSet(q);
	/** @type {JSFoundSet<db:/stsservoy/last_id_serial>} */
	var rec = null; var idx = 1;
	if (Q.getSize() == 0){
		idx = Q.newRecord();
		rec = Q.getRecord(idx);
		rec.prefix = "EMBED";
		rec.tenant_uuid = globals.session.tenant_uuid;
	} else {
		rec = Q.getRecord(1);
		serial = rec.serial;
	}
	while (count--){
		var newSerial = countUpNumbersNonOdo(serial);
		var serLength = newSerial.length;
		newSerial = newSerial.substring(serLength-10,serLength);
		serial = newSerial;
		orphanInternalBCList.push(year+''+serial);
	}
	rec.serial = serial;
	rec.edit_date = new Date();
	databaseManager.saveData(Q);
}
/**
 * @properties={typeid:24,uuid:"74888699-C131-4C09-98A2-8717890E2B90"}
 */
function bartenderPrintEmbed(){
	null;
	/** @type {JSFoundSet<db:/stsservoy/import_prefs>} */
	var latestJob = databaseManager.getFoundSet('db:/stsservoy/import_prefs');
	latestJob.loadRecords();
	latestJob.sort('editDate desc');
	var jobRec = latestJob.getRecord(1);
	var jobId = jobRec.job_id;
	
	var jobSheets = [];
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var s = databaseManager.createSelect('db:/stsservoy/sheets');
	s.result.add(s.columns.sheet_number);
	s.where.add(s.columns.job_id.eq(jobId));
	s.where.add(s.columns.delete_flag.isNull);
	s.where.add(s.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	/** @type {JSDataSet<db:/stsservoy/sheets>} */
	var S = databaseManager.getDataSetByQuery(s,-1);
	jobSheets = S.getColumnAsArray(1);
	/**for (var i = 1;i <= S.getMaxRowIndex();i++){
		S.rowIndex = i;
		var sheetNum = S.sheet_number.replace('_','');
		if (jobSheets.indexOf(sheetNum) == -1){
			jobSheets.push(sheetNum);
		}
	}*/
	
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var t = databaseManager.createSelect('db:/stsservoy/sheets');
	t.result.add(t.columns.sheet_id);
	t.result.distinct = true;
	t.groupBy.add(t.columns.sheet_id);
	t.where.add(t.columns.sheet_number.isin(jobSheets));
	t.where.add(t.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var T = databaseManager.getDataSetByQuery(t,-1);
	var sheetIds = T.getColumnAsArray(1);
	//for (var ii = 1;ii <= T.getMaxRowIndex();ii++){
	//	T.rowIndex = ii;
	//	if (sheetIds.indexOf(T.sheed_id)){sheetIds.push(T.sheet_id)}
		//sheetIds.push(application.getUUID(T.sheet_id));
	//}
	
	var columnsSeen = []
	var pcmkIds = [];
	var formName = 'import_table';
	var browseSet = forms[formName].foundset;
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var record = null; var line = ""; var idx = 1;
	while (record = browseSet.getRecord(idx++)){
		var pcmk = record.piecemark;
		var parent = record.parent_piecemark;
		if (pcmk != parent){continue}//not a printable piecemark in Embedded
		var grade = record.grade;
		var finish = record.finish;
		/** @type {QBSelect<db:/stsservoy/piecemarks>} */
		var q = databaseManager.createSelect('db:/stsservoy/piecemarks');
		q.result.add(q.columns.piecemark_id);
		q.result.distinct = true;
		q.groupBy.add(q.columns.piecemark_id);
		q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		q.where.add(q.or.add(q.columns.delete_flag.isNull).add(q.columns.delete_flag.not.eq(99)));
		q.where.add(q.columns.sheet_id.isin(sheetIds));
		q.where.add(q.columns.piecemark.eq(pcmk));
		q.where.add(q.columns.parent_piecemark.eq(parent));
		q.where.add(q.columns.grade.eq(grade));
		q.where.add(q.columns.finish.eq(finish));
		//var uniqPcmk = uniquePiecemark(record);
		var Q = databaseManager.getDataSetByQuery(q,-1);
		pcmkIds = Q.getColumnAsArray(1);
		//for (ii = 1;ii <= Q.getMaxRowIndex();ii++){
		//	Q.rowIndex = 1;
		//	if (pcmkIds.indexOf(Q.piecemark_id) == -1){pcmkIds.push(Q.piecemark_id)}
		//}
		//application.output('columns '+Q.getColumnAsArray(1));
	}
	// customers - jobs - sheets (jobid) - pcmk (sheetid) - idfiles (pcmkid)(idserialnumberid)(sequenceid) - id_serial_numbers
	var columns = databaseManager.getTable('db:/stsservoy/piecemarks').getColumnNames();
	
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var a = databaseManager.createSelect('db:/stsservoy/piecemarks');
	for (var ii = 0;ii < columns.length;ii++){
		a.result.add(a.getColumn(columns[ii]));
		columnsSeen.push(columns[ii]);
	}
	a.where.add(a.columns.piecemark_id.isin(pcmkIds));
	/** @type {QBJoin<db:/stsservoy/sheets>} */
	var b = a.joins.add('db:/stsservoy/sheets');
	b.on.add(b.columns.sheet_id.eq(a.columns.sheet_id));
	a.root.result.add(b.columns.sheet_number);
	columns = databaseManager.getTable('db:/stsservoy/idfiles').getColumnNames();
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var c = a.joins.add('db:/stsservoy/idfiles');
	c.on.add(c.columns.piecemark_id.eq(a.columns.piecemark_id));
	for (ii = 0;ii < columns.length;ii++){
		if (columnsSeen.indexOf(columns[ii]) != -1){continue}
		a.root.result.add(c.getColumn(columns[ii]));
		columnsSeen.push(columns[ii]);
	}
	/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} */
	var d = c.joins.add('db:/stsservoy/id_serial_numbers');
	//d.on.add(c.root.columns.id_serial_number_id.eq(d.root.columns.id_serial_number_id))
	d.on.add(d.columns.id_serial_number_id.eq(c.columns.id_serial_number_id));
	//a.root.result.add(d.columns.id_serial_number);
	columns = databaseManager.getTable('db:/stsservoy/id_serial_numbers').getColumnNames();
	for (ii = 0;ii < columns.length;ii++){
		if (columnsSeen.indexOf(columns[ii]) != -1){continue}
		a.root.result.add(d.getColumn(columns[ii]));
		columnsSeen.push(columns[ii]);
	}
	/** @type {QBJoin<db:/stsservoy/jobs>} */
	var e = b.joins.add('db:/stsservoy/jobs');
	e.on.add(e.columns.job_id.eq(b.columns.job_id));
	columns = databaseManager.getTable('db:/stsservoy/jobs').getColumnNames();
	for (ii = 0;ii < columns.length;ii++){
		if (columnsSeen.indexOf(columns[ii]) != -1){continue}
		a.root.result.add(e.getColumn(columns[ii]));
		columnsSeen.push(columns[ii]);
	}
	
	var A = databaseManager.getDataSetByQuery(a,-1);
	
	//if (1==1){return}
	var serverPath = plugins.UserManager.Server().servoyDirectory;
	
	var fileName = serverPath+"\\barcodelabel.txt"; var data = "";
	var fileX = plugins.file.createFile(fileName);
	if (!fileX.createNewFile()){
		application.output('file cannot be created');
	}
	var randFileName = serverPath + application.getUUID().toString().split("-")[4] +".txt";
	//application.output(randFileName);
	var status = plugins.file.writeTXTFile(fileName,data);
	if (!status){
		//TODO text file write error occurred.
		application.output('no text file');
	}
	for (var index = 1;index <= A.getMaxRowIndex();index++){
		A.rowIndex = index;
		//record = A.getRecord(index);
		line = "";
		line += "Record #" + index + "\t";
		line += "*"+ A.id_serial_number + "*\t";
		status = plugins.file.appendToTXTFile(fileName,line + "\n");
		
	}
	//if (1==1){return}
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
 * 
 * dsLotArray["_"+lotNum+"|"+"_"+seqNum] = lot_id
 * 
 * @param uniqPcmk {String}
 * @param sequence {String}
 * @param lot {String}
 *
 * @properties={typeid:24,uuid:"EF4C388B-BBEB-457D-B9F2-9BA821D801D5"}
 */
function getPiecemarkIdfiles(uniqPcmk){
	/**
	 * returns [seq1, seq2,seq3] each seq is array of idfiles [[i1,i1,i1],[i1,i1,i1][i1]] that represent 
	 * idfiles[seq1[ib1[i1,i1,i1],ib1[i1,i1,i1],ib1[i1] - hopefully not a typically an unbalance barcode distribution
	 * idfiles[seq1][ib1].length should be 3, then second array would be 3, then last array would be 1 in length
	 * idfiles[seqn][
	 * idfiles.push(seqn)
	 */
	//OKAY CHECKING JUST HOW QUICK THIS FUNCTION WILL BE WALK THROUGH
	var pcmkId = dsPiecemarkArray[uniqPcmk];
	//var lotId = dsLotArray["_"+lotNum+"|"+"_"+seqNum];
	//var seqId = dsSequenceArray['_'+seqNum];
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.sequence_id);
	q.result.add(q.columns.lot_id);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.piecemark_id.eq(pcmkId));
	var fsIdfiles = databaseManager.getFoundSet(q);//keep a foundset of the idfiles for this piecemark
	
	var r = q.joins.add('db:/stsservoy/id_serial_numbers');
	r.on.add(q.columns.idfile_id.eq(q.columns.idfile_id));
	r.root.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.root.result.add(r.columns.id_serial_number_id);
	/** @type {JSDataSet<idfile_id:String,sequence_id:String,lot_id:String,id_serial_number_id:String>} */
	var R = databaseManager.getDataSetByQuery(q,-1);
	var index = 1;
	var bL = null;//short for barList
	/** @type {Array} */
	var iL = null;//short for idfileListOfBarCodes
	for (index = 1;index <= R.getMaxRowIndex();index++){
		R.rowIndex = index;
		var barId = R.id_serial_number_id;
		var idId = R.idfile_id;
		var lotId = R.lot_id;
		var seqId = R.sequence_id;
		if (!dsPcmkIdAndBcList[pcmkId]){dsPcmkIdAndBcList[pcmkId] = {};bL = dsPcmkIdAndBcList[pcmkId]}
		if (!bL[barId]){bL[barId] = [];bL['seq'] = seqId;bL['lot'] = lotId;iL = bL[barId]}
		iL.push(idId);
	}	
}
/**
 * @param {JSFoundSet<db:/stsservoy/import_table>} record
 * @param {Object} info
 *
 * @properties={typeid:24,uuid:"843E6105-F9C3-4E4B-BFBD-A31E200F0572"}
 * @AllowToRunInFind
 */
function importRecordCheckIdfileCount2(record,info){
	/**
i18n:import.ignore
i18n:import.summarize
i18n:import.append
i18n:import.update
i18n:import.delete
	 */
	var isParent = (record.piecemark == record.parent_piecemark);
	var weightLimit = scopes.prefs.wtPrompt;// multiple label ask if less than a specific weight
	var quantLimit = scopes.prefs.qtyPrompt;// multiple id if quant greater than some number
	var isSubAssembly = (record.parent_piecemark != record.piecemark);//is this a sub assembly mark (STSe)
	var noIdOnAssembly =  (globals.session.appName == 'STS X Embedded' && record.parent_piecemark != record.piecemark);//use for STSe
	var idPool = idfilePool;//array of idfile mUUIDs to use
	var bcPool = barcodePool;//array of id_serial_number UUIDs to use
	var isSummedPcmk = (record.import_status == i18n.getI18NMessage('import.summarize'));//is this a summary piecemark, x-barcodes, x-idfiles
	var appendPcmk = (record.import_status == i18n.getI18NMessage('import.append'));//append new information to piecemark data
	var deletePcmk = (record.import_status == i18n.getI18NMessage('import.delete'));
	var updatePcmk = (record.import_status == i18n.getI18NMessage('import.update'));
	var summaryRec = (record.piecemark == ""); // summary idfile processing
	var ignoreHistory = (record.import_status == i18n.getI18NMessage('import.ignore'));//ignore idfile history

	var pcmkGuidsFSet = null;//list of guids for this piecemark

	var uniquePm = uniquePiecemark(record);
	var pcmkId = dsPiecemarkArray[uniquePm];

	var bcQuant = record.set_bc_qty;//number of barcodes required
	var bcCapacity = record.barcode_qty;//how many marks per bar code
	var bcCapacityLast = record.last_bc_qty;// home many marks on last bar code
	var bcWeight = 0;//calculated bar code weight
	var itemQty = record.item_qty;
	var itemWt = record.item_weight;
	var pcmkQty = record.pcmk_qty;
	var seqQty = record.sequence_quantity;
	var seqNum = record.sequence_number;
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfilesFSet = getPiecemarkIdfiles2(pcmkId);//list of db idfiles for this pcmk
	databaseManager.saveData(idfilesFSet);//keep job number, blank load, pcmks, barcodes, any bom data checkbox
	var overwrite = {
		piecemark_id : pcmkId,
		sequence_id : idfilesFSet.sequence_id,
		original_quantity : itemQty,
		current_load_id : idfilesFSet.current_load_id,
		bundle_id : idfilesFSet.bundle_id,
		id_area : idfilesFSet.id_area,
		lot_id : idfilesFSet.lot_id,
		lprint : idfilesFSet.lprint,
		summed_quantity : idfilesFSet.summed_quantity,
		ship_load_id : idfilesFSet.ship_load_id,
		received_load_id : idfilesFSet.received_load_id,
		id_location : idfilesFSet.id_location
	}
	
	
	//-------------------------
	var guids = currentGuidsPcmk;
	var guidsParent = currentGuidsPcmkParent;
    var guidsExist = (guids.length > 0);
	/**
		totalMarks : 0,
		totalBCs :0,
		lockedBC : [], // BCs that are locked
		lockedID : [], // IDs that are locked, good for count
		printed : [],//indexed printed idfile ID and BC ID array
		dirty : [], // indexed ID and BC ID dirty array
		guids : [], // guids seen in import files
		distribution : [] //assoc array of barcodes holding arrays of idfiles
	 */
	if (isSubAssembly){var importQty = itemQty} else {importQty = (!seqQty) ? itemQty : seqQty}
	var summQuantity = (isSummedPcmk) ? itemQty : 1;
	
	var dbBcCount = info.totalBCs;
	
	var bcLocked = []; var bcDeletes = []; var idLocked = []; var bcDist = info.distribution; var bcCount = 0;
	var idDeletes = [];
	/**
	 * bcCount > 0 add bar code.  Locked bar codes cause more bar codes to be created
	 * 
	 * locak bar code and continue OR
	 * bar code under weight, add idfile--
	 * bar code under capacity, add idfile--
	 * bar code over weight, remove idfile++
	 * bar code over capacity, remove idfile++  
	 */
	bcCount = bcQuant - dbBcCount;
	var idCount = itemQty - info.totalBCs;
	if (guidsExist && info.removeID.length > 0) {//record with guid not in import 
		var remID = '';
		while (remID = info.removeID.pop()){
			var remBC = info.removeIDBC[remID];
			idDeletes.push(remID);
			info.totalMarks--; idCount++;
			if (bcDist[remBC]){
				for (var i = 0;i < bcDist[remBC].length;i++){
					var id = bcDist[remBC].pop();
					if (id == remID){break}// idifile found, do not add back to barcode
					bcDist[remBC].unshift(id);	
				}
			}
		}
	}
	if (bcCount != 0){
		while (bcCount > 0){//add BCs
			var bcId = createValidBarcode(); bcDist[bcId] = []; info.totalBCs++; bcCount--;
		}
		if (bcCount < 0){//remove BCs
			for (bcId in bcDist){
				if (bcCount == 0){break}
				if (info.lockedBC.indexOf(bcId) != -1){continue}
				while (idfileId = bcDist[bcId].pop()){
					idPool.push(idfileId); info.totalMarks--;
				}
				bcPool.push(bcId);
				info.totalBCs--; bcCount++;
			}
		}
	}
	
	//distribute idfiles among bar codes, create additional if necessary
	var overWeight = false;
	var idx1 = 0;
	var totalLabelCount = bcQuant;
	for (bcId in info.distribution){//check and create barcodes layout: weightLimit, quantLimit, summaryRec?, bcCapacity
		if (info.lockedBC.indexOf(bcId) != -1){continue}
		var ptr = info.distribution[bcId];
		var labelCapacity = bcCapacity;
		if (--totalLabelCount == 0 && bcCapacityLast != 0){labelCapacity = bcCapacityLast}
		
		//var list = info.idArray; 
		//while (ptr.length*1 < (bcCapacity+1)*1){
			while (ptr.length*1 < labelCapacity*1){// && (scopes.prefs.maxwt*1 > (ptr.length+1)*record.item_weight)){
				//if (application.isInDeveloper()){application.output('bars: '+ptr.length+"/"+bcCapacity)}
				/** @type {String} */
				var idfileId = idPool.pop();
				if (!idfileId){
					var idfile = createIdfileRecord(uniquePm,pcmkId,record.sequence_number,record.lot_number,bcId,labelCapacity,record.item_qty,summQuantity,record.remarks);
					//ptr.push(idfile.idfile_id);
					idfileId = idfile.idfile_id;
					idfile.create_date = importDate;
				} else {
					idfilesFSet.loadRecords(application.getUUID(idfileId));
					/** @type {JSRecord<db:/stsservoy/idfiles>} */
					idfile = idfilesFSet.getRecord(1);
					idfile.edit_date = importDate;
					if (!idfile){
						null;//no idfile, checking 
					}
				}
				ptr.push(idfile.idfile_id);

				if (record.piecemark.toUpperCase() == record.parent_piecemark.toUpperCase()){
					currentIdflParentId.push(idfile.idfile_id);
					currentPcmkParentId = pcmkId;
				}
				//list.push(idfileId);
				//application.output('idfile Id '+idfileId);
				//set barcode id in idfileId
				idfile.parent_piecemark_id = currentIdflParentId[idx1];
				idfile.id_serial_number_id = bcId;
				idfile.lot_id = dsLotArray["_"+record.lot_number+"|"+"_"+record.sequence_number];
				idfile.original_quantity = labelCapacity;//importQty;
				if (record.reprint){idfile.lprint = null} //if reprint reset null
				idfile.guid_major = guidsParent.pop();
				idfile.guid_minor = guids.pop();
				idfile.summed_quantity = summQuantity;
				idfile.edit_date = importDate;
				if (globals.session.appName != 'STS X Embedded'){
					idfile.shop_order = forms['kiss_option_import'].jobShopOrder;
					idfile.id_area = forms['kiss_option_import'].importArea;
					if (record.remarks){
						if (forms['kiss_option_import'].saveNotesInto.search('Control #') != -1){
							idfile.control_number = record.remarks;
						}
						if (forms['kiss_option_import'].saveNotesInto.search('Erection Dwg') != -1){
							idfile.erection_drawing = record.remarks;
						}
						if (forms['kiss_option_import'].notesContainCamber){
							idfile.camber = camberInfo(record.remarks);//resolves ticket#5
						}
					}
				}
			}
			idx1++;
		}
	//}
	//save idfile changes in import record, ie max items, quantity, etc
		scopes.jobs.idfilesToDelete = idDeletes;
		scopes.jobs.barcodesToDelete = bcDeletes;
}
/**
 * @param {String} pcmkID
 *
 * @properties={typeid:24,uuid:"911E9884-0ECA-49FE-97F4-07CF2A1EC61A"}
 */
function getPiecemarkIdfiles2(pcmkID,seq){
	var seqId = scopes.jobs.dsSequenceArray["_"+seq];
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.piecemark_id.eq(pcmkID));
	q.where.add(q.columns.sequence_id.eq(seqId));
	var fsIdfiles = databaseManager.getFoundSet(q);//keep a foundset of the idfiles for this piecemark
	
	return fsIdfiles;
}
/**
 * Returns object bc{distribtion[],totalMarks=number,idArray[]}
 * @param {JSFoundSet<db:/stsservoy/idfiles>} fsIdfiles
 * @param {JSFoundSet<db:/stsservoy/import_table>} inRec
 * @param {Array} guids
 *
 * @properties={typeid:24,uuid:"2F2E882C-6009-420B-A786-018EEB4523A4"}
 */
function getIdfileBcIDs(fsIdfiles, inRec){
	var bc = {
		totalMarks : 0,
		totalBCs :0,
		removeID : [], // IDs that are obviously removeable
		removeIDBC :[], // BCs that can be removed
		lockedBC : [], // BCs that are locked, good for count
		lockedID : [], // IDs that are locked, good for count
		printed : [],//indexed printed idfile ID and BC ID array
		dirty : [], // indexed ID and BC ID dirty array
		guids : [], // guids seen in import files
		distribution : [] //assoc array of barcodes holding arrays of idfiles
	}		// idArray : [],//indexed idfile array 
	var guids = currentGuidsPcmk;
	//var parentGuids = currentGuidsPcmkParent;
	var rec = null;var idx = 1;
	while (rec = fsIdfiles.getRecord(idx++)){
		var bcId = rec.id_serial_number_id;//BC ID
		var idFileId = rec.idfile_id;
		var dirty = (rec.status_description_id != null);
		var printed = (rec.lprint == 1);
		var reprint = (inRec.import_status == i18n.getI18NMessage('import.reprint'));
		var noHistory = (inRec.import_status == i18n.getI18NMessage('import.nohist'));

		if ((dirty && !noHistory) || (printed && reprint)){if (bc.lockedBC.indexOf(bcId) == -1){bc.lockedBC.push(bcId)};bc.lockedID.push(idFileId)}
		if (printed){if (bc.printed.indexOf(bcId) == -1){bc.printed.push(bcId)};bc.printed.push(idFileId)}
		if (dirty){if (bc.dirty.indexOf(bcId) == -1){bc.dirty.push(bcId)};bc.dirty.push(idFileId)}
		

		if (!bc.distribution[bcId]){bc.distribution[bcId] = [];bc.totalBCs++}//get BC count
		bc.distribution[bcId].push(idFileId); // idfiles by BC
		bc.guids.push(rec.guid_minor);
		if (rec.guid_minor && guids.indexOf(rec.guid_minor) == -1){bc.removeID.push(idFileId);bc.removeIDBC[idFileId] = bcId;continue}//FS shows no guid, so must have been removed
		if ((dirty && noHistory) || (printed && reprint) || !dirty || !printed){bc.removeID.push(idFileId)}
	}
	bc.totalMarks = fsIdfiles.getSize();//last since have to go to end of foundset
	return bc;
}
/**
 * This will block editing from office with true, or shop with false
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"85281C7F-5AF8-48B2-A059-F60D9A24CB83"}
 * @AllowToRunInFind
 */
function blockViewEditing(event,fromOffice){
	var officeView = (globals.session.corporate);
	if (!officeView){return}
	var form = event.getFormName();
	var regexp = new RegExp('(Edit)|(Add)|(Del)|(New)','i');
	for (var el in forms[form].elements){
		if (el.search('btn') == 0 && el.search(regexp) != -1){
			forms[form].elements[el].enabled = false;
		}
	}
	//forms[form]
}
/**
 * This will block editing from office with true, or shop with false
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D4D51067-2023-4108-A007-BFDB214F7ADB"}
 */
function formPermissions(event,fromOffice){
	blockViewEditing(event,fromOffice);
	globals.setUserFormPermissions(event,false);
}
/**
 * @AllowToRunInFind
 * 
 * @param fsRec
 * @param unique
 *
 * @properties={typeid:24,uuid:"49385745-3090-4F0E-8535-25BCFE2D52B8"}
 */
function updatePiecemark(fsRec,unique){
	var pcmkId = dsPiecemarkArray[unique];
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var q = databaseManager.createSelect('db:/stsservoy/piecemarks');
	q.result.add(q.columns.piecemark_id);
	q.where.add(q.columns.piecemark_id.eq(pcmkId));
	var Q = databaseManager.getFoundSet(q);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var rec = Q.getRecord(1);
	//var rec = dsPiecemarks[pcmkId];
	rec.edit_date = importDate;
	rec.item_length = fsRec.item_length*1;
	rec.item_quantity = fsRec.item_qty;
	rec.pcmk_qty = fsRec.pcmk_qty;
	rec.item_weight = fsRec.item_weight;
	rec.item_weight_lbs = scopes.globals.kgToLb(fsRec.item_weight);
	rec.item_length_in = scopes.globals.mmToIn(fsRec.item_length);
	if (globals.session.appName != 'STS X Embedded'){
		if (globals.m.routes.indexOf(fsRec.e_route_code_id) == -1){
			rec.e_route_code_id = forms.kiss_option_import.importRouting;
		} else {
			rec.e_route_code_id = globals.m.routes[fsRec.e_route_code_id];
		}
	}
	//application.output('route code id '+rec.e_route_code_id);
	if (fsRec.remarks && (globals.session.appName != 'STS X Embedded')){
		if (forms.kiss_option_import.saveNotesInto.search('Description') != -1){
			rec.description = fsRec.remarks;
		}
	}
	databaseManager.saveData(rec);
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
 * @properties={typeid:24,uuid:"C91B98FE-2CE2-4FB0-B150-EC9A30E87FE2"}
 */
function onDataChangePathEntry(oldValue, newValue, event) {
	var fileName = newValue+'//test.txt';
	var file = plugins.file.createFile(fileName);
	var success = file.createNewFile();
	if (success){
		globals.DIALOGS.showErrorDialog('File Creation Test on Directory','File Creation Passed.')
	} else {
		globals.DIALOGS.showErrorDialog('File Creation Test on Directory','File Creation Failed.');
		newValue = oldValue;

	}
	return true
}
/**
 * TODO generated, please specify type and doc for the params
 * @param jobId
 *
 * @properties={typeid:24,uuid:"036028EA-6919-48CC-AE99-2E01142656A4"}
 */
function jobTotalWeight(jobId){
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('');
	q.where.add(q.columns.job_id.eq(jobId));
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var r = q.joins.add('')
}
/**
 * @param {String} serial
 * @param {String} part
 *
 * @properties={typeid:24,uuid:"604E5A12-8BD3-456E-A7BD-01AF55D11C9D"}
 */
function countUpNumbersNonOdo(serial,part){//20180111 Change serialization to reverse odometer, kinda task #224
	if (!custRec){
		var serialLength = serial.length;
		if (globals.session.appName == "STS X Embedded"){
			serialLength = 10;
		}
	} else {
		if (globals.session.appName == "STS X Embedded" || part){
			serialLength = 10;
		} else {
			serialLength = scopes.prefs.barcodeLength-custRec.barcode_preamble_length;
		}
	}
	if (serial.length == 5){//this is a bundle serial
		serialLength = 5;
	}
	var padZeroes = "000000000000000000000000000000";
	serial = padZeroes+serial;
	serial = serial.substr(serial.length-serialLength,serial.length);
	var regexp = new RegExp('(^[A-Z]*)([0-9]*)$');
	var serialR = serial.match(regexp);
	//var regexpZ = new RegExp('^(0+)$');

	var major = serialR[1];var minor = serialR[2];
	//application.output('major '+major+' minor '+minor)
	//var minorLength = minor.length;
	var majorLength = major.length;
	
	var regexp9 = new RegExp('^(9+)$');
	var serial9 = minor.match(regexp9);
	var doMajorRollover = (serial9) ? true : false;
	if (doMajorRollover){
		if (!major){major = '9'}// 9999999
		index = 0;
		rollover = true;
		while(rollover){
			rollover = false;
			var digit = major.substring(index,index+1);
			var slice1 = major.slice(0,index);
			var slice2 = major.slice(index+1);
			if (digit == 'Z'){index++;rollover = true;continue}
			if (digit == '9'){major = slice1+'A'+slice2;majorLength++;continue}
			major = slice1+String.fromCharCode(major.charCodeAt(index)+1)+slice2;
			index++
		}
		major = major.slice(0,majorLength);
		minor = padZeroes+'1';
		minor = minor.substr(minor.length-serialLength+major.length);//rollover of all nines to zeroes
	} else {
		var rollover = true;
		var index = minor.length-1;
		while(rollover && index >= 0){
			rollover = false;
			digit = minor.substring(index,index+1);
			slice1 = minor.slice(0,index);
			slice2 = minor.slice(index+1);
			if (digit == '9'){minor = slice1+'0'+slice2;rollover = true;index--;continue}
			minor = slice1+String.fromCharCode(minor.charCodeAt(index)+1)+slice2;
			index--;
		}
	}
	return major+minor;
}
/**
 * @properties={typeid:24,uuid:"E6FA5BBD-3583-4E63-9534-EFF76D6816CF"}
 */
function testSerialNonOdo(){
	var codes = ['0000000000','0000000001','0000000002','0000000009','0000000010',
		'0000000019','9999999999','A000000000','A000000001','A000006001','B000000001','ZA00000001',
		'ZO99999999','ZO99989999','ZO19999999','ZY00000001','ZY99999999','ZZB9999999','ZZC0000000'];
	for (var index = 0;index < codes.length; index++){
		application.output('Serial: '+codes[index]+' next: '+countUpNumbersNonOdo(codes[index]));
	}
	application.output('\n')

}
/**
 * @param {String} jobId
 *
 * @properties={typeid:24,uuid:"95A9D836-2F67-4712-8C74-002C06B347B9"}
 */
function deleteEntireJob(jobId){
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['SHEETS']),true);
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var sh = databaseManager.createSelect('db:/stsservoy/sheets');
	sh.result.add(sh.columns.sheet_id);
	sh.where.add(sh.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	sh.where.add(sh.columns.job_id.eq(jobId));
	//var Dsheets = databaseManager.getDataSetByQuery(sh,-1);

	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['SEQUENCES']),true);
	/** @type {QBSelect<db:/stsservoy/sequences>} */
	var sq = databaseManager.createSelect('db:/stsservoy/sequences');
	sq.result.add(sq.columns.sequence_id);
	sq.where.add(sq.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	//var Dsequences = databaseManager.getDataSetByQuery(sq,-1);

	
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['LOTS']),true);
	/** @type {QBSelect<db:/stsservoy/lots>} */
	var l = databaseManager.createSelect('db:/stsservoy/lots');
	l.result.add(l.columns.lot_id);
	l.where.add(l.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	l.where.add(l.columns.sequence_id.isin(sq));
	//var Dlots = databaseManager.getDataSetByQuery(l,-1);

	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['PIECEMARKS']),true);
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var p = databaseManager.createSelect('db:/stsservoy/piecemarks');
	p.result.add(p.columns.piecemark_id);
	p.where.add(p.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	p.where.add(p.columns.sheet_id.isin(sh));
	//var Dpiecemarks = databaseManager.getDataSetByQuery(p,-1)
	
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['IDFILES']),true);
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var id = databaseManager.createSelect('db:/stsservoy/idfiles');
	id.result.distinct = true;
	id.result.add(id.columns.idfile_id);
	id.result.add(id.columns.id_serial_number_id);
	id.where.add(id.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	id.where.add(id.columns.piecemark_id.isin(p));
	//var Didfiles = databaseManager.getDataSetByQuery(id,-1);
		
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['TRANSACTIONS']),true);
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var id3 = databaseManager.createSelect('db:/stsservoy/idfiles');
	id3.result.distinct = true;
	id3.result.add(id3.columns.idfile_id);
	id3.where.add(id3.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	id3.where.add(id3.columns.piecemark_id.isin(p));
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var tr = databaseManager.createSelect('db:/stsservoy/transactions');
	tr.result.add(tr.columns.trans_id);
	tr.where.add(tr.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	tr.where.add(tr.columns.idfile_id.isin(id3));
	//var Dtransactions = databaseManager.getDataSetByQuery(tr,-1);
	
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['LOADS']),true);
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var ld = databaseManager.createSelect('db:/stsservoy/loads');
	ld.result.add(ld.columns.load_id);
	ld.where.add(ld.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	ld.where.add(ld.columns.job_id.eq(jobId));
	//var Dloads = databaseManager.getDataSetByQuery(ld,-1);
	
	
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['SERIALS']),true);
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var id2 = databaseManager.createSelect('db:/stsservoy/idfiles');
	id2.result.distinct = true;
	id2.result.add(id2.columns.id_serial_number_id);
	id2.where.add(id2.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	id2.where.add(id2.columns.piecemark_id.isin(p));
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var sn = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	sn.result.add(sn.columns.id_serial_number_id);
	sn.where.add(sn.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	sn.where.add(sn.columns.id_serial_number_id.isin(id2.columns.id_serial_number_id));
	//var Dserials = databaseManager.getDataSetByQuery(sn,-1);
	
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['SERIALS']),true);
	var serials = databaseManager.getFoundSet(sn);
	if (serials.getSize() > 0){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',[serials.getSize()+' SERIALS']),true);
		if (application.isInDeveloper()){application.output('serials count '+serials.getSize());}
		serials.deleteAllRecords();
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['LOADS']),true);
	var loads = databaseManager.getFoundSet(ld);
	if (loads.getSize() > 0){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',[loads.getSize()+' LOADS']),true);
		if (application.isInDeveloper()){application.output('loads '+loads.getSize());}
		loads.deleteAllRecords();
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['TRANSACTIONS']),true);
	var trans = databaseManager.getFoundSet(tr);
	if (trans.getSize() > 0){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',[trans.getSize()+' TRANSACTIONS']),true);
		if (application.isInDeveloper()){application.output('transactions '+trans.getSize());}
		trans.deleteAllRecords();
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['IDFILES']),true);
	var idfiles = databaseManager.getFoundSet(id);
	if (idfiles.getSize() > 0){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',[idfiles.getSize()+' IDFILES']),true);
		if (application.isInDeveloper()){application.output('idfiles '+idfiles.getSize());}
		idfiles.deleteAllRecords();
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['PIECEMARKS']),true);
	var pcmks = databaseManager.getFoundSet(p);
	if (pcmks.getSize() > 0){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',[pcmks.getSize()+' PIECEMARKS']),true);
		if (application.isInDeveloper()){application.output('piecemarks '+pcmks.getSize());}
		pcmks.deleteAllRecords();
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['LOTS']),true);
	var lots = databaseManager.getFoundSet(l);
	if (lots.getSize() > 0){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',[lots.getSize()+' LOTS']),true);
		if (application.isInDeveloper()){application.output('lots '+lots.getSize());}
		lots.deleteAllRecords();
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['SEQUENCES']),true);
	var sequences = databaseManager.getFoundSet(sq);
	if (sequences.getSize() > 0){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',[sequences.getSize()+' SEQUENCES']),true);
		if (application.isInDeveloper()){application.output('sequences '+sequences.getSize());}
		sequences.deleteAllRecords();
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['SHEETS']),true);
	var sheets = databaseManager.getFoundSet(sh);
	if (sheets.getSize() > 0){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',[sheets.getSize()+' SHEETS']),true);
		if (application.isInDeveloper()){application.output('sheets '+sheets.getSize());}
		sheets.deleteAllRecords();
	}	
}
/**
 * @properties={typeid:24,uuid:"2130E5D0-977B-4815-999E-4E41BE722DA5"}
 */
function createPartSerial(){
	/** @type {QBSelect<db:/stsservoy/last_id_serial>} */
	var q = databaseManager.createSelect('db:/stsservoy/last_id_serial');
	q.result.add(q.columns.serial);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.prefix.eq('TENANT'));
	var Q = databaseManager.getFoundSet(q);
	var idx = 1;
	if (Q.getSize() == 0){
		idx = Q.newRecord();
		/** @type {JSFoundSet<db:/stsservoy/last_id_serial>} */		
		var rec = Q.getRecord(idx);
		rec.tenant_uuid = globals.session.tenant_uuid;
		rec.edit_date = new Date();
		rec.prefix = 'TENANT';
		rec.serial = '0000000000';
	} else {
		rec = Q.getRecord(idx);
	}
	databaseManager.saveData(rec);

	rec.serial = countUpNumbersNonOdo(rec.serial,true);
	return rec.serial;
}
/**
 * Return Route Code Record, not detail route legs
 * @param {String} routeName
 *
 * @properties={typeid:24,uuid:"B7BAC23D-817D-4F90-A8A4-963EEF850709"}
 */
function addRouteCode(routeName){
	/** @type {QBSelect<db:/stsservoy/routings>} */
	var q = databaseManager.createSelect('db:/stsservoy/routings');
	q.result.add(q.columns.routing_id);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.route_code.eq(routeName));
	var Q = databaseManager.getFoundSet(q);
	var idx = 1;
	/** @type {JSFoundSet<db:/stsservoy/routings>} */
	var rec = Q.getRecord(idx);
	
	if (!Q){
		var idx = Q.newRecord();
		rec = Q.getRecord(idx);
		rec.tenant_uuid = globals.session.tenant_uuid;
		rec.edit_date = new Date();
		rec.route_code = routeName;
	}
	return rec;
}
/**
 * @param {String} jobId
 *
 * @properties={typeid:24,uuid:"A6E2FFAC-4C72-41AF-A16F-3050DFC19706"}
 */
function checkJobEmpty2(jobId){
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheets');
	q.where.add(q.columns.job_id.eq(jobId));
	q.where.add(q.columns.delete_flag.isNull);
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var r = q.joins.add('db:/stsservoy/piecemarks');
	r.on.add(r.columns.sheet_id.eq(q.columns.sheet_id));
	r.root.where.add(r.columns.delete_flag.isNull);
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var s = r.joins.add('db:/stsservoy/idfiles');
	s.on.add(s.columns.piecemark_id.eq(r.columns.piecemark_id));
	s.root.where.add(s.columns.delete_flag.isNull);
	q.result.add(s.columns.idfile_id);
	var Q = databaseManager.getDataSetByQuery(q,3);
	//var idfiles = Q.getColumnAsArray(1);
	var isEmpty = true;
	for (var idx = 1;idx <= Q.getMaxRowIndex();idx++){
		Q.rowIndex = idx;
		if (Q.idfile_id != null){isEmpty = true;break}
	}
	return isEmpty;
}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1352B98C-85C2-41D6-A9CF-3E8BFE23F5E8"}
 */
function onLoadWindowSize(event) {
	var formName = event.getElementName();
	var screenWidth = application.getScreenWidth();
	if (screenWidth < 400){
		var win = forms[event.getFormName()].controller.getWindow();
		//win.setSize(screenWidth,win.getHeight()*3);
	}
}
/**
 * @properties={typeid:24,uuid:"6EF79155-1269-4D76-B3BE-0BD7EBFCEB58"}
 */
function onMobileViewLoadValueList(){
	/** @type {Array} */
	var allViews = scopes.globals.getMenuList();
	//var views = application.getValueListArray('rfProgramList');
	application.setValueListItems('stsvlt_remoteViews',allViews);
}
/**
 * Handle changed data.
 *
 * @param {JSEvent} event the event that triggered the action

 *
 * @properties={typeid:24,uuid:"65D17DDC-9AF7-4943-8050-78F5745C6DA3"}
 */
function onLoadRemoteViews(event) {
	forms[event.getFormName()].userMobileViewList = '';
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var q= databaseManager.createSelect('db:/stsservoy/preferences2');
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.user_uuid.eq(forms[event.getFormName()].user_uuid));
	q.where.add(q.columns.field_name.eq('userRemoteViews'));
	q.sort.add(q.columns.field_name.asc);
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() > 0){
		var viewList = '';
		/** @type {JSRecord<db:/stsservoy/preferences2>} */
		var rec = null;var idx = 1;
		while (rec = Q.getRecord(idx++)){
			if (viewList == ''){
				viewList = rec.field_value;
			} else {
				viewList += '\n'+rec.field_value;
			}
		}
	}
	forms[event.getFormName()].userMobileViewList = viewList;
}
/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E25B45D3-572C-41F4-BE63-F3CDE038B562"}
 */
function onSaveRemoteViews(event){
	var currentSel = [];
	if (forms['division_user_detail'].userMobileViewList){
		/** @type {Array} */
		var currentSel = forms['division_user_detail'].userMobileViewList.split('\n');
	}
	var removeRecs = [];
	var shownViews = [];
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var q= databaseManager.createSelect('db:/stsservoy/preferences2');
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.user_uuid.eq(forms[event.getFormName()].user_uuid));
	q.where.add(q.columns.field_name.eq('userRemoteViews'));
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/preferences2>} */
		var rec = null;var idx = 1;
		while (rec = Q.getRecord(idx)){
			var showIdx = currentSel.indexOf(rec.field_value);
			if (showIdx == -1){
				removeRecs.push(idx);
			} else {
				shownViews.push(rec.field_value);
			}
			idx++;
		}
	}
	while (idx = removeRecs.pop()){
		rec = Q.getRecord(idx);
		Q.deleteRecord(idx);
	}
	var saveData = false;
	while (newView = currentSel.pop()){
		if (shownViews.indexOf(newView) != -1){continue}
		saveData = true;
		idx = Q.newRecord();
		rec = Q.getRecord(idx);
		rec.edit_date = new Date();
		rec.field_name = 'userRemoteViews';
		rec.user_uuid = forms[event.getFormName()].user_uuid;
		rec.field_value = newView;
		rec.tenant_uuid = globals.session.tenant_uuid;
		rec.value_description = 'User mobile view preferences';
	}
	if (saveData){
		databaseManager.saveData(Q);
	}
}
/**
* @param criteria
* @param formName
* @param {String} subquery
* subquery can be summarized, piecemark, idnumbers, stations, browse (general)
* @AllowToRunInFind
*
 * @properties={typeid:24,uuid:"66D8B737-F7A6-4183-84FF-35BA80BB434B"}
 */

function queryAssembly2(criteria,formName,subquery){
	var getDeleted = false;
	if (formName.search(/(recall)|(remove)/) != -1){
		getDeleted = true;
	}
	if (subquery == "browse2"){
		var jobId = criteria.jobid; //forms.loads_criteria.vJobID
		/** @type {QBSelect<db:/stsservoy/jobs>} */
		var q = databaseManager.createSelect('db:/stsservoy/jobs');
		q.where.add(q.columns.job_id.eq(jobId));
		/** @type {QBJoin<db:/stsservoy/sheets>} */
		var qs = q.joins.add('db:/stsservoy/sheets');
		qs.on.add(q.columns.job_id.eq(qs.columns.job_id));
		/** @type {QBJoin<db:/stsservoy/piecemarks>} */
		var qp = qs.joins.add('db:/stsservoy/piecemarks');
		qp.on.add(qs.columns.sheet_id.eq(qp.columns.sheet_id));
		/** @type {QBJoin<db:/stsservoy/idfiles>} */
		var qi = qp.joins.add('db:/stsservoy/idfiles');
		qi.on.add(qp.columns.piecemark_id.eq(qi.columns.piecemark_id));
		if (getDeleted){
			qi.root.where.add(qi.columns.delete_flag.eq(99));
		} else {
			qi.root.where.add(qi.columns.delete_flag.isNull);			
		}
		/** @type {QBJoin<db:/stsservoy/sequences>} */
		var qq = qi.joins.add('db:/stsservoy/sequences');
		qq.on.add(qi.columns.sequence_id.eq(qq.columns.sequence_id));
		/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} */
		var qn = qi.joins.add('db:/stsservoy/id_serial_numbers');
		qn.on.add(qi.columns.id_serial_number_id.eq(qn.columns.id_serial_number_id));
		
		var tables = ['jobs','id_serial_numbers','piecemarks','status_description','idfiles','sheets','sequences','lots','routings','sheet_bom'];
		for (var itemDex = 0;itemDex < tables.length;itemDex++){
			var table = databaseManager.getTable('stsservoy',tables[itemDex]);
			var cols = table.getColumnNames(); var tableColAlt = ''; var shortTable = '';
			for (index = 0;index < cols.length;index++){
				//if (stShown.indexOf(cols[index]) == -1){
					switch (tables[itemDex]){
						case 'jobs' : var tableCol = q.getColumn(cols[index]);shortTable = 'job_';break;
						case 'id_serial_numbers' : tableCol = qn.getColumn(cols[index]);shortTable = 'bc_';break;
						case 'piecemarks' : tableCol = qp.getColumn(cols[index]);shortTable = 'pm_';break;
						case 'status_description' : continue;tableCol = stat1.getColumn(cols[index]);shortTable = 'st_';break;
						case 'idfiles' : tableCol = qi.getColumn(cols[index]);shortTable = 'if_';break;
						case 'sheets' : tableCol = qs.getColumn(cols[index]);shortTable = 'sh_';break;
						case 'sequences' : tableCol = qq.getColumn(cols[index]);shortTable = 'sq_';break;
						case 'lots' : continue;tableCol = lots.getColumn(cols[index]);shortTable = 'lt_';break;
						case 'routings' : continue;tableCol = route.getColumn(cols[index]);shortTable = 'rt_';break;
						case 'sheet_bom' : continue;tableCol = shbom.getColumn(cols[index]);shortTable = 'bom_';break;
						case 'customers' : continue;tableCol = loadsshipto.getColumn(cols[index]);shortTable = 'lds_';break;
						default: null;
					}
					if (cols[index].search(shortTable) != 0){
						tableColAlt = cols[index];
						tableColAlt = shortTable+tableColAlt;
						q.result.add(tableCol,tableColAlt);
						q.groupBy.add(tableCol);
						//if (application.isInDeveloper()){application.output('setting alt col as '+tableColAlt)}
					} else {
						q.sort.add(qp.columns.parent_piecemark.asc);
						q.sort.add(qp.columns.piecemark.asc);
						q.sort.add(qq.columns.sequence_number);
						q.result.add(tableCol);
						q.groupBy.add(tableCol);
					}
			}
		}
		return q;
		
	}
}
/**
 * @param {String} importTableId
 *
 * @properties={typeid:24,uuid:"F1CD5A13-992A-4F3C-9BD4-6E78FFC3F797"}
 */
function getImportTableGuids(importTableId){
	currentGuidsPcmk = [];
	currentGuidsPcmkParent = [];
	/** @type {QBSelect<db:/stsservoy/import_guids>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_guids');
	q.result.add(q.columns.part_guid);
	q.result.add(q.columns.assem_guid);
	q.where.add(q.columns.import_table_id.eq(importTableId));
	q.sort.add(q.columns.guid_order.asc);
	/** @type {JSDataSet<db:/stsservoy/import_guids>} */
	var Q = databaseManager.getFoundSet(q);
	/** @type {JSRecord<db:/stsservoy/import_guids>} */
	var rec = null; var index = 1;

	if (Q.getSize() > 0){
		while (rec = Q.getRecord(index++)){
			currentGuidsPcmkParent.push(rec.assem_guid);
			currentGuidsPcmk.push(rec.part_guid);
		}
	}

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"52B23FFD-156A-427D-9C00-EC8049652F3F"}
 */
function setTableRowRange(event){
	var form = forms[event.getFormName()];
	var condition = (event.getModifiers() & JSEvent.MODIFIER_SHIFT);
	if (!condition){return}
	var foundsetX = form.foundset;
	var elementIndex = form.controller.getSelectedIndex();
	if (tableStartSelection == -1){
		tableStartSelection = elementIndex;
		index = foundsetX.getSelectedIndex();
		rec = foundsetX.getRecord(index);
		rec.selection = 1;
		tableStartSelectTime = new Date();
		return;
	}
	var tableEndSelectTime = new Date();
	var diff = Date.parse(tableEndSelectTime) - Date.parse(tableStartSelectTime);
	//if (application.isInDeveloper()){application.output('time is '+diff)}
	if (diff > 30000){
		tableStartSelection = elementIndex;
		tableStartSelectTime = new Date();
		index = foundsetX.getSelectedIndex();
		rec = foundsetX.getRecord(index);
		rec.selection = 1;
		return;
	}
	var tableEndSelection = form.controller.getSelectedIndex();
	if (tableEndSelection == tableStartSelection){tableStartSelection = -1;return}
	var direction = (tableEndSelection > tableStartSelection) ? 1 : -1;
	var index = tableStartSelection;
	while (index != tableEndSelection){
		var rec = foundsetX.getRecord(index);
		foundsetX.rowIndex = index;
		rec.selection = 1;
		index = index + direction;
	}
	rec = foundsetX.getRecord(tableEndSelection);
	foundsetX.rowIndex = tableEndSelection;
	rec.selection = 1;
	tableStartSelection = -1;
}
/**
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"7DBE8BFD-1FDD-4ABE-B8DB-C444EDF80259"}
 */
function formatDate (date){
	function day(number){
		var days = [i18n.getI18NMessage('sts.days.short.sun'),
		i18n.getI18NMessage('sts.days.short.mon'),
		i18n.getI18NMessage('sts.days.short.tue'),
		i18n.getI18NMessage('sts.days.short.wed'),
		i18n.getI18NMessage('sts.days.short.thu'),
		i18n.getI18NMessage('sts.days.short.fri'),
		i18n.getI18NMessage('sts.days.short.sat')];
		return days[number];
	}
	function padTwo(number){
		if (number> 999){
			number = number+'';
			number = number.slice(-2);
			return number;
		}
		if (number > 9){
			return number;
		} else {
			return '0'+number;
		}
	}
	if (!date){return ''}
	//var month = date.getMonth()+1;month = month;
	return padTwo((date.getMonth()+1))+'/'+padTwo(date.getDate())+'/'+padTwo(date.getFullYear())+' '+padTwo(date.getHours())+':'+padTwo(date.getMinutes())+':'+padTwo(date.getSeconds())+' '+day(date.getDay());
	
}
/**
 * @param minutes
 *
 * @properties={typeid:24,uuid:"DB6B9D94-60F6-4206-A063-1F2874E9D28A"}
 */
function formatMinutes(minutes){
	//application.output(minutes);
	if (!minutes){return ''}
	if (minutes < 1){return Math.floor(minutes*60)*10+' '+i18n.getI18NMessage('sts.time.seconds')}
	if (minutes < 60){return Math.floor(minutes*10)/10+' '+i18n.getI18NMessage('sts.time.minutes')}
	if (minutes < 1440){return Math.floor((minutes/60)*10)/10+' '+i18n.getI18NMessage('sts.time.hours')}
	return Math.floor((minutes/1440)*10)/10+' '+i18n.getI18NMessage('sts.time.days');
}
/**
 * @properties={typeid:24,uuid:"1EBAABDD-DA98-46A8-B6CA-79916F417083"}
 */
function getAssociationJobs(){
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.result.add(q.columns.job_id);
	q.where.add(q.columns.association_id.eq(globals.session.associationId));
	q.where.add(q.columns.delete_flag.isNull);
	var Q = databaseManager.getFoundSet(q);
	var valuesAssoc = {display : [], values : []};
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var rec = '';var index = 1;
	while (rec = Q.getRecord(index++)){
		valuesAssoc.display.push(rec.job_number);
		valuesAssoc.values.push(rec.job_id);
	}
	return valuesAssoc;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"EC752FC2-2803-492C-B64B-FE503F420A42"}
 */
function getShopOnlyAssociations(event){
	var display = [];
	var provider = [];
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var q = databaseManager.createSelect('db:/stsservoy/associations');
	q.result.add(q.columns.association_uuid);
	q.where.add(q.or
		.add(q.columns.logic_flag.eq(0))
		.add(q.columns.logic_flag.isNull)
		)
	q.sort.add(q.columns.association_name.asc);

	var Q = databaseManager.getFoundSet(q);

	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	var rec = null;var index = 1;
	while (rec = Q.getRecord(index++)){
		display.push(rec.association_name);
		provider.push(rec.association_uuid);
	}
	//null;application.output('display shops '+display);
	application.setValueListItems('stsvl_shops_only',display,provider);
	
}