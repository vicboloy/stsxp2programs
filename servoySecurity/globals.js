 /**
  * 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F71ACC2-81F7-4451-A230-D3C6B56E9770"}
 */
var viewport = '<html><head></head></html><meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=4.0; user-scalable=1;"/>';
/**
 * @properties={typeid:35,uuid:"37FC297E-D636-4141-AD24-87FC6C6B87AB",variableType:-4}
 */
var viewport2 = new XML(<html>
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=4.0; user-scalable=1;"/>
<script>
 <![CDATA[
 function doCallback(genericId) {
	 //alert("Y");
	 var textbox = document.getElementById("id4c");
	 textbox.blur();
	 alert("T "+textbox);
	 event.preventDefault();	 
	 setTimeout(function () {textbox.scrollIntoView();textbox.focus();},5500);
 }
 ]]>
 </script> 
</head>
<body>
 <button id="refocusEntry" onclick="javascript:globals.myFocusCallbackMethod()" style="visibility: hidden"></button>
</body>
</html>).toXMLString().replace(']]>', '').replace('<![CDATA[', '');

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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BB035415-D696-4A09-BD0C-14071875FAC3"}
 */
var SEC_NULL = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2DE2544F-43DD-4DCB-B4DC-C3CDA5F52616"}
 */
var SEC_ONE = ""; //TODO JOE this was a 1 type {Number}
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6177C79F-5204-45ED-B806-83F760BC936C",variableType:4}
 */
var SEC_ONE1 = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"942A4054-8B7A-4FE0-89C2-A53F0395484C",variableType:4}
 */
var SEC_ZERO = 0;
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
 * @properties={typeid:35,uuid:"7A88DD48-B8CC-4214-9CE8-0AECA59C0C00"}
 */
var SEC_TABLE_ASSOCIATIONS = 'associations';
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD472BBA-FF43-467D-BD05-CC62A0174B96"}
 */
var SEC_ASSOCIATION_FILTER = 'secAssociationFilter';
/**
 * @type {Array}
 * @properties={typeid:35,uuid:"9DB32D6A-C316-470B-BDA4-2648B171315B",variableType:-4}
 */
var tenantFiltersArray = [];
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
 * @properties={typeid:35,uuid:"9504A967-9F84-4D58-9306-7A92214F4F54",variableType:-4}
 */
var secCurrentTenantIDs = [];
/**
 * @type {String}
 * @properties={typeid:35,uuid:"4D9E3186-80E6-44BD-ADB6-0812354D0A90"}
 */
var secCurrentAssociationID = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1DA5383-3DFB-43F2-A992-8C64FF74377B"}
 */
var secCurrentAssociationName = "";
/**
 * @type {String}
 * @properties={typeid:35,uuid:"10432D30-207C-4AC3-96CC-D53F7A611D67"}
 */
var secCurrentAssociationMasterID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B1F0B21-B375-49E5-B768-6E3947F8280B"}
 */
var secCurrentUserID = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C169FCC3-B230-40D7-A2FB-A32AF24A934C"}
 */
var secCurrentUserName = "";
/**
 * @properties={typeid:35,uuid:"3A39B918-BBC8-4B32-8E28-C8A9D7940DA3",variableType:-4}
 */
var secSession = {
	login : ""	
}
/**
 * @type {Array}
 * 
 * @properties={typeid:35,uuid:"BF845CC4-3FA1-40F4-AD43-70BB21DF9DDC",variableType:-4}
 */
var secTenantArray = [""];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"73D45388-0F8A-4A73-8180-DF410838B567"}
 */
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"46A74ADC-5FC9-4604-9B1A-5405725CD1C6"}
 */
var html = '<html> \
	<head> \
	<script type="text/javascript" charset="utf-8" src="http://10.8.0.6:8080/ebapi-modules.js"></script> \
	<script type="text/javascript"> \
	function exitB() { \
		alert("joe2");\
	} \
	</script> \
	</head> \
	<body onload="exitB()"> \
	<button type="button" onClick="exitB()">TEST</button> \
	</body> \
	</html>';
/**
 * @properties={typeid:35,uuid:"84E03118-BE96-4341-A73F-68682F6CC32D",variableType:-4}
 */
var secTenantArraySearch = [""];
/**
 * @properties={typeid:35,uuid:"5897309D-07C3-4FC3-8C50-6D09B64C9049",variableType:-4}
 */
var secLicenses = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3A728C0C-74FE-4A29-8918-C1CD89BFC628"}
 */
var fabsuiteCom = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A29DEFF9-7FD1-4B31-94B8-F133FA5E0BB6"}
 */
var fabsuiteResponse = '';
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
		return null;													//	failed validation returns false
	}

	userGroups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USER_GROUPS);
	if(userGroups.find()){												//	search the user groups table for existing entry
		userGroups.user_uuid = userID;									//	search by user id
		userGroups.group_uuid = groupID;									//	search by group id	
		if(!userGroups.search() && userGroups.newRecord()){				//	not already in group, so create the record
			userGroups.user_uuid = userID;								//	set the user id
			userGroups.group_uuid = groupID;								//	set the group id
			if(databaseManager.saveData(userGroups.getSelectedRecord())){
				return userGroups.getSelectedRecord();					//	save and return record
			}
		}
	}
	

	//	group not found or user already in group
	return null;
}
/**
 * Adds the specified user to the named group
 * Looks first in the current tenant's groups, then the current application-wide groups
 * @param {String} [tenantName] the name of the tenant
 * @param {String} [assocName] the name of the association to which the tenant is added
 * @returns {String} The associations UUID  if the tenant was added
 * @properties={typeid:24,uuid:"DFEF34C8-F137-49D3-A371-8F472356136D"}
 * @AllowToRunInFind
 */
