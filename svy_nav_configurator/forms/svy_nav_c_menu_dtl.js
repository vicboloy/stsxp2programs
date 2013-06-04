/**
 *	Delete a record
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"94202007-F180-4041-9210-A3C0950CC6BC"}
 */
function deleteRecord()
{
	controller.deleteRecord()
}

/**
 *	On record selection, calls set_i18n_Fields
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * 
 * @param {JSEvent} _event
 * @param {Boolean} [_select]
 * @return  none
 * 
 * @properties={typeid:24,uuid:"603002BD-03D6-4E8E-BF71-1B10EB5589DB"}
 * @AllowToRunInFind
 */
function refreshTree(_event,_select)
{
	databaseManager.saveData()
	// set the tree with the right items
	/** @type {JSFoundSet<db:/svy_framework/nav_menu_items>} */  
	var _foundset = databaseManager.getFoundSet(forms.svy_nav_c_menu_item_dtl.controller.getDataSource())
	
	if(_foundset.find())
	{
		_foundset.menu_id = menu_id
		_foundset.parent_id = '^'
		_foundset.sort('sort_order asc')
		var _found = _foundset.search()
	
		elements.tree.removeAllRoots()
		var _binding = elements.tree.createBinding(_foundset.getDataSource())
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
			// Workaround for web client to show the node icon
			_binding.setImageMediaDataprovider("calc_fg_image_webclient");
		}
		else {
			_binding.setImageURLDataprovider("no_image");
		}
		_binding.setChildSortDataprovider('sort_calc');
		_binding.setNRelationName('nav_menu_items_to_nav_menu_items$parent_id');
		_binding.setTextDataprovider('display_description_bg');
		_binding.setCallBackInfo(globals['svy_nav_c_nodeSelected'], 'menu_item_id');
		elements.tree.addRoots(_foundset);
		
		if(_found > 0 && _select)
		{
			elements.tree.selectionPath = [_foundset.menu_item_id]
		}
		else if(_select)
		{
			forms.svy_nav_c_menu_item_dtl.foundset.unrelate()
			forms.svy_nav_c_menu_item_dtl.foundset.clear()
		}
		
	}
	forms['svy_nav_fr_tree'].init_tree(true);

	
}

/**
 *	Reload the nav object, calls globals.svy_nav_init
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"82FB1B7E-094F-4CC4-B1FA-1AAA1BB2FA93"}
 */
function reloadMenu()
{
	globals['svy_nav_init']();
}

/**
 *	Load all records in the foundset
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"FA5BF615-D5BF-44FF-845D-7D08E16E0788"}
 */
