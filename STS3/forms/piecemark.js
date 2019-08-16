/**
 * create job first
 * status, quantity, sequence, quantity (checkmark / per label box) tab according to prefs
 * piecemark
 * cost code
 * width entered english imperial system inches, metric always millimeters
 * length same
 * length and width gets entry and returns correct symbology for measurement, smallest is 16th, metric doesn't have decimal
 * is there a preference for returned length?
 * browse is for editing a certain barcode number/id
 * editing pcmk could change piecemark/barcode collections, quantity could change
 * add/cancel/delete
 * keying in pcmk should call up relevant record, weight, material, barcode, etc
 * job info just shows job data
 * view loads shows this job, no filtering
 * 
 * 
 */
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2530F8DA-BD20-4C97-ABCC-017516C1CF2C"}
 */
var employee = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DD502C61-8671-4777-894D-8FE75155DAC1"}
 */
var association = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D864932E-CAEE-4771-833E-3EFF2E909392"}
 */
var associationId = "";
/**
 * @properties={typeid:35,uuid:"04697504-3550-4F09-9BCA-958C7DD8BDA4",variableType:-4}
 */
var fieldOrder = [];
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17203A44-75E8-49FE-BB31-4EC8BC6EA134"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		fieldOrder = globals.setFieldOrder(event);
		fieldOrder = [];
		var fields = ['shop_order','sheet_number','sequence_number','item_quantity','qty_labels','finish','grade','parent_piecemark','piecemark','cust_cow_code','item_weight','item_width','item_length','route_code','material','description','btn_Add'];
		for (var idx = 0;idx < fields.length;idx++){
			if (!elements[fields[idx]]){continue}
			fieldOrder.push(elements[fields[idx]]);
		}
		controller.setTabSequence(fieldOrder);
	}
	globals.setUserFormPermissions(event);
	foundset.clear();
	return _super.onShow(firstShow, event)
}
/**
 * @properties={typeid:24,uuid:"7D6AA558-0ED5-4C09-B591-B350FC5DF40F"}
 */
function getJobMetrics(){
	null;
	application.output(vJobRec);
	return scopes.jobs.getJobTotalWeight(vJobRec.job_id.toString(),vJobRec.tenant_uuid.toString(),vJobRec.metric_job,false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9A8B593-633F-43C6-927C-556C4195AADC"}
 * @AllowToRunInFind
 */
function onActionCancel(event) {
	var form = forms[event.getFormName()];
	for (var item in elements){
		var dataProvId = elements[item].getDataProviderID();
		if (!dataProvId){continue}
		if (dataProvId.search('v') == 0){
			form[dataProvId] = null;
		}
	}
}
/**
 * @param event
 * @param editing
 *
 * @properties={typeid:24,uuid:"40C3A210-E24F-45E9-882F-DC0D69B90108"}
 */
function onEdit(event,editing){
	//elements.btn_Delete.visible = editing;
	//elements.btn_Add.visible = editing;
	controller.enabled = editing;
}
/**
 * @param event
 * @param pcmkId
 *
 * @properties={typeid:24,uuid:"4CDA54E4-E258-4662-8B21-5233923A1349"}
 */
function setRecord(event,rec){
	var pcmkId = rec.if_piecemark_id;
	/** @type {QBSelect<db:/stsservoy/piecemarks>} */
	var q = databaseManager.createSelect('db:/stsservoy/piecemarks');
	q.where.add(q.columns.piecemark_id.eq(pcmkId.toString()));
	var Q = databaseManager.getFoundSet(q);
	foundset.loadRecords(Q);
	if (foundset.getSize() == 0){
		clearLocalVars(event);
		return;
	}
	var recPM = foundset.getRecord(1);
	vFinish = rec.pm_finish;
	vGrade = rec.pm_grade;
	vSequenceNumber = rec.sq_sequence_number;
	vSerialNumbers = rec.bc_id_serial_number;
	if (vSerialNumbers != ''){
		forms['piecemark2'].elements.btn_Add.text = i18n.getI18NMessage('sts.btn.update');
	} else {
		forms['piecemark2'].elements.btn_Add.text = i18n.getI18NMessage('sts.btn.add');
	}
	vItemParentPcmk = rec.pm_parent_piecemark;
	vItemPcmk = rec.pm_piecemark;
	vItemWeight = (forms.piecemark2.vJobMetric) ? rec.pm_item_weight : rec.pm_item_weight_lbs;
	vItemLength = (forms.piecemark2.vJobMetric) ? rec.pm_item_length : recPM.charLength;
	vItemWidth = (forms.piecemark2.vJobMetric) ? rec.pm_item_width : recPM.charWidth;
	vSeqNum = rec.sq_sequence_number;
	vSheetNum = recPM.sts_pcmks_to_sheet.sheet_number;
	vCowCode = rec.pm_cost_of_work_code;
	vItemMaterial = rec.pm_material;
	vItemDescription = rec.pm_description;
	vLoadNumber = rec.recv_load_number;
	vLoadWeight = rec.recv_load_receiving_wt;
	vShopOrder = rec.if_shop_order;
	vRouteCode = rec.rt_route_code;
	if (rec.ship_load_number){
		vLoadNumber = rec.ship_load_number;
		vLoadWeight = rec.ship_load_shipped_weight;
	}
	vShopOrder = rec.if_shop_order;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"12A7F102-F686-4BE2-874B-05B4ED71B0CD"}
 */
function clearLocalVars(event){
	foundset.clear();
	vFinish = '';
	vGrade = '';
	vSequenceNumber = '';
	vSerialNumbers = '';
	vItemParentPcmk = '';
	vItemPcmk = '';
	vItemWeight = '';
	vItemLength = '';
	vItemWidth = '';
	vSeqNum = '';
	vSheetNum = '';
	vCowCode = '';
	vItemMaterial = '';
	vItemDescription = '';
	vLoadNumber = '';
	vLoadWeight = '';
	vShopOrder = '';
	vRouteCode = '';
	if (vSerialNumbers != ''){
		forms['piecemark2'].elements.btn_Add.text = i18n.getI18NMessage('sts.btn.update');
	} else {
		forms['piecemark2'].elements.btn_Add.text = i18n.getI18NMessage('sts.btn.add');
	}
}