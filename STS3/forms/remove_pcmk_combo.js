/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"086C6FA2-5A14-49BD-8479-782A9738321A"}
 */
function onActionScreenToggle(event) {
	forms.delete_pcmk_combo.onActionSceenToggle(event);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2F9F8285-F5C7-4060-9B3E-C7C586CD8A76"}
 */
function onActionSelectAll(event) {
	forms.delete_pcmk_combo.onActionSelectAll(event);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4C8E76BF-DE6B-4B15-BB36-E36EFFD023AB"}
 */
function onActionClearAll(event) {
	forms.delete_pcmk_combo.onActionClearAll(event);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"EEF2A17A-C408-474B-88DF-7083D8BCED07"}
 */
function onActionRemoveSelected(event) {
	if (!scopes.globals.purgeBarcodeRecords){
		scopes.globals.purgeBarcodeRecords = [];
	}
	var blowCodes = scopes.globals.purgeBarcodeRecords;
	globals.doDialog("Remove Selected Records","Remove the Selected Records?","Remove","Cancel");
	if (globals.dialogResponse != "yes"){
		return;
	}
	globals.doDialog("Remove Selected Records","This permanently purges/removes records. \nContinue with REMOVE?","Cancel","REMOVE");
	if (globals.dialogResponse == "yes"){
		return;
	}
    if (formName == null){
    	var formName = event.getFormName();
    }
    var formPrefix = formName.split("_")[0];
	var formTable = formPrefix+'_pcmk_combo_table';
	var fs = forms[formPrefix+'_pcmk_combo_table'].foundset;
	var removeList = [];
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		if (rec.selection == 0){continue}
		var idfileId = rec.idfile_id;
		blowCodes.push(rec.id_serial_number_id+"");
		removeList.push(i-1); //selection is array, which is zero-based, records are one-based
	}
	while (removeList.length > 0){
		forms[formTable].controller.setSelectedIndex(removeList.pop());
		forms[formTable].controller.omitRecord();
	}
	var purge = true;
	scopes.jobs.purgeDeletedBarcodes(purge);
}
