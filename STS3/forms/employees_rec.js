
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E76A0C5-1857-4089-8E25-97D995FC0B4A"}
 */
function onActionAdd(event) {
	//createEmployeeTable(event);//check this
	var formRev = scopes.globals.getInstanceForm(event);
	controller.newRecord();
	tenant_uuid = globals.session.tenant_uuid;
	application.updateUI();
	forms["employee_specs"+formRev].onEdit(event,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F7DC238-3B8B-4803-AA21-E9786FD009B1"}
 */
function onActionRefresh(event) {
	foundset.loadAllRecords();
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2596B49D-8C2B-4FD2-8280-ED592919B8F2"}
 */
function createEmployeeTable(event){
	var formName = event.getFormName();
	
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var dv = databaseManager.createSelect('db:/stsservoy/associations');
	dv.result.add(dv.columns.association_uuid);
	dv.result.add(dv.columns.association_name);
	dv.where.add(dv.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	dv.where.add(dv.columns.delete_flag.isNull);
	var DV = databaseManager.getFoundSet(dv);
	/** @type {JSDataSet<association_name:String,association_uuid:String>} */
	var rec = null; var idx = 1; var divIds = []; var divNames = [];
	while (rec = DV.getRecord(idx++)){
		divIds.push(rec.association_uuid);
		divNames.push(rec.association_name);
	}

	/** @type {QBSelect<db:/stsservoy/employee>} */
	var ee = databaseManager.createSelect('db:/stsservoy/employee');
	ee.result.add(ee.columns.employee_id);
	ee.result.add(ee.columns.employee_firstname);
	ee.result.add(ee.columns.employee_lastname);
	ee.result.add(ee.columns.employee_number);
	ee.result.add(ee.columns.user_uuid);
	ee.where.add(ee.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	ee.where.add(ee.columns.delete_flag.isNull);
	
	for (idx = 0;idx < divIds.length;idx++){
		/** @type {String} */
		var divName = divNames[idx];
		/** @type {QBJoin<db:/stsservoy/users>} */
		var xxx = ee.joins.add('db:/stsservoy/users');
		xxx.on.add(ee.columns.employee_id.eq(xxx.columns.employee_id));
		
		ee.result.add(xxx.columns.association_uuid,divName);
	}
	var UU = databaseManager.getDataSetByQuery(ee, -1);
	null;
}
