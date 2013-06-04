/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"65F1A423-797F-48F4-8361-EF45E64B6696"}
 * @AllowToRunInFind
 */
function onRecordSelection(event) {
	
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_group_group_tbl")].foundset.find();
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_group_group_tbl")].foundset['group_id'] = '>0';
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_group_group_tbl")].foundset.search();
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_group_user_tbl")].foundset.find();
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_group_user_tbl")].foundset['user_org_id'] = '>0';
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_group_user_tbl")].foundset.search();
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_user_applied_tbl")].loadRecords();
}
