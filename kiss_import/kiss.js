/**
 * @properties={typeid:35,uuid:"707FE423-0FFC-47DA-BF8B-86A08D7E7B08",variableType:-4}
 */
var importMainGuidList = [];
/**
 * @properties={typeid:35,uuid:"21F11457-4496-4951-B771-8CCF7D948C7F",variableType:-4}
 */
var importSubGuidList = [];
/**
 * @properties={typeid:35,uuid:"13C9CBD5-F95D-4B1B-B258-2E98108753DE",variableType:-4}
 */
var importSubGUID = [];
/**
 * @properties={typeid:35,uuid:"75167192-23B9-4803-8509-E00099E2FFB0",variableType:-4}
 */
var importMainGUID = [];
/**
 * @properties={typeid:35,uuid:"DA91250D-9C92-45D7-8319-BE1C6218B247",variableType:-4}
 */
var custNumsFS = [];
/**
 * @properties={typeid:35,uuid:"1ED82503-7302-44DE-BBC8-1F3AC90503D8",variableType:-4}
 */
var jobNumsFS = [];
/**
 * @properties={typeid:35,uuid:"76D17433-B879-4123-B289-7A7092423CE2",variableType:-4}
 */
var custIdsFS = [];
/**
 * @properties={typeid:35,uuid:"3AF63900-3319-49A5-90D3-A675D397E6D7",variableType:-4}
 */
var jobIdsFS = [];
/**
 * @properties={typeid:35,uuid:"1993A6C5-1F07-4B5F-8145-3F06FF5CEBAB",variableType:-4}
 */
var parentMarkIndex = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"37F0421B-BBAE-4F23-BE0C-DD12F254C63C"}
 */
var pMarkString = "";
/**
 * @properties={typeid:35,uuid:"5DE348BF-580A-4089-B156-4B9C3E544DB7",variableType:-4}
 */
var pMarks = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F8A25FC-D93C-4668-9294-80D4C2AC73AD"}
 */
var currentSequence = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2A919E8C-BCDA-4F5F-8E9F-54458E05BD05"}
 */
var currentSequenceQty = "";
/**
 * @properties={typeid:35,uuid:"5289C1B4-964E-4A14-8034-4C6D6C04AECE",variableType:-4}
 */
var sequenceArr = []; // reset sequence array
/**
 * @properties={typeid:35,uuid:"0330208A-C7CE-4C86-A512-3678AE00053A",variableType:-4}
 */
var importArray = [];
/**
 * @properties={typeid:35,uuid:"73799ED5-A672-4BCE-9695-49D2FCB579D4",variableType:-4}
 */
var headless = null;
/**
 * @properties={typeid:35,uuid:"8A706E01-7E06-4CFD-9376-29542D0C2888",variableType:-4}
 */
var recomputeLabelArray = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E3882B12-4AE1-4762-A2D5-94572086E189"}
 */
var importResultsFS = '';
/**
 * @properties={typeid:35,uuid:"C084E5CF-1A11-412C-9898-22A6900E4E51",variableType:-4}
 */
var importResultsArray = [];
/**
 * @properties={typeid:35,uuid:"505C5557-00D6-4920-851A-193B9A8152C2",variableType:-4}
 */
var exitSequences = false;
/** @type {JSRecord<db:/stsservoy/import_table>} *
 * 
 *
 * @properties={typeid:35,uuid:"9713C841-CA76-488C-A8F1-64693B2EE125",variableType:-4}
 */
var newRec = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F578BAD4-6735-4232-80EA-2906C06E4273"}
 */
var assemGuid = '';
/**
 * @properties={typeid:35,uuid:"154176A0-D569-494A-9AB6-78763062CAEA",variableType:-4}
 */
var editDate = null;
/**
 * @properties={typeid:35,uuid:"7B7025EE-A9AE-4376-B271-4FE495CAD09A",variableType:-4}
 */
var parentRec = null;
/**
 * @type {JSFoundSet<db:/stsservoy/import_table>}
 * @properties={typeid:35,uuid:"A9E56805-4D01-4BA1-A196-0FE0F86CC1F5",variableType:-4}
 */
var tableFS = null;
/**
 * @type {JSFoundSet<db:/stsservoy/import_guids>}
 * @properties={typeid:35,uuid:"C72C3D36-DC94-4B93-A37E-6E6594839FB1",variableType:-4}
 */
var guidsFS = null;
/**
 * @properties={typeid:35,uuid:"E5BEAD20-D962-4ACD-B1B0-DA0BF0A12504",variableType:-4}
 */
var vJobId = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"A2DCC3CC-F92B-408E-BEE9-1A7099C0E3FB",variableType:-4}
 */
var dsQuery = [];
/**
 * @type {JSFoundSet<db:/stsservoy/sheets>}
 * 
 *
 * @properties={typeid:35,uuid:"98440C8B-4B1F-4890-8B72-F43480398E43",variableType:-4}
 */
var dsSheets = null;
/**
 * Index into dsSheets by sheet_id.
 * dsSheetList.rowIndex = index. dsSheets is sheet_record index.
 * 
 *
 * @properties={typeid:35,uuid:"CDF80C1E-3D4A-40DA-87ED-7632D5502E61",variableType:-4}
 */
var dsSheetList = [];
/**
 * Sheet_id indexed by unique sheet_number.
 * dsSheetArray["_"+sheet_number] = sheet_id;
 * 
 *
 * @properties={typeid:35,uuid:"632702E3-7413-4C88-8F97-7FA23605D2EF",variableType:-4}
 */
var dsSheetArray = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"70071810-F2E0-488E-BD94-297B6DEC6B16",variableType:-4}
 */
var dsSheetIds = [];
/**
 * Sheet number index by sheet_id.
 * dsSheetArrayRev[sheet_id] = "_"+sheet_number;
 * 
 *
 * @properties={typeid:35,uuid:"9804B373-C48C-4B34-A0D5-DCDA1DC76E5F",variableType:-4}
 */
var dsSheetArrayRev = [];
/**
 * Sheet Bom number index by sheet_bom_id.
 * dsSheetArrayRev[sheet_bom_id] = sheet_id+"_"+item_number;
 * 
 *
 * @properties={typeid:35,uuid:"03F82949-9C44-438C-B36B-42AE6CB21A23",variableType:-4}
 */
var dsSheetBomArrayRev = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"5F802C7F-DFD8-4A0A-87F0-90707952E32E",variableType:-4}
 */
var dsTossedList = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"2E223929-A56E-4406-B844-CC87D8962728",variableType:-4}
 */
var dsTossedArray = [];
/**
 * @type {JSFoundSet<db:/stsservoy/piecemarks>}
 * 
 *
 * @properties={typeid:35,uuid:"B03D3245-C1A0-401B-89F4-9D75EA3880A8",variableType:-4}
 */
var dsTossed = null;
/**
 * @type {JSFoundSet<db:/stsservoy/piecemarks>}
 * Array of piecemark records, indexed by integer. 
 * 
 *
 * @properties={typeid:35,uuid:"03C0927C-CDB6-4136-AF8D-1EAA878B07D2",variableType:-4}
 */
var dsPiecemarks = null;
/**
 * 
 * 
 *
 * @properties={typeid:35,uuid:"DACB1B61-0F62-4153-A903-341CFBD65858",variableType:-4}
 */
var dsDiffPiecemarks = [];
/**
 * Index integer into dsPiecemarks, indexed by piecemark_id.
 * dsPiecemarkList[piecemark_id] = index.  dsPiecemarks[index] is piecemark_record.
 * 
 *
 * @properties={typeid:35,uuid:"373FFCA6-A09A-4CC1-BB99-AF52E0156730",variableType:-4}
 */
var dsPiecemarkList = [];
/**
 * Index into a piecemark_id array by uniqueness of a piecemark, identified within unique piecemark function.
 * Unique piecemark is defined by function uniquePiecemark().
 * dsPiecemarkArray[unique_piecemark] = piecemark_id.
 * 
 *
 * @properties={typeid:35,uuid:"5FDD0B80-A0DD-4921-969A-0F2DF4D2837D",variableType:-4}
 */
var dsPiecemarkArray = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"862AEC02-D1E7-47BE-98C1-55639DE2CC16",variableType:-4}
 */
var dsPiecemarkIds = [];
/**
 * @type {JSFoundSet<db:/stsservoy/idfiles>}
 * Foundset of idfiles.
 * 
 *
 * @properties={typeid:35,uuid:"5135F522-B2C5-42BD-9F14-311817CEC220",variableType:-4}
 */
var dsIdfiles = null;
/**
 * @type {JSFoundSet<db:/stsservoy/idfiles>}
 * 
 *
 * @properties={typeid:35,uuid:"59426B44-EE16-444C-9171-EDED08EAF4E7",variableType:-4}
 */
var dsDiffIdfiles = [];
/**
 * Index integer mapping into dsIdfiles, index by idfile_id. 
 * 
 *
 * @properties={typeid:35,uuid:"86B913FC-C0D9-456B-A864-37168EEA91DB",variableType:-4}
 */
var dsIdfileList = [];
/**
 * @type {Array}
 * Holds barcode count, indexed by id_serial_number_id.
 * Holds the barcode count array per idfiles of a piecemark, indexed by unique piecemark for that piecemark.
 * dsIdfileArray[uniquePiecemark+","+sequence_id+","+lot_id]][barcode1count,barcode2count, barcode3count...]
 * 
 *
 * @properties={typeid:35,uuid:"5D0DF8FE-5607-420F-92CF-435DA0869453",variableType:-4}
 */
var dsIdfileArray = [];
/**
 * List of idfiles for a piecemark, indexed by piecemark_id.
 * dsIdfileListByPm[piecemark_id] = [idfile1,2,3...]
 * 
 *
 * @properties={typeid:35,uuid:"8EF238B4-2915-43EA-BAE3-D295E2880527",variableType:-4}
 */
var dsIdfileListByPm = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"B50105CD-6F08-4BCC-8B21-3AE1F0DDE800",variableType:-4}
 */
var dsIdfileCounts = [];
/**
 * @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} 
 * 
 *
 * @properties={typeid:35,uuid:"A97E2E5F-DECD-4C38-B07F-43912B6C71A2",variableType:-4}
 */
var dsBarcodes = null;
/**
 *  @type {Array} 
 * dsBarcodeList[id_serial_number_id] = [idfile_id,idfile_id,idfile_id,...]
 * idfile_id array list indexed by barcodeid/id_serial_number_id (1..n)
 * id_serial_number indexed by idfile_id (should always be 1..1)
 * 
 * 
 *
 * @properties={typeid:35,uuid:"11F0B1AA-854D-4E80-9757-4A2CB1CA4B40",variableType:-4}
 */
var dsBarcodeList = [];
/**
 * Holds id_serial_number_id, indexed by id_serial_number/barcode.
 * dsBarcodeArray[dsBarcodes.id_serial_number_id] = index_integer into dsBarcodes.
 * 
 * 
 *
 * @properties={typeid:35,uuid:"CB50A5AC-63E4-413B-9346-1A8674D9AE7D",variableType:-4}
 */
var dsBarcodeArray = [];
/**
 * @type {JSFoundSet<db:/stsservoy/lots>}
 * 
 *
 * @properties={typeid:35,uuid:"98DE8A31-3C59-4DBF-9C17-678FCBE9D557",variableType:-4}
 */
var dsLots = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"7D9E3A97-0DC8-4F71-8A0B-EDCEBA1E126B",variableType:-4}
 */
var dsLotList = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"8C58B97A-FA40-4D50-A1E6-9F336D414759",variableType:-4}
 */
var dsLotArray = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"D2775073-4064-4B2F-A16E-06ACC2370F00",variableType:-4}
 */
var newRow = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"E1CC1698-B916-44E5-B297-36F2E8C4F045",variableType:-4}
 */
var nullRow = [];
/**
 * @type {JSFoundSet<db:/stsservoy/sequences2>}
 * dsSequence records. dsSequences[index] = sequence_record.
 * 
 *
 * @properties={typeid:35,uuid:"1FAF0B6C-3B8E-4153-96CF-FD22041CC473",variableType:-4}
 */
var dsSequences = null;
/**
 * Sequence List. Index into dsSequences.
 * dsSequenceList[sequence_id] = index.
 * 
 *
 * @properties={typeid:35,uuid:"5984A5DC-58FD-4A83-B30D-34E01837A602",variableType:-4}
 */
var dsSequenceList = [];
/**
 * Sequences indexed by Sheet_number. Since sheet_number may be blank or non-indexed, it is 
 * prefixed by "_".  dsSequenceArray["_"+sequence_number] = sequence_id
 * 
 *
 * @properties={typeid:35,uuid:"6A31F506-8DCE-4B08-8B98-F8EE3DDC4569",variableType:-4}
 */
var dsSequenceArray = [];
/**
 * Sheet_boms indexed by (piecenumber:CUT or partnumber:BOM) sheet_bom.bom_item_number. Since bom_item_number may be blank or non-indexed, it is 
 * prefixed by "_".  dsSheetBomArray[sheet_id+"_"+bom_item_number] = sheet_bom_id
 * 
 *
 * @properties={typeid:35,uuid:"CADBDF84-8160-48DD-B00F-4F7FB40A0F82",variableType:-4}
 */
var dsSheetBomArray = [];
/**
 * Sheet_bom List. Index into dsSheetBoms.
 * dsSheetBomList[sheet_bom_id] = index.
 * 
 *
 * @properties={typeid:35,uuid:"A8ED11E5-A5FB-478C-8561-5CC90B641193",variableType:-4}
 */
var dsSheetBomList = [];
/**
 * @type {JSFoundSet<db:/stsservoy/sheet_bom>}
 * dsShtBm records. dsShtBms[index] = sheet_bom_record.
 * 
 *
 * @properties={typeid:35,uuid:"29C455C3-2F30-4AFB-8F5F-18BA754918B6",variableType:-4}
 */
var dsSheetBoms = null;
/**
 * @properties={typeid:35,uuid:"BCC21FFD-6BA2-47A9-B7F7-B1FA9DA9AEDB",variableType:-4}
 */
var selection = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"FBB858AA-D783-4EE4-BBB9-6BB842A34F13",variableType:-4}
 */
var jobPrefsRec = null;
/**
 * List of sheets under selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"F9E89216-6205-426A-95F1-8321C14307AE",variableType:-4}
 */
var jobSheets = [];
/**
 * list of sequences under selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"CDFE24A5-D81D-4FAC-AC1D-B24BE052876D",variableType:-4}
 */
var jobSequences = [];
/**
 * list of SOs undder selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"1716F5DE-2C7D-4735-981D-000072E57621",variableType:-4}
 */
var jobSONums = [];
/** 
 * List of Loads under selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"75C0590F-5EAE-4BA7-B540-D284529906AA",variableType:-4}
 */
var jobLoadNums = [];
/**
 * List of piecemark references under selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"E4362640-DDE0-4B1C-93C2-F89BD72374CE",variableType:-4}
 */
var jobPcmkRefs = [];
/**
 * List of FabShops under selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"4FA0C79A-E9C1-4C8B-BA6F-B78A8627B64F",variableType:-4}
 */
var jobFabShops = [];
/**
 * List of Areas under selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"40491F00-3030-43BA-B800-995679FB6127",variableType:-4}
 */
var jobAreas = [];
/**
 * List of batches under selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"E8D997DF-AE46-4492-84D0-8A243AE61B79",variableType:-4}
 */
var jobBatches = [];
/**
 * List of Cost of Work Codes under selected job
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"D8352918-C265-4CF3-9EC2-C161572B9FCB",variableType:-4}
 */
var jobCowCodes = [];
/**
 * Selected job's total weight
 * @type {Number}
 *
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"2A11737F-8BDE-4E17-AB05-BFBDD702C40A",variableType:8}
 */
var jobWeightTotal = 0.0;
/**
 * Selected job's number of barcodes
 * @type {Number}
 *
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"A6236686-F814-490B-99AC-BBA3310835B3",variableType:8}
 */
var jobBarcodes = 0;
/**
 * Selected job's total piece count
 * @type {Number}
 *
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"A9AEB083-B275-439D-BD7C-7C6E927A4E83",variableType:8}
 */
var jobPiecesCount = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72790A05-A412-4CC1-8DC0-452E8909F249",variableType:4}
 */
var countGuids = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4DD7B21C-7093-4549-B876-A469FB154E58",variableType:4}
 */
var countPcmks = 0;
/**
 * Piecemarks added to the job during import.
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"4EBA6431-2655-48CA-BB84-71382936ADC1",variableType:-4}
 */
var insertedPiecemarks = [];
/**
 * Idfiles added to the job during import.
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"EF95F8B9-58CF-4A8D-9C86-F3B9B62BFE11",variableType:-4}
 */
var insertedIdfiles = [];
/**
 * Barcodes added to the job during import.
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"FC2616C5-1337-42CC-B626-C85F903A826E",variableType:-4}
 */
var insertedBarcodes = [];
/**
 * Idfiles deleted upon import.  idfile_id pushed.
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"00A82A04-545F-4307-B118-F71E9DA87492",variableType:-4}
 */
var deletedIdfiles = [];
/**
 * Barcodes deleted upon import. barcode_id pushed.
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"E944F90A-3245-4357-A597-7A23BE036657",variableType:-4}
 */
var deletedBarcodes = [];
/**
 * Piecemarks deleted upon import.  piecemark_id pushed.
 * 
 *
 * 
 *
 * @properties={typeid:35,uuid:"E5D8D034-1CF4-4E00-A552-92F087818E3A",variableType:-4}
 */
var deletedPiecemarks = [];
/**
 * Idfiles which need to be deleted. in Bulk. idfile_id files.
 *
 * @properties={typeid:35,uuid:"F459B583-2F77-4651-9338-3B148E1AE39B",variableType:-4}
 */
var idfilesToDelete = [];
/**
 * GUI and import update times tracker
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"102C2A6C-87EB-4A3C-BFEC-D781BFBC2FDC",variableType:8}
 */
var timeIn;
/**
 * temporary hold table for which columns to hide when saving preferences
 * @properties={typeid:35,uuid:"A2DA3023-297B-43CC-A4A6-DD4F5683D139",variableType:-4}
 */
var tempTableColumnsHide = [];
/**
 * GUI and import update times tracker
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3E52997-6B8B-47DB-BE34-76001764CB2F"}
 */
var timeOut;
/**
 * @properties={typeid:35,uuid:"D9D14AA8-5378-45B6-BBD4-1CEC3AD255D0",variableType:-4}
 */
var warnWindow = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FE3B6F39-2287-46FA-98C2-3E9D821BD8E5",variableType:8}
 */
var createdRecords = 0;
/**
 *
 * @properties={typeid:35,uuid:"E3D4101F-1C4A-405C-AEB9-DF9C55CADB8E",variableType:-4}
 */
var idfilePool = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7FCD7A8-43C2-4AC6-9ACF-B5B70B758975"}
 */
var remainingTime = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"66433891-9E97-48E8-9FAD-C0ACF8E52D75",variableType:8}
 */
var createdIdfileCount = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BCE388AB-7F57-4E3F-9D6F-FD7B8B87A4A1",variableType:8}
 */
var commitStart = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7139AA70-7F21-4215-B6E2-DE1E88A7A9B3",variableType:8}
 */
var commitLastDur = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E5E01DA9-6B1C-4698-95FF-F7EBC947D639",variableType:8}
 */
var commitRecAt = 20;
/**
 * Piecemarks which need to be deleted. in Bulk.  piecemark_id files.
 *
 * @properties={typeid:35,uuid:"0562A842-6295-4DED-ADD6-91E22CF7355E",variableType:-4}
 */
