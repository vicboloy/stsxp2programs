/**
 * TODO fix SVY-4074
 * This dummy variable is used as data provider to some fields.
 * It is used as a work around for the web client, when clicking on the + button on security forms don't trigger method
 * 
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"491C7C61-8DE4-4567-800B-DB1F08586FC6",variableType:4}
 */
var svy_sec_dummy = null;

/**
 * @type {String}
 * 
 * @deprecated use globals.svy_sec_lgn_user_org_id instead
 *
 * @properties={typeid:35,uuid:"A06CA15F-EB8E-45CE-84CD-4CAB2206818D"}
 */
var svy_sec_user_org_id = null;

/**
 * @type {String}
 * 
 * @deprecated use globals.svy_sec_lgn_organization_id instead
 *
 * @properties={typeid:35,uuid:"EB905850-F738-4983-9ED7-2E0252406BC7"}
 */
var svy_sec_organization_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C885B180-20B3-46E1-AA9A-7E59B46B35AF"}
 */
var svy_sec_version = '4.0.0';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"94ff1cba-f5e1-4d77-85ad-a197636e6a7f"}
 */
var svy_sec_trigger_form = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6cf6db37-b7f7-4016-ab30-bc248cfbe03c",variableType:93}
 */
var svy_sec_currentdate;

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 *
 * @properties={typeid:35,uuid:"676f7c2b-dc60-4227-a727-1533373d0320"}
 */
var svy_sec_element_id = '0';

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 *
 * @properties={typeid:35,uuid:"fcdbb390-483c-49d7-9508-ba2e0ec48608"}
 */
var svy_sec_elt_id = '';

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 *
 * @properties={typeid:35,uuid:"bd4e5729-f3e2-4fe6-8981-f2a98b74ed6d"}
 */
var svy_sec_form_id = null;

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 *
 * @properties={typeid:35,uuid:"c29792c7-0035-40c0-a1e5-6b0f3f1c6313"}
 */
var svy_sec_group_id = '';

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 *
 * @properties={typeid:35,uuid:"5505460c-4525-4f8a-8da9-9fef2e5bf815"}
 */
var svy_sec_mod_id = '';

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. use globals.svy_sec_lgn_owner_id instead
 *
 * @properties={typeid:35,uuid:"f3b4d3d5-1882-4a1e-93bc-20764b4c0985"}
 */
var svy_sec_owner_id = '';

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. use globals.svy_sec_lgn_owner_id instead
 *
 * @properties={typeid:35,uuid:"1998b701-1e71-4bf0-bf50-b651f2d70739"}
 */
var svy_sec_security_key_id = '';

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 * 
 * @properties={typeid:35,uuid:"4f7750f9-2284-479e-8fea-58d9be7de8b9"}
 */
var svy_sec_user_id = '';

/**
 * @type {String}
 * 
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 *
 * @properties={typeid:35,uuid:"dde4c6e9-e33b-4de7-9195-cc96cc585cf6"}
 */
var svy_sec_username = '';

/**
 * @type {String}
 * 
 * @deprecated not used anywhere
 *
 * @properties={typeid:35,uuid:"567f5c2c-613f-43d9-a634-40a2d54faca0"}
 */
var svy_sec_view_mode = '';

/**
 *	Deletes a record
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"cc95218e-1079-4faf-98d2-4dec24ffca83"}
 */
function svy_sec_deleteRecord(_event) {
	var _form = _event.getFormName();
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no);
	if (_answer == _ok) {
		forms[_form].controller.deleteRecord()
	}
}

/**
 *	Get all the keys where the logged in user has rights for, result a string of all the keys in the variable globals.sec_keys
 *
 * @author Sanneke Aleman
 * @since 2008-11-04
 * @return  none
 * 
 * @deprecated Will be removed in version 5. Use {@link #scopes#svySecurityManager#getSecurityKeysIds} instead
 *
 * @properties={typeid:24,uuid:"688d0322-0396-4431-a3b9-c7f01eedbb53"}
 * @SuppressWarnings(deprecated)
 */
function svy_sec_getSecurityKeys() {
	var keyIds = scopes.svySecurityManager.getSecurityKeysIds();
	globals.sec_keys = "'" + keyIds.join("','") + "'";
}

