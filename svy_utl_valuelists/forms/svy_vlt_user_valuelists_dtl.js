/**
 *	User selects a valuelist from combobox, the method searches for the right data
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * 
 * @properties={typeid:24,uuid:"19cd4512-1665-4f8c-ae17-c46137ab6927"}
 */
function selectValuelist()
{	
	foundset.selectRecord(globals.utl_valuelist_id)
}

/**
 *	On show select a valuelist
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * 
 * @properties={typeid:24,uuid:"d23fc7e6-d16c-453c-8b2e-3302ca9f2d59"}
 */
function onShow()
{
	controller.loadRecords(_to_vlt_valuelists$user_list)
	
	globals.utl_valuelist_id = 5
	selectValuelist()
}
