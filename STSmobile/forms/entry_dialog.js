/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C32D0B14-8840-407A-8F2E-3F9D33EF5AAD"}
 */
var answer = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"82067ECE-8011-43D3-AAE1-894098622CC2"}
 */
function onActionCancel(event) {
	closeDialog(event);
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"98126342-A75C-4EBE-8CE7-205FB670162C"}
 */
function closeDialog(event){
	if (globals.rfYesNoDialog.win_entry){globals.rfYesNoDialog.win_entry.hide()}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"06659FB4-070D-4D84-9AB9-1E0D7028181A"}
 */
function onActionOkay(event) {
	if (!answer || !answer.match(/[0-9]+/) || answer*1 < 1 || answer*1 > globals.rfYesNoDialog.destinations.length){answer = '';application.updateUI();return}
	if (answer*1 == 1){
		closeDialog(event);
		return;
	}
	globals.rfYesNoDialog.destinationIdx = answer*1;
	globals.rfYesNoDialog.destination = globals.rfYesNoDialog.destinations[answer-1];
	for (var item in globals.rfYesNoDialog){
		application.output(item+': '+globals.rfYesNoDialog[item]);
	}
	globals.rfLoadNumberCheckIOS(event);
	closeDialog(event);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8D23057-2E9A-4AD9-BE33-EAB61F4013B9"}
 */
function onShow(firstShow, event) {
	answer = '';
	var win = application.getActiveWindow();
	globals.rfYesNoDialog.win = win;
	var oldWin = application.getWindow('Question');
	if (oldWin){oldWin.hide()}
}
