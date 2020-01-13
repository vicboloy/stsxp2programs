
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} buttonTextSrc
 *
 * @properties={typeid:24,uuid:"F4FE1C11-ACB3-45A0-AFAD-5265E95D99BD"}
 */
function onRecordSelection(event, buttonTextSrc) {
	null;
	//return _super.onRecordSelection(event, buttonTextSrc)
	var parent = getParentForm();
	if (parent == null){return}
	var formName = event.getFormName();
	var index = forms[formName].controller.getSelectedIndex();
	parent.controller.setSelectedIndex(index);
	var formName = event.getFormName();
}
