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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1ACDDE9F-EA2B-480B-86CB-BA1A20CEADCC"}
 */
function onActionMarked(event) {
	var custCowToFormula = [];
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
	var result = databaseManager.getDataSetByQuery(m,-1);
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
 */
function onActionCalcCost(event) {
	var skipShipped = (vKeepCostsShipped == 1);
	var skipCostsExisting = (vKeepExistingCosts == 1);
	var shippedMarks = [];
	var lastIndex = controller.getSelectedIndex();
	var count = foundset.getSize();
	if (skipShipped){
		//get list of idfile_id's by checking idfiles.id_status
		for (var index = 1;index <= count;index++){
			controller.setSelectedIndex(index);
			if (id_status.toUpperCase().search('SHIP') != -1){
				shippedMarks.push(idfile_id);
			}
		}
	}
	// Collect piecemark_id for all piecemarks to set
	var custCowToFormula = [];
	for (var index = 1;index <= count;index++){
		if (skipCostsExisting && cost_each == 0){continue}
		if (skipShipped && shippedMarks.length > 0 && shippedMarks.indexOf(piecemark_id) == -1){continue}
		controller.setSelectedIndex(index);
		var cow = st2_idfiles_to_piecemarks.cost_of_work_code;
		if (custCowToFormula.indexOf(cow+'value') == -1){
			var valueFormula = st2_idfiles_to_piecemarks.sts_piecemark_cowxref.sts_cowxref_cowcode.sts_cowcode_uomtype.uom_to_get_value;
			var weightFormula = st2_idfiles_to_piecemarks.sts_piecemark_cowxref.sts_cowxref_cowcode.sts_cowcode_uomtype.uom_to_get_wt;
			custCowToFormula[cow+'weight'] = weightFormula;
			custCowToFormula[cow+'value'] = valueFormula;
			custCowToFormula[cow+'money'] = st2_idfiles_to_piecemarks.sts_piecemark_cowxref.uom_dollar;
		}
		var cowMoney = custCowToFormula[cow+'money'];
		var formHalves = custCowToFormula[cow+'value'].split("=");
		var uom = formHalves[0].trim().split("/")[1];
		var formula = formHalves[1].trim();
		//application.output('material '+st2_idfiles_to_piecemarks.material+' cow '+cow+' uom '+uom+' formulas '+formula);
		st2_idfiles_to_piecemarks.piecemark_unit_of_measure = uom;
		st2_idfiles_to_piecemarks.piecemark_uom_dollars = cowMoney;
		st2_idfiles_to_piecemarks.cost_each; // is this item's cost
		st2_idfiles_to_piecemarks.cost_of_work_quantity; // is the weight divided by UOM
		var length = st2_idfiles_to_piecemarks.item_length;
		var width = st2_idfiles_to_piecemarks.item_width;
		var weight = st2_idfiles_to_piecemarks.item_weight;
		var quantity = 1; //resolve this later
		var uomFormula = scopes.jobs.convertUomToFormula(formula,cowMoney,quantity,length,width,weight)
		var costEach = eval(uomFormula);
		st2_idfiles_to_piecemarks.cost_each = costEach;
		st2_idfiles_to_piecemarks.cost_of_work_quantity = (cowMoney == 0) ? 0 : costEach/cowMoney;
		//application.output(eval(uomFormula));
	}
	controller.setSelectedIndex(lastIndex);
}
/**
 * @properties={typeid:24,uuid:"81A65EBC-3BDE-4920-B2C7-07D52B7FA685"}
 */
function calcCows(){
	/**
	 * Calculate costs
	 * 		
	 * fsUpdater.setColumn('cost_of_work_code',null);
		fsUpdater.setColumn('cost_each',null);
		fsUpdater.setColumn('piecemark_unit_of_measure',null);
		fsUpdater.setColumn('piecemark_uom_dollars',null);
		fsUpdater.setColumn('cost_of_work_quantity',null);
	 */
		var width = wdthin/12;
		var length = lgthin/12;
		var sqft = width * length		// calculate the squate feet of the item
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3128BA95-3BFC-41FC-BF66-1AB329F3F670"}
 */
function onActionRefresh(event) {
	var detail = (vShowDetail == 1);
	forms.cost_of_work_existlist.elements.item_weight.visible = detail;
	forms.cost_of_work_existlist.elements.item_length.visible = detail;
	forms.cost_of_work_existlist.elements.item_width.visible = detail;
	forms.cost_of_work_existlist.elements.piecemark.visible = detail;
	forms.cost_of_work_existlist.elements.length_char.visible = detail;
	//forms.cost_of_work_existlist.elements. .visible = detail;
	
	var count = foundset.getSize();
	for (var index = count;index > 0;index--){
		controller.setSelectedIndex(index);
		freeCheck = 0;
	}
	//var localCode = "";
	databaseManager.revertEditedRecords(foundset);
	var result = null;
	/** @type {QBSelect<db:/stsservoy/sheets>} */
	var q =  databaseManager.createSelect("db:/stsservoy/sheets");
	q.result.add(q.columns.sheet_id);
	q.where.add(q.and
				.add(q.columns.job_id.eq(globals.vJobIDXref))
				.add(q.columns.tenant_uuid.eq(globals.secCurrentTenantID))
				.add(q.columns.delete_flag.isNull));

	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var m =  databaseManager.createSelect('db:/stsservoy/piecemarks');
	//m.result.distinct = true;
	m.result.add(m.columns.piecemark_id);
	m.where.add(m.and
			.add(m.columns.sheet_id.isin(q))
			.add(m.columns.delete_flag.isNull)
			.add(m.columns.cost_of_work_code.not.isNull)
		);

	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var i = databaseManager.createSelect('db:/stsservoy/idfiles');
	var tempPcmksArray = [];
	var tempResult = databaseManager.getDataSetByQuery(m,-1);
	for (var index = 1;index <= count;index++){
		tempResult.rowIndex = index;
		tempPcmksArray.push(tempResult.piecemark_id);
	}
	i.result.add(i.columns.idfile_id);
	i.where.add(i.columns.piecemark_id.isin(m));
	var rezz = databaseManager.getDataSetByQuery(i,-1);
	
	result = databaseManager.getDataSetByQuery(m,-1);
	foundset.loadRecords(rezz);
	count = foundset.getSize();
	var calced = [];
	for (index = 1;index <= count;index++){
		var record = foundset.getRecord(index);
		var length = record.st2_idfiles_to_piecemarks.item_length;
		//var impLength = "";
		if (calced.indexOf(length) == -1){
			calced[length] = scopes.jobs.decToFeet(length);
		}
		if (length != 0) {
			record.st2_idfiles_to_piecemarks.freeField = calced[length];
		}
	}
	scopes.jobs.tablePrefsLoad('cost_of_work_existing');
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
