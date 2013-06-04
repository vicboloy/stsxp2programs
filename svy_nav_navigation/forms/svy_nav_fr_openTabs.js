/**
 * @properties={typeid:35,uuid:"2244AB6C-C0FE-49B8-8AD6-677F0952EF63",variableType:-4}
 */
var vTabObjects = new Object();

/**
 * @properties={typeid:35,uuid:"81377889-CC6A-4906-90E9-D34A7B4397DB",variableType:-4}
 */
var vFoundsets = null;

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"05FD337F-563D-40A2-A754-66E713F75B90",variableType:-4}
 */
var vExtraTabs = [];

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"26E11D67-34D3-4581-AD98-C281A35DB4A6"}
 */
var vPreviousTabName = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1D92344F-EFFC-4D6A-90A5-9E66AD9EE190",variableType:4}
 */
var vTabWidth = 175;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1D797D55-0D1C-455D-8C9A-6AB6C23977F6",variableType:4}
 */
var vFormWidth = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C69AEDAF-087B-4A15-BDE8-7B8949CC935C",variableType:4}
 */
var vFromOpenTabs = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98B03E81-77AC-486F-8634-3FC8B6939033",variableType:4}
 */
var vRemoveTab = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"35E9D544-1A1F-4E35-90F1-24C03CB1FDFF",variableType:4}
 */
var vStartPosition = 0;

/**
 * @param {Number} _tab
 * @param {String} [_program]
 * @return {String}
 * @properties={typeid:24,uuid:"A053C9F2-6EBE-4A5B-A5A0-A4E0B785CD63"}
 */
function getTabText(_tab, _program) {
	
	var _tabName = vTabNames[_tab]
	if(_tabName && vTabObjects[_tabName] && vTabObjects[_tabName].text)
	{
		return vTabObjects[_tabName].text
	}
	else
	{
		if(globals.svy_nav_multi_tab_programs)
		{
			return globals.nav.program[_program].description + ' - ' + forms[globals.nav_currentPanel1Form][globals.nav.program[_program].display_field_header]
		}
		else
		{
			return globals.nav.program[_program].description
		}
	}
}

/**
 * @param {String} _tabText
 * @properties={typeid:24,uuid:"2A96BAD4-B46A-4683-92C7-77E07B97D857"}
 */
function setTabText(_tabText) {
	
	if(globals.nav.openNewTab)return // tab is not set yet
	
	if(vSelectedTab == null || !vTabNames[vSelectedTab] || !elements['label_'+vSelectedTab])return
	
	//find out what the selected tab is
	var _tabName = vTabNames[vSelectedTab]
	vTabObjects[_tabName].text = _tabText
	elements['label_'+vSelectedTab]['text'] = _tabText
}

/**
 * @properties={typeid:24,uuid:"7B2F0DBD-371E-4ED3-AAAD-64FF53A5A3BF"}
 */
function recreateUI() {
	var _controllerEnabled = controller.enabled
	
	controller.recreateUI()
	controller.enabled = _controllerEnabled
	
	if(globals.svy_nav_multi_tab_programs)
	{
		//set all the texts
		for (var i = 0; i < vOpenTabs.length; i++) {
			elements['label_'+i]['text'] = vTabObjects[vTabNames[i]].text 
		}
	}
}

/**
 * @param {Number} _slot
 * @param {Boolean} _selected
 *
 * @properties={typeid:24,uuid:"EFD57785-7CE2-409C-9494-CEC15D4D90D3"}
 */
