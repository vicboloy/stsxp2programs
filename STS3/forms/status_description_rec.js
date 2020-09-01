/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9A44D0D1-044C-46F0-B691-A46B1C64B1CE"}
 */
var currentStatusCode = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1EA8DBAE-382F-45CA-9929-7F3F90A1FEB0"}
 */
var tempStation = "";
/**
 * @properties={typeid:35,uuid:"E77F0604-D630-4CBA-A33A-D6E9924B56D7",variableType:-4}
 */
var newRec = null;
/**
 * @properties={typeid:35,uuid:"F4AB1712-E739-4C80-906E-9EF0206D59F2",variableType:-4}
 */
var availFabCodes = [];
/**
 * @properties={typeid:35,uuid:"96D16625-329C-4616-BA5E-1D2C806254BC",variableType:-4}
 */
var localStations = [];
/**
 * @properties={typeid:35,uuid:"751F9124-45DD-4C30-B323-1E7C2966A9B3",variableType:-4}
 */
var statusClassCodeList = i18n.getI18NMessage('sts.empty.entry');
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1A3C549-DCF9-4166-A0B1-A6B32A36F6A2"}
 */
var statusClassCodes = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"08848E6F-5047-4405-955A-1E51286BCDA0",variableType:4}
 */
var currProcessNumber = 0;
/**
 * @properties={typeid:35,uuid:"DEAC2EF4-E0A9-4CFE-AF43-C99CC3DDAC73",variableType:-4}
 */
var waitForIt = false;
/**
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"77530877-5492-40E1-ACCD-687758F3DFB6"}
 * @AllowToRunInFind
 */
function onShowStatusDescr(firstShow, event) {
	if (firstShow){
		getFabShops(event);
	}
	globals.setUserFormPermissions(event,false);
	
	//controller.loadRecords(sts_status_code_container);
	globals.initLaborCodes();
	//globals.initStatusCodes();
	var assocs = []; //assocs.push(''); no blank fabshops
	for (var index in globals.aMobAssocs){
		assocs.push(globals.aMobAssocs[index]);
	}
	//application.setValueListItems('stsvl_fab_shop',assocs);
	var promptFS = (scopes.prefs.promptFabShop) ? true : false;
	forms.status_description_rec.elements.fab_shop.enabled = promptFS;
	forms.status_description_rec.elements.fab_shop.transparent = !scopes.prefs.promptFabShop;
	forms.status_description_rec.elements.push_transaction.enabled = promptFS;
	forms.status_description_rec.elements.percent_complete.enabled = (end_for_status != null) && promptFS;
	forms.status_description_rec.elements.fabtrol_labor_code.enabled = promptFS;
	forms.status_description_rec.elements.fabtrol_labor_code.transparent = !promptFS;
	//elements.status_class_code_list.enabled = false;
	elements.status_class_code_select.visible = false;
	//elements.percent_complete.enabled = (end_for_status != i18n.getI18NMessage('sts.btn.default.empty.entry'))
	forms.status_description_rec.controller.readOnly = true;
	if (forms.status_description_table.controller.getMaxRecordIndex() == 0){
		forms.status_description_rec.controller.newRecord();
	}
	globals.newRecordKey = null;
	if (foundset.getSize() == 0){
		forms.status_description_rec.elements.btn_Delete.visible = false;
		forms.status_description_rec.elements.btn_Edit.visible = false;
	}
	getStatusList();
	controller.sort('sts_status_description_to_associations.association_name asc, status_sequence asc');
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} itemDescription item description to delete
 *
 * @properties={typeid:24,uuid:"8A5C87F2-70B2-42A6-8ACB-8109CDFEB443"}
 */
