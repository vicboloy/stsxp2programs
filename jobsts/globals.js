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
 * employeeNames[employee_number] = "first name<space> last name"
 */
var m = {
	assocs : [], 		// associations is a 2-way map to and from id and name
	/** @type {String} */ stations : [], 		//stations are by division and status code
	stationSeq : [], 	// stationProcess[status_description_id.UUID] = status_sequence.NUM. Process priority
	routes : [], 		//routes are organization wide
	statusCodesDiv : [],	// status codes are by division, and must verify
	stationsTimed : [], // stationsTimed[status_description_id.UUID] = stationStatusToEndTiming.UUID
	stationsTimedEnds : [], // stationsTimed[stationStatusToEndTiming.UUID] = status_description_id.UUID
	statusToProcess : [], // status_code.TXT to process_code.TXT
	locations : [],		// locations are by division, so only provide those in the division, but don't verify
	workerList : [],    // workers by employee_number
	employeeNames : [], // list of employee names by employee_id
	employeeNumbers : [], // list of employee numbers by login_id
	userAssocs : [], // list of userIds to assocationIds
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
	bundle : {
		weight: 0, 
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
			Id : null, 
			number : ""}, //job related entries
	piecemark : {
		piecemark_id : "", 
		e_route_code_id : ""}, 	// piecemark object 
	transaction : {}, 	// transaction_object
	transactions : {},	// transaction query results
	transactionList : [],	// [index] = (trans_id...) list of transactions for the selected barcode, pick one idfile for list
	locationArea : "", 	// user location.TXT
	locationPrev : "",	// previous user enterred location.TXT
	load :  {
		weight: 0, 
		pieces: 0, 
		Id : "", transFs : null, 
		number : "",
		currentId : "", 
		shipId : "", 
		receiveId : ""}, // single loadInfo
	locationValues : {pieces : 0, weight : 0, piecemarks : 0}, // total values added for location
	idValues : {total : 0, complete : 0},
	statusRemove : "", // status on a reversal
	status : "",
	statusCode : "", 	// status_code text
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
	endItem : null
}
/**
 * @properties={typeid:35,uuid:"156699CD-41A6-4A0A-80BB-F1DC66692C4B",variableType:-4}
 */
