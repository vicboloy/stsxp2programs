/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"13FA8930-2D29-42C9-87A0-078FD1AC082D"}
 */
var vFormname = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"916530EF-6842-4D85-A663-15AD89FBB387"}
 */
var vProgram = null;

/**
 * Create a new record
 *
 * @author Vincent Schuurhof
 * @since 2011-05-24
 * @return none
 * 
 * @properties={typeid:24,uuid:"F587CEA1-1391-4234-A26A-9CEE1D3313D2"}
 */
function newRecord() {
	/** @type {JSFoundSet<db:/svy_framework/nav_advanced_search>} */
	var _fsAdvanceSearch = forms[globals.nav.advancedSearchTableFormName].foundset
	
	var newAdvanceSearchRec = _fsAdvanceSearch.getRecord(_fsAdvanceSearch.newRecord())
	newAdvanceSearchRec.user_id = globals.svy_sec_lgn_user_id;
	newAdvanceSearchRec.organization_id = globals.svy_sec_lgn_organization_id;
	newAdvanceSearchRec.program_id = globals.nav_program_id;
	newAdvanceSearchRec.form_name = vFormname;
	newAdvanceSearchRec.user_table_view_id = globals.nav.program[vProgram].user_table_view_id;
	scopes.globals.svy_sea_advancedSearchId = newAdvanceSearchRec.nav_advanced_search_id
	
	enableDisableElements();
	controller.focusFirstField();
}

/**
 * Delete record
 *
 * @author Vincent Schuurhof
 * @since 2011-05-24
 * @return none
 * 
 * @properties={typeid:24,uuid:"65BF555F-A096-4EB0-952E-04B01B176D12"}
 */
function recordDelete() {
	if (foundset.getSize()) {
		var _ok = i18n.getI18NMessage('svy.fr.lbl.ok');
		var _no = i18n.getI18NMessage('svy.fr.lbl.no');
		var _answer =  globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no); 	
		if(_answer == _ok) {
			foundset.deleteRecord();
			enableDisableElements();
		}
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C3C75250-D4CF-497E-AB8C-0B1799AD3B56"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	globals.nav_program_name = vProgram
	globals.nav_program_id = _to_nav_program.program_id
 	foundset.loadRecords(_to_nav_advanced_search$program_id$user_id$organization_id);
 	
	foundset.find();
	foundset.form_name = vFormname;
	if (globals.nav.program[vProgram].user_table_view_id) {
		foundset.user_table_view_id = globals.nav.program[vProgram].user_table_view_id;
	} else {
		foundset.user_table_view_id = '^=';
	}

 	foundset.search();
 	
 	enableDisableElements();

	var _valueListRealValues = new Array();
	var _valueListDisplayValues = new Array();
	var _valueListValuesCounter = 0;
	
	var _form = solutionModel.getForm(vFormname);
	var _table = databaseManager.getTable(_form.dataSource)
	var _fields = _form.getFields().sort();
	for (var i = 0; i < _fields.length; i++) {
		
		if (!_table.getColumn(_fields[i].dataProviderID))						// Skip the aggregations and unstored calculations
			continue;
		
		var _labels = _form.getLabels();
		for (var j = 0; j < _labels.length; j++) {
			if (_labels[j].labelFor == _fields[i].name) {
				_valueListRealValues[_valueListValuesCounter] = _fields[i].dataProviderID;
				_valueListDisplayValues[_valueListValuesCounter] = _labels[j].text;
				_valueListValuesCounter++;
				
				break;
			}
		}
	}	
	
	application.setValueListItems('sea_field_names', _valueListDisplayValues, _valueListRealValues);
	
	// Refresh tree
	if (!foundset.getSize())
		forms[globals.nav.advancedSearchCriteriaTableFormName].refreshTree();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"092B5F4E-A4FD-45E3-98F2-AD79CB2CE8E5"}
 */
function applySearch(event) {
	databaseManager.saveData(foundset)
	databaseManager.saveData(foundset.nav_advanced_search_to_nav_advanced_search_criteria)
	if (foundset.getSize()) {
		globals.svy_nav_closeForm(event);
		
		globals.svy_sea_restoreAdvancedSearch(foundset.nav_advanced_search_id);	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"630027C5-B404-449D-A556-39F0A4A6A09F"}
 */
function duplicateRecord(event) {
	if (foundset.getSize()) {
		if (globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.duplicate_search'), 
				i18n.getI18NMessage('i18n:svy.fr.dlg.duplicate_search_confirm'), i18n.getI18NMessage('i18n:svy.fr.lbl.yes'),
				i18n.getI18NMessage('i18n:svy.fr.lbl.no')) == i18n.getI18NMessage('i18n:svy.fr.lbl.yes') ) {
			globals.svy_sea_duplicateAdvancedSearch(foundset);
			elements.name.requestFocus();
			forms[globals.nav.advancedSearchCriteriaTableFormName].refreshTree();
		}
	}
}

/**
 * @protected
 *
 * @properties={typeid:24,uuid:"5EB92BA0-36C5-4D25-B1ED-4D93755AC6E6"}
 */
function enableDisableElements() {
	var _enable = false;
	if (foundset.getSize()) {
		_enable = true;
	}
		
	elements.tab_advanced_search_tbl.enabled = _enable;
	elements.tab_advanced_search_criteria.enabled = _enable;
	elements.name.enabled = _enable;
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"77D22BA6-A76E-4AA9-8E64-6497CBD4A7D4"}
 */
function onRecordSelection(event) {
	var formName = elements.tab_advanced_search_criteria.getTabFormNameAt(1)
	forms[formName].refreshTree();		// Refresh the tree view
	forms[formName].elements.dbTreeCriteria.setNodeLevelVisible(5, true);
}
