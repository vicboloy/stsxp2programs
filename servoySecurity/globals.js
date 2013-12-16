/**
 * @properties={typeid:35,uuid:"CB70B0E1-B12B-430A-B70D-F6D112AC04B6",variableType:-4}
 */
var JSSecurity = {READ:1, INSERT:2, UPDATE:4, DELETE:8, TRACKING:16, VIEWABLE:1, ACCESSIBLE:2};

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"259B6790-6F90-4B03-B402-D1217D456DC3"}
 */
var SEC_ADMINISTRATORS = 'Administrators';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"621640F1-68C5-4BD5-ACFE-6E315297E808"}
 */
var SEC_APPLICATION_FILTER = 'secApplicationFilter';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BB035415-D696-4A09-BD0C-14071875FAC3",variableType:4}
 */
var SEC_NULL = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2DE2544F-43DD-4DCB-B4DC-C3CDA5F52616",variableType:4}
 */
var SEC_ONE = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"225AA519-E6F6-4B64-A459-79BE807857F7",variableType:4}
 */
var SEC_PERMISSION_TYPE_DATA = 100;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95BEC8FE-7378-4C25-8E90-55CC87E2588D",variableType:4}
 */
var SEC_PERMISSION_TYPE_UI = 200;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"939227B0-B024-421F-A780-AAB591A9E839"}
 */
var SEC_SERVER = 'stsservoy';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B30B124-BD10-410C-AD18-298287DC1D56"}
 */
var SEC_TABLE_APPLICATIONS = 'applications';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B921D3A6-067D-453B-A828-B2CF97659F86"}
 */
var SEC_TABLE_GROUPS = 'groups';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6712412E-A9C4-44C3-9F4C-907725C48F9B"}
 */
var SEC_TABLE_KEYS = 'keys';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C14D3F4-8C24-4163-AF45-86185DE69747"}
 */
var SEC_TABLE_TENANTS = 'tenant_list';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34C2BB10-F9F7-475A-8CFE-31BE90855D07"}
 */
var SEC_TABLE_USER_GROUPS = 'user_groups';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1FA94F5-0AA4-4483-AA37-D5988E42E394"}
 */
var SEC_TABLE_USERS = 'users';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"557BD8A0-07C2-4964-A94B-EE8669BC20EB"}
 */
var SEC_TENANT_FILTER = 'secTenantFilter';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7893726E-404F-4C9F-999C-9C219E49048D",variableType:4}
 */
var secCurrentApplicationID = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"237E841F-6CA3-45AB-84F8-4D60FD5ADDA4"}
 */
var secCurrentTenantID = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B1F0B21-B375-49E5-B768-6E3947F8280B",variableType:4}
 */
var secCurrentUserID = null;

/**
 * Adds the specified user to the named group
 * Looks first in the current tenant's groups, then the current application-wide groups
 * @param {Number} userID the ID of the user
 * @param {Number} groupID the ID of the group to which the user is added
 * @returns {JSRecord} The user_groups record if the user was added
 * @properties={typeid:24,uuid:"2C6598FC-6E6C-47D7-AE62-52A1D0999589"}
 * @AllowToRunInFind
 */
function secAddUserToGroup(userID, groupID){	
																		//	variable declarations
	var userGroups;														//	the users-groups foundset
	if(!(userID && groupID)){											//	validate required input
		return false;													//	failed validation returns false
	}

	userGroups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USER_GROUPS);
	if(userGroups.find()){												//	search the user groups table for existing entry
		userGroups.user_id = userID;									//	search by user id
		userGroups.group_id = groupID;									//	search by group id	
		if(!userGroups.search() && userGroups.newRecord()){				//	not already in group, so create the record
			userGroups.user_id = userID;								//	set the user id
			userGroups.group_id = groupID;								//	set the group id
			if(databaseManager.saveData(userGroups.getSelectedRecord())){
				return userGroups.getSelectedRecord();					//	save and return record
			}
		}
	}
	

	//	group not found or user already in group
	return false;
}

/**
 * Sets (or resets) runtime security settings based on the current application and logged-in user
 * Application-wide permissions are first applied, then merged w/ users access to keys via group membership
 * 
 * @properties={typeid:24,uuid:"F5956607-8E6D-4898-8C92-22F73EA9F6FC"}
 */
