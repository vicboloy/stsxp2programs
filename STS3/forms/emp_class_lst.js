
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3AF13BA7-C288-4AFD-A798-8B0A70FABC62"}
 */
function onRecordSelectionEmployee(event) {
	var dataset = controller.getFormContext().getValue(1,2);
	//getParentForm().selectedIndex = controller.getSelectedIndex();
	application.output('employee class list form parent '+dataset+" form name "+controller.getName());
	getParentForm().controller.setSelectedIndex(controller.getSelectedIndex());
}
