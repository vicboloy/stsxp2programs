/**
 * @properties={typeid:35,uuid:"1E6EC07A-65CF-475C-BFCA-D4AA56D7BC25",variableType:-4}
 */
var fabSuiteLocal = true;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65DB1A5C-8B2F-4372-8CD0-DFD0910971C7"}
 */
var progressWin = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E037F5AB-3855-4CC8-84B5-0BB6A741A5A2"}
 */
var progressMsg = '';
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
	if (checkComFabsuite(null) != ''){return}

	//getProductionControlJobs
	//plugins.headlessclient
	var jobs = '	<FabSuiteXMLRequest>\
		<ValJob>\n\
		<JobNumber>'+ importData + 
		'</JobNumber>\n\
		</ValJob>\n\
		</FabSuiteXMLRequest>';
	
	/** @type {String} */
	var fsResp = globals.fsCom.call('FabSuiteXML',jobs).toString();
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
	return i18n.getI18NMessage('sts.interface.fabsuite')+': '+error[1];

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
	var station = '<FabSuiteXMLRequest>\
		<ValStation>\n\
		<Station>'+ status + '</Station>\n\
		</ValStation>\n\
		</FabSuiteXMLRequest>';
	
	if (formName.search('status_description') == 0 || !globals.m.stationsThird[status]){
		scopes.fs.checkComFabsuite(null);
		/** @type {String} */
		var fsResp = globals.fsCom.call('FabSuiteXML',station).toString();
		scopes.jobs.warningsX(null);
		if (fsResp.search('<Successful>0') != -1){
			var error = getFabSuiteError(fsResp);
			scopes.globals.errorDialogMobile(null,'1220',null,error);
			return error;
		}
	} 
	return null;
}
/**
 * @param {String} jobNumber
 *
 * @properties={typeid:24,uuid:"72206525-A7E1-4FE9-ACA2-2EB1EBF27D06"}
 */
