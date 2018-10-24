
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3D2BE672-8F9A-4905-9686-C38325E09AED"}
 */
function onHide(event) {
	globals.setWindowClosed("");
	return _super.onHide(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ABA4AA63-0883-4C06-80C0-DB8D8701B463"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DB85C56B-DE17-440E-9C99-8A52804E3DF5"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event,false);
	controller.loadRecords(st2_tenantid_associations);
	elements.btn_Save.enabled = false;
	return _super.onShow(firstShow, event)
}
/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 * @properties={typeid:24,uuid:"A4708092-B1D2-4146-BED0-2C258BE4D434"}
 */
function onEdit(event,editing){
	//var tab = event.getFormName();
	var tabFormName = elements.tabless.getTabFormNameAt(1);
	if (editing){
		forms[tabFormName].editActive(event);
	} else {
		forms[tabFormName].editInactive(event);
	}
	elements.btn_Cancel.enabled = editing;
	elements.btn_Cancel.visible = editing;
	elements.btn_Edit.enabled = !editing;
	elements.btn_Edit.visible = !editing;
	if (!(!association_name)){
		elements.btn_Save.enabled = editing;
	}
	elements.btn_Save.visible = editing;
}