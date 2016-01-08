/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8D60FBB7-D72A-4255-8940-61A1BB25EAC1"}
 */
function onShow(firstShow, event) {
	///application.output('inside on show loads_pcmk_combo ______________________________________');
	//foundset.clear(); // and this
	//databaseManager.setCreateEmptyFormFoundsets(); // maybe on solutionOpen
	var versionForm = globals.getInstanceForm(event);
	var formPrefix = event.getFormName().split("_")[0];
	var formNameTable = formPrefix+'_pcmk_combo_table';
	var formCombo = formPrefix+'_pcmk_combo';
	///var formCriteria = formPrefix+'_criteria';
	scopes.jobs.removeFormHist(formNameTable);
	//var success = history.removeForm(formNameTable);
	//var success2 = solutionModel.removeForm(formNameTable);
	//forms[formCriteria].collectCriteria(formCombo);
	var origFormName = formPrefix+'_pcmk_transaction';
	var rightFormName = origFormName+versionForm;
	if (!forms[rightFormName]){
		solutionModel.cloneForm(rightFormName,solutionModel.getForm(origFormName));
	}
	var relationInfo = solutionModel.getRelation('sts_idfile_to_transactions');
	forms[formCombo+versionForm].elements.split.setRightForm(rightFormName,relationInfo.name+versionForm);
	//hideColumns(event,0);
	var bot = forms[formCombo+versionForm].elements.split.getRightForm().controller.getName();
	///var top = forms[formCombo].elements.split.getLeftForm().controller.getName();
	//forms[formOverview].elements.tabless.addTab(formNameTable); // add tab to main window to see subset of this table
	scopes.jobs.tableHideFieldsReset()
	scopes.jobs.findEmptyColumns(event,0)
	//scopes.jobs.findEmptyColumns(event,1)
	///scopes.jobs.tablePrefsLoad(top);
	scopes.jobs.tablePrefsLoad(bot);
	return _super.onShow(firstShow, event)
}
/**
 * @properties={typeid:24,uuid:"E7D2E8E8-BB75-4884-BCCD-29C75A86A030"}
 */
function unusedhideColumns(event,table){
	var formName = event.getFormName();
	application.output('form name '+formName+' loads_pcmk_combo');
	//forms.loads_pcmk_combo.elements.split.getRightForm().elements.checklist_line.visible
	///var form = forms.loads_pcmk_combo.elements.split.getLeftForm().elements.Selection.visible = false;
	var formEls = forms.loads_pcmk_combo.elements.split.getLeftForm().elements;
	//var disableList = ['checklist','uuid'];
	//for (var tab = 0;tab < 2;tab++){
		if (table == 0){
			var browse = databaseManager.getFoundSet(forms.loads_pcmk_combo.elements.split.getLeftForm().controller.getDataSource());
		} else {
			browse = databaseManager.getFoundSet(forms.loads_pcmk_combo.elements.split.getRightForm().controller.getDataSource());			
		}
	var recCount = databaseManager.getFoundSetCount(browse);
	//var formName = forms.loads_pcmk_combo.elements.split.getLeftForm().getName();
	var fs = forms['loads_pcmk_combo_table'].foundset;
	recCount = databaseManager.getFoundSetCount(fs);
	var maxCount = recCount;
	if (recCount > 100) {maxCount = 100}
	for (var item in formEls){
		if (scopes.globals.hideEmptyColumns == 1 && recCount > 0){//don't hide columns if there is no data
			var empty = true;
			for (var index = 1;index < maxCount;index++){
				var rec = fs.getRecord(index);
				if (rec[item] != undefined && ( rec[item].trim() != "" && rec[item] != null)){
					empty = false;
					break;
				}
			}
			if (empty){formEls[item].visible = false}
		} else {
			formEls[item].visible = true;
		}
	}
	browse.sort('transaction_date desc');
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C1E7685-2850-4CC6-B90A-04E6EB40B7D4"}
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
 * @properties={typeid:24,uuid:"F512C2A2-688C-4EF5-A977-253845611191"}
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
 * @properties={typeid:24,uuid:"507DEF79-899B-413E-8AB4-6EEAD1EDA0B3"}
 */
function onActionDeleteSelected(event,formName) {
	globals.doDialog("Delete Selected Records","Delete the Selected Records?","Delete","Cancel");
	if (globals.dialogResponse != "yes"){
		//application.output('delete cancelled');
		return;
	}
	//application.output('ask second question');
	globals.doDialog("Delete Selected Records","This is a permanent delete. Continue with deletion?","Cancel","Delete");
	if (globals.dialogResponse == "yes"){
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
	while (i <= fs.getSize()){
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
 * @properties={typeid:24,uuid:"19F59ABB-4E2E-40BE-9F49-B8FDA44C32BA"}
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
 * @properties={typeid:24,uuid:"8A57F987-8446-4DD5-A62D-AC6DADD4BDD4"}
 */
function onHide(event) {
	return _super.onHide(event)
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F63CDE5B-1EB8-4BE1-A3E2-4B32404A519A"}
 */
function onActionRefreshTable(event) {
	var versionForm = globals.getInstanceForm(event);
	///var formName = event.getFormName();
	///application.output('checking'+event);
	var args = [];
	//args.push(scopes.jobs.browseJobID);
	//var fs = databaseManager.getFoundSet(forms.loads_pcmk_combo_table.controller.getDataSource());
	scopes.jobs.browseFS2[versionForm] = databaseManager.getDataSetByQuery('stsservoy', scopes.jobs.dsQuery, args , -1);
	scopes.jobs.viewBTableRemoveColumnArray();
	scopes.jobs.viewBTableRemoveRows();
	scopes.jobs.browseDatasource = scopes.jobs.browseFS[versionForm].createDataSource('loads_pcmk_combo_browse',scopes.jobs.browseArray);

	
	//scopes.jobs.browseDatasource = scopes.jobs.dsBrowse.createDataSource('browsing',scopes.jobs.browseArray);
	
	//////scopes.jobs.xxxviewBrowseTableRefresh();
	//changed browseFS to dynamically created global.  does it work?
	// almost there ... 
	//scopes.jobs.browseDatasource = browseFS.createDataSource(formName+'_browse',scopes.jobs.browseArray);
	//scopes.jobs.browseDatasource = scopes.jobs.dsBrowse.createDataSource('browsing',scopes.jobs.browseArray);
	//
	//scopes.jobs.browseDatasource = scopes.jobs.dsBrowse.createDataSource('loads_pcmk_combo_browse',scopes.jobs.browseArray);
	//scopes.jobs.browseDatasource = browseFS.createDataSource('browsingAll')
	//application.updateUI();
	//forms.loads_pcmk_combo_table.controller.recreateUI();
	
	//forms.loads_pcmk_combo_table.browseFS.createDataSource();
	//return;
	//globals.dsBrowse.createDataSource();
	null;
}
