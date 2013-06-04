/**
 *	Delete record
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"A2E65FE8-0B00-46C8-BA7C-0410AFF50E9E"}
 */
function deleteRecord() {
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no);
	if (_answer == _ok) {
		controller.deleteRecord()
	}

}

/**
 *	Empty the filter
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"6D219EEF-97E3-4224-92EA-C7DDD8EF04AC"}
 */
function emptyFilter() {
	nav_foundset_filter_id = null
	databaseManager.saveData()
}

/**
 *	Check if baseForm is entered
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"FB07B40F-313F-4976-B1D5-46C06918E562"}
 */
function formCheck() {
	if (!base_form_name) {

		elements.base_form_name.requestFocus()
		application.sleep(250)
		globals.DIALOGS.showWarningDialog('', 'You have to enter the baseformname first', 'OK');
	}
}

/**
 *	Show i18n dialog for the description
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"358923F8-2C73-4902-A41C-6F45FF7C33A6"}
 */
function getI18nLabel() {
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.I18n_key_selector', i18n.getI18NMessage('svy.fr.dlg.I18n_key_selector'), 'i18n:svy.fr.lbl.ok')
		return
	}
	description = application.showI18NDialog()
}

/**
 *	New record
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"78735354-F318-4C7B-A935-5E5AFDCF3777"}
 */
function newRecord() {

	tabSwitch(null, 1);

	controller.newRecord();

	//Auto fill base form name with first value of vl to make sure it is always filled.
	var _firstval = "";
	var _vl = application.getValueListItems("nav_base_form_name");
	if (_vl.getMaxRowIndex() > 0) {
		_firstval = _vl.getValue(1, 1);
	}
	base_form_name = _firstval;

	//Auto fill description
	description = i18n.getI18NMessage('svy.fr.lbl.description');

	databaseManager.saveData(foundset.getRecord(foundset.getSelectedIndex()));

}

/**
 *	OndataChange baseformname
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"FE997810-0546-42BB-A10B-A09E54836FD3"}
 */
function onDataChangeBaseFormName() {
	//no forms are used
	if (base_form_name == '-no form-') {
		//get the table and server that the user wants to use
		forms.svy_nav_c_program_dtl_server_table.controller.loadRecords(foundset)
		startup_view = 2
		globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_program_dtl_server_table)
		
	}
	form_object = null
	forms.svy_nav_c_template_form.onRecordSelection();
	//databaseManager.saveData()
	setTableServer()

}

/**
 *	on Load, set the valuelist of the nav_base_form_name
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"2ABBA0D5-F3D6-4469-A44A-1AEEE789B1C7"}
 * @AllowToRunInFind
 */
function onLoad() {
	
	controller.loadAllRecords()
	
	/** @type {Array<String>} */
	var _forms = solutionModel.getForms().map(function (jsForm) { return jsForm.name }).sort()
	var _baseNames = new Object()
	var _baseName
	for (var i = 0; i < _forms.length; i++) {
		// if a form end with _dtl or _tbl it can be used in the framework
		if (utils.stringPatternCount(_forms[i], '_dtl') > 0 || utils.stringPatternCount(_forms[i], '_tbl') > 0) {

			if ( (utils.stringPatternCount(_forms[i], '_dtl') > 0)) {
				_baseName = utils.stringReplace(_forms[i], '_dtl', '')
			} else {
				_baseName = utils.stringReplace(_forms[i], '_tbl', '')
			}
			_baseNames[_baseName] = _baseName
		}

	}
	// make a array of the object
	_baseNames = globals.svy_utl_objectArray2JSArray(_baseNames).sort();

	//set the first value to -no form-
	var _noForm = '-no form-'
	_baseNames.unshift(_noForm)

	//set the valuelist
	application.setValueListItems('nav_base_form_name', _baseNames)

	var formTypes = scopes.svyProperties.getPropertyValue("form_types");
	formTypes = formTypes.toString().split(",");
	var _form_types_save_values = new Array()
	for (var j = 0; j < formTypes.length; j++) {
		formTypes[j] = utils.stringTrim(formTypes[j]);
		_form_types_save_values[j] = j
	}
	application.setValueListItems('nav_form_types', formTypes, _form_types_save_values)


	application.setValueListItems('nav_forms', _forms)
}

/**
 *	 On record selection, set information right for this record
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"61D9B44B-0F55-40CC-8C03-17714C0B27AD"}
 */
