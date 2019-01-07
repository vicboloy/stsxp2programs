/**
 * @type {String}
 * Job Number that is pulled from the Import KISS file.
 * @properties={typeid:35,uuid:"9526AB9B-5AF0-482A-A67B-2B4E220A0310"}
 */
var jobNumber = "";
/**
 * @type {String}
 * Name of the Job that is pulled from the Import KISS file.
 * @properties={typeid:35,uuid:"F0935F2D-9183-47E0-9995-7C8374F491AB"}
 */
var jobName = "";
/**
 * @type {String}
 * Date of the Job that is pulled from the Import KISS file.
 * @properties={typeid:35,uuid:"F6C5A4A5-077A-4076-9C78-941486603EA5"}
 */
var jobDate = "";
/**
 * @type {Number}
 * Is the Job that is pulled from the Import KISS file Metric or English
 * @properties={typeid:35,uuid:"D29063B6-B208-4399-A025-16593960C857",variableType:4}
 */
var jobMetric = 0;
/**
 * @type {String}
 * Shop order optionally entered on the kiss import options page.
 * @properties={typeid:35,uuid:"876FFC6E-456F-4791-8992-98C150B434D8"}
 */
var jobShopOrder = "";
/**
 * @type {String}
 * List of selected Steel Shapes that are to be excluded from Import KISS file
 * @properties={typeid:35,uuid:"35DF3308-6DA3-4572-B33B-37ACF8645AFC"}
 */
var jobImportExc = 'Exclude ';
/**
 * @type {String}
 * List of selected Steel Shapes that are to be summarized as single records from Import KISS file
 * @properties={typeid:35,uuid:"9244E97D-9A20-4463-8B2A-1D6AD7811517"}
 */
var jobImportSum = 'Summary ';
/**
 * @type {String}
 * Data provider for form Import Options area.
 * @properties={typeid:35,uuid:"18AA1C61-04C9-4D9E-8D74-E64A3352BFCD"}
 */
var importOption = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"017B73C2-F320-483A-BEDA-5F3E228DE281"}
 */
var importArea = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FC28B761-E624-491F-B76D-25F1A3E886EB"}
 */
var importRouting = "";
/**
 * Set to true to disable import button upon import options change.
 * @properties={typeid:35,uuid:"ADF593C4-4BB5-4A14-94F7-FC47CD9B8F57",variableType:-4}
 */
var impDirty = true;
/**
 * @type {Number}
 * Local copy of global preference to keep Minor piecemarks or not.
 * @properties={typeid:35,uuid:"A806C29B-6D9F-4FC2-A08A-06B52675CA12",variableType:4}
 */
var keepMinors = 0;
/**
 * @type {String}
 * Tracking for sequence number for an assembly.
 * @properties={typeid:35,uuid:"894B653A-149F-4C29-9017-9C9D187C28F6"}
 */
var currentSequence = "";
/**
 * @type {String}
 * Tracking for a sequence quantity on an assembly.
 * @properties={typeid:35,uuid:"E35FE49A-07C5-450B-B5DA-9C3B51A7BD32"}
 */
var currentSequenceQty = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41277F40-4CCC-41A0-9ECC-3C2C199D1151",variableType:4}
 */
var summedMaxIndex = 0;
/**
 * Foundset (array) Dataset for showing retained data Import KISS file
 * @properties={typeid:35,uuid:"3A5A2CBA-8872-4BA9-ABC5-2B6C160A42A4",variableType:-4}
 */
var transitionFS = null;
/**
 * Foundset (array) Dataset for current records in the job tables to compare with incoming records.
 * @properties={typeid:35,uuid:"51A17DDE-4E8F-433A-B644-FC5B48A16E48",variableType:-4}
 */
var sheetsFS = null;
/**
 * Foundset (array) for holding discarded data from the Import KISS file
 * @properties={typeid:35,uuid:"FDD56E55-87FB-485C-83EB-40ED25A0DF96",variableType:-4}
 */
var transitionFSsink = null;
/**
 * Foundset (array) for holding summed data from the Import KISS file
 * @properties={typeid:35,uuid:"447331CF-3E0A-4EA5-BD3A-34FEC6D0C12C",variableType:-4}
 */
var transitionFSsumm = null;
/**
 * Dataset source for Datasource of discarded Import KISS file data
 * @properties={typeid:35,uuid:"514CD270-0334-4AA7-9BC0-EDC85CCAEC24",variableType:-4}
 */
var excludeFS = null;
/**
 * unused
 * @properties={typeid:35,uuid:"AD63DD77-FB8B-4B78-A0CF-C2029595173F",variableType:-4}
 */
var shapesArray = [];
/**
 * Holds object of sequence_number and sequence_quantity seq,cnt.
 * 
 * @properties={typeid:35,uuid:"FB4D779E-EE86-412B-B2BC-2724E57327B0",variableType:-4}
 */
var sequenceArr = [];
/**
 *  Hold index of piecemark by piecemark, grade, sequence and description(material)
 * @properties={typeid:35,uuid:"284DF346-C2B9-4EA9-9E41-08248EA4BBF3",variableType:-4}
 */
var pMarks = [];
/**
 * Uniqueness to a piecemark, parent included for weight rollup.
 * @properties={typeid:35,uuid:"3DD52C78-98D4-4F9A-96D0-89979E563A5E",variableType:-4}
 */
var pMark = {
 cMark : null,
 cParent : null,
 cGrade : null,
 cSheetNum : null,
 cFinish :null
};
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"096B28A6-1A28-4DBB-A8A1-1E5DBDFC1F86"}
 */
var pMarkString = "";
/**
 * Parent piecemark for weight rollup.
 * @properties={typeid:35,uuid:"AD55FA9D-7614-45D5-8756-2E9D74A71197",variableType:-4}
 */
var parentMarkIndex = [];
/**
 * Create row before adding to table.
 * @properties={typeid:35,uuid:"882E19EA-28E2-48B5-B14A-B9A0BFCF306A",variableType:-4}
 */
var newRow = null;
/**
 * @type {Number}
 * Records to import. Expands to 'x' labels.
 * @properties={typeid:35,uuid:"09C848D3-15F1-48CE-861C-ADD0F3F212C8",variableType:4}
 */
var importRecordCount = 0;
/**
 * Datasource for visual representation of records that are retained after import selections are made
 * as well as setting piecemarks per ID/barcode
 * @properties={typeid:35,uuid:"2DEB9882-0C7C-467C-9ADC-E1602511F5B8",variableType:-4}
 */
var kissDatasource = null;
/**
 * Datasource for holding discarded selections that may be discarded after import selections are
 * applied.
 * @properties={typeid:35,uuid:"ABE09C56-DBA3-44EA-80FC-AFC5C56F7B77",variableType:-4}
 */
var kissDatasink = null;
/**
 * Datasource for holding summarized selections that may be discarded after import selections are
 * applied.
 * @properties={typeid:35,uuid:"EE7563E2-D659-4877-B3B0-10FE0B3B3A9E",variableType:-4}
 */
var kissDataSumm = null;
/**
 * Datasource of existing records in the database for sheet number comparison.
 * @properties={typeid:35,uuid:"A394AAE1-453A-41CA-BD1D-D6DDB46E47D1",variableType:-4}
 */
var kissDataSheets = null;
/**
 * Datasource for selecting Steel Shapes that will be discarded after import selections are
 * applied.
 * @properties={typeid:35,uuid:"5DD151D8-61AE-45D5-BA71-A0CDA8ACD91E",variableType:-4}
 */
var kissExcludes = null;
/**
 * Array holding 'column names' to column indices identifying the order in which the columns are placed
 * in the piecemark retention and exclusion Foundsets
 *  i.e. fieldOrderTempTable['piecemark'] returns integer column 9, if piecemark is in column 10
 * 
 * @properties={typeid:35,uuid:"C276BFC2-2A2E-4640-959D-965A01CC0C32",variableType:-4}
 */
var fieldOrderTempTable =[];
/**
 * @type {String}
 * Used as an informational datasource for the errorMessage label somewhere on the form to indicate the result
 * of some selection or action on the form, i.e. 'items saved'
 * @properties={typeid:35,uuid:"1F59E7B6-8FC0-4D4D-BB31-EA40F8C3250E"}
 */
var errorMessage = "";
/**
 * @properties={typeid:35,uuid:"2CD02030-9696-441E-81E2-D0F54E692210",variableType:-4}
 */
var headerKissNames = [];
/**
 * Labels for the major piecemarks change in weight, so label limits need to be recomputed after import.
 * @properties={typeid:35,uuid:"297519C9-14C5-46DB-9305-3D2EA27518E8",variableType:-4}
 */
var recomputeLabelArray = [];
/**
 * @properties={typeid:35,uuid:"4245E3FA-0C8C-472F-B3F5-2BB03B8B78C3",variableType:-4}
 */
var importArray = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7244C514-16EA-4D9A-B197-208FDD177D71"}
 */
var importSpeed = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1EC1875D-1904-4467-9A1F-B5CB8FB888AB",variableType:4}
 */
var uniqueKissTable = 1;
/**
 * Each import line that is an assembly GUID gets placed here for each piecemark
 * importMainGUID = [0...x] = "??-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
 * @properties={typeid:35,uuid:"91156FDA-AF14-48D9-9F3F-68A33BC4EFA9",variableType:-4}
 */
var importMainGUID = [];
/**
 * Each sub assembly of a main guid gets pushed here for each piecemark, use importMainGUID as an index
 * importSubGUID = [0...x] = ["??-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"]["??-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","??-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",...]
 * @properties={typeid:35,uuid:"44E7E198-EEBA-4F4C-9276-A8BFEC818264",variableType:-4}
 */
var importSubGUID = [];
/**
 * Indexed to transitionFS import array to each piece.
 * @properties={typeid:35,uuid:"FA4664FC-29FD-43DD-814E-D4CD5524FB0B",variableType:-4}
 */
var importMainGuidList = [];
/**
 * Indexed to transitionFS import array to each piece.
 * @properties={typeid:35,uuid:"B0D3968E-D4DE-48E7-B6AB-7776130EC21F",variableType:-4}
 */
var importSubGuidList = [];
/**
 * @properties={typeid:35,uuid:"603BD5D4-53F9-4492-9A86-DD69E3F3B70E",variableType:-4}
 */
var exitSequence = false;
/**
 * @properties={typeid:35,uuid:"6430E981-086D-4B41-BBD9-B05CFAECE228",variableType:-4}
 */
var minorsChanged = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62396589-65EE-4202-8EEA-10A71808F807"}
 */
var importRecData = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D17DCCE9-B6CA-4CF5-A577-F0ED07CA0E8E",variableType:4}
 */
var useKissRoutes = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4DF90D97-5960-4CC1-9C2C-B2FF372F77DC"}
 */
var importFile = '';
/**
 * @properties={typeid:35,uuid:"BEB40A18-ECAF-4CD6-A62E-63B30052A0F2",variableType:-4}
 */
var deleteKiss = true;
/**
 * @properties={typeid:35,uuid:"3FE4FF06-B289-44A3-8E4D-99A828F40E35",variableType:-4}
 */
var emptyPiecemarkValues = false;
/**
 * @properties={typeid:35,uuid:"0879B896-5487-4BA7-8CA3-446FE1770947",variableType:-4}
 */
