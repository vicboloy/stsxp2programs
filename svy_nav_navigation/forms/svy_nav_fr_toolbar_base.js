/**
 * @properties={typeid:35,uuid:"AC59AA6B-9587-4B02-AB34-3CE5CB4E5414",variableType:-4}
 */
var vToolbarObj = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B672699C-96F2-4723-AEF2-7CE6EBA707BA"}
 */
var vTabId = null;

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"E0415B62-4511-47D1-BE1A-8DAB42C67A23",variableType:-4}
 */
var vConnectedForms = [];

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A5F564FB-D95A-47F6-83A6-F7696E3D5F04",variableType:4}
 */
var vInit = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD9C205A-DBEE-4150-848F-C44DBCEB614F",variableType:4}
 */
var vLeftOffset = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A73D235A-A72F-4430-BFD7-587F9B52E408",variableType:4}
 */
var vRightOffset = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"489E6EDE-6AF3-4DEF-8460-1BE51EEFD6D3",variableType:4}
 */
var vView = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"97827B75-38D4-4C5B-A209-AE2AE5575F2A",variableType:4}
 */
var vEditOnTab = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"73153C4E-99B4-40BC-A662-D89656189563",variableType:4}
 */
var vPanel = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AD258976-AEEC-4D46-B5D6-73995B406295"}
 */
var vMode = 'browse';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8B2F5C38-59EB-4030-B290-21FC2511B96F",variableType:4}
 */
var vCurAlignment = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DB5BEF67-110A-4A5F-B76A-0FBFD1BA7AD0"}
 */
var vFormname = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E8C0CBB2-35C8-4DB9-863B-766EB1E3F191"}
 */
var vProgram = null;

/**
 * @properties={typeid:24,uuid:"59042075-681A-4730-BB38-52AF83ED58DC"}
 */
