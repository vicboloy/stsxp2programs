/**
 * @properties={type:12,typeid:36,uuid:"6FB5B823-3668-4F88-BBEC-C1E736DC84F4"}
 */
function display_tenant_name()
{
	return sec_user_tenant.company_name;
	//return 1;
}

/**
 * @properties={type:12,typeid:36,uuid:"F10A12D0-2FFB-4A66-BC91-0F751C9E9B13"}
 */
function display_user_name()
{
	if(name_first && name_last){
		return name_first + ' ' + name_last;
	}
	return user_name;
}
