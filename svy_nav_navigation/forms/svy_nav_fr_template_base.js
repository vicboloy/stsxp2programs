/**
 * @type {{layout_id:String,panels:Array<{foundset:JSFoundset, index:Number, selectedTab:Number, view:Number}>}}
 * @properties={typeid:35,uuid:"94653F52-5960-42AA-AF61-5A64DBBB660C",variableType:-4}
 */
var vInfoObject = null;

/**
 * Should return the count of the panels
 * @properties={typeid:24,uuid:"F6A5AA02-278E-499E-8991-9550AA245143"}
 */
function getPanelCount() {
	return 1
}

/**
 * @properties={typeid:24,uuid:"7C9030C9-BA63-47E1-AB1B-A319DA20D92E"}
 */
function generatePanelTabs() {
	var _panelCount = getPanelCount();

	var _panelFormName, _panelProps, _jsForm, _parentForm, _parentTabPanel, _jsTab;
	
	for (var i = 1; i <= _panelCount; i++) {
		_panelProps = getPanelProperties(i);
		_panelFormName = "ly_" + _to_nav_layout.name + "_p" + i;

		_parentForm = solutionModel.getForm(_panelProps._formName);
		_parentTabPanel = _parentForm.getTabPanel(_panelProps._tabName);

		_jsForm = solutionModel.getForm(_panelFormName);

		if (!_jsForm) {
			_jsForm = solutionModel.newForm(_panelFormName, null, null, false, 100, 100);
			_jsForm.extendsForm = solutionModel.getForm(globals.nav.panelFormName);
		
		}
		var _tabPanel = _jsForm.getTabPanel(_panelProps._tabName);
		
		setTabPanelOrientation(_tabPanel,i);
		
		switch (_panelProps._orientation) {
			case 0:
				_jsTab = _parentTabPanel.getTab(_panelFormName);
				if (!_jsTab) {
					_parentTabPanel.newTab(_panelFormName, _panelFormName, _jsForm);
				} else if (!_jsTab.containsForm) {
					_jsTab.containsForm = _jsForm;
				}
				break;
			case 1:
				_jsTab = _parentTabPanel.getTab("left");
				if (!_jsTab) {
					_jsTab = _parentTabPanel.newTab("left", _panelFormName, _jsForm);
					_jsTab.x = 0;
					_jsTab.y = 0;
				} else if (!_jsTab.containsForm) {
					_jsTab.containsForm = _jsForm;
				}
				break;
			case 2:
				_jsTab = _parentTabPanel.getTab("right");
				if (!_jsTab) {
					_jsTab = _parentTabPanel.newTab("right", _panelFormName, _jsForm);
					_jsTab.x = 1;
					_jsTab.y = 1;
				} else if (!_jsTab.containsForm) {
					_jsTab.containsForm = _jsForm;
				}
				break;
	
			default:
				break;
		}
	}
	
	controller.recreateUI()
}

/**
 * @param {JSTabPanel} _tabPanel
 * @param {Number} _panelNr
 * 
 * @return {Boolean} tabs are shown
 *
 * @properties={typeid:24,uuid:"C472FD67-C8DD-4E11-A5E8-BF821F1BF66E"}
 */
function setTabPanelOrientation(_tabPanel,_panelNr) {
	if (_to_nav_layout.tabs_orientation_array && _to_nav_layout.tabs_orientation_array.length >= 1) {
		switch (_to_nav_layout.tabs_orientation_array[_panelNr]) {
			case 1:
				_tabPanel.tabOrientation = SM_DEFAULTS.NONE;
				break;
			case 2:
				_tabPanel.tabOrientation = SM_ALIGNMENT.TOP;
				break;
			case 3:
				_tabPanel.tabOrientation = SM_ALIGNMENT.BOTTOM;
				break;
			case 4:
				_tabPanel.tabOrientation = SM_ALIGNMENT.LEFT;
				break;
			case 5:
				_tabPanel.tabOrientation = SM_ALIGNMENT.RIGHT;
				break;
			default:
				_tabPanel.tabOrientation = SM_ALIGNMENT.TOP;
				break;
		}
	} else {
		_tabPanel.tabOrientation = SM_ALIGNMENT.TOP;
	}
	return (_tabPanel.tabOrientation != SM_DEFAULTS.NONE)
}

