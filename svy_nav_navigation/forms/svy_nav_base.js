/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A841F1D-7599-4C46-9D59-25D3BB3018E4",variableType:4}
 */
var vCurrentIndex = 1;

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"A55B155D-370E-4C55-8B54-C6D700670B8C",variableType:-4}
 */
var vFixedElementsTable = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"95B96BF3-0FEB-4AAE-86B3-03D1388647E2"}
 */
var vFocusElement = null;

/**
 * This object is used to keep track of the program and layout information, for which this form is used
 * 
 * @author pradipta
 * 
 * @properties={typeid:35,uuid:"70B0C3D4-7245-458A-A741-7507E00BF978",variableType:-4}
 */
var vTableViewInformation = new Object();

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8D8EAF0-1AB8-4248-8AB0-3D153A09C5FA"}
 */
function onLoad(event) {
	/**
	 * To have certain elements fixed in generated table views, define array "vFixedElementsTable" at the overridden version of this method in the table form and specify the following properties:
	 * 
	 * 1. Name of the element that should be fixed (String)
	 * 2. If the element should be fixed at the end of the form. If false it will be fixed at the beginning of the form (Boolean)
	 * 
	 * You need to specify the elements from left to right. So start with the elements at the utmost left and finish the the elements at the utmost right.
	 * 
	 * Please note that it is vital to specify the name of the element for both field and header (if there is any header used)!
	 */
	
	// Set the auto save to false
	databaseManager.setAutoSave(false);
}

/**
 * Handle hide window, save table view persistence
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean} allow hide
 *
 * @properties={typeid:24,uuid:"B0310BCD-FB09-4D4E-9C6F-714973A38A39"}
 */
function onHide(event) {
	
	// Save table persistence

	var _program = getProgram();
	var _layoutId = globals.nav_layout_id

	if (_program && _layoutId) {
		var _tableViewId = vTableViewInformation[_layoutId];
		globals.svy_nav_saveTableViewPersistance(controller.getName(), scopes.globals.nav.program[_program].program_id, _layoutId, _tableViewId);
	}
	
	return true
}

/**
 * Return the program id
 * 
 * @return {UUID} The program id
 * 
 * @properties={typeid:24,uuid:"014E5710-E851-4CE0-BA66-3BA6642275F2"}
 */
function getProgramId() {
	
	if (controller.getName() && 
			forms[controller.getName()].getToolbarFormName() && 
			forms[controller.getName()].getToolbarFormName() != "-1" && 
			scopes.globals.nav.program[forms[forms[controller.getName()].getToolbarFormName()].vProgram]) {
		return scopes.globals.nav.program[forms[forms[controller.getName()].getToolbarFormName()].vProgram].program_id;
	}
	else {
		return null;
	}
}

/**
 * Used by onRecordSelection to undo record selection when not allowed (for example when there are unsaved related records) 
 * 
 * @protected 
 * @properties={typeid:24,uuid:"41BC2EB7-CC51-4D77-88AB-71142199A683"}
 */
function selectPreviousRecord() {
	controller.setSelectedIndex(vCurrentIndex);
}

/**
 *	On record selection, enables disables the right buttons, sets the text in the tile bar
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	[_form] name of the form
 *
 * @properties={typeid:24,uuid:"16BD9642-A11B-44C2-8838-4E694E689436"}
 */
function onRecordSelection(_event, _form) {	
	
	if (vCurrentIndex == controller.getSelectedIndex()) {
		return;
	}
	
	var _childInEdit = getChildFormsInEditMode();
	if (_childInEdit.length > 0 && globals.nav.openEdits.length > 0) { //changing record when child records are edited
		var _save = i18n.getI18NMessage("svy.fr.lbl.save");
		var _dontSave = i18n.getI18NMessage("svy.fr.lbl.dont_save");
		var _goback = i18n.getI18NMessage("svy.fr.lbl.go_back");
		var _button = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage("svy.fr.lbl.warning"), i18n.getI18NMessage("svy.fr.dlg.unsaved_related_records"), _save, _dontSave, _goback);

		var _bodyForm = forms[_childInEdit[0]].getBodyFormName();
		var _result
		if (_button == _save) { //Try to save child record
			_result = forms[_bodyForm].dc_save();
			if (_result == -1) { //Save failed, go back to previous record
				//Called with scheduler because can't change selection in onRecordSelection method
				plugins.scheduler.addJob("test", new Date(), selectPreviousRecord);
				return;
			}
		} else if (_button == _dontSave) { //Try to cancel child record
			_result = forms[_bodyForm].dc_cancel(_event, null, true);
			if (_result == -1) { //Cancel failed, go back to previous record
				//Called with scheduler because can't change selection in onRecordSelection method
				plugins.scheduler.addJob("test", new Date(), selectPreviousRecord);
				return;
			}
		} else { //Go back by default
			//Called with scheduler because can't change selection in onRecordSelection method
			plugins.scheduler.addJob("test", new Date(), selectPreviousRecord);
			return;
		}
	}
	
	//Set the new selected index
	vCurrentIndex = controller.getSelectedIndex();
	
	syncFoundsets();

	var _toolbarForm = getToolbarFormName()
	if(!_toolbarForm || _toolbarForm == '-1') return
	var _panel = forms[_toolbarForm].vPanel
	var _program = forms[_toolbarForm].vProgram
	var _view = forms[_toolbarForm].vView

	if (!_form) {
		_form = controller.getName();
	}
		
	// if form is the top form change the description text on the top bar
	if (_panel == 1) { // view1
		if (foundset.getSelectedRecord()) {
			setRecordInfoText(_program, _form)
		}
		
		if(globals.nav.hasRecordHistory && _view == 0 && controller.getSelectedIndex()>0)//only record history in detail, and a record is selected
		{
			globals.svy_nav_recordHistoryCreate(_program)
		}
		
		// Reload documents for the current program
		if (_program != 'dmDocuments' && globals.nav.program[_program].table_name && forms['svy_doc_program_documents'] && foundset.getSize()>0)
		{
			forms['svy_doc_program_documents'].setUpFoundset(_event);
		}
	}
	
	// Refresh the list of documents pinned to the  program record
	if (_program != 'dmDocuments' && _program != 'dmDocuments_pinned' && forms[globals.nav.mainFormName].elements.tab_popmenu && forms[globals.nav.mainFormName].elements.tab_popmenu.getTabFormNameAt(1) == 'svy_nav_fr_popmenuDocuments' &&
			forms[globals.nav.mainFormName].elements.tab_popmenu.visible == true) {
		forms[globals.nav.mainFormName].showDocuments(_event, true)
	}
	
	updateUI(forms[_toolbarForm].vMode);
}

/**
 * On show method, enables the right buttons
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @AllowToRunInFind 
 *
 * @properties={typeid:24,uuid:"C16CDCAD-9011-4AEE-8ED7-426C60FC19D8"}
 */
function onShowForm(firstShow, event) {
	
	if (!globals.nav) return;// navigation object is not yet loaded
	if (!globals.nav_currentPanel1Form) return; //no form loaded yet

	var form = controller.getName()
	var toolbarForm = getToolbarFormName(0, true)
	
	// Load correct table view form
	if (controller.view == JSForm.LOCKED_TABLE_VIEW) {
		scopes.globals.svy_nav_loadCorrectTableView(controller.getName());
	}
	
	if(!toolbarForm || toolbarForm == '-1') return
	var program = forms[toolbarForm].vProgram
	var mode = forms[toolbarForm].vMode
	var panel = forms[toolbarForm].vPanel
	
	if (forms[globals.nav_currentPanel1Form].getToolbarFormName() && forms[globals.nav_currentPanel1Form].getToolbarFormName() != '-1') {
		globals.nav_program_name = forms[forms[globals.nav_currentPanel1Form].getToolbarFormName()].vProgram
	}
		
	
	
	if (firstShow) {/*First show*/
		
		if (!foundset.isInFind() && !(mode && (mode == 'add' || mode == 'edit') || utils.stringRight(form, 4) == '_sea') && !globals.nav.program[program].noreadonly) {
			controller.readOnly = true
		}
		var fieldMode = 'browse'
		if(mode == 'add' || mode == 'edit') fieldMode = 'edit'
		globals.svy_nav_setFieldsColor(controller.getName(),fieldMode);
		
		if(getToolbarFormName())
		{
			//When this form is not on the main panel, but without parent => load records
			var context = controller.getFormContext();
			var panelForm = context.getValue(context.getMaxRowIndex()-1,2);
			if (scopes.modUtils$UI.isJSFormInstanceOf(panelForm, "svy_nav_fr_tabForm_base")) {
				var relation = forms[panelForm].elements.form.getTabRelationNameAt(1);
				if (form != globals.nav_currentPanel1Form && !relation) {
					loadRecords(program, true, null, null, null);
				}
			}
		}
		
	}
	
	if (panel == 1) { // main form	
		updateUI(mode,toolbarForm, true)
		
		setRecordInfoText(program, form)
		//main form can be set out of find if other form was activated.
		if(mode == 'find')
		{
			forms[globals.nav.mainFormName].controller.find()
		}
	}

	if (globals.nav[form + 'focusFirstField']) {
		controller.focusFirstField()
		globals.nav[form + 'focusFirstField'] = false
	}
}

/**
 *	Unload of the form
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D788B242-6897-449B-9174-78B8A24FEFA2"}
 */
function onUnload(_event) {
	return true;
}

/**
 * Handle focus element gaining focus.
 *
 * @param {JSEvent} _event the event that triggered the action
 *
 * @returns {Boolean} proceed to next on-focus-gained handler
 *
 * @properties={typeid:24,uuid:"9BC9624D-48D2-4A5D-8D9D-9A882FEEF5C6"}
 */
function onElementFocusGained(_event) {

	var _mode = getMode()
	if(_mode == '-1') return false // could not determine mode
	if(_mode == 'required_fields')
	{
		toggleRequiredField(_event)
		return true //otherwise onFocusGained is not triggered
	}
	else if (_mode == 'browse') return false

	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) return false //in the webclient it keeps getting the focus
	
	var _form = _event.getFormName()
	var _element = _event.getElementName()

	var _jsForm = solutionModel.getForm(globals.nav_styleForm)
	
	var _border = _jsForm.getField('fld_border_onFocus').borderType

	var _jsCForm = solutionModel.getForm(_form)

	var _type

	try {
		_type = forms[_form].elements[_element].getElementType()
	} catch (e) {
		_type = null;
	}

	if ( (_type == 'TEXT_FIELD' ||
	_type == 'TEXT_AREA' ||
	_type == 'RTF_AREA' ||
	_type == 'HTML_AREA' ||
	_type == 'TYPE_AHEAD' ||
	_type == 'COMBOBOX' ||
	_type == 'CHECK' ||
	_type == 'CALENDAR' ||
	_type == 'IMAGE_MEDIA' ||
	_type == 'PASSWORD' ||
	_type == 'LIST_BOX' ||
	_type == 'MULTISELECT_LISTBOX' ||
	_type == 'SPINNER') && forms[_form].elements[_element].editable) {
		if (_jsCForm.getField(_element) &&_jsCForm.getField(_element).styleClass && _jsForm.getField('fld_border_onFocus$' + _jsCForm.getField(_element).styleClass)) {
			var _style_border = _jsCForm.getField(_element).styleClass && _jsForm.getField('fld_border_onFocus$' + _jsCForm.getField(_element).styleClass).borderType
			forms[_form].elements[_element].setBorder(_style_border)
		} else {
			forms[_form].elements[_element].setBorder(_border)
		}
		vFocusElement = forms[_form].elements[_element];
		return true
	}

	return true
}

/**
 * Handle focus element loosing focus.
 *
 * @param {JSEvent} _event the event that triggered the action
 *
 * @returns {Boolean} proceed to next on-focus-lost handler
 *
 * @properties={typeid:24,uuid:"291598B4-DEF3-48FC-AF18-05697874A902"}
 */
