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
/**
 * @properties={typeid:35,uuid:"C4C8F9B1-E368-4163-A7AC-4701F5F8ACA5",variableType:-4}
 */
var newRecord = null;
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
 * @param {JSEvent} event
 * @param {string} recordKeyID
 *
 *
 * @properties={typeid:24,uuid:"1C48C95D-A375-495D-9D45-70364F986DDB"}
 */
function onActionAdd(event,recordKeyID){
	databaseManager.setAutoSave(false);
	selectedIndex = controller.getSelectedIndex();
	onEdit(event,true);
	newRecord = foundset.newRecord();
	tenant_uuid = globals.session.tenant_uuid;
	create_date = new Date();
	
	globals.newRecordKey = eval(recordKeyID);
	if (elements.btn_Heats){
		elements.btn_Heats.enabled = (validate_heats == 1);
	}
	if (elements.btn_Recalc){
		elements.btn_Recalc.enabled = true;
	}
	additionalActionAddFunctions();
	if (forms['jobs_general']){
		var form = forms['jobs_general']; 
		form.verifyJobInput(event);
		if (!form.job_number){
			form.elements.job_number.requestFocus();
		}
		form.keep_minors = (scopes.prefs.lKeepMinorPcMarks) ? 1 : 0;
		forms['jobs_general']
	}
}
/**
 * @param {JSEvent} event
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
 * @SuppressWarnings(wrongparameters)
 */