var processCodes = {
	all : ['None','Fab Raw Received','Fab Receive','Fab Rel2Fab','Fab Cut','Fab Beam Line','Fab Blasted','Fab Drilled','Fab Layout','Fab Fitup','Fab Welded','Fab 1stInspect','Fab 2ndInspect','Fab 3rdInspect','Fab 4thInspect','Fab Inspected','Fab Fabricated','Fab Paint','Fab Bundled','Fab Move','Fab Transfer','Fab Loading','Fab Loaded','Fab LoadVerify','Fab Ship','Galvanizer Received','Galvanizer Shipped','Galvan LoadVerify','Painter Received','Painter Shipped','Paint LoadVerify','FireProofer Received','FireProofer Shipped','FireProof LoadVerify','Other Received','Other Shipped','Other LoadVerify','Jobsite Received','Jobsite Shipped','Jobsite LoadVerify','Jobsite Inspected','Jobsite Painted','Jobsite Field Work','Jobsite Move','Jobsite Issued','Jobsite Erected'],
	shipping : ['Fab Transfer','Fab Loading','Fab Loaded','Fab LoadVerify','Fab Ship','Galvanizer Shipped','Galvan LoadVerify','Painter Shipped','Paint LoadVerify','FireProofer Shipped','FireProof LoadVerify','Other Shipped','Other LoadVerify','Jobsite Shipped','Jobsite LoadVerify'],
	receiving : ['Fab Raw Received','Fab Receive','Galvanizer Received','Painter Received','FireProofer Received','Other Received','Jobsite Received'],
	transactions : ['Fab Rel2Fab','Fab Cut','Fab Beam Line','Fab Blasted','Fab Drilled','Fab Layout','Fab Fitup','Fab Welded','Fab Fabricated','Fab Paint','Fab Bundled','Fab Move','Jobsite Painted','Jobsite Field Work','Jobsite Move','Jobsite Issued','Jobsite Erected'],
	inspections : ['Fab 1stInspect','Fab 2ndInspect','Fab 3rdInspect','Fab 4thInspect','Fab Inspected','Jobsite Inspected']
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
 * Object holding session information that may change with scan but generally apply to session
 * @properties={typeid:35,uuid:"FA84497D-3A0F-4CFB-A875-BB561B2B2CFA",variableType:-4}
 */
var session = {
	capture : false,
	browser : "", //navigator.userAgent response from browser
	enterpriseBrowser : "", //deviceName reported by EB, boolean
	jobNumber : "",
	jobId : "",
	jobLoads : null, // load number dataset for jobID
	association : "",
	associationId : "",
	bundlePrefix : "",
	tenant_uuid : "",
	worker : "",
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
	errorElementAlt : null,
	errorReport : false,
	errorShow : false,
	fabShop : "",
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
var rfHtml = '<html> \
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
 */
var rfViews = {
	Sample : {
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
		jobnumberin : 'R',
		loadnumberin : 'R',
		statusin : 'O',
		locationin : 'O',
		currentidin : 'R',
		previousid : 'V',
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
		jobnumberin : 'R',
		bundlein : 'R',
		statusin : 'R',
		locationin : 'O',
		currentidin : 'R',
		previousid : 'V',
		piecemark : 'V',
		material : 'V',
		itemlength:'V',
		itemweight : 'V',
		bundlepieces : 'V,',
		bundleweight : 'V'
	},
	'Saw' : {
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		gradein : 'R',
		heatin : 'R',
		currentidin : 'R',
		previousid : 'V',
		
		jobnumber : 'V',
		shoporder : 'V',
		seqnumber : 'V',
		itemweight : 'V',
		itemlength:'V',
		pcsstatcount : 'V'
	},
	'Status' : {
		currentidin : 'R',
		
		jobnumber : 'V',
		
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
		jobnumberin : 'R',
		piecemarkin : 'R',
		material : 'V',
		itemweight : 'V',
		itemlength:'V',
		location : 'V'
	},
	'Final Ship' : {
		jobnumberin : 'R',
		loadnumberin : 'R',
		statusin : 'R',
		locationin : 'O',
		updateload : 'R',
		cancelupdate : 'O',
		spacer : 'V',
		shippieces : 'V,',
		shipweight : 'V'		
	},
	'Ship By Sequence' : {
		jobnumberin : 'R',
		seqnumberin : 'R',
		loadnumberin : 'R',
		statusin : 'O',
		locationin : 'O',
		currentidin : 'R',
		previousid : 'V',
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
		jobnumberin : 'R',
		loadnumberin : 'R',
		statusin : 'R',
		locationin : 'O',
		currentidin : 'R',
		previousid : 'V',
		sheetnumber : 'V',
		seqnumber : 'V',
		piecemark : 'V',
		material : 'V',
		itemlength:'V',
		itemweight : 'V',
		shoporder : 'V',
		ps : 'V',
		shippieces : 'V,',
		shipweight : 'V'

	},
	'Transactions' : {
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		currentidin : 'R',
		previousid : 'V',
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
	'Transactions w/Rev\'s' : {
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		drawrevin : 'O',
		currentidin : 'R',
		previousid : 'V',
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
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		currentidin : 'R',
		previousid : 'V',
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
	'Inspections w/Rev\'s' : {
		statusin : 'R',
		locationin : 'O',
		workerin : 'O',
		drawrevin : 'O',
		currentidin : 'R',
		previousid : 'V',
		jobnumber : 'V',
		seqnumber : 'V',
		prevstatus : 'V',
		prevlocation : 'V',
		pcsstatcount : 'V',
		itemweight : 'V',
		itemlength:'V',
		locationpieces: 'V', //comma extends line with next data field after this one
		locationweight: 'V'
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
		item_quantity : 'R',
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
		item_quantity : 'R',
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
	getUserNames();
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
	);
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
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
 * @SuppressWarnings(wrongparameters)
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
	m.statusToProcess = [];
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
		/** @type {Array} */
		var tempArray = m.statusCodesDiv[assocId];
			tempArray.push(status);
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
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	if (thisFunction == flagFunction){return}
	flagFunction = thisFunction;
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
	var formName = application.getActiveWindow().controller.getName();
	if (mob.statusCode == ""){return}
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
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
	if (flagF8){
		//f8ReversalColor = forms[formName].elements.transShop.background;
		forms[formName].elements.transShop.bgcolor = 'Yellow';
		f8ReversalText = forms[formName].viewTitle;
		forms[formName].viewTitle = "Status Reversal "+session.association;
		forms[formName].controller.focusField(globals.session.errorElement,false);
	} else {
		forms[formName].controller.focusField(globals.session.errorElement,false);
		forms[formName].viewTitle = f8ReversalText;
	}
	forms[formName].elements.statusin.enabled = !flagF8;
	forms[formName].elements.workerin.enabled = !flagF8;
	forms[formName].elements.transShop.transparent = !flagF8;
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
	 * remove ENDED transaction if trailer_labor_percent = 0
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
	application.output('station id '+stationId);
	var transStart = ""; var transEnd = "";
	var fTransStart = (m.stationsTimed[stationId] != undefined);
	if (fTransStart){transStart = stationId;transEnd = m.stationsTimed[stationId];}
	var fTransEnd = (m.stationsTimedEnds[stationId] != undefined);
	if (fTransEnd){transStart = m.stationsTimedEnds[stationId];transEnd = stationId;}
	var foundIndex = 0;
	var errorNum = 0;
	var errorMsg = '';
	if (fTransStart){
		application.output('trans start status '+status);
	}
	if (fTransEnd){
		application.output('trans end status '+status);
	}
	// start with just status, and report if there is a status not in this division
	var rec = null;
	for (var index = 1; index <= transactions.getSize(); index++){
		rec = transactions.getRecord(index);
		application.output(index+' REC '+rec.status_description_id+' start '+transStart+' end '+transEnd);
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
		application.output('error reversal '+errorNum);
		errorDialogMobile('rf_transactions.current',errorNum,'current',errorMsg);
		return null;
	}
	if (foundIndex == 0){
		// status not found error
		errorDialogMobile('rf_transactions.current',409,'current','');
		application.output('error reversal status not found');
		return null;
	}
	// should be at least one idfile and one transaction record
	var transTime = rec.transaction_date;
	///var tenantId = rec.tenant_uuid;
	application.output('reversal of record '+rec);
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
	application.output(worker+' id '+workerId+' tranrevdate '+tranRevDate+' '+removeStatus+' location ')
	var fsUpdater = databaseManager.getFoundSetUpdater(transactionsFS);
	///var fTimed = (fTransStart || fTransEnd);
	if (fTransEnd){ // error message with end timed labor percentage = 100
		var fResetTimed = (rec.trailer_labor_percentage >= 100);
		if (fResetTimed){
			fsUpdater.setColumn('trailer_labor_percentage',0);
			fsUpdater.setColumn('trailer_labor_quantity',0);
			fsUpdater.performUpdate(); //411 100% complete Removed From the STOP Status Code.
			errorDialogMobile('rf_transactions.current',411,'current','');
			return null;
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
	application.output('location '+statusLocation);
	if ((currentStatus != maxStatus) || (currentLocation != statusLocation)){
		var fsUpdaterIds = databaseManager.getFoundSetUpdater(idfilesFS);
		if (currentStatus != maxStatus){
			fsUpdaterIds.setColumn('status_description_id',maxStatus);
		}
		if (currentLocation != statusLocation){
			fsUpdaterIds.setColumn('id_location',statusLocation);
		}
		fsUpdaterIds.performUpdate();
		fsUpdaterIds = null;
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
	 */
	 /** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var transactions = rfLatestTransaction(mobRepIdfileId);
	var transSize = transactions.getSize();
	var removal = (transSize != 0);
	if (!removal){return}
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
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"CBC34BCA-57A6-4FC7-8758-6A0EED302D1E"}
 */
function rfF3(){
	application.output(flagFunction);
	//flagFunction = null;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	var win = application.getWindow('Transaction List');
	if (!win){
		win = application.createWindow('Transaction List',JSWindow.MODAL_DIALOG);
		win.setLocation(0,0);
		win.setSize(240,300);
		win.show('rf_list_trans');
	} else {
		if (win.isVisible()){
			//flagFunction = false;
			win.hide();
			onReturnFromFunction();
		} else {
			win.show('rf_list_trans');
		}
	}
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
	forms[formName].setTransShop();
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
	/** @type {JSFoundSet<db:/stsservoy/routings>} */
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
 * @SuppressWarnings(wrongparameters)
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
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var e = databaseManager.getFoundSet('db:/stsservoy/employee');
	if (e.find()){
		e.employee_userid = userId;
		e.tenant_uuid = session.tenant_uuid;
		if (e.search()){
			var rec = e.getRecord(1);
			session.fullName = rec.employee_firstname+" "+rec.employee_lastname;
			session.employeeId = rec.employee_id;
			session.employeeNum = rec.employee_number;
			session.userId = rec.employee_userid;
		}
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
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var e = databaseManager.getFoundSet('db:/stsservoy/employee');
	if (e.find()){
		e.employee_number = userNum;
		e.tenant_uuid = session.tenant_uuid;
		if (e.search()){
			///var rec = e.getRecord(1);
			return e.employee_id;
		}
	}
	return null;	
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
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var q = databaseManager.createSelect('db:/stsservoy/employee');
	q.result.add(q.columns.employee_number);
	q.result.add(q.columns.employee_firstname);
	q.result.add(q.columns.employee_lastname);
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
		/** @type {JSFoundSet<db:/stsservoy/employee>} */
		var rec = resultQ.getRecord(index);
		m.workerList[rec.employee_number] = rec.employee_id;
		m.employeeNames[rec.employee_userid] = rec.employee_firstname+" "+rec.employee_lastname;
		m.employeeNumbers[rec.employee_userid] = rec.employee_number;
		l.workerList.push(rec.employee_number);
		session.workerList.push(rec.employee_number);
	}
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
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.id_serial_number.eq(barcode))
		);
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() == 1){
		var rec = resultQ.getRecord(1);
		mob.barcodeId = rec.id_serial_number_id;
		mobIdSerialId = rec.id_serial_number_id; // setup global relation for barcode uuid
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
	//check routing to ensure that although the wrong plant, it is scannable in the selected plant
	// get route and look for selected station for this scan
	var serialAssocId = barcode_to_idfile.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.association_id;
	//var serialAssocId = barcode_to_idfile.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.association_id;
	if (serialAssocId+"" != globals.session.associationId+""){//"FAA9BDE5-6B66-4930-981C-5AF0004EE1A4" != "BF00BA53-8D07-4A70-B835-24D5BD5DAB91"
	// does route 'FAA9BDE5-6B66-4930-981C-5AF0004EE1A4, <status_code>' exist?
		var newStationId = m.stations[globals.session.associationId+", "+mob.statusCode];
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
			application.output('wrong association ' + serialAssocId+' not '+globals.session.associationId);
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
function barcodeIsBundle(bundleId){
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.bundle_id);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.piecemark_id);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.bundle_id.eq(bundleId))
		);
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
		var bundle = rec.bundle_id;
		if (bundles.indexOf(bundle) != -1){continue}
		bundles.push(bundle);
		var jobId = rec.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.job_id;
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
 * @param event
 *
 * @properties={typeid:24,uuid:"89367D1A-9BEC-4053-8EFB-EC113512237F"}
 */
function noOperationEvent(event){
	application.output('this is an empty op.'+event);
}
/**
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
	var stationId = session.stationId+"";
	var allowMoreCodes = (l.routesAddLegs.indexOf(routeId) != -1);//list of routes that allow more codes
	var allowMultiScan = (l.stationsMultiScan.indexOf(stationId) != -1);//list of stations that allow multiscan
	/**if (m.stationsTimedEnds[stationId]){//if it is a timed station, then allow it to be multiscan too
		allowMultiScan = (allowMultiScan || (l.stationsMultiScan.indexOf(m.stationsTimedEnds[stationId]+"") != -1));
	}*/
	///var stationScanned = (mob.transactionList.indexOf(stationId) != -1);
	//var stationLastId = mob.idfile.status_description_id+"";
	if (routeId != null) {
		checkLegs = l.routeLegs[routeId];
	}
	// route legs are checked with status_description_id.UUID
	///var writeTransRecord = (!allowMultiScan && stationLastId+"" == stationId+"") ||	(routeId == null);
	var allowInRoute = (checkLegs.indexOf(session.stationId) != -1);
	/**if (m.stationsTimedEnds[stationId]){//if it is a timed end station, then allow it in the route too
		allowInRoute = (checkLegs.indexOf(m.stationsTimedEnds[stationId]+"") != -1);//implicit route membership for timed status
	}*/
	if (!allowInRoute && !allowMoreCodes){
		missing = "("+m.stations[session.stationId]+")"; // make missing global
		errorDialogMobile('rf_transactions.current','431','current',missing);// 431 This Routing Code Does Not Allow This Status.
		return false;
	}
	//var writeTransRecord = (allowMultiScan && stationScanned) || (!stationScanned) ||	(routeId == null);
	////var writeTransRecord = (allowMultiScan && stationScanned) || (!stationScanned) ||	(routeId == null);
	// ok in route
	// Enforce routing on transaction. For the route, is current preceeded by previousRoute by previousRoute
	// actual transactions: mob.transactionList[index]=(status_description_id...)
	// route transactions: checkLegs[index]=(status_description_id...)
	var routingOk = true;
	var routeSkip = (checkLegs.indexOf(session.stationId) == -1);
	missing = "";
	if (routeId && !routeSkip){
		//var index = (allowMoreCodes) ? checkLegs.indexOf(session.stationId) : checkLegs.length-1;
		/**
		 * from  list of stations scanned
		 * get index in established route of scanned station
		 * skip if route is not in legs and allowmorecodes
		 */
		var stationsDone = mob.transactionList;
		var targetIndex = checkLegs.indexOf(session.stationId);
		var index = 0;
		//while (routingOk && index < targetIndex){

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
	//return writeTransRecord && routingOk;
	return routingOk;
}
/**
 * Modify rfChangeWindow, getMenuList to show rfViews
 * @param {JSEvent} event
 * @param winName
 *
 * @properties={typeid:24,uuid:"27EE31BD-22A3-498C-BB9F-9FEA3FD08E43"}
 */
function rfChangeWindow(event,winName){
	var currWin = application.getActiveWindow();
	switch(winName)	{
	case 'Inspections':
		session.program = 'Inspections';
		currWin.show('rf_mobile_view');
		break;
	case "Inspections w/Rev's":
		session.program = "Inspections w/Rev's";
		currWin.show('rf_mobile_view');
		break;
	case "Transactions w/Rev's":
		session.program = 'Transactions w/Rev\'s';
		currWin.show('rf_mobile_view');
		break;
	case 'Transactions':
		session.program = 'Transactions';
		currWin.show('rf_mobile_view');
		break;
	case 'Receiving':
		session.program = 'Receiving';
		currWin.show('rf_mobile_view'); // check globals.rfViews, invisible fields
		break;
	case 'Sample':
		session.program = 'Sample';
		currWin.show('rf_mobile_view');
		break;
		
	case 'Build Bundles':
		session.program = 'Build Bundles';
		currWin.show('rf_mobile_view');
		break;
	case 'Saw':
		session.program = 'Saw';
		currWin.show('rf_mobile_view');
		break;
	case 'Status':
		session.program = 'Status';
		currWin.show('rf_mobile_view');
		break;
	case 'Find Piece Marks':
		session.program = 'Find Piece Marks';
		currWin.show('rf_mobile_view');
		break;
	case 'Shipping':
		session.program = 'Shipping';
		currWin.show('rf_mobile_view');
		break;
	case 'Final Ship':
		session.program = 'Final Ship';
		currWin.show('rf_mobile_view');
		break;
	case 'Ship By Sequence':
		session.program = 'Ship By Sequence';
		currWin.show('rf_mobile_view');
		break;
	case 'Exit': 
		//globals.rfExitMobileClient();
		showExecLogout();
		application.output('exiting');
		break;
	default:
		session.program = 'Sample';
		currWin.show('rf_mobile_view');
	}
	/**
	case 'Inspections':
		session.program = 'Inspections';
		currWin.show('rf_inspections');
		break;
	case "Transactions w/Rev's":
		session.program = 'TransactionsRevs';
		currWin.show('rf_transactions_rev');
		break;
	case 'Transactions':
		session.program = 'Transactions';
		currWin.show('rf_transactions');
		break;
	case 'Shipping':
		session.program = 'Shipping';
		currWin.show('rf_shipping');
		break;
	case 'Build Bundles':
		session.program = 'Build Bundles';
		currWin.show('rf_bundles');
		break;
	case "Inspections w/Rev's":
		session.program = 'InspectionsRevs';
		currWin.show('rf_inspections_rev');
		break;
*/
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
	globals.mobProg = screen;
	if (screen == 'rf_mobile_view'){
		screen = session.program;
	}
	var dex = 0;
	///var fKey = "";
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
	dex = 11;
	functionKeyDescrip[dex] = 'xxx Logout';
	functionKeyProcedure[dex] = 'globals.rfLogout';
	dex = 12;
	functionKeyDescrip[dex] = 'xxx Return to OS';
	functionKeyProcedure[dex] = 'globals.rfExitBrowser';
	//functionKeyProcedure[3] = '';
	//functionKeyProcedure[8] = '';
	//functionKeyProcedure[9] = '';
	switch( screen )
	{
		case 'Main':
			globals.mobForm = "STS_main";
			break;
		case 'rf_transactions':
		case 'Transactions':
		case 'Transactions2':
		case "Transactions w/Rev's":
		case "Transactions w/Rev's2":
			globals.mobForm = "rf_transactions";
			dex = 2;
			functionKeyDescrip[dex] = 'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			plugins.window.createShortcut('F2',functionKeyProcedure[dex]);
			dex = 3;
			functionKeyDescrip[dex] = 'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF3';
			plugins.window.createShortcut('F3',functionKeyProcedure[dex]);
			dex = 8;
			functionKeyDescrip[dex] = 'F8 - Remove Status'
			functionKeyProcedure[dex] = 'globals.rfF8Reversal';
			plugins.window.createShortcut('F8',functionKeyProcedure[dex]);
			dex = 9;
			functionKeyDescrip[dex] = 'F9 - Inspection Doc'
			break;
		case 'rf_bundles':
		case 'Build Bundles':
		case 'Build Bundles2':
			globals.mobForm = "rf_bundles";
			dex = 2;
			functionKeyDescrip[dex] = 'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			plugins.window.createShortcut('F2',functionKeyProcedure[dex]);
			dex = 4;
			functionKeyDescrip[dex] = 'F4 - Clear Bundle Pieces';
			functionKeyProcedure[dex] = 'globals.rfF4BundleClear';
			plugins.window.createShortcut('F4',functionKeyProcedure[dex]);
			dex = 5;
			functionKeyDescrip[dex] = 'F5 - Print Bndl Labels';
			//functionKeyProcedure[dex] = 'globals.rfF5BundlePrint';
			plugins.window.createShortcut('F5',functionKeyProcedure[dex]);
			dex = 6;
			functionKeyDescrip[dex] = 'F6 - Print Bundle List';
			//functionKeyProcedure[dex] = 'globals.rfF6BundlePrintList';
			plugins.window.createShortcut('F6',functionKeyProcedure[dex]);
			dex = 8;
			functionKeyDescrip[dex] = 'F8 - Remove From Bundle';
			functionKeyProcedure[dex] = 'globals.rfF8BundleRemoveFrom';
			plugins.window.createShortcut('F8',functionKeyProcedure[dex]);
			break;
		case 'Shipping2':
		case 'Shipping':
			globals.mobForm = "rf_mobile_view";
			dex = 2;
			functionKeyDescrip[dex] = 'F2 - Switch Plants';
			functionKeyProcedure[dex] = 'globals.rfF2SwitchPlants';
			plugins.window.createShortcut('F2',functionKeyProcedure[dex]);
			dex = 3;
			functionKeyDescrip[dex] = 'F3 - List History'
			functionKeyProcedure[dex] = 'globals.rfF3';
			plugins.window.createShortcut('F3',functionKeyProcedure[dex]);
			dex = 8;
			functionKeyDescrip[dex] = 'F8 - Remove Status'
			functionKeyProcedure[dex] = 'globals.rfF8Reversal';
			plugins.window.createShortcut('F8',functionKeyProcedure[dex]);
			break;
		default:
			
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
				.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	mob.idfilesFS = resultQ;
	scopes.globals.fsBarcodeIdfiles = resultQ;
	idfileIdList = [];
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
	///var resultQ = databaseManager.getFoundSet(q);
	
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
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var resultR = databaseManager.getFoundSet(r);
	var index = 1;
	///var loc = "";
	var idfile = "";var idfileList = [];var piecemarkList = [];
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
	w.result.add(w.columns.summed_quantity);
	w.where.add(
	w.and
		.add(w.columns.delete_flag.isNull)
		.add(w.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(w.columns.idfile_id.isin(idfileList))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultW = databaseManager.getFoundSet(w);
	index = 1;
	while(index <= resultW.getSize()){
		rec = resultW.getRecord(index);
		if (piecemarkList.indexOf(rec.piecemark_id) == -1){piecemarkList.push(rec.piecemark_id)}
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
		.add(s.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(s.columns.piecemark_id.isin(piecemarkList))
	);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var resultS = databaseManager.getFoundSet(s);
	
	// grab weight for each idfile and add to total weight
	index = 1; var totWeight = 0;
	while(index <= resultW.getSize()){
		rec = resultW.getRecord(index);
		resultS.loadRecords(databaseManager.convertToDataSet(rec.piecemark_id));
		var weight = (mob.job.metric) ? resultS.item_weight : resultS.item_weight_lbs;
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
	var piecemarkList = [];
	if (!sLocation || sLocation == "") {return}
	// get piecemarks for location, above was only a count by idfiles with that transaction location
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var w = databaseManager.createSelect('db:/stsservoy/idfiles');
	w.result.add(w.columns.idfile_id);
	w.result.add(w.columns.piecemark_id);
	w.result.add(w.columns.summed_quantity);
	w.where.add(
	w.and
		.add(w.columns.delete_flag.isNull)
		.add(w.columns.tenant_uuid.eq(session.tenant_uuid))
		.add(w.columns.id_location.eq(sLocation))
	);
	var resultW = databaseManager.getFoundSet(w);
	var index = 1;
	while(index <= resultW.getSize()){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = resultW.getRecord(index++);
		if (piecemarkList.indexOf(rec.piecemark_id+"") == -1){piecemarkList.push(rec.piecemark_id+"")}
	}
	mob.locationValues.piecemarks = piecemarkList.length;
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
	mob.locationValues.piecemarks = resultS.getSize();
	
	// grab weight for each idfile and add to total weight
	index = 1; var totWeight = 0; var totPieces = 0;
	while(index <= resultW.getSize()){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec2 = resultW.getRecord(index++);
		
		resultS.loadRecords(databaseManager.convertToDataSet(rec2.piecemark_id));
		var weight = (mob.job.metric) ? resultS.item_weight : resultS.item_weight_lbs;
		var quant = (rec2.summed_quantity == 0) ? rec2.original_quantity : rec2.summed_quantity;
		totWeight = totWeight*1 + weight*quant;
		totPieces = totPieces*1 + quant*1;
		//application.output(index+' '+'#' + quant+ ' weight '+weight+' piecemark '+resultS.piecemark+' pcmkid '+rec2.piecemark_id);
		//index++;
	}
	mob.locationValues.weight = totWeight;
	mob.locationValues.pieces = totPieces;
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
 */
function rfErrorShow(message){
	//var formName = application.getActiveWindow().controller.getName();
	var formName = getFormName();
	mobDisableForm(false);
	errorMessageMobile = textWrap(message,25);
	
	forms[formName].elements.errorWindow.enabled = true;
	forms[formName].elements.errorWindow.visible = true;
	forms[formName].elements.errorWindow.transparent = false;
	forms[formName].elements.errorWindow.putClientProperty('text',message);
	forms[formName].elements.errorWindow.requestFocus();
	forms[formName].controller.focusField('errorWindow',false);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"376C6315-A576-4572-AD5F-9208DDF1E543"}
 */
function rfErrorHide(event) {
	var formName = session.errorForm;
	if (!formName){
		formName = application.getActiveWindow().controller.getName(); // 20150402 in case this is called outside current window
	}
	var elName = session.errorElement;
	if (session.errorElementAlt != null){
		elName = session.errorElementAlt;
	}
	globals.mobDisableForm(false);
	forms[formName].elements.errorWindow.visible = false;
	forms[formName].elements.errorWindow.enabled = false;
	forms[formName].elements.errorWindow.transparent = true;
	forms[formName].elements[elName].requestFocus();
	forms[formName].controller.focusField(elName,false);
	forms[formName].elements[elName].selectAll();
	//forms[formName].elements[elName].requestFocus();
	if (session.errorForm != null && session.errorElement != null){
		//application.output(' focus request set');
		//forms[session.errorForm].elements[session.errorElement].requestFocus();
		//forms.rf_transactions.elements.current.requestFocus();
		forms[formName].controller.focusField(elName,true);
		//forms[formName].elements[elName].selectAll();
		session.errorForm = null;
		session.errorElement = null;
		session.errorElementAlt = null;
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
 */
function getMenuList(){
	var progList = new Array;
	progList.push('Inspections');
	progList.push("Inspections w/Rev's");
	progList.push('Shipping');
	progList.push('Transactions');
	progList.push("Transactions w/Rev's");
	progList.push("Receiving");
	progList.push("Sample");
	progList.push("Build Bundles");
	progList.push("Saw");
	progList.push("Status");
	progList.push("Find Piece Marks");
	progList.push("Final Ship");
	progList.push("Ship By Sequence");
	progList.sort();
	progList.push('Exit');
	//application.setValueListItems('rfProgramList',['Transactions','Exit']);
	//progList.push('Build Bundles');
	//progList.push('Inspections');
	//progList.push("Inspections w/Rev's");
	//progList.push('Shipping');
	//progList.push('Transactions');
	//progList.push("Transactions w/Rev's");
	//progList.push("window2");
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
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.piecemark_id.eq(mob.idfile.piecemark_id))
	);
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
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.piecemark_id.eq(piecemarkId))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	//var countPieces = 0;
	var maxIndex = 1; var idfileList = [];
	while (maxIndex < resultQ.getSize()){
		/** @type {JSRecord} */
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
		rec = resultR.getRecord(resultR.getSize());
	}
	mob.idValues.complete = index;
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
function onDataChangeStatus(oldValue, newValue, event) {
	if (onDataChangeFixEntry(oldValue,newValue,event)){return true;}
	session.userEntry = newValue;
	//plugins.scheduler.removeJob('updateField')
	var formName = application.getActiveWindow().controller.getName();
	/**if (flagF8){
		//var formName = event.getFormName();
		forms[formName].statusCode = "";
		return true;
	}*/ // 20150402 for errors originating from input fields
	var statusCheck = rfStatusCheck(newValue);
	if (statusCheck == null){
		errorDialogMobile(event,401,'status',null);//401: This is not a valid status code
		//var formName = event.getFormName();
		onFocusClear(event);
		//forms[formName].resetStatusCode();
		return true;
	}
	var permitted = [];
	var forbidden = [];
	switch (formName){
		case 'rf_transactions':
		case 'rf_transactions_rev':
			permitted = processCodes.transactions;
			break;
		case 'rf_bundles':
			permitted = ['Fab Bundled'];
			break;
		case 'rf_inspections':
		case 'rf_inspections_rev':
			permitted = processCodes.all;
			forbidden = processCodes.shipping.concat(processCodes.receiving);
			break;
		case 'rf_shipping':
			permitted = processCodes.shipping;
			break;
		case 'rf_mobile_view':
			switch (session.program){
				case 'Receiving':
					permitted = processCodes.receiving;
					break;
				case 'Bundles2':
					permitted = ['Fab Bundled'];
					break;
				case 'Inspections2':
				case 'Inspections w/Rev\'s2':
					permitted = processCodes.all;
					forbidden = processCodes.shipping.concat(processCodes.receiving);
					break;
				case 'Transactions2':
				case 'Transactions w/Rev\'s2':
					permitted = processCodes.transactions;
					break;
				case 'Shipping2':
					permitted = processCodes.shipping;
					break;
				default:
				permitted = processCodes.all;
			}
			break;
	default:
		permitted = processCodes.all;
	}
	if (forbidden.indexOf(m.statusToProcess[newValue]) != -1){
		errorDialogMobile(event,404,'status',null);//404 This Is Not A Valid Status Code For This Screen / Operation.
		onFocusClear(event);
		return true;	
	}
	if (permitted.indexOf(m.statusToProcess[newValue]) == -1){
		errorDialogMobile(event,404,'status',null);//404 This Is Not A Valid Status Code For This Screen / Operation.
		onFocusClear(event);
		return true;	
	}
	mob.statusCode = newValue;
	session.stationId = m.stations[session.associationId+', '+mob.statusCode];
	if (formName == "rf_mobile_view"){
		rfMobileViewNextField(event);
	} else {
		rfEmptyNextField(event,'location');
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
	var elName = event.getElementName();
	var entry = event.getSource().getDataProviderID();
	var variable = forms[formName];
	//var value = variable[entry];
	//value = "";
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
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var fs = databaseManager.getFoundSet('stsservoy','preferences2');
	if (fs.find()){
		fs.user_id = -1;
		fs.tenant_uuid = globals.secCurrentTenantID;
		fs.form_name = '^=';
		if (prefsType && prefsType == "Printer"){
			fs.value_description = 'Global Printer';
		}
		if (prefsType && prefsType == "Prefs") {
			fs.value_description = 'Global Preference';
		} 
		var recIndex = 1;
		var recCount = fs.search();
		recCount = databaseManager.getFoundSetCount(fs);
		var record = null;
		while (recCount > 0 && recIndex < recCount){
			//while (recCount > 0 && recIndex <= recCount){
			record = fs.getRecord(recIndex);
			var scoper = (record.value_description == "Global Printer") ? scopes.printer : scopes.prefs;
			if (record.field_type == "boolean"){
				scoper[record.field_name] = record.field_value == "true" ? true : false;
			} else {
				try {
					scoper[record.field_name] = record.field_value;
				} catch (e) {}
			}
			recIndex++;
		}

	}
}
/**
 * @properties={typeid:24,uuid:"19986C50-79D2-41A1-A028-B7C60EF3A541"}
 */
function saveScanTransaction(){
	var status = rfSaveScanTransaction(mob.barcode,session.stationId,mob.locationArea);
	if (status){globals.loggerDev(this,'rf Save transaction fail.')}
	currentID = '';
	rfGetLocationStats(mob.locationArea);
	rfGetPiecesScanned(mob.piecemark.piecemark_id, mob.locationArea);
	mobPreviousLocation = mob.locationPrev;
	mobPreviousStatus = mob.statusPrev;
	mobLocationPieces = mob.locationValues.pieces;
	mobLocationWeight = mob.locationValues.weight;
	mobItemPieces = globals.mob.idValues.complete+" / "+scopes.globals.mob.idValues.total;
	loadGetData();
	null;
}
/**
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
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.eq(mob.idfile.idfile_id))
	);
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var resultQ = databaseManager.getFoundSet(q);
	//application.output('DEBUG idfile transaction count '+resultQ.getSize());
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		mob.transactionList.push(rec.status_description_id+"");
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
	var rev = (formName.search('_rev') != -1);
	if (workers == "" || workers == null){
		if (formName == 'rf_mobile_view'){
			rfMobileViewNextField(event);
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

	for (var index = 0;index < workersArray.length;index++){
		if (session.workerList.indexOf(workersArray[index]) == -1){
			errorDialogMobile(event,150,'worker',null);
			formName = event.getFormName();
			//forms[formName].elements.worker.requestFocus();
			forms[formName].resetWorkerCode();
			return true;
		}
	}
	globals.logger(false,message);
	//forms.rf_transactions.controller.focusField('current',true);
	if (formName == 'rf_mobile_view'){
		rfMobileViewNextField(event);
	} else {
		if (rev){
			globals.rfEmptyNextField(event,'revision');
		} else {
			globals.rfEmptyNextField(event,'current');
		}
	}
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
		/** @type {JSFoundset} */
		var transacts = mob.transactions;
		for (var index = 1;index <= transacts.getSize();index++){
			/** @type {JSFoundSet<db:/stsservoy/transactions>} */
			var rec = transacts.getRecord(index);
			//application.output(rec);
			if (rec.trans_status == mob.timedBegStat){ // begin with null end
				globals.logger(true,'start timed status '+mob.timedBegStat);
				if (rec.transaction_end == null){
					globals.logger(true,'start timed status '+mob.timedBegStat+' already started');
					mob.timedError = "1133"; // status not yet ended
					return true;
				}
			}
			if (rec.trans_status == mob.timedEndStat){
				if (rec.trailer_labor_percentage >= 100){
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
		for (index = 1;index <= transacts.getSize();index++){
			/** @type {JSFoundSet<db:/stsservoy/transactions>} */
			rec = transacts.getRecord(index);
			if (application.isInDeveloper()){application.output(rec);}
			if (rec.trans_status != mob.timedEndStat){continue}
			if (rec.trailer_labor_percentage == 100.0){break}
			if (application.isInDeveloper()){application.output('timed rec adding '+rec);}
			mob.timedTotalMin = mob.timedTotalMin*1+rec.transaction_duration*1;
			if (application.isInDeveloper()){application.output('mob total min '+mob.timedTotalMin);}
		}
		for (index = 1;index <= transacts.getSize();index++){
			/** @type {JSFoundSet<db:/stsservoy/transactions>} */
			rec = transacts.getRecord(index);
			if (application.isInDeveloper()){application.output('xxx transaction '+rec);} // look for all unfinished starts, not just ascending first
			if (rec.trans_status == mob.timedBegStat){
				if (rec.transaction_end == null){ // ok to end transaction
					mob.timedBegin = rec.transaction_start;
					mob.timedEnd = endDate;
					mob.timedDuration = getMinutesDuration(mob.timedBegin,mob.timedEnd);
					mob.timedTotalMin = mob.timedTotalMin*1 + mob.timedDuration*1;
					mob.timedTargetRec = rec;
					mob.timedError = "";
					mob.percent = 0;
					var message = 'Total Min:'+Math.ceil((mob.timedTotalMin+0.005)*100)/100+'\nCycle Min:'+Math.ceil((mob.timedDuration*1+0.005)*100)/100+'\nComplete?';
					globals.DIALOGS.setDialogWidth(200);
					globals.DIALOGS.setDialogHeight(200);
					var response = globals.DIALOGS.showQuestionDialog('End of Timed Cycle', message, 'NO', 'yes');
					if (response == 'yes'){
						mob.percent = 100;
					}
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
 * @properties={typeid:24,uuid:"07268947-73C4-4518-A3B5-D6727D5E7548"}
 */
function rfActivity(){
	var formName = application.getActiveWindow().controller.getName();
	switch (formName) {
		case 'rf_transactions':
			return "M";
			break;
		case 'rf_bundles':
			return 'M';
			break;
		default:
			return 'M';
	}
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
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.idfile_id.eq(singleIdfileId))
			//.add(q.columns.trans_status.eq(mob.timedBegStat))
			//.add(q.columns.transaction_start.eq(mob.timedTargetRec.transaction_start))
	);
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
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			//.add(q.columns.idfile_id.eq(singleIdfileId))
			//.add(q.columns.trans_status.eq(mob.timedBegStat))
			.add(q.columns.transaction_date.eq(transactionDate))
	);
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
			.add(q.columns.idfile_id.eq(singleIdfileId))
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
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
 * @SuppressWarnings(wrongparameters)
 */
function rfSaveScanTransaction(routeOK, statusId, sLocation){
	if (statusId == ""){return false}
	// get route and if station is in route, then save else false
	// status out of order, then false
	// if okay for other stations, then true
	
	//rfGetTransactionList(globals.mob.idfile);
	//var routeOK = rfCheckRouteOrder(statusId);
	//application.output('save scan transaction');
	globals.logger(true,'Save scan transaction operation.');
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
	var recordsToSave = [];
	//var transIdfiles = [];
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var newFS = databaseManager.getFoundSet('db:/stsservoy/transactions');
	if (application.isInDeveloper()){application.output('Updating ' + mob.idfiles.length + ' idfiles');}
	//var newRecordCreated = false;
	// status code already captured for this piece?
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var r = databaseManager.createSelect('db:/stsservoy/transactions');
	r.result.add(r.columns.trans_id);
	r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(r.columns.idfile_id.isin(mob.idfiles))
			.add(r.columns.status_description_id.eq(session.stationId))
	);
	var resultQ = databaseManager.getFoundSet(r);
	var resultSize = resultQ.getSize();
	if (resultSize != 0 && !rfScanAgainOk()) {
		errorDialogMobile('rf_transactions.current','403','current');
		if (application.isInDeveloper()){application.output('Status code has already been captured.');}
		//forms['rf_transactions'].elements.current.requestFocus();
		return false;
	}
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var newRec = null;
	for (index = 0; index < mob.idfiles.length; index++) {
		//application.output('inside saving idfiles');
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
			recordsToSave.push(newRec);
		} //else {
		if (routeOK){
			if (application.isInDeveloper()){application.output('newRec created for status '+mob.statusCode);}
			var newRecNum = newFS.newRecord();
			if (newRecNum == -1){
				if (application.isInDeveloper()){application.output('Creating new Record for transactions failed.');}
			}
			/** @type {JSFoundSet<db:/stsservoy/transactions>} */
			var newRecB = newFS.getRecord(newRecNum);
			newRecB.status_description_id = session.stationId;
			//newFS.id_location = sLocation; // location is fabShop
			newRecB.employee_id = session.employeeId; //globals.mobLoggedEmployeeId;//UUID
			newRecB.idfile_id = mob.idfiles[index];
			newRecB.location = mob.locationArea;
			newRecB.transaction_date = new Date();//date;//mob.timedBegin;
			newRecB.transaction_start = date;//mob.timedBegin;
			newRecB.tenant_uuid = session.tenant_uuid;
			newRecB.trans_status = mob.statusCode;
			newRecB.trans_code = rfTransCode();
			newRecB.revision_level = mob.currentRevision;
			newRecB.load_id = session.loadId; //UPDATE to only update on SHIP
			if (mob.timedEnd != ""){
				newRecB.transaction_end = mob.timedEnd;
				newRecB.transaction_duration = mob.timedDuration;
				if (mob.percent > 0){newRecB.trailer_labor_percentage = mob.percent}
				if (mob.percent == 100.0){newRecB.trailer_labor_quantity = 1}
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
			recordsToSave.push(newRecB);
		}
		//}
		//recordsToSave.push(newRec);
	}
	//globals.logger(true,'Saving '+recordsToSave.length+' trans records');
	while (recordsToSave.length > 0){ // always save 'good' transactions 3/4/2015 pp all user entries are saved
		var rec = recordsToSave.pop();
		var status = databaseManager.saveData(rec);
		/**if (!status){
			globals.logger(true,'save of record failed');
		}*/
	}
	if (routeOK){
		var updateIdfileStatus = rfCheckStatusIdfileMax();
		//if (rfCheckStatusIdfileMax()){
			/** @type {QBSelect<db:/stsservoy/idfiles>} */
			var q = databaseManager.createSelect('db:/stsservoy/idfiles');
			q.result.add(q.columns.idfile_id);
			q.result.add(q.columns.current_load_id);
			q.result.add(q.columns.ship_load_id);
			q.result.add(q.columns.received_load_id);
			q.result.add(q.columns.shipped_quantity);
			q.result.add(q.columns.id_location);
			q.result.add(q.columns.status_description_id);
			q.where.add(
			q.and
				.add(q.columns.delete_flag.isNull)
				.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
				.add(q.columns.idfile_id.isin(mob.idfiles))
			);
			resultQ = databaseManager.getFoundSet(q);
			//logger(true,'Updating '+resultQ.getSize()+' idfiles.');
			if (resultQ.getSize() > 0){
				// set previous status and location
				index = 1;
				// Get previous status and location
				/**var record = resultQ.getRecord(1);
				if (!record.status_description_id){
					mob.statusPrev = "";
				} else {
					mob.statusPrev = m.stations[record.status_description_id].split(',')[1];
				}
				mob.locationPrev = (!record.id_location) ? "" : record.id_location;*/
				var saveRec = false;
				while (index <= resultQ.getSize()){
					/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
					var record = resultQ.getRecord(index);
					if (session.loadId != null){
						record.ship_load_id = session.loadId;
					}
					if (mobLoadNumber != "" && session.program == "Shipping"){
						record.ship_load_id = session.loadId;
					}
					if (sLocation != "" && sLocation != null){
						record.id_location = sLocation;
						saveRec = true;
					}
					if (updateIdfileStatus){
						record.status_description_id = statusId;
						saveRec = true;
					}
					if (saveRec){recordsToSave.push(record)}
					index++;
				}
			}
		/**} else {
			//logger(true, 'Status code has already been captured.');
			logger(true,'Status earlier in route. Idfile not updated.');
		}*/
		while (recordsToSave.length > 0){
			rec = recordsToSave.pop();
			status = databaseManager.saveData(rec);
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
 * @param message
 * @param length
 *
 * @properties={typeid:24,uuid:"92EDD6D1-987C-4D8D-BE7A-84ADC79E2947"}
 */
function textWrap(message, length){
	var formatted = '<html>';
	length = 25;
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
	var mobile = (session.program != "STS Desktop");
	if (application.isInDeveloper()){application.output('program '+session.program);}
	session.errorShow = true;
	//if (event.getFormName() != application.getActiveWindow().controller.getName()){return} // 20150402 for errors originating from input fields 
	if (typeof additionalMsg === 'undefined') {additionalMsg = ''}
	if (session.errorElement){
		null;
	} else if (typeof event === 'string') {
		/** @type {String} */
		var resetItem = event;
		resetItem = resetItem.split('.');
		session.errorForm = resetItem[0];
		session.errorElement = resetItem[1];
	} else {
		session.errorForm = event.getFormName();
		session.errorElement = event.getElementName();
	}
	//if (returnField && returnField){
	if (session.errorForm != 'rf_mobile_view'){
		session.errorElementAlt = returnField;
	}
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
	errorMessage = errorMessage + " " + additionalMsg;
	if (mobile){
		globals.rfErrorShow(errorMessage);
	} else {
		DIALOGS.showErrorDialog("Error "+errorNum,errorMessage);
	}
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
	if (application.isInDeveloper()){application.output(message)}
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
	//logger(true,'Exiting form '+formName);
	switch (formName){
		case "STS_main":
			security.logout('STSmobile');
			return;
		default:
			//if (foundset){foundset.clear();}
			win.show('STS_main');
			//win.hide();
			rfFunctionKeys('Main');
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
	if (mobMenuProvider == ""){return} // 20150402 executing twice for some reason unknown
	var progList = application.getValueListArray('rfProgramList');
	var form = event.getFormName();
	var elName = forms[form].elements.mainMenu.getSelectedElements()[0];
	var elIndex = progList.indexOf(elName);
	progList[elIndex] = elName;
	var prog = mobMenuProvider.trim(); // forms[form].elements.mainMenu.getSelectedElements()[0].trim();
	session.program = prog;
	mobProg = prog;
	rfFunctionKeys(prog);
	rfChangeWindow(event,prog);
	mobMenuProvider = "";
	if (application.isInDeveloper()){application.output('EB response '+globals.session.enterpriseBrowser);}
	if (application.isInDeveloper()){application.output('devName '+session.enterpriseBrowser);}
}
/**
 * @param oldValue
 * @param scannedID
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8207B6BB-DA06-4861-8E21-3426C54CCC5F"}
 */
function onDataChangeBarcode2(oldValue, scannedID, event) {
	if (onDataChangeFixEntry(oldValue,scannedID,event)){return true;}
    session.userEntry = scannedID; //session user entry info
    mob.barcode = scannedID;
	var formName = event.getFormName();
	forms[formName].currentID = "";
	var barcodeId = globals.checkBarcode(scannedID);
	if (!barcodeId){
		globals.errorDialogMobile(event,701,'current',null);//701 This ID Number was not found.
		globals.logger(true,'Barcode does not exist.');
		return true;
	}
	rfProcessBarcode(event);
	return true;
}
/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"7B28EFBB-9853-41BD-9E58-29440DEFD658"}
 * @SuppressWarnings(wrongparameters)
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
	forms[formName].lastID = mob.barcode;
	rfGetBarcodeIdfiles()
	if (!barcodeAttached()){
		if (application.isInDeveloper()){application.output('ERROR: Database inconsistent with barcode');}//errortypeneeded
		errorDialogMobile(event,'6002','current');//6002 This item has no associated piecemark.
		logger(true,'No idfiles for this barcode.');
		rfWindowLastInfoClear();
		return true;
	}
	var onHold = barcodeOnHold(); //first check 1/29/2015 pp 
	if (onHold){
		errorDialogMobile(event,'1050','current');//1050 One or more of the ID Numbers are on Hold.
		logger(true,'Idfile reports item on hold.');
		return true;
	}
	rfGetMobIdfile();
	forms[formName].controller.loadRecords(mob.idfilesFS);
	rfGetMobPiecemark(); // Get piecemark record
	if (!barcodePlant()){
		errorDialogMobile(event,'6001','current');//6001 This item doesn't belong to this Division.
		logger(true,'Piecemark is in the wrong plant.');
		return true;
	}
	var bundle = barcodeIsBundle(mob.barcode);
	// Load up the idfiles
	forms[formName].controller.loadRecords(databaseManager.convertToDataSet(mob.idfiles)); // mob.idfiles
	rfGetTransactionList(mob.idfile); 
	rfGetJobUnits();
	rfGetSpecsItem();
	switch (formName){
		case 'rf_transactions':
		case 'rf_transactions_rev':
		case 'rf_inspections':
		case 'rf_inspections_rev':
		case 'rf_shipping':
			if (flagF8){
				rfF8ReversalPrep();
				rfF8ReversalTransaction();
				return true;
			}
			rfWindowLastInfoDisplay(event);
			rfGetPreviousStatusLocation(); // set previous status
			var routeOK = rfCheckRouteOrder(); // route checks out 
			if (!routeOK){
				if (application.isInDeveloper()){application.output('Routing not ok');}
				errorDialogMobile('rf_transactions.current','405','current',missing);//405 
				return true;
			}
			var shipStat = barcodeShip();
			var shipped = barcodeShipped();
			if (shipped){
				if (application.isInDeveloper()){application.output('Barcode already shipped.');}
				errorDialogMobile('rf_shipping.current','708','current');//405 
				return true;
			}
			if (barcodeInAnotherLoad()){
				application.output('Barcode already on another load.');
				errorDialogMobile('rf_shipping.current','951','current');//405 
				return true;				
			}
			if (rfTimed() && (mob.timedError != "")){
					errorDialogMobile(event,mob.timedError,'current');
					logger(true,'Timed status error'+mob.timedError);
					return true;
			}
			saveScanTransaction(); // moved to inside rfTimed where the form query on timed end is located
			rfGetLocationStats(mob.locationArea);
			break;
		case 'rf_bundles': {
			if (flagF8){
				if (!bundleCheckIdInside()){
					errorDialogMobile(event,'701','current',null); // 701 This ID Number Was Not Found.
					return true;
				}
				bundleGetIdfilesByBarcode();
				bundleGetTransactions();
				bundleIdsSaveTo(null);
				bundleDebundle(mob.bundle.transFs);
				//mob.bundle.Id = '';
				forms['rf_bundles'].clearForm('bundle');
				forms['rf_bundles'].piecemark = "** removed **";
				rfGetSpecsBundle();
				mobBundlePieces = mob.bundle.pieces;
				mobBundleWeight = mob.bundle.weight;
				return true;
			}
			// add to bundle
			bundleSaveTo(event);
			rfGetSpecsBundle();
			forms[formName].totalPieces = mob.bundle.pieces;
			forms[formName].totalWeight = mob.bundle.weight;
			break;
		}
		case 'rf_mobile_view': {
			switch (session.program){
				case 'Build Bundles2':
					rfMobileViewNextField(event);
					if (application.isInDeveloper()){application.output('add to bundle');}
					if (flagF8){
						if (!bundleCheckIdInside()){
							errorDialogMobile(event,'701','current','  Item not removed.'); // 701 This ID Number Was Not Found.
							return true;
						}
						bundleGetIdfilesByBarcode();
						bundleGetTransactions();
						bundleIdsSaveTo(null);
						bundleDebundle(mob.bundle.transFs);
						//mob.bundle.Id = '';
						forms['rf_bundles'].clearForm('bundle');
						forms['rf_bundles'].piecemark = "** removed **";
						rfGetSpecsBundle();
						mobBundlePieces = mob.bundle.pieces;
						mobBundleWeight = mob.bundle.weight;
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
				case 'Receiving':
					rfWindowLastInfoDisplay(event);
					rfGetPreviousStatusLocation(); // set previous status
					routeOK = rfCheckRouteOrder(); // route checks out 
					if (!routeOK){
						if (application.isInDeveloper()){application.output('Routing not ok');}
						errorDialogMobile('rf_transactions.current','405','current',missing);//405 
						return true;
					}
					shipStat = barcodeShip();
					shipped = barcodeShipped();
					break;
				case 'Transactions2':
				case 'Transactions2 w/Rev\'s2':
				case 'Inspections2':
				case 'Transactions2 w/Rev\'s2':
				case 'Shipping':
					if (flagF8){
						rfF8ReversalPrep();
						rfF8ReversalTransaction();
						return true;
					}
					rfWindowLastInfoDisplay(event);
					rfGetPreviousStatusLocation(); // set previous status
					missing = ""; //create global temp
					routeOK = rfCheckRouteOrder(); // route checks out 
					if (!routeOK){
						if (application.isInDeveloper()){application.output('Routing not ok');}
						errorDialogMobile('rf_transactions.current','405','current',missing);//405 
						return true;
					}
					shipStat = barcodeShip();
					shipped = barcodeShipped();
					if (shipped){
						if (application.isInDeveloper()){application.output('Barcode already shipped.');}
						errorDialogMobile('rf_shipping.current','708','current');//405 
						return true;
					}
					if (barcodeInAnotherLoad()){
						if (application.isInDeveloper()){application.output('Barcode already on another load.');}
						errorDialogMobile('rf_shipping.current','951','current');//405 
						return true;				
					}
					if (rfTimed() && (mob.timedError != "")){
							errorDialogMobile(event,mob.timedError,'current');
							logger(true,'Timed status error'+mob.timedError);
							return true;
					}
					saveScanTransaction(); // moved to inside rfTimed where the form query on timed end is located
					rfWindowLastInfoDisplay(event);
					rfGetLocationStats2(forms[formName].id_location);
					break;
				case 'Status' :
					rfWindowLastInfoDisplay(event);
					rfGetLocationStats2(forms[formName].id_location);
					break;
				default:
			}
			break;
		}
		default:{}
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
	switch (formName){
		case 'skip':
			rfGetLocationStats(mob.locationArea);
			rfGetPiecesScanned(mob.piecemark.piecemark_id, mob.locationArea);
			mobPreviousLocation = mob.locationPrev;
			mobPreviousStatus = mob.statusPrev;
			mobLocationPieces = mob.locationValues.pieces;
			mobLocationWeight = mob.locationValues.weight;
			mobItemPieces = mob.idValues.complete+" / "+mob.idValues.total;
		case 'rf_bundles':
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
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.isin(mob.idfiles))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
		var record = resultQ.getRecord(1);
		if (!record.status_description_id){
			mob.statusPrev = "";
		} else {
			mob.statusPrev = m.stations[record.status_description_id].split(',')[1];
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.idfile_id.eq(idfileId))
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
	mob.locationArea = newValue;
	switch (formName){
		//case 'rf_inspections':
		//case 'rf_transactions':
		//	rfEmptyNextField(event,'worker');
		//	break;
		case 'rf_shipping':
		case 'rf_bundles':
			//rfEmptyNextField(event,'current');
			//break;
		case 'rf_mobile_view':
			rfMobileViewNextField(event);
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
	var statusCodes = m.statusCodesDiv[session.associationId];
	if (statusCodes.indexOf(newStatus) == -1){
		return null;
	}
	mob.statusCode = newStatus;
	session.stationId = m.stations[session.associationId+', '+mob.statusCode];
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
	forms[session.errorForm].elements[session.errorElement].requestFocus();
	forms[session.errorForm].controller.focusField(session.errorElement,true);
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
 */
function onDataChangeJob(oldValue, newJob, event) {
	if (onDataChangeFixEntry(oldValue,newJob,event)){return true;}
	session.userEntry = newJob;
	var formName = event.getFormName();
	var baseForm = getBaseFormName(null);
	//application.output('base form '+baseForm);
	var fieldName = event.getElementName();
	///var returnField = formName+'.'+fieldName;
	//application.output('return field '+returnField);
	if (newJob == "" || newJob == null){
		forms[formName].controller.focusField(fieldName,true);
		return true;
	}
	if (!rfJobCheck(newJob,session.associationId)){
		//onFocusClear(event);
		// 101 This job number was not found.
		errorDialogMobile(event,101,fieldName,null);
		return true;
	}
	forms[formName].vJobNumber = newJob;
	forms[formName].vCustNumber = "";
	getCustomersByJob();
	
	switch (baseForm){
	case 'piecemark':
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
				application.output('selected input cust id '+ds.customer_id);
				application.output('selected input cust id '+forms[formName].vCustNumber);
				//forms[formName].vCustRec = ds;
				loadPcmkForm();
				forms[formName].elements.shop_order.requestFocus();
				//application.output('cust id '+ds.customer_id);
			} else {
				onFocusTabsSTS(event);
			}
			// load job info
			// calc job weight, load weight
			// 
			break;
		case 'rf_bundles':
			rfEmptyNextField(event,'bundle');
			break;
		case 'rf_shipping':
			rfEmptyNextField(event,'load');
			break;
		case 'rf_mobile_view':
			forms.rf_mobile_view.onElementFocusLost(event);
			break;
		default:
	}
	/**if (formName == 'rf_bundles'){
		rfEmptyNextField(event,'bundle');
	}*/
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
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.job_number.eq(jobNumber))
			.add(q.columns.association_id.eq(associationId))
		);
	var resultQ = databaseManager.getFoundSet(q);
	var size = resultQ.getSize();
	if (size == 0){
		return false;
	}
	if (size > 1){
		application.output('Multiple job numbers.  Should not happen');
	}
	session.jobNumber = jobNumber;
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var rec = resultQ.getRecord(1);
	session.jobId = rec.job_id;
	session.jobLoads = null;
	mob.job.metric = rec.metric_job;
	mob.job.Id = rec.job_id;
	return true;
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} bundle new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7A558DA6-FB57-40FA-AA5A-D44A5091208E"}
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
	var formName = event.getFormName();
	if (onDataChangeFixEntry(oldValue,bundle,event)){return true;}
	if (bundle == "L"){
		onFocusClear(event);
		rfShowBundlesNames(session.jobId);
		return true;
	}
	rfShowBundlesNames(session.jobId);
	session.userEntry = bundle;
	//var jobId = session.jobId;
	//application.output('uuid '+application.getUUID(application.getUUID()));
	if (!barcodeIsBundle(bundle)){
		forms[formName].clearForm();
		// create bundle id code, no response on input, so create next bundleId
		// dialog to accept next bundle number
		bundleCreateValid();
		var message = 'Do you wish to use the new Bundle Number: '+session.bundlePrefix+session.bundleSuffix;
		var response = globals.DIALOGS.showQuestionDialog('New Bundle Number?', message, 'NO', 'yes');
		if (response == 'NO'){
			mob.bundle.Id = "";
			onFocusClear(event);
			return true;
		} else {
			mob.bundle.Id = session.bundlePrefix+session.bundleSuffix;
			forms[formName].currentBundle = mob.bundle.Id;
		}
	} else {
		// barcode has items, is it for this job? Create new dialog for new bundle
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = mob.bundleFS.getRecord(1);
		var bundleJobId = rec.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.job_id;
		if (bundleJobId+'' != session.jobId+''){
			mob.bundle.Id = "";
			// 730 This Bundle Number Does Not Belong To This Job.
			errorDialogMobile(event,730,'bundle',null);
			return true;
		} else {
			mob.bundle.Id = bundle;
		}
	}
	rfGetSpecsBundle();
	if (formName == 'rf_mobile_view'){
		rfMobileViewNextField(event);
	} else {
		onFocusSet(event,mob.bundle.Id,'status');
	}
	return true;
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
	// idfile.bundle_id.length <= 30
	bundlePrefixSet();
	var bundlePrefix = session.bundlePrefix;
	var serialLength = scopes.prefs.barcodeLength - 5;
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
	serial = countUpNumbers2(serial);
	serial = utils.stringRight(serial, serialLength);
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
	q.result.add(q.columns.bundle_id);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);
	
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.idfile_id.isin(mob.idfiles))
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.bundle_id.eq(mob.bundle.Id))
		);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
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
	q.result.add(q.columns.bundle_id);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);
	
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.bundle_id.eq(mob.bundle.Id))
		);
	mob.bundleFS = databaseManager.getFoundSet(q);
}
/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"430F742C-49E5-4831-9BF7-E53F47DDFC66"}
 */
function bundleIdsSaveTo(event){
	var idfilesFS = mob.bundleFS;
	var bulk = databaseManager.getFoundSetUpdater(idfilesFS);
	switch (flagFunction){
		case 'rfF8BundleRemoveFrom':
		case 'rfF4BundleClear':
			bulk.setColumn('bundle_id','');
			break;
		default:
			idfilesFS = mob.idfilesFS;
			bulk = databaseManager.getFoundSetUpdater(idfilesFS);
			bulk.setColumn('bundle_id',mob.bundle.Id);
			if (mob.locationArea != null && mob.locationArea.length != 0){
				bulk.setColumn('id_location',mob.locationArea);
			}
	}
	
	bulk.performUpdate();
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
	var recordsToSave = [];
	/** @type {JSFoundSet<db:/stsservoy/transactions>} */
	var transFS = databaseManager.getFoundSet('db:/stsservoy/transactions');
	var newRec = null;
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
			recordsToSave.push(newRec);
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
			transFS.transaction_date = new Date();//date;//mob.timedBegin;
			transFS.transaction_start = date;//mob.timedBegin;
			transFS.tenant_uuid = session.tenant_uuid;
			transFS.trans_status = mob.statusCode;
			transFS.trans_code = rfTransCode();
			if (event.getFormName() == 'rf_bundles'){
				transFS.bundle_id = mob.bundle.Id;
			}
			if (mob.timedEnd != ""){
				transFS.transaction_end = mob.timedEnd;
				transFS.transaction_duration = mob.timedDuration;
				if (mob.percent > 0){transFS.trailer_labor_percentage = mob.percent}
				if (mob.percent == 100.0){transFS.trailer_labor_quantity = 1}
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
			recordsToSave.push(transFS);
		}
	}
	while (recordsToSave.length > 0){
		/** @type JSRecord */
		var rec = recordsToSave.pop();
		var status = databaseManager.saveData(rec);
		if (!status){globals.loggerDev(this,'save of record failed')}
	}
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
			.add(q.columns.bundle_id.eq(''))
		);
	var resultQ = databaseManager.getFoundSet(q);
	if (resultQ.getSize() > 0){
		return false;
	}
	return true;
}
/**
 * @properties={typeid:24,uuid:"61115E9F-582C-4158-98FF-181D71C46EE9"}
 */
function rfF4BundleClear(){
	if (application.isInDeveloper()){application.output(flagFunction);}
	//flagFunction = null;
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
	var inProgress = (thisFunction == flagFunction); // toggle function
	flagFunction = (inProgress) ? null : thisFunction;
	/**
	 * set all idfiles with bundle id to empty string
	 * set all transactions for idfiles to FABDB
	 */
	var deleteBundle = globals.DIALOGS.showQuestionDialog('Delete Bundle?','YES','no');
	if (deleteBundle == "no"){
		flagFunction = null;
		return;
	}
	bundleGetIdfilesByBundle();
	bundleGetTransactions();
	bundleIdsSaveTo(null);
	bundleDebundle(mob.bundle.transFs);
	mob.bundle.Id = '';
	//forms['rf_bundles'].currentBundle = "";
	forms['rf_bundles'].clearForm('job');
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
			transFS.trailer_labor_percentage
			transFS.trailer_labor_quantity
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
		bundIdfiles.push(rec.idfile_id);
	}
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var q = databaseManager.createSelect('db:/stsservoy/transactions');
	q.result.add(q.columns.trans_id);
	q.result.add(q.columns.bundle_id);
	q.result.add(q.columns.location);
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.employee_id);
	q.result.add(q.columns.transaction_date);
	q.result.add(q.columns.transaction_start);
	q.result.add(q.columns.transaction_end);
	q.result.add(q.columns.trans_status);
	q.result.add(q.columns.trans_code);
	q.result.add(q.columns.trailer_labor_percentage);
	q.result.add(q.columns.trailer_labor_quantity);
	q.result.add(q.columns.worker_id);
	q.result.add(q.columns.worker2_id);
	q.result.add(q.columns.worker3_id);
	q.result.add(q.columns.worker4_id);
	q.result.add(q.columns.worker5_id);
	q.result.add(q.columns.edit_date);

	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.idfile_id.isin(bundIdfiles))
			.add(q.columns.bundle_id.eq(mob.bundle.Id))
			.add(q.columns.trans_code.eq('FABMO'))
			.add(q.columns.status_description_id.eq(session.stationId))
		);
	mob.bundle.transFs = databaseManager.getFoundSet(q);
}
/**
 * @properties={typeid:24,uuid:"36DBC95D-B108-4C6D-8CCA-E10BD7E7C3D9"}
 */
function bundleDebundle(debundleFS){
	var date = new Date();
	var transSet = databaseManager.getFoundSetUpdater(debundleFS);
	transSet.setColumn('trans_code','FABDB');
	transSet.setColumn('edit_date',date);
	transSet.performUpdate();
}
/**
 * @properties={typeid:24,uuid:"41A77946-EDDE-42A4-AE5C-439FEAD6E4CB"}
 */
function rfF8BundleRemoveFrom(){
	var formName = application.getActiveWindow().controller.getName();
	if (forms[formName].currentBundle == "" || forms[formName].currentStatus == "" || forms[formName].currentJob == ""){return}
	var thisFunction = thisFuncName(arguments.callee.toString());
	if (flagFunction != null && thisFunction != flagFunction){return} // another function active
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
	
}
/**
 * @properties={typeid:24,uuid:"2A4C51DF-ADA9-41D8-A90C-58CD628A7D94"}
 */
function rfF5BundlePrint(){
	
}
/**
 * @properties={typeid:24,uuid:"C6BC4E31-48AF-4700-B20B-19AE5A8F3D9A"}
 */
function rfF6BundlePrintList(){
	
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
	if (newValue == null || newValue == ""){return false}
	var formName = event.getFormName().trim();
	var elemName = event.getElementName();
	var entry = event.getSource().getDataProviderID();
	var form = forms[formName];
	//var value = variable[entry];
	if (newValue.length == 1){
		if (newValue.search(/[R-Z]/) != -1){
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
	while (index <= mob.bundleFS.getSize()){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = mob.bundleFS.getRecord(index);
		count = count*1+rec.original_quantity*1;
		var pcmkWght = (mob.job.metric) ? rec.sts_idfile_to_pcmks.item_weight : rec.sts_idfile_to_pcmks.item_weight_lbs;
		weight = weight*1+rec.original_quantity*pcmkWght;
		index++;
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
	q.result.add(q.columns.bundle_id);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);
	
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.bundle_id.eq(mob.bundle.Id))
			.add(q.columns.id_serial_number_id.eq(mob.barcodeId))
		);
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
	session.userEntry = newValue;
	mob.currentRevision = newValue;
	///var formName = event.getFormName();
	rfEmptyNextField(event,'current');
	return true
}
/**
 * @properties={typeid:24,uuid:"5ABFDE9C-5CA7-4725-8FA3-979017DF804D"}
 */
function setTransShop(){
	var win = application.getActiveWindow();
	var formName = win.controller.getName();
	if (globals.transShopText[formName] == undefined){
		globals.transShopText[formName] = forms[formName].elements.transShop.text;
	}
	forms[formName].elements.transShop.text = globals.transShopText[formName]+" "+globals.session.association;
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
	session.jobIdBack = session.jobId;
	session.jobId = forms[formName].vJobRec.job_id;
	if (newValue == "ALL" || loadNumberCheck(newValue)){// need to use existing load number of receiving, etc
		session.userEntry = newValue;
		session.loadNumber = newValue;
		mobLoadNumber = newValue;
		if (application.isInDeveloper() && newValue == "ALL"){
			rfMobileViewNextField(event);// JMC pass for additional testing
		}
		//loadGetData();
	} else {
		onFocusClear(event);
	}
	//session.loadIdBack = session.loadId;
	//session.loadId = mob.load.currentId;
	mobLoadWeight = 0;
	if (newValue && newValue != ""){
		rfGetSpecsLoad(session.program);
	}
	//session.loadId = session.loadIdBack;
	session.jobId = session.jobIdBack;
	//if (formName == 'rf_mobile_view'){
	switch (baseForm) {
		case 'piecemark':
			application.output('form '+formName+' session '+session.program);
			forms[formName].vLoadWeight = mobLoadWeight;
			
			break;
		default:
			rfMobileViewNextField(event);
	}
	//} else {
	//	forms[formName].elements.status.requestFocus();
	//}
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
 * @properties={typeid:24,uuid:"B9F40AA1-D225-4798-B459-69464D66EC48"}
 */
function loadCreateValid(){
	session.jobLoads.newRecord();
	/** @type {JSFoundSet<db:/stsservoy/loads>} */
	var rec = session.jobLoads.getRecord(1);
	rec.job_id = session.jobId;
	rec.tenant_uuid = session.tenant_uuid;
	rec.edit_date = new Date();
	rec.interim_load = 0;
	if (session.jobLoads.getSize() == 0){
		rec.load_number = "";
	} else {
		rec.load_number = session.loadNextNumber;
	}
	session.loadId = rec.load_id;
	databaseManager.saveData(rec);
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
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.job_id.eq(jobId))
		);
	var resultQ = databaseManager.getFoundSet(q);
	return resultQ;
}
/**
 * @param loadNumber
 *
 * @properties={typeid:24,uuid:"D58305BB-65A5-408E-8A59-65F09D000020"}
 */
function loadNumberCheck(loadNumber){
	session.jobLoads = loadGetJobDataset(session.jobId);
	session.loadId = null;
	var loadRecs = session.jobLoads; // shorter name for session.jobLoads
	for (var index = 1;index <= loadRecs.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		var rec = loadRecs.getRecord(index);
		if (rec.load_number*1 == loadNumber*1){
			session.loadId = rec.load_id;
			break;
		}
		if (session.loadNextNumber == ""){session.loadNextNumber = 0}
		session.loadNextNumber = (session.loadNextNumber < rec.load_number) ? rec.load_number : session.loadNextNumber;
	}
	if (!session.loadId){ // receiving cannot create new load numbers
		switch (session.program){
		case 'Receiving':
			// error message that must use existing load number, number does not exist
			globals.errorDialogMobile(null,301,'loadnumber',null);//301 This Load was not found.
			globals.logger(true,'Load Number does not exist.');
			return true;
			break;
		default:
			session.loadNextNumber++;
			var message = 'Do you wish to use the new Load Number: '+session.loadNextNumber;
			var response = globals.DIALOGS.showQuestionDialog('New Load Number?', message, 'NO', 'yes');
			if (response == 'NO'){
				session.loadId = null;
				session.loadNextNumber = 0;
				//onFocusClear(event);
				return false;
			} else {
				loadCreateValid();
			}
		}
	}
	mob.load.currentId = session.loadId;
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
	//plugins.WebClientUtils.executeClientSideJS('localStorage.fred="dog";');
	//plugins.WebClientUtils.executeClientSideJS('alert("ls length "+localStorage.length);');
	//plugins.WebClientUtils.executeClientSideJS('alert(localStorage.browser);');
	//rfGetLocalStorage('deviceName');
	//application.output(session.localStorage);
	application.output('--------------------------\nbrowser: '+session.browser+'\nDevice: '+session.enterpriseBrowser+ '\n---');

}
/**
 * @param args
 *
 * @properties={typeid:24,uuid:"DEFBE01A-664B-4492-8C12-3C541DA82AE3"}
 */
function rfPageIsLoaded(args){
	rfGetLocalStorage('device');
	rfGetLocalStorage('browser');
	application.output('Initial browser: '+session.browser+'\nDevice: '+session.enterpriseBrowser+ '\n---');
	rfGetWebBrowser();
	rfGetMobileDevice();
	//plugins.WebClientUtils.executeClientSideJS('var p2browser=navigator.userAgent;',globals.rfWebBrowser,['p2browser']);
	//plugins.WebClientUtils.executeClientSideJS('var p2deviceName=EB.System.getProperty("deviceName");',globals.rfEBdeviceName,['p2deviceName']);
	
	application.output('Page is loaded\n--------------------------------------------------\nbrowser: '+session.browser+'\nDevice: '+session.enterpriseBrowser+ '\n---');
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
	q.result.add(q.columns.bundle_id);
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);
	
	if (session.loadNumber == "ALL"){
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			//.add(q.columns.ship_load_id.eq(session.loadId))
		);
	} else {
		q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.ship_load_id.eq(session.loadId))
		);
	}
	var samp = databaseManager.getFoundSet(q);
	application.output('load size '+samp.getSize()+' load '+session.loadId+' session '+session.tenant_uuid);
	var weight = 0;
	var count = 0;
	for (var index = 1;index <= samp.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = samp.getRecord(index);
		count = count+rec.original_quantity;
		weight = weight+rec.original_quantity*rec.sts_idfile_to_pcmks.item_weight;
		
	}
	mob.load.pieces = count;
	mob.load.weight = weight;
	mobLoadWeight = mob.load.weight;
	mobLoadPieces = mob.load.pieces;
	mobWeightUnits = (mob.job.metric == 1) ? 'kgs' : "lbs";
	mobLengthUnits = (mob.job.metric == 1) ? "mm" : "ins";
}
/**
 * @properties={typeid:24,uuid:"E4E8F337-8479-4FED-99BD-33061E69290D"}
 */
