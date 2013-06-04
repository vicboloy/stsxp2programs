/**
 *	 Search a program uses globals.svy_nav_search
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"6EEEB7A4-6AAB-439B-927E-AAA93C794535"}
 * @AllowToRunInFind
 */
function search()
{
	if(controller.find())
	{
		name = '#%' + globals.svy_nav_search + '%'
		controller.search()
	}
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"6E1AF6B9-9C6C-4D96-B4F8-878EFCE69036"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	controller.readOnly = false
}
