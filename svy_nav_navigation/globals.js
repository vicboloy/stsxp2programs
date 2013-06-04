/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"1500F984-F06A-439C-9E56-7485FA749E71",variableType:-4}
 */
var svy_nav_multi_tab_programs = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"59012888-749A-4C1B-9E25-A1B1851E215D"}
 */
var nav_version = '4.0.0';

/**
 *	 Navigates to the main screen
 *
 * @author Sanneke Aleman
 * @since 2007-11-04
 *
 * @properties={showInMenu:true,typeid:24,uuid:"aa42be89-94d5-40cc-9c12-5fa12f64cd35"}
 */
function _2_svy_nav_openMain() {
	forms[globals.nav.mainFormName].controller.show()
}

/**
 *	Opens a shortcut dialog, so users can use shortcuts to go to a program
 *
 * @author Sanneke Aleman
 * @since 2007-11-04
 *
 * @properties={showInMenu:true,typeid:24,uuid:"5d8d96db-9a9b-43f1-92f6-a0ad8441f8d4"}
 */
function _3_svy_nav_openShortcutDialog() {
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_fr_shortcut_dialog)
}

/**
 *	Navigate back from a related record
 *
 * @author Sanneke Aleman
 * @since 2008-11-24
 *
 * @properties={typeid:24,uuid:"0b3dcd97-2049-41ba-aea8-30b4053e8cb8"}
 */
function svy_nav_backFormRelated(_event) {
	if (globals.nav.related_text && globals.nav.stack_position > 0) {
		var _cur_related = globals.nav.stack[globals.nav.stack_position].foundset_related_text
		for (var j = globals.nav.stack_position - 1; j >= 0; j--) {
			if (_cur_related != globals.nav.stack[j].foundset_related_text) {
				forms[globals.nav.mainFormName].history_move(_event, j)
				break
			}
		}
	}
}

/**
 *	 To create a bookmark
 *
 * @author Sanneke Aleman
 * @since 2008-11-24
 *
 * @properties={typeid:24,uuid:"96e2b1d9-235e-4930-9dc6-99154505cfbd"}
 */
function svy_nav_bookmarkCreate() {

	var _form = globals.nav_currentPanel1Form
	var _toolbarForm = forms[_form].getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	var _program_id = globals.nav.program[_program].program_id

	var _maxBookmarks = 7
	if (scopes.svyProperties.getPropertyValue('max_bookmarks')) {
		_maxBookmarks = scopes.svyProperties.getPropertyValue('max_bookmarks') * 1
	}

	// if user has 7 BOOKMARKS, maximum will give a warning and return
	if (databaseManager.hasRecords(_to_nav_bookmarks$user_id$organization_id) && _to_nav_bookmarks$user_id$organization_id.getSize() >= _maxBookmarks) {
		globals.DIALOGS.showWarningDialog('', i18n.getI18NMessage('svy.fr.lbl.maximum_bookmarks'), i18n.getI18NMessage('svy.fr.lbl.ok'));
		return
	}

	//Returns an array containing the names of the identifier (PK) column(s)
	var jsTable = databaseManager.getTable(globals.nav.program[_program].server_name, globals.nav.program[_program].table_name)

	// save the recordids
	var _record_names = jsTable.getRowIdentifierColumnNames()
	var _record_ids = new Array() //saving array directly to database field doesn't work
	var _record_types = new Array()
	for (var i = 0; i < _record_names.length; i++) {
		// get the record id values
		_record_ids[i] = forms[_form][_record_names[i]]

		// get the column types
		var _JSColumn = jsTable.getColumn(_record_names[i])
		_record_types[i] = _JSColumn.getTypeAsString()

	}

	//check if bookmark is unique
	for (var j = 1; j <= _to_nav_bookmarks$user_id$organization_id.getSize(); j++) {
		/** @type {Array}*/
		var _dbRecord_ids = _to_nav_bookmarks$user_id$organization_id.record_ids
		/** @type {Array}*/
		var _dbRecord_names = _to_nav_bookmarks$user_id$organization_id.record_ids_names
		if (globals.svy_utl_compareArrays(_dbRecord_ids, _record_ids) && globals.svy_utl_compareArrays(_dbRecord_names, _record_names)) {
			return //bookmark already excist
		}
	}

	// ceate the bookmark record
	_to_nav_bookmarks$user_id$organization_id.newRecord()

	// save the recordids_names
	_to_nav_bookmarks$user_id$organization_id.record_ids_names = _record_names

	//save the record ids
	_to_nav_bookmarks$user_id$organization_id.record_ids = _record_ids

	//save the column types
	_to_nav_bookmarks$user_id$organization_id.record_ids_types = _record_types

	//save the program
	_to_nav_bookmarks$user_id$organization_id.program_id = _program_id

	//save the layout
	_to_nav_bookmarks$user_id$organization_id.layout_id = globals.nav_layout_id

	//save the info object
	_to_nav_bookmarks$user_id$organization_id.layoutobj = forms[globals.nav.mainFormName].getLayoutObject(false)

	//set the right sort order
	var maxReturnedRows = 1;
	var query = 'SELECT MAX(sort_order) FROM nav_bookmarks WHERE user_id = ? AND organization_id = ?';
	var args = new Array();
	args[0] = globals.svy_sec_lgn_user_id.toString();
	args[1] = globals.svy_sec_lgn_organization_id.toString();
	var dataset = databaseManager.getDataSetByQuery(databaseManager.getDataSourceServerName(forms.svy_nav_fr_bookmarks.controller.getDataSource()), query, args, maxReturnedRows);
	if (dataset.getValue(1, 1)) {
		_to_nav_bookmarks$user_id$organization_id.sort_order = dataset.getValue(1, 1) + 1
	} else {
		_to_nav_bookmarks$user_id$organization_id.sort_order = 1
	}

	databaseManager.saveData(_to_nav_bookmarks$user_id$organization_id.getRecord(1))

	// load the bookmarks to see the new bookmark
	forms.svy_nav_fr_bookmarks.loadBookmarks();
	// show the tab with the bookmarks
	forms.svy_nav_fr_bottom_bkmk_short.onClickBookmark();
}

/**
 *	To delete a bookmark
 * @author Sanneke Aleman
 * @since 2008-11-24
 *
 * @param {JSEvent} [_event]
 * @param {Number} [_array_nr]
 *
 * @properties={typeid:24,uuid:"43d7406f-e55a-4b27-bc0a-f366fdca87e3"}
 * @AllowToRunInFind
 */
function svy_nav_bookmarkDelete(_event, _array_nr) {

	if (_event && !_array_nr) {
		var _button = _event.getElementName();
		_array_nr = _button.replace(/[^0-9]/g, "")
	}

	/**@type {JSFoundSet<db:/svy_framework/nav_bookmarks>}*/
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_bookmarks')

	// delete the record, if record exist
	if (_fs.find()) {
		_fs.bookmark_id = globals.nav.bookmarks[_array_nr].bookmark_id
		_fs.search()
		_fs.deleteRecord()
		forms.svy_nav_fr_bookmarks.loadBookmarks();
	}

}

/**
 *	Create's  a tab for a program so the framework can show related data easily
 *
 * @author Sanneke Aleman
 * @since 2008-11-04
 * @param {String} _program_name
 * @param {String} _server
 * @param {String} _table
 * @param {Number} _heigt_spliter
 *
 * @return  none
 *
 * @properties={typeid:24,uuid:"672fc79c-eb9c-426b-9483-c538f0963f1d"}
 */
function svy_nav_create_tab(_program_name, _server, _table, _heigt_spliter) {
	if (!_server || !_table) return
	if (_program_name == undefined) return
	var _tab_form = _program_name + '_tab'
	var _width = 50
	var _height = 50

	if (!forms[_tab_form]) {
		var jsForm = solutionModel.newForm(_tab_form, _server, _table, 'main_style', false, _width, _height)
		jsForm.newTabPanel('tabs', 0, 0, _width, _height)
		jsForm.navigator = SM_DEFAULTS.NONE
		jsForm.styleName = 'sampleuse_navigation'
		jsForm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_NEVER + SM_SCROLLBAR.VERTICAL_SCROLLBAR_NEVER
		var jsTab = jsForm.getTabPanel('tabs')
		jsTab.anchors = 15
		jsTab.tabOrientation = SM_ALIGNMENT.TOP
		jsTab.transparent = true
	}
}

/**
 *	Return the path of a menu, used to select the right menu in the tree.
 *
 * @author Sanneke Aleman
 * @since 2007-07-03
 * @param {JSRecord<db:/svy_framework/nav_menu_items>} _rec record of the nav_menu table
 * @return {Array} path of the menu

 * @properties={typeid:24,uuid:"08068150-c45e-4e1f-9bf4-c5435c685f5c"}
 */
function svy_nav_getMenuPath(_rec) {
	if (!_rec.parent_id) {
		return [_rec.menu_item_id];
	} else {
		/** @type {JSRecord<db:/svy_framework/nav_menu_items>} */
		var _childRec = _rec.nav_menu_items_to_nav_menu_items$child_to_parent.getRecord(1)
		return globals.svy_nav_getMenuPath(_childRec).concat([_rec.menu_item_id]);
	}
}

/**
 * @properties={typeid:24,uuid:"5b8e5403-1c9e-45a8-b911-243c40ab144f"}
 */
function svy_nav_getOwner_id() {

	return globals.svy_sec_lgn_owner_id;

}

/**
 *	Queries the programs where the logged in user had rights for.
 *
 * @author Sanneke Aleman
 * @since 2007-07-03
 * @return {JSDataSet} dataset with the programs and buttons
 *
 * @properties={typeid:24,uuid:"836ce0ff-e4c3-4016-821f-55d1108bb5e2"}
 */
function svy_nav_getPrograms() {
	var _query
	var _dataset
	var maxReturnedRows
	// array of all the buttons with security rights
	if (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER) // administator doesn't have to have rights to the keys
	{
		_query = "SELECT 	p.program_id, p.program_name FROM nav_program p order by p.program_name"
		maxReturnedRows = 10000
		_dataset = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, null, maxReturnedRows);
		return _dataset
	} else // get the rights for normal users
	{
		_query = "SELECT 	p.program_id, p.program_name	FROM nav_program p \
							WHERE	p.program_id IN ( \
																	SELECT 	nk.program_id \
																	FROM	nav_navigation_keys nk \
																	WHERE	nk.code = 'program' and \
																			p.program_id = nk.program_id and\
																			nk.security_key_id IN (" + scopes.svySecurityManager.getSecurityKeysForInQuery() + ")) order by p.program_name"
		maxReturnedRows = 10000
		_dataset = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, null, maxReturnedRows);
		return _dataset
	}
}

/**
 *	Build the navigation object, globals.nav in memory
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 *
 * @properties={typeid:24,uuid:"9ab87bce-b146-46a7-90a9-90034f9229cf"}
 */
function svy_nav_init() {

	//run onPreInit-method of when available
	if (globals['onPreInit']) {
		globals['onPreInit']()
	}

	//set the organisation filter field
	globals.svy_nav_setFilterOrganizationProperties()

	//remove tooltips if iphone/ipad
	//	globals.svy_nav_removeTooltips()

	//set the divider properties if user has no divider properties
	if (!scopes.svyProperties.getPropertyValue(application.getSolutionName() + '.' + globals.nav.mainFormName + '.tab_split.divLoc')) {
		scopes.svyProperties.setUserProperty(application.getSolutionName() + '.' + globals.nav.mainFormName + '.tab_split.divLoc', '175');
	}
	if (!scopes.svyProperties.getPropertyValue(application.getSolutionName() + '.svy_nav_fr_menu.tab_split.divLoc')) {
		scopes.svyProperties.setUserProperty(application.getSolutionName() + '.svy_nav_fr_menu.tab_split.divLoc', '400')
	}

	// the stack for the history and the position
	globals.nav.stack = new Array()
	globals.nav.stack_position = 0

	// load all the forms with properties into the object
	var _program_array = globals.svy_nav_init_programs();

	//user has not even the right to see one program
	if (!_program_array && ! (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER)) {
		globals.DIALOGS.showWarningDialog('i18n:svy.fr.lbl.warning', 'i18n:svy.fr.lbl.warning_no_program', 'i18n:svy.fr.lbl.ok')
		security.logout()
	}

	var _function_array = globals.svy_nav_get_functions();

	//load the nav properties
	globals.svy_nav_multi_tab_programs = scopes.svyProperties.getPropertyValueAsBoolean("multiple_tabs_per_program");
	globals.nav.hasRecordHistory = scopes.svyProperties.getPropertyValueAsBoolean("keep_record_history");
	globals.nav.splitPanesDividerSize = scopes.svyProperties.getPropertyValue("split_panes_divider_size");
	globals.nav.splitPanesDividerColor = scopes.svyProperties.getPropertyValue("split_panes_divider_color");

	// load the stucture of the menu into the object
	globals.svy_nav_init_menu_items(_program_array, _function_array);

	//filter the tabs
	globals.svy_nav_init_tabs(_program_array)

	// initialize the menu
	forms[globals.nav.mainFormName].initMenu();

	//set nav style form
	if (forms['svy_nav_style_custom']) {
		globals.nav_styleForm = 'svy_nav_style_custom'
	}

	//load the valuelists
	if (globals.svy_val_startup_setvaluelists) {
		globals.svy_val_startup_setvaluelists();
	}

	// set date
	forms[globals.svy_utl_getFrameworkFormName("nav_fr_status_bar")].elements['lbl_date']['text'] = utils.dateFormat(new Date(), 'dd-MMM-yyyy') + ' - ' + i18n.getI18NMessage('svy.fr.lbl.week') + ': ' + utils.dateFormat(new Date(), 'w')

	globals.nav.his = new Object()
	globals.nav.his.foundset = null
	globals.nav.childRelation = null
	globals.nav.his.foundset_related_text = null
	globals.nav.his_max_entries = 20
	globals.nav.noHistory = 0
	globals.nav.related_text = null
	globals.nav.related_form = null
	globals.nav.switchedForEdit = false

	// load shortcuts/bookmarks
	forms.svy_nav_fr_shortcuts.loadShortcuts()
	forms.svy_nav_fr_bookmarks.loadBookmarks()
	globals.nav.recordHistory = new Array()
	forms.svy_nav_fr_tree_top.elements.btn_his_forw.enabled = false
	forms.svy_nav_fr_tree_top.elements.btn_his_back.enabled = false
	forms.svy_nav_fr_tree_top.elements.btn_shortcut.enabled = false
	forms.svy_nav_fr_tree_top.elements.btn_bookmark.enabled = false
	//	forms.svy_nav_fr_viewCompareTab.setViewButtonsEnabled(false)

	//init shortkeys
	globals.svy_nav_setShortKeys(_function_array)

	//Put styles from svy_nav_style form in object
	globals.svy_nav_getStylesFromStyleForm();

	//	application.setUIProperty("ComboBox.disabledBackground", new Packages.javax.swing.plaf.ColorUIResource(java.awt.Color.GREEN));
	application.putClientProperty("ComboBox.disabledForeground", new Packages.javax.swing.plaf.ColorUIResource(java.awt.Color.BLACK));

	//run onPostInit-method of when available
	if (globals['onPostInit']) {
		globals['onPostInit']()
	}

}

/**
 *	Sort the tree menu and hide all the items where the user has no rights for.
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {Array} _program_array array with all the programs available for this user
 * @param {Array} _function_array
 * @param {Boolean} [_reset] true when resetting menu (for example when changing organization
 *
 * @properties={typeid:24,uuid:"540e7bfa-863b-41b1-be84-e8868faa6bb6"}
 * @AllowToRunInFind
 */