function getToolbarItems(_program, _access_type) {

	var _program_id = globals.nav.program[_program].program_id.toString()
	
	
	if (!vToolbarObj) {
		var _query = "\
			SELECT t.toolbar_id, ti.toolbar_item_id, t.name, ti.mode_type, ti.image_url, \
			ti.flag_splitter, ti.access_type, ti.parent_id, ti.description, ti.function_type, \
			ti.function_id, ti.toolbar_function, ti.function_type_r, \
			ti.function_id_r, ti.toolbar_function_r, pti.security_key_id, t.alignment \
			FROM nav_toolbar t, nav_program_toolbar pt, nav_toolbar_item ti \
			LEFT OUTER JOIN nav_program_toolbar_item pti ON pti.toolbar_item_id = ti.toolbar_item_id and pti.program_id = ?\
			WHERE pt.program_id = ? \
			AND ti.toolbar_id = pt.toolbar_id \
			AND t.toolbar_id = pt.toolbar_id ";
		if (scopes.svyProperties.getPropertyValueAsBoolean("filter_on_solution_name")) {
			// also filter on the solution name
			_query += "AND (t.solution_name = '" + application.getSolutionName() + "' OR t.solution_name IS NULL) ";
		}
		
		_query += "ORDER BY pt.sequence asc, ti.sequence asc";
		/** @type{JSDataSet<{toolbar_id:String, name:String,
		 * 						description:String, function_type:Number,
		 * 						function_id:Number, toolbar_function:String, function_type_r:Number,
		 * 						function_id_r:Number, toolbar_function_r:String, 
		 * 						security_key_id:String, image_url:String, flag_splitter:Number,
		 * 						alignment:Number, access_type:Number, toolbar_item_id:Number, mode_type:String,
		 * 						parent_id:String
		 * 					}>} */
		var _ds = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, [_program_id, _program_id], -1);
		if (!_ds || _ds.getMaxRowIndex() == 0) {
			return null;
		}
		
		var _left = [], _right = [];
		var _toolbar = []
		var _toolbarObj, _itemObj;
		var _toolbar_id
	
		for (var i = 1; i <= _ds.getMaxRowIndex(); i++) {
			_ds.rowIndex = i
			if (!_ds.security_key_id || (scopes.svySecurityManager.getSecurityKeysIds().indexOf(_ds.security_key_id) >= 0)) //items has no security or user had security for item
			{
				_itemObj = { };
				if (_toolbar_id != _ds.toolbar_id) {
					_toolbar_id = _ds.toolbar_id
					if (_toolbarObj) {
						if (_toolbarObj.alignment == 1) {
							_left.push(_toolbarObj);
						} else {
							_right.unshift(_toolbarObj);
						}
					}
					_toolbarObj = { name: _ds.name, image_url : _ds.image_url, alignment: _ds.alignment, items: [] };
				}
				if (/^i18n:/.test(_ds.description)) {
					_itemObj.description = i18n.getI18NMessage(_ds.description);
				} else {
					_itemObj.description = _ds.description;
				}
				_itemObj.function_type = _ds.function_type;
				_itemObj.function_id = _ds.function_id;
				_itemObj.toolbar_function = _ds.toolbar_function;
				_itemObj.function_type_r = _ds.function_type_r;
				_itemObj.function_id_r = _ds.function_id_r;
				_itemObj.toolbar_function_r = _ds.toolbar_function_r;
				_itemObj.image_url = _ds.image_url
				_itemObj.flag_splitter = _ds.flag_splitter
				_itemObj.mode_type = _ds.mode_type
				_itemObj.toolbar_item_id = _ds.toolbar_item_id;
				_itemObj.access_type = _ds.access_type
				_itemObj.parent_id = _ds.parent_id

				if (_toolbarObj.alignment == 1) {
					_toolbarObj.items.push(_itemObj);
				} else {
					_toolbarObj.items.unshift(_itemObj);
				}
			}
		}
		if (_toolbarObj.alignment == 1) {
			_left.push(_toolbarObj);
		} else {
			_right.unshift(_toolbarObj);
		}
		_toolbar = _left.concat(_right);
		
		vToolbarObj = _toolbar;
	}
	return vToolbarObj
}

/**
 * @param {String} [_mode]
 * 
 * @properties={typeid:24,uuid:"A88C66C9-D966-47D1-A890-A039386432A9"}
 */
