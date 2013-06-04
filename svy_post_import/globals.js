/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"DD5255E7-6D37-452F-A01C-F1EF43428B51"}
 */
function svy_post_onSolutionOpen() {
	checkGroupUsers();
	checkProperties();
}

/**
 * @properties={typeid:24,uuid:"5114F03C-17B5-4FEC-AA5C-A26DCA7C7DCF"}
 */
function checkProperties() {
	var server = plugins.maintenance.getServer("svy_framework");
	if (server) {
		 var table = server.getTable('svy_property_sets')
		 if (!table) {
			 application.output("properties tables not yet present", LOGGINGLEVEL.WARNING);
			 return;
		 }
	}

	application.output("Starting property conversion", LOGGINGLEVEL.INFO);
	
	/** @type {QBSelect<db:/svy_framework/svy_property_sets>} */
	var queryProperties = databaseManager.createSelect("db:/svy_framework/svy_property_sets");
	queryProperties.result.add(queryProperties.columns.svy_property_sets_id.count);
	queryProperties.where.add(queryProperties.columns.name.eq("application_settings"));
	var dataset = databaseManager.getDataSetByQuery(queryProperties, 1);
	if (dataset && dataset.getValue(1,1) === 0) {
		convertProperties();
		application.output("Properties successfully converted", LOGGINGLEVEL.INFO);		
	} else {
		application.output("Properties already converted", LOGGINGLEVEL.INFO);
	}
}

/**
 * Converts the properties from nav_properties to the new system
 * 
 * @private 
 * 
 * @author patrick
 * @since 25.10.2012
 * 
 * @properties={typeid:24,uuid:"37A1FE87-CD1E-42A0-81D1-5468C408FAD9"}
 * @AllowToRunInFind
 */
