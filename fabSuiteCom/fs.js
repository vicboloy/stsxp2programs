/**
 * @properties={typeid:35,uuid:"1E6EC07A-65CF-475C-BFCA-D4AA56D7BC25",variableType:-4}
 */
var fabSuiteLocal = true;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65DB1A5C-8B2F-4372-8CD0-DFD0910971C7"}
 */
var fsCom = '';
/**
 * @properties={typeid:35,uuid:"3B3513F5-2BC8-48F1-A9BE-E6572B8D1FC4",variableType:-4}
 * @type {JSWindow}
 */
var progressWin = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E037F5AB-3855-4CC8-84B5-0BB6A741A5A2"}
 */
var progressMsg = '';
/**
 *
 * @properties={typeid:35,uuid:"4AF6A250-911E-429C-BF69-A6584C229F1E",variableType:-4}
 */
var com = null;
/**
 * @properties={typeid:35,uuid:"7B32D49B-6F76-49D6-8A54-0DD88272C561",variableType:-4}
 */
var importData = {
	jobNumber : '',
	drawings : [],
	sequences : [],
	lots : [],
	mainMarks : [],
	newMarks : [],
	newSequences : [],
	newDraws : [],
	newLots :[]
	}
/**
 * @properties={typeid:35,uuid:"4083EB34-1DAB-4749-AE2C-245F6F602082",variableType:-4}
 */
var endVars = null;
/**
 * @param {String} jobnumber
 *
 * @properties={typeid:24,uuid:"5A01BB91-029C-4177-ABC0-E5315C6A96B8"}
 * @AllowToRunInFind
 */
function checkFSJobNumber(importData){
	if (globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return null}//20181003

	//getProductionControlJobs
	//plugins.headlessclient
	var jobs = '	<FabSuiteXMLRequest>\
		<ValJob>\
		<JobNumber>'+ importData + 
		'</JobNumber>\
		</ValJob>\
		</FabSuiteXMLRequest>';
	
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',jobs).toString();
	if (fsResp.search('<Successful>1') == -1){
		return getFabSuiteError(fsResp);
	}
	return null;
}
/**
 * @param {String} fsResponse
 *
 * @properties={typeid:24,uuid:"F6C7E96A-80A9-4EBB-8E71-ECAC7A74F90D"}
 */
