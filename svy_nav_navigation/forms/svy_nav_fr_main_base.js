/**
 * @param {JSEvent} [event]
 * @param {UUID} layoutId
 * @param {Object} [layoutObj]
 * @param {JSFoundSet} [foundsetToLoad]
 * @param {Object} [recordPK] (String or Integer) Primary key of the table if you want to select a specific record
 *
 * @properties={typeid:24,uuid:"2EC75B68-9085-4035-ACA2-F3A40848ADFA"}
 */
function layoutShow(event, layoutId, layoutObj, foundsetToLoad, recordPK) {
	/** @type {JSRecord<db:/svy_framework/nav_layout>} */
	var layout = scopes.modUtils$data.getRecord('db:/' + globals.nav_db_framework + '/nav_layout', layoutId)
	globals.nav_layout_id = layoutId
	var newFormName = "ly_" + layout.name;
	
	if (!forms[newFormName]) {
		var form = layout.template_form;

		var jsTemplateForm = solutionModel.getForm(form);
		scopes.svyNavigation.cloneFormWithTabs(newFormName, jsTemplateForm, newFormName);
	}

	forms[newFormName].initLayout(layoutId, layoutObj);
	forms[newFormName]['vInfoObject'] = layoutObj;

	if (layoutObj) {
		forms[newFormName].restoreLayout()
	}
	
	//TODO: this should pass in the Layout object, instead of String values 
	scopes.modUtils$eventManager.fireEvent(scopes.svyNavigationManager,'layout.show', {title: layout.description, url: layout.name});
	
	//Don't add new tab if opened by tab
	if (event && event.getFormName() != globals.nav.openLayoutFormName) {
		forms[globals.nav.openLayoutFormName].addLayout(layoutId);
	} else { //TODO: workaround until it is possible to pass a JSEvent with the tree, see: https://support.servoy.com/browse/SVY-1302
		var triggerForm = application["get"+"MethodTriggerFormName"]();
		if (triggerForm && triggerForm != globals.nav.openLayoutFormName) {
			forms[globals.nav.openLayoutFormName].addLayout(layoutId);
		}
	}
	// goes wrong if you have more than one tab on panel1
	// var tabForm = forms[newFormName + "_p1_t1"].elements["form"].getTabFormNameAt(1);
	/** @type {Number} */
	var tabNr = forms[newFormName + "_p1"].elements["tab"].tabIndex;
	var tabForm = forms[newFormName + "_p1_t" + tabNr.toFixed(0)].elements["form"].getTabFormNameAt(1);
	globals.nav_currentPanel1Form = tabForm;
	
	layoutAddToTab(newFormName);

	if (layoutObj && !recordPK && !foundsetToLoad) {
		return;
	}
	
	var programName;
	if (databaseManager.hasRecords(_to_nav_layout.nav_layout_to_nav_tab.nav_tab_to_nav_program)) {
		programName = _to_nav_layout.nav_layout_to_nav_tab.nav_tab_to_nav_program.program_name;
	}
	
	//Load data on the layout forms
	if (recordPK) {
		forms[tabForm].loadRecords(programName, null, null, null, recordPK, _to_nav_layout.nav_layout_to_nav_tab.tab_id.toString());
	} else {
		forms[tabForm].loadRecords(programName, true, foundsetToLoad, null, null, _to_nav_layout.nav_layout_to_nav_tab.tab_id.toString());
	}
}

/**
 * Returns the startup form as specified in the "startup_form" property
 * Will return "svy_nav_fr_home_dtl" if there is no startupForm property
 * 
 * @properties={typeid:24,uuid:"FF4E5865-174F-4269-9976-EBAE57219E20"}
 */
function getStartFormName() {
	var _startUpForm = scopes.svyProperties.getPropertyValue('startup_form');
	
	if (_startUpForm) { 
		return _startUpForm;
	}
	return "svy_nav_fr_home_dtl";
}

/**
 * @param {String} _tabForm
 * @param {JSFoundSet} _foundset
 *
 * @properties={typeid:24,uuid:"BE1B822C-B3BA-48DE-832E-E85067E0DEE8"}
 */
function load(_tabForm, _foundset) {
	forms[_tabForm].loadRecords(null, true, _foundset);
}

/**
 * Loads the startup form as specified in the "startup_form" property
 * 
 * @properties={typeid:24,uuid:"2A2F1DBB-AC2C-43F7-AB41-DAB95FFD3EBE"}
 */
