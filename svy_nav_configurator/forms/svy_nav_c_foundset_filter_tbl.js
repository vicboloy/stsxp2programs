/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B429729-2A70-4E6E-B1C2-71A82DDBCCD6"}
 */
var vFoundsetFilter = null;

/**
 *	Filter the data uses vFoundsetFilter
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"704374E0-D27D-40B7-9490-6564921A35F6"}
 * @AllowToRunInFind
 */
function filter()
{
	if(controller.find())
	{
	
	name = '#%' + vFoundsetFilter + '%'
	
	controller.search()
	}
}