function showAllRecords()
{
	foundset.loadAllRecords()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DACB9A38-5E05-4F87-9F09-5B45DE884E1E"}
 */
function newMenuItem(event) {
	
	var _answer;
	if (forms.svy_nav_c_menu_item_dtl.controller.getMaxRecordIndex() > 0) {
		var _root = i18n.getI18NMessage('svy.fr.lbl.root')
		var _child = i18n.getI18NMessage('svy.fr.lbl.child')
		_answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_new'), i18n.getI18NMessage('svy.fr.dlg.newmenu'), _root, _child);

	} else {
		_answer = i18n.getI18NMessage('svy.fr.lbl.root');
	}

	//cancel
	if (!_answer)return

	gotoEdit()
	var _menu_item_id;
	if (_answer == _child) {
		_menu_item_id = forms.svy_nav_c_menu_item_dtl.menu_item_id
	}

	nav_menu_to_nav_menu_items.newRecord()

	forms.svy_nav_c_menu_item_dtl.controller.loadRecords(nav_menu_to_nav_menu_items)

	if (_answer == _child) {
		forms.svy_nav_c_menu_item_dtl.parent_id = _menu_item_id
	}
	
	// calculate selectionPath
	var currentRecord = nav_menu_to_nav_menu_items.getSelectedRecord();
	var path = new Array();
	if (utils.hasRecords(currentRecord.nav_menu_items_to_nav_menu_items$child_to_parent)) {
		do {
			path.push(currentRecord.menu_item_id);
			if (utils.hasRecords(currentRecord.nav_menu_items_to_nav_menu_items$child_to_parent)) {
				currentRecord = currentRecord.nav_menu_items_to_nav_menu_items$child_to_parent.getRecord(1);
			}
		} while (utils.hasRecords(currentRecord.nav_menu_items_to_nav_menu_items$child_to_parent));
		path.push(currentRecord.menu_item_id);
	} else {
		path.push(currentRecord.menu_item_id);
	}
	refreshTree(event);
	path.reverse();
	elements.tree.selectionPath = path;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} _event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7065435-34CB-4DF5-8BB5-A57DFFB53429"}
 */
function deleteMenuItem(_event) {
	
	forms.svy_nav_c_menu_item_dtl.dc_delete(_event)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} _firstShow form is shown first time after load
 * @param {JSEvent} _event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9729E8BF-43FF-4880-94A3-B34AB9D22B23"}
 * @AllowToRunInFind
 */
function onShow(_firstShow, _event) {
	_super.onShow(_firstShow, _event)
	if(_firstShow)
	{
		controller.loadAllRecords()
	}
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"3E8502EF-62CB-449F-B7F2-8F4C583A8BCE"}
 */
function onPreSave(event) {
	refreshTree(event);
	return _super.onPreSave.apply(this, arguments); // try to pass the arguments as a normal method call: _super.onPreSave(arg1,arg2)
}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C23A974F-19EF-4CED-B99C-7956B9C08154"}
 */
function dc_duplicate(event) {
	/** @type {JSRecord<db:/svy_framework/nav_menu>} */
	var menuRecOrg = foundset.getRecord(controller.getSelectedIndex())
	controller.duplicateRecord()
	
	/** @type {JSRecord<db:/svy_framework/nav_menu>} */
	var menuRecDup = foundset.getSelectedRecord();
	var menuItemRecFrom, menuItemRecDup;
	var rootFS = menuRecOrg.nav_menu_to_nav_menu_items$root
	for (var i = 1; i <= rootFS.getSize(); i++) {
		rootFS.setSelectedIndex(i);
		menuItemRecFrom = rootFS.getSelectedRecord();
		rootFS.duplicateRecord();
		menuItemRecDup = rootFS.getSelectedRecord();
		menuItemRecDup.menu_id = menuRecDup.menu_id;
		
		databaseManager.saveData(menuItemRecDup);
		duplicateMenuItemChildren(menuItemRecFrom, "nav_menu_items_to_nav_menu_items$parent_id", menuItemRecDup.menu_item_id, menuItemRecDup.menu_id);
	}
	menuRecDup.name = menuRecOrg.name + "_copy";
	databaseManager.saveData(menuRecDup);
	refreshTree(event)
	

	/**
	 * @param {JSRecord<db:/svy_framework/nav_menu_items>} record
	 * @param {String} relation
	 * @param {UUID} parentId
	 * @param {UUID} menuId
	 */ 
	function duplicateMenuItemChildren(record, relation, parentId, menuId) {
		/** @type {JSRecord<db:/svy_framework/nav_menu_items>} */
		var recFrom;
		/** @type {JSRecord<db:/svy_framework/nav_menu_items>} */
		var recDup;
		for (var j = 1; j <= record[relation].getSize(); j++) {
			record[relation].setSelectedIndex(j);
			recFrom = record[relation].getSelectedRecord();
			record[relation].duplicateRecord();
			recDup = record[relation].getSelectedRecord();
			recDup.parent_id = parentId;
			recDup.menu_id = menuId;
			databaseManager.saveData(recDup);
			duplicateMenuItemChildren(recFrom, relation, recDup.menu_item_id, menuId);
		}
	}
}
