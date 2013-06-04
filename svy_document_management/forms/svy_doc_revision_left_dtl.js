/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18AB8666-E5A7-4DAA-B9D8-6BFE6C035A8A"}
 */
function onLoad(event) {
	
	elements.tabs_revision_left.dividerLocation = 0.5;
	elements.tabs_revision_left.dividerSize = 2;
	elements.tabs_revision_left.continuousLayout = true;
	elements.tabs_revision_left.resizeWeight = 1;
	elements.tabs_revision_left.rightFormMinSize = 100;
	
	return _super.onLoad(event)
}
