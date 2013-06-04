/**
 * @properties={typeid:24,uuid:"7AB9AF12-ED03-4260-B51F-2B64BDA96CCF"}
 */
function getPanelCount() {
	return 3;
}

/** *
 * @param _panelNr
 *
 * @properties={typeid:24,uuid:"AD7B7945-C622-44C9-AD58-B2ACC669A6AF"}
 */
function getPanelProperties(_panelNr) {
	var _panelProps = {_tabName:"tab"};
	switch (_panelNr) {
		case 1:
			_panelProps._orientation = 2;
			_panelProps._formName = controller.getName();
			break;
		case 2:
			_panelProps._orientation = 1;
			_panelProps._formName = controller.getName() + "_left";
			break;
		case 3:
			_panelProps._orientation = 2;
			_panelProps._formName = controller.getName() + "_left";
			break;
	}
	return _panelProps;
}

/**
 * @properties={typeid:24,uuid:"B8B46A96-DEB4-4B57-82F5-7DFC1E6946C0"}
 */
function getSplitterCount() {
	return 2
}

/**
 * @param {Number} _splitterNr
 *
 * @properties={typeid:24,uuid:"1159C3F9-660C-47B2-A8B7-E52A1BE0F617"}
 */
function getSplitterElement(_splitterNr) {
	if (_splitterNr == 1) {
		return {formName:controller.getName(), elementName:"tab"};
	} else if (_splitterNr == 2) {
		var _jsForm = solutionModel.getForm(controller.getName());
		var _tabPanel = _jsForm.getTabPanel("tab");
		var _tab = _tabPanel.getTabs()[0];
		
		return {formName: _tab.containsForm.name, elementName:"tab"};
	}
	return _super.getSplitterElement(_splitterNr);
}
