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
 * @properties={typeid:35,uuid:"D0AD0F9D-A1B1-4EAC-9C20-EE05FCB8006F",variableType:-4}
 */
var zoomSet = false;
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
	if (companyName){
		companyName = companyName.toUpperCase();
		companyName = companyName.trim();
		globals.companyLoginName = companyName.trim().toUpperCase();
		elements.userName.requestFocus();
	}
	elements.userName.requestFocus();
	return true;
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
function onDataChangeUser(oldValue, newValue, event) {
	if (companyName){
		companyName = companyName.trim().toUpperCase();
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
	/** @type {String} */
	var val = controller.getDataProviderValue(prov);
	//if (val){
	//	val = val.trim();
	//	application.updateUI();
	//}
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
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
	//	scopes.globals.viewport = scopes.globals.viewportSrc;
	//	plugins.WebClientUtils.executeClientSideJS('resize();');
	//	zoomSet = true;
	//}

	if (elements.companyName.visible){
		elements.companyName.requestFocus();
	} else {
		elements.userName.requestFocus();
	}
	var win = application.getActiveWindow();

	if (application.getScreenWidth() <= 250){
		forms.secLoginExample.hideLogo();
	} else {
		forms.secLoginExample.showLogo();
	}
	errorMessage = '';//application.getScreenWidth()+' x '+application.getScreenHeight();
	newScale = 1.0;
	application.output('RM before set scale');
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		var osName = application.getOSName();
		var width = application.getScreenWidth();
		var appWidth = application.getScreenWidth();
		var appHeight = application.getScreenHeight();

		//if (osName.search(/Win32/) != -1){	
		//	elements.banner.setSize(240,15);
		//}
		application.output('os Name is '+osName+' on client UserAgent ('+globals.clientUserAgent+')');
		if (osName.search(/(Linux)|(Mac)/i) != -1){
			var newScale = Math.floor(width/240*10)/10;
			scopes.globals.viewport = scopes.globals.viewportSrc.replace('initial-scale=1.0','initial-scale='+newScale);
			if (osName.search(/Linux/i) != -1){ 
				application.output('Linux / Android set scale of '+newScale);
				newScale = Math.floor(width/240);
				scopes.globals.viewport = scopes.globals.viewportSrc;//.replace('initial-scale=1.0','initial-scale='+newScale);
				//if (!zoomSet){
				//	plugins.WebClientUtils.executeClientSideJS('resize();');
				//	zoomSet = true;
				//}
				scopes.globals.viewport = scopes.globals.viewport.replace('maximum-scale=4.0','maximum-scale='+newScale);  
				//scopes.globals.viewport = scopes.globals.viewport.replace('user-scalable=1','user-scalable=0');

				newScale = 1.0;
			}			
		} else {
			if (firstShow){
				if (osName.search(/Win32/) != -1){
					scopes.globals.viewport = scopes.globals.viewportSrc;
					plugins.WebClientUtils.executeClientSideJS('resizer();');
					//if (!application.isInDeveloper()){
					application.output('setting viewport for function')
					//}
					////plugins.WebClientUtils.executeClientSideJS('if (typeof resize !== "undefined" {resize();} else if (typeof resizer !== "undefined") {resizer();}');
					//globals.zoomed = true;
//onActionResize();
					var date = new Date();
					date.setTime(date.getTime()+500);
					plugins.scheduler.removeJob('refresherL');
					plugins.scheduler.addJob('refresherL',date,onActionResize,1000,0);
				} 
				/** else {
					if (osName.search(/Win32/) != -1 && globals.clientUserAgent == ""){
						application.output("pushing new zoom job");
						var date = new Date();
						date.setTime(date.getTime()+8500);
						plugins.scheduler.removeJob('refresherL');
						plugins.scheduler.addJob('refresherL',date,onActionResize,1000,0);
					}
				} */
			} else {
				onActionResize();
				
			}
		}

		application.output('RM login newscale '+newScale+' '+application.getScreenWidth()+'x'+application.getScreenHeight()+' '+osName);
		//plugins.WebClientUtils.executeClientSideJS('navigator.userAgent;window.innerHeight',globals.storeUserAgentOnLogin,['navigator.userAgent','window.innerWidth','window.innerHeight']);
		//plugins.WebClientUtils.executeClientSideJS('resize()');
	}

	//errorMessage = plugins.UserManager.Client().ipAddress;
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
/**
 * @properties={typeid:24,uuid:"35111C51-18B3-44C1-BAEC-2B94CDFAB6C1"}
 */
function showLogo(){
	elements.banner.visible = true;
}
/**
 * @properties={typeid:24,uuid:"26BB037E-CCBF-4B18-A53D-04FB0DB30F85"}
 */
function onActionResize(){
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		plugins.WebClientUtils.executeClientSideJS('resizer();');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F64F4EE-3239-49B0-B9B8-887EDE5C1D29"}
 */
function onActionResizeLogin(event) {
	onActionResize();
	elements.userName.requestFocus();
}