function onElementFocusLost(_event) {
	
	var _toolbarForm = getToolbarFormName(null, true)
	
	// When No read only program is shown, save data immediately
	if (_toolbarForm != -1 && forms[_toolbarForm] && forms[_toolbarForm].vProgram && globals.nav.program[forms[_toolbarForm].vProgram]) {
		if (globals.nav.program[forms[_toolbarForm].vProgram].noreadonly == 1) {
			databaseManager.saveData(foundset);
		}
	}	
	
	if(!_toolbarForm || _toolbarForm == '-1') return false
	var _program = forms[_toolbarForm].vProgram
	var _mode = forms[_toolbarForm].vMode
	if (_mode == 'browse') return true //otherwise onFocusGained is not triggered
	
	scopes.openEdits.saveEditsToObject(globals.nav_layout_id, _program);
		
	var _form = _event.getFormName()
	var _element = _event.getElementName()

	var _jsForm = solutionModel.getForm(globals.nav_styleForm)
	var _border = _jsForm.getField('fld_border_default').borderType

	var _jsCForm = solutionModel.getForm(_form)

	//if (_jsCForm.view != JSForm.RECORD_VIEW) return false // only set borders in record view
	
	var _type

	try {
		_type = elements[_element].getElementType()
	} catch (e) {
		_type = null;
	}

	if ( (_type == 'TEXT_FIELD' ||
	_type == 'TEXT_AREA' ||
	_type == 'RTF_AREA' ||
	_type == 'HTML_AREA' ||
	_type == 'TYPE_AHEAD' ||
	_type == 'COMBOBOX' ||
	_type == 'CHECK' ||
	_type == 'CALENDAR' ||
	_type == 'IMAGE_MEDIA' ||
	_type == 'PASSWORD' ||
	_type == 'LIST_BOX' ||
	_type == 'MULTISELECT_LISTBOX' ||
	_type == 'SPINNER') && forms[_form].elements[_element].editable) {
		if (_jsCForm.getField(_element) && _jsCForm.getField(_element).styleClass && _jsForm.getField('fld_border_default$' + _jsCForm.getField(_element).styleClass)) {
			var _style_border = _jsCForm.getField(_element).styleClass && _jsForm.getField('fld_border_default$' + _jsCForm.getField(_element).styleClass).borderType
			forms[_form].elements[_element].setBorder(_style_border)
		} else {
			forms[_form].elements[_element].setBorder(_border)
		}
	}
	

	return true
}

/**
 *	To create a new record
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [event] the event that triggered the action
 * @param {String}	[triggerForm] (svy_nav_fr_buttonbar_browser/svy_nav_fr_buttonbar_viewer)
 * @param {String} [toolbarForm]
 * @param {Boolean} [createRecordOnTop] if true, the new record will be created on top of the foundset
 * @return {Boolean} if false no new Record
 *
 *
 * @properties={typeid:24,uuid:"A643B3D1-A21C-4F16-9513-F707A7FDEF98"}
 */
function dc_new(event, triggerForm, toolbarForm, createRecordOnTop) {
	if (!toolbarForm) {
		toolbarForm = getToolbarFormName();
	}
	var mode = forms[toolbarForm].vMode
	
	if(mode == 'find') {//Don't allow to create records in find mode. This is a precaution, the duplicate button should be disabled in find mode!
		return false;
	}
	
	if (!hasRelationFoundsetToFoundset()) 
	{
		if(isBlockedByUnsavedParent()) return false;
	}
	
	// Switch the program view, if required
	if(switchForEdit(event, arguments['callee'].name, toolbarForm))
	{	         
		 return	false 
	}	         
	
	var program = forms[toolbarForm].vProgram
	
	var createOnTop = true;
	if (createRecordOnTop == false || createRecordOnTop == true) {
		// passed as parameter
		createOnTop = createRecordOnTop;
	} else {
		createOnTop = scopes.svyProperties.getPropertyValueAsBoolean("create_new_records_on_top");
	}

	mode = 'add'

	databaseManager.setAutoSave(false)
	controller.newRecord(createOnTop)
	setFormToEdit(toolbarForm)


	/** @type {{filter:Array<{filter_value:String, filter_operator:String, filter_field_name:String}>, view:Number}} */
	var _progObj = globals.nav.program[program]
	// if there are filters for the form the new record gets the values of the filter.
//	if (_panel > 1) {
//		var _form = _event.getFormName()
//		if(globals.nav.new_record_filter)
//		{
//			for (var n = 0; n < globals.nav.new_record_filter.length; n++) {
//				if(!forms[_form][globals.nav.new_record_filter[n][0]]){ //don't enter primary keys
//					forms[_form][globals.nav.new_record_filter[n][0]] = globals.nav.new_record_filter[n][2]
//				}
//				else
//				{
//					//check if column is pk
//					var _pk = globals.svy_utl_getRowIdentifierName(_form)
//					if(_pk == globals.nav.new_record_filter[n][0])
//					{
//						globals.nav.childRelation = new Object()
//						globals.nav.childRelation.field = globals.nav.new_record_filter[n][0]
//						globals.nav.childRelation.form = globals.nav.his.foundset_related_form;
//						globals.nav.childRelation.field_child = globals.nav.new_record_filter[n][3]
//					}
//				}
//			}
//		}
		//TODO :  Next SA fix the autofill	
		var _autofill = []
		var tabId;
		if (globals.nav.switchedForEdit) {
			tabId = globals.nav.switchedForEditTabId;
		} else {
			tabId = forms[toolbarForm].vTabId;
		}
		
		if (tabId) {
			/** @type {JSRecord<db:/svy_framework/nav_tab>} */
			var tabRecord = scopes.modUtils$data.getRecord("db:/"+globals.nav_db_framework+"/nav_tab", tabId);
			if (tabRecord) {
				if (databaseManager.hasRecords(tabRecord.nav_tab_to_nav_tab_autofill)) {
				
					var form = controller.getName();
					var parentRec;
					var autoFillRec;
					if (globals.nav.switchedForEdit) {//navigated for edit so determine parent record from history
						var hisObj = globals.nav.stack[globals.nav.stack_position-1]
						parentRec = hisObj.panels[0].foundset.getSelectedRecord();
					} else {
						parentRec = forms[globals.nav_currentPanel1Form].foundset.getSelectedRecord();
					}	
					for (var m = 1; m <= tabRecord.nav_tab_to_nav_tab_autofill.getSize(); m++) {
						autoFillRec = tabRecord.nav_tab_to_nav_tab_autofill.getRecord(m);
						
						// expression type (field|1, value|2, globals|3, related field|4, method|5)
						switch (autoFillRec.expression_type) {
							case 1:
								forms[form][autoFillRec.child_field] = parentRec[autoFillRec.parent_expression];
								break;
							case 2:
								forms[form][autoFillRec.child_field] = autoFillRec.parent_expression;
								break;
							case 3:
								forms[form][autoFillRec.child_field] = globals[autoFillRec.parent_expression];
								break;
							case 4:
								/** @type {Array} */
								var fieldArray = autoFillRec.parent_expression.split(".")
								if (fieldArray.length == 2) {
									if (databaseManager.hasRecords(parentRec[fieldArray[0]])) {
										forms[form][autoFillRec.child_field] = parentRec[fieldArray[0]][fieldArray[1]];
									}
								} else if (fieldArray.length == 3) {
									if (databaseManager.hasRecords(parentRec[fieldArray[0]]) && databaseManager.hasRecords(parentRec[fieldArray[0]][fieldArray[1]])) {
										forms[form][autoFillRec.child_field] = parentRec[fieldArray[0]][fieldArray[1]][fieldArray[2]];
									}
			
								}
								break;
							case 5:
								forms[form][autoFillRec.child_field] = eval(autoFillRec.parent_expression);
								break;
						}
					}
				}

			}
		}
//		if(globals.nav.switchedForEdit) //navigated for edit so get items from history
//		{
//			if (globals.nav.program[globals.nav.his.parentProgram].tab[globals.nav.his.tabIndex].autofill) {
//				 _autofill = globals.nav.program[globals.nav.his.parentProgram].tab[globals.nav.his.tabIndex].autofill
//			}
//		}
//		else
//		{
//			if (globals.nav.program[globals.nav_program_name].tab[globals.nav.getTabSelected()].autofill) {
//			 	_autofill = globals.nav.program[globals.nav_program_name].tab[globals.nav.getTabSelected()].autofill
//			}
//		}	

		if (_autofill) {}
		//END TODO
		
//	} else {
		for (var j = 0; j < _progObj.filter.length; j++) {
			/** @type {String} */
			var _value = _progObj.filter[j].filter_value
				//global value is used
			if (utils.stringPatternCount(_value, 'globals.')) {
				_value = eval(_value)
			}
			if(_value != undefined && _progObj.filter[j].filter_operator == '=')
			{
				foundset[_progObj.filter[j].filter_field_name] = _value
			}
		}
//	}
	
	//update the UI
	updateUI(mode, toolbarForm)
	
	//run onPostNew-method of table when available
	dc_new_post(foundset)
	
	return true 
}

/**
 *	To go to edit mode
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	[_triggerForm] (svy_nav_fr_buttonbar_browser/svy_nav_fr_buttonbar_viewer)
 * @param {String} [_toolbarForm]
 * @return {Boolean} Return true if edit else false no edit.
 *
 * @properties={typeid:24,uuid:"1C3BF3FE-E5CD-4F21-ABB7-CD6BC0679E6E"}
 */
function dc_edit(_event, _triggerForm, _toolbarForm) {
	if (!_toolbarForm) {
		_toolbarForm = getToolbarFormName();
	}
	var _mode = forms[_toolbarForm].vMode
	
	if(_mode == 'find') {//Don't allow to go to edit mode from find mode. This is a precaution, the edit button should be disabled in find mode!
		return false;
	}
	
	// Switch the program view, if required
	if(switchForEdit(_event, arguments['callee'].name, _toolbarForm))	 
	{	        
		 return false
	}	 
	var _program = forms[_toolbarForm].vProgram
	var _success

		// acquire a lock or not, based on the program properties
	if (globals.nav.program[_program].record_locking) {

		if (controller.view != 0) //list or table view, so lock more records
		{
			_success = databaseManager.acquireLock(foundset, -1, _program)
			if (!_success) {
				globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.record_lock'), i18n.getI18NMessage('svy.fr.lbl.ok'));
				return false;
			}

		} else {
			_success = databaseManager.acquireLock(foundset, 0, _program)
			if (!_success) {
				globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.record_lock'), i18n.getI18NMessage('svy.fr.lbl.ok'));
				return false;
			}

		}
	}
	_mode = 'edit'



	globals.nav.readOnlyset = 1
	databaseManager.setAutoSave(false)
	setFormToEdit(_toolbarForm)
	
	//update the UI
	updateUI(_mode, _toolbarForm);
	
	return true

}

/**
 * Updates UI of the form, when changing status
 * This method is used by a lot of methods like dc_new, dc_save ect.
 * 
 * @author Joas de Haan
 * @since 2011-12-22
 * 
 * @param {String} [_mode]
 * @param {String} [_toolbarForm]
 * @param {Boolean} [_forceModeChange]
 *
 * @properties={typeid:24,uuid:"FF188476-E810-4DE5-940B-835D7702963E"}
 */
function updateUI(_mode, _toolbarForm, _forceModeChange) {
	var _form = controller.getName();
	if(!_toolbarForm || _toolbarForm == "-1")  _toolbarForm = getToolbarFormName();
	if(!_toolbarForm || _toolbarForm == "-1")  return;
	var _modeChange = false
	if(_forceModeChange) _modeChange = true
	else if(_mode != forms[_toolbarForm].vMode) _modeChange = true
	
	if (_mode) {
		forms[_toolbarForm]["vMode"] = _mode;
	} else {
		_mode = forms[_toolbarForm].vMode;
	}

	// set _browse and fieldcoloring
	
	var _program = forms[_toolbarForm].vProgram

	/** @type {{required_fields:Object,noreadonly:Number,program_id:String,tab:Array}} */
	var _progObj = globals.nav.program[_program]
	if (_mode == 'edit' || _mode == 'add' || _mode == 'find') {
		//TODO: remove workaround is for bug SVY-2641
		forms[_form].controller.readOnly = true
		forms[_form].controller.readOnly = false
		globals.nav[_form + 'focusFirstField'] = true

		if (_mode != 'find' && _modeChange) {
			globals.svy_nav_setFieldsColor(_form, 'edit')
			globals.svy_nav_setRequiredFields(_progObj, _form, 'edit')
		}
	} else if (_mode == 'required_fields') {
		globals.svy_nav_setRequiredFields(_progObj, _form, 'required_fields')
	} else {
		//TODO: remove workaround is for bug SVY-2641
		forms[_form].controller.readOnly = false
		forms[_form].controller.readOnly = !_progObj.noreadonly
		if(_modeChange)
		{
			globals.svy_nav_setFieldsColor(_form, 'browse')
			globals.svy_nav_setRequiredFields(_progObj, _form, 'browse')
		}
	}


	if (_mode == 'browse') {
		if (forms[_form].gotoBrowse) {
			forms[_form].gotoBrowse()
		}

	} else if (_mode == 'edit' || _mode == 'add') {
		if (forms[_form].gotoEdit) {
			forms[_form].gotoEdit()
		}
	}

	//Update the toolbar
	forms[_toolbarForm].updateUI(_mode);
	
	//Update the openLayout form
	if(globals.svy_nav_multi_tab_programs)
	{
		forms[globals.nav.openLayoutFormName].updateUI();
	}
	
	//TODO: also call updateUI on the child panels
}

/**
 *	Deletes a record and checkes if the delete was succesfull
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {Boolean} [_noDialog] Don't show a confirmation dialog when true
 * @return {Number} -1 did not happen, 1 was success

 * @properties={typeid:24,uuid:"FDE36218-0F1B-45AF-9214-66098A470098"}
 */
