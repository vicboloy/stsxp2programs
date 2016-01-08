
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"62001F4C-7D1B-41D3-AF56-1B43144B9EF9"}
 */
function xxxunusednewRecord(event, location, changeSelection) {/**
	if (!company_name){
		errorMessage = 'Please enter a company name.';
		return false;
	}
	var tenants = databaseManager.getFoundSet(globals.SEC_SERVER,globals.SEC_TABLE_TENANTS);  // get an association's foundset
	if (tenants.find()){
		tenants.company_name = company_name;
		var tenCount = tenants.search();
		if (tenCount == 0){
			_super.newRecord(event, location, changeSelection)
		} else {
			var maxTenants = tenants.getSize();
			if (maxTenants > 1){
				errorMessage = 'There are multiple companies with this ID.';
				return false;
			}
			var rec = tenants.getRecord(1);
			if (rec.delete_flag == 1){
				rec.delete_flag = 0;
			} else {
				return false;
			}
		}
		foundset.loadRecords();
		return true;
	}
	//return false; */
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8892A0D9-A658-4625-96FC-392F3EEE7274"}
 */
function onLoad(event) {
	elements.split.dividerLocation = 180.0;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F3F815E5-1968-4D40-85AB-CEE01C3AC82D"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
/**
 * @param editing
 *
 * @properties={typeid:24,uuid:"3356AEF1-608A-4CD0-B6A5-B7383EA2A904"}
 */
function onEditControllerState(editing){
	var ltForm = elements.split.getLeftForm();
	var rtForm =elements.split.getRightForm().elements.split.getLeftForm();
	ltForm.controller.enabled = !editing;
	rtForm.controller.enabled = !editing;
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A71DE566-7137-4EB4-A1F6-8D33C59BE997"}
 */
function onShow(firstShow, event) {
	// disable newbutton on left and right tab panels
	var formName = event.getFormName();
	var ltForm = forms[formName].elements.split.getLeftForm();
	var rtForm = forms[formName].elements.split.getRightForm().elements.split.getLeftForm();
	ltForm.elements.btn_New.visible = false;
	ltForm.elements.newEntry.visible = false;
	rtForm.elements.btn_New.visible = false;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"65A69292-B7F4-4F11-9A42-A0078026855A"}
 */
function onHide(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
	globals.setWindowClosed("");
	return true;
}