/**
 * @param {String} _layoutname
 * @param {String} _programName
 * @param {Number} _orientation
 * @param {String} _relation
 * @param {Number} _editOnTab
 * @param {String} _formName
 * @param {String} _toolbar
 * @param {Number} _panelNr
 * @param {Number} _tabNr
 * @param {String} _parentDataSource
 * @param {String|UUID} _tabId
 * @param {String|UUID} _parentTabId
 * @param {Number} _view
 *
 * @return {String} _panelFormName
 *
 * @properties={typeid:24,uuid:"A2B2D3A4-2DB7-4AE5-B02F-93195EB2F9F2"}
 */
function generateTabForm(_layoutname, _programName, _orientation, _relation, _editOnTab, _formName, _toolbar, _panelNr, _tabNr, _parentDataSource, _tabId, _parentTabId, _view) {

	var _tabFormName = 'ly_' + _layoutname + '_p' + _panelNr + '_t' + _tabNr

	var _jsForm = solutionModel.getForm(_formName);
	if(!_jsForm) {
		application.output('Framework wants to load form '+ _formName + ', but it doesn\'t exist')
		return null
	}

	//Check if toolbarform exists, recreate if necessary
	var _jsFormToolbar = solutionModel.getForm(_tabFormName + "_tb");
	if (!_jsFormToolbar) {
		_jsFormToolbar = scopes.svyNavigation.cloneFormWithTabs(_tabFormName + "_tb", solutionModel.getForm(_toolbar), _tabFormName + "_tb");
	}	
	var _toolbarHeight = scopes.modUtils$UI.getJSFormHeight(_toolbar)
	
	
	if (!solutionModel.getForm(_tabFormName)) {
		var _parentForm = solutionModel.getForm('svy_nav_fr_tabForm_base');
		var _width = _parentForm.width;
		var _formHeight = _parentForm.getBodyPart().height;
		var _formWidth = _parentForm.width;
		var _height = _parentForm.getBodyPart().height;
		
		if (_orientation == 2 || _orientation == 3) { //Top or Bottom
			_formHeight -= _toolbarHeight;
		} else if (_orientation == 4 || _orientation == 5) { //Left or Right
			_formWidth -= _jsFormToolbar.width;
		}

		//Create panel form that contains the toolbar (if available) and the programform
		var _jsFormPanel = solutionModel.newForm(_tabFormName, _parentDataSource, null, false, _formWidth, _formHeight);
		_jsFormPanel.extendsForm = _parentForm;

		//tabpanel buttonbar
		var _x_toolbar = 0;
		var _y_toolbar = 0;
		var _x = 0;
		var _y = 0;
		var _anchor_toolbar = SM_ANCHOR.DEFAULT;

		var _toolbarWidth = _jsFormToolbar.width
		_toolbarHeight = _toolbarHeight

		switch (_orientation) { //Toolbar orientation (top means: the toolbar is on top of the programform) 
			case 1: //No toolbar
				_toolbarHeight = 0 
				break;
			case 2: //Top
				_y = _toolbarHeight
				_anchor_toolbar = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST
				_toolbarWidth = _width
				break;
			case 3: //Bottom
				_y_toolbar = _formHeight
				_anchor_toolbar = SM_ANCHOR.WEST | SM_ANCHOR.EAST | SM_ANCHOR.SOUTH
				_toolbarWidth = _width
				break;
			case 4: //Left
				_x = _toolbarWidth
				_anchor_toolbar = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.SOUTH
				_toolbarHeight = _height
				break;
			case 5: //Right
				_x_toolbar = _formWidth
				_anchor_toolbar = SM_ANCHOR.NORTH | SM_ANCHOR.EAST | SM_ANCHOR.SOUTH
				_toolbarHeight = _height
				break;
		}

		//Create tabpanel for the toolbar
		var _toolbarPanel = _jsFormPanel.newTabPanel('toolbar', _x_toolbar, _y_toolbar, _toolbarWidth, _toolbarHeight)
		_toolbarPanel.newTab('', '', _jsFormToolbar)
		_toolbarPanel.anchors = _anchor_toolbar
		_toolbarPanel.transparent = true;
		
		if(_orientation == 1)// no toolbar
		{
			_y += forms[globals.nav.panelFormName].getOffsetWithoutToolbar()
		}

		//Create tabpanel for the programform
		var _formPanel = _jsFormPanel.newTabPanel('form', _x, _y, _formWidth, _formHeight)
		_formPanel.anchors = SM_ANCHOR.ALL;
		_formPanel.transparent = true;
		if (_relation) {
			_formPanel.newTab('', '', _jsForm, _relation)
		} else {
			_formPanel.newTab('', '', _jsForm)
		}
		if (!globals.nav["ly_" + _layoutname].tabs[_tabId]) {
			globals.nav["ly_" + _layoutname].tabs[_tabId] = {childForms:[]};
		}
	}

	//Fill toolbar variables if not filled yet
	/** @type {RuntimeForm<svy_nav_fr_toolbar_base>} */
	var form = forms[_jsFormToolbar.name];
	if (!form.vFormname) {
		form.vFormname = _formName;
		form.vProgram = _programName;
	    
		form.vEditOnTab = _editOnTab;
		form.vMode = "browse";
		form.vPanel = _panelNr;
		form.vView = _view;
		form.vTabId = _tabId;
		
		if (_parentTabId) {
			if (!globals.nav["ly_" + _layoutname].tabs[_parentTabId]) {
				globals.nav["ly_" + _layoutname].tabs[_parentTabId] = {childForms:[]};
			}
			globals.nav["ly_" + _layoutname].tabs[_parentTabId].childForms.push({formName:_tabFormName, tabId:_tabId.toString()});
		}
	
		form.updateUI();
	}

	return _tabFormName;
}