function onRecordSelection() {

	// set colors of the buttons

	var _globals = solutionModel.getRelations(null).map(function (jsRelation) { return jsRelation.name }).sort(); //array of all global relations
	var _empty = ['']

	var _forms, _relations, _fields
	if (form_name && forms[form_name]  && forms[form_name].controller.getDataSource()) {
		// set relations valuelist
		
		_forms = solutionModel.getRelations(forms[form_name].controller.getDataSource()).sort()
		
		_relations = _empty.concat(_forms.concat(_globals))
		application.setValueListItems('nav_relations', _relations)

		// set fields valuelist
		_fields = databaseManager.getTable(forms[form_name].foundset).getColumnNames().sort()
		application.setValueListItems('nav_fields', _fields)
	} else if (server_name && table_name && base_form_name == '-no form-') {

		var jsTable = databaseManager.getTable(server_name, table_name)

			// set relations valuelist
		_forms = solutionModel.getRelations(server_name, table_name).sort();
		_relations = _empty.concat(_forms.concat(_globals))
		application.setValueListItems('nav_relations', _relations)

		// set fields valuelist
		_fields = jsTable.getColumnNames().sort()
		application.setValueListItems('nav_fields', _fields)
	} else // do not now form or table, valuelists should be empty
	{
		application.setValueListItems('nav_relations', _empty)
		application.setValueListItems('nav_fields', _empty)
	}

	// show i18n field or normal description
	set_i18n_field();
}

/**
 *	 Calls globals.svy_nav_init()
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"7AF054CB-A22D-4180-99A1-54F72EB5F559"}
 */
function reloadMenu() {
	globals['svy_nav_init']();
}

/**
 *	 Opens a form to select a foundset filter
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"1AB2E774-C66C-4A0F-8D26-5C6B87B03E65"}
 */
function selectFoundsetFilter() {
	forms.svy_nav_c_foundset_filter_dtl.mode = 'edit'
	forms.svy_nav_c_foundset_filter_parameters_tbl.mode = 'edit'
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_foundset_filter_dtl,null,null,null,null,null,true,false,'Foundset filter')
}

/**
 *	 Show i18n field or normal description
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"2CBD75E1-9D27-49A1-BC54-4FED28F1098E"}
 */
function set_i18n_field() {

	if (flag_i18n) {
		elements.Description_i18n.visible = true
		elements.Description.visible = false
		elements.btn_i18n.visible = true
	} else {
		elements.Description_i18n.visible = false
		elements.Description.visible = true
		elements.btn_i18n.visible = false
	}
}

/**
 *	 Determine server and table name with the formname
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"0B9367C1-CCC3-4ADD-ADDA-9482429EE729"}
 */
function setTableServer() {
	
	if (base_form_name && base_form_name != '-no form-') {
		for (var i = 0; i < form_object.length; i++) {
			if (form_object[i][3] && forms[form_object[i][2]]) { // 3-available 2-formname
				form_name = form_object[i][2]
				table_name = databaseManager.getDataSourceTableName(forms[form_object[i][2]].controller.getDataSource())
				server_name = databaseManager.getDataSourceServerName(forms[form_object[i][2]].controller.getDataSource())
				globals.svy_nav_initTableVL(server_name);
				databaseManager.saveData()
			}
		}
	}
	onRecordSelection()
}

/**
 *	 Opens a form where the user can enter the sort values
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"2396B7F6-5D55-4932-97A8-46684C117BC6"}
 */
function showSortValues() {
	if (!base_form_name) {

		globals.DIALOGS.showWarningDialog('', 'You have to enter the baseformname first', 'OK');
		elements.base_form_name.requestFocus()
		return

	}
	forms.svy_nav_c_sortvalue.mode = 'edit'
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_sortvalue,null,null,null,null,null,true,false,'sort_value')
}

/**
 *	Tab switch
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @param {JSEvent} [_event]
 * @param {Number} [_arg] number of the tab you want to navigate to
 * @return  none
 *
 * @properties={typeid:24,uuid:"3DE8AFC5-AAB6-49A3-9FCE-CBEC0E1D5C07"}
 */
function tabSwitch(_event, _arg) {
	var _tab
	if (_arg == undefined) {
		_tab = _event.getElementName().replace(/[^0-9]/g, "")
	} else {
		_tab = _arg
	}

	//deactivated tabs
	for (var i = 0; i < 4; i++) {
		elements['tab_left_' + (i + 1)].setImageURL('media:///tab_grey_left.png')
		elements['tab_right_' + (i + 1)].setImageURL('media:///tab_grey_right.png')
		elements['tab_' + (i + 1)].setImageURL('media:///tab_grey_btw.png')
		elements['lbl_' + (i + 1)].setFont('Verdana,0,10');
		elements['lbl_' + (i + 1)].fgcolor = '#000000'
	}

	//activated
	elements['tab_left_' + _tab].setImageURL('media:///tab_blue_left.png')
	elements['tab_right_' + _tab].setImageURL('media:///tab_blue_right.png')
	elements['tab_' + _tab].setImageURL('media:///tab_blue_btw.png')
	elements['lbl_' + _tab].setFont('Verdana,1,10');
	elements['lbl_' + _tab].fgcolor = '#ffffff'

	elements.metadata_program_tab.tabIndex = _tab
}

