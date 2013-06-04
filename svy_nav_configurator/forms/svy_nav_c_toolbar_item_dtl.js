/**
 *	 Closes the form in dialog
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"970C0100-D75C-41A1-86C7-3F004D7CAE4B"}
 */
function closeWindow(_event)
{
	globals.svy_nav_closeForm(_event)
}

/**
 *
 * @properties={typeid:24,uuid:"38DF32C4-1A09-4442-B140-01F7F72E88AC"}
 */
function setI18n() {

	if(flag_i18n)
	{
		elements.Description.visible = false
		elements.Description_i18n.visible = true
		elements.btn_i18n.visible = true
	}
	else
	{
		elements.Description.visible = true
		elements.Description_i18n.visible = false
		elements.btn_i18n.visible = false
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33EAC4D1-DB37-4FDA-8221-A7598F2DB50B"}
 */
function getI18n(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.I18n_key_selector',i18n.getI18NMessage('svy.fr.dlg.I18n_key_selector'),'i18n:svy.fr.lbl.ok')
		return
	}
	description = application.showI18NDialog(description)
}

/**
 *
 * @param {JSEvent} _event
 * @param {Boolean} _all
 *
 * @properties={typeid:24,uuid:"F7A7809C-CDE8-43E8-BFDD-C3010A6F8567"}
 */
function dc_save(_event, _all) {
	_super.dc_save(_event, false)
	globals.svy_nav_closeForm(_event)
	
}

/**
 * @param {JSEvent} _event
 * @param {Boolean} _all
 * 
 * @properties={typeid:24,uuid:"6B800A72-11AF-4DE8-AAB2-C31543744A4F"}
 */
function dc_cancel(_event, _all) {
	_super.dc_cancel(_event)
	globals.svy_nav_closeForm(_event)
}

/**
 * Put all the methods that start with dc of the base form in a valuelist.
 * @properties={typeid:24,uuid:"9E2B6641-0A2E-4DF0-AD19-437B37C7A5FC"}
 */
function setNavDcFunctions() {
	var _values = []
	var _methods = solutionModel.getForm(globals.nav.baseFormName).getMethods()
	var _method
	for (var i = 0; i < _methods.length; i++) {
		_method = _methods[i]
		 if(utils.stringLeft(_method.getName(),3) == 'dc_' && utils.stringPatternCount(_method.getName(),'_') < 2) //toolbar method
		 {
			 _values.push(_method.getName())
		 }
	}
	_values.sort()
	application.setValueListItems('nav_toolbar_functions',_values)
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"CAA80B7E-8FB7-4654-A483-D37915CC2975"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	setFunctionFields()
	if(firstShow)
	{
		setNavDcFunctions()
	}
}

/**
 * @properties={typeid:24,uuid:"F5494963-D9DB-4ABB-B0AE-D7AA90CFFB20"}
 */
function setFunctionFields() {
	elements.function_id.visible = function_type == 2
	elements.function_id_label.visible = function_type == 2
	
	elements.toolbar_function.visible = function_type == 1
	elements.toolbar_function_label.visible = function_type == 1
	
	elements.function_id_r.visible = function_type_r == 2
	elements.function_id_label_r.visible = function_type_r == 2
	
	elements.toolbar_function_r.visible = function_type_r == 1
	elements.toolbar_function_label_r.visible = function_type_r == 1
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F286E991-C279-4B23-A4D7-B4FECBA24BB4"}
 */
function onDataChangeItemType(oldValue, newValue, event) {
	setFunctionFields()
	return true
}
