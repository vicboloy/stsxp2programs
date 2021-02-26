
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
		if (tenant_uuid == null && globals.session.tenant_uuid != null){
			tenant_uuid = globals.session.tenant_uuid;
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
	if (foundset.getSelectedRecord().group_name.search('\\.') == 0){
		globals.DIALOGS.showErrorDialog('1219',i18n.getI18NMessage('1219'))//20180103 Cannot delete a default group. Prefixed '.'
		return;
	}//20180103 cannot delete default group
	/** @type {QBSelect<db:/stsservoy/user_groups>} */
	var ug = databaseManager.createSelect('db:/stsservoy/user_groups');
	ug.result.add(ug.columns.user_group_uuid);
	ug.where.add(ug.columns.delete_flag.isNull);
	ug.where.add(ug.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	ug.where.add(ug.columns.group_uuid.eq(globals.makeUUID(group_uuid)));
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
	null;
	return _super.onShow(firstShow, event)
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F345CEBC-F682-4A06-8D58-221CECC0A46F"}
 * @AllowToRunInFind
 */
function onActionDupe(event) {
	var currentRec = foundset.getSelectedRecord();
	if (!currentRec){return}
	var dupeIdx = foundset.duplicateRecord(false);
	/** @type {JSRecord<db:/stsservoy/groups>} */
	var dupeRec = foundset.getRecord(dupeIdx);
	dupeRec.edit_date = new Date();
	// dup user group - table 'groups' - create new groups uuid with 
	var currGroupName = currentRec.group_name;
	if (currGroupName.indexOf('.') == 0){
		currGroupName = currGroupName.split('.')[1];
	}
	var newGroupName = currGroupName;
	
	/** @type {QBSelect<db:/stsservoy/groups>} */
	var q = databaseManager.createSelect('db:/stsservoy/groups');
	q.result.add(q.columns.group_name);
	//q.where.add(q.columns.group_name.upper.eq(currGroupName.toUpperCase()));
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(currentRec.tenant_uuid)));
	var Q = databaseManager.getFoundSet(q);
	var existNames = [];
	for (var index = 1;index <= Q.getSize();index++){
		/** @type {JSRecord<db:/stsservoy/groups>} */
		var rec = Q.getRecord(index);
		existNames.push(rec.group_name.toUpperCase());
	}
	index = 1;
	while (existNames.indexOf(newGroupName.toUpperCase()) != -1){
		newGroupName = currGroupName +' Copy '+index++;
	}
	dupeRec.group_name = newGroupName;
	databaseManager.saveData(dupeRec);
	/** @type {QBSelect<db:/stsservoy/group_keys>} */
	var s = databaseManager.createSelect('db:/stsservoy/group_keys');
	s.result.add(s.columns.group_key_uuid);
	s.where.add(s.columns.tenant_uuid.eq(globals.makeUUID(currentRec.tenant_uuid)));
	s.where.add(s.columns.group_uuid.eq(globals.makeUUID(currentRec.group_uuid)));
	var S = databaseManager.getFoundSet(s);
	var Ssize = S.getSize();
	for (index = 1;index <= Ssize;index++){
		/** @type {JSRecord<db:/stsservoy/group_keys>} */
		S.setSelectedIndex(index);
		var dupedIdx = S.duplicateRecord(false);
		var dupedRec = S.getRecord(dupedIdx);
		dupedRec.edit_date = new Date();
		dupedRec.group_uuid = dupeRec.group_uuid.toString();
	}
	databaseManager.saveData(S);
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A82288A-B970-4F37-BF9F-1EB32AD87AB4"}
 * @AllowToRunInFind
 */
function onRecordSelection(event) {

	var form = forms.app_user_group_detail;
	form.elements.groupKeys.enabled = false;
	if (form.group_name){
		var name = form.group_name;
		var doneEnabled = forms.app_permissions.elements.btn_Done.visible == true;
		if (!application.isInDeveloper()){
			form.elements.groupKeys.enabled = (name.search('\\.') != 0) && doneEnabled ;//20180103 disable edit default group contents
		}
	}
	return _super.onRecordSelection(event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"CC5E4A3C-9884-4022-AA16-FECE8748B88C"}
 */
function formModeEdit(event){
	
}