/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6C621000-A54C-4E1B-B8A3-07A2BCEAD562",variableType:4}
 */
var vDidTreeViewInit = 0;

/**
 * Init the tree
 *
 * @author Sanneke Aleman
 * @since 2008-11-24
 * 
 * @param {Boolean} [_reset]
 * @return  none
 *
 * @properties={typeid:24,uuid:"eb2a7f84-594c-4e95-a09b-487aa0151666"}
 */
function init_tree(_reset)
{
	var _path;
	
	if (_reset) {
		vDidTreeViewInit = 0;
		_path = elements.dbtreeview.selectionPath;
		elements.dbtreeview.removeAllRoots();
	}

	if (vDidTreeViewInit == 0)
	{
		var _binding = elements.dbtreeview.createBinding(foundset.getDataSource())
		_binding.setImageMediaDataprovider('image18_18')
		_binding.setChildSortDataprovider('sort_calc');
		_binding.setNRelationName('nav_menu_items_to_nav_menu_items$parent_id');
		_binding.setTextDataprovider('display_description');
		_binding.setMethodToCallOnClick(treeNodeSelected, 'menu_item_id');	
		_binding.setMethodToCallOnDoubleClick(treeNodeSelected, 'menu_item_id');	
		_binding.setMethodToCallOnRightClick(treeNodeRightClick, 'menu_item_id');	
		elements.dbtreeview.addRoots(foundset);
		vDidTreeViewInit = 1
		
		if (_path) {
			elements.dbtreeview.selectionPath = _path;
		}
	}

}

/**
 * @properties={typeid:24,uuid:"BEE3C831-8BB6-4B72-A1E9-F093C2E8F639"}
 */
function loadTree() {
	var _fs = globals.svy_nav_getMenuItems();
	forms.svy_nav_fr_tree.controller.loadRecords(_fs);
	forms.svy_nav_fr_tree.init_tree(true)	
}

/**
 * Called when the user select a tree node, will navigate to a program
 *
 * @author Sanneke Aleman
 * @since 2011-12-27
 * @param {String|UUID} _menu_item_id Menu item id of the item you want to open
 * @properties={typeid:24,uuid:"2E45AB0F-FF47-40F1-A3A8-D7822A569408"}
 */
function treeNodeSelected(_menu_item_id) {
	globals.nav_menu_item_id = _menu_item_id

	globals.svy_nav_openMenuItem(null, _menu_item_id)
}

/**
 * Will show the right click menus in the navigation tree
 * @author Sanneke Aleman
 * @since 2011-06-15
 * @param {Object} _menu_item_id
 * @param {String} _tableName
 * @param {Number} _mouseX
 * @param {Number} _mouseY
 * @properties={typeid:24,uuid:"E1EAB011-5343-4142-85B2-3FC274BC3B28"}
 */
function treeNodeRightClick(_menu_item_id, _tableName, _mouseX, _mouseY) {	
	globals.nav_menu_item_id = _menu_item_id
	if (utils.hasRecords(_to_nav_menu_items) && utils.hasRecords(_to_nav_menu_items.nav_menu_items_to_nav_menu_items_context_menu))
	{
		//get the foundset
		var _fs = _to_nav_menu_items.nav_menu_items_to_nav_menu_items_context_menu
		var _rec, _menuitem
		//sort the foundset
		_fs.sort('sequence asc')
		//create menu
		var _popupmenu = plugins.window.createPopupMenu()

		for (var i = 1; i <= _fs.getSize(); i++) {
			_rec = _fs.getRecord(i)
			_menuitem = _popupmenu.addMenuItem(_rec.display_description, globals.svy_nav_callFunctionFromPopmenu)
			_menuitem.methodArguments = [_rec.function_id]
		}
		_popupmenu.show(_mouseX, _mouseY);
	}			
}

/**
 * @param {String} _layout_id
 * @properties={typeid:24,uuid:"C8B73D13-B673-429E-94F4-732971ED9DE3"}
 * @AllowToRunInFind
 */
function selectLayoutNode(_layout_id) {
	var _fs  = foundset.duplicateFoundSet()
	var _selectionPath
	if(_fs.find())
	{
		_fs.layout_id = _layout_id
		_fs.search()
	}
	
	var _rec
	if(utils.hasRecords(_fs))
	{
		
		_rec = _fs.getRecord(1)
		_selectionPath = addPath(_rec)
		
	}

	elements.dbtreeview.selectionPath = _selectionPath
}

/**
 * Get the selection path of a record
 * @param  {JSRecord<db:/svy_framework/nav_menu_items>} _rec
 *
 * @properties={typeid:24,uuid:"7EF210AD-11F9-40BA-B164-264597884233"}
 */
function addPath(_rec)
{
	if(utils.hasRecords(_rec.nav_menu_items_to_nav_menu_items$child_to_parent)) {
		return addPath(_rec.nav_menu_items_to_nav_menu_items$child_to_parent.getRecord(1)).concat([_rec.menu_item_id])
	}
	return [_rec.menu_item_id];
}
