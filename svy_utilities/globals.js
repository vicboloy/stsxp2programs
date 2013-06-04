/**
 * @deprecated Will be removed in version 5. Wasn't used anywhere in the codebase
 * @type {String}
 *
 * @properties={typeid:35,uuid:"63A2501C-F482-4079-A870-2AD5B33B72AE"}
 */
var svy_utl_tempFileLocation = null;

/**
 * @deprecated will be removed in version 5. Wasn't used in a meaningful way anywhere
 * @type {String}
 *
 * Used by  svy_utl_open_file
 *
 * @properties={typeid:35,uuid:"b2151e83-e637-40e7-a81e-eb900c4b93bc"}
 */
var svy_utl_temp_file_path = '';

/**
 * Used by svy_utl_writeTempFile, svy_utl_removeTempFiles to keep track of temp files
 * @deprecated will be removed in version 5. Wasn't used anywhere in the codebase
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"c88d4177-c7ab-4343-adc4-0ed4fa5bcd3a",variableType:-4}
 */
var svy_utl_tempFiles;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A798F484-9C14-4EAA-BE09-207412D3D4F9"}
 */
var svy_utl_version = '4.0.0';

/**
 * Used by the methods svy_utl_setRowIdentifierArray, svy_utl_getRowIdentifierName
 * @deprecated Will be removed in version 5. Not in use anymore
 * @properties={typeid:35,uuid:"48d9008a-4423-465c-bc97-67784ca98309",variableType:-4}
 */
var svy_utl_arrayRowIdentifiers;

/**
 * Compares two arrays
 *
 * @author Joas de Haan
 * @since 2007-11-04
 * @param {Array} a1
 * @param {Array} a2
 * @return  {Boolean} true if the arrays are the same, otherwise false
 *
 * @properties={typeid:24,uuid:"640e075f-7559-41c3-b75d-813e031479cc"}
 */
function svy_utl_compareArrays(a1, a2) {
	if (a1 == a2 ) {
		return true;
	}

	if (a1 == null  || a2 == null || a1.length != a2.length) {
		return false;
	}

	for (var i = 0; i < a1.length; i++) {
		if (a1[i] != a2[i]) {
			return false;
		}
	}

	return true;
}

/**
 *	Concatenate to datasets together
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyData#concatenateJSDataSets()} instead. Pay attention: has different behavior
 *
 * @author Joas de Haan
 * @since 2007-11-04
 * @param {JSDataSet} main
 * @param {JSDataSet} add
 * @return {JSDataSet}
 *
 * @properties={typeid:24,uuid:"bd508a5e-5415-427e-91fd-5765b1af4be1"}
 */
function svy_utl_concatenateDataSets(main, add) {
	if (!main || !add) return main;

	if (main.getMaxColumnIndex() != add.getMaxColumnIndex()) {
		return main;
	}

	var row = new Array(main.getMaxColumnIndex());
	for (var i = 1; i <= add.getMaxRowIndex(); i++) {
		for (var j = 1; j <= main.getMaxColumnIndex(); j++) {
			row[j] = add.getValue(i, j);
		}
		main.addRow(row);
	}
	return main
}

/**
 * Copy's one foundset to an other foundset without loosing the shared foundset.
 * @deprecated Will be removed in version 5. Use {@link #JSFoundSet#loadRecords(JSFoundSet)} instead
 * @author Sanneke Aleman
 * @since 2007-11-04
 * @param {String}	_form_from formname form
 * @param {String} _form_to formname to
 * @return  none
 *
 * @properties={typeid:24,uuid:"8e32d302-da73-4cd6-9d40-25f66b69884c"}
 */
function svy_utl_copyFoundset(_form_from, _form_to) {
	var _id = globals['svy_nav_getRowIdentifierValues'](_form_from)

		//1 get SQL + parameters
	var sql_statement = databaseManager.getSQL(forms[_form_from].foundset)
	var _parameters = databaseManager.getSQLParameters(forms[_form_from].foundset)

		//2 load al records
	forms[_form_to].foundset.loadAllRecords()

	//3 load records on to form
	forms[_form_to].foundset.loadRecords(sql_statement, _parameters);

	//4 set selected record.
	forms[_form_to].foundset.getRecord(_id)
	forms[_form_to].foundset.selectRecord(_id)

}

/**
 *	Makes a object form a dataset
 *
 * @author Paul Bakker
 * @since 2007-11-04
 * @param {JSDataSet}	_dataset
 * @param {Number} [_keyColumn] Optional, will default to 1 if not specified
 * @param {Number} [_valueColumn] Optional, will default to 2 if not specified
 * @return  {Object}
 *
 * @properties={typeid:24,uuid:"e0158f07-bb19-4f9b-808e-d7389e6d93e4"}
 */
function svy_utl_dataset2ObjectArray(_dataset, _keyColumn, _valueColumn) {
	if (!_dataset) return -1;
	if (_keyColumn == undefined) _keyColumn = 1;
	if (_valueColumn == undefined) _valueColumn = 2;

	var _ObjectArray = new Object();
	for (var i = 1; i <= _dataset.getMaxRowIndex(); i++) {
		_ObjectArray[_dataset.getValue(i, _keyColumn)] = _dataset.getValue(i, _valueColumn);
	}
	return _ObjectArray;
}

/**
 *	Counts days to a date
 *
 * @author Sanneke Aleman
 * @since 2006-11-04
 * @param {Date} date
 * @param {Number} numberOfDays  can be negative
 * @return {Date} date + nr of days (attention, time will be set to 0)
 *
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyDateUtils#addDays()}
 *
 * @properties={typeid:24,uuid:"69a69258-d6bd-40e4-8856-221ef953fb77"}
 */
function svy_utl_datePlusDays(date, numberOfDays) {
	var dateTime = new scopes.modUtils$date.DateTime(date);
	return dateTime.toStartOfDay().addDays(numberOfDays).date;
	}

/**
 *	 Set time part to 00:00:00.000
 *
 * @author Sanneke Aleman
 * @since 2006-11-04
 * @param {Date} dateTime
 * @return  {Date}
 *
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyDateUtils#toStartOfDay()}
 *
 * @properties={typeid:24,uuid:"9abcc8ec-7800-4361-96e9-3a42762efb8c"}
 */
function svy_utl_dateTimeSetDayBegin(dateTime) {
	return scopes.modUtils$date.toStartOfDay(dateTime);
	}

/**
 *	  Set time part to 23:59:59.999
 *
 * @author Sanneke Aleman
 * @since 2006-11-04
 * @param {Date} dateTime
 * @return  {Date}
 *
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyDateUtils#toEndOfDay()}
 *
 * @properties={typeid:24,uuid:"b0fb5c55-01cc-4a2b-822b-98a087c52c23"}
 */
function svy_utl_dateTimeSetDayEnd(dateTime) {
	return scopes.modUtils$date.toEndOfDay(dateTime);
}

