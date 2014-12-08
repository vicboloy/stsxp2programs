/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B25F607F-BC2A-4CE1-81D1-310CFA1EEFAC"}
 */
var jobIDmobile = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DDC7372C-87C5-4BB4-A7EF-F1E3D661818A"}
 */
var tenantIDmobile = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"09BAEC63-2860-4328-A6A9-8C0E5055D3D0"}
 */
var divisionIDmobile = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0D5DFE6-D22E-4D0C-9748-796372078ECF"}
 */
var cronJob = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD6026E2-E2E4-4560-BECC-B121265ADEC8"}
 */
var errorMessageMobile = "";
/**
 * @properties={typeid:35,uuid:"C0EE1CDE-58D4-4F9E-9C67-23BED8013D6E",variableType:-4}
 */
var workerList = [];
/**
 * @properties={typeid:35,uuid:"FFB1B7D8-FC6F-44DC-9F01-BD65585867B0",variableType:-4}
 */
var mob = {
	idfiles : [],
	idfile : {},
	piecemark : {},
	transaction : {},
	location : {pieces : 0, weight : 0},
	id : {total : 0, complete : 0},
	status : ""
}
/**
 * @properties={typeid:35,uuid:"C58B338D-9E1E-4F8A-BFFD-2498BDA3BFC4",variableType:-4}
 */
var mobIdfiles = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6BFAEF61-8FF6-4895-8411-A291B688F146"}
 */
var mobIdSerialId = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"17D9CCBB-1139-45F6-BDAA-7E5C8334B52A"}
 */
var mobRepIdfile = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"74D5153C-91AA-4248-A34F-24B6627C4970"}
 */
var mobRepTransaction = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C39D6A71-733F-4467-9535-16BE2DFDADA5"}
 */
var mobBarcode = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAA4F8C1-0622-4DE5-93E5-57056D110F37"}
 */
var mobAssocId = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32349B37-F9F1-41E2-B91C-5ED2EAD42CA7"}
 */
var mobTenantId = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FBEE0B8B-FCBC-43EB-9D09-5DCD9F6C2D14"}
 */
var mobStatus = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A2E5AAC0-7A4A-47D6-A996-1A801CD6CF2B"}
 */
var mobLocation = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0DDC75ED-73F4-4E75-98E9-39E9F262D311"}
 */
var mobWorkers = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A472168B-6291-43D0-938B-50A8198B30BB"}
 */
var mobPreviousStatus = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5AEFE6D4-1396-4BBF-8E03-D813D3423BEA"}
 */
var mobPreviousLocation = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D6AF8C6-26F7-4F94-A32C-6CDB4226C442"}
 */
var mobItemPieces = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F512D8CF-3BE4-4BD3-80F4-5CBA412483C7",variableType:4}
 */
var mobLocationWeight = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FC08EB18-83F4-49AD-AC04-2EF1A8A1E2FC",variableType:4}
 */
var mobLocationPieces = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B7DE380-C09B-4C24-8CC8-F8BB66567B13"}
 */
var mobLoggedEmployeeId = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"765BFD85-611F-4EC5-B429-0EFEBC1D83B4"}
 */
var mobMenu = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"039BADC5-71DA-4088-A041-6536CF7A1936"}
 */
var mobBarcodePrev = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ADFD0478-8FA1-4EE5-B730-629BEF08DADA",variableType:4}
 */
var repeatLoad = 0;
/**
 * @properties={typeid:35,uuid:"FA84497D-3A0F-4CFB-A875-BB561B2B2CFA",variableType:-4}
 */
var session = {
	capture : false,
	jobNumber : "",
	association : "",
	tenant_uuid : "",
	worker : "",
	login : "",
	sessionId : "",
	fabShop : "",
	program : "",
	statusCode : "",
	statusLocation : "",
	userEntry : "",
	client : ""
}
/**
 * @properties={typeid:35,uuid:"6225E06A-DBBF-40D2-8DA6-BAD038CECB04",variableType:-4}
 */
var onErrorDisplayReturn = null;
/**
 * @properties={typeid:35,uuid:"26C6DB38-D4DA-457C-9D99-A7A3F7DF7F1A",variableType:-4}
 */
