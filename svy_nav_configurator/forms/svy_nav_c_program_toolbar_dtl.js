/**
 *	 Closes the form in dialog
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"4E7EDFC4-CEDA-472A-899A-BB8720BBA711"}
 */
function closeWindow(_event)
{
	globals.svy_nav_closeForm(_event)
}

/**
 *
 * @param {JSEvent} _event
 * @param {Boolean} _all
 *
 * @properties={typeid:24,uuid:"FFF4BAAC-1042-494B-848A-4E101839B2D8"}
 */
function dc_save(_event, _all) {
	_super.dc_save(_event, false)
	globals.svy_nav_closeForm(_event)
	
}

/**
 * @param {JSEvent} _event
 * @param {Boolean} _all
 * 
 * @properties={typeid:24,uuid:"4286D26C-6741-4FF3-934B-821F7CAB6223"}
 */
function dc_cancel(_event, _all) {
	_super.dc_cancel(_event)
	globals.svy_nav_closeForm(_event)
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"D9BDB09A-0051-4603-8DB0-846C474FC608"}
 */
function onShow(firstShow, event) {
	controller.focusField('toolbar_id',true)
	return _super.onShow(firstShow, event)
}
