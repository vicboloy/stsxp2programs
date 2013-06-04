/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AB550377-033F-4A76-ABCA-CDA01D0393A1"}
 */
function addRecord(event) {
	globals.DIALOGS.showFormInModalDialog(forms[globals.svy_utl_getFrameworkFormName("sec_main_key_program_toolbar_item_dtl")])
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E1716047-75B6-4385-A408-B9CE560B6957"}
 */
function deleteRecord(event) {
	foundset.deleteRecord()
}