var fsBarcodeIdfiles = null;
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param userId
 *
 * @properties={typeid:24,uuid:"E4BC04A5-2403-47C8-B3A1-20F9009EAFAD"}
 */
function getLoggedEmployee(userId){
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var e = databaseManager.getFoundSet('db:/stsservoy/employee');
	if (e.find()){
		e.employee_userid = userId;
		e.tenant_uuid = tenantIDmobile;
		if (e.search()){
			var record = e.getRecord(1);
			var userId_uuid = e.employee_username;
			/** @type {JSFoundSet<db:/stsservoy/users>} */
			var f = databaseManager.getFoundSet('db:/stsservoy/users');
			if (f.find()){
				f.user_id = e.employee_userid;
				f.tenant_uuid = e.tenant_uuid;
				if (f.search()){
					session.login = f.user_name;
				}
			} else {
				session.login = e.employee_userid;
			}
			session.capture = e.employee_rf_logging;
			return record.employee_id;
		}
	}
	return null;
}
/**
 * @properties={typeid:24,uuid:"9B25006C-CD80-4F3D-9987-C58C24C47CB8"}
 */
function locationList(){
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.location);
	q.result.distinct = true;
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		);
	var resultQ = databaseManager.getFoundSet(q);
	var locationArray = [];
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		locationArray.push(rec.location);
	}
	
	return locationArray;
}
/**
 * @properties={typeid:24,uuid:"EDCF5A8B-55F3-44C6-AD06-F25FB9F4F786"}
 */
function workersList(){
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var q = databaseManager.createSelect('db:/stsservoy/employee');
	q.result.add(q.columns.employee_number);
	q.result.distinct = true;
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.employee_active_flag.eq(1))
		);
	var resultQ = databaseManager.getFoundSet(q);
	workerList = [];
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		workerList.push(rec.employee_number);
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param inArray
 *
 * @properties={typeid:24,uuid:"78E838E7-DEE0-44A3-9E99-2466517823A6"}
 */
function arrayToList(inArray){
	var aLength = inArray.length;
	var outList = "(";
	for (var index = 0;index < aLength;index++){
		outList = outList + "'"+inArray[index];
		if (index == aLength-1){
			outList = outList + "')";
		} else {
			outList = outList + "',";
		}
	}
	return outList;
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
 * @properties={typeid:24,uuid:"9CBE0820-ED17-4CFB-B637-1FAE155625D8"}
 */
function checkBarcode(barcode) {
	//check for serial barcode
	null;
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.result.add(q.columns.id_serial_number_id);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.id_serial_number.eq(barcode))
		);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() == 1){
		var rec = resultQ.getRecord(1);
		return rec.id_serial_number_id;
	}
	
	return null;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B5F3140A-92DF-4C0D-A4A0-985F31F6573E"}
 */
function onActionScreenToggle(event) {
	if (!scopes.prefs.screenFull){
		scopes.prefs.screenFull = false;
		scopes.prefs.screenOrigX = 0;
		scopes.prefs.screenOrigY = 0;
		scopes.prefs.screenWidth = 0;
		scopes.prefs.screenHeight = 0;
	}
	var window = application.getActiveWindow();
	if (scopes.prefs.screenFull == false){
		scopes.prefs.screenHeight = window.getHeight();
		scopes.prefs.screenWidth = window.getWidth();
		scopes.prefs.screenOrigX = window.getX();
		scopes.prefs.screenOrigY = window.getY();
		window.setLocation(0, 0);
		window.setSize(application.getScreenWidth(),scopes.prefs.screenHeight);
		scopes.prefs.screenFull = true;
	} else {
		window.setLocation(scopes.prefs.screenOrigX, scopes.prefs.screenOrigY);
		window.setSize(scopes.prefs.screenWidth,scopes.prefs.screenHeight);
		scopes.prefs.screenFull = false;
	}
	//forms[event.getFormName()].controller.loadRecords();
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param barcodeID
 *
 * @properties={typeid:24,uuid:"B0DDCB6E-CC33-49BF-957E-01B9BE0FB69B"}
 */
function rfGetBarcodeIdfiles(barcodeID){
	var idfileIdList = mob.idfiles;
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.id_serial_number_id.eq(barcodeID))
		);
	var resultQ = databaseManager.getFoundSet(q);
	scopes.globals.fsBarcodeIdfiles = resultQ;
	var idfileIdList = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		var rec = resultQ.getRecord(index);
		idfileIdList.push(rec.idfile_id);
		index++;
	}
	mob.idfiles = idfileIdList;
	null;
	return resultQ;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sLocation
 *
 * @properties={typeid:24,uuid:"0D08F424-DA61-4C00-86C9-AE0A0BD67BF0"}
 */
