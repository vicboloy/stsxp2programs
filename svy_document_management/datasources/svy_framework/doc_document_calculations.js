/**
 * @properties={type:4,typeid:36,uuid:"BB8207D0-A7F6-4372-B387-FC5F6F41B661"}
 */
function security_btn_visibility()
{
	if(globals.svy_doc_isSuperAdminOrAdmin() || user_created_id == globals.svy_sec_lgn_user_id)
		return 1;
	else
		return 0;
}
