/**
 * @properties={typeid:35,uuid:"92F1BAAB-9E80-4CBF-A11E-4E6A1EA260E7",variableType:-4}
 */
var importResults = [];
/**
 * @properties={typeid:35,uuid:"DA0BC3DC-AF49-4732-A8D0-4D3F4B6DA9B0",variableType:-4}
 */
var importErrors = [];
/**
 * @properties={typeid:35,uuid:"8219B251-F78E-47C2-9DBC-AD3F2257A453",variableType:-4}
 */
var mappedFormatArray = [];
// error field count check	
/**
 * @properties={typeid:24,uuid:"D6928785-C403-4970-9DFA-38CE61897955"}
 * @AllowToRunInFind
 */
function dataErrorCheck(index) {
 	var data = importResults.results;
	//var index2 = index;
	var length2 = length < 3000 ? length : length*.10;
	var lines = [];
	var lineType = "";
	var typeFieldCount = 0;
	for (var i = index;i < length; i++){ // get sample line types and sizes
		lineType = data[i][0];
		typeFieldCount = data[i].length;
		if (lines[lineType] == null){
			lines[lineType] = typeFieldCount
			application.output('Line '+lineType+' '+typeFieldCount)
		} else {
			if (lines[lineType] != typeFieldCount){
				application.output('Found '+lineType+' '+typeFieldCount+' but had '+lines[lineType]+' fields')
			}
		}
	}
	// Update key code temp
 	var fs3 = sts_mapping;
	fs3.loadRecords();
	var fs3Size = fs3.getSize();
	for (var i4 = 1;i4 <= fs3Size;i4++){
		var rec2 = fs3.getRecord(i4);
		if (rec2.mapping_key == null) {
			var keySource = rec2.mapping_line;
			var keyIndex = keySource.search(RegExp('\\b[A-Z\\*]\\b'));
			var key = rec2.mapping_line[keyIndex];
			rec2.mapping_key = key;
			databaseManager.saveData(rec2);
			application.output('KEY SEARCH. Line: '+rec2.mapping_line+', key: '+key);
		}
	}
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"1BF4E27D-AC8E-4297-B286-2D96AFC62745"}
 */
function loadKissMapping(){
	/** @type {JSFoundSet<db:/stsservoy/mapping>} */
	//var fs5 = databaseManager.getFoundSet("db:/stsservoy/mapping");
	var fs5 = sts_mapping;
	//fs5.loadAllRecords();

	var mappedFormat = 'FabSuite';
	mappedFormatArray = [];
	var mapLine = [];
	if (fs5.find()){
		fs5.mapped_format = mappedFormat;
		var oldMapTo = "";
		var mapTo = "";
		var mapCount = 0;
		if (fs5.search()){
			fs5.sort('mapped_format asc, mapping_key asc, field_order asc');
			var count = fs5.getSize();
			for (var i6=1;i6 <= count;i6++){
				var rec6 = fs5.getRecord(i6);
				mapTo = rec6.mapping_key+','+rec6.field_order;
				if (mapTo == oldMapTo){mapCount++}else{mapCount = 0}
				mappedFormatArray[mapTo+','+mapCount] = rec6.mapped_field;
				oldMapTo = mapTo;
			}
		}
	}
	var data = importResults.results;
	var dataLength = data.length;
	var needsMap = [];
	for (i6=1;i6<dataLength;i6++){ // start at line 1 (one) to skip header title
		var lineNumber = data[i6];	// get line
		if (lineNumber[0] == "*"){continue} // skip comments
		var fieldCount = data[i6].length;
		for (var i7=1;i7<fieldCount;i7++){ // start at index=1 since line name is the prefix and is not mapped
			var fieldValue = data[i6][i7];
			if (fieldValue == ""){continue}	// no need to map empty fields
			var indexName = lineNumber[0]+","+i7+",0"; //at least this field is mapped.  ignore additional mappings, not fatal
			if (!mappedFormatArray[indexName]){
				if (!(indexName in needsMap)){
					needsMap[indexName]="";
				}
				//application.output("NOT MAPPED: "+data[i6]);
			}
		}
	}
	application.output('NOT MAPPED:'+needsMap);
	return needsMap.length == 0;
}
/**
 * @properties={typeid:24,uuid:"2A5A7150-F395-4686-9054-7D626EE79B44"}
 */
