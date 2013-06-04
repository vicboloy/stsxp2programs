/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F17BA62A-DD3F-48D9-B36B-274ACE7F2122",variableType:4}
 */
var MAXCOLUMNS = 5;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"831954CC-88DE-4DB4-B0BF-9DD3DB108DE6",variableType:4}
 */
var GRIDSIZE = 134;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3DD11BEE-013A-46EC-A4A0-1A2286ACD7FC",variableType:4}
 */
var X_OFFSET = 80;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BFFB40AB-9F44-4785-A2D1-6F898DBD0FE6",variableType:4}
 */
var Y_OFFSET = 50;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"34B22E7F-FBB5-42A8-BEED-6973C031C348",variableType:4}
 */
var BUTTONSIZE = 114;

/**
 * @param {JSEvent} event
 * @param {Number} [_parent_id] The parent id for the menu_items that will be shown, null for root items
 *
 * @properties={typeid:24,uuid:"7D53167F-2716-41BE-9142-9CBC5102B8F0"}
 */
function initDesktop(event, _parent_id) {
	clearDesktop();
	var _menu_fs = globals.svy_nav_getMenuItems(_parent_id);

	var _jsForm = solutionModel.getForm(controller.getName());

	var x, y, _menu_rec, _jsButton, _jsMethod, _jsMethodWithArgs;
	for (var i = 1; i <= _menu_fs.getSize(); i++) {
		_menu_rec = _menu_fs.getRecord(i);

		if (databaseManager.hasRecords(_menu_rec.nav_menu_items_to_nav_menu_items$parent_id)) {
			_jsMethod = _jsForm.getMethod("openMenu");
		} else {
			_jsMethod = _jsForm.getMethod("openMenuItem");
		}
		_jsMethodWithArgs = solutionModel.wrapMethodWithArguments(_jsMethod, [null, _menu_rec.menu_item_id]);

		x = (i - 1) % MAXCOLUMNS * GRIDSIZE;
		y = Math.floor( (i - 1) / MAXCOLUMNS) * GRIDSIZE;

		_jsButton = _jsForm.newLabel("" + _menu_rec.menu_item_id, x + X_OFFSET, y + Y_OFFSET, BUTTONSIZE, BUTTONSIZE, _jsMethodWithArgs);
		_jsButton.name = x + "_" + y;
		_jsButton.imageMedia = solutionModel.getMedia(_menu_rec.tree_image != null ? _menu_rec.tree_image.replace(/^media:.../, "") : "");
		//		_jsButton.mediaOptions = SM_MEDIAOPTION.REDUCE;
		_jsButton.showClick = false;
		_jsButton.transparent = true;

		//		var _jsLabel = _jsForm.newLabel(_menu_rec.display_description, x+X_OFFSET + 5, y+Y_OFFSET+BUTTONSIZE-25, BUTTONSIZE-10, 20);
		//		_jsLabel.name =  x + "_" + y + "_lbl";

	}
	controller.recreateUI();
}

/**
 * @properties={typeid:24,uuid:"9AE13B87-ECAA-4959-80F6-11C1A506F5E3"}
 */
function clearDesktop() {
	var _jsForm = solutionModel.getForm(controller.getName());
	var _components = _jsForm.getComponents();
	_components = _components.filter(function(x) {return x.name!="dt_background";});
	for (var i = 0; i < _components.length; i++) {
		_jsForm.removeComponent(_components[i].name);
	}
	controller.recreateUI();
}

/**
 * @param {JSEvent} event
 * @param {Number} _menu_item_id
 * @param {String} [_elementName]
 *
 * @properties={typeid:24,uuid:"28D759B2-ADCF-4BAD-81D8-DF7ED9250EC5"}
 */
function openMenu(event, _menu_item_id, _elementName) {
	var _childFormName = "svy_nav_fr_desktop_" + application.getUUID()
	var _jsChildForm = solutionModel.newForm(_childFormName, solutionModel.getForm("svy_nav_fr_desktop_base"));
	_jsChildForm.transparent = true;
	
	var _body = _jsChildForm.getBodyPart()
	
	_body.height = 400
	_jsChildForm.width = 900

	var _bgLabel = _jsChildForm.newLabel("", 0, 0, 900, 400);
	_bgLabel.imageMedia = solutionModel.getMedia("dt_bg_second_level.png");
	_bgLabel.transparent = true;

	var _jsForm = solutionModel.getForm(controller.getName());

	var _jsTabPanel = _jsForm.newTabPanel("childTab", X_OFFSET, 200, 900, 400);
	_jsTabPanel.transparent = true;
	_jsTabPanel.newTab("children", "children", _jsChildForm);
	
	controller.recreateUI();

	forms[_childFormName].initDesktop(event, _menu_item_id);
}

/**
 * @param {JSEvent} event
 * @param {String|UUID} _menu_item_id
 *
 * @properties={typeid:24,uuid:"5A881FBE-AA92-4BB6-9302-CCDA38522AF0"}
 */
function openMenuItem(event, _menu_item_id) {
//	initDesktop(event);
	globals.svy_nav_openMenuItem(event,_menu_item_id);
}
