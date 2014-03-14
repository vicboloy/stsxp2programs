/**
 * Base method to delete all records in the foundset.
 * 
 * Implementing forms should probably confirm the delete in the UI
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean} true if all records were deleted
 *
 * @properties={typeid:24,uuid:"AD2A74A8-B158-4347-B9C1-CB38748F014E"}
 */
function deleteAllRecords(event) {
	return foundset.deleteAllRecords();
}

/**
 * Base method to duplicate a record.
 * 
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} [index] The index of the record to duplicate. Defaults to selected index.
 * @param {Number} [location] The index where the new record should be inserted. Default is bottom.
 * @param {Boolean} [changeSelection] True if the selection should change. Default is True.
 * @returns {Number} The index of the new record
 * @properties={typeid:24,uuid:"FA872F51-755F-49B0-BAE3-BCDA62435C6C"}
 */
function duplicateRecord(event,index,location,changeSelection) {
	index = (index) ? index :  foundset.getSelectedIndex();
	return foundset.duplicateRecord(index,location,changeSelection);
}

/**
 * Base method to start a find.
 * 
 * @param {JSEvent} [event] the event that triggered the action
 * @returns {Boolean} true when the form entered find mode
 * @properties={typeid:24,uuid:"9FCE6C1D-4A3E-4BCD-93C0-201E6BD17D14"}
 */
function startFind(event) {
	if(foundset.find()){
		updateUI(event);
		return true;
	}
	return false;
}

/**
 * Base method to invert records.
 * 
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"ACC03EF2-B3D6-43EE-8150-3708C3F9B12D"}
 */
function invertRecords(event) {
	foundset.invertRecords();
	return true;
}

/**
 * Base method to create new record.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} [location] The index where the new record should be inserted. Default is bottom.
 * @param {Boolean} [changeSelection] True if the selection should change. Default is True.
 * @returns {Number} The index of the record that was added
 * @properties={typeid:24,uuid:"8A3583BF-DC0F-42FA-99FE-7B6B869A1560"}
 */
function newRecord(event, location, changeSelection) {
	return foundset.newRecord(location,changeSelection)
}

/**
 * Base method to select next record.
 *
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"DD29BA4A-7FE9-42D3-8F0F-043FF5A0D87E"}
 */
function nextRecord(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() + 1)
}

/**
 * Base method to omit a record.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} [index] The index of the record to omit. Default is the selected record.
 * @returns {Boolean} true when record successfully omited
 * @properties={typeid:24,uuid:"CA6AC409-1EC6-4E09-B2C6-FF30A80CAE10"}
 */
function omitRecord(event, index) {
	index = (index) ? index :  foundset.getSelectedIndex();
	return foundset.omitRecord(index);
}

/**
 * Base method to delete a record. Implementations should probably confirm the delete in the UI.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} [index] The index of the record to delete. Default is the selected record.
 * @returns {Boolean} true when record successfully deleted
 *
 * @properties={typeid:24,uuid:"BF88DF5E-2479-49F9-9FBA-A9CC31693FF9"}
 */
function deleteRecord(event, index) {
	index = (index) ? index :  foundset.getSelectedIndex();
	return foundset.deleteRecord(index);
}

/**
 * Base method to select previous record.
 *
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"B89893E4-D118-4DA9-8F43-086605141E1A"}
 */
function previousRecord(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() - 1)
}

/**
 * Base method to show print preview.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} printCurrentRecordOnly Print only the current record
 * @param {PrinterJob} printerJob The job name
 * @param {Number} zoomFactor The zoom factor
 * @properties={typeid:24,uuid:"7B37E37E-8C30-4FDD-A8EC-D79BFE7CC2E0"}
 */
function printPreview(event,printCurrentRecordOnly,printerJob,zoomFactor) {
	controller.showPrintPreview(printCurrentRecordOnly,printerJob,zoomFactor);
}

/**
 * Base method to perform search.
 *
 * @param {Boolean} [clear] clear last results
 * @param {Boolean} [reduce] reduce search
 * @param {JSEvent} event the event that triggered the action
 * @returns {Number} The number of records cached from the result.
 *
 * @properties={typeid:24,uuid:"7625D542-09EE-4894-9ACA-1B9357FC70AB"}
 * @AllowToRunInFind
 */
function search(clear, reduce, event) {
	var results = 0;
	if(foundset.isInFind()){
		results = controller.search(clear, reduce);
		updateUI(event);
	}
	return results;
}

/**
 * Base method to show-all-records.
 *
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean} True when the show-all was successful
 * @properties={typeid:24,uuid:"46A1BE88-04B8-4160-8098-FA52016AD49C"}
 */
function showAllRecords(event) {
	return foundset.loadAllRecords();
}

/**
 * Base method to show-omitted-records.
 *
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean} True when the load-omitted was successful
 * @properties={typeid:24,uuid:"4BB17A56-862C-428A-A49B-77A3DFA6E682"}
 */
function showOmittedRecords(event) {
	return foundset.loadOmittedRecords();
}

/**
 * Base method to sort.
 *
 * @param {String} dataProviderID element data provider
 * @param {Boolean} asc sort acscending [true] or descending [false]
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"791DA006-0449-434C-B9F8-E860A1A58CA6"}
 */
function onSort(dataProviderID, asc, event) {
	foundset.sort(dataProviderID + (asc ? ' asc' : ' desc'), false);
}

/**
 * Goes to the first record in the foundset
 * 
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"35FBD9D5-D1A9-4137-A901-1085DBC838E8"}
 */
function firstRecord(event) {
	foundset.setSelectedIndex(1);
}

/**
 * Goes to the last cached record in the foundset
 * May cause the foundset cache to grow
 * 
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"E67F429A-9654-4D69-B3AB-38862085E74D"}
 */
function lastRecord(event) {
	foundset.setSelectedIndex(foundset.getSize());
}