/**
 *
 * @param _event
 *
 * @properties={typeid:24,uuid:"F05272DA-1E6E-442B-A449-44137B2E8369"}
 * @AllowToRunInFind
 */
function dc_new(_event) {
	tabSwitch(null, 1);
	_super.dc_new(_event)
	
	
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"D0F0F380-5EEF-467F-BD36-D79571E473C2"}
 */
function dc_duplicate(event) {
	var recFrom = foundset.getRecord(controller.getSelectedIndex())
	var newName = globals.DIALOGS.showInputDialog('New program', 'Name new program:', recFrom.program_name + '_copy');
	
	//Check if new name was entered a
	if (!newName) {
		return;
	} else if (newName == recFrom.program_name) {
		globals.DIALOGS.showWarningDialog(i18n.getI18NMessage("svy.fr.lbl.warning"), i18n.getI18NMessage("svy.fr.dlg.program_name_not_unique"));
		return;
	} else if (!isProgramNameUnique(newName)) {
		return;
	}
	controller.duplicateRecord()
	var recTo = foundset.getRecord(controller.getSelectedIndex())
	recTo.program_name = newName;

	// security keys
	for (var j = 1; j <= recFrom.nav_program_to_nav_navigation_keys.getSize(); j++) {

		recFrom.nav_program_to_nav_navigation_keys.setSelectedIndex(j)
		recFrom.nav_program_to_nav_navigation_keys.duplicateRecord(j)
		recFrom.nav_program_to_nav_navigation_keys.program_id = recTo.program_id
		databaseManager.saveData()
	}
	
	// toolbars
	for (var o = 1; o <= recFrom.nav_program_to_nav_program_toolbar.getSize(); o++) {

		recFrom.nav_program_to_nav_program_toolbar.setSelectedIndex(o)
		recFrom.nav_program_to_nav_program_toolbar.duplicateRecord(o)
		recFrom.nav_program_to_nav_program_toolbar.program_id = recTo.program_id
		databaseManager.saveData()
	}
	
	// toolbar items
	for (var l = 1; l <= recFrom.nav_program_to_nav_program_toolbar_item.getSize(); l++) {

		recFrom.nav_program_to_nav_program_toolbar_item.setSelectedIndex(l)
		recFrom.nav_program_to_nav_program_toolbar_item.duplicateRecord(l)
		recFrom.nav_program_to_nav_program_toolbar_item.program_id = recTo.program_id
		databaseManager.saveData()
	}
	
	// fields
	for (var i = 1; i <= recFrom.nav_program_to_nav_program_fields.getSize(); i++) {

		recFrom.nav_program_to_nav_program_fields.setSelectedIndex(i)
		recFrom.nav_program_to_nav_program_fields.duplicateRecord(i)
		recFrom.nav_program_to_nav_program_fields.program_id = recTo.program_id
		databaseManager.saveData()
	}
	
	// help
	for (var k = 1; k <= recFrom.nav_program_to_nav_help.getSize(); k++) {

		recFrom.nav_program_to_nav_help.setSelectedIndex(k)
		recFrom.nav_program_to_nav_help.duplicateRecord(k)
		recFrom.nav_program_to_nav_help.program_id = recTo.program_id
		databaseManager.saveData()
	}
}

/** *
 * @param event
 * @param all
 *
 * @properties={typeid:24,uuid:"83BA976E-E680-4F14-9732-2F27C2730F49"}
 */
function dc_save(event, all) {
	var ok;
	if (!program_name || !base_form_name) {
		var message = i18n.getI18NMessage('svy.fr.dlg.mandatory_fields')
		var title = i18n.getI18NMessage('svy.fr.lbl.mandatory_fields')
		if (!program_name) {
			message += '\n' + i18n.getI18NMessage('svy.fr.lbl.program_name')
		}
		if (!base_form_name) {
			message += '\n' + i18n.getI18NMessage('svy.fr.lbl.base_form_name')
		}		
		ok = i18n.getI18NMessage('svy.fr.lbl.ok')
		globals.DIALOGS.showWarningDialog(title, message, ok)
		return
	}
	if (!isProgramNameUnique(program_name, program_id)) {
		return;
	}
	
	if(/\-no form\-_(dtl|tbl)/.test(forms.svy_nav_c_template_form.form_object[0][2]) || /\-no form\-_(dtl|tbl)/.test(forms.svy_nav_c_template_form.form_object[1][2]) )
	{
		tabSwitch(event, 1)
		ok = i18n.getI18NMessage('svy.fr.lbl.ok')
		globals.DIALOGS.showWarningDialog( i18n.getI18NMessage('svy.fr.lbl.excuse_me'),  i18n.getI18NMessage('svy.fr.dlg.notallowed_noForm'), ok)
		
		return
	}
	_super.dc_save(event, all)
}

