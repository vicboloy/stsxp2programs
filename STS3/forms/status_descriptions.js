/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35A9EEFD-D19A-45DB-B25F-EC4BFD735A8D"}
 */
var currentStatusCode = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"64C46743-8F1F-44AC-8BD7-ACF54012C6FB"}
 */
var tempStation = "";
/**
 * @properties={typeid:35,uuid:"2E1CE3BC-2DE8-457D-846F-BAF72A686FF1",variableType:-4}
 */
var newRec = null;
/**
 * @properties={typeid:35,uuid:"8D3300BE-FCAE-4F2D-88D7-BBA478F18F04",variableType:-4}
 */
var availFabCodes = [];
/**
 * @properties={typeid:35,uuid:"CC70AA10-EE42-441A-A526-A362A9B221AF",variableType:-4}
 */
var localStations = [];
/**
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"E44816A6-43AC-40C4-AB19-74B1B1EB170C"}
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
	elements.fab_shop.enabled = promptFS;
	elements.fab_shop.transparent = !scopes.prefs.promptFabShop;
	elements.push_transaction.enabled = promptFS;
	elements.percent_complete.enabled = promptFS;
	elements.fabtrol_labor_code.enabled = promptFS;
	elements.fabtrol_labor_code.transparent = !promptFS;
	controller.readOnly = true;
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	}
	globals.newRecordKey = null;
	if (foundset.getSize() == 0){
		elements.btn_Delete.visible = false;
		elements.btn_Edit.visible = false;
	}
	getStatusList();
}

/**
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"91BAAD22-DC07-4128-BB22-7E3F0002F1A0"}
 */