function rfLocationChange(sLocation){
	globals.session.statusLocation = sLocation;
	globals.logger(false,'');
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sLocation
 *
 * @properties={typeid:24,uuid:"16DE7027-0DC8-431E-A069-957B93FC6904"}
 */
function rfGetLocationStats(sLocation){
	scopes.globals.mob.location.pieces = 0;
	scopes.globals.mob.location.weight = 0;
	if (sLocation == "") {return}
	//get all transactions idfiles with location
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	//q.result.add(q.columns.trans_id);
	q.result.add(q.columns.idfile_id);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.location.eq(sLocation))
	);
	var resultQ = databaseManager.getFoundSet(q);
	
	//get last transaction idfiles for location
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var r = databaseManager.createSelect('db:/stsservoy/transactions');
	r.result.add(r.columns.trans_id);
	r.result.add(r.columns.idfile_id);
	r.result.add(r.columns.location);
	r.result.add(r.columns.transaction_date);
	r.sort.add(r.columns.transaction_date.desc)
	r.where.add(
	r.and
		.add(r.columns.delete_flag.isNull)
		.add(r.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(r.columns.idfile_id.isin(q))
	);
	var resultR = databaseManager.getFoundSet(r);
	var index = 1;
	var loc = "";var idfile = "";var idfileList = [];var piecemarkList = [];
	while (index <= resultR.getSize()){
		var rec = resultR.getRecord(index);
		if (idfile != rec.idfile_id){
			if (rec.location == sLocation){
				if (idfileList.indexOf(rec.idfile_id) == -1){idfileList.push(rec.idfile_id)}
			}
			idfile = rec.idfile_id;
		}
		index++;
	}
	scopes.globals.mob.location.pieces = idfileList.length;
	
	// get piecemarks for location, above was only a count by idfiles with that transaction location
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var w = databaseManager.createSelect('db:/stsservoy/idfiles');
	w.result.add(w.columns.idfile_id);
	w.result.add(w.columns.piecemark_id);
	w.where.add(
	w.and
		.add(w.columns.delete_flag.isNull)
		.add(w.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(w.columns.idfile_id.isin(idfileList))
	);
	var resultW = databaseManager.getFoundSet(w);
	index = 1;
	while(index <= resultW.getSize()){
		var rec = resultW.getRecord(index);
		if (piecemarkList.indexOf(rec.piecemark_id) == -1){piecemarkList.push(rec.piecemark_id)}
		index++;
	}

	// get piecemarks for idfileList
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var s = databaseManager.createSelect('db:/stsservoy/piecemarks');
	s.result.add(s.columns.piecemark_id);
	s.result.add(s.columns.item_weight);
	s.result.distinct = true;
	s.where.add(
	s.and
		.add(s.columns.delete_flag.isNull)
		.add(s.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(s.columns.piecemark_id.isin(piecemarkList))
	);
	var resultS = databaseManager.getFoundSet(s);
	
	// grab weight for each idfile and add to total weight
	index = 1; var totWeight = 0;
	while(index <= resultW.getSize()){
		var rec = resultW.getRecord(index);
		var pFS = resultS.loadRecords(rec.piecemark_id);
		totWeight = totWeight + resultS.item_weight;
		index++;
	}
	scopes.globals.mob.location.weight = totWeight;
}
/**
 * @properties={typeid:24,uuid:"4D0121B5-F814-4A00-9F89-079AB74C60A1"}
 */
function rfSelectFabPlant(){
	
}
/**
 * @properties={typeid:24,uuid:"C23097C7-0091-41B2-8224-026404DC4274"}
 */
function getMenuList(){
	var progList = new Array;
	progList.push('Transactions');
	progList.push('Exit');
	//application.setValueListItems('rfProgramList',['Transactions','Exit']);
	application.setValueListItems('rfProgramList',progList);
}
/**
 * @properties={typeid:24,uuid:"1D7946B6-714D-496A-BEAC-C434A61EAC91"}
 */
function rfGetMobIdfile(idfileId){
	var idfile = mob.idfile;
	//var idfileId = mob.idfiles[0]; // at least one of these
	scopes.globals.mobRepIdfile = scopes.globals.mobIdfiles[0];
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.piecemark_id);
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.sequence_id);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.id_serial_number_id);
	q.result.add(q.columns.original_quantity);
	q.result.add(q.columns.tenant_uuid);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.isin(globals.mob.idfiles))
	);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
		mob.idfile = resultQ.getRecord(1);
		application.output(mob.idfile.edit_date);
	}
	return resultQ;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param piecemarkId
 *
 * @properties={typeid:24,uuid:"365474AC-59B1-4076-BBE8-3A9234FC455E"}
 */
