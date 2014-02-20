/** *
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"AF890D49-1470-460C-A5C7-96D6AF247F69"}
 */
function updateUI(event) {
	var isData = permission_type == globals.SEC_PERMISSION_TYPE_DATA;
	//elements.server_name.visible = isData;
	server_name = 'stsservoy';
	elements.table_name.visible = isData && server_name != null;
	elements.can_delete.visible = isData && server_name != null && table_name != null;
	elements.can_insert.visible = isData && server_name != null && table_name != null;
	elements.can_update.visible = isData && server_name != null && table_name != null;
	elements.can_read.visible = isData && server_name != null && table_name != null;
	elements.use_tracking.visible = isData && server_name != null && table_name != null;
	
	var isUI = permission_type == globals.SEC_PERMISSION_TYPE_UI;
	elements.form_name.visible = isUI;
	elements.element_uuid.visible = isUI && form_name != null;
	elements.is_visible.visible = isUI && form_name != null;
	elements.is_accessible.visible = isUI && form_name != null && is_visible == 1;
	
//	elements.element_uuid.visible = isUI && form_name != null;
//	elements.form_name.visible = 
}
