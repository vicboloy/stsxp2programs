/**
 *	Goto a layout by his shortname
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"1d3dc892-36b6-415e-ac7b-cc760dffa1d1"}
 */
function goto_shortName(_event)
{	
	// if there is a program found
	if(databaseManager.hasRecords(_to_nav_layout$shortname))
	{
		var _layout_id = _to_nav_layout$shortname.layout_id	
		forms[globals.nav.mainFormName].layoutSwitch(null,_layout_id)
	}	
	globals.svy_nav_closeForm(_event)
	globals.layout_shortname = null
}

/**
 *	On show, set focus on field
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"0531191f-297d-4a78-a76e-2bc032ccfe93"}
 */
function onShow()
{
	elements.fld_shortcut.requestFocus()
}
