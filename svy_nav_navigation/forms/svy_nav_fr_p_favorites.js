/**
 * @properties={typeid:24,uuid:"EA55491C-49EC-4868-9DBD-EBD1961583E3"}
 */
function newFavorite() {
	globals.svy_nav_favoriteSave()
	drawFavorites()
}

/**
 * @properties={typeid:24,uuid:"F3A2FF7E-6EB4-446B-A3EA-B63CCABF511B"}
 */
function drawFavorites() {
	var _favorites = globals.svy_nav_getFavorites()
	var _jsForm = solutionModel.revertForm(controller.getName())
	var _lbl, _lbl_bg
	var _x = 30
	var _y = 0
	var _h = 44
	var _w = 44
	var _b = 4
	
	for (var i = 0; i < _favorites.length; i++) {
		
		if(_favorites[i].image_name_bg)
		{
			_lbl_bg = _jsForm.newLabel('',_x,_y,_w,_h)
			_lbl_bg.imageMedia = solutionModel.getMedia(_favorites[i].image_name_bg)
			_lbl_bg.name = 'lbl_bg_'+ i
			_lbl_bg.transparent = true
			_lbl_bg.showClick = false
			_lbl_bg.formIndex = 10
		}
		
		_lbl = _jsForm.newLabel('',_x,_y,_w,_h)
		_lbl.onAction = _jsForm.getMethod('gotoFavorite')
		_lbl.imageMedia = solutionModel.getMedia(_favorites[i].image_name)
		_lbl.name = 'lbl_'+ i
		_lbl.transparent = true
		_lbl.toolTipText = _favorites[i].text1
		_lbl.rolloverCursor = SM_CURSOR.HAND_CURSOR;
		_lbl.showClick = false
		_lbl.onRightClick = _jsForm.getMethod('popmenu')
		_lbl.formIndex = 20
		_x += _b + _w
	}
	controller.recreateUI()
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"FC1FDA55-9D30-4AFA-8607-58F8BE000A29"}
 */
function gotoFavorite(event) {
	var _element = event.getElementName()
	/** @type{Number} */
	var _nr = utils.stringReplace(_element,'lbl_','')
	globals.svy_nav_shortcut_goto(event, _nr)
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1A254C11-95D8-4621-8E15-7E9E58ACB276"}
 */
function onLoad(event) {
	scopes.svySecurityManager.addOrganizationChangeListener(drawFavorites);
	drawFavorites();
}

/**
 * @properties={typeid:24,uuid:"C3576F5B-53E0-4824-8EA3-3481A746B9D0"}
 * @AllowToRunInFind
 */
function deleteFavorite(arg1, arg2, arg3, arg4, arg5, _button_nr) {
	globals.svy_nav_favoriteDelete(null, _button_nr)
	drawFavorites()
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"1DE533FA-3419-4286-8C22-E961AA14791E"}
 */
function popmenu(event) {
	
	var _button = event.getElementName();
	var _buttonnr = _button.replace(/[^0-9]/g, "") * 1
	var _favorites = globals.svy_nav_getFavorites()
		
	var popupmenu = plugins.window.createPopupMenu()

	var _item = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.delete'), deleteFavorite)
	_item.methodArguments = [_buttonnr]
	_item = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.move_left'), moveUp, null, null, (_buttonnr > 0))
	_item.methodArguments = [_buttonnr]
	_item = popupmenu.addMenuItem(i18n.getI18NMessage('i18n:svy.fr.lbl.move_right'), moveDown, null, null, (_buttonnr < _favorites.length - 1))
	_item.methodArguments = [_buttonnr]
	

	var source = event.getSource();
	if (source != null) {
		popupmenu.show(source);
	}
}

/**
 * * @param {Object} _arg1
* @param {Object} _arg2
* @param {Object} _arg3
* @param {Object} _arg4
* @param {Object} _arg5
* @param {Number} _button_nr
 * @properties={typeid:24,uuid:"7D3633A1-CD43-467C-A2A3-1B1218AEFDCD"}
 */
function moveUp(_arg1, _arg2, _arg3, _arg4, _arg5, _button_nr) {
	globals.svy_nav_favoriteMove(null, _button_nr, 'up')
	drawFavorites()
}

/**
* @param {Object} _arg1
* @param {Object} _arg2
* @param {Object} _arg3
* @param {Object} _arg4
* @param {Object} _arg5
* @param {Number} _button_nr
 * @properties={typeid:24,uuid:"2F8A102D-11E8-4A7C-B495-20D16FD5FE9D"}
 */
function moveDown(_arg1, _arg2, _arg3, _arg4, _arg5, _button_nr) {
	globals.svy_nav_favoriteMove(null, _button_nr, 'down')
	drawFavorites()
}