function secAddTenantToAssociation(tenantName, assocName){	
																		//	variable declarations
	var association;														//	the users-groups foundset
	if(!(tenantName && assocName)){											//	validate required input
		return null;													//	failed validation returns false
	}

    /** @type {JSFoundSet<db:/stsservoy/associations>} */																		
	association = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_ASSOCIATIONS);
	if(association.find()){												//	search the user groups table for existing entry
		association.tenant_member = tenantName;									//	search by user id
		association.association_name = assocName;									//	search by group id	
		if(!association.search() && association.newRecord()){				//	not already in group, so create the record
			association.tenant_member = tenantName;								//	set the user id
			association.association_name = assocName;								//	set the group id
			association.tenant_uuid = secGetTenantID(tenantName);
			if(databaseManager.saveData(association.getSelectedRecord())){
				return association.association_uuid;
			}
		}
	}
	

	//	group not found or user already in group
	return null;
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
	/** @type {JSFoundSet<db:/stsservoy/permissions>} */											
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
	for(var ident1 in settings){												//	iterate over the settings object array
		dataset.addRow([ident1, settings[ident1].flags]);						//	add setting to dataset
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
		/** @type {JSFoundset<db:/stsservoy/permissions>} */
		var ident2;															//	the id of the resource (either server.table or element)
		if(permission.permission_type == SEC_PERMISSION_TYPE_DATA){		//	TABLE permission...
			
			ident2 = permission.server_name + '.' + permission.table_name;	//	the resource id is server_name.table_name
			settings[ident2] = (settings[ident2]) ? settings[ident2] : {};			//	get or create object to store the table permission for this server.table

																		//	merge settings (to least restrictive)...			
			settings[ident2].canRead     = settings[ident2].canRead|permission.can_read;
			settings[ident2].canInsert   = settings[ident2].canInsert|permission.can_insert
			settings[ident2].canUpdate   = settings[ident2].canUpdate|permission.can_update;
			settings[ident2].canDelete   = settings[ident2].canDelete|permission.can_delete;
			settings[ident2].useTracking = settings[ident2].useTracking|permission.use_tracking;
			
																		//	Set the integer flags w/ bitwise operators
			settings[ident2].flags = (settings[ident2].canRead * JSSecurity.READ)|
								 (settings[ident2].canInsert * JSSecurity.INSERT)|
								 (settings[ident2].canUpdate * JSSecurity.UPDATE)|
								 (settings[ident2].canDelete * JSSecurity.DELETE)|
								 (settings[ident2].useTracking * JSSecurity.TRACKING);

		}else if(permission.permission_type == SEC_PERMISSION_TYPE_UI){	//	UI permission...

			ident2 = permission.element_uuid;								//	The resource ID is the element UUID
			settings[ident2] = (settings[ident2]) ? settings[ident2] : {};			//	get or create object to store the ui permission for this element uuid
			
																		//	merge settings (to least restrictive)...
			settings[ident2].isAccessible = settings[ident2].isAccessible|permission.is_accessible;
			settings[ident2].isVisible    = settings[ident2].isVisible|permission.is_visible;
			
																		//	Set the integer flags w/ bitwise operators
			settings[ident2].flags        = (settings[ident2].isVisible * JSSecurity.VIEWABLE)|
			                            (settings[ident2].isAccessible * JSSecurity.ACCESSIBLE);
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
	/** @type {JSFoundSet<db:/stsservoy/groups>} */																	
	var groups;															//	the groups foundset
	var groupToChange;													//	the group to change
	
	if(!(groupID && newName)){											//	validate input
		return false;
	}
	groups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_GROUPS);
	groupToChange = groups.duplicateFoundSet();
	var oldName = groupToChange.group_name;  //added to existing base, oldName was undefined for below
	if(groupToChange.loadRecords(groupID) && groups.find()){			//	load the group to change, search other groups
		groups.group_name = oldName;									//	search by name
		groups.application_id = groupToChange.application_id;			//	search by application
		groups.tenant_uuid = groupToChange.tenant_uuid;						//	search by tenant
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
	/** @type {JSFoundSet<db:/stsservoy/users>} */
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
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var users;															//	the users foundset
	
	if(!(userID && password)){											//	validate input
		return false;
	}
	
	users = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USERS);	//	search for the user
	if(users.loadRecords(userID)){
		//if (application.isInDeveloper()){application.output('password '+password+' crypt = '+secEncryptPassword(password))}
		return users.user_password == secEncryptPassword(password);		//	check encrypted password
	}
	
	return false;														//	no user found or passwords don't match		
}

/**
 * Creates a group in the current application. Group is created for the tenant if specified
 * The method will not creat groups w/ duplicate names in the application or tenant
 * @param {String} groupName the name of the new group. 
 * @param {Number} [tenantID] the tenant. If null, then application-wide groups are used
 * @param {Number} [appID] the appliction. If null, then current application is used
 * @returns {JSRecord} the group record
 * @properties={typeid:24,uuid:"3790A22A-5A55-4F02-AB97-6D63A034DF2A"}
 * @AllowToRunInFind
 */