/**
 * @deprecated Use the function createCustomTabs() on the panel form itself. 
 * 
 * @param {JSForm} jsPanelForm
 * @param {JSFoundset<db:/svy_framework/nav_tab>} tabFS
 * @param {Number} panelNr
 * 
 * 
 * @properties={typeid:24,uuid:"F408B53B-1A55-4D07-86A3-C50216EA6571"}
 */
function createCustomTabs(jsPanelForm, tabFS, panelNr) {
	var panelFormName = jsPanelForm.name;
	
	forms[panelFormName].createCustomTabs(jsPanelForm, tabFS, panelNr);
}

/**
 * @param {Number} panelNr
 * @param {Number} selectedTab
 * @param {Object} layoutObj
 * 
 * @properties={typeid:24,uuid:"D2455583-9C7F-4C27-B9DB-D0B41CB2C3B7"}
 */
function loadTabsOnPanel(panelNr, selectedTab, layoutObj) {
	globals.svy_nav_panel_nr = panelNr;
	var tabFS = _to_nav_layout.nav_layout_to_nav_tab$panel;
	var panelProps, programName, programFormObj, tempFormName, tabFormName;
	/** @type {String} */
	var formName;

	var panelFormName = "ly_" + _to_nav_layout.name + "_p" + panelNr;
	var jsPanelForm = solutionModel.getForm(panelFormName);
	var jsTabpanel = jsPanelForm.getTabPanel("tab");
	
	if(!databaseManager.hasRecords(tabFS))
	{
		application.output('Trying to start layout without tabs. This is not possible. Please open the configurator and create tabs for this layout: '+ _to_nav_layout.name ,LOGGINGLEVEL.DEBUG)
		return;
	}
	
	var showTabs = true;
	if (tabFS.getSize() == 1 /* && panelNr == 1 */) {
		showTabs = setTabPanelOrientation(jsTabpanel,panelNr)
	}
	if (showTabs && forms[panelFormName].hasCustomTabs()) {
		forms[panelFormName].createCustomTabs(jsPanelForm, tabFS, panelNr, selectedTab);
		jsTabpanel.tabOrientation = SM_DEFAULTS.NONE;
	}
	//set Title
	setTitle(jsPanelForm, tabFS);
	
	forms[panelFormName].controller.recreateUI();	
	
	for (var i = 1; i <= tabFS.getSize(); i++) {
		tabFS.setSelectedIndex(i);
		panelProps = getPanelProperties(panelNr);
		programName = tabFS.nav_tab_to_nav_program.program_name;

		if (globals.nav.program[programName]) {
			/** @type {{	view:Number,
			 * 				foundset:JSFoundset,
			 * 				divider_height:Number,
			 * 				base_form_name:String,
			 * 				path:Array,
			 * 				filter:Array,
			 * 				form:Array,
			 * 				toolbar_main:String,
			 * 				toolbar_tab:String,
			 * 				empty_foundset:Boolean,
			 * 				table_name:String}}*/
			var progObj = globals.nav.program[programName]
			programFormObj = progObj.form;
			formName = programFormObj[tabFS.form_type][2];
			
			//set selected view entered in the layout object
			if(layoutObj && layoutObj.panels && layoutObj.panels[panelNr-1] && layoutObj.panels[panelNr-1].view != undefined && i == selectedTab)
			{
				formName = programFormObj[layoutObj.panels[panelNr-1].view][2];
			}
			/** @type {String} */
			var toolbar;
			if (panelNr == 1) {
				toolbar = progObj.toolbar_main
				if (!toolbar) {
					toolbar = scopes.svyProperties.getPropertyValue('program_toolbar_main');
				}
			} else {
				toolbar = progObj.toolbar_tab
				if (!toolbar) {
					toolbar = scopes.svyProperties.getPropertyValue('program_toolbar_tab');
				}
			}

			var dataSource;
			if (databaseManager.hasRecords(tabFS.nav_tab$to_parent)) {
				dataSource = "db:/" + globals.nav.program[tabFS.nav_tab$to_parent.nav_tab_to_nav_program.program_name].server_name + "/" + globals.nav.program[tabFS.nav_tab$to_parent.nav_tab_to_nav_program.program_name].table_name;
			}

//TODO: Only generated the tabforms that are selected now, to prevent overhead. Other tabs are generated when the tab is selected. -> Currently this leads to problems for not generated tabs in the function svy_nav_base.getRelatedForms()
//			if (i == selectedTab) {
				tabFormName = generateTabForm(_to_nav_layout.name, tabFS.nav_tab_to_nav_program.program_name, tabFS.orientation_toolbar, tabFS.tab_relation, tabFS.edit_on_tab, formName, toolbar, panelNr, i, dataSource, tabFS.tab_id, tabFS.parent_tab_id, tabFS.form_type);
				tempFormName =tabFormName
//			} else {
//				tabFormName = formName;
//				tempFormName = "svy_nav_fr_dummy";
//			}

			setTabOnPanel(panelNr, panelProps, tabFormName, tempFormName, tabFS.getSelectedRecord(), _to_nav_layout.name, toolbar, i, dataSource, tabFS.form_type);
		}
	}

}

