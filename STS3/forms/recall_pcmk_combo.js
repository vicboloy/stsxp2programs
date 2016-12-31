/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"20322A68-9260-4BF4-97BC-D1E38ECA4E90"}
 */
function onActionScreenToggle(event) {
	forms.delete_pcmk_combo.onActionScreenToggle(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38A78B82-0606-4AF3-9D17-1E6FD79F2BDF"}
 */
function onActionSelectAll(event) {
	forms.delete_pcmk_combo.onActionSelectAll(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A60887A-D04E-4CF9-9A0A-064C45575E1A"}
 */
function onActionClearAll(event) {
	forms.delete_pcmk_combo.onActionClearAll(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AEC1BA24-274B-42EC-B7C0-030C214B0A62"}
 */
function onActionRecallSelected(event) {
	if (!scopes.globals.purgeBarcodeRecords){
		scopes.globals.purgeBarcodeRecords = [];
	}
	var blowCodes = scopes.globals.purgeBarcodeRecords;
	globals.doDialog(i18n.getI18NMessage('sts.txt.recall.selected.records'),
					i18n.getI18NMessage('sts.txt.recall.selected.records')+'?',
					i18n.getI18NMessage('sts.btn.recall.selected'),
					i18n.getI18NMessage('sts.txt.cancel'));
		//'Recall Selected Records','Recall the Selected Records?','Recall','Cancel');
	if (globals.dialogResponse != 'yes'){
		return;
	}
	globals.doDialog(i18n.getI18NMessage('sts.txt.recall.selected.records'),
		i18n.getI18NMessage('sts.txt.recall.selected.conflicts'),
		i18n.getI18NMessage('sts.txt.cancel'),
		i18n.getI18NMessage('sts.btn.recall.selected'));
		//'Recall Selected Records','This recalls records and may result in conflicts. Continue with RECALL?','Cancel','RECALL');
	if (globals.dialogResponse == 'yes'){
		return;
	}
    if (formName == null){
    	var formName = event.getFormName();
    }
    var formPrefix = formName.split("_")[0];
	var formTable = formPrefix+'_pcmk_combo_table';
	var fs = forms[formTable].foundset;
	var recoverList = [];
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i);
		if (rec.selection == 1){
			blowCodes.push(rec.idfile_id+"");
			//fs.omitRecord(i);
			recoverList.push(i);
		}
		i++;
	}
	scopes.jobs.recallIdfiles();
	while (recoverList.length != 0){
		fs.setSelectedIndex(recoverList.pop());
		fs.omitRecord(recoverList.pop());
	}
	/** i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i);
		if (rec.selection == 1){
			blowCodes.push(rec.idfile_id+"");
			fs.omitRecord(i);
		}
		i++;
	}*/
	scopes.globals.purgeBarcodeRecords = new Array();
}