function getFabSuiteError(fsResponse){
	var regX = new RegExp(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	var error = regX.exec(fsResponse);
	return error[1];

}
/**
 * @AllowToRunInFind
 * 
 * @param status
 *
 * @properties={typeid:24,uuid:"FC886476-C72C-45F3-AA7C-9A60F06A6A1C"}
 */
function checkFSStatus(status){
	var winName = application.getActiveWindow().getName();
	var formName = application.getWindow(winName).controller.getName();
	if (scopes.prefs.lFabsuiteInstalled == 0){return null}//20181003
	scopes.fs.checkComFabsuite(null);
	/**	var jobList = '<FabSuiteXMLRequest>\
			<GetProductionControlJobInformation>\
			</GetProductionControlJobInformation>\
			</FabSuiteXMLRequest>';
		var jobs = com.call('FabSuiteXML',jobList).toString();
		//application.output('Jobs are '+jobs);*/
	if (globals.m.stationsThird[status]){
		status = globals.m.stationsThird[status].toLowerCase();
	}
	
	if (!globals.m.stationsThird[status]){return null}
	//getFSStations(globals.session.jobNumber);
	var station = '<FabSuiteXMLRequest>\
		<ValStation>\
		<Station>'+ status + 
		'</Station>\
		</ValStation>\
		</FabSuiteXMLRequest>';
	
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',station).toString();
	scopes.jobs.warningsX(null);
	if (fsResp.search('<Successful>0') != -1){
	//if (fsResp == ''){
		var error = getFabSuiteError(fsResp);
		scopes.globals.errorDialogMobile(null,'1220',null,error);
		return error;
	}
	return null;

}
/**
 * @param {String} jobNumber
 *
 * @properties={typeid:24,uuid:"72206525-A7E1-4FE9-ACA2-2EB1EBF27D06"}
 */
function getFSStations(jobNumber){
	var listStations = '<FabSuiteXMLRequest>\
		<GetStations>\
		<JobNumber>FabSuite2</JobNumber>\
		</GetStations>\
		</FabSuiteXMLRequest>';
	/** @type {String} */
	var stations = com.call('FabSuiteXML',listStations).toString();
	var lines = stations.split('\n');
	var regX = new RegExp(/<StationName>(.*)<\/StationName>/);
	for (var idx = 0;idx < lines.length;idx++){
		var stationName = regX.exec(lines[idx]);
		if (stationName){
			application.output('Status: '+stationName[1]);
		}
		
	}
	application.output('Stations are '+stations);
}
/**
 * @param jobNumber
 *
 * @properties={typeid:24,uuid:"8DA3DDCF-FD24-45CD-BD1D-684F4245F090"}
 */
function getFSLoadNums(jobNumber){
	//include unshipped loads
	var loadNums =  '<FabSuiteXMLRequest>\
		<GetLoads>\
		<JobNumber>'+jobNumber+
		'</JobNumber>\
		</GetLoads>\
		</FabSuiteXMLRequest>';
	/** @type {String} */
	var loads = scopes.globals.com.call('FabSuiteXML',loadNums).toString();
	var lines = loads.split('\n');
	var regX = new RegExp(/<StationName>(.*)<\/StationName>/);
	for (var idx = 0;idx < lines.length;idx++){
		var loadNumber = regX.exec(lines[idx]);
		if (loadNumber[0]){
			application.output('Loads: '+loadNumber[1]);
		}
		
	}
	//application.output('Stations are '+stations);
}
/**
 * @AllowToRunInFind
 * 
 * @param loadNumber
 * @param makeNewLoad
 *
 * @properties={typeid:24,uuid:"A3D4FB72-755D-4ABD-B03F-984ABB3F80FF"}
 */
function checkFSLoad(loadNumber,destination,makeNewLoad){
	//if (globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return null}//20181003
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (application.isInDeveloper()){application.output(globals.session.jobNumber)}//20181003
	var loadcheck = '<FabSuiteXMLRequest>\
		<ValTruck>\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\
		<TruckNumber>'+ loadNumber + '</TruckNumber>\
		<ActionIfNotExist>\
		Nothing\
		</ActionIfNotExist>\
		DEST\
		</ValTruck>\
		</FabSuiteXMLRequest>';
//		<ActionIfNotExist>0</ActionIfNotExist>\
	if (makeNewLoad){
		loadcheck = loadcheck.replace('Nothing','Add');
	}
	if (!destination){
		loadcheck = loadcheck.replace('DEST','');
	} else {
		loadcheck = loadcheck.replace('DEST','<Destination>'+destination+'</Destination>');		
	}
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',loadcheck).toString();
	if (fsResp.search('<Successful>0') != -1){
		return getFabSuiteError(fsResp);
	}
	return null;

}
/**
 * @AllowToRunInFind
 * 
 * @param {string} oldValue
 * @param {String} newValue
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"12B338B2-51AC-4A57-BE21-AAC5E081CEFA"}
 */
function checkFSSequences(sequences, event){
	if (application.getSolutionName() == 'STSmobile' && globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return true}//20181003
	if (!sequences){return true}
	var exceptions = [];
	importData.newSequences = [];
	/** @type {Array} */
	var seqs = sequences.split(',');
	if (importData.sequences.length > 0){
		for (var idx = 0;idx < seqs.length;idx++){
			var seq = seqs[idx].trim();
			if (importData.sequences.indexOf(seq) == -1){
				exceptions.push(seq);
			} else {
				importData.newSequences.push(seq);
			}
		}
		return (exceptions.length == 0);
	}
	var check = '<FabSuiteXMLRequest>\
					<GetSequences>\
					<JobNumber>'+globals.session.jobNumber+'</JobNumber>\
					</GetSequences>\
				</FabSuiteXMLRequest>';
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	var fieldValueName1 = 'Sequence';
	var fsError = fabSuiteError(fsResp);
	if (fsError){
		//show error from fabsuite
		scopes.globals.errorDialogMobile(event,1030,event.getElementName(),fsError);
		return false;
	}
	/** @type {Array} */
	var xmlField = '<FLD>(.*)<\/FLD>';
	var regexp1 = xmlField.replace(/FLD/g,fieldValueName1);
	var regX1 = new RegExp(regexp1);
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	var items = fsResp.split('\n');

	for (idx = 0;idx < items.length;idx++){
		var item1 = regX1.exec(items[idx]);
		if (item1){
			var item = item1[1];
			if (importData.sequences.indexOf(item) == -1){importData.sequences.push(item)}
			continue;
		}
	}
	if (importData.sequences){
		for (idx = 0;idx < seqs.length;idx++){
			seq = seqs[idx].trim();
			if (importData.sequences.indexOf(seq) == -1){
				exceptions.push(seq);
			} else {
				importData.newSequences.push(seq);
			}
		}
		return (exceptions.length == 0);
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
 * @properties={typeid:24,uuid:"F8405058-2E45-4633-B21C-5C1F1385592C"}
 * @AllowToRunInFind
 */
function checkFSJob(event) {
	if (globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return true}
	if (globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return true}//20181003

	if (!scopes.prefs.lFabsuiteInstalled){
		plugins.dialogs.showErrorDialog('1216',i18n.getI18NMessage('1216'));
		return;
	}
	if (forms.kiss_import){
		forms.kiss_import.fabSuiteJobExists = i18n.getI18NMessage('sts.txt.fabsuite.job.dne');
		forms.kiss_import.stsXJobAssoc = i18n.getI18NMessage('sts.status.none');
	}
	scopes.jobs.warningsMessage('Connecting to FabSuite',true);//DOI18
	if (checkComFabsuite(event)){
		scopes.jobs.warningsX();
		forms['kiss_import'].onActionHide();
		return;
		
	}
	if (!com){
		application.output('get new COM client');
		com = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
	}

	/** @type {String} */
	var fsUp = com;
	scopes.jobs.warningsMessage('Verifying FabSuite Connection',true);

	application.output('check fabsuite connection');
	if (!com || (fsUp && fsUp.toString().search('RemoteCOM') == -1)){
		var error = checkComFabsuite(event);
		if (error != ''){
			globals.DIALOGS.showErrorDialog('FabSuite Connection Failure','Connect Failure: '+error);
		}
	}

	var formName = event.getFormName();
	
	var jobNumber = importData.jobNumber;
	if (!jobNumber){
		jobNumber = forms.kiss_import.vJobNumber;
		importData.jobNumber = jobNumber;
	}
	var check = '<FabSuiteXMLRequest>\
					<GetProductionControlJobInformation>\
					<JobNumber>'+jobNumber+'</JobNumber>\
					</GetProductionControlJobInformation>\
				</FabSuiteXMLRequest>';
	scopes.jobs.warningsMessage(i18n.getI18NMessage('1202'),true);
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	application.output('job response FS '+fsResp);
	if (fsResp.search('<JobNumber>') == -1){//This Job Number Was Not Found In FabSuite. - 1030
		scopes.jobs.warningsMessage(i18n.getI18NMessage('1030'),true);
		plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1030'),i18n.getI18NMessage('1030'));
		forms[formName].clearBadEntry(event);
		globals.session.jobNumber = '';
		//scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		return true;
	}
	/** else {
		application.output('call on server');
		var headless = plugins.headlessclient.createClient('STSx','S','S',['headless']);// onSolutionOpen argument
		headless.queueMethod(null,'scopes.fs.serverFSCallRequest',[check],scopes.fs.serverFSResponseCallBack);
		//application.sleep(1000);
		//headless.shutdown();
	} */
	if (globals.session.tenantJobArray.indexOf(jobNumber) == -1){
		globals.getJobsTenant();
		if (globals.session.tenantJobArray.indexOf(jobNumber) == -1){
			scopes.jobs.warningsX();
			plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1217'),i18n.getI18NMessage('1217'));
			return true;
		}
	}
	if (globals.session.assocJobArray.indexOf(jobNumber) == -1){
		scopes.jobs.warningsX();
		plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1215'),i18n.getI18NMessage('1215'));
		return true;
	}
	// 1203 - Collecting job information from STS X
	// 1214 - Connection successful. 
	scopes.jobs.warningsMessage(i18n.getI18NMessage('1203')+' '+i18n.getI18NMessage('1214'),true);
	scopes.jobs.getJobIdInfo(jobNumber);//places it into scopes.jobs.importJob object
	globals.session.jobNumber = jobNumber;
	forms[formName].elements.btn_GetKiss.enabled = true;
	if (forms.kiss_import){
		forms.kiss_import.fabSuiteJobExists = i18n.getI18NMessage('sts.txt.fabsuite.job.exists');
		forms.kiss_import.stsXJobAssoc = scopes.jobs.importJob.associationName;
		if (globals.session.associationId != scopes.jobs.importJob.associationId){
			forms.kiss_import.elements.stsJobAssocName.fgcolor = 'red';
			forms.kiss_import.elements.btnSelect.enabled = false;
			plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1215'),i18n.getI18NMessage('1215'));
			forms.kiss_import.vJobNumber = '';
			scopes.jobs.warningsX();
			return true;
		}
	}
	//scopes.jobs.warningsMessage('Collecting Internal Job Piecemarks',true);

	//scopes.jobs.readPieceTables();
	scopes.jobs.warningsX();
	
	if (forms.kiss_import){
		//forms.kiss_import.elements.stsJobAssocName.fgcolor = 'black';
		forms.kiss_import.elements.btn_GetKiss.enabled = true;
		nextEntry(event);
	}
	return true;
}
/**
 * @AllowToRunInFind
 * 
 * @param {String} oldValue
 * @param {String} newValue
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3790F67D-62E4-47B5-B485-96FA922A6C6A"}
 */
function checkFSLots(lots, event) {
	if (application.getSolutionName() == 'STSmobile' && globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return true}//20181003
	if (!lots){return true}
	var exceptions = [];
	importData.newLots = [];
	/** @type {Array} */
	var lot = lots.split(',');
	if (importData.lots.length > 0){
		for (var idx = 0;idx < lot.length;idx++){
			var lotItem = lot[idx].trim();
			if (importData.lots.indexOf(lotItem) == -1){
				exceptions.push(lotItem);
			} else {
				importData.newLots.push(lotItem);
			}
		}
		return (exceptions.length == 0);
	}
	var check = '<FabSuiteXMLRequest>\n\
					<GetLots>\n\
					<JobNumber>'+importData.jobNumber+'</JobNumber>\n\
					</GetLots>\n\
				</FabSuiteXMLRequest>';
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	var fieldValueName1 = 'LotNumber';
	var fsError = fabSuiteError(fsResp);
	if (fsError){
		//show error from fabsuite
		scopes.globals.errorDialogMobile(event,1030,event.getElementName(),fsError);
		return false;
	}
	/** @type {Array} */
	var xmlField = '<FLD>(.*)<\/FLD>';
	var regexp1 = xmlField.replace(/FLD/g,fieldValueName1);
	var regX1 = new RegExp(regexp1);
	/** @type {String} */
	var items = fsResp.split('\n');

	for (idx = 0;idx < items.length;idx++){
		var item1 = regX1.exec(items[idx]);
		if (item1){
			var item = item1[1];
			if (importData.lots.indexOf(item) == -1){importData.lots.push(item)}
			continue;
		}
	}
	if (importData.lots.length > 0){
		for (var idx = 0;idx < lot.length;idx++){
			var lotItem = lot[idx].trim();
			if (importData.lots.indexOf(lotItem) == -1){
				exceptions.push(lotItem);
			} else {
				importData.newLots.push(lotItem);
			}
		}
		return (exceptions.length == 0);
	}
}
/**
 * Compare FabSuite items with entered items to validate entries in criteria selection
 * @param {String} xmlFieldName
 * @param {String} validString
 * @param {String} enteredString
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"71B23A89-E196-4620-9744-78C52C9C2E75"}
 * @AllowToRunInFind
 */
function checkResetToValidEntry(xmlFieldName,validString,enteredString,event){
	//var baseMessage = scopes.kiss.importMessages;
	var xmlField = '<FLD>(.*)<\/FLD>';
	var xmlField1 = xmlField.replace('/FLD/g',xmlFieldName);
	var dbValues = [];var chkValues = [];
	var collectBoth = false;
	switch (xmlFieldName){
		case 'Sequence' : 
			dbValues = importData.sequences;
			chkValues = importData.sequences;
			break;
		case 'LotNumber' : dbValues = importData.lots;
			chkValues = importData.lots;
			break;
		case 'DrawingNumber' : 
		case 'MainMark' : 
			chkValues = (xmlFieldName == 'DrawingNumber') ? importData.drawings : importData.mainMarks;
			dbValues = importData.mainMarks;
			/** @type {Array} */
			var dbValues2 = importData.drawings;
			collectBoth = true;
			break;
		default:
	}
	var choices = validString.split('\n');
	var regX = new RegExp(xmlField);
	if (collectBoth){
		xmlField1 = xmlField.replace(/FLD/g,'MainMark');
		var xmlField2 = xmlField.replace(/FLD/g,'DrawingNumber');
		regX = new RegExp(xmlField1);
		var regX2 = new RegExp(xmlField2);
	}
	//application.output('regex '+regX);
	for (var idx = 0;idx < choices.length;idx++){
		//application.output('choice idx '+choices[idx]);
		/** @type {String} */
		var item = regX.exec(choices[idx]);
		if (!item){
			if (collectBoth){
				var item2 = regX2.exec(choices[idx]);
				if (!item2){continue}
				if (dbValues2.indexOf(item2[1]) == -1){
					dbValues2.push(item2[1].trim());
				}
			}
			continue;
		}
		if (dbValues.indexOf(item[1]) == -1){
			dbValues.push(item[1].trim());//remove any extra spaces on outside of item
		}
	}	
	choices = enteredString.split(',');
	var replaceVal = '';
	var nonVal = '';
	for (idx = 0;idx < choices.length;idx++){
		//application.output(choices[idx]);
		if (chkValues.indexOf(choices[idx]) != -1){
			if (replaceVal == ''){replaceVal = choices[idx]} else {replaceVal += ','+choices[idx]}		
		} else {
			if (nonVal == ''){nonVal = choices[idx]} else {nonVal += ','+choices[idx]}
		}
	}
	if (chkValues.length == 0){nonVal = enteredString}
	if (nonVal != ''){
		//application.output('nonval '+nonVal);
		plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1074',['']),i18n.getI18NMessage('1074',['\n'+nonVal]));
		//scopes.globals.errorDialog(1030);
		var formName = event.getFormName();
		var elName = event.getElementName();
		var dataProv = forms[formName].elements[elName].getDataProviderID();
		forms[formName][dataProv] = replaceVal;
		// error dialog 'Lot %1 does not exist. Removed.' %nonVal%
	}
}
/**
 * @AllowToRunInFind
 *
 * @param {String} oldValue
 * @param {String} newValue
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"4B7B892A-B0D5-44D2-A20F-501A6A9F5851"}
 */
function checkFSMainMark(mainMarks,event){
	if (application.getSolutionName() == 'STSmobile' && globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return true}//20181003
	// use session.drawings array for STS X Embedded
	if (!mainMarks){return true}
	var exceptions = [];
	importData.newMarks = [];
	/** @type {Array} */
	var marks = mainMarks.split(',');
	if (importData.mainMarks.length > 0){
		for (var idx = 0;idx < marks.length;idx++){
			var mark = marks[idx].trim();
			if (importData.mainMarks.indexOf(mark) == -1){
				exceptions.push(mark);
			} else {
				importData.newMarks.push(mark);
			}
		}
		return (exceptions.length == 0);
	}
	var check = '<FabSuiteXMLRequest>\n\
		<GetAssemblies>\n\
		<JobNumber>'+importData.jobNumber+'</JobNumber>\n\
		</GetAssemblies>\n\
	</FabSuiteXMLRequest>';

	if (!com){
		checkComFabsuite(event);
	}
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	var fieldValueName1 = 'MainMark';
	var fieldValueName2 = 'DrawingNumber';
	var fsError = fabSuiteError(fsResp);
	if (fsError){
		//show error from fabsuite
		scopes.globals.errorDialogMobile(event,1030,event.getElementName(),fsError);
		return 'ERROR';
	}
	/** @type {Array} */
	var items = fsResp.split('\n');
	var xmlField = '<FLD>(.*)<\/FLD>';
	var regexp1 = xmlField.replace(/FLD/g,fieldValueName1);
	var regexp2 = xmlField.replace(/FLD/g,fieldValueName2);
	var regX1 = new RegExp(regexp1);
	var regX2 = new RegExp(regexp2);

	for (idx = 0;idx < items.length;idx++){
		var item1 = regX1.exec(items[idx]);
		if (item1){
			var item = item1[1];
			if (importData.mainMarks.indexOf(item) == -1){importData.mainMarks.push(item)}
			continue;
		}
		var item2 = regX2.exec(items[idx]);
		if (item2){
			var item = item2[1];
			if (importData.drawings.indexOf(item) == -1){importData.drawings.push(item)}
			continue;			
		}
	}
	for (idx = 0;idx < marks.length;idx++){
		mark = marks[idx].trim();
		if (importData.mainMarks.indexOf(mark) == -1){
			exceptions.push(mark);
		} else {
			importData.newMarks.push(mark);
		}
	}
	return (exceptions.length == 0);
}
/**
 * @AllowToRunInFind
 * 
 * @param drawings
 * @param event
 *
 * @properties={typeid:24,uuid:"E92A7A06-BA71-49EB-B32A-9F70F776B5E7"}
 */
function checkFSDrawingNumber(drawings,event){
	if (application.getSolutionName() == 'STSmobile' && globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return null}//20181003
	// use session.drawings array for STS X Embedded
	if (!drawings){return true}
	if (globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return true}
	var exceptions = [];
	importData.newDraws = [];
	drawings = drawings.replace(/\./g,',');
	application.output('\n\n\ndrawings from kiss import view '+drawings);
	/** @type {Array} */
	var drawing = drawings.split(',');
	if (importData.drawings.length > 0){
		for (var idx = 0;idx < drawing.length;idx++){
			var drawingNumber = drawing[idx].trim();
			if (importData.drawings.indexOf(drawingNumber) == -1){
				exceptions.push(drawingNumber);
			} else {
				importData.newDraws.push(drawingNumber);
			}
		}
		return (exceptions.length == 0);
	}
	var check = '<FabSuiteXMLRequest>\n\
		<GetAssemblies>\n\
		<JobNumber>'+importData.jobNumber+'</JobNumber>\n\
		</GetAssemblies>\n\
	</FabSuiteXMLRequest>';

	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	var fieldValueName1 = 'MainMark';
	var fieldValueName2 = 'DrawingNumber';
	var fsError = fabSuiteError(fsResp);
	if (fsError){
		//show error from fabsuite
		scopes.globals.errorDialogMobile(event,1030,event.getElementName(),fsError);
		return false;
	}
	/** @type {Array} */
	var items = fsResp.split('\n');
	var xmlField = '<FLD>(.*)<\/FLD>';
	var regexp1 = xmlField.replace(/FLD/g,fieldValueName1);
	var regexp2 = xmlField.replace(/FLD/g,fieldValueName2);
	var regX1 = new RegExp(regexp1);
	var regX2 = new RegExp(regexp2);

	for (idx = 0;idx < items.length;idx++){
		var item1 = regX1.exec(items[idx]);
		if (item1){
			var item = item1[1];
			if (importData.mainMarks.indexOf(item) == -1){importData.mainMarks.push(item)}
			continue;
		}
		var item2 = regX2.exec(items[idx]);
		if (item2){
			var item = item2[1];
			if (importData.drawings.indexOf(item) == -1){importData.drawings.push(item)}
			continue;			
		}
	}
	for (idx = 0;idx < drawing.length;idx++){
		drawingNumber = drawing[idx].trim();
		if (importData.drawings.indexOf(drawingNumber) == -1){
			exceptions.push(drawingNumber);
		} else {
			importData.newDraws.push(drawingNumber);
		}
	}
	return (exceptions.length == 0);
	
}
/**
 * @param {String} xml
 *
 * @properties={typeid:24,uuid:"03E507BB-4471-4BA2-A945-6D02B54DAE96"}
 * @AllowToRunInFind
 */
function serverFSCallRequest(xml){
	//if (!fsCom){
		var fsCom = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
		var xmlConnect = '<FabSuiteXMLRequest>\
			<Connect>\
				<IPAddress>localhost</IPAddress>\
				<PortNumber>3306</PortNumber>\
				<Username>admin</Username>\
				<Password>fab</Password>\
			</Connect>\
		</FabSuiteXMLRequest>';
		var response = 'NO COM';
		var sample = fsCom.toString();
		if (sample.search('RemoteCOM') != -1){
			response = fsCom.call('FabSuiteXML',xmlConnect);
			//fsCom.release();
			return response;
		}
	//}
	response = fsCom.call('FabSuiteXML',xml);
	//fsCom.release();
	return response;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"95E27A86-8839-4679-A645-8790126FEA6D"}
 */
function serverFSResponseCallBack(event){
	if (event.getType() == JSClient.CALLBACK_EVENT)	{
		application.output("callback data, name: " + event.data);
	} else if (event.getType() == JSClient.CALLBACK_EXCEPTION_EVENT) {
		application.output("exception callback, name: " + event.data);
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FA580FD8-5BA3-4072-9970-D83AC77F3E56"}
 */
function nextEntry(event){
	var formName = event.getFormName();
	/** @type Array */
	var order = forms[formName].entryOrder;
	var currentEntry = event.getElementName();
	var idx = order.indexOf(currentEntry);
	if (forms[formName].goToEntry){
		forms[formName].elements[forms[formName].goToEntry].requestFocus();
		forms[formName].goToEntry = null;
		return;
	}
	if (idx <= order.length-2){
		forms[formName].elements[order[idx+1]].requestFocus();
	}
	return;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A986C975-4C28-474D-A782-7F19C1AA91FF"}
 */
function showProgressInit(event){
	var formName = event.getFormName();
	progressWin = application.createWindow('Messages',JSWindow.WINDOW);
	progressWin.show('import_messages');
}
/**
 * @param {JSEvent} event
 * @param {String} message
 *
 * @properties={typeid:24,uuid:"1504C08D-A81E-467E-AAF9-9E891D47F0B5"}
 */
function showProgressUpdate(event,message){
	//progressMsg = 
	forms['import_messages'].message = message;
	application.updateUI();
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8F569E1D-2131-47CD-BAD8-32515BE0A28B"}
 */
function showProgessDone(event){
	progressWin.hide();
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4A3F4C5B-D25D-4DA7-B20A-17CF4D63C1C5"}
 */
function checkComFabsuite(event){
	if (com){
		var ping = '<FabSuiteXMLRequest><Ping></Ping></FabSuiteXMLRequest>';
		var respons = com.call('FabSuiteXML',ping).toString();
		application.output('PING: |'+respons);
		if (respons.search("<Successful>1") != -1){
			return '';
		}
	}
	scopes.jobs.warningsYes(event);
	scopes.jobs.warningsMessage('Connecting to FabSuite',true);
	if (!scopes.prefs.lFabsuiteInstalled){
		scopes.jobs.warningsMessage('FabSuite Is Not Installed',true);
		var start = new Date().getTime();
		var time = new Date().getTime();
		while (time-start < 2000){
			time = new Date().getTime();
		}
		scopes.jobs.warningsX();
		globals.DIALOGS.showErrorDialog('FabSuite Not Installed','FabSuite Not Installed')
		return 'FabSuite Not Installed';
	}
	fabSuiteLocal = false;
	if (!com){
		com = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
	}
	if (!com || !com.isJACOBLoaded()) {
		scopes.jobs.warnings("Error loading COM: \n" + plugins.servoyguy_servoycom.getLastError(),true);
		globals.DIALOGS.showErrorDialog('Error loading COM','Error loading COM');
		return 'Error Loading COM';
	}
	var fsServer = scopes.prefs.fabsuiteServerName;
	var fsPass = scopes.prefs.fabsuitepassword;
	var fsUser = scopes.prefs.fabsuiteUserid;
	var fsPort = scopes.prefs.fabsuiteDatabase;
	if (!fsServer || !fsPass || !fsPort || !fsUser){
		scopes.jobs.warnings("Fabsuite Connection in Preferences Empty",true);
		globals.DIALOGS.showErrorDialog('FabSuite Empty Connection Preferences','FabSuite Empty Connection Preferences')
		return 'FabSuite Empty Connection Preferences';
	}
	var serverList = [fsServer,'localhost']; var server = '';//20180108 if first server identified fails, use localhost
	while (server = serverList.pop()){
		var xmlConnect = '<FabSuiteXMLRequest>\
								<Connect>\
									<IPAddress>'+server+'</IPAddress>\
									<PortNumber>'+fsPort+'</PortNumber>\
									<Username>'+fsUser+'</Username>\
									<Password>'+fsPass+'</Password>\
								</Connect>\
							</FabSuiteXMLRequest>';
		/** @type {String} */
		var response = 'NO COM';
		/** @type {String} */
		var sam2 = com;
		var sample = sam2.toString();
		if (sample.search('RemoteCOM') != -1){
			response = com.call('FabSuiteXML',xmlConnect);		
		} else {
			com = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
			response = com.call('FabSuiteXML',xmlConnect);	
		}
		var error = fabSuiteError(response);
		if (!error){
			break;
		}
	}
	if (error){
		globals.DIALOGS.showErrorDialog('FabSuite Error','FabSuite Error: \n'+error);
	}


	/** @type {String} */
	var response2 = response.toString();
	if (response2.search('<Successful>0') != -1){
		scopes.jobs.warningsMessage('Fabsuite Query Error '+response2);
		if (error){
			return error;
		}
	}
	//application.output('com response: |'+response+'|');
	if (application.getSolutionName() == 'STS X Embedded'){
		var xmlVersion = '	<FabSuiteXMLRequest>\
			<Version/>\
			</FabSuiteXMLRequest>';
		var fsResp = com.call('FabSuiteXML',xmlVersion);
		//application.output(fsResp);
		var regX = new RegExp(/>([0-9]*\..*)</);
		var version = regX.exec(fsResp);
		forms.sts_x.elements.indFabSuite.text = version[1];
	}
	fabSuiteLocal = true;
	return '';
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"DDD3859A-23D3-41B8-8F73-ACBA7612D9CC"}
 */
function checkFSInstalled(event){
	if (!scopes.prefs.lFabsuiteInstalled){
		scopes.jobs.warningsMessage('FabSuite Is Not Installed',true);
		var start = new Date().getTime();
		var time = new Date().getTime();
		while (time-start < 2000){
			time = new Date().getTime();
		}
		return false;
	}
	return true;
}
/**
 * @param {String} fsResponse
 *
 * @properties={typeid:24,uuid:"D5CEC63D-9B1E-4648-A607-8C67A6965DA0"}
 * @AllowToRunInFind
 */
function fabSuiteError(fsResponse){
	/** @type {String} */
	var response = fsResponse+'';
	var regexp = new RegExp('<ErrorMessage>(.*)</ErrorMessage>');
	var error = response.match(regexp);
	if (error){
		return error[1];
	}
	return '';
}
/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D73839BE-6A22-4A90-8C1B-8E0D656D880E"}
 */
function onFocusGained(event) {
	forms[event.getFormName()].goToEntry = event.getElementName();
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1EB267E3-63A3-4F40-811B-4F366B8ACF3C"}
 */
function verifyKissImportFilters(event) {
	// Verify job, sequences, lots, part numbers, drawings
	var job = forms.kiss_import.vJobNumber;
	var sequences = forms.kiss_import.vSeqNumber;
	var lots = forms.kiss_import.vLotNumber;
	var drawings = forms.kiss_import.vDrawingNumber;
	var parts = forms.kiss_import.vPartNumber;
	var verified = false;
	if (checkFSJob(event)){
		if (application.isInDeveloper()){application.output('RM check main mark filter kiss import')}
		var verMark = checkFSMainMark(parts,event); 
		if (application.isInDeveloper()){application.output('RM AFTER check main mark filter kiss import')}
		if (!verMark){forms.kiss_import.vPartNumber = importData.newMarks.join(',')}
		var verDraw = checkFSDrawingNumber(drawings,event);
		if (!verDraw){forms.kiss_import.vDrawingNumber = importData.newDraws.join(',')}
		var verLot = true || checkFSLots(lots,event);
		if (!verLot){forms.kiss_import.vLotNumber = importData.newLots.join(',')}
		var verSeq = checkFSSequences(sequences,event);
		if (!verSeq){forms.kiss_import.vSeqNumber = importData.newSequences.join(',')}
		application.updateUI();
		
	}
	return verMark && verDraw && verLot && verSeq;
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
 * @properties={typeid:24,uuid:"8F2FF5DA-7A9F-4B2C-B807-C2D6B40C4D5F"}
 */
function onDataChangeFSUN(oldValue, newValue, event) {
	if (!com){
		checkComFabsuite(event);
	}
	var server = scopes.globals.fabsuiteServerName;
	var fsPass = scopes.globals.fabsuitepassword;
	var fsPort = scopes.globals.fabsuiteDatabase;
	var fsUser = scopes.globals.fabsuiteUserid;
	var verifyUserName = '<FabSuiteXMLRequest>\
		<StsSetParmExecuteAs>\
			<IPAddress>'+server+'</IPAddress>\
			<PortNumber>'+fsPort+'</PortNumber>\
			<Username>'+fsUser+'</Username>\
			<Password>'+fsPass+'</Password>\
			<ExecuteAs>'+newValue+'</ExecuteAs>\
		</StsSetParmExecuteAs >\
	</FabSuiteXMLRequest>';
	var fsResp = com.call('FabSuiteXML',verifyUserName).toString();
	if (application.isInDeveloper()){application.output(fsResp);}
	scopes.jobs.warningsX(event);
	
	null;
	return true;
}
/**
 * @param commitType
 *
 * @properties={typeid:24,uuid:"2ADDF248-A0B7-4035-A6BD-FC85698CCB18"}
 */
function fabSuiteSaved(commitType){
	var saved = true;
	// is fs installed
	application.output('fabsuite installed '+scopes.prefs.lFabsuiteInstalled);
	saved = (scopes.prefs.lFabsuiteInstalled == 0);
	if (saved){return true}
	// is fs available
	application.output('fabsuite pinged for access');
	saved = !saved && fabSuitePing(null);
	application.output('fabsuite pinged for access '+saved);
	if (!saved){return false}
	// is this an fs job - check job entry
	application.output('fabsuite rf job '+globals.mob.job.rf);
	saved = saved && (globals.mob.job.rf.toUpperCase() != i18n.getI18NMessage('sts.interface.fabsuite').toUpperCase());
	if (!saved){return true}
	application.output('fabsuite rf job '+globals.mob.job.rf+' '+saved);
	// is this an fs approved process, so far all are approved except bundle
	application.output('fabsuite approved process '+!fabSuiteProcess());
	saved = saved && (fabSuiteProcess());
	if (!saved){return true}
	application.output('fabsuite approved process '+!fabSuiteProcess()+' '+saved);
	// check for required data
	// send to fs for update
	application.output('update fabsuite')
	saved = saved && fabSuiteUpdate(commitType);
	application.output('update fabsuite'+saved);
	// return error message
	return saved;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"467A321D-A423-46A7-98F3-B6A1E478AE55"}
 */
function fabSuitePing(event){
	var fsPing = '<FabSuiteXMLRequest>\
		<Ping>\
		</Ping>\
		</FabSuiteXMLRequest>';
	if (com){
		var fsResp = com.call('FabSuiteXML',fsPing);
		if (fabSuiteResponse(fsResp) == ''){
			return true;
		}
	}
	globals.rfErrorShow(i18n.getI18NMessage('1170'));
	return false;
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param {String} fsResp
 *
 * @properties={typeid:24,uuid:"1C8461C0-6130-45E2-A750-802B7D59CB96"}
 */
function fabSuiteResponse(fsResp){
	fsResp = fsResp + '';
	if (fsResp && fsResp.search('<Successful>1') == -1){
		return getFabSuiteError(fsResp);
	}
	return '';
}
/**
 * @properties={typeid:24,uuid:"40A1E878-6BFA-4978-8E17-C4542FDC4F6F"}
 */
function fabSuiteProcess(){
	var valid = true;
	var currentView = globals.session.program;
	var invalids = [i18n.getI18NMessage('sts.mobile.build.bundles')];
	for (var index = 0;index < invalids.length;index++){
		if (invalids[index] == currentView){return false}
	}
	return valid;
}
/**
 * @properties={typeid:24,uuid:"C01EB622-287B-46CE-9059-98E767D10B88"}
 * @AllowToRunInFind
 */
function fabSuiteUpdate(commitType){//shopFloorSave
	if (commitType.search(/(Save)|(Delete)/) != 0){return false}
	var date = globals.mob.date;//new Date();//flow down from data update

	var userEmployee = (globals.m.employee3rdParty[firstEmp]) ? globals.session.employeeNum : '';
	var pieceMark = globals.mob.piecemark.piecemark;//exclude this when showing assembly, no minors
	var station = globals.mob.statusCode3rdParty;//required
	var quantity = globals.mob.idfiles.length;//required
	var mainMark = globals.mob.piecemark.parent_piecemark;
	var employee = 'admin';//required employee that completed the work
	if (scopes.prefs.lFabsuitePassWorker == 1){
		var firstEmp = forms.rf_mobile_view.statusWorker.split('.')[0];
		if (false && globals.mob.reverseWorker){//disable transaction reversal by anyone for a specific worker
			firstEmp = globals.mob.reverseWorker;
		}
		if (firstEmp){
			if (globals.m.employee3rdParty[firstEmp]){
				employee = globals.m.employee3rdParty[firstEmp];
			}
		}
	}
	//employee = 'admin';
	if (!pieceMark || !station || !quantity || !mainMark || !employee){
		globals.rfErrorShow(i18n.getI18NMessage('1017'));
		return false;
	}
	
	//var commitType = 'Save';//Save/Delete/required use F8 to indicate removal
	var jobNumber = globals.mob.job.number;
	var sequence = forms.rf_mobile_view.vSequenceList[globals.mob.idfile.sequence_id];
	var lotNumber = globals.mob.piecemark.lot;
	var instanceNumbers = globals.mob.idfile.pcmk_instance;//accepts only numeric values, as well as hyphen
	instanceNumbers = '';
	var serialNumber = 'FS-5319D7A3-D71F-11E5-8AFE-A292F4137E41';
	//serialNumber = globals.mob.idfile.guid_minor;
	//serialNumber = globals.mob.idfile.guid_major;
	serialNumber = globals.mob.barcode;
	serialNumber = '';
	var day = date.getDate();//this changes unless the 
	if (day < 10){day = "0"+day}
	var month = date.getMonth()+1;
	if (month < 10){month = "0"+month}
	var execDate = date.getFullYear()+'-'+month+'-'+day;//required
	var hours = 0;
	var batchId = '';
	var _commitType = '<CommitType>'+commitType+'</CommitType>\n';
	var _jobNumber = '<JobNumber>'+jobNumber+'</JobNumber>\n';
	var _mainMark = '<MainMark>'+mainMark+'</MainMark>\n';
	var _pieceMark = '<PieceMark>'+pieceMark+'</PieceMark>\n';
	var _sequence = '<Sequence>'+sequence+'</Sequence>\n';
	var _lotNumber = '<LotNumber>'+lotNumber+'</LotNumber>\n';
	var _station = '<Station>'+station+'</Station>\n';
	var _quantity = '<Quantity>'+quantity+'</Quantity>\n';
	var _instanceNumbers = '<InstanceNumbers>'+instanceNumbers+'</InstanceNumbers>\n';
	var _serialNumber = '<BarcodeSerialNumber>'+serialNumber+'</BarcodeSerialNumber>\n';
	var _employee = '<Employee>'+employee+'</Employee>\n';
	var _execDate = '<Date>'+execDate+'</Date>\n';
	var _hours = '<Hours>'+hours+'</Hours>\n';
	var _batchId = '<BatchID>'+batchId+'</BatchID>\n';
	var _asUser = '<AsUser>'+userEmployee+'</AsUser>\n';

	var saveDataXML = '<FabSuiteXMLRequest>\
	<ShopFloorSave>\
	TYPE JOBNUMBER MAJOR MINOR SEQUENCENUM LOTNUMBER STATION QUANTITY INSTANCES SERIALNUM ASUSER EMPLOYEE DATE HOURS BATCH \
	</ShopFloorSave>\
	</FabSuiteXMLRequest>';
	saveDataXML = saveDataXML.replace('TYPE',_commitType);
	saveDataXML = (!jobNumber) ? saveDataXML.replace('JOBNUMBER','') : saveDataXML.replace('JOBNUMBER',_jobNumber);
	saveDataXML = (!mainMark) ? saveDataXML.replace('MAJOR','') : saveDataXML.replace('MAJOR',_mainMark);
	saveDataXML = (!pieceMark || (pieceMark.toUpperCase() == mainMark.toUpperCase())) ? saveDataXML.replace('MINOR','') : saveDataXML.replace('MINOR',_pieceMark);
	saveDataXML = (!sequence) ? saveDataXML.replace('SEQUENCENUM','') : saveDataXML.replace('SEQUENCENUM',_sequence);
	saveDataXML = (!lotNumber) ? saveDataXML.replace('LOTNUMBER','') : saveDataXML.replace('LOTNUMBER',_lotNumber);
	saveDataXML = saveDataXML.replace('STATION',_station);
	saveDataXML = saveDataXML.replace('QUANTITY',_quantity);
	saveDataXML = (!instanceNumbers) ? saveDataXML.replace('INSTANCES','') : saveDataXML.replace('INSTANCES',_instanceNumbers);
	saveDataXML = (!serialNumber) ? saveDataXML.replace('SERIALNUM','') : saveDataXML.replace('SERIALNUM',_serialNumber);
	saveDataXML = saveDataXML.replace('EMPLOYEE',_employee);
	saveDataXML = saveDataXML.replace('DATE',_execDate);
	saveDataXML = (!hours) ? saveDataXML.replace('HOURS','') : saveDataXML.replace('HOURS',_hours);
	saveDataXML = (!batchId) ? saveDataXML.replace('BATCH','') : saveDataXML.replace('BATCH',_batchId);
	saveDataXML = (!userEmployee) ? saveDataXML.replace('ASUSER','') : saveDataXML.replace('ASUSER',_asUser);//save employee who is running the mobile computer
	application.output(saveDataXML);
	var fsResp = com.call('FabSuiteXML',saveDataXML);
	application.output('RESPONSE: '+fsResp);
	var fsErr = fabSuiteError(fsResp);
	if (fsErr != ''){
		globals.rfErrorShow('FabSuite: '+fsErr);
		return false;
	}
	return true;
	// RESPONSE: <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
	//<FabSuiteXMLResponse xmlns="http://www.fabsuite.com/xml/fabsuite-xml-response-v0108.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	//  <XMLError>Fatal Error (9, 7): expected end of tag 'CommitType'</XMLError>
	//</FabSuiteXMLResponse>
  
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"1543AA60-CC91-42EF-95C4-1C0D9529508B"}
 */
function checkFSNextLoad(){
	// quick check assemblies
	
	var check = '<FabSuiteXMLRequest>\
		<GetAssemblies>\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\
		<Filters>\
			<Filter>\
				<FilterType>MainMark</FilterType>\
				<FilterValue>8B2</FilterValue>\
			</Filter>\
		</Filters>\
		</GetAssemblies>\
		</FabSuiteXMLRequest>';
	var two = com.call('FabSuiteXML',check);
	plugins.XmlReader.readXmlDocumentFromString(two);
	if (application.isInDeveloper()){application.output(check+'\n'+two.toString())}
	
	
	//if (globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return null}//20181003
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (application.isInDeveloper()){application.output(globals.session.jobNumber)}//20181003
	var loadcheck = '<FabSuiteXMLRequest>\
		<MaxTruck>\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\
		</MaxTruck>\
		</FabSuiteXMLRequest>';
	
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',loadcheck).toString();
	if (fsResp.search('<Successful>0') != -1){
		return getFabSuiteError(fsResp);
	}
	var regexp = new RegExp('<NextAvailableLoadNumber>(.*)<\/NextAvailableLoadNumber>');
	var truck = fsResp.match(regexp);
	var nextTruck = null;
	if (truck){
		nextTruck = truck[1];
	}
	//if (application.isInDeveloper()){application.output('max truck: '+fsResp)}
	return nextTruck;

}
/**
 * @param {String} jobNumber
 *
 * @properties={typeid:24,uuid:"9E66A4F5-24F9-4DC1-A9A7-EABAF87CD0FF"}
 */
function getFSInterimLoadDests(jobNumber){
	//get list of interim ship dests
	// ... FS GetLoads, destination is company code of interim load destination FSReq IntermediateCompanyCodes
	// return an array
	var destArray = new Array();
	var interimDests =  '<FabSuiteXMLRequest>\
		<IntermediateCompanyCodes>\
		<JobNumber>'+jobNumber+'</JobNumber>\
		</IntermediateCompanyCodes>\
		</FabSuiteXMLRequest>';
	/** @type {String} */
	var dests = com.call('FabSuiteXML',interimDests).toString();
	var lines = dests.split('\n');
	var regX = new RegExp(/<CompanyCode>(.*)<\/CompanyCode>/);
	for (var idx = 0;idx < lines.length;idx++){
		var dest = regX.exec(lines[idx]);
		if (dest){
			destArray.push(dest[1])
			if (application.isInDeveloper()){application.output('RM: Dest: '+dest[1]);}
		}
		
	}
	return destArray;
}
/**
 * @param event
 * @param barcode
 *
 * @properties={typeid:24,uuid:"98BAA31B-1A0C-4B8D-B890-B1A57BC11654"}
 */
function getReceivedBarcode(event,barcode){
	//application.output(' barcode: '+barcode)
	var xmlReadReceive = '<FabSuiteXMLRequest>\
		<ReceiveChecklistScan>\
		<ChecklistSerialNumber>'+barcode+'</ChecklistSerialNumber>\
		</ReceiveChecklistScan>\
		</FabSuiteXMLRequest>';
	var rawMat = com.call('FabSuiteXML',xmlReadReceive).toString();
	application.output(rawMat)
	var errorMatch = rawMat.match(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	if (!errorMatch){
		var rawMatFields = {
			ponumber : rawMat.match(/<PONumber>(.*)<\/PONumber>/)[1],
			qtyordered : rawMat.match(/<QuantityOrdered>(.*)<\/QuantityOrdered>/)[1],
			qtyremaining : rawMat.match(/<QuantityRemaining>(.*)<\/QuantityRemaining>/)[1],
			shape : rawMat.match(/<Shape>(.*)<\/Shape>/)[1],
			grade : rawMat.match(/<Grade>(.*)<\/Grade>/)[1],
			dimensions : rawMat.match(/<Dimensions>(.*)<\/Dimensions>/)[1],
			length : rawMat.match(/<Length>(.*)<\/Length>/)[1],
			weighteach : rawMat.match(/<WeightEach>(.*)<\/WeightEach>/)[1],
			error : ''
		}
	} else {
		rawMatFields = {
			error : errorMatch[1]
		}
	}
	return rawMatFields;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param barcode
 *
 * @properties={typeid:24,uuid:"E89D5A56-DFA8-4B96-8D1F-97F5D708ED8F"}
 */
function fabsuiteGetReceivedBarcodeInv(event,barcode){
	var xmlReadReceiveBC = '<FabSuiteXMLRequest>\
		<ValInventory>\
		<SerialNumber>'+barcode+'</SerialNumber>\
		</ValInventory>\
		</FabSuiteXMLRequest>';
	var rawMat = com.call('FabSuiteXML',xmlReadReceiveBC).toString();
	var errorMatch = rawMat.match(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	if (!errorMatch){
		var rawMatFields = {
			jobnumber : rawMat.match(/<JobReserve>(.*)<\/JobReserve>/)[1],
			error : ''
		}
	} else {
		rawMatFields = {
			error : errorMatch[1]
		}
	}
	return rawMatFields;

}
/**
 * @param event
 * @param barcode
 * @param qty
 *
 * @properties={typeid:24,uuid:"B69F4894-75EB-41A5-B077-4354D815EC78"}
 */
function fabsuiteSetReceivedBarcode(event,clBarcode,stsBarcode,qty,bcData){
	var xmlReadReceiveBC = '<FabSuiteXMLRequest>\
		<Receive>\
		<ChecklistSerialNumber>'+clBarcode+'</ChecklistSerialNumber>\
		<SerialNumber>'+stsBarcode+'</SerialNumber>\
		<Quantity>'+qty+'</Quantity>\
		_PO_DD_CO_HT_LO_LO2_RM_BL\
		</Receive>\
		</FabSuiteXMLRequest>';

	application.output('remarks '+bcData.receivingremarks)
	xmlReadReceiveBC = (bcData.ponumber) ? xmlReadReceiveBC.replace('_PO','<PONumber>'+bcData.ponumber+'</PONumber>\\\n') : xmlReadReceiveBC.replace('_PO','');
	xmlReadReceiveBC = (bcData.deliverydate) ? xmlReadReceiveBC.replace('_DD','<DeliveryDate>'+getFsDateFormat(bcData.deliverydate)+'</DeliveryDate>\\\n') : xmlReadReceiveBC.replace('_DD','');
	xmlReadReceiveBC = (bcData.countryoforigin) ? xmlReadReceiveBC.replace('_CO','<CountryOfOrigin>'+bcData.countryoforigin+'</CountryOfOrigin>\\\n') : xmlReadReceiveBC.replace('_CO','');
	xmlReadReceiveBC = (bcData.heatnumber) ? xmlReadReceiveBC.replace('_HT','<HeatNumber>'+bcData.heatnumber+'</HeatNumber>\\\n') : xmlReadReceiveBC.replace('_HT','');
	xmlReadReceiveBC = (bcData.location) ? xmlReadReceiveBC.replace('_LO','<Location>'+bcData.location+'</Location>\\\n') : xmlReadReceiveBC.replace('_LO','');
	xmlReadReceiveBC = (bcData.location2) ? xmlReadReceiveBC.replace('_LO2','<SecondaryLocation>'+bcData.location2+'</SecondaryLocation>\\\n') : xmlReadReceiveBC.replace('_LO2','');
	xmlReadReceiveBC = (bcData.receivingremarks) ? xmlReadReceiveBC.replace('_RM','<ReceivingRemarks>'+bcData.receivingremarks+'</ReceivingRemarks>\\\n') : xmlReadReceiveBC.replace('_RM','');
	xmlReadReceiveBC = (bcData.billoflading) ? xmlReadReceiveBC.replace('_BL','<BillOfLadingNumber>'+bcData.billoflading+'</BillOfLadingNumber>\\\n') : xmlReadReceiveBC.replace('_BL','');
	var rawMat = com.call('FabSuiteXML',xmlReadReceiveBC).toString();
	if (!rawMat){
		com = null;
		checkComFabsuite(event);
	}
	rawMat = rawMat.toString();
	application.output('RM '+rawMat)
	var errorMatch = rawMat.match(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	if (!errorMatch){
		var rawMatFields = {
			qtyremaining : rawMat.match(/<QuantityRemaining>(.*)<\/QuantityRemaining>/)[1],
			error : ''
		}
	} else {
		rawMatFields = {
			error : errorMatch[1]
		}
	}
	return rawMatFields;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"6A27ED08-A90A-465C-99D8-6980A09A21A3"}
 */
function getFsDateFormat(date){
	var day = date.getDate();
	if (day < 10){day = "0"+day}
	var month = date.getMonth()+1;
	if (month < 10){month = "0"+month}
	return date.getFullYear()+'-'+month+'-'+day;
}