function secSetSecuritySettings() {
																		//	local variable declarations:
	var settings = {};													//	Object - An object array to hold settings i.e. {server.table:{canRead:1,canInsert:0}}
	var dataset = databaseManager.createEmptyDataSet(0,['id','flags']);	//	JSDataset - This is passed into the servoy sec engine
	var groupKeys;														//	JSFoundset - A given group's group-keys records													
	var keyPermissions;													//	JSFounddset - A given key's permission records		

	for(var i = 1; i <= sec_current_app_permissions.getSize(); i++){	//	iterate over application-wide permissions
		appendSetting(sec_current_app_permissions.getRecord(i));		//	append permission
	}
	
	if(sec_current_user_groups){										//	aggregate by group all keys a user has 
		groupKeys = databaseManager.convertFoundSet(
			sec_current_user_groups,sec_current_user_groups.user_groups_to_group_keys);
	}
	if(groupKeys){														//	aggregate by key all permissions related to user
		keyPermissions = databaseManager.convertFoundSet(
			groupKeys,groupKeys.group_keys_to_permissions);
	}
	if(keyPermissions){
		for(i = 1; i <= keyPermissions.getSize(); i++){				//	iterate over all permissions related to this user
			appendSetting(keyPermissions.getRecord(i));					//	append permission
		}
	}
	for(id in settings){												//	iterate over the settings object array
		dataset.addRow([id, settings[id].flags]);						//	add setting to dataset
	}
	security.setSecuritySettings(dataset);								//	apply to Servoy Security Engine
	
	
	/**
	 * private function used to merge a permission record into the settings object
	 * The settings object will be passed into the Servoy Ssecurity Engine
	 * 
	 * @private
	 * @param {JSRecord} permission The permission record
	 */
	function appendSetting(permission){
																		//	local variable declarations
		var id;															//	the id of the recource (either server.table or element)

		if(permission.permission_type == SEC_PERMISSION_TYPE_DATA){		//	TABLE permission...
			
			id = permission.server_name + '.' + permission.table_name;	//	the resource id is server_name.table_name
			settings[id] = (settings[id]) ? settings[id] : {};			//	get or create object to store the table permission for this server.table

																		//	merge settings (to least restrictive)...			
			settings[id].canRead     = settings[id].canRead|permission.can_read;
			settings[id].canInsert   = settings[id].canInsert|permission.can_insert
			settings[id].canUpdate   = settings[id].canUpdate|permission.can_update;
			settings[id].canDelete   = settings[id].canDelete|permission.can_delete;
			settings[id].useTracking = settings[id].useTracking|permission.use_tracking;
			
																		//	Set the integer flags w/ bitwise operators
			settings[id].flags = (settings[id].canRead * JSSecurity.READ)|
								 (settings[id].canInsert * JSSecurity.INSERT)|
								 (settings[id].canUpdate * JSSecurity.UPDATE)|
								 (settings[id].canDelete * JSSecurity.DELETE)|
								 (settings[id].useTracking * JSSecurity.TRACKING);

		}else if(permission.permission_type == SEC_PERMISSION_TYPE_UI){	//	UI permission...

			id = permission.element_uuid;								//	The reource ID is the element UUID
			settings[id] = (settings[id]) ? settings[id] : {};			//	get or create object to store the ui permission for this element uuid
			
																		//	merge settings (to least restrictive)...
			settings[id].isAccessible = settings[id].isAccessible|permission.is_accessible;
			settings[id].isVisible    = settings[id].isVisible|permission.is_visible;
			
																		//	Set the integer flags w/ bitwise operators
			settings[id].flags        = (settings[id].isVisible * JSSecurity.VIEWABLE)|
			                            (settings[id].isAccessible * JSSecurity.ACCESSIBLE);
		}
	}
}

/**
 * Changes the name of the specified group to a new value
 * @param {Number} groupID
 * @param {String} newName
 * @returns {Boolean} true if the group name was changed
 * @properties={typeid:24,uuid:"61B96B05-5C96-49B6-9945-EC5D97E78588"}
 * @AllowToRunInFind
 */
function secChangeGroupName(groupID, newName){
																		//	variable declarations:
	var groups;															//	the groups foundset
	var groupToChange;													//	the group to change
	
	if(!(groupID && newName)){											//	validate input
		return false;
	}
	groups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_GROUPS);
	groupToChange = groups.duplicateFoundSet();
	if(groupToChange.loadRecords(groupID) && groups.find()){			//	load the group to change, search other groups
		groups.group_name = oldName;									//	search by name
		groups.application_id = groupToChange.application_id;			//	search by application
		groups.tenant_id = groupToChange.tenant_id;						//	search by tenant
		if(!groups.search()){											//	group name NOT already in use
			
			groupToChange.group_name = newName;							//	rename group
			return databaseManager.saveData(groupToChange.getSelectedRecord());
		}
	}
	return false;														//	no group matching, or target name in use
}

