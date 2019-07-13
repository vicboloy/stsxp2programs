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
	globals.setUserFormPermissions(event);
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
	forms.status_description_rec.elements.percent_complete.enabled = promptFS;
	forms.status_description_rec.elements.fabtrol_labor_code.enabled = promptFS;
	forms.status_description_rec.elements.fabtrol_labor_code.transparent = !promptFS;
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
	
	if (status_code && (status_code.search(RegExp('TRANS')) != -1 || status_code.search(RegExp('XFER')) != -1)) {
		elements.req_xfer_status.enabled = true;
	} else {
		elements.req_xfer_status.enabled = false;
	}
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
	s.where.add(s.columns.association_id.eq(association_id));
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
			if (currProcessNumber >= rec.status_sequence && rec.status_description_id != currentStation){ // ticket #147
				endFors.push(rec.status_code);
				endForStations.push(rec.status_description_id);
			}
		}
		var assocId = rec.association_id;
		var statStatus = rec.status_code;
		var stationId = assocId+", "+statStatus;
		localStations.push(stationId);
	}
	endFors.unshift('none');endForStations.unshift(null);
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
	s.where.add(s.columns.association_id.eq(association_id));
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
		assocID.push(rec.association_uuid);
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
	thirdPartyActive(event);
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
