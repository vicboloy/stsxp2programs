/**
 * @properties={type:-4,typeid:36,uuid:"BBB6A68D-E666-4B66-B854-7D8E75573E8A"}
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
 * @properties={type:-4,typeid:36,uuid:"2E7713E8-7C8F-4ED4-A4C7-0C0FF4142656"}
 */
function image_18_18_bg()
{

	if(image_url_bg && solutionModel.getMedia(image_url_bg))
	{
		var _image = solutionModel.getMedia(image_url_bg).bytes
		var _resize = plugins.images.getImage(_image).resize(18,18).getData() 
		return _resize
	}
	
	return null;
}

/**
 * @properties={type:12,typeid:36,uuid:"38999D7B-C701-48A4-B834-E4C5AAD83912"}
 */
function display_description() {
	if (flag_i18n) {
		return i18n.getI18NMessage(description)
	} else {
		return description;
	}
}
