/** 
 * Validates the permission record
 * @param {JSEvent} event The event that triggerent the validation action
 * @returns {Boolean} true if the model is in a valid state
 *
 * @properties={typeid:24,uuid:"2EFF3B81-934A-4739-815E-F2ADCA9274B6"}
 */
function validate(event) {
	
	if(!foundset.getSize()){												//	empty foundsets are considered valid
		return _super.validate(event);
	}
	if(!permission_type){													//	validate permission type
		errorMessage = 'Please specify a permission type';					//	TODO: i18n HERE
		return false;														//	failed validation
	}
	if(permission_type == globals.SEC_PERMISSION_TYPE_DATA){				//	Data permission...
		if(!server_name){													//	validate server name
			errorMessage = 'Please specify a server name';					//	TODO: i18n HERE
			return false;													//	failed validation
		}
		if(!table_name){													//	validate table name
			errorMessage = 'Please specify a table name';					//	TODO: i18n HERE
			return false;													//	failed validation
		}
	} else if(permission_type == globals.SEC_PERMISSION_TYPE_UI){			//	UI Permission...
		if(!form_name){														//	validate form name
			errorMessage = 'Please specify a form';							//	TODO: i18n HERE
			return false;													//	failed validation
		}
		if(!element_uuid){													//	validate eliment uuid
			errorMessage = 'Please specify an element';						//	TODO: i18n HERE
			return false;													//	failed validation
		}
	}
	return _super.validate(event);
}

/**
 * Handle changed data for the form name
 * Resets the element uuid field, which should default to the form uuid itself
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F0DD9798-051A-42BD-9101-A0A3A78FE3B3"}
 */
function onDataChangeFormName(oldValue, newValue, event) {																
	element_uuid = security.getElementUUIDs(newValue).getValue(1,2);		//	reset the element uuid, defaulting to the form itself
	updateUI(event);														//	update user interface
	return true;															//	allow data change
}

/**
 * Handle changed data for Server Name
 * Clears the table name, which is dependant
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"384D81B2-CD2B-4B7B-ACFA-910A2B38282E"}
 */
function onDataChangeServerName(oldValue, newValue, event) {
	table_name = null;													//	clear the table name
	updateUI(event);													//	update user interface
	return true;														//	allow data change
}

/**
 * Handle changed data for Is-Visible property
 * Clears the accessible property, which is dependant
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D93AAE14-EFA3-4A8E-AF8F-FD5EF3F781FC"}
 */
function onDataChangeIsVisible(oldValue, newValue, event) {
	is_accessible = null;												//	clear the accessible property
	updateUI(event);													//	update user interface
	return true;														//	allow data change
}
