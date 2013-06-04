/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A8422AA0-C656-40DE-99F6-1F6E2ECB4A2A"}
 */
var from = null;

/** *
 * @param {JSEvent} _event
 * @param {Boolean} _all
 *
 * @properties={typeid:24,uuid:"EAC6A8C9-0F0E-4B05-94B6-DA4ABAB71B5B"}
 */
function dc_save(_event, _all) {
	_super.dc_save(_event, _all)
	globals.svy_nav_closeForm(_event)
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"4776008E-449C-453E-9C53-8EE0E26C5EC4"}
 */
function dc_cancel(_event) {
	_super.dc_cancel.apply(this, arguments)
	globals.svy_nav_closeForm(_event)
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"80978C60-2867-4113-A4F3-774207BED409"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	elements.fld_menu_type.readOnly = from == 'root'

}
