/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4A3FA93-7F61-4EE8-A461-4A81493011C2"}
 */
var labelSource = '';
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FDD2EE60-7C8B-4736-9694-E4D9E8EAF75B"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow){
		globals.setUserFormPermissions(event,false);
		scopes.prefs.screenFull = false;
		labelSource = event.getFormName();
		//if (application.isInDeveloper()){application.output('RM setting labelSource Form')}
	}
	var formName = event.getFormName();
	//var formPrefix = formName.split("_")[0];
	//var formCriteria = formPrefix+"idlabel";
	var formNameTable = formName+'_table';
	if (globals.session.program == i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')){
		fs = globals.session.tempFS;
	} else {
		if (!forms[formNameTable]){return}
		/** @type JSFoundSet */
		var fs = forms[formNameTable].foundset;
	}
	//application.output(fs.getRecord(1));
	databaseManager.saveData(fs);//20190531 keep sort on close for printing labels
	if (formName.search("barcode_") != -1) {
		var ordered = scopes.jobs.tmp_LabelSort;
		switch (ordered){
			case i18n.getI18NMessage('sts.print.order.piecemark'):
				fs.sort('piecemarks.piecemark asc');
				break;
			case i18n.getI18NMessage('sts.print.order.id.number'):
				if (formName.search('raw') == -1){
					fs.sort('serial_number asc');
				} else {
					fs.sort('serial_number asc');
				}
				break;
			case i18n.getI18NMessage('sts.print.order.drawing.number'):
				fs.sort('piecemarks.drawing_number asc');
				break;
			case i18n.getI18NMessage('sts.print.order.material'):
				fs.sort('material asc');
				break;
			case i18n.getI18NMessage('sts.print.order.part.number'):
				fs.sort('model_part asc');
				break;
			default:
				if (formName.search('raw') == -1){
					fs.sort('piecemarks.piecemark asc');
				} else {
					fs.sort('id_serial_number asc');
				}
		}
	}

	scopes.jobs.removeFormHist(formNameTable);
	forms[formName].elements.tabless.addTab(formNameTable);
	//scopes.jobs.tablePrefsLoad(null);// table is built in barcode_idlabel, barcode_piecemark_info, onGetInformation
	return _super.onShow(firstShow, event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B057EF49-C6A1-4AC8-8355-BDBD2BE5B4D2"}
 * @AllowToRunInFind
 */
function onHide(event) {
	var versionForm = globals.getInstanceForm(event);
	var formName = event.getFormName();
	if (formName.search('raw') != -1){
		var parentForm = 'barcode_id_raw';
	} else if (formName.search('barcode') != -1){
		parentForm = 'barcode_idlabel';
	}
	var newFormName = parentForm+versionForm;
	if (forms[newFormName]){
		forms[newFormName].elements.btn_PrintSelected.enabled = true;
		forms[newFormName].elements.btn_Clear.enabled = true;
		forms[newFormName].controller.enabled = true;
		globals.permissionsCacheHit(event,'newFormName');

		var win = forms[newFormName].controller.getWindow();
		win.toFront();
	}
	return _super.onHide(event)
}
