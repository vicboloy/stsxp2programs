/**
 * @type {String}
 * 
 * @deprecated not used anywhere
 *
 * @properties={typeid:35,uuid:"F1E068ED-6929-451B-AE08-52226E34CC64"}
 */
var svy_sec_a_version = '4.0.0';

/**
 * @param {String|UUID} _owner_id
 * @param {String} _framework_db
 * @properties={typeid:24,uuid:"91ADC699-A070-4781-99B7-3A969D239382"}
 */
function svy_sec_getOwnerName(_owner_id, _framework_db) {
	/** @type {QBSelect<db:/svy_framework/sec_owner>} */
	var query = databaseManager.createSelect("db:/" + _framework_db + "/sec_owner");
	query.result.add(query.columns.name);
	query.where.add(query.columns.owner_id.eq(_owner_id.toString()));
	var dataset = databaseManager.getDataSetByQuery(query,-1);

	if (dataset.getValue(1, 1)) {
		return dataset.getValue(1, 1);
	} else {
		return false;
	}
}

/**
 * @param {{owner:String, framework_db:String}} _authObj
 * @properties={typeid:24,uuid:"96504B4F-7613-4971-A81E-E62BB781E132"}
 */
function svy_sec_validateHash(_authObj) {
	return scopes.svySecurityManager.verifySecurityHash(_authObj.owner, _authObj.framework_db);
}

/**
 * @param {String} _frameworkDB
 * @properties={typeid:24,uuid:"A4E75D6C-DE89-48CB-BC78-71EE9D09780C"}
 */
function svy_sec_checkConnection(_frameworkDB) {
	var _fs = databaseManager.getFoundSet(_frameworkDB, "sec_owner");
	if (!_fs) {
		return false;
	}
	return true;
}

/**
 * @param {{framework_db:String, owner:String}} _authObj
 * @properties={typeid:24,uuid:"51F48656-8640-4F2A-A59B-1580B3E75DA8"}
 */
function svy_sec_recalculateHash(_authObj) {
	scopes.svySecurityManager.updateSecurityHash(null, _authObj.framework_db, _authObj.owner);
}

/**
 * @param {{username:String,owner:String,password:String,firstLoginAttempt:Date,lastLoginAttempt:Date, framework_db:String}} authObj
 * @properties={typeid:24,uuid:"0F1C1587-98F8-4BC4-BD26-CB44CEE5B4A8"}
 * @AllowToRunInFind
 */
