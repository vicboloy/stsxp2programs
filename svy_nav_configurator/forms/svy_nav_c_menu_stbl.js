/**
 *	Search a menuitem uses globals.svy_nav_search
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"26DBA6DD-25E3-4F3F-8C44-B1BA3E26812B"}
 * @AllowToRunInFind
 */
function search()
{
	if(controller.find())
	{
		name = '%' + globals.svy_nav_search + '%'
		controller.search()
	}
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"F7D9916C-E095-44AD-B1A5-52095972AA31"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	controller.readOnly = false
}
