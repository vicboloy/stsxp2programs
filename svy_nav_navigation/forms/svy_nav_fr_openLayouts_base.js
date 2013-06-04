/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9F6C0F9B-B3E5-45E9-A7EB-D133FC068DE8",variableType:4}
 */
var vItemWidth = 100;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C259569-695C-4960-8A30-7456B745B53D"}
 */
var vTabNames = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB4D825E-D221-4DE2-A0BF-172B60D47061",variableType:4}
 */
var vItemHeight = 20;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D4CB67D-2A5F-4414-8C97-B584A3AC1101",variableType:4}
 */
var vItemSpacing = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A43B8126-BEA0-4942-A51B-E43817D4658A",variableType:4}
 */
var vXOffset = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3C20559F-5080-47E8-94BD-B7049363F972",variableType:4}
 */
var vYOffset = 0;

/**
 * @type {Array<{layout_id:UUID, openTab_id:String, fs:JSFoundset, desc:String, layoutObj: Object}>}
 *
 * @properties={typeid:35,uuid:"F46E75CA-9B5F-4AD4-BFE4-C35B939AB3D3",variableType:-4}
 */
var vOpenTabs = [];

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"35FD468C-09B7-4298-81E7-04765F7D473B",variableType:4}
 */
var vSelectedTab = -1;

/**
 * Draws the tabs based on the info in vOpenTabs and vSelectedTab
 * This method should NEVER change the values in those variables!
 * 
 * @param {JSEvent} [event]
 * 
 * @properties={typeid:24,uuid:"D03F3954-2B60-4565-A269-59AD7E7C03C9"}
 */
function updateUI(event) {
	/**@type {RuntimeTabPanel}*/
	var popmenuTab = forms[globals.nav.mainFormName].elements["tab_popmenu"];
	if (popmenuTab && popmenuTab.getTabFormNameAt(popmenuTab.tabIndex) == "svy_nav_fr_popmenuDocuments") {
		forms[globals.nav.mainFormName].elements["tab_popmenu"].visible = false; 		//close documents pop up
	}
	
	solutionModel.revertForm(controller.getName());
	drawAllItems();
	controller.recreateUI();
	
	if (vSelectedTab == -1) {
		//SA: was cosing problems for the first tab.
//		globals.nav_layout_id = null;
//		loadStartForm(_event);
	}
//	else if (globals.nav_layout_id != vOpenTabs[vSelectedTab]) {
//		globals.nav_layout_id = vOpenTabs[vSelectedTab];
//		forms[globals.nav.mainFormName].layoutShow(event, vOpenTabs[vSelectedTab]);
//	}
}

/**
 * Called when layout is opened
 * 
 * @properties={typeid:24,uuid:"DBE224C3-FC8B-4C78-8706-1BE0D09E827B"}
 */
function addLayout(_layout_id) {
	_layout_id = _layout_id.toString();
	
	if (vOpenTabs.length == 1 && vOpenTabs[0] == null) {
		vOpenTabs = [];
	}
	
	if (globals.svy_nav_multi_tab_programs || (!globals.svy_nav_multi_tab_programs && vOpenTabs.map(function (item) { return item.layout_id.toString();}).indexOf(_layout_id.toString()) == -1)) {
		//using multitabs or tab isn't opened yet. -> add extra tab
		/** @type {{layout_id:UUID, openTab_id:String, fs:JSFoundset, desc:String, layoutObj: Object}} */
		var _tabObj = {layout_id:_layout_id, openTab_id:application.getUUID().toString()};
//		if (globals.svy_nav_multi_tab_programs) {
//			//save foundset
//			_tabObj.fs = 1;
//		}
		
		vOpenTabs.push(_tabObj);
		vSelectedTab = vOpenTabs.length-1;
	} else {
		//tab already open -> show as selected
		vSelectedTab = vOpenTabs.map(function(x) { return x.layout_id;}).indexOf(_layout_id); //returns index of object in vOpentabs with obj.layout_id == _layout_id
	}

	updateUI();
}

/**
 * Returns number of slots that fit on the screen
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"689EC4EE-0B61-4ADA-AA66-57AB1761C1C9"}
 */
