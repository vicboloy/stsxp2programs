/**
* @type abcPrinterList {Array} Array containing units of measure
 * small change
 * @properties={typeid:35,uuid:"35C8F6C4-5B6A-425E-8D51-6711DEB8AB82",variableType:-4}
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
 * @properties={typeid:35,uuid:"50C576C1-04C2-4FD5-BE10-887B07566616",variableType:-4}
 */
var aLabelType = new Array;
aLabelType.push("Raw Matl");
aLabelType.push("Serial #");
aLabelType.push("Serial01");
aLabelType.push("Standard");
/**
 * @type lanUsers {Array} lanUsers Array containing units of measure
 *
 * @properties={typeid:35,uuid:"E9D0DC0F-EA4B-42D7-BDC3-047DFC25FFB8",variableType:-4}
 */
var lanUsers = new Array;
/**
 * @properties={typeid:35,uuid:"4842B30E-E9ED-4C23-8A0D-A933582C3CC9",variableType:-4}
 */
var importResults = [];
/**
 * @properties={typeid:35,uuid:"47DB807A-7C7E-46B5-BDC3-7E2F4004E61D",variableType:-4}
 */
var importErrors = [];
/**
 * Array for all labels by unique piecemark and sequence.
 * piecemark_sequence
 * @properties={typeid:35,uuid:"3ECE72A8-66DE-4530-A11E-FC68EC2F8298",variableType:-4}
 */
var importLabelCounts = [];
/**
 * @properties={typeid:35,uuid:"D320B41F-E566-4ACE-B79A-5C010408F785",variableType:-4}
 */
var mappedFormatArray = [];
/**
 * @properties={typeid:35,uuid:"2CA094E2-D297-49C5-A687-D59849A69C23",variableType:-4}
 */
var mappedFormatArrayDescrips = [];
/**
 * Piecemarks added to the job during import.
 * @properties={typeid:35,uuid:"34F61348-32D5-45D4-9185-5B398BBB4856",variableType:-4}
 */
var insertedPiecemarks = [];
/**
 * Idfiles added to the job during import.
 * @properties={typeid:35,uuid:"F9C9CFE1-91DF-4D94-B772-A9B1A820D35C",variableType:-4}
 */
var insertedIdfiles = [];
/**
 * Barcodes added to the job during import.
 * @properties={typeid:35,uuid:"C471583E-4686-44C4-A781-49BAEB7E3D1B",variableType:-4}
 */
var insertedBarcodes = [];
/**
 * Idfiles deleted upon import.  idfile_id pushed.
 * @properties={typeid:35,uuid:"F9239090-32AC-4D5B-815B-A995AF70E0E2",variableType:-4}
 */
var deletedIdfiles = [];
/**
 * Barcodes deleted upon import. barcode_id pushed.
 * @properties={typeid:35,uuid:"10007C61-F298-406A-8C3C-D717E31E43DC",variableType:-4}
 */
var deletedBarcodes = [];
/**
 * Piecemarks deleted upon import.  piecemark_id pushed.
 * @properties={typeid:35,uuid:"32F80DAE-58B1-4023-8602-2C0EB9659BFF",variableType:-4}
 */
var deletedPiecemarks = [];
/**
 * @properties={typeid:35,uuid:"9D617029-0980-460E-9DF3-5EC706C45FC4",variableType:-4}
 */
var browseTable = [];
/**
 * @properties={typeid:35,uuid:"F593B1B5-D143-43BA-94C2-4E60370F60C0",variableType:-4}
 */
var browseFS = null;
/**
 * @properties={typeid:35,uuid:"9EA621AF-0F04-4942-90E3-718AEB4CD2C5",variableType:-4}
 */
var browseFS2 = [];
/**
 * @properties={typeid:35,uuid:"2275F363-AADA-4555-BCD6-F0275FB47BD3",variableType:-4}
 */
var browseFieldOrder = [];
/**
 * @properties={typeid:35,uuid:"94D426C8-A74B-4FD3-A4B7-5CF385E59978",variableType:-4}
 */
var dsBrowse = null;
/**
 * @properties={typeid:35,uuid:"62E36F03-B1F5-4063-A8AF-891E200A3BB3",variableType:-4}
 */
var browseDatasource = null;
/**
 * @properties={typeid:35,uuid:"B326DEE5-0181-4394-991B-0C29B0E30EB9",variableType:-4}
 */
var fsBrowse = null;
/**
 * @properties={typeid:35,uuid:"9BA9D8B3-2090-4DBA-A856-08A0E632FCD0",variableType:-4}
 */
var browseArray = [];
/**
 * @properties={typeid:35,uuid:"A566D185-5E02-4B7A-85E6-1D436EC30D54",variableType:-4}
 */
var dsQuery = [];
/**
 * @type {JSFoundSet<db:/stsservoy/sheets>}
 * @properties={typeid:35,uuid:"E092E2E0-AFB0-46A8-B347-2413E0B6C414",variableType:-4}
 */
var dsSheets = null;
/**
 * Index into dsSheets by sheet_id.
 * dsSheetList.rowIndex = index. dsSheets is sheet_record index.
 * @properties={typeid:35,uuid:"CDD959EC-E7C4-4E04-80E7-3C1B0F60A3DB",variableType:-4}
 */
var dsSheetList = [];
/**
 * Sheet_id indexed by unique sheet_number.
 * dsSheetArray["_"+sheet_number] = sheet_id;
 * @properties={typeid:35,uuid:"02E6FC35-3CDD-4FD8-92EA-AA922BF1587D",variableType:-4}
 */
var dsSheetArray = [];
/**
 * @properties={typeid:35,uuid:"A350E158-5F78-49A9-9114-72EC1E7C7831",variableType:-4}
 */
var dsSheetIds = [];
/**
 * Sheet number index by sheet_id.
 * dsSheetArrayRev[sheet_id] = "_"+sheet_number;
 * @properties={typeid:35,uuid:"12D45FC8-AB40-4511-AD78-17F27DEEE290",variableType:-4}
 */
var dsSheetArrayRev = [];
/**
 * Sheet Bom number index by sheet_bom_id.
 * dsSheetArrayRev[sheet_bom_id] = sheet_id+"_"+item_number;
 * @properties={typeid:35,uuid:"271A8417-A23B-4435-A77B-362002B6BC4B",variableType:-4}
 */
var dsSheetBomArrayRev = [];
/**
 * @properties={typeid:35,uuid:"E8AC1CB8-7418-4998-AF86-3B6DE1DC1C92",variableType:-4}
 */
var dsTossedList = [];
/**
 * @properties={typeid:35,uuid:"084CFD19-545E-49E7-B05C-A2C90972C045",variableType:-4}
 */
var dsTossedArray = [];
/**
 * @type {JSFoundSet<db:/stsservoy/piecemarks>}
 * @properties={typeid:35,uuid:"4CD00661-B5FF-438C-8ECF-DF8231ADA0D6",variableType:-4}
 */
var dsTossed = null;
/**
 * @type {JSFoundSet<db:/stsservoy/piecemarks>}
 * Array of piecemark records, indexed by integer. 
 * @properties={typeid:35,uuid:"0F5956D4-B37C-4F60-B6D4-D4FBA15463C7",variableType:-4}
 */
var dsPiecemarks = null;
/**
 * 
 * @properties={typeid:35,uuid:"DDC9447D-5712-47AA-A5F4-7B7001C2CA23",variableType:-4}
 */
var dsDiffPiecemarks = [];
/**
 * Index integer into dsPiecemarks, indexed by piecemark_id.
 * dsPiecemarkList[piecemark_id] = index.  dsPiecemarks[index] is piecemark_record.
 * @properties={typeid:35,uuid:"54767CFC-2C77-4E6A-B019-52F5DCC7BEED",variableType:-4}
 */
var dsPiecemarkList = [];
/**
 * Index into a piecemark_id array by uniqueness of a piecemark, identified within unique piecemark function.
 * Unique piecemark is defined by function uniquePiecemark().
 * dsPiecemarkArray[unique_piecemark] = piecemark_id.
 * @properties={typeid:35,uuid:"BD7B3C76-9586-459F-AA52-34F44703915C",variableType:-4}
 */
var dsPiecemarkArray = [];
/**
 * @properties={typeid:35,uuid:"E57E7993-B462-4088-82DB-9D3E582F0CA5",variableType:-4}
 */