function barcodeShipped(){
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfile = mob.idfile;
	return (idfile.ship_load_id != null);
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
	return (idfile.ship_load_id != null && idfile.ship_load_id != mob.load.shipId);
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
	convertType = convertType.toUpperCase();
	returnType = returnType.toUpperCase();
	///var itemdimen = "";
	var fractionOut = "";
	var feet = 0;
	var base = 64;                           //denominator of fraction
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
			inches = number - (Math.floor(number/12)*12);
			feet = Math.floor((number - inches)/12);
			if (fraction > 0){
				while (base > 0){
					number2 = Math.floor(fraction * base);
					number16 = Math.round(fraction * base);//init16 = ROUND((FRAC * BASE),0)
					if (application.isInDeveloper()){application.output(number16+"/"+base);}
					if (number16/2 != Math.floor(number16/2)){
						break;
					}
					base = base / 2;
				}
				fractionOut = number16+"/"+base+'"';
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
					var itemdimen = feet + "'-" + number + " " + number2 + "/" + base + '"';
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
	length = ""; var space = ''; // was var length = ""
		switch( returnType ){
		case 'FEET':
			feet =  number + "    ";
			return feet.substr(0,length);
		case 'INCH':
			number = number + "    ";
			return number.substr(0,length);
		case 'NUMERATOR':
			return number2.toString();
			break;
		case 'DENOMINATOR':
			return (number2 > 0) ? base.toString() : "0";
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
			if (feet != 0){length = feet+"'";space = " ";}
			if (inches != 0){length += space+inches}
			if (fractionOut != "0\""){
				space = "-";
			}
			length += space+fractionOut;
			
			
			return length;
		}

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
	return Math.floor(((mm * 0.03937) * 16)+0.5)/16;
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
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
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
	/** @type {Array} */
	var arrayN = itemCSV.split(",");
	var arrayStr = "(";
	var comma = ",";
	var length = arrayN.length;
	for (var index = 0;index<length;index++){
		if (index == length-1){comma = ""}
		arrayStr = arrayStr+"\'"+arrayN[index]+"\'"+comma;
	}
	arrayStr = arrayStr+")";
	if (arrayStr == "(\'\')"){arrayStr = null}
	return arrayStr;
}
/**
 * @AllowToRunInFind
 * 
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"2D8CBAC7-3115-462E-ACF6-C8B83D4FFF29"}
 */
function convertLoadToId(itemCSV){
	if (itemCSV == ""){return null}
	var arrayN = [];
	arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return null}
	/** @type {JSFoundSet<db:/stsservoy/loads>} */
	var fs = databaseManager.getFoundSet('stsservoy','loads');
	var idCSV = "";
	for (var index = 0;index < arrayN.length;index++){
		if (fs.find()){
			fs.load_number = arrayN[index];
			if (fs.search()){
				var rec = fs.getRecord(1);
				idCSV = idCSV + "," + rec.load_id;
			}
		}
	}
	if (idCSV == "") {return null}
	idCSV.replace(",","");
	return arrayToString(idCSV);
}
/**
 * @AllowToRunInFind
 * 
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"D8C680C8-6A17-45C3-9EAE-33E04698072F"}
 */
