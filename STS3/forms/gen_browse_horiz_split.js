
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D6141D0-3298-4D11-9211-D6536912D19D"}
 */
function onShow(firstShow, event) {
	if (elements.btn_Clear){elements.btn_Clear.enabled = true;}
	if (elements.btn_SelectAll){elements.btn_SelectAll.enabled = true;}
	if (elements.btn_RemoveSelected){elements.btn_RemoveSelected.enabled = true;}

	elements.split.dividerLocation = 0.75;
	scopes.jobs.formPermissions(event,false);
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37F5FBBB-4F5A-4F3C-A488-A0EF4FAB6668"}
 */
function onActionBrowseExit(event) {
	var win = application.getActiveWindow();
	win.destroy();
	// TODO Auto-generated method stub
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6CE119C0-B7B7-4739-A18A-34A66B321F44"}
 */
function onHide(event) {
	var formName = event.getFormName();
	if (application.isInDeveloper()){application.output('formname hanging table '+formName)}
	scopes.jobs.removeFormHist(formName + '_table');
	return _super.onHide(event)
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"331F8566-6A83-493E-8863-62BA9FD706C7"}
 */
function onResizePcmkCombo(event) {
	//application.output('resizing main form')
}
