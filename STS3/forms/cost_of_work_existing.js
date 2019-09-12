/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"46FE69E0-DA20-4A6E-A212-08AE076D30B4",variableType:4}
 */
var vKeepExistingCosts = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"996ABD8F-377D-44AD-86DD-8E119CBB4CF3",variableType:4}
 */
var vKeepCostsShipped = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33DB09B1-B534-4051-BEE0-69171A6C802F",variableType:4}
 */
var vShowDetail = 0;
/**
 * @properties={typeid:35,uuid:"0F7D1E65-2614-4438-B95A-B9F401380CCE",variableType:-4}
 */
var nullo = null;
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1ACDDE9F-EA2B-480B-86CB-BA1A20CEADCC"}
 */
function onActionMarked(event) {
	//var custCowToFormula = [];
	var count = foundset.getSize();
	if (count == 0){return}
	var fs = foundset;
	var selectedIndexes = fs.getSelectedIndexes();
	if (selectedIndexes.length > 1){
		globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1270'),i18n.getI18NMessage('1270'));
		for (var idx = 0;idx < selectedIndexes.length;idx++){
			fs.setSelectedIndex(selectedIndexes[idx]);
			if (!fs.cost_of_work_code){continue}
			fs.freeCheck2 = 1;
		}
		return;
	}
	var reply = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.cow.reset.calcs'),i18n.getI18NMessage('sts.txt.cow.reset.calcs'),i18n.getI18NMessage('sts.btn.no'),i18n.getI18NMessage('sts.btn.yes'));
	if (reply == i18n.getI18NMessage('sts.btn.no')){return}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.applying.changes'),false);
	var cowUnset = [];
	var pcmk = (forms.cost_of_work_missing.vShowByPiecemark == 1);
	var sheet = (forms.cost_of_work_missing.vShowBySheet == 1);
	var sheetQuery = forms.cost_of_work_missing.sheetQuery;
	
	var count = foundset.getSize();
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var rec = null;
	while (rec = foundset.getRecord(count)){
		count = foundset.getSize()+1;
	}
	count = foundset.getSize();
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.applying.changes'),false);
	var cowSet = [];
	var selectPcmk = [];
	var selectSheet = [];
	var selectMaterial = [];
	var selectCowCode = [];
	for (var index = count;index > 0;index--){
		//controller.setSelectedIndex(index);
		rec = foundset.getRecord(index);
		if (rec.freeCheck2 == 0){continue}
		selectMaterial.push(rec.material);
		selectCowCode.push(rec.freeField);
		selectSheet.push(rec.sheet_id.toString());
		selectPcmk.push(rec.piecemark);
	}

	var vmaterial = '';
	while (vmaterial = selectMaterial.pop()){
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.applying.changes'),false);
		//rec = foundset.getRecord(index);
		//cowUnset[index]=freeCheck;
		//if (true && freeCheck2 == 1) {
			//if (vCowCode == "" || vCowCode == null){continue}
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
//					.add(m.columns.cost_of_work_code.not.isNull)
//					.add(m.columns.cow_xref_id.not.isNull)
					.add(m.columns.tenant_uuid.eq(globals.session.tenant_uuid))
					.add(m.columns.material.eq(vMaterial))
//					.add(m.columns.sheet_id.isin(sheetQuery))
				);
			if (pcmk){m.where.add(m.columns.piecemark.eq(vPiecemark))}
			if (sheet){
				m.where.add(m.columns.sheet_id.eq(vSheetNum.toString()));
			}
			var result = databaseManager.getDataSetByQuery(m,-1);
			var fs = null;
			fs = databaseManager.getFoundSet(m);
			var fsUpdater = databaseManager.getFoundSetUpdater(fs);
			fsUpdater.setColumn('cost_of_work_code',null);
			fsUpdater.setColumn('cost_each',null);
			fsUpdater.setColumn('piecemark_unit_of_measure',null);
			fsUpdater.setColumn('piecemark_uom_dollars',null);
			fsUpdater.setColumn('cost_of_work_quantity',null);
			fsUpdater.setColumn('cow_xref_id',null);
			fsUpdater.performUpdate();
		//}
	}
	/** controller.setSelectedIndex(index);
	/ ** @type {QBSelect<db:/stsservoy/piecemarks>} * /
	var m =  databaseManager.createSelect('db:/stsservoy/piecemarks');
	m.result.add(m.columns.piecemark_id);
	m.result.add(m.columns.cost_of_work_code);
	m.where.add(m.columns.piecemark_id.isin(cowUnset));
	//var result = databaseManager.getDataSetByQuery(m,-1);
	var fs = null;
	fs = databaseManager.getFoundSet(m);
	var fsUpdater = databaseManager.getFoundSetUpdater(fs);
	// update cowcode for each piecemark, returning code, cost each, uom, uom dollars, work quantity
	fsUpdater.setColumn('cost_of_work_code',null);
	fsUpdater.setColumn('cost_each',null);
	fsUpdater.setColumn('piecemark_unit_of_measure',null);
	fsUpdater.setColumn('piecemark_uom_dollars',null);
	fsUpdater.setColumn('cost_of_work_quantity',null);
	fsUpdater.performUpdate();
	*/
	scopes.jobs.warningsX(event);
	onActionRefresh(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"64736B02-3306-4EDE-AF97-277164B7175E"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function onActionCalcCost(event) {
	var fs = forms.cost_of_work_existlist.foundset;
	var selectedIndexes = fs.getSelectedIndexes();
	if (selectedIndexes.length > 1){
		globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1270'),i18n.getI18NMessage('1270'));
		for (var idx = 0;idx < selectedIndexes.length;idx++){
			fs.setSelectedIndex(selectedIndexes[idx]);
			if (!fs.cost_of_work_code){continue}
			fs.freeCheck2 = 1;
		}
		return;
	}
	var skipShipped = (vKeepCostsShipped == 1);
	var skipCostsExisting = (vKeepExistingCosts == 1);
	
	var piecemarkArray = [];
	var count = foundset.getSize();
	for (var index = 1;index <= count;index++){
		var localRec = foundset.getRecord(index);
		if (localRec.freeCheck2 != 1){continue}
		controller.setSelectedIndex(index);
		if (skipCostsExisting && costEach != 0){continue}
		piecemarkArray.push(localRec.piecemark_id.toString());
	}
	
	var skipEmpty = ['',null];
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i = databaseManager.createSelect('db:/stsservoy/idfiles');
	i.result.add(i.columns.idfile_id);
	i.where.add(i.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	i.where.add(i.columns.delete_flag.isNull);
	i.where.add(i.columns.piecemark_id.isin(piecemarkArray));
	if (skipShipped){
		i.where.add(i.columns.ship_load_id.not.isin(skipEmpty));
	}
	var I = databaseManager.getFoundSet(i);
	
	var custCowToFormula = [];
	var cowToxRef = [];
	/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
	var rec = null; index = 1;
	while (rec = I.getRecord(index++)){
		var idx = foundset.getRecordIndex(rec.sts_idfile_to_pcmks.getRecord(1));
		foundset.setSelectedIndex(idx);
		if (!cost_of_work_code){continue}
		var cow = cost_of_work_code;
		if (custCowToFormula.indexOf(cow+'value') == -1){
			var valueFormula = sts_piecemark_cowxref.sts_cowxref_cowcode.sts_cowcode_uomtype.uom_to_get_value;
			var weightFormula = sts_piecemark_cowxref.sts_cowxref_cowcode.sts_cowcode_uomtype.uom_to_get_wt;
			custCowToFormula[cow+'weight'] = weightFormula;
			custCowToFormula[cow+'value'] = valueFormula;
			custCowToFormula[cow+'money'] = sts_piecemark_cowxref.uom_dollar;
			cowToxRef[cow] = sts_piecemark_cowxref.cow_xref_id;
		}
		var cowMoney = custCowToFormula[cow+'money'];
		/** @type {String} */
		var formHalves = custCowToFormula[cow+'value'].split("=");
		var uom = formHalves[0].trim().split("/")[1];
		if (uom){
			var formula = formHalves[1].trim();
		} else {
			formula = "";
		}
		//application.output('material '+st2_idfiles_to_piecemarks.material+' cow '+cow+' uom '+uom+' formulas '+formula);
		piecemark_unit_of_measure = uom;
		piecemark_uom_dollars = cowMoney;
		cost_each; // is this item's cost
		cost_of_work_quantity; // is the weight divided by UOM
		if (forms['cost_of_work'].vJobMetric){
			var length = item_length;
			var width = item_width;
			var weight = item_weight;
		} else {
			length = item_length_in;
			weight = item_weight_lbs;
			width = item_width_in;
		}
		var quantity = 1; //resolve this later
		var uomFormula = scopes.jobs.convertUomToFormula(formula,cowMoney,quantity,length,width,weight)
		var costEach = eval(uomFormula);
		cost_each = costEach;
		cost_of_work_quantity = (cowMoney == 0) ? 0 : costEach/cowMoney;
		cow_xref_id = cowToxRef[cow];
	}
	//databaseManager.saveData(foundset);
	elements.btn_Save.visible = databaseManager.hasRecordChanges(foundset);

}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3128BA95-3BFC-41FC-BF66-1AB329F3F670"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionRefresh(event) {
	var idx = 1; var codes = [];
	var fs = forms.cost_of_work_category.foundset;
	/** @type {JSRecord<db:/stsservoy/cow_xref>} */
	var rec = null;
	while (rec = fs.getRecord(idx++)){
		if (!rec.cust_cow_code){continue}
		codes.push(rec.cust_cow_code);
	}
	
	databaseManager.revertEditedRecords(foundset);
	var showPcmk = (forms.cost_of_work_missing.vShowByPiecemark == 1);
	var showSheet = (forms.cost_of_work_missing.vShowBySheet == 1);
	forms.cost_of_work_existlist.elements.item_weight.visible = showPcmk;
	forms.cost_of_work_existlist.elements.length_char.visible = showPcmk;
	forms.cost_of_work_existlist.elements.item_width.visible = showPcmk;
	forms.cost_of_work_existlist.elements.piecemark.visible = showPcmk;
	forms.cost_of_work_existlist.elements.length_char.visible = showPcmk;
	forms.cost_of_work_existlist.elements.sheet_number.visible = showSheet;
	application.updateUI();
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q =  databaseManager.createSelect("db:/stsservoy/sheets");
	q.result.add(q.columns.sheet_id);
	q.where.add(q.columns.job_id.eq(globals.vJobIDXref.toString()));
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.delete_flag.isNull);

	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var m =  databaseManager.createSelect('db:/stsservoy/piecemarks');
	
	m.result.distinct = true;
	m.result.add(m.columns.piecemark_id.min);
	m.result.add(m.columns.material);
	m.result.add(m.columns.cost_of_work_code);
	//m.result.add('freeCheck2',0);
	if (showPcmk){m.result.add(m.columns.piecemark)}
	if (showSheet){m.result.add(m.columns.sheet_id)}
	///m.where.add(m.columns.cost_of_work_code.isin(codes));//20180903 disabled Show all codes and non-coded pcmks
	m.where.add(m.columns.sheet_id.isin(q));
	m.where.add(m.columns.delete_flag.isNull);
	
	
	var skipEmpty = ['',null];
	if (vKeepExistingCosts){m.where.add(m.columns.cost_each.not.eq(0))}
	m.groupBy.add(m.columns.material);
	m.groupBy.add(m.columns.cost_of_work_code);
	//m.groupBy.add(m.columns.piecemark_id);
	if (showPcmk){m.groupBy.add(m.columns.piecemark)}
	if (showSheet){m.groupBy.add(m.columns.sheet_id)}
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var i = m.joins.add('db:/stsservoy/idfiles');
	i.on.add(i.columns.piecemark_id.eq(m.columns.piecemark_id));
	if (!vKeepCostsShipped){m.where.add(i.columns.ship_load_id.not.isin(skipEmpty));}//this is not shipped
	
	var result = databaseManager.getDataSetByQuery(m,-1);
	foundset.loadRecords(result);
	if (application.isInDeveloper()){application.output('resultfs '+foundset.getSize())}

	if (showPcmk){
		foundset.sort('cost_of_work_code asc, material asc,piecemark asc');
	} else if (showSheet){
		foundset.sort('cost_of_work_code asc,material asc,sheet_id asc');
	} else if (showPcmk && showSheet){
		foundset.sort('cost_of_work_code asc,material asc,piecemark asc,sheet_id asc')
	} else {
		foundset.sort('cost_of_work_code asc,material asc');
	}
	var test = foundset.getCurrentSort();
	//application.output(test);

	var count = foundset.getSize();
	var calced = [];
	var record = null; var index = 1;
	while (record = foundset.getRecord(index++)){
		var length = record.item_length;
		//var impLength = "";
		if (calced.indexOf(length) == -1){
			calced[length] = scopes.jobs.decToFeet(length);
		}
		if (length != 0) {
			record.charLength = calced[length];
		}
		record.freeCheck2 = 0;
	}
	scopes.jobs.tablePrefsLoad('cost_of_work_existing');
	forms.cost_of_work_existlist.elements.item_weight.visible = showPcmk;
	forms.cost_of_work_existlist.elements.length_char.visible = showPcmk;
	forms.cost_of_work_existlist.elements.item_width.visible = showPcmk;
	forms.cost_of_work_existlist.elements.piecemark.visible = showPcmk;
	forms.cost_of_work_existlist.elements.length_char.visible = showPcmk;
	forms.cost_of_work_existlist.elements.sheet_number.visible = showSheet;
	application.updateUI();

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0286DA98-9CFD-4826-9A7F-8D5FB12D9924"}
 */
function onShow(firstShow, event) {
	if (foundset.getSize() == 0 || forms.cost_of_work.jobChangeE){
		forms.cost_of_work.jobChangeE = false;
		onActionClearChecks(event);
	}
	if (firstShow){
		//onActionRefresh(event);
		//foundset.setSelectedIndex(1);
		onActionRefresh(event);
		onActionClearChecks(event);
	}
	elements.btn_Save.visible = databaseManager.hasRecordChanges(foundset);
	//return _super.onShow(firstShow, event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"4CC974BE-486D-4C62-B2D7-50964875341B"}
 */
function onActionClose(event){
	databaseManager.revertEditedRecords(foundset);
	elements.btn_Save.visible = databaseManager.hasRecordChanges(foundset);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB17C0AA-5F0E-47C2-AC84-274AB1D51C96"}
 */
function onActionClearChecks(event) {
	var rec = null; var idx = 1;
	while (rec = foundset.getRecord(idx++)){
		rec.freeCheck2 = 0;
	}
	foundset.setSelectedIndex(1);
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5C544D22-4D0E-4258-A84C-8C9E36029997"}
 */
function onHide(event) {

	//return _super.onHide(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9FCE2196-04B7-4F9A-85C1-EBE39F6D0C24"}
 */
function onActionReload(event) {
	//var fs = forms.cost_of_work_existlist.foundset;
	databaseManager.revertEditedRecords(foundset);
	elements.btn_Save.visible = databaseManager.hasRecordChanges(foundset);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E1CA8CBA-A73A-41D1-97E0-E16AE76CA147"}
 */
function saveExistingChanges(event){
	databaseManager.saveData(foundset);
	elements.btn_Save.visible = databaseManager.hasRecordChanges(foundset);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E8028D55-1AAD-4DF3-952C-47AC35B816D0"}
 */
function onActionSave(event) {
	saveExistingChanges(event);
}

/**
 * Callback method form when editing is stopped, return false if the record fails to validate then the user cannot leave the record.
 *
 * @param {JSRecord<db:/stsservoy/piecemarks>} record record being saved
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6D049F52-A7D5-442C-9933-5783B9F09093"}
 */
function onRecordEditStop(record, event) {
	//return _super.onRecordEditStop(record, event)
}
