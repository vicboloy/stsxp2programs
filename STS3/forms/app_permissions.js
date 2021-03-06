
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"41C6029A-BC29-4525-B403-ACA73D655FD8"}
 */
function onHide(event) {
	//databaseManager.removeTableFilterParam('stsservoy','filterCurrentTenant');
	onEdit(event,false);
	onActionClose(event);
	return _super.onHide(event)
}



/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECB24AB3-5DAE-46D2-9E35-7361D5FFE6BE"}
 */
function onActionClose(event) {
	globals.stopWindowTrackEvent(event);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD3C98F8-5551-4019-85B4-057D6C128018"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event,false);
	stopEditing(event);
	onEdit(event,false);
	elements.btn_Edit.enabled = true;
	return _super.onShow(firstShow, event)
}
/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 * @properties={typeid:24,uuid:"A3F1070F-8441-4F8A-BAA0-4DEFDBA884C3"}
 * @AllowToRunInFind
 */
function onEdit(event,editing){
	elements.btn_Done.visible = editing;
	elements.btn_Edit.visible = !editing;
	forms.app_key_list.elements.btn_Delete.enabled = editing;
	forms.app_key_list.elements.btn_New.enabled = editing;
	forms.app_key_list.elements.btn_Dupe.enabled = editing;
	forms.app_key_list.elements.btn_Delete.enabled = editing;
	forms.app_key_details.elements.display_name.editable = editing;
	forms.app_key_details.elements.description.editable = editing;
	forms.app_key_permiss_list.elements.btn_Delete.enabled = editing;
	forms.app_key_permiss_list.elements.btn_New.enabled = editing;
	forms.app_permiss_general.elements.btn_Delete.enabled = editing;
	forms.app_permiss_general.elements.btn_New.enabled = editing;
	forms.app_permiss_general.elements.display_flags.enabled = editing;
	forms.app_permiss_general.elements.display_resource.enabled = editing;
	forms.app_permiss_general.elements.display_resource.enabled = editing;
	forms.app_user_group_list.elements.btn_Delete.enabled = editing;
	forms.app_user_group_list.elements.btn_Dupe.enabled = editing;
	forms.app_user_group_list.elements.btn_New.enabled = editing;
	forms.app_user_group_detail.elements.description.editable = editing;
	forms.app_user_group_detail.elements.group_name.editable = editing;
	forms.app_user_group_detail.elements.groupKeys.enabled = editing;
	var form = forms.app_user_group_detail;
	var name = form.group_name;
	var doneEnabled = forms.app_permissions.elements.btn_Done.visible == true;
	if (!application.isInDeveloper()){
		forms.app_user_group_detail.elements.groupKeys.enabled = (name.search('\\.') != 0) && doneEnabled ;//20180103 disable edit default group contents
	}
	globals.permissionsCacheHit(event,'app_key_list');
	globals.permissionsCacheHit(event,'app_key_details');
	globals.permissionsCacheHit(event,'app_key_permiss_list');
	globals.permissionsCacheHit(event,'app_permiss_general');
	globals.permissionsCacheHit(event,'app_user_group_list');
	globals.permissionsCacheHit(event,'app_user_group_detail');
	globals.permissionsCacheHit(event,null);
	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"20A68262-4AD4-4B84-B6C1-786477CBD8E2"}
 */
function onActionShowElementRefs(event) {
	globals.showElementReferences = !globals.showElementReferences;
	elements.btn_Refs.text = (globals.showElementReferences) ? i18n.getI18NMessage('sts.btn.tooltips.off') :i18n.getI18NMessage('sts.btn.tooltips');
}
