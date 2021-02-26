
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10E18E11-E1F6-4D5D-8FEC-F6AF8ADAC194"}
 */
function onShow(firstShow, event) {
	//if (firstShow){
	//}
	elements.btn_Developer.visible = (application.isInDeveloper());
	if (typeof globals.session.restorePrefs === 'undefined'){
		globals.session.restorePrefs = false;
		/** @type {QBSelect<db:/stsservoy/groups>} */
		var q = databaseManager.createSelect('db:/stsservoy/groups');
		q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
		var Q = databaseManager.getFoundSet(q);
		Q.loadRecords();
		if (globals.session.login == 'P' && Q.getSize() < 4){
			globals.session.restorePrefs = true;
			elements.btn_RestorePrefs.enabled = globals.session.restorePrefs;
		}
	}
	globals.setUserFormPermissions(event,false);

	return _super.onShow(firstShow, event)
}