function onActionDelete(event) {
	var formName = event.getFormName();
	if (formName == 'routing_codes'){
		var empty = 'check for routing code use in other jobs'
	} else {
		var empty = globals.checkJobEmpty(job_id);
		if (!empty){
			scopes.globals.errorDialogMobile(event,'1071',null,empty);
			return;
		}
	}
	var answer = globals.DIALOGS.showQuestionDialog(
	i18n.getI18NMessage('sts.txt.delete.record'),
	i18n.getI18NMessage('sts.txt.delete.record'),
	i18n.getI18NMessage('sts.txt.delete'),
	i18n.getI18NMessage('sts.txt.cancel'));
	if (answer == i18n.getI18NMessage('sts.txt.cancel')){return}
	//application.output('joe :'+joe+': :'+i18n.getI18NMessage('sts.txt.delete')+':');
	// addresses #50 part 3 ticket
	if (globals.DIALOGS.showQuestionDialog(
		i18n.getI18NMessage('sts.txt.delete.cancel'),
		i18n.getI18NMessage('sts.txt.delete.cancel'),
		i18n.getI18NMessage('sts.txt.cancel'),
		i18n.getI18NMessage('sts.txt.delete')) == i18n.getI18NMessage('sts.txt.delete')){
		addOnActionDelete();
		delete_flag = 99;
		databaseManager.saveData(foundset.getRecord(controller.getSelectedIndex()));
		foundset.loadRecords();
		elements.btn_Delete.visible = true;//(globals.checkJobEmpty(job_id) == '');
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
	var parent = getParentForm();
	if (parent == null){return}
	var formName = event.getFormName();
	var index = forms[formName].controller.getSelectedIndex();
	parent.controller.setSelectedIndex(index);
	var formName = event.getFormName();
	if (!globals.session.corpUser && formName == 'routing_codes_lst'){
		var routeId = forms[formName].routing_id;
		var assocId = globals.session.associationId;
		databaseManager.removeTableFilterParam('stsservoy','filterAssocSTATUS_DESCRIPTION');
		/** @type {QBSelect<db:/stsservoy/route_detail>} */
		var q = databaseManager.createSelect('db:/stsservoy/route_detail');
		q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		q.where.add(q.columns.e_route_code_id.eq(application.getUUID(routeId)));
		/** @type {QBJoin<db:/stsservoy/status_description>} */
		var r = q.joins.add('db:/stsservoy/status_description');
		r.on.add(r.columns.status_description_id.eq(q.columns.status_description_id));
		r.root.where.add(r.columns.association_id.not.eq(application.getUUID(assocId)));
		q.result.add(r.columns.association_id);
		var Q = databaseManager.getDataSetByQuery(q,-1);
		var extRtErr = (Q.getMaxRowIndex() > 0);
		databaseManager.addTableFilterParam('stsservoy','users','association_uuid','=',globals.session.associationId,'filterAssocSTATUS_DESCRIPTION');//Re-enable user assoc table filters
		var els = forms['routing_codes'].elements;
		els.btn_Edit.visible = !extRtErr;
		els.externalRtError.visible = extRtErr;
		els.btn_Delete.visible = !extRtErr;
		forms['routing_codes'].noEditFlag = extRtErr;
		//els.btn_New.visible = !extRtErr;
	}
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
	newRecord = null;
	var count = databaseManager.getFoundSetCount(foundset);
	if (count > 0){
		onEdit(event,true);
	} else {
		onActionAdd(event,"");
	}
	var formName = event.getFormName();
	forms[formName].controller.focusField('btn_Cancel',true);
	forms[formName].elements.btn_Cancel.requestFocus();
	if (formName.indexOf('jobs_general') == 0){
		forms[formName].verifyJobInput(event);
	}
	additionalEditFunctions(); //stubbed out on this for extending for other forms
}
/**
 * @properties={typeid:24,uuid:"764FA991-DE70-4B85-B363-C0ED316CCCD6"}
 */
function focusCancelButton(){
	controller.focusField('btn_Cancel',true);
}
/**
 * @param {JSEvent} event
 * @param editStatus Status of boolean for record edit status changes
 *
 *
 * @properties={typeid:24,uuid:"2CA6B5AA-5E72-412F-9002-67AB9698B7E9"}
 */
function onEdit(event,editStatus){
	databaseManager.setAutoSave(false);
	if (typeof codesAvail == 'undefined'){codesAvail = null}
	if (typeof codesSelect == 'undefined'){codesSelect = null}
	editFlag = editStatus;
	//databaseManager.setAutoSave(!editFlag);
	var formName = event.getFormName();
	var form = forms[formName];
	if (form.elements.tablessX){
		form.elements.tablessX.enabled = !editFlag;
	}
	controller.readOnly = !editFlag;
	forms.status_description_table.elements.btn_New.visible = !editFlag;
	if (elements.btn_Cancel){elements.btn_Cancel.visible = editFlag;}
	if (elements.btn_Save){elements.btn_Save.visible = editFlag;}
	if (elements.btn_Delete){elements.btn_Delete.visible = false;}
	if (elements.btn_Edit){elements.btn_Edit.visible = !editFlag;}
	vCustomerNumber = (st2_jobs_to_customers) ? sts_job_to_customer.customer_number : "";
	if (elements.btn_Recalc){
		elements.btn_Recalc.enabled = editFlag;
	}

	//elements.orderProcess.visible = editFlag;
	//elements.orderDown.visible = editFlag;
	//elements.orderUp.visible = editFlag;
	//elements.tablessX.enabled = !editFlag;
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
	var formFoundset = forms[event.getFormName()].foundset;
	databaseManager.revertEditedRecords(formFoundset);
	onEdit(event,false);
	additionalEditCancelFunctions();
	//databaseManager.setAutoSave(true);
	newRecord = null;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"70C1DAF1-E603-4AAF-8930-0E480CB7ABCA"}
 */
function onActionClose(event) {
	onActionCancelEdit(event);
	//editStatus(false);
	globals.stopWindowTrackEvent(event);
	//globals.stopWindowTrack(event);
	//globals.mainWindowFront();
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
	try {
		databaseManager.saveData(foundset);
	}
	catch (e) {
		application.output('No code entered to save.');
		controller.deleteRecord();
	}
	//databaseManager.setAutoSave(true);
	newRecord = null;
}
/**
 * @properties={typeid:24,uuid:"684C5C01-1CEE-4994-89CC-12A28C7B101A"}
 */
function entryCheckDuplicatePKRecord(){
	
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
	//databaseManager.setAutoSave(true);
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
	//databaseManager.setAutoSave(true);
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
	controller.setSelectedIndex(controller.getSelectedIndex());
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
		//throw new Error ('getParentForm() called from a form that is a top-level form and therefore has no parent.')
	}
}
/**
 * @param array {array} array to be changed
 * @param element {string} element to be added
 *
  *
 * @properties={typeid:24,uuid:"2884B6C8-F0D4-4EB9-8833-76D9526872D4"}
 */
function addElementToArray(array,element){
	if (!element){return}
	varvchkElement = element.replace(/ /g,"");
	/** @type {Array} [newArray] */
	var newArray = new Array;
	newArray = array;
	var found = array.indexOf(element) != -1;
	if (!found){newArray.push(element)}
	return newArray;
}
/**
 * @param array {array} array to be changed
 * @param element {string} element to be added
  *
 *
 * @properties={typeid:24,uuid:"07EC411E-09A8-46D6-B6A5-B97DCF38EAA3"}
 */
function removeElementFromArray(array,element){
	if (!element){return}
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
	if (application.isInDeveloper()){application.output('array '+tempArray+' remove '+winName)}
	var length = globals.aTrackWindows.length;
	for (var index = 0; index < length; index++){
		application.output(winName+' '+globals.aTrackWindows[index]);
		if (globals.aTrackWindows[index] != winName){
			tempArray.push(globals.aTrackWindows[index]);
			if (application.isInDeveloper()){application.output('add '+globals.aTrackWindows[index])}
		}
	}
	globals.aTrackWindows = tempArray;
	if (application.isInDeveloper()){application.output(tempArray)}
	application.setValueListItems('stsvl_nav_windows',tempArray);
}
