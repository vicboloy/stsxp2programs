/**
 *
 * @param firstShow
 * @param event
 * @param _startArgs
 *
 * @properties={typeid:24,uuid:"CE539D4B-E6B1-46E1-824B-7E0C7AD32EA9"}
 */
function onShow(firstShow, event, _startArgs) {
	if(firstShow && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT || application.getApplicationType() == APPLICATION_TYPES.RUNTIME_CLIENT)
	{
		elements.lbl_bg.imageURL = "media:///" + globals.svy_nav_bg_image_name;
		elements.lbl_bg.visible = true
	}
	
	return _super.onShow(firstShow, event, _startArgs)
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"BD0CC846-8414-46F2-9C3A-40D4025BB6AB"}
 */
function onLoad(event) {
	vNoResizeElements = ['lbl_bg']
	return _super.onLoad(event)
}