/**
 * Changes the user name to a new value, first ensuring that the user name is not already in use in the tenant.
 * @param {Number} userID the user id.
 * @param {String} userName the user name.
 * @returns {Boolean} true if user name changed successfully
 * @properties={typeid:24,uuid:"657B6D05-1BBC-4060-8D80-B5AA9C5D1843"}
 * @AllowToRunInFind
 */
function secChangeUserName(userID, userName){
	
	var users;															//	Variable Ddeclaration - the users foundset
	
	if(!(userID && userName)){											//	validate input
		return false;
	}
	
	users = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USERS);	//	load the user
	if(users.loadRecords(userID)){
		if(users.users_to_tenant_users.find()){							//	ensure that user name not in use in the same tenant
			users.users_to_tenant_users.user_name = userName;
			if(!users.users_to_tenant_users.search()){
				users.user_name = userName;								//	Change the name
				return databaseManager.saveData(users.getSelectedRecord());
			}
		}
	}
	return false;														//	user not found, or new name already in use
}

/**
 * Compares the password parameter to the specified user's encrypted password
 * @param {Number} userID the user id for whom the password is checked
 * @param {String} password the password to check
 * @returns {Boolean} true if password confirmed
 * @properties={typeid:24,uuid:"AD203FF7-9E2A-4184-9756-A60D161F3DC6"}
 */
function secCheckPassword(userID, password){
																		//	variable declarations
	var users;															//	the users foundset
	
	if(!(userID && password)){											//	validate input
		return false;
	}
	
	users = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USERS);	//	search for the user
	if(users.loadRecords(userID)){
		
		return users.user_password == secEncryptPassword(password);		//	check encrypted password
	}
	
	return false;														//	no user found or passwords don't match		
}

/**
 * Creates a group in the current application. Group is created for the tenant if specified
 * The method will not creat groups w/ duplicate names in the application or tenant
 * @param {String} groupName the name of the new group. 
 * @param {Number} [tenantID] the tenant. If null, then application-wide groups are used
 * @param {Number} [applicationID] the appliction. If null, then current application is used
 * @returns {JSRecord} the group record
 * @properties={typeid:24,uuid:"3790A22A-5A55-4F02-AB97-6D63A034DF2A"}
 * @AllowToRunInFind
 */
function secCreateGroup(groupName, tenantID, appID){
																		//	variable declarations
	var groups;															//	the groups foundset
	
	if(!groupName){														//	validate input	
		return false;
	}
	appID = (appID) ? appID : secCurrentApplicationID;					//	a null aplication param defaults to the current app

	groups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_GROUPS);	//	search the groups to make sure there is not already a group with new name
	if(groups.find()){
		groups.group_name = groupName;									//	search by group name
		groups.application_id = appID;									//	search within the specified app
		groups.tenant_id = (tenantID) ? tenantID : '^';					//	search within the specified tenant (null defaults to NULL search param)
		if(!groups.search()){
			
			if(groups.newRecord()){										//	create the group
				groups.group_name = groupName;							//	set the group name
				groups.tenant_id = tenantID;							//	set the tenant ID
				groups.application_id = appID;							//	set the app ID
				if(databaseManager.saveData(groups.getSelectedRecord())){
					return groups.getSelectedRecord();					//	return the group	
				}
			}
		}
	}
	
	//	No group found or name in use
	return null;
}

/**
 * Creates a new user in the current tenant
 * @param {String} userName the new user name
 * @param {String} password the password
 * @param (Number} [tenantID] the Tenant in which to create the user. Default is current tenant
 * @returns {JSRecord} the user record
 * @properties={typeid:24,uuid:"E1D8EF68-9F1F-4E3A-ABEF-CB07A1930235"}
 * @AllowToRunInFind
 */
function secCreateUser(userName, password, tenantID){
																		//	local variable declarations
	var users;															//	users foundset

	if(!(userName && password)){										//	validate input
		return false;
	}		
	tenantID = (tenantID) ? tenantID : secCurrentTenantID;				//	default is current tenant when null;
	
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);	//	get the users foundset
	if(users.find()){													//	search users table
		users.user_name = userName;										//	search by user name
		users.tenant_id = tenantID;										//	search by tenant ID
		if(!users.search()){	
			
			if(users.newRecord()){										//	create the new user
				users.user_name = userName;								//	set user name
				users.user_password = password;							//	set password
				users.tenant_id = tenantID;								//	set the tenant ID
				if(databaseManager.saveData(users.getSelectedRecord())){//	save the record
					return users.getSelectedRecord();					//	return user ID
				}
			}
		}
	}
	
	return null;														//	user could not be created
}

