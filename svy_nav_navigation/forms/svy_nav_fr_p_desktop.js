/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96DC4446-013E-486F-9BA5-4E394CDACD13",variableType:8}
 */
var ICONSIZE = BUTTONSIZE - 20;

/**
 * @param {JSEvent} event
 * @param {Number} [_parent_id]
 *
 * @properties={typeid:24,uuid:"065F8CD9-8BB8-429D-819F-A3CF5BC1AB43"}
 */
function initDesktop(event, _parent_id) {
	BUTTONSIZE = 77;
	GRIDSIZE = 80;
	MAXCOLUMNS = 32;
	
	clearDesktop();
	var _menu_fs = globals.svy_nav_getMenuItems(_parent_id);

	var _jsForm = solutionModel.getForm(controller.getName());

	var x, y, _menu_rec;
	for (var i = 1; i <= _menu_fs.getSize(); i++) {
		_menu_rec = _menu_fs.getRecord(i);

		x = (i - 1) % MAXCOLUMNS * GRIDSIZE;
		y = Math.floor( (i - 1) / MAXCOLUMNS) * GRIDSIZE;

		drawButton(_jsForm,_menu_rec, x+X_OFFSET, y+Y_OFFSET, 0);
	}
	controller.recreateUI();
}

/**
 * Draws one single button at a certain position
 * 
 * @param {JSForm} _jsForm the menu form
 * @param {JSRecord<db:/svy_framework/nav_menu_items>} _menu_rec the menu item record
 * @param {Number} x
 * @param {Number} y
 * @param {Number} _level the menu level. Root is level 0
 * 
 * @author Joas de Haan
 * 
 * @properties={typeid:24,uuid:"3F624A6C-3289-494C-9B7D-B2E1F01FD1A6"}
 */
function drawButton(_jsForm, _menu_rec, x, y, _level) {
	var _jsMethod, _jsMethodWithArgs;
	
	/** @type {JSLabel} */
	var _jsButtonBG, _jsButtonFG, _jsTitle;

	var _titleHeight = 16;

	if (databaseManager.hasRecords(_menu_rec.nav_menu_items_to_nav_menu_items$parent_id)) {
		_jsMethod = _jsForm.getMethod("openMenu");
	} else {
		_jsMethod = _jsForm.getMethod("openMenuItem");
	}
	_jsMethodWithArgs = solutionModel.wrapMethodWithArguments(_jsMethod, [null, _menu_rec.menu_item_id, null, _level+1]);

	//Background image
	_jsButtonBG = _jsForm.newLabel("bg_" + _menu_rec.menu_item_id, x, y, BUTTONSIZE, BUTTONSIZE, _jsMethodWithArgs);
	_jsButtonBG.name = _level + "_bg_" + x + "_" + y;
	_jsButtonBG.imageMedia = solutionModel.getMedia(_menu_rec.calc_bg_image != null ? _menu_rec.calc_bg_image.replace(/^media:.../, "") : "");
	_jsButtonBG.showClick = false;
	_jsButtonBG.showFocus = false;
	_jsButtonBG.transparent = true;
	_jsButtonBG.rolloverCursor = SM_CURSOR.HAND_CURSOR;
	
	//Foreground image
	_jsButtonFG = _jsForm.newLabel("fg_" + _menu_rec.menu_item_id, x, y, BUTTONSIZE, BUTTONSIZE, _jsMethodWithArgs);
	_jsButtonFG.name = _level + "_fg_" + x + "_" + y;
	_jsButtonFG.imageMedia = solutionModel.getMedia(_menu_rec.calc_fg_image != null ? _menu_rec.calc_fg_image.replace(/^media:.../, "") : "");
	_jsButtonFG.showClick = false;
	_jsButtonFG.showFocus = false;
	_jsButtonFG.transparent = true;
	_jsButtonFG.rolloverCursor = SM_CURSOR.HAND_CURSOR;
	_jsButtonFG.toolTipText = _menu_rec.display_description ? _menu_rec.display_description : "";
	
	//For title add the fg element as argument, so the menu will be shown at the position of the fg element.
	_jsMethodWithArgs = solutionModel.wrapMethodWithArguments(_jsMethod, [null, _menu_rec.menu_item_id, "'"+_jsButtonFG.name+"'", _level+1]);
	
	//Title text
	var _text = _menu_rec.display_description ? _menu_rec.display_description.toUpperCase() : "";
	_jsTitle = _jsForm.newLabel(_text, x, y+BUTTONSIZE-3, BUTTONSIZE, _titleHeight, _jsMethodWithArgs);
	_jsTitle.name = _level + "_title_" + x + "_" + y;
	_jsTitle.styleClass = "mainmenu";
	_jsTitle.transparent = true;
	_jsTitle.showClick = false;
	_jsTitle.showFocus = false;
	_jsTitle.horizontalAlignment = SM_ALIGNMENT.CENTER;
	_jsTitle.rolloverCursor = SM_CURSOR.HAND_CURSOR;

}

/**
 * Removes all menu elements/buttons from a certain level and higher
 * (All element names start with the level number)
 * 
 * @param {JSEvent} event
 * @param {Number} _level menu level. Root == 0.
 * 
 * @author Joas de Haan
 * 
 * @properties={typeid:24,uuid:"22F4DAB9-8217-4C50-AC12-72A08D681AAD"}
 */
