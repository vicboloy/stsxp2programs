/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8AC3D74E-4657-4938-9B92-8B1B5DACF2DE"}
 */
var vJobNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41C69FBF-8374-4F55-A834-2E8DB8B075CE"}
 */
var vAssociation = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18DF06D1-336B-41EC-8631-BEDB94570B04"}
 */
var vCustNum = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"53D2688C-7D84-41A7-86A5-71950658920C"}
 */
var vCustomerName = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"172C3F70-AAE3-44BD-8D71-3E8BFD057081",variableType:4}
 */
var vJobWeight = 0.0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A14658E-DF67-419F-8826-832875E60C2B"}
 */
var vJobName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFB4FBB5-A97C-46A2-94FA-684FECBB9EB8"}
 */
var vJobID = '';
/**
 * @properties={typeid:35,uuid:"03A718D5-203D-4105-B6AF-267252205947",variableType:-4}
 */
var vJobMetric = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CB98B9AB-B354-4E67-B5FA-11560867821C"}
 */
var vCustId = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"80725676-E925-48FE-9F8E-9AE348B16F2A"}
 */
var vAssociationId = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"300792F3-9C05-481F-9006-006345DF2B6C"}
 */
var vEmployeeNum = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9660E446-185B-4C35-B457-810AF97CB78D",variableType:4}
 */
var vLabTotalWt = 0;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"327D5164-8117-4E59-8668-443908DD11A6"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		vJobID = null;
		vJobNumber = '';
		clearForms(event);
		elements.btn_Edit.visible = false;
		//if (event.getFormName() == i18n.getI18NMessage('sts.edit.btn.piecemark.entry')){
		//	globals.setUserFormPermissions(event,false);
		//} else {
		//	globals.setUserFormPermissions(event,true);			
		//}

	}
	elements.viewOnly.visible = (scopes.jobs.viewIsReadOnly(event));
	vAssociationId = globals.session.associationId;
	vAssociation = globals.m.assocs[vAssociationId];
	vEmployeeNum = globals.session.employeeNum;
	vJobWeight = 0;
	if (metric_job == 1){
		elements.metric.text = i18n.getI18NMessage('sts.label.metric');
	}
	onActionEditCancel(event);
	scopes.globals.getJobsByAssoc();
	globals.setUserFormPermissions(event,scopes.jobs.viewIsReadOnly(event));
	elements.job_number.requestFocus();
}

/**
 * @param rec
 *
 * @properties={typeid:24,uuid:"5D29F583-EFBE-4E56-9771-A276F76909D4"}
 */
