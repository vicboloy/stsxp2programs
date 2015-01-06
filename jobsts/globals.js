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
 * @properties={typeid:35,uuid:"DA5EF721-0D66-413E-9A75-6AC4111C23BA",variableType:-4}
 */
var aMobAssocs = [];
/**
 * index by [status+location] is the process number (string) but is a number
 * @properties={typeid:35,uuid:"81DE74EE-A452-4C16-9DB2-DC142A5ACAA0",variableType:-4}
 */
var aMobIdProcess = []; // all part of an array for status and route
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
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14DD78C6-BFE4-4207-99BB-E0BCA44D5757",variableType:4}
 */
var hideEmptyColumns = 1;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DEC3993C-4DE3-462F-8AEC-E6D5C5A82E31"}
 */
var winTrackProvider = "";
/**
 * @properties={typeid:35,uuid:"C0EE1CDE-58D4-4F9E-9C67-23BED8013D6E",variableType:-4}
 */
var workerList = [];
/**
 * mappings object, these are 1:1 mappings and reverse mappings
 * assocs = assocs[association_uuid] = association_name
 * fabShops = 
 * @properties={typeid:35,uuid:"C68F9A1B-9EBB-4312-87E5-0F31C9C09514",variableType:-4}
 */
var m = {
	assocs : [],
	fabShops : [],
	routes : []
}
/**
 * listings object, lists related to 
 * routeLegs = routeLegs[route_name.TXT] = (status_description_id.UUID...)
 * tenantAssocs = tenantAssocs[index] = (association_UUID...)
 * @properties={typeid:35,uuid:"126B2E5A-C055-42B7-9C4F-77820427FF5B",variableType:-4}
 */
var l = {
	routes : [],
	routeLegs : [],
	routeDefault : [],
	assocs : [],
	fabShops : [],
	statusCodes : []
}
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
 * @properties={typeid:35,uuid:"E415F389-94A4-4145-A583-1EA9D88A6E7F",variableType:-4}
 */
var mobFabShops = [];
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
 * @properties={typeid:35,uuid:"B1C06BAE-CF57-4068-817F-778B8C2822EF",variableType:-4}
 */
var mobRouteOrder = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C39D6A71-733F-4467-9535-16BE2DFDADA5"}
 */
var mobBarcode = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"529F5787-8C81-424E-89C4-E0309B89092D"}
 */
var mobAssoc = "";
/**
 * @properties={typeid:35,uuid:"9002ABC4-750B-4051-8FC6-6B876D594F1B",variableType:-4}
 */
var mobAssocs = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAA4F8C1-0622-4DE5-93E5-57056D110F37"}
 */
var mobAssocId = "";
/**
 * @properties={typeid:35,uuid:"53D729D1-C436-40AC-8000-A5AD12AC3611",variableType:-4}
 */
var mobAssocIds = [];
/**
 * @properties={typeid:35,uuid:"AA2B90EC-BC51-4220-8A6D-E670A05982A0",variableType:-4}
 */
var mobAssocMap = [];
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
 * @properties={typeid:35,uuid:"D460E7D2-7532-44DF-9E9A-4EAE20ACD403"}
 */
var mobMenuProvider = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1C53066-0DB6-4CC5-828A-2DCFA4282293"}
 */
var mobProg = "";
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
	statusCodes : [],
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
 * @properties={typeid:35,uuid:"6A020A7B-171A-4584-8390-2ABACD8036DB",variableType:-4}
 */
var functionKeyDescrip = [];
/**
 * @properties={typeid:35,uuid:"1B2251F3-8C0A-4653-949C-32C1F236D21F",variableType:-4}
 */
var functionKeyDescripB = [];
/**
 * 
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"1B5629B5-22AA-49B3-97FC-DEEF20D79B2B"}
 */
var functionKeyProvider = "";
/**
 * @properties={typeid:35,uuid:"F53B9690-F997-4E9E-BF76-3A957B7B53DE",variableType:-4}
 */
var functionKeyProcedure = [];
/**
 * @properties={typeid:24,uuid:"739123F9-8C1E-4AAC-819B-81074033078C"}
 * @AllowToRunInFind
 */
