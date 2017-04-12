/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F8E9EBD-C13A-4BD6-97DF-80B30320F414"}
 */
function onRecordSelection(event) {
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D8B452EC-CA08-4C98-92AC-AA89B32CFC4A"}
 */
function onShow(firstShow, event) {
	var win = application.getWindow('Transaction Detail');
	if (win && win.isVisible()){
		win.hide();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3927887B-52B5-47CC-B171-99E46E0505FB"}
 */
function onActionDetail(event) {
	var winName = 'Transaction Detail';
	var win = application.getWindow(winName);
	if (!win){
		win = application.createWindow(winName,JSWindow.MODAL_DIALOG);
	}
	win.setLocation(0,0);
	win.setSize(240,300);
	win.show('trans_detail');
return true;
}