/**
 * @param {String} newName program name that should be checked for uniqueness
 * @param {UUID} [programId] when editing an existing program record, pass the program id. This record is the exception that is allowed.
 * 
 * @properties={typeid:24,uuid:"B21B24FD-563C-4E3D-9A2E-8652FC8E2A01"}
 */
function isProgramNameUnique(newName, programId) {
	var programFS = databaseManager.getFoundSet(globals.nav_db_framework, "nav_program");
	programFS.addFoundSetFilterParam("program_name", "=", newName);
	if (programId) {
		programFS.addFoundSetFilterParam("program_id", "!=", programId);
	}
	programFS.loadAllRecords();
	
	if (programFS.getSize() > 0) {
		globals.DIALOGS.showWarningDialog(i18n.getI18NMessage("svy.fr.lbl.warning"), i18n.getI18NMessage("svy.fr.dlg.program_name_not_unique"));
		return false;
	}
	return true;
}

/**
 * @properties={typeid:24,uuid:"EFBADE2B-6575-4B38-95D7-4AD97229E91D"}
 */
function gotoBrowse() {
	_super.gotoBrowse.apply(this, arguments)
	elements.btn_sortvalue.enabled = false
	elements.btn_foundsetFilter.enabled = false
	elements.btn_emptyFoundsetFilter.enabled = false
	forms.svy_nav_c_programfields_tbl.gotoBrowse()
	forms.svy_nav_c_help_dtl.gotoBrowse()
	
	forms.svy_nav_c_programfields_tbl.mode = 'browse'
	forms.svy_nav_c_help_dtl.mode = 'browse'
		
	forms.svy_nav_c_program_toolbar.mode = 'edit'
	forms.svy_nav_c_program_toolbar.gotoBrowse();

	forms.svy_nav_c_program_tbl.controller.readOnly = false
}

/**
 * @properties={typeid:24,uuid:"02C6A9D4-B32E-40A6-BB43-9599E369371F"}
 */
function gotoEdit() {
	_super.gotoEdit.apply(this, arguments)
	elements.btn_sortvalue.enabled = true
	elements.btn_foundsetFilter.enabled = true
	elements.btn_emptyFoundsetFilter.enabled = true
	
	forms.svy_nav_c_programfields_tbl.mode = 'edit'
	forms.svy_nav_c_programfields_tbl.gotoEdit()
	
	forms.svy_nav_c_help_dtl.mode = 'edit'
	forms.svy_nav_c_help_dtl.gotoEdit()
	
	forms.svy_nav_c_program_toolbar.mode = 'edit'
	forms.svy_nav_c_program_toolbar.gotoEdit();
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
 * @properties={typeid:24,uuid:"C737F53F-BED1-40FC-B440-0E966BC8CE3D"}
 * @AllowToRunInFind
 */
function changeProgramName(oldValue, newValue, event) {
	if (oldValue && (newValue != oldValue)) {
		var _save = i18n.getI18NMessage('svy.fr.lbl.save');
		var _cancel = i18n.getI18NMessage('svy.fr.lbl.cancel');
		//show warning, changing program name can have consequences
		var _choice = globals.DIALOGS.showQuestionDialog('i18n:svy.fr.lbl.warning', 'i18n:svy.fr.dlg.warning_programname', _save, _cancel);
		if (_choice != _save) {
			//undo change
			program_name = oldValue;
		}
	}
	
	//new program
	if(!oldValue && newValue)
	{
		program_name = newValue.replace(/[^\w]/g, "");
		newValue = program_name
		//check if there are default toolbars
		/** @type {JSFoundSet<db:/svy_framework/nav_toolbar>} */
		var _fs_t = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_toolbar')
		var _rec, _rec_t
		if(_fs_t.find())
		{
			_fs_t.flag_default = 1
			_fs_t.sort('default_sortorder asc')
			_fs_t.search()
			
			for (var i = 1; i <= _fs_t.getSize(); i++) {
				_rec_t = _fs_t.getRecord(i)
				nav_program_to_nav_program_toolbar.newRecord()
				_rec = nav_program_to_nav_program_toolbar.getSelectedRecord()
				_rec.sequence = _rec_t.default_sortorder
				_rec.toolbar_id = _rec_t.toolbar_id
			}
		}
	}
	if (program_name && !description) {
		description = program_name;
	}
	return true;
}

/**
 *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8006DFB6-0881-4E01-AA4D-BC38E85D3B95"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	
	if (firstShow) {
		foundset.sort("program_name asc");
	}
}
