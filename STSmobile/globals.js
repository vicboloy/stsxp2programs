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
	globals.secCurrentUserName = security.getUserName();
	//secSetCurrentApplication(17); // 17 is already STS, could be anything
	secSetCurrentTenant(secCurrentTenantID);
	//getTablesFilters(secCurrentTenantID);
	application.setValueListItems('stsvlg_location',globals.locationList());
	globals.workersList();
	globals.mobLoggedEmployeeId = globals.getLoggedEmployee(secCurrentUserID);
	//application.setValueListItems('stsvlg_workers',globals.workersList())
	// set session id varibles
	scopes.globals.getLoggedEmployee(secCurrentUserID);
	session.program = "STS Mobile";
	session.sessionId = application.getIPAddress()+' '+security.getClientID();
	session.tenant_uuid = globals.secCurrentTenantID;
	globals.logger(true,'STS Mobile opened.');
	null;
}
/**
 * @properties={typeid:24,uuid:"3316A630-8C62-43FA-B62D-13B0A3F2EEC5"}
 */
function exitMobileClient(){
	application.exit();
}
/**
 * TODO generated, please specify type and doc for the params
 * @param elName
 *
 * @properties={typeid:24,uuid:"B2E71CCF-182A-4357-88DA-BF2547ED47C5"}
 */
function showElement(elName,sequence){
	forms.rf_transactions.elements[elName].enabled = true;
	//forms.rf_transactions.setTabSequence(sequence);
}

