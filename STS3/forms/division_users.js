
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C05B33D2-8DB3-4F9A-9817-88889B1E20AB"}
 */
function newRecord(event) {
	var newRec = _super.newRecord(event);
	user_name = "";
	tenant_uuid = globals.session.tenant_uuid;
	forms.division_user_detail.startEditing(event);
	elements.btn_New.enabled = false;
	forms['division_user_detail'].verifyNewUserInput(event);
	forms['division_user_detail'].elements.userName.requestFocus();
	return newRec;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 * @param {Boolean} stopEdit
 *
 * @properties={typeid:24,uuid:"C942026C-B81C-4AF2-AE65-635110565D4E"}
 * @SuppressWarnings(wrongparameters)
 */
function deleteRecord(event, index, stopEdit) {
	if (user_name == 'P' || user_name == 'p'){return}
	var status = globals.checkUserEmpty(user_uuid);
	if (status != ''){
		globals.errorDialogMobile(event,'1071','',status); //1071, record has data. will not be deleted.
		return false;
	}
	/** @type {QBSelect<db:/stsservoy/label_destinations>} */
	var q = databaseManager.createSelect('db:/stsservoy/label_destinations');
	q.result.add(q.columns.label_destination_uuid);
	q.where.add(q.columns.tenant_uuid.eq(application.getUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.user_uuid.eq(application.getUUID(user_uuid)));
	var Q = databaseManager.getFoundSet(q);
	var delQ = Q.deleteAllRecords();
	return _super.deleteRecord(event, index, stopEdit)
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A07D5E6-9D0A-4FAD-B1F7-784D1F142349"}
 */
function onRecordSelection(event) {
	elements.btn_Delete.enabled = (user_name != 'P' || user_name != 'p');
	return _super.onRecordSelection(event)
}
