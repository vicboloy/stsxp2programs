/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"025F1B47-E30F-46A9-A910-C565912A113F",variableType:-4}
 */
var stayField = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8B33F61A-576C-4EDE-91F5-EA95EA420181"}
 */
var statusCode = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E08757A0-1F3F-4FF5-9AA2-0447D7B6E7EB"}
 */
var statusLocation = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5BE708EB-ACC1-443E-A243-A06F073BEA86"}
 */
var statusWorker = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D97CBB1D-6BFF-4A8A-BBF9-D126CCAFF449"}
 */
var currentID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"73C6BF41-2065-42C1-835F-D1D7F515B458"}
 */
var lastID = "";
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D5D84404-C6EC-4EB8-984D-E594A43EAAF9"}
 */
function onDataChangeLocation(oldValue, newValue, event) {
	//globals.showElement('worker',2);
	return true
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sequence
 *
 * @properties={typeid:24,uuid:"76D17832-D7CF-4DDE-96B9-94BA39C5EC8C"}
 */
function setTabSequence(sequence){
	null;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"F6D06FDF-2291-4430-8649-ECE5DA9CADB8"}
 */
function onDataChangeBarcode(oldValue, newValue, event) {
	var scannedID = newValue;
	stayField = (scannedID != "EXIT");
	application.output('stay field '+stayField);
	globals.session.userEntry = scannedID;
	//var k = globals.onErrorDisplayReturn;
	//globals.onErrorDisplayReturn = scopes.globals.errorDialog2();
	//if (!(k instanceof Continuation)){
	//	null;
	//}
	//application.output('barcode change');
	elements.location.enabled = true;
	elements.status.enabled = true;
	elements.worker.enabled = true;
	var barcodeId = scopes.globals.checkBarcode(scannedID);
	if (!barcodeId){
		currentID = "";
		globals.errorDialogMobile('701');
		elements.current.requestFocus();
		return true;
	}
	/**
	 * job number
	 * sequence number
	 * previous status
	 * previous location
	 * PcsW/Status
	 * item weight
	 * item length
	 * Locn Wt
	 * Locn Pcs
	 */
	scopes.globals.mobIdSerialId = scannedID;
	//scopes.globals.mobBarcodePrev = scopes.globals.mobBarcode;
	scopes.globals.mobBarcode = scannedID;
	//scopes.globals.mobStatus = statusCode;
	scopes.globals.mobLocation = statusLocation;
	scopes.globals.mobWorkers = statusWorker;
	//currentID = scopes.globals.mobBarcode;
	lastID = scannedID;
	
	
	controller.loadRecords(scopes.globals.rfGetBarcodeIdfiles(barcodeId)); // mob.idfiles
	globals.saveScanTransaction(scannedID,statusCode,statusLocation);
	currentID = '';
	//scopes.globals.rfIdLength = scopes.globals.decToFeet(item_length);
	//scopes.globals.mobIdfiles = scopes.globals.rfaIdfiles;
	scopes.globals.rfGetMobIdfile(scopes.globals.mob.idfiles[0]);
	scopes.globals.rfGetMobPiecemark(scopes.globals.mob.idfile.piecemark_id);
	scopes.globals.rfGetTransactionLast(scopes.globals.mob.idfiles[0]);
	scopes.globals.rfGetLocationStats(scopes.globals.mobLocation);
	scopes.globals.rfGetPiecesScanned(scopes.globals.mob.piecemark.piecemark_id, scopes.globals.mobLocation, scopes.globals.mobStatus);
	scopes.globals.mobPreviousLocation = scopes.globals.mob.transaction.location;
	scopes.globals.mobPreviousStatus = scopes.globals.mob.transaction.status;
	scopes.globals.mobLocationPieces = scopes.globals.mob.location.pieces;
	scopes.globals.mobLocationWeight = scopes.globals.mob.location.weight;
	scopes.globals.mobItemPieces = scopes.globals.mob.id.complete+" / "+scopes.globals.mob.id.total;
	null;
	/**
	scopes.globals.rfGetIdfileDetails(scopes.globals.mobIdfiles[0]);
	application.output(scopes.globals.mobIdfiles);
	//globals.errorMessageMobile = "";
	//var rec = scopes.globals.fsBarcodeIdfiles.getRecord(1);
	forms.rf_transaction_list.controller.loadRecords(scopes.globals.mobIdfiles);
	forms.rf_transaction_list.controller.setSelectedIndex(1);
	var piecemarkId = scopes.globals.rfIdfileRec.piecemarkId;
	scopes.globals.rfStatCount = scopes.globals.rfGetCountPieces(statusLocation,statusCode,piecemarkId);
	var testraz = scopes.globals.rfGetLocationWeight(statusLocation);
	*/
	currentID = "";
	elements.current.requestFocus();
	return true;
}
/**
 * @properties={typeid:24,uuid:"95F94418-73E7-44C7-A483-3B31F88A4D30"}
 */
function resetStatusCode(){
	statusCode = "";
}
/**
 * @properties={typeid:24,uuid:"DF1AC269-3F74-40A2-B479-EF43D0DB62FE"}
 */
function resetWorkerCode(){
	statusWorker = "";
}
/**
 * reset location weight, location pieces, piecemark pieces, total pieces
 * reset oldid status, 
 * check for id in file, and id in bom
 * 
 */

 /**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E2A54E4-2F94-4384-A84B-98B424FA308D"}
 * @AllowToRunInFind
 */
function onShowForm(event) {
	//foundset = databaseManager.getFoundSet('stsservoy','idfiles');
	null;
	if (foundset.find()){
		delete_flag = 19;
		foundset.search();
	}
	null;
}
