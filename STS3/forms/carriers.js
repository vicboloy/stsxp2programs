
/**
 * Callback method for when form is shown.
 * @param {Boolean} firstShow
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1B2FEC9-34A6-46A3-A972-5DE0B0C609B9"}
 */
function onShow(firstShow,event) {
	foundset.sts_carrier_container;
	foundset.loadAllRecords();
	var newFS = foundset.duplicateFoundSet();
	controller.loadRecords(newFS);
	
	var readOnly = false;
	var formName = event.getFormName();
	if (forms[formName].controller.getDesignTimeProperty('readOnly') == true){
			readOnly = true;
	}
	if (application.isInDeveloper()){application.output('carrriers is readonly '+readOnly)}
	globals.setUserFormPermissions(event,readOnly);
	if (controller.getMaxRecordIndex() == 0){
		//controller.newRecord()
	}
	//if (globals.carriersDividerLocation == 0.0) {
		elements.split.dividerLocation = 175.0;
	//}
}

/**
 *
 * @param previousIndex
 * @param event
 *
 * @properties={typeid:24,uuid:"5439B6EE-D2FE-4164-9A77-3923DC176DE2"}
 */
function onTabChange(previousIndex, event) {
	globals.carriersDividerLocation = elements.split.dividerLocation;
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CC1D90D0-A12F-40F9-A7CC-47A1780DB09F"}
 */
function onShow1(firstShow, event) {
	foundset.sts_carrier_container;
	foundset.loadAllRecords();
	var newFS = foundset.duplicateFoundSet();
	controller.loadRecords(newFS);
}