/**
 *	Set the security on servoy elements by using security.setSecuritySettings()
 *  This method relies on the method svy_sec_getSecurityKeys to return correct keys
 *
 * @author Sanneke Aleman
 * @since 2008-11-04
 * 
 * @deprecated Will be removed in version 5. Use {@link #scopes#svySecurityManager#setSecuritySettings} instead
 *
 * @properties={typeid:24,uuid:"e09dfdec-b5b9-4a1c-b97a-f1c41a1fe3d5"}
 */
function svy_sec_setElementRightsWithKeys() {
	scopes.svySecurityManager.setSecuritySettings();
}

/**
 *	Creates a new record
 *
 * @author Sanneke Aleman
 * @since 2008-11-04
 * @param {JSEvent} [_event]
 * @param {String} [_form]
 * 
 * @deprecated not used anywhere
 *
 * @properties={typeid:24,uuid:"6b0f56d6-f667-4a00-b962-2b93076198d9"}
 */
function svy_sec_newRecord(_event, _form) {

	if (_form == undefined) {
		_form = _event.getFormName()
	}
	
	forms[_form].controller.newRecord()	
}

/**
 *	Counts days to a date
 *
 * @author Sanneke Aleman
 * @since 2008-11-04
 * @param {Date} _date
 * @param {Number} _numberOfDays nr of days (can be negative)
 * @return {Date} date + nr of days   (attention, time will be set to 0)
 * 
 * @deprecated use scopes.modUtils$date.addDays() instead
 *
 * @properties={typeid:24,uuid:"5dae3b1c-f2d2-4924-806c-806a62879ed0"}
 */
function svy_sec_datePlusDays(_date, _numberOfDays) {
	var _millisPerDay = 86400000
	if (_date.getHours() + _date.getMinutes() + _date.getSeconds() + _date.getMilliseconds() != 0) {
		_date.setHours(0)
		_date.setMinutes(0)
		_date.setSeconds(0)
		_date.setMilliseconds(0)
	}

	var _millis = _date.valueOf() + _numberOfDays * _millisPerDay + 60 * 60 * 1000 // add 1 hour summertime
	var _returnDate = new Date(_millis)

	_returnDate.setHours(0)
	_returnDate.setMinutes(0)
	_returnDate.setSeconds(0)
	_returnDate.setMilliseconds(0)

	return _returnDate
}

/**
 *	Gets the owner id, supposed to be changed, to be used with deeplinking
 *
 * @author Sanneke Aleman
 * @since 2008-11-04
 * @return owner id
 * 
 * @deprecated not used anywhere
 *
 * @properties={typeid:24,uuid:"c580d0b4-1346-454d-a716-60ffd5386c14"}
 */
function svy_sec_getOwnerId() {
	return globals.svy_sec_lgn_owner_id;
}

/**
 * @deprecated use scopes.svySecurityManager.filterTables() 
 * 
 * @properties={typeid:24,uuid:"2D873811-6DCA-400D-94E8-975193074983"}
 */
function svy_sec_setTableFilters() {
	scopes.svySecurityManager.filterTables();
}

/**
 * @param {JSRecord} [rec]
 * @param {String} [_server]
 * 
 * @deprecated use scopes.svySecurityManager.updateSecurityHash([record], [serverName]) instead
 * 
 * @properties={typeid:24,uuid:"9D373EE4-3CD7-4576-BA4F-8B85EE7AFCD6"}
 */
function svy_sec_saveHash(rec, _server) {
	scopes.svySecurityManager.updateSecurityHash(rec, _server);
}

/** 
 * @author Joas de Haan
 * @param {String} _ownerName
 * @param {String} _serverName
 * 
 * @deprecated use scopes.svySecurityManager.verifySecurityHash
 * 
 * @properties={typeid:24,uuid:"1985C723-26C4-4E81-977C-2246E72F5E2A"}
 * @AllowToRunInFind
 */
function svy_sec_checkHash(_ownerName, _serverName) {
	return scopes.svySecurityManager.verifySecurityHash(_ownerName,_serverName);
}

/**
 * Method that determines if the security hash should be checked.
 * If this method returns true, the framework will create a hash of the data in the security tables and save that in sec_owner.hash
 * The hash will be checked at login.
 * If the security data is changed from outside of Servoy, the hash is not correct and users can't login anymore.
 * This prevents users from giving themselves more privileges by meddling with the database.
 * 
 * @author Joas de Haan
 * @returns Boolean
 * 
 * @deprecated use scopes.svySecurityManager.PERFORM_HASH_CHECKS instead
 * 
 * @properties={typeid:24,uuid:"25BE23F4-8F56-4CE9-98C8-F99DAEFE5B93"}
 */
