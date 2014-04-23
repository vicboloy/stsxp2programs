/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9526AB9B-5AF0-482A-A67B-2B4E220A0310"}
 */
var jobNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0935F2D-9183-47E0-9995-7C8374F491AB"}
 */
var jobName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6C5A4A5-077A-4076-9C78-941486603EA5"}
 */
var jobDate = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D29063B6-B208-4399-A025-16593960C857",variableType:4}
 */
var jobMetric = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35DF3308-6DA3-4572-B33B-37ACF8645AFC"}
 */
var jobImportExc = "Exclude ";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9244E97D-9A20-4463-8B2A-1D6AD7811517"}
 */
var jobImportSum = "Summary ";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18AA1C61-04C9-4D9E-8D74-E64A3352BFCD"}
 */
var importOption = "";
/**
 * @properties={typeid:35,uuid:"A806C29B-6D9F-4FC2-A08A-06B52675CA12",variableType:-4}
 */
var keepMinors = false;
/**
 * Dataset for showing interim data import
 * @properties={typeid:35,uuid:"3A5A2CBA-8872-4BA9-ABC5-2B6C160A42A4",variableType:-4}
 */
var transitionFS = null;
/**
 * @properties={typeid:35,uuid:"FDD56E55-87FB-485C-83EB-40ED25A0DF96",variableType:-4}
 */
var transitionFSsink = null;
/**
 * @properties={typeid:35,uuid:"514CD270-0334-4AA7-9BC0-EDC85CCAEC24",variableType:-4}
 */
var excludeFS = null;
/**
 * @properties={typeid:35,uuid:"AD63DD77-FB8B-4B78-A0CF-C2029595173F",variableType:-4}
 */
var shapesArray = [];
/**
 * @properties={typeid:35,uuid:"2DEB9882-0C7C-467C-9ADC-E1602511F5B8",variableType:-4}
 */
var kissDatasource = null;
/**
 * @properties={typeid:35,uuid:"ABE09C56-DBA3-44EA-80FC-AFC5C56F7B77",variableType:-4}
 */
var kissDatasink = null;
/**
 * @properties={typeid:35,uuid:"5DD151D8-61AE-45D5-BA71-A0CDA8ACD91E",variableType:-4}
 */
var kissExcludes = null;
/**
 * @properties={typeid:35,uuid:"C276BFC2-2A2E-4640-959D-965A01CC0C32",variableType:-4}
 */
var fieldOrderTempTable =[];
/**
 * @properties={typeid:35,uuid:"115FD908-F03A-4CCB-A92A-92CE18793F6F",variableType:-4}
 */
var nonEmptyFields = null;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"281713FB-2C42-46EC-BCAF-4BFD22187C4C"}
 */
function onShow(firstShow, event) {
	var headerLine = [];
	for (var index=0;index<40;index++){
		if (scopes.jobs.importResults.results[index][0] == "H"){
			headerLine = scopes.jobs.importResults.results[index];
			break;
		}
	}
	var jobNumberIndex = scopes.jobs.getFieldDataMapping("mapped_field","jobs.job_number").split(",")[1];
	var jobNameIndex = scopes.jobs.getFieldDataMapping("mapped_field","jobs.job_title").split(",")[1];
	var jobDateIndex = scopes.jobs.getFieldDataMapping("mapped_field","jobs.project_year").split(",")[1];
	var jobMetricIndex = scopes.jobs.getFieldDataMapping("mapped_field","jobs.metric_job").split(",")[1];
	jobNumber = headerLine[jobNumberIndex];
	jobName = headerLine[jobNameIndex];
	jobDate = headerLine[jobDateIndex];
	jobMetric = headerLine[jobMetricIndex] == "F" ? 0 : 1;
	defineExclDataset();
	loadExclSumms();
	var success = history.removeForm('kiss_barcode_request');
	var success2 = solutionModel.removeForm('kiss_barcode_request');
	importTempTable();
	keepMinors = scopes.prefs.lKeepMinorPcMarks;
	if (!scopes.prefs.lKeepMinorPcMarks) {
		elements.keep_minors.enabled = false;
	}
	//handle excludes by shape and summaries by piecemark TODO
}
/**
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
	for (index = 1;index < fsSize;index++){
		rec = formFS.getRecord(index);
		if (prefsFS.find()) {
			prefsFS.user_id = -1;
			prefsFS.form_name = controller.getName();
			prefsFS.field_name = 'excludeArray';
			prefsFS.value_description = rec.shape;
			prefsFS.tenant_id = globals.secCurrentTenantID;
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
 *
 * @properties={typeid:24,uuid:"091EDD49-911A-4129-8FE0-3710D32C2695"}
 */
