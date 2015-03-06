/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B25F607F-BC2A-4CE1-81D1-310CFA1EEFAC"}
 */
var jobIDmobile = "";
/**
 * @properties={typeid:35,uuid:"BCEC595C-0F1C-4746-B677-ED84694F19D1",variableType:-4}
 */
var statusTypes = [
'None',
'Fab Raw Received',
'Fab Receive',
'Fab Cut',
'Fab Beam Line',
'Fab Blased',
'Fab Drilled',
'Fab Layout',
'Fab Fitup',
'Fab Welded',
'Fab 1stInspect',
'Fab 2ndInspect',
'Fab 3rdInspect',
'Fab 4thInspect',
'Fab Inspected',
'Fab Fabricated',
'Fab Paint',
'Fab Bundled',
'Fab Move',
'Fab Transfer',
'Fab Loading',
'Fab Loaded',
'Fab LoadVerify',
'Fab Ship',
'Galvanizer Received',
'Galvanizer Shipped',
'Galvan LoadVerify',
'Painter Received',
'Painter Shipped',
'Paint LoadVerify',
'FireProofer Received',
'FireProofer Shipped',
'FireProof LoadVerify',
'Other Received',
'Other Shipped',
'Other LoadVerify',
'Jobsite Received',
'Jobsite Shipped',
'Jobsite LoadVerify',
'Jobsite Inspected',
'Jobsite Painted',
'Jobsite Field Work',
'Jobsite Move',
'Jobsite Issued',
'Jobsite Erected'
]

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
 * stations = stations[id] = ... 
 * stations[status_description.status_descripton_id.UUID]
 		= status_description.fabrication_shop_id.UUID+ status_description.status_code.TXT (1:1)
	stations[status_description.status_description_id.UUID] 
		= associations.association_id.UUID + status_description.status_code.TXT (1:1)
	stations[status_description.status_description_id.UUID]
		= associations.association_name.TXT + status_description.status_code.TXT (1:1)
 * @properties={typeid:35,uuid:"C68F9A1B-9EBB-4312-87E5-0F31C9C09514",variableType:-4}
 * statusCodesDiv['<division>'] = (status_code...)
 * stationsTimed[stationId.UUID] = End_stationId.UUID
 */
var m = {
	assocs : [], 		// associations is a 2-way map to and from id and name
	stations : [], 		//stations are by division and status code
	stationSeq : [], 	// stationProcess[status_description_id.UUID] = status_sequence.NUM. Process priority
	routes : [], 		//routes are organization wide
	statusCodesDiv : [],	// status codes are by division, and must verify
	stationsTimed : [], // stationsTimed[status_description_id.UUID] = stationStatusToEndTiming.UUID
	stationsTimedEnds : [], // stationsTimed[stationStatusToEndTiming.UUID] = status_description_id.UUID
	locations : [],		// locations are by division, so only provide those in the division, but don't verify
	workerList : [],
	endItem : null
}
/**
 * Array objects
 * @properties={typeid:35,uuid:"AFC22E50-8649-46FB-957E-1DB85814FEC8",variableType:-4}
 */
var a = {
	tempHiddenColumns : [], // hidden columns as selected by the user
	tempHiddenEmpty : []
}
/**
 * @properties={typeid:35,uuid:"B3F2E391-6553-4FC7-A627-3D1D815F9984",variableType:-4}
 */
var flag = {
	hideEmptyColumns : 1
}
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"720544CD-94D6-4976-B305-7513C83A7E7A",variableType:4}
 */
var flagDELETED = 99;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6D7B2470-6D9A-460D-80D1-AE7ABDEDAF21",variableType:4}
 */
var flagSUMMARIZED = 11;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"26974DEB-C48B-472A-A95B-DA385BEDCCA9",variableType:4}
 */
var flagTRUE = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D5A1E59A-7985-409E-AAAE-11BDAE32056C",variableType:4}
 */
var flagFALSE = 0;
/**
 * tenantAssocs = tenantAs
 * @properties={typeid:35,uuid:"126B2E5A-C055-42B7-9C4F-77820427FF5B",variableType:-4}
 */
var l = {
	locations : [], 	// locations[index] = (location.TXT..) all user entered locations for organization
	routes : [], 		// routes[index] = (routing.route_id.UUID...) 
	routeLegs : [], 	// routeLegs[route_name.TXT][index] = (status_description_id.UUID...)
	routesAddLegs : [],	// routesAddLegs[index] = (routing.route_id.UUID...) can add codes to routes
	stationsMultiScan : [], // alow multiple scan for these stations
	routeDefault : [],	// routeDefault = (status_descriptoin_id.UUID...) all status'
	assocs : [],		// assocs[index] = (association_name.TXT...)
	stations : [],		// stations[]
	statusCodes : [],	// statusCodes[]
	workerList : [],
	endItem : null
}
/**
 * This is for item specific information, like scanned barcode, piecemark for current trans, etc
 * @properties={typeid:35,uuid:"FFB1B7D8-FC6F-44DC-9F01-BD65585867B0",variableType:-4}
 */
var mob = {
	barcode : "", 		// barcode id.TXT
	barcodeId : "", 	// barcode_id_id.UUID
	idfiles : [], 		// idfile_id list
	idfile : {}, 		// idfile object, representative of idfiles
	piecemark : {}, 	// piecemark object 
	transaction : {}, 	// transaction_object
	transactions : {},	// transaction query results
	transactionList : [],	// [index] = (trans_id...) list of transactions for the selected barcode, pick one idfile for list
	locationArea : "", 	// user location.TXT
	locationPrev : "",	// previous user enterred location.TXT
	locationValues : {pieces : 0, weight : 0}, // total values added for location
	idValues : {total : 0, complete : 0},
	status : "",
	statusCode : "", 	// status_code text
	statusPrev : "", 	// previous status code.TXT for this barcode
	workers : "",   		//workers xx.yy.zz from user input
	timedStatus : false, 	// this is a timed status
	timedBegStat : "", 	// start status
	timedEndStat : "", 	// end status
	timedBegin : "",	// start status time
	timedEnd : "",		// end status time
	timedDuration : "", // end-begin time duration in seconds
	timedError : "", 	// error raised during timed evaluation
	timedTargetRec : null, // target rec, used for exact field start
	endItem : null
}
/**
 * @properties={typeid:35,uuid:"931CE413-8017-4A46-96D6-14D1874745B6",variableType:-4}
 */
var mobFrozenElements = [];
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
 * @properties={typeid:35,uuid:"17D9CCBB-1139-45F6-BDAA-7E5C8334B52A",variableType:-4}
 */
var mobRepIdfile = {};
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"240D9589-3E4A-43D9-BDE1-B2F0BE77A91D"}
 */
var mobRepIdfileId = "";
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD88F132-DD71-48CE-AF63-D700D95BB6D2"}
 */
var rfF2Division = "";
/**
 * Object holding session information that may change with scan but generally apply to session
 * @properties={typeid:35,uuid:"FA84497D-3A0F-4CFB-A875-BB561B2B2CFA",variableType:-4}
 */