function convertLotToId(itemCSV){
	if (itemCSV == ""){return null}
	var arrayN = [];
	arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return null}
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	var idCSV = "";
	for (var index = 0;index < arrayN.length;index++){
		if (fs.find()){
			fs.lot = arrayN[index];
			if (fs.search()){
				var rec = fs.getRecord(1);
				idCSV = idCSV + "," + rec.lot_id;
			}
		}
	}
	if (idCSV == "") {return null}
	idCSV.replace(",","");
	return arrayToString(idCSV);
}
/**
 * @AllowToRunInFind
 * 
 * @param itemCSV
 *
 * @properties={typeid:24,uuid:"104D841A-A708-4C74-912B-781B2DF40D1E"}
 */
function xxxunusedconvertPkgToId(itemCSV){
	if (itemCSV == ""){return null}
	var arrayN = [];
	arrayN = itemCSV.split(",");
	if (arrayN.length == 0){return null}
	/** @type {JSFoundSet<db:/stsservoy/lots>} */
	var fs = databaseManager.getFoundSet('stsservoy','lots');
	var idCSV = "";
	for (var index = 0;index < arrayN.length;index++){
		if (fs.find()){
			fs.lot = arrayN[index];
			if (fs.search()){
				var rec = fs.getRecord(1);
				idCSV = idCSV + "," + rec.lot_id;
			}
		}
	}
	if (idCSV == "") {return null}
	idCSV.replace(",","");
	return arrayToString(idCSV);
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
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = 1;
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"01EEEFF1-ECEB-427E-A911-AABF52889598"}
 */
