/** *
 * @param _toolbarName
 *
 * @properties={typeid:24,uuid:"CC4E117B-3DCC-4739-B642-C862042E5045"}
 */
function getToolbarForm(_toolbarName) {
	if (_toolbarName == "Help") {
		return elements.tab.getTabFormNameAt(2);
	} else {
		return elements.tab.getTabFormNameAt(1)
	}
}
