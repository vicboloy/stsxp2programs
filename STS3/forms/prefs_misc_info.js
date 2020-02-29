
/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F3A54F1-F377-4FB7-901D-970BC2836044"}
 */
function onFocusGainedRoutingCode(event) {
	var routes = [];
	for (var item in globals.m.routes){
		if (item.length >=36){continue}
		routes.push(item);
	}
	application.setValueListItems('stsvl_route_code_id',routes);
	application.output(routes+' xxx');
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
 * @properties={typeid:24,uuid:"3432BDF8-F883-4C5A-8907-9DA89ADBFE63"}
 */
function onDataChangeBarcodeLength(oldValue, newValue, event) {
	if (scopes.prefs.barcodeLength < 10 || scopes.prefs.barcodeLength > 25){
		scopes.prefs.barcodeLength = oldValue;
		globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1265'),i18n.getI18NMessage('1265'))
	} else {
		scopes.prefs.onDataChangePrefsGeneral(oldValue,newValue,event,'generalPrefs');
	}
	return true;
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
 * @properties={typeid:24,uuid:"C97F4E66-40EB-42F2-B7F5-F5248C3C1658"}
 */
function onDataChangeIdleTime(oldValue, newValue, event) {
	scopes.prefs.onDataChangePrefsGeneral(oldValue,newValue,event,'generalPrefs');
	return true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A7BDDF96-9B3F-457C-AAE3-91D8999B1178"}
 */
function onShow(firstShow, event) {
	scopes.jobs.formPermissions(event,false);
}