function savePiecemarks(){
	var data = importResults.results;
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs5 = databaseManager.getFoundSet("db:/stsservoy/piecemarks");
	//var fs5 = sts_piecemark;
	fs5.loadAllRecords();
	fs5.deleteAllRecords();//temporary
	application.output('record piecemark count: '+fs5.getSize());
	var length = data.length;
	var skipHeader = true;
	var fieldCount = 0;
	var lineArray = [];
	var mapTo2 = "";
	var newRecField = "D";
	var recCount = 0;
	var newRec = "";
	var newRecIndex = 0;
	// mappedFormatArray['mapping_key_line','field_order','0..1..2'] is database.field
	// data[line_in_file], data array sized to number of fields on the line
	for (var i6 = 1;i6<length;i6++){
		//if (i6 > 30){break}
		skipHeader = skipHeader && data[i6][0] == "*";
		if (skipHeader){continue}
		if (data[i6][0] == null){continue}
		if (data[i6][0] == newRecField){
			recCount++;
			application.output('new record');
			newRecIndex = fs5.newRecord();
			newRec = fs5.getRecord(newRecIndex);
			newRec.tenant_uuid = globals.secCurrentTenantID;
			newRec.sheet_id = globals.secCurrentTenantID;//temporary
			//continue;
		}
		lineArray = data[i6];
		fieldCount = lineArray.length;
		var mapIndex = 0;
		var skip = "";
		var mappings = [];
		for (var i = 1;i<fieldCount;i++){
			if (lineArray[i] == ""){continue;skip = "skip"} else {skip = ""}
			mapTo2 = lineArray[0]+','+i;
			mapIndex = 0;
			mappings = [];
			
			var fieldValue = "";
			while (mapTo2+','+mapIndex in mappedFormatArray) {
				//mapTo2 = lineArray[0]+','+i;
				
				if (i6<500){
					application.output('   line: '+skip+lineArray[0]+' value: '+lineArray[i]+', maps to field: '+mappedFormatArray[mapTo2+','+mapIndex]+', map '+mapTo2+','+mapIndex);
				}
				mappings.push(mappedFormatArray[mapTo2+','+mapIndex]); //for ordering of +1 field values after exit this while
				mapIndex++;
			}
			for (var i2=0;i2<mappings.length;i2++){
				if (!(i2 in mappings)){break}
				application.output(lineArray);
				var field = mappings[i2].split('.');
				fieldValue = newRec[field[1]];
				if (newRec[field[1]] == null){
					newRec[field[1]] = lineArray[i];
				} else {
					newRec[field[1]] = newRec[field[1]]+' '+lineArray[i];
				}
				application.output('newRec field: '+field[1]+' newRec[field]: '+newRec[field[1]]);
			}
		}
		application.output(newRec);
	}
	application.output('new Record count: '+recCount);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4409B8F-40DD-42A8-8C59-570B2AEA8235"}
 * @AllowToRunInFind
 */
function onActionFileOpenDialog(event) {
	var file = plugins.file.showFileOpenDialog(1, "C:\\Users\\Alienware\\Documents\\STS p2programs\\KISS\\", false, null);
	application.output(file.getAbsolutePath());
	if (file == null){return}
	application.output('file '+file.getName());
	var prefs = {
		delimiter: ",",
		header:false,
		dynamicTyping:false
	}
    var fileText = plugins.file.readTXTFile(file);
    
    importResults =  scopes.jobs.parse(fileText,prefs);
    var length = importResults.results.length;
    var linePre = "";
    var rec1 = null;
    for (var index = 0;index <300;index++){
    	linePre = index+' ';
    	rec1 = importResults.results[index];
    	err1 = importResults.errors[index];
    	for (var prop in rec1){
    		linePre = linePre+'||'+rec1[prop];
    	}
    	for (var prop2 in err1){
    		linePre = linePre+" EEE "+err1[prop2].length;
    	}
    	application.output(linePre);
    }
    var index = idHeaders();
    //databaseManager.setAutoSave(false);
    //var job = sts_jobs.newRecord();
    //customer_id = '77914ABD-3DA5-4DCB-904E-443B450062B5';
    //var field = 'job_title';
    //var joe = "";
    //foundset[field] = results.results[7][2];
    //application.output(results);
	dataErrorCheck(index);
	var mappingDone = loadKissMapping();
	if (!mappingDone){return}
	scopes.jobs.savePiecemarks();
}
/**
 * @properties={typeid:24,uuid:"C6A6434A-1D69-49FF-A795-B4718F6B0652"}
 * @AllowToRunInFind
 */
function idHeaders(){
	var format = "";
	var data = importResults.results;
	var length = data.length;
	if (data[0].length >2 && data[0][2].search("FabSuite") != -1){format = "FabSuite"}
	application.output('File Format '+format);
	var index = 1;
	while (data[index][0] == "*"){ // get headers if 
		application.output(data[index][1]);
		var headLineSize = data[index].length;
		if (headLineSize <= 1) {continue}
		var mappingLine = data[index][1];
		var fieldName = ""; 	//compare to other non-header lines in file
		var mappingLineIndex = mappingLine.search(RegExp('\\b[A-Z\\*]\\b'));		///get regexp of 'x' 1 char
		if (mappingLineIndex != -1){
			var mappingKey = mappingLine[mappingLineIndex];
		}
		for (var i3=1;i3 < headLineSize;i3++){
			//create records for missing mapping fields under mapping format
			var fs2 = sts_mapping;
			fieldName = data[index][i3].trim();
			if (fieldName.search(RegExp('[A-Za-z]+')) == -1){fieldName = "UNDEFINED";}
			var fieldPosition = i3;
			if (mappingLine == fieldName){
				application.output('field name same '+mappingLine);
			}
			application.output('mapping format: '+format+', Mapping key: '+mappingKey+', Line: '+mappingLine+', index: '+fieldPosition+', field name: '+fieldName);
			if (fs2.find()){
				fs2.mapped_format = format;
				fs2.mapping_line = mappingLine;
				fs2.field_name = fieldName;
				if (!fs2.search()){
					fs2.newRecord();
					var rec = fs2.getSelectedRecord();
					application.output('rec '+rec);
					rec.mapped_format = format;
					rec.mapping_line = mappingLine;
					rec.mapping_key = mappingKey;
					if (mappingLine == fieldName){
						rec.field_value = mappingKey;
					}
					rec.field_name = fieldName;
					rec.field_order = fieldPosition-1;
					databaseManager.saveData(rec);
					application.output('format '+rec.mapped_format+ ' '+rec.field_name);
				}
			}
		}
		index++;		
		var fs9 = sts_mapping;
		application.output('mapping lines: '+fs9.getSize());	}

	return index;


}