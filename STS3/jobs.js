/**
 * @properties={typeid:35,uuid:"C21C7885-423A-458D-A0AC-E90ACF5D7D37",variableType:-4}
 */
var importResults = [];
/**
 * @properties={typeid:35,uuid:"C2F4D612-6B67-4D98-A897-BE724811CB53",variableType:-4}
 */
var importErrors = [];
/**
 * @properties={typeid:35,uuid:"14A210F9-34D2-4D24-8E4E-95AE97FCF96B",variableType:-4}
 */
var mappedFormatArray = [];
/**
 * @properties={typeid:35,uuid:"1C39F0C7-0609-47D5-AF72-C34E9A51E89F",variableType:-4}
 */
var mappedFormatArrayDescrips = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B57177F-1D0C-4856-8047-692D87829775"}
 */
var importJobNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31C27CBE-0E9D-4730-A03C-922F0BA707C8"}
 */
var importDate = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9CCA6C50-C08B-48C2-8788-11261608EA40"}
 */
var importJobName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"176425AB-BB7A-45A3-81D2-523AF5D2345C"}
 */
var importFormatType = "";
/**
 * TODO generated, please specify type and doc for the params
 * @param file
 *
 * @properties={typeid:24,uuid:"542DE6DC-4367-4BAF-A98B-7C199873EA9D"}
 */
// -------------------------------------------------------------------------------------------------------------------
/**
 * TODO generated, please specify type and doc for the params
 * @param columnName
 * @param content
 *
 * @properties={typeid:24,uuid:"784F88EE-9CEB-40C4-B720-54D4928FF9C1"}
 * @AllowToRunInFind
 */
function getFieldDataMapping(columnName, content){
	var fieldMap = "";
	/** @type {JSFoundSet<db:/stsservoy/mapping>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/mapping');
	if (fs.find()){
		fs[columnName] = content;
		fs.mapped_format = "FabSuite";
		if (fs.search() > 0){
			var rec = fs.getSelectedRecord();
			fieldMap = rec.mapping_key+","+rec.field_order+",0";
			return fieldMap;
		} else {
			return "";
		}
	}
}
/**
 * @properties={typeid:24,uuid:"A7AE0B04-B8F0-4939-A721-E2698FF530FA"}
 */
function existsJobNumber(jobNumber){
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = databaseManager.getFoundSet("db:/stsservoy/jobs");
	if (find()){
		fs.job_number = jobNumber;
		if (search()){
			return true;
		} else {
			return false;
		}
	}
}
/**
 * @properties={typeid:24,uuid:"A9901D66-1405-4F29-B763-64E296A272BE"}
 */
function createBarCode(){
	
}
/**
 * TODO generated, please specify type and doc for the params
 * @param file
 *
 * @properties={typeid:24,uuid:"82933605-B94C-4B67-979A-6E8B9A0BF807"}
 */
function readKissTextFile(file) {
	var prefs = {
		delimiter: ",",
		header:false,
		dynamicTyping:false
	}
	var path = "C:\\Users\\Alienware\\Documents\\STS p2programs\\KISS\\";	//TODO general program preferences
	if (file == "") {file = path} else {file = file[0]}
	var fileText = "";
	//var fileJS = plugins.file.convertToJSFile(file);
	fileText = plugins.file.readTXTFile(file);
    
    importResults =  parse(fileText,prefs);
/*
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
*/
    index = idHeaders();
	dataErrorCheck(index);
	var mappingDone = loadKissMapping();
	if (!mappingDone){return}
	savePiecemarks();
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"89287D7F-6E72-4A30-8E10-3D8F4268A46C"}
 */
function loadKissMapping(){
	/** @type {JSFoundSet<db:/stsservoy/mapping>} */
	var fs5 = databaseManager.getFoundSet("db:/stsservoy/mapping");
	var mappedFormat = 'FabSuite';
	mappedFormatArray = [];
	mappedFormatArrayDescrips = [];
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
				if (rec6.mapped_field == null){continue}  // skip null mappings, won't work
				mappedFormatArray[mapTo+','+mapCount] = rec6.mapped_field;
				mappedFormatArrayDescrips[mapTo+','+mapCount] = rec6.field_name;
				oldMapTo = mapTo;
			}
		}
	}
	// verify that all provided elements have been mapped, this is an error if any are missed from KISS file
	// errors in mapping should cancel an import
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
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8F81FA19-1380-4635-8F1D-16C3D6AAD275"}
 */