function loadStartForm() {
	var _startFormName = getStartFormName();
	//TODO: Add method to get the "body" form
	if (globals.nav_show_open_tabs && forms[controller.getName()].elements.tab_split) {
		var _form = forms[controller.getName()].elements.tab_split.getRightForm()['controller'].getName();
		forms[_form].elements['tab'].removeAllTabs();
		forms[_form].elements['tab'].addTab(_startFormName);
	}
	
	//remove title text;
	forms[globals.svy_utl_getFrameworkFormName("nav_fr_status_bar")].elements['form_name']['text'] = "";
}

/**
 * @param {String} _formName
 * @properties={typeid:24,uuid:"46FC8862-D97B-4A0D-B730-45063476F2AB"}
 */
function layoutAddToTab(_formName) {
	elements['tab'].removeAllTabs();
	elements['tab'].addTab(_formName);
}

/**
 * @param {Number} _oldTab
 * 
 * @properties={typeid:24,uuid:"7DFE711E-C163-45FA-BA0F-E85BB8124BAB"}
 */
function layoutHide(_oldTab) {
	if (!_oldTab) {
		_oldTab = forms[globals.nav.openLayoutFormName].vSelectedTab
	}
	if (_oldTab != null && _oldTab >= 0) {
		forms[globals.nav.openLayoutFormName]["vOpenTabs"][_oldTab].layoutObj = getLayoutObject(true);
	}
	
	//Only update history if there was an active tab
	if (forms[globals.nav.openLayoutFormName].vSelectedTab >= 0) {
		history_update()
	}
}

/**
 * Shows layout based on provided name and loads the data as provided
 * 
 * @param {JSEvent} event
 * @param {String} layoutName
 * @param {JSFoundSet|JSRecord|String|Number} [dataToShow]
 *
 * @properties={typeid:24,uuid:"1A7562D8-B2D2-4E80-939F-01195E2F3051"}
 */
function navigateToLayout(event, layoutName, dataToShow) {
	//Get layout_id for this layoutName
	var q = databaseManager.createSelect("db:/svy_framework/nav_layout");
	q.result.addPk()
	q.where.add(q.columns["name"].eq(layoutName));
	
	/** @type {JSFoundSet<db:/svy_framework/nav_layout>} */
	var _fs = databaseManager.getFoundSet("db:/" + globals.nav_db_framework + "/nav_layout")
	_fs.loadRecords(q);
	
	//If layoutrecord is found, show layout
	if (_fs.getSize() > 0) {
		if (_fs.getSize() > 1) {
			throw new scopes.modUtils$exceptions.SvyException("Multiple layouts with name " + layoutName + " found.");
		}
		navigateToLayoutID(event, _fs.layout_id, dataToShow);
	} else {
		throw new scopes.modUtils$data.NoRecordException("layout " +layoutName+ " not found");
	}
}

/**
 * Shows layout based on layout_id and loads the data as provided
 * 
 * @param {JSEvent} event
 * @param {UUID} layout_id
 * @param {JSFoundSet|JSRecord|String|Number} [dataToShow] 
 * 
 * @properties={typeid:24,uuid:"5698DD24-FDC1-4008-B5DF-8E9CCEC514BD"}
 */
function navigateToLayoutID(event, layout_id, dataToShow) {

	if (dataToShow instanceof JSFoundSet) {
		layoutSwitch(event, layout_id, null, dataToShow);
	} else if (dataToShow instanceof JSRecord) {
		/** @type {JSRecord} */
		var record = dataToShow;
		layoutSwitch(event, layout_id, null, null, null, null, record.getPKs()[0]);
	} else if (dataToShow instanceof UUID || dataToShow instanceof Number) {
		//dataToShow is UUID of integer PK
		layoutSwitch(event, layout_id, null, null, null, null, dataToShow);
	} else { //No data provided
		layoutSwitch(event, layout_id);
	}
}

/**
 * @param {JSEvent} event - can be null
 * @param {UUID} _layout_id
 * @param {Object} [_layoutObj]
 * @param {JSFoundSet} [_foundset]
 * @param {Number} [_oldTab]
 * @param {Number} [_newTab]
 * @param {Object} [_recordPK] (String or Integer) Primary key of the table if you want to select a specific record
 *
 *
 * @properties={typeid:24,uuid:"C640B4E0-88FB-4A5C-B149-73BE472C09D7"}
 */
