/**
 * @properties={typeid:24,uuid:"1D1BAB04-D2F2-4920-8C8D-D5B3CBB8372F"}
 */
function getPanelCount() {
	return 2;
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} _panelNr
 *
 * @properties={typeid:24,uuid:"01B75B0A-6388-4268-BDEC-0AB3B453515B"}
 */
function getPanelProperties(_panelNr) {
	var _panelProps = {_tabName:"tab", _formName:controller.getName()};
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
 * @properties={typeid:24,uuid:"BBC917FF-99D1-4B33-BC91-4D2C211A0E25"}
 */
function getSplitterCount() {
	return 1
}

/**
 * @param {Number} _splitterNr
 *
 * @properties={typeid:24,uuid:"6D407FA1-5BD8-441E-93B5-28E1387B753E"}
 */
function getSplitterElement(_splitterNr) {
	if (_splitterNr == 1) {
		return {formName:controller.getName(), elementName:"tab"};
	}
	return _super.getSplitterElement(_splitterNr);
}