/**
 * Deletes the specified group record
 * @param {Number} groupID the ID of the group
 * @returns {Boolean} true when the named group was deleted
 * @properties={typeid:24,uuid:"D0B09877-CCBD-479E-9024-43BA87BD6A1D"}
 */
function secDeleteGroup(groupID){
																		//	local variable declarations
	var groups;															//	the groups foundset
	if(!groupID){														//	validate input
		return false;
	}
	groups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_GROUPS);	//	get a groups foundset
	return groups.loadRecords(groupID) && groups.deleteRecord();		//	load and delete the record
}

/**
 * Deletes a user from the current tenant
 * @param {Number} userID the id of the user
 * @returns {Boolean} true when the user was deleted from the current tenant
 * @properties={typeid:24,uuid:"9D961B7F-56D2-4904-8304-6511523BB5C8"}
 */
function secDeleteUser(userID){
																		//	local variable declarations
	var users;															//	users foundset	
	if(!userID){														//	validate input
		return false;
	}	
	users = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USERS);	//	get a users foundset
	return users.loadRecords(userID) && users.deleteRecord();			//	find and delete user record
}

/**
 * Logs in the specified user
 * @param {Number} userID the id of the user
 * @properties={typeid:24,uuid:"AF48473F-8602-42CB-B8E7-7AB6D383C925"}
 */
function secLogin(userID){
																		//	local variable declaraions:
	var users;															//	The users foundset
	
	if(!userID){														//	validate input
		return false;
	}
	
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);	//	get a users foundset
	security.createGroup(SEC_ADMINISTRATORS);							//	Create the group (This may not be necessary)
	if(users.loadRecords(userID) && users.is_account_active){ 			//	load user record, check if active account
		users.last_login = new Date();									//	reset last login date & login user
		return security.login(users.user_name,users.user_id,[SEC_ADMINISTRATORS]);
	}
}

/**
 * @param {Number} userID the ID of the user
 * @param {Number} groupID the ID of the group from which the user is removed
 * @properties={typeid:24,uuid:"E9DCA691-4215-4602-9C87-8E049721B094"}
 * @AllowToRunInFind
 */
function secRemoveUserFromGroup(userID, groupID){	
																		//	variable declarations
	var userGroups;														//	the users-groups foundset
	if(!(userID && groupName)){											//	validate required input		
		return false;
	}
	userGroups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USER_GROUPS);
	if(userGroups.find()){												//	search user groups table
		userGroups.user_id = userID;									//	search by user
		userGroups.group_id= groupID;									//	search by group
		return userGroups.search() && userGroups.deleteRecord();		//	delete record
	}
}

/**
 * sets the value for secCurrentApplication, which drives global relations
 * removes and re adds the application data filter
 * @param {Number} [applicationID] the Application ID
 * @properties={typeid:24,uuid:"F7524E06-F5F3-471D-B52D-5990AB1CB287"}
 */
function secSetCurrentApplication(applicationID){
	secCurrentApplicationID = applicationID;
	databaseManager.removeTableFilterParam(SEC_SERVER,SEC_APPLICATION_FILTER);
	if(applicationID){
		databaseManager.addTableFilterParam(SEC_SERVER,null,'application_id','^||=',applicationID,SEC_APPLICATION_FILTER);
	}
}

/**
 * sets the value for secCurrentTenantID, which drives global relations
 * removes and re adds the application data filter
 * @param {Number} [tenantID] the tenant ID
 * @properties={typeid:24,uuid:"7184F80F-6D6E-4A21-A34D-AF5F8BB789EE"}
 */
function secSetCurrentTenant(tenantID){
	secCurrentTenantID = tenantID;
	databaseManager.removeTableFilterParam(SEC_SERVER,SEC_TENANT_FILTER);
	if(tenantID){
		databaseManager.addTableFilterParam(SEC_SERVER,null,'tenant_id','^||=',tenantID,SEC_TENANT_FILTER);
	}
}

/**
 * This is the encryption method which is used internally by the Column Conversion settings for users.password.
 * The user's password is encrypted using the MD5 Base-16 algorythm
 * It may also be called externally as a convenience
 * @param {String} the password to convert.
 * @returns {Object} The encrypted string
 * @properties={typeid:24,uuid:"7DA05793-8B70-4FCC-9250-28FBCECA48CE"}
 */
function secEncryptPassword(password) {
	if(!password){														//	validate input
		return null;
	}
	return utils.stringMD5HashBase16(password);							//	encrypt string
}