function layoutSwitch(event, _layout_id, _layoutObj, _foundset, _oldTab, _newTab, _recordPK) {
	layoutHide(_oldTab);
	forms[globals.nav.openLayoutFormName]["vSelectedTab"] = _newTab;
	layoutShow(event, _layout_id, _layoutObj, _foundset, _recordPK)
}

/**
 * @properties={typeid:24,uuid:"893B1106-51F1-4B20-90AD-AD5B9E591576"}
 */
function history_update() {
	// if globals.nav.noHistory is set to 1 there will be no stack update
	if (globals.nav.noHistory == 1) {
		globals.nav.noHistory = 0
		return
	}

	if (globals.nav_layout_id) {
		var _hisObj = getLayoutObject(true)
		
		// clear the forward stack
		if (globals.nav.stack.length > globals.nav.stack_position) {
			var _ar = new Array();
			for (var i = 0; i <= globals.nav.stack_position; i++) {
	
				_ar.push(globals.nav.stack[i]);
			}
			globals.nav.stack = _ar;
		}
		// push the properties into the stack and put the stackposition + 1
		globals.nav.stack_position++;
		globals.nav.stack.push(_hisObj);
	}

	updateUI()

	//remove fist stackpos. when there are too much history-entries
	if (globals.nav.stack_position >= globals.nav.his_max_entries) {
		globals.nav.stack.shift()
		globals.nav.stack_position--
	}

}

/**
 * To step forward, backward or to a position in history, will reset your form + foundset
 *
 * @param {JSEvent} _event
 * @param {Number} [_position] position you want to step to
 * @param {JSFoundSet} [_foundset] For back after edit, to load the right foundset
 * @properties={typeid:24,uuid:"85621D27-F769-4652-BE5D-A43E8770F90C"}
 */
function history_move(_event, _position, _foundset) {

	var _button
	if (_event && _event.getElementName) {
		_button = _event.getElementName();
	}
	if (! (_position == undefined)) {
		globals.nav.stack_position = _position
	} else if (_button == 'btn_his_back' && (globals.nav.stack_position > 0)) {
		globals.nav.stack_position--;
	} else if (_button == 'btn_his_forw' && (globals.nav.stack_position < (globals.nav.stack.length - 1))) {
		globals.nav.stack_position++;
	} else {
		return
	}

	if(!_event)
	{
		_event = new Object()
		_event.getFormName = function (){return globals.nav.mainFormName}
	}
	
	/** @type {{layout_id:UUID}}*/
	var _hisObj = globals.nav.stack[globals.nav.stack_position]
	layoutSwitch(_event, _hisObj.layout_id, _hisObj)
	
	globals.nav.noHistory = 1
	updateUI()

}

/**
 * @properties={typeid:24,uuid:"73AA003D-86E7-4F0B-ABD2-3C84C240A804"}
 */
function setRecordInfoText(_programDesc, _recordDesc, _searchDesc, _relatedText) {
	
}

/**
 * @param {Boolean} [_formView]
 * @properties={typeid:24,uuid:"A03A32B5-7AB9-4B81-A269-86607AFA119B"}
 */
function updateUI(_formView) {
	
}

/**
 * @param {Boolean} _includeFoundsets true if the object should include foundsets
 * @return {{layout_id:String, openTab_id:String, panels:Array<{selectedTab:Number, foundset:JSFoundset, index:Number, view:String}>, foundset_related_text:String}} the layout object
 * @properties={typeid:24,uuid:"181B82EC-A990-4226-862A-6FB1CAF63A19"}
 */
function getLayoutObject(_includeFoundsets) {
	if (!globals.nav_layout_id) {
		return null;
	}
	var _selectedTab=forms[globals.nav.openLayoutFormName].vSelectedTab;
	if (_selectedTab == null || _selectedTab < 0) {
		return null;
	}
	
	/** @type {{
	 * 			layout_id:String, 
	 * 			openTab_id:String, 
	 * 			panels:Array<{
	 * 				selectedTab:Number, 
	 * 				foundset:JSFoundset, 
	 * 				index:Number, 
	 * 				view:String
	 * 			}>,
	 * 			foundset_related_text:String
	 * }}
	 */
	var _layoutObj = new Object()
	_layoutObj.layout_id = globals.nav_layout_id
	_layoutObj.openTab_id = forms[globals.nav.openLayoutFormName].vOpenTabs[_selectedTab].openTab_id;
	_layoutObj.panels = []
	var _layoutForm = globals.svy_nav_getLayoutForm(globals.nav_layout_id)
	var _panelCount = forms[_layoutForm].getPanelCount()
	
	var _panelObj, _panelForm, _tabForm;
	for (var i = 1; i <= _panelCount; i++) {
		_panelForm = _layoutForm + "_p" + i;
		_panelObj = { };
		// in some cases the tabIndex results in -1; then the wrong layout is used below
		_panelObj.selectedTab = forms[_panelForm].elements["tab"].tabIndex == -1 ? 1 : forms[_panelForm].elements["tab"].tabIndex;
		_tabForm = _panelForm + "_t" + _panelObj.selectedTab;
		if(_includeFoundsets)
		{
			_panelObj.foundset = forms[forms[_tabForm].elements["form"].getTabFormNameAt(1)].foundset;
		}
		_panelObj.index = forms[forms[_tabForm].elements["form"].getTabFormNameAt(1)].foundset.getSelectedIndex();
		if (forms[_tabForm].elements["toolbar"]) {
			_panelObj.view = forms[forms[_tabForm].elements["toolbar"].getTabFormNameAt(1)].vView;
		}
		_layoutObj.panels.push(_panelObj);
	}
	
	return _layoutObj
}