function updateUI(_mode) {
	
	if(_mode)
	{
		vMode = _mode
	}
	
	/** @type{Array<{name:String, alignment:Number, items:Array}>} */
	var _toolbar = getToolbarItems(vProgram, 'tab')
	if (!_toolbar) {
		return;
	}
	
	/** @type{Array<{
	 * function_type:Number, 
	 * function_id:Number, 
	 * image_url:String, 
	 * flag_splitter:Number, 
	 * toolbar_function:String, 
	 * parent_id:String, 
	 * toolbar_item_id:String, 
	 * access_type:String, 
	 * function_type_r:String, 
	 * description:String, 
	 * toolbar_function_r:String
	 * }>}
	 */
	var _items;

	var _formName, _jsForm;

	var _iconHeight = getIconHeight();
	var _iconWidth = getIconWidth();
	var _spacing = getSpacing();
	var _formWidth, _x;
	
	if(!vInit)
	{
		
		var _formAr = []; //array of all toolbar form names
		for (var i = 0; i < _toolbar.length; i++) {
			//loop through toolbars
			if (_formName != getToolbarForm(_toolbar[i].name)) {
				_formName = getToolbarForm(_toolbar[i].name); //the toolbarForm can change for each toolbar (when having toolbars with multiple tabs)
				forms[_formName]["vLeftOffset"] = getLeftOffset();
				forms[_formName]["vRightOffset"] = getRightOffset();
			}
			if (_formAr.indexOf(_formName) == -1) {
				_formAr.push(_formName);
			}
	
			_jsForm = solutionModel.getForm(_formName);
			_formWidth = _jsForm.width;
			
			_items = _toolbar[i].items
			var _jsMethod, _jsLabel;
			for (var j = 0; j < _items.length; j++) {
				if (_jsForm.getLabel(_items[j].toolbar_item_id)) {
					continue;
				}
				
				//button for main form but form is tab, or button is for tab but form is main
				if((vPanel != 1 && _items[j].access_type == 'M') || (vPanel == 1 && _items[j].access_type == 'T')) continue
				
				//This item is the child of another item. It will not be shown as a button, but for example in a popup.
				if (_items[j].parent_id) continue;
				
				// loop through items
				if (_items[j].function_type == 1) {
					_jsMethod = _jsForm.getMethod("callProgramFunction");
					_jsMethod = solutionModel.wrapMethodWithArguments(_jsMethod, [null, '"' + _items[j].toolbar_function + '"']);
				} else if (_items[j].function_type == 2) {
					_jsMethod = _jsForm.getMethod("callFunction");
					_jsMethod = solutionModel.wrapMethodWithArguments(_jsMethod, [null, '"' + _items[j].function_id + '"']);
				}
				//Determine x position and update offset for next item
				if (_toolbar[i].alignment == 1) {
					_x = forms[_formName]['vLeftOffset'];
					forms[_formName]['vLeftOffset'] = forms[_formName]['vLeftOffset'] + _iconWidth + _spacing
				} else {
					_x = (_formWidth - forms[_formName]['vRightOffset'] - _iconWidth);
					forms[_formName]['vRightOffset'] = forms[_formName]['vRightOffset'] + _iconWidth + _spacing
				}
				_jsLabel = _jsForm.newLabel('', _x, forms[_formName].getTopOffset(), _iconWidth, _iconHeight, _jsMethod);
				_jsLabel.imageMedia = solutionModel.getMedia(_items[j].image_url);
				_jsLabel.name = _items[j].toolbar_item_id
				_jsLabel.showClick = false;
				_jsLabel.rolloverCursor = SM_CURSOR.HAND_CURSOR
				_jsLabel.toolTipText = _items[j].description
				_jsLabel.transparent = true;
				
				if ((_items[j].mode_type && _items[j].mode_type.indexOf(vMode) >= 0) || _items[j].mode_type == 'all') {
					_jsLabel.enabled = true
				} else {
					_jsLabel.enabled = false
				}
				_jsLabel.anchors = _toolbar[i].alignment == 1 ? SM_ANCHOR.NORTH|SM_ANCHOR.WEST : SM_ANCHOR.NORTH|SM_ANCHOR.EAST;
	
				//set rightClick
				if (_items[j].function_type_r == 1 && _items[j].toolbar_function_r) {
					_jsMethod = _jsForm.getMethod("callProgramFunction");
					_jsMethod = solutionModel.wrapMethodWithArguments(_jsMethod, [null, '"' + _items[j].toolbar_function_r + '"']);
					_jsLabel.onRightClick = _jsMethod
				} else if (_items[j].function_type_r == 2 && _items[j].function_id_r) {
					_jsMethod = _jsForm.getMethod("callFunction");
					_jsMethod = solutionModel.wrapMethodWithArguments(_jsMethod, [null, '"' + _items[j].function_id_r + '"']);
					_jsLabel.onRightClick = _jsMethod
				}
				
				forms[_formName]['vOffset'] = forms[_formName]['vOffset'] + _iconWidth + _spacing;
				
				if(_items[j].flag_splitter)
				{
					draw_splitter(_jsForm, _toolbar[i].alignment, _spacing);
				}
			}
		}
		
		//call recreateUI for all changed forms 
		for (var n = 0; n < _formAr.length; n++) {
			forms[_formAr[n]].controller.recreateUI();
		}
		vInit = 1
	}
	else //only update the layout
	{
		var _val, _method;
		for (var k = 0; k < _toolbar.length; k++) {
			_formName = getToolbarForm(_toolbar[k].name)
			_items = _toolbar[k].items
			for (var m = 0; m < _items.length; m++) {
				if (_items[m].parent_id) continue;
					
				_val = false;
				//if the current mode is in the string of modes that is allowed for this item
				if (_items[m].mode_type && _items[m].mode_type.indexOf(vMode)>= 0) {
					_val = true
				}
				if (_items[m].function_type == 1) {
					_method = _items[m].toolbar_function;
				} else {
					_method = _items[m].function_id;
				}
				if (forms[_formName].elements[_items[m].toolbar_item_id]) {
					var _aloud = _val && isMethodAllowed(_method)
					if(forms[_formName].elements[_items[m].toolbar_item_id].enabled != _aloud)
					{
						forms[_formName].elements[_items[m].toolbar_item_id].enabled = _aloud;
					}
				}
			}
		}
	}
}

