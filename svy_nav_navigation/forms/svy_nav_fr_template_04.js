/**
 * @properties={typeid:24,uuid:"04D95134-2088-4CCB-AEC5-0C5B97210544"}
 */
function getPanelCount() {
	return 3;
}

/** *
 * @param _panelNr
 *
 * @properties={typeid:24,uuid:"6856BBAA-7C9E-41CE-AD27-926DC0E3948A"}
 */
function getPanelProperties(_panelNr) {
	var _panelProps = {_tabName:"tab"};
	switch (_panelNr) {
		case 1:
			_panelProps._orientation = 1;
			_panelProps._formName = controller.getName();
			break;
		case 2:
			_panelProps._orientation = 1;
			_panelProps._formName = controller.getName() + "_bottom";
			break;
		case 3:
			_panelProps._orientation = 2;
			_panelProps._formName = controller.getName() + "_bottom";
			break;
	}
	return _panelProps;
}

/**
 * @properties={typeid:24,uuid:"9D287196-6186-4A30-97A2-57AC9DB4DCDC"}
 */
function getSplitterCount() {
	return 2
}

/**
 * @param {Number} _splitterNr
 *
 * @properties={typeid:24,uuid:"3ABBDAE3-922B-43FA-9FBD-0E9F5F998494"}
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
