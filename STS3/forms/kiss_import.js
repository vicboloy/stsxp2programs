/**
 * @properties={typeid:35,uuid:"8219B251-F78E-47C2-9DBC-AD3F2257A453",variableType:-4}
 */
var mappedFormatArray = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFDAFA83-3D34-4489-8543-868CB52B1FE8"}
 */
var selectedCust = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"675D86A9-92BD-4BA8-AB98-280CAB563E59"}
 */
var vJobNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"20C3ABDD-6A3E-4DD5-A946-74213A501015"}
 */
var fabSuiteJobExists = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C14478D-A465-44B1-B16E-83248C8A482C"}
 */
var stsXJobAssoc = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65999E11-A05B-4CF5-B467-30C594AD1670"}
 */
var currentAssocName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA24FFC3-8DBB-423C-90D6-04AC27ACAF60"}
 */
var vSeqNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E94208F-1ECE-4849-BD9E-0F6628954741"}
 */
var vDrawingNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4AB006C4-0CEB-4A35-889C-7FC9EFA4A154"}
 */
var vLotNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12A785EE-D894-4096-B6A6-EDD69FA26404"}
 */
var vPartNumber = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D7385ABD-4A29-4D14-B3C7-BE00C34E3CA3",variableType:4}
 */
var vSeqAll = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C120DF78-24F0-4666-A15A-768846118A2E",variableType:4}
 */
var vLotAll = 0;
/**
 * @properties={typeid:35,uuid:"95562FEC-EC22-43E8-89AC-A8199340BB9F",variableType:-4}
 */
var aDraws = [];
/**
 * @properties={typeid:35,uuid:"1147EC7E-4BB2-41B1-9C3E-6EC6B40C91FF",variableType:-4}
 */
var aLots = [];
/**
 * @properties={typeid:35,uuid:"3F7DB882-118E-46B9-8EBA-251A8ACC2D5B",variableType:-4}
 */
var aSeqs = [];
/**
 * @properties={typeid:35,uuid:"817168AB-967D-40AD-AB28-3B2E23A27A7E",variableType:-4}
 */
var aMarks = [];
/**
 * @properties={typeid:35,uuid:"B66B1B06-6CB4-45A3-8CC1-7946DCB00E28",variableType:-4}
 */
var entryOrder = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFAC0BFC-86EE-4035-8A29-E52E00E956B5"}
 */
var texts="";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9007E7EB-8E8E-4566-AC97-3A325C3A3539"}
 */
var randFile = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33C6139F-AB1C-448E-A069-0155DA1BFB12",variableType:4}
 */
var useKissFile = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3CA31ADD-5773-4284-8C01-560010BEB67C",variableType:4}
 */
var verifyJobFabsuite = 0;
//------------------------------------------------------------------------------------------------
/**
 *
 * @properties={typeid:24,uuid:"CEB68FE5-3762-496D-B815-88ADC962BE24"}
 * @AllowToRunInFind
 */
