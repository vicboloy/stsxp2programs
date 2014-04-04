
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"00612512-8C17-4FA2-8EFD-E92769C101B6"}
 */
function newRecord(event, location, changeSelection) {
	/** @type {JSFoundset<db:/stsservoy/associations>} */
	var newRec = _super.newRecord(event, location, changeSelection);
	tenant_group_uuid = globals.secCurrentAssociationMasterID;
	delete_flag = 0;
	edit_date = new Date();
	return newRec;
}

/**
 * Search the corporate tenants for association membership and set selections in tenants.  
 * This indicates aggregation of corporate data between corporation tenants.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7D41A02-6C8E-40CC-B485-983A4C16C2CC"}
 * @AllowToRunInFind
 */
function onRecordSelection(event) {
	var record = foundset.getSelectedRecord(); //initial entry may result in no selected records when there are no records
	if (record == null){return}
	var arrayTenant = [];
	//var tenantGroup = record.tenant_group_uuid; //selected group is the corporate uuid
	var group = record.association_uuid;   //selected association is the corporate tenants
	//var groupName = record.association_name;
	var rec;
	/** @type {JSFoundset<db:/stsservoy/associations>} */
	var assocs = databaseManager.getFoundSet(globals.SEC_SERVER,globals.SEC_TABLE_ASSOCIATIONS);
	assocs.loadAllRecords();
	if (assocs.find()){ 
		assocs.tenant_group_uuid = group; // is anyone in tenant group?
		//assocs.association_uuid != tenantGroup;
		var searchCount = assocs.search(true);
		for (var index1 = 1;index1<=searchCount;index1++){
			rec = assocs.getRecord(index1);
			if (rec.delete_flag == 0){
				arrayTenant[rec.tenant_uuid] = 1;
			}
		}
		/** @type {JSFoundset<db:/stsservoy/tenant_list>} */
		//var tenants = databaseManager.getFoundSet(globals.SEC_SERVER,globals.SEC_TABLE_TENANTS);
		var size = forms.member_list_detail.assocListCount();
		for (var index = 1;index <= size;index++){
			rec = forms.member_list_detail.assocListRecord(index);
			rec.select = arrayTenant[rec.tenant_uuid];
		}
	}
	return _super.onRecordSelection(event)
}