function svy_nav_init_menu_items(_program_array, _function_array, _reset) {

	var _answer, _open_config
	var _menu_id = svy_nav_getMenuID();

	if (!_menu_id) {
		if ( (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER)) //if user is admin also show option to open the configurator
		{
			_open_config = i18n.getI18NMessage('svy.fr.lbl.open_configurator')
			_answer = globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.noMenuWarning'), i18n.getI18NMessage('svy.fr.lbl.logout'), _open_config);
			if (_answer == _open_config) {
				globals._1_svy_nav_openNavigationForm()
				return
			}
		} else {
			globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.noMenuWarning'), i18n.getI18NMessage('svy.fr.lbl.ok'));
			security.logout()
		}

		//throw a exception to let the methods stop
		throw 'User has no menu';
	}

	if (_program_array && _program_array.length < 1) {
		if ( (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER)) //if user is admin also show option to open the configurator
		{
			_open_config = i18n.getI18NMessage('svy.fr.lbl.open_configurator')
			_answer = globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.noMenuWarning'), i18n.getI18NMessage('svy.fr.lbl.logout'), _open_config);
			if (_answer == _open_config) {
				globals._1_svy_nav_openNavigationForm()
				return
			}
		}
		throw 'User has no right to programs';
	}

	var _layout_query = "SELECT layout_id, name FROM nav_layout WHERE security_key_id IN (" + scopes.svySecurityManager.getSecurityKeysForInQuery() + ") OR security_key_id is null"

	var _dataset_layout = databaseManager.getDataSetByQuery(globals.nav_db_framework, _layout_query, null, -1);

	var _layout_ids
	if (_dataset_layout.getMaxRowIndex() > 0) {
		var _array = _dataset_layout.getColumnAsArray(1)
		_layout_ids = _array.join("','")
	} else {
		_layout_ids = -1
	}

	var _function_string = ''
	if (_function_array.length > 0) {
		_function_string = _function_array.join("','")
	}

	if (_function_string == '') {
		_function_string = '-1'
	}

	//set a table filter
	var _query = "	SELECT 	menu_item_id \
					FROM 	nav_menu_items\
					WHERE	menu_id = '" + _menu_id + "' AND\
							(menuitem_type = 'L' AND \
							layout_id in ('" + _layout_ids + "'))\
					OR 		(menuitem_type = 'F' AND \
							function_id in ('" + _function_string + "'))\
					OR		(menuitem_type != 'L' AND\
							menu_item_id in (	SELECT 	 parent_id\
							            	FROM 	nav_menu_items\
											WHERE	menu_id = '" + _menu_id + "' AND\
													(menuitem_type = 'L' AND \
													layout_id in ('" + _layout_ids + "'))\
											OR 		(menuitem_type = 'F' AND \
													function_id in ('" + _function_string + "'))\
											OR		(menuitem_type != 'L' AND\
													menu_item_id in (	SELECT 	 parent_id\
									            	FROM 	nav_menu_items\
													WHERE	menu_id = '" + _menu_id + "' AND\
															(menuitem_type = 'L' AND \
															layout_id in ('" + _layout_ids + "'))\
															OR 		(menuitem_type = 'F' AND \
															function_id in ('" + _function_string + "'))\
															OR		(menuitem_type != 'L' AND\
																menu_item_id in (	SELECT 	 parent_id\
												            	FROM 	nav_menu_items\
																WHERE	menu_id = '" + _menu_id + "' AND\
																		(menuitem_type = 'L' AND \
																		layout_id in ('" + _layout_ids + "'))\
																		OR 		(menuitem_type = 'F' AND \
																		function_id in ('" + _function_string + "'))))))))"
	if (! (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER)) {
		databaseManager.addTableFilterParam(globals.nav_db_framework, 'nav_menu_items', 'menu_item_id', 'IN', _query, 'menuFilter')
	}

	//	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, "nav_menu_items");
	//	_fs.loadAllRecords()
	//
	//	globals.html(_fs)

	//	var _fs = globals.svy_nav_getMenuItems();
	//	forms.svy_nav_fr_tree.controller.loadRecords(_fs);
	//
	//	// check if iPhone is used
	//	if(!globals.svy_utl_OsIsIphoneIpad())
	//	{
	//		forms.svy_nav_fr_tree.init_tree(_reset)
	//	}
	//	else
	//	{
	//		//mobile menu
	//		globals.svy_nav_m_init_menu()
	//	}

}

/**
 * @properties={typeid:24,uuid:"5E1BB31D-0F5C-44F5-B9CB-473FB632C849"}
 */
function svy_nav_init_tabs(_program_array) {
	if (! (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER)) {
		databaseManager.addTableFilterParam(globals.nav_db_framework, 'nav_tab', 'program_id', 'IN', _program_array, 'tabFilter')
	}
}

/**
 * Returns foundset of all menu_items with a certain parent, or the root level if no parent is provided.
 *
 * @author Joas de Haan
 * @since 2011-12-14
 * @param {Number} [_parent_id]
 *
 * @return {JSFoundset<db:/svy_framework/nav_menu_items>}
 *
 * @properties={typeid:24,uuid:"CAB58D6A-1E6D-49B3-BF19-AC982E650801"}
 * @AllowToRunInFind
 */
function svy_nav_getMenuItems(_parent_id) {
	/** @type {JSFoundSet<db:/svy_framework/nav_menu_items>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, "nav_menu_items");

	_fs.find();
	if (_parent_id) {
		_fs.parent_id = _parent_id;
	} else {
		_fs.parent_id = "^";
		_fs.menu_id = svy_nav_getMenuID();
	}
	_fs.sort("sort_order asc");
	_fs.search();

	return _fs;
}

/**
 * Returns the menu_id of the menu that will be used, based on the user's rights and the menu priority
 *
 * @author Joas de Haan
 * @since 2011-12-14
 *
 * @properties={typeid:24,uuid:"B98939D6-7FFD-425A-ABA4-8C574E12A897"}
 */
function svy_nav_getMenuID() {
	
	var keyIds = scopes.svySecurityManager.getSecurityKeysForInQuery();

	var _query_menus = "SELECT menu_id \
		FROM nav_menu \
		WHERE (security_key_id IN (" + keyIds + ") OR security_key_id IS NULL) "

	if (scopes.svyProperties.getPropertyValueAsBoolean("filter_on_solution_name")) {
		// also filter on the solution name
		_query_menus += " AND (solution_name = '" + application.getSolutionName() + "' OR solution_name IS NULL)";
	}

	if (scopes.modUtils$system.isMobilePlatform()) {
		_query_menus += ' AND flag_mobile = 1 '
	}

	_query_menus += " ORDER BY priority"
	var _dataset = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query_menus, null, 1)

	return _dataset.getValue(1, 1);
}

/**
 *	Init all the programs that are available for the login user, with tabs menu's'.
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @return {Array} programs that the user has rights for
 *
 * @properties={typeid:24,uuid:"b55cf7ac-8092-4ecc-b5c9-84e1c2bfbbee"}
 */
function svy_nav_init_programs() {
	// make a program object in the nav object
	globals.nav.program = new Object()

	var _rec
	var _data_rec = 1

	// get the programs where the user has rights for
	/** @type {JSDataSet} */
	var _dataset = globals.svy_nav_getPrograms();
	var _program_array = []

	if (_dataset.getMaxRowIndex() == 0) {
		return null
	}

	/** @type {JSFoundSet<db:/svy_framework/nav_program>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_program')

	_fs.loadRecords(_dataset)

	//set progress bar properties
	var _progress = 90
	var _begin_progress = 5

	for (var i = 1; i <= _fs.getSize(); i++) {
		_rec = _fs.getRecord(i)

		// setting progress bar.
		if (i % 4 == 0) {
			forms[globals.nav.loadingFormName].setProgress(_begin_progress + i * _progress / _fs.getSize());
		}
		if (!security.canRead('db:/' + _rec.server_name + '/' + _rec.table_name) && ! ( (_rec.server_name == null && _rec.table_name == null)))// no security rights so remove from array
		{
			_data_rec++
			continue
		}

		if ( (_rec.program_name == _dataset.getValue(_data_rec, 2) || (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER)) && _rec.form_object) {
			// in the dataset are
			// 1. program_name
			// 2. btn_new
			// 3. btn_edit
			// 4. btn_duplicate
			// 5. btn_delete
			// 6. btn_method
			// 7. btn_print
			// 8. btn_sort
			// 9. btn_rec_nav
			// 10. btn_search
			// 11. btn_search_prop
			// 12. btn_all_records
			// 13. btn_export
			// 14. btn_resettblheader
			// 15. btn_help
			// 16. btn_record_information
			// 17. btn_required_fields
			// put record information into the nav object

			var _programObject = globals.nav.program[_rec.program_name] = { };
			_programObject.description = _rec.display_description
			_programObject.program_image = _rec.program_image
			_programObject.program_name = _rec.program_name
			_programObject.display_field_header = _rec.display_field_header
			_programObject.sort_value = _rec.sort_value
			_programObject.base_form_name = _rec.base_form_name
			_programObject.record_locking = _rec.record_locking
			_programObject.server_name = _rec.server_name
			_programObject.table_name = _rec.table_name
			_programObject.form = _rec.form_object ? (_rec.form_object.sort(function sortFormObject(item1,item2) { if (item1[0] > item2[0]) {return 1;} else if (item1[0] < item2[0]) {return -1} else { return 0; } })) : _rec.form_object;
			_programObject.toolbar_main = _rec.toolbar_main
			_programObject.toolbar_tab = _rec.toolbar_tab
			_programObject.noreadonly = _rec.noreadonly
			_programObject.layout_id = _rec.layout_id
			_programObject.program_id = _rec.program_id
			_programObject.empty_foundset = _rec.empty_foundset;
			_programObject.btn_lookup_delete = _rec.btn_lookup_delete
			_programObject.btn_lookup_new = _rec.btn_lookup_new
			_programObject.btn_lookup_show = _rec.btn_lookup_show
			_programObject.btn_lookup_edit = _rec.btn_lookup_edit

			// set filters
			_programObject.filter = new Array()

			_program_array.push(_rec.program_id)
		}
		_data_rec++
	}
	var _stringPrograms = _program_array.join("','")

	//query the filters
	var _query_filter = " SELECT  p.program_name,\
         ff.filter_field_name,\
         ff.filter_operator,\
         ff.filter_value\
       FROM nav_foundset_filter_parameters ff,\
         nav_program p\
       WHERE ff.nav_foundset_filter_id = p.nav_foundset_filter_id\
       AND  p.program_id IN ('" + _stringPrograms + "')"
	if (scopes.svyProperties.getPropertyValueAsBoolean("filter_on_solution_name")) {
		// also filter on the solution name
		_query_filter += " AND (p.solution_name = '" + application.getSolutionName() + "' OR p.solution_name IS NULL)";
	}

	var _dataset_filter = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query_filter, null, -1);
	for (var n = 1; n <= _dataset_filter.getMaxRowIndex(); n++) {
		var _filterObj = globals.nav.program[_dataset_filter.getValue(n, 1)].filter[globals.nav.program[_dataset_filter.getValue(n, 1)].filter.length] = new Object()
		_filterObj.filter_field_name = _dataset_filter.getValue(n, 2)
		_filterObj.filter_operator = _dataset_filter.getValue(n, 3)
		/** @type {String} */
		var _filter_value = _dataset_filter.getValue(n, 4)
		if (/^\[/.test(_filter_value)) {
			_filter_value = _filter_value.substring(1, _filter_value.length - 1).split(",");
		}
		_filterObj.filter_value = _filter_value

	}
	return _program_array
}

/**
 *	Load table view persistance, loads the position of the columns that the user defined
 *	This method works only if you use svy_nav_saveTableViewPersistance to
 *
 * @author Sanneke Aleman/ Joas de Haan / Pradipta
 * @since 2008-11-01
 *
 * @param {String}	[_form] form you want to load the tableview persistance
 * @param {UUID} _programId Current program id
 * @param {UUID} _layoutId Current layout id
 * @param {UUID} _tableViewId The table view id, when runtime table view is used
 *
 * @properties={typeid:24,uuid:"cfb0ea3a-9f82-4e02-af6a-c9bd9d2b3702"}
 * @AllowToRunInFind
 */
function svy_nav_loadTableViewPersistance(_form,  _programId, _layoutId, _tableViewId) {

	if (!_form) {
		//there should be a form
		return
	}

	if (forms[_form].controller.view != 3) // view
	{
		return;
	}
	var _width, _height, _x, _y, _rec;
	/** @type {JSFoundSet<db:/svy_framework/sec_user_table_properties>} */
	var _tblPropertyFs = databaseManager.getFoundSet('db:/svy_framework/sec_user_table_properties');
	if (_tblPropertyFs.find()) {
		_tblPropertyFs.user_table_view_id = (_tableViewId ? _tableViewId : '^');
		_tblPropertyFs.program_id = _programId;
		_tblPropertyFs.layout_id = _layoutId;
		_tblPropertyFs.user_id = scopes.globals.svy_sec_lgn_user_id;
		_tblPropertyFs.organization_id = scopes.globals.svy_sec_lgn_organization_id;
		_tblPropertyFs.search();
	}
	
	// loop true all the records for this user and this form
	for (var i = 1; i <= _tblPropertyFs.getSize(); i++) {
		_rec = _tblPropertyFs.getRecord(i);
		globals.nav_element_name = _rec.element_name;
		_x = _rec.location_x;
		_y = _rec.location_y;
		_width = _rec.width;
		_height = _rec.height;
		if (forms[_form].elements[globals.nav_element_name]) {
			// set the size and the location
			forms[_form].elements[globals.nav_element_name].setSize(_width, _height);
			if (_y == undefined || _y == null) _y = 0
			if (_x == undefined || _x == null) _x = 0
			forms[_form].elements[globals.nav_element_name].setLocation(_x, _y);
		}
	}
}

/**
 *	Called by opening the module
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 *
 * @param {String} _startArgs The startup arguments
 * @param {Object<Array<String>>} [queryParams] all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"6ef62880-dc27-4084-b900-3006a8915350"}
 */
function svy_nav_onOpen(_startArgs, queryParams) {
	//retrieve the owner_id and db-servernames from the deeplink - will not work in developer
	var _owner_id, _userDB, _frameworkDB;
	if (_startArgs) {
		globals.nav_startArgs = _startArgs
		var _args = _startArgs.split("|");

		_owner_id = _args[0];
		_userDB = _args[1];
		_frameworkDB = _args[2];
	}

	// set owner id's
	if (_owner_id) {
		globals["owner_id"] = globals["svy_sec_owner_id"] = globals.svy_sec_lgn_owner_id = _owner_id;
	}
	
	//check if we should switch the framework db
	if (globals["svy_nav_getFrameworkDBName"]) {
		//This function is used for people that named their frameworkdb different than "svy_framework"
		globals.nav_db_framework = globals["svy_nav_getFrameworkDBName"]();
	}
	if (_frameworkDB && (_frameworkDB != globals.nav_db_framework)) {
		databaseManager.switchServer(globals.nav_db_framework, _frameworkDB);
	}
	
	scopes.svyApplicationCore.initModules(queryParams);	

	forms[globals.nav.postLoginFormName].controller.show()

	globals.svy_sec_setUserAndOwner();

	// webclient srollbars
	if (scopes.svyProperties.getPropertyValueAsBoolean("web_client_tableview_scrollable")) {
		application.putClientProperty(APP_UI_PROPERTY.TABLEVIEW_WC_DEFAULT_SCROLLABLE, true);
	}
	if (scopes.svyProperties.getPropertyValueAsBoolean("web_client_tableview_scrollable_keep_loaded_rows")) {
		application.putClientProperty(APP_UI_PROPERTY.TABLEVIEW_WC_SCROLLABLE_KEEP_LOADED_ROWS, true);
	}

	// nullColumnValidatorEnabled
	if (!scopes.svyProperties.getPropertyValueAsBoolean("null_column_validator_enabled")) {
		databaseManager.nullColumnValidatorEnabled = false;
	}

	//check if we should switch the user db
	if (_userDB && globals["svy_nav_getUserDBName"] && (_userDB != globals["svy_nav_getUserDBName"]())) {
		//Switch to userdbname that was provided in the deeplink -> overrules userdb set in owner record
		databaseManager.switchServer(globals["svy_nav_getUserDBName"](), _userDB);
	} else {
		//Check if userdb is set in ownerrecord. If so, switch to it.
		/** @type {JSFoundSet<db:/svy_framework/sec_owner>}*/
		var _fs = databaseManager.getFoundSet(globals.nav_db_framework, "sec_owner");
		_fs.loadRecords(databaseManager.convertToDataSet([globals.svy_sec_lgn_owner_id]));
		_userDB = _fs.database_name;
		if (_userDB != null && _userDB != "" && globals["svy_nav_getUserDBName"] && _userDB != globals["svy_nav_getUserDBName"]()) {
			databaseManager.switchServer(globals["svy_nav_getUserDBName"](), _userDB);
		}
	}

	//save solution name
	scopes.globals.nav_solution_name = application.getSolutionName();
	
	//filter framework_db on solution name if necessary
	if (scopes.svyProperties.getPropertyValueAsBoolean("filter_on_solution_name")) {
		databaseManager.addTableFilterParam(globals.nav_db_framework, null, "solution_name", "^||=", application.getSolutionName(), "solution_filter");
	}

	//filter data
	if (! (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER)) {
		scopes.svySecurityManager.filterOwner();
		scopes.svySecurityManager.filterOrganization();
	}

	// save properties used in login to the local properties file or cookie
	var propertiesToSave = globals.svy_lgn_properties;
	if (propertiesToSave) {
		for (var p in propertiesToSave) {
			var propValue = scopes.svyProperties.getPropertyValue(p);
			application.setUserProperty(p, (propValue ? propValue.toString() : ''));
		}
	}

	databaseManager.setCreateEmptyFormFoundsets();

	if (!application.isInDeveloper() && scopes.svyProperties.getPropertyValueAsBoolean("hide_menu_bar") && plugins.window.getMenuBar().getMenuCount()) {
		plugins.window.getMenuBar().removeAllMenus();
	}

	//run onOpen-method of when available
	if (globals['onOpen']) {
		globals['onOpen'].apply(this, arguments);
	}

	//onPost Login
	globals.svy_nav_postLogin()

	forms[globals.nav.mainFormName].controller.show()
}

/**
 *	Popmenu for the general reports that are not attached to a specific program
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @properties={typeid:24,uuid:"a6f6a453-b83f-4df2-abc6-cc54d2d994a3"}
 */
