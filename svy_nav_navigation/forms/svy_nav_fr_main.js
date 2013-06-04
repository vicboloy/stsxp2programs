/**
 *	Set the splitpanes
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"f4e4ac37-bf1a-4745-b9a0-b95b5697073f"}
 */
function onPreLoad(_event)
{
	scopes.modUtils$UI.initSplitPane(_event.getFormName(), 'tab_split',0,150,globals.nav.splitPanesDividerSize,true, globals.nav.splitPanesDividerColor)
	
	if(globals.nav_show_open_tabs)
	{
		elements.tab_split.setRightForm(forms[globals.svy_utl_getFrameworkFormName("nav_fr_main_openTabs")])
	}
	
	//set startup form
	var _startUpForm = scopes.svyProperties.getPropertyValue('startup_form')
	if(_startUpForm)
	{
		if(globals.nav_show_open_tabs)
		{
			forms[globals.svy_utl_getFrameworkFormName("nav_fr_main_openTabs")].elements.tab.addTab(forms[_startUpForm])
		}
		else
		{
			elements.tab_split.setRightForm(forms[_startUpForm], null)
		}
	}
	

}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC03DF5D-6A49-4609-BAB5-44A1EBADCD80"}
 */
function onResize(event) {
	//run onMainResize-method of when available
	if(globals['onMainResize'])
	{
		globals['onMainResize']()	
	}
}

/** *
 * @param _formName
 *
 * @properties={typeid:24,uuid:"15EB6AB3-2FF0-43F7-8627-1DF90EE8141F"}
 */
function layoutAddToTab(_formName) {
	if(globals.nav_show_open_tabs)
	{
		forms[globals.svy_utl_getFrameworkFormName("nav_fr_main_openTabs")].elements.tab.addTab(forms[_formName])
	}
	else
	{
		elements.tab_split.setRightForm(forms[_formName])
	}
}

/** *
 * @param _programDesc
 * @param _recordDesc
 * @param _searchDesc
 * @param _relatedText
 *
 * @properties={typeid:24,uuid:"A0BD218F-39CB-48FE-B9CF-AD6F391C2AD0"}
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
	if (_recordDesc) {
		if (typeof _recordDesc == 'string') {
			_string += ' > ' + _recordDesc.toUpperCase()
		} else {
			_string += ' > ' + _recordDesc;
		}		
	}
	if (_searchDesc) {
		_string += _searchDesc.toUpperCase()
	}
	
	forms[globals.svy_utl_getFrameworkFormName("nav_fr_status_bar")].elements['form_name']['text'] =_string;
}

/**
 * @properties={typeid:24,uuid:"5F84874B-98DF-419C-8005-681545A3C95A"}
 */
function updateUI() {
	_super.updateUI.apply(this, arguments);
	forms.svy_nav_fr_tree_top.updateUI()
}

/** *
 * @param _layout_id
 *
 * @properties={typeid:24,uuid:"2889D634-6B23-4B04-92B0-B7C7AB15240E"}
 */
function updateMenu(_layout_id) {
	_super.updateMenu(_layout_id)
	forms.svy_nav_fr_tree.selectLayoutNode(_layout_id)
}

/**
 * @properties={typeid:24,uuid:"BCB14FEE-F09A-4893-8E17-BA556472224F"}
 */
function initMenu() {
	_super.initMenu.apply(this, arguments);
	forms.svy_nav_fr_tree.loadTree();
}

/**
 * @param {Number} _oldTab
 * 
 * @properties={typeid:24,uuid:"F9E68FB0-E003-4CED-B5F2-A393C6990BCE"}
 */
function layoutHide(_oldTab) {
	_super.layoutHide.apply(this, arguments);
	if(globals.nav_show_open_tabs)
	{
		forms[globals.svy_utl_getFrameworkFormName("nav_fr_main_openTabs")].elements.tab.removeAllTabs()
		
	}
	
}

/** *
 * @param event
 *
 * @properties={typeid:24,uuid:"3B0FE6F8-48A0-4CD1-B65E-94DC841B5F41"}
 */
function onLoad(event) {
	onPreLoad(event)
	return _super.onLoad(event)
}

/**
 * @return {Number} return -1 if closing is not allowed
 *
 * @properties={typeid:24,uuid:"74B11FF5-0395-4102-9776-7F4EB568B9B5"}
 */
function onClose() {
	/** @type {Number} */
	var retVal = _super.onClose.apply(this, arguments); // try to pass the arguments as a normal method call: _super.onClose(arg1,arg2)
	
	if (retVal != -1) {
		// set the forms svy_nav_closingSolution on the tab so onHide's are called
		elements.tab_split.setRightForm(forms.svy_nav_fr_closingSolution);
	}
	return retVal;
}

/**
 * @properties={typeid:24,uuid:"26008557-6139-4752-BB81-A2BE22D3AF87"}
 */
function showDesktop() {
	
}