function getMaxSlotCount() {
//TODO: Disabled this, it caused forms to be loaded to early. Check in both clients if this causes problems when having more open tabs than fit on the screen.
//	application.updateUI(); //Needed because otherwise getFormWidth() doesn't always returns correct form width
	
	var _cnt = Math.floor(controller.getFormWidth() / getSlotSize());
	return Math.max(_cnt, 3);
}

/**
 * Returns size in pixels of 1 slot
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"5260348F-005D-4E70-B6F5-7A50135B4082"}
 */
function getSlotSize() {
	return 100;
}

/**
 * Can be used to initialize form variables
 * 
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AAB79CF2-08B0-4ADA-9526-6E7525E09D38"}
 */
function onLoad(event) {

}

/**
 * @param {JSEvent} event
 * @param {Number} [_forcedTabNr]
 *
 * @properties={typeid:24,uuid:"9F08EC21-90FE-4F3E-8BE9-7AC1B0A5E97E"}
 */
function openLayout(event, _forcedTabNr) {
	var _element = "";
	if (event) {
		_element = event.getElementName();
	}
	var _slot = _forcedTabNr != null ? _forcedTabNr : _element.replace(/[^\d]/g, "")*1;

	forms[globals.nav.mainFormName].layoutSwitch(event, vOpenTabs[_slot].layout_id, vOpenTabs[_slot].layoutObj, null, vSelectedTab, _slot);
//	vSelectedTab = _slot;
	
	updateUI(event);
}

/**
 * @param {Number} _index
 * @param {Number} _parentIndex
 * @param {Boolean} _isSelected
 * @param {String} _parentText
 * @param {String} _text
 * @param {JSEvent} _event
 * @param {Number} _forcedTabNr
 *

 * @properties={typeid:24,uuid:"E0BE469C-6470-4886-8E53-8717A1CD479C"}
 */
function openLayoutHelper(_index, _parentIndex, _isSelected, _parentText, _text, _event, _forcedTabNr) {
	openLayout(_event, _forcedTabNr);
}

/**
 * @properties={typeid:24,uuid:"AE0D995F-D13F-4155-91ED-E48E081F7102"}
 */
function setRecordInfoText(_programDesc, _recordDesc, _searchDesc, _relatedText) {
	setSlotText(vSelectedTab, _to_nav_layout.description + " - " + _recordDesc)
}

/**
 * @param {JSEvent} event
 * @param {Number} [_slot]
 * 
 * @return {Boolean} 
 * 
 * @properties={typeid:24,uuid:"A6540AC4-4D9B-4FD4-B376-9E4C046ED14E"}
 */
function closeTab(event, _slot) {
	
	if (event == null && _slot == null) {
		return false;
	}
	if (_slot == null) {
		var _element = event.getElementName();
		_slot = _element.replace(/\D+/g,"") * 1;
	}
	//check if there are edited records for this slot
	if (hasOpenEdits(_slot)) {
		if (_slot == vSelectedTab) {
			globals.DIALOGS.showWarningDialog(i18n.getI18NMessage("svy.fr.lbl.warning"),i18n.getI18NMessage("svy.fr.dlg.cannot_close_save_first"), i18n.getI18NMessage("svy.fr.lbl.ok"));
		} else {
			var _open_layout = i18n.getI18NMessage("svy.fr.lbl.open_layout");
			var _cancel = i18n.getI18NMessage("svy.fr.lbl.cancel");
			var _button = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage("svy.fr.lbl.warning"), i18n.getI18NMessage("svy.fr.dlg.close_layout_unsaved_changes"), _open_layout, _cancel);
			
			if (_button == _open_layout) {
				openLayout(event, _slot);
			}
		}
		return false;
	}
	
	var _openDifferentLayout = false;
	if (_slot < vSelectedTab) {
		vSelectedTab--;
	} else if (_slot == vSelectedTab) {//close selected
		_openDifferentLayout = true;
		if (vSelectedTab == vOpenTabs.length-1) { //close rightmost
			vSelectedTab--;
		}
	}
	vOpenTabs = vOpenTabs.slice(0,_slot).concat(vOpenTabs.slice(_slot+1));

	if (vOpenTabs.length == 0) { //last tab closed
		loadStartForm(event)
	} else if (_openDifferentLayout) {
		openLayout(event, vSelectedTab)
	}
	
	updateUI(event);
	return true;
}

