/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BEFFA424-895B-47E9-AFE1-28357AA6EB63"}
 */
var selectedTemplate = null;

/**
 * Sets the borders of the element, so they show, selected or not selected
 * @private 
 * @author Sanneke Aleman
 * @param {JSEvent} [event]
 * @properties={typeid:24,uuid:"46C96C3D-7263-4D47-9BB5-3569B5AE20DB"}
 */
function setBorders(event) {

	
	var _element 
	var _cur_element
	if(event)
	{
		_element = event.getElementName()
		selectedTemplate = _element
	}
	
	for (var i = 1; i <= 10; i++) {
		_cur_element = 'template_'+i
		
		if(_element != _cur_element)
		{
			elements[_cur_element].border = 'LineBorder,1,#c0c0c0';
		}
		else
		{
			elements[_cur_element].border = 'LineBorder,2,#3399FF';
		}
	}

}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"B74BB7FB-6E93-40D7-B4AE-8F64BAB9EF8B"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	gotoEdit()
	setBorders()
}

/**
 * @param {String} [_selectedTemplate]
 * @properties={typeid:24,uuid:"D3881B2D-9D4E-4687-833F-83C95177C80F"}
 */
function open(_selectedTemplate) {
	if(_selectedTemplate)selectedTemplate = _selectedTemplate
	setBorders()
	globals.DIALOGS.showFormInModalDialog('svy_nav_c_template_dtl', -1, -1, -1, -1, 'i18n:svy.fr.lbl.select_template');
	
	if(selectedTemplate)
	{
		return selectedTemplate
	}
	return null
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"0F499DB9-C293-4B55-91F7-9769F4580079"}
 */
function cancel(_event) {
	selectedTemplate = null
	globals.svy_nav_closeForm(_event)
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"409380A4-48D9-4B86-9247-FB79C77D4A0F"}
 */
function save(_event) {
	globals.svy_nav_closeForm(_event)
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9465AF9-F437-40A7-B918-FF3E006D9A6D"}
 */
function selectAndSave(event) {
	var _element = event.getElementName();
	selectedTemplate = _element;
	save(event);
}
