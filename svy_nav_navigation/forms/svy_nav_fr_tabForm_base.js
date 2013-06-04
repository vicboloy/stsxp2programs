/**
 * @return {String} the toolbar form name
 * 
 * @properties={typeid:24,uuid:"C16D145D-4052-47D9-9D79-D7308157565F"}
 */
function getToolbarFormName() {
	if (elements["toolbar"]) {
		return elements["toolbar"].getTabFormNameAt(1);
	}
	return null;
}

/**
 * @return {String} the form name in the body
 * 
 * @properties={typeid:24,uuid:"75A4C77C-B36C-4693-A725-AC3DF7C435E8"}
 */
function getBodyFormName() {
	if (elements["form"]) {
		return elements["form"].getTabFormNameAt(1);
	}
	return null;
}
