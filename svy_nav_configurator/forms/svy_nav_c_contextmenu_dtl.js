/**
 * Perform the element default action.
 *
 * @param {JSEvent} _event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7315F08-CCB7-4C02-83E1-F06075840749"}
 */
function closeForm(_event) {
	globals.svy_nav_closeForm(_event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1253D6AB-58B8-4B1F-8DEA-0B8F2BDF1D7B"}
 */
function getI18n(event) {
	description = application.showI18NDialog()
}

/**
 *
 * @properties={typeid:24,uuid:"A6237C0F-DD20-4152-BE61-14973B22D0F7"}
 */
function setLabelField() {
	if(flag_i18n)
	{
		elements.description.visible = false
		elements.display_description.visible = true
		elements.btn_i18n.visible = true
	}
	else
	{
		elements.description.visible = true
		elements.display_description.visible = false
		elements.btn_i18n.visible = false
	}
}

/**
 *
 * @param _event
 * @param _all
 *
 * @properties={typeid:24,uuid:"BDAC1521-3B0C-4230-9E1A-08C832014F8F"}
 */
function dc_save(_event, _all) {
	_super.dc_save(_event, _all)
	globals.svy_nav_closeForm(_event)
}

/**
 *
 * @properties={typeid:24,uuid:"D1A948E7-98C6-46D5-B4AE-D46DBA3F9896"}
 */
function dc_cancel(_event) {
	_super.dc_cancel(_event)
	globals.svy_nav_closeForm(_event)
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"4CEBCB18-FF94-4B0E-A2A8-46C2C9AE683E"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	setLabelField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18488634-B26C-4BCA-AF89-0EF21EC2C6A0"}
 */
function deleteAndClose(event) {
	
	// Delete record
	controller.deleteRecord();
	
	// Close dialog
	if (controller.getWindow()) {
		controller.getWindow().destroy();		
	}
}
