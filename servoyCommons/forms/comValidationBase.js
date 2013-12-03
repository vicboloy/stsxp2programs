/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40135B7D-2355-4501-808A-D50625D9C130"}
 */
var errorMessage = null;

/**
 * Validates the state of the model.
 * If validation fails, the errorMessage variable will contain the explaination
 * The errorMessage may be used as a data label or shown in a dialog.
 * Implementation forms should override this method to implement validation logic.
 * 
 * @param {JSEvent} event The event that triggerent the validation action
 * @ returns {Boolean} true if the model is in a valid state
 * 
 * @properties={typeid:24,uuid:"28C63E63-C73F-450D-88D1-966C1241DCA4"}
 */
function validate(event) {
	
	
	errorMessage = null;			//	clear the error message
	return true;					//	Base for is always in a valid state
	
	/*
	 * Sample code for implementation forms
	 * 
	
	if(_super.validate.apply(this,arguments) && requiredField1 && requiredField2){
		return true;
	} else {
		errorMessage = 'i18n:missingRequiredFields';
	}
	return false;
	
	* 
	*/
}

/**
 * Servoy implementation of MVC-style programming.
 * This method updates the form appearance based on the state of the model.
 * Clears the error message.
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1FEAC37C-B9E3-413E-ADA3-96FC82CE33A1"}
 */
function updateUI(event) {
	
	errorMessage = null;			//	clear the error message
	return _super.updateUI(event);	//	Invoke super's implementation
}
