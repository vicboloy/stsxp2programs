/**
 * @properties={type:4,typeid:36,uuid:"30FC70AD-0880-4D38-B448-391BD496EEE3"}
 */
function select()
{
	return 1;
}

/**
 * @properties={type:12,typeid:36,uuid:"0F169D31-5F79-476B-9D1F-DBF11FE2C59C"}
 */
function display_flags()
{
	var flags = [];
	if(permission_type == globals.SEC_PERMISSION_TYPE_DATA){
		if(can_read) 		flags.push('Read');
		if(can_insert) 		flags.push('Insert');
		if(can_update) 		flags.push('Update');
		if(can_delete) 		flags.push('Delete');
		if(use_tracking)	flags.push('Audit Log');
		
	}else if(permission_type == globals.SEC_PERMISSION_TYPE_UI){
		if(is_visible) 		flags.push('Visible');
		if(is_accessible)	flags.push('Accessible');
	}
	if(flags.length)
		return flags.join(', ');
	return 'No Permissions';
}

/**
 * @properties={type:12,typeid:36,uuid:"7519889C-3782-4AF2-81E6-AF54796E031D"}
 */
function display_resource()
{
	if(permission_type == globals.SEC_PERMISSION_TYPE_DATA){
		return server_name+'.'+table_name;
	}else if(permission_type == globals.SEC_PERMISSION_TYPE_UI){
		if (1==1){return form_name+'.'+element_name;}
		if(form_name && element_uuid){
			var uuids = security.getElementUUIDs(form_name);
			for(var i = 1; i <= uuids.getMaxRowIndex(); i++){
				if(uuids.getValue(i,2).toString() == element_uuid.toString()){
					return form_name + '.' + uuids.getValue(i,1);
				}
			}
		}
	}
}
