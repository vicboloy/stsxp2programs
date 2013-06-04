/**
 *	To save the values of the form in an array and save that to the destination form
 *
 * @author Sanneke Aleman
 * @since 2009-05-24
 * 
 * @properties={typeid:24,uuid:"9A22A8A5-0FBF-4F1B-9D03-26F554446F55"}
 */
function saveArrayToForm()
{
    var _array = new Array()
    var _size = foundset.getSize()
    foundset.sort('sort_field asc')
    //get values from form to array
    for (var i = 1; i <= _size; i++) {
        foundset.setSelectedIndex(i)
        _array[i-1] = foundset['data_field']
    }
   //set values from array to destination form
    if(globals.nav.arrayForm && globals.nav.arrayField )
    {
        forms[globals.nav.arrayForm][globals.nav.arrayField] = _array
        globals.nav.arrayForm = null
        globals.nav.arrayField = null
    }
}

/**
 *
 * @param _event
 *
 * @properties={typeid:24,uuid:"B0050658-4402-4967-B70B-0E92F4CA0452"}
 */
function dc_new(_event) {
	_super.dc_new(_event)
	foundset['sort_field'] = controller.getMaxRecordIndex()
}

/**
 *
 * @param _event
 * @param _all
 *
 * @properties={typeid:24,uuid:"93D594D8-122F-4F95-BDBB-C861A796FA00"}
 */
function dc_save(_event, _all) {
	_super.dc_save(_event, _all)
	globals.svy_nav_closeForm(_event)
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"59CB60A0-89E9-47AC-B957-62442A9FB10E"}
 */
function dc_cancel(_event) {
	_super.dc_cancel(_event)
	globals.svy_nav_closeForm(_event)
}