var dsPiecemarkIds = [];
/**
 * @type {JSFoundSet<db:/stsservoy/idfiles>}
 * Foundset of idfiles.
 * @properties={typeid:35,uuid:"9B090C25-A06C-4C1C-84C3-076FF82AD2C9",variableType:-4}
 */
var dsIdfiles = null;
/**
 * @type {JSFoundSet<db:/stsservoy/idfiles>}
 * @properties={typeid:35,uuid:"56B16BDF-C188-4940-AD2E-C93CD33720A6",variableType:-4}
 */
var dsDiffIdfiles = [];
/**
 * Index integer mapping into dsIdfiles, index by idfile_id. 
 * @properties={typeid:35,uuid:"EBA6F3D2-15BE-467A-A2F4-A986FFF10972",variableType:-4}
 */
var dsIdfileList = [];
/**
 * @type {Array}
 * Holds barcode count, indexed by id_serial_number_id.
 * Holds the barcode count array per idfiles of a piecemark, indexed by unique piecemark for that piecemark.
 * dsIdfileArray[uniquePiecemark+"_"+sequence_id]][barcode1count,barcode2count, barcode3count...]
 * @properties={typeid:35,uuid:"D4896F3B-C26C-4909-8A58-D70B97DFA094",variableType:-4}
 */
var dsIdfileArray = [];
/**
 * List of idfiles for a piecemark, indexed by piecemark_id.
 * dsIdfileListByPm[piecemark_id] = [idfile1,2,3...]
 * @properties={typeid:35,uuid:"3271F450-8CF1-4A8C-A609-81197AA25F6D",variableType:-4}
 */
var dsIdfileListByPm = [];
/**
 * @properties={typeid:35,uuid:"94F84922-8FE5-4B35-BA25-F7ABA6ED6575",variableType:-4}
 */
var dsIdfileCounts = [];
/**
 * @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} 
 * @properties={typeid:35,uuid:"379D5D0A-CAFE-4E7A-A577-83DA059E7451",variableType:-4}
 */
var dsBarcodes = null;
/**
 *  @type {Array} 
 * dsBarcodeList[id_serial_number_id] = [idfile_id,idfile_id,idfile_id,...]
 * idfile_id array list indexed by barcodeid/id_serial_number_id (1..n)
 * id_serial_number indexed by idfile_id (should always be 1..1)
 * 
 * @properties={typeid:35,uuid:"650B30C3-9C2D-49F1-BB67-18DC3AB0F239",variableType:-4}
 */
var dsBarcodeList = [];
/**
 * Holds id_serial_number_id, indexed by id_serial_number/barcode.
 * dsBarcodeArray[dsBarcodes.id_serial_number_id] = index_integer into dsBarcodes.
 * 
 * @properties={typeid:35,uuid:"2EDE049F-DE96-4731-9C8E-2148C1C9817E",variableType:-4}
 */
var dsBarcodeArray = [];
/**
 * @type {JSFoundSet<db:/stsservoy/lots>}
 * @properties={typeid:35,uuid:"7EF30714-EAB5-428C-90EF-91C02547224D",variableType:-4}
 */
var dsLots = null;
/**
 * @properties={typeid:35,uuid:"32ED2AC8-F0E6-4950-A5B1-080334C4308E",variableType:-4}
 */
var dsLotList = [];
/**
 * @properties={typeid:35,uuid:"3D083922-6F7D-4945-B989-EE5680AFAD28",variableType:-4}
 */
var dsLotArray = [];
/**
 * @properties={typeid:35,uuid:"C59E271B-C406-430A-81FD-6646EADB8F6F",variableType:-4}
 */
var newRow = [];
/**
 * @properties={typeid:35,uuid:"03982578-22AC-4930-ABF8-963F11EA6A36",variableType:-4}
 */
var nullRow = [];
/**
 * @type {JSFoundSet<db:/stsservoy/sequences>}
 * dsSequence records. dsSequences[index] = sequence_record.
 * @properties={typeid:35,uuid:"5C8577FB-BDD3-481B-91B7-B1E1A7FE1B7F",variableType:-4}
 */
var dsSequences = null;
/**
 * Sequence List. Index into dsSequences.
 * dsSequenceList[sequence_id] = index.
 * @properties={typeid:35,uuid:"BC6B0F1D-1C82-4CFD-A61E-31BD58F0CBDC",variableType:-4}
 */
var dsSequenceList = [];
/**
 * Sequences indexed by Sheet_number. Since sheet_number may be blank or non-indexed, it is 
 * prefixed by "_".  dsSequenceArray["_"+sequence_number] = sequence_id
 * @properties={typeid:35,uuid:"8B3BE1BD-8328-46A7-9E01-5B7DB3419311",variableType:-4}
 */
var dsSequenceArray = [];
/**
 * Sheet_boms indexed by (piecenumber:CUT or partnumber:BOM) sheet_bom.bom_item_number. Since bom_item_number may be blank or non-indexed, it is 
 * prefixed by "_".  dsSheetBomArray[sheet_id+"_"+bom_item_number] = sheet_bom_id
 * @properties={typeid:35,uuid:"3B152823-C91A-42D5-BE05-CAD505BBF57D",variableType:-4}
 */
var dsSheetBomArray = [];
/**
 * Sheet_bom List. Index into dsSheetBoms.
 * dsSheetBomList[sheet_bom_id] = index.
 * @properties={typeid:35,uuid:"889CBE76-D6BD-48BD-B925-421F2A5D6E36",variableType:-4}
 */
var dsSheetBomList = [];
/**
 * @type {JSFoundSet<db:/stsservoy/sheet_bom>}
 * dsShtBm records. dsShtBms[index] = sheet_bom_record.
 * @properties={typeid:35,uuid:"EF932949-8363-47F9-9829-4AFA0C828B04",variableType:-4}
 */
var dsSheetBoms = null;
/**
 * @properties={typeid:35,uuid:"AE209D66-F602-4D9D-9257-0947BAEAAD78",variableType:-4}
 */
var countsBCandID = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F84565B-D874-4405-87E9-97A68E0CFBE6",variableType:4}
 */
var createdRecords = 0;
/**
 * Status on databaseManager saves.
 * @properties={typeid:35,uuid:"58181832-56B2-4D25-8A27-911AA28EF851",variableType:-4}
 */
var saveStat = true;
/**
 * @properties={typeid:35,uuid:"6C796C63-A327-4B00-B2B7-523C98616F93",variableType:-4}
 */
var usedFields = [];
/**
 * Boolean to set import data append to existing data or not.
 * @properties={typeid:35,uuid:"737686C3-30B9-46CE-B9EB-E2A95A7640CC",variableType:-4}
 */
var appendToData = false;
/**
 * Boolean to indicate quantities have been appended to transitionFS table.
 * @properties={typeid:35,uuid:"8658B10D-6628-4190-9B67-99BD9B3759FD",variableType:-4}
 */
var appendedToData = false;
/**
 * Array of idfiles, unique by uniquePiecemark+SequenceNumber+LotNumber.
 * appendQuantityToIdfile[uniqueIdfile] = existing_item_count
 * @properties={typeid:35,uuid:"850530F1-C9AA-4AB9-8F3B-7340D246DD80",variableType:-4}
 */
var appendQuantityToIdfile = null;
/**
 * @properties={typeid:35,uuid:"0B64648B-2F60-491C-A12A-3BB52932F735",variableType:-4}
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
 * @properties={typeid:35,uuid:"4464F0A8-1659-4A6A-B024-164DEEB6A13B"}
 */
var importJobNumber = "";
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"844A11B3-27FC-488F-9D9A-93CE3F047ECA",variableType:93}
 */
var importDate = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E297B718-8C5D-4CEB-AB0D-E9493CADC3A5"}
 */
var importJobName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B6929EE-6FD2-4D56-BA9D-E9DF0D658837"}
 */
var importFormatType = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9AA1F84B-F5B1-4E3B-ABC3-411C466EF79E"}
 */
var barcodeLast = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6F0C19D9-848F-47E9-83F9-A614969E0DD1"}
 */
var barcodePrefix = "";
/**
 * @properties={typeid:35,uuid:"316F440D-B981-4B90-A55F-F068BA0E2E85",variableType:-4}
 */