function clearMenuLevel(event, _level) {
	var _formName = event.getFormName();
	var _elements = elements.allnames;
	_elements = _elements.filter(
		function(x) {
			var _match = x.match(/^(\d+)/);
			if (_match && (_match[0]*1 < _level)) {
				return false;
			}
			return true;
		}
	);
	var _jsForm = solutionModel.getForm(_formName);
	for (var i = 0; i < _elements.length; i++) {
		_jsForm.removeLabel(_elements[i]);
	}	
}

/**
 * Called when a menu item with sub items is clicked. It creates the buttons for the sub items.
 * 
 * @param {JSEvent} event
 * @param {Number} _menu_item_id
 * @param {String} [_elementName]
 * @param {Number} [_level]
 * 
 * @author Joas de Haan
 *
 * @properties={typeid:24,uuid:"8D01FC9D-24E6-426F-8502-9F66FADAF544"}
 */
function openMenu(event, _menu_item_id, _elementName, _level) {
	if (!_elementName) {
		_elementName = event.getElementName();
	}
	if (!_level) {
		_level = 1;
	}
	clearMenuLevel(event, _level);
	
	var _jsForm = solutionModel.getForm(controller.getName());

	var _menu_fs = globals.svy_nav_getMenuItems(_menu_item_id);
	
	/** @type {RuntimeLabel} */
	var _source = forms[controller.getName()].elements[_elementName];
	var _sourceX = _source.getLocationX();
	var _x_offset = _sourceX - (_menu_fs.getSize()==1 ? 0 : GRIDSIZE*0.5);
	if (_x_offset < 0) {
		_x_offset = _sourceX;
	}
	var _y_offset = _source.getLocationY() + GRIDSIZE + 17;
	
	
	//If the child items don't fit on the form, move them to the left until they do.
	var _formWidth = controller.getFormWidth();
	var _subMenuSize = _menu_fs.getSize() * GRIDSIZE;
	while ( (_x_offset+_subMenuSize > _formWidth) && (_x_offset > 10)) {
		_x_offset -= GRIDSIZE;
	}

	var _bgEdgeWidth = 11;
	var _bgHeight = 94;
	var _img_prefix = (_level % 2 == 0) ? "pv_dg75_" : "pv_b75_";

	var x, y, _menu_rec;
	for (var i = 1; i <= _menu_fs.getSize(); i++) {
		x = (i - 1) % MAXCOLUMNS * GRIDSIZE + _x_offset;
		y = Math.floor( (i - 1) / MAXCOLUMNS) * GRIDSIZE + _y_offset;
		
		if (i == 1) {
			//Set left bg
			var _leftBG = _jsForm.getLabel("leftBG");
			_leftBG = _jsForm.newLabel("", _x_offset, _y_offset, _bgEdgeWidth, _bgHeight);
			_leftBG.imageMedia = solutionModel.getMedia(_img_prefix + "down_left.png");
			_leftBG.transparent = true;
			_leftBG.name = _level + "_leftBG_" + application.getUUID();
			_leftBG.formIndex = -1;
		}
		_menu_rec = _menu_fs.getRecord(i);
		drawButton(_jsForm,_menu_rec,x,y+2, _level);
		
		if (i == _menu_fs.getSize()) {
			//Set right bg
			var _rightBG = _jsForm.getLabel("rightBG");
			_rightBG = _jsForm.newLabel("", x+BUTTONSIZE-10, y, _bgEdgeWidth, _bgHeight);
			_rightBG.imageMedia = solutionModel.getMedia(_img_prefix + "down_right.png");
			_rightBG.transparent = true;
			_rightBG.name = _level + "_rightBG_" + application.getUUID();
			_rightBG.formIndex = -1;

			//Set middle bg
			var _midBG = _jsForm.getLabel("midBG");
			_midBG = _jsForm.newLabel("", _bgEdgeWidth+_x_offset, _y_offset, _menu_fs.getSize()*GRIDSIZE-24, _bgHeight);
			_midBG.imageMedia = solutionModel.getMedia(_img_prefix + "down_mid.png");
			_midBG.transparent = true;
			_midBG.name = _level + "_midBG_" + application.getUUID();
			_midBG.formIndex = -1;
			_midBG.mediaOptions = SM_MEDIAOPTION.ENLARGE;
		}
	}

	//Set selected bg
	var _img_name = _img_prefix + "top_full"
	if (_menu_fs.getSize()==1) {
		_img_name += "_1_child";
	} else if (_x_offset == _sourceX) {
		_img_name += "_left";
	}
	_img_name += ".png";
	
	var _selectedBG = _jsForm.getLabel("selectedBG");
	_selectedBG = _jsForm.newLabel("", _source.getLocationX()-11, _source.getLocationY()-2, 99, 109);
	_selectedBG.imageMedia = solutionModel.getMedia(_img_name);
	_selectedBG.transparent = true;
	_selectedBG.name = _level + "_selectedBG";
	_selectedBG.formIndex = -1;
	_selectedBG.mediaOptions = SM_MEDIAOPTION.CROP;
	
	controller.recreateUI();
}