function rfGetMobPiecemark(piecemarkId){
	var piecemark = mob.piecemark;
	scopes.globals.mobRepIdfile = scopes.globals.mobIdfiles[0];
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var q = databaseManager.createSelect('db:/stsservoy/piecemarks');
	q.result.add(q.columns.item_length);
	q.result.add(q.columns.item_weight);
	q.result.add(q.columns.parent_piecemark);
	q.result.add(q.columns.piecemark);
	q.result.add(q.columns.piecemark_unit_of_measure);
	q.result.add(q.columns.uom_length);
	q.result.add(q.columns.uom_weight);
	q.result.add(q.columns.cost_of_work_code);
	q.result.add(q.columns.cost_of_work_quantity);
	q.result.add(q.columns.description);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.piecemark_id.eq(piecemarkId))
	);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
		mob.piecemark = resultQ.getRecord(1);
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param piecemarkId
 *
 * @properties={typeid:24,uuid:"B8DB4ECB-760C-42B9-93C7-35926263EB67"}
 */
function rfGetPiecesScanned(piecemarkId, sLocation, sStatus){
	// get total idfiles of piecemark
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.piecemark_id);
	q.result.add(q.columns.original_quantity);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.piecemark_id.eq(piecemarkId))
	);
	var resultQ = databaseManager.getFoundSet(q);
	var countPieces = 0;
	var maxIndex = 1; var idfileList = [];
	while (maxIndex < resultQ.getSize()){
		var rec = resultQ.getRecord(maxIndex);
		if (idfileList.indexOf(rec.idfile_id) == -1){idfileList.push(rec.idfile_id)}
		maxIndex++;
	}
	scopes.globals.mob.id.total = maxIndex;
	
	// over all idfiles, get transactions with this location and status.  that count will be total marked
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var r = databaseManager.createSelect('db:/stsservoy/transactions');
	r.result.add(r.columns.trans_id);
	r.result.add(r.columns.location);
	r.result.add(r.columns.status);
	//r.result.distinct = true;
	r.where.add(
	r.and
		.add(r.columns.delete_flag.isNull)
		.add(r.columns.idfile_id.isin(idfileList))
		.add(r.columns.location.eq(sLocation))
		.add(r.columns.status.eq(sStatus))
	);
	var resultR = databaseManager.getFoundSet(r);
	var index = 1;
	while (index < resultR.getSize()){
		index = resultR.getSize();
		index++;
	}
	scopes.globals.mob.id.complete = index;
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
 * @properties={typeid:24,uuid:"26985B1F-17E8-4514-8F2A-6FF5FFBAA236"}
 */
function rfGetStatusChange(oldValue, newValue, event) {
	globals.session.userEntry = newValue;
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.result.add(q.columns.status_code);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.status_code.eq(newValue))
	);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ == 0){
		errorDialogMobile('401');
		var formName = event.getFormName();
		forms[formName].elements.status.requestFocus();
		forms[formName].resetStatusCode();
		return true;
	}
	globals.mob.status =  newValue;
	globals.logger(false,'Status OK');
	return true
}
/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D4DB847F-AB68-451C-B4FE-9E20C9EA487F"}
 */
