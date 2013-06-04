/**
 * @properties={typeid:24,uuid:"670EE64B-AD2F-451C-82E0-7071CC23107A"}
 */
function getPanelCount() {
	return 3
}

/** *
 * @param _panelNr
 *
 * @properties={typeid:24,uuid:"9BC35ECB-89F0-4295-A42C-F5844503032B"}
 */
function getPanelProperties(_panelNr) {
	var _panelProps = {_tabName:"tab"};
	 switch (_panelNr) {
	  case 1:
	   _panelProps._orientation = 1;
	   _panelProps._formName = controller.getName()
	   break;
	  case 2:
	  	_panelProps._orientation = 1;
	   _panelProps._formName = controller.getName() + "_bottom";
	   break;
	  case 3:
	   _panelProps._orientation = 2;
	   _panelProps._formName = controller.getName() + "_bottom";
	 }
	 return _panelProps;
}

/**
 * @properties={typeid:24,uuid:"B0BB30E2-2C99-4B89-A6F7-3FB96F602E71"}
 */
function getSplitterCount() {
	return 2
}

/**
 * @param {Number} _splitterNr
 *
 * @properties={typeid:24,uuid:"FDB47298-36A5-40CE-BFF6-F48016EB8E57"}
 */
function getSplitterElement(_splitterNr) {
	if (_splitterNr == 1) {
		return {formName:controller.getName(), elementName:"tab"};
	} else if (_splitterNr == 2) {
		var _jsForm = solutionModel.getForm(controller.getName());
		var _tabPanel = _jsForm.getTabPanel("tab");
		var _tab = _tabPanel.getTabs()[1];
		
		return {formName: _tab.containsForm.name, elementName:"tab"};
	}
	return _super.getSplitterElement(_splitterNr);
}
