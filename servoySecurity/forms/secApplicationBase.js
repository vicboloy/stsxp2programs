/**
 * Validates the state of the application record
 * Record is valid when the name is not null and unique.
 * 
 * @param {JSEvent} event The event that triggerent the validation action
 * @returns {Boolean} true if the model is in a valid state
 *
 * @properties={typeid:24,uuid:"912A05B8-930F-4742-AE45-17E4E8788529"}
 */
function validate(event) {
	return !foundset.getSize() || validateApplicationName() && _super.validate(event);
}

/**
 * Validates the presence and uniquness of the application name
 * @returns {Boolean}
 * @properties={typeid:24,uuid:"D54A9A94-2BB2-4A16-8FF3-E61FCB8090CE"}
 */
function validateApplicationName(){
	errorMessage = null;
	if(!application_name){													//	application must be non-null;
		errorMessage = i18n.getI18NMessage('sts.txt.provide.app.name');
		return false;														//	failed validation
	}
	var appID = globals.secGetApplicationID(application_name);				//	search application ID
	if(appID && appID != application_id){									//	it should be unique
		errorMessage = i18n.getI18NMessage('sts.txt.app.name.already.in.use');
			return false;													//	failed validation
	}
	return true;															//	validation success
}

/**
 * Handle changed data for app name
 * Will validate that the name is not null and unique, but only if not in transactional editing 
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"99787ACF-C835-43FF-875F-7D88D7757B52"}
 */
function onDataChangeApplicationName(oldValue, newValue, event) {
	return isEditing(event) || validateApplicationName();						//	validate changed name wwhen not in transaction	
}
