
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"41C6029A-BC29-4525-B403-ACA73D655FD8"}
 */
function onHide(event) {
	//databaseManager.removeTableFilterParam('stsservoy','filterCurrentTenant');
	globals.setWindowClosed("");
	return _super.onHide(event)
}



/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECB24AB3-5DAE-46D2-9E35-7361D5FFE6BE"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD3C98F8-5551-4019-85B4-057D6C128018"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	///globals.listNamedElements();
	//var fs = databaseManager.getFoundSet('stsservoy','applications');
	//if (fs.find()){
	//	fs.application_id = globals.secCurrentApplicationID;
	//	fs.search();
	//}
	//foundset.loadAllRecords();
	//var currentApp = application.getSolutionName();
	//var appId = globals.secGetApplicationID('STSmobile');
	//var appIdMobile = "";
	
	//application.output('currentApp '+currentApp+' valid '+validateApplicationName()+' app id '+appId);
	//onDataChangeApplicationName(oldValue,newValue,event)
	return _super.onShow(firstShow, event)
}
