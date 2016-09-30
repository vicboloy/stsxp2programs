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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3FB34AD4-F34D-421A-8D7F-7210A8CCA260"}
 */
var userAssociation = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3CBEE0B5-6C96-4E15-8587-1AF83B05C576"}
 */
var userIPAddress = "";
/**
 * @properties={typeid:35,uuid:"25DDD253-0645-4751-9E54-592D0F0A24DA",variableType:-4}
 */
var licenseDs = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C3400F32-EA9C-4FF3-B130-A1E526492014"}
 */
var userDuration = "";
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
	if (firstShow){
	}
	globals.setUserFormPermissions(event);
	userEmployeeName = globals.session.fullName;
	userEmployeeNum = globals.session.employeeNum;
	userEmployeeID = globals.session.employeeId;
	userName = globals.session.fullName;
	userLogin = globals.session.login;
	userLoginID = globals.session.loginId;
	userSessionId = globals.session.sessionId;
	userLoginDate = globals.session.loginDate;
	userProgram = globals.session.program;
	userIPAddress = globals.session.sessionIp;
	userAssociation = globals.session.association;
	userDuration = refreshLoginDuration();
	elements.tabless.visible = scopes.globals.showViewDetail;
	elements.lbl_who.visible = (elements.tabless.visible);
	
	//plugins.UserManager.Server().getServerProperties();
	if (elements.tabless.visible){createLicenseTable(event)}
	return _super.onShow(firstShow, event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"908D0CFA-585D-430E-80F4-C1E058E87151"}
 */
function onHide(event) {
	elements.tabless.removeAllTabs();
	history.removeForm('view_license_users1');
	solutionModel.removeForm('view_license_users1');
	globals.onActionCloseButton(event);
	return _super.onHide(event)
}
/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"698D54C1-82DC-4029-89CC-59B1E1ED1B0A"}
 */