function idHeaders(){
	var format = "";
	var data = importResults.results;
	var length = data.length;
	if (data[0].length >2 && data[0][2].search("FabSuite") != -1){format = "FabSuite"}
	application.output('File Format '+format);
	var index = 1;
	while (data[index][0] == "*"){ // get headers if 
		//application.output(data[index][1]);
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
			/** @type {JSFoundset<db:/stsservoy/mappings>} */
			var fs2 = databaseManager.getFoundSet("db:/stsservoy/mapping");
			//var fs2 = sts_mapping;
			fieldName = data[index][i3].trim();
			if (fieldName.search(RegExp('[A-Za-z]+')) == -1){fieldName = "UNDEFINED";}
			var fieldPosition = i3;
			//if (mappingLine == fieldName){
			//	application.output('field name same '+mappingLine);
			//}
			//application.output('mapping format: '+format+', Mapping key: '+mappingKey+', Line: '+mappingLine+', index: '+fieldPosition+', field name: '+fieldName);
			if (fs2.find()){
				fs2.mapped_format = format;
				fs2.mapping_line = mappingLine;
				fs2.field_name = fieldName;
				if (!fs2.search()){
					fs2.newRecord();
					var rec = fs2.getSelectedRecord();
					//application.output('rec '+rec);
					rec.mapped_format = format;
					rec.mapping_line = mappingLine;
					rec.mapping_key = mappingKey;
					if (mappingLine == fieldName){
						rec.field_value = mappingKey;
					}
					rec.field_name = fieldName;
					rec.field_order = fieldPosition-1;
					databaseManager.saveData(rec);
					//application.output('format '+rec.mapped_format+ ' '+rec.field_name);
				}
			}
		}
		index++;		
		//var fs9 = sts_mapping;
		//application.output('mapping lines: '+fs9.getSize());	
	}

	return index;


}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param index
 *
 * @properties={typeid:24,uuid:"CE27525E-3CCF-4431-B250-555756249AE8"}
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
			//application.output('Line '+lineType+' '+typeFieldCount)
		} else {
			if (lines[lineType] != typeFieldCount){
				application.output('Found '+lineType+' '+typeFieldCount+' but had '+lines[lineType]+' fields')
			}
		}
	}
	// Update key code temp
	/** @type {JSFoundSet<db:/stsservoy/mapping>} */
 	var fs3 = databaseManager.getFoundSet("db:/stsservoy/mapping");
 	
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


/*
 Papa Parse
 v2.0.3
 https://github.com/mholt/jquery.parse
 */

	/**
 * TODO generated, please specify type and doc for the params
 * @param e
 *
 * @properties={typeid:24,uuid:"47520824-FBB2-456A-B43E-9CC14EDDE74C"}
 */
function t(e) {
		return typeof e === "function"
	}
/**
 * @properties={typeid:24,uuid:"905EDD6A-24B2-4341-82E2-3000B6D6AD42"}
 */
function savePiecemarks(){
	var data = scopes.jobs.importResults.results;
	var mappedFormatArray = forms.kiss_import.mappedFormatArray;
	/** @type {JSFoundSet<db:/stsservoy/piecemarks>} */
	var fs5 = databaseManager.getFoundSet("db:/stsservoy/piecemarks");
	fs5.loadAllRecords();
	application.output('record piecemark count: '+fs5.getSize());
	fs5.deleteAllRecords();//temporary
	application.output('record piecemark count (delete): '+fs5.getSize());
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
			//application.output('new record');
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
			if (lineArray[i] == ""){continue}
			mapTo2 = lineArray[0]+','+i;
			mapIndex = 0;
			mappings = [];

			var fieldValue = "";
			while (mapTo2+','+mapIndex in mappedFormatArray) {
				//mapTo2 = lineArray[0]+','+i;

				if (i6<0){
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
				//application.output('newRec field: '+field[1]+' newRec[field]: '+newRec[field[1]]);
			}
		}
		//application.output(newRec);
	}
	application.output('new Record count: '+recCount);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param e
 * @param t
 *
 * @SuppressWarnings(deprecated,hides,wrongparameters,undeclared,unused,nls)