/**
 *	  Returns HTML from a dataset with datasetColumnNames as first Column,
 *			   and an additional column for each row.  Basically, a pivot of
 *			   getDatasetAsHTML.
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyData#pivotJSDataSet()#getAsHTML()} instead
 * @author Sanneke Aleman
 * @since 2006-11-04
 * @param {JSDataSet} _dataset
 * @return  {String} HTML from a dataset
 *
 * @properties={typeid:24,uuid:"3c37c8e5-1213-4990-8fec-222021f31206"}
 */
function svy_utl_getDatasetAsHTMLColumns(_dataset) {
	var _myReturn = "<TABLE BORDER=1 CELLPADDING=1 CELLSPACING=0>"

		//loop through columns
	for (var i = 1; i <= _dataset.getMaxColumnIndex(); i++) {
		_myReturn += "<tr><td><b>" + _dataset.getColumnName(i) + "</b></td>"

		//loop through rows
		for (var j = 1; j <= _dataset.getMaxRowIndex(); j++) {
			_myReturn += "<td>" + _dataset.getValue(j, i) + "</td>"
		}

		_myReturn += "</tr>"
	}

	_myReturn += "</TABLE>"

	return _myReturn;
}

/**
 * Returns a data form a day week and year
 *
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyDateUtils#createDateFromWeekNumber()} instead
 * @author Sanneke Aleman
 * @since 2006-11-04
 * @param {Number} _year
 * @param {Number} _week
 * @param {Number} _day
 * @return  {Date} date
 *
 * @properties={typeid:24,uuid:"7dcb4280-1d67-4ca7-b396-ff7ec6987154"}
 */
function svy_utl_getDateFromWeekYear(_year, _week, _day) {
	var _firstYearDay = new Date(_year, 0);
	var _firstDay = _firstYearDay.getDay();

	if (_firstDay > 4) {
		_firstDay -= 7;
	}
	_firstDay--;
	_firstDay--;

	var _date = new Date(_year, 0)
	_date.setDate( (_week - 1) * 7 + _day - _firstDay);

	return _date

}

/**
 *	Returns the type of an element
 * @deprecated will be removed in version 5. Use {@link #JSForm#getComponent()} instead
 * @author Paul Bakker
 * @since 2006-11-04
 * @param {String} _form name of the form
 * @param {String} _element name of the element
 * @return  {String} type of the element
 *
 * @properties={typeid:24,uuid:"c4b6bb98-2dd9-4d52-83b6-f9e4530b6fbe"}
 */
function svy_utl_getElementType(_form, _element) {
	if (!_form || !_element) {
		application.output('utl_getElementType called without mandatory params', LOGGINGLEVEL.ERROR);
		return 'false';
	}
	if (forms[_form].elements[_element].getElementType) {
		return forms[_form].elements[_element].getElementType();
	} else if (forms[_form].elements[_element].getUIClassID) {
		return forms[_form].elements[_element].getUIClassID();
	} else {
		try {
			//	var packageName = stringRep.substring(0,stringRep.indexOf('[',0));
			//	return packageName.substr(packageName.lastIndexOf('.')+1);
		} catch (e) {
			application.output('utl_getElementType: cant determine element type: ' + _form + '.' + _element, LOGGINGLEVEL.ERROR);
			return 'false';
		}
	}
	return 'false'
}

/**
 * The method trigger form name _only if_ no form is passed otherwise returns the form name passed
 * @deprecated will be removed in version 5. Is used, upgrade code to properly work with events
 * @author Unknown
 * @since Unknown
 * @param {String} [_FormName] name of the form
 * @param {JSEvent} [_event]
 * @return  {String} _formname name of the form
 *
 * @properties={typeid:24,uuid:"d7609d07-3054-4f23-a11c-df7cac42a6f5"}
 */
function svy_utl_getMethodTriggerFormName(_FormName, _event) {
	if (!forms[_FormName]) {

		_FormName = _event.getFormName();
	}

	return _FormName;
}

/**
 *	The row identifier for the table of vFormName from globals.svy_utl_arrayRowIdentifiers
 * @deprecated Will be removed in version 5.
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @param {String} _FormName name of the form
 * @return  {String} _RowIdentifier
 *
 * @properties={typeid:24,uuid:"adf39cf9-ee3c-4c39-bfed-6a082f2f7a0b"}
 */
function svy_utl_getRowIdentifierName(_FormName) {
	var _RowIdentifier;


	// only execute if form is valid
	if (forms[_FormName]) {

		// get server and table name on form
		
		var _dataSource = forms[_FormName].controller.getDataSource();

		// make sure there's a table assigned to form
		if (_dataSource) {

			var jsTable = databaseManager.getTable(_dataSource)
			_RowIdentifier = jsTable.getRowIdentifierColumnNames()[0]

		} else {

			// no table assigned to form debugger output
			application.output('[svy_utl_getRowIdentifiername] invalid for form:' + _FormName, LOGGINGLEVEL.ERROR);
		}
	}

	return _RowIdentifier;
}

/**
 *	Currently selected row identifier value on form
 * @deprecated Will be removed in version 5. Use {@link #JSRecord#getPKS()} instead
 * @SuppressWarnings(deprecated)
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @param {String} _FormName name of the form
 * @return  {String} Row Identifier Value
 *
 * @properties={typeid:24,uuid:"df15d957-7cbe-437c-86a6-924527e641ae"}
 */
function svy_utl_getRowIdentifierValue(_FormName) {
	var _RowIdentifier = globals.svy_utl_getRowIdentifierName(_FormName);
	return forms[_FormName][_RowIdentifier];

}

/**
 *	Get a property from the user properties
 *
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @param {String} _propertyName name of the property
 * @param {String} [_user_id] if user is not logged in yet (login module)
 * @return  {Object} value of the property
 *
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyProperties#getPropertyValue()}
 *
 * @properties={typeid:24,uuid:"c4097b79-2c5f-4f29-912c-b3f633baed51"}
 */
function svy_utl_getUserProperty(_propertyName, _user_id) {
	_propertyName = _propertyName.replace(/\s/g,"_");	
	return scopes.svyProperties.getPropertyValue(_propertyName);
}

/**
 *	Gives the weeknr of a date
 *
 * @author Vincent Schuurhof
 * @since 2011-04-19
 * @param {Date} date
 * @return {Number} weekNumber
 *
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyDateUtils#getWeekOfYear()}
 *
 * @properties={typeid:24,uuid:"35aafabc-f9f0-49ea-962e-ac6b3687d6c3"}
 */
function svy_utl_getWeekNr(date) {
	return scopes.modUtils$date.getWeekOfYear(date);
}

/**
 *	Checks if column does exist in table connected to form
 * @deprecated Will be removed in version 5. 
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @param {String} _form name of the form
 * @param {String} _column_name  name of the column
 * @return  {Boolean} true if column exist in table
 *
 * @properties={typeid:24,uuid:"f65ee908-6da8-41fd-bffe-8ee50aa94592"}
 */
