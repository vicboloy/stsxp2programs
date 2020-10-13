/**
 * @properties={typeid:35,uuid:"D998449E-9AE9-4F99-B659-9A842AFF0D7A",variableType:-4}
 */
var moveNoMove = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4CA77876-3AB5-485D-ACE8-BF47162DA059"}
 */
var lastStatusRouted = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C4E27B3-FDF8-4AF5-8F93-89539944FDC8"}
 */
var lastStatusAvail = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"71DDA116-7073-4EEA-94F7-DFDD6B6C12FE",variableType:4}
 */
var fRecordIndex = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45E083EF-6FB4-45BA-B20A-5409ABEC725E",variableType:8}
 */
var fDoubleClickTime = 0.0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B4850ED2-6E52-4702-B017-BFC78AA4CA49",variableType:4}
 */
var clickTime = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC20C619-23F8-4384-966B-22D7C2FB6FE4"}
 */
var itemClicked = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1FA743B-0F45-4D91-A6CB-6FFE3C3A2139"}
 */
var selectedStatusCode = "";
/**
 * @properties={typeid:35,uuid:"E9BE4D24-D556-48B9-91AE-BABB17C602E1",variableType:-4}
 */
 var aStatusCodes = [];
 /**
 * @properties={typeid:35,uuid:"8136E3B2-1CE2-43E9-AA5D-6194E09307E8",variableType:-4}
 */
var aAllStatusCodes = [];
/**
 * @properties={typeid:35,uuid:"CD750FA8-AB71-4D6A-854C-8BDA30033B9C",variableType:-4}
 */
var aFabShopsListx = [];
 /**
 * @properties={typeid:35,uuid:"444742A7-91C8-4BA8-A48A-1FBF7BD26DDF",variableType:-4}
 */
var aStatusCodesTemp = [];
/**
 * @properties={typeid:35,uuid:"D23EF713-5D19-4F16-AD98-2CE6C34B3066",variableType:-4}
 */
var aRouteCodes = [];
/**
 * @properties={typeid:35,uuid:"41113AC0-A7D3-4D7E-B7A2-148C4B1DFFA8",variableType:-4}
 */
var aRouteCodesTemp = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F07B7A8A-9697-4F56-8913-F12582B92DDC"}
 */
var codesAvail = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0932E1BF-73CF-40C3-810D-3BBC2079D567"}
 */
var codesSelect = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B329E771-DC2B-4F93-A531-F0CF9685C1DD"}
 */
var externalRoutingMsg = '';
/**
 * @properties={typeid:35,uuid:"A1C09388-01D0-4942-9262-5D8C563150C9",variableType:-4}
 */
var noEditFlag = false;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"01A10811-600F-47BB-9936-2B301CB8668A"}
 */
function onShow(firstShow, event) {
	// disable form on entry. Must hit edit
	if (firstShow) {
		onEdit(event,false);
		//if (foundset.getSize() > 0){
		//	foundset.setSelectedIndex(1)
		//}
	}
	foundset.loadAllRecords();
	globals.setUserFormPermissions(event,false);
	setRouteCodesLists();
}
/**
 * @properties={typeid:24,uuid:"FA9BA21D-6B8A-45D9-9468-FFC8F13645FF"}
 */
function getAvailableCodes(){
	aStatusCodes = globals.getStatusCodes(application.getValueListArray('stsvl_status_codes'));
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	aRouteCodes = [];
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3D1E9757-FA9B-4E00-9FD8-12CD2249934B"}
 */
function onActionSelectAvailable(event) {
	//get last code selected in each list, cannot repeat name or locks it up
	var item = elements.availableCodes.getSelectedElements()[0];
	if (!item){return}
	lastStatusAvail = item;
	aStatusCodes = application.getValueListArray('stsvl_route_status_avail');
	aStatusCodes = removeElementFromArray(aStatusCodes,item);
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes);
	
	//now adjust routed codes
	aRouteCodes = addElementToArray(aRouteCodes,item);
	onActionOrderByProcess(null,'stsvl_route_status_avail');
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes);
}
/**
 * @param event
 *
 * 
 *
 * @properties={typeid:24,uuid:"4CD3262A-EBA4-431D-ACB6-1A742DD12980"}
 */
function onActionUnselect(event) {
	var item = elements.selectedCodes.getSelectedElements()[0];
	if (item == undefined){return}
	aStatusCodes = addElementToArray(aStatusCodes,item);
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes);
	onActionOrderByProcess(event,'stsvl_route_status_avail');
	aRouteCodes = removeElementFromArray(aRouteCodes,item);
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes);
}
/**
 * @properties={typeid:24,uuid:"D2D53AB2-7D32-49B1-A929-1BDAB3AC0875"}
 */
