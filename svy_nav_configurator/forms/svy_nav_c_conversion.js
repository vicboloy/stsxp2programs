/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DE96344F-2EDB-4DEA-9462-CB27A5CC8840"}
 */
function explainConversion1(event) {
	globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.explanation_conversion1'), i18n.getI18NMessage('svy.fr.lbl.ok'));
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0A01AE8A-53CA-43A4-8F50-218C1A4243C5"}
 */
function runConversion1(event) {
	var buttonYes = i18n.getI18NMessage('svy.fr.lbl.yes');
	if (globals.DIALOGS.showQuestionDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.run_conversion'), i18n.getI18NMessage('svy.fr.lbl.yes'), i18n.getI18NMessage('svy.fr.lbl.no')) == buttonYes) {
		if (globals.svy_cnv_userOrgID()) {
			globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.conversion_successful'), i18n.getI18NMessage('svy.fr.lbl.ok'));
		} else {
			globals.DIALOGS.showErrorDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.conversion_unsuccessful'), i18n.getI18NMessage('svy.fr.lbl.ok'));
		}
	}
}