function svy_sec_needHashCheck() {
	return scopes.svySecurityManager.PERFORM_HASH_CHECKS; //Return true in this method to enable security hash check
}

/**
 * @param {JSRecord<db:/svy_framework/sec_user>} _rec_user
 * @param {String} _password 
 * @param {String} _password_control
 * 
 * @return {String} errorMessage or null if no error occured
 * 
 * @deprecated either use scopes.svySecurityManager.User().changePassword() or the entity method on sec_user
 * 
 * @properties={typeid:24,uuid:"E172C36E-E9C7-4540-BF1A-9DC24E907EF6"}
 */
function svy_sec_setUserPassword(_rec_user, _password, _password_control) {
	// new password and retype have to be the same
	if (_password != _password_control) {
		return i18n.getI18NMessage('svy.fr.dlg.password_not_equal')
	}
	/** @type {JSFoundSet<db:/svy_framework/sec_user>} */
	var fs = _rec_user.foundset;
	
	try {
		fs.changePassword(_password,_rec_user);
	} catch(e) {
		/** @type {scopes.modUtils$exceptions.SvyException} */
		var exception = e;
		return exception.getMessage();
	}
	
	return null;
}

/**
 * This method will build a selection dialog for the specified foundset
 * 
 * @author Vincent Schuurhof
 * @since 2011-07-09
 * 
 * @param {String} dataSource the data source on which the selection dialog will be based
 * @param {JSDataSet} displayDataSet the data set with primary keys which will be used to display a foundset
 * @param {Array} returnDataProviders the data providers which will be returned after selection
 * @param {Array<String>} displayDataProviders the data providers which should be displayed in the dialog
 * @param {Array<String>} displayDataProviderTitles the title of each displayed data provider
 * @param {Array<Number>} displayDataProvidersWidth the width of the each displayed data provider
 * @param {Number} dialogHeight the height of the selection dialog
 * @param {Boolean} multiSelect flag if multiple records can be selected
 * 
 * @properties={typeid:24,uuid:"42AA7130-B12F-48C4-ABF4-C128B12FBAFA"}
 */
function svy_sec_showSelectionDialog(dataSource, displayDataSet, returnDataProviders, displayDataProviders, displayDataProviderTitles, displayDataProvidersWidth, dialogHeight, multiSelect) {
	if (displayDataSet.getMaxRowIndex() == 0) {
		globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.excuse_me', i18n.getI18NMessage('svy.fr.dlg.no_records_to_select'), i18n.getI18NMessage('svy.fr.lbl.ok'));
		return null;
	}
	
	var tableName = databaseManager.getDataSourceTableName(dataSource);
	var formName = 'svy_sec_selection_dialog_' + tableName;
	
	if (history.removeForm(formName)) {
		solutionModel.removeForm(formName);
	}
	
	var form = solutionModel.cloneForm(formName, solutionModel.getForm('svy_sec_selection_dialog'));
	form.dataSource = dataSource;
	form.styleName = 'security';
	
	var x = 0;
	
	// if multi-select then add a selection check box
	if (multiSelect) {
		var _dn = solutionModel.getDataSourceNode(dataSource)
		_dn.removeCalculation('is_selected')
		_dn.newCalculation('function is_selected() { return; }', JSVariable.INTEGER)
		
		var selectionField = form.newField('is_selected', JSField.CHECKS, x, 22, 20, 20);
		selectionField.name = 'is_selected';
		selectionField.borderType = 'EmptyBorder, 0, 0, 0, 0';
		selectionField.transparent = true;
		selectionField.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.SOUTH;
		
		var selectionHeader = form.newLabel(null, x, 0, 20, 20);
		selectionHeader.labelFor = 'is_selected';
		selectionField.styleClass = 'table';
		selectionHeader.transparent = false;
		x += 20;
	}
	
	// add data providers to the form
	for (var i = 0; i < displayDataProviders.length; i++) {
		var field = form.newField(displayDataProviders[i], JSField.TEXT_FIELD, x, 20 , displayDataProvidersWidth[i], 20);
		field.name = displayDataProviders[i];
		field.editable = false;
		field.styleClass = 'table';
		field.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST | SM_ANCHOR.WEST;
		
		var header = form.newLabel(displayDataProviderTitles[i], x, 0, displayDataProvidersWidth[i], 20);
		header.labelFor = displayDataProviders[i];
		header.styleClass = 'table';
		header.horizontalAlignment = SM_ALIGNMENT.LEFT;
		header.transparent = false;
		header.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST | SM_ANCHOR.WEST;
		
		x += displayDataProvidersWidth[i];
	}
	
	forms[formName].controller.recreateUI();
	forms[formName].foundset.loadRecords(displayDataSet);
	
	if (multiSelect) {
		for (var j = 1; j <= forms[formName].foundset.getSize(); j++) {
			forms[formName].foundset.setSelectedIndex(j);
			forms[formName].foundset['is_selected'] = 0;
		}
	}
	
	globals.DIALOGS.showFormInModalDialog(forms[formName], null, null, x, dialogHeight, i18n.getI18NMessage('svy.fr.lbl.selection'), true, false, formName + '_dialog');
	
	return forms[formName].buttonClicked;
}