var piecemarksToDelete = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"B4AA7E0F-7BAF-46BF-A04A-1507668AA562",variableType:-4}
 */
var countsBCandID = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E85DFD65-1E5D-4CB2-A83D-41C4398E4B99"}
 */
var barcodeLast = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8884A16E-A61A-4437-A854-E3FD35577E4A"}
 */
var barcodePrefix = "";
/**
 * @type {JSRecord<db:/stsservoy/customers>}
 * Holds the current customer record for import.
 *
 * @properties={typeid:35,uuid:"C8985F62-8E43-47B7-A433-D25E799E9212",variableType:-4}
 */
var custRec = null;
/**
 * Selected job's unique piecemark count
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EFF15DE2-0106-4D2F-AAC4-C37FBD77AA88",variableType:8}
 */
var jobPcmkCount = 0;
/**
 * Array of idfiles, unique by uniquePiecemark+SequenceNumber+LotNumber.
 * appendQuantityToIdfile[uniqueIdfile] = existing_item_count
 *
 * @properties={typeid:35,uuid:"02102170-F47C-4595-942B-CAE84BE491FB",variableType:-4}
 */
var appendQuantityToIdfile = null;
/**
 * Boolean to set import data append to existing data or not.
 *
 * @properties={typeid:35,uuid:"F134240B-AB5C-4264-8FA8-3D8C5082147B",variableType:-4}
 */
var appendToData = false;
/**
 * Boolean to indicate quantities have been appended to transitionFS table.
 *
 * @properties={typeid:35,uuid:"883E8E5E-94D6-465E-B1E6-12CBD0646BB5",variableType:-4}
 */
var appendedToData = false;
/**
 * @properties={typeid:35,uuid:"10AE5562-9F20-411B-BB57-2D157F94864C",variableType:-4}
 */
var DEBUG = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD2A85C3-A5AB-4CB1-A476-42F28FE25E57"}
 */
var lastMainPcmk = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A58C470-B24E-4448-909F-F5C7FAF25715",variableType:4}
 */
var lastMainQuant = 0;
/**
 * @properties={typeid:35,uuid:"C4720209-B1B7-4A15-93C6-CB8923C3A4A7",variableType:-4}
 */
var pMark = {
 cMark : null,
 cParent : null,
 cGrade : null,
 cSheetNum : null,
 cFinish :null
};
/**
 * @properties={typeid:35,uuid:"1F27477B-D0AE-446A-B472-2FE75327FA67",variableType:-4}
 */
var subAssemWtAdded = [];
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5F8EC351-9487-42BD-A37B-404723605473",variableType:8}
 */
var totAssemWt = 0.0;
/**
 * @properties={typeid:35,uuid:"95C61F71-73FF-41B8-B669-C456412F85DF",variableType:-4}
 */
var currentPcmkIdfiles = [];
/**
 * @properties={typeid:35,uuid:"D37B6CFF-B3D1-444F-A7BB-9BE645F817DD",variableType:-4}
 */
var currentPcmkParentPcmk = [];
/**
 * @properties={typeid:35,uuid:"1C922E57-B62C-4ECA-B571-D903D45430D5",variableType:-4}
 * 
 * Idfile Id for minors, or the idfile id of a major piecemark
 * 
 */
var parentIdfileId = [];
/**
 * @properties={typeid:35,uuid:"768D9713-9F8A-4D1D-8816-4632EFEBCA62",variableType:-4}
 */
var piecemarksToImport = [];
/**
 * @properties={typeid:35,uuid:"8C496C6A-1133-4F3F-B88D-D7A002BF01E5",variableType:-4}
 */
var piecemarksToSequence = new Array();
/**
 * @properties={typeid:35,uuid:"16EF8072-790F-4C99-AB4A-FA65DEE6B3D3",variableType:-4}
 */
var piecemarksToLot = new Array();
/**
 * @properties={typeid:35,uuid:"287F9B00-47B8-4468-B2F5-551174B205F2",variableType:-4}
 */
var endVars = null;
/**
 * @param {JSEvent} event
 * @param {String} xmlRequest
 *
 * @properties={typeid:24,uuid:"92EDC625-C50A-433B-AF91-A2917F2EC62F"}
 */
function importFSOnServer(event,xmlRequest,filters){
	/**
	 * import to a table or interim array?
	 * 
	 * Need feedback to user for label counts
	 * Need server to process imports, not web or smart
	 * Once labels complete, process to db
	 * Parse the KISS file
	 * Store in table
	 */
	forms['kiss_import'].onActionHide(event);
	var serverIP = plugins.UserManager.Server().ipAddress;
	var clientIP = plugins.UserManager.Client().ipAddress;
	editDate = new Date();
	scopes.jobs.warningsMessage('Retrieving JOB KISS File',true);
	if (application.isInDeveloper()){application.output('BEGIN Import File Creation '+editDate)}
	//if (serverIP == clientIP){
	if (application.isInDeveloper()){application.output('Import Job Settings Saved')}
	scopes.jobs.readPieceTables('import');
	if (importFSRequest(event,xmlRequest,filters)){//IMPORT 2.2 importFSRequest
		if (!scopes.jobs.readPieceTables('import')){application.output('Job ID is not set internal.  Exiting');return}
		///importRecords(event);
		if (application.getSolutionName() == "STS X Embedded"){
			forms['sts_x'].onActionPrint(event);
		} else {
			//forms['kiss_option_import'].show();
			//forms.import_table;
			warningsMessage('Open KISS options Window. Please wait.',true);
			var win = application.createWindow("KISS Import", JSWindow.WINDOW);
			win.title = "KISS Import";
			win.show(forms.kiss_option_import);
		}
	} else {
		scopes.jobs.warningsX(event);
		return;
	}
	/** else {
	 headless = plugins.headlessclient.createClient('STSx','S','S',['headless']);// onSolutionOpen argument
	 headless.queueMethod(null,'scopes.kiss.importFSRequest',[xmlRequest],scopes.kiss.importFSResponse);
	 application.sleep(5000);
	 //headless.shutdown();
	 }*/
	var finishDate = new Date();
	scopes.jobs.warningsMessage('JOB KISS File Retrieved',true)
	if (application.isInDeveloper()){application.output('END Import File Creation '+finishDate)}
	var dur = finishDate - editDate;
	if (application.isInDeveloper()){application.output('total time '+dur)}
}
/**
 * @AllowToRunInFind
 * 
 * @param {JSEvent} event
 * @param {String} xmlRequest
 * @param {Object} filters
 *
 * @properties={typeid:24,uuid:"DEEADCFA-36E3-4C08-B9A3-7BEE3B269CEF"}
 */
