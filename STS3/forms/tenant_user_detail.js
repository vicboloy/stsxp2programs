
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4659E1C1-B131-476F-8EF3-45F2C0122D71"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		controller.enabled = false;
		elements.buttEdit.enabled = true;
	}
	return _super.onShow(firstShow, event)
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7AF43C83-8A89-4926-938B-F58334D566A7"}
 */
function onRecordSelection(event) {
	var message = 'No Password';
	if (user_password != null){
		message = '********';
	}
	elements.passwd.placeholderText = message;
	elements.passwdConfirm.placeholderText = message;
	return _super.onRecordSelection(event)
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"96367965-D7A6-4161-B689-5475D88D61BC"}
 */
function validateUserName(oldValue, newValue, event) {
	if (newValue != ""){
		is_account_active = true;
	}
	return _super.validateUserName(oldValue, newValue, event)
}
/**
 * TODO generated, please specify type and doc for the params
 * @param editing
 *
 * @properties={typeid:24,uuid:"71EDEF79-0EE1-47D5-9B6B-003F3F641299"}
 */
function editState(editing){
	elements.buttCancel.visible = editing;
	elements.buttEdit.enabled = !editing;
	elements.buttEdit.visible = !editing;
	elements.buttSave.visible = editing;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A0754AF-9F8E-4F11-8B06-6DE55BFEE243"}
 */
function startEditing(event) {
	controller.enabled = true;
	editState(true);
	forms.tenant_users.controller.enabled = false;
	forms.tenants.controller.enabled = false;
	return _super.startEditing(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C3729BF6-2B55-40D9-96CD-0174C9578481"}
 */
function stopEditing(event) {
	controller.enabled = false;
	editState(false);
	forms.tenant_users.controller.enabled = true;
	forms.tenants.controller.enabled = false;
	return _super.stopEditing(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {JSRecord} record
 * @param {Boolean} stopEdit
 *
 * @properties={typeid:24,uuid:"C2852854-E526-4E84-8D85-6BBE100EA028"}
 */
function saveEdits(event, record, stopEdit) {
	var index = controller.getSelectedIndex();
	var record = foundset.getRecord(index);
	databaseManager.saveData(record);
	stopEditing(event);
	return _super.saveEdits(event, record, stopEdit)
}