var session = {
	capture : false,
	jobNumber : "",
	association : "",
	associationId : "",
	tenant_uuid : "",
	worker : "",
	login : "",
	sessionId : "",
	station : "",
	program : "",
	//statusCode : "",
	statusCodes : [],
	statusLocation : "",
	userEntry : "",
	workerList : [],
	executeFuncs : [],
	client : "",
	errorForm : null,  // this is for error window control
	errorElement : null,
	errorElementAlt : null
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
 * @param station
 *
 * @properties={typeid:24,uuid:"595068C7-7C9B-4B9A-8CFC-99616DB4D127"}
 */
function getFabricationShopID(status,station){
	//fabricationShop is status and association/division
	
}
/**
 * start and finish date and time, calculate duration in date format
 * @param start
 * @param finish
 *
 * @properties={typeid:24,uuid:"0EB3BB13-5C0E-4CDB-96CA-126C6544CEF7"}
 */
function getMinutesDuration(start,finish){
	var startMs = Date.parse(start);
	var endMs = Date.parse(finish);
	var totalSeconds = Math.floor((endMs - startMs)/1000);
	var totalMinutes = Math.floor(totalSeconds/60*10000)/10000+"";
	var dec = totalMinutes.split('.');
	if (dec[1]){
		if (dec[1].length == 1){totalMinutes = totalMinutes +"000"}
		if (dec[1].length == 2){totalMinutes = totalMinutes +"00"}
		if (dec[1].length == 3){totalMinutes = totalMinutes +"0"}
	} else {
		totalMinutes = totalMinutes +".0000";
	}
	application.output('duration '+totalMinutes);
	return totalMinutes;
	/**
	var hourSeconds = 2400;
	var saveHours = totalSeconds/hourSeconds;
	var hours = Math.floor(saveHours);
	totalSeconds = totalSeconds-(hours*hourSeconds);
	var totalMinutes = Math.floor(totalSeconds/60); 
	totalSeconds = totalSeconds-(totalMinutes*60);
	totalSeconds = totalSeconds+"";
	totalMinutes = totalMinutes+""; application.output('joe');
	if (totalSeconds.length == 1){totalSeconds = "0"+totalSeconds}
	if (totalMinutes.length == 1){totalMinutes = "0"+totalMinutes}
	return hours+":"+totalMinutes+":"+totalSeconds;
	*/
}
/**
 * @properties={typeid:24,uuid:"700EEFCA-804B-4594-8015-C30920C40101"}
 */
function getMappings(){
	getAssociations();
	getStatusDescriptions();
	getRoutes();
	getRouteLegs();
	getLocations();
	getWorkers();
}
/**
 * @properties={typeid:24,uuid:"69456D2F-A197-41E5-8FCA-E7187F1BEE40"}
 */
function getAssociations(){
	l.assocs = [];
	m.assocs = [];
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
		if (l.assocs.indexOf(assocName) == -1){
			l.assocs.push(assocName);
		}
		m.assocs[assocId] = assocName;
		m.assocs[assocName] = assocId;
	}
}
/**
  * @properties={typeid:24,uuid:"FC6366B2-8042-43E3-92DF-F48F1E7CB40E"}
 */
function getStatusDescriptions(){
	l.stations = [];
	l.statusCodes = [];
	l.routeDefault = [];
	l.stationsMultiScan = [];
	m.stations = [];
	m.statusCodesDiv = [];
	m.stationSeq = [];
	m.stationsTimed = [];
	m.stationsTimedEnds = [];
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.association_id);
	q.result.add(q.columns.status_code);
	q.sort.add(q.columns.status_sequence);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
	);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/status_description>} */
		var record = resultQ.getRecord(index);
		var descripId = record.status_description_id+"";
		var assocId = record.association_id+"";
		var status = record.status_code;
		var assocName = m.assocs[assocId];
		var stationOrg = assocId+", "+status;
		var station = assocName+", "+status;
		if (l.stations.indexOf(station) == -1){ // get list of all text station names
			l.stations.push(station);
		}
		if (l.statusCodes.indexOf(status) == -1){ // get list of all org status codes
			l.statusCodes.push(status);
		}
		m.stationSeq[descripId] = record.status_sequence;
		if (!m.statusCodesDiv[assocId]){ //status codes by division
			m.statusCodesDiv[assocId] = [];
		}
		m.statusCodesDiv[assocId].push(status);
		// description_id.UUID -> stationName.TXT+status.TXT -> stationOrg.UUID+status.TXT -> description_id.UUID
		m.stations[descripId] = station;
		m.stations[station] = stationOrg;
		m.stations[stationOrg] = descripId;
		l.routeDefault.push(descripId);//set default route order STS process
		if (record.end_for_status != null){
			m.stationsTimed[record.end_for_status] = record.status_description_id;
			m.stationsTimedEnds[record.status_description_id] = record.end_for_status;
		}
		if (record.allow_multi_scan == 1){
			if (l.stationsMultiScan.indexOf(descripId) == -1){
				l.stationsMultiScan.push(descripId);
			}
		}
	}
}
/**
* @param assocName
 *
 * @properties={typeid:24,uuid:"A5E8DFF1-6FEF-4E7E-97E6-EA0CF35CBBB7"}
 */
function sessionAssoc(){
	session.associationId = m.assocs[globals.rfF2Division];
	session.association = globals.rfF2Division;
}
/**
 * Pull session association name from m.assocs mapping name or id to the other
 * @properties={typeid:24,uuid:"981F26EC-531A-43F1-8FB4-97161F341E92"}
 */
function sessionSetCodes(){
	//stsvlg_status_codes
	application.setValueListItems('stsvlg_status_codes',globals.m.statusCodesDiv[session.associationId]); // status codes for this association
}
/**
 * @properties={typeid:24,uuid:"BE6E91C5-935D-4AA3-B4DC-90418E4F09DF"}
 */
function formVerifyStatus(){
	var stationCodes = application.getValueListArray('stsvlg_status_codes');
	var win = application.getActiveWindow();
	var formName = win.controller.getName();
	var provider = forms[formName].elements.status.getDataProviderID();
	var status = forms[formName].controller.getDataProviderValue(provider);
	application.output('status '+status);
	if (stationCodes.indexOf(status) == -1){
		forms[formName].elements.status.requestFocus();
		forms[formName].resetStatusCode();
	}
}
/**
 * @properties={typeid:24,uuid:"D4132049-A5B7-41D6-A94D-3FCDA0662B3E"}
 */