var endVars = null;
/**
 * Callback method for when form is shown.
 * Unique setup for the form.  Results are from a range of tables, so no initial datasource is truly applicable
 * Form holds values which do not need to be in retention KISS import file
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"281713FB-2C42-46EC-BCAF-4BFD22187C4C"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow){
	}

	emptyPiecemarkValues = scopes.jobs.checkMissingPMs(event);
	controller.enabled = true;
	elements.btn_Hide.text = i18n.getI18NMessage('sts.btn.import.hide.ignore.items');
	addWindowList(controller.getWindow().title);
	var keepMinorsPref = (scopes.prefs.lKeepMinorPcMarks) ? 1 : 0;
	scopes.jobs.formPermissions(event,true);

	//globals.setUserFormPermissions(event);
//	if (transitionFS){
//		transitionFS.removeRow(-1);
//		transitionFSsink.removeRow(-1);
//		transitionFSsumm.removeRow(-1);
//	}
	excludeFS = null; kissDataSheets = []; kissDatasink = null; kissDataSumm = null; kissExcludes = null;
	var job = scopes.jobs.importJob;
	if (databaseManager.hasTransaction()){
		if (application.isInDeveloper()){application.output('THERE ARE OPEN TRANSACTIONS')}
	}
	/**var headerLine = [];
	for (var index=0;index<40;index++){
		if (scopes.jobs.importResults[index][0] == "H"){
			headerLine = scopes.jobs.importResults[index];
			break;
		}
	}*/
	jobNumber = job.jobNumber;//STOP HERE
	jobName = job.name;
	jobDate = job.date;
	jobMetric = job.metricFlag;
	importRouting = null;
	//application.output('RM Job Number for Import '+jobNumber,LOGGINGLEVEL.DEBUG);
	///var customerArray = [];
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.where.add(j.columns.job_number.eq(scopes.jobs.importJob.jobNumber));
	//j.where.add(j.columns.customer_id.eq(scopes.jobs.importJob.customerId));
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var J = databaseManager.getFoundSet(j);
	/** @type {JSRecord<db:/stsservoy/jobs>} */
	var jobRec;
	if (J.getSize() > 0){
		jobRec = J.getRecord(1);
		scopes.jobs.importJob.customerId = jobRec.customer_id;
		scopes.jobs.importJob.jobId = jobRec.job_id;
		scopes.jobs.importJob.bcFormId = jobRec.barcode_form;//#87ticket#87
		if (jobRec.keep_minors == 1){
			scopes.jobs.keepMinors = 1;
			elements.keep_minors.enabled = false;
		}
	}
	foundset.loadRecords(J);//populate windows current record to return specific job info
	
	//scopes.jobs.tempGetIdfilesToBarcodeCount(jobRec.job_id);// test tempGetIdfilesToBarcodeCount // example get item record summed count on field
	
	/** @type {JSFoundSet<db:/stsservoy/jobs>} 
	if (foundset.find ()){
		job_number = scopes.jobs.importJob.jobNumber;
		customer_id = scopes.jobs.importJob.customerId;
		tenant_uuid = globals.session.tenant_uuid;
		/**index = jobNums.indexOf(jobNumber);
		customer_id = custIds[index];* /
		///var count = foundset.search();
		foundset.search();
		foundset.setSelectedIndex(1);
		var jobRec = foundset.getSelectedRecord();
		//scopes.jobs.jobIDs.push(jobRec.job_id);
	} */
	elements.btn_Import.enabled = false;
	elements.btn_Apply.enabled = true;
	var enableDrawing = true;
	var kissJobRf = jobRec.rf_interface;//save rf interface to show/noshow buttons
	if (kissJobRf){
		if ((kissJobRf.search(i18n.getI18NMessage('sts.interface.fabsuite')) != -1) ||
			(kissJobRf.search(i18n.getI18NMessage('sts.interface.romac')) != -1)) {
				enableDrawing = false;
			}
	}
	elements.drawPrfx.enabled = enableDrawing;
	//elements.drawPrfx_label.enabled = enableDrawing;
	elements.drawSufx.enabled = enableDrawing;
	//elements.drawSufx_label.enabled = enableDrawing;

	/** var empArray = [];
	var empArrayID = [];
	/ ** @type {QBSelect<db:/stsservoy/employee>} * /
	var empFS = databaseManager.createSelect('db:/stsservoy/employee');
	empFS.result.add(empFS.columns.employee_id);
	empFS.result.add(empFS.columns.employee_number);	
	empFS.where.add(empFS.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	empFS.where.add(empFS.columns.delete_flag.isNull);
	var E = databaseManager.getFoundSet(empFS);
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/employee>} * /
	var rec = null;
	while (rec = E.getRecord(idx++)){
		empArray.push(rec.employee_number);
		empArrayID.push(rec.employee_id);
	}
	if (application.isInDeveloper()){application.setValueListItems('stsvl_employee',empArray)}
	*/
	//employeeNumber = globals.session.loginUserNum;
	employeeNumber = globals.session.employeeNum;
	if (application.isInDeveloper()){application.output('employee number '+employeeNumber)}
	var jobRoutes = [];
	var jobRouteIds = [];
	/** @type {QBSelect<db:/stsservoy/routings>} */
	var routes = databaseManager.createSelect('db:/stsservoy/routings');
	routes.result.add(routes.columns.routing_id);
	routes.where.add(routes.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	routes.where.add(routes.columns.delete_flag.isNull);
	var R = databaseManager.getFoundSet(routes);
	/** @type {JSRecord<db:/stsservoy/routings>} */
	var rec2 = null;
	idx = 1;
	while (rec2 = R.getRecord(idx++)){
		//application.output('route '+rec2.route_code);
		jobRoutes.push(rec2.route_code);
		jobRouteIds.push(rec2.routing_id);
	}
	//if (application.isInDeveloper()){
	jobRoutes.unshift(null);
	jobRouteIds.unshift(null);
	application.setValueListItems('stsvl_route_code_id',jobRoutes,jobRouteIds);
	var window = controller.getWindow();
	var height = window.getHeight();
	window.setLocation(0, 0);
	window.setSize(application.getScreenWidth(),height);
	scopes.jobs.importLabelCounts = [];
	importOption = null;
	elements.btn_Import.enabled = false;
	keepMinors = keepMinorsPref;//sts.chk.keep.minors.prefs.default
	var minorText = i18n.getI18NMessage('sts.chk.keep.minors.job.default');//elements.keep_minors.titleText;
	if (jobRec.keep_minors){
		minorText = minorText + ' ('+i18n.getI18NMessage('sts.btn.yes')+')';
	} else {
		minorText = minorText + ' ('+i18n.getI18NMessage('sts.btn.no')+')';			
	}
	elements.keep_minors.titleText = minorText.replace(') (','=');
	if (jobRec.keep_minors == 1){//job entry record says keep minors for this job. no override
		keepMinors = 1;
		elements.keep_minors.enabled = false;
	} else {
		keepMinors = 0;
	}
	minorsChanged = false;
	
	//index;
	///var custRec;
	/** headerKissNames['item_quantity']=i18n.getI18NMessage('table.kiss.marks.total.import.qty');//'Total PcMarks Import Qty';
	headerKissNames['sequence_quantity']=i18n.getI18NMessage('table.kiss.sequence.qty');//'Import Qty';
	headerKissNames['set_bc_qty']=i18n.getI18NMessage('table.kiss.marks.full.label');//'Marks Full Label';
	headerKissNames['total_label_qty']=i18n.getI18NMessage('table.kiss.per.label.marks');//'Per Label Marks';
	headerKissNames['last_bc_qty']=i18n.getI18NMessage('table.kiss.per.label.remaining');//'Remaining';
	headerKissNames['barcode_qty']=i18n.getI18NMessage('table.kiss.labels.needed');//'Labels Needed';
	headerKissNames['ext_wt_qty']=i18n.getI18NMessage('table.kiss.labels.weight');//'Label Weight';
	headerKissNames['sheet_number']=i18n.getI18NMessage('table.kiss.sheet.number');//'Sheet';
	headerKissNames['piecemark']=i18n.getI18NMessage('table.kiss.piecemark');//'Piecemark';*/
	defineExclDataset();
	loadExclSumms();
	application.updateUI();
	var success = history.removeForm('kiss_excludes_lst');
	var success2 = solutionModel.removeForm('kiss_excludes_lst');
	if (!success || !success2){globals.loggerDev(this,'Form kiss_excludes_lst remove fail.')}
	success = history.removeForm('kiss_barcode_request');
	success2 = solutionModel.removeForm('kiss_barcode_request');
	if (!success || !success2){globals.loggerDev(this,'Form kiss_barcode_request remove fail.')}
	//importTempTable();
	scopes.jobs.warningsMessage("Piecemark table view creation posted.",true);
	importOption = 'Use Sheet Number Matching';

	saveNotesInto = i18n.getI18NMessage('sts.empty.entry');
	//Form basic load complete, now set if import_prefs has data for the job to last import setting
	scopes.kiss.loadImportSettings(event);
	
	scopes.jobs.warningsMessage("Setting table order.",true);
	scopes.jobs.tablePrefsLoad('kiss_option_import');
	//handle excludes by shape and summaries by piecemark
	scopes.jobs.warningsMessage("Apply initial preferences to piecemark table.",true);
	//applyImportPreferences(); 20180110 task disable upon load, use button instead
	databaseManager.saveData(foundset);
	forms['import_table'].foundset.sort('item_qty desc');
	scopes.jobs.warningsMessage("Table complete.",true);
	scopes.jobs.readPieceTables('import');
	elements.importRecInfo.visible = (application.isInDeveloper());
	applyImportPreferences(event,true);
	null;
	if (emptyPiecemarkValues){
		globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.question.continue.with.import'),
			i18n.getI18NMessage('sts.txt.import.empty.piecemarks'));
	}
	scopes.jobs.warningsX(event);
}
/**
 * @properties={typeid:24,uuid:"C010A107-2370-481A-BD1F-99F412CDD06B"}
 */
function loadImportLabelCountsX(){
	var counts = scopes.jobs.importLabelCounts;
	var retainFS = transitionFS;
	var rows = retainFS.getMaxRowIndex();
	for (var index = 1;index <= rows;index++){
		retainFS.rowIndex = index;
		if (retainFS.piecemark == ""){
		  var unique = retainFS.material+retainFS.grade+retainFS.finish+retainFS.sequence_number;
		 } else {
		  unique = retainFS.piecemark+retainFS.parent_piecemark+retainFS.sheet_number+retainFS.grade+retainFS.finish+retainFS.sequence_number;
		}
		if (counts[unique]){
			var count = counts[unique];
			if (retainFS.barcode_qty != count){
				retainFS.barcode_qty = counts[unique];
				setBarcodeLimits(index);
			}
		}
	}
}
/**
 * Load any saved Steel Shape exclusions from the preferences file.
 * These values are global, so the user is global, -1
 * @properties={typeid:24,uuid:"B0F683D0-6394-42E6-94C2-CDCA7BF13623"}
 * @AllowToRunInFind
 */
