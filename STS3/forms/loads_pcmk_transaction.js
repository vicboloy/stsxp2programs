
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

/**
 * Perform sort.
 *
 * @param {String} dataProviderID element data provider
 * @param {Boolean} asc sort ascending [true] or descending [false]
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE0EE6A5-D1BD-4660-AAEE-628B53C2D966"}
 */
function onSort(dataProviderID, asc, event) {
	// TODO Auto-generated method stub
	controller.sort(dataProviderID + (asc ? ' asc' : ' desc'), false)
	var currentSort = foundset.getCurrentSort();
	forms[event.getFormName().replace('_table','').replace('transaction','combo')].transSort = currentSort;//save current sort for selected ifile record
	//application.output('SORTSAVED '+event.getFormName().replace('_table','').replace('transaction','combo')+ ' xxx '+event.getFormName())
	//application.output('SAVED FROM '+event.getFormName());
}