/**
 * Used to update the menu when different layout is shown (for example to select a different node in the tree)
 * 
 * @param {String} _layout_id
 * @properties={typeid:24,uuid:"514550A5-8CA7-4665-BAF2-15A9CFEE50E5"}
 */
function updateMenu(_layout_id) {
	
}

/**
 * This method (re-)initializes the menu. Can for example be used when changing the organization, the menu should be re-initialized to reflect possible changed rights.  
 * 
 * @properties={typeid:24,uuid:"E3F937F4-636A-4312-8002-6F76B1B9125E"}
 */
function initMenu() {
	
}

/**
 * Perform search.
 *
 * @param {Boolean} clear clear last results
 * @param {Boolean} reduce reduce search
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"055ED443-2CEA-4709-8F5E-487C5DE4F857"}
 * @AllowToRunInFind
 */
function onSearch(clear, reduce, event) {
	globals.svy_sea_search(clear, reduce, event, globals.nav_currentPanel1Form)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E36763B-23A5-4026-89A6-F5E991864432"}
 */
function onShow(firstShow, event) {
	if (firstShow) {
		//set startup form
		var _startupProgramId = scopes.svyProperties.getPropertyValue('startup_program');
		var _startupProgramName = null;
		
		if(_startupProgramId){
			globals.nav_program_id = _startupProgramId;
			_startupProgramName = _to_nav_program$program_id.program_name;
		}
		
		if(_startupProgramName && globals.nav.program[_startupProgramName]) {
			var _program =	_startupProgramName;
			var _layout_id = globals.nav.program[_program].layout_id;
			layoutSwitch(event, _layout_id);
			updateMenu(_layout_id);
			updateUI(true);
		} else {
			//if there is no startup program -> load the startup form
			loadStartForm();
			updateUI(false);
		}
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9DCA4CB4-1BDE-4B1B-B623-ED573DCAC7D6"}
 */
function onLoad(event) {

}

/**
 * @properties={typeid:24,uuid:"DC2D37CF-A491-4E09-B69E-C5EE218D98AF"}
 */
function logout() {
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		//In smartclient the mainform.onClose() is called in the solution onClose method, then it is also called when the user uses the OS-close button, but that doesn't work for webclient.
		if (forms[globals.nav.mainFormName].onClose() == -1) {
			//Closing not allowed
			return;
		}
	}
	
	var _solution = application.getSolutionName();
	if (globals.nav_startArgs) {
		security.logout(_solution, null, globals.nav_startArgs);
	} else {
		security.logout(_solution);
	}
}

/**
 * @return {Number} return -1 if closing is not allowed
 * 
 * @properties={typeid:24,uuid:"2FE214B8-0DF2-4610-A3BC-ADB72DDAA9DC"}
 */
function onClose() {
	//Check if there are open edits.
	if (globals.nav.openEdits.length > 0) {
		//Ask user if the application should really be closed, despite the open edits.
		var _dontClose = i18n.getI18NMessage("svy.fr.lbl.dont_close");
		var _answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage("svy.fr.lbl.close"), i18n.getI18NMessage("svy.fr.dlg.cannot_close_edited_records"), _dontClose, i18n.getI18NMessage("svy.fr.lbl.discard_close"));
		if (_answer == _dontClose) {
			//User chose not to close.
			return -1;
		}
	}
	
	//Set the forms svy_nav_fr_closingSolution on the tab so onHide's are called.
	return 0;
}