var jobName = forms.kiss_option_import.jobName;
/**
 * @properties={typeid:35,uuid:"A778E126-9B4F-4690-BAC7-274DAEBFDDC9",variableType:-4}
 */
var jobDate = forms.kiss_option_import.jobDate;
/**
 * @properties={typeid:35,uuid:"FEAB4A93-0C7F-4118-BF87-E258CAEF8E59",variableType:-4}
 */
var jobMetric = forms.kiss_option_import.jobMetric;

/**
 * @properties={typeid:35,uuid:"49B8FBB4-6075-4F57-8350-B7A859F4A84B",variableType:-4}
 */
var keepMinors = forms.kiss_option_import.keepMinors;
/**
 * @properties={typeid:35,uuid:"D933DD03-155E-459D-BC15-2E6C358D632F",variableType:-4}
 */
var weightPerID = scopes.prefs.wtPrompt;
/**
 * GUI and import update times tracker
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B1643AF3-8032-4E72-98D8-4B4728960A09",variableType:8}
 */
var timeIn;
/**
 * temporary hold table for which columns to hide when saving preferences
 * @properties={typeid:35,uuid:"EE57FC31-E2DF-4A98-AE17-A623EDBC5EE5",variableType:-4}
 */
var tempTableColumnsHide = [];
/**
 * GUI and import update times tracker
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B0B355E-313D-428B-ACE9-98E1C21F88EB"}
 */
var timeOut;
/**
 * GUI and import update times tracker
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3EE1D659-DA56-4BFD-A019-840BDF6EA8D7"}
 */
var timeUpdate;
/**
 * @properties={typeid:35,uuid:"D44384C2-9B69-47F2-AA04-ECB78CE810FB",variableType:-4}
 */
var quantityPerID = scopes.prefs.qtyPrompt;
/**
 * @properties={typeid:35,uuid:"85D45781-FD93-4EF7-A1D6-846C87629203",variableType:-4}
 */
var excludeFS = forms.kiss_option_import.transitionFSsink;
/**
 * @properties={typeid:35,uuid:"E490A83B-D6ED-49ED-8CDA-96BDC429420D",variableType:-4}
 */
var excludeStr = forms.kiss_option_import.jobImportExc;
/**
 * @properties={typeid:35,uuid:"A34DA84B-274C-4894-8EF7-8AA9FDA76ABC",variableType:-4}
 */
var retainStr = forms.kiss_option_import.jobImportSum;
/**
 * @properties={typeid:35,uuid:"C6F318F5-CFFB-40AF-B7AC-793DFB840F7F",variableType:-4}
 */
var fields = forms.kiss_option_import.fieldOrderTempTable;
/**
 * @type {String}
 * Hold customerIDs for a single job number, usually one, but will be additional customer ids.
 * @properties={typeid:35,uuid:"58334991-8845-4A0A-84D2-C34D222F25DC",variableType:-4}
 */
var customerIDs = [];
/**
 * Upon load get jobs in array 
 * @properties={typeid:35,uuid:"35514E2C-458D-4610-AD4F-04B20B0734B2",variableType:-4}
 */
var jobsArray = [];
/**
 * Upon load get customers in array
 * @properties={typeid:35,uuid:"F270F863-EEDC-499F-8AB3-61A81F2134D0",variableType:-4}
 */
var customersArray = [];
/**
 * @properties={typeid:35,uuid:"EA242F21-D65E-4B2A-A2EB-979700E3C5B9",variableType:-4}
 */
var cowInfo = {
	custCode : null,
	commCode : null,
	currency : null,
	weight : null,
	cost : null
}
/**
 * @properties={typeid:35,uuid:"FD3BD48F-924A-4FC9-B22A-86D0529F7E09",variableType:-4}
 */
var jobIDs = [];
/**
 * @type {String}
 * Id for browsing under total table browsing.
 * @properties={typeid:35,uuid:"523D83A0-2E91-4C13-9868-16A2FEE95401"}
 */
var browseJobID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E030DEF8-DDBC-444B-92BB-B3ACCEF20EBB"}
 */
var browseJobIDrecall = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92C27B53-FD1C-4DAA-AE47-EECE51E0E3E0"}
 */
var jobUnderCustomer = "";
/**
 * List of piecemarks under selected job
 * @properties={typeid:35,uuid:"1FF7B5E4-D6DF-486F-886C-31C7F6FA53B4",variableType:-4}
 */
var jobPiecemarks = [];
/**
 * Piecemarks which need to be deleted. in Bulk.  piecemark_id files.
 * @properties={typeid:35,uuid:"8E7AF989-2310-44AF-93D0-C3362B627642",variableType:-4}
 */
var piecemarksToDelete = [];
/**
 * Idfiles which need to be deleted. in Bulk. idfile_id files.
 * @properties={typeid:35,uuid:"E786476B-7F9D-4052-8218-7580126C3C52",variableType:-4}
 */
var idfilesToDelete = [];
/**
 * Barcodes which need to be deleted. in bulk. id_serial_number_id records.
 * @properties={typeid:35,uuid:"5E03D5CF-A937-4047-90AB-FCCEED227050",variableType:-4}
 */
var barcodesToDelete = [];
/**
 * List of sheets under selected job
 * @properties={typeid:35,uuid:"EA7524F8-8CF7-45E1-9455-126DD908513F",variableType:-4}
 */
var jobSheets = [];
/**
 * list of sequences under selected job
 * @properties={typeid:35,uuid:"9D253A7D-9D6D-4A56-ADD7-3607683E64F3",variableType:-4}
 */
var jobSequences = [];
/**
 * list of SOs undder selected job
 * @properties={typeid:35,uuid:"71CD082C-CAE1-44C7-AADC-32558920203C",variableType:-4}
 */
var jobSONums = [];
/** 
 * List of Loads under selected job
 * @properties={typeid:35,uuid:"32BFC748-AF82-4310-ADB4-79356E448738",variableType:-4}
 */
var jobLoadNums = [];
/**
 * List of piecemark references under selected job
 * @properties={typeid:35,uuid:"EB0C2969-B325-48FE-9285-FC3C3C4CA40E",variableType:-4}
 */
var jobPcmkRefs = [];
/**
 * List of FabShops under selected job
 * @properties={typeid:35,uuid:"2DD1A590-684C-4F89-A742-269CA3716104",variableType:-4}
 */
var jobFabShops = [];
/**
 * List of Areas under selected job
 * @properties={typeid:35,uuid:"AFFD7310-7ACF-437C-97C0-D333C8DE98DB",variableType:-4}
 */
var jobAreas = [];
/**
 * List of batches under selected job
 * @properties={typeid:35,uuid:"26C2FE71-9DCA-4BEB-94DC-9897BABB1A8C",variableType:-4}
 */
var jobBatches = [];
/**
 * List of Cost of Work Codes under selected job
 * @properties={typeid:35,uuid:"B69A49A7-938E-418D-ABD6-65A867D644A6",variableType:-4}
 */
var jobCowCodes = [];
/**
 * Selected job's total weight
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"505BBFC6-C546-48AE-9563-5C623FEDCDFE",variableType:4}
 */
var jobWeightTotal = 0;
/**
 * Selected job's number of barcodes
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7D8B0CDD-C44F-489E-B6DB-21D20EC89D4B",variableType:4}
 */
var jobBarcodes = 0;
/**
 * Selected job's total piece count
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"31880E6A-CEF7-4AFC-A3FE-C00E62B47337",variableType:4}
 */
var jobPiecesCount = 0;
/**
 * Selected job's unique piecemark count
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CF832813-8198-4542-AFA9-7FADC42F0B84",variableType:4}
 */
var jobPcmkCount = 0;
/**
 * @type {JSRecord<db:/stsservoy/customers>}
 * Holds the current customer record for import.
 * @properties={typeid:35,uuid:"906528DD-17F1-48BA-8138-AF1281B9FAB9",variableType:-4}
 */
var custRec = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"44D68C89-D2A8-4A33-AE56-B331A94798C6"}
 */
var customerName = "";
/**
 * @properties={typeid:35,uuid:"57218DE7-CFFF-4515-BC9E-3BC44EAC2EB2",variableType:-4}
 */
var columnNames = forms.kiss_option_import.columnNames; // columnNames indexed into array
/**
 * @properties={typeid:35,uuid:"29D08B1A-6F86-4174-A15A-22389E84F787",variableType:-4}
 */