* @properties={typeid:24,uuid:"F2FD7DA1-2F64-47EB-8A2B-416FBAC080AF"}
 */
function n(e, t) {
		function a(n) {
			var r = s + n.target.result;
			s = "";
			if (r >= t.chunkSize) {
				var u = r.lastIndexOf("\n");
				if (u < 0)u = r.lastIndexOf("\r");
				if (u > -1) {
					s = r.substring(u + 1);
					r = r.substring(0, u)
				}
			}
			var a = o.parse(r);
			if (i >= e.size)return f(n);
			else if (a.errors.abort)return;
			else c()
		}
		function f(n) {
			if (typeof t.onComplete === "function")t.onComplete(undefined, e, t.inputElem, n)
		}
		function l() {
			if (typeof t.onFileError === "function")t.onFileError(u.error, e, t.inputElem)
		}
		function c() {
			if (i < e.size) {
				u.readAsText(e.slice(i, Math.min(i + t.chunkSize, e.size)));
				i += t.chunkSize
			}
		}
		if (!t)t = { };
		if (!t.chunkSize)t.chunkSize = 1024 * 1024 * 5;
		if (t.config.step) {
			var n = t.config.step;
			t.config.step = function(r) {
				n(r, e, t.inputElem)
			}
		}
		var i = 0;
		var s = "";
		var o = new r(t.config);
		var u = new FileReader;
		u.onload = a;
		u.onerror = l;
		this.stream = function(e, n) {
			t.onComplete = e;
			t.onFileError = n;
			c()
		};
	}
/**
 * TODO generated, please specify type and doc for the params
 * @param e
 *
 *
 * @SuppressWarnings(deprecated,hides,wrongparameters,undeclared,unused,nls)
 * @properties={typeid:24,uuid:"0115493C-393C-4FA6-820C-B7CEEB46F4F7"}
 */
