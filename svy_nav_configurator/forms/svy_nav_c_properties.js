/**
 *	Open a form to edit the array
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"23F23292-CA95-4C5F-88AC-3960F6E0956E"}
 */
function editArray()
{
	if(! property_value)
	{
		
		property_value = new Array()
	}
	forms.svy_nav_c_array_editor.mode = 'EDIT'
	globals['svy_nav_arrayEdit'](property_value, controller.getName(), 'property_value')
	
}

/**
 *	Init properties, if there are no properties, create all the properties
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * 
 * @param {JSEvent} event
 * @param {Boolean} _loadAll load all records at the end of the method, only nescessary when executed by button on the form itself 
 * @return  none
 *
 * @properties={showInMenu:true,typeid:24,uuid:"B3B8E356-1638-41F1-911B-8360F79A42FB"}
 * @AllowToRunInFind
 */
function initSetProperties(event, _loadAll)
{
	
	/*
	//form types
	globals.nav_properties = 'form_types'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = ['detail','table']
	}
		
	//form conventions
	globals.nav_properties = 'form_conventions'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = ['base_form_name + \'_dtl\'','base_form_name + \'_tbl\'']
	}
	
	//default start program
	globals.nav_properties = 'startup_program'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = []
	}
	
	//set show open tabs
	globals.nav_properties = 'show_open_tabs'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = [false]
	}
	
	//set force window properties
	globals.nav_properties = 'force_window_size'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = [false]
	}
	
	//set window size
	globals.nav_properties = 'framework_window_size'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = ["1020,740"]
	}
	
	//show multiple tabs for each program
	globals.nav_properties = 'multiple_tabs_per_program'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = ["false"]
	}
	
	//allow to create table by user
	globals.nav_properties = 'create_table_by_user'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = ["true"]
	}
	
	//allow to create table by user
	globals.nav_properties = 'advanced_search'
	if(!databaseManager.hasRecords(_to_nav_properties$property_name))
	{
		_to_nav_properties$property_name.newRecord()
		_to_nav_properties$property_name.property_value = ["true"]
	}
	
	
	//filter framework data on solution name
	globals.nav_properties = "filter_on_solution_name";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ["true"];
	}


	// Property to allow Document management
	globals.nav_properties = "document_management";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ["true"];
	}
	
	// Documents are kept in database when true, else in file system of server
	globals.nav_properties = "document_management_in_database";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ["true"];
	}
	
	// Allow to create multiple revision per document
	globals.nav_properties = "document_management_revision";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ["true"];
	}
	
	// Allow to check out documents to temporary file and prompt to check in when modified
	globals.nav_properties = "document_management_tracked_checkout";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ["false"];
	}
	
	// Allow any file type, not just the ones registered in doc_document_type
	globals.nav_properties = "document_management_allow_all_file_types";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ["false"];
	}	

	// Allow to set the spitpaneDividerSize
	globals.nav_properties = "splitPanesDividerSize";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ["1"];
	}
	
	// Allow to set the color of the splitPaneDivider
	globals.nav_properties = "splitPanesDividerColor";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['#6B6A65'];
	}
	
	// Allow to set the type of the organization filter can be COMBOBOX or TYPE_AHEAD
	globals.nav_properties = "filterOrganizationType";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['COMBOBOX'];
	}
	
	// Allow to set the width of the organization filter
	globals.nav_properties = "filterOrganizationWidth";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['140'];
	}
	
	//Toolbar used for main programs
	globals.nav_properties = "program_toolbar_main";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['svy_nav_fr_toolbar_main'];
	}
	
	//version of the framework data
	globals.nav_properties = "program_toolbar_tab";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['svy_nav_fr_toolbar_tab'];
	}
	
	//recordHistory
	globals.nav_properties = "recordHistory";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['true'];
	}
	
	//form prefix
	globals.nav_properties = "formPrefix";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['svy_'];
	}
	
	//new records on top
	globals.nav_properties = "createNewRecordsOnTop";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['true'];
	}	
	
	//new records on top
	globals.nav_properties = "saveUserPropertiesInDB";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = ['false'];
	}	
	
	
	//Max shortcuts
	globals.nav_properties = "maxFavorites";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = [12];
	}	
	
	//Max bookmarks
	globals.nav_properties = "maxBookmarks";
	if(!databaseManager.hasRecords(_to_nav_properties$property_name)) {
		_to_nav_properties$property_name.newRecord();
		_to_nav_properties$property_name.property_value = [7];
	}	
	
	//version of the framework data
	globals.svy_nav_setDataVersion(globals['nav_version'])
	
	if (! (_loadAll === false) ) {
		controller.loadAllRecords();
	}
	*/
}

/**
 *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"0008786C-ECCC-49A7-B8AF-FD55DAD8C407"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	if (firstShow) {
		sort();
		controller.loadAllRecords();
	}
}

/**
 * This method with remove almost all the data of the framework
 * @since 14-12-2010
 * @author Sanneke Aleman
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E030328A-0290-47DB-9296-91713B553E3B"}
 */
