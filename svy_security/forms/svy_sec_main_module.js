/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"31309D23-50C7-4001-9DF8-7659E693DE7E"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	doSearch();
}

/**
 * @properties={typeid:24,uuid:"5F68AFDE-F539-49C6-84A4-E8E8FCA5AD15"}
 * @AllowToRunInFind
 */
function doSearch() {
	if (forms[globals.svy_utl_getFrameworkFormName("sec_main")].searchArgument)  {
		foundset.find();
		foundset.name = '#%' + forms[globals.svy_utl_getFrameworkFormName("sec_main")].searchArgument + '%';
		foundset.search();
	} else {
		foundset.loadAllRecords();
	}
}
