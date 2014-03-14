/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"773BDFBA-680A-4EBD-A1D1-BC882191BB3D"}
 */
var mappingType = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70DFC09E-FC9F-4D75-925E-89C73EA4D67C"}
 */
var mappingLine = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7BAB04C-B36C-41F9-AE13-8369FF4EB9AE"}
 */
var mappingKey = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"99882EB0-F15C-43F2-B497-D5D590AB5DBF"}
 */
var errorMessage = "";
/**
 * @properties={typeid:35,uuid:"887FBC04-030A-4B9B-BD90-289ECCC73996",variableType:-4}
 */
var mappingTables = ['idfiles','piecemarks','jobs','sheets','lots','sequences','loads'];
/**
 * @properties={typeid:35,uuid:"339CF4C5-2752-4FBF-98BE-7A1A76FB3F5A",variableType:-4}
 */
var mappingColumns = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93871A2C-C05B-493F-9D47-D226E4F745DA"}
 */
var mapTable = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9833CD4-D3E1-417A-934C-0EB6E6F270A6"}
 */
var mapColumn = "";
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88238C28-3C53-4928-B30C-D6E1785C1BC1"}
 */
function onActionSaveButton(event) {
	var rec = foundset.getSelectedRecord();
	if (rec.mapped_format == null){
		rec.mapped_format = mappingType;
	}
	if (rec.mapping_line == null){
		rec.mapping_line = mappingLine;
	}
	if (rec.mapping_key == null){
		rec.mapping_key = mappingKey;
	}
	if (mapColumn != "" && mapTable != ""){
		rec.mapped_field = mapTable+ '.'+mapColumn;
	}
	mapColumn = "";
	if (rec.field_order == 0){
		rec.mapped_field = null;
	}
	databaseManager.saveData(rec);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"084017E5-6438-4B5D-AC2D-852C848DEAC2"}
 */
function onShow(firstShow, event) {
	startEditing(event);
	application.setValueListItems('stsvl_mapping_tables',mappingTables);

	return _super.onShow(firstShow, event)
}

/**
 * Handle changed data.
 *
 * @param oldTable old table 
 * @param newTable new table selection
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8D08F22D-7CDB-4750-BEE0-A4DCB48D6051"}
 * @AllowToRunInFind
 */
function onDataChangeMappingTable(oldTable, newTable, event) {
	if (oldTable != newTable){
		mapColumn = "";
		var table = databaseManager.getDataSource(globals.SEC_SERVER,newTable);
		var columns = databaseManager.getTable(table).getColumnNames();
		var length = columns.length;
		var skipList = 'tenant_uuid delete_flag edit_date logic_flag delete_flag current_load_id load_id piecemark_id sheet_id job_id customer_id idfile_id sequence_id lot_id';
		var cleanArray = [];	
		for(var i=0;i<length;i++){			
			var column = columns[i];
			var regex = '\\b'+column+'\\b';
			if (skipList.search(RegExp(regex)) == -1){
				cleanArray.push(column);
				
				}
		}
		cleanArray.sort();
		application.setValueListItems('stsvl_mapping_columns',cleanArray);	
/*// iterate and print selected table without keys and programmatic additions.  Data only.
  		for(i=0;i<cleanArray.length;i++){
			application.output(cleanArray[i]);
		}
		*/
	}
	return true
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3C7A1C71-9785-4CD0-A291-1D600CCBEECA"}
 */
function onHide(event) {
	stopEditing(event);
	return _super.onHide(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0A2A27D-2D85-4446-B5C3-8089FE9E7763"}
 */
function onActionClearRepeating(event) {
	mappingLine = "";
	mappingType = "";
	mappingKey = "";
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"36B985CE-B685-4B9C-8389-1317AB4D91A8"}
 */
function duplicateRecord(event, index, location, changeSelection) {
	if (mapped_field == null){
		errorMessage = 'Duplications only made on complete records, mapped_field.';
		return}
	//startEditing(event);
	var indexNew = _super.duplicateRecord(event, index, location, changeSelection) 
	var rec = foundset.getRecord(indexNew);
	rec.mapped_field = null;
	//foundset.sort('mapped_format asc, mapping_key asc, field_order asc');
	return indexNew;
}
