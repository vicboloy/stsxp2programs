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
	var sql_query = "select value_id,valuelist_name,value1 from valuelists where valuelist_name = ?"
	var dataset = databaseManager.getDataSetByQuery("stsservoy",sql_query,["address_types"],200)
	var textOut = dataset.getMaxRowIndex() + " rows"
	var newAddressID = 0;
	var currentIndex = 0;
	var alreadyIn = false;
	for (var i=1; i <= dataset.getMaxRowIndex();i++){
		currentIndex = dataset.getValue(i,1)
		if (newAddressID < currentIndex) {newAddressID = currentIndex}
		//var rows = "row " + dataset.getValue(i,1) + "," + dataset.getValue(i,2) + "," + dataset.getValue(i,3) + "new ID" + newAddressID
		//application.output(rows)
		if (alreadyIn){continue}
		if (dataset.getValue(i,3) == newValue){alreadyIn=true}
	}
	application.output(textOut)
	if (!alreadyIn && (sts_addresses_to_vl_addresstype.value1 != oldValue)){
		application.output(newValue)
		/**@type {JSFoundSet<db:/stsservoy/valuelists>} */
		var fs = databaseManager.getFoundSet("db:/stsservoy/valuelists")
		var newIdx = fs.newRecord()
		fs.value1 = newValue;
		fs.creation_date = new Date;
		fs.value2 = null;
		fs.valuelist_name = "address_types";
		fs.value_id = ++newAddressID;
		//var savedDataQ = databaseManager.saveData(fs)
		//application.output(savedDataQ);
		//application.output("adding new Address Type")
	}


	return true
}
