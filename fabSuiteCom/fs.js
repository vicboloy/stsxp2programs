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
 * @properties={typeid:35,uuid:"4083EB34-1DAB-4749-AE2C-245F6F602082",variableType:-4}
 */
var endVars = null;
/**
 * @param {String} jobnumber
 *
 * @properties={typeid:24,uuid:"5A01BB91-029C-4177-ABC0-E5315C6A96B8"}
 * @AllowToRunInFind
 */
function checkFSJobNumber(jobnumber){
	//getProductionControlJobs
	plugins.headlessclient
	var jobs = '	<FabSuiteXMLRequest>\
		<ValJob>\
		<JobNumber>'+ jobnumber + 
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
	/**	var jobList = '<FabSuiteXMLRequest>\
			<GetProductionControlJobInformation>\
			</GetProductionControlJobInformation>\
			</FabSuiteXMLRequest>';
		var jobs = com.call('FabSuiteXML',jobList).toString();
		//application.output('Jobs are '+jobs);*/
	if (globals.m.stationsThird[status]){
		status = globals.m.stationsThird[status].toLowerCase();
	}
	
	//getFSStations(globals.session.jobNumber);
	var station = '<FabSuiteXMLRequest>\
		<ValStation>\
		<Station>'+ status + 
		'</Station>\
		</ValStation>\
		</FabSuiteXMLRequest>';
	
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',station).toString();
	//if (fsResp.search('<Successful>1') == -1){
	if (fsResp == ''){
		return getFabSuiteError(fsResp);
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
 *
 * @properties={typeid:24,uuid:"A3D4FB72-755D-4ABD-B03F-984ABB3F80FF"}
 */
function checkFSLoad(loadNumber){
	if (application.isInDeveloper()){application.output(globals.session.jobNumber)}
	var loadcheck = '<FabSuiteXMLRequest>\
		<ValTruck>\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\
		<TruckNumber>'+ loadNumber + '</TruckNumber>\
		<ActionIfNotExist>\
		Nothing\
		</ActionIfNotExist>\
		</ValTruck>\
		</FabSuiteXMLRequest>';
//		<ActionIfNotExist>0</ActionIfNotExist>\
	
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',loadcheck).toString();
	if (fsResp.search('<Successful>1') == -1){
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
function checkFSSequences(oldValue, newValue, event){
	if (application.isInDeveloper()){application.output(globals.session.jobNumber)}
	var check = '<FabSuiteXMLRequest>\
					<GetSequences>\
					<JobNumber>'+globals.session.jobNumber+'</JobNumber>\
					</GetSequences>\
				</FabSuiteXMLRequest>';
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	//application.output('sequences '+fsResp);
	if (fsResp.search('<Successful>1') == -1){
		return getFabSuiteError(fsResp);
	}
	if (application.isInDeveloper()){application.output(fsResp)}
	var fieldValueName = 'Sequence';
	//checkResetToValidEntry(validArray,enteredString,event);
	application.output('fs response '+fsResp);
	if (fsResp.search('<JobNumber>') == -1){
		plugins.dialogs.showErrorDialog('1030',i18n.getI18NMessage('1030'));
		checkResetToValidEntry(fieldValueName,'',newValue,event);
		//scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		if (forms.kiss_import && forms.kiss_import.vSeqAll){forms.kiss_import.vSeqAll = 1}
		return true;
	} else {
		forms.kiss_import.vSeqAll = (forms.kiss_import && forms.kiss_import.vSeqNumber == '') ? 1 : 0;
	}
	checkResetToValidEntry(fieldValueName,fsResp,newValue,event);
	return null;
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
function checkFSJob(oldValue, newValue, event) {
	if (!scopes.prefs.lFabsuiteInstalled){
		plugins.dialogs.showErrorDialog('1216',i18n.getI18NMessage('1216'));
		return;
	}
	if (forms.kiss_import){
		forms.kiss_import.fabSuiteJobExists = i18n.getI18NMessage('sts.txt.fabsuite.job.dne');
		forms.kiss_import.stsXJobAssoc = i18n.getI18NMessage('sts.status.none');
	}
	scopes.jobs.warningsYes();
	scopes.jobs.warningsMessage('Connecting to FabSuite',true);
	if (!checkComFabsuite(event)){
		scopes.jobs.warningsX();
		forms['kiss_import'].onActionHide();
		return;
		
	}
	if (!scopes.globals.com){
		scopes.globals.com = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
	}

	/** @type {String} */
	var fsUp = com;
	scopes.jobs.warningsMessage('Verifying FabSuite Connection',true);

	if (!com || (fsUp && fsUp.toString().search('RemoteCOM') != -1)){scopes.fs.checkComFabsuite()}
	//showProgressInit(event);
	//showProgressUpdate(event,'Checking For This Job Number')

	if (application.isInDeveloper()){application.output(newValue)}
	var formName = event.getFormName();
	
	var check = '<FabSuiteXMLRequest>\
					<GetProductionControlJobInformation>\
					<JobNumber>'+newValue+'</JobNumber>\
					</GetProductionControlJobInformation>\
				</FabSuiteXMLRequest>';
	scopes.jobs.warningsMessage(i18n.getI18NMessage('1202'),true);
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	if (fsResp.search('<JobNumber>') == -1){//This Job Number Was Not Found In FabSuite. - 1030
		scopes.jobs.warningsMessage(i18n.getI18NMessage('1030'),true);
		plugins.dialogs.showErrorDialog('1030',i18n.getI18NMessage('1030'));
		forms[formName].clearBadEntry(event);
		globals.session.jobNumber = '';
		//scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		scopes.jobs.warningsX();
		return true;
	}
	/** else {
		application.output('call on server');
		var headless = plugins.headlessclient.createClient('STSx','S','S',['headless']);// onSolutionOpen argument
		headless.queueMethod(null,'scopes.fs.serverFSCallRequest',[check],scopes.fs.serverFSResponseCallBack);
		//application.sleep(1000);
		//headless.shutdown();
	} */
	if (globals.session.tenantJobArray.indexOf(newValue) == -1){
		scopes.jobs.warningsX();
		plugins.dialogs.showErrorDialog('1217',i18n.getI18NMessage('1217'));
		return true;
	}
	if (globals.session.assocJobArray.indexOf(newValue) == -1){
		scopes.jobs.warningsX();
		plugins.dialogs.showErrorDialog('1215',i18n.getI18NMessage('1215'));
		return true;
	}
	// 1203 - Collecting job information from STS X
	// 1214 - Connection successful. 
	scopes.jobs.warningsMessage(i18n.getI18NMessage('1203')+' '+i18n.getI18NMessage('1214'),true);
	scopes.jobs.getJobIdInfo(newValue);//places it into scopes.jobs.importJob object
	globals.session.jobNumber = newValue;
	forms[formName].elements.btnSelect.enabled = true;
	if (forms.kiss_import){
		forms.kiss_import.fabSuiteJobExists = i18n.getI18NMessage('sts.txt.fabsuite.job.exists');
		forms.kiss_import.stsXJobAssoc = scopes.jobs.importJob.associationName;
		if (globals.session.associationId != scopes.jobs.importJob.associationId){
			forms.kiss_import.elements.stsJobAssocName.fgcolor = 'red';
			forms.kiss_import.elements.btnSelect.enabled = false;
			plugins.dialogs.showErrorDialog('1215',i18n.getI18NMessage('1215'));
			forms.kiss_import.vJobNumber = '';
			scopes.jobs.warningsX();
			return true;
		}
	}
	//scopes.jobs.warningsMessage('Collecting Internal Job Piecemarks',true);

	//scopes.jobs.readPieceTables();
	scopes.jobs.warningsX();
	
	if (forms.kiss_import){
		forms.kiss_import.elements.stsJobAssocName.fgcolor = 'black';
		forms.kiss_import.elements.btnSelect.enabled = true;
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
function checkFSLots(oldValue, newValue, event) {
	//if (application.isInDeveloper()){application.output(newValue)}
	var check = '<FabSuiteXMLRequest>\n\
					<GetLots>\n\
					<JobNumber>'+globals.session.jobNumber+'</JobNumber>\n\
					</GetLots>\n\
				</FabSuiteXMLRequest>';
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	var fieldValueName = 'LotNumber';
	var formName = event.getFormName();
	if (application.isInDeveloper()){application.output('output\n'+fsResp)}
	if (fsResp.search('<JobNumber>') == -1){
		scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		checkResetToValidEntry(fieldValueName,'',newValue,event);
		if (forms.kiss_import){forms.kiss_import.vLotAll = 1}
		return true;
	}
	checkResetToValidEntry(fieldValueName,fsResp,newValue,event);
	forms.kiss_import.vLotAll = (forms.kiss_import && forms.kiss_import.vLotNumber == '') ? 1 : 0;
	return true;
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
	var xmlField = '<'+xmlFieldName+'>(.*)<\/'+xmlFieldName+'>';
	var dbValues = [];
	var choices = validString.split('\n');
	var regX = new RegExp(xmlField);
	//application.output('regex '+regX);
	for (var idx = 0;idx < choices.length;idx++){
		//application.output('choice idx '+choices[idx]);
		/** @type {String} */
		var item = regX.exec(choices[idx]);
		if (!item){continue;}
		//application.output(item[1]);
		//scopes.kiss.importMessages = baseMessage + '\n'+ item[1];
		//application.updateUI();
		dbValues.push(item[1].trim());//remove any extra spaces on outside of item
	}	
	choices = enteredString.split(',');
	var replaceVal = '';
	var nonVal = '';
	for (idx = 0;idx < choices.length;idx++){
		//application.output(choices[idx]);
		if (dbValues.indexOf(choices[idx]) != -1){
			if (replaceVal == ''){replaceVal = choices[idx]} else {replaceVal += ','+choices[idx]}		
		} else {
			if (nonVal == ''){nonVal = choices[idx]} else {nonVal += ','+choices[idx]}
		}
	}
	if (dbValues.length == 0){nonVal = enteredString}
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
function checkFSMainMark(oldValue,newValue,event){
	var formName = event.getFormName();
	//var thisWin = application.getActiveWindow();
	//thisWin.controller.enabled = false;
	//use session.mainMark array for list of db piecemark assemblies
	scopes.jobs.warningsYes();
	scopes.jobs.warningsMessage('Getting marks in job.',true);
	//showProgressInit(event);
	//showProgressUpdate(event,'Checking For Selected Main Mark')
	//scopes.jobs.importMessages = 'Checking For Selected Main Mark';
	//var win = application.createWindow('Messages',JSWindow.WINDOW);
	//win.show('import_messages');
	//application.updateUI();
	//application.updateUI();
	var check = '<FabSuiteXMLRequest>\n\
		<GetAssemblies>\n\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\n\
		</GetAssemblies>\n\
	</FabSuiteXMLRequest>';
	if (application.isInDeveloper()){application.output(check)}
	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	var fieldValueName = 'MainMark';
	application.output('output\n'+fsResp);
	scopes.jobs.warningsMessage('Getting marks in job.',true);
	if (fsResp.search('<JobNumber>') == -1){
		scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		//scopes.globals.errorDialog(1030);
		checkResetToValidEntry(fieldValueName,'',newValue,event);
		//scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		//win.hide();
		scopes.jobs.warningsX();
		//thisWin.controller.enabled = true;
		return true;
	}
	checkResetToValidEntry(fieldValueName,fsResp,newValue,event);
	//thisWin.controller.enabled = true;
	//win.hide();
	scopes.jobs.warningsX();
return true;

}
/**
 * @AllowToRunInFind
 * 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"E92A7A06-BA71-49EB-B32A-9F70F776B5E7"}
 */
function checkFSDrawingNumber(oldValue,newValue,event){
	// use session.drawings array for STS X Embedded
	var check = '<FabSuiteXMLRequest>\n\
		<GetAssemblies>\n\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\n\
		</GetAssemblies>\n\
	</FabSuiteXMLRequest>';

	/** @type {String} */
	var fsResp = com.call('FabSuiteXML',check).toString();
	var fieldValueName = 'DrawingNumber';
	if (fsResp.search('<JobNumber>') == -1){
		//scopes.globals.errorDialog(1030);
		checkResetToValidEntry(fieldValueName,'',newValue,event);
		//scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		return true;
	}
	checkResetToValidEntry(fieldValueName,fsResp,newValue,event);
return true;

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
			fsCom.release();
			return response;
		}
	//}
	response = fsCom.call('FabSuiteXML',xml);
	fsCom.release();
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
	if (idx <= order.length-2){
		forms[formName].elements[order[idx+1]].requestFocus();
	}
	return;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"973F4C13-0566-489B-BFB0-20683839E843"}
 */
function checkFabSuiteCom(event){
	var check = '';
	var fsResp = scopes.globals.com.call('FabSuiteXML',check).toString()
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
	scopes.jobs.warningsYes();
	scopes.jobs.warningsMessage('Connecting to FabSuite',true);
	if (!scopes.prefs.lFabsuiteInstalled){
		scopes.jobs.warningsMessage('FabSuite Is Not Installed',true);
		var start = new Date().getTime();
		var time = new Date().getTime();
		while (time-start < 2000){
			time = new Date().getTime();
		}
		scopes.jobs.warningsX();
		return false;
	}
	fabSuiteLocal = false;
	if (!com){
		com = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
	}
	if (!com || !com.isJACOBLoaded()) {
		scopes.jobs.warnings("Error loading COM: \n" + plugins.servoyguy_servoycom.getLastError(),true);
		return false;
	}
	var fsServer = scopes.prefs.fabsuiteServerName;
	var fsPass = scopes.prefs.fabsuitepassword;
	var fsUser = scopes.prefs.fabsuiteUserid;
	var fsPort = scopes.prefs.fabsuiteDatabase;
	if (!fsServer || !fsPass || !fsPort || !fsUser){
		scopes.jobs.warnings("Fabsuite Connection in Preferences Empty",true);
		return false;
	}
	var xmlConnect = '<FabSuiteXMLRequest>\
							<Connect>\
								<IPAddress>'+fsServer+'</IPAddress>\
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
	/** @type {String} */
	var response2 = response.toString();
	if (response2.search('<Successful>0') != -1){
		scopes.jobs.warningsMessage('Fabsuite Query Error '+response2);
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
	return true;
}
/**
 * TODO generated, please specify type and doc for the params
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