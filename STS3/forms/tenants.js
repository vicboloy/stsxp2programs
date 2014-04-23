
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"044FFDF6-4B6A-4B7A-8FA9-435B5D0A327E"}
 * @AllowToRunInFind
 */
function newRecord(event, location, changeSelection) {
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
	//return false; 
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
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"01C62A29-3975-4D84-BCDE-63A90B96FE00"}
 */
function onHide(event) {
	globals.setWindowClosed("");
	return _super.onHide(event)
}