function dc_delete(_event, _noDialog) {
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	var _return = 1
	
	//determine if multiple records are selected
	var _indexes = foundset.getSelectedIndexes()
	var _multiDelete = false
	if (_indexes.length > 1) _multiDelete = true

	var _methodReturn = dc_delete_pre(foundset, _multiDelete)
	if (_methodReturn == -1) {
		return -1;
	}

	// acquire a lock or not, based on the program properties
	if (globals.nav.program[_program].record_locking) {
		var success
		if (_multiDelete)// lock the hole foundset
		{
			success = databaseManager.acquireLock(foundset, -1, _program)
		} else {
			success = databaseManager.acquireLock(foundset, 0, _program)
		}
		if (!success) {
			globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.record_lock'), i18n.getI18NMessage('svy.fr.lbl.ok'));
			return -1;
		}
	}

	var _message, _yes, _no, _answer;
	if (!_noDialog) {
		_message = dc_delete_message(_multiDelete);
		_yes = i18n.getI18NMessage('svy.fr.lbl.yes')
		_no = i18n.getI18NMessage('svy.fr.lbl.no')
		_answer = globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), _message, _yes, _no);
	}	
	
	if (_answer == _yes || _noDialog) {
		databaseManager.startTransaction()
		
		_methodReturn = dc_delete_pre_action(foundset, _multiDelete);
		if (_methodReturn == -1) {
			databaseManager.rollbackTransaction(false, false);
			return -1;
		}
		var _succes = controller.deleteRecord()

		dc_delete_post(foundset, _multiDelete)

		if (_succes) {
			databaseManager.commitTransaction(false)
		} else {
			_return = -1
			databaseManager.rollbackTransaction(false, false);
			globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete_cancel'), i18n.getI18NMessage('svy.fr.lbl.ok'))
		}

	}
	
	return _return
}

/**
 * Is called inside the transaction, can be used to delete/change other records -> changes can be canceled
 * 
 * @author Joas de Haan
 * @since 2011-09-06
 * @param {JSFoundSet} _foundset
 * @param {Boolean} _multiDelete
 * 
 * @properties={typeid:24,uuid:"5C6EDF26-12D5-4EE3-8745-5C4D0CE5B87B"}
 */
function dc_delete_pre_action(_foundset, _multiDelete) {
}

/**
 *	Duplicates the selected record and goes to edit mode
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	[_triggerForm] (svy_nav_fr_buttonbar_browser/svy_nav_fr_buttonbar_viewer)
 * @param {String} [_toolbarForm]
 * @param {Boolean} [_createRecordOnTop] if true, the new record will be created on top of the foundset
 * @return {Boolean} true, there was a duplicate, false there was no duplicate.
 *
 *
 * @properties={typeid:24,uuid:"8EA1287F-17B4-4DBB-BECB-4E22260D2B48"}
 */
function dc_duplicate(_event, _triggerForm, _toolbarForm, _createRecordOnTop) {
	if (!_toolbarForm) {
		_toolbarForm = getToolbarFormName();
	}
	var _mode = forms[_toolbarForm].vMode
	
	if(_mode == 'find') {//Don't allow to create records in find mode. This is a precaution, the duplicate button should be disabled in find mode!
		return false;
	}
	
	if (!hasRelationFoundsetToFoundset()) 
	{
		if(isBlockedByUnsavedParent()) return false;
	}
	
	// Switch the program view, if required
	if(switchForEdit(_event, arguments['callee'].name, _toolbarForm))
	{
		return false
	}

	var _createOnTop = true;
	if (_createRecordOnTop == false || _createRecordOnTop == true) {
		// passed as parameter
		_createOnTop = _createRecordOnTop;
	} else {
		var _propertyValue = scopes.svyProperties.getPropertyValues("create_new_records_on_top");
		if (_propertyValue != null && _propertyValue[0] != null) {
			_createOnTop = _propertyValue[0] ? true : false;
		}
	}

	_mode = 'add'

	databaseManager.setAutoSave(false)
	controller.duplicateRecord(_createOnTop)
	setFormToEdit(_toolbarForm)
	
	//run onPostDuplicate-method of table
	dc_duplicate_post(foundset)
	
	//update the UI
	updateUI(_mode, _toolbarForm)
	
	return true
}

/**
 *	Sorts a form with the sort order of the program propeties
 *
 * @author Sanneke Aleman
 * @since 2007-07-03
 * 
 * TODO: the _form parameter is not used.
 * @param {String}	[_form] name of the form 
 * @param {String}	[_program] name of the program
 * @param {Boolean}	[_defer] boelean sort defer
 * @return  none
 *
 * @properties={typeid:24,uuid:"E70CF323-F3AA-4DF1-A9BC-0FCC5C928E9A"}
 */
function dc_sort(_form, _program, _defer) {
	
	if (!_program) {
		_program = forms[getToolbarFormName()].vProgram;
	}

	if (_defer == undefined) _defer = false

	if (globals.nav.program[_program].sort_value) {
		if(foundset.getCurrentSort() != globals.nav.program[_program].sort_value)
		{
			foundset.sort(globals.nav.program[_program].sort_value, _defer)
		}
	}
}

/**
 *	Shows popup search menu with in it extend/reduce/save/line/the saved searches
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @return  none
 *
 *
 * @properties={typeid:24,uuid:"45691F1D-6C24-4E36-A3D3-4497EEF408C6"}
 * @AllowToRunInFind
 */
function dc_searchPopmenu(_event) {	
	
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	var _mode = forms[_toolbarForm].vMode
	
	globals.svy_sea_searchForm = controller.getName()
	globals.svy_sea_mainForm = globals.nav.mainFormName;
	
	//used in the relation
	globals.nav_program_name = _program
	globals.nav_program_id = _to_nav_program.program_id

	var _menu = plugins.window.createPopupMenu()
	_menu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.extend_search'), globals.svy_sea_extend_find, 'media:///find_extend.png')
	_menu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.reduce_search'), globals.svy_sea_reduce_find, 'media:///find_reduce.png')
	_menu.addSeparator()
	_menu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.save_regular_search'), globals.svy_sea_saveSearch, 'media:///find_save.png')
	_menu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.delete_regular_search'), globals.svy_sea_deleteSearch, 'media:///find_delete.png')

	if (_mode == 'browse') {
		/* edit. */
		// show saved regular searches
		if (_to_search_criteria$user_id$organization_id$search_form_name.getSize() != 0) {
			_menu.addSeparator()
		}
		
		for (var i = 1; i <= _to_search_criteria$user_id$organization_id$search_form_name.getSize(); i++) {
			var _recRegular = _to_search_criteria$user_id$organization_id$search_form_name.getRecord(i)
			var _menuItemRegular = _menu.addMenuItem(_recRegular.name, globals.svy_sea_restoreSearchFromPopmenu)
			_menuItemRegular.methodArguments = [_recRegular.search_criteria_id, false];
		}
		
		// search for advanced searches based on this form type and user table view
		_to_nav_advanced_search$program_id$user_id$organization_id.find();
		_to_nav_advanced_search$program_id$user_id$organization_id.form_name = controller.getName();
		if (globals.nav.program[_program].user_table_view_id) {
			_to_nav_advanced_search$program_id$user_id$organization_id.user_table_view_id = globals.nav.program[_program].user_table_view_id;
		} else {
			_to_nav_advanced_search$program_id$user_id$organization_id.user_table_view_id = '^=';
		}
		
		_to_nav_advanced_search$program_id$user_id$organization_id.search();
		
		if (_to_nav_advanced_search$program_id$user_id$organization_id.getSize() != 0) {
			_menu.addSeparator();
		}

		for (var j = 1; j <= _to_nav_advanced_search$program_id$user_id$organization_id.getSize(); j++) {
			var _recAdvanced = _to_nav_advanced_search$program_id$user_id$organization_id.getRecord(j);
			if(!_recAdvanced.name)continue
			var _menuItemAdvanced = _menu.addMenuItem(_recAdvanced.name, globals.svy_sea_restoreSearchFromPopmenu, 'media:///advanced_16_16.png');
			_menuItemAdvanced.methodArguments = [_recAdvanced.nav_advanced_search_id, true];
		}		
	}
	/** @type {RuntimeComponent} */
	var _source = _event.getSource()
	if (_source != null) {
		_menu.show(_source);
	}
}

/**
 *	Loads all records.
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D1C36E6-3FDB-4D97-B6DC-57BDD9961A2F"}
 * @AllowToRunInFind
 */
function dc_loadAll(_event) {
	var _toolbarForm = getToolbarFormName()
	if(_toolbarForm == '-1') return
	var _program = forms[_toolbarForm].vProgram
	var _panel = forms[_toolbarForm].vPanel

	var _fs_size = foundset.getSize()
		//if form is the top form
	if (_panel == 1) {
		
		var _selected_index = controller.getSelectedIndex()

		globals.nav.program[_program].active_search = null;
		globals.nav.program[_program].search_type = null;
		globals.nav.program[_program].search_id = null;		
		
		foundset.loadAllRecords()

		// to set the index right, if you don't do this it can go wrong by a big global foundset
		var _new_selected_index = controller.getSelectedIndex()
		if (_new_selected_index != _selected_index) {
			foundset.getRecord(_selected_index)
			controller.setSelectedIndex(_selected_index)
		}
	}
	else {
		foundset.loadRecords()
	}
	
	syncFoundsets(foundset)
	if(_fs_size < 2 )//if foundset was empty before, or one record
	{
		updateUI()
	}
}

/**
 * @param {String} [program]
 * @param {Boolean} [showAll]
 * @param {JSFoundSet} [fs]
 * @param {Number} [recordIndex]
 * @param {*} [pk]
 * @param {String} [tabId]
 * 
 * @properties={typeid:24,uuid:"481558FE-51C3-46E6-8385-32EB135C7AE4"}
 */
function loadRecords(program, showAll, fs, recordIndex, pk, tabId) {
	//don't load data in find mode.
	if(getMode() == 'find') showAll = false
	
	if (!program && getToolbarFormName() != '-1') {
		program = forms[getToolbarFormName()].vProgram
	}
	
	// set the foundset of the form, if a form doesn't have a table you don't have to load a foundset
	if (fs) {
		controller.loadRecords(fs);
	} else if (pk) {
		/** @type {JSDataSet} */
		var ds = databaseManager.convertToDataSet(pk)
		controller.loadRecords(ds)
	} else if (showAll) {
		if (!program) {
			return;
		}
		
		/** @type {{	view:Number,
		 * 				foundset:JSFoundset,
		 * 				divider_height:Number,
		 * 				base_form_name:String,
		 * 				path:Array,
		 * 				filter:Array<{filter_field_name:String, filter_operator:String}>,
		 * 				nobuttonbar:Number,
		 * 				form:Array,
		 * 				divider_locked:Number,
		 * 				tab:Array,
		 * 				empty_foundset:Boolean,
		 * 				sort_value: String,
		 * 				table_name:String}}*/
		var progObj = globals.nav.program[program];
		if (progObj.table_name) {
			if (progObj.foundset) {
				dc_sort(globals.svy_nav_form_name, program, true);
				progObj.foundset.loadAllRecords()
				controller.loadRecords(progObj.foundset)
			} else if (!progObj.empty_foundset) {
				progObj.foundset = databaseManager.getFoundSet(controller.getDataSource())
				if (progObj.sort_value) {
					progObj.foundset.sort(progObj.sort_value, true);
				}
				dc_sort(null, program, true);
				// set filters
				for (var j = 0; j < progObj.filter.length; j++) {
					/** @type {String} */
					var value = globals.nav.program[program].filter[j].filter_value
						//global value is used
					if (/^(globals|scopes)\./.test(value)) {
						value = eval(value)
					} else if (/(globals|scopes)\./.test(value)) {
						var global = value.match(/((globals|scopes\.\w*)\.\w*)/)[0]
						value = value.replace(/((globals|scopes\.\w*)\.\w*)/, eval(global));
					}
					progObj.foundset.addFoundSetFilterParam(progObj.filter[j].filter_field_name, progObj.filter[j].filter_operator, value)
				}
				
				progObj.foundset.loadAllRecords()
				controller.loadRecords(progObj.foundset)
			}
			syncFoundsets(progObj.foundset, tabId);
		}
	}
}

/**
 *	To export the current foundset to a file
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	[_triggerForm] (svy_nav_fr_buttonbar_browser/svy_nav_fr_buttonbar_viewer)
 * @return  none
 *
 * @properties={typeid:24,uuid:"CCD65F1C-3A6C-4ED0-93AA-8EC9BBFBA47A"}
 */
