/**
 * @type {String}
 * Job Number that is pulled from the Import KISS file.
 * 
 *
 * @properties={typeid:35,uuid:"35E7936A-4713-41E7-BA64-71E5252DD56D"}
 */
var jobNumber = "";
/**
 * @type {String}
 * Name of the Job that is pulled from the Import KISS file.
 * 
 *
 * @properties={typeid:35,uuid:"0644E1CB-0EFF-45E7-9A76-A453DA4FAF52"}
 */
var jobName = "";
/**
 * @type {String}
 * Date of the Job that is pulled from the Import KISS file.
 * 
 *
 * @properties={typeid:35,uuid:"37FB6DDC-9A27-41EF-9927-900AD585BC0E"}
 */
var jobDate = "";
/**
 * @type {Number}
 * Is the Job that is pulled from the Import KISS file Metric or English
 * 
 *
 * @properties={typeid:35,uuid:"1F76DF8F-D95A-428F-ACD5-1113161DF223",variableType:8}
 */
var jobMetric = 0;
/**
 * @type {String}
 * Shop order optionally entered on the kiss import options page.
 * 
 *
 * @properties={typeid:35,uuid:"15CE093C-B287-4E8F-87D6-C3598B8C078B"}
 */
var jobShopOrder = "";
/**
 * @type {String}
 * List of selected Steel Shapes that are to be excluded from Import KISS file
 * 
 *
 * @properties={typeid:35,uuid:"1DA4CEC7-B08E-4FA7-96A9-37BE03519D99"}
 */
var jobImportExc = 'Exclude ';
/**
 * @type {String}
 * List of selected Steel Shapes that are to be summarized as single records from Import KISS file
 * 
 *
 * @properties={typeid:35,uuid:"6E86A326-4B4D-4527-B33A-C158B90E9EBF"}
 */
var jobImportSum = 'Summary ';
/**
 * @type {String}
 * Data provider for form Import Options area.
 * 
 *
 * @properties={typeid:35,uuid:"9FF79CE5-D5CB-4DC9-B043-AC3367213EF7"}
 */
var importOption = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"76CA849D-5186-4014-BE62-6EA98C032212"}
 */
var importArea = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"A50FF454-9114-4C30-AFA4-B2CE7598E05B"}
 */
var importRouting = "";
/**
 * Set to true to disable import button upon import options change.
 * 
 *
 * @properties={typeid:35,uuid:"B2B577C8-C6F1-4772-B806-BAE414B29C69",variableType:-4}
 */
var impDirty = true;
/**
 * @type {Number}
 * Local copy of global preference to keep Minor piecemarks or not.
 * 
 *
 * @properties={typeid:35,uuid:"B6529FF6-B697-429F-84C6-375A2898A671",variableType:8}
 */
var keepMinors = 0;
/**
 * @type {String}
 * Tracking for sequence number for an assembly.
 * 
 *
 * @properties={typeid:35,uuid:"8EDAA954-1583-4A74-BECA-C3C80AA8ACB3"}
 */
var currentSequence = "";
/**
 * @type {String}
 * Tracking for a sequence quantity on an assembly.
 * 
 *
 * @properties={typeid:35,uuid:"095A521F-8B90-491A-97CB-CFF83C686E58"}
 */
var currentSequenceQty = "";
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"A7B67BE2-B131-446E-9631-18ECA67F62B6",variableType:8}
 */
var summedMaxIndex = 0;
/**
 * Foundset (array) Dataset for showing retained data Import KISS file
 * 
 *
 * @properties={typeid:35,uuid:"C1D716E4-7407-4086-8F1E-6BA8045DD1AB",variableType:-4}
 */
var transitionFS = null;
/**
 * Foundset (array) Dataset for current records in the job tables to compare with incoming records.
 * 
 *
 * @properties={typeid:35,uuid:"73C25E1D-7237-4C68-BB64-ADB78DB2F8C7",variableType:-4}
 */
var sheetsFS = null;
/**
 * Foundset (array) for holding discarded data from the Import KISS file
 * 
 *
 * @properties={typeid:35,uuid:"F23106ED-378F-4162-9190-F3A78ED988A0",variableType:-4}
 */