function loadExclSumms() {
	jobImportExc="";
	jobImportSum="";
	/** @type JSFoundSet<> */
	var formFS = forms.kiss_excludes_lst.foundset;
	formFS.loadAllRecords();
	var fsSize = formFS.getSize();
	var uuidGen = application.getUUID('FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF');
	var formName = controller.getName();
	for (var index = 1;index <= fsSize;index++){
		/** @type JSRecord<> */
		var rec = formFS.getRecord(index);
		/** @type {QBSelect<db:/stsservoy/preferences2>} */
		var prefsFS = databaseManager.createSelect('db:/stsservoy/preferences2');
		prefsFS.result.add(prefsFS.columns.preferences2_id);
		prefsFS.result.add(prefsFS.columns.field_value);
		prefsFS.where.add(prefsFS.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		prefsFS.where.add(prefsFS.columns.user_uuid.eq(uuidGen));
		prefsFS.where.add(prefsFS.columns.form_name.eq(formName));
		prefsFS.where.add(prefsFS.columns.field_name.eq('excludeArray'));
		prefsFS.where.add(prefsFS.columns.value_description.eq(rec.shape));
		var P = databaseManager.getFoundSet(prefsFS);
		if (P.getSize() > 0) {
			/** @type {JSRecord<db:/stsservoy/preferences2>} */
			var prefRec = P.getRecord(1);
			var newValue = prefRec.field_value.split(",");
			rec.exclude = newValue[0];
			if (rec.exclude == 1){jobImportExc+=" "+rec.shape+" "}
			rec.summarize = newValue[1];
			if (rec.summarize == 1){jobImportSum+=" "+rec.shape+" "}
		}
	}
}
/**
 * @AllowToRunInFind
 * Save any saved Steel Shape exclusions from the preferences file.
 * These values are global, so the user is global, -1.
 * Since an array is being saved, the preferences field of value_description holds
 * the string index into the array.
 * @properties={typeid:24,uuid:"091EDD49-911A-4129-8FE0-3710D32C2695"}
 */
function saveExclSumms(){
	var reply = plugins.dialogs.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),i18n.getI18NMessage('sts.txt.question.save.discard.types'),[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
	if (reply == i18n.getI18NMessage('sts.btn.no')){return}
	//var excludedArray = [];
	var uuidGen = application.getUUID('FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF');
	var formName = controller.getName();
	var formFS = forms.kiss_excludes_lst.foundset;
	for (var index = 1;index <= formFS.getSize();index++){
		var rec = formFS.getRecord(index);
		var newValue = rec.exclude+","+rec.summarize;
		/** @type {QBSelect<db:/stsservoy/preferences2>} */
		var prefsFS = databaseManager.createSelect('db:/stsservoy/preferences2');
		prefsFS.result.add(prefsFS.columns.preferences2_id);
		prefsFS.where.add(prefsFS.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		prefsFS.where.add(prefsFS.columns.user_uuid.eq(uuidGen));
		prefsFS.where.add(prefsFS.columns.form_name.eq(formName));
		prefsFS.where.add(prefsFS.columns.field_name.eq('excludeArray'));
		prefsFS.where.add(prefsFS.columns.value_description.eq(rec.shape));
		var P = databaseManager.getFoundSet(prefsFS);
		if (P.getSize() > 0) {
			var exstRec = P.getRecord(1);
			if (exstRec.field_value != newValue){
				exstRec.field_value = newValue;
				databaseManager.saveData(P);
			}
		} else {
			var newDex = P.newRecord();
			/** @type {JSRecord<db:/stsservoy/preferences2>} */
			var newRec = P.getRecord(newDex);
			newRec.tenant_uuid = globals.session.tenant_uuid;
			newRec.user_uuid = uuidGen;
			newRec.form_name = formName;
			newRec.field_name = 'excludeArray';
			newRec.value_description = rec.shape;
			newRec.field_value = newValue;
			databaseManager.saveData(newRec);
		}
	}
	errorMessage = i18n.getI18NMessage('sts.txt.import.exclusions.saved',new Array(jobImportExc,jobImportSum));
	scopes.jobs.warningsX(event);
}
/**
 * Define the exclusion dataset for the foundset that holds records that are to be discarded
 * from the Import KISS file
 * @properties={typeid:24,uuid:"87A05AC6-4582-4971-85DD-1CF7EB523790"}
 */
function defineExclDataset(){
	excludeFS = databaseManager.createEmptyDataSet();
	var item,code;
	var shapes = [];
	//var results = foundset;
	//var lineFieldIndex = scopes.jobs.getFieldDataMapping("mapped_field","piecemarks.material").split(",")[1]-1;
	//for (var i = 0;i < results.getSize();i++){
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/import_table');
	fs.loadRecords();
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var rec = null; var i = 1;
	while (rec = fs.getRecord(i++)){
		//if (results[i][0] != "D"){continue}
		var newShape = rec.material.split(' ')[0];
		//application.output('shape '+newShape);
		if (!(newShape in shapes)){shapes[newShape] = "";}
	}
	var columns = ['shape','exclude','summarize'];
	excludeFS.addColumn('shape',1,JSColumn.TEXT);
	excludeFS.addColumn('exclude',2,JSColumn.TEXT);
	excludeFS.addColumn('summarize',3,JSColumn.TEXT);
	for (var indexShape in shapes){
		excludeFS.addRow(new Array(indexShape,0,0));
	}
	kissExcludes = excludeFS.createDataSource('kissImportExcludes',[JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER]);
	elements.tabless1.removeAllTabs();
	var checkForm = solutionModel.newForm('kiss_excludes_lst',kissExcludes,'sts_one',false,90,175);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	checkForm.initialSort = 'shape asc';
	checkForm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_NEVER;
	//foundset.sort('shape asc');
	var newMethod;
	item = checkForm.newLabel('Shape',0,0,60,21);
 	item.labelFor='shape'; item.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	item = checkForm.newLabel('Exclude',60,0,60,21);
	item.labelFor='exclude';
	item = checkForm.newLabel('Summarize',120,0,80,21);
	item.labelFor='summarize';
	item.background='cyan';
	item = checkForm.newTextField(columns[0],0,21,60,21);
	item.name = 'shape'; item.editable = false; item.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	item = checkForm.newCheck(columns[1],60,21,60,21);
	item.name = 'exclude'; item.editable = true;
	code = 'function onDataChangeExc(oldStr,newStr,event){\
		var shapeX=" "+shape+" ";\
		var excld=forms.kiss_option_import.jobImportExc;\
		if (newStr == 0){\
			excld=excld.replace(shapeX,"");\
		} else {\
			excld+=shapeX;\
		}\
		forms.kiss_option_import.jobImportExc=excld;\
		forms.kiss_option_import.impDirty = true;\
		application.updateUI(100);\
	}';
	//add impDirty setting to remove red bands after settings change 6/18/2014
	newMethod = checkForm.newMethod(code);
	item.onDataChange=newMethod;
	item = checkForm.newCheck(columns[2],120,21,80,21);
	item.name = 'summarize'; item.editable = true;
	code = 'function onDataChangeSumm(oldStr,newStr,event){\
		var shapeX=" "+shape+" ";\
		var summs=forms.kiss_option_import.jobImportSum;\
		if (newStr == 0){\
			summs=summs.replace(shapeX,"");\
		} else {\
			summs+=shapeX;\
		}\
		forms.kiss_option_import.jobImportSum=summs;\
		forms.kiss_option_import.impDirty = true;\
		application.updateUI(100);\
	}';
	newMethod = checkForm.newMethod(code);
	item.onDataChange=newMethod;
	elements.tabless1.addTab('kiss_excludes_lst');
	excludeFS.sort(1,true);
	scopes.jobs.warningsX(null);
}
/**
 * Handle hide window. No use removing form or history on Hide,
 * they fail due to window still being visible.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F1E8F18E-430A-4F2F-BDE5-AD466B64DAD1"}
 */
function onHide(event) {
	null;
	if (deleteKiss){
		scopes.kiss.removeImportFileFromServer(jobNumber);
	}
	//removeWindowTrack();
	scopes.jobs.warningsX();
	//elements.tabless.removeAllTabs();
	//var success = history.removeForm('kiss_barcode_request');
	//if (success){
	//	var success2 = solutionModel.removeForm('kiss_barcode_request');
	//}
	//globals.setWindowClosed("");
	//transitionFS.removeRow(-1);
	//transitionFSsink.removeRow(-1);
	//transitionFSsumm.removeRow(-1);
	history.removeForm('kiss_excludes_lst');
	solutionModel.removeForm('kiss_excludes_lst');
	//databaseManager.getTable('kissDatasource');
	///history.removeForm('kiss_option_import');
	///solutionModel.removeForm('kiss_option_import');
	history.removeForm('kiss_barcode_request');
	solutionModel.removeForm('kiss_barcode_request');
	var success = history.removeForm('kiss_excludes_lst');
	if (application.isInDeveloper()){application.output('kiss_excludes_lst form history removed '+success)}
	success = solutionModel.removeForm('kiss_excludes_lst');
	if (application.isInDeveloper()){application.output('kiss_excludes_lst form object removed '+success)}
	//var win = application.getActiveWindow();
	//win.hide();
	globals.stopWindowTrackEvent(event);
	return true;
}
/**
 * ColumnNames indexed into the exclusion and retention Foundsets for creating the Foundset 
 * and later identifying the proper column index into the array Foundset
 * @properties={typeid:35,uuid:"56088849-9254-49B5-9ED2-5EC463D041AE",variableType:-4}
 */
var columnNames = [];
/**
 * Array for identifying JS column types (INTEGER, BOOLEAN, TEXT) when creating a datasource for the Foundsets
 * @properties={typeid:35,uuid:"7826196D-0789-4084-B1EC-5153563973A7",variableType:-4}
 */
var tempArray = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A6F20E76-93E5-4B8F-938C-35395EC61592"}
 */
var testDropdown = "";
///**
// * 
// * @properties={typeid:35,uuid:"38A1EB8A-9B74-401D-BB63-B4FADA77D93B",variableType:-4}
// */
//var excludeArray = [];
/**
 * Regular expression for selecting boolean columns in defining column types for datasources
 * @properties={typeid:35,uuid:"DF79111F-B594-4F99-A59E-2F6DB1EA61C7",variableType:-4}
 */
var booleans = null;
/**
 * @properties={typeid:35,uuid:"687C3153-2665-457D-8D1D-6DE81063A1BA",variableType:-4}
 */
var hides = null;
/**
 * Regular expression for selecting real number columns in defining column types for datasources
 * @properties={typeid:35,uuid:"DBCFEBEF-7A7C-4EDC-911C-C6A9CF666F5D",variableType:-4}
 */
var numbers = null;
/**
 * Regular expression for selecting integer number columns in defining column types for datasources
 * @properties={typeid:35,uuid:"EF3FB1CE-51D5-48D4-A69D-50BCC50429B3",variableType:-4}
 */
var integers = null;
/**
 * Array of nulls matching datasource rows when identifying and adding a new row into the datasource 
 * for the foundset. Must match the columnTypes array in size
 * @properties={typeid:35,uuid:"C7CB2518-E2CE-4CB9-A7CA-CCA8C3FBF29C",variableType:-4}
 */
var rowTemplate = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"46F323C2-6AF2-4248-AB19-23607CCC6FC2"}
 */
var saveNotesInto = "";
/**
 * @properties={typeid:35,uuid:"C3F4FBC9-6B43-4830-A097-60EE6E14D9A0",variableType:-4}
 */
var saveFinishDescrip = false;
/**
 * @properties={typeid:35,uuid:"E946ECCE-9384-4AD3-9BDF-18446B6579EC",variableType:-4}
 */
var savePhasePcColor = false;
/**
 * @properties={typeid:35,uuid:"39945DD6-640C-427F-BBB8-4271C1B7310F",variableType:-4}
 */
var notesContainCamber = false;
/**
 * @type {String}
 * Entry in idfiles for original employee that imported the record.
 * @properties={typeid:35,uuid:"B73FC9FA-0AFD-4986-8541-3F3C940FEAE5"}
 */
var employeeNumber = "";
/**
 * @type {String}
 * For selecting customerNumber if customer is selected
 * @properties={typeid:35,uuid:"C447A713-4474-47E1-875B-B14807778575"}
 */
var customerNumber = "";
/**
 * @type {String}
 * Prefix for job number that is prepended for Job Name.
 * @properties={typeid:35,uuid:"34499E40-5C25-4A3C-A4F7-0EDC10D5AB5F"}
 */
var drawPrfx = "";
/** 
 * @type {String}
 * Suffix for job number that is appended for Job Name.
 * @properties={typeid:35,uuid:"644F8F47-054F-4145-9778-0C50E8A8CFA0"}
 */
var drawSufx = "";
/**
 * @properties={typeid:35,uuid:"6E6A9074-0E6C-4B04-BA7F-439FAC7D624C",variableType:-4}
 * @type {JSFoundSet}
 */
var kissFS = null;
/**
 * @properties={typeid:35,uuid:"213B30FD-BD69-4B8B-BABA-B489894C733A",variableType:-4}
 */
var useImportRouting = false;
/**
 * Initial processing of Import KISS file to a visual representation of the Foundset
 * @properties={typeid:24,uuid:"87B9ADB5-5C35-4208-90CF-6E3003F6B9F1"}
 * @AllowToRunInFind
 */
function importTempTable(){
	var timeIn = new Date().getTime();
	var timeOut = 0;
	var msg = "Begin populate piecemark table.";
	scopes.jobs.warningsMessage(msg,true);
	defineKISSdataset();
	var dur = new Date().getTime() - timeIn;
	timeIn = new Date().getTime();
	popKISSTable();
	var dur2 = new Date().getTime() - timeIn;
	timeIn = new Date().getTime();
	msg = "Construct piecemark table.";
	scopes.jobs.warningsMessage(msg,true);
	createKISSForm();
	var dur3 = new Date().getTime() - timeIn;
	msg = "View piecemark table.";
	scopes.jobs.warningsMessage(msg,true);
	if (application.isInDeveloper()){
		application.output('TIME (ms) defineKISSdataset '+dur);
		application.output('TIME (ms) popKISSTable '+dur2);
		application.output('TIME (ms) createKISSForm '+dur3);
	}
}
/**
 * @properties={typeid:24,uuid:"536E53EC-DBBA-4831-93CA-897FF4253C42"}
 */
function recomputeLabelLimitsK(){
	while (recomputeLabelArray.length > 0){
		setBarcodeLimits(recomputeLabelArray.pop());
	}
}
/**
 * Save detail row into label selections table
 * @properties={typeid:24,uuid:"66D84854-9E39-42E3-83A6-7F4AF0005288"}
 * @SuppressWarnings(wrongparameters)
 */
function saveDetailRowK(){
	var length = sequenceArr.length;//get total number of sequences for this major mark
	if (length == 0) {
		null;
	}
	var totalMM = 0;
	if (length > 1){ //total counts for this mark
		for (var dex=0;dex < length;dex++){totalMM = totalMM*1+sequenceArr[dex].cnt*1}
	}
	for (var index = 0;index < length;index++){
		//for each sequence, separate the counts
		var newSeqCount = sequenceArr[index].cnt;
		if (length > 1){
			newSeqCount = Math.floor((newSeqCount/totalMM)*newRow[fieldOrderTempTable['item_quantity']]+.2);  
			//sequence_quantity is main mark sequence. So minor sequence count is item_quantity*(seq_total/sequence_quantity)
		}
		newRow[fieldOrderTempTable['sequence_number']] = sequenceArr[index].seq; //set sequence and sequence_count for each iteration of newRow to be added to dataset
		newRow[fieldOrderTempTable['sequence_quantity']] = newSeqCount;
		var pMarkStringSeq = pMarkString+"_"+sequenceArr[index].seq;
		var old = 1;
		var lastParentQty = 1;
		if (pMarkStringSeq in pMarks) {
			if (application.isInDeveloper()){application.output('we get here in these iterations, or is this is never experienced');}
			// this is old when there were dupes in the data due to sequence.  leave as error check.
			var row = pMarks[pMarkStringSeq];
			transitionFS.rowIndex = row;
			var col = fieldOrderTempTable['item_quantity'];//index into new row array,zero-based
			//var old = transitionFS.getValue(row, col+1);
			lastParentQty = transitionFS.item_quantity;
			var add = newRow[col];
			transitionFS.item_quantity = old*1 + add*1;
			transitionFS.parent_piecemark = "";
			transitionFS.sheet_number = "";
			transitionFS.sequence_number = "";
			transitionFS.sequence_quantity = "";
			setbarcodeQuantity(row);
		} else {
			//if (!newRow[fieldOrderTempTable['sequence_number']]){newRow[fieldOrderTempTable['sequence_number']]=""}
			transitionFS.addRow(newRow);
			//application.output(pMark.cParent+"_"+sequenceArr[index].seq);
			//application.output(newRow);
			var latestIndex = transitionFS.getMaxRowIndex();
			transitionFS.original_quantity = transitionFS.item_quantity;
			transitionFS.item_quantity = transitionFS.item_quantity * lastParentQty;
			setbarcodeQuantity(latestIndex);
			//if (!(pMarkStringSeq in pMarks)) {
			pMarks[pMarkStringSeq] = latestIndex;
			if (pMark.cMark.toLowerCase() == pMark.cParent.toLowerCase()){
				parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq] = latestIndex;//keep location of parent piecemark for adding weights and associating minors
				lastParentQty = newRow[fieldOrderTempTable['item_quantity']]; // adjust sub assembly piecemark to total for all assemblies
				// do the same thing, tracking the last parent using form variable
			} else { //minor mark encountered
				//add weight to parent mark with sequence
				//okay to set row index into transitionFS since this is the last call otherwise, restore it
				if (parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq]){
					var parentW = parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq]; //hold and check for seq
					transitionFS.rowIndex = parentW;
					//var subAssemblyCount = Math.floor(newRow[fieldOrderTempTable['item_quantity']]/transitionFS.item_quantity);
					//var subAssemblyCount = Math.floor(newRow[fieldOrderTempTable['item_quantity']]*transitionFS.item_quantity);
					var subAssemblyCount = newRow[fieldOrderTempTable['item_quantity']];
					if (application.isInDeveloper()){application.output('sub assembly count '+subAssemblyCount);}
					var addWeight = newRow[fieldOrderTempTable['item_weight']];
					var itemQty = newRow[fieldOrderTempTable['item_quantity']] * transitionFS.sequence_quantity;
					//newRow[fieldOrderTempTable['item_quantity']] = itemQty; 
					//var addMult = newRow[fieldOrderTempTable['sequence_quantity']];
					//if (addMult == ""){addMult = newRow[fieldOrderTempTable['item_quantity']];}
					//application.output('    '+pMark.cParent+"_"+sequenceArr[index].seq+'add '+subAssemblyCount+' subs at'+addWeight+' = '+addWeight*newSeqCount+' to '+transitionFS.item_weight);
					transitionFS.item_weight = transitionFS.item_weight*1+addWeight*subAssemblyCount;
					//application.output(' item Quantity '+transitionFS.item_quantity+' = '+old+' trans '+transitionFS.item_quantity+' * '+itemQty+' blahdata '+newRow[fieldOrderTempTable['item_quantity']]+' / '+transitionFS.item_quantity);
					if (recomputeLabelArray.indexOf(parentW) == -1){recomputeLabelArray.push(parentW)}//save parent for recomputer of label limits
					//application.output('labels '+recomputeLabelArray);
					if (application.isInDeveloper()){application.output('row.b '+newRow);}
					transitionFS.rowIndex = latestIndex; //reset to current record from parent
					transitionFS.item_quantity = itemQty;
					//transitionFS.sequence_quantity = transitionFS.sequence_quantity;
					if (application.isInDeveloper()){application.output(' output itemQty '+itemQty+' parent Qty '+lastParentQty);}
					recomputeLabelArray.push(latestIndex);
					if (application.isInDeveloper()){application.output('row.c '+latestIndex+' '+transitionFS.getRowAsArray(latestIndex));}
				}
			}
		}
	}
	newRow = null; // clear interim data
	newRow = rowTemplate.concat();
	if (exitSequence){
		sequenceArr = []; // sequences no longer apply for the next record
		exitSequence = false;
	}
}
/**
 * @param lineArray
 *
 * @properties={typeid:24,uuid:"5CE001A6-0DED-47DB-987D-27AB150DE799"}
 */
