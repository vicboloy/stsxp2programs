/**
 * @properties={typeid:24,uuid:"8EADB111-FBDB-4591-9DD3-B4D41B180088"}
 */
function val_city(_table, _dataprovider, _newValue, _record) {

	if(utils.stringPatternCount(_newValue,'.')>0)
	{
		return 1
	}
	else
	{
		globals.nav.validation_msg += _dataprovider+ ", needs to have a . in it and doesn't have it" + '\n'
		return -1
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A786174-C0FB-4AFC-92E1-E1DBB804FCAC"}
 */
function switchTabRegion(event) {
	globals.svy_nav_switchTabProgram(event,'Region')
}