function svy_sec_checkUserPassword(authObj) {
	//query's the user from the database
	var maxReturnedRows = 1;
	var query;
	if (authObj.username == authObj.username.toLowerCase()) {
		query = '	SELECT			sec_user.user_id, \
										sec_user.user_locked, \
										sec_user_password.end_date, \
										sec_user_password.password_value, \
										sow.license_amount, \
										sow.owner_id, \
										sow.password_times_wrong, \
										sow.password_input_interval, \
										sow.password_timespan_before_lock, \
										sec_user_password.password_salt, \
										sec_user_password.password_hash, \
										sec_user_password.password_version, \
										sec_user_password.user_password_id \
						FROM			sec_user, \
										sec_user_password, \
										sec_owner sow \
						WHERE (EXISTS \
										(SELECT	* \
										FROM	sec_user_org, \
												sec_organization, \
												sec_owner \
										WHERE	sec_user.user_id = sec_user_org.user_id \
										AND		sec_user_org.organization_id = sec_organization.organization_id \
										AND		sec_organization.owner_id = sec_owner.owner_id \
										AND		sec_owner.owner_id = sow.owner_id \
										AND		sec_owner.name = ?) \
						OR ( (sec_user.admin_level = ? OR sec_user.admin_level = ?) \
						AND (EXISTS \
										(SELECT	* \
										FROM	sec_owner \
										WHERE	sec_owner.owner_id = sow.owner_id \
										AND		sec_owner.name = ?)))) \
						AND			LOWER(sec_user.user_name) = ? \
						AND 		sec_user.user_id = sec_user_password.user_id \
						AND			(sec_user.flag_inactive is null OR sec_user.flag_inactive = 0)\
						ORDER BY	sec_user_password.start_date DESC';
	} else {
		query = '	SELECT			sec_user.user_id, \
										sec_user.user_locked, \
										sec_user_password.end_date, \
										sec_user_password.password_value, \
										sow.license_amount, \
										sow.owner_id, \
										sow.password_times_wrong, \
										sow.password_input_interval, \
										sow.password_timespan_before_lock, \
										sec_user_password.password_salt, \
										sec_user_password.password_hash, \
										sec_user_password.password_version, \
										sec_user_password.user_password_id \
							FROM			sec_user, \
										sec_user_password, \
										sec_owner sow \
							WHERE (EXISTS \
										(SELECT	* \
										FROM	sec_user_org, \
												sec_organization, \
												sec_owner \
										WHERE	sec_user.user_id = sec_user_org.user_id \
										AND		sec_user_org.organization_id = sec_organization.organization_id \
										AND		sec_organization.owner_id = sec_owner.owner_id \
										AND		sec_owner.owner_id = sow.owner_id \
										AND		sec_owner.name = ?) \
							OR ( (sec_user.admin_level = ? OR sec_user.admin_level = ?) \
							AND (EXISTS \
										(SELECT	* \
										FROM	sec_owner \
										WHERE	sec_owner.owner_id = sow.owner_id \
										AND		sec_owner.name = ?)))) \
							AND			sec_user.user_name = ? \
							AND 		sec_user.user_id = sec_user_password.user_id \
							AND			(sec_user.flag_inactive is null OR sec_user.flag_inactive = 0)\
							ORDER BY	sec_user_password.start_date DESC';
	}
	
	var args = new Array();
	args[0] = authObj.owner;
	args[1] = scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER;
	args[2] = scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER;
	args[3] = authObj.owner;
	args[4] = authObj.username;
	var dataset = databaseManager.getDataSetByQuery(authObj.framework_db, query, args, maxReturnedRows);
	var retVal = new Object();
	retVal.success = false;
	
	var userId = dataset.getValue(1,1);
	var passwordInputInterval = dataset.getValue(1,8);
	
	var md5Hash = dataset.getValue(1,4);
	var PBKDF2Salt = dataset.getValue(1,10);
	var PBKDF2Hash = dataset.getValue(1,11);
	var PBKDF2Version = dataset.getValue(1,12);
	
	var userLocked = dataset.getValue(1,2);
	var numberOfLicenses = dataset.getValue(1,5);
	var ownerId = dataset.getValue(1,6);
	var passwordTimesWrong = dataset.getValue(1,7);
	var timespanBeforeLock = dataset.getValue(1,9);
	var userPasswordId = dataset.getValue(1,13);
	
	var isPasswordValid = false;
	if (md5Hash) {
		isPasswordValid = (md5Hash == utils.stringMD5HashBase64(authObj.password));
		if (isPasswordValid) {
			// Convert to PBKDF2
			/** @type {JSFoundSet<db:/svy_framework/sec_user_password>} */
			var fsUserPasswords = databaseManager.getFoundSet(authObj.framework_db, "sec_user_password");
			fsUserPasswords.addFoundSetFilterParam('user_password_id', '=', userPasswordId);
			fsUserPasswords.loadAllRecords();
			var newSaltAndHash = scopes.svySecurityManager.calculatePBKDF2Hash(authObj.password);
			fsUserPasswords.password_hash = newSaltAndHash.hash;
			fsUserPasswords.password_salt = newSaltAndHash.salt;
			fsUserPasswords.password_version = scopes.svySecurityManager.PBKDF2_CURRENT_ITERATION_VERSION;
			fsUserPasswords.password_value = null;
			databaseManager.saveData(fsUserPasswords);
		}
	} else if (PBKDF2Hash && PBKDF2Salt) {
		isPasswordValid = scopes.svySecurityManager.validatePBKDF2Hash(authObj.password, PBKDF2Salt, PBKDF2Hash, PBKDF2Version);
	}
	
	// check if the user violates the login attempt interval
	if (passwordInputInterval) {
		/** @type {Date} */
		var lastLoginAttempt = globals.getLastLoginAttempt(userId, authObj.framework_db);
		
		if (lastLoginAttempt && new Date().valueOf() - lastLoginAttempt.valueOf() <= passwordInputInterval * 1000) {
			// globals.svy_sec_registerLoginAttempt(userId, false, 'Login interval violated', false);
			retVal.error = 'svy.fr.dlg.password_interval';
			return retVal;	
		}		
	}

	if (userId && isPasswordValid && userLocked != 1) {

		retVal.license = numberOfLicenses;
		retVal.owner_id = ownerId;
		retVal.user_id = userId;
		
		// check if owner has enough licenses for this user to log in
		var clientCount = application.getClientCountForInfo(ownerId)
		if (clientCount >= retVal.license) {
			scopes.svySecurityManager.createUserLogin(userId, false, 'svy.fr.dlg.max_licenses', false, authObj.framework_db);
			retVal.error = 'svy.fr.dlg.max_licenses'
		} else {
			scopes.svySecurityManager.createUserLogin(userId, true, null, false, authObj.framework_db);
			retVal.success = true;
		}

		return retVal
	} else if (userId && userLocked == 1) { // user is locked
		retVal.error = 'svy.fr.dlg.user_locked';
		return retVal;
	} else {
		// when a user uses a wrong password, we keep track in the user table

		// get the record of the user
		/** @type {JSFoundSet<db:/svy_framework/sec_user>} */
		var fsUser = databaseManager.getFoundSet(authObj.framework_db, 'sec_user');
		fsUser.addFoundSetFilterParam('owner_id', '=', ownerId);
		fsUser.addFoundSetFilterParam('user_name', '=', authObj.username);
		fsUser.loadAllRecords();

		if (databaseManager.hasRecords(fsUser)) {
			scopes.svySecurityManager.createUserLogin(userId, false, 'svy.fr.dlg.wrong_password', true, authObj.framework_db);

			if (!fsUser.times_wrong_login) {
				fsUser.times_wrong_login = 1;
			} else {
				fsUser.times_wrong_login += 1;
			}

			// when a user logs in with a wrong password too many times (and within the timespan) then lock the user
			if (passwordTimesWrong && passwordTimesWrong <= fsUser.times_wrong_login) {
				if (timespanBeforeLock) {
					/** @type {JSFoundSet<db:/svy_framework/sec_user_login_attempt>} */
					var fsLoginAttempts = databaseManager.getFoundSet(authObj.framework_db, 'sec_user_login_attempt');
					fsLoginAttempts.find();
					fsLoginAttempts.user_id = userId;
					fsLoginAttempts.reason_include_timespan = 1;
					if (fsLoginAttempts.search() >= passwordTimesWrong) {
						fsLoginAttempts.sort('attempt_datetime desc');
						fsLoginAttempts.setSelectedIndex(passwordTimesWrong);

						if (new Date().valueOf() - fsLoginAttempts.attempt_datetime.valueOf() >= timespanBeforeLock * 60000) {
							return retVal;
						}
					} else {
						return retVal;
					}
				}

				fsUser.user_locked = 1;
				fsUser.user_locked_datetime = new Date();
				databaseManager.saveData();

				retVal.error = 'svy.fr.dlg.user_locked';
				return retVal;
			}
		}
		return retVal;
	}

}

