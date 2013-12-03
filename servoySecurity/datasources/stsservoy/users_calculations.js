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
