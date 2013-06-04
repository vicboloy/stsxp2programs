/**
 * @author Sanneke Aleman
 * @type {{pk:Number, fields:Array, data:Array, mode:String, returnField: String, returnForm: String, allowInBrowse:Boolean, fields:Array, data:Array}}
 *
 * @properties={typeid:35,uuid:"1E980381-12E8-4C89-BE1F-ACFC116CF824",variableType:-4}
 */
var solutionModelObject = null;

/**
 * @enum
 * 
 * NEW_COMMIT: Will commit the transaction in the lookup window
 * NEW_NO_COMMIT: will not commit the transaction in the lookup window
 * SHOW: shows the requested record (which has the edit button if needed) - pass the pk to use the correct record
 * EDIT_COMMIT: will commit the transaction in the lookup window - pass the pk to use the correct record
 * EDIT_NO_COMMIT: will not commit the transaction in the lookup window - pass the pk to use the correct record
 * ALLOW_IN_BROWSE: to allow in browse
 * @type {Object<String>}
 * @properties={typeid:35,uuid:"81215236-FC55-4912-9F50-AE7EAEC75C8C",variableType:-4}
 */
var MODES = {
	EDIT_NO_COMMIT: 'editnocommit',
	EDIT_COMMIT:    'editcommit',
	NEW_NO_COMMIT:  'newnocommit',
	NEW_COMMIT:     'newcommit',
	EXIT:           'exit',
	SHOW:           'show',
	LOOKUP:         'lookup'
};

/**
 * @param {String} mode See {@link MODES} for available values
 * @throws {String}
 * @properties={typeid:24,uuid:"EAB00849-F67F-4BE5-B612-7DE8F62596DC"}
 */
function setMode(mode) {
	if (!mode || MODES[mode] == undefined) throw 'Invalid parameter value' //Externalize exception to InvalidParameterValue exception
	if (!solutionModelObject) solutionModelObject = {}
	solutionModelObject.mode = mode
}

/**
 * @properties={typeid:24,uuid:"FD5798C2-0966-49F2-A734-FBBB5834FB61"}
 */
function getMode() {
	return solutionModelObject.mode
}

/**
 * @param {JSEvent} [event]
 * @param {String} returnField
 * @param {String} program
 * @param {String} [afterInsertMethodName]
 * @param {String} [methodToAddFoundsetFilters]
 * @param {Object} [params] See {@link MODES} for relevant constants
 * @param {Array} [svyNavFrRecursiveCall] if you want the lookup window to call a lookup window
 * @param {String} [requestedDataprovider] if you want to return the value of a different other then the PK
 * @param {Boolean} [allowInBrowse] if you want the method to run in browse
 * @param {String} [beforeInserMethodName] If method returns false insert will not happen - method will get the value of insert as argument
 * @param {String} [sortString] sort order of the foundset in the lookup
 * @param {String} [returnForm] if you want to specify the returnform (instead of taking the one from the event)
 * @param {String} [element] if you want to specify the element (instead of taking the one from the event)
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"332DD77C-C2B7-4167-9107-AFBE03760A7A"}
 */
