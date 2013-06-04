/**
 * Array of elements that are not resized when onResize is fired
 * 
 * @protected 
 * 
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"56D96207-A289-41F2-9902-C598F3225A21",variableType:-4}
 */
var vNoResizeElements = new Array();

/**
 * @type {String}
 * 
 * @deprecated not used
 *
 * @properties={typeid:35,uuid:"A81BD166-35A8-4954-BE61-BA4CE0F2F0F0"}
 */
var lang = '';

/**
 * Datetime of the first login attempt
 * 
 * @type {Date}
 *
 * @protected 
 * 
 * @properties={typeid:35,uuid:"C08C3546-842A-4E22-B01B-C736A2F1A1AF",variableType:93}
 */
var vFirstLoginAttempt = null;

/**
 * The name of the framework DB
 * 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"307A47CA-B419-48A1-9012-475C555D74D7"}
 */
var vFramework_db = "svy_framework";

/**
 * Datetime of the last login attempt
 * 
 * @protected 
 * 
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9314A27B-DDB4-4CF1-B676-1848950F190C",variableType:93}
 */
var vLastLoginAttempt = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0ACC5B33-F147-4D5B-9960-1D2EF3510C0B"}
 */
var vOrganization = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E222CA2-8A17-4C8C-A6A8-70AE3A91DD20"}
 */
var vOwner = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D7FB5CF5-785A-4DB4-A602-FEC0F5AEC039"}
 */
var vPassword = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA8D79D9-9CF5-453A-800A-8834C44F4A07"}
 */
var vUser_db = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"02460DD3-8CDD-4F5D-9C16-65809202AFE2"}
 */
var vUser_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD3EA10A-E9BA-44BF-BA4D-BF7187C3DDC2"}
 */
var vUsername = null;

/**
 * Properties needed before login
 * 
 * @type {{propertyName: String, propertyValue: Object}}
 *
 * @properties={typeid:35,uuid:"62CFDF54-0683-498E-BA91-1B10466E72DB",variableType:-4}
 */
var vRuntimeProperties = new Object();

/**
 *	to exit the login screen
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * 
 * @properties={typeid:24,uuid:"428C304C-43FF-4A6E-A0EE-8AE380E8899E"}
 */
function exit()
{
	application.exit();
}

/**
 *	Method to let the user login, required is the group 'users' this method works with the sec_ tables
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * 
 * @properties={typeid:24,uuid:"D8926D19-CDE2-45FF-90A6-D8BB4B4B1165"}
 */
function login()
{
	var _connectionOK = security.authenticate('svy_sec_authenticate', 'svy_sec_checkConnection',[vFramework_db]);
	if (!_connectionOK) {
		plugins.dialogs.showWarningDialog("Can't login","Can't connect to the database. Please contact the administrator.","OK");
		return;
	}
	
	//check if we should check the hash
	var _validated = security.authenticate('svy_sec_authenticate', 'svy_sec_validateHash',[{owner:vOwner, framework_db:vFramework_db}])

	if (!_validated) {
		plugins.dialogs.showWarningDialog("Can't login","Somebody tampered with the security data. Logging in is not possible. Please contact the administrator.","OK");
		if (application.isInDeveloper()) {
			security.authenticate('svy_sec_authenticate', 'svy_sec_recalculateHash', [{owner:vOwner, framework_db:vFramework_db}]);
			plugins.dialogs.showWarningDialog("", "Developer: Hash recalculated, login again.", "OK");
		}
		return;
	}
	
	//check if user name and password are entered
	if((!vUsername) || (!vPassword) || (!vOwner))
	{
		elements.error.text = i18n.getI18NMessage('svy.fr.dlg.username_password_entered')
		return
	}
	
	if (!vFirstLoginAttempt) {
		vFirstLoginAttempt = new Date();
	}	
	
	// user is already choosing organization
	if (vUser_id) {
		// login the organization
		loginWithOrganization();
		return;
	}
	

	// Call authentication module/method, authentication is done on server not on the client.
	var _authObj = new Object();
	_authObj.username = vUsername.toLowerCase();
	_authObj.password = vPassword;
	_authObj.owner = vOwner;
	_authObj.firstLoginAttempt = vFirstLoginAttempt;
	_authObj.lastLoginAttempt = vLastLoginAttempt;
	_authObj.framework_db = vFramework_db;
	
	/** @type {{owner_id:String,user_id:String,error:String, success:Boolean}} */
	var _return = callCheckPassword(_authObj);
	if (_return.success) {
		// set user id
		globals.svy_sec_lgn_user_id = _return.user_id;

		// set owner id
		globals.svy_sec_lgn_owner_id = _return.owner_id;

		// get organizations, if there are multiple organizations for this user he has to choose his organization
		/** @type {JSDataSet} */
		var _dat_org = security.authenticate('svy_sec_authenticate', 'svy_sec_getOrganizations', [_return.user_id, _return.owner_id, vFramework_db])
		if (_dat_org.getMaxRowIndex() == 1) //only one organization
		{
			//login
			vUser_id = _return.user_id
			vOrganization = _dat_org.getValue(1, 2)
			loginWithOrganization()
		} else {
			// set organization valuelist
			vUser_id = _return.user_id
			application.setValueListItems('svy_lgn_organizations', _dat_org, true)
			elements.lbl_organization.visible = true
			elements.fld_organization.visible = true

			// enter the organization id
			if (getUserProperty(application.getSolutionName() + '.organization')) {
				vOrganization = getUserProperty(application.getSolutionName() + '.organization')
				elements.fld_passWord.requestFocus()
			} else {
				elements.fld_organization.requestFocus()
			}
		}

		setUserProperty(application.getSolutionName() + '.username', vUsername)
		setUserProperty(application.getSolutionName() + '.ownername', vOwner)
		elements.error.text = null;

		//for keeping track of logged in users per owner
		application.addClientInfo(_return.owner_id)
	} else {
		if (_return.error) {
			elements.error.text = i18n.getI18NMessage(_return.error)
		} else {
			elements.error.text = i18n.getI18NMessage('svy.fr.dlg.loginfailed')
		}
	}
	return;
}

