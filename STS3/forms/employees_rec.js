/**
 * @properties={typeid:35,uuid:"B9C2E133-CC82-42F4-A013-6DD7B50CB6D6",variableType:-4}
 */
var currentRecord = null;
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E76A0C5-1857-4089-8E25-97D995FC0B4A"}
 */
function onActionAdd(event) {
	var formRev = scopes.globals.getInstanceForm(event);
	controller.newRecord();
	tenant_uuid = globals.session.tenant_uuid;
	application.updateUI();
	forms["employee_specs"+formRev].onEdit(event,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F7DC238-3B8B-4803-AA21-E9786FD009B1"}
 */
function onActionRefresh(event) {
	//foundset.loadAllRecords();
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DF5ADCC5-1B09-4773-9D0C-0350BA5ECDE1"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		createEmpList(event);
		scopes.jobs.formPermissions(event,false);
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"11BCB692-3238-403D-B777-005EEDB63E08"}
 * @AllowToRunInFind
 */
function createEmpList(event){
	var instance = globals.getInstanceForm(event);
	scopes.jobs.createEmpAssocList(event);
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var dv = databaseManager.createSelect('db:/stsservoy/associations');
	dv.result.add(dv.columns.association_uuid);
	dv.result.add(dv.columns.association_name);
	dv.where.add(dv.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	dv.where.add(dv.columns.delete_flag.isNull);
	var DV = databaseManager.getFoundSet(dv);
	/** @type {JSDataSet<association_name:String,association_uuid:String>} */
	var rec = null; var idx = 1; var divIds = []; 
	/** @type {Array} */
	var divNames = []; var divRealNames = [];
	while (rec = DV.getRecord(idx++)){
		divIds.push(rec.association_uuid);
		divNames.push(rec.association_name.replace(/ /g,'').toLowerCase());
		divRealNames.push(rec.association_name);
	}
	if (!forms['employees_lstB'+instance]){
		var lstForm = solutionModel.cloneForm('employees_lstB'+instance,solutionModel.getForm('employees_lst'));
	} else {
		lstForm = solutionModel.getForm('employees_lstB'+instance);
	}
	lstForm.dataSource = 'mem:employeeDivs';
	lstForm.onRender = lstForm.newMethod('function onRender(event){scopes.jobs.onRenderSetLogical(event)}');
	var L = databaseManager.getFoundSet('mem:employeeDivs');
	L.loadRecords();
	var totalWidth = 0;var height = 20;
	var table = databaseManager.getTable(L);
	var columns = table.getColumnNames();
	for (idx = 0;idx < columns.length;idx++){
		var dataProvName = columns[idx];
		if (application.isInDeveloper()){application.output('column name '+dataProvName)}
		var dataProv = table.getColumn(columns[idx]).getDataProviderID();
		if (dataProv.search('sv_') != -1){continue}
		if (dataProv.search('_id') != -1){continue}
		if (dataProvName.search('_') == -1){
			var width = 10;
			var idxN = divNames.indexOf(dataProvName);
			/** @type {String} */
			var tTip = divRealNames[idxN];
		} else {
			if (dataProvName.search('employee_lastname') != -1){tTip = i18n.getI18NMessage('table.employee.employee_lastname');width = 40;}
			if (dataProvName.search('employee_number') != -1){tTip = i18n.getI18NMessage('table.employee.employee_number');width = 35;}
			if (dataProvName.search('employee_firstname') != -1){tTip = i18n.getI18NMessage('table.employee.employee_firstname');width = 12}
			if (dataProvName.search('association_name') != -1){tTip = i18n.getI18NMessage('table.employee.association.name');width = 20}
		}
		//lstForm.newLabel(txt,x,y,width,height)
		var lbl = lstForm.newLabel(tTip,totalWidth,0,width,height);
		lbl.anchors =  SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
		lbl.labelFor = dataProvName;
		lbl.toolTipText = tTip;
		lbl.enabled = true;
		lbl.showClick = true;
		lbl.showFocus = true;
		lbl.transparent = false;
		lbl.styleClass = 'sts_one';
		if (dataProvName.search('_') == -1){
			var fld2 = lstForm.newCheck(dataProv,totalWidth,height,width,height);
		} else {
			fld2 = lstForm.newTextField(dataProv,totalWidth,height,width,height)
		}
		fld2.anchors = lbl.anchors;
		fld2.name = dataProvName;
		totalWidth = totalWidth*1 + fld2.width*1;
		fld2.dataProviderID = dataProv;
		fld2.editable = false;
		fld2.transparent = true;
		fld2.styleClass = 'sts_one';
	}
	elements.tabless.removeAllTabs();
	elements.tabless.addTab('employees_lstB'+instance);
	
	forms['employees_lstB'+instance].foundset.loadRecords(L);
	null;
}
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"57F51106-71C8-4F97-A3EF-6BE9C14DA5F6"}
 */
function onHide(event) {
	elements.tabless.removeAllTabs();
	var instance = globals.getInstanceForm(event);
	scopes.jobs.removeFormHist('employees_lstB'+instance);
	return true
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"9987B705-FB90-4B3A-AA59-AFA6E5CF413F"}
 */
function refreshUsers(event){
	onHide(event);
	createEmpList(event);
}