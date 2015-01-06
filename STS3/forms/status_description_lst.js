
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} buttonTextSrc
 *
 * @properties={typeid:24,uuid:"514DDB1A-4603-4296-9EDC-E58AC014716D"}
 */
function onRecordSelection(event, buttonTextSrc) {
	//forms.status_descriptions.onShow(false,event);
	forms.status_descriptions.setFormIndex(controller.getSelectedIndex());
	//forms.status_descriptions.controller.setSelectedIndex(controller.getSelectedIndex());
}
