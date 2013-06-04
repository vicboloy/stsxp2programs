/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"64AB28BA-5DBF-4AB8-AE2A-A1348435FB89"}
 */
function openDetails(event) {
	
	forms.svy_nav_c_popmenu_dtl.controller.loadRecords(foundset)
	forms.svy_nav_c_popmenu_dtl.mode = 'EDIT'
	forms.svy_nav_c_popmenu_dtl.from = ''
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_popmenu_dtl,null,null,null,null,null,true,false,'Popmenu_edit')
}

/** *
 *  @param {JSEvent} _event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E676596-F446-4A27-8E93-13A9367E3883"}
 */
function dc_new(_event) {
	_super.dc_new(_event)
	openDetails(_event)
}
