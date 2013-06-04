/**
 * Perform the element default action.
 *
 * @param {JSEvent} _event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9B553AB-26C5-43BE-8F8D-BE0FE22A5F98"}
 */
function closeForm(_event) {
	globals.svy_nav_closeForm(_event)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"903DCD70-38A6-4F44-BD55-1B2D6E3244DA"}
 */
function onShow(firstShow, event) {
	if(firstShow)
	{
		initVLservernames()	
	}
	initVLtablenames()
}

/**
 * @properties={typeid:24,uuid:"640D12F1-4629-4B4E-84D7-337A66F2EC44"}
 */
function initVLservernames() {
	scopes.globals.svy_nav_initServerVL();
}

/**
 * @properties={typeid:24,uuid:"AF9505FF-EC41-4E83-BE2C-D41C1D007261"}
 */
function initVLtablenames() {
	scopes.globals.svy_nav_initTableVL(server_name);
}
