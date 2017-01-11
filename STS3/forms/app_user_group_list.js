
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E651C76-6B8A-4E00-9E35-84E98F1DD18F"}
 */
function onAction(event) {
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"BDA82489-751B-4DE4-BF07-2936A720B5BF"}
 */
function newRecord(event, location, changeSelection) {
	var rec = _super.newRecord(event, location, changeSelection);
	if (typeof edit_date !== "undefined"){edit_date = new Date();}
	if (typeof tenant_uuid !== "undefined"){
		if (tenant_uuid == null && globals.secCurrentTenantID != null){
			tenant_uuid = globals.secCurrentTenantID;
		}
	}
	return rec;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"2A9BE440-9F96-4B68-9D09-0DF5778D6F8B"}
 * @AllowToRunInFind
 */
function deleteRecord(event, index) {
	/** @type {QBSelect<db:/stsservoy/user_groups>} */
	var ug = databaseManager.createSelect('db:/stsservoy/user_groups');
	ug.result.add(ug.columns.user_group_uuid);
	ug.where.add(ug.columns.delete_flag.isNull);
	ug.where.add(ug.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	ug.where.add(ug.columns.group_uuid.eq(group_uuid));
	var UG = databaseManager.getFoundSet(ug);

	if (UG.getSize() > 0){
		globals.DIALOGS.showErrorDialog(
			i18n.getI18NMessage('sts.txt.permission.group.cannot.delete'),
			i18n.getI18NMessage('sts.txt.permission.group.key.already.used.in.group.keys'));
		//'Cannot delete Permission Group','Group Key already used within User Group Keys.');
		return true;
	}
	return _super.deleteRecord(event, index);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9763F85B-5156-46CC-9A37-0E526289361C"}
 */
function onShow(firstShow, event) {
	//foundset.loadAllRecords();
	return _super.onShow(firstShow, event)
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F345CEBC-F682-4A06-8D58-221CECC0A46F"}
 */
function onActionDupe(event) {
	var currentRec = foundset.getSelectedRecord();
	var dupeIdx = foundset.duplicateRecord(false);
	/** @type {JSRecord<db:/stsservoy/groups>} */
	var dupeRec = foundset.getRecord(dupeIdx);
	dupeRec.edit_date = new Date();
	// dup user group - table 'groups' - create new groups uuid with 
	var newGroupName = currentRec.group_name;
	
	/** @type {QBSelect<db:/stsservoy/groups>} */
	var q = databaseManager.createSelect('db:/stsservoy/groups');
	q.result.add(q.columns.group_name);
	q.where.add(q.columns.group_name.eq(currentRec.group_name));
	q.where.add(q.columns.tenant_uuid.eq(currentRec.tenant_uuid));
	var Q = databaseManager.getFoundSet(q);
	var existNames = [];
	for (var index = 1;index <= Q.getSize();index++){
		/** @type {JSRecord<db:/stsservoy/groups>} */
		var rec = Q.getRecord(index);
		existNames.push(rec.group_name);
	}
	index = 1;
	while (existNames.indexOf(newGroupName+' Copy '+index) != -1){
		index++;
	}
	dupeRec.group_name = newGroupName+' Copy '+index;
	databaseManager.saveData(dupeRec);
	/** @type {QBSelect<db:/stsservoy/group_keys>} */
	var s = databaseManager.createSelect('db:/stsservoy/group_keys');
	s.result.add(s.columns.group_key_uuid);
	s.where.add(s.columns.tenant_uuid.eq(currentRec.tenant_uuid));
	s.where.add(s.columns.group_uuid.eq(currentRec.group_uuid));
	var S = databaseManager.getFoundSet(s);
	var Ssize = S.getSize();
	for (index = 1;index <= Ssize;index++){
		/** @type {JSRecord<db:/stsservoy/group_keys>} */
		S.setSelectedIndex(index);
		var dupedIdx = S.duplicateRecord(false);
		var dupedRec = S.getRecord(dupedIdx);
		dupedRec.edit_date = new Date();
		dupedRec.group_uuid = dupeRec.group_uuid;
	}
	databaseManager.saveData(S);
}
