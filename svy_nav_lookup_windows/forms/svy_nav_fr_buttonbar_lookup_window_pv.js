/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"566AEAB9-3CC9-4B51-8813-2F0CBF9C3C85"}
 */
var vLookupWindow = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FFDB3009-A3AE-4536-89FD-93014B7213D8",variableType:4}
 */
var vSaved = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"09140C38-1AD0-4617-AAC4-FFFDF4685BD7",variableType:4}
 */
var vNew = 0;

/**
 * @properties={typeid:35,uuid:"79270B4E-3854-4067-95A2-0B19A698E1C5",variableType:-4}
 */
var vEditedRecords = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A84835FC-6266-488F-BAE5-9D325FCE88C0"}
 */
var vMode = null;

/**
 * @properties={typeid:24,uuid:"D16A006B-81E1-48C4-97E0-C68B1367A5D7"}
 */
function dc_edit() {
	/** @type {Number} */
	var _index = elements.form_view_01.tabIndex
	var _form = elements.form_view_01.getTabFormNameAt(_index)
	
	var _program = vProgram
	
	var success

		// acquire a lock or not, based on the program properties
	if (vMode != 'new' && forms[_form].foundset.getSize() && globals.nav.program[_program].record_locking) {

		if (forms[_form].controller.view != 0) //list or table view, so lock more records
		{
			success = databaseManager.acquireLock(forms[_form].foundset, -1, _program)
			if (!success) {
				globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.record_lock'), i18n.getI18NMessage('svy.fr.lbl.ok'));
				return;
			}

		} else {
			success = databaseManager.acquireLock(forms[_form].foundset, 0, _program)
			if (!success) {
				globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.record_lock'), i18n.getI18NMessage('svy.fr.lbl.ok'));
				return;
			}

		}
	}
	
	forms[_form].controller.focusFirstField()
	forms[_form].controller.readOnly = false
	globals['svy_nav_setFieldsColor'](_form, 'edit')
	globals['svy_nav_setRequiredFields'](globals.nav.program[_program],_form, 'edit')
	if (forms[_form].gotoEdit) {
		forms[_form].gotoEdit()
	}
	
	vMode = 'edit'
	updateUI();
	if (!vEditedRecords) {
		vEditedRecords = databaseManager.getEditedRecords()
	}
}

/**
 * FIXME: this method is a near exact copy of dc_save on svy_nav_fr_buttonbar_lookup_window.js
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"7233A245-1243-4A9D-AA9D-E6231A9654F9"}
 * @AllowToRunInFind
 */
function dc_save(_event) {

	
	/** @type {Number} */
	var _index = elements.form_view_01.tabIndex
	//FIXME: type below doesn't resolve due to module structure issues, hence refering to methods on this form results in warnings
	//worked around it now by using square bracket notation, but should be fixed
	///** @type {RuntimeForm<svy_nav_base>} */
	var form = forms[elements.form_view_01.getTabFormNameAt(_index)]
	
	vSaved = true
	vMode = 'browse'
	
    // Want to avoid saving the transaction if we are editing a record
    if (scopes.svyLookupWindows.solutionModelObject && 
    		(scopes.svyLookupWindows.solutionModelObject.mode == scopes.svyLookupWindows.MODES.EDIT_NO_COMMIT || 
    		 scopes.svyLookupWindows.solutionModelObject.mode == scopes.svyLookupWindows.MODES.NEW_NO_COMMIT))
    {
       globals.svy_nav_closeForm(_event)
	   return
    }
	var _methodReturn = form['dc_save_validate'](form.foundset, vProgram)
	if (_methodReturn == -1) {
		return;
	}

	databaseManager.startTransaction()
	
	//run onPreSave-method of table when available
	_methodReturn = form['dc_save_pre'](form.foundset)
	if (_methodReturn == -1) {
		return;
	}
	
	var _records = getEditedRecords()
	var _record
	for (var i = 0; i < _records.length; i++) {
		// save with output if the save went wrong
		if (!databaseManager.saveData(_records[i])) {
		
			var _failedArray = databaseManager.getFailedRecords()
			for (i = 0; i < _failedArray.length; i++) {
				_record = _failedArray[i];
			}
			var _ex = _record.exception
			globals.DIALOGS.showWarningDialog('Error in save', _ex, 'OK');
			databaseManager.rollbackTransaction()
			return;
		} 
	}
	//run onPostSave-method of table when available
	_methodReturn = form['dc_save_post'](form.foundset)
	if (_methodReturn == -1) {
		databaseManager.rollbackTransaction()
		return;
	}
		
	// commit with output if the commit went wrong
	if (!databaseManager.commitTransaction(false)) {
		_failedArray = databaseManager.getFailedRecords()
		for (i = 0; i < _failedArray.length; i++) {
			_record = _failedArray[i];
		}
		_ex = _record.exception
		globals.DIALOGS.showWarningDialog('Error in Commit', _ex, 'OK');
		databaseManager.rollbackTransaction()
		return;
	}
	
	var _program = vProgram;
	if (globals.nav.program[_program].record_locking) {
		// release lock
		databaseManager.releaseAllLocks(_program);
	}
	
	//refresh the records
	if(vLookupWindow)
	{
		var _formList = forms[vLookupWindow].elements.tab_searchFields.getTabFormNameAt(1)
		forms[_formList].foundset.loadAllRecords()
		//TODO: check if this refactor works
		forms[_formList].foundset.selectRecord(form.foundset.getSelectedRecord().getPKs())
	}
	
	globals.svy_nav_closeForm(_event)
	
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"B25D281A-C8F9-4695-AA30-382ADEB0E1DD"}
 */
