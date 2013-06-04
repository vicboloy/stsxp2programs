/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB911B9B-3FD7-4C18-9F0D-567E0E31BD7F"}
 */
function onLoad(event) {
	//remove the navigation tab if there is no navigation solution
	if(!scopes.globals['nav_version'])
	{
		elements.tab.removeTabAt(4)
		elements.tab.removeTabAt(5)
		elements.tab.removeTabAt(6)
		elements.tab.removeTabAt(7)
	}
		
}