/**
 * Creates a tenant with the specified company name
 * Verifies that the company name is unique
 * @param {String} companyName The name of the tenant
 * @returns {JSRecord} The tenant record
 * @properties={typeid:24,uuid:"03838DAD-7D57-4119-8064-23466A3F4CCC"}
 * @AllowToRunInFind
 */
function secCreateTenant(companyName) {
																		//	variable declaraions	
	var tenants;														//	Foundset for the tenants
	if(!companyName){													//	validate input
		return null;
	}
	tenants = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_TENANTS);
	if(tenants.find()){													//	Search the tenants table...
		tenants.company_name = companyName;								//	...by company name
		if(!tenants.search() && tenants.newRecord()){					//	company name is unique. create the tenant record
			tenants.company_name = companyName;							//	set the company name
			if(databaseManager.saveData(tenants.getSelectedRecord())){	//	save the record
				return tenants.getSelectedRecord();						//	return the tenant id
			}
		}
	}
	
	return null;														//	could not create tenant
}

/**
 * Gets the specified user record in the specified tenant
 * If no user name is specified, then the logged-in user is returned
 * If no tenant is specifed, then the current tenant is searched
 * @param {String} [userName] The user name. Default is the current user
 * @param {Number} [tenantID] The id of the tenant to search. Default is current tenant
 * @returns {Number} The user ID
 * @properties={typeid:24,uuid:"5D0770EA-6F96-469A-9480-727A5F0EC310"}
 * @AllowToRunInFind
 */
function secGetUserID(userName, tenantID) {
																		//	variable declarations
	var users;															//	the users foundset
	if(!userName){														//	validate input...	
		return sec_current_user.getSelectedRecord();					//	return current user when no user name specified
	}
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);	//	get a user foundset
	if(users.find()){													//	search the user foundset...
		users.tenant_id = (tenantID) ? tenantID : secCurrentTenantID;	//	search by tenant (use the current tenant when no tenant id specified)
		users.user_name = userName;										//	search by user name	
		if(users.search()){												
			return users.user_id;										//	return the ID
		}
	}
	return null;														//	could not get user
}

/**
 * Gets the specified group record in the specified tenant
 * 
 * @param {String} groupName The group name
 * @param {Number} [tenantID] The id of the tenant to search. Default is null (app-wide groups)
 * @param {Number} [appID] The id of the application to search. Default is the current app
 * @returns {Number} The group ID
 * @properties={typeid:24,uuid:"573C0611-08AB-4929-8F73-FD5BBB5F7108"}
 * @AllowToRunInFind
 */
function secGetGroupID(groupName, tenantID, appID) {
	
	var groups;															//	the users foundset
	if(!groupName){														//	validate input...	
		return null;													//	must provide a group name
	}
	groups = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_GROUPS);	//	get a group foundset
	if(groups.find()){													//	search the group foundset...
		groups.tenant_id = (tenantID) ? tenantID : '^';					//	search by tenant (a null tenant param defaults to NULL search param)
		groups.application_id = (appID)?appID:secCurrentApplicationID;	//	search the pplication ID
		groups.group_name = groupName;									//	search by group name	
		if(groups.search()){												
			return groups.group_id;										//	return the selected record
		}
	}
	return null;	
	
}

/**
 * Gets the specified tenant record
 * 
 * @param {String} companyName The copmany name
 * @returns {Number} The tenant id
 * @properties={typeid:24,uuid:"975EA4C7-93B2-4265-AD4F-CCAC7075DD7D"}
 * @AllowToRunInFind
 */
function secGetTenantID(companyName){
	var tenants;														//	the tenants foundset
	if(!companyName){													//	validate input...	
		return null;													//	must provide a copmany name
	}
	tenants = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_TENANTS);//	get a tenant foundset
	if(tenants.find()){													//	search the tenant foundset...
		tenants.company_name = companyName;								//	search by tenant name	
		if(tenants.search()){												
			return tenants.tenant_uuid;									//	return the ID
		}
	}
	return null;														//	could not find tenant
}

/**
 * Creates a new application record.
 * 
 * @param {String} applicationName. Must be unique
 * @returns {JSRecord} The application record
 * @properties={typeid:24,uuid:"90A37E12-2B17-4EB3-8D16-D8AD77EF8379"}
 * @AllowToRunInFind
 */
