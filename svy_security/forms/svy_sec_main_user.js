/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"621C6594-94D6-416C-9CDD-AC80CBCF4ABE",variableType:4}
 */
var administratorLevel = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} tab the selected tab
 *
 * @private
 *
 * @properties={typeid:24,uuid:"741BE025-38C4-4FF7-852D-B3A8302F568D"}
 */
function switchTab(event, tab) {
	var tabs = ['security', 'access', 'login_attempts'];
	
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
	
	elements.tab_security_details.tabIndex = 'tab_' + tab;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"94A8D00C-B6A2-43AC-91E1-1834B0905CE9"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	doSearch();
	
	if (firstShow) {
		enableDisableOwnerID();
		switchTab(null, 'access');
	}
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"50157ED7-A862-46F5-BC6B-9CBD93C37628"}
 */
function enableDisableOwnerID() {
	if (databaseManager.hasRecords(foundset.sec_user_to_sec_user_org)) {
		elements.owner_id.enabled = false;
	} else {
		elements.owner_id.enabled = true;
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E22D92A2-6A8C-4803-83DA-48A0F4D790C0"}
 */
function onRecordSelection(event) {
	enableDisableOwnerID();
	
	forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].setValueList();
	forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].filterOrganization();
	forms[globals.svy_utl_getFrameworkFormName('sec_main_user_security')].enableDisableForm();
}

/**
 * @properties={typeid:24,uuid:"EB802F59-7231-45FF-ACA8-33D9F81BE107"}
 * @AllowToRunInFind
 */
function doSearch() {
	if (forms[globals.svy_utl_getFrameworkFormName('sec_main')].searchArgument) {
		foundset.find();
		foundset.name_compound = '#%' + forms[globals.svy_utl_getFrameworkFormName('sec_main')].searchArgument + '%';
		foundset.search();
	} else {
		foundset.loadAllRecords();
	}
}
