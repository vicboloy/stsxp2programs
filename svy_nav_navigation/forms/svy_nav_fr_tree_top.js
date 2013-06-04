/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B2F7218-2CEE-4B15-B50D-74E67922907A"}
 */
function history_move(event) {
	forms[globals.nav.mainFormName].history_move(event)
}

/**
 * @properties={typeid:24,uuid:"FDD7FA51-5AE7-48BB-85E5-19DBED46598B"}
 */
function updateUI() {
	// set the history buttons
	elements.btn_his_back.enabled = (globals.nav.stack_position > 0) 
	elements.btn_his_forw.enabled = (globals.nav.stack.length > globals.nav.stack_position)
	
	elements.btn_bookmark.enabled = (globals.nav_layout_id != null)
	elements.btn_shortcut.enabled = (globals.nav_layout_id != null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B422BCF-6E5A-469D-8E5C-56F6152F64B4"}
 */
function saveFavorite(event) {
	globals.svy_nav_favoriteSave()
	// load the shortcuts to see the new one
	forms.svy_nav_fr_shortcuts.loadShortcuts();
	// show the tab of the shortcuts
	forms.svy_nav_fr_bottom_bkmk_short.onClickShortcut();
}
