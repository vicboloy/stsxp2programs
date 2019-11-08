/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"17CBDB93-9500-44C1-936B-E71CA4EE97EC",variableType:4}
 */
var deleteJob = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"021C4120-0037-486D-A304-363019662C55",variableType:4}
 */
var deleteHistory = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C2C754BE-44FF-4370-9AB6-128B371BFBF1",variableType:4}
 */
var allItemsSelected = 0;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D0218ED-5C64-44FE-88B6-3DBA7CA310FA"}
 */
function onShow(firstShow, event) {
	deleteJob = 0;
	deleteHistory = 0;
	allItemsSelected = 0;
	elements.btn_DeleteSelected.text = i18n.getI18NMessage('sts.btn.delete.selected');
	scopes.jobs.warningsX();
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"374ED16A-949C-40E1-B082-9095F45463C0"}
 */
function onActionSelectAll(event) {
	//scopes.jobs.warningsYes();
	scopes.jobs.warningsMessage('Selecting records, please wait...',true);
	var formName = event.getFormName();
	var fs = forms[formName+'_table'].foundset;
	var updater = databaseManager.getFoundSetUpdater(fs);
	updater.setColumn('selection',1);
	updater.performUpdate();
	//var i = 1;
	//while (i <= fs.getSize()){
	//	scopes.jobs.warningsMessage('Selecting records, please wait...',false);
	//	var rec = fs.getRecord(i++);
	//	rec.selection = 1;
	//}
	scopes.jobs.warningsMessage('',true);
	scopes.jobs.warningsX();

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD314EC0-4D12-4908-8706-B0C8948287C1"}
 */
function onActionClearAll(event) {
	var formName = event.getFormName();
	var fs = forms[formName+'_table'].foundset;
	scopes.jobs.warningsYes(event);
	scopes.jobs.warningsMessage('Clearing Selected Messages, please wait...',true);
	var updater = databaseManager.getFoundSetUpdater(fs);
	updater.setColumn('selection',0);
	updater.performUpdate();
	//var i = 1;
	//while (i <= fs.getSize()){
	//	scopes.jobs.warningsMessage('Clearing Selected Messages, please wait...',false);
	//	var rec = fs.getRecord(i++);
	//	rec.selection = 0;
	//}
	scopes.jobs.warningsMessage('',true);
	scopes.jobs.warningsX();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param formName
 * @properties={typeid:24,uuid:"6588863C-C211-45FD-B32C-4FFCA0CA9711"}
 */
function onActionDeleteSelected(event,formName) {
	scopes.jobs.deleteDataJobId = forms.delete_criteria.vJobID;
	var message = i18n.getI18NMessage('sts.txt.delete.records.selected');
	var messageAlt = i18n.getI18NMessage('sts.txt.delete.cancel.records.selected');
	var button = i18n.getI18NMessage('sts.btn.delete');
	if (deleteHistory){
		message = i18n.getI18NMessage('sts.txt.delete.records.history');
		messageAlt = i18n.getI18NMessage('sts.txt.delete.cancel.records.history')
		button = i18n.getI18NMessage('sts.btn.purge.selected');
	}
	globals.doDialog(message,
		message,
		i18n.getI18NMessage('sts.btn.cancel'),//yes
		i18n.getI18NMessage('sts.btn.yes'));//no
		//'Delete Selected Records','Delete the Selected Records?','Delete','Cancel');
	//application.output('1st response:'+globals.dialogResponse)
	if (globals.dialogResponse.toLowerCase() == 'yes'){
		//application.output('delete cancelled');
		return;
	}
	//application.output('ask second question');
	globals.doDialog(message,
			messageAlt,
			i18n.getI18NMessage('sts.btn.no'),//yes
			i18n.getI18NMessage('sts.btn.yes'));//no
	//'Delete Selected Records','This is a permanent delete. Continue with deletion?','Cancel','Delete');
	//application.output('1st response:'+globals.dialogResponse)
	if (globals.dialogResponse.toLowerCase() == 'no'){
		//application.output('delete aborted');
		return;
	}
	///if (1==1){application.output('continue with deletion.');return}
    //application.output('continued with deletion');
    if (formName == null){
    	formName = event.getFormName();
    }
    var formPrefix = formName.split("_")[0];
	var formTable = formPrefix+'_pcmk_combo_table';
	var fs = forms[formTable].foundset;
	var omitList = [];
	scopes.jobs.warningsYes(event);
	scopes.jobs.warningsMessage('Deleted Selected Messages, please wait...',true);

	//if (false && deleteJob){//JOE 20180112 20180301 moved to purge for delete entire job
	//	scopes.jobs.warningsMessage('',true);
	//	scopes.jobs.importRecordsDelete(scopes.jobs.browseJobID);
	//	scopes.jobs.warningsX();
	//	
	//	return;
	//}
	//if (false && deleteHistory){//JOE 20180112 delete history below
	//	return;
	//}

	var recCount = fs.getSize(); var rec = null;
	while (rec = fs.getRecord(recCount)){
		recCount++;
	}
	recCount = fs.getSize();
	if (application.isInDeveloper()){application.output('record count for deletion is '+recCount)}
	var nothingSelected = true;
	while (recCount > 0){ // collect selected record idfile id's
		scopes.jobs.warningsMessage('Deleted Selected Messages, please wait...',false);

		var rec = fs.getRecord(recCount);
		if (rec.selection == 1){
			nothingSelected = false;
			if (rec.if_idfile_id){
				scopes.jobs.idfilesToDelete.push(rec.if_idfile_id.toString());
			}
			//fs.omitRecord(recCount);
		}
		recCount--;
	}
	if (nothingSelected){scopes.jobs.warningsX();return}
	scopes.jobs.deleteIdfiles(deleteHistory);

	scopes.jobs.idfilesToDelete = new Array();
	scopes.jobs.warningsX();
	//var win = application.getActiveWindow(); //was closing all active windows, ensure it only closes the delete window
	var win = forms[formName].controller.getWindow();
	forms['delete_criteria'].controller.getWindow().toFront();
	win.hide();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FA60405-63B1-4C0E-82E0-7399D3E83113"}
 */
function onActionScreenToggle(event) {
	if (!scopes.prefs.screenFull){
		scopes.prefs.screenFull = false;
		scopes.prefs.screenOrigX = 0;
		scopes.prefs.screenOrigY = 0;
		scopes.prefs.screenWidth = 0;
		scopes.prefs.screenHeight = 0;
	}
	var window = application.getActiveWindow();
	if (scopes.prefs.screenFull == false){
		scopes.prefs.screenHeight = window.getHeight();
		scopes.prefs.screenWidth = window.getWidth();
		scopes.prefs.screenOrigX = window.getX();
		scopes.prefs.screenOrigY = window.getY();
		window.setLocation(0, 0);
		window.setSize(application.getScreenWidth(),scopes.prefs.screenHeight);
		scopes.prefs.screenFull = true;
	} else {
		window.setLocation(scopes.prefs.screenOrigX, scopes.prefs.screenOrigY);
		window.setSize(scopes.prefs.screenWidth,scopes.prefs.screenHeight);
		scopes.prefs.screenFull = false;
	}
	//forms[event.getFormName()].controller.loadRecords();
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"64119CDE-CFFE-42E3-BB4D-85A4A7FE31E7"}
 */
function onHide(event) {
	return _super.onHide(event)
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1521C6C-C44D-44F5-B18B-E7D0C6565E43"}
 */
function onActionPurgeSelected(event) {
	if (deleteHistory){
		elements.btn_DeleteSelected.text = i18n.getI18NMessage('sts.btn.purge.history');
	} else {
		elements.btn_DeleteSelected.text = i18n.getI18NMessage('sts.btn.delete.selected');
	}
}
