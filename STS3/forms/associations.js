/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} [index] 
 *
 *
 * @properties={typeid:24,uuid:"632687C8-5715-4EF2-B917-A823999EDDBD"}
 */
function assocListRecord(index){
	return foundset.getRecord(index);
}
/**
 * @properties={typeid:24,uuid:"FC4CDAC0-CA7E-4F63-8CCC-696FF355D31F"}
 */
function assocListCount(){
	return foundset.getSize();
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"5FA94E54-432C-481E-B00B-77F8A66C8A97"}
 */
function newRecord(event, location, changeSelection) {
	/** @type {JSFoundset<db:/stsservoy/tenant_list} */
	var newRec = _super.newRecord(event, location, changeSelection);
	//newRec.tenant_group_uuid = globals.secCurrentAssociationMasterID;
	newRec.delete_flag = 0;
	newRec.edit_date = new Date();
	newRec.tenant_uuid = globals.secCurrentTenantID;
	return newRec;
	//return _super.newRecord(event, location, changeSelection)
}