function svy_utl_hasFormColumn(_form, _column_name) {
	_column_name = _column_name.toLowerCase()

	var _jstable = databaseManager.getTable(forms[_form].controller.getDataSource());
	var _columns = _jstable.getColumnNames()

	for (var i = 0; i < _columns.length; i++) {
		if (_columns[i].toLowerCase() == _column_name) {
			return true;
		}
	}

	return false
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#modUtils$UI#initSplitPane()} instead
 * @SuppressWarnings(deprecated)
 * 
 * @properties={typeid:24,uuid:"156A98C1-F885-463C-92B0-F77CDE9842D0"}
 */
function svy_utl_initSplitTab(_form, _element, _resizeWeight, _dividerLocation, _dividerSize, _continuousLayout, _bgColor) {
	if (!_form || !_element) {
		return
	}
	/** @type {RuntimeSplitPane} */
	var _splitTab = forms[_form].elements[_element]
	if (_resizeWeight) _splitTab.resizeWeight = _resizeWeight
	if (_dividerLocation) globals.svy_utl_setSplitTabDividerPosition(_form, _element, _dividerLocation)
	if (_dividerSize)_splitTab.dividerSize = _dividerSize
	if (_continuousLayout)_splitTab.continuousLayout = _continuousLayout
	if (_bgColor) 
	{
		_splitTab.bgcolor = _bgColor
	}
	else
	{
		_splitTab.transparent = true
	}
}

/**
 *	Checks if email address is valid
 * @deprecated Use {@link #plugins#mail#isValidEmailAddress()} instead
 * 
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @param {String} _adr emailaddress
 * @return  {Boolean} true if emailaddress is valid
 *
 * @properties={typeid:24,uuid:"d7227a60-29cf-4af2-ab66-5a4a18ef44d6"}
 */
function svy_utl_isEmailAddressValid(_adr) {
	//separate < > if present
	var _re = /^[^<]*</;
	var _result1 = _adr.replace(_re, "");
	_re = />[^>]*$/;
	var _result2 = _result1.replace(_re, "");
	_re = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	var _found = _result2.match(_re);
	if (_found == null) {
		return false;
	} else {
		return true;
	}
}

/**
 *	Checks if client is java client
 * @deprecated Will be removed in version 5. Use {@link #scopes#svySystem#isSwingClient()} instead
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @return  {Boolean} true if java client
 *
 * @properties={typeid:24,uuid:"d3adef68-adf4-447d-9206-ccaea2704b9d"}
 */
function svy_utl_isJavaClient() {
	if (application.getApplicationType() == 5/*WebClient*/ ||
	application.getApplicationType() == 4 /*Headless Client*/) {
		return false;
	}
	return true;
}

/**
 *	Determine if operating system is Mac or Windows
 *
 * @deprecated Will be removed in version 5. Use {@link #scopes#svySystem#isOSXPlatform()} instead
 * 
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @return  {Boolean} true=mac, false=windows
 *
 * @properties={typeid:24,uuid:"90c41fe6-70f6-4a68-bf94-0109f3783294"}
 */
function svy_utl_isMacOS() {
	if (utils.stringMiddle(application.getOSName(), 1, 7) == "Windows") {
		return false
	} else {
		return true
	}
}

/**
 * Returns first instance of array index where searchValue is in arrayToSearch
 * @deprecated will be removed in version 5. Use {@link #Array#indexof()} instead
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @param {Array} _Array arrayToSearch
 * @param {Number} _Value number to search for
 * @return  {Number} index, -1 if not in array
 *
 * @properties={typeid:24,uuid:"d8059047-837a-48bb-84ef-0468b732dbbb"}
 */
function svy_utl_isValueInArrayNumber(_Array, _Value) {
	var _Index = -1;

	if (_Array != undefined && _Value != undefined) {

		var _ArrayLength = _Array.length;

		// search array
		for (var i = 0; i < _ArrayLength; i++) {

			var _ArrayCell = _Array[i];

			// does value match array cell
			if (_ArrayCell == _Value) {

				_Index = i;
				break;
			}
		}
	}

	return _Index;
}

/**
 *	Returns first instance of array index where searchValue is in arrayToSearch
 *  You can also use Array functions for this, this method is to support old code.
 *
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @param {Array} _Array arrayToSearch
 * @param {String} _Value Sring to search for
 * @param {Boolean} _IsCaseSensitive
 * @return  {Number} index, -1 if not in array
 *
 * @properties={typeid:24,uuid:"c3ad8fbd-d1ad-4b25-96a0-760d1b160eb6"}
 */
function svy_utl_isValueInArrayString(_Array, _Value, _IsCaseSensitive) {
	var _Index;

	if (_Array != undefined && _Value != undefined) {
		var _ArrayLength = _Array.length;

		// default case sensitivity is false
		if (_IsCaseSensitive != true) {
			_IsCaseSensitive = false;
		}

		// search array
		for (var i = 0; i < _ArrayLength; i++) {
			/** @type {String} */
			var _ArrayCell = _Array[i];

			// check for case sensitivity
			if (!_IsCaseSensitive) {
				_ArrayCell = _ArrayCell.toLowerCase();
				_Value = _Value.toLowerCase();
			}

			// does value match array cell
			if (_ArrayCell == _Value) {
				_Index = i;
				break;
			}
		}
	}

	return _Index;
}

/**
 *	Creates a object from an array
 *
 * @author Paul Bakker
 * @since 2006-11-05
 * @param {Array} JSArray
 * @return  {Object} ObjectArray
 *
 * @properties={typeid:24,uuid:"f59127d5-7aa1-40db-9994-c9b6034605d4"}
 */
function svy_utl_JSArray2ObjectArray(JSArray) {
	if (!JSArray) return null;

	var ObjectArray = new Object();
	for (var i = 0; i < JSArray.length; i++) {
		ObjectArray[JSArray[i]] = '';
	}

	return ObjectArray;
}

/**
 * @deprecated Will be removed in version 5
 * Merges sequentialdataset
 *
 * @author Paul Bakker
 * @since 2006-11-05
 * @param {JSDataSet} dataset
 * @param {Number} ident_column
 * @param {Number} concat_column
 * @return  {JSDataSet} dataset
 *
 * @properties={typeid:24,uuid:"45e82d29-37c9-4388-88e0-0ab9d688da48"}
 */
function svy_utl_mergeSequentialDataSet(dataset, ident_column, concat_column) {
	if (!dataset) return null;
	if (dataset.getMaxColumnIndex() < ident_column ||
	dataset.getMaxColumnIndex() < concat_column) return dataset;

	for (var i = 1; i <= dataset.getMaxRowIndex(); i++) {
		while (dataset.getValue(i, ident_column) == dataset.getValue(i + 1, ident_column) &&
		i < dataset.getMaxRowIndex()) {
			dataset.setValue(i, concat_column, dataset.getValue(i, concat_column) + dataset.getValue(i + 1, concat_column));
			dataset.removeRow(i + 1);
		}
	}
	return dataset;
}

/**
 *	Makes a array from a object
 *
 * @author Paul Bakker
 * @since 2006-11-05
 * @param {Object} ObjectArray
 * @return  {Array} JSArray
 *
 * @properties={typeid:24,uuid:"ff264069-247f-488d-81d4-1b39487018e4"}
 */
function svy_utl_objectArray2JSArray(ObjectArray) {
	if (!ObjectArray) return null;

	var JSArray = new Array();
	var count = 0;
	for (var i in ObjectArray) {
		JSArray[count] = i;
		count += 1;
	}

	return JSArray;
}

/**
 * Opens a file from the file system in the OS default way. (.txt with editor, .pdf with pdf reader, .doc with word, etc.)
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyIO#openFileWithDefaultViewer()} instead
 * @author Joas de Haan
 * @since 2011-08-11
 * @param {plugins.file.JSFile} _jsFile The file that will be opened
 *
 * @properties={typeid:24,uuid:"FB669EA5-8E36-4E12-81A5-E511B44E8C1B"}
 */
function svy_utl_openFileInOS(_jsFile) {
	scopes.modUtils$IO.openFileWithDefaultViewer(_jsFile);
}

/**
 * @deprecated Will be removed in version 5. Too specific and currently not used. 
 *	Opens a file from database
 * @SuppressWarnings(deprecated)
 * 
 * @author Sanneke Aleman
 * @since 2006-11-05
 * @param {String} _name filename
 * @param {String} _file_ext fileextention
 * @param {String} _text  text (you have to give this or 3 blob)
 * @param {Array<byte>} _blob  blob (you have to give this or 2 text)
 * @return  none
 *
 * @properties={typeid:24,uuid:"31a76c4e-b9c7-4595-8bfa-b4696dbd114a"}
 */
function svy_utl_open_file(_name, _file_ext, _text, _blob) {

	if (utils.stringPatternCount(_file_ext, '.') < 1) {
		_file_ext = '.' + _file_ext
	}
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		plugins.file.writeFile(_name , _blob)
		return
	}
	//open document
	var _tempFile = plugins.file.createTempFile(_name, _file_ext)

	if (_blob == undefined) {
		plugins.file.writeTXTFile(_tempFile, _text)
	} else {
		plugins.file.writeFile(_tempFile, _blob)
	}

	//save tempfile path in global for saving check
	globals.svy_utl_temp_file_path = _tempFile.getPath()

	scopes.modUtils$IO.openFileWithDefaultViewer(_tempFile)
}

