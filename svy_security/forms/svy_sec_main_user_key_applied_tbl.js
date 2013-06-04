/**
 * TODO fix SVY-4074
 * This dummy variable is used as data provider to some fields.
 * It is used as a work around for the web client, when clicking on the header-button on security forms don't trigger method
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BD42A1A-8AD3-4A38-82FB-CB181BA0FF71",variableType:4}
 */
var svy_sec_dummy = null;

/**
 * @properties={typeid:24,uuid:"3656772A-4A0C-48FC-B34A-C066A7F12983"}
 */
function loadRecords() {
	var _ds = databaseManager.createEmptyDataSet(0, ['security_key_id']);
	
	/* 
	 * 
	 * Fixes: 
	 * 1. remove UNION keys from packages
	 * 2. the exclude condition was not checking the user_org_id; was wrongly filtering our any keys was denied for at least a user or group.
	 * 
	 * 
	 *  Loads the keys
	 *  - directly assigned to user and not denied for the user
	 *  - contained by the groups assigned to the user, excluding the keys denied for any of the user-groups, or directly denied for the user.
	 * 
	 * */
	if (forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].foundset.user_org_id) {	
		var _query = '	SELECT	security_key_id \
						FROM	sec_security_key \
						WHERE	(security_key_id IN ( \
								SELECT	ssk.security_key_id \
								FROM	sec_security_key ssk, \
										sec_user_right sur, \
										sec_user_in_group sug \
								WHERE	ssk.security_key_id = sur.security_key_id \
								AND		sur.group_id = sug.group_id \
								AND		sug.user_org_id = ?) \
						OR		security_key_id IN ( \
								SELECT	security_key_id \
								FROM	sec_user_right \
								WHERE	(group_id IS NULL) \
								AND		(is_denied IS NULL OR is_denied = 0) \
								AND		user_org_id = ?)) \
						AND	security_key_id NOT IN \
						   ( \
							SELECT 	sur4.security_key_id \
								FROM 	sec_user_right sur4 \
								WHERE 	sur4.user_org_id = ? \
								AND 	sur4.is_denied = 1 \
							UNION \
							SELECT	sur5.security_key_id \
								FROM 	sec_user_right sur5, \
										sec_user_in_group uig5 \
								WHERE 	sur5.group_id = uig5.group_id \
								AND 	sur5.is_denied = 1 \
						     )';
		var _args = new Array();
		_args[0] = forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].foundset.user_org_id.toString();	
		_args[1] = forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].foundset.user_org_id.toString();	
		_args[2] = forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].foundset.user_org_id.toString();	
		
		_ds = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, _args, -1);
	}
	
	foundset.loadRecords(_ds);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"70F168DF-81BE-48D3-BF76-8D21CADD9F91"}
 */
function onShow(firstShow, event) {
	loadRecords();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C93D032F-4AEF-4EFF-AF02-9A306EA75432"}
 */
function onShowAllAppliedKeys(event) {
	var js_form = forms.svy_sec_main_user_all_key_applied_tbl.getFormWithInMemoryDataSource();
	globals.DIALOGS.showFormInModalDialog(js_form.name,1,1,-1,-1,'Applied Keys',true,false,'all_applied_keys')
}
