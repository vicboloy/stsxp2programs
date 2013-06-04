/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"668688C0-AE16-4E41-BE51-7BBDA56D399F",variableType:-4}
 */
var vItems = [];

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"E1A11897-1649-4E22-ACC1-C46931B56494"}
 */
function updateUI() {
	vItems = globals.nav.recordHistory
	elements.tab.removeAllTabs()
	var _form = drawItems(vItems, 'record_history')
	elements.tab.addTab(forms[_form])
	forms[_form]['vParentForm'] = controller.getName()
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"21D3D7A1-A8BD-4854-BF97-946A501B8AC3"}
 */
function onClick(event) {
	var _item_nr = utils.stringRight(event.getElementName(), 1) * 1;
	
	if (_item_nr >= 0 && globals.nav.recordHistory[_item_nr]) {
		globals.nav.openNewTab = 1
		var _program = globals.nav.recordHistory[_item_nr].program
		var _pk = globals.nav.recordHistory[_item_nr].record_ids	
		var _layout_id = globals.nav.recordHistory[_item_nr].layout_id
		var _layoutObject = globals.nav.recordHistory[_item_nr].layoutObj
		
		if (_program && _pk) {
			
			// Show the layout with the record selected
			globals.svy_nav_showProgramRecord(_program, _pk, _layout_id, _layoutObject);
			
			// Hide History panel
			forms[globals.nav.mainFormName].elements['tab_popmenu'].visible = false;
		}
	}
}

/**
 * @properties={typeid:24,uuid:"AB0DCAFA-826B-4692-8500-E7D052AD459D"}
 */
function onRightClick(event) {
	
	// Show pop-up to remove the history
	var popupmenu = plugins.window.createPopupMenu()
	var _item_nr = utils.stringRight(event.getElementName(), 1) * 1
	var menuitem1 = popupmenu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.history_delete'), deleteHistory)
	menuitem1.methodArguments = [_item_nr]
	
	var source = event.getSource()
	if (source != null) {
		popupmenu.show(source);
	}
}

/**
 * Delete History and refresh history pop-up
 * 
 * @properties={typeid:24,uuid:"259F7A6C-FE47-4AA9-A5D2-55CAA7091F07"}
 */
function deleteHistory(arg1, arg2, arg3, arg4, arg5, _historynr) {
	
	// Remove History from Array
	globals.nav.recordHistory = globals.nav.recordHistory.slice(0, _historynr).concat(globals.nav.recordHistory.slice(_historynr + 1));
	
	// Refresh History pop-up
	forms[globals.nav.mainFormName].elements['tab_popmenu'].visible = false;
	forms[globals.nav.mainFormName].showRecordHistory();
}