/**
 * Calls the function on the form that is connected to the toolbar
 * @param {JSEvent} _event
 * @param {String} _functionName
 *
 * @properties={typeid:24,uuid:"3A52CAF2-E9A6-4F95-9147-24DB86DE3900"}
 */
function callProgramFunction(_event, _functionName) {
	var _parentForm = scopes.modUtils$UI.getParentFormName(this)
	
	if(_parentForm && forms[_parentForm] && forms[_parentForm].isToolbar && forms[_parentForm].isToolbar())
	{
		forms[_parentForm].callProgramFunction(_event, _functionName)
		return
	}
	forms[vFormname][_functionName](_event);
}

/**
 * @param {Object} _arg1
 * @param {Object} _arg2
 * @param {Object} _arg3
 * @param {Object} _arg4
 * @param {Object} _arg5
 * @param {String} _functionName
 *
 * @properties={typeid:24,uuid:"83DF488C-5567-479A-999F-4105DEB140B6"}
 */
function callProgramFunctionFromPopmenu(_arg1, _arg2, _arg3, _arg4, _arg5, _functionName) {
	callProgramFunction(null, _functionName)
}

/**
 * Calls the framework function
 * @param {JSEvent} _event
 * @param {String|UUID} _function_id
 *
 * @properties={typeid:24,uuid:"D82AA956-99DE-4207-8D5D-3831D9ECF2AC"}
 */
function callFunction(_event, _function_id) {
	globals.svy_nav_callFunction(_function_id, _event)
}

/**
 * @param {Object} _arg1
 * @param {Object} _arg2
 * @param {Object} _arg3
 * @param {Object} _arg4
 * @param {Object} _arg5
 * @param {String|UUID} _function_id
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"20CB53D4-4F50-4AD9-A6AC-BEE55B5240B3"}
 */
function callFunctionFromPopmenu(_arg1, _arg2, _arg3, _arg4, _arg5, _function_id, _event) {
	callFunction(_event, _function_id)
}

/**
 * Returns the name of the form for the toolbar
 * @param {String} _toolbarName
 * @return {String}
 * @properties={typeid:24,uuid:"2A95D995-BA98-4C24-B0E0-422EAC72F29A"}
 */
function getToolbarForm(_toolbarName) {
	return controller.getName()
}

/**
 * @properties={typeid:24,uuid:"8321467D-8E59-4D93-8575-06E301016AF6"}
 */
function getLeftOffset() {
	return getSpacing();
}

/**
 * @properties={typeid:24,uuid:"574109C9-C7C8-49D2-8FB7-69619109705A"}
 */
function getRightOffset() {
	return getSpacing();
}

/**
 * @properties={typeid:24,uuid:"BA1CE945-D5DD-4777-91CB-C791067A18B9"}
 */
function getTopOffset() {
	return 4;
}

/**
 * @properties={typeid:24,uuid:"2CFFFA4B-469D-4508-871B-DE16C7650FEC"}
 */
