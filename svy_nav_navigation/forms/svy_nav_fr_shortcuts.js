/**
 *	Deletes the shortcut
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"fa727a9f-4117-464d-863f-f71da4081de0"}
 * @AllowToRunInFind
 */
function onClickDelete(_event)
{
	globals.svy_nav_favoriteDelete(_event)
    loadShortcuts()
	
}

/**
 *	Toggles the sort order of a shortcut, up - down
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"bd0ee5e3-63e8-4d3a-b768-4f03ee851455"}
 * @AllowToRunInFind
 */
function toggleShortcut(_event)
{
	var _button = _event.getElementName();

	var _direction = 'up'
	if(/Down/.test(_button))
	{
		_direction  = 'down'
	}
	
	globals.svy_nav_favoriteMove(_event, null, _direction)
	
	loadShortcuts();

}

/**
 * Load the shorcuts for the loged in user
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"eb9bd716-5925-4415-ae4a-298500528cdb"}
 * @AllowToRunInFind
 */
function loadShortcuts() {
	var _shortcuts = globals.svy_nav_getFavorites()

	for (var _i = 0; _i < elements.length; _i++) {
		// Hide all shortcuts and shortcut labels
		elements[_i].visible = false;
	}

	for (var _j = 0; _j < _shortcuts.length; _j++) {
		if (_j > 6) {
			break;
		}
		elements['shortcutLabel' + _j]['text'] = _shortcuts[_j].text1
		elements['shortcut' + _j]['visible'] = true
		elements['shortcutLabel' + _j].visible = true;
		elements['btnshortcutDel' + _j].visible = true;
		elements['btnshortcutMoveUp' + _j].visible = true;
		if (_j == 0) // first bookmark can not get up
		{
			elements['btnshortcutMoveUp' + _j].enabled = false;
		} else {
			elements['btnshortcutMoveUp' + _j].enabled = true;
		}
		elements['btnshortcutMoveDown' + _j].visible = true;

		if (_j == (_shortcuts.length - 1)) // if it is the last bookmark you can not move down
		{
			elements['btnshortcutMoveDown' + _j].enabled = false;
		} else {
			elements['btnshortcutMoveDown' + _j].enabled = true;
		}

	}
	setHeight()
}

/**
 * Set the height of the divider
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"5cf0255c-92c1-490b-945f-d3ff725ddbef"}
 */
function setHeight()
{
	if(globals.nav && globals.nav.shortcuts)
	{
		var _extra_size = 150
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) _extra_size = 70
		var _loc = application.getWindow().getHeight() - ((globals.nav.shortcuts.length * 32)+_extra_size)
		if(_loc >= 0 && _loc <= 1 && _loc != forms.svy_nav_fr_menu.elements.tab_split.dividerLocation)
		{
			forms.svy_nav_fr_menu.elements.tab_split.dividerLocation = _loc
		}
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9E51033-9A8D-42D7-8C7B-9CD45DCE0837"}
 */
function onShow(firstShow, event) {
	setHeight()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} _event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"19FE406B-B326-4896-ABC1-13FE426CC693"}
 */
function shortcutGoto(_event) {
	

	var _button = _event.getElementName();
	/** @type{Number} */
	var _nr 
	// get the programname
	globals.nav.openNewTab = 1
	
	if(utils.stringPatternCount(_button,'shortcutLabel')>0) //webclient is used
	{
		_nr = utils.stringReplace(_button, 'shortcutLabel', '')
	}
	else
	{
		_nr = utils.stringReplace(_button, 'shortcut', '')
	}
	globals.svy_nav_shortcut_goto(_event, _nr)
}

/**
 * @properties={typeid:24,uuid:"1E728414-DE3E-4B4A-957E-A626A21B5F63"}
 */
function onLoad() {
	// Webclient and smartclient have different behaviour on clicks if there are layers:
	// in webclient the method has to be on the top layer
	// if the method is in the onAction of the toplayer, the onMouseOver image on the smartclient doesn't look right.
	if (application.getApplicationType() == 5)//webclient
	{
		var jsFormShortcuts = solutionModel.getForm('svy_nav_fr_shortcuts')
		for (var _i = 0; _i < 7; _i++) {
			var jsLabel = jsFormShortcuts.getLabel("shortcutLabel" + _i)
			jsLabel.onAction = jsFormShortcuts.getMethod('shortcutGoto')
		}
	}
	controller.recreateUI()
}
