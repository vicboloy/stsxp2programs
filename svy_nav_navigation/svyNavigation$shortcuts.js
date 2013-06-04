/**
 * Enumeration of possible actions on a svy_nav_base form instance
 * 
 * @enum
 * @properties={typeid:35,uuid:"98205F67-3CBC-4562-9D39-CFFBF75C9682",variableType:-4}
 */
var ACTION = {
	NEW: "dc_new",
	EDIT: "dc_edit",
	DELETE: "dc_delete",
	CANCEL: "dc_cancel",
	DUPLICATE: "dc_duplicate",
	FIND: "dc_find",
	SORT: "dc_sort",
	SAVE: "dc_save",
	CLOSE_TAB: "dc_closeTab",
	EXPORT: "dc_export",
	HELP: "dc_help",
	RECORD_FIRST: "dc_recFirst",
	RECORD_NEXT: "dc_recNext",
	RECORD_LAST: "dc_recLast",
	RECORD_PREV: "dc_recPrev",
	SHOW_DETAIL: "dc_showDetail",
	SHOW_TABLE: "dc_showTable",
	SWITCH_VIEW: "dc_switchView"
};

/**
 * Performs any of the given actions from {@link #scopes#svyNavigation$shortcuts#ACTION} 
 * in the given form or the main form if no form is given
 * 
 * @param {String} action
 * @param {String} [formName]
 *
 * @properties={typeid:24,uuid:"1AEFCA8B-4FE6-4647-B35F-F48041ED619D"}
 */
function performAction(action, formName) {
	if (!formName) {
		formName = globals.nav_currentPanel1Form;
	}
	/** @type {RuntimeForm<svy_nav_base>} */
	var form = forms[formName];
	if (form && action in form) {
		/** @type {Function} */
		var methodToCall = form[action];
		methodToCall.call(null);
	}
}

/**
 * Goes to the main form's edit mode
 * 
 * @properties={typeid:24,uuid:"7E9DCFE4-E6FC-45E8-B033-FF2CEA89F94A"}
 */
function mainFormEdit() {
	performAction(ACTION.EDIT);
}

/**
 * Calls the main form's DELETE method
 * 
 * @properties={typeid:24,uuid:"E07DA9D0-77B9-4C00-846F-5B340672668E"}
 */
function mainFormDelete() {
	performAction(ACTION.DELETE);
}

/**
 * Calls the main form's CANCEL method
 * 
 * @properties={typeid:24,uuid:"ECF4A00E-E585-4F3C-A06C-94D689BE3565"}
 */
function mainFormCancel() {
	performAction(ACTION.CANCEL);
}

/**
 * Calls the main form's DUPLICATE method
 * 
 * @properties={typeid:24,uuid:"DDA2381B-A028-459D-9829-6FC3A84685FE"}
 */
function mainFormDuplicate() {
	performAction(ACTION.DUPLICATE);
}

/**
 * Does to the main form's find mode
 * 
 * @properties={typeid:24,uuid:"26A232B7-DE59-4D66-AF8B-6087033E3710"}
 */
function mainFormFind() {
	performAction(ACTION.FIND);
}

/**
 * Calls the main form's NEW method
 * 
 * @properties={typeid:24,uuid:"24C36657-DB81-4199-A89E-F651D3AC4D99"}
 */
function mainFormNew() {
	performAction(ACTION.NEW);
}

/**
 * Calls the main form's SAVE method
 * 
 * @properties={typeid:24,uuid:"83856D9F-4392-414A-A018-46D409C594BF"}
 */
function mainFormSave() {
	performAction(ACTION.SAVE);
}

/**
 * Calls the main form's SORT method
 * 
 * @properties={typeid:24,uuid:"920F0EEE-B77C-4734-AEC7-A883314D6B82"}
 */
function mainFormSort() {
	performAction(ACTION.SORT);
}

/**
 * Shows help of the main form
 * 
 * @properties={typeid:24,uuid:"4A2B4C14-2FEF-494F-991B-3C951E915CBB"}
 */
function showHelp() {
	performAction(ACTION.HELP);
}

/**
 * Calls the main form's EXPORT method
 * 
 * @properties={typeid:24,uuid:"0B4C8C72-1B85-45C7-9FAB-6EC5059093D3"}
 */
function mainFormExport() {
	performAction(ACTION.EXPORT);
}

/**
 * Closes the tab the main form is in
 * 
 * @properties={typeid:24,uuid:"B6EEAF77-2617-466B-A70C-E2F8B86E5B64"}
 */
function closeTab() {
	performAction(ACTION.CLOSE_TAB);
}

/**
 * Goes to the main form's first record
 * 
 * @properties={typeid:24,uuid:"EC7A54E3-1D59-49DF-8190-072D123D0539"}
 */
function mainFormGoToFirstRecord() {
	performAction(ACTION.RECORD_FIRST);
}

/**
 * Goes to the main form's last record
 * 
 * @properties={typeid:24,uuid:"B50614B4-4580-4EBB-B9B2-7CF5C46AE992"}
 */
function mainFormGoToLastRecord() {
	performAction(ACTION.RECORD_LAST);
}

/**
 * Goes to the main form's next record
 * 
 * @properties={typeid:24,uuid:"6B5398AB-72AE-4E15-A92A-92AA52771B55"}
 */
function mainFormGoToNextRecord() {
	performAction(ACTION.RECORD_NEXT);
}

/**
 * Goes to the main form's previous record
 * 
 * @properties={typeid:24,uuid:"4DED9DCB-66C6-465C-9F85-D1F9CE68C15C"}
 */
function mainFormGoToPreviousRecord() {
	performAction(ACTION.RECORD_PREV);
}

/**
 * Shows the main form's DETAIL view
 * 
 * @properties={typeid:24,uuid:"5E59C074-9B85-4054-87D4-F94A61A84657"}
 */
function mainFormShowDetail() {
	performAction(ACTION.SHOW_DETAIL);
}

/**
 * Shows the main form's TABLE view
 * 
 * @properties={typeid:24,uuid:"A995095B-E293-4DF2-8607-8B9E4C9494C5"}
 */
function mainFormShowTable() {
	performAction(ACTION.SHOW_DETAIL);
}

/**
 * Toggles between the main form's TABLE and DETAIL view
 * 
 * @properties={typeid:24,uuid:"4731DAF8-E166-4B78-A5E0-AF6F4DD62FBE"}
 */
function mainFormSwitchView() {
	performAction(ACTION.SWITCH_VIEW);
}