var transitionFSsink = null;
/**
 * Foundset (array) for holding summed data from the Import KISS file
 * 
 *
 * @properties={typeid:35,uuid:"76F473A0-55E5-43A0-A649-622AE751F6B6",variableType:-4}
 */
var transitionFSsumm = null;
/**
 * Dataset source for Datasource of discarded Import KISS file data
 * 
 *
 * @properties={typeid:35,uuid:"6999ED64-D8D5-44EB-A0F9-68928CA79094",variableType:-4}
 */
var excludeFS = null;
/**
 * unused
 * 
 *
 * @properties={typeid:35,uuid:"8F2BDB50-3784-490B-8071-7BE76F003671",variableType:-4}
 */
var shapesArray = [];
/**
 * Holds object of sequence_number and sequence_quantity seq,cnt.
 * 
 * 
 *
 * @properties={typeid:35,uuid:"0FB645C0-6F17-4978-BAAE-D1FDC2127239",variableType:-4}
 */
var sequenceArr = [];
/**
 *  Hold index of piecemark by piecemark, grade, sequence and description(material)
 * 
 */

/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"2FDE1B99-EC13-4A03-9C21-D940AB00F2B1"}
 */
var pMarkString = "";
/**
 * Parent piecemark for weight rollup.
 * 
 *
 * @properties={typeid:35,uuid:"306606F2-99BE-4278-AD4A-242AAFBEFC53",variableType:-4}
 */
var parentMarkIndex = [];
/**
 * Create row before adding to table.
 * 
 *
 * @properties={typeid:35,uuid:"8C166B7E-00C9-4FE6-8BE1-C70A55641C4D",variableType:-4}
 */
var newRow = null;
/**
 * @type {Number}
 * Records to import. Expands to 'x' labels.
 * 
 *
 * @properties={typeid:35,uuid:"DF136D6C-E1EF-4748-B579-9746FCC18AE8",variableType:8}
 */
var importRecordCount = 0;
/**
 * Datasource for visual representation of records that are retained after import selections are made
 * as well as setting piecemarks per ID/barcode
 * 
 *
 * @properties={typeid:35,uuid:"86DD09A4-3F53-40AF-AE05-562B458A5235",variableType:-4}
 */
var kissDatasource = null;
/**
 * Datasource for holding discarded selections that may be discarded after import selections are
 * applied.
 * 
 *
 * @properties={typeid:35,uuid:"D935F26D-4D7B-4D0B-9BE3-3BD8FB4A3EFC",variableType:-4}
 */
var kissDatasink = null;
/**
 * Datasource for holding summarized selections that may be discarded after import selections are
 * applied.
 * 
 *
 * @properties={typeid:35,uuid:"CAC04063-8972-498D-8DB8-71262CFC0577",variableType:-4}
 */
var kissDataSumm = null;
/**
 * Datasource of existing records in the database for sheet number comparison.
 * 
 *
 * @properties={typeid:35,uuid:"E5C822C9-102D-46AD-BF34-77D788CC7C22",variableType:-4}
 */
var kissDataSheets = null;
/**
 * Datasource for selecting Steel Shapes that will be discarded after import selections are
 * applied.
 * 
 *
 * @properties={typeid:35,uuid:"5508EB84-984A-446F-A030-42F1B441C9F4",variableType:-4}
 */
var kissExcludes = null;
/**
 * Array holding 'column names' to column indices identifying the order in which the columns are placed
 * in the piecemark retention and exclusion Foundsets
 *  i.e. fieldOrderTempTable['piecemark'] returns integer column 9, if piecemark is in column 10
 * 
 * 
 *
 * @properties={typeid:35,uuid:"65405103-BD15-470B-A0F6-2F61C771C883",variableType:-4}
 */
var fieldOrderTempTable =[];
/**
 * @type {String}
 * Used as an informational datasource for the errorMessage label somewhere on the form to indicate the result
 * of some selection or action on the form, i.e. 'items saved'
 * 
 *
 * @properties={typeid:35,uuid:"6021E927-547E-4376-8810-4EBB272B3156"}
 */
var errorMessage = "";
/**
 * 
 *
 * @properties={typeid:35,uuid:"A7DCA37B-33F7-4E91-9483-19548182DF6F",variableType:-4}
 */
