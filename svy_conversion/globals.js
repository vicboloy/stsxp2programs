/**
 * This will perform a conversion to update the fields user_id and organization_id from field user_org_id. Because of the super administrator feature the user_org_id cannot be used anymore.
 * 
 * @author Vincent Schuurhof
 * @since 2011-07-07
 * 
 * @properties={typeid:24,uuid:"560692CA-3149-4CE0-A6CE-F1F5F436B2FA"}
 * @AllowToRunInFind
 */
function svy_cnv_userOrgID() {
	var autoSave = databaseManager.getAutoSave();
	databaseManager.setAutoSave(true);
	
	databaseManager.startTransaction();
	
	/** @type {JSFoundSet<db:/svy_framework/sec_user_org>} */
	var _fsUserOrg = databaseManager.getFoundSet(globals.nav_db_framework, 'sec_user_org');
	
	/** @type {JSFoundSet<db:/svy_framework/nav_advanced_search>} */
	var _fsAdvancedSearch = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_advanced_search');
	_fsAdvancedSearch.loadAllRecords();
	
	for (var i = 1; i <= _fsAdvancedSearch.getSize(); i++) {
		_fsAdvancedSearch.setSelectedIndex(i);
		if (_fsAdvancedSearch.user_org_id) {
			_fsUserOrg.find();
			_fsUserOrg.user_org_id = _fsAdvancedSearch.user_org_id;
			if (_fsUserOrg.search()) {
				_fsAdvancedSearch.user_id = _fsUserOrg.user_id;
				_fsAdvancedSearch.organization_id = _fsUserOrg.organization_id;
				
				_fsAdvancedSearch.user_org_id = null;
			}
		}
	}
	
	/** @type {JSFoundSet<db:/svy_framework/nav_bookmarks>} */
	var _fsBookmarks = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_bookmarks');
	_fsBookmarks.loadAllRecords();
	
	for (var j = 1; j <= _fsBookmarks.getSize(); j++) {
		_fsBookmarks.setSelectedIndex(j);
		if (_fsBookmarks.user_org_id) {
			_fsUserOrg.find();
			_fsUserOrg.user_org_id = _fsBookmarks.user_org_id;
			if (_fsUserOrg.search()) {
				_fsBookmarks.user_id = _fsUserOrg.user_id;
				_fsBookmarks.organization_id = _fsUserOrg.organization_id;
				
				_fsBookmarks.user_org_id = null;
			}
		}
	}
	
	/** @type {JSFoundSet<db:/svy_framework/nav_shortcut>} */
	var _fsShortcut = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_shortcut');
	_fsShortcut.loadAllRecords();
	
	for (var k = 1; k <= _fsShortcut.getSize(); k++) {
		_fsShortcut.setSelectedIndex(k);
		if (_fsShortcut.user_org_id) {
			_fsUserOrg.find();
			_fsUserOrg.user_org_id = _fsShortcut.user_org_id;
			if (_fsUserOrg.search()) {
				_fsShortcut.user_id = _fsUserOrg.user_id;
				_fsShortcut.organization_id = _fsUserOrg.organization_id;
				
				_fsShortcut.user_org_id = null;
			}
		}
	}
	
	/** @type {JSFoundSet<db:/svy_framework/nav_user_table_view>} */
	var _fsUserTableView = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_user_table_view');
	_fsUserTableView.loadAllRecords();
	
	for (var m = 1; m <= _fsUserTableView.getSize(); m++) {
		_fsUserTableView.setSelectedIndex(m);
		if (_fsUserTableView.user_org_id) {
			_fsUserOrg.find();
			_fsUserOrg.user_org_id = _fsUserTableView.user_org_id;
			if (_fsUserOrg.search()) {
				_fsUserTableView.user_id = _fsUserOrg.user_id;
				_fsUserTableView.organization_id = _fsUserOrg.organization_id;
				
				_fsUserTableView.user_org_id = null;
			}
		}
	}
	
	/** @type {JSFoundSet<db:/svy_framework/search_criteria>} */
	var _fsSearchCriteria = databaseManager.getFoundSet(globals.nav_db_framework, 'search_criteria');
	_fsSearchCriteria.loadAllRecords();
	
	for (var n = 1; n <= _fsSearchCriteria.getSize(); n++) {
		_fsSearchCriteria.setSelectedIndex(n);
		if (_fsSearchCriteria.user_org_id) {
			_fsUserOrg.find();
			_fsUserOrg.user_org_id = _fsSearchCriteria.user_org_id;
			if (_fsUserOrg.search()) {
				_fsSearchCriteria.user_id = _fsUserOrg.user_id;
				_fsSearchCriteria.organization_id = _fsUserOrg.organization_id;
				
				_fsSearchCriteria.user_org_id = null;
			}
		}
	}
	
	/** @type {JSFoundSet<db:/svy_framework/sec_user_table_properties>} */
	var _fsUserTableProperties = databaseManager.getFoundSet(globals.nav_db_framework, 'sec_user_table_properties');
	_fsUserTableProperties.loadAllRecords();
	
	for (var o = 1; o <= _fsUserTableProperties.getSize(); o++) {
		_fsUserTableProperties.setSelectedIndex(o);
		if (_fsUserTableProperties.user_org_id) {
			_fsUserOrg.find();
			_fsUserOrg.user_org_id = _fsUserTableProperties.user_org_id;
			if (_fsUserOrg.search()) {
				_fsUserTableProperties.user_id = _fsUserOrg.user_id;
				_fsUserTableProperties.organization_id = _fsUserOrg.organization_id;
				
				_fsUserTableProperties.user_org_id = null;
			}
		}
	}
	
	databaseManager.setAutoSave(autoSave);
	
	return databaseManager.commitTransaction();
}

/**
 * Create the programs, settings in configurator for Mail functionality
 * 
 * @author pradiptab
 * @since 2011-09-12
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA6AB28E-EDEA-4781-BB6A-F51BC9C069CB"}
 * @AllowToRunInFind
 */