function secCreateGroup(groupName, tenantID, appID){
																		//	variable declarations
	var groups;															//	the groups foundset
	
	if(!groupName){														//	validate input	
		return null;
	}
	appID = (appID) ? appID : secCurrentApplicationID;					//	a null aplication param defaults to the current app

	groups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_GROUPS);	//	search the groups to make sure there is not already a group with new name
	if(groups.find()){
		groups.group_name = groupName;									//	search by group name
		groups.application_id = appID;									//	search within the specified app
		groups.tenant_uuid = (tenantID) ? tenantID : '^';					//	search within the specified tenant (null defaults to NULL search param)
		if(!groups.search()){
			
			if(groups.newRecord()){										//	create the group
				groups.group_name = groupName;							//	set the group name
				groups.tenant_uuid = tenantID;							//	set the tenant ID
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
 * @param {UUID} [tenantID] the Tenant in which to create the user. Default is current tenant
 * @returns {JSRecord} the user record
 * @properties={typeid:24,uuid:"E1D8EF68-9F1F-4E3A-ABEF-CB07A1930235"}
 * @AllowToRunInFind
 */
function secCreateUser(userName, password, tenantID){
																		//	local variable declarations
	var users;															//	users foundset

	if(!(userName && password)){										//	validate input
		return null;
	}		
	tenantID = (tenantID) ? tenantID : secCurrentTenantID;				//	default is current tenant when null;
	
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);	//	get the users foundset
	if(users.find()){													//	search users table
		users.user_name = userName;										//	search by user name
		users.tenant_uuid = tenantID;										//	search by tenant ID
		if(!users.search()){	
			
			if(users.newRecord()){										//	create the new user
				users.user_name = userName;								//	set user name
				users.user_password = password;							//	set password
				users.tenant_uuid = tenantID;								//	set the tenant ID
				users.is_account_active = 1;							// set active account
				if (userName == 'P2'){
					users.first_name = "P2 Programs";
				}
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
 * @properties={typeid:24,uuid:"560E2591-06E2-4976-9A4A-BD25FDF2E2E6"}
 */
function secInitialStart(){
	if (application.isInDeveloper()){application.output('initial start');}
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var users = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USERS);
	users.loadAllRecords();
	var userCount = users.getSize();
	/** @type {JSFoundSet<db:/stsservoy/tenant_list>} */
	var tenants = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_TENANTS);
	tenants.loadAllRecords();
	var tenantCount = tenants.getSize();
	if (application.isInDeveloper()){application.output('tenant count '+tenantCount);}
	if (tenantCount < 2){
		forms.secLoginExample.companyName.visible = false;
		forms.secLoginExample.companyNameLabel.visible = false;
	}
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	var associations = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_ASSOCIATIONS);
	associations.loadAllRecords();
	associations.deleteAllRecords();
	associations.loadAllRecords();
	var associationCount = associations.getSize();
	//if (associationCount != 0 || true){
		var assocUUID = secCreateAssociation('demo1');
		//var tenantRec = secCreateTenant('demo1');
		//secAddTenantToAssociation('demo1','demo1');
		secCreateUser('demo1','password',assocUUID);
	//}
		if (application.isInDeveloper()){application.output('users: '+userCount+' tenants:' +tenantCount+' associations: '+associationCount);}
}
/**
 * @properties={typeid:24,uuid:"CDD97263-D36B-491A-ABAA-A0D9EFC101FB"}
 */
function secLogger(message){
	// This is login independent of application.
	/** @type {JSFoundSet<db:/stsservoy/rf_transactions>} */
	var log = databaseManager.getFoundSet('stsservoy','rf_transactions');
	log.newRecord();
	log.transaction_date = new Date();
	log.rf_program = "LOGIN";
	log.rf_client = application.getIPAddress()+' '+security.getClientID();
	log.rf_comm_data = message;
	
	databaseManager.saveData(log);
}
/**
 * Logs in the specified user
 * @param {Number} userID the id of the user
 * @properties={typeid:24,uuid:"AF48473F-8602-42CB-B8E7-7AB6D383C925"}
 */
function secLogin(userID){
																		//	local variable declarations:
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var users;															//	The users foundset
	
	if(!userID){ //	validate input
		scopes.globals.secLogger(i18n.getI18NMessage('sts.txt.user.no.such.animal',new Array(userID)));
		return false;
	}
	if (userID == "NEW"){
		///globals.secInitialStart();
	}
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);	//	get a users foundset
	//security.createGroup(SEC_ADMINISTRATORS);							//	Create the group (This may not be necessary)
	if (application.isInDeveloper()){application.output('before logical login');}
	if(users.loadRecords(userID) && users.is_account_active){ 			//	load user record, check if active account
		users.last_login = new Date();									//	reset last login date & login user
		secLogger(i18n.getI18NMessage('sts.txt.user.login',new Array(userID)));
		return security.login(users.user_name,users.user_uuid,[SEC_ADMINISTRATORS]);
	}
	if (application.isInDeveloper()){application.output('after logical login');}
	if (users.is_account_active){scopes.globals.secLogger(i18n.getI18NMessage('sts.txt.user.inactive',new Array(users.user_name)))}
	return null;  //added to return some value JOE
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
	if(!(userID && groupID)){											//	validate required input	
																		//TODO JOE above was 'groupName' changed 'groupID;
		return false;
	}
	userGroups = databaseManager.getFoundSet(SEC_SERVER, SEC_TABLE_USER_GROUPS);
	if(userGroups.find()){												//	search user groups table
		userGroups.user_uuid = userID;									//	search by user
		userGroups.group_uuid= groupID;									//	search by group
		return userGroups.search() && userGroups.deleteRecord();		//	delete record
	}
	return false; //added to return some value JOE
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
 * @param {String} [tenantID] the tenant ID
 * @properties={typeid:24,uuid:"7184F80F-6D6E-4A21-A34D-AF5F8BB789EE"}
 * @AllowToRunInFind
 */
function secSetCurrentTenant(tenantID){
	if (application.getSolutionName().search('STS X Embedded') != -1){//Create tenant for Embedded otherwise, all zeroes
		/** @type {QBSelect<db:/stsservoy/tenant_list>} */
		var q = databaseManager.createSelect('db:/stsservoy/tenant_list');
		q.result.add(q.columns.tenant_uuid);
		q.where.add(q.columns.tenant_uuid.not.eq(tenantID));
		/** @type {JSRecord<db:/stsservoy/tenant_list>} */
		var Q = databaseManager.getFoundSet(q);
		Q.loadAllRecords();
		if (false && Q.getSize() > 0){
			var notEmbedded = '00000000-0000-0000-0000-000000000000';
			secCurrentTenantID = application.getUUID(notEmbedded);
		} else {
			secCurrentTenantID = tenantID;// either create embedded tenant or skip creation
			q = databaseManager.createSelect('db:/stsservoy/tenant_list');
			q.result.add(q.columns.tenant_uuid);
			q.where.add(q.columns.tenant_uuid.eq(tenantID));
			Q = databaseManager.getFoundSet(q);
			Q.loadAllRecords();
			if (Q.getSize() == 0){
				var recIdx = Q.newRecord();
				/** @type {JSRecord<db:/stsservoy/tenant_list>} */
				var rec = Q.getRecord(recIdx);
				rec.company_name = 'FabSuite';
				rec.edit_date = new Date();
				rec.tenant_uuid = secCurrentTenantID;
				databaseManager.saveData(rec);
				/** @type {QBSelect<db:/stsservoy/associations>} */
				var s = databaseManager.createSelect('db:/stsservoy/associations');
				s.result.add(s.columns.association_uuid);
				s.where.add(s.columns.tenant_uuid.eq(tenantID));
				s.where.add(s.columns.association_name.eq('EMBEDDED'));
				/** @type {JSRecord<db:/stsservoy/associations>} */
				var S = databaseManager.getFoundSet(s);
				S.loadAllRecords();
				if (S.getSize() == 0){
					recIdx = S.newRecord();
					/** @type {JSRecord<db:/stsservoy/associations>} */
					var rec2 = S.getRecord(recIdx);
					rec2.edit_date = new Date();
					rec2.association_name = 'EMBEDDED';
					rec2.association_uuid = secCurrentTenantID;
					rec2.tenant_uuid = secCurrentTenantID;
					databaseManager.saveData(rec2);
					secSetCurrentAssociation(secCurrentTenantID);
				}
			}
		}
	}
	databaseManager.removeTableFilterParam(SEC_SERVER,SEC_TENANT_FILTER);
	if(tenantID){
		databaseManager.addTableFilterParam(SEC_SERVER,null,'tenant_uuid','^||=',tenantID,SEC_TENANT_FILTER);
	}
}
/**
 * @param assocID
 *
 * @properties={typeid:24,uuid:"FF0A15E2-196E-4CF0-B87B-9762ED9B7E7C"}
 */
function secSetCurrentAssociation(assocID){
	secCurrentAssociationID = assocID;
	databaseManager.removeTableFilterParam(SEC_SERVER,SEC_ASSOCIATION_FILTER);
	if(assocID){
		databaseManager.addTableFilterParam(SEC_SERVER,null,'tenant_uuid','^||=',tenantFiltersArray,SEC_ASSOCIATION_FILTER);
	}
}

/**
 * This is the encryption method which is used internally by the Column Conversion settings for users.password.
 * The user's password is encrypted using the MD5 Base-16 algorythm
 * It may also be called externally as a convenience
 * @param {String} password the password to convert.
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
 * Creates or updates a group for a login, enabling overall tenant filters for the application tables
 * 
 * @param {String} [assocName] association name
 * @return {UUID} [assocArray] array of tenants within association
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E122828D-EDF3-43CB-B2BD-27B444F2CAE8"}
 */
function secCreateAssociation(assocName){
	if (application.isInDeveloper()){application.output('Creating association '+assocName)}
	//var associationArray = [];
	if (!assocName){
		return null;
	}
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	var assoc;
	// continue with association creation
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	assoc = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_ASSOCIATIONS);
	if(assoc.find()){													//	Search the associations table...
		assoc.association_name = assocName;								//	...by association name
		if (assocName == 'ADMIN'){
			assoc.association_name = "OFFICE";
			assoc.logic_flag = 1;
		} 			//  only one admin association
		
		assoc.tenant_uuid = secCurrentTenantID;
		if(!assoc.search() && assoc.newRecord()){						//	association name is unique. create the association record
			assoc.association_name = assocName;							//	set the company name
			assoc.tenant_uuid = secCurrentTenantID;
			if (assocName == "ADMIN"){
				assoc.tenant_group_uuid = secCurrentTenantID;
				assoc.association_name = "OFFICE";
				assoc.logic_flag = 1;
			}
			if (application.isInDeveloper()){application.output('Create assoc '+assocName+' in UUID '+secCurrentTenantID);}
			//associationArray.push(assoc.association_uuid);
			if(databaseManager.saveData(assoc.getSelectedRecord())){	//	save the record
				assoc.getSelectedRecord();
				return assoc.association_uuid;						//	return the associaton id
			}
		}
	}
	
	return null;														//	could not create tenant
}
/**
 * @properties={typeid:24,uuid:"27F01BE6-C2EC-4EB0-967C-2D8291AF57A3"}
 */
function secCreateAssocGroup(){
	
}
/**
 * @properties={typeid:24,uuid:"02AFFE82-FA4A-4822-BE8B-FD9F6C60D103"}
 * @AllowToRunInFind
 */
function secUpdateAssociation(){
	//globals.secCurrentAssociationID;
	//globals.secTenantArray;
	var selection = 0;
	var indexStr = [];
	var tenant = "";
	var tenantUUID = "";
	var searchCount = 0;
	var storeRecord = false;
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	var associations = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_ASSOCIATIONS);
	//var maxLength = globals.secTenantArray.length;
	for(var index in globals.secTenantArray){
		selection = secTenantArray[index];
		indexStr=index.split(",");
		tenant=indexStr[0];
		tenantUUID=indexStr[1];	
		//XXXapplication.output(tenant+'---'+tenantUUID);
		// Deleted record is simply flagging from the group association
		// adding record is undeleting record OR adding new record
		/** @type {JSFoundSet<db:/stsservoy/associations>} */
		if (associations.find()){
			associations.tenant_group_uuid = globals.secCurrentAssociationID;
			associations.tenant_uuid = tenantUUID;
			//associations.tenant_member = tenant;
			searchCount = associations.search(true);
			//xxxapplication.output('searchCount '+searchCount+' selection: '+selection+' find tid: '+tenantUUID+' assoc id '+globals.secCurrentAssociationID+' membername '+tenant)
			if (selection && !searchCount){ // new record. don't overwrite another association's tenant
				associations.newRecord();
				associations.tenant_member = tenant;
				associations.tenant_uuid = tenantUUID;
				associations.association_name = globals.secCurrentAssociationName;
				associations.tenant_group_uuid = globals.secCurrentAssociationID;
				associations.delete_flag = 0;
				storeRecord = true;
			}
			if (selection && searchCount){
				associations.delete_flag=0;	// re-enable group association membership
				storeRecord = true;
			}
			if (!selection && searchCount){
				associations.delete_flag=1;  //disable but maintain membership in group association
				storeRecord = true;
			}
			if(storeRecord){
				databaseManager.saveData(associations.getSelectedRecord());
			}
			
		}
		
	}
	globals.secTenantArray = [];
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
																		//	variable declarations	
	var tenants;														//	Foundset for the tenants
	if(!companyName){													//	validate input
		return null;
	}
	/** @type {JSFoundSet<db:/stsservoy/tenant_list>} */
	tenants = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_TENANTS);
	if(tenants.find()){													//	Search the tenants table...
		tenants.company_name = companyName;								//	...by company name
		if(!tenants.search() && tenants.newRecord()){					//	company name is unique. create the tenant record
			tenants.company_name = companyName;							//	set the company name
			tenants.edit_date = new Date();
			if (application.isInDeveloper()){application.output('tenant Id '+tenants.tenant_uuid )}
			secCurrentTenantID = tenants.tenant_uuid;
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
 * @param {UUID} [tenantID] The id of the tenant to search. Default is current tenant
 * @returns {Number} The user ID
 * @properties={typeid:24,uuid:"5D0770EA-6F96-469A-9480-727A5F0EC310"}
 * @AllowToRunInFind
 */
function secGetUserID(userName, tenantID) {
																		//	variable declarations
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var users;															//	the users foundset
	if(!userName){														//	validate input...	
		return sec_current_user.getSelectedRecord();					//	return current user when no user name specified
	}
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);	//	get a user foundset
	if(users.find()){													//	search the user foundset...
		users.tenant_uuid = (tenantID) ? tenantID : secCurrentTenantID;	//	search by tenant (use the current tenant when no tenant id specified)
		//users.tenant_uuid IN 
		users.user_name = userName;										//	search by user name	
		if(users.search()){												
			return users.user_uuid;										//	return the ID
		}
	}
	return null;														//	could not get user
}
/**
 * Gets the specified user record in the specified group from which the tenant is selected.
 * Multiple associations have limited edit permissions due to data originated from single corp sources
 * If no user name is specified, then the logged-in user is returned
 * If no tenant is specifed, then the current tenant is searched
 * @param {String} [userName] The user name. Default is the current user
 * @param {UUID} [tenantID] The id of the association to search. Default is current association
 * @returns {Number} The user ID
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"16229D20-143D-43BA-8AA8-B9B56B666CBF"}
 */
function secGetUserID2(userName, tenantID) {
																		//	variable declarations
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var users;															//	the users foundset
	if(!userName){														//	validate input...	
		return sec_current_user.getSelectedRecord();					//	return current user when no user name specified
	}
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);	//	get a user foundset
	if(users.find()){													//	search the user foundset...
		users.tenant_uuid = (tenantID) ? tenantID : secCurrentTenantID;	//	search by tenant (use the current tenant when no tenant id specified)
		users.user_name = userName;										//	search by user name	
		if(users.search()){
			scopes.globals.getBasePermissions(users.user_uuid,users.tenant_uuid);
			return users.user_uuid;										//	return the ID
		}
	}
	scopes.globals.secLogger(i18n.getI18NMessage('sts.txt.user.invalid',new Array(userName)));
	return null;														//	could not get user
}
/**
 * @properties={typeid:24,uuid:"E5A874B4-5284-482B-AE8C-9A7B8CBAA168"}
 * @AllowToRunInFind
 */
function getTenantCount(){
	/** @type {JSFoundSet<db:/stsservoy/tenant_list>} */
	var tent = databaseManager.getFoundSet('stsservoy','tenant_list');
	tent.loadAllRecords();
	var empID = null;
	if (tent.getSize() == 0){// new install because no tenant found
		/** @type {JSFoundSet<db:/stsservoy/employee>} */
		var empl = databaseManager.getFoundSet('stsservoy','employee');
		if (empl.find()){
			empl.employee_number = "P2";
			if (empl.search()){
				empID = empl.employee_id;
			} else {
				var idx = empl.newRecord();
				rec2 = empl.getRecord(idx);
				rec2.edit_date = new Date();
				rec2.employee_active_flag = 1;
				rec2.employee_email = "paul@p2programs.com";
				rec2.employee_firstname = "Paul";
				rec2.employee_lastname = "Parks";
				rec2.employee_number = "P2";
				rec2.employee_workphone = "512-858-2007";
				databaseManager.saveData(rec2);
				empID = rec2.employee_id;
			}
		}
		var tenantRec = secCreateTenant('MY COMPANY');
		databaseManager.saveData();
		var assocId = secCreateAssociation('SHOP');
		databaseManager.saveData();
		var adminAssocId = secCreateAssociation('ADMIN');
		databaseManager.saveData();
		var adminUser = secCreateUser('P','p',tenantRec.tenant_uuid);
		adminUser.association_uuid = adminAssocId;
		adminUser.name_first = 'P2PROGRAMS';
		adminUser.employee_id = empID;
		//getBasePermissions(adminUser.user_uuid,tenantRec.tenant_uuid);
		databaseManager.saveData();
		var tablesToClear = ['addresses','carrier','cow_xref','cowcodes','customers','employee','employee_class','end_conditions',
		'heats','id_serial_numbers','idfiles','jobs','labor_codes','labor_department','last_id_serial','loads','lots',
		'piecemarks','preferences2','rf_transactions','route_detail','routings','sequences','sheets','status_description',
		'transactions','uom_types'
		]
		//, 'groups','group_keys','user_groups','permissions','applications','keys'
		// 'mapping', 'users','applications','associations','barcode_test','i18n_table',
		// 'ref_types','messages','tenant_list','zipcodes','valuelists'
		for (var index = 0;index < tablesToClear.length;index++){
			var fs = databaseManager.getFoundSet('stsservoy',tablesToClear[index]);
			fs.loadRecords();
			if (fs.getSize() == 0){continue}
			var table = databaseManager.getTable('stsservoy',tablesToClear[index]);
			/* @type {Array} */
			var tableNames = table.getColumnNames();
			var tableFS = databaseManager.getFoundSetUpdater(fs);
			if (tableNames.indexOf('tenant_uuid') != -1){
				tableFS.setColumn('tenant_uuid',tenantRec.tenant_uuid);
			}
			if (tableNames.indexOf('association_id') != -1){
				tableFS.setColumn('association_id',assocId);
			}
			if (application.isInDeveloper()){application.output('setting tenant and assoc in table '+tablesToClear[index])}
			tableFS.performUpdate();
		}
	}
	databaseManager.saveData();
	if (application.getSolutionName() != 'STS X Embedded'){
		databaseManager.addTableFilterParam('stsservoy','tenant_list','tenant_uuid','=','EEEEEEEE-EEEE-EEEE-EEEE-EEEEEEEEEEEE','noEmbedded');
	}
	tent.loadAllRecords();
	return tent.getSize();
}
/**
 * @AllowToRunInFind
 * 
 * @param userName
 *
 * @properties={typeid:24,uuid:"1B936C87-8D76-4E7C-A218-AC4BB2718734"}
 * @AllowToRunInFind
*/
function secGetAssocID(userName) {
	//	variable declarations
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var users;															//	the users foundset
	if(!userName){														//	validate input...	
		return false;
	}
	if (application.isInDeveloper()){application.output('test')}
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);	//	get a user foundset
	if(users.find()){													//	search the user foundset...
		if (application.isInDeveloper()){application.output('find')}
		//users.tenant_uuid = (tenantID) ? tenantID : secCurrentTenantID;	//	search by tenant (use the current tenant when no tenant id specified)
		users.user_name = userName;										//	search by user name	
		if(users.search()){			
			if (application.isInDeveloper()){application.output('search zone '+users.association_uuid)}
			return users.association_uuid;										//	return the ID
		}
	}
	return null;														//	could not get user
}

