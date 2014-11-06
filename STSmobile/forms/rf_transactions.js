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
	//var k = globals.onErrorDisplayReturn;
	//globals.onErrorDisplayReturn = scopes.globals.errorDialog2();
	//if (!(k instanceof Continuation)){
	//	null;
	//}
	//application.output('barcode change');
	var barcodeId = scopes.globals.checkBarcode(newValue);
	if (!barcodeId){
		scopes.globals.errorDialogMobile('701');
		return false;
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
	scopes.globals.mobIdSerialId = newValue;
	//scopes.globals.mobBarcodePrev = scopes.globals.mobBarcode;
	scopes.globals.mobBarcode = newValue;
	//scopes.globals.mobStatus = statusCode;
	scopes.globals.mobLocation = statusLocation;
	scopes.globals.mobWorkers = statusWorker;
	currentID = scopes.globals.mobBarcode;
	lastID = newValue;
	
	
	controller.loadRecords(scopes.globals.rfGetBarcodeIdfiles(barcodeId)); // mob.idfiles
	globals.saveScanTransaction(currentID,statusCode,statusLocation);
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
	//controller.focusField('');
	return true;
}

/**
 * reset location weight, location pieces, piecemark pieces, total pieces
 * reset oldid status, 
 * check for id in file, and id in bom
 * 
 */