/**
 * Sets the description of the first tab in the title label (if available)
 * 
 * @param {JSForm} _jsPanelForm
 * @param {JSFoundSet<db:/svy_framework/nav_tab>} _tabFS
 * 
 * @properties={typeid:24,uuid:"6666C734-8AD7-42E0-BDA7-0B3B941F047B"}
 */
function setTitle(_jsPanelForm, _tabFS) {
	var _titleLabel = _jsPanelForm.getLabel("title");
	if (_titleLabel) {
		var _desc = _tabFS.display_description;
		_desc = _desc ? _desc.toUpperCase() : "";
		_titleLabel.text = _desc;
		_titleLabel.width = 120;
	}	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} _panelNr
 * @param {{_formName:String, _tabName:String, _orientation:Number}} _panelProps _panelProps
 * @param {String} _formName
 * @param {String} _tempFormName
 * @param {JSRecord<db:/svy_framework/nav_tab>} _tabRecord
 * @param {String} _layoutName
 * @param {String} _toolbar
 * @param {Number} _tabIndex
 * @param {String} _dataSource
 * @param {Number} _view
 *
 * @properties={typeid:24,uuid:"F3720BD2-C3FC-4A75-8933-4449E2403AD0"}
 */
function setTabOnPanel(_panelNr, _panelProps, _formName, _tempFormName, _tabRecord, _layoutName, _toolbar, _tabIndex, _dataSource, _view) {

	var _panelTabForm = "ly_" + _to_nav_layout.name + "_p" + _panelNr;
	forms[_panelTabForm].elements["tab"].addTab(forms[_tempFormName], _formName, _tabRecord.display_description, null, "media:///"+globals.nav.program[_tabRecord.nav_tab_to_nav_program.program_name].program_image);
	
	//Fill tabInfo object
	forms[_panelTabForm]["tabInfo"][_tabIndex] = 
		{
			panelNr: _panelNr, 
			panelProps: _panelProps, 
			formName:_formName, 
			layoutName:_layoutName, 
			toolbar:_toolbar, 
			tabIndex:_tabIndex, 
			dataSource:_dataSource,
			programName:_tabRecord.nav_tab_to_nav_program.program_name,
			orientationToolbar:_tabRecord.orientation_toolbar,
			relation:_tabRecord.tab_relation,
			editOnTab:_tabRecord.edit_on_tab,
			tabId:_tabRecord.tab_id,
			parentTabId:_tabRecord.parent_tab_id,
			view: _view
		};
}