function onFocusLost(event) {
	var formName = event.getFormName();
	var elName = event.getElementName();
	var entry = event.getSource().getDataProviderID();
	var variable = forms[formName];
	var value = variable[entry];
	if (value == ""){
		forms[formName].elements[elName].requestFocus();		
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param idfileId
 *
 * @properties={typeid:24,uuid:"CC9C12D0-7375-4622-96E0-91FDE9C1F935"}
 */
function rfGetTransactionLast(idfileId){
	mob.transaction = {};
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.location);
	q.result.add(q.columns.status);
	q.result.add(q.columns.transaction_date);
	q.sort.add(q.columns.transaction_date.desc);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.eq(idfileId))
	);
	var resultQ = databaseManager.getFoundSet(q);
	var index = resultQ.getSize();
	mob.transaction = {};
	if (index > 1){mob.transaction = resultQ.getRecord(2)}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param workerList
 * @param event
 *
 * @properties={typeid:24,uuid:"F9C47BF5-F1BE-46D1-82FF-C80A0246CBEF"}
 */
function rfGetWorker(oldValue, workers, event){
	if (workers == ""){return true}
	globals.session.userEntry = workers;
	var message = "";
	var workerList = workers.split('.');
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var q = databaseManager.createSelect('db:/stsservoy/employee');
	q.result.add(q.columns.employee_number)
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.employee_active_flag.eq(1))
	);
	var resultQ = databaseManager.getFoundSet(q);
	var workerArray = [];
	var size = databaseManager.getFoundSetCount(resultQ);
	for (var index = 1;index <= size;index++){
		var rec = resultQ.getRecord(index);
		workerArray.push(rec.employee_number)
	}
	for (index = 0;index < workerList.length;index++){
		if (workerArray.indexOf(workerList[index]) == -1){
			errorDialogMobile('150');
			var formName = event.getFormName();
			forms[formName].elements.worker.requestFocus();
			forms[formName].resetWorkerCode();
			return true;
		}
	}
	globals.logger(false,message);
	return true;
}
/**
 * @properties={typeid:24,uuid:"D48C150B-3D61-4633-9505-DE38F1F6991B"}
 */
function saveScanTransaction(sBC, sStatus, sLocation){
	if (sStatus == ""){return}
	application.output('save scan transaction');
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.isin(globals.mob.idfiles))
		.add(q.columns.status.eq(sStatus))
	);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() != 0){
		scopes.globals.errorDialogMobile('403');
		forms['rf_transactions'].elements.current.requestFocus();
		return false;
	}
	//worker_id,worker2_id,worker3_id,worker4_id,worker5_id, tenant_uuid, employee_id,fabshop_id (guids)
	//location, status, code, edit_date
	//transaction_date,transaction_duration,transaction_start,transaction_end
	//quantity?
	//skip if status already recorded
	var date = new Date();
	//var user = scopes.globals.
	var workerIds = [];
	var currentWorkers = [];
	workerIds = globals.workerIdList(workerList);
	var workers = mobWorkers.split(".");
	for (var index = 0;index < workers.length;index++){
		currentWorkers.push(workerIds[workers[index]]);
	}
	//mobLocation, mobRepIdfile, mobStatus,
	//globals.workerList;
	//globals.mobIdSerialId;
	//globals.mobIdfiles;
	var transIdfiles = [];
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var newFS = databaseManager.getFoundSet('db:/stsservoy/transactions');
	var recordsToSave = [];
	for (index = 0;index < mob.idfiles.length;index++){
		var newRec = newFS.newRecord();
		newFS.status = sStatus;
		newFS.fabrication_shop = null;///////////////////////TEXT
		newFS.employee_id = globals.mobLoggedEmployeeId;//UUID
		newFS.idfile_id = mob.idfiles[index];
		newFS.location = sLocation;
		newFS.transaction_date = date;
		newFS.tenant_uuid = globals.mobTenantId;
		for (index = 0;index < currentWorkers.length;index++ ){
			switch (index){
				case 0: newFS.worker_id = currentWorkers[index];break;
				case 1: newFS.worker2_id = currentWorkers[index];break;
				case 2: newFS.worker3_id = currentWorkers[index];break;
				case 3: newFS.worker4_id = currentWorkers[index];break;
				case 4: newFS.worker5_id = currentWorkers[index];break;
				default:
			}
		}
		recordsToSave.push(newRec);
	}
	for (index = 0;index < recordsToSave.length;index++){
		var rec = newFS.getRecord(recordsToSave.pop());
		databaseManager.saveData(rec);
	}
	//var batchSet = databaseManager.getFoundSetUpdater(resultQ);
	//batchSet.setColumn(name,value)
	return true;
}
/**
 * @AllowToRunInFind
 * 
 * @param workerArray
 *
 * @properties={typeid:24,uuid:"0EAA253F-17C4-4761-A09A-172F25060113"}
 */
