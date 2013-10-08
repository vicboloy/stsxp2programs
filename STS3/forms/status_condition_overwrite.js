/**
 *
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FF27151A-D329-4C50-AC41-D09808950496"}
 */
 var newCodesOverwrite = "";
 /**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"041282BC-825E-405B-B2A3-16FC335C935A",variableType:-4}
 */
var codesOverwriteNewArray = new Array;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"561FDCE8-F8F1-400F-8A51-AFDB97DE89E6"}
 */
var availCodesOverwrite = "";
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"8C84A401-74D5-4063-8822-B1CA535CC900",variableType:-4}
 */
var codesOverwriteAvailArray = new Array;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0EA3A466-8CCB-455F-AD48-A05C28B8806A"}
 */
var allCodesOverwrite = "";
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"FDEB48BC-7435-4078-BD9A-3E0CB6FEC50F",variableType:-4}
 */
var codesOverwriteAllArray = new Array;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7F430155-E419-47F3-B6D5-FBE88FEFFDFE"}
 */
function onActionClose(event) {
	var win = application.getActiveWindow();
	win.hide();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5FF35171-E088-4913-805C-0520108CDFD6"}
 */
function onActionOkay(event) {
	var tempList = "<html>"
	var valueListName = elements.selectedCodes.getValueListName();
	var arraySelected = application.getValueListArray(valueListName);
	for(var index = 0;index < arraySelected.length; index++){
		if (tempList == ""){
			tempList = tempList+arraySelected[index];
		} else {
			tempList = tempList+"<br>"+arraySelected[index];
		}
	}
	overwrite_field_list = tempList;
	var win = application.getActiveWindow();
	win.hide();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"41E9DCF0-E95C-4B7E-8099-FE868740BE89"}
 */
function onActionSelectAvailable(event) {
	var statusAvailArray = application.getValueListArray('stsvl_avail_status_overwrite');
	var statusSelectArray = application.getValueListArray('stsvl_new_status_overwrite');
	var arraySource = elements.availableCodes.getSelectedElements();
	var length = arraySource.length;
	for (var index = 0; index < length; index++) {
		statusSelectArray = addElementToArray(statusSelectArray,arraySource[index]);
		statusAvailArray = removeElementFromArray(statusAvailArray,arraySource[index])
	}
	application.setValueListItems('stsvl_new_status_overwrite',statusSelectArray,true);
	application.setValueListItems('stsvl_avail_status_overwrite',statusAvailArray,true);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CBB10AAE-D7FA-4EAB-B575-831D925D1201"}
 */
function onActionUnselect(event) {
	var statusAvailArray = application.getValueListArray('stsvl_avail_status_overwrite');
	var statusSelectArray = application.getValueListArray('stsvl_new_status_overwrite');
	var arraySource = elements.selectedCodes.getSelectedElements();
	var length = arraySource.length;
	for (var index = 0; index < length; index++) {
		statusSelectArray = removeElementFromArray(statusSelectArray,arraySource[index]);
		statusAvailArray = addElementToArray(statusAvailArray,arraySource[index])
	}
	application.setValueListItems('stsvl_new_status_overwrite',statusSelectArray,true);
	application.setValueListItems('stsvl_avail_status_overwrite',statusAvailArray,true);
}


/**
 * TODO generated, please specify type and doc for the params
 * @param array {array} array to be changed
 * @param element {string} element to be added
 *
 * @properties={typeid:24,uuid:"83DE767C-3941-4889-90C8-9594344B8F3B"}
 */
function addElementToArray(array,element){
	var newArray = new Array;
	var found = false;
	newArray = array;
	var length = array.length;
	for (var index = 0; index < length; index++){
		if (array[index] == element){
			found = true;
		}
	}
	if (!found){
		newArray.push(element);
	}
	return newArray;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param array {array} array to be changed
 * @param element {string} element to be added
  *
 * @properties={typeid:24,uuid:"C1479F44-AB3E-4F1D-9893-DD2681EED324"}
 */
function removeElementFromArray(array,element){
	var newArray = [];
	var length = array.length;
	for (var index = 0; index < length; index++){
		if (array[index] != element){
			newArray.push(array[index]);
		}
	}
	return newArray;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DDC4FD03-A8B3-4847-8DD1-133504897B8B"}
 */
function onActionSelectAll(event) {
	application.setValueListItems('stsvl_avail_status_overwrite',new Array );
	application.setValueListItems('stsvl_new_status_overwrite',codesOverwriteAllArray);
	/*
	var temp = new Array;
	for (var index = 1; index <= foundset.getSize(); index++) {
		//@type JSRecord<db:/stsservoy/status_description> /
		var record = foundset.getRecord(index);
		temp.push(record.status_code);
	}
	application.setValueListItems('stsvl_new_status_overwrite',temp,true);
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DE17EF12-2072-4205-9FE8-2AADDECC9A18"}
 */
function onActionRemoveAll(event) {
	application.setValueListItems('stsvl_avail_status_overwrite',codesOverwriteAllArray)
	application.setValueListItems('stsvl_new_status_overwrite',new Array);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F0F0911F-EA88-443A-892E-60E47DC20FDE"}
 */
function onActionAddToCurrent(event) {
	var currentSequence = globals.currentStatusCodeSequence;
	var temp = new Array;
	var tempAll = codesOverwriteAllArray;
	var status = "";
	for (var index = 1; index <= foundset.getSize(); index++){
		/** @type JSRecord<db:/stsservoy/status_description> */
		var record = foundset.getRecord(index);
		status = record.status_code;
		if (record.status_sequence <= currentSequence){
			temp.push(status);
			tempAll = removeElementFromArray(tempAll,status);
		}
	}
	application.setValueListItems('stsvl_new_status_overwrite',temp,true);
	application.setValueListItems('stsvl_avail_status_overwrite',tempAll,true);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9FF43765-64D0-41A0-BC91-8AF037643DA5"}
 * @AllowToRunInFind
 */
function onShowStatusOverwrite(firstShow, event) {
	var newStatusList = overwrite_field_list;
	if (newStatusList == null){
		newStatusList = "";
	}
	newStatusList = newStatusList.replace("<html>","");
	newStatusList = newStatusList.replace(/<br>/g," ");
	var tempSelected = newStatusList.split(" ");
	application.setValueListItems('stsvl_new_status_overwrite',tempSelected,true);

	var temp = new Array;
	var tempAll = new Array;
	var status = "";
	for (var index = 1; index <= foundset.getSize(); index++){
		/** @type JSRecord<db:/stsservoy/status_description> */
		var record = foundset.getRecord(index);
		status = record.status_code;
		tempAll.push(status);
		if (newStatusList.search(status) == -1){
			temp.push(status);
		}
	}
	application.setValueListItems('stsvl_avail_status_overwrite',temp,true);
	codesOverwriteAllArray = tempAll;
	if (firstShow){
		allCodesOverwrite = availCodesOverwrite;
	}
}
