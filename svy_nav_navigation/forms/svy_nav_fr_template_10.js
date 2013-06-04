/**
 * @properties={typeid:24,uuid:"ED66FBD0-3876-4CFF-91B8-B792D82AF0C1"}
 */
function getPanelCount() {
	return 4
}

/** *
 * @param _panelNr
 * 
 * @return {Object} The panel Property
 *
 * @properties={typeid:24,uuid:"59386AC0-83C4-4AC1-8FA0-633E945092F9"}
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
 * @properties={typeid:24,uuid:"CFE08432-7F97-460D-8212-9D8E8DDB1BC6"}
 */
function getSplitterCount() {
	return 3
}

/**
 * @param {Number} _splitterNr
 *
 * @properties={typeid:24,uuid:"FE865E80-7BA7-4A45-A181-3073F9A4EC64"}
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
