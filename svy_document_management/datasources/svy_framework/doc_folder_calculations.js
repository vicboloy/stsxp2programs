/**
 * @properties={type:-4,typeid:36,uuid:"85A5F6F1-FF20-4979-86EE-1DE8F8886383"}
 */
function folder_icon()
{
	return solutionModel.getMedia("document_management.png").bytes;
}

/**
 * @properties={type:12,typeid:36,uuid:"A8C7D981-AE94-4886-811D-49754F0C158A"}
 */
function clc_display_name_security_permission()
{
	var _ret = "<html><body><font face='arial'";
	_ret += " color=" + (globals.svy_doc_folderSecurityPermission(doc_folder_id) ? "black" : "#707070");
	_ret += " size=" + (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ? "'2'" : "3");
	_ret += ">" + name + "</font></body></html>";
	
	return _ret;
}