function dc_export(_event, _triggerForm) {
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram

	// get the names of the fields on the form
	var _colProps = getExportFormFields(controller.getName());

	/** @type {Array} */
	var _colList = _colProps[0];
	var _colValueList = _colProps[1];
	var _colFormats = _colProps[2];
	var _maxCols = _colList.length;
	var _format;

	if (_colList.length > 0) {
		
		/** @type {String} */
		var fileName = 'Export_' + globals.nav.program[_program].description + '_' + utils.dateFormat(new Date(), 'yyyy-MM-dd') + '.xls'
		
		//prompt for the fileName is smart client
		if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT || application.getApplicationType() == APPLICATION_TYPES.RUNTIME_CLIENT)
		{
			fileName = plugins.file.showFileSaveDialog(fileName)
		}
		
		
		//output the column names first
		var _output = _colList.join('\t')
		var _record
		//loop through foundset of form and get all the columns and data
		for (var i = 1; i <= foundset.getSize(); i++) {
			_record = foundset.getRecord(i)
			for (var c = 0; c < _maxCols; c++) {
				if (c == 0) {
					//first column
					_output += '\n"';
				} else {
					//subsequent columns
					_output += '\t"';
				}
				if (!_colValueList[c]) {
					if (_colFormats[c]) {
						if (/i18n/.test(_colFormats[c])) {
							_format = i18n.getI18NMessage(_colFormats[c]);
						} else {
							_format = _colFormats[c];
						}
						_output += utils.dateFormat(_record[_colList[c]], _format) + '"';
					} else {
						_output += _record[_colList[c]] + '"';
					}
				} else {
					_output += application.getValueListDisplayValue(_colValueList[c], _record[_colList[c]]) + '"'
				}
			}
		}

		
			//see if they chose an export name
		if (fileName) {
			var success = plugins.file.writeTXTFile(fileName, _output)
			if (success) {
				globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('svy.fr.lbl.export'), i18n.getI18NMessage('svy.fr.dlg.export_successful'), i18n.getI18NMessage('svy.fr.lbl.ok'))
			} else {
				globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.export'), i18n.getI18NMessage('svy.fr.dlg.export_failed'), i18n.getI18NMessage('svy.fr.lbl.ok'))
			}
		}

	}
}

/**
	 *	To export the current foundset to a file
	 *
	 * @author Sanneke Aleman
	 * @since 2007-05-24
	 * @param {String}	_form
	 * @return {Array} 
	 *
	 * @properties={typeid:24,uuid:"697980B3-64A8-4BF5-A3E6-32FD20A37AB4"}
	 */
function getExportFormFields(_form) {
	//pass in the form name
	var _elements = forms[_form].elements.allnames;
	var _colNames = new Array();
	var _vlNames = new Array();
	var _formats = new Array();
	var _jsTable, _JSColumn, _relation;
	/** @type {String} */
	var _datap

	if (/_tbl/.test(_form) && _elements.length > 0) {
		_elements.sort(function(a, b) {
			return forms[_form].elements[a].getLocationX() - forms[_form].elements[b].getLocationX()
		});
	}

	var _type
	for (var i = 0; i < _elements.length; i++) {
		// only export field not buttons.
		_type = forms[_form].elements[_elements[i]].getElementType()
		if (_type == 'TEXT_FIELD' ||
		_type == 'TEXT_AREA' ||
		_type == 'RTF_AREA' ||
		_type == 'HTML_AREA' ||
		_type == 'TYPE_AHEAD' ||
		_type == 'COMBOBOX' ||
		_type == 'RADIOS' ||
		_type == 'CHECK' ||
		_type == 'CALENDAR' ||
		_type == 'IMAGE_MEDIA' ||
		_type == 'LABEL' ||
		_type == 'PASSWORD') {
			_datap = forms[_form].elements[_elements[i]].getDataProviderID()
			
			if (_datap) {
				_colNames[_colNames.length] = _datap;

				
				if (!/\./.test(_datap)) {
					_jsTable = databaseManager.getTable(forms[_form].foundset);
				} else { //related field
					_relation = _datap.replace(/\.\w*$/, "");
					_datap = _datap.match(/(\w*)$/)[0];
					_jsTable = databaseManager.getTable(forms[_form].foundset[_relation]);
				}
				
				_JSColumn = _jsTable.getColumn(_datap); 
				
				if (_JSColumn && _JSColumn.getType() == JSColumn.DATETIME && forms[_form].elements[_elements[i]].format) {
					_formats[i] = forms[_form].elements[_elements[i]].format;
				}

				
				if (_type != 'LABEL' && _type != "IMAGE_MEDIA" && _type != 'CALENDAR' && !/_AREA$/.test(_type)) {
					_vlNames[i] = forms[_form].elements[_elements[i]].getValueListName();
				}
			}
		}
	}

	return [_colNames, _vlNames, _formats];
}

/**
 *	Reset the table view persistance
 *
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	[_triggerForm] (svy_nav_fr_buttonbar_browser/svy_nav_fr_buttonbar_viewer)
 * @return  none
 *
 * @properties={typeid:24,uuid:"808A2787-A541-45CF-B94C-46C74CFCC6B4"}
 */
function dc_resetTableViewPersistance(_event, _triggerForm) {
	controller.recreateUI()
}

/**
 *	Set the right form and call globals.svy_sea_find
 *
 * @param {JSEvent} [event]
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"8F04EDE8-29DE-40D7-966D-A9FF93650B86"}
 */
function dc_find(event) {
	// first check whether or not there are edited records in a datasource where the user tries to search
	var visibleFormNames = globals.svy_nav_getAllVisibleFormNames(true);
	var editedRecords = databaseManager.getEditedRecords();
	
	for (var i = 0; i < visibleFormNames.length; i++) {
		for (var j = 0; j < editedRecords.length; j++) {
			if (forms[visibleFormNames[i]].foundset.getDataSource() == editedRecords[j].getDataSource()) {
				globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('svy.fr.dlg.error'), i18n.getI18NMessage('svy.fr.find_edited_records_found'), 'OK');
				return;
			}
		}
	}
	
	// no edited records were found so the find can be performed
	var toolbarForm = getToolbarFormName()
	var panel = forms[toolbarForm].vPanel
	
	if (panel == 1) {
		globals.svy_sea_mainForm = globals.nav.mainFormName;
		globals.svy_sea_searchForm = controller.getName()
//		application.output('search...'+globals.svy_sea_mainForm)
//		application.output('search...'+globals.svy_sea_searchForm)
	} else {
		globals.svy_sea_mainForm = controller.getName()
		globals.svy_sea_searchForm = controller.getName()
	}

	globals.svy_sea_find();
}

/**
 *	Save the edited data to the database in a transaction, If in search call the search
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	[_triggerForm] (svy_nav_fr_buttonbar_browser/svy_nav_fr_buttonbar_viewer)
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"63FF12D7-0060-4DAD-81BF-D5E7B950871A"}
 * @AllowToRunInFind
 */
function dc_save(_event, _triggerForm) {
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	var _mode = forms[_toolbarForm].vMode
	var _record, i
	/** @type {Array<JSRecord>} */
	var _savedRecords = []
	/** @type {Array<JSRecord>} */
	var _failedArray;
	var _return
                      
	if(_mode == 'find') // if in find mode, search
	{
		// controller.search()
		globals.svy_sea_search(null,null,null,controller.getName());
		return 1
	}
	else if (_mode == 'required_fields')
	{	
		saveRequiredFields()
		updateUI('browse')
		return 1
	}


	//run validate-method of table when available
	var _methodReturn = dc_save_validate(foundset, _program)
	if (_methodReturn == -1) {
		return -1;
	}

	databaseManager.startTransaction()

	//run onPreSave-method of table when available
	_methodReturn = dc_save_pre(foundset)
	if (_methodReturn == -1) {
		return -1;
	}

	setFormToEdit(_toolbarForm)
	scopes.openEdits.saveEditsToObject(globals.nav_layout_id, _program)
	
	_return = scopes.openEdits.saveEditsFromObject(_program)
	if(_return)
	{
		_savedRecords.concat(_return)
	}
		

	//run onPostSave-method of table when available
	_methodReturn = dc_save_post(foundset)
	if (_methodReturn == -1) {
		databaseManager.rollbackTransaction()
		return -1;
	}
	
	setFormToEdit(_toolbarForm)
	scopes.openEdits.saveEditsToObject(globals.nav_layout_id, _program)
	_return = scopes.openEdits.saveEditsFromObject(_program)
	if(_return)
	{
		_savedRecords.concat(_return)
	}
	databaseManager.releaseAllLocks(_program)

	// commit with output if the commit went wrong
	if (!databaseManager.commitTransaction(false)) {
		_failedArray = databaseManager.getFailedRecords()
		var _ex = "";
		
		for (i = 0; i < _failedArray.length; i++) {
			_record = _failedArray[i];
			if (_record.exception) {
				_ex += _record.exception.getMessage() + "\n" + _record.exception.getStackTrace() + "\n\n\n";
			}
		}
		if (_ex != "") {
			globals.DIALOGS.showWarningDialog('Error in commit', _ex, 'OK');
//			application.output(_ex, LOGGINGLEVEL.WARNING);
		}
		
		for (var k = 0; k < _savedRecords.length; k++) {
			_savedRecords[k].revertChanges()
		}
		databaseManager.rollbackTransaction()
		databaseManager.releaseAllLocks(_program)
		updateUI('browse')
		return -1;
	}

	updateUI('browse')
	switchBackFromEdit(_event);
	
	return 1

}

/**
 * @properties={typeid:24,uuid:"DDBE161C-FE45-45CB-98CD-2DD79373875F"}
 * @param {JSEvent} [_event]
 * @param {String} [_triggerForm]
 * @param {Boolean} [_noDialog]
 * @return {Number} 1:if user wants to cancel
 * 					0:if there is nothing to cancel (no edited records)/or cancel is called by find or required fields.
 * 				   -1:if the user doesn't want to cancel, or dc_cancel_pre doesn't allow to cancel
 * @AllowToRunInFind
 */
function dc_cancel(_event, _triggerForm, _noDialog) {
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	var _mode = forms[_toolbarForm].vMode
    var _return = 0

    if (_mode == 'find') // if in find mode, cancel the find
    {
        // controller.search()
        globals.svy_sea_cancelSearch()
        updateUI('browse')
        return _return
    }
    else if(_mode == 'required_fields')
    {
    	cancelRequiredFields()
		updateUI('browse')
    	 return _return
    	
    }

    // show the dialog
    var _yes = i18n.getI18NMessage('svy.fr.lbl.yes')
    var _no = i18n.getI18NMessage('svy.fr.lbl.no')

    var _answer;
    // var _editedRecords = databaseManager.getEditedRecords();
    var _editedRecords = scopes.openEdits.hasEditsInObject(_program);
    if (!_editedRecords || _noDialog) {
        _answer = _yes;
    } else {
        _answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.cancel'), i18n.getI18NMessage('svy.fr.dlg.cancel_record'), _yes, _no);
    }

    if (_answer == _yes) {
    	_return = 1
        var _methodReturn

        _methodReturn = dc_cancel_pre(foundset)
        if (_methodReturn == -1) {
        	_return = -1
            return _return ;
        }
        
        setFormToEdit(_toolbarForm)
        scopes.openEdits.rollBackEditsFromObject(_program)

        databaseManager.releaseAllLocks(_program)
		updateUI('browse');
        
		switchBackFromEdit(_event);
    }
    else 
    {
    	_return = -1
    }
    return _return
}

/**
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"921EDB74-C185-4079-B71E-A930A97B95F7"}
 */
function switchBackFromEdit(_event) {
    if (globals.nav.switchedViewForEdit) {
    	dc_switchView(_event)
    	globals.nav.switchedViewForEdit = false;
    } else if (globals.nav.switchedForEdit) {
//		var _fs = forms[globals.nav.stack[globals.nav.stack_position].form].foundset.duplicateFoundSet()
        globals.nav.stack_position--
    	forms[globals.nav.mainFormName].history_move(_event, globals.nav.stack_position)//, _fs)
        globals.nav.switchedForEdit = false
    }
}

/**
 *	To set the index to 1
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C8B3936-6C69-44CB-B396-7FA581757EDA"}
 */
function dc_recFirst(_event) {
	scopes.modUtils$data.selectFirstRecord(foundset)
}

/**
 *	Set index to previous record
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C18115C-AE9E-46F8-9922-F9468D85C568"}
 */
function dc_recPrev(_event) {
	scopes.modUtils$data.selectPreviousRecord(foundset)
}

/**
 *	Set index to next record
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E6EC1EA4-E312-4A3A-8989-0ABF32EB3D18"}
 */
function dc_recNext(_event) {
	scopes.modUtils$data.selectNextRecord(foundset)
}

/**
 *	Set index to last record
 *
 * @author Sanneke Aleman
 * @since 2007-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @properties={typeid:24,uuid:"480DBC55-5057-4556-818B-0EB483E107D6"}
 */
function dc_recLast(_event) {
	scopes.modUtils$data.selectLastRecord(foundset)
}

/**
 *	Shows record information and information about the size of the foundset
 *
 * @author Sanneke Aleman
 * @since 2009-05-24
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	[_triggerForm] (svy_nav_fr_buttonbar_browser/svy_nav_fr_buttonbar_viewer)
 * @return  none
 *
 * @properties={typeid:24,uuid:"5CC51767-4303-469E-ACE6-CD3D610FC93F"}
 */