function convertProperties() {
    
	/** @type {QBSelect<db:/svy_framework/nav_properties>} */
	var query = databaseManager.createSelect("db:/svy_framework/nav_properties");
	query.result.addPk();
	query.where.add(query.columns.property_name.eq(query.getParameter("propName")));
	
	/** @type {JSFoundSet<db:/svy_framework/nav_properties>} */
	var fs = databaseManager.getFoundSet("db:/svy_framework/nav_properties");
	
	/**
	 * @param {Object} propertyName
	 * @return {JSRecord<db:/svy_framework/nav_properties>}
	 */
	function getOriginalRecord(propertyName) {
		var originalRecord = null;
		query.params["propName"] = propertyName;
		fs.loadRecords(query);
		if (utils.hasRecords(fs)) {
			originalRecord = fs.getRecord(1);
		}
		return originalRecord;
	}
	
	application.output("Converting nav_properties", LOGGINGLEVEL.INFO);
	
	/*
	 * Application settings
	 */
	var appSettings = convertProperties_createPropertySet("application_settings", null, "i18n:svy.fr.property_set.application_settings", null, "media:///svy_application_server_preferences_48.png", null, 10);
	
	// form_conventions
	var property = convertProperties_createProperty("form_conventions", appSettings, null, 10, 8, "i18n:svy.fr.property.form_conventions");
	var record = getOriginalRecord("form_conventions");
	convertProperties_addValueDescription(property, 1, "form_conventions_detail", JSVariable.TEXT, JSField.TEXT_FIELD, "i18n:svy.fr.property.form_conventions_detail", "", record && record.property_value ? record.property_value[0] : "base_form_name + '_dtl'");
	convertProperties_addValueDescription(property, 2, "form_conventions_table", JSVariable.TEXT, JSField.TEXT_FIELD, "i18n:svy.fr.property.form_conventions_table", "", record && record.property_value ? record.property_value[1] : "base_form_name + '_tbl'");

	// formPrefix
	property = convertProperties_createProperty("form_types", appSettings, null, 20, 8);
	record = getOriginalRecord("form_types");
	convertProperties_addValueDescription(property, 1, "form_types", JSVariable.TEXT, JSField.TEXT_FIELD, "i18n:svy.fr.property.form_types", "", record && record.property_value ? record.property_value.join(", ") : "detail, table");
	
	// formPrefix
	property = convertProperties_createProperty("form_prefix", appSettings, null, 30, 8);
	record = getOriginalRecord("formPrefix");
	convertProperties_addValueDescription(property, 1, "form_prefix", JSVariable.TEXT, JSField.TEXT_FIELD, "i18n:svy.fr.property.form_prefix", "", record && record.property_value ? record.property_value[0] : "svy_");

	// program_toolbar_XX
	property = convertProperties_createProperty("program_toolbar", appSettings, null, 40, 8, "i18n:svy.fr.property.program_toolbar");
	record = getOriginalRecord("program_toolbar_main");
	convertProperties_addValueDescription(property, 1, "program_toolbar_main", JSVariable.TEXT, JSField.TEXT_FIELD, "i18n:svy.fr.property.program_toolbar_main", "", record && record.property_value ? record.property_value[0] : "svy_nav_fr_toolbar_pv");
	record = getOriginalRecord("program_toolbar_tab");
	convertProperties_addValueDescription(property, 1, "program_toolbar_tab", JSVariable.TEXT, JSField.TEXT_FIELD, "i18n:svy.fr.property.program_toolbar_tab", "", record && record.property_value ? record.property_value[0] : "svy_nav_fr_toolbar_pv");

	// createNewRecordsOnTop
	property = convertProperties_createProperty("create_new_records_on_top", appSettings, null, 50, 4);
	record = getOriginalRecord("createNewRecordsOnTop");
	convertProperties_addValueDescription(property, 1, "create_new_records_on_top", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.create_new_records_on_top", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 1);

	// multiple_tabs_per_program
	property = convertProperties_createProperty("multiple_tabs_per_program", appSettings, null, 60, 4);
	record = getOriginalRecord("multiple_tabs_per_program");
	convertProperties_addValueDescription(property, 1, "multiple_tabs_per_program", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.multiple_tabs_per_program", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 0);

	// filter_on_solution_name
	property = convertProperties_createProperty("filter_on_solution_name", appSettings, null, 70, 8);
	record = getOriginalRecord("filter_on_solution_name");
	convertProperties_addValueDescription(property, 1, "filter_on_solution_name", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.filter_on_solution_name", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 1);

	// saveUserPropertiesInDB
	property = convertProperties_createProperty("save_user_properties_in_db", appSettings, null, 80, 4);
	record = getOriginalRecord("saveUserPropertiesInDB");
	convertProperties_addValueDescription(property, 1, "save_user_properties_in_db", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.save_user_properties_in_db", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 0);

	// hide_menu_bar
	property = convertProperties_createProperty("hide_menu_bar", appSettings, null, 90, 4);
	convertProperties_addValueDescription(property, 1, "hide_menu_bar", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.hide_menu_bar", "", 0);

	// null_column_validator_enabled
	property = convertProperties_createProperty("null_column_validator_enabled", appSettings, null, 100, 4);
	convertProperties_addValueDescription(property, 1, "null_column_validator_enabled", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.null_column_validator_enabled", "", 1);

	// search_begin_fields
	property = convertProperties_createProperty("search_begin_fields", appSettings, null, 105, 4);
	convertProperties_addValueDescription(property, 1, "search_begin_fields", JSVariable.INTEGER, JSField.CHECKS, "i18n.svy.fr.property.search_begin_fields", "", 1);
	
	// filterOrganization
	property = convertProperties_createProperty("organization_filter", appSettings, null, 110, 4, "i18n:svy.fr.property.organization_filter");
	record = getOriginalRecord("filterOrganizationType");
	convertProperties_addValueDescription(property, 1, "organization_filter_type", JSVariable.TEXT, JSField.COMBOBOX, "i18n:svy.fr.property.organization_filter_type", "", record && record.property_value ? record.property_value[0] : "COMBOBOX", null, ["Combobox|COMBOBOX", "Type ahead|TYPE_AHEAD"]);
	record = getOriginalRecord("filterOrganizationWidth");
	convertProperties_addValueDescription(property, 2, "organization_filter_width", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.property.organization_filter_width", "", record && record.property_value ? record.property_value[0] : 140);

	// data_version
	property = convertProperties_createProperty("data_version", appSettings, null, 120, 8, "Data version");
	record = getOriginalRecord("data_version");
	convertProperties_addValueDescription(property, 1, "data_version", JSVariable.TEXT, JSField.TEXT_FIELD, "i18n:svy.fr.property.data_version", "", record && record.property_value ? record.property_value[0] : "4.0.0");

	
	
	/* 
	 * Runtime settings
	 */
	appSettings = convertProperties_createPropertySet("runtime_settings", null, "i18n:svy.fr.property_set.runtime_settings", "i18n:svy.fr.property_set_description.runtime_settings", "media:///svy_application_preferences_48.png", null, 20);	
	
	// framework_window_size
	property = convertProperties_createProperty("framework_window_size", appSettings, null, 1, 0, "i18n:svy.fr.property.framework_window_size");
	record = getOriginalRecord("framework_window_size");
	convertProperties_addValueDescription(property, 1, "framework_window_size_width", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.property.framework_window_size_width", "", record && record.property_value ? record.property_value[0].split(",")[0] : "1020");
	convertProperties_addValueDescription(property, 1, "framework_window_size_height", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.property.framework_window_size_height", "", record && record.property_value ? record.property_value[0].split(",")[1] : "740");

	// force_window_size
	property = convertProperties_createProperty("force_window_size", appSettings, null, 2, 0);
	record = getOriginalRecord("force_window_size");
	convertProperties_addValueDescription(property, 1, "force_window_size", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.force_window_size", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 0);

	// show_open_tabs
	property = convertProperties_createProperty("show_open_tabs", appSettings, null, 3, 0);
	record = getOriginalRecord("show_open_tabs");
	convertProperties_addValueDescription(property, 1, "show_open_tabs", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.show_open_tabs", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 1);

	// splitPanesDividerXX
	property = convertProperties_createProperty("split_panes_divider", appSettings, null, 4, 0, "i18n:svy.fr.property.split_panes_divider");
	record = getOriginalRecord("splitPanesDividerSize");
	convertProperties_addValueDescription(property, 1, "split_panes_divider_size", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.property.split_panes_divider_size", "", record && record.property_value ? record.property_value[0] : 8);
	record = getOriginalRecord("splitPanesDividerColor");
	convertProperties_addValueDescription(property, 1, "split_panes_divider_color", JSVariable.TEXT, JSField.TEXT_FIELD, "i18n:svy.fr.property.split_panes_divider_color", "", record && record.property_value ? record.property_value[0] : null);

	// recordHistory
	property = convertProperties_createProperty("keep_record_history", appSettings, null, 5, 0);
	record = getOriginalRecord("recordHistory");
	convertProperties_addValueDescription(property, 1, "keep_record_history", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.keep_record_history", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 1);

	// advanced_search
	property = convertProperties_createProperty("advanced_search", appSettings, null, 6, 0);
	record = getOriginalRecord("advanced_search");
	convertProperties_addValueDescription(property, 1, "advanced_search", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.advanced_search", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 1);

	// maxBookmarks
	property = convertProperties_createProperty("max_bookmarks", appSettings, null, 7, 2);
	record = getOriginalRecord("maxBookmarks");
	convertProperties_addValueDescription(property, 1, "max_bookmarks", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.property.max_bookmarks", "", record && record.property_value ? record.property_value[0] : 7);
	
	// maxFavorites
	property = convertProperties_createProperty("max_favorites", appSettings, null, 8, 2);
	record = getOriginalRecord("maxFavorites");
	convertProperties_addValueDescription(property, 1, "max_favorites", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.property.max_favorites", "", record && record.property_value ? record.property_value[0] : 12);

	// startup_program
	property = convertProperties_createProperty("startup_program", appSettings, null, 9, 0);
	record = getOriginalRecord("startup_program");
	convertProperties_addValueDescription(property, 1, "startup_program", JSVariable.TEXT, JSField.COMBOBOX, "i18n:svy.fr.property.startup_program", "", record && record.property_value ? record.property_value[0] : "", "nav_programname");

	// web_client_scrolling
	property = convertProperties_createProperty("web_client_tableview", appSettings, null, 10, 0, "i18n:svy.fr.property.web_client_tableview");
	convertProperties_addValueDescription(property, 1, "web_client_tableview_scrollable", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.web_client_tableview_scrollable", "", 1);
	convertProperties_addValueDescription(property, 2, "web_client_tableview_scrollable_keep_loaded_rows", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.web_client_tableview_scrollable_keep_loaded_rows", "", 1);

	
	/*
	 * Password rules
	 */	
	appSettings = convertProperties_createPropertySet("password_rules", null, "i18n:svy.fr.property_set.password_rules", "i18n:svy.fr.property_set_description.password_rules", "media:///svy_key1_preferences_48.png", null, 30);
	
	// password_min_lenght
	property = convertProperties_createProperty("password_minimum_length", appSettings, null, 1, 2);
	convertProperties_addValueDescription(property, 1, "password_minimum_length", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.lbl.min_password_length", "", 6);

	// password_max_length
	property = convertProperties_createProperty("password_maximum_length", appSettings, null, 2, 2);
	convertProperties_addValueDescription(property, 1, "password_maximum_length", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.lbl.max_password_length", "", null);

	// password_num_let
	property = convertProperties_createProperty("password_numbers_and_letters", appSettings, null, 3, 2);
	convertProperties_addValueDescription(property, 1, "password_numbers_and_letters", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.dlg.password_contain_letters_numbers", "", 1);

	// password_same_letters
	property = convertProperties_createProperty("password_must_not_start_with_user_name", appSettings, null, 4, 2);
	convertProperties_addValueDescription(property, 1, "password_must_not_start_with_user_name", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.dlg.password_same_begin", "", 1);

	// password_renew
	property = convertProperties_createProperty("password_renewal_interval", appSettings, null, 5, 2);
	convertProperties_addValueDescription(property, 1, "password_renewal_interval", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.lbl.password_renewed", "", 90);

	// password_unique_before_reuse
	property = convertProperties_createProperty("password_number_unique_before_reuse", appSettings, null, 6, 2);
	convertProperties_addValueDescription(property, 1, "password_number_unique_before_reuse", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.lbl.password_unique_before_reuse", "", 10);

	// password_input_interval
	property = convertProperties_createProperty("password_input_interval", appSettings, null, 7, 2);
	convertProperties_addValueDescription(property, 1, "password_input_interval", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.lbl.password_input_interval", "", null);

	// password_times_wrong
	property = convertProperties_createProperty("password_lock_user_after_number_of_attempts", appSettings, null, 8, 2);
	convertProperties_addValueDescription(property, 1, "password_lock_user_after_number_of_attempts", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.lbl.password_wrong_times", "", 3);	

	// password_timespan_before_lock
	property = convertProperties_createProperty("password_timespan_before_lock", appSettings, null, 9, 2);
	convertProperties_addValueDescription(property, 1, "password_timespan_before_lock", JSVariable.INTEGER, JSField.TEXT_FIELD, "i18n:svy.fr.lbl.password_timespan_before_lock", "", null);	
	
	/*
	 * Document management 
	 */
	appSettings = convertProperties_createPropertySet("document_management", null, "i18n:svy.fr.property_set.document_management", "i18n:svy.fr.property_set_description.document_management", "media:///svy_documents_preferences_48.png", null, 40);
	
	// document_management
	property = convertProperties_createProperty("document_management", appSettings, null, 1, 2);
	record = getOriginalRecord("document_management");
	convertProperties_addValueDescription(property, 1, "document_management", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.document_management", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 1);
	
	// document_management_in_database
	property = convertProperties_createProperty("document_management_in_database", appSettings, null, 2, 2);
	record = getOriginalRecord("document_management_in_database");
	convertProperties_addValueDescription(property, 1, "document_management_in_database", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.document_management_in_database", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 1);
	
	// document_management_revision
	property = convertProperties_createProperty("document_management_revision", appSettings, null, 2, 2);
	record = getOriginalRecord("document_management_revision");
	convertProperties_addValueDescription(property, 1, "document_management_revision", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.document_management_revision", "", record && record.property_value ? (record.property_value[0] == "true" ? true : false) : true);
	
	// document_management_tracked_checkout
	property = convertProperties_createProperty("document_management_tracked_checkout", appSettings, null, 3, 1);
	record = getOriginalRecord("document_management_tracked_checkout");
	convertProperties_addValueDescription(property, 1, "document_management_tracked_checkout", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.document_management_tracked_checkout", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 1);

	// document_management_allow_all_file_types
	property = convertProperties_createProperty("document_management_allow_all_file_types", appSettings, null, 4, 1);
	record = getOriginalRecord("document_management_allow_all_file_types");
	convertProperties_addValueDescription(property, 1, "document_management_allow_all_file_types", JSVariable.INTEGER, JSField.CHECKS, "i18n:svy.fr.property.document_management_allow_all_file_types", "", record && record.property_value ? (record.property_value[0] == "true" ? 1 : 0) : 0);
	
	databaseManager.saveData();
	
	// get current password rules and create owner specific values
	
	/** @type {JSFoundSet<db:/svy_framework/sec_owner>} */
	var ownerFs = databaseManager.getFoundSet("db:/svy_framework/sec_owner");
	ownerFs.loadAllRecords();
	
	/** @type {JSFoundSet<db:/svy_framework/svy_properties>} */
	var propFs = databaseManager.getFoundSet("db:/svy_framework/svy_properties");
	
	function getProperty(propertyName) {
		if (propFs.find()) {
			propFs.property_name = propertyName;
			if (propFs.search()) {
				return propFs.getRecord(1);
			}
		}
		return null;
	}
	
	application.output("Creating owner specific password rules", LOGGINGLEVEL.INFO);
	
	/** @type {JSFoundSet<db:/svy_framework/svy_property_values>} */
	var propValueFs = databaseManager.getFoundSet("db:/svy_framework/svy_property_values");
	for (var oi = 1; oi <= ownerFs.getSize(); oi++) {
		var ownerRecord = ownerFs.getRecord(oi);
		
		var propName = "password_minimum_length";
		var dataproviderName = "password_min_lenght";
		var passwordProperty = getProperty(propName);
		
		var propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];
		databaseManager.saveData(propValueRecord);
		
		propName = "password_maximum_length";
		dataproviderName = "password_max_length";
		passwordProperty = getProperty(propName);
		
		propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];
		databaseManager.saveData(propValueRecord);
		
		propName = "password_numbers_and_letters";
		dataproviderName = "password_num_let";
		passwordProperty = getProperty(propName);
		
		propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];		
		databaseManager.saveData(propValueRecord);
		
		propName = "password_must_not_start_with_user_name";
		dataproviderName = "password_same_letters";
		passwordProperty = getProperty(propName);
		
		propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];		
		databaseManager.saveData(propValueRecord);
		
		propName = "password_renewal_interval";
		dataproviderName = "password_renew";
		passwordProperty = getProperty(propName);
		
		propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];		
		databaseManager.saveData(propValueRecord);
		
		propName = "password_number_unique_before_reuse";
		dataproviderName = "password_unique_before_reuse";
		passwordProperty = getProperty(propName);
		
		propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];		
		databaseManager.saveData(propValueRecord);
		
		propName = "password_input_interval";
		dataproviderName = "password_input_interval";
		passwordProperty = getProperty(propName);
		
		propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];		
		databaseManager.saveData(propValueRecord);
		
		propName = "password_lock_user_after_number_of_attempts";
		dataproviderName = "password_times_wrong";
		passwordProperty = getProperty(propName);
		
		propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];		
		databaseManager.saveData(propValueRecord);
		
		propName = "password_timespan_before_lock";
		dataproviderName = "password_timespan_before_lock";
		passwordProperty = getProperty(propName);
		
		propValueRecord = propValueFs.getRecord(propValueFs.newRecord());
		propValueRecord.admin_level = 2;
		propValueRecord.svy_properties_id = passwordProperty.svy_properties_id;
		propValueRecord.owner_id = ownerRecord.owner_id;
		propValueRecord.property_name = propName;
		propValueRecord.property_owner_id = ownerRecord.owner_id;
		propValueRecord.property_value = [{name: propName, value: ownerRecord[dataproviderName], sort: 1}];	
		databaseManager.saveData(propValueRecord);
	}
	
	databaseManager.saveData();
}

/**
 * Creates a new PropertySet
 * 
 * @param {String} name						- the name of this property set
 * @param {String|UUID} [applicationId]		- an optional applicationId of the application that this property is exclusively for
 * @param {String} [displayName] 			- the name that is shown (usually i18n)
 * @param {String} [description]			- the description of this property set (usually i18n)
 * @param {String} [icon]					- the icon of this property set as a String URL or byte[]
 * @param {String} [formName]				- the name of the form used to present this property set
 * @param {Number} [sortOrder] 				- the index on which this set is shown in a property editor
 * 
 * @private
 * 
 * @properties={typeid:24,uuid:"1855CDD5-60A8-480D-A5CE-2E98704618C6"}
 */
function convertProperties_createPropertySet(name, applicationId, displayName, description, icon, formName, sortOrder) {
	/** @type {JSFoundSet<db:/svy_framework/svy_property_sets>} */
	var fs = databaseManager.getFoundSet("db:/svy_framework/svy_property_sets");		
	var record = fs.getRecord(fs.newRecord());
	record.name = name;
	if (applicationId) {
		record.application_id = applicationId;
	}
	if (displayName) {
		record.display_name = displayName;
	}
	if (description) {
		record.description = description;
	}
	if (icon) {
		record.icon = icon;
	}
	if (formName) {
		record.form_name = formName;
	}
	if (sortOrder) {
		record.sort_order = sortOrder;
	}
	databaseManager.saveData(record);
	
	return record;
}

/**
 * Creates a new Property
 * 
 * @param {String} name													- the name of this property
 * @param {JSRecord<db:/svy_framework/svy_property_sets>} propertySet	- the propertySet given as name, ID or PropertySet object
 * @param {String|UUID} [applicationId]									- an optional applicationId of the application that this property is exclusively for
 * @param {Number} [sortOrder]											- the sortOrder of this property in the set
 * @param {Number} [adminLevel]											- the minimum admin level required to edit this property
 * @param {String} [header]												- the header text that is placed above the property values
 * 
 * @return {JSRecord<db:/svy_framework/svy_properties>}
 * 
 * @private
 *
 * @properties={typeid:24,uuid:"FBC84A9B-AB62-45BA-9D5E-48DA4D774B83"}
 */
function convertProperties_createProperty(name, propertySet, applicationId, sortOrder, adminLevel, header) {
	/** @type {JSFoundSet<db:/svy_framework/svy_properties>} */
	var fs = databaseManager.getFoundSet("db:/svy_framework/svy_properties");
	
	var propertyRecord = fs.getRecord(fs.newRecord());
	propertyRecord.property_name = name;
	propertyRecord.svy_property_sets_id = propertySet.svy_property_sets_id;
	if (applicationId || propertySet.application_id) {
		// either application specific itself or by its set
		propertyRecord.application_id = applicationId ? applicationId : propertySet.application_id;
	}
	if (sortOrder) {
		propertyRecord.sort_order = sortOrder;
	}
	if (adminLevel >= 0) {
		propertyRecord.admin_level = adminLevel;
	}
	if (header) {
		propertyRecord.header_text = header;
	}
	databaseManager.saveData(propertyRecord);
	return propertyRecord;
}

/**
 * 
 * @param {JSRecord<db:/svy_framework/svy_properties>} record
 * @param {Number} sortOrder
 * @param {String} name
 * @param {Number} dataType
 * @param {Number} [displayType]
 * @param {String} [label]
 * @param {String} [description]
 * @param {Object} [defaultValue]
 * @param {String} [valueListName]
 * @param {Array} [valueListValues]
 * 
 * @private
 *
 * @properties={typeid:24,uuid:"F7F27FE0-1194-44DA-8622-ED0A4F082EE2"}
 */
function convertProperties_addValueDescription(record, sortOrder, name, dataType, displayType, label, description, defaultValue, valueListName, valueListValues) {
	
	var descriptionObject = new Object();
	descriptionObject.sortOrder = sortOrder;
	descriptionObject.name = name;
	descriptionObject.application_id = record.application_id;
	descriptionObject.label = label;
	descriptionObject.dataType = dataType;
	descriptionObject.value = defaultValue;
	descriptionObject.displayType = displayType ? displayType : JSField.TEXT_FIELD;
	descriptionObject.valueListName = valueListName;	
	descriptionObject.valueListValues = valueListValues;	
	
	if (!dataType && defaultValue) {
		if (defaultValue instanceof Number) {
			descriptionObject.dataType = JSVariable.NUMBER;
		} else if (defaultValue instanceof Date) {
			descriptionObject.dataType = JSVariable.DATETIME;
		} else if (defaultValue instanceof Array) {
			descriptionObject.dataType = JSVariable.MEDIA;
		} else {
			descriptionObject.dataType = JSVariable.TEXT;
		}
	}
	
	var valueDescriptions = record.value_description;
	if (!valueDescriptions) {
		valueDescriptions = new Array();
	}
	valueDescriptions.push(descriptionObject);
	record.value_description = valueDescriptions;
	databaseManager.saveData(record);
}

/**
 * @properties={typeid:24,uuid:"049C1ADE-76CB-4E0D-B00C-597462EC357C"}
 * @AllowToRunInFind
 */
function updateAdminLevel() {
	//get all databases with a sec_user table.
	var _serverNames = plugins.maintenance.getServerNames(true, true);
	/** @type {JSFoundSet<db:/svy_framework/sec_user>} */
	var _fs;
	var _server, _table, _column, _cnt, _query, _success = false;
	application.output("Admin level column update", LOGGINGLEVEL.INFO);
	for (var i = 0; i < _serverNames.length; i++) {
		_server = plugins.maintenance.getServer(_serverNames[i]);
		_table = _server.getTable("sec_user");
		if (_table) {
			
			application.output("Admin level column update, server " + _serverNames[i], LOGGINGLEVEL.INFO);
			_column = _table.getColumn("flag_system_administrator");
			if (_column) {
				_fs = databaseManager.getFoundSet(_serverNames[i], "sec_user");
				if (_fs.find()) {
					_fs.admin_level = "!^";
					_cnt = _fs.search();
					
					if (_cnt == 0) {
						_query = "UPDATE sec_user SET admin_level = 1 WHERE flag_system_administrator = 1";
						if (plugins.rawSQL.executeSQL(_serverNames[i], "sec_user", _query, null)) {
							_table.deleteColumn("flag_system_administrator");
							_success = true;
						}
						
						_query = "UPDATE sec_user SET admin_level = 2 WHERE flag_super_administrator = 1";
						if (plugins.rawSQL.executeSQL(_serverNames[i], "sec_user", _query, null)) {
							_table.deleteColumn("flag_super_administrator");
							_success = true;
						}
					} else {
						application.output("Admin level column update, server " + _serverNames[i] + ", records found -> already updated", LOGGINGLEVEL.INFO);
						_table.deleteColumn("flag_system_administrator");
						_table.deleteColumn("flag_super_administrator");
						_success = true;
					}
					
					if (_success && _server.synchronizeWithDB(_table)) {
						application.output("Admin level column update, server " + _serverNames[i] + " -> SUCCESSFUL", LOGGINGLEVEL.INFO);
					} else {
						application.output("Admin level column update, server " + _serverNames[i] + " -> FAILED", LOGGINGLEVEL.WARNING);
					}
				}
			} else {
				application.output("Admin level column update, server " + _serverNames[i] + ", column not found -> already updated", LOGGINGLEVEL.INFO);
			}
		}
	}
}

/**
 * The framework uses the group users to login, check if group is available otherwise create it.
 * 
 * @properties={typeid:24,uuid:"3C1A7435-A785-45AB-A1D3-1AD474CDCBA0"}
 */
function checkGroupUsers() {
	var _group = 'users'
	var _groups = security.getGroups().getColumnAsArray(2)
	if(_groups.lastIndexOf(_group) == -1) //if group is not on server create group
	{
		security.createGroup(_group)
	}
}

/**
 * @properties={typeid:24,uuid:"3CE738DF-08AE-48D3-8C41-A003AB598D62"}
 */
function _test() {
	//copy data
	/** @type {JSFoundSet<db:/svy_framework/nav_program>} */
	var _fs = databaseManager.getFoundSet("svy_framework",'nav_program')
_fs.loadAllRecords()
	
	if(_fs.getSize() == 0 )
	{
		application.output("FS nav_program could not be loaded 2", LOGGINGLEVEL.ERROR);
	}
	var _record
	for (var j = 1; j <= _fs.getSize(); j++) {
		_record = _fs.getRecord(j)
		_record.program_name = _record['program_name_copy2']
		
	}
	var save = databaseManager.saveData()
	application.output("Save 2:"+save, LOGGINGLEVEL.ERROR);
}
