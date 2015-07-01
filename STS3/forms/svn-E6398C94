
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4659E1C1-B131-476F-8EF3-45F2C0122D71"}
 */
function onShow(firstShow, event) {
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
