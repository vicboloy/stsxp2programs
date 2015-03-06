/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"025F1B47-E30F-46A9-A910-C565912A113F",variableType:-4}
 */
var stayField = false;
/**
 * @properties={typeid:35,uuid:"E7A9A131-D518-4A4B-94E4-29D68B642849",variableType:-4}
 */
var tabOrder = [];
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
	newValue = newValue.toUpperCase();
	statusLocation = statusLocation.toUpperCase();
	var statArray = application.getValueListArray('stsvlg_location');
	var newLoc = false;
	if (statArray.indexOf(statusLocation) == -1){
		statArray.push(statusLocation);
		newLoc = true;
	}
	if (newLoc){
		statArray.sort();
		application.setValueListItems('stsvlg_location',statArray);
	}
	globals.rfEmptyNextField(event,'worker');
	return true;
}
/**
 * @param sequence
 *
 * @properties={typeid:24,uuid:"76D17832-D7CF-4DDE-96B9-94BA39C5EC8C"}
 */
function unusedtabSeqRestore(){
	//return;
	var restore = [];
	if (controller.getTabSequence().length != 1) return
	for (var index = 0;index < tabOrder.length;index++){
		restore.push(elements[tabOrder[index]]);
	}
	controller.setTabSequence(restore);
}
/**
 * @properties={typeid:24,uuid:"74288612-41CD-4356-A42C-B9F029E97B79"}
 */
function unusedtabSeqRemove(){
	application.output(controller.getTabSequence())
	//if (controller.getTabSequence().length == 1){return}
	controller.setTabSequence([elements.current]);
	application.updateUI();
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
	///elements.current.requestFocus();
	var scannedID = newValue;
	stayField = (scannedID != "EXIT");
	//application.output('stay field '+stayField);
	globals.session.userEntry = scannedID;
	elements.location.enabled = true;
	elements.status.enabled = true;
	elements.worker.enabled = true;
	var barcodeId = globals.checkBarcode(scannedID);
	if (!barcodeId){
		currentID = "";
		//globals.rfErrorShow('Barcode does not exist');
		globals.errorDialogMobile(event,'701','current');
		globals.logger(true,'Barcode does not exist.');
		return true;
	}
	currentID = "";
	foundset.clear();
	globals.mob.barcode = scannedID;
	globals.mob.barcodeId = barcodeId;
	globals.mobIdSerialId = globals.mob.barcodeId; // setup global variable for division relation
	globals.mob.locationArea = statusLocation;
	globals.mob.workers = statusWorker;
	lastID = scannedID;

	globals.rfGetBarcodeIdfiles()
	if (!globals.barcodeAttached()){
		application.output('ERROR: Database inconsistent with barcode');//errortypeneeded
		globals.errorDialogMobile(event,'6002','current');
		globals.logger(true,'No idfiles for this barcode.');
		currentID = "";
		globals.mobPreviousLocation = "";
		globals.mobPreviousStatus = "";
		globals.mobLocationPieces = 0;
		globals.mobLocationWeight = 0;
		globals.mobItemPieces = "";
		return true;
	}
	
	if (!globals.barcodePlant()){
		globals.errorDialogMobile(event,'6001','current');
		globals.logger(true,'Piecemark is in the wrong plant.');
		return true;
	}
	if (!globals.barcodePercentage()){ // stubbed
		globals.errorDialog(event,'-1');
		return true;
	}
	// Load up the idfiles
	controller.loadRecords(databaseManager.convertToDataSet(globals.mob.idfiles)); // mob.idfiles
	// Get representative idfile record 1 of n
	globals.rfGetMobIdfile();
	globals.rfGetMobPiecemark(); // Get piecemark record
	var onHold = globals.barcodeOnHold(); //first check 1/29/2015 pp 
	if (onHold){
		globals.errorDialogMobile(event,'1050','current');
		globals.logger(true,'Idfile reports item on hold.');
		return true;
	}
	var bundle = globals.barcodeIsBundle(); //stubbed
	var routeOK = globals.rfCheckRouteOrder(); // route checks out 
	var shipStat = globals.barcodeShip(); 
	if (globals.rfTimed() && globals.mob.timedError != ""){
		globals.errorDialogMobile(event,globals.mob.timedError,'current');
		globals.logger(true,'Timed status error'+globals.mob.timedError);
		return true;
	}
	
	var status = globals.rfSaveScanTransaction(globals.mob.barcode,globals.session.stationId,globals.mob.locationArea);
	currentID = '';
	///if (!status){return}
	//scopes.globals.rfIdLength = scopes.globals.decToFeet(item_length);
	//scopes.globals.mobIdfiles = scopes.globals.rfaIdfiles;
	//var status = globals.rfCheckIdStatus(statusCode,statusLocation);
	globals.rfGetTransactionLast(globals.mob.idfiles[0]);
	globals.rfGetLocationStats(globals.mob.locationArea);
	globals.rfGetPiecesScanned(globals.mob.piecemark.piecemark_id, globals.mob.locationArea, globals.statusId);
	globals.mobPreviousLocation = globals.mob.locationPrev;
	globals.mobPreviousStatus = globals.mob.statusPrev;
	globals.mobLocationPieces = globals.mob.locationValues.pieces;
	globals.mobLocationWeight = globals.mob.locationValues.weight;
	globals.mobItemPieces = globals.mob.idValues.complete+" / "+scopes.globals.mob.idValues.total;
	null;
	currentID = "";
	
	//elements.current.requestFocus();
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
 * @properties={typeid:24,uuid:"73EAFE1C-F5E1-4001-8B5D-D49A13D6EE52"}
 */
function setTransShop(){
	elements.transShop.text = "Transactions "+globals.session.association;
	controller.focusField('status',true);
	//elements.status.requestFocus();
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
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E2A54E4-2F94-4384-A84B-98B424FA308D"}
 * @AllowToRunInFind
 */
function onShowForm(firstShow,event) {
	//foundset = databaseManager.getFoundSet('stsservoy','idfiles');
	// go through solution model > component > formIndex property.
	globals.mobForm = "rf_transactions";
	globals.mobProg = "Transactions";
	setTransShop();
	null;
	if (foundset.find()){
		delete_flag = 19; //why 19? maybe typo
		foundset.search();
	}
	null;
	statusCode = "";
	statusLocation = "";
	statusWorker = "";
	elements.status.requestFocus();
	//elements.location.requestFocus();
	//application.sleep(300);
	//elements.status.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CAF3DDFA-DD2E-4F15-ABC2-80593443C9E2"}
 */
function onActionKeys(event) {
	application.output('key pressed '+event.getType());
	// TODO Auto-generated method stub
}