function saveExclSumms(){
	var excludedArray = [];
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var prefsFS = databaseManager.getFoundSet('stsservoy','preferences2');
	var formFS = forms.kiss_excludes_lst.foundset;
	for (var index = 1;index < formFS.getSize();index++){
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
				newRec.tenant_id = globals.secCurrentTenantID;
				newRec.user_id = -1;
				newRec.form_name = controller.getName();
				newRec.field_name = 'excludeArray';
				newRec.value_description = rec.shape;
				newRec.field_value = newValue;
				databaseManager.saveData(newRec);
			}
		}
	}
}
/**
 * @properties={typeid:24,uuid:"87A05AC6-4582-4971-85DD-1CF7EB523790"}
 */
function defineExclDataset(){
	excludeFS = databaseManager.createEmptyDataSet();
	var item,code;
	var shapes = [];
	var results = scopes.jobs.importResults.results;
	var lineFieldIndex = scopes.jobs.getFieldDataMapping("mapped_field","piecemarks.description").split(",")[1]-1;//TODO fix data field
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
	foundset.sort('shape asc');
	var newMethod;
	item = checkForm.newLabel('Shape',0,0,60,21);
 	item.labelFor='shape'; item.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	item = checkForm.newLabel('Exclude',60,0,60,21);
	item.labelFor='exclude';
	item = checkForm.newLabel('Summarize',120,0,80,21);
	item.labelFor='summarize';
	item = checkForm.newTextField(columns[0],0,21,60,21);
	item.name = 'shape'; item.editable = false; item.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	item = checkForm.newCheck(columns[1],60,21,60,21);
	item.name = 'exclude'; item.editable = true;
	code = 'function onDataChangeExc(oldStr,newStr,even){var shapeX=" "+shape+" ";var excld=forms.kiss_option_import.jobImportExc;if (newStr == 0){excld=excld.replace(shapeX,"");} else {excld+=shapeX;}forms.kiss_option_import.jobImportExc=excld;}';
	newMethod = checkForm.newMethod(code);
	item.onDataChange=newMethod;
	item = checkForm.newCheck(columns[2],120,21,80,21);
	item.name = 'summarize'; item.editable = true;
	code = 'function onDataChangeSumm(oldStr,newStr,even){var shapeX=" "+shape+" ";var summs=forms.kiss_option_import.jobImportSum;if (newStr == 0){summs=summs.replace(shapeX,"");} else {summs+=shapeX;}forms.kiss_option_import.jobImportSum=summs;}';
	newMethod = checkForm.newMethod(code);
	item.onDataChange=newMethod;
	elements.tabless1.addTab('kiss_excludes_lst');
}
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F1E8F18E-430A-4F2F-BDE5-AD466B64DAD1"}
 */
function onHide(event) {
	//elements.tabless.removeAllTabs();
	var success = history.removeForm('kiss_barcode_request');
	if (success){
		var success2 = solutionModel.removeForm('kiss_barcode_request');
	}
	globals.setWindowClosed("");
	return true
}
/**
 * @properties={typeid:35,uuid:"56088849-9254-49B5-9ED2-5EC463D041AE",variableType:-4}
 */