function createLicenseTable(event){
	var canKill = false;
	if (globals.checkUserPermissions(globals.session.loginId)){
		canKill = true;
	}
	var clients = plugins.UserManager.getClients();
	///var currentDate = new Date();
	var currentMillis = new Date().getTime();
	var thisClientMillis = plugins.UserManager.Client().idle.getTime();
	thisClientMillis = plugins.UserManager.Client().idle.getTime();
	var timeAdjust = currentMillis - thisClientMillis;
	currentMillis = currentMillis - timeAdjust;
	
	
	var userTableHeaders = [i18n.getI18NMessage('table.general.active'),
							i18n.getI18NMessage('table.employee.name'),
							i18n.getI18NMessage('table.general.application.name'),
							i18n.getI18NMessage('table.general.ip.address'),
							i18n.getI18NMessage('table.general.idle.time'),
							i18n.getI18NMessage('table.employee.employee_number'),
							i18n.getI18NMessage('table.users.user_name'),
							i18n.getI18NMessage('table.associations.association_name'),
							i18n.getI18NMessage('table.general.user_uuid'),
							i18n.getI18NMessage('table.general.client.id'),
							i18n.getI18NMessage('table.general.application.type')
							];
	if (canKill){userTableHeaders.unshift(i18n.getI18NMessage('table.general.application.stop'));}
	licenseDs = databaseManager.createEmptyDataSet();
	var licenseDataFormat = [];
	var rowTemplate = [];
	for (var index = 0;index < userTableHeaders.length;index++){
		licenseDs.addColumn(userTableHeaders[index].replace(' ','_'),index+1,JSColumn.TEXT);
		rowTemplate.push(null);
		licenseDataFormat.push(JSColumn.TEXT);
	}
	for (index = 0;index < clients.length;index++){
		var clientId = clients[index].clientId;
		var clientInfo = plugins.UserManager.getClientByUID(clientId);
		var userIdleDate = clientInfo.idle;
		var userIdleMillis = userIdleDate.getTime();

		var idleSeconds = Math.floor((currentMillis-userIdleMillis)/1000);
		var idleText = "";
		var idleTime = idleSeconds/3600;
		if (idleTime >= 1){
			idleText = Math.floor(idleTime*10)/10+' hrs';
		} else {
			idleTime = idleSeconds/60;
			if (idleTime >= 1) {
				idleText = Math.floor(idleTime*10)/10+' min';
			} else {
				idleText = idleSeconds+' sec';
			}
		}
		var clientRow = rowTemplate.concat();
		var userLoginName = (!clients[index].userUid) ? "" : globals.m.userNames[clients[index].userUid];
		///var employeeName = (!clients[index].userUid) ? "" : globals.m.employeeNames[clients[index].userUid];
		var association = (!clients[index].userUid) ? "" : globals.m.assocs[globals.m.userAssocs[clients[index].userUid]];
		association = (!association) ? "" : association;// in the case of no association assigned to login
		if (canKill){
			clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.general.application.stop'))] = 'X';
		}
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.general.idle.time'))] = idleText;
		//clientRow[userTableHeaders.indexOf('IP')] = clients[index].hostAddress;
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.general.active'))] = (clients[index].alive) ? 'Active' : 'Inactive';
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.general.client.id'))] = clients[index].clientId;
		//clientRow[userTableHeaders.indexOf('Login')] = clients[index].userName;
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.general.application.type'))] = clients[index].applicationType;
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.general.application.name'))] = clients[index].solutionName;
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.general.user_uuid'))] = clients[index].userUid;
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.associations.association_name'))] = association;
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.general.ip.address'))] = clients[index].ipAddress;
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.employee.name'))] = (!globals.m.employeeNames[clients[index].userUid]) ? "" : globals.m.employeeNames[clients[index].userUid];
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.users.user_name'))] = userLoginName;
		clientRow[userTableHeaders.indexOf(i18n.getI18NMessage('table.employee.employee_number'))] = (!globals.m.employeeNumbers[clients[index].userUid]) ? "" : globals.m.employeeNumbers[clients[index].userUid];
		
		licenseDs.addRow(clientRow.concat([]));
	}
	var licenseDataSource = licenseDs.createDataSource('licenseData',licenseDataFormat);
	elements.tabless.removeAllTabs();
	var checkForm = solutionModel.newForm('view_license_users1',licenseDataSource,'sts_one',false,90,175);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	//checkForm.initialSort = 'shape asc';
	checkForm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_NEVER;
	///var client = clients[index];
	var killCode = "function onAction(event) {globals.killClient(event);}";
	if (canKill){
		var killMethod = checkForm.newMethod(killCode);
	}
	///var colWidth = 15; 
	var item; var columnPos = 0;
	
	for (index = 0;index < userTableHeaders.length;index++){
		var headerText = userTableHeaders[index];
		var label = userTableHeaders[index];

		item = checkForm.newLabel(headerText,columnPos,0,15,21);
	 	item.labelFor=label; item.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	item.toolTipText=label;

	 	if (headerText == 'Stop'){
			item = checkForm.newButton('X',columnPos,21,3,21,killMethod);
			item.name = label; item.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
			item.horizontalAlignment = SM_ALIGNMENT.CENTER;
	 	} else {
			item = checkForm.newTextField(label,columnPos,21,15,21);
			item.printSliding = SM_PRINT_SLIDING.GROW_WIDTH | SM_PRINT_SLIDING.ALLOW_MOVE_X;
			item.name = label; item.editable = false; item.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
			item.toolTipText = item.text;
	 	}
	}
	elements.tabless.addTab('view_license_users1');	
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"E041540E-F117-403E-A1A9-1DF37BCB986B"}
 */
function refreshLicenseTable(event){
	userDuration = refreshLoginDuration();
	form = forms['view_license'];
	form.elements.tabless.removeAllTabs();
	history.removeForm('view_license_users1');
	solutionModel.removeForm('view_license_users1');
	createLicenseTable(event);
}
/**
 * @properties={typeid:24,uuid:"8732D4EF-1E50-4CA5-9578-2CC179CA39C3"}
 */
function refreshLoginDuration(){
	var clientInfo = plugins.UserManager.Client();
	var currentTimeSec = Math.floor((new Date().getTime()/1000));
	var clientTimeSec = Math.floor(clientInfo.idle.getTime()/1000);
	var loginTimeSec = Math.floor(clientInfo.login.getTime()/1000);
	
	var timeDiff = currentTimeSec-clientTimeSec;

	var loggedSeconds = currentTimeSec - timeDiff - loginTimeSec;
	var loggedText = "";
	var loggedTime = loggedSeconds/3600;
	if (loggedTime >= 1){
		loggedText = Math.floor(loggedTime*10)/10+' hrs';
	} else {
		loggedTime = loggedSeconds/60;
		if (loggedTime >= 1) {
			loggedText = Math.floor(loggedTime*10)/10+' min';
		} else {
			loggedText = loggedSeconds+' sec';
		}
	}
	return loggedText;
}