var headerKissNames = [];
/**
 * Labels for the major piecemarks change in weight, so label limits need to be recomputed after import.
 * 
 *
 * @properties={typeid:35,uuid:"D2830FAA-E4B3-4261-854F-FA97ACD089B4",variableType:-4}
 */
var recomputeLabelArray = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"7CC3920C-883C-4D0B-97C1-F89B4A07C485",variableType:-4}
 */
var importArray = [];
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"0DBE93DF-B034-4F76-A809-94B3F06FCF17"}
 */
var importSpeed = "";
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"CB878935-FF5B-4F81-912B-4C08DAE9EB62",variableType:8}
 */
var uniqueKissTable = 1;
/**
 * Each import line that is an assembly GUID gets placed here for each piecemark
 * importMainGUID = [0...x] = "??-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
 * 
 *
 * @properties={typeid:35,uuid:"B77D8E65-BA1F-4ACB-9480-59F697938B35",variableType:-4}
 */
var importMainGUID = [];
/**
 * Each sub assembly of a main guid gets pushed here for each piecemark, use importMainGUID as an index
 * importSubGUID = [0...x] = ["??-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"]["??-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","??-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",...]
 * 
 *
 * @properties={typeid:35,uuid:"73CA5148-624A-4B35-861A-D657E116F554",variableType:-4}
 */
var importSubGUID = [];
/**
 * Indexed to transitionFS import array to each piece.
 * 
 *
 * @properties={typeid:35,uuid:"A9129618-7AF3-43B4-8850-0954B4DB59FA",variableType:-4}
 */
var importMainGuidList = [];
/**
 * Indexed to transitionFS import array to each piece.
 * 
 *
 * @properties={typeid:35,uuid:"A5D6D215-856A-4F42-810E-8AE664053499",variableType:-4}
 */
var importSubGuidList = [];
/**
 * Callback method for when form is shown.
 * Unique setup for the form.  Results are from a range of tables, so no initial datasource is truly applicable
 * Form holds values which do not need to be in retention KISS import file
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"24D911A0-B969-4D83-8E36-E4B7C84C7694"}
 */
