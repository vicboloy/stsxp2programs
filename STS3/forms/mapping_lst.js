
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9FE311B3-52BF-4B80-90EC-5AE20D088CD9"}
 */
function onShow(firstShow, event) {
	foundset.loadAllRecords();
	foundset.sort('mapped_format asc, mapping_key asc, field_order asc')
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C25FCD2-234C-4A9B-BE6A-802659DDF7F6"}
 */
function sortMappingsList(event) {
	onShow(false,event);
}
