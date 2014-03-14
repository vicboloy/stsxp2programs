
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"16FB7385-D1C1-4E70-A59F-BBEE985AA926"}
 * @AllowToRunInFind
 */
function onActionUpdateGroup(event) {
	//var updateArray = [];
	var searchCount = 0;
	var right = elements.split.getRightForm();
	var left = elements.split.getLeftForm();
	//var group = left.tenant_group_uuid;
	var master = left.association_uuid;
	var masterName = left.association_name;
	var count = right.foundset.getSize();
	for (var index = 1;index<=count;index++){
		/** @type {JSFoundset<db:/stsservoy/tenant_list>} */
		var rec = right.foundset.getRecord(index);
		/** @type {JSFoundset<db:/stsservoy/associations>} */
		var assocs = databaseManager.getFoundSet(globals.SEC_SERVER,globals.SEC_TABLE_ASSOCIATIONS);
		assocs.loadRecords();
		if (assocs.find()){
			assocs.tenant_group_uuid = master;
			assocs.tenant_uuid = rec.tenant_uuid;
			searchCount = assocs.search(true);
			if (searchCount){
				if (!rec.select){
					assocs.delete_flag = 1;
					databaseManager.saveData(assocs);
				} else {
					assocs.delete_flag = 0;
					databaseManager.saveData(assocs);
				}
			} else {
				if (rec.select){
					var newIndex = assocs.newRecord(false);
					var newRec = assocs.getRecord(newIndex);
					newRec.tenant_group_uuid = master;
					newRec.tenant_uuid = rec.tenant_uuid;
					newRec.association_name = masterName;
					newRec.delete_flag = 0;
					newRec.edit_date = new Date();
					databaseManager.saveData(newRec);
				}
			}
			
		}
	}
}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AAA6E7E0-FD63-4AC4-BB01-645B730ED523"}
 */
function onLoad(event) {
	elements.split.dividerLocation = 190.0;
}