function getAssociation(assocID){
	if (aMobAssocs.length == 0){
		/** @type {JSFoundSet<db:/stsservoy/associations>} */
		var e = databaseManager.getFoundSet('db:/stsservoy/associations');
		if (e.find()){
			e.tenant_uuid = globals.secCurrentTenantID;
			if (e.search()){
				var count = e.getSize();
				for (var index = 1;index <= count;index++){
					var rec = e.getRecord(index);
					aMobAssocs[rec.association_uuid] = rec.association_name;
					aMobAssocs[rec.association_name] = rec.association_uuid;
				}
			}
		}
	}
	mobAssoc = aMobAssocs[assocID];
}
/**
 * TODO generated, please specify type and doc for the params
 * @param status
 * @param fabShop
 *
 * @properties={typeid:24,uuid:"595068C7-7C9B-4B9A-8CFC-99616DB4D127"}
 */
function getFabricationShopID(status,fabShop){
	//fabricationShop is status and association/division
	
}
/**
 * @properties={typeid:24,uuid:"700EEFCA-804B-4594-8015-C30920C40101"}
 */
function getMappings(){
	getAssociations();
	getStatusDescriptions();
	getRoutes();
	getRouteLegs();
}
/**
 * @properties={typeid:24,uuid:"69456D2F-A197-41E5-8FCA-E7187F1BEE40"}
 */
function getAssociations(){
	globals.l.assocs = [];
	globals.m.assocs = [];
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var q = databaseManager.createSelect('db:/stsservoy/associations');
	q.result.add(q.columns.association_uuid);
	q.result.add(q.columns.association_name);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
	);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var record = resultQ.getRecord(index);
		var assocId = record.association_uuid+"";
		var assocName = record.association_name;
		if (globals.l.assocs.indexOf(assocName) == -1){
			globals.l.assocs.push(assocName);
		}
		globals.m.assocs[assocId] = assocName;
		globals.m.assocs[assocName] = assocId;
	}
}
/**
 * fabShop[status_description.status_descripton_id.UUID]
 		= status_description.fabrication_shop_id.UUID+ status_description.status_code.TXT (1:1)
	fabShop[status_description.status_description_id.UUID] 
		= associations.association_id.UUID + status_description.status_code.TXT (1:1)
	fabShop[status_description.status_description_id.UUID]
		= associations.association_name.TXT + status_description.status_code.TXT (1:1)
 * @properties={typeid:24,uuid:"FC6366B2-8042-43E3-92DF-F48F1E7CB40E"}
 */
function getStatusDescriptions(){
	globals.l.fabShops = [];
	globals.l.statusCodes = [];
	globals.l.routeDefault = [];
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.association_id);
	q.result.add(q.columns.status_code);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
	);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var record = resultQ.getRecord(index);
		var descripId = record.status_description_id+"";
		var assocId = record.association_id+"";
		var status = record.status_code;
		var assocName = globals.m.assocs[assocId];
		var shopOrg = assocId+", "+status;
		var shopName = assocName+", "+status;
		if (globals.l.fabShops.indexOf(shopName) == -1){ // get list of all text fabShop names
			globals.l.fabShops.push(shopName);
		}
		if (globals.l.statusCodes.indexOf(status) == -1){ // get list of all org status codes
			globals.l.statusCodes.push(status);
		}
		// description_id.UUID -> shop name -> shop org reference -> description_id.UUID
		globals.m.fabShops[descripId] = shopName;
		globals.m.fabShops[shopName] = shopOrg;
		globals.m.fabShops[shopOrg] = descripId;
		globals.l.routeDefault.push(descripId);//set default route order STS process
	}
}
/**
 * @properties={typeid:24,uuid:"D5ABDB15-3BD5-41CB-B397-C857BE3E1978"}
 */
function getRoutes(){
	globals.m.routes = [];
	globals.l.routes = [];
	/** @type {QBSelect<db:/stsservoy/routings>} */
	var q = databaseManager.createSelect('db:/stsservoy/routings');
	q.result.add(q.columns.routing_id);
	q.result.add(q.columns.route_code);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
	);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var record = resultQ.getRecord(index);
		var routeId = record.routing_id+"";
		var routeName = record.route_code;
		if (globals.l.routes.indexOf(routeId) == -1){
			globals.l.routes.push(routeId);
		}
		globals.m.routes[routeId] = routeName;
		globals.m.routes[routeName] = routeId;
	}
}
/**
 * @properties={typeid:24,uuid:"63DA5B76-7110-4020-BE63-F2E47ADD0CA3"}
 */