function onShow(firstShow, event) {
	if (firstShow){
	}
	globals.setUserFormPermissions(event);
	if (transitionFS){
		transitionFS.removeRow(-1);
		transitionFSsink.removeRow(-1);
		transitionFSsumm.removeRow(-1);
	}
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
	jobNumber = job.jobNumber;
	jobName = job.name;
	jobDate = job.date;
	jobMetric = job.metricFlag;
	///var customerArray = [];
	/** @type {QBSelect<db:/stsservoy/jobs>} */
	var j = databaseManager.createSelect('db:/stsservoy/jobs');
	j.result.add(j.columns.job_id);
	j.result.add(j.columns.customer_id);
	j.result.add(j.columns.barcode_form);
	j.where.add(j.columns.job_number.eq(scopes.jobs.importJob.jobNumber));
	j.where.add(j.columns.customer_id.eq(scopes.jobs.importJob.customerId));
	j.where.add(j.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var J = databaseManager.getFoundSet(j);
	/** @type {JSRecord<db:/stsservoy/jobs>} */
	var jobRec;
	if (J.getSize() > 0){
		jobRec = J.getRecord(1);
		scopes.jobs.importJob.customerId = jobRec.customer_id;
		scopes.jobs.importJob.jobId = jobRec.job_id;
		scopes.jobs.importJob.bcFormId = jobRec.barcode_form;//#87ticket#87
	}
	
	scopes.jobs.tempGetIdfilesToBarcodeCount(jobRec.job_id);// test tempGetIdfilesToBarcodeCount // example get item record summed count on field
	
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
	if (scopes.globals.kissJobRf){
		if ((scopes.globals.kissJobRf.search('FabSuite') != -1) ||
			(scopes.globals.kissJobRf.search('Romac') != -1)) {
				enableDrawing = false;
			}
	}
	elements.drawPrfx.visible = enableDrawing;
	elements.drawPrfx_label.visible = enableDrawing;
	elements.drawSufx.visible = enableDrawing;
	elements.drawSufx_label.visible = enableDrawing;

	var empArray = [];
	var empArrayID = [];
	/** @type {QBSelect<db:/stsservoy/employee>} */
	var empFS = databaseManager.createSelect('db:/stsservoy/employee');
	empFS.result.add(empFS.columns.employee_id);
	empFS.result.add(empFS.columns.employee_number);	
	empFS.where.add(empFS.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	empFS.where.add(empFS.columns.delete_flag.isNull);
	var E = databaseManager.getFoundSet(empFS);
	var idx = 1;
	/** @type {JSRecord<db:/stsservoy/employee>} */
	var rec = null;
	while (rec = E.getRecord(idx++)){
		empArray.push(rec.employee_number);
		empArrayID.push(rec.employee_id);
	}
	if (application.isInDeveloper()){application.setValueListItems('stsvl_employee',empArray)}
	employeeNumber = globals.session.loginUserNum;
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
		jobRoutes.push(rec2.route_code);
		jobRouteIds.push(rec2.routing_id);
	}
	application.setValueListItems('stsvl_route_code_id',jobRoutes,jobRouteIds);
	var window = controller.getWindow();
	var height = window.getHeight();
	window.setLocation(0, 0);
	window.setSize(application.getScreenWidth(),height);
	scopes.jobs.importLabelCounts = [];
	importOption = null;
	elements.btn_Import.enabled = false;
	keepMinors = scopes.prefs.lKeepMinorPcMarks;
	//index;
	///var custRec;
	controller.enabled = true;
	headerKissNames['item_quantity']=i18n.getI18NMessage('table.kiss.marks.total.import.qty');//'Total PcMarks Import Qty';
	headerKissNames['sequence_quantity']=i18n.getI18NMessage('table.kiss.sequence.qty');//'Import Qty';
	headerKissNames['set_bc_qty']=i18n.getI18NMessage('table.kiss.marks.full.label');//'Marks Full Label';
	headerKissNames['total_label_qty']=i18n.getI18NMessage('table.kiss.per.label.marks');//'Per Label Marks';
	headerKissNames['last_bc_qty']=i18n.getI18NMessage('table.kiss.per.label.remaining');//'Remaining';
	headerKissNames['barcode_qty']=i18n.getI18NMessage('table.kiss.labels.needed');//'Labels Needed';
	headerKissNames['ext_wt_qty']=i18n.getI18NMessage('table.kiss.labels.weight');//'Label Weight';
	headerKissNames['sheet_number']=i18n.getI18NMessage('table.kiss.sheet.number');//'Sheet';
	headerKissNames['piecemark']=i18n.getI18NMessage('table.kiss.piecemark');//'Piecemark';
	defineExclDataset();
	loadExclSumms();
	application.updateUI();
	var success = history.removeForm('kiss_excludes_lst');
	var success2 = solutionModel.removeForm('kiss_excludes_lst');
	if (!success || !success2){globals.loggerDev(this,'Form kiss_excludes_lst remove fail.')}
	success = history.removeForm('kiss_barcode_request');
	success2 = solutionModel.removeForm('kiss_barcode_request');
	if (!success || !success2){globals.loggerDev(this,'Form kiss_barcode_request remove fail.')}
	importTempTable();
	scopes.jobs.warningsMessage("Piecemark table view creation posted.",true);
	null;
	if (keepMinors == 0) {
		elements.keep_minors.enabled = false;
		applyRemoveMinors(transitionFS);
	} else {
		elements.keep_minors.enabled = true;
	}
	importOption = 'Use Sheet Number Matching';

	saveNotesInto = "<NONE>";
	scopes.jobs.warningsMessage("Setting table order.",true);
	scopes.jobs.tablePrefsLoad('kiss_option_import');
	//handle excludes by shape and summaries by piecemark
	scopes.jobs.warningsMessage("Apply initial preferences to piecemark table.",true);
	applyImportPreferences();
	scopes.jobs.warningsMessage("Table complete.",true);
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"5EF10CE3-D357-4590-8FA8-D83241C72E11"}
 */
function loadImportLabelCounts(){
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"506CB7C5-0EC8-4E9F-85C6-5B7B34F49A51"}
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
 * 
 *
 * @properties={typeid:24,uuid:"B1A71950-91F2-43F9-8748-B2DCE2E1786C"}
 */
function saveExclSumms(){
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
}
/**
 * Define the exclusion dataset for the foundset that holds records that are to be discarded
 * from the Import KISS file
 * 
 *
 * @properties={typeid:24,uuid:"9F708CE4-3EBF-4E45-9753-5D781D412D1E"}
 */
function defineExclDataset(){
	excludeFS = databaseManager.createEmptyDataSet();
	var item,code;
	var shapes = [];
	var results = scopes.jobs.importResults;
	var lineFieldIndex = scopes.jobs.getFieldDataMapping("mapped_field","piecemarks.material").split(",")[1]-1;
	for (var i = 0;i < results.length;i++){
		if (results[i][0] != "D"){continue}
		var newShape = results[i][lineFieldIndex];
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
}
/**
 * Handle hide window. No use removing form or history on Hide,
 * they fail due to window still being visible.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * 
 *
 * @properties={typeid:24,uuid:"BCC9F64D-99EF-4020-B8AF-7BAC6B457AF2"}
 */
function onHide(event) {
	null;
	//elements.tabless.removeAllTabs();
	//var success = history.removeForm('kiss_barcode_request');
	//if (success){
	//	var success2 = solutionModel.removeForm('kiss_barcode_request');
	//}
	globals.setWindowClosed("");
	transitionFS.removeRow(-1);
	transitionFSsink.removeRow(-1);
	transitionFSsumm.removeRow(-1);
	history.removeForm('kiss_excludes_lst');
	solutionModel.removeForm('kiss_excludes_lst');
	//databaseManager.getTable('kissDatasource');
	history.removeForm('kiss_option_import');
	solutionModel.removeForm('kiss_option_import');
	history.removeForm('kiss_barcode_request');
	solutionModel.removeForm('kiss_barcode_request');
	var win = application.getActiveWindow();
	win.hide();
	return true
}
/**
 * ColumnNames indexed into the exclusion and retention Foundsets for creating the Foundset 
 * and later identifying the proper column index into the array Foundset
 * 
 *
 * @properties={typeid:35,uuid:"E3351E9C-F750-4400-8CF5-F647C0F915E5",variableType:-4}
 */
var columnNames = [];
/**
 * Array for identifying JS column types (INTEGER, BOOLEAN, TEXT) when creating a datasource for the Foundsets
 * 
 *
 * @properties={typeid:35,uuid:"EB48B0B0-2DEE-4BFB-9C80-64982ADF5562",variableType:-4}
 */
var tempArray = [];
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"1477BAB4-210B-4A5B-9280-A3C65828D2AE"}
 */
var testDropdown = "";
///**
// * 
// * 
// */
//var excludeArray = [];
/**
 * Regular expression for selecting boolean columns in defining column types for datasources
 * 
 *
 * @properties={typeid:35,uuid:"9C73902D-7DBA-45A3-8E70-5CEB833FFF4B",variableType:-4}
 */
var booleans = null;
/**
 * 
 *
 * @properties={typeid:35,uuid:"A80EF14A-76EA-44B6-B5E2-8A640EBCF1AB",variableType:-4}
 */
var hides = null;
/**
 * Regular expression for selecting real number columns in defining column types for datasources
 * 
 *
 * @properties={typeid:35,uuid:"3491BFBA-D6FC-4DF5-9C07-23932D5E2951",variableType:-4}
 */
var numbers = null;
/**
 * Regular expression for selecting integer number columns in defining column types for datasources
 * 
 *
 * @properties={typeid:35,uuid:"BEFB31D9-8F59-4C28-A6A6-95514AE4CA50",variableType:-4}
 */
var integers = null;
/**
 * Array of nulls matching datasource rows when identifying and adding a new row into the datasource 
 * for the foundset. Must match the columnTypes array in size
 * 
 *
 * @properties={typeid:35,uuid:"5500DA75-598E-412D-96A1-318F9A2A78D0",variableType:-4}
 */
var rowTemplate = [];
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"ABBD2F89-2CD9-45EC-8F42-9A1FDD20C2E0"}
 */
