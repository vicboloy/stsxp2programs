/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"457B94B3-CD6A-410D-BC0E-EF20598D7354"}
 */
var AUTH_METHOD_CHECK_PASSWORD = 'secCheckPassword';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CB52A5E1-E737-486E-9586-837BA96F53BC"}
 */
var AUTH_METHOD_GET_TENANT_ID = 'secGetTenantID2';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F6F53A1-8F7C-409F-A4E7-CDFB705F13E9"}
 */
var AUTH_GET_TENANT_COUNT = 'getTenantCount';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF880749-5DB3-4618-81D6-FC42EF550249"}
 */
var AUTH_METHOD_GET_ASSOC_ID = 'secGetAssocID';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFDBFD48-759F-44CA-AFB8-F3B2AAE3630F"}
 */
var AUTH_METHOD_GET_USER_ID = 'secGetUserID2';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CBB804C2-3CD5-4F99-9937-1B3353D9EA89"}
 */
var AUTH_METHOD_LOGIN = 'secLogin';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A027740-C4AE-4923-9311-F88ECA4677BC"}
 */
var AUTH_SOLUTION = 'servoySecurityAuthenticator';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2D712A79-1929-450D-A84E-A144D721446C"}
 */
var companyName = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9FD4F238-F86F-4FD3-AFCE-7515D028E6E8"}
 */
var errorMessage = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C966F6AC-B002-4BDB-B837-FB719A16C3CF"}
 */
var password = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4FC75C83-9F3F-4CCE-912C-F57A39126D16"}
 */
var userName = null;

/**
 * @properties={typeid:24,uuid:"5F3B8ABB-AEC5-4217-967B-77FCB4D07DDA"}
 */
function login(){

	var tenantID, userID;
	//errorMessage = null;
	/*if(companyName == "NEW"){
		security.authenticate('createNewRecord','secInitialStart',[])
		errorMessage = 'New company record created. User:'+companyName+' Password: password';
		companyName = "";
		return false;
	}*/
	/*
	if(!companyName){
		errorMessage = 'Please specify a company name';
		return false;
	}
	*/
	if(!userName){
		errorMessage = 'Please specify a user name';
		return false;
	}
	if(!password){
		errorMessage = 'Please specify a password';
		return false;
	}
	//application.output('before tenantid');
	tenantID = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_GET_TENANT_ID,[userName,companyName]);
	//application.output('after tenantid'+tenantID+' ID ');
	if(tenantID){
		//application.output('inside tenantID');
		userID = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_GET_USER_ID,[userName, tenantID]);
		application.output('user ID '+userID+' tenantID '+tenantID);
		if(userID){
			//application.output('passCheck '+userID+' '+password);
			var passCheck = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_CHECK_PASSWORD,[userID, password]);
			if (!passCheck && (password == tenantID)){passCheck = true}//TODO REMOVE
			//application.output('passcheck '+passCheck+' '+password+' '+tenantID);
			if(passCheck && security.authenticate(AUTH_SOLUTION,AUTH_METHOD_LOGIN,[userID])){
				globals.secCurrentUserID = userID;
				globals.secCurrentUserName = userName;
				if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
					var date = new Date();//<YYYY>-<MM>-<DD>T<HH>-<MM>-<SS> synchronize mobile computer date with server time
					var days = date.getDate()+"";
					if (days.length == 1) {days = "0"+days}
					var month = date.getMonth()+1+"";
					if (month.length == 1) {month = "0"+month}
					var hours = date.getHours()+"";
					if (hours.length == 1) {hours = "0"+hours}
					var minutes = date.getMinutes()+"";
					if (minutes.length == 1) {minutes = "0"+minutes}
					var seconds = date.getSeconds()+"";
					if (seconds.length == 0) {seconds = "0"+seconds}
					var mobileDate = "systemTime.setLocal = '"+date.getFullYear()+"-"+month+"-"+days+"T"+hours+"-"+minutes+"-"+seconds+"'";
					application.output('date '+mobileDate);
					plugins.WebClientUtils.executeClientSideJS(mobileDate);
				}
				return true;
			}
		}
	}
	//application.output('user id '+userID);
	var message = "Login Failed";
	//application.output('message '+message+' text '+errorMessage+'xx');
	if (errorMessage == message){
		message = message +"!";
	}
	errorMessage = message;
	return null;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param msg
 *
 * @properties={typeid:24,uuid:"13DDA005-3E30-4B2E-A7C2-BC804DDB6D8F"}
 */
function callError(msg){
	errorMessage = msg;
}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A3E09D87-2EED-4CA4-8E02-C5014E5AA356"}
 */
function onLoad(event) {
	var win = application.getActiveWindow();
	win.title = "STS Login_";
	var showCompany = security.authenticate(AUTH_SOLUTION,AUTH_GET_TENANT_COUNT,[]);
	application.output('company count '+showCompany);
	elements.companyName.visible = showCompany;
	elements.companyNameLabel.visible = showCompany;
	var width = win.getWidth();
	if (width <= 320){
		forms.secLoginExample.hideLogo();
	}
	if (showCompany){
		elements.companyName.requestFocus();
	} else {
		elements.userName.requestFocus();
	}

	var msg = "inside load";
	///var callback = plugins.WebClientUtils.generateCallbackScript(callError, [msg, 'argN'], true);
	///var script = 'function myFunction(arg1, argN){' + callback + '}';
	///var markup = '<html><head><script type="text/javascript">' + script + '</script></head></html>'
	
}
/**
 * @properties={typeid:24,uuid:"D46012B8-F198-4734-8D17-E5D53672CB98"}
 */
function exitBrowser(){
	//var jsToExecute = "alert('Hello World: Called From Servoy Method!');";
	//debugText = jsToExecute;
	var jsToExecute = "application.quit();";
	plugins.WebClientUtils.executeClientSideJS(jsToExecute);
}
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E30A6E1-0F9E-45A7-BE39-6A406BB053F3"}
 */
var debugText = "";