/** 
 * Validates the tenant record
 * company name must be non-null and unique
 * 
 * @param {JSEvent} event The event that triggerent the validation action
 * @returns {Boolean} true if the model is in a valid state
 *
 * @properties={typeid:24,uuid:"F789EA46-1AA9-4B20-8E1E-3C221F59B4A6"}
 */
function validate(event) {
	return !foundset.getSize() || validateCompanyName() && _super.validate(event);
}

/**
 * Handle changed data for company name
 * Will validate that the name is not null and unique, but only if not in transactional editing 
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"36BA5FF2-283B-40D6-BE47-83DF5A718A6B"}
 */
function onDataChangeCompanyName(oldValue, newValue, event) {
	return isEditing() || validateCompanyName();							//	validates company name when not in transaction
}

/**
 * Validates the presence and uniquness of the company name
 * @returns {Boolean}
 * @properties={typeid:24,uuid:"7CF8C088-C3E4-4C8A-A67F-F6EE593511AF"}
 */
function validateCompanyName(){
	errorMessage = null;													//	reset the error message
	if(!company_name){														//	company name must be non-null;
		errorMessage = 'Please provide a company name'						//	TODO: i18n HERE
		return false;														//	failed validation
	}
	var id = globals.secGetTenantID(company_name);							//	Check tenant ID
	if(id && id != tenant_id){												//	It should be unique
		errorMessage = 'Company name is already in use';					//	TODO: i18n HERE
		return false;														//	failed validation
	}
	return true;															//	validation success	
}
