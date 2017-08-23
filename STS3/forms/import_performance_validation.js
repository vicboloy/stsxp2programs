/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"28672BBA-A948-4830-825C-245FB9EF3230"}
 */
var importSampleData = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E928E7AB-3EE8-4136-A16A-8887A85DDAFC"}
 */
var importFormat = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9A5ED94A-967D-425D-B29C-161C4280FB4A"}
 */
var fileDelimiter = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BE5A70AF-CA5A-4FB5-A59B-8F5EF30AD78A"}
 */
var sampleDelimited = '"p68","00455",567.29","09/11/91"\n"Y788","00423","45.67","10/11/92"\n"HS549","596668","5676.6","12/11/90"';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"79767255-6FC1-4EE6-9A6F-C174081A461B"}
 */
var sampleSdf = '\
p68      00455    567.29   09/11/91\n\
Y788    00423    45.67    10/11/92\n\
HS549  596668  5676.6   12/11/90';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A023AF48-88E7-4B29-8E89-36BFE31CEC40"}
 */
var currentView = '';
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A14FCBC3-F3AB-46A7-A391-105653496D14"}
 */
function onDataChange(oldValue, newValue, event) {
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C0441EF2-6343-4171-84D0-2F3374B895E6"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (application.isInDeveloper()){application.output('import performance validation')}
	var formName = event.getFormName();
	var winName = forms[formName].controller.getWindow().getName();
	var form = forms.import_performance_txt;
	importSampleData = '';
	fileDelimiter = i18n.getI18NMessage('sts.txt.delimiter.tilde');
	importFormat = i18n.getI18NMessage('sts.radio.import.delimited');
	var fileName = '';
	if (winName.search('BORDER') != -1){
		fileName = form.kssFileBorder;
	}
	if (winName.search('BOM') != -1){
		fileName = form.kssFileBom;
	}
	if (winName.search('ORB') != -1){

		//application.output(form.orbDirectory+' '+drawingsArray[0]+' '+form.prefSpecCut.replace('*',''))
		//fileName = form.orbDirectory+form.drawingsArray[0]+form.prefSpecCut.replace('*','');
	}
	var file = plugins.file.readTXTFile(fileName);
	if (file){
		var lines = file.split('\n');
		var end = (lines.length > 15) ? 15 : lines.length;
		for (var index = 0;index < end;index++){
			importSampleData += lines[index]+'\n';
		}
	}
	elements.btn_OK.requestFocus();
	if (winName.search('BOM') != -1){
		//var sheets = forms.import_performance_txt._arraysheets;
		displayBomInfo(event);
	}
	if (winName.search('BORDER') != -1){
		//var sheets = forms.import_performance_txt._arraysheets;
		displayBorderInfo(event);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE016962-1550-4605-9852-2EAEEDF6AA83"}
 * @AllowToRunInFind
 */
function onActionContinue(event) {
	var formName = event.getFormName();
	var win = forms[formName].controller.getWindow();
	var winName = win.getName();
	var dataArray = new Array();
	var val = forms['import_performance_bom']['viewValidation'];
	if (winName.search('BOM') != -1){
		val = val | 1;
		forms.import_performance_txt.elements.viewBom.bgcolor = 'grey';
		//dataArray = getBomData(event);
		//scopes.jobs.viewTemporaryData('BOM data',dataArray);
		//application.output('BOM cancelled');
	}
	if (winName.search('BORDER') != -1){
		val = val | 2;
		forms.import_performance_txt.elements.viewBorder.bgcolor = 'grey';
		//application.output('BORDER cancelled');
	}
	if (winName.search('ORB') != -1){
		val = val | 4;
		forms.import_performance_txt.elements.viewOrb.bgcolor = 'grey';
		//application.output('ORB cancelled');
	}
	
	forms['import_performance_bom']['viewValidation'] = val;
	forms.import_performance_bom.enableTab(event);
	win.hide();
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13963969-E973-48E7-8D91-23DF9A2BE2BC"}
 * @AllowToRunInFind
 */
function onActionCancel(event) {
	var formName = event.getFormName();
	var winName = forms[formName].controller.getWindow().getName();
	var val = forms['import_performance_bom']['viewValidation'];
	if (winName.search('BOM') != -1){
		if (val && 1){val = val ^ 1}
		forms.import_performance_txt.elements.viewBom.bgcolor = 'yellow';
		//application.output('BOM cancelled');
		//scopes.jobs.viewTemporaryData(winName+' data',dataArray,columnNamesArray)
	}
	if (winName.search('BORDER') != -1){
		if (val && 2){val = val ^ 2}
		forms.import_performance_txt.elements.viewBorder.bgcolor = 'yellow';
		//application.output('BORDER cancelled');
	}
	if (winName.search('ORB') != -1){
		if (val && 4){val = val ^ 4}
		forms.import_performance_txt.elements.viewOrb.bgcolor = 'yellow';
		//application.output('ORB cancelled');
	}
	var win = forms[formName].controller.getWindow();
	//application.output('view validation '+val);
	forms['import_performance_bom']['viewValidation'] = val;
	forms['import_performance_bom'].enableTab(event);
	win.hide();
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8091681D-471A-4B48-9475-96A089942E4A"}
 */
function displaySpoolInfo(event){
	//show sheet info
	//show bom info
	//show spool info
	currentView = 'pcmk';
	if (forms.import_performance_bom.importPcmks != 0){
		forms.import_performance_bom.importtotal -= forms.import_performance_bom.importPcmks;
		forms.import_performance_bom.importPcmks = 0;
	}
	var data = forms.import_performance_txt._arraypcmks;	
	scopes.jobs.viewCTableToForm(event,data,'gen_browse_panel');
	null;
	
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"882D6A19-A0FA-4502-9978-0C6440A2EB7D"}
 */
function displayBomInfo(event){
	currentView = 'bom';
	if (forms.import_performance_bom.importBoms != 0){
		forms.import_performance_bom.importtotal -= forms.import_performance_bom.importBoms;
		forms.import_performance_bom.importBoms = 0;
	}
	forms.import_performance_txt.getBomKss(event);
	var data = forms.import_performance_txt._arraybom;	
	scopes.jobs.viewCTableToForm(event,data,'gen_browse_panel');
	null;
	
}
/**
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"48E8753B-C6EE-42FE-A2C2-2DDD76D01C36"}
 */
function displayBorderInfo(event){
	currentView = 'border';
	if (forms.import_performance_bom.importBorders != 0){
		forms.import_performance_bom.importtotal -= forms.import_performance_bom.importBorders;
		forms.import_performance_bom.importBorders = 0;
	}
	forms.import_performance_txt.getBorderKss(event);
	var data = forms.import_performance_txt._arrayborderkss;	
	scopes.jobs.viewCTableToForm(event,data,'gen_browse_panel');
	null;
	
}