function svy_nav_popmenu_main_reports(_event) {
	var _menu = plugins.window.createPopupMenu()
	var _submenu, _rec, _rec_child, _item

	if (!_to_nav_popmenu$main_report$roots.getSize()) {
		return
	}
	var _keys_ar = scopes.svySecurityManager.getSecurityKeysIds();

	// read the menu out the tables and create a popmenu
	for (var i = 1; i <= _to_nav_popmenu$main_report$roots.getSize(); i++) {
		_rec = _to_nav_popmenu$main_report$roots.getRecord(i)

		if (_rec.nav_popmenu_to_nav_navigation_keys$popmenu.security_key_id && _keys_ar.indexOf(_rec.nav_popmenu_to_nav_navigation_keys$popmenu.security_key_id) < 0) {
			continue; //user has no rights for this menu
		}

		if (utils.hasRecords(_rec.nav_popmenu_to_nav_popmenu$children)) {
			_submenu = null;
			for (var j = 1; j <= _rec.nav_popmenu_to_nav_popmenu$children.getSize(); j++) {
				_rec_child = _rec.nav_popmenu_to_nav_popmenu$children.getRecord(j);

				if (databaseManager.hasRecords(_rec_child.nav_popmenu_to_nav_navigation_keys$popmenu) && _rec_child.nav_popmenu_to_nav_navigation_keys$popmenu.security_key_id && _keys_ar.indexOf(_rec_child.nav_popmenu_to_nav_navigation_keys$popmenu.security_key_id) < 0) {
					continue; //user has no rights for this menu
				}

				if (!_submenu) { //Add parent it it doesn't exist yet. Parent is not added if the user doesn't have rights to any of the children.
					_submenu = _menu.addMenu(_rec.label)
				}
				_item = _submenu.addMenuItem(_rec_child.label, globals.svy_nav_callFunctionFromPopmenu)
				_item.methodArguments = [_rec_child.function_id]

			}
		} else {
			_item = _menu.addMenuItem(_rec.label, globals.svy_nav_callFunctionFromPopmenu);
			_item.methodArguments = [_rec.function_id]
		}
	}

	/** @type {RuntimeComponent} */
	var _source = _event.getSource()
	if (_source != null) {
		_menu.show(_source);
	}
}

/**
 *	Saves table view persistance, saves the position of the columns that the user defined
 *	This method works only if you use svy_nav_loadTableViewPersistance too
 *
 * @author Sanneke Aleman / Joas de Haan / Pradipta
 * @since 2008-11-24
 * @return  none
 * @param {String} _form The form name
 * @param {UUID} _programId Current program id
 * @param {UUID} _layoutId Current layout id
 * @param {UUID} _tableViewId The table view id, when runtime table view is used
 *
 * @properties={typeid:24,uuid:"e6e79a11-971d-489d-9daa-a84c75d7e68f"}
 * @AllowToRunInFind
 */
function svy_nav_saveTableViewPersistance(_form, _programId, _layoutId, _tableViewId) {
	var _type
	/** @type {JSFoundSet<db:/svy_framework/sec_user_table_properties>} */
	var _tblPropertyFs = databaseManager.getFoundSet('db:/svy_framework/sec_user_table_properties');
	var _tblPropertyRec;
	_tableViewId = ((_tableViewId == undefined || _tableViewId) == null ? null : _tableViewId)
	
	if (forms[_form].controller.view != JSForm.LOCKED_TABLE_VIEW) // view
	{
		return;
	}
	
	//determine the body part.
	var _jsForm = solutionModel.getForm(_form)
	
	var _beginBody = _jsForm.getPart(JSPart.BODY).getPartYOffset()
	var _endBody = _jsForm.getPart(JSPart.BODY).height

	// loop true all elements and if it is a fiels save positions to table
	var _elements = forms[_form].elements.allnames;
	for (var i = 0; i < _elements.length; i++) {
		globals.nav_element_name = _elements[i];
		if (forms[_form].elements[_elements[i]].getElementType) {
			_type = forms[_form].elements[_elements[i]].getElementType()
		}
		if (_type == 'TEXT_FIELD' || _type == 'TEXT_AREA' || _type == 'RTF_AREA' || _type == 'HTML_AREA' || _type == 'TYPE_AHEAD' || _type == 'COMBOBOX' || _type == 'RADIOS' || _type == 'CHECK' || _type == 'CALENDAR' || _type == 'IMAGE_MEDIA' || _type == 'LABEL' || _type == 'PASSWORD') {
			var _jsElement
			if (_type == 'LABEL') {
				_jsElement = _jsForm.getLabel(_elements[i])
			} else {
				_jsElement = _jsForm.getField(_elements[i])
			}
			if ( (_jsElement.y >= _beginBody) && (_jsElement.y <= _endBody)) {
				
				// When table view id exists, get the record using table view id
				if (_tblPropertyFs.find()) {
					
					_tblPropertyFs.user_table_view_id = (_tableViewId ? _tableViewId : '^');
					_tblPropertyFs.program_id = _programId;
					_tblPropertyFs.layout_id = _layoutId;
					_tblPropertyFs.element_name = scopes.globals.nav_element_name;
					_tblPropertyFs.user_id = scopes.globals.svy_sec_lgn_user_id;
					_tblPropertyFs.organization_id = scopes.globals.svy_sec_lgn_organization_id;
					
					if (!_tblPropertyFs.search()) {
						
						// Create the table view persistence record for the selected element
						_tblPropertyRec = _tblPropertyFs.getRecord(_tblPropertyFs.newRecord());
						_tblPropertyRec.program_id = _programId;
						_tblPropertyRec.layout_id = _layoutId;
						_tblPropertyRec.element_name = scopes.globals.nav_element_name;
						_tblPropertyRec.user_id = scopes.globals.svy_sec_lgn_user_id;
						_tblPropertyRec.organization_id = scopes.globals.svy_sec_lgn_organization_id;
						if (_tableViewId) {
							_tblPropertyRec.user_table_view_id = _tableViewId;
						}
					}
					else {
						_tblPropertyRec = _tblPropertyFs.getRecord(1);
					}
				}
				
				_tblPropertyRec.location_x = forms[_form].elements[_elements[i]].getLocationX();
				_tblPropertyRec.location_y = forms[_form].elements[_elements[i]].getLocationY();
				_tblPropertyRec.width = forms[_form].elements[_elements[i]].getWidth();
				_tblPropertyRec.height = forms[_form].elements[_elements[i]].getHeight();
				
				// Save data
				if (_tblPropertyRec)
					databaseManager.saveData(_tblPropertyRec);
			}
		}
	}
}

/**
 *	Set the color of the field, used to give fields a different color in edit
 *
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {String} _form name of the form
 * @param {String} _status you want to set it to (edit/browse)
 * @return  none
 *
 * @properties={typeid:24,uuid:"639a2351-a916-4243-9d24-2cf88243aaa7"}
 */
function svy_nav_setFieldsColor(_form, _status) {
	var _type
	var _elements = forms[_form].elements.allnames
	var _color, _formTab

	var _jsCForm = solutionModel.getForm(_form)

	if (_status == 'edit') {
		_color = globals.svy_nav_getNavStyleBGColor('fld_bg_editMode');
	} else {
		_color = globals.svy_nav_getNavStyleBGColor('fld_bg_default');
	}
	var _element, _jsField;
	var _style_color
	for (var i = 0; i < _elements.length; i++) {
		_element = _elements[i]
		if (forms[_form].elements[_elements[i]].getElementType) //otherwise debugger will stop every time
		{
			try {
				_type = forms[_form].elements[_elements[i]].getElementType()
			} catch (e) {
				_type = null;
			}
		}
		else
		{
			// For other non servoy elements, like java beans, etc. skip the rest of code
			continue;
		}

		if (forms[_form].elements[_element].enabled && (_type == 'TEXT_FIELD' || _type == 'TEXT_AREA' || _type == 'RTF_AREA' || _type == 'HTML_AREA' || _type == 'TYPE_AHEAD' || _type == 'COMBOBOX' || _type == 'RADIOS' || _type == 'CHECK' || _type == 'CALENDAR' || _type == 'IMAGE_MEDIA' || _type == 'PASSWORD' || _type == 'LIST_BOX' || _type == 'MULTISELECT_LISTBOX' || _type == 'SPINNER') && (forms[_form].elements[_element].transparent != 1)) {

			var _editable = !forms[_form].elements[_element].readOnly
			_jsField = _jsCForm.getField(_element)

			if (_editable == false && _status == 'edit')		// No color changes for the readonly fields
				continue;

			if (_jsField && _jsField.styleClass && globals.svy_nav_getNavStyleBGColor('fld_bg_default$' + _jsField.styleClass) && (_editable && _status != 'edit')) {
				_style_color = globals.svy_nav_getNavStyleBGColor('fld_bg_default$' + _jsField.styleClass);
			} else if (forms[_form].elements[_element].readOnly && _jsField && _jsField.styleClass && globals.svy_nav_getNavStyleBGColor('fld_bg_editModeReadOnly$' + _jsField.styleClass) && (_status == 'edit')) {
				_style_color = globals.svy_nav_getNavStyleBGColor('fld_bg_editModeReadOnly$' + _jsField.styleClass);
			} else if (_jsField && _jsField.styleClass && globals.svy_nav_getNavStyleBGColor('fld_bg_editMode$' + _jsField.styleClass) && (_editable && _status == 'edit')) {
				_style_color = globals.svy_nav_getNavStyleBGColor('fld_bg_editMode$' + _jsField.styleClass);
			} else {
				_style_color = _color
			}
			forms[_form].elements[_element].bgcolor = _style_color
		} else if (_type == 'TABPANEL') {
			for (var k = 1; k <= forms[_form].elements[_element].getMaxTabIndex(); k++) {
				_formTab = forms[_form].elements[_element].getTabFormNameAt(k)
				if (_formTab && forms[_formTab]) {
					globals.svy_nav_setFieldsColor(_formTab, _status)
				}
			}
		} else if (_type == 'SPLITPANE') {
			/** @type {Form} */
			var _formObj = forms[_form].elements[_element].getRightForm()
			_formTab = _formObj.controller.getName()
			if (_formTab && forms[_formTab]) {
				globals.svy_nav_setFieldsColor(_formTab, _status)
			}
			_formObj = forms[_form].elements[_element].getLeftForm()
			_formTab = _formObj.controller.getName()
			if (_formTab && forms[_formTab]) {
				globals.svy_nav_setFieldsColor(_formTab, _status)
			}
		}
	}
}

/**
 * @author Joas de Haan
 * @since 2011-12-15
 *
 * @properties={typeid:24,uuid:"6CEF0D57-222B-48DE-B377-0381469FB582"}
 */
function svy_nav_showDesktop() {
	forms[globals.nav.mainFormName].elements["tab"].removeAllTabs();
	forms[globals.nav.mainFormName].elements["tab"].addTab(globals.nav.desktopFormName);
	
	//clear global variables
	globals.nav_current_formname = null;
	globals.nav_currentPanel1Form = null;
	globals.nav_layout_id = null;
	
}

/**
 * Callback method for when solution is closed, force boolean argument tells if this is a force (not stopable) close or not.
 *
 * @param {Boolean} force if false then solution close can be stopped by returning false
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7A5BA424-0891-4A07-A72C-8D7E0C390C1E"}
 * @AllowToRunInFind
 */
function svy_nav_onClose(force) {
	if (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT) {
		//Call the onClose method. Used for example to hide the current layout - so that splitters can be saved
		//In webclient this is done in the logout() method, otherwise it is not possible to show a dialog.
		if (forms[globals.nav.mainFormName].onClose() == -1) {
			return false;
		}
	}

	// rollback any open transactions
	if (databaseManager.hasTransaction()) {
		databaseManager.rollbackTransaction();
	}

	// register logout
	/** @type {JSFoundSet<db:/svy_framework/sec_user_login_attempt>} */
	var _fs_loginAttempt = databaseManager.getFoundSet(globals.nav_db_framework, 'sec_user_login_attempt');
	if (_fs_loginAttempt.find()) {
		_fs_loginAttempt.user_id = globals.svy_sec_lgn_user_id;
		_fs_loginAttempt.is_successful = 1;
		if (_fs_loginAttempt.search()) {
			_fs_loginAttempt.sort('attempt_datetime desc');
			_fs_loginAttempt.setSelectedIndex(1);
			_fs_loginAttempt.logout_datetime = new Date();
			databaseManager.saveData(_fs_loginAttempt);
		}
	}

	application.removeClientInfo(globals.svy_sec_lgn_owner_id)

	//run onClose-method of when available
	if (globals['onClose']) {
		var _methodReturn = globals['onClose']()
	}

	if (_methodReturn == false) {
		return false
	} else {
		security.logout();
		return true
	}
}

/**
 *	Shows a menu of the history stack
 *
 * @author Sanneke Aleman
 * @since 2009-05-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"03fedae0-b665-4f9c-b7cd-d67ba4290d91"}
 */
function svy_nav_history_menu(_event) {

	var _popupmenu = plugins.window.createPopupMenu()
	var _item
	for (var i = 0; i < globals.nav.stack.length; i++) {

		/** @type{JSRecord<db:/svy_framework/nav_layout>} */
		var _recLayout = scopes.modUtils$data.getRecord('db:/' + globals.nav_db_framework + '/nav_layout', globals.nav.stack[i].layout_id)

		_item = _popupmenu.addCheckBox(_recLayout.description, globals.svy_nav_history_moveFromPopmenu, 'media:///' + _recLayout.image_url)
		_item.methodArguments = [null, i, 'sec_arg'];
		if (i == globals.nav.stack_position) {
			_item.selected = true

		}
	}

	/** @type {RuntimeComponent} */
	var _source = _event.getSource()
	if (_source != null) {
		_popupmenu.show(_source);
	}

}

/**
 *	Get the row identifiers
 *
 * @author Sanneke Aleman
 * @since 2009-05-24
 * @param {String}	[_form] Formname you want the row id from
 * @return {Array} Rowidents
 *
 * @properties={typeid:24,uuid:"2c1a70a4-b8a6-4d51-87d6-78491b12f8b3"}
 */
function svy_nav_getRowIdentifierValues(_form) {
	var jsTable = databaseManager.getTable(forms[_form].controller.getDataSource())

	if (!jsTable) return null //form without table

	var _record_names = jsTable.getRowIdentifierColumnNames()
	var _record_ids = new Array()
	for (var i = 0; i < _record_names.length; i++) {
		// get the record id values
		_record_ids[i] = forms[_form][_record_names[i]]
	}
	return _record_ids
}

/**
 * @properties={typeid:24,uuid:"D6A5DE70-3439-4DF3-8263-4D54A423C2F9"}
 */
function svy_nav_getStylesFromStyleForm() {
	var _elts = forms[globals.nav_styleForm].elements;

	var _styleObj = [];
	var _obj;
	for (var i = 0; i < _elts.length; i++) {
		_obj = { bgcolor: _elts[i].bgcolor, border: _elts[i].border };
		_styleObj[_elts[i].getName()] = _obj;
	}
	globals.nav.styleObj = _styleObj;
}

/**
 * @param {String} _styleName
 *
 * @properties={typeid:24,uuid:"91F4C1E0-0B1E-446E-AE28-A6AC1A33A171"}
 */
function svy_nav_getNavStyleBGColor(_styleName) {
	if (globals.nav.styleObj[_styleName]) {
		return globals.nav.styleObj[_styleName].bgcolor;
	}
	return null;
}

/**
 * @param {String} _styleName
 *
 * @properties={typeid:24,uuid:"746E096F-AF60-4068-9AC0-0C59B580EDF5"}
 */
function svy_nav_getNavStyleBorder(_styleName) {
	if (globals.nav.styleObj[_styleName]) {
		return globals.nav.styleObj[_styleName].border;
	}
	return null;
}

/**
 *	Is used to get form out of find when user uses ESC, or to load all Records
 *
 * @author Sanneke Aleman
 * @since 2009-03-26
 * @param {JSEvent} _event
 *
 *
 * @properties={typeid:24,uuid:"2f31774a-5143-4281-a403-15b3217622aa"}
 */
function svy_nav_showAllRecordsCmd(_event) {
	var _form = globals.nav_currentPanel1Form
	if (forms[_form].foundset.isInFind()) {
		_form = globals.svy_sea_searchForm
		globals.svy_sea_cancelSearch()
		forms[_form].updateUI('browse')
		return
	} else {
		forms[_form].dc_loadAll()
	}
}

/**
 *	To the status of the navigationbar
 *
 * @author Sanneke Aleman
 * @since 2009-05-24
 * @param {String}	_status the status you want to set the bar in (browse edit add delete)
 * @return  none
 *
 * @properties={typeid:24,uuid:"d92fb9e4-5e4f-4927-bfb0-8c2b7036e336"}
 */
function svy_nav_setNavigationBar(_status) {
	var _browse = (_status == 'edit' || _status == 'add' || _status == 'find' || _status == 'required_fields') ? false : true

	forms.svy_nav_fr_tree_top.elements.btn_his_back.enabled = _browse && (globals.nav.stack_position != 0)
	forms.svy_nav_fr_tree_top.elements.btn_his_forw.enabled = _browse && (! (globals.nav.stack.length == globals.nav.stack_position + 1))
	forms.svy_nav_fr_tree_top.elements.btn_shortcut.enabled = _browse
	forms.svy_nav_fr_tree_top.elements.btn_bookmark.enabled = _browse
	forms.svy_nav_fr_viewCompareTab.setViewButtonsEnabled(_browse)
	forms.svy_nav_fr_tree_top.elements.btn_print.enabled = _browse
	forms.svy_nav_fr_tree_top.elements.tree.enabled = _browse
	forms.svy_nav_fr_bottom_bkmk_short.controller.enabled = _browse
	forms[globals.svy_utl_getFrameworkFormName("nav_fr_status_bar")].elements['organization_filter']['enabled'] = _browse
	if (globals.nav_show_open_tabs) {
		forms.svy_nav_fr_openTabs.controller.enabled = _browse
	}
	if (forms.svy_nav_fr_bottom_bkmk_short.elements.tab_bookmark.visible && _browse)// bookmarks are visibele
	{
		if (globals.nav.bookmarks.length > 0) {
			forms.svy_nav_fr_bookmarks.elements.btnshortcutMoveUp0.enabled = false
			forms.svy_nav_fr_bookmarks.elements['btnshortcutMoveDown' + (globals.nav.bookmarks.length - 1)].enabled = false
		}
	} else if (forms.svy_nav_fr_bottom_bkmk_short.elements.tab_favorites.visible && _browse)// shortcuts are visibele
	{
		if (globals.nav.shortcuts.length > 0) {
			forms.svy_nav_fr_shortcuts.elements.btnshortcutMoveUp0.enabled = false
			forms.svy_nav_fr_shortcuts.elements['btnshortcutMoveDown' + (globals.nav.shortcuts.length - 1)].enabled = false
		}
	}
}

