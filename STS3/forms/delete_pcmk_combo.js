
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D0218ED-5C64-44FE-88B6-3DBA7CA310FA"}
 */
function onShow(firstShow, event) {

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
	var formName = event.getFormName();
	var fs = forms[formName+'_table'].foundset;
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = 1;
	}
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
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = 0;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param formName
 * @properties={typeid:24,uuid:"6588863C-C211-45FD-B32C-4FFCA0CA9711"}
 */
function onActionDeleteSelected(event,formName) {
	globals.doDialog(i18n.getI18NMessage('sts.txt.delete.records.selected'),
		i18n.getI18NMessage('sts.txt.delete.records.selected'),
		i18n.getI18NMessage('sts.txt.delete'),
		i18n.getI18NMessage('sts.txt.cancel'));
		//'Delete Selected Records','Delete the Selected Records?','Delete','Cancel');
	if (globals.dialogResponse != 'yes'){
		//application.output('delete cancelled');
		return;
	}
	//application.output('ask second question');
	globals.doDialog(i18n.getI18NMessage('sts.txt.delete.records.selected'),
			i18n.getI18NMessage('sts.txt.delete.record.permanent'),
			i18n.getI18NMessage('sts.txt.cancel'),
			i18n.getI18NMessage('sts.txt.delete'));
	//'Delete Selected Records','This is a permanent delete. Continue with deletion?','Cancel','Delete');
	if (globals.dialogResponse == 'yes'){
		//application.output('delete aborted');
		return;
	}
    //application.output('continued with deletion');
    if (formName == null){
    	formName = event.getFormName();
    }
	var fs = forms[formName+'_table'].foundset;
	var omitList = [];
	var i = 1;
	while (i <= fs.getSize()){ // collect selected record idfile id's
		var rec = fs.getRecord(i++);
		if (rec.selection == 0){continue}
		var idfileId = rec.idfile_id;
		if (scopes.jobs.idfilesToDelete.indexOf(idfileId+"") == -1){
			scopes.jobs.idfilesToDelete.push(idfileId+"");
		}
		omitList.push(i-1); //selection is array, which is zero-based, records are one-based
		//application.output('id '+idfileId+' index '+i);
	}
	while (omitList.length > 0){
		forms.delete_pcmk_combo_table.controller.setSelectedIndex(omitList.pop());
		//application.output('index '+forms.delete_pcmk_combo_table.selectedIndex);
		forms.delete_pcmk_combo_table.controller.omitRecord();
		
	}
	scopes.jobs.deleteIdfiles();
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
