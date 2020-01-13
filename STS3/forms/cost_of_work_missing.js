/**
 * Description1, Cust COW Code, COW Qty, Description2, Length-Char, Piecemark, Sheet
 * show by piecemark
 * show by sheet number
 * refresh to show different
 */
/**
 * @type {Number}
 * 
 *
 * @properties={typeid:35,uuid:"BE852006-EF55-462E-8C79-3E11B430F6EF",variableType:4}
 */
var vShowByPiecemark = 0;
/**
 * @type {Number}
 * @properties={typeid:35,uuid:"5D93E032-0996-4DEA-A4C9-F358FCD952DE",variableType:4}
 */
var vShowBySheet = 0;
/**
 * @properties={typeid:35,uuid:"01B82A4E-EA66-4026-9715-426E9D844106",variableType:-4}
 */
var sheetQuery = null;
/**
 * @properties={typeid:24,uuid:"D9425B71-A4D4-4A6E-89D2-E0F2106C9B55"}
 */
function getQuery(){
	databaseManager.getFoundSetCount(foundset);
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"64859050-196D-4F03-A116-1F13CB60FEAC"}
 */
function onShow(firstShow, event) {
	if (foundset.getSize() == 0 || forms.cost_of_work.jobchangeM){
		forms.cost_of_work.jobchangeM = false;
	}
	if (firstShow){
		vShowByPiecemark = 0;
		vShowBySheet = 0;		
		onActionRefresh(event);
		scopes.jobs.tablePrefsLoad('cost_of_work_int');
	} else {
		onActionRefresh(event);		
	}
	return _super.onShow(firstShow, event)
}
/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"21CDE48C-7E67-4103-A26B-57502A2B1A82"}
 * @SuppressWarnings(wrongparameters)
 */
function refreshFoundset(event){
	null;
	databaseManager.revertEditedRecords(foundset);
	foundset.clear();
	var pcmkVis = (vShowByPiecemark == 1);
	var sheetVis = (vShowBySheet == 1);
	forms.cost_of_work_misslist.elements.piecemark.visible = pcmkVis;
	forms.cost_of_work_misslist.elements.item_length.visible = pcmkVis;
	forms.cost_of_work_misslist.elements.sheet_number.visible = sheetVis;
	application.updateUI();
	var result = null;
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q =  databaseManager.createSelect("db:/stsservoy/sheets");
	q.result.add(q.columns.sheet_id);
	q.where.add(q.columns.job_id.eq(globals.vJobIDXref.toString()));
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.delete_flag.isNull);
	//application.output('Job ID '+globals.vJobIDXref);
	sheetQuery = q;

	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var m =  databaseManager.createSelect('db:/stsservoy/piecemarks');
	m.result.distinct = true;
	m.result.add(m.columns.piecemark_id.min);
	m.result.add(m.columns.material);
	//m.result.add(m.columns.cost_of_work_code);
	if (pcmkVis){m.result.add(m.columns.piecemark)}
	if (sheetVis){m.result.add(m.columns.sheet_id)}
	m.where.add(m.columns.sheet_id.isin(q))
	m.where.add(m.columns.delete_flag.isNull)
	m.where.add(
		m.or.add(m.columns.cost_of_work_code.isNull).add(m.columns.cost_of_work_code.eq(''))
		);
	m.groupBy.add(m.columns.material);
	//m.groupBy.add(m.columns.cost_of_work_code);
	if (pcmkVis){m.groupBy.add(m.columns.piecemark)}
	if (sheetVis){m.groupBy.add(m.columns.sheet_id)}
	result = databaseManager.getDataSetByQuery(m,-1);
	//result = databaseManager.getFoundSet(m);
	foundset.loadRecords(result);

	if (pcmkVis){
		foundset.sort('material asc,piecemark asc');
	} else if (sheetVis){
		foundset.sort('material asc,sheet_id asc');
	} else if (sheetVis && pcmkVis){
		foundset.sort('material asc,piecemark asc,sheet_id asc')
	} else {
		foundset.sort('material asc');
	}
	forms.cost_of_work_misslist.elements.piecemark.visible = pcmkVis;
	forms.cost_of_work_misslist.elements.item_length.visible = pcmkVis;
	forms.cost_of_work_misslist.elements.sheet_number.visible = sheetVis;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5ABF695A-F0ED-4A56-A7DA-626A54A53BE9"}
 */