function onActionClearAll(event) {
	var formName = event.getFormName();
	var formTable = formName+"_table";
	/** @type {JSFoundset} */
	var fs = forms[formTable].foundset;
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = 0;
	}
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
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = (rec.lprint != 1) ? 1 : 0;
	}
}
/**
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0DE21EDC-A226-44B7-8BAA-3302E90589C0"}
 */
function rfMobileViewNextField(event){
	if (event.getFormName() != 'rf_mobile_view'){return}
	/** @type {Array} */
	var entryFields = forms['rf_mobile_view'].tabFieldOrder;
	var currentField = event.getElementName();
	var index = entryFields.indexOf(currentField);
	index = (index < entryFields.length-1) ? ++index : index;
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
		mobItemLength = sts_idrepfile_idfile.sts_idfile_to_pcmks.item_length_in;
		mobItemLength = ftDecToString('INCHES',sts_idrepfile_idfile.sts_idfile_to_pcmks.item_length_in,12,'');
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
	rfGetJobIdfileIds();
	/** @type {QBSelect<db:/stsservoy/heats>} */
	var s = databaseManager.createSelect('db:/stsservoy/heats');
	s.result.add(s.columns.heat_number);
	s.result.add(s.columns.heat_id);
	s.where.add(
		s.and
			.add(s.columns.delete_flag.isNull)
			.add(s.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(s.columns.idfile_id.isin(mob.idfileIds))
			.add(s.columns.heat_number.eq(newValue))
	);
	/** @type {JSFoundSet<db:/stsservoy/heats>} */
	var fs3 = databaseManager.getFoundSet(s);
	if (fs3.getSize() == 0){
		globals.logger(true,newValue+' heat not found on this job# '+session.jobNumber);
		var message = 'Do you wish to use the new HEAT Number: '+newValue;
		var response = globals.DIALOGS.showQuestionDialog('New HEAT Number?', message, 'NO', 'yes');
		if (response == 'NO'){//JOEJOEJOE
			newValue = oldValue;
		} else {
			globals.logger(true,newValue+' heat created for job# '+session.jobNumber);
			var fs = databaseManager.getFoundSet('stsservoy','heats');
			/** @type {JSFoundSet<db:/stsservoy/heats>} */
			var rec = fs.newRecord();
			rec.heat_number = newValue;
			rec.tenant_uuid = session.tenant_uuid;
			rec.edit_date = new Date();
		}
		newValue = oldValue;
		return true;
	}
	rfMobileViewNextField(event);
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
	var baseForm = getBaseFormName(null);
	//application.output('base form '+baseForm);
	session.jobIdBack = session.jobId;
	if (baseForm.search('piecemark') != -1){
		session.jobId = forms[formName].vJobRec.job_id;
	}
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q = databaseManager.createSelect('db:/stsservoy/sheets');
	q.result.add(q.columns.sheet_id);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.job_id.eq(session.jobId))
	);
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet(q);
	session.jobId = session.jobIdBack;

	for (var index = 1;index <= fs.getSize();index++){
		var rec = fs.getRecord(index);
		sheetList.push(rec.sheet_id);
	}
	// get piecemark info, jobs = sheets - piecemarks
	// get locations
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
			.add(r.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(r.columns.sheet_id.isin(sheetList))
			.add(r.or
				.add(r.columns.piecemark.eq(piecemark))
				.add(r.columns.material.eq(piecemark))
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
		globals.errorDialogMobile(event,'27','current');// message 27 piecemark not found on this job
		globals.logger(true,piecemark+' piecemark not found on this job# '+session.jobNumber);

		forms[formName].clearForm();
		clearMobCalcsDisplay();
		return true;
	}
	var pcmks = [];
	for (index = 1;index <= fs2.getSize();index++){
		rec = fs2.getRecord(index);
		pcmks.push(rec.piecemark_id);
	}


	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var s = databaseManager.createSelect('db:/stsservoy/idfiles');
	s.result.add(s.columns.id_location);
	s.result.add(s.columns.piecemark_id);
	s.where.add(
		s.and
			.add(s.columns.delete_flag.isNull)
			.add(s.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
			/** @type {JSFoundSet<db:/stsservoy/sequences>} */
			var seqDs = getSequenceNumbers();
			if (seqDs.getMaxRowIndex() == 1){
				seqDs.rowIndex = 1;
				thisForm.vSequenceNumber = seqDs.sequence_number;
			} else {
				thisForm.vSequenceNumber = "";
			}
			//getResetPcmkCounts();
			onFocusTabsSTS(event);
			break;
		default:
			
	}
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
	/** @type {QBSelect<db:/stsservoy/sequences>} */
	var s = databaseManager.createSelect('db:/stsservoy/sequences');
	s.result.add(s.columns.sequence_number);
	s.result.add(s.columns.sequence_id);
	s.where.add(
		s.and
			.add(s.columns.delete_flag.isNull)
			.add(s.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(s.columns.job_id.eq(mob.job.Id))
			.add(s.columns.sequence_number.eq(newValue))
	);
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
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
			application.output('hello joe');
			getResetPcmkCounts();
			break;
		}
		default:
	}
	rfMobileViewNextField(event);
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
	q.result.add(q.columns.bundle_id);
	//q.result.add(q.columns.id_location);
	q.result.add(q.columns.piecemark_id);
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			//.add(q.columns.bundle_id.eq(bundleId))
		);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	mob.bundlesJobs = [];
	var bundles = [];
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index);
		var bundle = rec.bundle_id;
		if (bundles.indexOf(bundle) != -1){continue}
		bundles.push(bundle);
		var jobId = rec.sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.job_id;
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
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.idfile_id);
	if (loadType.search('Ship') != -1){
		q.result.add(q.columns.ship_load_id,'load_id');
	} else if (loadType == 'Receiving'){
		q.result.add(q.columns.received_load_id,'load_id');
	} else {
		q.result.add(q.columns.current_load_id,'load_id');
	}
	q.result.add(q.columns.id_location);
	q.result.add(q.columns.receive_quantity);
	q.result.add(q.columns.original_quantity);
	if (loadType.search('Ship') != -1){
		q.where.add(
			q.and
				.add(q.columns.delete_flag.isNull)
				.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
				.add(q.columns.ship_load_id.eq(session.loadId))
			);
	} else if (loadType.search('Receiv') != -1){
		q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.received_load_id.eq(session.loadId))
		);
	} else {
		q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(q.columns.current_load_id.eq(session.loadId))
		);

	}
	var loadFS = databaseManager.getFoundSet(q);
	if (application.isInDeveloper()){application.output('load id '+session.loadId+ ' size '+loadFS.getSize());}
	index = 1;
	var piecemarkIds = [];
	while (index <= loadFS.getSize()){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = loadFS.getRecord(index++);
		if (piecemarkIds.indexOf(rec.piecemark_id) == -1) {piecemarkIds.push(rec.piecemark_id);}
	}
	
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var r = databaseManager.createSelect('db:/stsservoy/piecemarks');
	r.result.add(r.columns.piecemark_id);
	r.result.add(r.columns.item_weight);
	r.result.add(r.columns.item_weight_lbs);
	r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(session.tenant_uuid))
			.add(r.columns.piecemark_id.isin(piecemarkIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var resultP = databaseManager.getFoundSet(r);
	
	index = 1;
	while (index <= loadFS.getSize()){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		rec = loadFS.getRecord(index++);
		resultP.loadRecords(rec.piecemark_id);
		var pieces = (rec.summed_quantity != 0) ? rec.summed_quantity : rec.original_quantity;
		var itemWeight = (mob.job.metric) ? resultP.item_weight_lbs*pieces : resultP.item_weight*pieces;
		count = count*1 + pieces*1;
		weight = weight*1 + itemWeight*1;
	}
	mob.load.pieces = count;
	mob.load.weight = weight;
	mobLoadPieces = count;
	mobLoadWeight = weight;
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.job_id.eq(session.jobId))
	);
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet(q);
	for (var index = 1;index <= fs.getSize();index++){
		var rec = fs.getRecord(index);
		sheetList.push(rec.sheet_id);
	}
	// get piecemark info, jobs = sheets - piecemarks
	// get locations
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var r = databaseManager.createSelect('db:/stsservoy/piecemarks');
	r.result.add(r.columns.piecemark_id);
	r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(r.columns.sheet_id.isin(sheetList))
	);
	r.result.distinct = true;
	sheetList = [];
	var pmList = [];
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs2 = databaseManager.getFoundSet(r);
	for (index = 1;index <= fs2.getSize();index++){
		rec = fs2.getRecord(index);
		pmList.push(rec.piecemark_id);
	}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */	
	var s = databaseManager.createSelect('db:/stsservoy/idfiles');
	s.result.add(s.columns.idfile_id);
	s.where.add(
	s.and
		.add(s.columns.delete_flag.isNull)
		.add(s.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(s.columns.piecemark_id.isin(pmList))
	);
	s.result.distinct = true;
	mob.idfileIds = [];
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var fs3 = databaseManager.getFoundSet(s);
	for (index = 1;index <= fs3.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		rec = fs3.getRecord(index);
		mob.idfileIds.push(rec.idfile_id);
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
	var winName = win.controller.getName();
	if (event){
		winName = event.getFormName();
	}
	///Rapplication.output('win name '+winName);
	//var formName = event.getFormName();
	winName = winName.replace('_table','');//special case of dynamic table creation
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
	var baseForm = getBaseFormName(null);
	if (baseForm.search('piecemark') == -1){return null}
	application.output('job '+formName);
	var jobNum = forms[formName].vJobNumber;
	// Look in session.jobId
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = databaseManager.getFoundSet('stsservoy','jobs');
	var custNum = [];
	var custId = [];
	var custIds = "";
	if (fs.find()){
		//if (jobNum){
			fs.job_number = jobNum;
		//}
		fs.association_id = session.associationId;
		var count = fs.search();
		if (count == 0){return null}
		for (var index = 1;index <= count;index++){
			var rec = fs.getRecord(index);
			custIds = custIds + rec.customer_id;
			if (index != count){
				custIds = custIds + "||";
			}
		}
		/** @type {JSFoundSet<db:/stsservoy/customers>} */
		var fs2 = databaseManager.getFoundSet('stsservoy','customers');
		if (fs2.find()){
			fs2.customer_id = custIds;
			var count2 = fs2.search();
			for (index = 1;index <= count2;index++){
				rec = fs2.getRecord(index);
				custId.push(rec.customer_id);
				custNum.push(rec.customer_number);
			}
		}
		var ds = databaseManager.convertToDataSet(fs2,['customer_number','customer_id']);
		//for (var index = 1;index <= ds.getMaxRowIndex();index++){
		//	ds.rowIndex = index;
		//	application.output('ds '+ds.rowIndex);
		//}
		//application.output('ds '+ds)
		return ds;
		//application.setValueListItems('stsvlt_custIdByJob',custNum,custId);
	}
	return null;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B86D58A1-B549-4E54-A8CC-DFA9033F8520"}
 */
function getJobsByAssoc(){
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = databaseManager.getFoundSet('stsservoy','jobs');
	var jobNum = [];
	var jobId = [];
	var assocId = session.associationId;
	if (fs.find()){
		fs.association_id = assocId;
		var count = fs.search();
		for (var index = 1;index <= count;index++){
			var rec = fs.getRecord(index);
			jobId.push(rec.job_id);
			jobNum.push(rec.job_number);
		}
		//application.setValueListItems('stsvlg_jobsByAssoc',jobNum,jobId);
		application.setValueListItems('stsvlg_jobsByAssoc',jobNum);
	}
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
	var baseForm = getBaseFormName(null);
	application.output('base form '+baseForm);
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
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = databaseManager.getFoundSet('stsservoy','jobs');
	var rec = null;
	if (fs.find()){
		fs.customer_id = custId;
		fs.job_number = jobNum;
		fs.delete_flag = '^';
		if (fs.search() != 0){
			rec = fs.getRecord(1); // There is only one job with custId and jobNum
		}
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

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	//q.result.add(q.columns.idfile_id);
	q.result.add(q.columns.shop_order);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
	var jobId = form.vJobId;
	application.output('job id '+form.vJobId);
	var sheets = [];
	/** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet('stsservoy','sheets');
	if (fs.find()){
		fs.job_id = jobId;
		fs.delete_flag = '^';
		var count = fs.search();
		if (count){//just iterate through.  Will not be many sheets.
			for (var index = 1;index <= count;index++){
				var rec = fs.getRecord(index);
				sheets.push(rec.sheet_id+"");
			}
		}
	}
	return sheets;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"2C59365F-8D31-481F-971A-DD4165853464"}
 */
function getSheetIdPcmks(){
	var sheetList = "";
	var form = forms[getFormName()];
	var sheetCount = form.vSheetIds.length;
	if (sheetCount == 0){return []}
	for (var index = 0;index < sheetCount;index++){
		sheetList = sheetList + form.vSheetIds[index];
		if (index != (sheetCount-1)){
			sheetList += "||";
		}
	}
	application.output('sheet count '+sheetCount+' list '+sheetList);
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs = databaseManager.getFoundSet('stsservoy','piecemarks');
	var piecemarkIds = [];
	application.output('find ');
	if (fs.find()){
		fs.sheet_id = sheetList;
		fs.delete_flag = '^';
		var count = fs.search();
		application.output('count search '+count);
		if (count){
			index = 1;
			while (index <= fs.getSize()){
				var rec = fs.getRecord(index);
				piecemarkIds.push(rec.piecemark_id);
				index++;
			}
		}
	}
	application.output('pcmks '+piecemarkIds);
	return piecemarkIds;
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4DEED7A7-1612-496F-BCAF-59F29226F01F"}
 */
function getPcmkIdIdfiles(){
	var pcmkList = "";
	var form = forms[getFormName()];
	var pcmkCount = form.vPcmkIds.length;
	if (pcmkCount == 0){return []}
	for (var index = 0;index < pcmkCount;index++){
		pcmkList = pcmkList + form.vPcmkIds[index];
		if (index != (pcmkCount-1)){
			pcmkList += "||";
		}
	}
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var fs = databaseManager.getFoundSet('stsservoy','idfiles');
	var idfileIds = [];
	if (fs.find()){
		fs.piecemark_id = pcmkList;
		fs.tenant_uuid = session.tenant_uuid;
		fs.delete_flag = '^';
		var count = fs.search();
		if (count){
			index = 1;
			while (index <= fs.getSize()){
				var rec = fs.getRecord(index);
				idfileIds.push(rec.idfile_id);
				index++;
			}
		}
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
			.add(r.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
			.add(r.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
			.add(r.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
		application.output('pcmk rec '+form.vItemRec);
	}
	if (application.isInDeveloper()){application.output('pcmk id '+pcmkId)}
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.result.add(q.columns.sequence_id);
	q.result.distinct = true;
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.piecemark_id.eq(pcmkId))
	);
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var resultQ = databaseManager.getFoundSet(q);
	var sequenceIds = [];
	var index = 1;
	while (index <= resultQ.getSize()){
		var rec = resultQ.getRecord(index);
		if (sequenceIds.indexOf(rec.sequence_id+"") == -1){sequenceIds.push(rec.sequence_id+"");}
		index++;
	}
	
	/** @type {QBSelect<db:/stsservoy/sequences>} */
	var r = databaseManager.createSelect('db:/stsservoy/sequences');
		r.result.add(r.columns.sequence_number);
		r.result.distinct = true;
		r.where.add(
		r.and
			.add(r.columns.delete_flag.isNull)
			.add(r.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(r.columns.sequence_id.isin(sequenceIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
	var resultR = databaseManager.getFoundSet(r);
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
	var ds = databaseManager.convertToDataSet(resultR,['sequence_number']);
	application.output('---- sequence count numbers '+resultR.getSize());
	if (resultR.getSize() > 1){
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
	application.output('form seq list origin '+form.vSequenceList);
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
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
		.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
		.add(q.columns.id_serial_number_id.isin(idfileIds))
	);
	/** @type {JSFoundSet<db:/stsservoy/id_serial_numbers>} */
	var resultQ = databaseManager.getDataSetByQuery(q,-1);
	for (index = 1;index <= resultQ.getMaxRowIndex();index++){
		resultQ.rowIndex = index;
		idSerials.push(resultQ.id_serial_number);
	}
	application.output('serials '+idSerials);
	return resultQ;
}
/**
 * @properties={typeid:24,uuid:"2AE70C9F-E2B8-405E-B390-EEBA4BCAF1D1"}
 */
function getIdfileMaxLabel(){
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var idfileFs = forms[getFormName()].vIdfilesFs;
	application.output('idfiles fs '+idfileFs);
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
	application.output('pcmkrec delete flag '+pcmkRec.delete_flag)
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
		form.elements[nextField].requestFocus();
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
	form.controller.setTabSequence(tabOrder);
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
 */
function loadPcmkForm(){
	var theForm = forms[getFormName()];
	//var jobNum = theForm.vJobNumber;
	//theForm.custId = theForm.vCustNumber;
	//var custId = theForm.vCustNumber;
	
	application.output('job '+theForm.vJobNumber+' custId '+theForm.vCustNumber);

	theForm.vJobRec = getJobData(theForm.vCustNumber,theForm.vJobNumber);
	application.output('job rec '+theForm.vJobRec);
	theForm.vJobId = theForm.vJobRec.job_id;
	theForm.vCustId = theForm.vCustNumber;
	application.output('+ + cust id '+theForm.vCustId+' cust num2 '+theForm.vCustNumber+' job id '+theForm.vJobId);
	theForm.vCustRec = getCustomerIdRec();
application.output('cust rec '+theForm.vCustRec);
	theForm.vSheetIds = getJobIdSheets();
	theForm.vPcmkIds = getSheetIdPcmks();
	theForm.vIdfileIds = getPcmkIdIdfiles();
	theForm.vPcmkSeqs = getJobSequences();
	
	theForm.vCustName = theForm.vCustRec.name;
	theForm.vJobMetric = theForm.vJobRec.metric_job;
	theForm.elements.metric.visible = (theForm.vJobMetric == 1);
	theForm.vWeightUnits = (theForm.vJobMetric == 1) ? 'kgs' : 'lbs';
	if (application.isInDeveloper()){application.output('job rec '+theForm.vJobRec);}
	if (application.isInDeveloper()){application.output('cust rec '+theForm.vCustRec);}
	application.output('metric job '+theForm.vJobRec.metric_job);
	if (application.isInDeveloper()){application.output('job sheets '+theForm.vSheetIds);}
	if (application.isInDeveloper()){application.output(theForm.vPcmkIds.length+' pcmks '+theForm.vPcmkIds);}
	if (application.isInDeveloper()){application.output(theForm.vIdfileIds.length+' idfiles '+theForm.vIdfileIds);}
	var jobMetrics = theForm.getJobMetrics();
	theForm.vJobWeight = jobMetrics[0];
	application.output('metrics' + jobMetrics);
	application.output('metrics 2'+theForm.getJobMetricsMW());
}
/**
 * @properties={typeid:24,uuid:"E3134688-ECA9-492E-9AAD-3DE074838425"}
 */
function getResetPcmkCounts(){
	// recalc item quantity, label quantity, label count
	var form = forms[getFormName()];
application.output('inside reset counts');
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
	application.output('outside reset counts');
	application.output('recalced item counts '+itemQuant+' labels '+labelCount+' Bar qty '+uniqueBars.length+' sequence number '+form.vSequenceNumber);
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
	var jobId = form.vJobId;
	var sequences = [];
	/** @type {JSFoundSet<db:/stsservoy/sequences>} */
	var fs = databaseManager.getFoundSet('stsservoy','sequences');
	if (fs.find()){
		fs.job_id = jobId;
		fs.delete_flag = '^';
		fs.search();
		var index = 1;
		while (index <= fs.getSize()){//just iterate through.  Will not be many sequences.

			var rec = fs.getRecord(index);
			sequences[rec.sequence_id] = rec.sequence_number;
			sequences[rec.sequence_number] = rec.sequence_id;
			index++;
		}
	}
	application.output('sequences '+sequences);
	return sequences;

}
/**
 * @param jobId
 *
 * @properties={typeid:24,uuid:"140B6360-8B95-43D7-AEE6-665FF0418AF0"}
 * @AllowToRunInFind
 */
function checkJobEmpty(jobId){
	if (!checkUserPermissions(session.userId)){return true}
	/**
	 * sheets, loads, cow_xref
	 * rf_transactions, and customers references but does not indicate having data
	 */
	 /** @type {JSFoundSet<db:/stsservoy/sheets>} */
	var fs = databaseManager.getFoundSet('stsservoy','sheets');
	if (fs.find()){
		fs.job_id = jobId;
		if (fs.search() > 0){return false}
	}
	fs = null;
	 /** @type {JSFoundSet<db:/stsservoy/loads>} */
	fs = databaseManager.getFoundSet('stsservoy','loads');
	if (fs.find()){
		fs.job_id = jobId;
		if (fs.search() > 0){return false}
	}
	fs = null;
	 /** @type {JSFoundSet<db:/stsservoy/cow_xref>} */
	fs = databaseManager.getFoundSet('stsservoy','cow_xref');
	if (fs.find()){
		fs.job_id = jobId;
		if (fs.search() > 0){return false}
	}
	return true;
}
/**
 * @param userId
 *
 * @properties={typeid:24,uuid:"A60D1309-E511-4BA6-AC2F-2FD9DD79342D"}
 */
function checkUserPermissions(userId){
	if (application.isInDeveloper()){
		application.output('TODO is to complete user permissions for screens.');
	}
	return true; // if permissions allow access
}
/**
 *
 * @properties={typeid:24,uuid:"559ACDBC-A3F4-4D8A-A75F-1D8EF93AB6EA"}
 */
function getCustomerList(){
	var sql = "select customer_number,name,customer_id from customers where delete_flag IS NULL and tenant_uuid = '"+session.tenant_uuid+"'";
	/**
	/ ** @type {QBSelect<db:/stsservoy/customers>} * /
	var q = databaseManager.createSelect('db:/stsservoy/customers');
	q.result.add(q.columns.customer_id);
	q.result.add(q.columns.customer_number);
	q.result.distinct = true;
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(session.tenant_uuid))
		);
	var resultQ = databaseManager.getFoundSet(q);*/
	var nameArray = [];
	var idArray = [];
	/** @type {JSFoundSet<db:/stsservoy/customers>} */
	var ds = databaseManager.getDataSetByQuery('stsservoy',sql,[],-1);
	ds.sort(2,true);
	for (var index = 1;index <= ds.getMaxRowIndex();index++){
		ds.rowIndex = index;
		idArray.push(ds.customer_id);
		idArray.push(ds.customer_id);
		
		nameArray.push(ds.customer_number+' | '+ds.name);
		nameArray.push(ds.name+' | '+ds.customer_number);
	}
	application.setValueListItems('stsvlt_customers',nameArray,idArray);
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
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = databaseManager.getFoundSet('stsservoy','jobs');
	if (fs.find()){
		fs.customer_id = custId;
		fs.delete_flag != 99;
		if (fs.search() > 0){return false}
	}
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
	var addCust = globals.DIALOGS.showQuestionDialog('Customer Not Found','Add New Customer?','Add Customer','Cancel');
	if (addCust == 'Add Customer'){
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
	q.result.add(q.columns.user_id);
	q.result.add(q.columns.user_name);
	q.result.add(q.columns.association_uuid);
	q.result.distinct = true;
	q.where.add(
		q.and
			.add(q.columns.delete_flag.isNull)
			.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
			.add(q.columns.delete_flag.eq(null))
		);
	var resultQ = databaseManager.getFoundSet(q);
	for (var index = 1;index <= resultQ.getSize();index++){
		/** @type {JSFoundSet<db:/stsservoy/users>} */
		var rec = resultQ.getRecord(index);
		globals.m.userNames[rec.user_id] = rec.user_name;
		globals.m.userAssocs[rec.user_id]= rec.association_uuid;
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
	var response = globals.DIALOGS.showQuestionDialog('Kill off client?','Kill client?','No','Yes');
	if (response == "Yes"){
		plugins.UserManager.getClientByUID(clientId).shutdown();
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
 *
 * @properties={typeid:24,uuid:"AB49A407-ECBC-48CF-95C0-3765ACA9D898"}
 */
function setUserFormPermissions(event){
	var formName = event.getFormName();
	var userId = globals.secCurrentUserID;
	///var appId = globals.secCurrentApplicationID;
	///application.output('user id '+userId+' form '+formName);
	var sql;
	/**
	 * applications - applications reduced to an application_id
	 * permissions - application_id permissions - server_name, table_name, form_name, element_name
	 * user_groups:user_group_id list <- for user_id
	 * groups: group_id list <- user_group_id
	 * group_keys: key_id list <- group_id
	 * permissions:  form_name, element_name <- key_id
	 * select * from permissions left join group_keys on permissions.key_id = group_keys.key_id left join groups on group_keys.group_id = groups.group_id left join user_groups on user_groups.group_id = groups.group_id left join users on users.user_id = user_groups.user_id  where users.user_id = '46'  and permissions.form_name = 'customer_specs'
	 */
	sql = 'select * from permissions '
	+ " where permissions.key_id IS null "
	+ " and permissions.form_name = '" +formName+ "'";	

	/** @type {JSFoundSet<db:/stsservoy/permissions>} */
		var ds = databaseManager.getDataSetByQuery('stsservoy',sql,[],-1);
		for (var index = 1;index <= ds.getMaxRowIndex();index++){
			ds.rowIndex = index;
			var elName = ds.element_name;
			if (!elName){continue} // ignore forms
			var elVisible = ds.is_visible;
			var elEnabled = ds.is_accessible;
			application.output(elName+' vis '+elVisible+' enabled '+elEnabled+' form '+formName+(typeof elName));
			forms[formName].elements[elName].visible = (elVisible == 1);
			forms[formName].elements[elName].enabled = (elEnabled == 1);
		}


		sql = 'select * from permissions '
		+ 'left join group_keys on permissions.key_id = group_keys.key_id ' 
		+ 'left join groups on group_keys.group_id = groups.group_id ' 
		+ 'left join user_groups on user_groups.group_id = groups.group_id ' 
		+ 'left join users on users.user_id = user_groups.user_id '
		+ " where users.user_id = '" +userId+ "' "
		+ " and permissions.form_name = '" +formName+ "'";		
	ds = databaseManager.getDataSetByQuery('stsservoy',sql,[],-1);
	for (index = 1;index <= ds.getMaxRowIndex();index++){
		ds.rowIndex = index;
		elName = ds.element_name;
		elVisible = ds.is_visible;
		elEnabled = ds.is_accessible;
		if (typeof forms[formName].elements[elName] === 'undefined'){continue}
		application.output(elName+' vis '+elVisible+' enabled '+elEnabled+' xxx '+(typeof forms[formName].elements[elName]));
		forms[formName].elements[elName].visible = (elVisible == 1);
		forms[formName].elements[elName].enabled = (elEnabled == 1);
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