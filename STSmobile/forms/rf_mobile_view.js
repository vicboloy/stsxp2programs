/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C76F50CA-737E-4472-BAFA-AAFBF5300E79"}
 */
var stayField = '';
/**
 * @properties={typeid:35,uuid:"A9E241CD-9D14-4332-A936-2F48EFB92CD9",variableType:-4}
 */
var fieldBadEntry = false;
/**
 * @properties={typeid:35,uuid:"039D460E-945E-490C-BB44-AFE440B34CA8",variableType:-4}
 */
var fieldErroredIndex = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C0CD9AE-ACA9-4FF9-910A-02BCB7E41811"}
 */
var currentField = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31BE79E9-C17C-4F46-A21F-CEC76AA55BB5"}
 */
var fieldErroredName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4DFA51D-715E-4C1F-8A94-9D29ECD0212F"}
 */
var statusCode = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D15E024A-716A-42E5-9AB6-2522B88F80C0"}
 */
var statusLocation = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18D0B8E7-089A-43FA-B0FF-FA3259ED066B"}
 */
var statusWorker = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87945C0C-A95F-4FE9-936B-D32B094F8C7C"}
 */
var currentID = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7058CCB8-B5DC-4CBE-AA06-F7329412F039"}
 */
var lastID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76973B92-58EA-4478-B1C3-48328E211128"}
 */
var jobNumber = "";
/**
 * @properties={typeid:35,uuid:"F91391F5-7779-4FFE-8AE0-469C570CDAFC",variableType:-4}
 */
var shownFields = [];
/**
 * @properties={typeid:35,uuid:"C58165B7-9D69-4CCA-BFC2-28D932C4BDF6",variableType:-4}
 */
var tabFieldOrder = [];
/**
 * @properties={typeid:35,uuid:"48497B76-2F8B-4DEA-9852-C9F0DC3FD0A2",variableType:-4}
 */
var requiredFields = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC5B2482-6856-46EF-8603-F224865992F8"}
 */
var loadNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E0ADF44D-B8F1-4DE2-AB91-FE3DDAED3364"}
 */
var currentBundle = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EAAF2D65-72BB-45D6-9826-F5F371F6C957",variableType:4}
 */
var dc = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98986AC8-0155-41DF-A4BF-2FEDCB94DA62"}
 */
var focusLost = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6DCF346-D576-40F1-80BB-CD14F815D1BE"}
 */
var focusGain = '';
/**
 * @properties={typeid:35,uuid:"FF87A397-F569-4B79-BF92-38AA539398CB",variableType:-4}
 */
var focusSkipFlag = false;
/**
 * @properties={typeid:24,uuid:"CC386C84-184A-40DA-B592-66A5398ADC06"}
 */
function resetStatusCode(){
	statusCode = "";
}
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EF5CB821-FAEF-4769-9226-7BA8107B2349",variableType:4}
 */
var bundlePieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79C858C6-4575-4D63-9007-1CBE6EC49FD4",variableType:4}
 */
var bundleWeight = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC2C961D-11AB-4DBA-BE44-4B1054E93DB3",variableType:4}
 */
var width = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6648D84A-8F9C-4E3D-8187-A4513C8CFD23",variableType:4}
 */
var weight = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C02A9607-CBD4-47E4-9131-1D0428B285B0",variableType:4}
 */
var length = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1ED8A611-393A-4972-91B1-B4299C5D3D17"}
 */
var pcswstatus = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E4D9F0F1-595C-4E9C-87E9-5E73BBB740A1"}
 */
var heat = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"600CAE77-AF63-4C4B-995A-CE1936AA5667"}
 */
var grade = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7BC5514D-D658-4B95-8113-773BD2C11017",variableType:4}
 */
var pcmksAtLocation = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"606D6B51-7AED-4C16-BEE7-A0E95D64DA7C",variableType:4}
 */
var shipPieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1682909D-5ED3-4F25-A60E-896719E0D385",variableType:4}
 */
var shipWeight = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54712BBF-E2D2-457E-AC0C-FA23BDA33FD3"}
 */
var piecemark = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1781428-12DB-4BE4-ADCE-DA1CBEE4CA5D"}
 */
var viewTitle = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07CD6A04-A34E-4CE9-BFD3-EDCB0059C0D7"}
 */
var drawingRevision = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"181A79DB-72AA-4C37-AA71-1D56BEF93557"}
 */
var genericInput = "";
/**
 * @properties={typeid:24,uuid:"2CEA60B5-2BBD-4F80-B54F-0E5FCE77C62A"}
 */
