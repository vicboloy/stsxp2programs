/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5D14E211-22AE-48D3-9A40-51CAC6050AA7"}
 */
var empName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ADAA991E-D0A6-4BF4-A47A-240AA57C9001"}
 */
var empNum = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"569964BA-83A2-4048-ABF2-2441FC63965D"}
 */
var userName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D7CD549B-41ED-405D-967C-FB765CF15069"}
 */
var printerName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"616D1AB2-85C6-4268-B906-3FB98CF2383B"}
 */
var labelName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A1D51246-B0E1-4C7F-89E4-F9662B72BB44"}
 */
var screenName = '';
/**
 * @properties={typeid:35,uuid:"9846F8CD-A3ED-42A3-A458-5A123AB13297",variableType:-4}
 */
var editingMode = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CAC73F65-5EFE-4A84-8336-42147550DC10"}
 */
var userID = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"21F3EE87-8672-4D2F-8687-424EED56A7BE"}
 */
var dupeUser = '';
/**
 * @properties={typeid:35,uuid:"162D15ED-CD01-4D43-AF6F-29A385CEF8EC",variableType:-4}
 */
var recFound = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98A67F4A-05E9-4EDD-894F-18C8C70D78D9"}
 */
var dupeNameWarning = '';
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"098A5D27-9692-4F0B-AB82-34BB92283F54"}
 */
function onShow(firstShow, event) {
	databaseManager.revertEditedRecords(foundset);
	printerName = '';
	labelName = '';
	screenName = '';
	dupeUser = '';
	dupeNameWarning = '';
	var form = forms['division_user_detail'];
	userID = form.user_uuid;
	globals.labelDestUserID = form.user_uuid;
	//var empID = form.employee_id;
	empNum = form.employeeNumber;
	userName = globals.m.userNames[userID];
	if (!userName){
		userName = form.user_name;
		globals.m.userNames[userID] = userName;
		globals.m.userAssocs[userID] = form.association_uuid;
	}
	empName = form.employeeNum+': '+form.employeeName;
	scopes.prefs.getLocalPrinters();
	scopes.prefs.getBTLabelFormats();
	scopes.prefs.getMCPrintScreenNames();
	scopes.prefs.getUsersWithScreenPrintPerms(event);
	elements.dupeWarning.visible = false;
	resetView(event);
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"233E61B7-5732-4430-BDB4-67DB77411B85"}
 */
function onHide(event) {
	scopes.globals.onActionCancelButton(event);
	return true
}
/**
 * @param event
 * @param editing
 *
 * @properties={typeid:24,uuid:"82875681-3464-4B6E-A4DD-E14445FCF440"}
 */
function onEdit(event,editing){
	//editingMode = editing;
	//elements.btn_Add.enabled = (editing) ? false : true;
	//elements.btn_Cancel.enabled = (editing) ? true : false;
	//elements.btn_Edit.visible = (editing) ? false : true;
	//elements.btn_Save.visible = (editing) ? true : false;
	elements.btn_Delete.visible = (forms['mc_label_dests_table'].foundset.getSelectedIndex() > 0) ? true : false;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"BA2811D8-6265-4CD9-A88E-92C36021CFD9"}
 */
function onActionEdit(event){
//	var idx = findRec(event,screenName)
	onEdit(event,true);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"2CD4B22D-ADED-48DB-B353-2995A9F6AE00"}
 */
