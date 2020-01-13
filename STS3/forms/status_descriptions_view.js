
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"32A31CBB-D72C-424D-86CA-C7EB9AAC21E6"}
 */
function onShow(firstShow, event) {
	foundset.sts_status_description_container_view;
	foundset.loadAllRecords();
	var newFS = foundset.duplicateFoundSet();
	controller.loadRecords(newFS);
	globals.setUserFormPermissions(event,true);
}
