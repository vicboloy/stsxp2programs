
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1FDB0AE5-BE55-4389-A1B1-C24DCD59282A"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		scopes.globals.onTabChangeSplitSet(event);
	}
	permissionForm = 'app_user_groups';

	//foundset.loadAllRecords();
	return _super.onShow(firstShow, event)
}