/**
 * Gets the specified group record in the specified tenant
 * 
 * @param {String} groupName The group name
 * @param {UUID} [tenantID] The id of the tenant to search. Default is null (app-wide groups)
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
		groups.tenant_uuid = (tenantID) ? tenantID : '^';					//	search by tenant (a null tenant param defaults to NULL search param)
		groups.application_id = (appID)?appID:secCurrentApplicationID;	//	search the pplication ID
		groups.group_name = groupName;									//	search by group name	
		if(groups.search()){												
			return groups.group_uuid;										//	return the selected record
		}
	}
	return null;	
	
}

/**
 * Gets the specified tenant record
 * 
 * @param {String} companyName The copmany name
 * @returns {UUID} The tenant id
 * @properties={typeid:24,uuid:"975EA4C7-93B2-4265-AD4F-CCAC7075DD7D"}
 * @AllowToRunInFind
 */
function secGetTenantID(companyName){
	/** @type {JSFoundSet<db:/stsservoy/tenant_list>} */																	
	var tenants;														//	the tenants foundset
	if(!companyName){													//	validate input...	
		return null;													//	must provide a copmany name
	}
	tenants = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_TENANTS);//	get a tenant foundset
	if(tenants.find()){													//	search the tenant foundset...
		tenants.company_name = companyName;								//	search by tenant name	
		if(tenants.search()){
			return tenants.tenant_uuid;									//	return the ID
		}  else {
			/** @type {JSFoundSet<db:/stsservoy/associations>} */
			var assocs = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_ASSOCIATIONS);
			if (assocs.find()){
				assocs.association_name = companyName;
				if (assocs.search()){
					return assocs.tenant_group_uuid;
				}
			}
		}
	}
	return null;														//	could not find tenant
}
/**
 * Gets the specified tenant record.  This is stored as the primary login for a user within an association.
 * The main association is then picked up from the user or from the main association table. If no association, then
 * the main associaton is assumed and editing is for the local plant.
 * 
 * @param {String} userName The company name
 * @param {String} companyName
 * @returns {UUID} The tenant id
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"34672C20-8C8D-487B-8B7E-E4B24B08847B"}
 */
