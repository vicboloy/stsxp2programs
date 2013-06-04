/**
 *	New record
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"43617D0F-05BB-4961-81B6-5D10CA0EE18E"}
 */
function newRecord()
{
	controller.newRecord()
}

/**
 *	On record selection, calls set_i18n_Fields
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"92C8AE49-A5BB-4D52-A590-5AC474701A74"}
 */
function onRecordSelection()
{
	setLayoutElements()
	set_i18n_Fields();
	setMenuImage()
	setElementFunction()
}

/**
 *	Show i18n dialog to enter description
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"E4DB3438-381D-4208-898D-34FF6FC7328F"}
 */
function selectI18n()
{
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.I18n_key_selector',i18n.getI18NMessage('svy.fr.dlg.I18n_key_selector'),'i18n:svy.fr.lbl.ok')
		return
	}
	description = application.showI18NDialog()
}

/**
 *	Enable or disable the i18n description
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"FB354836-5763-4CD7-B0EE-B13126AA9BB1"}
 */
function set_i18n_Fields()
{
	if(menuitem_type == 'L' || menuitem_type == 'F')
	{
		elements.description_i18n.visible = false
		elements.description.visible = false
		elements.btn_i18n.visible = false
		elements.lbl_description.visible = false
		elements.flag_i18n.visible = false
		
	}	
	else if(flag_i18n)
	{
		elements.lbl_description.visible = true
		elements.description_i18n.visible = true
		elements.description.visible = false
		elements.btn_i18n.visible = true
		elements.flag_i18n.visible = true
	}
	else
	{
		elements.lbl_description.visible = true
		elements.description_i18n.visible = false
		elements.description.visible = true
		elements.btn_i18n.visible = false
		elements.flag_i18n.visible = true
	}
}

/**
 * @properties={typeid:24,uuid:"701102B2-63E9-4462-BA3A-BE90A06F8703"}
 */
function setLayoutElements()
{
	elements.layout_id.visible = (menuitem_type == 'L')
}

/**
 * Handle changed data.
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean} valid value
 *
 * @properties={typeid:24,uuid:"86AE97C2-227A-4154-8811-23C84E42A115"}
 */
function onDataChange_menuType(oldValue, newValue, event) {
	setLayoutElements()
	set_i18n_Fields();
	setMenuImage()
	setElementFunction()
	return true
}

/**
 *
 * @properties={typeid:24,uuid:"AD6A0AA6-8BF4-4B99-B58E-7F408823EC75"}
 */
function setMenuImage() {
	elements.menu_image.visible = (menuitem_type != 'L')
	elements.menu_image_bg.visible = (menuitem_type != 'L')
}

/**
 * Handle focus element loosing focus.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6B7D14C0-821B-41EE-AD72-13A56EA5E245"}
 */
function refreshTree(event) {
	forms.svy_nav_c_menu_dtl.refreshTree(null, false);
	return true
}

/**
 *
 * @properties={typeid:24,uuid:"FF0BC536-2CD4-40A4-A5BC-AFB3210E27E1"}
 */
function setElementFunction() {
	elements.function_id.visible = (menuitem_type == 'F')
}
