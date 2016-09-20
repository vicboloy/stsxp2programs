/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"1CD650DA-305D-4443-BDBE-42BA09A94348"}
 * @AllowToRunInFind
 */
function newRecord(event, location, changeSelection) {
	if (!company_name){
		errorMessage = i18n.getI18NMessage('sts.txt.please.enter.company.name');
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
				errorMessage = i18n.getI18NMessage('sts.txt.multiple.company.ids');
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
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7B497FC-CBFD-4FC8-B153-1265CA024A33"}
 */
function onShow(firstShow, event) {
	if (firstShow){
	}
	globals.setUserFormPermissions(event);
	return _super.onShow(firstShow, event)
}