function rfF2(formName){
	//var win = forms.rf_help;
	var formName = application.getActiveWindow().controller.getName();
	globals.mobDisableForm(true);
	// More than one association?
	if (l.assocs.length == 1){return}
	var assocNames = [];
	for (var index = 0;index < l.assocs.length;index++){
		var assocName = l.assocs[index];
		//if (assocName == currentAssocName){continue}
		if (assocNames.indexOf(assocName) == -1){
			assocNames.push(assocName);
		}
	}
	rfF2Division = ""; // valuelist selection of empty string deselects selection in list window
	forms[formName].elements.elDivisionChg.visible = true;
	forms[formName].elements.elDivisionChg.enabled = true;
	application.setValueListItems('rfDivisionList',assocNames);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param formName
 *
 * @properties={typeid:24,uuid:"CBC34BCA-57A6-4FC7-8758-6A0EED302D1E"}
 */
function rfF3(formName){
	var formName = application.getActiveWindow().controller.getName();
	var vis = (forms[formName].elements.tablessHistory.visible == true);
	forms[formName].elements.tablessHistory.visible = !vis;
	forms[formName].elements.tablessHistory.enabled = !vis;
}
/**
 * @properties={typeid:24,uuid:"8FD4F0A8-6EB3-4DF9-A497-54CED9E73075"}
 */
function rfF2done(){
	var formName = application.getActiveWindow().controller.getName();
	sessionAssoc();
	sessionSetCodes();
	globals.mobDisableForm(false);
	forms[formName].elements.elDivisionChg.visible = false;
	forms[formName].elements.elDivisionChg.enabled = false;
	forms[formName].setTransShop();
}
/**
 * @properties={typeid:24,uuid:"FC6E1F7D-8B10-40CB-BF2F-A3426230795B"}
 */
function rfAppliesToWindow(){
	var formName = application.getActiveWindow().controller.getName();
	switch (formName) {
		case 'rf_transactions':
			
			formVerifyStatus();
			break;
		default:
			break;
	}
		
}
/**
 * @properties={typeid:24,uuid:"D5ABDB15-3BD5-41CB-B397-C857BE3E1978"}
 */
function getRoutes(){
	m.routes = [];
	l.routes = [];
	l.routesAddLegs = [];
	
	/** @type {QBSelect<db:/stsservoy/routings>} */
	var q = databaseManager.createSelect('db:/stsservoy/routings');
	q.result.add(q.columns.routing_id);
	q.result.add(q.columns.route_code);
	q.result.add(q.columns.allow_more_codes);
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
		if (l.routes.indexOf(routeId) == -1){
			l.routes.push(routeId);
		}
		if (record.allow_more_codes == 1){
			l.routesAddLegs.push(routeId);
		}
		m.routes[routeId] = routeName;
		m.routes[routeName] = routeId;
	}
}
/**
 * @properties={typeid:24,uuid:"63DA5B76-7110-4020-BE63-F2E47ADD0CA3"}
 */
function getRouteLegs(){
	l.routeLegs = [];
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
		if (!l.routeLegs[routeId]){
			l.routeLegs[routeId] = [];
		}
		l.routeLegs[routeId].push(routeLeg);
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
 * @properties={typeid:24,uuid:"063E5A61-5FF9-437C-8C97-CB404FB50B5B"}
 */
function getLocations(){
	l.locations = [];
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
		if (rec.location == "") {continue}
		if (l.locations.indexOf(rec.location) == -1){
			l.locations.push(rec.location);
		}
	}
}
/**
 * @properties={typeid:24,uuid:"EDCF5A8B-55F3-44C6-AD06-F25FB9F4F786"}
 */
