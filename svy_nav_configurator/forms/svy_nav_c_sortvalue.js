/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7F444EF2-DE7E-45CD-8AA1-6E088FCA40DD"}
 */
var vFielName = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"437C372A-845A-45F7-96F0-44C6D93B01A9"}
 */
var vSortOrder = '';

/**
 *	Add a field to the sort criteria
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"78B33D83-6A22-4359-B8A7-B2C951628248"}
 */
function addField()
{
	if(sort_value)
	{	
		sort_value += ', '	+ vFielName +' '+ vSortOrder	
	}
	else
	{
		sort_value = vFielName +' '+ vSortOrder		
		
	}
	
}

/**
 *	Clear the sort value field
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"656F9DA1-9B13-4D9F-BBAB-A5BD8787C488"}
 */
function clear_field()
{
	sort_value = null
}

/**
 *	Close the form in dialog
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @param {JSEvent} _event the event that triggered the action
 * @return  none
 *
 * @properties={typeid:24,uuid:"CBF26CE7-E625-434B-882B-3F822A2A8AAA"}
 */
function closeDialog(_event)
{
	globals.svy_nav_closeForm(_event)
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F36CC8C1-1BEC-4569-835B-654D3E09DE36"}
 */
function onDataChange(oldValue, newValue, event) {
	if(vFielName && vSortOrder)
	{
		elements.btn_add.visible = true
	}
	else
	{
		elements.btn_add.visible = false
	}
	return true
}