function fileReceipt(file){
	if (file == null){return}
	var scope = scopes.jobs;
	var job = scopes.jobs.importJob;
	scopes.jobs.readKissTextFile(file);

	scopes.jobs.appendQuantityToIdfile = null; // zero out append values array list
	//establish error-free or dialog with errors, correct column count, mapping, 
	var headerLine = [];
	for (var index=0;index<40;index++){
		if (scopes.jobs.importResults[index][0] == "H"){
			headerLine = scopes.jobs.importResults[index];
			break;
		}
	}
	var jobNumberIndex = scopes.jobs.getFieldDataMapping("mapped_field","jobs.job_number").split(",")[1];
	var jobMetricIndex = scope.getFieldDataMapping("mapped_field","jobs.metric_job").split(",")[1];
	var jobTitleIndex = scope.getFieldDataMapping("mapped_field","jobs.job_title").split(",")[1];
	var jobNumber = headerLine[jobNumberIndex];//global job number setting
	var jobNameIndex = scopes.jobs.getFieldDataMapping("mapped_field","jobs.job_title").split(",")[1];
	var jobDateIndex = scopes.jobs.getFieldDataMapping("mapped_field","jobs.project_year").split(",")[1];
	job.jobNumber = jobNumber;
	job.metricFlag = (headerLine[jobMetricIndex] == "F") ? 0 : 1;
	job.title = headerLine[jobTitleIndex];
	job.name = headerLine[jobNameIndex];
	job.date = headerLine[jobDateIndex];
	job.associationId = scopes.globals.session.associationId;
	if (application.isInDeveloper()){application.output('assoc'+ globals.secCurrentAssociationID)}
	scopes.jobs.jobName = jobNumber;
	foundset.loadAllRecords();
	scopes.jobs.custNums = [];/** @type {Array} */ var custNums = scopes.jobs.custNums;
	scopes.jobs.jobNums = []; /** @type {Array} */ var jobNums = scopes.jobs.jobNums;
	scopes.jobs.custIds = []; /** @type {Array} */ var custIds = scopes.jobs.custIds;
	scopes.jobs.jobIds = []; /** @type {Array} */ var jobIds = scopes.jobs.jobIds;
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var jobsFS = databaseManager.createSelect('db:/stsservoy/jobs');
	jobsFS.result.add(jobsFS.columns.job_id);
	jobsFS.result.add(jobsFS.columns.customer_id);
	jobsFS.result.add(jobsFS.columns.job_number);
	jobsFS.where.add(jobsFS.columns.tenant_uuid.eq(scopes.globals.session.tenant_uuid));
	jobsFS.where.add(jobsFS.columns.job_number.eq(jobNumber));
	var JFS = databaseManager.getFoundSet(jobsFS);
	var count = JFS.getSize();
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var rec = null;
	if (count > 0){
		if (count > 1){
			//application.output('>>> jobs '+count);
			for (var index2 = 1;index2 <= count;index2++){
				rec = JFS.getRecord(index2);
				custIds.push(rec.customer_id);
				jobIds.push(rec.job_id);
				custNums.push(rec.st2_jobs_to_customers.customer_number);
				jobNums.push(rec.job_number);
			}
			elements.chooseCust.text = 'Job Number '+jobNumber+' is under multiple customers. Choose customer number:';
			elements.chooseCust.visible = true;
			elements.chooseCustSelect.visible = true;
			application.setValueListItems('stsvl_kiss_custList',custNums);
			return;
		}
		//scopes.globals.kissJobRf = jobsFS.getRecord(1).rf_interface;//save rf interface to show/noshow buttons
		/** @type {JSRecord<db:/stsservoy/jobs>} */
		rec = JFS.getRecord(1);
		job.customerId = rec.customer_id;
		var custRec = rec.sts_job_to_customer2;
			if (!custRec.barcode_prefix || 
			// might not need to check this !custRec.barcode_fixed_length || 
			!custRec.barcode_include_prefix || 
			!custRec.barcode_job_length ||
			custRec.barcode_prefix.length != 2){
			var errMsg = i18n.getI18NMessage('sts.txt.barcode.incomplete.msg').replace('XXX',custRec.customer_number);
			plugins.dialogs.showErrorDialog('STS ERROR: Customer barcode incomplete.',errMsg);
			return;
		}
		scopes.jobs.jobUnderCustomer = rec.job_id;
		if (application.isInDeveloper()){application.output('job record id'+rec.job_id)}
		var win = application.createWindow("KISS Import", JSWindow.DIALOG);
		win.title = "KISS Import";
		win.show(forms.kiss_option_import);
	} else {
		if (application.isInDeveloper()){application.output('job not found')}
		errMsg = i18n.getI18NMessage('sts.txt.job.does.not.exist.msg').replace('XXX',jobNumber);
		plugins.dialogs.showErrorDialog(i18n.getI18NMessage('sts.txt.job.does.not.exist'),errMsg);
		return;
		//show dialog for customers
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B3F01716-FF60-4B1E-94C0-C57744ED6B31"}
 */
function getKissFile(event){
	controller.enabled = false;
	randFile = 'Import_'+vJobNumber+'_'+new Date().getTime()+'.kss';
	scopes.kiss.saveImportSettings(event);

	scopes.jobs.warningsYes(event);
	if (!useKissFile){
		var verified = scopes.fs.verifyKissImportFilters(event);
		if (!verified){
			var response = globals.DIALOGS.showQuestionDialog(
			i18n.getI18NMessage('1221'),//import filters may not apply
			i18n.getI18NMessage('1221'),
			i18n.getI18NMessage('sts.btn.no'),
			i18n.getI18NMessage('sts.btn.yes'));
			if (response == i18n.getI18NMessage('sts.btn.no')){
				controller.enabled = true;
				scopes.jobs.warningsX();
				return;
			}
		}
		elements.btn_GetKiss.enabled = false;
		elements.btn_Close.enabled = false;
		elements.btn_Clear.enabled = false;
		///var servoyDir = scopes.prefs.importpath;
		var servoyDir = plugins.UserManager.Client().userDir;
		
		servoyDir = servoyDir+'\\'+randFile;
		servoyDir = plugins.file.getDefaultUploadLocation()+scopes.prefs.importpath+"\\"+randFile;
		///servoyDir = plugins.file.getDefaultUploadLocation()+servoyDir+"\\"+randFile;
		//servoyDir = servoyDir.replace(/\//g,'\\');
		application.output('Directory '+servoyDir);
		servoyDir = servoyDir.replace(/\/+/g,'\\').replace('.','');
		servoyDir = servoyDir.replace('[A-Za-z]//','');
		application.output('Import file '+servoyDir);
		var request = '<FabSuiteXMLRequest>\n\
			<ExportJob>\n\
			<JobNumber>'+vJobNumber+'</JobNumber>\n\
			<FileName>'+servoyDir+'</FileName>\n\
			<IncludeLotNumbers>1</IncludeLotNumbers>\n\
			</ExportJob>\n\
			</FabSuiteXMLRequest>';
	}
	var success = history.removeForm('kiss_barcode_request');
	if (success){
		var success2 = solutionModel.removeForm('kiss_barcode_request');
		if (!success2){globals.loggerDev(this,'Remove form history fail.');}
	}
	var success = history.removeForm('kiss_excludes_lst');
	if (application.isInDeveloper()){application.output('kiss_excludes_lst form history removed '+success)}
	success = solutionModel.removeForm('kiss_excludes_lst');
	if (application.isInDeveloper()){application.output('kiss_excludes_lst form object removed '+success)}

	var filters = {Sequence:vSeqNumber,LotNumber:vLotNumber,MainMark:vPartNumber,DrawingNumber:vDrawingNumber}
	if (application.isInDeveloper()){application.output('kiss on server');}
	if (useKissFile){
		//push file to server
		var homeDir = scopes.prefs.temppath;
		servoyDir = scopes.prefs.importpath;
		if (application.isInDeveloper()){
			homeDir = servoyDir;
		}
		if (application.isInDeveloper()){application.output('directory is '+servoyDir)}
		var servoyDir = plugins.UserManager.Server().servoyDirectory;
		//randFile = 'Import_'+vJobNumber+'_'+new Date().getTime()+'.kss';
		//servoyDir = servoyDir+'\\'+randFile;
		//servoyDir = servoyDir.replace('[A-Z]:\\','/');application.output('dir '+servoyDir);
		var file = plugins.file.showFileOpenDialog(1, homeDir, false, new Array("KISS Files", "kss", "txt"));
		var file1 = plugins.file.convertToJSFile(file);
		var kssText = plugins.file.readTXTFile(file1).split('\n');
		var kssJob = ''; var idx = 6;
		while (idx++ < 30){
			/** @type {String} */
			var kssLine = kssText[idx].split('/n');
			var kssFlds = kssLine.split(',');
			if (kssFlds[0] == 'H'){
				kssJob = kssFlds[1];
			}
		}
		var jobs = application.getValueListArray('stsvl_jobs_association');
		if (jobs.indexOf(kssJob) == -1){
			application.output('kss file job number does not match any jobs in association');
		}
		if (kssJob != vJobNumber){
			application.output('kss file job number does not match requested job number');
		}
		//plugins.UserManager.copyFileToServer(String filePathToCopy / JSFile fileToCopy)
		var server = plugins.file.getHomeFolder();
		var userDir = plugins.UserManager.Server().userDir;
		application.output('user dir '+userDir);
		var vOverwrite = false;
		success = plugins.UserManager.copyFileToServer(file,servoyDir,vOverwrite);
		application.output(file+' file write to '+servoyDir+ ' server success: '+success);
		return;
	}
	removeJobImportData(vJobNumber);
	scopes.kiss.importFSOnServer(event,request,filters);//IMPORT 1 importFSOnServer
	
	/**
	if (1==1){return}
	if (scopes.prefs.lFabsuiteInstalled){
		var getFskiss = plugins.dialogs.showQuestionDialog(i18n.getI18NMessage('sts.txt.kiss.fabsuite'),i18n.getI18NMessage('sts.txt.kiss.fabsuite'),[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')])
		globals.errorDialogMobile(event,'sts.txt.kiss.fabsuite',null,getFskiss);
		if (getFskiss == i18n.getI18NMessage('sts.btn.yes')){
			//application.output('test get fs kiss');
			//scopes.kiss.importFSOnServer(event,xmlRequest,filters)
			var attachTo = plugins.fabsuite.fsSetLib('E:\\p2programs\\javaCom\\FabSuiteXMLInterface.dll');
			//application.output('attached to fslib '+attachTo);
			var xmlQuery = '<FabSuiteXMLRequest>\
							<Connect>\
								<IPAddress>localhost</IPAddress>\
								<PortNumber>3306</PortNumber>\
								<Username>admin</Username>\
								<Password>fab</Password>\
							</Connect>\
						</FabSuiteXMLRequest>';
			var response = plugins.fabsuite.fsXML(xmlQuery);
			application.output(scopes.fs.fabSuiteError(response));
			//application.output('fs xml response '+response);
			var test0 = plugins.fabsuite.fsSetLib('C:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\FabSuiteXMLInterface.dll');
			var xmlConnect = '<FabSuiteXMLRequest>\
									<Connect>\
										<IPAddress>localhost</IPAddress>\
										<PortNumber>3306</PortNumber>\
										<Username>admin</Username>\
										<Password>fab</Password>\
									</Connect>\
								</FabSuiteXMLRequest>';

			var test = plugins.fabsuite.fsXML(xmlConnect);
			//application.output('test fs interface '+test);
			var xmlConn2 = '	<FabSuiteXMLRequest>\
									<Version/>\
								</FabSuiteXMLRequest>';
			test = plugins.fabsuite.fsXML(xmlConn2);
			//application.output('test fs interface '+test);//two jobs in FabSuite Sample1 and FabSuite2
			var xmlConn3 = '	<FabSuiteXMLRequest>\
				<ExportJob>\
					<JobNumber>FabSuite2</JobNumber>\
					<FileName>04030testjob.kss</FileName>\
					<IncludeLotNumbers>true</IncludeLotNumbers>\
				</ExportJob>\
			</FabSuiteXMLRequest>';
			test = plugins.fabsuite.fsXML(xmlConn3);
			//application.output('test '+test);
		} else {
			return;			
		}
		return;
	}
	scopes.jobs.appendQuantityToIdfile = null; //import append data
	//var path = "C:\\Users\\Alienware\\Documents\\STS p2programs\\KISS\\";
	//var path = scopes.prefs.importpath;
	//plugins.file.showFileOpenDialog(0, path, false, fileReceipt);
	 */
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17F794AB-0E0E-4D5D-8835-E442A59A244F"}
 */
function onActionAddTenant(event) {
	var appType = application.getApplicationType();
	if (appType == 2){
		//plugins.file.showDirectorySelectDialog(directory)
		//plugins.file.get
		//var dir=plugins.file.showDirectorySelectDialog('c:\\STS\\');
		//var jsFileType = plugins.file.convert
		texts = plugins.file.readTXTFile('c:\\STS\\STS.txt');
		application.output(texts);
	}
	/** * @type {JSFoundset<db:/stsservoy/uom_types>} */
/**	var fs=databaseManager.getFoundSet('db:/stsservoy/uom_types');
	//fs.deleteAllRecords();
	//return;
	fs.loadAllRecords();
	var count = fs.getSize();
	for (var i=1;i<=count;i++){
		var rec = fs.getRecord(i);
		if (rec.tenant_uuid == null){
			rec.tenant_uuid = globals.session.tenant_uuid;
			var error = databaseManager.saveData(rec);
		}
	}
	application.output('saved '+error);
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"14C4356A-ACE9-4C1C-BB23-03CE563F6DDF"}
 */
function onActionHide(event) {
	globals.stopWindowTrackEvent(event);
	return true;
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7B53EDF-884A-4CFA-9DCB-374EF0C391F0"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		entryOrder = ['jobEntry','numSeq','numLot','numPart','numDraw'];
		/**scopes.fs.importData.drawings.push('');
		scopes.fs.importData.sequences.push('');
		scopes.fs.importData.lots.push('');
		scopes.fs.importData.mainMarks.push('');*/
	}
	controller.enabled = true;
	//globals.setUserFormPermissions(event);
	onActionClearForm(event);
	elements.btn_GetKiss.enabled = false;
	elements.btn_Close.enabled = true;
	elements.btn_Clear.enabled = true;
	elements.jobEntry.requestFocus(false);
	currentAssocName = globals.session.association;
	application.setValueListItems('stsvl_jobs_association',scopes.jobs.getJobsList());
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B95F03CA-A597-4C63-8EC9-0E18A60BA335"}
 */
function clearBadEntry(event){
	vJobNumber = '';
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8260D6B4-29FB-404D-AEBB-2185C324A2C7"}
 */
function toggleFormInput(event){
	var allowed = elements.btn_Close.enabled;
	elements.btn_Close.enabled = !allowed;
	elements.jobEntry.enabled = !allowed;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E465F2A2-85A9-43BC-9714-18D8F24E2080"}
 */
function onActionClearForm(event) {
	vJobNumber = '';
	vSeqNumber = '';
	vPartNumber = '';
	vDrawingNumber = '';
	vLotNumber = '';
	vLotAll = 1;
	vSeqAll = 1;
	elements.btn_GetKiss.enabled = false;
	elements.jobEntry.requestFocus();
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
 * @properties={typeid:24,uuid:"915DCF57-B15D-4A23-9FA6-4B011EB1EEF5"}
 */
function onDataChangeCheck(oldValue, newValue, event) {
	var elName = event.getElementName();
	if (elName == 'numSeqAll'){
		if (newValue == 1){vSeqNumber = ''}
	}
	if (elName == 'numLotAll'){
		if (newValue == 1){vLotNumber = ''}
	}
	return true
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
 * @properties={typeid:24,uuid:"EFF99839-30A0-4600-9CD0-BF4DAE3A6177"}
 */
function onDataChangeLotSeq(oldValue, newValue, event) {
	var elName = event.getElementName();
	if (elName == 'numSeq'){
		vSeqAll = (newValue == '') ? 1 : 0;
	}
	if (elName == 'numLot'){
		vLotAll = (newValue == '') ? 1 : 0;
	}
	return true
}
/**
 * @param jobId
 *
 * @properties={typeid:24,uuid:"8BC9501F-B6DC-4472-A474-31AB196BBEC3"}
 */
function removeJobImportData(jobNumber){
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.where.add(q.columns.job_number.eq(jobNumber));
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.result.add(q.columns.import_table_id);
	var Q = databaseManager.getFoundSet(q);
	if (application.isInDeveloper()){application.output('size of import table records '+Q.getSize())}
	//application.output('size of import table records '+Q.getSize())
	var tableIds = [];
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var rec = null; var idx = 1;
	while (rec = Q.getRecord(idx++)){
		tableIds.push(rec.import_table_id);
	}
	tableIds.sort();
	/** @type {QBSelect<db:/stsservoy/import_guids>} */
	var s = databaseManager.createSelect('db:/stsservoy/import_guids');
	s.where.add(s.columns.import_table_id.isin(tableIds));
	s.result.add(s.columns.import_guid_uuid);
	var S = databaseManager.getFoundSet(s);
	if (application.isInDeveloper()){application.output('size of import guid records '+S.getSize())}
	//application.output('size of import guid records '+S.getSize())
	success = S.deleteAllRecords();
	if (application.isInDeveloper()){application.output('Delete job GUIDs: '+success)}
	var success = Q.deleteAllRecords();
	if (application.isInDeveloper()){application.output('Delete job import Records: '+success)}
	null;
	
}
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3F9F8BA4-461C-4292-9413-1E7E3A99396F"}
 */
function onHide(event) {
	globals.stopWindowTrackEvent(event);
	return _super.onHide(event)
}