function getIconHeight() {
	return 24;
}

/**
 * @properties={typeid:24,uuid:"1285F7BC-3058-4CEB-8477-AB0EA6267BCD"}
 */
function getIconWidth() {
	return 24;
}

/**
 * @properties={typeid:24,uuid:"5D384B59-D460-4793-96EB-58FF37DEB6BC"}
 */
function getSpacing() {
	return 4;
}

/**
 * @param {JSForm} _jsForm
 * @param {Number} _alignment
 * @param {Number} _spacing
 * @properties={typeid:24,uuid:"917DF5B6-1D6B-4501-B582-554E618189E1"}
 */
function draw_splitter(_jsForm, _alignment, _spacing) {
	//TODO: Add support for vertical toolbars

	var _width = 1
	var _formName = _jsForm.name
	var _splitter_height = scopes.modUtils$UI.getJSFormHeight(_formName) - 2;
	var _y = 1
	var _formWidth = _jsForm.width;
	
	var _x;
	if (_alignment == 1) {
		_x = forms[_formName]['vLeftOffset'];
		forms[_formName]['vLeftOffset'] = forms[_formName]['vLeftOffset'] + _width + _spacing
	} else {
		_x = (_formWidth - forms[_formName]['vRightOffset'] - _width);
		forms[_formName]['vRightOffset'] = forms[_formName]['vRightOffset'] + _width + _spacing
	}

	var _label = _jsForm.newLabel('',_x,_y,_width,_splitter_height);
	_label.anchors = _alignment == 1 ? SM_ANCHOR.NORTH|SM_ANCHOR.WEST : SM_ANCHOR.NORTH|SM_ANCHOR.EAST;
	_label.styleClass = 'toolbar_line'
}

/**
 * @properties={typeid:24,uuid:"17F99D6D-7DC7-4094-AA00-0A019AC6BEE1"}
 */
function isToolbar() {
	return true
}

/**
 * Check if method is allowed, will be called every onrecordSelection
 * @param {String} _method
 * @return {Boolean} true if method is allowed
 * @properties={typeid:24,uuid:"69904747-CD6A-4DDA-A4B4-85E6A68D7DED"}
 */
function isMethodAllowed(_method) {
	var _return = forms[vFormname].isMethodAllowed(_method)
	var _datasource = forms[vFormname].controller.getDataSource();
	var _foundset = utils.hasRecords(forms[vFormname].foundset)
	
	var _size = 0
	var _index = 0
	if(forms[vFormname].foundset.getSize() > 0)
	{
		_size = forms[vFormname].foundset.getSize()
		_index = forms[vFormname].foundset.getSelectedIndex()
	}

	switch (_method) {
		case 'dc_new':
			_return = _return && security.canInsert(_datasource)
			break;
		case 'dc_duplicate':
			_return = _return && security.canInsert(_datasource) && _foundset
			break;
		case 'dc_edit':
			_return = _return && security.canUpdate(_datasource) && _foundset
			break;
		case 'dc_delete':
			_return = _return && security.canDelete(_datasource) && _foundset
			break;
		case 'dc_sort':
			break;
		case 'dc_export':
			break;			
		case 'dc_recNext':
			_return = _return && _foundset
			if (_size == _index) _return = false
			break;			
		case 'dc_recLast':
			_return = _return && _foundset
			if (_size == _index) _return = false
			break;
		case 'dc_recPrev':
			_return = _return && _foundset
			if (_index == 1) _return = false
			break;			
		case 'dc_recFirst':
			_return = _return && _foundset
			if (_index == 1) _return = false
			break;
		case 'dc_recInfo':
			_return = _return && _foundset
			break;
		case 'dc_resetTableViewPersistance':
			//only table view persistance in table views
			if (forms[vFormname].controller.view != JSForm.LOCKED_TABLE_VIEW) {
				_return = false
			}
			break;
		default:
			break;	
	}
	return _return
}