/**
 * @param {String} userName
 * @param {Number} userId
 * @param {String} organizationId
 * @param {String} frameworkDb
 * 
 * @return {UUID|Number}
 * 
 * @properties={typeid:24,uuid:"F13F83E6-4E2E-466B-AF7E-63767F058E2E"}
 * 
 * @AllowToRunInFind
 */
function svy_sec_login(userName, userId, organizationId, frameworkDb) {
	/** @type {JSFoundSet<db:/svy_framework/sec_user_org>} */
	var fsUserOrg = databaseManager.getFoundSet(frameworkDb, 'sec_user_org');
	fsUserOrg.find();
	fsUserOrg.user_id = userId;
	fsUserOrg.organization_id = organizationId;
	if (fsUserOrg.search()) {
		if (security.login(userName, fsUserOrg.user_org_id, ["Administrators"])) {
			return fsUserOrg.user_org_id;
		}
	} else {
		/** @type {JSFoundSet<db:/svy_framework/sec_user>} */
		var fsUser = databaseManager.getFoundSet(frameworkDb, 'sec_user');
		fsUser.find();
		fsUser.user_id = userId;
		if (fsUser.search()) {
			if (fsUser.admin_level >= scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER) {
				if (security.login(userName, userName, ["Administrators"])) {
					return globals.zero_uuid;
				}
			}
		}
	}
	return null;
}

/**
 * @properties={typeid:24,uuid:"4E1E0E9E-4C64-4F5F-A6F0-758C9A8C52B2"}
 */