/**
 *	Create shortcut last open record
 * @param {String} _program
 * @author Sanneke Aleman
 * @since 2009-05-24
 *
 * @properties={typeid:24,uuid:"7c4b7ec6-fff4-4c7a-a8ee-5b0bbf539c58"}
 */
function svy_nav_recordHistoryCreate(_program) {

	//Returns an array containing the names of the identifier (PK) column(s)
	var jsTable = databaseManager.getTable(globals.nav.program[_program].server_name, globals.nav.program[_program].table_name)

	if (!jsTable) return // there is no table attached to the form

	var i
	// save the recordids
	var _record_names = jsTable.getRowIdentifierColumnNames()
	var _record_ids = new Array() //saving array directly to database field doesn't work
	var _record_types = new Array()
	var _program_info = globals.nav.program[_program].description
	var _record_info = forms[globals.nav_currentPanel1Form][globals.nav.program[_program].display_field_header]

	for (i = 0; i < _record_names.length; i++) {
		// get the record id values
		_record_ids[i] = forms[globals.nav_currentPanel1Form][_record_names[i]]

		// get the column types
		var _JSColumn = jsTable.getColumn(_record_names[i])
		_record_types[i] = _JSColumn.getTypeAsString()

	}

	//look if already in array_ if delete from array
	for (i = 0; i < globals.nav.recordHistory.length; i++) {
		if (globals.svy_utl_compareArrays(globals.nav.recordHistory[i].record_ids, _record_ids) && globals.nav.recordHistory[i].layout_id == globals.nav_layout_id
		) {

			if ( (i + 1) == globals.nav.recordHistory.length) {
				return
			}

			//object already in Array so delete it
			globals.nav.recordHistory = globals.nav.recordHistory.slice(0, i).concat(globals.nav.recordHistory.slice(i + 1));
			i--;
		}
	}

	if (globals.nav.recordHistory.length >= 7) {
		//remove first entry array can only be 7 long
		globals.nav.recordHistory.shift()

	}

	// Validate the input before creatng the Record History
	if (_record_names && _record_ids && _program && globals.nav_layout_id && forms[globals.nav.mainFormName].getLayoutObject(true)) {
		
		//put in the array at the end
		var _l = globals.nav.recordHistory.length
		globals.nav.recordHistory[_l] = new Object()
		globals.nav.recordHistory[_l].record_names = _record_names
		globals.nav.recordHistory[_l].record_ids = _record_ids
		globals.nav.recordHistory[_l].record_types = _record_types
		globals.nav.recordHistory[_l].program = _program
		globals.nav.recordHistory[_l].layout_id = globals.nav_layout_id
		globals.nav.recordHistory[_l].layoutObj = forms[globals.nav.mainFormName].getLayoutObject(true)
		globals.nav.recordHistory[_l].text1 = _program_info
		globals.nav.recordHistory[_l].text2 = _record_info
		globals.nav.recordHistory[_l].image_name = _to_nav_layout.image_url
		globals.nav.recordHistory[_l].image_name_bg = _to_nav_layout.image_url_bg
		globals.nav.recordHistory[_l].view = globals.nav.program[_program].view
	}

	// rePaint record History if visible
	if (forms.svy_nav_fr_bottom_bkmk_short.elements.tab_record_history.visible) {
		// load the record History to see the new recordHistory
		forms.svy_nav_fr_recordHistory.loadRecordHistory()
	}

}

/**
 *	To use by deeplinking and setting the owner_id
 *
 * @author Sanneke Aleman
 * @since 2009-05-24
 *
 * @properties={typeid:24,uuid:"79d17d46-535b-492e-bbfe-3bf8ccd0c74a"}
 */
function svy_nav_deeplink() {
	//	If you now open a client with an url like this: http://<server_ip:port>/servoy-client/sampleuse_navigation.jnlp?method=svy_nav_deeplink&argument=<uuid>
	//then the <uuid> that is passed will be the owner_id for that session. (for webclient the url will look like this:
	//http://<server_ip:port>/servoy-webclient/ss/s/sampleuse_navigation/m/svy_nav_deeplink/a/<uuid>)

}

/**
 * @properties={typeid:24,uuid:"63beb2bf-4fe3-45ac-a3f6-8b95aaac647a"}
 */
function svy_nav_documentation() {
	/*
	 *
	 *
	 * The Navigation object.

	 globals.nav
	 bookmarks
	 Array containing an object for each bookmark.
	 The object contains Bookmark_id, program and records_ids.
	 For example: globals.nav.bookmarks.1.program
	 browser_buttonbar
	 Name of the browserbuttonbar.
	 browser_form
	 Name of the browser form.
	 default_edit_template
	 The template where the navigation will go for edits.
	 form_view_01
	 The form that is currently showing in the top view, view 01
	 form_view_02
	 The form that is currently showing in the bottom view, view 02
	 history (Object)
	 foundset (array)		=	The filter for the related foundset
	 foundset_related_form 	=	The related foundset form
	 foundset_related_text	=	The related text for in the toolbar
	 history_max_entries
	 Max entries for the history so the history doesn't become to big.
	 keys
	 Security keys for all the rights that the logged in user has.
	 lastProgram
	 Last program that the user has visited.
	 lastView
	 Last view that the user has visited.
	 mode
	 Mode that the navigation is in, possible: edit, browse, find, add.
	 new_record_filter
	 Fields that have to be entered if a related record is created.
	 noHistory
	 Boolean, can be set to 1 if no history entry is needed while navigating, for example if you 	navigate in the history because otherwise you would get double entry's

	 program
	 Object containing an object for each program.
	 In each of those program-objects the following:
	 add_mode				= 	Has user right for adding records in this program.
	 base_form_name			= 	Has form name of the program.
	 btn_all_records			= 	Has user right for the all records button.
	 btn_export				=	Has user right for the export button.
	 btn_help				= 	Has user right for the help button.
	 btn_method				= 	Has user right for the methods button.
	 btn_print				= 	Has user right for the print button.
	 btn_rec_nav 			= 	Has user right for the buttons of the record navigation.
	 btn_record_information 	= 	Has user right for the record information button.
	 btn_resettblheader		= 	Has user right for the reset table headers button.
	 btn_search				= 	Has user right for the search button.
	 btn_search_prop			= 	Has user right for the search properties button.
	 btn_sort				= 	Has user right for the sort button.
	 delete_mode  			= 	Has user right to delete records in this program.
	 description				=	The description of the program for the end user.
	 display_field_header	=	The field that will be displayed in the header.
	 divider_height			= 	Height of the divider.
	 divider_locked			= 	Divider locked, user can not change it’s position.
	 duplicate_mode			= 	Has user right to duplicate records in this program.
	 filter (array)			= 	The filter for the data of the program.
	 filter_field_name	=	The field to filter on.
	 filter_field_operator =	Operator to filter with.
	 filter_value		=	Value to filter with.
	 form					= 	Object with information which forms are available.
	 method (array)			= 	Method menu of the program.
	 in_browse			=	Show method in menu if user is in browse.
	 in_edit				=	Show method in menu if user is in edit.
	 label				= 	Label shown to the user in menu.
	 method				= 	Method that the menu will call.
	 nav_popmenu_id		= 	Id of the popmenu in database.
	 parent_popmenu_id   = 	Id of the parentpopmenu in database.
	 noreadonly				=	program doesn't go in read only.
	 path					=	Path of the program in the tree.
	 program_image			= 	Image of the program.
	 record_locking			=	When record is edited record should be locked.
	 report	Array			=	Report menu for program.
	 in_browse			=	Show report in menu if user is in browse.
	 in_edit				=	Show report in menu if user is in edit.
	 label				= 	Label shown to the user in menu.
	 method				= 	Method that the menu will call.
	 nav_popmenu_id		= 	Id of the popmenu in database.
	 parent_popmenu_id   = 	Id of the parentpopmenu in database.
	 server_name				= 	Servername of the program forms.
	 sort_value				= 	Value where the program should sort on by default.
	 tab.selected			= 	Tab that is selected.
	 tab (array)				=	Array with the tabs of a program.
	 add_mode			=	Addmode for the tab.
	 base_form_name		= 	Base form name of the tab.
	 delete_mode			=	Delete mode for the tab.
	 description			=	Description of the program on the tab.
	 edit_on_tab			= 	Edit on tab, no navigation.
	 form_type			=	Type of the form on tab.
	 program_name		= 	Name of the program on tab.
	 relation			=	The relation between the program and the tab program.
	 relation_filter (array)	=	Relation filter.
	 form_key		=	From key column from the program.
	 to_key			= 	To key column to the tab program.
	 update_mode			= 	Update mode of the tab.
	 table_name				= 	Table name of the forms of the program.
	 template				=	Object with information witch templates are available.
	 update_mode				=	Has user right to update records in this program.
	 view					=	Current view of the program.
	 recordHistory (array)		= 	Object for the tab record history.
	 program					= 	Program name.
	 program_info			= 	Info about the selected record, program description.
	 record_ids				= 	Record column ids.
	 record_info				= 	Record info.
	 record_names			=	Record column names.
	 record_types			=	Record column types.
	 related_form				=	Only used if the framework is in a related view.
	 related_text				=	Header text of the related view.
	 shortcuts (array)			=	Array with the information of the shortcuts.
	 program					=	Program.
	 shortcut_id				=	Id of the shortcut.
	 stack (array)				= 	Stack of the history of the program.
	 form					=	Form that the user was on in history.
	 foundset_related_form	=	Foundset of the related form.
	 foundset_related_text	=	Related text.
	 foundsetfilter			=	Foundset filter.
	 program					=	Program.
	 view					=	View that the program was in.
	 stack_position				= 	Position of the framework in the history stack.
	 switchedForEdit				=	Has the navigation switched for edit.
	 template_types				= 	The template type.
	 template_types_notabs		=	The template types used when there are no tabs.
	 viewer_buttonbar			=	Formname of the viewer buttonbar.
	 viewer_form					=	Formname of the viewer.

	 */

}

/**
 *	On click open the program from the shortcut, by using information in the object that is build in loadShortcuts
 *
 * @author Sanneke Aleman
 * @since 2008-05-24
 * @param {JSEvent} _event
 * @param {Number} _nr Number of the shortcut
 *
 * @properties={typeid:24,uuid:"20d4344d-a086-40b7-a1cb-db0c64afef01"}
 */
function svy_nav_shortcut_goto(_event, _nr) {

	// get the programname
	globals.nav.openNewTab = 1

	var _layout_id = globals.nav.shortcuts[_nr].layout_id

	//show the program
	forms[globals.nav.mainFormName].layoutSwitch(_event, _layout_id)

	forms[globals.nav.mainFormName].updateMenu(_layout_id)
}

/**
 * Error handling method
 * @author Sanneke Aleman
 * @since 2010-02-18
 * @param {ServoyException} e
 *
 * @properties={typeid:24,uuid:"29E39484-4E1A-4B58-80C3-21886DD6B42D"}
 */
function svy_nav_onError(e) {

	application.output("Exception Object: " + e)
	application.output("MSG: " + e.getMessage())

	if (/^User has no menu/.test(e.getMessage())) {
		return false
	}

	if (e instanceof ServoyException) {
		/** @type {ServoyException} */
		var servoyException = e;
		application.output("is a ServoyException")
		application.output("Errorcode: " + servoyException.getErrorCode())
		var trace = "";
		//		if (e.getScriptStackTrace) trace = servoyException.getScriptStackTrace();
		//		else
		if (servoyException.getStackTrace) trace = servoyException.getStackTrace();
		if (servoyException.getErrorCode() == ServoyException.SAVE_FAILED) {
			plugins.dialogs.showErrorDialog('Error', 'It seems you did not fill in a required field', 'OK');
			//Get the failed records after a save
			var array = databaseManager.getFailedRecords()
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				application.output(record.exception);
				if (record.exception instanceof DataException) {
					/** @type {DataException} */
					var dataException = record.exception;
					application.output('SQL: ' + dataException.getSQL())
					application.output('SQLState: ' + dataException.getSQLState())
					application.output('VendorErrorCode: ' + dataException.getVendorErrorCode())
				}
			}
			return false
		}

		if (servoyException.getErrorCode() == ServoyException.NO_PARENT_DELETE_WITH_RELATED_RECORDS) {
			globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('svy.fr.dlg.error'), i18n.getI18NMessage('svy.fr.dlg.noParentDeleteWithRelatedRecords'), 'OK');
			if (databaseManager.hasTransaction()) databaseManager.rollbackTransaction();
			if (databaseManager.hasLocks()) databaseManager.releaseAllLocks();
			return false;
		}

		if (servoyException.getErrorCode() == ServoyException.NO_RELATED_CREATE_ACCESS) {
			globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('svy.fr.dlg.error'), i18n.getI18NMessage('svy.fr.dlg.noRelatedCreateAccess'), 'OK');
			if (databaseManager.hasTransaction()) databaseManager.rollbackTransaction();
			if (databaseManager.hasLocks()) databaseManager.releaseAllLocks();
			return false;
		}
	}
	//if returns false or no return, error is not reported to client; if returns true error is reported
	//by default error report means logging the error, in smart client an error dialog will also show up

	application.output(trace, LOGGINGLEVEL.DEBUG)
	return true
}

/**
 * Method that sets the shortkeys that are available for a user by functions
 * @author Sanneke Aleman
 * @since 2010-03-03
 * @param {Array} _function_array array with the functions that a user has rights to.
 * @properties={typeid:24,uuid:"300E8D16-8E32-4E1A-BE65-B18F95C3EE9F"}
 */
function svy_nav_setShortKeys(_function_array) {

	/** @type {JSFoundSet<db:/svy_framework/nav_shortkey>} */
	var _foundset = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_shortkey')
	var _rec
	var _shortcut

	//security check
	var _function_string = "'" + _function_array.join("','") + "'";
	if (_function_string == "''")_function_string = "'" + globals.zero_uuid.toString() + "'";
	var _query = "SELECT s.shortkey_id\
					FROM nav_shortkey s\
					WHERE s.function_id IN (" + _function_string + ")";
	_foundset.loadRecords(_query)

	globals.nav.shortkeys = new Object()

	for (var i = 1; i <= _foundset.getSize(); i++) {
		_rec = _foundset.getRecord(i)
		_shortcut = ''
		if (databaseManager.hasRecords(_rec.nav_shortkey_to_nav_function)) {
			if (_rec.flag_control) {
				_shortcut = _shortcut ? _shortcut + " control" : "control";
			}
			if (_rec.flag_shift) {
				_shortcut = _shortcut ? _shortcut + " shift" : "shift";
			}
			if (_rec.flag_alt) {
				_shortcut = _shortcut ? _shortcut + " alt" : "alt";
			}
			_shortcut = _shortcut ? _shortcut + " " + _rec.shortkey : _rec.shortkey;

			//set method and arguments in a array so that the callback method nows with method to call with which argument
			globals.nav.shortkeys[_shortcut] = new Object()
			globals.nav.shortkeys[_shortcut].method = _rec.nav_shortkey_to_nav_function.method
			globals.nav.shortkeys[_shortcut].arg = new Array()
			globals.nav.shortkeys[_shortcut].argtypes = new Array()
			for (var j = 1; j <= _rec.nav_shortkey_to_nav_function.nav_function_to_nav_function_arguments.getSize(); j++) {
				_rec = _rec.nav_shortkey_to_nav_function.nav_function_to_nav_function_arguments.getRecord(j)
				globals.nav.shortkeys[_shortcut].arg[j - 1] = _rec.argument
				globals.nav.shortkeys[_shortcut].argtypes[j - 1] = _rec.arg_type
			}

			plugins.window.createShortcut(_shortcut, globals.svy_nav_callBackShortkeys)
		}
	}
}

/**
 * Method that is called by all the shortkeys to handle arguments
 * TODO: get rid of eval, use .apply(scope, argumentsArray instead)
 * @author Sanneke Aleman
 * @since 2010-03-03
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"9637A11A-13A8-49CB-ACF6-86D80FA5E88D"}
 */
function svy_nav_callBackShortkeys(_event) {
	var _shortkey = _event.getType()
	/** @type {{arg:Array, method:String}} */
	var _shk_obj = globals.nav.shortkeys[_shortkey]
	if (!_shk_obj) return

	var _methodcall = _shk_obj.method + '('

	for (var i = 0; i < _shk_obj.arg.length; i++) {

		if (i != 0) {
			_methodcall += ', '
		}

		if (_shk_obj['argtypes'][i] == 1) {
			_methodcall += '"' + _shk_obj.arg[i] + '"'
		} else if (_shk_obj['argtypes'][i] == 2) {
			_methodcall += '"' + globals[_shk_obj.arg[i]] + '"'
		}
	}
	_methodcall += ')'

	eval(_methodcall)
}

/**
 *
 * Method that looks up all the functions that are available for the logged in user
 * @author Sanneke Aleman
 * @since 2010-03-03
 * @return return the function id, so they can be filtered in the menu
 * @properties={typeid:24,uuid:"46418AB3-DA49-4106-87A2-B08B3C8AD65C"}
 */
