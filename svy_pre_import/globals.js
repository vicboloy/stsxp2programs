/**
 * @properties={typeid:24,uuid:"61AB3A85-E44D-4AFC-B3A6-8AD7EA0F8FC5"}
 */
function svy_pre_onSolutionOpen() {
	if (frameworkTablesExist("db:/svy_framework/nav_program")) { //only do the conversion if the framework tables exist
		scopes.globals.removeOldColumnsTables()	
	}
	
	if (frameworkTablesExist("db:/svy_framework/sec_user")) {
		/** @type {QBSelect<db:/svy_framework/sec_user>} */
		var queryUsers = databaseManager.createSelect("db:/svy_framework/sec_user");
		queryUsers.result.add(queryUsers.columns.admin_level.max);
		var dataset = databaseManager.getDataSetByQuery(queryUsers, 1);
		if (dataset && dataset.getValue(1,1) !== 8) {
			convertUserAdminLevels(dataset.getValue(1,1));
		}
	}
}

/**
 * Checks if a given dataSource already exists
 * 
 * @param {String} dataSource
 * 
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"2F96F971-12C6-46D5-AA21-B408760EC23F"}
 */
function frameworkTablesExist(dataSource) {
	if (getFrameworkTable(dataSource)) {
		return true;
	} else {
		return false;
	}
}

/**
 * Returns a table for the given datasource
 * 
 * @param {String} dataSource
 * 
 * @return {plugins.maintenance.JSTableObject} the table if found and null if not found
 *
 * @properties={typeid:24,uuid:"5E4A7B6F-BC42-413D-ACFA-A8670756B815"}
 */
function getFrameworkTable(dataSource) {
	var serverName = databaseManager.getDataSourceServerName(dataSource);
	var tableName = databaseManager.getDataSourceServerName(dataSource);
	
	if (!serverName || !tableName) {
		return null;
	}
	var server = plugins.maintenance.getServer(serverName);
	if (server) {
		return server.getTable(tableName);
	} else {
		return null;
	}
}

/**
 * @properties={typeid:24,uuid:"2A6B8DEF-4522-4FB4-9F23-511E7F4032C2"}
 * 
 * @AllowToRunInFind
 */
function removeOldColumnsTables() {
	//TODO: SA check if needed with the version of data?
	
	var tablesToRemove = ['db:/svy_framework/nav_programtabs', 'db:/svy_framework/nav_programtabs_autofill', 'db:/svy_framework/table1', 'db:/svy_framework/table2'];
	
	 // Give all program records a UUID and the related records
    var tables = new Object();
	tables.nav_program_toolbar = { datasource: 'db:/svy_framework/nav_program_toolbar', fk: 'program' };
	tables.nav_program_toolbar_item = { datasource: 'db:/svy_framework/nav_program_toolbar_item', fk: 'program' };
	tables.nav_tab = { datasource: 'db:/svy_framework/nav_tab', fk: 'program' };
	tables.nav_program_fields = { datasource: 'db:/svy_framework/nav_program_fields', fk: 'program_name' };
	tables.nav_help = { datasource: 'db:/svy_framework/nav_help', fk: 'program_name' };
	tables.nav_user_required_field = { datasource: 'db:/svy_framework/nav_user_required_field', fk: 'program_name' };
	tables.nav_advanced_search = { datasource: 'db:/svy_framework/nav_advanced_search', fk: 'program_name' };
	tables.nav_bookmarks = { datasource: 'db:/svy_framework/nav_bookmarks', fk: 'program' };
	tables.nav_field_validation_rule = { datasource: 'db:/svy_framework/nav_field_validation_rule', fk: 'program_name' };
	tables.nav_navigation_keys = { datasource: 'db:/svy_framework/nav_navigation_keys', fk: 'program_name' };
	tables.nav_print_list = { datasource: 'db:/svy_framework/nav_print_list', fk: 'program' };
	tables.nav_user_table_view = { datasource: 'db:/svy_framework/nav_user_table_view', fk: 'program_name' };
	tables.search_criteria = { datasource: 'db:/svy_framework/search_criteria', fk: 'program_name' };
    
    plugins.maintenance.setMaintenanceMode(true);
    
    var server = plugins.maintenance.getServer(databaseManager.getDataSourceServerName("db:/svy_framework/nav_program"));
    
    if (!server) {
    	return;
    }
   
	var table;
	for (var i = 0; i < tablesToRemove.length; i++) {
		table = getFrameworkTable(tablesToRemove[i]);
		if (table) {
			server.dropTable(databaseManager.getDataSourceTableName(tablesToRemove[i]));
		}
	}
	
	for (var j in tables) {
		/** @type {{datasource: String, fk: String}} */
		var tableObject = tables[j];
		table = getFrameworkTable(tableObject.datasource);
		if (table) {
			if (table.getColumn(tableObject.fk)) {
				table.deleteColumn(tableObject.fk)
			}
			server.synchronizeWithDB(table);
		}
	}
	
	plugins.maintenance.setMaintenanceMode(false)
}

/**
 * Converts old admin levels to the new system
 * 
 * @private 
 * 
 * @param {Number} maxValue
 * 
 * @author patrick
 * @date 27.10.2012
 * 
 * @properties={typeid:24,uuid:"4A9FF210-83C0-45BF-A69E-2B14D1D5627A"}
 */
function convertUserAdminLevels(maxValue) {
	var mapping = [[0, null], [8, 3], [11, 1], [1, 2], [2, 11]];
	
	if (maxValue == 2) {
		mapping.unshift([3, 2]);
	}
	
	var query = "UPDATE sec_user SET admin_level = ? WHERE admin_level = ?";
	var success;
	for (var i = 0; i < mapping.length; i++) {
		success = plugins.rawSQL.executeSQL(databaseManager.getDataSourceServerName("db:/svy_framework/sec_user"), "sec_user", query, mapping[i]);
		if (success) {
			application.output("Successfully converted user admin levels from level " + mapping[i][1] + " to level " + mapping[i][0], LOGGINGLEVEL.INFO);
		} else {
			application.output("Failed converted user admin levels from level " + mapping[i][1] + " to level " + mapping[i][0] + ": " + plugins.rawSQL.getException(), LOGGINGLEVEL.ERROR);
		}
	}
}
