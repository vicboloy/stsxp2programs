/**
 * The node text for the tree showing the advanced search criteria
 * 
 * @properties={type:12,typeid:36,uuid:"DA5C025F-682E-4FD5-8904-382A0EE5BC5F"}
 *
 */
function criteria_tree_node_text()
{	
	var _form = solutionModel.getForm(globals.nav_currentPanel1Form);
	var _field = field_name;
	var _labels = _form.getLabels();
	for (var i = 0; i < _labels.length && field_name; i++) {
		if (_labels[i].labelFor == field_name) {
			_field = _labels[i].text;
			break;
		}
	}
	_field = (_field && _field.lastIndexOf('i18n') > -1 ? i18n.getI18NMessage(_field) : _field);
				
	if (is_group == 1)
		return '<html><body>' +(operator ? operator : '') + ' ' + group_name + '</body></html>'; 
	else {
		var _retText = '<html><body>' + (operator ? operator : '') + ' <b>' + _field +'</b> ';
		
		switch (filter_operator) {
			case '=': _retText += i18n.getI18NMessage('i18n:svy.fr.lbl.equals');break;
			case '<': _retText += i18n.getI18NMessage('i18n:svy.fr.lbl.is_less_than');break;
			case '<=': _retText += i18n.getI18NMessage('i18n:svy.fr.lbl.is_less_than_equals');break;
			case '>': _retText += i18n.getI18NMessage('i18n:svy.fr.lbl.is_greater_than');break;
			case '>=': _retText += i18n.getI18NMessage('i18n:svy.fr.lbl.is_greater_than_equals');break;
			case 'CONTAINS': _retText += i18n.getI18NMessage('i18n:svy.fr.lbl.contains');break;
		}
		
		_retText += ' <b>'+ filter_value + '</b></body></html>';
		return _retText;
	}
}
