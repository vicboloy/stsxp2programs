/**
 * @properties={type:12,typeid:36,uuid:"4966131A-BE7D-43A4-A6F9-C326F57D31E6"}
 */
function no_image()
{
	return "media:///1px_transp.png";
}

/**
 * @properties={type:12,typeid:36,uuid:"92C8F9AD-1C68-457E-B885-39579589DEDB"}
 */
function calc_bg_image()
{
	switch (menuitem_type) {
	case 'L':
		if (utils.hasRecords(nav_menu_items_to_nav_layout) && nav_menu_items_to_nav_layout.image_url_bg) {
			return 'media:///' + nav_menu_items_to_nav_layout.image_url_bg;
		} else {
			return "media:///bg_button_darkblue.png";
			
		}

		break;
	case 'F':
		if (menuitem_image) {
			return 'media:///' + menuitem_image_bg;
		} else {
			return "media:///bg_button_orange.png";
		}

		break;
	default:
		if (menuitem_image) {
			return 'media:///' + menuitem_image_bg;
		} else {
			return "media:///bg_button_purple.png";
		}
		break;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"1A6A9298-2309-4B25-8352-21CD9375CDF2"}
 */
function calc_fg_image()
{
	switch (menuitem_type) {
	case 'L':
		if (utils.hasRecords(nav_menu_items_to_nav_layout) && nav_menu_items_to_nav_layout.image_url) {
			return 'media:///' + nav_menu_items_to_nav_layout.image_url;
		} else {
			return "media:///fg_button_orders.png";
			
		}

		break;
	case 'F':
		if (menuitem_image) {
			return 'media:///' + menuitem_image;
		} else {
			return "media:///fg_button_lightbulb.png";
		}

		break;
	default:
		if (menuitem_image) {
			return 'media:///' + menuitem_image;
		} else {
			return "media:///fg_button_box.png";
		}
		break;
	}
}

/**
 * @properties={type:-4,typeid:36,uuid:"CA7A5FA1-2268-4DF1-AF14-429C822C3AAB"}
 */
function image18_18()
{
	if(tree_image)
	{
		var _jsMedia = solutionModel.getMedia(utils.stringReplace(tree_image,'media:///',''));
		if (_jsMedia) {
			var _image = _jsMedia.bytes
			var _resize = plugins.images.getImage(_image).resize(18,18).getData() 
			return _resize
		}
	}
	
	return null;
}

/**
 * @properties={type:-4,typeid:36,uuid:"EEE57526-FD42-415F-A0DA-673BE42737E2"}
 */
function m_select_menu()
{
    if(globals.nav_menu_item_id == menu_item_id)
    {
    	return solutionModel.getMedia('m_menu_select.png').bytes
    }
    else return null;
}

/**
 * Calculate the row background color.
 *
 * @param {Number} index row index
 * @param {Boolean} selected is the row selected
 * @param {String} elementType element type
 * @param {String} dataProviderID element data provider
 * @param {Boolean} edited is the record edited
 *
 * @returns {String} row background color
 *
 * @properties={type:12,typeid:36,uuid:"A57943B5-C859-4B79-8477-B8D25E7BC9D7"}
 */
function rowBGColorCalc(index, selected, elementType, dataProviderID, edited)
{
	
	return '#ffffff';
	
}

/**
 *
 * @properties={type:12,typeid:36,uuid:"BD6A1D4E-A521-4628-9C5F-0261A834AEBF"}
 */
function display_description()
{
	if(menuitem_type == 'F' && utils.hasRecords(nav_menu_items_to_nav_function) && nav_menu_items_to_nav_function.display_description)
	{
		return nav_menu_items_to_nav_function.display_description
	}
	else if(utils.hasRecords(nav_menu_items_to_nav_layout) && nav_menu_items_to_nav_layout.display_description)
	{
		return nav_menu_items_to_nav_layout.display_description;
	}
	else if(flag_i18n && description)
	{
		return i18n.getI18NMessage(description)
	}
	else if(description)
	{
		return description
	}
	else
	{
		return ''
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"E22AF6A9-A0E2-4D1D-8192-235952F8B78D"}
 */
function display_description_bg() {
	
	var _title = display_description;
	
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		// For web client only return the text
		return _title;
	}
	
	var _bg_img_url = calc_bg_image;
	var _fg_img_url = calc_fg_image;
	
	var _html = "<html><table><tr><td width=18px";
	if (_bg_img_url) {
		_html += " style='background-image:"+ _bg_img_url +";'>"
	} else {
		_html += ">";
	}
	if (_fg_img_url) {
		_html += "<img width=18 height=18 src="+ _fg_img_url +"></td>";
	}
	_html += "<td>"+ _title + "</td></tr></table></html>";
	
	return _html;
}

/**
 *
 * @properties={type:12,typeid:36,uuid:"C8C0EB61-FE04-4EDD-8392-CE397698D670"}
 */
function sort_calc()
{
	return 'sort_order asc';
}

/**
 *
 * @properties={type:12,typeid:36,uuid:"BB7BF528-4BE2-4508-A534-94C9A83DC551"}
 */
function tree_image() {

	switch (menuitem_type) {
	case 'L':
		if (utils.hasRecords(nav_menu_items_to_nav_layout) && nav_menu_items_to_nav_layout.image_url) {
			return 'media:///' + nav_menu_items_to_nav_layout.image_url;
		} else {
			return 'media:///program_orange.png';
		}

		break;
	case 'F':
		if (menuitem_image) {
			return 'media:///' + menuitem_image;
		} else {
			return 'media:///function_16_16.png';
		}

		break;
	default:
		if (menuitem_image) {
			return 'media:///' + menuitem_image;
		} else {
			return 'media:///folder_blue.png';
		}
		break;
	}
}

/**
 * @properties={type:-4,typeid:36,uuid:"A8196D9E-70E8-4CC9-9CD3-B62B675A4DAA"}
 */
function calc_fg_image_webclient()
{
	
	var iconMedia = '';
	switch (menuitem_type) {
		case 'L':
			if (utils.hasRecords(nav_menu_items_to_nav_layout) && nav_menu_items_to_nav_layout.image_url) {
				iconMedia = nav_menu_items_to_nav_layout.image_url;
			} else {
				iconMedia = "fg_button_orders.png";
				
			}
	
			break;
		case 'F':
			if (menuitem_image) {
				iconMedia = menuitem_image;
			} else {
				iconMedia = "fg_button_lightbulb.png";
			}
	
			break;
		default:
			if (menuitem_image) {
				iconMedia = menuitem_image;
			} else {
				iconMedia = "fg_button_box.png";
			}
			break;
	}
	
	if (iconMedia) {
		return plugins.images.getImage(solutionModel.getMedia(iconMedia).bytes).resize(18, 18).getData();
	}
	
	return null;
}
