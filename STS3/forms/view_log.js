/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90788B49-C8B0-43F4-8D84-E6731AE8332C"}
 */
function onActionClose(event) {
	//forms.sts_nav_default.elements.tabless.visible = true;
	plugins.scheduler.removeJob('refreshLogger');
	globals.stopWindowTrack();
	globals.mainWindowFront();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B78B9BC-6D87-4A10-9336-24733ED72A4C"}
 */
function onShow(firstShow, event) {
	//forms.sts_nav_default.elements.tabless.visible = false;
	var formx = event.getFormName();
	scopes.jobs.tablePrefsLoad(formx)
	var newDate = Date.now();
	newDate = newDate + 1000*60*24;
	newDate = new Date(newDate);
	globals.cronJob = 'loggerTable';
	var args = [];
	args.push(event.getFormName());
	var names = plugins.scheduler.getCurrentJobNames();
	if (names.indexOf('refreshLogger') == -1){ // resolve #47 view log error
		plugins.scheduler.addJob('refreshLogger', new Date(), globals.loggerTable, 20000, 400, newDate, args);
	}
	return _super.onShow(firstShow, event)
}
/**
 * @properties={typeid:24,uuid:"AB09638E-5368-4093-B307-541F6586F5E2"}
 */
function refreshTable(){
	foundset.sort(foundset.getCurrentSort());
	foundset.setSelectedIndex(1);
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DBA18592-9F56-420F-B454-528ABE6F7D12"}
 */
function onActionFilter(event) {
	null;
	
}