/**
 * @deprecated Will be removed in version 5. Too specific and currently not used
 * 
 * @param {Array<byte>} _blob
 * @param {String} _name
 * @return {plugins.file.JSFile} path of the file
 * @properties={typeid:24,uuid:"f932c44e-f280-412e-974f-8f59b1f4c939"}
 */
function svy_utl_writeTempFile(_blob,_name)
{
	var _prefix = _name.replace(/\.\w*$/, "");
 	var _suffix = _name.replace(/^\w*/, "");
	var _tmp_file = plugins.file.createTempFile(_prefix,_suffix)
	plugins.file.writeFile(_tmp_file, _blob,utils.stringReplace(_suffix,'.',''))
	return _tmp_file
}

/**
 * @deprecated Will be removed in version 5. Bad practise, use prepared statements instead
 * Combines query and arguments into 1 string
 *
 * @author Joas de Haan
 * @since 2011-07-11
 * @param {String} _query
 * @param {Array} _args
 * @return {String} _query including arguments
 *
 * @properties={typeid:24,uuid:"8E03B3C9-D178-41A2-94A2-CEE2A129F033"}
 */
function sql(_query, _args) {
	if (_args == null) {
		return _query;
	}

	if (_args.length != utils.stringPatternCount(_query, "?")) {
		return "-ERROR- args: " + _args.length + "; query: " + utils.stringPatternCount(_query, "?") + ";";
	}

	var _val;

	for (var i = 0; i < _args.length; i++) {
		switch (typeof _args[i]) {
		case "string":
			_val = "'" + _args[i] + "'";
			break;
		case "object": //date
			/** @type {Date} */
			var _date = _args[i]
			_val = "'" + utils.dateFormat(_date, "yyyy-MM-dd HH:mm:ss") + "'";
			break;
		default: //number, integer
			_val = _args[i];
		}
		_query = _query.replace(/\?{1}/, _val);
	}
	
	//format the query a little
	_query = _query.replace(/\t+/g, " ").replace(/(FROM|WHERE|AND|OR|GROUP|ORDER)/g, "\n$1").replace(/\n+/g, "\n");

	return _query;
}

/**
 * Combines query and arguments into 1 string
 *
 * @deprecated Will be removed in version 5. Bad practise, use prepared statements instead
 * @SuppressWarnings(deprecated)
 * 
 * @author Joas de Haan
 * @since 2006-11-05
 * @param {String} _query
 * @param {Array} _args
 * @return {String} _query including arguments
 *
 * @properties={typeid:24,uuid:"6ede5bda-9179-41d3-ae1d-264f01f05ec2"}
 */
function svy_utl_queryParser(_query, _args) {
	return sql(_query, _args);
}

/**
 * @deprecated Will be removed in version 5. Use {@link #plugins#window#getToolbarNames()#forEach(function(value){application.setToolbarVisible(value, state);})} instead
 * Sets the visibility of all the toolbars at once
 *
 * @param {Boolean} state
 * 
 * @properties={typeid:24,uuid:"8a5a5830-c8af-4f2d-a6d2-23f713e61512"}
 */
function svy_utl_setAllToolbarsVisibility(state) {
	plugins.window.getToolbarNames().forEach(function(value){
		application.setToolbarVisible(value, state);
	})
}

/**
 * @deprecated Will be removed in version 5. Not in use anymore
 * @SuppressWarnings(deprecated)
 * 
 *	 Creates an array map of the solution's row identifiers
 *		map: serverName.tableName=rowIdentifierColumnName
 *		stored in globals.svy_utl_arrayRowIdentifiers
 * @author Paul Bakker
 * @since 2007-06-27
 *
 * @properties={typeid:24,uuid:"8b045859-6526-497a-8e9b-f87bafdda069"}
 */
function svy_utl_setRowIdentifierArray() {
	globals.svy_utl_arrayRowIdentifiers = new Array;
	var vPrimaryKeyCount = 0;

	// get all servers used with solution
	var vSolutionServerNames = databaseManager.getServerNames();
	var vSolutionServerCount = vSolutionServerNames.length;

	// for each server name
	for (var i = 0; i < vSolutionServerCount; i++) {
		// get server name
		var vServerName = vSolutionServerNames[i];

		// get table names for server
		var vTableNames = databaseManager.getTableNames(vServerName);
		var vTableCount = vTableNames.length;

		// for each table name
		for (var j = 0; j < vTableCount; j++) {
			// get the JS Table
			var vJSTable = databaseManager.getTable(vServerName, vTableNames[j]);

			// get the column names for the JS Table
			var vColumnNames = vJSTable.getColumnNames();
			var vColumnCount = vColumnNames.length;

			// for each column name
			for (var k = 0; k < vColumnCount; k++) {
				// get the JS Column
				var vJSColumn = vJSTable.getColumn(vColumnNames[k]);

				// is the column the row identifier?
				if (vJSColumn.getRowIdentifierType()!= JSColumn.NONE) {
					globals.svy_utl_arrayRowIdentifiers[vSolutionServerNames[i] + '.' + vTableNames[j]] = vColumnNames[k];
					vPrimaryKeyCount = vPrimaryKeyCount + 1;
					break;
				}

			} // end for each column
		} // end for each table
	} // end for each server

}

