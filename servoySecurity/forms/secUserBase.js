/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD60EB26-0347-4A5F-BA47-4A53A376971B"}
 */
var passwordConfirm = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ABE6F66E-26B3-4BD2-8ED4-D59395FED9CD"}
 */
var userGroups = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3AD72C25-2E35-4E73-B980-02CDFAD81557"}
 */
var userPassword = null;

/**
 * Handle changed data for the userGroups variable
 * Which stores a carriage return-delimted list of linked Group ids
 * It is ideal for a checkbox valuelist
 * The action either adds or removes a related record for a Group link
 *
 * @param {Object} oldIDs old value
 * @param {Object} newIDs new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"38085E9F-89B4-4BB2-B4EC-877EB38695C2"}
 * @AllowToRunInFind
 */
function onDataChangeUserGroups(oldIDs, newIDs, event) {
																			//	Variable Declarations
	var fs = users_to_user_groups.duplicateFoundSet();						//	The related foundset 
	var idColumnName = 'group_uuid';											//	The name of the fk id column to set
	var id;																	//	the value of the fk id
	var i;
	
	oldIDs = (oldIDs) ? new String(oldIDs).split('\n') : [];				//	split the old id list into an array by carriage return
	oldIDs.sort();															//	sort the array

	newIDs = (newIDs) ? new String(newIDs).split('\n') : [];				//	split the new id list into an array by carriage return
	newIDs.sort();															//	sort the array
	
	if(newIDs.length > oldIDs.length){										//	check difference: id was ADDED
		id = newIDs[newIDs.length - 1];									//	determine the id, starting with the last element in the array
		for(i in oldIDs){													//	iterate by the old ids
			if(oldIDs[i] != newIDs[i])										//	until the corresponding new id doesn't match
				id = newIDs[i];												//	which gives the id that was added
		}
		if(fs.newRecord()){													//	create the related record
			fs[idColumnName] = id;											//	set the foreign key column value
			fs.tenant_uuid = globals.secCurrentTenantID;
			fs.edit_date = new Date();
			databaseManager.saveData(fs.getSelectedRecord());				//	save data
		}
	} else {																//	id was REMOVED	
		id = oldIDs[oldIDs.length - 1];									//	determine the id, starting with the last element in the array
		for(i in newIDs){													//	iterate by the new ids
			if(oldIDs[i] != newIDs[i])										//	until the corresponding old id doesn't match
				id = oldIDs[i];												//	which gives the id that was removed
		}
		if(fs.find()){														//	search the foundset
			fs[idColumnName] = id;											//	by the fk column
			if(fs.search())																					
				fs.deleteRecord();											//	delete record
		}
	}
	updateUI(event);																//	update user interface
	return true;															//	allow data change
}

/** *
 * Updates the user interface including form variables to reflect the state of the model
 * 
 * @param {JSEvent} event The event that triggered the action.
 *
 * @properties={typeid:24,uuid:"F82ED3C0-F92D-4537-9414-D4FAB9B3A520"}
 */
function updateUI(event) {													//	set the values for linked-list form variables
	userGroups = databaseManager.getFoundSetDataProviderAsArray(users_to_user_groups,'group_uuid').join('\n');
	
	userPassword = null;													//	reset user password
	passwordConfirm = null;													//	reset password confirm	
	return _super.updateUI(event);											//	call to super
}

/**
 * Validates the state of the user record
 * Record is valid when
 * the username is not null and unique.
 * the password is not null
 * 
 * @param {JSEvent} event The event that triggerent the validation action
 * @returns {Boolean} true if the model is in a valid state
 *
 * @properties={typeid:24,uuid:"28690F76-6E1B-40EE-9A5F-009AF1FBCAAD"}
 */
function validate(event) {

	return !foundset.getSize() ||										//	always validates when empty
		_super.validate(event) &&										//	validate in super
		validateUserName(event) && 										//	validate user name
		validatePassword(event);  										//	validate password
}

/**
 * Validates and sets the password and confirmation
 * 
 * @param {JSEvent} event The event that triggerent the validation action
 * @returns {Boolean}
 * @properties={typeid:24,uuid:"07B224C1-B513-4869-BD4A-60BCF4E94ECA"}
 */
function validatePassword(event){
	errorMessage = null;													//	clear the error
	if(userPassword){														//	password was modified
		if(!passwordConfirm){												//	must confirm password
			errorMessage = i18n.getI18NMessage('sts.txt.provide.password.confirmation');
			return false;													//	failed validation
		}
		if(userPassword != passwordConfirm){								//	password confirmation must match
			errorMessage = i18n.getI18NMessage('sts.txt.password.confirmation.does.not.match');
			return false;													//	failed validation
		}
		user_password = userPassword;										//	set the password
		is_account_active = 1;												//  Password is set, so make account active
		userPassword = null;												//	clear pw variable
		passwordConfirm = null;												//	clear pw confirm variable
	}
	if (this.updatePassword){
		updatePassword(false);
		updateFields(event);
	}
	//forms[event.getFormName()].elements.btn_Update.enabled = false;
	return true;
}

/**
 * Handle changed data for user name
 * Will validate that the name is not null and unique, but only if not in transactional editing 
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D0FCF3BD-84E7-4E11-A38C-760717319236"}
 */
function onDataChangeUserName(oldValue, newValue, event) {
	return isEditing(event) || validateUserName(event);								//	validate user name when not in transaction
}

/**
 * Validates the presence and uniquness of the user name in the tenant
 * 
 * @param {JSEvent} event The event that triggerent the validation action
 * @returns {Boolean}
 * 
 * @properties={typeid:24,uuid:"8DACB64A-7171-47AC-9932-E0A54D2E2942"}
 */
function validateUserName(event){
	errorMessage = null;													//	reset the error message
	if(!user_name){															//	user name must be non-null;
		errorMessage = i18n.getI18NMessage('sts.txt.provide.user.name');
		return false;														//	failed validation
	}
	var id = globals.secGetUserID(user_name,tenant_uuid);						//	Check user ID
	if(id && id != user_uuid){												//	It should be unique
		errorMessage = i18n.getI18NMessage('sts.txt.user.name.already.in.use');
		/** @type {QBSelect<db:/stsservoy/users>} */
		return false;														//	failed validation
	}
	return true;															//	validation success		
}
