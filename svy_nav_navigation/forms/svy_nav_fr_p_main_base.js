/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1CF2E7DF-8E6C-4DD4-8B9A-BDD261E3F9AE"}
 */
function onResize(event) {
	//run onMainResize-method of when available
	if(globals['onMainResize'])
	{
		globals['onMainResize']()	
	}
}

/** *
 * @param event
 *
 * @properties={typeid:24,uuid:"333B6319-D8C4-4399-8689-FB0752885D93"}
 */
function onLoad(event) {
	return _super.onLoad(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} [_show]
 *
 * @properties={typeid:24,uuid:"A54ECA69-AE1D-49DE-97AF-C2C975979277"}
 */
function showBookmarks(event, _show) {
	if (!_show && elements.tab_popmenu.visible) {
		elements.tab_popmenu.visible = false
		return
	}
	elements.tab_popmenu.visible = true
	
	var _element = elements.btn_bookmarks
	var _x = _element.getLocationX()
	var _y =  _element.getLocationY()
	elements.tab_popmenu.removeAllTabs()
	elements.tab_popmenu.addTab(forms.svy_nav_fr_popmenuBookmarks)
	forms.svy_nav_fr_popmenuBookmarks.updateUI()
	var _startsize = 83
	var _itemsize = 42
	var _popMenu_w = 193
	var _element_w = _element.getWidth()
	var _element_h = _element.getHeight()
	var _height = globals.nav.bookmarks.length * _itemsize + _startsize
	elements.tab_popmenu.setLocation(_x -_popMenu_w + _element_w,_y - _height + _element_h)
	elements.tab_popmenu.setSize(_popMenu_w,_height)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} [_show]
 * 
 * @properties={typeid:24,uuid:"7B6EB64A-10C8-42FB-8120-448C241F0BC1"}
 */
function showRecordHistory(event, _show)  {
	if (!_show && elements.tab_popmenu.visible) {
		elements.tab_popmenu.visible = false
		return
	}
	elements.tab_popmenu.visible = true
	
	var _element = elements.btn_recordHistory
	var _x = _element.getLocationX()
	var _y =  _element.getLocationY()
	elements.tab_popmenu.removeAllTabs()
	elements.tab_popmenu.addTab(forms.svy_nav_fr_popmenuRecordHistory)
	forms.svy_nav_fr_popmenuRecordHistory.updateUI()
	var _startsize = 83
	var _itemsize = 42
	var _popMenu_w = 193
	var _element_w = _element.getWidth()
	var _element_h = _element.getHeight()
		var _height = globals.nav.recordHistory.length * _itemsize + _startsize
	elements.tab_popmenu.setLocation(_x -_popMenu_w + _element_w,_y - _height + _element_h)
	elements.tab_popmenu.setSize(_popMenu_w,_height)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} [_show]
 *
 * @properties={typeid:24,uuid:"BCC8B6F4-77F6-454E-966B-E9E3E0F73F50"}
 * @AllowToRunInFind
 */
function showDocuments(event, _show)  {
	
	// Don't allow to show the list of pinned documents in regular document management 
	var _docLayoutId;
	var _docPinnedLayoutId;	
	/** @type {JSFoundSet<db:/svy_framework/nav_layout>} */
	var _layoutFs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_layout');
	_layoutFs.loadAllRecords();
	if (_layoutFs.find()) {
		_layoutFs.name = 'dmDocuments';
		if (_layoutFs.search())
			_docLayoutId = _layoutFs.layout_id;
	}
	if (_layoutFs.find()) {
		_layoutFs.name = 'dmDocuments_pinned';
		if (_layoutFs.search())
			_docPinnedLayoutId = _layoutFs.layout_id;
	}	
	if (globals.nav_currentPanel1Form &&  (globals.nav_layout_id == _docLayoutId || globals.nav_layout_id == _docPinnedLayoutId)) {
		elements.tab_popmenu.visible = false;
		return -1;
	}
	
	if(!globals.nav_currentPanel1Form || !forms[globals.nav_currentPanel1Form].foundset.getSelectedRecord())
	{
		// No documents if there is no selected record.
		return -1
	}
	
	var _rec = forms[globals.nav_currentPanel1Form].foundset.getSelectedRecord()
	if (!_show && elements.tab_popmenu.visible) {
		elements.tab_popmenu.visible = false
		return 1
	}
	elements.tab_popmenu.visible = true
	
	var _element = elements.btn_documents
	var _x = _element.getLocationX()
	var _y =  _element.getLocationY()
	elements.tab_popmenu.removeAllTabs()
	elements.tab_popmenu.addTab(forms['svy_nav_fr_popmenuDocuments'])
	forms['svy_nav_fr_popmenuDocuments'].updateUI(_rec)
	var _startsize = 83
	var _itemsize = 42
	var _popMenu_w = 193
	var _element_w = _element.getWidth()
	var _element_h = _element.getHeight()
	var _height = globals.nav.documents.length * _itemsize + _startsize
//	if(_height < 117) _height = 117
		
	elements.tab_popmenu.setLocation(_x -_popMenu_w + _element_w,_y - _height + _element_h)
	elements.tab_popmenu.setSize(_popMenu_w,_height)
	return 1
}

/**
 *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"8DE12C44-65A0-4FAB-ABF2-2407EBB32DAA"}
 */
function onShow(firstShow, event) {
	if(firstShow && (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT || application.getApplicationType() == APPLICATION_TYPES.RUNTIME_CLIENT))
	{
		elements.lbl_bg.imageURL = "media:///" + globals.svy_nav_bg_image_name;
		elements.lbl_bg.visible = true
	}
	return _super.onShow(firstShow, event)
}
