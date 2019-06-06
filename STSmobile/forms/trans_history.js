/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3927887B-52B5-47CC-B171-99E46E0505FB"}
 */
function onActionDetail(event) {
	forms.rf_mobile_view.elements.tablessHistory.tabIndex = 2;
	//forms.trans_detail.controller.focusField('btn_Error',false);
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A05D35EF-B896-4140-A5DB-0F8AA1796E1E"}
 */
function onActionCloseDetail(event) {
	forms.rf_mobile_view.elements.tablessHistory.tabIndex = 1;
	return true;
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1EAFBE55-6833-46EA-A897-F299337718DC"}
 */
function onRecordSelection(event) {
	var index = foundset.getSelectedIndex();
	forms.trans_detail.controller.setSelectedIndex(index);
	forms.trans_detail.getTransactionDetails(event);
	return true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C40ED78A-4A88-443B-8E97-CFA87E6EF7BC"}
 */
function onShow(firstShow, event) {
	foundset.sort('transaction_date desc')
	//plugins.window.removeShortcut('UP');
	//plugins.window.removeShortcut('DOWN');
	//plugins.window.removeShortcut('RIGHT');
	//plugins.window.removeShortcut('LEFT');
	if (globals.shortcutsSet){
		plugins.window.createShortcut('UP',globals.rfRecordUp,'rf_mobile_view');
		plugins.window.createShortcut('DOWN',globals.rfRecordDown,'rf_mobile_view');
		plugins.window.createShortcut('RIGHT',globals.rfRecordDetail,'rf_mobile_view');
		plugins.window.createShortcut('LEFT',globals.rfRecordDetailClose,'rf_mobile_view');
		shortcutsSet = true;
	}
}
