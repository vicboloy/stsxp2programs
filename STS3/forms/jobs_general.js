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
 * @properties={typeid:24,uuid:"04253830-4047-45C7-A36D-3AC5571821AB"}
 */
function additionalActionAddFunctions(){
	loadResetForm()
}
/**
 * @properties={typeid:24,uuid:"9D0A98CD-B5D1-42C3-983C-CA2E41B490BB"}
 */
function additionalSaveFunctions(){
	//var index = foundset.newRecord();
	globals.lookupItem = vJobNumber;
	var fsJobN = sts_check_jobnum;
	if (fsJobN.getSize() == 0){
		fsJobN.newRecord();
	}
	saveRecordFromForm(fsJobN);
	
	var fs = sts_job_to_loads;
	if (fs == null){
		/** @type {JSFoundSet<db:/stsservoy/loads>} */
		fs = sts_job_to_loads.newRecord();
	}
	if (fs.getSize() == 0){
		fs.newRecord();
		fs.job_id = job_id;
		//always have first load record as empty record
		fs.load_number = "";
	}
	databaseManager.saveData(fsJobN);
	databaseManager.saveData(fs);
}
/**
 * @properties={typeid:24,uuid:"5E618682-B6B8-4203-93BC-918C9D00FDD2"}
 */
function otherSelectionFunctions(){
	//var record = foundset.getSelectedIndex();
	loadRecordIntoForm()
/**	vJobNumber= job_number;
	globals.selectedCustomerID = customer_id;
	vCustomerNumber = sts_customeruuid_to_field.customer_number;
	vCustomerName = sts_customeruuid_to_field.name;
	//if (vShipTo != ""){
		vShipTo = ship_to;
	//}
	vCustomerPO = customer_po;
	vJobCareOf = job_care_of;
	vJobEfficiency = job_efficiency;
	vProjectHours = job_hours;
	vJobLocation = job_location;
	vJobPlant = job_plant;
	vJobStructure = job_structure;
	vJobTitle = job_title;
	vJobWeight = job_weight;
	vLabelFormat = label_format;
	vMetricJob = metric_job;
	vPORelease = po_release;
	vProjectYear = project_year;
	vRFInterface = rf_interface;
*/
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
 * @private
 *
 * @properties={typeid:24,uuid:"8EBEE04A-FA43-4EEC-877D-FA9A69BD3182"}
 */
function onDataChangeCustomerNumber(oldValue, newValue, event) {
	globals.lookupItem = newValue;
	var fs = sts_customernum_to_name;
	if (fs.getSize() >0){
		globals.lookupItem2 = newValue;
		vCustomerName = sts_check_custnum.name;
		return true;
	} else {
		return false;
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
 * @properties={typeid:24,uuid:"177EE23C-05E3-4131-A6C1-586D259F1790"}
 */
function onDataChangeJobNum(oldValue, newValue, event) {
	globals.lookupItem = newValue;
	var fs = sts_check_jobnum;
	if (fs.getSize() > 0){
		var rec = fs.getRecord(1);
		loadRecordIntoForm(rec);
	}
	return true
}
/**
 * @properties={typeid:24,uuid:"5D580134-54DE-4F13-8876-35934F93A382"}
 */
function addOnActionDelete(){
	globals.lookupItem = job_id;
	var fs = sts_check_loadnum;
	if (fs.getSize() == 1){
		fs.deleteRecord();
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param fs
 *
 * @properties={typeid:24,uuid:"A523191B-CF6C-4E0B-AB3F-F52161CDEB04"}
 */
function loadRecordIntoForm(rec){
	vJobNumber= job_number;
	globals.selectedCustomerID = customer_id;
	vCustomerNumber = sts_customeruuid_to_field.customer_number;
	vCustomerName = sts_customeruuid_to_field.name;
	if (ship_to != "" && ship_to != null){
		vShipTo = ship_to;
	} else {
		vShipTo = "";
	}
	vCustomerPO = customer_po;
	vJobCareOf = job_care_of;
	vJobEfficiency = job_efficiency;
	vProjectHours = job_hours;
	vJobLocation = job_location;
	vJobPlant = job_plant;
	vJobStructure = job_structure;
	vJobTitle = job_title;
	vJobWeight = job_weight;
	vLabelFormat = label_format;
	vMetricJob = metric_job;
	vPORelease = po_release;
	vProjectYear = project_year;
	vRFInterface = rf_interface;
	vFTProjectID = ft_projectid;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param fs
 *
 * @properties={typeid:24,uuid:"1FB02E0B-65E9-4B9C-A3A9-0C31834C2101"}
 */
function saveRecordFromForm(){
	var index = controller.getSelectedIndex();
	var rec = foundset.getRecord(index);
	job_number = vJobNumber;
	globals.lookupItem2 = vCustomerNumber;
	customer_id = sts_check_custnum.customer_id;
	customer_po = vCustomerPO;
	job_care_of =  vJobCareOf;
	job_efficiency = vJobEfficiency;
	job_hours = vProjectHours;
	job_location = vJobLocation;
	job_plant = vJobPlant;
	job_structure = vJobStructure;
	job_title = vJobTitle;
	job_weight = vJobWeight;
	label_format = vLabelFormat;
	metric_job = vMetricJob;
	po_release = vPORelease;
	project_year = vProjectYear;
	rf_interface = vRFInterface;
	ship_to = vShipTo;
	ft_projectid = vFTProjectID;
	tenant_uuid = globals.secCurrentTenantID;
	databaseManager.saveData(rec);
}
/**
 * TODO generated, please specify type and doc for the params
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
	vRFInterface = "<None>";
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
	scopes.prefs.mainWindowFront();
	scopes.prefs.stopWindowTrack();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"808AAD99-A247-420C-99BA-E069124EF97D"}
 */
function onRefresh(event) {
	application.updateUI();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ADDF0C91-C9B7-4BA9-BE2E-B0586A227A18"}
 */
function onActionRecalcWeight(event) {
	var queryWeight =  'select sum(item_weight*item_quantity) from piecemarks inner join sheets on piecemarks.sheet_id = sheets.sheet_id '
	+ ' and sheets.delete_flag IS NULL'
	+ ' and sheets.job_id = ? and sheets.tenant_uuid = ? and piecemarks.delete_flag IS NULL and piecemarks.piecemark = piecemarks.parent_piecemark '
	+ ' inner join idfiles on idfiles.piecemark_id = piecemarks.piecemark_id and idfiles.delete_flag IS NULL'
	var args = [];
	args.push(job_id.toString());
	args.push(globals.secCurrentTenantID);
	vJobWeight = databaseManager.getDataSetByQuery('stsservoy', queryWeight, args , -1)[0][0];
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2B75CF3-020F-4AD9-90DF-B86C9DED6120"}
 */
function onActionSave(event) {
	// TODO Auto-generated method stub
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2ED04D21-3603-416A-BD06-3571A9A123DD"}
 */
function onLoad(event) {
	foundset = foundset.duplicateFoundSet();
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D63519B3-ACEA-4BC4-B350-44B2F6DC9273"}
 */
function onActionClose(event) {
	scopes.prefs.stopWindowTrack();
	scopes.prefs.mainWindowFront();
}