/**
 *	 Selects a record
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyData#()} instead
 * @author Unknow
 * @since Unknow
 * @param {String} vWhichRecord (next|prev|first|last)
 * @param {String} [vFormName] name of the form
 * @return none
 *
 * @properties={typeid:24,uuid:"c05b3cc9-8b27-4ffb-b749-271eba39002f"}
 */
function svy_utl_setSelectedIndex(vWhichRecord, vFormName) {
	
	if (vWhichRecord != undefined) {

		// get current record index
		var vNewIndex = forms[vFormName].controller.getSelectedIndex();

		// get new index of selected record
		switch (vWhichRecord) {
		case 'next':
			vNewIndex = vNewIndex + 1;
			break;

		case 'prev':
			vNewIndex = vNewIndex - 1;
			break;

		case 'first':
			vNewIndex = 1;
			break;

		case 'last':
			vNewIndex = databaseManager.getFoundSetCount(forms[vFormName].foundset)

			break;
		}

		// go to record
		forms[vFormName].foundset.getRecord(vNewIndex)
		forms[vFormName].controller.setSelectedIndex(vNewIndex);

		// get primary key of selected record
		//vRowIdentifierValue = globals.svy_utl_getRowIdentifierValue(vFormName);

	} else {

		application.output('[scCore_setSelectedRecord] invalid index choice:' + vWhichRecord, LOGGINGLEVEL.ERROR);
	}

	//return vRowIdentifierValue;
}

/**
 *	 Goes to first record in foundset on a form
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyData#selectFirstRecord()} instead
 * @SuppressWarnings(deprecated)
 * 
 * @author Unknow
 * @since Unknow
 * @param {String} [vFormName] name of the form
 * @return none
 *
 * @properties={typeid:24,uuid:"11e1cd63-66d9-44aa-bd17-7851ff41aeb0"}
 */
function svy_utl_setSelectedIndexFirst(vFormName) {
	return globals.svy_utl_setSelectedIndex("first", vFormName);
}

/**
 *	 Goes to last record in foundset on a form, the actual last record, not 200
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyData#selectLasstRecord()} instead
 * @SuppressWarnings(deprecated)
 *
 * @author Unknow
 * @since Unknow
 * @param {String} [vFormName] name of the form
 * @return row identifier for the newly selected record
 *
 * @properties={typeid:24,uuid:"363ff333-c067-495e-9816-4d2852ca2774"}
 */
function svy_utl_setSelectedIndexLast(vFormName) {

	return globals.svy_utl_setSelectedIndex("last", vFormName);
}

/**
 *	 Goes to next record in foundset on a form
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyData#selectNextRecord()} instead
 * @SuppressWarnings(deprecated)
 *
 * @author Unknow
 * @since Unknow
 * @param {String} [vFormName] name of the form
 * @return row identifier for the newly selected record
 *
 * @properties={typeid:24,uuid:"3b7e8788-65af-4de2-ad52-4ede18dd5ce2"}
 */
function svy_utl_setSelectedIndexNext(vFormName) {
	return globals.svy_utl_setSelectedIndex("next", vFormName);
}

/**
 *	 Goes to previous record in foundset on a form
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyData#selectPreviousRecord()} instead
 * @SuppressWarnings(deprecated)
 *
 * @author Unknow
 * @since Unknow
 * @param {String} [vFormName] name of the form
 * @return row identifier for the newly selected record
 *
 * @properties={typeid:24,uuid:"321b31ab-c897-4ef2-a9bf-6146b7e80b12"}
 */
function svy_utl_setSelectedIndexPrevious(vFormName) {

	return globals.svy_utl_setSelectedIndex("prev", vFormName);
}

/**
 *	 Sets a user property
 *
 * @author  Paul Bakker
 * @since 2007-11-09
 * @param {String} _propertyName
 * @param {String} _propertyValue
 * @param {String|UUID} [_user_id] if user is not logged in yet (login module)
 * @return none
 *
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyProperties#setUserProperty()}
 *
 * @properties={typeid:24,uuid:"d484fcf3-0675-45cc-887d-9ec4412e52e1"}
 */
function svy_utl_setUserProperty(_propertyName, _propertyValue, _user_id) {
	
	_propertyName = _propertyName.replace(/\s/g,"_");

	if (!_propertyName || (!_propertyValue == null && _propertyValue != 0)) {
		application.output('saveUserProperty called without mandatory params', LOGGINGLEVEL.ERROR);
		return;
	}
	scopes.svyProperties.setUserProperty(_propertyName, _propertyValue);
}

/**
 *	This Function gives you the type of a object
 *
 * @author  adBloks
 * @since -
 * @param {Array} oObject
 * @return none
 *
 * @properties={typeid:24,uuid:"6f91ba30-a617-43e4-8c27-378276e0e4e2"}
 */
function svy_utl_getTypeOf(oObject) {
	var sTemp;

	if (oObject == undefined) return 'Undefined';

	try {
		if (oObject.toString) {
			sTemp = (oObject.toString());

			if (sTemp) {
				sTemp = sTemp.split(':')[0];

				if (sTemp && sTemp == 'JSDataSet') return 'JSDataSet';
			}
		}
	} catch (e) {
		/*do nothing*/
	}

	if (oObject instanceof Array) return 'Array';

	//oObject instanceof Date
	if (oObject['__proto__'] == 'Invalid Date') return 'Date';

	/** @type {String} */
	var sType;

	try {
		sType = typeof oObject;
	} catch (e) {
		sType = Object.prototype.toString.apply(this,oObject);
		sType = sType.substring(8, (sType.length - 1));
	}

	//If it is of type 'object' find the class of of object.
	if (sType == "object") {
		sType = Object.prototype.toString.apply(this,oObject)
		sType = sType.substring(8, (sType.length - 1));
	}

	return sType;

}

/**
 *	Creates html representation of foundset, dataset, array, record or object and shows it in a browser
 *
 * @author  Joas de Haan
 * @since 19-06-2009
 * @param {JSFoundset|JSDataSet|JSRecord|Array|Object} _object
 * @param {Number} [_limit]
 * @return {String} Error/succes message
 *
 * @properties={typeid:24,uuid:"af628904-b23d-492a-9096-7b95138bf624"}
 */