/**
 * @public
 * @param {String} layoutId
 * @param {Object} layoutObj
 *
 * @properties={typeid:24,uuid:"28024807-E8B8-4B14-AFBC-EE618E4323D1"}
 */
function initLayout(layoutId, layoutObj) {
	globals.nav_layout_id = layoutId;
	if (!globals.nav["ly_" + _to_nav_layout.name]) {
		globals.nav["ly_" + _to_nav_layout.name] = {tabs: []};
	}
	
	vInfoObject = {};
	vInfoObject.layout_id = layoutId.toString();
	
	generatePanelTabs()

	var _panelCount = getPanelCount();

	var selectedTab;
	for (var i = 1; i <= _panelCount; i++) {
		selectedTab = 1;
		if (layoutObj && layoutObj.panels && layoutObj.panels.length >= (i-1) && layoutObj.panels[i-1] && layoutObj.panels[i-1].selectedTab) {
			selectedTab = layoutObj.panels[i-1].selectedTab;
		}
		loadTabsOnPanel(i, selectedTab, layoutObj);
	}
	
	//set splitters
	initSplitter();
}

/**
 * @param {Number} _panelNr
 * @return {{_formName:String, _tabName:String, _orientation:Number}};
 *
 * @properties={typeid:24,uuid:"9A38F7C4-67CD-45AE-BCCD-AD0C4D0A43C3"}
 */
function getPanelProperties(_panelNr) {
	var _properties = { _formName: controller.getName(), _tabName: "tab", _orientation: 0 };
	return _properties;
}

/**
 *
 * @properties={typeid:24,uuid:"DE9B0750-8282-4F54-8D54-43D56DDE29EC"}
 */
