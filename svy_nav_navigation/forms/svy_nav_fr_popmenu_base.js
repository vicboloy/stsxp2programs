/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"211FAE27-1D2D-420C-9B26-4AEC036E1090"}
 */
var vParentForm = null;

/**
 * @param {Array} _itemsObject Array with the items to draw
 * @param {String} _name Name of items so we can make a formname
 * @properties={typeid:24,uuid:"C14F7C54-BB1A-483B-9C2F-E5D9493E7ED2"}
 */
function drawItems(_itemsObject, _name) {
	var _formName = 'svy_nav_fr_pop_'+_name
	var _jsForm, _lblIcon, _lblText1, _lblText2, _lblbg
	
	var _x = 0
	var _y = 0
	var _bg_x = 0
	var _bg_y = 3
	var _bg_w = 187
	var _bg_h = 38
	var _o_icon_x = 6
	var _o_icon_y = 9
	var _w_icon = 28
	var _h_icon = 28
	var _o_text_x = 38
	var _o_text1_y = 11
	var _o_text2_y = 24
	var _w_text = 147
	var _h_text = 10
	var _h_item = 41
	
	
	
	if(solutionModel.getForm(_formName))
	{
		history.removeForm(_formName)
		_jsForm = solutionModel.removeForm(_formName)
	}
	
	_jsForm = solutionModel.newForm(_formName,solutionModel.getForm('svy_nav_fr_popmenu'))

	var _onClick = _jsForm.getMethod('onClick')
	var _onRightClick = _jsForm.getMethod('onRightClick')
	
	for (var i = 0; i < _itemsObject.length; i++) {
		
		//if there is a image bg
		if(_itemsObject[i].image_name_bg)
		{
			_lblIcon = _jsForm.newLabel('',_x + _o_icon_x,_y + _o_icon_y,_w_icon,_h_icon)
			_lblIcon.imageMedia = solutionModel.getMedia(_itemsObject[i].image_name_bg)
			_lblIcon.transparent = true
			_lblIcon.formIndex = 6
		}
		_lblIcon = _jsForm.newLabel('',_x + _o_icon_x,_y + _o_icon_y,_w_icon,_h_icon)
		_lblIcon.imageMedia = solutionModel.getMedia(_itemsObject[i].image_name)
		_lblIcon.transparent = true
		_lblIcon.name = 'lbl_icon_'+ i
		_lblIcon.formIndex = 8
		_lblIcon.onAction = _onClick
		_lblIcon.onRightClick = _onRightClick
		_lblIcon.showClick = false
		_lblIcon.rolloverCursor = SM_CURSOR.HAND_CURSOR
		_lblbg = _jsForm.newLabel('',_x +_bg_x,_y + _bg_y,_bg_w,_bg_h)
		_lblbg.transparent = true
		_lblbg.styleClass = 'bg_item'
		_lblbg.mediaOptions = SM_MEDIAOPTION.ENLARGE
		_lblbg.formIndex = 4
		_lblbg.onAction = _onClick
		_lblbg.onRightClick = _onRightClick
		_lblbg.name = 'lbl_bg_'+ i
		_lblbg.showClick = false
		_lblbg.rolloverCursor = SM_CURSOR.HAND_CURSOR
		_lblText1 = _jsForm.newLabel(_itemsObject[i].text1,_x + _o_text_x,_y + _o_text1_y,_w_text,_h_text)
		_lblText1.transparent = true
		_lblText1.styleClass = 'pop_line1'
		_lblText1.formIndex = 10
		_lblText1.onAction = _onClick
		_lblText1.onRightClick = _onRightClick
		_lblText1.name = 'lbl_text1_'+ i
		_lblText1.showClick = false
		_lblText1.rolloverCursor = SM_CURSOR.HAND_CURSOR
		_lblText2 = _jsForm.newLabel(_itemsObject[i].text2,_x + _o_text_x,_y + _o_text2_y,_w_text,_h_text)
		_lblText2.transparent = true
		_lblText2.formIndex = 12
		_lblText2.styleClass = 'pop_line2'
		_lblText2.onAction = _onClick
		_lblText2.onRightClick = _onRightClick
		_lblText2.name = 'lbl_text2_'+ i
		_lblText2.showClick = false
		_lblText2.rolloverCursor = SM_CURSOR.HAND_CURSOR
		_y += _h_item
	}
	
	_jsForm.getBodyPart().height = _y
	_jsForm.width = 187 //187
	return _formName
}
