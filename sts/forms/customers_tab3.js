/**
 * @param oldValue OLD zipcode
 * @param newValue NEW zipcode
 * @param event change in zipcode
 *
 * @properties={typeid:24,uuid:"289E1625-2D57-4D19-A7F8-35F0843C37D7"}
 */
function onDataChangeZipCode(oldValue, newValue, event) {
	if(!utils.hasRecords(sts_addresses_to_zip)){
		//TODO throw dialog error this zipcode does not exist, need to add zipcode
		return false
	} else {
		if(!city){
			city = sts_addresses_to_zip.primary_city;
		} else if(city != sts_addresses_to_zip.primary_city) {
			//TODO throw dialog city is wrong
			// set focus to city field
			
		}
		if(!state){
			state = sts_addresses_to_zip.state;
		} else if(state != sts_addresses_to_zip.state) {
			//TODO throw dialog state is wrong
			// set focus to state field
		}
	}
	return true
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
 * @properties={typeid:24,uuid:"9B46E33F-CCD4-4E1B-8F5C-AD3BDC3D6E5A"}
 * @AllowToRunInFind
 */
function onAddressTypeChange(oldValue, newValue, event) {
	var ds = application.getValueListItems('address_types').getColumnAsArray(2);
	if(ds.indexOf(newValue) == -1) {
		/**@type {JSFoundSet<db:/stsservoy/valuelists>} */
		var fs = databaseManager.getFoundSet("db:/stsservoy/valuelists");
		fs.newRecord();
		fs.value1 = newValue;
		fs.creation_date = new Date;
		fs.value2 = null;
		fs.valuelist_name = "address_types";
		fs.value_id = application.getValueListArray('address_types').length + 1;
	}
	return true
}