function svy_nav_get_functions() {
	var _query = 'SELECT f.function_id\
					FROM  nav_function f\
					WHERE ( 	f.security_key_id is null \
						OR	f.security_key_id IN (' + scopes.svySecurityManager.getSecurityKeysForInQuery() + '))'
	var maxReturnedRows = 10000
	var _dataset = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, null, maxReturnedRows);
	var _function_array = _dataset.getColumnAsArray(1)
	return _function_array
}

/**
 * Method that places elements on a form
 * @author Sanneke Aleman
 * @since 2010-03-03
 * @param {JSForm} _jsForm the form where you want to place elements on
 * @param {JSFoundset<db:/svy_framework/sec_user_table_properties>} _foundset the foundset of elements you want to place on the form
 * @param {Array} [_fixedElements] fixed elements of the design-time form which should be generated
 *
 * @properties={typeid:24,uuid:"D7CF0A2F-D6A5-4E00-8F14-CFD8EA50337F"}
 */
function svy_nav_placeElementsOnForm(_jsForm, _foundset, _fixedElements) {
	var _start_pos_x = 0
	var _start_pos_y = 0
	if (_jsForm.getHeaderPart()) _start_pos_y += _jsForm.getHeaderPart().height
	if (_jsForm.getTitleHeaderPart()) _start_pos_y += _jsForm.getTitleHeaderPart().height

	// check for fixed elements at the beginning and place them on the form
	if (_fixedElements) {
		for (var j = 0; j < _fixedElements.length; j++) {
			if (_fixedElements[j][2] == false) {
				// element should be fixed at the beginning
				var _fixedElementStart = solutionModel.cloneComponent(_fixedElements[j][0].name, _fixedElements[j][0], _jsForm);
				_fixedElementStart.x = _start_pos_x;
				_fixedElementStart.y = _start_pos_y;

				if (_fixedElements[j][1]) {
					// place the header of the element
					var _fixedHeaderStart = solutionModel.cloneComponent(_fixedElements[j][1].name, _fixedElements[j][1], _jsForm);
					_fixedHeaderStart.x = _start_pos_x;
					_fixedHeaderStart.y = _start_pos_y;
				}

				_start_pos_x += _fixedElementStart.width;
			}
		}
	}

	var _endPositionX = 0
	for (var i = 1; i <= _foundset.getSize(); i++) {
		var _rec = _foundset.getRecord(i)
		
		if (databaseManager.hasRecords(_rec.sec_user_table_properties_to_nav_program_fields)) {
			var _rec_pf = _rec.sec_user_table_properties_to_nav_program_fields.getRecord(1)

			var _name = _rec.element_name

			if ( (_rec.location_x == null) && (_rec.location_y == null)) {
				_rec.location_x = 10
				_rec.location_y = 20
				_rec.height = 20
				_rec.width = 200
				if (_rec_pf.field_width) {
					_rec.width = _rec_pf.field_width
				}
			}
			
			if (_jsForm.getComponent(_rec.element_name)) {
				_jsForm.getComponent(_rec.element_name).x = _rec.location_x + _start_pos_x
				_jsForm.getComponent(_rec.element_name).y = _rec.location_y;
				_jsForm.getComponent(_rec.element_name).width = _rec.width;
				_jsForm.getComponent(_rec.element_name).height = _rec.height;
				continue // element already exist on form
			}

			var _field = _jsForm.newField(_rec_pf.dataprovider,
				JSField[_rec_pf.display_type],
				_rec.location_x + _start_pos_x,
				_rec.location_y,
				_rec.width,
				_rec.height)
			_field.format = _rec_pf.field_format
			_field.name = _name
			_field.styleClass = 'table'
			_field.anchors = SM_ANCHOR.EAST | SM_ANCHOR.WEST | SM_ANCHOR.NORTH;

			if (_rec_pf.valuelistname) {
				_field.valuelist = solutionModel.getValueList(_rec_pf.valuelistname)
			}
			var _label = _jsForm.newLabel(_rec_pf.label, _rec.location_x + _start_pos_x, _rec.location_y, _rec.width, _rec.height)
			_label.name = 'lbl_' + _rec.element_name
			_label.labelFor = _name
			_label.styleClass = 'table'
		}

		_endPositionX = _rec.location_x + _start_pos_x + _rec.width;
	}

	// check for fixed elements at the end and place them on the form
	if (_fixedElements) {
		for (var k = 0; k < _fixedElements.length; k++) {
			if (_fixedElements[k][2] == true) {
				// element should be fixed at the end
				var _fixedElementEnd = solutionModel.cloneComponent(_fixedElements[k][0].name, _fixedElements[k][0], _jsForm);
				_fixedElementEnd.x = _endPositionX;
				_fixedElementEnd.y = _start_pos_y;

				if (_fixedElements[k][1]) {
					// place the header of the element
					var _fixedHeaderEnd = solutionModel.cloneComponent(_fixedElements[k][1].name, _fixedElements[k][1], _jsForm);
					_fixedHeaderEnd.x = _endPositionX;
					_fixedHeaderEnd.y = _start_pos_y;
				}

				_endPositionX += _fixedElementEnd.width;
			}
		}
	}
	_jsForm.width = _endPositionX;
	forms[_jsForm.name].controller.recreateUI()
}

/**
 * Method that creates a table view
 * @author Sanneke Aleman
 * @since 2010-03-03
 * @param {JSEvent} [_event]
 * @param {String|UUID} _tableViewID user_table_view_id
 * @param {Boolean} _applyNewFoundset whether or not a new foundset should be applied
 * @param {String|UUID} _program_id
 * @properties={typeid:24,uuid:"AF5763CF-2B76-4BFB-A464-16ABC8B594E2"}
 * @AllowToRunInFind
 */
function svy_nav_createTableView(_event, _tableViewID, _applyNewFoundset, _program_id) {
	/** @type {JSFoundSet<db:/svy_framework/sec_user_table_properties>} */
	var _foundset = databaseManager.getFoundSet(globals.nav_db_framework, 'sec_user_table_properties')
	_foundset.addFoundSetFilterParam('user_table_view_id', '=', _tableViewID)
	_foundset.addFoundSetFilterParam('user_id', '=', globals.svy_sec_lgn_user_id);
	_foundset.addFoundSetFilterParam('organization_id', '=', globals.svy_sec_lgn_organization_id);
	_foundset.loadAllRecords();

	if (_foundset.getSize() == 0) {
		application.output('Could not create view, no data found');
		return;
	}

	globals.nav_program_id = _program_id

	var _base = globals.nav.program[_to_nav_program$program_id.program_name].base_form_name;
	var _form = _base + '_tbl';

	// get all the fixed elements which should be placed on the generated table view
	var _fixedElementsTable = new Array();
	_fixedElementsTable = globals.svy_nav_getFixedElementsTable(_form);

	var _jsForm = solutionModel.getForm(_form);
	var _bodyTop = 0;
	if (_jsForm.getHeaderPart()) _bodyTop += _jsForm.getHeaderPart().height;
	if (_jsForm.getTitleHeaderPart()) _bodyTop += _jsForm.getTitleHeaderPart().height;
	var _bodyBottom = _jsForm.getBodyPart().height;

	var _components = _jsForm.getComponents();
	for (var i = 0; i < _components.length; i++) {
		if (_components[i].y >= _bodyTop && _components[i].y + _components[i].height <= _bodyBottom) {
			_jsForm.removeComponent(_components[i].name);
		}
	}

	globals.svy_nav_placeElementsOnForm(_jsForm, _foundset, _fixedElementsTable);

	forms[_form].controller.recreateUI()

	/** @type {JSFoundSet<db:/svy_framework/nav_user_table_view>} */
	var _foundsetTableView = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_user_table_view');
	_foundsetTableView.addFoundSetFilterParam('user_table_view_id', '=', _tableViewID);
	_foundsetTableView.addFoundSetFilterParam('user_id', '=', globals.svy_sec_lgn_user_id);
	_foundsetTableView.addFoundSetFilterParam('organization_id', '=', globals.svy_sec_lgn_organization_id);
	_foundsetTableView.loadAllRecords();

	forms[globals.nav_currentPanel1Form].dc_showTable(_event)

	if (_applyNewFoundset) {
		if (_foundsetTableView.search_type == 'R') {
			globals.svy_sea_restoreSearch(_foundsetTableView.search_id);
		} else if (_foundsetTableView.search_type == 'A') {
			globals.svy_sea_restoreAdvancedSearch(_foundsetTableView.search_id);
		} else {
			forms[_form].dc_loadAll();
		}
	}

	if (_event) {
		globals.svy_nav_closeForm(_event);
	}
}

/**
 * Method that creates a default table view
 * @author Sanneke Aleman
 * @since 2010-03-03
 * @param {String} _program_id program name
 * @param {String} _form form name
 * @properties={typeid:24,uuid:"E3C1AABD-CF67-4EF7-89F7-E8DC475D7237"}
 */
function svy_nav_createDefaultTableView(_program_id, _form) {

	globals.nav_program_id = _program_id
	var _program = _to_nav_program$program_id.program_name
	globals.nav.program[_program].table_created = 1

	//get an id
	/** @type {JSFoundSet<db:/svy_framework/nav_user_table_view>} */
	var _foundset = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_user_table_view')
	_foundset.addFoundSetFilterParam('program_id', '=', _program_id)
	_foundset.addFoundSetFilterParam('flag_system', '=', 1)
	_foundset.addFoundSetFilterParam('user_id', '=', globals.svy_sec_lgn_user_id);
	_foundset.addFoundSetFilterParam('organization_id', '=', globals.svy_sec_lgn_organization_id);

	_foundset.loadAllRecords()

	if (_foundset.getSize() == 0) { //user doesn't have a view yet
		//create the view
		_foundset.newRecord()
		_foundset.program_id = _program_id
		_foundset.table_name = globals.nav.program[_program].table_name
		_foundset.server_name = globals.nav.program[_program].server_name
		_foundset.flag_system = 1
		_foundset.user_id = globals.svy_sec_lgn_user_id;
		_foundset.organization_id = globals.svy_sec_lgn_organization_id;
		_foundset.name = 'System'

		/** @type {JSFoundSet<db:/svy_framework/sec_user_table_properties>} */
		var _foundset_prop = databaseManager.getFoundSet(globals.nav_db_framework, 'sec_user_table_properties')

		for (var i = 1; i <= _to_nav_program.nav_program_to_nav_program_fields$default.getSize(); i++) {
			var _rec = _to_nav_program.nav_program_to_nav_program_fields$default.getRecord(i)
			_foundset_prop.newRecord()
			_foundset_prop.program_field_id = _rec.program_field_id
			_foundset_prop.user_table_view_id = _foundset.user_table_view_id
			_foundset_prop.user_id = globals.svy_sec_lgn_user_id;
			_foundset_prop.organization_id = globals.svy_sec_lgn_organization_id;
			_foundset_prop.element_name = _rec.elementname
		}

	}

	var _user_table_view_id = _foundset.user_table_view_id
	databaseManager.saveData()

	//find the foundset with the properties of the elements
	_foundset_prop = databaseManager.getFoundSet(globals.nav_db_framework, 'sec_user_table_properties')
	_foundset_prop.addFoundSetFilterParam('user_table_view_id', '=', _user_table_view_id)
	_foundset_prop.addFoundSetFilterParam('user_id', '=', globals.svy_sec_lgn_user_id);
	_foundset_prop.addFoundSetFilterParam('organization_id', '=', globals.svy_sec_lgn_organization_id);
	_foundset_prop.loadAllRecords()

	//create the form
	var _jsForm = solutionModel.newForm(_form, 'db:/' + globals.nav.program[_program].server_name + '/' + globals.nav.program[_program].table_name, 'sampleuse_navigation', false, 800, 500)
	var _extend = 'svy_nav_base'
	var _base = globals.nav.program[_program].base_form_name
	if (forms[_base]) _extend = _base
	_jsForm.extendsForm = solutionModel.getForm(_extend)
	_jsForm.view = JSForm.LOCKED_TABLE_VIEW

	//place the fields on the form.
	globals.svy_nav_placeElementsOnForm(_jsForm, _foundset_prop)

}

/**
 * @properties={typeid:24,uuid:"959C3499-A965-468D-9934-B7367CCA778E"}
 * @AllowToRunInFind
 */
function svy_nav_postLogin() {
	forms[globals.nav.loadingFormName].setProgress(5)

	//show open tabs in the framework if the property is set.
	if (scopes.svyProperties.getPropertyValueAsBoolean("show_open_tabs")) {
		globals.nav_show_open_tabs = 1
	}

	//run onPostLogin-method when available
	if (globals['onPostLogin']) {
		globals['onPostLogin']()

	}

	// set the i18n based on the owner/organization
	if (globals.svy_nav_setI18N) {
		globals.svy_nav_setI18N(globals.svy_sec_lgn_organization_id);
	}

	//set the security for the elements
	scopes.svySecurityManager.loadSecurityKeys();
	scopes.svySecurityManager.setSecuritySettings();
	scopes.svySecurityManager.filterTables();

	globals.svy_nav_init();
	forms[globals.nav.loadingFormName].setProgress(100)

	//run onPostInit-method when available
	if (globals['onPostInit']) {
		globals['onPostInit']()

	}
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormGoToPreviousRecord} instead
 * 
 * @properties={typeid:24,uuid:"82FE7A09-2056-4460-B544-813F69E73B8F"}
 */
function svy_nav_rec_prev(_event) {
	scopes.svyNavigation$shortcuts.mainFormGoToPreviousRecord()();
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormGoToNextRecord} instead
 * 
 * @properties={typeid:24,uuid:"A1D32F7C-E58C-451D-8C23-4D0395A47598"}
 */
function svy_nav_rec_next(_event) {
	scopes.svyNavigation$shortcuts.mainFormGoToNextRecord();
}

/**
 * Goto records last of the main form
 * 
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormGoToLastRecord} instead
 *
 * @properties={typeid:24,uuid:"DDABD371-7D16-41C3-A05E-C05C90C30C32"}
 */
function svy_nav_rec_last() {
	scopes.svyNavigation$shortcuts.mainFormGoToLastRecord();
}

/**
 * Goto records first of the main form
 * 
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormGoToFirstRecord} instead
 * 
 * @properties={typeid:24,uuid:"7F32BD58-DF74-443E-BD1E-BE7EB50643C8"}
 */
function svy_nav_rec_first() {
	scopes.svyNavigation$shortcuts.mainFormGoToFirstRecord();
}

/**
 * Method that navigates to the form and program and selects the record
 * @author Sanneke Aleman
 * @since 2010-10-11
 * @param {String} _program program name
 * @param {Number} _record_id record id
 *
 * @properties={typeid:24,uuid:"553CF49E-35AE-400B-9DA9-B95CF09BD2BB"}
 */
function svy_nav_showLayoutRecord(_program, _record_id) {

	var _layout_id = globals.nav.program[_program].layout_id
	forms[globals.nav.mainFormName].layoutSwitch(null, _layout_id)

	forms[globals.nav_currentPanel1Form].controller.loadRecords(_record_id)
}

/**
 * Will create a different menu not using the tree menu for easy use on mobile divices
 * @author Sanneke Aleman
 * @since 2011-02-03
 * @properties={typeid:24,uuid:"4AB46F90-1A5E-4E91-A2DB-9067C4DBA83A"}
 */
function svy_nav_m_init_menu() {

	var _jsFormMenu = solutionModel.getForm('svy_nav_fr_m_menu')

	var _formname
	for (var i = 1; i <= forms.svy_nav_fr_tree.foundset.getSize(); i++) {

		/** @type {JSRecord<db:/svy_framework/nav_menu_items>} */
		var _rec = forms.svy_nav_fr_tree.foundset.getRecord(i)
		//build a menu

		_formname = 'svy_nav_fr_m_menu_parts' + i
		//make new form instance
		application.createNewFormInstance('svy_nav_fr_m_menu_parts', _formname)
		forms[_formname].elements['lbl_menu']['text'] = _rec.display_description

		//		_rec.nav_menu_items_to_nav_menu_items$parent_id.sort('sort_order asc')
		forms[_formname].controller.loadRecords(_rec.nav_menu_items_to_nav_menu_items$parent_id)

		if (i == 1) {
			forms[_formname]['vMenuExpanded'] = 1
		}

		//Add the menu part to the menu form as a tabpannel,
		//other method (forms.svy_nav_fr_m_menu.drawForm()) will give it the right size and pos
		_jsFormMenu.newTabPanel('tab_' + i, 0, 0, 50, 50)

	}
	forms.svy_nav_fr_m_menu.controller.recreateUI()
	for (var j = 1; j <= forms.svy_nav_fr_tree.foundset.getSize(); j++) {
		forms.svy_nav_fr_m_menu.elements['tab_' + j].addTab(forms['svy_nav_fr_m_menu_parts' + j])
	}
	forms.svy_nav_fr_m_menu.drawForm()

	//put the form in menu
	forms.svy_nav_fr_tree_top.elements.tree.removeAllTabs()
	forms.svy_nav_fr_tree_top.elements.tree.addTab(forms.svy_nav_fr_m_menu)
	forms[globals.nav.mainFormName].elements['tab_split']['dividerLocation'] = 200
}

/**
 * Will remove tooltips from forms so they can be easily used in ipad/iphone
 * @author Sanneke Aleman
 * @since 2011-02-03
 * @properties={typeid:24,uuid:"F3E56CD6-6344-4EA1-A73F-FFEF1EB77357"}
 */
