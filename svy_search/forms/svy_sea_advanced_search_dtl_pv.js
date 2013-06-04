/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1AA9C7D9-8F07-413C-B280-C54E11C99140"}
 */
var vSearch = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"741568E7-F5F9-452B-9673-5A53557D2C0D"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"F2C2C453-E1EF-4D7B-8757-119DFB1E83E8"}
 * @AllowToRunInFind
 */
function filter(event) {
	if (controller.find()) {	
		name = '#%' + vSearch + '%';	
		controller.search();
	}
}