function onActionRefresh(event) {
	refreshFoundset(event);
	forms.cost_of_work_existing.onActionRefresh(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E4EB056-903A-4287-8680-42D541140C50"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionApply(event) {
	/**
	 * set all non-null, non-blank criteria for each selected field
	 * if (pcmk) then set all with that piecemark text
	 * if (sheet) then set all with that sheet_id
	 * if (pcmk AND sheet) then set all with that piecemark and sheet_id
	 */
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.applying.changes'),false);
	controller.enabled = false;
	var pcmk = (vShowByPiecemark == 1);
	var sheet = (vShowBySheet == 1);
	var fs = forms.cost_of_work_misslist.foundset;
	var count = fs.getSize();
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var rec = null;
	while (rec = fs.getRecord(count)){
		count = fs.getSize()+1;
	}
	count = fs.getSize();
	var selectPcmk = [];
	var selectSheet = [];
	var selectMaterial = [];
	var selectCowCode = [];
	for (var index = count;index > 0;index--){
		//controller.setSelectedIndex(index);
		rec = fs.getRecord(index);
		if (!rec.freeField){continue}
		selectMaterial.push(rec.material);
		selectCowCode.push(rec.freeField);
		selectSheet.push(rec.sheet_id.toString());
		selectPcmk.push(rec.piecemark);
	}
	var vmaterial = '';
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.applying.changes'),false);
	while (vmaterial = selectMaterial.pop()){
		//controller.setSelectedIndex(index);
		//application.output(controller.getMaxRecordIndex())
		//var vCowCode = cowSet[index];
		//if (vCowCode == "" || vCowCode == null){continue}
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.applying.changes'),false);
		var vCowCode = selectCowCode.pop();
		var vSheetNum = selectSheet.pop();
		var vPiecemark = selectPcmk.pop();
		var vMaterial = vmaterial;
	    //application.output(index+' '+vMaterial+' '+vPiecemark+' '+vSheetNum+' '+vCowCode);
		/** @type {QBSelect<db:/stsservoy/piecemarks>} */
		var m =  databaseManager.createSelect('db:/stsservoy/piecemarks');
		//m.result.distinct = true;
		m.result.add(m.columns.piecemark_id);
		m.result.add(m.columns.cost_of_work_code);
		m.where.add(m.and
				.add(m.columns.delete_flag.isNull)
				.add(m.columns.cost_of_work_code.isNull)
				.add(m.columns.tenant_uuid.eq(globals.session.tenant_uuid))
				.add(m.columns.material.eq(vMaterial))
				.add(m.columns.sheet_id.isin(sheetQuery))
			);
		if (pcmk){m.where.add(m.columns.piecemark.eq(vPiecemark))}
		if (sheet){
			m.where.add(m.columns.sheet_id.eq(vSheetNum.toString()));
		}
		var result = databaseManager.getDataSetByQuery(m,-1);
		var fs = null;
		fs = databaseManager.getFoundSet(m);
		var fsUpdater = databaseManager.getFoundSetUpdater(fs);
		fsUpdater.setColumn('cost_of_work_code',vCowCode);
		fsUpdater.performUpdate();
	}
	databaseManager.saveData(fs);
	scopes.jobs.warningsX(event);
	onActionRefresh(event);
	controller.enabled = true;
	globals.permissionsCacheHit(event,null);
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"463F618A-D268-43A9-B1FB-A52F7319C354"}
 */
function onRecordSelection(event) {
	return _super.onRecordSelection(event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"85F662E9-4BE5-41B9-9A3E-0AD37A355B9D"}
 */
function onActionClose(event){
	databaseManager.revertEditedRecords(foundset);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1E484773-C644-4F7E-9EF0-EF916DFD097D"}
 */
function onActionMuliSelect(event) {
	var cows = application.getValueListArray('stsvl_cowxref_codes_by_job');
	var codeList = new Array();
	for (var code in cows){
		codeList.push(cows[code]);
	}
	var coded = plugins.dialogs.showSelectDialog(i18n.getI18NMessage('sts.txt.cow.select.code'),
		i18n.getI18NMessage('sts.txt.cow.select.code'),
		codeList);
	var fs = forms.cost_of_work_misslist.foundset;
	var recIndexes = fs.getSelectedIndexes();
	for (var index = 0;index < recIndexes.length;index++){
		/** @type {JSRecord<db:/stsservoy/piecemarks>} */
		var rec = fs.getRecord(recIndexes[index]);
		rec.freeField = coded;
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"8EE56587-50A2-43A3-8A1C-0A7B51B00108"}
 */
function showDetail(event){
	
	//var  detail = forms['cost_of_work_missing'].vShowDetail;
	//forms['cost_of_work_existing'].vShowByPiecemark = detail;
	//forms['cost_of_work_existing'].vShowBySheet = detail;
}