function onActionSave(event){
	var fs = forms['mc_label_dests_table'].foundset;
	if (screenName){
		fs.printer_name = printerName;
		fs.label_template_name = labelName;
	}
	fs.edit_date = new Date();
	databaseManager.saveData(fs);
	elements.btn_Save.visible = false;
	fs.sort('rf_screen_name asc');
	//onEdit(event,false);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"FF99634C-3116-4BD7-B1B5-C755AAD1006C"}
 */
function onActionCancel(event){
	var fs = forms['mc_label_dests_table'].foundset;
	databaseManager.revertEditedRecords(fs);
	fs.sort('rf_screen_name asc');
	resetView(event);
	onEdit(event,false);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"9A2A8F02-8BF1-47E4-B309-95139387F05A"}
 */
function onActionDelete(event){
	onEdit(event,false);
	var rec = forms['mc_label_dests_table'].foundset.getSelectedRecord();
	rec.delete_flag = 1;
	printerName = '';
	labelName = '';
	var fs = forms['mc_label_dests_table'].foundset;
	//fs.omitRecord();
	databaseManager.saveData(rec);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"6DA7558D-3C40-43AD-A7CE-3ABC510C4EDA"}
 */
function onActionAdd(event){
	if (dupeUser != ''){
		onActionDupe(event);
		return;
	}
	if (!printerName || !labelName){
		return;
	}
	var fs = forms['mc_label_dests_table'].foundset;
	editingMode = true;
	var recIdx = fs.newRecord();
	var rec = fs.getRecord(recIdx);
	rec.create_date = new Date();
	rec.logic_flag = 0;
	rec.tenant_uuid = globals.session.tenant_uuid;
	rec.user_uuid = userID;
	rec.printer_name = printerName;
	rec.rf_screen_name = screenName;
	rec.label_template_name = labelName;
	rec.i18n_label = globals.m.i18nMobilePrintViews[screenName];
	elements.btn_Save.visible = true;
	elements.btn_Add.visible = false;
	elements.btn_Update.visible = true;
	onEdit(event,false);
	editingMode = false;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"02874ACD-F9BF-4DAA-B841-5339C72FE34A"}
 */
function onActionDupe(event){
	if (dupeUser == ''){return}
	//var dupeUserID = '';
	//if (!dupeUserID){return}
	var notDeleted = [0,null];
	/** @type {QBSelect<db:/stsservoy/label_destinations>} */
	var q = databaseManager.createSelect('db:/stsservoy/label_destinations');
	q.result.add(q.columns.label_destination_uuid);
	q.where.add(q.columns.tenant_uuid.eq(application.getUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.user_uuid.eq(dupeUser));
	q.where.add(q.columns.delete_flag.isin(notDeleted));
	var Q = databaseManager.getFoundSet(q);
	/** @type {JSFoundSet<db:/stsservoy/label_destinations>} */
	var rec = null; var idx = 1;
	/** @type {JSFoundSet<db:/stsservoy/label_destinations>} */
	var newRec = null;
	var fs = forms['mc_label_dests_table'].foundset;
	while (rec = Q.getRecord(idx++)){
		var found = false;
		for (var idx2 = 1;idx2 <= fs.getSize();idx2++){
			newRec = fs.getRecord(idx2);
			if (newRec.rf_screen_name == rec.rf_screen_name){
				found = true;
				break;
			}
		}
		if (!found){
			var newIdx = fs.newRecord();
			newRec = fs.getRecord(newIdx);
		}
		var uuid = newRec.label_destination_uuid;
		databaseManager.copyMatchingFields(rec,newRec);
		newRec.label_destination_uuid = uuid;
		newRec.user_uuid = userID;
		newRec.edit_date = new Date();
	}
	//databaseManager.saveData(fs);
	elements.btn_Update.visible = false;
	elements.dupeWarning.visible = false;
	elements.btn_Save.visible = true;
	dupeUser = '';
	null;
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
 * @properties={typeid:24,uuid:"F06F44B5-1737-4572-AFA1-FFF34C8D6218"}
 */
function onDataChangeScreenName(oldValue, newValue, event) {
	elements.btn_Save.visible = false;
	elements.btn_Add.visible = false;
	elements.btn_Update.visible = false;
	recFound = false;
	var fs = forms['mc_label_dests_table'].foundset;
	for (var idx = 1;idx <= fs.getSize();idx++){
		var rec = fs.getRecord(idx);
		if (rec.rf_screen_name == newValue){
			recFound = (!rec.delete_flag || rec.delete_flag == 0);
			break;
		}
	}
	if (recFound){
		elements.btn_Add.visible = false;
		fs.setSelectedIndex(idx);
		rec = fs.getSelectedRecord();
		printerName = rec.printer_name;
		labelName = rec.label_template_name;
	}// else {
	//	printerName = '';
	//	labelName = '';
	//}
	requiredEntriesIncomplete(event);
	return true;
}
/**
 * @param event
 * @param screenName
 *
 * @properties={typeid:24,uuid:"596789A1-05EA-4049-8B75-6D5B315620FA"}
 */
function findRec(event, screenName2){
	for (var idx = 1;idx <= foundset.getSize();idx++){
		/** @type {JSFoundSet<db:/stsservoy/label_destinations>} */
		var rec = foundset.getRecord(idx);
		
		if (rec.rf_screen_name == screenName2){
			if (rec.delete_flag){
				rec.delete_flag = 0;
				printerName = rec.printer_name;
				labelName = rec.label_template_name;
			}
			foundset.setSelectedIndex(idx);
			return idx;
		}
	}
	return -1;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"CA369A83-5888-4999-88B0-32AD8BFEC7A7"}
 */
function loadFieldsOfRec(event){
	var fs = forms['mc_label_dests_table'].foundset;
	var rec = fs.getSelectedRecord();
	if (rec){
		screenName = rec.rf_screen_name;
		printerName = rec.printer_name;
		labelName = rec.label_template_name;
		elements.btn_Update.visible = true;
		elements.btn_Add.visible = false;
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"097A37E7-FB08-48C8-B14E-B1B73BC13B68"}
 */
function requiredEntriesIncomplete(event){
	if (recFound){
		elements.btn_Update.visible = true;
	} else {
		elements.btn_Add.visible = !(!screenName || !labelName || !printerName);
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
 * @properties={typeid:24,uuid:"4F574754-FE48-437B-95D7-BF34D3CCBFB1"}
 */
function onDataChangePrinterName(oldValue, newValue, event) {
	requiredEntriesIncomplete(event);
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
 * @properties={typeid:24,uuid:"2DD8C044-78BB-404D-85BA-725264AB3E01"}
 */
function onDataChangeLabelName(oldValue, newValue, event) {
	requiredEntriesIncomplete(event);
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F14D9671-D948-435F-9467-4F7069A4F99F"}
 */
function onActionUpdate(event) {
	if (dupeUser != ''){
		onActionDupe(event);
		return;
	}

	var fs = forms['mc_label_dests_table'].foundset;
	var rec = fs.getSelectedRecord();
	rec.printer_name = printerName;
	rec.label_template_name = labelName;
	rec.delete_flag = 0;
	rec.edit_date = new Date();
	elements.btn_Save.visible = true;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E1C213E4-8931-4630-B52E-BEC9F8C8D4B5"}
 */
function resetView(event){
	screenName = '';
	labelName = '';
	printerName = '';
	elements.btn_Save.visible = false;
	elements.btn_Update.visible = false;
	var form = forms['mc_label_dests_table'].foundset;
	var rec = form.getSelectedRecord();
	if (rec){
		loadFieldsOfRec(event);
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
 * @properties={typeid:24,uuid:"8B719B10-D86C-48B4-9F99-99A4561FDECB"}
 */
function onDataChangeDupe(oldValue, newValue, event) {
	elements.btn_Update.visible = (newValue != '');
	elements.dupeWarning.visible = (newValue != '');
	dupeNameWarning = i18n.getI18NMessage('sts.txt.duped.settings.source')+' '+globals.m.employeeNames[userID];
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E7DF55D-9369-42A8-9A38-D030AE797936"}
 */
function onActionCloseSubWin(event) {
	globals.subWindowClose = i18n.getI18NMessage('sts.window.mc.label.destinations');
	globals.subWindowParentFocus = i18n.getI18NMessage('sts.window.sts.logon.management');
	globals.onActionCancelButton(event);
}
