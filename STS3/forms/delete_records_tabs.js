/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A5611A8-1747-4072-8D5D-65B189DE8E2E"}
 */
function onHide(event) {
	var win = application.getActiveWindow();
	var winName = win.getName();
	//var formName = event.getFormName();
	//var actionName = formName.split("_")[0];
	//actionName = scopes.globals.capitalize(actionName);
	globals.setWindowClosed(winName);
	//return _super.onHide(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BFCC70F7-A3B1-4B88-AA95-F205E34AACA6"}
 */
function onActionCancel(event) {
	var formName = event.getFormName();
	var clearFormName = formName.split("_")[0]+"_piecemark_info";
	forms.delete_criteria.onActionClear(event,clearFormName);
	scopes.globals.onActionCancelButton(event);
}