function dc_cancel(_event) {
	
	// Get all the edited records after the lookup window is opened, including the main lookup record
	/** @type {Array<JSRecord>} */
	var _editedRecs = getEditedRecords();
	for (var i = 0 ; i < _editedRecs.length; i++) {
		// Roll back record changes
		_editedRecs[i].revertChanges();
	}
	
	var _program = vProgram;
	if (globals.nav.program[_program].record_locking) {
		// release lock
		databaseManager.releaseAllLocks(_program);
	}
	
	// to prevent setting a value
	vReturnField = null;
	
	vMode = 'browse'
	vSaved = true

	globals.svy_nav_closeForm(_event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A80312A5-84E8-495B-8987-4135B37FFF56"}
 */
function close(event) {
	
	if (vMode != 'browse') {
		dc_cancel(event)
	} else {
		globals.svy_nav_closeForm(event)
	}
}

/**
 * @properties={typeid:24,uuid:"3716D521-1382-44A2-BDA4-61199DF9D915"}
 */
function updateUI() {
	elements.btn_cancel.enabled = vMode != 'browse'
	elements.btn_edit.enabled = vMode == 'browse'
	elements.btn_save.enabled = vMode != 'browse'
	
}

/**
 * Method to get a array with all the records that are edited in the popupform
 * @return JSArray editedRecords returns a array with all the records that are edited in the popupform
 * @properties={typeid:24,uuid:"E47BC517-0ADC-4D4B-A012-3D916FBBACBD"}
 */
function getEditedRecords() {
	/** @type {Number} */
	var _index = elements.form_view_01.tabIndex
	var _form = elements.form_view_01.getTabFormNameAt(_index)
	var _record = forms[_form].foundset.getSelectedRecord()
	var _records = new Array()
	
	//get the record of the form you are editing
	_records.push(_record)
	
	//compare the edited records that where there before you start editing with what records there are now
	var _currentEditedRecords = databaseManager.getEditedRecords()
	
	if (!vEditedRecords) {
		return [];
	}
	
	for (var i = 0; i < _currentEditedRecords.length; i++) {
		var _isInArray = false
		for (var j = 0; j < vEditedRecords.length; j++) {
			if(_currentEditedRecords[i] == vEditedRecords[j])
			{
				_isInArray = true
			}
		}
		if(!_isInArray)
		{
			//This is a record that is edited on the form
			if(_currentEditedRecords[i] != _record) //not the form record
			{
				_records.push(_currentEditedRecords[i])
			}
		}
	}
	
	return _records
}

/**
 * Handle hide window.
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"926A3DBD-33D1-403A-94DB-DBB0895562DA"}
 */
function onHide(event) {
	
	if (!vSaved) dc_cancel(event)

	if (scopes.svyLookupWindows.solutionModelObject && (scopes.svyLookupWindows.solutionModelObject.mode == scopes.svyLookupWindows.MODES.NEW_COMMIT || scopes.svyLookupWindows.solutionModelObject.mode == scopes.svyLookupWindows.MODES.NEW_NO_COMMIT) && vMode == 'browse') {
		selectRecord(event);
	} else if (vMode == 'edit') {
		dc_cancel(event)
	} else {
		globals.svy_nav_closeForm(event)
	}
	if (scopes.svyLookupWindows.solutionModelObject) scopes.svyLookupWindows.solutionModelObject.mode = scopes.svyLookupWindows.MODES.EXIT;
	return true
 
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1D6D832-E683-41FC-BE47-64CE33707DDD"}
 */
function onShow(firstShow, event) {
	vSaved = false
	if (scopes.svyLookupWindows.solutionModelObject && 
			((scopes.svyLookupWindows.solutionModelObject.mode == scopes.svyLookupWindows.MODES.EDIT_NO_COMMIT || 
				scopes.svyLookupWindows.solutionModelObject.mode == scopes.svyLookupWindows.MODES.EDIT_COMMIT) || 
			(scopes.svyLookupWindows.solutionModelObject.mode == scopes.svyLookupWindows.MODES.NEW_COMMIT || 
			scopes.svyLookupWindows.solutionModelObject.mode == scopes.svyLookupWindows.MODES.NEW_NO_COMMIT))) {
		application.sleep(200)//CHECKME: Why sleep?
		dc_edit();
	}
}

/** *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} [_form]
 *
 * @properties={typeid:24,uuid:"7B7FB747-7D30-4E7C-9A6D-F6B7AED64326"}
 */
function selectRecord(event, _form) {
	/** @type {Number} */
	var _index = elements.form_view_01.tabIndex
	_form = elements.form_view_01.getTabFormNameAt(_index)
	_super.selectRecord(event, _form)
}