function showLookupWindow(event, returnField, program, afterInsertMethodName, methodToAddFoundsetFilters, params, svyNavFrRecursiveCall, requestedDataprovider, allowInBrowse, beforeInserMethodName, sortString, returnForm, element) {
	if (!globals.nav.program[program]) {
		// user has no rights to the program of this lookup window
		return;
	}
	
	if (!element) {
		element = event.getElementName();
	}
	if (!returnForm) {
		returnForm = event.getFormName()
	}
	var _formNameColumn = 2;
	
	var _baseInstanceForm = returnForm;
	var _context = forms[_baseInstanceForm].controller.getFormContext();

	//FIXME: checking for a method is a very bad way to determine if a form is an instance of a super class
	while (!forms[_baseInstanceForm].getToolbarFormName && _context.getMaxRowIndex() > 1) { 
		//form is not an instance of svy_nav_base -> proceed with parent until instance of svy_nav_base is found or there is no parent anymore
		_baseInstanceForm = _context.getValue(_context.getMaxRowIndex()-1, _formNameColumn);
		_context.removeRow(_context.getMaxRowIndex());
	}
	if (!forms[_baseInstanceForm].getToolbarFormName) { 
		//FIXME: logging level
		application.output("Cannot determine the mode of the form, because the form and it's parents aren't extending svy_nav_base");
	}
	
	var _returnFormMode = 'browse'
	
	
	if(!forms[returnForm].controller.readOnly)
	 {
	  _returnFormMode = 'edit'
	 }
	else if(forms[_baseInstanceForm].getToolbarFormName && forms[_baseInstanceForm].getToolbarFormName() && forms[forms[_baseInstanceForm].getToolbarFormName()].vMode)
	{
		_returnFormMode = forms[forms[_baseInstanceForm].getToolbarFormName()].vMode;
	}
	else
	{
		//if it is a lookup window
		if(utils.stringPatternCount(_context.getValue(1,2), globals.nav.buttonbar_lookup_window) > 0)
		{
			_returnFormMode = forms[_context.getValue(1,2)].vMode
		}
			
	}
	
	/** @type {{description:String, btn_lookup_new:Number, btn_lookup_delete:Number, btn_lookup_show:Number, server_name:String, table_name:String, sort_value:String,filter:Array<{filter_value:String, filter_operator:String, filter_field_name:String}>}}*/
	var _programObject = globals.nav.program[program];
	
	//TODO: refactor this impl as it uses a global object to save state for a specific lookup window being shown, which means that things go wrong when trying to show a lookupwindow on two windows simultaniously
	// Store the parameter into a global object
	if (params) {
		solutionModelObject = params;
		solutionModelObject.mode = solutionModelObject.mode.toLowerCase();
		//extra variables to make sure we return the created record
		solutionModelObject.returnField = returnField
		solutionModelObject.returnForm = returnForm
	}
	else
	{
		solutionModelObject = null
	}

	
	if(solutionModelObject) //if solutionModelObject is used we need a fs for the showRecord method
	{
		//get the foundset for the lookup windows
		var _fs = databaseManager.getFoundSet(globals.nav.program[program].server_name,globals.nav.program[program].table_name)
		if (methodToAddFoundsetFilters && (globals[methodToAddFoundsetFilters] || forms[returnForm][methodToAddFoundsetFilters])) {
			if (globals[methodToAddFoundsetFilters]) {
				_fs = globals[methodToAddFoundsetFilters](_fs)
			} else {
				_fs = forms[returnForm][methodToAddFoundsetFilters](_fs)
			}
		}
		if (sortString) {
			_fs.sort(sortString,true);
		} else {
			_fs.sort(globals.nav.program[program].sort_value, true);
		}
		_fs.loadAllRecords()
	}
	
	if(solutionModelObject && solutionModelObject.allowInBrowse) allowInBrowse = true
	
	if (solutionModelObject && _returnFormMode == 'browse' && (solutionModelObject.mode == MODES.SHOW || solutionModelObject.mode == MODES.LOOKUP)) {
		// Allowing "show" and "lookup" mode to run in browse
		showRecord(_fs, program)
		return

	} else if (_returnFormMode == 'browse' &&(!globals.nav.program[globals.nav_program_name] ||  !globals.nav.program[globals.nav_program_name].noreadonly)  && !allowInBrowse) {
		return // not allowed in browse mode
	}
	
	if(solutionModelObject && (solutionModelObject.mode == MODES.NEW_COMMIT || solutionModelObject.mode == MODES.NEW_NO_COMMIT))
	{
		if (security.canInsert(_fs.getDataSource()) && globals.nav.program[program].btn_lookup_new == 1) {
			showRecord(_fs, program, true, null, afterInsertMethodName) //also new record
		}
		
		return
	}
	else if (solutionModelObject)
	{
		showRecord(_fs, program)
		return
	}

	if (!_programObject) {
		//program is not in object, maybe user has no rights, or program does not exist
		return
	}

	//create new instance of the popup window
	var _UUID = application.getUUID()
	var _lookupWindow = globals.nav.lookupWindowFormName;
	
	if (forms['svy_nav_fr_lookup_window_custom']) {
		_lookupWindow =  'svy_nav_fr_lookup_window_custom';
	}
	
	if (!_lookupWindow) {
		if (globals.nav.mainFormName == "svy_nav_fr_p_main") {
			_lookupWindow = "svy_nav_fr_lookup_window_pv";
		} else {
			_lookupWindow = "svy_nav_fr_lookup_window";
		}
	}
	
	var _style = solutionModel.getForm(_lookupWindow).styleName;
	
	var _formname = _lookupWindow+ _UUID
	
	
	
	application.createNewFormInstance(_lookupWindow,_formname)
	
	//create a form with the right fields on it
	
	//lookup the fields
	var _formProgram = program + _UUID
	var _jsForm = solutionModel.newForm(_formProgram,'db:/'+_programObject.server_name+'/'+_programObject.table_name,_style,false,400,400)
	_jsForm.namedFoundSet = 'separate'
	_jsForm.transparent = true;
	_jsForm.view = JSForm.LOCKED_TABLE_VIEW
	_jsForm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_NEVER
	/** @type {JSFoundSet<db:/svy_framework/nav_program_fields>} */
	var _fs_fields = databaseManager.getFoundSet(globals.nav_db_framework,'nav_program_fields')
	_fs_fields.addFoundSetFilterParam('program_id','=', globals.nav.program[program].program_id)
	_fs_fields.addFoundSetFilterParam('flag_lookup_field','=',1)
	_fs_fields.sort("sequence asc, nav_program_id asc", true);
	_fs_fields.loadRecords()
	
	
	forms[_formname]['vFields'] = new Array()
	forms[_formname]['vElements'] = new Array()
	
	var _w_field = 200
	var _h_field = 20
	var _x_field = 0 
	var _y_field = 0
	var _total_field_w = 0
	
	if(_fs_fields.getSize() == 0)
	{	
		//there are no lookup fields specified
		application.output('No lookup fields specified.')
		return
	}
	
	_jsForm.newVariable("timestamp",JSColumn.DATETIME);
	var _selectMethod = _jsForm.newMethod("\
	function select(event) {\
		var _newTimestamp = application.getTimeStamp();\
		if (forms['"+ _formname +"'].onClick) {\
			forms['"+ _formname +"'].onClick(event);\
		}\
		if (timestamp && (_newTimestamp.valueOf() - timestamp.valueOf()) < 400 ) {\
			forms['"+ _formname +"'].selectRecord(event);\
		} else {\
			timestamp = application.getTimeStamp();\
		}\
	}");
	
	for (var i = 1; i <=_fs_fields.getSize(); i++) {
		/** @type {JSRecord<db:/svy_framework/nav_program_fields>} */
		var _rec_pf = _fs_fields.getRecord(i)
		var _field_width = _w_field
		if(_rec_pf.field_width)
		{
			_field_width = _rec_pf.field_width
		}
		var _name = _rec_pf.elementname
		var _field = _jsForm.newField(_rec_pf.dataprovider,
				JSField[_rec_pf.display_type],
				_x_field,
				_y_field,
				_field_width,
				_h_field)
		_field.format = _rec_pf.field_format;
		_field.name = _name
		_field.styleClass = 'table'
		_field.anchors = SM_ANCHOR.ALL
		_field.editable = false
		_field.onAction = _selectMethod;
		if (_rec_pf.valuelistname) {
			_field.valuelist = solutionModel.getValueList(_rec_pf.valuelistname)
		}
		var _label = _jsForm.newLabel(_rec_pf.label, _x_field, _y_field, _w_field, _h_field)
		_label.name = 'lbl_' + _rec_pf.elementname
		_label.labelFor = _name
		_label.styleClass = 'table'
			
		forms[_formname].vFields.push(_rec_pf.dataprovider)
		forms[_formname].vElements.push(_name)
		_total_field_w += _field_width
	}
	
	globals.nav.program[program].add_mode
	
	// apply filters to respect foundset filter of the program
	for (var j = 0; j < _programObject.filter.length; j++) {
		/** @type {String} */
		var _value = _programObject.filter[j].filter_value
		
		//calculate global
		if (utils.stringPatternCount(_value, 'globals.')) {
			_value = eval(_value)
		}
		forms[_formProgram].foundset.addFoundSetFilterParam(_programObject.filter[j].filter_field_name, _programObject.filter[j].filter_operator, _value)
	}

	//apply filter to the foundset of runtime form to respect filters applied by _methodToAddFoundsetFilters"
	if (methodToAddFoundsetFilters && (globals[methodToAddFoundsetFilters] || forms[returnForm][methodToAddFoundsetFilters])) {
		
		if (globals[methodToAddFoundsetFilters]) {
			globals[methodToAddFoundsetFilters](forms[_formProgram].foundset)
		} else {
			forms[returnForm][methodToAddFoundsetFilters](forms[_formProgram].foundset)
		}
	}
	
	//sort and load foundset
	if (sortString) {
		forms[_formProgram].foundset.sort(sortString,true);
	} else {
		forms[_formProgram].foundset.sort(_programObject.sort_value, true);
	}
	forms[_formProgram].foundset.loadAllRecords();
	
	//add the table form to the main form
	forms[_formname].elements['tab_searchFields'].addTab(forms[_formProgram])
		
	
	//set the properties
	forms[_formname]['vProgram'] = program
	forms[_formname]['vReturnField'] = returnField
	forms[_formname]['vReturnForm'] = returnForm
	forms[_formname]['vAfterInsertMethodName'] = afterInsertMethodName
	forms[_formname]['vBeforeInsertMethodName'] = beforeInserMethodName
	forms[_formname]['vRecursivecall'] = svyNavFrRecursiveCall  
	forms[_formname]['vFieldKey'] = requestedDataprovider
	
	//set the buttons
	if(_programObject.btn_lookup_new)
	{
		forms[_formname].elements['btn_new_record'].enabled = security.canInsert(_jsForm.dataSource)
	}
	else
	{
		forms[_formname].elements['btn_new_record'].enabled = false
	}
	if(	_programObject.btn_lookup_delete)
	{
		forms[_formname].elements['btn_delete_record'].enabled = security.canDelete(_jsForm.dataSource)
	}
	else
	{
		forms[_formname].elements['btn_delete_record'].enabled = false
	}
	
	if(	_programObject.btn_lookup_show)
	{
		forms[_formname].elements['btn_show_record'].enabled = true
	}
	else
	{
		forms[_formname].elements['btn_show_record'].enabled = false
	}
	
	
	if(element)
	{
		forms[_formname]['vSelectedElement'] = element
	}
	
	//make width bigger if there are more fields
	var _width = 640
	var _basis_width = 500
	if((_basis_width + _total_field_w) > _width)
	{
		_width = _basis_width + _total_field_w
		if(application.getScreenWidth() < _width)
		{
			_width = application.getScreenWidth()
		}
	}
	
	//show the popup	
	globals.DIALOGS.showFormInModalDialog(forms[_formname], -1, -1, _width, 550, i18n.getI18NMessage('svy.fr.lbl.lookup_window:') + ' ' +  _programObject.description,true,false,_programObject.description + application.getUUID())	
}