function dc_recInfo(_event, _triggerForm) {
	var _tableCount = databaseManager.getTableCount(foundset)
	var _foundsetCount = databaseManager.getFoundSetCount(foundset)

	var _table_percent = (_tableCount - _foundsetCount) / _tableCount
	var _foundset_percent = (_foundsetCount) / _tableCount

	forms.svy_nav_fr_recordInformation.elements.lbl_recordsInFoundset.text = _foundsetCount
	forms.svy_nav_fr_recordInformation.elements.lbl_recordsInTable.text = _tableCount
	forms.svy_nav_fr_recordInformation.elements.lbl_selectedRecord.text = foundset.getSelectedIndex()
	/** @type {String} */
	var _url = 'http://chart.apis.google.com/chart?cht=p3&chd=t:' + _table_percent + ',' + _foundset_percent + '&chs=270x100&chl=' + i18n.getI18NMessage('svy.fr.lbl.table') + '|' + i18n.getI18NMessage('svy.fr.lbl.foundset')
	if (plugins.http.getMediaData(_url)) {
		forms.svy_nav_fr_recordInformation.vChart = plugins.http.getMediaData(_url)
		forms.svy_nav_fr_recordInformation.elements.vChart.visible = true
	} else {
		forms.svy_nav_fr_recordInformation.elements.vChart.visible = false
	}
	
	// create and show a window, with specified title, initial location and size
	var _win = application.createWindow("infoDialog", JSWindow.MODAL_DIALOG);
	forms.svy_nav_fr_recordInformation.controller.show(_win);

}

/**
 *	Opens a help dialog
 *
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75F6A36A-2DB4-4DB1-942F-824EA556DA5F"}
 * @AllowToRunInFind
 */
function dc_help(_event) {
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	var _type = 'show'
	var _form = 'svy_nav_fr_help'
	var _found

	globals.nav_program_name = _program
	var _program_id = _to_nav_program.program_id

	//get the last key modifiers of last user action (shift = 1,ctrl = 2,meta = 4,alt = 8)
	if (_event) {
		var m = _event.getModifiers();
		if ( (m & 1) == 1 && (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.ORGANIZATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.TENANT_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER)) {
			// if shift is pressed and user is admin
			_type = 'edit'
			_form = 'svy_nav_c_help_dtl'
			forms[_form]['vProgram_id'] = _program_id
		}
	}

	// find the help record for this program, if there is none, create one
	/** @type {JSFoundSet<db:/svy_framework/nav_help>} */
	var _foundset = forms[_form].foundset
	if (_foundset.find()) {
		_foundset.program_id = _program_id
		if (_type == 'show') {
			_foundset.i18n_language = i18n.getCurrentLanguage()
		}
		_found = _foundset.search()
		if (_found == 0 && _type == 'edit') {
			_foundset.newRecord()
			_foundset.program_id = _program_id
		} else if (_found == 0) {
			if (_foundset.find()) {
				_foundset.program_id = _program_id
				_found = _foundset.search()
				if (_found == 0) {
					// no record found
					globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.help', 'i18n:svy.fr.dlg.help', 'i18n:svy.fr.lbl.ok');
					return
				}
			}
		}
	}

	// show the help record
	globals.DIALOGS.showFormInModalDialog(forms[_form])

}

/**
 * On pre Cancel method
 * @author Sanneke Aleman
 * @since 2009-11-19
 * @param {JSFoundSet} _foundset
 * @return {Number} [_status] -1 will stop the method
 *
 * @properties={typeid:24,uuid:"3065FCF4-0262-46E7-B398-163BF6959AD7"}
 */
function dc_cancel_pre(_foundset) { 
	return 1
}

/**
 * Validate records before save to database
 *
 * @author Sanneke Aleman
 * @since 2009-11-19
 * @param {JSFoundSet} _foundset
 * @param {String} _program
 * @return {Number} [_status] -1 will stop the method
 *
 * @properties={typeid:24,uuid:"AA388990-2987-4CAA-906B-96BE6062BD37"}
 */
function dc_save_validate(_foundset, _program) {
	
	globals.nav.validation_msg = i18n.getI18NMessage('svy.fr.dlg.field_validation_failed') + '<br><br>'
		
	var _form = controller.getName()

	/** @type {{program_id:String,table_name:String}} */
	var _progObj = globals.nav.program[_program] 
	var _success = globals.svy_nav_checkRequiredFields(_progObj, _form)
	
	
	var _success_rules = globals.svy_nav_checkValidationRules(_progObj,_form)
	
	
	if(_success == -1 || _success_rules == -1) //there is a failure, give the user a message
	{
		globals.DIALOGS.showWarningDialog('i18n:svy.fr.lbl.excuse_me', "<html>" + globals.nav.validation_msg + "</html>", 'i18n:svy.fr.lbl.ok')
		_success = -1
	}
	
	return _success

}

/**
 * On pre save
 *
 * @author Sanneke Aleman
 * @since 2009-11-19
 * @param {JSFoundSet} _foundset
 * @return {Number} [_status] -1 will stop the method
 *
 * @properties={typeid:24,uuid:"FD6F9848-D35A-47A4-947D-96DF9CEA2FC3"}
 */
function dc_save_pre(_foundset) { return 1 }

/**
 * On post save
 *
 * @author Sanneke Aleman
 * @since 2009-11-19
 * @param {JSFoundSet} _foundset
 * @return {Number} [_status] -1 will rollback the transaction
 *
 * @properties={typeid:24,uuid:"A4CFB6FC-2207-4820-BCA5-91344B1806B9"}
 */
function dc_save_post(_foundset) { return 1 }

/**
 * Customize delete message
 * @author Sanneke Aleman
 * @since 2009-11-19
 * @param {Boolean} _multiDelete true if multiple records will be deleted
 * @return {String} message
 * @properties={typeid:24,uuid:"7C9751DB-6DD7-423B-A6DB-55ACA8334BC7"}
 */
function dc_delete_message(_multiDelete) {

	if (_multiDelete) {
		return i18n.getI18NMessage('i18n:svy.fr.dlg.deletes')
	} else {
		return i18n.getI18NMessage('i18n:svy.fr.dlg.delete')
	}
}

/**
 * Post delete method, is still in the delete transaction
 * @author Sanneke Aleman
 * @since 2009-11-19
 * @param {JSFoundSet} _foundset
 * @param {Boolean} _multiDelete true if multiple records will be deleted
 *
 * @properties={typeid:24,uuid:"D5B489B9-28E1-4CB5-B064-1C118A5B0663"}
 */
function dc_delete_post(_foundset, _multiDelete) { }

/**
 * Popmenu for the delete button
 * @author Sanneke Aleman
 * @param {JSEvent} _event
 * @since 2009-11-19
 *
 * @properties={typeid:24,uuid:"055B310B-3EFA-46C6-BA6D-0B6134C900E3"}
 */
function dc_deletePopmenu(_event) {

	var _menu =  plugins.window.createPopupMenu()
	var _menuItem = _menu.addMenuItem('i18n:svy.fr.lbl.mutiple_delete', dc_setFoundsetMultipleSelectHelper);
	_menuItem.methodArguments = [_event]
	
	/** @type {RuntimeComponent} */
	var _source = _event.getSource()
	if (_source != null) {
		_menu.show(_source);
		//or you can set the coordinates popupmenu.show(10, 10);
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} a
 * @param {Object} b
 * @param {Object} c
 * @param {Object} d
 * @param {Object} e
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"76405F8E-D386-45D7-AAC8-7C6A1DBCF8ED"}
 */
function dc_setFoundsetMultipleSelectHelper(a,b,c,d,e,_event) {
	dc_setFoundsetMultipleSelect(_event);
}

/**
 * @author Sanneke Aleman
 * @param {JSEvent} _event
 * 
 * @properties={typeid:24,uuid:"1166DC92-F614-47A7-AC88-AFC96D93EEFA"}
 */
function dc_setFoundsetMultipleSelect(_event) {
	foundset.multiSelect = true
}

/**
 * Pre delete method
 * @author Sanneke Aleman
 * @since 2009-11-19
 * @param {JSFoundSet} _foundset
 * @param {Boolean} _multiDelete true if multiple records will be deleted
 * @return {Number} if -1 is returned the delete will stop
 * @properties={typeid:24,uuid:"31D46D56-1804-49B4-BA7A-D07E5C2F4E8C"}
 */
function dc_delete_pre(_foundset, _multiDelete) { return 1 }

/**
 * When the framework goes to browse the method is triggered
 * @author Sanneke Aleman
 * @since 2010-09-19
 * @properties={typeid:24,uuid:"E0FF568C-AAF1-4DCA-AB93-AE30A7424CFA"}
 */
function gotoBrowse() {
	
}

/**
 * When the framework goes to edit the method is triggered
 * @author Sanneke Aleman
 * @since 2010-09-19
 * @properties={typeid:24,uuid:"EC6E3B97-42EE-4053-8894-B4F1327C42E0"}
 */
function gotoEdit() {
	
}

/**
 * This method will go into required fields mode, so users can select the required fields.
 * @author Sanneke Aleman
 * @since 2011-02-14
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"8AB20F4A-9C82-4AD9-8F06-E4DADFA6170C"}
 */
function dc_setRequiredFields(_event) {
	updateUI('required_fields')
}

/**
 * To select or deselect a required field, invoked by onElementFocusGained
 * @author Sanneke Aleman
 * @since 2011-02-14
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"52291669-EC77-4C2E-B626-31BBD20C4BAC"}
 */
function toggleRequiredField(_event)
{
	var _toolbarForm = getToolbarFormName(null,true)
	var _program = forms[_toolbarForm].vProgram
	var _element = _event.getElementName()
	var _fieldDataprovider
	if(elements[_element].getDataProviderID())
	{
		_fieldDataprovider = elements[_element].getDataProviderID()
	}
	else //element is not a field and can not be set required
	{
		return
	}
	
	var _progObj = globals.nav.program[_program]
	
	// end users cannot change fields that are set by programmers
	if(_progObj.required_fields[_fieldDataprovider] &&_progObj.required_fields[_fieldDataprovider].req_by_prog)
	{
		return
	}
	
	var _label = elements[_element].getLabelForElementNames()[0]
	
	if(!_label) return // there is no label
	
	//Field is not required yet, enter it in the required object
	if(!_progObj.required_fields[_fieldDataprovider])
	{
		_progObj.required_fields[_fieldDataprovider] = new Object()
		_progObj.required_fields[_fieldDataprovider].db_status = ''
		_progObj.required_fields[_fieldDataprovider].req_by_prog = false
		_progObj.required_fields[_fieldDataprovider].form_status = 'R'
		_progObj.required_fields[_fieldDataprovider].on_form = true
		elements[_label]['text'] = '* ' + elements[_label]['text']
	}
	else if(_progObj.required_fields[_fieldDataprovider].form_status == 'R' )
	{
		_progObj.required_fields[_fieldDataprovider].form_status = ''
		//remove all the starting * and the space
		elements[_label]['text'] = elements[_label]['text'].replace(/^\*+\s/, "");
	}
	else
	{
		_progObj.required_fields[_fieldDataprovider].form_status = 'R'
		elements[_label]['text'] = '* ' + elements[_label]['text']	
	}
	globals.svy_nav_loseFocus()
}

/**
 * Save the required fields
 * @author Sanneke Aleman
 * @since 2011-02-14
 * @properties={typeid:24,uuid:"05E46EBD-4FBB-494A-869B-38F3A7B8A85A"}
 * @AllowToRunInFind
 */
function saveRequiredFields()
{
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	/** @type {{required_fields:Object,program_id:String}} */	
	var _progObj = globals.nav.program[_program]
	var _program_id = _progObj.program_id
	/** @type {JSFoundSet<db:/svy_framework/nav_user_required_field>} */
	var _fs = databaseManager.getFoundSet(globals.nav_db_framework,'nav_user_required_field')                                   
	for(var i in _progObj.required_fields)
	{
		//field is not saved yet, can be saved
		if(_progObj.required_fields[i].form_status == 'R' && _progObj.required_fields[i].db_status == '')
		{
			//enter in db
			_fs.newRecord()
			_fs.program_id = _program_id
			_fs.dataprovider = i
			databaseManager.saveData(_fs.getSelectedRecord())
			//enter in object
			_progObj.required_fields[i].db_status = 'R'
		} //field is saved needs to be removed
		else if(_progObj.required_fields[i].form_status == '' && _progObj.required_fields[i].db_status == 'R')
		{
			//delete from db
			if(_fs.find())
			{
				_fs.program_id = _program_id
				_fs.dataprovider = i
				var _found = _fs.search()
				if(_found)
				{
					_fs.deleteRecord()
				}
			}
			//delete from object
			delete _progObj.required_fields[i]
		}//empty value remove from object
		else if(_progObj.required_fields[i].form_status == '' && _progObj.required_fields[i].db_status == '')
		{
			delete _progObj.required_fields[i]
		}
	}
}

