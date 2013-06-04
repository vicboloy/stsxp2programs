/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"44A82563-F499-4494-AF9A-2CE51F3768F5",variableType:-4}
 */
var vExtraTabs = [];

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"745F058D-AF2C-49C5-AFAF-4468513FFD66",variableType:4}
 */
var vFormWidth = 0;

/**
 * @properties={typeid:35,uuid:"FFAAE352-8865-48AA-92F4-CE6A9EED7A64",variableType:-4}
 */
var vFoundsets = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C5EA68CC-4FFD-4E03-B5A4-778CB3B87D23",variableType:4}
 */
var vFromOpenTabs = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C94D528-C12E-4069-8D39-87FA5DE78583"}
 */
var vPreviousTabName = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EF500F14-7220-473A-88F9-3E9095E78AEF",variableType:4}
 */
var vRemoveTab = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84366CC5-9601-49F4-A1B3-0F88E84475AB",variableType:4}
 */
var vStartPosition = 0;

/**
 * @properties={typeid:35,uuid:"84818A76-F623-4E02-B694-03517F7AF30A",variableType:-4}
 */
var vTabObjects = new Object();

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"6E1D3F71-2A26-4683-A08C-ACB580562CAD"}
 */
function onLoad(event) {
	vYOffset = 5;
	vItemHeight = 21
	vItemWidth = 130
	vItemSpacing = 5;
}

/**
 * @properties={typeid:24,uuid:"746D74F3-66EA-4848-9975-9B41E0C378F8"}
 */
function getSlotSize() {
	return vItemWidth + vItemSpacing;
}

/**
 * @properties={typeid:24,uuid:"5A07B671-695B-4174-9329-65C75D3D1081"}
 * @AllowToRunInFind
 *
 */
function setView()
{
	if(vFromOpenTabs)//vSelectedTab &&
	{
		var _program = globals.nav_program_name
		//set the right view
		globals.nav.program[_program].view = vTabObjects[vTabNames[vSelectedTab]].view
		globals.nav.program[_program].user_table_view_id = vTabObjects[vTabNames[vSelectedTab]].user_table_view_id;
		globals.nav.program[_program].active_search = vTabObjects[vTabNames[vSelectedTab]].active_search;
		globals.nav.program[_program].search_type = vTabObjects[vTabNames[vSelectedTab]].search_type;
		globals.nav.program[_program].search_id = vTabObjects[vTabNames[vSelectedTab]].search_id;
	}
}

/**
 * @param {String} _tabText
 * @properties={typeid:24,uuid:"1879E256-903E-4319-AC21-16194A4ED358"}
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
 * @properties={typeid:24,uuid:"AF75FA56-E6C3-4374-84C6-5670B956D80F"}
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
 * @properties={typeid:24,uuid:"F958244E-6BA2-42F6-9D4E-9CFD8C9211B5"}
 */
