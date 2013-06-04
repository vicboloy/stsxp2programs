/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C6CE7050-F5EE-49EE-B7EE-E01B4EAB504B"}
 */
var organizationID = null;

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E7E36841-B221-461D-B42A-6AA462816AB6"}
 */
function onRecordSelection(event) {
	enableDisableOwnerID();
	setValueList();
	enableDisableForm();
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D8B55F83-55E0-445F-9A39-FE27002BA937"}
 * @AllowToRunInFind
 */
function onDataChangeOrganizationID(oldValue, newValue, event) {
	forms[globals.svy_utl_getFrameworkFormName('sec_main_group_user_tbl')].filterOrganization(organizationID);
	return true;
}

/**
 * @properties={typeid:24,uuid:"8324D635-0577-4B72-A5B0-1621E0B140C8"}
 */
function enableDisableForm() {	
	var _enable = false;
	if (organizationID) {
		_enable = true;
	}
	
	elements.organizationID.enabled = _enable;
	forms[globals.svy_utl_getFrameworkFormName('sec_main_group_user_tbl')].controller.enabled = _enable;
	forms[globals.svy_utl_getFrameworkFormName('sec_main_group_key_tbl')].controller.enabled = _enable;
}

/**
 * @properties={typeid:24,uuid:"A79A2AA2-6511-4B9F-B786-F7F608C698DB"}
 */
function setValueList() {
	var _vlRealValues = new Array();
	var _vlDisplayValues = new Array();
	var _vlFirstValue = '';
	
	if (databaseManager.hasRecords(foundset.sec_group_to_sec_owner)) {
		var _fsGroupOwners = foundset.sec_group_to_sec_owner.duplicateFoundSet();
		
		_fsGroupOwners.unrelate();
		_fsGroupOwners.sec_owner_to_sec_organization.sort('name asc');
		
		for (var i = 1; i <= _fsGroupOwners.sec_owner_to_sec_organization.getSize(); i++) {
			_fsGroupOwners.sec_owner_to_sec_organization.setSelectedIndex(i);
			_vlRealValues[i - 1] = _fsGroupOwners.sec_owner_to_sec_organization.organization_id;
			_vlDisplayValues[i - 1] = _fsGroupOwners.sec_owner_to_sec_organization.name;
			
			if (i == 1) {
				_vlFirstValue = _fsGroupOwners.sec_owner_to_sec_organization.organization_id;
			}
		}
	}
	
	application.setValueListItems('svy_sec_group_organizations', _vlDisplayValues, _vlRealValues);
	organizationID = _vlFirstValue;
	
	forms[globals.svy_utl_getFrameworkFormName('sec_main_group_user_tbl')].filterOrganization(organizationID);
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"E032E4DE-05B7-44EF-810F-6674AAC8C37A"}
 */
function enableDisableOwnerID() {
	if (databaseManager.hasRecords(foundset.sec_group_to_sec_user_in_group) || databaseManager.hasRecords(foundset.sec_group_to_sec_user_right)) {
		elements.owner_id.enabled = false;
	} else {
		elements.owner_id.enabled = true;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0143AC7E-C91D-4E0D-98F9-560AD44DD347"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	doSearch();
	
	if (firstShow) {
		enableDisableOwnerID();
		setValueList();
		enableDisableForm();
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8B1A1734-EF58-4E88-BA0A-D4BC3CA28D5B"}
 */
function onDataChangeOwnerID(oldValue, newValue, event) {
	setValueList()
	enableDisableForm();
	
	return true;
}

/**
 * @properties={typeid:24,uuid:"CFEE3185-C8EF-45D6-A8B5-DF0ED7473E9C"}
 * @AllowToRunInFind
 */
function doSearch() {
	if (forms[globals.svy_utl_getFrameworkFormName('sec_main')].searchArgument) {
		foundset.find();
		foundset.name = '#%' + forms[globals.svy_utl_getFrameworkFormName('sec_main')].searchArgument + '%';
		foundset.search();
	} else {
		foundset.loadAllRecords();
	}
}