function removeData(event) {	
	//give warning to the user
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _cancel = i18n.getI18NMessage('svy.fr.lbl.cancel')
	var _title = i18n.getI18NMessage('svy.fr.lbl.remove_data')
	var _message = i18n.getI18NMessage('svy.fr.dlg.remove_data')
	var _answer = globals.DIALOGS.showWarningDialog(_title, _message,_cancel,_ok);
	if(_answer == _ok)
	{
		var _tables_clean = ['doc_document',
							'doc_document_binary',
							'doc_document_thumbnail',
							'doc_document_type',
							'doc_folder',
							'doc_revision',
							'doc_security',
							'log',
							'mail_accounts',
							'mail_attachments',
							'mail_mailing_recipients',
							'mail_mailings',
							'mail_messages',
							'mail_templates',
							'nav_advanced_search',
							'nav_advanced_search_criteria',
	                      	'nav_bookmarks',
							'nav_field_validation_rule',
							'nav_foundset_filter',
							'nav_foundset_filter_parameters',
							'nav_help',
							'nav_layout',
							'nav_menu',
							'nav_menu_items',
							'nav_menu_items_context_menu',
							'nav_navigation_keys',
							'nav_popmenu',
							'nav_print_list',
							'nav_print_list_details',
							'nav_program',
							'nav_program_fields',
							'nav_program_toolbar',
							'nav_program_toolbar_item',
							'nav_shortcut',
							'nav_tab',
							'nav_tab_autofill',
							'nav_user_required_field',
							'nav_user_table_view',
							'search_criteria',
							'sec_element',
							'sec_group',
							'sec_module',
							'sec_organization',
							'sec_owner',
							'sec_owner_in_module',
							'sec_security_key',
							'sec_table',
							'sec_table_filter',
							'sec_user',
							'sec_user_in_group',
							'sec_user_login_attempt',
							'sec_user_org',
							'sec_user_password',
							'sec_user_right',
							'sec_user_table_properties',
							'vlt_valuelists',
							'vlt_valuelistvalues',
							'vlt_valuetranslations']
		
		//empty all the tables
		var _fs
		for (var i = 0; i < _tables_clean.length; i++) {
			_fs = databaseManager.getFoundSet(globals.nav_db_framework,_tables_clean[i])
			if(_fs)
			{
				_fs.loadAllRecords()
				_fs.deleteAllRecords()
			}
		}
									
		
		// create new owner
		/** @type {JSFoundSet<db:/svy_framework/sec_owner>} */
		var _fs_owner = databaseManager.getFoundSet(globals.nav_db_framework,'sec_owner')	
		_fs_owner.newRecord()
		_fs_owner.license_amount = 5
		_fs_owner.name = 'Servoy'
		_fs_owner.password_renew = 90
		
		//create organization
		_fs_owner.sec_owner_to_sec_organization.newRecord()
		_fs_owner.sec_owner_to_sec_organization.name = 'Servoy NL'
		
		// create new user
		/** @type {JSFoundSet<db:/svy_framework/sec_user>} */
		var _fs_user = databaseManager.getFoundSet(globals.nav_db_framework,'sec_user')
		_fs_user.newRecord()
		_fs_user.user_name = 'superuser'
		_fs_user.owner_id = _fs_owner.owner_id
		_fs_user.admin_level = scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER;
		_fs_user.description = 'Default super user of the framework'
		
		//create user org record
		_fs_user.sec_user_to_sec_user_org.newRecord()
		_fs_user.sec_user_to_sec_user_org.organization_id = _fs_owner.sec_owner_to_sec_organization.organization_id
		
		// create new password
		/** @type {JSFoundSet<db:/svy_framework/sec_user_password>} */
		var _fs_password = databaseManager.getFoundSet(globals.nav_db_framework,'sec_user_password')	
		_fs_password.newRecord()
		_fs_password.start_date = new Date()
		_fs_password.end_date = new Date().setFullYear(new Date().getFullYear() + 10)
		var pwHash = scopes.svySecurityManager.calculatePBKDF2Hash("superuser");
		_fs_password.password_hash = pwHash.hash;
		_fs_password.password_salt = pwHash.salt;
		_fs_password.password_version = pwHash.iterationVersion;
		_fs_password.user_id = _fs_user.user_id
					
	}
	databaseManager.saveData()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A7DA268-1B24-470A-874A-74D717637B0B"}
 */
function removeProperties(event) {
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.deletes'), _ok, _no);
	if(_answer == _ok)
	{
		controller.deleteAllRecords();
	}
}

/**
 * @properties={typeid:24,uuid:"0B52CC61-21CC-4554-A067-FCF7AD9C2C98"}
 */
function sort() {
	foundset.sort("property_name asc");
}
