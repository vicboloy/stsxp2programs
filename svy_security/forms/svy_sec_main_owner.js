/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C63C872D-E99A-4BD2-836E-2B43E629967B",variableType:4}
 */
var fv_password_timespan_before_lock = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"573907B9-F9B1-44ED-B9F9-3FB59ACD085C",variableType:4}
 */
var fv_password_lock_user_after_number_of_attempts = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"39B8B58A-D51F-4735-934A-B3381B113A14",variableType:4}
 */
var fv_password_input_interval = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D87E5459-6236-4B3E-B27D-5BDC144F4CB1",variableType:4}
 */
var fv_password_number_unique_before_reuse = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5983CC1E-CB93-434C-8A88-D12383870B27",variableType:4}
 */
var fv_password_renewal_interval = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"29F39E30-5E56-4CF3-879B-B588715BB3B3",variableType:4}
 */
var fv_password_must_not_start_with_user_name = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B492384A-B17E-45AD-B3F3-FF8157AFA397",variableType:4}
 */
var fv_password_numbers_and_letters = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0056E2C7-6480-4AF7-9CEC-EF96F3AD5EB5",variableType:4}
 */
var fv_password_minimum_length = null;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"B926347F-0A97-47C7-98CB-481C5F3ED3F1",variableType:8}
 */
var fv_password_maximum_length = null;

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B15650AA-CCE6-4B9A-8409-549E4EE99BF8"}
 */
function onRecordSelection(event) {
	forms[globals.svy_utl_getFrameworkFormName("sec_main_owner_key_applied_tbl")].loadRecords();
	var propValues = scopes.svyProperties.getRuntimeProperties(scopes.svySecurityManager.ADMIN_LEVEL.TENANT_MANAGER, ["password_minimum_length", "password_maximum_length", "password_numbers_and_letters", "password_must_not_start_with_user_name", "password_renewal_interval", "password_number_unique_before_reuse", "password_input_interval", "password_lock_user_after_number_of_attempts", "password_timespan_before_lock"], owner_id);
	if (propValues) {
		function findValue(givenValue) {
			function filter(x) {
				return x.propertyName == givenValue;
			}
			var result = propValues.filter(filter);
			if (result && result.length > 0) {
				return result[0].value ? result[0].value : null;
			} else {
				return null;
			}
		}
		fv_password_minimum_length = findValue("password_minimum_length");
		fv_password_maximum_length = findValue("password_maximum_length");
		fv_password_numbers_and_letters = findValue("password_numbers_and_letters");
		fv_password_must_not_start_with_user_name = findValue("password_must_not_start_with_user_name");
		fv_password_renewal_interval = findValue("password_renewal_interval");
		fv_password_number_unique_before_reuse = findValue("password_number_unique_before_reuse");
		fv_password_input_interval = findValue("password_input_interval");
		fv_password_lock_user_after_number_of_attempts = findValue("password_lock_user_after_number_of_attempts");
		fv_password_timespan_before_lock = findValue("password_timespan_before_lock");
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} tab the selected tab
 * 
 * @private
 *
 * @properties={typeid:24,uuid:"A7A84194-6AD9-48D0-8B06-A5FAA88138CB"}
 */
function switchTab(event, tab) {
	var tabs = ['organizations', 'modules'];
	
	for (var i = 0; i < tabs.length; i++) {
		if (tabs[i] == tab) {
			elements['tab_left_' + tabs[i]].setImageURL('media:///tab_blue_left.png');
			elements['tab_right_'+ tabs[i]].setImageURL('media:///tab_blue_right.png');
			elements['tab_'+ tabs[i]].setImageURL('media:///tab_blue_btw.png');
			elements['lbl_'+ tabs[i]].setFont('Verdana, 1, 10');
			elements['lbl_'+ tabs[i]].fgcolor = '#ffffff';
		} else {
			elements['tab_left_'+ tabs[i]].setImageURL('media:///tab_grey_left.png');
			elements['tab_right_'+ tabs[i]].setImageURL('media:///tab_grey_right.png');
			elements['tab_'+ tabs[i]].setImageURL('media:///tab_grey_btw.png');
			elements['lbl_'+ tabs[i]].setFont('Verdana, 0, 10');
			elements['lbl_'+ tabs[i]].fgcolor = '#000000';
		}
	}
	
	elements.tab_organizations_modules.tabIndex = 'tab_' + tab;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"03376405-243C-4E9C-848B-60D507462CE2"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow) {
		switchTab(null, 'organizations');
	}
	
	doSearch();
}

/**
 * @properties={typeid:24,uuid:"9D251427-5AE4-4385-ACCC-16770BF2F912"}
 * @AllowToRunInFind
 */
function doSearch() {
	if (forms[globals.svy_utl_getFrameworkFormName("sec_main")].searchArgument) {
		foundset.find();
		foundset.name = '#%' + forms[globals.svy_utl_getFrameworkFormName("sec_main")].searchArgument + '%';
		if (!foundset.search()) {
			forms[globals.svy_utl_getFrameworkFormName("sec_main_owner_key_applied_tbl")].loadRecords();
		}
	} else {
		foundset.loadAllRecords();
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2CAAB221-49C2-4058-BD64-A4556E056B3B"}
 */
function onDataChange_password_rule(oldValue, newValue, event) {
	/** @type {RuntimeTextField} */
	var runtimeElement = forms[event.getFormName()].elements[event.getElementName()];
	var dataproviderName = runtimeElement.getDataProviderID();
	dataproviderName = dataproviderName.replace("fv_","");
	scopes.svyProperties.setPropertyValue(dataproviderName, newValue, scopes.svySecurityManager.ADMIN_LEVEL.TENANT_MANAGER, owner_id, owner_id);
	return true
}
