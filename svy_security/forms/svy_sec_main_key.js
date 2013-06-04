/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A25261C-8182-44ED-BCC7-2C8C1C47D495",variableType:4}
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
 * @properties={typeid:24,uuid:"065F0421-41EC-4AC5-8F26-D5851E3F217B"}
 */
function switchTab(event, tab) {
	var tabs = ['rights', 'owners_modules', 'users_groups'];
	
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
 * @properties={typeid:24,uuid:"9887996A-6597-435C-AF1C-21EC62AD922A"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow) {
		switchTab(null, 'rights');
	}
	
	doSearch();
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F8551C6B-82A0-468D-A0F1-116F73E08201"}
 */
function onRecordSelection(event) {
	forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_applied_tbl")].loadRecords();
}

/**
 * @properties={typeid:24,uuid:"02CA5246-7151-498C-813F-6DD2861FB36F"}
 * @AllowToRunInFind
 */
function doSearch() {
	if (forms[globals.svy_utl_getFrameworkFormName("sec_main")].searchArgument) {
		foundset.find();
		foundset.name = '#%' + forms[globals.svy_utl_getFrameworkFormName("sec_main")].searchArgument + '%';
		if (!foundset.search()) {
			forms[globals.svy_utl_getFrameworkFormName("sec_main_key_owner_applied_tbl")].loadRecords();
		}
	} else {
		foundset.loadAllRecords();
	}
}