function svy_nav_removeTooltips() {

	// check if iPhone is used
	if (!scopes.modUtils$system.isMobilePlatform()) {
		return
	}

	var _forms = ['svy_nav_fr_bottom_bkmk_short',
		'svy_nav_fr_tree_top',
		'svy_nav_fr_buttonbar_browser',
		'svy_nav_fr_buttonbar_viewer']
	var _jsForm, _labels, _label
	for (var i = 0; i < _forms.length; i++) {
		_jsForm = solutionModel.getForm(_forms[i])
		_labels = _jsForm.getLabels()
		for (var j = 0; j < _labels.length; j++) {
			_label = _labels[j]
			_label.toolTipText = null
		}
	}
}

/**
 * @properties={typeid:24,uuid:"1A44C555-3CA1-4682-ACF4-3885673168B3"}
 * @AllowToRunInFind
 */
function svy_nav_changeOrganization(oldValue, newValue, event) {
	//check with security
	if (!globals.svy_sec_lgn_organization_id) return false

	if (!scopes.svySecurityManager.changeOrganization(oldValue,newValue)) {
		return false;
	}

	var _program_array = svy_nav_init_programs();
	var _function_array = svy_nav_get_functions();

	//recreate menu
	svy_nav_init_menu_items(_program_array, _function_array, true);
	forms[globals.nav.mainFormName].initMenu();

	// Notify visible forms of the change
	if (scopes.globals.nav_currentPanel1Form) {
		var _forms = globals.svy_nav_getVisibleFormNames();
		for (var i = 0; i < _forms.length; i++) {
			if (forms[_forms[i]]["onChangeOrganization"]) {
				forms[_forms[i]]["onChangeOrganization"](oldValue, newValue);
			}
		}
	}

	return true;
}

/**
 *
 * @deprecated use scopes.svySecurityManager.filterOwner() instead
 *
 * @properties={typeid:24,uuid:"D17443D2-3A4A-4B7B-ABDB-8C7FE90D6D3A"}
 */
function svy_nav_filterOwner() {
	scopes.svySecurityManager.filterOwner();

	//	var _owner_id = globals.svy_sec_lgn_owner_id;
	//
	//	var _database;
	//	if (globals["svy_nav_getUserDBName"]) {
	//		_database = globals["svy_nav_getUserDBName"]();
	//
	//		if (_database != globals.nav_db_framework) {
	//			databaseManager.addTableFilterParam(_database, null, "owner_id", "=", _owner_id, "owner_filter");
	//		}
	//	}
	//
	//	//filter navigation tables
	//	var _tables = databaseManager.getTableNames(globals.nav_db_framework);
	//	_tables = _tables.filter(
	//		function (x) {
	//			var _ignoredTables = ["sec_owner", "sec_owner_in_module","sec_security_key", "vlt_valuelistvalues", "vlt_valuetranslations"];
	//			if (_ignoredTables.indexOf(x) > -1) {
	//				return false;
	//			}
	//			var _jsTable = databaseManager.getTable(globals.nav_db_framework, x);
	//			if (_jsTable && _jsTable.getColumn("owner_id") == null) {
	//				return false;
	//			}
	//			return true;
	//		}
	//	);
	//
	//	for (var i = 0; i < _tables.length; i++) {
	//		databaseManager.addTableFilterParam(globals.nav_db_framework, _tables[i], "owner_id", "IN", [_owner_id, globals.zero_uuid], "owner_filter");
	//	}
}

/**
 *  Will add table filters to filter all the organization records
 * @author Sanneke Aleman
 * @since 2011-02-05
 *
 * @deprecated use scopes.svySecurityManager.filterOrganization()
 *
 * @properties={typeid:24,uuid:"9BE76907-D275-45DE-B54A-7D654502F7D0"}
 */
function svy_nav_filterOrganization() {
	scopes.svySecurityManager.filterOrganization();
}

/**
 * Gets the required fields for a program, the ones defined by the programmer and the ones defined by the user
 * @param {{required_fields:Object,program_id:String}} _progObj the object of the current program
 * @return {Object} _progObj.required_fields the object with the required fields
 * @author Sanneke Aleman
 * @since 2011-02-09
 *
 * @properties={typeid:24,uuid:"AEA84C67-4E8C-4E7E-A1F2-60C9EDD973C5"}
 */
function svy_nav_getRequiredFields(_progObj) {

	//if the required fields are already known just return them
	if (_progObj.required_fields) {
		return _progObj.required_fields
	}

	_progObj.required_fields = new Object()

	//get the required fields for a program
	/** @type {JSFoundSet<db:/svy_framework/nav_program_fields>} */
	var _fs_fields = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_program_fields')
	_fs_fields.addFoundSetFilterParam('program_id', '=', _progObj.program_id)
	_fs_fields.addFoundSetFilterParam('flag_required', '=', 1)
	_fs_fields.loadAllRecords()
	var _fs_fields_size = _fs_fields.getSize()
	for (var i = 1; i <= _fs_fields_size; i++) {
		var _rec_fields = _fs_fields.getRecord(i);
		_progObj.required_fields[_rec_fields.dataprovider] = new Object()
		_progObj.required_fields[_rec_fields.dataprovider].db_status = 'R'
		_progObj.required_fields[_rec_fields.dataprovider].req_by_prog = true
		_progObj.required_fields[_rec_fields.dataprovider].form_status = 'R'
		_progObj.required_fields[_rec_fields.dataprovider].on_form = false

	}

	//get the required fields for a program set by user - organization
	_fs_fields = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_user_required_field')
	_fs_fields.addFoundSetFilterParam('program_id', '=', _progObj.program_id)
	_fs_fields.loadAllRecords()
	_fs_fields_size = _fs_fields.getSize()
	for (var j = 1; j <= _fs_fields_size; j++) {
		_rec_fields = _fs_fields.getRecord(j)
		_progObj.required_fields[_rec_fields.dataprovider] = new Object()
		_progObj.required_fields[_rec_fields.dataprovider].db_status = 'R'
		_progObj.required_fields[_rec_fields.dataprovider].req_by_prog = false
		_progObj.required_fields[_rec_fields.dataprovider].form_status = 'R'
		_progObj.required_fields[_rec_fields.dataprovider].on_form = false

	}

	return _progObj.required_fields
}

/**
 * Sets the required fields on the form, will add * to the label of the required fields
 * @param {{required_fields:Object,program_id:String}} _progObj the object of the current program
 * @param {String} _form the name of the form
 * @param {String} _status the status of the framework
 * @author Sanneke Aleman
 * @since 2011-02-11
 *
 * @properties={typeid:24,uuid:"6C1E0095-7982-423B-83F2-4EFF26F08EEC"}
 */
function svy_nav_setRequiredFields(_progObj, _form, _status) {

	globals.svy_nav_getRequiredFields(_progObj)

	if (!solutionModel.getForm(_form)) return

	var _jsForm = solutionModel.getForm(_form)
	var _fields = _jsForm.getFields()
	var _formObj = forms[_form]
	var _req_text

	var _fieldName, _fieldDataprovider, _label
	for (var i = 0; i < _fields.length; i++) {
		_fieldName = _fields[i].name
		_fieldDataprovider = _fields[i].dataProviderID
		if (_progObj.required_fields[_fieldDataprovider])//this is a required field
		{

			//set the * for the required field
			if (!_formObj.elements[_fieldName] || !_formObj.elements[_fieldName].getLabelForElementNames)return
			_label = _formObj.elements[_fieldName].getLabelForElementNames()[0]
			if (_label) {
				if ( (_status == 'edit' || _status == 'required_fields') && _progObj.required_fields[_fieldDataprovider].form_status == 'R') {

					if (utils.stringLeft(_formObj.elements[_label]['text'], 1) == '*') continue //this field is already set
					_progObj.required_fields[_fieldDataprovider].on_form = true
					if (_status == 'required_fields' && _progObj.required_fields[_fieldDataprovider].req_by_prog) //show differance between programmer required field and user required fields in required field mode
					{
						_req_text = '** '
					} else {
						_req_text = '* '
					}

					_formObj.elements[_label]['text'] = _req_text + _formObj.elements[_label]['text']
				} else {
					//remove all the starting * and the space
					_formObj.elements[_label]['text'] = _formObj.elements[_label]['text'].replace(/^\*+\s/, "");
				}
			}
		}
	}

	//if there are tabs with forms
	var _tabpanels = _jsForm.getTabPanels()
	var _tabpn_name, _type, _formTab
	for (var j = 0; j < _tabpanels.length; j++) {
		_tabpn_name = _tabpanels[j].name
		_type = _formObj.elements[_tabpn_name].getElementType()
		if (_type == 'TABPANEL' && _formObj.elements[_tabpn_name].tabIndex >= 0) {
			_formTab = _formObj.elements[_tabpn_name].getTabFormNameAt(_formObj.elements[_tabpn_name].tabIndex)
			if (_formTab && forms[_formTab]) {
				globals.svy_nav_setRequiredFields(_progObj, _formTab, _status)
			}
		} else if (_type == 'SPLITPANE') {
			/** @type {Form} */
			var _formTabObj = _formObj.elements[_tabpn_name].getRightForm()
			_formTab = _formTabObj.controller.getName()
			if (_formTab && forms[_formTab]) {
				globals.svy_nav_setRequiredFields(_progObj, _formTab, _status)
			}
			_formTabObj = _formObj.elements[_tabpn_name].getLeftForm()
			_formTab = _formTabObj.controller.getName()
			if (_formTab && forms[_formTab]) {
				globals.svy_nav_setRequiredFields(_progObj, _formTab, _status)
			}
		}
	}
}

/**
 *  Check if all the required fields are entered, otherwise put warning in the validation_msg
 * @param {Object} _progObj the object of the current program
 * @param {String} _form the name of the form
 * @author Sanneke Aleman
 * @since 2011-02-11
 *
 * @properties={typeid:24,uuid:"E6A6988B-0B51-47F2-9E46-70BCEA8623BE"}
 */
function svy_nav_checkRequiredFields(_progObj, _form) {
	var _jsForm = solutionModel.getForm(_form)
	var _fields = _jsForm.getFields()
	var _formObj = forms[_form]
	var _return = 1
	var _fieldName, _fieldDataprovider, _label
	for (var i = 0; i < _fields.length; i++) {
		_fieldName = _fields[i].name
		_fieldDataprovider = _fields[i].dataProviderID
		if (_progObj['required_fields'][_fieldDataprovider] && _progObj['required_fields'][_fieldDataprovider].on_form && _formObj.elements[_fieldName].getLabelForElementNames)//this is a required field
		{
			_label = _formObj.elements[_fieldName].getLabelForElementNames()[0]
			if (_label && !_formObj[_fieldDataprovider]) { //field is not entered

				globals.nav.validation_msg += i18n.getI18NMessage("svy.fr.dlg.is_required", [utils.stringReplace(_formObj.elements[_label].text, '* ', '')]) + "<br>";
				_return = -1
			}
		}
	}

	//if there are tabs with forms
	var _tabpanels = _jsForm.getTabPanels()
	var _tabpn_name, _type, _formTab, _return_call
	for (var j = 0; j < _tabpanels.length; j++) {
		_tabpn_name = _tabpanels[j].name
		_type = _formObj.elements[_tabpn_name].getElementType()
		if (_type == 'TABPANEL' && _formObj.elements[_tabpn_name].tabIndex >= 0) {
			_formTab = _formObj.elements[_tabpn_name].getTabFormNameAt(_formObj.elements[_tabpn_name].tabIndex)
			if (_formTab && forms[_formTab]) {
				_return_call = globals.svy_nav_checkRequiredFields(_progObj, _formTab)
				if (_return_call == -1) _return = _return_call
			}
		} else if (_type == 'SPLITPANE') {
			/** @type {Form} */
			var _formTabObj = _formObj.elements[_tabpn_name].getRightForm()
			_formTab = _formTabObj.controller.getName()
			if (_formTab && forms[_formTab]) {
				_return_call = globals.svy_nav_checkRequiredFields(_progObj, _formTab)
				if (_return_call == -1) _return = _return_call
			}
			_formTabObj = _formObj.elements[_tabpn_name].getLeftForm()
			_formTab = _formTabObj.controller.getName()
			if (_formTab && forms[_formTab]) {
				_return_call = globals.svy_nav_checkRequiredFields(_progObj, _formTab)
				if (_return_call == -1) _return = _return_call
			}
		}
	}

	return _return
}

/**
 * To lose the focus, this method will set the focus on a small element that the user will not see
 * @author Sanneke Aleman
 * @since 2011-02-14
 * @properties={typeid:24,uuid:"E3830529-9AC3-4ABD-848B-A6BC843FBEFD"}
 */
function svy_nav_loseFocus() {
	forms[globals.svy_utl_getFrameworkFormName("nav_fr_status_bar")].elements['loseFocus']['requestFocus']()
}

/**
 *  Check the validation rules for all the fields
 * @param {{program_id:String,table_name:String}} _progObj the object of the current program
 * @param {String} _form the name of the form
 * @author Sanneke Aleman
 * @since 2011-02-14
 * @properties={typeid:24,uuid:"875274EA-22AC-40A4-8EB1-84789B40A2F9"}
 */
function svy_nav_checkValidationRules(_progObj, _form) {

	//look what the validation rules are
	/** @type {JSFoundSet<db:/svy_framework/nav_field_validation_rule>} */
	var _fs_rules = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_field_validation_rule')
	_fs_rules.addFoundSetFilterParam('program_id', '=', _progObj.program_id)
	_fs_rules.sort('dataprovider asc, sequence asc', true)
	_fs_rules.loadRecords()

	var _fs_rules_size = _fs_rules.getSize()
	var _fs_rec, _method, _dataprovider, _newValue, _record, _return

	var _table = _progObj.table_name
	_record = forms[_form].foundset.getSelectedRecord()
	var _success = 0

	for (var i = 1; i <= _fs_rules_size; i++) {
		_fs_rec = _fs_rules.getRecord(i)
		_dataprovider = _fs_rec.dataprovider
		_newValue = forms[_form][_dataprovider]

		if (utils.stringPatternCount(_fs_rec.method, 'globals.') > 0) {
			_method = utils.stringReplace(_fs_rec.method, 'globals.', '')
			_return = globals[_method](_table, _dataprovider, _newValue, _record)
		} else if (utils.stringPatternCount(_fs_rec.method, 'forms.') > 0) {
			_method = _fs_rec.method.split('.', 5)
			_return = forms[_method[1]][_method[2]](_table, _dataprovider, _newValue, _record)
		}

		if (_return == -1) {
			_success = -1
		}
	}
	return _success
}

/**
 * to call a function from a popmenu you don't need the first 5 arguments
 * @param {Object} _arg1
 * @param {Object} _arg2
 * @param {Object} _arg3
 * @param {Object} _arg4
 * @param {Object} _arg5
 * @param {String|UUID} _function_id
 *
 * @properties={typeid:24,uuid:"4F35026E-E49D-472C-A110-C1B4AD5E70F9"}
 */
function svy_nav_callFunctionFromPopmenu(_arg1, _arg2, _arg3, _arg4, _arg5, _function_id) {
	svy_nav_callFunction(_function_id)
}

/**
 * to call a function from a popmenu you don't need the first 5 arguments
 * @param {Object} _arg1
 * @param {Object} _arg2
 * @param {Object} _arg3
 * @param {Object} _arg4
 * @param {Object} _arg5
 * @param {JSEvent} [_event]
 * @param {Number} _position
 *
 * @properties={typeid:24,uuid:"950C39C5-6CF1-45CE-A301-6DEF4DEBFE79"}
 */
function svy_nav_history_moveFromPopmenu(_arg1, _arg2, _arg3, _arg4, _arg5, _event, _position) {
	forms[globals.nav.mainFormName].history_move(_event, _position)
}

/**
 * @param {UUID} functionId
 * @param {JSEvent} [event]
 * @properties={typeid:24,uuid:"CCD4815D-3A52-4BCA-A159-9AB30D3D241E"}
 */
function svy_nav_callFunction(functionId, event) {

	/** @type {JSFoundSet<db:/svy_framework/nav_function>} */
	var functionFs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_function')
	functionFs.addFoundSetFilterParam('function_id', '=', functionId)
	functionFs.loadAllRecords()

	if (functionFs.getSize() != 1) {
		return
	}
	
	var method = functionFs.method;
	var methodComponents = method.split(".");
	
	var functionScope;
	var functionName;
	if (methodComponents[0] == "forms") {
		functionScope = forms[methodComponents[1]];
		functionName = methodComponents[2];
	} else if (methodComponents[0] == "globals") {
		functionScope = globals;
		functionName = methodComponents[1];		
	} else if (methodComponents[0] == "scopes") {
		functionScope = scopes[methodComponents[1]];
		functionName = methodComponents[2];		
	}
	
	if (!functionScope[functionName]) {
		application.output("Method " + method + " cannot be found!", LOGGINGLEVEL.ERROR);
		return;
	}
	
	var methodArguments = new Array();
	for (var i = 1; i <= functionFs.nav_function_to_nav_function_arguments.getSize(); i++) {
		var argumentRecord = functionFs.nav_function_to_nav_function_arguments.getRecord(i);
		switch (argumentRecord.arg_type) {
		case 1: //string value
			methodArguments.push(argumentRecord.argument);
			break;
		case 2: //global variable name
			methodArguments.push(globals[argumentRecord.argument]);
			break;
		default:
			break;
		}
	}
	
	if (event) {
		// add JSEvent as last argument
		methodArguments.push(event);
	}
	
	functionScope[functionName].apply(functionScope, methodArguments);
}

/**
 * Retrieves the elements of the form that should be shown at generated table views
 *
 * @param {String} _form the name of the form
 *
 * @author Vincent Schuurhof
 * @since 2011-07-07
 *
 * @properties={typeid:24,uuid:"475A4C3A-047D-495E-A71E-8689E54E4364"}
 */