function onActionDelete(event,itemDescription) {
	var status = globals.checkStatusEmpty(status_description_id);
	if (status != ''){
		globals.errorDialogMobile(event,1071,'',status);
		return;
	}
	var itemDescr = i18n.getI18NMessage('sts.txt.remove.x',new Array(status_code));
	globals.doDialog(itemDescr,
			i18n.getI18NMessage('sts.txt.delete')+'?',
			i18n.getI18NMessage('sts.btn.delete'),
			i18n.getI18NMessage('sts.btn.cancel'));
	if (globals.dialogResponse.toLowerCase() == 'yes'){
		delete_flag = 99;
		edit_date = new Date();
		databaseManager.saveData(foundset.getRecord(controller.getSelectedIndex()));
		getStatusList();
	}
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6E7FDEDB-5871-4942-852C-A0F6D2FB7B8B"}
 */
function onActionEdit(event) {
	databaseManager.setAutoSave(false);	
	onEdit(event,true);
}

/**
 * @param event
 * @param editStatus Status of boolean for record edit status changes
 *
 *
 * @properties={typeid:24,uuid:"DC077798-C2BD-4B6A-96B8-E53D4A96D2A5"}
 * @AllowToRunInFind
 */
function onEdit(event,editStatus){
	if (editStatus){
		forms['status_descriptions'].currentSort = foundset.getCurrentSort();
	} else {
		if (forms['status_descriptions'].currentSort){
			controller.sort(forms['status_descriptions'].currentSort);
		}
	}
	if (application.isInDeveloper()){application.output('sort '+forms['status_descriptions'].currentSort)}
	databaseManager.nullColumnValidatorEnabled = false;
	editFlag = editStatus;
	forms.status_description_table.controller.enabled = (!editStatus);
	controller.readOnly = (!editStatus);
	forms.status_description_table.elements.btn_New.visible = !editStatus;
	elements.btn_Edit.visible = !editStatus;
	elements.btn_Delete.visible = !editStatus;
	elements.btn_Save.visible = editStatus;
	elements.btn_Cancel.visible = editStatus;
	
	/** if (status_code && (status_code.search(RegExp('TRANS')) != -1 || status_code.search(RegExp('XFER')) != -1)) {
		elements.req_xfer_status.enabled = true;
	} else {
		elements.req_xfer_status.enabled = false;
	} */
	//get base  i18n for status type and do pattern match for the code
	// do same for both xfer and bundle
	// process codes are already in i18n format for the program
	elements.req_xfer_status.enabled = (status_type == i18n.getI18NMessage('sts.status.fab.transfer'));
	elements.req_bundle_status.enabled = (status_type == i18n.getI18NMessage('sts.status.fab.bundled'));

	elements.push_transaction.enabled = (globals.processCodes.shipping.indexOf(status_type) != -1);
	elements.percent_complete.enabled = (end_for_status != null);
	elements.status_class_code_select.visible = false;
	elements.btn_UpdateCodes.enabled = (emp_number_required == 1 && editStatus);
	if (elements.btn_UpdateCodes.enabled){
		elements.btn_UpdateCodes.text = i18n.getI18NMessage('sts.txt.employee.class.codes.update');
	} else {
		elements.btn_UpdateCodes.text = i18n.getI18NMessage('sts.txt.employee.class.codes');
	}
	
	globals.permissionsCacheHit(event,null);
	
	
	//application.output(elements.push_transaction.enabled+ ' '+status_type+' '+globals.processCodes.shipping.indexOf(status_type))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"18648DD9-901A-4B02-8677-6171519C7084"}
 */
function onActionCancelEdit(event) {
	databaseManager.revertEditedRecords(foundset);
	statusClassCodeList = '';
	onEdit(event,false);
	if (false && globals.newRecordKey != null){
		controller.deleteRecord();
		globals.newRecordKey = null
	}
	//databaseManager.setAutoSave(true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4B659364-1FB2-43AC-9102-A6F96603873D"}
 */
function onActionSaveEdit(event) {
	if (waitForIt){return}
	null;
	if (association_id == "" || association_id == null){
		globals.errorDialogMobile(event,-1,"",null);
		//elements.fab_shop.requestFocus();
		return;
	}
	if (status_code == "" || status_code == null){
		globals.errorDialogMobile(event,401,"",null);
		//elements.status_code.requestFocus();
		return;
	}
	if (status_sequence == "" || status_sequence == null){
		globals.errorDialogMobile(event,-1,"",null);
		//elements.status_sequence.requestFocus();
		return
	}
	onEdit(event,false);
	databaseManager.saveData(foundset);
	getStatusList();
	if (forms['status_descriptions'].currentSort) {
		controller.sort(forms['status_descriptions'].currentSort);
	}
	
	//forms.status_description_lst.foundset.loadRecords();
	//databaseManager.setAutoSave(true);
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
 * @properties={typeid:24,uuid:"26AA575C-C7CE-4B9C-9382-FEA1C4E7C51E"}
 * @AllowToRunInFind
 */
function onDataChangeProcess(oldValue, newValue, event) {
	if (newValue == ""){
		globals.errorDialog(-1);
		verifyStatusInput(event);
		return false;
	}
	verifyStatusInput(event);
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
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DAD21346-803E-43CF-8AFB-3E75E99A31E0"}
 */
function onDataChangeStatus(oldValue, newValue, event) {
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var s = databaseManager.createSelect('db:/stsservoy/status_description');
	s.result.add(s.columns.status_description_id);
	s.where.add(s.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	s.where.add(s.columns.delete_flag.isNull);
	s.where.add(s.columns.status_code.eq(newValue));
	s.where.add(s.columns.association_id.eq(association_id.toString()));
	var S = databaseManager.getFoundSet(s);
	
	if (S.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/status_description>} */
		var rec = S.getRecord(1);
		onActionCancelEdit(event);
		var idx = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(idx);
		currProcessNumber = rec.status_sequence;
	}
	//newValue = newValue.toUpperCase();
	//changeToStation(event);
	verifyStatusInput(event);
	return true;
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"639FAE22-616D-4554-AC77-F7DFB3743FAD"}
 */
function onActionOverwrite(event) {
	globals.currentStatusCodeSequence = status_sequence;
	var windowTitle = 'Overwritable Status Codes by this code...';
	var win = application.createWindow(windowTitle, JSWindow.MODAL_DIALOG);
	/* var xBeg = xOrigin;
	var yBeg = yOrigin;
	var xEnd = xOrigin+xWidth;
	var yEnd = yOrigin+yHeight;
	*/
	win.setInitialBounds(50, 50, 610, 350);

	win.title = windowTitle;
	win.show('status_condition_overwrite');
}


/**
 * @AllowToRunInFind
 * 
 * @param statusCode
 *
 * @properties={typeid:24,uuid:"4C92C8C8-2A80-4BF8-AEAE-F2489440957C"}
 */
function onEntryStatusCode(statusCode) {
	// globals.aStatusTypes
	//var processString = "";
	var upCasedElement = "";
	for (var index = 0;index < globals.aStatusTypes.length;index++){
		upCasedElement = globals.aStatusTypes[index].toUpperCase();
		if (upCasedElement.search(RegExp(statusCode)) != -1){
			return index;
		}
	}
	return -1;
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F8775F1-03C8-45DB-810C-9F440BD4BB71"}
 */
function onActionClose(event) {
	onActionCancelEdit(event);
	globals.stopWindowTrackEvent(event);
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
 * @properties={typeid:24,uuid:"5742B4F2-2E58-4800-9705-E29D59D30D31"}
 * @SuppressWarnings(wrongparameters)
 */
function onDataChangeFabShop(oldValue, newValue, event) {
	if (newValue == "" || newValue == null){
		return false;
	}
	//changeToStation(event);
	getStatusList();
	verifyStatusInput(event);
	if (status_code){
		onDataChangeStatus(status_code,status_code,event);
	}

	return true;
}
/**
 * Change to record matching associaton_id and status_code
 * @properties={typeid:24,uuid:"A93934CF-D740-4B61-8825-8DB5D12BFB25"}
 */
function UNUSEDchangeToStation(event){
	//if (association_id == null && status_code == null){return}
	var thisStationId = association_id+", "+status_code;
	var currIndex = controller.getSelectedIndex();
	if (application.isInDeveloper()){application.output('currently '+currIndex)}
	if (localStations.indexOf(thisStationId) != -1){
		var stationId = association_id;
		var statusCode = status_code;
		if (newRec) {
			controller.deleteRecord();
			newRec = null;
		}
		for (var index = 1;index <= foundset.getSize();index++){
			if (currIndex == index){continue}
			forms.status_description_lst.controller.setSelectedIndex(index);
			//if (!rec == newRec){continue}
			if (application.isInDeveloper()){application.output(association_id +"=="+ stationId +","+ status_code +"=="+ statusCode)}
			if (association_id == stationId && status_code == statusCode){
				databaseManager.revertEditedRecords(foundset);
				break
			}
		}
	}
	return true;
}
/**
 * also get local list of stations
 * @properties={typeid:24,uuid:"6C30CF90-6E4C-4F87-B96A-A7A3BBF6C77A"}
 * @SuppressWarnings(wrongparameters)
 */
function getStatusList(){
	var currentStation = status_description_id;
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.association_id);
	q.result.add(q.columns.status_code);
	q.sort.add(q.columns.status_sequence.asc);
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.delete_flag.isNull);

	var resultQ = databaseManager.getFoundSet(q);
	var statusArray = [];
	var stationArrayId = [];
	var endFors = [];
	var endForStations = [];
	localStations = [];
	/** @type {JSFoundSet<db:/stsservoy/status_description>} */
	var rec = null; var index = 1;
	while (rec = resultQ.getRecord(index++)){
		if (rec.association_id == association_id){
			stationArrayId.push(rec.status_description_id);
			statusArray.push(rec.status_code); // localize selections to current associationId
			if (currProcessNumber >= rec.status_sequence && rec.status_description_id+'' != currentStation+''){ // ticket #147
				endFors.push(rec.status_code);
				endForStations.push(rec.status_description_id.toString());
			}
		}
		var assocId = rec.association_id.toString();
		var statStatus = rec.status_code;
		var stationId = assocId+", "+statStatus;
		localStations.push(stationId);
	}
	endFors.unshift(i18n.getI18NMessage('sts.btn.default.empty.entry'));endForStations.unshift(null);
	application.setValueListItems('stsvl_status_code',statusArray);
	application.setValueListItems('stsvl_station_codes',endFors,endForStations);
	//application.setValueListItems('stsvl_station_codes',statusArray,stationArrayId);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"6D1C9724-711D-4B72-9B8B-CAD9307A4353"}
 */
function UNUSEDgetRecollectStatusDescription(event){
	tempStation = association_id+', '+status_code;
	var eventName = event.getElementName();
	application.output('element name '+eventName);
	switch( eventName ) {
	case "btn_Edit" : {
		
	}
	case "btn_Cancel" : {
		
	}
	case "btn_New" : {
		
	}
	case "btn_Edit" : {
		
	}
	case "btn_Save" : {
		
	}
	case "btn_Close" : {
		
	}
	default:
	}
}
/**
 * @properties={typeid:24,uuid:"A2B9E72A-4FF2-413B-8720-569EAACAA32F"}
 */
function UNUSEDaddOtherChangeFunctions(){
	return true;
}
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} buttonTextSrc
 *
 * @properties={typeid:24,uuid:"DD48A102-53B1-4889-8DD6-2F6D428F60A1"}
 */
function UNUSEDonRecordSelection(event, buttonTextSrc) {
	return _super.onRecordSelection(event, buttonTextSrc)
}
/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"83140BE5-4CA5-4469-B715-8FCCEDF64D94"}
 */
function onFocusGainedFabShop(event) {
	getFabShops(event);
	verifyStatusInput(event);
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"810CC637-B123-4E0B-9137-6CE5639E5EF4"}
 */
function onFocusGainedStatusCode(event) {
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var s = databaseManager.createSelect('db:/stsservoy/status_description');
	s.result.add(s.columns.status_description_id);
	s.where.add(s.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	s.where.add(s.columns.delete_flag.isNull);
	s.where.add(s.columns.association_id.eq(association_id.toString()));
	s.sort.add(s.columns.status_code);
	var S = databaseManager.getFoundSet(s);
	
	var codes = []; var index = 1;
	/** @type {JSRecord<db:/stsservoy/status_description>} */
	var rec = null;
	while (rec = S.getRecord(index++)){
		codes.push(rec.status_code);
	}
	application.setValueListItems('stsvl_status_code',codes);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3EFAF7FF-77BD-47A0-923C-4F35AE12D1C9"}
 */
function getFabShops(event){
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var a = databaseManager.createSelect('db:/stsservoy/associations');
	a.result.add(a.columns.association_uuid);
	a.where.add(a.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	a.where.add(a.columns.delete_flag.isNull);
	a.where.add(a.or
		.add(a.columns.logic_flag.isNull)
		.add(a.columns.logic_flag.eq(0)));
	var A = databaseManager.getFoundSet(a);
	
	var assocID = [];
	var assocName = [];
	//A.loadRecords();
	/** @type {JSRecord<db:/stsservoy/associations>} */
	var rec = null; var index = 1;
	while (rec = A.getRecord(index++)){
		assocID.push(rec.association_uuid.toString());
		assocName.push(rec.association_name);
	}
	application.setValueListItems('stsvl_fab_shops',assocName,assocID);
}
/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2DC3CFF7-3927-4E02-A7E3-0D36E635B5B0"}
 */
function onFocusGainedEndFor(event) {
	currProcessNumber = status_sequence;
	getStatusList();
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA1247B8-AEAD-4214-91CC-40AE41AA8A73"}
 */
function onRecordSelection(event) {
	currProcessNumber = status_sequence;
	getStatusList();	
	elements.push_transaction.enabled = true;//(globals.processCodes.shipping.indexOf(status_type) != -1);
	elements.percent_complete.enabled = (end_for_status != i18n.getI18NMessage('sts.btn.default.empty.entry'));
	if (application.isInDeveloper()){
		application.output(status_type+' index:'+globals.processCodes.shipping.indexOf(status_type)+' push transaction enabled '+elements.push_transaction.enabled);
		application.output('process types:\n'+globals.processCodes.shipping)}
	getClassCodes(event);
	//thirdPartyActive(event);
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"EBA237AB-8940-4A30-B309-5818995229C8"}
 */
function verifyStatusInput(event){
	var form = forms[event.getFormName()];
	var saveBtn = form.elements.btn_Save;
	saveBtn.enabled = !(!association_id || !status_code || !status_sequence);
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
 * @properties={typeid:24,uuid:"9B4280E2-54DB-4115-A19C-E2F1B193030A"}
 */
function onDataChangeProcessType(oldValue, newValue, event) {
	verifyStatusInput(event);
	elements.req_xfer_status.enabled = (status_type == i18n.getI18NMessage('sts.status.fab.transfer'));
	elements.req_bundle_status.enabled = (status_type == i18n.getI18NMessage('sts.status.fab.bundled'));

	return true
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C6B53188-48DD-42FE-825E-31127EA1968F"}
 */
function onHide(event) {
	onActionClose(event);
	return true
}
/**
 * generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F795622C-1509-4C3C-A708-686A4FE1822A"}
 */
function thirdPartyActive(event){
	var show = (status_type != i18n.getI18NMessage('sts.status.fab.bundled'));
	elements.thirdpty_station_name.visible = show;
	elements.fabtrol_labor_code.visible = show;
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
 * @properties={typeid:24,uuid:"46026BC9-627D-4EE6-BC74-773646E58E71"}
 */
function onDataChangeThirdPartyStation(oldValue, newValue, event) {
	if (!newValue){return true}
	waitForIt = true;
	var form = forms[event.getFormName()];
	var dataProv = elements[event.getElementName()].getDataProviderID();
	var status3rdParty = scopes.fs.checkFSStatus(newValue);
	if (status3rdParty != null){
		form[dataProv] = oldValue;
	}
	if (elements.btn_Cancel){
		elements.btn_Cancel.requestFocus();
	}
	waitForIt = false;
	return true
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B4B8D7DD-8FD5-4410-B80E-C4BF2F573214"}
 */
function onFocusLost3rdStatus(event) {
	elements.fabtrol_labor_code.requestFocus();
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
 * @properties={typeid:24,uuid:"29573C44-0E0C-437C-8ED1-868400554BA1"}
 */
function onDataChangePercentScan(oldValue, newValue, event) {
	if (newValue == 1){
		allow_multi_scan = 1;
	} else {
		allow_start_prior_not = 0;
	}
	return true
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
 * @properties={typeid:24,uuid:"8AE6A062-C924-4B48-90DA-57487F9FA0C6"}
 */
function onDataChangePriorIncomplete(oldValue, newValue, event) {
	if (newValue == 1 && labor_percentage_scan == 0){
		allow_start_prior_not = 0;
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
 * @properties={typeid:24,uuid:"606B1B2B-A0FB-40A0-A8D5-DC59ADE9004B"}
 */
function onDataChangeEndFor(oldValue, newValue, event) {
	//application.output('new value '+newValue);
	elements.percent_complete.enabled = (newValue != null);
	if (newValue == null){
		prompt_complete = 0;
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9FE2889F-E8BD-4F4A-ADCB-B38DC944E8E7"}
 */
function onActionClassStatus(event) {
	if (controller.readOnly){return}
	
	/** @type {QBSelect<db:/stsservoy/employee_class>} */
	var ec = databaseManager.createSelect('db:/stsservoy/employee_class');
	ec.where.add(ec.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	ec.sort.add(ec.columns.class_code.asc);
	var EC = databaseManager.getFoundSet(ec);
	/** @type {JSFoundSet<db:/stsservoy/employee_class>} */
	var ecRec = null; var idx = 1;
	var ecCodes = [];var ecUUIDs = [];
	while (ecRec = EC.getRecord(idx++)){
		ecCodes.push(ecRec.class_code);
		ecUUIDs.push(ecRec.employee_clas_id);
	}
	ecCodes.unshift(i18n.getI18NMessage('sts.empty.entry'));
	ecUUIDs.unshift(null);
	application.setValueListItems('stsvl_work_classes',ecCodes);
	elements.status_class_code_select.visible = true;
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A42799A1-5E54-4149-9874-367F1A9AEEC9"}
 */
function onFocusLostStatusClass(event) {
	var selected = elements.status_class_code_select.getSelectedElements();
	if (selected && selected.length > 0){
		statusClassCodes = '';
		for (var idxx = 0;idxx < selected.length;idxx++){
			if (selected[idxx] == i18n.getI18NMessage('sts.empty.entry')){selected = [];break;}
			statusClassCodes += selected[idxx];
			if (idxx != selected.length-1){statusClassCodes += '\n'}
		}
	}

	forms['status_description_rec'].elements.status_class_code_select.visible = false;
	/** @type {QBSelect<db:/stsservoy/employee_class>} */
	var ec = databaseManager.createSelect('db:/stsservoy/employee_class');
	ec.where.add(ec.columns.class_code.isin(selected));
	ec.where.add(ec.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var EC = databaseManager.getFoundSet(ec);
	/** @type {JSFoundSet<db:/stsservoy/employee_class>} */
	var ecRec = null;var idx = 1;
	var classIDs = [];
	while (ecRec = EC.getRecord(idx++)){
		classIDs.push(ecRec.employee_clas_id);
	}
	//remove class codes not selected
	/** @type {QBSelect<db:/stsservoy/status_valid_classes>} */
	var sc = databaseManager.createSelect('db:/stsservoy/status_valid_classes');
	sc.where.add(sc.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	sc.where.add(sc.columns.status_description_id.eq(status_description_id.toString()));
	if (selected.length > 0){
		sc.where.add('classsid',sc.columns.employee_clas_id.not.isin(classIDs));
	}
	var SC = databaseManager.getFoundSet(sc);
	if (SC.getSize() > 0){
		SC.deleteAllRecords();
	}
	sc.where.remove('classsid');
	var SC2 = databaseManager.getFoundSet(sc);
	/** @type {JSFoundSet<db:/stsservoy/status_valid_classes>} */
	var scRec = null;idx = 1;var setClasses = [];var edDate = new Date();
	while (scRec = SC2.getRecord(idx++)){if (setClasses.indexOf(scRec.employee_clas_id.toString()) == -1){
		setClasses.push(scRec.employee_clas_id.toString());}
	}
	var saveSet = false;
	for (idx = 0;idx < classIDs.length;idx++){
		//application.output('setclasses '+setClasses);
		//application.output('existing '+classIDs);
		if (setClasses.indexOf(classIDs[idx].toString()) == -1){
			var idxRec = SC2.newRecord();
			scRec = SC2.getRecord(idxRec);
			scRec.tenant_uuid = globals.session.tenant_uuid;
			scRec.edit_date = edDate;
			scRec.employee_clas_id = classIDs[idx].toString();
			scRec.status_description_id = status_description_id;
			scRec.logic_flag = 1;
			saveSet = true;
		}
	}
	if (saveSet){
		databaseManager.saveData(SC2);
	}
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
 * @properties={typeid:24,uuid:"380359E8-0010-4304-BE81-B3D988E504B8"}
 */
function onDataChangeWorkerRequired(oldValue, newValue, event) {
	elements.status_class_code_select.visible = false;
	if (newValue == 0){
		statusClassCodeList = i18n.getI18NMessage('sts.empty.entry');
		elements.btn_UpdateCodes.text = i18n.getI18NMessage('sts.txt.employee.class.codes');
		forms['status_description_rec'].elements.btn_UpdateCodes.enabled = false;
	} else {
		elements.btn_UpdateCodes.text = i18n.getI18NMessage('sts.txt.employee.class.codes.update');
		forms['status_description_rec'].elements.btn_UpdateCodes.enabled = true;
	}
	return true
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C1D38186-F66C-458C-863A-38CF0E0C5ED6"}
 */
function getClassCodes(event){
	statusClassCodes = '';
	/** @type {QBSelect<db:/stsservoy/status_valid_classes>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_valid_classes');
	q.where.add(q.columns.status_description_id.eq(status_description_id));
	q.result.add(q.columns.employee_clas_id);
	var Q = databaseManager.getFoundSet(q);
	if (emp_number_required == 0 || emp_number_required == null){
		Q.deleteAllRecords();
	}
	var QQ = databaseManager.getDataSetByQuery(q,-1);
	var ids = QQ.getColumnAsArray(1);
	
	if (ids && ids.length > 0){
		/** @type {QBSelect<db:/stsservoy/employee_class>} */
		var r = databaseManager.createSelect('db:/stsservoy/employee_class');
		r.where.add(r.columns.employee_clas_id.isin(ids));
		r.sort.add(r.columns.class_code.asc);
		r.result.add(r.columns.class_code);
		var R = databaseManager.getDataSetByQuery(r,-1);
		var codes = R.getColumnAsArray(1);
		statusClassCodes = '';
		for (var idx = 0;idx < codes.length;idx++){
			statusClassCodes += codes[idx];
			if (idx < codes.length-1){statusClassCodes += '\n'}
		}
	} else {
		statusClassCodes = i18n.getI18NMessage('sts.empty.entry');//i18n.getI18NMessage('sts.btn.default.empty.entry')
	}
}