/**
 *	Gets the username, sets the right focus, set the progress bar to 0
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * 
 * @properties={typeid:24,uuid:"51E9DE20-9E8F-4E77-8D63-996FFC0DF57A"}
 */
function onShow(firstShow, event, _startArgs) {
	onResize();

	if (!vOwner) {
		vOwner = getUserProperty(application.getSolutionName() + ".ownername");
	}

	var userName = getUserProperty(application.getSolutionName() + ".username");
	if (userName) {
		vUsername = userName;
		elements.fld_passWord.requestFocus(false);
		return;
	}
	
	elements.fld_userName.requestFocus(false);
}

/**
 * On focus gained password, empty error message
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * 
 * @properties={typeid:24,uuid:"4EEE3862-57A6-489D-B508-5BB24B60E287"}
 */
function onFocusGainedPassword()
{
	if (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT || application.getApplicationType() == APPLICATION_TYPES.RUNTIME_CLIENT) {
		capslockPressed();
	} else {
		elements.error.text = '';
	}
}

/**
 * Checks if CAPSLOCK is on (smart client only)
 * 
 * @author Joas de Haan
 * @since 2011-09-06
 * 
 * @properties={typeid:24,uuid:"0DD2A7FC-0490-4E38-B507-109471D6AC28"}
 */
function capslockPressed() {
	var _capsOn = Packages.java.awt.Toolkit.getDefaultToolkit().getLockingKeyState(Packages.java.awt.event.KeyEvent.VK_CAPS_LOCK);
	if (_capsOn) {
		elements.error.text = i18n.getI18NMessage("svy.fr.lbl.capslock_on");
	} else {
		elements.error.text = '';
	}
}

/**
 * Set the progress bar not visible in webclient
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"949B82BF-8C74-4912-BCA1-84F658AD3774"}
 */
function onLoad(event)
{
	// get relevant properties on application level, since the relevant user is not yet known
	var requiredPropertyNames = ["hide_menu_bar", "force_window_size", "framework_window_size_height", "framework_window_size_width", application.getSolutionName() + ".ownername", application.getSolutionName() + ".username", application.getSolutionName() + ".organization"];
	globals.svy_lgn_properties = security.authenticate("svy_sec_authenticate", "svy_auth_getProperties", [requiredPropertyNames]);
	
	mergeProperties(requiredPropertyNames);
	
	var _solutionLoadedBefore = getUserProperty(application.getSolutionName() + "_loaded");
	setUserProperty(application.getSolutionName() + "_loaded", true);
	
	// Hide menu bar
	if (!application.isInDeveloper() && globals.svy_lgn_properties["hide_menu_bar"] == 1) {
		plugins.window.getMenuBar().removeAllMenus();
	}
	
	var windowWidth = globals.svy_lgn_properties["framework_window_size_width"];
	var windowHeight = globals.svy_lgn_properties["framework_window_size_height"];
	var forceWindowSize = globals.svy_lgn_properties["force_window_size"]*1;
	
	if ( (forceWindowSize || _solutionLoadedBefore != "true") && windowWidth && windowHeight) {
		application.getWindow().setSize(windowWidth * 1, windowHeight * 1);
	}
	  
	if (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT || application.getApplicationType() == APPLICATION_TYPES.RUNTIME_CLIENT) {
		plugins.window.createShortcut('CAPS_LOCK', capslockPressed, controller.getName());
	}

	// set autologin key in developer
	if (application.isInDeveloper()) {
		plugins.window.createShortcut('alt L', autoLoginDeveloper, controller.getName());
	}
	
	// retrieve the owner_id and db-servernames from the deeplink - will not work in developer
	if (globals.svy_sec_l_startArg) {
		var _args = globals.svy_sec_l_startArg.split("|");

		var _owner_id = _args[0];
		if (_args[1]) {
			vUser_db = _args[1];
		}
		if (_args[2]) {
			vFramework_db = _args[2];
		}

		application.output("Owner Id " + _owner_id, LOGGINGLEVEL.WARNING)

		var _owner = security.authenticate('svy_sec_authenticate', 'svy_sec_getOwnerName', [_owner_id, vFramework_db])
		if (_owner) {
			vOwner = _owner
		}
		application.output("Owner " + _owner, LOGGINGLEVEL.WARNING)
		if (vOwner) // if owner is known, don't allow selection
		{
			elements.fld_owner.enabled = false
		}
	}

	// hide organization fields
	elements.lbl_organization.visible = false;
	elements.fld_organization.visible = false;
	
	// remove toolbars
	application.setToolbarVisible('text', false);
	application.setToolbarVisible('edit', false);
}

