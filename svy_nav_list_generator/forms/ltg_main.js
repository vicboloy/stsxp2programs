/**
 * @properties={typeid:35,uuid:"2043FED0-2579-483D-9B39-EB1C7EC1A5FB",variableType:-4}
 */
var vFoundset = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB0452B5-7409-45DC-8926-EC9269B5E913",variableType:4}
 */
var v_print_list_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"78CF7FDA-EE46-4A62-8E24-80D37D1E28B0"}
 */
var vFontTitle = 'Verdana Bold,1,14';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2F1E2ECD-8F13-400C-B45B-8FC04E01AAA5"}
 */
var vHeaderTitle = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3F9AAC85-96EE-4ECA-B6EB-3CBFD7418AC6"}
 */
var vFontFieldTitle = 'Verdana,0,10';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"09B9D981-E15C-4BDF-A0D5-29E203A1FF39",variableType:4}
 */
var vFooterSize = 40;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"04BEB54D-317C-4755-B531-4E7182AB8D86"}
 */
var vFontField = 'Verdana,0,10';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"19362DA2-0D56-4A4E-8F15-DF6FB7F47439",variableType:4}
 */
var vHeaderSize = 80;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9223733D-9D4B-4A56-80A5-DE51C2D1FE89",variableType:4}
 */
var vBodySize = 20;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} _type
 *
 * @properties={typeid:24,uuid:"8221CD30-F19E-4F17-BA25-59471B738485"}
 */
function addField(event, _type) {
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.getForm(_formname)
	
	var _field_x = 0
	var _field_y 
	var _field_h = 20
	var _field_w = 120
	var _label_x = 0
	var _label_y = vHeaderSize - 20
	var _label_h = 20
	var _label_w = 120
	
	var _rec_pf = _to_nav_program_fields.getSelectedRecord()
	var _elementName = _rec_pf.elementname
	var _dataprovider
		
	var table = databaseManager.getTable(globals.nav.program[globals.ltg_program_name].server_name, globals.nav.program[globals.ltg_program_name].table_name)
	var column = table.getColumn(_to_nav_program_fields.dataprovider)

	
	if(_type == 'body')
	{
		_field_y = vHeaderSize
		_dataprovider = _rec_pf.dataprovider
	}
	else if (_type == 'footer')
	{
		_field_y = vHeaderSize + vBodySize
		_elementName = 'sum_'+_rec_pf.dataprovider
		
		//Create variable
		_jsForm.newVariable(_elementName,JSColumn.NUMBER)
		_dataprovider =_elementName
	}

	var _styleClass = 'print'
	if(column.getType() == JSColumn.NUMBER || column.getType() == JSColumn.INTEGER)
	{
		_styleClass = 'print_number'
	}	
	
	//add field
	putFieldOnForm(_jsForm,_rec_pf.display_type,_field_x,_field_y,_field_w,_field_h,_elementName,_styleClass,_rec_pf.valuelistname, _dataprovider)
	
	if(_type == 'body') 
	{
		putLabelOnForm(_jsForm, _rec_pf.label, _elementName, _label_x, _label_y, _label_w, _label_h, 'lbl_' + _elementName, _styleClass)
	}
		
	forms[_formname].controller.recreateUI()
	if(_type == 'footer')
	{
		 populateSumary([_elementName])
		 forms[_formname].controller.recreateUI()
	}
	editForm()
}

/**
 * Handle changed data.
 *
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A10ADFFF-0992-4AE7-94F1-5853203C246C"}
 * @AllowToRunInFind
 */