/**
 * Checks if layout at given slot has unsaved changed records. Returns the program name of the program with the changes
 * 
 * @param {Number} _slot
 * 
 * @return {Boolean} 
 *
 * @properties={typeid:24,uuid:"23ABCFAA-1EDD-433B-8C1B-6D062EB3F6F1"}
 */
function hasOpenEdits(_slot) {
	for (var j = 0; j < globals.nav.openEdits.length; j++) {
		if (globals.nav.openEdits[j].layout_id == vOpenTabs[_slot].layout_id) {
			return true;
		}
	}
	return false;
}

/**
 * @param {Number} _index
 * @param {Number} _parentIndex
 * @param {Boolean} _isSelected
 * @param {String} _parentText
 * @param {String} _text
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"41932B12-D1E6-496B-B9AE-E3543E3D1354"}
 */
function closeTabHelper(_index, _parentIndex, _isSelected, _parentText, _text, _event) {
	closeTab(_event);
}

/**
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"6294010E-75D2-41F4-9E47-B0D6F766D994"}
 */
function closeCurrentTab(event) {
	closeTab(event, vSelectedTab);
}

/**
 * Closes the other tabs than the one clicked on. If tabs have unsaved changes, those tabs will not be closed and the method returns false
 * 
 * @param {JSEvent} event
 * 
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"BC98D0BE-45F8-494F-B1D9-A8705E77A788"}
 */
function closeOtherTabs(event) {
	var _element = event.getElementName()
	var _tab = _element.replace(/\D+/g,"") * 1;
	var _switch = (_tab != vSelectedTab);
	
	var _layout_id = vOpenTabs[_tab].layout_id;
	
	var _success = closeTabs(false, _tab, _layout_id);
	
	if (_switch) {
		forms[globals.nav.mainFormName].layoutSwitch(event, _layout_id);
	}
	updateUI(event);
	return _success;
}

/**
 * Closes tabs and return true if successful. When there are tabs with unsaved records, they will not be closed and false will be returned. 
 * 
 * @param {Boolean} [_closeAll]
 * @param {Number} [_tab]
 * @param {UUID} [_layout_id] If this is passed the tab showing this layout will not be closed. (used when clicking "close other tabs")
 * 
 * @returns Boolean
 *
 * @properties={typeid:24,uuid:"8B0E9021-77B6-40DC-9285-C29021097A8C"}
 */
function closeTabs(_closeAll, _tab, _layout_id) {
	if (_tab == undefined) {
		_tab = -1;
	}
	if (_closeAll == undefined) {
		_closeAll = true;
	}
	
	var _remainingTabs = [];
	var _newSelected = -1;
	var _success = true;
	for (var i = 0; i < vOpenTabs.length; i++) {
		if (!_closeAll && _layout_id && vOpenTabs[i].layout_id == _layout_id) {
			_remainingTabs.push(vOpenTabs[i]);
			_newSelected++;
			continue;
		}
		for (var j = 0; j < globals.nav.openEdits.length; j++) {
			if (vOpenTabs[i].layout_id == globals.nav.openEdits[j].layout_id) {
				_remainingTabs.push(vOpenTabs[i]);
				if (_closeAll || i < _tab) {
					_newSelected++;
				}
				_success = false; //not all "other" tabs could be closed
				break;
			}
		}
	}
	vOpenTabs = _remainingTabs;
	vSelectedTab = _newSelected;
	
	if (!_success) {
		globals.DIALOGS.showWarningDialog(i18n.getI18NMessage("svy.fr.lbl.warning"), i18n.getI18NMessage("svy.fr.dlg.cannot_close_all_save_first"), i18n.getI18NMessage("svy.fr.lbl.ok"));
	}
	
	return _success;
}

/**
 * @param {Number} _index
 * @param {Number} _parentIndex
 * @param {Boolean} _isSelected
 * @param {String} _parentText
 * @param {String} _text
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"1C8FC4C8-CA27-4CE0-8C09-CC9DB761BABC"}
 */
