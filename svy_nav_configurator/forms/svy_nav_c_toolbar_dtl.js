/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"ADBC7905-1704-493E-9D55-CCF8308E50A2"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	controller.loadAllRecords()
	_super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7BFCBB95-1498-4B63-9D75-BDB5ED08D63F"}
 * @AllowToRunInFind
 */
function loadall(event) {
	controller.loadAllRecords()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A5EA4F12-C237-47D5-8E3F-B2778C4492AA"}
 */
function dc_duplicate(event) {
	var _rec_from = foundset.getRecord(controller.getSelectedIndex())
	var _answer = globals.DIALOGS.showInputDialog(i18n.getI18NMessage('svy.fr.lbl.toolbar'), i18n.getI18NMessage('svy.fr.lbl.toolbar_name'), _rec_from.name + '_copy')
	if(_answer == null || _answer == '') // cancel duplication
	{
		return
	}
	
	controller.duplicateRecord()
	var _rec_to = foundset.getRecord(controller.getSelectedIndex())
	
	_rec_to.name = _answer

	for (var i = 1; i <= _rec_from.nav_toolbar_to_nav_toolbar_item.getSize(); i++) {
		_rec_from.nav_toolbar_to_nav_toolbar_item.setSelectedIndex(i)
		_rec_from.nav_toolbar_to_nav_toolbar_item.duplicateRecord(i)
		_rec_from.nav_toolbar_to_nav_toolbar_item.toolbar_id = _rec_to.toolbar_id
		databaseManager.saveData()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7784AE4-53F3-4568-B313-942796E2DB2E"}
 * @AllowToRunInFind
 */
function enterSampleToolbars(event) {
		
		/** @type {JSFoundset<db:/svy_framework/nav_toolbar>} */
		var fsToolbar = databaseManager.getFoundSet(globals.nav_db_framework,'nav_toolbar')
		
		//Toolbar RecordEdit
		fsToolbar.newRecord()
		fsToolbar.name = 'Record edit'
		fsToolbar.alignment = 1 //left
		fsToolbar.flag_default = 1
		fsToolbar.default_sortorder = 1
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		var recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//new record
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.record_new'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_new'
		recToolbarItem.image_url = 'pv_tb_new.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 1
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Edit record
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.record_edit'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_edit'
		recToolbarItem.image_url = 'pv_tb_edit.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 2
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Delete record
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.record_delete'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_delete'
		recToolbarItem.function_type_r = 1 //toolbar function
		recToolbarItem.toolbar_function_r = 'dc_deletePopmenu'
		recToolbarItem.image_url = 'pv_tb_delete.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 3
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Duplicate record
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.record_duplicate'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 1
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_duplicate'
		recToolbarItem.image_url = 'pv_tb_duplicate.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 4
		
		//Toolbar report and methods
		fsToolbar.newRecord()
		fsToolbar.name = 'Popmenus Reports & Methods'
		fsToolbar.alignment = 1 //left
		fsToolbar.flag_default = 1
		fsToolbar.default_sortorder = 2
		
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Report popmenu
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.print'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_popupChildren'
		recToolbarItem.image_url = 'pv_tb_print.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 1
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Method popmenu
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.functions'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_popupChildren'
		recToolbarItem.image_url = 'pv_tb_functions.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 2
		
		
		//Toolbar advanced functions
		fsToolbar.newRecord()
		fsToolbar.name = 'Advanced functions'
		fsToolbar.alignment = 1 //left
		fsToolbar.flag_default = 1
		fsToolbar.default_sortorder = 3
		
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//sort
		recToolbarItem.access_type = 'M' //main
		recToolbarItem.description = 'i18n:svy.fr.lbl.order'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_sort'
		recToolbarItem.image_url = 'pv_tb_sort.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 1
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Search
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.search'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_findPopmenu'
		recToolbarItem.image_url = 'pv_tb_search.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 2
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Search options
		recToolbarItem.access_type = 'M' //main
		recToolbarItem.description = 'i18n:svy.fr.lbl.search_options'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_searchPopmenu'
		recToolbarItem.image_url = 'pv_tb_search_advanced.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 3
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Load all data
		recToolbarItem.access_type = 'M' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.rec_all'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_loadAll'
		recToolbarItem.image_url = 'pv_tb_show_all.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 4
	
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Export
		recToolbarItem.access_type = 'M' //main
		recToolbarItem.description = 'i18n:svy.fr.lbl.export'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_loadAll'
		recToolbarItem.image_url = 'pv_tb_export.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 5
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Required fields
		recToolbarItem.access_type = 'M' //main
		recToolbarItem.description = 'i18n:svy.fr.lbl.enter_required_field_mode'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 1
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_setRequiredFields'
		recToolbarItem.image_url = 'pv_tb_check.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 6
		
		//Toolbar view
		fsToolbar.newRecord()
		fsToolbar.name = 'Views'
		fsToolbar.alignment = 2 //right
		fsToolbar.flag_default = 1
		fsToolbar.default_sortorder = 4
		
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//detail view
		recToolbarItem.access_type = 'M' //main
		recToolbarItem.description = 'i18n:svy.fr.lbl.view_details'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 1
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_showDetail'
		recToolbarItem.image_url = 'pv_tb_details.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 1
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//table view
		recToolbarItem.access_type = 'M' //main
		recToolbarItem.description = 'i18n:svy.fr.lbl.view_list'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_showTable'
		recToolbarItem.function_type_r = 1 //toolbar function
		recToolbarItem.toolbar_function_r = 'dc_tablePopmenu'
		recToolbarItem.image_url = 'pv_tb_list.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 2
		
		
		//Toolbar save cancel
		fsToolbar.newRecord()
		fsToolbar.name = 'Save/Cancel'
		fsToolbar.alignment = 2 //right
		fsToolbar.flag_default = 1
		fsToolbar.default_sortorder = 5
		
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//save
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.save_record'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 1
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_save'
		recToolbarItem.image_url = 'pv_tb_save.png'
		recToolbarItem.mode_type = 'edit\nfind\nrequired_fields'
		recToolbarItem.sequence = 1
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//cancel
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.cancel'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_cancel'
		recToolbarItem.image_url = 'pv_tb_cancel.png'
		recToolbarItem.mode_type = 'edit\nfind\nrequired_fields'
		recToolbarItem.sequence = 2
		
		
		//Toolbar record navigation
		fsToolbar.newRecord()
		fsToolbar.name = 'Record navigation'
		fsToolbar.alignment = 2 //right
		fsToolbar.flag_default = 1
		fsToolbar.default_sortorder = 6
		
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//first rec
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.rec_first'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 1
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_recFirst'
		recToolbarItem.image_url = 'pv_tb_first_record.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 1
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//prev rec
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.rec_prev'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_recPrev'
		recToolbarItem.image_url = 'pv_tb_prev_record.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 2
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Record info
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.record_information'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_recInfo'
		recToolbarItem.image_url = 'pv_tb_info.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 3
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//next rec
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.rec_next'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_recNext'
		recToolbarItem.image_url = 'pv_tb_next_record.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 4
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//last rec
		recToolbarItem.access_type = 'A' //all
		recToolbarItem.description = 'i18n:svy.fr.lbl.rec_last'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 0
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_recLast'
		recToolbarItem.image_url = 'pv_tb_last_record.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 5
		
		
		//Toolbar Help
		fsToolbar.newRecord()
		fsToolbar.name = 'Help'
		fsToolbar.alignment = 2 //right
		fsToolbar.flag_default = 1
		fsToolbar.default_sortorder = 6
		
		
		fsToolbar.nav_toolbar_to_nav_toolbar_item.newRecord()
		recToolbarItem = fsToolbar.nav_toolbar_to_nav_toolbar_item.getSelectedRecord()
		
		//Help
		recToolbarItem.access_type = 'M' //main
		recToolbarItem.description = 'i18n:svy.fr.lbl.help'
		recToolbarItem.flag_i18n = 1
		recToolbarItem.flag_splitter = 1
		recToolbarItem.function_type = 1 //toolbar function
		recToolbarItem.toolbar_function = 'dc_help'
		recToolbarItem.image_url = 'pv_tb_help.png'
		recToolbarItem.mode_type = 'browse'
		recToolbarItem.sequence = 1
		
		databaseManager.saveData()
		controller.loadAllRecords()
		
}
