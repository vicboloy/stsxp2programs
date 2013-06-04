/**
 * @properties={type:-4,typeid:36,uuid:"7A1A7824-B2F3-4610-9E97-15FF3F22D57E"}
 */
function image_18_18()
{
	if(image_url && solutionModel.getMedia(image_url))
	{
		var _image = solutionModel.getMedia(image_url).bytes
		var _resize = plugins.images.getImage(_image).resize(18,18).getData() 
		return _resize
	}
	
	return null;
}

/**
 * @properties={type:12,typeid:36,uuid:"4433529A-ABF4-433F-9739-CDD7FE2B05E1"}
 */
function tree_icon()
{
	return "media:///" + image_url;
}

/**
 * @properties={typeid:36,uuid:"8F882090-401C-4646-9271-772681A1AB91"}
 */
function calc_tree_sort()
 {
 	return 'sequence asc';
 }

/**
 * @properties={type:12,typeid:36,uuid:"90ABC433-A0BB-48C1-9BE3-B5C9BB76DDB5"}
 */
function calc_function()
{
	if(function_type == 1)return toolbar_function;
	else if (function_type == 2 && utils.hasRecords(nav_toolbar_item_to_nav_function)) return nav_toolbar_item_to_nav_function.label
	
	return null
}

/**
 * @properties={type:12,typeid:36,uuid:"96F65BCD-EEE5-4702-A7BC-C686D53166B8"}
 */
function calc_sequence()
{
	var _return = '' 
	if(utils.hasRecords(nav_toolbar_item_to_parent))
	{
		_return = nav_toolbar_item_to_parent.calc_sequence
	}
	_return += sequence + '_'
	return _return;
}

/**
 * @properties={type:12,typeid:36,uuid:"AF2A9F66-5712-4216-99C6-EB6A05E3D6B9"}
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
