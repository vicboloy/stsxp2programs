/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD7EF96C-F709-4D9B-8399-44BEBAB3424D"}
 */
function openNotes(event) {
	forms.employees_notes_dtl.controller.loadRecords(foundset)
	globals.DIALOGS.showFormInModalDialog(forms.employees_notes_dtl,-1,-1,-1,-1,'Enter notes',true,true,'Notes')
}