function svy_nav_getFixedElementsTable(_form) {
	if (forms[_form].vFixedElementsTable['length']) {
		// first revert the form to get its design-time fixed elements
		solutionModel.revertForm(_form);
		forms[_form].controller.recreateUI();
	} else {
		return null;
	}

	var _jsForm = solutionModel.getForm(_form)
	var _components = _jsForm.getComponents()

	/** @type {Array} */
	var _fixedElementsTable = forms[_form].vFixedElementsTable;
	var _fixedElements = new Array();
	var _fixedElementsCounter = 0;
	for (var i = 0; i < _components.length; i++) {
		for (var j = 0; j < _fixedElementsTable.length; j++) {
			if (_components[i].name == _fixedElementsTable[j][0]) {
				_fixedElements[_fixedElementsCounter] = new Array();
				// define the record type element
				_fixedElements[_fixedElementsCounter][0] = _components[i];
				for (var k = 0; k < _components.length; k++) {
					if ("labelFor" in _components[k] && _components[k]["labelFor"] == _fixedElementsTable[j][0]) {
						// define the header element
						_fixedElements[_fixedElementsCounter][1] = _components[k];
						break;
					}
				}

				// define whether the element should be fixed at the front or the back
				_fixedElements[_fixedElementsCounter][2] = _fixedElementsTable[j][1];

				_fixedElementsCounter++;
			}
		}
	}

	return _fixedElements;
}

/**
 * Can be used to refresh the table and server names in the nav_program records
 * For example when tables are renamed
 * Only to be used in developer
 *
 * @properties={typeid:24,uuid:"DA87163F-E1D7-491D-8751-965169B4C7D0"}
 */
