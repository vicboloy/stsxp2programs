/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D6BFEA11-29D8-4235-BDA9-E18BBE603A3D"}
 */
function onDataChangeSplitterPos(oldValue, newValue, event) {
	var _dataset = databaseManager.convertToDataSet(foundset, ['sequence', 'splitter_pos']);
	_dataset.sort(1,true);
	var _array = [];
	_array.push(null);
	for (var i = 1; i <= _dataset.getMaxRowIndex(); i++) {
		_array[i] = _dataset.getValue(i, 2);
	}
	
	forms.svy_nav_c_layout_dtl.splitter_pos_array = _array;
	
	return true;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"13EB0035-36E9-4C31-B33A-9189C7725E9B"}
 */
function onDataChangeTabsOrientation(oldValue, newValue, event) {
	var _dataset = databaseManager.convertToDataSet(foundset, ['sequence', 'tabs_orientation']);
	_dataset.sort(1, true);
	
	var _array = [];
	_array.push(null);
	for (var i = 1; i <= _dataset.getMaxRowIndex(); i++) {
		_array[i] = _dataset.getValue(i, 2);
	}
	
	forms.svy_nav_c_layout_dtl.tabs_orientation_array = _array;
	
	return true;
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"925C4FAE-D13C-429B-9886-92232D0104D1"}
 */
function onRenderSplitterPos(event) {
	if(event.getRecord())
	{
		if (event.getRecord()['sequence'] == foundset.getSize()) {
			event.getRenderable().enabled = false;
		} else {
			event.getRenderable().enabled = true;
		}
	}
}
