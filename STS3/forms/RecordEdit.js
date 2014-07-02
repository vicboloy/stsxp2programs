/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"F05A6777-53B2-41A7-9FB5-B88BC814F6BB",variableType:8}
 */
var selectedIndex = 0;
/**
 *
 * @properties={typeid:35,uuid:"D7E3DA3F-3F1C-40C0-A9C1-A9D1920B9967",variableType:-4}
 */
var editFlag = false;
/*
function onShowRE(firstShow, event) {
	var dataset = controller.getFormContext().getValue(1,2);
	application.output('employee class list form parent on show '+dataset);

	controller.readOnly = true;
	if (controller.getMaxRecordIndex() == 0){
		controller.newRecord();
	} else {
		elements.deleteButton.text = 'Delete class \''+class_code+'\'';
	}
}
*/
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param {string} recordKeyID
 *
 *
 * @properties={typeid:24,uuid:"1C48C95D-A375-495D-9D45-70364F986DDB"}
 */
function onActionAdd(event,recordKeyID){
	selectedIndex = controller.getSelectedIndex();
	onEdit(event,true);
	foundset.newRecord();
	globals.newRecordKey = eval(recordKeyID);
	additionalActionAddFunctions();
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"A939DCF6-66E6-4E1B-AA03-B49FE47EAADE"}
 */
function onActionAddForm(event){
	onEdit(event,true);
	selectedIndex = controller.getSelectedIndex();
	additionalActionAddFunctions();
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"30AE3F2F-AA0B-4BC4-9E02-96FFD937D512"}
 */
function onActionDelete(event) {
	var itemDescription;
	var itemDescr = "Remove "+itemDescription;
	globals.doDialog(itemDescr,"Delete this Class?","Delete","Cancel");
	if (globals.dialogResponse == "yes"){
		addOnActionDelete();
		controller.deleteRecord();
	}
}
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} buttonTextSrc source in record for button text
 *
 * @properties={typeid:24,uuid:"0D273E9E-ECB7-4362-9492-21A6DACDA13D"}
 */