/**
 * Checks if the user has rights to a key
 * The key can be provided by its ID or name
 * 
 * @param {String|Number} _key
 * 
 * @return {Boolean} true if user has key otherwise false
 * 
 * @deprecated Will be removed in version 5. Use {@link #scopes#svySecurityManager#hasKey()}
 * 
 * @properties={typeid:24,uuid:"CA43F6D9-21B2-4879-9700-B07742DF1504"}
 */
function svy_sec_hasKey(_key) {
	return scopes.svySecurityManager.hasKey(_key);
}

/**
 * Set the user and owner globals. also check if the password is still valid
 * @properties={typeid:24,uuid:"DD8685C2-ABF2-4CED-95E4-E70633DA7708"}
 * @AllowToRunInFind
 */
function svy_sec_setUserAndOwner() {
	globals["svy_sec_user_id"] = globals["user_id"] = globals.svy_sec_lgn_user_id;
//	globals.svy_sec_username = security.getUserName()
	
	// get the record so it is editable
	/** @type {JSFoundSet<db:/svy_framework/sec_user>} */
	var _foundset = databaseManager.getFoundSet(globals.nav_db_framework, 'sec_user')
	var _rec
	if(_foundset.find())
	{	
		_foundset.user_id = globals.svy_sec_lgn_user_id
		_foundset.search()
		_rec = _foundset.getRecord(1)	
	}
	
	globals["owner_id"] = globals["svy_sec_owner_id"] = _rec.owner_id
 
	 //set valuelistOwner id
	 if(globals['vlt_owner_id']) globals['vlt_owner_id'] = globals.svy_sec_lgn_owner_id
	
	//check if the password is expired
	globals.svy_sec_currentdate = new Date()
	if(!databaseManager.hasRecords(_rec.sec_user_to_sec_user_password$current_date)) //password is expired, show dialog to change password
	{
		globals.DIALOGS.showFormInModalDialog(forms.svy_sec_password_new_login);
	}
	_rec.times_wrong_login = null
}

/**
 * @deprecated not used anywhere
 * 
 * @properties={typeid:24,uuid:"2ED4248A-AA46-4CCC-89A1-91DE40D1DB32"}
 */
function sec_onOpen() {
	
	globals.svy_sec_setUserAndOwner()
	
	//set the security for the elements
	scopes.svySecurityManager.loadSecurityKeys();
	scopes.svySecurityManager.setSecuritySettings();
	scopes.svySecurityManager.filterTables();
}

/**
 * @properties={typeid:24,uuid:"FF6782CD-77A0-44A4-9898-51C533D7AA7A"}
 */
function svy_sec_showSecurityConfigurator() {
	globals.DIALOGS.showFormInModalDialog(forms.svy_sec_main)
}

/**
 *	Key shortcut 4 to open the security window
 *
 * @author Sanneke Aleman
 * @since 2008-05-24
 * @return  none
 *
 * @properties={showInMenu:true,typeid:24,uuid:"2733B6BA-3033-4EAB-9BF6-778D4FB555F2"}
 */
function _4_svy_sec_openSecurityDialog() {
	if (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER) {
		globals.DIALOGS.showFormInModalDialog(forms.svy_sec_main, -1, -1, -1, -1, "Security Configurator", true, false, 'SecurityDialog')
	}
}
