/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D7C45840-4987-4318-A223-2C7BCD9E8B88"}
 */
function unlockUser(event) {
	foundset.unlockUser();
	elements.btn_unlockUser.enabled = false;
	elements.btn_lockUser.enabled = true;	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"1837AB13-9F5F-492F-AB9C-81923D6272E5"}
 */
function lockUser(event) {
	foundset.lockUser();
	elements.btn_lockUser.enabled = false;
	elements.btn_unlockUser.enabled = true;	
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D25EC2E4-F713-4973-82FF-5144BC0C800E"}
 */
function onRecordSelection(event) {
	if (foundset.user_locked == 1) {
		elements.btn_unlockUser.enabled = true;
		elements.btn_lockUser.enabled = false;
	} else {
		elements.btn_unlockUser.enabled = false;
		elements.btn_lockUser.enabled = true;
	}
}