function html(_object, _limit) {
	//Joas 2009-06-15
	//Creates html representation of foundset, dataset, array, record or object and shows it in a browser.
	//Very useful when debugging, hence the short methodname.
	
	var _type
	/** @type {JSFoundSet} */
	var _fs 
	/** @type {JSDataSet} */
	var _ds
	/** @type {Array} */
	var _ar
	/** @type {JSRecord} */
	var _rec
	/** @type {Object} */
	var _obj;

	if (_object instanceof JSFoundset) {
		_type = "fs";
		_fs = _object;
	} else if (_object instanceof JSDataSet) {
		_type = "ds";
		_ds = _object;
	} else if (_object instanceof JSRecord) {
		_type = "rec";
		_rec = _object;
	} else if (_object.concat) { //array
		_type = "ar";
		_ar = _object;
	} else if (typeof _object == "object"){
		_type = "obj";
		_obj = _object;
	} else {
		return "HTML: Failed, provide foundset, dataset, record, array or object";
	}
	
	var _color = "";
	var _c1 = "#ffffff";
	var _c2 = "#EDF3FE";

	var _html = "<html><head><title></title><style type='text/css'>\
           .text{font-family:Tahoma; font-size:10pt;}\
           .header{font-family:Tahoma; font-size:10pt; font-style:bold}\
           .index{font-family:Tahoma; font-size:10pt; font-style:italic; color:#999999}\
           .indexheader{font-family:Tahoma; font-size:10pt; font-style:italic; color:#777777}\
           </style></head><body>\
           <table border='0' bordercolor='#eaf4f0'> \
           <tr bgcolor='#dddddd'><td class='indexheader' valign='bottom' width=50><b>Index</b></td>";

	var _max
	/** @type {Number} */
	var	i
	/** @type {Number} */
	var j;
	var _title = "";
	var _headers
	if (_type == "fs") {
		//Create headers
		var _table = databaseManager.getTable(_fs);
		_headers = _table.getColumnNames();
		_title = "FoundSet - " + databaseManager.getDataSourceTableName(_fs.getDataSource());
		for (i = 0; i < _headers.length; i++) {
			_html += "<td class='text' valign='bottom'><b>" + _headers[i] + "</b></td>"
		}
		_html += "</tr>";
		_max = _fs.getSize();
		if (_max == 200) {
			_max = databaseManager.getFoundSetCount(_fs);
		}
		if (_limit) {
			_max = _max > _limit ? _limit : _max;
		}
		for (i = 1; i <= _max; i++) {
			_color = (i % 2 == 0) ? _c2 : _c1;
			_rec = _fs.getRecord(i);
			_html += "<tr bgcolor=" + _color + "><td class='index' valign='top' align='left'>" + i + "</td>";
			for (j = 0; j < _headers.length; j++) {
				_html += "<td class='text' valign='top' align='left'>" + _rec[_headers[j]] + "</td>";
				//Maybe format dates and numbers here
			}
			_html += "</tr>";
		}
	} else if (_type == "ds") {
		_title = "DataSet";

		if (_ds.getException() != null) {
			_html += _ds.getException().getMessage();
			_title += " -- Exception!";
		} else {
			//Create headers
			_headers = [];

			for (i = 1; i <= _ds.getMaxColumnIndex(); i++) {
				_html += "<td class='t' valign='bottom'><b>" + _ds.getColumnName(i) + "</b></td>"
				_headers.push(_ds.getColumnName(i));
			}
			_title += " - " + _headers.join(", ");
			_html += "</tr>";
			_max = _ds.getMaxRowIndex();
            if (_limit) {
            	_max = _max > _limit ? _limit : _max;
            }
			for (i = 1; i <= _max; i++) {
				_color = (i % 2 == 0) ? _c2 : _c1;
				_html += "<tr bgcolor=" + _color + "><td class='index' valign='top' align='left'>" + i + "</td>"
				for (j = 0; j < _headers.length; j++) {
					_html += "<td class='text' valign='top' align='left'>" + _ds.getValue(i, j + 1) + "</td>";
					//Maybe format dates and numbers here
				}
                _html += "</tr>";
                if (i % 100 == 0) {
					application.output("\thtml line: " + i);
                }
			}
		}
	} else if (_type == "ar") {
		_html += "<td class='text' valign='bottom' width=200><b>Value</b></td></tr>";
		_max = _ar.length;
		_title = "Array - " + _ar.slice(0, 10).join(", ");
		if (_max > 10) {
			_title += "..."
		}
		for (i = 0; i < _max; i++) {
			_color = (i % 2 == 0) ? _c2 : _c1;
			_html += "<tr bgcolor=" + _color + "><td class='index' valign='top' align='left'>" + i + "</td><td class='text' valign='top' align='left'>" + _ar[i] + "</td></tr>";
		}
	} else if (_type == "rec") {
		_html += "<td class='text' valign='bottom' width=200><b>Value</b></td></tr>";
		_title = "Record - ";
		j = 0;
		for (i in _rec) {
			if (typeof _rec[i] == "function") {
				continue;
			}
			_color = (j % 2 == 0) ? _c2 : _c1;
			_html += "<tr bgcolor=" + _color + "><td class='index' valign='top' align='left'>" + i + "</td><td class='text' valign='top' align='left'>" + _rec[i] + "</td></tr>";
			_title += i + ", ";
			j++;
		}
		_max = j;
	} else if (_type == "obj") {
		_html += "<td class='text' valign='bottom' width=200><b>Value</b></td></tr>";
		_title = "Object - ";
		j = 0;
		for (i in _obj) {
			_color = (j % 2 == 0) ? _c2 : _c1;
			_html += "<tr bgcolor=" + _color + "><td class='index' valign='top' align='left'>" + i + "</td><td class='text' valign='top' align='left'>" + _obj[i] + "</td></tr>";
			_title += i + ", ";
			j++;
		}
		_max = j;
	}

	_html += "</table></body></html>";
	_html = _html.replace(/<body>/, "<body><div class='text'><b>Lines:</b> " + _max + "</div><br />");
	_html = _html.replace(/<title>/, "<title>" + _title);
	var _file = plugins.file.createTempFile("servoy_html_", ".htm");
	var _succes = plugins.file.writeTXTFile(_file, _html);
	if (!_succes) {
		plugins.dialogs.showErrorDialog("ERROR", "Writing to " + _file + " FAILED", "OK");
		return "HTML: Writing to " + _file + " FAILED";
	}
	if (/Windows/.test(application.getOSName())) {
		application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', _file.getAbsolutePath()]);
	} else if (/Mac/.test(application.getOSName())) {
		application.executeProgram('open', [_file.getAbsolutePath()]);
	} else {
		application.setClipboardContent(_file.getAbsolutePath());
		plugins.dialogs.showWarningDialog("Show as HTML", "Open this file in a browser (path also copied to clipboard):\n" + _file, "OK");
	}
	return "HTML: Successful"
}

