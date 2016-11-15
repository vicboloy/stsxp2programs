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
	var cowUnset = [];
	for (var index = count;index > 0;index--){
		controller.setSelectedIndex(index);
		//cowUnset[index]=freeCheck;
		if (freeCheck == 1 && cowUnset.indexOf(piecemark_id) == -1) {cowUnset.push(piecemark_id)}
	}
	controller.setSelectedIndex(index);
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
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
	var skipShipped = (vKeepCostsShipped == 1);
	var skipCostsExisting = (vKeepExistingCosts == 1);
	
	var piecemarkArray = [];
	var count = foundset.getSize();
	for (var index = 0;index <= count;index++){
		controller.setSelectedIndex(index);
		if (skipCostsExisting && costEach != 0){continue}
		piecemarkArray.push(piecemark_id);
	}
	
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i = databaseManager.createSelect('db:/stsservoy/idfiles');
	i.result.add(i.columns.idfile_id);
	i.where.add(i.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	i.where.add(i.columns.delete_flag.isNull);
	i.where.add(i.columns.piecemark_id.isin(piecemarkArray));
	if (skipShipped){
		i.where.add(i.columns.ship_load_id.isNull);
	}
	var I = databaseManager.getFoundSet(i);
	
	var custCowToFormula = [];
	index = 1;
	while (index <= I.getSize()){
		var rec = I.getRecord(index);
		var idx = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(idx);
		var cow = cost_of_work_code;
		if (custCowToFormula.indexOf(cow+'value') == -1){
			var valueFormula = rec.sts_piecemark_cowxref.sts_cowxref_cowcode.sts_cowcode_uomtype.uom_to_get_value;
			var weightFormula = sts_piecemark_cowxref.sts_cowxref_cowcode.sts_cowcode_uomtype.uom_to_get_wt;
			custCowToFormula[cow+'weight'] = weightFormula;
			custCowToFormula[cow+'value'] = valueFormula;
			custCowToFormula[cow+'money'] = sts_piecemark_cowxref.uom_dollar;
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
		var length = item_length;
		var width = item_width;
		var weight = item_weight;
		var quantity = 1; //resolve this later
		var uomFormula = scopes.jobs.convertUomToFormula(formula,cowMoney,quantity,length,width,weight)
		var costEach = eval(uomFormula);
		cost_each = costEach;
		cost_of_work_quantity = (cowMoney == 0) ? 0 : costEach/cowMoney;
	}
	index++;
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
	while (idx <= fs.getSize()){
		/** @type {JSRecord<db:/stsservoy/cow_xref>} */
		var rec = fs.getRecord(idx);
		if (!rec.cust_cow_code){continue}
		codes.push(rec.cust_cow_code);
		idx++;
	}
	
	databaseManager.revertEditedRecords(foundset);
	var showPcmk = (forms.cost_of_work_missing.vShowByPiecemark == 1);
	var showSheet = (forms.cost_of_work_missing.vShowBySheet == 1);
	var detail = (vShowDetail == 1);
	forms.cost_of_work_existlist.elements.item_weight.visible = detail;
	forms.cost_of_work_existlist.elements.item_length.visible = detail;
	forms.cost_of_work_existlist.elements.item_width.visible = detail;
	forms.cost_of_work_existlist.elements.piecemark.visible = showPcmk;
	forms.cost_of_work_existlist.elements.length_char.visible = detail;
	forms.cost_of_work_existlist.elements.sheet_number.visible = showSheet;
	//forms.cost_of_work_existlist.elements. .visible = detail;

	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q =  databaseManager.createSelect("db:/stsservoy/sheets");
	q.result.add(q.columns.sheet_id);
	q.where.add(q.columns.job_id.eq(globals.vJobIDXref));
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	q.where.add(q.columns.delete_flag.isNull);

	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var m =  databaseManager.createSelect('db:/stsservoy/piecemarks');
	m.result.distinct = true;
	m.result.add(m.columns.piecemark_id);
	m.result.add(m.columns.material);
	m.where.add(m.columns.cost_of_work_code.isin(codes));
	//if (showPcmk){m.result.add(m.columns.piecemark)}
	//if (showSheet){m.result.add(m.columns.sheet_id)}
	m.where.add(m.columns.sheet_id.isin(q));
	m.where.add(m.columns.delete_flag.isNull)
	if (vKeepExistingCosts){
		m.where.add(m.columns.cost_each.not.eq(0));
	}
	m.groupBy.add(m.columns.material);
	m.groupBy.add(m.columns.piecemark_id);
	//if (showPcmk){m.groupBy.add(m.columns.piecemark)}
	//if (showSheet){m.groupBy.add(m.columns.sheet_id)}
	/** @type {QBJoin<db:/stsservoy/idfiles>} */
	var i = m.joins.add('db:/stsservoy/idfiles');
	i.on.add(i.columns.piecemark_id.eq(m.columns.piecemark_id));
	if (vKeepCostsShipped){
		m.where.add(i.columns.ship_load_id.isNull);//this is not shipped
	}
	var result = databaseManager.getDataSetByQuery(m,-1);
	foundset.loadRecords(result);
	if (application.isInDeveloper()){application.output('resultfs '+foundset.getSize())}

	if (showPcmk){
		foundset.sort('material asc,piecemark asc');
	} else if (showSheet){
		foundset.sort('material asc,sheet_id asc');
	} else if (showPcmk && showSheet){
		foundset.sort('material asc,piecemark asc,sheet_id asc')
	} else {
		foundset.sort('material asc');
	}
	var test = foundset.getCurrentSort();
	application.output(test);

	var count = foundset.getSize();
	var calced = [];
	for (var index = 1;index <= count;index++){
		var record = foundset.getRecord(index);
		var length = record.item_length;
		//var impLength = "";
		if (calced.indexOf(length) == -1){
			calced[length] = scopes.jobs.decToFeet(length);
		}
		if (length != 0) {
			record.freeField = calced[length];
		}
	}
	scopes.jobs.tablePrefsLoad('cost_of_work_existing');
	forms.cost_of_work_existlist.elements.piecemark.visible = showPcmk;
	forms.cost_of_work_existlist.elements.sheet_number.visible = showSheet;
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
		onActionRefresh(event);
	}
	return _super.onShow(firstShow, event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"4CC974BE-486D-4C62-B2D7-50964875341B"}
 */
function onActionClose(event){
	databaseManager.revertEditedRecords(foundset);
}