function svy_sec_getOrganizations(userId, ownerId, frameworkDb) {
	var query = '	SELECT		org.name, \
								org.organization_id \
					FROM		sec_user usr, \
								sec_organization org, \
								sec_user_org uo \
					WHERE		(usr.admin_level IS NULL \
					OR			usr.admin_level <= ?) \
					AND			usr.user_id = uo.user_id \
					AND			uo.organization_id = org.organization_id \
					AND			usr.user_id = ? \
					AND			org.owner_id = ? \
					UNION \
					SELECT		org.name, org.organization_id \
					FROM		sec_user usr, \
								sec_organization org \
					WHERE		usr.admin_level >= ? \
					AND			usr.user_id = ? \
					AND			org.owner_id = ? \
					ORDER BY	1 ASC';
	
	var args = new Array();
	args[0] = scopes.svySecurityManager.ADMIN_LEVEL.TENANT_MANAGER
	args[1] = userId.toString();
	args[2] = ownerId.toString();
	args[3] = scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER;
	args[4] = userId.toString();
	args[5] = ownerId.toString();
	var dataset = databaseManager.getDataSetByQuery(frameworkDb, query, args, -1);
	
	return dataset;
}

/**
 * @deprecated not used anymore
 * 
 * @properties={typeid:24,uuid:"9068CD55-076B-4E79-BF3A-4F3DE819B2D9"}
 */
function svy_sec_getWindowSize(_framework_db) {
	/** @type {JSFoundSet<db:/svy_framework/nav_properties>} */
	var _fs = databaseManager.getFoundSet(_framework_db, 'nav_properties')
	_fs.addFoundSetFilterParam('property_name','=','framework_window_size')
	_fs.loadAllRecords()
	
	if(_fs.getSize() == 1 && _fs.property_value)
	{
		return _fs.property_value[0]
	}
	else 
	{
		return null
	}
	
}

/**
 * @deprecated not used anymore
 * 
 * @properties={typeid:24,uuid:"559D5B1D-540B-4CDA-8B20-1F5ED4B2FC51"}
 */
function svy_sec_getForcedWindowSize(_framework_db) {
	/** @type {JSFoundSet<db:/svy_framework/nav_properties>} */
	var _fs = databaseManager.getFoundSet(_framework_db, 'nav_properties')
	_fs.addFoundSetFilterParam('property_name','=','force_window_size')
	_fs.loadAllRecords()
	
	if(_fs.getSize() == 1)
	{
		return _fs.property_value[0]
	}
	else 
	{
		return null
	}
	
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svySecurityManager#createUserLogin()} instead.
 * 
 * @properties={typeid:24,uuid:"0CBC4772-A738-4EC1-8DC8-E608CD87908B"}
 */
function svy_sec_registerLoginAttempt(userId,attemptSuccessful,reasonUnsuccessful,reasonIncludeTimespan,frameworkDB) {
	scopes.svySecurityManager.createUserLogin(userId, attemptSuccessful, reasonUnsuccessful, reasonIncludeTimespan, frameworkDB);
}

/**
 * @properties={typeid:24,uuid:"3911E929-D266-48DF-9EDA-7C6AC391E697"}
 * @AllowToRunInFind
 */
function getLastLoginAttempt(userId, frameworkDb) {
	/** @type {JSFoundSet<db:/svy_framework/sec_user_login_attempt>} */
	var fsLoginAttempt = databaseManager.getFoundSet(frameworkDb, 'sec_user_login_attempt');
	fsLoginAttempt.find();
	fsLoginAttempt.user_id = userId;
	if (fsLoginAttempt.search()) {
		fsLoginAttempt.sort('attempt_datetime desc');
		fsLoginAttempt.setSelectedIndex(1);
		return fsLoginAttempt.attempt_datetime;
	}
	
	return null;
}

/**
 * Method to check if user properties should be stored in the database.
 * 
 * @deprecated Will be removed in version 5.
 * 
 * @properties={typeid:24,uuid:"5E5F4FC8-44FC-426A-88C9-26CEFE717A27"}
 */
function svy_auth_saveUserPropertiesInDB() {
	return scopes.svyProperties.getPropertyValueAsBoolean("save_user_properties_in_db");
}

/**
 * @properties={typeid:24,uuid:"E16AA839-5A7A-4C92-9DDA-461EC2F9C729"}
 */
function svy_auth_getProperties(propertyNames) {
	var runtimeProperties = scopes.svyProperties.getRuntimeProperties(scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER, propertyNames);
	var retval = new Object();
	for (var i = 0; i < runtimeProperties.length; i++) {
		var runtimeProp = runtimeProperties[i];
		retval[runtimeProp.propertyValueName] = runtimeProp.value;
	}
	return retval;
}
