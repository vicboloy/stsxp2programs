/**
 * Method to call from the onOpen method of a solution (can be used directly as the onOpen event handler).
 *
 * The method will invoke the moduleInit method on all instances of the AbstractModuleDef class
 *
 * @param {Object<Array<String>>} [startupArguments] all startup arguments with which the solution is opened
 *
 * @properties={typeid:24,uuid:"2BCF34F0-F66E-456A-A493-2EE1B3EBE1B8"}
 */
function initModules(startupArguments) {
	//Init self
	scopes.svyProperties.initProperties(true);
	
	//Init modules
	var mods = scopes.modUtils$UI.getJSFormInstances(solutionModel.getForm('AbstractModuleDef')) 

	for (var i = 0; i < mods.length; i++) {
		/** @type {RuntimeForm<AbstractModuleDef>}*/
		var form = forms[mods[i].name];
		/** @type {{propertySet: Object, properties: Array<Object>}} */
		var props = form.getProperties();
		if (props) {
			scopes.svyProperties.updateDefaultProperties(props);
		}		
		form.moduleInit.call(null, startupArguments);
		application.output('Initialized module ' + (form.getId() ? form.getId() : "[no ID provided from moduleInit on form \"" + form.controller.getName() + "\"]") + ' version ' + form.getVersion(), LOGGINGLEVEL.DEBUG);
		history.removeForm(mods[i].name);
	}
}

/**
 * Method to assign to or call from the solution's onDataBroadcast event
 * 
 * @param {String} dataSource table data source
 * @param {Number} action see SQL_ACTION_TYPES constants
 * @param {JSDataSet} pks affected primary keys
 * @param {Boolean} cached data was cached
 * 
 * @properties={typeid:24,uuid:"FAA2B4E0-180C-4CDF-BE10-2D458AE6EC07"}
 */
function fireDataBroadcastEvent(dataSource, action, pks, cached) {
	scopes.modUtils$eventManager.fireEvent(this,'databroadcast', Array.prototype.slice.call(arguments, 0))
}

/**
 * Registers a listener for incoming databroadcast events.<br><br>
 * Note that a Client only receives databroadcast events for datasources to which is holds a reference, for example has a form loaded connected to the datasource
 * 
 * @param {Function} listener
 * 
 * @example <pre> &#47;**
 *  * Var holding a reference to a foundset on the contacts table of the udm database, so this client receives databroadcast events for this table
 *  * &#64;private
 *  * @type {JSFoundSet}
 *  *&#47;
 * var fs
 *
 * function onLoad() {
 * 	fs = databaseManager.getFoundSet('db:/udm/contacts')
 * 	fs.clear()
 * 	scopes.svyApplicationCore.addDataBroadcastListener(dataBroadcastEventListener)
 * }
 * 	
 * &#47;**
 *  * @param {String} dataSource
 *  * @param {Number} action
 *  * @param {JSDataSet} pks
 *  * @param {Boolean} cached
 *  *&#47;
 * function dataBroadcastEventListener(dataSource, action, pks, cached) {
 * 	if (dataSource == 'db:/udm/contacts' && action & (SQL_ACTION_TYPES.INSERT_ACTION | SQL_ACTION_TYPES.DELETE_ACTION)) {
 * 		//Your business logic here
 * 	}
 * }
 *</pre>
 * 
 * @properties={typeid:24,uuid:"DD317CC0-665B-4993-8669-D6B42A279B4D"}
 */
function addDataBroadcastListener(listener) {
	//TODO: figure out how to filter and fire only for datasource/pk match
	//TODO: add option to hold a reference to an empty foundset on the datasource, so the client gets the databroadcast for that entity
	scopes.modUtils$eventManager.addListener(this,'databroadcast', listener)
}