function getFSStations(jobNumber){
	if (checkComFabsuite(null) != ''){return null}
	var listStations = '<FabSuiteXMLRequest>\
		<GetStations>\n\
		<JobNumber>FabSuite2</JobNumber>\n\
		</GetStations>\n\
		</FabSuiteXMLRequest>';
	/** @type {String} */
	var stations = globals.fsCom.call('FabSuiteXML',listStations).toString();
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
	if (checkComFabsuite(null) != ''){return null}
	var loadNums =  '<FabSuiteXMLRequest>\
		<GetLoads>\n\
		<JobNumber>'+jobNumber+'</JobNumber>\n\
		</GetLoads>\n\
		</FabSuiteXMLRequest>';
	application.output(loadNums);
	/** @type {String} */
	var loads = scopes.globals.fsCom.call('FabSuiteXML',loadNums).toString();
	application.output(loads);
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
 * @param {String} loadNumber
 * @param {String} destination
 * @param makeNewLoad
 *
 * @properties={typeid:24,uuid:"A3D4FB72-755D-4ABD-B03F-984ABB3F80FF"}
 */
function checkFSLoad(loadNumber,destination,toBeReturned,makeNewLoad){
	//if (globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return null}//20181003
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (!globals.session.jobIsFabSuite){return null}
	if (application.isInDeveloper()){application.output(globals.session.jobNumber)}//20181003
	if (checkComFabsuite(null) != ''){return null}
	var loadcheck = '<FabSuiteXMLRequest>\
		<ValTruck>\n\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\n\
		<TruckNumber>'+ loadNumber + '</TruckNumber>\n\
		<ActionIfNotExist>\n\
		Nothing\n\
		</ActionIfNotExist>\n\
		DEST\
		RETURNED\
		</ValTruck>\n\
		</FabSuiteXMLRequest>';
//		<ActionIfNotExist>0</ActionIfNotExist>\
	if (makeNewLoad){
		loadcheck = loadcheck.replace('Nothing','Add');
	}
	if (!destination){
		loadcheck = loadcheck.replace('DEST','');
		loadcheck = loadcheck.replace('RETURNED','');
	} else {
		var toBeReturnedStr = toBeReturned.toString();
		loadcheck = loadcheck.replace('DEST','<Destination>'+destination+'</Destination>\n');
		loadcheck = loadcheck.replace('RETURNED','<ToBeReturned>'+toBeReturnedStr+'</ToBeReturned>\n');
	}
	if (application.isInDeveloper()){}
	application.output('RM FS Load Check:\n'+loadcheck);
	/** @type {String} */
	var fsResp = globals.fsCom.call('FabSuiteXML',loadcheck).toString();
	application.output('RM FS load Check Response:\n'+fsResp);
	if (fsResp.search('<Successful>0') != -1 && fsResp.search('already exists') == -1){
		return getFabSuiteError(fsResp);
	}
	var regexp = new RegExp(/another destination \((.*)\)/);
	var match = fsResp.match(regexp);
	if (!(!match)){
		//application.output(match[1])
		return match[1];
	} else {
		return null;
	}

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
	if (checkComFabsuite(event) != ''){return null}
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
					<GetSequences>\n\
					<JobNumber>'+globals.session.jobNumber+'</JobNumber>\n\
					</GetSequences>\n\
				</FabSuiteXMLRequest>';
	/** @type {String} */
	var fsResp = globals.fsCom.call('FabSuiteXML',check).toString();
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
	var fsResp = globals.fsCom.call('FabSuiteXML',check).toString();
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
	if (checkComFabsuite(event) != ''){return}

	/** @type {String} */
	var fsUp = globals.fsCom;
	scopes.jobs.warningsMessage('Verifying FabSuite Connection',true);

	application.output('check fabsuite connection');
	if (!globals.fsCom || (fsUp && fsUp.toString().search('RemoteCOM') == -1)){
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
	var check = '<FabSuiteXMLRequest>\n\
					<GetProductionControlJobInformation>\n\
					<JobNumber>'+jobNumber+'</JobNumber>\n\
					</GetProductionControlJobInformation>\n\
				</FabSuiteXMLRequest>';
	scopes.jobs.warningsMessage(i18n.getI18NMessage('1202'),true);
	/** @type {String} */
	var fsResp = globals.fsCom.call('FabSuiteXML',check).toString();
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
	if (checkComFabsuite(event) != ''){return null}
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
	var fsResp = globals.fsCom.call('FabSuiteXML',check).toString();
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
	if (checkComFabsuite(event) != ''){return null}
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
		<JobNumber>'+scopes.jobs.importJob.jobNumber+'</JobNumber>\n\
		</GetAssemblies>\n\
	</FabSuiteXMLRequest>';

	/** @type {String} */
	var fsResp = globals.fsCom.call('FabSuiteXML',check).toString();
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
	if (checkComFabsuite(event) != ''){return null}
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
	var fsResp = globals.fsCom.call('FabSuiteXML',check).toString();
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
	if (!globals.fsCom){
		globals.fsCom = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
	}
	var fsServer = scopes.prefs.fabsuiteServerName;
	var fsPass = scopes.prefs.fabsuitepassword;
	var fsUser = scopes.prefs.fabsuiteUserid;
	var fsPort = scopes.prefs.fabsuiteDatabase;
	var xmlConnect = '<FabSuiteXMLRequest>\n\
		<Connect>\n\
		<IPAddress>'+fsServer+'</IPAddress>\n\
		<PortNumber>'+fsPort+'</PortNumber>\n\
		<Username>'+fsUser+'</Username>\n\
		<Password>'+fsPass+'</Password>\n\
		</Connect>\n\
	</FabSuiteXMLRequest>';
	var response = 'NO COM';
	var sample = globals.fsCom.toString();
	if (sample.search('RemoteCOM') != -1){
		response = globals.fsCom.call('FabSuiteXML',xmlConnect);
		return response;
	}

	response = globals.fsCom.call('FabSuiteXML',xml);
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
	//if (application.isInDeveloper()){return 'xxx'};
	globals.loginError = false;//create temp global variable indicating issue on login
	if (application.isInDeveloper()){
		application.output('current FS COM: '+globals.fsCom);
		application.output('current BT COM: '+globals.btCom);
	}
	if (globals.fsCom){
		if (!fabSuitePing(event)){
			application.output('There shows to be a connection to EPM/FS but Ping failed.  Releasing and getting COM.');
			globals.fsCom.release();
			globals.fsCom = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
			if (fabSuitePing(event)){
				return '';
			}
		} else {
			return '';
		}
	} else {
		application.output('No Initial COM Connection To EPM/FS.  Getting COM.');
		globals.fsCom = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
		//return '';
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
	if (!globals.fsCom){
		application.output('Second No Initial COM Connection To EPM/FS.  Retrying COM.');
		globals.fsCom = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
	}
	if (!globals.fsCom || !globals.fsCom.isJACOBLoaded()) {
		scopes.jobs.warningsMessage("Error loading COM: \n" + plugins.servoyguy_servoycom.getLastError(),true);
		globals.DIALOGS.showErrorDialog('Error loading COM','Error loading COM');
		globals.loginError = true;
		return 'Error Loading COM';
	}
	var fsServer = scopes.prefs.fabsuiteServerName;
	var fsPass = scopes.prefs.fabsuitepassword;
	var fsUser = scopes.prefs.fabsuiteUserid;
	var fsPort = scopes.prefs.fabsuiteDatabase;
	if (!fsServer || !fsPass || !fsPort || !fsUser){
		scopes.jobs.warningsMessage("Fabsuite Connection in Preferences Empty",true);
		globals.DIALOGS.showErrorDialog('FabSuite Empty Connection Preferences','FabSuite Empty Connection Preferences')
		globals.loginError = true;
		return 'FabSuite Empty Connection Preferences';
	}
	var serverList = [fsServer]; var server = '';//20180108 if first server identified fails, use localhost
	var asUser = 'admin';
	if (globals.session.employeeNum){
		asUser = globals.m.employee3rdParty[globals.session.employeeNum]
	}
	while (server = serverList.pop()){
		var xmlConnect = '<FabSuiteXMLRequest>\n\
						<Connect>\n\
						<IPAddress>'+server+'</IPAddress>\n\
						<PortNumber>'+fsPort+'</PortNumber>\n\
						<Username>'+fsUser+'</Username>\n\
						<Password>'+fsPass+'</Password>\n\
						<AsUser>'+asUser+'</AsUser>\n\
						</Connect>\n\
						</FabSuiteXMLRequest>';
		/** @type {String} */
		var response = 'NO COM';
		/** @type {String} */
		var sam2 = globals.fsCom;
		var sample = sam2.toString();
		if (sample.search('RemoteCOM') != -1){
			application.output('Initial Connect String To EPM/FS COM Link Set. Logging into EPM/FS.\n'+xmlConnect);
			response = globals.fsCom.call('FabSuiteXML',xmlConnect);
		} else {
			application.output('Initial Connect String To EPM/FS COM Rerequested. Getting COM and Logging into EPM/FS.');
			globals.fsCom = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
			response = globals.fsCom.call('FabSuiteXML',xmlConnect);	
		}
		application.output('FabSuite Status: '+response);
		var error = fabSuiteError(response);
		if (!error){
			break;
		}
	}
	if (error){
		globals.loginError = true;
		globals.DIALOGS.showErrorDialog('FabSuite Error','FabSuite Error: \n'+error);
	}

	if (!response){
		globals.loginError = true;
		globals.DIALOGS.showErrorDialog('FabSuite Error','No Response from FabSuite');
		return 'No Response from FabSuite';
	}

	/** @type {String} */
	var response2 = response.toString();
	if (response2.search('<Successful>0') != -1){
		scopes.jobs.warningsMessage('Fabsuite Query Error '+response2);
		if (error){
			globals.loginError = true;
			return error;
		}
	}
	//application.output('fsCom response: |'+response+'|');
	if (application.getSolutionName() == 'STS X Embedded'){
		var xmlVersion = '	<FabSuiteXMLRequest>\n\
			<Version/>\n\
			</FabSuiteXMLRequest>';
		var fsResp = globals.fsCom.call('FabSuiteXML',xmlVersion);
		//application.output(fsResp);
		var regX = new RegExp(/>([0-9]*\..*)</);
		var version = regX.exec(fsResp);
		forms.sts_x.elements.indFabSuite.text = version[1];
		if (fsResp.search(/Error/) != -1){loginError = true;}
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
	if (checkComFabsuite(event) != ''){return true}
	var server = scopes.globals.fabsuiteServerName;
	var fsPass = scopes.globals.fabsuitepassword;
	var fsPort = scopes.globals.fabsuiteDatabase;
	var fsUser = scopes.globals.fabsuiteUserid;
	var verifyUserName = '<FabSuiteXMLRequest>\n\
			<IPAddress>'+server+'</IPAddress>\n\
			<PortNumber>'+fsPort+'</PortNumber>\n\
			<Username>'+fsUser+'</Username>\n\
			<Password>'+fsPass+'</Password>\n\
			<AsUser>'+newValue+'</AsUser>\n\
			</FabSuiteXMLRequest>';
	var fsResp = globals.fsCom.call('FabSuiteXML',verifyUserName).toString();
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
	application.output('fabsuite rf interface job '+globals.mob.job.rf);
	saved = saved && (globals.mob.job.rf.toUpperCase() == i18n.getI18NMessage('sts.interface.fabsuite').toUpperCase());//is this job really a FS interactive job?
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
	application.output('update fabsuite:'+saved);
	// return error message
	return saved;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"467A321D-A423-46A7-98F3-B6A1E478AE55"}
 */
function fabSuitePing(event){
	var fsPing = '<FabSuiteXMLRequest>\n\
		<Ping>\n\
		</Ping>\n\
		</FabSuiteXMLRequest>';
	application.output('Ping Test To EPM...');
	if (globals.fsCom){
		var fsResp = globals.fsCom.call('FabSuiteXML',fsPing);
		if (fabSuiteResponse(fsResp) == ''){
			return true;
		}
	}
	//globals.rfErrorShow(i18n.getI18NMessage('1170'));
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
	//if (!employee){
	//	employee = 'admin';
	//}

	//get list of entire contents of load and commit to station if of type save and final ship is viewed
	null;
	application.output('update fabSuiteUpdate action '+commitType);
	if (!scopes.prefs.lFabsuiteInstalled){return true}//20190202 no fs update possible
	if (commitType.search(/(Save)|(Delete)|(Ship)|(Un-Ship)|(Load)|(Unload)/) != 0){return false}
	if (checkComFabsuite(null) != ''){application.output('returning  null from fabSuiteUpdate');return null}
	var date = globals.mob.date;//new Date();//flow down from data update
	var processAsLoad = (globals.session.program == i18n.getI18NMessage('sts.mobile.final.ship'));
	var processAsBundle = globals.barcodeIsBundle(globals.mob.barcode);
	

	var equipEmployee = (globals.m.employee3rdParty[globals.session.employeeNum]);
	var firstEmp = forms.rf_mobile_view.statusWorker.split('.')[0];
	var employee = equipEmployee;
	if (scopes.prefs.lFabsuitePassWorker == 1 && !(!firstEmp)){//user is normally operator of scanner, but pass first worker if prefs set
		if (false && globals.mob.reverseWorker){//disable transaction reversal by anyone for a specific worker
			firstEmp = globals.mob.reverseWorker;
		}
		if (firstEmp && !globals.m.employee3rdParty[firstEmp]){
			globals.rfErrorShow(i18n.getI18NMessage('1171'));
			return false;
		}//20190513 employee not set 1171
		employee = globals.m.employee3rdParty[firstEmp];
	}
	var pieceMark = globals.mob.piecemark.piecemark;//exclude this when showing assembly, no minors
	globals.mob.statusCode3rdParty = globals.m.stationsThird[forms['rf_mobile_view'].statusCode];
	application.output('third party Stations '+globals.mob.statusCode3rdParty);
	var station = globals.mob.statusCode3rdParty;//required
	if (!station){return true}
	var quantity = globals.mob.idfiles.length;//required
	if (!quantity){quantity = 1}
	var mainMark = globals.mob.piecemark.parent_piecemark;
	//var employee = 'admin';//required employee that completed the work
	//employee = 'admin';
	var loadNumber = forms.rf_mobile_view.loadNumber;
	if (!pieceMark || !station || !quantity || !mainMark || !employee){
		if (!employee){
			globals.rfErrorShow(i18n.getI18NMessage('1282'));
			return false;
		} else if (!loadNumber){
			application.output('RM: load number empty');
			globals.rfErrorShow(i18n.getI18NMessage('1017'));
			return false;
		}
	}
	
	//var commitType = 'Save';//Save/Delete/required use F8 to indicate removal
	var jobNumber = globals.mob.job.number;
	var sequence = globals.getSeqNumber(globals.mob.idfile.sequence_id);//forms.rf_mobile_view.vSequenceList[globals.mob.idfile.sequence_id];// this is a one-way mapping, independent of job number
	var lotNumber = globals.getLotNumber(globals.mob.idfile.lot_id);//forms.rf_mobile_view.vLotList[globals.mob.idfile.lot_id];
	//application.output('lot number is '+lotNumber);
	var instanceNumbers = globals.mob.idfile.pcmk_instance;//accepts only numeric values, as well as hyphen
	//instanceNumbers = '';
	var serialNumber = 'FS-5319D7A3-D71F-11E5-8AFE-A292F4137E41';
	//serialNumber = globals.mob.idfile.guid_minor;
	//serialNumber = globals.mob.idfile.guid_major;
	serialNumber = globals.mob.barcode;
	//serialNumber = '';//enable to stop instances
	var loadCommitType = 'Save';
	var day = date.getDate();//this changes unless the 
	if (day < 10){day = "0"+day}
	var month = date.getMonth()+1;
	if (month < 10){month = "0"+month}
	var execDate = date.getFullYear()+'-'+month+'-'+day;//required
	var hours = (globals.mob.timedTotalMin*1 > 0) ? globals.mob.timedTotalMin/60 : 0;
	if (hours == 0 && globals.session.cutDuration && globals.session.cutDuration.hours){//20201125 push time duration to EPM 664
		hours = globals.session.cutDuration.hours;
	}
	var batchId = (forms['rf_mobile_view'] && 
			forms['rf_mobile_view'].statusLocation != '' && 
			scopes.prefs.lFsLocnBatch*1 == 1) ? forms['rf_mobile_view'].statusLocation.trim() : '';//20200903 added BatchID entry if location batch ID exists
	var _commitType = '<CommitType>'+commitType+'</CommitType>\n';
	var _jobNumber = '<JobNumber>'+jobNumber+'</JobNumber>\n';
	var _station = '<Station>'+station+'</Station>\n';
	var _instanceNumbers = '<InstanceNumbers>'+instanceNumbers+'</InstanceNumbers>\n';
	var _employee = '<Employee>'+employee+'</Employee>\n';
	var _execDate = '<Date>'+execDate+'</Date>\n';
	var _hours = '<Hours>'+hours+'</Hours>\n';
	var _batchId = '<BatchID>'+batchId+'</BatchID>\n';
	var _asUser = '<AsUser>'+equipEmployee+'</AsUser>\n';
	var _loadNumber = '<TruckNumber>'+loadNumber+'</TruckNumber>';
	//var tmpObj = {major:'',minor:'',seq:'',lot:'',serial:'',qty:''};	globals.mob.load.loadFs.getSize()

	if (processAsLoad){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = '';var idx = 1;var countSerial = [];
		while (rec = globals.mob.load.loadFs.getRecord(idx++)){
			serialNumber = rec.sts_idfile_to_serial.id_serial_number;
			application.output('serial: '+serialNumber);
			if (!countSerial[serialNumber]){
				countSerial[serialNumber] = 1;
			} else {
				countSerial[serialNumber] += 1;
			}
		}
	}
	if (processAsBundle){
		/** @type {QBSelect<db:/stsservoy/idfiles>} */
		var qq = databaseManager.createSelect('db:/stsservoy/idfiles');
		qq.where.add(qq.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
		qq.where.add(qq.columns.bundle_bc.eq(serialNumber));
		var QQ = databaseManager.getFoundSet(qq);
		rec = ''; idx = 1; countSerial = [];
		while (rec = QQ.getRecord(idx++)){
			serialNumber = rec.sts_idfile_to_serial.id_serial_number;
			application.output('serial: '+serialNumber);
			if (!countSerial[serialNumber]){
				countSerial[serialNumber] = 1;
			} else {
				countSerial[serialNumber] += 1;
			}
		}

	}
	//exit condition is within the loop, an idx of zero will terminate or a null load record
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	rec = '';idx = 1;
	while (true){
		if (processAsLoad || processAsBundle){
			if (processAsLoad){
				rec = globals.mob.load.loadFs.getRecord(idx++);
			} else {
				rec = QQ.getRecord(idx++);
			}
			if (!rec){break}//end process load here
			serialNumber = rec.sts_idfile_to_serial.id_serial_number;
			if (countSerial[serialNumber] == 0){continue}//skip if serial number already processed
			pieceMark = rec.sts_idfile_to_pcmks.piecemark;
			sequence = rec.sts_idfile_to_seq.sequence_number;
			lotNumber = rec.sts_idfile_to_lot.lot_number;
			mainMark = rec.sts_idfile_to_pcmks.parent_piecemark;
			application.output('countSerial: '+countSerial[serialNumber]+' qty: '+rec.summed_quantity)
			quantity = countSerial[serialNumber] * rec.summed_quantity;
			countSerial[serialNumber] = 0;//one way to prevent multiple inserts into fs
			
			application.output(serialNumber+' '+mainMark+ ' '+pieceMark+' Seq:'+sequence+' Lot:'+lotNumber+' Qty:'+quantity); 
			
		} else {
			idx = 0;// process to end of while then exit
		}
		
		var _serialNumber = '<BarcodeSerialNumber>'+serialNumber+'</BarcodeSerialNumber>';
		var _mainMark = '<MainMark>'+mainMark+'</MainMark>';
		var _pieceMark = '<PieceMark>'+pieceMark+'</PieceMark>';
		var _sequence = '<Sequence>'+sequence+'</Sequence>';
		var _lotNumber = '<LotNumber>'+lotNumber+'</LotNumber>';
		var _quantity = '<Quantity>'+quantity+'</Quantity>';
	
	

		//application.output('FS CommitType:'+commitType);
		switch (commitType){
			case 'Delete':
			case 'Save':
				var saveDataXML = '<FabSuiteXMLRequest>\n\
				<ShopFloorSave>\n\
				TYPE JOBNUMBER MAJOR MINOR SEQUENCENUM LOTNUMBER STATION QUANTITY \
				INSTANCES SERIALNUM ASUSER EMPLOYEE DATE HOURS BATCH \
				</ShopFloorSave>\n\
				</FabSuiteXMLRequest>';
				saveDataXML = saveDataXML.replace('TYPE',_commitType+'\n');
				saveDataXML = (!loadNumber) ? saveDataXML.replace('TRUCK','') : saveDataXML.replace('TRUCK',_loadNumber+'\n');
				saveDataXML = (!jobNumber) ? saveDataXML.replace('JOBNUMBER','') : saveDataXML.replace('JOBNUMBER',_jobNumber+'\n');
				saveDataXML = (!mainMark) ? saveDataXML.replace('MAJOR','') : saveDataXML.replace('MAJOR',_mainMark+'\n');
				saveDataXML = (!pieceMark || (pieceMark.toUpperCase() == mainMark.toUpperCase())) ? saveDataXML.replace('MINOR','') : saveDataXML.replace('MINOR',_pieceMark+'\n');
				saveDataXML = (!sequence) ? saveDataXML.replace('SEQUENCENUM','<Sequence/>\n') : saveDataXML.replace('SEQUENCENUM',_sequence+'\n');
				saveDataXML = (!lotNumber) ? saveDataXML.replace('LOTNUMBER','<LotNumber/>\n') : saveDataXML.replace('LOTNUMBER',_lotNumber+'\n');
				//saveDataXML.replace('LOTNUMBER',_lotNumber+'\n');////
				saveDataXML = saveDataXML.replace('STATION',_station+'\n');
				saveDataXML = saveDataXML.replace('QUANTITY',_quantity+'\n');
				saveDataXML = (!instanceNumbers) ? saveDataXML.replace('INSTANCES','') : saveDataXML.replace('INSTANCES',_instanceNumbers+'\n');
				saveDataXML = (!serialNumber /**|| quantity*1 > 2*/) ? saveDataXML.replace('SERIALNUM','') : saveDataXML.replace('SERIALNUM',_serialNumber+'\n');
				saveDataXML = saveDataXML.replace('EMPLOYEE',_employee+'\n');
				saveDataXML = saveDataXML.replace('DATE',_execDate+'\n');
				saveDataXML = (!hours) ? saveDataXML.replace('HOURS','') : saveDataXML.replace('HOURS',_hours+'\n');
				saveDataXML = (!batchId) ? saveDataXML.replace('BATCH','') : saveDataXML.replace('BATCH',_batchId+'\n');
				saveDataXML = (!equipEmployee) ? saveDataXML.replace('ASUSER','') : saveDataXML.replace('ASUSER',_asUser+'\n');//save employee who is running the mobile computer
				
			break;
			case 'Ship':
			case 'Un-Ship':
				loadCommitType = (commitType == 'Ship') ? 'Ship' : 'Un-Ship';
				/**
				 * find out about F8 status for ship vs un-ship before call
				 * first unship and then remove from load
				 * 
				 */
				var _commitValue = '<CommitType>'+loadCommitType+'</CommitType>';
				saveDataXML = '<FabSuiteXMLRequest>\n\
					<Ship>\n\
					COMMITTYPE JOBNUMBER TRUCKNUMBER DATE\
					</Ship>\n\
					</FabSuiteXMLRequest>';
				var _loadNumber = globals.session.loadNumber;
				saveDataXML = saveDataXML.replace('COMMITTYPE',_commitValue+'\n');// 'Ship'/'Un-Ship' determined on call
				saveDataXML = (!jobNumber) ? saveDataXML.replace('JOBNUMBER','') : saveDataXML.replace('JOBNUMBER',_jobNumber+'\n');
				saveDataXML = saveDataXML.replace('TRUCKNUMBER',_loadNumber+'\n');
				saveDataXML = saveDataXML.replace('DATE',_execDate+'\n');
			break;
			case 'Load':
			case 'Unload':
				loadCommitType = (commitType == 'Load') ? 'Save' : 'Delete';
				_commitValue = '<CommitType>'+loadCommitType+'</CommitType>';
				saveDataXML = '<FabSuiteXMLRequest>\n\
					<Load>\n\
					TYPE JOBNUMBER MAJOR MINOR SEQUENCENUM LOTNUMBER QUANTITY INSTANCES \
					TRUCKNUMBER SERIALNUM ASUSER DATE \
					</Load>\n\
					</FabSuiteXMLRequest>';
				saveDataXML = saveDataXML.replace('TYPE',_commitValue+'\n');
				saveDataXML = (!jobNumber) ? saveDataXML.replace('JOBNUMBER','') : saveDataXML.replace('JOBNUMBER',_jobNumber+'\n');
				saveDataXML = (!mainMark) ? saveDataXML.replace('MAJOR','') : saveDataXML.replace('MAJOR',_mainMark+'\n');
				saveDataXML = (!pieceMark || (pieceMark.toUpperCase() == mainMark.toUpperCase())) ? saveDataXML.replace('MINOR','') : saveDataXML.replace('MINOR',_pieceMark+'\n');
				saveDataXML = (!sequence) ? saveDataXML.replace('SEQUENCENUM','<Sequence/>\n') : saveDataXML.replace('SEQUENCENUM',_sequence+'\n'); 
				saveDataXML = (!lotNumber) ? saveDataXML.replace('LOTNUMBER','<LotNumber/>\n') : saveDataXML.replace('LOTNUMBER',_lotNumber+'\n');
				//saveDataXML.replace('LOTNUMBER',_lotNumber+'\n');
				saveDataXML = saveDataXML.replace('QUANTITY',_quantity+'\n');
				saveDataXML = (!instanceNumbers) ? saveDataXML.replace('INSTANCES','') : saveDataXML.replace('INSTANCES',_instanceNumbers+'\n');
				saveDataXML = (!serialNumber) ? saveDataXML.replace('SERIALNUM','') : saveDataXML.replace('SERIALNUM',_serialNumber+'\n');
				saveDataXML = saveDataXML.replace('EMPLOYEE',_employee+'\n');
				saveDataXML = saveDataXML.replace('DATE',_execDate+'\n');
				saveDataXML = (!equipEmployee) ? saveDataXML.replace('ASUSER','') : saveDataXML.replace('ASUSER',_asUser+'\n');//save employee who is running the mobile computer
				saveDataXML = saveDataXML.replace('TRUCKNUMBER',_loadNumber+'\n');
				saveDataXML = saveDataXML.replace('ASUSER',_asUser+'\n');
				saveDataXML = (!batchId) ? saveDataXML.replace('BATCH','') : saveDataXML.replace('BATCH',_batchId+'\n');
	
			break;
		default:
		}
		saveDataXML = saveDataXML.replace(/\n+/g,'\n').replace(/\t+/g,'');
		application.output('RM: \n'+saveDataXML);
		var _updateLoadWeight = globals.rfGetSpecsLoad(globals.session.program);
		
		//if (globals.session.program == i18n.getI18NMessage('sts.mobile.shipping')) {
		//	saveDataXML = saveDataXML2;
		//}
	
		var fsResp = globals.fsCom.call('FabSuiteXML',saveDataXML);
		application.output('RESPONSE: '+fsResp);
		var fsErr = fabSuiteError(fsResp);
		if (fsErr != ''){
			var addMessage = '';
			switch (commitType){
				case 'Delete':
					addMessage = i18n.getI18NMessage('sts.txt.fs.item.not.removed.from.station');
					break;
				case 'Save':
					addMessage = i18n.getI18NMessage('sts.txt.fs.item.not.added.to.station');
					break;
				case 'Ship':
					addMessage = i18n.getI18NMessage('sts.txt.fs.item.not.shipped');
					break;
				case 'Un-Ship': 
					addMessage = i18n.getI18NMessage('sts.txt.fs.item.not.unshipped');
					break;
				case 'Load':
					addMessage = i18n.getI18NMessage('sts.txt.fs.item.not.added.to.load');
					fabSuiteUpdate('Delete');//20200518 remove errored out failed Ship action
					break;
				case 'Unload':
					addMessage = i18n.getI18NMessage('sts.txt.fs.item.not.removed.from.load');
					fabSuiteUpdate('Save');//20200518 restore errored out failed Ship action
					break;
				default:
			}
			if (!(!addMessage)){addMessage = ' '+addMessage}
			globals.errorDialogMobile(null,1220,'genericin','EPM: '+fsErr);//20200518 related to NO ERROR issue on IOS
			//globals.rfErrorShow('FabSuite: '+fsErr);
			return false;
		}
		if (idx == 0){break}//exit normal 1:1 processing
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
	if (checkComFabsuite(null) != ''){return null}

	// quick check assemblies
	if (false){
		var check = '<FabSuiteXMLRequest>\n\
			<GetAssemblies>\n\
			<JobNumber>'+globals.session.jobNumber+'</JobNumber>\n\
			<Filters>\n\
			<Filter>\n\
			<FilterType>MainMark</FilterType>\n\
			<FilterValue>8B2</FilterValue>\n\
			</Filter>\n\
			</Filters>\n\
			</GetAssemblies>\n\
			</FabSuiteXMLRequest>';
		var two = globals.fsCom.call('FabSuiteXML',check);
		plugins.XmlReader.readXmlDocumentFromString(two);
		if (application.isInDeveloper()){application.output(check+'\n'+two.toString())}
	}
	
	//if (globals.mob.job.rf != i18n.getI18NMessage('sts.interface.fabsuite')){return null}//20181003
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (application.isInDeveloper()){application.output('Call FS with job number for max truck '+globals.session.jobNumber)}//20181003
	var loadcheck = '<FabSuiteXMLRequest>\n\
		<MaxTruck>\n\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\n\
		</MaxTruck>\n\
		</FabSuiteXMLRequest>';
	
	/** @type {String} */
	var fsResp = globals.fsCom.call('FabSuiteXML',loadcheck).toString();
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
	if (checkComFabsuite(null) != ''){return new Array()}
	var destArray = new Array();
	var interimDests =  '<FabSuiteXMLRequest>\n\
		<IntermediateCompanyCodes>\n\
		<JobNumber>'+jobNumber+'</JobNumber>\n\
		</IntermediateCompanyCodes>\n\
		</FabSuiteXMLRequest>';
	application.output(interimDests);
	/** @type {String} */
	var dests = globals.fsCom.call('FabSuiteXML',interimDests).toString();
	application.output(dests);
	if (application.isInDeveloper()){application.output('destinations: \n'+dests)}
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
	if (checkComFabsuite(event) != ''){return ''}
	var xmlReadReceive = '<FabSuiteXMLRequest>\n\
		<ReceiveChecklistScan>\n\
		<ChecklistSerialNumber>'+barcode+'</ChecklistSerialNumber>\n\
		</ReceiveChecklistScan>\n\
		</FabSuiteXMLRequest>';
	var rawMat = globals.fsCom.call('FabSuiteXML',xmlReadReceive).toString();
	if (application.isInDeveloper()){application.output(rawMat)}
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
	if (checkComFabsuite(event) != ''){return null}
	var xmlReadReceiveBC = '<FabSuiteXMLRequest>\n\
		<ValInventory>\n\
		<SerialNumber>'+barcode+'</SerialNumber>\n\
		</ValInventory>\n\
		</FabSuiteXMLRequest>';
	var rawMat = globals.fsCom.call('FabSuiteXML',xmlReadReceiveBC).toString();
	application.output(xmlReadReceiveBC);
	application.output(rawMat);
	var errorMatch = rawMat.match(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	if (!errorMatch){//20201105 cannot get job number from inventory item
		var jobNum = rawMat.match(/<JobReserve>(.*)<\/JobReserve>/);
		var rawMatFields = {
			error : '',
			jobnumber : ''
		}
		if (jobNum && jobNum[1]){
			jobNum = jobNum[1];
			rawMatFields.jobnumber = jobNum;
		}
	} else {
		rawMatFields = {
			error : errorMatch[1]
		}
	}
	return rawMatFields;

}
/**
 * @param {JSEvent} event
 * @param barcode
 * @param qty
 *
 * @properties={typeid:24,uuid:"B69F4894-75EB-41A5-B077-4354D815EC78"}
 */
function fabsuiteSetReceivedBarcode(event,clBarcode,stsBarcode,qty,bcData){
	if (checkComFabsuite(event) != ''){return null}
	var xmlReadReceiveBC = '<FabSuiteXMLRequest>\n\
		<Receive>\n\
		<ChecklistSerialNumber>'+clBarcode+'</ChecklistSerialNumber>\n\
		<SerialNumber>'+stsBarcode+'</SerialNumber>\
		<Quantity>'+qty+'</Quantity>\n\
		_PO_DD_CO_HT_LO_LO2_RM_BL\
		</Receive>\n\
		</FabSuiteXMLRequest>';

	application.output('remarks '+bcData.receivingremarks)
	var loc1 = bcData.location;
	var loc2 = bcData.location2;
	if (scopes.prefs.lFsFlipPrimSecWhenShop*1 == 1){
		var tmpLoc = loc1;
		loc1 = loc2;
		loc2 = tmpLoc;
		if (scopes.prefs.lFsNoPushSecLoc*1 == 1){
			loc2 = '';
		}
	}
	var finalz = (bcData.finalize) ? 1 : 0;
	//xmlReadReceiveBC = (bcData.finalize) ? xmlReadReceiveBC.replace('_FN','<Finalize>'+finalz+'</Finalize>\\\n') : xmlReadReceiveBC.replace('_FN','');
	xmlReadReceiveBC = (bcData.ponumber) ? xmlReadReceiveBC.replace('_PO','<PONumber>'+bcData.ponumber+'</PONumber>\\\n') : xmlReadReceiveBC.replace('_PO','');
	xmlReadReceiveBC = (bcData.deliverydate) ? xmlReadReceiveBC.replace('_DD','<DeliveryDate>'+getFsDateFormat(bcData.deliverydate)+'</DeliveryDate>\\\n') : xmlReadReceiveBC.replace('_DD','');
	xmlReadReceiveBC = (bcData.countryoforigin) ? xmlReadReceiveBC.replace('_CO','<CountryOfOrigin>'+bcData.countryoforigin+'</CountryOfOrigin>\\\n') : xmlReadReceiveBC.replace('_CO','');
	xmlReadReceiveBC = (bcData.heatnumber) ? xmlReadReceiveBC.replace('_HT','<HeatNumber>'+bcData.heatnumber+'</HeatNumber>\\\n') : xmlReadReceiveBC.replace('_HT','');
	xmlReadReceiveBC = (bcData.location) ? xmlReadReceiveBC.replace('_LO','<Location>'+loc1+'</Location>\\\n') : xmlReadReceiveBC.replace('_LO','');
	xmlReadReceiveBC = (bcData.location2) ? xmlReadReceiveBC.replace('_LO2','<SecondaryLocation>'+loc2+'</SecondaryLocation>\\\n') : xmlReadReceiveBC.replace('_LO2','');
	xmlReadReceiveBC = (bcData.receivingremarks) ? xmlReadReceiveBC.replace('_RM','<ReceivingRemarks>'+bcData.receivingremarks+'</ReceivingRemarks>\\\n') : xmlReadReceiveBC.replace('_RM','');
	xmlReadReceiveBC = (bcData.billoflading) ? xmlReadReceiveBC.replace('_BL','<BillOfLadingNumber>'+bcData.billoflading+'</BillOfLadingNumber>\\\n') : xmlReadReceiveBC.replace('_BL','');
	var rawMat = globals.fsCom.call('FabSuiteXML',xmlReadReceiveBC).toString();
	if (!rawMat){
		//globals.fsCom = null;
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
/**
 * @properties={typeid:24,uuid:"D9E75BA7-9B3C-4EE9-91FF-87E8BC9D4664"}
 */
function fabSuiteClose(){
	if (globals.fsCom){
		globals.fsCom.release();
	}
}
/**
 * @param event
 * @param clBarcode
 *
 * @properties={typeid:24,uuid:"D8C8C6CD-31BD-4356-9202-100E6E111252"}
 * @AllowToRunInFind
 */
function getFSCutList(event,clBarcode){
	scopes.fs.checkComFabsuite(event);
	var xmlReadReceiveCL = '<FabSuiteXMLRequest>\n\
		<ValCutListItem>\n\
		<CutListSerialNumber>'+clBarcode+'</CutListSerialNumber>\n\
		</ValCutListItem>\n\
		</FabSuiteXMLRequest>';
	/** @type {String} */
	var cutlistData = globals.fsCom.call('FabSuiteXML',xmlReadReceiveCL);
	//var xmlArray = plugins.XmlReader.readXmlDocumentFromString(cutlistData);

	cutlistData = cutlistData.toString();
	application.output('RM\n'+cutlistData);
	/** @type {String} */
	var errorMatch = cutlistData.match(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	if (!errorMatch){
		var partNumberData = cutlistData.match(/<ValCutListItem>([^]*?)<[\/]{0,1}PartNumber[\/]{0,1}>/)[1];//broken pattern matching here add parens
		application.output('cut list fields\n'+partNumberData);
		var lengthData = partNumberData.match(/<Length UOM="(.*)">(.*)<\/Length>/);
		var widthData = partNumberData.match(/<Width UOM="(.*)">(.*)<\/Width>/);
		if (!widthData){widthData = [null,'',0]}
		var weightData = partNumberData.match(/<Weight UOM="(.*)">(.*)<\/Weight>/);
		var dropData = partNumberData.match(/<ExpectedDrop UOM="(.*)">(.*)<\/ExpectedDrop>/);
		var dropReserveData = partNumberData.match(/<DropJobReservePrompt CurrentJobReserve="(.*)" Option="(.*)">(.*)<\/DropJobReservePrompt>/);
		var dimensionData = partNumberData.match(/<Dimensions Metric="(.*)">(.*)<\/Dimensions>/);
		var areaData = partNumberData.match(/<Area UOM="(.*)">(.*)<\/Area>/);
		if (!areaData){areaData = [null,'',0]}

		var cutPartData = cutlistData.match(/<[\/]{0,1}PartNumber[\/]{0,1}>([^]*)<CutListItemAvailable>/)[1];
		cutPartData = cutPartData.toString();
		var cutPartArray = [];
		var firstPass = true;
		var cutPartEl = {pJob :'',pMajor : '',pMinor : '',pSeq : '',pLot : '',pQuant:'',pWidth:'',pWidthType: '',
			pLength:'',pLengthType: '', pArea:'',pAreaType: '',pRoute: '',pStrikeThru: '',pcmkId: '', idfileId: ''};
		var emptyData = [null,'',0];
		while (cutPartData){
		//for (var i = 0;i < cutPartList.length;i++){
			//var line = cutPartList[i];
		    var cutPartDataItem = cutPartData.match(/<CutPart>([^]*?)<\/CutPart>/);//match does not span multiple lines unless include \n
			if (cutPartDataItem){cutPartDataItem = cutPartDataItem[1]} else {break}
		    var pJob = cutPartDataItem.match(/<JobNumber>(.*)<\/JobNumber>/);
		    var pMajor = cutPartDataItem.match(/<MainMark>(.*)<\/MainMark>/);
		    var pMinor = cutPartDataItem.match(/<PieceMark>(.*)<\/PieceMark>/);
		    var pSeq = cutPartDataItem.match(/<Sequence>(.*)<\/Sequence>/);
		    if (!pSeq){pSeq = emptyData}
		    var pLot = cutPartDataItem.match(/<LotNumber>(.*)<\/LotNumber>/);
		    if (!pLot){pLot = emptyData}
		    var pQuant = cutPartDataItem.match(/<Quantity>(.*)<\/Quantity>/);
		    var pWidth = cutPartDataItem.match(/<Width UOM="(.*)">(.*)<\/Width>/);
		    if (!pWidth){pWidth = [].concat(emptyData)}
		    var pLength = cutPartDataItem.match(/<Length UOM="(.*)">(.*)<\/Length>/);
		    if (!pLength){pLength = [].concat(emptyData)}
		    var pWidth = cutPartDataItem.match(/<Width UOM="(.*)">(.*)<\/Width>/);
		    if (!pWidth){pWidth = [].concat(emptyData)}
		    var pArea = cutPartDataItem.match(/<Area UOM="(.*)">(.*)<\/Area>/);
		    if (!pArea){pArea = [].concat(emptyData)}
		    var pRoute = cutPartDataItem.match(/<Route>(.*)<\/Route>/);
		    if (!pRoute){pRoute = emptyData}
		    var pStrikeThru = cutPartDataItem.match(/<MatchFilter>(.*)<\/MatchFilter>/);
		    cutPartData = cutPartData.match(/<\/CutPart>([^]*)/);//get last bunch of parts
		    if (cutPartData){
		    	cutPartData = cutPartData[1].toString()
		    	for (var cnt = pQuant[1];cnt != 0;cnt--){
					var newPart = {};
			    	for (var item in cutPartEl){newPart[item] = ''}
			    	newPart.pJob = pJob[1];
			    	newPart.pMajor = pMajor[1];
			    	newPart.pMinor = pMinor[1];
			    	newPart.pSeq = pSeq[1];
			    	newPart.pLot = pLot[1];
			    	newPart.pQuant = 1;
			    	newPart.pLength = pLength[2];
			    	newPart.pLengthType = pLength[1];
			    	newPart.pWidth = pWidth[2];
			    	newPart.pWidthType = pWidth[1];
			    	newPart.pArea = pArea[2];
			    	newPart.pAreaType = pArea[1];
			    	newPart.pRoute = pRoute[1];
			    	newPart.pStrikeThru = (pStrikeThru[1] == 1);
				    cutPartArray.push(newPart);
		    	}
			    application.output(cutPartEl);//CONTROL
		    }
		}
		application.output('cutlist: \n');
		for (var idx = 0;idx < cutPartArray.length;idx++){
			application.output(cutPartArray[idx]);
		}
		var cutlistFields = {
			serialnumber : cutlistData.match(/<CutListSerialNumber>(.*)<\/CutListSerialNumber>/)[1],
			qtyremaining : cutlistData.match(/<QuantityRemaining>(.*)<\/QuantityRemaining>/)[1],
			shape : cutlistData.match(/<Shape>(.*)<\/Shape>/)[1],
			grade : cutlistData.match(/<Grade>(.*)<\/Grade>/)[1],
			dimensionsType : (dimensionData[1] == "0") ? "imperial" : "metric",
			dimensions : dimensionData[2],
			lengthType : lengthData[1],
			length : lengthData[2],
			weightType : weightData[1],
			weight : weightData[2],
			dropType : dropData[1],
			drop : dropData[2],
			dropWidthType : widthData[1],
			dropWidth : widthData[2],
			dropreservejob : dropReserveData[1],
			dropreserveroption : dropReserveData[2],
			dropreserveprompt : dropReserveData[3],
			widthType : widthData[1],
			width : widthData[2],
			cutarray : cutPartArray,
			error : ''
		}
		//if (cutlistFields.dropType.search('sq') != -1){
			//    <ExpectedDrop UOM="sqin">422.8477</ExpectedDrop>
			var dropXY = convertDropAreaToLW(event,cutlistFields);
			cutlistFields.dropType = dropXY.dropType;
			cutlistFields.drop = dropXY.drop;
			cutlistFields.widthType = dropXY.dropWType;
			cutlistFields.width = dropXY.dropW;
		//}
		application.output(cutlistFields);
	} else {
		cutlistFields = {
			error : errorMatch[1]
		}
	}
	return cutlistFields;
}
/**
 * @param event
 * @param clBarcode
 * @param rmBarcode
 *
 * @properties={typeid:24,uuid:"D9549DD5-7633-46A5-A71D-BB5554C9AB4D"}
 */
function matchCLtoRMBarcodes(event,clBarcode,rmBarcode){
	if (checkComFabsuite(event) != ''){return ''}
	var xmlReadReceive = '<FabSuiteXMLRequest>\n\
		<ValCutListItem>\n\
		<CutListSerialNumber>'+clBarcode+'</CutListSerialNumber>\n\
		<InventorySerialNumber>'+rmBarcode+'</InventorySerialNumber>\n\
		</ValCutListItem>\n\
		</FabSuiteXMLRequest>';
	
	application.output(xmlReadReceive);
	var valid = globals.fsCom.call('FabSuiteXML',xmlReadReceive).toString();
	if (application.isInDeveloper()){application.output(valid)}
	var errorMatch = valid.match(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	if (!errorMatch){
		var heatMatch = valid.match(/<HeatNumber>(.*)<\/HeatNumber>/);
		var heatNum = '';
		if (heatMatch){
			heatNum = heatMatch[1];
		}
		//ponumber : valid.match(/<PONumber>(.*)<\/PONumber>/)[1],
		//qtyordered : valid.match(/<QuantityOrdered>(.*)<\/QuantityOrdered>/)[1],
		//qtyremaining : valid.match(/<QuantityRemaining>(.*)<\/QuantityRemaining>/)[1],
		//shape : valid.match(/<Shape>(.*)<\/Shape>/)[1],
		//grade : valid.match(/<Grade>(.*)<\/Grade>/)[1],
		//dimensions : valid.match(/<Dimensions>(.*)<\/Dimensions>/)[1],
		//length : valid.match(/<Length>(.*)<\/Length>/)[1],
		//weighteach : valid.match(/<WeightEach>(.*)<\/WeightEach>/)[1],
		var rawMatFields = {
			heatnumber : heatNum,
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
 * 
 * @param event
 * @param jobNumber
 * @param clBarcode
 * @param rmBarcode
 * @param quantity
 * @param cutAll
 * @param dWidth
 * @param dLength
 * @param dLocation
 * @param dLocation2
 *
 * @properties={typeid:24,uuid:"C20FCF2D-0B4C-456E-B7B5-59DD4AC158CB"}
 * @AllowToRunInFind
 */
function matchCLtoRMBarcodesProcess(event,jobNumber,clBarcode,rmBarcode,quantity,cutAll,dWidth,dLength,dLocation,dLocation2){
	var equipEmployee = (globals.m.employee3rdParty[globals.session.employeeNum]);
	
	var currentCL = scopes
	var _asUser = '<AsUser>'+equipEmployee+'</AsUser>\n<PieceTrackingUsername>'+equipEmployee+'</PieceTrackingUsername>';
	var ptHours = 0.0;//j6 process STSX and station side one-at-a-time

	if (application.isInDeveloper()){application.output('inside matchCLtoRMBarcodesProcess');}
	if (checkComFabsuite(event) != ''){return ''}
	if (application.isInDeveloper()){application.output('inside matchCLtoRMBarcodesProcess past checkComFS');}
	//var RMdata = scopes.jobs.getRMBarcodeSpecs(event,rmBarcode);
	var uomMetric = (dLength.search(/(['"])/) == -1);
	var uom = (uomMetric) ? 'MM' : 'IN';
	var cutListAll = (cutAll) ? 'true' : 'false';
	var dropLength = (uomMetric) ? dLength : globals.strToDec('FEET',dLength.replace(/[^0-9]/g,' '));//scopes.globals;
	var dropWidth = (uomMetric) ? dWidth : globals.strToDec('INCHES',dWidth.replace(/[^0-9]/g,' '));//decimal with uom 11.111 in/mm
	// Start barcode section
	var rawCuts = globals.session.cutlistdata.cutarray;var nothingHere = true;
	var replacementSerials = [];
	var pieceMarks = [];
	var addBarcodes = '<PartSerialNumbers>\n';
	for (var idx = 0;idx < rawCuts.length;idx++){
		var part = rawCuts[idx];
		if (!part.pStrikeThru){continue}
		if (!part.Barcode){continue}//20190603 what do we do if no barcode?
		var quick = part.pJob+part.pMajor+part.pMinor+part.pSeq+part.pLot;
		if (pieceMarks.indexOf(quick) == -1){//collect each piecemark with a tag, use this index to set the serials for that pcmk
			var serials = 'SERIAL'+pieceMarks.length;
			var addBarcode = '<PartSerialNumber>\n'+
			'<JobNumber>'+part.pJob+'</JobNumber>\n'+
			'<MainMark>'+part.pMajor+'</MainMark>\n'+
			'<PieceMark>'+part.pMinor+'</PieceMark>\n'+
			'<Sequence>'+part.pSeq+'</Sequence>\n'+
			'<LotNumber>'+part.pLot+'</LotNumber>\n'+serials+
			'</PartSerialNumber>\n';
			addBarcodes = addBarcodes+addBarcode;
			pieceMarks.push(quick);
		}
		var pointer = pieceMarks.indexOf(quick);
		if (!replacementSerials[pointer]){
			replacementSerials[pointer] = '<SerialNumber>'+part.Barcode+'</SerialNumber>\n';
		} else {
			replacementSerials[pointer] = replacementSerials[pointer]+'<SerialNumber>'+part.Barcode+'</SerialNumber>\n';			
		}
		
		nothingHere = false;
		
	}
	addBarcodes = addBarcodes+'</PartSerialNumbers>\n';
	for (idx = 0;idx < pieceMarks.length;idx++){
		addBarcodes = addBarcodes.replace('SERIAL'+idx,replacementSerials[idx])
	}
	if (nothingHere){addBarcodes = '';}
	// Finish barcode section
	
	if (scopes.prefs.lFsFlipPrimSecWhenShop*1 == 1){
		var loc = dLocation;
		dLocation = dLocation2;
		dLocation2 = loc;
		if (scopes.prefs.lFsNoPushSecLoc*1 == 1){
			dLocation2 = '';
		}
	}
	var xmlReadReceive = '<FabSuiteXMLRequest>\n\
		<TFSCut>\n\
		<CutListSerialNumber>'+clBarcode.trim()+'</CutListSerialNumber>\n\
		<InventorySerialNumber>'+rmBarcode.trim()+'</InventorySerialNumber>\n\
		<Quantity>'+Math.floor(quantity*1)+'</Quantity>\n\
		<CutAll>'+cutListAll+'</CutAll>\n\
		<PieceTrackingHours>'+ptHours+'</PieceTrackingHours>\n\
		AS_USER\
		<DropWidth UOM="'+uom+'">'+dropWidth+'</DropWidth>\n\
		<DropLength UOM="'+uom+'">'+dropLength+'</DropLength>\n\
		<DropLocation>'+dLocation+'</DropLocation>\n\
		<DropSecondaryLocation>'+dLocation2+'</DropSecondaryLocation>\n\
		<Location>'+dLocation+'</Location>\n\
		<SecondaryLocation>'+dLocation2+'</SecondaryLocation>\n'+
		addBarcodes+'</TFSCut>\n\
		</FabSuiteXMLRequest>';
		xmlReadReceive = xmlReadReceive.replace('AS_USER',_asUser);
	//<PieceTrackingUsername>'+username+'</PieceTrackingUsername>\
	//<AdditionalDrop>'+addlDrop+'</AdditionalDrop>\
	//<PartSerialNumbers>'+serialNumbers+'</PartSerialNumbers>\
	application.output(xmlReadReceive);
	/** @type {String} */
	var valid = globals.fsCom.call('FabSuiteXML',xmlReadReceive).toString();
	application.output(valid);
	var errorMatch = valid.match(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	if (!errorMatch){
		var rawMatFields = returnXMLDataObj(valid);
	} else {
		rawMatFields = {
			error : errorMatch[1]
		}
	}
	/**
	 *   <TFSCut>
    <Successful>1</Successful>
    <RTSType>Restock</RTSType>
    <ActualHeatNumber>MMMM</ActualHeatNumber>
    <ActualHeatSerialNumber/>
    <ActualPONumber>04030</ActualPONumber>
    <ActualBillOfLadingNumber/>
    <ActualCountryOfOrigin/>
    <ActualDropLength UOM="in">1.375</ActualDropLength>
    <ActualDropLocation>YARD</ActualDropLocation>
    <ActualDropSecondaryLocation>SHOP</ActualDropSecondaryLocation>
    <CutPart>
      <JobNumber>04030</JobNumber>
      <MainMark>8B1</MainMark>
      <PieceMark>8B1</PieceMark>
      <Sequence>3</Sequence>
      <Quantity>1</Quantity>
      <InstanceNumbers>1</InstanceNumbers>
    </CutPart>
  </TFSCut>

	 * 
	 */
	return rawMatFields;

}
/**
 * @param event
 * @param serialNumber
 *   <ValInventory>
    <Successful>1</Successful>
    <Quantity>1</Quantity>
    <Shape>W</Shape>
    <Grade>A992</Grade>
    <Dimensions Metric="0">24 x 68</Dimensions>
    <Width>
    <Length UOM="in">480</Length>
    <PONumber>04030</PONumber>
    <BillOfLadingNumber>ABCABC</BillOfLadingNumber>
    <CountryOfOrigin>USA</CountryOfOrigin>
    <HeatNumber>EAR554</HeatNumber>
    <HeatSerialNumber/>
    <Location>SHOP</Location>
    <SecondaryLocation>YARD</SecondaryLocation>
    <JobReserve>04030</JobReserve>
    <WeightEach>1233.7712464</WeightEach>
  </ValInventory>
 *
 * @properties={typeid:24,uuid:"A8AEE402-A847-4FA7-82B9-7C931DBB3FA3"}
 */
function getInventorySerial(event,serialNumber){
	var xmlReadReceive = '<FabSuiteXMLRequest>\n\
		<ValInventory>\n\
		<SerialNumber>'+serialNumber+'</SerialNumber>\n\
		</ValInventory>\n\
		</FabSuiteXMLRequest>';
	application.output(xmlReadReceive);
	
	var validX = globals.fsCom.call('FabSuiteXML',xmlReadReceive);
	var valid = '';
	if (validX){
		valid = validX.toString();
	}
	application.output(valid);
	if (application.isInDeveloper()){application.output(valid)}
	var errorMatch = valid.match(/<ErrorMessage>(.*)<\/ErrorMessage>/);
	if (!errorMatch){
		var validQuant = valid.match(/<Quantity>(.*)<\/Quantity>/);
		if (validQuant){validQuant = validQuant[1]}
		var validShape = valid.match(/<Shape>(.*)<\/Shape>/);
		if (validShape){validShape = validShape[1]}
		var validGrade = valid.match(/<Grade>(.*)<\/Grade>/);
		if (validGrade){validGrade = validGrade[1]}
		//<Dimensions Metric="0">24 x 68</Dimensions>
		var validDims = valid.match(/<Dimensions Metric="(.*)">(.*)<\/Dimensions>/);
		var validMetric = false;
		if (validDims){
			validMetric = (validDims[1] == 1);
			validDims = validDims[2];
		}
		var validWidth = valid.match(/<Width UOM="(.*)">(.*)<\/Width>/);
		var validWUom = false;
		if (validWidth){
			validWUom = validWidth[1];
			validWidth = validWidth[2];
		}
	    //<Length UOM="in">480</Length>
		var validLength = valid.match(/<Length UOM="(.*)">(.*)<\/Length>/);
		var validLUom = false;
		if (validLength){
			validLUom = validLength[1];
			validLength = validLength[2];
		}
		var isMetric = (validLUom != "in");
		var validPoNumber = valid.match(/<PONumber>(.*)<\/PONumber>/);
		if (validPoNumber){validPoNumber = validPoNumber[1]}
		var validBoL = valid.match(/<BillOfLadingNumber>(.*)<\/BillOfLadingNumber>/);
		if (validBoL){validBoL = validBoL[1]}
		var validCoO = valid.match(/<CountryOfOrigin>(.*)<\/CountryOfOrigin>/);
		if (validCoO){validCoO = validCoO[1]}
		var validHeat = valid.match(/<HeatNumber>(.*)<\/HeatNumber>/);
		if (validHeat){validHeat = validHeat[1]}
		var validLoc = valid.match(/<Location>(.*)<\/Location>/);
		if (validLoc){validLoc = validLoc[1]}
		var validLoc2 = valid.match(/<SecondaryLocation>(.*)<\/SecondaryLocation>/);
		if (validLoc2){validLoc2 = validLoc2[1]}
		var validReserve = valid.match(/<JobReserve>(.*)<\/JobReserve>/);
		if (validReserve){validReserve = validReserve[1]}
		var validWeight = valid.match(/<WeightEach>(.*)<\/WeightEach>/);
		if (validWeight){validWeight = validWeight[1]}
		var validWidthIn = 0;
		var validLengthIn = 0;
		var validWeightLbs = globals.kgToLb(validWeight);
		
		if (validLUom.match(/mm/)){
			validWidthIn = (validWidth) ? globals.mmToIn(validWidth) : '';
			validLengthIn = globals.mmToIn(validLength);
		} else {
			validWidthIn = validWidth;
			validLengthIn = validLength;
			validLength = globals.inToMM(validLengthIn);
			validWidth = globals.inToMM(validWidthIn);
		}
		var validLengthChar = globals.ftDecToString('FEET',validLengthIn,13,'ALL');
		var validWidthChar = globals.ftDecToString('FEET',validWidthIn,13,'ALL');

		var locs = locationNormalize(event,validLoc,validLoc2);
		validLoc = locs.division;
		validLoc2 = locs.location;
		var tmpModelPart = validShape.trim()+' '+validDims.trim();
		if (tmpModelPart.match(/x *$/)){
			tmpModelPart = (validWUom != "in") ? validShape.trim()+' '+validDims.trim()+' '+Math.floor(validWidth*1+0.5) : validShape.trim()+' '+validDims.trim()+' '+Math.floor(validWidthIn*1+0.5);
		}
		var rawMatFields = {
			is_metric : isMetric,
			model_part : tmpModelPart,
			grade : validGrade,
		    heat : validHeat,
		    quantity : validQuant*1,
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
			division : locs.division,
			locationsts : locs.location,
			bill_of_lading_in : validBoL,
			po_number : validPoNumber,
			job_number : validReserve,
			coo : validCoO,
			serial_number : serialNumber,
			error : ''
		}
	} else {
		rawMatFields = {
			error : errorMatch[1]
		}
	}
	null;
	return rawMatFields;
}
/**
 * @properties={typeid:24,uuid:"2FBC2EB3-F4B1-4CDD-B32D-683E1990C2C4"}
 * for internal use only. This is 
 */
function exportJob(){
	var xml='<FabSuiteXMLRequest>\
		<ExportJob>\
		<JobNumber>04030</JobNumber>\
		<Filename>e:\\04030Joe.kss</Filename>\
		<IncludeLotNumbers>1</IncludeLotNumbers>\
		</ExportJob>\
		</FabSuiteXMLRequest>';
	if (globals.fsCom){
		var fsResp = globals.fsCom.call('FabSuiteXML',xml);
		application.output('xml is '+fsResp)
		if (fabSuiteResponse(fsResp) == ''){
			return true;
		}
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param cutlistData
 *
 * @properties={typeid:24,uuid:"3D2F68CC-6BEC-45EB-A708-24EEA8616628"}
 */
function processRawCutBarcodes(event,cutlistData){
	var equipEmployee = (globals.m.employee3rdParty[globals.session.employeeNum]);
	var firstEmp = forms.rf_mobile_view.statusWorker.split('.')[0];
	var employee = equipEmployee;
	if (scopes.prefs.lFabsuitePassWorker == 1 && !(!firstEmp)){//user is normally operator of scanner, but pass first worker if prefs set
		if (false && globals.mob.reverseWorker){//disable transaction reversal by anyone for a specific worker
			firstEmp = globals.mob.reverseWorker;
		}
		if (!(!firstEmp) && !globals.m.employee3rdParty[firstEmp]){
			globals.rfErrorShow(i18n.getI18NMessage('1171'));
			return false;
		}//20190513 employee not set 1171
		employee = globals.m.employee3rdParty[firstEmp];
	}
	globals.mob.statusCode3rdParty = globals.m.stationsThird[forms['rf_mobile_view'].statusCode];//station required var station = 
	globals.mob.date = new Date();
	//if (!pieceMark || !station || !quantity || !mainMark || !employee){
	//	globals.rfErrorShow(i18n.getI18NMessage('1017'));
	//	return false;
	//}
	
	//var commitType = 'Save';//Save/Delete/required use F8 to indicate removal
	
	globals.mob.idfile.pcmk_instance = null;//accepts only numeric values, as well as hyphen var instanceNumbers = 
	//instanceNumbers = '';
	var serialNumber = 'FS-5319D7A3-D71F-11E5-8AFE-A292F4137E41';
	//serialNumber = globals.mob.idfile.guid_minor;
	//serialNumber = globals.mob.idfile.guid_major;
	
	// existing cutlist data are sent to mob data for processing.  Back populate mob data with each cut's entry
	for (var idx = 0; idx < cutlistData.cutarray.length;idx++){
		var pcmk = cutlistData.cutarray[idx];
		globals.mob.job.number = pcmk.pJob;//var jobNumber = 
		globals.mob.idfiles = pcmk.available;//required var quantity = length 
		var seqId = scopes.jobs.getSeqId(pcmk.pJob,pcmk.pSeq);
		var lotId = scopes.jobs.getLotId(pcmk.pJob,pcmk.pLot);
		forms['rf_mobile_view'].vSequenceList[pcmk.available.sequence_id] = pcmk.pSeq;// get sequence mapping, which is one-way, job independent
		forms['rf_mobile_view'].vLotList[pcmk.available.lot_id] = pcmk.pLot;//get lot mapping
		globals.mob.idfile.sequence_id = seqId;//pcmk.available.sequence_id;//.toString();//var sequence = forms.rf_mobile_view.vSequenceList[globals.mob.idfile.sequence_id]
		globals.mob.idfile.lot_id = lotId;
		globals.mob.piecemark.lot = pcmk.pLot;//var lotNumber = 
		globals.mob.barcode = pcmk.Barcode;//serialNumber = 
		globals.mob.piecemark.piecemark = pcmk.pMinor;//var pieceMark = exclude this when showing assembly, no minors
		globals.mob.piecemark.parent_piecemark = pcmk.pMajor;//var mainMark = 
		var jobInfo = globals.getJobIdInfo(pcmk.pJob);//is job a FS job?
		globals.mob.job.rf = jobInfo.job_rec.rf_interface;
		fabSuiteSaved('Save');
	}
}
/**
 * @param {JSEvent} event
 * @param {String} serial
 * @param {String} location1
 * @param {String} location2
 *
 * @properties={typeid:24,uuid:"A64D6C61-B1E7-4A81-957E-98A32B5E648A"}
 * @AllowToRunInFind
 */
function fabSuiteInventoryMove(event,serial,location1,location2){
	//location1 is location, location2 is division
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (checkComFabsuite(null) != ''){return null}
	if (scopes.prefs.lFsFlipPrimSecWhenShop*1 == 1){
		var loc = location2;
		location2 = location1;
		location1 = loc;
	}
	var loc2 = "<NewSecondaryLocation>"+location2+"</NewSecondaryLocation>\n";
	var xmlMove = '<FabSuiteXMLRequest>\n\
		<InventoryMove>\n\
		_AS_USER\
		<SerialNumber>'+serial+'</SerialNumber>\n\
		<NewLocation>'+location1+'</NewLocation>\nLOC2\
		</InventoryMove>\n\
		</FabSuiteXMLRequest>';
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	var equipEmployee = (globals.m.employee3rdParty[globals.session.employeeNum]);
	var _asUser = '<AsUser>'+equipEmployee+'</AsUser>\n';
	xmlMove = xmlMove.replace('_AS_USER',_asUser);
	if (scopes.prefs.lFsNoPushSecLoc*1 == 1){
		xmlMove = xmlMove.replace('LOC2','');
	} else {
		xmlMove = xmlMove.replace('LOC2',loc2);
	}
	application.output(xmlMove);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlMove).toString();
	application.output(fsResp);
	if (fsResp.search('<Successful>0') != -1){
		return {error:getFabSuiteError(fsResp)};
	}
	var serialInfo = getInventorySerial(event,serial);
	return serialInfo;

}
/**
 * @AllowToRunInFind
 * 
 * @param event
 * @param serial
 * @param location1
 * @param location2
 *
 * @properties={typeid:24,uuid:"94FC1031-5896-44DC-9F34-D333FC88B936"}
 */
function fabSuiteShip(event,jobNumber,loadNumber,commitType){
	if (scopes.prefs.lFabsuiteIntalled == 0){return {error:null}}//20181113
	if (checkComFabsuite(null) != ''){return null}
	var date = new Date();
	var fsDate = getFsDateFormat(date);
	/*
	 * commitType = Ship/Un-Ship
	 * 
	 */
	var xmlShip = '<FabSuiteXMLRequest>\n\
		<Ship>\n\
		<CommitType>'+commitType+'</CommitType>\n\
		<JobNumber>'+jobNumber+'</JobNumber>\n\
		<TruckNumber>'+loadNumber+'</TruckNumber>\n\
		<Date>'+fsDate+'</Date>\n\
		</Ship>\n\
		</FabSuiteXMLRequest>';
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlShip).toString();
	application.output('RM '+fsResp);
	if (fsResp.search('<Successful>0') != -1){
		return {error:getFabSuiteError(fsResp)};
	}
	return {error:null};
}
/**
 * @AllowToRunInFind
 * 
 * @param event
 * @param invSerial
 * @param iaSerial
 * @param quantity
 * @param location1
 * @param location2
 *
 * @properties={typeid:24,uuid:"DFEC37F5-29A9-4FA4-A5DC-6DD96816CE35"}
 */
function fabSuiteInventoryAuditSave(event,invSerial,iaSerial,quantity,location1,location2){
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (checkComFabsuite(null) != ''){return null}
	var xmlAction = '<FabSuiteXMLRequest>\n\
		<InventoryAuditSave>\n\
		<AuditSerialNumber>'+iaSerial+'</AuditSerialNumber>\n\
		<SerialNumber>'+invSerial+'</SerialNumber>\nQNT LOC1 LOC2\
		</InventoryAuditSave>\n\
		</FabSuiteXMLRequest>';
	
	if (scopes.prefs.lFsFlipPrimSecWhenShop*1 == 1){
		var loc = location2;
		location1 = location2;
		location2 = loc;
	}
	if (scopes.prefs.lFsNoPushSecLoc*1 == 0){
		xmlAction = xmlAction.replace('LOC2','');
	}
	xmlAction = (!location1) ? xmlAction.replace('LOC1','') : xmlAction.replace('LOC1','<NewLocation>'+location1+'</NewLocation>\n');
	xmlAction = (!location2) ? xmlAction.replace('LOC2','') : xmlAction.replace('LOC2','<NewSecondaryLocation>'+location2+'</NewSecondaryLocation>\n');
	xmlAction = xmlAction.replace('QNT','<Quantity>'+quantity+'</Quantity>\n')
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	application.output(xmlAction);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction).toString();
	application.output(fsResp);
	if (fsResp.search('<Successful>0') != -1){
		globals.errorDialogMobile(event,'1220','genericin',getFabSuiteError(fsResp));
		return {error:getFabSuiteError(fsResp)};
	}
	var serialInfo = getInventorySerial(event,invSerial);
	return serialInfo;

}
/**
 * @AllowToRunInFind
 * 
 * @param xmlData
 *
 * @properties={typeid:24,uuid:"DD997083-C7E1-42ED-8DEC-860810FDCF3B"}
 */
function returnXMLDataObj(xmlData){
	var form = forms['rf_mobile_view'];
	var uom = '';
	var data = {
		tenant_uuid : globals.session.tenant_uuid,
		employee_uuid : globals.session.employeeId,
		association_uuid : globals.session.associationId,
		serial_number : form.asnNumber,
		model_part : form.invMaterial,
		grade : form.invGrade
		};
	var test = null;
	test = xmlData.match(/<Quantity>(.*)<\/Quantity>/);
	if (test){data.quantity = test[1]*1}
	test = xmlData.match(/<QuantityOrdered>(.*)<\/QuantityOrdered>/);
	if (test){data.quantity_ordered = test[1]*1}
	test = xmlData.match(/<QuantityRemaining>(.*)<\/QuantityRemaining>/);
	if (test){data.quantity_remaining = test[1]*1}
	test = xmlData.match(/<QuantityFound>(.*)<\/QuantityFound>/);
	if (test){data.quantity_found = test[1]*1}
	test = xmlData.match(/<QuantityMovedIn>(.*)<\/QuantityMovedIn>/);
	if (test){data.quantity_moved_in = test[1]*1}
	test = xmlData.match(/<QuantityMovedOut>(.*)<\/QuantityMovedOut>/);
	if (test){data.quantity_moved_out = test[1]*1}
	test = xmlData.match(/<QuantityMovedOutComplete>(.*)<\/QuantityMovedOutComplete>/);
	if (test){data.quantity_moved_out_complete = test[1]*1}
	test = xmlData.match(/<Complete>(.*)<\/Complete>/);
	if (test){data.sweep_complete = test[1]*1}
	test = xmlData.match(/<Shape>(.*)<\/Shape>/);
	if (test){data.shape = test[1]}
	test = xmlData.match(/<Grade>(.*)<\/Grade>/);
	if (test){data.grade = test[1]}
	test = xmlData.match(/<AuditSerialNumberQuantity>(.*)<\/AuditSerialNumberQuantity>/);
	if (test){
		data.audit_quantity = test[1]*1;
	}
	test = xmlData.match(/<AuditSerialNumberQuantityRemaining>(.*)<\/AuditSerialNumberQuantityRemaining>/);
	if (test){
		data.audit_quantity_remaining = test[1];
	}
	test = xmlData.match(/<Dimensions>(.*)<\/Dimensions>/);
	if (test){
		data.dims = test[1];
	}
	test = xmlData.match(/<Dimensions Metric="(.*)">(.*)<\/Dimensions>/);
	//<Dimensions Metric="0">24 x 68</Dimensions>
	if (test){
		data.dimMetric = (test[1] == 1);
		data.dims = test[2];
	}
	test = xmlData.match(/<Width>(.*)<\/Width>/);
	if (test){
		data.width = test[1];
	}
	test = xmlData.match(/<Width UOM="(.*)">(.*)<\/Width>/);
	if (test){
		uom = test[1];
		data.item_width = test[2];
		if (uom.toString().search("in") == 0){
			data.item_width_in = test[2];
			data.item_width = globals.inToMM(data.item_width_in);
		} else {
			data.item_width = test[2];
			data.item_width_in = globals.mmToFeet(data.item_width);
		}
	}
	test = xmlData.match(/<Length>(.*)<\/Length>/);
	if (test){
		data.item_length = test[1];//FS reports in mm
		data.item_length_in = globals.mmToIn(data.item_length)
	}
    //<Length UOM="in">480</Length>
	test = xmlData.match(/<Length UOM="(.*)">(.*)<\/Length>/);
	if (test){
		application.output('xmlData '+xmlData+'|'+test[1]+'|');
		uom = test[1];
		uom = uom.toString().toUpperCase();
		if (uom.search("IN") == 0){
			data.item_length_in = test[2];
			data.item_length = globals.inToMM(data.item_length_in);
		} else {
			data.item_length = test[2];
			data.item_length_in = globals.mmToIn(data.item_length);
		}
	}
	if (data.luom){data.is_metric = (data.luom.toString() != "in")}
	test = xmlData.match(/<PONumber>(.*)<\/PONumber>/);
	if (test){data.po_number = test[1]}
	test = xmlData.match(/<BillOfLadingNumber>(.*)<\/BillOfLadingNumber>/);
	if (test){data.bill_of_lading = test[1]}
	test = xmlData.match(/<CountryOfOrigin>(.*)<\/CountryOfOrigin>/);
	if (test){data.coo = test[1]}
	test = xmlData.match(/<HeatNumber>(.*)<\/HeatNumber>/);
	if (test){data.heat = test[1]}
	test = xmlData.match(/<Location>(.*)<\/Location>/);
	if (test){data.location1 = test[1]}
	test = xmlData.match(/<SecondaryLocation>(.*)<\/SecondaryLocation>/);
	if (test){data.location2 = test[1]}
	test = xmlData.match(/<JobReserve>(.*)<\/JobReserve>/);
	if (test){data.job_number = test[1];}
	test = xmlData.match(/<JobNumber>(.*)<\/JobNumber>/)
	if (test){data.job_number = test[1];}

	if (data.job_number){
		var jobInfo = scopes.jobs.getJobIdInfo(data.job_number);
		if (jobInfo){data.job_uuid = jobInfo.job_id;}
	}
	test = xmlData.match(/<WeightEach>(.*)<\/WeightEach>/);
	if (test){data.item_weight = test[1]}
	if (data.item_weight){data.item_weight_lbs = globals.kgToLb(data.item_weight)}
	
	
	test = xmlData.match(/<ActualPONumber>(.*)<\/ActualPONumber>/);
	if (test){data.ponumber = test[1];data.po_number = data.ponumber;}
	test = xmlData.match(/<ActualBillOfLadingNumber>(.*)<\/ActualBillOfLadingNumber>/);
	if (test){data.bolnumber = test[1];data.bill_of_lading_in = test[1];}
	test = xmlData.match(/<ActualCountryOfOrigin>(.*)<\/ActualCountryOfOrigin>/);
	if (test){data.countryoforigin = test[1];data.coo = test[1];data.country_of_origin = test[1]}
	test = xmlData.match(/<ActualDropLength UOM="(.*)">(.*)<\/ActualDropLength>/);
	if (test){
		uom = test[1];
		if (uom.toString().search("in") == 0){
			data.actualdroplength = test[2];
			data.item_length_in = test[2];
			data.item_length = globals.inToMM(data.item_length_in);
		} else {
			data.item_length = test[2];
			data.item_length_in = globals.mmToFeet(data.item_length);
		}
	}
	test = xmlData.match(/<ActualDropWidth UOM="(.*)">(.*)<\/ActualDropWidth>/);
	if (test){
		uom = test[1];
		if (uom.toString().search("in") == 0){
			data.actualdropwidth = test[2]
			data.item_width_in = test[2];
			data.item_width = globals.inToMM(data.item_width_in);
		} else {
			data.item_width = test[2];
			data.item_width_in = globals.mmToFeet(data.item_width);
		}
	}
	test = xmlData.match(/<ActualDropLocation>(.*)<\/ActualDropLocation>/)
	if (test){data.actualdroplocation = test[1];data.location1 = test[1];}
	test = xmlData.match(/<ActualDropSecondaryLocation>(.*)<\/ActualDropSecondaryLocation>/);
	if(test){data.actiondroplocation2 = test[1];data.location2 = test[1];}
	test = xmlData.match(/<NewLocation>(.*)<\/NewLocation>/)
	if (test){data.new_location1 = test[1];}
	test = xmlData.match(/<NewSecondaryLocation>(.*)<\/NewSecondaryLocation>/);
	if(test){data.new_location2 = test[1];}
	test = xmlData.match(/<RTSType>(.*)<\/RTSType>/);
	if (test){data.restockstatus = test[1];data.rtsmessage = data.restockstatus;data.disposition = test[1];}
	test = xmlData.match(/<ActualHeatNumber>(.*)<\/ActualHeatNumber>/);
	if (test){data.heatnumber = test[1];data.heat = data.heatnumber}
	test = xmlData.match(/<SerialNumber>(.*)<\/SerialNumber>/);
	if (test){data.serial_number = test[1]}

	if (data.item_length_in){data.item_length_char = globals.ftDecToString('FEET',data.item_length_in,13,'ALL')}
	if (data.item_width_in){data.item_width_char = globals.ftDecToString('FEET',data.item_width_in,13,'ALL')}
	if (data.shape && data.dims){data.model_part = data.shape+' '+data.dims} 
	var locs = locationNormalize(null,data.location1,data.location2);
	data.location = locs.division;
	data.location1 = locs.division;
	data.location2 = locs.location;
	locs = locationNormalize(null,data.actualdroplocation,data.actiondroplocation2);
	data.actualdroplocation = locs.division;
	data.actiondroplocation2 = locs.location;
	
	data.edit_date = new Date();
	data.logic_flag = 0;
	data.error = '';
	if(application.isInDeveloper()){application.output(data)}
	return data;
}
/**
 * @AllowToRunInFind
 * 
 * @param event
 * @param iaSerial
 *
 * @properties={typeid:24,uuid:"8EEDD812-7B3C-433C-8A68-5BB1063ACD39"}
 */
function fabSuiteInventoryAuditScan(event,iaSerial){
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (checkComFabsuite(null) != ''){return null}
	var xmlAction = '<FabSuiteXMLRequest>\n\
		<InventoryAuditScan>\n\
		<AuditSerialNumber>'+iaSerial+'</AuditSerialNumber>\n\
		</InventoryAuditScan>\n\
		</FabSuiteXMLRequest>';
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction).toString();
	application.output(fsResp);
	if (fsResp.search('<Successful>0') != -1){
		return {error:getFabSuiteError(fsResp)};
	}
	var serialInfo = returnXMLDataObj(fsResp);
	if (application.isInDeveloper()){application.output('serialInfo');for (var i in serialInfo){application.output(i+':'+serialInfo[i])}}
	//var serialInfo = getInventorySerial(event,iaSerial);
	return serialInfo;

}
/**
 * @AllowToRunInFind
 * 
 * @param {JSEvent} event
 * @param drop
 * @param dropType
 *
 * @properties={typeid:24,uuid:"99FC967F-D82E-4F3B-BEA9-65C573220862"}
 */
function convertDropAreaToLW(event,cutlistFields){
	var dropW = cutlistFields.dropWidth;
	var dropType = cutlistFields.dropType;
	var dropDims = {};
	var isImperial = (dropType.search(/(in)|(ft)/) != -1);
	if (dropType.search('sq') != -1){
		if (isImperial){
			dropDims.dropW = cutlistFields.dropWidth;
			dropDims.dropWType = 'in';
			dropDims.dropType = 'ft';
			var dropLength = cutlistFields.drop/cutlistFields.dropWidth;//convert area/48 to feet
			dropDims.drop = globals.ftDecToString('FEET',dropLength,13,'ALL');
		} else {
			dropDims.dropW = globals.inToMM(cutlistFields.dropWidth);
			dropDims.dropWType = 'mm';
			dropDims.dropType = 'mm';
			dropDims.drop = cutlistFields.drop/dropDims.dropW;//convert to mm
		}
	} else {
		dropDims.dropW = "0";
		if (isImperial){
			dropDims.dropWType = "in";
			dropDims.drop = globals.ftDecToString('FEET',cutlistFields.drop,13,'ALL');
		} else {
			dropDims.dropWType = "mm";
			dropDims.drop = cutlistFields.drop;
		}
	}
	if (application.isInDeveloper()){application.output('drop '+cutlistFields.drop+' '+dropType+' '+dropDims.dropW+'x'+dropDims.drop)}
	return dropDims;
}
/**
 * @param event
 * @param jobNumber
 *
 * @properties={typeid:24,uuid:"B30381D5-AD44-458C-ACE5-F525C603B59F"}
 */
function getJobAddressBook(event,jobNumber){
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (checkComFabsuite(null) != ''){return null}
	var xmlAction = '<FabSuiteXMLRequest>\n\
		<GetProductionControlJobInformation>\n\
		</GetProductionControlJobInformation>\n\
		</FabSuiteXMLRequest>';
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction).toString();

	application.output(xmlAction+'\n'+fsResp);

}
/**
 * @param event
 * @param location1
 * @param location2
 *
 * @properties={typeid:24,uuid:"CA217BB0-5319-449F-85EF-9A0CC3EA21B3"}
 */
function locationNormalize(event,location1,location2){
	if (location1){
		var isDiv1 = globals.m.assocs[location1];
	}
	if (location2){
		var isDiv2 = globals.m.assocs[location2];
	}
	if (isDiv1 && isDiv2){
		location1 = '';
	}
	if (isDiv1){
		var location = location1;
		location1 = location2;
		location2 = location;
	}
	if (!location2){
		location2 = globals.session.association;
	}
	if (!location1){location1 = ''}
	if (!location2){location2 = ''}
	var locs = {location : location1, division : location2}
	return locs;
}
/**
 * @param {JSEvent} event
 * @param {String} isNumber
 *
 * @properties={typeid:24,uuid:"757191AA-5EE5-491E-9408-F7CC132C5139"}
 * @AllowToRunInFind
 */
function inventorySweepRequest(event,isNumber){
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (checkComFabsuite(null) != ''){return null}
	var xmlAction = '<FabSuiteXMLRequest>\n\
		<GetInventoryLocationSweeps>\n\
		<InventoryLocationSweepSerialNumber>'+isNumber+'</InventoryLocationSweepSerialNumber>\n\
		</GetInventoryLocationSweeps>\n\
		</FabSuiteXMLRequest>';
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction).toString();
	application.output(fsResp);
	if (fsResp.search('<Successful>0') != -1 ||
			fsResp.search('InventoryLocationSweepID') == -1){
		return {error:'Sweep Returned No Data'};
	}
	var serialInfo = returnXMLDataObj(fsResp);
	return serialInfo;
/**
 *   <GetInventoryLocationSweeps>
    <Successful>1</Successful>
    <InventoryLocationSweep>
      <InventoryLocationSweepID>2</InventoryLocationSweepID>
      <DateTimeCreated>2017-03-03 15:54:27</DateTimeCreated>
      <Location>YARD</Location>
      <SecondaryLocation/>
      <Quantity>6</Quantity>
      <QuantityRemaining>0</QuantityRemaining>
      <QuantityFound>6</QuantityFound>
      <QuantityMovedIn>0</QuantityMovedIn>
      <QuantityMovedOut>0</QuantityMovedOut>
      <QuantityMovedOutComplete>0</QuantityMovedOutComplete>
      <Complete>1</Complete>
    </InventoryLocationSweep>
  </GetInventoryLocationSweeps>

</FabSuiteXMLResponse>
 */
}
/**
 * @param event
 * @param isNumber
 * @param rmNumber
 *
 * @properties={typeid:24,uuid:"6344435A-09E8-4CE1-9B7E-695CC8BA8D3C"}
 * @AllowToRunInFind
 */
function inventorySweepRequestScan(event,isNumber,rmNumber){
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (checkComFabsuite(null) != ''){return null}
	var xmlAction = '<FabSuiteXMLRequest>\n\
		<InventoryLocationSweepScan>\n\
		<InventoryLocationSweepSerialNumber>'+isNumber+'</InventoryLocationSweepSerialNumber>\n\
		<SerialNumber>'+rmNumber+'</SerialNumber>\n\
		</InventoryLocationSweepScan>\n\
		</FabSuiteXMLRequest>';
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction).toString();
	application.output(fsResp);
	if (fsResp.search('<Successful>0') != -1){
		return {error:getFabSuiteError(fsResp)};
	}
	var serialInfo = returnXMLDataObj(fsResp);
	return serialInfo;
	
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"66DED1E5-B80D-4514-991B-65E7F1FE4A47"}
 */
function getInventoryTFS(event){
	if (scopes.prefs.lFabsuiteIntalled == 0){return null}//20181113
	if (checkComFabsuite(null) != ''){return null}
	//if (1){return null;}
	var form = forms['rf_mobile_view'];
	var rtsLenChar = form.dropLength;
	var rtsLengthIn = globals.strToDec('FEET',rtsLenChar.replace(/[^0-9]/g,' '));
	var rtsLength = globals.inToMM(rtsLengthIn);
	var rtsJob = form.dropJob;
	var tfsJob = form.tfsJob;
	var rtsLoc = form.dropLocation;
	var qty = form.quantity;
	var rmNumber = form.asnNumber;
	//var rtsLength = 4500.0;
	var rtsLengthUOM = "mm";
	var locs = saveFSLocations(form.location1,form.location2);
	var checkLocs = locationNormalize(event,locs.location,locs.secondaryLocation);
	if (locs.location == form.location1){
		locs.location = form.dropLocation;
	} else {
		locs.secondaryLocation = form.dropLocation;
	}
	var xmlAction = '<FabSuiteXMLRequest>\n\
		<TFSManual>\n\
		<InventorySerialNumber>'+rmNumber+'</InventorySerialNumber>\n\
		<Quantity>'+qty+'</Quantity>\n\
		<JobNumber>'+rtsJob+'</JobNumber>\n\
		<Location>'+rtsLoc+'</Location>\n\
		<TFSJobNumber>'+tfsJob+'</TFSJobNumber>\n\
		<RTSLocation>'+locs.location+'</RTSLocation>\n\
		<RTSSecondaryLocation>'+locs.secondaryLocation+'</RTSSecondaryLocation>\n\
		<RTSJobNumber>'+rtsJob+'</RTSJobNumber>\n\
		<RTSLength UOM="'+rtsLengthUOM+'">'+rtsLength+'</RTSLength>\n\
		</TFSManual>\n\
		</FabSuiteXMLRequest>';
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	application.output(xmlAction);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction).toString();
	application.output(fsResp);
	if (fsResp.search('<Successful>0') != -1){
		return {error:getFabSuiteError(fsResp)};
	}
	var serialInfo = returnXMLDataObj(fsResp);
	return serialInfo;
/*
 *
 * 
 * 		<Shape>'+quantity+'</Shape>\n\
		<TFSDate>'+quantity+'</TFSDate>\n\
		<Grade>'+quantity+'</Grade>\n\
		<Dimensions>'+quantity+'</Dimensions>\n\
		<Length>'+quantity+'</Length>\n\
		<TFSSequence>'+quantity+'</TFSSequence>\n\
		<TFSLotNumber>'+quantity+'</TFSLotNumber>\n\

 */
}
/**
 * @param location
 * @param secondaryLocation
 *
 * @properties={typeid:24,uuid:"9FB3736D-B635-49DB-B85E-591EB1B973F2"}
 */
function saveFSLocations(location, secondaryLocation){
	var locs = locationNormalize(null,location,secondaryLocation);

	if (scopes.prefs.lFsFlipPrimSecWhenShop*1 == 1){
		location = locs.location;
		secondaryLocation = locs.division;
	}
	if (scopes.prefs.lFsNoPushSecLoc*1 == 1){
		secondaryLocation = '';
	}
	return {location:location,secondaryLocation:secondaryLocation}
}
/**
 * @param {JSEvent} event
 * @param {String} rmBarcode
 * @param {String} location
 *
 * @properties={typeid:24,uuid:"5BC2FCC0-14B3-40A7-9490-A3C502D2C7D0"}
 * @AllowToRunInFind
 */
function receiveASN(event,rmBarcode,location){
	var loc1 = location;
	var div1 = globals.m.assocs[globals.associationId];
	var fsLocs = saveFSLocations(loc1,div1);
	var remarks = '';
	var xmlAction = '<FabSuiteXMLRequest>\n\
		<ReceiveASN>\n\
		<SerialNumber>'+rmBarcode+'</SerialNumber>\n\
		<Location>'+fsLocs.location+'</Location>\n\
		<SecondaryLocation>'+fsLocs.secondaryLocation+'</SecondaryLocation>\n\
		<ReceivingRemarks>'+remarks+'</ReceivingRemarks>\n\
		</ReceiveASN>\n\
		</FabSuiteXMLRequest>';
	//application.output('location: '+location1+' 2ndLocation: '+location2+'\n'+xmlMove);
	application.output(xmlAction);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction).toString();
	application.output(fsResp);
	if (fsResp.search('<Successful>0') != -1){
		return {error:getFabSuiteError(fsResp)};
	}
	var serialInfo = returnXMLDataObj(fsResp);
	return serialInfo;

}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"467FBABE-F9C6-424D-9ED7-9494CD71418C"}
 */
function fsGetJobList(event){
	var xmlAction  = '<FabSuiteXMLRequest>\n\
		<GetProductionControlJobs>\n\
		</GetProductionControlJobs>\n\
		</FabSuiteXMLRequest>';
	application.output(xmlAction);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction);
	if (!fsResp){
		return;
	}
	fsResp = fsResp.toString();
	var match = fsResp.match(/<Successful>1<\/Successful>/);
	if (match){
		var jobList = [];
		var separator = '';
		var response = fsResp.split('\n');
		for (var index = 0;index < response.length;index++){
			var matchJob = response[index].match(/<JobNumber>(.*)<\/JobNumber>/);
			if (matchJob){
				jobList.push(matchJob[1]);
			}
		}
		jobList.sort();
		var newList = jobList.join();
		application.output('EPM jobs: '+newList); 
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B7CD783A-22EB-418E-A0F5-F47507EB8A99"}
 */
function getVersion(event){
	var xmlAction  = '<FabSuiteXMLRequest>\n\
		<Version>\n\
		</Version>\n\
		</FabSuiteXMLRequest>';
	//application.output(xmlAction);
	var fsResp = globals.fsCom.call('FabSuiteXML',xmlAction);
	if (!fsResp){
		return '';
	}
	fsResp = fsResp.toString();
	application.output(fsResp)
	var match = fsResp.match(/<Successful>1<\/Successful>/);
	if (match){
		match = fsResp.match(/<InterfaceVersionNumber>(.*)<\/InterfaceVersionNumber>/);
		if (match){
			var version = '_'+match[1];
			return version;
		}
	}
	return '';
}