function closeOtherTabsHelper(_index, _parentIndex, _isSelected, _parentText, _text, _event) {
	closeOtherTabs(_event);
}

/**
 * @param {JSEvent} event
 * 
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"354F5CB2-ACB6-47A0-B937-B1BB99EC5F34"}
 */
function closeAllTabs(event) {
	var _success = closeTabs();

	if (_success) {
		updateUI();
		loadStartForm(event);
	} else {
		updateUI(event)
		forms[globals.nav.mainFormName].layoutSwitch(event, vOpenTabs[vSelectedTab].layout_id, null, null, null, vSelectedTab);
	}
	return _success;
}

/**
 * @param {Number} _index
 * @param {Number} _parentIndex
 * @param {Boolean} _isSelected
 * @param {String} _parentText
 * @param {String} _text
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"01CBBECD-4BA2-4576-861A-B2662A8BE4AA"}
 */
function closeAllTabsHelper(_index, _parentIndex, _isSelected, _parentText, _text, event) {
	closeAllTabs(event);
}

/**
 * @properties={typeid:24,uuid:"A6CA6507-F0B5-4C90-982C-E996DC022A82"}
 */
function getStartFormName() {
	return forms[globals.nav.mainFormName].getStartFormName();
}

/**
 * Loads startup form/program
 * 
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"5220C15C-8B48-4E5F-8518-FAC047176D0F"}
 */
function loadStartForm(event) {
	forms[globals.nav.mainFormName].loadStartForm();
}

/**
 * @properties={typeid:24,uuid:"281A600E-7EB7-4F2D-A3D6-058A1670003D"}
 */
function drawAllItems() {
	var _max = Math.min(vOpenTabs.length, getMaxSlotCount());
	
	//Make sure the selectedTab is always shown on the screen, not in the popupmenu
	if (vSelectedTab && vSelectedTab >= _max) {
		//Selected tab doesn't fit on screen -> swap it to the last visible position
		var _selected = vOpenTabs[vSelectedTab];
		var _start = vOpenTabs.slice(0,_max-1);
		var _middle = vOpenTabs.slice(_max-1,vSelectedTab);
		var _end = vOpenTabs.slice(vSelectedTab+1);
		vOpenTabs = _start.concat([_selected], _middle, _end);
		vSelectedTab = Math.min(vOpenTabs.length-1, getMaxSlotCount()-1); //the selected tab is now the last(rightmost) visible tab
	}
	
	for (var i = 0; i < _max; i++) {
		drawItem(i, (i==vSelectedTab ? true : false) );
	}
	if (_max < vOpenTabs.length) {
		drawExtraTabsButton();
	}
}

/**
 * Draw one tab on the form
 * @param {Number} _slot The number of the slot where the tab should be drawn
 * @param {Boolean} _selected
 * 
 * @properties={typeid:24,uuid:"90595863-A32A-4AA5-85FB-4A25205F2E9C"}
 */
function drawItem(_slot, _selected) {
}

/**
 * @properties={typeid:24,uuid:"C52D19D0-C64D-4B13-9EDF-6CBEE7FAEC2D"}
 */
function drawExtraTabsButton() {
	
	var _jsForm = solutionModel.getForm(controller.getName());
	var _method = _jsForm.getMethod("showExtraTabs");
	var _btnExtraTabs = _jsForm.newButton("", (getMaxSlotCount()*getSlotSize()), 5, 20, 20, _method);
	_btnExtraTabs.transparent = true;
	_btnExtraTabs.showClick = false;
	_btnExtraTabs.imageMedia = solutionModel.getMedia("pv_tabs_more_complete.png");
	_btnExtraTabs.rolloverImageMedia = solutionModel.getMedia("pv_tabs_more_complete_sel.png")
	_btnExtraTabs.name = "btnExtraTabs";
	_btnExtraTabs.formIndex = 12000;
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"ED1FF5E8-9DA3-453D-853C-599F53C3D586"}
 */
