/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"28451C0F-8383-4EA6-B55C-96E636E34410"}
 */
var vJobNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CF2E5FB1-C72D-4C8A-A3D9-7DA4DF535281"}
 */
var vCustomerNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"64EE0A47-04FD-4DF3-918E-4412A2F1C0C0"}
 */
var vBarCodeForm = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9857D1A0-F79F-4702-8648-85E1017A06B2"}
 */
var vJobTitle = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"46370C60-2E98-429E-A118-4C2AF0889C71"}
 */
var vJobStructure = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8006E83D-EFA5-4B7D-9E0C-E34117291D15"}
 */
var vJobLocation = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4187294C-810A-4FB9-A4F9-D05435A2E097"}
 */
var vJobCareOf = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E519A610-3EAF-4753-9726-EA0F4D70E0A1"}
 */
var vCustomerPO = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"50D86A23-2E24-4E01-98EA-EEB3892CE33F"}
 */
var vPORelease = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"85A8F282-615A-46B8-9946-42C77B2A2F87"}
 */
var vJobPlant = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E0DDEE4-AD27-46B8-952B-1D5E06A9777A"}
 */
var vShipTo = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E9F145A8-3705-4DF9-8A01-A995F430C35A",variableType:8}
 */
var vProjectHours = 0.0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EEEE87FE-0F43-4870-B083-E075540EE449"}
 */
var vProjectYear = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B8F33D54-F195-4B3F-9F41-DF45995028B4",variableType:8}
 */
var vJobEfficiency = 0.0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7EA71228-4DFD-42A2-B9E0-2C1079A87103"}
 */
var vFTProjectID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69F3C099-3AF2-4149-B48B-3D713FB0DEA5"}
 */
var vCustomerName = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2FE5D2F5-24CB-44A4-9256-A79D55FC9E9C",variableType:8}
 */
var vJobWeight = 0.0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"43250644-A6B1-4829-BD10-B0C235F2C990"}
 */
var vLabelFormat = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"56E097B0-85E1-46D9-B1E3-1A83F099AC07"}
 */
var vRFInterface = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5E966D63-5167-4FE2-BA4F-EE9D464C426B",variableType:4}
 */
var vMetricJob = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6546F713-0409-4297-9036-732389C5FA9C"}
 */
var vCustomerId = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"86D79647-C706-413B-AEA5-46A11DDAD6AE"}
 */
var vJobWeightUnits = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"598B5533-19F3-458A-8401-A69FB44F3553"}
 */
var vBar1 = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1DADCCFF-5CBE-4267-B031-B8F33CA2F2FA"}
 */
var vBar2 = "";
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8EBEE04A-FA43-4EEC-877D-FA9A69BD3182"}
 * @AllowToRunInFind
 */
function onDataChangeCustomerNumber(oldValue, newValue, event) {
	if (!newValue){
		globals.addCustomer(event);
		//return false;
	}
	/** @type {QBSelect<db:/stsservoy/customers>} */
	var c = databaseManager.createSelect('db:/stsservoy/customers');
	c.result.add(c.columns.customer_id);
	c.where.add(c.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	c.where.add(c.columns.delete_flag.isNull);
	c.where.add(c.columns.customer_id.eq(newValue));
	/** @type {JSFoundSet<db:/stsservoy/customers>} */
	var C = databaseManager.getFoundSet(c);
	if (C.getSize() == 0){
		globals.addCustomer(event);
		return false;
	}
	// ** @type {JSRecord<db:/stsservoy/customers>} * /
	//var rec = C.getRecord(1);
	barcode_form = scopes.jobs.getDefaultCustomerIdForBc();//addresses ticket #87, ticket #79
	if (1==1){return true}
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.customer_id.eq(newValue));
	j.where.add(j.columns.job_id.eq(job_id));
	var J = databaseManager.getFoundSet(j);
	if (J.getSize() > 0 && job_number != null){
		/**
		 * count >= 1 and customer_id already filled, show record, delete if newRecord
		 * count == 1 and customer_id empty, return true and set focus to customer
		 * search will only return 1 or 0
		 */
		var rec = J.getRecord(1);
		onActionCancelEdit(event);
		var idx = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(idx);
	}
	return true;
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
 * @properties={typeid:24,uuid:"177EE23C-05E3-4131-A6C1-586D259F1790"}
 * @AllowToRunInFind
 */
function onDataChangeJobNum(oldValue, newValue, event) {
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.job_number.eq(newValue));
	var J = databaseManager.getFoundSet(j);
	if (J.getSize() > 0){
		var rec = J.getRecord(1);
		onActionCancelEdit(event);
		var idx = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(idx);
	}
	
	globals.onFocusTabsSTS(event);
	return true;
}
/**
 *
 *
 * @properties={typeid:24,uuid:"C310F5FA-BE1B-4643-AE5C-993106D876F2"}
 */
