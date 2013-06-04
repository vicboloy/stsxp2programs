/**
 * Handle start of a drag, it can set the data that should be transfered and should return a constant which dragndrop mode/modes is/are supported.
 *
 * Should return a DRAGNDROP constant or a combination of 2 constants:
 * DRAGNDROP.MOVE if only a move can happen,
 * DRAGNDROP.COPY if only a copy can happen,
 * DRAGNDROP.MOVE|DRAGNDROP.COPY if a move or copy can happen,
 * DRAGNDROP.NONE if nothing is supported (drag should not start).
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Number}
 *
 * @properties={typeid:24,uuid:"DEA829DA-63D2-4143-944B-2060D145CF03"}
 */
function onDrag(event) {
	return DRAGNDROP.MOVE
}

/**
 * Handle a drag over. Determines of a drop is allowed in this location.
 *
 * Return true is drop is allowed, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"554F3B0D-4CF3-4103-B6C4-7ACE576BA96E"}
 */
function onDragOver(event) {
	if (event.getSource() && event.data) {
		return true;
	}
	return false;
	
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4FE4958E-A1B9-4773-818F-2D4B6B3D8F35"}
 */
function onDrop(event) {
	/** @type {Array<RuntimeComponent>} */
	var _data = event.data
	for (var i = 0; i < _data.length; i++) {
		changeElement(_data[i].getName(), _data[i].getLocationX(), _data[i].getAbsoluteFormLocationY(), _data[i].getWidth(),_data[i].getHeight()) 
	}
	return true
}

/**
 * @param {JSDNDEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"AF47C30A-D855-41F6-915B-1EB3EBBCB0ED"}
 */
function onResize(event) {
	/** @type {Array<RuntimeComponent>} */
	var _data = event.data
	for (var i = 0; i < _data.length; i++) {
    	changeElement(_data[i].getName(), _data[i].getLocationX(), _data[i].getAbsoluteFormLocationY(), _data[i].getWidth(),_data[i].getHeight()) 
	}
	return true
}

/**
 * @param {String} _name
 * @param {Number} _x
 * @param {Number} _y
 * @param {Number} _w
 * @param {Number} _h
 * @properties={typeid:24,uuid:"3FF86FEB-6713-4482-B4C9-806A051BF071"}
 */
function changeElement(_name, _x, _y, _w,_h) {
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.getForm(_formname)
	var _jsComp = _jsForm.getComponent(_name)
	_jsComp.x = _x
	_jsComp.y = _y
	_jsComp.height = _h
	_jsComp.width = _w
	
}

/**
 * @properties={typeid:24,uuid:"D3EB12F0-51F2-4832-A677-04AC2EDD5828"}
 */
function onSelect() {
	return true
}