function r(e) {
		function c(e) {
			if (typeof e !== "object")e = { };
			if (typeof e.delimiter !== "string" || e.delimiter.length != 1)e.delimiter = f.delimiter;
			if (e.deimiter == '"' || e.delimiter == "\n")e.delimiter = f.delimiter;
			if (typeof e.header !== "boolean")e.header = f.header;
			if (typeof e.dynamicTyping !== "boolean")e.dynamicTyping = f.dynamicTyping;
			if (typeof e.preview !== "number")e.preview = f.preview;
			if (typeof e.step !== "function")e.step = f.step;
			return e
		}
		function h(e) {
			var t = [",", "	", "|", ";"];
			var n, i, s;
			for (var o in t) {
				var a = t[o];
				var f = 0, l = 0;
				var c = (new r({ delimiter: a, header: false, dynamicTyping: false, preview: 10 })).parse(e);
				for (var h in c.results) {
					var p = c.results[h].length;
					l += p;
					if (typeof s === "undefined") {
						s = p;
						continue
					} else if (p > 1) {
						f += Math.abs(p - s);
						s = p
					}
				}
				l /= c.results.length;
				if ( (typeof i === "undefined" || f < i) && l > 1.99) {
					i = f;
					n = a
				}
			}
			u.delimiter = n;
			return !!n
		}
		function p() {
			var e = a.i > 0 && g(a.i - 1) || a.i == 0;
			var t = a.i < i.length - 1 && g(a.i + 1) || a.i == i.length - 1;
			var n = a.i < i.length - 1 && i[a.i + 1] == '"';
			if (a.inQuotes && n) {
				a.fieldVal += '"';
				a.i++
			} else if (e || t)a.inQuotes = !a.inQuotes;
			else C("Quotes", "UnexpectedQuotes", "Unexpected quotes")
		}
		function pp() {
			var nn = a.i < i.length - 1 
						&& a.ch == ')';
			if (nn)
				a.inParens = false;
			else if (a.ch == '(')
				a.inParens = true;
			else
				C("Parentheses", "UnexpectedParentheses", "Unexpected parentheses");		
		}
		function d() {
			v()
		}
		function v() {
			a.fieldVal += a.ch
		}
		function m() {
			if (a.ch == u.delimiter)b();
			else if (a.ch == "\r" && a.i < i.length - 1 && i[a.i + 1] == "\n" || a.ch == "\n" && a.i < i.length - 1 && i[a.i + 1] == "\r") {
				w();
				a.i++
			} else if (a.ch == "\n" || a.ch == "\r")w();
			else v()
		}
		function g(e) {
			if (e >= i.length)return false;
			var t = i[e];
			if (t == u.delimiter || t == "\n" || t == "\r" && e < i.length - 1 && i[e + 1] == "\n")return true;
			else return false
		}
		function y(e) {
			if (e >= i.length)return false;
			if (e < i.length - 1)return i[e] == "\n" || i[e] == "\r" && i[e + 1] == "\n";
			else return i[e] == "\n"
		}
		function b() {
			if (u.header) {
				if (a.lineNum == 1 && n == 1)a.parsed.fields.push(a.fieldVal);
				else {
					var e = a.parsed.rows[a.parsed.rows.length - 1];
					var t = a.parsed.fields[a.field];
					if (t) {
						if (u.dynamicTyping)a.fieldVal = x(a.fieldVal);
						e[t] = a.fieldVal
					} else {
						if (typeof e.__parsed_extra === "undefined")e.__parsed_extra = [];
						e.__parsed_extra.push(a.fieldVal)
					}
				}
			} else {
				if (u.dynamicTyping)a.fieldVal = x(a.fieldVal);
				a.parsed[a.parsed.length - 1].push(a.fieldVal)
			}
			a.fieldVal = "";
			a.field++
		}
		function w() {
			E();
			if (S()) {
				a.errors = { };
				a.errors.length = 0
			}
			if (u.header && a.lineNum > 0) {
				if (S())a.parsed.rows = [{ }];
				else a.parsed.rows.push({ })
			} else {
				if (S())a.parsed = [[]];
				else a.parsed.push([])
			}
			a.lineNum++;
			a.line = "";
			a.field = 0
		}
		function E() {
			if (o)return;
			b();
			var e = T();
			if (!e && u.header)N();
			if (S() && (!u.header || u.header && a.parsed.rows.length > 0)) {
				var t = u.step(k());
				if (t === false)o = true
			}
		}
		function S() {
			return typeof u.step === "function"
		}
		function x(e) {
			var t = l.floats.test(e);
			return t ? parseFloat(e) : e
		}
		function T() {
			if (l.empty.test(a.line)) {
				if (u.header) {
					if (a.lineNum == 1) {
						a.parsed.fields = [];
						a.lineNum--
					} else a.parsed.rows.splice(a.parsed.rows.length - 1, 1)
				} else a.parsed.splice(a.parsed.length - 1, 1);
				return true
			}
			return false
		}
		function N() {
			if (!u.header)return true;
			if (a.parsed.rows.length == 0)return true;
			var e = a.parsed.fields.length;
			var t = 0;
			var n = a.parsed.rows[a.parsed.rows.length - 1];
			for (var r in n)
				if (n.hasOwnProperty(r))t++;
			if (t < e)return C("FieldMismatch", "TooFewFields", "Too few fields: expected " + e + " fields but parsed " + t);
			else if (t > e)return C("FieldMismatch", "TooManyFields", "Too many fields: expected " + e + " fields but parsed " + t);
			return true
		}
		function C(e, t, n, r) {
			var i = u.header ? a.parsed.rows.length ? a.parsed.rows.length - 1 : undefined : a.parsed.length - 1;
			var o = r || i;
			if (typeof a.errors[o] === "undefined")a.errors[o] = [];
			a.errors[o].push({ type: e, code: t, message: n, line: a.lineNum, row: i, index: a.i + s });
			a.errors.length++;
			return false
		}
		function k() {
			return { results: a.parsed, errors: a.errors }
		}
		function L(e) {
			n++;
			if (n > 1 && S())s += e.length;
			a = A();
			i = e
		}
		function A() {
			var e;
			if (u.header) {
				e = { fields: S() ? a.parsed.fields || [] : [], rows: S() && n > 1 ? [{ }] : [] }
			} else e = [[]];
			return { i: 0, lineNum: S() ? a.lineNum : 1, field: 0, fieldVal: "", line: "", ch: "", inQuotes: false, inParens: false, parsed: e, errors: { length: 0 } }
		}
		var t = this;
		var n = 0;
		var i = "";
		var s = 0;
		var o = false;
		var u = { };
		var a = A();
		var f = { delimiter: "", header: true, dynamicTyping: true, preview: 0 };
		var l = { floats: /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i, empty: /^\s*$/ };
		e = c(e);
		u = { delimiter: e.delimiter, header: e.header, dynamicTyping: e.dynamicTyping, preview: e.preview, step: e.step };
		this.parse = function(e) {
			if (typeof e !== "string")return k();
			L(e);
			if (!u.delimiter && !h(e)) {
				C("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to comma", "config");
				u.delimiter = ","
			}
			for (a.i = 0; a.i < i.length; a.i++) {
				if (o || u.preview > 0 && a.lineNum > u.preview)break;
				a.ch = i[a.i];
				a.line += a.ch;
				if (a.ch == '(' || a.ch == ')')pp();
				if (a.inParens)d();
				if (a.ch == '"')p();
				if (a.inQuotes) d();
				if (!a.inQuotes && !a.inParens)m();
			}
			if (o)C("Abort", "ParseAbort", "Parsing was aborted by the user's step function", "abort");
			else {
				E();
				if (a.inQuotes)C("Quotes", "MissingQuotes", "Unescaped or mismatched quotes")//joe
				if (a.inParens)C("Parentheses", "MissingParentheses", "Unescaped or mistached parentheses")
			}
			return k()
		};
		this.getOptions = function() {
			return { delimiter: u.delimiter, header: u.header, dynamicTyping: u.dynamicTyping, preview: u.preview, step: u.step }
		}
	}
	e.fn.parse = function(r) {
		function o(i) {
			var s = a, o;
			if (t(r.error))o = function() {
					r.error(c.error, i.file, i.inputElem)
				};
			if (t(r.complete))s = function(e, t, n, i) {
					r.complete(e, t, n, i);
					a()
				};
			if (t(r.before)) {
				var f = r.before(i.file, i.inputElem);
				if (typeof f === "object")i.instanceConfig = e.extend(i.instanceConfig, f);
				else if (f === "skip")return a();
				else if (f === false) {
					u("AbortError", i.file, i.inputElem);
					return
				}
			}
			if (i.instanceConfig.step) {
				var l = new n(i.file, { inputElem: i.inputElem, config: e.extend({ }, i.instanceConfig) });
				l.stream(s, o)
			} else {
				var c = new FileReader;
				c.onerror = o;
				c.onload = function(t) {
					var n = t.target.result;
					var r = e.parse(n, i.instanceConfig);
					s(r, i.file, i.inputElem, t)
				};
				c.readAsText(i.file)
			}
		}
		function u(e, n, i) {
			if (t(r.error))r.error({ name: e }, n, i)
		}
		function a() {
			s.splice(0, 1);
			if (s.length > 0)o(s[0])
		}
		var i = r.config || { };
		var s = [];
		this.each(function(t) {
			var n = e(this).prop("tagName").toUpperCase() == "INPUT" && e(this).attr("type") == "file" && window.FileReader;
			if (!n)return true;
			var r = e.extend({ }, i);
			if (!this.files || this.files.length == 0) {
				u("NoFileError", undefined, this);
				return true
			}
			for (var a = 0; a < this.files.length; a++)s.push({ file: this.files[a], inputElem: this, instanceConfig: r });
			if (s.length > 0)o(s[0])
		});
		return this
	};
	e.parse = function(e, t) {
		var n = new r(t);
		return n.parse(e)
	}
	
	/**
 * TODO generated, please specify type and doc for the params
 * @param e
 * @param t
 * @SuppressWarnings(deprecated,hides,wrongparameters,undeclared,unused,nls)
 * @properties={typeid:24,uuid:"A4A8DE34-3A1B-4963-819A-7918F84E36B3"}
 */
