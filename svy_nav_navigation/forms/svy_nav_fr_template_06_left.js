/**
 * @properties={typeid:24,uuid:"77B05770-C9BC-4BA2-8DFB-E5B1A3966E07"}
 */
function getPanelCount() {
	return 2
}

/** *
 * @param _panelNr
 *
 * @properties={typeid:24,uuid:"B1D9E861-5034-435D-A7E6-1D8ED70AC8F0"}
 */
function getPanelProperties(_panelNr) {
	var _panelProps = {_formName:controller.getName(), _tabName:"tab"};
	switch (_panelNr) {
		case 1:
			_panelProps.orientation = 1;
			break;
		case 2:
			_panelProps.orientation = 2;
			break;
	}
	return _panelProps;
}
