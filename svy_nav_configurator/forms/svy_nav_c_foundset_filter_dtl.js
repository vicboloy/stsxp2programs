/**
 *	Set the valuelist nav_table_names
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"534815C6-9E7B-4CCC-ADC8-89099EB4D037"}
 */
function getTableValuelist() {
	globals.svy_nav_initTableVL(server_name);
}

/**
 *	Create a new record
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"63F8DAAB-4274-447F-9E0E-11F813145E82"}
 */
function newRecord() {
	controller.newRecord()
}

/**
 *	On data change, set column valuelist
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"91770D44-2DEE-4D9F-BBAA-7D94AEF23215"}
 */
function onDataChange()
{
	setColumnValuelist();
}

/**
 *	On load, set server valuelist
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"0C6FFDDE-1AF9-4BC5-916A-52075BC9E23A"}
 */
function onLoad()
{
	globals.svy_nav_initServerVL();
}

/**
 *	Set the valuelist for this record
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"0CD31993-3E80-478C-A163-689677D522A5"}
 */
function onRecordSelection()
{
	getTableValuelist();
	setColumnValuelist();
}

/**
 *	Delete record and set the linked records to null
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"9494BA57-8035-4BEB-A3F9-764A0AC3A81C"}
 */
function recordDelete()
{
	while ( nav_foundset_filter_to_nav_program.getSize() > 0 )
	{
		nav_foundset_filter_to_nav_program.nav_foundset_filter_id = null
		databaseManager.saveData()
	}
	
	controller.deleteRecord()
	databaseManager.saveData()
}

/**
 *	Select a foundsetfilter, link it to a program
 *	
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @param {JSEvent} _event
 * @return  none
 * 
 * @properties={typeid:24,uuid:"056F4DAA-C120-45DB-9550-AE293A9CC89E"}
 */
function recordSelect(_event)
{
	forms.svy_nav_c_program_dtl.nav_foundset_filter_id = nav_foundset_filter_id
//	databaseManager.saveData()
	globals.svy_nav_closeForm(_event)
}

/**
 *	Set the valuelust nav_field_names
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"60661271-FE8F-4B4A-A81F-1BB5BF3821C0"}
 */
function setColumnValuelist()
{
	if(table_name)
	{
		//Returns an array containing the names of all table columns
		var jsTable = databaseManager.getTable( server_name, table_name)
		var columnNames = jsTable.getColumnNames()
		columnNames.sort()
		application.setValueListItems('nav_field_names',  columnNames)
	}
	else
	{
		application.setValueListItems('nav_field_names',  null)
	}

}

/**
 *	Onshow
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"07FA9541-323E-460A-889C-2C39197085B1"}
 * @AllowToRunInFind
 */
function onShow(_firstShow)
{
	if(_firstShow)
	{
		controller.loadAllRecords()
	}
}
