/**
 * create a subform having an in memory datasource: [security_key_id, name, key_source]
 * 
 * @return {JSForm}
 * 
 * @properties={typeid:24,uuid:"D441BC54-EC68-4ACD-B88F-D0B07CF5149B"}
 * 
 */
function getFormWithInMemoryDataSource(){
	
	/* SVYFRWMK-423 
	 * 
	 * Show in a modal form dialog all the keys applied to the User, grouped by key source.
	 * 
	 * Any key can have 4 different sources: 
	 *  1. Keys directly related to user
	 *  2. Keys related to user-groups
	 *  3. Keys attached to modules, which are directly related to owner
	 *  4. Keys attached to modules wich are part of owner Packages.
	 * 
	 * The source is insert from the query in an in-memory datasource
	 * For any User is created a different datasource.
	 * 
	 * The form is destroyed and rebuilded any time the popup is opened.
	 *
	 * 
	 * */
	
	var userId = forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].foundset.user_id.toString();
	var userOrgId = forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].foundset.user_org_id.toString();
	var ownerId = forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].foundset.sec_user_org_to_sec_user.owner_id.toString();
	
	
	/** @type {JSDataSet<{security_key_id:String, name:String, key_source:String}>} */
	var ds = databaseManager.createEmptyDataSet(0, ['security_key_id','name','key_source']);
	
	/* Union for the query for any key source,  makes the union of them
	 * 
	 * 	TODO for any source group the denied keys are excluded.
	 *  To optimize query, first get all the keys, and then exclude the keys denied for the user.
	 *  (Note a key can be denied also for the Group)
	 *  
	 *  Loads the keys
	 *  - directly assigned to user and not denied for the user
	 *  - contained by the groups assigned to the user, excluding the keys denied for any of the user-groups, or directly denied for the user.
	 *  - keys related to the modules directly assigned to the owner, excluding the keys denied for any of the user-groups, or directly denied for the user
	 *  - keys related to the modules included in the packages assigned to the owner , excluding the keys denied for any of the user-groups, or directly denied for the user
	 *  
	 */ 
	if (userOrgId) {	
		var _query = "\
				SELECT security_key_id,\
				name,\
				'User' AS key_source\
				FROM	sec_security_key ssk\
				WHERE security_key_id IN \
					(\
						SELECT surd.security_key_id\
				 		FROM sec_user_right surd\
				 		WHERE surd.user_org_id = ?\
				 		AND	(\
				 			surd.is_denied IS NULL OR	surd.is_denied = 0\
				 			)\
				 	)\
				UNION\
				SELECT	security_key_id,\
						name,\
						'Group' AS key_source\
				FROM	sec_security_key \
				WHERE security_key_id IN\
				(\
					SELECT	ssk.security_key_id\
					FROM	sec_security_key ssk\
						JOIN sec_user_right sur ON ssk.security_key_id = sur.security_key_id\
						JOIN sec_user_in_group sug ON sur.group_id = sug.group_id\
					WHERE	\
					sug.user_org_id = ?\
					AND (sur.is_denied IS NULL OR sur.is_denied = 0)\
				)\
				AND NOT EXISTS (\
					SELECT	*\
					FROM	sec_user_right\
					WHERE	is_denied = 1\
					AND sec_user_right.security_key_id = sec_security_key.security_key_id\
					AND sec_user_right.user_org_id = ?\
					)\
				UNION  \
				SELECT	security_key_id,\
				name,\
				'Module' AS key_source\
				FROM	sec_security_key \
				WHERE module_id IS NOT NULL AND module_id IN \
						(\
							SELECT	som.module_id \
							FROM	sec_owner_in_module som \
							WHERE	som.owner_id = ?\
							AND	som.start_date <= ?\
							AND	( som.end_date IS NULL OR som.end_date >= ? )\
						)\
				AND security_key_id NOT IN\
						( \
							( 	SELECT 	sur4.security_key_id \
								FROM 	sec_user_right sur4 \
								WHERE 	sur4.user_org_id = ? \
								AND 	sur4.is_denied = 1 \
							)\
							UNION \
							(	SELECT	sur5.security_key_id \
								FROM 	sec_user_right sur5\
									JOIN \
										sec_user_in_group uig5 \
									ON 	sur5.group_id = uig5.group_id\
								WHERE 	uig5.user_org_id = ?\
								AND 	sur5.is_denied = 1 \
							)\
						)\
				UNION\
						SELECT	ssk2.security_key_id,  \
								name,\
								'Package' AS key_source\
						FROM	sec_security_key ssk2 \
								JOIN prov_package_modules ppm ON ssk2.module_id = ppm.module_id\
								JOIN prov_owner_packages pop ON ppm.package_id = pop.package_id\
						WHERE	 \
						pop.start_date <= ? \
						AND   ( pop.end_date >= ? OR pop.end_date is null) \
						AND		pop.owner_id = ? \
						AND	 ssk2.security_key_id NOT IN \
						( \
							( 	SELECT 	sur14.security_key_id \
								FROM 	sec_user_right sur14 \
								WHERE 	sur14.user_org_id = ? \
								AND 	sur14.is_denied = 1 \
							)\
							UNION \
							(	SELECT	sur15.security_key_id \
								FROM 	sec_user_right sur15 \
										JOIN sec_user_in_group uig15 ON sur15.group_id = uig15.group_id\
								WHERE 	uig15.user_org_id = ?\
								AND 	sur15.is_denied = 1 \
							)\
						)";
		
		var _args = new Array();
		_args[0] = userOrgId
		_args[1] = userOrgId;
		_args[2] = userOrgId;
		_args[3] = ownerId;	
		_args[4] = application.getServerTimeStamp()
		_args[5] = application.getServerTimeStamp()
		_args[6] = userOrgId; 
		_args[7] = userOrgId; 
		_args[8] = application.getServerTimeStamp()
		_args[9] = application.getServerTimeStamp()
		_args[10] = ownerId;			
		_args[11] = userOrgId; 
		_args[12] = userOrgId; 
		
		ds = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, _args, -1);
		
	}
	
	// create datasource if not exists
	var mem_datasource;
	if (!databaseManager.dataSourceExists('security_keys_user_' + userId)) 
	{
		mem_datasource = ds.createDataSource('security_keys_user_' + userId ,[JSColumn.TEXT ,JSColumn.TEXT, JSColumn.TEXT]);
	}
	else 
	{
		mem_datasource  = databaseManager.getDataSourceTableName('security_keys_user_' + userId)
	}
		

	// Remove/Create the form with the datasource
	if(solutionModel.getForm('svy_sec_main_user_all_key_applied_tbl_'+userId)) 
	{
		solutionModel.removeForm('svy_sec_main_user_all_key_applied_tbl_'+ userId)
	}
	var js_form = solutionModel.newForm('svy_sec_main_user_all_key_applied_tbl_'+ userId, solutionModel.getForm('svy_sec_main_user_all_key_applied_tbl'));

	
	js_form.dataSource = mem_datasource;
	var js_field = js_form.getField('name');
	js_field.dataProviderID = 'name';

	
	js_field = js_form.getField('key_source');
	js_field.dataProviderID = 'key_source';
		
	forms[js_form.name].controller.recreateUI();
	return js_form;
}
