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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E8AE7A9C-717B-4BFE-871F-967BB3D6D5AD"}
 */
var AUTH_MESSAGE_LOGGER = "secLogger";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C85C39E0-9C59-4F56-9488-11A0D65D2B3B"}
 */
var AUTH_INIT_COMPANY = "secCreateTenantAndUser";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EA1E69BB-9C53-41D8-93D1-3CA210A506EA"}
 */
var AUTH_METHOD_CHECK_LICENSE = 'secCheckLicense';

/**
 * @properties={typeid:24,uuid:"5F3B8ABB-AEC5-4217-967B-77FCB4D07DDA"}
 * @AllowToRunInFind
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
	if(elements.companyName.visible && !companyName){
		errorMessage = i18n.getI18NMessage('sts.txt.provide.company.name');
		return false;
	}
	if(!userName){
		errorMessage = i18n.getI18NMessage('sts.txt.provide.user.name');
		return false;
	}
	if(!password){
		errorMessage = i18n.getI18NMessage('sts.txt.provide.password');
		return false;
	}
	//application.output('before tenantid');
	tenantID = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_GET_TENANT_ID,[userName,companyName]);
	//application.output('after tenantid'+tenantID+' ID ');
	var checkLicense = "";
	if(tenantID){
		//application.output('inside tenantID');
		userID = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_GET_USER_ID,[userName, tenantID]);
		if (application.isInDeveloper()){application.output('user ID '+userID+' tenantID '+tenantID);}
		if(userID){
			if (application.isInDeveloper()){application.output('passCheck '+userID+' '+password);}
			var passCheck = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_CHECK_PASSWORD,[userID, password]);
			//if (!passCheck && (password == tenantID)){passCheck = true}//TODO REMOVE
			
			if (application.isInDeveloper()){application.output('passcheck '+passCheck+' '+password+' '+tenantID);}
			checkLicense = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_CHECK_LICENSE,[application.getSolutionName(),tenantID,userID]);
			//application.output('license use '+checkLicense);
			if(passCheck && checkLicense.split(':')[1] > 0){
				if (security.authenticate(AUTH_SOLUTION,AUTH_METHOD_LOGIN,[userID])){
					globals.secCurrentUserID = userID;
					globals.secCurrentUserName = userName;
					globals.licenseResult = checkLicense;
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
						var mobileDate = "systemTime.setLocal = '"+date.getFullYear()+"-"+month+"-"+days+"T"+hours+"-"+minutes+"-"+seconds+"';";
						if (application.isInDeveloper()){application.output('date '+mobileDate)}
						try {
							plugins.WebClientUtils.executeClientSideJS(mobileDate);
						} catch (e) {}
					}
					return true;
				}
			}
		}
	} else {
		if (application.isInDeveloper()){application.output('No Tenant ID')}
	}
	var licExceeded = i18n.getI18NMessage('sts.txt.license.exceeded');
	var message = "\n"+i18n.getI18NMessage('sts.txt.login.failed');
	var licenseData = checkLicense.split(':');
	var licRemain = licenseData[1];
	var licAvail = licenseData[2];
	message += '.\n'+i18n.getI18NMessage('sts.txt.license.available',[application.getSolutionName(),licRemain,licAvail]); // only add license info if login failure license-related
	//var licTotal = licenseData[2];
	//var licUsed = licenseData[3];
	if (licRemain <= 0 && passCheck){
		message += '.\n'+i18n.getI18NMessage('sts.txt.license.error');
		errorMessage = licExceeded;
	}
	forms.secLoginExample.enableLicenseWarn(message);
	
	if (message && errorMessage == message){
		message = message +"!";
	}
	errorMessage = i18n.getI18NMessage('sts.txt.login.failed');
	return null;
	//var licenses = globals.secCheckLicense();
	//licenses = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_CHECK_LICENSE,[userName]);
}
/**
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

	textAreaString = "";
	for (var item in plugins){
		if (application.isInDeveloper()){application.output('loaded '+item)}
		textAreaString += item+",";
	}
	var registered = plugins.UserManager.register( "P2Programs", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCFyAbTPbuHQraeSHsu3pM3DS4nPwTJM/B" );
	var counter = 10000;
	if (!registered && (counter > 0)){
		registered = plugins.UserManager.register( "P2Programs", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCFyAbTPbuHQraeSHsu3pM3DS4nPwTJM/B" );
		counter--;
	}
	if (application.isInDeveloper()){application.output('usermanager registered '+registered+' counter '+counter)}
	//var solutionNames = []; // either STS3 or STSmobile
	var solutionNames = [];

	try {
		// get license info on load  for this tenant addresses #45 unfuddle
		if (application.isInDeveloper()){application.output(application.getSolutionName())}
		var solutionName = application.getSolutionName(); // addresses #45

		var clientArray = new Array();//plugins.UserManager.getClients();
		var licenses = licenseCount();
		licenseTotal = licenses;
		var currentTime = new Date().getTime();
		for (var indexC = 0;indexC < clientArray.length;indexC++){
			var client = clientArray[indexC];
			client = client.clientId;
			var clientInfo = plugins.UserManager.getClientByUID(client);
			var clientSolution = clientInfo.solutionName;
			if (!solutionNames[clientSolution]){solutionNames[clientSolution] = 0}
			solutionNames[clientSolution] =  parseInt(solutionNames[clientSolution]) + 1;
			var clientIdle = clientInfo.idle;
			var beginTime = clientIdle.getTime();
			var idleMillis = Math.floor((currentTime - beginTime)/100);
			if (application.isInDeveloper()){application.output(clientArray[indexC]+' loginId:'+clientInfo.userUid+' client:'+client+' IP:'+clientInfo.ipAddress+' Login:'+clientInfo.login+' solution:'+clientInfo.solutionName+' idle:'+clientInfo.idle+' solution '+clientInfo.solutionName+' idle seconds '+idleMillis)}
			if (application.isInDeveloper()){application.output(clientInfo)}
		}
		//errorMessage = 'Desk ('+solutionNames['STS3']+') Mobile ('+solutionNames['STSmobile']+' of '+licenses+'.';
		if (application.isInDeveloper()){application.output('sol '+solutionName+' license count '+licenses+' solution STS3 '+solutionNames['STS3']+' STSmobile '+solutionNames['STSmobile'])}
		if (application.isInDeveloper()){application.output('solution counts '+solutionNames)}
		var moreLic = plugins.UserManager.Server().getSettingsProperty('license.0.company_name');
		textAreaString += "license "+licenses+' more - '+moreLic+' -';
	} catch (e)	{
		
	}
	var server = application.getServerURL();
	//plugins.WebClientUtils.addJsReference(server+'/ebapi.js');
	//plugins.WebClientUtils.addJsReference(server+'/eb.system.js');
	try {
		// Change 000 no need to execute within STSmain, only works with Enterprise Browser
		plugins.WebClientUtils.addJsReference(server+'/ebapi-modules.js');
	} catch (e) {
		if (application.isInDeveloper()){application.output('This is not a mobile computer or Enterprise Browser is not installed.')}
	}
	var win = application.getActiveWindow();
	win.title = "STS Login";
	var companyCount = security.authenticate(AUTH_SOLUTION,AUTH_GET_TENANT_COUNT,[])
	var showCompany = (companyCount > 1);
	var message = 'Company Count is '+companyCount;
	if (companyCount == 0){
		security.authenticate(AUTH_SOLUTION,AUTH_INIT_COMPANY,[]);
	}
	if (application.isInDeveloper()){application.output(message);}
	security.authenticate(AUTH_SOLUTION,AUTH_MESSAGE_LOGGER,[message]);
	if (application.isInDeveloper()){application.output('company show '+showCompany);}
	elements.companyName.visible = showCompany;
	elements.companyNameLabel.visible = showCompany;


	var width = win.getWidth();
	if (width <= 320){
		forms.secLoginExample.hideLogo();
	}
	//errorMessage = 'Desk ('+solutionNames['STS3']+') Mobile ('+solutionNames['STSmobile']+' of '+licenses+'.';

	var msg = "inside load";
}
/**
 * @properties={typeid:24,uuid:"D46012B8-F198-4734-8D17-E5D53672CB98"}
 */