/**
 * Return the begin and end position of a form part
 * @deprecated Will be removed in version 5. Use {@link JSForm#getPart()#getPartYOffset()} - {@link JSForm#getPart()#height} and  {@link JSForm#getPart()#height} instead. End position returned was incorrect anyway
 * 
 * @author  Sanneke Aleman
 * @since 16-11-2009
 * @param {String} _formname name of the form
 * @param {Number} _part [JSPart.TITLE_HEADER, JSPart.HEADER, JSPart.LEADING_GRAND_SUMMARY, JSPart.LEADING_SUBSUMMARY, JSPart.BODY, JSPart.TRAILING_SUBSUMMARY, JSPart.TRAILING_GRAND_SUMMARY, JSPart.FOOTER, JSPart.TITLE_FOOTER]
 * @return (JSObject) _formpart _formpart.begin with the begin position _formpart.end with the end position
 *
 *
 * @properties={typeid:24,uuid:"D48A4D55-C5F8-4B54-A358-FEF67A1DFAE3"}
 */
function svy_utl_getBeginEndPosFormPart(_formname, _part) {
	 /** @type {Array<Number>} */
	var allPartTypes = [JSPart.TITLE_HEADER, JSPart.HEADER, JSPart.LEADING_GRAND_SUMMARY, JSPart.LEADING_SUBSUMMARY, JSPart.BODY, JSPart.TRAILING_SUBSUMMARY, JSPart.TRAILING_GRAND_SUMMARY, JSPart.FOOTER, JSPart.TITLE_FOOTER]
	var _formpart = new Object()
	_formpart.begin = 0
	_formpart.end = 0
	 /** @type {Array<String>} */
	var _formArray = [_formname];

	getFormArray(_formname)

	function getFormArray(_formName) {
		/** @type {JSForm} */
		var JSFORM = solutionModel.getForm(_formName)
		if (JSFORM.extendsForm) {
			_formArray[_formArray.length] = JSFORM.extendsForm.name;
			getFormArray(JSFORM.extendsForm.name);
		}
	}

	for (var i = 0; i < allPartTypes.length; i++) {

		for (var j = 0; j < _formArray.length; j++) {
			var _JSForm = solutionModel.getForm(_formArray[j])
			var JSPART = _JSForm.getPart(allPartTypes[i])
			if (JSPART) {
				if (JSPART.getPartType())
					_formpart.begin = _formpart.end
				_formpart.end += JSPART.height
			}

		}
		if (allPartTypes[i] == _part) {
			return _formpart
		}
	}

	return _formpart

}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyUI#persistSplitPaneDividerPosition()} instead
 * @properties={typeid:24,uuid:"49DC4B35-8D2C-4580-9726-98863B5BAA4D"}
 */
function svy_utl_saveSplitTabDividerPosition(_form, _element) {
	if (!_form || !_element) {
		application.output('svy_utl_saveSplitTabDividerPosition called without mandatory params', LOGGINGLEVEL.ERROR);
		return;
	}
	var pos = forms[_form].elements[_element].dividerLocation;
	scopes.svyProperties.setUserProperty(application.getSolutionName() + '.' + _form + '.' + _element + '.divLoc', pos)
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyUI#restoreSplitPaneDividerPosition()} instead
 * @properties={typeid:24,uuid:"2928F288-1F0D-4AB2-BDDC-9D28C15C135F"}
 */
function svy_utl_setSplitTabDividerPosition(_form, _element, _pos) {
	if (!_form || !_element) {
		application.output('svy_utl_setSplitTabDividerPosition called without mandatory params', LOGGINGLEVEL.ERROR);
		return;
	}
	var pos = scopes.svyProperties.getPropertyValue(application.getSolutionName() + '.' + _form + '.' + _element + '.divLoc');
	if (pos) {
		forms[_form].elements[_element]['dividerLocation'] = pos;
	} else if (_pos) {
		forms[_form].elements[_element]['dividerLocation'] = _pos;
	}
}

/**
 * get a record by giving a record id and table name
 * @deprecated Will be removed in verison 5. Use {@link #scopes#modUtils$data#getRecord} instead
 * @param {UUID|Number|String} _id
 * @param {String} _table
 * @param {String} _database
 * 
 * @return {JSRecord} _record Can be null
 * @properties={typeid:24,uuid:"806AD13C-5BED-4949-925E-DC73F3DA16D9"}
 */
function svy_utl_getRecord(_id, _table, _database) {
	//check arguments
	if(!_id || !_table) return null
	/** @type {JSFoundSet} */
	var _fs = databaseManager.getFoundSet(_database,_table)
	if (/[0-9A-Fa-f]{8}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{12}/.test(""+_id)) {
		_id = application.getUUID(""+ _id);
	}
	_fs.loadRecords(_id)
	
	//could not select the record
	if(_fs.getSize() != 1) return null
	
	return  _fs.getRecord(1)
}

/**
 * Return the a random generated password
 *
 * @author  Sanneke Aleman / Joas de Haan
 * @since 21-12-2009
 * @param {Number} _length Lenght of the password you want
 * @return {String} a password
 * 
 * @properties={typeid:24,uuid:"41D83473-8F59-45B5-BF32-E58556716434"}
 */
function svy_utl_getPassword(_length) {
	var _symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
	                '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	
	var _pw = "";
	var _random_position
	for (var i = 0; i < _length; i++) {
		_random_position = Math.round(Math.random() * (_symbols.length-1));
		_pw = _pw.concat(_symbols[_random_position]);
	}
	
	return _pw;
}

/**
 * Will check if it is a iPhone or Ipad, later there was also the need to know if it was a Android so that is added
 * @deprecated Will be removed in version 5. Use {@link #scopes#modUtils$system#isMobilePlatform()}, {@link #scopes#modUtils$system#isIOSPlatform()} or {@link #scopes#modUtils$system#isAndroidPlatform()}
 * @author  Sanneke Aleman
 * @since 23-01-2011
 * @return {Boolean} _isIphoneIpad
 * @properties={typeid:24,uuid:"B4847ECF-FEB0-417E-A43C-EA3A8C9CC30A"}
 */
function svy_utl_OsIsIphoneIpad() {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type {Packages.org.apache.wicket.protocol.http.request.WebClientInfo} */
		var _clientInfo = Packages.org.apache.wicket.Session.get().getClientInfo()
		var _userAgent = _clientInfo.getUserAgent()
		if(utils.stringPatternCount(_userAgent,'iPhone') || utils.stringPatternCount(_userAgent,'iPad') || utils.stringPatternCount(_userAgent,'Android'))
		{
			return true
		}
	}
	//no iphone/ipad/Android
	return false
}

/**
 * @deprecated Will be removed in version 5
 * @properties={typeid:24,uuid:"4A69AC5B-555C-4BAF-B0DD-C896370DC8C9"}
 */
function svy_utl_testAgent()
{
	/** @type {Packages.org.apache.wicket.protocol.http.request.WebClientInfo} */
	var _clientInfo = Packages.org.apache.wicket.Session.get().getClientInfo()
	var _userAgent = _clientInfo.getUserAgent()
	
	application.output('Agent is:'+_userAgent)
}

