/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9598FC8E-1AD4-4CFB-9FA8-268369D74016"}
 */
var statusId = "";
/**
 * @properties={typeid:24,uuid:"0DB64EC0-13B7-49D6-93FA-FA6B2C780503"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function onSolutionOpen(){
	application.output('STSMobile start');
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		var runtimeForm = forms['mobile_standard'] //get the runtime instance of that frm
		var runtimeHtmlArea = runtimeForm.elements['viewPort'] //get the runtime html area element
		//j2 runtimeHtmlArea.putClientProperty(APP_UI_PROPERTY.TRUST_DATA_AS_HTML, true);
		globals.getBrowserInfo();
	}
	globals.mob.userAgent = globals.clientUserAgent;
	//application.output('JJJJJJJJJJJJJJJJJ '+globals.mob.userAgent);
	//var appWidth = application.getScreenWidth();
	//viewport = viewport.replace('320',appWidth);
	if (application.isInDeveloper()){application.output('globals onSolutionOpen opened. STSmobile/globals.js');}
	plugins.UserManager.register( "P2Programs", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCFyAbTPbuHQraeSHsu3pM3DS4nPwTJM/B" );
	if (application.isInDeveloper()){application.output('license mobile '+plugins.UserManager.getSettingsProperty('license.0.licenses'))}
	var os = plugins.UserManager.Client().osName;
	var ip = plugins.UserManager.Client().ipAddress;
	application.output('client os is '+os+' '+ip);
	if (false && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		var mobileURL = application.getServerURL()+'/servoy-webclient/ss/s/STSmobile';
		var status = application.showURL(mobileURL,'_blank','height=320,width=240,kiosk=yes,status=no,toolbar=no,menubar=no,location=no,resizable=no,titlebar=no');
		if (application.isInDeveloper()){application.output('create url '+status)}
	}
	plugins.VelocityReport;
	//secSetCurrentApplication(secGetApplicationID(APPLICATION_NAME));
	secCurrentUserID = security.getUserUID();
	globals.secCurrentTenantID = sec_current_user.tenant_uuid;
	globals.mobTenantId = globals.secCurrentTenantID;
	globals.secCurrentAssociationID = globals.secGetAssociationID(secCurrentTenantID);
	globals.mobAssocId = globals.secCurrentAssociationID;
	globals.getAssociation(mobAssocId); //aMobAssocs[assocID];
	
	secSetCurrentTenant(secCurrentTenantID);

	session.program = "STS Mobile";
	session.appName = "STSmobile";
	session.login = security.getUserName();
	session.sessionId = application.getIPAddress()+' '+security.getClientID();
	session.tenant_uuid = sec_current_user.tenant_uuid.toString();
	session.loginId = sec_current_user.user_uuid.toString();
	session.loginUserNum = sec_current_user.user_name;
	session.loginUser = sec_current_user.name_first;
	session.dualEntry = (sec_current_user.use_dual_entry && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT);
	session.associationId = globals.secGetAssocID(session.login);//check for use of secGetAssociationID
	if (session.associationId == null){
		session.associationId = secGetAssocID(secCurrentUserName);
	}
	session.associationId = session.associationId.toString();
	getLoggedEmployee(session.loginId);
	mobLoggedEmployeeId = session.employeeId; //globals.getLoggedEmployee(secCurrentUserID);
	globals.getMappings();
	globals.geti18nScreenNameMapping();//20190202 get i18n screen mapping to i18n key

	session.association = m.assocs[session.associationId];
	application.setValueListItems('stsvlg_location',globals.l.locations); // status codes for this association
	//application.output()
	application.setValueListItems('stsvlg_status_codes',globals.m.statusCodesDiv[session.associationId]); // status codes for this association
	application.output('Log Login Entry');
	globals.logger(true,i18n.getI18NMessage('sts.txt.application.opened.mobile'));
	//application.setValueListItems('rfProgramList',['Transactions','Exit']);
	scopes.prefs.mobilePrefs = "";
	application.output('OnStartLoadPrefs');
	globals.onStartLoadPrefs();
	application.output('EPM/FS Check');
	if (scopes.prefs.lFabsuiteInstalled == 1 || scopes.prefs.lFabsuiteInstalled == true){
		try {// trycatch 20210222 added due to saying a connection exists but none does to EPM
			scopes.fs.checkComFabsuite(null);//Log into FabSuite
		} catch (e) {
			globals.loginError = i18n.getI18NMessage('1170')+' Comm Check.';
		}
		if (globals.loginError){//logout
			application.sleep(4000);
			rfLogout();
		}
	}
	application.output('Get Mobile Menu List');
	globals.getMenuList();
	globals.rfFunctionKeys('STS_main');
	//globals.functionKeyDescrip[0] = " ";
	// see: http://www.quartz-scheduler.org/docs/tutorials/crontrigger.html for more info
	// add a job that runs every 20 minutes after the hour (0,20,40)
	//plugins.scheduler.addCronJob('20mins', '0 0/20 * * * ?', method)
	// add a job that runs every day at 23:30 between now and 5 days from now
	globals.DIALOGS.setDialogWidth(200);
	globals.DIALOGS.setDialogHeight(200);
	null;
	//plugins.WebClientUtils.getVersion()
	// won't show in load onShow if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
	//	plugins.WebClientUtils.executeClientSideJS('navigator.userAgent',globals.storeUserAgent,['navigator.userAgent']);
	//}

	if (application.isInDeveloper()){application.output("-----------------------");application.output('width = '+application.getScreenWidth())}
	scopes.prefs.sts = 'STSmobile';
	null;
	//rfGetLocalStorage('deviceName');
	//rfGetLocalStorage('deviceName');
	//rfGetLocalStorage('deviceName');
	//application.output("-----------------------");
	//application.output('begin retrieve local storage '+session.localStorage);
	//globals.rfTimerBrowser();
	var loc = new Date();
}
/**
 * @properties={typeid:24,uuid:"4AA8BF4F-DE1F-4389-A0FA-01053692FB7D"}
 */