function getRouteLegs(){
	globals.l.routeLegs = [];
	/** @type {QBSelect<db:/stsservoy/route_detail>} */
	var q = databaseManager.createSelect('db:/stsservoy/route_detail');
	q.result.add(q.columns.route_detail_id);
	q.result.add(q.columns.e_route_code_id);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.route_order);
	q.sort.add(q.columns.route_order);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
	);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var record = resultQ.getRecord(index);
		var routeLeg = record.status_description_id+"";
		var routeId = record.e_route_code_id; // use for lookups for piecemark route code
		if (!globals.l.routeLegs[routeId]){
			globals.l.routeLegs[routeId] = [];
		}
		globals.l.routeLegs[routeId].push(routeLeg);
	}
}
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
 * @properties={typeid:24,uuid:"3B8ADC8D-EA3A-43FA-8C9F-68ADB7D1E627"}
 */
function noOperation(){
	application.output('this is an empty op.');
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
 * @param newStatus
 *
 * @properties={typeid:24,uuid:"AAA5AF42-178D-4359-960C-A5926092ADEC"}
 */
function rfCheckIdStatus(newStatus){
	var repIdfile = globals.mob.idfile;
	var routePcmk = globals.mob.piecemark
	var lastStatus = repIdfile.status_description_id;
	if (lastStatus+"" == newStatus+""){return false}
	var checkLegs = [];
	if (globals.mob.piecemark.status_description_id == null) {
		checkLegs = globals.l.routeDefault;
	} else {
		checkLegs = globals.l.routeLegs[globals.mob.piecemark.status_description_id];
	}
	if (lastStatus == null){
		if (checkLegs.indexOf(newStatus+"") != 0){
			return false;
		} else {
			return true;
		}
	}
	var lastCode = checkLegs.indexOf(lastStatus+"");
	var nextCode = checkLegs.indexOf(newStatus+"");
	if (lastCode*1 <= nextCode*1){
		return true;
	} else {
		return false;
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param winName
 *
 * @properties={typeid:24,uuid:"27EE31BD-22A3-498C-BB9F-9FEA3FD08E43"}
 */
function rfChangeWindow(event,winName){
	var currWin = application.getActiveWindow();
	switch(winName)	{
		case 'Transactions':
			globals.session.program = 'Transactions';
			currWin.show('rf_transactions');
			break;
		case 'Exit':
			globals.rfExitMobileClient();
			break;
	default:
	}
}
/**
 * @properties={typeid:24,uuid:"D0DA619C-1A75-492A-9C70-DEA26DC77D95"}
 */
function rfDetermineScanStatus(){
	/**
	 * if barcode in sequence and if additional status may be added to transactions
	 */
	
}
/**
 * @properties={typeid:24,uuid:"236511BF-949D-4A92-B2CB-C99AB2F5676E"}
 */
function rfExitMobileClient(){
	application.exit();
}
/**
 * TODO generated, please specify type and doc for the params
 * @param screen
 *
 * @properties={typeid:24,uuid:"A062386A-92A3-416F-B8E7-F8DCD639BAEE"}
 */
function rfFunctionKeys(screen){
	globals.mobProg = screen;
	for (var index=1;index < 11;index++){
		plugins.window.createShortcut('F'+index,globals.noOperation);
		functionKeyProcedure[index] = 'globals.noOperation';
	}
	plugins.window.createShortcut('F1','globals.showHelp');
	plugins.window.createShortcut('F10','globals.showExecLogout');
	functionKeyProcedure[10] = 'globals.showExecLogout';
	functionKeyDescrip = ['','F1 - Help','F2 - ','F3 - ','F4 - ','F5 - ','F6 - ','F7 - ','F8 - ','F9 - ','F10 - Exit'];
	functionKeyDescrip[2] = 'F2 - Switch Plants'
	//functionKeyProcedure[2] = '';
	//functionKeyProcedure[3] = '';
	//functionKeyProcedure[8] = '';
	//functionKeyProcedure[9] = '';
	switch( screen )
	{
		case 'Main':
			globals.mobForm = "STS_main";
			break;
		case 'Transactions':
			globals.mobForm = "rf_transactions";
			functionKeyDescrip[3] = 'F3 - List History'
			functionKeyDescrip[8] = 'F8 - Remove Status'
			functionKeyDescrip[9] = 'F9 - Inspection Doc'
			break;
		default:
			
	}
	//functionKeyProvider = -1;
	functionKeyProvider = "";
	var funcList = [];
	for (index = 0;index < 11;index++){
		funcList.push(functionKeyDescrip[index])
	}
	application.setValueListItems('vl_HelpMenu',funcList);
	/**var space = "";
	if (functionKeyDescripB[0] == functionKeyDescrip[0]){space = ""}
	for (var index = 0;index < 11;index++){
		globals.functionKeyDescripB[index] = functionKeyDescrip[index]+space;
	}
	application.setValueListItems('vl_HelpMenu',functionKeyDescripB);
	*
	*/
	//application.output('fkeys '+functionKeyDescrip);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param status
 * @param location
 *
 * @properties={typeid:24,uuid:"74DC69EE-86E1-44F1-92C8-E5FC50700ABD"}
 */
function rfGetStatusProcessNumber(status,fabShopName){
	var fabShop = fabShopName+', '+status;
	if (aMobIdProcess.length == 0){
		var fabShopId = aMobAssocs[fabShop];
		/** @type {QBSelect<db:/stsservoy/status_description>} */
		var q = databaseManager.createSelect('db:/stsservoy/status_description');
		q.result.add(q.columns.status_description_id);
		q.result.add(q.columns.status_code);
		q.result.add(q.columns.status_sequence);
		q.result.add(q.columns.association_id);
		q.where.add(
			q.and
				.add(q.columns.delete_flag.isNull)
				.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			);
		var resultQ = databaseManager.getFoundSet(q);
		for (var index = 1;index < resultQ.getSize();index++){
			var record = resultQ.getRecord(index);
			if (record.association_id == "" || record.association_id == null){
				aMobIdProcess[record.status_code] = record.status_sequence;
			} else {
				aMobIdProcess[aMobAssocs[record.association_id]+', '+record.status_code] = record.status_sequence;
			}
		}
	}
	return aMobIdProcess[fabShop];
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
 * @properties={typeid:24,uuid:"C22351B5-E96D-4B6E-9440-FB3FA4849FEE"}
 */
function rfGetFabshopCodes(){
	var allCodes = globals.l.fabShops;
	var currentAssoc = globals.m.assocs[globals.mobAssocId];
	var currentCodes = [];
	for (var index = 0;index < allCodes.length;index++){
		var codes = allCodes[index].split(',');
		var codeStatus = codes[1];
		codeStatus = codeStatus.trim();
		if (codes[0] == currentAssoc){
			if (currentCodes.indexOf(codeStatus) == -1){
				currentCodes.push(codeStatus);
			}
		}
	}
	application.setValueListItems('stsvlg_status_codes',currentCodes);
	return;
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.status_code);
	q.result.add(q.columns.status_description_id);
	//q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.status_description_id.eq(globals.mobAssocId))
	);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var record = resultQ.getRecord(index);
		session.statusCodes.push(record.status_code);
		var fabricationShopId = record.status_description_id+"";
		var fabShop = fabricationShopId+", "+record.status_code;
		var fabShopId = record.status_description_id+"";
		globals.mobAssocMap[fabShop] = fabShopId;
		globals.mobAssocMap[fabShopId] = fabShop;
	}
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
	progList.push('Transactions ');
	progList.push('Exit');
	//application.setValueListItems('rfProgramList',['Transactions','Exit']);
	application.setValueListItems('rfProgramList',progList);
}
/**
 * Returns an array with 'FabShopName, StatusWord' from a valueListArray from getValueListArray function
 * @param valuelistArray
 *
 * @properties={typeid:24,uuid:"2D2DAEC0-AB88-4992-B269-2F840F006B22"}
 */
function getStatusCodes(valuelistArray){
	mobFabShops = [];
	var aStatusCodes = [];
	for (var index in valuelistArray){
		var fabParts = index.split(",");
		var fabShop = globals.aMobAssocs[fabParts[0]]+', '+fabParts[1];
		aStatusCodes.push(fabShop);
		mobFabShops[index] = fabShop;
		mobFabShops[fabShop] = index;
	}
	return aStatusCodes;
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
	q.result.add(q.columns.status_description_id);
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
	q.result.add(q.columns.e_route_code_id);
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
function rfGetPiecesScanned(piecemarkId, sLocation, statusId){
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
	r.result.add(r.columns.status_description_id);
	//r.result.distinct = true;
	r.where.add(
	r.and
		.add(r.columns.delete_flag.isNull)
		.add(r.columns.idfile_id.isin(idfileList))
		.add(r.columns.location.eq(sLocation))
		.add(r.columns.status_description_id.eq(statusId))
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
	plugins.scheduler.removeJob('updateField')
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
	scopes.globals.statusId = globals.m.fabShops[mobAssocId+', '+newValue];
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
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"CEF23824-1370-4B5C-BD72-0064F9989EE5"}
 */
function onStartLoadPrefs(){
	//var prefs = scopes.prefs;
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var fs = databaseManager.getFoundSet('stsservoy','preferences2');
	if (fs.find()){
		fs.user_id = -1;
		fs.tenant_uuid = globals.secCurrentTenantID;
		var recIndex = 1;
		var recCount = fs.search();
		recCount = databaseManager.getFoundSetCount(fs);
		var record = null;
		while (recCount > 0 && recIndex < recCount){
			//while (recCount > 0 && recIndex <= recCount){
			record = fs.getRecord(recIndex);
			if (record.field_type == "boolean"){
				scopes.prefs[record.field_name] = record.field_value == "true" ? true : false;
			} else {
				scopes.prefs[record.field_name] = record.field_value;
			}
			recIndex++;
		}

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
	var lastTransaction = idfileId.status_description_id;
	if (lastTransaction == null){return}
	
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
		.add(q.columns.association_id.eq(lastTransaction))
	);
//		.add(q.columns.idfile_id.eq(idfileId))
	var resultQ = databaseManager.getFoundSet(q);
	var index = resultQ.getSize();
	mob.transaction = {};
	//if (index > 1){mob.transaction = resultQ.getRecord(2)}
	if (index >= 1) {mob.transaction = resultQ.getRecord(1)}
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
 * Create array of route in an ordered array
 * Use raw route_id to get route list
 * route list is the detail on the route_id
 * on scan is the route valid, or what must precede the scan
 * return the missing preceeding scan or echo the status
 * so route must compare last scan to current scan to route.
 * @properties={typeid:24,uuid:"B4B154A8-C6FA-43D8-97BD-C999F915A2CE"}
 */
function rfRouteOrder(){
	aStatusCodes = application.getValueListArray('stsvl_status_codes');
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	aRouteCodes = [];
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
	
	/** @type {QBSelect<db:/stsservoy/route_detail>} */
	var q = databaseManager.createSelect('db:/stsservoy/route_detail');
	q.result.add(q.columns.e_route_code_id);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.route_order);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.isin(globals.mob.idfiles))
		.add(q.columns.status.eq(sStatus))
	);
	var resultQ = databaseManager.getFoundSet(q);
	
	/**@type {JSFoundSet<db:/stsservoy/route_detail>} */
	var fs = sts_route_status_codes;
	if (fs != null) {
		for(var index=1;index<=fs.getSize();index++){
			var record = fs.getRecord(index);
			var code = record.status_code;
			aRouteCodes.push(code);
			aStatusCodes = removeElementFromArray(aStatusCodes,code);
		}
	}

}
/**
 * @properties={typeid:24,uuid:"D48C150B-3D61-4633-9505-DE38F1F6991B"}
 */
function rfSaveScanTransaction(sBC, statusId, sLocation){
	if (statusId == ""){return}
	application.output('save scan transaction');
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.isin(globals.mob.idfiles))
		.add(q.columns.status_description_id.eq(statusId))
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
	var recordsToSave = [];
	if (globals.rfCheckIdStatus(statusId)){
		var transIdfiles = [];
		/** @type {JSFoundSet<db:/stsservoy/transactions>} */
		var newFS = databaseManager.getFoundSet('db:/stsservoy/transactions');
		for (index = 0;index < mob.idfiles.length;index++){
			var newRecNum = newFS.newRecord();
			var newRec = newFS.getRecord(newRecNum);
			newFS.status_description_id = statusId;
			newFS.id_location = sLocation; // location is fabShop
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
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var q = databaseManager.createSelect('db:/stsservoy/idfiles');
		q.result.add(q.columns.idfile_id);
		q.result.add(q.columns.id_location);
		q.result.add(q.columns.status_description_id);
		q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.idfile_id.isin(globals.mob.idfiles))
		);
		var resultQ = databaseManager.getFoundSet(q);
		if (resultQ.getSize() > 0){
			for (index = 1;index <= resultQ.getSize();index++){
				var record = resultQ.getRecord(index);
				record.id_location = sLocation;
				record.status_description_id = statusId;
				recordsToSave.push(record);
			}
		}
		for (index = 0;index < recordsToSave.length;index++){
			var rec = recordsToSave.pop();
			databaseManager.saveData(rec);
		}
		return true;
	}
	null; null;

	//var batchSet = databaseManager.getFoundSetUpdater(resultQ);
	//batchSet.setColumn(name,value)
	return false;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param formName
 * @param elementName
 *
 * @properties={typeid:24,uuid:"D664A936-2F58-4388-A670-225F32740CAF"}
 */
function setFocus(){
	var formName = globals.setFocusFormName;
	var elementName = globals.setFocusElementName;
	forms[formName].elements[elementName];
}
/**
 * @properties={typeid:24,uuid:"5EF80351-5BA6-414C-98AB-EFDB31AD4CAA"}
 */
function showHelp(){
	functionKeyProvider = -1;
	functionKeyProvider = null;
	var win = application.getActiveWindow();
	win.show('rf_help');
}
/**
 * @properties={typeid:24,uuid:"CF92CA29-7654-497B-9D1E-EABE3FAA08A6"}
 */
function showMain(){
	var win = application.getActiveWindow();
	win.show('STS_main');
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
	if (application.getSolutionName() == 'STSmobile'){
		var win = application.getActiveWindow();
	}
	//var winX = win.getX()+5;
	//var winY = win.getY()+5;
	//var winXwidth = win.getWidth()-10;
	//var winYwidth = win.getHeight()-10;
	//win.setInitialBounds(winX, winY, winXwidth, winYwidth);
	win.title = "Error "+errorNum;
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
	errorNum = errorNum+"";
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
/**
 * @properties={typeid:24,uuid:"A54C5C7A-4CB9-47DC-9782-3A5A35DD8B60"}
 */
function showExecLogout(){
	var win = application.getActiveWindow();
	var formName = win.controller.getName();
	if (formName == "STS_main"){
		security.logout('STSmobile');
		return;
	}
	if (formName == "rf_help"){
		win.show(globals.mobForm);
		//win.hide();
		return;
	}
	win.show('STS_main');
	rfFunctionKeys('Main');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5858A57-8078-44A2-8DD2-E6078946ED31"}
 */
function onActionHelp(event) {
	var form = event.getFormName();
	var elName = forms[form].elements.menu.getSelectedElements()[0];
	var funcIndex = functionKeyDescrip.indexOf(elName);
	var progEx = functionKeyProcedure[funcIndex]+'()';
	eval(progEx);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"138D6C44-7A06-4841-B9A7-409FF1B186A0"}
 */
function onActionMainMenu(event) {
	var progList = application.getValueListArray('rfProgramList');
	var form = event.getFormName();
	var elName = forms[form].elements.mainMenu.getSelectedElements()[0];
	var elIndex = progList.indexOf(elName);
	if (elName[elName.length-1] == " ") {
		elName = elName.slice(0,elName.length-1);
	} else {
		elName = elName+' ';
	}
	progList[elIndex] = elName;
	var prog = forms[form].elements.mainMenu.getSelectedElements()[0].trim();
	rfFunctionKeys(prog);
	rfChangeWindow(event,prog);
	globals.mobProg = prog;
	application.setValueListItems('rfProgramList',progList);
}