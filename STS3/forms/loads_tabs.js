
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CDF05C92-0C43-4374-B061-85022694CCCA"}
 */
function onHide(event) {
	globals.setWindowClosed('View Loads');
	//return _super.onHide(event)
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"72A46CC9-F788-4D46-AF86-02D765A64619"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		versionForm = globals.getInstanceForm(event);
		baseForm = event.getFormName().replace(versionForm,'');
	}
}