function svy_cnv_setUpMail(event) {
	
//	var _tabsRec = null;
	/** @type {JSFoundSet<db:/svy_framework/nav_menu>} */
	var _menuFs = null;
	var _menuItemRec = null;
	var _parent = null;
	var _navKeyRec = null;
	
	/** @type {JSFoundSet<db:/svy_framework/nav_program>} */
	var _programFs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_program');
	
	if (_programFs.find()) {
		_programFs.program_name = 'svy_mail';
		_programFs.search();
	}
	
	if (!databaseManager.hasRecords(_programFs))  {
	
		// Create new program for mail module
		_programFs.newRecord();
		_programFs.program_name = 'svy_mail';
		_programFs.base_form_name = 'svy_mail';
		_programFs.sort_value = 'receive_date desc';
		_programFs.description = 'Inbox';
		_programFs.display_field_header = 'subject';
		_programFs.table_name = 'nav_mail';
		_programFs.server_name = globals.nav_db_framework;
		_programFs.program_image = 'inbox.png';
		_programFs.form_name = 'svy_mail_tbl';
		_programFs.startup_view = 3;
		_programFs.divider_height = 350;
		_programFs.form_object = [[1,"detail","svy_mail_dtl",1],[2,"table","svy_mail_tbl",1]]
		_programFs.template_object = [[1,"detail",0,0],[2,"detail/tab",0,0],[3,"table/tab",1,1],[4,"table",1,1]];
		
		//TODO fix this
		// Create tabs
//		if (!_programFs.nav_program_to_nav_programtabs)
//			return;
//		
//		_tabsRec = _programFs.nav_program_to_nav_programtabs.getRecord(_programFs.nav_program_to_nav_programtabs.newRecord());
//		_tabsRec.form_type = 0;
//		_tabsRec.program_name = 'svy_mail';
//		_tabsRec.target_program_name = 'svy_mail';
//		_tabsRec.display_description = 'Details';
//		_tabsRec.description = 'Details';
//		
//		// Create root menu item "Mail"
//		_menuFs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_menu');
//		
//		_menuFs.find();
//		_menuFs.name = 'sampleuse navigation';
//		_menuFs.search();
//		
//		if (!databaseManager.hasRecords(_menuFs)) {
//			_menuFs.newRecord();
//			_menuFs.name = 'svy_mail';
//		}
//		
//		// Create menu items for Mail Menu (Root item)
//		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items.getRecord(_menuFs.nav_menu_to_nav_menu_items.newRecord());
//		_menuItemRec.description = 'Mail';
//		_menuItemRec.sort_order = 1;
//		_menuItemRec.menuitem_type = 'R';
//		_menuItemRec.menuitem_image = 'mail.png';
//		_parent = _menuItemRec.menu_item_id;
//		
//		// Create Inbox item in tree
//		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items.getRecord(_menuFs.nav_menu_to_nav_menu_items.newRecord());
//		_menuItemRec.sort_order = 2;
//		_menuItemRec.menuitem_type = 'P';
//		_menuItemRec.program_name = 'svy_mail';
//		_menuItemRec.parent_id = _parent;
//		
//		// Create Outbox item in tree
//		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items.getRecord(_menuFs.nav_menu_to_nav_menu_items.newRecord());
//		_menuItemRec.sort_order = 3;
//		_menuItemRec.menuitem_type = 'P';
//		_menuItemRec.program_name = 'svy_mail_outbox';
//		_menuItemRec.parent_id = _parent;
//		
//		// Create Settings item in tree
//		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items.getRecord(_menuFs.nav_menu_to_nav_menu_items.newRecord());
//		_menuItemRec.sort_order = 4;
//		_menuItemRec.menuitem_type = 'P';
//		_menuItemRec.program_name = 'svy_mail_settings';
//		_menuItemRec.parent_id = _parent;
//		
//		// Create Templates item in tree
//		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items.getRecord(_menuFs.nav_menu_to_nav_menu_items.newRecord());
//		_menuItemRec.sort_order = 5;
//		_menuItemRec.menuitem_type = 'P';
//		_menuItemRec.program_name = 'svy_mail_templates';
//		_menuItemRec.parent_id = _parent;
//		
//		// Assign key to program
//		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());
//		
//		_navKeyRec.code = 'program';
//		_navKeyRec.program_name = 'svy_mail';
//		_navKeyRec.solution_name = 'sampleuse_navigation';
//		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('sampleuse_navigation menu');
	}
	
	// Create program, tabs and menu items for OUTBOX
	if (_programFs.find()) {
		_programFs.program_name = 'svy_mail_outbox';
		_programFs.search();
	}
	
	if (!databaseManager.hasRecords(_programFs))  {
	
		// Create new program for mail module
		_programFs.newRecord();
		_programFs.program_name = 'svy_mail_outbox';
		_programFs.base_form_name = 'svy_mail';
		_programFs.sort_value = 'receive_date desc';
		_programFs.description = 'Outbox';
		_programFs.display_field_header = 'subject';
		_programFs.table_name = 'nav_mail';
		_programFs.server_name = globals.nav_db_framework;
		_programFs.program_image = 'outbox.png';
		_programFs.form_name = 'svy_mail_tbl';
		_programFs.startup_view = 3;
		_programFs.divider_height = 350;
		_programFs.form_object = [[1,"detail","svy_mail_dtl",1],[2,"table","svy_mail_tbl",1]]
		_programFs.template_object = [[1,"detail",0,0],[2,"detail/tab",0,0],[3,"table/tab",1,1],[4,"table",1,1]];
		
//		// Create tabs
//		if (!_programFs.nav_program_to_nav_programtabs)
//			return;
//		
//		_tabsRec = _programFs.nav_program_to_nav_programtabs.getRecord(_programFs.nav_program_to_nav_programtabs.newRecord());
//		_tabsRec.form_type = 0;
//		_tabsRec.program_name = 'svy_mail_outbox';
//		_tabsRec.target_program_name = 'svy_mail_outbox';
//		_tabsRec.display_description = 'Details';
//		_tabsRec.description = 'Details';
//		
//		// Assign key to program
//		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());
//		
//		_navKeyRec.code = 'program';
//		_navKeyRec.program_name = 'svy_mail_outbox';
//		_navKeyRec.solution_name = 'sampleuse_navigation';
//		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('sampleuse_navigation menu');
	}
	
	
	// Configure Mail settings Program
	if (_programFs.find()) {
		_programFs.program_name = 'svy_mail_settings';
		_programFs.search();
	}
	
	if (!databaseManager.hasRecords(_programFs))  {
		
		// Create new program for mail module
		_programFs.newRecord();
		_programFs.program_name = 'svy_mail_settings';
		_programFs.base_form_name = 'svy_mail_settings';
		_programFs.sort_value = 'is_primary desc';
		_programFs.description = 'Settings';
		_programFs.display_field_header = 'settings_name';
		_programFs.table_name = 'nav_mail_settings';
		_programFs.server_name = globals.nav_db_framework;
		_programFs.program_image = 'tool.png';
		_programFs.form_name = 'svy_mail_settings_tbl';
		_programFs.startup_view = 3;
		_programFs.divider_height = 350;
		_programFs.form_object = [[1,"detail","svy_mail_settings_dtl",1],[2,"table","svy_mail_settings_tbl",1]]
		_programFs.template_object = [[1,"detail",0,0],[2,"detail/tab",0,0],[3,"table/tab",1,0],[4,"table",1,0]];
		_programFs.btn_edit = 0;
		_programFs.btn_delete = 0;
		
//		// Create tabs
//		if (!_programFs.nav_program_to_nav_programtabs)
//			return;
//		
//		_tabsRec = _programFs.nav_program_to_nav_programtabs.getRecord(_programFs.nav_program_to_nav_programtabs.newRecord());
//		_tabsRec.form_type = 0;
//		_tabsRec.program_name = 'svy_mail_settings';
//		_tabsRec.target_program_name = 'svy_mail_settings';
//		_tabsRec.display_description = 'Details';
//		_tabsRec.description = 'Details';
//		_tabsRec.update_mode = 1;
//		_tabsRec.delete_mode = 1;
//		_tabsRec.tab_sequence = 1;
//		_tabsRec.add_mode = 0;
//		_tabsRec.edit_on_tab = 1;
//		_tabsRec.solution_name = 'sampleuse_navigation';
		
		// Assign key to program
		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());
		
		_navKeyRec.code = 'program';
		_navKeyRec.solution_name = 'sampleuse_navigation';
		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('sampleuse_navigation menu');
	}
	
	// Configure Mail Templates Program
	if (_programFs.find()) {
		_programFs.program_name = 'svy_mail_templates';
		_programFs.search();
	}
	
	if (!databaseManager.hasRecords(_programFs))  {
		
		// Create new program for mail module
		_programFs.newRecord();
		_programFs.program_name = 'svy_mail_templates';
		_programFs.base_form_name = 'svy_mail_templates';
		_programFs.sort_value = 'log_creation_date asc';
		_programFs.description = 'Templates';
		_programFs.display_field_header = 'subject';
		_programFs.table_name = 'nav_mail_templates';
		_programFs.server_name = globals.nav_db_framework;
		_programFs.program_image = 'template.png';
		_programFs.form_name = 'svy_mail_templates_tbl';
		_programFs.startup_view = 3;
		_programFs.divider_height = 350;
		_programFs.form_object = [[1,"detail","svy_mail_templates_dtl",1],[2,"table","svy_mail_templates_tbl",1]]
		_programFs.template_object = [[1,"detail",0,0],[2,"detail/tab",0,0],[3,"table/tab",1,0],[4,"table",1,0]];
		_programFs.btn_edit = 0;
		_programFs.btn_delete = 0;
		
		// Create tabs
//		if (!_programFs.nav_program_to_nav_programtabs)
//			return;
//		
//		_tabsRec = _programFs.nav_program_to_nav_programtabs.getRecord(_programFs.nav_program_to_nav_programtabs.newRecord());
//		_tabsRec.form_type = 0;
//		_tabsRec.program_name = 'svy_mail_templates';
//		_tabsRec.target_program_name = 'svy_mail_templates';
//		_tabsRec.display_description = 'Template Details';
//		_tabsRec.description = 'Template Details';
//		_tabsRec.update_mode = 1;
//		_tabsRec.delete_mode = 1;
//		_tabsRec.tab_sequence = 1;
//		_tabsRec.add_mode = 0;
//		_tabsRec.edit_on_tab = 1;
//		_tabsRec.solution_name = 'sampleuse_navigation';
		
		// Assign key to program
		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());
		
		_navKeyRec.code = 'program';
		_navKeyRec.solution_name = 'sampleuse_navigation';
		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('sampleuse_navigation menu');
	}
	
	
	// Configure Mail Mailings Program
	if (_programFs.find()) {
		_programFs.program_name = 'svy_mail_mailings';
		_programFs.search();
	}
	
	if (!databaseManager.hasRecords(_programFs))  {
		
		// Create new program for mail module
		_programFs.newRecord();
		_programFs.program_name = 'svy_mail_mailings';
		_programFs.base_form_name = 'svy_mail_mailings';
		_programFs.sort_value = 'mailing_id asc';
		_programFs.description = 'Mailings';
		_programFs.display_field_header = 'name';
		_programFs.table_name = 'nav_mail_mailings';
		_programFs.server_name = globals.nav_db_framework;
		_programFs.program_image = 'mail_merge.png';
		_programFs.form_name = 'svy_mail_mailings_tbl';
		_programFs.startup_view = 3;
		_programFs.divider_height = 350;
		_programFs.form_object = [[1,"detail","svy_mail_mailings_dtl",1],[2,"table","svy_mail_mailings_tbl",1]]
		_programFs.template_object = [[1,"detail",0,0],[2,"detail/tab",0,0],[3,"table/tab",1,0],[4,"table",1,0]];
		_programFs.btn_edit = 0;
		_programFs.btn_delete = 0;
		
		// Create tabs
//		if (!_programFs.nav_program_to_nav_programtabs)
//			return;
//		
//		_tabsRec = _programFs.nav_program_to_nav_programtabs.getRecord(_programFs.nav_program_to_nav_programtabs.newRecord());
//		_tabsRec.form_type = 0;
//		_tabsRec.program_name = 'svy_mail_mailings';
//		_tabsRec.target_program_name = 'svy_mail_mailings';
//		_tabsRec.display_description = 'Mailing Details';
//		_tabsRec.description = 'Mailing Details';
//		_tabsRec.update_mode = 1;
//		_tabsRec.delete_mode = 1;
//		_tabsRec.tab_sequence = 1;
//		_tabsRec.add_mode = 0;
//		_tabsRec.edit_on_tab = 1;
//		_tabsRec.solution_name = 'sampleuse_navigation';
		
		// Assign key to program
		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());
		
		_navKeyRec.code = 'program';
		_navKeyRec.solution_name = 'sampleuse_navigation';
		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('sampleuse_navigation menu');
		
		// Create root menu item "Mail"
		_menuFs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_menu');
		
		_menuFs.find();
		_menuFs.name = 'Sampleuse_navigation';
		_menuFs.search();
		
		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items;
		if (_menuItemRec.find()) {
			_menuItemRec.description = 'Mail';
			_menuItemRec.search();
		}
		_parent = _menuItemRec.menu_item_id;
		
		// Create Mailings item in tree
		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items.getRecord(_menuFs.nav_menu_to_nav_menu_items.newRecord());
		_menuItemRec.sort_order = 6;
		_menuItemRec.menuitem_type = 'P';
		_menuItemRec.program_name = 'svy_mail_mailings';
		_menuItemRec.parent_id = _parent;
		
		application.output('Mailing program created in configurator.');
	}	
	
	
	// Configure Mail Query Program
	if (_programFs.find()) {
		_programFs.program_name = 'svy_mail_queries';
		_programFs.search();
	}
	
	if (!databaseManager.hasRecords(_programFs))  {
		
		// Create new program for mail module
		_programFs.newRecord();
		_programFs.program_name = 'svy_mail_queries';
		_programFs.base_form_name = 'svy_mail_queries';
		_programFs.sort_value = 'mailing_id asc';
		_programFs.description = 'Queries';
		_programFs.display_field_header = 'name';
		_programFs.table_name = 'nav_mail_queries';
		_programFs.server_name = globals.nav_db_framework;
		_programFs.program_image = 'query.png';
		_programFs.form_name = 'svy_mail_queries_tbl';
		_programFs.startup_view = 3;
		_programFs.divider_height = 350;
		_programFs.form_object = [[1,"detail","svy_mail_queries_dtl",1],[2,"table","svy_mail_queries_tbl",1]]
		_programFs.template_object = [[1,"detail",0,0],[2,"detail/tab",0,0],[3,"table/tab",1,0],[4,"table",1,0]];
		_programFs.btn_edit = 0;
		_programFs.btn_delete = 0;
		
		// Create tabs
//		if (!_programFs.nav_program_to_nav_programtabs)
//			return;
//		
//		_tabsRec = _programFs.nav_program_to_nav_programtabs.getRecord(_programFs.nav_program_to_nav_programtabs.newRecord());
//		_tabsRec.form_type = 0;
//		_tabsRec.program_name = 'svy_mail_queries';
//		_tabsRec.target_program_name = 'svy_mail_queries';
//		_tabsRec.display_description = 'Query Details';
//		_tabsRec.description = 'Query Details';
//		_tabsRec.update_mode = 1;
//		_tabsRec.delete_mode = 1;
//		_tabsRec.tab_sequence = 1;
//		_tabsRec.add_mode = 0;
//		_tabsRec.edit_on_tab = 1;
//		_tabsRec.solution_name = 'sampleuse_navigation';
		
		// Assign key to program
		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());
		
		_navKeyRec.code = 'program';
		_navKeyRec.program_id = _programFs.program_id;
		_navKeyRec.solution_name = 'sampleuse_navigation';
		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('sampleuse_navigation menu');
		
		// Create root menu item "Mail"
		_menuFs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_menu');
		
		_menuFs.find();
		_menuFs.name = 'sampleuse navigation';
		_menuFs.search();
		
		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items;
		if (_menuItemRec.find()) {
			_menuItemRec.description = 'Mail';
			_menuItemRec.search();
		}
		_parent = _menuItemRec.menu_item_id;
		
		// Create Mailings item in tree
		_menuItemRec = _menuFs.nav_menu_to_nav_menu_items.getRecord(_menuFs.nav_menu_to_nav_menu_items.newRecord());
		_menuItemRec.sort_order = 7;
		_menuItemRec.menuitem_type = 'P';
		_menuItemRec.program_name = 'svy_mail_queries';
		_menuItemRec.parent_id = _parent;
		
		application.output('Queries Program created in configurator.')
	}	
}

