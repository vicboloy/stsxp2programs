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
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"01A10811-600F-47BB-9936-2B301CB8668A"}
 */
function onShowLoadData(firstShow, event) {
	// disable form on entry. Must hit edit
	if (firstShow) {
		onEdit(event,false);
	}
	aStatusCodes = application.getValueListArray('stsvl_status_codes');
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	aRouteCodes = [];
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
	/**@type {JSFoundSet<db:/stsservoy/route_detail>} */
	var fs = sts_route_status_codes;
	if (fs != null) {
		for(var index=1;index<=fs.getSize();index++){
			var record = fs.getRecord(index);
			var code = record.status_code;
			aRouteCodes.push(code+"  ");
			aStatusCodes = removeElementFromArray(aStatusCodes,code);
		}
	}
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
	elements.orderUp.enabled = false;
	elements.orderDown.enabled = false;

}
/**
 * @properties={typeid:24,uuid:"FA9BA21D-6B8A-45D9-9468-FFC8F13645FF"}
 */
function getAvailableCodes(){
	aStatusCodes = application.getValueListArray('stsvl_status_codes');
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
	lastStatusAvail = item;
	//var codeTemp = item.replace(/ /g,"");
	//var codeAvail = lastStatusAvail;
	//var codeRouted = lastStatusRouted;
	//if (codeRouted == null){codeRouted = codeAvail;}
	//adjust avail to different text, blanks are invisible so using blanks
	//if (lastStatusAvail == codeTemp) {codeTemp = codeTemp+" "}
	//lastStatusAvail == codeTemp;
	aStatusCodes = removeElementFromArray(aStatusCodes,item);
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes);
	
	//now adjust routed codes
	//codeTemp = item.replace(/ /g,"");
	//if (lastStatusRouted == codeTemp){codeTemp = codeTemp+"  "}
	//lastStatusRouted == codeTemp;
	aRouteCodes = addElementToArray(aRouteCodes,item);
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes);
	//return true;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * 
 *
 * @properties={typeid:24,uuid:"4CD3262A-EBA4-431D-ACB6-1A742DD12980"}
 */
function onActionUnselect(event) {
	application.output("unselection");
	var item = elements.selectedCodes.getSelectedElements()[0];
	aStatusCodes = addElementToArray(aStatusCodes,item);
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes);
	aRouteCodes = removeElementFromArray(aRouteCodes,item);
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes);
	return;
}

/**
 * @properties={typeid:24,uuid:"C645C427-648B-4362-AF3D-C9C60B9CCF4C"}
 */
function additionalSaveFunctions(){
	var routeUUID = routing_id;
	var routeName = route_code;
	var aCurrentSort = [];
	var length = aRouteCodes.length;
	// selected codes and order
	var maxSort = 0;
	for (var index = 0; index < length; index++) {
		maxSort += 10;
		aCurrentSort[aRouteCodes[index]] = maxSort;
	}
	/**@type {JSFoundSet<db:/stsservoy/route_detail>} */
	var newFS = sts_route_to_status_code;
	//add code to route
	length = aRouteCodes.length;
	for (index = 0; index < length; index++) {
		var code = aRouteCodes[index];
		if (elementIsInArray(aRouteCodesTemp,code)){continue}
		if (aRouteCodes[index] != null){
			newFS.newRecord();
			newFS.e_route_code_id = routeUUID;
			newFS.route_code = routeName.replace(/ /g,"");
			newFS.status_code = code;
			newFS.route_order = aCurrentSort[code];
		}
	}
	//delete rest of routes
	var maxIndex = newFS.getSize();
	for (index = 1; index <= maxIndex; index++) {
		newFS.setSelectedIndex(index);
		if (aCurrentSort[newFS.status_code] != null) {
			newFS.route_order = aCurrentSort[newFS.status_code];
			aCurrentSort[newFS.status_code] = 0;
		} else {
			newFS.deleteRecord();
		}
	}
}
/**
 * @properties={typeid:24,uuid:"D2D53AB2-7D32-49B1-A929-1BDAB3AC0875"}
 */
function additionalEditFunctions(){
	aStatusCodesTemp = aStatusCodes;
	aRouteCodesTemp = aRouteCodes;
	aStatusCodesTemp = application.getValueListArray('stsvl_route_status_avail');
	aRouteCodesTemp = application.getValueListArray('stsvl_route_status_selected');
	elements.orderUp.enabled = editFlag;
	elements.orderDown.enabled = editFlag;
	//elements.deselect.enabled = editFlag;
}
/**
 * @properties={typeid:24,uuid:"1FCC8418-4959-4FE3-A91E-0FEB1C5EDCB3"}
 */
function additionalEditCancelFunctions(){
	application.setValueListItems('stsvl_route_status_selected',aRouteCodesTemp,true);
	application.setValueListItems('stsvl_route_status_avail',aStatusCodesTemp,true);
	aStatusCodes = aStatusCodesTemp;
	aRouteCodes = aRouteCodesTemp;
	elements.orderUp.enabled = editFlag;
	elements.orderDown.enabled = editFlag;
	//elements.deselect.enabled = editFlag;
}
/**
 * @properties={typeid:24,uuid:"32AB060D-1D0C-4B46-8DF7-46E47EE4B3D5"}
 */
function additionalActionAddFunctions(){
	getAvailableCodes();
}
/**
 * @properties={typeid:24,uuid:"59830BC0-4CBF-4733-A15B-119A2150F088"}
 */
function addOtherChangeFunctions(){
	aStatusCodes = application.getValueListArray('stsvl_status_codes');
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	aRouteCodes = [];
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
	/**@type {JSFoundSet<db:/stsservoy/route_detail>} */
	var fs = sts_route_status_codes;
	if (fs != null) {
		for(var index=1;index<=fs.getSize();index++){
			var record = fs.getRecord(index);
			var code = record.status_code;
			aRouteCodes.push(code);
			aStatusCodes = removeElementFromArray(aStatusCodes,code);
		}
	}
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
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
		application.output("No item selected.");
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
	elements.orderUp.enabled = moveNoMove;
	elements.orderDown.enabled = moveNoMove;
}
/**
 * TODO generated, please specify type and doc for the params
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
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
