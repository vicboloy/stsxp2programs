/**
 * @properties={typeid:35,uuid:"0C1B41B4-B62D-4473-8629-65D9CC0FE5A5",variableType:-4}
 * @type {Object}
 */
var com = null;
/**
 * @properties={typeid:35,uuid:"1FD1D9DE-FC19-4036-BC65-479B6FD3642F",variableType:-4}
 */
var fabSuiteLocal = false;
/**
 * @properties={typeid:35,uuid:"D192B0D7-80C7-4A3E-A97D-619C3E9DB61C",variableType:-4}
 */
var isSmartClient = false;
/**
 * @properties={typeid:35,uuid:"A3050D76-7B87-464A-84EE-3B46792F8198",variableType:-4}
 */
var selection = null;
/**
 * @properties={typeid:35,uuid:"341C9E81-7169-4E8D-BA7A-C6CF83D1A34B",variableType:-4}
 */
var endVars = null;
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"D7A7FA63-522F-44C6-84AD-07135F6C4BB2"}
 */
function onSolutionOpenX(arg, queryParams) {
	//application.output('STSx onSolutionOpenX');
	plugins.UserManager.register( "P2Programs", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCFyAbTPbuHQraeSHsu3pM3DS4nPwTJM/B" );
	try {
		testFabsuite();
	} catch (m) {}
	isSmartClient = (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT);
	
	var embedded = application.getUUID('EEEEEEEE-EEEE-EEEE-EEEE-EEEEEEEEEEEE');
	//var tables = ['idfiles','jobs','loads','lots','piecemarks','sequences','sheets','id_serial_numbers'];
	//for (var table in tables){
	databaseManager.addTableFilterParam('stsservoy',null,'tenant_uuid','=',embedded);
	//}
	secCurrentUserID = security.getUserUID();
	globals.secCurrentTenantID = embedded;
	globals.mobTenantId = embedded;
	globals.secCurrentAssociationID = embedded;
	globals.mobAssocId = embedded;
	globals.getAssociation(mobAssocId); //aMobAssocs[assocID];
	
	secSetCurrentTenant(secCurrentTenantID);
	//if (secCurrentTenantID){
		
	//}

	session.program = "STS FS";
	session.appName = "STS X Embedded";
	session.login = security.getUserName();
	session.sessionId = application.getIPAddress()+' '+security.getClientID();
	session.tenant_uuid = embedded;
	session.loginId = sec_current_user.user_uuid;
	session.loginUserNum = sec_current_user.user_name;
	session.loginUser = sec_current_user.name_first;
	session.associationId = embedded;//check for use of secGetAssociationID
	//if (session.associationId == null){
	//	session.associationId = secGetAssocID(secCurrentUserName);
	//}
	/// getLoggedEmployee(session.loginId); JOE
	//mobLoggedEmployeeId = session.employeeId; //globals.getLoggedEmployee(secCurrentUserID);
	//application.output('session '+session);
	//if (arg && arg == 'headless'){
		//return;
	//}

	globals.getMenuList();
	//application.output('REMOVE after sec settings');

	if (1==1){return}
	application.output('REMOVE entered params '+arg);
	var win = application.getActiveWindow();
	var width = application.getScreenWidth();
	application.output('REMOVE screen width '+width);
	// get preference window width
	width = (win.getWidth() >= 640) ? 640 : width;
	if (width < 240 && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//this is for the mobile computer entry screen
		win.setSize(220,win.getHeight());
		forms['sts_x'].elements.btnMain.visible = false;
		forms['sts_x'].elements.btnPrefs.visible = false;
		forms['sts_x'].elements.btnImport.visible = false;
		forms['sts_x'].elements.tabless.setLocation(0,0);
		
	}
	//log into fabsuite
	if (application.isInDeveloper()){application.output('globals onSolutionOpen opened. STSmobile/globals.js');}
	if (application.isInDeveloper()){application.output('license mobile '+plugins.UserManager.getSettingsProperty('license.0.licenses'))}
	if (false && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		var mobileURL = application.getServerURL()+'/servoy-webclient/ss/s/STSmobile';
		var status = application.showURL(mobileURL,'_blank','height=320,width=240,kiosk=yes,status=no,toolbar=no,menubar=no,location=no,resizable=no,titlebar=no');
		if (application.isInDeveloper()){application.output('create url '+status)}
	}
	//secSetCurrentApplication(secGetApplicationID(APPLICATION_NAME));

	
	globals.getMappings();
	session.association = m.assocs[session.associationId];
	application.setValueListItems('stsvlg_location',globals.l.locations); // status codes for this association
	//application.output()
	application.setValueListItems('stsvlg_status_codes',globals.m.statusCodesDiv[session.associationId]); // status codes for this association
	globals.logger(true,i18n.getI18NMessage('sts.txt.application.opened.mobile'));
	//application.setValueListItems('rfProgramList',['Transactions','Exit']);
	globals.getMenuList();
	globals.onStartLoadPrefs();
	globals.rfFunctionKeys('STS_main');
	//globals.functionKeyDescrip[0] = " ";
	// see: http://www.quartz-scheduler.org/docs/tutorials/crontrigger.html for more info
	// add a job that runs every 20 minutes after the hour (0,20,40)
	//plugins.scheduler.addCronJob('20mins', '0 0/20 * * * ?', method)
	// add a job that runs every day at 23:30 between now and 5 days from now
	globals.DIALOGS.setDialogWidth(200);
	globals.DIALOGS.setDialogHeight(200);
	null;
	if (application.isInDeveloper()){application.output("-----------------------")}
	
}
/**
 * @properties={typeid:24,uuid:"860CF975-5FCA-4C92-818D-1C75C83CFA26"}
 * @AllowToRunInFind
 */
function testFabsuite(){
	fabSuiteLocal = false;
	if (!com){
		com = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
	}
	//application.output('this is com |'+com+'|');
	var xmlConnect = '<FabSuiteXMLRequest>\
							<Connect>\
								<IPAddress>localhost</IPAddress>\
								<PortNumber>3306</PortNumber>\
								<Username>admin</Username>\
								<Password>fab</Password>\
							</Connect>\
						</FabSuiteXMLRequest>';
	var response = 'NO COM';
	var sample = com.toString();
	if (sample.search('RemoteCOM') != -1){
		response = com.call('FabSuiteXML',xmlConnect);		
	} else {
		com = plugins.servoyguy_servoycom.getNewClientJSCOM("FabSuite.FabSuiteAPI.FabSuiteAPI");
		response = com.call('FabSuiteXML',xmlConnect);	
	}
	//application.output('com response: |'+response+'|');
	if (!com || !com.isJACOBLoaded()) {
		plugins.dialogs.showErrorDialog( "Error", "Error loading COM: \n" + plugins.servoyguy_servoycom.getLastError());
		fabSuiteLocal = false;
		return;
	}
	var xmlVersion = '	<FabSuiteXMLRequest>\
		<Version/>\
		</FabSuiteXMLRequest>';
	var fsResp = scopes.globals.com.call('FabSuiteXML',xmlVersion);
	application.output(fsResp);
	var regX = new RegExp(/>([0-9]*\..*)</);
	var version = regX.exec(fsResp);
	forms.sts_x.elements.indFabSuite.text = version[1];
	fabSuiteLocal = true;
	return;
	//com.put("Visible","true");
	//var attachTo = plugins.fabsuite.fsSetLib('E:\\p2programs\\javaCom\\FabSuiteXMLInterface.dll');
/**
	//var attachTo = plugins.fabsuite.fsSetLib('C:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\FabSuiteXMLInterface.dll');
	application.output('REMOVE Step 1');
	var attachTo = plugins.fabsuite.fsSetLib('C:/Program Files (x86)/FabSuite LLC/FabSuite/FabSuiteSTS.dll');
	application.output('REMOVE Step 2 '+attachTo);
	*/
	/**
	attachTo = plugins.fabsuite.fsSetLib('C:\\STS3\\FabSuiteXMLInterface.dll');
	application.output('REMOVE Step 3 '+attachTo);

	application.output('attached to fslib 4 '+attachTo);
	*/
	/**
	var xmlQuery = '<FabSuiteXMLRequest>\
					<Connect>\
						<IPAddress>localhost</IPAddress>\
						<PortNumber>3306</PortNumber>\
						<Username>admin</Username>\
						<Password>fab</Password>\
					</Connect>\
				</FabSuiteXMLRequest>';
	//var response = plugins.fabsuite.fsXML(xmlQuery);
	//application.output('fs xml response '+response);
	//var test0 = plugins.fabsuite.fsSetLib('C:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\FabSuiteXMLInterface.dll');
	var xmlConnect = '<FabSuiteXMLRequest>\
							<Connect>\
								<IPAddress>localhost</IPAddress>\
								<PortNumber>3306</PortNumber>\
								<Username>admin</Username>\
								<Password>fab</Password>\
							</Connect>\
						</FabSuiteXMLRequest>';

	application.output('REMOVE Step before test');
	var test = plugins.fabsuite.fsXML(xmlConnect);
	application.output('test fs interface '+test);
	xmlConnect = '<FabSuiteXMLRequest><GetProductionControlJobs/></FabSuiteXMLRequest>';
	plugins.fabsuite.fsXML(xmlConnect);
	xmlConnect = '<FabSuiteXMLRequest><ExportJob><JobNumber>FabSuite2</JobNumber><Filename>C:\STS3\ExportedFabSuite2.kss</Filename><IncludeLotNumbers>true</IncludeLotNumbers></ExportJob></FabSuiteXMLRequest>'
*/
}
/**
 * @properties={typeid:24,uuid:"D46344C8-40A1-4CAB-BD15-9294BFD09143"}
 */
function checkFSLocal(){
	var clientIP = plugins.UserManager.Client().ipAddress;
	var serverIP = plugins.UserManager.Server().ipAddress;
	fabSuiteLocal = (clientIP == serverIP);
}