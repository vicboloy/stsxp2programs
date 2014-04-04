/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9526AB9B-5AF0-482A-A67B-2B4E220A0310"}
 */
var jobNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18AA1C61-04C9-4D9E-8D74-E64A3352BFCD"}
 */
var importOption = "";
/**
 * @properties={typeid:35,uuid:"3A5A2CBA-8872-4BA9-ABC5-2B6C160A42A4",variableType:-4}
 */
var transitionFS = null;
/**
 * @properties={typeid:35,uuid:"2DEB9882-0C7C-467C-9ADC-E1602511F5B8",variableType:-4}
 */
var kissDatasource = null;
/**
 * @properties={typeid:35,uuid:"C276BFC2-2A2E-4640-959D-965A01CC0C32",variableType:-4}
 */
var fieldOrderTempTable =[];
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
	var success = history.removeForm('kiss_barcode_request');
	var success2 = solutionModel.removeForm('kiss_barcode_request');
	application.output(success+' '+success2+' table remove success');
	importTempTable();
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
	return true
}

/**
 * @properties={typeid:24,uuid:"87B9ADB5-5C35-4208-90CF-6E3003F6B9F1"}
 * @AllowToRunInFind
 */
function importTempTable(){
	// create foundset with only captured data, so need all of the headers, then fill in the data.
	// modify only specific data
	var index;
	transitionFS = databaseManager.createEmptyDataSet();
	var fieldIndex = 0;
	var item;
	fieldOrderTempTable = [];
	var columnNames = ['exclude','delete_similar','begin_sequence','end_sequence','qty_sequence'];
	for(index=0;index < columnNames.length;index++){  // insert administrative columns
		transitionFS.addColumn(columnNames[index],fieldIndex+1,JSColumn.TEXT);
		fieldOrderTempTable[columnNames[index]] = ++fieldIndex; // so this is field index to temp table indexed by field_name
	}
	var field;
	//var done = [];
	var tempArray = [];
	var rowTemplate = [];
	var booleans = new RegExp('(exclude|delete_similar)');
	var numbers = new RegExp('(length|weight|num|qty|quan)');
	var integers = new RegExp('(xxx)');
	var item;
	var addSuccess = false;
	for (item in scopes.jobs.mappedFormatArray){  // insert columns representing kiss data file fields
		field = scopes.jobs.mappedFormatArray[item];
		if (field == null) continue;
		field = field.split(".")[1];
		if (!(field in fieldOrderTempTable)){
			if (field.search(integers) != -1){
				addSuccess = transitionFS.addColumn(field,fieldIndex+1,JSColumn.INTEGER);
			} else if (field.search(numbers) != -1){
				addSuccess = transitionFS.addColumn(field,fieldIndex+1,JSColumn.NUMBER);
			} else if (field.search('item_quantity') != -1){
				addSuccess = transitionFS.addColumn(field,fieldIndex+1,JSColumn.INTEGER);
			} else {
				addSuccess = transitionFS.addColumn(field,fieldIndex+1,JSColumn.TEXT);
			}
			application.output('fields '+fieldIndex+' field add '+field);
			fieldOrderTempTable[field] = fieldIndex++;
			columnNames.push(field);
		}
	}
	for (var i = 0; i < columnNames.length; i++)
	{
		application.output('table column '+i+' name '+columnNames[i]);
		//note the -1, because an array is zero based and dataset is 1 based.
	}
	for (i = 1; i <= transitionFS.getMaxColumnIndex(); i++)
	{
		application.output('column '+i+' name '+transitionFS.getColumnName(i));
		//note the -1, because an array is zero based and dataset is 1 based.
	}
	for (index = 0;index < columnNames.length;index++){  // create base array for datasource creation
		if (globals.firstTimeKISS == 1){
			tempArray.push(JSColumn.TEXT);
		} else if (columnNames[index].search(booleans) != -1){
			tempArray.push(JSColumn.INTEGER);//WAS INTGER
		} else if (columnNames[index].search(numbers) != -1) {
			tempArray.push(JSColumn.NUMBER);//WAS NUMBER
		} else {
			tempArray.push(JSColumn.TEXT);
		}
		rowTemplate.push(null); //keep rowTemplate in sync for clearing rowArray
	}
	var totalColumns = tempArray.length;
	// install table data to new table
	var results = scopes.jobs.importResults.results;
	var lengthResults = results.length;
	var lineType = "";
	var lineArray = "";
	var lineFieldValue = "";
	var mappingIndex = "";
	var mappingField = "";
	var detail = false;
	var checkValue = "";
	var skippedFirst = false;
	var newRow = null;
	newRow = rowTemplate.concat();
	for (index = 0;index < lengthResults;index++){
		lineArray = results[index];
		//if (lineArray[3] == "19B1"){
		//	application.output('test');
		//}
		lineType = lineArray[0];
		if (lineType == "*"){continue}
		if (detail == false){	//skip to detail
			if (lineType == "D"){detail = true;} else {continue}
		}
		if (lineType == "D" && skippedFirst){
			//application.output(newRow);
			//if (newRow[22] == ""){newRow[22] = "0";}
			transitionFS.addRow(newRow);
			newRow = null;
			newRow = rowTemplate.concat();
		} else {
			skippedFirst = true;
		}
		// insert each item into an array of mappedArray length
		for (var index2=1;index2 < lineArray.length;index2++){
			if (lineArray[index2]==""){continue}
			mappingIndex = lineType+","+index2+",0";  //set mapping index into mapping array
			if (scopes.jobs.mappedFormatArray[mappingIndex] == null){continue}  //skip null values
			mappingField = scopes.jobs.mappedFormatArray[mappingIndex].split(".")[1]; //get field from mapping array
			lineFieldValue = lineArray[index2];  //value for array entry			
			var mappIndexTemp = fieldOrderTempTable[mappingField];
			checkValue = newRow[fieldOrderTempTable[mappingField]];
			if (checkValue == null){
				newRow[fieldOrderTempTable[mappingField]] = lineFieldValue;
			}
		}
	}
	transitionFS.addRow(newRow);	//final data row	
	
	
	kissDatasource = transitionFS.createDataSource('kissImportManage',tempArray);
	// create table in form
	history.removeForm('kiss_barcode_request');
	solutionModel.removeForm('kiss_barcode_request');
	elements.tabless.removeAllTabs();
	var checkForm = solutionModel.newForm('kiss_barcode_request',kissDatasource,'sts_one',false,500,totalColumns*80+10);
	checkForm.onRender = checkForm.newMethod('function onRender(event) {var rec=event.getRecord(); if(rec && (rec.exclude || rec.delete_similar)) {event.getRenderable().bgcolor = "red";} }');
	//checkForm.newMethod('function onSubQuantity (event) {var event.')
	var code1 = 'function mySortFunction(){forms.kiss_option_import.sortIndex(arguments[0]);if (globals.sortType){forms.kiss_option_import.transitionFS.sort(globals.numSort);}else{forms.kiss_option_import.transitionFS.sort(globals.alphaSort);}}';
	checkForm.newMethod(code1);
	//transitionFS.sort(globals.numSort);
	checkForm.onSortCmd = checkForm.getMethod('mySortFunction');
	var code = 'function onRecordSelection(event) {application.output(event);application.output("onrecordselection");var index = controller.getSelectedIndex();application.output("index "+index);}';
	checkForm.onRecordSelection = checkForm.newMethod(code);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW; //myform.view = SM_VIEW.LOCKED_TABLE_VIEW;

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
		} else {
			continue
		}
		last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
	 	last.name=columnNames[index];
	 	offset += 80;
	 	if (index > 4) {last.editable = false;}	}
	last.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;

	elements.tabless.addTab('kiss_barcode_request',"impTable");
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

