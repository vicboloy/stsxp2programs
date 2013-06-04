/**
 *	Opens the configurator screen in a dialog, if you are administrator
 *
 * @author Sanneke Aleman
 * @since 2007-11-04
 *
 * @properties={showInMenu:true,typeid:24,uuid:"edeba2e0-4e6d-4654-8a7f-ba43c5acb034"}
 */
function _1_svy_nav_openNavigationForm() {
	if (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER) {
		globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_main, -1, -1, -1, -1, null, true, false, 'Configurator')
	}
}

/**
 * Method that selects the right record in the menu configurator
 * @author Sanneke Aleman
 * @since 2010-02-18
 * @param {Number} _menu_item_id the id of the menu item
 * @properties={typeid:24,uuid:"D7B95EEB-86AC-4347-8AD8-58A2B2AA22D9"}
 * @AllowToRunInFind
 */
function svy_nav_c_nodeSelected(_menu_item_id) {

	/** @type {JSFoundSet<db:/svy_framework/nav_menu_items>} */
	var _foundset = databaseManager.getFoundSet(forms.svy_nav_c_menu_item_dtl.controller.getDataSource())

	if (_foundset.find()) {
		_foundset.menu_item_id = _menu_item_id
		_foundset.search()
	}
	forms.svy_nav_c_menu_item_dtl.controller.loadRecords(_foundset)
}

/**
 *	To show an array as a popup where you can edit
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {String}	_array you want to edit
 * @param {String}	_form you want to save youre edited array to
 * @param {String}	_field you want to save youre edited array to
 * @return  none
 *
 * @properties={typeid:24,uuid:"99af8973-092c-4fe4-96ed-f5a6bd6b48c6"}
 */
function svy_nav_arrayEdit(_array, _form, _field) {
	globals.nav.arrayForm = _form
	globals.nav.arrayField = _field
	var _dataset = databaseManager.createEmptyDataSet(0,0)
	_dataset.addColumn('data_field')
	_dataset.addColumn('sort_field')
	for (var i = 0; i < _array.length; i++) {
		_dataset.addRow([_array[i], i])
	}

	var _datasource = _dataset.createDataSource('array_table', [JSColumn.TEXT, JSColumn.INTEGER]);
	var jsForm = solutionModel.getForm('svy_nav_c_array_editor')
	jsForm.dataSource = _datasource
	var jsField = jsForm.getField('sort_field')
	jsField.dataProviderID = 'sort_field'
	jsField = jsForm.getField('data_field')
	jsField.dataProviderID = 'data_field'
	forms.svy_nav_c_array_editor.controller.recreateUI()
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_array_editor, -1, -1, 318, 318)

}

/**
 * @properties={typeid:24,uuid:"C37FEF04-15BC-42D6-AE20-86FFF82F2F84"}
 */
function svy_nav_c_init_properties() {
	forms.svy_nav_c_properties.initSetProperties(null, false);
}