/**
 * Clones a form but also will make clone forms for the tabs on the forms.
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyUI#deepCopyJSForm} or {@link #scopes#svyUI#deepCopyRuntimeForm} instead
 * @SuppressWarnings(deprecated)
 * 
 * @param {String} _newFormName
 * @param {JSForm} _cloneFormObject
 * @param {String} [_prefix]
 * 
 * @return {String} New form name
 * 
 * @author  Sanneke Aleman
 * @since 23-02-2011
 * @properties={typeid:24,uuid:"5552552A-57FC-47CC-86D0-FFEEDAFB85D1"}
 */
function svy_utl_cloneForm(_newFormName, _cloneFormObject, _prefix) {
	var _newForm = solutionModel.cloneForm(_newFormName, _cloneFormObject)
	var _tabpanels = _newForm.getTabPanels()
	var _form;
	for (var i = 0; i < _tabpanels.length; i++) {
		var _tabs = _tabpanels[i].getTabs()
		for (var j = 0; j < _tabs.length; j++) {
			if (_prefix) {
				_form = _prefix + _tabs[j].containsForm.name.replace(_cloneFormObject.name, "");
			} else {
				_form = _tabs[j].containsForm.name + application.getUUID()
			}
			svy_utl_cloneForm(_form, _tabs[j].containsForm, _prefix);
			_tabs[j].containsForm = solutionModel.getForm(_form)
		}
	}
	return _newFormName
}

/**
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyUI#getJSFormHeight()} instead
 * @SuppressWarnings(deprecated)
 * @properties={typeid:24,uuid:"005C3B3A-EA21-4E9A-8A7E-23B3B3C56C7F"}
 */
function svy_utl_getFormHeight(_formName) {

	//Determine height and original height of the form using it's parts
	var _jsParts = svy_utl_getFormParts(_formName);
	var _height = 0;

	for (var j = 0; j < _jsParts.length; j++) {
		var _partHeight = _jsParts[j].height;
		if (_partHeight > _height) {
			_height = _partHeight;
		}
	}
	return _height
}

/**
 * @deprecated Will be removed in version 5. Use {@link #JSForm#getParts(true)} instead
 * Returns the parts of a form
 * These are its own parts plus possible inherited parts
 * 
 * @param {String} _formName
 * 
 * @return {Array<JSPart>}
 *
 * @author Joas
 * @since 2012-07-18
 * @properties={typeid:24,uuid:"357AD6BC-15FA-483C-9DE5-85A9CDAEB7A5"}
 */
function svy_utl_getFormParts(_formName) {
	var _jsForm = solutionModel.getForm(_formName);
	var _parts = _jsForm.getParts();
	var _parentParts, _partType;
	while (_jsForm.extendsForm) {
		_jsForm = _jsForm.extendsForm;
		_parentParts = _jsForm.getParts();
		
		//title header, header, body, footer, title footer can't be double
		parentLoop:
		for (var i = 0; i < _parentParts.length; i++) {
			_partType = _parentParts[i].getPartType();
			for (var j = 0; j < _parts.length; j++) {
				if ((_partType == JSPart.TITLE_HEADER || _partType == JSPart.HEADER || _partType == JSPart.BODY || _partType == JSPart.FOOTER || _partType == JSPart.TITLE_FOOTER) &&
					_partType == _parts[j].getPartType()
					) {
					_parentParts = _parentParts.slice(0,i).concat(_parentParts.slice(i+1));
					continue parentLoop;
				}
			}
		}
		
		
		if (_parentParts && _parentParts.length > 0) {
			_parts = _parentParts.concat(_parts);
		}
	}
	return _parts;
}

/**
 * @deprecated Will be removed in version 5. Use {@link #solutionModel#getForm(name)#width} instead
 * @properties={typeid:24,uuid:"4512B9ED-0D72-4763-B59A-46A8C39B0024"}
 */
function svy_utl_getFormWidth(_form) {
	//Determine width and original width of the form
	var _jsForm = solutionModel.getForm(_form);
	return _jsForm.width;
}

/**
 * @properties={typeid:24,uuid:"CE4B2C04-AA28-4BCE-8CA0-E5F2365A9FC5"}
 */
function svy_utl_setButtonsDisabled(_formName) {
	var _elements = forms[_formName].elements.allnames;
	var _element;

	for (var i = 0; i < _elements.length; i++) {
		_element = forms[_formName].elements[_elements[i]]
		if (_element.getElementType() == "LABEL") {
			_element.enabled = false;
		} else if (_element.getElementType() == "TABPANEL") {
			/** @type {RuntimeTabPanel} */
			var _tab = _element
			for (var j = 1; j <= _tab.getMaxTabIndex(); j++) {
				svy_utl_setButtonsDisabled(_tab.getTabFormNameAt(j));
			}
		}
	}
}

/**
 * Method to duplicate a record including its related records
 * 
 * @author Vincent Schuurhof
 * @since 2011-06-14
 * @param {JSFoundSet} _fs foundset
 * @param {Array} _relatedFsArray all relations for which copies of records should be created
 * 
 * @properties={typeid:24,uuid:"1803F2E5-B6CE-4AAA-9663-C4A5D288304D"}
 */
function svy_utl_duplicateRelatedRecords(_fs, _relatedFsArray) {
	var _dup = _fs.getRecord(_fs.duplicateRecord(false, false));

	for (var k = 0; k < _relatedFsArray.length; k++) {
		
		/** @type {JSFoundSet} */
		var _related = _fs[_relatedFsArray[k]];
		for (var i = 1; i <= _related.getSize(); i++) {
			var _relatedOriginal = _related.getRecord(i);
			var _relatedDub = _dup[_relatedFsArray[k]].getRecord(_dup[_relatedFsArray[k]].newRecord(false, false));
			databaseManager.copyMatchingFields(_relatedOriginal, _relatedDub);
		}
	}
}

/**
 * @deprecated will be removed in version 5. Use {@link #scopes#svyUI#getParentFormName()} instead
 * @param {JSDataSet} _context
 * @properties={typeid:24,uuid:"0246A651-8246-4F71-AEA7-142DCD786E84"}
 */
function svy_utl_getContextParentFormName(_context) {
	return _context.getValue(_context.getMaxRowIndex() - 1, 2);
}

/**
 * A method to get the prefix of framework forms, in case you want to overwrite them
 * 
 * @param {String} _nameForm
 * @properties={typeid:24,uuid:"1EF45242-D799-418E-9E96-0DCFE10C6E29"}
 */
function svy_utl_getFrameworkFormName(_nameForm) {
	var _oriPrefix 	= 'svy_';
	var _prefix = scopes.svyProperties.getPropertyValue('form_prefix');
	if (forms[_prefix + _nameForm]) {
		return _prefix + _nameForm;
	}
	else {
		return _oriPrefix + _nameForm;
}
}
