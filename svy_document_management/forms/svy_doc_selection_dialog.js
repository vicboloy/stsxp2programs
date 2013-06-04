/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03742B09-8CD1-425D-A22A-AEA4D1698D06"}
 */
var btnClicked = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3E92D7D-88D7-4CA8-A032-20AEA8363805"}
 */
var buttonClicked = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"64134528-F326-40E6-8E23-8D56DA8DA88A"}
 */
var searchArgument = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E64594E9-A525-4298-A667-D5344D8139F4"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	forms[globals.svy_doc_group_selection_form]['btnCancel'] = 'cancel';
	buttonClicked = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0DEB8E7B-B2FD-4D23-AEED-6E308DA46D8D"}
 */
function onCancel(event) {
	buttonClicked = 'cancel';
	forms[globals.svy_doc_group_selection_form]['btnCancel'] = 'cancel';
	globals.svy_nav_closeForm(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C651C43-27E3-4500-9052-2F44A9196392"}
 */
function onSelect(event) {
	buttonClicked = 'select';
	forms[globals.svy_doc_group_selection_form]['btnCancel'] = 'select';
	
	// Select all the groups.
	forms[globals.svy_doc_group_selection_form]['groupNames'] = null;
	
	// This loop creates the security records for all the chosen groups. 
	var tempFoundset = forms['svy_doc_selection_dialog_sec_group'].foundset.duplicateFoundSet();
	for (var j = 1; j <= tempFoundset.getSize(); j++) {
		tempFoundset.setSelectedIndex(j);
		// If it is selected.
		if (tempFoundset['is_selected'] == 1) {
			forms[globals.svy_doc_group_selection_form]['groupNames'] = 
			forms[globals.svy_doc_group_selection_form]['groupNames'] + tempFoundset['name'] + '\n';
		}
	}
	
	globals.svy_nav_closeForm(event);
}