function importFSRequest(event,xmlRequest,filters){
	if (application.isInDeveloper()){application.output('FS Check for COM')}
	application.output('FS Check for COM 1')
	var ok = scopes.fs.checkComFabsuite(event);
	application.output('FS Request Job')
	if (application.isInDeveloper()){application.output('FS Request Job')}
	if (!xmlRequest || ok == ''){
		/** response = scopes.fs.com.call('FabSuiteXML',xmlConnect);
		response = response.toString();
		application.output('FS Test Successful Connect for Login');
		if (response.search('<Successful>1') == -1){
			plugins.dialogs.showErrorDialog('1170',i18n.getI18NMessage('1170'));
			return;
		} */
		var newDate2 = new Date();
if (xmlRequest){
		scopes.jobs.warningsMessage('FS Request For Job Data '+newDate2,true)
		var response = globals.fsCom.call('FabSuiteXML',xmlRequest);
		response = response.toString();
		var error = scopes.fs.fabSuiteError(response);
		application.output(error);
		if (error){
			application.output('R \n'+response);
			plugins.dialogs.showErrorDialog('1220',i18n.getI18NMessage('1220')+error);
			return;
		}

		application.output('FS Check for Request Data Success');
		if (response.search('<Successful>1') == -1){
			// insert collected FS Error
			application.output('FS Error Returned '+response);
			plugins.dialogs.showErrorDialog('1170',i18n.getI18NMessage('1170'));
			return;
		}
		var xmlClose = '<FabSuiteXMLRequest><Close></FabSuiteXMLRequest>';
		if (application.getSolutionName() == 'STS X Embedded'){
			scopes.fs.com.call('FabSuiteXML',xmlClose);
			//scopes.fs.com.release();
		}
		newDate2 = new Date();
		scopes.jobs.warningsMessage('FS Request Done '+newDate2,true)
		var regX = new RegExp('<FileName>(.*)</FileName>');
		var fileAndPath = regX.exec(xmlRequest);
		application.output('file '+fileAndPath[1]);
		if (application.isInDeveloper()){application.output('Get Import File Metadata')}
		scopes.jobs.warningsMessage('Get Import File Info',true);
	} else {
		fileAndPath = ['',globals.session.importFile];
	}
		importFSFileInfo(fileAndPath[1]);//IMPORT 3.1 importFSFileInfo
		scopes.jobs.warningsMessage('Set Import Filters',true);
		importSetTableFilters(event,filters);//IMPORT 3.2 importSetTableFilters
		scopes.jobs.warningsMessage('Prep Temp Import Table',true);
		importPopKISSTable(event,fileAndPath[1]);//IMPORT 3.3 importPopKISSTable
		return true;
	} else {
		plugins.dialogs.showErrorDialog('1170',i18n.getI18NMessage('1170'));
		return false;
	}

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5B23A0D4-0057-4D38-A987-47120A5EAA25"}
 */
function importFSResponse(event){
	application.output('callback executed');
	if (event.getType() == JSClient.CALLBACK_EVENT)
	{
		application.output("callback data, name: " + event.data);
	}
	else if (event.getType() == JSClient.CALLBACK_EXCEPTION_EVENT)
	{
		application.output("exception callback, name: " + event.data);
	}
}
/**
 * @param file
 *
 *
 * @properties={typeid:24,uuid:"1A07BD56-464A-475A-B533-5D8BF4F80D8C"}
 */
function importFSFileInfo(file){
	if (file == null){return}
	
	editDate = new Date();
	//var scope = scopes.jobs;
	//var job = scopes.globals.importJobFS;
	var job = scopes.jobs.importJob;
	//scopes.jobs.readFile(file);//java text read
	//importFSReadKissTextFile(file);
    var _oFR = new Packages.java.io.FileInputStream(file),
    _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
    _oBR = new Packages.java.io.BufferedReader(_oIR),
    _sLine = "dummy",
    _nReadLine = 0;

	const hJobNum = 1, hJobName = 2, hGeneric = 3, hDate = 4, hTime = 5, hMetric = 6; //Header

	//// CHECK scopes.jobs.appendQuantityToIdfile = null; // zero out append values array list
	//establish error-free or dialog with errors, correct column count, mapping, 
	var headerLine = [];
    scopes.jobs.importJob.importLineCount = 0;
    var headerSet = false;
    var lineArray = [];
    try {
        while (_sLine) {
            _sLine = _oBR.readLine();
    
            if (_sLine) {
            	lineArray = _sLine.split(',');
                if (!headerSet && lineArray[0] == "H"){
            		headerLine = _sLine.split(',');
                	headerSet = true;
                }
                _nReadLine++;// keep counting
            }
        }
        scopes.jobs.importJob.importLineCount = _nReadLine;
        //
        //do NOT forget this close! to prevent memory leaks
        //
        _oBR.close();
   
    } catch (_oErr) {
        _oBR.close();
        application.output("ERROR: " + file + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
        application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
        return; // stop process
    }
	//for (var index=0;index<40;index++){
	//	if (importResultsArray[index][0] == "H"){
	//		headerLine = importResultsArray[index].split(',');
	//		break;
	//	}
	//}
	var jobNumber = headerLine[hJobNum].toUpperCase();//global job number setting
	//job.jobNumber = jobNumber;
	job.metricFlag = (headerLine[hMetric] == "F") ? 0 : 1;
	job.title = headerLine[hJobName];
	job.name = headerLine[hJobName];
	job.date = headerLine[hDate];
	job.associationId = globals.session.associationId;
	if (application.isInDeveloper()){application.output('assoc'+ globals.session.associationId)}
	job.jobName = headerLine[hJobNum];
	//for (var itm in job){job2[itm] = job[itm]}
	//foundset.loadAllRecords();
	custNumsFS = [];
	jobNumsFS = [];
	custIdsFS = [];
	jobIdsFS = [];
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var jobsFS = databaseManager.createSelect('db:/stsservoy/jobs');
	jobsFS.result.add(jobsFS.columns.job_id);
	jobsFS.result.add(jobsFS.columns.customer_id);
	jobsFS.result.add(jobsFS.columns.job_number);
	jobsFS.where.add(jobsFS.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	jobsFS.where.add(jobsFS.columns.job_number.eq(jobNumber));
	var JFS = databaseManager.getFoundSet(jobsFS);
	JFS.loadRecords();
	var count = JFS.getSize();
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var rec = null;
	if (count > 0){
		if (count > 1){
			//application.output('>>> jobs '+count);
			for (var index2 = 1;index2 <= count;index2++){
				rec = JFS.getRecord(index2);
				custIdsFS.push(rec.customer_id.toString());
				jobIdsFS.push(rec.job_id.toString());
				custNumsFS.push(rec.st2_jobs_to_customers.customer_number);
				jobNumsFS.push(rec.job_number);
			}
			scopes.globals.errorDialog(1211);
			return; // duplicate job number error
		}
		//scopes.globals.kissJobRf = jobsFS.getRecord(1).rf_interface;//save rf interface to show/noshow buttons
		/** @type {JSRecord<db:/stsservoy/jobs>} */
		rec = JFS.getRecord(1);
		job.customerId = rec.customer_id.toString();
		globals.session.jobId = rec.job_id.toString();
		if (globals.session.appName != 'STS X Embedded'){
			/** @type {JSRecord<db:/stsservoy/customers>} */
			var custRec = rec.sts_job_to_customer2;
			if (!custRec.barcode_prefix || 
				// might not need to check this !custRec.barcode_fixed_length || 
				!custRec.barcode_include_prefix || 
				!custRec.barcode_job_length ||
				custRec.barcode_prefix.length != 2){
				var errMsg = i18n.getI18NMessage('sts.txt.barcode.incomplete.msg').replace('XXX',custRec.customer_number);
				plugins.dialogs.showErrorDialog('STS ERROR: Customer barcode incomplete.',errMsg);
				return;
			}
		}
		job.jobId = rec.job_id;
		job.jobUnderCustomer = rec.job_id;
		if (application.isInDeveloper()){application.output('job record id'+rec.job_id)}
		//var win = application.createWindow("KISS Import", JSWindow.DIALOG);
		//win.title = "KISS Import";
		//win.show(forms.kiss_option_import);
	} else {
		if (globals.session.appName == 'STS X Embedded'){
			//create default settings job and prefixing for serials
			/** @type {JSFoundSet<db:/stsservoy/jobs>} */
			var jobFS = databaseManager.getFoundSet('stsservoy','jobs');
			var idx = jobFS.newRecord(false);
			/** @type {JSFoundSet<db:/stsservoy/jobs>} */
			var jobRec = jobFS.getRecord(idx);
			jobRec.association_id = job.associationId.toString();
			jobRec.tenant_uuid = globals.session.tenant_uuid;
			jobRec.job_number = job.jobNumber;
			jobRec.customer_id = globals.session.tenant_uuid;
			jobRec.job_title = job.jobName;
			jobRec.barcode_form = globals.session.tenant_uuid;
			jobRec.edit_date = new Date();
			jobRec.job_plant = 'Embedded';
			jobRec.project_year = job.date.split('/')[2];
			jobRec.barcode_form = globals.session.tenant_uuid;
			jobRec.metric_job = job.metricFlag;
			databaseManager.saveData(jobRec);
			jobPrefsRec.job_id = jobRec.job_id.toString();
			jobPrefsRec.job_number = job.jobNumber;
			jobPrefsRec.job_title = job.title;
			jobPrefsRec.project_year = jobRec.project_year;
			jobPrefsRec.job_metric = job.metricFlag;
			//jobPrefsRec.job_date = ''
			databaseManager.saveData(jobPrefsRec);
		} else {
			if (application.isInDeveloper()){application.output('job not found')}
			errMsg = i18n.getI18NMessage('sts.txt.job.does.not.exist.msg').replace('XXX',jobNumber);
			plugins.dialogs.showErrorDialog(i18n.getI18NMessage('sts.txt.job.does.not.exist'),errMsg);
			return;
		}
		//show dialog for customers
	}
    _oFR = null;
    _oIR = null;
    _oBR = null;

}

/**
 * @param file
 *
 * @properties={typeid:24,uuid:"5C70FEF9-69F5-4678-8538-84110F016173"}
 */
function importFSReadKissTextFile(file) {
	var prefs = {
		delimiter: ",",
		header:false,
		dynamicTyping:false
	}


	importResultsArray = plugins.file.readTXTFile(file).split('\n');
	application.output('External file: '+file);

	var lineCount = importResultsArray.length;
	null;
}

/**
 * @param {String} textString
 *
 * @properties={typeid:24,uuid:"7E052D76-8965-418F-B25B-5FC6DA284127"}
 */
function parseIntoLinesFS(textString){
	null;
}

/**
 * @AllowToRunInFind
	 * 
	 * Header - H, JobNumber (String), Job Name (String), , Date (Date), Time (Time), Metric (T, F)
	 * Loads - T, Load Number (String), Trailer Number (String), Carrier (String), Capacity (kg), 
	 *		Shipped (0, 1), Shipped Date (Date), Intermediate Shipping Firm (String), 
	 *		To Be Returned (0, 1), Date Ready (Date), Load Category 1 (String), Load Category 2 (String), 
	 *		Shipped From (String), Date Received (Date), Load Category 3 (String)
	 * Detail - D, Drawing Number (String), Revision (String), Main Mark (String), Piece Mark (String), 
	 * 		Quantity (#), Shape (String), Dimensions (String), Grade (String), 
	 *		Length (# Mills), Finish (String), Remark (String)
	 * Extra Detail - E, Approval Status (H, A, N, P), Reference Number (String), Remark (String), Route (String), Category (String), Sub-Category (String), 
	 *		Pay Category (String), Accessory Piece Tracking (0, 1), Accessory Load Tracking (0, 1)
	 * Sequence - S, Sequence (String), Quantity (#), Lot # (String)
	 * Assembly GUID - Z, Assembly GUID (String)
	 * Part GUID - Y, AssemblyGUID (String), Part GUID (String)
	 * Assigned Load - U, Load # (String), Sequence (String), Lot # (String), Quantity (#)
	 * Load - O, Load # (String), Sequence (String), Lot # (String ), Date Loaded (Date), Quantity (#)
	 * Return - Q, Load # (String), Sequence (String), Lot # (String ), Date Returned (Date), Quantity (#)
 *
 * @properties={typeid:24,uuid:"F8AEDE29-C4D9-48E9-A5C5-4AA7211A4808"}
 */
function importPopKISSTable(event,fileName) {
	var recDate = new Date();
	if (application.isInDeveloper()){
		var maxRecCount = -1;
	}

	warningsYes();
	scopes.jobs.warningsMessage('Start KISS Populate Table',true);
	var recDate = new Date();
	clearKissTables(event,recDate);
	scopes.jobs.readSheets(scopes.jobs.importJob.jobId);
	scopes.jobs.readPiecemarks(scopes.jobs.importJob.jobId);

	countGuids = 0; countPcmks = 0;
	
	var filterDraws = [];
	var filterSeqs = [];
	var filterLots = [];
	var filterMarks = [];
	
	if (forms.kiss_import){
		filterDraws = (forms.kiss_import.vDrawingNumber) ? forms.kiss_import.vDrawingNumber.split(',') : [];var sheetNumX = '';
		filterSeqs = (forms.kiss_import.vSeqNumber) ? forms.kiss_import.vSeqNumber.split(',') : [];
		filterLots = (forms.kiss_import.vLotNumber) ? forms.kiss_import.vLotNumber.split(',') : [];
		filterMarks = (forms.kiss_import.vPartNumber) ? forms.kiss_import.vPartNumber.split(',') : [];
		var drawNumsX = getDrawingNums().sort(); var regexpRange = new RegExp('^([^..*]+)\\\.([^..*]+)$'); var drawFilters = [];
		while (sheetNumX = filterDraws.pop()){
			var range = sheetNumX.match(regexpRange);
			if (range){
				var startIdx = drawNumsX.indexOf(range[1]);
				var endIdx = drawNumsX.indexOf(range[2]);
				if (startIdx != -1 && endIdx != -1){
					for (var idx11 = startIdx;idx11 <= endIdx;idx11++){
						var drawNumX = drawNumsX[idx11];
						var startNumX = drawNumsX[startIdx];
						if ((drawNumX.toString().length == startNumX.toString().length) && (drawFilters.indexOf(drawNumsX[idx11]) == -1)){
							drawFilters.push(drawNumsX[idx11]);
						}
					}
				}
			} else {
				if (drawFilters.indexOf(sheetNumX) == -1){
					drawFilters.push(sheetNumX);
				}				
			}
		}
		while (sheetNumX = drawFilters.pop()){
			filterDraws.push(sheetNumX);
		}
		if (filterDraws.length > 0){
			var filterDrawsStr = filterDraws.sort().toString();
			filterDrawsStr = filterDrawsStr.replace(/[\[\]]/g,'');
			filterDraws = filterDrawsStr.split(',');
			if (filterDraws){
				forms.kiss_import.vDrawingNumber = filterDrawsStr;
			}
		}
	}
	application.output('----- Array filter results '+filterDrawsStr);
	
	scopes.jobs.warningsMessage('Filter Results',true);
	const hJobNum = 1, hJobName = 2, hGeneric = 3, hDate = 4, hTime = 5, hMetric = 6; //Header
	const tLoadNum = 1, tTrailerNum = 2, tCarrier = 3, tCapacity = 4, tShipped = 5, tIntermShipFirm = 6,
		tToBeReturned = 7, tDateReady = 8, tLoadCat1 = 9, tLoadCat2 = 10, tShippedFrom = 11, tDateRcv = 12,
		tLoadCat3 = 13; //Loads
	const dDrawingNum = 1, dRevision = 2, dMainMark = 3, dPieceMark = 4, dQty = 5, dShape = 6, dDims = 7,
		dGrade = 8, dLength = 9, dFinish = 10, dRemark = 11; //Detail
	const eApprovStatus = 1, eRefNum =  2, eRemark = 3, eRoute = 4, eCat = 5, eSubCat = 6, ePayCat = 7, 
		eAccPieceTrack = 8, eAccLoadTrack = 9; //Extra Detail
	const sSeq = 1, sQty = 2, sLotNum = 3; //Sequence
	const wWeight = 1;//Weight
	const zAssemGuid = 1; //Assembly GUID
	const yAssemGuid = 1, yPartGuid = 2; //Part GUID
	const uLoadNum = 1, uSeq = 2, uLotNum = 3, uQty = 4; //Assigned Load
	const oLoadNum = 1, oSeq = 2, oLotNum = 3, oDateLoad = 4, oQty = 5; //Load
	const qLoadNum = 1, qSeq = 2, qLotNum = 3, qDateReturn = 4, qQty = 5; //Return
	
	recomputeLabelArray = [];

	parentRec = null;
	parentMarkIndex = [];
	pMarkString = "";
	pMarks = [];
	var results = importResultsArray;
	var lengthResults = scopes.jobs.importJob.importLineCount;
	var lineType = "";
	var lineArray = "";
	var lineFieldValue = "";
	var checkValue = "";
	var skippedHeader = false;
	var skippedFirst = false;
	var firstSaveAttempt = false;
	var flagParentFollows = true;//20200527 flag to indicate the next mark will be a parent
	var flagPrepForNextParent = false;
	var flagMinorsInvolved = true;
	currentSequence = "";
	currentSequenceQty = "";
	newRow = null;
	var sequence = {seq : "", cnt :0,lot: ''}//20181227 lot number added
	sequenceArr = []; // reset sequence array
	importArray = [];
	importMainGUID = [];
	importSubGUID = [];
	importMainGuidList = [];
	importSubGuidList = [];
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	//var qb = databaseManager.createSelect('db:/stsservoy/import/table');
	/** @type {JSFoundSet<db:/stsservoy/import_guids>} */
	guidsFS = databaseManager.getFoundSet('stsservoy','import_guids');
	//guidsFS.loadRecords('select import_guid_uuid order by assem_guid');
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	tableFS = databaseManager.getFoundSet('stsservoy','import_table');
	//tableFS.loadRecords('select import_table_id order by parent_piecemark, piecemark');
	var newRecIdx = 0;
	skippedFirst = false;//DEBUG here to verify KISS import_table setup
	//var skipMinors = ((newRec.piecemark != newRec.parent_piecemark) && (forms.kiss_import_option.keep_minors == 0));
	//databaseManager.startTransaction();
	var filterInData = true; // This determines whether a record is saved to speed up import
	var totalMajorMarks = 0;
	totAssemWt = 0;
	//var flagSequencesSeen = false;
	var startT = new Date().getTime(); var lastLineType = '';//this serves to ensure that unsequenced items are captured as well
	if (filterSeqs || filterLots){
		selectPiecemarksToImport(event,fileName,filterSeqs,filterLots)
	}
	var skipToNextDetail = false;var skipToNextSeq = false;
	databaseManager.startTransaction();
    var _oFR = new Packages.java.io.FileInputStream(fileName),
    _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
    _oBR = new Packages.java.io.BufferedReader(_oIR),
    _sLine = "dummy",
    index = 0;
    if (globals.databaseName()){editDate = editDate.toISOString()}//20210121 microsoft mssql sql server STSALL #0015
    
	//try {
	    while (_sLine) {
	        _sLine = _oBR.readLine();
	        index++;
	
	        if (_sLine) {

	//for (var index = 0;index < lengthResults;index++){
				//if (index/300 == Math.floor(index/300)){application.output('Import Line: '+index)}
				var diffT = new Date().getTime() - startT;
				//if (application.isInDeveloper() && diffT > 2000){application.output('index '+index+' of '+lengthResults)}
				warningsMessage('Process '+index+'/'+lengthResults,false);
				//if (lineType[0] == '*'){importSubGUID = []}//322 secs at 300, 307 secs at 200, 361 secs at 400, 285 secs at 100
				// 405 secs at 700, 274 secs at 50 
				var recCommitNumber = 200;var starttime = new Date().getTime();
				if (lineType[0] == '*' && tableFS.getSize()  > recCommitNumber){//prematurely saving datasets.  wait until saving at detail record to reset count XXX
					//if (lineType[0] == '*' && (tableFS.getSize() + guidsFS.getSize()) > recCommitNumber){//prematurely saving datasets.  wait until saving at detail record to reset count XXX
					//if (application.isInDeveloper()){application.output('Saving import table records')}
					var stoptime = new Date().getTime();
					databaseManager.commitTransaction();
					var committime = Math.floor(stoptime - starttime);starttime = stoptime;var commitRecCount = tableFS.getSize();// + guidsFS.getSize();
					application.output('Record Commit ('+recCommitNumber+') at '+commitRecCount+' records ');
					databaseManager.startTransaction();
					//var ok = databaseManager.saveData(tableFS);
					tableFS.clear();	
					//tableFS.loadRecords('select import_table_id order by parent_piecemark, piecemark');
					databaseManager.saveData(guidsFS);
					guidsFS.clear();
				}
				lineArray = _sLine.split(',');
				//if (application.isInDeveloper()){application.output(lineArray)}
				lastLineType = lineType;
				lineType = lineArray[0];
				if (lineType == '*'){skipToNextSeq = false;skipToNextDetail = false;}
				if (skipToNextDetail){continue}
				if (skipToNextSeq && (lineType == 'Z' || lineType == 'Y')){continue}
				skipToNextDetail = false;
				skipToNextSeq = false;
				if (!skippedHeader){
					if (!newKRecord(lineArray)){
						continue;
					} else {
						skippedHeader = true;
					}  //skip header information
				}
				
				/**
				 * create record if "S" record is identified, collect series record information for all "D" records, yes
				 * create record if "D" record executed to next "D" record
				 * if newKRecord, close out old record and clear settings
				 */
				if  (lineType == "*" && skippedFirst){
					flagPrepForNextParent = true;
					//flagParentFollows = false;
					exitSequences = true ;
					//flagParentFollows = true;
					subAssemWtAdded = [];//20180328 clear check array for sub assembly weight adds
					continue;
				}
				if (lineType == "D"){
					lineArray[dMainMark];
					/**if (application.getSolutionName() == "STS X Embedded"){
						/** @type {Array} * /
						var draws = forms.import_x.draws;
						filterInData = (draws.length == 0) && (draws.indexOf(lineArray[dDrawingNum]) != -1);
						/** @type {Array} * /
						var marks = forms.import_x.marks;
						filterInData = filterInData || (marks.length == 0) ||
							((marks.length > 0) &&
								(marks.indexOf(lineArray[dMainMark]) != -1) || (marks.indexOf(lineArray[dPieceMark]) != -1));
					} else {*/
						//filterInData = true;
					filterInData = (filterDraws.indexOf(lineArray[dDrawingNum]) != -1);
					filterInData = filterInData || ((filterMarks.length > 0) &&
						(filterMarks.indexOf(lineArray[dMainMark]) != -1) || (filterMarks.indexOf(lineArray[dPieceMark]) != -1));
					filterInData = filterInData || (filterMarks.length == 0 && filterDraws.length == 0);
					//application.output(filterDraws+' _seeking '+filterInData+' '+lineArray[dDrawingNum])//REMOVE
					//}
					if (filterInData) { // save detail indicating new line before processing detail
						if (skippedFirst && newRec){//] && flagSequencesSeen){
							importPopSaveDetailRow(event,recDate,flagParentFollows,filterSeqs,filterLots);
						} else {
							skippedFirst = true;
						}
					}
					if (filterSeqs.length > 0 && piecemarksToImport.indexOf(lineArray[dMainMark]) == -1){skipToNextDetail = true;continue}
					if (filterLots.length > 0 && piecemarksToImport.indexOf(lineArray[dMainMark]) == -1){skipToNextDetail = true;continue}
				}
				if (!filterInData){continue}//Filter out input if there are filters
				//if (application.isInDeveloper()){application.output(lineArray)}
				var skip = (lineType == "S"); //Sequence line handled out-of-order
					/** unique piecemarks use piecemark, material, sequence_number, grade.  aggregate these
					* changed 6/14/2014 
					* unique piecemarks use parent, piecemark,grade, finish, sheet
					*/
				switch (lineType){
					case 'H':
						newRec.job_number = lineArray[hJobNum];
						break;
					case 'D':
					//scopes.globals.showProgressUpdate(null,lineArray[dPieceMark]=' Parsing Import File');
		
						//if (lineType == "D"){
						//if (filterSeqs && piecemarksToImport.indexOf(lineArray[3]) == -1){skipToNextDetail = true;break}
						if (application.isInDeveloper()){
							maxRecCount--;
						}
						//if (newRec && filterSeqs && filterSeqs.indexOf(newRec.sequence_number) == -1){//!flagSequencesSeen){
							//newRec.delete_flag = 1;
						//	flagSequencesSeen = false;
						//}
						//application.output('RMM line number and detail\n'+index+' '+_sLine);
						newRecIdx = tableFS.newRecord(false);
						//if (flagPrepForNextParent){flagParentFollows = true;flagPrepForNextParent = false;}
						flagParentFollows = false;
						if (lastLineType == '*'){flagParentFollows = true;}

						countPcmks++;
						newRec = tableFS.getRecord(newRecIdx);//tableFS.getSelectedRecord();
						newRec.logic_flag = (lastLineType == '*');
						newRec.modification_date = recDate;
						newRec.parent_piecemark = lineArray[3];
						newRec.piecemark = lineArray[4];
						if (!lineArray[4]){
							newRec.piecemark = 'miscsts';
						}
						newRec.grade = lineArray[8];
						newRec.sheet_number = lineArray[1];
						newRec.finish = lineArray[10];
						newRec.pcmk_qty = Math.floor(lineArray[5]).toFixed(0);
						newRec.item_length = lineArray[9];
						newRec.item_length_mm = Math.floor(newRec.item_length);
						newRec.item_length_char = globals.ftDecToString('FEET',globals.mmToIn(newRec.item_length),13,'ALL');
						newRec.material = lineArray[dShape]+' '+lineArray[dDims];
						newRec.tenant_uuid = globals.session.tenant_uuid;
						newRec.revision_level = lineArray[dRevision];
						newRec.edit_date = new Date();		
						newRec.item_qty = Math.floor(lineArray[dQty]).toFixed(0);
						newRec.lprint = hasBeenPrinted(newRec);
						newRec.import_status = i18n.getI18NMessage('import.create');
						newRec.job_number = scopes.jobs.importJob.jobNumber;
						newRec.job_id = scopes.jobs.importJob.jobId;
						//newRec.sts_qty = getCurrentPcmkIdfileCount(event,newRec);//collect idfiles for piecemark
						pMark.cParent = newRec.parent_piecemark;
						pMark.cMark = newRec.piecemark;
						pMark.cSheetNum = newRec.sheet_number;
						pMark.cFinish = newRec.finish;
						pMark.cGrade = newRec.grade;
						
						pMarkString = lineArray[dDrawingNum]+"_"+lineArray[dMainMark]+"_"+lineArray[dPieceMark]+"_"+
							lineArray[dFinish]+"_"+lineArray[dGrade];
						//if (application.isInDeveloper()){application.output(' >'+pMarkString+' Qty:'+newRec.pcmk_qty)}
						break;
						//}
					case 'E':
						//if (lineType == "E"){
						newRec.route_code = lineArray[eRoute];
						newRec.remarks = lineArray[eRemark];
						break;
					case 'W':
						newRec.item_weight = lineArray[wWeight];
						if (totAssemWt == 0){
							totAssemWt = lineArray[wWeight];
						} else {
							totAssemWt = totAssemWt*1 + lineArray[wWeight]*(Math.floor(lineArray[dQty]/totalMajorMarks));
						}
						
						continue;
					case 'S':
						null;
						if (filterSeqs.length > 0 && piecemarksToSequence && piecemarksToSequence[newRec.parent_piecemark] && piecemarksToSequence[newRec.parent_piecemark].indexOf(lineArray[sSeq]) == -1){skipToNextSeq = true;break}
						if (filterLots.length > 0 && lineArray[sLotNum] && filterLots.indexOf(lineArray[sLotNum]) == -1){skipToNextSeq = true;break}
						//var filterOutSeqs = (filterSeqs.length == 0 || (filterSeqs && (filterSeqs.indexOf(lineArray[sSeq]) != -1)));
					
						//if (filterOutSeqs){
							//flagSequencesSeen = true;
							sequenceArr.push({seq:lineArray[sSeq],cnt:Math.floor(lineArray[sQty]),lot:lineArray[sLotNum]});
							sequence.cnt = 0;sequence.seq = "";sequence.lot="";
							if (application.isInDeveloper()){application.output('RM >> Seq '+lineArray[sSeq]+':'+lineArray[sQty]+':'+lineArray[sLotNum])}
						//}
						break;
					case 'Z':
						if (lastLineType != 'S' && lastLineType != 'Z' && flagParentFollows){// || newRec.parent_piecemark.toUpperCase() == newRec.piecemark.toUpperCase())){
							sequenceArr.push({seq:'',cnt:newRec.item_qty});//now need to make sure that cnt is set to remaining after all sequences captured
							// the following record is 'Y' line, calc unsequenced items there
						}
						//importMainGUID.push(lineArray[zAssemGuid]);
						break;
					case 'Y':
						if (sequenceArr[0] && sequenceArr[0].cnt == 0){
							if (sequenceArr.length == 1){sequenceArr[0].cnt = newRec.pcmk_qty;break;}//handle unsequenced pcmk
						}
						//if (!skipMinors){
							var mainAssem = lineArray[yAssemGuid];
							var subAssem = lineArray[yPartGuid];
							importSubGUID.push(mainAssem);
							importSubGUID.push(subAssem);
						//}
						break;
					default:
				}
				if (application.isInDeveloper() && maxRecCount && maxRecCount == 0){break}
	        }
        }
    /* } catch (_oErr) {
        _oBR.close();
        application.output("ERROR: " + fileName + " at row " + index, LOGGINGLEVEL.ERROR);
        application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
        return; // stop process
    } */
    _oFR = null;
    _oIR = null;
    _oBR = null;

	//if (filterInData) { // save detail indicating new line before processing detail
	application.output('RM final save of data');
	if (newRec){
		importPopSaveDetailRow(event,recDate,flagParentFollows,filterSeqs,filterLots);
	}
	//}
	databaseManager.commitTransaction();
	databaseManager.saveData();

	scopes.jobs.importJobID = scopes.jobs.importJob.jobId;
	
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.delete_flag.eq(1));
	q.where.add(q.columns.job_id.eq(globals.makeUUID(scopes.jobs.importJob.jobId)));
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() > 0){
		Q.deleteAllRecords();
	}
	warningsMessage('Process GUIDs',true);
	//if (tableFS.getSize() > 0){databaseManager.saveData(tableFS)}
	//if (guidsFS.getSize() > 0){databaseManager.saveData(guidsFS)}
	//globals.showProgressDone();
	if (forms['kiss_import']){
		var win = forms['kiss_import'].controller.getWindow();//RECENT
		if (win){
			win.hide();
		}
	}
	//warningsX();
}

/**
 * @properties={typeid:24,uuid:"5F82CA96-A481-477B-9631-01DFAB816913"}
 * @param {JSEvent} event
 * @param {Date} recDate
 * @param {Boolean} flagParentFollows
 * @param {Array} filterSeqs
 * @param {Array} filterLots
 * @AllowToRunInFind
 */
function importPopSaveDetailRow(event,recDate,flagParentFollows,filterSeqs,filterLots){
	//flagParentFollows = false;
	/**
	 * Split out Sequences
	 * 		slide it from the bottom of the array and get the count and name
	 * Split out Qty to SubAssemblies
	 * 		parent pcmk count
	 * 		pcmk count for the new record
	 * 		current sequence count
	 * 		pcmk/parentpcmk * seqcount
	 * Add weight of SubAssemblies
	 * Attach existing FS GUIDs to each Assembly and SubAssembly
	 */

	var editDateStr = editDate;
	var length = sequenceArr.length;//get total number of sequences for this major mark
	if (length == 0) {
		null;
	}
	var newAssembly = false;
	//if (newRec.parent_piecemark.toUpperCase() == newRec.piecemark.toUpperCase()){
	if (newRec.logic_flag == 1){
		//if (sequenceArr && sequenceArr[0]) {application.output('RM sequence begin |'+sequenceArr[0].seq+'|:'+sequenceArr[0].cnt+'|:'+sequenceArr[0].lot);}
		if (sequenceArr[0] && sequenceArr[0].seq == ''){//only if there are unsequenced marks, adjust the number
			for (var idx = 1;idx < sequenceArr.length;idx++){//adjust unsequenced pcmks count
				sequenceArr[0].cnt = sequenceArr[0].cnt - sequenceArr[idx].cnt;
				if (application.isInDeveloper()){application.output('RM adjust sequence |'+sequenceArr[idx].seq+'|:'+sequenceArr[idx].cnt+'|:'+sequenceArr[idx].lot);}
			}
		}
		newAssembly = true;
	}
	var firstPass = true;//Control duplicate records to create Sequences
	
	var tempSequences = sequenceArr.concat([]);

	var seqInfo = {seq: '',cnt: 0,lot:''};
	var count = 0;
	for (var content in tempSequences){count++}//count sequences
	if (count == 0 && newRec){
		seqInfo.cnt = newRec.item_qty;
		tempSequences.push(seqInfo);
		//if (application.isInDeveloper()){application.output('content is '+count+' '+newRec.piecemark)}
	}//application.output('content is '+count+' '+newRec.piecemark)}
	/**
	 * If piecemark is NOT under a sequence, fake a sequence entry.
	 */
	while (seqInfo = tempSequences.shift()){
		if (application.isInDeveloper()){application.output('RM process Sequence |Seq:'+seqInfo.seq+'|Count:'+seqInfo.cnt+'|Lot:'+seqInfo.lot);}
		if (filterSeqs && filterSeqs.length > 0 && filterSeqs.indexOf(seqInfo.seq) == -1){continue}//SEQ Filter check

		if (!firstPass){
			var oldRec = newRec;
			var newIdx = tableFS.newRecord(false);//newRec.foundset.duplicateRecord(false);
			newRec = tableFS.getRecord(newIdx);
			databaseManager.copyMatchingFields(oldRec,newRec,true)
			//for (var item in oldRec){newRec[item] = oldRec[item]} 
			countPcmks++;
		}
		firstPass = false;
		//for each sequence, separate the counts
		var thisSeqCnt = seqInfo.cnt;
		if (filterSeqs && filterSeqs.length > 0 && filterSeqs.indexOf(seqInfo.seq) == -1){
			newRec.delete_flag = 1;
		}
		if (filterLots && filterLots.length > 0 && filterLots.indexOf(seqInfo.lot) == -1){
			newRec.delete_flag = 1;
		}
		newRec.sequence_number = seqInfo.seq; //set sequence and sequence_count for each iteration of newRow to be added to dataset
		newRec.sequence_quantity = seqInfo.cnt; //these are fixed
		newRec.lot_number = seqInfo.lot;//lot number is a new division of the sequence but count remains the same
		newRec.sts_qty = getCurrentPcmkIdfileCount(event,newRec);//collect idfiles for piecemark
		if (newRec.sts_qty == newRec.item_qty){//see below for import.c_label .c_sequence
			newRec.import_status = i18n.getI18NMessage('import.update');
		} else if (newRec.sts_qty > 0){
			newRec.import_status = i18n.getI18NMessage('import.update');
		} else if (newRec.sts_qty < 0){
			newRec.sts_qty = newRec.sts_qty*-1;
			newRec.import_status = i18n.getI18NMessage('import.dirty');
		} else {
			newRec.import_status = i18n.getI18NMessage('import.create')
		}
		
		//if (newRec.piecemark.toLowerCase() == newRec.parent_piecemark.toLowerCase()){
		if (newRec.logic_flag == 1){//flagParentFollows){

			currentPcmkParentPcmk[seqInfo.seq+seqInfo.lot] = newRec;
			parentIdfileId[seqInfo.seq] = newRec.idfile_id;//20180921 missing parent idfile id
			//globals.parentRec = newRec;
			scopes.jobs.tmpParentRecId = newRec.import_table_id;
			var newQuant = Math.floor(newRec.sequence_quantity*1); // depends upon the incoming dataset
			newRec.sequence_quantity = Math.floor(newQuant).toFixed();
			newRec.item_qty = newRec.sequence_quantity;
			//newRec.logic_flag = 1;
			if (newRec.sequence_quantity < newRec.item_qty){newRec.item_qty = newRec.sequence_quantity}
			var popCount = newRec.sequence_quantity; // control how many FS GUIDs must be associated with newRec
		} else { //minor mark encountered, only capture weight for the subassembly counts for the item
			//add weight to parent mark with sequence
			//var idx = tableFS.getRecordIndex(currentPcmkParentPcmk[seqInfo.seq]);
			//if (application.isInDeveloper()){application.output(' get record index of parent pcmk '+idx)}
			parentRec = currentPcmkParentPcmk[seqInfo.seq+seqInfo.lot]
			if (!parentRec){
				/** @type {QBSelect<db:/stsservoy/import_table>} */
				var qq = databaseManager.createSelect('db:/stsservoy/import_table');
				qq.where.add(qq.columns.import_table_id.eq(globals.makeUUID(scopes.jobs.tmpParentRecId)));
				var Q = databaseManager.getFoundSet(qq);
				if (Q.getSize() == 1){
					parentRec = Q.getRecord(1);
				}
				if (!parentRec){//20200526 fix for record that has no apparent parent piecemark
					parentRec = newRec;
					//var altParentIdx = tableFS.newRecord(false);
					//altParentRec = tableFS.getRecord(altParentIdx);
					//tableFS.getRecord(newIdx);//repoint to newRec
					//currentPcmkParentPcmk[seqInfo.seq+seqInfo.lot] = parentRec;
					//parentIdfileId[seqInfo.seq] = newRec.idfile_id;
					
				}//20200526 fix for record that has no apparent parent piecemark
			}
			//newRec.logic_flag = 0;
			newRec.item_qty = Math.floor(newRec.pcmk_qty/parentRec.pcmk_qty * thisSeqCnt).toFixed();				
			popCount = newRec.sequence_quantity;
			parentRec.item_weight = parentRec.item_weight*1 + (newRec.item_weight * newRec.item_qty/parentRec.item_qty);
			parentRec.total_label_wt = parentRec.item_weight*1 * parentRec.item_qty;
		}
		newRec.parent_idfile_id = parentIdfileId[seqInfo.seq];
		// 20180807 change actions here for import ignore/add/delete/tooltip db status on new piecemark
		newRec.set_bc_qty = getBarcodeCount(newRec);
		//application.output('RM Get Barcode Count '+newRec.set_bc_qty);

		if (application.isInDeveloper()){application.output('pm '+newRec.parent_piecemark+' '+newRec.piecemark+' '+newRec.set_bc_qty)}
		var pcmkCount = newRec.item_qty;//number of piecemarks on this label pass
		var labelCount = pcmkCount;
		if ((newRec.sequence_quantity == null || newRec.sequence_quantity == '') 
				&& newRec.sequence_quantity < pcmkCount) {
					pcmkCount = newRec.sequence_quantity;
					newRec.item_qty = pcmkCount;
		}

		//if (newRec.piecemark != newRec.parent_piecemark && globals.session.appName == 'STS X Embedded') {pcmkCount = 1}
		var q = scopes.prefs.qtyPrompt;
		var w = scopes.prefs.wtPrompt;
		if (!newRec.set_bc_qty){
			if (application.isInDeveloper()){application.output('here1')}
			newRec.set_bc_qty = labelCount;//number of requested labels
			newRec.last_bc_qty = 0;//number of piecemarks on last partial barcode
			newRec.last_bc_wt = 0;//weight of last partial barcode
			newRec.barcode_qty = (labelCount == 1) ? pcmkCount : 1;//(pcmkCount == 1) ? pcmkCount : 1;//total number of piecemarks on barcode
			newRec.total_label_qty = pcmkCount;//count of items each on barcode
			if (pcmkCount > q || (w > 0 && newRec.item_weight > w)){
				newRec.set_bc_qty = 1;//set_bc_quantiy is really STSX labels for that PM
				newRec.barcode_qty = pcmkCount;
				newRec.total_label_qty = pcmkCount
				newRec.total_label_wt = pcmkCount * newRec.itemWeight;
			}
		} else {
			if (application.isInDeveloper()){application.output('here2 '+q)}
			if (newRec.set_bc_qty > newRec.item_qty){
				newRec.set_bc_qty = (newRec.item_qty*1 <= q) ? newRec.item_qty : 1;
				//newRec.barcode_qty = Math.ceil(labelCount/newRec.set_bc_qty);
					
			} else {
				application.output('RM using existing label count in DB');
			}
		}
		//newRec.barcode_qty = newRec.total_label_qty - newRec.last_bc_qty;
		if (newRec.last_bc_qty == -1){
			if (application.isInDeveloper()){application.output('here3')}
			newRec.set_bc_qty = (newRec.item_qty >= q) ? 1 : newRec.item_qty;
			newRec.last_bc_qty = 0;
			newRec.total_label_qty = newRec.item_qty;
			newRec.barcode_qty = (newRec.set_bc_qty == 1) ? newRec.item_qty : 1;
		} else 
			if (Math.ceil(labelCount/newRec.set_bc_qty) != (labelCount/newRec.set_bc_qty)){
				if (application.isInDeveloper()){
					application.output('-----------bc total capacity '+newRec.parent_piecemark+' '+newRec.piecemark+' '+newRec.barcode_qty+ ' '+labelCount/newRec.set_bc_qty);
				}
				newRec.barcode_qty = Math.ceil(newRec.item_qty/newRec.set_bc_qty).toFixed();
				newRec.total_label_qty = newRec.barcode_qty * (newRec.set_bc_qty - 1);
				newRec.last_bc_qty = newRec.item_qty - newRec.total_label_qty;
				if (application.isInDeveloper()){application.output('-----------last bc cap: '+newRec.last_bc_qty+' other aggregate bc cap: '+newRec.total_label_qty+' pcmk qty: '+newRec.pcmk_qty)}
			} else {
				//newRec.set_bc_qty = (newRec.item_qty <= q) ? newRec.item_qty : 1;
				//newRec.last_bc_qty = 0;
				newRec.barcode_qty = Math.ceil(newRec.item_qty/newRec.set_bc_qty).toFixed();
				newRec.total_label_qty = newRec.barcode_qty * newRec.set_bc_qty;
				newRec.last_bc_qty = newRec.item_qty-newRec.total_label_qty;
			}

				
		//var labelInfo = scopes.jobs.createBCnums(qtyBarcodes,qtyPcmk,weight)
		if (newRec.item_qty*1 > q*1){labelCount = 1}//if number of piecemarks over a certain number, default to a count of 1 label
		if (newRec.item_weight*1 < w*1){labelCount = 1}// if weight of piecemark is below this weight, default to a count of 1 label
		newRec.total_label_wt = newRec.item_weight * newRec.barcode_qty;	//each barcode weight
		
		var popQty = (!newRec.sequence_quantity) ? newRec.item_qty : newRec.sequence_quantity;
		if (newRec.logic_flag != 1){//newRec.parent_piecemark != newRec.piecemark){
			popQty = newRec.item_qty;
			if (lastMainPcmk == newRec.parent_piecemark){
				//if (newRec.sequence_quantity)
				/*
				 * need to push parent_piecemark, sequence, seqQty then push subassembly guids in quant=seqQuant*itemQuant/subitemQuant 5*20/10
				 */
			}
		}
		//if (newRec.parent_piecemark == newRec.piecemark){lastMainPcmk = newRec.parent_piecemark;lastMainQuant = popQty}
		if (newRec.sts_qty*1 != 0 && 
				(newRec.item_qty*1 != newRec.sequence_quantity*1 ||
				newRec.sts_qty*1 != newRec.item_qty*1)){// ||//difference between AL pcmks and this sequence/lot
			newRec.import_status = i18n.getI18NMessage('import.review.sequence');
		}
		//(newRec.set_bc_qty != 1 && newRec.set_bc_qty != newRec.item_qty) && newRec.set_bc_qty != newRec.pcmk_qty){
		if (newRec.set_bc_qty != 1 && newRec.set_bc_qty*1 != newRec.item_qty*1){
			if (newRec.import_status == i18n.getI18NMessage('import.review.sequence')){
				newRec.import_status = i18n.getI18NMessage('import.review.label.sequence');
			} else {
				newRec.import_status = i18n.getI18NMessage('import.review.label');
			}
		}
		if (newRec.logic_flag == 1){lastMainPcmk = newRec.parent_piecemark;lastMainQuant = popQty}
		if (application.isInDeveloper()){
			application.output('GUIDs  '+newRec.parent_piecemark+' '+newRec.piecemark+' to pop '+popQty+' of ItemQty:'+newRec.item_qty+' Seq: '+newRec.sequence_number+' SeqQty:'+newRec.sequence_quantity);
		}
		//application.output('length before: '+importSubGUID.length);
		if (popQty > 200){
			scopes.jobs.warningsMessage('Processing '+popQty+' GUIDs',true);
		}
		var sqlArgs = [];var guidsArr = [];var newGuidTemp = [];
		var guidsCols = ['import_guid_uuid','assem_guid','part_guid','import_table_id','edit_date','guid_order','tenant_uuid','job_id'];
		for (var cnt = 1;cnt <= popQty;cnt++){
			if (scopes.jobs.sqlArgsToSqlData(guidsArr).length > 8 && cnt/1000 == Math.floor(cnt/1000)){//20201112 No EPM GUIDs For This Pcmk, check sqlArgsToSqlData
				var cntDate = new Date();
				//application.output('Import GUIDs Action on length: '+scopes.jobs.sqlArgsToSqlData(guidsArr).length);
				var sql = 'INSERT INTO import_guids '+scopes.jobs.sqlArrayToColumnNames(guidsCols)+' VALUES '+scopes.jobs.sqlArgsToSqlData(guidsArr)+';';
				//if (application.isInDeveloper()){application.output(sql);}
				var result = plugins.rawSQL.executeSQL('stsservoy','import_guids',sql);
				guidsArr = [];

				scopes.jobs.warningsMessage('Processing '+cnt+' / '+popQty+' GUIDs'+cntDate,true);
				//var status2 = databaseManager.saveData(guidsFS);
				//guidsFS.clear();
			}
			/**
			var i = guidsFS.newRecord(true);
			var r = guidsFS.getRecord(i); */
			countGuids++;
			assemGuid = importSubGUID.shift();
			var partGuid = importSubGUID.shift();
			if (!assemGuid){continue}
			var tArr = [].concat(newGuidTemp);
			tArr[guidsCols.indexOf('import_guid_uuid')] = application.getUUID().toString();
			tArr[guidsCols.indexOf('assem_guid')] = assemGuid;
			tArr[guidsCols.indexOf('part_guid')] = partGuid;
			tArr[guidsCols.indexOf('import_table_id')] = newRec.import_table_id.toString();
			tArr[guidsCols.indexOf('edit_date')] = editDateStr;//.toISOString();//RMM jmc 20201211 mssql 20210128
			tArr[guidsCols.indexOf('tenant_uuid')] = globals.session.tenant_uuid;
			tArr[guidsCols.indexOf('job_id')] = scopes.jobs.importJob.jobId.toString();
			tArr[guidsCols.indexOf('guid_order')] = scopes.jobs.importJob.guidOrder++;
			guidsArr.push(tArr);
				
			/** var sql = "INSERT INTO import_guids (import_guid_uuid,assem_guid,part_guid,import_table_id,edit_date,modification_date,tenant_uuid,job_id,guid_order) VALUES (?,?,?,?,?,?,?,?,?)";
			
			//var importTableId = newRec.import_table_id.toString();
			sqlArgs = [];
			sqlArgs.push(application.getUUID().toString());
			sqlArgs.push(assemGuid);
			sqlArgs.push(partGuid);
			sqlArgs.push(newRec.import_table_id.toString());
			sqlArgs.push(editDate);
			sqlArgs.push(recDate);
			sqlArgs.push(globals.session.tenant_uuid);
			sqlArgs.push(scopes.jobs.importJob.jobId.toString());
			sqlArgs.push(scopes.jobs.importJob.guidOrder++); */
			//application.output(newRec.parent_piecemark+' '+newRec.piecemark+' assemGuid: '+assemGuid+ ' PartGuid: '+partGuid)
			//var result = plugins.rawSQL.executeSQL('stsservoy','import_guids',sql,sqlArgs);
			//application.output('result insert: '+result);
			//if (!result){
			//	var sqlMsg =  plugins.rawSQL.getException().getMessage();
			//	application.output('Raw SQL message '+sqlMsg);
			//	application.output('sql query args '+sqlArgs+'\n'+sql);
			//}
			
			/** r.assem_guid = assemGuid;
			r.part_guid = partGuid;
			r.import_table_id = newRec.import_table_id;
			r.edit_date = editDate;
			r.modification_date = recDate;
			r.tenant_uuid = globals.session.tenant_uuid;
			r.job_id = scopes.jobs.importJob.jobId;
			//r.job_number = scopes.jobs.importJob.jobNumber; */
		}
		if (scopes.jobs.sqlArgsToSqlData(guidsArr).length > 8 && guidsArr.length > 0){//20201112 No EPM GUIDs For This Pcmk
			application.output('Import Final GUIDs Action on length: '+scopes.jobs.sqlArgsToSqlData(guidsArr).length);
			sql = 'INSERT INTO import_guids '+scopes.jobs.sqlArrayToColumnNames(guidsCols)+' VALUES '+scopes.jobs.sqlArgsToSqlData(guidsArr)+';';
			//application.output(sql);
			result = plugins.rawSQL.executeSQL('stsservoy','import_guids',sql);
			guidsArr = [];
		}
	}
	if (exitSequences){
		sequenceArr = []; // sequences no longer apply for the next record
		exitSequences = false;
	}
}

/**
 * @param [Array} lineArray
 *
 * @properties={typeid:24,uuid:"47D834B3-EFD0-4B99-82B7-1FD81A663A8C"}
 */
function newKRecord(lineArray){
	if (lineArray[0] == "*" && lineArray.length == 1){
		return true;
	}
	return false;
}
/**
 * @properties={typeid:24,uuid:"7DD4D865-2423-48F1-837D-F2AD5E8E1434"}
 * 
 * @param {JSEvent} event
 * @param recDate
 */
function clearKissTables(event,recDate){
	null;
	scopes.jobs.warningsMessage('Clearing Import Table',true);
	var formName = event.getFormName();
	//var q = databaseManager.getDataSetByQuery('stsservoy','DELETE FROM import_table;',[],1);
	
	var todaysDate = new Date(recDate).getTime() - 1000*60*60*3;

	var delDate = new Date(todaysDate);
	delDate = utils.dateFormat(delDate, 'yyyy-MM-dd')
	application.output('delete before day '+delDate);
	//application.output('RM date rec date '+new Date(recDate)+' expires before '+new Date(expired));
	
	var tenantId = globals.session.tenant_uuid;
	var jobId = scopes.jobs.importJob.jobId.toString();
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var xt = databaseManager.createSelect('db:/stsservoy/import_table');
	xt.result.add(xt.columns.import_table_id);
	xt.where.add(xt.or
		.add(xt.columns.modification_date.lt(delDate))
		.add(xt.columns.job_id.eq(globals.makeUUID(jobId)))
	);
	xt.where.add(xt.columns.tenant_uuid.eq(globals.makeUUID(tenantId)));
	var XT = databaseManager.getFoundSet(xt);
	scopes.jobs.warningsMessage('Clearing Import Table records.',true);
	if (XT.getSize() > 0){XT.deleteAllRecords()}

	/** @type {QBSelect<db:/stsservoy/import_guids>} */
	var xg = databaseManager.createSelect('db:/stsservoy/import_guids');
	xg.result.add(xg.columns.import_guid_uuid);
	xg.where.add(xg.or
		.add(xg.columns.modification_date.lt(delDate))
		.add(xg.columns.job_id.eq(globals.makeUUID(jobId)))
	);
	xg.where.add(xg.columns.tenant_uuid.eq(globals.makeUUID(tenantId)))
	var XG = databaseManager.getFoundSet(xg);
	scopes.jobs.warningsMessage('Clearing Import FS GUIDs Table records.',true);
	if (XG.getSize() > 0){XG.deleteAllRecords()}

}
/**
 * dsLotArray["_"+lotNum+"|"+"_"+seqNum] = lot_id
 * dsLotArray[lot_id] = "_"+lotNum+"|"+"_"+seqNum
 * dsLotList[lot_id] = *index into dsLots
 * dsLots = *lots dataset*
 *
 *
 * @properties={typeid:24,uuid:"845CDD67-771E-4160-BD8F-1B7A8F08DAF1"}
 */
function readLotsK(){
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
		tempSeqIdList.push(dsSequenceArray[sequence].toString());
	}
	/** @type {QBSelect<db:/stsservoy/lots>} */
	var q = databaseManager.createSelect('db:/stsservoy/lots');
	q.result.add(q.columns.lot_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
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
 * TODO generated, please specify type and doc for the params
 * @param jobID
 *
 * @properties={typeid:24,uuid:"5A889A95-1651-410E-B4F8-5807B3B16796"}
 */
function readBarcodesK(jobID){
	//dsBarcodeList already defined in readIdfiles()
	var bcListArray = []; //temporary array list of barcode ids
	if (!dsIdfiles){return}
	var rec = null; var index = 1;
	while (rec = dsIdfiles.getRecord(index++)){
		var serialID = dsIdfiles.id_serial_number_id.toString();
		if (!bcListArray[serialID]){bcListArray.push(serialID)}
	}

	
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.result.add(q.columns.id_serial_number_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.id_serial_number_id.isin(bcListArray));
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	dsBarcodes = databaseManager.getFoundSet(q);
	if (dsBarcodes.getSize == 0){return}
	dsBarcodeArray = [];
	rec = null; index = 1;
	while (rec = dsBarcodes.getRecord(index++)){
		serialID = rec.id_serial_number_id.toString();
		dsBarcodeArray[serialID] = index;
	}
	bcListArray = [];//temporary array, clear memory
	jobBarcodes = dsBarcodes.getSize();
	if (application.isInDeveloper()){application.output("barcodes "+jobBarcodes)}
}
/**
 * dsSequenceArray["_"+seqNum] = sequence_id
 * dsSequenceArray[sequence_id] = "_"+"_"+seqNum
 * dsSequenceList[sequence_id] = *index into dsSequences.rowIndex*
 * 
 * @param jobID
 *
 * @properties={typeid:24,uuid:"D456ABC6-6E44-484C-8F2C-F3383949C441"}
 */
function readSequencesK(jobID){
	var seqNameList = scopes.kiss.jobSheets;
	dsSequenceList = [];
	dsSequences = null;
	dsSequenceArray = [];
	/** @type {QBSelect<db:/stsservoy/sequences2>} */
	var q = databaseManager.createSelect('db:/stsservoy/sequences2');
	q.result.add(q.columns.sequence_id);
	q.where.add(q.columns.job_id.eq(globals.makeUUID(jobID)));
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	/** @type {JSDataSet} */
	dsSequences = databaseManager.getFoundSet(q);

	var seqId = ""; var seqNum = ""; var unique = "";
	/** @type {JSFoundSet<db:/stsservoy/sequences2>} */
	var rec = null; var index = 1;
	while (rec = dsSequences.getRecord(index++)){
		seqId = rec.sequence_id.toString();
		seqNum = rec.sequence_number;
		unique = "_"+seqNum+'_'+rec.job_id;
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
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"D4E7D4DC-2457-4675-915D-8C214B8DCC94"}
 */
function readIdfilesK(){
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
		piecemarkArray.push(dsPiecemarks.piecemark_id.toString());
	}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.where.add(q.columns.piecemark_id.isin(piecemarkArray));
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	
	dsIdfiles = databaseManager.getFoundSet(q);
	var rows = dsIdfiles.getSize();
	// unique is piecemark_id, barcodeCount, sequence_id, lot_id
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var rec = null; var index = 1;
	while (rec = dsIdfiles.getRecord(index++)){
		var pmId = rec.piecemark_id.toString();//check here
		var holdPmIndex = index-1;

		var bcId = rec.id_serial_number_id.toString();
		var seqId = rec.sequence_id.toString();
		var lotId = rec.lot_id.toString();
		var idId = rec.idfile_id.toString();
		(dsIdfileArray[bcId] != null) ?	dsIdfileArray[bcId]++ : dsIdfileArray[bcId] = 1;

		pmId = rec.piecemark_id.toString();
		bcId = rec.id_serial_number_id.toString();
		seqId = rec.sequence_id.toString();
		lotId = rec.lot_id.toString();
		idId = rec.idfile_id.toString();

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
 * @properties={typeid:24,uuid:"45616FCC-7DF4-477D-8ACA-7FF979B3052C"}
 */
function readSummedMarksK(){
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
 * @properties={typeid:24,uuid:"47915D2E-98BA-4865-A5BF-06A6B17EF888"}
 */
function readPiecemarksK(){
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
	pm.where.add(pm.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
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
		pmId = dsPiecemarks.piecemark_id.toString();
		dsPiecemarkIds.push(pmId);
		dsPiecemarkList[pmId] = index;
		// unique to piecemark, grade, sequence, lot - see function uniquePiecemark
		var unique = uniquePiecemark(dsPiecemarks);
		dsPiecemarkArray[unique] = pmId;
	}
	query = "SELECT sum(pcmk_quantity) sum1,sum(item_weight*pcmk_quantity) sum2 " + // item_quantity set to pcmk_qty 20190102
	"FROM piecemarks " +
	"WHERE sheet_id IN " + textList + " "+
	" AND delete_flag IS null " +
	"AND tenant_uuid = '"+globals.session.tenant_uuid+"'";
	/// ** @type {String} */
	args = [];
	/** @type {JSDataSet} */
	var weightTotal = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	scopes.jobs.jobWeightTotal  = weightTotal['sum2'];
	scopes.jobs.jobPiecesCount  = weightTotal['sum1']; 	
	//scopes.kiss.jobWeightTotal  = weightTotal[0][1]; 	
	//scopes.kiss.jobPiecesCount  = weightTotal[0][0]; 	
	scopes.kiss.jobPcmkCount = dsPiecemarks.getMaxRowIndex();
	if (application.isInDeveloper()){application.output("piecemarks "+scopes.kiss.jobPcmkCount)}
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
 * @properties={typeid:24,uuid:"B5393CD1-B8A0-46F1-85A7-9742C127EEC7"}
 */
function readSheetsK(jobID){
	var sheetNameList = scopes.kiss.jobSheets;
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
	sh.where.add(sh.columns.job_id.eq(globals.makeUUID(jobID)));
	sh.where.add(sh.columns.delete_flag.isNull);
	sh.where.add(sh.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	dsSheets = databaseManager.getFoundSet(sh);
	dsSheets = databaseManager.getDataSetByQuery(sh,-1);
	//dsSheets = databaseManager.getDataSetByQuery('stsservoy', query, args , maxReturnedRows);
	var sheetNum = ""; var sheetId = "";
	var rows = dsSheets.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		dsSheets.rowIndex = index;
		sheetNum = dsSheets.sheet_number;
		sheetId = dsSheets.sheet_id.toString();
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
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A75EB2D7-3BB0-4273-9F0D-0A0D91255C3C"}
 */
function readPieceTablesK(){
	var jobID = null;
	if (globals.session.appName == "STS X Embedded"){
		var jobInfo = scopes.globals.getJobIdInfo(globals.session.jobNumber);
		globals.session.jobId = jobInfo.job_id;
		jobID = jobInfo.job_id;
	} else {
		jobID = scopes.jobs.importJob.jobId;//scopes.globals.session.jobId;//scopes.jobs.jobUnderCustomer;
	}
	if (!jobID){
		var win = application.getActiveWindow();
		var formName = win.controller.getName();
		if (formName.search('import_performance') == 0){
			jobID = forms.import_performance_setting.jobUUID;
		}
	}
	if (application.isInDeveloper()){application.output('readpiecetables job id '+jobID+'----------------------------------------')}
	if (!jobID || jobID == ""){return false}
	readSheets(jobID);
	readSheetBoms(jobID);
	readPiecemarks();
	readSummedMarks();
	readIdfiles();
	readBarcodes(jobID);
	readSequences(jobID);
	readLots();
	return true;
}
/**
 * @param sourceDb
 *
 * @properties={typeid:24,uuid:"0505A48E-2ADF-4671-82B3-10135D552559"}
 */
function createSummedMarksK(sourceDb){
	var jobID = scopes.globals.importJobFS.jobId;
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
			var recIndex = fs.newRecord(false);
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
 * @param record
 * unique idfile is piecemark_id, barcodeCount, sequence_id, lot_id
 *
 * @properties={typeid:24,uuid:"3019E246-CF4A-4444-983E-3713B8633B93"}
 */
function uniqueIdfile(record){ 
	return record.piecemark_id+","+record.sequence_id+","+record.lot_id;
}
/**
 * @param tableRec
 *
 * @properties={typeid:24,uuid:"B5A76D59-C6E7-490E-AB77-598D042665F3"}
 */
function uniqueIdfileIdFromImp(tableRec){
	var uniqPcmk = uniquePiecemark(tableRec);
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
 *
 * @properties={typeid:24,uuid:"B10068A6-8129-4EA4-AFC7-8C2D18F04351"}
 */
function uniquePiecemark(record){
	var unique = "";
	if (!record.piecemark || record.piecemark == ""){
		unique = record.material+","+record.grade+","+record.finish
	} else {
		var sheetNum = scopes.jobs.dsSheetArrayRev[record.sheet_id]+"";
		if (sheetNum.search('undefined') != -1) {sheetNum = "_"+record.sheet_number}
		unique = record.piecemark+","+record.parent_piecemark+","+sheetNum+","+record.grade+","+record.finish;
	}
	return unique;
}
/**
 * @param jobID
 *
 * @properties={typeid:24,uuid:"6C512284-7380-4EE0-8E0D-1ED8F988E1CE"}
 */
function readSheetBomsK(jobID){
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
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
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
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1EA21727-6B84-4646-8CE0-0EE86BD9404C"}
 */
function saveImportSettings(event){
	var formName = event.getFormName();
	var form = forms[formName];
	if (formName == 'kiss_option_import'){
		var jobNumber = form.job_number;
	}
	if (formName == 'kiss_import'){
		jobNumber = form.vJobNumber;
	}

	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.where.add(j.columns.job_number.eq(jobNumber));
	j.where.add(j.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	var J = databaseManager.getFoundSet(j);
	J.loadRecords();
	var recJ = J.getRecord(1);
	var jobId = recJ.job_id.toString();
	
	/** @type {QBSelect<db:/stsservoy/import_prefs>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_prefs');
	q.result.add(q.columns.import_pref_id);
	q.where.add(q.columns.job_number.eq(jobNumber));
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	var Q = databaseManager.getFoundSet(q);
	Q.loadRecords();
	/** @type {JSFoundSet<db:/stsservoy/import_prefs>} */
	var rec = null;
	if (Q.getSize() > 0){
		rec = Q.getRecord(1);
	} else if (Q.getSize() == 0){
		var idx = Q.newRecord();
		rec = Q.getRecord(idx);
		rec.association_uuid = globals.session.associationId.toString();
		rec.job_number = jobNumber;
		rec.job_id = jobId.toString();
		rec.tenant_uuid = globals.session.tenant_uuid;
	}
	rec.edit_date = new Date();
	if (formName == 'kiss_option_import'){
		//rec.drawing_prefix = form.drawPrfx;
		//rec.drawing_suffix = form.drawSufx;
		rec.save_notes_to = form.saveNotesInto;
		rec.save_phase_to = form.savePhasePcColor;
		rec.save_camber_to = form.notesContainCamber;
		rec.import_area = form.importArea;
		var routingId = (form.importRouting) ? form.importRouting.toString() : null;
		rec.import_routing_id = routingId;
		rec.keep_minors = form.keepMinors;
		rec.use_kiss_route_codes = form.useImportRouting;
		rec.job_metric = form.jobMetric;
		rec.original_employee_uuid = form.employeeNumber.toString();
	}
	if (formName == "kiss_import"){
		rec.job_number = form.vJobNumber;
		rec.drawing_numbers = form.vDrawingNumber;
		rec.sequence_numbers = form.vSeqNumber;
		rec.part_numbers = form.vPartNumber;
		rec.lot_numbers = form.vLotNumber;
		rec.import_file = form.randFile;
		scopes.jobs.importJob.jobId = jobId.toString();
		scopes.jobs.importJob.jobNumber = jobNumber;
	}
	jobPrefsRec = rec;
	databaseManager.saveData(rec);
}
/**
 * @param {JSEvent} event
 * @param {Object} filters
 *
 * @properties={typeid:24,uuid:"4D44CB2C-B69D-4059-9FC6-BD55A921A910"}
 */
function importSetTableFilters(event, filters){
	var filterNames = [];//['sequence_number','lot_number','parent_piecemark','piecemark','sheet_number'];
	for (var index = 0;index < filterNames.length;index++){
		databaseManager.removeTableFilterParam('stsservoy',filterNames[index]);
	}
	//scopes.kiss.clearKissTables(event);
	var columnName = '';
	for (var filter in filters){
		var filterArray = [];
		/** @type {Array} */
		var filterList = filters[filter].split(',');
		for (index = 0;index < filterList.length;index++){
			if (!filterList[index]){continue}//leave out items that are blank
			filterArray.push(filterList[index]);
		}
		//application.output('filter '+filter)
		switch (filter){
			case 'Sequence':
				columnName = 'sequence_number';
				//application.output('adding sequence filter');
				break;
			case 'LotNumber':
				columnName = 'lot_number';
				break
			case 'MainMark':
				columnName = 'parent_piecemark';
				//databaseManager.addTableFilterParam('stsservoy', 'import_table', 'piecemark', 'in', filterArray,'piecemark');
				break;
			case 'DrawingNumber':
				columnName = 'sheet_number';
				break;
			default:
				columnName = '';
		}
		if (filterArray.length > 0){
			//databaseManager.addTableFilterParam('stsservoy', 'import_table', columnName, 'in', filterArray,columnName);
		}
	}
	//application.output(databaseManager.getTableFilterParams('stsservoy'))
}
/**
 * @param last
 * @param current
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"76F413DA-6D84-4AA7-98E2-10D2A6ED9DAC"}
 */
function verifyImportQuantitiesX(last,current,event){
	///** @type {JSRecord<{sheet_number:String,parent_piecemark:String,sequence_number:Number,finish:String,grade:String,material:String,piecemark:String,ext_wt_qty:Number,total_label_qty:Number,last_bc_qty:Number,set_bc_qty:Number,item_weight:Number,item_quantity:Number,sequence_quantity:Number}>} */
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var rec = forms[event.getFormName()].foundset.getSelectedRecord();
	//if (rec.sequence_quantity&&rec.sequence_quantity != ""){
	//	var quant = rec.sequence_quantity
	//} else {
	//	quant = rec.item_qty;
	//}
	var quant = rec.item_qty;
	var invalidLabelQty = false;
	if (current*1<1||Math.floor(current)!=current||current*1 > quant*1||(current*1 > Math.ceil(quant/2) && current*1 != quant*1)){
		invalidLabelQty = true;
	} else {
		if (current*1 == 1 || current*1 == rec.item_qty*1){
			null;//pass thru
		} else {
			var labCount = quant/current;
			var modulus = labCount - Math.floor(labCount);
			var roundup = Math.ceil(labCount);
			var extQty = (current - 1) * roundup;
			var remainder = quant - extQty;
			application.output('pcmks: '+quant+' labels: '+current+' labCount: '+labCount+' roundup '+roundup+' ext Qty: '+extQty+' remainder: '+remainder+' ');
			if (modulus*1 > 0){
				if (remainder*1 > 0 && remainder*1 <= roundup*1){
					null;
				} else {
					invalidLabelQty = true;
				}
			}
		}		
	}
	if (invalidLabelQty){
		rec.set_bc_qty = last;
		plugins.dialogs.showErrorDialog('Error',i18n.getI18NMessage("sts.txt.label.quantity.entry.incorrect"));
		return true;		
	}

	var bcNums = scopes.jobs.createBCnums(current,quant,rec.item_weight);
	if (application.isInDeveloper()){
		application.output("current "+current+" quant "+quant+" weight "+rec.item_weight+"\\n bcNums "+bcNums)
		for (var xitem in bcNums){
			application.output("bcNums."+xitem+": "+bcNums[xitem]);
		}
	}
	rec.barcode_qty = bcNums.per;
	rec.last_bc_qty = Math.floor(bcNums.last).toFixed();
	if (rec.pcmk_qty/rec.set_bc_qty == Math.ceil(rec.pcmk_qty/rec.set_bc_qty)){
		rec.total_label_qty = rec.set_bc_qty * rec.barcode_qty;
	} else {
		rec.total_label_qty = (rec.set_bc_qty - 1) * rec.barcode_qty + rec.last_bc_qty;
	}
	rec.total_label_qty = Math.floor(bcNums.full).toFixed();
	rec.total_label_wt = bcNums.totwt;
	if (rec.last_bc_qty<0){return false}
	if (rec.piecemark == ""){
	 	var unique = rec.material+rec.grade+rec.finish+rec.sequence_number;
	} else {
		unique = rec.piecemark+rec.parent_piecemark+rec.sheet_number+rec.grade+rec.finish+rec.sequence_number;
	}
	//scopes.jobs.importLabelCounts[unique] = current;
	var formName = event.getFormName();
	var formFS = forms[formName].foundset;
	var idx = formFS.getSelectedIndex()+1;
	if (idx < formFS.getSize()){formFS.setSelectedIndex(idx)} else {formFS.setSelectedIndex(1)}
	if (rec.import_status == i18n.getI18NMessage('import.review')){
		rec.import_status = i18n.getI18NMessage('import.update');
	}
	if (rec){databaseManager.saveData(rec)}
	return true;
}
/**
 * @param qtyBarcodes
 * @param qtyPcmk
 * @param weight
 *
 * @properties={typeid:24,uuid:"569BCA0A-D555-4864-A7F6-E123AB9388BA"}
 */
function createBCnumsK(qtyBarcodes,qtyPcmk,weight){
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
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"931A9C08-F0A6-46FC-AA64-DF2BA5DCF2B9"}
 * @AllowToRunInFind
 */
function importRecords(event){
	var btn = event.getElementName();
	if (btn.search('btnPrintSelect') != -1){
		var fs = forms['import_embed'].foundset.duplicateFoundSet();
	} else {
		var index = 1;
		//for (var )
	}
	///var jobID = scopes.jobs.jobUnderCustomer;;
	//scopes.jobs.jobUnderCustomer = jobID;
	insertedBarcodes = []; insertedIdfiles = []; insertedPiecemarks = [];
	deletedBarcodes = []; deletedIdfiles = []; deletedPiecemarks = [];
	idfilesToDelete = [];
	//insertedSequences = []; deletedSequences = [];
	scopes.jobs.createSheets();//make sure sheets exist before import
	warningsMessage('Saving Sheets',true);
	scopes.jobs.createSequenceNumbers();
	warningsMessage('Saving Sequences',true);
	scopes.jobs.createLotNumbers();
	warningsMessage('Saving Lots',true);

	if (databaseManager.saveData()){
		databaseManager.commitTransaction();
	}
	databaseManager.startTransaction();
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var fs2 = databaseManager.getFoundSet('db:/stsservoy/import_table');
	fs2.loadRecords();
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var rec = null; index = 1;
	while (rec = fs2.getRecord(index++)){
		if (!rec.import_status || rec.import_status == ""||rec.import_status == i18n.getI18NMessage('import.ignore')){continue}
		warningsMessage('Processing piecemarks line '+index,false);
		importRecordPiecemarkExist(rec,true);
	}
	timeIn = 0;	warningsMessage('Saving Piecemark markers ',true);
	commitTransactions();
	
	//readPiecemarks();
	var recStart = new Date().getTime();
	if (!databaseManager.hasTransaction()){databaseManager.saveData();databaseManager.startTransaction()}
	createdIdfileCount = 0; index = 1;
	while (rec = fs2.getRecord(index++)){
		var recCurrT = new Date().getTime();
		var dur = recCurrT-recStart;
		var recSec = Math.floor(10*index/(dur/1000))/10;
		if (application.isInDeveloper()){application.output('rec sec '+recSec)}
		//forms.kiss_option_import.importRecordCount = recCnt;
		//forms.kiss_option_import.importSpeed = '('+recSec+'/s)';
		//forms.kiss_option_import.errorMessage = Math.floor(rows/recSec/6)/10+' min '+createdIdfileCount+' pieces';
		//remainingTime = Math.floor((rows-index)/recSec/6)/10+' min ';
		if (!rec.import_status || rec.import_status == ""){continue}
		warningsMessage('Processing idfiles line '+index,false);
		var exists = importRecordPiecemarkExist(rec,true);
		if (exists) {
			importRecordCheckIdfileCount(rec,true);
		}
		commitTransactions();
	}
	databaseManager.commitTransaction();databaseManager.startTransaction();
	if (databaseManager.hasTransaction()){databaseManager.commitTransaction()}
	warningsMessage('Committing non-aggregate piecemarks.',true);
	//createSummedMarks(forms.kiss_option_import.transitionFSsumm);
	commitTransactions();
	warningsMessage('Summed piecemarks saving.',true);
	deleteIdfiles(); // delete marked Idfiles, along with transaction and barcodes
	deletePiecemarks();
	deleteImportBatch();
}
/**
 * @param sheetNumber
 *
 * @properties={typeid:24,uuid:"DFD6B4B0-2E82-4819-8D5B-2CDDEBEBB12F"}
 */
function createSheetK(sheetNumber){
	//var job = scopes.globals.importJobFS
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet('stsservoy','sheets');
	var recIndex = fs.newRecord(false);
	var rec = fs.getRecord(recIndex);
	var sheetId = rec.sheet_id+"";
	rec.edit_date - editDate;
	rec.sheet_number = sheetNumber;
	rec.job_id = scopes.globals.importJobFS.jobId;
	rec.tenant_uuid = globals.session.tenant_uuid;
	//if (forms.import_performance_setting.insSheetPO){
	//	rec.sheet_po = forms.import_performance_setting.insSheetPO;
	//}
	dsSheetArray["_"+sheetNumber] = sheetId;
	dsSheetArray[sheetId] = "_"+sheetNumber;
	createdRecords++;
	return rec;
}
/**
 *
 * @properties={typeid:24,uuid:"0C67443E-02AB-4058-98FB-F3D1F246EDD4"}
 */
function createSheetsK(){
	scopes.globals.stsMessages = "Creating sheets.";
	databaseManager.startTransaction();
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.result.add(q.columns.sheet_number);
	q.result.distinct = true;
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var Q = databaseManager.getDataSetByQuery(q,-1);
	for (var index = 1;index <= Q.getMaxRowIndex();index++){
		Q.rowIndex = index;
		var unique = "_"+Q.sheet_number;
		if (dsSheetArray[unique]){
			//application.output("do not create sheet "+sheet_num);
			null;
		} else {
			scopes.kiss.warningsMessage("Create sheet "+Q.sheet_number,false);
			commitTransactions();
			createSheet(Q.sheet_number);
		}
	}
	if (databaseManager.hasTransaction()){databaseManager.saveData();}
	databaseManager.commitTransaction();
}
/**
 * @param {String} message
 * @param {Boolean} showAnyway
 *
 * @properties={typeid:24,uuid:"C55972D8-9F89-4333-9C57-97C4B7B143AB"}
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
		//if (showAnyway != true){return}
	}
	if (message == scopes.globals.stsMessages){message = message + " x"}
	scopes.globals.stsMessages = message;
	forms.messagesWarnings.message = message;
	if (application.isInDeveloper()){
		var timeOutMessage = timeOut - timeIn;
		application.output(message+' '+timeOutMessage+' ms');
	}
	application.updateUI();
	timeIn = timeOut;

}
/**
 *
 * @properties={typeid:24,uuid:"68804A2F-E1DC-43D1-8400-FB46D3FEEA14"}
 */
function warningsYes(){
	if (!scopes.kiss.warnWindow){scopes.kiss.warnWindow = null}
	if (!scopes.kiss.timeIn){scopes.kiss.timeIn = new Date().getTime()}
	var win = application.createWindow("STS Message", JSWindow.DIALOG);
	scopes.kiss.warnWindow = win;
	win.setInitialBounds(10, 10, 460, 110);
	win.title = "STS Message";
	win.show('messagesWarnings');
}
/**
 *
 * @properties={typeid:24,uuid:"1BA5FFF1-A28C-4BCC-92C0-FE91362A5A23"}
 */
function warningsX(){
	application.output('close warning window');
	application.updateUI();
	forms.messagesWarnings.message = '';
	/** @type {JSWindow} */
	var win = scopes.kiss.warnWindow;
	win.hide();
	win.destroy();
	var skip = true;
	if (skip) {return}
}
/**
 *
 * @properties={typeid:24,uuid:"153B27F1-A05B-42EB-A0EB-19FF316E4DDF"}
 */
function commitTransactions(){
	if (createdRecords > commitRecAt){
		timeIn = new Date().getTime();
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
 * @param sequenceNumber
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DD8784AE-7062-49FD-B80D-146ABD75EF8D"}
 */
function createSequenceNumberK(sequenceNumber){
	var unique = "_"+sequenceNumber+'_'+scopes.globals.importJobFS.jobId;
	/** @type {JSFoundSet<db:/stsservoy/sequences2>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/sequences2');
	if (dsSequenceArray[unique]){return dsSequenceArray[unique]}
	var recIndex = fs.newRecord(false);
	var rec = fs.getRecord(recIndex);
	rec.sequence_number = sequenceNumber;
	rec.job_id = application.getUUID(scopes.globals.importJobFS.jobId);
	rec.tenant_uuid = globals.session.tenant_uuid;
	dsSequenceArray[unique] = rec.sequence_id;
	dsSequenceArray[rec.sequence_id] = unique;
	return rec.sequence_id;
}
/**
 *
 * @properties={typeid:24,uuid:"40F1E705-D8CD-4AC5-860E-3E2AEBCE1C54"}
 */
function createSequenceNumbersK(){
	databaseManager.startTransaction();
	warningsMessage('Creating sequences.',true);
	var newItems = [];
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.result.add(q.columns.sequence_number);
	q.result.distinct = true;
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var Q = databaseManager.getDataSetByQuery(q,-1);
	for (var index = 1;index <= Q.getMaxRowIndex();index++){
		Q.rowIndex = index;
		if (newItems.indexOf(Q.sequence_number) == -1){
			newItems.push(Q.sequence_number);
		}
	}
	var length = newItems.length;
	for (index = 0;index < length;index++){
		if (dsSequenceArray["_"+newItems[index]+'_'+scopes.jobs.importJob.jobId] != null){
			warningsMessage('Sequence exists '+newItems[index],false);
			continue
		}
		warningsMessage('Create sequence '+newItems[index],false);
		commitTransactions();
		createSequenceNumber(newItems[index]);
	}
	databaseManager.commitTransaction();
}
/**
 * @param lotNumber
 * @param sequence
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"18865C87-C4F7-4287-BE2B-D769F2490585"}
 */
function createLotNumberK(lotNumber,sequence){
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
 * @properties={typeid:24,uuid:"D48530C3-3A73-4AA9-9C33-428DF84DC26B"}
 */
function createLotNumbersK(){
	databaseManager.startTransaction();
	warningsMessage('Creating lots.',true);
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.result.add(q.columns.sequence_number);
	q.result.add(q.columns.lot_number);
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var Q = databaseManager.getDataSetByQuery(q,-1);
	for (var index = 1;index <= Q.getMaxRowIndex();index++){
		Q.rowIndex = index;
		var seq_num = Q.sequence_number;
		var lot_num = Q.lot_number;
		if (!Q.lot_number){
			lot_num = "";
		}
		var unique = "_"+lot_num+"|_"+seq_num;
		if (dsLotArray[unique]){
			warningsMessage('Lot '+unique+' exists',false);
		} else {
			createLotNumber(lot_num,seq_num);
			commitTransactions();
			warningsMessage('Create lot: '+lot_num+', seq: '+seq_num,false);
		}
	}
	if (databaseManager.hasTransaction()){databaseManager.saveData();}
	databaseManager.commitTransaction();
}
/**
 * @properties={typeid:24,uuid:"A46C423A-6EF3-4599-961B-73902307A25D"}
 */
function testQuery(){
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.result.add(q.columns.sequence_number);
	q.result.distinct = true;
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var Q = databaseManager.getDataSetByQuery(q,-1);
	for (var index = 1;index <= Q.getMaxRowIndex();index++){
		Q.rowIndex = index;
		application.output('index '+index+' value '+Q.sequence_number);
	}
}
/**
 * @param record
 * @param correct Determine whether to correct/update the records or just report
 * 
 * returns "","summedPM","noPM", or corrects the missing item
 * 
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8F998429-F5A9-4D75-811A-D2A7468E6C98"}
 */
function importRecordPiecemarkExist(record,correct){
	//record.select_hidebool = 1;//is the import record in the sheet already?
	// May exist, now how many items?  That is resolved within the idfile check. Beyond the scope of piecemark.
	var unique = uniquePiecemark(record);
	if (correct){
		if (record.import_status.search(i18n.getI18NMessage('import.delete')) != -1){
			var pmId = dsPiecemarkArray[unique];
			if (piecemarksToDelete.indexOf(pmId) == -1){
				piecemarksToDelete.push(pmId);
			}
			return true;// should not exist after piecemark deleted, idfiles will be flagged too, don't worry the idfiles

		}
		if (record.import_status.search(i18n.getI18NMessage('import.create')) != -1){
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
			record.import_status = i18n.getI18NMessage('import.create');
		}
		return;
	} else if (dsPiecemarkArray[unique] != null){
		record.action = "";
		if (forms.kiss_option_import.importOption.search('Overwrite') != -1){
			record.import_status = i18n.getI18NMessage('import.create');
		}
		return;
	} else {
		if (!record.select_hidebool || record.select_hidebool == 0){
			record.import_status = i18n.getI18NMessage('import.create');
		} else {
			record.action = "";
		}
		return;
	}
}
/**
 * Summarized piecemark for special checks
 * @param record
 *
 * @properties={typeid:24,uuid:"B6D99ACE-7981-4F5D-989F-E99F0F8037F2"}
 */
function uniqueSummedPiecemark(record){
	return record.material+","+record.grade+","+record.finish;
}
/**
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"BF51B531-AAAA-4280-ADD2-C2146832F809"}
 */
function deleteIdfilesK(){
	// get idfiles, get barcodes for idfiles, then retrieve remaining idfiles from that barcode
	// delete idfiles, associated piecemarks, 
	var index = 0;
	///var lots = [];
	var barcodes = [];
	var piecemarks = [];
	///var piecemarkRec = null;
	if (idfilesToDelete.length == 0){return}

	//databaseManager.startTransaction();
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i = databaseManager.createSelect('db:/stsservoy/idfiles');
	i.result.add(i.columns.idfile_id);
	//i.result.add(i.columns.id_serial_number_id);
	i.result.distinct = true;
	i.where.add(i.columns.idfile_id.isin(idfilesToDelete));
	i.where.add(i.columns.delete_flag.isNull);
	var resultII = databaseManager.getFoundSet(i);
	var subIdfiles = [];
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var id2 = 1;
	for (id2 = 1;id2 <= resultII.getSize();id2++){
		subIdfiles.push(resultII.getRecord(id2).id_serial_number_id.toString());
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
				 .add(u.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)))
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
			if (piecemarksKeep.indexOf(piecemark.toString()) == -1){
				piecemarksDelete.push(piecemark.toString());
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
					 .add(u.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)))
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
 * @param fsRec
 * @param unique
 *
 * 
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"7FDE1848-B173-4173-AC42-172CF80F712D"}
 */
function createPiecemarkK(fsRec,unique){
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	commitTransactions();
	warningsMessage('Create pm '+unique,false);
	var recIndex = fs.newRecord(false);
	var rec = fs.getRecord(recIndex);
	rec.job_id = scopes.globals.importJobFS;
	rec.tenant_uuid = globals.session.tenant_uuid;
	rec.material = fsRec.material;
	rec.finish = fsRec.finish;
	rec.grade = fsRec.grade;
	rec.item_length = fsRec.item_length*1;
	rec.item_quantity = fsRec.item_quantity;// needs changed to pcmk_qty from item_quantity
	rec.item_weight = fsRec.item_weight;
	rec.item_weight_lbs = scopes.globals.kgToLb(fsRec.item_weight);
	rec.item_length_in = scopes.globals.mmToIn(fsRec.item_length);
	rec.parent_piecemark = fsRec.parent_piecemark
	rec.piecemark = fsRec.piecemark;
	rec.sheet_id = dsSheetArray["_"+fsRec.sheet_number];
	///var routeCode = fsRec.e_route_code;
	if (false && globals.m.routes.indexOf(fsRec.e_route_code_id) == -1){
		rec.e_route_code_id = forms.kiss_option_import.importRouting;
	} else if (false) {
		rec.e_route_code_id = globals.m.routes[fsRec.e_route_code_id];
	}
	//application.output('route code id '+rec.e_route_code_id);
	if (false && fsRec.remarks){
		if (forms.kiss_option_import.saveNotesInto.search('Description') != -1){
			rec.description = fsRec.remarks;
		}
	}
	dsPiecemarkArray[unique] = rec.piecemark_id.toString();
	insertedPiecemarks.push(rec.piecemark_id.toString());
	dsIdfileListByPm[rec.piecemark_id.toString()] = [];
	createdRecords++;
}
/**
 * @param record
 * @param correct
 *
 * 
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"E36CE19A-DD5D-49A9-B247-CCF604BD8C21"}
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
	if (false && forms.kiss_option_import.importOption.search('Overwrite') == -1){
		for (index = 0; index < tDbIdFiles.length;index++){ // get idfiles that are for this sequence and lot
			dsIdfiles.rowIndex = dsIdfileList[tDbIdFiles[index]];
			if (dsIdfiles.lprint == 1){
				dbIdfilePrinted.push(dsIdfiles.idfile_id.toString());//cannot modify printed barcodes without override, reset if overridden
			}
			var recSeq = record.sequence_number;
			var recLot = record.lot;
			if (!recLot){recLot = ""}
			var recSeqId = dsSequenceArray["_"+recSeq+'_'+scopes.jobs.importJob.jobId];
			var recLotId = dsLotArray[+'_'+scopes.jobs.importJob.jobId];
			if (dsIdfiles.sequence_id+"" == recSeqId && dsIdfiles.lot_id+'' == recLotId){
				dbIdfiles.push(tDbIdFiles[index].toString());
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
		var tBcId = dsIdfiles.id_serial_number_id.toString(); // current barcode ID which reps for 1 or more idfiles, giving a count for that barcode
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
	if (appendToData && appendQuantityToIdfile && appendQuantityToIdfile[uniqueIdfileIdFromImp(record)]){ // append incoming quantity if already
		if (appendQuantityToIdfile[uniqueIdfileIdFromImp(record)]){
			nums.idfileAdd = nums.idfileAdd + appendQuantityToIdfile[uniqueIdfileIdFromImp(record)]*1;
			//if (true && importAppendAddBarcode){ // always add a barcode on append
			nums.bcAdd = nums.bcAdd + record.barcode_qty*1;
			nums.inLabelCount = nums.dbLabelCount*2; // twice the number of labels as already in Db
			//} else {
			//	nums.inLabelQntEa = nums.inLabelQntEa*2;
			//}
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
				var guid = getValidGuidMajMin(record.guid_hideindex);
				newIdfileRec.guid_major = guid.major;
				newIdfileRec.guid_minor = guid.minor;
				newIdfileRecs[newIdfileRec.idfile_id.toString()] = newIdfileRec;
				newIdfileIds.push(newIdfileRec.idfile_id.toString());
				//nums.bcIdfiles[barCode].push(newIdfileId);
				nums.dbIdfiles.push(newIdfileRec.idfile_id.toString());
				orphanIdfileList.push(newIdfileRec.idfile_id.toString());
				idfilePool.push(newIdfileRec);
				createNumberIdfiles2 -= 1;//was createQuant, but that is only copied to the idfile, not creating idfiles, BUT summarized items are set otherwise
			}
			if (application.isInDeveloper()){application.output('added idfiles x '+nums.idfileAdd)}//DEBUG
		}
		
		if (nums.idfileDel > 0){
			var deleteNumberIdfiles = (orphanIdfileList.length >= nums.idfileDel) ? 0 : nums.idfileDel - orphanIdfileList.length;
			var index7;
			for (index7 = nums.bcCodes.length-1;index7 >= 0;index7--){//start at end of allocated barcodes
				var barId7 = nums.bcCodes[index7].id_serial_number_id.toString();
				/** @type {Array} */
				var barId7list = nums.bcIdfiles[barId7];
				while (barId7list.length > nums.inLabelQntEa && deleteNumberIdfiles != 0){ // remove orphans from each barcode to barcode max quant
					orphanIdfileList.push(barId7list.pop().toString());
					deleteNumberIdfiles--;
				}
				if (deleteNumberIdfiles == 0){break}
			} // Now at max idfiles, but barcodes not optimal, some may be at max, but last may have more than idfile count
			for (index7 = nums.bcCodes.length-1;index7 >= 0 ;index7--){
				barId7 = nums.bcCodes[index7];
				barId7list = nums.bcIdfiles[barId7];
				while (deleteNumberIdfiles != 0){ 
					orphanIdfileList.push(barId7list.pop().toString());
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
			//var shortIdlist = dsIdListForPmDyn2;
			
			for (var indexId = 0;indexId < idfilePool.length;indexId++){
				/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
				var recIdfile = idfilePool[indexId];
				if (nums.bcCodes.indexOf(recIdfile.id_serial_number_id.toString()) == -1){ //not already in bc
					var recId = recIdfile.idfile_id.toString();
					barId = idfileBarcodes[recId].toString();
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
 * @param record
 *
 *
 * @properties={typeid:24,uuid:"2AFAD8DE-7E90-4E24-9E23-E53D866AB84E"}
 */
function importRecordCheckSequence(record){
	scopes.jobs.createSequenceNumber(record.sequence_number);
	//if (dsSequenceArray["_"+record.sheet_number+'_'+scopes.jobs.importJob.jobId] == null){
	//	scopes.jobs.createSequenceNumber(record.sequence_number);
	//}
}
/**
 * This collects the barcode information record for incoming versus database counts.
 * label quantity each, number of barcodes, total idfile/item count, and calls function  for barcodes and each barcode's idfile list
 * @param record
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"BFD3983E-B373-499A-A4BD-99BA17453C22"}
 */
function dbRecCountsK(record){
	var deleteMod = (record.action == "DELETE");
	var deleteAll = (record.select_hidebool == 1);
	///var appendData = (scopes.jobs.appendToData);
	var summaryRec = (record.piecemark == ""); // add global setting to process summary records for for idfile complement
	countsBCandID = {
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
	var c = countsBCandID;
	/**
	 * get Barcode needs for this record
	 */
	var uniquePm = uniquePiecemark(record);
	var pcmkId = dsPiecemarkArray[uniquePm];
	var tDbIdFiles = [];//temporary listing for iterating pm idfiles for a particular idfile sequence quantity need
	tDbIdFiles = dsIdfileListByPm[pcmkId];
	if (!tDbIdFiles){tDbIdFiles = []}
	c.dbIdfiles = [];
	if (false && forms.kiss_option_import.importOption.search('Overwrite') == -1){
		for (var index = 0; index < tDbIdFiles.length;index++){ // get idfiles that are for this sequence and lot
			dsIdfiles.rowIndex = dsIdfileList[tDbIdFiles[index]];
			var seqNum = record.sequence_number;
			var lotNum = record.lot;
			if (!lotNum){lotNum = ""}
			var lotId = dsLotArray["_"+lotNum+"|_"+seqNum];
			var seqId = dsSequenceArray["_"+seqNum];
			if (dsIdfiles.lprint == 1 && !preserveHistory(record)){continue} // skip printed or dirty records
			if (dsIdfiles.sequence_id.toString() == seqId && dsIdfiles.lot_id.toString() == lotId){
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
 * @properties={typeid:24,uuid:"DFA27BC1-7DF5-42FC-8BCB-E53A506846CC"}
 */
function deletePiecemarksK(){
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
	if (piecemarksToDelete.length == 0){return}
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
		.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultI = databaseManager.getFoundSet(q);
	var length = resultI.getSize();
	for (index = 1;index <= length;index++){
		var idfileRec = resultI.getRecord(index);
		if (idfileRec.lot_id) {lots.push(idfileRec.lot_id.toString())}
		if (idfileRec.id_serial_number_id) {barcodes.push(idfileRec.id_serial_number_id.toString())}
		if (idfileRec.sequence_id){sequences.push(idfileRec.sequence_id.toString())}
		var pmId2 = idfileRec.piecemark_id.toString();
		if (piecemarks.indexOf(pmId2) == -1){piecemarks.push(pmId2)}
		if (idfileRec.idfile_id){idfiles.push(idfileRec.idfile_id.toString())}
	} // interim list of possible deletes in each array.  Verify they are not referenced by other piecemarks/idfiles before deletion
	///var pmActive = [];
	var pmDelete = [];
	while(piecemarksToDelete.length != 0){
		var pmId = piecemarksToDelete.pop();  // pm delete candidate
		if (piecemarks.indexOf(pmId) == -1){  // pm is not in active idfiles
			pmDelete.push(pmId.toString());  // delete piecemark list
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
 * @param record
 *
 * 
 *
 * @properties={typeid:24,uuid:"E98039BB-5128-4E38-A819-3EA58833BC26"}
 */
function dbRecBCListK(record){
	var c = countsBCandID;
	var length = c.dbIdfiles.length;
	for (var index = 0;index < length;index++){
		dsIdfiles.rowIndex = dsIdfileList[c.dbIdfiles[index]];
		var bcId = dsIdfiles.id_serial_number_id.toString(); // current barcode ID which reps for 1 or more idfiles, giving a count for that barcode
		var idfileId = dsIdfiles.idfile_id.toString();
		if (!c.bcIdfiles[bcId]){
			c.bcIdfiles[bcId] = [];
		}
		c.bcIdfiles[bcId].push(idfileId);
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
 * @properties={typeid:24,uuid:"7BA5E260-5652-4E4B-8EE6-6E2F69C3B821"}
 */
function createIdfileRecordK(pmkUniq,piecemarkId,sequence,lot,barcodeId,quantity,origQuant,summQuantity,remarks){
	//if (dsIdfileArray){return dsIdfileArray
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var fs = databaseManager.getFoundSet('stsservoy','idfiles');

	var seqId = dsSequenceArray["_"+sequence+'_'+scopes.jobs.importJob.jobId];
	if (!seqId){seqId = createSequenceNumber(sequence)}
	var lotId = dsLotArray["_"+lot+"|_"+sequence];
	if (!lotId){lotId = createLotNumber(lot,sequence)}
	
	if (!barcodeId){
		barcodeId = createValidBarcode();
	}

	var recIndex = fs.newRecord(false);
	var rec = fs.getRecord(recIndex);
	if (false && application.isInDeveloper()){application.output(recIndex+' created idfile '+rec);}
	rec.piecemark_id = piecemarkId;
	rec.sequence_id = seqId;
	rec.lot_id = lotId;
	rec.id_serial_number_id = barcodeId;
	rec.tenant_uuid = globals.session.tenant_uuid;
	rec.original_quantity = origQuant;
	rec.summed_quantity = summQuantity;
	warningsMessage('Pm '+pmkUniq+' : '+utils.stringRight(piecemarkId, 8)+', '+quantity+' items');
	rec.shop_order = null;//globals.importJobFS.shop_order;
	rec.id_location = forms.kiss_option_import.importArea;
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
 *
 * @properties={typeid:24,uuid:"383DCE52-689A-4327-A382-64DFEE21AFB9"}
 */
function createBarcodesK(){
	while (idCreationCount > 0){
		var barcodeRec = createValidBarcode();
		idBarcodePool.push(barcodeRec.id_serial_number_id.toString());
		importRecordCache.push(barcodeRec);
		idCreationCount--;
	}
}
/**
 * @param orphanFileList
 *
 * @properties={typeid:24,uuid:"53FDD463-F736-4B82-95BD-75D59E043110"}
 */
function createNumberBarcodesK(orphanIdfileList){
	var nums = countsBCandID;
	var createNumBarcodes = nums.bcAdd;
	while (createNumBarcodes > 0){  // add barcodes
		var newBcRec = createValidBarcode();
		var newBcId = newBcRec.id_serial_number_id.toString();
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
 * @properties={typeid:24,uuid:"91D637AD-3632-49A7-A40C-2A02E469DE7C"}
 */
function deleteNumberBarcodesK(orphanIdfileList){
	var nums = countsBCandID;
	var deleteNumBarcodes = nums.bcDel;
	while (deleteNumBarcodes > 0){ // delete barcodes, keep list of idfiles on each deleted barcode
		var bcCode = nums.bcCodes.pop();
		barcodesToDelete.push(bcCode);
		/** @type {Array} */
		var barIdlist5 = nums.bcIdfiles[bcCode];
		var length5 = barIdlist5.length;
		for (var index5 = 0;index5 < length5;index5++){
			orphanIdfileList.push(barIdlist5[index5].toString());//no break since orphanIdfiles will be reallocated to another barcode
		}
		deleteNumBarcodes--;
		nums.bcIdfiles[bcCode] = null; // barcode no longer in use
	}
	return orphanIdfileList;
}
/**
 * @AllowToRunInFind
 * Ensure barcode is unique, then save
 *
 * @properties={typeid:24,uuid:"DB2C811C-F698-46C8-A171-B436ECCEE11C"}
 */
function createValidBarcodeK(){
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var barsFS = databaseManager.getFoundSet('stsservoy', 'id_serial_numbers');
	var recIndex = barsFS.newRecord(false);
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
 * @properties={typeid:24,uuid:"894F33B1-D4F1-4E3E-A5DD-E4A0EDB11B8E"}
 */
function createBarCodePrefixK(){
	if (barcodePrefix == ""){//#87ticket#87
		//Get prefix from default customer record
		/** @type {QBSelect<db:/stsservoy/customers>} */
		var c = databaseManager.createSelect('db:/stsservoy/customers');
		c.result.add(c.columns.customer_id);
		c.where.add(c.columns.customer_id.eq(globals.makeUUID(importJob.customerId)));
		c.where.add(c.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
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
		c2.where.add(c2.columns.customer_id.eq(globals.makeUUID(useCustId)));
		c2.where.add(c2.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A02302FE-76FC-4F90-B804-B2AE123C05BA"}
 */
function createBarCodeNextNumberK(){
	///var barcodeLength = scopes.prefs.barcodeLength;
	var prefix = createBarCodePrefix(); // serial is loaded in this call, too
	///var serialLength = barcodeLength-barcodePrefix.length;
	var serial = countUpNumbers(barcodeLast);
	return prefix+serial;
}
/**
 * @param serial
 *
 * @properties={typeid:24,uuid:"BFBD7D53-BC74-49A0-A855-BBC773ED689C"}
 */
function countUpNumbersK(serial){
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"23948297-E797-45E5-A4A3-E16E7C5F6298"}
 */
function createBarCodeSerialK(){
	if (barcodePrefix == "") {return}
	/** @type {JSRecord<db:/stsservoy/last_id_serial>} */
	var rec = null;
	/** @type {QBSelect<db:/stsservoy/last_id_serial>} */
	var b = databaseManager.createSelect('db:/stsservoy/last_id_serial');
	b.result.add(b.columns.last_id_serial_id);
	b.where.add(b.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	b.where.add(b.columns.prefix.eq(barcodePrefix));
	var B = databaseManager.getFoundSet(b);
	if (B.getSize() > 0){
		rec = B.getRecord(1);
	} else {
		var recIndex = B.newRecord(false);
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
 *
 * @properties={typeid:24,uuid:"950DBBBC-CF8D-4113-9BD2-0E7A8742EDA6"}
 */
function deleteImportBatchK(){
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
 * This assigns guids that are not yet in the system to imported piecemarks, represented as idfiles
 * 	major guid and minor guid are both represented
 * When performing subassembly or minor guid additions, the major guid is NOT represented, but is 
 *  present somewhere in the db.  True GUIDs are unique, so there can only be one represented within the db
 *  as a minor guid_minor.  Major guids are repeated in the guid_major field.
 *  
 * @param guidIndex
 *
 * @properties={typeid:24,uuid:"784AEFF0-EAC1-434E-AADB-A31FDC649978"}
 */
function getValidGuidMajMinK(guidIndex){
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
 * @AllowToRunInFind
 * 
 * @param camberNote
 *
 * @properties={typeid:24,uuid:"CA7D87AB-E2AE-4D31-9AE6-6DE8DCADE3FE"}
 */
function camberInfo(camberNote){
	// if there is more than one 'c=' statement, this will fail, can do last c= on a string position search first
	var pattern = new RegExp("c *= *(.*)$","i");
	/** @type {String} */
	var camber = camberNote.match(pattern);
	if (camber){
		camber = camber[1];
		if (camber.search('/') != -1){
			if (camber.search("\"") != -1){
				camber = fracToDec(camber.trim());
			} else {
				camber = fracToDec(camber.trim()+"\"");
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
 * @properties={typeid:24,uuid:"1790D56F-A708-47CA-B8C5-CD59D0F16863"}
 */
function fracToDecK(fraction){
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
 *
 * @properties={typeid:24,uuid:"9BFD44A6-DC92-48ED-AFCC-4DEAF9FA6067"}
 */
function deletePiecemarksJobK(){
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
 * @param foundset
 *
 * 
 *
 * @properties={typeid:24,uuid:"D49A617E-002A-4786-89D4-70C7FBA56B2B"}
 */
function deleteFoundSetK(foundset){
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset);
	fsUpdater.setColumn('delete_flag',99);
	fsUpdater.setColumn('edit_date',new Date());
	fsUpdater.performUpdate();
}
/**
 * @param row
 *
 * @properties={typeid:24,uuid:"255A7DF5-89B3-4375-9756-8FE028CF75E8"}
 */
function setBarcodeLimitsX(row){
	
	transitionFS.rowIndex = row;
	if (transitionFS.piecemark == ""){
		var unique = transitionFS.material+transitionFS.grade+transitionFS.finish+transitionFS.sequence_number;
	} else {
		unique = transitionFS.piecemark+transitionFS.parent_piecemark+transitionFS.sheet_number+transitionFS.grade+transitionFS.finish+transitionFS.sequence_number;
	}
	if (scopes.jobs.importLabelCounts[unique]){
		transitionFS.barcode_qty = scopes.jobs.importLabelCounts[unique];
	}
	//var currentLabelCount = transitionFS.getValue(row,fieldOrderTempTable['barcode_qty']+1);
	var currentLabelCount = transitionFS.barcode_qty;
	//var itemsCount = transitionFS.getValue(row,fieldOrderTempTable['sequence_quantity']+1);
	var itemsCount = (transitionFS.sequence_quantity == "") ? transitionFS.item_quantity : transitionFS.sequence_quantity;
	//if (application.isInDeveloper()){application.output('row '+row+'item quantity '+transitionFS.item_quantity);}
	if (!itemsCount || itemsCount == ""){itemsCount = transitionFS.item_quantity}
	var bcNums = scopes.jobs.createBCnums(currentLabelCount,itemsCount,transitionFS.item_weight);

	transitionFS.set_bc_qty = bcNums.full; //labelsFull;
	transitionFS.last_bc_qty = bcNums.last; //lastLabelCount;
	transitionFS.total_label_qty = bcNums.per; //itemsPerLabel;
	transitionFS.ext_wt_qty = bcNums.totwt; //labelWeight;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"17904105-E0BD-45B2-B7B6-C4326A195191"}
 */
function loadImportLabelCountsX(){
	var counts = scopes.jobs.importLabelCounts;
	var retainFS = transitionFS;
	var rows = retainFS.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		retainFS.rowIndex = index;
		if (retainFS.piecemark == ""){
		  var unique = retainFS.material+retainFS.grade+retainFS.finish+retainFS.sequence_number;
		 } else {
		  unique = retainFS.piecemark+retainFS.parent_piecemark+retainFS.sheet_number+retainFS.grade+retainFS.finish+retainFS.sequence_number;
		}
		if (counts[unique]){
			var count = counts[unique];
			if (retainFS.barcode_qty != count){
				retainFS.barcode_qty = counts[unique];
				setBarcodeLimits(index);
			}
		}
	}
}
/**
 * @param last
 * @param current
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A682A513-CF73-44E7-A792-1BD6C1427D2A"}
 */
function verifyImportQuants(last,current,event){
	/** @type {JSRecord<{sheet_number:String,parent_piecemark:String,sequence_number:Number,finish:String,grade:String,material:String,piecemark:String,ext_wt_qty:Number,total_label_qty:Number,last_bc_qty:Number,set_bc_qty:Number,item_weight:Number,item_quantity:Number,sequence_quantity:Number}>} */
	var rec = forms[event.getFormName()].foundset.getSelectedRecord();
	if (current*1<1||Math.floor(current)!=current){
		forms.kiss_option_import.errorMessage = i18n.getI18NMessage("sts.txt.label.quantity.entry.incorrect");
		return false;
	}
	var quant = 0;
	if (rec.sequence_quantity && current*1>rec.sequence_quantity){return false;}
	if (rec.item_quantity && current*1>rec.item_quantity*1){return false;}
	if (rec.sequence_quantity&&rec.sequence_quantity != ""){
		quant = rec.sequence_quantity
	} else {
		quant = rec.item_quantity
	}
	if (rec.item_quantity && current*1>rec.item_quantity*1){return false;}
	var bcNums = scopes.jobs.createBCnums(current,quant,rec.item_weight);
	if (application.isInDeveloper()){
		application.output("current "+current+" quant "+quant+" weight "+rec.item_weight+"\\n bcNums "+bcNums)
		for (var xitem in bcNums){
			application.output("bcNums."+xitem+": "+bcNums[xitem]);
		}
	}
	rec.set_bc_qty = Math.floor(bcNums.full);
	rec.last_bc_qty = Math.floor(bcNums.last);
	rec.total_label_qty = bcNums.per;
	rec.ext_wt_qty = bcNums.totwt;
	if (rec.last_bc_qty<0){return false}
	if (rec.piecemark == ""){
	 	var unique = rec.material+rec.grade+rec.finish+rec.sequence_number;
	} else {
		unique = rec.piecemark+rec.parent_piecemark+rec.sheet_number+rec.grade+rec.finish+rec.sequence_number;
	}
	scopes.jobs.importLabelCounts[unique] = current;
	return true;
}
/**
 * @properties={typeid:24,uuid:"0C862CDA-E4AB-44DE-A9C7-68EFD5152A41"}
 */
function performImportTable(){
	var startImport = new Date();
	
	if (application.isInDeveloper()){application.output('begin import '+new Date())}
	scopes.jobs.importRecords_sheet(null);
	scopes.jobs.saveBarCodeSerial();
	if (application.isInDeveloper()){application.output('end import '+new Date()+' started: '+startImport)}
	plugins.dialogs.showInfoDialog(i18n.getI18NMessage('1264'),i18n.getI18NMessage('1264'));//Import Completed

}
/**
 * @param {JSFoundSet<db:/stsservoy/import_table>} rec
 *
 * @properties={typeid:24,uuid:"BB5B219E-17CC-4C5C-B3BA-B3ACB9D428D3"}
 */
function hasBeenPrinted(rec){
	/**
	 * This record has been printed if all of the idfiles have been set as printed
	 * This is getting the idfile_id and verifying the lprint is done on that 
	 * red - reprint 1
	 * yellow - changes 2
	 * green - printed 0
	 */
	var red = 1;
	var yellow = 2;
	var green = 0;
	var uniqPM = uniquePiecemark(rec);
	var pcmkId = dsPiecemarkArray[uniqPM];
	if (!pcmkId){return green}
	var existing = [];
	/** @type {Array} */
	var idfileListByPm = dsIdfileListByPm[pcmkId];// [piecemark_id] = [idfile1,2,3...]
	if (!idfileListByPm || idfileListByPm.length == 0){return green}
	/** determine idfiles per barcode on this piecemark */
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id).distinct;
	q.groupBy.add(q.columns.idfile_id);
	q.result.add(q.columns.idfile_id.count,'count');
	q.where.add(q.columns.idfile_id.isin(idfileListByPm));
	
	var D = databaseManager.getDataSetByQuery(q,-1);
	for (var idx = 1;idx < D.getMaxColumnIndex();idx++){
		D.rowIndex = idx;
		existing.push(D.count);
	}

	/** determiune idfiles per barcode for this record */
	var bcLabelCount = rec.barcode_qty;
	//var itemCount = rec.item_qty;
	var bcPerLabel = rec.set_bc_qty;
	var bcPerLabelLast = rec.last_bc_qty;
	if (existing.length != bcLabelCount){return yellow}
	var exist = 0;// [2,2,2,1]
	while (exist = existing.pop()){
		if (exist == bcPerLabelLast){bcPerLabelLast = 0;continue}
		if (exist != bcPerLabel){return yellow}
	}
	/** if idfiles per barcode are incorrect return yellow */
	return green;
}
/**
 * @param {JSFoundSet<db:/stsservoy/import_table>} record
 *
 * @properties={typeid:24,uuid:"C23A1FF7-B4DA-4AC5-BFE9-84F707A55B93"}
 */
function importExistingRecStatus(record){
	var uniqPcmk = uniquePiecemark(record);//RM stop here to check property 'length' error
	var uniqPcmkId = scopes.jobs.dsPiecemarkArray[uniqPcmk];
	if (!uniqPcmkId){
		var freshPcmk = [];
		for (var idx2 = 1;idx2 <= record.set_bc_qty;idx2++){
			if (record.last_bc_qty > 0 && idx2 == record.set_bc_qty){
				freshPcmk.push("+"+record.last_bc_qty);
			} else {
				freshPcmk.push("+"+record.barcode_qty);
			}
		}
		
		return freshPcmk.toString();
	}//application.output('no record')}
	//var pcmkId = dsPiecemarkArray[uniqPcmk];
	if (!scopes.jobs.dsSequenceArray['_'+record.sequence_number+'_'+scopes.jobs.importJob.jobId]){
		scopes.jobs.createSequenceNumber(record.sequence_number);
	}
	var seqId = scopes.jobs.dsSequenceArray['_'+record.sequence_number+'_'+scopes.jobs.importJob.jobId];
	if (!scopes.jobs.dsLotArray['_'+record.lot_number+'_'+scopes.jobs.importJob.jobId]){
		scopes.jobs.createLotNumber(record.lot_number);
	}
	var lotId = scopes.jobs.dsLotArray['_'+record.lot_number+'_'+scopes.jobs.importJob.jobId];
	//if (!lotId)
	//application.output('sequenceID '+dsSequences[seqId]);dsIdfileArray;
	var barSeen = [];
	var barcodeCnt = [];//dsIdfileArray[uniqPcmkId+','+seqId+','+lotId];dsIdfileListByPm
//	var idListPM = scopes.jobs.dsIdfileListByPm[uniqPcmkId];
	var idListUniq = scopes.jobs.getPiecemarkIdfiles2(uniqPcmkId,record);
	if (!(!idListUniq) && idListUniq.getSize() > 0){
		var lesser = 0;//JOEJOEJOEBAR
		var idRec = null; var idx3 = 1;
		while (idRec = idListUniq.getRecord(idx3++)){
		//for (var j = 0;j < idListPM.length;j++){
			var bcId = idRec.id_serial_number_id;
			if (!bcId || !scopes.jobs.dsBarcodeList[bcId]){continue}
				bcId = bcId.toString();
				if (barSeen.indexOf(bcId) != -1){continue}
				barSeen.push(bcId);
				//if (idListPM.length == 0 || scopes.jobs.dsBarcodeList.length == 0){continue}
				var count = scopes.jobs.dsBarcodeList[bcId].length;
				if (lesser == 0 || lesser < count){
					barcodeCnt.unshift(count.toFixed());
				} else {
					barcodeCnt.push(count.toFixed());
					lesser = count;
				}
		}
	}
	if (!barcodeCnt){barcodeCnt = []}
	barcodeCnt.sort().reverse();
	//if (!barcodeCnt){return '-'}//application.output('no record')}
	//if (1==1) {return barcodeCnt.toString();}//application.output(uniqPcmk+' '+barcodeCnt);
	var toBeBC = [];
	/**
	 * 	
	 * record.barcode_qty - per label mark capacity
	 * record.item_qty - total marks to be barcoded
	 * record.last_bc_qty - last label mark capacity
	 * record.set_bc_qty - requested label count
	
	 get the toBe state of the barcode distribution request
	 */
	var add = '';
	for (var idx = 1;idx <= record.set_bc_qty;idx++){
		if (barcodeCnt.length == 0){add = "+"}
		if (record.last_bc_qty > 0 && idx == record.set_bc_qty){
			toBeBC.push(add+record.last_bc_qty);
		} else {
			toBeBC.push(add+record.barcode_qty);
		}
	}
	if (!uniqPcmkId){return toBeBC.toString()}
	if (barcodeCnt.length == 0){return toBeBC.toString()}
	var difference = 0;var changeStr = barcodeCnt.toString()+'->\n'+toBeBC.toString()+'=\n';
	var distribBC = [];// [11,11,5] [5,5,5,5,5,2] = [-6,-6,0,5,5,2]
	var changedRec = false;
	if (toBeBC.length > barcodeCnt.length){// [1] -> [1,1] = [0,1]
		for (idx = 0;idx < toBeBC.length;idx++){
			if (barcodeCnt[idx]){
				difference = toBeBC[idx]-barcodeCnt[idx];
				if (difference != 0){changedRec = true;}
				distribBC.push(difference);
				continue;
			}
			distribBC.push(toBeBC[idx]);
		} // [1] [1,1] = [0,1]
	} else { // [5,5,5,5,5,2] [11,11,5] = [6,6,0,-5,-5,-2]
		for (idx = 0;idx < barcodeCnt.length;idx++){
			if (toBeBC[idx]){
				difference = toBeBC[idx]-barcodeCnt[idx];
				if (difference > 0){difference = "+"+difference}
				if (difference != 0){changedRec = true;}
				distribBC.push(difference);
				continue;
			}
			distribBC.push(-barcodeCnt[idx]);
		}
	}
	//application.output('pm '+record.piecemark+' '+barcodeCnt+' '+toBeBC);

	if (changedRec){
		return changeStr += distribBC.toString();
	} else {
		return barcodeCnt.toString();
	}
}
/**
 * @param {JSEvent} event
 *
 *read import_table and collect last settings for job import or skip if none
 *
 * @properties={typeid:24,uuid:"999C30E9-8B57-4E9A-8DD3-72DD1653C353"}
 */
function loadImportSettings(event){
	var formName = event.getFormName();
	var form = forms[formName];
	if (form.job_number){
		var jobNumber = form.job_number;
	}
	if (form.vJobNumber){
		jobNumber = form.vJobNumber;
	}

	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.where.add(j.columns.job_number.eq(jobNumber));
	j.where.add(j.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	var J = databaseManager.getFoundSet(j);
	J.loadRecords();
	var recJ = J.getRecord(1);
	var jobId = recJ.job_id;
	
	jobId = scopes.jobs.importJob.jobId;

	
	/** @type {QBSelect<db:/stsservoy/import_prefs>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_prefs');
	q.result.add(q.columns.import_pref_id);
	q.where.add(q.columns.job_number.eq(jobNumber));
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	var Q = databaseManager.getFoundSet(q);
	Q.loadRecords();
	/** @type {JSFoundSet<db:/stsservoy/import_prefs>} */
	var rec = null;
	if (Q.getSize() > 0){
		rec = Q.getRecord(1);
	}
	else if (Q.getSize() == 0){
		var idx = Q.newRecord();
		rec = Q.getRecord(idx);
		rec.association_uuid = globals.session.associationId.toString();
		rec.job_number = jobNumber;
		rec.job_id = jobId.toString();
		rec.tenant_uuid = globals.session.tenant_uuid;
	}
	if (formName == 'kiss_option_import'){
		//save keep minor marks, discard types, save notes into, place phase, notes contain, and routing code are saved
		//var form = forms['kiss_option_import'];
		//if (rec.drawing_prefix){form.drawPrfx = rec.drawing_prefix}
		//if (rec.drawing_suffix){form.drawSufx = rec.drawing_suffix}
		if (rec.save_notes_to){form.saveNotesInto = rec.save_notes_to}
		form.savePhasePcColor = rec.save_phase_to;
		form.notesContainCamber = rec.save_camber_to;
		if (rec.import_area){form.importArea = rec.import_area}
		if (rec.import_routing_id){form.importRouting = rec.import_routing_id}
		if (rec.keep_minors){form.keepMinors = rec.keep_minors}
		if (rec.import_file){form.importFile = rec.import_file}
	}
	if (formName == 'kiss_import'){
		if (rec.drawing_numbers){form.vDrawingNumber = rec.drawing_numbers;}
		if (rec.sequence_numbers){form.vSeqNumber = rec.sequence_numbers;form.vSeqAll = 0}
		if (rec.part_numbers){form.vPartNumber = rec.part_numbers;}
		if (rec.lot_numbers){form.vLotNumber = rec.lot_numbers;form.vLotAll = 0}
		if (rec.job_number){scopes.fs.importData.jobNumber = rec.job_number}//20210121 keeping the wrong job number on import
	}
	databaseManager.saveData(rec);
	return rec;
	
}
/**
 * @param newRec
 *
 * @properties={typeid:24,uuid:"A16FEA29-9166-4B5C-BF87-DDBCC99EA0EA"}
 */
function getBarcodeCount(record){
	var uniqPM = scopes.jobs.uniquePiecemark(record);
	var pmId = scopes.jobs.dsPiecemarkArray[uniqPM];
	if (!pmId){return 0}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.piecemark_id.eq(globals.makeUUID(pmId)));
	q.where.add(q.columns.delete_flag.isNull);
	var seqId = scopes.jobs.createSequenceNumber(record.sequence_number);
	//if (!scopes.jobs.dsSequenceArray['_'+record.sequence_number+'_'+scopes.jobs.importJob.jobId]){
	//	scopes.jobs.createSequenceNumber(record.sequence_number);
	//}
	q.where.add(q.columns.sequence_id.eq(globals.makeUUID(seqId)));//scopes.jobs.dsSequenceArray['_'+record.sequence_number+'_'+scopes.jobs.importJob.jobId])));
	var lotId = scopes.jobs.createLotNumber(record.lot_number);
	//if (!scopes.jobs.dsLotArray['_'+record.lot_number+'_'+scopes.jobs.importJob.jobId]){
	//	scopes.jobs.createLotNumber(record.lot_number);
	//}
	q.where.add(q.columns.lot_id.eq(globals.makeUUID(lotId)));//scopes.jobs.dsLotArray['_'+record.lot_number+'_'+scopes.jobs.importJob.jobId])));
	q.groupBy.add(q.columns.id_serial_number_id);
	q.result.distinct = true;
	q.result.add(q.columns.id_serial_number_id);
	q.result.add(q.columns.id_serial_number_id.count,'count');
	//q.result.distinct = true;
	var Q = databaseManager.getDataSetByQuery(q,-1);
	Q.rowIndex = 1;
	//var Q = databaseManager.getDataSetByQuery(q,1);
	//Q.rowIndex  = 1;
	//if (application.isInDeveloper()){application.output('-------------------------------------------rec '+record.piecemark+' count '+Q.getSize()+' pmid '+pmId);}
	return Q.getMaxRowIndex();
	
}
/**
 * @param {JSEvent} event
 * @param record
 *
 * @properties={typeid:24,uuid:"27229DC3-21CE-4A81-9E1F-101F5066DB95"}
 */
function getCurrentPcmkIdfileCount(event,record){
	var form = forms[event.getFormName()];
	var jobId = form.vJobID;
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheets');
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.job_id.eq(globals.makeUUID(jobId)));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var w = q.joins.add('db:/stsservoy/piecemarks');
	w.on.add(w.columns.sheet_id.eq(q.columns.sheet_id));
	w.root.where.add(w.columns.piecemark.eq(record.piecemark));
	w.root.where.add(w.columns.parent_piecemark.eq(record.parent_piecemark));
	var sheetId = scopes.jobs.dsSheetArray['_'+record.sheet_number];
	if (!sheetId){return 0} else {sheetId = sheetId.toString()}
	w.root.where.add(w.columns.sheet_id.eq(globals.makeUUID(sheetId)));
	w.root.where.add(w.columns.grade.eq(record.grade));
	w.root.where.add(w.columns.finish.eq(record.finish));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var x = w.joins.add('db:/stsservoy/idfiles');
	x.on.add(x.columns.piecemark_id.eq(w.columns.piecemark_id));
	x.root.where.add(x.columns.delete_flag.isNull);
	var seqId = (scopes.jobs.dsSequenceArray['_'+record.sequence_number+'_'+scopes.jobs.importJob.jobId]) ? scopes.jobs.dsSequenceArray['_'+record.sequence_number+'_'+scopes.jobs.importJob.jobId] : scopes.jobs.createSequenceNumber(record.sequence_number);
	if (!scopes.jobs.dsSequenceArray['_'+record.sequence_number+'_'+scopes.jobs.importJob.jobId]){return 0}
	var lotId = (scopes.jobs.dsLotArray['_'+record.lot_number+'_'+scopes.jobs.importJob.jobId]) ? scopes.jobs.dsLotArray['_'+record.lot_number+'_'+scopes.jobs.importJob.jobId] : scopes.jobs.createLotNumber(record.lot_number);
	if (!scopes.jobs.dsLotArray['_'+record.lot_number+'_'+scopes.jobs.importJob.jobId]){return 0}
	x.root.where.add(x.columns.sequence_id.eq(globals.makeUUID(seqId)));
	x.root.where.add(x.columns.lot_id.eq(globals.makeUUID(lotId)));
	//q.groupBy.add(x.columns.idfile_id);
	q.result.add(x.columns.idfile_id.count,'count');
	var Q = databaseManager.getDataSetByQuery(q,-1);
	Q.rowIndex = 1;
	var countIs = Q.count*1;
	x.root.where.add(x.columns.status_description_id.isNull);
	var Q = databaseManager.getDataSetByQuery(q,-1);
	Q.rowIndex = 1;
	var countClean = Q.count*1;
	if (countClean*1 < countIs*1){countIs = countIs*-1}
	return countIs;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param labelsNeeded
 * @param pcmkQty
 *
 * @properties={typeid:24,uuid:"21861CA2-45EB-49C4-A8CB-22BBA167C95E"}
 */
function getLabelData(labelsNeeded, pcmkQty){
	var perLabel = Math.ceil(pcmkQty/labelsNeeded);
	var lastLabel = pcmkQty = (perLabel * (labelsNeeded - 1));
}
/**
 *
 * @properties={typeid:24,uuid:"C15E5EE3-B502-4FF0-B33C-1BBAF009B695"}
 */
function getDrawingNums(){
	var regexp = new RegExp('^D,([^,.]*),');
	var sheetArray = [];
	for (var idx = 0;idx < importResultsArray.length;idx++){
		var matched = importResultsArray[idx].match(regexp);
		if (matched){
			var sNum = matched[1];
			if (sNum == ""){continue}
			if (sheetArray.indexOf(sNum) != -1){continue}
			sheetArray.push(sNum);
		}
	}
	return sheetArray;
}
/**
 * @param jobNumber
 *
 * @properties={typeid:24,uuid:"8860CA71-EE7E-46E6-AABA-97715A1E334D"}
 */
function removeImportFileFromServer(jobNumber){
	/** @type {QBSelect<db:/stsservoy/import_prefs>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_prefs');
	q.result.add(q.columns.import_file);
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.job_number.eq(jobNumber));
	var Q = databaseManager.getDataSetByQuery(q,-1);
	if (Q.getMaxRowIndex() == 0){return}
	Q.rowIndex = 1;
	var randFile = Q.import_file;
	var servoyDir = scopes.prefs.importpath+"\\"+randFile;
	servoyDir = servoyDir.replace(/\\+/g,'/').replace('.','');
	//application.output('RM import file path '+servoyDir);

	var remoteFile = plugins.file.convertToRemoteJSFile(servoyDir);
	if (remoteFile.exists()){
		//application.output('remove remote file '+servoyDir);
		remoteFile.deleteFile();
	}
}
/**
 * @param event
 * @param filename
 *
 *	const hJobNum = 1, hJobName = 2, hGeneric = 3, hDate = 4, hTime = 5, hMetric = 6; //Header
	const tLoadNum = 1, tTrailerNum = 2, tCarrier = 3, tCapacity = 4, tShipped = 5, tIntermShipFirm = 6,
		tToBeReturned = 7, tDateReady = 8, tLoadCat1 = 9, tLoadCat2 = 10, tShippedFrom = 11, tDateRcv = 12,
		tLoadCat3 = 13; //Loads
	const dDrawingNum = 1, dRevision = 2, dMainMark = 3, dPieceMark = 4, dQty = 5, dShape = 6, dDims = 7,
		dGrade = 8, dLength = 9, dFinish = 10, dRemark = 11; //Detail
	const eApprovStatus = 1, eRefNum =  2, eRemark = 3, eRoute = 4, eCat = 5, eSubCat = 6, ePayCat = 7, 
		eAccPieceTrack = 8, eAccLoadTrack = 9; //Extra Detail
	const sSeq = 1, sQty = 2, sLotNum = 3; //Sequence
	const wWeight = 1;//Weight
	const zAssemGuid = 1; //Assembly GUID
	const yAssemGuid = 1, yPartGuid = 2; //Part GUID
	const uLoadNum = 1, uSeq = 2, uLotNum = 3, uQty = 4; //Assigned Load
	const oLoadNum = 1, oSeq = 2, oLotNum = 3, oDateLoad = 4, oQty = 5; //Load
	const qLoadNum = 1, qSeq = 2, qLotNum = 3, qDateReturn = 4, qQty = 5; //Return
 * @properties={typeid:24,uuid:"C04F9F19-E646-48DF-8417-F26C471ED085"}
 */
function selectPiecemarksToImport(event,fileName,filterSeqs,filterLots){
    var _oFR = new Packages.java.io.FileInputStream(fileName),
    	_oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
    	_oBR = new Packages.java.io.BufferedReader(_oIR),
    	_sLine = "dummy",
    	index = 0;
    var piecemark = '';var sheet = '';var sequences = []; var lots = [];
    piecemarksToImport = [];
    var seen = [];
	//try {
	    while (_sLine) {
	        _sLine = _oBR.readLine();
	        index++;
	
	        if (_sLine) {
	        	var thisLine = _sLine.split(',');
	        	if (thisLine[0] == 'D' && piecemark == ''){
	        		piecemark = thisLine[3];
	        		seen.push(piecemark)
	        	}
	        	if (thisLine[0] == 'S' && piecemark != ''){
	        		var sequence = thisLine[1];
	        		var lot = thisLine[3];
	        		if (filterSeqs.indexOf(sequence) != -1 || filterLots.indexOf(lot) != -1){
	        			var pcmk = piecemark+':'+sequence+':'+lot;
	        			if (!piecemarksToImport[piecemark]){
	        				piecemarksToImport.push(piecemark);
	        			}
	        			if (!piecemarksToSequence[piecemark]){piecemarksToSequence[piecemark] = []}
	        			if (!piecemarksToLot[piecemark]){piecemarksToLot[piecemark] = []}
	        			piecemarksToLot[piecemark].push(lot);
	        			piecemarksToSequence[piecemark].push(sequence);
		        		//application.output(index+' - '+pcmk);
	        		}
	        	}
	        	if (thisLine[0] == '*'){
	        		piecemark = '';
	        	}
	        }
	    }
	    _oFR = null;
	    _oIR = null;
	    _oBR = null;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"77FCBF98-3ADA-4270-B645-DC3F598BF030"}
 */
function removeExtraKissFiles(event){
	var yesterday = new Date().getTime();
	yesterday = yesterday-24*60*60*1000;
	var importDir = plugins.file.getDefaultUploadLocation()+'\\'+scopes.prefs.importpath;

	application.output('Directory '+importDir);
	//importDir = importDir.replace(/\/+/g,'\\').replace('.','');
	//importDir = importDir.replace('[A-Za-z]//','');
	importDir = importDir.replace('.\\','');
	application.output('Import file '+importDir);
	//if (1){return}
	importDir = importDir.replace(/\\/g,'/');
	var fileList = plugins.file.getRemoteFolderContents(plugins.file.convertToRemoteJSFile(importDir),'.kss');
	for (var index = 0;index < fileList.length;index++){
		if (fileList[index].isFile() && fileList[index].getName().match(/Import_/)){
			var fileDate = fileList[index].lastModified();
			var secondsDate = new Date(fileDate).getTime();
			if (secondsDate < yesterday){
				//application.output('removing file '+fileList[index]+' '+fileDate)
				fileList[index].deleteFile();
			} else {
				application.output('keep file '+fileList[index]+' '+fileDate)

			}
		}
	}
}