/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F43C3F08-5F4B-4020-B7DF-09FCAEE8E9A5"}
 */
var custom_property_1 = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"798CD396-9DD2-4080-A344-320A4A6CCC8C"}
 */
function onShow(firstShow, event) {
	adminLevel = scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER;
	var propValues = _super.getPropertyValues();
	for (var i = 0; i < propValues.length; i++) {
		/** @type {scopes.svyProperties.RuntimeProperty} */
		var propValue = propValues[i];
		var propValueName = propValue.propertyValueName;
		forms[controller.getName()][propValueName] = propValue.value;
		if (propValue.adminLevel > adminLevel) {
			forms[controller.getName()].elements[propValueName].enabled = false;
		} else {
			forms[controller.getName()].elements[propValueName].enabled = true;
		}
	}
}

/**
 * @properties={typeid:24,uuid:"3F563B20-099A-4F85-BCDF-03A605754E51"}
 */
function initPropertyForm() {
	adminLevel = scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER;
}

/**
 * @properties={typeid:24,uuid:"FC3072A0-268E-42C3-B207-C590A170A96B"}
 */
function getPropertyNames() {
	return ["custom_property_1"];
}
