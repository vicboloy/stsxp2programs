/** *
 * @param {JSEvent} _event
 * @param _all
 *
 * @properties={typeid:24,uuid:"E47A1AD5-DE47-4499-A58D-FED4D17FC3DD"}
 */
function dc_save(_event, _all) {
	_super.dc_save(_event, _all)
	globals.svy_nav_closeForm(_event)
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"75B33C99-6BB1-418B-8798-146DE1FE21A6"}
 */
function dc_cancel(_event) {
	_super.dc_cancel.apply(this, arguments)
	globals.svy_nav_closeForm(_event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9466DF09-F610-441B-8E0B-AB20C7E0EB88"}
 */
function set_i18n_field(event) {

	if (flag_i18n) {
		elements.label_i18n.visible = true
		elements.label.visible = false
		elements.btn_i18n.visible = true
	} else {
		elements.label_i18n.visible = false
		elements.label.visible = true
		elements.btn_i18n.visible = false
	}
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"8DB0E91A-0356-4D37-B675-4D247F8C05CA"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	set_i18n_field(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"46B51258-2955-4626-A3FD-7F48F128C8AA"}
 */
function getI18nLabel(event) {
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.I18n_key_selector', i18n.getI18NMessage('svy.fr.dlg.I18n_key_selector'), 'i18n:svy.fr.lbl.ok')
		return
	}
	label = application.showI18NDialog()
}
