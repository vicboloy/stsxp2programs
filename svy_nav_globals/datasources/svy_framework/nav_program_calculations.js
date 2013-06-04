/**
 * @properties={type:-4,typeid:36,uuid:"2B88A744-CA98-4182-B769-AF4C88926DDD"}
 */
function image_18_18()
{
	
		if(program_image && solutionModel.getMedia(program_image))
		{
			var _image = solutionModel.getMedia(program_image).bytes
			var _resize = plugins.images.getImage(_image).resize(18,18).getData() 
			return _resize
		}
		
		return null;
}

/**
 * @properties={type:-4,typeid:36,uuid:"0d5e98a7-3ddc-4e7a-a706-b188e9d39892"}
 */
function img_security_applied()
{
	if(utils.hasRecords(nav_program_to_nav_navigation_keys$key_program) && utils.hasRecords(nav_program_to_nav_navigation_keys$key_program.nav_navigation_keys_to_sec_security_key))
	{
		return 'media:///nav_security.png'
	}
	else
	{
		return null
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"8eeb0463-d911-4b5e-9b7e-49a03f2b44fb"}
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