var showingFields = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECFA46FB-2E8C-4FFC-8025-9B00ACB304F9"}
 */
var lastAction = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9EC1199F-5853-43DB-8FC5-8579716AB8BC"}
 */
var sequence = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8FB89D6E-ED8E-47C2-8B22-DD5DD27E9A68"}
 */
var quantity = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F1285DB-7F41-4643-93BD-593B6BCC5046"}
 */
var partnumber = '';
/**
 * @properties={typeid:35,uuid:"FD864EB4-6761-41BA-9BE1-DC8039263887",variableType:-4}
 */
var grantFocus = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"26084BDC-CC64-4B5C-B535-E2782E44C86E"}
 */
var genericInput2 = "";
/**
 * @properties={typeid:35,uuid:"7805EB59-00CC-4CF6-ABD7-B39BFC0A5E53",variableType:-4}
 */
var printerQueue = [];
/**
 * @properties={typeid:35,uuid:"12C62275-F830-4263-B5E0-03B0EF0C2AEA",variableType:-4}
 */
var functionKeyEntered = false;
/**
 * @properties={typeid:35,uuid:"91B5C845-EE4E-4F6F-88D6-D6B7A5ECCEC0",variableType:-4}
 */
var vSequenceList = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"24D8949A-9B0B-4037-9A66-F68D2297DF99"}
 */
var asnNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ABE4BECD-A345-473E-84DE-89B37AD6B52A"}
 */
var stockLocation = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D37E42A-A144-4195-8EEA-4C1F2C89138F"}
 */
var bundled = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECF3D064-57CA-4EE9-9A21-98FFDE51D56F"}
 */
var printEnabled = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"56A23FB9-3DC6-44AA-BECB-B18C53E579AA"}
 */
var poNumber = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"081DA295-A142-4574-B98F-A11F88C2B5C2",variableType:4}
 */
var invOrdered = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"50105FC7-99F8-4C92-BDC5-AC5C9416FD38",variableType:4}
 */
var invRemains = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D957001-7F73-467C-A8F1-C18C7AEF442E"}
 */
var finalize = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E5E6C8C7-770D-41DA-9686-272CD9978EB2"}
 */
var countryOfOrigin = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFD0CBBB-2C2E-4237-AECC-AA77AF12D397"}
 */
var billOfLading = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"46C9988F-A266-4A0E-9954-F071E6E5BF1F"}
 */
var remarks = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"22D45DD7-6468-4184-859F-0F53031B4E6E"}
 */
var invBarCode = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FAEA342A-65EB-43B0-B0BD-543E3980775D"}
 */
var invMaterial = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A4592E98-3731-486F-A900-A8335621FD46"}
 */
var invGrade = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"37F7510F-DDEC-4F18-A5E8-740C6159642F"}
 */
var invLocation = '';
/**
 * @properties={typeid:35,uuid:"97B26922-5C44-4634-9FAD-16018022A5E3",variableType:-4}
 */
var invLine = {};
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A3FE9FEC-9B1F-4043-91ED-EB56668428BC",variableType:4}
 */
var lastQty = 0;
/**
 * @properties={typeid:35,uuid:"98783CF0-21BC-4F13-9852-3D58094026E3",variableType:-4}
 */
var printEnabledScreen = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B013D8D5-3F69-428F-B89A-A167A1B1E2FD"}
 */
var dropWidth = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07CA0BEF-137E-49DF-8D8D-E382B7ED4FBA"}
 */
var dropLength = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"017C4FB9-AC4D-4F07-895D-4D0E09679EE9"}
 */
var allLength = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87994531-5C1E-4AC5-AE95-256502554F75"}
 */
var nonStrikeLength = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6F120F4-FFE8-4979-AAAD-40F94EB01F03"}
 */
var rawBarcode = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"63DEC354-6532-42A9-BC84-4B89EA277D5D"}
 */
var cutlistBarcode = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B07FF28-C17A-4FC6-8E8F-9F1248D7F75A"}
 */
var strikeThru = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0CA34A6C-F4A3-40B4-9E02-CDC6E94D5ECD",variableType:4}
 */
var maxQuantity = 0;
/**
 * @properties={typeid:35,uuid:"7219C308-D30C-48D7-A6D5-8303790550BF",variableType:-4}
 */
var cutListArray = [];
/**
 * @properties={typeid:35,uuid:"11138991-1673-4D8F-9E22-5DA78E7CE209",variableType:-4}
 */
var tempFS = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1E844B8-D163-4AFA-A31B-55B4F49CD30E"}
 */
