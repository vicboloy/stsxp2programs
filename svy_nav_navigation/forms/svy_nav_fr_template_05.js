/**
 * @properties={typeid:24,uuid:"BC325BA0-A6B0-4B8C-94D3-0CD402C06C5D"}
 */
function getPanelCount() {
	return 3;
}

/** *
 * @param _panelNr
 *
 * @properties={typeid:24,uuid:"1AF339B1-0973-4521-92F7-E68F67877F61"}
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
			_panelProps._formName = controller.getName() + "_right";
			break;
		case 3:
			_panelProps._orientation = 2;
			_panelProps._formName = controller.getName() + "_right";
			break;
	}
	return _panelProps;
}

/**
 * @properties={typeid:24,uuid:"C656DD77-9D0D-4246-9BA4-91B4A682CB38"}
 */
function getSplitterCount() {
	return 2
}

/**
 * @param {Number} _splitterNr
 *
 * @properties={typeid:24,uuid:"B58BC460-26DD-4153-85EC-5A757F22C837"}
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
