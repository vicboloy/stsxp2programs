/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"642AF4D4-B502-4C78-A3D4-D47B40C7BA32"}
 */
function onLoad(event) {;
	elements.tabs_revision.dividerLocation = 0.7;
	elements.tabs_revision.dividerSize = 2;
	elements.tabs_revision.continuousLayout = true;
	elements.tabs_revision.resizeWeight = 1;
	elements.tabs_revision.rightFormMinSize = 170;
	
	return _super.onLoad(event)
}