var altInputField = 'genericin2';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5CC3D56A-6461-465D-B8D8-1EE2BA5F814A"}
 */
var labelPrintType = '';
/**
 * @properties={typeid:35,uuid:"4382EA84-EB9C-454B-9959-57F093AFA6A9",variableType:-4}
 */
var vJobMetric = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A1AE5FF1-E756-414D-9D4C-5C9B4D075C03",variableType:4}
 */
var associatedCutIdTotal = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A12019BE-558E-4158-B7AE-223B92A1F803",variableType:4}
 */
var associatedCutIdCount = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AC7DD58E-D819-4D01-B828-C54871853C48"}
 */
var associatedCutRatio = '0 of 0';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"493E047A-20EF-4C5B-AC24-CF85548F7FBB",variableType:4}
 */
var laborPercentComplete = 0;
/**
 * @properties={typeid:35,uuid:"0C25792A-54EE-455D-8955-D083516B0437",variableType:-4}
 */
var laborPercentToday = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"367186EE-3E13-43CF-9D1B-58AFA2A87B87"}
 */
var widthChar = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5F72F8F6-B15F-4EA6-A2D2-06F9DC209226"}
 */
var association = '';
/**
 * @properties={typeid:35,uuid:"71D92708-6DB3-4071-AE85-07AE3DB1D201",variableType:-4}
 */
var inputFields = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"80BD4CFB-9B2F-48E7-9B9A-2670AE299CC3"}
 */
var reportType = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"029EA719-2708-4290-8AE8-DD2A7A5B4F6B",variableType:4}
 */
var useServerPrinters = 1;//always use server printers
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12D3ED4C-6402-4664-A569-10A3BCB4AD75"}
 */
var location1 = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9D852686-0898-491E-94DC-D7E3985AA55E"}
 */
var location2 = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"552E9588-FF27-417D-9745-EB4314793092"}
 */
var auditBarcode = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16017FA7-8C3E-4901-BF1A-31E5D5D8F398"}
 */
var printIdLabel = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AE925789-098B-4C62-88B3-358209DE8735"}
 */
var sweepBarcode = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC94AAFD-D680-4600-AEAB-6CD197FE11F5",variableType:4}
 */
var qSweepRemain = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CB97BBBE-3CDC-444D-8FBD-09261AB96C7F"}
 */
var qSweepQuanRemain = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15FB3255-57DC-42FE-8CE2-D721081D5390",variableType:4}
 */
var qSweepFound = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B6EFEDDB-1134-4C5A-A376-F1D6B6DCE64E",variableType:4}
 */
var qSweepMovedIn = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96AA8948-3A74-451E-A9D3-81E4FD7D4C2E",variableType:4}
 */
var qSweepMovedOut = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A89F42CA-F218-4D2B-8B6A-6E56748889BE"}
 */
var qSweepMovedInOut = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"24C8DC56-9DC3-4F8B-9E54-0D5AC9D9FC37",variableType:4}
 */
var qSweepMovedComplete = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C22542D-AA64-4DCB-9644-BBFA5F6A38C5"}
 */
var qSweepComplete = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40029FDB-290C-4509-B4B2-6947250B79D8"}
 */
var tfsJob = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D654C931-A92D-491D-8809-D871D620ABAA"}
 */
var tfsSequence = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10CA615D-2A32-4BEE-97D4-65E39DED3EAE"}
 */
var tfsLot = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3E4CA5EE-B91F-44F6-8F83-5AF69DDA86C0"}
 */
var dropJob = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E8E9410-3F8B-4E84-AD8F-1AA061F7F562"}
 */
var dropLocation = '';
/**
 * @properties={typeid:24,uuid:"F751B935-0829-43CB-B81E-46E1EDE348B2"}
 */