function secCreateApplication(applicationName) {
																		//	Variable Declarations
	var apps;															//	Foundset for the apps
	if(!applicationName){												//	validate input
		return null;
	}
	apps = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_APPLICATIONS);
	if(apps.find()){													//	Search the applications table...
		apps.application_name = applicationName;						//	...by a name
		if(!apps.search() && apps.newRecord()){							//	app name is unique. create the record
			apps.applicationName = companyName;							//	set the app name
			if(databaseManager.saveData(apps.getSelectedRecord())){		//	save the record
				return apps.getSelectedRecord();						//	return the tenant id
			}
		}
	}
	return null;														//	could not create app
}

/**
 * Deletes the specified application
 * 
 * @param {Number} applicationID
 * @returns {Boolean} indicates if the delete was successful
 * @properties={typeid:24,uuid:"24714EB9-2231-4188-9A11-AA54C6C39C6A"}
 */
function secDeleteApplication(applicationID) {
																		//	Variable Declarations
	var apps;															//	Foundset for the apps
	if(!applicationName){												//	validate input
		return null;
	}
	apps = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_APPLICATIONS);
	return apps.loadRecords(applicationID) && apps.deleteRecord();		//	find application and delete
}

/**
 * Gets the specified application id
 * 
 * @param {String} applicationName
 * @returns {Number} The application ID
 * @properties={typeid:24,uuid:"50DBA517-D5B9-4FA3-A545-D5E1308ED5FA"}
 * @AllowToRunInFind
 */
function secGetApplicationID(applicationName) {
																		//	Variable Declarations
	var apps;															//	The applications foundset
	
	if(!applicationName){												//	validate input
		return null;
	}
	apps = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_APPLICATIONS);
	if(apps.find()){													//	search applications
		apps.application_name = applicationName;						//	search by app name
		if(apps.search()){									
			return apps.application_id;									//	get selected record
		}
	}
	return null;														//	app not found
}

/**
 * Creates a key in the specified application.
 * If no application ID is specified then the default is the current application
 * 
 * @param {String} keyName The name of the key, must be unique within the application
 * @param {Number} [appID] The ID of the application in which to create the security key
 * @properties={typeid:24,uuid:"B7A51A70-C8C7-41D4-BCB9-08082A045088"}
 * @AllowToRunInFind
 */
function secCreateKey(keyName, appID) {
																		//	variable declarations
	var keys;															//	The keys foundset
	
	if(!keyName){														//	validate input
		return false;
	}
	appID = (appID) ? appID : secCurrentApplicationID;					//	a null app ID defaults to the current ID
	keys = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_KEYS);		//	get the keys foundset
	if(keys.find()){													//	search the keys foundset...
		keys.key_name = keyName;										//	search by key name
		keys.application_id = appID;									//	search by application id
		if(!keys.search() && keys.newRecord()){							//	if a key was not found, create one
			keys.key_name = keyName;									//	set the key name
			keys.application_id = appID;								//	set the application id
			if(databaseManager.saveData(keys.getSelectedRecord())){		//	save the data
				return keys.getSelectedRecord();						//	return the key record
			}
		}
	}
	return null;
}

/**
 * Deletes the specified security key
 * 
 * @param {Number} keyID The Key ID
 * @returns {Boolean} Indicates if the delete was successful
 * @properties={typeid:24,uuid:"FD70725A-9268-41B9-AF00-0C0B36863508"}
 */
function secDeleteKey(keyID) {
																	//	variable declaraions
	var keys;														//	the keys foundset
	
	if(!keyID){														//	validate input
		return null;
	}
	keys = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_KEYS);	//	get the keys founddset
	return keys.loadRecords(keyID) && keys.deleteRecord();			//	load and delete the record
}

/**
 * Gets the specified Security Key by name
 * 
 * @param {String} keyName The name of the key
 * @param {Number} [appID] The ID of the application. Default is the current app
 * @returns {Number} The Key ID
 * @properties={typeid:24,uuid:"DC348E46-2873-4225-AEB9-EBE26BE6CEA0"}
 * @AllowToRunInFind
 */
function secGetKeyID(keyName, appID) {
																	//	variable declaraions
	var keys;														//	the keys foundset
	
	if(!keyName){													//	validate input
		return false;
	}
	appID = (appID) ? appID : secCurrentApplicationID;				//	a null app id defaults to the current application
	keys = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_KEYS);	//	get the foundset
	if(keys.find()){												//	search the keys table
		keys.key_name = keyName;									//	search by name
		keys.application_id = appID;								//	search by application
		if(keys.search()){											
			return keys.key_id;										//	get the record
		}
	}
}

