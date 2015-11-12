// Initial creation resolves ticket #46
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EEAA5EDE-724F-47AF-BBC9-108457CAED85"}
 */
var userName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7463BF55-DB28-486A-B914-86D2BB8034CF"}
 */
var userEmployeeName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1F636D3-2F2A-4471-864F-4387C6DD313E"}
 */
var userLogin = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AC0305EE-DFA5-4217-A05B-8C2DF3655C55"}
 */
var userEmployeeNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"33BB27D9-0069-4BF5-A1F9-9AF79D140E51"}
 */
var userSessionId = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A627DEF5-B0E5-4428-92FB-7E670D9CC18A"}
 */
var userProgram = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9FB792E-5FD5-456C-9DA0-9030B0790CE0"}
 */
var userLoginDate = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"88D7D0E0-AF5E-460D-9102-55D8DA036E52"}
 */
var userIdle = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A74B690-2585-4F90-A7E7-AC5D7AAB6262"}
 */
var userEmployeeID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC019BA6-1448-4479-A050-757A043C87AA"}
 */
var userLoginID = "";
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03AD2FF8-C364-41B8-8FB3-CA461D7D44F8"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	userEmployeeName = globals.session.fullName;
	userEmployeeNum = globals.session.employeeNum;
	userEmployeeID = globals.session.employeeId;
	userName = globals.session.fullName;
	userLogin = globals.session.login;
	userLoginID = globals.session.userId;
	userSessionId = globals.session.sessionId;
	userLoginDate = globals.session.loginDate;
	userProgram = globals.session.program;
	elements.tabless.visible = scopes.globals.showViewDetail;
	var clients = plugins.UserManager.getClients();
	//plugins.UserManager.Server().getServerProperties();
	for (var index = 0;index < clients.length;index++){
		application.output('client host ip '+clients[index].hostAddress);
		application.output('client alive '+clients[index].alive);
		application.output('client id '+clients[index].clientId);
		application.output('client mac '+clients[index].macAddress);
		application.output('client idle '+clients[index].idle);
		application.output('client ip '+clients[index].ipAddress);
		application.output('client login '+clients[index].login);
		application.output('client opened '+clients[index].solutionName);
		application.output('client type '+clients[index].applicationType);
		application.output('client username '+clients[index].userName);
		application.output('client userid '+clients[index].userUid);
		//plugins.UserManager.
	}
	return _super.onShow(firstShow, event)
}
