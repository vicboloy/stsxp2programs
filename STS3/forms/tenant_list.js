
/**
 * Temporarily reset table filter to reset the tenant user list.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DBCCAA09-6AE8-4D55-AC57-43F0E19C3231"}
 */
function onActionSelectTenant(event) {
	var removeSuccessful = databaseManager.removeTableFilterParam(globals.SEC_SERVER,'Filter_users')
	application.output('successful filter removal '+removeSuccessful);
	var selectedUser = tenant_uuid;
	//forms.tenant_users_lst.tenant_list_to_users;
	var datasource = 'db:/'+globals.SEC_SERVER+'/users';
	//databaseManager.addTableFilterParam(globals.SEC_SERVER,'users','tenant_uuid','=',globals.secCurrentTenantID,'Filter_users');
}