function secGetTenantID2(userName,companyName){

	null;
	var tenantID = null;
	/** @type {JSFoundSet<db:/stsservoy/tenant_list>} */
	var company = databaseManager.getFoundSet('stsservoy','tenant_list');
	if (company.find()){
		company.company_name = companyName;
		if (company.search()){
			tenantID = company.tenant_uuid;
		} else {
			scopes.globals.secLogger(i18n.getI18NMessage('sts.txt.user.no.such.company',new Array(companyName,userName)));
			return false;
		}
	}
	if (!tenantID){
		tenantID = company.tenant_uuid;
	}
	/** @type {JSFoundSet<db:/stsservoy/users>} */																	
	var users;														//	the tenants foundset
	if(!userName){													//	validate input...	
		return null;													//	must provide a company name
	}
	users = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_USERS);//	get a tenant foundset
	//users.loadRecords();
	if(users.find()){													//	search the tenant foundset...
		users.user_name = userName;								//	search by tenant name
		if (application.isInDeveloper()){application.output('finding user ('+userName+')')}
		users.delete_flag = '^';	
		if (companyName != ""){
			users.tenant_uuid = tenantID;
		} else {
			scopes.globals.secLogger(i18n.getI18NMessage('sts.txt.company.no.such.user',new Array(companyName,userName)));
			null;
			
		}
		var count = users.search();
		if (application.isInDeveloper()){application.output('Users '+count)}
		if(count){
			if (count > 1){
				if (!companyName){
					if (application.isInDeveloper()){application.output(count+' users misnamed '+userName)}
					return null; 
				}
				/** @type {JSFoundSet<db:/stsservoy/tenant_list>} */
				var tenants = databaseManager.getFoundSet('stsservoy','tenant_list');
				if (tenants.find()){
					tenants.company_name = companyName;
					if (tenants.search() == 1){
						var rec = tenants.getRecord(1);
						return rec.tenant_uuid;
					}
				} else {
					return null;
				}
				//globals.secTenantArray = globals.secGetTenantIDs(assocID);
			} else {
				globals.secCurrentAssociationID = users.association_uuid;
				return users.tenant_uuid;									//	return the ID
			}
		}
	}
	scopes.globals.secLogger(i18n.getI18NMessage('sts.txt.company.not.found',new Array(companyName)));
	return null;														//	could not find tenant
}