var columnNames = [];
/**
 * @properties={typeid:35,uuid:"7826196D-0789-4084-B1EC-5153563973A7",variableType:-4}
 */
var tempArray = [];
/**
 * @properties={typeid:35,uuid:"38A1EB8A-9B74-401D-BB63-B4FADA77D93B",variableType:-4}
 */
var excludeArray = [];
/**
 * @properties={typeid:35,uuid:"DF79111F-B594-4F99-A59E-2F6DB1EA61C7",variableType:-4}
 */
var booleans = null;
/**
 * @properties={typeid:35,uuid:"DBCFEBEF-7A7C-4EDC-911C-C6A9CF666F5D",variableType:-4}
 */
var numbers = null;
/**
 * @properties={typeid:35,uuid:"EF3FB1CE-51D5-48D4-A69D-50BCC50429B3",variableType:-4}
 */
var integers = null;
/**
 * @properties={typeid:35,uuid:"C7CB2518-E2CE-4CB9-A7CA-CCA8C3FBF29C",variableType:-4}
 */
var rowTemplate = [];
/**
 * @properties={typeid:24,uuid:"87B9ADB5-5C35-4208-90CF-6E3003F6B9F1"}
 * @AllowToRunInFind
 */
function importTempTable(){
	defineKISSdataset();
	popKISSTable();
	createKISSForm();
}
/**
 * @properties={typeid:24,uuid:"BCDE77AE-DD61-49B3-9B64-F63C342FC88E"}
 */
