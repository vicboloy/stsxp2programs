/** *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"EFD0779B-5429-4C4B-BCB8-043C21CDB341"}
 * @AllowToRunInFind
 */
function onShowForm(firstShow, event) {
	var selectedRecord = foundset.getSelectedRecord().getPKs();	
	foundset.find();
	foundset.i18n_organization_id = '^=';
	foundset.search();	
	foundset.selectRecord(selectedRecord);
	
	return _super.onShowForm(firstShow, event);
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"B0B73798-8960-45C5-B36A-C864E7B5AC70"}
 */
function dc_delete(_event, _triggerForm) {
	globals.DIALOGS.showErrorDialog('Error', i18n.getI18NMessage('svy.dlg.deletingRecordNotAllowed'), i18n.getI18NMessage('svy.fr.lbl.ok'));
}

/** *
 * @param _multiDelete
 *
 * @properties={typeid:24,uuid:"431288E4-E339-4ECC-BED3-43AF58004A91"}
 */
function dc_delete_message(_multiDelete) {
	return
}

/** *
 * @param _foundset
 * @param _multiDelete
 *
 * @properties={typeid:24,uuid:"3558AC63-61E3-461D-ABE4-3297975B4704"}
 */
function dc_delete_post(_foundset, _multiDelete) {
	return
}

/** *
 * @param _foundset
 * @param _multiDelete
 *
 * @properties={typeid:24,uuid:"B4976B3A-2B91-454C-A2B8-E07D7424D452"}
 */
function dc_delete_pre(_foundset, _multiDelete) {
	return
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"4ED7C12A-4D56-4328-B54B-42BB351860B9"}
 */
function dc_new(_event, _triggerForm) {
	globals.DIALOGS.showErrorDialog('Error', i18n.getI18NMessage('svy.dlg.addingRecordNotAllowed'), i18n.getI18NMessage('svy.fr.lbl.ok'));
}
