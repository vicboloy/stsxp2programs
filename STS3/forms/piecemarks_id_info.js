/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"390BA7E5-48A2-444E-8F83-6DC919B497FC"}
 */
var vSheetNum = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E24E26EB-9FBE-4226-879E-1FCF850FB593"}
 */
var vItemQuantity = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"97B0C791-64AD-4BFA-80A0-1033F02C4663"}
 */
var vPiecemark = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA9983E6-6776-4AB9-ADC3-AC33C6A7D9BE"}
 */
var vParentPiecemark = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F80DD935-2095-4D73-A12E-280270D7B6EE"}
 */
var vMaterial = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B7747117-E8FA-40F0-812C-940CD752C9A6"}
 */
var vDescription = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3E633333-3A46-401D-8129-037EF961786F"}
 */
var vPartSerial = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9CC2D61-2162-4794-9014-4460484E464F"}
 */
var vIdSerial = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFCC730A-712A-425F-96FA-5B578F3C95B0"}
 */
var vSequenceNumber = '';
/**
 * @param event
 * @param editing
 *
 * @properties={typeid:24,uuid:"F60DEBA1-E704-47D9-8B64-3ACC4D9655D6"}
 */
function onEdit(event,editing){
	//elements.btn_Cancel.visible = editing;
	controller.enabled = editing;

}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"006A23C4-552F-4A5E-9BB5-82E2694C5937"}
 */
function onShow(firstShow, event) {
	var thisForm = forms[event.getFormName()];
	var pcmkForm = forms.piecemark;
	var items = [];
	for (var idx = 0;idx < items.length;idx++){
		thisForm[items[idx]] = pcmkForm[items[idx]];
	}
	
}
/**
 * @param event
 * @param rec
 *
 * @properties={typeid:24,uuid:"A4DF30E9-5B08-4795-9069-0A18E45FDAE3"}
 */
function setRecord(event,rec){
	var idfileId = rec.if_idfile_id;
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.where.add(q.columns.idfile_id.eq(idfileId));
	var Q = databaseManager.getFoundSet(q);
	foundset.loadRecords(Q);
	if (foundset.getSize() == 0){
		foundset.clear();
		clearLocalVars(event);
		return;
	}
	vSheetNum = forms.piecemark.vSheetNum;
	vSequenceNumber = rec.sq_sequence_number;
	vItemQuantity = forms.piecemark.vItemQuantity;
	vItemParentPcmk = forms.piecemark.vItemParentPcmk;
	vItemPcmk = forms.piecemark.vItemPcmk;
	vItemMaterial = forms.piecemark.vItemMaterial;
	vItemDescription = forms.piecemark.vItemDescription;
	vPartSerial = forms.piecemarks_info.part_serial;
	onEdit(event,false);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"91F63582-2D92-4184-B930-2AEFB4545490"}
 */
function clearLocalVars(event){
	vSheetNum = '';
	vSequenceNumber = '';
	vItemQuantity = '';
	vItemParentPcmk = '';
	vItemPcmk = '';
	vItemMaterial = '';
	vItemDescription = '';
	vPartSerial = '';

}