function additionalEditFunctions(){
	//elements.deselect.enabled = editFlag;
}
/**
 * @properties={typeid:24,uuid:"1FCC8418-4959-4FE3-A91E-0FEB1C5EDCB3"}
 */
function additionalEditCancelFunctions(){
}
/**
 * @properties={typeid:24,uuid:"32AB060D-1D0C-4B46-8DF7-46E47EE4B3D5"}
 */
function additionalActionAddFunctions(){
}
/**
 * @properties={typeid:24,uuid:"59830BC0-4CBF-4733-A15B-119A2150F088"}
 */
function setRouteCodesLists(){
	var fabShopsList = application.getValueListArray('stsvl_status_codes');
	//application.output(fabShopsList);
	aStatusCodes = globals.getStatusCodes(application.getValueListArray('stsvl_status_codes'));
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes);
	aRouteCodes = [];
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
	/**@type {QBSelect<db:/stsservoy/route_detail>} */
	var fs = databaseManager.createSelect('db:/stsservoy/route_detail');
	fs.result.add(fs.columns.route_detail_id);
	fs.sort.add(fs.columns.route_order.asc);
	fs.where.add(fs.columns.delete_flag.isNull);
	var routeId = routing_id;
	fs.where.add(fs.columns.e_route_code_id.eq(globals.makeUUID(routeId)));
	fs.where.add(fs.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));

	var FS = databaseManager.getFoundSet(fs);
	/**@type {JSFoundSet<db:/stsservoy/route_detail>} */
	var rec = null; var index = 1;
	while (rec = FS.getRecord(index++)){
		var fabShopId = rec.status_description_id.toString();
		var fabShopAndStatus = null;
		for (fabShopAndStatus in fabShopsList){
			if (fabShopsList[fabShopAndStatus].toString() == fabShopId.toString()){break}
		}
		var fsAndS = fabShopAndStatus.split(',');
		var routeItem = globals.aMobAssocs[fsAndS[0]]+", "+fsAndS[1];
		if (aRouteCodes.indexOf(routeItem) == -1){
			aRouteCodes.push(routeItem);
			aStatusCodes = removeElementFromArray(aStatusCodes,routeItem);
		}
	}
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	onActionOrderByProcess(null,'stsvl_route_status_avail');
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} sortDirection which way to move the selected item
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2454B75A-0C1B-4C08-847D-3EC92DF8DF03"}
 */
function onActionMoveUp(event,sortDirection) {
	var code = elements.selectedCodes.getSelectedElements()[0];
	if (code == null){
		application.output('No item selected.');
		return;
	}
	var length = aRouteCodes.length;
	var targetIndex = 0;
	var index = 0;
	var tempIndex = 0;
	index = aRouteCodes.indexOf(code);
	if (sortDirection == "up"){
		if (index == 0) {return}
		targetIndex = index-1;
	} else {
		if (index == length-1) {return}
		targetIndex = index+1;
	}
	tempIndex = aRouteCodes[index];
	aRouteCodes[index] = aRouteCodes[targetIndex];
	aRouteCodes[targetIndex] = tempIndex;
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes);
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2DA7D5F0-E771-4932-AD49-DE34BEAC3AFE"}
 */
function onActionSelect(event) {
	//var selection = "";
	moveNoMove = !moveNoMove;
	elements.btn_OrderDown.enabled = moveNoMove;
	elements.btn_OrderUp.enabled = moveNoMove;
}
/**
 * @param name
 *
 * @properties={typeid:24,uuid:"FED504C6-A4AD-42CC-AF54-2B6580490BB1"}
 */
function onSingleClickRename(name){
	var nameRep = name.replace(/ /g,"");
	var index = aRouteCodes.indexOf(nameRep+" ");
	if (index == -1){
		index = aRouteCodes.indexOf(nameRep);
		aRouteCodes[index] = nameRep;
	} else {
		aRouteCodes[index] = nameRep+" ";
	}
}
/**
 * @properties={typeid:24,uuid:"FC4CC10A-5375-4E2C-9A2C-2090FDAB6983"}
 */
function onSingleClickRename2(){
	var name = elements.selectedCodes.getSelectedElements()[0];
	var nameRep = name.replace(/ /g,"")+"  ";
	for (var index = 0;index < aRouteCodes.length;index++){
		var indexedName = aRouteCodes[index];
		var indexedNameRep = indexedName.replace(/ /g,"");
		if (indexedNameRep == nameRep){
			if (indexedName == nameRep) {
				indexedName = nameRep+"   ";
			}else {
				indexedName = nameRep+"  ";
			}
			aRouteCodes[index] = indexedName;
			break;
		}
	}
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes);
}

/**
 * @properties={typeid:24,uuid:"442E121D-7FDA-4970-99C1-4AC903943A1F"}
 */
