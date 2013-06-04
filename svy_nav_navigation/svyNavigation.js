/**
 * Clones form and all tabs recursively. 
 * If a form (or one of the tabs) already exists, it is skipped. This is useful when the forms are potentially unloaded.
 * 
 * @param {String} newFormName the name to use for the clone
 * @param {JSForm} original the JSForm to clone
 * @param {String} [prefix] Optional prefix to use for the forms
 * 
 * @return {JSForm}
 *
 * @properties={typeid:24,uuid:"D2E1FA0F-2145-403B-9A96-A2F27F97475C"}
 */
function cloneFormWithTabs(newFormName, original, prefix) {
	var form = solutionModel.getForm(newFormName);
	if (!form) {
		form = solutionModel.cloneForm(newFormName, original)
	}
	var tabPanels = form.getTabPanels()
	var formName;
	for (var i = 0; i < tabPanels.length; i++) {
		var tabs = tabPanels[i].getTabs();
		for (var j = 0; j < tabs.length; j++) {
			formName = prefix ? prefix + tabs[j].containsForm.name.replace(original.name, "") : tabs[j].containsForm.name + application.getUUID();
			tabs[j].containsForm = cloneFormWithTabs(formName, tabs[j].containsForm, prefix);
		}
	}
	return form;
}

/**
 * @param {JSEvent} event
 * @param {String} layoutName
 * @param {JSFoundSet|JSRecord|String|Number} [dataToShow] Can be a foundset, record or PK(UUID or Integer)
 * 
 * @throws {scopes.modUtils$exceptions.IllegalArgumentException}
 * 
 * @properties={typeid:24,uuid:"087C70A3-FF60-4393-A6F6-4FEA616BF217"}
 */
function navigateToLayout(event, layoutName, dataToShow) {
	if (!layoutName) {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("layoutName can not be null")
	}
	
	forms[globals.nav.mainFormName].navigateToLayout(event, layoutName, dataToShow);
}

/**
 * @param {JSEvent} event
 * @param {UUID} layout_id
 * @param {JSFoundSet|JSRecord|String|Number} [dataToShow] Can be a foundset, record or PK(UUID or Integer)
 * 
 * @throws {scopes.modUtils$exceptions.IllegalArgumentException}
 * 
 * @properties={typeid:24,uuid:"0C7ED55D-091B-419F-A040-DFA5C3A15617"}
 */
function navigateToLayoutID(event, layout_id, dataToShow) {
	if (!layout_id) {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("layout_id can not be null")
	}
	
	forms[globals.nav.mainFormName].navigateToLayoutID(event, layout_id, dataToShow);
}

/**
 * Sets the splitter position of the layout that is currently visible.
 * 
 * @param {Number} position Position in pixels; Use -1 for maximum.
 * @param {Number} [splitterNr] Number of splitter when having more than one splitter on the layout. 
 * 
 * @properties={typeid:24,uuid:"97CE72ED-086F-410C-9FD8-6080A89BE734"}
 */
function setLayoutSplitter(position, splitterNr) {
	if (position == null) {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("position can not be null");
	} else if (position < -1) {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("position can not be negative");
	}
	if (!splitterNr) {
		splitterNr = 1;
	}
	
	if (!databaseManager.hasRecords(_to_nav_layout)) {
		throw new scopes.modUtils$exceptions.IllegalStateException("No layout loaded");
	}
	
	var layoutFormName = "ly_" + _to_nav_layout.name;

	/** @type {{formName:String, elementName:String}} */
	var splitterObj = forms[layoutFormName].getSplitterElement(splitterNr);
	
	if (!splitterObj || !splitterObj.formName || !splitterObj.elementName) {
		throw new scopes.modUtils$exceptions.IllegalStateException("The splitterNr must be >0 and <=" + forms[layoutFormName].getSplitterCount());
	}
	
	/** @type {RuntimeSplitPane} */
	var splitter = forms[splitterObj.formName].elements[splitterObj.elementName];
	
	if (position == -1) {
		//Determine max position -> Is splitter width or height, depending on orientation.
		var jsForm = solutionModel.getForm(splitterObj.formName);
		var jsTabPanel = jsForm.getTabPanel(splitterObj.elementName);
		if (jsTabPanel.tabOrientation == SM_ALIGNMENT.SPLIT_VERTICAL) {
			position = splitter.getHeight();
		} else {
			position = splitter.getWidth();
		}
	}
	
	//Set splitter location
	splitter.dividerLocation = position;
}