/**
 * To show a record, or also create a record
 * @param {JSFoundSet} foundset
 * @param {String} program
 * @param {Boolean} [newRecord] if you want a new record
 * @param {String} [lookUpWindowForm] Name of the lookup window that called this dialog
 * @param {String} [afterInsertMethodName] Callback method after the record is selected
 * @param {String} [beforeInsertMethodName] Callback method before the record is selected, if false, record will not be changed.
 * @properties={typeid:24,uuid:"29004725-ED66-47B5-8DC6-4F5624E54CE8"}
 */
function showRecord(foundset, program, newRecord, lookUpWindowForm, afterInsertMethodName, beforeInsertMethodName) {
	
	var _orgformname = globals.nav.buttonbar_lookup_window

	var _formname = _orgformname + application.getUUID()
	
	scopes.modUtils$UI.deepCopyJSForm(_formname,solutionModel.getForm(_orgformname))
	
	var _orgEditForm = globals.nav.program[program].form[0][2]
	
	var _editForm = _orgEditForm + application.getUUID()
	
	var _jsForm = solutionModel.cloneForm(_editForm,solutionModel.getForm(_orgEditForm))
	
	if (solutionModelObject) {
		/** @type {{onDeleteAllRecordsCmd:String, onDeleteRecordCmd:String, 
		 * 			onDrag:String, onDragOver:String, onDrop:String, 
		 * 			onDuplicateRecordCmd:String, onElementFocusGained:String, onElementFocusLost:String,
		 * 			onHide:String,onLoad:String,onNewRecordCmd:String,onNextRecordCmd:String,onPreviousRecordCmd:String,onRecordEditStart:String, 
		 * 			onOmitRecordCmd:String,onRecordEditStop:String,onRecordSelection:String,onResize:String,onSearchCmd:String,
		 * 			onShow:String,onShowAllRecordsCmd:String,onShowOmittedRecordsCmd:String,onSortCmd:String,onUnLoad:String }} */
		var _params = solutionModelObject;
		if (_params.onDeleteAllRecordsCmd) _jsForm.onDeleteAllRecordsCmd = _jsForm.newMethod(_params.onDeleteAllRecordsCmd);
		if (_params.onDeleteRecordCmd) _jsForm.onDeleteRecordCmd = _jsForm.newMethod(_params.onDeleteRecordCmd);
		if (_params.onDrag) _jsForm.onDrag = _jsForm.newMethod(_params.onDrag);
		if (_params.onDragOver) _jsForm.onDragOver = _jsForm.newMethod(_params.onDragOver);
		if (_params.onDrop) _jsForm.onDrop = _jsForm.newMethod(_params.onDrop);
		if (_params.onDuplicateRecordCmd) _jsForm.onDuplicateRecordCmd = _jsForm.newMethod(_params.onDuplicateRecordCmd);
		if (_params.onElementFocusGained) _jsForm.onElementFocusGained = _jsForm.newMethod(_params.onElementFocusGained);
		if (_params.onElementFocusLost) _jsForm.onElementFocusLost = _jsForm.newMethod(_params.onElementFocusLost);
		if (_params.onHide) _jsForm.onHide = _jsForm.newMethod(_params.onHide);
		if (_params.onLoad) _jsForm.onLoad = _jsForm.newMethod(_params.onLoad);
		if (_params.onNewRecordCmd) _jsForm.onNewRecordCmd = _jsForm.newMethod(_params.onNewRecordCmd);
		if (_params.onNextRecordCmd) _jsForm.onNextRecordCmd = _jsForm.newMethod(_params.onNextRecordCmd);
		if (_params.onOmitRecordCmd) _jsForm.onOmitRecordCmd = _jsForm.newMethod(_params.onOmitRecordCmd);
		if (_params.onPreviousRecordCmd) _jsForm.onPreviousRecordCmd = _jsForm.newMethod(_params.onPreviousRecordCmd);
		if (_params.onRecordEditStart) _jsForm.onRecordEditStart = _jsForm.newMethod(_params.onRecordEditStart);
		if (_params.onRecordEditStop) _jsForm.onRecordEditStop = _jsForm.newMethod(_params.onRecordEditStop);
		if (_params.onRecordSelection) _jsForm.onRecordSelection = _jsForm.newMethod(_params.onRecordSelection);
		if (_params.onResize) _jsForm.onResize = _jsForm.newMethod(_params.onResize);
		if (_params.onSearchCmd) _jsForm.onSearchCmd = _jsForm.newMethod(_params.onSearchCmd);
		if (_params.onShow) _jsForm.onShow = _jsForm.newMethod(_params.onShow);
		if (_params.onShowAllRecordsCmd) _jsForm.onShowAllRecordsCmd = _jsForm.newMethod(_params.onShowAllRecordsCmd);
		if (_params.onShowOmittedRecordsCmd) _jsForm.onShowOmittedRecordsCmd = _jsForm.newMethod(_params.onShowOmittedRecordsCmd);
		if (_params.onSortCmd) _jsForm.onSortCmd = _jsForm.newMethod(_params.onSortCmd);
		if (_params.onUnLoad) _jsForm.onUnLoad = _jsForm.newMethod(_params.onUnLoad);
	}

	forms[_formname].elements['form_view_01'].addTab(forms[_editForm])
	forms[_formname]['vLookupWindow'] = lookUpWindowForm
	forms[_editForm].controller.loadRecords(foundset)
	
	if (newRecord) {
		forms[_formname]['vMode'] = 'new';
	} else {
		forms[_formname]['vMode'] = 'browse';
	}
	
	forms[_formname]['vProgram'] = program
	//  extra variables to make sure we can return the created record
	if (solutionModelObject && solutionModelObject.returnField && solutionModelObject.returnForm) {
		forms[_formname]['vReturnField'] = solutionModelObject.returnField
		forms[_formname]['vReturnForm'] = solutionModelObject.returnForm
		forms[_formname]['vAfterInsertMethodName'] = afterInsertMethodName;
		forms[_formname]['vBeforeInsertMethodName'] = beforeInsertMethodName;
	}	

	forms[_formname].updateUI()
	
	if (solutionModelObject && solutionModelObject.pk) {
		// Select the correct record
		var _succes = forms[_editForm].foundset.selectRecord(solutionModelObject.pk);
		if(!_succes)
		{
			forms[_editForm].foundset.loadRecords(solutionModelObject.pk)
		}
	}
	
	forms[_formname].elements['btn_edit'].enabled = (security.canUpdate(forms[_editForm].controller.getDataSource()) && globals.nav.program[program].btn_lookup_edit == 1);
	
	forms[_editForm].controller.readOnly = true
	
	if (newRecord) {
		forms[_formname].dc_edit()
		forms[_formname]['vNew'] = 1
		forms[_editForm].controller.newRecord()
		
		// check and fill the value of new record with value of program filter
		/** @type {{filter:Array<{filter_value:String, filter_operator:String, filter_field_name:String}>, view:Number}} */
		var _programObject = globals.nav.program[program]
		for (var j = 0; j < _programObject.filter.length; j++) {
			/** @type {String} */
			var _value = _programObject.filter[j].filter_value
			
				//if global value is used
			if (utils.stringPatternCount(_value, 'globals.')) {
				_value = eval(_value)
			}
			if(_value && _programObject.filter[j].filter_operator == '=')
			{
				forms[_editForm][_programObject.filter[j].filter_field_name] = _value
			}
		}

		
		if (solutionModelObject && solutionModelObject.fields && solutionModelObject.data && solutionModelObject.fields.length == solutionModelObject.data.length) {
			for (var i = 0; i < solutionModelObject.fields.length; i++) {
				forms[_editForm][solutionModelObject.fields[i]] = solutionModelObject.data[i];
			}
		}
		forms[_editForm].dc_new_post(forms[_editForm].foundset)
	}
	
	globals.DIALOGS.showFormInModalDialog(forms[_formname], -1, -1, solutionModel.getForm(_orgEditForm).width+40, scopes.modUtils$UI.getJSFormHeight(_orgEditForm) + 80, globals.nav.program[program].description,true,false,'show_'+globals.nav.program[program].description)
	
	return _formname
}