function parse(e, t) {
		var n = new r(t);// either r or Parser
		return n.parse(e)
	}

	// Parser is the actual parsing component.
	// It is under test and does not depend on jQuery.
	// You could rip this entire function out of the plugin
	// and use it independently (with attribution).
	/**
 * TODO generated, please specify type and doc for the params
 * @param config
 *
 * @properties={typeid:24,uuid:"CB7133A6-6AC8-4DE0-AE43-D7318B9B880D"}
 */
function Parser(config)
	{
	}

/**
		var self = this;
		var _invocations = 0;
		var _input = "";
		var _chunkOffset = 0;
		var _abort = false;
		var _config = {};
		var _state = freshState();
		var _defaultConfig = {
			delimiter: "",
			header: true,
			dynamicTyping: true,
			preview: 0
		};
		var _regex = {
			floats: /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
			empty: /^\s*$/
		};

		config = validConfig(config);
		_config = {
			delimiter: config.delimiter,
			header: config.header,
			dynamicTyping: config.dynamicTyping,
			preview: config.preview,
			step: config.step
		};

		this.parse = function(input)
		{
			if (typeof input !== 'string')
				return returnable();

			reset(input);

			if (!_config.delimiter && !guessDelimiter(input))
			{
				addError("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to comma", "config");
				_config.delimiter = ",";
			}

			for (_state.i = 0; _state.i < _input.length; _state.i++)
			{
				if (_abort || (_config.preview > 0 && _state.lineNum > _config.preview))
					break;

				_state.ch = _input[_state.i];
				_state.line += _state.ch;
				
				if (_state.ch == '(' || _state.ch == ')')
					handleParens();
				if (_state.inParens)
					inParens();
				if (_state.ch == '"')
					handleQuote();
				else if (_state.inQuotes)
					inQuotes();
				if (!_state.inQuotes && !_state.inParens){
					notEscaped();
				}
			}

			if (_abort)
				addError("Abort", "ParseAbort", "Parsing was aborted by the user's step function", "abort");
			else
			{
				endRow();	// End of input is also end of the last row
				if (_state.inQuotes)
					addError("Quotes", "MissingQuotes", "Unescaped or mismatched quotes");
			}

			return returnable();
		};

		this.getOptions = function()
		{
			return {
				delimiter: _config.delimiter,
				header: _config.header,
				dynamicTyping: _config.dynamicTyping,
				preview: _config.preview,
				step: _config.step
			};
		};

		function validConfig(config)
		{
			if (typeof config !== 'object')
				config = {};

			if (typeof config.delimiter !== 'string'
				|| config.delimiter.length != 1)
				config.delimiter = _defaultConfig.delimiter;

			if (config.delimiter == '"' || config.delimiter == "\n")
				config.delimiter = _defaultConfig.delimiter;

			if (typeof config.header !== 'boolean')
				config.header = _defaultConfig.header;
			
			if (typeof config.dynamicTyping !== 'boolean')
				config.dynamicTyping = _defaultConfig.dynamicTyping;

			if (typeof config.preview !== 'number')
				config.preview = _defaultConfig.preview;

			if (typeof config.step !== 'function')
				config.step = _defaultConfig.step;

			return config;
		}

		function guessDelimiter(input)
		{
			var delimiters = [",", "\t", "|", ";"];
			var bestDelim, bestDelta, fieldCountPrevRow;

			for (var i in delimiters)
			{
				var delim = delimiters[i];
				var delta = 0, avgFieldCount = 0;

				var preview = new Parser({
					delimiter: delim,
					header: false,
					dynamicTyping: false,
					preview: 10
				}).parse(input);

				for (var j in preview.results)
				{
					var fieldCount = preview.results[j].length;
					avgFieldCount += fieldCount;

					if (typeof fieldCountPrevRow === 'undefined')
					{
						fieldCountPrevRow = fieldCount;
						continue;
					}
					else if (fieldCount > 1)
					{
						delta += Math.abs(fieldCount - fieldCountPrevRow);
						fieldCountPrevRow = fieldCount;
					}
				}

				avgFieldCount /= preview.results.length;

				if ((typeof bestDelta === 'undefined' || delta < bestDelta)
					&& avgFieldCount > 1.99)
				{
					bestDelta = delta;
					bestDelim = delim;
				}
			}

			_config.delimiter = bestDelim;

			return !!bestDelim;
		}

		function handleParens()
		{
			var delimBefore = (_state.i > 0 && isBoundary(_state.i-1))
								|| _state.i == 0;
			var delimAfter  = (_state.i < _input.length - 1 && isBoundary(_state.i+1))
								|| _state.i == _input.length - 1;
			var escaped     = _state.i < _input.length - 1
								&& _input[_state.i+1] == '(';
			var releaseEscape = _state.i < _input.length - 1 
								&& _state.ch == ')';
				
			if (releaseEscape)
				_state.inParens = false;
			else if (_state.ch == '(')
				_state.inParens = true;
			else
				addError("Parentheses", "UnexpectedParentheses", "Unexpected parentheses");
		}
		
		function handleQuote()
		{
			var delimBefore = (_state.i > 0 && isBoundary(_state.i-1))
								|| _state.i == 0;
			var delimAfter  = (_state.i < _input.length - 1 && isBoundary(_state.i+1))
								|| _state.i == _input.length - 1;
			var escaped     = _state.i < _input.length - 1
								&& _input[_state.i+1] == '"';

			if (_state.inQuotes && escaped)
			{
				_state.fieldVal += '"';
				_state.i++;
			}
			else if (delimBefore || delimAfter)
				_state.inQuotes = !_state.inQuotes;
			else
				addError("Quotes", "UnexpectedQuotes", "Unexpected quotes");
		}

		function inQuotes()
		{
			appendCharToField();
		}
		
		function inParens()
		{
			appendCharToField();
		}

		function appendCharToField()
		{
			_state.fieldVal += _state.ch;
		}

		function notEscaped()
		{
			if (_state.ch == _config.delimiter)
				saveValue();
			else if ((_state.ch == "\r" && _state.i < _input.length - 1
						&& _input[_state.i+1] == "\n")
					|| (_state.ch == "\n" && _state.i < _input.length - 1
						&& _input[_state.i+1] == "\r"))
			{
				newRow();
				_state.i++;
			}
			else if (_state.ch == "\n" || _state.ch == "\r")
				newRow();
			else
				appendCharToField();
		}

		function isBoundary(i)
		{
			if (i >= _input.length)
				return false;
			
			var ch = _input[i];

			if (ch == _config.delimiter
				|| ch == "\n"
				|| (ch == "\r" && i < _input.length - 1 && _input[i+1] == "\n"))
				return true;
			else
				return false;
		}

		function isLineEnding(i)
		{
			if (i >= _input.length)
				return false;

			if (i < _input.length - 1)
				return _input[i] == "\n" || (_input[i] == "\r" && _input[i+1] == "\n");
			else
				return _input[i] == "\n";
		}

		function saveValue()
		{
			if (_config.header)
			{
				if (_state.lineNum == 1 && _invocations == 1)
					_state.parsed.fields.push(_state.fieldVal)
				else
				{
					var currentRow = _state.parsed.rows[_state.parsed.rows.length - 1];
					var fieldName = _state.parsed.fields[_state.field];
					if (fieldName)
					{
						if (_config.dynamicTyping)
							_state.fieldVal = tryParseFloat(_state.fieldVal);
						currentRow[fieldName] = _state.fieldVal;
					}
					else
					{
						if (typeof currentRow.__parsed_extra === 'undefined')
							currentRow.__parsed_extra = [];
						currentRow.__parsed_extra.push(_state.fieldVal);
					}
				}
			}
			else
			{
				if (_config.dynamicTyping)
					_state.fieldVal = tryParseFloat(_state.fieldVal);
				_state.parsed[_state.parsed.length - 1].push(_state.fieldVal);
			}
			
			_state.fieldVal = "";
			_state.field ++;
		}

		function newRow()
		{
			endRow();

			if (streaming())
			{
				_state.errors = {};
				_state.errors.length = 0;
			}

			if (_config.header && _state.lineNum > 0)
			{
				if (streaming())
					_state.parsed.rows = [ {} ];
				else
					_state.parsed.rows.push({});
			}
			else
			{
				if (streaming())
					_state.parsed = [ [] ];
				else
					_state.parsed.push([]);
			}

			_state.lineNum ++;
			_state.line = "";
			_state.field = 0;
		}

		function endRow()
		{
			if (_abort)
				return;

			saveValue();

			var emptyLine = trimEmptyLine();
			
			if (!emptyLine && _config.header)
				inspectFieldCount();

			if (streaming() && (!_config.header ||
					(_config.header && _state.parsed.rows.length > 0)))
			{
				var keepGoing = _config.step(returnable());
				if (keepGoing === false)
					_abort = true;
			}
		}

		function streaming()
		{
			return typeof _config.step === 'function';
		}

		function tryParseFloat(num)
		{
			var isNumber = _regex.floats.test(num);
			return isNumber ? parseFloat(num) : num;
		}

		function trimEmptyLine()
		{
			if (_regex.empty.test(_state.line))
			{
				if (_config.header)
				{
					if (_state.lineNum == 1)
					{
						_state.parsed.fields = [];
						_state.lineNum --;
					}
					else
						_state.parsed.rows.splice(_state.parsed.rows.length - 1, 1);
				}
				else
					_state.parsed.splice(_state.parsed.length - 1, 1);

				return true;
			}
			return false;
		}

		function inspectFieldCount()
		{
			if (!_config.header)
				return true;

			if (_state.parsed.rows.length == 0)
				return true;

			var expected = _state.parsed.fields.length;
			
			// Actual field count tabulated manually because IE<9 doesn't support Object.keys
			var actual = 0;
			var lastRow = _state.parsed.rows[_state.parsed.rows.length - 1];
			for (var prop in lastRow)
				if (lastRow.hasOwnProperty(prop))
					actual++;

			if (actual < expected)
				return addError("FieldMismatch", "TooFewFields", "Too few fields: expected " + expected + " fields but parsed " + actual);
			else if (actual > expected)
				return addError("FieldMismatch", "TooManyFields", "Too many fields: expected " + expected + " fields but parsed " + actual);
			return true;
		}

		function addError(type, code, msg, errKey)
		{
			var row = _config.header
						? (_state.parsed.rows.length ? _state.parsed.rows.length - 1 : undefined)
						: _state.parsed.length - 1;
			var key = errKey || row;

			if (typeof _state.errors[key] === 'undefined')
				_state.errors[key] = [];

			_state.errors[key].push({
				type: type, 
				code: code,
				message: msg,
				line: _state.lineNum,
				row: row,
				index: _state.i + _chunkOffset
			});

			_state.errors.length ++;

			return false;
		}

		function returnable()
		{
			return {
				results: _state.parsed,
				errors: _state.errors
			};
		}

		function reset(input)
		{
			_invocations++;
			if (_invocations > 1 && streaming())
				_chunkOffset += input.length;
			_state = freshState();
			_input = input;
		}

		function freshState()
		{
			// If streaming, and thus parsing the input in chunks, this
			// is careful to preserve what we've already got, when necessary.
			var parsed;
			if (_config.header)
			{
				parsed = {
					fields: streaming() ? _state.parsed.fields || [] : [],
					rows: streaming() && _invocations > 1 ? [ {} ] : []
				};
			}
			else
				parsed = [ [] ];

			return {
				i: 0,
				lineNum: streaming() ? _state.lineNum : 1,
				field: 0,
				fieldVal: "",
				line: "",
				ch: "",
				inQuotes: false,
				inParens: false,
				parsed: parsed,
				errors: { length: 0 }
			};
		}
	}	
		*/