/**
 *	Load the bookmarks for the logged in user
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"31159dd9-e304-4cdd-9143-473001a8bd85"}
 * @AllowToRunInFind
 */
function loadBookmarks() {
	var _bookmarks = globals.svy_nav_getBookmarks()

	if (!_bookmarks) {
		return;
	}

	// hide all
	for (var _i = 0; _i < 7; _i++) {
		// Hide all bookmarks
		elements['bookmark' + _i].visible = false
		elements['program_info' + _i].visible = false
		elements['record_info' + _i].visible = false
		elements['btnshortcutDel' + _i].visible = false
		elements['btnshortcutMoveDown' + _i].visible = false
		elements['btnshortcutMoveUp' + _i].visible = false
		elements['program_image' + _i].visible = false
	}

	// loop true records and set bookmarks
	for (_i = 0; _i < _bookmarks.length; _i++) {

		elements['bookmark' + _i].visible = true
		elements['program_info' + _i].visible = true
		elements['record_info' + _i].visible = true
		elements['btnshortcutDel' + _i].visible = true
		elements['btnshortcutMoveDown' + _i].visible = true
		elements['btnshortcutMoveUp' + _i].visible = true
		elements['program_image' + _i].visible = true

		if (_i == 0) {
			elements['btnshortcutMoveUp' + _i].enabled = false
		} else {
			elements['btnshortcutMoveUp' + _i].enabled = true
		}
		if (_i == (_bookmarks.length - 1)) {
			elements['btnshortcutMoveDown' + _i].enabled = false
		} else {
			elements['btnshortcutMoveDown' + _i].enabled = true
		}
		if (_bookmarks[_i]) {
			//set program text
			elements['program_info' + _i]['text'] = _bookmarks[_i].text1
			//set record text
			elements['record_info' + _i]['text'] = _bookmarks[_i].text2
			// set image
			elements['program_image' + _i].setImageURL('media:///' + _bookmarks[_i].image_name);
		}
	}
	setHeight()
}

/**
 *	Onclick of a bookmark, get the right information and call globals.svy_nav_bookmarkGoto, depending on loadBookmarks
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"a384ebb1-350d-4a76-9450-f03a72c51983"}
 */
function onClick(_event)
{
	var _button = _event.getElementName();
	globals.nav.openNewTab = 1
	var _program = globals.nav.bookmarks[_button.replace(/[^0-9]/g, "")].program
	var _pk = globals.nav.bookmarks[_button.replace(/[^0-9]/g, "")].record_ids	
	var _layout_id = globals.nav.bookmarks[_button.replace(/[^0-9]/g, "")].layout_id
	var _layoutObject = globals.nav.bookmarks[_button.replace(/[^0-9]/g, "")].layoutObject
	globals.svy_nav_showProgramRecord(_program, _pk, _layout_id, _layoutObject)

}

/**
 *	On load method, hides all bookmarks
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"78a68cc1-860c-4ff4-9e74-c76c9871df43"}
 */
function onLoad()
{
	// hide all
	for (var _i = 0; _i < 7; _i++)
	{
		// Hide all bookmarks
		elements['bookmark'+ _i].visible = false
		elements['program_info'+ _i].visible = false
		elements['record_info'+ _i].visible = false
		elements['btnshortcutDel'+ _i].visible = false
		elements['btnshortcutMoveDown'+ _i].visible = false
		elements['btnshortcutMoveUp'+ _i].visible = false
		elements['program_image'+ _i].visible = false
	}
}

/**
 *	Toggles the sort order of a bookmark, up - down
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"67118611-d974-48b7-98d3-6db12ad1b381"}
 * @AllowToRunInFind
 */
function toggleBookmark(_event)
{
	var _button = _event.getElementName();
	var _buttonnr = _button.replace(/[^0-9]/g, "") * 1
	var _buttonnr_next
	var _rec_org
	var _rec_next
	var _sort_org
	var _sort_next

	// if bookmark has to move up
	if(/Up/.test(_button))
	{
		_buttonnr_next  = _buttonnr - 1
	}
	// if bookmark has to move down
	if(/Down/.test(_button))
	{
		_buttonnr_next  = _buttonnr + 1
	}
	// get the origenal record
	if(foundset.find())
	{
		bookmark_id = globals.nav.bookmarks[_buttonnr].bookmark_id
		foundset.search()
		_rec_org = foundset.getRecord(1)


	}
	// get the next record
	if(foundset.find())
	{
		bookmark_id = globals.nav.bookmarks[_buttonnr_next].bookmark_id
		foundset.search()
		_rec_next = foundset.getRecord(1)
	}
	
	// toggle the sortorder of the records
	_sort_org = _rec_org.sort_order
	_sort_next = _rec_next.sort_order
	_rec_org.sort_order = _sort_next
	_rec_next.sort_order = _sort_org 
	loadBookmarks();

}

/**
 *	Set height of the splitter
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"7b564b01-08e1-4910-af4d-7223f212069e"}
 */
function setHeight()
{
	if(globals.nav && globals.nav.bookmarks)
	{
		var _extra_size = 150
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) _extra_size = 70
		var _loc = application.getWindow().getHeight() - ((globals.nav.bookmarks.length * 32)+_extra_size)
		if(_loc != forms.svy_nav_fr_menu.elements.tab_split.dividerLocation)
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
 * @properties={typeid:24,uuid:"CC018A4F-A8C2-4253-AA2C-87111CFF0F6F"}
 */
function onShow(firstShow, event) {
	setHeight()
}
