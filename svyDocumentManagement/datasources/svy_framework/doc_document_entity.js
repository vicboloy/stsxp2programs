/**
 * Links this Document to the given record
 * 
 * @param {JSRecord} recordToLinkTo
 * @param {JSRecord<db:/svy_framework/doc_document>} [record] document record; if not provided, the selected record will be used
 * 
 * @return {Boolean} success
 * 
 * @author patrick
 * @since 14.09.2012
 *
 * @properties={typeid:24,uuid:"C5EB2214-FEDA-449D-AB54-D5D6C4B964C8"}
 */
function linkToRecord(recordToLinkTo, record)
{
	if (!recordToLinkTo) {
		return false;
	}
	if (!record) {
		record = getSelectedRecord();
	}
	var _jsTable = databaseManager.getTable(recordToLinkTo);
	if (!_jsTable) {
		return false;
	}
	record.linked_table = databaseManager.getTable(recordToLinkTo).getSQLName().toLowerCase();
	record.linked_id = recordToLinkTo.getPKs().join(",");
	return databaseManager.saveData(record);
}

/**
 * Returns the linked record or null if the no record is linked or the record could not be found
 * 
 * @param {JSRecord<db:/svy_framework/doc_document>} [record] document record; if not provided, the selected record will be used
 * 
 * @return {JSRecord} linkedRecord
 * 
 * @author patrick
 * @since 14.09.2012
 *
 * @properties={typeid:24,uuid:"049ABB19-7EC8-462D-9DCE-10993A7C7859"}
 */
function getLinkedRecord(record)
{
	if (!record) {
		record = getSelectedRecord();
	}
	
	var _serverName = globals["svy_nav_getUserDBName"]();
	if (!_serverName) {
		return null;
	}
	
	if (!record.linked_id || !record.linked_table) {
		return null;
	}
	
	var _rowIdentifierColumns = databaseManager.getTable(_serverName, record.linked_table).getRowIdentifierColumnNames();
	var _pkValues = record.linked_id.split(",");
	
	var _query = databaseManager.createSelect("db:/" + globals["nav_db_framework"] + "/" + linked_table);
	_query.result.addPk();
	for (var i = 0; i < _rowIdentifierColumns.length; i++) {
		_query.where.add(_query.getColumn(_rowIdentifierColumns[i]).eq(_pkValues[i]));
	}
	var _fs = databaseManager.getFoundSet(_query);
	if (_fs && _fs.getSize() == 1) {
		return _fs.getRecord(1);
	} else {
		return null;
	}
}

/**
 * Returns the last revision record
 * 
 * @author patrick
 * @since 13.09.2012
 * 
 * @param {JSRecord<db:/svy_framework/doc_document>} [record] document record; if not provided, the selected record will be used
 *
 * @return {JSRecord<db:/svy_framework/doc_revision>} lastRevisionRecord
 *
 * @properties={typeid:24,uuid:"DFC06F98-C523-4B7B-BCB7-986327D369A3"}
 */
function getLastRevisionRecord(record)
{
	if (!record) {
		record = getSelectedRecord();
	}
	if (utils.hasRecords(record.doc_document_to_doc_revision$latest_revision)) {
		return record.doc_document_to_doc_revision$latest_revision.getRecord(1);
	} else {
		return null;
	}
}
