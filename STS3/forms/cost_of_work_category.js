/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B717DE5-0A86-4219-AED1-F11805ADAD96"}
 */
var vCustomerName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"136859CE-2A9E-406E-A377-D715DB764409"}
 */
var vCustomerNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"04498631-DF47-4FBD-A86E-F6F5FBDFF599"}
 */
var vCustomerID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"081EE771-77E6-444F-804C-6C806BE2A96F"}
 */
var vJobNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"846C09F1-2EE7-4D0B-84E3-AF23E993A9E2"}
 */
var vPONumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F77CA9ED-99E1-4BE2-A520-28FE16DF62D1"}
 */
var vCowDescrip = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98BFE968-2302-4B62-973B-DF245C6D12DE"}
 */
var vCowCode = "";
/**
 * @type {Boolean}
 * Preferences echo for UOM Codes Customer Specific.
 * @properties={typeid:35,uuid:"8E7C4C83-F22D-476F-B1BD-080FBE8E8043",variableType:-4}
 */
var vUomCodeSpecific = false;
/**
 * @properties={typeid:35,uuid:"933181CB-9842-4323-B70B-297543F85D83",variableType:-4}
 */
var vJobMetric = true;
/**
 *
 * @param edit
 *
 * @properties={typeid:24,uuid:"54C9E1C5-FC87-4E26-95E3-49E078523537"}
 */
function editStatus(edit){
	var empty = (foundset.getSize() == 0);
	//controller.readOnly = !edit;
	elements.btn_New.visible = !edit;
	elements.btn_Cancel.visible = edit;
	elements.btn_Delete.visible = (!empty && !edit);
	elements.btn_Edit.visible = (!empty && !edit);
	elements.btn_Save.visible = edit;
	elements.tabless.enabled = !edit;
	elements.jobNumberEntry.readOnly = false;
	elements.jobNumberEntry.enabled = true;
	elements.acls_code.editable = edit;
	elements.acls_id.editable = edit;
	elements.acls_subcode.editable = edit;
	elements.uom_value.editable = edit;
	elements.cow_code.enabled = edit;
	elements.cust_cow_code.editable = edit;
}
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8B181E14-8550-4CA1-B338-642F73FA91C4"}
 * @AllowToRunInFind
 */