function onActionAdd(event){
	databaseManager.setAutoSave(false);
	foundset.newRecord();
	onActionEdit(event);
	tenant_uuid = globals.session.tenant_uuid;
	edit_date = new Date();
	var shops = application.getValueListArray('stsvl_fab_shops');
	var index = 0;
	var firstShop = "";
	for (var shop in shops){
		index++;
		if (!firstShop){firstShop = shop}
	}
	if (index > 1){
		elements.fab_shop.requestFocus();
	} else {
		association_id = shops[firstShop];
		elements.status_code.requestFocus();
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} itemDescription item description to delete
 *
 * @properties={typeid:24,uuid:"2BD445F0-CAC3-47A9-8209-748004C6544E"}
 */
function onActionDelete(event,itemDescription) {
	if (!deletableStatus()){
		globals.errorDialogMobile(event,1071,'','');
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
 * @properties={typeid:24,uuid:"6655BA1E-3C2E-47A7-BE61-C19CBCE5239D"}
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
 * @properties={typeid:24,uuid:"7AB91C86-4EF3-462B-8B2C-9E754824FDF4"}
 * @AllowToRunInFind
 */
function onEdit(event,editStatus){
	databaseManager.nullColumnValidatorEnabled = false;
	editFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.btn_New.visible = !editStatus;
	elements.btn_Edit.visible = !editStatus;
	elements.btn_Delete.visible = !editStatus;
	elements.btn_Save.visible = editStatus;
	elements.btn_Cancel.visible = editStatus;
	if (status_code && (status_code.search(RegExp('TRANS')) != -1 || status_code.search(RegExp('XFER')) != -1)) {
		elements.req_xfer_status.enabled = true;
	} else {
		elements.req_xfer_status.enabled = false;
	}
	try {
		elements.tablessX.enabled = !editStatus; //just ignore the tabless on some screens
	}
	catch (e) {}
	if (!editStatus){
		databaseManager.saveData(foundset);
		forms.status_description_lst.controller.sort('status_sequence asc');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"63DF1572-0114-4457-A490-415629F7DD57"}
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
 * @properties={typeid:24,uuid:"CA01300F-DA75-49DC-A18A-CEE45DCE7324"}
 */
function onActionSaveEdit(event) {
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
 * @properties={typeid:24,uuid:"B848F299-A871-4A13-A798-6EBB73ADEB6F"}
 * @AllowToRunInFind
 */
function onDataChangeProcess(oldValue, newValue, event) {
	if (newValue == ""){
		globals.errorDialog(-1);
		return false;
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
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B6ABBA02-E6AC-434D-9F92-E50C12FD5FE4"}
 */
function onDataChangeStatus(oldValue, newValue, event) {
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var s = databaseManager.createSelect('db:/stsservoy/status_description');
	s.result.add(s.columns.status_description_id);
	s.where.add(s.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	s.where.add(s.columns.delete_flag.isNull);
	s.where.add(s.columns.status_code.eq(newValue));
	var S = databaseManager.getFoundSet(s);
	
	if (S.getSize() > 0){
		var rec = S.getRecord(1);
		onActionCancelEdit(event);
		var idx = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(idx);
	}
	//newValue = newValue.toUpperCase();
	//changeToStation(event);
	return true;
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B0300964-0FDA-4658-A268-379475A5D0F4"}
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
 * @properties={typeid:24,uuid:"88505C08-1487-4B7C-81A0-BC87C51DB9BB"}
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
 * @properties={typeid:24,uuid:"9C86DD7A-7054-461D-837C-63849E991890"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
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
 * @properties={typeid:24,uuid:"7A0C7C5E-62FD-4F81-8ED6-EB07E4193343"}
 * @SuppressWarnings(wrongparameters)
 */
function onDataChangeFabShop(oldValue, newValue, event) {
	if (newValue == "" || newValue == null){
		return false;
	}
	//changeToStation(event);
	getStatusList();
	return true;
}
/**
 * @param index
 *
 * @properties={typeid:24,uuid:"628420C0-F583-4FA4-9612-E365F2CF28BA"}
 */
function setFormIndex(index){
	controller.setSelectedIndex(index);
}
/**
 * Change to record matching associaton_id and status_code
 * @properties={typeid:24,uuid:"380C1DAC-D120-4014-9BFD-CDBB59AA3EDB"}
 */
function changeToStation(event){
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
 * @properties={typeid:24,uuid:"5E21AD0F-0903-4586-9F55-0429698316FE"}
 * @SuppressWarnings(wrongparameters)
 */
function getStatusList(){
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var q = databaseManager.createSelect('db:/stsservoy/status_description');
	q.result.add(q.columns.status_description_id);
	q.result.add(q.columns.association_id);
	q.result.add(q.columns.status_code);
	//q.result.add(q.columns.status_sequence);
	q.sort.add(q.columns.status_sequence.asc);
	q.where.add(
	q.and
		.add(q.columns.delete_flag.isNull)
		.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid))
	);
	/** @type {JSFoundSet<db:/stsservoy/status_description>} */
	var resultQ = databaseManager.getFoundSet(q);
	var statusArray = [];
	var stationArrayId = [];
	localStations = [];
	for (var index = 1;index <= resultQ.getSize();index++){
		var rec = resultQ.getRecord(index)
		if (rec.association_id == association_id){
			stationArrayId.push(rec.status_description_id);
			statusArray.push(rec.status_code); // localize selections to current associationId
		}
		var assocId = rec.association_id;
		var statStatus = rec.status_code;
		var stationId = assocId+", "+statStatus;
		localStations.push(stationId);
	}
	application.setValueListItems('stsvl_status_code',statusArray);
	application.setValueListItems('stsvl_station_codes',statusArray,stationArrayId);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"115F40D6-82D8-49F6-AF54-9CDED48265C2"}
 */
function getRecollectStatusDescription(event){
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
 * @properties={typeid:24,uuid:"EF143EBF-716E-44EB-B30F-8809EF600534"}
 */
function addOtherChangeFunctions(){
	return true;
}
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} buttonTextSrc
 *
 * @properties={typeid:24,uuid:"C1C28BCB-C5AA-4EE3-90DF-23AC5D30A993"}
 */
function onRecordSelection(event, buttonTextSrc) {
	return _super.onRecordSelection(event, buttonTextSrc)
}
/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E93FB09-7337-4A7E-BE4F-8B5B6DA9DE2A"}
 */
function onFocusGainedFabShop(event) {
	getFabShops(event);
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B9A6B62-20A3-4CF8-BFCD-587DABD493B7"}
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
	
	var codes = [];
	for (var index = 1;index <= S.getSize();index++){
		/** @type {JSRecord<db:/stsservoy/status_description>} */
		var rec = S.getRecord(index);
		codes.push(rec.status_code);
	}
	application.setValueListItems('stsvl_status_code',codes);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"67A16A6B-8B36-4C23-B5A4-65204B5D7FE0"}
 */
function getFabShops(event){
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var a = databaseManager.createSelect('db:/stsservoy/associations');
	a.result.add(a.columns.association_uuid);
	a.where.add(a.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	a.where.add(a.columns.delete_flag.isNull);
	a.where.add(a.or
				.add(a.columns.logic_flag.isNull)
				.add(a.columns.logic_flag.eq(0))
				);
	var A = databaseManager.getFoundSet(a);
	
	var assocID = [];
	var assocName = [];
	A.loadRecords();
	for (var index = 1;index <= A.getSize();index++){
		/** @type {JSRecord<db:/stsservoy/associations>} */
		var rec = A.getRecord(index);
		assocID.push(rec.association_uuid);
		assocName.push(rec.association_name);
	}
	application.setValueListItems('stsvl_fab_shops',assocName,assocID);
}
/**
 * @properties={typeid:24,uuid:"84DAE2F9-7FEC-40A0-872F-99118057D76F"}
 */
function deletableStatus(){
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var s = databaseManager.createSelect('db:/stsservoy/status_description');
	s.result.add(s.columns.status_description_id);
	s.where.add(s.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	s.where.add(s.columns.delete_flag.isNull);
	s.where.add(s.columns.end_for_status.eq(status_description_id));
	var S = databaseManager.getFoundSet(s);
	if (S.getSize() > 0){return false}
	
	/** @type {QBSelect<db:/stsservoy/transactions>} */
	var t = databaseManager.createSelect('db:/stsservoy/transactions');
	t.result.add(t.columns.trans_id);
	t.where.add(t.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	t.where.add(t.columns.delete_flag.isNull);
	t.where.add(t.columns.status_description_id.eq(status_description_id));
	var T = databaseManager.getFoundSet(s);
	if (T.getSize() > 0){return false}

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i = databaseManager.createSelect('db:/stsservoy/idfiles');
	i.result.add(i.columns.idfile_id);
	i.where.add(i.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	i.where.add(i.columns.delete_flag.isNull);
	i.where.add(i.columns.status_description_id.eq(status_description_id));
	var I = databaseManager.getFoundSet(i);
	if (I.getSize() > 0){return false}
	
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var j = databaseManager.createSelect('db:/stsservoy/idfiles');
	j.result.add(j.columns.idfile_id);
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	j.where.add(j.columns.delete_flag.isNull);
	j.where.add(j.columns.status_description_id.eq(status_description_id));
	var J = databaseManager.getFoundSet(j);
	if (J.getSize() > 0){return false}
	
	return true;

}