function newKRecord(lineArray){
	if (lineArray[0] == "*" && lineArray.length == 1){
		return true;
	}
	return false;
}
/**
 * Populate the table for the Import KISS file with piecemark data rows
 * by Steel Shape
 * @properties={typeid:24,uuid:"BCDE77AE-DD61-49B3-9B64-F63C342FC88E"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function popKISSTableK() {
	scopes.jobs.warningsYes(event);
	var beginTime = new Date().getTime();
	recomputeLabelArray = [];
	///var lastParent = 0;
	parentMarkIndex = [];
	pMarkString = "";
	pMarks = [];
	var results = scopes.jobs.importResults;
	var lengthResults = results.length;
	var lineType = "";
	var lineArray = "";
	var lineFieldValue = "";
	var mappingIndex = "";
	var mappingField = "";
	var mappingConcatOrder = "";
	//var detail = false;
	var checkValue = "";
	var skippedHeader = false;
	var skippedFirst = false;
	currentSequence = "";
	currentSequenceQty = "";
	newRow = null;
	newRow = rowTemplate.concat();
	var sequence = {seq : "", cnt :0}
	sequenceArr = []; // reset sequence array
	importArray = [];
	importMainGUID = new Array();
	importSubGUID = new Array();
	importMainGuidList = new Array();
	importSubGuidList = new Array();
	for (var index = 0;index < lengthResults;index++){
		scopes.jobs.warningsMessage('Converting line '+index+'/'+lengthResults+' to import row '+importArray.length);
		lineArray = results[index];
		lineType = lineArray[0];
		if (!skippedHeader){
			if (!newKRecord(lineArray)){
				continue;
			} else {
				skippedHeader = true;
			}  //skip header information
		}
		/**
		 * create record if "S" record is identified, collect series record information for all "D" records, yes
		 * create record if "D" record executed to next "D" record
		 * if newKRecord, close out old record and clear settings
		 */
		if  (lineType == "*" && skippedFirst){
			exitSequence = true ;
			continue;
		}
		if (skippedFirst && lineType == "D") { // save detail indicating new line before processing detail
			//saveDetailRow();
			saveDetailRow2();
		} else {
			skippedFirst = true;
		}
		for (var index2=1;index2 < lineArray.length;index2++){// insert each item into an array of mappedArray length
			mappingIndex = lineType+","+index2;  //set mapping index into mapping array
			if (scopes.jobs.mappedFormatArray[mappingIndex] == null){continue}  //skip null values
			mappingField = scopes.jobs.mappedFormatArray[mappingIndex].split(".")[1]; //get field from mapping array
			if (columnNames.indexOf(mappingField) == -1){continue}
			if (!(mappingField in fieldOrderTempTable)){continue}
			mappingConcatOrder = scopes.jobs.mappedFormatArray[mappingIndex].split(".")[2];
			lineFieldValue = lineArray[index2]; //value for array entry
			var skip = (lineType == "S"); //Sequence line handled out-of-order
			if (!skip) {
				checkValue = newRow[fieldOrderTempTable[mappingField]];
			}
			if (mappingConcatOrder != 1){
				lineFieldValue = checkValue+" "+lineFieldValue;
				checkValue = null;
			}
			if (checkValue == null || lineType == "Z" || lineType == "Y"){
				if (mappingField.search(numbers) != -1){
					newRow[fieldOrderTempTable[mappingField]] = lineFieldValue*1;
				} else if (mappingField.search(integers) != -1){
					newRow[fieldOrderTempTable[mappingField]] = Math.floor(lineFieldValue);
				} else {				
					newRow[fieldOrderTempTable[mappingField]] = lineFieldValue;
				}
				/** unique piecemarks use piecemark, material, sequence_number, grade.  aggregate these
				* changed 6/14/2014 
				* unique piecemarks use parent, piecemark,grade, finish, sheet
				*/
				if (lineType == "D"){
					if (mappingField.search('parent_piecemark') == 0){pMark.cParent = lineFieldValue}
					if (mappingField.search('piecemark') == 0){pMark.cMark = lineFieldValue}
					if (mappingField.search('grade') == 0){pMark.cGrade = lineFieldValue}
					//if (mappingField.search('material') == 0){pMark.cDescrip = lineFieldValue}
					if (mappingField.search('sheet_number') == 0){pMark.cSheetNum = lineFieldValue}
					if (mappingField.search('finish') == 0){pMark.cFinish = lineFieldValue}
					pMarkString = pMark.cSheetNum+"_"+pMark.cParent+"_"+pMark.cMark+"_"+pMark.cFinish+"_"+pMark.cGrade;
				}
				if (lineType == "S"){
					//exitSequence = false;
					if (mappingField.search('sequence_number') == 0){
						sequence.seq = lineFieldValue;
						//pMark.cSequence = lineFieldValue;
						//currentSequence = lineFieldValue;
					}
					if (mappingField.search('sequence_quantity') == 0){
						sequence.cnt = lineFieldValue;
						//currentSequenceQty = lineFieldValue;
						sequenceArr.push({seq:sequence.seq,cnt:sequence.cnt});
						sequence.cnt = 0;sequence.seq = "";
					}
				}
				if (lineType == "Z"){
					var mainAssem = lineArray[1];
					importMainGUID.push(mainAssem);
					break;
				}
				if (lineType == "Y"){
					mainAssem = lineArray[1];
					var subAssem = lineArray[2];
					if (!importSubGUID[mainAssem]){
						importSubGUID[mainAssem] = new Array();
					}
					if (!importSubGUID[mainAssem][subAssem]){
						importSubGUID[mainAssem].push(subAssem)
					}
					break;
				}
			}
		}
	}
	//saveDetailRow();
	saveDetailRow2();
	scopes.jobs.warningsMessage('Converted lines '+lengthResults+' to import lines '+importArray.length,true);
	var endTime = new Date().getTime();
	var duration = endTime - beginTime;
	beginTime = new Date().getTime();
	var impLength = importArea.length;
	var beginT = new Date().getTime();
	for (var joe = 0;joe < importArray.length;joe++){
		transitionFS.addRow(importArray[joe]);
	}
	endTime = new Date().getTime(); duration = endTime - beginTime;
	recomputeLabelLimits();
	importRecordCount = transitionFS.getMaxRowIndex();
	/**var columnNameArray = [];
	for (var idex = 0;idex < transitionFS.getMaxColumnIndex();idex++){
		columnNameArray.push(transitionFS.getColumnName(idex));
	}
	var missing = [];
	for (var col in fieldOrderTempTable){
		if (!fieldOrderTempTable[col]){missing.push(col)};
	}
	while (missing.length > 0){
		transitionFS.addColumn(missing.pop());
	}*/
	kissDatasource = null;kissDatasink = null;kissDataSumm = null;/// clear out previous tables if they are there
	uniqueKissTable++;
	kissDatasource = transitionFS.createDataSource('kissImportManage'+uniqueKissTable,tempArray);
	kissDatasink = transitionFSsink.createDataSource('kissImportSwap'+uniqueKissTable,tempArray);
	kissDataSumm = transitionFSsumm.createDataSource('kissImportSumm'+uniqueKissTable,tempArray);
	kissDataSheets = sheetsFS.createDataSource('kissSheets'+Math.floor(Math.random()*30000),tempArray);
	sequenceArr = []; //clear unused sequence array
	if(application.isInDeveloper()){application.output(fieldOrderTempTable);}
}
/**
 * @AllowToRunInFind
 * Define the dataset column types for the Import KISS file retention summary
 * @properties={typeid:24,uuid:"6163ECE1-AD73-4C64-84D6-3DD251248BD3"}
 * @SuppressWarnings(wrongparameters)
 */
