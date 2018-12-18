
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4D0253CB-BB9B-4E37-A39D-6719147C8910"}
 */
function onDataChangeOffF8All(oldValue, newValue, event) {
	scopes.prefs.onDataChangePrefsGeneral(oldValue,newValue,event,null);
	if (newValue == 1){
		scopes.prefs.shipF8Off = 0;
	}
	if (globals.tempPrefsChanged.indexOf('shipF8Off')){globals.tempPrefsChanged.push('shipF8Off');}
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7B2295C9-F71A-4F06-B4AF-7FBADBFD166A"}
 */
function onDataChangeOffF8Shipping(oldValue, newValue, event) {
	scopes.prefs.onDataChangePrefsGeneral(oldValue,newValue,event,null);
	if (newValue == 1){
		scopes.prefs.globalF8Off = 0;
	}
	if (globals.tempPrefsChanged.indexOf('globalF8Off')){globals.tempPrefsChanged.push('globalF8Off');}
	return true
}
