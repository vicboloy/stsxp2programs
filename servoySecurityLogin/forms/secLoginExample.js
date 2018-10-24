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
 * @properties={typeid:35,uuid:"08F18DA8-4F03-4CD6-A240-D500564DBCF1",variableType:-4}
 */
var licenses = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A964DEA7-D91F-4691-8B51-ECE88A4ACFCE"}
 */
var textAreaString = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7CD207DB-B0DF-4637-95BE-3D7BF137E827"}
 */
var licenseErrorMessage = "";
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
	if (application.isInDeveloper()){application.output('-----'+globals.companyLoginName)}
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
	switch (event.getElementName()){
		case 'companyName':
			if (!newValue || newValue == ""){
				elements.companyName.requestFocus();
				return true;
			}
			break;
		case 'userName':
		default:
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
	if (!val){
		if (elName == 'companyName'){
			forms[formName].elements[elName].requestFocus();
			return true;
		}
		if (elName == 'userName' && companyName == '' && elements.companyName.visible){
			elements.userName.requestFocus();
			return true;
		}
		return true;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"512C7CD9-95A7-40F7-A473-10411521055E"}
 */
function onShow(firstShow, event) {
	if (elements.companyName.visible){
		elements.companyName.requestFocus();
	} else {
		elements.userName.requestFocus();
	}
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		plugins.WebClientUtils.executeClientSideJS('navigator.userAgent',globals.storeUserAgentOnLogin,['navigator.userAgent']);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"903186DD-627C-454B-93AE-A6CED3BF7A1C"}
 */
function onActionLicenses(event) {
	elements.btn_License.visible = false;
}
/**
 * @param {String} message
 *
 * @properties={typeid:24,uuid:"583246F2-0BC2-495A-9468-544C9B639A61"}
 */
function enableLicenseWarn(message){
	//application.output(message);//DEBUG
	forms['secLoginExample'].licenseErrorMessage = message;
	forms['secLoginExample'].elements.btn_License.visible = true;
	forms['secLoginExample'].elements.btn_License.requestFocus();
}
