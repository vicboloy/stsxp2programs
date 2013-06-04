/**
 *	Delete Record
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"60EF0385-9815-4830-91DE-A680749EAB50"}
 */
function deleteRecord()
{
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer =  globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no); 	
	if(_answer == _ok)
	{
		controller.deleteRecord()
		forms.svy_nav_c_main.loadFunctionsValuelist()
	}
}

/**
 *	Duplicate record
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"35459536-B9C7-4C66-B236-9B5FF42E07EF"}
 */
function duplicateRecord()
{
	controller.duplicateRecord()
}

/**
 *	Open a form to edit the array
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"8897635E-EBFF-4309-BBED-63120AF36B7D"}
 */
function editFunction()
{
	forms.svy_nav_c_function_dtl.controller.loadRecords(foundset)
	forms.svy_nav_c_function_dtl.mode = 'EDIT'
	forms.svy_nav_c_function_arguments_tbl.mode = 'EDIT'
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_function_dtl,null,null,null,null,null,true,false,'Function_edit')
}

/**
 *	On show load all records
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"09967924-D103-4295-BD0D-A343810DDA49"}
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
 * @param {JSRecord<db:/svy_framework/nav_function>} _rec1
 * @param {JSRecord<db:/svy_framework/nav_function>} _rec2
 *
 * @properties={typeid:24,uuid:"6E4F50B0-7ACF-46A0-9334-80AD4EFCCEE8"}
 */
function sortComparator(_rec1, _rec2) {
	if(_rec1.display_description < _rec2.display_description) {
		return -1; 
	} else if (_rec1.display_description > _rec2.display_description) {
		return 1;
	}
	return 0
}

/**
 *
 * @param _event
 *
 * @properties={typeid:24,uuid:"D499455C-2662-4F28-A76C-5A460900A6F7"}
 */
function dc_new(_event) {
	_super.dc_new(_event)
	editFunction()
}