/**
 * Creates a permission record for specified application.
 *
 * @param {Number} permissionType The permission type
 * @param {String} resourceID 'server.table' for Data permissions, elementUUID for UI permissions 
 * @param {Number} flags The integer flags. Concatinate security constants w/ bitwise 'or'
 * @param {Number} [appID] The application ID. Default is current application
 * @param {Number} [keyID] The security key ID. Creates an application-wide restriction if no key is specified.
 * @returns {JSRecord} The permission record
 * @properties={typeid:24,uuid:"7C3C3BCD-71D3-4A15-B4A4-66888CEE85F0"}
 */
function secCreatePermission(permissionType, resourceID, flags, appID, keyID) {
																									//	variable declarations
	var permissions;																				//	the permissions foundset

	if(!(																							//	validate input
		(permissionType == SEC_PERMISSION_TYPE_DATA || permissionType == SEC_PERMISSION_TYPE_UI) && //	permission type must be data|ui
		resourceID && 																				//	resource id required
		flags >= 0)){																				//	flags are required
		return null;
	}

	permissions = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_KEYS);							//	get the permission foundset
	if(permissions.newRecord()){																	//	create the permission record
	permissions.permission_type = permissionType;													//	set the permission type														
		if(permissionType == SEC_PERMISSION_TYPE_DATA){												//	convert flags for data permissions...
			permissions.can_read = (flags | JSSecurity.READ)/JSSecurity.READ;
			permissions.can_insert = (flags | JSSecurity.INSERT) / JSSecurity.INSERT;
			permissions.can_update = (flags | JSSecurity.UPDATE) / JSSecurity.UPDATE;
			permissions.can_delete = (flags | JSSecurity.DELETE) / JSSecurity.DELETE;
			permissions.use_tracking = (flags | JSSecurity.TRACKING) / JSSecurity.TRACKING;
			permissions.server_name = resourceID.split('.')[0];
			permissions.table_name = resourceID.split('.')[1];
		} else {
			permissions.element_uuid = resourceID;													//	convert flags for UI permissions...
			permissions.is_visible = (flags | JSSecurity.VIEWABLE) / JSSecurity.VIEWABLE;
			permissions.is_accessible = (flags | JSSecurity.ACCESSIBLE) / JSSecurity.ACCESSIBLE;
			
		}
		permissions.application_id = (appID) ? appID : secCurrentApplicationID;						//	set the application ID (default is current)
		permissions.key_od = keyID;																	//	set the security key ID
		if(databaseManager.saveData(permissions.getSelectedRecord())){								//	save data
			return permissions.getSelectedRecord();													//	return the record
		}
	}
	return null;
}

/**
 * Deletes a specified permission
 * 
 * @param {Number} permissionID
 * @returns {Boolean} indicates if delete was successful
 * @properties={typeid:24,uuid:"274D3D89-D202-46EC-A3BB-5873A128DF02"}
 */
function secDeletePermission(permissionID) {
																									//	variable decalarations
	var permissions;																				//	permissions foundset
	
	if(!permissionID){																				//	validate input
		return false;
	}
	permissions = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_KEYS);							//	get foundset
	return permissions.loadRecords(permissionID) && permissions.deleteRecord();						//	load and delete record
}

/**
 * Determines the logged-in user has access to the specifed security key
 * 
 * @param {String} keyName the name of the key
 * @returns {Boolean} true if user has access
 * @properties={typeid:24,uuid:"EB78971F-BF2A-491D-96FF-154068DA325B"}
 * @AllowToRunInFind
 */
function secCheckKeyAccess(keyName) {
	var keys = databaseManager.convertFoundSet(sec_current_user_groups,sec_current_user_groups.user_groups_to_group_keys);
	if(keys.find()){
		keys.group_keys_to_keys.key_name = keyName;
		return checks.search() >= 1;
	}
	return false;

}

/**
 * Determines the logged-in user has access to the specifed security group
 * 
 * @param {String} groupName the name of the group
 * @returns {Boolean} true if user has access
 * @properties={typeid:24,uuid:"11F355CB-E060-447E-99A5-E0F35CBE4FC5"}
 * @AllowToRunInFind
 */
function secCheckGroupAccess(groupName){
	if(sec_current_user_groups.find()){
		sec_current_user_groups.user_groups_to_groups.group_name
		return sec_current_user_groups.search() >= 1;
	}
	return false;
}

/**
 * Convenience wrapper for security.logout, because it cannot be called direct from a UI component
 * 
 * @param {String} solutionToLoad
 * @param {String} method
 * @param {Object} argument
 * @properties={typeid:24,uuid:"F736A92A-F366-4157-B0FD-7F115D9AE743"}
 */
function secLogout(solutionToLoad,method,argument) {
	security.logout(solutionToLoad,method,argument);
}

/**
 * Handler for the secServerNames Value List
 * 
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"DB3AB7EF-4592-4FB2-9D4A-92374B6D8EE8"}
 */
