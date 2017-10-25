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
	var fsResp = scopes.globals.com.call('FabSuiteXML',jobs).toString();
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
	if (application.isInDeveloper()){
		var jobList = '<FabSuiteXMLRequest>\
			<GetProductionControlJobInformation>\
			</GetProductionControlJobInformation>\
			</FabSuiteXMLRequest>';
		var jobs = scopes.globals.com.call('FabSuiteXML',jobList).toString();
		application.output('Jobs are '+jobs);
		
	}
	getFSStations(session.jobNumber);
	var jobs = '<FabSuiteXMLRequest>\
		<ValStation>\
		<Station>'+ status + 
		'</Station>\
		</ValStation>\
		</FabSuiteXMLRequest>';
	
	/** @type {String} */
	var fsResp = scopes.globals.com.call('FabSuiteXML',jobs).toString();
	if (fsResp.search('<Successful>1') == -1){
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
	var stations = scopes.globals.com.call('FabSuiteXML',listStations).toString();
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
	if (application.isInDeveloper()){application.output(session.jobNumber)}
	var loadcheck = '<FabSuiteXMLRequest>\
		<ValTruck>\
		<JobNumber>'+session.jobNumber+'</JobNumber>\
		<TruckNumber>'+ loadNumber + '</TruckNumber>\
		<ActionIfNotExist>0</ActionIfNotExist>\
		</ValTruck>\
		</FabSuiteXMLRequest>';
	
	/** @type {String} */
	var fsResp = scopes.globals.com.call('FabSuiteXML',loadcheck).toString();
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
	var fsResp = scopes.globals.com.call('FabSuiteXML',check).toString();
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
		return true;
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
	if (application.isInDeveloper()){application.output(newValue)}
	var formName = event.getFormName();
	var check = '<FabSuiteXMLRequest>\
					<GetProductionControlJobInformation>\
					<JobNumber>'+newValue+'</JobNumber>\
					</GetProductionControlJobInformation>\
				</FabSuiteXMLRequest>';
	/** @type {String} */
	var fsResp = scopes.globals.com.call('FabSuiteXML',check).toString();
	if (fsResp.search('<JobNumber>') == -1){
		plugins.dialogs.showErrorDialog('1030',i18n.getI18NMessage('1030'));
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
	globals.session.jobNumber = newValue;
	forms[formName].elements.btnSelect.enabled = true;
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
	//if (application.isInDeveloper()){application.output(check)}
	/** @type {String} */
	var fsResp = scopes.globals.com.call('FabSuiteXML',check).toString();
	var fieldValueName = 'LotNumber';
	//application.output('output\n'+fsResp);
	if (fsResp.search('<JobNumber>') == -1){
		scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		checkResetToValidEntry(fieldValueName,'',newValue,event);
		//scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		return true;
	}
	checkResetToValidEntry(fieldValueName,fsResp,newValue,event);
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

	var xmlField = '<'+xmlFieldName+'>(.*)<\/'+xmlFieldName+'>';
	var dbValues = [];
	var choices = validString.split('\n');
	var regX = new RegExp(xmlField);
	application.output('regex '+regX);
	for (var idx = 0;idx < choices.length;idx++){
		application.output('choice idx '+choices[idx]);
		/** @type {String} */
		var item = regX.exec(choices[idx]);
		if (!item){continue;}
		application.output(item);
		dbValues.push(item[1].trim());//remove any extra spaces on outside of item
	}	
	choices = enteredString.split(',');
	var replaceVal = '';
	var nonVal = '';
	for (idx = 0;idx < choices.length;idx++){
		application.output(choices[idx]);
		if (dbValues.indexOf(choices[idx]) != -1){
			if (replaceVal == ''){replaceVal = choices[idx]} else {replaceVal += ','+choices[idx]}		
		} else {
			if (nonVal == ''){nonVal = choices[idx]} else {nonVal += ','+choices[idx]}
		}
	}
	if (dbValues.length == 0){nonVal = enteredString}
	if (nonVal != ''){
		application.output('nonval '+nonVal);
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
	//use session.mainMark array for list of db piecemark assemblies
	var check = '<FabSuiteXMLRequest>\n\
		<GetAssemblies>\n\
		<JobNumber>'+globals.session.jobNumber+'</JobNumber>\n\
		</GetAssemblies>\n\
	</FabSuiteXMLRequest>';
	if (application.isInDeveloper()){application.output(check)}
	/** @type {String} */
	var fsResp = scopes.globals.com.call('FabSuiteXML',check).toString();
	var fieldValueName = 'MainMark';
	application.output('output\n'+fsResp);
	if (fsResp.search('<JobNumber>') == -1){
		scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		//scopes.globals.errorDialog(1030);
		checkResetToValidEntry(fieldValueName,'',newValue,event);
		//scopes.globals.errorDialogMobile(event,1030,event.getElementName(),'');
		return true;
	}
	checkResetToValidEntry(fieldValueName,fsResp,newValue,event);
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
	var fsResp = scopes.globals.com.call('FabSuiteXML',check).toString();
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"973F4C13-0566-489B-BFB0-20683839E843"}
 */
function checkFabSuiteCom(event){
	var check = '';
	var fsResp = scopes.globals.com.call('FabSuiteXML',check).toString()
}