function onRecordSelection(event,buttonTextSrc) {
	var form = getParentForm();
	var text = form[buttonTextSrc];
	if (text == null){
			form.elements['deleteButton'].text = "Delete";
		} else {
			form.elements['deleteButton'].text = "Delete \'"+text+"\'";
		}
	form.addOtherChangeFunctions(); //Run change functions to update comboboxen
	form.otherSelectionFunctions();
	//elements.deleteButton.text = 'Delete';
	//forms.status_descriptions.currentStatusCode = code;
	//selectedIndex = getSelectedIndex();
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5A03D84F-63FE-439C-908A-54F4839CD8F2"}
 */
function onActionEdit(event) {
	var count = databaseManager.getFoundSetCount(foundset);
	if (count > 0){
		onEdit(event,true);
		databaseManager.setAutoSave(false);	
	}
	additionalEditFunctions(); //stubbed out on this for extending for other forms
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus Status of boolean for record edit status changes
 *
 *
 * @properties={typeid:24,uuid:"2CA6B5AA-5E72-412F-9002-67AB9698B7E9"}
 */
function onEdit(event,editStatus){
	editFlag = editStatus;
	controller.readOnly = !editStatus;
	elements.addButton.visible = !editStatus;
	elements.saveButton.visible = editStatus;
	elements.cancelButton.visible = editStatus;
	elements.editButton.visible = !editStatus;
	elements.deleteButton.visible = !editStatus;
	elements.tablessX.enabled = !editStatus;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C9F5DFA1-D2EA-414C-87B3-A158BD655AB1"}
 */
function onActionCancelEdit(event) {
	onEdit(event,false);
	additionalEditCancelFunctions();
	databaseManager.revertEditedRecords(foundset);
	databaseManager.setAutoSave(true);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1F45CB1F-7119-4FFE-AFDE-B311BBCB3DC9"}
 */
function onActionSaveEdit(event) {
	onEdit(event,false);
	additionalSaveFunctions();
	try {
		databaseManager.saveData(foundset);
	}
	catch (e) {
		application.output("No code entered to save.");
		controller.deleteRecord();
	}
	databaseManager.setAutoSave(true);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"99A66AB2-1E7B-4867-9711-C57528428608"}
 * @AllowToRunInFind
 */
function onActionSaveEditForm(event) {
	onEdit(event,false);
 	additionalSaveFunctions();
 	controller.loadAllRecords();
 	controller.sort('customer_number,asci,job_number asc')
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 * @param {String} recordUniq unique record that shall not have a duplicate
 * @param {String} recordKeyID id field for the unique name
 *
 * @returns {Boolean}
 *
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DA80D0B2-0857-4B1E-9481-96DB80FEDA1C"}
 */
function onDataChange(oldValue, newValue, event, recordUniq, recordKeyID) {
	databaseManager.nullColumnValidatorEnabled = false;
	databaseManager.setAutoSave(true);
	var fs = foundset.find();
	if (fs) //find will fail if autosave is disabled and there are unsaved records
	{
		foundset[recordUniq] = newValue;
		foundset.search();
		var count = databaseManager.getFoundSetCount(foundset);
		var otherIndex = 0;
		if (count > 1){
			var record = null;
			for (var index = 1;index <= foundset.getSize(); index++){
				record = foundset.getRecord(index);
				if (record[recordKeyID] == globals.newRecordKey){
					foundset.deleteRecord(record);
				} else {
					otherIndex = index;
				}
			}
			onEdit(event,false);
		}
		//foundset.sts_employee_class_container.loadAllRecords();
		foundset.loadAllRecords();
		//foundset.setSelectedIndex(globals.selectedEmpClassIndex);
		foundset.setSelectedIndex(otherIndex);
		addOtherChangeFunctions();
	}
	databaseManager.setAutoSave(true);
	globals.newRecordKey = "";
	return true
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"593A9BD1-BB9E-4DAD-A223-4C4CD45106A1"}
 */
function onShow(firstShow, event) {
	// disable form on entry. Must hit edit
	if (firstShow) {
		//controller.recreateUI();	
		onEdit(event,false);
	}
}
/**
 * @return RuntimeForm
 * @properties={typeid:24,uuid:"C55DD876-7D70-4FF0-8AED-BE57D8330604"}
 */
function getParentForm() {

	/** @type {JSDataSet} */
	var dataset = controller.getFormContext();
	if (dataset.getMaxRowIndex() > 1) {
		// form is in a tabpanel
		var parentFormName = dataset.getValue(dataset.getMaxRowIndex()-1, 2)
		return forms[parentFormName]
	}
	else {
		throw new Error ('getParentForm() called from a form that is a top-level form and therefore has no parent.')
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param array {array} array to be changed
 * @param element {string} element to be added
 *
  *
 * @properties={typeid:24,uuid:"2884B6C8-F0D4-4EB9-8833-76D9526872D4"}
 */
function addElementToArray(array,element){
	element = element.replace(/ /g,"");
	/** @type {Array} [newArray] */
	var newArray = new Array;
	newArray = array;
	var found = array.indexOf(element) != -1;
	if (!found){newArray.push(element)}
	return newArray;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param array {array} array to be changed
 * @param element {string} element to be added
  *
 *
 * @properties={typeid:24,uuid:"07EC411E-09A8-46D6-B6A5-B97DCF38EAA3"}
 */
function removeElementFromArray(array,element){
	element = element.replace(/ /g,"");
	var newArray = [];
	var length = array.length;
	for (var index = 0; index < length; index++){
		if (array[index].replace(/ /g,"") != element){
		//if (array[index] != element){
			newArray.push(array[index]);
		}
	}
	return newArray;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param array
 * @param element
 *
 * @properties={typeid:24,uuid:"2E3A29CC-B9CC-41E4-8102-82A9ACED85A0"}
 */
function elementIsInArray(array,element){
	var length = array.length;
	for (var index = 0; index < length; index++){
		if (array[index] == element){
			return true;
		}
	}
	return false;
}
/**
 * @properties={typeid:24,uuid:"7926D310-5A4E-41F5-A8F5-61EC7A4FB724"}
 */
function additionalSaveFunctions(){
}
/**
 * @properties={typeid:24,uuid:"445F7661-5159-48BE-8887-D90E31CC01BF"}
 */
function additionalEditFunctions(){
}
/**
 * @properties={typeid:24,uuid:"7D1B3452-AC6A-4426-B456-C4DF4642331D"}
 */
function additionalEditCancelFunctions(){
}
/**
 * @properties={typeid:24,uuid:"CDB571D7-FBF6-43C0-A4E1-6E73438F812E"}
 */
function additionalActionAddFunctions(){
}
/**
 * @properties={typeid:24,uuid:"5CBAF25C-1DAE-417E-B427-FA30016ECFE3"}
 */
function addOtherChangeFunctions(){
}
/**
 * @properties={typeid:24,uuid:"ADEDBF08-6121-42B3-91ED-03B35A2E91A2"}
 */
function addOnShowFunctions(){
}
/**
 * @properties={typeid:24,uuid:"EEB33379-74A4-434A-9441-DF3FEB207381"}
 */
function otherSelectionFunctions(){
}
/**
 * @properties={typeid:24,uuid:"8C04B490-3A73-47FE-9A01-399B89B04B93"}
 */
function addOnActionDelete(){
}
/**
 * @properties={typeid:24,uuid:"6BE4A05A-3DF4-461F-AE75-6966D1774E30"}
 */
function mainWindowFront(){
	var windowx = application.getWindow();
	if (windowx != null){
		windowx.toFront();
	}
}
/**
 * @properties={typeid:24,uuid:"E21EE873-34C3-488D-8F27-F113B59EAEDE"}
 */
function removeWindowTrack(){
	var win = application.getActiveWindow();
	var winName = win.getName();
	if (winName == null){return}
	winName = winName.replace(/_/g," ");
	var tempArray = new Array;
	application.output('array '+tempArray+' remove '+winName);
	var length = globals.aTrackWindows.length;
	for (var index = 0; index < length; index++){
		application.output(winName+' '+globals.aTrackWindows[index]);
		if (globals.aTrackWindows[index] != winName){
			tempArray.push(globals.aTrackWindows[index]);
			application.output('add '+globals.aTrackWindows[index]);
		}
	}
	globals.aTrackWindows = tempArray;
	application.output(tempArray);
	application.setValueListItems('stsvl_nav_windows',tempArray);
}