var columnNames2 = []; // columnNames for browsing sql-based forms
/**
 * @properties={typeid:35,uuid:"C6080A1D-540A-43FB-9355-7FAC623556CC",variableType:-4}
 */
var removeColumns = [];
/**
 * Keep separate count for job load information browsing.
 * @type {String}
 * @properties={typeid:35,uuid:"A47E8F7D-55C1-4AFD-B99E-B0EC2550577D"}
 */
var loadCountsJobId = null;
/**
 * @properties={typeid:35,uuid:"9CB351AA-6386-40DD-930F-EB4F8FAC1B8A",variableType:-4}
 */
var tablePKs = ['tenant_uuid','sheet_id','sequence_id','piecemark_id',
	'idfile_id','loads_id','status_description_id','e_route_code_id','routing_id','job_id',
	'lot_id','id_creation_date','id_serial_number_id','association_uuid'];
/**
 * tableOrderingArray[index'order'] = columnName
 * @properties={typeid:35,uuid:"D84C99AE-83ED-4CCF-8E46-EF04C91D7310",variableType:-4}
 */
var tableOrderingArray = [];
/**
 * tableOrderingData = [columnName,positionX,columnLength,visible]
 * @properties={typeid:35,uuid:"B6F870F6-7289-48CA-94C0-A55F7C09B933",variableType:-4}
 */
var tableOrderingData = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87F3D869-B9A7-48C7-8999-23B6846CB1B1"}
 */
var generalTableOrderTableName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B17BC4C9-E95D-4FF9-949D-279980B5BC4F"}
 */
var versionForm = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5AF6B259-F824-40AC-8F10-D8BE7026D745"}
 */
var tmp_LabelSort = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4BB0BEFA-515B-474C-8724-84CACB9983BE"}
 */
var tmp_Print = "";
/**
 * @properties={typeid:35,uuid:"45E91B19-B7F1-4698-8FA3-ABB291689E88",variableType:-4}
 */
var parseArray = [];
/**
 * @properties={typeid:35,uuid:"29AC33CB-4512-4984-95E9-5253F6CAAAC4",variableType:-4}
 */
var parseLines = [];
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"76AF8134-6F2B-4121-8AE6-188FD7D73AB4",variableType:4}
 */
var recordSaveLimit = 20;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5891FBC7-E3EA-4FD5-A3F9-DF13E164C9FA",variableType:4}
 */
var recordSaveDur = 40;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98D6A927-CC78-45B9-81FF-D61AC274CEAE",variableType:4}
 */
var idCreationCount = 0;
/**
 * List of new barcodes if they are not located in the db by primary key, meaning they are not yet saved
 * @properties={typeid:35,uuid:"D0941EF1-76D8-4F8F-922D-A81F2CED8E7A",variableType:-4}
 */
var idBarcodePool = [];
/**
 * This is to keep a cache of import records by primary key as the index, so that they may be cached 
 * while building piecemarks during the import process.
 * 
 * @properties={typeid:35,uuid:"EA32D139-BDEA-431F-B84C-85B28895F56E",variableType:-4}
 */
var importRecordCache = [];
/**
 * @properties={typeid:35,uuid:"CCD947DF-E1D0-44E8-9156-B9F5AF508D95",variableType:-4}
 */
var idfilePool = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"97F15446-9FFF-4D0D-9A59-B80DB0371745"}
 */
var remainingTime = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7D68774A-7084-4490-85C9-6D35AFB25E52",variableType:4}
 */
var createdIdfileCount = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C3CAD2C2-DB5D-4A2B-BAF5-A7EFE17AD709",variableType:4}
 */
var commitStart = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B44F52AD-4821-4B61-8B14-4DBB0C1EC13A",variableType:4}
 */
var commitLastDur = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E24C1F87-8968-4F1E-9615-A7FC37860C92",variableType:4}
 */
var commitRecAt = 20;
/**
 * @properties={typeid:35,uuid:"AC75A1D0-67CC-40E5-8F8E-9F0D97347664",variableType:-4}
 */
var i18nColumnNames = [];
/**
 * @properties={typeid:35,uuid:"F3EEAEAA-AC80-442B-9C22-0E11DADF5881",variableType:-4}
 */
var dsQuerySave = [];
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
 * @properties={typeid:24,uuid:"572C709C-5984-4FAA-9EFC-CB7738A8FE28"}
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
 * @properties={typeid:24,uuid:"CE89DA18-B60E-4ECB-A003-860BED5AD4B6"}
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
 * @properties={typeid:24,uuid:"43E161F1-BDDC-4019-9B37-E2263D4C2866"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"867AA77B-A76C-4F66-A3DD-F80ACD6A0699"}
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
 * @properties={typeid:24,uuid:"86255815-5347-479B-AF2D-55778E4DF0EB"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"9DE8FC30-5705-47E1-B2E0-05D7F9AA9A4F"}
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
 * @properties={typeid:24,uuid:"5F8167FE-C1DF-499A-835E-497FE1260FF2"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"4A2A8BE1-2494-470B-B5F1-029F6E69E481"}
 * @SuppressWarnings(wrongparameters)
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
 * @param sheetId
 *
 * @properties={typeid:24,uuid:"F19577F0-F617-452A-83AF-7208565D45DB"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"AFA4B946-C698-4D8D-8EE1-37B282DD3BC9"}
 * @SuppressWarnings(wrongparameters)
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
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"0F4A5AB0-7805-44A5-8BB9-DAAC25E24150"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"8691EA68-B1E1-4815-A878-AD60BDC0B929"}
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
 * @properties={typeid:24,uuid:"3BD3B478-4AF1-4C64-BEC8-7A14C5CAFF18"}
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
 * @properties={typeid:24,uuid:"BFD7E5BF-5ED9-4B9B-BD87-7423A902FFB7"}
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
 * @properties={typeid:24,uuid:"44B4B0B6-DDE4-4BA3-B129-A2F7BA413F18"}
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
 * @properties={typeid:24,uuid:"B5E0D2DF-099B-46C7-A8C6-44CA9DF0D09D"}
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
 * @properties={typeid:24,uuid:"99D86CE4-07A3-4625-8174-9F332A538ACD"}
 * @AllowToRunInFind
 */