function initSplitter() {
	if (elements["tab"] && elements["tab"].dividerSize) {
		var _jsForm = solutionModel.getForm(controller.getName());
		var _jsTabPanel = _jsForm.getTabPanel("tab");
		var _location, _formName, _elementName; 
		/** @type {{formName:String, elementName:String}} */
		var _splitterProp;
		
		var _divSize = globals.nav.splitPanesDividerSize
		var _divColor = globals.nav.splitPanesDividerColor
		/** @type {Array<Number>} */
		var _splitter_pos = _to_nav_layout.splitter_pos_array;
		for (var i = 1; i <= getSplitterCount(); i++) {
			if (_splitter_pos && _splitter_pos[i]) {
				_location = _splitter_pos[i];
			} else if (_jsTabPanel.tabOrientation == SM_ALIGNMENT.SPLIT_HORIZONTAL) {
				_location = 350;
			} else if (_jsTabPanel.tabOrientation == SM_ALIGNMENT.SPLIT_VERTICAL) {
				_location = controller.getFormWidth() / 2;
			}
			_location = _location == 0 ? 350 : _location;
			_splitterProp = forms[controller.getName()].getSplitterElement(i);
			_formName = _splitterProp.formName ? _splitterProp.formName : controller.getName();
			_elementName = _splitterProp.elementName ? _splitterProp.elementName : "tab";
			
//			application.output(_splitterProp.formName + "." + _splitterProp.elementName + ": " + _location);
			scopes.modUtils$UI.initSplitPane(_formName, _elementName, 0, _location, _divSize, true, _divColor)
		}
	}
	
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5095B2FC-A250-4A1B-B948-9453DFA67978"}
 */
function onTabChange(previousIndex, event) {
	/** @type{RuntimeTabPanel} */
	var _component = event.getSource()
	if(!(_component.getWidth() == 100 && _component.getHeight() == 100))//workaround because this method is also called without dragging the splitter
	{
		// globals.svy_utl_saveSplitTabDividerPosition(controller.getName(), "tab");
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1BAECA41-83F6-4879-BE0E-655A30C8ECD6"}
 */
function onShow(firstShow, event) {
	initSplitter()
}

/**
 * @properties={typeid:24,uuid:"0F5D8A98-9002-4701-BF71-13BB63DBA313"}
 */
function restoreLayout() {
	var _layoutForm = controller.getName()
	var _panelForm, _tabForm, _toolbarForm, _form
	if(vInfoObject && vInfoObject.panels)
	{
		/** @type{Array} */
		var _panels = vInfoObject.panels
		for (var i = 0; i < _panels.length; i++) {
			
			_panelForm = _layoutForm + "_p" + (i+1);
			var _selectedTab = 1
			if(_panels[i].selectedTab)
			{
				_selectedTab = _panels[i].selectedTab
			}
			_tabForm = _panelForm + "_t" +_selectedTab;
			_toolbarForm = forms[_tabForm].elements["toolbar"].getTabFormNameAt(1)
			_form = forms[_tabForm].elements["form"].getTabFormNameAt(1)
	
			//set foundset
			if(_panels[i].foundset)
			{
				forms[_form].loadRecords(null, null, _panels[i].foundset)
				forms[_form].syncFoundsets(_panels[i].foundset)
			}
//			else
//			{
//				forms[_form].loadRecords(null, true)
//			}
			
			//set foundsetIndex
			if(_panels[i].index)
			{
				forms[_form].foundset.setSelectedIndex(_panels[i].index);
			}
			
			//set tabIndex
			if(_panels[i].selectedTab)
			{
				forms[_panelForm].elements["tab"]['tabIndex'] = _panels[i].selectedTab 
			}

			//set selected view
			if(_panels[i].view != undefined)
			{
				forms[_form].dc_switchView(null, _panels[i].view ,forms[_toolbarForm].vProgram)
			}
		}
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B515E2BA-68B7-4C2E-9310-BA1E4ED81FEE"}
 */
function onLoad(event) {
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"BFFC68DE-38AE-4D31-A233-BE2DADB5B4B7"}
 */
function onHide(event) {
	// the next line is necessary to correctly store the divider positions of the split panes. When issue SVY-1401 is fixed, this will also work correctly when directly closing the application without having to switch the program tab
	scopes.modUtils$UI.persistSplitPaneDividerPosition(controller.getName(), "tab")
	
	return true
}

/**
 * @properties={typeid:24,uuid:"EE414EFA-34E9-4446-864B-248E77630AE5"}
 */
function getSplitterCount() {
	return 0
}

/**
 * Returns the form and element name for a given splitter number.
 * 
 * @param {Number} _splitterNr
 * 
 * @return {{formName:String, elementName:String}}
 * 
 * @properties={typeid:24,uuid:"7AE94BC9-E7EB-4500-A56D-0EBE13C34087"}
 */
function getSplitterElement(_splitterNr) {
	return {formName:null, elementName:null};
	
}

/**
 * Gets the framework forms that have been configured and are available in the framework
 * 
 * @return {Array}
 * 
 * @properties={typeid:24,uuid:"4140E82D-0960-4DA0-B18C-4236E41EE292"}
 * @AllowToRunInFind
 */
function getConfiguredFrameworkForms() {
	if (!vInfoObject || (vInfoObject && !vInfoObject.layout_id)) {
		return null;
	}
	
	
	var _formNames = [];
	
	/** @type {JSFoundSet<db:/svy_framework/nav_layout>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_layout');
	_fs.find()
	_fs.layout_id = vInfoObject.layout_id;
	_fs.search();
	for (var i = 1; i <= _fs.nav_layout_to_nav_tab.getSize(); i++) {
		var _record = _fs.nav_layout_to_nav_tab.getRecord(i);
		if (_record.nav_tab_to_nav_program.form_object) {
			if (_record.nav_tab_to_nav_program.form_object[0][3] == 1) {
				_formNames.push(_record.nav_tab_to_nav_program.form_object[0][2])
			}
			if (_record.nav_tab_to_nav_program.form_object[1][3] == 1) {
				_formNames.push(_record.nav_tab_to_nav_program.form_object[1][2])
			}
		}
	}
	
	return _formNames;
}