var saveNotesInto = "";
/**
 * 
 *
 * @properties={typeid:35,uuid:"90DB296A-93EB-4CBF-A1E4-6923B729D196",variableType:-4}
 */
var saveFinishDescrip = false;
/**
 * 
 *
 * @properties={typeid:35,uuid:"9EA47734-AB96-4928-80C9-BA3799F298E9",variableType:-4}
 */
var savePhasePcColor = false;
/**
 * 
 *
 * @properties={typeid:35,uuid:"3BBB2BCB-6B37-4664-9599-32DEDEAA2C9A",variableType:-4}
 */
var notesContainCamber = false;
/**
 * @type {String}
 * Entry in idfiles for original employee that imported the record.
 * 
 *
 * @properties={typeid:35,uuid:"3EC88D18-5B61-4BA6-A8C3-AF1423AE8132"}
 */
var employeeNumber = "";
/**
 * @type {String}
 * For selecting customerNumber if customer is selected
 * 
 *
 * @properties={typeid:35,uuid:"F258D9BC-4E6B-4C8B-9FCF-CB52283AA493"}
 */
var customerNumber = "";
/**
 * @type {String}
 * Prefix for job number that is prepended for Job Name.
 * 
 *
 * @properties={typeid:35,uuid:"7EA30B4F-9CA2-4A73-A641-4F39A3805588"}
 */
