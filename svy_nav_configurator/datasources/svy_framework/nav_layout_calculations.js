/**
 * @properties={type:12,typeid:36,uuid:"EE251ECE-F32B-4AAC-B366-5CA1E668C91D"}
 */
function img_security_applied()
 {
 	if(utils.hasRecords(nav_layout_to_sec_security_key))
 	{
 		return 'media:///nav_security.png'
 	}
 	else
 	{
 		return null
 	}
 }