function secGetServerNames(displayValue, realValue, record, valueListName) {
	//var values = plugins.maintenance.getServerNames(true,true).sort();
	var values = ARRAY_getAllServers(); //TODO: DONE leave maintenance mode
	
	if (displayValue == null && realValue == null) {
		return databaseManager.convertToDataSet(values);
	} else if (displayValue != null) {
		var array = [];
		for(i in values){
			if(displayValue.equalsIgnoreCase(utils.stringLeft(values[i],displayValue.length))){
				array.push(values[i]);
			}
		}
		return databaseManager.convertToDataSet(array);
		
	} else if (realValue != null) {
		return databaseManager.convertToDataSet([realValue]);
	}
}

/**
 * Handler for the secTableNames Value List
 * 
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"63637E4F-D7A3-41A3-A1AF-D53696AC54DE"}
 */
function secGetTableNames(displayValue, realValue, record, valueListName) {
	if(record && record.server_name){
		//var server = plugins.maintenance.getServer(record.server_name,true,true); //TODO: DONE leave maintenance mode
		var server = ARRAY_getAllServers();
		if(server){
			var values = databaseManager.getTableNames(record.server_name).sort();	
			if (displayValue == null && realValue == null) {
				return databaseManager.convertToDataSet(values);
			} else if (displayValue != null) {
				var array = [];
				for(i in values){
					if(displayValue.equalsIgnoreCase(utils.stringLeft(values[i],displayValue.length))){
						array.push(values[i]);
					}
				}
				return databaseManager.convertToDataSet(array);
				
			} else if (realValue != null) {
				return databaseManager.convertToDataSet([realValue]);
			}
		}
	}
	return databaseManager.createEmptyDataSet();
}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"BE91906B-7877-403C-966B-96A876902C81"}
 */
function secGetFormNames(displayValue, realValue, record, valueListName) {
	var values = forms.allnames.sort();
	
	if (displayValue == null && realValue == null) {
		return databaseManager.convertToDataSet(values);
	} else if (displayValue != null) {
		var array = [];
		for(i in values){
			if(displayValue.equalsIgnoreCase(utils.stringLeft(values[i],displayValue.length))){
				array.push(values[i]);
			}
		}
		return databaseManager.convertToDataSet(array);
		
	} else if (realValue != null) {
		return databaseManager.convertToDataSet([realValue]);
	}
}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"C78F96D4-D067-4545-87DD-27B61A8AF5AF"}
 */
function secGetElementUUIDs(displayValue, realValue, record, valueListName) {
	if(record && record.form_name){
		var values = security.getElementUUIDs(record.form_name);
		values.setValue(1,1,'-form-');									//	TODO: i18n here
		values.sort(1,true);

		if (displayValue == null && realValue == null) {
			return values;
		} else if (displayValue != null) {
			var ds = databaseManager.createEmptyDataSet(0,2);
			for(var i = 1; i <= values.getMaxRowIndex(); i++){
				if(displayValue.equalsIgnoreCase(utils.stringLeft(values.getValue(i,1),displayValue.length))){
					ds.addRow(values.getRowAsArray(i));
				}
			}
			return ds;
			
		} else if (realValue != null) {
			return values;
		}
	}
}

/**
 * Sets the password for the specified user
 * @param {Number} userID
 * @param {String} password
 * @properties={typeid:24,uuid:"22BB727C-89F9-42A4-A9A8-F3BE07F14EED"}
 */
function secSetPassword(userID, password) {
	var users;															//	Variable Ddeclaration - the users foundset
	
	if(!(userID && password)){											//	validate input
		return false;
	}
	
	users = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USERS);	//	load the user
	if(users.loadRecords(userID)){
		users.user_password = password;									//	Change the password
		return databaseManager.saveData(users.getSelectedRecord());		//	save the record
	}
	return false;														//	user not found, or new name already in use
}

/**
 * @properties={typeid:24,uuid:"B4D445DB-2AEA-4E9D-9E97-A63AA1C51241"}
 */
function ARRAY_getAllServers(){
    var vServerAmount = plugins.UserManager.Server().getSettingsProperty('ServerManager.numberOfServers') -1;
    var vProperty, vServers = [];
    var vPropertiesArray = plugins.UserManager.Server().getServerProperties();
    for(var i = 0 ; i < vServerAmount ; i++){
       vProperty = 'server.' + i + '.serverName';
       vServers.push(plugins.UserManager.Server().getSettingsProperty(vProperty));
    }
    vServers.sort();
    return vServers;
 }