var drawPrfx = "";
/** 
 * @type {String}
 * Suffix for job number that is appended for Job Name.
 * 
 *
 * @properties={typeid:35,uuid:"E7E023B0-0B19-4173-B22A-A3C517EA57AC"}
 */
var drawSufx = "";
/**
 * 
 * @type {JSFoundSet}
 *
 * @properties={typeid:35,uuid:"4E109479-55F9-4CEB-A0FE-89ED31445C64",variableType:-4}
 */
var kissFS = null;
/**
 * Initial processing of Import KISS file to a visual representation of the Foundset
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"7C1B0AB5-E028-4496-BBCF-D40246D7AA8A"}
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
 * 
 *
 * @properties={typeid:24,uuid:"88FA40A6-836B-4237-9577-E1A1CE46DCA2"}
 */
function recomputeLabelLimits(){
	while (recomputeLabelArray.length > 0){
		setBarcodeLimits(recomputeLabelArray.pop());
	}
}
/**
 * Save detail row into label selections table
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"4F05B9E7-0ABD-48CB-B6CD-B3F11A9C387E"}
 */
function saveDetailRow(){
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
}
/**
 * @param lineArray
 *
 * 
 */
/**
 * Populate the table for the Import KISS file with piecemark data rows
 * by Steel Shape
 * 
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */

/**
 * @AllowToRunInFind
 * Define the dataset column types for the Import KISS file retention summary
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"46590943-FB24-4793-B960-0BF62A0DB319"}
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
 * 
 *
 * @properties={typeid:24,uuid:"5C4A354F-2CF5-4A0F-84E8-8CBEC619347E"}
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
		return forms.kiss_option_import.verifyImportQuants(last,current,event);\
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"7F697AF3-8A20-4F3A-947A-FAE46C1BB3E7"}
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
 * 
 *
 * @properties={typeid:24,uuid:"B396E621-67FF-4416-9EA7-3B648F3EE3C2"}
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
 * 
 *
 * @properties={typeid:24,uuid:"B12D80AD-0B6A-4DE1-A352-01D0E51D7FC9"}
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
 * 
 *
 * @properties={typeid:24,uuid:"6449C3B5-9A73-4B7A-A80F-4F560FCFFCAD"}
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
 * 
 *
 * @properties={typeid:24,uuid:"EB7C62A9-168B-459B-AE39-64EB6ACDC7BD"}
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
 * 
 *
 * @properties={typeid:24,uuid:"9DF0849F-FF10-48D6-8E8F-9407943D2126"}
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
 * 
 *
 * @properties={typeid:24,uuid:"327BC51F-D098-454A-B987-774A0B312BE6"}
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
 * 
 *
 * @properties={typeid:24,uuid:"44FBFE92-BEA7-4A03-9CA1-0A0C7E805C2A"}
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
 * 
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"EABC31CC-2707-4B47-8647-FA304C23B3FF"}
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
 * 
 *
 * @properties={typeid:24,uuid:"16676416-2433-4C62-9750-7CF16B58C0AA"}
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
 * 
 *
 * @properties={typeid:24,uuid:"6870ED79-3AEE-4EB0-B49B-6CBE1CB88860"}
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
 * 
 *
 * @properties={typeid:24,uuid:"D5A59686-B3C5-4386-90E0-DA3B428144F9"}
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
 * 
 *
 * @properties={typeid:24,uuid:"09FBE9BC-5FB7-459E-ACDF-3D598F11CAA0"}
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"58D530EA-4EE9-41FA-A2C7-9E6685E01586"}
 */
