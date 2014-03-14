/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4EF59B33-2D80-4EE9-8FAC-47AEC1D4A690"}
 */
function validate(event) {
	return !foundset.getSize() || validateAssociationName() && _super.validate(event);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"E5DE0617-7A12-4660-BCE7-52FBF6BCA1A8"}
 */
function onDataChangeAssociationName(oldValue, newValue, event) {
	return isEditing(event) || validateAssociationName(oldValue);							//	validates association name when not in transaction
}
/**
 * @type {String} oldValue
 * @properties={typeid:24,uuid:"E65FF145-8336-4CDF-BCB4-707BEC29CDD2"}
 */
function validateAssociationName(oldValue){
	errorMessage = null;													//	reset the error message
	if(!association_name){														//	company name must be non-null;
		errorMessage = 'Please provide a new group name'						//	TODO: i18n HERE
		return false;														//	failed validation
	}
	var id = globals.secGetAssociationID(association_name);					// check association ID
	if(id && id != association_uuid){												//	It should be unique
		errorMessage = 'Association name is already in use';					//	TODO: i18n HERE
		association_name = oldValue;										//	replace in-use with prior entry
		return false;														//	failed validation
	}
	return true;															//	validation success	
}