function loadResetForm(){
	//fs.getSelectedIndex();
	vJobNumber= "";
	vCustomerNumber = "";
	vCustomerName = "";
	vShipTo = null;
	vCustomerPO = "";
	vJobCareOf = "";
	vJobEfficiency = 0;
	vProjectHours = 0.0;
	vJobLocation = "";
	vJobPlant = "";
	vJobStructure = "";
	vJobTitle = "";
	vJobWeight = 0.0;
	vLabelFormat = "";
	vMetricJob = 0; //false
	vPORelease = "";
	vProjectYear = null;
	vRFInterface = '<None>';
	vFTProjectID = null;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E174CD2-DDD4-4E7C-9992-395387697875"}
 */
function onActionHide(event) {

}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ADDF0C91-C9B7-4BA9-BE2E-B0586A227A18"}
 */
function onActionRecalcWeight(event) {
	var weightColumn = (metric_job) ? "item_weight" : "item_weight_lbs";
	var queryWeight =  'select sum('+weightColumn+'*item_quantity) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '
	+ ' and sheets.delete_flag IS NULL'
	+ ' and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL and piecemarks.piecemark = piecemarks.parent_piecemark '
	+ ' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL'
	var args = [];
	args.push(job_id.toString());
	args.push(globals.session.tenant_uuid);
	job_weight = databaseManager.getDataSetByQuery('stsservoy', queryWeight, args , -1)[0][0];
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D3694EFE-4004-4583-A215-4C9582FF0ED8"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		elements.ft_projectid.enabled = (scopes.prefs.lFabtrolInstalled == 1);
		elements.third_party_job_num.enabled = (scopes.prefs.lFabsuiteInstalled==1||scopes.prefs.lFabtrolInstalled==1||scopes.prefs.lRomacInstalled==1);
		vJobWeightUnits = (metric_job==1) ? 'kgs' : 'lbs';
		elements.job_number.requestFocus();
		globals.getCustomerList();
	}
	globals.setUserFormPermissions(event);
	onActionHeats(event);
	foundset.loadAllRecords();
	var path = scopes.prefs.reportpath;
	var labelList = [];
	if (scopes.prefs.labelProgram == 'barTender'){
		var suffix = '.qdf';
	} else {
		suffix = '.btw';
	}
	var btwFiles = plugins.file.getFolderContents(path,suffix);
	labelList.push('<NONE>');
	for (var index = 0;index < btwFiles.length;index++){
		labelList.push(btwFiles[index].getName());
	}
	application.setValueListItems('stsvl_label_formats',labelList);
	return _super.onShow(firstShow, event)
}
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} buttonTextSrc
 *
 * @properties={typeid:24,uuid:"96D0E7FA-8490-4C31-95D5-2F1E3514219D"}
 */
function onRecordSelection(event, buttonTextSrc) {
	elements.btn_Delete.visible = elements.btn_New.visible && globals.checkJobEmpty(job_id);
	//vCustomerNumber = (st2_jobs_to_customers) ? sts_job_to_customer.customer_number : "";
	//application.setValueListItems('stsvlt_customers',[]);
	vCustomerId = customer_id;
	onActionHeats(event);
	null;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C12D307-E1E3-4FF5-8808-C2C2A01DC5F6"}
 */
function onActionSaveEdit(event) {
	globals.lookupItem2 = vCustomerNumber;
	label_format = vLabelFormat;
	metric_job = vMetricJob;
	rf_interface = vRFInterface;
	ship_to = vShipTo;
	customer_id = vCustomerId;
	//vCustomerNumber = null;
	return _super.onActionSaveEdit(event)
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1558C518-4112-451B-A5DC-FCBC1D4D1798"}
 */
function onActionHeats(event) {
	elements.validate_fittings.enabled = (validate_heats == 1);
	elements.btn_Heats.enabled = false;
	elements.validate_pipes.enabled = (validate_heats == 1);
}
/**
 * @properties={typeid:24,uuid:"EC7F4AA2-C87F-4391-B698-9E3BE0B7A1D4"}
 */
function loadFoundset(){
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	var J = databaseManager.getFoundSet(j);
	
	foundset.loadRecords(J);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6F821C2-BAA0-4C87-814E-8F84D3AAE8D7"}
 */
function onActionEdit(event) {
	elements.job_number.requestFocus();
	return _super.onActionEdit(event)
}
