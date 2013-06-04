/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"93D89BBF-357D-4B25-8D81-9C57D45E90CC"}
 */
function onLoad(_event) {
	scopes.modUtils$UI.initSplitPane(_event.getFormName(), 'tab_split',0,Math.floor(application.getWindow().getHeight() * 0.6),globals.nav.splitPanesDividerSize,true, globals.nav.splitPanesDividerColor)	
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"F9E82C66-7BBA-45A3-AD02-0CFFB7095AD5"}
 */
function onHide(_event) {
	scopes.modUtils$UI.persistSplitPaneDividerPosition(_event.getFormName(),'tab_split')
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27F06EED-4B87-470E-B45A-F5BE7B00D61A"}
 */
function onResize(event) {
	//CHECKME: why save on resize, if already saving on hide?
	//save splitter between main and navigation
	scopes.modUtils$UI.persistSplitPaneDividerPosition(globals.nav.mainFormName,'tab_split')
}
