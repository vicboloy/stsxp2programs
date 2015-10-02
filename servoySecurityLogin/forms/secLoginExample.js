/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1619B802-9007-405B-BA89-B2006D02E485"}
 */
var rfHtml = '<html> \
	<head> \
	<script type="text/javascript"> \
	function saveLocalStorage() { \
		if (typeof EB !== "undefined"){\
			try{\
				localStorage.device=EB.System.getProperty("deviceName");\
				}\ catch(error){}\
		}\
		localStorage.browser=navigator.userAgent;\
	} \
	</script> \
	</head> \
	<body onload="saveLocalStorage()"> \
	<button type="button" onClick="saveLocalStorage()">TEST</button> \
	</body> \
	</html>';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A964DEA7-D91F-4691-8B51-ECE88A4ACFCE"}
 */
var textAreaString = "";
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
	if (event.getElementName() == 'companyName'){
		if (!newValue || newValue == ""){
			elements.companyName.requestFocus();
			return true;
		}
	}
	elements.password.requestFocus();
	return true
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B40CF4D-076D-4DAF-88F8-DE5A7F55A38A"}
 */
function onFocusLost(event) {
	var elName = event.getElementName();
	var formName = event.getFormName();
	var prov = forms[formName].elements[elName].getDataProviderID();
	var val = controller.getDataProviderValue(prov);
	if (val == "" || val == null){
		forms[formName].elements[elName].requestFocus();
	}
}