function setProgramName() {
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.getForm(_formname)
	_jsForm.dataSource = 'db:/'+globals.nav.program[globals.ltg_program_name].server_name + '/'+ globals.nav.program[globals.ltg_program_name].table_name
	
	globals.ltg_program_id = globals.nav.program[globals.ltg_program_name].program_id
	
	forms[_formname].controller.recreateUI()
	if(vFoundset)
	{
		forms[_formname].controller.loadRecords(vFoundset)
	}
	else
	{
		forms[_formname].controller.loadAllRecords()
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B21C79CE-07D9-4DA7-90B5-36C1757C558A"}
 */
function printPreview(event) {
	var _formname = 'ltg_list'
		
	/** @type {String} */
	var _newForm = application.getUUID()
	
	var _jsForm = solutionModel.cloneForm(_newForm,solutionModel.getForm(_formname))
	_jsForm.getBodyPart().background = '#ffffff'
	_jsForm.getFooterPart().background = '#ffffff'
	_jsForm.getHeaderPart().background = '#ffffff'
	forms[_newForm].controller.recreateUI()
	
	//copy the variables
	var _variables = solutionModel.getForm(_formname).getVariables()
	for (var i = 0; i < _variables.length; i++) {
		forms[_newForm][_variables[i]] = forms[_formname][_variables[i]]
	}
	
	forms[_newForm].controller.showPrintPreview(false)
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"50FA3457-2313-474B-8882-9A48D566D938"}
 */
function editForm() {
	var _formname = 'ltg_list'
		
	if(!forms[_formname].controller.getDesignMode())
	{
		forms[_formname].controller.setDesignMode(forms[_formname].onDrag,forms[_formname].onDrop,forms[_formname].onSelect,forms[_formname].onResize)
	}
	
}

/**
 * Handle changed data.
 *
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BF962B7E-0A2C-4CD4-A65D-1986FC91A653"}
 */
function updateTitle() {
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.getForm(_formname)
	var _name = 'lbl_title'
	var _jsComp = _jsForm.getLabel(_name)
	_jsComp.text = vHeaderTitle
	forms[_formname].controller.recreateUI()
	setFontTitle() 
	editForm()
	return true
}

/**
 * Handle changed data.
 *
 * @param [oldValue] old value
 * @param [newValue] new value
 * @param {JSEvent} [event] the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"55DF16AB-0E4B-4A44-868E-40C43B989CFD"}
 */
function resizeParts(oldValue, newValue, event) {
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.getForm(_formname)
	
	//remove the form from history, otherwise you can not change sizes of parts
	forms.ltg_between.elements.tab.removeAllTabs()
	history.removeForm(_formname)
	
	_jsForm.getHeaderPart().height = vHeaderSize
	_jsForm.getBodyPart().height = vBodySize + vHeaderSize
	_jsForm.getFooterPart().height = vFooterSize + vBodySize + vHeaderSize
	
	if(event && event.getElementName() == 'fld_header') //if the header changes in size all the elements should move otherwise they can end on a wrong part
	{
		var _difference = newValue - oldValue
		var _comps = _jsForm.getComponents()
		var _comp 
		for (var i = 0; i < _comps.length; i++) {
			_comp = _comps[i]
			_comp.y = _comp.y + _difference
		}
	}
	
	forms[_formname].controller.recreateUI()
	
	_formname = 'ltg_between'
	_jsForm = solutionModel.getForm(_formname)
	var _tab = _jsForm.getTabPanel('tab')
	_tab.height = vHeaderSize + vBodySize + vFooterSize + 4
	forms[_formname].controller.recreateUI()
	
	//add the tab back to the form
	forms.ltg_between.elements.tab.addTab(forms['ltg_list'])
	editForm()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} _field
 *
 * @properties={typeid:24,uuid:"892B63C4-B01E-4EEB-9515-78E732914C31"}
 */
function getFont(event,_field) {
	var _font = application.showFontChooser(forms.ltg_main[_field])
	forms.ltg_main[_field] = _font

	switch (_field) {
		case 'vFontTitle':
		setFontTitle()
			break;
		case 'vFontFieldTitle':
		setFontFieldTitle()
			break;
		case 'vFontField':
		setFontFieldTitle()
			break;
	}
	
}

/**
 * Handle changed data.
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E2322135-D3C7-4358-8885-ECD6FE7A3CF3"}
 */
function setFontTitle() {
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.getForm(_formname)
	var _name = 'lbl_title'
	var _jsComp = _jsForm.getLabel(_name)
	
	var _fontArray = vFontTitle.split(',')
	/** @type {String} */
	var _font = _fontArray[0]
	/** @type {Number} */
	var _bold = _fontArray[1]
	/** @type {Number} */
	var _size = _fontArray[2]
	
	_jsComp.fontType = solutionModel.createFont(_font, _bold, _size);
		
	forms[_formname].controller.recreateUI()
	editForm()
	return true
}

/**
 * Handle changed data.
 *
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CE59F7BF-7E35-4E6C-B509-EC4C3F3C8C76"}
 */
function setFontFieldTitle() {
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.getForm(_formname)
	var _comps = _jsForm.getComponents()

	var _jsFontLBL = getFieldLabelFont()
	var _jsFontField = getFieldFont()
	
	for (var i = 0; i < _comps.length; i++) {	
		var _jsComp = _comps[i]
		
		if(_jsComp.name == 'lbl_title') continue // don't change the title label
		
		if( utils.stringLeft(_jsComp.name,4) == 'lbl_')
		{
			_jsComp.fontType = _jsFontLBL
		}
		else
		{
			_jsComp.fontType = _jsFontField
		}
	}
		
	forms[_formname].controller.recreateUI()
	editForm()
	return true
}

/**
 * Handle changed data.
 *
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"40338E77-16DC-4303-8349-B3028B2A113E"}
 */
function sortList() {
	
	forms.ltg_list.controller.sort(_to_nav_program_fields$sort.dataprovider + ' asc')
	return true
}

/**
 * @properties={typeid:24,uuid:"0D431908-D59F-49B5-B1A3-12F4991F2F8E"}
 */
function getFieldFont() {
	var _fontArrayField = vFontField.split(',')
	/** @type {String} */
	var _font = _fontArrayField[0]
	/** @type {Number} */
	var _bold = _fontArrayField[1]
	/** @type {Number} */
	var _size = _fontArrayField[2]
	var _jsFontField = solutionModel.createFont(_font, _bold, _size);
	return _jsFontField
}

/**
 * @properties={typeid:24,uuid:"C5BAAE14-7DD2-4CC6-9356-BD21028C94C2"}
 */
function getFieldLabelFont() {
	var _fontArrayLBL = vFontFieldTitle.split(',')
	/** @type {String} */
	var _fontLBL = _fontArrayLBL[0]
	/** @type {Number} */
	var _boldLBL = _fontArrayLBL[1]
	/** @type {Number} */
	var _sizeLBL = _fontArrayLBL[2]
	var _jsFontLBL = solutionModel.createFont(_fontLBL, _boldLBL, _sizeLBL);
	return _jsFontLBL
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"963D9936-2C12-43E1-9158-9B977C01D0F2"}
 */
function onShow(firstShow, event) {
	elements.btn_addSum.visible = false
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E106188A-E642-457B-9AD6-FF185FF7CB52"}
 */
function onDataChangeField(oldValue, newValue, event) {
	
	var table = databaseManager.getTable(globals.nav.program[globals.ltg_program_name].server_name, globals.nav.program[globals.ltg_program_name].table_name)
	var column = table.getColumn(_to_nav_program_fields.dataprovider)
	
	if(column.getType() == JSColumn.NUMBER || column.getType() == JSColumn.INTEGER)
	{
		elements.btn_addSum.visible = true
	}
	else
	{
		elements.btn_addSum.visible = false
	}

	return true
}

/**
 * @param {Array} _sumNames
 * @properties={typeid:24,uuid:"246B7C23-BC3F-4D7C-B4BB-D847A422B158"}
 */
function populateSumary(_sumNames) {
	var _formName = 'ltg_list'
	var _fs = forms[_formName].foundset
	var _rec 
	/** @type {String} */
	var _sumName
	var _columns = []
	var _sums = []
	
	for (var j = 0; j < _sumNames.length; j++) {
		_sumName = _sumNames[j]
		_columns[j] = utils.stringReplace(_sumName, 'sum_', '')
		_sums[j] = 0
		for (var i = 1; i <= _fs.getSize(); i++) {
			_rec = _fs.getRecord(i)
			for (var k = 0; k < _sumNames.length; k++) {
				_sums[k] += _rec[_columns[k]]
			}
		}
		forms[_formName][_sumNames[j]] = _sums[j]
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"23245C10-8196-4DF5-92AF-8EA89BDE4DBC"}
 */
function saveList(event) {
	
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.getForm(_formname)
	var _newList = true
	var _answer, _message
	if(globals.ltg_print_list_id) //a current list
	{
		 _message = i18n.getI18NMessage('svy.fr.dlg.save_list')
		var _save = i18n.getI18NMessage('svy.fr.lbl.current_list')
		var _new = i18n.getI18NMessage('svy.fr.lbl.new_list')
		_answer = globals.DIALOGS.showQuestionDialog('svy.fr.lbl.excuse_me', _message, _save, _new)
		if(_answer == _save)
		{
			_newList = false
		}
	}
	
	if(_newList)
	{
		_message = i18n.getI18NMessage('svy.fr.dlg.name_list') 
		_answer = globals.DIALOGS.showInputDialog('svy.fr.lbl.excuse_me', _message)
		/** @type {JSFoundSet<db:/svy_framework/nav_print_list>} */
		var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_print_list')
		_fs.newRecord()
		globals.ltg_print_list_id = _fs.print_list_id
		_to_nav_print_list.name = _answer
	}
	
	//copy the fields
	var _rec = _to_nav_print_list.getSelectedRecord()
	_rec.program_id = globals.nav.program[globals.ltg_program_name].program_id
	_rec.title_text = vHeaderTitle
	_rec.sort_program_field_id = globals.ltg_program_field_id$sort
	_rec.font_field = vFontField
	_rec.font_field_title = vFontFieldTitle
	_rec.font_title = vFontTitle
	_rec.h_body = vBodySize
	_rec.h_footer = vFooterSize
	_rec.h_header = vHeaderSize
	
	databaseManager.saveData(_rec)
	var _rec_d
	
	//save all the elememts
	var _comps = _jsForm.getComponents()
	var _comp
	var _field
	for (var i = 0; i < _comps.length; i++) {
		_comp = _comps[i]
		globals.ltg_elementname = _comp.name
		
		if(_comp.name == 'lbl_title') continue //header label doesn't have to be saved
		
		if(!utils.hasRecords(_rec.nav_print_list_to_nav_print_list_details$elementname))
		{
			_rec.nav_print_list_to_nav_print_list_details$elementname.newRecord()
		}
		_rec_d = _rec.nav_print_list_to_nav_print_list_details$elementname.getSelectedRecord()
		
		//sync all the fields
		if(_comp instanceof JSLabel)
		{	
			_rec_d.label_for = _jsForm.getLabel(_comp.name).labelFor
			_rec_d.label_text = _jsForm.getLabel(_comp.name).text
		}
		else if (_comp instanceof JSField)
		{
			_field = _jsForm.getField(_comp.name)
			_rec_d.display_type = _field.displayType
			_rec_d.flag_variable = (utils.stringLeft(_comp.name,4) == 'sum_')
			_rec_d.dataprovider = _field.dataProviderID
			_rec_d.valuelist = _field.valuelist
		}
		
		_rec_d.styleclass = _comp.styleClass	
		_rec_d.x = _comp.x
		_rec_d.y = _comp.y
		_rec_d.h = _comp.height
		_rec_d.w = _comp.width
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B6A4B6D9-8E87-4825-B42C-7CC366A0FE13"}
 */
function loadExisting(event) {
	/** @type {JSFoundSet<db:/svy_framework/nav_print_list>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_print_list')
	_fs.loadAllRecords()
	if(_fs.getSize() < 1) //there are no record
	{
		globals.DIALOGS.showInfoDialog('svy.fr.lbl.excuse_me','svy.fr.dlg.no_print_list','svy.fr.lbl.ok')
		return
	}
	
	var _popupmenu = plugins.window.createPopupMenu()
	var _rec, _menu
	for (var i = 1; i <= _fs.getSize(); i++) {
		_rec = _fs.getRecord(i)
		_menu = _popupmenu.addMenuItem(_rec.name,loadPrintList)
		_menu.methodArguments = [_rec.print_list_id]
		
	}

	/** @type {RuntimeComponent} */
	var _source = event.getSource()
	if (_source != null) {
		_popupmenu.show(_source);
	}
	
}

/**
 * @properties={typeid:24,uuid:"7D6CBA0C-9603-498F-AA10-D6C7D48A3FE4"}
 */
function loadPrintList(a, b, c, d, e, _print_list_id) {
	globals.ltg_print_list_id = _print_list_id
	var _formname = 'ltg_list'
	var _jsForm = solutionModel.revertForm(_formname)
	var _rec = _to_nav_print_list.getSelectedRecord()
	
	globals.nav_program_id = _rec.program_id
	globals.ltg_program_name = _to_nav_program$program_id.program_name
	globals.ltg_program_id = globals.nav_program_id 
	vHeaderTitle = _rec.title_text
	globals.ltg_program_field_id$sort = _rec.sort_program_field_id
	vFontField = _rec.font_field
	vFontFieldTitle = _rec.font_field_title
	vFontTitle = _rec.font_title
	vBodySize = _rec.h_body
	vFooterSize = _rec.h_footer
	vHeaderSize = _rec.h_header
	
	updateTitle()
	setProgramName()
	sortList()
	setFontTitle()
	resizeParts()
	var _rec_d
	
	var _variables = []
	var _dataprovider
	
	//set the elements on the form
	for (var i = 1; i <= _rec.nav_print_list_to_nav_print_list_details.getSize(); i++) {
		_rec_d = _rec.nav_print_list_to_nav_print_list_details.getRecord(i)
		if(_rec_d.label_for) //it is a label
		{
			putLabelOnForm(_jsForm,_rec_d.label_text,_rec_d.label_for,_rec_d.x,_rec_d.y,_rec_d.w,_rec_d.h,_rec_d.elementname,_rec_d.styleclass)
		}
		else
		{
			if(_rec_d.flag_variable)
			{
				//Create variable
				_jsForm.newVariable(_rec_d.elementname,JSColumn.NUMBER)
				_dataprovider =_rec_d.elementname
				_variables.push(_dataprovider)
				
			}
			else
			{
				_dataprovider = _rec_d.dataprovider
			}
			putFieldOnForm(_jsForm,null,_rec_d.x,_rec_d.y,_rec_d.w,_rec_d.h,_rec_d.elementname,_rec_d.styleclass,_rec_d.valuelist,_dataprovider, _rec_d.display_type)
		}
	}
	forms[_formname].controller.recreateUI()
	
	if(_variables.length > 0)
	{
		 populateSumary(_variables)
		 forms[_formname].controller.recreateUI()
	}
}

/**
 * @param {JSForm} _jsForm
 * @param {String} [_display_type]
 * @param {Number} _x
 * @param {Number} _y
 * @param {Number} _w
 * @param {Number} _h
 * @param {String} _elementname
 * @param {String} _styleClass
 * @param {String} _valuelistName
 * @param {String} _dataprovider
 * @param {String} [_display_type_nr]
 * 
 * @properties={typeid:24,uuid:"EA313FD5-ED79-421B-9EAE-15DC8DBAE8E5"}
 */
function putFieldOnForm(_jsForm, _display_type, _x, _y, _w, _h, _elementname, _styleClass, _valuelistName, _dataprovider, _display_type_nr) {
	
	if(_display_type_nr == undefined)
	{
		_display_type_nr = JSField[_display_type]
	}
	
	var _field = _jsForm.newField(	_dataprovider,
									_display_type_nr,
									_x,
									_y,
									_w,
									_h)
	_field.name = _elementname
	_field.fontType = getFieldFont()
	_field.styleClass = _styleClass		
	if (_valuelistName) {
		_field.valuelist = solutionModel.getValueList(_valuelistName)
	}
}

/**
 * @properties={typeid:24,uuid:"21FE82A7-2760-4125-8C20-9C3D520E8835"}
 */
function putLabelOnForm(_jsForm, _labelText, _labelFor, _x, _y, _w, _h, _elementname, _styleClass) {
	var _label = _jsForm.newLabel(_labelText,_x, _y, _w, _h)
	_label.name = _elementname
	_label.labelFor =_labelFor
	_label.fontType = getFieldLabelFont()
	_label.transparent = true
	_label.styleClass = _styleClass
}

/**
 * @param {String} [_program]
 * @param {JSFoundSet} [_foundset]
 * @properties={typeid:24,uuid:"1A15510B-9C43-4A3C-BEC2-30174573056B"}
 */
function show(_program, _foundset) {
	if(_program)
	{
		globals.ltg_program_name = _program
		setProgramName()
	}
	
	if(_foundset)
	{
		vFoundset = _foundset
	}
	globals.DIALOGS.showFormInModalDialog(forms.ltg_main)
}
