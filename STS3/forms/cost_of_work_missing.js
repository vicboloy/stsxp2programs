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
		onActionRefresh(event);
		forms.cost_of_work.jobchangeM = false;
	}
	scopes.jobs.loadTablePrefs('cost_of_work_int');
	return _super.onShow(firstShow, event)
}
/**
 * TODO generated, please specify type and doc for the params
 * @param pcmk
 * @param sheet
 *
 * @properties={typeid:24,uuid:"21CDE48C-7E67-4103-A26B-57502A2B1A82"}
 */
function refreshFoundset(pcmk, sheet){
	databaseManager.revertEditedRecords(foundset);
	forms.cost_of_work_misslist.elements.piecemark.visible = pcmk;
	forms.cost_of_work_misslist.elements.sheet_number.visible = sheet;
	var result = null;
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q =  databaseManager.createSelect("db:/stsservoy/sheets");
	q.result.add(q.columns.sheet_id);
	q.where.add(q.and
				.add(q.columns.job_id.eq(globals.vJobIDXref))
				.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
				.add(q.columns.delete_flag.isNull));
	//application.output('Job ID '+globals.vJobIDXref);
	sheetQuery = q;

	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var m =  databaseManager.createSelect('db:/stsservoy/piecemarks');
	m.result.distinct = true;
	m.result.add(m.columns.piecemark_id.min);
	m.result.add(m.columns.material);
	if (pcmk){m.result.add(m.columns.piecemark)}
	if (sheet){m.result.add(m.columns.sheet_id)}
	m.where.add(m.and
			.add(m.columns.sheet_id.isin(q))
			.add(m.columns.delete_flag.isNull)
			.add(m.columns.cost_of_work_code.isNull)
		);
	m.groupBy.add(m.columns.material);
	if (pcmk){m.groupBy.add(m.columns.piecemark)}
	if (sheet){m.groupBy.add(m.columns.sheet_id)}
	result = databaseManager.getDataSetByQuery(m,-1);
	foundset.loadRecords(result);

	if (pcmk){
		foundset.sort('material asc,piecemark asc');
	} else if (sheet){
		foundset.sort('material asc,sheet_id asc');
	} else if (sheet && pcmk){
		foundset.sort('material asc,piecemark asc,sheet_id asc')
	} else {
		foundset.sort('material asc');
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5ABF695A-F0ED-4A56-A7DA-626A54A53BE9"}
 */
function onActionRefresh(event) {
	var recCount = foundset.getSize();
	for (var index = 1;index <= recCount;index++){
		controller.setSelectedIndex(index);
		freeField = "";
	}
	refreshFoundset((vShowByPiecemark == 1), (vShowBySheet == 1));
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E4EB056-903A-4287-8680-42D541140C50"}
 */
function onActionApply(event) {
	/**
	 * set all non-null, non-blank criteria for each selected field
	 * if (pcmk) then set all with that piecemark text
	 * if (sheet) then set all with that piecemark
	 * if (pcmk AND sheet) then set all with that piecemark and sheet_id
	 */
	var pcmk = (vShowByPiecemark == 1);
	var sheet = (vShowBySheet == 1);
	var count = foundset.getSize();
	var cowSet = [];
	for (var index = count;index > 0;index--){
		controller.setSelectedIndex(index);
		cowSet[index]=freeField;
	}
	for (var index = count;index > 0;index--){
		controller.setSelectedIndex(index);
		application.output(controller.getMaxRecordIndex())
		var vCowCode = cowSet[index];
		if (vCowCode == "" || vCowCode == null){continue}
		var vSheetNum = sheet_id;
		var vPiecemark = piecemark;
		var vMaterial = material;
	    application.output(index+' '+vMaterial+' '+vPiecemark+' '+vSheetNum+' '+vCowCode);
		/** @type {QBSelect<db:/stsservoy/piecemarks>} */
		var m =  databaseManager.createSelect('db:/stsservoy/piecemarks');
		//m.result.distinct = true;
		m.result.add(m.columns.piecemark_id);
		m.result.add(m.columns.cost_of_work_code);
		m.where.add(m.and
				.add(m.columns.delete_flag.isNull)
				.add(m.columns.cost_of_work_code.isNull)
				.add(m.columns.tenant_uuid.eq(globals.secCurrentTenantID))
				.add(m.columns.material.eq(vMaterial))
				.add(m.columns.sheet_id.isin(sheetQuery))
			);
		if (pcmk){m.where.add(m.columns.piecemark.eq(vPiecemark))}
		if (sheet){
			m.where.add(m.columns.sheet_id.eq(vSheetNum));
		}
		var result = databaseManager.getDataSetByQuery(m,-1);
		var fs = null;
		fs = databaseManager.getFoundSet(m);
		var fsUpdater = databaseManager.getFoundSetUpdater(fs);
		fsUpdater.setColumn('cost_of_work_code',vCowCode);
		fsUpdater.performUpdate();
		application.output(result);
		onActionRefresh(event);
	}
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