function popKISSTable() {
	var totalColumns = tempArray.length;
	// install table data to new table
	var results = scopes.jobs.importResults.results;
	var lengthResults = results.length;
	var lineType = "";
	var lineArray = "";
	var lineFieldValue = "";
	var mappingIndex = "";
	var mappingField = "";
	var mappingConcatOrder = "";
	var detail = false;
	var checkValue = "";
	var skippedFirst = false;
	var newRow = null;
	var sLine = false;
	newRow = rowTemplate.concat();
	for (var index = 0;index < lengthResults;index++){
		lineArray = results[index];
		lineType = lineArray[0];
		if (lineType == "*"){continue}
		if (detail == false){	//skip to detail
			if (lineType == "D"){detail = true;} else {continue}
		}
		if (lineType == "S"){
			if (sLine){
				transitionFS.addRow(newRow); //keep all data and allow overwrite of S data	
			} else {
				sLine = true;
			}
		}
		if (lineType == "D" && skippedFirst){
			transitionFS.addRow(newRow);
			newRow = null;
			newRow = rowTemplate.concat();
			sLine = false;
		} else {
			skippedFirst = true;
		}
		// insert each item into an array of mappedArray length
		for (var index2=1;index2 < lineArray.length;index2++){
			if (lineArray[index2]==""){continue}
			mappingIndex = lineType+","+index2;  //set mapping index into mapping array
			if (scopes.jobs.mappedFormatArray[mappingIndex] == null){continue}  //skip null values
			mappingField = scopes.jobs.mappedFormatArray[mappingIndex].split(".")[1]; //get field from mapping array
			mappingConcatOrder = scopes.jobs.mappedFormatArray[mappingIndex].split(".")[2];
			//if (!(mappingField in nonEmptyFields)) {nonEmptyFields[mappingField]=true;}
			lineFieldValue = lineArray[index2]; //value for array entry
			var mappIndexTemp = fieldOrderTempTable[mappingField];
			checkValue = newRow[fieldOrderTempTable[mappingField]];
			if (mappingConcatOrder != 1){
				lineFieldValue = checkValue+" "+lineFieldValue;
				checkValue = null;
			}
			if ((checkValue == null) || sLine){
				newRow[fieldOrderTempTable[mappingField]] = lineFieldValue;
			}
		}
		//sLine = false;
	}
	transitionFS.addRow(newRow);	//final data row
	kissDatasource = transitionFS.createDataSource('kissImportManage',tempArray);
	kissDatasink = transitionFSsink.createDataSource('kissImportSwap',tempArray);
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6163ECE1-AD73-4C64-84D6-3DD251248BD3"}
 */
function defineKISSdataset() {
	// create foundset with only captured data, so need all of the headers, then fill in the data.
	// modify only specific data
	var index;
	transitionFS = databaseManager.createEmptyDataSet();
	transitionFSsink = databaseManager.createEmptyDataSet();
	var fieldIndex = 0;
	var item;
	fieldOrderTempTable = [];
	columnNames = ['set_bc_qty','last_bc_qty','barcode_qty','total_label_qty'];
	for(index=0;index < columnNames.length;index++){  // insert administrative columns
		transitionFS.addColumn(columnNames[index],fieldIndex+1,JSColumn.TEXT);
		transitionFSsink.addColumn(columnNames[index],fieldIndex+1,JSColumn.TEXT);
		fieldOrderTempTable[columnNames[index]] = ++fieldIndex; // so this is field index to temp table indexed by field_name
	}
	var field;
	tempArray = [];
	rowTemplate = [];
	booleans = new RegExp('(exclude|delete_similar)');
	numbers = new RegExp('(length|weight)');
	integers = new RegExp('(num|qty|quan)');
	var addSuccess = false;
	for (item in scopes.jobs.mappedFormatArray){  // insert columns representing kiss data file fields
		if (!(item in scopes.jobs.usedFields)){continue} // these are fields in the input file that are blank/unused in the scopes.jobs file
		field = scopes.jobs.mappedFormatArray[item];
		if (field == null) continue;
		field = field.split(".")[1];
		if (!(field in fieldOrderTempTable)){
			if (field.search(integers) != -1){
				addSuccess = transitionFS.addColumn(field,fieldIndex+1,JSColumn.INTEGER);
				addSuccess = transitionFSsink.addColumn(field,fieldIndex+1,JSColumn.INTEGER);
			} else if (field.search(numbers) != -1){
				addSuccess = transitionFS.addColumn(field,fieldIndex+1,JSColumn.NUMBER);
				addSuccess = transitionFSsink.addColumn(field,fieldIndex+1,JSColumn.NUMBER);
			} else if (field.search('item_quantity') != -1){
				addSuccess = transitionFS.addColumn(field,fieldIndex+1,JSColumn.INTEGER);
				addSuccess = transitionFSsink.addColumn(field,fieldIndex+1,JSColumn.INTEGER);
			} else {
				addSuccess = transitionFS.addColumn(field,fieldIndex+1,JSColumn.TEXT);
				addSuccess = transitionFSsink.addColumn(field,fieldIndex+1,JSColumn.TEXT);
			}
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
 *
 * @properties={typeid:24,uuid:"FCEE5814-1547-45DA-AF9B-B57C11B69D3C"}
 */
function createKISSForm (){
	// create table in form
	elements.tabless.removeAllTabs();
	var checkForm = solutionModel.newForm('kiss_barcode_request',kissDatasource,'sts_one',false,500,tempArray.length*80+10);
	checkForm.onRender = checkForm.newMethod('function onRender(event) {var stat=forms.kiss_option_import.jobImportExc+forms.kiss_option_import.jobImportSum;var rec=event.getRecord();	var renders=event.getRenderable();if (rec && (rec.item_quantity*1 > scopes.prefs.qtyPrompt*1) && (renders.getName()=="barcode_qty")){renders.bgcolor="#daa520";}if(rec && (stat.search(" "+rec.description.split(" ")[0]+" ") != -1)){renders.bgcolor = "#ff0000";}	if(rec && (stat.search(" "+rec.description.split(" ")[0]+" ") == -1) && (renders.bgcolor=="#ff0000")){renders.bgcolor="#f3f5f7";}}');	
	var code1 = 'function mySortFunction(){forms.kiss_option_import.sortIndex(arguments[0]);if (globals.sortType){forms.kiss_option_import.transitionFS.sort(globals.numSort);}else{forms.kiss_option_import.transitionFS.sort(globals.alphaSort);}}';
	checkForm.newMethod(code1);
	sortIndex('item_quantity');globals.sortColumn *= -1;transitionFS.sort(globals.numSort);
	checkForm.onSortCmd = checkForm.getMethod('mySortFunction');
	var code = 'function onRecordSelection(event) {var index = controller.getSelectedIndex();}';
	checkForm.onRecordSelection = checkForm.newMethod(code);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	code = 'function onQtyVerify(last,current,event) {if (!item_quantity || parseInt(item_quantity) < scopes.prefs.qtyPrompt){barcode_qty="";return true;}if (current*1>item_quantity){return false;}if (current*1<item_quantity*1){set_bc_qty=current;last_bc_qty=utils.numberFormat((item_quantity-Math.floor(item_quantity/current)*current),0);total_label_qty=utils.numberFormat(Math.ceil(item_quantity/current),0);}else{return false}}';
	checkForm.newMethod(code);

	var last = ""; 
	var offset = 0;
	for (index = 0;index < columnNames.length;index++){
	 	last = checkForm.newLabel(columnNames[index],offset,0,60,20)
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	last.labelFor=columnNames[index];
	 	last.name=columnNames[index]+'_label';
	 	last.toolTipText = last.labelFor;
	 	offset += 80;
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
	offset = 0;
	for (index = 0;index < columnNames.length;index++){
		if (columnNames[index].search(booleans) != -1){
		 	last = checkForm.newField(columnNames[index],JSField.CHECKS,offset,20,60,20);
		} else if (columnNames[index]){
			last = checkForm.newField(columnNames[index],JSField.TEXT_FIELD,offset,20,60,20);
			if (columnNames[index].search('qty') != -1){
				last.format = '|#';
			}
		} else {
			continue
		}
		if (columnNames[index].search('barcode_qty') != -1){
			last.onDataChange = checkForm.getMethod('onQtyVerify');
		}
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	last.name=columnNames[index];
	 	offset += 80;
		if (columnNames[index].search('(barcode_qty)') == -1){
			last.editable = false;
		}	
	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;

	elements.tabless.addTab('kiss_barcode_request');
	globals.firstTimeKISS = 0;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param name
 *
 * @properties={typeid:24,uuid:"D8AAF2AE-3D83-4239-8AF1-6C8DC7F36B20"}
 * @AllowToRunInFind
 */
function sortIndex (name){
	var value = globals.sortColumn;
	if (name.search('(num|qty|quantity|length|weight)') != -1 && name.search('sequence_number') == -1) {globals.sortType = true} else {globals.sortType = false}
	var newValue = fieldOrderTempTable[name];
	if (Math.abs(value) == Math.abs(newValue)){newValue = value*-1;}
	globals.sortColumn = newValue;
}
/**
 * TODO generated, please specify type and doc for the params
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
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param sourceDb
 * @param destDb
 * @param type
 *
 * @properties={typeid:24,uuid:"4CB1DF63-FC21-4F9A-8CEB-1A820897013F"}
 */
function applySelections(sourceDb,destDb,type){
	var descrip = fieldOrderTempTable['description']+1;
	var srcLength = sourceDb.getMaxRowIndex();	
	var dstLength = destDb.getMaxRowIndex();
	var i1 = 0;
	var shape;
	excList = forms.kiss_option_import.jobImportExc;
	sumList = forms.kiss_option_import.jobImportSum;
	var major = fieldOrderTempTable['parent_piecemark']+1;
	var minor = fieldOrderTempTable['piecemark']+1;
	//var selectDb = null;
	// (keepMinors)
	switch (type) {
	case 'exclude':
		break;
	case 'summary':
		break;
	}
	for (i1 = srcLength; i1 > 0; i1--) {
		var minorRecord = !keepMinors && (sourceDb.getValue(i1,major).toLowerCase() != sourceDb.getValue(i1,minor).toLowerCase());
		shape = sourceDb.getValue(i1, descrip).split(" ")[0];
		shape = " " + shape + " ";
		if (((excList.search(shape) != -1) || (sumList.search(shape) != -1)) || minorRecord) {
			moveRow(i1, sourceDb, destDb);
		}
	}		
	for (i1 = dstLength; i1 > 0; i1--) {
		var minorRecord = !keepMinors && (destDb.getValue(i1,major).toLowerCase() != destDb.getValue(i1,minor).toLowerCase());
		shape = destDb.getValue(i1, descrip).split(" ")[0];
		shape = " " + shape + " ";
		if (((excList.search(shape) == -1) && (sumList.search(shape) == -1)) && !minorRecord) {
			moveRow(i1, destDb, sourceDb);
		}
	}
	application.output('excl '+excList+' summ '+sumList);
	application.output(type+' keep ' + sourceDb.getMaxRowIndex() + ' toss ' + destDb.getMaxRowIndex());
}
/**
 * TODO generated, please specify type and doc for the params
 * @param sourceDb
 * @param destDb
 * @param type
 *
 * @properties={typeid:24,uuid:"452F2967-093E-48AB-95D5-22E5695F9177"}
 */
function applyMinors(sourceDb,destDb){
	var major = fieldOrderTempTable['parent_piecemark']+1;
	var minor = fieldOrderTempTable['piecemark']+1;
	var selectDb = null;
	if (keepMinors){
		selectDb = destDb;
	} else {
		selectDb = sourceDb;
	}
	var selLength = selectDb.getMaxRowIndex();
	for (i1 = selLength; i1 > 0; i1--) {
		if (selectDb.getValue(i1,major) && (selectDb.getValue(i1,major).toLowerCase() != selectDb.getValue(i1,minor).toLowerCase())) {
			if (keepMinors) {
				moveRow(i1, destDb, sourceDb);
			} else {
				moveRow(i1, sourceDb, destDb);
			}
		}
	}

}
/**
 * @properties={typeid:24,uuid:"9656ACD0-4E9A-4481-9798-27C2981D6AE4"}
 * @AllowToRunInFind
 */
function applyImportPreferences(){
	var mmWeight = 0.0;
	var tossMinors = !scopes.prefs.lKeepMinorPcMarks;

	application.output('START keep '+transitionFS.getMaxRowIndex()+' toss '+transitionFSsink.getMaxRowIndex());
	// discardShapes && summarizeShapes
	applySelections(transitionFS,transitionFSsink,'exclude');
	// tossMinors keep weights
	//applyMinors(transitionFS,transitionFSsink);
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
 */
function onDataChange(oldValue, newValue, event) {
	application.output(oldValue+" "+newValue);
	application.output("options "+importOption)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4E3D7A0-2708-4ECE-8DB0-05BE7D41FB88"}
 */
function onActionExcel(event) {
	var dp   = [];
	//var file = plugins.file.showFileSaveDialog("importKissExcel.xls"); 
	var filePath = scopes.prefs.temppath;
	var file = filePath+"\\KISS_ExcelKeep.xls";
	//application.output(file);
	var fs = forms.kiss_barcode_request.foundset;
	var columns = databaseManager.getTable(fs).getColumnNames();
	for (var i=0;i<columns.length;i++){dp.push(columns[i]);}
	var excelFile = plugins.excelxport.excelExport(fs,dp);
	plugins.file.writeFile(filePath+"\\KISS_ExcelKeep.xls", excelFile);
	
	dp=[];
	var fs = databaseManager.getFoundSet(forms.kiss_option_import.kissDatasink);
	fs.loadAllRecords();
	var columns = databaseManager.getTable(fs).getColumnNames();
	for (var i=0;i<columns.length;i++){dp.push(columns[i]);}
	var excelFile = plugins.excelxport.excelExport(fs,dp);
	plugins.file.writeFile(filePath+"\\KISS_ExcelDiscard.xls", excelFile);
	
}
