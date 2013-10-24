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
	/**@type {JSFoundSet<db:/stsservoy/routings>} */
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
	aStatusCodes = application.getValueListArray('stsvl_route_status_avail');
	aRouteCodes = application.getValueListArray('stsvl_route_status_selected');
	var arraySource = elements.availableCodes.getSelectedElements();
	var length = arraySource.length;
	for (var index = 0; index < length; index++) {
		var code = arraySource[index];
		aRouteCodes = addElementToArray(aRouteCodes,code);
		aStatusCodes = removeElementFromArray(aStatusCodes,code);
	}
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
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
	aStatusCodes = application.getValueListArray('stsvl_route_status_avail');
	aRouteCodes = application.getValueListArray('stsvl_route_status_selected');
	var arraySource = elements.selectedCodes.getSelectedElements();
	var length = arraySource.length;
	for (var index = 0; index < length; index++) {
		aRouteCodes = removeElementFromArray(aRouteCodes,arraySource[index]);
		aStatusCodes = addElementToArray(aStatusCodes,arraySource[index])
	}
	application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
	application.setValueListItems('stsvl_route_status_selected',aRouteCodes,true);
}

/**
 * @properties={typeid:24,uuid:"C645C427-648B-4362-AF3D-C9C60B9CCF4C"}
 */
function additionalSaveFunctions(){
	var routeUUID = routing_id;
	var routeName = route_code;
	/**@type {JSFoundSet<db:/stsservoy/routings>} */
	var newFS = sts_route_status_codes;
	var length = aRouteCodes.length;
	for (var index = 0; index < length; index++) {
		var code = aRouteCodes[index];
		if (elementIsInArray(aRouteCodesTemp,code)){continue}
		var newIdx = newFS.newRecord();
		var newRec = newFS.getRecord(newIdx);
		newRec.e_route_code_id = routeUUID;
		newRec.status_code = code;
		newRec.route_code = routeName;
		newRec.route_order = index;
	}
	length = aStatusCodes.length;
	for (index = 0; index < length; index++) {
		code = aStatusCodes[index];
		if (elementIsInArray(aStatusCodesTemp,code)){continue}
		for(var index=1;index<=newFS.getSize();index++){
			var record = newFS.getRecord(index);
			if (record.status_code == code){
				newFS.deleteRecord(index);
			}
		}
	}	
	//getSelectedCodes();
	//application.setValueListItems('stsvl_route_status_avail',aStatusCodes,true);
}
/**
 * @properties={typeid:24,uuid:"D2D53AB2-7D32-49B1-A929-1BDAB3AC0875"}
 */
function additionalEditFunctions(){
	aStatusCodesTemp = aStatusCodes;
	aRouteCodesTemp = aRouteCodes;
	//getSelectedCodes();
}
/**
 * @properties={typeid:24,uuid:"1FCC8418-4959-4FE3-A91E-0FEB1C5EDCB3"}
 */
function additionalEditCancelFunctions(){
	application.setValueListItems('stsvl_route_status_selected',aRouteCodesTemp,true);
	application.setValueListItems('stsvl_route_status_avail',aStatusCodesTemp,true);
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
	/**@type {JSFoundSet<db:/stsservoy/routings>} */
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
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2454B75A-0C1B-4C08-847D-3EC92DF8DF03"}
 */
function onActionMoveUp(event) {
	var index = elements.tabless.codes_list.getSelectedIndex();
	var x = "";
}
