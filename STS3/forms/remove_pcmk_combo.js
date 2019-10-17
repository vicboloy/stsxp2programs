/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9991A8C3-D2AF-42FD-BD67-758AA8BD5FEF",variableType:4}
 */
var purgeJob = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8864AF99-5A97-4914-BF98-A08476483816"}
 */
var versionForm = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5309C58F-C142-4A49-8D21-D9B5C556C648"}
 */
var baseForm = '';
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"086C6FA2-5A14-49BD-8479-782A9738321A"}
 */
function onActionScreenToggle(event) {
	forms.delete_pcmk_combo.onActionScreenToggle(event);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"2F9F8285-F5C7-4060-9B3E-C7C586CD8A76"}
 */
function onActionSelectAll(event) {
	forms.delete_pcmk_combo.onActionSelectAll(event);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"4C8E76BF-DE6B-4B15-BB36-E36EFFD023AB"}
 */
function onActionClearAll(event) {
	forms.delete_pcmk_combo.onActionClearAll(event);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"EEF2A17A-C408-474B-88DF-7083D8BCED07"}
 */
function onActionRemoveSelected(event) {
	
	if (!scopes.jobs.purgeBarcodeRecords){
		scopes.jobs.purgeBarcodeRecords = [];
	}
	/** @type {Array} */
	var blowCodes = scopes.jobs.purgeBarcodeRecords;
	var message = i18n.getI18NMessage('sts.window.purge.selected');
	if (purgeJob){
		message = i18n.getI18NMessage('sts.txt.purge.entire.job');
	}
	null;
	globals.doDialog(message,
						message,
						i18n.getI18NMessage('sts.btn.purge.selected'),//yes
						i18n.getI18NMessage('sts.btn.cancel'));//no
		//'Remove Selected Records','Remove the Selected Records?','Remove','Cancel');
	if (globals.dialogResponse.toLowerCase() != 'yes'){
		return;
	}
	globals.doDialog(message,
						i18n.getI18NMessage('sts.txt.purge.permanent'),
						i18n.getI18NMessage('sts.btn.yes'),//yes
						i18n.getI18NMessage('sts.btn.no'));//no
		//'Remove Selected Records','This permanently purges/removes records. \nContinue with REMOVE?','Cancel','REMOVE');
	if (globals.dialogResponse.toLowerCase() == 'yes'){
		return;
	}
	application.output('purging job')
	//if (1==1){return}
	if (purgeJob){
		//Are all idfiles deleted? Meaning NO idfiles on a search through job->sheets->piecemark->idfiles
		var instance = forms['remove_criteria'].versionForm;
		var jobId = forms['remove_criteria'+instance].vJobID;
		
		if (application.isInDeveloper()){application.output('Purging job '+jobId);}
		if (!scopes.jobs.checkJobEmpty2(jobId)){
			if (application.isInDeveloper()){application.output('STOP.  Job has undeleted data.  Cannot purge.');}
			return;
		}
		if (application.isInDeveloper()){application.output('Job Empty. Ok to PURGGE');}
		scopes.jobs.warningsYes(event);
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.purging',['JOB']),true);
		scopes.jobs.deleteEntireJob(jobId);
		scopes.jobs.warningsX();
		scopes.jobs.idfilesToDelete = new Array();
		var win = application.getActiveWindow();
		win.hide();

		return;
	}
	/** @type {String} */
    if (formName == null){
    	var formName = event.getFormName();
    }
    var formPrefix = formName.split("_")[0];
	var formTable = formPrefix+'_pcmk_combo_table';
	/** @type {JSFoundSet} */
	var fs = forms[formPrefix+'_pcmk_combo_table'].foundset;
	var removeList = [];
	var i = 1;
	while (i <= fs.getSize()){
		/** @type {JSRecord} */
		var rec = fs.getRecord(i++);
		if (rec.selection == 0){continue}
		if (rec.if_id_serial_number_id){
			scopes.jobs.purgeBarcodeRecords.push(rec.if_id_serial_number_id.toString());
		}
		//removeList.push(i-1); //selection is array, which is zero-based, records are one-based
	}
	scopes.jobs.purgeDeletedIdfiles();
	scopes.jobs.warningsX();
	
	scopes.jobs.idfilesToDelete = new Array();
	var win = application.getActiveWindow();
	win.hide();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FCAC3D5A-5C54-4EEF-8CF2-1BA9E3640B24"}
 */
function onShow(firstShow, event) {
	purgeJob = false;
	foundset.loadAllRecords();
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4EEBF9AC-FABE-4544-BB9D-A5D66E3542AB"}
 */
function onActionDisablePurge(event) {
	purgeJob = false;//disable purge.  has issues of deleting wrong idfiles
}