function drawItem(_slot, _selected) {
	var _coor = getSlotCoordinates(_slot);

	//was opened by clicking a open tab, so doesn't have to be added to the open tabs
	var _x = _coor.x;
	var _y = _coor.y;

	var _closeImgh = 16
	var _closeImgw = 16
	var _closeImgOffset = 2

	var _tabLeftImgh = 21
	var _tabLeftImgw = 11

	var _tabRightImgh = 21
	var _tabRightImgw = 11

	var _tabBtwImgh = 20
	var _tabBtwImgw = vItemWidth - (_tabRightImgw + _tabLeftImgw);

	var _width = vItemWidth - (_tabRightImgw + _tabLeftImgw);
	
	var _closeImg = solutionModel.getMedia("pv_open_close.png")
	var _tabLeftImg = solutionModel.getMedia("pv_open_tabs_l.png")
	var _tabBtwImg = solutionModel.getMedia("pv_open_tabs_b.png")
	var _tabRightImg = solutionModel.getMedia("pv_open_tabs_r.png")

	var _closeImgMouseOver = solutionModel.getMedia("pv_open_close_sel.png")
	var _tabLeftImgSel = solutionModel.getMedia("pv_open_tabs_l_sel.png")
	var _tabBtwImgSel = solutionModel.getMedia("pv_open_tabs_b_sel.png")
	var _tabRightImgSel = solutionModel.getMedia("pv_open_tabs_r_sel.png")

	var _form = controller.getName()
	var _formObj = solutionModel.getForm(_form)

	var _method = _formObj.getMethod('openLayout')

	var _leftLabel = _formObj.newLabel('', _x, _y, _tabLeftImgw, _tabLeftImgh, null)
	_leftLabel.imageMedia = _selected ? _tabLeftImgSel : _tabLeftImg;
	_leftLabel.transparent = true
	_leftLabel.name = 'leftLabel_' + _slot
	_leftLabel.onRightClick = _formObj.getMethod("openContextMenu");
	_x += _tabLeftImgw 

	var _labelText = getSlotText(_slot)
	var _label = _formObj.newLabel(_labelText.toUpperCase(), _x, _y, _width - 16, _tabRightImgh, _method)
	_label.formIndex = 999
	_label.transparent = true
	_label.styleClass = 'pv_opentab'
	_label.toolTipText = _labelText
	_label.name = 'label_' + _slot
	_label.rolloverCursor = SM_CURSOR.HAND_CURSOR;
	_label.onRightClick = _formObj.getMethod("openContextMenu");
	_label.showClick = false

	var _btwLabel = _formObj.newLabel('', _x, _y, _tabBtwImgw, _tabBtwImgh, null)
	_btwLabel.imageMedia = _selected ? _tabBtwImgSel : _tabBtwImg;
	_btwLabel.mediaOptions = SM_MEDIAOPTION.ENLARGE
	_btwLabel.transparent = true
	_btwLabel.name = 'btwLabel_' + _slot
	_btwLabel.onRightClick = _formObj.getMethod("openContextMenu");
	_x += _tabBtwImgw 

	var _rightLabel = _formObj.newLabel('', _x, _y, _tabRightImgw, _tabRightImgh, null)
	_rightLabel.imageMedia = _selected ? _tabRightImgSel : _tabRightImg;
	_rightLabel.transparent = true
	_rightLabel.name = 'rightLabel_' + _slot
	_rightLabel.onRightClick = _formObj.getMethod("openContextMenu");
	_x += _tabRightImgw 

	var _closeMethod = _formObj.getMethod('closeTab')
	var _closeLabel = _formObj.newLabel('', _x + _closeImgOffset - 20, _y + _closeImgOffset, _closeImgw, _closeImgh, _closeMethod)
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
 * @properties={typeid:24,uuid:"18050378-8871-4222-8822-F0540C677D11"}
 */
function drawAllItems() {
	_super.drawAllItems.apply(this, arguments);
	
	//draw line on top of open tabs
	var _form = controller.getName();
	var _formObj = solutionModel.getForm(_form);
	
	var _width;
	if (vOpenTabs.length <= getMaxSlotCount()) { //all tabs fit on the form
		_width = (vOpenTabs.length * getSlotSize()) - vItemSpacing;
	} else { //there are more tabs than fit on the form, there is an extraTabsButton of 20px
		_width = (getMaxSlotCount() * getSlotSize() + 20)
	}
	var _lineName = "topline";

	var _line = _formObj.getLabel(_lineName);
	if (!_line) {
		_line = _formObj.newLabel("", 0, 0, _width, 2);
		_line.name = _lineName;
		_line.transparent = false;
		_line.background = "#49739d";
	} else {
		// use runtime form; in race conditions (really fast layout switches when clicking wildly), this failed
		forms[_form].elements[_lineName].setSize(_width,forms[_form].elements[_lineName].getHeight());
	}
}
