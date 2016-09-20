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
	job.associationId = scopes.globals.session.associationId;application.output('assoc'+ globals.secCurrentAssociationID);
	scopes.jobs.jobName = jobNumber;
	foundset.loadAllRecords();
	scopes.jobs.custNums = [];/** @type {Array} */ var custNums = scopes.jobs.custNums;
	scopes.jobs.jobNums = []; /** @type {Array} */ var jobNums = scopes.jobs.jobNums;
	scopes.jobs.custIds = []; /** @type {Array} */ var custIds = scopes.jobs.custIds;
	scopes.jobs.jobIds = []; /** @type {Array} */ var jobIds = scopes.jobs.jobIds;
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var jobsFS = databaseManager.getFoundSet('stsservoy','jobs');
	if (jobsFS.find()){
		jobsFS.job_number = jobNumber;
		var count = jobsFS.search();
		if (count > 0){
			if (count > 1){
				application.output('>>> jobs '+count);
				for (var index2 = 1;index2 <= count;index2++){
					var rec = jobsFS.getRecord(index2);
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
			rec = jobsFS.getRecord(1);
			job.customerId = rec.customer_id;
			var custRec = rec.sts_job_to_customer2;

			if (!custRec.barcode_prefix || 
				// might not need to check this !custRec.barcode_fixed_length || 
				!custRec.barcode_include_prefix || 
				!custRec.barcode_job_length ||
				custRec.barcode_prefix.length != 2){
				var errMsg = i18n.getI18NMessage('sts.txt.barcode.incomplete.msg').replace('XXX',rec.customer_number);
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
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B3F01716-FF60-4B1E-94C0-C57744ED6B31"}
 */
function getKissFile(event){
	scopes.jobs.appendQuantityToIdfile = null; //import append data
	var success = history.removeForm('kiss_barcode_request');
	if (success){
		var success2 = solutionModel.removeForm('kiss_barcode_request');
		if (!success2){globals.loggerDev(this,'Remove form history fail.');}
	}
	history.removeForm('kiss_excludes_lst');
	solutionModel.removeForm('kiss_excludes_lst');
	//var path = "C:\\Users\\Alienware\\Documents\\STS p2programs\\KISS\\";
	var path = scopes.prefs.importpath;
	plugins.file.showFileOpenDialog(0, path, false, fileReceipt);
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFAC0BFC-86EE-4035-8A29-E52E00E956B5"}
 */
var texts="";
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
			rec.tenant_uuid = globals.secCurrentTenantID;
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
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C350E283-FBB6-4F29-B69D-FDAC625D3A2F"}
 * @AllowToRunInFind
 */
function xxxunusedonDataChangeCustomer(oldValue, newValue, event) {
	/**
	var index = custNums.indexOf(newValue);
	var pkJobs = scopes.jobs.customerIDs[index];
	for (index = 1;index < foundset.getSize();index++){
		var rec = foundset.getRecord(index);
		if (rec.customer_id == pkJobs){
			break
		}
	}
	var custRec = rec.sts_job_to_customer2;

	if (!custRec.barcode_prefix || 
			!custRec.barcode_fixed_length || 
			!custRec.barcode_include_prefix || 
			!custRec.barcode_job_length ||
			custRec.barcode_prefix.length != 2){
		plugins.dialogs.showErrorDialog('STS ERROR: Customer barcode incomplete.','Customer '+rec.customer_number+' barcode is incomplete.  Please review the barcode setup using the \'Edit Customer Information\' button under the Edit/Add Tab.');
		return;
	}
	var win = application.createWindow("KISS Import", JSWindow.DIALOG);
	win.title = "KISS Import";
	win.show(forms.kiss_option_import);
	return true;*/
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
	elements.chooseCust.visible = false;
	elements.chooseCustSelect.visible = false;
	selectedCust = "";
}
