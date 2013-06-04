/** *
 * @param _toolbarName
 *
 * @properties={typeid:24,uuid:"41159118-5650-4841-A4BA-E6D8350734BB"}
 */
function getToolbarForm(_toolbarName) {
	if (_toolbarName == "Views") {
		return elements.tab.getTabFormNameAt(2);
	} else {
		return elements.tab.getTabFormNameAt(1);
	}
}
