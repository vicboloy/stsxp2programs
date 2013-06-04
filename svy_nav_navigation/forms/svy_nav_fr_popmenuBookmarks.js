/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"A4E0EDDC-D938-4BA3-8E29-88C644B69F14",variableType:-4}
 */
var vItems = [];

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"FF7242B9-0E0B-42A0-8622-05FAFF95CF0D"}
 */
function updateUI() {
	vItems = globals.svy_nav_getBookmarks()
	elements.tab.removeAllTabs()
	var _form = drawItems(vItems, 'bookmarks')
	elements.tab.addTab(forms[_form])
	forms[_form]['vParentForm'] = controller.getName()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8CCBB642-12F8-4BFE-9AAE-35CB040981BD"}
 */
function newBookmark(event) {
	globals.svy_nav_bookmarkCreate()
	forms[globals.nav.mainFormName].showBookmarks(event,true)
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"5764DEB5-FB0D-4BCC-9B2D-6FEC452FD2F3"}
 */
function onClick(event) {
	var _item_nr = utils.stringRight(event.getElementName(), 1) * 1
	globals.nav.openNewTab = 1
	var _program = globals.nav.bookmarks[_item_nr].program
	var _pk = globals.nav.bookmarks[_item_nr].record_ids	
	var _layout_id = globals.nav.bookmarks[_item_nr].layout_id
	var _layoutObject = globals.nav.bookmarks[_item_nr].layoutObject
	globals.svy_nav_showProgramRecord(_program, _pk, _layout_id, _layoutObject)
	forms[globals.nav.mainFormName].showBookmarks(event)
}

/**
 * @properties={typeid:24,uuid:"EB0BF424-4DC0-4AAE-A012-4E187B81C053"}
 */
function onRightClick(event) {
	var popupmenu = plugins.window.createPopupMenu()
	var _item_nr = utils.stringRight(event.getElementName(), 1) * 1
	var menuitem1 = popupmenu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.bkmrkdelete'), deleteBookmark)
	menuitem1.methodArguments = [_item_nr]
	
	var source = event.getSource()
	if (source != null) {
		popupmenu.show(source);
	}
}

/**
 * @properties={typeid:24,uuid:"2FD6B55C-C388-4E7C-8F44-DBDDDD91EA83"}
 */
function deleteBookmark(arg1, arg2, arg3, arg4, arg5, _bookmarknr) {
	globals.svy_nav_bookmarkDelete(null, _bookmarknr)
	forms[globals.nav.mainFormName].showBookmarks(null,true)
}