function uniqueStatusAvailCode (name){
	//lastStatusAvail
	var nameRep = name.replace(/ /g,"");
	if (lastStatusAvail == nameRep){
		return nameRep;
	} else {
		return nameRep+" ";
	}
}
/**
 * @properties={typeid:24,uuid:"694B32FA-E235-4BF6-B395-BDAEF553B140"}
 */
function uniqueStatusRouteCode (name){
	//lastStatusRouted
	var nameRep = name.replace(/ /g,"");
	if (lastStatusRouted == nameRep){
		return nameRep+"   ";
	} else {
		return nameRep+"  ";
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C46BE9BB-7CC2-41D8-AB61-2A0BBE171134"}
 */
function onActionClose(event) {
	onActionCancelEdit(event);
	globals.stopWindowTrackEvent(event);
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"174A28ED-90C3-408E-A0C0-F555186AD4C8"}
 */
function onRecordSelection(event) {
	setRouteCodesLists();
	return _super.onRecordSelection(event,null);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param valuelist
 * @properties={typeid:24,uuid:"C0AA9949-83EF-4DE7-ADE0-D7095BD075E2"}
 */
function onActionOrderByProcess(event,valuelist) {
	/** @type {QBSelect<db:/stsservoy/status_description>} */
	var fs1 = databaseManager.createSelect('db:/stsservoy/status_description');
	fs1.result.add(fs1.columns.status_description_id);
	fs1.where.add(fs1.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	fs1.where.add(fs1.columns.delete_flag.isNull);
	fs1.sort.add(fs1.columns.status_sequence.asc);
	var fs = databaseManager.getFoundSet(fs1);
	var newSelect = [];
	var selectArray = application.getValueListArray(valuelist);
	var index = 1;
	/** @type {JSRecord<db:/stsservoy/status_description>} */
	var record = null;
	while (record = fs.getRecord(index++)){
		var fabShopName = globals.aMobAssocs[record.association_id];
		var stat = record.status_code;
		var fabShop = fabShopName+', '+stat;
		if (selectArray.indexOf(fabShop) != -1){
			newSelect.push(fabShop);
		}
	}
	application.setValueListItems(valuelist,newSelect);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"6356D5D1-8057-430B-A674-B3F64E2F207A"}
 */
function onActionOrderByProcessAvailx(event) {
	var fs = sts_status_code_container;
	var newSelect = [];
	var selectArray = application.getValueListArray('stsvl_route_status_avail');
	for (var index = 1;index <= fs.getSize();index++){
		var record = fs.getRecord(index);
		var fabShopName = globals.aMobAssocs[record.association_id];
		var stat = record.status_code;
		var fabShop = fabShopName+', '+stat;
		if (selectArray.indexOf(fabShop) != -1){
			newSelect.push(fabShop);
		}
	}
	application.setValueListItems('stsvl_route_status_avail',newSelect);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"93B16432-EF20-477C-B4D9-28C85C2B2894"}
 */
function onActionSaveEdit(event) {
	onEdit(event,false);
	if (!route_code){
		globals.errorDialogMobile(event,433,'route_code','');
		elements.route_code.requestFocus();
		return;
	}
	var fabShopsList = application.getValueListArray('stsvl_status_codes');//fabShopsList[divisionId,StatusCode] = stationId ** [2B76B578-17F8-41EA-A3A6-9955DD6A5A8E,FIT:FC4FCF2A-BC06-406B-B15B-9648805E3939**
	var aCurrentSort = [];var aCurrentStationIds = [];//to check against db saved route detail
	var length = aRouteCodes.length;
	var selectCodes = application.getValueListArray('stsvl_route_status_selected');// **"SHOP2, FIT"**
	length = selectCodes.length;
	// selected codes and order
	for (var index = 0; index < length; index++) {
		aCurrentSort.push(selectCodes[index]);
		var fabShopIn = selectCodes[index].split(",");
		var fabShopId = globals.aMobAssocs[fabShopIn[0]];
		var stat = fabShopIn[1];
		var fabShop = fabShopId+','+stat.trim();
		aCurrentStationIds.push(fabShopsList[fabShop].toString());
	}

	/**@type {QBSelect<db:/stsservoy/route_detail>} */
	var rtDtl = databaseManager.createSelect('db:/stsservoy/route_detail');
	rtDtl.result.add(rtDtl.columns.e_route_code_id);
	rtDtl.where.add(rtDtl.columns.delete_flag.isNull);
	rtDtl.where.add(rtDtl.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	rtDtl.where.add(rtDtl.columns.e_route_code_id.eq(globals.makeUUID(routing_id)));
	var RTD = databaseManager.getFoundSet(rtDtl);
	
	databaseManager.startTransaction();
	index = 1; var stationIdsDone = [];
	/**@type {JSRecord<db:/stsservoy/route_detail>} */
	var rec = null;
	while (rec = RTD.getRecord(index++)){
		var currIdx = aCurrentStationIds.indexOf(rec.status_description_id.toString());
		if (currIdx == -1){//station no longer in route
			rec.delete_flag = 99;
			rec.edit_date = new Date();
		} else {//station still in route, update route order
			var routeOrd = (currIdx + 1)*10;
			if (rec.route_order != routeOrd){
				rec.edit_date = new Date();
				rec.route_order = routeOrd;
			}
		}
		stationIdsDone.push(rec.status_description_id.toString());
	}
	for (index = 0; index < length; index++) {
		fabShopIn = selectCodes[index].split(",");
		fabShopId = globals.aMobAssocs[fabShopIn[0]];
		stat = fabShopIn[1];
		fabShop = fabShopId+','+stat.trim();
		/** @type {String} */
		var stationId = fabShopsList[fabShop].toString();
		if (stationIdsDone.indexOf(stationId) != -1){continue}
		var idx = RTD.newRecord();
		/**@type {JSRecord<db:/stsservoy/route_detail>} */
		var rec2 = RTD.getRecord(idx);
		rec2.route_code = route_code;
		rec2.e_route_code_id = routing_id.toString();
		rec2.status_description_id = fabShopsList[fabShop].toString();
		rec2.tenant_uuid = globals.session.tenant_uuid;
		rec2.route_order = (index + 1)*10;
	}
	var status = databaseManager.commitTransaction();
	var record = foundset.getSelectedRecord();
	databaseManager.saveData(record);
	// have status_description_id == association_id, status == fabshopName, status
	//  status_description == globals.aMobAssocs[assocID] = assocName 
	//  [BF00BA53-8D07-4A70-B835-24D5BD5DAB91="NORTH SITE",FAA9BDE5-6B66-4930-981C-5AF0004EE1A4="SOUTH SITE"]
	//  fabShopsList = ["BF00BA53-8D07-4A70-B835-24D5BD5DAB91,CUT"=024DEEF5-C8B9-44A2-916D-0C2FCC300E1A]
	_super.onActionSaveEdit(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {string} recordKeyID
 *
 * @properties={typeid:24,uuid:"11524862-D6AD-4E30-A220-00540A2C5154"}
 */
function onActionAdd(event, recordKeyID) {
	foundset.newRecord();
	tenant_uuid = globals.session.tenant_uuid;
	edit_date = new Date();
	onEdit(event,true);
	getAvailableCodes();
	elements.route_code.requestFocus();
	return;// _super.onActionAdd(event, recordKeyID)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7580CA30-7A07-4567-9825-96292FE0115B"}
 */
function onActionCancelEdit(event) {
	databaseManager.revertEditedRecords(foundset);
	onEdit(event,false);
	setRouteCodesLists();
	return;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9579998-9104-429F-81B6-C756CA4A5C41"}
 */
function onActionEdit(event) {
	onEdit(event,true);
	return _super.onActionEdit(event)
}
/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 * @properties={typeid:24,uuid:"21B84385-BF35-4479-BDEC-C18D88269D3D"}
 */
function onEdit(event, editing){
	elements.btn_Cancel.enabled = editing;
	elements.btn_Cancel.visible = editing;
	if (!noEditFlag){
		elements.btn_Delete.enabled = !editing;
		elements.btn_Delete.visible = !editing;
	} else {
		elements.btn_Delete.enabled = false;
		elements.btn_Delete.visible = false;		
	}
	elements.btn_Edit.enabled = !editing;
	elements.btn_New.enabled = !editing;
	elements.btn_Save.enabled = editing;
	elements.btn_Save.visible = editing;
	elements.btn_OrderDown.enabled = editing;
	elements.btn_OrderUp.enabled = editing;
	elements.btn_OrderProcess.enabled = editing;
	forms.routing_codes_lst.controller.enabled = !editing;
	elements.availableCodes.enabled = editing;
	elements.selectedCodes.enabled = editing;
	elements.allow_more_codes.enabled = editing;
	elements.route_code.enabled = editing;
	elements.route_description.enabled = editing;
	codesAvail = null;
	codesSelect = null;
	globals.permissionsCacheHit(event,'routing_codes_lst');
	globals.permissionsCacheHit(event,null);

}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01D79346-EDF3-4722-BE2F-FAD61CAF043B"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionDelete(event) {
	var routeId = routing_id;
	var status = globals.checkRoutingCodesEmpty(routeId);
	if (status != ''){
		scopes.globals.errorDialogMobile(event,'1071','',status); //1071, record has data. will not be deleted.
		return false;
	}
	return _super.onActionDelete(event);
}
