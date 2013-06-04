/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92192BB6-3EC1-423A-B67C-A58662591BF5"}
 */
var vSearch = null;

/** *
 * @param event
 *
 * @properties={typeid:24,uuid:"BF9BA5C3-9837-490E-8B14-E55E4AB5CE0E"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	var _today = application.getTimeStamp()
	/**@type {String}*/
	var _dateText = utils.dateFormat(_today,'dd MMM')
	elements.lbl_date.text = _dateText.toLocaleLowerCase()
	elements.lbl_login_userName.text = _to_sec_user$user_id.name_compound
	
	var docManagementEnabled = scopes.svyProperties.getPropertyValue("document_management");
	if (docManagementEnabled) {
		// Show the pinned icon
		elements.btn_documents.visible = true;
	} else {
		// Hide the pinned icon
		elements.btn_documents.visible = false;
		elements.divider2.setLocation(elements.divider2.getLocationX() + 44, elements.divider2.getLocationY())
		elements.tab_favorites.setSize(elements.tab_favorites.getWidth() + 44, elements.tab_favorites.getHeight());
	}
		
	return _super.onLoad(event)
}

/** *
 * @param _programDesc
 * @param _recordDesc
 * @param _searchDesc
 * @param _relatedText
 *
 * @properties={typeid:24,uuid:"1082305A-4361-46D5-84DC-6253047A467E"}
 */
function setRecordInfoText(_programDesc, _recordDesc, _searchDesc, _relatedText) {
	_super.setRecordInfoText(_programDesc, _recordDesc, _searchDesc, _relatedText);
	
	var _string = ''
	
	if (_relatedText) {
		_string += _relatedText.toUpperCase()
	}

	if (_programDesc) {
		_string += _programDesc.toUpperCase()
	}
	if(_recordDesc)
	{
		_string += ' > ' + (_recordDesc + '').toUpperCase()
	}
	if (_searchDesc) {
		_string += _searchDesc.toUpperCase()
	}
	
	elements.lbl_program_record_info.text = _string;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"73A403F6-9938-43F6-B3F7-924244C6C61B"}
 */
function fastSearch(event) {
	if(globals.nav.mainFormName)
	{
		forms[globals.nav_currentPanel1Form].dc_fastSearch(vSearch)
	}
}

/**
 * @param {Boolean} _formView
 * @properties={typeid:24,uuid:"3018D33B-1FBE-4D07-891F-2AC116BC29AC"}
 */
function updateUI(_formView) {
	
	if(_formView == undefined) _formView = true
	
	elements.btn_rec_first.visible = (_formView == true)
	elements.btn_rec_last.visible = (_formView == true)
	elements.btn_rec_next.visible = (_formView == true)
	elements.btn_rec_prev.visible = (_formView == true)
	
	elements.btn_his_back.visible = (_formView == true)
	elements.btn_his_forw.visible = (_formView == true)
	
	elements.bg_search.visible = (_formView == true)
	elements.fld_search.visible = (_formView == true)
	
	elements.lbl_program_record_info.visible = (_formView == true)
	elements.tab_openTabs.visible = (_formView == true)
	
	elements.lbl_mainMenu.visible = (_formView == false)
	elements.lbl_line.visible = (_formView == false)
	
	
	return _super.updateUI.apply(this, arguments); // try to pass the arguments as a normal method call: _super.updateUI(arg1,arg2)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DB515E76-7DA3-4A06-9971-5789DF2DA603"}
 */
function showDesktop(event) {
	globals.svy_nav_showDesktop()
	updateUI(false)
}

/** *
 * @param event
 * @param _layout_id
 * @param _layoutObj
 * @param _foundset
 * @param _recordPK
 *
 * @properties={typeid:24,uuid:"79EF9A9B-A419-4FB5-81B1-2D7BE5895B77"}
 */
function layoutShow(event, _layout_id, _layoutObj, _foundset, _recordPK) {
	_super.layoutShow(event, _layout_id, _layoutObj, _foundset, _recordPK)
	updateUI(true)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"72980DD4-F7CA-4DDD-A8E2-7143D32BBFE9"}
 */
function openCalender(event) {
	
	if(globals['openCalendar'])
	{
		globals['openCalendar'](event)
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88DDF588-C48D-48DE-A55B-C03894F27605"}
 */
function openSettings(event) {
	var editor = new scopes.svyPropertyEditor.PropertyEditor(scopes.svySecurityManager.getUser().adminLevel, null, true, "userProperties");
	editor.showInWindow();
	return;
	/*
	{
		globals['openSettings'](event)
	}
	*/
}

/**
 * @return {Number} return -1 if closing is not allowed
 * 
 * @properties={typeid:24,uuid:"22A567BC-5A5E-4C2F-8B1A-20567641FF29"}
 */
function onClose() {
	/** @type {Number} */
	var retVal = _super.onClose.apply(this, arguments); // try to pass the arguments as a normal method call: _super.onClose(arg1,arg2)
	
	if (retVal != -1) {
		elements.tab.removeAllTabs();
		elements.tab.addTab(forms.svy_nav_fr_closingSolution);
	}
	return retVal;
}

/**
 * @properties={typeid:24,uuid:"187C592B-A67D-4501-A2F1-935ED96696FB"}
 */
function loadStartForm() {
	forms[globals.nav.mainFormName].showDesktop();
}
