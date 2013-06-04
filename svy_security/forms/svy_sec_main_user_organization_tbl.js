/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"A9E77228-136E-4DCB-9AED-EDDA9F626AB4",variableType:-4}
 */
var addRecordParameters = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BBDB7064-F7E5-4953-BBA7-1F9552A626C5"}
 */
var addRecordQuery = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B92B1E7E-8482-43B1-AC18-2FE21ED9F522"}
 */
function deleteRecord(event) {
	foundset.deleteRecord();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8C96A6E8-5764-4F52-A61E-4B8EBAF1E0D0"}
 */
function addRecord(event) {
	
	/** @type {QBSelect} */
	var in_query = databaseManager.createSelect('db:/'+globals.nav_db_framework + '/sec_user_org');
	in_query.result.add(in_query.getColumn('organization_id'));
	in_query.where.add(in_query.getColumn('user_id').eq(forms.svy_sec_main_user_access.foundset.user_id.toString()));
	
	var query = databaseManager.createSelect('db:/'+globals.nav_db_framework + '/sec_organization');
	query.result.addPk();
	var where = query.where.add(query.getColumn('owner_id').eq(forms.svy_sec_main_user_access.foundset.owner_id.toString()));
	where.add(query.getColumn('organization_id').not.isin(in_query))
	
	var _dataSet = databaseManager.getDataSetByQuery(query,-1)
	
	//var _query = 'SELECT organization_id FROM sec_organization WHERE owner_id = ? AND organization_id NOT IN (SELECT organization_id FROM sec_user_org WHERE user_id = ?)';
	//var _arguments = [forms.svy_sec_main_user_access.foundset.owner_id.toString(),forms.svy_sec_main_user_access.foundset.user_id.toString()];
	//var _dataSet = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, _arguments, -1);
	
	if (globals.svy_sec_showSelectionDialog('db:/' + globals.nav_db_framework + '/sec_organization', _dataSet, ['organization_id'], ['name', 'sec_organization_to_sec_owner.name'], ['Organization', 'Owner'], [200, 200], 600, true) == 'select') {
		var tempFoundset = forms['svy_sec_selection_dialog_sec_organization'].foundset.duplicateFoundSet();
		for (var i = 1; i <= tempFoundset.getSize(); i++) {
			tempFoundset.setSelectedIndex(i);
			
			if (tempFoundset['is_selected'] == 1) {
				foundset.newRecord();
				foundset.organization_id = tempFoundset['organization_id'];
			}
		}
		
		databaseManager.saveData();
	}
}
