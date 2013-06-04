/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC30D7A2-2F23-4E44-991D-2EF30E4B351C"}
 */
function select_field(event) {
	createSelected()
	forms.svy_nav_fr_user_table_view_dtl.loadDataAvailable()
	
}

/**
 *
 * @properties={typeid:24,uuid:"0D0B362F-F439-4825-8A3A-A57D0969A8C1"}
 */
function createSelected() {
	var rec = forms.svy_nav_fr_user_table_view_selected.foundset.getRecord(
			forms.svy_nav_fr_user_table_view_selected.foundset.newRecord());
	rec.program_field_id = program_field_id;
	rec.user_id = globals.svy_sec_lgn_user_id;
	rec.organization_id = globals.svy_sec_lgn_organization_id;
	rec.element_name = elementname;
	rec.program_id = forms.svy_nav_fr_user_table_view_dtl.program_id;
	rec.layout_id = forms.svy_nav_fr_user_table_view_dtl.layout_id;
	databaseManager.saveData(rec);
}
