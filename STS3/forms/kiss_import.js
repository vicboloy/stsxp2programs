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
 * @properties={typeid:35,uuid:"AFAC0BFC-86EE-4035-8A29-E52E00E956B5"}
 */
var texts="";
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
	var servoyDir = scopes.prefs.importpath;
	var request = '<FabSuiteXMLRequest>\n\
		<ExportJob>\n\
		<JobNumber>'+vJobNumber+'</JobNumber>\n\
		<FileName>'+servoyDir+'\\KissFileSTSx.kss</FileName>\n\
		<IncludeLotNumbers>1</IncludeLotNumbers>\n\
		</ExportJob>\n\
		</FabSuiteXMLRequest>';

	var success = history.removeForm('kiss_barcode_request');
	if (success){
		var success2 = solutionModel.removeForm('kiss_barcode_request');
		if (!success2){globals.loggerDev(this,'Remove form history fail.');}
	}
	history.removeForm('kiss_excludes_lst');
	solutionModel.removeForm('kiss_excludes_lst');

	scopes.kiss.importFSOnServer(event,request,'');//RECENT
	
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
	globals.mainWindowFront();
	globals.stopWindowTrack();
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
	}
	globals.setUserFormPermissions(event);
	vJobNumber = '';
	elements.btnSelect.enabled = false;
	elements.chooseCust.visible = false;
	elements.chooseCustSelect.visible = false;
	selectedCust = "";
	elements.jobEntry.requestFocus(false);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B95F03CA-A597-4C63-8EC9-0E18A60BA335"}
 */
function clearBadEntry(event){
	vJobNumber = '';
}
