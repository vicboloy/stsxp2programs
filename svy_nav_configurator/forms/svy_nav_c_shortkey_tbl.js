/**
 *	Open a form to edit the array
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"35FF6DBF-37DF-447D-9345-7426D55D515E"}
 */
function editShortkey()
{
	forms.svy_nav_c_shortkey_dtl.controller.loadRecords(foundset)
	forms.svy_nav_c_shortkey_dtl.mode = 'EDIT'
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_shortkey_dtl,null,null,null,null,null,true,false,'edit_shortkey')
}

/**
 *	On show load all records
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"785B4A82-1BB5-4A2F-8DF8-AABFB8DAD09B"}
 * @AllowToRunInFind
 */
function onShow(_firstShow)
{
	controller.loadAllRecords();
	if (_firstShow) {
		foundset.sort(sortComparator);
	}
}

/**
 * Comparator used in the sort function. Compares the display_description of the two records.
 * 
 * 
 * @param {JSRecord<db:/svy_framework/nav_shortkey>} _rec1
 * @param {JSRecord<db:/svy_framework/nav_shortkey>} _rec2
 *
 * @properties={typeid:24,uuid:"3E246807-33FC-48A9-A724-D9367A37FF39"}
 */
function sortComparator(_rec1, _rec2) {
	if(_rec1.nav_shortkey_to_nav_function.display_description < _rec2.nav_shortkey_to_nav_function.display_description) {
		return -1; 
	} else if (_rec1.nav_shortkey_to_nav_function.display_description > _rec2.nav_shortkey_to_nav_function.display_description) {
		return 1;
	}
	return 0
}

/**
 *
 * @param _event
 *
 * @properties={typeid:24,uuid:"6232502C-3F04-4424-9783-F9E9EA54F838"}
 */
function dc_new(_event) {
	_super.dc_new(_event)
	editShortkey()
}
