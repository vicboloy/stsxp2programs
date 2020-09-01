/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"15470D31-A577-49CD-BDB4-10305BBAD619"}
 */
var verSTS = '860';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D4EFBB6B-0863-4F82-BC59-019CC36D2676"}
 */
var verSTSmobile = '630';
/**
 * @type {Number}
 * This is the level of zoom for a webclient
 *
 * @properties={typeid:35,uuid:"FE3F9B20-5453-46FD-9EC3-BF421A99F42A",variableType:4}
 */
var viewZoom = 0;
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
i18n.getI18NMessage('sts.status.none'),
i18n.getI18NMessage('sts.status.fab.raw.received'),//'Fab Raw Received',
i18n.getI18NMessage('sts.status.fab.receive'),//'Fab Receive',
i18n.getI18NMessage('sts.status.fab.cut'),//'Fab Cut',
i18n.getI18NMessage('sts.status.fab.beam.line'),//'Fab Beam Line',
i18n.getI18NMessage('sts.status.fab.blasted'),//'Fab Blasted',
i18n.getI18NMessage('sts.status.fab.drilled'),//'Fab Drilled',
i18n.getI18NMessage('sts.status.fab.layout'),//'Fab Layout',
i18n.getI18NMessage('sts.status.fab.fitup'),//'Fab Fitup',
i18n.getI18NMessage('sts.status.fab.weldup'),//'Fab Welded',
i18n.getI18NMessage('sts.status.fab.1stinspect'),//'Fab 1stInspect',
i18n.getI18NMessage('sts.status.fab.2ndinspect'),//'Fab 2ndInspect',
i18n.getI18NMessage('sts.status.fab.3rdinspect'),//'Fab 3rdInspect',
i18n.getI18NMessage('sts.status.fab.4thinspect'),//'Fab 4thInspect',
i18n.getI18NMessage('sts.status.fab.inspected'),//'Fab Inspected',
i18n.getI18NMessage('sts.status.fab.fabricated'),//'Fab Fabricated',
i18n.getI18NMessage('sts.status.fab.painted'),//'Fab Paint',
i18n.getI18NMessage('sts.status.fab.bundled'),//'Fab Bundled',
i18n.getI18NMessage('sts.status.fab.move'),//'Fab Move',
i18n.getI18NMessage('sts.status.fab.transfer'),//'Fab Transfer',
i18n.getI18NMessage('sts.status.fab.loading'),//'Fab Loading',
i18n.getI18NMessage('sts.status.fab.loaded'),//'Fab Loaded',
i18n.getI18NMessage('sts.status.fab.loadverify'),//'Fab LoadVerify',
i18n.getI18NMessage('sts.status.fab.ship'),//'Fab Ship',
i18n.getI18NMessage('sts.status.galavanizer.received'),//'Galvanizer Received',
i18n.getI18NMessage('sts.status.galavanizer.shipped'),//'Galvanizer Shipped',
i18n.getI18NMessage('sts.status.galavanizer.loadverify'),//'Galvan LoadVerify',
i18n.getI18NMessage('sts.status.painter.received'),//'Painter Received',
i18n.getI18NMessage('sts.status.painter.shipped'),//'Painter Shipped',
i18n.getI18NMessage('sts.status.painter.loadverify'),//'Paint LoadVerify',
i18n.getI18NMessage('sts.status.fireproofer.received'),//'FireProofer Received',
i18n.getI18NMessage('sts.status.fireproofer.shipped'),//'FireProofer Shipped',
i18n.getI18NMessage('sts.status.fireproofer.loadverify'),//'FireProof LoadVerify',
i18n.getI18NMessage('sts.status.other.received'),//'Other Received',
i18n.getI18NMessage('sts.status.other.shipped'),//'Other Shipped',
i18n.getI18NMessage('sts.status.other.loadverify'),//'Other LoadVerify',
i18n.getI18NMessage('sts.status.jobsite.received'),//'Jobsite Received',
i18n.getI18NMessage('sts.status.jobsite.shipped'),//'Jobsite Shipped',
i18n.getI18NMessage('sts.status.jobsite.loadverify'),//'Jobsite LoadVerify',
i18n.getI18NMessage('sts.status.jobsite.inspected'),//'Jobsite Inspected',
i18n.getI18NMessage('sts.status.jobsite.painted'),//'Jobsite Painted',
i18n.getI18NMessage('sts.status.jobsite.field.work'),//'Jobsite Field Work',
i18n.getI18NMessage('sts.status.jobsite.move'), //'Jobsite Move',
i18n.getI18NMessage('sts.status.jobsite.issued'), //'Jobsite Issued',
i18n.getI18NMessage('sts.status.jobsite.erected') //'Jobsite Erected'
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
 * employeeNames[employee_number] = "first name<space> last name"
 */
var m = {
	assocs : [], 		// associations is a 2-way map to and from id and name
	/** @type {String} */ stations : [], 		//stations are by division and status code
	stationSeq : [], 	// stationProcess[status_description_id.UUID] = status_sequence.NUM. Process priority
	routes : [], 		//routes are organization wide
	statusCodesDiv : [],	// status codes are by division, and must verify
	stationsThird : [], // third party stations indexed by currentStation to 3rd parth
	stationsTimed : [], // stationsTimed[status_description_id.UUID] = stationStatusToEndTiming.UUID
	stationsTimedEnds : [], // stationsTimed[stationStatusToEndTiming.UUID] = status_description_id.UUID
	statusToProcess : [], // status_code.TXT to process_code.TXT
	statusCodeToId : [], // status code mapped to status_id
	locations : [],		// locations are by division, so only provide those in the division, but don't verify
	loginToUser : [], 	// mapping from login user.employee_id to employee.employee_id
	workerList : [],    // workers by employee_number
	employeeNames : [], // list of employee names by employee_id
	employeeNumbers : [], // list of employee numbers by login_id
	employee3rdParty : [], // list of employee FS users by employeeName
	userAssocs : [], // list of userIds to assocationIds
	i18nMobileViews : [],//mapping 2-way between i18n string and definition used
	i18nMobilePrintViews : [],//mapping 2-way between i18n string and definition used
	i18nMobileFabsuiteViews : [], //mapping 2-way fabsuite views
	endItem : null
}
/**
 * Array objects
 * @properties={typeid:35,uuid:"AFC22E50-8649-46FB-957E-1DB85814FEC8",variableType:-4}
 */
var a = {
	tempHiddenColumns : [], // hidden columns as selected by the user
	tempHiddenEmpty : [],
	tempFormName : "",
	tempShowColumns : [],
	tempTableName : ""
}
/**
 * @properties={typeid:35,uuid:"B3F2E391-6553-4FC7-A627-3D1D815F9984",variableType:-4}
 */
var flag = {
	hideEmptyColumns : 1
}
/**
 * @properties={typeid:35,uuid:"F0EF60BB-FDE7-443E-8BD3-56B84B8F551D",variableType:-4}
 */
var flagF8 = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7AB0A51E-6B8F-4761-83C2-7F5DDF9A7FBD"}
 */
var f8ReversalText = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EFE1E7B2-B6F2-4157-94DF-5279FC56245F"}
 */
var f8ReversalColor = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B27D291-DAAF-4BB1-AF68-FD398CE0EF23"}
 */
var flagFunction = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"720544CD-94D6-4976-B305-7513C83A7E7A",variableType:4}
 */
var flagDELETED = 99;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3D29A740-08D8-4B36-8DA7-270252599543",variableType:4}
 */
var flagACTIVE = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C324D937-CC01-4971-9154-226385C1A852",variableType:4}
 */
var flagSUMMED = 11;
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
	laborStations : [], // status codes that are labor stations
	laborStatStarts : [], //labor stations allowed to start if prior station started
	laborStatRouted : [], // this station is routed
	locations : [], 	// locations[index] = (location.TXT..) all user entered locations for organization
	routes : [], 		// routes[index] = (routing.route_id.UUID...) 
	routeLegs : [], 	// routeLegs[route_name.TXT][index] = (status_description_id.UUID...)
	routesAddLegs : [],	// routesAddLegs[index] = (routing.route_id.UUID...) can add codes to routes
	stationsMultiScan : [], // alow multiple scan for these stations
	routeDefault : [],	// routeDefault = (status_descriptoin_id.UUID...) all status'
	assocs : [],		// assocs[index] = (association_name.TXT...)
	nonOffices : [],	//like assocs
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
	bundle : {
		weight: 0.0, 
		pieces: 0, 
		Id : "", 
		transFs : null}, // single bundleInfo
	bundleFS : null,	// bundle query returned from barcodeIsBundle
	//bundleTransFS : null, // bundle transactions
	//bundleId : "",		// bundle id currently active
	//bundleCnt : 0,		// count of idfiles in a bundle
	//bundleWeight : 0.0,	// weight of items in a bundle
	bundlesJobs : [], // bundles per job
	currentRevision : "", // current revision setting
	completeAsk : false, // ask if cycle is complete for timed operation
	completeStatus : 0, // Status is 100%
	customer : {
		Id : null,
		Number : '',
		Name : ''
	},
	editDate : null,//edit date of transaction
	heat : '',
	heatId : '',
	idfiles : [], 		// idfile_id list
	idfileIds : [],		// idfileId array for grabbing with databaseManager.getFoundset.
	idfilesFS : null, 	// idfiles foundset
	idfile : {
				idfile_id : {}, 
				piecemark_id : "", 
				id_on_hold : 0, 
				status_description_id : ""}, 		// idfile object, representative of idfiles
	job : {
			metric : 0, 
			rf : null,
			Id : null, 
			weight : 0,
			number : ""}, //job related entries
	piecemark : {
		piecemark_id : "", 
		e_route_code_id : ""}, 	// piecemark object 
	program : '', //name of screen in STSmobile
	transaction : {}, 	// transaction_object
	transactions : {},	// transaction query results
	transactionList : [],	// [index] = (trans_id...) list of transactions for the selected barcode, pick one idfile for list
	locationArea : "", 	// user location.TXT
	stockLocationArea : "",//add for inventory
	locationPrev : "",	// previous user enterred location.TXT
	load :  {
		interim : false,
		interimDest : '',
		weight: 0.0, 
		pieces: 0, 
		ctTotal : 0,//count total
		ctShipped :0,//count shipped
		Id : "", 
		transFs : null, 
		loadFs : null,
		number : "",
		currentId : "", 
		shipId : "", 
		receiveId : ""}, // single loadInfo
	locationValues : {pieces : 0, weight : 0.0, piecemarks : 0}, // total values added for location
	idValues : {total : 0, complete : 0},
	reverseWorker : '', // primary worker to remove when accessing FS
	statusRemove : "", // status on a reversal
	status : "",
	statusCode : "", 	// status_code text
	statusCode3rdParty : "", //fabsuite or other 3rd party status
	statusPrev : "", 	// previous status code.TXT for this barcode
	station : "", // current station for status
	stationPrev : "", // process station previous to current station
	workers : "",   		//workers xx.yy.zz from user input
	timedStatus : false, 	// this is a timed status
	timedBegStat : "", 	// start status
	timedEndStat : "", 	// end status
	timedBegin : "",	// start status time
	timedEnd : "",		// end status time
	timedDuration : "", // end-begin time duration in seconds
	timedTotalMin : 0.0, // total time for timed transactions
	timedError : "", 	// error raised during timed evaluation
	timedTargetRec : null, // target rec, used for exact field start
	timedCloseOut : 0, //end timed station
	timedPrompt : false, // prompt for timed station
	userAgent : '', // reported web agent
	laborPercent : 0, //20190705 labor percent entered in Labor transactions/inspections screen
	routeId : null, //20190705 route id for piecemark
	begTimedStation : '',
	begTimedDate : '',
	endItem : null,
	noDelayToPrint : false, //20191226 delay for autohide is disabled
	printedLabels : 0   
}
/**
 * @properties={typeid:35,uuid:"156699CD-41A6-4A0A-80BB-F1DC66692C4B",variableType:-4}
 */
var processCodes = {	all : [
		i18n.getI18NMessage('sts.status.none'),
		i18n.getI18NMessage('sts.status.fab.raw.received'),//'Fab Raw Received',
		i18n.getI18NMessage('sts.status.fab.receive'),//'Fab Receive',
		i18n.getI18NMessage('sts.status.fab.rel2fab'),//'Release2Fab,
		i18n.getI18NMessage('sts.status.fab.cut'),//'Fab Cut',
		i18n.getI18NMessage('sts.status.fab.beam.line'),//'Fab Beam Line',
		i18n.getI18NMessage('sts.status.fab.blasted'),//'Fab Blasted',
		i18n.getI18NMessage('sts.status.fab.drilled'),//'Fab Drilled',
		i18n.getI18NMessage('sts.status.fab.layout'),//'Fab Layout',
		i18n.getI18NMessage('sts.status.fab.fitup'),//'Fab Fitup',
		i18n.getI18NMessage('sts.status.fab.weldup'),//'Fab Welded',
		i18n.getI18NMessage('sts.status.fab.1stinspect'),//'Fab 1stInspect',
		i18n.getI18NMessage('sts.status.fab.2ndinspect'),//'Fab 2ndInspect',
		i18n.getI18NMessage('sts.status.fab.3rdinspect'),//'Fab 3rdInspect',
		i18n.getI18NMessage('sts.status.fab.4thinspect'),//'Fab 4thInspect',
		i18n.getI18NMessage('sts.status.fab.inspected'),//'Fab Inspected',
		i18n.getI18NMessage('sts.status.fab.fabricated'),//'Fab Fabricated',
		i18n.getI18NMessage('sts.status.fab.painted'),//'Fab Paint',
		i18n.getI18NMessage('sts.status.fab.bundled'),//'Fab Bundled',
		i18n.getI18NMessage('sts.status.fab.move'),//'Fab Move',
		i18n.getI18NMessage('sts.status.fab.transfer'),//'Fab Transfer',
		i18n.getI18NMessage('sts.status.fab.loading'),//'Fab Loading',
		i18n.getI18NMessage('sts.status.fab.loaded'),//'Fab Loaded',
		i18n.getI18NMessage('sts.status.fab.loadverify'),//'Fab LoadVerify',
		i18n.getI18NMessage('sts.status.fab.ship'),//'Fab Ship',
		i18n.getI18NMessage('sts.status.galavanizer.received'),//'Galvanizer Received',
		i18n.getI18NMessage('sts.status.galavanizer.shipped'),//'Galvanizer Shipped',
		i18n.getI18NMessage('sts.status.galavanizer.loadverify'),//'Galvan LoadVerify',
		i18n.getI18NMessage('sts.status.painter.received'),//'Painter Received',
		i18n.getI18NMessage('sts.status.painter.shipped'),//'Painter Shipped',
		i18n.getI18NMessage('sts.status.painter.loadverify'),//'Paint LoadVerify',
		i18n.getI18NMessage('sts.status.fireproofer.received'),//'FireProofer Received',
		i18n.getI18NMessage('sts.status.fireproofer.shipped'),//'FireProofer Shipped',
		i18n.getI18NMessage('sts.status.fireproofer.loadverify'),//'FireProof LoadVerify',
		i18n.getI18NMessage('sts.status.other.received'),//'Other Received',
		i18n.getI18NMessage('sts.status.other.shipped'),//'Other Shipped',
		i18n.getI18NMessage('sts.status.other.loadverify'),//'Other LoadVerify',
		i18n.getI18NMessage('sts.status.jobsite.received'),//'Jobsite Received',
		i18n.getI18NMessage('sts.status.jobsite.shipped'),//'Jobsite Shipped',
		i18n.getI18NMessage('sts.status.jobsite.loadverify'),//'Jobsite LoadVerify',
		i18n.getI18NMessage('sts.status.jobsite.inspected'),//'Jobsite Inspected',
		i18n.getI18NMessage('sts.status.jobsite.painted'),//'Jobsite Painted',
		i18n.getI18NMessage('sts.status.jobsite.field.work'),//'Jobsite Field Work',
		i18n.getI18NMessage('sts.status.jobsite.move'), //'Jobsite Move',
		i18n.getI18NMessage('sts.status.jobsite.issued'), //'Jobsite Issued',
		i18n.getI18NMessage('sts.status.jobsite.erected') //'Jobsite Erected'
	],
	
	shipping : [//'Fab Transfer','Fab Loading','Fab Loaded','Fab LoadVerify','Fab Ship','Galvanizer Shipped','Galvan LoadVerify','Painter Shipped','Paint LoadVerify','FireProofer Shipped','FireProof LoadVerify','Other Shipped','Other LoadVerify','Jobsite Shipped','Jobsite LoadVerify'],
		i18n.getI18NMessage('sts.status.fab.transfer'),//'Fab Transfer',
		i18n.getI18NMessage('sts.status.fab.loading'),//'Fab Loading',
		i18n.getI18NMessage('sts.status.fab.loaded'),//'Fab Loaded',
		i18n.getI18NMessage('sts.status.fab.loadverify'),//'Fab LoadVerify',
		i18n.getI18NMessage('sts.status.fab.ship'),//'Fab Ship',
		i18n.getI18NMessage('sts.status.galavanizer.shipped'),//'Galvanizer Shipped',
		i18n.getI18NMessage('sts.status.galavanizer.loadverify'),//'Galvan LoadVerify',
		i18n.getI18NMessage('sts.status.painter.shipped'),//'Painter Shipped',
		i18n.getI18NMessage('sts.status.painter.loadverify'),//'Paint LoadVerify',
		i18n.getI18NMessage('sts.status.fireproofer.shipped'),//'FireProofer Shipped',
		i18n.getI18NMessage('sts.status.fireproofer.loadverify'),//'FireProof LoadVerify',
		i18n.getI18NMessage('sts.status.other.shipped'),//'Other Shipped',
		i18n.getI18NMessage('sts.status.other.loadverify'),//'Other LoadVerify',
		i18n.getI18NMessage('sts.status.jobsite.shipped'),//'Jobsite Shipped',
		i18n.getI18NMessage('sts.status.jobsite.loadverify'),//'Jobsite LoadVerify',
	],
	receiving : [//'Fab Raw Received','Fab Receive','Galvanizer Received','Painter Received','FireProofer Received','Other Received','Jobsite Received'],
		i18n.getI18NMessage('sts.status.fab.raw.received'),//'Fab Raw Received',
		i18n.getI18NMessage('sts.status.fab.receive'),//'Fab Receive',
		i18n.getI18NMessage('sts.status.galavanizer.received'),//'Galvanizer Received',
		i18n.getI18NMessage('sts.status.painter.received'),//'Painter Received',
		i18n.getI18NMessage('sts.status.fireproofer.received'),//'FireProofer Received',
		i18n.getI18NMessage('sts.status.other.received'),//'Other Received',
		i18n.getI18NMessage('sts.status.jobsite.received')//'Jobsite Received',
	],
	transactions : [//'Fab Rel2Fab','Fab Cut','Fab Beam Line','Fab Blasted','Fab Drilled','Fab Layout','Fab Fitup','Fab Welded','Fab Fabricated','Fab Paint','Fab Bundled','Fab Move','Jobsite Painted','Jobsite Field Work','Jobsite Move','Jobsite Issued','Jobsite Erected'],
		i18n.getI18NMessage('sts.status.none'),
		i18n.getI18NMessage('sts.status.fab.rel2fab'),//'Release2Fab,
		i18n.getI18NMessage('sts.status.fab.cut'),//'Fab Cut',
		i18n.getI18NMessage('sts.mobile.cut.cutlist.raw'),//Fab Cut Raw,
		i18n.getI18NMessage('sts.status.fab.beam.line'),//'Fab Beam Line',
		i18n.getI18NMessage('sts.status.fab.blasted'),//'Fab Blasted',
		i18n.getI18NMessage('sts.status.fab.drilled'),//'Fab Drilled',
		i18n.getI18NMessage('sts.status.fab.layout'),//'Fab Layout',
		i18n.getI18NMessage('sts.status.fab.fitup'),//'Fab Fitup',
		i18n.getI18NMessage('sts.status.fab.weldup'),//'Fab Welded',
		i18n.getI18NMessage('sts.status.fab.fabricated'),//'Fab Fabricated',
		i18n.getI18NMessage('sts.status.fab.painted'),//'Fab Paint',
		//i18n.getI18NMessage('sts.status.fab.bundled'),//'Fab Bundled',
		i18n.getI18NMessage('sts.status.fab.move'),//'Fab Move',
		i18n.getI18NMessage('sts.status.jobsite.painted'),//'Jobsite Painted',
		i18n.getI18NMessage('sts.status.jobsite.field.work'),//'Jobsite Field Work',
		i18n.getI18NMessage('sts.status.jobsite.move'), //'Jobsite Move',
		i18n.getI18NMessage('sts.status.jobsite.issued'), //'Jobsite Issued',
		i18n.getI18NMessage('sts.status.jobsite.erected') //'Jobsite Erected'
	],
	inspections : [//'Fab 1stInspect','Fab 2ndInspect','Fab 3rdInspect','Fab 4thInspect','Fab Inspected','Jobsite Inspected']
		i18n.getI18NMessage('sts.status.none'),
		i18n.getI18NMessage('sts.status.fab.1stinspect'),//'Fab 1stInspect',
		i18n.getI18NMessage('sts.status.fab.2ndinspect'),//'Fab 2ndInspect',
		i18n.getI18NMessage('sts.status.fab.3rdinspect'),//'Fab 3rdInspect',
		i18n.getI18NMessage('sts.status.fab.4thinspect'),//'Fab 4thInspect',
		i18n.getI18NMessage('sts.status.fab.inspected'),//'Fab Inspected',
		i18n.getI18NMessage('sts.status.jobsite.inspected')//'Jobsite Inspected',
	],
	rawprint :[//don't know by name what requires raw material vs STSX data 20191011
		i18n.getI18NMessage('sts.mobile.asn.receiving'),
		i18n.getI18NMessage('sts.mobile.checklist.receive'),
		i18n.getI18NMessage('sts.mobile.checklist.receive.w.rem'),
		i18n.getI18NMessage('sts.mobile.checklist.receive2'),
		i18n.getI18NMessage('sts.mobile.checklist.status'),
		i18n.getI18NMessage('sts.mobile.receiving'),
		i18n.getI18NMessage('sts.mobile.cut.cutlist.raw'),
		i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.id'),
		i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.id.print'),
		i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.minorid'),
		i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.minor.print'),
		i18n.getI18NMessage('sts.mobile.inventory.audit'),
		i18n.getI18NMessage('sts.mobile.inventory.move')
	]
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
 * @properties={typeid:35,uuid:"DEB358BD-3EB6-4F05-83A7-9E4751A42D0D",variableType:8}
 */
var mobLocationWeight = 0.0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FC08EB18-83F4-49AD-AC04-2EF1A8A1E2FC",variableType:4}
 */
var mobLocationPieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3C4382BF-C59A-413C-847C-CF7D7B5DFBA4",variableType:8}
 */
var mobLoadWeight = 0.0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4470230C-E29A-4C11-A055-4875F21008D1",variableType:4}
 */
var mobLoadPieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6B813861-AC7E-4910-A2B4-D0646C95B121",variableType:4}
 */
var mobBundleWeight = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E705DF2A-A4FD-45C4-B633-1CE9D25F8C02",variableType:4}
 */
var mobBundlePieces = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ABC019C4-EDE1-440A-9188-70096B4B281B"}
 */
var mobWeightUnits = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6FCDB612-76E7-47B5-B334-3DA5FE638B57"}
 */
var mobLengthUnits = "";
/**
 * Used in relation sts_user_to_employee
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"49916D3E-42D2-44A0-8FA3-91A49453F493"}
 */
var mobForm = null;
/**
 * Object holding session information that may change with scan but generally apply to session
 * @properties={typeid:35,uuid:"FA84497D-3A0F-4CFB-A875-BB561B2B2CFA",variableType:-4}
 */
var session = {
	appName : "STS3",
	adminUser : false,//check to ensure table access is upheld
	corpUser : false, //check to see if this is a corp login
	capture : false,
	corporate : false,
	cutlistdata : {},//cutlist piecemark, drop information and other criteria
	cutlistused : [], // cutlist idfile IDs that are already cut
	cutlistavail : [], // cutlist idfile IDs that can be cut and assigned
	browser : "", //navigator.userAgent response from browser
	dualEntry : false, //whether the STSmobile app is showing dual, alternating entry fields//swap entry fields
	enterpriseBrowser : "", //deviceName reported by EB, boolean
	interim : false, //interim ship or not
	jobNumber : "",
	jobId : "",
	jobLoads : null, // load number dataset for jobID,
	jobIsFabSuite : false, // flag whether job is in FS or not
	tenantJobArray : [], // array of job names under tenantId
	assocJobArray : [], // array of job names under association
	association : "",
	associationId : "",
	parentAssociationId : "",
	bundlePrefix : "",
	tenant_uuid : "",
	worker : "",
	heatNumber : "",
	loadNumber : 0,
	loadNextNumber : 0,
	loadId: "",
	login : "", // user login
	loginDate : "",
	loginUser : "",//user full name/description
	loginId : 0,
	loginUserNum : "", // user login number
	logging : 0,
	rfLogging : 0,
	fullName : "",
	employeeNum : "",
	employeeId : null,
	sessionId : "",
	sessionIp : "",
	station : "",
	stationThird : "",
	rfViewsOffice  : [],
	rfViewsMobile : [],
	program : "",
	//statusCode : "",
	statusCodes : [],
	statusLocation : "",
	tempFS : null, //temporary foundset for complex table joins
	userEntry : "",
	workerList : [],
	workerListAssoc : [],
	executeFuncs : [],
	client : "",
	errorForm : null,  // this is for error window control
	forms : [], //assoc array of forms created for updating permissions
	errorElement : null,
	errorElementAlt : null,
	errorReport : false,
	errorShow : false,
	fabShop : "",
	userId : null,
	mainMarks : [], // used in STSx for piecemark lists
	drawings : [], // used in STSx for drawing list
	functionName : '',//current function being requested
	validStatus : [],//collection of company valid status
	validStatusFS : [],//collection of Fabsuite valid status
	rawCutPiecemarks : [],//collection of raw cutlist piecemarks that have barcodes to be sent to tfsCut
	rawCutPiecemarksSelected : [],//collection of piecemarks that have already been selected for cut
	stationsComplete : [],//20190705 stations complete for this pcmk
	formList : [],//20191230 list of forms for use in permissions settings
	endItem : 0
}
/**
 * @properties={typeid:35,uuid:"21F3A304-4501-448F-8B70-5B0985149622",variableType:-4}
 */
var transShopText = [];
// errorReport use this to indicate not necessary to report an error on empty input from function 20150416
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6FE32946-4F15-4D9B-9D8C-872C7248FE8B"}
 */
var rfHtml = '';
/**
 * @type {String}
 *
 * HTML button popup response test
 * @properties={typeid:35,uuid:"E4843B52-2993-4EFE-9190-A4F3882F4FD2"}
 */
var rfHtmlTest = '<html> \
	<head> \
	<script type="text/javascript"> \
	function exitB() { \
		localStorage.deviceName = "none";\
		alert("length"+localStorage.length);\
	} \
	</script> \
	</head> \
	<body onload="exitB()"> \
	<button type="button" onClick="getMobileInfo()">TEST</button> \
	</body> \
	</html>';
/**
 * @properties={typeid:35,uuid:"F1026976-BE22-4DC7-A579-C733C4F9D144",variableType:-4}
 */
var sampleMultiArray = [
	[['Test'],[
			['status','R',1],
			['location','O',1],
			['worker','O',1],
			['current','R',1],
			['seqnumber','V',1],
			['prevstatus','V',1],
			['prevlocation','V',1],
			['itemweight','V',1],
			['itemlength','V',1],
			['locationpieces','V',1]
		]],
	[['Other'],[
			['status','R',1],
			['current','R',1],
			['seqnumber','V',1],
			['prevstatus','V',1],
			['prevlocation','V',1],
			['itemlength','V',1],
			['locationpieces','V',1]
		]]
	];
/**
 * Modify rfChangeWindow, getMenuList to show rfViews Required, Optional, Validate
 * @properties={typeid:35,uuid:"330BF446-5753-4F19-83DF-DA7E07C4CD6D",variableType:-4}
 * Add a view, set sts.mobile.{viewName}
 * Add and create fields for new View
 * function rfFunctionKeys(screen) add function keys for that screen
 * getMenuList in jobssts add view there
 * getMappings() to set mobile FS print and views settings
 * Add case to rfChangeWindow()
 * Add menu to rf_mobile_view
 * always the fabsuite barcode to check in cut list		asnin : 'R',
 * 		ASN / Serial # cutstrikethrough? Y/N Print Out The ID Labels For This Cut List Line? Y/N  if Y send BarTender. MSG: Number of Item Sent To Queue: X MSG: Number Items Already Printed: Y if no strikethrough, fill NONE 
 */
var rfViews = {
	Sample : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		jobnumberin : 'R',
		loadnumberin : 'R',
		drawrevin : 'O',
		currentidin : 'R',
		previousid : 'V',
		jobnumber : 'V',
		shoporder : 'V',
		seqnumber : 'V',
		prevstatus : 'V',
		prevlocation : 'V',
		itemweight : 'V',
		itemlength:'V',
		sheetnumber : 'V',
		piecemark : 'V',
		ps : 'V',
		receiveweight: 'V,', //comma extends line with next data field after this one
		receiveremaining : 'V',
		material : 'V',
		locationpieces: 'V', //comma extends line with next data field after this one
		locationweight: 'V',
		bundlepieces : 'V',
		bundleweight : 'V',
		gradein : 'O',
		heatin : 'O',
		pcmksatlocation : 'V',
		location : 'V',
		shippieces : 'V',
		shipweight : 'V',
		pcsstatcount : 'V',
		updateload : 'R',
		cancelupdate : 'O'

	},
	Receiving : {
		genericin : 'R',
		genericin2 : 'R',
		jobnumberin : 'R',
		loadnumberin : 'R',
		statusin : 'O',
		locationin : 'O',
		currentidin : 'R',
		sheetnumber : 'V',
		seqnumber : 'V',
		piecemark : 'V',
		material : 'V',
		itemlength:'V',
		itemweight : 'V',
		shoporder : 'V',
		receiveweight: 'V,',
		receiveremaining : 'V'
	},
	'Build Bundles' : {
		genericin : 'R',
		genericin2 : 'R',
		jobnumberin : 'R',
		bundlein : 'R',
		statusin : 'R',
		locationin : 'O',
		currentidin : 'R',
		bundleid : 'V',
		bundlepieces : 'V,',
		bundleweight : 'V',
		piecemark : 'V',
		material : 'V',
		itemlength:'V',
		itemweight : 'V'
	},
	'Saw' : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		gradein : 'R',
		heatin : 'R',
		currentidin : 'R',
		piecemark : 'V',
		jobnumber : 'V',
		shoporder : 'V',
		seqnumber : 'V',
		itemweight : 'V',
		itemlength:'V',
		pcsstatcount : 'V'
	},
	'Status' : {
		genericin : 'R',
		genericin2 : 'R',
		currentidin : 'R',
		
		jobnumber : 'V',
		piecemark : 'V',
		jobweight : 'V',
		seqnumber : 'V',
		shoporder : 'V',
		loadnumber : 'V',
		status : 'V',
		location : 'V',
		pcmksatlocation : 'V',
		itemweight :'V',
		itemlength :'V',
		locationweight: 'V',
		locationpieces: 'V',
		material : 'V'
	},
	'Find Piece Marks' : {
		genericin : 'R',
		genericin2 : 'R',
		jobnumberin : 'R',
		piecemarkin : 'R',
		piecemark : 'V',
		material : 'V',
		itemweight : 'V',
		itemlength:'V',
		location : 'V'
	},
	'Final Ship' : {
		genericin : 'R',
		genericin2 : 'R',
		jobnumberin : 'R',
		loadnumberin : 'R',
		statusin : 'R',
		locationin : 'O',
		spacer : 'V',
		shippieces : 'V,',
		shipweight : 'V'		
	},
	'Ship By Sequence' : {
		genericin : 'R',
		genericin2 : 'R',
		jobnumberin : 'R',
		seqnumberin : 'R',
		loadnumberin : 'R',
		statusin : 'O',
		locationin : 'O',
		currentidin : 'R',
		sheetnumber : 'V',
		piecemark : 'V',
		material : 'V',
		itemlength:'V',
		itemweight : 'V',
		shoporder : 'V',
		ps : 'V',
		shippieces : 'V,',
		shipweight : 'V'
	
	},
	'Shipping' : {
		genericin : 'R',
		genericin2 : 'R',
		jobnumberin : 'R',
		loadnumberin : 'R',
		statusin : 'R',
		locationin : 'O',
		currentidin : 'R',
		spacer : 'V',
		shippieces : 'V,',
		shipweight : 'V',
		sheetnumber : 'V',
		seqnumber : 'V',
		piecemark : 'V',
		material : 'V',
		itemlength:'V',
		itemweight : 'V',
		shoporder : 'V',
		ps : 'V'
	},
	'Transactions' : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		currentidin : 'R',
		locationpieces: 'V', //comma extends line with next data field after this one
		locationweight: 'V',
		piecemark : 'V',
		jobnumber : 'V',
		seqnumber : 'V',
		prevstatus : 'V',
		prevlocation : 'V',
		pcsstatcount : 'V',
		itemweight : 'V',
		itemlength:'V'
	},
	'Transactions w/Revs' : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		drawrevin : 'R',
		currentidin : 'R',
		piecemark : 'V',
		jobnumber : 'V',
		seqnumber : 'V',
		prevstatus : 'V',
		prevlocation : 'V',
		pcsstatcount : 'V',
		itemweight : 'V',
		itemlength:'V',
		locationpieces: 'V', //comma extends line with next data field after this one
		locationweight: 'V'
	},
	'Inspections' : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		currentidin : 'R',
		piecemark : 'V',
		jobnumber : 'V',
		seqnumber : 'V',
		prevstatus : 'V',
		prevlocation : 'V',
		pcsstatcount : 'V',
		itemweight : 'V',
		itemlength:'V',
		locationpieces: 'V', //comma extends line with next data field after this one
		locationweight: 'V'
		
	},
	'Inspections w/Revs' : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		drawrevin : 'R',
		currentidin : 'R',
		piecemark : 'V',
		jobnumber : 'V',
		seqnumber : 'V',
		prevstatus : 'V',
		prevlocation : 'V',
		pcsstatcount : 'V',
		itemweight : 'V',
		itemlength:'V',
		locationpieces: 'V', //comma extends line with next data field after this one
		locationweight: 'V'
	},
	'Checklist Receive' : {
		genericin : 'R',
		genericin2 : 'R',
		stocklocationin : 'R',
		countryoriginin : 'O',
		billofladingin : 'O',
		barcodein : 'R',
		bundledin :'R',
		finalizein : 'O',
		remarksin : 'O',
		heatin : 'R',
		quantityin : 'R',
		asnnumber : 'V',
		lastquantity : 'V',
		ponumber : 'V',
		ordered : 'V',
		remains : 'V',
		invmaterial : 'V',
		invgrade : 'V',
		itemlength:'V',		
		itemweight : 'V'
	},
	'Checklist Status' : {
		genericin : 'R',
		genericin2 : 'R',
		barcodein : 'R',
		asnnumber : 'V',
		ponumber : 'V',
		ordered : 'V',
		remains : 'V',
		invmaterial : 'V',
		invgrade : 'V',
		itemlength:'V',		
		itemweight : 'V'
	},
	'Cut Cutlist Raw' : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'R',
		barcodeclin : 'R',
		strikethruin : 'R',
		printidin : 'R',
		asnin : 'R',
		quantityin : 'R',
		dropwidthin : 'R',
		droplengthin : 'R',
		invmaterial : 'V',
		invgrade : 'V',
		heat : 'V',
		alllength : 'V',
		nonstrikelength : 'V',
		invlocation : 'V',
		associatecuts : 'V'
	},
	'Labor Transactions' : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		currentidin : 'R',
		laborin : 'R',
		locationpieces: 'V', //comma extends line with next data field after this one
		locationweight: 'V',
		piecemark : 'V',
		laborcomplete : 'V',
		jobnumber : 'V',
		seqnumber : 'V',
		prevstatus : 'V',
		prevlocation : 'V',
		pcsstatcount : 'V',
		itemweight : 'V',
		itemlength:'V'
	},
	'Labor Inspections' : {
		genericin : 'R',
		genericin2 : 'R',
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		currentidin : 'R',
		laborin : 'R',
		piecemark : 'V',
		laborcomplete : 'V',
		jobnumber : 'V',
		seqnumber : 'V',
		prevstatus : 'V',
		prevlocation : 'V',
		pcsstatcount : 'V',
		itemweight : 'V',
		itemlength:'V',
		locationpieces: 'V', //comma extends line with next data field after this one
		locationweight: 'V'
		
	},
	'Inventory Move' : {
		genericin : 'R',
		genericin2 : 'R',
		locationin : 'R',
		spacer : 'V',
		asnin : 'R',
		invmaterial : 'V',
		quantityx : 'V',
		itemwidth : 'V',
		itemlength:'V',
		itemweight:'V',
		invgrade : 'V',
		heat : 'V',
		jobnumberx : 'V',
		ponumber : 'V',
		prevlocation : 'V',
		association : 'V'
	},
	'Inventory Audit' : {
		genericin : 'R',
		genericin2 : 'R',
		iaauditin : 'R',
		asnin : 'O',
		bundledin :'R',
		quantityin : 'R',
		invmaterial : 'V',
		itemlength:'V',
		invgrade : 'V',
		heat : 'V',
		ponumber : 'V',
		billoflading : 'V',
		ordered : 'V',
		remains : 'V',
		location1 : 'V',
		location2 : 'V'
	},
	'Inventory Status' : {
		genericin : 'R',
		genericin2 : 'R',
		asnin : 'R',
		invmaterial : 'V',
		quantityx : 'V',
		itemweight : 'V',
		itemlength : 'V',
		invgrade : 'V',
		heat : 'V',
		ponumber : 'V',
		location1 : 'V',
		association : 'V',
		jobnumberx : 'V',
		itemwidth : 'V'
	},
	'Inventory Sweep' : {
		genericin : 'R',
		genericin2 : 'R',
		isauditin : 'R',
		asnin : 'R',
		invmaterial : 'V',
		itemlength:'V',
		itemweight:'V',
		heat : 'V',
		ponumber : 'V',
		location1 : 'V',
		association : 'V',
		sweepquanremain : 'V',
		sweepfound : 'V',
		sweepmovedinout : 'V',
		sweepmovedoutcomplete : 'V',
		sweepcomplete : 'V'	
	},
	'Inventory TFS' : {
		genericin : 'R',
		genericin2 : 'R',
		asnin : 'R',
		quantityin : 'R',
		tfsjobin : 'R',
		droplengthin : 'R',
		dropjobin : 'R',
		droplocin : 'R',
		invmaterial : 'V',
		itemlength : 'V',
		quantityx : 'V',
		invgrade : 'V',
		heat : 'V',
		location1 : 'V',
		association : 'V'
	},
	'Inventory ASN Receiving' : {
		genericin : 'R',
		genericin2 : 'R',
		stocklocationin : 'R',
		asnin : 'R',
		rawmaterialid : 'V',
		ponumber : 'V',
		ordered : 'V',
		remains : 'V',
		invmaterial : 'V',
		invgrade : 'V',
		heat : 'V',
		itemlength : 'V',
		itemweight : 'V',
		invlocation : 'V',
		association : 'V'
	}

}
/**
 * @properties={typeid:35,uuid:"27E84AA2-A492-48E4-8E9C-7961D804A5A6",variableType:-4}
 */
var nonRfViews = {
	Sample : {
		statusin : 'R',
		locationin : 'O',
		workerin : 'O'
		},
	piecemark : {
		job_number : 'R',
		customer_number : 'R',
		shop_order : 'O',
		load_number : '',
		load_po :'',
		load_release : '',
		item_status_code : '',
		item_location : '',
		qty_barcode : '',
		qty_labels : '',
		piecemark : '',
		sequence_number : '',
		pcmk_qty : 'R', // was item_quantity 20190102
		item_weight : '',
		cust_cow_code : '',
		material : '',
		description : '',
		item_width : '',
		item_length : ''
	},
	piecemark_entry : {
		job_number : 'R',
		customer_number : 'R',
		shop_order : 'O',
		load_number : '',
		load_po :'',
		load_release : '',
		item_status_code : '',
		item_location : '',
		qty_barcode : '',
		qty_labels : '',
		piecemark : '',
		sequence_number : '',
		pcmk_qty : 'R',  // was item_quantity 20190102 
		item_weight : '',
		cust_cow_code : '',
		material : '',
		description : '',
		item_width : '',
		item_length : ''
	},
	jobs_general :{
		job_number : '',
		customer_number : '',
		job_title : '',
		job_structure : '',
		job_location : '',
		job_care_of : '',
		customer_po : '',
		po_release : '',
		rf_interface : '',
		label_format : '',
		metric_job : '',
		job_plant : '',
		ship_to : '',
		project_year : '',
		job_hours : '',
		job_efficiency : '',
		ft_projectid : ''
	},
	barcode_idlabel :{
		//frmJobNum : '',
		frmSeqNum : '',
		frmSheetNum : '',
		frmSONum : '',
		frmLoadNum : '',
		frmLoadRel : '',
		frmDrawingNum : '',
		frmIdNumber : '',
		frmPiecemark : '',
		frmPcmkRel : '',
		frmFabShop : '',
		frmLotNum : '',
		frmPkgNum : '',
		frmArea : '',
		frmBatch : ''
		
	}
}
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D1A9D8DA-239C-49BA-A838-FA245CF348AD"}
 */
var mobSheetNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E11EF9BF-5E5B-4014-B679-DE09383571DD"}
 */
var mobSequenceNumber = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B60345C1-3CE2-49CC-85A5-91EB38ADC963"}
 */
var mobItemLength = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F16A13FE-BA59-446B-97B4-E92DB69C1F42"}
 */
var mobItemWidth = "";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3A65160-CCB8-4238-ACDB-DDC1B7CDACEB",variableType:4}
 */
var mobItemWeight = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1CCAA5B8-15B5-455A-8C1E-863D000F5A59",variableType:4}
 */
var mobLocationPiecemarks = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D365CEB-9D74-4BB6-8EBD-08871953857E"}
 */
var mobPiecesStatus = "/";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6FC08DCC-5F08-431E-9008-BF5314EC5ED8"}
 */
var mobLoadNumber = "";
/**
 * @properties={typeid:35,uuid:"CA84F9A7-3078-417E-846A-50985958935F",variableType:-4}
 */
var licenseError = false;
/**
 * @properties={typeid:35,uuid:"332B4983-26FE-484D-B976-9492D59CB910",variableType:-4}
 */
var showViewDetail = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"58E4CCD5-4A0F-4AC4-A9DA-9D9725363C72",variableType:4}
 */
var mobLoadPiecemarks = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12E0F89E-56E0-4994-83FA-3147A0725497"}
 */
var mobUnits = "";
/**
 * @properties={typeid:35,uuid:"63904BF5-9EB3-48A5-B0F2-A47AB67D515E",variableType:-4}
 */
var mobileWindows = [];//see getI18nWindowNames
/**
 * @properties={typeid:35,uuid:"818C22F3-8198-471B-81B3-1AEE3AB764CF",variableType:-4}
 */
var importResultsFS = [];
/**
 * @properties={typeid:35,uuid:"0C72DBAF-A00F-4089-807B-62FEAD753563",variableType:-4}
 */
var importJobFS = {
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
 * @properties={typeid:35,uuid:"9B203D7B-5BDD-4930-AD46-68275A0AA690",variableType:-4}
 */
var commandPrefixes = {
	'bundlein' : 'B',
	'locationin' : 'C',
	'currentidin' : 'D',
	'gradein' : 'G',
	'heatin' : 'H',
	'jobnumberin' : 'J',
	'loadnumberin' : 'L',
	'billofladingin' : 'L',
	'piecemarkin' : 'M',
	'partnumberin' : 'P',
	'quantityin' : 'Q',
	'fsusernamein' : 'R',
	'statusin' : 'S',
	'seqnumberin' : 'U',
	'drawrevin' : 'V',
	'workerin' : 'W'
}
/**
 * @properties={typeid:35,uuid:"33E6DA1A-7132-4857-A5ED-F5F8A220BED3",variableType:-4}
 */
var errorMessageShowing = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C88C3BB3-D1CE-408D-B024-6994E1EE2D50"}
 */
var localeSelected = '';
/**
 * @properties={typeid:35,uuid:"745A0368-ABDE-47BE-B7C5-A5ACAB3DC2E4",variableType:-4}
 */
var deBounceBtn = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6ABE5F4F-4307-4087-B3E6-C8DD3C2B563A"}
 */
var labelDestUserID = '';
/**
 * @properties={typeid:35,uuid:"BB987A10-B9EA-4F76-8DBF-C72488213071",variableType:-4}
 */
var mobilePrintViews = [];
/**
 * @properties={typeid:35,uuid:"08AD9A29-8738-47A7-B267-F93062C2C9BE",variableType:-4}
 */
var mobileFSViews = [];
/**
 * @properties={typeid:35,uuid:"24904600-D97D-45B4-8E89-3452D1FB3FA6",variableType:-4}
 */
var isAndroid = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A1DF95F-CE55-4A01-A997-1EC16B590481"}
 */
var altInputField = 'genericin';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"33161592-7C7D-4BF3-B9A2-192A860D4711"}
 */
var altInputDataProv = 'genericInput';
/**
 * @properties={typeid:35,uuid:"491F2B7A-A8D4-443A-BEF8-DCC3552E981C",variableType:-4}
 */
var textColumns = [];
/**
 * @properties={typeid:35,uuid:"0FCBFC5A-1875-443D-824A-6210C205C625",variableType:-4}
 * Are the STSmobile labor screens active
 */
var laborScreenActive = false;
/**
 * @properties={typeid:35,uuid:"9C2F42A9-E826-4EDF-A505-29F6ECB4F157",variableType:-4}
 */
var secCurrentUser = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D5AF0BCE-5873-4BE7-BF12-AC1A2A0E9400",variableType:4}
 * global setting for debug messages to console
 */
var debugDev = 0;
/**
 * @properties={typeid:35,uuid:"2D6C6D2F-326E-4166-A15D-A6EB74FC3829",variableType:-4}
 */
var showDeleted = false;
/**
 * @properties={typeid:35,uuid:"1D9380E2-BF15-465E-8EFC-9E8D4A4C48CB",variableType:-4}
 * 			globals.permissions[formName2][elementName] = {visible : (elVisible == 1), enabled : (elEnabled == 1)}
 */
var permissions = [];//
/**
 * @properties={typeid:35,uuid:"C84BA70E-4267-44D0-BDC6-A4DAED5F92E2",variableType:-4}
 */
var openWindowRO = false;
/**
 * @properties={typeid:35,uuid:"85679824-9EEF-41BE-87D8-EAD829BE22FC",variableType:-4}
 */
var iaResult = {};
/**
 * @properties={typeid:35,uuid:"898600F5-679A-4505-A0A6-FBF46B0ADB15",variableType:-4}
 */
var showPrintQueueEffort = false;
/**
 * @properties={typeid:35,uuid:"55BDB716-6228-4DAC-AC99-F91A410EDCFD",variableType:-4}
 */
var interimLoadCreation = false;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A9D453EE-3DFD-4DA4-913A-C5DD7FA752CC",variableType:93}
 */
var errorMessageTime = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E52A8C5A-01C1-47F7-B6C3-5BB44A2313EE"}
 */
var rfYesNoDialogText = '';
/**
 * @properties={typeid:35,uuid:"489E0E9C-C0C5-4654-BB68-FD98D3B1A33E",variableType:-4}
 */
var rfYesNoDialog = {
	text : '',
	to_be_returned : false,
	load_number : '',
	interim_load : false,
	destinationIdx : -1,
	destination : '',
	destinations : [],
	win : null,
	win_question : null,
	win_entry : null
}

/**
 * @properties={typeid:35,uuid:"12A51394-5A60-481F-8D2D-F3889246F25D",variableType:-4}
 */
var loginError = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BFE7EBBD-5FCC-4624-BE8C-7AB4736E669F"}
 */
var queryMessageMobile = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D00E0C7-1FDD-48E9-8053-2C7AAB472E35"}
 */
var backupFileNameAndPath = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9EEAE23A-3E14-4C0A-A499-DE9DC0C13AB5"}
 */
var statusCodeSelection = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10B809CE-7653-475D-8600-0B320EED3EEC"}
 */
var dupErrorMsg = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A6D023D-110D-411B-BF0E-CA99A01D624C"}
 */
var shipRgx = '%'+i18n.getI18NMessage('sts.txt.i18n.ship').toUpperCase()+'%';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5544ECDF-AC81-4CED-966F-F952261EB1E6"}
 */
var billRgx = '%'+i18n.getI18NMessage('sts.txt.i18n.bill').toUpperCase()+'%';
/**
 * @AllowToRunInFind
 * 
 * @param assocID
 *
 * @properties={typeid:24,uuid:"4118695F-605D-4EF0-883C-8E3BBD5E837D"}
 */
function getAssociation(assocID){
	if (aMobAssocs.length == 0){
		/** @type {QBSelect<db:/stsservoy/associations>} */
		var e = databaseManager.createSelect('db:/stsservoy/associations');
		e.result.add(e.columns.association_uuid);
		e.where.add(e.columns.tenant_uuid.eq(session.tenant_uuid));
		e.where.add(e.columns.delete_flag.isNull);
		var E = databaseManager.getFoundSet(e);
		var index = 1;
		/** @type {JSFoundSet<db:/stsservoy/associations>} */
		var rec = E.getRecord(1);
		while (rec = E.getRecord(index++)){
			aMobAssocs[rec.association_uuid] = rec.association_name;
			aMobAssocs[rec.association_name] = rec.association_uuid;
		}
	}
	mobAssoc = aMobAssocs[assocID];
}
/**
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
	if (application.isInDeveloper()){application.output('duration '+totalMinutes);}
	return totalMinutes;
	/**
	var hourSeconds = 2400;
	var saveHours = totalSeconds/hourSeconds;
	var hours = Math.floor(saveHours);
	totalSeconds = totalSeconds-(hours*hourSeconds);
	var totalMinutes = Math.floor(totalSeconds/60); 
	totalSeconds = totalSeconds-(totalMinutes*60);
	totalSeconds = totalSeconds+"";
	totalMinutes = totalMinutes+"";
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
	getUserNames();
	getJobsTenant();
	mobilePrintViews = [
	 'sts.mobile.asn.receiving',
	 'sts.mobile.checklist.receive',
	 'sts.mobile.checklist.receive.w.rem',
	 'sts.mobile.checklist.status',
	 'sts.mobile.build.bundles',
	 'sts.mobile.inspections',
	 'sts.mobile.inspections.w.revs',
	 'sts.mobile.transactions',
	 'sts.mobile.transactions.w.revs',
	 'sts.mobile.status',
	 'sts.mobile.wts.sts.saw',
	 'sts.mobile.cut.cutlist.raw',
	 'sts.mobile.cut.cutlist.raw.sts.id',
	 'sts.mobile.cut.cutlist.raw.sts.minorid',
	 'sts.mobile.cut.sts.inventory',
	 'sts.mobile.inventory.tfs',
	 'sts.mobile.inventory.move',
	 'sts.mobile.inventory.status',
	 'sts.mobile.inventory.audit'];
	mobileFSViews = [
	 'sts.mobile.asn.receiving',
	 'sts.mobile.checklist.receive',
	 'sts.mobile.checklist.receive.w.rem',
	 'sts.mobile.checklist.status',
	 'sts.mobile.inventory.move',
	 'sts.mobile.inventory.status',
	 'sts.mobile.inventory.audit',
	 'sts.mobile.inventory.audit.sweep',
	 'sts.mobile.return.receive',
	 'sts.mobile.inventory.tfs',
	 'sts.mobile.inventory.asn.receiving',
	 'sts.mobile.cut.cutlist.raw'];
}

/**
 * @properties={typeid:24,uuid:"69456D2F-A197-41E5-8FCA-E7187F1BEE40"}
 * @SuppressWarnings(wrongparameters)
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
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	);
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var record = resultQ.getRecord(index);
		var assocId = record.association_uuid.toString();
		var assocName = record.association_name;
		if (l.assocs.indexOf(assocName) == -1){
			l.assocs.push(assocName);
			if (record.logic_flag != 1){
				l.nonOffices.push(assocName);
			}
		}
		m.assocs[assocId] = assocName;
		m.assocs[assocName] = assocId;
	}
}
/**
  * @properties={typeid:24,uuid:"FC6366B2-8042-43E3-92DF-F48F1E7CB40E"}
 * @SuppressWarnings(wrongparameters)
 */
function getStatusDescriptions(){
	l.laborStations = [];
	l.laborStatRouted = [];
	l.laborStatStarts = [];
	l.stations = [];
	l.statusCodes = [];
	l.routeDefault = [];
	l.stationsMultiScan = [];
	l.promptComplete = [];//ticket #103 timed ops
	m.stations = [];
	m.statusCodesDiv = [];
	m.stationSeq = [];
	m.stationsThird = [];
	m.stationsTimed = [];
	m.stationsTimedEnds = [];
	m.statusToProcess = [];
	m.statusCodeToId = [];
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.association_id);
	q.result.add(q.columns.status_code);
	q.sort.add(q.columns.status_sequence);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.association_id.eq(session.associationId.toString()));//was missing assoc during invoc for third party
	
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/status_description>} */
		var record = resultQ.getRecord(index);
		var descripId = record.status_description_id.toString();
		var assocId = record.association_id.toString();
		var status = record.status_code;
		var third = record.thirdpty_station_name;
		var assocName = m.assocs[assocId];
		var stationOrg = assocId+", "+status;
		var station = assocName+", "+status;
		if (third){
			if (m.stationsThird.indexOf(third) == -1){
				m.stationsThird[status] = third;
			}
		}
		if (record.allow_start_prior_not == 1){l.laborStatStarts.push(status)}
		if (record.labor_percentage_scan == 1){l.laborStations.push(status)}
		if (l.stations.indexOf(station) == -1){ // get list of all text station names
			l.stations.push(station);
		}
		if (l.statusCodes.indexOf(status) == -1){ // get list of all org status codes
			l.statusCodes.push(status);
		}
		if (record.prompt_complete == 1){
			l.promptComplete.push(status); // ticket #103 timed ops
		}
		m.stationSeq[descripId] = record.status_sequence;
		if (!m.statusCodesDiv[assocId]){ //status codes by division
			m.statusCodesDiv[assocId] = [];
		}
		m.statusCodeToId[record.status_code] = descripId;
		/** @type {Array} */
		var tempArray = m.statusCodesDiv[assocId];
			tempArray.push(status);
		// description_id.UUID -> stationName.TXT+status.TXT -> stationOrg.UUID+status.TXT -> description_id.UUID
		m.stations[descripId] = station;
		m.stations[station] = stationOrg;
		m.stations[stationOrg] = descripId;
		l.routeDefault.push(descripId);//set default route order STS process
		if (record.end_for_status != null){
			m.stationsTimed[record.end_for_status] = descripId;
			m.stationsTimedEnds[descripId] = record.end_for_status;
		}
		if (record.allow_multi_scan == 1){
			if (l.stationsMultiScan.indexOf(descripId) == -1){
				l.stationsMultiScan.push(descripId);
			}
		}
		m.statusToProcess[status] = record.status_type;
	}
}
/**
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
	/** @type {Array} */
	var statusCodes = globals.m.statusCodesDiv[session.associationId];
	application.setValueListItems('stsvlg_status_codes',statusCodes); // status codes for this association
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
	if (application.isInDeveloper()){application.output('status '+status);}
	if (stationCodes.indexOf(status) == -1){
		forms[formName].elements.status.requestFocus();
		forms[formName].resetStatusCode();
	}
}
/**
 * @properties={typeid:24,uuid:"D4132049-A5B7-41D6-A94D-3FCDA0662B3E"}
 */
function rfF2SwitchPlants(){
	forms['rf_mobile_view'].functionKeyEntered = true;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var formName = application.getActiveWindow().controller.getName();
	if (thisFunction == flagFunction && forms[formName].elements.elDivisionChg.visible){
		forms[formName].elements.elDivisionChg.visible = false;
		forms[formName].elements.elDivisionChg.enabled = true;
		return;
	}
	if (l.nonOffices.length == 1){return}
	forms['rf_mobile_view'].genericInput = '';
	flagFunction = thisFunction;
	//globals.mobDisableForm(true);
	// More than one association?
	var assocNames = [];
	for (var index = 0;index < l.nonOffices.length;index++){
		var assocName = l.nonOffices[index];
		//if (assocName == currentAssocName){continue}
		if (assocNames.indexOf(assocName) == -1){
			assocNames.push(assocName);
		}
	}
	assocNames.sort();
	rfF2Division = ""; // valuelist selection of empty string deselects selection in list window
	forms[formName].elements.elDivisionChg.visible = true;
	forms[formName].elements.elDivisionChg.enabled = true;
	application.setValueListItems('rfDivisionList',assocNames);
}
/**
 * @properties={typeid:24,uuid:"36AE54B4-7F0A-427C-A53E-035DE07E8012"}
 */
function accessLevel(){
	/**
	 * Is this action permitted to the user by 
	 * company, division, job, piecemark, transaction
	 * edit, view, create, delete, 
	 * employee, logins, 
	 */
	
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"8227BD97-38DF-4DB0-BF53-B7C13C1FC096"}
 */
function rfF8Reversal(){
	/**
	 * reverse last record in transaction for scanned barcode
	 * only employees with same association may reverse the scan
	 * is there a reversal capability in the employee record
	 */
	//forms['rf_mobile_view'].genericInput = '';
	//11if (application.isInDeveloper()){application.output('reversal entered pre')}
	var formName = application.getActiveWindow().controller.getName();
	var form = forms[formName]; var leaveF8 = false;
	switch (session.program) {
		case mobileWindows[i18n.getI18NMessage('sts.mobile.shipping')]:
			leaveF8 = (!form.jobNumber || !form.loadNumber || !form.statusCode);
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.ship.by.sequence')]:
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')]:
			break;
		default:
			leaveF8 = false;
	}
	if (leaveF8){
		if (application.isInDeveloper()){application.output('leaving reversal. Insufficient required entries.')}
		return
	}
	if (mob.statusCode == ""){return}
	//11if (application.isInDeveloper()){application.output('reversal entered sufficient')}
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	//9 forms['rf_mobile_view'].genericInput = '';
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	//forms[formName].elements.transShop.transparent = false;
	//forms[formName].elements.transShop.background = "Yellow";
	//application.output('form-----'+formName+ ' '+forms[formName].elements.transShop.bgcolor);
	//var win = application.createWindow('F8',JSWindow.MODAL_DIALOG);
	//globals.mobDisableForm(false);
	//functionKeyProcedure[8] = 'globals.rfF8done';
	//plugins.window.createShortcut('F8',functionKeyProcedure[8]);
	flagF8 = (flagFunction != null);
	application.updateUI();
	if (flagF8){
		//f8ReversalColor = forms[formName].elements.transShop.background;
		forms[formName].elements.transShop.bgcolor = 'Yellow';
		f8ReversalText = forms[formName].viewTitle;
		forms[formName].viewTitle = f8ReversalText+' '+i18n.getI18NMessage('sts.text.reversal.notice');//+' '+session.association;
		forms[formName].controller.focusField(globals.session.errorElement,false);
		//9 forms['rf_mobile_view'].genericInput = '';
	} else {
		forms[formName].controller.focusField(globals.session.errorElement,false);
		forms[formName].viewTitle = f8ReversalText;
		//9 forms['rf_mobile_view'].genericInput = '';
	}
	//11forms[formName].elements.statusin.enabled = !flagF8;
	//11forms[formName].elements.workerin.enabled = !flagF8;
	forms[formName].elements.transShop.transparent = !flagF8;
	//forms['rf_mobile_view'].genericInput = '';
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//focusFirst()
	//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
	}

}
/**
 * @properties={typeid:24,uuid:"7EEC836A-4FFC-4842-A0B6-8E99E066519D"}
 */
function rfF8ReversalTransaction(){
	/**
	 * get list of transaction for the representative idfileid
	 * if start transaction, then look for END station and bail
	 * if end transaction, then look for START station and bail
	 * 
	 * remove ENDED transaction if trailer_labor_percent = 0, now labor_percentage labor_quantity
	 * edit ENDED transaction trailer_labor_quantity=0 and trailer_labor_percent=0, when trailer_labor_percent = 100
	 * collect all transaction records with that status
	 * flag=10 for those status transactions, meaning '1' on to '0' off, DE prefixed
	 * reset idfile status_description_id upon transaction delete when greatest status deleted
	 */
	rfGetTransactions();
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var transactions = mob.transactions;
	///var transList = [];
	///var edit = false;
	var status = mob.statusCode;
	var stationId = session.stationId;
	if (application.isInDeveloper() || true){application.output('station id '+stationId)}
	var transStart = ""; var transEnd = "";
	var fTransStart = (m.stationsTimed[stationId] != undefined);
	if (fTransStart){transStart = stationId;transEnd = m.stationsTimed[stationId];}
	var fTransEnd = (m.stationsTimedEnds[stationId] != undefined);
	if (fTransEnd){transStart = m.stationsTimedEnds[stationId];transEnd = stationId;}
	var foundIndex = 0;
	var errorNum = 0;
	var errorMsg = '';
	if (fTransStart){
		if (application.isInDeveloper()){application.output('trans start status '+status)}
	}
	if (fTransEnd){
		if (application.isInDeveloper()){application.output('trans end status '+status)}
	}
	// start with just status, and report if there is a status not in this division
	var rec = null;//if this is a fitend,  then find the start to remove the 100 percent begin fit
	for (var index = 1; index <= transactions.getSize(); index++){
		rec = transactions.getRecord(index);
		if (application.isInDeveloper()){application.output(index+' REC '+rec.status_description_id+' start '+transStart+' end '+transEnd)}
		if (fTransStart && rec.status_description_id+"" == transEnd+""){
			errorNum = 412; // this is a delete for a start transaction, but the latest is an end
			errorMsg = '';
			break;
		}
		if (fTransEnd && rec.status_description_id+"" == transStart+""){
			errorNum = 413; // this is a delete for an end transaction, but the latest is a start
			errorMsg = '';
			break;
		}
		/** @type {String} */
		var tempString = m.stations[rec.status_description_id];
		var recStatus = tempString.split(", ")[1];
		if (application.isInDeveloper()){application.output(' remove '+status+' rec status '+recStatus);}
		if (status == recStatus){
			if (rec.status_description_id+"" == stationId+""){
				foundIndex = index;
				break;
			} else {
				errorNum = 410; // status found but different division
				errorMsg = ' Wrong Division.';
				break;
			}
		}
	} 
	if (application.isInDeveloper()){application.output('idfiles '+mob.idfiles);}
	if (errorNum != 0){
		// raise error button
		if (application.isInDeveloper()){application.output('error reversal '+errorNum)}
		errorDialogMobile('rf_mobile_view.currentidin',errorNum,'currentidin',errorMsg);
		return null;
	}
	if (foundIndex == 0){
		// status not found error
		errorDialogMobile('rf_mobile_view.currentidin',409,'currentidin','');
		if (application.isInDeveloper()){application.output('error reversal status not found')}
		return null;
	}
	// should be at least one idfile and one transaction record
	var transTime = rec.transaction_date;
	///var tenantId = rec.tenant_uuid;
	if (application.isInDeveloper()){application.output('reversal of record '+rec)}
	//if (true){return transactions;}
	var transactionsFS = rfUpdateableTransactions(transTime);
	var tranRevDate = new Date();
	var workerId = session.employeeId;
	var formName = application.getActiveWindow().controller.getName();
	/**@type {String} */
	var worker = forms[formName].statusWorker;
	if (worker != "" && worker != null){
		worker = worker.split('.')[0];
		workerId = getLoggedEmployeeId(worker);
	}
	var removeStatus = 'DE'+status;
	if (application.isInDeveloper()){application.output(worker+' id '+workerId+' tranrevdate '+tranRevDate+' '+removeStatus+' location ')}
	var fsUpdater = databaseManager.getFoundSetUpdater(transactionsFS);
	///var fTimed = (fTransStart || fTransEnd);
	if (fTransEnd || (!fTransStart && !fTransEnd)){ // error message with end timed labor percentage = 100 // 20191023 and no trans end or begin
		var fResetTimed = (rec.labor_percentage >= 100);
		if (fResetTimed){
			fsUpdater.setColumn('labor_percentage',0);
			fsUpdater.setColumn('labor_quantity',0);
			fsUpdater.performUpdate(); //411 100% complete Removed From the STOP Status Code.
			if (!(!fTransStart && !fTransEnd)){// && mob.completeStatus*1 != 1)){// no error message on removing from a non-labor tracked transaction
				errorDialogMobile('rf_mobile_view.currentidin',411,'currentidin','');
			}
			//return null;
		}
	}
	fsUpdater.setColumn('trans_status',removeStatus);
	fsUpdater.setColumn('trans_reversal_date',tranRevDate);
	fsUpdater.setColumn('trans_reversal_worker',workerId);
	fsUpdater.setColumn('delete_flag',10);
	fsUpdater.performUpdate();
	fsUpdater = null;
	
	// update all idfiles with those transactions
	var maxStatus = "";
	var idfilesFS = rfUpdateableIdfiles(mob.idfiles);
	if (idfilesFS != null){
		maxStatus = rfValidLastMaxStatus(mob.idfiles[0]);
	}
	rec = idfilesFS.getRecord(1);
	var currentStatus = rec.status_description_id;
	var currentLocation = rec.location;
	formName = application.getActiveWindow().controller.getName();
	var statusLocation = forms[formName].statusLocation;
	if (application.isInDeveloper()){application.output('location '+statusLocation)}
	if ((currentStatus != maxStatus) || (currentLocation != statusLocation)){
		var fsUpdaterIds = databaseManager.getFoundSetUpdater(idfilesFS);
		if (currentStatus != maxStatus){
			fsUpdaterIds.setColumn('status_description_id',maxStatus);
		}
		if (statusLocation && currentLocation != statusLocation){
			fsUpdaterIds.setColumn('id_location',statusLocation);
		}
		if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.shipping')]){
			fsUpdaterIds.setColumn('current_load_id',null);
			if (scopes.prefs.lShipLoad){
				fsUpdaterIds.setColumn('ship_load_id',null);
			}
		}
		fsUpdaterIds.performUpdate();
		fsUpdaterIds = null;
		rfGetSpecsLoad(session.program);
	}
	return null;
}
/**
 * @properties={typeid:24,uuid:"09B2552B-094C-46F8-BF8A-E71D1359F39A"}
 */
function rfF8ReversalPrep(){
	/** 
	 * get list of transactions for the representative idfileId
	 * select status name of last transaction
	 * update button
	 * need date for FS, third station, job number, main mark, piecemark, sequence, lot, quantity, employee,
	 * date, employee, 
	 */
	 /** @type {JSFoundSet<db:/stsservoy/transactions>} */
	forms['rf_mobile_view'].genericInput = '';
	var transactions = rfLatestTransaction(mobRepIdfileId);
	var transSize = transactions.getSize();
	var removal = (transSize != 0);
	application.output('rfF8ReversalPrep size '+transSize);
	if (!removal){return}
	// 3rd party handling
	var rec = null;
	mob.date = new Date();var idx = 1;mob.completeStatus = 0;mob.editDate = new Date();
	//identify if timed element, and get starting stationId
	var timedElementEnd = m.stations[m.stations[mob.station+', '+mob.statusCode]];
	mob.begTimedStation = '';//start here to determine begin or end of time status
	if (timedElementEnd){mob.begTimedStation = m.stationsTimedEnds[timedElementEnd]}
	while (rec = transactions.getRecord(idx)){
		if (mob.begTimedStation && rec.status_description_id.toString() == mob.begTimedStation.toString()){//find START status code
			mob.begTimedDate = rec.transaction_end;
			//mob.completeStatus = (mob.completeStatus*1 == 1) ? 1 : 0;//END Status not established, so do not remove from EPM
			//mob.completeStatus = (rec.transaction_end) ? 1 : 0;
			break;//if (!mob.completeStatus){break;}// here we know that the transaction is ended and a new BEGIN trans is a go
		}
		if (rec.trans_status == mob.statusCode){// find START status code
			mob.date = rec.transaction_date;
			mob.reverseWorker = null;
			mob.completeStatus = (rec.labor_percentage >= 100) ? 1 : 0;
			mob.timedCloseOut = mob.completeStatus;
			mob.edit_date = mob.editDate;
			if (!mob.timedBegStat && !mob.timedEndStat){break;}
			//for (var worker in m.workerList){
			//	if (m.workerList[worker].toString() == rec.worker_id.toString()){
			//		mob.reverseWorker = worker;
			//		break;
			//	}
			//}
			//if (!mob.begTimedStation){mob.begTimedStation = rec.status_description_id} // there was no prior END status code
			//break;//if (!mob.begTimedStation){continue;}//break;
		}
		idx++;
	}
	//forms.rf_mobile_view.vSequenceList[globals.mob.idfile.sequence_id];
	///var rec = transactions.getRecord(1);
	if (transSize > 1){
		var recPrev = transactions.getRecord(2);
		mob.stationPrev = recPrev.status_description_id;
		mob.statusPrev = recPrev.trans_status;
	} else {
		mob.stationPrev = "";
		mob.statusPrev = "";
	}
	//var date = rec.transaction_start;
	//var stat = rec.trans_status;
	//mob.statusRemove = stat;
	///var id = mob.barcode;
	forms['rf_mobile_view'].genericInput = '';
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"CBC34BCA-57A6-4FC7-8758-6A0EED302D1E"}
 */
function rfF3(){
	if (application.isInDeveloper()){application.output(flagFunction)}
	//flagFunction = null;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	forms['rf_mobile_view'].genericInput = '';

	var form = forms.rf_mobile_view;//ticket #151 regarding MC9690 navigation with arrow keys
	if (form.elements.tablessHistory.visible){
		forms.rf_mobile_view.elements.tablessHistory.tabIndex = 1;
		form.elements.tablessHistory.visible = false;
		form.elements.tablessHistory.enabled = false;
		//plugins.window.removeShortcut('UP');
		//plugins.window.removeShortcut('DOWN');
		//plugins.window.removeShortcut('RIGHT');
		//plugins.window.removeShortcut('LEFT');
		forms.trans_history.foundset.setSelectedIndex = 1;
		//onReturnFromFunction();
	} else {
		form.elements.tablessHistory.visible = true;
		form.elements.tablessHistory.enabled = true;
		if (0 && !globals.shortcutsSet && !isAndroid){
			plugins.window.createShortcut('UP',globals.rfRecordUp,'rf_mobile_view');
			plugins.window.createShortcut('DOWN',globals.rfRecordDown,'rf_mobile_view');
			plugins.window.createShortcut('RIGHT',globals.rfRecordDetail,'rf_mobile_view');
			plugins.window.createShortcut('LEFT',globals.rfRecordDetailClose,'rf_mobile_view');
			shortcutsSet = true;
		}
		
	
		//form.elements.tablessHistory.requestFocus();
		//plugins.window.createShortcut(shortcut,method)
	}
	null;
}
/**
 * @properties={typeid:24,uuid:"8FD4F0A8-6EB3-4DF9-A497-54CED9E73075"}
 */
function rfF2done(){
	var formName = application.getActiveWindow().controller.getName();
	sessionAssoc();
	sessionSetCodes();
	session.associationId = m.assocs[rfF2Division];
	globals.mobDisableForm(false);
	forms[formName].elements.elDivisionChg.visible = false;
	forms[formName].elements.elDivisionChg.enabled = false;
	setTransShop();
	//forms[formName].setTransShop();
	var f2Status = rfStatusCheck(mob.statusCode);
	if (f2Status == null){
		forms[formName].statusCode = "";
	}
	flagFunction = null;
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
		case 'rf_bundles':
			break;
		default:
			break;
	}
		
}
/**
 * @properties={typeid:24,uuid:"D5ABDB15-3BD5-41CB-B397-C857BE3E1978"}
 * @SuppressWarnings(wrongparameters)
 */
function getRoutes(){
	m.routes = [];
	l.routes = [];
	l.routesAddLegs = [];//l.routeLegs[routeId]
	
	/** @type {QBSelect<db:/stsservoy/routings>} */
	var q = databaseManager.createSelect('db:/stsservoy/routings');
	q.result.add(q.columns.routing_id);
	q.result.add(q.columns.route_code);
	q.result.add(q.columns.allow_more_codes);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	);
	/** @type {JSFoundSet<db:/stsservoy/routings>} */
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var record = resultQ.getRecord(index);
		var routeId = record.routing_id.toString();
		var routeName = record.route_code;
		if (!l.routeLegs[routeId]){l.routeLegs[routeId] = []}
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
 * @SuppressWarnings(wrongparameters)
 */
function getRouteLegs(){
	l.routeLegs = [];//20180827
	/** @type {QBSelect<db:/stsservoy/route_detail>} */
	var q = databaseManager.createSelect('db:/stsservoy/route_detail');
	q.result.add(q.columns.route_detail_id);
	q.result.add(q.columns.e_route_code_id);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.route_order);
	q.sort.add(q.columns.route_order);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	/** @type {JSFoundSet<db:/stsservoy/route_detail>} */
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var record = resultQ.getRecord(index);
		var routeLeg = record.status_description_id+"";
		var routeId = record.e_route_code_id; // use for lookups for piecemark route code
		if (!l.routeLegs[routeId]){
			l.routeLegs[routeId] = [];
		}
		/** @type {Array} */
		var routeLegs = l.routeLegs[routeId];
		routeLegs.push(routeLeg);
	}
}
/**
 * @AllowToRunInFind
 * 
 * @param userId
 *
 * @properties={typeid:24,uuid:"E4BC04A5-2403-47C8-B3A1-20F9009EAFAD"}
 */
function getLoggedEmployee(userId){
	/** @type {QBSelect<db:/stsservoy/users>} */
	var u = databaseManager.createSelect('db:/stsservoy/users');
	u.result.add(u.columns.employee_id);
	u.where.add(u.columns.user_uuid.eq(userId.toString()));
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var resultU = databaseManager.getFoundSet(u);
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var userRec = resultU.getRecord(1);
	
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var e = databaseManager.createSelect('db:/stsservoy/employee');
	e.result.add(e.columns.employee_firstname);
	e.result.add(e.columns.employee_lastname);
	e.result.add(e.columns.employee_id);
	e.result.add(e.columns.employee_number);
	e.where.add(e.columns.employee_id.eq(userRec.employee_id.toString()));
	//e.where.add(e.columns.employee_id.eq(userRec.employee_id));
	var resultE = databaseManager.getFoundSet(e);
	if (resultE.getSize() != 0){
		/** @type {JSRecord<db:/stsservoy/employee>} */
		var rec = resultE.getRecord(1);
		session.fullName = rec.employee_firstname+" "+rec.employee_lastname;
		session.employeeId = rec.employee_id.toString();
		session.employeeNum = rec.employee_number;
		if (application.isInDeveloper()){application.output('session '+session)}
		session.capture = (!rec.employee_rf_logging) ? true : false; // logging enabled for current user
		//session.userId = rec.user_uuid;
	} else {
		session.fullName = "";//login has no user attached
		session.employeeId = "";
		session.employeeNum = "";
		//session.userId = userId;
	}
	return null;
}
/**
 * @AllowToRunInFind
 * 
 * @param userNum
 *
 * @properties={typeid:24,uuid:"BC63FCC9-A76E-45D3-9938-AD21BC2AA2A7"}
 */
function getLoggedEmployeeId(userNum){
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var e = databaseManager.createSelect('db:/stsservoy/employee');
	e.result.add(e.columns.employee_id);
	e.where.add(e.columns.delete_flag.isNull);
	e.where.add(e.columns.tenant_uuid.eq(session.tenant_uuid));
	e.where.add(e.columns.employee_number.eq(userNum));
	var E = databaseManager.getFoundSet(e);
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var rec = E.getRecord(1);
	return rec.employee_id;
}
/**
 * @properties={typeid:24,uuid:"9B25006C-CD80-4F3D-9987-C58C24C47CB8"}
 * @SuppressWarnings(wrongparameters)
 */
function locationList(){
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.location);
	q.result.distinct = true;
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		);
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
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
 * @SuppressWarnings(wrongparameters)
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
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		);
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var resultQ = databaseManager.getFoundSet(q);
	///var locationArray = [];
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
 * @SuppressWarnings(wrongparameters)
 */
function getWorkers(){
	l.workerList = [];
	m.workerList = [];
	m.workerListAssoc = [];
	m.employee3rdParty = [];
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var q = databaseManager.createSelect('db:/stsservoy/employee');
	q.result.distinct = true;
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.employee_active_flag.eq(1));
	/** @type {QBJoins<db:/stsservoy/users>} */
	var u = q.joins.add('db:/stsservoy/users',JSRelation.FULL_JOIN);
	u.on.add(u.columns.employee_id.eq(q.columns.employee_id));
	//u.root.where.add(u.columns.employee_id.eq(q.columns.employee_id));
	q.result.add(q.columns.employee_number);
	q.result.add(q.columns.employee_firstname);
	q.result.add(q.columns.employee_lastname);
	q.result.add(q.columns.employee_id);
	q.result.add(u.columns.user_uuid);
	q.result.add(u.columns.user_name);
	var resultQ = databaseManager.getDataSetByQuery(q,-1);
	var dsQ = resultQ.createDataSource('xyz');
	
	var fsQ = databaseManager.getFoundSet(dsQ);
	fsQ.loadRecords();

	session.workerList = [];
	for (var index = 1;index <= fsQ.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/employee>} */
		var rec = fsQ.getRecord(index);
		//application.output(rec);
		var employeeId = rec.employee_id.toString();
		var userId = (rec.user_uuid) ? rec.user_uuid.toString() : '';
		m.workerList[rec.employee_number] = employeeId;
		if (rec.user_uuid){
			if (!m.loginToUser[userId]){
				m.employeeNames[userId] = rec.employee_firstname+" "+rec.employee_lastname;
				m.employeeNumbers[userId] = rec.employee_number;
				m.loginToUser[userId] = employeeId;
			}
		}
		if (l.workerList.indexOf(rec.employee_number) == -1){
			l.workerList.push(rec.employee_number);
		}
		if (session.workerList.indexOf(rec.employee_number) == -1){
			session.workerList.push(rec.employee_number);			
		}
	}
	/** @type {QBSelect<db:/stsservoy/employee>} */
	q = databaseManager.createSelect('db:/stsservoy/employee');
	q.result.add(q.columns.employee_id);
	var Q0 = databaseManager.getFoundSet(q);
	var rec = null; index = 1;
	while (rec = Q0.getRecord(index++)){
		if (rec.association_uuid == session.associationId){
			if (m.workerListAssoc.indexOf(rec.employee_number) == -1){
				m.workerListAssoc.push(rec.employee_number);
			}
		}
	}
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var q1 = databaseManager.createSelect('db:/stsservoy/employee');
	q1.where.add(q1.columns.tenant_uuid.eq(session.tenant_uuid));
	q1.result.add(q1.columns.employee_number);
	q1.result.add(q1.columns.employee_username);
	var Q = databaseManager.getDataSetByQuery(q1,-1);
	rec = null;index = 1;
	for (index = 1;index <= Q.getMaxRowIndex();index++){
		Q.rowIndex = index;
		if (m.workerListAssoc.indexOf(Q.employee_number) == -1){
			if (m.workerListAssoc.indexOf(Q.employee_number) == -1){
				m.workerListAssoc.push(Q.employee_number);
			}
		}
		if (!m.employee3rdParty[Q.employee_number]){
			m.employee3rdParty[Q.employee_number] = Q.employee_username;//3rd party column here
		}
	}
	m.workerListAssoc = m.workerListAssoc.sort();
	session.workerListAssoc = m.workerListAssoc.sort();
	if (application.isInDeveloper()){application.output('workerLIstAssoc '+session.workerListAssoc);application.output('workerList: '+m.workerList)}
	application.output('workerList: '+m.workerList);
}
/**
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
 * @param {String} barcode
 *
 *
 * @properties={typeid:24,uuid:"9CBE0820-ED17-4CFB-B637-1FAE155625D8"}
 * @SuppressWarnings(wrongparameters)
 */
function checkBarcode(barcode) {
	//check for serial barcode
	null;
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.result.add(q.columns.id_serial_number_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	q.where.add(q.columns.id_serial_number.eq(barcode));
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() == 1){
		var rec = resultQ.getRecord(1);
		mob.barcodeId = rec.id_serial_number_id.toString();
		mobIdSerialId = rec.id_serial_number_id.toString(); // setup global relation for barcode uuid
		return rec.id_serial_number_id.toString();
	}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var s = databaseManager.createSelect('db:/stsservoy/idfiles');
	s.where.add(s.columns.bundle_bc.eq(barcode));
	var S = databaseManager.getFoundSet(s);
	if (S.getSize() > 0){
		rec = S.getRecord(1);
		mob.barcodeId = barcode;
		mobIdSerialId = rec.id_serial_number_id.toString();//11
		return barcode;
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
	//check routing to ensure that although the wrong plant, it is scannable in the selected plant
	// get route and look for selected station for this scan
	var serialAssocId = barcode_to_idfile.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.association_id;
	//var serialAssocId = barcode_to_idfile.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.association_id;
	if (serialAssocId.toString() != session.associationId.toString()){//"FAA9BDE5-6B66-4930-981C-5AF0004EE1A4" != "BF00BA53-8D07-4A70-B835-24D5BD5DAB91"
	// does route 'FAA9BDE5-6B66-4930-981C-5AF0004EE1A4, <status_code>' exist?
		var newStationId = m.stations[session.associationId+", "+mob.statusCode];
		if (typeof newStationId == undefined){return false}// returns "24949E1E-9467-4835-B292-E1BC6D10EC22"
		// check the route legs to ensure this is in the route, or error
		var routeId = mob.piecemark.e_route_code_id;
		var checkLegs = [];
		if (routeId != null) {
			checkLegs = l.routeLegs[routeId];
		}
		if (checkLegs == null){return false}
		var routedStation = (checkLegs.indexOf(newStationId) != -1); 
		if (!routedStation){//We have a temporary station change enforced by route
			if (application.isInDeveloper()){application.output('wrong association ' + serialAssocId+' not '+session.associationId)}
			//application.output(application.getUUID())
			return false;
		} else {
			session.stationId = newStationId;
		}
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
 * @SuppressWarnings(wrongparameters)
 */
function barcodeIsBundle(bundleBC){
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.bundle_bc);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.piecemark_id);
	q.where.add(q.columns.delete_flag.isNull)
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	q.where.add(q.columns.bundle_bc.eq(bundleBC))

	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	var size = resultQ.getSize();
	mob.bundleFS = resultQ;
	mob.bundlesJobs = [];
	if (size == 0){
		return false; 
	}
	var bundles = [];
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		var bundle = rec.bundle_bc;
		if (bundles.indexOf(bundle) != -1){continue}
		bundles.push(bundle);
		var jobId = rec.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.job_id.toString();
		mob.bundlesJobs[jobId] = bundle;
	}
	return true;
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
	rfCollectStationCompletes();
	// 1/29/2015 does it have a route and is that route complete?
	var routeComplete = true;
	var checkLegs = [];
	var routeId = mob.piecemark.e_route_code_id;
	if (routeId == null){return routeComplete} // always ready to ship without a route 1/30/2015
	
	// Enforce routing on shipment. For the route, is current preceeded by previousRoute by previousRoute
	// actual transactions: mob.transactionList[index]=(status_description_id...)
	// route transactions: checkLegs[index]=(status_description_id...)
	///var stationId = session.stationId;
	if (routeId != null) {
		checkLegs = l.routeLegs[routeId];
	}
	var stationsDone = mob.transactionList;
	if (checkLegs){
		for (var index = 0;index < checkLegs.length;index++){
			var routeLeg = checkLegs[index];
			//routeComplete = (stationsDone.indexOf(routeLeg) != -1);
			routeComplete = (session.stationsComplete[routeLeg] == 100);
			if (!routeComplete){break}
		}
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
	if (application.isInDeveloper()){application.output('this is an empty op.')}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"89367D1A-9BEC-4053-8EFB-EC113512237F"}
 */
function noOperationEvent(event){
	if (application.isInDeveloper()){application.output('this is an empty op.'+event)}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B5F3140A-92DF-4C0D-A4A0-985F31F6573E"}
 */
function onActionScreenToggle(event) {
	var window = application.getActiveWindow();
	if (!scopes.prefs.screenFull){
		scopes.prefs.screenFull = false;
		/** scopes.prefs.screenOrigX = 0;
		scopes.prefs.screenOrigY = 0;
		scopes.prefs.screenWidth = 0;
		scopes.prefs.screenHeight = 0; */
		scopes.prefs.screenHeight = window.getHeight();
		scopes.prefs.screenWidth = window.getWidth();
		scopes.prefs.screenOrigX = window.getX();
		scopes.prefs.screenOrigY = window.getY();
	}
	if (scopes.prefs.screenFull == false){
		/** scopes.prefs.screenHeight = window.getHeight();
		scopes.prefs.screenWidth = window.getWidth();
		scopes.prefs.screenOrigX = window.getX();
		scopes.prefs.screenOrigY = window.getY(); */
		window.setLocation(0, 0);
		window.setSize(application.getScreenWidth(),Math.floor(application.getScreenHeight()*0.95));//scopes.prefs.screenHeight);
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
 *
 * @properties={typeid:24,uuid:"AAA5AF42-178D-4359-960C-A5926092ADEC"}
 * @SuppressWarnings(wrongparameters)
 */
function rfCheckRouteOrder(){
	// okay on this screen
	// ok to overwrite
	///var repIdfile = mob.idfile;
	var checkLegs = [];
	var routeId = mob.piecemark.e_route_code_id+"";
	var stationId = session.stationId.toString();
	var allowMoreCodes = (l.routesAddLegs.indexOf(routeId) != -1);//list of routes that allow more codes
	var allowMultiScan = (l.stationsMultiScan.indexOf(stationId) != -1);//list of stations that allow multiscan
	/**if (m.stationsTimedEnds[stationId]){//if it is a timed station, then allow it to be multiscan too
		allowMultiScan = (allowMultiScan || (l.stationsMultiScan.indexOf(m.stationsTimedEnds[stationId]+"") != -1));
	}*/
	///var stationScanned = (mob.transactionList.indexOf(stationId) != -1);
	//var stationLastId = mob.idfile.status_description_id+"";
	if (mob.piecemark.e_route_code_id) {
		checkLegs = l.routeLegs[routeId];
	}
	// route legs are checked with status_description_id.UUID
	///var writeTransRecord = (!allowMultiScan && stationLastId+"" == stationId+"") ||	(routeId == null);

	var allowInRoute = true;
	if (checkLegs && checkLegs.length > 0){allowInRoute = (checkLegs.indexOf(session.stationId) != -1)}
	/**if (m.stationsTimedEnds[stationId]){//if it is a timed end station, then allow it in the route too
		allowInRoute = (checkLegs.indexOf(m.stationsTimedEnds[stationId]+"") != -1);//implicit route membership for timed status
	}*/
	if (!allowInRoute && !allowMoreCodes){
		var missing = "("+m.stations[session.stationId]+")"; // make missing global
		errorDialogMobile('rf_mobile_view.currentidin','431','currentidin',missing);// 431 This Routing Code Does Not Allow This Status.
		return false;
	}
	//var writeTransRecord = (allowMultiScan && stationScanned) || (!stationScanned) ||	(routeId == null);
	////var writeTransRecord = (allowMultiScan && stationScanned) || (!stationScanned) ||	(routeId == null);
	// ok in route
	// Enforce routing on transaction. For the route, is current preceeded by previousRoute by previousRoute
	// actual transactions: mob.transactionList[index]=(status_description_id...)
	// route transactions: checkLegs[index]=(status_description_id...)
	var routingOk = true;
	var routeSkip = (checkLegs && checkLegs.indexOf(session.stationId) == -1);
	missing = "";
	if (routeId && !routeSkip){
		//var index = (allowMoreCodes) ? checkLegs.indexOf(session.stationId) : checkLegs.length-1;
		/**
		 * from  list of stations scanned
		 * get index in established route of scanned station
		 * skip if route is not in legs and allowmorecodes
		 */
		var stationsDone = mob.transactionList;
		if (checkLegs){
			var targetIndex = checkLegs.indexOf(session.stationId);
			var index = 0;
	
			while (index < targetIndex){
				var routeLeg = checkLegs[index];
				routingOk = (routingOk && stationsDone.indexOf(routeLeg) != -1);
				if (stationsDone.indexOf(routeLeg) == -1){
					/** @type {String} */ var tempString = m.stations[routeLeg];
					missing = missing + tempString.split(",")[1];
				}
				index++;
			}
		}
	}
	//return writeTransRecord && routingOk;
	return {error: routingOk,missing: missing};
}
/**
 * Modify rfChangeWindow, getMenuList to show rfViews
 * @param {JSEvent} event
 * @param winName
 *
 * @properties={typeid:24,uuid:"27EE31BD-22A3-498C-BB9F-9FEA3FD08E43"}
 */
function rfChangeWindow(event,winName){
	// ticket #105 MC window switching under i18n uses strings, i18n strings, so a mapping must be done
	var currWin = application.getActiveWindow();
	if (!mobileWindows[winName]){
		getI18nWindowName(winName);
	}
	winName = mobileWindows[winName];
	globals.laborScreenActive = (session.program == i18n.getI18NMessage('sts.mobile.labor.inspections') ||
		session.program == i18n.getI18NMessage('sts.mobile.labor.transactions'));

	switch(winName)	{
	case mobileWindows[i18n.getI18NMessage('sts.mobile.labor.transactions')]:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.labor.transactions')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.labor.inspections')]:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.labor.inspections')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.inspections')]:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.inspections')];//'Inspections'
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.inspections.w.revs')]://"Inspections w/Rev's"
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.inspections.w.revs')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.transactions.w.revs')]://"Transactions w/Rev's":
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.transactions.w.revs')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.transactions')]://'Transactions':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.transactions')];//'Transactions';
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.receiving')]://'Receiving':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.receiving')];
		currWin.show('rf_mobile_view'); // check globals.rfViews, invisible fields
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.sample')]://'Sample':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.sample')];
		currWin.show('rf_mobile_view');
		break;
		
	case mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')]://'Build Bundles':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.saw')]://'Saw':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.saw')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.status')]://'Status':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.status')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.find.piece.marks')]://'Find Piece Marks':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.find.piece.marks')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.shipping')]://'Shipping':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.shipping')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.final.ship')]://'Final Ship':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.final.ship')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.ship.by.sequence')]://'Ship By Sequence':
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.ship.by.sequence')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')]://'Checklist Receive'://20190116
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.status')]://'Checklist Status'://20190116
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.status')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')]://20190324
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.move')]://20190324
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.move')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')]:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit.sweep')]:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit.sweep')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.tfs')]:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.tfs')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.asn.receiving')]:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.asn.receiving')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.status')]:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.status')];
		currWin.show('rf_mobile_view');
		break;
	case mobileWindows[i18n.getI18NMessage('sts.mobile.exit')]://'Exit': 
		//globals.rfExitMobileClient();
		showExecLogout();
		if (application.isInDeveloper()){application.output('exiting')}
		break;
	default:
		session.program = mobileWindows[i18n.getI18NMessage('sts.mobile.sample')];
		currWin.show('rf_mobile_view');
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
 * @param screen
 *
 * @properties={typeid:24,uuid:"A062386A-92A3-416F-B8E7-F8DCD639BAEE"}
 * @SuppressWarnings(wrongparameters)
 */
function rfFunctionKeys(screen){
	if (application.isInDeveloper()){application.output('screen rfFunctionKeys() '+screen)}
	globals.mobProg = screen;
	var enableFuctionKeys = true;
	if (screen == 'rf_mobile_view'){
		enableFuctionKeys = !globals.isAndroid;
		screen = session.program;
	}
	//enableFuctionKeys = false;
	// ticket #105 MC window switching under i18n uses strings, i18n strings, so a mapping must be done
	if (!mobileWindows[screen]){
		getI18nWindowName(screen);
	}
	var printEnabledScreen = !(!globals.m.i18nMobilePrintViews[session.program.replace('\'','')]);
	var printF6Robbed = false;
	var dex = 0;
	///var fKey = "";
	for (var index=0;index < 13;index++){
		if (index > 0 && index < 11 && enableFuctionKeys){
			plugins.window.createShortcut('F'+index,globals.noOperation);
		}
		functionKeyProcedure[index] = 'globals.noOperation';
	}
	if (enableFuctionKeys){
		plugins.window.createShortcut('F1','globals.showHelp');
		plugins.window.createShortcut('F10','globals.showExecLogout');
	}
	functionKeyProcedure[10] = 'globals.showExecLogout';
	functionKeyDescrip = [
		i18n.getI18NMessage('sts.fkey.info'),
		i18n.getI18NMessage('sts.fkey.f1.help'),
		'F2 - ','F3 - ','F4 - ','F5 - ','F6 - ','F7 - ','F8 - ','F9 - ',
		i18n.getI18NMessage('sts.fkey.f10'),
		'11','12'];
	dex = 11;
	functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.logout');
	functionKeyProcedure[dex] = 'globals.rfLogout';
	dex = 12;
	functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.return.os');
	functionKeyProcedure[dex] = 'globals.rfExitBrowser';
	//functionKeyProcedure[3] = '';
	//functionKeyProcedure[8] = '';
	//functionKeyProcedure[9] = '';
	if (application.isInDeveloper()){application.output('screen function keys '+screen)}
	if (application.isInDeveloper()){application.output('no F8:'+scopes.prefs.globalF8Off+' ship F8 Off:'+scopes.prefs.shipF8Off)}
	var noF8 = (scopes.prefs.globalF8Off == 1);
	var noF8Ship = (scopes.prefs.shipF8Off == 0);
	if (application.isInDeveloper()){application.output('no F8:'+noF8+' ship F8 Off:'+noF8Ship)}
	switch( screen.replace(/\'/g,"") )//i18n screen issue with embedded i18n quotes
	{
		case mobileWindows[i18n.getI18NMessage('sts.mobile.main')]://'Main':
			globals.mobForm = i18n.getI18NMessage('sts.mobile.main');
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.status')]:
		case mobileWindows[i18n.getI18NMessage('sts.mobile.find.piece.marks')]:
			globals.mobForm = i18n.getI18NMessage('sts.mobile.status');
			dex = 3;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f3.history.list');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF3';
			if (enableFuctionKeys){plugins.window.createShortcut('F3',functionKeyProcedure[dex]);}
			dex = 6;
			printF6Robbed = true;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f6.reprint.id.label');//'F6 - rePrint ID label;
			functionKeyProcedure[dex] = 'globals.rfF6ReprintIdLabel';
			if (enableFuctionKeys){plugins.window.createShortcut('F6',functionKeyProcedure[dex]);}
			break;
		//case i18n.getI18NMessage('')://'rf_transactions':
		case mobileWindows[i18n.getI18NMessage('sts.mobile.transactions')]://'Transactions':
		//case i18n.getI18NMessage('')://'Transactions2':
		//case i18n.getI18NMessage('')://"Transactions w/Rev's":
		case mobileWindows[i18n.getI18NMessage('sts.mobile.transactions.w.revs')]://"Transactions w/Rev's2":
		case mobileWindows[i18n.getI18NMessage('sts.mobile.inspections.w.revs')]://"Transactions w/Rev's2":
		case mobileWindows[i18n.getI18NMessage('sts.mobile.inspections')]://"Transactions w/Rev's2":
		case mobileWindows[i18n.getI18NMessage('sts.mobile.labor.inspections')]:
		case mobileWindows[i18n.getI18NMessage('sts.mobile.labor.transactions')]:
			if (laborScreenActive) {//20190712 as per PParks No F8 on Labor Percentage Screens
				noF8 = true;
			}
			globals.mobForm = "rf_transactions";
			dex = 2;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f2.switch.plants');//'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			if (enableFuctionKeys){plugins.window.createShortcut('F2',functionKeyProcedure[dex]);}
			dex = 3;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f3.history.list');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF3';
			if (enableFuctionKeys){plugins.window.createShortcut('F3',functionKeyProcedure[dex]);}
			if (!noF8){
				dex = 8;
				functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f8.status.reverse');//'F8 - Remove Status'
				functionKeyProcedure[dex] = 'globals.rfF8Reversal';
				if (enableFuctionKeys){plugins.window.createShortcut('F8',functionKeyProcedure[dex]);}
				//plugins.window.createShortcut('control F8',functionKeyProcedure[dex]);
			}
			dex = 9;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f9.inspection.doc');//'F9 - Inspection Doc'
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')]://'rf_bundles':
		//case i18n.getI18NMessage('')://'Build Bundles':
		//case i18n.getI18NMessage('')://'Build Bundles2':
			globals.mobForm = "rf_bundles";
			dex = 2;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f2.switch.plants');//'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			if (enableFuctionKeys){plugins.window.createShortcut('F2',functionKeyProcedure[dex]);}
			dex = 4;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f4.bundle.clear.pieces');//'F4 - Clear Bundle Pieces';
			functionKeyProcedure[dex] = 'globals.rfF4BundleClear';
			if (enableFuctionKeys){plugins.window.createShortcut('F4',functionKeyProcedure[dex]);}
			dex = 5;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f5.bundle.labels.print');//'F5 - Print Bndl Labels';
			functionKeyProcedure[dex] = 'globals.rfF5BundlePrint';
			if (enableFuctionKeys){plugins.window.createShortcut('F5',functionKeyProcedure[dex]);}
			dex = 6;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f6.bundle.print.list');//'F6 - Print Bundle List';
			functionKeyProcedure[dex] = 'globals.rfF6BundlePrintList';
			if (enableFuctionKeys){plugins.window.createShortcut('F6',functionKeyProcedure[dex]);}
			if (!noF8){
				dex = 8;
				functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f8.bundle.remove.from');//'F8 - Remove From Bundle';
				functionKeyProcedure[dex] = 'globals.rfF8BundleRemoveFrom';
				if (enableFuctionKeys){plugins.window.createShortcut('F8',functionKeyProcedure[dex]);}
			}
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.asn.receiving')]:
			globals.mobForm = "rf_mobile_view";
			dex = 2;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f2.switch.plants');//'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			if (enableFuctionKeys){plugins.window.createShortcut('F2',functionKeyProcedure[dex]);}			
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.shipping')]://'Shipping2':
		//case i18n.getI18NMessage('')://'Shipping':
			globals.mobForm = "rf_mobile_view";
			dex = 2;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f2.switch.plants');//'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			if (enableFuctionKeys){plugins.window.createShortcut('F2',functionKeyProcedure[dex]);}
			dex = 3;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f3.ship.ids.not.shipped');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF3IdsNotShipped';
			if (enableFuctionKeys){plugins.window.createShortcut('F3',functionKeyProcedure[dex]);}
			dex = 4;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f4.ship.piecemarks.not.shipped');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF4PcmksNotShipped';
			if (enableFuctionKeys){plugins.window.createShortcut('F4',functionKeyProcedure[dex]);}
			dex = 5;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f5.ship.load.stats');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF5LoadStats';
			if (enableFuctionKeys){plugins.window.createShortcut('F5',functionKeyProcedure[dex]);}
			dex = 6;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f6.ship.print.packing.list');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF6PrintPackingList';
			if (enableFuctionKeys){plugins.window.createShortcut('F6',functionKeyProcedure[dex]);}
			dex = 7;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f7.ship.trailer.info');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF7TrailerInfo';
			if (enableFuctionKeys){plugins.window.createShortcut('F7',functionKeyProcedure[dex]);}
			if (!noF8 && !noF8Ship){
				dex = 8;
				functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f8.ship.remove.from.load');//'F8 - Remove Status'
				functionKeyProcedure[dex] = 'globals.rfF8Reversal';
				if (enableFuctionKeys){plugins.window.createShortcut('F8',functionKeyProcedure[dex]);}
			}
			dex = 9;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f9.inspection.doc');//'F8 - Remove Status'
			functionKeyProcedure[dex] = 'globals.rfF9InspectionDoc';
			if (enableFuctionKeys){plugins.window.createShortcut('F9',functionKeyProcedure[dex]);}
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.move')]:
		case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.status')]:
			dex = 2;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f2.switch.plants');//'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			if (enableFuctionKeys){plugins.window.createShortcut('F2',functionKeyProcedure[dex]);}
			dex = 6;
			printF6Robbed = true;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f6.reprint.inventory.label');
			functionKeyProcedure[dex] = 'globals.rfF6ReprintInvLabel';
			if (enableFuctionKeys){plugins.window.createShortcut('F6',functionKeyProcedure[dex]);}
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')]:
			dex = 2;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f2.switch.plants');//'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			if (enableFuctionKeys){plugins.window.createShortcut('F2',functionKeyProcedure[dex]);}
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.final.ship')]://'Shipping2':
			dex = 2;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f2.switch.plants');//'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			if (enableFuctionKeys){plugins.window.createShortcut('F2',functionKeyProcedure[dex]);}
			dex = 5;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f5.ship.load.stats');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF5LoadStats';
			if (enableFuctionKeys){plugins.window.createShortcut('F5',functionKeyProcedure[dex]);}
			dex = 6;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f6.ship.print.packing.list');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF6PrintPackingList';
			if (enableFuctionKeys){plugins.window.createShortcut('F6',functionKeyProcedure[dex]);}
			dex = 7;
			functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f7.ship.trailer.info');//'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF7TrailerInfo';
			if (enableFuctionKeys){plugins.window.createShortcut('F7',functionKeyProcedure[dex]);}
			break;
		default:
			
	}
	if (printEnabledScreen && !printF6Robbed && globals.mobForm != "rf_bundles"){
		dex = 6;
		functionKeyDescrip[dex] = i18n.getI18NMessage('sts.fkey.f6.print.toggle');
		functionKeyProcedure[dex] = 'globals.rfF6TogglePrint';
		if (enableFuctionKeys){plugins.window.createShortcut('F6',functionKeyProcedure[dex]);}
	}
	//functionKeyProvider = -1;
	functionKeyProvider = "";
	var funcList = [];
	for (index = 0;index < functionKeyDescrip.length;index++){
		if (functionKeyDescrip[index].length != 5){
			funcList.push(functionKeyDescrip[index]);
		}
	}
	application.setValueListItems('vl_HelpMenu',funcList);
}
/**
 * @param status
 * @param fabShopName
 *
 * @properties={typeid:24,uuid:"74DC69EE-86E1-44F1-92C8-E5FC50700ABD"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetStatusProcessNumber(status,fabShopName){
	var fabShop = fabShopName+', '+status;
	if (aMobIdProcess.length == 0){
		///var fabShopId = aMobAssocs[fabShop];
		/** @type {QBSelect<db:/stsservoy/status_description>} */
		var q = databaseManager.createSelect('db:/stsservoy/status_description');
		q.result.add(q.columns.status_description_id);
		q.result.add(q.columns.status_code);
		q.result.add(q.columns.status_sequence);
		q.result.add(q.columns.association_id);
		q.where.add(
			q.and
				.add(q.columns.delete_flag.isNull)
				.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			);
		/** @type {JSFoundSet<db:/stsservoy/status_description>} */
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
 * @properties={typeid:24,uuid:"B0DDCB6E-CC33-49BF-957E-01B9BE0FB69B"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 */
function rfGetBarcodeIdfiles(){
	var isBundle = (mob.barcodeId.toString().length != 36 && mob.barcodeId.search('BND') == 0);
	mob.idfile = {};
	mob.piecemark = {};
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	if (isBundle){
		q.where.add(q.columns.bundle_bc.eq(mob.barcodeId.toString()));
	} else {
		q.where.add(q.columns.id_serial_number_id.eq(mob.barcodeId.toString()));
	}

	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);

	mob.idfilesFS = resultQ;
	scopes.globals.fsBarcodeIdfiles = resultQ;
	mob.idfiles = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		var rec = resultQ.getRecord(index);
		mob.idfiles.push(rec.idfile_id.toString());//changed for sql server
		index++;
	}
	null;
	if (application.isInDeveloper()){application.output('job id '+mob.job.Id)}
	return (resultQ.getSize() > 0);
}
/**
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
		/** @type {String} */ var tempString = allCodes[index];
		var codes = tempString.split(',');
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
 * @param sLocation
 *
 * @properties={typeid:24,uuid:"16DE7027-0DC8-431E-A069-957B93FC6904"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetLocationStats(sLocation){
	mob.locationValues.pieces = 0;
	mob.locationValues.weight = 0;
	mob.locationValues.piecemarks = 0;
	if (!sLocation || sLocation == "") {return}
	if (application.isInDeveloper()){application.output('skipping location statistics scopes.prefs.lAddLocationWtPcs '+scopes.prefs.lAddLocationWtPcs)}
	if (!(scopes.prefs.lAddLocationWtPcs*1)){
		mobLocationWeight = mob.locationValues.weight;
		mobLocationPieces = mob.locationValues.pieces;
		mobLocationPiecemarks = mob.locationValues.piecemarks;
		return;
	}//do not update statistics for location on large DBs
	//get all transactions idfiles with location
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.idfile_id);
	q.result.distinct = true;
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.location.eq(sLocation));

	//get last transaction idfiles for location
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var r = databaseManager.createSelect('db:/stsservoy/transactions');
	r.result.add(r.columns.trans_id);
	r.result.add(r.columns.idfile_id);
	r.result.add(r.columns.location);
	r.result.add(r.columns.transaction_date);
	r.sort.add(r.columns.transaction_date.desc)
	r.where.add(r.columns.delete_flag.isNull);
	r.where.add(r.columns.tenant_uuid.eq(session.tenant_uuid));
	r.where.add(r.columns.idfile_id.isin(q));
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var resultR = databaseManager.getFoundSet(r);

	var index = 1;
	var idfile = "";var idfileList = [];var piecemarkList = [];
	while (index <= resultR.getSize()){
		var rec = resultR.getRecord(index);
		if (idfile != rec.idfile_id){
			if (rec.location == sLocation){
				if (idfileList.indexOf(rec.idfile_id.toString()) == -1){idfileList.push(rec.idfile_id.toString())}
			}
			idfile = rec.idfile_id;
		}
		index++;
	}
	mob.locationValues.pieces = idfileList.length;
	//}
	// get piecemarks for location, above was only a count by idfiles with that transaction location
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var w = databaseManager.createSelect('db:/stsservoy/idfiles');
	w.result.add(w.columns.idfile_id);
	w.result.add(w.columns.piecemark_id);
	w.result.add(w.columns.summed_quantity);
	w.where.add(w.columns.delete_flag.isNull);
	w.where.add(w.columns.tenant_uuid.eq(session.tenant_uuid));
	w.where.add(w.columns.idfile_id.isin(idfileList));

	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultW = databaseManager.getFoundSet(w);
	index = 1;
	while(index <= resultW.getSize()){
		rec = resultW.getRecord(index);
		if (piecemarkList.indexOf(rec.piecemark_id.toString()) == -1){piecemarkList.push(rec.piecemark_id.toString())}
		index++;
	}

	// get piecemarks for idfileList
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var s = databaseManager.createSelect('db:/stsservoy/piecemarks');
	s.result.add(s.columns.piecemark_id);
	s.result.add(s.columns.item_weight);
	s.result.add(s.columns.item_weight_lbs);
	s.result.distinct = true;
	s.where.add(
	s.and
		.add(s.columns.delete_flag.isNull)
		.add(s.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(s.columns.piecemark_id.isin(piecemarkList))
	);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var resultS = databaseManager.getFoundSet(s);
	
	// grab weight for each idfile and add to total weight
	index = 1; var totWeight = 0;
	while(index <= resultW.getSize()){
		var rec2 = resultW.getRecord(index);
		resultS.loadRecords(databaseManager.convertToDataSet(rec2.piecemark_id));
		var weight = (mob.job.metric) ? resultS.item_weight : resultS.item_weight_lbs;//#97 gives 'Value list does not match key list in set condition'
		totWeight = totWeight + weight*rec.summed_quantity;
		index++;
	}
	mob.locationValues.piecemarks = resultS.getSize();
	mob.locationValues.weight = totWeight;
	mobLocationWeight = mob.locationValues.weight;
	mobLocationPieces = mob.locationValues.pieces;
	mobLoadPiecemarks = mob.locationValues.piecemarks;
}
/**
 * @param sLocation
 *
 * @properties={typeid:24,uuid:"DD1180DB-C8CF-4353-8671-2F198E80F078"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetLocationStats2(sLocation){
	mob.locationValues.pieces = 0;
	mob.locationValues.weight = 0;
	mob.locationValues.piecemarks = 0;
	//var piecemarkList = [];
	if (!sLocation || sLocation == "") {return}
	// get piecemarks for location, above was only a count by idfiles with that transaction location
	// ticket #95 changed from 7.1 to 7.4. key list condition set
	if (application.isInDeveloper()){application.output('skipping location statistics scopes.prefs.lAddLocationWtPcs '+scopes.prefs.lAddLocationWtPcs)}
	if (!(scopes.prefs.lAddLocationWtPcs*1)){
		mobLocationWeight = mob.locationValues.weight;
		mobLocationPieces = mob.locationValues.pieces;
		mobLocationPiecemarks = mob.locationValues.piecemarks;
		return
	}//do not update statistics for location on large DBs
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var w = databaseManager.createSelect('db:/stsservoy/idfiles');
	w.result.add(w.columns.idfile_id);
	w.result.add(w.columns.piecemark_id);
	w.result.distinct;
	w.where.add(w.columns.delete_flag.isNull);
	w.where.add(w.columns.tenant_uuid.eq(session.tenant_uuid));
	w.where.add(w.columns.id_location.eq(sLocation));
	w.groupBy.add(w.columns.piecemark_id);
	w.groupBy.add(w.columns.idfile_id);
	var resultW = databaseManager.getFoundSet(w);
	mob.locationValues.piecemarks = resultW.getSize();

	// get total piece count

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i = databaseManager.createSelect('db:/stsservoy/idfiles');
	i.result.add(i.columns.summed_quantity.sum,'total_pieces');
	i.result.distinct = true;
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var p = i.joins.add('db:/stsservoy/piecemarks');
	p.on.add(p.columns.piecemark_id.eq(i.columns.piecemark_id));
	i.where.add(i.columns.delete_flag.isNull);
	i.where.add(i.columns.tenant_uuid.eq(session.tenant_uuid));
	i.where.add(i.columns.id_location.eq(sLocation));
	var resultQuan = databaseManager.getDataSetByQuery(i,-1).getValue(1,1);
	mob.locationValues.pieces = resultQuan;
	//}

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i2 = databaseManager.createSelect('db:/stsservoy/idfiles');
	i2.result.clear();
	i2.result.distinct = true;
	i2.where.add(i2.columns.delete_flag.isNull);
	i2.where.add(i2.columns.tenant_uuid.eq(session.tenant_uuid));
	i2.where.add(i2.columns.id_location.eq(sLocation));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var p2 = i2.joins.add('db:/stsservoy/piecemarks');//,JSRelation.RIGHT_OUTER_JOIN);
	p2.on.add(p2.columns.piecemark_id.eq(i2.columns.piecemark_id));
	p2.root.result.distinct = true;
	if (mob.job.metric){
		i2.result.add(i2.columns.summed_quantity.multiply(p2.columns.item_weight).sum,'total_weight');
	} else {
		i2.result.add(i2.columns.summed_quantity.multiply(p2.columns.item_weight_lbs).sum,'total_weight');
	}
	var ds1 = databaseManager.getDataSetByQuery(i2,-1);
	if (ds1.getMaxRowIndex() > 0){
		ds1.rowIndex = 1;
		var resultTotWeight = Math.floor(ds1.total_weight);//#97 is here????
	} else {
		resultTotWeight = 0.0;
	}
	
	mob.locationValues.weight = resultTotWeight;

	mobLocationWeight = mob.locationValues.weight;
	mobLocationPieces = mob.locationValues.pieces;
	mobLocationPiecemarks = mob.locationValues.piecemarks;
}
/**
 * @properties={typeid:24,uuid:"4D8A0286-EDA2-44A3-A0B4-5A90967FEEA5"}
 */
function rfErrorVisible(formName){
	return forms[formName].elements.errorWindow.visible == true;
}
/**
 * @param message
 *
 * @properties={typeid:24,uuid:"5A682FFE-B5E7-44A9-9D8F-3D61E59BDF86"}
 * @AllowToRunInFind
 */
function rfErrorShow(message){
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		plugins.WebClientUtils.executeClientSideJS('playSoundX();');
	} else {
		application.playSound('media:///error.mp3');
	}

	var formName = getFormName();
	var dualEntry = (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT &&
		forms[formName].elements['genericin2'].visible);
	session.errorShow = true;
	if (!dualEntry){
		//mobDisableForm(true);//disable lock form? 4/28/2019
	}
	
	var tmpMsg = errorMessageMobile.replace(/(\<html\>|\<br\>)/gi,'');
	message = tmpMsg+' | '+message;
	errorMessageMobile = textWrap(message,25);
	//errorMessageMobile = errorMessageMobile.replace(/\|/g,'<br><br>')
	application.output('Current Error in Browser: '+errorMessageMobile);
	//if (globals.clientUserAgent.search(/(Android|Linux|iPhone|iPad|Mac)/i) != -1){//reset error window location for web client
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//reset error window location for web client
		plugins.scheduler.removeJob('hideError');//20200518 move to change timing on job start/stop for errors on IOS
		errorMessageMobile = '<html>'+errorMessageMobile;
		forms[formName].elements.errorWindow.setSize(230,200);
		//forms[formName].elements.errorWindow.horizontalAlignment = SM_ALIGNMENT.LEFT;
		var startDate = new Date();
		errorMessageTime = startDate;
		startDate = new Date(startDate.getTime()+2800);
		application.output('current jobs:'+ plugins.scheduler.getCurrentJobNames());
		var endDate = new Date(startDate.getTime()+28000);
		plugins.scheduler.addJob('hideError', startDate, globals.rfErrorHide, 30000, 0, endDate);
	}
	forms[formName].elements.errorWindow.enabled = true;
	forms[formName].elements.errorWindow.visible = true;
	forms[formName].elements.errorWindow.transparent = false;
	//forms[formName].elements.errorWindow.putClientProperty('text',message);
	if (!dualEntry){
		forms[formName].elements.errorWindow.requestFocus();
		forms[formName].controller.focusField('errorWindow',false);
		forms[formName].elements.genericin.requestFocus();
	}
	//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//reset error window location for web client
	//	application.sleep(3000);
	//}
	//application.output('Current Error in Browser: '+errorMessageMobile+' '+errorMessageMobile.length);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"376C6315-A576-4572-AD5F-9208DDF1E543"}
 */
function rfErrorHide(event) {
	plugins.scheduler.removeJob('showError');
	session.errorShow = false;
	var formName = session.errorForm;
	if (!formName){
		formName = application.getActiveWindow().controller.getName(); // 20150402 in case this is called outside current window
	}
	var elName = session.errorElement;
	if (errorMessageTime){
		var endSecs = new Date(errorMessageTime.getTime()+2800).getTime();
		var currSecs = new Date().getTime();
		while (currSecs < endSecs){
			application.sleep(100);
			currSecs = new Date().getTime();
		}
		errorMessageTime = null;
	}
	//if (application.isInDeveloper()){application.output(' REM Focus fields, stayfield:'+forms.rf_mobile_view.stayField+' focusGain:'+forms.rf_mobile_view.focusGain+' focusLost:'+forms.rf_mobile_view.focusLost+' fieldErroredName:'+forms.rf_mobile_view.fieldErroredName);}
	globals.mobDisableForm(false);
	forms[formName].elements.errorWindow.visible = false;
	forms[formName].elements.errorWindow.enabled = false;
	forms[formName].elements.errorWindow.transparent = false;
	errorMessageMobile = '';
	if (formName != 'rf_mobile_view'){
		if (forms[formName].elements[elName]){forms[formName].controller.focusField(elName,false);}
	} else {
		rfClearPreviousEntry(event);
		/** forms['rf_mobile_view'][globals.altInputDataProv] = '';
		forms['rf_mobile_view'].elements[globals.altInputField].requestFocus();

		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//focusFirst()
		} */
	}
	session.errorShow = false;
}
/**
 * @param event {Event}
 *
 * @properties={typeid:24,uuid:"6FC164A9-4B95-4767-9C50-525B8C81B063"}
 */
function onEmptyStayField(event){
	if (flagF8){return}
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
 * @param event
 *
 * @properties={typeid:24,uuid:"9F12D05A-CD94-451C-B0D6-C2BBC656849C"}
 */
function onSetCurrentFocus(event){
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
 * Modify rfChangeWindow, getMenuList, rfFunctionKeys to show rfViews
 * @properties={typeid:24,uuid:"C23097C7-0091-41B2-8224-026404DC4274"}
 * @AllowToRunInFind
 */
function getMenuList(){
	function pushWindow(i18nKey){
		var fabSuiteInstalled = (scopes.prefs.lFabsuiteInstalled == 1); 
		var pushWin = ((fabSuiteInstalled && globals.m.i18nMobileFabsuiteViews[i18nKey]) ||
			!globals.m.i18nMobileFabsuiteViews[i18nKey])
		if (pushWin){session.rfViewsMobile.push(i18n.getI18NMessage(i18nKey));}
	}
	if (session.appName.search(/(STS3)|(STSx)/) != -1){//was "STSx" 20180326 to enable showing mobile menus for mobile computer vs desktop
		var office = false;
	} else {
		office = isOfficeFunction(null);
	}
	var progList = new Array;
	session.rfViewsMobile = [];
	pushWindow('sts.mobile.inspections');
	pushWindow('sts.mobile.inspections.w.revs');//Inspections w/Rev's
	pushWindow('sts.mobile.shipping');//Shipping
	pushWindow('sts.mobile.transactions');//Transactions
	pushWindow('sts.mobile.transactions.w.revs');//Transactions w/Rev's
	pushWindow('sts.mobile.receiving');//Receiving
	if (application.isInDeveloper()){pushWindow('sts.mobile.sample')}//Sample
	pushWindow('sts.mobile.build.bundles');//Build Bundles
	pushWindow('sts.mobile.saw');//Saw
	pushWindow('sts.mobile.final.ship');//Final Ship
	pushWindow('sts.mobile.ship.by.sequence');//Ship By Sequence
	pushWindow('sts.mobile.checklist.receive');//Checklist Receive
	pushWindow('sts.mobile.checklist.status');//Checklist Status, see rfMobileViews, see rfChangeWindow() 
	pushWindow('sts.mobile.cut.cutlist.raw');//set windows elements and data sources
	pushWindow('sts.mobile.labor.inspections');//set windows elements and data sources
	pushWindow('sts.mobile.labor.transactions');//set windows elements and data sources
	pushWindow('sts.mobile.inventory.move');
	pushWindow('sts.mobile.inventory.audit');
	pushWindow('sts.mobile.inventory.audit.sweep');
	pushWindow('sts.mobile.inventory.status');
	pushWindow('sts.mobile.inventory.tfs');
	pushWindow('sts.mobile.inventory.asn.receiving');
	
	session.rfViewsOffice = [];
	session.rfViewsOffice.push(i18n.getI18NMessage('sts.mobile.status'));//Status
	session.rfViewsOffice.push(i18n.getI18NMessage('sts.mobile.find.piece.marks'));//Find Piece Marks
	if (!office){
		progList = progList.concat(session.rfViewsMobile);
		progList = progList.concat(session.rfViewsOffice);
	} else {
		progList = progList.concat(session.rfViewsOffice);		
	}
	if (session.appName == "STS X Embedded"){
		progList = new Array();
		progList.push(i18n.getI18NMessage('sts.mobile.inspections'));
		progList.push(i18n.getI18NMessage('sts.mobile.shipping'));//Shipping
		progList.push(i18n.getI18NMessage('sts.mobile.transactions'));//Transactions
	}
	progList.sort();
	session.rfViewsMobile.sort();
	session.rfViewsOffice.sort();
	var permittedProgs = [];
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var q = databaseManager.createSelect('db:/stsservoy/preferences2');
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.field_name.eq('userRemoteViews'));
	q.where.add(q.columns.user_uuid.eq(session.loginId.toString()));
	var Q = databaseManager.getFoundSet(q);
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var rec = null; var idx = 1;
	while (rec = Q.getRecord(idx++)){
		if (progList.indexOf(rec.field_value) != -1){
			permittedProgs.push(rec.field_value);
		}
	}
	if (application.isInDeveloper()){application.output('permitted progs '+permittedProgs+' current '+progList);}
	permittedProgs = permittedProgs.sort();
	permittedProgs.push(i18n.getI18NMessage('sts.mobile.exit'));//'Exit'
	application.setValueListItems('rfProgramList',permittedProgs);
	return progList;
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
 * @SuppressWarnings(wrongparameters)
 */
function rfGetMobIdfile(){
	///var idfile = mob.idfile;
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
	q.result.add(q.columns.ship_load_id);
	q.result.add(q.columns.current_load_id);
	q.result.add(q.columns.received_load_id);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
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
 *
 * @properties={typeid:24,uuid:"365474AC-59B1-4076-BBE8-3A9234FC455E"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetMobPiecemark(){
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var q = databaseManager.createSelect('db:/stsservoy/piecemarks');
	q.result.add(q.columns.item_length);
	q.result.add(q.columns.item_weight);
	q.result.add(q.columns.parent_piecemark);
	q.result.add(q.columns.piecemark);
	q.result.add(q.columns.piecemark_unit_of_measure);
	q.result.add(q.columns.item_length);
	q.result.add(q.columns.item_weight);
	q.result.add(q.columns.item_width);
	q.result.add(q.columns.item_length_in);
	q.result.add(q.columns.item_weight_lbs);
	q.result.add(q.columns.item_width_in);
	q.result.add(q.columns.cost_of_work_code);
	q.result.add(q.columns.cost_of_work_quantity);
	q.result.add(q.columns.description);
	q.result.add(q.columns.e_route_code_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.piecemark_id.eq(mob.idfile.piecemark_id.toString()));

	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
		mob.piecemark = resultQ.getRecord(1);
	}
}
/**
 * @param piecemarkId
 * @param sLocation
 *
 * @properties={typeid:24,uuid:"B8DB4ECB-760C-42B9-93C7-35926263EB67"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetPiecesScanned(piecemarkId, sLocation){
	// get total idfiles of piecemark
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.piecemark_id);
	q.result.add(q.columns.original_quantity);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.piecemark_id.eq(piecemarkId.toString()));
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	//var countPieces = 0;
	var maxIndex = 1; var idfileList = [];
	while (maxIndex <= resultQ.getSize()){
		/** @type {JSRecord} */
		var rec = resultQ.getRecord(maxIndex);
		if (idfileList.indexOf(rec.idfile_id.toString()) == -1){idfileList.push(rec.idfile_id.toString())}
		maxIndex++;
	}
	mob.idValues.total = resultQ.getSize();
	
	// over all idfiles, get transactions with this location and status.  that count will be total marked
	// A Status with and End For Status is not complete until the End for Status ticket #139
	var endStation = session.stationId;
	var timed = (m.stationsTimed[endStation] || m.stationsTimedEnds[endStation]);
	if (m.stationsTimed[endStation]){
		endStation = application.getUUID(m.stationsTimed[endStation]); // ticket #139
	}
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var r = databaseManager.createSelect('db:/stsservoy/transactions');
	//r.result.add(r.columns.trans_id);
	//r.result.add(r.columns.location);
	//r.result.add(r.columns.status_description_id);
	r.result.add(r.columns.idfile_id.count);
	r.where.add(r.columns.delete_flag.isNull);
	r.where.add(r.columns.idfile_id.isin(idfileList));
	if (application.isInDeveloper()){application.output('idfileList for transactions '+idfileList);}
	///r.where.add(r.columns.location.eq(sLocation));
	if (!endStation){endStation = ''}//toString() failure on null string
	r.where.add(r.columns.status_description_id.eq(endStation.toString()));
	if (timed){
		var maxPercent = '100';
		r.where.add(r.columns.labor_percentage.eq(maxPercent));
	}
	//r.result.distinct = true;
	r.groupBy.add(r.columns.idfile_id);
	var resultR = databaseManager.getDataSetByQuery(r,-1);
	//for (var iii = 1;iii <= resultR.getMaxRowIndex();iii++){
	//	resultR.rowIndex = iii;
	//	application.output(resultR.count)
	//}
	
	mob.idValues.complete = resultR.getMaxRowIndex();
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
 * @AllowToRunInFind
 */
function onDataChangeStatus(oldValue, newValue, event) {
	if (onDataChangeFixEntry(oldValue,newValue,event)){return true;}
	session.userEntry = newValue;
	var statusCheck = rfStatusCheck(newValue);
	if (application.isInDeveloper()){application.output('xxx Checking FS for Status '+newValue)}

	if (statusCheck){
		//var fsStatus = scopes.fs.checkFSStatus(newValue);
		//if (fsStatus != null){
		//	if (application.isInDeveloper()){application.output('XXX inside check One, fsStatus null '+newValue)}
		//	errorDialogMobile(event,1024,globals.altInputField,fsStatus);
		//	rfClearPreviousEntry(event);
		//	return true;
		//}
	}  else {
		session.validStatusFS.push(newValue)
	}
	//plugins.scheduler.removeJob('updateField')
	var formName = application.getActiveWindow().controller.getName();
	var elementName = 'statusin';// event.getElementName();
	//if (forms[formName].entryRequired(elementName)){
	//	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//}
	/**if (flagF8){
		//var formName = event.getFormName();
		forms[formName].statusCode = "";
		return true;
	}*/ // 20150402 for errors originating from input fields
	var statusField = 'status';
	if (formName == 'rf_mobile_view'){statusField = 'statusin'}
	statusCheck = rfStatusCheck(newValue);
	if (statusCheck == null){
		if (application.isInDeveloper()){application.output('XXX inside check Two, fsStatus null '+newValue)}
		if (application.isInDeveloper()){application.output('REM change Status event '+event.getElementName())}
		errorDialogMobile(event,401,'genericin',newValue);//401: This is not a valid status code
		//onFocusClear(event);
		rfClearPreviousEntry(event);
		return true;
	}
	var permitted = [];
	var forbidden = [];
	switch (formName){
		/** case i18n.getI18NMessage('sts.mobile.transactions'):// 'rf_transactions':
		case i18n.getI18NMessage('sts.mobile.transactions.w.revs')://'rf_transactions_rev':
			permitted = processCodes.transactions;
			break;
		case i18n.getI18NMessage('sts.mobile.build.bundles')://'rf_bundles':
			permitted = ['Fab Bundled'];
			break;
		case i18n.getI18NMessage('sts.mobile.inspections'): //'rf_inspections'
		case i18n.getI18NMessage('sts.mobile.inspections.w.revs')://'rf_inspections_rev':
			permitted = processCodes.all;
			forbidden = processCodes.shipping.concat(processCodes.receiving);
			break;
		case i18n.getI18NMessage('sts.mobile.shipping')://'rf_shipping':
			permitted = processCodes.shipping;
			break; */
		case 'rf_mobile_view':
			switch (session.program){
				case i18n.getI18NMessage('sts.mobile.receiving')://'Receiving': 
					permitted = processCodes.receiving;
					break;
				case i18n.getI18NMessage('sts.mobile.build.bundles')://'rf_bundles':'Bundles2':
					permitted = ['Fab Bundled'];
					break;
				case i18n.getI18NMessage('sts.mobile.inspections')://'Inspections2':
				case i18n.getI18NMessage('sts.mobile.labor.inspections')://'Labor Inspections':
				case i18n.getI18NMessage('sts.mobile.inspections.w.revs').replace("'","")://'Inspections w/Rev\'s2':
					permitted = processCodes.inspections.concat(processCodes.transactions);
					forbidden = processCodes.shipping.concat(processCodes.receiving);
					//forbidden same as transactions except inspections
					break;
				case i18n.getI18NMessage('sts.mobile.transactions')://'Transactions2':
				case i18n.getI18NMessage('sts.mobile.labor.transactions')://'Labor Transactions':
				case i18n.getI18NMessage('sts.mobile.transactions.w.revs').replace("'","")://'Transactions w/Rev\'s2':
					permitted = processCodes.transactions;
					//forbidden shipping, bundling, inspections
					break;
				case i18n.getI18NMessage('sts.mobile.shipping')://'Shipping2':
					permitted = processCodes.shipping;
					break;
				case i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')://FS Cut List
					permitted = ['Fab Cut'];//Process codes
					break;
				default:
					permitted = processCodes.all;
			}
			break;
		default:
			permitted = processCodes.all;
	}
	//if (session.program.search('Labor') == 0){//20190705 labor transactions can only use status with labor settings 
		// check globals.l.statuslabor
	//	if (l.laborStations.indexOf(newValue) == -1){
	//		errorDialogMobile(event,404,statusField,null);//404 This Is Not A Valid Status Code For This Screen / Operation.
	//		return true;			
	//	}
	//}
	mob.statusCode = newValue;//20200814 need to id begin and end stations if timed
	session.stationId = m.stations[session.associationId+', '+newValue];
	if (!globals.laborScreenActive && (!rfStatusBegin() && !rfStatusEnd())){//20200814 also DO NOT set timed status codes to 100
		//if (session.program.search('Labor') != 0){//20190708 set non-labor transactions to a mob.percent of 100
		mob.percent = 100;//timed stations didn't work frm 20190708 until 20200814
	}
	if (forbidden.indexOf(m.statusToProcess[newValue]) != -1){
		errorDialogMobile(event,404,statusField,null);//404 This Is Not A Valid Status Code For This Screen / Operation.
		//onFocusClear(event);
		return true;	
	}
	if (permitted.indexOf(m.statusToProcess[newValue]) == -1){
		errorDialogMobile(event,404,statusField,null);//404 This Is Not A Valid Status Code For This Screen / Operation.
		//onFocusClear(event);
		return true;	
	}
	mob.statusCode = newValue;
	forms['rf_mobile_view'].statusCode = newValue;
	session.stationId = m.stations[session.associationId+', '+mob.statusCode];
	var workerRqd = rfCheckRequiredWorkerStatus(newValue);
	if (formName == "rf_mobile_view"){
		forms['rf_mobile_view'].elements['workerin'].bgcolor = (workerRqd) ? 'yellow' : 'white';// 20180312 ticket 271
		if (workerRqd){
			if (forms['rf_mobile_view'].requiredFields.indexOf('workerin') == -1){// 20180312 ticket 271
				forms['rf_mobile_view'].requiredFields.unshift('workerin');
			}
		} else {
			forms['rf_mobile_view'].requiredFields[forms['rf_mobile_view'].requiredFields.indexOf('workerin')] = '';
			//forms['rf_mobile_view'].statusWorker = '';//ticket #278
		}
	}
	//forms['rf_mobile_view'].genericInput = '';
	session.errorShow = false;
	//forms['rf_mobile_view'].elements['genericinlabel'].requestFocus();
	//forms['rf_mobile_view'].elements['genericin'].requestFocus();
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
	//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
	}
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
	if (session.errorShow){return}//don't show next field if error button active
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
 * @param event
 *
 * @properties={typeid:24,uuid:"91F45752-C164-4AEB-ACDD-12D9E8AFC20A"}
 */
function onFocusClear(event) {
	if (session.errorShow){return}//don't show next field if error button active
	var formName = event.getFormName();
	if (formName == 'rf_mobile_view'){
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
		}
		forms['rf_mobile_view'].elements['genericin'].requestFocus();
		return;
	}
	var elName = event.getElementName();
	var entry = event.getSource().getDataProviderID();
	var variable = forms[formName];
	variable[entry] = '';
	forms[formName].controller.focusField(elName,true);
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"CEF23824-1370-4B5C-BD72-0064F9989EE5"}
 */
function onStartLoadPrefs(prefsType){
	//var prefs = scopes.prefs;
	//if (!scopes.prefs){scopes.prefs = {}}
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var fs = databaseManager.createSelect('db:/stsservoy/preferences2');
	fs.result.add(fs.columns.preferences2_id);
	fs.where.add(
		fs.or
		 .add(fs.columns.user_uuid.isNull)
		 .add(fs.columns.user_uuid.eq(session.loginId.toString()))
		);
	fs.where.add(fs.columns.form_name.isNull);
	if (prefsType && prefsType == "Printer"){
		fs.where.add(fs.columns.value_description.eq('Global Printer'));
	}
	if (prefsType && prefsType == "Prefs") {
		fs.where.add(fs.columns.value_description.eq('Global Preference'));
	} 
	var F = databaseManager.getFoundSet(fs);
	var recIndex = 1;
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var record = null;
	while (record = F.getRecord(recIndex++)){
		var scoper = (record.value_description == "Global Printer") ? scopes.printer : scopes.prefs;
		if (record.field_type == "boolean"){
			scoper[record.field_name] = record.field_value == "true" ? true : false;
		} else {
			try {
				scoper[record.field_name] = record.field_value;
			} catch (e) {}
		}
	}
	if (application.getSolutionName().search('mobile') == -1){
		scopes.prefs.setMissingPrefs();
	}

}
/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"19986C50-79D2-41A1-A028-B7C60EF3A541"}
 */
function saveScanTransaction(event){
	var status = rfSaveScanTransaction(event,mob.barcode,session.stationId,mob.locationArea);
	if (status){globals.loggerDev(this,'rf Save transaction fail.')}
	//currentID = '';
	rfGetLocationStats2(mob.locationArea);//Value list does not match key list in set condition
	//rfGetPiecesScanned(mob.piecemark.piecemark_id, mob.locationArea);
	mobPreviousLocation = mob.locationPrev;
	mobPreviousStatus = mob.statusPrev;
	mobLocationPieces = mob.locationValues.pieces;
	mobLocationWeight = mob.locationValues.weight;
	mobItemPieces = globals.mob.idValues.complete+" / "+scopes.globals.mob.idValues.total;
	//loadGetDatax();//
	rfGetSpecsLoad(session.loadId);
	null;
}
/**
 * @param disable
 *
 * @properties={typeid:24,uuid:"61F8B661-DE91-44C5-B7A1-D42865041D3D"}
 * @AllowToRunInFind
 */
function mobDisableForm(disable){
	var formName = application.getActiveWindow().controller.getName();
	var elem = '';
	if (disable){
		for (elem in forms[formName].elements){
			if (forms[formName].elements[elem].getElementType().search('label') != -1) {continue}			
			if (forms[formName].elements[elem].enabled == true){
				forms[formName].elements[elem].enabled = false;
				mobFrozenElements.push(elem);
			}
		}
	} else {
		while (elem = mobFrozenElements.pop()){
			if (!forms[formName].elements[elem]){continue}
			forms[formName].elements[elem].enabled = true;
		}
	}
}
/**
 * @param idfileId
 *
 * @properties={typeid:24,uuid:"CC9C12D0-7375-4622-96E0-91FDE9C1F935"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetTransactionList(idfileId){
	//mob.transaction = {};  ///////////////////////// STOO
	//var lastStation = mob.idfile.status_description_id;
	mob.transactionList = [];
	//if (lastStation == null){return}
	// description_id.UUID -> stationName.TXT+status.TXT -> stationOrg.UUID+status.TXT -> description_id.UUID
	//var lastStationTxt = m.stations[lastStation].split(",")[1];
	//mob.statusPrev = lastStationTxt.trim();
	//mob.locationPrev = mob.idfile.id_location;

	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.location);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.transaction_date);
	q.sort.add(q.columns.transaction_date.desc);
	q.where.add(q.or
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.delete_flag.eq(10))
		);//add F8 transactions with delete_flag of 10 which is an F8 action code
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.idfile_id.eq(mob.idfile.idfile_id.toString()));

	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var resultQ = databaseManager.getFoundSet(q);
	forms['trans_history'].foundset.loadRecords(resultQ);//ticket #139
	//application.output('DEBUG idfile transaction count '+resultQ.getSize());
	var rec = null;var index = 1;
	while (rec = resultQ.getRecord(index++)){
		mob.transactionList.push(rec.status_description_id.toString());
	}
}
/**
 * @properties={typeid:24,uuid:"CA0441A1-AF68-4691-9DF6-3A66E403A9B6"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetTransactions(){
	mob.transactions = null;
	// description_id.UUID -> stationName.TXT+status.TXT -> stationOrg.UUID+status.TXT -> description_id.UUID
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	/**q.result.add(q.columns.location);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.transaction_date);
	q.result.add(q.columns.trans_code);
	q.result.add(q.columns.transaction_start);
	q.result.add(q.columns.transaction_end); */
	q.sort.add(q.columns.transaction_date.desc);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.idfile_id.eq(mob.idfile.idfile_id.toString()));

	mob.transactions = databaseManager.getFoundSet(q);
}
/**
 * @param oldValue
 * @param workers
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F9C47BF5-F1BE-46D1-82FF-C80A0246CBEF"}
 * @AllowToRunInFind
 */
function onDataChangeWorker(oldValue, workers, event){
	if (onDataChangeFixEntry(oldValue,workers,event)){return true;}
	session.userEntry = workers;
	var formName = event.getFormName();
	var elementName = 'workerin';//event.getElementName();
	//if (forms[formName].entryRequired(elementName)){
	//	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//}
	var rev = (formName.search('_rev') != -1);
	if (workers == "" || workers == null){
		if (formName == 'rf_mobile_view'){
			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			//	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
			}
			forms['rf_mobile_view'].elements['genericin'].requestFocus();
		} else {
			if (rev){
				forms[formName].controller.focusField('current',true);
			} else {
				forms[formName].controller.focusField('revision',true);			
			}
		}
		return true;
	}
	session.userEntry = workers;
	var message = "";
	/** @type {Array} */
	var workersArray = workers.split('.');

	var missedWorkers = false;
	for (var index = 0;index < workersArray.length;index++){
		if (session.workerListAssoc.indexOf(workersArray[index]) == -1){
			scopes.globals.getWorkers();
		}
	}
	var missingEmpNum = [];
	var otherAssocEmpNum = [];
	var existEmpNum = [];
	for (index = 0;index < workersArray.length;index++){
		if (session.workerListAssoc.indexOf(workersArray[index]) == -1){
			if (session.workerList.indexOf(workersArray[index]) != -1){
				otherAssocEmpNum.push(workersArray[index]);
			} else {
				missingEmpNum.push(workersArray[index]+'*');
			}
			formName = event.getFormName();
			forms[formName].resetWorkerCode();
		}
		existEmpNum.push(workersArray[index]);//existing worker list, valid
	}
	var missList = otherAssocEmpNum.toString()+i18n.getI18NMessage('sts.txt.missing')+missingEmpNum.toString();
	if (otherAssocEmpNum.length != 0){
		errorDialogMobile(event,1227,'genericin',missList);//Worker in another association
		return true;
	} else if (missingEmpNum.length != 0){
		errorDialogMobile(event,150,'genericin',missList);//Employee number does not exist
		return true
	}
	globals.logger(false,message);
	//if (forms.rf_mobile_view.statusWorker != '' && forms.rf_mobile_view.statusWorker.search(workers) == -1 && workers.search('\\.') == -1){
	//	forms.rf_mobile_view.statusWorker = forms.rf_mobile_view.statusWorker+'.'+workers;
	//} else {
	forms.rf_mobile_view.statusWorker = workers;//restore single entry for workers ticket #277
	//}
	//forms.rf_transactions.controller.focusField('current',true);
	if (formName != 'rf_mobile_view'){
		if (rev){
			globals.rfEmptyNextField(event,'revision');
		} else {
			globals.rfEmptyNextField(event,'currentidin');
		}
	}
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
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
 * @SuppressWarnings(wrongparameters)
 */
function xxxunusedrfRouteOrder(){
	/**
	aStatusCodes = application.getValueListArray('stsvl_status_codes');
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	aRouteCodes = [];
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
	
	/ ** @type {QBSelect<db:/stsservoy/route_detail>} * /
	var q = databaseManager.createSelect('db:/stsservoy/route_detail');
	q.result.add(q.columns.e_route_code_id);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.route_order);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.idfile_id.isin(globals.mob.idfiles))
		.add(q.columns.status.eq(sStatus))
	);
	var resultQ = databaseManager.getFoundSet(q);
	
	/ **@type {JSFoundSet<db:/stsservoy/route_detail>} * /
	var fs = sts_route_status_codes;
	if (fs != null) {
		for(var index=1;index<=fs.getSize();index++){
			var record = fs.getRecord(index);
			var code = record.status_code;
			aRouteCodes.push(code);
			///aStatusCodes = removeElementFromArray(aStatusCodes,code);
		}
	}
*/
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
 * @param {JSEvent} event
 * 
 * Sets mob variable if timed transaction and update required.  Uses representative transaction record 
 * and should be duplicated across all transactions for each idfile on the piecemark barcode.
 * @properties={typeid:24,uuid:"BC626FEA-5799-4339-B3A7-959C87EEA9A7"}
 */
function rfTimed(event){
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
		/** @type {JSFoundset} */
		var transacts = mob.transactions;
		/** @type {JSFoundSet<db:/stsservoy/transactions>} */
		var rec = null; var index = 1;var statusEnded = false;
		while (rec = transacts.getRecord(index++)){
			if (rec.trans_status == mob.timedBegStat && statusEnded){
				break;
			}
			if (rec.trans_status == mob.timedBegStat && !statusEnded){ // begin with null end
				globals.logger(true,i18n.getI18NMessage('sts.txt.timed.cycle.start')+mob.timedBegStat);
				if (rec.transaction_end == null){
					globals.logger(true,i18n.getI18NMessage('sts.txt.timed.cycle.start.not.ended',new Array(mob.timedBegStat)));
					mob.timedError = "1133"; // status not yet ended
					return true;
				}
			}
			if (rec.trans_status == mob.timedEndStat){
				if (rec.transaction_end){statusEnded = true;}
				if (rec.quantity == 100){
					mob.timedError = "1130"; // this is in saying that the status is already 100% complete, so no more this status
					return true;
				}
			}
			if (rec.trans_status == mob.timedEndStat){
				if (rec.labor_percentage >= 100){
					mob.timedError = "414"; // cannot start timed transaction once labor is at 100%, was 1122
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
		var endDate = new Date(); // for consistency across all idfiles for the piecemark 20150403
		//x cannot end once ended
		//x cannot end if not started
		mob.timedTotalMin = 0;
		transacts = mob.transactions;
		index = 1;
		while (rec = transacts.getRecord(index++)){
			if (rec.trans_status != mob.timedEndStat){continue}
			if (rec.labor_percentage == 100.0){break}
			if (application.isInDeveloper()){application.output('timed rec adding '+rec);}
			mob.timedTotalMin = mob.timedTotalMin*1+rec.transaction_duration*1;
			mob.edit_date = mob.date;
			if (!mob.completeAsk){mob.percent = 100;mob.completeStatus = 1;} // ticket #139 there is no repeat operation for timed operations
			if (application.isInDeveloper()){application.output('mob total min '+mob.timedTotalMin);}
		}
		index = 1;
		while (rec = transacts.getRecord(index++)){
			if (application.isInDeveloper()){application.output('xxx transaction '+rec);} // look for all unfinished starts, not just ascending first
			//if (rec.labor_quantity == 1 && rec.trans_status == mob.timedEndStat){continue}
			if (rec.trans_status == mob.timedBegStat){
				if (rec.transaction_end == null){// && mob.completeAsk){ // ok to end transaction
					//mob.edit_date = mob.date;
					mob.timedBegin = rec.transaction_start;
					mob.timedEnd = endDate;
					mob.timedDuration = getMinutesDuration(mob.timedBegin,mob.timedEnd);
					mob.timedTotalMin = mob.timedTotalMin*1 + mob.timedDuration*1;
					mob.timedTargetRec = rec;
					mob.timedError = "";
					mob.percent = 0;
					mob.timedCloseOut = 0;
					mob.timedPrompt = (l.promptComplete.indexOf(mob.statusCode) != -1);
					if (l.promptComplete.indexOf(mob.statusCode) != -1){//ticket #103 timed ops
						var message = i18n.getI18NMessage('sts.txt.total.cycle.minutes')+
											Math.ceil((mob.timedTotalMin+0.005)*100)/100+
											'\n'+i18n.getI18NMessage('sts.txt.this.cycle.time')+
											Math.ceil((mob.timedDuration*1+0.005)*100)/100+
											'\n'+i18n.getI18NMessage('sts.txt.complete')+'?';
						if (mob.completeAsk){
							globals.DIALOGS.setDialogWidth(200);
							globals.DIALOGS.setDialogHeight(200);
							var response = globals.DIALOGS.showQuestionDialog(
								i18n.getI18NMessage('sts.txt.end.of.timed.cycle'),
								message,
								i18n.getI18NMessage('sts.btn.no'),
								i18n.getI18NMessage('sts.btn.yes'));
							//	'End of Timed Cycle', message, 'NO', 'yes');
							if (response == i18n.getI18NMessage('sts.btn.yes')){
								//mob.closeoutTimed = 1;
								mob.percent = 100;//labor
								mob.timedCloseOut = 1;//process complete
								mob.completeStatus = 1;
							}
						}
					} else {
						mob.percent = 100;//labor ticket #139
						mob.completeStatus = 1;//process complete
						mob.edit_date = mob.date;
					}
						
					//if (event.getElementName() != 'genericin'){
					//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
					//}
					if (application.isInDeveloper()){application.output('message '+message+' response '+response);}
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
 * 	 * activity Ship SH, Receive RC, Verify VR, InterimShip IS, Move MO, removed DE
 * @properties={typeid:24,uuid:"07268947-73C4-4518-A3B5-D6727D5E7548"}
 */
function rfActivity(){
	var formName = application.getActiveWindow().controller.getName();
	var stsinstalled = scopes.prefs.stsInstalled == 'Fabricator';
	var action = 'MO';
	switch (session.program) {
		case mobileWindows[i18n.getI18NMessage('sts.mobile.load.verify')]:
			action = "VR";
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.transactions.w.revs')]://"Transactions w/Rev's":
		case mobileWindows[i18n.getI18NMessage('sts.mobile.transactions')]://'Transactions':
		case mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')]://'Build Bundles':
		case mobileWindows[i18n.getI18NMessage('sts.mobile.sample')]://'Sample':
		case mobileWindows[i18n.getI18NMessage('sts.mobile.saw')]://'Saw':
		case mobileWindows[i18n.getI18NMessage('sts.mobile.status')]://'Status':
		case mobileWindows[i18n.getI18NMessage('sts.mobile.find.piece.marks')]://'Find Piece Marks':
		case mobileWindows[i18n.getI18NMessage('sts.mobile.inspections')]:
		case mobileWindows[i18n.getI18NMessage('sts.mobile.inspections.w.revs')]://"Inspections w/Rev's"
			action = "MO";
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.receiving')]://'Receiving':
			action = "RC";
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.shipping')]://'Shipping':
			if (session.interim){
				action = "IS";
			} else {
				action = "SH";
			}
			break;
		case mobileWindows[i18n.getI18NMessage('sts.mobile.final.ship')]://'Final Ship':
		case mobileWindows[i18n.getI18NMessage('sts.mobile.ship.by.sequence')]://'Ship By Sequence':
			action = "SH";
			break;
		default:
			action =  'MO';
	}
	return action;
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
	var action = rfActivity(); // returns activity related to formName
	var installedAt = scopes.prefs.stsInstalled;
	if (!installedAt){
		installedAt = 'FABRICATOR'; // JOEJOEJOE 20150217
	}
	installedAt = installedAt.toUpperCase();
	switch (installedAt){
		case 'PAINTER': 	var location = 'PAI'; break;
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
 * @param singleIdfileId
 *
 * @properties={typeid:24,uuid:"C05D08B2-3825-4528-8EDB-BF6B309F0D62"}
 * @SuppressWarnings(wrongparameters)
 */
function rfLatestTransaction(singleIdfileId){
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.trans_code);
	q.result.add(q.columns.transaction_start);//added 20150402
	q.result.add(q.columns.transaction_end);
	q.result.add(q.columns.transaction_duration);
	q.result.add(q.columns.employee_id);
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.trans_status);
	q.sort.add(q.columns.transaction_start.desc);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.idfile_id.eq(singleIdfileId.toString()));
	var resultQ = databaseManager.getFoundSet(q);
	return resultQ;
}
/**
 * @param transactionDate
 *
 * @properties={typeid:24,uuid:"FB97A401-EB5A-4D6B-A456-7EC3D4AD7BBF"}
 * @SuppressWarnings(wrongparameters)
 */
function rfUpdateableTransactions(transactionDate){
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.trans_code);
	q.result.add(q.columns.transaction_start);//added 20150402
	q.result.add(q.columns.transaction_end);
	q.result.add(q.columns.transaction_duration);
	q.result.add(q.columns.employee_id);
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.trans_status);
	q.sort.add(q.columns.transaction_start.desc);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.transaction_date.eq(transactionDate));
	var resultQ = databaseManager.getFoundSet(q);
	return resultQ;
}
/**
 * @param idfileArray
 *
 * @properties={typeid:24,uuid:"06BA1BBE-0574-4EF5-B238-1F0EB1972513"}
 * @SuppressWarnings(wrongparameters)
 */
function rfUpdateableIdfiles(idfileArray){
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.id_location);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.idfile_id.isin(idfileArray))
		);
	var resultQ = databaseManager.getFoundSet(q);
	return resultQ;
}
/**
 * @param status
 *
 * @properties={typeid:24,uuid:"C1310DF0-DB99-4448-8D56-BB9A316A4CB4"}
 * @SuppressWarnings(wrongparameters)
 */
function rfLatestTransactionSet(status){
	/**
	 * is this a timed transaction
	 * is this an end timed transaction
	 * is this a beginning timed transaction
	 * 
	 */
	var singleIdfileId = mob.idfile.idfile_id;
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.trans_code);
	q.result.add(q.columns.transaction_start);//added 20150402
	q.result.add(q.columns.transaction_end);
	q.result.add(q.columns.transaction_duration);
	q.result.add(q.columns.employee_id);
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.trans_status);
	q.sort.add(q.columns.transaction_start.desc);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.idfile_id.eq(singleIdfileId.toString()))
			.add(q.columns.trans_status.eq(status))
			//.add(q.columns.transaction_start.eq(mob.timedTargetRec.transaction_start))
	);
	var resultQ = databaseManager.getFoundSet(q);
	return resultQ;
}
/**
 * @param idfileIdListOrNull
 *
 * @properties={typeid:24,uuid:"EA2F24F2-9860-46F4-A83B-3935FD7668A8"}
 * @SuppressWarnings(wrongparameters)
 */
function rfLatestTransactions(idfileIdListOrNull){
	var idfileList = (typeof idfileIdListOrNull === 'undefined') ? mob.idfiles : idfileIdListOrNull;
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var transactions = rfLatestTransaction(mobRepIdfileId);
	if (transactions.getSize() == 0) {return transactions}
	var rec = transactions.getRecord(1);
	var start = rec.transaction_start;
	var stat = rec.trans_status;
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.trans_code);
	q.result.add(q.columns.transaction_end);
	q.result.add(q.columns.transaction_duration);
	q.result.add(q.columns.employee_id);
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.trans_status);
	q.sort.add(q.columns.transaction_start.desc);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.idfile_id.isin(idfileList))
			.add(q.columns.trans_status.eq(stat))
			.add(q.columns.transaction_start.eq(start))
			//.add(q.columns.trans_status.eq(mob.timedBegStat))
			//.add(q.columns.transaction_start.eq(mob.timedTargetRec.transaction_start))
	);
	var resultQ = databaseManager.getFoundSet(q);
	return resultQ;
}
/**
 * @param idfileId
 *
 * @properties={typeid:24,uuid:"F0ADEEBA-656E-4157-A17F-DE2DADFE0D6F"}
 * @SuppressWarnings(wrongparameters)
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
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.idfile_id.eq(idfileId.toString()));
	q.where.add(q.columns.trans_status.eq(mob.timedBegStat));
	q.where.add(q.columns.transaction_start.eq(mob.timedTargetRec.transaction_start));
	q.sort.add(q.columns.transaction_start.desc);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() != 1){
		globals.logger(true,i18n.getI18NMessage('sts.txt.transactions.failed',new Array(resultQ.getSize(),idfileId)));
		return null;
	}
	return resultQ.getRecord(1);
}
/**
 * save transactions if in route to idfile and transactions
 * save allowed others transactions only to transactions
 * @properties={typeid:24,uuid:"D48C150B-3D61-4633-9505-DE38F1F6991B"}
 * @SuppressWarnings(wrongparameters)
 */
function rfSaveScanTransaction(event,routeOK, statusId, sLocation){
	if (statusId == ""){return false}
	// get route and if station is in route, then save else false
	// status out of order, then false
	// if okay for other stations, then true

	var transDate = new Date(); 
	var isManHours = (scopes.prefs.showManHours == 1);
	globals.logger(true,i18n.getI18NMessage('sts.txt.transactions.save.scan'));
	//worker_id,worker2_id,worker3_id,worker4_id,worker5_id, tenant_uuid, employee_id,fabshop_id (guids)
	//location, status, code, edit_date
	//transaction_date,transaction_duration,transaction_start,transaction_end
	//quantity?
	//skip if status already recorded
	var date = new Date();
	var currentWorkers = [];
	if (!mob.workers){mob.workers = ''}
	var workers = mob.workers.split(".");
	for (var index = 0; index < workers.length; index++) {
		currentWorkers.push(m.workerList[workers[index]]);
	}
	if (application.isInDeveloper()){application.output('Updating ' + mob.idfiles.length + ' idfiles');}
	// status code already captured for this piece?
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var r = databaseManager.createSelect('db:/stsservoy/transactions');
	r.result.add(r.columns.trans_id);
	r.where.add(r.columns.delete_flag.isNull);
	r.where.add(r.columns.tenant_uuid.eq(session.tenant_uuid));
	r.where.add(r.columns.idfile_id.isin(mob.idfiles));
	r.where.add(r.columns.status_description_id.eq(session.stationId.toString()));
	r.sort.add(r.columns.transaction_start.desc);

	var resultQ = databaseManager.getFoundSet(r);
	var resultSize = resultQ.getSize();
	var isInterimLoad = false;
	if (mob.idfile.current_load_id){//determine if already on an interim load
		var loadRec = getLoadRecord(event,mob.idfile.current_load_id);
		isInterimLoad = (loadRec.interim_load == 1);
	}

	if (resultSize != 0 && !rfScanAgainOk() && !rfProcessComplete(resultQ) && !isInterimLoad) {//addresses ticket #103
		errorDialogMobile(event,'403','current',m.stations[session.stationId]);
		//if (application.isInDeveloper()){application.output('Status code has already been captured.'+session.stationId);}
		return false;
	}
	var isTimedEnd = false; var isTimed = false;
	// Check 3rd parties here
//	var commitType = 'Save';//vs 'Delete'
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var qq = databaseManager.createSelect('db:/stsservoy/status_description');
	qq.where.add(qq.columns.status_code.eq(mob.statusCode));
	qq.where.add(qq.columns.tenant_uuid.eq(session.tenant_uuid));
	var QQ = databaseManager.getFoundSet(qq);
	/** @type {JSFoundSet<db:/stsservoy/status_description>} */
	var qqRec = QQ.getRecord(1);
	var statusShipType = qqRec.status_type;
	var pushStation = false;
	if (processCodes.shipping.indexOf(statusShipType) != -1){
		pushStation = (qqRec.push_a_station == 1);
	}
	isTimed = (!(!m.stationsTimed[session.stationId]) || !(!m.stationsTimedEnds[session.stationId]));
	var isLabor = (l.laborStations.indexOf(mob.statusCode) != -1);

	application.output('RM FS Action Save');//push station first and then set shipped 2019-10-10 08.29 Shipping Definitive Servoy Meeting.mp4
	//if (mob.completeStatus == 1 && mob.laborCompleted && pushStation &&
	if (((!isTimed && !isLabor) || mob.timedCloseOut*1 == 1 || (mob.laborCompleted && isLabor)) && pushStation &&
			!rfSaveThirdParties('Save')){//handles only pushing 3rd party stations
		return false;
	}
	var commitAction = 'Save';//handles updating a regular station OR Load/Ship actions
	if (session.program == i18n.getI18NMessage('sts.mobile.final.ship')){commitAction = "Ship"}
	if (session.program == i18n.getI18NMessage('sts.mobile.shipping')){commitAction = 'Load'}
	application.output('FS Action '+commitAction);
	//if (mob.completeStatus == 1 && //missing untimed events
	if (((!isTimed && !isLabor) || mob.completeStatus == 1 || (mob.laborCompleted && isLabor)) &&
			!rfSaveThirdParties(commitAction)){
		//var unCommit = (commitAction == 'Ship') ? 'Unship' : 'Unload';
		//rfSaveThirdParties('unCommit');
		return false
	}
	databaseManager.startTransaction();
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var newRec = null;var totalIdfileCnt = mob.idfiles.length;
	for (index = 0; index < mob.idfiles.length; index++) {//reconsider batch backup here
		if (rfTransIsTimed()){
			isTimed = true;
			newRec = rfSetIdfileTimedStatus(mob.idfiles[index]);
			if (newRec == null){
				if (application.isInDeveloper()){application.output('rfIsTimed rec is null');}
			} else {
				if (application.isInDeveloper()){application.output('rfIsTimed rec is found');}
			}
		} 
		var timedElementEnd = m.stations[m.stations[mob.station+', '+mob.statusCode]];
		mob.begTimedStation = '';
		if (timedElementEnd){mob.begTimedStation = m.stationsTimedEnds[timedElementEnd]}
		if (newRec != null){//only update timed transaction records and only if complete
			if (application.isInDeveloper()){application.output('status trans rec found. updating');}
			// dialog for completion of timed event
			if (timedElementEnd && newRec.status_description_id.toString() != mob.begTimedStation.toString()){
				newRec.transaction_end = mob.timedEnd;
			}
			if (!timedElementEnd){
				newRec.transaction_end = null;
			} else {
				newRec.transaction_end = mob.timedEnd;
			}
		} else {
			mob.timedEnd = null;
		}
		if (routeOK){
			if (application.isInDeveloper()){application.output('newRec created for status '+mob.statusCode);}
			var newRecNum = resultQ.newRecord();
			if (newRecNum == -1){
				if (application.isInDeveloper()){application.output('Creating new Record for transactions failed.');}
			}
			/** @type {JSFoundSet<db:/stsservoy/transactions>} */
			var newRecB = resultQ.getRecord(newRecNum);
			newRecB.edit_date = transDate;
			newRecB.status_description_id = session.stationId;
			newRecB.employee_id = session.employeeId; //globals.mobLoggedEmployeeId;//UUID
			newRecB.idfile_id = mob.idfiles[index];
			newRecB.location = mob.locationArea;
			newRecB.transaction_date = transDate;//new Date();//date;//mob.timedBegin;
			newRecB.transaction_start = date;//mob.timedBegin;
			newRecB.tenant_uuid = session.tenant_uuid;
			newRecB.job_uuid = mob.job.Id;//'';//20190108 add job UUID to transactions
			newRecB.trans_status = mob.statusCode;
			newRecB.trans_code = rfTransCode();
			newRecB.revision_level = mob.currentRevision;
			if (processCodes.shipping.indexOf(statusShipType) != -1){
				if (session.loadId != null && session.loadId != ''){
					newRecB.load_id = session.loadId; //UPDATE to only update on SHIP
				}
			}
			if (application.isInDeveloper()){application.output(newRecB.trans_id+' X1 mob.timed B:'+mob.timedBegin+' E:'+mob.timedEnd)}
			if (!mob.timedBegin){newRecB.quantity = 1;}
			if (mob.timedEnd){
				if (application.isInDeveloper()){application.output(mob.percent+' X2 mob.timed B:'+mob.timedBegin+' E:'+mob.timedEnd)}
				isTimedEnd = true;
				newRecB.transaction_end = mob.timedEnd;
				newRecB.transaction_duration = mob.timedDuration;//12 get timedDuration * currentWorkers.length / mob.idfiles.length
			}
			if (mob.percent == 0 && l.laborStations.indexOf(mob.statusCode) != -1){mob.percent = 100}
			if (mob.timedPrompt && mob.timedCloseOut*1 == 0){mob.percent = 0}
			if (mob.percent > 0){newRecB.labor_percentage = mob.percent}//mob.percent moved outside to enable 100 percent on all status code entries 
			if (mob.timedCloseOut*1 == 1){//if station complete OR not a station complete OR save as complete, save labor
				newRecB.quantity = (!mob.laborCompleted) ? 0 : totalIdfileCnt;// || mob.percent != 100
				newRecB.labor_quantity = totalIdfileCnt;
			}
			for (var index2 = 0; index2 < currentWorkers.length; index2++) {
				switch (index2) {
				case 0:
					newRecB.worker_id = currentWorkers[index2];
					break;
				case 1:
					newRecB.worker2_id = currentWorkers[index2];
					break;
				case 2:
					newRecB.worker3_id = currentWorkers[index2];
					break;
				case 3:
					newRecB.worker4_id = currentWorkers[index2];
					break;
				case 4:
					newRecB.worker5_id = currentWorkers[index2];
					break;
				default:
				}
			}
		}
	}
	databaseManager.saveData(resultQ);
	if (mob.timedEnd){
		mob.timedBegin = null;
		mob.timedEnd = null;
		mob.timedTotalMin = 0;
		if (mob.completeStatus == 1){newRecB.quantity = 1;mob.completeStatus = 0}//Set up as per ticket #103
	}
	//var dbStatus = databaseManager.commitTransaction();
	if (routeOK){
		var updateIdfileStatus = rfCheckStatusIdfileMax();
		if (isTimed && !isTimedEnd){updateIdfileStatus = false}//ticket#159
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var q = databaseManager.createSelect('db:/stsservoy/idfiles');
		q.result.add(q.columns.idfile_id);
		q.where.add(q.columns.delete_flag.isNull);
		q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
		q.where.add(q.columns.idfile_id.isin(mob.idfiles));

		resultQ = databaseManager.getFoundSet(q);
		if (resultQ.getSize() > 0){
			var batchQ = databaseManager.getFoundSetUpdater(resultQ);
			if (processCodes.shipping.indexOf(statusShipType) != -1){
				if (session.loadId != null && session.loadId != ''){
					if (scopes.prefs.lShipLoad){//prefs set as same ship loadid as loadid
						batchQ.setColumn('ship_load_id',session.loadId);
					}
					batchQ.setColumn('current_load_id',session.loadId);
				}
			}
			//if (mobLoadNumber != "" && session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.shipping')]){
			//	batchQ.setColumn('ship_load_id',session.loadId);
			//	batchQ.setColumn('current_load_id',session.loadId);
			//}
			if (sLocation != "" && sLocation != null){
				batchQ.setColumn('id_location',sLocation)
			}
			if (mob.heatId){
				batchQ.setColumn('heat_id',mob.heatId);
			}
			if (updateIdfileStatus ){
				
				batchQ.setColumn('status_description_id',statusId)
			}
			batchQ.performUpdate();
		}
		//logger(true, 'Status code has already been captured.');
		//logger(true,'Status earlier in route. Idfile not updated.');
		//if (databaseManager.hasRecordChanges(resultQ)){
		var dbStatus = databaseManager.commitTransaction();
		if (!dbStatus){
			globals.logger(true,i18n.getI18NMessage('sts.txt.record.save.failed'));
		}
	} else {
		globals.logger(true,i18n.getI18NMessage('431'));
	}
	//databaseManager.commitTransaction(true);//20181003 check to ensure that committransaction doesn't affect other saves
	return routeOK;
}
/**
 * @properties={typeid:24,uuid:"33D9ACFB-D345-42E2-9BCE-C44A506F5078"}
 */
function rfScanAgainOk(){
	// multiscan allowed
	// timed session ends - return false
	// timed session ends AND scan request to 100% - return true
	return (l.stationsMultiScan.indexOf(session.stationId) != -1) || 
			(m.stationsTimedEnds[session.stationId]);
}
/**
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
function showHelp(event){
	var winName = application.getActiveWindow(); 
	var formName = winName.controller.getName();
	var form = forms[formName];
	formName.functionKeyEntered = true;
	form.grantFocus = 'elHelp';//tell genericin that this needs focus
	form.elements.showHelp.requestFocus();
	functionKeyProvider = -1;
	functionKeyProvider = null;
	if (formName == 'rf_mobile_view'){renderPrinterBtns(form,false);}
	rfErrorHide(event);
	if (!form.elements.elHelp){
		if (application.isInDeveloper()){application.output('formname '+formName+' not active.');}
		return
	}
	var vis = !(form.elements.elHelp.visible);
	if (flagFunction){//TODO F1 disable last function call and execute chosen function call
		//here reverse the function key entered
		switch (flagFunction){//Use special close functions for particular function keys procedures
			case 'rfF6PrintPackingList':
			case 'rfF6BundlePrintList':
				break;
			case 'rfF2SwitchPlantsIgnoreThisIsNotOne':
				rfF2done();
				break;
			default:
				var lastStatus = (flagF8);
				eval("scopes.globals."+flagFunction+"()");
				vis = !(lastStatus != flagF8);
			}
		flagFunction = null;
		//return
	}
	//vis = (form.elements.elHelp.visible) && !vis;
	vis = !vis
	form.elements.elHelp.visible = !vis;
	form.elements.elHelp.enabled = !vis;
	if (!vis){
		if (form.elements['genericin']){
			form.elements['genericin'].requestFocus();
		}
		form.functionKeyEntered = false;
		return;
	}
	if (!mobileWindows[formName]){
		/** @type {QBSelect<db:/stsservoy/i18n_table>} */
		var i18 = databaseManager.createSelect('db:/stsservoy/i18n_table');
		i18.result.add(i18.columns.i18n_table_id);
		i18.where.add(i18.columns.message_value.eq(formName));
		var I18 = databaseManager.getFoundSet(i18);
	}
	
	rfFunctionKeys(formName);
	//var win = application.getActiveWindow();
	//win.show('rf_help');
}
/**
 * @properties={typeid:24,uuid:"CF92CA29-7654-497B-9D1E-EABE3FAA08A6"}
 */
function showMain(){
	var win = application.getActiveWindow();
	win.show(i18n.getI18NMessage('sts.mobile.main'));
}
/**
 * @param message
 * @param length
 *
 * @properties={typeid:24,uuid:"92EDD6D1-987C-4D8D-BE7A-84ADC79E2947"}
 */
function textWrap(message, length){
	message = message.toString().replace(/ +/g,' ');
	message = message.trim();
	var formatted = '';
	/** @type {Array} */
	var words = message.split(' ');
	/** @type {String} */
	var word = '';var msgPart = '';var maxLength = length+5;var longWord = false;var word2 = '';var breakWord = '';var tmpPart = '';
	var splitWord = [];//hold long words for splitting non-spaces
	while (word = words.shift()){
		longWord = false;
		while (word.length > maxLength){
			longWord = true;
			var subWord = word.substr(0,length);
			splitWord.push(subWord);
			word = word.substr(length,word.length);
			if (word.length <= maxLength){
				splitWord.push(word);
			}
		}
		while (word2 = splitWord.pop()){
			words.unshift(word2);
		}
		if (longWord){continue}
		tmpPart = tmpPart+' '+word;tmpPart = tmpPart.trim();
		if (tmpPart.length > length){
			breakWord = '<br>';
			formatted += breakWord+word;tmpPart = word;
		} else {
			formatted += ' '+word;
		}
	}
	return '<html>'+formatted;
}
/**
 * @AllowToRunInFind
 * 
 * @param workerArray
 *
 * @properties={typeid:24,uuid:"0EAA253F-17C4-4761-A09A-172F25060113"}
 * @SuppressWarnings(wrongparameters)
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
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.employee_active_flag.eq(1))
		.add(q.columns.employee_number.isin(workerArray))
	);
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		workerIds[rec.employee_number] = rec.employee_id;
	}
	return workerIds;
}
/**
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"144586D4-BE5E-4FA4-96D5-F3A068B80B96"}
 */
function formParent(event){
	//dataset columns: [containername(1),formname(2),tabpanel or beanname(3),tabname(4),tabindex(5),tabindex1based(6)]
	//dataset rows: mainform(1) -> parent(2)  -> current form(3) (when 3 forms deep)
	if (event){
		/** @type {JSDataSet} */
		var dataset = forms[event.getFormName()].controller.getFormContext();
	} else {
		dataset = controller.getFormContext();
	}
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
		win = application.getActiveWindow();
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
 * @param {JSEvent} event 
 * @param {Number} errorNum
 * @param {String} returnField
 * @param {String} additionalMsg
 * 
 * @properties={typeid:24,uuid:"E5021DE9-0377-478B-8AE2-CC18B4F90260"}
 * @AllowToRunInFind
 */
function errorDialogMobile(event,errorNum,returnField,additionalMsg){
	if (application.isInDeveloper()){application.output('  REM enter errorDialogMobile')}
	if (errorMessageMobile.search(i18n.getI18NMessage(errorNum)) != -1){
		if (application.isInDeveloper()){application.output(additionalMsg);}
		return;
	}
	rfErrorHideAuto(event);
	var mobile = (session.program != "STS Desktop");
	if (application.isInDeveloper()){application.output('program '+session.program);}
	//if (application.isInDeveloper()){application.output('returnField of errorDialogMobile '+returnField)}
	if (typeof additionalMsg === 'undefined') {additionalMsg = ''}
	errorNum = errorNum+"";
	errorMessage = i18n.getI18NMessage(errorNum);
	if (!errorMessage){i18n.getI18NMessage("1048")}
	errorMessage = errorMessage + " " + additionalMsg;
	errorMessage = errorMessage.replace(/\!/g,' ');
	if (mobile && returnField != 'dialog'){
		globals.rfErrorShow(errorMessage);
	} else {
		if (errorNum.match(/^[0-9]+$/)){
			globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.error.number', new Array(errorNum)),errorMessage);
		} else {
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('sts.txt.error.number', new Array(errorNum)),errorMessage);
		}
	}
	application.updateUI();
	scopes.globals.logger(false,errorMessage);
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
	if (application.isInDeveloper()){application.output(message)}
	if (!(capture || session.capture)){return}
	/** @type {JSFoundSet<db:/stsservoy/rf_transactions>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/rf_transactions');
	fs.newRecord(false);
	fs.transaction_date = new Date();
	fs.tenant_uuid = session.tenant_uuid;
	fs.rf_comm_data = message;
	fs.fabrication_shop = session.fabShop;
	fs.job_number = session.jobNumber;
	fs.rf_program = session.program;
	fs.signon_employee = session.login;
	if (mob){
		fs.status_code = mob.statusCode;
	}
	fs.status_location = session.statusLocation;
	fs.worker = session.worker;
	fs.division = session.association;
	fs.entry_response = session.userEntry;
	fs.rf_client = session.sessionId;
	fs.ip_address = session.sessionIp;
	
	databaseManager.saveData(fs);
}
/**
 * @properties={typeid:24,uuid:"A54C5C7A-4CB9-47DC-9782-3A5A35DD8B60"}
 */
function showExecLogout(){
	var win = application.getActiveWindow();
	var formName = win.controller.getName();
	if (application.isInDeveloper()){application.output('flag function '+flagFunction)}
	if (flagFunction){
		eval('scopes.globals.'+flagFunction+'()');
	}
	if (flagF8){rfF8Reversal()}//20181003
	flagF8 = null;//20181003 function leaving F8 enabled
	flagFunction = null;// 20181003 function leaving F8 enabled. Disable any active function
	rfErrorHide(null);//20181003
	//logger(true,'Exiting form '+formName);
	switch (formName){
		case i18n.getI18NMessage('sts.mobile.main'):
			security.logout('STSmobile');
			return;
		default:
			//if (foundset){foundset.clear();}
			win.show(i18n.getI18NMessage('sts.mobile.main'));
			//win.hide();
			rfFunctionKeys(i18n.getI18NMessage('sts.mobile.main'));//was 'Main'
	}
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
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		plugins.UserManager.Client().clientId;
		plugins.UserManager.Client().shutdown();
		if (forms['rf_mobile_view'] && forms['rf_mobile_view'].elements['windowClosed']){
			forms['rf_mobile_view'].elements['windowClosed'].visible = true;
		}
		if (forms['STS_main'] && forms['STS_main'].elements['windowClosed']){
			forms['STS_main'].elements['windowClosed'].visible = true;
		}
		application.updateUI();
		//security.logout('STSmobile');

		//var jsToExecute = "application.quit();";
		//try {
		//	plugins.WebClientUtils.executeClientSideJS(jsToExecute);
		//} catch (e) {}
	} else {
		var response = globals.DIALOGS.showQuestionDialog(
			i18n.getI18NMessage('sts.txt.new.bundle.number'),
			i18n.getI18NMessage('sts.txt.logout.exit.query'),
			i18n.getI18NMessage('sts.btn.no'),
			i18n.getI18NMessage('sts.btn.yes'));
		if (response == i18n.getI18NMessage('sts.btn.yes')){
			application.exit();
		}
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5858A57-8078-44A2-8DD2-E6078946ED31"}
 */
function onActionHelp(event) {
	var formName = event.getFormName();
	var form = forms[formName];
	form.functionKeyEntered = true;
	var elName = event.getElementName();
	//form.genericin = '';
	//form.gerericin2 = '';
	grantFocus = elName;
	var actionName = functionKeyProvider;
	var funcIndex = functionKeyDescrip.indexOf(actionName);
	if (!functionKeyProcedure[funcIndex]){return}
	var progEx = functionKeyProcedure[funcIndex]+'(event)';
	form.elements[elName].visible = false;
	form.elements[elName].enabled = false;
	functionKeyProvider = "";
	if (actionName == ""){grantFocus = null;return}
	if (formName == 'rf_mobile_view'){renderPrinterBtns(form,false)}
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
	//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT && !globals.mob.userAgent){
	//	plugins.WebClientUtils.executeClientSideJS('navigator.userAgent',globals.storeUserAgent,['navigator.userAgent']);
	//}//moved to login form with callback
	if (!mobMenuProvider){return} // 20150402 executing twice for some reason unknown
	//application.output('RM '+new Date());
	globals.onStartLoadPrefs();//reload prefs on each screen
	scopes.fs.checkComFabsuite();
	//application.output('RM '+new Date());

	var os = application.getOSName();
	var wide = application.getScreenWidth();
	var high = application.getScreenHeight();
	//application.output('main menu client os is '+os+' '+wide+'x'+high)
	var progList = application.getValueListArray('rfProgramList');
	var form = event.getFormName();
	var elName = forms[form].elements.mainMenu.getSelectedElements()[0];
	var elIndex = progList.indexOf(elName);
	//progList[elIndex] = elName; Not sure why this is done...
	var prog = mobMenuProvider.trim(); // forms[form].elements.mainMenu.getSelectedElements()[0].trim();
	session.program = prog;
	mobProg = prog;
	mob.job.rf = prog;
	rfFunctionKeys(prog);
	rfChangeWindow(event,prog);
	mobMenuProvider = "";
	if (application.isInDeveloper()){application.output('EB response '+session.enterpriseBrowser);}
	if (application.isInDeveloper()){application.output('devName '+session.enterpriseBrowser);}
}
/**
 * @param oldValue
 * @param scannedID
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8207B6BB-DA06-4861-8E21-3426C54CCC5F"}
 * @AllowToRunInFind
 */
function onDataChangeBarcode2(oldValue, scannedID, event) {
	var laborPercent = 0;
	if (globals.laborScreenActive) {//if (session.program.search('Labor') != -1){//Labor screen is active
		laborPercent = oldValue;//passed in 'R' code for percent
		mob.laborPercent = laborPercent;
	}
	if (onDataChangeFixEntry(oldValue,scannedID,event)){return true;}
    session.userEntry = scannedID; //session user entry info
    mob.barcode = scannedID;
    var noData = getJobDataFromID(event,scannedID);
    if (noData){return true}
	var formName = event.getFormName();
	//forms[formName].currentID = "";
	var barcodeId = globals.checkBarcode(scannedID);
	var elementName = event.getElementName();
	//2 var barcodeErrorField = 'currentidin';
	//2 if (formName.search('rf_mobile_view') != -1){
	//2 	barcodeErrorField = 'genericin';
	//2 }
	//11if (forms[formName].entryRequired(elementName)){
	//11	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//11	if (forms.rf_mobile_view.elements['drawrevin'].visible){
	//11		barcodeErrorField = 'drawrevin';
	//11	}
	//11}
	if (!barcodeId){
		globals.errorDialogMobile(event,701,barcodeErrorField,null);//701 This ID Number was not found.
		globals.logger(true,'Barcode does not exist.');
		return true;
	}
	
	if (!rfCheckUserCanProcess(event)){
		forms['rf_mobile_view'].currentID = '';
		return true;
	}
	var routeId = rfCheckBarcodeInRoute(oldValue, scannedID, event);
	mob.routeId = (routeId) ? routeId.toString() : routeId;//20190705 save route id for piecemark
	var statusCode = forms['rf_mobile_view'].statusCode;
	var statusRequired = session.program != i18n.getI18NMessage('sts.mobile.status')
	if (!statusCode && statusRequired){
		forms['rf_mobile_view'].currentID = '';
		globals.errorDialogMobile(event,762,'genericin',null);//status code required
		return true;
	}
	if (statusRequired && !rfCheckStatusInRoute(statusCode,routeId)){
		forms['rf_mobile_view'].currentID = '';
		globals.errorDialogMobile(event,763,'genericin',null);//This status code not on this pcmks route
		return true;
		
	}
	if (globals.laborScreenActive) {//20190712 as per PParks No F8 on Labor Percentage Screens
		if (application.isInDeveloper()){application.output('only process id as in a route with status')}
		if (!routeId){
			forms['rf_mobile_view'].currentID = '';
			globals.errorDialogMobile(event,761,'genericin',null);//This serial number is not routed
			return true;
			
		}
	}

	mob.barcodeId = barcodeId;
	rfProcessBarcode(event);
	rfResetRevisionsField(formName);//clear Revisions field if there
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	return true;
}
/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"7B28EFBB-9853-41BD-9E58-29440DEFD658"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 */
function rfProcessBarcode(event){
	var formName = event.getFormName();
	/**forms[formName].elements.location.enabled = true;
	forms[formName].elements.status.enabled = true;
	forms[formName].elements.worker.enabled = true;*/
	//if (typeof statusLocation === 'undefined'){statusLocation = ""}
	//if (typeof statusWorker === 'undefined'){statusWorker = ""}
	mob.locationArea = forms[formName].statusLocation;
	mob.workers = forms[formName].statusWorker;
	//mob.percent = 0;
	mob.date = new Date();
	var jobInfo = getJobIdInfo(mob.job.number);
	if (jobInfo){
		mob.job.rf = jobInfo.job_rec.rf_interface;
	}
	forms[formName].lastID = mob.barcode;
	rfGetBarcodeIdfiles()
	var barcodeErrorField = 'currentidin';
	//11if (forms.rf_mobile_view.elements['drawrevin'].visible){
	//11	barcodeErrorField = 'drawrevin';
	//11}
	if (!barcodeAttached()){
		if (application.isInDeveloper()){application.output('ERROR: Database inconsistent with barcode');}//errortypeneeded
		errorDialogMobile(event,'701',barcodeErrorField);//701 This ID Number Was Not Found. Ticket #262
		logger(true,i18n.getI18NMessage('sts.txt.barcode.no.idfiles'));
		rfWindowLastInfoClear();
		return true;
	}
	if (forms['rf_mobile_view'].requiredFields.indexOf('jobnumberin') != -1){//ticket#281, entry for job number limits barcodes to that job
		var barcodeJobNum = forms['rf_mobile_view'].vJobNumber;//barcodeJobNumber(event);
		if (barcodeJobNum != mob.job.number){
			errorDialogMobile(event,'702',barcodeErrorField,mob.job.number);//702 This id is on another job
			logger(true,i18n.getI18NMessage('702'));
			return true;
		}
	}
	var onHold = barcodeOnHold(); //first check 1/29/2015 pp 
	if (onHold){
		errorDialogMobile(event,'1050',barcodeErrorField);//1050 One or more of the ID Numbers are on Hold.
		logger(true,i18n.getI18NMessage('1050'));
		return true;
	}
	rfGetMobIdfile();
	forms[formName].controller.loadRecords(mob.idfilesFS);
	rfGetMobPiecemark(); // Get piecemark record
	if (!barcodePlant() && !scopes.globals.isOfficeFunction(event)){
		var assocName = ' ('+barcode_to_idfile.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.sts_job_to_assoc.association_name+')';
		errorDialogMobile(event,'6001',barcodeErrorField,assocName);//6001 This item doesn't belong to this Division.
		logger(true,i18n.getI18NMessage('6001')+assocName);
		return true;
	}
	var bundle = barcodeIsBundle(mob.barcode);
	// Load up the idfiles
	forms[formName].controller.loadRecords(databaseManager.convertToDataSet(mob.idfiles)); // mob.idfiles
	rfGetTransactionList(mob.idfile); 
	rfGetJobUnits();
	rfGetSpecsItem();
	//20190705 labor transactions/inspections
	rfCollectStationCompletes();//20190708 percent completion by station
	var currentPercent = session.stationsComplete[m.statusCodeToId[mob.statusCode]];
	if (!currentPercent){currentPercent = 0}
	var isInterimLoad = false;
	application.output('current load id: '+mob.idfile.current_load_id);
	if (mob.idfile.current_load_id){//determine if already on an interim load
		var loadRec = getLoadRecord(event,mob.idfile.current_load_id);
		isInterimLoad = (loadRec.interim_load == 1);
		application.output('isInterimLoad: '+isInterimLoad);
	}
	if (currentPercent == 100 && !flagF8 && !isInterimLoad){//always allow interim load
		if (session.program != i18n.getI18NMessage('sts.mobile.shipping')){	
				errorDialogMobile(null,1130,'genericin','');//This Status Code Is Already 100% Complete.
		} else {
			if (!mob.idfile.current_load_id || (mob.idfile.current_load_id && session.loadId.toString() != mob.idfile.current_load_id.toString())){//someone messed with currentLoadId, removing it so added null check
				if (mob.idfile.current_load_id){
					var loadNum = rfGetLoadNumber(mob.idfile.current_load_id.toString());
				}
				errorDialogMobile(null,951,'genericin',loadNum);//This ID Is On Another Load. Use F8 To Remove From This Load.
			} else {
				errorDialogMobile(null,1280,'genericin','');//Item Already Loaded
			}
		}
		return true;
	}
	if (!globals.laborScreenActive && !flagF8 && currentPercent > 0 && !isInterimLoad){//skip error check to enter F8 reversal code
		errorDialogMobile(null,767,'genericin','');//Status Already Started In Labor Screen.
		return true;	
	}
	forms['rf_mobile_view'].laborPercentComplete = currentPercent;
	var futurePercent = (mob.percent == 100) ? 100 : mob.percent*1 + currentPercent*1;
	mob.percent = ((mob.percent == 100) && currentPercent != 0) ? mob.percent - currentPercent : mob.percent; //20190709 started as labor entry and finished in non-labor
	//mob.percent = ((mob.percent == 100 || mob.percent == 0) && currentPercent == 100) ? 100 : mob.percent; // on multiscan of a status that is started as a labor scan
	mob.laborCompleted = (l.laborStations.indexOf(mob.statusCode) == -1 || !globals.laborScreenActive || futurePercent == 100);//session.program.search('Labor') == -1
	if (!flagF8 && globals.laborScreenActive && dataEntryComplete(event,'currentidin') && forms['rf_mobile_view'].laborPercentToday == ''){//session.program.search('Labor') == 0 
		forms['rf_mobile_view'].laborPercentToday = '';
		var percentComp = session.stationsComplete[application.getUUID(m.statusCodeToId[mob.statusCode])];
		forms['rf_mobile_view'].laborPercentComplete = (!percentComp) ? 0 : Math.floor(percentComp);
		return true;
	}
	//20190625 for screens that require the serial number to process, ie no percent labor

	switch (formName){
		case 'rf_mobile_view': {
			switch (session.program){
				//case 'Build Bundles2':
				case mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')]://Bundles
					//rfMobileViewNextField(event);
					if (application.isInDeveloper()){application.output('add to bundle');}
					if (flagF8){
						if (!bundleCheckIdInside()){
							errorDialogMobile(event,'701',barcodeErrorField,'  Item not removed.'); // 701 This ID Number Was Not Found.
							return true;
						}
						bundleGetIdfilesByBarcode();
						bundleGetTransactions();
						bundleIdsSaveTo(null);
						bundleDebundle(mob.bundle.transFs);
						//mob.bundle.Id = '';
						//forms['rf_bundles'].clearForm('bundle');
						//forms['rf_bundles'].piecemark = "** removed **";
						rfGetSpecsBundle();
						mobBundlePieces = mob.bundle.pieces;
						mobBundleWeight = mob.bundle.weight;
						//forms['rf_mobile_view'].elements['genericinlabel'].requestFocus();
						if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
						//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
						}
						//if (event.getElementName() != 'genericin'){
						//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
						//}
						return true;
					}
					// add to bundle
					bundleSaveTo(event);
					rfGetSpecsBundle();
					mobBundlePieces = mob.bundle.pieces;
					mobBundleWeight = mob.bundle.weight;
					forms[formName].totalPieces = mob.bundle.pieces;
					forms[formName].totalWeight = mob.bundle.weight;
					break;
				//case 'Receiving':
				case i18n.getI18NMessage('sts.mobile.receiving')://Receiving
					rfWindowLastInfoDisplay(event);
					rfGetPreviousStatusLocation(); // set previous status
					routeOK = rfCheckRouteOrder(); // route checks out 
					if (!routeOK.error){
						if (application.isInDeveloper()){application.output('Routing not ok');}
						errorDialogMobile(event,'405',barcodeErrorField,routeOK.missing);//405 
						return true;
					}
					shipStat = barcodeShip();
					shipped = barcodeShipped();
					break;
				case i18n.getI18NMessage('sts.mobile.transactions')://Transactions
				case i18n.getI18NMessage('sts.mobile.labor.transactions')://Transactions
				case i18n.getI18NMessage('sts.mobile.transactions.w.revs').replace("'","")://Transactions w/Rev's
				case i18n.getI18NMessage('sts.mobile.inspections'):
				case i18n.getI18NMessage('sts.mobile.labor.inspections'):
				case i18n.getI18NMessage('sts.mobile.inspections.w.revs').replace("'","")://Inspections w/Rev's
				case i18n.getI18NMessage('sts.mobile.final.ship')://Final Ship
				case i18n.getI18NMessage('sts.mobile.shipping')://Shipping
				case i18n.getI18NMessage('sts.mobile.sample')://Sample
				case i18n.getI18NMessage('sts.mobile.saw')://Saw
					var arrayRevs = [];
					arrayRevs.push(i18n.getI18NMessage('sts.mobile.transactions.w.revs'));
					arrayRevs.push(i18n.getI18NMessage('sts.mobile.inspections.w.revs'));
					//var jobInfo = globals.getJobIdInfo(forms['rf_mobile_view'].jobNumber);
					var isThirdParty = mob.job.rf != i18n.getI18NMessage('sts.interface.none')
					if (flagF8){//F8 must unload and unship 2019-10-10 08.29 Shipping Definitive Servoy Meeting.mp4
						application.output('entered F8 for this function');
						rfF8ReversalPrep();
						/** @type {QBSelect<db:/stsservoy/status_description>} */
						var qq = databaseManager.createSelect('db:/stsservoy/status_description');
						qq.where.add(qq.columns.status_code.eq(mob.statusCode));
						qq.where.add(qq.columns.tenant_uuid.eq(session.tenant_uuid));
						qq.where.add(qq.columns.association_id.eq(session.associationId.toString()));
						var QQ = databaseManager.getFoundSet(qq);
						/** @type {JSFoundSet<db:/stsservoy/status_description>} */
						var qqRec = QQ.getRecord(1);
						var statusShipType = qqRec.status_type;
						var pushStation = false;
						if (processCodes.shipping.indexOf(statusShipType) != -1){
							pushStation = (qqRec.push_a_station == 1);
						}
						var unCommitAction = 'Delete';
						var shipAction = false;
						if (session.program == i18n.getI18NMessage('sts.mobile.final.ship')){unCommitAction = "Un-Ship";shipAction = true;}
						if (session.program == i18n.getI18NMessage('sts.mobile.shipping')){unCommitAction = 'Unload';shipAction = true;}
						if (unCommitAction.search(/(Un-Ship)|(Unload)/) == 0 && !rfSaveThirdParties(unCommitAction)){
							application.output('return due to uncommit action for fs');
							return false;
						}
						//var commitStation = ''; //(Save)|(Delete)|(Ship)|(Un-Ship)|(Load)|(Unload)
						if (!pushStation && shipAction){//push actions are for shipping activities
							application.output('return due to pushstation and shipaction');
							return true;
						}
						unCommitAction = 'Delete';
						var isTimed = (!(!m.stationsTimed[session.stationId]) || !(!m.stationsTimedEnds[session.stationId]));
						if ((!isTimed || mob.completeStatus*1 == 1) && !rfSaveThirdParties(unCommitAction)){//fs will not allow undo station if it  is on a load 
						//if (!rfSaveThirdParties(unCommitAction)){//fs will not allow undo station if it  is on a load 
						
							application.output('return on !rfsavethirdparties');
							return false;//2019-10-10 08.29 Shipping Definitive Servoy Meeting.mp4
						}

						//var commitAction = (session.program != i18n.getI18NMessage('sts.mobile.shipping')) ? "Delete" : "Un-Ship";
						//if (!rfSaveThirdParties(commitAction)){return false}// Remove third party status

						rfF8ReversalTransaction();
						rfUnsetEndTransaction(event);
						mob.reverseWorker = null;
						if (session.program == i18n.getI18NMessage('sts.mobile.shipping')){
							rfGetLoadStats(session.loadId);//loadGetData();
						}
						application.output('return on flagf8');
						return true;
					}
					rfWindowLastInfoDisplay(event);
					rfGetPreviousStatusLocation(); // set previous status
					missing = ""; //create global temp
					routeOK = rfCheckRouteOrder(); // route checks out 
					if (!routeOK.error){
						if (application.isInDeveloper()){application.output('Routing not ok');}
						errorDialogMobile(event,'405',barcodeErrorField,routeOK.missing);//405 
						return true;
					}
					shipStat = barcodeShip();
					shipped = barcodeShipped();
					if (shipped && !isInterimLoad){
						if (application.isInDeveloper()){application.output('Barcode already shipped.');}
						errorDialogMobile(event,'708',barcodeErrorField);//405 
						//return true;
					}
					if (!isInterimLoad  && barcodeInAnotherLoad()){
						if (application.isInDeveloper()){application.output('Barcode already on another load.');}
						errorDialogMobile(event,'951',barcodeErrorField);//405 
						return true;				
					}
					if (rfTimed(event) && (mob.timedError != "")){
						errorDialogMobile(event,mob.timedError,barcodeErrorField);
						logger(true,'Timed status error'+mob.timedError);
						return true;
					}
					//if (globals.laborScreenActive){break}//temporary
					saveScanTransaction(event); // moved to inside rfTimed where the form query on timed end is located
					rfGetLocationStats2(forms[formName].id_location);
					rfGetPiecesScanned(mob.piecemark.piecemark_id, mob.locationArea);
					rfWindowLastInfoDisplay(event);
					if (session.program == i18n.getI18NMessage('sts.mobile.final.ship')){
						rfGetLoadStats(session.loadId);//loadGetData();//rfGetSpecsLoad
					}
					rfCollectStationCompletes();//20190708 percent completion by station
					if (session.program == i18n.getI18NMessage('sts.mobile.shipping')){
						if (application.isInDeveloper()){application.output('calc load data')}
						rfGetLoadStats(session.loadId);//loadGetData();
					}
					forms['rf_mobile_view'].laborPercentComplete = session.stationsComplete[m.statusCodeToId[mob.statusCode]];

					loadGetData();//20181003 need to do twice. 
					break;
				case i18n.getI18NMessage('sts.mobile.status')://Status
				case i18n.getI18NMessage('sts.mobile.find.piece.marks')://Find Piece Marks
					forms[formName].elements['errorWindow'].visible = false;
					errorMessageMobile = '';
					rfWindowLastInfoDisplay(event);
					rfGetLocationStats2(forms[formName].id_location);
					break;
				default:
			}
			break;
		}
		default:{}
	}
	rfGetTransactionList(mob.idfile); // second pass of same transaction list to include new transaction ticket #139
	if (forms.rf_mobile_view.elements['drawrevin'].visible){
		barcodeErrorField = 'drawrevin';
		//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		//	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
		//}
		//if (event.getElementName() != 'genericin'){
		//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
		//}
	}
	if (0 && event.getElementName() != 'genericin'){
		if (0 && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//focusFirst()
			plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
		} else {
			//forms['rf_mobile_view'].elements['genericinlabel'].requestFocus();
			forms['rf_mobile_view'].elements['genericin'].requestFocus();
		}
	}
	return null;
}
/**
 * @properties={typeid:24,uuid:"68DD1B5F-1AF5-4084-9A88-F5F36D62EFD0"}
 */
function rfWindowLastInfoClear(){
	mobPreviousLocation = "";
	mobPreviousStatus = "";
	mobLocationPieces = 0;
	mobLocationWeight = 0;
	mobItemPieces = "";
}
/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"070781A7-D998-410A-B0DD-D7D15AA803A5"}
 */
function rfWindowLastInfoDisplay(event){
	var formName = event.getFormName();
	switch (session.program){// check for i18n mapping
		//switch (formName){
		case 'skip':
			rfGetLocationStats2(mob.locationArea);//Value list does not match key list in set condition
			rfGetPiecesScanned(mob.piecemark.piecemark_id, mob.locationArea);
			mobPreviousLocation = mob.locationPrev;
			mobPreviousStatus = mob.statusPrev;
			mobLocationPieces = mob.locationValues.pieces;
			mobLocationWeight = mob.locationValues.weight;
			mobItemPieces = mob.idValues.complete+" / "+mob.idValues.total;
		case 'Build Bundles':
			var rec = mob.idfilesFS.getRecord(1);
			/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
			var piecemarkRec = rec.sts_idfile_to_pcmks;
			forms[formName].pcmkMaterial = piecemarkRec.material;
			forms[formName].piecemark = piecemarkRec.piecemark;
			if (piecemarkRec.piecemark == ""){
				forms[formName].piecemark = "*summarized piecemark*";
			}
			forms[formName].pcmkLength = piecemarkRec.item_length;
			forms[formName].pcmkWeight = piecemarkRec.item_weight;
			///var weight = piecemarkRec.item_weight;
			break;
		default:
			rfGetLocationStats2(mob.locationArea);
			rfGetPiecesScanned(mob.piecemark.piecemark_id, mob.locationArea);
			mobPreviousLocation = mob.locationPrev;
			mobPreviousStatus = mob.statusPrev;
			mobLocationPieces = mob.locationValues.pieces;
			mobLocationWeight = mob.locationValues.weight;
			mobPiecesStatus = mob.idValues.complete+" / "+mob.idValues.total;
			mobItemPieces = mob.idValues.complete+" / "+mob.idValues.total;
	}
	if (session.program == i18n.getI18NMessage('sts.mobile.shipping')){
		if (mobLoadWeight*1 > scopes.prefs.maxwt*1){
			errorDialogMobile(event,'sts.txt.truck.overweight','genericin',' '+ Math.floor(mobLoadWeight)+ ' > '+Math.floor(scopes.prefs.maxwt));
		}
		rfGetLoadStats(session.loadId);//loadGetData();
		//rfGetLoadStats(mob.load.currentId);
	}
}
/**
 * @properties={typeid:24,uuid:"CBFF0C6A-6F0A-49FD-94CB-2C1FE0787E7F"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetPreviousStatusLocation(){
	// No sort required.  This gets status for idfile before any work is done. Data is from idfile.
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.status_description_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.idfile_id.isin(mob.idfiles));

	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
		var record = resultQ.getRecord(1);
		if (!record.status_description_id){
			mob.statusPrev = "";
		} else {
			mob.statusPrev = (!m.stations[record.status_description_id]) ? '' : m.stations[record.status_description_id].split(',')[1];
		}
		mob.locationPrev = (!record.id_location) ? "" : record.id_location;
	}
}
/**
 * @param idfileId
 *
 * @properties={typeid:24,uuid:"0C42579C-20D2-49B6-BAC2-A96C3A659EDB"}
 * @SuppressWarnings(wrongparameters)
 */
function rfValidLastMaxStatus(idfileId){
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.location);
	q.result.add(q.columns.status_description_id);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.idfile_id.eq(idfileId.toString()))
	);
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() == 0){return null}
	var rec = resultQ.getRecord(1);
	var lastTrans = rec.status_description_id;
	for (var index = 1;index <= resultQ.getSize();index++){
		rec = resultQ.getRecord(index);
		var thisTrans = rec.status_description_id;
		var overwrite = (m.stationSeq[thisTrans] > m.stationSeq[lastTrans]) || lastTrans == null;
		if (overwrite){
			lastTrans = thisTrans;
		}
	}
	return lastTrans;
}
/**
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76457369-74E3-42E3-8B3C-EC42331E9A19"}
 */
function onDataChangeLocation(oldValue, newValue, event) {
	if (onDataChangeFixEntry(oldValue,newValue,event)){return true;}
	session.userEntry = newValue;
	var formName = event.getFormName();
	var invUpdate = (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')] ||
						session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.asn.receiving')]);
	mob.locationArea = '';
	mob.stockLocationArea = '';
	var elementName = 'locationin';//event.getElementName();
	if (invUpdate){
		elementName = 'stocklocationin';
	}
	/** @type {String} */
	var statusLocation = forms[formName].statusLocation;
	if (newValue != null && newValue != ""){
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
	}
	if (invUpdate){
		mob.stockLocationArea = newValue;
		forms['rf_mobile_view'].stockLocation = newValue;
	} else {
		mob.locationArea = newValue;
		if (session.program == i18n.getI18NMessage('sts.mobile.inventory.tfs')){
			forms['rf_mobile_view'].dropLocation = newValue;
		} else {
			forms['rf_mobile_view'].statusLocation = newValue;
		}
	}
	switch (formName){
		case 'rf_mobile_view':
			//forms['rf_mobile_view'].genericInput = '';
			//forms['rf_mobile_view'].elements['genericin'].requestFocus();
			break;
		default:
			rfEmptyNextField(event,'worker');
	}
	
	return true;
}
/**
 * @properties={typeid:24,uuid:"CDFF75EC-9A5B-4DA1-BFB1-E9F4F6C8FDD5"}
 */
function thisFuncName(myName){
   myName = myName.substr('function '.length);
   myName = myName.substr(0, myName.indexOf('('));
//application.output('function called '+myName);
	myName = myName.trim();
   return myName;
}
/**
 * @properties={typeid:24,uuid:"D70092FA-99EF-4A04-8E16-FF7689B969BB"}
 */
function rfStatusCheck(newStatus){
	///var formName = application.getActiveWindow().controller.getName();
	///var statusCode = forms[formName].statusCode;
	/** @type {Array} */
	var statusCodes = m.statusCodesDiv[session.associationId.toString()];
	if (statusCodes && statusCodes.indexOf(newStatus) == -1){
		return null;
	}
	//mob.statusCode = newStatus;
	mob.completeAsk = (l.promptComplete.indexOf(newStatus) != -1);//ticket #103
	mob.statusCode3rdParty = m.stationsThird[newStatus];
	session.stationThird = m.stationsThird[newStatus];
	//session.stationId = m.stations[session.associationId+', '+mob.statusCode];
	
	return newStatus;
}
/**
 *
 * @properties={typeid:24,uuid:"4D64FD66-F13E-48E3-B754-A33086CC19FE"}
 */
function onReturnFromFunction(){
	///var form = application.getActiveWindow();
	///var winName = form.getName();
	//session.errorForm;
	//session.errorElement;
	session.noError = true;
	forms['rf_mobile_view'].elements['genericin'].requestFocus();
	forms['rf_mobile_view'].controller.focusField('genericin',true);
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newJob new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0A91B122-3B40-440A-9B48-96C8A1DBA659"}
 * @AllowToRunInFind
 */
function onDataChangeJob(oldValue, newJob, event) {
	if (onDataChangeFixEntry(oldValue,newJob,event)){return true;}
	if (scopes.prefs.lFabsuiteInstalled == 1){
		/** @type {String} */
	 	var fsJobInfo = scopes.fs.checkFSJobNumber(newJob);
		if (fsJobInfo != null){
			errorDialogMobile(event,1024,'genericin',fsJobInfo);
			if (forms['rf_mobile_view']){forms['rf_mobile_view'].jobNumber = oldValue}
			return true;
		}
		null;
	}
	session.userEntry = newJob;
	if (session.program.search('FabSuite') != -1){
		application.output('formname '+formName);
		if (forms['rf_mobile_view']){forms['rf_mobile_view'].jobNumber = newJob}
		session.jobNumber = newJob;
		if (forms['rf_mobile_view']){session.jobId = scopes.globals.getJobIdInfo(newJob).job_id.toString();}
		return true;
	}
	var formName = event.getFormName();
	if (formName != 'rf_mobile_view' && application.getActiveWindow().controller.getName().search(/View|view/) != -1){
		var instance_form = globals.getInstanceForm(event);
		formName = formName.replace(instance_form,'_view'+instance_form);
	}
	var baseForm = getBaseFormName(null);
	var elementName = event.getElementName();
	if (formName.search('rf_mobile_view') != -1){
		elementName = 'jobnumberin';
		var jobInfo = getJobIdInfo(newJob);
		if (!jobInfo.job_id){
			errorDialogMobile(event,101,elementName,null);
			if (forms['rf_mobile_view']){forms['rf_mobile_view'].jobNumber = ''}			
			return true;
		}
		session.jobIsFabSuite = (jobInfo.job_rec.rf_interface == i18n.getI18NMessage('sts.interface.fabsuite'));
		if (!jobInfo.job_id){
			errorDialogMobile(event,101,elementName,null);
			if (forms['rf_mobile_view']){forms['rf_mobile_view'].jobNumber = ''}			
			return true;
		}
	}
	//if (forms[formName].entryRequired(elementName)){
	//	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//}
	if (newJob == "" || newJob == null){
		forms[formName].controller.focusField(elementName,true);
		return true;
	}
	var assocID = session.associationId;//#94 permit OFFICE to find piecmarks and status
	if (session.appName.search('STSmobile') != -1 && scopes.globals.isOfficeFunction(event)){
		assocID = null;
	}
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	
	if (!rfJobCheck(newJob,assocID)){
		// 101 This job number was not found.
		//if (forms[formName].stayfield !== 'undefined'){forms[formName].stayfield = true}
		//if (forms[formName].fieldBadEntry !== 'undefined'){forms[formName].fieldBadEntry = true}
		errorDialogMobile(event,101,elementName,null);
		if (forms['rf_mobile_view']){forms['rf_mobile_view'].jobNumber = newJob}
		return true;
	}
	if (forms['rf_mobile_view']){forms['rf_mobile_view'].jobNumber = newJob}
	forms[formName].vJobNumber = newJob;
	forms[formName].vCustNumber = "";
	getCustomersByJob();
	switch (baseForm){
	case 'piecemark':
	case 'piecemark_view':
	case 'piecemark_entry':
			//getCustomersByJob();
			/** @type {JSFoundSet<db:/stsservoy/customers>} */
			var ds = getCustomersByJob();
			var custCount = ds.getMaxRowIndex();
			if (custCount == 1){
				var provider = forms[formName].elements['customer_number'].getDataProviderID();
				//application.output('data prov '+provider);
				ds.rowIndex = 1;
				forms[formName][provider] = ds.customer_id;
				if (application.isInDeveloper()){application.output('selected input cust id '+ds.customer_id);}
				if (application.isInDeveloper()){application.output('selected input cust id '+forms[formName].vCustNumber);}
				//forms[formName].vCustRec = ds;
				loadPcmkForm();
				forms[formName].elements.shop_order.requestFocus();
			} else {
				onFocusTabsSTS(event);
			}
			// load job info
			// calc job weight, load weight
			// 
			break;
		case 'rf_bundles':
		case 'rf_shipping':
		case 'rf_mobile_view':
		case 'rf_mobile':
			if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
			var dataProv = forms['rf_mobile_view'].elements['jobnumberin'].getDataProviderID();
			forms['rf_mobile_view'][dataProv] = newJob;
			if (session.program == i18n.getI18NMessage('sts.mobile.inventory.tfs')){forms['rf_mobile_view'].tfsJob = newJob}
			forms['rf_mobile_view'].currentBundle = '';
			forms['rf_mobile_view'].loadNumber = '';
			if (true || application.isInDeveloper()){application.output('job is '+newJob+' dataprov '+dataProv)}
			///forms['rf_mobile_view'].elements['genericinlabel'].requestFocus();
			//if (event.getElementName() != 'genericin'){
			//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
			//}
			//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
			//}

			//forms.rf_mobile_view.fieldNextTab();
			//forms.rf_mobile_view.elements[forms[formName].currentField].requestFocus();
			//forms.rf_mobile_view.onElementFocusLost(event);
			break;
		default:
	}
	/**if (formName == 'rf_bundles'){
		rfEmptyNextField(event,'bundle');
	}*/
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	return true;
}
/**
 * @param jobNumber
 * @param associationId
 * @properties={typeid:24,uuid:"27D46138-8AAB-4DB7-8098-B35CAF43B76D"}
 * @SuppressWarnings(wrongparameters)
 */
function rfJobCheck(jobNumber,associationId){
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.result.add(q.columns.job_id);
	q.result.add(q.columns.job_number);
	q.result.add(q.columns.metric_job);
	q.result.add(q.columns.association_id);
	q.result.distinct = true;
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.job_number.eq(jobNumber));
	if (associationId){
		q.where.add(q.columns.association_id.eq(associationId.toString()));
	}
	var resultQ = databaseManager.getFoundSet(q);
	var size = resultQ.getSize();
	if (size == 0){
		return false;
	}
	if (size > 1){
		if (application.isInDeveloper()){application.output('Multiple job numbers.  Should not happen')}
	}
	session.jobNumber = jobNumber;
	/** @type {JSRecord<db:/stsservoy/jobs>} */
	var rec = resultQ.getRecord(1);
	session.jobId = rec.job_id.toString();
	session.jobLoads = null;
	mob.job.metric = rec.metric_job;
	mob.job.Id = rec.job_id.toString();
	mob.job.weight = rec.job_weight;
	return true;
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} bundle new value
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7A558DA6-FB57-40FA-AA5A-D44A5091208E"}
 * @AllowToRunInFind
 */
function onDataChangeBundle(oldValue, bundle, event) {
	/**
	 * bundle exists
	 * bundle empty
	 * bundle in job
	 * bundle total weight and pieces
	 * job number id
	 * have idfile -> piecemark -> 
	 */
	var formName = event.getFormName();//onDataChangeBundle
	var elementName = event.getElementName();

	session.userEntry = bundle;
	if (!bundle || !barcodeIsBundle(bundle)){
		scopes.globals.rfCreateBundle(event);
		return;
	} else {
		// barcode has items, is it for this job? Create new dialog for new bundle
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = mob.bundleFS.getRecord(1);
		var bundleJobId = rec.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.job_id.toString();
		if (bundleJobId+'' != session.jobId+''){
			mob.bundle.Id = "";
			forms[formName].currentBundle = '';
			// 730 This Bundle Number Does Not Belong To This Job.
			errorDialogMobile(event,730,'bundlein',null);
			return;
		} else {
			mob.bundle.Id = bundle;
		}
	}
	//session.errorShow = false;
	if (formName == 'rf_mobile_view'){
		forms[formName].currentBundle = mob.bundle.Id;
	}
	dataChangedBundle(event,formName);
	//session.errorShow = false;
	return;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"CD9C087F-4451-4FCA-B756-092CCC74385B"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(wrongparameters)
 */
function bundleCreateValid(){
	// idfile.bundle_bc.length <= 30
	bundlePrefixSet();
	var bundlePrefix = session.bundlePrefix;
	var serialLength = 5;
	/** @type {QBSelect<db:/stsservoy/last_id_serial>} */
	var q = databaseManager.createSelect('db:/stsservoy/last_id_serial');
	q.result.add(q.columns.last_id_serial_id);
	q.result.add(q.columns.prefix);
	q.result.add(q.columns.serial);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.prefix.eq(bundlePrefix))
		);
	var resultQ = databaseManager.getFoundSet(q);
	var serial = '000000000000000000000000000000';
	if (resultQ.getSize() != 0){
		// no prior bundle number for this year
		/** @type {JSFoundSet<db:/stsservoy/last_id_serial>} */
		var rec = resultQ.getRecord(1);
		serial = serial + rec.serial;
	}
	serial = scopes.jobs.countUpNumbersNonOdo(utils.stringRight(serial, serialLength),'bundle');
	//serial = utils.stringRight(serial, serialLength);
	session.bundleSuffix = serial;
	//application.output('bundle is '+bundlePrefix+serial);
}
/**
 * @properties={typeid:24,uuid:"9D763899-E70E-4D8D-8767-5D9F6834FD10"}
 */
function bundlePrefixSet(){
	var date = new Date();
	var year = utils.stringRight(date.getFullYear().toString(), 2);
	session.bundlePrefix = 'BND'+year; // unchangeable by user, controlled by STS
}
/**
 * @param serial
 *
 * @properties={typeid:24,uuid:"5A126E2E-8A63-4343-8585-3FC8363AC897"}
 */
function countUpNumbers2(serial){
	//var serialBefore = serial;
	var serialLength = serial.length;
	var index = serialLength-1;
	var index2 = serialLength;
	var charx = '';
	while(index > 0){
		charx = serial[index];
		if (application.isInDeveloper()){application.output('charx '+charx);}
		if (charx == '9'){
			serial = utils.stringIndexReplace(serial, index2, 1, 'A');
			break;
		} else if (charx == 'Z'){
			serial = utils.stringIndexReplace(serial, index2, 1, '0');
			index--;index2--;
		} else {
			var nextChar = String.fromCharCode(serial.charCodeAt(index)+1);
			serial = utils.stringIndexReplace(serial, index2, 1, nextChar);
			break;
		}
	}
	session.bundleSuffix = serial;

	return serial;
}
/**
 * @param {JSEvent} event the event that triggered the action
 * @param value
 * @param nextField
 *
 * @properties={typeid:24,uuid:"7D835E67-4D12-4D4E-BA30-4803F1F3CA63"}
 */
function onFocusSet(event,value,nextField) {
	var formName = event.getFormName();
	///var elName = event.getElementName();
	var entry = event.getSource().getDataProviderID();
	var variable = forms[formName];
	//var value = variable[entry];
	//value = "";
	variable[entry] = value;
	forms[formName].controller.focusField(nextField,true);
}
/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"F961AF61-88F1-407B-ACF3-F91CA52B4A9B"}
 */
function bundleSaveTo(event){
	bundleGetIdfilesByBundle();
	if (bundleCheckIdInside()){
		// 727 This ID Number Is Already In This Bundle.
		// 728 This ID Number Is Already In Another Bundle Number.
		// 725 A Bundle Number Was Not Created.
		// 726 This Bundle Number Was Not Found.
		// done 730 This Bundle Number Does Not Belong To This Job.
		// 1045 Entered An ASN# & Qty >1 & Bundle Is NO. Change To YES or Delete ASN#.
		errorDialogMobile(event,727,'current',null);
		return true;
	}
	if (bundleCheckIdInsideElsewhere()){
		errorDialogMobile(event,728,'current',null);
		return true;
	}
	rfWindowLastInfoDisplay(event);
	bundleSaveName();
	bundleIdsSaveTo(event);
	rfSaveTransaction(event);
	return true;
}
/**
 * @properties={typeid:24,uuid:"324811FD-C67D-431A-A5DE-9A1FFB959D2B"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function bundleCheckIdInside(){
	/**
	 * barcode idfiles are in the bundle
	 */
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.bundle_bc);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);

	q.where.add(q.columns.delete_flag.isNull)
	q.where.add(q.columns.idfile_id.isin(mob.idfiles))
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	q.where.add(q.columns.bundle_bc.eq(mob.bundle.Id))

	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() != 0){
		return true;
	}
	return false;
}
/**
 * @properties={typeid:24,uuid:"F68523C0-36AE-4FAC-A66B-D8DC80D2CBAA"}
 * @SuppressWarnings(wrongparameters)
 */
function bundleGetIdfilesByBundle(){

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	
	q.where.add(q.columns.delete_flag.isNull)
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	q.where.add(q.columns.bundle_bc.eq(mob.bundle.Id))
	mob.bundleFS = databaseManager.getFoundSet(q);
	null;
	//var rec = null;var index = 1;
	//mob.idfileIds = [];
	//while (rec = mob.bundleFS.getRecord(index++)){
	//	mob.idfileIds.push(rec.idfile_id);
	//}
}
/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"430F742C-49E5-4831-9BF7-E53F47DDFC66"}
 */
function bundleIdsSaveTo(event){
	switch (flagFunction){
		case 'rfF8BundleRemoveFrom':
		case 'rfF4BundleClear':
			var bulk = databaseManager.getFoundSetUpdater(mob.bundleFS);
			bulk.setColumn('bundle_bc',null);//ticket #281
			bulk.performUpdate();
			break;
		default:
			bulk = databaseManager.getFoundSetUpdater(mob.idfilesFS);
			bulk.setColumn('bundle_bc',mob.bundle.Id);
			if (mob.locationArea != null && mob.locationArea.length != 0){
				bulk.setColumn('id_location',mob.locationArea);
			}
			bulk.performUpdate();
	}
	
}
/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A1EA9ED-1426-49E9-89D9-5C3865BCDFF9"}
 */
function rfSaveTransaction(event){
	var date = new Date();
	var currentWorkers = [];
	if (!mob.workers){mob.workers = ''}
	var workers = mob.workers.split(".");
	for (var index = 0; index < workers.length; index++) {
		currentWorkers.push(m.workerList[workers[index]]);
	}
	var routeOK = false;
	index = 0;
	if (event.getFormName() == 'rf_bundles'){
		routeOK = true;
	}
	if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')]){
		routeOK = true;
	}
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var transFS = databaseManager.getFoundSet('db:/stsservoy/transactions');
	var newRec = null;
	databaseManager.startTransaction();
	for (index = 0; index < mob.idfiles.length; index++) {
		if (rfTransIsTimed()){
			newRec = rfSetIdfileTimedStatus(mob.idfiles[index]);
			if (newRec == null){
				if (application.isInDeveloper()){application.output('rfIsTimed rec is null');}
			} else {
				if (application.isInDeveloper()){application.output('rfIsTimed rec is found');}
			}
		} 
		if (newRec != null){//only update timed transaction records
			if (application.isInDeveloper()){application.output('status trans rec found. updating');}
			// dialog for completion of timed event
			newRec.transaction_end = mob.timedEnd;
		}
		if (routeOK){
			if (transFS.newRecord() == -1){
				if (application.isInDeveloper()){application.output('Creating new Record for transactions failed.');}
				return;
			}
			transFS.status_description_id = session.stationId;
			transFS.employee_id = session.employeeId; //globals.mobLoggedEmployeeId;//UUID
			transFS.idfile_id = mob.idfiles[index];
			transFS.location = mob.locationArea;
			transFS.transaction_date = date;//new Date();//date;//mob.timedBegin;
			transFS.transaction_start = date;//mob.timedBegin;
			transFS.tenant_uuid = session.tenant_uuid;
			transFS.job_uuid = mob.job.Id;//'';//20190108 add job UUID to transactions
			transFS.trans_status = mob.statusCode;
			transFS.trans_code = rfTransCode();
			if (event.getFormName() == 'rf_bundles'){
				transFS.bundle_bc = mob.bundle.Id;
			}
			if (application.isInDeveloper()){application.output('timed b:'+mob.timedBegin+ ' e:'+mob.timedEnd)}
			if (mob.timedBegin == '' && mob.timedEnd == ''){transFS.quantity = 1}
			if (mob.timedEnd != ""){
				transFS.transaction_end = mob.timedEnd;
				transFS.transaction_duration = mob.timedDuration;
				if (mob.percent > 0){transFS.labor_percentage = mob.percent}
				if (mob.percent == 100.0){transFS.labor_quantity = 1}
			}
			if (forms.rf_mobile_view.currentBundle){
				transFS.bundle_bc = forms.rf_mobile_view.currentBundle;
			}
			for (var index2 = 0; index2 < currentWorkers.length; index2++) {
				switch (index2) {
				case 0:
					transFS.worker_id = currentWorkers[index2];
					break;
				case 1:
					transFS.worker2_id = currentWorkers[index2];
					break;
				case 2:
					transFS.worker3_id = currentWorkers[index2];
					break;
				case 3:
					transFS.worker4_id = currentWorkers[index2];
					break;
				case 4:
					transFS.worker5_id = currentWorkers[index2];
					break;
				default:
				}
			}
		}
	}
	var dbStatus = databaseManager.commitTransaction();
	if (!dbStatus){globals.loggerDev(this,'save of record failed')}
}
/**
 * @properties={typeid:24,uuid:"FDEB97E1-E7F9-47BB-B08D-96241F6740F0"}
 * @SuppressWarnings(wrongparameters)
 */
function bundleSaveName(){
	if (mob.bundleFS.getSize() != 0){return} // bundle name already exists
	/** @type {QBSelect<db:/stsservoy/last_id_serial>} */
	var q = databaseManager.createSelect('db:/stsservoy/last_id_serial');
	q.result.add(q.columns.last_id_serial_id);
	q.result.add(q.columns.prefix);
	q.result.add(q.columns.serial);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.prefix.eq(session.bundlePrefix))
		);
	var resultQ = databaseManager.getFoundSet(q);
	var rec = null;
	if (resultQ.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/last_id_serial>} */
		rec = resultQ.getRecord(1);
		rec.serial = session.bundleSuffix;
		
	} else {
		/** @type {JSFoundSet<db:/stsservoy/last_id_serial>} */
		resultQ.newRecord();
		rec = resultQ.getRecord(1);
		rec.serial = session.bundleSuffix;
		rec.prefix = session.bundlePrefix;
		rec.tenant_uuid = session.tenant_uuid;
	}
	databaseManager.saveData(rec);
}
/**
 * @properties={typeid:24,uuid:"CB3412D3-060A-45B8-AFC1-2D9172FE7928"}
 * @SuppressWarnings(wrongparameters)
 */
function bundleCheckIdInsideElsewhere(){
	/**
	 * barcode idfiles are in another bundle
	 */
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.idfile_id.isin(mob.idfiles))
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.or
				.add(q.columns.bundle_bc.not.eq(''))
				.add(q.columns.bundle_bc.not.isNull)
				)
		);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
		return true;
	}
	return false;
}
/**
 * @properties={typeid:24,uuid:"61115E9F-582C-4158-98FF-181D71C46EE9"}
 */
function rfF4BundleClear(){
	if (application.isInDeveloper()){application.output(flagFunction);}
	//flagFunction = null;
	forms['rf_mobile_view'].functionKeyEntered = true;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var form = forms['rf_mobile_view'];
	if (form.statusCode == '' || form.jobNumber == '' || form.currentBundle == ''){return}
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	/**
	 * set all idfiles with bundle id to null
	 * set all transactions for idfiles to DEBUNDLE
	 */
	var deleteBundle = globals.DIALOGS.showQuestionDialog(
		i18n.getI18NMessage('sts.txt.bundle.delete'),
		i18n.getI18NMessage('sts.txt.bundle.delete'),
		i18n.getI18NMessage('sts.btn.yes'),
		i18n.getI18NMessage('sts.btn.no'));
		// 'Delete Bundle?','YES','no');
	if (deleteBundle == i18n.getI18NMessage('sts.btn.no')){
		flagFunction = null;
		return;
	}
	bundleGetIdfilesByBundle();
	bundleGetTransactions();
	bundleIdsSaveTo(null);
	bundleDebundle(mob.bundle.transFs);
	mob.bundle.Id = '';
	forms['rf_mobile_view'].currentBundle = '';
	//forms['rf_bundles'].currentBundle = "";
	//forms['rf_bundles'].clearForm('job');
	flagFunction = null; // one pass function
}
/**
 * TenantID, BundleId, Not deleted, isin idfiles for bundle, trans_code FABMO
 * @properties={typeid:24,uuid:"8072F01C-74D2-4161-9112-B2CBC4304931"}
 * @SuppressWarnings(wrongparameters)
 */
function bundleGetTransactions(){
	/**
	 * Get FABMO transactions for BNDL status code on mob.bundleFS results
			transFS.status_description_id = session.stationId;
			transFS.employee_id = session.employeeId; //globals.mobLoggedEmployeeId;//UUID
			transFS.idfile_id = mob.idfiles[index];
			transFS.location = mob.locationArea;
			transFS.transaction_date = new Date();//date;//mob.timedBegin;
			transFS.transaction_start = date;//mob.timedBegin;
			transFS.tenant_uuid = session.tenant_uuid;
			transFS.trans_status = mob.statusCode;
			transFS.trans_code = rfTransCode();
			transFS.transaction_end
			transFS.transaction_duration
			transFS.tlabor_percentage
			transFS.labor_quantity
			transFS.worker_id = currentWorkers[index2];
			transFS.worker2_id = currentWorkers[index2];
			transFS.worker3_id = currentWorkers[index2];
			transFS.worker4_id = currentWorkers[index2];
			transFS.worker5_id = currentWorkers[index2];
	 */
	///var date = new Date();
	var bundIdfiles = []; var rec = null;
	for (var index = 1;index <= mob.bundleFS.getSize();index++){
		rec = mob.bundleFS.getRecord(index);
		bundIdfiles.push(rec.idfile_id.toString());
	}
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);

	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.idfile_id.isin(bundIdfiles));
	q.where.add(q.columns.bundle_bc.eq(mob.bundle.Id));
	q.where.add(q.columns.trans_code.eq('FABMO'));
	//q.where.add(q.columns.trans_status.eq(statusCode));
	q.where.add(q.columns.status_description_id.eq(session.stationId.toString()));
	mob.bundle.transFs = databaseManager.getFoundSet(q);
}
/**
 * @properties={typeid:24,uuid:"36DBC95D-B108-4C6D-8CCA-E10BD7E7C3D9"}
 */
function bundleDebundle(debundleFS){
	if (debundleFS.getSize() == 0){return}
	var rec = debundleFS.getRecord(1);
	var status = rec.trans_status;
	var date = new Date();
	var transSet = databaseManager.getFoundSetUpdater(debundleFS);
	transSet.setColumn('trans_code','FABDB');
	transSet.setColumn('trans_status','DE'+status);
	transSet.setColumn('edit_date',date);
	transSet.performUpdate();
	//var updateIfs = databaseManager.getFoundSetUpdater(mob.idfilesFS);
	//updateIfs.setColumn('bundle_bc',null);
}
/**
 * @properties={typeid:24,uuid:"41A77946-EDDE-42A4-AE5C-439FEAD6E4CB"}
 */
function rfF8BundleRemoveFrom(){
	if (application.isInDeveloper()){application.output('flagF8: '+flagF8)}
	var formName = application.getActiveWindow().controller.getName();
	if (forms[formName].currentBundle == "" || forms[formName].currentStatus == "" || forms[formName].currentJob == ""){return}
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	forms['rf_mobile_view'].genericInput = '';
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	flagF8 = (flagFunction != null);
	if (flagF8){
		if (formName == 'rf_mobile_view'){
			f8ReversalText = forms[formName].viewTitle;
			forms[formName].viewTitle = "Remove Bundle ID "+session.association;
			
		} else {
			f8ReversalText = forms[formName].elements.transShop.text;
			forms[formName].elements.transShop.text = "Remove Bundle ID "+session.association;
		}
		f8ReversalColor = forms[formName].elements.transShop.bgcolor;
		forms[formName].elements.transShop.bgcolor = 'Yellow';
		forms[formName].controller.focusField('current',false);
	} else {
		forms[formName].controller.focusField('status',false);
		forms[formName].elements.transShop.bgcolor = f8ReversalColor;
		if (formName == 'rf_mobile_view'){
			forms[formName].viewTitle = f8ReversalText;
		} else {
			forms[formName].elements.transShop.text = f8ReversalText;
		}
	}
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
	//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
	}

	//forms['rf_mobile_view'].elements['genericin'].requestFocus();
}
/**
 * @properties={typeid:24,uuid:"2A4C51DF-ADA9-41D8-A90C-58CD628A7D94"}
 */
function rfF5BundlePrint(event){
	var form = forms['rf_mobile_view'];
	form.genericInput = '';
	if (application.isInDeveloper()){application.output('entered F5 bundle print')}
	if (!form.jobNumber || !form.currentBundle){return}
	if (application.isInDeveloper()){application.output('entered F5 bundle print. still here')}
	if (!mob.bundleFS){return}//20200827 bundle error if nothing to print
	var idfileRec = mob.bundleFS.getRecord(1);
	if (idfileRec){
		scopes.jobs.printSingleLabel(event,form.jobNumber,idfileRec.piecemark_id,idfileRec.idfile_id);
		globals.printedLabelsShowError(event);
	}
}
/**
 * @properties={typeid:24,uuid:"C6BC4E31-48AF-4700-B20B-19AE5A8F3D9A"}
 */
function rfF6BundlePrintList(){
	session.functionName = 'F6BundlePrintList';
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var form = forms['rf_mobile_view'];
	if (!form.currentBundle || !form.jobNumber){return}
	form.functionKeyEntered = true;
	var inProgress = (thisFunction == flagFunction); // toggle function
	//flagFunction = (inProgress) ? null : thisFunction;
	
	//if (form.elements['btn_print1'].visible){
	//	renderPrinterBtns(form,false);
	 //} else {
	renderPrinterBtns(form,true);
	// }
}
/**
 * @AllowToRunInFind
 * 
 * Remove P-F1 Q-F2 R-F3 S-F4 T-F5 U-F6 V-F7 W-F8 X-F9 Y-F10
 * @param {String} oldValue
 * @param {String} newValue
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F581F607-96B6-4354-8A36-582E90AE4659"}
 */
function onDataChangeFixEntry(oldValue,newValue,event){
	//xif (1==1){return}//disabled fixentry on entries xxx
	if (newValue == null || newValue == ""){return false}
	var formName = event.getFormName().trim();
	var elemName = event.getElementName();
	var entry = event.getSource().getDataProviderID();
	var form = forms[formName];
	//var value = variable[entry];
	if (newValue.length == 1){
		if (newValue.length == 1 && newValue.search(/[R-Z]/) != -1){
			forms[formName].elements[elemName].requestFocus();
			form[entry] = "";
			return true;
		}
	}
	var charx = "";
	charx = newValue[newValue.length-1];
	if (!oldValue){oldValue = ""} // sometimes there is not prior value

	if ((newValue.length - oldValue.length) == 1 && (charx.search([/R-Z/])) != -1){
		form[entry] = oldValue;
		forms[formName].controller.focusField(elemName,true);
		return true;
	}
	return false;
}
/**
 * @properties={typeid:24,uuid:"C4B8F68F-CEC1-4450-A503-39AFDF7D0EF4"}
 */
function rfGetSpecsBundle(){
	bundleGetIdfilesByBundle();
	var index = 1;
	var count = 0;
	var weight = 0;
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var pmRec = null;
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var rec = null; index = 1; var pcmkSeen = [];
	mob.bundleFS.sort('piecemark_id asc');
	while (rec = mob.bundleFS.getRecord(index++)){
		count = count*1+rec.summed_quantity*1;
		if (!pcmkSeen[rec.piecemark_id]){//sorting foundset may work better, later
			/** @type {QBSelect<db:/stsservoy/piecemarks>} */
			var q = databaseManager.createSelect('db:/stsservoy/piecemarks');
			q.result.add(q.columns.piecemark_id);
			q.where.add(q.columns.piecemark_id.eq(rec.piecemark_id.toString()));
			var Q = databaseManager.getFoundSet(q);
			pmRec = Q.getRecord(1);
		}
		var pcmkWght = (mob.job.metric == 1) ? pmRec.item_weight : pmRec.item_weight_lbs;
		//pcmkWght = (pmRec.parent_piecemark == pmRec.piecemark) ? pcmkWght : 0;//bundle weight only meant for Major marks 20180525
		pcmkWght = (pmRec.is_assembly == 1) ? pcmkWght : 0;//bundle weight only meant for Major marks 20180525
		if (!pcmkSeen[rec.piecemark_id]){
			pcmkSeen[rec.piecemark_id] = pcmkWght;
		}
		null;
		weight = weight*1+rec.summed_quantity*pcmkWght;
	}
	mob.bundle.pieces = count;
	mob.bundle.weight = weight;
	mobBundlePieces = count;
	mobBundleWeight = weight;
}
/**
 * @properties={typeid:24,uuid:"41EC2CC6-86DA-4AE0-931E-EDC0E4C255E8"}
 * @SuppressWarnings(wrongparameters)
 */
function bundleGetIdfilesByBarcode(){
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.bundle_bc);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);
	
	q.where.add(q.columns.delete_flag.isNull)
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	q.where.add(q.columns.bundle_bc.eq(mob.bundle.Id))
	q.where.add(q.columns.id_serial_number_id.eq(mob.barcodeId.toString()))
	mob.bundleFS = databaseManager.getFoundSet(q);

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
 * @properties={typeid:24,uuid:"516FE600-12F1-4E61-A63F-AD807BBD6AD7"}
 */
function onDataChangeRevision(oldValue, newValue, event) {
	if (onDataChangeFixEntry(oldValue,newValue,event)){return true;}
	var formName = event.getFormName();
	var elementName = event.getElementName();
	//if (forms[formName].entryRequired(elementName)){
	//	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//}
	session.userEntry = newValue;
	if (forms['rf_mobile_view']){forms['rf_mobile_view'].drawingRevision = newValue}
	mob.currentRevision = newValue;
	///var formName = event.getFormName();
	//if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	//if (event.getElementName() != 'genericin'){
	//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
	//}
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
	//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
	}

	//rfEmptyNextField(event,'currentidin');
	return true
}
/**
 * @properties={typeid:24,uuid:"5ABFDE9C-5CA7-4725-8FA3-979017DF804D"}
 */
function setTransShop(){
	var win = application.getActiveWindow();
	var formName = win.controller.getName();
	if (globals.transShopText[formName] == undefined){
		globals.transShopText[formName] = session.program;
	}
	forms[formName].viewTitle = session.program+" "+session.association;
	forms[formName].controller.focusField(session.errorElement,true);
	//forms[formName].controller.focusField('status',true);
	//elements.status.requestFocus();
}

/**
 * Perform the element default action.
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8CF384CA-21DF-412A-A399-7789AF85E5F8"}
 */
function onDataChangeLoad(oldValue, newValue, event) {
	//session.loadId = oldValue;
	var formName = event.getFormName();
	var baseForm = getBaseFormName(null);
	if (onDataChangeFixEntry(oldValue,newValue,event)){return true;}
	var elementName = event.getElementName();

	if (!newValue){
		newValue = getNextLoadNumber()
	}
		//var status = scopes.fs.checkFSLoad(newValue,true);
		//var dataProv = forms[formName].elements[event.getElementName()].getDataProviderID();
		//if (status != null){
		//	forms[formName][dataProv] = oldValue;
		//	return true;
		//}
	//}
	session.jobIdBack = session.jobId;
	if (forms[formName].vJobRec && forms[formName].vJobRec.job_id){
		session.jobId = forms[formName].vJobRec.job_id.toString();
	}
	var loadExists = false;
	loadExists = loadNumberCheck(event,newValue); // resolves ticket #160
	if (loadExists){// need to use existing load number of receiving, etc
		session.userEntry = newValue;
		session.loadNumber = newValue;
		mobLoadNumber = newValue;
		loadNumber = newValue;
	} else {
		//onFocusClear(event);
		return true; // resolves ticket #160, check action within STS3
	}
	mobLoadWeight = 0;
	if (newValue && newValue != ""){
		//rfGetSpecsLoad(session.program);
		rfGetLoadStats(session.loadId);//loadGetData();
	}
	//session.loadId = session.loadIdBack;
	session.jobId = session.jobIdBack;
	//if (formName == 'rf_mobile_view'){
	switch (baseForm) {
		case 'piecemark':
			if (application.isInDeveloper()){application.output('form '+formName+' session '+session.program)}
			forms[formName].vLoadWeight = mobLoadWeight;
			
			break;
		default:
			if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
			//if (event.getElementName() != 'genericin'){
			//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
			//}
			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//focusFirst()
			//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
				//plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
			}
	}
	return true;
}
/**
 * @param xml
 * @param searchName
 * @param returnBool
 *
 * @properties={typeid:24,uuid:"08E934BD-52F8-4F8A-B600-96CFF592D6C5"}
 */
function xmlTraverse(xml,searchName,returnBool){
	//application.output("Entry length "+xml.length());
	if (xml.length() == 1){
		//application.output("XML children "+xml.name().toString());
		if (xml.name().toString() == searchName) {
			if (returnBool){
				return (xml.children().toString() == "1");
			} else {
				return xml.name().toString();
			}
		} else {
			if (xml.elements().toString() == ""){
				return null;
			} else {
				//var newValue = false;
				for (var index = 0; index <= xml.elements().length();index++){
					//application.output("xml children "+index+" "+xml.children());
					return xmlTraverse(xml.elements()[index],searchName,returnBool);
					//if (value != false && newValue != false){newValue = value} // will be false if no match on searchName
				}
				//return newValue;
				//return xmlTraverse(xml.elements()[0],searchName,returnBool);
			}
		}
	} else {
		//application.output("xml length "+xml.length());
		for (index = 0; index <= xml.length();index++){
			//application.output("xml children "+index+" "+xml.children());
			return xmlTraverse(xml.elements()[index],searchName,returnBool);
		}
	}
}
/**
 * @param xml
 * @param searchName
 * @param returnBool
 *
 * @properties={typeid:24,uuid:"E71A1596-CF91-4C90-96B1-32819DFAFDDD"}
 */
function xmlTraverse2(xml,searchName,returnBool){
	//application.output("Entry length "+xml.length());
	
	if (xml.name().toString() == searchName){
		if (returnBool){
			return (xml.children().toString() == "1");
		} else {
			return xml.children().toString();
		}
	} else if (xml.elements().length() == 0){
		if (returnBool){
			return false;
		} else {
			return "";
		}
	}
	for (var index = 0; index < xml.elements().length();index++){
		//application.output("xml elements "+index+" "+xml.elements());
		var last = xmlTraverse2(xml.elements()[index],searchName,returnBool);
		if (returnBool){
			if (last)
				{return last}
		} else {
			if (last != "")
				{return last}
		}
	}
	return null;
}

/**
 * @param xml
 *
 * @properties={typeid:24,uuid:"0B1C212A-58AD-42F4-89A1-40D104756C4F"}
 */
function xmlSuccess(xml){
	///xml.children()[0].elements().children().toString() = 1:0 // xml.children()[0].elements().name() = xml_name
	return xmlTraverse(xml,"Successful",true);
}
/**
 * @param {String} loadNumber
 * @param {Boolean} makeInterimLoad
 * 
 * @properties={typeid:24,uuid:"B9F40AA1-D225-4798-B459-69464D66EC48"}
 */
function loadCreateValid(loadNumber,makeInterimLoad){
	/** @type {JSRecord<db:/stsservoy/loads>} */
	var latestRec = null;
	if (scopes.prefs.lLoadCopy){
		latestRec = session.jobLoads.getRecord(1);
	}
	if (makeInterimLoad){mob.load.interim = true}
	//var fsNextTruck = scopes.fs.checkFSNextLoad();
	//if (fsNextTruck && session.loadNextNumber < fsNextTruck){
	//	session.loadNextNumber = fsNextTruck;
	//}
	var idx = session.jobLoads.newRecord();
	/** @type {JSRecord<db:/stsservoy/loads>} */
	var rec = session.jobLoads.getRecord(idx);
	if (latestRec){
		databaseManager.copyMatchingFields(latestRec,rec);
		rec.ship_date = null;
		rec.edit_date = null;
		rec.email_receive = null
		rec.email_sent = null;
		rec.ft_loadid = null;
		rec.interim_load = null;
		rec.load_comment = null;
		rec.load_release = null;
		rec.logic_flag = null;
		rec.receipt_date = null;
		rec.receiving_weight = null;
		rec.sent_engineer = null;
		rec.sent_fabrication = null;
		rec.sent_fireproofer = null;
		rec.sent_galvinizer = null;
		rec.sent_other = null;
		rec.sent_painter = null;
		rec.sent_site = null;
	}
	rec.job_id = session.jobId;
	rec.tenant_uuid = session.tenant_uuid;
	rec.edit_date = new Date();
	rec.create_date = rec.edit_date;
	rec.interim_load = makeInterimLoad;
	rec.total_weight = 0;
	rec.shipped_weight = 0;
	rec.load_number = loadNumber;
	/** if (session.jobLoads.getSize() == 0){
		rec.load_number = "";
	} else {
		if (typeof session.loadNextNumber == 'number'){
			rec.load_number = Math.floor(session.loadNextNumber);
		} else {
			rec.load_number = session.loadNextNumber;
		}
	} */
	session.loadId = rec.load_id;
	databaseManager.saveData(rec);
	return rec;
}
/**
 * @properties={typeid:24,uuid:"B3C67350-888C-4A06-8D5D-3A86419207FA"}
 * @SuppressWarnings(wrongparameters)
 */
function loadGetJobDataset(jobId){
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var q = databaseManager.createSelect('db:/stsservoy/loads');
	q.result.add(q.columns.load_id);
	q.result.add(q.columns.load_number);
	q.result.add(q.columns.interim_load);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	if (scopes.prefs.loadCreate != i18n.getI18NMessage('sts.label.hardware.load.calculation.auto.system.wide.specific')){
		q.where.add(q.columns.job_id.eq(jobId.toString()));
	}
	q.sort.add(q.columns.create_date.desc);
	var resultQ = databaseManager.getFoundSet(q);
	return resultQ;
}
/**
 * @param {JSEvent} event
 * @param {String} loadNumber
 *
 * @properties={typeid:24,uuid:"D58305BB-65A5-408E-8A59-65F09D000020"}
 * @AllowToRunInFind
 */
function loadNumberCheck(event,loadNumber){
	/**
	 * i18n:sts.label.hardware.load.calculation.auto.job.specific
	 * i18n:sts.label.hardware.load.calculation.auto.system.wide.specific
	 * i18n:sts.label.hardware.load.calculation.auto.none
	 * if L entered along, auto load number is calculated
	 * if Lxxx, then if it exists, allow it
	 * if it does not, ask for creation and interim selection
	 * 
	 */
	//getNextLoadNumber();
	/** @type {JSFoundSet<db:/stsservoy/loads>} */
	session.jobLoads = loadGetJobDataset(session.jobId);
	session.loadId = null;
	/**
	 * loadnumber check FS and STS
	 * newLoadNumber check FS and STS
	 * 
	 */

	var thirdPartyLoad = '';
	var thirdPartyCheck = true;
	if (loadNumber){
		if (scopes.prefs.lFabsuiteInstalled && session.jobIsFabSuite){
			//var thirdPartyLoadExists = scopes.fs.checkFSLoad(loadNumber,'','',false);
			thirdPartyLoad = scopes.fs.checkFSLoad(loadNumber,'','',false);
			 thirdPartyCheck = ((thirdPartyLoad && thirdPartyLoad.search(/does not exist/) == -1) || !thirdPartyLoad);
			application.output('returned error '+thirdPartyLoad)
		}
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		var rec = null; var index = 1;var noNextNum = (loadNumber.toString().search(/[^0-9]/) != -1);
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		var foundRec = null;
		if (typeof loadNumber == 'string'){loadNumber = loadNumber.trim()}
		while (rec = session.jobLoads.getRecord(index++)){
			if (rec.load_number.toString() == loadNumber.toString()){
				session.loadId = rec.load_id;
				foundRec = rec;
				//if (rec.ship_date || (flagF8 && session.program == i18n.getI18NMessage('sts.mobile.final.ship'))){//check what constitutes shipped in load table
				//	rfErrorShow(i18n.getI18NMessage('1268'));
				//	forms['rf_mobile_view'].loadNumber = '';
				//	return false;
				//}
				//session.loadNextNumber = rec.load_number;
				//break;
			}
			if (rec.load_number.search(/[^0-9]/) != -1){
				//session.loadNextNumber = 0;//no simple way to determine next number. cause return of 1 to user
				continue;//noNextNum = true;
			}
			//if (noNextNum){continue}
			//session.loadNextNumber = (session.loadNextNumber*1 < rec.load_number*1) ? rec.load_number : session.loadNextNumber;
			//session.loadNextNumber = Math.floor(session.loadNextNumber);
		}
	}
	//session.loadNextNumber = session.loadNextNumber++;
	/**if (scopes.prefs.lFabsuiteInstalled && session.jobIsFabSuite){
		var fsNextLoad = scopes.fs.checkFSNextLoad();
		if (fsNextLoad.toString().search(i18n.getI18NMessage('sts.interface.fabsuite')) != -1){
			session.loadId = null;
			session.loadNextNumber = 0;
			errorDialogMobile(event,1024,'genericin',fsNextLoad);
			return false;
		}
		if (session.loadNextNumber < fsNextLoad){
			session.loadNextNumber = fsNextLoad;
		}
	} */
	if (!session.loadId){ // receiving and final ship cannot create new load numbers
		if (thirdPartyCheck){
			session.loadNextNumber = loadNumber;//20200826 load number fails to create although in EPM
		} else {
			getNextLoadNumber();
		}
		switch (session.program){
			case mobileWindows[i18n.getI18NMessage('sts.mobile.receiving')]:
			case mobileWindows[i18n.getI18NMessage('sts.mobile.final.ship')]:
				// error message that must use existing load number, number does not exist
				globals.errorDialogMobile(null,301,'loadnumberin',null);//301 This Load was not found.
				globals.logger(true,i18n.getI18NMessage('sts.txt.load.does.not.exist'));
				return false;
				break;
			default:
				if (scopes.prefs.loadCreate == i18n.getI18NMessage('sts.label.hardware.load.calculation.auto.none')){
					globals.errorDialogMobile(null,301,'loadnumberin',null);//301 This Load was not found.
					globals.logger(true,i18n.getI18NMessage('sts.txt.load.does.not.exist'));
					return false;
				}
				var form = forms[event.getFormName()];
				var dataProv = form.elements['loadnumberin'].getDataProviderID();
				//if (noNextNum || loadNumber != ''){session.loadNextNumber = loadNumber}
				if (!loadNumber || thirdPartyCheck){loadNumber = session.loadNextNumber}//no STS load number returned and 3rd party load exists, skip 3rd party number
				var message = i18n.getI18NMessage('301')+' '+i18n.getI18NMessage('sts.txt.load.use.new.number')+loadNumber+'?';
				
				var dualEntry = (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT &&
				forms['rf_mobile_view'] &&
				forms['rf_mobile_view'].elements['genericin2'].visible);
				if (dualEntry) {//cannot do this in safari
					application.output('Using alternate dialogs');
					clearDialogData(event);
					rfYesNoDialog.text = message;
					rfYesNoDialogText = message;
					rfYesNoDialog.load_number = loadNumber;
					showYesNoDialog(event);
					return true;
				}
			
			

				var response = globals.DIALOGS.showQuestionDialog(
					i18n.getI18NMessage('sts.txt.load.new.number'),
					message,
					i18n.getI18NMessage('sts.btn.no'),
					i18n.getI18NMessage('sts.btn.yes'));
					//'New Load Number?', message, 'NO', 'yes');
				if (response == i18n.getI18NMessage('sts.btn.no')){
					session.loadId = null;
					session.loadNextNumber = 0;
					form[dataProv] = '';
					//onFocusClear(event);
					return false;
				} else {
					mob.load.interimDest = '';//reset interim load to nope
					mob.load.interim = false;
					response = i18n.getI18NMessage('sts.btn.no');//prefs to permit interim shipments or not
					if (scopes.prefs.lAllowInterimShipments){
						response = globals.DIALOGS.showQuestionDialog(
							i18n.getI18NMessage('sts.txt.load.use.interim.load'),
							i18n.getI18NMessage('sts.txt.load.use.interim.load'),
							i18n.getI18NMessage('sts.btn.no'),
							i18n.getI18NMessage('sts.btn.yes'));
					}
					var interimLoad = (response == i18n.getI18NMessage('sts.btn.yes'));
					if (interimLoad){
						//query FS and other about interim load here
						var dests = getDestinationList(event);
						var destStr = i18n.getI18NMessage('sts.txt.interim.destination.set');
						for (var idx = 0;idx < dests.length;idx++){
							var nextDestNum = idx + 1;
							destStr += '\n    '+nextDestNum+' - '+dests[idx];
						}
						for (idx = 18;idx < 6;idx++){
							destStr += '\n    '+idx+' - '+'TEST';
						}
						globals.DIALOGS.setStylesheet('sts_mc');
						var interimDest = -1;
						while (interimDest < 1 || interimDest > destStr.length){
							interimDest = globals.DIALOGS.showInputDialog(i18n.getI18NMessage('sts.txt.interim.destination.select'),destStr,'1');
							if (!interimDest){break}
						}
						var destination = '';
						var toBeReturned = false;
						if ((!interimDest) || interimDest == 1){//chose Cancel or <NONE>
							destination = null;
						} else {
							destination = dests[interimDest-1];
							response = globals.DIALOGS.showQuestionDialog(
							i18n.getI18NMessage('sts.txt.load.to.be.returned'),
							i18n.getI18NMessage('sts.txt.load.to.be.returned'),
							i18n.getI18NMessage('sts.btn.no'),
							i18n.getI18NMessage('sts.btn.yes'));
							toBeReturned = (response == i18n.getI18NMessage('sts.btn.yes'));
						}
						if (!destination){
							errorDialogMobile(event,302,'genericin',loadNumber);
							form[dataProv] = '';
							session.loadId = null;
							session.loadNextNumber = 0;
							return false;
						}
					}
					if (loadNumber){
						if (scopes.prefs.lFabsuiteInstalled && session.jobIsFabSuite){
							/** var fsNextLoad = scopes.fs.checkFSNextLoad();
							if (fsNextLoad.search(i18n.getI18NMessage('sts.interface.fabsuite')) != -1){
								session.loadId = null;
								session.loadNextNumber = 0;
								errorDialogMobile(event,1024,'genericin',fsNextLoad);
								return false;
							}
							if (session.loadNextNumber < fsNextLoad){
								session.loadNextNumber = fsNextLoad;
							} */
							if (interimLoad){
								var fsLoadNum = scopes.fs.checkFSLoad(loadNumber,destination,toBeReturned,true);
							} else {
								fsLoadNum = scopes.fs.checkFSLoad(loadNumber,'','',true);
							}
							if (fsLoadNum != null){
								form[dataProv] = '';
								errorDialogMobile(event,1024,'genericin',loadNumber);
								return false;
							}
						}
					}
					rec = loadCreateValid(loadNumber,interimLoad);
					foundRec = rec;
					session.loadId = rec.load_id;//20181003
				}
		}
	}
	mob.load.currentId = session.loadId;
	session.interim = (foundRec.interim_load == 1); 
	if (!foundRec){
		//forms['rf_mobile_view'].loadNumber = session.loadNextNumber;
		//forms['rf_mobile_view'].loadNumber = forms['rf_mobile_view'].loadNumber.split('.')[0];
	} else {
		forms['rf_mobile_view'].loadNumber = loadNumber;
	}
	return true;
}
/**
 * @properties={typeid:24,uuid:"6066817D-C13B-4A0E-9D8E-52975049DD6A"}
 */
function rfClearMobDetails(){
	var win = application.getActiveWindow();
	var formName = win.controller.getName();
	forms[formName].foundset.clear();
	
	mobItemWeight = 0;
	mobItemWidth = 0;
	mobItemLength = 0;
	mobLoadWeight = 0;
	mobLoadPieces = 0;
	mobLocationWeight = 0;
	mobLocationPieces = 0;
	mobLocationPiecemarks = 0;
	mobPreviousLocation = "";
	mobPreviousStatus = "";
	mobItemPieces = "/";
	mobUnits = "";
	if (formName == 'rf_mobile_view'){
		var form = forms[formName];
		mobBundlePieces = 0;
		mobBundleWeight = 0;
		//form.associatedCutRatio = '';
		form.location = '';
		form.stockLocation = '';
		form.statusLocation = '';
		form.statusCode = '';
		form.billOfLading = '';
		form.remarks = '';
		form.asnNumber = '';
		form.poNumber = '';
		form.invOrdered = '';
		form.invRemains = '';
		form.invMaterial = '';
		form.invGrade = '';
		form.invBarCode = '';
		form.bundled = '';
		form.currentBundle = '';
		form.jobNumber = '';
		form.finalize = '';
		form.countryOfOrigin = '';
		form.heat = '';
		form.quantity = '';
		form.lastQty = '';
		form.quantity = '';
		form.rawBarcode = '';
		form.cutlistBarcode = '';
		form.strikeThru = '';
		form.nonStrikeLength = '';
		form.allLength = '';
		form.dropLength = '';
		form.dropWidth = '';
		form.currentID = '';
		form.laborPercentToday = '';
		form.elements['genericinlabel'].text = i18n.getI18NMessage('sts.label.generic');
		form.elements['genericin2label'].text = i18n.getI18NMessage('sts.label.generic');
	}
	
	globals.mobIdSerialId = null; // reset mob info area for last item
}
/**
 * @properties={typeid:24,uuid:"086D6F6D-51BA-49B4-B814-400592D19EC7"}
 */
function rfTimerBrowser(){
	plugins.scheduler.removeJob('retryGetBrowserData');
	var newDate = new Date();
	var endDate = new Date(newDate.getTime()+30000);
	plugins.scheduler.addJob('retryGetBrowserData', newDate, globals.rfGetWebBrowser, 5000, 10, endDate);
}
/**
 * @param browserName
 *
 * @properties={typeid:24,uuid:"50271334-0D1F-44EE-B53F-48688F8104F3"}
 * @AllowToRunInFind
 */
function rfWebBrowser(browserName){
	session.browser = browserName;
	//application.output('browsername '+browserName);
	/**	if (session.browser != ""){
		if (session.browser.search("WebKit")){ //Mozilla/5.0 (WebKit; U; /Windows CE 5.0) AppleWebKit/534.51 (KHTML, like Gecko) Version/3.0.2 Mobile Safari/534.51
			plugins.WebClientUtils.executeClientSideJS('var p2deviceName=EB.System.getProperty("deviceName");',globals.rfEBdeviceName,['p2deviceName']);
			if (session.enterpriseBrowser != ""){
			application.output('x '+session.enterpriseBrowser+'\n'+session.browser);
				rfSetLocalStorage('deviceName',session.enterpriseBrowser);
				plugins.scheduler.removeJob('retryGetBrowserData');
				application.output('done removed and devname');
				rfSetLocalStorage('deviceName',session.enterpriseBrowser);
				rfGetLocalStorage('deviceName');
				application.output('dev name '+session.localStorage);
			}
			//rfGetLocalStorage('deviceName');
		}
		//application.output('removing device timer '+ session.enterpriseBrowser+"\n"+session.browser);
		
	}
	*/
}
/**
 * @properties={typeid:24,uuid:"CBE0CFF5-3210-42AD-9AF8-B0B58D200AED"}
 */
function rfGetWebBrowser(){
	plugins.WebClientUtils.executeClientSideJS('var p2browser=navigator.userAgent;',globals.rfWebBrowser,['p2browser']);
}
/**
 * @properties={typeid:24,uuid:"C613EDF0-E17A-46F5-9159-0E0E04B1A468"}
 */
function rfGetMobileDevice(){
	application.output('test');
	plugins.WebClientUtils.executeClientSideJS('var p2deviceName=EB.System.getProperty("deviceName");',globals.rfEBdeviceName,['p2deviceName']);
}
/**
 * @param deviceName
 *
 * @properties={typeid:24,uuid:"1D40EA6F-1A57-4B6B-A6F1-CBC03F506394"}
 */
function rfEBdeviceName(deviceName){
	//application.output('eb devicename ');
	session.enterpriseBrowser = deviceName;
	//application.output('eb devicename '+deviceName);
}
/**
 * @param varName
 *
 * @properties={typeid:24,uuid:"CA10A831-E8FE-48CD-9CC0-44B56DBE7578"}
 */
function rfGetLocalStorage(varName){
	var askJS = 'var p2localStorage = localStorage.getItem("'+varName+'");var p2Query = "'+varName+'";';
	//var askJS = 'var p2localStorage = localStorage.getItem(\''+varName+'\');alert("p2 "+p2localStorage);';
	//var askJS = 'alert("dev "+localStorage.deviceName);';
	//var args = [];
	//args.push('"'+varName+'"');
	if (application.isInDeveloper()){application.output(askJS);}
	plugins.WebClientUtils.executeClientSideJS(askJS,globals.rfLocalStorage,["p2localStorage","p2Query"]);
	//plugins.WebClientUtils.executeClientSideJS('alert("final");');
}
/**
 * @param varName
 * @param varValue
 *
 * @properties={typeid:24,uuid:"9B6682F6-7655-4582-9851-9585B2A828EA"}
 */
function rfSetLocalStorage(varName,varValue){
	if (varValue == ""){return}
	var setJS = 'localStorage.'+varName+'="'+varValue+'";';
	if (application.isInDeveloper()){application.output(setJS);}
	plugins.WebClientUtils.executeClientSideJS(setJS);
}
/**
 * @param storedValue
 * @param itemName
 *
 * @properties={typeid:24,uuid:"F725018B-9162-49D1-8CE5-886038FB9D2F"}
 */
function rfLocalStorage(storedValue,itemName){
	if (application.isInDeveloper()){application.output('returned from client, '+itemName+ '='+storedValue);}
	session.localStorage = storedValue;
}
/**
 * @properties={typeid:24,uuid:"FF4938C6-CE14-47A9-9AF6-582042030578"}
 */
function rfLocalStorageLength(){
	if (application.isInDeveloper()){verifySerialCodes()}
	//plugins.WebClientUtils.executeClientSideJS('localStorage.fred="dog";');
	//plugins.WebClientUtils.executeClientSideJS('alert("ls length "+localStorage.length);');
	//plugins.WebClientUtils.executeClientSideJS('alert(localStorage.browser);');
	//rfGetLocalStorage('deviceName');
	//application.output(session.localStorage);
	if (application.isInDeveloper()){application.output('--------------------------\nbrowser: '+session.browser+'\nDevice: '+session.enterpriseBrowser+ '\n---')}

}
/**
 * @param args
 *
 * @properties={typeid:24,uuid:"DEFBE01A-664B-4492-8C12-3C541DA82AE3"}
 */
function rfPageIsLoaded(args){
	rfGetLocalStorage('device');
	rfGetLocalStorage('browser');
	if (application.isInDeveloper()){application.output('Initial browser: '+session.browser+'\nDevice: '+session.enterpriseBrowser+ '\n---')}
	rfGetWebBrowser();
	rfGetMobileDevice();
	//plugins.WebClientUtils.executeClientSideJS('var p2browser=navigator.userAgent;',globals.rfWebBrowser,['p2browser']);
	//plugins.WebClientUtils.executeClientSideJS('var p2deviceName=EB.System.getProperty("deviceName");',globals.rfEBdeviceName,['p2deviceName']);
	
	if (application.isInDeveloper()){application.output('Page is loaded\n--------------------------------------------------\nbrowser: '+session.browser+'\nDevice: '+session.enterpriseBrowser+ '\n---')}
}
/**
 * @properties={typeid:24,uuid:"7BC067CF-2321-4FDD-9CE6-D77ADF4E7A49"}
 * @SuppressWarnings(wrongparameters)
 */
function loadGetData(){
	//session.loadId already set. Set load.weight and load.pieces from collecting all of the 
	// records that have the load number.
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.bundle_bc);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);
	
	if (session.loadNumber == "ALL"){
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			//.add(q.columns.ship_load_id.eq(session.loadId.toString()))
		);
	} else {
		q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.current_load_id.eq(session.loadId.toString()))
		);
	}
	var samp = databaseManager.getFoundSet(q);
	if (application.isInDeveloper()){application.output('load size '+samp.getSize()+' load '+session.loadId+' session '+session.tenant_uuid)}
	var weight = 0;
	var count = 0;
	var metric = (mob.job.metric == 1);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var rec = null; var index = 1;
	//for (var index = 1;index <= samp.getSize();index++){
	while (rec = samp.getRecord(index++)){
		count = count+rec.summed_quantity;
		if (metric){
			weight = weight+rec.summed_quantity*rec.sts_idfile_to_pcmks.item_weight;
		} else {
			weight = weight+rec.summed_quantity*rec.sts_idfile_to_pcmks.item_weight_lbs;
		}
		
	}
	weight = Math.floor(weight*1+0.5);
	mob.load.pieces = count;
	mob.load.weight = weight;
	mobLoadWeight = mob.load.weight;
	mobLoadPieces = mob.load.pieces;
	mobWeightUnits = (metric) ? 'kgs' : "lbs";
	mobLengthUnits = (metric) ? "mm" : "ins";
}
/**
 * @properties={typeid:24,uuid:"E4E8F337-8479-4FED-99BD-33061E69290D"}
 */
function barcodeShipped(){
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfile = mob.idfile;
	return (idfile.ship_load_id != null && idfile.ship_load_id != '');
}
/**
 * @properties={typeid:24,uuid:"AA64E621-15F1-479D-BD17-6E97D2A2F02A"}
 */
function barcodeInLoad(){
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfile = mob.idfile;
	if (application.isInDeveloper()){application.output('ship load id '+idfile.ship_load_id+ '= '+mob.load.shipId);}
	return (idfile.ship_load_id == mob.load.shipId);
}
/**
 * @properties={typeid:24,uuid:"098FEBC7-2052-4C05-87D9-1FF59AC1E752"}
 */
function barcodeInAnotherLoad(){
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfile = mob.idfile;
	return (idfile.ship_load_id != '' && idfile.ship_load_id != null && idfile.ship_load_id != mob.load.shipId);
}
/**
 * @param millimeters
 *
 * @properties={typeid:24,uuid:"E144DCE6-B7D9-454D-9167-A7F5E8D6C7C0"}
 */
function mmToFeet(millimeters){
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
 * @properties={typeid:24,uuid:"6E717C02-AABD-4203-B8E4-7EC66B1C5922"}
 * @AllowToRunInFind
 */
function ftDecToString(convertType, decimal, length, returnType){
	/**
	* convertType - type of conversion, inches or feet
	* decimal  - decimal value passed to program
	* length - length of return string
	* returnType - if left blank or not passed to this function, return
	*	the string equivalent of the numeric
	*	FEET - return the foot portion of the decimal
	*	INCH - return the inch portion of the decimal
	*	NUMERATOR - return the numerator
	*	DENOMINATOR - return the denominator

	* fraction - text version of decimal value

	* pass a numeric value that will be converted to feet and inches and
	*  this function will return the text version of that decimal value
	*/
	//if (application.isInDeveloper()){application.output(decimal)}
	convertType = convertType.toUpperCase();
	returnType = (returnType) ? returnType.toUpperCase() : returnType;
	///var itemdimen = "";
	var fractionOut = "";
	var feet = 0;
	var base = 2;                           //denominator of fraction
	var number = 0;
	var fraction = 0;
	var number2 = 0;
	var number16 = 0;
	var fraction2 = 0;
	var inches = 0;
	
	number = Math.floor(decimal);
	fraction = decimal - number;
	switch( convertType ){
		case 'INCHES':
			inches = number;
			if (number < 0){
				feet = 0; //zero feet
				inches = 0; // zero inches
			}
			feet = Math.floor(inches/12); //zero feet
			inches = Math.floor(inches-feet*12); // zero inches

			//var minVal = 999;
			//var minInit = 0;
			//var minBase = 0;
			//if (application.isInDeveloper()){application.output('fraction input: '+fraction)}
			if (fraction > 0){
				fractionOut = fraction16(fraction);
				if (fractionOut == "1"){
					inches += 1;
					fractionOut = '';
				}
				/**
				while (base <= 16){
					number2 = Math.floor(fraction * base);
					fraction2 = (fraction * base) - number2;
					if (fraction2 != 0){
						if (minVal >= fraction2){
							minVal = fraction2;
							minInit = number2;
							minBase = base;
						}
						base = base * 2;
					} else {
						break;
					}
				}
				if (base <= 16){ //fraction within 16ths of an inch
					var itemdimen = feet + "'-" + number + " " + number2 + "/" + base + '"';
				} else {
					itemdimen = feet + "'-" + number + " " + minInit + '/'+minBase+'"';
				} */
			} else {
				if (number == 0 && feet == 0){
					itemdimen = '0"';
				} else {
					itemdimen = feet + "'-" + number + '"';
				}
			}
			//if (application.isInDeveloper()){application.output('fraction: '+number2+'/'+base)}
			//if (number2 > 0){fractionOut = number2+'/'+base}
			break;
		case 'FEET':
			if (number > 0){
				feet = Math.floor(number/12) //whole feet
				inches = number - (feet *12); //inches
			} else {
				feet = 0; //zero feet
				inches = 0; // zero inches
			}
			//var minVal = 999;
			//var minInit = 0;
			//var minBase = 0;
			//if (application.isInDeveloper()){application.output('fraction input: '+fraction)}
			if (fraction > 0){
				fractionOut = fraction16(fraction);
				if (fractionOut == "1"){
					inches += 1;
					fractionOut = '';
					if (inches/12 == Math.floor(inches/12)){
						inches -= (12*Math.floor(inches/12));
						feet += Math.floor(inches/12);
					}
				}
				/**
				while (base <= 16){
					var candidate = fraction * base;
					application.output(candidate+' '+base);
					if (candidate*1 >= 1){break}
					base = base * 2;
				}
				var round = candidate-Math.floor(candidate);
				if (candidate*1 < 1 && candidate*1 >= .5){
					base = base / 2;
					candidate = Math.ceil(candidate);
				} else if (candidate < .5){
					base = 1;
					candidate = 0;
				}  else if (round*1 >= .5){
					base = base / 2;
					candidate = Math.floor(candidate);
				} else {
					candidate = Math.ceil(candidate);
				}
				application.output('round: '+round+' '+candidate+'/'+base)
				if (1==1){return candidate+'/'+base} */
				/**
				while (base <= 16){
					number2 = Math.floor(fraction * base);
					fraction2 = (fraction * base) - number2;
					if (fraction2 >= 0){
						if (minVal >= fraction2){
							minVal = fraction2;
							minInit = number2;
							minBase = base;
						}
						base = base * 2;
					} else {
						break;
					}
				} */
				//if (base <= 16){ //fraction within 16ths of an inch
				//	var itemdimen = feet + "'-" + number + " " + number2 + "/" + base + '"';
				//} else {
				//	itemdimen = feet + "'-" + number + " " + minInit + '/'+minBase+'"';
				//}
			} else {
				if (number == 0 && feet == 0){
					itemdimen = '0"';
				} else {
					itemdimen = feet + "'-" + number + '"';
				}
			}
			//if (number2 > 0){
			//	fractionOut = number2+'/'+base
			//	if (base > 16){fractionOut = minInit + '/'+minBase}
			//}
			//if (application.isInDeveloper()){application.output('fraction: '+fractionOut)}
			
			break;
	
		default:
			return "";
	}
	var space = '';
	var padding = '                                  ';
	var output = '';
	switch( returnType ){
		case 'FEET':
			output =  feet + padding;
		case 'INCH':
			output = inches + padding;
		case 'NUMERATOR':
			if (fractionOut.search('/') != -1){
				output = (fractionOut.split('/')[0]);
			} else {
				output = '';
			}
			break;
		case 'DENOMINATOR':
		if (fractionOut.search('/') != -1){
			output = (fractionOut.split('/')[1]);
		} else {
			output = '';
		}
			break;
		case 'FRACTION':
		output = fraction;
			break;
		case 'FRACSLASH':
			output = fractionOut;
			break;
		case 'INCHES':
			space = "";
			if (feet > 0){inches = Math.floor(inches*1 + feet*12)}
			if (inches != 0){output += inches}else{output += "0"}
			if (fractionOut == "0\"" || fractionOut == 0){
				output += "\"";
				//space = "-";
			} else {
				output += " "+fractionOut+'"';
				//fractionOut = "\"";
			}
			break;
		case 'ALL':
		default:
			space = "";
			if (feet != 0 ){output = feet+"'-";} else {output = "0'-"}
			if (inches != 0){output += inches}else{output += "0"}
			if (fractionOut == "0\"" || fractionOut == 0){
				output += "\"";
				//space = "-";
			} else {
				output += " "+fractionOut+'"';
				//fractionOut = "\"";
			}
			//length += space+fractionOut;			
		}
		return output.substr(0,length);

	/**
	 * 	Init = INT(itemdec)                 && integer portion of data
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
 * @param mm
 *
 * @properties={typeid:24,uuid:"2F61C8B7-1CA0-46CC-B765-C9A608725BDD"}
 */
function mmToIn(mm){
	return Math.floor(((mm * 0.039370078740157) * 16)+0.5)/16;
}
/**
 * @param kg
 *
 * @properties={typeid:24,uuid:"DC663851-0818-43D3-9291-1A3620D19EEB"}
 */
function kgToLb(kg){
	 return kg * 2.2046226;
}
/**
 * @param jobNumber
 *
 * @properties={typeid:24,uuid:"26D7F52A-11DC-4C0B-8B40-6759AFA92DCE"}
 * @SuppressWarnings(wrongparameters)
 */
function isJobMetric(jobNumber){
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.result.add(q.columns.job_id);
	q.result.add(q.columns.job_number);
	q.result.add(q.columns.metric_job);
	q.result.distinct = true;
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.job_number.eq(jobNumber))
		);
	var resultQ = databaseManager.getFoundSet(q);
	var size = resultQ.getSize();
	if (size == 0){
		return false;
	}
	if (size > 1){
		if (application.isInDeveloper()){application.output('Multiple job numbers.  Should not happen');}
	}
	session.jobNumber = jobNumber;
	/** @type {JSRecord<db:/stsservoy/jobs>} */
	var rec = resultQ.getRecord(1);
	mob.job.metric = (rec.metric_job == 1);
	return (rec.metric_job == 1);

}
/**
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"A9960869-EA58-45C3-A567-38BCD5C72EA7"}
 */
function arrayToString(itemCSV){
	if (!itemCSV){return null}
	/** @type {Array} */
	var arrayN = itemCSV.split(",");
	var arrayStr = "(";
	var comma = ",";
	var length = arrayN.length;
	for (var index = 0;index<length;index++){
		if (index == length-1){comma = ""}
		arrayStr = arrayStr+"\'"+arrayN[index].trim()+"\'"+comma;
	}
	arrayStr = arrayStr+")";
	if (arrayStr == "(\'\')"){arrayStr = null}
	return arrayStr;
}
/**
 * @AllowToRunInFind
 * 
 * @param {String} itemCSV
 * @param {Boolean} arrayToStr
 *
 * @properties={typeid:24,uuid:"2D8CBAC7-3115-462E-ACF6-C8B83D4FFF29"}
 */
function convertLoadToId(itemCSV,arrayToStr){
	if (itemCSV == ""){return null}
	itemCSV = itemCSV.replace(/ +/g,'');
	var arrayN = [];
	arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return null}
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var fs = databaseManager.createSelect('db:/stsservoy/loads');
	fs.result.add(fs.columns.load_id);
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.load_number.isin(arrayN));
	var L = databaseManager.getFoundSet(fs);
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/loads>} */
	var rec = null;
	var loadIds = [];
	while (rec = L.getRecord(idx++)){
		loadIds.push(rec.load_id.toString());
	}
	if (arrayToStr){
		return arrayToString(loadIds);
	}
	return loadIds;
}
/**
 * @AllowToRunInFind
 * 
 * @param {String} itemCSV
 * @param {Boolean} arraytoStr
 *
 * @properties={typeid:24,uuid:"D8C680C8-6A17-45C3-9EAE-33E04698072F"}
 */
function convertLotToId(itemCSV,arraytoStr){
	if (itemCSV == ""){return null}
	var arrayN = [];
	arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return null}
	/** @type {QBSelect<db:/stsservoy/lots>} */
	var fs = databaseManager.createSelect('db:/stsservoy/lots');
	fs.result.add(fs.columns.lot_id);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	var L = databaseManager.getFoundSet(fs);
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/lots>} */
	var rec = null;
	var lotIds = [];
	while (rec = L.getRecord(idx++)){
		lotIds.push(rec.lot_id.toString());
	}
	if (arraytoStr){
		return arrayToString(lotIds);
	}
	return lotIds;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"FC6CA147-EA1C-422F-BF69-6D2C546C222E"}
 */
function onActionSelectAll(event) {
	var formName = event.getFormName();
	var formTable = formName+"_table";
	/** @type {JSFoundset} */
	var fs = forms[formTable].foundset;
	var i = 1;
	var rec = null;
	while (rec = fs.getRecord(i++)){
		rec.selection = 1;
	}
	databaseManager.saveData(fs);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"01EEEFF1-ECEB-427E-A911-AABF52889598"}
 */
function onActionClearAll(event) {
	var formName = event.getFormName();
	var formTable = formName+"_table";
	if (!forms[formTable]){return}
	/** @type {JSFoundset} */
	var fs = forms[formTable].foundset;
	var i = 1; var rec = null;
	while (rec = fs.getRecord(i++)){
		rec.selection = 0;
	}
	databaseManager.saveData(fs);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"4570807D-BD90-4553-A1F2-0E3222656AB7"}
 */
function onActionSelectUnprinted(event) {
	var formName = event.getFormName();
	var formTable = formName+"_table";
	/** @type {JSFoundset} */
	var fs = forms[formTable].foundset;
	var i = 1;
	var rec = null;
	while (rec = fs.getRecord(i++)){
		rec.selection = (rec.if_lprint*1 != 1) ? 1 : 0;
	}
	databaseManager.saveData(fs);
}
/**
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0DE21EDC-A226-44B7-8BAA-3302E90589C0"}
 */
function rfMobileViewNextField(event){
	if (event.getFormName() != 'rf_mobile_view'){return}
	forms['rf_mobile_view'].elements['genericin'].requestFocus();
	if (1==1){return}//skip rest mobile redesign
	/** @type {Array} */
	var entryFields = forms['rf_mobile_view'].tabFieldOrder;
	var currentField = event.getElementName();
	var index = entryFields.indexOf(currentField);
	index = (index < entryFields.length-1) ? ++index : index;
	if (application.isInDeveloper()){application.output('REM entryFields '+entryFields)}
	forms['rf_mobile_view'].elements[entryFields[index]].requestFocus();
}
/**
 * @properties={typeid:24,uuid:"9ABDD7DF-204B-4948-8267-F7E982590F55"}
 */
function rfGetJobUnits(){
	var metricJob = (mob.job.metric == 1);
	mobWeightUnits = (metricJob) ? ' kgs' : ' lbs';
	mobLengthUnits = (metricJob) ? ' mm' : ' ins';
}
/**
 * @properties={typeid:24,uuid:"F0942278-7B4E-40AF-A32F-890BE1DB6A8A"}
 */
function rfGetSpecsItem(){
	var metricJob = (mob.job.metric == 1);
	if (metricJob){
		mobItemLength = sts_idrepfile_idfile.sts_idfile_to_pcmks.item_length;
		mobItemWeight = sts_idrepfile_idfile.sts_idfile_to_pcmks.item_weight;
		mobItemWidth = sts_idrepfile_idfile.sts_idfile_to_pcmks.item_width;
	} else {
		mobItemLength = sts_idrepfile_idfile.sts_idfile_to_pcmks.item_length;
		mobItemLength = mmToFeet(mobItemLength);//ftDecToString('FEET',sts_idrepfile_idfile.sts_idfile_to_pcmks.item_length_in,12,'');
		scopes.globals.mobItemWeight = sts_idrepfile_idfile.sts_idfile_to_pcmks.item_weight_lbs.toString();
		mobItemWeight= sts_idrepfile_idfile.sts_idfile_to_pcmks.item_weight_lbs.toString();
		mobItemWidth = sts_idrepfile_idfile.sts_idfile_to_pcmks.item_width_in;
	}
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
 * @properties={typeid:24,uuid:"6EC17DBA-0E67-41D3-AAF8-02D306C47BE4"}
 * @SuppressWarnings(wrongparameters)
 */
function onDataChangeHeat(oldValue, newValue, event) {
	session.userEntry = newValue;
	var formName = event.getFormName();
	var elementName = event.getElementName();
	//if (forms[formName].entryRequired(elementName)){
	//	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//}
	forms['rf_mobile_view'].heat = newValue;
	mob.heat = newValue;
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
	//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
	}
	//if (event.getElementName() != 'genericin'){
		forms['rf_mobile_view'].elements['genericin'].requestFocus();
	//}

	//rfGetJobIdfileIds();
	/** @type {QBSelect<db:/stsservoy/heats>} * /
	var s = databaseManager.createSelect('db:/stsservoy/heats');
	s.result.add(s.columns.heat_number);
	s.result.add(s.columns.heat_id);
	s.where.add(s.columns.delete_flag.isNull);
	s.where.add(s.columns.tenant_uuid.eq(session.tenant_uuid));
	//s.where.add(s.columns.idfile_id.isin(mob.idfileIds));
	s.where.add(s.columns.heat_number.eq(newValue));
	
	/** @type {JSFoundSet<db:/stsservoy/heats>} * /
	var fs3 = databaseManager.getFoundSet(s);
	if (fs3.getSize() == 0){
		globals.logger(true,i18n.getI18NMessage('sts.txt.heat.not.found.this.job',new Array(newValue,session.jobNumber)));

		forms.rf_mobile_view.elements.tablessQuery.visible = true;
		if (forms.rf_mobile_view.elements.tablessQuery.visible){
			forms.mobile_query.setTitleText(i18n.getI18NMessage('sts.txt.heat.use.new.number',new Array(newValue)),newValue);
			forms.mobile_query.setButtonTextLt(i18n.getI18NMessage('sts.btn.no'));
			forms.mobile_query.setButtonTextRt(i18n.getI18NMessage('sts.btn.yes'));
			forms.mobile_query.elements.btn_respond_lt.requestFocus();
			// now must use buttons to query a global variable and set/unset visibility of mobile_query form
			return;
		}
		var response = globals.DIALOGS.showQuestionDialog(
			i18n.getI18NMessage('sts.txt.heat.new.number',new Array(newValue)),
			i18n.getI18NMessage('sts.txt.heat.new.number',new Array(newValue)),
			i18n.getI18NMessage('sts.btn.no'),
			i18n.getI18NMessage('sts.btn.yes'));
			//'New HEAT Number?', message, 'NO', 'yes');
		if (response == i18n.getI18NMessage('sts.btn.no')){
			newValue = oldValue;
			forms['rf_mobile_view'].heat = oldValue;

		} else {
			globals.logger(true,i18n.getI18NMessage('sts.txt.heat.created.for.job.number',new Array(newValue),session.jobNumber));
			var fs = databaseManager.getFoundSet('stsservoy','heats');
			/** @type {JSFoundSet<db:/stsservoy/heats>} * /
			var rec = fs.newRecord();
			rec.heat_number = newValue;
			rec.tenant_uuid = session.tenant_uuid;
			rec.edit_date = new Date();
			forms['rf_mobile_view'].heat = newValue;

		}
		forms['rf_mobile_view'].heat = oldValue;
		newValue = oldValue;
		return true;
	}
	if (forms['rf_mobile_view']){
		var rec = fs3.getRecord(1); 
		
		forms['rf_mobile_view'].heat = rec.heat_number;
		mob.heat = rec.heat_number;
		mob.heatId = rec.heat_id;
	}
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	//rfMobileViewNextField(event); */
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
 * @properties={typeid:24,uuid:"7DE74A71-FB22-4F5F-B4C5-9C61692591A7"}
 */
function onDataChangeGrade(oldValue, newValue, event) {
	// reject if grade doesn't match piecemark grade.
	// blank piecemark grade is a pass
	session.userEntry = newValue;
	var formName = event.getFormName();
	forms['rf_mobile_view'].grade = newValue;
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	//if (event.getElementName() != 'genericin'){
		forms['rf_mobile_view'].elements['genericin'].requestFocus();
	//}
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
 * @properties={typeid:24,uuid:"C4F5F0BB-0AD2-4854-A28A-AD9BDFF663D3"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function onDataChangePiecemark(oldValue, newValue, event) {
	session.userEntry = newValue;
	var sheetList = [];
	var piecemark = newValue;
	var formName = event.getFormName();
	var elementName = event.getElementName();
	//if (forms[formName].entryRequired(elementName)){
	//	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//}
	var baseForm = getBaseFormName(null);
	//application.output('base form '+baseForm);
	session.jobIdBack = session.jobId;
	if (baseForm.search('piecemark') != -1){
		session.jobId = forms[formName].vJobRec.job_id.toString();
	}
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheets');
	q.result.add(q.columns.sheet_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.job_id.eq(session.jobId.toString()));
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet(q);
	session.jobId = session.jobIdBack;

	for (var index = 1;index <= fs.getSize();index++){
		var rec = fs.getRecord(index);
		sheetList.push(rec.sheet_id.toString());
	}
	// get piecemark info, jobs = sheets - piecemarks
	// get locations
	var pcmk = piecemark.replace(/ /g,'%');
	pcmk = pcmk.replace(/X/g,'x');
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var r = databaseManager.createSelect('db:/stsservoy/piecemarks');
	r.result.add(r.columns.item_length);
	r.result.add(r.columns.item_length_in);
	r.result.add(r.columns.item_weight);
	r.result.add(r.columns.item_weight_lbs);
	r.result.add(r.columns.item_width);
	r.result.add(r.columns.item_width_in);
	r.result.add(r.columns.piecemark_id);
	r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(r.columns.sheet_id.isin(sheetList))
			.add(r.or
				.add(r.columns.piecemark.eq(piecemark))
				.add(r.columns.material.like(pcmk))
				)			
	);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs2 = databaseManager.getFoundSet(r);
	if (fs2.getSize() > 0){
		
		rec = fs2.getRecord(1);
		mobItemWeight = (isJobMetric(forms[formName].jobNumber)) ? rec.item_weight : rec.item_weight_lbs;
		mobItemLength = (isJobMetric(forms[formName].jobNumber)) ? rec.item_length : rec.item_length_in;
		mobItemWidth = (isJobMetric(forms[formName].jobNumber)) ? rec.item_width : rec.item_width_in;
		//mob
		//forms['rf_mobile_view'].material = rec.material;
	} else {	
		globals.errorDialogMobile(event,'27','currentidin');// message 27 piecemark not found on this job
		globals.logger(true,piecemark+' piecemark not found on this job# '+session.jobNumber);

		//forms[formName].clearForm();
		clearMobCalcsDisplay();
		return true;
	}
	var pcmks = [];
	for (index = 1;index <= fs2.getSize();index++){
		rec = fs2.getRecord(index);
		pcmks.push(rec.piecemark_id.toString());
	}


	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var s = databaseManager.createSelect('db:/stsservoy/idfiles');
	s.result.add(s.columns.id_location);
	s.result.add(s.columns.piecemark_id);
	s.where.add(
		s.and
			.add(s.columns.delete_flag.isNull)
			.add(s.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(s.columns.piecemark_id.isin(pcmks))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var fs3 = databaseManager.getFoundSet(s);
	if (application.isInDeveloper()){application.output('item '+session.jobId+' pm '+newValue);}
	sheetList = [];
	var locations = [];
	forms[formName].controller.loadRecords(fs3);
	for (index = 1;index <= fs3.getSize();index++){
		rec = fs3.getRecord(index);
		if (locations.indexOf(rec.id_location) == -1){
			locations.push(rec.id_location);
		}
	}
	//application.output('locations '+locations);
	forms[formName].elements[event.getElementName()].selectAll();
	switch (baseForm){
		case 'rf_mobile'://STSmobile // was rf_mobile_view, cause of stripping _view from end of formName
			/** @type {QBSelect<db:/stsservoy/transactions>} */
			var trans = databaseManager.createSelect('db:/stsservoy/transactions');
			trans.result.add(trans.columns.trans_id);
			trans.where.add(trans.columns.tenant_uuid.eq(session.tenant_uuid));
			trans.where.add(trans.columns.delete_flag.isNull);
			trans.where.add(trans.columns.idfile_id.eq(fs3.idfile_id));
			var TR = databaseManager.getFoundSet(trans);
			forms['trans_history'].foundset.loadRecords(TR);
			break;
		case 'piecemark':
		case 'piecemark_entry':
			var thisForm = forms[formName];
			//var pcmkRec = fs2.getRecord(1);
			thisForm.vItemRec = fs2.getRecord(1);
			var idfileRec = fs3.getRecord(1);
			thisForm.vIdfileRec = fs3.getRecord(1);
			thisForm.vIdfilesFs = fs3.duplicateFoundSet();

			//var metric = (thisForm.vJobRec.metric_job == 1);
			showPiecemarkInfo();

			thisForm.vStatusCode = m.stations[idfileRec.status_description_id];
			thisForm.vLocation = idfileRec.id_location;

			thisForm.vItemQuantity = fs3.getSize();
			if (idfileRec.summed_quantity != 1){
				// summarized file, quantity is original quantity
				thisForm.vItemQuantity = idfileRec.summed_quantity;
			}
			mobRepIdfileId = idfileRec.idfile_id;
			var serialsFs = getIdfileSerials();
			thisForm.scopesJobsSet('dsPiecemarks', databaseManager.convertToDataSet(fs2));
			
			thisForm.scopesJobsExec('readIdfiles');
			thisForm.vNumberLabels = serialsFs.getMaxRowIndex();

			//getIdfileSerials();
			thisForm.vQtyBarcode = getIdfileMaxLabel();

			//thisForm.vPcmkFs = fs2.duplicateFoundSet();
			//application.output(pcmkRec.piecemark+' '+pcmkRec.parent_piecemark+' '+pcmkRec.item_weight_lbs);
			//application.output('rep idfile id '+mobRepIdfileId);
			//thisForm.vSequenceNumber = sts_idrepfile_idfile.sts_idfile_to_sequence.sequence_number;
			//thisForm.vSerialNumbers = serialArray;
			//application.output('pcmkrec '+pcmkRec);
			//application.output('pcmkrec ds '+databaseManager.convertToDataSet(fs2));
			//var joe = databaseManager.convertToDataSet(fs2);
			//application.output('size '+joe.getMaxRowIndex());
			//application.output('dsPiecemarks '+thisForm.scopesJobsGet('dsPiecemarks'));
			//var ds2 = thisForm.scopesJobsGet('dsPiecemarks');
			//application.output('max size '+ds2.getMaxRowIndex());
			//application.output('dsidfiles' +thisForm.scopesJobsGet('dsIdfiles'));
			//application.output('ds idfile array '+thisForm.scopesJobsGet('dsIdfileArray'));
			//application.output('final pcmk rec '+thisForm.vItemRec);
			//application.output('final pcmk rec '+thisForm.vItemRec.piecemark_id);
			//application.output(' final pcmk rec '+pcmkRec);
			//application.output(' final pcmk rec '+pcmkRec.piecemark_id);
			/** @type {JSFoundSet<db:/stsservoy/sequences2>} */
			var seqDs = getSequenceNumbers();
			if (seqDs.getMaxRowIndex() == 1){
				seqDs.rowIndex = 1;
				thisForm.vSequenceNumber = seqDs.sequence_number;
			} else {
				thisForm.vSequenceNumber = "";
			}
			var lotDs = getLotNumbers();
			if (lotDs.getMaxRowIndex() == 1){
				lotDs.rowIndex = 1;
				thisForm.vLotNumber = lotDs.lot_number;
			} else {
				thisForm.vLotNumber = "";
			}

			//getResetPcmkCounts();
			onFocusTabsSTS(event);
			break;
		default:
			
	}
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	if (application.isInDeveloper()){application.output('get piecemark '+baseForm)}
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
 * @properties={typeid:24,uuid:"23E9E9C7-867D-4629-92AF-4B5AA561C734"}
 * @SuppressWarnings(wrongparameters)
 */
function onDataChangeSequence(oldValue, newValue, event) {
	session.userEntry = newValue;
	// Is sequence part of the job?
	var formName = event.getFormName();
	var elementName = event.getElementName();
	//if (forms[formName].entryRequired(elementName)){
	//	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//}
	/** @type {QBSelect<db:/stsservoy/sequences2>} */
	var s = databaseManager.createSelect('db:/stsservoy/sequences2');
	s.result.add(s.columns.sequence_number);
	s.result.add(s.columns.sequence_id);
	s.where.add(
		s.and
			.add(s.columns.delete_flag.isNull)
			.add(s.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(s.columns.job_id.eq(mob.job.Id.toString()))
			.add(s.columns.sequence_number.eq(newValue))
	);
	/** @type {JSFoundSet<db:/stsservoy/sequences2>} */
	var fs3 = databaseManager.getFoundSet(s);
	if (fs3.getSize() == 0){
		globals.errorDialogMobile(event,'1069','current');//1069 Sequence not on this Job.
		globals.logger(true,newValue+' sequence not found on this job# '+session.jobNumber);
		newValue = oldValue;
		getResetPcmkCounts();
		return true;
	}
	// if piecemark screen, reset all counts
	switch (getBaseFormName(event)){
		case 'piecemark','piecemark_entry': {
			getResetPcmkCounts();
			break;
		}
		default:
	}
	//if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	//xif (event.getElementName() != 'genericin'){
		forms['rf_mobile_view'].elements['genericin'].requestFocus();
	//x}
	return true
}
/**
 * @param {String} currentJob
 * @properties={typeid:24,uuid:"E783FE18-72C6-4614-B8A8-8BF41CD0C376"}
 * @SuppressWarnings(wrongparameters)
 */
function rfShowBundlesNames(currentJob){
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	mob.bundlesJobs = [];
	var bundles = [];
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var rec = null; var index = 1;
	while (rec = resultQ.getRecord(index++)){
		var bundle = rec.bundle_bc;
		if (bundles.indexOf(bundle) != -1){continue}
		bundles.push(bundle);
		var jobId = rec.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.job_id.toString();
		if (!mob.bundlesJobs[jobId]){
			mob.bundlesJobs[jobId] = new Array();
		}
		if (!bundle){continue}
		/** @type {Array} */
		var tempArray = mob.bundlesJobs[jobId];
		tempArray.push(bundle);
	}
	bundles = [];
	if (application.isInDeveloper()){application.output('bundles '+resultQ.getSize()+' '+mob.bundlesJobs[currentJob]);}

}
/**
 * loadType is either 'ship', 'current' or 'receive'
 * @param {String} loadType
 *
 * @properties={typeid:24,uuid:"5F0502C7-BFD7-4996-B6D7-FC99DEC39725"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function rfGetSpecsLoad(loadType){
	var index = 1;
	var count = 0;
	var weight = 0;
	var typeLoad = 'current';
	if (loadType == mobileWindows[i18n.getI18NMessage('sts.mobile.shipping')] ||
		loadType == mobileWindows[i18n.getI18NMessage('sts.mobile.final.ship')] ||
		loadType == mobileWindows[i18n.getI18NMessage('sts.mobile.ship.by.sequence')]){
			typeLoad = 'current';
	} else if (loadType == mobileWindows[i18n.getI18NMessage('sts.mobile.receiving')]){
			typeLoad = 'receive';
	} else {
			typeLoad = 'current';
	}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	if (typeLoad == 'ship'){
		q.result.add(q.columns.ship_load_id,'load_id');
	} else if (typeLoad == 'receive'){
		q.result.add(q.columns.received_load_id,'load_id');
	} else {
		q.result.add(q.columns.current_load_id,'load_id');
	}
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);
	if (typeLoad == 'ship'){
		q.where.add(q.columns.delete_flag.isNull);
		q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
		q.where.add(q.columns.ship_load_id.eq(session.loadId.toString()));
	} else if (typeLoad == 'receive'){
		q.where.add(q.columns.delete_flag.isNull);
		q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
		q.where.add(q.columns.received_load_id.eq(session.loadId.toString()));
	} else {
		q.where.add(q.columns.delete_flag.isNull);
		q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
		q.where.add(q.columns.current_load_id.eq(session.loadId.toString()));
	}
	var loadFS = databaseManager.getFoundSet(q);
	mob.load.loadFs = loadFS;
	if (application.isInDeveloper()){application.output('load id '+session.loadId+ ' size '+loadFS.getSize());}
	index = 1;
	var piecemarkIds = [];
	mob.load.ctShipped = 0; mob.load.ctTotal = 0;
	while (index <= loadFS.getSize()){
		mob.load.ctTotal++;
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = loadFS.getRecord(index++);
		if (rec && piecemarkIds.indexOf(rec.piecemark_id.toString()) == -1) {piecemarkIds.push(rec.piecemark_id.toString());}
		if (typeLoad == 'ship'){//status description id is shipped 20180830
			if (rec && session.stationId && rec.status_description_id.toString() == session.stationId.toString()){//check here for already shipped items
				mob.load.ctShipped++;
			}
		}
		mob.load.shipId = (!rec.ship_load_id) ? rec.ship_load_id : rec.ship_load_id.toString();
		mob.load.receiveId = (!rec.received_load_id) ? rec.received_load_id : rec.received_load_id.toString();
		mob.load.currentId = (!rec.current_load_id) ? rec.current_load_id : rec.current_load_id.toString();
	}
	
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var r = databaseManager.createSelect('db:/stsservoy/piecemarks');
	r.result.add(r.columns.piecemark_id);
	r.result.add(r.columns.item_weight);
	r.result.add(r.columns.item_weight_lbs);
	r.where.add(r.columns.delete_flag.isNull);
	r.where.add(r.columns.tenant_uuid.eq(session.tenant_uuid));
	r.where.add(r.columns.piecemark_id.isin(piecemarkIds));
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var resultP = databaseManager.getFoundSet(r);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var itemInfo = null;
	index = 1;
	while (index <= loadFS.getSize()){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		rec = loadFS.getRecord(index++);
		itemInfo = null; var iInfo = 1;
		while (itemInfo = resultP.getRecord(iInfo++)){
			if (itemInfo.piecemark_id == rec.piecemark_id){break;}
		}
		//resultP.loadRecords(rec.piecemark_id);
		var pieces = (rec.summed_quantity != 0) ? rec.summed_quantity : rec.original_quantity;
		if (application.isInDeveloper()){application.output('pieces '+pieces+' rec '+rec.piecemark_id)}
		var itemWeight = (!mob.job.metric) ? itemInfo.item_weight_lbs*pieces : itemInfo.item_weight*pieces;
		itemWeight = (itemInfo.is_assembly == 1) ? itemWeight : 0; // Do not add minor weights to bundle 20180525 
		//itemWeight = (itemInfo.piecemark == itemInfo.parent_piecemark) ? itemWeight : 0; // Do not add minor weights to bundle 20180525 
		count = count*1 + pieces*1;
		weight = Math.floor(weight*1 + (itemWeight*1+.5));
	}
	mob.load.pieces = count;
	mob.load.weight = weight;
	mobLoadPieces = count;
	mobLoadWeight = weight;
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var l = databaseManager.createSelect('db:/stsservoy/loads');
	l.result.add(l.columns.load_id);
	l.where.add(l.columns.load_id.eq(session.loadId.toString()));
	l.where.add(l.columns.tenant_uuid.eq(session.tenant_uuid));
	var L = databaseManager.getFoundSet(l);
	if (L.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		var recL = L.getRecord(1);
		recL.ship_date = new Date();
		recL.shipped_weight = mobLoadWeight;
		recL.edit_date = recL.ship_date;
		//recL. NO SHIP COUNT ITEMS
		databaseManager.saveData(recL);
	}
}
/**
 * @properties={typeid:24,uuid:"A2C7C866-8127-42E1-AC3A-1E0918923C89"}
 */
function clearMobCalcsDisplay(){
	mobBundlePieces = 0;
	mobBundleWeight = 0;
	mobItemLength = 0;
	mobItemPieces = 0;
	mobItemWeight = 0;
	mobItemWidth = 0;
	mobLoadPieces = 0;
	mobLoadWeight = 0;
	mobLocationPieces = 0;
	mobLoadWeight = 0;
}
/**
 * @properties={typeid:24,uuid:"73FCC2B3-7B7D-4D08-B79C-31608C2ECAA6"}
 * @SuppressWarnings(wrongparameters)
 */
function rfGetJobIdfileIds(){
	//jobid-sheets-piecemarks-idfiles
	var sheetList = [];
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheets');
	q.result.add(q.columns.sheet_id);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.job_id.eq(session.jobId.toString()))
	);
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet(q);
	for (var index = 1;index <= fs.getSize();index++){
		var rec = fs.getRecord(index);
		sheetList.push(rec.sheet_id.toString());
	}
	// get piecemark info, jobs = sheets - piecemarks
	// get locations
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var r = databaseManager.createSelect('db:/stsservoy/piecemarks');
	r.result.add(r.columns.piecemark_id);
	r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(r.columns.sheet_id.isin(sheetList))
	);
	r.result.distinct = true;
	sheetList = [];
	var pmList = [];
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs2 = databaseManager.getFoundSet(r);
	for (index = 1;index <= fs2.getSize();index++){
		rec = fs2.getRecord(index);
		pmList.push(rec.piecemark_id.toString());
	}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */	
	var s = databaseManager.createSelect('db:/stsservoy/idfiles');
	s.result.add(s.columns.idfile_id);
	s.where.add(
	s.and
		.add(s.columns.delete_flag.isNull)
		.add(s.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(s.columns.piecemark_id.isin(pmList))
	);
	s.result.distinct = true;
	mob.idfileIds = [];
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var fs3 = databaseManager.getFoundSet(s);
	for (index = 1;index <= fs3.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		rec = fs3.getRecord(index);
		mob.idfileIds.push(rec.idfile_id.toString());
		null;
	}
	///var idfileDS = databaseManager.convertToDataSet(mob.idfileIds);
	///var idfileFS = "";
	if (application.isInDeveloper()){application.output(mob.idfileIds);}// use forms.rf_mobile_view.controller.loadRecords(idfileDS) to get idfile records
}
/**
 * @AllowToRunInFind
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"91D1399C-4477-4634-A776-F433DDA3582F"}
 */
function getInstanceForm(event){
	var win = application.getActiveWindow();
	if (!win){return ''}
	if (!win.controller){return ''}
	var winName = win.controller.getName();
	if (event){
		if (typeof event == "string"){
			winName = event
		} else {
			winName = event.getFormName();
		}
	}
	///Rapplication.output('win name '+winName);
	//var formName = event.getFormName();
	winName = winName.replace('_table','');//special case of dynamic table creation
	var formRev = "";
	var regExp = new RegExp(/(_[0-9]+)[^0-9]*$/);
	var matchItem = winName.match(/_[0-9]+$/);
	if (matchItem){
		formRev = matchItem[0];

	}
	return formRev;
	
}

/**
 * @AllowToRunInFind
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"C4211C80-518C-4229-9770-BCEF14AE150D"}
 */
function getInstanceWindow(event){
	var win = application.getActiveWindow();
	var winName = win.controller.getName();
	var formRev = "";
	//var regExp = new RegExp('_/0-9/+$');
	if (winName.search(/_[0-9]+$/) != -1){
		var formSplit = winName.split("_");
		formRev = "_"+formSplit[formSplit.length-1];

	}
	return formRev;
	
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"810EB32C-C61A-41A0-A4D4-A1754E54BC61"}
 */
function getCustomersByJob(){
	var formName = getFormName();
	if (!formName){return}//20181002 return if no form
	var baseForm = getBaseFormName(null);
	if (baseForm.search(/(piecemark)|(performance)|(rf_mobile)/) == -1){return null}
	if (application.isInDeveloper()){application.output('job '+formName)}
	if (formName == 'rf_mobile_view'){
		jobNum = forms['rf_mobile_view'].jobNumber;
	} else {
		var jobNum = forms[formName].vJobNumber;
	}
	if (formName.search('import_performance') != -1){jobNum = forms['import_performance_setting'].vJobNumber}
	var custNum = [];
	var custId = [];
	var custIds = [];
	var custNam = [];
	// Look in session.jobId
	getCustomerAddressNames();
	if (!mob.customer.Id){
		return;
	}
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.tenant_uuid.eq(session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.job_number.eq(jobNum));
	//j.where.add(j.columns.association_id.eq(session.associationId));
	var J = databaseManager.getFoundSet(j);
	J.loadRecords();
	application.output('job size is '+J.getSize());
	if (J.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/jobs>} */
		var rec = null; var index = 1;
		while (rec = J.getRecord(index++)){
			custIds.push(rec.customer_id);
			globals.session.jobId = rec.job_id.toString();
			mob.job.Id = rec.job_id.toString();//set jobid ticket#281
			mob.job.number = rec.job_number;//set jobnumber ticket#281
			mob.customer.Id = rec.customer_id.toString();
			application.output('setting mob.customer.id')
			index++;
		}
		/** @type {QBSelect<db:/stsservoy/customers>} */
		var c = databaseManager.createSelect('db:/stsservoy/customers');
		c.result.add(c.columns.customer_id);
		c.where.add(c.columns.delete_flag.isNull);
		c.where.add(c.columns.tenant_uuid.eq(session.tenant_uuid));
		c.where.add(c.columns.customer_id.isin(custIds));
		var C = databaseManager.getFoundSet(c);
		/** @type {JSRecord<db:/stsservoy/customers>} */
		var rec2 = null;index = 1;
		while (rec2 = C.getRecord(index++)){
			custId.push(rec2.customer_id.toString());
			custNum.push(rec2.customer_number);
			custNam.push(rec2.name);
			index++;//task08 infinite loop on job number change
		}

		var ds = databaseManager.convertToDataSet(C,['customer_number','customer_id','name']);
		return ds;
	}
	return null;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B86D58A1-B549-4E54-A8CC-DFA9033F8520"}
 */
function getJobsByAssoc(){
	// change to QBSelect 20161121
	var jobNum = [];
	var jobId = [];
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.tenant_uuid.eq(session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.association_id.eq(session.associationId.toString()));
	j.sort.add(j.columns.create_date.asc);
	var J = databaseManager.getFoundSet(j);
	var count = 1;
	while (count <= J.getSize()){
		/** @type {JSRecord<db:/stsservoy/jobs>} */
		var rec = J.getRecord(count);
		jobId.push(rec.job_id.toString());
		jobNum.push(rec.job_number);
		count++;
	}
	application.setValueListItems('stsvlg_jobsByAssoc',jobNum);
}
/**
 * @properties={typeid:24,uuid:"487002D5-DE71-42EF-9A1D-198696CC88EA"}
 */
function getBaseFormName(event){
	var formName = "";
	if (event){
		formName = event.getFormName();
	} else {
		var win = application.getActiveWindow();
		formName = win.controller.getName();
	}
	var lastUnder = formName.lastIndexOf("_");
	//var formSplit = formName.split("_");
	//var formRev = formSplit[formSplit.length-1];
	//var baseForm = "";
	//for (var index = 0;index < formSplit.length-1;index++){
	//	baseForm += formSplit[index];
	//}
	var baseForm = formName.substring(0,lastUnder);
	return baseForm;
}
/**
 * Get from valuelist created after job number entered.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4E12B7E8-B3A8-4F04-929B-A4935C683FBD"}
 */
function onDataChangeCustomerNumber(oldValue, newValue, event) {
	var formName = event.getFormName();
	var elementName = event.getElementName();
	if (forms[formName].entryRequired(elementName)){
		if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	}
	var baseForm = getBaseFormName(null);
	if (application.isInDeveloper()){application.output('base form '+baseForm);}
	var theForm = forms[formName];
	theForm.vCustId = newValue;
	switch (baseForm){
		case 'piecemark':
		case 'piecemark_entry':
			loadPcmkForm();
			/**var jobNum = theForm.vJobNumber;
			var custId = theForm.vCustId;
			application.output('job '+jobNum+' custId '+custId);
			form = forms[formName];
			theForm.vJobRec = getJobData(custId,jobNum);
			theForm.vJobId = theForm.vJobRec.job_id;
			theForm.vCustRec = getCustomerIdRec();
			theForm.vSheetIds = getJobIdSheets();
			theForm.vPcmkIds = getSheetIdPcmks();
			theForm.vIdfileIds = getPcmkIdIdfiles();
			
			theForm.vCustName = theForm.vCustRec.name;
			theForm.vJobMetric = theForm.vJobRec.metric_job;
			theForm.elements.metric.visible = (theForm.vJobMetric == 1);
			theForm.vWeightUnits = (theForm.vJobMetric == 1) ? 'kgs' : 'lbs';
			if (application.isInDeveloper()){application.output('job rec '+theForm.vJobRec);}
			if (application.isInDeveloper()){application.output('cust rec '+theForm.vCustRec);}
			//application.output('metric job '+theForm.vJobRec.metric_job);
			if (application.isInDeveloper()){application.output('job sheets '+theForm.vSheetIds);}
			if (application.isInDeveloper()){application.output(theForm.vPcmkIds.length+' pcmks '+theForm.vPcmkIds);}
			if (application.isInDeveloper()){application.output(theForm.vIdfileIds.length+' idfiles '+theForm.vIdfileIds);}
			var jobMetrics = forms[formName].getJobMetrics();
			forms[formName].vJobWeight = jobMetrics[0];
			application.output('metrics' + jobMetrics);
			application.output('metrics 2'+forms[formName].getJobMetricsMW());*/
			onFocusTabsSTS(event);
			break;
	}
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	return true
}
/**
 * @param custId
 * @param jobNum
 *
 * @properties={typeid:24,uuid:"2B4F4822-7AFF-4802-A5AD-E97C503F0E45"}
 * @AllowToRunInFind
 */
function getJobData(custId,jobNum){
	custId = (custId) ? custId.toString() : custId;
	jobNum = jobNum.toString();
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var fs = databaseManager.createSelect('db:/stsservoy/jobs');
	fs.result.add(fs.columns.job_id);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	if (custId){
		fs.where.add(fs.columns.customer_id.eq(custId));
	}
	fs.where.add(fs.columns.job_number.eq(jobNum));
	var J = databaseManager.getFoundSet(fs);
	if (J.getSize() > 0){
		var rec = J.getRecord(1); // There is only one job with custId and jobNum
	}
	return rec;
}
/**
 * @properties={typeid:24,uuid:"17AFF775-0176-4197-9AD2-91A895A0079D"}
 * @SuppressWarnings(wrongparameters)
 */
function getJobShopOrders(){
	var formName = getFormName();
	var theForm = forms[formName];

	if (!theForm.vPcmkIds){return null}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	//q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.shop_order);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.piecemark_id.isin(theForm.vPcmkIds))
	);
	q.sort.add(q.columns.shop_order);
	///var resultQ = databaseManager.getFoundSet(q);
	var resultTest = databaseManager.getDataSetByQuery(q,-1);
	//return databaseManager.convertToDataSet(resultTest,['shop_order']);
	return resultTest;
	/**
	var shopOrders = [];
	shopOrders.push("");
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		//application.output(rec.ship_load_id);
		if (shopOrders.indexOf(rec.shop_order) == -1) {shopOrders.push(rec.shop_order);}
		//shopOrders.push(rec.id_location);
	}*/
	
	//shopOrders.sort();
	//application.setValueListItems('stsvlt_shopOrders',shopOrders);
}
/**
 * @properties={typeid:24,uuid:"BE297460-79DC-4FAE-A3FB-3EF61E48ACA3"}
 */
function getFormName(){
	var win = application.getActiveWindow();
	if (!win){return}
	var formName = win.controller.getName();
	return formName;
}
/**
 * @properties={typeid:24,uuid:"65BAE348-A36B-4C98-8A72-AAC0C425F2C1"}
 */
function getCustomerIdRec(){
	var form = forms[getFormName()];
	var custId = form.vCustId;
	/** @type {JSFoundSet<db:/stsservoy/customers>} */
	var fs = databaseManager.getFoundSet('stsservoy','customers');
	fs.loadRecords(application.getUUID(custId));
	return fs.getRecord(1);
}
/**
 * @AllowToRunInFind
 * Driven by form.vJobId, uuids converted to string
 * @properties={typeid:24,uuid:"AF3C9E4F-66C9-4806-9152-B43DBE2AB503"}
 */
function getJobIdSheets(){
	var form = forms[getFormName()];
	var jobId = form.vJobId.toString();
	if (application.isInDeveloper()){application.output('job id '+form.vJobId)}
	var sheets = [];
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var fs = databaseManager.createSelect('db:/stsservoy/sheets');
	fs.result.add(fs.columns.sheet_id);
	fs.where.add(fs.columns.job_id.eq(jobId));
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	var S = databaseManager.getFoundSet(fs);
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/sheets>} */
	var rec = null;
	while (rec = S.getRecord(idx++)){
		sheets.push(rec.sheet_id+"");		
	}
	return sheets;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"2C59365F-8D31-481F-971A-DD4165853464"}
 */
function getSheetIdPcmks(){
	var form = forms[getFormName()];
	var sheetCount = form.vSheetIds.length;
	if (sheetCount == 0){return []}
	if (application.isInDeveloper()){application.output('sheet count '+sheetCount);}
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.createSelect('db:/stsservoy/piecemarks');
	fs.result.add(fs.columns.piecemark_id);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.sheet_id.isin(form.vSheetIds));
	var P = databaseManager.getFoundSet(fs);
	var piecemarkIds = [];
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/piecemarks>} */
	var rec = null;
	while (rec = P.getRecord(idx++)){
		piecemarkIds.push(rec.piecemark_id.toString());
	}
	if (application.isInDeveloper()){application.output('pcmks '+piecemarkIds)}
	return piecemarkIds;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4DEED7A7-1612-496F-BCAF-59F29226F01F"}
 */
function getPcmkIdIdfiles(){
	var form = forms[getFormName()];
	var pcmkCount = form.vPcmkIds.length;
	if (pcmkCount == 0){return []}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var fs = databaseManager.createSelect('db:/stsservoy/idfiles');
	fs.result.add(fs.columns.idfile_id);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.piecemark_id.isin(form.vPcmkIds));
	var I = databaseManager.getFoundSet(fs);
	var idfileIds = [];
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/idfiles>} */
	var rec = null;
	while (rec = I.getRecord(idx++)){
		idfileIds.push(rec.idfile_id.toString());
	}
	return idfileIds;
}
/**
 * @properties={typeid:24,uuid:"58E5BE5E-3B99-44A1-8C01-3FFAC28AEAB8"}
 * @SuppressWarnings(wrongparameters)
 */
function getLoadNumbers(){
	var formName = getFormName();
	var form = forms[formName];
	if (!form.vPcmkIds){return null}

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.current_load_id);
	q.result.add(q.columns.ship_load_id);
	q.result.add(q.columns.received_load_id);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.piecemark_id.isin(form.vPcmkIds))
	);
	var resultQ = databaseManager.getFoundSet(q);
	var loadIds = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = resultQ.getRecord(index);
		if (rec.current_load_id){
			if (loadIds.indexOf(rec.current_load_id+"") == -1){loadIds.push(rec.current_load_id+"");}
		} else if (rec.received_load_id){
			if (loadIds.indexOf(rec.received_load_id+"") == -1){loadIds.push(rec.received_load_id+"");}	
		} else {
			if (loadIds.indexOf(rec.ship_load_id+"") == -1){loadIds.push(rec.ship_load_id+"");}			
		}
		index++;
	}
	
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var r = databaseManager.createSelect('db:/stsservoy/loads');
		r.result.add(r.columns.load_number);
		r.result.distinct = true;
		r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(r.columns.load_id.isin(loadIds))
		);
		r.sort.add(r.columns.load_number);
	resultQ = databaseManager.getFoundSet(r);
	return databaseManager.convertToDataSet(resultQ,['load_number']);
	/**var loadNumbers = [];
	loadNumbers.push("");
	for (var index = 1;index <= resultQ.getSize();index++){
		rec = resultQ.getRecord(index);
		//application.output(rec.ship_load_id);
		var loadNum = Math.floor(rec.load_number);
		if (loadNumbers.indexOf(loadNum+"") == -1) {loadNumbers.push(loadNum+"");}
		//shopOrders.push(rec.id_location);
	}
	loadNumbers.sort();
	application.setValueListItems('stsvlt_loadNumbers',loadNumbers);*/
	
}
/**
 * 
 * @properties={typeid:24,uuid:"F8B9B9FE-F20A-44C0-9287-23C8F8DD7CAF"}
 * @SuppressWarnings(wrongparameters)
 */
function getLoadReleases(){
	
	var formName = getFormName();
	var form = forms[formName];

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.current_load_id);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.piecemark_id.isin(form.vPcmkIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	var loadIds = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		var rec = resultQ.getRecord(index);
		if (loadIds.indexOf(rec.current_load_id+"") == -1){loadIds.push(rec.current_load_id+"");}
		index++;
	}
	
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var r = databaseManager.createSelect('db:/stsservoy/loads');
		r.result.add(r.columns.load_release);
		r.result.distinct = true;
		r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(r.columns.load_id.isin(loadIds))
	);
	resultQ = databaseManager.getFoundSet(r);
	return databaseManager.convertToDataSet(resultQ,['load_release']);
	/**var loadReleases = [];
	loadReleases.push("");
	for (var index = 1;index <= resultQ.getSize();index++){
		rec = resultQ.getRecord(index);
		//application.output(rec.ship_load_id);
		if (loadReleases.indexOf(rec.load_release) == -1) {loadReleases.push(rec.load_release);}
		//shopOrders.push(rec.id_location);
	}
	loadReleases.sort();
	application.setValueListItems('stsvlt_loadReleases',loadReleases);*/
	
}
/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"212ABDCA-BBB2-4E6E-8AA2-FE87340986BF"}
 * @SuppressWarnings(wrongparameters)
 */
function getLoadPOs(event){
	var formName = event.getFormName();
	var form = forms[formName];

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.current_load_id);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.piecemark_id.isin(form.vPcmkIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	var loadIds = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		var rec = resultQ.getRecord(index);
		if (loadIds.indexOf(rec.current_load_id+"") == -1){loadIds.push(rec.current_load_id+"");}
		index++;
	}
	
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var r = databaseManager.createSelect('db:/stsservoy/loads');
		r.result.add(r.columns.load_po);
		r.result.distinct = true;
		r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(r.columns.load_id.isin(loadIds))
	);
	resultQ = databaseManager.getFoundSet(r);
	return databaseManager.convertToDataSet(resultQ,['load_po']);
	/**var loadPOs = [];
	loadPOs.push("");
	for (var index = 1;index <= resultQ.getSize();index++){
		rec = resultQ.getRecord(index);
		//application.output(rec.ship_load_id);
		if (loadPOs.indexOf(rec.load_po) == -1) {loadPOs.push(rec.load_po);}
		//shopOrders.push(rec.id_location);
	}
	loadPOs.sort();
	application.setValueListItems('stsvlt_loadPOs',loadPOs);*/
}
/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"12212DD7-CE31-454B-92BC-D3DD20690FFA"}
 * @SuppressWarnings(wrongparameters)
 */
function getPcmkLocations(event){
	var formName = event.getFormName();
	var form = forms[formName];

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	//q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.shop_order);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.piecemark_id.isin(form.vPcmkIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	var locations = [];
	locations.push("");
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		//application.output(rec.ship_load_id);
		if (locations.indexOf(rec.id_location) == -1) {locations.push(rec.id_location);}
		//shopOrders.push(rec.id_location);
	}
	locations.sort();
	application.setValueListItems('stsvlt_locations',locations);
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"2A751040-35F6-443C-916E-4332111B1C80"}
 * @SuppressWarnings(wrongparameters)
 */
function getSequenceNumbers(){
	//var formName = event.getFormName();
	var formName = getFormName();
	var form = forms[formName];
	//application.output('xxxx '+form.vItemRec);
	var pcmkId = "";
	if (form.vItemRec && form.vItemRec.piecemark_id){
		pcmkId = form.vItemRec.piecemark_id;
		if (application.isInDeveloper()){application.output('pcmk rec '+form.vItemRec)}
	}
	if (application.isInDeveloper()){application.output('pcmk id '+pcmkId)}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.sequence_id);
	q.result.distinct = true;
	q.where.add(q.columns.delete_flag.isNull)
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	if (!(!pcmkId)){
		q.where.add(q.columns.piecemark_id.eq(pcmkId.toString()));
	}
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	var sequenceIds = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		var rec = resultQ.getRecord(index);
		if (sequenceIds.indexOf(rec.sequence_id+"") == -1){sequenceIds.push(rec.sequence_id+"");}
		index++;
	}
	
	/** @type {QBSelect<db:/stsservoy/sequences2>} */
	var r = databaseManager.createSelect('db:/stsservoy/sequences2');
		r.result.add(r.columns.sequence_number);
		r.result.distinct = true;
		r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(r.columns.sequence_id.isin(sequenceIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/sequences2>} */
	var resultR = databaseManager.getFoundSet(r);
	/** @type {JSFoundSet<db:/stsservoy/sequences2>} */
	var ds = databaseManager.convertToDataSet(resultR,['sequence_number']);
	if (application.isInDeveloper()){application.output('---- sequence count numbers '+resultR.getSize())}
	if (resultR.getSize() == 1){
		form.vSequenceNumber = ds.sequence_number;
	} else {
		ds.rowIndex = 1;
		form.vSequenceNumber = "";
		form.vSequenceList = [];
		index = 1;
		while (index <= resultR.getSize()){
			var recR = resultR.getRecord(index);
			form.vSequenceList[recR.sequence_id] = recR.sequence_number;
			form.vSequenceList[recR.sequence_number] = recR.sequence_id;
			index++;
		}
	}
	if (application.isInDeveloper()){application.output('form seq list origin '+form.vSequenceList)}
	return ds;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"870423FA-C3C2-4D17-BAE9-71D86630FD36"}
 * @AllowToRunInFind
 */
function getStations(event){
	var stations = [];
	stations.push("");
	for (var index in globals.m.stations){
		var items = index.split(",");
		var plant = items[0]+"";
		if (plant.length == 36){continue}
		stations.push(items[1]+","+items[0]);
	}
	stations.sort();
	application.setValueListItems('stsvlt_stations',stations);
	null;
}
/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"56B19A7B-005E-4407-BCE7-195E254D89FC"}
 * @SuppressWarnings(wrongparameters)
 */
function getJobPcmks(event){
	var formName = event.getFormName();
	var form = forms[formName];

	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var q = databaseManager.createSelect('db:/stsservoy/piecemarks');
	q.result.add(q.columns.piecemark);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.piecemark_id.isin(form.vPcmkIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var resultQ = databaseManager.getFoundSet(q);
	var piecemarks = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		var rec = resultQ.getRecord(index);
		if (rec.piecemark+"" != ""){
			if (piecemarks.indexOf(rec.piecemark+"") == -1){piecemarks.push(rec.piecemark+"");}
		} else {
			if (piecemarks.indexOf(rec.material) == -1){piecemarks.push(rec.material+"")}
		}
		index++;
	}
	piecemarks.sort();
	application.setValueListItems('stsvlt_piecemarks',piecemarks);
	
}
/**
 *
 * @properties={typeid:24,uuid:"F7F003FF-9D2A-436B-B021-8D1D0AC346CF"}
 * @SuppressWarnings(wrongparameters)
 */
function getIdfileSerials(){
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfileFs = forms[getFormName()].vIdfilesFs;
	if (application.isInDeveloper()){application.output('idfiles fs '+idfileFs);}
	if (!idfileFs){
		idfileFs = databaseManager.getFoundSet('db:/stsservoy/idfiles');
	}
	var idSerials = [];
	if (idfileFs){
		var index = 1;
		var idfileIds = [];
		while (index <= idfileFs.getSize()){
			var rec = idfileFs.getRecord(index);
			idfileIds.push(rec.id_serial_number_id);
			index++;
		}
	}
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.result.add(q.columns.id_serial_number);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(q.columns.id_serial_number_id.isin(idfileIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var resultQ = databaseManager.getDataSetByQuery(q,-1);
	for (index = 1;index <= resultQ.getMaxRowIndex();index++){
		resultQ.rowIndex = index;
		idSerials.push(resultQ.id_serial_number);
	}
	if (application.isInDeveloper()){application.output('serials '+idSerials)}
	return resultQ;
}
/**
 * @properties={typeid:24,uuid:"2AE70C9F-E2B8-405E-B390-EEBA4BCAF1D1"}
 */
function getIdfileMaxLabel(){
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfileFs = forms[getFormName()].vIdfilesFs;
	if (application.isInDeveloper()){application.output('idfiles fs '+idfileFs)}
	if (!idfileFs){
		idfileFs = databaseManager.getFoundSet('db:/stsservoy/idfiles');
	}
	var max = 0;
	var barArray = [];
	
	if (idfileFs){
		var index = 1;
		///var idfileIds = [];
		while (index <= idfileFs.getSize()){
			var rec = idfileFs.getRecord(index);
			var barcodeId = rec.id_serial_number_id;
			if (!barArray[barcodeId]){
				barArray[barcodeId] = rec.summed_quantity;
			} else {
				barArray[barcodeId] += rec.summed_quantity;
			}
			index++;
		}
	}
	for (var item in barArray){
		if (barArray[item] > max){max = barArray[item]}
	}
	if (application.isInDeveloper()){application.output('max label array '+barArray)}
	return max;
}
/**
 * @properties={typeid:24,uuid:"174E3AAA-1873-49A1-ABFC-11CB49D2C714"}
 */
function showPiecemarkInfo(){
	var thisForm = forms[getFormName()];
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var pcmkRec = thisForm.vItemRec;
	var metric = (thisForm.vJobRec.metric_job == 1);
	thisForm.vCowCode = pcmkRec.cost_of_work_code;
	thisForm.vItemWeight = (metric) ? pcmkRec.item_weight : pcmkRec.item_weight_lbs;
	thisForm.vItemMaterial = pcmkRec.material;
	thisForm.vItemDescription = pcmkRec.description;
	thisForm.vItemWidth = (metric) ? pcmkRec.item_width : ftDecToString('INCHES',pcmkRec.item_width_in,20,'');
	thisForm.vItemLength = (metric) ? pcmkRec.item_length : ftDecToString('INCHES',pcmkRec.item_length_in,20,'');
	thisForm.vSummarizePcmk = (pcmkRec.piecemark == "");
	thisForm.elements.sequence_number.enabled = (pcmkRec.piecemark != "");
	if (application.isInDeveloper()){application.output('pcmkrec delete flag '+pcmkRec.delete_flag)}
	//var sequencesDS = getSequenceNumbers();
	//sequencesDS.getMaxRowIndex();
}
/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E88A058-10DF-4469-9E82-40B75DD7BCD5"}
 */
function onFocusTabsSTS(event) {
	if (session.errorShow){return}//don't show next field if error button active
	var formName = event.getFormName();
	var elName = event.getElementName();
	var baseForm = getBaseFormName(null);
	var fieldOrder = nonRfViews[baseForm];
	if (!fieldOrder){
		fieldOrder = nonRfViews[formName];
	}

	var entry = event.getSource().getDataProviderID();
	var form = forms[formName];
	var value = form[entry]; 
	var nextField = "";var currentField = "";
	for (var field in fieldOrder){
		if (currentField != ""){nextField = field;break;}
		if (field == elName){currentField = field}
	}
	if (nonRfViews[elName] == 'R' && value == ""){
		forms[formName].elements[elName].requestFocus();
	} else {
		if (form.elements[nextField]){
			form.elements[nextField].requestFocus();
		}
	}
}
/**
 * @properties={typeid:24,uuid:"0A9008AE-0606-4FC2-8ED8-15ED31B19869"}
 */
function setFieldOrder(event){
	var fieldOrder = [];
	var tabOrder = [];
	var formName = event.getFormName();
	var form = forms[formName];
	var baseForm = getBaseFormName(event);
	var fields = nonRfViews[baseForm];
	var last = "";
	for (var item in fields){
		tabOrder.push(form.elements[item]);
		if (last != ''){fieldOrder[last] = item}
		last = item;
	}
	//form.controller.setTabSequence(tabOrder);
	return fieldOrder;
}
/**
 * @properties={typeid:24,uuid:"A753FC8E-5C6B-46A6-A654-AC13220597FA"}
 */
function getSequenceNumberCounts(){
	var thisForm = forms[getFormName()];
	var sequenceNum = thisForm.vSequenceNumber;
	/** @type {JSFoundset} */
	var fs3 = thisForm.idfileRecs;
	var index = 1;
	///var itemCount = 0;
	while (index <= fs3.getSize()){
		//var rec = fs3.getRecord(index);
		///if (sequenceNum == ""){
		///	itemCount++;
		///} 
		/**else {
			var sequenceId = "";
		}*/
		index++;
	}
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfileRec = thisForm.idfileRec;
	thisForm.vItemQuantity = fs3.getSize();
	if (idfileRec.summed_quantity != 1){
		// summarized file, quantity is original quantity
		thisForm.vItemQuantity = idfileRec.summed_quantity;
	}
	mobRepIdfileId = idfileRec.idfile_id;
	var serialsFs = getIdfileSerials();
	thisForm.scopesJobsSet('dsPiecemarks', databaseManager.convertToDataSet(fs3));
	
	thisForm.scopesJobsExec('readIdfiles');
	thisForm.vNumberLabels = serialsFs.getMaxRowIndex();

}
/**
 * @properties={typeid:24,uuid:"71FA9D69-3137-4F81-AECA-0B2E2833A652"}
 * @AllowToRunInFind
 */
function loadPcmkForm(){
	var theForm = forms[getFormName()];
	//var jobNum = theForm.vJobNumber;
	//theForm.custId = theForm.vCustNumber;
	//var custId = theForm.vCustNumber;
	
	if (application.isInDeveloper()){application.output('job '+theForm.vJobNumber+' custId '+theForm.vCustNumber);}

	theForm.vJobRec = getJobData(theForm.vCustNumber,theForm.vJobNumber);
	if (application.isInDeveloper()){application.output('job rec '+theForm.vJobRec);}
	theForm.vJobId = theForm.vJobRec.job_id.toString();
	theForm.vCustId = theForm.vCustNumber;
	if (application.isInDeveloper()){application.output('+ + cust id '+theForm.vCustId+' cust num2 '+theForm.vCustNumber+' job id '+theForm.vJobId)}
	theForm.vCustRec = getCustomerIdRec();
if (application.isInDeveloper()){application.output('cust rec '+theForm.vCustRec)}
	theForm.vSheetIds = getJobIdSheets();
	theForm.vPcmkIds = getSheetIdPcmks();
	theForm.vIdfileIds = getPcmkIdIdfiles();
	theForm.vPcmkSeqs = getJobSequences();
	theForm.association = getAssociationName(theForm.vJobRec.association_id);
	theForm.vCustName = theForm.vCustRec.name;
	theForm.vJobMetric = theForm.vJobRec.metric_job;
	theForm.elements.metric.visible = (theForm.vJobMetric == 1);
	theForm.vWeightUnits = (theForm.vJobMetric == 1) ? 'kgs' : 'lbs';
	if (application.isInDeveloper()){application.output('job rec '+theForm.vJobRec);}
	if (application.isInDeveloper()){application.output('cust rec '+theForm.vCustRec);}
	if (application.isInDeveloper()){application.output('metric job '+theForm.vJobRec.metric_job);}
	if (application.isInDeveloper()){application.output('job sheets '+theForm.vSheetIds);}
	if (application.isInDeveloper()){application.output(theForm.vPcmkIds.length+' pcmks '+theForm.vPcmkIds);}
	if (application.isInDeveloper()){application.output(theForm.vIdfileIds.length+' idfiles '+theForm.vIdfileIds);}
	var jobMetrics = theForm.getJobMetrics();
	theForm.vJobWeight = jobMetrics[0];
	if (application.isInDeveloper()){application.output('metrics' + jobMetrics);}
	if (application.isInDeveloper()){application.output('metrics 2'+theForm.getJobMetricsMW());}
}
/**
 * @properties={typeid:24,uuid:"E3134688-ECA9-492E-9AAD-3DE074838425"}
 */
function getResetPcmkCounts(){
	// recalc item quantity, label quantity, label count
	var form = forms[getFormName()];
	if (application.isInDeveloper()){application.output('inside reset counts')}
	var itemQuant = 0;
	var labelCount = 0;
	///var qtyBar = 0;
	/** @type {JSFoundset} */
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfilesFs = form.vIdfilesFs;
	var index = 1;
	var quantByBarcode = [];
	var uniqueBars = [];
	//application.output('form seque '+form.vSequenceList);
	while (index <= idfilesFs.getSize()){
		var rec = idfilesFs.getRecord(index);
		index++;
		if (form.vSequenceNumber != null && form.vPcmkSeqs[form.vSequenceNumber] != rec.sequence_id){continue} // get seq or all counts
		var barId = rec.id_serial_number_id+"";
		var sumQuant = rec.summed_quantity+0;
		itemQuant += sumQuant;
		if (!quantByBarcode[barId]){quantByBarcode[barId] = 0}
		quantByBarcode[barId] += sumQuant+0;
		labelCount = (quantByBarcode[barId] > labelCount) ? quantByBarcode[barId] : labelCount;
		if (uniqueBars.indexOf(barId) == -1){uniqueBars.push(barId)}
	}
	if (application.isInDeveloper()){application.output('outside reset counts')}
	if (application.isInDeveloper()){application.output('recalced item counts '+itemQuant+' labels '+labelCount+' Bar qty '+uniqueBars.length+' sequence number '+form.vSequenceNumber)}
	form.vItemQuantity = itemQuant;
	form.vNumberLabels = uniqueBars.length;
	form.vQtyBarcode = labelCount;
	
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"60BD9BC1-EED8-4310-8BFC-A226011D52BC"}
 */
function getJobSequences(){
	var form = forms[getFormName()];
	var jobId = form.vJobId.toString();
	var sequences = [];
	/** @type {QBSelect<db:/stsservoy/sequences2>} */
	var fs = databaseManager.createSelect('db:/stsservoy/sequences2');
	fs.result.add(fs.columns.sequence_id);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.job_id.eq(jobId));
	var S = databaseManager.getFoundSet(fs);
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/sequences2>} */
	var rec = null;
	while (rec = S.getRecord(idx++)){//just iterate through.  Will not be many sequences.
		sequences[rec.sequence_id] = rec.sequence_number;
		sequences[rec.sequence_number] = rec.sequence_id;
	}
	if (application.isInDeveloper()){application.output('sequences '+sequences)}
	return sequences;
}
/**
 * @param jobId
 *
 * @properties={typeid:24,uuid:"140B6360-8B95-43D7-AEE6-665FF0418AF0"}
 * @AllowToRunInFind
 */
function checkJobEmpty(jobId){
	//var tablesAffected = '';
	//if (!checkUserPermissions(session.userId)){return false}

	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var fs = databaseManager.createSelect('db:/stsservoy/sheets');
	fs.result.add(fs.columns.sheet_id);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	jobId = (jobId) ? jobId.toString() : jobId;
	fs.where.add(fs.columns.job_id.eq(jobId));
	var S = databaseManager.getFoundSet(fs);
	if (S.getSize() == 0){return true}

	return false;
}
/**
 * @param userId
 *
 * @properties={typeid:24,uuid:"A60D1309-E511-4BA6-AC2F-2FD9DD79342D"}
 */
function checkUserPermissions(userId){
	//if (application.isInDeveloper()){
	//	if(application.isInDeveloper()){application.output('TODO is to complete user permissions for screens.')}//TODO
	//}
	return true; // if permissions allow access
}
/**
 *
 * @properties={typeid:24,uuid:"559ACDBC-A3F4-4D8A-A75F-1D8EF93AB6EA"}
 */
function getCustomerList(){
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var q = databaseManager.createSelect('db:/stsservoy/customers');
	q.result.add(q.columns.customer_id);
	q.result.add(q.columns.customer_number);
	q.result.add(q.columns.name);
	q.result.distinct = true;
	q.sort.add(q.columns.name);
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	/** @type {JSFoundSet<db:/stsservoy/customers>} */
	var resultQ = databaseManager.getFoundSet(q);

	
	var nameArray = [];
	var idArray = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		/** @type {JSRecord<db:/stsservoy/customers>} */
		var rec = resultQ.getRecord(index);
		idArray.push(rec.customer_id.toString());
		nameArray.push(rec.name+' #'+rec.customer_number);
		index++;
	}
	/** @type {JSFoundSet<db:/stsservoy/customers>} * /
	var ds = databaseManager.getDataSetByQuery('stsservoy',sql,[],-1);
	ds.sort(2,true);
	for (var index = 1;index <= ds.getMaxRowIndex();index++){
		ds.rowIndex = index;
		idArray.push(ds.customer_id);
		idArray.push(ds.customer_id);
		
		nameArray.push(ds.customer_number+' | '+ds.name);
		nameArray.push(ds.name+' | '+ds.customer_number);
	} */
	application.setValueListItems('stsvl_customerNumberAndName',nameArray,idArray);
	//return ds;
}
/**
 * @AllowToRunInFind
 * 
 * @param custId
 *
 * @properties={typeid:24,uuid:"76AA96EC-FBB3-43AF-ADEE-20125636AA88"}
 */
function checkCustEmpty(custId){
	if (!checkUserPermissions(session.userId)){return false}
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var fs = databaseManager.createSelect('db:/stsservoy/jobs');
	fs.result.add(fs.columns.job_id);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.customer_id.eq(custId.toString()));
	
	var C = databaseManager.getFoundSet(fs);
	if (C.getSize() > 0){return false}
	return true;
}
/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B952620-2EE5-4E9B-B839-914FC0B86B7F"}
 */
function onFocusGainedCustomer(event) {
	getCustomerList();
	//application.setValueListItems('stsvlt_customers',getCustomerList());
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9253D321-FD2B-4B8A-98DF-DEEB44B94028"}
 */
function addCustomer(event){
	var addCust = globals.DIALOGS.showQuestionDialog(
	i18n.getI18NMessage('sts.txt.customer.not.found'),
	i18n.getI18NMessage('sts.txt.customer.new'),
	i18n.getI18NMessage('sts.btn.yes'),
	i18n.getI18NMessage('sts.btn.no'));
		// 'Customer Not Found','Add New Customer?','Add Customer','Cancel');
	if (addCust == i18n.getI18NMessage('sts.btn.yes')){
		forms.MWBase.onActionClickCustomer(event);
	}
}
/**
 * @properties={typeid:24,uuid:"2556AA86-9A5A-4723-B3BD-E81C79EA7C0C"}
 * @SuppressWarnings(wrongparameters)
 */
function getUserNames(){
	m.userNames = [];
	/** @type {QBSelect<db:/stsservoy/users>} */
	var q = databaseManager.createSelect('db:/stsservoy/users');
	q.result.add(q.columns.user_uuid);
	q.result.add(q.columns.user_name);
	q.result.add(q.columns.association_uuid);
	q.result.distinct = true;
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.delete_flag.eq(null))
		);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/users>} */
		var rec = resultQ.getRecord(index);
		globals.m.userNames[rec.user_uuid.toString()] = rec.user_name;
		globals.m.userAssocs[rec.user_uuid.toString()]= rec.association_uuid.toString();
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"1B582C55-09F6-45F7-9216-CFD6F5C29347"}
 */
function killClient(event){
	var currentId = plugins.UserManager.Client().clientId;
	var clientId = forms[event.getFormName()].client_id;
	if (currentId+"" == clientId+""){return}
	//forms['view_license'].elements.tabless.removeAllTabs();
	var response = globals.DIALOGS.showQuestionDialog(
		i18n.getI18NMessage('sts.txt.kill.off.client'),
		i18n.getI18NMessage('sts.txt.kill.client'),
		i18n.getI18NMessage('sts.btn.no'),
		i18n.getI18NMessage('sts.btn.yes'));
		//'Kill off client?','Kill client?','No','Yes');
	if (response == i18n.getI18NMessage('sts.btn.yes')){
		var client = plugins.UserManager.getClientByUID(clientId);
		client.shutdown();
		//client.executeMethod(globals.closeClient,null);
	}
	//forms['view_license'].refreshLicenseTable();
	//client.closeSolution();
}
/**
 * @properties={typeid:24,uuid:"C537DFE5-384B-46D7-9F30-7D58218D2CC4"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function xxxunusedlistNamedElements(){
	null;
	//var appId = globals.secGetApplicationID(application.getSolutionName());
	///var formArray = forms.allnames.sort();

	///for (var index = 0;index < formArray.length;index++){
		///var formName = formArray[index];
		///var elementsDs = security.getElementUUIDs(formName);
		/**for (var elName in forms[formName]){
			if (elName.search('btn_') == -1){continue}
			application.output('appId '+appId+","+formName+","+elName);
		}*/
	///}
}
/**
 * @param {JSEvent} event
 * @param {Boolean} readOnlyForm
 *
 * @properties={typeid:24,uuid:"AB49A407-ECBC-48CF-95C0-3765ACA9D898"}
 * @AllowToRunInFind
 */
function setUserFormPermissions(event,readOnlyForm){
	var formName = event.getFormName();
	if (formName && forms[formName].elements.btn_Crossover){
		var reportFolder = plugins.VelocityReport.getReportFolder();
		if (reportFolder.charAt(reportFolder.length-1)){reportFolder=reportFolder+'\\'}
		var filePassWithPath = reportFolder+'STSCutover.txt';
		//application.output(reportFolder+' first: '+reportFolder.charAt(0)+'  last:'+reportFolder.charAt(reportFolder.length-1))
		//reportFolder = reportFolder.replace(/\\/g,'/');
		//if (reportFolder.charAt(0) == "\\".charAt(0)){
		//	var file = plugins.file.convertToRemoteJSFile(filePassWithPath);
		//} else {
		var file = plugins.file.convertToJSFile(filePassWithPath);
		// }
		forms[formName].elements.btn_Crossover.visible = (file && file.exists());
		//application.output('STSCrossover.txt exists: '+file.exists()+' '+filePassWithPath);
	}
	readOnlyForm = globals.openWindowRO;
	//set auxiliary array that sets form..element..visible..enabled
	if (session.loginUserNum == 'P'){return}
	//if (!readOnlyForm){readOnlyForm = false}
	//readOnlyForm = false;
	var showTips = (scopes.globals.showElementReferences);//20180105 show tool tips

	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT && globals.session.appName == 'STS3'){
		
		var stsURLCode = 'var stsURL = window.location.protocol';// + "://" + window.location.host + "/" + window.location.pathname;';
		plugins.WebClientUtils.executeClientSideJS(stsURLCode,globals.trackURL,['stsURL']);
	}
	var itemNum = 1;var regexp = new RegExp('_[0-9]+$');
	if (showTips){//20180105 show tool tips
		for (var el in forms[formName].elements){
			if (!el){continue}
			var formNameB = formName.replace(regexp,'');
			forms[formName].elements[el].toolTipText = itemNum+': '+formNameB+' : '+el;//20180105 show tool tips
			itemNum++;
		}
	}
	var formNames = [];var formNamesSource = [];
	formNamesSource.push(formName);var namedForm = '';
	while (namedForm = formNamesSource.pop()){
		formNames.push(namedForm);
		if (!session.formList){session.formList = []}
		if (!session.formList[namedForm]){continue}
		for (var idx3 = 0;idx3 < session.formList[namedForm].length;idx3++){
			formNamesSource.push(session.formList[namedForm][idx3])
		}
	}
	if (formNames.length == 0){formNames.push(formName)}
	var formNames1 = formNames.concat([]);
	var baseForm = globals.getBaseFormName(event);
	//if (application.isInDeveloper()){application.output('formName setUserFormPermissions '+formName)}
	var userId = globals.secCurrentUserID;
	if (!session.userId){session.userId = userId}

	/**
	var sql;
	 * applications - applications reduced to an application_id
	 * permissions - application_id permissions - server_name, table_name, form_name, element_name
	 * user_groups:user_group_uuid list <- for user_uuid
	 * groups: group_uuid list <- user_group_uuid
	 * group_keys: key_uuid list <- group_uuid
	 * permissions:  form_name, element_name <- key_uuid
	 * select * from permissions left join group_keys on permissions.key_uuid = group_keys.key_uuid left join groups on group_keys.group_uuid = groups.group_uuid left join user_groups on user_groups.group_uuid = groups.group_uuid left join users on users.user_uuid = user_groups.user_uuid  where users.user_uuid = '46'  and permissions.form_name = 'customer_specs'
	 */

	var formName2 = '';
	while (formName2 = formNames1.pop()){
		var lastUnder = formName2.lastIndexOf("_");
		var baseForm2 = formName2.substring(0,lastUnder);
		var regexp = new RegExp('\\d');
		if (formName2.slice(lastUnder+1,lastUnder+2).search(regexp) == -1){baseForm2 = formName2}

		/** @type {QBSelect<db:/stsservoy/permissions>} */
		var q = databaseManager.createSelect('db:/stsservoy/permissions');
		q.result.add(q.columns.permission_uuid);
		q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid.toString()));
		q.where.add(q.columns.form_name.eq(baseForm2));
		q.where.add(q.columns.key_uuid.isNull);
		var Q = databaseManager.getFoundSet(q);
		/** @type {JSFoundSet<db:/stsservoy/permissions>} */
		var rec = null; var idx = 1;
		while (rec = Q.getRecord(idx++)){
			if (!rec.element_name){continue}
			var elName = rec.element_name;
			if (!forms[formName2].elements[elName]){continue}
			var elVisible = rec.is_visible;
			var elEnabled = rec.is_accessible;
			//application.output('permission '+elName+elEnabled)
			forms[formName2].elements[elName].visible = (elVisible == 1);
			forms[formName2].elements[elName].enabled = (elEnabled == 1);
			//save for quick access when enabling under controller.enabled = true
			permissionsCache(baseForm2,elName,(elVisible == 1),(elEnabled == 1));
			null;
		}
	}

	formName2 = '';
	var formNameRO = formNames.concat([]);
	while (formName2 = formNames.pop()){
		//if (formName2.search('_view') != -1 || readOnlyForm){formNameRO.push(formName2);}//20181004
		lastUnder = formName2.lastIndexOf("_");
		baseForm2 = formName2.substring(0,lastUnder);
		regexp = new RegExp('\\d');
		if (formName2.slice(lastUnder+1,lastUnder+2).search(regexp) == -1){baseForm2 = formName2}

		/** @type {QBSelect<db:/stsservoy/user_groups>} */
		var r = databaseManager.createSelect('db:/stsservoy/user_groups');
		r.result.add(r.columns.user_group_uuid);
		r.where.add(r.columns.tenant_uuid.eq(session.tenant_uuid));
		r.where.add(r.columns.user_uuid.eq(session.userId.toString()));
		/** @type {QBJoin<db:/stsservoy/groups>} */
		var s = r.joins.add('db:/stsservoy/groups');
		s.on.add(r.columns.group_uuid.eq(s.columns.group_uuid));

		/** @type {QBJoin<db:/stsservoy/group_keys>} */
		var t = s.joins.add('db:/stsservoy/group_keys');
		t.on.add(s.columns.group_uuid.eq(t.columns.group_uuid));
		
		/** @type {QBJoin<db:/stsservoy/keys>} */
		var u = t.joins.add('db:/stsservoy/keys');
		u.on.add(t.columns.key_uuid.eq(u.columns.key_uuid));
		
		/** @type {QBJoin<db:/stsservoy/permissions>} */
		var v = u.joins.add('db:/stsservoy/permissions');
		v.on.add(u.columns.key_uuid.eq(v.columns.key_uuid));
		v.root.where.add(v.columns.form_name.eq(baseForm2));
		r.result.add(v.columns.element_name);
		r.result.add(v.columns.is_accessible);
		r.result.add(v.columns.is_visible);
		
		/** @type {JSDataSet<element_name:String,is_accessible:Integer,is_visible:Integer>}  */
		var R = databaseManager.getDataSetByQuery(r,-1);
		
		var maxIdx = R.getMaxRowIndex();
		for (var idx2 = 1;idx2 <= maxIdx;idx2++){
			R.rowIndex = idx2;
			if (!forms[formName2].elements[R.element_name]){continue}
			forms[formName2].elements[R.element_name].visible = (R.is_visible == 1);
			forms[formName2].elements[R.element_name].enabled = (R.is_accessible == 1);	
			permissionsCache(baseForm2,R.element_name,(R.is_visible == 1),(R.is_accessible == 1));
		}
		
	}
	while (readOnlyForm && (formName2 = formNameRO.pop())){
		for (el in forms[formName2].elements){
			if (!el){continue}
			elName = forms[formName2].elements[el].getName();
			if (elName.search(/btn_/) == 0 && elName.search(/(delete|edit|add|save|cancel|new|enable|disable)/i) != -1){
				forms[formName2].elements[el].visible = false;
			}
		}
	}
	if (formName2 && forms[formName2].elements.btn_Crossover){
		forms[formName2].elements.btn_Crossover.visible = (file && file.exists());
	}
}
/**
 * @param formObject
 * @param message
 *
 * @properties={typeid:24,uuid:"33DDD4B9-C24C-4B8D-AC82-448DBE572CA7"}
 */
function loggerDev(formObject,message){
	
}
/**
 * @AllowToRunInFind
 * 
 * @param {String} itemCSV
 * @param {Boolean} arrayToStr
 *
 * @properties={typeid:24,uuid:"B8006A73-45A6-4232-970B-6E959696A1CC"}
 */
function convertFabShopToStatusDescripId(itemCSV,arrayToStr){
	if (itemCSV == ""){return null}
	var arrayN = [];
	arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return null}
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var fs = databaseManager.createSelect('db:/stsservoy/status_description');
	fs.result.add(fs.columns.status_description_id);
	fs.where.add(fs.columns.tenant_uuid.eq(session.tenant_uuid));
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.status_code.isin(arrayN));
	fs.where.add(fs.columns.association_id.eq(session.associationId.toString()));
	var SD = databaseManager.getFoundSet(fs);
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/status_description>} */
	var rec = null;
	var shopToId = [];
	while (rec = SD.getRecord(idx++)){
		shopToId.push(rec.status_description_id.toString());
	}
	if (arrayToStr){
		return arrayToList(shopToId.toString());
	}
	return shopToId;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"797E9B3B-BDDB-4246-8AD0-4DBE8813BEBF"}
 * @AllowToRunInFind
 */
function collectCriteria2(event){
	// feeds jobs.viewBTableToForm()
	var formName = event.getFormName();
	var skipPrinted =  (scopes.jobs.tmp_Print.search(/UNPRINTED/) != -1);
	var area = scopes.globals.arrayToString(forms[formName].vArea);
	var batch = scopes.globals.arrayToString(forms[formName].vBatch);
	var cowCode = scopes.globals.arrayToString(forms[formName].vCowCode);
	var fabShop = scopes.globals.convertFabShopToStatusDescripId(forms[formName].vFabShop, true);
	var jobRel = scopes.globals.arrayToString(forms[formName].vJobRel);
	if (forms[formName].vLoadAll){
		var loadAll = null;
	} else {
		loadAll = scopes.globals.arrayToString(forms[formName].vLoadNum);
	}
	var loadRel = scopes.globals.convertLoadToId(forms[formName].vLoadRel,true);
	var lotNum = scopes.globals.convertLotToId(forms[formName].vLotNum, true);//ticket#7
	var pkgNum = scopes.globals.arrayToString(forms[formName].vPkgNum);//ticket#7, currently pkgNum is a FabTrol reference number
	var pcmkRel = scopes.globals.arrayToString(forms[formName].vPcmkRel);
	var seqNum = scopes.globals.arrayToString(forms[formName].vSeqNum);
	var sheetNum = scopes.globals.arrayToString(forms[formName].vSheetNum);
	var soNum = scopes.globals.arrayToString(forms[formName].vSONum);
	var idNum = scopes.globals.arrayToString(forms[formName].vIDNumber);
	var piecemark = forms[formName].vPiecemark;
	var minors = forms[formName].vMinors;
	var criteria = {
		area: area, 
		batch: batch,
		cowcode: cowCode,
		fabshop: fabShop,
		idnum : idNum,
		jobRel : jobRel,
		loadall : loadAll,
		loadrel : loadRel,
		lotnum : lotNum,
		pcmkrel : pcmkRel,
		piecemark : piecemark,
		pkgnum : pkgNum,
		seqnum : seqNum,
		sheetnum : sheetNum,
		sonum : soNum,
		minors : minors
	}
	var queryText = scopes.jobs.viewBTableSQL(criteria,formName);
	var fs = databaseManager.getDataSetByQuery('stsservoy', queryText, [] , -1);
	var count = fs.getMaxRowIndex();
	//application.output('criteria count is '+count);
	return count;
}
/**
 * @param {String} itemCSV
 *
 * @properties={typeid:24,uuid:"5BCEB93A-6322-4FC7-AB08-B5FC122785D5"}
 */
function csvToArray(itemCSV){
	itemCSV = itemCSV.trim();
	if (itemCSV == ""){return []}
	itemCSV = itemCSV.replace(/ *, */g,",");
	//itemCSV = itemCSV.replace(/^ */,"");
	//itemCSV = itemCSV.replace(/ *$/,"");
	return itemCSV.split(",");
}
/**
 * @param {String} fabShopCSV
 *
 * @properties={typeid:24,uuid:"50B4540A-F160-479D-9AEB-01CDF8570603"}
 */
function csvToFabshopID(fabShopCSV){
	/**
	 * incoming PAINT, TACK, WELD
	 * outgoing array of stations
	 */
	fabShopCSV = fabShopCSV.trim();
	fabShopCSV = fabShopCSV.replace(/ *, */g,",");
	//fabShopCSV = fabShopCSV.replace(/^ */,"");
	//fabShopCSV = fabShopCSV.replace(/ *$/,"");
	var statusArray = fabShopCSV.split(",");
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var sd = databaseManager.createSelect('db:/stsservoy/status_description');
	sd.result.distinct;
	sd.result.add(sd.columns.status_description_id);
	sd.where.add(sd.columns.status_code.isin(statusArray));
	var statDescArray = [];
	var SD = databaseManager.getFoundSet(sd);
	/** @type {JSRecord<db:/stsservoy/status_description>} */
	var rec = null;
	var idx = 1;
	while (rec = SD.getRecord(idx++)){
		statDescArray.push(rec.status_description_id.toString());
	}
	return statDescArray;
}
/**
 * @param fabShopCSV
 *
 * @properties={typeid:24,uuid:"D9B4AB28-7271-4542-9C8D-AF1C9E86788F"}
 */
function csvToFabCodes(fabShopCSV){
	fabShopCSV = fabShopCSV.trim();
	fabShopCSV = fabShopCSV.replace(/ *, */g,",");
	if (fabShopCSV == ""){return new Array()}
	var statusArray = fabShopCSV.split(",");
	return statusArray;
}
/**
 * @param sequenceCSV
 * @param jobid
 *
 * @properties={typeid:24,uuid:"5D37E005-1A0B-4880-84AC-3790511D7ED8"}
 * @SuppressWarnings(wrongparameters)
 */
function csvToSeqIds(sequenceCSV,jobid){
	sequenceCSV = sequenceCSV.trim();
	sequenceCSV = sequenceCSV.replace(/ *, */g,",");
	if (sequenceCSV == ""){return new Array()}
	var sequences = sequenceCSV.split(',');
	/** @type {QBSelect<db:/stsservoy/sequences2>} */
	var q = databaseManager.createSelect('db:/stsservoy/sequences2');
	q.result.add(q.columns.sequence_id);
	q.where.add(q.columns.delete_flag.isNull)
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	q.where.add(q.columns.job_id.eq(jobid.toString()))
	q.where.add(q.columns.sequence_number.isin(sequences))
	var S = databaseManager.getFoundSet(q);
	var idx = 1;
	var seqIds = new Array();
	/** @type {JSRecord<db:/stsservoy/sequences2>} */
	var rec = null;
	while (rec = S.getRecord(idx++)){
		seqIds.push(rec.sequence_id.toString());
	}
	return seqIds;
}
/**
 * @param {JSEvent} event
 * @param {String} formName
 * @param {String} elName
 *
 * @properties={typeid:24,uuid:"92E6C341-23B9-47E0-A83F-2536D9C0938E"}
 * @AllowToRunInFind
 */
function makeFormReadOnly(event,formName,elName){
	//if (application.isInDeveloper()){application.output('---- '+event.getFormName())}
	var elems = forms[formName];
	var elType = (elName == "") ? '' : forms[formName].elements[elName].getElementType();
	switch (elType){
		case 'SPLITPANE':
			/** @type {JSplitPane} */
			tabForm = forms[formName].elements[elName];
			makeFormReadOnly(event,tabForm.getLeftForm().controller.getName(),'');
			makeFormReadOnly(event,tabForm.getRightForm().controller.getName(),'');
			break;
		case 'TABPANEL':
		//case 'TABLESS':
			var tabForm = forms[formName].elements[elName];
			var maxTabs = tabForm.getMaxTabIndex();
			for (var index = 1;index <= maxTabs; index++){
				var tabFormName = tabForm.getTabFormNameAt(index);
				makeFormReadOnly(event,tabFormName,'');
			}
			break;
		default:
			var hideButtons = ['btn_Edit','btn_New','btn_Save','btn_Cancel',
				'btn_Delete','btn_Print','btn_PrintAll','btn_PrintSelected','btn_New_2',
				'btn_DeleteSelected','btn_Disconnect'];//removed btn_Rename
			elems = forms[formName].elements;
			for (var el in elems){
				if (forms[formName].elements[el].getElementType().search('TABPANEL|SPLITPANE|TABLESS') != -1){
					makeFormReadOnly(event,formName,el);
				}
				if (hideButtons.indexOf(el) != -1){
					forms[formName].elements[el].enabled = false;
					forms[formName].elements[el].visible = false; // ticket #117
					if (application.isInDeveloper()){application.output('hiding '+formName+' button '+el)}
				}
			}
	}
}
/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A0FA441-B43D-40D0-BA06-96C0872D71C7"}
 */
function onTabChangeSplit(previousIndex, event) {
	var formName = event.getFormName();
	var dividerLocation = forms[formName].elements['split'].dividerLocation;
	var noUser = null;//application.getUUID('FFFFFFFF-0000-0000-DDDDDDDDDDDD');
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var prefs = databaseManager.createSelect('db:/stsservoy/preferences2');
	prefs.where.add(prefs.columns.form_name.eq(formName));
	prefs.where.add(prefs.columns.field_type.eq('split'));
	prefs.where.add(prefs.columns.field_name.eq('split'));
	prefs.where.add(prefs.columns.tenant_uuid.eq(session.tenant_uuid));
	prefs.result.add(prefs.columns.field_value);
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var p = databaseManager.getFoundSet(prefs);
	p.loadRecords();

	if (p.getSize() > 0){
		p.field_value = dividerLocation;
		databaseManager.saveData(p);
	} else {
		var idx = p.newRecord(false);
		/** @type {JSRecord<db:/stsservoy/preferences2>} */
		var rec = p.getRecord(idx);
		rec.edit_date = new Date();
		rec.tenant_uuid = session.tenant_uuid;
		rec.field_type = 'split';
		rec.field_value = dividerLocation;
		rec.form_name = formName;
		rec.field_name = 'split';
		rec.value_description = 'Last set location for form divider.';
		rec.user_uuid = null;
		databaseManager.saveData(rec);
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"F7CECAE8-CA18-4047-A9E2-ED633DA82BFF"}
 */
function onTabChangeSplitSet(event) {
	var formName = event.getFormName();
	//var splitElement = forms[formName].elements.split;
	var dividerLocation = forms[formName].elements['split'].dividerLocation;
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var prefs = databaseManager.createSelect('db:/stsservoy/preferences2');
	prefs.where.add(prefs.columns.form_name.eq(formName));
	prefs.where.add(prefs.columns.field_type.eq('split'));
	prefs.where.add(prefs.columns.field_name.eq('split'));
	prefs.where.add(prefs.columns.tenant_uuid.eq(session.tenant_uuid));
	prefs.result.add(prefs.columns.field_value);
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var p = databaseManager.getFoundSet(prefs);
	p.loadRecords();
	
	if (p.getSize() == 1){
		forms[formName].elements['split'].dividerLocation = p.field_value;
	}
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
 * @properties={typeid:24,uuid:"4DCF6DBD-A889-4090-9D57-787FA7BA4D38"}
 */
function onDataChangeAssocType(oldValue, newValue, event) {
	//this is an office / shop setting.  if the item is already in use, then do NOT permit a change
	//do NOT permit a change if there is only one of this item in the db
	// ticket#65 check for office / shop setting for association
	var formName = event.getFormName();
	var officeFlag = oldValue;
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var a = databaseManager.createSelect('db:/stsservoy/associations');
	a.result.clear();
	a.result.add(a.columns.association_uuid);
	a.where.add(a.columns.association_uuid.eq(forms[formName].association_uuid.toString()));
	a.where.add(a.columns.delete_flag.not.eq(99));
	a.where.add(a.columns.tenant_uuid.eq(session.tenant_uuid));
	var A = databaseManager.getFoundSet(a);
	var existing = (A.getSize() != 0)
	// if size is 1, then this is existing record.  if 0, new record
	
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var aa = databaseManager.createSelect('db:/stsservoy/associations');
	aa.result.clear();
	aa.result.add(aa.columns.association_uuid);
	aa.where.add(aa.columns.delete_flag.not.eq(99));
	aa.where.add(aa.columns.tenant_uuid.eq(session.tenant_uuid));
	aa.where.add(aa.columns.logic_flag.eq(oldValue));//get existing office or shops
	var AA = databaseManager.getFoundSet(aa);
	if (((!existing) || (existing && AA.getSize() > 1)) &&
		(forms[formName].tenant_group_uuid != forms[formName].tenant_uuid)){//second test is main OFFICE division
		var selectedAssoc = forms[formName].association_uuid;
		/** @type {QBSelect<db:/stsservoy/users>} */
		var u = databaseManager.createSelect('db:/stsservoy/users');
		u.result.add(u.columns.user_uuid);
		u.where.add(u.columns.tenant_uuid.eq(session.tenant_uuid));
		u.where.add(u.columns.association_uuid.eq(selectedAssoc.toString()));
		var U = databaseManager.getFoundSet(u);
		U.loadRecords();
		if (U.getSize() == 0){
			// Check for jobs using association ticket#65 , not allocated to a user
			/** @type {QBSelect<db:/stsservoy/jobs>} */
			var j = databaseManager.createSelect('db:/stsservoy/jobs');
			j.result.add(j.columns.job_id);
			j.where.add(j.columns.tenant_uuid.eq(session.tenant_uuid));
			j.where.add(j.columns.association_id.eq(selectedAssoc.toString()));
			var J = databaseManager.getFoundSet(j);
			J.loadRecords();
			if (J.getSize() == 0){ // check for status use of association
				/** @type {QBSelect<db:/stsservoy/status_description>} */
				var s = databaseManager.createSelect('db:/stsservoy/status_description');
				s.result.add(s.columns.status_description_id);
				s.where.add(s.columns.tenant_uuid.eq(session.tenant_uuid));
				s.where.add(s.columns.association_id.eq(selectedAssoc.toString()));
				var S = databaseManager.getFoundSet(s);
				S.loadRecords();
				if (S.getSize() == 0){return true}
			}
		}
	}
	databaseManager.revertEditedRecords(forms[formName].foundset);
	scopes.globals.errorDialogMobile(event,1168,'','');//Division already used in jobs/status/user
	return true;
}
/**
 * @properties={typeid:24,uuid:"9FFA00B1-B43F-4500-9C4D-6F4BC7C8055C"}
 */
function closeClient(){
	//application.output('testing execute functions');
	application.exit();
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"1F1EA2FF-213C-49B0-B007-92C3CD804EAF"}
 */
function isOfficeFunction(event){
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var aa = databaseManager.createSelect('db:/stsservoy/associations');
	aa.result.add(aa.columns.association_uuid);
	aa.where.add(aa.columns.tenant_uuid.eq(session.tenant_uuid));
	aa.where.add(aa.columns.association_uuid.eq(session.associationId.toString()));
	var A = databaseManager.getFoundSet(aa);
	/** @type {JSRecord<db:/stsservoy/associations>} */
	var rec = A.getRecord(1);
	if (rec){
		return (rec.logic_flag == 1);
	} else {
		return false;
	}
}
/**
 * @properties={typeid:24,uuid:"D8C7F913-E0FD-4936-BBA0-66A3B9A54944"}
 * @AllowToRunInFind
 */
function getI18nWindowName(currWinName){
	if (application.isInDeveloper()){application.output('window name is '+currWinName.replace("'","%"))}
	//keep array of windowNames for rfView case selection into english function, etc
	/** @type {QBSelect<db:/stsservoy/i18n_table>} */
	var i = databaseManager.createSelect('db:/stsservoy/i18n_table');
	i.result.add(i.columns.message_key);
	if (currWinName.search('STS_main') != -1){
		i.where.add(i.columns.message_key.eq('sts.mobile.main'));
		i.where.add(i.columns.message_language.isNull);
	} else {
		i.where.add(i.columns.message_value.like(currWinName.replace("'","%")));
	}
	i.where.add(i.columns.message_key.cast(QUERY_COLUMN_TYPES.TYPE_STRING).like('sts.mobile.%'));
	var I = databaseManager.getFoundSet(i);
	/** @type {JSFoundSet<db:/stsservoy/i18n_table>} */
	var rec = I.getRecord(1);
	var key = rec.message_key;

	/** @type {QBSelect<db:/stsservoy/i18n_table>} */
	var ii = databaseManager.createSelect('db:/stsservoy/i18n_table');
	ii.result.add(ii.columns.i18n_table_id);
	ii.where.add(ii.columns.message_language.isNull);
	ii.where.add(ii.columns.message_key.eq(key));
	var II = databaseManager.getFoundSet(ii);
	if (II.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/i18n_table>} */
		var rec2 = II.getRecord(1);
		mobileWindows[currWinName] = rec2.message_value;
		var altCurrWin = currWinName.replace(/\'/g,"\\'");
		mobileWindows[altCurrWin] = altCurrWin;//ticket #151 single quotes in i18n
	} else {
		mobileWindows[currWinName] = '';
	}
	
}
/**
 * @param {JSFoundSet<db:/stsservoy/transactions>} transactions
 *
 * @properties={typeid:24,uuid:"5CAD4792-F681-4B3B-947D-DDB652CEEA74"}
 */
function rfProcessComplete(transactions){
	var index = 1;
	transactions.sort('desc quantity');
	while (index <= transactions.getSize()){
		if (transactions.quantity == 100){return true}
		index++;
	}
	return false;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param assocID
 *
 * @properties={typeid:24,uuid:"383D43B8-DF80-4A54-8B4E-F802BCC82667"}
 */
function getAssociationName(assocID){
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var assocs = databaseManager.createSelect('db:/stsservoy/associations');
	assocs.result.add(assocs.columns.association_uuid);
	assocs.where.add(assocs.columns.tenant_uuid.eq(session.tenant_uuid));
	assocs.where.add(assocs.columns.delete_flag.isNull);
	assocs.where.add(assocs.columns.association_uuid.eq(theForm.vJobRec.association_id.toString()));
	var A = databaseManager.getFoundSet(assocs);
	if (A.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/associations>} */
		var rec = A.getRecord(1);
		return rec.association_name;
	}
	return "";
}
/**
 * @param {String} assocId
 *
 * @properties={typeid:24,uuid:"0DAECB2C-67CB-464C-9BC7-605FF2AFE12D"}
 */
function checkAssociationsEmpty(assocId){
	assocId = assocId.toString();
	var tablesAffected = '';
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var as = databaseManager.createSelect('db:/stsservoy/associations');
	as.result.add(as.columns.association_uuid);
	as.where.add(as.columns.delete_flag.isNull);
	as.where.add(as.columns.tenant_uuid.eq(session.tenant_uuid));
	as.where.add(as.columns.association_uuid.eq(assocId));
	var AS = databaseManager.getFoundSet(as);
	/** @type {QBSelect<db:/stsservoy/associations>} */
	if (AS.getSize() > 0){//get two assoc pulls, one for assocId and one for all to check numbers
		/** @type {JSFoundSet<db:/stsservoy/associations>} */
		var rec = AS.getRecord(1)
		if (rec.association_uuid == rec.tenant_group_uuid){
			tablesAffected = '*PROT*';
			return tablesAffected;
		} // Do not delete an admin association
	}
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var as2 = databaseManager.createSelect('db:/stsservoy/associations');
	as2.result.add(as2.columns.association_uuid);
	as2.where.add(as2.columns.delete_flag.isNull);
	as2.where.add(as2.columns.tenant_uuid.eq(session.tenant_uuid));
	var AS2 = databaseManager.getFoundSet(as2);
	if (AS2.getSize()  == 2){
			tablesAffected = '*PROT2*';
			return tablesAffected; // Do not delete an admin account and the only association
	}
	
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var jobFS = databaseManager.createSelect('db:/stsservoy/jobs');
	jobFS.result.add(jobFS.columns.job_id);
	jobFS.where.add(jobFS.columns.tenant_uuid.eq(session.tenant_uuid));
	jobFS.where.add(jobFS.columns.delete_flag.isNull);
	jobFS.where.add(jobFS.columns.association_id.eq(assocId));//session.associationId
	var J = databaseManager.getFoundSet(jobFS);
	if (J.getSize() != 0){tablesAffected += '[jobs]';}
	
	/** @type {QBSelect<db:/stsservoy/users>} */
	var u = databaseManager.createSelect('db:/stsservoy/users');
	u.result.add(u.columns.user_uuid);
	u.where.add(u.columns.tenant_uuid.eq(session.tenant_uuid));
	u.where.add(u.columns.association_uuid.eq(assocId));
	u.where.add(u.columns.delete_flag.isNull);
	var U = databaseManager.getFoundSet(u);
	if (U.getSize() != 0){tablesAffected += '[users]';}
	
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var s = databaseManager.createSelect('db:/stsservoy/status_description');
	s.result.add(s.columns.status_description_id);
	s.where.add(s.columns.tenant_uuid.eq(session.tenant_uuid));
	s.where.add(s.columns.association_id.eq(assocId));
	s.where.add(s.columns.delete_flag.isNull);
	var S = databaseManager.getFoundSet(s);
	if (S.getSize() != 0){tablesAffected += '[status_description]'}
	return tablesAffected;
}
/**
 * @properties={typeid:24,uuid:"A306ECC1-E3DE-4C1D-B1E3-B05FE18E807C"}
 */
function checkStatusEmpty(statusId){
	statusId = (statusId) ? statusId.toString() : statusId;
	var tablesAffected = '';
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var s = databaseManager.createSelect('db:/stsservoy/status_description');
	s.result.add(s.columns.status_description_id);
	s.where.add(s.columns.tenant_uuid.eq(session.tenant_uuid));
	s.where.add(s.columns.delete_flag.isNull);
	s.where.add(s.columns.end_for_status.eq(statusId));
	var S = databaseManager.getFoundSet(s);
	if (S.getSize() > 0){tablesAffected += '[status_description]'}
	
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var t = databaseManager.createSelect('db:/stsservoy/transactions');
	t.result.add(t.columns.trans_id);
	t.where.add(t.columns.tenant_uuid.eq(session.tenant_uuid));
	t.where.add(t.columns.delete_flag.isNull);
	t.where.add(t.columns.status_description_id.eq(statusId));
	var T = databaseManager.getFoundSet(s);
	if (T.getSize() > 0){tablesAffected += '[transactions]'}

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i = databaseManager.createSelect('db:/stsservoy/idfiles');
	i.result.add(i.columns.idfile_id);
	i.where.add(i.columns.tenant_uuid.eq(session.tenant_uuid));
	i.where.add(i.columns.delete_flag.isNull);
	i.where.add(i.columns.status_description_id.eq(statusId));
	var I = databaseManager.getFoundSet(i);
	if (I.getSize() > 0){tablesAffected += '[idfiles]'}
	
	/** @type {QBSelect<db:/stsservoy/route_detail>} */
	var j = databaseManager.createSelect('db:/stsservoy/route_detail');
	j.result.add(j.columns.route_detail_id);
	j.where.add(j.columns.tenant_uuid.eq(session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.status_description_id.eq(statusId));
	var J = databaseManager.getFoundSet(j);
	if (J.getSize() > 0){tablesAffected += '[route_detail]'}
	
	return tablesAffected;
}
/**
 * @param routeId
 *
 * @properties={typeid:24,uuid:"3F144705-D93B-4E47-B686-531D72DA4F7A"}
 */
function checkRoutingCodesEmpty(routeId){
	// present in piecemarks, route_detail, 
	var tablesAffected = '';
	
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var pm = databaseManager.createSelect('db:/stsservoy/piecemarks');
	pm.result.add(pm.columns.piecemark_id);
	pm.where.add(pm.columns.delete_flag.isNull);
	pm.where.add(pm.columns.tenant_uuid.eq(session.tenant_uuid));
	pm.where.add(pm.columns.e_route_code_id.eq(routeId.toString()));
	var PM = databaseManager.getFoundSet(pm);
	if (PM.getSize() != 0){tablesAffected += '[piecemarks]'}
	
	/** @type {QBSelect<db:/stsservoy/route_detail>} */
	var rd = databaseManager.createSelect('db:/stsservoy/route_detail');
	rd.result.add(rd.columns.route_detail_id);
	rd.where.add(rd.columns.delete_flag.isNull);
	rd.where.add(rd.columns.tenant_uuid.eq(session.tenant_uuid));
	rd.where.add(rd.columns.e_route_code_id.eq(routeId.toString()));
	var RD = databaseManager.getFoundSet(rd);
	if (RD.getSize() != 0){tablesAffected += '[route_detail]'}
	
	return tablesAffected;
}
/**
 * @param {JSEvent} event
 * @param {JSRecord<db:/stsservoy/employee>} record
 * 
 * Return '' if deletable emmployee_id
 * @properties={typeid:24,uuid:"D7B03286-62A5-48C2-98C0-6E57FE3FD56F"}
 */
function checkEmployeeEmpty(event,record){
	var tablesAffected = '';
	// see transactions and  users, return true if deletable
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var employeeId = record.employee_id;
	employeeId = (employeeId) ? employeeId.toString() : employeeId;
	/** @type {QBSelect<db:/stsservoy/users>} */
	var ee = databaseManager.createSelect('db:/stsservoy/users');
	ee.result.add(ee.columns.employee_id);
	ee.where.add(ee.columns.tenant_uuid.eq(session.tenant_uuid));
	ee.where.add(ee.columns.delete_flag.isNull);
	ee.where.add(ee.columns.employee_id.eq(employeeId));
	var EE = databaseManager.getFoundSet(ee);
	if (EE.getSize() != 0){tablesAffected += '[users]'}

	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var tr = databaseManager.createSelect('db:/stsservoy/transactions');
	tr.result.add(tr.columns.trans_id);
	tr.where.add(tr.columns.employee_id.eq(employeeId));
	tr.where.add(tr.columns.tenant_uuid.eq(session.tenant_uuid));
	tr.where.add(tr.columns.delete_flag.isNull);
	var TR = databaseManager.getFoundSet(tr);
	if (TR.getSize() != 0){tablesAffected += '[transactions]'}

	return tablesAffected;
}
/**
 * @param uomId
 *
 * @properties={typeid:24,uuid:"7C6BD2AE-F6E8-4E75-A532-0D1C82FCB4F8"}
 */
function checkUOMEmpty(uomId){
	var tablesAffected = '';
	return tablesAffected;
}
/**
 * @param carrierNum
 *
 * @properties={typeid:24,uuid:"E5FF93C6-D02A-470D-A713-A23B75C81A3F"}
 */
function checkCarrierEmpty(carrierNum){
	// employee, preferences2, user_groups, users
	var tablesAffected = '';
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var cr = databaseManager.createSelect('db:/stsservoy/loads');
	cr.result.add(cr.columns.carrier_number);
	cr.where.add(cr.columns.tenant_uuid.eq(session.tenant_uuid));
	cr.where.add(cr.columns.carrier_number.eq(carrierNum));
	cr.where.add(cr.columns.delete_flag.isNull);
	var L = databaseManager.getFoundSet(cr);
	if (L.getSize() > 0){tablesAffected += '[loads]'}
	
	return tablesAffected;
}
/**
 * @param userId
 * check employee, preferences2, users, user_groups
 * @properties={typeid:24,uuid:"0D166964-89AC-47D2-BDA4-7B722A529DA6"}
 */
function checkUserEmpty(userId){
	var tablesAffected = '';
	//check for active employee_ids
	//skip preferences, that is just for user_uuid login, a deletion item
	//skip user_groups that is a deletion item
	/** @type {QBSelect<db:/stsservoy/users>} */
	var us = databaseManager.createSelect('db:/stsservoy/users');
	us.result.add(us.columns.user_uuid);
	us.where.add(us.columns.delete_flag.isNull);
	us.where.add(us.columns.tenant_uuid.eq(session.tenant_uuid));
	us.where.add(us.columns.user_uuid.eq(userId.toString()));
	var US = databaseManager.getFoundSet(us);
	
	if (US.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/users>} */
		var rec = US.getRecord(1);
		var empId = rec.employee_id.toString();
		/** @type {QBSelect<db:/stsservoy/employee>} */
		var ep = databaseManager.createSelect('db:/stsservoy/employee');
		ep.result.add(ep.columns.employee_id);
		ep.where.add(ep.columns.delete_flag.isNull);
		ep.where.add(ep.columns.tenant_uuid.eq(session.tenant_uuid));
		ep.where.add(ep.columns.employee_id.eq(empId));
		var EP = databaseManager.getFoundSet(ep);
		if (EP.getSize() > 0){
			/** @type {JSFoundSet<db:/stsservoy/employee>} */
			var rec2 = EP.getRecord(1); // only one employee per login
			if (rec2.employee_number.toUpperCase() == "P"){tablesAffected = '*PROT*'}
		}
//CURRENT ticket #150
	}
	return tablesAffected;
	
}
/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"4518A1B3-A544-451C-8859-EEFCE7D8C012"}
 */
function rfResetRevisionsField(formName){
	if (forms[formName].drawingRevision){
		forms[formName].drawingRevision = '';
		//if (forms[formName].entryRequired('fieldrevin')){
		//	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = 'drawrevin'}
		//}
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"131A6133-65BA-4A22-B933-352CAC071326"}
 */
function rfCreateBundle(event){
	bundleCreateValid();
	var formName = event.getFormName();
	var elementName = event.getElementName();
	//if (forms[formName].entryRequired(elementName)){
		//if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = elementName}
	//}
	//set here iff MC, use single-page dialog
	var message = i18n.getI18NMessage('sts.txt.use.new.bundle.number')+
			session.bundlePrefix+session.bundleSuffix;
	forms['rf_mobile_view'].elements.tablessQuery.visible = true;
	if (forms['rf_mobile_view'].elements.tablessQuery.visible){
		forms['mobile_query'].setTitleText(i18n.getI18NMessage('sts.txt.use.new.bundle.number'),session.bundlePrefix+session.bundleSuffix);
		forms['mobile_query'].setButtonTextLt(i18n.getI18NMessage('sts.btn.no'));
		forms['mobile_query'].setButtonTextRt(i18n.getI18NMessage('sts.btn.yes'));
		forms['mobile_query'].elements.btn_respond_lt.requestFocus();

		session.errorShow = true;//xxx
		//forms.mobile_query.controller.focusField('btn_respond_lt',false);
		// now must use buttons to query a global variable and set/unset visibility of mobile_query form
		return;
	}
	var response = DIALOGS.showQuestionDialog(
		i18n.getI18NMessage('sts.txt.new.bundle.number'),
		message,
		i18n.getI18NMessage('sts.btn.no'),
		i18n.getI18NMessage('sts.btn.yes'));
		// 'New Bundle Number?', message, 'NO', 'yes');
	session.errorShow = false;
	if (response == i18n.getI18NMessage('sts.btn.no')){
		mob.bundle.Id = "";
		session.errorShow = false;
		//if (event.getElementName() != 'genericin'){
		//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
		//}
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
		}

		return;
	}
	//session.errorShow = false;
	mob.bundle.Id = session.bundlePrefix+session.bundleSuffix;
	forms.rf_mobile_view.currentBundle = mob.bundle.Id;
	//if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	dataChangedBundle(formName);

	//forms.rf_mobile_view.fieldNextTab();
	//forms.rf_mobile_view.focusGain = forms.rf_mobile_view.getNextTabbed(elementName,false);
	//forms.rf_mobile_view.focusLost = elementName;

	//forms.rf_mobile_view.elements[forms.rf_mobile_view.focusGain].requestFocus();
}
/**
 * @properties={typeid:24,uuid:"C7949C53-B416-4E01-8EF2-1FCB63ADB4EB"}
 * @AllowToRunInFind
 */
function rfRecordUp(){
	var appUp = application.getActiveWindow();
	var name = appUp.controller.getName();
	//application.output('REM rfRecordUP()'+session.program);
	if (application.isInDeveloper()){application.output('REM rfRecordUP()'+session.program);}
	if (session.program.search(i18n.getI18NMessage('sts.mobile.build.bundles')) != -1){
		//application.output('REM Bundle reached '+forms.rf_mobile_view.fieldPrevTab());
		if (application.isInDeveloper()){application.output('REM Bundle reached '+forms.rf_mobile_view.fieldPrevTab());}
		if (1==0 && forms.rf_mobile_view.focusGain == ''){
			var field = forms.rf_mobile_view.tabFieldOrder[0];
			if (application.isInDeveloper()){application.output('REM Bundle reached '+field);}
			forms['rf_mobile_view'].elements['genericin'].requestFocus();
			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
			}

			//forms.rf_mobile_view.controller.focusField('bundlein',false)
		}
		return;
	}
	var fs = forms.trans_history.foundset;
	var index = fs.getSelectedIndex();
	if (index == 1){
		return;
	}
	fs.setSelectedIndex(--index);
	application.updateUI();
	return true;
	//forms.trans_history.elements.trans_status.requestFocus();
}
/**
 * @properties={typeid:24,uuid:"028F95C0-9C9D-4E2D-A8E2-ACD5D42DB647"}
 */
function rfRecordDown(){
	var fs = forms.trans_history.foundset;
	var index = fs.getSelectedIndex();
	if (index == fs.getSize()){
		return;
	}
	fs.setSelectedIndex(++index);
	application.updateUI();
	return true;
}
/**
 * @properties={typeid:24,uuid:"41C43FD0-F644-47D9-BE42-3ADB855EC84F"}
 */
function rfRecordDetail(){
	forms.trans_history.onActionDetail();
	application.updateUI();
	application.output('arrow right ');
	return true;
}
/**
 * @properties={typeid:24,uuid:"7B86E057-772F-4D25-87BB-FFC6C24194AA"}
 */
function rfRecordDetailClose(){
	forms.trans_history.onActionCloseDetail();
	application.updateUI();
	return true;
}
/**
 * @param i18nText
 *
 * @properties={typeid:24,uuid:"4E0FDB84-3EBC-493D-9FC1-AE61A2D42AE8"}
 */
function i18nSanify(i18nText){
	return i18n.getI18NMessage(i18nText).replace(/\'/g,"\\'");//ticket #151 i18n embedded single quote issue
}
/**
 * @properties={typeid:24,uuid:"1217BC41-3AD3-4F6B-B119-7A42B7D9F7D4"}
 */
function rfArrowLt(){
	forms.mobile_query.elements.btn_respond_lt.requestFocus();
}
/**
 * @properties={typeid:24,uuid:"E7B4BC53-6D8C-4EC4-8304-5945DBBBD88A"}
 */
function rfArrowRt(){
	forms.mobile_query.elements.btn_respond_rt.requestFocus();
}
/**
 * @param event
 * @param btnText
 *
 * @properties={typeid:24,uuid:"86A2ADAC-E3AF-4349-A5FF-4187D30833B1"}
 */
function rfQueryClose(event,btnText){
	forms['rf_mobile_view'].elements.tablessQuery.visible = false;
	var elName = event.getElementName();
	/**var stay = forms.rf_mobile_view.stayField;
	var dataProv = forms.rf_mobile_view.elements[stay].getDataProviderID();*/
	var dataProv = 'genericInput';
	if (elName == 'btn_respond_lt'){
		if (forms['rf_mobile_view'] && forms['rf_mobile_view'].lastAction == 'B'){dataProv = 'currentBundle'}
		forms.rf_mobile_view[dataProv] = '';
		forms.rf_mobile_view.elements['genericin'].requestFocus();
		return;
	}
	//var next = forms.rf_mobile_view.getNextTabbed(stay,false);
	//var data = forms.rf_mobile_view['genericInput'];
	//data = data.slice(0,1);
	if (elName == 'btn_respond_rt'){
		if (forms['rf_mobile_view'] && forms['rf_mobile_view'].lastAction == 'B'){dataProv = 'currentBundle'}
		forms.rf_mobile_view[dataProv] = '';//forms.mobile_query.approveValue;
		forms.rf_mobile_view.fieldErroredName = '';
		forms.rf_mobile_view.elements['genericin'].requestFocus();
	}
}
/**
 * @param {JSEvent} event
 * @param {String} formName
 *
 * @properties={typeid:24,uuid:"8A778984-DAA6-455C-B578-E3BCE28207CE"}
 */
function dataChangedBundle(event,formName){
	rfGetSpecsBundle();
	//if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}		
	if (formName == 'rf_mobile_view'){
		forms['rf_mobile_view'].elements['genericin'].requestFocus();
	} else {
		onFocusSet(event,mob.bundle.Id,'statusin');
	}

}
/**
 * @param {JSEvent} event
 * @param {String} formName
 *
 * @properties={typeid:24,uuid:"F1D23A72-CCF2-448E-B594-9EA3DF2632F4"}
 */
function dataChangedHeat(event,formName){
	globals.logger(true,i18n.getI18NMessage('sts.txt.heat.created.for.job.number',new Array(session.heatNumber,session.jobNumber)));
	var fs = databaseManager.getFoundSet('stsservoy','heats');
	/** @type {JSFoundSet<db:/stsservoy/heats>} */
	var rec = fs.newRecord();
	rec.heat_number = session.heatNumber;
	rec.tenant_uuid = session.tenant_uuid;
	rec.edit_date = new Date();
	if (forms[formName].fieldErroredName !== 'undefined'){forms[formName].fieldErroredName = ''}
	if (formName == 'rf_mobile_view'){
		rfMobileViewNextField(event);
	} else {
		onFocusSet(event,mob.bundle.Id,'statusin');
	}
}
/**
 * @param {String} custName
 *
 * @properties={typeid:24,uuid:"F10B319F-EFE8-4E72-808F-CC8109B8024E"}
 */
function getCustomerId(custName){
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var q = databaseManager.createSelect('db:/stsservoy/customers');
	q.where.add(q.columns.customer_number.eq(custName));
	q.result.add(q.columns.customer_id);
	/** @type {JSFoundSet<db:/stsservoy/customers>} */
	var Q = databaseManager.getFoundSet(q);
	return (Q.getSize() != 0) ? Q.getRecord(1).customer_id : null;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8ADBEB1-1289-45F4-AE3B-3E68F35340C2"}
 */
function onActionGeneric(event) {
//x	forms['rf_mobile_view'].elements['genericin'].requestFocus();
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
 * @properties={typeid:24,uuid:"527CADD7-4E05-4B95-B333-3D6642B8999C"}
 * @AllowToRunInFind
 */
function onDataChangeGeneric(oldValue, newValue, event) {
	if (application.isInDeveloper()){application.output('firing onDataChangeGeneric')}
	//var timeS = new Date(); var start = timeS.getTime() + 500; var endS = 0;
	//while (start > endS){
	//	endS = new Date().getTime();
	//}
	//application.output('newValue genericinput '+newValue)
	var newDate = new Date();
	if (application.isInDeveloper()){application.output('\nNEW INPUT '+newValue+' '+newDate)}
	if (newValue){
		newValue = newValue.trim();
		newValue = newValue.replace(/\\t/,'');
		newValue = newValue.toUpperCase();
	}
	var form = forms['rf_mobile_view'];
	var elName = event.getElementName();
	if (form.functionKeyEntered && !flagF8){
		form.functionKeyEntered = false;
		(elName == 'genericin') ? form.genericInput = '' : form.genericInput2 = ''; 
		rfClearPreviousEntry(event);
		return;
	}
	
	if (session.errorShow){
		session.errorShow = false;
		globals.rfErrorHide(event);
	}

	//(el == 'genericin') ? form.genericInput2 = '' : form.genericInput = ''; 
	//(el == 'genericin') ? form.elements['genericin2'].requestFocus() : form.elements['genericin'].requestFocus();
	//newValue = newValue.toUpperCase();//Android seems to ignore the case request
	var dataProv = form.elements[elName].getDataProviderID();
	var formValue = form[dataProv];
	if (formValue){
		formValue = formValue.replace(/\\t/,'');
		formValue = formValue.toUpperCase();
	}
	if (application.isInDeveloper()){
		application.output('input: '+newValue+' understood: '+formValue);
	}
	if (newValue != formValue && newValue.length < formValue.length){
		
		newValue = formValue; // use formValue in case scanned barcode incomplete during refresh or other
	}
	if (!newValue){return}

	var randBCode = allowRandomRawBarcode(event,newValue);
	
	var action = newValue.substr(0,1);
	var data = newValue.replace(action.toUpperCase(),'').toUpperCase();
	if (newValue.match(/^(Y|YES|N|NO)$/) && form.elements['queryWindow'].visible){
		action = '';
		if (newValue.match(/^(Y|YES)$/i)){action = 'YES'}
		if (newValue.match(/^(N|NO)$/i)){action = 'NO'}
	}
	if (newValue.length > 7 && checkValidSerialID(newValue)){
		action = 'D';
		entryType = 'D';
		data = newValue;
		if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')]){
			action = 'Piecemark Scan';
		}
	}
	//application.output('Entered code:'+action+' data: |'+data+'|'+' Entire entry length '+newValue.length+' |'+newValue+'|');
	if (application.isInDeveloper()){
		application.output('Entered code:'+action+' data: |'+data+'|');
		//return true;
	}
	//var targView = forms['rf_mobile_view'];
	if (flagFunction == 'rfF7TrailerInfo'){//special trailer view processing
		action = 'TF7'+action;
	}

	/** if (rfOkToProcessId(event)){
		application.output('- > -> -> process ID');
	} else {
		application.output('not yet ready for ID');
	} */
	var idIsBundle = false;
	if (session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')] && action == 'B' && data.search('ND') == 0){//11
		idIsBundle = barcodeIsBundle(action+data);
		data = action+data;
		action = 'D';
	}
	if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.build.bundles')] && (newValue.search(/(BND|BBND)/) == 0)){//SHIP action 'Go'
		idIsBundle = barcodeIsBundle(action+data);
		if (idIsBundle){
			action = 'B';
			data = newValue.match(/(BND.*)/)[1];
		}
	}
	//alternatively detect non-prefixed entries
	//determine prefix for genericin entry
	//var anticipEntry = '';
	if (newValue.search('BND') == 0 && !(!commandPrefixes['bundlein'])){
		data = newValue;
	}
	if (action == 'P'){
		if (checkValidSerialID(newValue)){
			anticipEntry = 'D';
			data = newValue;
		} else if (checkValidSerial(data)){
			anticipEntry = 'P';
		}	
	}

	if (newValue.length >= scopes.prefs.barcodeLength && 
			!rfOkToProcessId(event) && action != 'Piecemark Scan' && action != 'B' && action != 'RM'){//task #214 accept bar code without prefix I(D) Number
		/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
		var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
		q.where.add(q.columns.id_serial_number.eq(newValue));
		q.result.add(q.columns.id_serial_number);
		q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
		q.where.add(q.columns.delete_flag.isNull);
		var Q = databaseManager.getDataSetByQuery(q,1);
		
		if (Q.getMaxRowIndex() != 0){
			action = 'D';
			data = newValue;
			/**
			 * action doesn't apply to other fields
			 */
			/** @type {Array} */
			var reqFlds = forms['rf_mobile_view'].requiredFields;
			var idxId = reqFlds.indexOf('currentidin');
			var formMV = forms['rf_mobile_view'];
			for (var idx = 0;idx < idxId;idx++){
				var fld = reqFlds[idx];
				if (fld == '' || fld.search('genericin') == 0){continue}//get rid of cleared required codes
				var fldProv = formMV.elements[fld].getDataProviderID();
				if (formMV[fldProv] == '' && flagFunction == null){//skip trailer fields
					var placeText = i18n.getI18NMessage(formMV.elements[fld].placeholderText);
					var msg = placeText+ ' '+i18n.getI18NMessage('sts.txt.missing.entry');
					errorDialogMobile(event,msg,'genericin','');
					//rfErrorShow(msg);
					clearMobileEntries(event,'');
					return true;
				}
			}
		}
	}
	
	session.errorShow = false;//set genericin as the focus unless there is an error message
	var entryType = '';
	if (newValue.toUpperCase() == 'XXX'){
		action = 'XXX';
	}
	var printEnabledScreen = !(!globals.m.i18nMobilePrintViews[session.program]);//20190202 set or unset print enabled screen
	if (newValue.match(/(PON|POFF)/)){
		if (!printEnabledScreen){
			errorDialogMobile(event,1277,'genericin','');
			action = 'NOTHING';
		} else {
			action = newValue;
		}
	}
	showPrintQueueEffort = false;//only print notice when requested on zero labels to print
	
	if (randBCode){
		action = 'RM';
		data = newValue;
	}
	rfLoggerMobile(event,'action:'+action.toUpperCase()+' entry:'+newValue);
	switch (action.toUpperCase()){
		case 'NOTHING':
			break;
		case 'YES':
		case 'NO':
			queryResponseHandler(event,action);
			break;
		case 'PON':
			form['printEnabled'] = 'ON';
			break;
		case 'POFF':
			form['printEnabled'] = 'OFF';
			break;
		//B or b - (B)undle
		case 'B':
			entryType = 'B';
			if (forms['rf_mobile_view'].shownFields.indexOf('bundlein') == -1 &&
				forms['rf_mobile_view'].shownFields.indexOf('bundledin') == -1){
				if (session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')]){
					errorDialogMobile(event,1229,'genericin','Bundle');
				} else {
					errorDialogMobile(event,1229,'genericin','Bundled');					
				}
				break;
			}
			//if (data.search('BND') != 0 || data != ''){break}
			//if (!data && forms['rf_mobile_view'].elements['bundlein']){forms['rf_mobile_view'].currentBundle = '';break;}
			if (session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')] &&
					session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')]){
				onDataChangeBundle(oldValue,data,event);
			} else {
				form['bundled'] = (data.search('N') == 0) ? i18n.getI18NMessage('sts.btn.no') : i18n.getI18NMessage('sts.btn.yes');
			}
			//session.errorShow = false;
			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			//x	plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
			}
			//if (event.getElementName() != 'genericin'){
			//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
			//}
			break;
		//C or c - Lo(c)ation
		case 'C':
			entryType = 'C';
			if (newValue.search('CL') == 0 && newValue.length == 12 && 
					session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')]){
				null;
				globals.session.rawCutPiecemarksSelected = [];//clear selected entries in raw cutlist pcmk instance selection
				if (!dataEntryComplete(event,'barcodeclin')){
					break
				} else if (dataEntryComplete(event,'all')){
					if (processGoEvent(event)){
						break;
					}
				}
				// check for CLxxx barcode in FS, comes from FS
				newValue = scopes.jobs.setProperCLBarcode(event,newValue);
				if (!newValue){break}
				clearCutListData(event);
				globals.rfClearDependentEntries(event,'barcodeclin');
				session.cutlistdata = scopes.fs.getFSCutList(event,newValue);
				var askFS = session.cutlistdata;
				if (!askFS.error){
					globals.mob.timedBegin = new Date();
					session.cutlistdata = scopes.jobs.verifyCutListItems(event,session.cutlistdata);
					//form['cutListArray'] = scopes.jobs.cutListIdentifyArray(event,askFS.cutArray);
					form['maxQuantity'] = askFS.qtyremaining;
					form['cutlistBarcode'] = newValue;
					if (askFS.qtyremaining == 1) {form['quantity'] = "1"}
					if (askFS.drop){
						//var metric = (askFS.dropType.toUpperCase().search(/(IN)|(FT)/) == -1);
						if (askFS.drop){
							//if (askFS.dropWidth){
							//	form['dropWidth'] = (metric) ? askFS.dropWidth : askFS.dropWidth+' '+askFS.dropWidthType;
							//}
							//if (askFS.dropType.toLowerCase().search('sq') == -1){
							form['dropLength'] = askFS.drop;//(metric) ? askFS.drop : ftDecToString('FEET',askFS.drop,13,'ALL');
							form['allLength'] = form['dropLength'];
							form['dropWidth'] = (askFS.dropWidthType != "in") ? Math.floor(askFS.dropWidth) : ftDecToString('INCHES',askFS.dropWidth,13,'INCHES');
							//} else {
							//	//var dLength = askFS.drop / askFS.width;
							//	form['dropWidth'] = askFS.width;//(metric) ? askFS.width : ask.width;
							//	form['dropLength'] = (metric) ? Math.floor(askFS.drop) : ftDecToString('FEET',askFS.drop,13,'ALL');
							//}
						}
						if (askFS.shape && askFS.dimensions){form['invMaterial'] = askFS.shape+" "+askFS.dimensions}
						if (askFS.grade){form['invGrade'] = askFS.grade}
						if (askFS.location){form['invLocation'] = askFS.location}
						//if (askFS.dropType && askFS.dropType == "imperial"){form['dropLength'] = askFS.drop+" "+askFS.dropType}
					}
					//form['dropWidth'] = (askFS.dropType.search("in") != -1) ? "0\"" : "0 mm";
				} else {
					//application.output('error in CLxx number');
					//show FS error
					errorDialogMobile(event,1220,'genericin',askFS.error);
					form['cutlistBarcode'] = '';
					form['invGrade'] = '';
					form['invMaterial'] = '';
					break;
				}
				break;
			}
			if (forms['rf_mobile_view'].shownFields.indexOf('locationin') == -1 &&
					forms['rf_mobile_view'].shownFields.indexOf('stocklocationin') == -1 &&
					forms['rf_mobile_view'].shownFields.indexOf('droplocin') == -1){
				errorDialogMobile(event,1229,'genericin','Location');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['locationin']){forms['rf_mobile_view'].statusLocation = '';break;}
			onDataChangeLocation(oldValue,data,event);
			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
				//forms['rf_mobile_view'].elements['genericin'].enabled = true;
				//plugins.WebClientUtils.executeClientSideJS('',globals.focusFirst());
			}
			//if (event.getElementName() != 'genericin'){
			//	forms['rf_mobile_view'].elements['genericin'].requestFocus();
			//}
			break;
		//D or d - I(D) Number - complete serialization - typical ID nomenclature
		case 'D':
			entryType = 'D';
			if (forms['rf_mobile_view'].shownFields.indexOf('currentidin') == -1){
				errorDialogMobile(event,1229,'genericin','Serial Number');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['currentidin']){break;}
			if (!checkBarcodeWithJob(event,data)){
				errorDialogMobile(event,702,'genericin',data);
				break;				
			}
			//20190625 jmc add to account for labor screen
			forms['rf_mobile_view'].currentID = data; 
			onDataChangeBarcode2(oldValue,data,event);

			break;
		//G or g = (G)rade
		case 'F':
			entryType = 'F';
			if (forms['rf_mobile_view'].shownFields.indexOf('finalizein') == -1){
				errorDialogMobile(event,1229,'genericin','Finalize');//2019017 added inventory screen
				break;
			}
			form['finalize'] = (data.search('N') == 0) ? i18n.getI18NMessage('sts.btn.no') : i18n.getI18NMessage('sts.btn.yes');
			break;
		case 'G':
			entryType = 'G';
			if (newValue.match(/(G[O]{0,1})$/) && 
					session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.tfs')]){
				//showPrintQueueEffort = true;
				showPrintQueueEffort = (rfGetInventoryTFS(event));
				break;
			}
			if (newValue.match(/(G[O]{0,1})$/) && 
					session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')]){
				null;// GO or G
				showPrintQueueEffort = true;
				if (!dataEntryComplete(event,'quantityin')){break}
				var cutAll = (form.strikeThru.toUpperCase() == i18n.getI18NMessage('sts.btn.yes').toUpperCase());
				var shop = globals.session.association;
				var locs = scopes.fs.locationNormalize(event,shop,form.statusLocation);
				null;
				var TFSresponse = scopes.fs.matchCLtoRMBarcodesProcess(event,null,form.cutlistBarcode,form.asnNumber,form.quantity,cutAll,form.dropWidth,form.dropLength,locs.division,locs.location);
				var stock = '';
				if (TFSresponse.rtsmessage == i18n.getI18NMessage('sts.btn.scrap')){
					stock = i18n.getI18NMessage('sts.btn.scrap').toUpperCase();
				} else if (TFSresponse.rtsmessage == i18n.getI18NMessage('sts.btn.restock')){
					stock = i18n.getI18NMessage('sts.btn.restock');
				}
				if (!TFSresponse.error){
					var cutlistData = session.cutlistdata;
					globals.mob.timedEnd = new Date();
					form.asnNumber = scopes.jobs.cutlistInventoryProcess(event,cutlistData,TFSresponse)//process restock or remove inventory number
					scopes.jobs.cutlistSTSProcess(event,cutlistData,TFSresponse);
					// push a cut if third party code exists
					if (globals.m.stationsThird[form.statusCode]){
						//insert cut call to fabsuite, check dependencies, and execute on STS as well
						scopes.fs.processRawCutBarcodes(event,cutlistData);
					}
					form['heat'] = TFSresponse.heatnumber;
					form['invLocation'] = form['statusLocation'];
					if (TFSresponse.rtsmessage){//process STS side, transactions, RM barcode
						if (TFSresponse.rtsmessage == 'No Drop'){//responses No Drop/Scrap/Restock
							//remove inventory number
							scopes.jobs.updateSTSInventory(event,form.asnNumber,null,true,0);
							//print scrap label, check prefs
						} else {
							//update inventory values
							//var inventoryUpdate = scopes.fs.getInventorySerial(event,form.asnNumber);
							//form.asnNumber = scopes.jobs.updateSTSInventory(event,form.asnNumber,inventoryUpdate,false,form.quantity);
							//scopes.jobs.updateSTSInventory(event,form.asnNumber,inventoryUpdate,false,form.quantity);//20200305
							//print invBarcode. fabsuite prefs, printing ON, 
							if (form['printEnabled'] == 'ON' && (!(scopes.prefs.lFsDoNotPrintScrapLabels*1) || TFSresponse.rtsmessage == 'Restock')){
								application.output('Printing Remnant '+form.asnNumber);
								var tempPrtUUID = getInvUUID(event,form.asnNumber);
								if (tempPrtUUID){
									if (!invUUIDs){invUUIDs = new Array()}
									invUUIDs.push(tempPrtUUID.toString());
									form['labelPrintType'] = 'material';
									scopes.printer.onActionPrintRMLabels(event,invUUIDs)
								}
							}
							if (TFSresponse.rtsmessage == 'Scrap'){
								//scopes.jobs.updateSTSInventory(event,form.asnNumber,inventoryUpdate,false,form.quantity);	
							}
						}
						if (invUUIDs){
							if (TFSresponse.rtsmessage != 'No Drop'){//Scrap Restock
								errorDialogMobile(event,1220,'genericin',TFSresponse.rtsmessage+' '+stock+' Labels: '+invUUIDs.length);
							} else {
								errorDialogMobile(event,1220,'genericin',+' '+stock+' Labels: '+invUUIDs.length);
							}
						}
					}
					globals.rfClearDependentEntries(event,'locationin');
				} else {
					errorDialogMobile(event,1220,'genericin',TFSresponse.error);
				}
				if (TFSresponse.rtsmessage != 'No Drop'){//Scrap Restock
					errorDialogMobile(event,1220,'genericin',TFSresponse.rtsmessage+' '+stock);
				}				
				break;
			}
			var processGo = (newValue.match(/(G[O]{0,1})$/) && forms['rf_mobile_view'].shownFields.indexOf('loadnumberin') != -1);
			if (forms['rf_mobile_view'].shownFields.indexOf('gradein') == -1 &&
					!processGo){//Go means process through query dialog 20180829
				errorDialogMobile(event,1229,'genericin','Grade');
				break;
			}
			if ((!data && forms['rf_mobile_view'].elements['gradein'].visible) &&
					!processGo){
					if (!processGo){forms['rf_mobile_view'].grade = ''}
					break;
			}
			if (processGo){
				rfFinalShip(event);
			} else {
				onDataChangeGrade(oldValue,data,event);
			}
			break;
		//H or h - (H)eat
		case 'H'://(H)eat
			entryType = 'H';
			if (forms['rf_mobile_view'].shownFields.indexOf('heatin') == -1){
				errorDialogMobile(event,1229,'genericin','Heat');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['heatin']){forms['rf_mobile_view'].heat = '';break;}
			onDataChangeHeat(oldValue,data,event);
			break;
		case 'I'://
			if (forms['rf_mobile_view'].shownFields.indexOf('isauditin') != -1){
				if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit.sweep')]){
					rfGetInventorySweepInfo(event,newValue);
				}
				break;
			}
			if (forms['rf_mobile_view'].shownFields.indexOf('iaauditin') != -1){
				if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')]){
					iaResult = scopes.fs.fabSuiteInventoryAuditScan(event,newValue);
					if (!iaResult.error){
						form.auditBarcode = newValue;
						populateIaResult(event);
						if (iaResult.audit_quantity_remaining == 0){
							errorDialogMobile(event,'1287','genericin','');
							break;
						}
					}
				}
			}
			break;
		case 'IA':
			null;
			form.asnNumber = scopes.jobs.findRMNumber(event,form.asnNumber);//20190227 Inventory Audit Edit
			break;
		//J or j - (J)ob Numbers
		case 'J':
			entryType = 'J';
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.tfs')]){
				if (!rfJobCheck(data,session.associationId)){
					// error job not in user's division
					errorDialogMobile(event,'1294','dialog','');
					break;
				}
			}
			if (forms['rf_mobile_view'].shownFields.indexOf('jobnumberin') == -1 && 
					forms['rf_mobile_view'].shownFields.indexOf('dropjobin') == -1 ){
				errorDialogMobile(event,1229,'genericin','Job Number');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['jobnumberin']){forms['rf_mobile_view'].jobNumber = '';break;}
			onDataChangeJob(oldValue,data,event);
			break;

		//L or l - (L)oad Numbers
		case 'L':
			entryType = 'L';
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')] ||
					session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.tfs')]){
				var drop = globals.strToDec('FEET',data);
				if (drop == -1){
					form['dropLength'] = '';
					form['dropWidth'] = '';
					// error 830 invalid length entry
					errorDialogMobile(event,830,'genericin',data);
					break;
				} else {
					//process cut list here
					form['dropLength'] = globals.ftDecToString('FEET',drop,13,'ALL');
				}
				rfLocalChangeToInventory(event);
				break;
			}
			if (forms['rf_mobile_view'].shownFields.indexOf('loadnumberin') != -1 &&
					forms['rf_mobile_view'].shownFields.indexOf('jobnumberin') != -1 &&
					!form['jobNumber']){
				errorDialogMobile(event,1276,'genericin','');
				break;
			}
			if (forms['rf_mobile_view'].shownFields.indexOf('loadnumberin') == -1 &&
			forms['rf_mobile_view'].shownFields.indexOf('billofladingin') == -1){
				if (session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')]){
					errorDialogMobile(event,1229,'genericin','Load');
				} else {
					errorDialogMobile(event,1229,'genericin','BOL');
				}
				break;
			}
			//if (!data && forms['rf_mobile_view'].elements['loadnumberin']){forms['rf_mobile_view'].loadNumber = '';break;}
			if (session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')]){
				onDataChangeLoad(oldValue,data,event);////20181003 start here
				if (session.interim){
					forms['rf_mobile_view'].elements['loadnumberinlabel'].text = i18n.getI18NMessage('sts.mobile.entry.load.number.interim');
				} else {
					forms['rf_mobile_view'].elements['loadnumberinlabel'].text = i18n.getI18NMessage('sts.mobile.entry.load.number');
				}
			} else {//add BOL on checklist receive screen
				form['billOfLading'] = data;
			}
			break;
		//M or m - piece(m)ark
		case 'M':
			entryType = 'M';
			if (forms['rf_mobile_view'].shownFields.indexOf('piecemarkin') == -1){
				errorDialogMobile(event,1229,'genericin','Piecemark');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['piecemarkin']){forms['rf_mobile_view'].piecemark = '';break;}
			onDataChangePiecemark(oldValue,data,event);
			break;
		case 'O':
			entryType = 'O';
			if (newValue.search(/(OFF|ON)/) == 0) {form['printEnabled'] = newValue;break;}
			//if (form['printEnabled'] != ''){if (application.isInDeveloper()){application.output('Printing '+newValue)}; break}
			entryType = 'O';
			if (forms['rf_mobile_view'].shownFields.indexOf('countryoriginin') == -1){
				errorDialogMobile(event,1229,'genericin','Country Of Origin');
				break;
			}
			forms['rf_mobile_view'].countryOfOrigin = data;
			break;
		//P or p - (P)art Serial Number [Ex. P0000000001 thru PZZZZZZZZZZ then it is P0000000001 again] - starting point for barcoding w/FS Built In
		case 'P':
			entryType = 'P';
			if (form.shownFields.indexOf('printidin') != -1){
				form.printIdLabel = (newValue.match(/^(PY|PYES)$/i)) ? i18n.getI18NMessage('sts.btn.yes').toUpperCase() : i18n.getI18NMessage('sts.btn.no').toUpperCase();
				if (!scopes.prefs.lFsPrintIDFromCutList || scopes.prefs.lFsPrintIDFromCutList*1 == 0){form.printIdLabel = i18n.getI18NMessage('sts.btn.no').toUpperCase();}
				break;
			}
			if (forms['rf_mobile_view'].shownFields.indexOf('partnumberin') == -1){
				errorDialogMobile(event,1229,'genericin','Part Serial');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['partnumberin']){forms['rf_mobile_view'].partnumber = '';break;}
			//return true;
			//onDataChangeBarcode2(oldValue,data,event);
			break;
		case 'PIECEMARK SCAN'://MAKE uppercase to select OnAction
			scopes.jobs.scanCutListPiecemarkBarcodes(event,data);
			break;
		//Q or q - (Q)uantity
		case 'Q':
			entryType = 'Q';
			if (forms['rf_mobile_view'].shownFields.indexOf('quantityin') == -1){
				errorDialogMobile(event,1229,'genericin','Quantity');
				break;
			}
			if (data.search(/[^0-9]/) != -1){
				errorDialogMobile(event,1274,'genericin','Invalid Entry NaN');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['quantityin']){forms['rf_mobile_view'].quantity = 0;break;}
			form['quantity'] = data;
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')]){
				scopes.jobs.rfProcessInventoryAudit(event,iaResult,form.asnNumber,form.quantity);
				break;
			}
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.tfs')]){
				checkInventoryTFSQty(event,data);
				break;
			}
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')]){
				// valid number, set received, get job number
				if (form.quantity == ''){break}
				//if (form.quantity == 0){return}
				if (!dataEntryComplete(event)){form.quantity = '';break}
				var bundled = (form.bundled.toUpperCase() == i18n.getI18NMessage('sts.btn.yes').toUpperCase());
				var recCount = (bundled) ? 1 : form.quantity;
				var bndQuantity = (bundled) ? form.quantity : 1;
				var recvDate = new Date();
				var barcodeData = {ponumber:form.poNumber,deliverydate:recvDate,billoflading:form.billOfLading,
					receivingremarks:form.remarks,countryoforigin:form.countryOfOrigin,
					heatnumber:form.heat,location:session.association,location2:form.stockLocation};
				/** if (scopes.prefs.promptFabShop == 1){//20190201 select where to place raw received if prefs indicate
					if (scopes.prefs.lFsFlipPrimSecWhenShop == 1){
						barcodeData.location2 = session.association;//location first, shop second
					} else {//default
						barcodeData.location = session.association;						
						barcodeData.location2 = form.stockLocation;//shop first, location second
					}
				} */
				var invUUIDs = [];
				for (idx = 1;idx <= recCount;idx++){
					var stsBarcode = scopes.jobs.createValidBarcodeRM();
					form.asnNumber = stsBarcode;//ASN is the new barcode number for this checklist receive
					form.lastQty = form.quantity;
					var error = scopes.fs.fabsuiteSetReceivedBarcode(event,form.invBarCode,stsBarcode,bndQuantity,barcodeData);
					if (error.error){break}
					form.invRemains = error.qtyremaining;
					var returnObj = scopes.fs.fabsuiteGetReceivedBarcodeInv(event,stsBarcode);
					//application.output(' RM '+returnObj.jobnumber+ 'bundled '+bundled+' form.bundled '+form.bundled+ ' i18n '+i18n.getI18NMessage('sts.btn.yes').toUpperCase());
					var assignedJobNumber = returnObj.jobnumber;//valid inventory entry complete from fabsuite
					var invUUID = scopes.jobs.receiveRawMaterialIntoInventory(event,assignedJobNumber,stsBarcode,bndQuantity);
					invUUIDs.push(invUUID.toString()); //list of invUUID's to print
				}
				if (error.qtyremaining > 0){form.heat = ''}
				if (error.qtyremaining == 0){
					//temp display completed message
					form.heat = '';
				}
				if (error.error){//fs receive raw material set
					errorDialogMobile(event,1220,'genericin',error.error);
					break;
				} else {
					if (form.printEnabled == i18n.getI18NMessage('sts.txt.on')){
						scopes.printer.onActionPrintRMLabels(event,invUUIDs);
					}
					form.quantity = '';
				}
				
			} else if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')]){
				if (!dataEntryComplete(event,'quantityin')){break}
				//check quantity against availablequanity
				if (form['maxQuantity']*1 < data*1){
					errorDialogMobile(event,1062,'genericin','');
					form['quantity'] = '';
					break;
				} else {
					forms['rf_mobile_view']['quantity'] = Math.floor(data*1).toString();
					break;
				}
			}
			break;
			
		//R or r - Use(r)Name - * - FS user name - this is username for fabSuite
		case 'R':
		case 'RM':
			var fsHasInventory = false;
			if (action == 'RM' || newValue.match(/RM[0-9]{9,15}/)){
				if (action == 'RM'){form.asnNumber = data;}//add raw material data serial
				fsHasInventory = syncFSSTSInventory(event,newValue);//check with FS and sync before any other ops
				//break;
			}
			entryType = 'R';
			if (forms['rf_mobile_view'].shownFields.indexOf('remarksin') == -1 &&
				forms['rf_mobile_view'].shownFields.indexOf('barcodein') == -1 &&
				forms['rf_mobile_view'].shownFields.indexOf('asnin') == -1 &&
				forms['rf_mobile_view'].shownFields.indexOf('barcodermin') == -1 &&
				forms['rf_mobile_view'].shownFields.indexOf('laborin') == -1){
				if (session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')] ||
				session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')]){
					errorDialogMobile(event,1229,'genericin','Remarks');
				} else {
					errorDialogMobile(event,1229,'genericin','Bar Code');					
				}
				break;
			}
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.move')]){
				form['asnNumber'] = newValue;
				rfInventoryMove(event);
				break;
			}
			if (action == 'RM' && session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.asn.receiving')]){
				rfASNReceiving(event,newValue);
				break;
			}
			if (action == 'R' && session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.tfs')]){
				if (rfJobCheck(data,session.associationId)){//rfCheckValidJob(event,data)){//check that job is in current users division
					form['dropJob'] = data;
				} else {
					errorDialogMobile(event,'1294','dialog',i18n.getI18NMessage('1295'));//job does not exist in the division its returned to
					form['dropJob'] = '';
				}
				break;
			}
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')]){
				if (scopes.jobs.inventoryCheck(newValue)){
					errorDialogMobile(event,'1286','genericin','');//inventory already in STSX, now verify against EPM
					break;
				}
				form['asnNumber'] = newValue;
				rfInventoryAudit(event);
				break;
			}
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit.sweep')]){
				//if (scopes.jobs.inventoryCheck(newValue)){
				//	errorDialogMobile(event,'1286','genericin','');//inventory already in STSX, now verify against EPM
				//	break;
				//}
				form['asnNumber'] = newValue;
				rfInventoryAuditSweep(event,newValue);
				break;
			}
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.status')]){
				form['asnNumber'] = newValue;
				rfInventoryStatus(event,newValue);
				break;
			}
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.tfs')]){
				rfPopulateInvInfoTFS(event,newValue,fsHasInventory);
				break;
			}

			if (session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')] &&
					session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.status')] &&
					session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')] &&
					session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.labor.inspections')] &&
					session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')] &&
					session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.labor.transactions')]){
				form['remarks'] = data;
			} else {
				if (newValue.search('RC') == 0 && newValue.match(/(RC[0-9]+)/) && (
						session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')] ||
						session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.status')])){
					newValue = scopes.jobs.setProperRCBarcode(event,newValue);//ensure barcode is proper length
					if (!newValue){break}
					form['invBarCode'] = newValue;
					var invLine = scopes.fs.getReceivedBarcode(event,newValue);
					if (!(!invLine.error)){//a blank error means there is data returned from fabsuite
						errorDialogMobile(event,invLine.error,'genericin','');
						break;
					}
					form.invLine = invLine;
					form.invOrdered = invLine.qtyordered;
					form.invRemains = invLine.qtyremaining;
					form.invMaterial = invLine.shape+' '+invLine.dimensions;
					form.invGrade = invLine.grade;
					scopes.globals.mobItemLength = scopes.globals.mmToFeet(invLine.length)//scopes.globals.ftDecToString('INCHES',globals.mmToFeet(invLine.length),null);;
					scopes.globals.mobItemWeight = scopes.globals.kgToLb(invLine.weighteach);
					application.output(invLine)
					form.poNumber = invLine.ponumber;
					form.asnNumber = scopes.jobs.getChecklistInventory(event,newValue);
					if (invLine.qtyremaining == 0){
						errorDialogMobile(event,1075,'genericin','');
					}
				} else if ((randBCode || (newValue.search('RM') == 0 && newValue.match(/(RM[0-9]+)/))) &&
						session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.inventory.audit')]){
					var inv = scopes.jobs.inventoryCheck(newValue);
					if (inv && !(!inv.inventory_ref_number)){
						errorDialogMobile(event,'1286','genericin',inv.inventory_ref_number);
						break;
					}
					form.asnNumber = newValue;
					form.bundled = i18n.getI18NMessage('sts.btn.yes').toUpperCase();
					break;
				} else if ((randBCode || (newValue.search('RM') == 0 && newValue.match(/(RM[0-9]+)/))) &&
							session.program != mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')]){
					// check RMxxx serial
					if (!dataEntryComplete(event,'asnin')){break}
					//newValue = scopes.jobs.setProperRMBarcode(event,newValue);
					if (!newValue){break}
					//application.output('RM Stick '+newValue)
					var matchInfo = scopes.fs.matchCLtoRMBarcodes(event,form.cutlistBarcode,newValue);
					if (!matchInfo.error){
						form['asnNumber'] = newValue;//Raw Material Stick is Good, Start cutting
						form['heat'] = matchInfo.heatnumber;
					} else {
						errorDialogMobile(event,1220,'genericin',matchInfo.error);
						form['heat'] = '';
						form['asnNumber'] = '';
						//for (var i = 0;i < 5;i++){
						//	errorDialogMobile(event,'Added This Error','genericin','dog dog cat'+i);
						//	application.output('adding additional errors')
						//	application.sleep(1000)
						//}
						break;
					}
					//var response = i18n.getI18NMessage('sts.btn.no');
					//if (session.dualEntry && scopes.prefs.lFsPrintIDFromCutList == '1'){
					//	queryMobileShow(event,i18n.getI18NMessage('sts.txt.question.print.out.cutlist.labels'));
					//	break;
					//}
					//if (scopes.prefs.lFsPrintIDFromCutList == '1' ){
					//	response = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.question'),i18n.getI18NMessage('sts.txt.question.print.out.cutlist.labels'),i18n.getI18NMessage('sts.btn.no'),i18n.getI18NMessage('sts.btn.yes'));
					//}
					//if (response == i18n.getI18NMessage('sts.btn.no')){
						/** var cutarray = globals.session.cutlistdata.cutarray;
						for (var idx3 = 0;idx3 < cutarray.length;idx3++){
							var cutItem = cutarray[idx3];
							cutItem.Barcode = '';cutItem.SerialNumber = '';
						} */
					//	globals.session.rawCutPiecemarksSelected = [];
					//	break;
					//}//always ask before printing cut list labels for piecemarks
					if (scopes.prefs.lFsPrintIDFromCutList == '1' ){
						if (form['printIdLabel'].match(/^(N|NO)$/i)){
							globals.session.rawCutPiecemarksSelected = [];
							break;
						}
					} else {
						globals.session.rawCutPiecemarksSelected = [];
						break;
					}
					showPrintQueueEffort = true;
					form['labelPrintType'] = 'piecemark';
					//session.rawCutPiecemarks = [];
					scopes.jobs.printCutListLabels(event);//ask before printing, but need Raw Material Label for the heat number
				} else if (globals.laborScreenActive){//process Labor Screen with R as final entry and clearing prefix
					// get transaction list
					// collect transaction totals for piecemark/idfile list, use single idfile as
					// if transaction at 100% error showing item complete, last transaction percent is 100 and labor is 1
					// get percent complete
					// check prior transaction, to ensure complete or get percent complete
					// new labor transaction, no percentage, labor total 0, piecemark total 0
					// check for percent 0 or 100 finish
					if (data == 0){data = 100}//reduce input to 100 from 0
					mob.percent = data;
					if (data != 100 && l.laborStations.indexOf(mob.statusCode) == -1){
						errorDialogMobile(event,766,'genericin','');//Current Station Requires 100% Completion.
						break;
					}
					form['laborPercentToday'] = data;
					if (rfDeterminePercent()){
						onDataChangeBarcode2(mob.percent,forms['rf_mobile_view'].currentID,event);
					}
					form['laborPercentToday'] = '';
					mob.laborCompleted = false;
				} else {
					form['remarks'] = data;
				}
			}
			//onDataChangeRevision(oldValue,newValue,event)
			//onDataChangeWorker(oldValue,workers,event);
			break;

		//S or s - (S)tatus/Work Station
		case 'S':
			entryType = 'S';
			if (forms['rf_mobile_view'].shownFields.indexOf('statusin') == -1){
				errorDialogMobile(event,1229,'genericin','Status');
				//break;
			} else if (!data && forms['rf_mobile_view'].elements['statusin']){
				forms['rf_mobile_view'].statusCode = '';//break;
			} else {
				globals.rfClearDependentEntries(event,'statusin');
				onDataChangeStatus(oldValue,data,event);
			}
			break;

		//U or u - Seq(u)ence Number 
		case 'U':
			entryType = 'U';
			if (forms['rf_mobile_view'].shownFields.indexOf('seqnumberin') == -1){
				errorDialogMobile(event,1229,'genericin','Sequence');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['seqnumberin']){forms['rf_mobile_view'].sequence = '';break;}
			onDataChangeSequence(oldValue,data,event);
			break;
		//V or v - Re(v)ision
		case 'V':
			entryType = 'V';
			if (forms['rf_mobile_view'].shownFields.indexOf('drawrevin') == -1){
				errorDialogMobile(event,1229,'genericin','Revision');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['drawrevin']){forms['rf_mobile_view'].drawingRevision = '';break;}
			onDataChangeRevision(oldValue,data,event);
			break;
			//E or e - (E)mployee/Worker Number
		case 'W':
			entryType = 'W';
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')]){
				drop = globals.strToDec('INCHES',data);
				if (drop == -1){
					form['dropWidth'] = '';
					errorDialogMobile(event,831,'genericin',data);
				} else {
					form['dropWidth'] = globals.ftDecToString('INCHES',drop,13,'INCHES');
				}
				// process cut list through FS
				break;
			}
			if (forms['rf_mobile_view'].shownFields.indexOf('workerin') == -1){
				errorDialogMobile(event,1229,'genericin','Worker');
				break;
			}
			if (!data && forms['rf_mobile_view'].elements['workerin']){forms['rf_mobile_view'].statusWorker = '';break;}
			onDataChangeWorker(oldValue,data,event)
			break;
		case 'T':
			if (session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')]){
				if (!dataEntryComplete(event,'strikethruin')){break}
				if (data == i18n.getI18NMessage('sts.txt.reply.yes')){
					form['strikeThru'] = i18n.getI18NMessage('sts.btn.yes').toUpperCase();
				} else {
					form['strikeThru'] = i18n.getI18NMessage('sts.btn.no').toUpperCase();
				}
			}
			break;
		case 'TF7S':
			if (data == ''){
				forms['load_info'].shipTo = data;
				return;
			}
			//getCustomersByJob();
			var addresses = getCustomerAddressNames();
			var match = false;
			var shipToId = '';
			var addressList = addresses.getMaxRowIndex();
			for (var idx2 = 1;idx2 <= addresses.getMaxRowIndex();idx2++){
				addresses.rowIndex = idx2;
				var name = addresses.address_type;
				addressList += name+'<br>';
				if (name.trim() == data.trim()){
					match = true;
					//shipToId = addresses.address_id;
					break;
				}
			}
			if (match){
				forms['load_info'].shipTo = data;
				//forms['load_info'].shipToId = shipToId;
			} else {
				errorDialogMobile(event,1269,'genericin','');
				return;
			}
			break;
		case 'TF7T':
			//if (data == ''){
			//	forms['load_info'].trailerInfo = '';
			//	;
			//}
			forms['load_info'].trailerInfo = data;
			break;
		case 'TF7B':
			//if (data == ''){
			//	forms['load_info'].billLading = '';
			//	return;
			//}
			forms['load_info'].billLading = data;
			break;
		case 'TF7C':
			//if (data == ''){
			//	forms['load_info'].comments = '';
			//	return;
			//}
			forms['load_info'].comments = data;
			break;
		case 'XXX':
			globals.rfClearMobDetails();
			break;
		default:
			entryType = '-';

			errorDialogMobile(event,1255,'genericin',newValue);
	}
	if (forms['rf_mobile_view']){forms['rf_mobile_view'].lastAction = action+form['printEnabled']}
	
	var printEnabledNotice = (printEnabledScreen) ? ' p-'+form['printEnabled'] : '';

	rfClearPreviousEntry(event);
	form.genericInput = '';
	form.genericInput2 = '';//20200518 clear prior entry in mobile computer entry

	rfErrorHideAuto(event);
	formValue = form[dataProv].toUpperCase();
	if (application.isInDeveloper()){
		application.output('input: '+newValue+' understood: '+formValue);
	}
	//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
	//	plugins.WebClientUtils.executeClientSideJS('playSoundX("init");');
	//}
	globals.printedLabelsShowError(event);
	rfErrorHideAuto(event);
	return true;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F89D71B9-358E-4E27-A026-9BF66DB6B5F5"}
 * @AllowToRunInFind
 */
function dataEntryComplete(event,altField){
	//if (event){return true}
	/** @type {Array} */
	var entryList = forms['rf_mobile_view'].requiredFields;
	var endIndex = (!altField || altField == 'all') ? entryList.length-1 : entryList.indexOf(altField);
	for (var index = 0;index < endIndex;index++){
		var entry = entryList[index];
		if ((entry == '') || entry.search('genericin') == 0){continue}//20180312 some entries cleared due to workers
		//if (altField && entry == altField){break}//add alternate ending field
		var dataProv = forms['rf_mobile_view'].elements[entry].getDataProviderID();
		if (forms['rf_mobile_view'][dataProv] == ''){
			if (altField == 'all'){
				return false;
			}
			errorDialogMobile(event,1228,'genericin',entry);//Requred Entries Are Not Yet Complete. 1228
			return false;
		}
	}
	return true;
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
 *
 * @properties={typeid:24,uuid:"7789CDA2-7B48-402E-BF3F-D40E04D35000"}
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
		.add(p.or
			.add(p.columns.delete_flag.isNull)
			.add(p.columns.delete_flag.eq(0))
			)
		.add(p.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(p.columns.job_number.eq(jobNum))
	);
	var fsJ = databaseManager.getFoundSet(p);
	if (fsJ.getSize() != 0){
	/** @type JSRecord<db:/stsservoy/jobs> */
		var rec = fsJ.getRecord(1);
		var jobId = rec.job_id.toString();
	} else {
		jobId = '';
		jobNum = '';
	}

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
	return {topForm : parent, job_id : jobId, job_num : jobNum, job_rec : rec};
}
/**
 * @param {JSEvent} event
 * @param barId
 * @param {Boolean} clearOrphans
 *
 * @properties={typeid:24,uuid:"6943BDCE-8C3C-4640-AE48-797BBB893EF1"}
 * @AllowToRunInFind
 */
function getJobDataFromID(event,barId,clearOrphans){
	clearOrphans = false;
	var isBundle = (barId.search('BND') == 0);
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.result.add(q.columns.id_serial_number_id);
	q.groupBy.add(q.columns.id_serial_number_id);
	q.result.distinct = true;
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	if (!isBundle){//11 select idfiles from bundle
		q.where.add(q.columns.id_serial_number.eq(barId));
	}
	var Q0 = databaseManager.getDataSetByQuery(q,-1);
	Q0.rowIndex = 1;
	if (!Q0.id_serial_number_id){
		rfErrorShow(i18n.getI18NMessage('sts.txt.orphan.barcode.notexist'));
		return true;		
	}
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var r = q.joins.add('db:/stsservoy/idfiles');
	if (isBundle){
		r.on.add(r.columns.bundle_bc.eq(barId));
	} else {
		r.on.add(q.columns.id_serial_number_id.eq(r.columns.id_serial_number_id));
	}
	r.root.where.add(r.columns.tenant_uuid.eq(session.tenant_uuid));
	q.root.result.add(r.columns.idfile_id);
	q.root.groupBy.add(r.columns.idfile_id);
	/** @type {JSDataSource<db:/stsservoy/id_serial_numbers>} */
	var Q1 = databaseManager.getDataSetByQuery(q,-1);
	Q1.rowIndex = 1;
	if (!Q1.idfile_id){
		rfErrorShow(i18n.getI18NMessage('sts.txt.orphan.barcode'));
		if (clearOrphans){
			//var arr1 = Q1.getColumnAsArray(1);
			/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
			var d1 = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
			d1.result.add(d1.columns.id_serial_number_id);
			d1.where.add(d1.columns.id_serial_number.isin(barId));
			var f1 = databaseManager.getFoundSet(d1);
			while (f1.getRecord(f1.getSize())){
				f1.loadAllRecords();
				f1.deleteAllRecords();
			}
		}
		return true;
	}
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var s = r.joins.add('db:/stsservoy/piecemarks');
	s.on.add(s.columns.piecemark_id.eq(r.columns.piecemark_id));
	q.root.result.add(s.columns.piecemark_id);
	q.root.groupBy.add(s.columns.piecemark_id);
	var Q2 = databaseManager.getDataSetByQuery(q,-1);
	Q2.rowIndex = 1;
	if (!Q2.piecemark_id){
		if (clearOrphans){
			var arr2 = Q2.getColumnAsArray(2);
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			var d2 = databaseManager.createSelect('db:/stsservoy/idfiles');
			d2.result.add(d2.columns.idfile_id);
			d2.where.add(d2.columns.idfile_id.isin(arr2));
			var f2 = databaseManager.getFoundSet(d2);
			while (f2.getRecord(f2.getSize())){
				f2.loadAllRecords();
				f2.deleteAllRecords();
			}
			/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
			var d1 = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
			d1.result.add(d1.columns.id_serial_number_id);
			d1.where.add(d1.columns.id_serial_number.isin(barId));
			var f1 = databaseManager.getFoundSet(d1);
			while (f1.getRecord(f1.getSize())){
				f1.loadAllRecords();
				f1.deleteAllRecords();
			}
		}
		rfErrorShow(i18n.getI18NMessage('sts.txt.orphan.idfiles'));
		return true;
	}
	/** @type {QBJoin<db:/stsservoy/sheets>} */
	var t = s.joins.add('db:/stsservoy/sheets');
	t.on.add(t.columns.sheet_id.eq(s.columns.sheet_id));
	q.root.result.add(t.columns.sheet_id);
	q.root.groupBy.add(t.columns.sheet_id);
	var Q3 = databaseManager.getDataSetByQuery(q,-1);
	Q3.rowIndex = 1;
	if (!Q3.sheet_id){
		if (clearOrphans){
			var arr3 = Q3.getColumnAsArray(3);
			/** @type {QBSelect<db:/stsservoy/piecemarks>} */
			var d3 = databaseManager.createSelect('db:/stsservoy/piecemarks');
			d3.result.add(d3.columns.piecemark_id);
			d3.where.add(d3.columns.piecemark_id.isin(arr3));
			var f3 = databaseManager.getFoundSet(d3);
			while (f3.getRecord(f3.getSize())){
				f3.loadAllRecords();
				f3.deleteAllRecords();
			}
			var arr2 = Q2.getColumnAsArray(2);
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			var d2 = databaseManager.createSelect('db:/stsservoy/idfiles');
			d2.result.add(d2.columns.idfile_id);
			d2.where.add(d2.columns.idfile_id.isin(arr2));
			var f2 = databaseManager.getFoundSet(d2);
			while (f2.getRecord(f2.getSize())){
				f2.loadAllRecords();
				f2.deleteAllRecords();
			}
			/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
			var d1 = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
			d1.result.add(d1.columns.id_serial_number_id);
			d1.where.add(d1.columns.id_serial_number.isin(barId));
			var f1 = databaseManager.getFoundSet(d1);
			while (f1.getRecord(f1.getSize())){
				f1.loadAllRecords();
				f1.deleteAllRecords();
			}
		}
		rfErrorShow(i18n.getI18NMessage('sts.txt.orphan.piecemarks'));
		return true;
	}
	/** @type {QBJoin<db:/stsservoy/jobs>} */
	var u = t.joins.add('db:/stsservoy/jobs');
	u.on.add(u.columns.job_id.eq(t.columns.job_id));
	q.root.result.add(u.columns.job_id);
	q.root.groupBy.add(u.columns.job_id);
	/** @type {QBJoin<db:/stsservoy/associations>} */
	var ja = q.joins.add('db:/stsservoy/associations');
	ja.on.add(ja.columns.association_uuid.eq(u.columns.association_id));
	var Q4 = databaseManager.getDataSetByQuery(q,-1);
	Q4.rowIndex = 1;
	if (!Q4.job_id){
		rfErrorShow(i18n.getI18NMessage('sts.txt.orphan.sheets'));
		if (clearOrphans){
			var arr4 = Q4.getColumnAsArray(4);
			var d4 = databaseManager.createSelect('db:/stsservoy/sheets');
			d4.result.add(d3.columns.sheet_id);
			d4.where.add(d3.columns.sheet_id.isin(arr4));
			var f4 = databaseManager.getFoundSet(d4);
			while (f4.getRecord(f4.getSize())){
				f4.loadAllRecords();
				f4.deleteAllRecords();
			}
			var arr3 = Q3.getColumnAsArray(3);
			/** @type {QBSelect<db:/stsservoy/piecemarks>} */
			var d3 = databaseManager.createSelect('db:/stsservoy/piecemarks');
			d3.result.add(d3.columns.piecemark_id);
			d3.where.add(d3.columns.piecemark_id.isin(arr3));
			var f3 = databaseManager.getFoundSet(d3);
			while (f3.getRecord(f3.getSize())){
				f3.loadAllRecords();
				f3.deleteAllRecords();
			}
			var arr2 = Q2.getColumnAsArray(2);
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			var d2 = databaseManager.createSelect('db:/stsservoy/idfiles');
			d2.result.add(d2.columns.idfile_id);
			d2.where.add(d2.columns.idfile_id.isin(arr2));
			var f2 = databaseManager.getFoundSet(d2);
			while (f2.getRecord(f2.getSize())){
				f2.loadAllRecords();
				f2.deleteAllRecords();
			}
			/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
			var d1 = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
			d1.result.add(d1.columns.id_serial_number_id);
			d1.where.add(d1.columns.id_serial_number.isin(barId));
			var f1 = databaseManager.getFoundSet(d1);
			while (f1.getRecord(f1.getSize())){
				f1.loadAllRecords();
				f1.deleteAllRecords();
			}
		}
		return true;
	}
	q.root.result.add(u.columns.association_id);
	q.root.result.add(u.columns.job_id);
	q.root.result.add(u.columns.job_number);
	q.root.result.add(u.columns.rf_interface);
	q.root.result.add(ja.columns.association_name);
	q.root.groupBy.add(u.columns.association_id);
	q.root.groupBy.add(u.columns.job_id);
	q.root.groupBy.add(u.columns.job_number);
	q.root.groupBy.add(u.columns.rf_interface);
	q.root.groupBy.add(ja.columns.association_name);
 	var Q = databaseManager.getDataSetByQuery(q,1);
	if (Q.getMaxRowIndex() > 0){
		Q.rowIndex = 1;
		//if (forms['rf_mobile_view'].requiredFields.indexOf('jobnumberin') == -1){//ticket#281, entry for job number limits barcodes to that job
		mob.job.Id = Q.job_id.toString();//determin jobid ticket#281 for bundle
		mob.job.number = Q.job_number;//Q.association_id;//determine jobnumber ticket#281 for bundle changed
		//}
		mob.station = Q.association_name;
		mobIdSerialId = barId;
		session.jobIsFabSuite = (Q.rf_interface == i18n.getI18NMessage('sts.interface.fabsuite'))
	}
	return false;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"A6FD6E3B-3AA9-40FB-9CF3-F8289DCDA9A9"}
 */
function deleteOrphanFromBarCode(event){
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var k = databaseManager.getFoundSet('db:/stsservoy/id_serial_numbers');
	k.loadAllRecords();
	var rec = null;i = 1;
	while (rec = k.getRecord(i++)){
		getJobDataFromID(event,rec.id_serial_number,true);
	}
	
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"762DA26E-BF2D-4F22-80EC-B211EAFE3C30"}
 */
function deleteOrphans(event){
	//globals.storeUserAgent('fred');
	//try {
		//plugins.WebClientUtils.executeClientSideJS('alert(navigator.platform)');
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		plugins.WebClientUtils.executeClientSideJS('alert(navigator.userAgent)');
	}
		//plugins.WebClientUtils.executeClientSideJS('navigator.userAgent',globals.storeUserAgent,['navigator.userAgent']);
	//} catch (e){}
	application.output('Web User Agent'+mob.userAgent);
	if (1==1){return}
	var formName = event.getFormName();
	var win = forms[formName].controller.getWindow();
	win.show('trans_test');
	if (1==1){return}
	deleteOrphansEach(event,'db:/stsservoy/sheets','db:/stsservoy/jobs');
	deleteOrphansEach(event,'db:/stsservoy/piecemarks','db:/stsservoy/sheets');
	deleteOrphansEach(event,'db:/stsservoy/idfiles','db:/stsservoy/piecemarks');
	deleteOrphansEach(event,'db:/stsservoy/id_serial_numbers','db:/stsservoy/idfiles');
}
/**
 * Delete files from source db, which do not have a destination UUID in the dstFS db
 * @param {JSEvent} event
 * @param {String} srcFS
 * @param {String} dstFS
 *
 * @properties={typeid:24,uuid:"2A193F55-E418-4D3B-A68A-539C6AD24604"}
 * @AllowToRunInFind
 */
function deleteOrphansEach(event,srcFS,dstFS){
	if (application.isInDeveloper()){application.output('Removing orphans from '+srcFS)}
	var Q = databaseManager.getFoundSet(srcFS);
	Q.loadAllRecords();
	
	var pk = '';var usePK = true;
	if (dstFS.search('jobs') != -1){pk = 'job_id'}
	if (dstFS.search('sheets') != -1){pk = 'sheet_id'}
	if (dstFS.search('piecemarks') != -1){pk = 'piecemark_id'}
	if (dstFS.search('idfiles') != -1){
		pk = 'id_serial_number_id';
		usePK = false;
	}

	var rec = null; var i = 1;var count = 1;
	while (Q.getRecord(count+1)){
		count = Q.getSize();
	}
	var okDelete = false;
	var maxSize = count;
	while (rec = Q.getRecord(count)){
		if (usePK){
			var R = databaseManager.getFoundSet(dstFS);
			R.loadRecords(rec[pk]);
			var rec2 = R.getRecord(1);
			okDelete = (!rec2);
		} else {
			var r = databaseManager.createSelect(dstFS);
			r.result.add(r.columns[pk]);
			r.where.add(r.columns[pk].eq(rec[pk]));
			var Rr = databaseManager.getDataSetByQuery(r, 1);
			Rr.rowIndex = 1;
			okDelete =  (!Rr[pk]);
		}

		if (okDelete){
			//Q.deleteRecord(rec);
			application.output(rec[pk]);
			i++;
			if (i/100 == Math.floor(i/100)){application.output(srcFS+' deleting '+i+' / '+Q.getSize())}
		}
		count--;
	}
	if (application.isInDeveloper()){application.output('Deleted '+ srcFS + ' records '+i+' / '+maxSize)}

}
/**
 * @properties={typeid:24,uuid:"EEEAB95D-CCB5-40F3-A885-FD4C945BD400"}
 */
function getJobsTenant(){
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.result.add(q.columns.job_number);
	q.result.add(q.columns.association_id);
	q.result.distinct = true;
	q.where.add(q.columns.delete_flag.isNull)
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	var resultQ = databaseManager.getDataSetByQuery(q,-1);
	for (var index = 1;index <= resultQ.getMaxRowIndex();index++){
		resultQ.rowIndex = index;
		if (session.tenantJobArray.indexOf(resultQ.job_number) == -1){
			session.tenantJobArray.push(resultQ.job_number);
		}
		if (resultQ.association_id.toString() == session.associationId.toString() && session.assocJobArray.indexOf(resultQ.job_number) == -1){
			session.assocJobArray.push(resultQ.job_number);
		}
	}
	null;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param possSerial
 *
 * @properties={typeid:24,uuid:"75954A70-C1B3-4CAD-A28C-A92E4800073F"}
 */
function checkForSerialInput(possSerial){
	/**
	 * possible outcomes for serial input are length of i(D)_serial_number_for job
	 * prefixed with P
	 * bundle number prefixed with BND
	 */ 
	
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param heatNum
 *
 * @properties={typeid:24,uuid:"CA5A44F5-EE62-48FA-B4D7-792B6C427893"}
 */
function createHeat(event,heatNum){
	if (!heatNum){mob.heat = '';mob.heatId = null;return null;}
	/** @type {QBSelect<db:/stsservoy/heats>} */
	var fs = databaseManager.createSelect('db:/stsservoy/heats');
	fs.result.add(fs.columns.heat_id);
	fs.where.add(fs.columns.heat_number.eq(heatNum));
	var FS = databaseManager.getFoundSet(fs);
	FS.loadRecords();
	
	/** @type {JSRecord<db:/stsservoy/heats>} */
	var rec = null;
	if (FS.getSize() == 0){
		var idx = FS.newRecord();
		rec = FS.getRecord(idx);
		rec.heat_number = heatNum;
		rec.tenant_uuid = session.tenant_uuid;
		rec.edit_date = new Date();
		var status = databaseManager.saveData(rec);
		globals.logger(true,i18n.getI18NMessage('sts.txt.heat.created.for.job.number',new Array(heatNum,session.jobNumber)));
	} else {
		rec = FS.getRecord(1);
	}
	//if (application.isInDeveloper()){application.output('save status on heat '+status)}
	if (forms['rf_mobile_view'] && forms['rf_mobile_view'].heat){
		forms['rf_mobile_view'].heat = heatNum;
	}
	mob.heat = heatNum;
	mob.heatId = rec.heat_id.toString();
	return rec.heat_id.toString();

}
/**
 * TODO generated, please specify type and doc for the params
 * @param status
 *
 * @properties={typeid:24,uuid:"BE6B9C88-0721-4E83-A84D-C7CE0417D18C"}
 */
function rfCheckRequiredWorkerStatus(status){
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var r = databaseManager.createSelect('db:/stsservoy/status_description');
	r.where.add(r.columns.tenant_uuid.eq(session.tenant_uuid));
	r.where.add(r.columns.status_code.eq(status));
	r.where.add(r.columns.delete_flag.isNull);
	r.where.add(r.columns.association_id.eq(session.associationId.toString()));
	var R = databaseManager.getFoundSet(r);
	var workerRqd = false;
	if (R.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/status_description>} */
		var rec = R.getRecord(1);
		workerRqd = (rec.emp_number_required == 1);
	}
	return workerRqd;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2B3F8512-F7F1-433B-BE4B-480ABD10DFEF"}
 */
function barcodeJobNumber(event){
	var jobId = session.jobId.toString();
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.result.add(q.columns.id_serial_number);
	q.where.add(q.columns.id_serial_number.eq(mob.barcode));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var s = q.joins.add('db:/stsservoy/idfiles');
	s.on.add(q.columns.id_serial_number_id.eq(s.columns.id_serial_number_id));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var t = s.joins.add('db:/stsservoy/piecemarks');
	t.on.add(s.columns.piecemark_id.eq(t.columns.piecemark_id));
	/** @type {QBJoin<db:/stsservoy/sheets>} */
	var u = t.joins.add('db:/stsservoy/sheets');
	u.on.add(t.columns.sheet_id.eq(u.columns.sheet_id));
	/** @type {QBJoin<db:/stsservoy/jobs>} */
	var v = u.joins.add('db:/stsservoy/jobs');
	v.on.add(u.columns.job_id.eq(v.columns.job_id));
	//v.root.where.add(v.columns.job_id.eq(jobId));
	q.result.add(v.columns.job_id);
	q.result.add(v.columns.job_number);
	var Q = databaseManager.getDataSetByQuery(q,-1);Q.rowIndex = 1;
	if (application.isInDeveloper()){application.output(Q.getMaxRowIndex()+' rec: '+Q.job_id+ ','+Q.job_number+' target job number: '+jobId+ ' jobNum: '+mob.job.Id+ ' '+mob.job.number)}
	return (Q.job_number);
}
/**
 * @param {String} serialNumber
 *
 * @properties={typeid:24,uuid:"A5D693FE-6C3C-4E5C-AE0B-F990E29B62DA"}
 */
function isPartSerial(serialNumber){
	var prefix = serialNumber.substr(0,1);
	if (prefix == 'P'){
		if (serialNumber.length != 11){return false}//A part serial is ten characters from ZZZ..000.  A 'P' is a Part Serial Prefix
	}
}
/**
 * @param {String} inSerialization
 * 
 * 0000000001
 * 0000000009
 * Z000000000
 * Z000000001
 * P000000053
 * ZM00000004
 *
 * @properties={typeid:24,uuid:"1D91494B-9B80-4DC3-B1D1-FC4685B13407"}
 */
function checkValidSerial(inSerialization){
	if (application.isInDeveloper()){application.output('\n')}
	var regexp = new RegExp('^(Z*[A-Z]{0,1})([0-9]+)$');
	var results = inSerialization.match(regexp);
	if (application.isInDeveloper()){application.output('Serial In: '+inSerialization+' length: '+inSerialization.length)}
	if (!results){
		if (application.isInDeveloper()){application.output('Invalid Serial Number')}
		return false;
	}
	if (application.isInDeveloper()){application.output('\t '+results)}	
	return true;
	
	
}
/**
 * @properties={typeid:24,uuid:"7FC4CDA3-959B-49CC-94D3-C1D37625C0D9"}
 */
function verifySerialCodes(){
	checkValidSerial('0000000001');
	checkValidSerial('0000000009');
	checkValidSerial('Z000000000');
	checkValidSerial('Z000000001');
	checkValidSerial('P000000053');
	checkValidSerial('ZM00000004');
	checkValidSerial('ZZZZZZA004');
	checkValidSerial('ZZZZZPA004');
	checkValidSerial('Z010000004');
	checkValidSerial('ZA00009004');
	checkValidSerial('3M00000001');
	checkValidSerial('0000B17N00');
	checkValidSerial('ZZZA000959');
}
/**
 * @properties={typeid:24,uuid:"0E9E3AFB-C61A-4E22-AFCD-66C9D7E4F2FE"}
 */
function focusFirst(){
	forms['rf_mobile_view'].elements['genericin'].requestFocus();
}
/**
 * @properties={typeid:24,uuid:"9B0243C6-A3C8-4B96-BB3A-5B2ABA62C34E"}
 */
function myFocusCallbackMethod(){
	application.output('returned from click');
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"65D6501E-AF09-4DC3-A583-058AFCECC7D8"}
 */
function clearMobileEntries(event,entryType){
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT && session.dualEntry){
		if (event.getElementName() == 'genericin'){
			forms['rf_mobile_view'].elements['genericinlabel'].text = i18n.getI18NMessage('sts.label.generic')+entryType;
			forms['rf_mobile_view'].elements['genericin2label'].text = i18n.getI18NMessage('sts.label.generic');
			forms['rf_mobile_view'].genericInput2 = '';
			forms['rf_mobile_view'].elements['genericin2'].requestFocus();
		} else {
			forms['rf_mobile_view'].elements['genericin2label'].text = i18n.getI18NMessage('sts.label.generic')+entryType;
			forms['rf_mobile_view'].elements['genericinlabel'].text = i18n.getI18NMessage('sts.label.generic');
			forms['rf_mobile_view'].genericInput = '';
			forms['rf_mobile_view'].elements['genericin'].requestFocus();
		}
	} else {
		if (!session.errorShow){
			forms['rf_mobile_view'].elements['genericin'].requestFocus();
		}
		session.errorShow = false;
		forms['rf_mobile_view'].genericInput = '';
	}
}
/**
 * @properties={typeid:24,uuid:"3278C202-2A47-4C61-8E61-088CB14AB16B"}
 */
function rfF3IdsNotShipped(){
	var rfForm = forms['rf_mobile_view'];
	if (session.program == i18n.getI18NMessage('sts.mobile.shipping') && (!rfForm.jobNumber || !rfForm.loadNumber)){return}
	if (application.isInDeveloper()){application.output(flagFunction)}
	//flagFunction = null;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	//forms['rf_mobile_view'].genericInput = '';

	var form = forms.rf_mobile_view;//ticket #151 regarding MC9690 navigation with arrow keys
	if (form.elements.tablessHistory.visible){
		forms.rf_mobile_view.elements.tablessHistory.tabIndex = 1;
		form.elements.tablessHistory.visible = false;
		form.elements.tablessHistory.enabled = false;
		//plugins.window.removeShortcut('UP');
		//plugins.window.removeShortcut('DOWN');
		//plugins.window.removeShortcut('RIGHT');
		//plugins.window.removeShortcut('LEFT');
		forms.trans_history.foundset.setSelectedIndex = 1;
		onReturnFromFunction();
	} else {
		forms.rf_mobile_view.elements.tablessHistory.tabIndex = 2;
		form.elements.tablessHistory.visible = true;
		form.elements.tablessHistory.enabled = true;
		rfIdsNotShipped();
	}
	null;

}
/**
 * @properties={typeid:24,uuid:"5C050B9A-CF3B-4BDB-9E83-383E40752B76"}
 */
function rfF4PcmksNotShipped(){
	if (application.isInDeveloper()){application.output(flagFunction)}
	var rfForm = forms['rf_mobile_view'];
	if (session.program == i18n.getI18NMessage('sts.mobile.shipping') && (!rfForm.jobNumber || !rfForm.loadNumber)){return}
	//flagFunction = null;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	//forms['rf_mobile_view'].genericInput = '';

	var form = forms.rf_mobile_view;//ticket #151 regarding MC9690 navigation with arrow keys
	if (form.elements.tablessHistory.visible){
		forms.rf_mobile_view.elements.tablessHistory.tabIndex = 1;
		form.elements.tablessHistory.visible = false;
		form.elements.tablessHistory.enabled = false;
		//plugins.window.removeShortcut('UP');
		//plugins.window.removeShortcut('DOWN');
		//plugins.window.removeShortcut('RIGHT');
		//plugins.window.removeShortcut('LEFT');
		forms.trans_history.foundset.setSelectedIndex = 1;
		onReturnFromFunction();
	} else {
		forms.rf_mobile_view.elements.tablessHistory.tabIndex = 2;
		form.elements.tablessHistory.visible = true;
		form.elements.tablessHistory.enabled = true;
		rfPcmksNotShipped();
	}
	null;

	
}
/**
 * @properties={typeid:24,uuid:"A3DDE261-C89E-4F13-875F-121BCE18C9D7"}
 */
function rfF5LoadStats(){
	if (application.isInDeveloper()){application.output(flagFunction)}
	var rfForm = forms['rf_mobile_view'];
	if (!rfForm.jobNumber || !rfForm.loadNumber){return}
	//flagFunction = null;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	//forms['rf_mobile_view'].genericInput = '';

	var form = forms.rf_mobile_view;//ticket #151 regarding MC9690 navigation with arrow keys
	if (form.elements.tablessHistory.visible){
		forms.rf_mobile_view.elements.tablessHistory.tabIndex = 1;
		form.elements.tablessHistory.visible = false;
		form.elements.tablessHistory.enabled = false;
		//plugins.window.removeShortcut('UP');
		//plugins.window.removeShortcut('DOWN');
		//plugins.window.removeShortcut('RIGHT');
		//plugins.window.removeShortcut('LEFT');
		forms.trans_history.foundset.setSelectedIndex = 1;
		onReturnFromFunction();
	} else {
		forms.rf_mobile_view.elements.tablessHistory.tabIndex = 2;
		form.elements.tablessHistory.visible = true;
		form.elements.tablessHistory.enabled = true;
		rfLoadStats();
	}
	null;

}
/**
 * @properties={typeid:24,uuid:"560A7569-AB42-4877-A392-5DD420599F3D"}
 */
function rfF6PrintPackingList(){
	var form = forms['rf_mobile_view'];
	if (session.program == i18n.getI18NMessage('sts.mobile.shipping') && (!form.jobNumber || !form.loadNumber)){return}
	session.functionName = 'F6PackingListPrint';
	if (application.isInDeveloper()){application.output(flagFunction)}
	//flagFunction = null;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	//form.functionKeyEntered = true;
	if (!form.loadNumber || !form.jobNumber){return}// || !form.statusCode){return}
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	
	//if (form.elements['btn_print1'].visible){
	//	renderPackingBtns(form,false);
	// } else {
	if (!flagFunction){
		renderPackingBtns(form,false);		
	} else {
		renderPackingBtns(form,true);
	}
	// }
	return true;
}
/**
 * @properties={typeid:24,uuid:"53BFE4F5-93D7-4354-A26C-5159A830DD19"}
 */
function rfF7TrailerInfo(){
	if (application.isInDeveloper()){application.output(flagFunction)}
	//flagFunction = null;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var form = forms.rf_mobile_view;//ticket #151 regarding MC9690 navigation with arrow keys
	if (!form.jobNumber || !form.loadNumber){return}//12 bail on this function if no job or no load number
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	//forms['rf_mobile_view'].genericInput = '';

	
	if (form.elements.tablessTrailer.visible){
		//forms.rf_mobile_view.elements.tablessTrailer.tabIndex = 1;
		form.elements.tablessTrailer.visible = false;
		form.elements.tablessTrailer.enabled = false;
		rfF7SaveLoadTrailerInfo();
		//plugins.window.removeShortcut('UP');
		//plugins.window.removeShortcut('DOWN');
		//plugins.window.removeShortcut('RIGHT');
		//plugins.window.removeShortcut('LEFT');
		//forms.trans_history.foundset.setSelectedIndex = 1;
		onReturnFromFunction();
	} else {
		rfF7GetLoadTrailerInfo();
		//forms.rf_mobile_view.elements.tablessTrailer.tabIndex = 2;
		form.elements.tablessTrailer.visible = true;
		form.elements.tablessTrailer.enabled = true;
	}
	null;
	
}
/**
 * @properties={typeid:24,uuid:"344AF819-E2B9-4FF4-9C89-5B6ACDF4FF56"}
 */
function rfF8RemoveFromLoad(){
	var rfForm = forms['rf_mobile_view'];
	if (session.program == i18n.getI18NMessage('sts.mobile.shipping') && (!rfForm.jobNumber || !rfForm.loadNumber)){return}
	if (application.isInDeveloper()){application.output('flagF8: '+flagF8)}
	var formName = application.getActiveWindow().controller.getName();
	if (forms[formName].currentStatus == "" || forms[formName].currentJob == ""){return}
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	forms['rf_mobile_view'].genericInput = '';
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	flagF8 = (flagFunction != null);
	if (flagF8){
		f8ReversalText = forms[formName].elements.transShop.text;
		forms[formName].elements.transShop.text = i18n.getI18NMessage('sts.mobile.shipping.remove.load')+" "+session.association;
		f8ReversalColor = forms[formName].elements.transShop.bgcolor;
		forms[formName].elements.transShop.bgcolor = 'Yellow';
		forms[formName].controller.focusField('current',false);
	} else {
		forms[formName].controller.focusField('status',false);
		forms[formName].elements.transShop.bgcolor = f8ReversalColor;
		if (formName == 'rf_mobile_view'){
			forms[formName].viewTitle = f8ReversalText;
		} else {
			forms[formName].elements.transShop.text = f8ReversalText;
		}
	}
}
/**
 * @properties={typeid:24,uuid:"F09E41F8-3210-4480-9243-CFA7A491D55F"}
 */
function rfF9InspectionDoc(){
	var rfForm = forms['rf_mobile_view'];
	if (session.program == i18n.getI18NMessage('sts.mobile.shipping') && (!rfForm.jobNumber || !rfForm.loadNumber)){return}	
}
/**
 * @properties={typeid:24,uuid:"CA56AD3F-8EA1-4391-BEE7-33BF58917557"}
 */
function rfIdsNotShipped(){
	var skipEmpty = ['',null];
	var showCount = 40;
	var jobId = mob.job.Id;
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheets');
	q.where.add(q.columns.job_id.eq(jobId.toString()));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var r = q.joins.add('db:/stsservoy/piecemarks');
	r.on.add(r.columns.sheet_id.eq(q.columns.sheet_id));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var s = r.joins.add('db:/stsservoy/idfiles');
	s.on.add(s.columns.piecemark_id.eq(r.columns.piecemark_id));
	s.root.where.add(s.columns.ship_load_id.isin(skipEmpty));
	s.root.result.distinct = true;
	s.root.groupBy.add(s.columns.id_serial_number_id);
	/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} */
	var t = s.joins.add('db:/stsservoy/id_serial_numbers');
	t.on.add(t.columns.id_serial_number_id.eq(s.columns.id_serial_number_id));
	q.result.add(t.columns.id_serial_number);
	q.groupBy.add(t.columns.id_serial_number);
	q.sort.add(t.columns.id_serial_number.asc);
	var Q = databaseManager.getDataSetByQuery(q,-1);
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var rec = null; var idx = 1;
	var idList = '';
	while (showCount > 0){
		Q.rowIndex = idx;
		idList += '\n'+Q.id_serial_number;
		showCount--;
		idx++;
	}
	idList = i18n.getI18NMessage('sts.txt.ship.ids.not.shipped')+' ('+Q.getMaxRowIndex()+')\n'+idList;
	if (application.isInDeveloper()){application.output(idList)}
	forms['trans_detail'].transStat = idList;
	forms['rf_mobile_view'].elements['tablessHistory'].tabIndex = 2;
	forms['rf_mobile_view'].elements['tablessHistory'].visible = true;

}
/**
 * @properties={typeid:24,uuid:"FAC10B8C-742E-4504-A731-B797E66F4A2D"}
 */
function rfPcmksNotShipped(){
	var skipEmpty = ['',null];
	var showCount = 40;
	var jobId = mob.job.Id;
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheets');
	q.where.add(q.columns.job_id.eq(jobId.toString()));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var r = q.joins.add('db:/stsservoy/piecemarks');
	r.on.add(r.columns.sheet_id.eq(q.columns.sheet_id));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var s = r.joins.add('db:/stsservoy/idfiles');
	s.on.add(s.columns.piecemark_id.eq(r.columns.piecemark_id));
	s.root.where.add(s.columns.ship_load_id.isin(skipEmpty));
	s.root.result.distinct = true;
	s.root.groupBy.add(s.columns.piecemark_id);
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var t = s.joins.add('db:/stsservoy/piecemarks');
	t.on.add(t.columns.piecemark_id.eq(s.columns.piecemark_id));
	q.result.add(t.columns.piecemark);
	q.groupBy.add(t.columns.piecemark);
	q.sort.add(t.columns.piecemark.asc);
	var Q = databaseManager.getDataSetByQuery(q,-1);
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var rec = null; var idx = 1;
	var idList = '';
	while (showCount > 0){
		Q.rowIndex = idx;
		idList += '\n'+Q.piecemark;
		showCount--;
		idx++;
	}
	idList = i18n.getI18NMessage('sts.txt.ship.pcmks.not.shipped')+' ('+Q.getMaxRowIndex()+')\n'+idList;
	if (application.isInDeveloper()){application.output(idList)}
	forms['trans_detail'].transStat = idList;
	forms['rf_mobile_view'].elements['tablessHistory'].tabIndex = 2;
	forms['rf_mobile_view'].elements['tablessHistory'].visible = true;
}
/**
 * F5 Load Statistics - Show WEIGHT and QUANTITY for each of Total, Received, Shipped, Verified
 * Total items
 * idfiles.ship
 * @properties={typeid:24,uuid:"34F40A84-F136-4602-ADD8-E35F04181301"}
 */
function rfLoadStats(){
	var interimWeight = 0;
	var interimCount = 0;
	var totalWeight = 0;
	var totalCount = 0;
	var shipWeight = 0;
	var shipCount = 0;
	var finalWeight = 0;
	var finalCount = 0;
	var verifyWeight = 0;
	var verifyCount = 0;
	var receiveWeight = 0;
	var receiveCount = 0;
	var jobId = mob.job.Id.toString();
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheets');
	q.where.add(q.columns.job_id.eq(jobId));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var r = q.joins.add('db:/stsservoy/piecemarks');
	r.on.add(r.columns.sheet_id.eq(q.columns.sheet_id));
	r.root.where.add(r.columns.piecemark.eq(r.columns.parent_piecemark));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var s = r.joins.add('db:/stsservoy/idfiles');
	s.on.add(s.columns.piecemark_id.eq(r.columns.piecemark_id));
	if (mob.job.metric){
		q.result.add(s.columns.summed_quantity.multiply(r.columns.item_weight).sum);
	} else {
		q.result.add(s.columns.summed_quantity.multiply(r.columns.item_weight_lbs).sum);
	}
	q.result.add(s.columns.summed_quantity.sum,"pcs");
	//s.root.where.add(s.columns.ship_load_id.eq(null));
	//s.root.result.distinct = true;

	//q.result.add(s.columns.summed_quantity);
	//q.result.add(r.columns.item_weight);
	//q.result.add(r.columns.item_weight_lbs);
	//q.groupBy.add(s.columns.summed_quantity);
	//q.groupBy.add(r.columns.item_weight);
	//q.groupBy.add(r.columns.item_weight_lbs);
	
	

	var Q = databaseManager.getDataSetByQuery(q,-1);
	//var Q = databaseManager.getFoundSet(q);
	var spaces = '____________________';
	var idList = '';
	Q.rowIndex = 1;
	totalCount = (Q.pcs) ? Q.pcs : 0;
	totalWeight = (Q.sum) ? Q.sum : 0;

	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var qq = databaseManager.createSelect('db:/stsservoy/sheets');
	qq.where.add(qq.columns.job_id.eq(jobId));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var rr = qq.joins.add('db:/stsservoy/piecemarks');
	rr.on.add(rr.columns.sheet_id.eq(qq.columns.sheet_id));
	rr.root.where.add(rr.columns.piecemark.eq(rr.columns.parent_piecemark));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var ss = rr.joins.add('db:/stsservoy/idfiles');
	ss.on.add(ss.columns.piecemark_id.eq(rr.columns.piecemark_id));
	/** @type {QBJoin<db:/stsservoy/loads>} */
	var tt = ss.joins.add('db:/stsservoy/loads');
	tt.on.add(tt.columns.load_id.eq(ss.columns.ship_load_id));
	ss.root.where.add(tt.columns.interim_load.eq(0));
	if (mob.job.metric){
		qq.result.add(ss.columns.summed_quantity.multiply(rr.columns.item_weight).sum);
	} else {
		qq.result.add(ss.columns.summed_quantity.multiply(rr.columns.item_weight_lbs).sum);
	}
	qq.result.add(ss.columns.summed_quantity.sum,"pcs");
	var QQ = databaseManager.getDataSetByQuery(qq,-1);
	QQ.rowIndex = 1;
	finalCount = (QQ.pcs) ? QQ.pcs : 0;
	finalWeight = (QQ.sum) ? QQ.sum : 0;

	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q4 = databaseManager.createSelect('db:/stsservoy/sheets');
	q4.where.add(q4.columns.job_id.eq(jobId));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var r4 = q4.joins.add('db:/stsservoy/piecemarks');
	r4.on.add(r4.columns.sheet_id.eq(q4.columns.sheet_id));
	//r4.root.where.add(r4.columns.piecemark.eq(r4.columns.parent_piecemark));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var s4 = r4.joins.add('db:/stsservoy/idfiles');
	s4.on.add(s4.columns.piecemark_id.eq(r4.columns.piecemark_id));
	/** @type {QBJoin<db:/stsservoy/loads>} */
	var t4 = s4.joins.add('db:/stsservoy/loads');
	t4.on.add(t4.columns.load_id.eq(s4.columns.ship_load_id));
	s4.root.where.add(t4.columns.interim_load.eq(1));
	if (mob.job.metric){
		q4.result.add(s4.columns.summed_quantity.multiply(r4.columns.item_weight).sum);
	} else {
		q4.result.add(s4.columns.summed_quantity.multiply(r4.columns.item_weight_lbs).sum);
	}
	q4.result.add(s4.columns.summed_quantity.sum,"pcs");
	var Q4 = databaseManager.getDataSetByQuery(q4,-1);
	Q4.rowIndex = 1;
	interimCount = (Q4.pcs) ? Q4.pcs : 0;
	interimWeight = (Q4.sum) ? Q4.sum : 0;

	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q3 = databaseManager.createSelect('db:/stsservoy/sheets');
	q3.where.add(q3.columns.job_id.eq(jobId));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var r3 = q3.joins.add('db:/stsservoy/piecemarks');
	r3.on.add(r3.columns.sheet_id.eq(q3.columns.sheet_id));
	//r3.root.where.add(r3.columns.piecemark.eq(r3.columns.parent_piecemark));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var s3 = r3.joins.add('db:/stsservoy/idfiles');
	s3.on.add(s3.columns.piecemark_id.eq(r3.columns.piecemark_id));
	s3.root.where.add(s3.columns.received_load_id.not.isNull);
	if (mob.job.metric){
		q3.result.add(s3.columns.summed_quantity.multiply(r3.columns.item_weight).sum);
	} else {
		q3.result.add(s3.columns.summed_quantity.multiply(r3.columns.item_weight_lbs).sum);
	}
	q3.result.add(s3.columns.summed_quantity.sum,"pcs");
	var Q3 = databaseManager.getDataSetByQuery(q3,-1);
	Q3.rowIndex = 1;
	receiveCount = (Q3.pcs) ? Q3.pcs : 0;
	receiveWeight = (Q3.sum) ? Q3.sum : 0;
	
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q5 = databaseManager.createSelect('db:/stsservoy/sheets');
	q5.where.add(q5.columns.job_id.eq(jobId));
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var r5 = q5.joins.add('db:/stsservoy/piecemarks');
	r5.on.add(r5.columns.sheet_id.eq(q5.columns.sheet_id));
	//r5.root.where.add(r5.columns.piecemark.eq(r5.columns.parent_piecemark));
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var s5 = r5.joins.add('db:/stsservoy/idfiles');
	s5.on.add(s5.columns.piecemark_id.eq(r5.columns.piecemark_id));
	s5.root.where.add(s5.columns.ship_load_id.not.isNull);
	if (mob.job.metric){
		q5.result.add(s5.columns.summed_quantity.multiply(r5.columns.item_weight).sum);
	} else {
		q5.result.add(s5.columns.summed_quantity.multiply(r5.columns.item_weight_lbs).sum);
	}
	q5.result.add(s5.columns.summed_quantity.sum,"pcs");
	var Q5 = databaseManager.getDataSetByQuery(q5,-1);
	Q5.rowIndex = 1;
	shipCount = (Q5.pcs) ? Q5.pcs : 0;
	shipWeight = (Q5.sum) ? Q5.sum : 0;

	//var currLoadNum = forms['rf_mobile_view'].loadNumber;
	//var currLoadId = session.loadId;
	s5.root.where.clear();
	s5.root.where.add(s5.columns.ship_load_id.eq(session.loadId))
	
	var Q6 = databaseManager.getDataSetByQuery(q5,-1);
	Q6.rowIndex = 1;
	currCount = (Q6.pcs) ? Q6.pcs : 0;
	currWeight = (Q6.sum) ? Q6.sum : 0;

	var descrips = [i18n.getI18NMessage('sts.txt.ship.load.statistics.total'),
	i18n.getI18NMessage('sts.txt.ship.load.statistics.received'),
	i18n.getI18NMessage('sts.txt.ship.load.statistics.shipped.interim'),
	i18n.getI18NMessage('sts.txt.ship.load.statistics.shipped'),
	i18n.getI18NMessage('sts.txt.ship.load.statistics.current')];
	var longest = 0;
	for (var i = 0;i < descrips.length;i++){
		if (descrips[i].length > longest){longest = descrips[i].length}
	}
	var totalCLength = Math.floor(totalCount).toString().length;
	totalCLength = (totalCLength > 9) ? totalCLength : 9;
	var totalWLength = Math.floor(totalWeight).toString().length;
	idList = i18n.getI18NMessage('sts.txt.ship.load.statistics')+'\n'+idList;
	//if (application.isInDeveloper()){application.output(idList)}
	var tabone = totalWLength-(Math.floor(totalWeight)).toString().length+2;
	var tabtwo = totalCLength - totalCount.toString().length+1;
	idList += i18n.getI18NMessage('sts.txt.ship.load.statistics.total')+spaces.substr(1,tabone)+Math.floor(totalWeight)+spaces.substr(1,tabtwo)+totalCount;
	tabone = totalWLength-(Math.floor(receiveWeight)).toString().length+2;
	tabtwo = totalCLength - receiveCount.toString().length+1;
	idList += '\n'+i18n.getI18NMessage('sts.txt.ship.load.statistics.received')+spaces.substr(1,tabone)+Math.floor(receiveWeight)+spaces.substr(1,tabtwo)+receiveCount;
	tabone = totalWLength-(Math.floor(interimWeight)).toString().length+2;
	tabtwo = totalCLength - interimCount.toString().length+1;
	idList += '\n'+i18n.getI18NMessage('sts.txt.ship.load.statistics.shipped.interim')+spaces.substr(1,tabone)+Math.floor(interimWeight)+spaces.substr(1,tabtwo)+interimCount;
	//tabone = totalWLength-(Math.floor(finalWeight)).toString().length+2;
	//tabtwo = totalCLength - finalCount.toString().length+1;
	//idList += '\n'+i18n.getI18NMessage('sts.txt.ship.load.statistics.shipped.final')+spaces.substr(1,tabone)+Math.floor(finalWeight)+spaces.substr(1,tabtwo)+finalCount;
	tabone = totalWLength-(Math.floor(shipWeight)).toString().length+2;
	tabtwo = totalCLength - shipCount.toString().length+1;
	idList += '\n'+i18n.getI18NMessage('sts.txt.ship.load.statistics.shipped')+spaces.substr(1,tabone)+Math.floor(shipWeight)+spaces.substr(1,tabtwo)+shipCount;
	tabone = totalWLength-(Math.floor(currWeight)).toString().length+2;
	tabtwo = totalCLength - currCount.toString().length+1;
	idList += '\n'+i18n.getI18NMessage('sts.txt.ship.load.statistics.current')+spaces.substr(1,tabone)+Math.floor(currWeight)+spaces.substr(1,tabtwo)+currCount;
	
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var tt = databaseManager.createSelect('db:/stsservoy/loads');
	tt.where.add(tt.columns.tenant_uuid.eq(session.tenant_uuid));
	tt.where.add(tt.columns.load_id.eq(session.loadId));
	tt.result.add(tt.columns.load_id);
	
	var TT = databaseManager.getFoundSet(tt);
	if (TT.getSize() > 0){
		var trailInfo = '';
		var trailBol = '';
		var trailComm = '';
		var trailShipTo = '';
		var trailType = '';
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		var rec = TT.getRecord(1);
		if (rec.trailer_information){trailInfo = rec.trailer_information;}
		if (rec.bill_of_lading_out){trailBol = rec.bill_of_lading_out;}
		if (rec.load_comment){trailComm = textWrap(rec.load_comment,25).replace(/<html>/i,'').replace(/<br>/ig,'\n');}
		trailType = (rec.interim_load == 1) ? i18n.getI18NMessage('table.loads.interim_load') : i18n.getI18NMessage('table.loads.regular_load');
		trailType = i18n.getI18NMessage('sts.label.load.type')+' '+trailType;
		if (rec.ship_to && rec.interim_load == 0){
			/** @type {QBSelect<db:/stsservoy/addresses>} */
			var ad = databaseManager.createSelect('db:/stsservoy/addresses');
			ad.where.add(ad.columns.tenant_uuid.eq(session.tenant_uuid));
			ad.where.add(ad.columns.address_id.eq(rec.ship_to));
			/** @type {QBJoin<db:/stsservoy/customers>} */
			var ac = ad.joins.add('db:/stsservoy/customers');
			ac.on.add(ac.columns.customer_id.eq(ad.columns.customer_id));
			ad.result.add(ac.columns.name);
			var AD = databaseManager.getDataSetByQuery(ad,1);
			AD.rowIndex = 1;
			if (AD.name){trailShipTo = AD.name;}
		}
		if (rec.interim_load == 1){
			var interim = scopes.fs.checkFSLoad(forms['rf_mobile_view'].loadNumber,'','','');
			trailShipTo = interim;
		}
	}
	idList += '\n';
	idList += '\n'+trailType;
	if (trailShipTo){idList += '\n'+i18n.getI18NMessage('sts.label.ship.to')+ ' ' +trailShipTo;}
	if (trailBol){idList += '\n'+i18n.getI18NMessage('sts.label.bill.of.lading')+' '+trailBol;}
	if (trailInfo){idList += '\n'+i18n.getI18NMessage('sts.label.trailer.information')+'\n  '+trailInfo;}
	if (trailComm){idList += '\n'+i18n.getI18NMessage('sts.label.comments')+'\n  '+trailComm;}
	forms['trans_detail'].transStat = idList;
	forms['rf_mobile_view'].elements['tablessHistory'].tabIndex = 2;
	forms['rf_mobile_view'].elements['tablessHistory'].visible = true;

}
/**
 *
 * @properties={typeid:24,uuid:"76770A93-2790-4107-BD14-81951EB804FB"}
 */
function rfF7SaveLoadTrailerInfo(){
	var load = forms['rf_mobile_view'].loadNumber;
	var shipTo = forms['load_info'].shipTo;
	var trailerInfo = forms['load_info'].trailerInfo;
	var bol = forms['load_info'].billLading;
	var loadComments = forms['load_info'].comments;
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var q = databaseManager.createSelect('db:/stsservoy/loads');
	q.where.add(q.columns.load_number.eq(load));
	q.where.add(q.columns.job_id.eq(mob.job.Id.toString()));
	var Q = databaseManager.getFoundSet(q);
	//var changed = false;
	if (Q.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		var rec = Q.getRecord(1);
		var adds = getCustomerAddressNames();
		for (var idx3 = 1;idx3 <= adds.getMaxRowIndex();idx3++){
			adds.rowIndex = idx3;
			if (forms['load_info'].shipTo == adds.address_type){
				rec.ship_to = adds.address_id;
				break;
			}
		}
		rec.trailer_information = trailerInfo;
		rec.bill_of_lading_out = bol;
		rec.load_comment = loadComments;
		databaseManager.saveData(rec);
	}
}
/**
 * @properties={typeid:24,uuid:"D149B00E-FB84-49B2-8B31-D49029C1C1E9"}
 */
function rfF7GetLoadTrailerInfo(){
	var rfForm = forms['rf_mobile_view'];
	if (session.program == i18n.getI18NMessage('sts.mobile.shipping') && (!rfForm.jobNumber || !rfForm.loadNumber)){return}
	var load = forms['rf_mobile_view'].loadNumber;
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var q = databaseManager.createSelect('db:/stsservoy/loads');
	q.where.add(q.columns.load_number.eq(load));
	q.where.add(q.columns.job_id.eq(mob.job.Id.toString()));
	var Q = databaseManager.getFoundSet(q);
	//var changed = false;
	if (Q.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		var rec = Q.getRecord(1);
		if (rec.ship_to != null && rec.ship_to != ''){
			var addr = getCustomerAddressNames();
			for (var idx3 = 1;idx3 <= addr.getMaxRowIndex();idx3++){
				addr.rowIndex = idx3;
				if (rec.ship_to == addr.address_id){
					forms['load_info'].shipTo = addr.address_type;
					break;
				}
			}
		} else {
			forms['load_info'].shipTo = '';
			forms['load_info'].shipToId = '';
		}
		forms['load_info'].trailerInfo = rec.trailer_information;
		forms['load_info'].billLading = rec.bill_of_lading_out;
		forms['load_info'].comments = rec.load_comment;
	}
}
/**
 * @properties={typeid:24,uuid:"CAB8F8E2-EA79-4EB9-9FD5-6F5BFE698334"}
 */
function setSampleBarsContext(){
	scopes.jobs.warningsMessage('1256',true);//creating report #1256
	//var viewer = plugins.VelocityReport.previewToComponent(elements.bean_panel, template, getReportContext(), viewerSaveCallback);
	var context = {}
	context.start = new Date().getTime();
	context.anotherNumber = 1529334667859;
	//context.anotherNumber = 99999;
	var barcodeDef = {}
	barcodeDef.data = 'Servoy Stuff'; 
	barcodeDef.type = BARCODE.CODE39; 
	barcodeDef.height = 80;
	barcodeDef.forcedWidth = 140;
	barcodeDef.forcedHeight = 40;

	var temp = scopes.prefs.temppath;//scopes.prefs.reportpath;
	var tempDir = plugins.file.convertToJSFile(temp);	
	if (!tempDir.exists()){
		if (application.isInDeveloper()){application.output('temp dir not found')}
		temp = '\\windows\\temp';
		var drives = ['c','d','e','f','g'];
		var tempAlt = drives[dIndex]+':'+temp;
		var dIndex = 0;
		for (var index = 0;index < drives.length;index++){
			var tempDir = plugins.file.convertToJSFile(tempAlt);
			tempAlt = drives[dIndex]+':'+temp;
			tempDir = plugins.file.convertToJSFile(tempAlt);
		}
	} else {
		tempAlt = temp;
	}
	var fileName = tempAlt+'\\infoSheet.pdf';
	//var file = plugins.file.createFile(fileName);
	if (application.isInDeveloper()){application.output('temp file '+fileName)}
	//var created = file.createNewFile();
	//if (false && !created){// unabled to create file
	//	if (application.isInDeveloper()){application.output('failed to create file '+fileName)}
	//	return;
	//}
	scopes.jobs.warningsMessage('1256',true);
	var text_data = '';
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.result.add(q.columns.job_number);
	q.result.add(q.columns.job_id);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.association_id.eq(session.associationId.toString()));
	var Q = databaseManager.getDataSetByQuery(q,-1);
	var jobs = Q.getColumnAsArray(1);
	var jobIds = Q.getColumnAsArray(2);
	
	var idToJob = []
	for (idx = 0;idx < jobs.length;idx++){
		idToJob[jobIds[idx]] = jobs[idx];
	}
	scopes.jobs.warningsMessage('1256',true);
	
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var r = databaseManager.createSelect('db:/stsservoy/status_description');
	r.result.add(r.columns.status_code);
	r.where.add(r.columns.tenant_uuid.eq(session.tenant_uuid));
	r.where.add(r.columns.delete_flag.isNull);
	r.sort.add(r.columns.status_sequence.asc);
	var R = databaseManager.getDataSetByQuery(r,-1);
	var statuses = R.getColumnAsArray(1);
	//text_data += 'Jobs:\n\n';
	
	context.ctJobs = [];
	seen = [];
	var workers = session.workerList.sort();
	for (var idx = 0;idx < jobs.length;idx++){
		if (seen.indexOf(jobs[idx]) != -1){continue}
		seen.push(jobs[idx]);
		text_data += '*J'+jobs[idx]+'*\n\n';
		barcodeDef.data = 'J'+jobs[idx];
		context.ctJobs.push(plugins.VelocityReport.getBarcode(barcodeDef));
	}
	context.jobNumbers = Q;//ctJobs.concat([]);
	seen = [];
	context.ctStatuses = [];
	//text_data += 'Status Codes:\n\n';
	scopes.jobs.warningsMessage('1256',true);
	for (idx = 0;idx < statuses.length;idx++){
		if (seen.indexOf(statuses[idx]) != -1){continue}
		seen.push(statuses[idx]);
		//text_data += '*S'+statuses[idx].trim()+'*\n\n';
		barcodeDef.data = 'S'+statuses[idx];
		context.ctStatuses.push(plugins.VelocityReport.getBarcode(barcodeDef));
	}
	seen = [];
	context.ctWorkers = [];
	for (idx = 0;idx < workers.length;idx++){
		if (seen.indexOf(workers[idx]) != -1){continue}
		seen.push(workers[idx]);
		barcodeDef.data = 'W'+workers[idx];
		context.ctWorkers.push(plugins.VelocityReport.getBarcode(barcodeDef));
	}
	
	if (application.isInDeveloper()){application.output('jobIDS '+jobIds);}
	if (application.isInDeveloper()){application.output('jobNums '+jobs);}
	var serials_txt = '';var count = jobs.length*80*2;

	scopes.jobs.warningsMessage('1256',true);
	jobs.sort();
	context.ctJobNums = [];
	context.ctJobIds = [];
	context.ctIdNums = [];
	for (var idx2 = 0;idx2 < jobs.length;idx2++){
		context.ctJobIds.push(jobs[idx2]);
		context.ctJobNums.push(jobs[idx2]);
	}
	//serials_txt += '\n\nJOB '+jobNum+'\n\n';
	scopes.jobs.warningsMessage('1256',true);
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var s = databaseManager.createSelect('db:/stsservoy/jobs');
	s.where.add(s.columns.job_number.isin(context.ctJobNums));

	/** @type {QBJoin<db:/stsservoy/sheets>} */
	var ss = s.joins.add('db:/stsservoy/sheets');
	ss.on.add(s.columns.job_id.eq(s.columns.job_id));
	ss.root.where.add(ss.columns.delete_flag.isNull);
	ss.root.where.add(ss.columns.tenant_uuid.eq(session.tenant_uuid));
	ss.root.where.add(ss.columns.job_id.isin(jobIds));
	ss.root.result.add(ss.columns.job_id);
	ss.root.groupBy.add(ss.columns.job_id);
	
	/** @type {QBJoin<db:/stsservoy/jobs>} */
	var jj = ss.joins.add('db:/stsservoy/jobs');
	jj.on.add(jj.columns.job_id.eq(ss.columns.job_id));

	scopes.jobs.warningsMessage('1256',true);
	
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var sp = ss.joins.add('db:/stsservoy/piecemarks');
	sp.on.add(sp.columns.sheet_id.eq(ss.columns.sheet_id));
	sp.root.where.add(sp.columns.delete_flag.isNull);
	sp.root.where.add(sp.root.or
		.add(sp.columns.is_assembly.eq(1))
		.add(sp.columns.parent_piecemark.eq(sp.columns.piecemark))
		);//restrict printed Barcodes to major marks 20180525
	//sp.root.where.add(sp.columns.parent_piecemark.eq(sp.columns.piecemark));//restrict printed Barcodes to major marks 20180525
	sp.root.result.add(sp.columns.piecemark);
	sp.root.groupBy.add(sp.columns.piecemark);
	
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var si = sp.joins.add('db:/stsservoy/idfiles');
	si.on.add(si.columns.piecemark_id.eq(sp.columns.piecemark_id));
	si.root.where.add(si.columns.delete_flag.isNull);
	si.root.groupBy.add(si.columns.idfile_id);
	si.root.result.add(si.columns.id_serial_number_id);
	si.root.result.distinct = true;
	/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} */
	var sd = si.joins.add('db:/stsservoy/id_serial_numbers');
	sd.on.add(sd.columns.id_serial_number_id.eq(si.columns.id_serial_number_id));
	sd.root.result.distinct = true;
	s.groupBy.add(jj.columns.job_number);
	s.groupBy.add(sd.columns.id_serial_number);
	s.groupBy.add(si.columns.id_serial_number_id);//added for ms
	s.result.add(jj.columns.job_number);
	s.result.add(sd.columns.id_serial_number);
	s.sort.add(jj.columns.job_number.asc);
	s.sort.add(sd.columns.id_serial_number);
	s.result.distinct = true;

	//s.sort.add(s.columns.job_id);
	var seen = []; var maxCount = 80; var skipJob = [];
	context.SSS = databaseManager.getDataSetByQuery(s,-1);
	context.SSS.addColumn('barcode');
	context.jobNumOrd = [];var ordIx = 1;
	scopes.jobs.warningsMessage('1256',true);
	var barCount = [];
	var removeRows = [];
	for (var idx3 = 1;idx3 <= context.SSS.getMaxRowIndex();idx3++){
		context.SSS.rowIndex = idx3;
		var jobId = context.SSS.job_number;
		if (!barCount[jobId]){
			barCount[jobId] = 1;
			context.jobNumOrd[ordIx++] = jobId;
		}
		if (barCount[jobId] > maxCount){
			removeRows.push(idx3);
			continue
		}
		barcodeDef.data = context.SSS.id_serial_number;
		context.SSS.barcode = plugins.VelocityReport.getBarcode(barcodeDef);
		barCount[jobId]++;
	}
	scopes.jobs.warningsMessage('1256',true);
	var idx4 = 0;
	while (idx4 = removeRows.pop()){
		context.SSS.removeRow(idx4);
	}
		/**
		var ids = []; var maxIdCount = (maxCount < SSS.getMaxRowIndex()) ? maxCount : SSS.getMaxRowIndex();
		//if (!seen[jobNum]){continue}
		for (var idx2 = 0;idx2 < maxIdCount;idx2++){
			//if (!seen[jobNum][idx2]){continue}
			SSS.rowIndex = idx2+1;
			ids.push(SSS.id_serial_number);
			if (!context.ctIdNums[jobNum]){context.ctIdNums[jobNum] = []}
			context.ctIdNums[jobNum].push(SSS.id_serial_number);
			//var col = idx2*1+1*1;
			//if (col/4*1 == Math.floor(col/4)*1){serials_txt += "\n"}
		}
		ids.sort();
		for (idx2 = 0;idx2 < maxIdCount;idx2++){
			serials_txt += '*'+ids.shift().toString().trim()+'*\n\n';			
		}
		*/

	//var fileObj = plugins.file.writeTXTFile(file,text_data+'\n'+serials_txt);
	//if (!fileObj){
	//	if (application.isInDeveloper()){application.output('failed to write text file '+fileName)}
	//	return;
	//}
	//plugins.dialogs.showErrorDialog('1254',i18n.getI18NMessage('1254',[fileName]))
	//plugins.UserManager.executeCommand('wordpad.exe '+fileName);
	var endTime = new Date().getTime();
	context.micros = endTime - context.start;
	if (application.isInDeveloper()){application.output('ms for report: '+context.micros)}
	scopes.jobs.warningsMessage('1256',true);
	var wDir = plugins.VelocityReport.getReportFolder();
	application.output('Velocity Report Folder '+wDir);
	var pdf = plugins.VelocityReport.getPDFReport('infoSheet.html',context);
	//var file = plugins.file.showFileSaveDialog();
	scopes.jobs.warningsMessage('1256',true);
	if (pdf && pdf.length > 0){
		if (plugins.file.writeFile(fileName,pdf)){
			//application.output('file done');
			endTime = new Date().getTime();
			var totTime = endTime - context.start;
			scopes.jobs.warningsX();
			plugins.dialogs.showErrorDialog('1254',i18n.getI18NMessage('1254',[fileName])+' '+totTime+'ms')
			application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', fileName]);//open pdf viewer
		}
	}
	//return context;
}
/**
 * Print PDF file in background. This Prints the pdf file in the preferred printer attached to server machine
 * https://www.codeproject.com/articles/831588/printing-pdf-silently-in-servoy
 * @param {String} filePath The path to file
 * @param {String} [preferredPrinter] The Printer to be used for printing. By default uses the default printer
 * @return {Boolean} Status
 * @author pradipta
 * @since 10/15/2014
 * 
 * @properties={typeid:24,uuid:"7FDD2CE9-C65F-484C-A8A9-DCA8AEB737E2"}
 */
function silentPrint(filePath, preferredPrinter) {
 
 	var printerJob = Packages.java.awt.print.PrinterJob.getPrinterJob();
 
 	// Find the Preferred Printer
 	if (preferredPrinter) {
 		/** @type {Array<javax.print.PrintService>} */
 		var _printServices = Packages.javax.print.PrintServiceLookup.lookupPrintServices(null, null);
 		for (var _i = 0; _i<_printServices.length; _i++) {
 			if (_printServices[_i].getName() == preferredPrinter) {
 				printerJob.setPrintService(_printServices[_i]);
 				break;
 			}
 		}
 
 		// Validate of the desired printer found
 		if (_i == _printServices.length)return false;
 	} else {
		// Find the Default printer;
		/** @type {javax.print.PrintService} */
		var _printService = new Packages.javax.print.PrintServiceLookup.lookupDefaultPrintService();
		var empty = true;
		for (var namein in _printService){
			if (namein){
				empty = false;
			}
		}
		if (empty || !_printService) {
			application.output('lookupDefaultPrintService returns null');
			return false;
		}
		var defText = 'print service '+_printService;
		if (_printService == null){
			defText += ' empty object ';
		}
		for (var namein in _printService){
			if (namein){
				empty = false;
			}
			defText += namein +' ';
		}
		defText += ' END';
		application.output(defText);
		
		printerJob.setPrintService(_printService);
	}
 
	// Check Printer Job
	if (!printerJob) {return false}
	
	try {
		// Get Document and Print
		application.output('PDF file is '+filePath);
		var printDocument = Packages.org.apache.pdfbox.pdmodel.PDDocument.load(filePath);
		if (!printDocument) {return false;}
		// Print Document
		printDocument.silentPrint(printerJob);
	} catch (exception) { 
		return false;
	}
	finally {
		printDocument.close();
	}
	
	return true;
}
/**
 * @param {JSForm} form
 * @param {Boolean} enable
 *
 * @properties={typeid:24,uuid:"9F6AB77F-AEDF-4A1E-B42B-97398E049502"}
 * @AllowToRunInFind
 */
function renderPrinterBtns(form,enable){
	var btnArr = ['btn_print1','btn_print2','btn_print3','btn_print4','btn_print5','btn_print6','btn_print7'];
	var printers = getPrinterList();

	var padding = '   ';
	var setNames = (form.elements[btnArr[0]] && printers.indexOf(form.elements[btnArr[0]].text) == -1);
	for (var idx = 0;idx < btnArr.length;idx++){
		var btn = form.elements[btnArr[idx]];
		if (!btn){continue}
		btn.visible = (enable) ? true : false;
		if (!enable){continue}
		if (setNames && printers[idx] && idx < 5){
			if (printers[idx]){
				btn.text = padding+printers[idx];
				//btn.transparent = false;//Fri 05 Oct 2018 F6 make buttons opaque
				btn.fgcolor = 'black';//Fri 05 Oct 2018 F6 make buttons opaque
				btn.bgcolor = 'white';//Fri 05 Oct 2018 F6 make buttons opaque
			}
		}
		if (btn.text == 'button'){
			btn.text = '';
		}
	}
	form.elements['btn_print7'].visible = enable;
	if (form.elements['btn_print7'].text.search(padding) == -1){
		form.elements['btn_print7'].text = padding+form.elements['btn_print7'].text;
		form.elements['btn_print6'].text = padding+form.elements['btn_print6'].text;
	}
	application.updateUI();
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"564D8493-86AD-4FD2-9FA5-497EB0A5BAF1"}
 */
function renderPrinterMore(event){
	var padding = '    ';
	var btnArr = ['btn_print1','btn_print2','btn_print3','btn_print4','btn_print5','btn_print6','btn_print7'];
	var printers = getPrinterList();
	var form = forms[event.getFormName()];
	var limit = (printers.length > 4) ? 4 : printers.length; 
	//if (printers.length < 7){return}
	
	var start = printers.indexOf(form.elements[btnArr[limit]].text.trim()) + 1;//starts somewhere else...
	start = (start >= printers.length-1) ? 1 : start;
	for (var idx = 1;idx <= limit;idx++){
		var btn = form.elements[btnArr[idx]];
		btn.text = padding+printers[start++]
		btn.fgcolor = 'black';
		btn.bgcolor = 'white';
		if (start > printers.length-1){start = 1}
	}
	application.updateUI();
}
/**
 * @param {JSEvent} event
 * @param printerName
 *
 * @properties={typeid:24,uuid:"9C83D07D-B058-4903-8743-3AF9B23009AE"}
 * @AllowToRunInFind
 */
function silentPrintToServer(event){
	var form = forms[event.getFormName()];
	renderPrinterBtns(form,false);
	var printerName = forms[event.getFormName()].elements[event.getElementName()].text;
	printerName = printerName.trim();
	var printerBtns = scopes.jobs.printerBtns;
	var packingBtns = scopes.jobs.packingListBtns;
	var reportTemplate = '';
	var isLoadReport = false;
	var isLoadDetail = false;
	var isBundleReport = false;
	var addItemBarcode = false;
	if (printerBtns.indexOf(printerName) != -1){
		switch (forms[event.getFormName()].reportType){
			case 'F6BundlePrintList':
				//execute and print bundleList, to printerName = elText
				reportTemplate = 'bundleList.html';
				isBundleReport = true;
				break;
			case 'F6PackingListPrintList':
				//execute and print 
				reportTemplate = 'packingList.html';
				isLoadReport = true;
				break;
			case 'F6PackingListPrintBarcodes':
				//execute and print
				reportTemplate = 'packingListWBarcodes.html';
				isLoadReport = true;
				isLoadDetail = true;
				addItemBarcode = true;
				break;
			case 'F6PackingListPrintDetails':
				//execute and print 
				reportTemplate = 'packingListDetail.html';
				isLoadReport = true;
				isLoadDetail = true;
				break;
			default:
		}
	}
	if (printerName == '' || printerName == 'button'){return}
	if (printerName == i18n.getI18NMessage('sts.txt.printer.default')){
		printerName = scopes.printer.getDefaultPrinterName().trim();
	}
	var elementText = event.getElementName().text;
	
	null;
	//forms['rf_mobile_view'].genericInput = '';
	/**
	 * HEADER
	 * current date
	 * current time
	 * customer name
	 * address street
	 * address city
	 * address state
	 * address zip
	 * customer number
	 * page number
	 * 'bundle list'
	 * customer name, bundle number
	 * po number, release, ship employee, job number, ship status, shop order, invoice, ship time, trailer info, bol, comments, shipto
	 * collect heaviest piece
	 * DATA
	 * Qty, Description,piecemark, category, length,  piece weight, total weight
	 * FOOTER 
	 * qty, total pieces, total weight, total weight
	 */
	scopes.jobs.warningsMessage('1256',true);//creating report #1256
	var barcodeDef = {}
	barcodeDef.data = 'Servoy Stuff'; 
	barcodeDef.type = BARCODE.CODE39; 
	barcodeDef.height = 80;

	var context = {};
	context.start = new Date();
	var date = scopes.jobs.formatDate(date).split(' ');
	context.day = date[0];
	context.time = date[1];
	var jobId = session.jobId.toString();
	var bndNum = form.currentBundle;
	
	barcodeDef.data = bndNum;
	barcodeDef.forcedWidth = 450;
	barcodeDef.forcedHeight = 0;

	context.bundleBarCode = plugins.VelocityReport.getBarcode(barcodeDef);
	barcodeDef.forcedWidth = 250;
	barcodeDef.forcedHeight = 40;
	application.output('RM jobNum '+jobId+' bundle '+bndNum);
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.where.add(q.columns.job_id.eq(jobId));
	/** @type {QBJoin<db:/stsservoy/customers>} */
	var k = q.joins.add('db:/stsservoy/customers');	
	k.on.add(k.columns.customer_id.eq(q.columns.customer_id));
	
	/** @type {QBJoin<db:/stsservoy/addresses>} */
	var jl = q.joins.add('db:/stsservoy/addresses');
	jl.on.add(q.columns.bill_to.eq(jl.columns.address_id));
	
	/** @type {QBJoin<db:/stsservoy/addresses>} */
	var r = q.joins.add('db:/stsservoy/addresses');
	r.on.add(r.columns.address_id.eq(q.columns.ship_to));
	//var tables = ['addresses','jobs','customers']
	var tables = ['jobs','customers','addresses'];
	for (var i = 0;i < tables.length;i++){
		var tableObj = databaseManager.getTable('stsservoy',tables[i]);
		var tableCols = tableObj.getColumnNames();
		for (var idx = 0;idx < tableCols.length;idx++){
			var colName = tableCols[idx];
			if (!colName){continue}
			switch (tables[i]){
				case 'addresses':
					q.result.add(jl.columns[colName],'addbt_'+colName);
					q.result.add(r.columns[colName],'addsh_'+colName);
					break;
				case 'customers':
					q.result.add(k.columns[colName],'cust_'+colName);
					break;
				case 'jobs':
					q.result.add(q.columns[colName]);
					//q.result.add(q.columns[colName],'jobs_'+colName);
					break;
				default:
			}
		}
	}

	var Q = databaseManager.getDataSetByQuery(q,-1);
	var Qds = databaseManager.createDataSourceByQuery('xyz1',q,-1);
	var Qfs = databaseManager.getFoundSet(Qds);
	Qfs.loadAllRecords();
	var firstRec = Qfs.getRecord(1);
	
	/** for (var obj in firstRec){
		if (typeof obj == 'function'){continue}
		//context[obj] = firstRec[obj];
		application.output('Header packingList items '+obj);
	} */
	// bundle - orig qty, piece mark, seq nbr, description line1, grade, item wt lbs, bar code id#
	context.custName = firstRec.cust_name;
	context.poNumber = firstRec.customer_po || '';
	context.poRelease = firstRec.po_release || '';
	context.jobNumber = firstRec.job_number || '';
	context.shopOrder = firstRec.shop_order; // from idfiles
	context.printedEmp = session.employeeNum;
	context.address = firstRec.addbt_line1;
	context.city = firstRec.addbt_city;
	context.state = firstRec.addbt_state;
	context.zip = firstRec.addbt_zip_postal_code || '';
	context.phone = firstRec.cust_phone;
	context.comments = firstRec.addbt_note || '';
	context.trailerInfo = '';
	context.heaviest = 0;
	context.loadNumber = form.loadNumber;
	context.bundleNumber = bndNum;
	barcodeDef.data = firstRec.job_number;
	context.jobBarCode = plugins.VelocityReport.getBarcode(barcodeDef);
	var shipDate = '';
	context.shipDate = utils.dateFormat(shipDate,'EEE, d MMM YYYY') || '';//20
	context.shipTime = utils.dateFormat(shipDate,'HH:mm:ss') || '';//20
	context.bol = 'sample';//20
	context.shipTo = 'sample';

	context.labelCustomer = i18n.getI18NMessage('sts.label.customer');
	context.labelJobNumber = i18n.getI18NMessage('table.jobs.job_number')+':';
	context.labelOrigQty = i18n.getI18NMessage('sts.reports.orig.qty');context.labelOrigQty = context.labelOrigQty.replace(' ','\n');
	context.labelPieceMark = i18n.getI18NMessage('sts.reports.piece.mark');
	context.labelSeqNumber = i18n.getI18NMessage('sts.reports.seq.number');context.labelSeqNumber = context.labelSeqNumber.replace(' ','\n');
	context.labelDescription = i18n.getI18NMessage('sts.reports.description');
	context.labelGrade = i18n.getI18NMessage('sts.reports.grade');
	context.labelItemWeight = (globals.isJobMetric(context.jobNumber)) ? i18n.getI18NMessage('sts.reports.item.wt.kgs') : i18n.getI18NMessage('sts.reports.item.wt.lbs');
	context.labelItemWeight = context.labelItemWeight.replace(' ','\n');
	context.labelBarCodeId = i18n.getI18NMessage('sts.reports.bar.code.id');context.labelBarCodeId = context.labelBarCodeId.replace(' ','\n');
	context.labelPoNumber = i18n.getI18NMessage('sts.label.load.purchase.order');
	context.labelReleaseNum = i18n.getI18NMessage('sts.label.load.release');
	context.labelEmployee = i18n.getI18NMessage('sts.label.employee');
	context.labelShipDate = i18n.getI18NMessage('sts.label.ship.date');
	context.labelShipTime = i18n.getI18NMessage('sts.label.ship.time');
	context.labelTrailerInfo = i18n.getI18NMessage('sts.label.trailer.information');
	context.labelComments = i18n.getI18NMessage('sts.label.comments');
	context.labelShipTo = i18n.getI18NMessage('sts.label.ship.to');
	context.labelBol = i18n.getI18NMessage('sts.label.bill.of.lading');
	context.labelHeaviest = i18n.getI18NMessage('sts.label.heaviest.piece');
	context.labelShopOrder = i18n.getI18NMessage('sts.label.shop.order');
	context.labelInvoice = i18n.getI18NMessage('sts.label.invoice');
	context.labelLoadNumber = i18n.getI18NMessage('sts.label.load.number');
	context.colShipQty = i18n.getI18NMessage('sts.col.label.ship.quantity');
	context.colDescription = i18n.getI18NMessage('sts.col.label.description');
	context.colPiecemark = i18n.getI18NMessage('sts.col.label.piece.mark');
	context.colCategory = i18n.getI18NMessage('sts.col.label.category');
	context.colLength = i18n.getI18NMessage('sts.col.label.length');
	context.colPieceWeight = i18n.getI18NMessage('sts.col.label.piece.weight');
	context.colTotalLoadWeight = i18n.getI18NMessage('sts.col.label.total.load.weight');
	context.colPiecemarkAndBarNumber = i18n.getI18NMessage('sts.col.label.piecemark.barcode');
	
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var t = databaseManager.createSelect('db:/stsservoy/idfiles');
	if (isBundleReport){
		t.where.add(t.columns.bundle_bc.eq(bndNum));
	}
	if (isLoadReport){
		t.where.add(t.columns.current_load_id.eq(session.loadId.toString()));
		/** @type {QBJoin<db:/stsservoy/loads>} */
		var u = t.joins.add('db:/stsservoy/loads');
		u.on.add(t.columns.current_load_id.eq(u.columns.load_id));
		t.result.add(u.columns.trailer_information);
		t.result.add(u.columns.load_comment);
		t.result.add(u.columns.bill_of_lading_out);
		t.result.add(u.columns.ship_date);
		t.groupBy.add(u.columns.trailer_information);
		t.groupBy.add(u.columns.load_comment);
		t.groupBy.add(u.columns.bill_of_lading_out);
		t.groupBy.add(u.columns.ship_date);
		/** @type {QBJoin<db:/stsservoy/addresses>} */
		var ta = u.joins.add('db:/stsservoy/addresses');
		ta.on.add(u.columns.ship_to.eq(ta.columns.address_id));
		/** @type {QBJoin<db:/stsservoy/customers>} */
		var tac = ta.joins.add('db:/stsservoy/customers');
		tac.on.add(ta.columns.customer_id.eq(tac.columns.customer_id));
		t.result.add(ta.columns.line1);
		t.result.add(ta.columns.line2);
		t.result.add(ta.columns.city);
		t.result.add(ta.columns.state);
		t.result.add(ta.columns.zip_postal_code);
		t.result.add(tac.columns.name,'addr_name');
		t.groupBy.add(tac.columns.name)
		t.groupBy.add(ta.columns.line1);
		t.groupBy.add(ta.columns.line2);
		t.groupBy.add(ta.columns.city);
		t.groupBy.add(ta.columns.state);
		t.groupBy.add(ta.columns.zip_postal_code);
	}
	t.result.distinct = true;
	t.result.add(t.columns.piecemark_id);
	t.groupBy.add(t.columns.piecemark_id);

	
	/** @type {QBJoin<db:/stsservoy/piecemarks>} * /
	var x = t.joins.add('db:/stsservoy/piecemarks');
	x.on.add(x.columns.piecemark_id.isin(t));
	if (isMetric){
		t.result.add(x.columns.item_weight.max,'heaviest');
	} else {
		t.result.add(x.columns.item_weight_lbs.max,'heaviest');		
	} */
   // t.result.add(t.functions.abs(0),'heaviest');
	t.result.add(t.columns.summed_quantity.sum,'total_qty');

	var isMetric = isJobMetric(form.jobNumber);
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var v = t.joins.add('db:/stsservoy/piecemarks');
	v.on.add(t.columns.piecemark_id.eq(v.columns.piecemark_id));
	t.result.add(v.columns.material,'piece_description');
	t.groupBy.add(v.columns.material);
	t.result.add(v.columns.piecemark,'piecemark');
	t.groupBy.add(v.columns.piecemark);
	if (isMetric){
		t.result.add(v.columns.item_length,'piece_length');
		t.result.add(v.columns.item_weight,'piece_weight');
		t.result.add(t.columns.summed_quantity.sum.multiply(v.columns.item_weight),'total_weight');
		t.groupBy.add(v.columns.item_length);
		t.groupBy.add(v.columns.item_weight);
		t.groupBy.add(t.columns.summed_quantity);
		t.groupBy.add(v.columns.item_weight);
	} else {
		t.result.add(v.columns.item_length_in,'piece_length');
		t.result.add(v.columns.item_weight_lbs,'piece_weight');
		t.result.add(t.columns.summed_quantity.sum.multiply(v.columns.item_weight_lbs),'total_weight');
		t.groupBy.add(v.columns.item_length_in);
		t.groupBy.add(v.columns.item_weight_lbs);
		t.groupBy.add(t.columns.summed_quantity);
		t.groupBy.add(v.columns.item_weight);
	}
	t.result.add(v.columns.grade,'item_grade');
	t.groupBy.add(v.columns.grade);
	/** @type {QBJoin<db:/stsservoy/sequences2>} */
	var x = t.joins.add('db:/stsservoy/sequences2');
	x.on.add(x.columns.sequence_id.eq(t.columns.sequence_id));
	t.result.add(x.columns.sequence_number,'sequence_number');
	t.groupBy.add(x.columns.sequence_number);
	if (addItemBarcode){
		//t.result.add(aggregate,alias)
	}
	/** @type {QBJoin<db:/stsservoy/id_serial_numbers>} */
	var y = t.joins.add('db:/stsservoy/id_serial_numbers');
	y.on.add(t.columns.id_serial_number_id.eq(y.columns.id_serial_number_id));
	t.result.add(y.columns.id_serial_number,'item_barcode');
	t.groupBy.add(y.columns.id_serial_number);
	if (addItemBarcode){
		t.result.addValue('URL','visBarcode');
	}
	//t.sort.add(v.columns.item_weight.desc);
	//var T = databaseManager.createDataSourceByQuery('bundle',t,-1);
	//var tfs = databaseManager.getFoundSet(T);
	//tfs.loadAllRecords();
	var X = databaseManager.getDataSetByQuery(t,-1);
	X.rowIndex = 1; var heaviest = 0; var totalItems = 0; var totalWeight = 0;
	//var success = X.addColumn('visBarcode',3,JSColumn.TEXT);var newBar = '';
	//application.output('success in creating new column '+success);
	//context.heaviest = X.heaviest;
	var grabHeaderData = true;
	for (idx = 1;idx <= X.getMaxRowIndex();idx++){
		X.rowIndex = idx;
		//application.output('length '+X.piece_length);
		if (grabHeaderData){
			var loadDate = X.ship_date;
			context.shipDate = utils.dateFormat(loadDate,'EEE, d MMM YYYY') || '';//20
			context.shipTime = utils.dateFormat(loadDate,'HH:mm:ss') || '';//20
			grabHeaderData = false;
			context.trailerInfo = X.trailer_information;
			context.comments = X.load_comment;
			context.bol = X.bill_of_lading_out;
			if (X.line1){
				context.shipTo = X.line1;
				if (X.line2){context.shipTo = context.shipTo + "\n"+X.line2}
				context.shipTo = context.shipTo + '\n'+X.city+', '+X.state+'\n'+X.zip_postal_code;
				if (application.isInDeveloper()){application.output(context.shipTo)}
				context.shipTo = X.addr_name+'\n'+context.shipTo;
			}
		}
		X.piece_length = (isMetric) ? X.piece_length : ftDecToString('INCHES',X.piece_length,20,'');
		X.piece_weight = Math.floor((X.piece_weight+.005)*100)/100;
		X.total_weight = Math.floor((X.total_weight+.005)*100)/100;
		if (addItemBarcode){
			barcodeDef.forcedWidth = 175;
			barcodeDef.forcedHeight = 20;
			barcodeDef.data = X.item_barcode;
			barcodeDef.placement = 'none';
			newBar = plugins.VelocityReport.getBarcode(barcodeDef);
			//application.output("hello " +newBar+' '+X.item_barcode);
			X.visbarcode = newBar;
		}
		if (isLoadDetail){
			X.piecemark += "\n"+X.item_barcode;
		}
		//X.ship_qty = X.ship_qty.toString().split('.')[0];
		if (heaviest < X.piece_weight){heaviest = X.piece_weight}
		totalWeight += X.piece_weight*X.total_qty;
		totalItems  += X.total_qty;
	}
	var array = X.getRowAsArray(1);
	for (var j = 660;j <100;j++){
		X.addRow(array);
	}
	context.heaviest = heaviest;
	context.data = X;//databaseManager.getDataSetByQuery(t,-1);//tfs;
	context.totalLoadWeight = Math.floor((totalWeight+.005)*100)/100;
	context.totalLoadItems = Math.floor((totalItems+.005)*100)/100;
	context.totalSummary = i18n.getI18NMessage('sts.label.total.pieces')+'   '+context.totalLoadItems+'\n'+
						i18n.getI18NMessage('sts.label.total.weight')+'   '+context.totalLoadWeight;

	var endTime = new Date().getTime();
	context.micros = endTime - context.start;
	if (application.isInDeveloper()){application.output('ms for report: '+context.micros)}

	//var reportTemplate = plugins.VelocityReport.getReportFolder()+'templates/bundleList.html';
	//reportTemplate = reportTemplate.replace(/\//g,"\\");
	//var pdf = plugins.VelocityReport.getPDFReport(reportTemplate,context);
	var reportFolder = scopes.prefs.reportpath;
	reportFolder = reportFolder.replace(/\.\\/,'');
	var pdf = plugins.VelocityReport.getPDFReport(reportFolder+'\\'+reportTemplate,context);//fails if using linux style pathname symbol '/'

	/** @type {String} */
	var tempDir = scopes.prefs.temppath;//changed from reportpath to temppath 20191203
	if (tempDir.search(/\.\\/) == 0){
		tempDir = tempDir.replace(/\.\\/,'/');
	}
	application.output('Temp Path is '+ tempDir);
	var tempDirObj = plugins.file.convertToRemoteJSFile(tempDir);
	
	application.output('Temp Dir Object '+tempDirObj);
	if (!tempDirObj.exists()){
		application.output('TempDir does not exist '+tempDir);
	} else {
		application.output('Tempdir not in folder.');
	}
	var regexp = new RegExp('[\\\/]*(.*)\..*html');
	var reportName = reportTemplate.match(regexp)[1]+'_'+getRandomG()+'.pdf';
	application.output('regexp '+regexp+' reportName '+reportName+' report template '+reportTemplate);

	var defaultUploadLocation = plugins.file.getDefaultUploadLocation();
	/** @type {String} */
	var fileName = defaultUploadLocation+'/'+tempDir+'/'+reportName;//bundleList.pdf';
	var shortFileName = tempDir+'/'+reportName;//'/bundleList.pdf';
	fileName = fileName.replace(/\//g,"\\");
	fileName = fileName.replace(/\\\\/g,"\\");
	fileName = '\\'+fileName;
	var fileObj2 = plugins.file.convertToJSFile(fileName);
	application.output('Filename path '+fileName+' remote obj '+fileObj2+' root directory '+defaultUploadLocation);
	if (pdf && pdf.length > 0){
		var success = plugins.file.writeFile(fileObj2,pdf);//to write file on server, it must be a JSFile object or the browser opens it
		if (success){
			endTime = new Date().getTime();
			if (application.isInDeveloper()){
				application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', fileName]);//open pdf viewer
			}
		} else {
			application.output('No fileName created on Server.');
		}
	} else {
		application.output("No PDF returned.");		
	}
	if (success){//) && !application.isInDeveloper()){\\TEMP DISABLE DEVELOPER PRINT
		application.output('Send filename '+fileName+' to printer \''+printerName+'\'');
		var uploadArea = plugins.file.getDefaultUploadLocation();
		var reportsArea = plugins.VelocityReport.getReportFolder()
		fileObj2 = plugins.file.convertToJSFile(fileName);
		if (!fileObj2.exists()){
			application.output('filename '+fileName+' exists. Upload area: ' +uploadArea);
		} else {
			application.output('filename '+fileName+' missing. Upload area: ' +uploadArea);

		}
		silentPrint(fileName,printerName);
	}
	
}
/**
 * @return {Array}
 * @properties={typeid:24,uuid:"B976F342-D4CB-428E-A0F9-7AE3AAAC4B84"}
 */
function getPrinterList(){
	if (scopes.jobs.printerBtns.length == 0){
		scopes.jobs.printerBtns = application.getPrinters().sort();
		var defaultPrinter = scopes.prefs.defaultRfPrinter;//Fri 05 Oct 2018 F6 Default Printer comes from Preferences
		//if (!defaultPrinter){
			scopes.jobs.printerBtns.unshift(i18n.getI18NMessage('sts.txt.printer.default'));
		//} else {
		//	scopes.jobs.printerBtns.unshift(defaultPrinter);
		//}
	}
	return scopes.jobs.printerBtns; 
}
/**
 * @param {JSForm} form
 * @param {Boolean} enable
 * 
 * @properties={typeid:24,uuid:"7B4BC235-FD3D-404F-A582-A1E41E417349"}
 */
function renderPackingBtns(form,enable){
	var padding = '   ';
	var btnArr = ['btn_print1','btn_print2','btn_print3','btn_print4','btn_print5','btn_print6'];
	if (scopes.jobs.packingListBtns.length == 0){
		scopes.jobs.packingListBtns = [i18n.getI18NMessage('sts.btn.packing.list'),
			i18n.getI18NMessage('sts.btn.packing.list.barcodes'),
			i18n.getI18NMessage('sts.btn.packing.list.detail'),
			i18n.getI18NMessage('sts.btn.cancel.print')];//add cancel print button to packing list
	}
	var packReport = scopes.jobs.packingListBtns;
	form.elements['btn_print7'].visible = false;
	var setNames = true;
	for (var idx = 0;idx < btnArr.length;idx++){
		var btn = form.elements[btnArr[idx]];
		if (packReport[idx]){
			btn.visible = (enable) ? true : false;
			//btn.transparent = false;
			btn.bgcolor = 'white';
			btn.fgcolor = 'black';
		}
		if (!enable){
			btn.visible = false;
			continue
		}
		if (setNames && packReport[idx] && idx < 5){
			if (packReport[idx]){
				btn.text = padding+packReport[idx];
			}
		}
	}
	//application.updateUI();
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"78CA63EC-FB6B-433B-AABA-116AA55E2CEA"}
 */
function printBundle(event){
	
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"A31E8999-B8FC-41E5-A2FA-B03F28560289"}
 */
function printPacking(event){
	
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"993E66C7-F6A2-4037-8864-9C3DD4C583F3"}
 */
function actionMenuButtons(event){
	// F6BundlePrint, F6PackingListPrint
	// Function rfFuncInterimDest
	
	var elName = event.getElementName();
	var form = forms[event.getFormName()];
	var elText = form.elements[elName].text.trim();
	if (session.functionName == 'rfFunctionDestinationList'){
		var noEntry = i18n.getI18NMessage('sts.btn.default.empty.entry');
		var cancel = i18n.getI18NMessage('sts.btn.cancel');
		var okay = i18n.getI18NMessage('sts.btn.ok');
		switch (elText){
			case okay:
				return;
				break;
			case cancel:
				mob.load.interimDest = '';
				renderInterimDestBtns(form,false);
				break;
			case noEntry:
				mob.load.interimDest = '';
				renderInterimDestBtns(form,false);
				break;
			default:
				mob.load.interimDest = elText;
		}
		return;
	}
	if (elText == i18n.getI18NMessage('sts.btn.cancel.print')){
		renderPackingBtns(form,false);//return immmediately to main help if close print
		form.elements['genericin'].requestFocus();
		//eval('scopes.globals.rfF6PrintPackingList(event);');
		return;
	}
	if (scopes.jobs.printerBtns.indexOf(elText) != -1){
		// print according to current function, singular report selection, so need to select printer
		switch (session.functionName){
			case 'F6BundlePrintList':
				forms[event.getFormName()].reportType = 'F6BundlePrintList';
				break;
			case 'F6PackingListPrintList':
				//execute and print 
				break;
			case 'F6PackingListPrintBarcodes':
				//execute and print 
				break;
			case 'F6PackingListPrintDetails':
				//execute and print 
				break;
			default:
		}
		silentPrintToServer(event);
		renderPrinterBtns(form,false);
		
		return;
	}
	if (scopes.jobs.packingListBtns.indexOf(elText) != -1){
		// selection of elText determines type of report, now set printer buttons for report destination
		switch (scopes.jobs.packingListBtns.indexOf(elText)){
			case 0:
				session.functionName += 'List';
				forms[event.getFormName()].reportType = 'F6PackingListPrintList';
				break;
			case 1:
				session.functionName += 'Barcodes';
				forms[event.getFormName()].reportType = 'F6PackingListPrintBarcodes';
				break;
			case 2:
				session.functionName += 'Details';
				forms[event.getFormName()].reportType = 'F6PackingListPrintDetails';
				break;
			default:
		}
		renderPrinterBtns(form,true);
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B527C0E5-456A-45B7-806F-72FE585EF621"}
 */
function backupDatabase(event){
	var localTemp = scopes.printer.userTempPath;
	//if (!localTemp){return}
	var date = new Date();
	var baseDir = plugins.UserManager.Server().servoyDirectory;
	var backupName = 'backupSTS_'+scopes.jobs.formatDate(date);
	var backupDest = plugins.VelocityReport.getReportFolder();
	backupDest = backupDest.replace(/\\/g,'/');
	backupName = backupName.replace(/ /g,'_').replace(/:/g,'').replace(/\//g,'_')+'.tar';
	var drive = 'C:';
	var port = '5432';
	port = '5432';
	var pathName = scopes.prefs.progDbBinaryPath;//'c:\\Program Files\\PostgreSQL\\9.5\\bin';
	//pathName = '\\Program Files\\PostgreSQL\\9.5\\bin';
	var backupProg = 'backupServoySTS_DB.bat';
	var backupExecute = baseDir+'\\backupDB.bat';//'\\p2server01\\stsx\\backupDB.bat';//baseDir+'\\backupDB.bats';
	//var backupExecute = '\\p2server01\\stsx\\backupDB.bats';//baseDir+'\\backupDB.bats';
	//backupExecute = 'e:\\\\STSX\\backupServoySTS_DB.bat';
	if (application.isInDeveloper()){
		absPath = '\\\\alienware-pc\\stsx\\'+backupProg;
		drive = 'E:';
		port = '5474';
		pathName = '\\Programs\\PostgreSQL\\9.5\\bin\\'
	}
	var dumpVars = 'pg_env.bat';
	backupFileNameAndPath = (backupDest.charAt(backupDest.length-1) == "/") ? backupDest+backupName : backupDest+'/'+backupName;
	var backupFile = backupFileNameAndPath.replace(/\//g,'\\');
	var dumpCmd = '\"'+pathName+'\\pg_dump\"  --port='+scopes.prefs.progDbPort+' --username='+scopes.prefs.progDbAdmin+' --format=t --no-password stsservoy > '+backupFile;
	var passPath = 'SET PGPASSWORD='+scopes.prefs.progDbPassword;//'SET PGPASS=\\stsx\\pgpass.conf.txt';//+plugins.file.getDefaultUploadLocation()+'\\pgpass.conf.txt';
	var backupScript = '@echo on\n'+'\n'+passPath+'\n\n'+dumpCmd+'\n\n';
	//var file = plugins.file.getDefaultUploadLocation()+scopes.prefs.
	var file = plugins.file.convertToJSFile(backupProg);
	if (file.exists()){
		file.deleteFile();
	}
	var newFileOk = file.createNewFile();
	if (newFileOk){
		plugins.file.writeTXTFile(file,backupScript);
	}
	var remoteFile = plugins.file.convertToRemoteJSFile('/'+backupProg);
	//var deleteOk = remoteFile.deleteFile();
	//idx = 200;
	//while (remoteFile.exists() && idx > 0){
	//	idx--;
	//}
	plugins.file.streamFilesToServer(file);
	/** @type {String} */
	var fullBackProgPath = plugins.file.getDefaultUploadLocation()+'\\'+backupProg;
	//application.output('full prog path: '+fullBackProgPath+' passpath: '+passPath);
	var idx = 200;
	while (!remoteFile.exists() && idx > 0){
		idx--;
	}
	date = new Date();
	var curDate = null;
	do { curDate = new Date(); }
	while(curDate-date < 200);

	var output = plugins.UserManager.Server().executeProgram(fullBackProgPath);

	application.output('database backup '+dumpCmd+' '+output);
	errorDialogMobile(event,'sts.txt.backup.initiated',null,null);
	//plugins.dialogs.showErrorDialog(i18n.getI18NMessage('sts.txt.backup.initiated'),i18n.getI18NMessage('sts.txt.backup.initiated'));
	if (backupFileNameAndPath){
		var file = plugins.file.convertToJSFile(backupFileNameAndPath);
		if (!file){
			globals.errorDialogMobile(event,'7004',null,backupFileNameAndPath);//sts.txt.crossover.nofile
			return;
		}
		var size = file.size();
		var time = new Date().getTime();
		var origTime = time;
		while (size == 0){
			var newTime = new Date().getTime();
			var diffTime = newTime - time;
			if (diffTime > 1000){
				size = file.size();
				//application.output('Time: '+time+' Size: '+size);
				time = new Date().getTime();
			}
			if ((newTime - origTime) > 20000){break}
			if ((newTime - origTime) > 200 && application.isInDeveloper()){break}
		}
		if (file.size() == 0){
			globals.errorDialogMobile(event,'7004',null,backupFileNameAndPath);//sts.txt.crossover.nofile
		}
	}	
}
/**
 * @param {JSDataSource} table
 * @param {Array} columnsArray
 *
 * @properties={typeid:24,uuid:"9517AA24-B97C-4D32-B74A-2A15F7746FE3"}
 * @AllowToRunInFind
 */
function compareMemTableToColumns(dataSource,columnsArray){
	null;
	if (dataSource.search(':') == -1){dataSource = 'mem:'+dataSource}
	if (!databaseManager.dataSourceExists(dataSource)){return true}
	var memFS = databaseManager.getFoundSet(dataSource);
	var tableColumns = memFS.alldataproviders;
	for (var idx = 0;idx < columnsArray.length;idx++){
		if (tableColumns.indexOf(columnsArray[idx]) == -1){return false}
	}
	//for (idx = 0;idx < tableColumns.length;idx++){
	//	if (columnsArray.indexOf(tableColumns[idx]) == -1){return false}
	//}
	return true;
}
/**
 * @properties={typeid:24,uuid:"5F9D00CB-AF9E-4F1E-B27C-FCDF3C58568D"}
 */
function getUnprotectedGroups(){
	var skipProtected = "\.%"
	/** @type {QBSelect<db:/stsservoy/groups>} */
	var q = databaseManager.createSelect('db:/stsservoy/groups');
	q.result.clear();
	q.where.clear();
	q.groupBy.clear();
	q.sort.clear();
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.group_name.not.like(skipProtected));
	q.result.add(q.columns.group_name,'displayColumn');
	q.result.add(q.columns.group_uuid,'realColumn');
	q.sort.add(q.columns.group_name.asc);
	var Q = databaseManager.getDataSetByQuery(q,-1);Q.getRowAsArray(1)
	return Q;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"89536ADE-F185-4DBB-BEB2-9359E8EC3624"}
 * @AllowToRunInFind
 */
function rfOkToProcessId(event){
	var form = forms[event.getFormName()];
	/** @type {Array} */
	var reqFlds = form['requiredFields'];
	for (var idx = 0;idx < reqFlds.length;idx++){
		/** @type {String} */
		var elName = reqFlds[idx];
		if (elName.search(/(genericin|genericin2|currentidin)/) != -1){continue}
		var dataProv = form.elements[elName].getDataProviderID();
		if (form[dataProv] == '') {return false;}
	}
	return true;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C96B54B4-EDD9-45E3-84FC-315CBBBFF691"}
 */
function rfFinalShip(event){
	//check that all required fields entered
	if (!rfOkToProcessId(event)){
		errorDialogMobile(event,1228,'genericin','');
		return;
	}
	var response = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.load.ship'),i18n.getI18NMessage('sts.txt.load.process'),i18n.getI18NMessage('sts.btn.no'),i18n.getI18NMessage('sts.btn.yes'));
	if (response == i18n.getI18NMessage('sts.btn.no')){return;}
	response = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.load.ship'),i18n.getI18NMessage('sts.txt.load.cancel'),i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no'));	//check fs okay with this
	if (response == i18n.getI18NMessage('sts.btn.yes')){return;}
	
	//set all idfiles as finalship and current and ship date and stuff
	rfGetSpecsLoad(session.program);
	null;
	if (mob.load.ctShipped != 0){//continue processing this load? 1268
		var msg = mob.load.ctShipped+'/'+mob.load.ctTotal+ ' '+i18n.getI18NMessage('1268');
		var resp = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1268'),msg,i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no'));
		if (resp == i18n.getI18NMessage('sts.btn.no')){return}
	}

	mob.date = new Date();
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var qq = databaseManager.createSelect('db:/stsservoy/status_description');
	qq.where.add(qq.columns.status_code.eq(mob.statusCode));
	qq.where.add(qq.columns.tenant_uuid.eq(session.tenant_uuid));
	var QQ = databaseManager.getFoundSet(qq);
	/** @type {JSFoundSet<db:/stsservoy/status_description>} */
	var qqRec = QQ.getRecord(1);
	var statusShipType = qqRec.status_type;
	var pushStation = false;
	if (processCodes.shipping.indexOf(statusShipType) != -1){
		pushStation = (qqRec.push_a_station == 1);
	}
	if (pushStation){//!(!m.stationsThird[mob.statusCode])){
		var fsResp = scopes.fs.fabSuiteSaved('Save');
		if (fsResp.error){
			errorDialogMobile(event,'1220','genericin',fsResp.error);
			return;
		}
	}
	fsResp = scopes.fs.fabSuiteShip(event,mob.job.number,mobLoadNumber,'Ship');
	if (fsResp.error){
		errorDialogMobile(event,'1220','genericin',fsResp.error);
		return;
	}
	
	rfSaveLoadTransaction(event);
	application.output('processGo');
}
/**
 * @properties={typeid:24,uuid:"CFEBFC1D-0D15-4F37-A94E-A07AC256E60B"}
 */
function rfSaveLoadTransaction(event){
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var fs = mob.load.loadFs;
	application.output('size '+fs.getSize());
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var rec = null;var idx = 1;
	while (rec = fs.getRecord(idx++)){
		//rec.edit_date = mob.date;
		rec.current_load_id = mob.load.shipId;
		rec.edit_date = mob.date;
		rec.id_location = mob.locationArea;
		rec.ship_load_id = mob.load.shipId;
		rec.shipped_quantity = 1;
		rec.status_description_id = application.getUUID(session.stationId);
		
		/** @type {QBSelect<db:/stsservoy/transactions>} */
		var q = databaseManager.createSelect('db:/stsservoy/transactions');
		q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
		q.where.add(q.columns.idfile_id.eq(rec.idfile_id.toString()));
		q.result.add(q.columns.trans_id);
		q.where.add(q.columns.status_description_id.eq(session.stationId.toString()));
		/** @type {JSFoundSet<db:/stsservoy/transactions>} */
		var Q = databaseManager.getFoundSet(q);
		if (Q.getSize() == 0){
			var idx2 = Q.newRecord();
			/** @type {JSFoundSet<db:/stsservoy/transactions>} */
			var rec2 = Q.getRecord(idx2);
			rec2.edit_date = mob.date;
			rec2.bundle_bc = rec.bundle_bc;
			rec2.employee_id = session.employeeId;
			rec2.idfile_id = rec.idfile_id;
			rec2.load_id = mob.load.shipId;
			rec2.quantity = rec.summed_quantity;
			rec2.status_description_id = rec.status_description_id;
			rec2.tenant_uuid = session.tenant_uuid;
			rec2.trans_code = rfTransCode();
			rec2.transaction_date = mob.date;
			rec2.trans_status = mob.statusCode;
			databaseManager.saveData(rec2);
			var status = databaseManager.saveData(rec);
		} else {
			databaseManager.revertEditedRecords();
		}
	}
}
/**
 * @properties={typeid:24,uuid:"878BF02C-3860-48BA-A98D-94250C0BFE88"}
 */
function rfF8FinalShip(){
	//check history

}
/**
 * @properties={typeid:24,uuid:"606F7F58-B028-41B5-8DEF-1E35D3365CCB"}
 */
function getCustomerAddressNames(){
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.where.add(j.columns.job_id.eq(mob.job.Id.toString()));
	j.where.add(j.columns.tenant_uuid.eq(session.tenant_uuid));
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var J = databaseManager.getFoundSet(j);
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var rec = J.getRecord(1);
	mob.customer.Id = J.customer_id.toString();
	mob.job.rf = J.rf_interface;
	/** @type {QBSelect<db:/stsservoy/addresses>} */
	var q = databaseManager.createSelect('db:/stsservoy/addresses');
	q.where.add(q.columns.customer_id.eq(mob.customer.Id.toString()));
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.delete_flag.isNull);
	q.result.add(q.columns.address_type);
	q.result.add(q.columns.address_id);
	var Q = databaseManager.getFoundSet(q);
	var ds = databaseManager.convertToDataSet(Q,['address_type','address_id']);
	return ds;
}
/**
 * @param idSerial
 *
 * @properties={typeid:24,uuid:"6C37155B-E0A9-43A2-A4FB-C86E87DB7E27"}
 */
function checkValidSerialID(idSerial){
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.where.add(q.columns.id_serial_number.eq(idSerial));
	var Q = databaseManager.getFoundSet(q);
	Q.loadRecords();
	return (Q.getSize() != 0);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6EBC4C05-024D-4AAC-9CD7-E4BF5362343F"}
 */
function renderPrintCancel(event){
	eval(showExecLogout);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param userAgent
 *
 * @properties={typeid:24,uuid:"4F94C577-20DF-4E0D-8157-BE635C273281"}
 */
function storeUserAgent(userAgent){
	if (application.isInDeveloper()){application.output('inside store user agent from web browser')}
	globals.mob.userAgent = userAgent+' '+application.getScreenWidth()+' x '+application.getScreenHeight();
}
/**
 * @param commitType
 *
 * @properties={typeid:24,uuid:"CF1E2A71-6129-47D0-8418-AAA596CC672A"}
 */
function rfSaveThirdParties(commitType){
	var saved = true;
	saved = saved && scopes.fs.fabSuiteSaved(commitType);
	return saved;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"555AF215-E5C0-4C34-91BB-6555D4775499"}
 */
function getNextLoadNumber(){
	//scopes.prefs.loadCreate;
	/**
	 * i18n:sts.label.hardware.load.calculation.auto.job.specific
	 * i18n:sts.label.hardware.load.calculation.auto.system.wide.specific
	 * i18n:sts.label.hardware.load.calculation.auto.none
	 */
	var loadCreate = scopes.prefs.loadCreate;//creat job start/job specific/company wide
	session.loadNextNumber = scopes.prefs.startLoadNum;
	session.jobLoads = loadGetJobDataset(session.jobId);
	var fsNextLoad = 0;
	if (scopes.prefs.lFabsuiteInstalled == 1 && session.jobIsFabSuite){
		fsNextLoad = scopes.fs.checkFSNextLoad()*1-1;
		//if (session.loadNextNumber){
		//	return session.loadNextNumber;
		//}
	}
	if (fsNextLoad > session.loadNextNumber){session.loadNextNumber = fsNextLoad}
	//session.jobLoads = loadGetJobDataset(session.jobId);
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var q = databaseManager.createSelect('db:/stsservoy/loads');
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	if (loadCreate == i18n.getI18NMessage('sts.label.hardware.load.calculation.auto.job.specific')){
		q.where.add(q.columns.job_id.eq(session.jobId));
	}
	q.result.add(q.columns.load_id);
	var Q = databaseManager.getFoundSet(q);
	
	if (Q.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		var rec = null; var index = 1;//var noNextNum = (loadNumber.search(/[^0-9]/) != -1);
		var highest = 0;var highestNon = '';
		while (rec = Q.getRecord(index++)){//get largest load number
			var alpha = (rec.load_number.toString().search(/[^0-9\.]/) != -1);
			if (alpha){
				highestNon = (highestNon > rec.load_number) ? highestNon : rec.load_number;
			} else {
				highest = (highest*1 > rec.load_number*1) ? highest : rec.load_number;
			}
		}
	}
	//application.output('load number fs:'+fsNextLoad+' highest STSX:'+highest+' prefs:'+scopes.prefs.startLoadNum);
	if (highest*1 > session.loadNextNumber*1){session.loadNextNumber = highest}
	session.loadNextNumber = session.loadNextNumber*1 + 1;
	if (scopes.prefs.startLoadNum*1 > session.loadNextNumber*1){session.loadNextNumber = scopes.prefs.startLoadNum*1}
	session.loadNextNumber = session.loadNextNumber.toString().replace('.0','');
	//}
	if (session.loadNextNumber == 0){session.loadNextNumber = 1}
	return session.loadNextNumber;
}
/**
 * @properties={typeid:24,uuid:"159669EE-F582-4871-80E9-726F0D34FCAB"}
 */
function rfFuncInterimDest(){
	//this function needs to block, since web-based
	session.functionName = 'rfFuncInterimDest';
	var thisFunction = thisFuncName(arguments.callee.toString());
	//if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var form = forms['rf_mobile_view'];
	form.functionKeyEntered = true;
	if (!form.jobNumber){return}
	//var inProgress = (thisFunction == flagFunction); // toggle function
	//flagFunction = (inProgress) ? null : thisFunction;
	
	if (form.elements['btn_print1'].visible){
		renderInterimDestBtns(form,false);
	 } else {
		renderInterimDestBtns(form,true);
	 }
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param form
 * @param enable
 *
 * @properties={typeid:24,uuid:"CA1D594D-76BF-4786-838D-6963F99EFEE8"}
 */
function renderInterimDestBtns(form,enable){
	/**
	 * title is 'set interim destination'
	 * first button is <None>
	 * interim button list
	 * last button is CANCEL
	 * there must be a confirmation dialog
	 */
	var btnArr = ['btn_print1','btn_print2','btn_print3','btn_print4','btn_print5','btn_print6','btn_print7'];
	var destinations = getDestinationList();

	var padding = '   ';
	var setNames = (destinations.indexOf(form.elements[btnArr[0]].text) == -1);
	for (var idx = 0;idx < btnArr.length;idx++){
		var btn = form.elements[btnArr[idx]];
		btn.visible = (enable) ? true : false;
		if (!enable){continue}
		if (setNames && destinations[idx] && idx < 5){
			if (destinations[idx]){
				btn.text = padding+destinations[idx];
				//btn.transparent = false;//Fri 05 Oct 2018 F6 make buttons opaque
				btn.fgcolor = 'black';//Fri 05 Oct 2018 F6 make buttons opaque
				btn.bgcolor = 'white';//Fri 05 Oct 2018 F6 make buttons opaque
			}
		}
		if (btn.text == 'button'){
			btn.text = '';
		}
	}
	form.elements['btn_print7'].visible = enable;
	if (form.elements['btn_print7'].text.search(padding) == -1){
		form.elements['btn_print7'].text = padding+form.elements['btn_print7'].text;
		form.elements['btn_print6'].text = padding+form.elements['btn_print6'].text;
	}
	
}
/**
 * @properties={typeid:24,uuid:"A6F39A3D-2185-433B-8805-198420733FC4"}
 * @param {JSEvent} event
 */
function getDestinationList(event){
	var noEntry = i18n.getI18NMessage('sts.btn.default.empty.entry');
	//if (!scopes.jobs.destinationBtns || scopes.jobs.destinationBtns.length <= 1){
	var jobInfo = globals.getJobIdInfo(session.jobNumber);
	var rfInterface = jobInfo.job_rec.rf_interface;
	scopes.jobs.destinationBtns = [];
	var destinations = '';
	if (rfInterface == i18n.getI18NMessage('sts.interface.fabsuite')){
		//scopes.fs.getJobAddressBook(event,session.jobNumber);
		scopes.jobs.destinationBtns = scopes.fs.getFSInterimLoadDests(session.jobNumber);//20181120 get FS interim destination list
	} else {
		getJobDestinationAddressesVL(event,session.jobNumber);
		for (var dest in application.getValueListArray('stsvl_destinations')){
			scopes.jobs.destinationBtns.push(dest);
		}
	}
	scopes.jobs.destinationBtns.unshift(i18n.getI18NMessage('sts.btn.default.empty.entry'));
	//}
	var cancel = i18n.getI18NMessage('sts.btn.cancel');
	var okay = i18n.getI18NMessage('sts.btn.ok');
	return scopes.jobs.destinationBtns; 
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"90C820B2-E853-4AF0-BD29-683D91A3FEF7"}
 */
function clearDataProvider(event){
	var form = forms[event.getFormName()];
	var dataProv = form.elements[event.getElementName()].getDataProviderID();
	form[dataProv] = '';
}
/**
 * @properties={typeid:24,uuid:"A154A329-1E82-4B28-9E7E-5D1FB68812E8"}
 */
function createStations(){
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var s = databaseManager.createSelect('db:/stsservoy/status_description');
	s.where.add(s.columns.tenant_uuid.eq(session.tenant_uuid));
	s.result.add(s.columns.status_description_id);
	var S = databaseManager.getFoundSet(s);
	S.loadRecords();
	if (S.getSize() != 0){return}

	var shopId = '';
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var a = databaseManager.createSelect('db:/stsservoy/associations');
	a.where.add(a.columns.tenant_uuid.eq(session.tenant_uuid));
	a.where.add(a.or
		.add(a.columns.logic_flag.not.eq(1))
		.add(a.columns.logic_flag.isNull)
		)
	var A = databaseManager.getFoundSet(a);
	A.loadRecords();
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	var recA = A.getRecord(1);


	var editDate = new Date();
	var emptyDept = i18n.getI18NMessage('sts.empty.entry');
	shopId = recA.association_uuid;
	var items = [
		{status_code:'CUT',status_description:'Cut Operation',status_type:i18n.getI18NMessage('sts.status.fab.cut'),status_sequence:100,labor_code_department:emptyDept,tenant_uuid:session.tenant_uuid,association_id:shopId,edit_date:editDate},
		{status_code:'FIT',status_description:'Fitup Operation',status_type:i18n.getI18NMessage('sts.status.fab.fitup'),status_sequence:120,labor_code_department:emptyDept,tenant_uuid:session.tenant_uuid,association_id:shopId,edit_date:editDate},
		{status_code:'WELD',status_description:'Weld Operation',status_type:i18n.getI18NMessage('sts.status.fab.weldup'),status_sequence:140,labor_code_department:emptyDept,tenant_uuid:session.tenant_uuid,association_id:shopId,edit_date:editDate},
		{status_code:'FINAL',status_description:'Final QC',status_type:i18n.getI18NMessage('sts.status.fab.inspected'),status_sequence:160,labor_code_department:emptyDept,tenant_uuid:session.tenant_uuid,association_id:shopId,edit_date:editDate},
		{status_code:'LOADED',status_description:'Loaded on Truck',status_type:i18n.getI18NMessage('sts.status.fab.loaded'),status_sequence:180,labor_code_department:emptyDept,tenant_uuid:session.tenant_uuid,association_id:shopId,edit_date:editDate},
		{status_code:'SHIPPED',status_description:'Shipped',status_type:i18n.getI18NMessage('sts.status.fab.ship'),status_sequence:200,labor_code_department:emptyDept,tenant_uuid:session.tenant_uuid,association_id:shopId,edit_date:editDate}
	];
	for (var idx = 0;idx < items.length;idx++){
		var idxR = S.newRecord()
		var rec = S.getRecord(idxR);
		databaseManager.copyMatchingFields(items[idx],rec);
	}
	databaseManager.saveData(S);
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"92C3415A-D36C-4542-938B-F143F3E72E3B"}
 */
function deBounce(event){
	var elButton = event.getElementName();
	var currTime =  new Date().getTime();
	if (!globals.deBounceBtn[elButton]){globals.deBounceBtn[elButton] = currTime;return false;}
	var debounceTime = 5;
	var diff = (currTime - globals.deBounceBtn[elButton])/1000;
	///application.output(diff);
	if (diff < debounceTime){return true}
	globals.deBounceBtn[elButton] = null;
	return false;
}
/**
 * @properties={typeid:24,uuid:"8C270C4D-949D-4FB3-BE95-8B849E19D93E"}
 * @AllowToRunInFind
 */
function geti18nScreenNameMapping(){
	/** @type {QBSelect<db:/stsservoy/i18n_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/i18n_table');
	q.result.add(q.columns.message_key);
	q.result.add(q.columns.message_value);
	q.where.add(q.columns.message_language.eq(i18n.getCurrentLanguage()));
	q.where.add(q.columns.message_key.like('sts.mobile.%'));
	var Q = databaseManager.getDataSetByQuery(q,-1);
	null;
	for (var index = 1;index <= Q.getMaxRowIndex();index++){
		Q.rowIndex = index;
		if (Q.message_value.search(':') != -1){continue}
		m.i18nMobileViews[Q.message_key] = Q.message_value;
		m.i18nMobileViews[Q.message_value] = Q.message_key;
	}
	scopes.prefs.getMCPrintScreenNames();
	scopes.prefs.getMCFSScreenNames();
}
/**
 * @properties={typeid:24,uuid:"630CD47F-CA0F-49DE-873A-01E383128AB2"}
 */
function rfF6TogglePrint(){
	var form = forms['rf_mobile_view'];
	form['printEnabled'] = (form['printEnabled'] == 'ON') ? 'OFF' : 'ON';
	var printEnabledScreen = form['printEnabledScreen'];
	//application.output('print enabled screen '+printEnabledScreen+' print toggled '+form['printEnabled'])
	var printEnabledNotice = (printEnabledScreen) ? ' p-'+form['printEnabled'] : '';
	form.elements['genericinlabel'].text = i18n.getI18NMessage('sts.label.generic')+printEnabledNotice;

}
/**
 * @param {String} convType
 * @param {String} dims
 *
 * Return INCHES always INCHES
 * Accepts FEET or INCHES *formatting* FEET INCHES NUMERATOR DENOMINATOR
 * 
 * @properties={typeid:24,uuid:"033BC94E-2025-4DE1-9024-194DAD517482"}
 * @AllowToRunInFind
 */
function strToDec(convType,dims){
	function checkDenom(number){
		//application.output(Math.floor(number/2)+ ' ' +Math.ceil(number/2))
		return (Math.floor(number/2) == Math.ceil(number/2) && number*1 > 1 && number*1 < 17 );
	}
	convType = convType.toUpperCase();
	/** @type {String} */
	var itemDim = dims.trim().replace(/ +/g,' ').replace(/\.+/g,' ');
	//if (itemDim.search(/[^ \d'"\-]*/) != -1){return -1}

	var feet = 0;
	var inches = 0;
	var numerator = 0;
	var denominator = 1;
	
	
	var dimStr = itemDim.split(' ');
	
	switch (convType) {
		case "INCHES" :
			if (dimStr.length > 3 || dimStr.length == 2){return -1}//inches are input INCHES {NUM DENOM}
			inches = dimStr[0];
			if (dimStr.length == 3){
				numerator = dimStr[1];
				denominator = dimStr[2];
			}
			break;
		case "FEET" :
		default:
			//application.output('params '+dimStr.length+' '+dimStr)
			if (dimStr.length == 3){return -1}//Cannot have missing numerator or denominator
			feet = dimStr[0];
			inches = (!dimStr[1]) ? 0 : dimStr[1];
			numerator = (!dimStr[2]) ? 0 : dimStr[2];
			denominator = (!dimStr[3]) ? 1 : dimStr[3];// no divide by zero
	}
	if (feet == 0 && inches == 0 && numerator == 0){return 0.0}
	if (!checkDenom(denominator) && denominator != 1){return -1}//no use for odd numbers in denominator, probably mistyped
	if (numerator*1 > denominator*1){return -1}//input greater than denominator likely mistyped
	return feet*12 + inches*1 + numerator/denominator;
}
/**
 * @param decimal
 *
 * @properties={typeid:24,uuid:"B44597B8-F233-4112-A293-A13CC106E878"}
 */
function fraction16(decimal){
	var pre = 1;
	var post = 0;
	var numer = 0;
	var numerator = 0;
	var denominator = 0;
	for (var i = 1;i < 16;i++){
		var sixteenth = i/16;
		if (sixteenth*1 < decimal*1){
			pre = sixteenth
		}
		if (sixteenth*1 > decimal*1){
			post = sixteenth
		}
		if (sixteenth*1 == decimal*1){pre = post;numer = i;break}
		if (post != 0){numer = i;break}
		
	}
	var half = (pre-post)/2+pre*1;
	if (decimal < half){numerator = numer - 1} else {numerator = numer}
	denominator = 16;
	while (true){
		var newNum = numerator/2;
		var newDen = denominator/2;
		if (Math.floor(newNum) == numerator/2 && Math.floor(newDen) == denominator/2){
			numerator = newNum;
			denominator = newDen;
		} else {
			break;
		}
	}
	//application.output(pre+' '+numer+': '+decimal+' '+post+'     '+numerator+'/'+denominator+' NUMERATOR '+numerator);
	var fraction = numerator+'/'+denominator;
	if (numerator == 0){
		fraction = '';
	} 
	if (numerator*1 == -1){
		//application.output('numerator '+numerator);
		fraction = '1';
	}
	return fraction;
	
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"1CE3635C-EFBE-4C90-9CA4-8659A7600A12"}
 */
function clearCutListData(event){
	session.cutlistused = [];
	session.cutlistavail = [];
	session.cutlistdata = {};
	var form = forms['rf_mobile_view'];
	form.associatedCutIdCount = 0;
	form.associatedCutIdTotal = 0;
	form.associatedCutRatio = '0 of 0';
}
/**
 * @param event
 * @param entryField
 *
 * @properties={typeid:24,uuid:"5A68C99E-03EE-4E0A-BFF1-AFB8E19D7BBE"}
 */
function rfClearDependentEntries(event,entryField){
	var form = forms['rf_mobile_view'];
	var currIdx = form['requiredFields'].indexOf(entryField);
	var lastIdx = form['requiredFields'].length;
	for (var idx = currIdx+1;idx < lastIdx;idx++){
		var elName = form['requiredFields'][idx];
		if (elName == 'strikethruin'){continue}//task361
		if (elName == 'printidin'){continue}//as per paul parks 20200318
		var el = form.elements[elName];
		var dataProv = el.getDataProviderID();
		form[dataProv] = '';
	}
	
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FC415B52-5398-4F36-9468-E9C459D9B44B"}
 * @AllowToRunInFind
 */
function rfClearPreviousEntry(event){
	//if (globals.clientUserAgent.search(/(iPhone|iPad)/i) == -1 && application.getOSName().search(/Mac/i) == -1){
	//	return true;
	//}

	if (!event){return}
	if (application.isInDeveloper()){application.output('firing rfClearPreviousEntry '+event.getElementName())}
	var elName = event.getElementName();
	var form = forms['rf_mobile_view'];
	//form['genericInput'] =	form['genericInput'].toUpperCase();  
	//form['genericInput2'] =	form['genericInput2'].toUpperCase();  
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT && session.dualEntry){
		globals.altInputField = (elName == 'genericin') ?  'genericin2' : 'genericin';
		globals.altInputDataProv = (elName == 'genericin') ?  'genericInput2' : 'genericInput';
		if (0 && form[globals.altInputDataProv] != ''){
			if (globals.altInputField == 'genericin' && form['genericInput2'] == ''){
				globals.altInputField = 'genericin2';
				globals.altInputDataProv = 'genericInput2';
			}
			if (globals.altInputField == 'genericin2' && form['genericInput'] == ''){
				globals.altInputField = 'genericin';;
				globals.altInputDataProv = 'genericInput';
			}
		}
		form[globals.altInputDataProv] = '';
		form.elements[globals.altInputField].requestFocus();
	} else {
		var firstPass = form[globals.altInputDataProv];
		forms['rf_mobile_view'][globals.altInputDataProv] = '';
		globals.altInputField = 'genericin';
		globals.altInputDataProv = 'genericInput';
		forms['rf_mobile_view'].elements['genericin'].requestFocus();//added for smart client restore focus 4/30/2019
		//onDataChangeGeneric('',firstPass,event);
	}
	//form.genericInput = '';
	//form.genericInput2 = '';//20200518 clear prior entry in mobile computer entry
	
}
/**
 * @param inches
 *
 * @properties={typeid:24,uuid:"C5C80758-D971-49B6-A57A-BED59C3784DE"}
 */
function inToMM(inches){
	return inches*25.4;
}
/**
 * @param event
 * @param invBarcode
 *
 * @properties={typeid:24,uuid:"5B79B1B8-753B-40E3-AA4D-54E5F31166D3"}
 */
function getInvUUID(event,invBarcode){
	/** @type {QBSelect<db:/stsservoy/inventory>} */
	var q = databaseManager.createSelect('db:/stsservoy/inventory');
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.serial_number.eq(invBarcode));
	q.result.add(q.columns.inventory_uuid);
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/inventory>} */
		var rec = Q.getRecord(1);
		return rec.inventory_uuid;
	}
	return null;
}
/**
 * @param {String} oldValue
 * @param {String} newValue
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DAA7FE59-BF61-4939-A323-2933E6D5808E"}
 */
function rfCheckBarcodeInRoute(oldValue, bcId,event){
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.where.add(q.columns.id_serial_number.eq(bcId));
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	/** @type {QBJoin<db:/stsservoy/pcmk_instances>} */
	var r = q.joins.add('db:/stsservoy/pcmk_instances');
	r.on.add(r.columns.id_serial_uuid.eq(q.columns.id_serial_number_id));
	//q.on.add(r.columns.id_serial_uuid.eq(q.columns.id_serial_number_id));
	//r.root.result.add(r.columns.piecemark_uuid);
	var s = r.joins.x_pm;
	q.result.add(s.columns.e_route_code_id);
	var Q = databaseManager.getDataSetByQuery(q,1);
	Q.rowIndex = 1;
	if (application.isInDeveloper()){application.output('route_id: ' +Q.e_route_code_id)}
	return Q.e_route_code_id;//globals.l.routeLegs[globals.m.routes[Q.e_route_code_id]];
	//null;
}
/**
 * @param statusCode
 * @param routeCodeOrId
 *
 * @properties={typeid:24,uuid:"10B1039B-0E36-4F47-9D2A-DC6E01C2042E"}
 */
function rfCheckStatusInRoute(statusCode, routeCodeOrId){
	if (routeCodeOrId && routeCodeOrId.toString().length != 36){}//later 
	if (!routeCodeOrId){return true}
	var allowAdditionalCodes = (l.routesAddLegs.indexOf(routeCodeOrId) != -1);
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.where.add(q.columns.status_code.eq(statusCode));
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	var Q = databaseManager.getFoundSet(q);
	Q.loadRecords();
	if (Q.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/status_description>} */
		var rec = Q.getRecord(1);
		if (allowAdditionalCodes && !globals.laborScreenActive){return true}//20190715 acceptable status if route allows additional codes, but NOT in labor screens
		if (globals.l.routeLegs[routeCodeOrId] && 
				globals.l.routeLegs[routeCodeOrId].indexOf(rec.status_description_id.toString()) != -1){return true}
	}
	return false;
	
	
}
/**
 * @properties={typeid:24,uuid:"2DB7000D-365F-4E7B-B14D-3E54AC9D6EC7"}
 */
function rfCollectStationCompletes(){
	var skip = ['10','99'];
	session.stationsComplete = [];
	var idfileId = mob.idfile.idfile_id;
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.idfile_id.eq(idfileId.toString()));
	q.where.add(q.columns.delete_flag.isNull);
	q.sort.add(q.columns.edit_date.asc);
	q.result.add(q.columns.trans_id);
	var Q = databaseManager.getFoundSet(q);
	
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var rec = null; var index = 1; var percentComp = 0;
	while (rec = Q.getRecord(index++)){
		if (rec.delete_flag == 99 || rec.delete_flag == 10){continue}
		percentComp = (!rec.labor_percentage) ? 0 : rec.labor_percentage;
		if (!session.stationsComplete[rec.status_description_id]){session.stationsComplete[rec.status_description_id] = 0}
		if (l.stationsMultiScan.indexOf(rec.status_description_id.toString()) != -1){continue}//another example of a complete station, but isn't complete due to multi-scan
		session.stationsComplete[rec.status_description_id] += percentComp; 
	}
}
/**
 * @properties={typeid:24,uuid:"6F21C310-9E3D-48C5-B580-8DCA0DC41AA4"}
 * Return false if percent doesn't match valid percent inputs
 */
function rfDeterminePercent(){
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.where.add(q.columns.status_code.eq(mob.statusCode));
	q.where.add(q.columns.delete_flag.isNull);
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	var Q = databaseManager.getFoundSet(q);
	/** @type {JSFoundSet<db:/stsservoy/status_description>} */
	var qRec = Q.getRecord(1);
	var stationId = qRec.status_description_id;
	var priorStation = getPriorRoutedStation(stationId);
	var priorStatusPct = (!priorStation) ? 100 : session.stationsComplete[priorStation];
	var currentPercent = (!session.stationsComplete[stationId]) ? 0 : session.stationsComplete[stationId];
	forms['rf_mobile_view'].laborPercentComplete = currentPercent;
	if (mob.percent == 100){mob.percent = 100 - currentPercent}
	var futurePercent = currentPercent*1 + mob.percent*1;
	mob.laborCompleted = (futurePercent == 100);
	if (priorStatusPct < 100 && futurePercent == 100){
		var percentCompare = Math.floor(priorStatusPct*1) +'% ';
		errorDialogMobile(null,765,'genericin',percentCompare);
		return false;				
	}//s765 Current Station Cannot Be More Complete Than Prior Station.
	if (currentPercent == 100){
		errorDialogMobile(null,1130,'genericin','');
		return false;		
	}//show error that percent is already 100 and complete 1130 This Status Code Is Already 100% Complete.
	if (futurePercent > 100){
		errorDialogMobile(null,764,'genericin',futurePercent+'%');
		return false;
	}//show error that percent is over 100 CODE 764 Percentage Total Exceeds 100% Complete
	// if r 0 or 100, set percent to 100, determine if not 100, then set percent to 100-currentPercent
	// if 100 already, then error message Completed
	// if r > 0 and r < 100 then percent is currentPercent plus entered percent or an error
	return true;
}
/**
 * @param currentStationId
 *
 * @properties={typeid:24,uuid:"26B76EA0-4002-4D4E-89E4-8B95688C4198"}
 */
function getPriorRoutedStation(currentStationId){
	if (!mob.routeId){return null}
	var routeList = l.routeLegs[mob.routeId];
	var rtIndex = routeList.indexOf(currentStationId.toString());
	if (rtIndex == 0){return null}
	return routeList[rtIndex-1];
}
/**
 * @param lb
 *
 * @properties={typeid:24,uuid:"9B815A6F-7936-4BAF-96CA-0F03FB0BFBB5"}
 */
function lbToKg(lb){
	 return lb / 2.2046226;
}
/**
 * @param date
 * @param time
 *
 * @properties={typeid:24,uuid:"885EE247-1C80-4663-B1F0-22F62CAE9459"}
 */
function dateAndTimeToDate(date, time){
	if (!date){return null}
	//date = date.toString();
	
	var datum = date;
	if (!time){time = "00:00:00"}
	time = time.toString();
	var timum = time.split(':');
	var date = new Date(date.getFullYear(),date.getMonth()*1,date.getDate(),timum[0]*1,timum[1]*1,timum[2]*1);
	return date;
}
/**
 * @param loadId
 *
 * @properties={typeid:24,uuid:"C2AAAAB2-5131-4C20-B677-6C7DBD3833FF"}
 */
function rfGetLoadStats(loadId){
	//if (1==1){return}
	if (application.isInDeveloper()){}
	application.output('RM inside rfGetLoadStats '+loadId);
	if (!loadId){
		return
	}
	var count = 0;
	var weight = 0;
	var metric = (mob.job.metric == 1);
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.where.add(q.columns.current_load_id.eq(loadId));
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.result.add(q.columns.idfile_id.count,'count');
	var Q = databaseManager.getDataSetByQuery(q,-1);
	if (Q.getMaxRowIndex() > 0){
		Q.rowIndex = 1;
		count = Q.count;
	}
	q.result.clear();
	/** @type {QBJoin<db:/stsservoy/piecemarks>} */
	var r = q.joins.add('db:/stsservoy/piecemarks');
	r.on.add(q.columns.piecemark_id.eq(r.columns.piecemark_id));
	if (metric){
		q.result.add(r.columns.item_weight.sum,'weight')
	} else {
		q.result.add(r.columns.item_weight_lbs.sum,'weight');
	}
	var R = databaseManager.getDataSetByQuery(q,-1);
	if (R.getMaxRowIndex() > 0){
		R.rowIndex = 1;
		weight = R.weight;
	}
	mob.load.weight = Math.floor(R.weight*1+0.5);
	mob.load.ctTotal = count;
	mob.load.pieces = count;
	mobLoadWeight = mob.load.weight;
	mobLoadPieces = mob.load.pieces;
	mobWeightUnits = (metric) ? 'kgs' : "lbs";
	mobLengthUnits = (metric) ? "mm" : "ins";
	if (application.isInDeveloper()){}
	application.output('RM load '+loadId+' count:'+count+' weight: '+weight);
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var n = databaseManager.createSelect('db:/stsservoy/loads');
	n.where.add(n.columns.tenant_uuid.eq(session.tenant_uuid));
	n.where.add(n.columns.load_id.eq(loadId.toString()));
	n.result.add(n.columns.load_id);
	var N = databaseManager.getFoundSet(n);
	if (N.getSize() > 0){
		/** @type {JSRecord<db:/stsservoy/loads>} */
		var rec = N.getRecord(1);
		rec.total_weight = weight;
		rec.shipped_weight = weight;
		databaseManager.saveData(rec);
	}
	application.output('leave rfGetLoadStats');
}
/**
 * @param loadId
 *
 * @properties={typeid:24,uuid:"7B0CE3AA-C51F-4338-A501-52F300769248"}
 */
function rfGetLoadNumber(loadId){
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var q = databaseManager.createSelect('db:/stsservoy/loads');
	q.where.add(q.columns.load_id.eq(loadId));
	q.result.add(q.columns.load_number);
	var loadNum = '';
	var Q = databaseManager.getDataSetByQuery(q,-1);
	if (Q.getMaxRowIndex() > 0){
		Q.rowIndex = 1;
		loadNum = 'Load# '+Q.load_number;
	}
		return loadNum;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"52B2EC5B-82F3-4659-A18B-19B2F97E3C05"}
 */
function onActionSelectHighlighted(event){
	var formName = event.getFormName();
	var formTable = formName+"_table";
	/** @type {JSFoundset} */
	var fs = forms[formTable].foundset;
	var highlighted = fs.getSelectedIndexes();
	highlighted.sort();
	for (var idx = 0;idx < highlighted.length;idx++){
		var rec = fs.getRecord(highlighted[idx]);
		rec.selection = 1;
	}
	databaseManager.saveData(fs);
}
/**
 * @param {Number} labelCount
 *
 * @properties={typeid:24,uuid:"BF346974-2317-4123-AC6C-04AA328BFC8F"}
 */
function printedLabels(labelCount){
	mob.printedLabels = mob.printedLabels*1 + labelCount*1;
}
/**
 * @properties={typeid:24,uuid:"26E8D270-7548-4D2E-B5E4-6E01A8598AE3"}
 */
function printedLabelsShowError(event){
	if (mob.printedLabels ==  0){
		if (showPrintQueueEffort){
			globals.errorDialogMobile(event,'sts.txt.labels.sent.to.printer.zero','genericin','');;
			application.updateUI();
		}
		return;
	}
	globals.errorDialogMobile(event,'sts.txt.labels.sent.to.printer','genericin',mob.printedLabels);
	if (application.isInDeveloper()){application.output('printed labels '+mob.printedLabels)}
	mob.printedLabels = 0;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"14767E06-BEC1-4A49-B635-C1FA7738843D"}
 */
function rfInventoryMove(event){
	var rmSerial = forms['rf_mobile_view'].asnNumber;
	var division = globals.session.association;
	var location = forms['rf_mobile_view'].statusLocation;
	var form = forms['rf_mobile_view'];
	var prevResponse = scopes.fs.getInventorySerial(event,rmSerial);
	if (prevResponse && prevResponse.error){
		errorDialogMobile(event,1220,'genericin',prevResponse.error);
		form.asnNumber = '';
		return;
	}
	var prevLoc = prevResponse.location2;
	/** if (scopes.prefs.promptFabShop == 0){//copied... 20190201 select where to place raw received if prefs indicate
		if (scopes.prefs.lFsFlipPrimSecWhenShop == 0){
			location2 = session.association;						
			location1 = forms['rf_mobile_view'].statusLocation;//shop first, location second
			prevLoc = prevResponse.location;
		}
	} */

	//application.output('location1 is '+location1+ ' location2 is '+location2+' for serial '+rmSerial);
	var response = scopes.fs.fabSuiteInventoryMove(event,rmSerial,division,location);
	if (response.error){
		errorDialogMobile(event,1220,'genericin',response.error);
		
		return;
	}
	var response2 = scopes.jobs.invMoveUpdate(event,rmSerial,1,forms['rf_mobile_view'].statusLocation);
	if (response2.error){
		errorDialogMobile(event,1281,'genericin');
	}
	form.invGrade = response.grade;
	form.invMaterial = response.model_part;
	form.lastQty = response.quantity;
	form.heat = response.heat;
	//mobPreviousLocation = response.
	form.jobNumber = response.job_number;
	form.poNumber = response.po_number;
	if (response.is_metric){
		mobItemLength = response.item_length;
		mobItemWeight = response.item_weight;
		form.width = (response.item_width) ? response.item_width : '';
	} else {
		mobItemLength = response.item_length_char;
		mobItemWeight = response.item_weight_lbs;
		form.widthChar = (response.item_width || response.item_width != 0) ? response.item_width_char : '';
	}
	mobPreviousLocation = prevLoc;
	form.association = session.association;
	//application.output('response '+response);
}
/**
 * @properties={typeid:24,uuid:"FA75A97B-40C0-470A-AEDE-5D0DBFD8C6A1"}
 */
function rfF6ReprintInvLabel(event){
	if (rfErrorVisible('rf_mobile_view')){
		rfErrorHide(event);
		return;
	}
	session.functionName = 'F6RePrintInvLabel';
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var form = forms['rf_mobile_view'];
	form.functionKeyEntered = true;
	if (!form.asnNumber || (!form.statusLocation && session.program != i18n.getI18NMessage('sts.mobile.inventory.status'))){return}
	var inProgress = (thisFunction == flagFunction); // toggle function
	//flagFunction = (inProgress) ? null : thisFunction;//no need to prevent using this function key again

	var rmSerial = form.asnNumber;
	/** @type {QBSelect<db:/stsservoy/inventory>} */
	var q = databaseManager.createSelect('db:/stsservoy/inventory');
	q.where.add(q.columns.serial_number.eq(rmSerial));
	q.where.add(q.columns.model_part.eq(form.invMaterial));
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.result.add(q.columns.inventory_uuid);
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() == 0){return}
	session.tempFS = Q;
	/** @type {JSFoundSet<db:/stsservoy/inventory>} */
	var rec = Q.getRecord(1);
	var recUuids = [];
	recUuids.push(rec.inventory_uuid);
	//print rawUUID
	//application.output('printing raw uuid '+rawUUID)
	scopes.printer.onActionPrintRMLabels(event,recUuids);
	globals.printedLabelsShowError(event);
	rfErrorHideAuto(event);
}
/**
 * @properties={typeid:24,uuid:"C5D8AC29-7F3B-45FE-A537-DB23EFEB08CF"}
 */
function getRandomG(){
	return application.getUUID().toString().split("-")[4];
}
/**
 * @properties={typeid:24,uuid:"681758DF-5352-454E-9A9D-4BD37971E44F"}
 * @param {String} formName 
 * @param {String} element
 * @param {Boolean} visible
 * @param {Boolean} enabled
 * big note on address file from fs fsresCompanyData
 */
function permissionsCache(formName, element,visible,enabled){
	if (!globals.permissions[formName]){globals.permissions[formName] = []}
	if (!globals.permissions[formName][element]){globals.permissions[formName][element] = []}
	/** @type {Array} */
	var perms = globals.permissions;
	perms[formName][element] = {visible : (visible == 1), enabled : (enabled == 1)};
}
/**
 * @param {JSEvent} event
 * @param {String} altForm
 * returns null or {visible:boolean,enabled:boolean}
 * execute after controller.enabled = true
 *
 * @properties={typeid:24,uuid:"DEE398EC-7A8B-41F7-A79E-3A0C24DA27F5"}
 */
function permissionsCacheHit(event,altForm){
	//if (1==1){return}
	if (!event && !altForm){return}
	if (!altForm){
		var formNameOrig = event.getFormName();
	} else {
		formNameOrig = altForm;
	}
	var instance = getInstanceForm(event);
	var formName = formNameOrig.replace(instance,'');
	if (!globals.permissions[formName]){return null}
	var perms = globals.permissions[formName];
	for (var el in perms){
		var setting = perms[el];
		forms[formNameOrig].elements[el].enabled = setting.enabled;
	}
}
/**
*
 * @properties={typeid:24,uuid:"E1A3E2A6-F01B-4DF2-8FAF-83441D655BD9"}
 */
function rfCheckUserCanProcess(event){
	//var loginAssoc = globals.session.association; //login association name
	var idAssoc = globals.mob.station; //current Association Name for scanned id
	var f2Assoc = forms['rf_mobile_view'].association;
	var userCanDo = (f2Assoc == idAssoc) || 
			(globals.session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.status')] ||
			globals.session.program == mobileWindows[i18n.getI18NMessage('sts.mobile.find.piece.marks')]);		
	if (!userCanDo){
		var userMissed = i18n.getI18NMessage('sts.label.id.current')+ ' "'+idAssoc+'" '+i18n.getI18NMessage('sts.label.division')+' "'+f2Assoc+'"';
		globals.errorDialogMobile(event,1283,'genericin',userMissed);
	}
	return userCanDo;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"917A991B-EDA2-40FD-9F75-E37638E1B221"}
 * @AllowToRunInFind
 */
function rfErrorHideAuto(event){
	//if (globals.clientUserAgent.search(/(Linux|iPhone|iPad|Mac)/i) != -1){return}
	//if (globals.clientUserAgent.search(/(Android|Linux|iPhone|iPad|Mac)/i) != -1){//reset error window location for web client, there is not a good solution to autoclose the error window
	if (session.errorShow && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//reset error window location for web client
		plugins.WebClientUtils.executeClientSideJS('playSoundX(null);');
		return;
	}

	if (session.errorShow){ 
		application.updateUI();

		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			application.updateUI(55);
		}

		var count = 1;
		var timeS = new Date(); var start = timeS.getTime() + 3000; var endS = 0;
		while (start > endS){
			var temp = new Date();
			endS = temp.getTime();
			count++;
			//if (application.isInDeveloper()){application.output('while loop count '+count++)}
			//if (count > 900){break}
		 }		

		rfErrorHide(event);
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"55D6076A-E73B-469C-8F04-E36ACC74B6D3"}
 */
function createPdfOfLabelFieldNames(event){
	var temp = scopes.prefs.temppath;//scopes.prefs.reportpath;
	var tempDir = plugins.file.convertToJSFile(temp);	
	if (!tempDir.exists()){
		if (application.isInDeveloper()){application.output('temp dir not found')}
		temp = '\\windows\\temp';
		var drives = ['c','d','e','f','g'];
		var tempAlt = drives[dIndex]+':'+temp;
		var dIndex = 0;
		for (var index = 0;index < drives.length;index++){
			var tempDir = plugins.file.convertToJSFile(tempAlt);
			tempAlt = drives[dIndex]+':'+temp;
			tempDir = plugins.file.convertToJSFile(tempAlt);
		}
	} else {
		tempAlt = temp;
	}
	var fileName = tempAlt+'\\LabelFields.pdf';
	var context = {}
	context.start = new Date().getTime();
	context.anotherNumber = 1529334667859;

	var idFields = scopes.printer.getBTFieldData('P');
	var rawFields = scopes.printer.getBTFieldData('R');
	var fields = rawFields;
	plugins.VelocityReport;
	plugins.VelocityReport.addDefaultReportParameter('PRINTORIENTATION','LANDSCAPE');
	context.orientation = 'landscape';
	context.tableOne = {columnOrder: i18n.getI18NMessage('sts.report.data.data.column'),
		fieldName : i18n.getI18NMessage('sts.report.data.field.name'),
		dataType : i18n.getI18NMessage('sts.report.data.type'),
		dataWidth : i18n.getI18NMessage('sts.report.data.width'),
		dataField : i18n.getI18NMessage('sts.report.data.db.field.name'),
		dataTable : i18n.getI18NMessage('sts.report.data.table'),
		dataDecimal : i18n.getI18NMessage('sts.report.data.decimal')
	};
	context.line1raw = i18n.getI18NMessage('sts.report.txt.print.raw.label');
	context.line1id = i18n.getI18NMessage('sts.report.txt.print.id.label');
	context.line2 = i18n.getI18NMessage('sts.report.txt.line2');
	context.SSS = [];
	context.RRR = [];
	for (var idx = 0;idx < fields.length;idx++){
		var newFld = {};
		newFld.fieldName = fields[idx].field_name;
		if (!fields[idx].dbsize){fields[idx].dbsize = '0'}
		var fieldSpec = fields[idx].dbsize.split('.');
		var decimal = '';
		if (fieldSpec.length > 1){decimal = ' '+Math.floor(fieldSpec[1])}
		newFld.dbField = (fields[idx].db_field == 'UNUSED') ? ' ' : fields[idx].db_field.split('.')[1];
		newFld.dbDecimal = decimal;
		if (newFld.dbDecimal.toString() == 'NaN'){newFld.dbDecimal = ''} 
		newFld.dbSize = (fields[idx].db_field == 'UNUSED') ? ' ' : fields[idx].dbsize.split('.')[0];
		newFld.dbTable = fields[idx].db_field.split('.')[0];
		newFld.dbName = fields[idx].field_name;
		newFld.dbOrder = ' '+Math.floor(fields[idx].field_order);
		newFld.dbType = fields[idx].field_type;
		newFld.dblabelType = fields[idx].label_field_type;
		newFld.dblabelSize = fields[idx].size;
		context.SSS.push(newFld);
	}
	
	fields = idFields;
	for (idx = 0;idx < fields.length;idx++){
		newFld = {};
		newFld.fieldName = fields[idx].field_name;
		if (!fields[idx].dbsize){fields[idx].dbsize = '0'}
		fieldSpec = fields[idx].dbsize.split('.');
		decimal = '';
		if (fieldSpec.length > 1){decimal = ' '+Math.floor(fieldSpec[1])}
		newFld.dbField = (fields[idx].db_field == 'UNUSED') ? ' ' : fields[idx].db_field.split('.')[1];
		newFld.dbDecimal = decimal;
		if (newFld.dbDecimal.toString() == 'NaN'){newFld.dbDecimal = ''} 
		newFld.dbSize = (fields[idx].db_field == 'UNUSED') ? ' ' : fields[idx].dbsize.split('.')[0];
		newFld.dbTable = fields[idx].db_field.split('.')[0];
		newFld.dbName = fields[idx].field_name;
		newFld.dbOrder = ' '+Math.floor(fields[idx].field_order);
		newFld.dbType = fields[idx].field_type;
		newFld.dblabelType = fields[idx].label_field_type;
		newFld.dblabelSize = fields[idx].size;
		context.RRR.push(newFld);
	}

	if (application.isInDeveloper()){application.output('temp file '+fileName)}

	//if (1){return}
	scopes.jobs.warningsMessage('1256',true);
	var text_data = '';
	
	var endTime = new Date().getTime();
	context.micros = endTime - context.start;
	if (application.isInDeveloper()){application.output('ms for report: '+context.micros)}
	scopes.jobs.warningsMessage('1256',true);
	var wDir = plugins.VelocityReport.getReportFolder();
	application.output('Velocity Report Folder '+wDir);
	var pdf = plugins.VelocityReport.getPDFReport('labelSheet.html',context);
	//var file = plugins.file.showFileSaveDialog();
	scopes.jobs.warningsMessage('1256',true);
	if (pdf && pdf.length > 0){
		if (plugins.file.writeFile(fileName,pdf)){
			//application.output('file done');
			endTime = new Date().getTime();
			var totTime = endTime - context.start;
			scopes.jobs.warningsX();
			plugins.dialogs.showErrorDialog('1284',i18n.getI18NMessage('1284',[fileName])+' '+totTime+'ms')
			application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', fileName]);//open pdf viewer
		}
	}

}
/**
 * @param {JSEvent} event
 * @param {String} serialNumber
 * @param {Boolean} doNotReportError
 *
 * @properties={typeid:24,uuid:"ED878730-78E5-4C39-A090-6B05C6DFF6AB"}
 * 			is_metric : isMetric,
			model_part : validShape+' '+validDims,
			grade : validGrade,
		    heat : validHeat,
		    quantity : validQuant,
		    item_width : validWidth,
		    item_width_in : validWidthIn,
			item_weight : validWeight,
			item_width_char : validWidthChar,
			item_weight_lbs : validWeightLbs,
			item_length : validLength,
			item_length_char : validLengthChar,
			item_length_in : validLengthIn,
			location : validLoc,
			location2 :validLoc2,
			bill_of_lading_in : validBoL,
			po_number : validPoNumber,
			job_number : validReserve,
			coo : validCoO,
			error : ''
 */
function rfInventoryStatus(event,serialNumber,doNotReportError){//STILL NEED NON-FS LOOKUP
	var inv = scopes.fs.getInventorySerial(event,serialNumber);
	var form = forms['rf_mobile_view'];
	if (!inv.error){
		form.jobNumber = inv.job_number;
		var droploc = '';
		var loc1 = inv.location;
		var loc2 = inv.location2;
		droploc = loc2;
		if (scopes.prefs.lFsFlipPrimSecWhenShop*1 == 1){
			var tmp = loc1;
			loc1 = loc2;
			loc2 = (scopes.prefs.lFsNoPushSecLoc*1 == 0) ? tmp : '';
		}
		form.location1 = loc1;
		form.location2 = loc2;
		var locDL = scopes.fs.locationNormalize(event,loc1,loc2);
		form.location1 = locDL.location;
		form.division = locDL.division;
		if (session.program == i18n.getI18NMessage('sts.mobile.inventory.tfs')){
			form.tfsJob = inv.job_number;
			form.tfsSequence = '';
			form.dropJob = inv.job_number;
			form.dropLocation = droploc;
		}
		inv = rfInventoryFromFS(event,inv);
		if (session.program == i18n.getI18NMessage('sts.mobile.inventory.asn.receiving')){
			form.invLocation = locDL.location;
			form.association = locDL.division;
		}
		var metric = false;
		if (inv && inv.isMetric){
			metric = (inv.isMetric);
		} else if (inv && inv.job_uuid){
			var jobInfo = scopes.jobs.getJobIdInfo(inv.job_uuid);
			metric = (jobInfo && jobInfo.job_metric);
		}
		var rmSerial = forms['rf_mobile_view'].asnNumber;
		form.invMaterial = inv.model_part;
		form.lastQty = inv.quantity;
		if (metric){
			globals.mobWeightUnits = i18n.getI18NMessage('sts.txt.weight.metric');
			globals.mobLengthUnits = i18n.getI18NMessage('sts.txt.length.metric');
			globals.mobItemWeight = inv.item_weight;
			form.itemWidth = inv.item_width;
			globals.mobItemLength = inv.item_length;
			///form.itemWeight = inv.item_weight;
		} else {
			globals.mobLengthUnits = i18n.getI18NMessage('sts.txt.length.imperial');
			globals.mobWeightUnits = i18n.getI18NMessage('sts.txt.weight.imperial');
			globals.mobItemWeight = inv.item_weight_lbs;
			form.itemWidth = inv.item_width_char;			
			globals.mobItemLength = inv.item_length_char;
			//application.output('SSSSSSSSSSSSSSSSSSSSSSSSS '+globals.mobItemLength)
			//form.itemWeight = inv.item_weight_lbs;
		}
		form.invGrade = inv.grade;//invgrade;
		form.heat = inv.heat;
		form.poNumber = inv.po_number;
		if (!form.division){
			if (form.jobNumber){
				var jobInfo = scopes.jobs.getJobIdInfo(form.jobNumber);
				form.division = globals.m.assocs[jobInfo.job_assoc];
			}
				
		}
	} else {
		if (!doNotReportError){
			errorDialogMobile(event,1220,'genericin',inv.error+ ' '+serialNumber);
			form.asnNumber = '';
		}
		return false;
	}
	return true;
}
/**
 * @param event
 * @param fsRec
 *
 * @properties={typeid:24,uuid:"B4AD3A99-D769-49A6-9C53-F69EBBFEF857"}
 */
function rfInventoryFromFS(event,fsRec){
	/** @type {QBSelect<db:/stsservoy/inventory>} */
	var q = databaseManager.createSelect('db:/stsservoy/inventory');
	q.result.add(q.columns.inventory_uuid);
	q.where.add(q.columns.serial_number.eq(fsRec.serial_number));
	q.where.add(q.columns.model_part.eq(fsRec.model_part));
	var Q = databaseManager.getFoundSet(q);
	if (!fsRec.serial_number){
		if (Q.getSize() > 0){
			return Q.getRecord(1);
		} else {
			errorDialogMobile(event,1015,null,null);
			return {error : ''}
		}
	}
	var jobInfo = (fsRec.job_number) ? scopes.jobs.getJobIdInfo(fsRec.job_number) : null;
	if (Q.getSize() > 0){
		var rec = Q.getRecord(1);
	} else {
		var idx = Q.newRecord();
		rec = Q.getRecord(idx);
		rec.serial_number = fsRec.serial_number;
		rec.model_part = fsRec.model_part;
		rec.tenant_uuid = globals.session.tenant_uuid;
		rec.employee_uuid = session.employeeId.toString();
		rec.association_uuid = session.associationId.toString();
		rec.edit_date = new Date();
		rec.disposition = i18n.getI18NMessage('sts.interface.fabsuite');
		rec.logic_flag = 0;
		
	}
	rec.quantity = fsRec.quantity;
	rec.location = fsRec.locationsts;
	//rec.location2 = fsRec.location2;
	//if (!rec.location){rec.location = fsRec.location}
	rec.heat = fsRec.heat;
	rec.grade = fsRec.grade;
	rec.item_length = fsRec.item_length;
	rec.item_length_in = fsRec.item_length_in;
	rec.item_length_char = fsRec.item_length_char;
	rec.item_weight = fsRec.item_weight;
	rec.item_weight_lbs = fsRec.item_weight_lbs;
	rec.item_width = fsRec.item_width;
	rec.item_width_in = fsRec.item_width_in;
	rec.item_width_char = fsRec.item_width_char;
	rec.job_number = fsRec.job_number;
	rec.po_number = fsRec.po_number;
	if (jobInfo && jobInfo.job_id){
		rec.job_uuid = jobInfo.job_id;
	}
	databaseManager.saveData(rec);
	return rec;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"1E6B090D-859D-406F-B4C3-89750462B999"}
 */
function rfInventoryAudit(event){
	var form = forms['rf_mobile_view'];
	//var iaSerial = form.auditBarcode;
	var invSerial = form.asnNumber;
	//var quantity = form.quantity;
	//var bundled = form.bundled;
	//if (invSerial) {form.bundled = i18n.getI18NMessage('sts.btn.yes').toUpperCase()}// : i18n.getI18NMessage('sts.btn.no');// as per PP , leave bundled as to them
}
/**
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"9C672E51-A986-498B-B49F-5E5600A8E701"}
 */
function populateIaResult(event){
	if (application.isInDeveloper()){application.output('iaResult');for (var i in iaResult){application.output(i+':'+iaResult[i])}}
	var form = forms['rf_mobile_view'];
	var aiResult = form.aiResult;
	form.invMaterial = iaResult.model_part;
	form.invGrade = iaResult.grade;
	scopes.globals.mobItemLength = iaResult.length_char;
	scopes.globals.mobLengthUnits = 'I';
	form.heat = iaResult.heat;
	form.location1 = iaResult.location1;
	form.location2 = iaResult.location2;
	form.poNumber = iaResult.po_number;
	form.billOfLading = iaResult.bill_of_lading;
	form.invOrdered = iaResult.audit_quantity;
	form.invRemains = iaResult.audit_quantity_remaining;
	form.invTotal = iaResult.audit_quantity;
	
	form.asnNumber = '';
	form.quantity = '';
	if (!form.bundled){form.bundled = i18n.getI18NMessage('sts.btn.no').toUpperCase();}//initial setting NO, PP 20200325
	//form.bundled = '';
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3E67B4DC-EF91-4084-843C-046AC119CB9D"}
 */
function processGoEvent(event){
	var response = globals.DIALOGS.showQuestionDialog(
	i18n.getI18NMessage('sts.txt.process.go.event'),
	i18n.getI18NMessage('sts.txt.process.go.event'),
	i18n.getI18NMessage('sts.btn.no'),
	i18n.getI18NMessage('sts.btn.yes'));

	if (response == i18n.getI18NMessage('sts.btn.yes')){
		var entry = event.getElementName();
		var dataProv = forms['rf_mobile_view'].elements[entry].getDataProviderID();
		forms['rf_mobile_view'][dataProv] = 'GO';
		onDataChangeGeneric('','GO',event);//will not process if entry not set correctly
		return true;
	}
	return false;
}
/**
 * @param event
 * @param jobNumber
 *
 * @properties={typeid:24,uuid:"5748D08F-FA8D-4C66-A754-A34CF2289F12"}
 */
function getJobDestinationAddressesVL(event,jobNumber){
	var addressArray = [];
	var jobInfo = globals.getJobIdInfo(jobNumber);
	mob.job.Id = jobInfo.job_id;
	//var custId = jobInfo.job_rec.customer_id;//now grab addresses for this job
	var dataset = globals.getCustomerAddressNames();
	application.output('dataset '+dataset);
	var typeNames = dataset.getColumnAsArray(1);
	var typeIds = dataset.getColumnAsArray(2);
	application.setValueListItems('stsvl_destinations',typeNames,typeIds)
	null;
	//return addressArray;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param loadId
 *
 * @properties={typeid:24,uuid:"B9D4B3E9-98ED-4A07-8094-08A7B8DA876E"}
 */
function rfIsInterimLoadNumber(loadId){
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var q = databaseManager.createSelect('db:/stsservoy/loads');
	q.where.add(q.columns.load_id.eq(loadId));
	q.result.add(q.columns.load_number);
	var loadNum = '';
	var Q = databaseManager.getDataSetByQuery(q,-1);
	if (Q.getMaxRowIndex() > 0){
		Q.rowIndex = 1;
		loadNum = 'Load# '+Q.load_number;
	}
		return loadNum;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param loadId
 *
 * @properties={typeid:24,uuid:"A6805BC0-CE44-44BB-96BB-CACEC6786C17"}
 */
function getLoadRecord(event,loadId){
	/** @type {QBSelect<db:/stsservoy/loads>} */
	var q = databaseManager.createSelect('db:/stsservoy/loads');
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	q.where.add(q.columns.load_id.eq(loadId.toString()));
	var Q = databaseManager.getFoundSet(q);
	/** @type {JSFoundSet<db:/stsservoy/loads>} */
	var rec = null;
	if (Q.getSize() == 1){
		rec = Q.getRecord(1);
	}
	return rec;
}
/**
 * @param event
 * @param {String} prodBarcode
 *
 * @properties={typeid:24,uuid:"A3B58995-C176-463D-A42A-A89F078714C2"}
 */
function checkBarcodeWithJob(event,prodBarcode){
	var form = forms['rf_mobile_view'];
	if (form.shownFields.indexOf('jobnumberin') == -1){return true}
	var jobInfo = scopes.jobs.getJobIdInfo(form.jobNumber);
	if (!jobInfo){return true}
	var jobId = jobInfo.job_id;
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.where.add(q.columns.job_uuid.eq(jobId.toString()));
	q.where.add(q.columns.id_serial_number.eq(prodBarcode));
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid));
	var Q = databaseManager.getFoundSet(q);
	return (Q.getSize() != 0);
}
/**
 * @AllowToRunInFind
 * 
 * @param {JSEvent} event
 * @param fldName
 *
 * @properties={typeid:24,uuid:"C92A0EFD-9AB1-4B56-82CB-4C8AAF9BAC68"}
 */
function checkRequiredComplete(event,fldName){
	var form = forms['rf_mobile_view'];
	/** @type {Array} */
	var reqFlds = form['requiredFields'];
	var idxId = reqFlds.indexOf('currentidin');
	if (fldName){idxId = reqFlds.indexOf(fldName)}
	for (var idx = 0;idx < idxId;idx++){
		/** @type {String} */
		var fld = reqFlds[idx];
		if (fld == '' || fld.search('genericin') == 0){continue}//get rid of cleared required codes
		var fldProv = form.elements[fld].getDataProviderID();
		if (form[fldProv] == '' && flagFunction == null){//skip trailer fields
			var placeText = i18n.getI18NMessage(form.elements[fld].placeholderText);
			var msg = placeText+ ' '+i18n.getI18NMessage('sts.txt.missing.entry');
			errorDialogMobile(event,msg,'genericin','');
			//rfErrorShow(msg);
			return false;
		}
	}
	return true;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B8FF772A-47A0-4520-9211-4DE43C6FDCEF"}
 */
function showYesNoDialog(event){
	var rfWin = forms['rf_mobile_view'].controller.getWindow();
	var win = application.createWindow('Question',JSWindow.DIALOG,rfWin);
	win.title = 'Question';
	rfYesNoDialog.win_question = win;
	win.show('yes_no_dialog');
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"2A6CB630-FDAC-442D-A114-BC7700620CCF"}
 */
function showEntryDialog(event){
	var rfWin = forms['rf_mobile_view'].controller.getWindow();
	var win = application.createWindow('Entry',JSWindow.DIALOG,rfWin);
	win.title = 'Entry';
	rfYesNoDialog.win_entry = win;
	win.show('entry_dialog');
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"9669D915-D54C-495D-82C9-49E143B9E3B2"}
 */
function rfInterimDests(event){
	var dests = globals.getDestinationList(event);
	globals.rfYesNoDialog.destinations = dests;
	var destStr = i18n.getI18NMessage('sts.txt.interim.destination.set');
	for (var idx = 0;idx < dests.length;idx++){
		var nextDestNum = idx + 1;
		destStr += '\n    '+nextDestNum+' - '+dests[idx];
	}
	for (idx = 18;idx < 6;idx++){
		destStr += '\n    '+idx+' - '+'TEST';
	}
	globals.rfYesNoDialog.text = destStr;
	globals.rfYesNoDialogText = globals.rfYesNoDialog.text;

}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"38490F69-8309-49C6-9545-97828A1FB289"}
 */
function clearDialogData(event){
	var s = globals.rfYesNoDialog;
	s.destination = '';
	s.destinationIdx = -1;
	s.destinations = [];
	s.interim_load = false;
	s.load_number = '';
	s.win = null;
	s.win_entry = null;
	s.win_question = null;
	s.to_be_returned = false;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"91ED757A-48CD-4CF4-B6F8-19F7F808FD37"}
 */
function rfLoadNumberCheckIOS(event){
	var s = globals.rfYesNoDialog;
	var form = forms['rf_mobile_view'];
	
	if (s.load_number){
		if (scopes.prefs.lFabsuiteInstalled && session.jobIsFabSuite){
			if (s.interim_load){
				var fsLoadNum = scopes.fs.checkFSLoad(s.load_number,s.destination,s.to_be_returned,true);
			} else {
				fsLoadNum = scopes.fs.checkFSLoad(s.load_number,'','',true);
			}
			if (fsLoadNum != null){
				form['loadNumber'] = '';
				errorDialogMobile(event,1024,'genericin',s.load_number);
				return false;
			}
		}
	}
	var rec = loadCreateValid(s.load_number,s.interim_load);
	var foundRec = rec;
	session.loadId = rec.load_id;//20181003
	mob.load.currentId = session.loadId;
	session.interim = (foundRec.interim_load == 1); 
	if (!foundRec){
		//forms['rf_mobile_view'].loadNumber = session.loadNextNumber;
		//forms['rf_mobile_view'].loadNumber = forms['rf_mobile_view'].loadNumber.split('.')[0];
	} else {
		form.loadNumber = s.load_number;
	}
}
/**
 * @param {JSEvent} event
 * @param newValue
 *
 * @properties={typeid:24,uuid:"73B60B46-EE40-41AD-8B12-05330784A854"}
 * @AllowToRunInFind
 */
function allowRandomRawBarcode(event,newValue){
	//if (newValue.match(/^RM[0-9]{5,19}$/)){return false}
	var form = forms[event.getFormName()];
	if (session.program == i18n.getI18NMessage('sts.mobile.inventory.asn.receiving') &&
			form.stockLocation != '' &&
			!newValue.match(/^C*{0,10}$/)){//exclude any inputs which may match a location entry AFTER a location is filled in NUCOR (RM) ASN BC
		return true;
	}	
	if (scopes.prefs.lFsAllowNonSerial && //this should be boolean in prefs
			(form['shownFields'].indexOf('asnin') != -1)){// && // only applies when needing a Raw Material ID scan
			
				
		if (session.program == i18n.getI18NMessage('sts.mobile.inventory.audit')){//is there a raw material barcode entered? 20200225 as per paul movie of this date
			if (newValue.search(/^(BY)|(BN)/) != 0){//bundle yes/no entered
				if (!newValue.match(/IA[0-9]+/)){//assumes Internal Audit barcodes are 12 characters in FS
					if (!newValue.match(/^Q[0-9]+/)){//check for Quantity input
						if (newValue.length <= 40){//!newValue.match(/[0-9A-Z]+/)){//only permit raw material barcodes that ARE alphanumeric
							//okay, so this MIGHT be a raw material barcode
							if (!globals.rfInventoryStatus(event,newValue,true)){
								return true;
							}
						}
					}
				}
			}
		}
		if (session.program == i18n.getI18NMessage('sts.mobile.inventory.audit.sweep')){//is there a raw material barcode entered? 20200225 as per paul movie of this date
			if (newValue.length <= 40){//!newValue.match(/[0-9A-Z]+/)){//only permit raw material barcodes that ARE alphanumeric
				//okay, so this MIGHT be a raw material barcode
				if (globals.rfInventoryStatus(event,newValue,true)){
					return true;
				}
			}
		}
		if (session.program == i18n.getI18NMessage('sts.mobile.inventory.move') ||
				session.program == i18n.getI18NMessage('sts.mobile.inventory.tfs')){
			if (newValue.length <= 40){//!newValue.match(/[0-9A-Z]+/)){//only permit raw material barcodes that ARE alphanumeric
				//okay, so this MIGHT be a raw material barcode
				if (globals.rfInventoryStatus(event,newValue,true)){
					return true;
				}
			}
		}
		
		
		if (session.program == i18n.getI18NMessage('sts.mobile.inventory.status')){
			if (newValue.length <= 40){//!newValue.match(/[0-9A-Z]+/)){//only permit raw material barcodes that ARE alphanumeric
				//okay, so this MIGHT be a raw material barcode
				if (globals.rfInventoryStatus(event,newValue,true)){
					return true;
				}
			}
		}

		if (session.program == i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')){
			if (!newValue.match(/(^G$|^GO$)/) && form.statusCode && form.statusLocation ){
				if (!newValue.match(/^CL[0-9]{10}$/)){
					if (newValue.length <= 40){//!newValue.match(/[0-9A-Z]+/)){//only permit raw material barcodes that ARE alphanumeric
						//okay, so this MIGHT be a raw material barcode
						if (globals.rfInventoryStatus(event,newValue,true)){
							return true;
						}
					}
				}
			}
		}
	}
	
	return false;
}
/**
 * @param event
 * @param rmSerial
 *
 * @properties={typeid:24,uuid:"092AE97B-2F44-4356-A6E9-86C35DD9BDA3"}
 */
function syncFSSTSInventory(event,rmSerial){
	var fsInv = scopes.fs.getInventorySerial(event,rmSerial);
	if (fsInv.error){return false;}
	stsInv = rfInventoryFromFS(event,fsInv);
	return true;
}
/**
 * @param event
 * @param message
 *
 * @properties={typeid:24,uuid:"D68438AE-86D9-4A03-85D9-1099C536EA0F"}
 */
function queryMobileShow(event,message){
	var form = forms['rf_mobile_view'];
	queryMessageMobile = message;
	form.elements['queryWindow'].visible = true;
}
/**
 * @param event
 * @param queryAnswer
 *
 * @properties={typeid:24,uuid:"E78FE143-15C9-4BD1-97CA-7FE5DFA21CD0"}
 */
function queryResponseHandler(event,queryAnswer){
	var form = forms['rf_mobile_view'];
	if (session.program == i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')){
		if (queryAnswer == 'YES'){
			form.showPrintQueueEffort = true;
			form['labelPrintType'] = 'piecemark';
			scopes.jobs.printCutListLabels(event);//ask before printing, but need Raw Material Label for the heat number
			globals.printedLabelsShowError(event);
		}
	}
	//Close Query Window
	form.elements['queryWindow'].visible = false;
	queryMessageMobile = '';
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"F1B1F76C-BEA8-4F7C-AD06-B9569FB92D5F"}
 */
function rfF6ReprintIdLabel(event){
	if (rfErrorVisible('rf_mobile_view')){
		rfErrorHide(event);
		return;
	}
	session.functionName = 'F6RePrintIdLabel';
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var form = forms['rf_mobile_view'];
	form.functionKeyEntered = true;
	if (!form.currentID){return}
	var inProgress = (thisFunction == flagFunction); // toggle function
	//flagFunction = (inProgress) ? null : thisFunction;//no need to prevent using this function key again

	showPrintQueueEffort = true;
	form['labelPrintType'] = 'piecemark';
	session.rawCutPiecemarks[mobRepIdfileId] = form.currentID;
	scopes.jobs.printSingleLabel(event,mob.job.Id,mob.piecemark.piecemark_id,mob.idfile.idfile_id);
	globals.printedLabelsShowError(event);
	rfErrorHideAuto(event);
}
/**
 * @param {JSEvent} event
 * @param {String} isNumber
 *
 * @properties={typeid:24,uuid:"4AA7A69C-D202-42F4-8B5D-158F24B748F7"}
 */
function rfGetInventorySweepInfo(event,isNumber){
	var form = forms['rf_mobile_view'];
	if (!isNumber.match(/^IS[0-9]+$/)){
		errorDialogMobile(event,1292,'genericin',null);
		form.sweepBarcode = '';
		return;
	}
	form.sweepBarcode = isNumber;
	var isInfo = scopes.fs.inventorySweepRequest(event,isNumber);
	if (isInfo.error){
		errorDialogMobile(event,1291,'genericin',isInfo.error);
		form.sweepBarcode = '';
		return;
	}
	
	//form.qSweepRemain = isInfo.quantity_remaining;
	form.qSweepFound = isInfo.quantity_found;
	//form.qSweepMovedIn = isInfo.quantity_moved_in;
	//form.qSweepMovedOut = isInfo.quantity_moved_out;
	form.qSweepMovedOutComplete = isInfo.quantity_moved_out_complete;
	form.qSweepComplete = (isInfo.sweep_complete*1 == 1) ? i18n.getI18NMessage('sts.btn.yes') : i18n.getI18NMessage('sts.btn.no');
	form.qSweepMovedInOut = isInfo.quantity_moved_in+' / '+isInfo.quantity_moved_out;
	form.qSweepQuanRemain = isInfo.quantity+' / '+isInfo.quantity_remaining;
	form.lastQty = isInfo.quantity;
	var loc1 = isInfo.location1;
	var loc2 = isInfo.location2;
	if (scopes.prefs.lFsFlipPrimSecWhenShop*1 == 1){
		var tmp = loc1;
		loc1 = loc2;
		loc2 = (scopes.prefs.lFsNoPushSecLoc*1 == 0) ? tmp : '';
	}
	if (isInfo.new_location1){loc1 = isInfo.new_location1;loc2 = '';}
	if (isInfo.new_location2){loc2 = isInfo.new_location2}
	form.location1 = loc1;
	form.location2 = loc2;
}
/**
 * @param {JSEvent} event
 * @param {String} rmNumber
 *
 * @properties={typeid:24,uuid:"885899E9-60D6-4F3A-BAD5-CA7F83B11660"}
 */
function rfInventoryAuditSweep(event,rmNumber){
	var form = forms['rf_mobile_view'];
	var response = rfGetInventorySweepRaw(event,form.sweepBarcode,form.asnNumber);
	if (!response.error){
		rfGetInventorySweepInfo(event,form.sweepBarcode);
		syncFSSTSInventory(event,form.sweepBarcode);
	} else {
		errorDialogMobile(event,1291,'genericin',response.error);
	}
	form.asnNumber = '';
}
/**
 * @param {JSEvent} event
 * @param {String} sweepBar
 * @param {String} rawBar
 *
 * @properties={typeid:24,uuid:"42ED0130-4F71-4CFA-9419-2D9C0F31DCB6"}
 */
function rfGetInventorySweepRaw(event,sweepBar,rawBar){
	application.output(sweepBar+' '+rawBar)
	var response = scopes.fs.inventorySweepRequestScan(event,sweepBar,rawBar);
	return response;
}
/**
 * @param event
 * @param message
 *
 * @properties={typeid:24,uuid:"6BFEA11B-86DE-443B-9025-7457A27CA517"}
 */
function rfLoggerMobile(event,message){
	if (!session.capture){return}
	var form = forms['rf_mobile_view'];
	var inputs = form.requiredFields;
	/** @type {JSFoundSet<db:/stsservoy/rf_transactions>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/rf_transactions');
	fs.newRecord(false);
	fs.transaction_date = new Date();
	fs.tenant_uuid = session.tenant_uuid;
	fs.rf_comm_data = message;
	fs.fabrication_shop = session.fabShop;
	fs.job_number = session.jobNumber;
	fs.rf_program = session.program;
	fs.signon_employee = session.login;
	if (mob){
		fs.status_code = mob.statusCode;
	}
	fs.status_location = session.statusLocation;
	fs.worker = session.worker;
	fs.division = session.association;
	fs.entry_response = session.userEntry;
	fs.rf_client = session.sessionId;
	fs.ip_address = session.sessionIp;
	
	databaseManager.saveData(fs);

}
/**
 * @param {JSEvent} event
 * @param data
 *
 * @properties={typeid:24,uuid:"B41BF8D5-04A4-495B-A762-1AA9038382F3"}
 */
function checkInventoryTFSQty(event,data){
	var form = forms['rf_mobile_view'];
	var qtyInventory = form.lastQty;
	if (data <= 0 || data > qtyInventory){
		errorDialogMobile(event,601,'genericin','Entered:'+data+' > Inventory:'+qtyInventory);
		form.quantity = '';
	} else {
		form.quantity = data;
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8D573362-44A9-4C19-8529-675C203BE26C"}
 */
function rfGetInventoryTFS(event){
	// check entries for complete before GO
	var form = forms['rf_mobile_view'];
	showPrintQueueEffort = false;
	if (!dataEntryComplete(event)){
		return false;
	}
	showPrintQueueEffort = true;
	var response = scopes.fs.getInventoryTFS(event);
	if (response.error){
		errorDialogMobile(event,1291,'genericin',response.error);
		form.quantity = '';
		return false;
	} else {
		var invUpdate = rfLocalChangeToInventory(event);
		invUpdate.disposition = response.rtsmessage;
		var invBarcode = scopes.jobs.updateSTSInventory(event,form.asnNumber,invUpdate,true,form.quantity);
		if (form.quantity == form.lastQty){
			mobItemLength = form.dropLength;
		}
		form.lastQty = (form.quantity == form.lastQty) ? form.lastQty : form.lastQty-form.quantity;
		form.quantity = '';
		/** var formPrintDrop = (form['printEnabled'] == i18n.getI18NMessage('sts.btn.yes').toUpperCase());
		//if (response.restockstatus != 'Restock'){//Restock,Scrap,No Drop
			var printDrop = (scopes.prefs.lFsDoNotPrintScrapLabels != 1) && (response.restockstatus == "Scrap");
		//}
		if (printDrop && formPrintDrop){
			scopes.printer.onActionPrintRMLabels(event,[rec.inventory_uuid]);
			//print new label		
		} */
		var invUUIDs = [];
		if (response.rtsmessage){//process STS side, transactions, RM barcode
			var stock = '';
			if (response.rtsmessage == i18n.getI18NMessage('sts.btn.scrap')){
				stock = i18n.getI18NMessage('sts.btn.scrap').toUpperCase();
			} else if (response.rtsmessage == i18n.getI18NMessage('sts.btn.restock')){
				stock = i18n.getI18NMessage('sts.btn.restock');
			}
			if (response.rtsmessage == 'No Drop'){//responses No Drop/Scrap/Restock
				//remove inventory number
				scopes.jobs.updateSTSInventory(event,form.asnNumber,null,true,0);
				//print scrap label, check prefs
			} else {
				//update inventory values
				//var inventoryUpdate = scopes.fs.getInventorySerial(event,form.asnNumber);
				//form.asnNumber = scopes.jobs.updateSTSInventory(event,form.asnNumber,inventoryUpdate,false,form.quantity);
				//scopes.jobs.updateSTSInventory(event,form.asnNumber,inventoryUpdate,false,form.quantity);//20200305
				//print invBarcode. fabsuite prefs, printing ON, 
				if (form['printEnabled'] == 'ON' && (!(scopes.prefs.lFsDoNotPrintScrapLabels*1) || response.rtsmessage == 'Restock')){
					application.output('Printing Remnant '+invBarcode);
					var tempPrtUUID = getInvUUID(event,invBarcode);
					if (tempPrtUUID){
						if (!invUUIDs){invUUIDs = new Array()}
						invUUIDs.push(tempPrtUUID.toString());
						form['labelPrintType'] = 'material';
						scopes.printer.onActionPrintRMLabels(event,invUUIDs)
					}
				}
				if (response.rtsmessage == 'Scrap'){
					//scopes.jobs.updateSTSInventory(event,form.asnNumber,inventoryUpdate,false,form.quantity);	
				}
			}
			if (invUUIDs){
				if (response.rtsmessage != 'No Drop'){//Scrap Restock
					errorDialogMobile(event,1220,'genericin',response.rtsmessage+' '+stock+' Labels: '+invUUIDs.length);
				} else {
					errorDialogMobile(event,1220,'genericin',' '+stock+' Labels: '+invUUIDs.length);
				}
			}
		}
		// perform STS inventory update here
		form.quantity = '';
		form.dropLength = '';
		//globals.rfClearDependentEntries(event,'locationin');
	}
	if (response.rtsmessage != 'No Drop'){//Scrap Restock
		errorDialogMobile(event,1220,'genericin',response.rtsmessage+' '+stock);
	}	
	return true;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param jobNumber
 *
 * @properties={typeid:24,uuid:"B6574F35-6861-413C-9138-08DA1199B07D"}
 */
function rfCheckValidJob(event,jobNumber){
	var form = forms['rf_mobile_view'];
	jobNumber = jobNumber.trim();
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.where.add(q.columns.job_number.eq(jobNumber));
	q.where.add(q.columns.association_id.eq(session.associationId.toString()));
	var Q = databaseManager.getFoundSet(q);
	return (Q.getSize() > 0);
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A60DA02F-E370-4AC0-A126-FA12334BCC64"}
 * @AllowToRunInFind
 */
function rfLocalChangeToInventory(event){
	var form = forms['rf_mobile_view'];
	var invUpdate = {localChange:true,disposition:''};
	var uomMetric = false;
	if (form.dropLength){
		var dropMetric = (form.dropLength.search(/(['"])/) == -1);

		invUpdate.item_length_in = (dropMetric) ?  globals.inToMM(form.dropLength) : globals.strToDec('FEET',form.dropLength.replace(/[^0-9]/g,' '));
		invUpdate.item_length = (dropMetric) ? form.dropLength : inToMM(invUpdate.item_length_in);
		invUpdate.item_length_char = (dropMetric) ? globals.ftDecToString('FEET',invUpdate.item_length_in,13,'ALL') : form.dropLength;
	}
	if (form.dropLocation){
		invUpdate.location = form.dropLocation;
	}
	if (form.quantity){
		invUpdate.quantity_form = form.quantity;//not immediate update to inventory, manual edit/change
	}
	if (form.lastQty){
		invUpdate.quantity_fs = form.lastQty;//not immediate update to inventory, manual edit/change
	}
	if (form.dropJob){
		var jobInfo = globals.getJobIdInfo(form.dropJob);
		invUpdate.job_uuid = jobInfo.job_id;
		invUpdate.job_number = form.dropJob;
	}
	if (form.statusLocation){
		invUpdate.location = form['statusLocation'];
	}
	var msg = 'invUpdate:{';
	for (var item in invUpdate){
		msg += item+':'+invUpdate[item]+',';
	}
	msg += '}';
	application.output(msg);
	return invUpdate;
}
/**
 * @param {JSEvent} event
 * @param {String} asnNumber
 * @param {Boolean} fsHasInventory
 *
 * @properties={typeid:24,uuid:"C1CE2A03-4FB5-41ED-AC8F-43C05862D1E2"}
 */
function rfPopulateInvInfoTFS(event,asnNumber,fsHasInventory){
	var form = forms['rf_mobile_view'];
	if (dataEntryComplete(event,'all')){
		if (processGoEvent(event)){
			return;
		}
	}
	rfInventoryStatus(event,asnNumber);
	if (form.jobNumber && !rfJobCheck(form.jobNumber,session.associationId)){////check that job is in current users division
		errorDialogMobile(event,'1294','dialog','');//job does not exist in the division its returned to
	}
	form.dropLength = '';
	if (form.lastQty){
		if (form.lastQty*1 == 1){form.quantity = form.lastQty;} else {form.quantity = ''}
	}
	if (fsHasInventory){
		form['asnNumber'] = asnNumber;
	}
}
/**
 * @param {JSEvent} event
 * @param {String} rmBarcode
 *
 * @properties={typeid:24,uuid:"DA9EB312-C93A-4F86-9E59-E0F9D86349AB"}
 */
function rfASNReceiving(event,rmBarcode){
	var form = forms['rf_mobile_view'];
	//check F2 setting for division entry
	//check for valid rmBarcode
	form.asnNumber = rmBarcode;
	var location = form.stockLocation;
	var response = scopes.fs.receiveASN(event,rmBarcode,location);
	var retList = '';
	for (var item in response){
		retList += item+': '+response[item]+',';
	}
	application.output('{'+retList+'}');
	if (!response.error){
		form.poNumber = response.po_number;
		form.invOrdered = response.quantity_ordered;//invordered
		form.invRemains = response.quantity_remaining;
		form.invMaterial = response.shape+' x '+response.dims;//invmaterial
		form.invGrade = response.grade;//invgrade
		form.heat = response.heat;
		form.invLocation = location;//invlocation
		form.association = globals.session.association;
		var metric = false;
		if (metric){
			globals.mobItemLength = response.item_length;
			globals.mobItemWeight = response.item_weight;
			globals.mobLengthUnits = 'mm';
			globals.mobItemWeightUnits = 'kg';
			//form.item_length = ;
			//form.item_length_units = "mm";
			//form.item_weight = response.item_weight;
			//form.item_weight_units = 'kg';
		} else {
			globals.mobItemLength = response.item_length_char;
			globals.mobItemWeight = response.item_weight_lbs;
			globals.mobLengthUnits = '';
			globals.mobItemWeightUnits = 'lbs';
			//form.item_length = response.item_length_char;
			//form.item_length_units = '';
			//form.item_weight_lbs = response.item_weight_lbs;
			//form.item_weight_units = 'lbs';
		}
		syncFSSTSInventory(event,rmBarcode);
	} else {
		errorDialogMobile(event,1220,'genericin',response.error);
		rfInventoryStatus(event,rmBarcode,true);
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param address
 *
 * @properties={typeid:24,uuid:"E79B78C8-B78D-4065-BDF2-007CECC93DE0"}
 * {entity_uuid, address_type, city, state, country, edit_date, line1, line2, logic_flag, zip, note, other_addresses}
 * @AllowToRunInFind
 */
function createAddress(event,address){
	/** @type {QBSelect<db:/stsservoy/addresses>} */
	var a = databaseManager.createSelect('db:/stsservoy/addresses');
	var A = databaseManager.getFoundSet(a);
	var idx2 = A.newRecord();
	/** @type {JSFoundSet<db:/stsservoy/addresses>} */
	var addrRec = A.getRecord(idx2);
	addrRec.tenant_uuid = globals.session.tenant_uuid;
	/** @type {JSFoundSet<db:/stsservoy/zipcodes>} */
	var zipRec = null;var tempCity = '';var tempState = '';var tempZip = '';
	if (address.complete){
		var addressInfo = address.complete.split('\n');
		for (var index = addressInfo.length-1;index > -1;index--){
			var addrLine = addressInfo[index];
			if (address.state && address.city && address.line2 && !address.line1){
				address.line1 = addrLine;
			}
			if (address.state && address.city && !address.line2){
				address.line2 = addrLine;
			}
			//is a zip
			if (!address.zip){
				var zip = addrLine.match(/([0-9]{5})-{0,1}[0-9]{0,4}/);
				if (zip){
					address.zip = zip[1];
					/** @type {QBSelect<db:/stsservoy/zipcodes>} */
					var q = databaseManager.createSelect('db:/stsservoy/zipcodes');
					q.where.add(q.columns.zipcode_id.eq(address.zip));
					var Q = databaseManager.getFoundSet(q);
					zipRec = Q.getRecord(1);
					var tempCity = zipRec.primary_city;
					var tempState = zipRec.state;
					if (addrLine.search(tempCity) != -1){address.city = tempCity;}
					if (addrLine.search(tempState) != -1){address.state = tempState}
					
				}
			}
			if (!address.state){
				var possState = addrLine.match(/[^A-Z]([A-Z]{2})[^A-Z]/);
				if (possState){
					/** @type {QBSelect<db:/stsservoy/zipcodes>} */
					var r = databaseManager.createSelect('db:/stsservoy/zipcodes');
					r.where.add(r.columns.state.eq(possState));
					var R = databaseManager.getFoundSet(r);
					if (R.getSize() > 0){
						addrLine.state = possState;
						var idx = 1;
						while (zipRec = R.getRecord(idx++)){
							tempCity = zipRec.primary_city;
							if (addrLine.search(tempCity) == 0){
								address.city = tempCity;
							}
							if (!address.zip){
								address.zip = zipRec.zipcode_id;
							}
							
						}
					}

				}
			}
			// is a city
			//is a state
			// is first line
			// is second line
			
		}
		if (address.line2 && !address.line1){
			address.line1 = address.line2;
			address.line2 = '';
		}
		
	}
	var editDate = new Date();
	addrRec.customer_id = (address.entity_uuid) ? address.entity_uuid.toString() : null;
	addrRec.address_type = (address.address_type) ? address.address_type.toUpperCase() : 'ADDRESS';
	addrRec.city = (address.city) ? address.city : '';
	addrRec.state = (address.state) ? address.state : '';
	addrRec.country = (address.country) ? address.country : '';	
	addrRec.edit_date = (address.edit_date) ? address.edit_date : editDate;
	addrRec.line1 = (address.line1) ? address.line1 : '';
	addrRec.line2 = (address.line2) ? address.line2 : '';
	addrRec.logic_flag = true;//(address.logic_flag) ? address.logic_flag : false;
	addrRec.zip_postal_code = (address.zip) ? address.zip : '';
	addrRec.note = (address.note) ? address.note : '';
	if (address.complete){
		addrRec.note = address.complete;
	}
	databaseManager.saveData(addrRec);
	return addrRec.address_id;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"06A81B66-74BA-4C69-9F29-7C025B98233E"}
 */
function crossoverSTSdata(event){
	if (globals.session.login != 'P'){
		globals.errorDialogMobile(event,'1297',null,null);
		return;
	}
	var backupData = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.backup.database.title'),
					i18n.getI18NMessage('sts.txt.backup.database.question'),
					[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);	
	if (backupData == i18n.getI18NMessage('sts.btn.no')){
		globals.errorDialogMobile(event,'7005',null,null);//sts.txt.crossover.cancelled
		return;
	}
	// perform backup
	backupDatabase(event);
	if (application.isInDeveloper()){
		scopes.jobs.importInProcess = true;
		scopes.jobs.stopImport = false;
	}
	//application.output('Path '+backupFileNameAndPath)
	if (backupFileNameAndPath){
		var file = plugins.file.convertToJSFile(backupFileNameAndPath);
		if (file.size() == 0){
			globals.errorDialogMobile(event,'7003',null,null);//sts.txt.crossover.failed
			if (!application.isInDeveloper) {
				return;
			}
		}
	}
	scopes.jobs.importInProcess = true;
	scopes.jobs.stopImport = false;
	if (0){
		//scopes.jobs.cutoverInventoryDBF();
		globals.errorDialogMobile(event,'sts.txt.crossover.employee.class',null,null);
		scopes.jobs.cutoverEmployeeClassDBF();
		
		globals.errorDialogMobile(event,'sts.txt.crossover.employee',null,null);
		scopes.jobs.cutoverEmployeeDBF(event);
		
		globals.errorDialogMobile(event,'sts.txt.crossover.customer',null,null);
		scopes.jobs.cutoverCustomerDBF(event);
		
		globals.errorDialogMobile(event,'sts.txt.crossover.carrier',null,null);
		scopes.jobs.cutoverCarrierDBF(event);

		globals.errorDialogMobile(event,'sts.txt.crossover.status.description',null,null);
		scopes.jobs.cutoverStatusDescriptionDBF(event);

		globals.errorDialogMobile(event,'sts.txt.crossover.routing',null,null);
		scopes.jobs.cutoverRoutingDBF(event);

		globals.errorDialogMobile(event,'sts.txt.crossover.jobs',null,null);
		scopes.jobs.cutoverJobsDBF(event);

		globals.errorDialogMobile(event,'sts.txt.crossover.loads',null,null);
		scopes.jobs.cutoverLoadsDBF(event);

		globals.errorDialogMobile(event,'sts.txt.crossover.sheets',null,null);
		scopes.jobs.cutoverSheetsDBF(event);

		globals.errorDialogMobile(event,'sts.txt.crossover.sheets',null,null);
		scopes.jobs.cutoverSheetsDBF(event);
		
	}


	scopes.jobs.importInProcess == true;
	globals.errorDialogMobile(event,'sts.txt.crossover.piecemarks',null,null);
	scopes.jobs.cutoverPiecemarksDBF(event);

	globals.errorDialogMobile(event,'sts.txt.crossover.piecemark.minors',null,null);
	scopes.jobs.cutoverPiecemarkMinorsDBF(event);
    
	if (scopes.jobs.stopImport){
		scopes.jobs.importInProcess == false;
		scopes.jobs.stopImport = false;
		return;
	}
	
	globals.errorDialogMobile(event,'sts.txt.crossover.complete',null,null);
	
	scopes.jobs.importInProcess == false;
	
	var reportFolder = plugins.VelocityReport.getReportFolder();
	if (reportFolder.charAt(reportFolder.length-1)){reportFolder=reportFolder+'\\'}
	var filePassWithPath = reportFolder+'STSCutover.txt';
	var file = plugins.file.convertToJSFile(filePassWithPath);
	if (file.exists() && !application.isInDeveloper()){
		file.deleteFile();
		var form = forms[event.getFormName()];
		if (form && form.elements.btn_Crossover){
			form.elements.btn_Crossover.visible = false;
		}
		return;
	}
}
/**
 * @param {JSEvent} event
 * @param {String} carrierNum
 *
 * @properties={typeid:24,uuid:"ECFF8DAE-955C-42C3-9C10-9697A561455D"}
 */
function getCarrierInfo(event,carrierNum){
	/** @type {QBSelect<db:/stsservoy/carrier>} */
	var c = databaseManager.createSelect('db:/stsservoy/carrier');
	c.where.add(c.columns.carrier_number.eq(carrierNum));
	var C = databaseManager.getFoundSet(c);
	if (C.getSize() != 0){
		return C.getRecord(1);
	}
	return null;
}
/**
 * @properties={typeid:24,uuid:"99BEE36C-806C-48CA-9968-5A0A1E50D8F4"}
 */
function getLotNumbers(){
	//var formName = event.getFormName();
	var formName = getFormName();
	var form = forms[formName];
	//application.output('xxxx '+form.vItemRec);
	var pcmkId = "";
	if (form.vItemRec && form.vItemRec.piecemark_id){
		pcmkId = form.vItemRec.piecemark_id;
		if (application.isInDeveloper()){application.output('pcmk rec '+form.vItemRec)}
	}
	if (application.isInDeveloper()){application.output('pcmk id '+pcmkId)}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.lot_id);
	q.result.distinct = true;
	q.where.add(q.columns.delete_flag.isNull)
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
	if (!(!pcmkId)){
		q.where.add(q.columns.piecemark_id.eq(pcmkId.toString()));
	}
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	var lotIds = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		var rec = resultQ.getRecord(index);
		if (lotIds.indexOf(rec.lot_id+"") == -1){lotIds.push(rec.lot_id+"");}
		index++;
	}
	
	/** @type {QBSelect<db:/stsservoy/lots>} */
	var r = databaseManager.createSelect('db:/stsservoy/lots');
		r.result.add(r.columns.lot_number);
		r.result.distinct = true;
		r.where.add(
		r.and
			.add(r.columns.delete_flag.eq(0))
			.add(r.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(r.columns.lot_id.isin(lotIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var resultR = databaseManager.getFoundSet(r);
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var ds = databaseManager.convertToDataSet(resultR,['lot_number']);
	if (application.isInDeveloper()){application.output('---- lot count numbers '+resultR.getSize())}
	if (resultR.getSize() == 1){
		ds.rowIndex = 1;
		form.vLotNumber = ds.lot_number;
	} else {
		ds.rowIndex = 1;
		form.vLotNumber = "";
		form.vLotList = [];
		index = 1;
		while (index <= resultR.getSize()){
			var recR = resultR.getRecord(index);
			form.vLotList[recR.lot_id] = recR.lot_number;
			form.vLotList[recR.lot_number] = recR.lot_id;
			index++;
		}
	}
	if (application.isInDeveloper()){application.output('form lot list origin '+form.vLotList)}
	return ds;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3109668D-D3EF-4F24-99E4-7312F205CB3A"}
 */
function rfUnsetEndTransaction(event){
	//still need to ensure that the idfiles match the collected results
	
	if (!mob.begTimedStation){return}
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.where.add(q.columns.tenant_uuid.eq(session.tenant_uuid.toString()));
	q.where.add(q.columns.status_description_id.eq(mob.begTimedStation.toString()));
	q.where.add(q.columns.transaction_end.eq(mob.begTimedDate));//this is the transaction end date
	var Q = databaseManager.getFoundSet(q);
	var updaterQ = databaseManager.getFoundSetUpdater(Q);
	updaterQ.setColumn('transaction_end',null);
	updaterQ.performUpdate();
	
}
/**
 * @param zoomLevel
 *
 * @properties={typeid:24,uuid:"8AAD5964-D25F-46DB-B64A-9826C9C9868C"}
 */
function rfSetWebZoomLevel(zoomLevel){
	globals.viewZoom = zoomLevel;
	application.output('Zoom level on menu: '+globals.viewZoom);
	return viewZoom;
}
/**
 * @properties={typeid:24,uuid:"85C04179-9518-4F20-8828-8698083B1F2D"}
 */
function rfEmptyCallback(){
	application.output('Done resize.');
}