/**
 * Returns all tenants as the array index and the value as deleted or not.  No tenants really deleted as they are associated with others.
 * 
 * @param {String} [assocID] The company association ID
 * @returns {Array} The tenant id array for filtering purposes
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"9B308245-148C-4C1A-A7B2-D0ABA73D5156"}
 */
function secGetTenantIDs(assocID){
	if(!assocID){													//	validate input...	
		return null;													//	must provide an association name
	}
	var tenantArray = [];														//	the association's tenant array
	/** @type {JSFoundSet<db:/stsservoy/associations>} */																	
	var assocs = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_ASSOCIATIONS);  // get an association's foundset
	if(assocs.find()){													//	search the association's foundset...
		assocs.tenant_group_uuid = assocID;								//	search by association name	
		if(assocs.search()){												
			var count = databaseManager.getFoundSetCount(assocs);
			for (var i=1;i<=count;i++){
				var rec = assocs.getRecord(i);
				tenantArray[rec.tenant_uuid]=rec.delete_flag;
			}
		}
	}
	return tenantArray;														//	return tenantArray
}
/**
 * @AllowToRunInFind
 * 
 * @param {String} [tenantName]
 *
 * @properties={typeid:24,uuid:"4CEF9138-EB73-4473-8041-E179E87EEFB8"}
 */
function secDeleteTenant(tenantName){
	if (!tenantName){
		//errorMessage = i18n.getI18NMessage('sts.txt.provide.company.name');
		return false;
	}
	// /** @type {JSFoundset<db:/stsservoy/tenant_list>} */
	var tenants = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_TENANTS)
	if (tenants.find()){
		tenants.company_name = tenantName;
		if (tenants.search()) {
			databaseManager.getFoundSetCount(tenants);
			// TODO delete a tenant
		}
	}
	return true;
}
/**
 * @AllowToRunInFind
 * 
 * @param {String} [assocName]
 *
 * @properties={typeid:24,uuid:"04BA1A04-95CA-49F8-B077-57CAA6B79423"}
 */
function secGetAssociationID(assocName){
	var compareTo = "";
	/** @type {JSFoundSet<db:/stsservoy/associations>} */																	
	var associations;														//	the tenants foundset
	if(!assocName){													//	validate input...	
		return null;													//	must provide a copmany name
	}
	//if (assocName.lastIndexOf("-") == -1){
	//	compareTo = null
	//} else {
		compareTo = secCurrentTenantID;
	//}
	associations = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_ASSOCIATIONS);//	get an association foundset
	if(associations.find()){													//	search the association foundset...
		associations.association_name = assocName;								//	search by association name	
		if (compareTo == null){
			associations.tenant_group_uuid = compareTo;
		} else {
			associations.tenant_uuid = compareTo;
		}
		if(associations.search()){		
			var count = databaseManager.getFoundSetCount(associations);
			if (count > 0){
				associations.setSelectedIndex(1);
				return associations.association_uuid;
			}
		}
	}
	return null;														//	could not find tenant
}
/**
 * @AllowToRunInFind
 * 
 * @param tenantUUID
 *
 * @properties={typeid:24,uuid:"FB78739F-A47B-4C6A-B624-7147F4D3E8C4"}
 */
