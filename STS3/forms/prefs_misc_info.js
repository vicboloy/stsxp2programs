
/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F3A54F1-F377-4FB7-901D-970BC2836044"}
 */
function onFocusGainedRoutingCode(event) {
	var routes = [];
	for (var item in globals.m.routes){
		if (item.length >=36){continue}
		routes.push(item);
	}
	application.setValueListItems('stsvl_route_code_id',routes);
	application.output(routes+' xxx');
}