function createPostGreSqlIndexes(){
	plugins.rawSQL.executeSQL('stsservoy','jobs',"CREATE INDEX CONCURRENTLY jobIndex ON jobs job_number ");
	plugins.rawSQL.executeSQL('stsservoy','idfiles',"CREATE INDEX CONCURRENTLY idfileIndex ON idfiles (piecemark_id,sequence_id) ");
	plugins.rawSQL.executeSQL('stsservoy','piecemarks',"CREATE INDEX CONCURRENTLY pcmkIndex ON piecemarks (sheet_id,parent_piecemark, piecemark, ) ");
	
	
}
/**
 * @properties={typeid:24,uuid:"519FB83A-5AB2-46E0-B1DC-FE990F4C124F"}
 */
function onSolutionClose(){
	scopes.fs.fabSuiteClose();
	scopes.prefs.bartenderClose(null)
}
/**
 * @properties={typeid:24,uuid:"121BE622-B186-4AF6-930D-A5A212D2EEB2"}
 */
function timedResize() {
	if (forms.STS_main){
		var event = null;
		forms.STS_main.onActionResize(event);
	}
}
/**
 * @properties={typeid:24,uuid:"B36BD55B-5C9C-4AB0-B5CF-4502EA177117"}
 */
function timedResizeScreens() {
	if (forms.rf_mobile_view){
		var event = null;
		forms.rf_mobile_view.onActionResize(event);
	}
}
/*
 * @properties={typeid:24,uuid:"15008C4C-F6F0-4FEA-BEA4-A08D24388298"}
 */
/**
 * @properties={typeid:24,uuid:"3F47B4C7-49F0-47B5-9AC2-4BD4923D5608"}
 */
function timedResizeLogin() {
	if (forms.secLoginExample){
		forms.secLoginExample.onActionResize();
	}
}