/**
 *	 Search a program uses globals.svy_nav_search
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"E54291E4-987A-4CEF-96B2-9BBEA95FAC08"}
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
 * @properties={typeid:24,uuid:"F689B986-7F82-4F08-9101-44EBF5190783"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	controller.readOnly = false;
}