function onDataChangeJob(oldValue, newValue, event) {
	// Change to QBSelect from Servoy find 20161121
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var fs = databaseManager.createSelect('db:/stsservoy/jobs');
	fs.result.add(fs.columns.job_id);
	fs.where.add(fs.columns.job_number.eq(vJobNumber));
	fs.where.add(fs.columns.delete_flag.isNull);
	fs.where.add(fs.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var FS = databaseManager.getFoundSet(fs);
	foundset.removeFoundSetFilterParam('job_cowxref');
	if (FS.getSize() > 0){
		vCustomerName = FS.sts_job_to_customer.name;
		vCustomerNumber = FS.sts_job_to_customer.customer_number;
		vPONumber = FS.customer_po;
		forms.cost_of_work.customerName = vCustomerName;
		forms.cost_of_work.customerNumber = vCustomerNumber;
		forms.cost_of_work.jobNumber = newValue;
		forms.cost_of_work.jobID = FS.job_id;
		forms.cost_of_work.customerID = FS.customer_id;
		vJobMetric = (FS.metric_job == 1);
		scopes.globals.vJobIDXref = FS.job_id;
		foundset.addFoundSetFilterParam('job_id','=',globals.vJobIDXref,'job_cowxref');
		foundset.loadAllRecords();
		if (foundset.getSize() == 0){
			vCowCode = '';
			vCowDescrip = '';
		}
		var maxTabs = forms.cost_of_work.elements.tabless.getMaxTabIndex();
		for (var index = 1;index <= maxTabs;index++){
			forms.cost_of_work.elements.tabless.setTabEnabledAt(index,true);
		}
		forms.cost_of_work.jobChangeE = true;
		forms.cost_of_work.jobchangeM = true;
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
 * @properties={typeid:24,uuid:"32860792-C16C-463F-9D12-7BF531D473F6"}
 */
function onDataChangeCow(oldValue, newValue, event) {
	vCowDescrip = forms.cost_of_work.cowCodes[newValue+"Descrip"];
	cowcode_id = forms.cost_of_work.cowCodes[newValue];
	if (!vUomCodeSpecific){
		uom_dollar = forms.cost_of_work.cowCodes[newValue+'Value'];
	}
	return true
}
/**
 *
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"A3FB6FA6-0AA1-4B64-B700-7EFDE7D15419"}
 */
function onDataChangeCustCow(oldValue,newValue,event){
	var selIndex = controller.getSelectedIndex();
	if (newValue == "") {return false}
	var count = foundset.getSize();	
	for (var index = 1; index <= count;index++){
		if (selIndex == index){continue}
		var fs = foundset.getRecord(index);
		if (fs.cust_cow_code == newValue){
			cust_cow_code = oldValue;
			//fs.cust_cow_code = oldValue;
			if (oldValue == null){
				stopEditing(event);
				controller.setSelectedIndex(index-1);
			} else {
				controller.setSelectedIndex(index);
			}
			break;
		}
	}
	return true;
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9BD5578A-9AB2-456B-8A5B-FF9A0A563129"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	//clearForm();
	if (firstShow){
		globals.vJobIDXref = "";//clear jobID for this screen
		vJobNumber = "";vCustomerNumber = "";vCustomerName = "";
		foundset.removeFoundSetFilterParam('job_cowxref');
		foundset.addFoundSetFilterParam('job_id','=','','job_cowxref');
	}
	var cows = [];
	/** @type {QBSelect<db:/stsservoy/cowcodes>} */
	var fs = databaseManager.createSelect('db:/stsservoy/cowcodes');
	fs.result.add(fs.columns.cowcode_id);
	fs.where.add(fs.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	fs.where.add(fs.columns.delete_flag.isNull);
	var CW = databaseManager.getFoundSet(fs);
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/cowcodes>} */
	var rec = null;
	var cowsDescrip = [];
	while (rec = CW.getRecord(idx++)){
		cows.push(rec.cow_code);
		forms.cost_of_work.cowCodes[rec.cow_code] = rec.cowcode_id;
		forms.cost_of_work.cowCodes[rec.cow_code+"Descrip"] = rec.cow_description;
		forms.cost_of_work.cowCodes[rec.cow_code+"Value"] = rec.uom_dollar;
		
	}
	cows.sort();
	var cowsDescrip = [];
	for (var idx = 0; idx < cows.length;idx++){
		var descrip = forms.cost_of_work.cowCodes[cows[idx]+"Descrip"];
		cowsDescrip.push(cows[idx]+' - '+descrip);
	}
	application.setValueListItems('stsvl_cow_codes_list',cowsDescrip,cows);
	vUomCodeSpecific = (scopes.prefs.lCowCustSpc == 1);
	elements.uomCodesSpecific.visible = vUomCodeSpecific;
	elements.uom_value.editable = vUomCodeSpecific;
	scopes.jobs.tablePrefsLoad('cost_of_work_category');
	editStatus(false);
	return _super.onShow(firstShow, event)
}
/**
 * @properties={typeid:24,uuid:"B1A92D5D-6116-4F22-A3BE-9308CF2BE7EA"}
 */
function clearForm(){
	//cust_cow_code = "";
	//uom_dollar = 0;
	forms.cost_of_work.elements.tabless.setTabEnabledAt(3,false);
	forms.cost_of_work.elements.tabless.setTabEnabledAt(4,false);
	forms.cost_of_work.elements.tabless.tabIndex = 1;
	foundset.clear();
	vCowCode = '';
	vCowDescrip = '';
	vJobNumber = '';
	vPONumber = '';
	vCustomerID = '';
	vCustomerName = '';
	vCustomerNumber = '';
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"2D287199-D61E-4046-B016-9D2428958251"}
 */
function deleteRecord(event, index) {
	editStatus(false);
	//clearForm();
	return _super.deleteRecord(event, index)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86244384-6AF2-4275-9F55-95D9A31E13CB"}
 */
function startEditing(event) {
	editStatus(true);
	return _super.startEditing(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"82D5107C-68C1-42AB-AA87-9E232A425AFD"}
 */
function newRecord(event, location, changeSelection) {
	var newRec = _super.newRecord(event, location, changeSelection);
	//clearForm();
	editStatus(true);
	return newRec;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {JSRecord} record
 * @param {Boolean} stopEdit
 *
 * @properties={typeid:24,uuid:"2B35638B-C278-4114-AF60-3917DF462343"}
 */
function saveEdits(event, record, stopEdit) {
	job_id = scopes.globals.vJobIDXref;
	edit_date = new Date();
	editStatus(false);
	return _super.saveEdits(event, record, stopEdit)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47808596-9F27-4EB1-A28D-FFADDC70C9B6"}
 */
function stopEditing(event) {
	editStatus(false);
	return _super.stopEditing(event)
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F19003A-1F49-4784-91C4-FE816A2D552C"}
 */
function onRecordSelection(event) {
	if (cowcode_id && vJobNumber) {
		//vCowCode = sts_cowxref_cowcode.cow_code;
		vCowDescrip = sts_cowxref_cowcode.cow_description;
		vPONumber = sts_cowxref_jobs.customer_po;
		vJobNumber = sts_cowxref_jobs.job_number;
		vCustomerName = sts_cowxref_jobs.sts_job_to_customer.name;
		vCustomerNumber = sts_cowxref_jobs.sts_job_to_customer.customer_number;
	}
	if (foundset.getSize() == 0){
		elements.btn_Delete.visible = false;
		elements.btn_Edit.visible = false;
	}
	return _super.onRecordSelection(event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"33028899-BF3E-41EC-9307-0453911B60D4"}
 */
function onHide(event) {
	//foundset.removeFoundSetFilterParam('job_cowxref');

	return _super.onHide(event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"CEEDD68C-E1A0-47D2-B8B1-74ABBF19B8AA"}
 */
function onActionClose(event){
	//clearForm();
	databaseManager.revertEditedRecords(foundset);
}