function workerIdList(workerArray){
	var workerIds = [];
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var q = databaseManager.createSelect('db:/stsservoy/employee');
	q.result.add(q.columns.employee_number);
	q.result.add(q.columns.employee_id);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.employee_active_flag.eq(1))
		.add(q.columns.employee_number.isin(workerArray))
	);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		workerIds[rec.employee_number] = rec.employee_id;
	}
	return workerIds;
}
/**
 * @properties={typeid:24,uuid:"144586D4-BE5E-4FA4-96D5-F3A068B80B96"}
 */
function formParent(){
	//dataset columns: [containername(1),formname(2),tabpanel or beanname(3),tabname(4),tabindex(5),tabindex1based(6)]
	//dataset rows: mainform(1) -> parent(2)  -> current form(3) (when 3 forms deep)
	/** @type {JSDataSet} */
	var dataset = controller.getFormContext();
	if (dataset.getMaxRowIndex() > 1) 
	{
		// form is in a tabpanel
		var parentFormName = dataset.getValue(1,2)
		return parentFormName;
	}
	return null;
}
/**
 * @properties={typeid:24,uuid:"8B70492E-B098-423C-BE77-90588059A238"}
 */
function errorDialog(errorNum){
	var conted = new Continuation();
	var win = application.createWindow("Error "+errorNum, JSWindow.MODAL_DIALOG);
	var win = application.getActiveWindow();
	//var winX = win.getX()+5;
	//var winY = win.getY()+5;
	//var winXwidth = win.getWidth()-10;
	//var winYwidth = win.getHeight()-10;
	//win.setInitialBounds(winX, winY, winXwidth, winYwidth);
	win.title = "Error "+errorNum+" error "+errorNum+" error "+errorNum+" error "+errorNum+" error "+errorNum;
	win.show('dialogErrorMessage');
	return conted;
	//controller.show(win);
	//return number;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param errorNum
 *
 * @properties={typeid:24,uuid:"E5021DE9-0377-478B-8AE2-CC18B4F90260"}
 * @AllowToRunInFind
 */
function errorDialogMobile(errorNum){
	/** @type {JSFoundSet<db:/stsservoy/messages>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/messages');
	var errorMessage = "Unidentified error. Contact technical support.";
	if (fs.find()){
		fs.message_num = errorNum;
		if (fs.search()){
			errorMessage = fs.message_text;
		}
	}
	scopes.globals.logger(false,errorMessage);
	scopes.globals.DIALOGS.setDialogHeight(150);
	scopes.globals.DIALOGS.setDialogWidth(150);
	scopes.globals.DIALOGS.showErrorDialog('Error '+errorNum,errorMessage,'OK');
}
/**
 * @properties={typeid:24,uuid:"F6C205C3-0DEB-43F2-B45F-CDC8A26FF411"}
 */
function loggerTable(formName){
	null;
	forms[formName].refreshTable();
}
/**
 * @param capture
 * @param message
 *
 * @properties={typeid:24,uuid:"B1694AD4-23FA-4933-9C10-331E7165C95C"}
 */
function logger(capture,message){
	if (!(capture || globals.session.capture)){return}
	/** @type {JSFoundSet<db:/stsservoy/rf_transactions>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/rf_transactions');
	fs.newRecord();
	fs.transaction_date = new Date();
	fs.tenant_uuid = session.tenant_uuid;
	fs.rf_comm_data = message;
	fs.fabrication_shop = session.fabShop;
	fs.job_number = session.jobNumber;
	fs.rf_program = session.program;
	fs.signon_employee = session.login;
	fs.status_code = session.statusCode;
	fs.status_location = session.statusLocation;
	fs.worker = session.worker;
	fs.division = session.association;
	fs.entry_response = session.userEntry;
	fs.rf_client = session.sessionId;
	
	databaseManager.saveData(fs);
}