function setFoundsetRec(rec){
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7BB809F5-2BBF-4B63-9D03-48E4BC183BC8"}
 */
function onActionHide(event) {
	globals.stopWindowTrackEvent(event);
	var tabFormName = forms.piecemarks_loads.elements.tabs.getTabFormNameAt(1);
	scopes.jobs.removeFormHist(tabFormName);
	vJobNumber = '';
	clearForms(event);
	forms.piecemark2.elements.tabs.tabIndex = 1;
	return true;
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
 * @properties={typeid:24,uuid:"8DD9C284-3AB5-4FA9-A984-F81683CEA11A"}
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var q = databaseManager.createSelect('db:/stsservoy/jobs');
	q.where.add(q.columns.job_number.eq(vJobNumber));
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.delete_flag.isNull);
	var fs = databaseManager.getFoundSet(q);
	foundset.loadRecords(fs);
	if (foundset.getSize() == 0){
		vJobNumber = null;
		return true;
	}
	/** @type {QBSelect<db:/stsservoy/addresses>} */
	var r = databaseManager.createSelect('db:/stsservoy/addresses');
	r.where.add(r.columns.address_id.eq(globals.makeUUID(ship_to)));
	vJobID = job_id;
	vJobWeight = 0;
	if (metric_job == 1){
		elements.metric.text = i18n.getI18NMessage('sts.label.metric');
		vJobWeight = job_weight;
	} else {
		elements.metric.text = i18n.getI18NMessage('sts.label.imperial');
		vJobWeight = scopes.globals.kgToLb(job_weight);
	}
	elements.tabs.tabIndex = 1;
	forms['piecemark2'].elements['btn_Edit'].requestFocus();
	onActionEditCancel(event);
	forms.piecemarks_loads.elements.tabs.removeAllTabs();
	scopes.jobs.removeFormHist('loads_pcmk_0');
	//scopes.jobs.removeFormHist('loads_pcmk_combo');
	browseTableCreate(event);
	browseTable(event);
	clearForms(event);
	forms.piecemark2.elements.tabs.setTabEnabledAt(2,true);//enabled jobs tab
	forms.piecemark2.elements.tabs.setTabEnabledAt(5,true);//enabled jobs tab
	elements.btn_Edit.visible = true;

	scopes.jobs.warningsX(event);
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C397362-F817-46BB-A072-9650D978E3CE"}
 */
function onActionEdit(event) {
	forms.piecemarks_info.onEdit(event,true);
	forms.piecemarks_id_info.onEdit(event,true);
	forms.piecemark.onEdit(event,true);
	onEdit(event,true);
}
/**
 * @param event
 * @param editing
 *
 * @properties={typeid:24,uuid:"500892E3-A308-401C-AD23-126B899A876D"}
 */
function onEdit(event,editing){
	elements.btn_Cancel.visible = editing;
	elements.btn_Add.visible = editing;
	elements.btn_Delete.visible = editing;
	elements.btn_Edit.visible = (!editing && vJobNumber != '');
	globals.permissionsCacheHit(event,null);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"91AF0928-DB84-42ED-9D1B-705D7DFC0FFF"}
 */
function onActionEditCancel(event){
	forms.piecemarks_info.onEdit(event,false);
	forms.piecemarks_id_info.onEdit(event,false);
	forms.piecemark.onEdit(event,false);
	onEdit(event,false);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E5E15030-5A85-4448-8F4A-8EE11C5F449E"}
 */
function browseTableCreate(event){
	var criteria = {};
	criteria.jobid = vJobID;
	scopes.jobs.viewBTableToFormQB(event,criteria,'loads_pcmk_0');//20180802 move query build for browsing table
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"0660679A-7A2A-48C3-8E40-E427BC170F41"}
 */
function browseTable(event){
		var winTitle = 'Browse Piecemarks Loads';
		var formName = 'loads_pcmk_0';
		var height = controller.getWindow().getHeight();
		var width = controller.getWindow().getWidth();
		var xOrigin = controller.getWindow().getX();
		var yOrigin = controller.getWindow().getY();
		var tabForm = forms.piecemarks_loads.elements.tabs.getTabFormNameAt(1);// DEBUG Browse table error 20181220
		if (tabForm){
			scopes.jobs.removeFormHist(tabForm+'_table');
		}
		if (!tabForm){//20180802 show browse loads if exists or create
			var success = forms.piecemarks_loads.elements.tabs.addTab(formName+'_table');
			forms[formName];// pre-load form for speed
			scopes.jobs.viewBTableCreateForm2(formName,scopes.jobs.browseFS2[formName]);
			//win.show(forms[formName]);
		} else {
			scopes.jobs.viewBTableCreateForm2(formName,scopes.jobs.browseFS2[formName]);
			//winExist.show(formName);//20180802 added
		}//20180802 show browse loads if exists or create
}
/**
 * @param event
 * @param pcmkId
 * @param idfileId
 *
 * @properties={typeid:24,uuid:"87FF67EF-1B90-4320-80F1-878E38F6F47B"}
 */
function selectedRecordChanged(event,rec){
	forms.piecemark2.elements.tabs.setTabEnabledAt(3,true);
	forms.piecemark2.elements.tabs.setTabEnabledAt(4,true);
	forms.piecemark.setRecord(event,rec);
	forms.piecemarks_info.setRecord(event,rec);
	forms.piecemarks_id_info.setRecord(event,rec);

}
/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C74233B8-4A00-4148-996F-CFC451181C48"}
 */
function onTabChange(previousIndex, event) {
	elements.btn_EditSettingsLeftPanel.visible = (elements.tabs.tabIndex == 5);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"0A6D8432-684A-4ABE-878C-45F1E69841A5"}
 */
function clearForms(event){
	if (forms['loads_pcmk_0'] && forms['loads_pcmk_0'].elements['btn_Close']){
		forms['loads_pcmk_0'].elements['btn_Close'].visible = false;
	}
	forms.piecemark2.elements.tabs.setTabEnabledAt(2,false);
	forms.piecemark2.elements.tabs.setTabEnabledAt(3,false);
	forms.piecemark2.elements.tabs.setTabEnabledAt(4,false);
	forms.piecemark2.elements.tabs.setTabEnabledAt(5,false);
	forms.piecemark.clearLocalVars(event);
	elements.btn_Edit.visible = false;
}