function applyImportPreferences(){
	scopes.jobs.warningsMessage('Applying import preferences to all rows.',true);
	//scopes.jobs.warningsYes();
	//scopes.jobs.warningsMessage('Apply import preferences.');
	elements.btn_Apply.enabled = false;
	elements.btn_Import.enabled = false;
	elements.btn_Import.bgcolor = '#f0f0f0';
	//application.updateUI();
	//application.output('color '+elements.btn_Import.bgcolor);
	var appendToData2 = importOption.search('Append') != -1;
	applyResetExclusions();
	applyShapeExcludes(transitionFS,transitionFSsink);
	applyShapeSummary(transitionFS,transitionFSsumm);
	applySheetUpdatesRemove(transitionFS);
	// tossMinors keep weights
	var minors = i18n.getI18NMessage('sts.txt.minors.kept');
	if (keepMinors == 0){
		minors = i18n.getI18NMessage('sts.txt.minors.discarded');
	}
	errorMessage = i18n.getI18NMessage('sts.txt.exclude.summary.selections.set')+' '+minors;
	importRecordCount = transitionFS.getMaxRowIndex();
	scopes.jobs.idCreationCount = 0;// reset bc count to be created
	for (var index = 1;index <= importRecordCount;index++){
		setBarcodeLimits(index);
		transitionFS.rowIndex = index;
		var nums = scopes.jobs.dbRecCounts(transitionFS);
		scopes.jobs.idCreationCount = scopes.jobs.idCreationCount*1 + nums.bcAdd;// update bc count for import
	}
	scopes.jobs.warningsMessage('Barcodes to be created, '+scopes.jobs.idCreationCount+'.',true);
	scopes.jobs.importRecordsCheck();
	forms.kiss_option_import.impDirty = false;
	if (importOption.search('Sheet') != -1){
		if (sheetsFS.getMaxRowIndex() == 0){
			//scopes.jobs.warningsMessage('Begin load existing DB records.');
			if (application.isInDeveloper()){application.output('inside loadCurrentJobsRecords');}
			scopes.jobs.loadCurrentJobsRecords();
		}
		applySheetUpdates(sheetsFS,transitionFS);//add piecemarks from database not in the import file
	}
	//scopes.jobs.warningsX();
	elements.btn_Apply.enabled = true;
	//if (importRouting != ""){
		elements.btn_Import.bgcolor = 'green';
		elements.btn_Import.enabled = true;
	//}
	scopes.jobs.warningsMessage('Finished applying import prefs.',true);
	scopes.jobs.warningsX();
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F592107F-5AC7-406D-9D79-7D167A089209"}
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
 * 
 *
 * @properties={typeid:24,uuid:"9D7E9129-1D60-4F4B-84CB-00816FB54930"}
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
 * 
 *
 * @properties={typeid:24,uuid:"A20AE95A-3988-4EDC-9364-E45C6939665C"}
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
 * 
 *
 * @properties={typeid:24,uuid:"5730B8A4-36C1-4865-8C24-5A935555CBE0"}
 */
function onDataChange1(oldValue, newValue, event) {
	application.output('new routeing id'+newValue+' value '+importRouting);
	return true
}
/**
 * 
 */
/**
 * @param last
 * @param current
 * @param {JSEvent} event
 *
 * 
 *
 * @properties={typeid:24,uuid:"53E4702C-3EE3-4533-BB98-7CBF7F99DA78"}
 */
function verifyImportQuants(last,current,event){
	/** @type {JSRecord<{sheet_number:String,parent_piecemark:String,sequence_number:Number,finish:String,grade:String,material:String,piecemark:String,ext_wt_qty:Number,total_label_qty:Number,last_bc_qty:Number,set_bc_qty:Number,item_weight:Number,item_quantity:Number,sequence_quantity:Number}>} */
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
}