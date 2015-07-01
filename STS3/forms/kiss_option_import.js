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
var jobImportExc = "Exclude ";
/**
 * @type {String}
 * List of selected Steel Shapes that are to be summarized as single records from Import KISS file
 * @properties={typeid:35,uuid:"9244E97D-9A20-4463-8B2A-1D6AD7811517"}
 */
var jobImportSum = "Summary ";
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
 * @properties={typeid:35,uuid:"505C5557-00D6-4920-851A-193B9A8152C2",variableType:-4}
 */
var exitSequence = false;
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
	excludeFS = null; kissDataSheets = []; kissDatasink = null; kissDataSumm = null; kissExcludes = null;
	transitionFS = null; transitionFSsink = null; transitionFSsumm = null;
	var job = scopes.jobs.importJob;
	/**var headerLine = [];
	for (var index=0;index<40;index++){
		if (scopes.jobs.importResults.results[index][0] == "H"){
			headerLine = scopes.jobs.importResults.results[index];
			break;
		}
	}*/
	jobNumber = job.jobNumber;
	jobName = job.name;
	jobDate = job.date;
	jobMetric = job.metricFlag;
	var customerArray = [];
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	if (foundset.find()){
		job_number = scopes.jobs.importJob.jobNumber;
		customer_id = scopes.jobs.importJob.customerId;
		tenant_uuid = globals.session.tenant_uuid;
		/**index = jobNums.indexOf(jobNumber);
		customer_id = custIds[index];*/
		var count = foundset.search();
		foundset.setSelectedIndex(1);
		scopes.jobs.jobIDs.push(job_id);
	}
	elements.importButt.enabled = false;
	elements.applyButt.enabled = true;
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
	/** @type {JSFoundSet<db:/stsservoy/employee>} */
	var empFS = databaseManager.getFoundSet('stsservoy','employee');
	if (empFS.find()){
		empFS.tenant_uuid = globals.secCurrentTenantID;
		empFS.delete_flag = null;
		var empCount = empFS.search();
		if (empCount > 0){
			for (var index = 1;index <= empCount;index++){
				var rec = empFS.getRecord(index);
				empArray.push(rec.employee_number);
				empArrayID.push(rec.employee_id);
			}
		}
	}
	application.setValueListItems('stsvl_employee',empArray);
	employeeNumber = globals.session.loginUserNum;
	application.output('employee number '+employeeNumber);
	var jobRoutes = [];
	var jobRouteIds = [];
	/** @type {JSFoundSet<db:/stsservoy/routings>} */
	var routes = databaseManager.getFoundSet('stsservoy','routings');
	if (routes.find()){
		routes.tenant_uuid = globals.secCurrentTenantID;
		routes.delete_flag = null;
		var routCount = routes.search();
		if (routCount > 0){
			for (index = 1;index <= routCount;index++){
				rec = routes.getRecord(index);
				jobRoutes.push(rec.route_code);
				jobRouteIds.push(rec.routing_id);
			}
		}
	}
	application.setValueListItems('stsvl_route_code_id',jobRoutes,jobRouteIds);
	var window = controller.getWindow();
	var height = window.getHeight();
	window.setLocation(0, 0);
	window.setSize(application.getScreenWidth(),height);
	scopes.jobs.importLabelCounts = [];
	importOption = null;
	elements.importButt.enabled = false;
	keepMinors = scopes.prefs.lKeepMinorPcMarks;
	//index;
	var custRec;
	controller.enabled = true;
	headerKissNames['item_quantity']='Total PcMarks Import Qty';
	headerKissNames['sequence_quantity']='Import Qty';
	headerKissNames['set_bc_qty']='Marks Full Label';
	headerKissNames['total_label_qty']='Per Label Marks';
	headerKissNames['last_bc_qty']='Remaining';
	headerKissNames['barcode_qty']='Labels Needed';
	headerKissNames['ext_wt_qty']='Label Weight';
	headerKissNames['sheet_number']='Sheet';
	headerKissNames['piecemark']='Piecemark';
	defineExclDataset();
	loadExclSumms();
	var success = history.removeForm('kiss_excludes_lst');
	var success2 = solutionModel.removeForm('kiss_excludes_lst');
	success = history.removeForm('kiss_barcode_request');
	success2 = solutionModel.removeForm('kiss_barcode_request');
	importTempTable();
	if (keepMinors == 0) {
		elements.keep_minors.enabled = false;
		applyRemoveMinors(transitionFS);
	} else {
		elements.keep_minors.enabled = true;
	}
	importOption = "Use Sheet Number Matching";
	importRouting = "";
	scopes.jobs.tablePrefsLoad('kiss_option_import');
	//handle excludes by shape and summaries by piecemark
	applyImportPreferences();

}
/**
 * @properties={typeid:24,uuid:"C010A107-2370-481A-BD1F-99F412CDD06B"}
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
 * @properties={typeid:24,uuid:"B0F683D0-6394-42E6-94C2-CDCA7BF13623"}
 * @AllowToRunInFind
 */