function defineKISSdataset() {
	// create foundset with only captured data, so need all of the headers, then fill in the data.
	// modify only specific data
	var index;
	transitionFS = databaseManager.createEmptyDataSet();
	transitionFSsink = databaseManager.createEmptyDataSet();
	transitionFSsumm = databaseManager.createEmptyDataSet();
	sheetsFS = databaseManager.createEmptyDataSet();
	var fieldIndex = 0;
	var item;
	fieldOrderTempTable = [];
	// using column names to filter content.  'hide' ensures the data doesn't show
	columnNames = ['select_hidebool','summ_hidetext','set_bc_qty','last_bc_qty','barcode_qty','total_label_qty','ext_wt_qty','import_status','action','guid_hideindex'];
	for(index=0;index < columnNames.length;index++){  // insert administrative columns
		if (columnNames[index].search('qty') != -1){
			//application.output('xxxxxxxxxxxxxxxxxxxxxxxx integer '+columnNames[index]);
			var colType = JSColumn.INTEGER;
		} else {
			colType = JSColumn.TEXT;
		}
		transitionFS.addColumn(columnNames[index],fieldIndex+1,colType);
		transitionFSsink.addColumn(columnNames[index],fieldIndex+1,colType);
		transitionFSsumm.addColumn(columnNames[index],fieldIndex+1,colType);
		sheetsFS.addColumn(columnNames[index],fieldIndex+1,colType);
		fieldOrderTempTable[columnNames[index]] = fieldIndex++; // so this is field index to temp table indexed by field_name
	}
	var field;
	tempArray = [];
	rowTemplate = [];
	hides = new RegExp('hide|guid');
	booleans = new RegExp('(exclude|delete_similar|bool)');
	numbers = new RegExp('(length|weight)');
	integers = new RegExp('(qty|quan)');
	///var addSuccess = false;
	for (item in scopes.jobs.mappedFormatArray){  // insert columns representing kiss data file fields
		if (!(item in scopes.jobs.usedFields)){continue} // these are fields in the input file that are blank/unused in the scopes.jobs file
		field = scopes.jobs.mappedFormatArray[item];
		if (field == null) continue;
		field = field.split(".")[1];
		if (!(field in fieldOrderTempTable)){
			var columnType = JSColumn.TEXT;
			if (field.search(integers) != -1){
				columnType = JSColumn.INTEGER;
			} else if (field.search(numbers) != -1){
				columnType = JSColumn.NUMBER;
			} else if (field.search(booleans) != -1){
				columnType = JSColumn.INTEGER;
			} else {
				null;
			}
			transitionFS.addColumn(field,fieldIndex+1,columnType);
			transitionFSsink.addColumn(field,fieldIndex+1,columnType);
			transitionFSsumm.addColumn(field,fieldIndex+1,columnType);
			sheetsFS.addColumn(field,fieldIndex+1,columnType);
			fieldOrderTempTable[field] = fieldIndex++;
			columnNames.push(field);
		}
	}
	for (index = 0;index < columnNames.length;index++){  // create base array for datasource creation
	globals.firstTimeKISS = 0;
		if (globals.firstTimeKISS == 1){
			tempArray.push(JSColumn.TEXT);
		} else if (columnNames[index].search(booleans) != -1 || columnNames[index].search(integers) != -1){
			tempArray.push(JSColumn.INTEGER);
		} else if (columnNames[index].search(numbers) != -1) {
			tempArray.push(JSColumn.NUMBER);
		} else {
			tempArray.push(JSColumn.TEXT);
		}
		rowTemplate.push(null); //keep rowTemplate in sync for clearing rowArray
	}
}
/**
 * @AllowToRunInFind
 * Create the Import KISS retention form for identifying piecemarks per ID.
 * This MUST be removed prior to calling the parent form or it will cause errors.
 * There is no way to remove from history or delete the form while hiding since 
 * the form is visible and those delete actions fail. Must ensure deletion from history 
 * upon showing the form.
 * @properties={typeid:24,uuid:"FCEE5814-1547-45DA-AF9B-B57C11B69D3C"}
 */
