/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"677BFA08-08CC-479C-8BAD-071F8B4E6E0A"}
 */
function onRecordSelectionEndPrep(event) {
	globals.selectedEndPrepIndex = controller.getSelectedIndex();
}
