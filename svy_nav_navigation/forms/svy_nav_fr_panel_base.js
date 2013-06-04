/**
 * @type {Array<{panelNr:Number, panelProps:Object, formName:String, layoutName:String, toolbar:String, tabIndex:Number, dataSource:String, programName:String, orientationToolbar:Number, relation:String, editOnTab:Number, tabId:String, parentTabId:String, view:Number}>}
 *
 * @properties={typeid:35,uuid:"733C2336-BBCD-475E-B2F4-6B9C5B626BAD",variableType:-4}
 */
var tabInfo = [];

/**
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A83B002E-FB6B-4282-877D-E3F3C237A02E"}
 */
function onTabChange(previousIndex, event) {
	
	/** @type {Number} */
	var _tabIndex = elements.tab.tabIndex;
	var _tabObj = tabInfo[_tabIndex];
	if (elements.tab.getTabFormNameAt(_tabIndex) == "svy_nav_fr_dummy") {
		//generate tab form and replace dummy
		
		var _panelFormName = forms["ly_" +_tabObj.layoutName].generateTabForm(_tabObj.layoutName, _tabObj.programName, _tabObj.orientationToolbar, _tabObj.relation, _tabObj.editOnTab, _tabObj.formName, _tabObj.toolbar, _tabObj.panelNr, _tabObj.tabIndex, _tabObj.dataSource, _tabObj.tabId, _tabObj.parentTabId, _tabObj.view);
		
		elements.tab.removeTabAt(_tabIndex);
		elements.tab.addTab(forms[_panelFormName],_panelFormName,globals.nav.program[_tabObj.programName].description,null, "media:///" +globals.nav.program[_tabObj.programName].program_image,null,null,null,_tabIndex-1);
		elements.tab.tabIndex = _tabIndex;
	}
	forms[globals.nav_currentPanel1Form].syncFoundsets();

}

/**
 * Adds tab to the tabpanel
 * 
 * @param {Form} _form
 * @param {String} [_tabName]
 * @param {String} [_title]
 * @param {String} [_tooltip]
 * @param {String} [_iconURL]
 * @param {String} [_fg]
 * @param {String} [_bg]
 * @param {JSFoundSet} [_relation]
 * @param {Number} [_index]
 *
 * @properties={typeid:24,uuid:"1FB9BF0C-85C0-4CDE-A38A-89B689D6D180"}
 */
function addTab(_form, _tabName, _title, _tooltip, _iconURL, _fg, _bg, _relation, _index) {
	
//	var _x_offset = 200;
//	var _y_offset = 0;
//	var _tabWidth = 100;
//	var _tabHeight = 20;
	
	elements.tab.addTab(_form, _tabName, _title, _tooltip, _iconURL, _fg?_fg:null, _bg?_bg:null, _relation, _index);
}

/**
 * @properties={typeid:24,uuid:"68C450A1-15AB-436F-8FB6-76D4FD637A65"}
 */
function isPanel() {
	return true
}

/**
 * @properties={typeid:24,uuid:"E9B284F6-5356-4603-98C2-AE8126CE357C"}
 */
function hasCustomTabs() {
	return false;
}

/**
 * Method to create custom tabs above the panel. To be overridden when having custom tabs
 * 
 * @param {JSForm} jsPanelForm
 * @param {JSFoundSet<db:/svy_framework/nav_tab>} tabFS
 * @param {Number} panelNr
 * @param {Number} [selectedTabNr]
 *
 * @properties={typeid:24,uuid:"8C88A956-118C-44CB-A9A9-B7A6B8382B07"}
 */
function createCustomTabs(jsPanelForm, tabFS, panelNr, selectedTabNr) {
	
}

/**
 * @param {JSEvent} event
 * @param {Number} tabNr
 *
 * @properties={typeid:24,uuid:"FC23EE40-0431-4FBB-A662-E0A23CBB3593"}
 */
function switchTab(event, tabNr) {
	var _elementName = event.getElementName();
	if (!tabNr && _elementName) {
		tabNr = _elementName.replace(/.*_$/, "");
	}
	if (!tabNr) {
		tabNr = 1;
	}
	if (elements.tab.tabIndex == tabNr) {
		return;
	}
	
	switchCustomTabs(event, tabNr)
	
	elements.tab.tabIndex = tabNr;
	
	/** @type {RuntimeForm<svy_nav_fr_tabForm_base>} */
	var form = forms[elements.tab.getTabFormNameAt(elements.tab.tabIndex)];
	if (form && form.getBodyFormName) {
		var panelNr = controller.getName().substr(controller.getName().lastIndexOf('_p') + 2);
		if (panelNr == 1) {
			globals.nav_currentPanel1Form = form.getBodyFormName();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"36912CA1-42BB-4B66-A0AF-63D5E72CD253"}
 */
function getOffsetWithoutToolbar() {
	return 0
}

/**
 * Method to change design by switching of tabs.
 * @param {JSEvent} event
 * @param {Number} tabNr
 * @properties={typeid:24,uuid:"83AEDAC3-50E2-4208-BD98-E3068E619F38"}
 */
function switchCustomTabs(event, tabNr) {
	
}
