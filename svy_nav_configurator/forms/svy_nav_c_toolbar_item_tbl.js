/**
 *	New record, open detail dialog
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"926A0AFD-C47E-4A85-9D2C-26EF3C88D1F5"}
 */
function newRecord()
{
	if (!forms.svy_nav_c_program_dtl.program_id) {
		globals.DIALOGS.showWarningDialog("i18n:svy.fr.lbl.create_tab", "i18n:svy.fr.dlg.warning_programtab", "i18n:svy.fr.lbl.ok")
	} else {
		controller.newRecord() 
		showDetails()
	}

}

/**
 *	Open dialog with the details of the record
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"DD787F6E-5A23-45B7-A1A4-AA6600D144FE"}
 */
function showDetails()
{
	forms.svy_nav_c_toolbar_item_dtl.controller.loadRecords(foundset)
	forms.svy_nav_c_toolbar_item_dtl.mode = 'edit'
	forms.svy_nav_c_toolbar_item_dtl.gotoEdit()
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_toolbar_item_dtl,null,null,null,null,null,true,false,'toolbar')
}