/**
 * Cancel the edit of the required fields
 * @author Sanneke Aleman
 * @since 2011-02-14
 * 
 * @properties={typeid:24,uuid:"97705907-3750-4333-9DBC-34DC6BD99C7D"}
 */
function cancelRequiredFields()
{
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	var _progObj = globals.nav.program[_program]                              
	for(var i in _progObj.required_fields)
	{
		// new required field, remove it from object
		if(_progObj.required_fields[i].form_status == 'R' && _progObj.required_fields[i].db_status == '')
		{
			//set it empty first so the set_status can set the label back to normal, next round it will be removed from the object
			_progObj.required_fields[i].form_status = ''
		} //field is saved needs to be reset
		else if(_progObj.required_fields[i].form_status == '' && _progObj.required_fields[i].db_status == 'R')
		{
			_progObj.required_fields[i].form_status = 'R'
		}//empty value remove from object
		else if(_progObj.required_fields[i].form_status == '' && _progObj.required_fields[i].db_status == '')
		{
			delete _progObj.required_fields[i]
		}
	}
}

/**
 * @param {JSFoundSet} _foundset
 * @properties={typeid:24,uuid:"F8CA23FF-EF0C-4DEA-8FAD-F74B8DFF3464"}
 */
function dc_duplicate_post(_foundset) {

}

/**
 * @param {JSFoundSet} _foundset
 * @properties={typeid:24,uuid:"BB137784-F2A8-4E72-B2CA-4FBE690AF4F4"}
 */
function dc_new_post(_foundset) {
	
}

/**
 * Shows popup find menu where the user can choose for regular or advanced find
 *
 * @author Vincent Schuurhof
 * @since 2011-05-19
 * @param {JSEvent} [_event] the event that triggered the action
 *
 * @return none
 * 
 * @properties={typeid:24,uuid:"23244941-AE4E-4963-84EA-A697417B177D"}
 * @AllowToRunInFind
 */
function dc_findPopmenu(_event) {
	globals.svy_sea_searchForm = globals.nav_currentPanel1Form;
	globals.svy_sea_mainForm = globals.nav.mainFormName;

	var _toolbarForm = getToolbarFormName()
	var _panel = forms[_toolbarForm].vPanel
	
	if (_panel == 1 && scopes.svyProperties.getPropertyValue("advanced_search")) {
		globals.svy_sea_mainForm = globals.nav.mainFormName;
		globals.svy_sea_searchForm = controller.getName()
	
		var _menu = plugins.window.createPopupMenu();
		_menu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.regular_search'), dc_find, 'media:///find.png');
		_menu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.advanced_search') + '...', dc_findAdvanced, 'media:///advanced_16_16.png')
	
		/** @type {RuntimeComponent} */
		var _source = _event.getSource()
		if (_source != null) {
			_menu.show(_source);
		}
	} else {
		dc_find()
	}
}

/**
 * Trigger the advanced find selection dialog
 *
 * @author Vincent Schuurhof
 * @since 2011-05-19
 * 
 * @param {JSEvent} [_event] the event that triggered the action
 * @return none
 *
 * @properties={typeid:24,uuid:"216FDE2E-C1D2-46A8-ABE3-228C46931FE2"}
 */
function dc_findAdvanced(_event) {
	
	var _toolbarForm = getToolbarFormName()
	var _panel = forms[_toolbarForm].vPanel
	
	if (_panel == 1) {
		globals.svy_sea_mainForm = globals.nav.mainFormName;
		globals.svy_sea_searchForm = controller.getName()
	} else {
		globals.svy_sea_mainForm = controller.getName()
		globals.svy_sea_searchForm = controller.getName()
	}
	
	globals.svy_sea_showAdvancedSearch(forms[_toolbarForm].vProgram, controller.getName())
}

/**
 * @properties={typeid:24,uuid:"D80C75A6-DB80-4378-91EE-C280437B6CD0"}
 */
function onPostSearch() {
	
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"E5B5CAFC-9D07-45B8-A462-B31275D626BA"}
 */
function dc_save_new(_event) {
	var _return = dc_save(_event)
	if(_return == -1)return
	dc_new(_event)
}

/**
 * Looks if the form has to go to a other layout or form for edit
 * @param {JSEvent} _event
 * @param {String} _methodName
 * @param {String} [_formNameToolbar]
 * @return {Boolean} 
 * @properties={typeid:24,uuid:"BA58359C-E375-47AD-AA31-97C89EE9F24F"}
 */
function switchForEdit(_event, _methodName, _formNameToolbar) {
	//tab form where the form is on
	if(!_formNameToolbar) _formNameToolbar = getToolbarFormName()
	 var _formName
	// Edit on tab
	//	not_on_tab|0
	// current|1
	// detail|2
	var _edit_on_tab = forms[_formNameToolbar].vEditOnTab
	var _panel = forms[_formNameToolbar].vPanel
	var _view = forms[_formNameToolbar].vView
	if(	_edit_on_tab == 1 || 
		(_edit_on_tab == 2 && _view == 0) || 
		(_edit_on_tab == 0 && _panel == 1)) //the form is on the form it has to be on
	{
		return false
	}
	else if(_edit_on_tab == 2 && _view == 1) //only switch the view
	{
		_formName = dc_switchView(null, 1-_view, forms[_formNameToolbar].vProgram);
		forms[_formName][_methodName](null,null, _formNameToolbar)
		globals.nav.switchedViewForEdit = true
		return true
	}
	else if (_edit_on_tab == 0) //switch to a other layout for editing
	{
		var _program = forms[_formNameToolbar].vProgram
		_formName = switchLayout(_program, foundset)
		globals.nav.switchedForEdit = true
		globals.nav.switchedForEditTabId = forms[_formNameToolbar].vTabId;
		forms[_formName][_methodName](null,null,null)
		return true
	}
	return true
}

/**
 * Switch from table to detail or the other way around
 * 
 * @author Joas de Haan
 * @since 2011-12-21
 * 
 * @param {JSEvent} [_event]
 * @param {Number} [_targetView]
 * @param {String} [_programName]
 * 
 * @return {String} Target form name
 * 
 * @properties={typeid:24,uuid:"54F8D093-C54A-4251-B95D-C4B5B4EAE87A"}
 */
function dc_switchView(_event, _targetView, _programName) {
	var _context = controller.getFormContext();
	var _toolbarForm = getToolbarFormName();
	if (_toolbarForm == "-1") {
		return null;
	}
	var _panel = forms[_toolbarForm].vPanel
	if(!_programName)
	{
		_programName = forms[_toolbarForm].vProgram
	}

	//check if selected view is target view, because then a switch is not needed
	if(forms[_toolbarForm].vView == _targetView) return forms[_toolbarForm]['vFormname']
	
	if(_targetView == undefined)
	{
		var _view = forms[_toolbarForm].vView
		_targetView = 1-_view
	}
	
	/** @type {Array} */
	var _formAr = globals.nav.program[_programName].form[_targetView];
	
	if (_formAr[3]) { //if it is 1, then the target form is available
		/** @type {String} */
		var _targetForm = _formAr[2];
		var _panelForm = _context.getValue(_context.getMaxRowIndex() - 1, 2);
		var _currentForm = forms[_panelForm].elements["form"].getTabFormNameAt(1);
		
		if (_targetForm != _currentForm) {
			var _foundset = foundset
			var _relationName = forms[_panelForm].elements["form"].getTabRelationNameAt(1);
			forms[_panelForm].elements["form"].removeAllTabs()
			forms[_panelForm].elements["form"].addTab(_targetForm, _targetForm, _targetForm, null, null, null, null, _relationName);
			forms[_toolbarForm]['vView'] = _targetView
			forms[_toolbarForm]['vFormname'] = _targetForm
			forms[_targetForm].controller.loadRecords(_foundset)
			if(_panel == 1)
			{
				globals.nav_currentPanel1Form = _targetForm
			}
			forms[_toolbarForm].updateUI()
		}
		return _targetForm
	}
	return null;
}

/**
 * Returns the name of the toolbarForm used with this form
 * 
 * @author Joas de Haan
 * @since 2011-12-21
 * 
 * @param {Number} [_contextLevel] if you want to look a form higher in the hierachy to find out the toolbar. Used for subforms.
 * @param {Boolean} [_searchUp] if the toolbarform is not on the level that is expected it will continue to search higher in the hierachy, used for subforms
 * 
 * @return {String} toolbar form name
 * 
 * @properties={typeid:24,uuid:"358ABAFA-65B5-4760-ABB9-4D6DAA5403FD"}
 */
function getToolbarFormName(_contextLevel, _searchUp) {
	var _context = controller.getFormContext();
	if(_contextLevel == undefined)_contextLevel = 0 
	var _panelForm = _context.getValue(_context.getMaxRowIndex() - (1 + _contextLevel), 2);
	
	if (_panelForm && /^ly_\w+_p\d+_t\d+$/.test(_panelForm)) {
		return forms[_panelForm].elements["toolbar"].getTabFormNameAt(1);
	}
	else if(_panelForm && _searchUp)
	{
		_contextLevel ++
		return getToolbarFormName(_contextLevel, true)
	}
	else if(!_panelForm) //context is to high
	{
		return '-1'
	}
	return null;
}

/**
 * Returns the current mode of the form ("browse", "edit", "search")
 * 
 * @author Joas
 * 
 * @return {String} the mode of the form
 * 
 * @properties={typeid:24,uuid:"0A640670-FD63-4C47-B2A6-955F2EF15817"}
 */
function getMode() {
	var _toolbarFormName = getToolbarFormName(null, true);
	if (_toolbarFormName == '-1')
	{
		return '-1'
	}
	else if (_toolbarFormName) {
		return forms[_toolbarFormName].vMode;
	}
	return null;
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} _program
 * @param {JSFoundSet} [_foundset] foundset to load on panel 1 form
 * @param {Object} [_layoutObj]
 * 
 *  
 * @properties={typeid:24,uuid:"17C5877B-7C3A-4324-81F0-696C56B85D92"}
 */
function switchLayout(_program, _foundset, _layoutObj)
{
	/** @type{{layout_id:String}} */
	var _programObject = globals.nav.program[_program]
	globals.nav.openNewTab = 1
	forms[globals.nav.mainFormName].layoutSwitch(null,_programObject.layout_id, _layoutObj, foundset)
	return globals.nav_currentPanel1Form
}

/**
 * @param {JSFoundSet} [foundsetToSync]
 * @param {String} [tabId]
 * 
 * @properties={typeid:24,uuid:"5AC2B156-C751-41D7-86E6-CCEAC48CB76C"}
 */
function syncFoundsets(foundsetToSync, tabId) {
	if (!foundsetToSync) {
		foundsetToSync = foundset;
	}
	var layoutName;
	
	if (tabId && !layoutName) {
		/** @type {JSRecord<db:/svy_framework/nav_tab>} */
		var tabRecord =  scopes.modUtils$data.getRecord("db:/"+globals.nav_db_framework+"/nav_tab", tabId);
		if (databaseManager.hasRecords(tabRecord.nav_tab_to_nav_layout)) {
			layoutName = "ly_" + tabRecord.nav_tab_to_nav_layout.name;
		}
	}
	
	if (!tabId || !layoutName) {
		/** @type {String} */
		var toolbarForm = getToolbarFormName();
		if (toolbarForm && toolbarForm != "-1") {
			if (!tabId) {
				tabId = forms[toolbarForm].vTabId;
			}
			if (!layoutName) {
				layoutName = toolbarForm.replace(/_p\d+_t\d+_tb$/, "");
			}
		} else {
			return;
		}
	}

	/** @type{Array<{formName:String, tabId:String}>} */
	var connectedForms = globals.nav[layoutName].tabs[tabId].childForms;
	var childForm;
	for (var i = 0; i < connectedForms.length; i++) {
		if (forms[connectedForms[i].formName].foundset.getDataSource() != foundsetToSync.getDataSource()) {
			continue;
		}
		forms[connectedForms[i].formName].controller.loadRecords(foundsetToSync);
		
		childForm = forms[connectedForms[i].formName].elements["form"].getTabFormNameAt(1);
		forms[childForm].syncFoundsets(null, connectedForms[i].tabId);
	}
	
}

/**
 * @param {String} toolbarForm
 * @properties={typeid:24,uuid:"04002DC1-2163-4D77-A123-2EA0CB9C8FCC"}
 */
function setFormToEdit(toolbarForm) {
//	var _form = controller.getName()
	if(!toolbarForm) toolbarForm = getToolbarFormName()
	var program = forms[toolbarForm].vProgram

//TODO: Not sure why this code is here, but it causes problems when creating new related records.
//It is commented out now. If that doesn't cause problems after testing it will be removed.

//	application.output("CURRENT EDIT PROGRAM: " + globals.nav.currentEditProgram + ", PROGRAM: " + _program);
//	
//	if(globals.nav.currentEditProgram)
//	{
//		scopes.openEdits.saveEditsToObject(globals.nav_layout_id, globals.nav.currentEditProgram)
//	}
//	else
//	{
		scopes.openEdits.saveEditsToObject(globals.nav_layout_id, program)
//	}
//	
//	if(_form != globals.nav.currentEditForm) //new Edit form
//	{
//		globals.nav.currentEditForm = _form
//		globals.nav.currentEditProgram = _program
//	}
}

