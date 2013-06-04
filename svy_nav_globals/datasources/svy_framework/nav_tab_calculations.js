/**
 * @properties={type:12,typeid:36,uuid:"3F1DFEDE-E8B3-4292-9C88-07E6AFD27DD1"}
 */
function display_description()
{
	if(i18n_description)
	{
		return i18n_description
	}
	else if(utils.hasRecords(nav_tab_to_nav_program))
	{
		return nav_tab_to_nav_program.display_description
	}
	else
	{
		return ''
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"6870314F-6244-4010-8FEC-D6BBA59B3FEE"}
 */
function i18n_description()
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
