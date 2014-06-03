/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7072EF26-CEAA-4164-B5CE-73F6C0676DA7"}
 */
var vCustNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3DE05ECE-6929-46FD-8910-AACA991D08D5"}
 */
var vCustomerName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4974EA09-E924-4A8C-86F4-6619DE02F562"}
 */
var vCustomerID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFEE1A6D-5B49-4EDE-A7B7-258FFD9AEA37"}
 */
var vJobNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"975112F5-9E7D-4868-B8C1-654EFEFF5667"}
 */
var vJobName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE4E278C-EBE5-479F-A005-ED63F5FA4595"}
 */
var vJobID = "";
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B7F8C7A-B000-4AA8-85AB-05A6519B73E3"}
 */
function onShow(firstShow, event) {
	scopes.jobs.getJobsList();
	scopes.jobs.getCustomersList();
	application.setValueListItems('stsvl_jobs_by_cust',scopes.jobs.jobsArray);
	return _super.onShow(firstShow, event)
}
/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"105C8AB5-9447-48F1-ABFB-5BB900A1338C"}
 */
function onDataChangeCustomerNumber(oldValue, newValue, event) {
	globals.lookupItem = newValue;
	var fs = sts_customernum_to_name;
	var status = true;
	if (fs.getSize() >0){
		globals.lookupItem2 = newValue;
		vCustomerName = sts_check_custnum.name;
		vCustomerID = sts_check_custnum.customer_id;
		var fs2 = fs.sts_customers_to_jobs;
		fs2.sort('job_number asc');
		if (fs2.getSize() >0){
			scopes.jobs.jobsArray = [];
			for (var index = 1;index < fs2.getSize();index++){
				var rec = fs2.getRecord(index);
				scopes.jobs.jobsArray.push(rec.job_number);
			}
		} else {
			vJobNum = "";
			vJobName = "No Jobs For This Customer";
			scopes.jobs.jobUnderCustomer = "";
		}
		application.setValueListItems('stsvl_jobs_by_cust',scopes.jobs.jobsArray);
		status = true;
	} else {
		status = false;
	}
	browseInfoEnable();
	return status;	
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
 * @properties={typeid:24,uuid:"24D1CA61-7322-4694-9FDD-A6AFFC7B66CD"}
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	globals.lookupItem = newValue;
	var fs = sts_jobnum_to_name;
	var status = true;
	//controller.
	//controller.loadRecords(fs);
	if (fs.getSize() >0){
		globals.lookupItem2 = newValue;
		var fs2 = sts_check_jobnum;
		vJobName = fs2.job_title;
		vJobID = fs2.job_id;
		scopes.jobs.jobUnderCustomer = fs2.job_id;
		///var fs3;
		///foundset = sts_jobs_to_sheets.sts_sheets_to_piecemarks.sts_piecemarks_to_idfiles;
		///fs3 = databaseManager.convertFoundSet(fs3,sts_idfiles_to_barcodes);
		//var fs3 = databaseManager.convertFoundSet(foundset,'');
		//fs3 = databaseManager.convertFoundSet(fs3,'sts_sheets_to_piecemarks');
		//fs3 = databaseManager.convertFoundSet(fs3,'sts_piecemarks_to_idfiles');
		//fs3 = databaseManager.convertFoundSet(fs3,'sts_piecemarks_to_sequences');
		//var fs3 = databaseManager.convertFoundSet(fs2,sts_jobs_to_sheets);
		//jobVerify(vJobNum)
		status = true;
		//sts_jobid_to_jobs.sts_jobs_to_sheets.sts_sheets_to_piecemarks
	} else {
		status = false;
	}
	browseInfoEnable();
	return status;
}
/**
 * @properties={typeid:24,uuid:"FC21F138-6A2E-4046-9408-12838403079D"}
 */
function browseInfoEnable(){
	if (vCustNum != "" && vJobNum != ""){
		elements.buttBrowse.enabled = true;
		elements.buttInfo.enabled = true;
	} else {
		elements.buttBrowse.enabled = false;
		elements.buttInfo.enabled = false;		
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"55BB4998-16BC-43F7-8A0C-557919A306C7"}
 * @AllowToRunInFind
 */
function onActionClear(event) {
	/**
	for(var index = 0;index < forms.loads_criteria.allvariables.length;index++){
		
		var name = forms.loads_criteria.allvariables[index];
		if (name.search('v') == 0){
			forms.loads_criteria.[index] = "";
		}
	}
	*/
}
