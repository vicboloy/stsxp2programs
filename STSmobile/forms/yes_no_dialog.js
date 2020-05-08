
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DF004B8F-1DBF-444D-94CA-AA78AD2519E7"}
 * @AllowToRunInFind
 */
function onActionNo(event) {
	var form = forms[event.getFormName()];
	if (globals.rfYesNoDialog.text.search(i18n.getI18NMessage('sts.txt.load.use.interim.load')) != -1){
		globals.rfYesNoDialog.interim_load = false;
		for (var item in globals.rfYesNoDialog){
			application.output(item+': '+globals.rfYesNoDialog[item]);
		}
		globals.rfLoadNumberCheckIOS(event);
		closeDialog(event);
		//create just a load
	} else if (globals.rfYesNoDialog.text.search(i18n.getI18NMessage('sts.txt.load.to.be.returned')) != -1){
		globals.rfYesNoDialog.to_be_returned = false;
		globals.rfInterimDests(event);
		globals.showEntryDialog(event);
		closeDialog(event);
	} else {
		form.controller.getWindow().hide();

	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02B81F6D-DCA6-4DA7-A917-25B9C654708B"}
 * @AllowToRunInFind
 */
function onActionYes(event) {
	var form = forms[event.getFormName()];
	var loads = true;//this is for later selection for stacked windows
	if (loads && globals.rfYesNoDialog.text.search(i18n.getI18NMessage('sts.txt.load.use.new.number')) != -1){
		globals.rfYesNoDialog.text = i18n.getI18NMessage('sts.txt.load.use.interim.load');
		globals.rfYesNoDialogText =globals.rfYesNoDialog.text; 
	} else if (loads && globals.rfYesNoDialog.text.search(i18n.getI18NMessage('sts.txt.load.use.interim.load')) != -1){
		globals.rfYesNoDialog.text = i18n.getI18NMessage('sts.txt.load.to.be.returned');
		globals.rfYesNoDialogText =globals.rfYesNoDialog.text;
		globals.rfYesNoDialog.interim_load = true;
	} else if (loads && globals.rfYesNoDialog.text.search(i18n.getI18NMessage('sts.txt.load.to.be.returned')) != -1){
		globals.rfYesNoDialog.to_be_returned = true;
		var interimLoad = true;
		if (interimLoad){
			//query FS and other about interim load here
			globals.rfInterimDests(event);
			globals.showEntryDialog(event);
			closeDialog(event);
			if (1) {return}
			
			
			
			
			
			
			
			
			var destination = '';
			var toBeReturned = false;
			if ((!interimDest) || interimDest == 1){//chose Cancel or <NONE>
				destination = null;
			} else {
				destination = dests[interimDest-1];
				response = globals.DIALOGS.showQuestionDialog(
				i18n.getI18NMessage('sts.txt.load.to.be.returned'),
				i18n.getI18NMessage('sts.txt.load.to.be.returned'),
				i18n.getI18NMessage('sts.btn.no'),
				i18n.getI18NMessage('sts.btn.yes'));
				toBeReturned = (response == i18n.getI18NMessage('sts.btn.yes'));
			}
			if (!destination){
				globals.errorDialogMobile(event,302,'genericin',globals.rfYesNoDialog.load_number);
				form[dataProv] = '';
				session.loadId = null;
				session.loadNextNumber = 0;
				return false;
			}
		}
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"42BFF964-6A7D-463A-AA8C-C61D0AEAD379"}
 */
function closeDialog(event){
	if (globals.rfYesNoDialog.win_question){globals.rfYesNoDialog.win_question.hide()}
	//var win = application.getWindow('yes_no_dialog');
}