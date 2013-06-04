/**
 *	Closes the form in dialog
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * @param {JSEvent} _event
 * 
 * @properties={typeid:24,uuid:"b0e90c4d-3c99-4d7d-836f-b7a71e1c3fcd"}
 */
function closeDialog(_event)
{
	globals.svy_nav_closeForm(_event)
}

/**
 *	Test the query
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * 
 * @properties={typeid:24,uuid:"c57b30a2-ceca-4405-a4d1-88197975656d"}
 */
function run_query()
{
	var _datasetValues = databaseManager.getDataSetByQuery(server_name, custom_sql, null, -1);
	var _check = globals.html(_datasetValues)
	if(_check != "HTML: Successful")
	{
		globals.DIALOGS.showErrorDialog('Error', _check, 'Ok');
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1BF977F-F51A-4716-8394-9F387E2E04FE"}
 */
function onShow(firstShow, event) {
	if(firstShow)
	{
		var _items = databaseManager.getServerNames()
		application.setValueListItems('svy_val_servernames',_items)
	}
}
