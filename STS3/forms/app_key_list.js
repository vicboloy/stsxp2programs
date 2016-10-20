
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"95C06E52-B3D9-4FED-B4D2-F595307B3E71"}
 */
function newRecord(event, location, changeSelection) {
	var rec = _super.newRecord(event, location, changeSelection);
	if (typeof edit_date !== "undefined"){edit_date = new Date();}
	if (typeof tenant_uuid !== "undefined" && tenant_uuid === null && globals.secCurrentTenantID !== undefined){
		tenant_uuid = globals.secCurrentTenantID;
	}
	forms.app_key_details.elements.display_name.requestFocus();
	return rec;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30EEE7DC-102B-413D-9999-FA2AE63ED9D9"}
 */
function onShow(firstShow, event) {
	//foundset.loadAllRecords();
	foundset.sort('key_name asc');
	//if (application.isInDeveloper()){application.output('application '+application_id);}
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"980113C3-D41B-4B2D-9B05-59F3BCDE4255"}
 * @AllowToRunInFind
 */
function deleteRecord(event, index) {
	/** @type {JSFoundSet<db:/stsservoy/group_keys>} */
	var fs = databaseManager.getFoundSet('stsservoy','group_keys');
	if (fs.find()){
		fs.key_uuid = key_uuid;
		if (fs.search()){
			globals.DIALOGS.showErrorDialog('Cannot delete Permission','Permission Key already used within Permission Group.');
			return true;
		}
	}
	return _super.deleteRecord(event, index);
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CDCF8DC0-0C42-4D44-A686-39ECD89F35D3"}
 */
function onActionDupe(event) {
	// Make a copy of the current key set
	var currentRec = foundset.getSelectedRecord();
	var dupeIdx = foundset.duplicateRecord(false);
	/** @type {JSRecord<db:/stsservoy/keys>} */
	var dupeRec = foundset.getRecord(dupeIdx);
	dupeRec.edit_date = new Date();
	var newKeyName = currentRec.key_name;
	
	/** @type {QBSelect<db:/stsservoy/keys>} */
	var q = databaseManager.createSelect('db:/stsservoy/keys');
	q.result.add(q.columns.key_name);
	q.where.add(q.columns.key_name.eq(currentRec.key_name));
	q.where.add(q.columns.tenant_uuid.eq(currentRec.tenant_uuid));
	var Q = databaseManager.getFoundSet(q);
	var existNames = [];
	for (var index = 1;index <= Q.getSize();index++){
		/** @type {JSRecord<db:/stsservoy/keys>} */
		var rec = Q.getRecord(index);
		existNames.push(rec.key_name);
	}
	index = 1;
	while (existNames.indexOf(newKeyName+' Copy '+index) != -1){
		index++;
	}
	dupeRec.key_name = newKeyName+' Copy '+index;
	databaseManager.saveData(dupeRec);
	/** @type {QBSelect<db:/stsservoy/permissions>} */
	var s = databaseManager.createSelect('db:/stsservoy/permissions');
	s.result.add(s.columns.key_uuid);
	s.where.add(s.columns.tenant_uuid.eq(currentRec.tenant_uuid));
	s.where.add(s.columns.key_uuid.eq(currentRec.key_uuid));
	var S = databaseManager.getFoundSet(s);
	var Ssize = S.getSize();
	for (index = 1;index <= Ssize;index++){
		/** @type {JSRecord<db:/stsservoy/permissions>} */
		S.setSelectedIndex(index);
		var dupedIdx = S.duplicateRecord(false);
		var dupedRec = S.getRecord(dupedIdx);
		dupedRec.edit_date = new Date();
		dupedRec.key_uuid = dupeRec.key_uuid;
	}
	databaseManager.saveData(S);
}
