
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
	var status = globals.checkUserEmpty(user_uuid);
	if (status != ''){
		globals.errorDialogMobile(event,'1071','',status); //1071, record has data. will not be deleted.
		return false;
	}
	return _super.deleteRecord(event, index, stopEdit)
}