function secGetCurrentMasterAssociation(tenantUUID){
	/** @type {JSFoundSet<db:/stsservoy/associations>} */																	
	var associations;														//	the tenants foundset
	if(!tenantUUID){													//	validate input...	
		return null;													//	must provide a copmany name
	}
	associations = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_ASSOCIATIONS);//	get an association foundset
	if(associations.find()){													//	search the association foundset...
		associations.tenant_uuid = tenantUUID;
		if(associations.search()){		
			var count = databaseManager.getFoundSetCount(associations);
			if (count > 0){
				associations.setSelectedIndex(1);
				return associations.tenant_group_uuid;
			}
		}
	}
	return null;														//	could not find tenant
}
/**
 * Creates a new application record.
 * 
 * @param {String} applicationName Must be unique
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
			//TODO JOE apps.applicationName = companyName;							//	set the app name
			apps.application_name = applicationName;							//	set the app name

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
	if(!applicationID){												//	validate input
		//if(!applicationName){												//	validate input
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
 * @returns {Object}
 * @properties={typeid:24,uuid:"B7A51A70-C8C7-41D4-BCB9-08082A045088"}
 * @AllowToRunInFind
 */
function secCreateKey(keyName, appID) {
	/** @type {JSFoundSet<db:/stsservoy/keys>} */																	//	variable declarations
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
    /** @type {JSFoundSet<db:/stsservoy/keys>} */
	var keys;														//	the keys foundset
	
	if(!keyName){													//	validate input
		//return false;
		return null;
	}
	appID = (appID) ? appID : secCurrentApplicationID;				//	a null app id defaults to the current application
	keys = databaseManager.getFoundSet(SEC_SERVER,SEC_TABLE_KEYS);	//	get the foundset
	if(keys.find()){												//	search the keys table
		keys.key_name = keyName;									//	search by name
		keys.application_id = appID;								//	search by application
		if(keys.search()){											
			return keys.key_uuid;										//	get the record
		}
	}
	return null;  //added to return some value JOE
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
		//return checks.search() >= 1;
		return keys.search() >= 1;
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
	//var values = ARRAY_getAllServers(); //TODO: DONE leave maintenance mode
	var values = [];
	values.push('stsservoy');
	
	if (displayValue == null && realValue == null) {
		return databaseManager.convertToDataSet(values);
	} else if (displayValue != null) {
		var array = [];
		for(var i in values){
			if(displayValue.equalsIgnoreCase(utils.stringLeft(values[i],displayValue.length))){
				array.push(values[i]);
			}
		}
		return databaseManager.convertToDataSet(array);
		
	} else if (realValue != null) {
		return databaseManager.convertToDataSet([realValue]);
	}
	return null;  //added to return some value JOE
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
				for(var i in values){
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
 * @AllowToRunInFind
 */
function secGetFormNames(displayValue, realValue, record, valueListName) {
	var valuesCheck = forms.allnames.sort();
	var values = [];
	for (var idx = 0;idx < valuesCheck.length;idx++){
		if (valuesCheck[idx].search(/_[0-9]+$/) != -1){continue}// 20180103 remove form instances
		values.push(valuesCheck[idx]);
	}
	
	if (displayValue == null && realValue == null) {
		return databaseManager.convertToDataSet(values);
	} else if (displayValue != null) {
		var array = [];
		for(var i in values){
			if(displayValue.equalsIgnoreCase(utils.stringLeft(values[i],displayValue.length))){
				array.push(values[i]);
			}
		}
		return databaseManager.convertToDataSet(array);
		
	} else if (realValue != null) {
		return databaseManager.convertToDataSet([realValue]);
	}
	return null; //added to return some value JOE
}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} [record] The current record for the valuelist.
 * @param {String} [valueListName] The valuelist name that triggers the method.
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
	return null; //added for return of some value JOE
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
	var vServers = [];
	vServers.push('stsservoy');
	return vServers;
	/*
    var vServerAmount = plugins.UserManager.Server().getSettingsProperty('ServerManager.numberOfServers') -1;
    var vProperty, vServers = [];
    //var vPropertiesArray = plugins.UserManager.Server().getServerProperties();
    for(var i = 0 ; i < vServerAmount ; i++){
       vProperty = 'server.' + i + '.serverName';
       vServers.push(plugins.UserManager.Server().getSettingsProperty(vProperty));
    }
    vServers.sort();
    return vServers;
    */
 }
/**
 * @properties={typeid:24,uuid:"E64C56CB-94C7-40A7-ABF3-F2EC24BB17F6"}
 */
function secCreateTenantAndUser(){
	secDeleteTableInfo();
	databaseManager.saveData();
	secCreateTenant('Company Name');
	secCreateAssociation('Shop');
	secCreateUser('ADMIN','P2PROGRAMS',secCurrentTenantID);
	databaseManager.saveData();
}
/**
 * @properties={typeid:24,uuid:"CE18A6A9-7D2A-416D-AD03-D27EB3412E7C"}
 */
function secDeleteTableInfo(){
	//var backupServer = databaseManager.
	var tables = databaseManager.getTableNames('stsservoy');
	var table = "";
	var skipTables = ['zipcodes','valuelists'];
	for (var index = 0; index < tables.length;index++){
		table = tables[index];
		if (skipTables.indexOf(table) != -1){continue}
		var fs = databaseManager.getFoundSet('stsservoy',table);
		fs.loadAllRecords();
		var count = 0;
		var index2 = 0;
		while (index2++ < 100 && count != fs.getSize()){
			count = fs.getSize();
			fs.getRecord(count);
			fs.deleteAllRecords();
		}
		if (application.isInDeveloper()){application.output('table '+table+' count '+count);}
	}
}
/**
 * @param solutionName
 * @param tenantID
 * @param userID
 *
 * @properties={typeid:24,uuid:"21455034-EAB9-43F1-9B7C-CE27C298CF03"}
 * @AllowToRunInFind
 */