/**
 * Merges the application level properties with the 
 * values stored locally in the properties file or cookie
 * and stores them in the form variable vRuntimeProperties<p>
 * 
 * After successful login, these properties should be stored
 * again in the properties file or cookie
 * 
 * @param {Array<String>} propertyNames
 *
 * @properties={typeid:24,uuid:"84745D18-202B-46ED-8828-DE80B761C3BF"}
 */
function mergeProperties(propertyNames) {
	for (var i = 0; i < propertyNames.length; i++) {
		var storedValue = getUserProperty(propertyNames[i]);
		if (storedValue != null) {
			globals.svy_lgn_properties[propertyNames[i]] = storedValue;
		}
	}
}

/**
 * @properties={typeid:24,uuid:"59F0F6F6-D839-4090-887C-C332DB0FCF51"}
 */
function autoLoginDeveloper() {
	if (application.isInDeveloper()) {
		vUsername = 'superuser';
		vPassword = 'superuser';
		vOwner = 'Servoy';
		login();

		if (elements.fld_organization.visible && vOrganization) {
			login();
		}
		
		// Remove auto login shortcut
		plugins.window.removeShortcut('alt L', controller.getName());
	}
}

/**
 * @param {Object} [_oldValue]
 * @param {Object} [_newValue]
 * @properties={typeid:24,uuid:"8F145806-1443-43A1-A6ED-0BB7497A6B12"}
 */
function loginWithOrganization(_oldValue, _newValue) {
	// save organization id
	setUserProperty(application.getSolutionName() + '.organization', vOrganization);
	globals.svy_sec_lgn_organization_id = vOrganization;

	// login
	var _user_org_id = security.authenticate('svy_sec_authenticate', 'svy_sec_login', [vUsername, vUser_id, vOrganization, vFramework_db]);

	if (_user_org_id == globals.zero_uuid) {
		globals.svy_sec_lgn_user_org_id = 0
		return true;
	} else if (_user_org_id) {
		globals.svy_sec_lgn_user_org_id = _user_org_id;
		return true;
	}

	return false;
}

/**
 * @properties={typeid:24,uuid:"3AC0B00E-5BA2-47AF-8490-F48AA8D2E2B4"}
 */
function loginDeeplinkTest() {
//	security.logout('sampleuse_navigation','svy_sec_openLink','cf0df836-ddf4-4ecd-8b8e-b602d4f8303c|example_data|svy_framework');
	security.logout('sampleuse_navigation','svy_sec_openLink','cf0df836-ddf4-4ecd-8b8e-b602d4f8303c');
}

/**
 * Callback method when form is resized.
 *
 * @properties={typeid:24,uuid:"A0A85D65-5C32-438D-8965-2ADEA2BB235A"}
 */
function onResize() {
	var _height = application.getWindow().getHeight()
	var _width = application.getWindow().getWidth()
	
	var _org_height = 600
	var _org_width = 1000
	
	var _hResize = (_org_height - _height) / 2
	var _wResize = (_org_width - _width) / 2
	
	var _elements = elements.allnames
	var _component
	var _jsForm = solutionModel.getForm(controller.getName())
	
	for (var i = 0; i < _elements.length; i++) {
		_component = _jsForm.getComponent(_elements[i])
		
		if(vNoResizeElements.indexOf(_component.name) == -1 )
		{
			elements[_elements[i]].setLocation(_component.x - _wResize, _component.y -_hResize )
		}
	}
}

/**
 * @param {String} _propertyName
 * @param {Object} _value
 * 
 * @properties={typeid:24,uuid:"C318F58D-DA89-4474-AC79-F0D182B636B3"}
 */
function setUserProperty(_propertyName, _value) {
	/** @type {String} */
	var value = _value;
	if (!(value instanceof String)) {
		value = JSON.stringify(_value);
	}
	globals.svy_lgn_properties[_propertyName] = _value;
	application.setUserProperty(_propertyName, value);
}

/**
 * @param {String} _propertyName
 * 
 * @return {Object} value
 * 
 * @properties={typeid:24,uuid:"0830CDC0-5AB6-4165-92B1-6CD8CC09BF67"}
 */
function getUserProperty(_propertyName) {
	return application.getUserProperty(_propertyName);
}

/**
 * @since 10/10/2012
 * @author Sanneke
 * @properties={typeid:24,uuid:"79D00533-9BDA-4FEE-85E2-EAF551073FAF"}
 */
function callCheckPassword(_authObj) {
	return security.authenticate('svy_sec_authenticate', 'svy_sec_checkUserPassword',[_authObj])
}