function svy_nav_refreshProgramTables() {
	if (!application.isInDeveloper()) {
		return;
	}

	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, "nav_program");
	_fs.loadAllRecords();

	/** @type {JSRecord<db:/svy_framework/nav_program>} */
	var _programRec;
	for (var i = 1; i <= _fs.getSize(); i++) {
		_programRec = _fs.getRecord(i);
		if (_programRec.base_form_name && _programRec.base_form_name != '-no form-') {
			for (var j = 0; j < _programRec.form_object.length; j++) {
				if (_programRec.form_object[j][3] && forms[_programRec.form_object[j][2]]) { // 3-available 2-formname
					_programRec.form_name = _programRec.form_object[j][2]
					_programRec.table_name = databaseManager.getDataSourceTableName(forms[_programRec.form_object[j][2]].controller.getDataSource())
					_programRec.server_name = databaseManager.getDataSourceServerName(forms[_programRec.form_object[j][2]].controller.getDataSource())
					databaseManager.saveData()
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"FEFC9B67-36A6-4769-91FF-BC3D20350AD6"}
 */
function svy_nav_fillSolutionNameColumns() {
	var _solutionName = application.getSolutionName();
	var _tables = databaseManager.getTableNames(globals.nav_db_framework);
	var _jsTable, _columns, _fs, _fsUpdater;
	for (var i = 0; i < _tables.length; i++) {
		_jsTable = databaseManager.getTable(globals.nav_db_framework, _tables[i]);
		_columns = _jsTable.getColumnNames();
		for (var j = 0; j < _columns.length; j++) {
			if (_columns[j] == "solution_name") {
				//fill solution_name column
				_fs = databaseManager.getFoundSet(globals.nav_db_framework, _tables[i]);
				_fs.loadAllRecords();
				_fsUpdater = databaseManager.getFoundSetUpdater(_fs);
				_fsUpdater.setColumn("solution_name", _solutionName);
				_fsUpdater.performUpdate()
				break;
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"B474E4CB-ACBC-46D5-8892-E4EF320603F2"}
 */
function svy_nav_printCurrentProgram() {

	var _printForm = globals.nav_currentPanel1Form
	var _main_h = scopes.modUtils$UI.getJSFormHeight(_printForm)
	//	var _main_w = forms[_printForm].controller.getFormWidth()
	var _between_h = 20

	var _width = 703 //pixels that can be on a form on printscale 150
	var _height = _main_h
		//look if there is a tab

		// determine the template - the method will only print the current form and not all the forms which are part of the template.
		// var _template = globals.nav.getTemplate()
		//	var _template = _printForm;

	//	/** @type {Form} */
	//	var _templateForm = forms[_template];
	var _tab = false

	//create a form
	var _formname = 'printScreen'
	history.removeForm(_formname)
	solutionModel.removeForm(_formname)
	var _jsForm = solutionModel.newForm(_formname, forms[_printForm].controller.getDataSource(), 'sampleuse_navigation', false, _width, _height)
	var _body = _jsForm.newPart(JSPart.BODY, _height)
	_body.allowBreakAcrossPageBounds = true
	_jsForm.paperPrintScale = 120
	_jsForm.defaultPageFormat = solutionModel.createPageFormat(942, 646, 20, 20, 20, 20, SM_ORIENTATION.PORTRAIT, SM_UNITS.PIXELS);
	_jsForm.navigator = SM_DEFAULTS.NONE
	_jsForm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_NEVER + SM_SCROLLBAR.VERTICAL_SCROLLBAR_NEVER

	//create tab
	var _jsTab = _jsForm.newTabPanel('tab_browser', 0, 0, _width, _main_h)
	_jsTab.anchors = 15
	_jsTab.transparent = true
	_jsTab.printable = true
	_jsTab.newTab('', '', solutionModel.getForm(_printForm))
	_jsTab.printSliding = SM_PRINT_SLIDING.GROW_HEIGHT

	if (_tab) {
		//label between the tabpanels.
		var _label = _jsForm.newLabel(globals.nav.program[globals.nav.getTabProgram()].description, 0, _main_h, _width, _between_h)
		_label.printSliding = SM_PRINT_SLIDING.GROW_HEIGHT | SM_PRINT_SLIDING.ALLOW_MOVE_Y

		//		//tab for the tab
		//		var _jsTabViewer = _jsForm.newTabPanel('tab_viewer', 0, _main_h + _between_h, _width, _main_h)
		//		_jsTabViewer.anchors = 15
		//		_jsTabViewer.transparent = true
		//		_jsTabViewer.printable = true
		//		_jsTabViewer.newTab('','',solutionModel.getForm(_printTab))
		//		_jsTabViewer.printSliding = SM_PRINT_SLIDING.GROW_HEIGHT | SM_PRINT_SLIDING.ALLOW_MOVE_Y
	}
	forms[_formname].controller.recreateUI()

	//load the foundset, otherwise printing is not allowed
	forms[_formname].controller.loadRecords(forms[_printForm].foundset)

	//set the tabs
	forms[_formname].controller.showPrintPreview(true)
}

/**
 * Switch to the tab of the programname provided
 * @param {JSEvent} [event]
 * @param {String} _program name of program
 * @properties={typeid:24,uuid:"4667E0F2-11A9-4B58-8C92-F7735EC60498"}
 */
function svy_nav_switchTabProgram(event, _program) {

	var _layout = _to_nav_layout.getRecord(1);
	var _tabRec;
	var _panelNr = 0;
	var _seq;
	for (var i = 1; i <= _layout.nav_layout_to_nav_tab.getSize(); i++) {
		_tabRec = _layout.nav_layout_to_nav_tab.getRecord(i);
		if (_tabRec.panel_id != _panelNr) {
			_panelNr = _tabRec.panel_id;
			_seq = 1
		}

		if (_tabRec.nav_tab_to_nav_program.program_name == _program) {
			break;
		}
		_seq++;
	}
	var _panelForm = svy_nav_getVisiblePanelNames()[_panelNr];

	forms[_panelForm].switchTab(event, _seq)

}

/**
 * Switch to the tab of the programname provided and create new record
 *
 * @param {JSEvent} [event]
 * @param {String} _program name of program
 * @properties={typeid:24,uuid:"B1630FC1-17DF-4570-B409-CD63E96E0DFE"}
 */
function svy_nav_newRecordOnTabProgram(event, _program) {
	svy_nav_switchTabProgram(event, _program)
	forms[globals.nav_currentPanel1Form]['dc_new'](null, 'svy_nav_fr_buttonbar_viewer');
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormEdit} instead
 * 
 * @properties={typeid:24,uuid:"8D998DA8-F96B-4513-9273-A8BCA6997B5D"}
 */
function svy_nav_mainFormEdit(event) {
	scopes.svyNavigation$shortcuts.mainFormEdit();
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormNew} instead
 * 
 * @properties={typeid:24,uuid:"77F6A1BA-2725-475B-A60B-28DF7CFCC8A2"}
 */
function svy_nav_mainFormNew() {
	scopes.svyNavigation$shortcuts.mainFormNew();
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormDelete} instead
 * 
 * @properties={typeid:24,uuid:"016A541D-7D06-47CA-8B75-A61106194C47"}
 */
function svy_nav_mainFormDelete() {
	scopes.svyNavigation$shortcuts.mainFormDelete();
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormCancel} instead
 * 
 * @properties={typeid:24,uuid:"8C2B0CB1-6DED-487F-8BBC-68D8B4261F52"}
 */
function svy_nav_mainFormCancel() {
	scopes.svyNavigation$shortcuts.mainFormCancel();
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormDuplicate} instead
 * 
 * @properties={typeid:24,uuid:"D0C7CDB3-C922-4A67-AB2C-2384E4AAD5D0"}
 */
function svy_nav_mainFormDuplicate() {
	scopes.svyNavigation$shortcuts.mainFormDuplicate();
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormFind} instead
 * 
 * @properties={typeid:24,uuid:"6424D4C4-ADE7-4143-B459-F1E8A23B3321"}
 */
function svy_nav_mainFormFind() {
	scopes.svyNavigation$shortcuts.mainFormFind();
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormSort} instead
 * 
 * @properties={typeid:24,uuid:"D6536798-1145-4EC6-A6B4-C04B2340D364"}
 */
function svy_nav_mainFormSort() {
	scopes.svyNavigation$shortcuts.mainFormSort();
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyNavigation$shortcuts#mainFormSave} instead
 * 
 * @properties={typeid:24,uuid:"75ACBABC-218B-40C0-B49C-13B2A85CCFDD"}
 */
function svy_nav_mainFormSave() {
	scopes.svyNavigation$shortcuts.mainFormSave();
}

/**
 * @properties={typeid:24,uuid:"36995A64-0DEA-4981-91E5-6472CC8D3A89"}
 */
function svy_nav_setFilterOrganizationProperties() {
	if (application.getValueListItems('svy_lgn_organizations').getMaxRowIndex() <= 1) {
		return;
	}
	var _type = scopes.svyProperties.getPropertyValue("organization_filter_type")
	var _size = scopes.svyProperties.getPropertyValue("organization_filter_width")
	if (!_type || !_size) {
		return
	}

	var _jsForm = solutionModel.getForm(globals.svy_utl_getFrameworkFormName("nav_fr_status_bar"))
	var _field = _jsForm.getField('organization_filter')
	if (_size != '140') {
		_field.width = _size
	}

	if (_type != 'COMBOBOX') {
		_field.displayType = JSField.TYPE_AHEAD
		_field.editable = true
	}
}

/**
 * @param {JSEvent} [event]
 * @param {String|UUID} _menu_item_id
 *
 * @properties={typeid:24,uuid:"7C2713D9-616A-4CCB-86F0-D4A7E2B98802"}
 */
function svy_nav_openMenuItem(event, _menu_item_id) {
	globals.nav_menu_item_id = _menu_item_id

	if (_to_nav_menu_items.menuitem_type == 'F') {

		globals.svy_nav_callFunction(_to_nav_menu_items.function_id)

	} else if (_to_nav_menu_items.menuitem_type == 'L') {
		globals.nav.openNewTab = 1
		forms[globals.nav.mainFormName].layoutSwitch(event, _to_nav_menu_items.layout_id, null, null, forms[globals.nav.openLayoutFormName].vSelectedTab);
	}
}

/**
 * @param {UUID} _layout_id
 *
 * @return {String} layout form name
 *
 * @properties={typeid:24,uuid:"AE56BDB0-7E5A-4894-988E-A9E4F53B3BE0"}
 */
function svy_nav_getLayoutForm(_layout_id) {
	/** @type{JSRecord<db:/svy_framework/nav_layout>} */
	var _layoutRec = scopes.modUtils$data.getRecord('db:/' + globals.nav_db_framework + '/nav_layout', _layout_id);
	return "ly_" + _layoutRec.name;
}

/**
 *
 * @properties={typeid:24,uuid:"A3AB2C13-63CA-4737-83DA-B60C2237ABCC"}
 */
function svy_nav_tableShowOriginal(_arg1, _arg2, _arg3, _arg4, _menuName, _program, _view, _toolbarForm, _form) {
	forms.svy_nav_fr_processing.controller.show()
	if (_view == 0) {
		forms[_toolbarForm]['vView'] = 1
	}
	globals.nav.program[_program].user_table_view_id = null;
	var _foundset = forms[_form].foundset
	var _tableViewProperty = forms[_form]['vTableViewInformation'];
	history.removeForm(_form)
	solutionModel.revertForm(_form)
	forms[globals.nav.mainFormName].layoutSwitch(null, globals.nav_layout_id, null, _foundset)
	forms[globals.nav.mainFormName].controller.show()
	_tableViewProperty[globals.nav_layout_id] = null;		// Need to be set manually as the object is lost after revert
	forms[_form]['vTableViewInformation'] = _tableViewProperty;
}

/**
 * @param {String} _program
 * @param {Object} _recordId
 * @param {String|UUID} [_layout_id]
 * @param {Object} [_layoutObj]
 * @properties={typeid:24,uuid:"B0FD4C06-3647-4B7C-8E06-5CF9CEC7F81C"}
 */
function svy_nav_showProgramRecord(_program, _recordId, _layout_id, _layoutObj) {
	globals.nav_program_name = _program
	if (_layout_id == undefined) {
		_layout_id = _to_nav_program.layout_id
	}

	if (!_layout_id) {
		application.output('Program :' + _program + ' has to layout connected to it, so you cannot use the method svy_nav_showProgramRecord. Please give the program a layout in the navigation configurator.')
		return;
	}

	//run onPreShow-method of program when available
	if (globals[_program + '_onPreShow']) {
		var _methodReturn = globals[_program + '_onPreShow']()

		if (_methodReturn == -1) {
			return;
		}
	}
	forms[globals.nav.mainFormName].layoutSwitch(null, _layout_id, _layoutObj, null, null, null, _recordId)
	forms[globals.nav.mainFormName].updateMenu(_layout_id)

}

/**
 * Set the bookmarks in the globals.nav.bookmarks object and returns them
 * @return {Array}
 * @properties={typeid:24,uuid:"978637F6-73C6-406E-BBE4-13968A4FD9E1"}
 * @AllowToRunInFind
 */
function svy_nav_getBookmarks() {
	if (!globals.nav) {
		return null;
	}
	// bookmarks are stored in a object
	globals.nav.bookmarks = new Array()

	/**@type {JSFoundSet<db:/svy_framework/nav_bookmarks>}*/
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_bookmarks')

	// search the bookmark for the user
	if (_fs.find()) {
		// forms.svy_nav_fr_bookmarks.user_org_id = globals.svy_sec_lgn_user_org_id
		_fs.user_id = globals.svy_sec_lgn_user_id;
		_fs.organization_id = globals.svy_sec_lgn_organization_id;

		_fs.sort('sort_order asc')
		var _found = _fs.search();

		var _rec, _i

		// loop true records and set bookmarks
		for (_i = 0; _i < _found; _i++) {
			// Loop over foundset to set bookmarks labels and show bookmarks
			_rec = _fs.getRecord(_i + 1)

			globals.nav_program_id = _rec.program_id
			var _program = _to_nav_program$program_id.program_name

			if (globals.nav.program[_program]) {
				var _relation = 'nav_bookmarks_to_' + globals.nav.program[_program].table_name + _rec.bookmark_id
				//create the relation if it doesn't exist
				if (!globals[_relation]) {

					var _jsRelation = solutionModel.newRelation(_relation,
						'db:/' + globals.nav_db_framework + '/' + 'nav_bookmarks',
						'db:/' + globals.nav.program[_program].server_name + '/' + globals.nav.program[_program].table_name,
						JSRelation.INNER_JOIN)

					//relation to get to the related record
					for (var i = 0; i < _rec.record_ids_names['length']; i++) {
						var _globalName = 'bookmark' + _rec.record_ids_names[i] + _rec.bookmark_id
						if (!solutionModel.getGlobalVariable('globals', _globalName)) {
							switch (_rec.record_ids_types[i]) {
							case 'INTEGER':
								solutionModel.newGlobalVariable('globals', _globalName, JSVariable.INTEGER);
								break;
							case 'DATETIME':
								solutionModel.newGlobalVariable('globals', _globalName, JSVariable.DATETIME);
								break;
							case 'TEXT':
								solutionModel.newGlobalVariable('globals', _globalName, JSVariable.TEXT);
								break;
							case 'MEDIA':
								solutionModel.newGlobalVariable('globals', _globalName, JSVariable.MEDIA);
								break;
							case 'NUMBER':
								solutionModel.newGlobalVariable('globals', _globalName, JSVariable.NUMBER);
								break;
							default:
							}
							globals[_globalName] = _rec.record_ids[i]
							_jsRelation.newRelationItem('globals.' + _globalName, '=', _rec.record_ids_names[i])
						}
					}
				}

				/** @type{JSRecord<db:/svy_framework/nav_layout>} */
				var _recLayout = scopes.modUtils$data.getRecord('db:/' + globals.nav_db_framework + '/nav_layout',_rec.layout_id)
				if (!_recLayout) continue
				var _recordText

				//set record text
				if (_relation) {
					_recordText = globals[_relation][globals.nav.program[_program].display_field_header]
				} else {
					_recordText = _rec.record_ids
				}

				// set information in object
				globals.nav.bookmarks[_i] = new Object()
				globals.nav.bookmarks[_i].program = _program
				globals.nav.bookmarks[_i].record_ids = _rec.record_ids
				globals.nav.bookmarks[_i].bookmark_id = _rec.bookmark_id
				globals.nav.bookmarks[_i].layout_id = _rec.layout_id
				globals.nav.bookmarks[_i].layoutObject = _rec.layoutobj
				globals.nav.bookmarks[_i].text1 = _recLayout.display_description
				globals.nav.bookmarks[_i].text2 = _recordText
				globals.nav.bookmarks[_i].image_name = _recLayout.image_url
				globals.nav.bookmarks[_i].image_name_bg = _recLayout.image_url_bg

			}
		}
	}

	return globals.nav.bookmarks
}

/**
 * Get all the favorites of a user, will also store the favorites in the object globals.nav.shortcuts
 * @return {Array} Array of favorites objects
 * @properties={typeid:24,uuid:"E03C1075-340B-4656-A9F5-5818D74FBD06"}
 * @AllowToRunInFind
 */
function svy_nav_getFavorites() {
	if (!globals.nav) {
		return null;
	}

	globals.nav.shortcuts = new Array()
	// Look for user shortcuts first

	/** @type {JSFoundSet<db:/svy_framework/nav_shortcut>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_shortcut')

	if (_fs.find()) {
		_fs.user_id = globals.svy_sec_lgn_user_id;
		_fs.organization_id = globals.svy_sec_lgn_organization_id;
		_fs.sort('sort_order asc')
		var _found = _fs.search();

		if (_found == 0) {
			// If no user shortcuts are present, use default shortcuts
			_fs.find();
			_fs.user_org_id = "-1"
			_fs.sort('sort_order asc')
			_found = _fs.search();
		}

		var _count = 0
		var _rec
		for (var _j = 0; _j < _found; _j++) {
			// Loop over foundset to set shortcut labels and show shortcuts
			_rec = _fs.getRecord(_j + 1)

			/** @type{JSRecord<db:/svy_framework/nav_layout>} */
			var _recLayout = scopes.modUtils$data.getRecord('db:/' + globals.nav_db_framework + '/nav_layout', _rec.layout_id)

			if (_recLayout) {

				// put into a object for later use, when the user clicks a shortcut
				globals.nav.shortcuts[_count] = new Object()
				globals.nav.shortcuts[_count].layout_id = _rec.layout_id
				globals.nav.shortcuts[_count].shortcut_id = _rec.nav_shortcut_id
				globals.nav.shortcuts[_count].image_name = _recLayout.image_url
				globals.nav.shortcuts[_count].image_name_bg = _recLayout.image_url_bg
				globals.nav.shortcuts[_count].text1 = _recLayout.display_description
				_count++
			}
		}
	}
	return globals.nav.shortcuts
}

/**
 * @properties={typeid:24,uuid:"7C8DBCBF-EC50-4B34-8B1F-C2DA24E32F3D"}
 */
function svy_nav_favoriteSave() {

	var _maxFavorites = 7
	if (scopes.svyProperties.getPropertyValue('max_favorites')) {
		_maxFavorites = scopes.svyProperties.getPropertyValue('max_favorites') * 1
	}

	if (databaseManager.hasRecords(_to_nav_shortcut$user_id$organization_id$layout_id)) return;// shortcut already exist
	if (databaseManager.hasRecords(_to_nav_shortcut$user_id$organization_id) && _to_nav_shortcut$user_id$organization_id.getSize() >= _maxFavorites) // user has maximum favorites
	{
		globals.DIALOGS.showWarningDialog('', i18n.getI18NMessage('svy.fr.lbl.maximum_shortcuts'), i18n.getI18NMessage('svy.fr.lbl.ok'))
		return
	}

	// create the shortcut
	/** @type {JSFoundSet<db:/svy_framework/nav_shortcut>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_shortcut')

	_fs.newRecord();
	_fs.layout_id = globals.nav_layout_id
	_fs.user_id = globals.svy_sec_lgn_user_id;
	_fs.organization_id = globals.svy_sec_lgn_organization_id;

	//set the right sort order
	var maxReturnedRows = 1;
	var query = 'SELECT MAX(sort_order) FROM nav_shortcut WHERE user_id = ? AND organization_id = ?';
	var args = new Array();
	args[0] = globals.svy_sec_lgn_user_id.toString();
	args[1] = globals.svy_sec_lgn_organization_id.toString();
	var dataset = databaseManager.getDataSetByQuery(databaseManager.getDataSourceServerName(forms.svy_nav_fr_shortcuts.controller.getDataSource()), query, args, maxReturnedRows);
	if (dataset.getValue(1, 1)) {
		_fs.sort_order = dataset.getValue(1, 1) + 1
	} else {
		_fs.sort_order = 1
	}
	databaseManager.saveData(_fs)
}

/**
 * @AllowToRunInFind
 *
 * // Method to delete a favorite
 * @param {JSEvent} [_event]
 * @param {Number} [_buttonnr]
 *
 * @properties={typeid:24,uuid:"57EED33E-60CF-4096-AD9C-4AF88CC06D31"}
 */
function svy_nav_favoriteDelete(_event, _buttonnr) {
	if (_event && !_buttonnr) {
		var _button = _event.getElementName();
		_buttonnr = _button.replace(/[^0-9]/g, "") * 1
	}
	/** @type {JSFoundSet<db:/svy_framework/nav_shortcut>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_shortcut')

	// find shortcut and delete

	if(_fs.find())
	{
		_fs.nav_shortcut_id = globals.nav.shortcuts[_buttonnr].shortcut_id 
		_fs.search()
	}

	_fs.deleteRecord()

}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} [_event] or event or buttonnr
 * @param {Number} [_buttonnr] or event or buttonnr
 * @param {String} _direction (up/down)
 *
 * @properties={typeid:24,uuid:"B74D43AC-212C-4E0B-85C0-3C158612ADBF"}
 * @AllowToRunInFind
 */
function svy_nav_favoriteMove(_event, _buttonnr, _direction) {
	if (_event && !_buttonnr) {
		var _button = _event.getElementName();
		_buttonnr = _button.replace(/[^0-9]/g, "") * 1
	}
	var _buttonnr_next
	var _rec_org
	var _rec_next
	var _sort_org
	var _sort_next

	// if shortcut has to move up
	if (_direction == 'up') {
		_buttonnr_next = _buttonnr - 1
	}
	// if shortcut has to move down
	if (_direction == 'down') {
		_buttonnr_next = _buttonnr + 1
	}

	/** @type {JSFoundSet<db:/svy_framework/nav_shortcut>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_shortcut')

	// get the origenal record
	if(_fs.find())
	{
		_fs.nav_shortcut_id = globals.nav.shortcuts[_buttonnr].shortcut_id 

		_fs.search()
		_rec_org = _fs.getRecord(1)
	}
	// get the next record
	if (_fs.find()) {
		_fs.nav_shortcut_id = globals.nav.shortcuts[_buttonnr_next].shortcut_id
		_fs.search()
		_rec_next = _fs.getRecord(1)
	}

	// toggle the sortorder of the records
	_sort_org = _rec_org.sort_order
	_sort_next = _rec_next.sort_order
	_rec_org.sort_order = _sort_next
	_rec_next.sort_order = _sort_org

	databaseManager.saveData(_rec_org)
	databaseManager.saveData(_rec_next)
}

/**
 * @properties={typeid:24,uuid:"4C209F09-B21E-41D7-B2A6-6562B54E5B3C"}
 */
function svy_nav_showProgram(_program) {
	globals.nav_program_name = _program
	var _layout_id = _to_nav_program.layout_id

	if (!_layout_id) {
		application.output('Program :' + _program + ' has no layout connected to it, so you cannot use the method svy_nav_showProgram. Please specify a main layout for this program in the navigation configurator.')
		return;
	}

	//run onPreShow-method of program when available
	if (globals[_program + '_onPreShow']) {
		var _methodReturn = globals[_program + '_onPreShow']()

		if (_methodReturn == -1) {
			return;
		}
	}
	
	forms[globals.nav.mainFormName].layoutSwitch(null, _layout_id);
	forms[globals.nav.mainFormName].updateMenu(_layout_id)
}

/**
 * Get the formnames that are showing at the moment in the order of the template
 * [layoutFormName, panel1FormName, panel2FormName, ....]
 *
 * @return {Array<String>}
 * @properties={typeid:24,uuid:"8A98F5C6-3E84-4D79-AE4B-F7F8772E3CDB"}
 */
function svy_nav_getVisibleFormNames() {
	var _panelNames = svy_nav_getVisiblePanelNames();
	if (!_panelNames || _panelNames.length == 0) {
		return null;
	}
	/** @type {Array<String>} */
	var _formNames = [_panelNames[0]];

	/** @type {RuntimeTabPanel} */
	var _tab
	var _tabFormName
	for (var i = 1; i < _panelNames.length; i++) {
		_tab = forms[_panelNames[i]].elements.tab;
		_tabFormName = _panelNames[i] + "_t" + _tab.tabIndex;
		_formNames.push(forms[_tabFormName].elements.form.getTabFormNameAt(1));
	}

	return _formNames;
}

/**
 * Get the formnames of the tabpanels where the forms are set on, in the order of the template.
 * On this form the tab forms will be on the tabpannel called 'tab'
 * [layoutFormName, panel1Name, panel2Name, ....]
 *
 * @return {Array}
 * @properties={typeid:24,uuid:"F7D9F2C5-DBA6-4127-BCAB-77616EB04E33"}
 */
function svy_nav_getVisiblePanelNames() {
	if (!databaseManager.hasRecords(_to_nav_layout)) {
		return [];
	}
	var _layout = _to_nav_layout.getRecord(1);
	var _layoutFormName = "ly_" + _layout.name;
	var _panelNames = [_layoutFormName];

	var _panelCnt = forms[_layout.template_form].getPanelCount()

	for (var i = 1; i <= _panelCnt; i++) {
		_panelNames.push(_layoutFormName + "_p" + i);
	}

	return _panelNames

}

/**
 * Returns all the visible (loaded) form names of the tab panels where the forms are set on, including the manually added forms
 *
 * @param {Boolean} [returnManualForms] whether or not to return forms which have been manually added by the user
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"6F0AA120-AA36-4C75-AAEB-994F16E97CF2"}
 */
function svy_nav_getAllVisibleFormNames(returnManualForms) {
	var _panelNames = svy_nav_getVisiblePanelNames();
	var _formNames = [];

	/** @type {RuntimeTabPanel} */
	var _tab
	var _tabFormName
	var _formName
	for (var i = 1; i < _panelNames.length; i++) {
		_tab = forms[_panelNames[i]].elements.tab;
		for (var j = 1; j <= _tab.getMaxTabIndex(); j++) {
			_tabFormName = _panelNames[i] + "_t" + j;
			if (forms[_tabFormName]) {
				_formName = forms[_tabFormName].elements.form.getTabFormNameAt(1);
				_formNames.push(_formName);

				if (returnManualForms) {
					var _tabPanels = solutionModel.getForm(_formName).getTabPanels();
					var _tabs
					for (var k = 0; k < _tabPanels.length; k++) {
						_tabs = _tabPanels[k].getTabs();
						for (var l = 0; l < _tabs.length; l++) {
							_formNames.push(_tabs[l].containsForm.name);
						}
					}
				}
			}
		}
	}

	return _formNames;
}

/**
 * This is triggered from onShow of form to show the correct table view form
 * 
 * @author pradipta
 * 
 * @param {String} formName the form name
 * 
 * @properties={typeid:24,uuid:"D985590E-2313-4548-90FF-E54ED041F1D5"}
 * @AllowToRunInFind
 */
function svy_nav_loadCorrectTableView(formName) {
	
	var _toolbarForm = forms[formName].getToolbarFormName()
	/** @type {UUID} */
	var _layoutId =  globals.nav_layout_id;
	var _program = forms[formName].getProgram()
	var _programId = scopes.globals.nav.program[_program].program_id
	var _tableViewObject = forms[formName]['vTableViewInformation'];
	/** @type {JSFoundSet<db:/svy_framework/nav_user_table_view>} */
	var _userTableViewFs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_user_table_view')
	
	if (!_programId || !_layoutId)
		return;
	var _currentLayoutViewId = _tableViewObject[_layoutId.toString()];
	var _viewIdInProgramObject = scopes.globals.nav.program[_program].user_table_view_id;
	_viewIdInProgramObject = (_viewIdInProgramObject == undefined ? null : _viewIdInProgramObject)
	
	// For the first time load the default table view of the selected form, for the layout
	if (typeof(_currentLayoutViewId) == 'undefined') {
		
		// Set user table view in program object
		/** @type {JSFoundSet<db:/svy_framework/nav_user_table_view>} */
		var _tblPropertyFs = databaseManager.getFoundSet('db:/svy_framework/nav_user_table_view');
		if (_tblPropertyFs.find()) {
			_tblPropertyFs.program_id = _programId;
			_tblPropertyFs.layout_id = _layoutId;
			_tblPropertyFs.user_id = scopes.globals.svy_sec_lgn_user_id;
			_tblPropertyFs.organization_id = scopes.globals.svy_sec_lgn_organization_id;
			_tblPropertyFs.flag_user_default = 1;
			if (_tblPropertyFs.search()) {
				// Set user table view property
				_viewIdInProgramObject = _tblPropertyFs.user_table_view_id;
			}
			else {
				_viewIdInProgramObject = null;
			}
		}
	}
	
	// The default table is in display. No need to swith the table view.
	if (!_currentLayoutViewId && !_viewIdInProgramObject) {
		
		_tableViewObject[_layoutId.toString()] = _viewIdInProgramObject;
		_tableViewObject['currentLayoutId'] = _layoutId;
		globals.svy_nav_loadTableViewPersistance(formName, _programId, _layoutId, _viewIdInProgramObject);
	}
	
	// current layout has no view id. But the program object has a table view id with it
	if (!_currentLayoutViewId && _viewIdInProgramObject) {
		
		// Validate id against this layout
		if (_userTableViewFs.find()) {
			_userTableViewFs.user_table_view_id = _viewIdInProgramObject;
			_userTableViewFs.layout_id = _layoutId;
			if (_userTableViewFs.search()) {
				
				// The view id in program is correct. Reset the form obejct and apply table view persistence
				_tableViewObject[_layoutId.toString()] = _viewIdInProgramObject;
				_tableViewObject['currentLayoutId'] = _layoutId;
				globals.svy_nav_createTableView(null, _viewIdInProgramObject, true, _programId);
				globals.svy_nav_loadTableViewPersistance(formName, _programId, _layoutId, _viewIdInProgramObject);
			}
			else {
				
				// The table view id present in program object is wrong. Load the default table view for this layout
				var _view = forms[_toolbarForm].vView
				globals.svy_nav_tableShowOriginal('', '', '', '', '',_program, _view, _toolbarForm, formName)
				forms[formName].controller.recreateUI();
			}			
		}
	}
	
	// When the current layout has some table view id . But the program object has no table view id
	if (_currentLayoutViewId && !_viewIdInProgramObject) {
		
		// Load the table view as pointed by the local object for layout program
		forms[formName].dc_tableShowView('', '', '', '', '', _program, _currentLayoutViewId);
		
		_tableViewObject[_layoutId.toString()] = _currentLayoutViewId;
		_tableViewObject['currentLayoutId'] = _layoutId;
		globals.svy_nav_loadTableViewPersistance(formName, _programId, _layoutId, _currentLayoutViewId);
	}
	
	// When both the local program-layout and program object are pointing to table view(s)
	if (_currentLayoutViewId && _viewIdInProgramObject) {
		
		// When botht he ids are the same, skip operation
		if (_currentLayoutViewId == _viewIdInProgramObject) {
			globals.svy_nav_loadTableViewPersistance(formName, _programId, _layoutId, _currentLayoutViewId);
			return;
		}
		
		// Check if the view id hold in the program object is valid
		if (_userTableViewFs.find()) {
			_userTableViewFs.user_table_view_id = _viewIdInProgramObject;
			_userTableViewFs.layout_id = _layoutId;
			if (_userTableViewFs.search()) {
				
				// The view id in program object is correct. Reset the form obejct and apply table view persistence
				_tableViewObject[_layoutId.toString()] = _viewIdInProgramObject;
				_tableViewObject['currentLayoutId'] = _layoutId;
				globals.svy_nav_loadTableViewPersistance(formName, _programId, _layoutId, _viewIdInProgramObject);
			}
			else {
				
				// Load the table view as pointed by the local object for layout program
				forms[formName].dc_tableShowView('', '', '', '', '', _program, _currentLayoutViewId);
				
				// The view id in program object is incorrect. Set the form with the lacally pointing table view
				_tableViewObject[_layoutId.toString()] = _currentLayoutViewId;
				_tableViewObject['currentLayoutId'] = _layoutId;					// Set current layout id to use while saving table view persistence
				globals.svy_nav_loadTableViewPersistance(formName, _programId, _layoutId, _currentLayoutViewId);
			}
		}
	}
	forms[formName]['vTableViewInformation'] =  _tableViewObject
}
