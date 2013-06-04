/**
 * @properties={typeid:24,uuid:"A8E06902-35D5-4C26-90FB-248CAA2C2E6C"}
 */
function loadRecords() {
	var _ds
	
	if (forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_module")].security_key_id) {
		var _query = '	SELECT	om.owner_id \
						FROM	sec_owner_in_module om, \
								sec_security_key sk\
						WHERE	sk.module_id = om.module_id \
						AND		sk.security_key_id = ?\
					UNION \
						SELECT 	pop.owner_id\
						FROM	prov_owner_packages pop,\
								prov_package_modules ppm,\
								sec_security_key sk2\
						WHERE	pop.package_id = ppm.package_id\
						AND		ppm.module_id = sk2.module_id\
						AND		sk2.security_key_id = ?\
						AND 	pop.start_date <= ? \
						AND   ( pop.end_date >= ? OR pop.end_date is null) '
		var _args = new Array();
		_args[0] = forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_module")].security_key_id.toString();
		_args[1] = forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_module")].security_key_id.toString();
		_args[2] = application.getServerTimeStamp()
		_args[3] = application.getServerTimeStamp()
		
		_ds = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, _args, -1);
		foundset.loadRecords(_ds);
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
 * @properties={typeid:24,uuid:"34D1FF29-C7D5-42BE-84EE-C03718E75DFB"}
 */
function onShow(firstShow, event) {
	loadRecords();
}
