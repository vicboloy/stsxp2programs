/**
 *	New record, open detail dialog
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"0FA84923-ACBD-4EF5-9534-DD289B14757E"}
 */
function newRecord()
{
	if (!forms.svy_nav_c_layout_dtl.template_name) {
		globals.DIALOGS.showWarningDialog( i18n.getI18NMessage('svy.fr.lbl.create_tab'), i18n.getI18NMessage('svy.fr.lbl.warning_no_template'), "i18n:svy.fr.lbl.ok")
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
 * @properties={typeid:24,uuid:"06EFFADC-C499-465D-912F-D1A03A8E6D9A"}
 */
function showDetails()
{

	forms.svy_nav_c_tab_dtl.controller.loadRecords(foundset)
	forms.svy_nav_c_tab_autofill_tbl.mode = 'edit'
	forms.svy_nav_c_tab_dtl.mode = 'edit'
	forms.svy_nav_c_tab_dtl.gotoEdit()
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_tab_dtl,null,null,null,null,null,true,false,'Tab')
}
