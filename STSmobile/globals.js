/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9598FC8E-1AD4-4CFB-9FA8-268369D74016"}
 */
var statusId = "";
/**
 * @properties={typeid:24,uuid:"0DB64EC0-13B7-49D6-93FA-FA6B2C780503"}
 * @AllowToRunInFind
 */
function onSolutionOpen(){
	if (false && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		var mobileURL = application.getServerURL()+'/servoy-webclient/ss/s/STSmobile';
		var status = application.showURL(mobileURL,'_blank','height=320,width=240,kiosk=yes,status=no,toolbar=no,menubar=no,location=no,resizable=no,titlebar=no');
		application.output('create url '+status);
	}
	//secSetCurrentApplication(secGetApplicationID(APPLICATION_NAME));
	secCurrentUserID = security.getUserUID();
	/**if (sec_current_user == null){
		/ * * @type {JSFoundSet<db:/stsservoy/users>} * /
		sec_current_user = databaseManager.getFoundSet('db:/stsservoy/users');
		if (sec_current_user.find()){
			sec_current_user.user_id = secCurrentUserID;
			sec_current_user.search();
		}
	}*/
	globals.secCurrentTenantID = sec_current_user.tenant_uuid;
	globals.mobTenantId = globals.secCurrentTenantID;
	globals.secCurrentAssociationID = globals.secGetAssociationID(secCurrentTenantID);
	globals.mobAssocId = globals.secCurrentAssociationID;
	globals.getAssociation(mobAssocId); //aMobAssocs[assocID];
	///globals.rfGetStationCodes();
	//application.setValueListItems('stsvlg_status_codes',globals.session.statusCodes);
	//secSetCurrentApplication(17); // 17 is already STS, could be anything
	
	globals.getMappings();
	globals.secCurrentUserName = security.getUserName();
	secSetCurrentTenant(secCurrentTenantID);
	//getTablesFilters(secCurrentTenantID);
	//globals.workersList();
	globals.mobLoggedEmployeeId = globals.getLoggedEmployee(secCurrentUserID);
	//application.setValueListItems('stsvlg_workers',globals.workersList())
	// set session id varibles
	scopes.globals.getLoggedEmployee(secCurrentUserID);
	session.program = "STS Mobile";
	session.sessionId = application.getIPAddress()+' '+security.getClientID();
	session.tenant_uuid = sec_current_user.tenant_uuid;
	session.associationId = globals.secGetAssociationID(session.tenant_uuid);
	if (session.associationId == null){
		session.associationId = secGetAssocID(secCurrentUserName);
	}
	session.association = m.assocs[session.associationId];
	session.login = security.getUserName();
	application.setValueListItems('stsvlg_location',globals.l.locations); // status codes for this association
	//application.output()
	application.setValueListItems('stsvlg_status_codes',globals.m.statusCodesDiv[session.associationId]); // status codes for this association
	globals.logger(true,'STS Mobile opened.');
	//application.setValueListItems('rfProgramList',['Transactions','Exit']);
	globals.getMenuList();
	globals.onStartLoadPrefs();
	globals.rfFunctionKeys("Main");
	//globals.functionKeyDescrip[0] = " ";
	// see: http://www.quartz-scheduler.org/docs/tutorials/crontrigger.html for more info
	// add a job that runs every 20 minutes after the hour (0,20,40)
	//plugins.scheduler.addCronJob('20mins', '0 0/20 * * * ?', method)
	// add a job that runs every day at 23:30 between now and 5 days from now
	null;
}