function secCheckLicense(solutionName,tenantID,userID){
	//plugins.UserManager.register( "P2Programs", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCFyAbTPbuHQraeSHsu3pM3DS4nPwTJM/B" );
	// get license info on load  for this tenant addreses ticket #45 unfuddle
	var licenseAvail = [];
	var assocId = "";
	
	/** @type {QBSelect<db:/stsservoy/users>} */
	var fs = databaseManager.createSelect('db:/stsservoy/users');
	fs.result.add(fs.columns.user_uuid);
	fs.where.add(fs.columns.user_uuid.eq(application.getUUID(userID)));
	fs.where.add(fs.columns.tenant_uuid.eq(tenantID));
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	var FS = databaseManager.getFoundSet(fs);
	var rec = FS.getRecord(1);
	/** @type {QBSelect<db:/stsservoy/associations>} */	
	var as = databaseManager.createSelect('db:/stsservoy/associations');
	as.result.add(as.columns.association_uuid);
	as.where.add(as.columns.tenant_uuid.eq(tenantID));
	as.where.add(as.columns.association_uuid.eq(rec.association_uuid));
	/** @type {JSFoundSet<db:/stsservoy/associations>} */	
	var AS = databaseManager.getFoundSet(as);
	var rec2 = AS.getRecord(1);
	licenseAvail['STSmobile'] = rec2.licenses_mobile;
	licenseAvail['STS3'] = rec2.licenses_desktop;
	assocId = rec2.association_uuid;
	

	var allUsers = [];//allDivisionUsers
	/** @type {QBSelect<db:/stsservoy/users>} */
	fs = databaseManager.createSelect('db:/stsservoy/users');
	fs.result.add(fs.columns.user_uuid);
	fs.where.add(fs.columns.tenant_uuid.eq(tenantID));
	fs.where.add(fs.columns.association_uuid.eq(application.getUUID(assocId)));
	fs.where.add(fs.columns.delete_flag.isNull);
	/** @type {JSFoundSet<db:/stsservoy/users>} */
	FS = databaseManager.getFoundSet(fs);
	var licensed = "";
	
	index = 1;
	var rec3 = null;
	while (rec3 = FS.getRecord(index++)){
		allUsers.push(rec3.user_uuid+"");
	}		

	var licensesInUse = [];
	licensesInUse['STS3'] = 0; licensesInUse['STSmobile'] = 0; licensesInUse['servoySecurityLogin'] = 0; licensesInUse['servoySecurityAuthenticator'] = 0; 
	var clientArray = plugins.UserManager.getClients();

	//licensed += ' clients '+clientArray.length;
	for (var index = 0;index < clientArray.length;index++){
		var client = clientArray[index];
		client = client.clientId;
		var clientInfo = plugins.UserManager.getClientByUID(client);
		var clientSolution = clientInfo.solutionName;
		application.output('clientSolution '+clientSolution);
		if (!clientSolution){continue}//REMOVE unable to login verification. Why?
		
		if (allUsers.indexOf(clientInfo.userUid+"") == -1){continue} // not in this company
		//if (!licensesInUse[clientSolution]){licensesInUse[clientSolution] = 0}
		if (clientSolution.search('mobile') != -1){
			licensesInUse['STSmobile'] =  licensesInUse['STSmobile']*1 + 1*1;			
		}
		if (clientSolution.search('3') != -1){
			licensesInUse['STS3'] =  licensesInUse['STS3']*1 + 1*1;			
		}
		if (clientSolution.search('ogin') != -1){
			licensesInUse['servoySecurityLogin'] =  licensesInUse['servoySecurityLogin']*1 + 1*1;			
		}
	}
	var licAvail = 0;
	if (solutionName.search('mobile') != -1){
		licAvail = licenseAvail['STSmobile'] - licensesInUse['STSmobile'];
	}
	if (solutionName.search('STS3') != -1){
		licAvail = licenseAvail['STS3'] - licensesInUse['STS3'];		
	}
	licensed += "License:"+licAvail+":"+licenseAvail[solutionName]+":"+licensesInUse[solutionName];

	return licensed;
}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} [record] The current record for the valuelist.
 * @param {String} [valueListName] The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"F22B6D48-9038-4ED6-8E89-F7236FC66274"}
 */
function secGetFormElementNames(displayValue, realValue, record, valueListName) {
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
	return null; //added for return of some value JOE
}
/**
 * @properties={typeid:24,uuid:"EF8AF24A-7C87-4375-94DE-5F5A5CA22F33"}
 * @AllowToRunInFind
 */
function getBasePermissions(userId,newTenant){
	//var baseTenant = 'B90A956F-282B-4C29-A251-3E7C58FB026B';
	var baseTenant = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
	var test = databaseManager.getFoundSet('stsservoy','keys');
	if (test.find()){
		test.tenant_uuid = newTenant;
		if (test.search()){
			return
		}//base permissions already installed
	}
	// newest
	var permsTables = ['keys','permissions','groups','group_keys','user_groups'];//keys_table not used
	/**
	users -> (user_uuid), 
	keys -> (key_uuid), tenant_uuid
	permissions -> (permission_uuid), key_uuid, tenant_uuid
	user_groups -> (user_group_uuid), group_uuid, tenant_uuid, user_uuid
	group_keys -> (group_key_uuid), group_uuid, key_uuid, tenant_uuid
	groups -> (group_uuid), tenant_uuid
	*/
	var keyMap = [];
	var grpMap = [];
	for (var index = 0;index < permsTables.length;index++){
		var table = databaseManager.getFoundSet('stsservoy',permsTables[index]);
		var tableIds = databaseManager.getTable(table).getRowIdentifierColumnNames();
		if (table.find()){
			table.tenant_uuid = newTenant;
			if (!table.search()){
				table.loadRecords();
				table.find();
				table.tenant_uuid = baseTenant;
				table.search();
				var ind1 = 1;
				var tableCols = databaseManager.getTable(table).getColumnNames();
				var rec = table.getRecord(ind1);
				var tableSize = table.getSize();
				while (ind1 <= tableSize){
					rec = table.getRecord(ind1);
					var newDex = table.newRecord(false);
					var newRec = table.getRecord(newDex);
					if (permsTables[index] == 'keys'){keyMap[rec.key_uuid] = newRec.key_uuid}
					if (permsTables[index] == 'groups'){grpMap[rec.group_uuid] = newRec.group_uuid}
					for (var ind2 = 0;ind2 < tableCols.length;ind2++){
						if (tableIds.indexOf(tableCols[ind2]) != -1){continue}//skip primary keys
						if (rec[tableCols[ind2]]){
							newRec[tableCols[ind2]] = rec[tableCols[ind2]];
						}
						switch (permsTables[index]){
							case 'permissions' :
								newRec.key_uuid = keyMap[rec.key_uuid];
								break;
							case 'user_groups':
								newRec.group_uuid = grpMap[rec.group_uuid];
								newRec.user_uuid = userId;
								break;
							case 'group_keys':
								newRec.group_uuid = grpMap[rec.group_uuid];
								newRec.key_uuid = keyMap[rec.key_uuid];
								break;
							default:
						}
						newRec.tenant_uuid = newTenant;
					}
					ind1++;
				}
			}
		}
	}
}
