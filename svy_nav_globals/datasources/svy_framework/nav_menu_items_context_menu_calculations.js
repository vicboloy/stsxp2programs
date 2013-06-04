/**
 * @properties={type:12,typeid:36,uuid:"D868F4ED-16A1-4C14-B881-A520028EEF32"}
 */
function display_description()
 {
 	if(flag_i18n)
 	{
 		return i18n.getI18NMessage(description)
 	}
 	else
 	{
 		return description
 	}
 }