function resetWorkerCode(){
	statusWorker = "";
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F094E8E-0D6B-4635-8A95-BBCE28FD4B94"}
 * @AllowToRunInFind
 */
function onShowForm(firstShow,event) {

	printEnabledScreen = !(!globals.m.i18nMobilePrintViews[globals.session.program.replace('\'','')]);
	var osName = application.getOSName();
	globals.isAndroid = (globals.clientUserAgent.search(/Android/i) != -1 || osName.search(/Linux/i) != -1);
	var maxY = 21;
	var newScale = 1.0;
	if (firstShow){
		if (!globals.shortcutsSet && !globals.isAndroid){
			//plugins.window.createShortcut('UP',globals.rfRecordUp,'rf_mobile_view');
			//plugins.window.createShortcut('DOWN',globals.rfRecordDown,'rf_mobile_view');
			plugins.window.createShortcut('RIGHT',globals.rfRecordDetail,'rf_mobile_view');
			plugins.window.createShortcut('LEFT',globals.rfRecordDetailClose,'rf_mobile_view');
			plugins.window.createShortcut('RIGHT',globals.rfArrowRt,'mobile_query');
			plugins.window.createShortcut('LEFT',globals.rfArrowLt,'mobile_query');
			shortcutsSet = true;
		}
		forms.rf_mobile_view.elements.tablessHistory.setTabEnabledAt(1,true);
		forms.rf_mobile_view.elements.tablessHistory.setTabEnabledAt(2,true);
		fieldErroredName = '';
	}
	var scaleWidth = application.getScreenWidth();
	var currWidth = elements.showHelp.getWidth()+elements.showHelp.getLocationX();
	
	width = application.getScreenWidth();
	//scopes.jobs.onLoadWindowSize(event);
	if (application.isInDeveloper()){application.output('fs size '+foundset.getSize())}
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){

	}
	globals.getSequenceNumbers();
	requiredFields = [];
	inputFields = [];
	var formName = event.getFormName();
	var tabSequence = [];
	tabFieldOrder = [];
	var transShopEl = forms[formName].elements.transShop;
	var showElementsOf = globals.session.program;
	viewTitle = showElementsOf+' '+globals.session.association;
	//var start = transShopEl.getLocationY()*1+transShopEl.getHeight()*1;
	var padding = 2;
	//globals.setTransShop();
	null;
	statusCode = "";
	statusLocation = "";
	statusWorker = "";
	foundset.clear();
	if (application.isInDeveloper()){application.output('foundset '+foundset+' curr field width '+currWidth)}
	globals.rfClearMobDetails();
	globals.mobWeightUnits = (globals.isJobMetric(forms[formName].jobNumber)) ? " kgs" : " lbs";
	globals.mobLengthUnits = (globals.isJobMetric(forms[formName].jobNumber)) ? " M" : " I";
	lastID = "";
	forms[formName].functionKeyEntered = false;
	var show = [];
	//var focusFirst = "";
	for (var item in globals.rfViews[showElementsOf]){
		if (item == 'genericin2' 
			&& ((application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
			|| !globals.session.dualEntry)){continue}//CHANGE FROM DUAL ENTRY OPS  //dual entry
		show.push(item);
	}
	while (item = shownFields.pop()){
		if (show.indexOf(item) == -1){
			/** @type {JSField} */
			var element = forms[formName].elements[item];
			var elementLabel = forms[formName].elements[item+'label'];
			var elementUnits = forms[formName].elements[item+'units'];
			element.visible = false;
			element.bgcolor = 'DEFAULT';
			elementLabel.visible = false;
			if (elementUnits){elementUnits.visible = false;}
		}
	}

	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		var height = Math.floor(application.getScreenHeight() * 0.95);
		var elWidth = elements.elHelp.getWidth();
		var estimatedHeight = (show.length+1)*21;
		var scaleY = Math.floor(10*height/(show.length*21))/10;
		var scaleX = Math.floor(width/(elements.elHelp.getWidth()+elements.elHelp.getLocationX())*10)/10;
		application.output('+ + + + + + + RM globals.clientUserAgent = '+globals.clientUserAgent);
		if (globals.clientUserAgent.search(/(iPhone|iPad)/i) != -1 || osName.search(/Mac/i) != -1){
			elements.elHelp.setSize(elWidth,55);
			scaleWidth = (scaleY < scaleX) ? scaleY : scaleX;scaleWidth = scaleWidth - 0.1;
			scopes.globals.viewport = scopes.globals.viewportSrc.replace('initial-scale=1.0','initial-scale='+scaleWidth);
			newScale = 1.0;
		} else if (globals.clientUserAgent.search(/Android/i) != -1 || osName.search(/Linux/i) != -1){
			if (application.isInDeveloper()){application.output('is Android')}
			isAndroid = true;
			scaleWidth = Math.floor(width/240*10)/10;
			scaleX = Math.floor(width/240*10)/10;
			scaleWidth = (scaleY < scaleX) ? scaleY : scaleX;
			elements.elHelp.setSize(Math.floor(elements.elHelp.getWidth()*scaleWidth),45)
			//scaleWidth = 0.5;
			newScale = scaleWidth;
			//newScale = 0.8;scaleWidth = 1.0;
			//scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale=1.0');
			//scaleWidth = 1.0;
			//var regexp = new RegExp(/(initial-scale=[0-9]\.[0-9])/);
			//var match = scopes.globals.viewport.match(regexp);
			//if (match){
			scopes.globals.viewport = scopes.globals.viewportSrc;//.replace(match[1],'initial-scale='+scaleWidth);
			//}
			//scopes.globals.viewport = scopes.globals.viewport.replace('maximum-scale=4.0','maximum-scale=1.0');
			//application.output('RM inside Linux show form width '+width+' '+scaleWidth+' vp '+scopes.globals.viewport);
			//newScale = 1.0;
		}
		//newScale = 1.0;
		if (globals.clientUserAgent.search(/Windows CE/) != -1){
			elements.elHelp.setSize(Math.floor(globals.clientWidth),Math.floor(globals.clientHeight-60));
		}
	}
	//newScale = 1.0;
	var trueHeight = 21;
	var newLine = true;
	var newY = elements.showHelp.getHeight();
	var fieldLine = 0;var saveScale = newScale;
	//if (isAndroid){
	var solForm = solutionModel.getForm('rf_mobile_view')
	//}
	for (var index = 0;index < show.length;index++){
		item = show[index];
		/** @type {JSField} */
		element = forms[formName].elements[item];
		if (!element){continue}
		//if (isAndroid){
			var solEl = solForm.getField(item);
			if (!solEl){
				solEl = solForm.getLabel(item);
			}
			//var solX = solEl.x;
			//var elX = element.getLocationX();
			//application.output('element sol '+solX+'.'+solEl.width+' now '+elX+'.'+element.getWidth());
			//if (solX != elX){
			//	newScale = 1.0
			//} else {
			//	newScale = saveScale;
			//}
		//}
		element.bgcolor = 'white';
		elementLabel = forms[formName].elements[item+'label'];
		var solLabel = solForm.getLabel(item+'label');
		elementUnits = forms[formName].elements[item+'units'];
		var solUnits = solForm.getLabel(item+'units');
		//height = element.getHeight();
		height = solEl.height;//.getHeight();
		width = element.getWidth();
		if (item.search('spacer') == 0){continue}//20190211 set non optional / Required entries alignment
		//application.output('wide '+width+' high '+height+' scale '+newScale+' end x '+element.getLocationX());
		if (newLine){
			fieldLine++;
		} else {
			newLine = true;
		}
		newY = height*fieldLine+padding;//*fieldLine; //+start*1;
		if (globals.rfViews[showElementsOf][item].search(",") != -1){
			newLine = false; // continuation of field on same line as last
		}
		element.visible = true;element.enabled = true;
		//var elHeight = Math.floor(element.getHeight() * newScale);
		var elHeight = Math.floor(solEl.height * newScale);
		trueHeight += elHeight+padding;
		//elHeight = element.getHeight();
		//elWidth = Math.floor((element.getWidth()-5) * newScale);
		elWidth = Math.floor((solEl.width-5) * newScale);
		element.setSize(elWidth,elHeight);
		//element.setLocation(Math.floor(element.getLocationX()*newScale),newY);
		element.setLocation(Math.floor(solEl.x*newScale),Math.floor(newY * newScale));
		var fieldValue = element.getDataProviderID();
		//var fieldType = typeof fieldValue;
		//application.output('fieldtype '+fieldType)
		if (globals.rfViews[showElementsOf][item].search("O|R") != -1){
			//if (focusFirst == ""){focusFirst = item;tabSequence.push(element)}
			
			forms['rf_mobile_view'][fieldValue] = "";
			//tabFieldOrder.push(item);
			//tabSequence.push(element);
			inputFields.push(item);
			if (globals.rfViews[showElementsOf][item].search("R") != -1){
				requiredFields.push(item);
				element.bgcolor = 'yellow';
				element.fgcolor = 'black';
			}
		} else {
			if (fieldValue && !fieldValue.match(/globals/)){forms['rf_mobile_view'][fieldValue] = "";} else {eval (fieldValue = '')}
			//padding = -2;
			//if (isAndroid){
			//	padding = 1;
			//}
		}
		shownFields.push(item);
		var elLabelX = 0;
		if (elementLabel){
			elementLabel.visible = true;elementLabel.enabled = true;
			//elementLabel.setLocation(Math.floor(elementLabel.getLocationX()*newScale),newY);
			elementLabel.setLocation(Math.floor(solLabel.x * newScale),Math.floor(newY * newScale));
			//var elLabelWidth = Math.floor(elementLabel.getWidth()*newScale);
			var elLabelWidth = Math.floor(solLabel.width * newScale);
			elementLabel.setSize(elLabelWidth,solLabel.height * newScale);
			//elementLabel.border = 'LineBorder,1,#000000';
			elLabelX = elementLabel.getLocationX()+elementLabel.getWidth();
			//application.output('RM wide end x labels '+item+' '+elLabelX);
		}
		if (elementUnits){
			elementUnits.visible = true;elementUnits.enabled = true;
			//elementUnits.setLocation(Math.floor(elementUnits.getLocationX()*newScale),newY);
			elementUnits.setLocation(Math.floor(solUnits.x * newScale),Math.floor(newY * newScale));
			//var elUnitsWidth = Math.floor(elementUnits.getWidth()*newScale);
			var elUnitsWidth = Math.floor(solUnits.width * newScale);
			//elementUnits.setSize(elUnitsWidth,elementUnits.getHeight() * newScale);
			elementUnits.setSize(elUnitsWidth,solUnits.height * newScale);
			//application.output('RM wide end x units '+Math.floor(elUnitsWidth+element.getLocationX()));
			//elementUnits.putClientProperty('tabSeq',-1);
		}
	}
	//forms[formName].elements[focusFirst].requestFocus();
	//controller.setTabSequence(tabSequence);
	//if (firstShow){
	//	application.output(' REM rf_mobile_view show focus');
	forms[formName].elements['genericin'].requestFocus();
	// Final actions
	printEnabled = i18n.getI18NMessage('sts.txt.on');
	showPrintSetting(event);
	finalize = i18n.getI18NMessage('sts.btn.no').toUpperCase();
	bundled = i18n.getI18NMessage('sts.btn.no').toUpperCase();
	elements.genericin.requestFocus();
	controller.focusField('genericin',false);
	elements.genericinnone.visible=true;
	elements.genericinnone.enabled=true;
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//reset error window location for web client
		plugins.WebClientUtils.executeClientSideJS('playSoundX(null);');
		//adjust error window to hover over the window title to the very edge of the input area
		var width1 = application.getScreenWidth();
		var height1 = elements.genericin.getLocationX();
		elements.errorWindow.setLocation(0,0);
		elements.errorWindow.setSize(300,30);
		//application.output('errWindow height:'+height1+ ' overall: '+application.getScreenHeight())
	}
	globals.getStatusDescriptions();
	globals.getRoutes();
	globals.getRouteLegs();
	labelPrintType = (globals.processCodes.rawprint.indexOf(globals.session.program) != -1) ? 'material' : 'piecemark';
	elements.genericinnone.setLocation(0,0);//elements.genericin.getLocationX(),elements.genericin.getLocationY());
	association = globals.session.association;
	var win = application.getActiveWindow();
	application.getSolutionRelease()
	var title = win.title;
	var solName = application.getSolutionName();
	win.title = solName+' '+globals.verSTSmobile+'('+application.getSolutionRelease()+')';

	if (requiredFields.indexOf('strikethruin') != -1){strikeThru = i18n.getI18NMessage('sts.btn.yes')}//default to StrikeThru YES #
	if (requiredFields.indexOf('printidin') != -1){
		printIdLabel = (!scopes.prefs.lFsPrintIDFromCutList || scopes.prefs.lFsPrintIDFromCutList == 0) ?  i18n.getI18NMessage('sts.btn.no').toUpperCase() : i18n.getI18NMessage('sts.btn.yes').toUpperCase();
	}
}
/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A9A81B38-47EA-441D-9F69-4FBB6818A58C"}
 * @AllowToRunInFind
 */
