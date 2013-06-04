/**
 * @properties={typeid:24,uuid:"4C5E6999-8C9A-41F4-A986-D9F17263D4BE"}
 */
function getPanelCount() {
	return 4
}

/** *
 * @param _panelNr
 *
 * @properties={typeid:24,uuid:"1F3FCCDC-C2CE-477C-9D62-F69BBB105133"}
 */
function getPanelProperties(_panelNr) {
	var _panelProps = {_tabName:"tab"};
	 switch (_panelNr) {
	  case 1:
	   _panelProps._orientation = 1;
	   _panelProps._formName = controller.getName() + "_top";
	   break;
	  case 2:
	  	_panelProps._orientation = 2;
	   _panelProps._formName = controller.getName() + "_top";
	   break;
	  case 3:
	   _panelProps._orientation = 1;
	   _panelProps._formName = controller.getName()+ "_bottom";
	   break;
	  case 4:
	  	_panelProps._orientation = 2;
	   _panelProps._formName = controller.getName() + "_bottom";
	   break;
	 }
	 return _panelProps;
}

/**
 * @properties={typeid:24,uuid:"18D01841-CD5A-4D78-A093-846322704278"}
 */
function getSplitterCount() {
	return 3
}

/**
 * @param {Number} _splitterNr
 * 
 * @properties={typeid:24,uuid:"7EEC4DF0-6293-45C2-BF76-5532C5CA1010"}
 */
function getSplitterElement(_splitterNr) {
	var _jsForm, _tabPanel, _tab
	if (_splitterNr == 1) {
		_jsForm = solutionModel.getForm(controller.getName());
		_tabPanel = _jsForm.getTabPanel("tab");
		_tab = _tabPanel.getTabs()[0];
		
		return {formName: _tab.containsForm.name, elementName:"tab"};
	} else if (_splitterNr == 2) {
		return {formName:controller.getName(), elementName:"tab"};
	} else if (_splitterNr == 3) {
		_jsForm = solutionModel.getForm(controller.getName());
		_tabPanel = _jsForm.getTabPanel("tab");
		_tab = _tabPanel.getTabs()[1];
		
		return {formName: _tab.containsForm.name, elementName:"tab"};
	}
	return _super.getSplitterElement(_splitterNr);
}
