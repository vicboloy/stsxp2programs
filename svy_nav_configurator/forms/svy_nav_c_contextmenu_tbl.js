/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0793AB85-4E91-4846-89AF-1DC07A90E876"}
 */
function showDetails(event)
 {

 	forms.svy_nav_c_contextmenu_dtl.controller.loadRecords(foundset)
 	forms.svy_nav_c_contextmenu_dtl.mode = 'edit'
 	forms.svy_nav_c_contextmenu_dtl.gotoEdit()
 	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_contextmenu_dtl,null,null,null,null,null,true,false,'svy_nav_c_contextmenu_dtl')
 }

/** *
  * @param _event
  *
  * @properties={typeid:24,uuid:"66334AD3-0096-483B-9614-15E952CF9C6E"}
  */
function dc_new(_event) {
 	_super.dc_new(_event)
	showDetails(_event)
 }
