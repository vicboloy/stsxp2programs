/**
 *	 Search a program uses globals.svy_nav_search
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"7D1F5807-C312-472D-8FD0-FBEB5EEC647F"}
 * @AllowToRunInFind
 */
function search()
{
	if(controller.find())
	{
		program_name = '#%' + globals.svy_nav_search + '%'
		controller.search()
	}
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"E72076AE-07AD-4762-A4C3-8653898354DD"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	controller.readOnly = false
}
