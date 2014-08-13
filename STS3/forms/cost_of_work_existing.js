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
	var count = foundset.getSize();
	var cowUnset = [];
	for (var index = count;index > 0;index--){
		controller.setSelectedIndex(index);
		cowUnset[index]=freeCheck;
		if (cowUnset[index]) {cowUnset.push(piecemark_id)}
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
		//get list of piecemarks by checking idfiles.id_status
		for (var index = 1;index <= count;index++){
			controller.setSelectedIndex(index);
			var idfileFS = sts_piecemarks_to_idfiles;
			var idfileCount = idfileFS.getSize();
			var unshipped = true;
			for (var index2 = 1;index2 <= idfileCount;index2++){
				var idRec = idfileFS.getRecord(index2);
				if (idRec.id_status.toUpperCase().search('SHIP') != -1){
					unshipped = false;
					break; //is at least one idfile status is not 
				}
			}
			if (!unshipped){shippedMarks.push(piecemark_id)}
		}
	}
	// Collect piecemark_id for all piecemarks to set
	for (var index = 1;index <= count;index++){
		if (skipCostsExisting && cost_each == 0){continue}
		if (skipShipped && shippedMarks.length > 0 && shippedMarks.indexOf(piecemark_id) == -1){continue}
		calcCows(true);
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
	result = databaseManager.getDataSetByQuery(m,-1);
	foundset.loadRecords(result);
	scopes.jobs.loadTablePrefs('cost_of_work_existing');
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
	//if (firstShow){
		onActionRefresh(event);
	//}
	return _super.onShow(firstShow, event)
}
