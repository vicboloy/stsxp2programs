/**
 *	Set the template object
 * 
 * @author Sanneke Aleman
 * @since 2009-05-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"5DCB6043-599F-4C2F-BAE2-2219B850F85C"}
 */
function onDataChange()
{
	var _array = new Array()
	var _index = foundset.getSelectedIndex()
	var _size = foundset.getSize()
	for (var i = 1; i <= _size; i++) {
		foundset.setSelectedIndex(i)
		_array[i-1] = new Array()
		_array[i-1][0] = foundset['sort_field']
		_array[i-1][1] = foundset['template_name']
		_array[i-1][2] = foundset['flag_available']
		_array[i-1][3] = foundset['edit_allowed']
	}
	foundset.setSelectedIndex(_index)
	forms.svy_nav_c_template_form.template_object = _array
}