function getWorkers(){
	l.workerList = [];
	m.workerList = [];
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
	session.workerList = [];
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		m.workerList[rec.employee_number] = rec.employee_id;
		l.workerList.push(rec.employee_number);
		session.workerList.push(rec.employee_number);
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
 * @properties={typeid:24,uuid:"BE418083-7551-4011-A69B-9DAC7B0586EA"}
 */
function barcodeAttached(){
	return mob.idfiles.length != 0;
}
/**
 * @properties={typeid:24,uuid:"5372F246-1055-43A3-BF1F-B05C8E639EB0"}
 */
function barcodePlant(){
	//idfile - piecemark - sheets - jobs 
	//var jobId = scopes.jobsts.sts_idfile_to_pcmks.sts_pcmks_to_sheet.job_id;
	//application.output('job id ' + jobId);
	var serialAssocId = barcode_to_idfile.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.association_id;
	if (serialAssocId+"" != globals.session.associationId+""){
		application.output('wrong association ' + serialAssocId+' not '+globals.session.associationId);
		application.output(application.getUUID())
		return false;
	}
	return true;
}
/**
 * @properties={typeid:24,uuid:"19B09A96-EED4-4F1F-9761-837E773A1290"}
 */
function barcodePercentage(){
	if (false){
		return false;
	}
	return true;
}
/**
 * @properties={typeid:24,uuid:"9AEC15DA-ED62-4C71-B98E-06B11C83FE75"}
 */
function barcodeIsBundle(){
	return false;
}
/**
 * @properties={typeid:24,uuid:"FE02DF5C-B741-4312-A1B7-DEC334AE6F9F"}
 */
function barcodeOnHold(){
	if (mob.idfile.id_on_hold == 1){
		return true;
	}
	return false;
}
/**
 * @properties={typeid:24,uuid:"E30FE8EB-E424-403C-BA0F-E98D2E5BB35F"}
 */
function barcodeShip(){
	// 1/29/2015 does it have a route and is that route complete?
	var routeComplete = true;
	var checkLegs = [];
	var routeId = mob.piecemark.e_route_code_id;
	if (routeId == null){return routeComplete} // always ready to ship without a route 1/30/2015
	
	// Enforce routing on shipment. For the route, is current preceeded by previousRoute by previousRoute
	// actual transactions: mob.transactionList[index]=(status_description_id...)
	// route transactions: checkLegs[index]=(status_description_id...)
	var stationId = session.stationId;
	if (routeId != null) {
		checkLegs = l.routeLegs[routeId];
	}
	var stationsDone = mob.transactionList;
	for (var index = 0;index < checkLegs.length;index++){
		var routeLeg = checkLegs[index];
		routeComplete = (stationsDone.indexOf(routeLeg) != -1);
		if (!routeComplete){break}
	}
	return routeComplete;
}
/**
 * @properties={typeid:24,uuid:"0B596899-BB0B-4F62-A872-332363766773"}
 */
function barcodeStatusNew(){
	
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
 * @properties={typeid:24,uuid:"89367D1A-9BEC-4053-8EFB-EC113512237F"}
 */
function noOperationEvent(event){
	application.output('this is an empty op.'+event);
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
 * @properties={typeid:24,uuid:"14FE9F9E-BA9E-49EC-BA4F-19E435CF499E"}
 */
function rfCheckStatusIdfileMax(){
	// Can status overwrite idfile last status?
	var lastTrans = mob.idfile.status_description_id;
	var thisTrans = session.stationId;
	var overwrite = (m.stationSeq[thisTrans] > m.stationSeq[lastTrans]) || lastTrans == null;
	return overwrite;
}
/**
 * Should update idfiles or not?
 * @param newStatus
 *
 * @properties={typeid:24,uuid:"AAA5AF42-178D-4359-960C-A5926092ADEC"}
 */
function rfCheckRouteOrder(){
	// okay on this screen
	// ok to overwrite
	var repIdfile = mob.idfile;
	var checkLegs = [];
	var routeId = mob.piecemark.e_route_code_id;
	var stationId = session.stationId;
	var allowMoreCodes = (l.routesAddLegs.indexOf(routeId) != -1);
	var allowMultiScan = (l.stationsMultiScan.indexOf(stationId) != -1);
	var stationScanned = (mob.transactionList.indexOf(stationId) != -1);
	var stationLastId = mob.idfile.status_description_id;
	if (routeId != null) {
		checkLegs = l.routeLegs[routeId];
	}
	// route legs are checked with status_description_id.UUID
	// Do not update same station twice unless allowMultiScan true
	///var writeTransRecord = (!allowMultiScan && stationLastId+"" == stationId+"") ||	(routeId == null);
	var writeTransRecord = (!allowMultiScan && stationScanned) || (!stationScanned) ||	(routeId == null);
	// ok in route
	// Enforce routing on transaction. For the route, is current preceeded by previousRoute by previousRoute
	// actual transactions: mob.transactionList[index]=(status_description_id...)
	// route transactions: checkLegs[index]=(status_description_id...)
	var routingOk = true;
	if (routeId){
		//var index = (allowMoreCodes) ? checkLegs.indexOf(session.stationId) : checkLegs.length-1;
		var stationsDone = mob.transactionList;
		var targetIndex = checkLegs.indexOf(session.stationId);
		var index = 0;
		while (routingOk && index <= targetIndex){
			var routeLeg = checkLegs[index];
			routingOk = (stationsDone.indexOf(routeLeg) != -1);
			index++;
		}
	}
	return writeTransRecord && routingOk;
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
			session.program = 'Transactions';
			currWin.show('rf_transactions');
			break;
		case 'Exit':
			//globals.rfExitMobileClient();
			showExecLogout();
			application.output('exiting');
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
 * @properties={typeid:24,uuid:"A6CB209B-3F60-43FA-BDCB-51E4023CF2D9"}
 */
function rfExecuteFunctions(){
	while (session.executeFuncs.length != 0){
		var func = session.executeFuncs.shift();
		eval(func);
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param funcName
 *
 * @properties={typeid:24,uuid:"595168B8-D1D2-4AF7-B39A-B418668581CD"}
 */
function rfDelayFunction(funcName){
	if (!session.executeFuncs){
		session.executeFuncs = [];
	}
	funcName = 'globals.'+funcName+"()";
	session.executeFuncs.push(funcName);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param screen
 *
 * @properties={typeid:24,uuid:"A062386A-92A3-416F-B8E7-F8DCD639BAEE"}
 */
function rfFunctionKeys(screen){
	globals.mobProg = screen;
	for (var index=0;index < 13;index++){
		if (index > 0 && index < 11){
			plugins.window.createShortcut('F'+index,globals.noOperation);
		}
		functionKeyProcedure[index] = 'globals.noOperation';
	}
	plugins.window.createShortcut('F1','globals.showHelp');
	plugins.window.createShortcut('F10','globals.showExecLogout');
	functionKeyProcedure[10] = 'globals.showExecLogout';
	functionKeyDescrip = ['Help Selection or use FKey','F1 - Help','F2 - ','F3 - ','F4 - ','F5 - ','F6 - ','F7 - ','F8 - ','F9 - ','F10 - Exit','11','12'];
	functionKeyDescrip[2] = 'F2 - Switch Plants';
	functionKeyProcedure[2] = 'globals.rfF2';
	plugins.window.createShortcut('F2','globals.rfF2');
	functionKeyDescrip[11] = 'xxx Logout';
	functionKeyProcedure[11] = 'globals.rfLogout';
	functionKeyDescrip[12] = 'xxx Return to OS';
	functionKeyProcedure[12] = 'globals.rfExitBrowser';
	//functionKeyProcedure[3] = '';
	//functionKeyProcedure[8] = '';
	//functionKeyProcedure[9] = '';
	switch( screen )
	{
		case 'Main':
			globals.mobForm = "STS_main";
			break;
		case 'rf_transactions':
			globals.mobForm = "rf_transactions";
			functionKeyDescrip[3] = 'F3 - List History'
			functionKeyProcedure[3] = 'globals.rfF3';
			plugins.window.createShortcut('F3','globals.rfF3');
			functionKeyDescrip[8] = 'F8 - Remove Status'
			functionKeyDescrip[9] = 'F9 - Inspection Doc'
			break;
		default:
			
	}
	//functionKeyProvider = -1;
	functionKeyProvider = "";
	var funcList = [];
	for (index = 0;index < functionKeyDescrip.length;index++){
		funcList.push(functionKeyDescrip[index])
	}
	application.setValueListItems('vl_HelpMenu',funcList);
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
 * 
 * @param barcodeID
 *
 * @properties={typeid:24,uuid:"B0DDCB6E-CC33-49BF-957E-01B9BE0FB69B"}
 */
function rfGetBarcodeIdfiles(){
	var idfileIdList = mob.idfiles;
	idfileIdList = [];
	mob.idfile = {};
	mob.piecemark = {};
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.id_serial_number_id.eq(mob.barcodeId))
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
	
	return (resultQ.getSize() > 0);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sLocation
 *
 * @properties={typeid:24,uuid:"0D08F424-DA61-4C00-86C9-AE0A0BD67BF0"}
 */
function rfLocationChange(sLocation){
	session.statusLocation = sLocation;
	globals.logger(false,'');
}
/**
 * @properties={typeid:24,uuid:"C22351B5-E96D-4B6E-9440-FB3FA4849FEE"}
 */
function rfGetStationCodes(){
	var allCodes = l.stations;
	var currentAssoc = m.assocs[globals.mobAssocId];
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
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sLocation
 *
 * @properties={typeid:24,uuid:"16DE7027-0DC8-431E-A069-957B93FC6904"}
 */
function rfGetLocationStats(sLocation){
	mob.locationValues.pieces = 0;
	mob.locationValues.weight = 0;
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
	mob.locationValues.pieces = idfileList.length;
	
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
		var pFS = resultS.loadRecords(databaseManager.convertToDataSet(rec.piecemark_id));
		totWeight = totWeight + resultS.item_weight;
		index++;
	}
	mob.locationValues.weight = totWeight;
}
/**
 * @properties={typeid:24,uuid:"4D8A0286-EDA2-44A3-A0B4-5A90967FEEA5"}
 */
function rfErrorVisible(formName){
	return forms[formName].elements.errorWindow.visible == true;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param message
 *
 * @properties={typeid:24,uuid:"5A682FFE-B5E7-44A9-9D8F-3D61E59BDF86"}
 */
function rfErrorShow(message){
	var formName = application.getActiveWindow().controller.getName();
	mobDisableForm(false);
	errorMessageMobile = textWrap(message);
	
	forms[formName].elements.errorWindow.enabled = true;
	forms[formName].elements.errorWindow.visible = true;
	forms[formName].elements.errorWindow.transparent = false;
	forms[formName].elements.errorWindow.putClientProperty('text',message);
	forms[formName].elements.errorWindow.requestFocus();
	forms[formName].controller.focusField('errorWindow',false);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"376C6315-A576-4572-AD5F-9208DDF1E543"}
 */
function rfErrorHide(event) {
	//var formName = application.getActiveWindow().controller.getName();
	var formName = session.errorForm;
	var elName = session.errorElement;
	if (session.errorElementAlt != null){
		elName = session.errorElementAlt;
	}
	globals.mobDisableForm(false);
	forms[formName].elements.errorWindow.visible = false;
	forms[formName].elements.errorWindow.enabled = false;
	forms[formName].elements.errorWindow.transparent = true;
	forms[formName].controller.focusField(elName,false);
	//forms[formName].elements[elName].requestFocus();
	if (session.errorForm != null && session.errorElement != null){
		//application.output(' focus request set');
		//forms[session.errorForm].elements[session.errorElement].requestFocus();
		//forms.rf_transactions.elements.current.requestFocus();
		forms[formName].controller.focusField(elName,true);
		session.errorForm = null;
		session.errorElement = null;
		session.errorElementAlt = null;
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event {Event}
 *
 * @properties={typeid:24,uuid:"6FC164A9-4B95-4767-9C50-525B8C81B063"}
 */
function rfEmptyStayField(event){
	var formName = event.getFormName();
	var elName = event.getElementName();
	var entry = event.getSource().getDataProviderID();
	var variable = forms[formName];
	var value = variable[entry];
	if (value == "" && forms[formName].elements.errorWindow.visible == false){
		forms[formName].elements[elName].requestFocus();		
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param elName
 *
 * @properties={typeid:24,uuid:"6F4AA703-5DF9-4FD2-8256-7562899F5F37"}
 */
function rfEmptyNextField(event,elName){
	var formName = event.getFormName();
	//var elName = event.getElementName();
	forms[formName].controller.focusField(elName,true);
	forms[formName].elements[elName].selectAll();
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"9F12D05A-CD94-451C-B0D6-C2BBC656849C"}
 */
function rfSetCurrentFocus(event){
	var formName = event.getFormName();
	var elName = event.getElementName();
	if (forms[formName].elements.errorWindow.visible == true){
		forms[formName].controller.focusField('errorWindow',false);
		return;
	}
	session.errorForm = formName;
	session.errorElement = elName;
	var provider = forms[formName].controller.getDataProviderValue(elName);
	if (!provider){return}
	var variable = forms[formName];
	var value = variable[provider];
	if (value == ""){
		variable[provider] = " ";
	}
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
function rfGetMobIdfile(){
	var idfile = mob.idfile;
	mobRepIdfile = mobIdfiles[0];
	mobRepIdfileId = "";
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
		.add(q.columns.idfile_id.isin(mob.idfiles))
	);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
		mob.idfile = resultQ.getRecord(1);
		mobRepIdfileId = mob.idfile.idfile_id;
	}
	return (resultQ.getSize() > 0);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param piecemarkId
 *
 * @properties={typeid:24,uuid:"365474AC-59B1-4076-BBE8-3A9234FC455E"}
 */
function rfGetMobPiecemark(piecemarkId){
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
		.add(q.columns.piecemark_id.eq(globals.mob.idfile.piecemark_id))
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
		maxIndex = resultQ.getSize();
	}
	mob.idValues.total = maxIndex;
	
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
		.add(r.columns.status_description_id.eq(session.stationId))
	);
	var resultR = databaseManager.getFoundSet(r);
	var index = 1;
	while (index < resultR.getSize()){
		index = resultR.getSize();
		var rec = resultR.getRecord(resultR.getSize());
	}
	mob.idValues.complete = index;
	null;
}
/**
 * @param oldValue
 * @param newValue
 * @param event
 * @properties={typeid:24,uuid:"6BC89657-3F7E-42EE-88B4-21420F8D196A"}
 */
function xxxonDataChangeBarcode(oldValue, newValue, event){
	var scannedID = newValue;
	var form = forms[event.getFormName()];
	stayField = (scannedID != "EXIT");
	//application.output('stay field '+stayField);
	session.userEntry = scannedID;
	form.elements.location.enabled = true;
	form.elements.status.enabled = true;
	form.elements.worker.enabled = true;
	var barcodeId = globals.checkBarcode(scannedID);
	if (!barcodeId){
		currentID = "";
		errorDialogMobile(event,'701');
		//form.elements.current.requestFocus();
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

	form.foundset.clear();
	mob.barcode = scannedID;
	mob.barcodeId = barcodeId;
	mob.locationArea = form.statusLocation;
	mob.workers = form.statusWorker;
	lastID = scannedID;
	//var currentFabShopId = m.stations[globals.secCurrentAssociationID+", "+statusCode];
	
	//globals.secCurrentAssociationID; statusCode; globals.aMobAssocs[globals.secCurrentAssociationID];
	if (!globals.rfGetBarcodeIdfiles()){
		application.output('ERROR: Database inconsistent with barcode');
		errorDialogMobile(event,'701','current');
		currentID = "";
		globals.mobPreviousLocation = "";
		globals.mobPreviousStatus = "";
		globals.mobLocationPieces = 0;
		globals.mobLocationWeight = 0;
		globals.mobItemPieces = "";
		///elements.current.requestFocus();
		return true;
	}
	form.controller.loadRecords(databaseManager.convertToDataSet(globals.mob.idfiles)); // mob.idfiles

	globals.rfGetMobIdfile();

	globals.rfGetMobPiecemark(globals.mob.idfile.piecemark_id);
	var status = globals.rfSaveScanTransaction(globals.mob.barcode,session.stationId,globals.mob.locationArea);
	currentID = '';
	//if (!status){return}
	//scopes.globals.rfIdLength = scopes.globals.decToFeet(item_length);
	//scopes.globals.mobIdfiles = scopes.globals.rfaIdfiles;
	globals.rfGetTransactionLast(globals.mob.idfiles[0]);
	globals.rfGetLocationStats(globals.mob.locationArea);
	globals.rfGetPiecesScanned(globals.mob.piecemark.piecemark_id, globals.mob.locationArea, globals.statusId);
	globals.mobPreviousLocation = globals.mob.locationArea;
	globals.mobPreviousStatus = globals.mob.statusPrev;
	globals.mobLocationPieces = globals.mob.locationValues.pieces;
	globals.mobLocationWeight = globals.mob.locationValues.weight;
	globals.mobItemPieces = globals.mob.idValues.complete+" / "+mob.idValues.total;
	null;

	currentID = "";
	form.elements.current.requestFocus();
	return true;
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
	session.userEntry = newValue;
	if (m.statusCodesDiv[session.associationId].indexOf(newValue) == -1){
		errorDialogMobile(event,'401','status');
		var formName = event.getFormName();
		//forms[formName].elements.status.requestFocus();
		forms[formName].resetStatusCode();
		return true;
	}
	mob.statusCode = newValue;
	//globals.mob.status =  newValue;
	logger(false,'Status OK');
	//scopes.globals.statusId = m.stations[mobAssocId+', '+newValue];
	session.stationId = m.stations[session.associationId+', '+mob.statusCode];
	//var xxx = forms.rf_transactions.controller.getTabSequence();
	//application.output('tabs '+xxx);
	globals.rfEmptyNextField(event,'location');
	//forms.rf_transactions.controller.focusField('location',true);
	return true;
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
 * @param event
 *
 * @properties={typeid:24,uuid:"91F45752-C164-4AEB-ACDD-12D9E8AFC20A"}
 */
function onFocusClear(event) {
	var formName = event.getFormName();
	var elName = event.getElementName();
	var entry = event.getSource().getDataProviderID();
	var variable = forms[formName];
	var value = variable[entry];
	value = "";
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"CEF23824-1370-4B5C-BD72-0064F9989EE5"}
 */
function onStartLoadPrefs(){
	//var prefs = scopes.prefs;
	//if (!scopes.prefs){scopes.prefs = {}}
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var fs = databaseManager.getFoundSet('stsservoy','preferences2');
	if (fs.find()){
		fs.user_id = -1;
		fs.tenant_uuid = globals.secCurrentTenantID;
		fs.form_name = '^=';
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
 * @param disable
 *
 * @properties={typeid:24,uuid:"61F8B661-DE91-44C5-B7A1-D42865041D3D"}
 */
function mobDisableForm(disable){
	var formName = application.getActiveWindow().controller.getName();
	for (var elem in forms[formName].elements){
		if (disable){
			if (forms[formName].elements[elem].enabled == true){
				forms[formName].elements[elem].enabled = false;
				mobFrozenElements.push(elem);
			}
		} else {
			while (mobFrozenElements.length > 0){
				elem = mobFrozenElements.pop();
				if (!forms[formName].elements[elem]){continue}
				forms[formName].elements[elem].enabled = true;
			}
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
	//mob.transaction = {};  ///////////////////////// STOO
	var lastStation = mob.idfile.status_description_id;
	if (lastStation == null){return}
	// description_id.UUID -> stationName.TXT+status.TXT -> stationOrg.UUID+status.TXT -> description_id.UUID
	var lastStationTxt = m.stations[lastStation].split(",")[1];
	mob.statusPrev = lastStationTxt.trim();
	mob.locationPrev = mob.idfile.id_location;

	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.location);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.transaction_date);
	q.sort.add(q.columns.transaction_date.desc);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.eq(mob.idfile.idfile_id))
	);
	var resultQ = databaseManager.getFoundSet(q);
	
	mob.transactionList = [];
	for (var index = 1;index < mob.transactionList.length;index++){
		var rec = resultQ.getRecord(index);
		mob.transactionList.push(rec.status_description_id);
	}
}
/**
 * @properties={typeid:24,uuid:"CA0441A1-AF68-4691-9DF6-3A66E403A9B6"}
 */
function rfGetTransactions(){
	mob.transactions = null;
	// description_id.UUID -> stationName.TXT+status.TXT -> stationOrg.UUID+status.TXT -> description_id.UUID
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.location);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.transaction_date);
	q.result.add(q.columns.trans_code);
	q.result.add(q.columns.transaction_start);
	q.result.add(q.columns.transaction_end);
	q.sort.add(q.columns.transaction_date.desc);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.eq(mob.idfile.idfile_id))
	);
	mob.transactions = databaseManager.getFoundSet(q);
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
	if (workers == ""){
		forms.rf_transactions.controller.focusField('current',true);
		return true
	}
	session.userEntry = workers;
	var message = "";
	var workersArray = workers.split('.');

	for (index = 0;index < workersArray.length;index++){
		if (session.workerList.indexOf(workersArray[index]) == -1){
			errorDialogMobile(event,'150','worker');
			var formName = event.getFormName();
			//forms[formName].elements.worker.requestFocus();
			forms[formName].resetWorkerCode();
			return true;
		}
	}
	globals.logger(false,message);
	//forms.rf_transactions.controller.focusField('current',true);
	globals.rfEmptyNextField(event,'current');
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
 * Get current Status 
 * Returns true on good end status
 * @properties={typeid:24,uuid:"EC503547-C12B-4BA9-85C9-43BAA429FAC1"}
 */
function rfStatusEnd(){
	/**
	 * is status an end? m.stationsTimed[stationId] != null
	 * is status ended? check transactions for begin transaction
	 * there is only one status end to a status start
	 */
	var station = session.stationId;
	var stationStart = "";
	var stationTerm = "";
	if (m.stationsTimedEnds[station]){
		stationStart = m.stationsTimedEnds[station];
		stationTerm = station;
	} else {
		return false;
	}
	mob.timedBegStat = m.stations[stationStart].split(",")[1].trim();
	mob.timedEndStat = m.stations[stationTerm].split(",")[1].trim();
	return true;
}
/**
 * @properties={typeid:24,uuid:"007D5829-985F-4D7D-A34A-A4AD8255EF65"}
 */
function rfTimedReset(){
	mob.timedBegin = "";
	mob.timedEnd = "";
	mob.timedBegStat = "";
	mob.timedEndStat = "";
	mob.timedDuration = "";
	mob.timedStatus = false;
	mob.timedError = "";
	mob.timedTargetRec = null;
}
/**
 * is status begin timing? m.stationsTimed[stationId] exists
 * has status ended?  has it already been started?
 * there is only one status begin to a status end, but can occur more than once
 * @properties={typeid:24,uuid:"F96935E4-466A-4670-B1C0-597F6F7F5C41"}
 */
function rfStatusBegin(){
	var station = session.stationId;
	var stationStart = "";
	var stationTerm = "";
	if (m.stationsTimed[station]){
		stationStart = station;
		stationTerm = m.stationsTimed[station];
	} else {
		return false;
	}
	mob.timedBegStat = m.stations[stationStart].split(",")[1].trim();
	mob.timedEndStat = m.stations[stationTerm].split(",")[1].trim();
	return true;
}
/**
 * Sets mob variable if timed transaction and update required.  Uses representative transaction record 
 * and should be duplicated across all transactions for each idfile on the piecemark barcode.
 * @properties={typeid:24,uuid:"BC626FEA-5799-4339-B3A7-959C87EEA9A7"}
 */
function rfTimed(){
	/**
	 * x get transactions for this piecemark
	 * 		sort by time
	 * cannot start once started
	 * cannot end once ended
	 * cannot end if not started
	 * if start, start transaction
	 * if end, end transaction on same started transaction record, start, stop, and duration
	 * f8 undo status
	 * 
	 */
	rfTimedReset();
	rfGetTransactions(); // latest first
	///var status = mob.status;
	if (rfStatusBegin()){
		mob.timedStatus = true;
		//parse transactions for unended begin status
		for (var index = 1;index <= mob.transactions.getSize();index++){
			/** @type {JSFoundSet<db:/stsservoy/transactions>} */
			var rec = mob.transactions.getRecord(index);
			//application.output(rec);
			if (rec.trans_status == mob.timedBegStat){ // begin with null end
				globals.logger(true,'start timed status '+mob.timedBegStat);
				if (rec.transaction_end == null){
					globals.logger(true,'start timed status '+mob.timedBegStat+' already started');
					mob.timedError = "1133"; // status not yet ended
					return true;
				}
			}
		}
		mob.timedBegin = new Date();
		mob.timedTargetRec = null;
		return true;
	}
	if (rfStatusEnd()){
		mob.timedStatus = true;
		//x cannot end once ended
		//x cannot end if not started
		for (index = 1;index <= mob.transactions.getSize();index++){
			/** @type {JSFoundSet<db:/stsservoy/transactions>} */
			var rec = mob.transactions.getRecord(index);
			//application.output(rec); // look for all unfinished starts, not just ascending first
			if (rec.trans_status == mob.timedBegStat){
				if (rec.transaction_end == null){ // ok to end transaction
					mob.timedBegin = rec.transaction_start;
					mob.timedEnd = new Date();
					mob.timedDuration = getMinutesDuration(mob.timedBegin,mob.timedEnd);
					mob.timedTargetRec = rec;
					mob.timedError = "";
					return true;
				} else {
					mob.timedError = "1131"; // status already ended, cannot end
					//return true;
				}
			}
		}
		mob.timedError = "1131"; // no start status for this ending code
		return true;
	}
	return false; // not a timed transaction
}
/**
 * @properties={typeid:24,uuid:"07268947-73C4-4518-A3B5-D6727D5E7548"}
 */
function rfActivity(){
	var formName = application.getActiveWindow().controller.getName();
	if (formName == 'rfTransactions'){return "M"}
	return "M";
}
/**
 * @properties={typeid:24,uuid:"D29E4090-7D67-4599-8AC7-B0E08AC74EBD"}
 */
function rfTransIsTimed() {
	return mob.timedStatus;
}
/**
 * Get transcode for screen
 * @properties={typeid:24,uuid:"4999E05C-6A74-4F51-9932-1F6414DBD46D"}
 */
function rfTransCode(){
	/**
	 * activity Ship SH, Receive RC, Verify VR, InterimShip IS, Move MO, removed DE
	 * PAINTER PAI
	 * FIREPROOFER FIR
	 * GALVANIZER GAL
	 * JOBSITE JOB
	 * OTHERWISE OTH
	 * FABRICATOR FAB
	 */
	var activity = rfActivity(); // returns activity related to formName
	var installedAt = scopes.prefs.stsInstalled.toUpperCase();
	//var installedAt = 'FABRICATOR'; // JOEJOEJOE 20150217
	var action = "";
	switch (activity) {
		case 'S': action = "SH"; break;
		case 'R': action = "RC"; break;
		case 'V': action = "VR"; break;
		case 'I': action = "IR"; break;
		case 'M': action = "MO"; break;
		default: action = "MO";
	}
	switch (installedAt){
		case 'PAINTER': 	location = 'PAI'; break;
		case 'FIREPROOFER':	location = 'FIR'; break;
		case 'GALVANIZER':	location = 'GAL'; break;
		case 'JOBSITE':		location = 'JOB'; break;
		case 'FABRICATOR':	location = 'FAB'; break;
		default:			location = 'OTH'
	}
	var returnCode = location+action;
	return returnCode;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param transcode
 *
 * @properties={typeid:24,uuid:"9B3EE134-657D-48F7-9433-A94CD125587F"}
 */
function rfStsLocation(transcode){
	if (utils.stringPatternCount(transcode,'PAI') > 0) {return 'PAINTER'}
	if (utils.stringPatternCount(transcode,'FIR') > 0) {return 'FIREPROOFER'}
	if (utils.stringPatternCount(transcode,'GAL') > 0) {return 'GALVANIZER'}
	if (utils.stringPatternCount(transcode,'JOB') > 0) {return 'JOBSITE'}
	if (utils.stringPatternCount(transcode,'FAB') > 0) {return 'FABRICATOR'}
	return 'OTHERWISE';
}
/**
 * TODO generated, please specify type and doc for the params
 * @param idfileId
 *
 * @properties={typeid:24,uuid:"F0ADEEBA-656E-4157-A17F-DE2DADFE0D6F"}
 */
function rfSetIdfileTimedStatus(idfileId){
	if (mob.timedTargetRec == null){return null}
	//mob.timedBegin = new Date(mob.timedBegin);
	/**var timedBegin = utils.parseDate(mob.timedBegin,'EEE MMM d HH:mm:ss z yyyy');
	var months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var compareTime = mob.timedBegin+"";
	compareTime = compareTime.split(' ');
	var year = Math.floor(compareTime[3]*1);
	var month = months.indexOf(compareTime[1]);
	var date = Math.floor(compareTime[2]*1);
	var time = compareTime[4].split(":");
	var hours = Math.floor(time[0]*1);
	var minutes = Math.floor(time[1]*1);
	var seconds = Math.floor(time[2]*1);
	*/
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.trans_code);
	q.result.add(q.columns.transaction_end);
	q.result.add(q.columns.transaction_duration);
	q.result.add(q.columns.employee_id);
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.trans_status);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.idfile_id.eq(idfileId))
			.add(q.columns.trans_status.eq(mob.timedBegStat))
			.add(q.columns.transaction_start.eq(mob.timedTargetRec.transaction_start))
			/**.add(q.columns.transaction_start.hour.eq(hours))
			.add(q.columns.transaction_start.minute.eq(minutes))
			.add(q.columns.transaction_start.month.eq(month))
			.add(q.columns.transaction_start.second.eq(seconds))
			.add(q.columns.transaction_start.year.eq(year))
			.add(q.columns.transaction_start.day.eq(date))*/
	);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() != 1){
		globals.logger(true,'Transactions '+resultQ.getSize()+' for idfile '+idfileId);
		return null;
	}
	return resultQ.getRecord(1);
}
/**
 * save transactions if in route to idfile and transactions
 * save allowed others transactions only to transactions
 * @properties={typeid:24,uuid:"D48C150B-3D61-4633-9505-DE38F1F6991B"}
 */
function rfSaveScanTransaction(routeOK, statusId, sLocation){
	if (statusId == ""){return}
	// get route and if station is in route, then save else false
	// status out of order, then false
	// if okay for other stations, then true
	
	rfGetTransactionLast(globals.mob.idfile);
	var routeOK = rfCheckRouteOrder(statusId);
	//application.output('save scan transaction');
	globals.logger(true,'Save scan transaction operation.');
	//worker_id,worker2_id,worker3_id,worker4_id,worker5_id, tenant_uuid, employee_id,fabshop_id (guids)
	//location, status, code, edit_date
	//transaction_date,transaction_duration,transaction_start,transaction_end
	//quantity?
	//skip if status already recorded
	var date = new Date();
	var currentWorkers = [];
	var workers = mob.workers.split(".");
	for (var index = 0; index < workers.length; index++) {
		currentWorkers.push(m.workerList[workers[index]]);
	}
	var recordsToSave = [];
	var transIdfiles = [];
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var newFS = databaseManager.getFoundSet('db:/stsservoy/transactions');
	logger(true, 'Updating ' + mob.idfiles.length + ' idfiles');
	//var newRecordCreated = false;
	// status code already captured for this piece?
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.idfile_id.isin(mob.idfiles))
			.add(q.columns.status_description_id.eq(session.stationId))
	);
	var resultQ = databaseManager.getFoundSet(q);
	var resultSize = resultQ.getSize();
	if (resultSize != 0 && !rfScanAgainOk()) {
		errorDialogMobile('rf_transactions.current','403','current');
		logger(true, 'Status code has already been captured.');
		//forms['rf_transactions'].elements.current.requestFocus();
		return false;
	}
	var newRec = null;
	for (index = 0; index < mob.idfiles.length; index++) {
		//application.output('inside saving idfiles');
		if (rfTransIsTimed()){
			newRec = rfSetIdfileTimedStatus(mob.idfiles[index]);
			if (newRec == null){
				globals.logger(true,'rfIsTimed rec is null');
			} else {
				globals.logger(true,'rfIsTimed rec is found');
			}
		} 
		if (newRec != null){//only update timed transaction records
			globals.logger(true,'status trans rec found. updating');
			newRec.transaction_duration = mob.timedDuration;
			newRec.transaction_end = mob.timedEnd;
		} else {
			if (routeOK){
				globals.logger(true,'newRec created for status '+mob.statusCode);
				var newRecNum = newFS.newRecord();
				if (newRecNum == -1){
					globals.logger(true,'Creating new Record for transactions failed.');
				}
				newRec = newFS.getRecord(newRecNum);
				newRec.status_description_id = session.stationId;
				//newFS.id_location = sLocation; // location is fabShop
				newRec.employee_id = globals.mobLoggedEmployeeId;//UUID
				newRec.idfile_id = mob.idfiles[index];
				newRec.location = mob.locationArea;
				newRec.transaction_date = new Date();//date;//mob.timedBegin;
				newRec.transaction_start = date;//mob.timedBegin;
				newRec.tenant_uuid = session.tenant_uuid;
				newRec.trans_status = mob.statusCode;
				newRec.trans_code = rfTransCode();
				for (var index2 = 0; index2 < currentWorkers.length; index2++) {
					switch (index2) {
					case 0:
						newRec.worker_id = currentWorkers[index2];
						break;
					case 1:
						newRec.worker2_id = currentWorkers[index2];
						break;
					case 2:
						newRec.worker3_id = currentWorkers[index2];
						break;
					case 3:
						newRec.worker4_id = currentWorkers[index2];
						break;
					case 4:
						newRec.worker5_id = currentWorkers[index2];
						break;
					default:
					}
				}
			}
		}
		recordsToSave.push(newRec);
	}
	globals.logger(true,'Saving '+recordsToSave.length+' trans records');
	while (recordsToSave.length > 0){ // always save 'good' transactions 3/4/2015 pp all user entries are saved
		var rec = recordsToSave.pop();
		var status = databaseManager.saveData(rec);
		if (!status){
			globals.logger(true,'save of record failed');
		}
	}
	if (routeOK){
		if (rfCheckStatusIdfileMax()){
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			var q = databaseManager.createSelect('db:/stsservoy/idfiles');
			q.result.add(q.columns.idfile_id);
			q.result.add(q.columns.id_location);
			q.result.add(q.columns.status_description_id);
			q.where.add(
			q.and
				.add(q.columns.delete_flag.isNull)
				.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
				.add(q.columns.idfile_id.isin(mob.idfiles))
			);
			var resultQ = databaseManager.getFoundSet(q);
			logger(true,'Updating '+resultQ.getSize()+' idfiles.');
			if (resultQ.getSize() > 0){
				index = 1;
				while (index <= resultQ.getSize()){
					var record = resultQ.getRecord(index);
					record.id_location = sLocation;
					record.status_description_id = statusId;
					recordsToSave.push(record);
					index++;
				}
			}
		} else {
			globals.logger(true,'Status earlier in route. Idfile not updated.');
		}
		while (recordsToSave.length > 0){
			var rec = recordsToSave.pop();
			var status = databaseManager.saveData(rec);
			if (!status){
				globals.logger(true,'save of record failed');
			}
		}
	} else {
		globals.logger(true,'Route not ok for this status');
	}
	return routeOK;
}
/**
 * @properties={typeid:24,uuid:"33D9ACFB-D345-42E2-9BCE-C44A506F5078"}
 */
function rfScanAgainOk(){
	return (l.stationsMultiScan.indexOf(session.stationId) != -1) || 
			(m.stationsTimedEnds[session.stationId]);
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
	var winName = application.getActiveWindow();
	var formName = winName.controller.getName();
	functionKeyProvider = -1;
	functionKeyProvider = null;
	var vis = (forms[formName].elements.elHelp.visible);
	forms[formName].elements.elHelp.visible = !vis;
	forms[formName].elements.elHelp.enabled = !vis;
	if (vis){return}
	rfFunctionKeys(formName);
	//var win = application.getActiveWindow();
	//win.show('rf_help');
}
/**
 * @properties={typeid:24,uuid:"CF92CA29-7654-497B-9D1E-EABE3FAA08A6"}
 */
function showMain(){
	var win = application.getActiveWindow();
	win.show('STS_main');
}
/**
 * TODO generated, please specify type and doc for the params
 * @param message
 * @param length
 *
 * @properties={typeid:24,uuid:"92EDD6D1-987C-4D8D-BE7A-84ADC79E2947"}
 */
function textWrap(message, length){
	var formatted = '<html>';
	length = 30;
	var messLength = message.length;
	if (messLength < length){return message}
	var index = (message.length > length) ? length : message.length-1;
	while (index < message.length){
		if (message.length-1 == index){
			formatted = formatted + message;
			break;
		}
		//if (index > 33){
			while (message[index] != " " && index != 0){index--}
			formatted = formatted + utils.stringLeft(message,index)+'<br>';
			message = utils.stringRight(message,message.length-index);
			//index = 0;
		//}
		index = (message.length > length) ? length : message.length-1;
	}
	return formatted;
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
		var parentFormName = dataset.getValue(dataset.getMaxRowIndex()-1,2)
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
 * @param event {Event}
 * @param errorNum
 *
 * @properties={typeid:24,uuid:"E5021DE9-0377-478B-8AE2-CC18B4F90260"}
 * @AllowToRunInFind
 */
function errorDialogMobile(event,errorNum,returnField){
	if (typeof event === 'string') {
		var resetItem = event.split('.');
		session.errorForm = resetItem[0];
		session.errorElement = resetItem[1];
	} else {
		session.errorForm = event.getFormName();
		session.errorElement = event.getElementName();
	}
	//if (returnField && returnField){
	session.errorElementAlt = returnField;
	//}
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
	globals.rfErrorShow(errorMessage);
	scopes.globals.logger(false,errorMessage);
	//scopes.globals.DIALOGS.setDialogHeight(150);
	//scopes.globals.DIALOGS.setDialogWidth(220);
	//scopes.globals.DIALOGS.showErrorDialog('Error '+errorNum,errorMessage,'OK');
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
	application.output(message);
	if (!(capture || session.capture)){return}
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
	fs.status_code = mob.statusCode;
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
	logger(true,'Exiting form '+formName);
	if (formName == "STS_main"){
		security.logout('STSmobile');
		return;
	}
	if (formName == "rf_transactions"){
		win.show('STS_main');
		//win.hide();
		return;
	}
	win.show('STS_main');
	rfFunctionKeys('Main');
}
/**
 * @properties={typeid:24,uuid:"16CA9F21-FA73-4D11-B7A8-DF1231429DBE"}
 */
function rfLogout(){
	security.logout('STSmobile');
}
/**
 * @properties={typeid:24,uuid:"07CE6DD4-F0D6-4AC1-9158-6F650E187E75"}
 */
function rfExitBrowser(){
	var jsToExecute = "application.quit();";
	plugins.WebClientUtils.executeClientSideJS(jsToExecute);
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
	var elName = event.getElementName();
	var actionName = functionKeyProvider;
	var funcIndex = functionKeyDescrip.indexOf(actionName);
	var progEx = functionKeyProcedure[funcIndex]+'()';
	forms[form].elements[elName].visible = false;
	forms[form].elements[elName].enabled = false;
	functionKeyProvider = "";
	if (actionName == ""){return}
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
	/**if (elName[elName.length-1] == " ") {
		elName = elName.slice(0,elName.length-1);
	} else {
		elName = elName+' ';
	}*/
	progList[elIndex] = elName;
	var prog = forms[form].elements.mainMenu.getSelectedElements()[0].trim();
	globals.mobMenuProvider = "";
	rfFunctionKeys(prog);
	rfChangeWindow(event,prog);
	globals.mobProg = prog;
	application.setValueListItems('rfProgramList',progList);
}