/**
 *
 * @properties={typeid:24,uuid:"9091712D-0C3A-4E8F-932D-A95D6F47D40B"}
 */
function onPostNew()
{
	plugins.dialogs.showInfoDialog('helo','ceode','ok')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB7F0794-1A85-40A2-B065-32A97E5570D9"}
 */
function showEmployee(event) {
	globals.svy_nav_showProgramRecord('Employees',employeeid)
}