/**
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"A255EA7F-7B1F-46FD-8D59-2B438C5070E4"}
 */
function dc_popupChildren(event) {
	var _toolbarForm = getToolbarFormName();
	/** @type {Array<{alignment:Number, name:String, items:Array<{access_type:Number, description:String, flag_splitter:Number, function_id:String, image_url:String, mode_type:String, parent_id:String, toolbar_function:String, toolbar_item_id:String, parent_id:String}>}>} */
	var _tbObj = forms[_toolbarForm].vToolbarObj;
	var _menuItemId = event.getElementName();
	
	var _popupmenu = plugins.window.createPopupMenu()
	/** @type{{description:String, toolbar_function:String, function_id:Number, function_type:Number, parent_id:String, toolbar_item_id:String}} */
	var _item
	var  _method, _popupItem, idChild, _popupMenuChild, submenuArray, _itemChild;
	for (var i = 0; i < _tbObj.length; i++) {
		for (var j = 0; j < _tbObj[i].items.length; j++) {
			_item = _tbObj[i].items[j];
			if (_item.parent_id == _menuItemId) {
				//items is child of current button clicked

				submenuArray = new Array();
				idChild = _item.toolbar_item_id

				for (var k = 0; k < _tbObj[i].items.length; k++) {
					_itemChild = _tbObj[i].items[k];
					if (_itemChild.parent_id == idChild) {
						submenuArray.push(_itemChild)
					}
				}

				if (submenuArray.length > 0) //there are submenu items
				{
					_popupMenuChild = _popupmenu.addMenu(_item.description);
					_popupMenuChild.setIcon('media:///'+_item.image_url)
					for (var l = 0; l < submenuArray.length; l++) {
						if (submenuArray[l].function_type == 1) {
							_method = forms[_toolbarForm].callProgramFunctionFromPopmenu;
							_popupItem = _popupMenuChild.addMenuItem(submenuArray[l].description, _method);
							_popupItem.setIcon('media:///'+submenuArray[l].image_url)
							_popupItem.methodArguments = [submenuArray[l].toolbar_function, event];
						} else {
							// _item.function_type == 2
							_method = forms[_toolbarForm].callFunctionFromPopmenu;
							_popupItem = _popupMenuChild.addMenuItem(submenuArray[l].description, _method);
							_popupItem.setIcon('media:///'+submenuArray[l].image_url)
							_popupItem.methodArguments = [submenuArray[l].function_id, event];
						}
					}
				}
				else if (_item.function_type == 1) {
					_method = forms[_toolbarForm].callProgramFunctionFromPopmenu;
					_popupItem = _popupmenu.addMenuItem(_item.description, _method);
					_popupItem.setIcon('media:///'+_item.image_url)
					_popupItem.methodArguments = [_item.toolbar_function, event];
				} else {
					// _item.function_type == 2
					_method = forms[_toolbarForm].callFunctionFromPopmenu;
					_popupItem = _popupmenu.addMenuItem(_item.description, _method);
					_popupItem.setIcon('media:///'+_item.image_url)
					_popupItem.methodArguments = [_item.function_id, event];
				}
			}
		}
	}

	_popupmenu.show(event.getSource());	
}

/**
 * Check if this form is related to another panel, if so: Is there a saved parent record?
 * 
 * @return {Boolean}
 * 
 * @protected 
 * @properties={typeid:24,uuid:"9CAF92E8-9E6B-476A-9C45-046CB3A953A2"}
 */
function isBlockedByUnsavedParent() {
	//Check if this form is related to another panel, if so: Is there a saved parent record?

	/** @type {RuntimeForm<svy_nav_fr_toolbar_base>} */
	var toolbarForm = forms[getToolbarFormName()];
	if (toolbarForm) {
		/** @type {JSFoundSet<db:/svy_framework/nav_tab>} */
		var tabFS = databaseManager.getFoundSet("db:/" + globals.nav_db_framework + "/nav_tab");
		if (tabFS.loadRecords(application.getUUID(toolbarForm.vTabId))) {
			if (databaseManager.hasRecords(tabFS.nav_tab$to_parent)) {
				var parentPanelId = tabFS.nav_tab$to_parent.panel_id;
				
				//Get the tabs that are on the same panel as the parent tab
				/** @type {JSFoundSet<db:/svy_framework/nav_tab>} */
				var tabsOnParentPanelFS = databaseManager.getFoundSet("db:/" + globals.nav_db_framework + "/nav_tab");
				tabsOnParentPanelFS.addFoundSetFilterParam("layout_id", "=", tabFS.layout_id);
				tabsOnParentPanelFS.addFoundSetFilterParam("panel_id", "=", tabFS.nav_tab$to_parent.panel_id);
				tabsOnParentPanelFS.sort("sequence asc");
				tabsOnParentPanelFS.loadAllRecords();
				
				/** @type {JSRecord<db:/svy_framework/nav_tab>} */
				var tabRec;
				//Loop through all the tabs on the same panel of the parent tab until parent is found
				for (var parentTabIndex = 1; parentTabIndex <= tabsOnParentPanelFS.getSize(); parentTabIndex++) {
					tabRec = tabsOnParentPanelFS.getRecord(parentTabIndex);
					if (tabRec.panel_id) {
						if (tabRec.tab_id == tabFS.parent_tab_id) {
							break; //found the parent tab
						}
					}
				}
				
				/** @type {RuntimeTabPanel} */
				var parentPanelTab = forms[globals.svy_nav_getVisiblePanelNames()[parentPanelId]].elements.tab;
				var parentFormName = forms[parentPanelTab.getTabFormNameAt(parentTabIndex)].elements.form.getTabFormNameAt(1);

				if (forms[parentFormName].foundset.getSize() == 0 || forms[parentFormName].foundset.getSelectedRecord().hasChangedData()) {
					//No parent record or parent record is unsaved
					globals.DIALOGS.showWarningDialog(i18n.getI18NMessage("svy.fr.lbl.warning"), i18n.getI18NMessage("svy.fr.dlt.first_save_parent_record"));
					return true;
				}
			}
		}
	}
	return false;
}

/**
 * Return true if tab has relation foundset$foundset with a parentTab.
 * 
 * @author Paolo
 * 
 * @protected
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"0D9C3E01-5535-48F3-9F4D-2EC16339D85C"}
 */
function hasRelationFoundsetToFoundset(){
	
	/** @type {RuntimeForm<svy_nav_fr_toolbar_base>} */
	var toolbarForm = forms[getToolbarFormName()];
	if (toolbarForm) {
		/** @type {JSFoundSet<db:/svy_framework/nav_tab>} */
		var tabFS = databaseManager.getFoundSet("db:/" + globals.nav_db_framework + "/nav_tab");
		if (tabFS.loadRecords(application.getUUID(toolbarForm.vTabId))) {
			if (databaseManager.hasRecords(tabFS.nav_tab$to_parent)) {
				
				var tabsOnParentPanelFS = tabFS.nav_tab$to_parent.nav_tab_to_nav_layout.nav_layout_to_nav_tab; //the tabs that are on the same panel as the parent tab
				/** @type {JSRecord<db:/svy_framework/nav_tab>} */
				var tabRec;
				//Loop through all the tabs on the same panel of the parent tab until parent is found
				for (var parentTabIndex = 1; parentTabIndex <= tabsOnParentPanelFS.getSize(); parentTabIndex++) {
					tabRec = tabsOnParentPanelFS.getRecord(parentTabIndex);
					if (tabRec.panel_id) {
						if (tabRec.tab_id == tabFS.parent_tab_id) {
							break; //found the parent tab
						}
					}
				}
				if (!tabRec) return false;

				//check if using relation foundset$foundset
				
				/** @type {JSFoundSet<db:/svy_framework/nav_tab>} */
				var tabFS2 = databaseManager.getFoundSet("db:/" + globals.nav_db_framework + "/nav_tab")
				tabFS2.loadRecords(application.getUUID(toolbarForm.vTabId));
				/** @type {JSRecord<db:/svy_framework/nav_tab>} */
				var programTab = tabFS2.getSelectedRecord();
				
				
				
				var relationDataprovider = programTab.tab_relation;
				var relations = relationDataprovider.split('.')
				
				/* relations must be foundset to foundset, 1 lenght deep*/
				if(relations.length > 1)
				{
					return false;
				}
				
				/** JSRelation */
				var jsProgramRelation = solutionModel.getRelation(programTab.tab_relation);
				//if tabs relation has items, parent must exist.
				if( jsProgramRelation.primaryDataSource == jsProgramRelation.foreignDataSource )  {

					for ( var i = 0; i < jsProgramRelation.getRelationItems().length; i++){
						var criteria = jsProgramRelation.getRelationItems()[i];
						if(criteria.operator != '=' || criteria.foreignColumnName != criteria.primaryDataProviderID)
						{
							return false;
						}
					}
				} else return false;
				

				/** @type {JSFoundSet<db:/svy_framework/nav_program>} */					
				var programFS = databaseManager.getFoundSet('db:/svy_framework/nav_program')
					
				programFS.loadRecords(programTab.program_id);
				/** @type {JSRecord<db:/svy_framework/nav_program>} */
				var program = programFS.getSelectedRecord();
				var programDataSource = 'db:/' + program.server_name + '/' + program.table_name;
					
				programFS.loadRecords(tabRec.program_id);
				/** @type {JSRecord<db:/svy_framework/nav_program>} */					
				var parentProgram = programFS.getSelectedRecord();
				var parentProgramDataSource = 'db:/' + parentProgram.server_name + '/' + parentProgram.table_name;
				//if parent datasource != tab datasource and tab relation has different datasources 
				if(parentProgramDataSource != programDataSource || jsProgramRelation.primaryDataSource != parentProgramDataSource || jsProgramRelation.foreignDataSource != programDataSource)
				{
					return false;
				}
				
			}
		}
	}
	return true;	
}

/**
 * Check if method is allowed, will be called every onrecordSelection
 * @param {String} _method
 * @return {Boolean} true if method is allowed
 * @properties={typeid:24,uuid:"2D130908-99D7-46B5-A475-D338A0DC428C"}
 */
function isMethodAllowed(_method) {
	return true
}

/**
 * @return {Array<String>}
 * 
 * @properties={typeid:24,uuid:"AC04A86B-A6FE-40D6-92C0-59884C974849"}
 */
function getChildFormsInEditMode() {
	/** @type {Array<String>} */
	var _formAr = [];
	
	var _toolbarForm = getToolbarFormName();
	if(!_toolbarForm || _toolbarForm == '-1') {
		return _formAr;
	}
	
	var _tabId = forms[_toolbarForm].vTabId;
	var _layoutName = _toolbarForm.replace(/_p\d+_t\d+_tb$/, "");
	
	/** @type{Array<{formName:String, tabId:String}>} */
	var _connectedForms = globals.nav[_layoutName].tabs[_tabId].childForms;
	
	var _childToolbarForm;
	for (var i = 0; i < _connectedForms.length; i++) {
		_childToolbarForm = _connectedForms[i].formName + "_tb";
		if (forms[_childToolbarForm].vMode == "edit" || forms[_childToolbarForm].vMode == "add") {
			_formAr.push(_connectedForms[i].formName);
		}
	}
	return _formAr;
	
}

/**
 * @return {Array}
 * @properties={typeid:24,uuid:"DB4D26F7-75C9-493C-9F0E-EE4F7D2D5909"}
 */
function getRelatedForms() {
	/** @type {String} */
	var _toolbarForm = getToolbarFormName();
	if(!_toolbarForm || _toolbarForm == '-1')  {
		return [];
	}
	
	var _tabId = forms[_toolbarForm].vTabId;
	var _layoutName = _toolbarForm.replace(/_p\d+_t\d+_tb$/, "");
	
	/** @type{Array<{formName:String, tabId:String}>} */
	var _connectedForms = globals.nav[_layoutName].tabs[_tabId].childForms;
	var _childForm;
	for (var i = 0; i < _connectedForms.length; i++) {

		_childForm = forms[_connectedForms[i].formName].elements["form"].getTabFormNameAt(1);
		_connectedForms = _connectedForms.concat(forms[_childForm].getRelatedForms());
	}
	return _connectedForms;
}

/**
 * Goto the detail view of the program
 * @properties={typeid:24,uuid:"21F0B70C-38A3-4929-80A9-69460E01FFE4"}
 */
function dc_showDetail(_event) {
	dc_switchView(_event,0)
}

/**
 * Goto the table view of the program
 * @param {JSEvent} [_event]
 * @properties={typeid:24,uuid:"9DFC2734-F52F-4179-B3DD-BE24D8774DF4"}
 */
function dc_showTable(_event) {
	dc_switchView(_event,1)
}