function drawItem(_slot, _selected) {
	var _coor = getSlotCoordinates(_slot);

	var _x = _coor.x;
	var _y = _coor.y;

	var _closeImgh = 10
	var _closeImgw = 11
	var _closeImgOffset = 7

	var _tabLeftImgh = 25
	var _tabLeftImgw = 7

	var _tabRightImgh = 25
	var _tabRightImgw = 8

	var _tabBtwImgh = 25
	var _tabBtwImgw = vTabWidth - (_tabRightImgw + _tabLeftImgw);

	var _width = vTabWidth - (_tabRightImgw + _tabLeftImgw);

	var _closeImg = solutionModel.getMedia("nav_ot_tab_close.png")
	var _tabLeftImg = solutionModel.getMedia("nav_ot_tab_left.png")
	var _tabBtwImg = solutionModel.getMedia("nav_ot_tab_btw.png")
	var _tabRightImg = solutionModel.getMedia("nav_ot_tab_right.png")

	var _closeImgMouseOver = solutionModel.getMedia("nav_ot_tab_close_sel.png")
	var _tabLeftImgSel = solutionModel.getMedia("nav_ot_tab_left_sel.png")
	var _tabBtwImgSel = solutionModel.getMedia("nav_ot_tab_btw_sel.png")
	var _tabRightImgSel = solutionModel.getMedia("nav_ot_tab_right_sel.png")

	var _form = controller.getName()
	var _formObj = solutionModel.getForm(_form)

	var _method = _formObj.getMethod('openLayout')

	var _leftLabel = _formObj.newLabel('', _x, _y, _tabLeftImgw, _tabLeftImgh, null)
	_leftLabel.imageMedia = _selected ? _tabLeftImgSel : _tabLeftImg;
	_leftLabel.transparent = true
	_leftLabel.name = 'leftLabel_' + _slot
	_leftLabel.onRightClick = _formObj.getMethod("openContextMenu");
	_x += _tabLeftImgw - 1

	var _labelText = getSlotText(_slot)
	var _label = _formObj.newLabel(_labelText, _x, _y, _width - 16, _tabRightImgh, _method)
	_label.formIndex = 999
	_label.transparent = true
	_label.styleClass = 'opentab'
	_label.toolTipText = _labelText
	_label.rolloverCursor = SM_CURSOR.HAND_CURSOR;
	_label.name = 'label_' + _slot
	_label.onRightClick = _formObj.getMethod("openContextMenu");
	_label.showClick = false

	var _btwLabel = _formObj.newLabel('', _x, _y, _tabBtwImgw, _tabBtwImgh, null)
	_btwLabel.imageMedia = _selected ? _tabBtwImgSel : _tabBtwImg;
	_btwLabel.mediaOptions = SM_MEDIAOPTION.ENLARGE
	_btwLabel.transparent = true
	_btwLabel.name = 'btwLabel_' + _slot
	_btwLabel.onRightClick = _formObj.getMethod("openContextMenu");
	_x += _tabBtwImgw - 1

	var _rightLabel = _formObj.newLabel('', _x, _y, _tabRightImgw, _tabRightImgh, null)
	_rightLabel.imageMedia = _selected ? _tabRightImgSel : _tabRightImg;
	_rightLabel.transparent = true
	_rightLabel.name = 'rightLabel_' + _slot
	_rightLabel.onRightClick = _formObj.getMethod("openContextMenu");
	_x += _tabRightImgw - 1

	var _closeMethod = _formObj.getMethod('closeTab')
	var _closeLabel = _formObj.newLabel('', _x + _closeImgOffset - 25, _y + _closeImgOffset, _closeImgw, _closeImgh, _closeMethod)
	_closeLabel.imageMedia = _closeImg
	_closeLabel.formIndex = 999
	_closeLabel.rolloverImageMedia = _closeImgMouseOver
	_closeLabel.rolloverCursor = SM_CURSOR.HAND_CURSOR;
	_closeLabel.transparent = true
	_closeLabel.name = 'close_' + _slot
	_closeLabel.showClick = false
	_closeLabel.onRightClick = _formObj.getMethod("openContextMenu");
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"6BC5C74C-9AA7-4FDE-8D2A-A9219A0EDD90"}
 */
function onLoad(event) {
	vItemWidth = 175;
	vItemSpacing = -2;
}

/**
 * @properties={typeid:24,uuid:"4DEA0D3A-87E0-4CFA-916B-410B5D82FABE"}
 */
function getSlotSize() {
	return 175;
}