function createKISSForm (){	// create table in form
	elements.tabless.removeAllTabs();
	//kissFS = databaseManager.getFoundSet(kissDatasource);
	//kissFS.loadRecords();
	//application.output('kissFS '+kissFS.getSize());
	//var checkForm = solutionModel.newForm('kiss_barcode_request',kissFS.getDataSource(),'sts_one',false,500,tempArray.length*80+10);
	var checkForm = solutionModel.newForm('kiss_barcode_request',kissDatasource,'sts_one',false,500,tempArray.length*80+10);
	checkForm.initialSort = 'material asc';
	var colOrderPrefs = [];
	colOrderPrefs =	scopes.jobs.tablePrefsPreLoad('kiss_barcode_request');
	/** 
	 * ##f3f5f7 is grey, #daa520 pumpkin, 
	 * 			((rec.sequence_quantity>1)||(rec.item_quantity>1))
	 * 				if (!rec.select_hidebool){rend.bgcolor="#daa520"}else{rend.bgcolor="yellow"}
	 * 		if (changedQuant.indexOf(last) == -1){changedQuant.push(last)}
	 */
	checkForm.onRender = checkForm.newMethod('function onRender(event) {\
		try {scopes.jobs.onRender2(event);} catch (e) {null;}}');	
	var code1 = 'function mySortFunction(dataP,asc,event){\
					application.output("test sort output");\
					forms.kiss_option_import.sortIndex(dataP);\
					if (globals.sortType){\
						forms.kiss_option_import.transitionFS.sort(globals.numSort);\
					}else{\
						forms.kiss_option_import.transitionFS.sort(globals.alphaSort);\
					}\
				}';
	checkForm.newMethod(code1);
	sortIndex('piecemark');	
	globals.sortColumn *= -1;
	transitionFS.sort(globals.numSort);
	//checkForm.onSortCmd = checkForm.getMethod('mySortFunction');
	checkForm.onSortCmd = checkForm.newMethod('function onSortCmd(dataProviderID, asc, event) { application.output("onSortCmd intercepted on " + event.getFormName() + ". data provider: " + dataProviderID + ". asc: " + asc); }');
	var code = 'function onRecordSelection(event) {var index = controller.getSelectedIndex();}';
	checkForm.onRecordSelection = checkForm.newMethod(code);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	
	//		quant = item_quantity;\
	
	code = 'function onQtyVerify(last,current,event) {\
		return scopes.kiss.verifyImportQuants(last,current,event);\
	}';
	/**		if (current*1<1||Math.floor(current)!=current){\
	forms.kiss_option_import.errorMessage = i18n.getI18NMessage("sts.txt.label.quantity.entry.incorrect");\
	return false;\
	}\
	var quant = 0;\
	if (sequence_quantity && current*1>sequence_quantity){return false;}\
	if (item_quantity && current*1>item_quantity*1){return false;}\
	if (sequence_quantity&&sequence_quantity != ""){quant = sequence_quantity} else {quant = item_quantity}\
	if (item_quantity && current*1>item_quantity*1){return false;}\
	var bcNums = scopes.jobs.createBCnums(current,quant,item_weight);\
	application.output("current "+current+" quant "+quant+" weight "+item_weight+"\\n bcNums "+bcNums);\
	for (xitem in bcNums){\
		application.output("bcNums."+xitem+": "+bcNums[xitem]);\
	}\
	set_bc_qty = Math.floor(bcNums.full);\
	last_bc_qty = Math.floor(bcNums.last);\
	total_label_qty = bcNums.per;\
	ext_wt_qty = bcNums.totwt;\
	if (last_bc_qty<0){return false}\
	if (piecemark == ""){\
	  var unique = material+grade+finish+sequence_number;\
	 } else {\
	  unique = piecemark+parent_piecemark+sheet_number+grade+finish+sequence_number;\
	 }\
	scopes.jobs.importLabelCounts[unique] = current;\
	;\
	return true;\
	*/	
	checkForm.newMethod(code);
	var last = ""; 
	var offset = 0;//stop stop stop
	for (var index = 0;index < columnNames.length;index++){
		if (columnNames[index].search(hides) != -1){
			last = checkForm.newLabel(columnNames[index],offset,0,0,20);
		} else {
			last = checkForm.newLabel(columnNames[index],offset,0,60,20);
		}
	 	//last.showClick = true;last.enabled = true;last.showFocus=true;
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	last.labelFor=columnNames[index];
	 	last.name=columnNames[index]+'_label';
	 	last.toolTipText = last.labelFor;
	 	var altColumn = headerKissNames[columnNames[index]];
	 	if (headerKissNames[columnNames[index]]) {
	 		last.text = altColumn; 
	 	} else if (scopes.jobs.i18nColumnNames[columnNames[index]]){
	 		last.text = scopes.jobs.i18nColumnNames[columnNames[index]];
	 	}
		last.borderType = solutionModel.createLineBorder(1,'#000000');
	 	offset += 80;
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	offset = 0;
	for (index = 0;index < columnNames.length;index++){
		if (columnNames[index].search(hides) != -1){
			last = checkForm.newField(columnNames[index],JSField.TEXT_FIELD,offset,20,0,20);//joejoewas 1
			last.visible = false;
		} else if (columnNames[index].search(booleans) != -1){
			last = checkForm.newField(columnNames[index],JSField.CHECKS,offset,20,60,20);
		} else if (columnNames[index].search('action') != -1){
			last = checkForm.newField(columnNames[index],JSField.COMBOBOX,offset,20,60,20);
			last.valuelist = solutionModel.getValueList('stsvl_import_actions');
		} else if (columnNames[index]){
			last = checkForm.newField(columnNames[index],JSField.TEXT_FIELD,offset,20,60,20);
			if (columnNames[index].search('qty') != -1 || columnNames[index].search('quant') != -1){
				last.horizontalAlignment = SM_ALIGNMENT.RIGHT;
				//last.format = '#';
			}
		} else {
			last = checkForm.newField(columnNames[index],JSField.TEXT_FIELD,offset,20,60,20);//joejoewas 1
			// was continue;
		}
	 	last.tabSeq = -2;
		if (columnNames[index].search('weight') != -1){
			last.format = '#.##';
		}
		if (columnNames[index].search('barcode_qty') != -1){
			last.onDataChange = checkForm.getMethod('onQtyVerify');
			last.tabSeq = 0;
			last.selectOnEnter = true;
			last.editable = true;
		}
		if (columnNames[index].search('action') != -1){
			//last.onDataChange = checkForm.getMethod('onQtyVerify');
			last.tabSeq = 1;
		}
		if (columnNames[index].search('weight') != -1){
			last.horizontalAlignment = SM_ALIGNMENT.RIGHT;
		}
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	last.name=columnNames[index];
	 	offset += 80;
		if (columnNames[index].search('(barcode_qty|action)') == -1){
			last.editable = false;
		}
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	elements.tabless.addTab('kiss_barcode_request');
	globals.firstTimeKISS = 0;
}
/**
 * Create a sort routine for in-memory datasets.  The intrinsic sorts fail
 * as they only recognize alphabetic sorts, not numeric.
 * @param name
 *
 * @properties={typeid:24,uuid:"D8AAF2AE-3D83-4239-8AF1-6C8DC7F36B20"}
 * @AllowToRunInFind
 */
function sortIndex (name){
	var value = globals.sortColumn;
	if ((name.search('sequence_number') == -1) && (name.search('sheet_number') == -1) && (name.search('(num|qty|quantity|length|weight)') != -1)) {globals.sortType = true} else {globals.sortType = false}
	var newValue = fieldOrderTempTable[name];
	if (Math.abs(value) == Math.abs(newValue)){newValue = value*-1;}
	globals.sortColumn = newValue;
}
/**
 * Move a piecemark row between the rentention and exclusion Foundsets.
 * @param row
 * @param sourceDb
 * @param targetDb
 *
 * @properties={typeid:24,uuid:"CE54750C-E49A-4350-B682-72FDF2876D32"}
 */
function moveRow(row,sourceDb,targetDb){
	var rowArray = sourceDb.getRowAsArray(row);
	sourceDb.removeRow(row);
	targetDb.addRow(rowArray);
}
/**
 * @param row
 * @param sourceDb
 *
 * @properties={typeid:24,uuid:"69802EB8-BCF2-4750-8C28-C39AD3EB4832"}
 */
function deleteRow(row,sourceDb){
	///var rowArray = sourceDb.getRowAsArray(row);
	sourceDb.removeRow(row);
}
/**
 * @AllowToRunInFind
 * 
 * Apply selections on the KISS Import form, updating the table shown on the form.
 * Moves the exclusions from the retention Foundset, and restores non-exclusions.
 * 
 * @param sourceDb
 * @param destDb
 *
 * @properties={typeid:24,uuid:"4CB1DF63-FC21-4F9A-8CEB-1A820897013F"}
 */
function applyShapeExcludes(sourceDb,destDb){
	//var descrip = fieldOrderTempTable['material']+1;
	var srcLength = sourceDb.getMaxRowIndex();	
	var i1 = 0;
	var shape;
	var excList = forms.kiss_option_import.jobImportExc;
	///var sumList = forms.kiss_option_import.jobImportSum;
	//var major = fieldOrderTempTable['parent_piecemark']+1;
	//var minor = fieldOrderTempTable['piecemark']+1;
	for (i1 = srcLength; i1 >= 0; i1--) {
		//if (sourceDb.getValue(i1,fieldOrderTempTable['select_hidebool']+1) == 1) {continue}
		errorMessage = i18n.getI18NMessage('sts.txt.import.exclusions.processed').replace('XXX',i1);
		sourceDb.rowIndex = i1;
		/** @type String */
		var majorPm = sourceDb.parent_piecemark;
		/** @type String */
		var minorPm = sourceDb.piecemark;
		
		if (!majorPm){continue}
		var minorRecord = (keepMinors == 0) && ((minorPm != "") && majorPm.toLowerCase() != minorPm.toLowerCase());
		/** @type String */
		var material = sourceDb.material;
		if (!material){continue}
		shape = material.split(" ")[0];
		shape = " " + shape + " ";
		//var special = majorPm+' '+minorPm+' '+material+" "+sourceDb.grade+" "+sourceDb.finish+sourceDb.item_weight;
		//application.output('minor '+minorRecord+' '+special);
		if (minorPm == "" && majorPm == ""){  //remove summaries, excludes overrides
			//sourceDb.removeRow(i1);
		}
		if ((excList.search(shape) != -1) || minorRecord) { // || (sumList.search(shape) != -1)) 
			moveRow(i1, sourceDb, destDb);
		}
	}	
}
/**
 * Move all rows from sheetsFS into transitionFS
 * @param sheetsDb
 * @param importDb
 *
 * @properties={typeid:24,uuid:"AAC8D5CA-4252-4ACA-A0B9-0009778C00BD"}
 */
function applySheetUpdates(sheetsDb,importDb){
	application.output('inside applysheetupdates');
//listDataset(sheetsDb);
	var sheetLength = sheetsDb.getMaxRowIndex();
	for (var index = sheetLength;index > 0;index--){
		moveRow(index,sheetsDb,importDb);
	}
	errorMessage = i18n.getI18NMessage('sts.txt.add.existing.records.to.review.table');
}
/**
 * Keeping this simple. Only select_hidebool is == 1 when these are added.
 * May need another select, but this is easier right now. Remove all of those rows select_hidebool == 1
 * @param importDb
 *
 * @properties={typeid:24,uuid:"4C03606B-7317-42E5-868C-63292B0B954E"}
 */
function applySheetUpdatesRemove(importDb){
	var importLength = importDb.getMaxRowIndex();
	for (var index = importLength;index > 0;index--){
		importDb.rowIndex = index;
		if (importDb.select_hidebool == 1){
			deleteRow(index,importDb);
		}
	}
}
/**
 * @param importDb
 *
 * @properties={typeid:24,uuid:"F982408D-96A3-4912-84AC-5DF0A2A3FA99"}
 */
function clearSheetUpdates(importDb){
	applySheetUpdatesRemove(importDb);
	var length = importDb.getMaxRowIndex();
	for (var index = length; index > 0 ;index--){
		deleteRow(index,importDb);
	}
}
/**
 *
 * @properties={typeid:24,uuid:"97D6DCE7-87E3-4E3C-BA7B-B2D722F57BD2"}
 */
function applyResetExclusions(){
	errorMessage = i18n.getI18NMessage('sts.txt.remove.summary.records');
	var majIdex = fieldOrderTempTable['parent_piecemark']+1;
	var minIdex = fieldOrderTempTable['piecemark']+1;
	var selectIdex = fieldOrderTempTable['select_hidebool']+1;
	var length = transitionFS.getMaxRowIndex()
	for (var i1=length;i1>0;i1--){
		transitionFS.rowIndex = i1+1;
		if (transitionFS.getValue(i1,majIdex)=="" && transitionFS.getValue(i1,minIdex)==""){
			transitionFS.removeRow(i1);
			errorMessage = i18n.getI18NMessage('sts.txt.import.removing.summary.records').replace('XXX',i1);
		}
		if (transitionFS.getValue(i1,selectIdex)==1){
			transitionFS.removeRow(i1);
		}
	}
	length = transitionFSsink.getMaxRowIndex();
	errorMessage = i18n.getI18NMessage('sts.txt.import.restoring.excluded.records').replace('XXX',length);
	for (i1=length;i1>0;i1--){
		moveRow(i1,transitionFSsink,transitionFS);
	}
	length = transitionFSsumm.getMaxRowIndex();
	errorMessage = i18n.getI18NMessage('sts.txt.import.restoring.summaried.records').replace('XXX',length);
	for (i1=length;i1>0;i1--){
		moveRow(i1,transitionFSsumm,transitionFS);
	}
	errorMessage = i18n.getI18NMessage('sts.txt.restore.complete');
}
/**
 * @AllowToRunInFind
 * 
 * @param sourceDb
 * @param destDb
 *
 * @properties={typeid:24,uuid:"A0EE0C13-44C6-4AF2-9372-840825677FA6"}
 * @SuppressWarnings(wrongparameters)
 */
function applyShapeSummary(sourceDb,destDb){
	/** var tables = databaseManager.getTableNames('stsservoy');
	for (var idxxx = 0;idxxx < tables.length;idxxx++ ){
		var table = databaseManager.getTable('stsservoy',tables[idxxx]);
		var tableColumns = table.getColumnNames();
		for (var idxxx1 = 0;idxxx1 < tableColumns.length; idxxx1++){
			var tableCol = table.getColumn(tableColumns[idxxx1]);
			var tableVar = tableCol.getTypeAsString();
			application.output(tables[idxxx]+'\t'+tableColumns[idxxx1]+'\t'+tableVar);
		}
	} */
	// array of indices for summary records by 'material and length'
	///var tempTotal=0;
	var summedArray = [];
	var summedRemoval = [];
	var srcLength = transitionFS.getMaxRowIndex();	
	///var dstLength = destDb.getMaxRowIndex();
	var i1 = 0;
	var zeroFields = [];
	var zeroNames = ['piecemark','parent_piecemark','sequence_qty','sequence_number','sheet_number','reference_drawing','route_code','sequence_quantity'];
	for (i1=0;i1<zeroNames.length;i1++){zeroFields.push(fieldOrderTempTable[zeroNames[i1]]);}
	var descrip = ""; var length = 0; var grade = ""; var finish = "";
	var itemCount = 0;
	var sumList = forms.kiss_option_import.jobImportSum;
	var excList = forms.kiss_option_import.jobImportExc;
	/**var descripI = fieldOrderTempTable['material']+1;
	var lengthI = fieldOrderTempTable['item_length']+1;
	var gradeI = fieldOrderTempTable['grade']+1
	var finishI = fieldOrderTempTable['finish']+1;
	var countI = fieldOrderTempTable['item_quantity']+1;
	var piecemarkI = fieldOrderTempTable['piecemark']+1;*/
	///var newRow = "";
	var summaryItem = "";
	var shape;
	for (i1 = srcLength; i1 > 0; i1--) {
		forms.kiss_barcode_request.controller.recordIndex = i1;
		transitionFS.rowIndex = i1;
		errorMessage = i18n.getI18NMessage('sts.txt.import.processsing.summaries').replace('XXX',i1);
		shape = transitionFS.material;
		shape = " " + shape + " ";
		descrip = transitionFS.material;
		length = transitionFS.item_length;
		grade = transitionFS.grade;
		finish = transitionFS.finish;
		itemCount = transitionFS.sequence_quantity;
			///application.output('removing summaries index '+i1+' of '+srcLength+' ; '+descrip+' '+length+' '+grade+' '+finish+' '+itemCount);
		if (excList.search(shape) != -1){continue} // shape already discarded
		//if (shape && (sumList.search(shape) != -1) && (transitionFS.piecemark != "")){
		var toBeSummed = false;
		var sumListing = sumList.split(' ');
		var sumIdx = 0;
		while (sumIdx++ <= sumListing.length){
			toBeSummed = (shape && (shape.search(' '+sumListing[sumIdx]+' ') != -1));
			if (toBeSummed){break}
		}
		if (shape && toBeSummed && (transitionFS.piecemark != "")){
			//if (shape && (shape.search(sumList) != -1) && (transitionFS.piecemark != "")){
			if (!itemCount || itemCount == ""){itemCount = transitionFS.item_quantity}
			summaryItem = descrip+grade+finish;
			if (summaryItem in summedArray){
				forms.kiss_barcode_request.controller.recordIndex = summedArray[summaryItem+"idx"];
				var oldQuant =  forms.kiss_barcode_request.item_quantity;//transitionFS.getValue(i1,fieldOrderTempTable['item_quantity']+1);
				var newQuant = itemCount*1+oldQuant*1;
				forms.kiss_barcode_request.item_quantity = newQuant;
				forms.kiss_barcode_request.sequence_quantity = newQuant;
			} else {
				summedArray[summaryItem] = transitionFS.getRowAsArray(i1);
				for (var j=0;j<summedArray[summaryItem].length;j++){
					if (zeroFields.indexOf(j) == -1){continue}
					summedArray[summaryItem][j]="";
				}
				transitionFS.addRow(summedArray[summaryItem]);
				summedArray[summaryItem+"idx"] = transitionFS.getMaxRowIndex();
				setbarcodeQuantity(transitionFS.getMaxRowIndex());
				forms.kiss_barcode_request.controller.recordIndex = summedArray[summaryItem+"idx"];
				if (forms.kiss_barcode_request.item_quantity){
					forms.kiss_barcode_request.item_quantity = itemCount;
				}
				//add new row and add count to row item
			}
			summedRemoval.push(i1);
			// move summarized row, tagging with summary row index in selection table
		}
	}
	for (i in summedArray){
		if (i.search('idx') == -1){continue}
		forms.kiss_barcode_request.controller.recordIndex = summedArray[i]
		setbarcodeQuantity(summedArray[i]);
	}
	for (var i=0;i<summedRemoval.length;i++){
		moveRow(summedRemoval[i],transitionFS,destDb);
	}
	// remove all not selected from sumList from main selection.  No summing necessary, etc, just delete summaries
}
/**
 * @param row
 *
 * @properties={typeid:24,uuid:"41F095E2-D5E4-424D-98C6-050C2DA0A156"}
 */
function setbarcodeQuantity(row){
	transitionFS.rowIndex = row;
	var quant = transitionFS.sequence_quantity;
	//var quant = transitionFS.getValue(row,fieldOrderTempTable['sequence_quantity']+1);
	if (quant == "" || !quant){
	 	//quant = transitionFS.getValue(row,fieldOrderTempTable['item_quantity']+1);
	 	quant = transitionFS.item_quantity;
	}
	//var setIdex = fieldOrderTempTable['barcode_qty']+1;
	//var weightSet = transitionFS.getValue(row,fieldOrderTempTable['item_weight']+1)*1 < scopes.prefs.wtPrompt*1;
	var weightSet = transitionFS.item_weight*1 < scopes.prefs.wtPrompt*1;
	var quantSet = quant*1 > scopes.prefs.qtyPrompt;
	if (weightSet || quantSet) {
		transitionFS.barcode_qty = 1;
		/**if (!forms.kiss_barcode_request){
			transitionFS.setValue(row,setIdex,1);
		} else {
			forms.kiss_barcode_request.barcode_qty = 1;
		}*/
	} else {
		transitionFS.barcode_qty = quant;
		/**if (!forms.kiss_barcode_request){
			transitionFS.setValue(row,setIdex,quant);
		} else {
			forms.kiss_barcode_request.barcode_qty = quant;
		}*/
	}
	setBarcodeLimits(row);
}

/**
 * @param row
 *
 * @properties={typeid:24,uuid:"F666AC7A-2559-4A89-91B0-E83B9577EE54"}
 */
function setBarcodeLimits(row){
	transitionFS.rowIndex = row;
	if (transitionFS.piecemark == ""){
		var unique = transitionFS.material+transitionFS.grade+transitionFS.finish+transitionFS.sequence_number;
	} else {
		unique = transitionFS.piecemark+transitionFS.parent_piecemark+transitionFS.sheet_number+transitionFS.grade+transitionFS.finish+transitionFS.sequence_number;
	}
	if (scopes.jobs.importLabelCounts[unique]){
		transitionFS.barcode_qty = scopes.jobs.importLabelCounts[unique];
	}
	//var currentLabelCount = transitionFS.getValue(row,fieldOrderTempTable['barcode_qty']+1);
	var currentLabelCount = transitionFS.barcode_qty;
	//var itemsCount = transitionFS.getValue(row,fieldOrderTempTable['sequence_quantity']+1);
	var itemsCount = (transitionFS.sequence_quantity == "") ? transitionFS.item_quantity : transitionFS.sequence_quantity;
	//if (application.isInDeveloper()){application.output('row '+row+'item quantity '+transitionFS.item_quantity);}
	if (!itemsCount || itemsCount == ""){itemsCount = transitionFS.item_quantity}
	var bcNums = scopes.jobs.createBCnums(currentLabelCount,itemsCount,transitionFS.item_weight);

	transitionFS.set_bc_qty = bcNums.full; //labelsFull;
	transitionFS.last_bc_qty = bcNums.last; //lastLabelCount;
	transitionFS.total_label_qty = bcNums.per; //itemsPerLabel;
	transitionFS.ext_wt_qty = bcNums.totwt; //labelWeight;
}
/**
 * Remove or include minor piecemarks within retention Foundset
 * @param sourceDb
 *
 * @properties={typeid:24,uuid:"452F2967-093E-48AB-95D5-22E5695F9177"}
 */
function applyRemoveMinors(sourceDb){
	var major = fieldOrderTempTable['parent_piecemark']+1;
	var minor = fieldOrderTempTable['piecemark']+1;
	var selectDb = sourceDb;
	var selLength = selectDb.getMaxRowIndex();
	for (var i1 = selLength; i1 > 0; i1--) {
		if (selectDb.getValue(i1,major) && (selectDb.getValue(i1,major).toLowerCase() != selectDb.getValue(i1,minor).toLowerCase())) {
			if (keepMinors == 0) {
				deleteRow(i1, sourceDb);
			}
		}
	}
}
/**
 * @param db
 *
 * @properties={typeid:24,uuid:"1630C59E-8B33-4E7C-8FC5-2B5DD9FE37E1"}
 */
function listDataset(db){
	var length = db.getMaxRowIndex();
	for (var index = 1;index <= length;index++){
		db.rowIndex = index;
		var text = "";
		for (var index2=1;index2 <= db.getMaxColumnIndex();index2++){
			var colName = db.getColumnName(index2);
			text = text + db[colName] + ", ";
		}
		application.output(text);
		if (db.material == ""){
			application.output('empty row');
		}
	}
	application.output('-----------------');
}
/**
 * Update visual retention Foundset with import selections made on the form.
 * No records will be created. Still verification of job import criteria.
 * @properties={typeid:24,uuid:"9656ACD0-4E9A-4481-9798-27C2981D6AE4"}
 * @AllowToRunInFind
 */
function applyImportPreferences(event,skipDialog){
	if (!skipDialog){
		var reply = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
			i18n.getI18NMessage('sts.txt.question.discard.types'),
			[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
		scopes.jobs.applyDiscardTypes = (reply == i18n.getI18NMessage('sts.btn.yes'));
	} else {
		scopes.jobs.applyDiscardTypes = true;
	}
	scopes.jobs.warningsMessage('Applying import preferences to all rows.',true);
	//scopes.jobs.warningsYes(event);
	//scopes.jobs.warningsMessage('Apply import preferences.');
	elements.btn_Apply.enabled = false;
	elements.btn_Import.enabled = false;
	elements.btn_Import.bgcolor = '#f0f0f0';
	//application.updateUI();
	//application.output('color '+elements.btn_Import.bgcolor);
	//var appendToData2 = importOption.search('Append') != -1; // 2018 remove since no import option this view anymore
	//applyResetExclusions();
	//applyShapeExcludes(transitionFS,transitionFSsink);
	//applyShapeSummary(transitionFS,transitionFSsumm);
	//applySheetUpdatesRemove(transitionFS);
	// tossMinors keep weights
	var minors = i18n.getI18NMessage('sts.txt.minors.kept');
	if (keepMinors == 0){
		minors = i18n.getI18NMessage('sts.txt.minors.discarded');
	}
	minorsChanged = false;
	errorMessage = i18n.getI18NMessage('sts.txt.exclude.summary.selections.set')+' '+minors;
	///importRecordCount = transitionFS.getMaxRowIndex();
	scopes.jobs.idCreationCount = 0;// reset bc count to be created
	//for (var index = 1;index <= importRecordCount;index++){
	//	setBarcodeLimits(index);
	//	transitionFS.rowIndex = index;
	//	var nums = scopes.jobs.dbRecCounts(transitionFS);
	//	scopes.jobs.idCreationCount = scopes.jobs.idCreationCount*1 + nums.bcAdd;// update bc count for import
	//}
	scopes.jobs.warningsMessage('Barcodes to be created, '+scopes.jobs.idCreationCount+'.',true);
	//scopes.jobs.importRecordsCheck();
	forms.kiss_option_import.impDirty = false;
	if (false && importOption.search('Sheet') != -1){
		if (sheetsFS.getMaxRowIndex() == 0){
			//scopes.jobs.warningsMessage('Begin load existing DB records.');
			if (application.isInDeveloper()){application.output('inside loadCurrentJobsRecords');}
			scopes.jobs.loadCurrentJobsRecords();
		}
		//applySheetUpdates(sheetsFS,transitionFS);//add piecemarks from database not in the import file
	}
	//scopes.jobs.warningsX();
	elements.btn_Apply.enabled = true;
	//if (importRouting != ""){
		elements.btn_Import.bgcolor = 'green';
		elements.btn_Import.enabled = true;
	//}
	//saveExclSumms();
	var excList = '';
	var sumList = '';
	var excldS = forms.kiss_excludes_lst.foundset;
	var rec = null; var i = 1;
	while (rec = excldS.getRecord(i++)){
		if (rec.exclude == 1){excList+=" "+rec.shape+" "}
		if (rec.summarize == 1){sumList+=" "+rec.shape+" "}
	}
	var fs = forms.import_table.foundset;
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	rec = null; i = 1; var totRec = 0;
	while (rec = fs.getRecord(i++)){
		/** @type String */
		var majorPm = rec.parent_piecemark;
		/** @type String */
		var minorPm = rec.piecemark;
		totRec++;
		if (!majorPm){continue}
		var minorRecord = (keepMinors == 0) && ((minorPm != "") && majorPm.toLowerCase() != minorPm.toLowerCase());
		
		/** @type String */
		var shape = rec.material.split(' ')[0];
		shape = " " + shape + " ";
		var igText = i18n.getI18NMessage('i18n:import.ignore');
		var smText = i18n.getI18NMessage('i18n:import.summarize');
		if (rec.import_status == smText || rec.import_status == igText){
			rec.import_status = i18n.getI18NMessage('i18n:import.update');
		}
		if (scopes.jobs.applyDiscardTypes && (excList.search(shape) != -1) || minorRecord) { // || (sumList.search(shape) != -1)
			rec.import_status = igText;totRec--;
		} else if ((sumList.search(shape) != -1)) {
			rec.import_status = smText;
		}

		//var special = majorPm+' '+minorPm+' '+material+" "+sourceDb.grade+" "+sourceDb.finish+sourceDb.item_weight;
		//application.output('minor '+minorRecord+' '+special);
		if (minorPm == "" && majorPm == ""){  //remove summaries, excludes overrides
			//sourceDb.removeRow(i1);
		}

	
	}
	importRecordCount = totRec;
	scopes.jobs.warningsMessage('Finished applying import prefs.',true);
	databaseManager.saveData(fs);
	//scopes.jobs.warningsX();
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"62E376E7-8123-4D24-9B07-C1CD1F7C86CA"}
 * @AllowToRunInFind
 */
function onDataChange(oldValue, newValue, event) {
	forms.kiss_option_import.elements.btn_Import.enabled = false;
	scopes.jobs.appendToData = (newValue.search('Append') != -1);
	//application.output('jobid '+scopes.jobs.jobIDs[0]);
	//scopes.jobs.appendQuantityToIdfile = [];
	var quantities = scopes.jobs.appendQuantityToIdfile;
	if (quantities == null){
		scopes.jobs.readIdfiles();
		if (scopes.jobs.dsIdfiles){
			application.output('true');
		} else {
			application.output('false');
			//var jobID = scopes.jobs.jobIDs[0];
			//scopes.jobs.jobUnderCustomer = jobID;
			scopes.jobs.readPieceTables();	
		}
		if (!scopes.jobs.appendQuantityToIdfile){
			scopes.jobs.importAmendQuantities();
		}
	}
	return true;
}

/**
 * Create Excel files for viewing what will be discarded and what will be kept
 * from the Import KISS file.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4E3D7A0-2708-4ECE-8DB0-05BE7D41FB88"}
 */
function onActionExcel(event) {
	var dp = [];
	var fs = null;
	var i = 0;
	//var file = plugins.file.showFileSaveDialog("importKissExcel.xls"); 
	var filePath = scopes.prefs.temppath;
	fs = forms.kiss_barcode_request.foundset;
	var columns = databaseManager.getTable(fs).getColumnNames();
	for (i=0;i<columns.length;i++){dp.push(columns[i]);}
	var excelFile = plugins.excelxport.excelExport(fs,dp);
	plugins.file.writeFile(filePath+"\\KISS_ExcelKeep.xls", excelFile);
	
	dp=[];
	fs = databaseManager.getFoundSet(forms.kiss_option_import.kissDatasink);
	fs.loadAllRecords();
	columns = databaseManager.getTable(fs).getColumnNames();
	for (i=0;i<columns.length;i++){dp.push(columns[i]);}
	excelFile = plugins.excelxport.excelExport(fs,dp);
	plugins.file.writeFile(filePath+"\\KISS_ExcelDiscard.xls", excelFile);
	
	errorMessage = 'See '+filePath+'\\KISS_Excel(Keep|Discard) files.';
}
/**
 * @param incomingMetric
 *
 * @properties={typeid:24,uuid:"B5F199C8-66C2-407F-9240-D0C5F096A873"}
 */
function setMetricJob(incomingMetric){
	metric_job = (incomingMetric) ? 1: 0;
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3F39F3A6-7ABE-4705-A52B-EF8A8AFB058F"}
 */
function onDataChange1(oldValue, newValue, event) {
	application.output('new routeing id'+newValue+' value '+importRouting);
	return true
}
/**
 * @properties={typeid:24,uuid:"5DC3DBFB-AD31-4262-89E8-680DB74249F4"}
 */
function saveDetailRow2K(){
	var length = sequenceArr.length;//get total number of sequences for this major mark
	if (length == 0) {
		null;
	}
	var totalMM = 0;
	if (length > 1){ //total counts for this mark
		for (var dex=0;dex < length;dex++){totalMM = totalMM*1+sequenceArr[dex].cnt*1}
	}
	importMainGuidList.push(importMainGUID.concat());
	importSubGuidList.push(importSubGUID);
	importSubGUID = new Array();
	importMainGUID = new Array();
	var guidPoolIndex = importMainGuidList.length;
	for (var index = 0;index < length;index++){
		//for each sequence, separate the counts
		var newSeqCount = sequenceArr[index].cnt;
		if (length > 1){
			newSeqCount = Math.floor((newSeqCount/totalMM)*newRow[fieldOrderTempTable['item_quantity']]+.2);  
			//sequence_quantity is main mark sequence. So minor sequence count is item_quantity*(seq_total/sequence_quantity)
		}
		newRow[fieldOrderTempTable['sequence_number']] = sequenceArr[index].seq; //set sequence and sequence_count for each iteration of newRow to be added to dataset
		newRow[fieldOrderTempTable['sequence_quantity']] = newSeqCount;
		scopes.prefs.qtyPrompt; //id counts greater than this number are prompted
		scopes.prefs.wtPrompt; //weights less than this are one, else max
		// set_bc_qty, last_bc_qty, barcode_qty, total_label_qty, ext_wt_qty from item_quantity
		newRow[fieldOrderTempTable['set_bc_qty']] = (newSeqCount*1 > scopes.prefs.qtyPrompt*1) ? newSeqCount : 1;
		newRow[fieldOrderTempTable['last_bc_qty']] = (newSeqCount*1 > scopes.prefs.qtyPrompt*1) ? newSeqCount : 1;
		newRow[fieldOrderTempTable['barcode_qty']] = (newSeqCount*1 > scopes.prefs.qtyPrompt*1) ? 1: newSeqCount;
		newRow[fieldOrderTempTable['total_label_qty']] = (newSeqCount == newRow[fieldOrderTempTable['set_bc_qty']]) ? newSeqCount : 1;
		newRow[fieldOrderTempTable['ext_wt_qty']] = newRow[fieldOrderTempTable['barcode_qty']] * newRow[fieldOrderTempTable['item_weight']]
		newRow[fieldOrderTempTable['guid_hideindex']] = guidPoolIndex-1;
		//newRow[fieldOrderTempTable['']]
		var pMarkStringSeq = pMarkString+"_"+sequenceArr[index].seq;
		var old = 1;
		var lastParentQty = 1;
		//transitionFS.addRow(newRow);
		
		newRow[fieldOrderTempTable['guid_index']] = importSubGuidList.length-1;
		importArray.push(newRow.concat());
		//var latestIndex = transitionFS.getMaxRowIndex();
		var latestIndex = importArray.length - 1;
		// new row...
		//transitionFS.original_quantity = transitionFS.item_quantity;
		//transitionFS.item_quantity = transitionFS.item_quantity * lastParentQty;
		///newRow[fieldOrderTempTable['original_quantity']] = newRow[fieldOrderTempTable['item_quantity']];
		newRow[fieldOrderTempTable['item_quantity']] = newRow[fieldOrderTempTable['item_quantity']] * lastParentQty;
		//transitionFS.original_quantity = transitionFS.item_quantity;
		//transitionFS.item_quantity = transitionFS.item_quantity * lastParentQty;
		///setbarcodeQuantity(latestIndex);
		//if (application.isInDeveloper()){application.output('ROW '+newRow);}
		pMarks[pMarkStringSeq] = latestIndex;
		if (pMark.cMark.toLowerCase() == pMark.cParent.toLowerCase()){
			parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq] = latestIndex;//keep location of parent piecemark for adding weights and associating minors
			lastParentQty = newRow[fieldOrderTempTable['item_quantity']]; // adjust sub assembly piecemark to total for all assemblies
			// do the same thing, tracking the last parent using form variable
		} else { //minor mark encountered
			//add weight to parent mark with sequence
			//okay to set row index into transitionFS since this is the last call otherwise, restore it
			if (parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq] != 'undefined'){
				var parentDex = parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq]; //hold and check for seq
				var subAssemblyCount = newRow[fieldOrderTempTable['item_quantity']];
				///if (application.isInDeveloper()){application.output('sub assembly count '+subAssemblyCount);}
				var addWeight = newRow[fieldOrderTempTable['item_weight']];
				var itemQty = newRow[fieldOrderTempTable['item_quantity']] * importArray[parentDex][fieldOrderTempTable['sequence_quantity']];
				importArray[parentDex][fieldOrderTempTable['item_weight']] = importArray[parentDex][fieldOrderTempTable['item_weight']]*1 + addWeight*subAssemblyCount;
				///if (recomputeLabelArray.indexOf(parentW) == -1){recomputeLabelArray.push(parentW)}//save parent for recomputer of label limits				
				importArray[latestIndex][fieldOrderTempTable['item_quantity']] = itemQty;
				///if (application.isInDeveloper()){application.output(' output itemQty '+itemQty+' parent Qty '+lastParentQty);}
			///recomputeLabelArray.push(latestIndex);
				///if (application.isInDeveloper()){application.output('row.c '+latestIndex+' '+transitionFS.getRowAsArray(latestIndex));}
				
				/** 
				 * 					var parentW = parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq]; //hold and check for seq
					transitionFS.rowIndex = parentW;
					var subAssemblyCount = newRow[fieldOrderTempTable['item_quantity']];
					if (application.isInDeveloper()){application.output('sub assembly count '+subAssemblyCount);}
					var addWeight = newRow[fieldOrderTempTable['item_weight']];
					var itemQty = newRow[fieldOrderTempTable['item_quantity']] * transitionFS.sequence_quantity;
					transitionFS.item_weight = transitionFS.item_weight*1+addWeight*subAssemblyCount;
					if (recomputeLabelArray.indexOf(parentW) == -1){recomputeLabelArray.push(parentW)}//save parent for recomputer of label limits
					if (application.isInDeveloper()){application.output('row.b '+newRow);}
					transitionFS.rowIndex = latestIndex; //reset to current record from parent
					transitionFS.item_quantity = itemQty;
					if (application.isInDeveloper()){application.output(' output itemQty '+itemQty+' parent Qty '+lastParentQty);}
					recomputeLabelArray.push(latestIndex);
					if (application.isInDeveloper()){application.output('row.c '+latestIndex+' '+transitionFS.getRowAsArray(latestIndex));}

				 */
			}
		}
	}
	newRow = null; // clear interim data
	newRow = rowTemplate.concat();
	if (exitSequence){
		sequenceArr = []; // sequences no longer apply for the next record
		exitSequence = false;
	}
}
/**
 * @param last
 * @param current
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A682A513-CF73-44E7-A792-1BD6C1427D2A"}
 * /
function verifyImportQuants(last,current,event){
	/ ** @type {JSRecord<{sheet_number:String,parent_piecemark:String,sequence_number:Number,finish:String,grade:String,material:String,piecemark:String,ext_wt_qty:Number,total_label_qty:Number,last_bc_qty:Number,set_bc_qty:Number,item_weight:Number,item_quantity:Number,sequence_quantity:Number}>} * /
	var rec = forms[event.getFormName()].foundset.getSelectedRecord();
	if (current*1<1||Math.floor(current)!=current){
		forms.kiss_option_import.errorMessage = i18n.getI18NMessage("sts.txt.label.quantity.entry.incorrect");
		return false;
	}
	var quant = 0;
	if (rec.sequence_quantity && current*1>rec.sequence_quantity){return false;}
	if (rec.item_quantity && current*1>rec.item_quantity*1){return false;}
	if (rec.sequence_quantity&&rec.sequence_quantity != ""){
		quant = rec.sequence_quantity
	} else {
		quant = rec.item_quantity
	}
	if (rec.item_quantity && current*1>rec.item_quantity*1){return false;}
	var bcNums = scopes.jobs.createBCnums(current,quant,rec.item_weight);
	if (application.isInDeveloper()){
		application.output("current "+current+" quant "+quant+" weight "+rec.item_weight+"\\n bcNums "+bcNums)
		for (var xitem in bcNums){
			application.output("bcNums."+xitem+": "+bcNums[xitem]);
		}
	}
	rec.set_bc_qty = Math.floor(bcNums.full);
	rec.last_bc_qty = Math.floor(bcNums.last);
	rec.total_label_qty = bcNums.per;
	rec.ext_wt_qty = bcNums.totwt;
	if (rec.last_bc_qty<0){return false}
	if (rec.piecemark == ""){
	 	var unique = rec.material+rec.grade+rec.finish+rec.sequence_number;
	} else {
		unique = rec.piecemark+rec.parent_piecemark+rec.sheet_number+rec.grade+rec.finish+rec.sequence_number;
	}
	scopes.jobs.importLabelCounts[unique] = current;
	return true;
} */
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F47692AF-8415-47D2-9334-C3D943B4EE62"}
 */
function onActionMinorMarks(event) {
	minorsChanged = true;
	onActionHideExcludedRecords(event,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @parm {Boolean} showAnyway
 *
 * @properties={typeid:24,uuid:"F0F2C9B4-55D6-4523-9EF7-1E7548C8B7EF"}
 */
function onActionHideExcludedRecords(event,showAnyway) {
	/**
	 * i18n:import.create
i18n:import.update
i18n:import.summarize
i18n:import.reprint
i18n:import.nohist
i18n:import.ignore
i18n:import.append
i18n:import.delete
Used within keep minor marks checkbox to show excludes

	 */
	// called from onActionMinorMarks(event) and btn_Hide
	var form = forms['kiss_option_import'];
	elements.btn_Hide.enabled = false;
	var el = form.elements['btn_Hide'];
	var showText = i18n.getI18NMessage('sts.btn.import.show.ignore.items');
	var hideText = i18n.getI18NMessage('sts.btn.import.hide.ignore.items');

	if (el.text == showText || showAnyway){
		forms['import_table'].hideIgnoredRecords(false);
		el.text = hideText;
	} else {
		if (el.text == hideText){
			forms['import_table'].hideIgnoredRecords(true);
			el.text = showText;
		}
	}
	elements.btn_Hide.enabled = true;
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var j = databaseManager.createSelect('db:/stsservoy/import_table');
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var J = databaseManager.getFoundSet(j);
	null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC8DF0C8-6E51-48F8-96E5-9899530B13A0"}
 */
function onActionSelections(event) {
	var tableRecs = forms.import_table.foundset.getSelectedRecords();
	if (tableRecs.length == 0){return}
	/** @type {Array} */
	var choices = application.getValueListArray('vl_import_actions');
	//choices.unshift(i18n.getI18NMessage('sts.empty.entry'));
	choices.unshift(null);
	//application.output('RM choices '+choices);globals.DIALOGS.showsel
	var action = scopes.globals.DIALOGS.showSelectDialog(i18n.getI18NMessage('sts.txt.import.change.actions'),i18n.getI18NMessage('sts.txt.import.change.actions.select'),choices);
	if (!action || action == i18n.getI18NMessage('sts.empty.entry')){return}
	application.output(action);
	var rec = null;var idx = 0;
	for (idx = 0;idx < tableRecs.length;idx++){
		rec = tableRecs[idx];
		//application.output('selected; '+rec.piecemark+' '+rec.material+' '+rec.import_status);
		rec.import_status = action;
	}
	databaseManager.saveData(forms.import_table.foundset);
}
