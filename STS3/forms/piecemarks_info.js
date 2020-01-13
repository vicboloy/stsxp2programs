
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E2FCBC0-C499-4307-A20E-9DED2809DF04"}
 */
function onShow(firstShow, event) {
	var fields = ['e_route_code_id','cost_of_work_code','cost_of_work_quantity','cost_each','remarks',
			'camber','product_type','subcategory','material_specification','rule_code',
			'fireproof_cubic_feet'];
	var fieldTabbing = [];
	for (var idx = 0;idx < fields.length;idx++){
		fieldTabbing.push(elements[fields[idx]]);
	}
	controller.setTabSequence(fieldTabbing);
}
/**
 * @param event
 * @param editing
 *
 * @properties={typeid:24,uuid:"FF972BBF-5C6D-46C1-9925-AF06E36F5B5A"}
 */
function onEdit(event,editing){
	//elements.btn_Cancel.visible = editing;
	controller.enabled = editing;
	globals.permissionsCacheHit(event,null);
}
/**
 * @param event
 * @param rec
 *
 * @properties={typeid:24,uuid:"E398E61C-AC30-4655-B834-AB112E07CA47"}
 */
function setRecord(event,rec){
	var pcmkId = rec.if_piecemark_id;
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var q = databaseManager.createSelect('db:/stsservoy/piecemarks');
	q.where.add(q.columns.piecemark_id.eq(pcmkId.toString()));
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() == 0){
		clearLocalVars(event);
	}
	foundset.loadRecords(Q);
	onEdit(event,false);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"D2058307-110C-4AA8-81E1-D89B438422A0"}
 */
function clearLocalVars(event){
	foundset.clear();
}