/**
 * @properties={typeid:24,uuid:"3D20582B-9245-4800-8260-B49693DEF0FD"}
 * @AllowToRunInFind
 */
function svy_cnv_setUpDocumentManagement() {
	
	var _navKeyRec = null;

	/** @type {JSFoundSet<db:/svy_framework/nav_program>} */
	var _programFs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_program');

	/** @type {JSFoundSet<db:/svy_framework/nav_layout>} */
	var _fs_l = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_layout');

	// Variables to hold the new tool bar ids
	var _documentAdditionalToolsPvId = null;
	var _documentPinnedAdditionalToolsPv = null;
	var _documentPinnedPvId = null;
	var _documentRevisionsPvId = null;
	var _documentTreeViewPvId = null;
	var _revisionAdditionalToolsPvId = null;	
	var _documentsLayoutId = null;
	
	// Create the new toolbars necessary for document management
	createNewToolBars();
	
	// Backup the record object of the respective Programs
	var _documentsProgramRec = null;
	var _documentsPinnedProgramRec = null;
	var _treeViewProgramRec = null;
	var _revisionsProgramrec = null;
	
	// Load default toolbars
	/** @type {JSFoundSet<db:/svy_framework/nav_toolbar>} */
	var _fs_t = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_toolbar');
	var _fs_t_query = 'SELECT toolbar_id FROM nav_toolbar WHERE name IN (?)';
	
	// ADD DOCUMENTS PROGRAM AND RELATED RECORDS
	if (_programFs.find()) {
		_programFs.program_name = 'dmDocuments';
		_programFs.search();
	}

	var _rec_program_d, _rec_program_dr, _rec_program_tlb;

	// Create Documents program
	if (!databaseManager.hasRecords(_programFs)) {

		// Create new program for mail module
		_rec_program_d = _programFs.getRecord(_programFs.newRecord());
		_rec_program_d.program_name = 'dmDocuments';
		_rec_program_d.base_form_name = 'svy_doc_documents';
		_rec_program_d.sort_value = 'doc_document_id asc';
		_rec_program_d.description = 'Documents';
		_rec_program_d.display_field_header = 'name';
		_rec_program_d.table_name = 'doc_document';
		_rec_program_d.server_name = globals.nav_db_framework;
		_rec_program_d.program_image = 'inbox.png';
		_rec_program_d.form_name = 'svy_doc_documents_tbl';
		_rec_program_d.divider_height = 350;
		_rec_program_d.form_object = [[1, "detail", "svy_doc_documents_dtl", 1], [2, "table", "svy_doc_documents_tbl", 1]]
		_rec_program_d.template_object = [[1, "detail", 0, 0], [2, "detail/tab", 0, 0], [3, "table/tab", 0, 0], [4, "table", 1, 1]];
		_rec_program_d.solution_name = 'sampleuse_navigation';

		// Assign key to program
		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());

		_navKeyRec.code = 'program';
		_navKeyRec.program_id = _rec_program_d.program_id
		_navKeyRec.solution_name = 'sampleuse_navigation';
		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('Basic');
		
		// Assign toolbars
		assignToolbarToProgram(_rec_program_d, ['Record edit pv', 'Document additional tools pv', 'Views pv', 'Save/Cancel pv', 'Record navigation pv', 'Help pv']);
	} else {
		_rec_program_d = _programFs.getRecord(1);
	}
	_documentsProgramRec = _programFs.getRecord(1);				// Backup document program rec
	
	
	// ADD DOCUMENTS PINNED PROGRAM AND RELATED RECORDS
	if (_programFs.find()) {
		_programFs.program_name = 'dmDocuments_pinned';
		_programFs.search();
	}

	// Create Documents pinned program
	if (!databaseManager.hasRecords(_programFs)) {

		// Create new program for mail module
		_rec_program_d = _programFs.getRecord(_programFs.newRecord());
		_rec_program_d.program_name = 'dmDocuments_pinned';
		_rec_program_d.base_form_name = 'svy_doc_documents';
		_rec_program_d.sort_value = 'doc_document_id asc';
		_rec_program_d.description = 'Documents Pinned';
		_rec_program_d.display_field_header = 'name';
		_rec_program_d.table_name = 'doc_document';
		_rec_program_d.server_name = globals.nav_db_framework;
		_rec_program_d.program_image = 'inbox.png';
		_rec_program_d.form_name = 'svy_doc_documents_tbl';
		_rec_program_d.divider_height = 350;
		_rec_program_d.form_object = [[1, "detail", "svy_doc_documents_dtl", 1], [2, "table", "svy_doc_documents_tbl", 1]]
		_rec_program_d.template_object = [[1, "detail", 0, 0], [2, "detail/tab", 0, 0], [3, "table/tab", 0, 0], [4, "table", 1, 1]];
		_rec_program_d.solution_name = 'sampleuse_navigation';

		// Assign key to program
		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());

		_navKeyRec.code = 'program';
		_navKeyRec.program_id = _rec_program_d.program_id;
		_navKeyRec.solution_name = 'sampleuse_navigation';
		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('Basic');
		
		// Assign toolbars
		assignToolbarToProgram(_rec_program_d, ['Document pinned pv', 'Document pinned additional tools pv', 'Views pv', 'Save/Cancel pv', 'Record navigation pv', 'Help pv']);
	} else {
		_rec_program_d = _programFs.getRecord(1);
	}
	_documentsPinnedProgramRec = _programFs.getRecord(1);				// Backup document program record

	// ADD FOLDER TREE VIEW PROGRAM AND RELATED RECORDS
	if (_programFs.find()) {
		_programFs.program_name = 'dmTreeView';
		_programFs.search();
	}

	// Create Folder tree view program
	if (!databaseManager.hasRecords(_programFs)) {

		// Create new program for mail module
		_rec_program_d = _programFs.getRecord(_programFs.newRecord());
		_rec_program_d.program_name = 'dmTreeView';
		_rec_program_d.base_form_name = 'svy_doc_treeview';
		_rec_program_d.sort_value = null;
		_rec_program_d.description = 'Documents Tree View';
		_rec_program_d.display_field_header = 'name';
		_rec_program_d.table_name = 'doc_folder';
		_rec_program_d.server_name = globals.nav_db_framework;
		_rec_program_d.program_image = null;
		_rec_program_d.form_name = 'svy_doc_treeview_dtl';
		_rec_program_d.divider_height = null;
		_rec_program_d.form_object = [[1,"detail","svy_doc_treeview_dtl",1],[2,"table","svy_doc_treeview_tbl",0]];
		_rec_program_d.template_object = null;
		_rec_program_d.solution_name = 'sampleuse_navigation';

		// Assign key to program
		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());

		_navKeyRec.code = 'program';
		_navKeyRec.program_id = _rec_program_d.program_id;
		_navKeyRec.solution_name = 'sampleuse_navigation';
		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('Basic');
		
		// Assign toolbars
		assignToolbarToProgram(_rec_program_d, ['Document tree view pv', 'Help pv']);
	} else {
		_rec_program_d = _programFs.getRecord(1);
	}
	_treeViewProgramRec = _programFs.getRecord(1);				// Backup document program record
	
	// ADD REVISIONS PROGRAM AND RELATED RECORDS
	if (_programFs.find()) {
		_programFs.program_name = 'dmRevisions';
		_programFs.search();
	}

	// Create svy_doc_revision program
	if (!databaseManager.hasRecords(_programFs)) {

		// Create new program for mail module
		_rec_program_dr = _programFs.getRecord(_programFs.newRecord());
		_rec_program_dr.program_name = 'dmRevisions';
		_rec_program_dr.base_form_name = 'svy_doc_revision';
		_rec_program_dr.sort_value = 'revision_datetime desc';
		_rec_program_dr.description = 'Revisions';
		_rec_program_dr.display_field_header = '';
		_rec_program_dr.table_name = 'doc_revision';
		_rec_program_dr.server_name = globals.nav_db_framework;
		_rec_program_dr.program_image = 'inbox.png';
		_rec_program_dr.form_name = 'svy_doc_revision_tbl';
		_rec_program_dr.divider_height = 350;
		_rec_program_dr.form_object = [[1, "detail", "svy_doc_revision_dtl", 1], [2, "table", "svy_doc_revision_tbl", 1]]
		_rec_program_dr.template_object = [[1, "detail", 0, 0], [2, "detail/tab", 0, 0], [3, "table/tab", 0, 0], [4, "table", 0, 0]];
		_rec_program_dr.solution_name = 'sampleuse_navigation';

		// Assign key to program
		_navKeyRec = _programFs.nav_program_to_nav_navigation_keys$key_program.getRecord(_programFs.nav_program_to_nav_navigation_keys$key_program.newRecord());

		_navKeyRec.code = 'program';
		_navKeyRec.program_id = _rec_program_dr.program_id;
		_navKeyRec.solution_name = 'sampleuse_navigation';
		_navKeyRec.security_key_id = globals.svy_cnv_securityKey('Basic');
		
		// Assign toolbars
		assignToolbarToProgram(_rec_program_dr, ['Document revisions pv', 'Revision additional tools pv', 'Save/Cancel pv', 'Record navigation pv', 'Help pv']);
	} else {
		_rec_program_dr = _programFs.getRecord(1);
	}
	_revisionsProgramrec = _programFs.getRecord(1);				// Backup revision program record
	
	
	
	// CREATE AND MANAGE DOCUMENTS LAYOUTS
	if (_fs_l.find()) {
		_fs_l.name = 'dmDocuments';
		_fs_l.search();
	}
	
	var _rec_l, _rec_t;
	
	if (!utils.hasRecords(_fs_l)) {
		// Create layout
		_rec_l = _fs_l.getRecord(_fs_l.newRecord());
		_rec_l.description = 'Documents';
		_rec_l.image_url = 'fg_button_documents.png';
		_rec_l.image_url_bg = 'bg_button_orange.png';
		_rec_l.flag_i18n = null;
		_rec_l.name = 'dmDocuments';
		_rec_l.short_name = 'd';
		_rec_l.template_name = 'template_5';
		_rec_l.template_form = 'svy_nav_fr_template_05';
		_rec_l.splitter_pos_array = [null,500,null];
		if (utils.hasRecords(_documentsProgramRec.nav_program_to_nav_navigation_keys$key_program) && 
					_documentsProgramRec.nav_program_to_nav_navigation_keys$key_program.security_key_id) {
			_rec_l.security_key_id = _documentsProgramRec.nav_program_to_nav_navigation_keys$key_program.security_key_id;
		}
		_documentsLayoutId = _rec_l.layout_id;					// backup layout id
		
		// connect the new layout to the program
		_documentsProgramRec.layout_id = _rec_l.layout_id;
		
		// create "Folder tree view" tab
		_rec_t = _rec_l.nav_layout_to_nav_tab.getRecord(_rec_l.nav_layout_to_nav_tab.newRecord());
		_rec_t.panel_id = 1;
		_rec_t.parent_tab_id = null;
		_rec_t.tab_relation = null;
		_rec_t.description = 'i18n:svy.fr.lbl.folder_tree';
		_rec_t.flag_i18n = 1;
		_rec_t.form_type = 0;	
		_rec_t.edit_on_tab = 1;
		_rec_t.solution_name = _treeViewProgramRec.solution_name;
		_rec_t.orientation_toolbar = 2;
		_rec_t.program_id = _treeViewProgramRec.program_id;		
		var _parentTabFolderTreeId = _rec_t.tab_id;
		
		// create "Documents" tab
		_rec_t = _rec_l.nav_layout_to_nav_tab.getRecord(_rec_l.nav_layout_to_nav_tab.newRecord());
		_rec_t.panel_id = 2;
		_rec_t.parent_tab_id = _parentTabFolderTreeId;
		_rec_t.tab_relation = '_to_doc_document$current_folder_documents';
		_rec_t.description = 'Documents';
		_rec_t.flag_i18n = null;
		_rec_t.form_type = 1;	
		_rec_t.edit_on_tab = 2;
		_rec_t.solution_name = _documentsProgramRec.solution_name;
		_rec_t.orientation_toolbar = 2;
		_rec_t.program_id = _documentsProgramRec.program_id;
		var _parentTabDocumentsId = _rec_t.tab_id;
		
		// create "Revisions" tab
		_rec_t = _rec_l.nav_layout_to_nav_tab.getRecord(_rec_l.nav_layout_to_nav_tab.newRecord());
		_rec_t.panel_id = 3;
		_rec_t.parent_tab_id = _parentTabDocumentsId;
		_rec_t.tab_relation = 'doc_document_to_doc_revision';
		_rec_t.description = 'Revisions';
		_rec_t.flag_i18n = null;
		_rec_t.form_type = 0;	
		_rec_t.edit_on_tab = 1;
		_rec_t.solution_name = _revisionsProgramrec.solution_name;
		_rec_t.orientation_toolbar = 2;
		_rec_t.program_id = _revisionsProgramrec.program_id;
	}
	else
		_documentsLayoutId = _fs_l.layout_id;						// Backup layout id
	
	// CREATE AND MANAGE DOCUMENTS PINNED LAYOUTS
	if (_fs_l.find()) {
		_fs_l.name = 'dmDocuments_pinned';
		_fs_l.search();
	}
	
	if (!utils.hasRecords(_fs_l)) {
		// Create layout
		_rec_l = _fs_l.getRecord(_fs_l.newRecord());
		_rec_l.description = 'Documents Pinned';
		_rec_l.image_url = 'fg_button_documents.png';
		_rec_l.image_url_bg = 'bg_button_orange.png';
		_rec_l.flag_i18n = null;
		_rec_l.name = 'dmDocuments_pinned';
		_rec_l.short_name = 'dp';
		_rec_l.template_name = 'template_3';
		_rec_l.template_form = 'svy_nav_fr_template_03';
		_rec_l.splitter_pos_array = [null,500,null];
		if (utils.hasRecords(_documentsPinnedProgramRec.nav_program_to_nav_navigation_keys$key_program) && 
		_documentsPinnedProgramRec.nav_program_to_nav_navigation_keys$key_program.security_key_id) {
			_rec_l.security_key_id = _documentsPinnedProgramRec.nav_program_to_nav_navigation_keys$key_program.security_key_id;
		}
		
		// connect the new layout to the program
		_documentsPinnedProgramRec.layout_id = _rec_l.layout_id;
		
		// create "Documents Pinned" tab
		_rec_t = _rec_l.nav_layout_to_nav_tab.getRecord(_rec_l.nav_layout_to_nav_tab.newRecord());
		_rec_t.panel_id = 1;
		_rec_t.parent_tab_id = null;
		_rec_t.tab_relation = null;
		_rec_t.description = 'Documents Pinned';
		_rec_t.flag_i18n = null;
		_rec_t.form_type = 1;	
		_rec_t.edit_on_tab = 2;
		_rec_t.solution_name = _documentsPinnedProgramRec.solution_name;
		_rec_t.orientation_toolbar = 2;
		_rec_t.program_id = _documentsPinnedProgramRec.program_id;		
		var _parentTabDocumentsPinnedId = _rec_t.tab_id;
		
		// create "Revisions" tab
		_rec_t = _rec_l.nav_layout_to_nav_tab.getRecord(_rec_l.nav_layout_to_nav_tab.newRecord());
		_rec_t.panel_id = 2;
		_rec_t.parent_tab_id = _parentTabDocumentsPinnedId;
		_rec_t.tab_relation = 'doc_document_to_doc_revision';
		_rec_t.description = 'Revisions';
		_rec_t.flag_i18n = null;
		_rec_t.form_type = 0;	
		_rec_t.edit_on_tab = 1;
		_rec_t.solution_name = _revisionsProgramrec.solution_name;
		_rec_t.orientation_toolbar = 2;
		_rec_t.program_id = _revisionsProgramrec.program_id;
	}
	
	
	// ADD MENU BAR
	/** @type {JSFoundSet<db:/svy_framework/nav_menu>} */
	var _menuBarFs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_menu');
	_menuBarFs.loadAllRecords();
	var _menuBarRec = null;
	if (!utils.hasRecords(_menuBarFs)) {
		_menuBarRec = _menuBarFs.getRecord(_menuBarFs.newRecord());
		_menuBarRec.name = 'Sampleuse_navigation';
		_menuBarRec.priority = 1;
		_menuBarRec.solution_name = 'sampleuse_navigation';
	}
	else
		_menuBarRec = _menuBarFs.getRecord(1);
		
	// ADD MENU BAR ITEM
	/** @type {JSFoundSet<db:/svy_framework/nav_menu_items>} */
	var _fsMenuItems = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_menu_items');
	if (_fsMenuItems.find()) {
		_fsMenuItems.layout_id = _documentsLayoutId;
		if (!_fsMenuItems.search()) {
			var _recMenuItem = _menuBarRec.nav_menu_to_nav_menu_items.getRecord(_menuBarRec.nav_menu_to_nav_menu_items.newRecord());
			_recMenuItem.sort_order = 99999;
			_recMenuItem.menuitem_type = 'L';
			_recMenuItem.layout_id = _documentsLayoutId;
		}
	}	
	
	// Save data
	databaseManager.saveData();
	
	application.output('Document management Module is created in Framework.');
	
	/**
	 * Create new tool bars for document management
	 */
	function createNewToolBars() {
		
		// Declare toolbar variables used in method
		/** @type {JSFoundSet<db:/svy_framework/nav_toolbar>} */
		var _fsToolBar = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_toolbar');
		var _recToolbar = null;
		
		// Declare toolbar items variables used in method
		/** @type {JSFoundSet<db:/svy_framework/nav_toolbar_item>} */
		var _fsToolbarItem = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_toolbar_item');
		var _recToolbarItem = null;
		var _toolbarItemFieldArr = ['sequence', 'access_type', 'solution_name', 'description', 'flag_i18n', 'calc_sequence', 
			'mode_type', 'toolbar_function', 'function_type', 'image_url', 'flag_splitter'];
		var _toolbarItemDataArr = null;
		
		// Create document additional toolbar
		if (_fsToolBar.find()) {
			_fsToolBar.name = 'Document additional tools pv';
			if (_fsToolBar.search()) {
				// Toolbar exists
				_documentAdditionalToolsPvId = _fsToolBar.toolbar_id;
			}
			else {
				// Create toolbar
				_recToolbar = _fsToolBar.getRecord(_fsToolBar.newRecord());
				_recToolbar.name = 'Document additional tools pv';
				_recToolbar.alignment = 2;
				_documentAdditionalToolsPvId = _recToolbar.toolbar_id;
				databaseManager.saveData(_recToolbar);				
				
				_toolbarItemDataArr = [
						[1, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.preview', 1, 1, 'browse', 'documentPreview', 1, 'doc_view.png', null],
						[2, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.check_in', 1, 2, 'browse', 'checkIn', 1, 'check_in.png', null],
						[3, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.check_out', 1, 3, 'browse', 'checkOut', 1, 'check_out.png', null],
						[4, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.download', 1, 4, 'browse', 'downloadCurrentRevision', 1, 'doc_download.png', null],
						[5, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.document_security', 1, 5, 'browse', 'AssignDocumentSecurity', 1, 'doc_lock.png', 0]
					];
				createToolbarItem(_documentAdditionalToolsPvId, _toolbarItemFieldArr, _toolbarItemDataArr);
			}
		}
		
		// Create document pinned additional toolbar
		if (_fsToolBar.find()) {
			_fsToolBar.name = 'Document pinned additional tools pv';
			if (_fsToolBar.search()) {
				// Toolbar exists
				_documentPinnedAdditionalToolsPv = _fsToolBar.toolbar_id;
			}
			else {
				// Create toolbar
				_recToolbar = _fsToolBar.getRecord(_fsToolBar.newRecord());
				_recToolbar.name = 'Document pinned additional tools pv';
				_recToolbar.alignment = 2;
				_documentPinnedAdditionalToolsPv = _recToolbar.toolbar_id;
				databaseManager.saveData(_recToolbar);				
				
				_toolbarItemDataArr = [
						[1, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.preview', 1, 1, 'browse', 'documentPreview', 1, 'doc_view.png', null],
						[2, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.check_in', 1, 2, 'browse', 'checkIn', 1, 'check_in.png', null],
						[3, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.check_out', 1, 3, 'browse', 'checkOut', 1, 'check_out.png', null],
						[4, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.download', 1, 4, 'browse', 'downloadCurrentRevision', 1, 'doc_download.png', null]
					];
				createToolbarItem(_documentPinnedAdditionalToolsPv, _toolbarItemFieldArr, _toolbarItemDataArr);
			}
		}
		
		// Create document pinned toolbar
		if (_fsToolBar.find()) {
			_fsToolBar.name = 'Document pinned pv';
			if (_fsToolBar.search()) {
				// Toolbar exists
				_documentPinnedPvId = _fsToolBar.toolbar_id;
			}
			else {
				// Create toolbar
				_recToolbar = _fsToolBar.getRecord(_fsToolBar.newRecord());
				_recToolbar.name = 'Document pinned pv';
				_recToolbar.alignment = 1;
				_documentPinnedPvId = _recToolbar.toolbar_id;
				databaseManager.saveData(_recToolbar);				
				
				_toolbarItemDataArr = [
						[1, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.edit', 1, 1, 'browse', 'dc_edit', 1, 'pv_tb_edit.png', null],
						[2, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.delete', 1, 2, 'browse', 'dc_delete', 1, 'pv_tb_delete.png', null]
					];
				createToolbarItem(_documentPinnedPvId, _toolbarItemFieldArr, _toolbarItemDataArr);
			}
		}
		
		// Create document revisions toolbar
		if (_fsToolBar.find()) {
			_fsToolBar.name = 'Document revisions pv';
			if (_fsToolBar.search()) {
				// Toolbar exists
				_documentRevisionsPvId = _fsToolBar.toolbar_id;
			}
			else {
				// Create toolbar
				_recToolbar = _fsToolBar.getRecord(_fsToolBar.newRecord());
				_recToolbar.name = 'Document revisions pv';
				_recToolbar.alignment = 1;
				_recToolbar.default_sortorder = 1;
				_recToolbar.flag_default = 1;
				_documentRevisionsPvId = _recToolbar.toolbar_id;
				databaseManager.saveData(_recToolbar);				
				
				_toolbarItemDataArr = [
						[1, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.record_edit', 1, 1, 'browse', 'dc_edit', 1, 'pv_tb_edit.png', null],
						[2, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.record_delete', 1, 2, 'browse', 'dc_delete', 1, 'pv_tb_delete.png', null]
					];
				createToolbarItem(_documentRevisionsPvId, _toolbarItemFieldArr, _toolbarItemDataArr);
			}
		}
		
		// Create document tree view toolbar
		if (_fsToolBar.find()) {
			_fsToolBar.name = 'Document tree view pv';
			if (_fsToolBar.search()) {
				// Toolbar exists
				_documentTreeViewPvId = _fsToolBar.toolbar_id;
			}
			else {
				// Create toolbar
				_recToolbar = _fsToolBar.getRecord(_fsToolBar.newRecord());
				_recToolbar.name = 'Document tree view pv';
				_recToolbar.alignment = 1;
				_documentTreeViewPvId = _recToolbar.toolbar_id;
				databaseManager.saveData(_recToolbar);				
				
				_toolbarItemDataArr = [
						[1, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.create_folder', 1, 1, 'browse', 'createFolder', 1, 'pv_tb_new.png', null],
						[2, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.edit_folder', 1, 2, 'browse', 'renameFolder', 1, 'pv_tb_edit.png', null],
						[3, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.delete_folder', 1, 3, 'browse', 'deleteFolder', 1, 'pv_tb_delete.png', null],
						[4, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.folder_permission', 1, 4, 'browse', 'changePermissions', 1, 'doc_lock.png', null],
						[5, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.document_types', 1, 45, 'browse', 'createDocumentTypes', 1, 'pv_tb_list.png', null]
					];
				createToolbarItem(_documentTreeViewPvId, _toolbarItemFieldArr, _toolbarItemDataArr);
			}
		}
		
		// Create revision additional tools toolbar
		if (_fsToolBar.find()) {
			_fsToolBar.name = 'Revision additional tools pv';
			if (_fsToolBar.search()) {
				// Toolbar exists
				_revisionAdditionalToolsPvId = _fsToolBar.toolbar_id;
			}
			else {
				// Create toolbar
				_recToolbar = _fsToolBar.getRecord(_fsToolBar.newRecord());
				_recToolbar.name = 'Revision additional tools pv';
				_recToolbar.alignment = 2;
				_revisionAdditionalToolsPvId = _recToolbar.toolbar_id;
				databaseManager.saveData(_recToolbar);				
				
				_toolbarItemDataArr = [
						[1, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.preview', 1, 1, 'browse', 'revisionPreview', 1, 'doc_view.png', null],
						[2, 'A', 'sampleuse_navigation', 'i18n:svy.fr.lbl.download', 1, 2, 'browse', 'downloadCurrentRevision', 1, 'doc_download.png', null]
					];
				createToolbarItem(_revisionAdditionalToolsPvId, _toolbarItemFieldArr, _toolbarItemDataArr);
			}
		}
		
		
		/**
		 * Create the toolbar items
		 * 
		 * @param {UUID} _toolbarId The toolbar id, for which the items need to be created
		 * @param {Array<String>} _fieldArr The array of fields need to be filled
		 * @param {Array<Array>} _dataArr The array of data
		 */
		function createToolbarItem (_toolbarId, _fieldArr, _dataArr) {
			
			for (var _ti = 0 ; _ti < _dataArr.length ; _ti++) {
				if (_fsToolbarItem.find()) {
					_fsToolbarItem.toolbar_function = _dataArr[_ti][7];
					_fsToolbarItem.toolbar_id = _toolbarId;
					if (!_fsToolbarItem.search()) {
						
						// Create toolbar items
						_recToolbarItem = _fsToolbarItem.getRecord(_fsToolbarItem.newRecord());
						_recToolbarItem.toolbar_id = _toolbarId;
						
						for (var _tif = 0 ; _tif < _fieldArr.length ; _tif++) {
							_recToolbarItem[_fieldArr[_tif]] = _dataArr[_ti][_tif];
						}
						
						databaseManager.saveData(_recToolbarItem);
					}
				}
			}
		}
	}
	
	/**
	 * Assign the toolbars to the program
	 * 
	 * @param { JSRecord<db:/svy_framework/nav_program>} _recProgram The program into which toolbars need to be attached
	 * @param {Array<String>} toolbars The array of toolbar names
	 */
	function assignToolbarToProgram (_recProgram, toolbars) {
		
		for (var _toolCnt = 0 ; _toolCnt < toolbars.length; _toolCnt++) {
			_fs_t.loadRecords(_fs_t_query,[toolbars[_toolCnt]]);
			
			_rec_program_tlb = _recProgram.nav_program_to_nav_program_toolbar.getRecord(_recProgram.nav_program_to_nav_program_toolbar.newRecord());
			_rec_program_tlb.toolbar_id = _fs_t.getRecord(1).toolbar_id;
		}
	}
}

/**
 * 
 * @param {String} _keyName Name of the security key
 * @return {UUID} Security key id
 *
 * @properties={typeid:24,uuid:"A8AF6E96-B381-47BA-A835-B473C76444D9"}
 * @AllowToRunInFind
 */
function svy_cnv_securityKey(_keyName) {
	
	/** @type {JSFoundSet<db:/svy_framework/sec_security_key>} */
	var _secKeyFs = null;
	
	_secKeyFs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/sec_security_key');
	if (_secKeyFs.find()) {
		_secKeyFs.name = _keyName;
		_secKeyFs.search();
		
		return databaseManager.hasRecords(_secKeyFs) ? _secKeyFs.security_key_id : null;
	}
	
	return null;
}

/**
 *
 * @properties={typeid:24,uuid:"46A74EF1-A028-4EA1-9891-295EDAA079EA"}
 */
function svy_cnv_convertNavHelp() {
	// Method to convert the field "title" in nav_help to "help_title"
	
	if (application.getVersion() == '6.0.0' || utils.stringToNumber(application.getVersion().split('.')[0]) < 6) {
		application.output('Not compartible with 6.0.0. required a Servoy version greater than 6.0.0');
		return;
	}
	
	var _server = globals.nav_db_framework;
	var _tableName = 'nav_help';
	
	try {
	
		if (!plugins.maintenance.isInMaintenanceMode())
			plugins.maintenance.setMaintenanceMode(true);	
		
		var _jsServer = plugins.maintenance.getServer(_server);
		var _table = _jsServer.getTable(_tableName);		
		_table.createNewColumn('help_title', JSColumn.TEXT, 50);
		_jsServer.synchronizeWithDB(_table);		
		
		var _helpFs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_help');
		_helpFs.loadAllRecords();
		
		for (var _i = 1; _i <= _helpFs.getSize(); _i++ ) {
			var _helpRec = _helpFs.getRecord(_i);
			
//			_helpRec['help_title'] = _helpRec['title'];
			var _sql = 'UPDATE nav_help SET help_title = ? WHERE help_id = ?'
			plugins.rawSQL.executeSQL(_server, _tableName, _sql, [_helpRec['title'], _helpRec['help_id']])
		}	
		
		_table.deleteColumn('title');
		_jsServer.synchronizeWithDB(_table);		
	}
	catch (ex) {
		application.output('Exception************************************************************');
		application.output(ex)
	}
	finally {
		plugins.maintenance.setMaintenanceMode(false);	
		application.output('Conversion completed. Please restart application');
	}
}

/**
 * @param {String} [_serverName]
 * 
 * @deprecated not used anywhere
 * 
 * @properties={typeid:24,uuid:"CC1A0A1C-94E5-4A57-BEEE-644205D5C491"}
 */
function svy_cnv_setAdminLevel(_serverName) {
	var _version = "3.0.1b3_6.1.rc2"
	if (globals.svy_nav_checkDataVersion(_version)) {
		return;
	}
	
	if (!_serverName) {
		_serverName = globals.nav_db_framework;
	}
	
	var _query = "UPDATE sec_user SET admin_level = 1 WHERE flag_system_administrator = 1";
	plugins.rawSQL.executeSQL(_serverName, "sec_user", _query, null);
	
	_query = "UPDATE sec_user SET admin_level = 2 WHERE flag_super_administrator = 1";
	plugins.rawSQL.executeSQL(_serverName, "sec_user", _query, null);
	
	plugins.rawSQL.flushAllClientsCache(_serverName, "sec_user");
	
	globals.svy_nav_setDataVersion(_version);
}
