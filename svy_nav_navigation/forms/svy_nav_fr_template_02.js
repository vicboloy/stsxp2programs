/**
 * @properties={typeid:24,uuid:"1196C095-53C8-4993-A808-1C9EA288008D"}
 */
function getPanelCount() {
	return 2
}

/** *
 * @param _panelNr
 *
 * @properties={typeid:24,uuid:"9B728FB1-28E0-4E42-A91F-59383B3215A0"}
 */
function getPanelProperties(_panelNr) {
	var _panelProps = { _tabName: "tab", _formName: controller.getName() };
	switch (_panelNr) {
	case 1:
		_panelProps._orientation = 1;
		break;
	case 2:
		_panelProps._orientation = 2;
		break;
	}
	return _panelProps;
}

/**
 * @properties={typeid:24,uuid:"21828F7A-A844-49B8-A0BC-A3F39DA4B5C1"}
 */
function getSplitterCount() {
	return 1
}

/**
 * @properties={typeid:24,uuid:"E3D39DCB-F33F-4553-9BFC-8207FFDDBFF3"}
 */
function getSplitterElement(_splitterNr) {
	if (_splitterNr == 1) {
		return {formName:controller.getName(), elementName:"tab"};
	}
	return _super.getSplitterElement(_splitterNr);
}
