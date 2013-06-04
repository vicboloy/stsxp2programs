/**
 *
 * @param _event
 *
 * @properties={typeid:24,uuid:"4AF5C92B-3153-4594-A83D-EE5CD3533EC7"}
 */
function dc_new(_event) {
	controller.newRecord()
	program_name = 0
	gotoDetails()
	
}

/**
 * @properties={typeid:24,uuid:"DD4BFA51-6073-40D7-804D-B21F94ED41C8"}
 */
function gotoDetails() {
	forms.svy_nav_c_popmenu_dtl.controller.loadRecords(foundset)
	forms.svy_nav_c_popmenu_dtl.mode = 'EDIT'
	forms.svy_nav_c_popmenu_dtl.from = 'root'
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_popmenu_dtl,null,null,null,null,null,true,false,'Popmenu_edit')
}

/** *
 * @param _event
 *
 * @properties={typeid:24,uuid:"A8C7DD03-DE47-4556-A5F4-65B6A20DF038"}
 */
function dc_duplicate(_event) {
	controller.duplicateRecord()
	gotoDetails()
}
