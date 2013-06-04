/**
 * Perform the element default action.
 *
 * @param {JSEvent} _event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE301CC8-372D-4F51-8B1D-6F7539B4D2D5"}
 */
function closeForm(_event) {
	globals.svy_nav_closeForm(_event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DAA305A2-1922-48C8-B6BE-ACC7556B5A82"}
 */
function getI18n(event) {
	label = application.showI18NDialog()
}

/**
 *
 * @properties={typeid:24,uuid:"95F6F6EB-4DCE-4FE2-99A7-56C89CEA12BA"}
 */
function setLabelField() {
	if(flag_i18n)
	{
		elements.label.visible = false
		elements.display_description.visible = true
		elements.btn_i18n.visible = true
	}
	else
	{
		elements.label.visible = true
		elements.display_description.visible = false
		elements.btn_i18n.visible = false
	}
}

/**
 *
 * @param _event
 * @param _all
 *
 * @properties={typeid:24,uuid:"190061D7-89D1-4B28-BC20-2CD953AB3E70"}
 */
function dc_save(_event, _all) {
	_super.dc_save(_event, _all)
	forms.svy_nav_c_main.loadFunctionsValuelist()
	globals.svy_nav_closeForm(_event)
}

/**
 *
 * @properties={typeid:24,uuid:"D30E11AD-8E25-47A6-BC9E-857B157F0064"}
 */
function dc_cancel(_event) {
	_super.dc_cancel(_event)
	globals.svy_nav_closeForm(_event)
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"8D2852BC-443C-4E15-9B1E-18746847AF09"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	setLabelField()
}