function onElementFocusLost(event) {
	if (1){return}
	if (elements.errorWindow.visible){return}
	var elementId = plugins.WebClientUtils.getElementMarkupId(elements.genericin);
	//var extraJS = 'event.preventDefault();timeout(function () {$'+elementId+'.focus();}, 500);';
	//var extraJS = 'alert("startJS");event.preventDefault();timeout(function () {document.getElementById("'+elementId+'").focus();}, 500);alert("this is id:'+elementId+'");';
	//var extraJS = 'alert("startJS");';
	//plugins.WebClientUtils.executeClientSideJS(extraJS)
	if (event.getElementName() == 'genericin') {
		elements['genericin2'].requestFocus();
	} else {
		elements['genericin'].requestFocus();
	}
}

/**
 * Handle focus gained event of an element on the form. Return false when the focus gained event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2F820D1B-B581-4085-BC49-6524CF069E3B"}
 */
function onElementFocusGained(event) {
	if (1==1){return}
	var elName = event.getElementName();
	application.output('element name '+elName+' grant focus '+grantFocus);
	if (grantFocus){
		elements[grantFocus].requestFocus();
		grantFocus = null;
	} else {
		elements['genericin'].requestFocus();
	}
}
/**
 *
 * @properties={typeid:24,uuid:"0FBD3266-A05E-48E1-B3EC-50E5FB85403F"}
 */
