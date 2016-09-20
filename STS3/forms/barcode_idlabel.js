/**
 * print is driven off of the criteria page
 * 
 * only if selection criteria exists and a foundset exists
 * 
 */
 /**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8E7F0FB-EDC8-49A9-9958-91E34DDFBC29"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	onActionClear(event);
	//application.output('load printer order label');
	if (firstShow){
		//versionForm = globals.getInstanceForm(event);
		//baseForm = event.getFormName().replace(versionForm,'');
		if (firstShow){
			globals.setFieldOrder(event);
		}
	}
	scopes.printer.loadPrintOrder();
	scopes.prefs.getBTLabelFormats();
	//scopes.prefs.getLabelFormats();
	printingLabel = scopes.printer.default_label_name;
}
 
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A786F20-292F-4BD4-BBD5-3F25A07EE1A4"}
 * @AllowToRunInFind
 */
function onActionPrint(event) {
	var resp = "Cancel";
	switch (event.getElementName()){
		case "btn_PrintAll":{
			scopes.jobs.tmp_Print = "ALL";
			resp = globals.DIALOGS.showSelectDialog('Print Selection','Select One Of The Following Options:',[i18n.getI18NMessage('sts.txt.print.barcodes.not.printed'),i18n.getI18NMessage('sts.txt.print.barcodes.all'),i18n.getI18NMessage('sts.txt.print.barcodes.none')]);
			if (!resp){resp = i18n.getI18NMessage('sts.txt.print.barcodes.none')}
			if (resp == i18n.getI18NMessage('sts.txt.print.barcodes.not.printed')){
				scopes.jobs.tmp_Print += ",P_UNPRINTED";
			} else if (resp == i18n.getI18NMessage('sts.txt.print.barcodes.all')){
				scopes.jobs.tmp_Print += ",P_ALLPRINT";				
			} else { // Print Cancelled
				globals.DIALOGS.showErrorDialog('Print Cancelled',i18n.getI18NMessage('7000'));
				return false;
			}
			break;
		}
		case "btn_Print":{
			scopes.jobs.tmp_Print = "ID";
			resp = globals.DIALOGS.showSelectDialog('Print Selection','Select One Of The Following Options:',[i18n.getI18NMessage('sts.txt.print.barcodes.not.printed'),i18n.getI18NMessage('sts.txt.print.barcodes.all'),i18n.getI18NMessage('sts.txt.print.barcodes.none')]);
			if (!resp){resp = i18n.getI18NMessage('sts.txt.print.barcodes.none')}
			if (resp == i18n.getI18NMessage('sts.txt.print.barcodes.not.printed')){
				scopes.jobs.tmp_Print += ",P_UNPRINTED";
			} else if (resp == i18n.getI18NMessage('sts.txt.print.barcodes.all')){
				scopes.jobs.tmp_Print += ",P_ALLPRINT";				
			} else { // Print Cancelled
				globals.DIALOGS.showErrorDialog('Print Cancelled',i18n.getI18NMessage('7000'));
				return false;
			}
			//if (vIDNumber == ""){return}
		}
		default:{
			scopes.jobs.tmp_Print = "SELECT";
		}
	}
	scopes.jobs.tmp_LabelSort = forms[event.getFormName()].labelPrintOrder;
	var returnWin = forms[event.getFormName()].controller.getWindow().getName();
	scopes.jobs.onGetInformation(event,false);
	versionForm = globals.getInstanceForm(event);
	var formName = 'barcode_piecemark_info';
	var formWidth = solutionModel.getForm(formName).width+10;
	var newFormName = formName+versionForm;
	if (!forms[formName]){
		solutionModel.cloneForm(newFormName,solutionModel.getForm(formName));
	}
	var winTitle = 'Print Selected Labels'+versionForm;
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var win = application.createWindow(winTitle, JSWindow.MODAL_DIALOG);
	win.setInitialBounds(xOrigin+10, yOrigin+10, formWidth, height);
	win.title = winTitle;

	win.show(forms[newFormName]);
	scopes.jobs.removeFormHist(newFormName+'_table');
	var win2 = application.getWindow(returnWin);
	win2.toFront();
}
/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"3989EEE5-5DE2-492A-8456-D9EB616B8A63"}
 */
function collectCriteria(formName){
	// feeds jobs.viewBTableToForm()
	var area = scopes.globals.arrayToString(vArea);
	var batch = scopes.globals.arrayToString(vBatch);
	var cowCode = scopes.globals.arrayToString(vCowCode);
	var fabShop = scopes.globals.convertFabShopToStatusDescripId(vFabShop);
	var jobRel = scopes.globals.arrayToString(vJobRel);
	if (vLoadAll){
		var loadAll = null;
	} else {
		loadAll = scopes.globals.convertLoadToId(vLoadNum);
	}
	//application.output('vLoadRel '+vLoadRel);
	var loadRel = scopes.globals.convertLoadToId(vLoadRel);
	//application.output('loadRel '+loadRel);
	var lotNum = scopes.globals.convertLotToId(vLotNum);//ticket#7
	var pkgNum = scopes.globals.arrayToString(vPkgNum);//ticket#7, currently pkgNum is a FabTrol reference number
	var pcmkRel = scopes.globals.arrayToString(vPcmkRel);
	var seqNum = scopes.globals.arrayToString(vSeqNum);
	var sheetNum = scopes.globals.arrayToString(vSheetNum);
	var soNum = scopes.globals.arrayToString(vSONum);
	var idNum = scopes.globals.arrayToString(vIDNumber);
	var criteria = {
		area: area, 
		batch: batch,
		cowcode: cowCode,
		fabshop: fabShop,
		idnum : idNum,
		jobRel : jobRel,
		loadall : loadAll,
		loadrel : loadRel,
		lotnum : lotNum,
		pcmkrel : pcmkRel,
		piecemark : vPiecemark,
		pkgnum : pkgNum,
		seqnum : seqNum,
		sheetnum : sheetNum,
		sonum : soNum
	}
	/**switch (scopes.jobs.tmp_Print){
		case (/ALL/):{
			for (var item in criteria){
				criteria[item] = null;
			}
			break;
		}
		case (/ID/):{
			for (item in criteria){
				if (item != 'idnum'){criteria[item] = null;}
			}
			break;
		}
		default:{
			criteria['idnum'] = null;
		}
	}*/
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.viewBTableToForm(criteria,formName); // here to generate sql
	null;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A62A5CE-DDA9-4C58-9D17-136AECB5CFCE"}
 * @AllowToRunInFind
 */
function onActionClear(event) {
	var formName = event.getFormName();
	forms[formName].foundset.clear();
	forms[formName].elements.btn_Print.enabled = false;
	forms[formName].elements.btn_PrintSelected.enabled = false;
	forms[formName].elements.btn_PrintAll.enabled = false;
	var form = forms[formName];
	for (var element in forms[formName].elements){
		if (element.search('frm') == 0 && element.search(/JobNum/) == -1){elements[element].enabled = false;}
		if (forms[formName].elements[element].getElementType() == "CHECK"){
			var provider = forms[formName].elements[element].getDataProviderID();
			form[provider] = 0;			
		}
		if (forms[formName].elements[element].getElementType().search(/(TEXT|TYPE)/) == -1){continue}
		provider = forms[formName].elements[element].getDataProviderID();
		form[provider] = "";
		forms[formName].elements[element].bgcolor = 'white';
	}
}
