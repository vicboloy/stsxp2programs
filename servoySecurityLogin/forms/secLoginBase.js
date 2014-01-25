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
var AUTH_METHOD_GET_TENANT_ID = 'secGetTenantID';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFDBFD48-759F-44CA-AFB8-F3B2AAE3630F"}
 */
var AUTH_METHOD_GET_USER_ID = 'secGetUserID';

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
	errorMessage = null;
	if(companyName == "NEW"){
		security.authenticate('createNewRecord','secInitialStart',[])
		errorMessage = 'New company record created. User:'+companyName+' Password: password';
		companyName = "";
		return false;
	}
	if(!companyName){
		errorMessage = 'Please specify a company name';
		return false;
	}
	if(!userName){
		errorMessage = 'Please specify a user namex';
		return false;
	}
	if(!password){
		errorMessage = 'Please specify a password';
		return false;
	}
	tenantID = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_GET_TENANT_ID,[companyName]);
	if(tenantID){
		userID = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_GET_USER_ID,[userName, tenantID]);
		if(userID){
			var passCheck = security.authenticate(AUTH_SOLUTION,AUTH_METHOD_CHECK_PASSWORD,[userID, password]);
			if(passCheck && security.authenticate(AUTH_SOLUTION,AUTH_METHOD_LOGIN,[userID])){
				return true;
			}
		}
	}
	errorMessage = 'Login Failed';
	return null;
}