function exitBrowser(){
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		var jsToExecute = "application.quit();";
		plugins.WebClientUtils.executeClientSideJS(jsToExecute);
	} else {
		application.exit(); // changes to ensure client quits and web quits
	}
}
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E30A6E1-0F9E-45A7-BE39-6A406BB053F3"}
 */
var debugText = "";
/**
 * @properties={typeid:24,uuid:"0FB115A9-BF63-405C-9C73-6BED2239EA8E"}
 */
function licenseCount() {
	for (var index = 0;index < 0;index++){
		//if (application.isInDeveloper()){application.output('index '+index+': '+plugins.UserManager.Server().getSettingsProperty('license.' + index + '.licenses'))}
	}
	//if (application.isInDeveloper()){application.output('URL '+plugins.UserManager.getSettingsProperty('server.0.URL'))}
	   var _nTotal = 0;
	   var _nCount = parseInt(plugins.UserManager.Server().getSettingsProperty('licenseManager.numberOfLicenses'), 10);
	   if (application.isInDeveloper()){application.output('licenses call '+plugins.UserManager.getSettingsProperty('licenseManager.numberOfLicenses'))}
	   if(_nCount) {
	      for (var i = 0; i < _nCount; i++) {
	         _nTotal += parseInt(plugins.UserManager.Server().getSettingsProperty('license.' + i + '.licenses'), 10);
	      }
	   }
	   
	   return _nTotal;
	}