
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74C34AE1-9F9E-42E5-B047-457F504A60EE"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow){
		scopes.jobs.tablePrefsPreLoad(event.getFormName());
	}
	application.output('Printing');
	forms[event.getFormName()].printPreview(event,false,"Piecemark Loads",100);
}