/**
 * @author Sanneke Aleman
 * @since 2010-03-09
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"15AB4453-B073-41C9-88CA-BF4CEEAFC1A6"}
 */
function dc_tablePopmenu(event) {
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	var _view = forms[_toolbarForm].vView
	//listmenu
	var _foundset, _menuItem
	
	globals.nav_program_name = _program
	globals.nav_program_id = _to_nav_program.program_id

	
	/** @type {JSRecord<db:/svy_framework/nav_user_table_view>} */
	var _rec
	var popupmenu = plugins.window.createPopupMenu()
	
	_menuItem = popupmenu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.create_new_tableview'), dc_tableCreateView)
	_menuItem.methodArguments = [globals.nav_program_id, _program];
	_menuItem = popupmenu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.edit_delete_view'), dc_tableEditView)
	_menuItem.methodArguments = [globals.nav_program_id, _program];
	

	if (utils.hasRecords(_to_nav_user_table_view$default)) {
		_menuItem = popupmenu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.set_system_table_view_as_default_table_view'), dc_tableSetSystemTableAsDefault)
	}

	popupmenu.addSeparator()

	if (!globals.nav.program[_program].table_created == 1) {
		_menuItem = popupmenu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.system_table'), globals.svy_nav_tableShowOriginal)
		_menuItem.methodArguments = [_program, _view, _toolbarForm, controller.getName()]
	} else //show the default
	{
		/** @type {JSFoundSet<db:/svy_framework/nav_user_table_view>} */
		_foundset = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_user_table_view')
		_foundset.addFoundSetFilterParam('user_id', '=', globals.svy_sec_lgn_user_id);
		_foundset.addFoundSetFilterParam('organization_id', '=', globals.svy_sec_lgn_organization_id)
		_foundset.addFoundSetFilterParam('program_id', '=', globals.nav_program_id )
		_foundset.addFoundSetFilterParam('layout_id', '=', _to_nav_layout.layout_id )
		_foundset.addFoundSetFilterParam('flag_system', '=', 1)
		_foundset.loadAllRecords()
		_rec = _foundset.getRecord(1)
		_menuItem = popupmenu.addMenuItem(i18n.getI18NMessage('svy.fr.lbl.system_table'), dc_tableShowView)
		_menuItem.methodArguments = [_program, _rec.user_table_view_id]

	}
	popupmenu.addSeparator()
	/** @type {JSFoundSet<db:/svy_framework/nav_user_table_view>} */
	_foundset = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_user_table_view')
	_foundset.addFoundSetFilterParam('user_id', '=', globals.svy_sec_lgn_user_id);
	_foundset.addFoundSetFilterParam('organization_id', '=', globals.svy_sec_lgn_organization_id);
	_foundset.addFoundSetFilterParam('program_id', '=', globals.nav_program_id )
	_foundset.addFoundSetFilterParam('layout_id', '=', _to_nav_layout.layout_id )
	_foundset.addFoundSetFilterParam('flag_system', 'IS NULL', null)
	_foundset.sort('name asc', true);
	_foundset.loadAllRecords()
	
	for (var i = 1; i <= _foundset.getSize(); i++) {

		_rec = _foundset.getRecord(i)
		var _name = _rec.name
		if (_rec.flag_user_default) {
			_name += ' ' + i18n.getI18NMessage('svy.fr.lbl.<default>')
		}
		_menuItem = popupmenu.addMenuItem(_name, dc_tableShowView)
		_menuItem.methodArguments = [_program, _rec.user_table_view_id]
	}

	/** @type {RuntimeComponent} */
	var source = event.getSource()
	if (source != null) {
		popupmenu.show(source);
	}

}

/**
 * @properties={typeid:24,uuid:"424739BD-32FE-4243-A61A-F9A41A0B1E99"}
 */
function dc_tableCreateView(_arg1, _arg2, _arg3, _arg4, _arg5, _program_id, _program) {
	
	// Set the program and layout ids
	var _layoutId =  _to_nav_layout.layout_id;
	
	// var _program = forms[_toolbarForm].vProgram
	forms.svy_nav_fr_user_table_view_dtl.controller.newRecord()
	forms.svy_nav_fr_user_table_view_dtl.program_id = _program_id
	forms.svy_nav_fr_user_table_view_dtl.layout_id = _layoutId;
	forms.svy_nav_fr_user_table_view_dtl.server_name = globals.nav.program[_program].server_name
	forms.svy_nav_fr_user_table_view_dtl.table_name = globals.nav.program[_program].table_name
	forms.svy_nav_fr_user_table_view_dtl.user_id = globals.svy_sec_lgn_user_id;
	forms.svy_nav_fr_user_table_view_dtl.organization_id = globals.svy_sec_lgn_organization_id;
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_fr_user_table_view_dtl,null,null,null,null,null,true,false,'user_table_view')

}

/**
 * @properties={typeid:24,uuid:"C79604CC-0037-4C8A-967E-68D8139C3C6A"}
 */
function dc_tableShowView(_arg1, _arg2, _arg3, _arg4, _menuName, _program, _table_view_id) {
	var _toolbarForm = getToolbarFormName()
	// var _program = forms[_toolbarForm].vProgram
	var _view = forms[_toolbarForm].vView
	
	if (_view == 0) {
		dc_showTable()
	}

	// Save table view persistence
	var _programId = getProgramId();
	var _layoutId =  vTableViewInformation['currentLayoutId'];
	
	if (_programId && _layoutId) {
		var _tableViewId = vTableViewInformation[_layoutId];
		globals.svy_nav_saveTableViewPersistance(controller.getName(), _programId, _layoutId, _tableViewId);
	}	
	
	globals.nav.program[_program].user_table_view_id = _table_view_id;
	globals.svy_nav_createTableView(null, _table_view_id, true, globals.nav.program[_program].program_id)

	// Load table view persistence
	globals.svy_nav_loadCorrectTableView(controller.getName())
}

/**
 * @properties={typeid:24,uuid:"0B23F026-633B-4467-8D83-9DB93C67C4E5"}
 */
function dc_tableSetSystemTableAsDefault() {
	var _toolbarForm = getToolbarFormName()
	var _program = forms[_toolbarForm].vProgram
	globals.nav_program_name = _program
	globals.nav_program_id = _to_nav_program.program_id
	if(utils.hasRecords(_to_nav_user_table_view$default))
	{
		_to_nav_user_table_view$default.flag_user_default = 0
		databaseManager.saveData(_to_nav_user_table_view$default.getSelectedRecord())
	}
}

/**
 * @properties={typeid:24,uuid:"FC920D66-FFD9-48F6-8BAA-9D21B205CA1B"}
 */
function dc_tableEditView(_arg1, _arg2, _arg3, _arg4, _arg5, _program_id, _program) {
	
	// Set the program and layout ids
	var _layoutId =  _to_nav_layout.layout_id;
	
	// var _program = forms[_toolbarForm].vProgram
	/** @type {JSFoundSet<db:/svy_framework/nav_user_table_view>} */
	var _foundset = databaseManager.getFoundSet(globals.nav_db_framework, 'nav_user_table_view')
	_foundset.addFoundSetFilterParam('user_id','=', globals.svy_sec_lgn_user_id);
	_foundset.addFoundSetFilterParam('organization_id','=', globals.svy_sec_lgn_organization_id);
	_foundset.addFoundSetFilterParam('program_id','=',_program_id)
	_foundset.addFoundSetFilterParam('layout_id','=', _layoutId)
	_foundset.loadAllRecords()
	forms.svy_nav_fr_user_table_view_tbl.controller.loadRecords(_foundset)
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_fr_user_table_view_tbl,null,null,null,null,null,true,false,'user_table_view')
}

/**
 * @properties={typeid:24,uuid:"1CD528A3-37DB-4716-9A35-A0314263C672"}
 */
function getProgram() {
	var _toolbarForm = getToolbarFormName(0,true);
	if (_toolbarForm && _toolbarForm != "-1") {
		var _program = forms[_toolbarForm].vProgram
		return _program
	}
	return null;
}

/**
 * @properties={typeid:24,uuid:"669E314D-7A58-438A-9858-2F25E034B7A6"}
 */
function dc_closeTab() {
	forms[globals.nav.openLayoutFormName].closeCurrentTab()
}

/**
 * @param {String} value Value to search on
 * @param {Array<String>} fields Fields to search in
 * @properties={typeid:24,uuid:"6CAF3449-962B-4A43-A047-470B8F2CA641"}
 * @AllowToRunInFind
 */
function dc_fastSearch(value, fields) {
	
	if(!value) //empty value, show all records
	{
		dc_loadAll()
		return
	}
	
	if(!fields)
	{
		application.output('Fast search is used on form '+ controller.getName() + ', but no fields where defined, please overwrite dc_fasSearch on your form and define the fields.')
		return
	}
	
	if(foundset.find())
	{
		//Get JSTable to handle different data types
		var table = databaseManager.getTable(foundset);
		var column, searchValue;
		
		for (var i = 0; i < fields.length; i++) {
			searchValue = value;
			if (table) {
				column = table.getColumn(fields[i]);
				if (column) {
					if (column.getType() == JSColumn.TEXT) {
						searchValue = '#%' + value + '%';
					} else if (column.getType() == JSColumn.DATETIME) {
						//TODO: Parse datetime and handle search
					}
				}
			}
			
			foundset[fields[i]] = searchValue
			if(i < (fields.length - 1))
			{
				foundset.newRecord()
			}
		}
		foundset.search()
	}
}

/**
 * This method is called on a visible form whenever the organization_id changes
 * because the user switched to a different organization<p>
 * 
 * @see scopes#svySecurityManager#addOrganizationChangeListener() if you want to be notified of a change elsewhere
 * 
 * @param {Object} oldValue
 * @param {Object} newValue
 *
 * @properties={typeid:24,uuid:"B1B06687-973C-44AB-9EA6-EB65AAD01A07"}
 */
function onChangeOrganization(oldValue, newValue) {}

/**
 * @properties={typeid:24,uuid:"F56C6C97-54B2-430E-B7C9-921B2CFE08FD"}
 */
function setRecordInfoText(_program, _form) {
	var _programDesc, _recordDesc, _searchDesc, _relatedDesc;
	_programDesc = globals.nav.program[_program].description;
	if (globals.nav.program[_program].display_field_header && (controller.getMaxRecordIndex() > 0)) {
		_recordDesc = forms[_form][globals.nav.program[_program].display_field_header]
	}
	
	if (globals.nav.program[_program].active_search) {
		_searchDesc = ' (' + globals.nav.program[_program].active_search + ')';
	}
	if (globals.nav.related_text) {
		_relatedDesc += ' -> ' + globals.nav.related_text;
	}
	
	
	
	forms[globals.nav.mainFormName].setRecordInfoText(_programDesc, _recordDesc, _searchDesc, _relatedDesc);

	if(globals.svy_nav_multi_tab_programs) {
		forms[globals.nav.openLayoutFormName].setRecordInfoText(_programDesc, _recordDesc, _searchDesc, _relatedDesc)
	}
}

/**
 * will show the programs main layout
   * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"2143EC4A-C125-471E-A4E5-FF56C3A02CB6"}
 */
function dc_showProgramMainLayout(_event) {
	var _layoutObject = {}
    _layoutObject.panels = []
    _layoutObject.panels[0] = {}
    _layoutObject.panels[0].view = 0;
	var _program = getProgram()
	switchLayout(_program, foundset, _layoutObject)
}

/**
  * will show the programs main layout in table view
  * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"873F1C97-C901-45B8-908F-9BFF44C5D484"}
 */
function dc_showProgramMainLayoutTable(_event) {
	var _layoutObject = {}
    _layoutObject.panels = []
    _layoutObject.panels[0] = {}
    _layoutObject.panels[0].view = 1;
	var _program = getProgram()
	switchLayout(_program, foundset, _layoutObject)
}

/**
 * To get the layout id.
 * @return {UUID|String} Layout_id or -1 if unknown
 * @author Sanneke Aleman
 * @since 2013.04.01
 * @properties={typeid:24,uuid:"A303C2D4-509C-42EA-BC2F-F4061DCF68C6"}
 */
function getLayoutId(_contextLevel, _searchUp) {

	
	if( vTableViewInformation['currentLayoutId'])
	{
	 	return vTableViewInformation['currentLayoutId'];
	}
	else //layout is not known, form is probably, form on tab in the framework
	{
		var _context = controller.getFormContext();
		if(_contextLevel == undefined)_contextLevel = 0 
		var _parentForm = _context.getValue(_context.getMaxRowIndex() - (1 + _contextLevel), 2);
		if(_parentForm && forms[_parentForm].vTableViewInformation['currentLayoutId'])
		{
			return forms[_parentForm].vTableViewInformation['currentLayoutId']
		}
		else if(_parentForm && _searchUp)
		{
			_contextLevel ++
			return getLayoutId(_contextLevel, true)
		}
		else if(!_parentForm) //context is to high
		{
			return '-1'
		}
	}
	return '-1'	
}
