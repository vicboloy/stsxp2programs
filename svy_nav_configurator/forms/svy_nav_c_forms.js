/**
 *	Save form values to array in the database
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * 
 * @properties={typeid:24,uuid:"18A075C0-E312-44A8-A58C-B602E72ABB5E"}
 */
function onDataChange()
{
	var _index = foundset.getSelectedIndex()
	var _array = new Array()
	var _size = foundset.getSize()
	for (var i = 1; i <= _size; i++) {
		foundset.setSelectedIndex(i)
		_array[i-1] = new Array()
		_array[i-1][0] = foundset['sort_field']
		_array[i-1][1] = foundset['form_type']
		_array[i-1][2] = foundset['form_name']
		_array[i-1][3] = foundset['flag_available']
	}
	
	forms.svy_nav_c_template_form.form_object = _array
	foundset.setSelectedIndex(_index)
	forms.svy_nav_c_program_dtl.setTableServer();
	
}
