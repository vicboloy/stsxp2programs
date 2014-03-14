/**
 * @properties={typeid:24,uuid:"5C5A3544-8C3C-4206-9FEB-66FF1CDB1702"}
 */
function setTenantCheck(){
	var maxRec = foundset.getSize();
	var rec;
	var tenants = globals.secGetTenantIDs(globals.secCurrentAssociationID);
	if (tenants == null){return}
	for (var index=1;index<=maxRec;index++){
		rec = foundset.getRecord(index);
		rec.select = tenants[rec.tenant_uuid] == 0 ? 1 : 0;
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"489C93B7-3DFD-458E-A1CB-3A58ACFBF080"}
 */
function deleteRecord(event, index) {
	delete_flag = 1;
	foundset.loadRecords();
	//  ** @type {JSFoundset<db:/stsservoy/associations>} */
	//var fs = sec_tenant_to_association;
	//var fsCount = fs.getSize();
	//for (var i=1;i<=fsCount;i++){
	//	var group = fs.getRecord(i).delete_flag;
	//}
	//if(!(stopEdit instanceof Boolean)||stopEdit)						//	default to close transaction if not specified
	//stopEditing(event);												//	close in-mem transaction
	//return true;	
	//return _super.deleteRecord(event, index)
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0AD9130B-0B53-4024-99BD-B4CDFA023CD1"}
 */
function onRecordSelection(event) {
	globals.secCurrentTenantID = tenant_uuid;
	// ** {JSFoundset<db:/stsservoy/tenant_list>} */
	//var parent = controller.getFormContext();
	//var form = parent.getValue(2,2);
	//forms.tenants.foundset.loadRecords();
	//tenant_list_to_users.loadRecords();
	//var parent = controller.getFormContext().getValue(1,2).userList.foundset.loadRecords();
	return _super.onRecordSelection(event)
}
