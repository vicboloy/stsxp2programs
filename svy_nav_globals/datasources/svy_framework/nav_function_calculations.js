/**
 * @properties={type:12,typeid:36,uuid:"E0B5FE10-7ECB-4C1B-909D-A1F03D08248D"}
 */
function display_description()
 {
 	if(flag_i18n)
 	{
 		return i18n.getI18NMessage(label)
 	}
 	else
 	{
 		return label
 	}
 }
