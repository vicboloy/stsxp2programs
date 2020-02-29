
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4E86409-A738-4710-8325-0419D463695F"}
 */
function onShow(firstShow, event) {
	if (firstShow){
	}
	globals.setUserFormPermissions(event,false);		
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CD1FF1AF-533A-43FC-AB64-095DE546C55C"}
 */
function onHide(event) {
	forms.jobs_general.onActionCancelEdit(event);
	scopes.prefs.mainWindowFront();
	scopes.prefs.stopWindowTrack();
	return true
}
