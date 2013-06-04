/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA3B3D74-D01B-4B3F-8DF5-2A1CEE5148E6"}
 */
function resetToDefault(event) {
	var ok = i18n.getI18NMessage('svy.fr.lbl.ok');
    var no = i18n.getI18NMessage('svy.fr.lbl.no');
    
	if (globals.DIALOGS.showQuestionDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.reset_i18n'), ok, no) == ok) {
		databaseManager.revertEditedRecords();
		foundset.i18n_messages_to_i18n_messages.deleteRecord();
	}
}

/** *
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"8407D3AA-2695-4B91-84C2-9E10471BC1EF"}
 */
function onShowForm(_firstShow, _event) {	
	if (getMode() == 'edit') {
		if (databaseManager.hasRecords(i18n_messages_to_i18n_messages)) {
			elements.btnResetToDefault.enabled = true;
		}
		elements.message_value_new.requestFocus();
	} else if (getMode() == 'browse') {
		elements.btnResetToDefault.enabled = false;
	}
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"54DA8A22-1B37-4ADA-91E5-A8D2E6B6DE67"}
 */
function dc_edit(_event, _triggerForm) {
	if (databaseManager.hasRecords(i18n_messages_to_i18n_messages)) {
		elements.btnResetToDefault.enabled = true;
	}
	elements.message_value_new.requestFocus();
	
	return _super.dc_edit(_event, _triggerForm)
}

/** *
 * @param _foundset
 * @param _multiDelete
 *
 * @properties={typeid:24,uuid:"F8A3D31C-DCAF-4DA8-8B37-FEE245962139"}
 */
function dc_delete_pre(_foundset, _multiDelete) {
	return
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"96274666-D856-4634-8E50-9E92FF46F1BB"}
 */
function dc_new(_event, _triggerForm) {
	globals.DIALOGS.showErrorDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.dlg.addingRecordNotAllowed'), i18n.getI18NMessage('svy.fr.lbl.ok'));
}

/** *
 * @param _foundset
 * @param _multiDelete
 *
 * @properties={typeid:24,uuid:"1635CD07-4000-492F-B422-A25D47613BDC"}
 */
function dc_delete_post(_foundset, _multiDelete) {
	return
}

/** *
 * @param _multiDelete
 *
 * @properties={typeid:24,uuid:"CE1E882D-5E65-4B78-BF49-FF981AA34AC0"}
 */
function dc_delete_message(_multiDelete) {
	return
}

/** *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"6728571F-06ED-4CAA-AB52-6A242CBBF6BD"}
 */
function dc_delete(_event, _triggerForm) {
	globals.DIALOGS.showErrorDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.dlg.deletingRecordNotAllowed'), i18n.getI18NMessage('svy.fr.lbl.ok'));
}