function loadExclSumms() {
	jobImportExc="";
	jobImportSum="";
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var prefsFS = databaseManager.getFoundSet('stsservoy','preferences2');
	var formFS = forms.kiss_excludes_lst.foundset;
	formFS.loadAllRecords();
	var fsSize = formFS.getSize();
	for (var index = 1;index <= fsSize;index++){
		var rec = formFS.getRecord(index);
		if (prefsFS.find()) {
			prefsFS.user_id = -1;
			prefsFS.form_name = controller.getName();
			prefsFS.field_name = 'excludeArray';
			prefsFS.value_description = rec.shape;
			prefsFS.tenant_uuid = globals.secCurrentTenantID;
			if (prefsFS.search()) {
				var prefRec = prefsFS.getRecord(1);
				var newValue = prefRec.field_value.split(",");
				rec.exclude = newValue[0];
				if (rec.exclude == 1){jobImportExc+=" "+rec.shape+" "}
				rec.summarize = newValue[1];
				if (rec.summarize == 1){jobImportSum+=" "+rec.shape+" "}
			}
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
	//var excludedArray = [];
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var prefsFS = databaseManager.getFoundSet('stsservoy','preferences2');
	//for (var joeI=0;joeI<columnNames.length;joeI++){
	//	var columnName = transitionFS.getColumnName(joeI+1);
	//	var cnIndex = fieldOrderTempTable[columnName];
	//	var gotColumn = transitionFS.getColumnName(cnIndex+1);
	//	var gotType = transitionFS.getColumnType(cnIndex+1);
	//	//application.output("index "+joeI+" table column "+columnName+" columnNames index "+cnIndex+" columnName by index "+gotColumn+" type "+gotType);
	//}
	var formFS = forms.kiss_excludes_lst.foundset;
	for (var index = 1;index <= formFS.getSize();index++){
		var rec = formFS.getRecord(index);
		var newValue = rec.exclude+","+rec.summarize;
		if (prefsFS.find()) {
			prefsFS.user_id = -1;
			prefsFS.form_name = controller.getName();
			prefsFS.field_name = 'excludeArray';
			prefsFS.value_description = rec.shape;
			var index2 = prefsFS.search();
			if (index2 > 0) {
				if (prefsFS.field_value != newValue){
					prefsFS.field_value = newValue;
					databaseManager.saveData(prefsFS);
				}
			} else {
				var newDex = prefsFS.newRecord();
				var newRec = prefsFS.getRecord(newDex);
				newRec.tenant_uuid = globals.secCurrentTenantID;
				newRec.user_id = -1;
				newRec.form_name = controller.getName();
				newRec.field_name = 'excludeArray';
				newRec.value_description = rec.shape;
				newRec.field_value = newValue;
				databaseManager.saveData(newRec);
			}
		}
	}
	errorMessage = 'Exclude'+jobImportExc+'and Summary'+jobImportSum+'selections saved.';
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
	var results = scopes.jobs.importResults.results;
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
 * @properties={typeid:24,uuid:"F1E8F18E-430A-4F2F-BDE5-AD466B64DAD1"}
 */
function onHide(event) {
	//elements.tabless.removeAllTabs();
	//var success = history.removeForm('kiss_barcode_request');
	//if (success){
	//	var success2 = solutionModel.removeForm('kiss_barcode_request');
	//}
	globals.setWindowClosed("");
	history.removeForm('kiss_excludes_lst');
	solutionModel.removeForm('kiss_excludes_lst');
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
 * Initial processing of Import KISS file to a visual representation of the Foundset
 * @properties={typeid:24,uuid:"87B9ADB5-5C35-4208-90CF-6E3003F6B9F1"}
 * @AllowToRunInFind
 */
function importTempTable(){
	defineKISSdataset();
	popKISSTable();
	createKISSForm();
}
/**
 * @properties={typeid:24,uuid:"536E53EC-DBBA-4831-93CA-897FF4253C42"}
 */
function recomputeLabelLimits(){
	var length = recomputeLabelArray.length;
	for (var index = 0;index < length;index++){
		setBarcodeLimits(recomputeLabelArray[index]);
	}
}
/**
 * Save detail row into label selections table
 * @properties={typeid:24,uuid:"66D84854-9E39-42E3-83A6-7F4AF0005288"}
 * @SuppressWarnings(wrongparameters)
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
		if (pMarkStringSeq in pMarks) {
			application.output('we get here in these iterations, or is this is never experienced');
			// this is old when there were dupes in the data due to sequence.  leave as error check.
			var row = pMarks[pMarkStringSeq];
			transitionFS.rowIndex = row;
			var col = fieldOrderTempTable['item_quantity'];//index into new row array,zero-based
			//var old = transitionFS.getValue(row, col+1);
			var old = transitionFS.item_quantity;
			var add = newRow[col];
			/**transitionFS.setValue(row, col+1, old * 1 + add * 1);
			transitionFS.setValue(row, fieldOrderTempTable['parent_piecemark']+1, ""); // no applicable parent piecemark on minor aggregration
			transitionFS.setValue(row, fieldOrderTempTable['sheet_number']+1, ""); // no applicable parent piecemark on minor aggregration
			transitionFS.setValue(row, fieldOrderTempTable['sequence_number']+1,"");
			transitionFS.setValue(row, fieldOrderTempTable['sequence_quantity']+1,"");*/
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
			setbarcodeQuantity(latestIndex);
			//if (!(pMarkStringSeq in pMarks)) {
			pMarks[pMarkStringSeq] = latestIndex;
			if (pMark.cMark.toLowerCase() == pMark.cParent.toLowerCase()){
				parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq] = latestIndex;//keep location of parent piecemark for adding weights and associating minors
				// do the same thing, tracking the last parent using form variable
			} else { //minor mark encountered
				//add weight to parent mark with sequence
				//okay to set row index into transitionFS since this is the last call otherwise, restore it
				if (parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq]){
					var parentW = parentMarkIndex[pMark.cParent+"_"+sequenceArr[index].seq]; //hold and check for seq
					transitionFS.rowIndex = parentW;
					var subAssemblyCount = Math.floor(newRow[fieldOrderTempTable['item_quantity']]/transitionFS.item_quantity);
					var addWeight = newRow[fieldOrderTempTable['item_weight']];
					//var addMult = newRow[fieldOrderTempTable['sequence_quantity']];
					//if (addMult == ""){addMult = newRow[fieldOrderTempTable['item_quantity']];}
					//application.output('    '+pMark.cParent+"_"+sequenceArr[index].seq+'add '+subAssemblyCount+' subs at'+addWeight+' = '+addWeight*newSeqCount+' to '+transitionFS.item_weight);
					transitionFS.item_weight = transitionFS.item_weight*1+addWeight*subAssemblyCount;
					if (recomputeLabelArray.indexOf(parentW) == -1){recomputeLabelArray.push(parentW)}//save parent for recomputer of label limits
					//application.output('labels '+recomputeLabelArray);
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
 * TODO generated, please specify type and doc for the params
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
function popKISSTable() {
	recomputeLabelArray = [];
	var lastParent = 0;
	parentMarkIndex = [];
	pMarkString = "";
	pMarks = [];
	var results = scopes.jobs.importResults.results;
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
	for (var index = 0;index < lengthResults;index++){
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
			saveDetailRow();
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
			var skip = lineType == "S"; //Sequence line handled out-of-order
			if (!skip) {
				checkValue = newRow[fieldOrderTempTable[mappingField]];
			}
			if (mappingConcatOrder != 1){
				lineFieldValue = checkValue+" "+lineFieldValue;
				checkValue = null;
			}
			if (checkValue == null){
				newRow[fieldOrderTempTable[mappingField]] = lineFieldValue;
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
			}
		}
	}
	saveDetailRow();
	recomputeLabelLimits();
	importRecordCount = transitionFS.getMaxRowIndex();
	kissDatasource = transitionFS.createDataSource('kissImportManage',tempArray);
	kissDatasink = transitionFSsink.createDataSource('kissImportSwap',tempArray);
	kissDataSumm = transitionFSsumm.createDataSource('kissImportSumm',tempArray);
	kissDataSheets = sheetsFS.createDataSource('kissSheets',tempArray);
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
	columnNames = ['select_hidebool','summ_hidetext','set_bc_qty','last_bc_qty','barcode_qty','total_label_qty','ext_wt_qty','import_status','action'];
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
	hides = new RegExp('hide');
	booleans = new RegExp('(exclude|delete_similar|bool)');
	numbers = new RegExp('(length|weight)');
	integers = new RegExp('(num|qty|quan)');
	var addSuccess = false;
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
		if (globals.firstTimeKISS == 1){
			tempArray.push(JSColumn.TEXT);
		} else if (columnNames[index].search(booleans) != -1){
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
	var checkForm = solutionModel.newForm('kiss_barcode_request',kissDatasource,'sts_one',false,500,tempArray.length*80+10);
	/** 
	 * ##f3f5f7 is grey, #daa520 pumpkin, 
	 * 			((rec.sequence_quantity>1)||(rec.item_quantity>1))
	 * 				if (!rec.select_hidebool){rend.bgcolor="#daa520"}else{rend.bgcolor="yellow"}
	 * 		if (changedQuant.indexOf(last) == -1){changedQuant.push(last)}
	 */
	checkForm.onRender = checkForm.newMethod('\
	function onRender(event) {\
		var stat=forms.kiss_option_import.jobImportExc+forms.kiss_option_import.jobImportSum;\
		var rec=event.getRecord();\
		var rend=event.getRenderable();\
		var hidebool=rec&&rec.select_hidebool==1;\
		var discard=rec && rec.material && (stat.search(" "+rec.material.split(" ")[0]+" ") != -1);\
		var wght=rec && (scopes.prefs.wtPrompt*1 > 0)&&(rec.item_weight*1 > 0)&&(rec.item_weight*1 < scopes.prefs.wtPrompt*1)&&(rec.item_quantity*1 > 1*1);\
		if (rec){\
			if (rec.sequence_quantity != "") {var quant = rec.sequence_quantity} else {quant = rec.item_quantity}\
		}\
		if (!discard && (rend.bgcolor=="#ff0000")){rend.bgcolor="#f3f5f7"}\
		if (quant < 2){rend.enabled=false;}\
		if (rend.getName()=="action"){rend.enabled=true}\
		if (discard){rend.bgcolor="cyan"}\
		if (rec&&rec.last_bc_qty&& (rend.getName()=="last_bc_qty")&&(rec.last_bc_qty<0)){rend.bgcolor="red"}\
		if (rec && rend.getName()=="barcode_qty"){\
			var itemChng = rec.barcode_qty*1!=1 && quant*1!=1;\
			if (quant*1!= 1 && quant*1==rec.barcode_qty*1) {rend.bgcolor="#daa520";itemChng=false;}\
			if (quant*1>1 && rec.barcode_qty*1==1) {rend.bgcolor="#daa520";itemChng=false}\
			if (quant*1 <= scopes.prefs.qtyPrompt*1 && quant*1!=rec.barcode_qty*1){itemChng=true}\
			if (itemChng){rend.bgcolor="yellow"}\
		}\
		if (rec && rec.select_hidebool == 1&&rend.getName()!="action"){rend.enabled=false}\
		if (hidebool){rend.bgcolor="yellow"}\
	}');	
	var code1 = 'function mySortFunction(){\
		forms.kiss_option_import.sortIndex(arguments[0]);\
		if (globals.sortType){\
			forms.kiss_option_import.transitionFS.sort(globals.numSort);\
		}else{\
			forms.kiss_option_import.transitionFS.sort(globals.alphaSort);\
	}}';
	checkForm.newMethod(code1);	sortIndex('item_quantity');	globals.sortColumn *= -1;
	transitionFS.sort(globals.numSort);
	checkForm.onSortCmd = checkForm.getMethod('mySortFunction');
	var code = 'function onRecordSelection(event) {\
		var index = controller.getSelectedIndex();}\
	';
	checkForm.onRecordSelection = checkForm.newMethod(code);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	code = 'function onQtyVerify(last,current,event) {\
		if (current*1<1||Math.floor(current)!=current){\
		forms.kiss_option_import.errorMessage = "Label Quantity must be integer, and less than or equal to number of items. <Esc> to reset.";\
		return false;\
		}\
		var quant = 0;\
		if (sequence_quantity && current*1>sequence_quantity){return false;} else if (item_quantity && current*1>item_quantity*1){return false;}\
		if (sequence_quantity&&sequence_quantity != ""){quant = sequence_quantity} else {quant = item_quantity}\
		var bcNums = scopes.jobs.createBCnums(current,quant,item_weight);\
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
	}';
	checkForm.newMethod(code);
	var last = ""; 
	var offset = 0;
	for (var index = 0;index < columnNames.length;index++){
	 	last = checkForm.newLabel(columnNames[index],offset,0,60,20)
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	last.labelFor=columnNames[index];
	 	//last.name=columnNames[index]+'_label';
	 	last.toolTipText = last.labelFor;
	 	var altColumn = headerKissNames[columnNames[index]];
	 	if (headerKissNames[columnNames[index]]) {
	 		last.text = altColumn; 
	 	}
	 	offset += 80;
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	offset = 0;
	for (index = 0;index < columnNames.length;index++){
		if (columnNames[index].search(hides) != -1){
			last = checkForm.newField(columnNames[index],JSField.TEXT_FIELD,offset,20,0,20);//joejoewas 1
		} else if (columnNames[index].search(booleans) != -1){
			last = checkForm.newField(columnNames[index],JSField.CHECKS,offset,20,60,20);
		} else if (columnNames[index].search('action') != -1){
			last = checkForm.newField(columnNames[index],JSField.COMBOBOX,offset,20,60,20);
			last.valuelist = solutionModel.getValueList('stsvl_import_actions');
		} else if (columnNames[index]){
			last = checkForm.newField(columnNames[index],JSField.TEXT_FIELD,offset,20,60,20);
			if (columnNames[index].search('qty') != -1){
				//last.format = '#';
			}
		} else {
			continue
		}
	 	last.tabSeq = -2;
		if (columnNames[index].search('barcode_qty') != -1){
			last.onDataChange = checkForm.getMethod('onQtyVerify');
			last.tabSeq = 0;
			last.selectOnEnter = true;
		}
		if (columnNames[index].search('action') != -1){
			//last.onDataChange = checkForm.getMethod('onQtyVerify');
			last.tabSeq = 1;
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
 * TODO generated, please specify type and doc for the params
 * @param row
 * @param sourceDb
 *
 * @properties={typeid:24,uuid:"69802EB8-BCF2-4750-8C28-C39AD3EB4832"}
 */
function deleteRow(row,sourceDb){
	var rowArray = sourceDb.getRowAsArray(row);
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
	var descrip = fieldOrderTempTable['material']+1;
	var srcLength = sourceDb.getMaxRowIndex();	
	var i1 = 0;
	var shape;
	var excList = forms.kiss_option_import.jobImportExc;
	var sumList = "";
	var major = fieldOrderTempTable['parent_piecemark']+1;
	var minor = fieldOrderTempTable['piecemark']+1;
	for (i1 = srcLength; i1 > 0; i1--) {
		//if (sourceDb.getValue(i1,fieldOrderTempTable['select_hidebool']+1) == 1) {continue}
		errorMessage = "Exclude record "+i1+" processed.";
		var majorPm = sourceDb.getValue(i1,major);
		var minorPm = sourceDb.getValue(i1,minor);
		if (!majorPm){continue}
		var minorRecord = (keepMinors == 0) && (majorPm.toLowerCase() != minorPm.toLowerCase());
		var material = sourceDb.getValue(i1, descrip);
		if (!material){continue}
		shape = material.split(" ")[0];
		shape = " " + shape + " ";
		if (sourceDb.getValue(i1,minor) == "" && sourceDb.getValue(i1,major) == ""){  //remove summaries, excludes overrides
			sourceDb.removeRow(i1);
		}
		if (((excList.search(shape) != -1) || (sumList.search(shape) != -1)) || minorRecord) {
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
listDataset(sheetsDb);
	var sheetLength = sheetsDb.getMaxRowIndex();
	for (var index = sheetLength;index > 0;index--){
		moveRow(index,sheetsDb,importDb);
	}
	errorMessage = 'Adding existing records to import review table.';
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
 * TODO generated, please specify type and doc for the params
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
	errorMessage = "Removing summary records.";
	var majIdex = fieldOrderTempTable['parent_piecemark']+1;
	var minIdex = fieldOrderTempTable['piecemark']+1;
	var selectIdex = fieldOrderTempTable['select_hidebool']+1;
	var length = transitionFS.getMaxRowIndex()
	for (var i1=length;i1>0;i1--){
		transitionFS.rowIndex = i1+1;
		if (transitionFS.getValue(i1,majIdex)=="" && transitionFS.getValue(i1,minIdex)==""){
			transitionFS.removeRow(i1);
			errorMessage = "Removing "+i1+" summary records.";
		}
		if (transitionFS.getValue(i1,selectIdex)==1){
			transitionFS.removeRow(i1);
		}
	}
	length = transitionFSsink.getMaxRowIndex();
	errorMessage = "Restoring "+length+" excluded records.";
	for (i1=length;i1>0;i1--){
		moveRow(i1,transitionFSsink,transitionFS);
	}
	length = transitionFSsumm.getMaxRowIndex();
	errorMessage = "Restoring "+length+" summaried records.";
	for (i1=length;i1>0;i1--){
		moveRow(i1,transitionFSsumm,transitionFS);
	}
	errorMessage = "Restore complete.";
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
	// array of indices for summary records by 'material and length'
	var tempTotal=0;
	var summedArray = [];
	var summedRemoval = [];
	var srcLength = transitionFS.getMaxRowIndex();	
	var dstLength = destDb.getMaxRowIndex();
	var i1 = 0;
	var zeroFields = [];
	var zeroNames = ['piecemark','parent_piecemark','sequence_qty','sequence_number','sheet_number','reference_drawing','route_code','sequence_quantity'];
	for (i1=0;i1<zeroNames.length;i1++){zeroFields.push(fieldOrderTempTable[zeroNames[i1]]);}
	var descrip = "";
	var length = 0;
	var itemCount = 0;
	var sumList = forms.kiss_option_import.jobImportSum;
	var excList = forms.kiss_option_import.jobImportExc;
	var descripI = fieldOrderTempTable['material']+1;
	var lengthI = fieldOrderTempTable['item_length']+1;
	var gradeI = fieldOrderTempTable['grade']+1
	var countI = fieldOrderTempTable['item_quantity']+1;
	//var piecemarkI = fieldOrderTempTable['piecemark']+1;
	var newRow = "";
	var summaryItem = "";
	var shape;
	for (i1 = srcLength; i1 > 0; i1--) {
		forms.kiss_barcode_request.controller.recordIndex = i1;
		transitionFS.rowIndex = i1;
		errorMessage = "Processing "+i1+" summaries.";
		shape = transitionFS.getValue(i1, descripI).split(" ")[0];
		shape = " " + shape + " ";
		if (excList.search(shape) != -1){continue} // shape already discarded
		if ((sumList.search(shape) != -1) && shape && (transitionFS.getValue(i1,fieldOrderTempTable['piecemark']+1)!="")) {
			//var piecemark = transitionFS.getValue(i1,piecemarkI);
			descrip = transitionFS.getValue(i1,descripI);
			length = transitionFS.getValue(i1,lengthI);
			var grade = transitionFS.getValue(i1,gradeI);
			itemCount = transitionFS.getValue(i1,fieldOrderTempTable['sequence_quantity']+1);
			if (!itemCount || itemCount == ""){itemCount = transitionFS.getValue(i1,fieldOrderTempTable['item_quantity']+1);}
			summaryItem = descrip+grade+length;
			if (summaryItem in summedArray){
				forms.kiss_barcode_request.controller.recordIndex = summedArray[summaryItem+"idx"];
				var oldQuant =  forms.kiss_barcode_request.item_quantity;//transitionFS.getValue(i1,fieldOrderTempTable['item_quantity']+1);
				var newQuant = itemCount*1+oldQuant*1;
				forms.kiss_barcode_request.item_quantity = newQuant;
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
 * TODO generated, please specify type and doc for the params
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
 * TODO generated, please specify type and doc for the params
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
	var itemsCount = transitionFS.sequence_quantity;
	if (!itemsCount || itemsCount == ""){itemsCount = transitionFS.item_quantity}
	var bcNums = scopes.jobs.createBCnums(currentLabelCount,itemsCount,transitionFS.item_weight);
	var itemsPerLabel = bcNums.per;
	var labelsFull = bcNums.full; 
	var lastLabelCount = bcNums.last;
	var labelWeight = bcNums.totwt;
	transitionFS.set_bc_qty = labelsFull;
	transitionFS.last_bc_qty = lastLabelCount;
	transitionFS.total_label_qty = itemsPerLabel;
	transitionFS.ext_wt_qty = labelWeight;
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
 * TODO generated, please specify type and doc for the params
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
function applyImportPreferences(){
	//scopes.jobs.warningsYes();
	//scopes.jobs.warningsMessage('Apply import preferences.');
	elements.applyButt.enabled = false;
	elements.importButt.enabled = false;
	elements.importButt.bgcolor = '#f0f0f0';
	//application.updateUI();
	//application.output('color '+elements.importButt.bgcolor);
	var appendToData2 = importOption.search('Append') != -1;
	applyResetExclusions();
	applyShapeExcludes(transitionFS,transitionFSsink);
	applyShapeSummary(transitionFS,transitionFSsumm);
	applySheetUpdatesRemove(transitionFS);
	// tossMinors keep weights
	var minors = "Minors kept."
	if (keepMinors == 0){
		minors = "Minors discarded."
	}
	errorMessage = 'Exclude and summary selections set.'+minors;
	importRecordCount = transitionFS.getMaxRowIndex();
	//scopes.jobs.warningsMessage('Import records check.');
	scopes.jobs.importRecordsCheck();
	forms.kiss_option_import.impDirty = false;
	if (importOption.search('Sheet') != -1){
		if (sheetsFS.getMaxRowIndex() == 0){
			//scopes.jobs.warningsMessage('Begin load existing DB records.');
			scopes.jobs.loadCurrentJobsRecords();
		}
		applySheetUpdates(sheetsFS,transitionFS);//add piecemarks from database not in the import file
	}
	//scopes.jobs.warningsX();
	elements.applyButt.enabled = true;
	if (importRouting != ""){
		elements.importButt.bgcolor = 'green';
		elements.importButt.enabled = true;
	}
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
	forms.kiss_option_import.elements.importButt.enabled = false;
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
	
	errorMessage = "See "+filePath+"\\KISS_Excel(Keep|Discard) files.";
}
/**
 * TODO generated, please specify type and doc for the params
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