function onGetInformationX(event,flaggedDeleted) {
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
 * @properties={typeid:24,uuid:"14DEEB4E-751E-49C1-9413-A3019516DB6D"}
 * @AllowToRunInFind
 */
function tablePrefsSaveX(event){
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
 * @properties={typeid:24,uuid:"5A86864F-9E7D-4360-B2ED-A560C169623F"}
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
 * @properties={typeid:24,uuid:"D24C1FF9-3120-488F-8A7E-FEE2E8A48D82"}
 * @SuppressWarnings(wrongparameters)
 */
function viewBTableRemoveColumnArray(){
	for (var index=removeColumns.length-1;index > -1;index--){
		browseFS2[versionForm].removeColumn(removeColumns[index]);
	}	
}
/**
 * @properties={typeid:24,uuid:"28B0AC58-327F-49AD-8C12-D4A87EF0E894"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"CA416456-63D1-4201-8A14-AA2BE558094B"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"8A450FAC-741E-4BF2-A98F-92790F073662"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"45A2608F-DF18-4BAE-B137-44FD41D23A77"}
 * @AllowToRunInFind
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
 * @param columnName
 * @param content
 *
 * @properties={typeid:24,uuid:"784F88EE-9CEB-40C4-B720-54D4928FF9C1"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"A7AE0B04-B8F0-4939-A721-E2698FF530FA"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"A2125947-31D2-4027-B244-E012A6567B59"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function createIdfileRecord(pmkUniq,piecemarkId,sequence,lot,barcodeId,quantity,origQuant,summQuantity,remarks){
	//if (dsIdfileArray){return dsIdfileArray
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var fs = databaseManager.getFoundSet('stsservoy','idfiles');

	var seqId = dsSequenceArray["_"+sequence];
	if (!seqId){seqId = createSequenceNumber(sequence)}
	var lotId = dsLotArray["_"+lot+"|_"+sequence];
	if (!lotId){lotId = createLotNumber(lot,sequence)}
	
	if (!barcodeId){
		barcodeId = createValidBarcode();
	}

	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	if (application.isInDeveloper()){application.output(recIndex+' created idfile '+rec);}
	rec.piecemark_id = piecemarkId;
	rec.sequence_id = seqId;
	rec.lot_id = lotId;
	rec.id_serial_number_id = barcodeId;
	rec.tenant_uuid = globals.session.tenant_uuid;
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
	rec.id_creation_date = importDate;
	if (forms.import_performance_setting.insJobSO){
		rec.shop_order = forms.import_performance_setting.insJobSO;
	}
	//createdRecords++;
	return rec;
}
/**
 * @param fsRec
 * @param unique
 *
 * @properties={typeid:24,uuid:"35BDF200-4B33-4380-9746-D44B53F163FC"}
 * @AllowToRunInFind
 */
function createPiecemark(fsRec,unique){
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	commitTransactions();
	warningsMessage('Create pm '+unique);
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	rec.job_id = scopes.jobs.jobUnderCustomer;
	rec.tenant_uuid = globals.session.tenant_uuid;
	rec.material = fsRec.material;
	rec.finish = fsRec.finish;
	rec.grade = fsRec.grade;
	rec.item_length = fsRec.item_length*1;
	rec.item_quantity = fsRec.item_quantity;
	rec.item_weight = fsRec.item_weight;
	rec.item_weight_lbs = scopes.globals.kgToLb(fsRec.item_weight);
	rec.item_length_in = scopes.globals.mmToIn(fsRec.item_length);
	rec.parent_piecemark = fsRec.parent_piecemark
	rec.piecemark = fsRec.piecemark;
	rec.sheet_id = dsSheetArray["_"+fsRec.sheet_number];
	///var routeCode = fsRec.e_route_code;
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
	createdRecords++;
}

/**
 * @param sheetNumber
 *
 * @properties={typeid:24,uuid:"039F7538-22A0-4C09-BD85-FE9ED186F966"}
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
 * @properties={typeid:24,uuid:"C69E27A8-6A48-41A4-965E-203DC14DEC4A"}
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
 * @param sequenceNumber
 *
 * @properties={typeid:24,uuid:"94C0C292-78B1-4029-AC41-08153C635676"}
 * @AllowToRunInFind
 */
function createSequenceNumber(sequenceNumber){
	var unique = "_"+sequenceNumber;
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
	var fs = databaseManager.getFoundSet('stsservoy','sequences');
	if (dsSequenceArray[unique]){return dsSequenceArray[unique]}
	var recIndex = fs.newRecord();
	var rec = fs.getRecord(recIndex);
	rec.sequence_number = sequenceNumber;
	rec.job_id = scopes.jobs.jobUnderCustomer;
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
 * @properties={typeid:24,uuid:"90F9B755-75C6-4673-BE5D-4F6DC6DC9512"}
 * @AllowToRunInFind
 */
function createLotNumber(lotNumber,sequence){
	var uniqueLot = '_'+lotNumber;
	var uniqueSeq = '_'+sequence;

	var unique = uniqueLot+"|_"+uniqueSeq;
	if (dsLotArray[unique]){return dsLotArray[unique]}
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	var recIndex = fs.newRecord();
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
 * @properties={typeid:24,uuid:"234B6EE5-1FBC-4C47-8303-B9A8D35A968F"}
 */
function createLotNumbers(){
	databaseManager.startTransaction();
	warningsMessage('Creating lots.');
	///var newItems = [];
	var retainFS = forms.kiss_option_import.transitionFS;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	for (var index = 0;index < rows;index++){
		retainFS.rowIndex = index+1;
		var seq_num = retainFS.sequence_number;
		var lot_num = retainFS.sequence_lot_number;
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
			commitTransactions();
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
	//createRecordsArray = [];
	if (databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.commitTransaction();}
}
/**
 * @properties={typeid:24,uuid:"EC33F91A-05F5-41A5-831C-857B708912DD"}
 */
function createSequenceNumbers(){
	databaseManager.startTransaction();
	warningsMessage('Creating sequences.');
	var newItems = [];
	var retainFS = forms.kiss_option_import.transitionFS;
	var rows = forms.kiss_option_import.transitionFS.getMaxRowIndex();
	scopes.globals.importRecordCount = length;
	///var insertCount = 0;//how many lines to insert with this barcode
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
		commitTransactions();
		createSequenceNumber(newItems[index]);
		//dsSequenceList[rec.sequence_id] = newItems[index];
	}
	
	databaseManager.commitTransaction();
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E7F28924-AB5E-4156-8E66-38353F110FE5"}
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
		var barcode_include_prefix = custRec2.barcode_include_prefix;
		var barcode_prefix_label = custRec2.barcode_prefix;
		var barcode_preamble_length = custRec2.barcode_preamble_length;
		var barcode_job_start = custRec2.barcode_job_start;
		var barcode_fixed_length = custRec2.barcode_fixed_length;
		var jobNumber = importJob.jobNumber;
		// If prefix is not two characters, pad with "P"
		if (barcode_prefix_label.length == 1){barcode_prefix_label = "P"+barcode_prefix_label}
		// Pad job number if too short
		var lengthJobNeeded = 0;
		lengthJobNeeded = (barcode_preamble_length == 4) ? 2 : 3;
		lengthJobNeeded = (barcode_include_prefix == i18n.getI18NMessage('sts.label.barcode.include.prefix')) ? lengthJobNeeded : lengthJobNeeded*1 + 2;
		while (jobNumber.length < lengthJobNeeded){
			jobNumber = "0"+jobNumber; // #76 pad job number for barcode creation
		}

		var bPrefix = barcode_include_prefix == i18n.getI18NMessage('sts.txt.barcode.include.prefix') ? true : false;
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
		createBarCodeSerial();
	}
	return barcodePrefix;
}
/**
 * @properties={typeid:24,uuid:"B16AB869-1385-422D-AE81-39AD47A9E7B4"}
 * @AllowToRunInFind
 */
function createBarCodeNextNumberK(){
	///var barcodeLength = scopes.prefs.barcodeLength;
	var prefix = createBarCodePrefix(); // serial is loaded in this call, too
	///var serialLength = barcodeLength-barcodePrefix.length;
	var serial = countUpNumbers(barcodeLast);
	return prefix+serial;
}
/**
 * @properties={typeid:24,uuid:"BCCE02C0-1777-4531-885F-A15D1AB4B98F"}
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
 * @param serial
 *
 * @properties={typeid:24,uuid:"A7DD2FA9-39E5-4123-A543-A41E6D4B63F0"}
 */
function countUpNumbers(serial){
	if (!custRec){
		var serialLength = serial.length;
	} else {
		serialLength = scopes.prefs.barcodeLength-custRec.barcode_preamble_length;
	}
	var padZeroes = "000000000000000000000000000000";
	///var numLength = serialLength-custRec.barcode_preamble_length; // zero is prefix length
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
	if (barcodeLast.length != serialLength){barcodeLast = "000000000".substr(0,serialLength)} //wrap to all zeroes
	return barcodeLast;
}
/**
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
 * @properties={typeid:24,uuid:"7C32E63D-9AD0-473F-B146-705DE8B3E68C"}
 * @AllowToRunInFind
 */
function createBarCodeSerial(){
	if (barcodePrefix == "") {return}
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
	} else {
		var recIndex = B.newRecord();
		rec = B.getRecord(recIndex);
		rec.serial = 0;
		rec.tenant_uuid = globals.session.tenant_uuid;
		rec.prefix = barcodePrefix;
		rec.edit_date = new Date();
		databaseManager.saveData(rec);
	}
	barcodeLast = rec.serial;
}
/**
 * @properties={typeid:24,uuid:"1668236D-BFCD-42D5-BC2F-36B767DD09C8"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"89287D7F-6E72-4A30-8E10-3D8F4268A46C"}
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
 * @properties={typeid:24,uuid:"8F81FA19-1380-4635-8F1D-16C3D6AAD275"}
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
 * @properties={typeid:24,uuid:"900C5960-678A-433E-9FD9-9A15388C2368"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"CE27525E-3CCF-4431-B250-555756249AE8"}
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
 * @properties={typeid:24,uuid:"58DDAB06-73D8-46ED-8243-DFD286C220F3"}
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
 * @properties={typeid:24,uuid:"518DA0F5-7B81-4E38-AAFC-374B2BC7424A"}
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
 * @properties={typeid:24,uuid:"5796C81D-F2E2-479E-8B71-616BC5ED206B"}
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
 * @properties={typeid:24,uuid:"EA8A5666-7188-44FA-BD6A-DFC4ABC5C383"}
 * @SuppressWarnings(hides)
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 * @SuppressWarnings(unused)
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
 * @properties={typeid:24,uuid:"44394894-C88C-4BD2-B97E-5F376DB12520"}
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
 * @SuppressWarnings(wrongparameters)
 */
function deleteIdfiles(){
	// get idfiles, get barcodes for idfiles, then retrieve remaining idfiles from that barcode
	// delete idfiles, associated piecemarks, 
	var index = 0;
	///var lots = [];
	var barcodes = [];
	var piecemarks = [];
	///var piecemarkRec = null;
	if (scopes.jobs.idfilesToDelete.length == 0){return}

	//databaseManager.startTransaction();
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i = databaseManager.createSelect('db:/stsservoy/idfiles');
	i.result.add(i.columns.idfile_id);
	//i.result.add(i.columns.id_serial_number_id);
	i.result.distinct = true;
	i.where.add(i.columns.idfile_id.isin(scopes.jobs.idfilesToDelete));
	i.where.add(i.columns.delete_flag.isNull);
	var resultII = databaseManager.getFoundSet(i);
	var subIdfiles = [];
	//var id2 = 1;
	for (var id2 = 1;id2 <= resultII.getSize();id2++){
		subIdfiles.push(resultII.getRecord(id2).id_serial_number_id);
	}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var j = databaseManager.createSelect('db:/stsservoy/idfiles');
	j.result.add(j.columns.idfile_id);
	j.result.add(j.columns.id_serial_number_id);
	j.result.add(j.columns.delete_flag);
	j.result.add(j.columns.deleted_date);
	j.where.add(j.columns.id_serial_number_id.isin(subIdfiles));//get associated idfiles
	
	var resultI = databaseManager.getFoundSet(i);
	resultII = resultI.duplicateFoundSet();
	index = 1;
	while (index <= resultI.getSize()){
		/** @type {JSRecord<db:/stsservoy/idfiles>} */
		var rec = resultI.getRecord(index);
		if (barcodes.indexOf(rec.id_serial_number_id+"") == -1){
			barcodes.push(rec.id_serial_number_id+"");
		}
		if (piecemarks.indexOf(rec.piecemark_id+"") == -1){
			piecemarks.push(rec.piecemark_id+"");
		}
		index++;
	}
	
	if (scopes.jobs.idfilesToDelete.length > 0){
		/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
		var p =  databaseManager.createSelect("db:/stsservoy/id_serial_numbers");
		p.result.add(p.columns.id_serial_number_id);
		p.result.add(p.columns.delete_flag);
		p.result.add(p.columns.edit_date);
		p.where.add(p.columns.id_serial_number_id.isin(barcodes));
		var resultB = databaseManager.getFoundSet(p);

		/** @type {QBSelect<db:/stsservoy/transactions>} */
		var pp = databaseManager.createSelect("db:/stsservoy/transactions");
		pp.result.add(pp.columns.trans_id);
		pp.result.add(pp.columns.delete_flag);
		pp.result.add(pp.columns.edit_date);
		pp.where.add(pp.columns.idfile_id.isin(i));
		var resultT = databaseManager.getFoundSet(pp);
		
		/** piecemarksCheck[] holds all piecemark that have had piecemarks deleted
		 * piecemarksKeep[] identifies piecemarks with active idfiles
		 * pop piecemarksCheck[] and push to piecemarksDelete unless it is in piecemarksKeep[]
		 */
		var piecemarksCheck = [].concat(piecemarks);
		var piecemarksKeep = [];
		var piecemarksDelete = [];
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var u = databaseManager.createSelect("db:/stsservoy/idfiles");
		u.result.add(u.columns.piecemark_id);
		u.where.add(u.and
				 .add(u.columns.piecemark_id.isin(piecemarks))
				 .add(u.columns.idfile_id.not.isin(idfilesToDelete))
				 .add(u.columns.delete_flag.isNull)
				 .add(u.columns.tenant_uuid.eq(globals.session.tenant_uuid))
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
			var piecemark = piecemarksCheck.pop();
			if (piecemarksKeep.indexOf(piecemark) == -1){
				piecemarksDelete.push(piecemark);
			}
		}
		if (piecemarksDelete.length > 0){
			/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
			u = databaseManager.createSelect("db:/stsservoy/piecemarks");
			u.result.add(u.columns.piecemark_id);
			u.result.add(u.columns.delete_flag);
			u.result.add(u.columns.edit_date);
			u.where.add(u.and
					 .add(u.columns.piecemark_id.isin(piecemarksDelete))
					 .add(u.columns.delete_flag.isNull)
					 .add(u.columns.tenant_uuid.eq(globals.session.tenant_uuid))
				);
			resultP = databaseManager.getFoundSet(u);
			
		}
	}
	
	//null;
	var deleteDate = new Date();
	if (resultI.getSize() > 0){
		var delIdfiles = databaseManager.getFoundSetUpdater(resultII);
		delIdfiles.setColumn('delete_flag',99);
		delIdfiles.setColumn('deleted_date',deleteDate);
		var status = delIdfiles.performUpdate();
		if (application.isInDeveloper()){application.output('updated '+status)}
		scopes.jobs.idfilesToDelete = [];
	}
	if (false && resultB.getSize() > 0){
		var delBarcodes = databaseManager.getFoundSetUpdater(resultB);
		delBarcodes.setColumn('delete_flag',99);
		delBarcodes.setColumn('edit_date',deleteDate);
		delBarcodes.performUpdate();
	}
	if (false && resultT.getSize() > 0){
		var delTrans = databaseManager.getFoundSetUpdater(resultT);
		delTrans.setColumn('delete_flag',99);
		delTrans.setColumn('edit_date',deleteDate);
		delTrans.performUpdate();
	}
	var delPms = databaseManager.getFoundSetUpdater(resultP);
	if (false && piecemarksDelete.length > 0){
		delPms.setColumn('delete_flag',99);
		delPms.setColumn('edit_date',deleteDate);
		delPms.performUpdate();
	}
	//databaseManager.commitTransaction();
}
/**
 *
 * @properties={typeid:24,uuid:"F3C9FF19-63E4-424D-86B6-E0F3544C31B3"}
 */
function recallDeletedBarcodes(){
	var recall = true;
	purgeDeletedBarcodes(recall);
}
/**
 * @param {Boolean} recall
 * 
 * @properties={typeid:24,uuid:"F824C0EF-A3A4-4F93-813F-CAED4FC5BE36"}
 * @SuppressWarnings(wrongparameters)
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
 * Uses array scopes.jobs.piecemarksToDelete
 * Delete - flag a piecemark as deleted.
 *  flag all idfiles idfiles.piecemark_id
 *  flag all summarized records piecemarks.job_id
 *  flag all barcodes id_serial_number_id.idfile_id
 *  flag all transaction history transactions.idfile_id
 *  flag all sequences sequences.sequence_id
 *
 * @properties={typeid:24,uuid:"EEDD963D-A1E8-4596-B2BC-D1A69196B1FD"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"402FD64E-FFF8-4F3B-99A7-F526FC2A2557"}
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
 * @param formName
 *
 * @properties={typeid:24,uuid:"4FE55909-73F9-4F37-8413-79AF14AE5FCC"}
 */
function removeFormHist(formName){
	//application.getActiveWindow().
	var statHis = history.removeForm(formName);
	var statMod = solutionModel.removeForm(formName);
	if (application.isInDeveloper()){application.output(formName+' history remove: '+statHis+' solution model remove form: '+statMod);}
	return (statHis && statMod);
}
/**
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
				if (application.isInDeveloper()){application.output('create piecemark '+unique)}
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
 * @param record
 * unique idfile is piecemark_id, barcodeCount, sequence_id, lot_id

 * @properties={typeid:24,uuid:"18AB23B9-D9C1-40BB-9F8D-74AFA04C134D"}
 */
function uniqueIdfile(record){ 
	return record.piecemark_id+","+record.sequence_id+","+record.lot_id;
}
/**
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
 * @properties={typeid:24,uuid:"56855B40-E53E-4957-AE99-CA057371608D"}
 */
function preserveHistory(record){
	var loseHist = record.action.search('LOSE') != -1;
	return !loseHist;
}
/**
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
	if (forms.kiss_option_import.importOption.search('Overwrite') == -1){
		for (var index = 0; index < tDbIdFiles.length;index++){ // get idfiles that are for this sequence and lot
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
		var thisBarcodeId = dsIdfiles.id_serial_number_id;
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
 * @param record
 * @param correct
 *
 * @properties={typeid:24,uuid:"724D3E52-B02F-4CB1-96D5-531AE5BD2207"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function importRecordCheckIdfileCount(record,correct){
	// How many idfiles for the piecemark 
	// How many barcodes for each prospective idfile
	// printed idfiles cannot be changed
	var bc="";//idfile, barcode messages
	var nums = dbRecCounts(record);
	var uniquePm = uniquePiecemark(record);
	var pcmkId = dsPiecemarkArray[uniquePm];
	///var deleteLine = (record.action == "Delete");
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
		///summaryQuant = nums.inLabelQntEa ;// save to idfile in original_qty to retain accountability
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
	///var origQuant;
	var newIdfileRecs = [];
	var newIdfileIds = [];
	if (edited){
		var action = record.action;
		if (application.isInDeveloper()){application.output('actions to be taken '+action);}
		var orphanIdfileList = [];

		orphanIdfileList = createNumberBarcodes(orphanIdfileList);
		if (application.isInDeveloper()){application.output('created barcodes '+nums.bcAdd);}
		
		orphanIdfileList = deleteNumberBarcodes(orphanIdfileList);
		if (application.isInDeveloper()){application.output('deleted barcodes '+nums.bcDel);}
		
		if (nums.idfileAdd > 0){  // include orphans first, and then new idfiles to orphan list, not yet allocated to barcode
			var createNumberIdfiles2 = (orphanIdfileList.length >= nums.idfileAdd) ? 0 : nums.idfileAdd - orphanIdfileList.length;
			///origQuant = (summaryRec) ? createNumberIdfiles2:1;//summary record processing
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
				if (application.isInDeveloper()){application.output('----create quant '+createQuant+' item count '+nums.inItemCnt+' summQuant '+summQuant);}
				var newIdfileRec = createIdfileRecord(uniquePm,pcmkId,idSequence,idLot,bcCode,createQuant,nums.inItemCnt,summQuant,record.remarks);
				var guid = getValidGuidMajMin(record.guid_hideindex);
				newIdfileRec.guid_major = guid.major;
				newIdfileRec.guid_minor = guid.minor;
				newIdfileRecs[newIdfileRec.idfile_id] = newIdfileRec;
				newIdfileIds.push(newIdfileRec.idfile_id);
				//nums.bcIdfiles[barCode].push(newIdfileId);
				nums.dbIdfiles.push(newIdfileRec.idfile_id);
				orphanIdfileList.push(newIdfileRec.idfile_id);
				idfilePool.push(newIdfileRec);
				createNumberIdfiles2 -= 1;//was createQuant, but that is only copied to the idfile, not creating idfiles, BUT summarized items are set otherwise
			}
			if (application.isInDeveloper()){application.output('added idfiles z'+nums.idfileAdd)}
		}
		
		if (nums.idfileDel > 0){
			if (application.isInDeveloper()){application.output('deleting idfiles '+nums.idfileDel)}
			var deleteNumberIdfiles = (orphanIdfileList.length >= nums.idfileDel) ? 0 : nums.idfileDel - orphanIdfileList.length;
			var index7;
			for (index7 = nums.bcCodes.length-1;index7 >= 0;index7--){//start at end of allocated barcodes
				var barId7 = nums.bcCodes[index7].id_serial_number_id;
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
			if (application.isInDeveloper()){application.output('deleted idfiles '+nums.idfileDel);}
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
			/** @type {Array} */
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
		 * SAVE all save records or an sql search will not find new records, NOW use caching. SAVE too slow.
		 * all idfiles for this listing
		 * check to see if already in a barcode for this pm
		 * add to barcode within bc limit
		 * save idfile changes
		 */
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
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
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
			var shortIdlist = dsIdListForPmDyn2;
			///var length = nums.bcCodes.length;
			//for (var indexId = 1;indexId <= dsIdListForPmDyn2.getSize();indexId++){
			//	existingIds.push(shortIdlist.getRecord(indexId));
			//}
			//application.output('existing '+existingIds.length+' created '+idfilePool.length);
			
			for (var indexId = 0;indexId < idfilePool.length;indexId++){
				//shortIdlist.setSelectedIndex(indexId);
				/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
				var recIdfile = idfilePool[indexId];
				if (nums.bcCodes.indexOf(recIdfile.id_serial_number_id) == -1){ //not already in bc
					var recId = recIdfile.idfile_id;
					barId = idfileBarcodes[recId];
					recIdfile.id_serial_number_id = barId; // add idfile to barcode #task 12
					recIdfile.summed_quantity =  (summaryRec) ? finalBcCounts[nums.bcCodes.indexOf(barId)] : 1;
					barList.push(recIdfile.idfile_id+""); // update barList

					warningsMessage('Id File normalization.');
					///saveRec = true;
				}
			}
		}
		warningsMessage('Update idfile barcodes.',true);
		//databaseManager.saveData();
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
 * @properties={typeid:24,uuid:"D9999ACD-2FBC-4187-9D7B-0AF13810CB50"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"7151B6F4-4020-4235-96A4-23D7E120A974"}
 */
function importRecords_append(){
	///var append = true; // ceremonial. Don't use this variable.
	// see importAmendQuantities() for adjustments to append quantities
	importRecords_sheet();
}
/**
 * @properties={typeid:24,uuid:"C1F04FD4-C30C-4FDA-8C8F-E2148BD8BE31"}
 */
function importRecords_overwrite(){
	warningsMessage('Overwrite - Deleting current job information.')
	importRecordsDelete();
	///var append = false;
	warningsMessage('Overwrite - New Data . . .');
	importRecords_sheet();
}
/**
 * @properties={typeid:24,uuid:"011150DC-20FC-44C0-B2EB-09220E02CEE9"}
 * @AllowToRunInFind
 */
function importRecords_sheet(){
	///var jobID = scopes.jobs.jobUnderCustomer;;
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

	if (databaseManager.saveData()){
		databaseManager.commitTransaction();
	}
	databaseManager.startTransaction();
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
	commitTransactions();
	
	//readPiecemarks();
	var recStart = new Date().getTime();
	if (!databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.startTransaction()}
	createdIdfileCount = 0;
	for (index = 0;index < rows;index++){
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
	createSummedMarks(forms.kiss_option_import.transitionFSsumm);
	commitTransactions();
	warningsMessage('Summed piecemarks saving.',true);
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
	forms.kiss_option_import.elements.btn_Apply.enabled = false;
	forms.kiss_option_import.elements.btn_Import.enabled = false;
	scopes.kiss.performImportTable();
	forms.kiss_option_import.onHide(null);

	if (1==1){return}
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
 * @properties={typeid:24,uuid:"99C38E1E-7B95-45DB-B7D0-6159795027B0"}
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
 * @properties={typeid:24,uuid:"66BEB95D-FBC3-425B-A053-FBDE880FD40C"}
 */
function onDataChangeInteger(oldValue, newValue, event) {
	return globals.maxIntExceeded(newValue);
}
/**
 * @AllowToRunInFind
 * 
 * @param {JSRenderEvent} event
 *
 * @properties={typeid:24,uuid:"27C24432-1586-436B-B85A-7F4F828C9BED"}
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
 * @properties={typeid:24,uuid:"C0806BF2-83BB-4205-86A1-7CF2CD84FAB0"}
 */
function barTenderTest(event){
	sampleBCPrint(event)
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E630752F-1C0A-4B0A-807A-4D6D6A89E836"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"65F90DE8-D597-49A9-8775-E363E7F2A303"}
 * @AllowToRunInFind
 */
function onDataChangeJobNumberX(oldValue, newValue, event) {
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
		if (application.isInDeveloper()){application.output('formformform '+formName)}//remove jobinfo task 20171226
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
		//var info = getJobIdInfo(newValue);// remove jobinfo on job selection task 20171226
		//forms[info.topForm].jobIdData = info; // remove jobinfo on job selection task 20171226
		if (formName.search("barcode_idlabel") == -1 || formName.search(/(recall|remove)/) != -1){
			browseInfoEnable(event);
			//scopes.jobs.onGetInformation(event,false);// remove jobinfo on job selection task 20171226
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
 * @properties={typeid:24,uuid:"B38E1BA8-9F7D-4BB4-B8D2-6EA0AFD15C71"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"0AD92C53-8AC8-4015-B333-726F34D77950"}
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
 * @properties={typeid:24,uuid:"32312F45-ECD5-4CCB-8D60-D49BDF6B7D66"}
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
 * Get job info with jobNumber, returning arrays of sheets, loads, etc
 * big procedure. may break into smaller
 * return {topForm : parent, job_id : jobId, job_num : jobNum};
 * 
 * @param jobNum
 *
 * @properties={typeid:24,uuid:"1B7090BE-FEB1-4719-9E5F-71BEF50AF6B3"}
 * @SuppressWarnings(wrongparameters)
 */
function getJobIdInfo(jobNum){
	/*
	 * return sequence_number, load_number, load_release, customer so, shop, Lot, package, area, batch, drawing num, 
	 */
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var p = databaseManager.createSelect('db:/stsservoy/jobs');
	p.result.add(p.columns.job_id);
	p.result.add(p.columns.association_id);
	p.result.distinct = true;
	p.where.add(
	p.and
		.add(p.columns.delete_flag.isNull)
		.add(p.columns.tenant_uuid.eq(globals.session.tenant_uuid))
		.add(p.columns.job_number.eq(jobNum))
	);
	var fsJ = databaseManager.getFoundSet(p);
	/** @type JSRecord<db:/stsservoy/jobs> */
	var rec = fsJ.getRecord(1);
	var jobId = rec.job_id;

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
	return {topForm : parent, job_id : jobId, job_num : jobNum};
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
 * @properties={typeid:24,uuid:"E7991386-6C19-43BF-88E8-69707BC20B19"}
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
 * @properties={typeid:24,uuid:"89C9B487-F698-454D-8492-73F53E0E0792"}
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
 * @properties={typeid:24,uuid:"36D53BE3-C27F-4782-B6B3-1D1DB85E7BD7"}
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
 * @properties={typeid:24,uuid:"50BDC897-3F5D-4896-8FFB-FC12370D5F6A"}
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
 * @properties={typeid:24,uuid:"16F69129-5837-49DF-90C4-FA8FD2852830"}
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
 * @properties={typeid:24,uuid:"EACC48AD-95DA-4DF1-8399-54BAE5EB7272"}
 */
function createNumberBarcodes(orphanIdfileList){
	var nums = scopes.jobs.countsBCandID;
	var createNumBarcodes = nums.bcAdd;
	while (createNumBarcodes > 0){  // add barcodes
		var newBcRec = createValidBarcode();
		var newBcId = newBcRec.id_serial_number_id;
		nums.bcCodes.push(newBcId);
		dsBarcodeList[newBcId] = []; // update listing of idfles 
		nums.bcIdfiles[newBcId] = [];//comment out
		//nums.dbIdfiles.push(newBcId);
		createdRecords++;
		commitTransactions();
		createNumBarcodes--;
	}
	return orphanIdfileList;
}
/**
 * @param orphanIdfileList
 *
 * @properties={typeid:24,uuid:"EA69A3EF-A23E-48CF-B4E7-C8A30596A157"}
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
 * @properties={typeid:24,uuid:"06C802B0-FE96-43A2-81D5-701FF67C1A3C"}
 */
function commitTransactions(){
	if (createdRecords > commitRecAt){
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
 * @properties={typeid:24,uuid:"CBB124EF-765A-4EC1-92B1-580ED808F690"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"2DB0AFB5-C00E-4689-AEEB-6FD32FBCC74F"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"A25FBD6A-F687-421B-99C5-71C35A8ED9D0"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"2ACE34BE-9636-4BFE-8AC5-D6AAA89E6479"}
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
 * @properties={typeid:24,uuid:"779C179F-45C6-4D7C-96DC-84001292895B"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"00B16D84-AC68-45F7-BF36-BF081AF0D461"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"8E0E142F-A44F-4CB5-9DC1-118F176EDE08"}
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
 * @properties={typeid:24,uuid:"E39EFC0F-4F3F-43D7-B0AB-62E3C056903F"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"56F577A6-4F3D-4467-868B-A2822EEE3561"}
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
 * @properties={typeid:24,uuid:"467D86A8-28B2-41DD-84B9-7A1E83E54047"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"A92CB857-56F6-4B3F-A4A0-632787F34D3F"}
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
 * @properties={typeid:24,uuid:"4006E40C-9A0B-4F9C-AB12-991FDE6F8784"}
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
 * @properties={typeid:24,uuid:"581286EF-154A-4A11-A545-0984FFD73846"}
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
 * @properties={typeid:24,uuid:"D4B8DDB0-91D7-42AC-BF7C-5EACAD7E8001"}
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
 * @properties={typeid:24,uuid:"D571DAF9-D820-4E21-9CF3-A04ACC0AF087"}
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
 * @properties={typeid:24,uuid:"6ECEA5F0-9BD5-4A40-AECF-E73C2402B0C1"}
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
 * @properties={typeid:24,uuid:"96044B1E-7FB7-477A-BC65-6B60F6703FB8"}
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
 * @properties={typeid:24,uuid:"651679FF-92B4-4A2E-9D34-C3101D425328"}
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
 * @properties={typeid:24,uuid:"746E2062-43AB-4637-B7E9-94DD193309F6"}
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
 * @properties={typeid:24,uuid:"A8854056-61DC-4FB5-A55F-59EBEE85E28F"}
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
 * @properties={typeid:24,uuid:"A30CCE93-0A1C-408E-B7D9-E9DE282659C5"}
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
 * @properties={typeid:24,uuid:"D869F1CA-7F66-44A3-ADF7-6C25D35DF75D"}
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
 * @properties={typeid:24,uuid:"B9C8836E-3269-419C-9C8F-D971361F87FB"}
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
 * @properties={typeid:24,uuid:"FB895424-A7F3-484E-A312-F3495F9449D2"}
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
 * @properties={typeid:24,uuid:"4E64BE25-E780-477B-AC43-6538C0F424B8"}
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
 * @properties={typeid:24,uuid:"02FDD594-F417-429D-ADB7-AB5C2AC06DD6"}
 */
function viewTemporaryData(windowName,dataArray,columnNamesArray){
	//read array columns,  convert to dataset, then datasource
	var dataSet = databaseManager.createEmptyDataSet(dataArray.length,columnNamesArray);
	
	//forms.address_lst.foundset.loadRecords(dataset);
	forms.import_performance_bom.foundset.loadRecords(dataSet);
	
}
/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"AF2B4D0E-8E1A-4F2B-A5DA-2FB351548D6A"}
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
 * @properties={typeid:24,uuid:"4D700B7F-B62E-4C1D-B626-78D3F835F330"}
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
 * @properties={typeid:24,uuid:"1A782DB6-D4AF-44AD-AF80-E230904DB67A"}
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
 * @properties={typeid:24,uuid:"5BC194CA-6717-4AD0-89ED-362CDD93BA48"}
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
 * @properties={typeid:24,uuid:"C627AF23-B9ED-4747-8608-AC528D38943E"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"1CECE378-C224-4758-A367-3F65777CF074"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"9FDF2488-A0B2-438B-A83F-3811EBB77007"}
 */
function mm_to_ft(mm){
	// make conversion to ft
	return 0;
}
/**
 * @param length
 *
 * @properties={typeid:24,uuid:"F0AD59CD-1ADC-45D6-8005-5D1A5F654802"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"A20FCC8B-6322-47F2-9CE2-6F85F264F749"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"FEDB2A68-81E4-42F5-AD1C-3D042CBA9E3C"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"662425C2-C144-4814-B0CF-651E55C7BFF6"}
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
 * @properties={typeid:24,uuid:"9B489A45-FC4E-4A38-AB10-4742C93E40DE"}
 * @SuppressWarnings(wrongparameters)
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
 * @properties={typeid:24,uuid:"4F051EAB-A5C8-4A97-B505-7124921A2951"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
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