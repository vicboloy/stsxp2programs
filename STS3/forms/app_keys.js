
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"894C70EE-A699-4A5C-BE53-3AA560BDD9A8"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow){
		scopes.globals.onTabChangeSplitSet(event);
	}
	//foundset.loadAllRecords();
	permissionForm = 'app_keys';
	foundset.sort('display_name asc');
	return _super.onShow(firstShow, event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3763D30A-9123-4CD4-ADD6-F624561871DC"}
 */
function onHide(event) {
	stopEditing(event);
	return _super.onHide(event)
}