function clearForm(){
	for (var index = 0;index < shownFields.length;index++){
		forms['rf_mobile_view'][shownFields[index]] = "";
	}
	forms.rf_mobile_view.foundset.clear();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C23785CE-89F6-40F2-B99F-2ABB6EE05902"}
 */
function onHide(event) {
	foundset.clear();
	return true
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7E529C3-3D6F-473F-858F-F9308C91C8DD"}
 * @AllowToRunInFind
 */
function onActionBundle(event) {
	if (1==1) {return true}
	if (!currentBundle || currentBundle.length == 0 || currentBundle == "L"){
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT && elements.errorWindow && elements.errorWindow.visible){
			//globals.rfErrorHide(event);
			return false;
		}
		stayField = 'bundlein';
		scopes.globals.rfCreateBundle(event);
		return true;
	} else {
		//currentField = event.getElementName();
		stayField = event.getElementName();
		return true;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA"}
 */
function onActionOptional(event) {
	var formName = event.getFormName();
	var elementName = event.getElementName();
	var tabOrder = tabFieldOrder;
	var index = tabOrder.indexOf(elementName);
	index = (index < tabOrder.length-1) ? index+1 : index;
	if (requiredFields.indexOf(elementName) == -1){
		var entry = event.getSource().getDataProviderID();
		var form = forms[formName];
		var value = form[entry];
		index = getNextTabbed(elementName,true);
		currentField = getNextTabbed(elementName,false);
	}
	if (false && currentField){
		forms[formName].elements[currentField].requestFocus();
		forms.rf_mobile_view.controller.focusField(currentField,true);
		return true;		
	}
	//forms[formName].elements[tabOrder[index]].requestFocus();
	//forms.rf_mobile_view.controller.focusField(tabOrder[index],true);
	return true;
}
/**
 * @param {String} currentFld
 * @param {Boolean} indexTrue
 *
 * @properties={typeid:24,uuid:"73284836-3CBE-4B3C-9C32-5263BA542928"}
 */
function getNextTabbed(currentFld,indexTrue){
	var index = tabFieldOrder.indexOf(currentFld);
	if (index < tabFieldOrder.length-1){
		index++;
	}
	if (indexTrue){
		return index;
	} else {
		return tabFieldOrder[index];
	}
}
/**
 * @param fieldName
 *
 * @properties={typeid:24,uuid:"9B2C8F36-9FF5-453B-9A4A-63EE8F713E63"}
 */
function entryRequired(fieldName){
	return (requiredFields.indexOf(fieldName) != -1) ? true : false;
}
/**
 * @properties={typeid:24,uuid:"732C6ECD-44F7-49D6-A6D5-EC17AB1671CF"}
 */
function fieldPrevTab(){
	if (1==1){return;}
	var focused = forms.rf_mobile_view.focusGain;
	var focusIndex = tabFieldOrder.indexOf(focused)
	var index = (focusIndex == 0) ? 0 : focusIndex-1;
	var prevTab = tabFieldOrder[index];
	forms.rf_mobile_view.elements[prevTab].requestFocus();
}
/**
 * @properties={typeid:24,uuid:"93BEEA58-EBC3-44B1-97CB-20752B43A85B"}
 */
function fieldNextTab(){
	if (1==1){return;}
	var focused = forms.rf_mobile_view.focusGain;
	var focusIndex = tabFieldOrder.indexOf(focused)
	var index = (focusIndex == tabFieldOrder.length-1) ? tabFieldOrder.length-1 : focusIndex+1;
	var nextTab = tabFieldOrder[index];
	forms.rf_mobile_view.elements[nextTab].requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B3CF2B4-2F3A-4001-ADA3-4013AED4A48E"}
 */
function onActionGeneric(event) {
	// get element type from entry 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10C3ADE1-EE68-489C-A966-B8D0CFE2B9C2"}
 */
function onActionRemoveFocus(event) {
	elements.genericin.requestFocus();
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"960AB47A-DC03-491F-89DE-959583ABF1D8"}
 */
function onFocusGrant(event) {
	if (grantFocus){
		elements[focusGrant].requestFocus();
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"685877BC-69A6-4DAA-AEFA-DBBEF486131B"}
 */
function onFocusLostx(event) {
	globals.spurious = 1;
	genericInput = '';
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D49305CF-0F07-42B3-9F66-123604D7DD22"}
 */
function onLoad(event) {
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		application.output('viewport globals '+globals.viewport+' -end-');
		plugins.WebClientUtils.executeClientSideJS('playSoundX("init");');
	}

 // globals.viewPort2 = globals.viewPort2.toXMLString().replace(']]>','').replace('<![CDATA[','');

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
 * @properties={typeid:24,uuid:"B6905A91-A661-467C-97F4-F3530F37EF4B"}
 */
function onDataChangeQuantity(oldValue, newValue, event) {
	if (globals.session.program == scopes.globals.mobileWindows[i18n.getI18NMessage('sts.mobile.checklist.receive')]){
		if (quantity*1 < 1 || quantity*1 > invRemains*1){
			scopes.globals.errorDialogMobile(event,1062,'genericin','Invalid Quantity');
			quantity = '';
			return true;
		}
		// required values not yet set?, checked at initial entry genericin Q value
	}
	return true
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"BFDA2F71-5E7F-4BEF-A8E4-AFCDDA538C36"}
 */
function showPrintSetting(event){
	var printEnabledScreen = !(!globals.m.i18nMobilePrintViews[globals.session.program]);//20190202 set or unset print enabled screen
	if (!printEnabledScreen){return}
	var labelText = i18n.getI18NMessage('sts.label.generic');
	if (printEnabled == i18n.getI18NMessage('sts.txt.on')){
		elements.genericinlabel.text = labelText+' p-'+i18n.getI18NMessage('sts.txt.on');
	} else {
		elements.genericinlabel.text = labelText+' p-'+i18n.getI18NMessage('sts.txt.off');		
	}

}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"483BE45F-D420-4DD0-A793-7ACAA38670E0"}
 */
function onActionLeaveGeneric(event) {
	application.output('genericinput2 '+genericInput2)
	//scopes.globals.onDataChangeGeneric('',genericInput2,event);
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
 * @properties={typeid:24,uuid:"F34ED2C6-696E-4E19-B300-C4BB0F6280F5"}
 */
function onDataChangeTestGeneric(oldValue, newValue, event) {
	application.output('new input value '+newValue);
	scopes.globals.onDataChangeGeneric(oldValue,newValue,event);
	return true
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D86EE3FB-D4D3-4DA9-A743-BDCA55999EFB"}
 * @AllowToRunInFind
 */
function onFocusLost(event) {
	if (globals.clientUserAgent.search(/(iPhone|iPad)/i) != 0 && application.getOSName().search(/Mac/i) != 0){
		return true;
	}
	if (application.isInDeveloper()){application.output('firing onFocusLost '+event.getElementName())}
	//elements.genericin2.requestFocus();
	globals.onDataChangeGeneric(null,genericInput,event)
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22AA4064-ACC3-4A9A-AA7E-FE678CA6005E"}
 * @AllowToRunInFind
 */
function onFocusLost2(event) {
	if (globals.clientUserAgent.search(/(iPhone|iPad)/i) != 0 && application.getOSName().search(/Mac/i) != 0){
		return true;
	}
	if (application.isInDeveloper()){application.output('firing onFocusLost2 '+event.getElementName())}
	//elements.genericin.requestFocus();
	globals.onDataChangeGeneric(null,genericInput2,event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6EFCC200-F57C-4BCF-A33F-F1612B443B31"}
 * @AllowToRunInFind
 */
function onActionEnterKey(event) {
	if (globals.clientUserAgent.search(/(iPhone|iPad)/i) != 0 && application.getOSName().search(/Mac/i) != 0){
		return true;
	}
	if (application.isInDeveloper()){application.output('firing onActionEnterKey '+event.getElementName())}
	globals.rfClearPreviousEntry(event);
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
 * @properties={typeid:24,uuid:"665F4FAF-FDFE-4AF0-9D1D-9448F537FD97"}
 * @AllowToRunInFind
 */
function onDataChangeIOS(oldValue, newValue, event) {
	if (globals.clientUserAgent.search(/(iPhone|iPad)/i) != -1 || application.getOSName().search(/Mac/i) != -1){
		if (application.isInDeveloper()){application.output('firing onDataChangeIOS '+event.getElementName())}
		var form = forms[event.getFormName()];
		var elName = event.getElementName();
		application.output('IOS change fired input: '+newValue)
		if (elName == 'genericin'){
			form.elements['genericin'].requestFocus();
		} else {
			form.elements['genericinnone'].requestFocus();
			
		}
	} else {
		globals.onDataChangeGeneric(oldValue,newValue,event);
	}
	return true
}