function showExtraTabs(event) {
	var _max = getMaxSlotCount();
	var _menu = plugins.window.createPopupMenu()

	/** @type {JSRecord<db:/svy_framework/nav_layout>} */
	var _layoutRec;
	var _item;
	for (var j = _max; j < vOpenTabs.length; j++) {
		_layoutRec = scopes.modUtils$data.getRecord('db:/' + globals.nav_db_framework + '/nav_layout', vOpenTabs[j].layout_id);
		_item = _menu.addMenuItem(_layoutRec.display_description, openLayoutHelper)
		//add arguments to the method call
		_item.methodArguments = [null, j];
	}
	
	var _source = event.getSource()
	if (_source != null) {
		_menu.show(_source);
	}
}

/**
 * @param {Number} _slot
 *
 * @return {String} the text that should be shown in the provided slot
 * 
 * @properties={typeid:24,uuid:"C6E1D1C4-CC88-402B-AF4B-7A5D889A77C4"}
 */
function getSlotText(_slot) {
	
	if (vOpenTabs[_slot].desc) {
		return vOpenTabs[_slot].desc;
	}
	
	var _layout_id = vOpenTabs[_slot].layout_id;
	var _openTab_id = vOpenTabs[_slot].openTab_id;
	
	/** @type {JSRecord<db:/svy_framework/nav_layout>} */
	var _layout = scopes.modUtils$data.getRecord('db:/' + globals.nav_db_framework + '/nav_layout', _layout_id);
	
	if (!globals.svy_nav_multi_tab_programs) {
		return _layout.display_description;
	} else {
		var _desc = _layout.display_description;
		if (databaseManager.hasRecords(_layout.nav_layout_to_nav_tab.nav_tab_to_nav_program)) {
			var _dp = _layout.nav_layout_to_nav_tab.nav_tab_to_nav_program.display_field_header;
			
			var _histIndex = globals.nav.stack.map(function (x) { return x.openTab_id; }).indexOf(_openTab_id);
			if (_histIndex > -1) {
				//tab exist in history -> get description from history foundset
				_desc += " - " + globals.nav.stack[_histIndex].panels[0].foundset[_dp];
			} else {
				//tab doesn't exist in history yet -> it is the current form
				var _tabFormName = "ly_" + _layout.name + "_p1_t1";
				if (forms[_tabFormName]) {
					var _formName = forms[_tabFormName].elements.form.getTabFormNameAt(1);
					_desc += " - " + forms[_formName][_dp];
				}
			}
		}
		return _desc;
	}
}

/**
 * @param {Number} _slot
 * @param {String} _desc
 *
 * @properties={typeid:24,uuid:"17475B75-9E66-43CF-BECA-E9F6EE0245EC"}
 */
function setSlotText(_slot, _desc) {
	vOpenTabs[_slot].desc = _desc;
}

/**
 * Returns
 * @param {Number} _slot
 * @return {{x:Number, y:Number}}
 *
 * @properties={typeid:24,uuid:"00B4FECF-8BC7-438F-8F9B-4621186A6317"}
 */
function getSlotCoordinates(_slot) {
	var _x = vXOffset + _slot*(vItemWidth + vItemSpacing);
	var _y = vYOffset;
	
	return {x:_x, y:_y};
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F2EA1A87-B4DE-462B-9D57-2091673EF6BD"}
 */
function openContextMenu(event) {
	var _popupmenu = plugins.window.createPopupMenu()

	var _closeTab = _popupmenu.addMenuItem(i18n.getI18NMessage("svy.fr.lbl.close_tab"), closeTabHelper);
	var _closeAllTabs = _popupmenu.addMenuItem(i18n.getI18NMessage("svy.fr.lbl.close_all_tabs"), closeAllTabsHelper);
	var _closeOtherTabs = _popupmenu.addMenuItem(i18n.getI18NMessage("svy.fr.lbl.close_other_tabs"), closeOtherTabsHelper);

	_closeTab.methodArguments = [event];
	_closeAllTabs.methodArguments = [event];
	_closeOtherTabs.methodArguments = [event];

	/** @type {RuntimeLabel} */
	var _source = event.getSource()
	if (_source != null) {
		_popupmenu.show(_source);
	}
}
