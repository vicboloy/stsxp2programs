
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"54BEBCF1-8FB3-4E10-9271-095625FE64B5"}
 */
function onDataChangeCompany(oldValue, newValue, event) {
	globals.companyLoginName = newValue;
	application.output('-----'+globals.companyLoginName);
	return true
}
/**
 * @properties={typeid:24,uuid:"18D40F0D-FEE3-4AE5-A4DD-1EAD0E888BB2"}
 */
function hideLogo(){
	elements.banner.visible = false;
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"490EFD00-9D7A-4E77-BA36-1B4DE5C89540"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.password.requestFocus();
	return true
}
