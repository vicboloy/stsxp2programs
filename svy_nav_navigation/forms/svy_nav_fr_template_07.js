/**
 * @properties={typeid:24,uuid:"2D9F5CA3-137F-4AC1-B3DB-6FFDC3D09281"}
 */
function getPanelCount() {
	return 3
}

/** *
 * @param _panelNr
 *
 * @properties={typeid:24,uuid:"D9DED3E0-1DC0-4440-98A2-4939FEAD6061"}
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
	   _panelProps._orientation = 2;
	   _panelProps._formName = controller.getName()
	 }
	 return _panelProps;
}

/**
 * @properties={typeid:24,uuid:"3AD6C2CF-1330-4746-9F84-C97D05F0318E"}
 */
function getSplitterCount() {
	return 2
}

/**
 * @param {Number} _splitterNr
 *
 * @properties={typeid:24,uuid:"49D43B0C-9E55-492F-B1D2-608C4E30DED3"}
 */
function getSplitterElement(_splitterNr) {
	if (_splitterNr == 1) {
		var _jsForm = solutionModel.getForm(controller.getName());
		var _tabPanel = _jsForm.getTabPanel("tab");
		var _tab = _tabPanel.getTabs()[0];
		
		return {formName: _tab.containsForm.name, elementName:"tab"};
	} else if (_splitterNr == 2) {
		return {formName:controller.getName(), elementName:"tab"};
	}
	return _super.getSplitterElement(_splitterNr);
}
