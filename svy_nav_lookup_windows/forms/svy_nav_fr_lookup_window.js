/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C68FFBC-CED4-4DFE-8CD4-2257B35E9F2B"}
 */
var vSearch = null;

/**
 * Perform the element default action.
 * @protected
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2BBBFA0F-B1F5-4D56-B3BA-58D8FB04836A"}
 * @AllowToRunInFind
 */
function search(event) {
	/** @type {Number} */
	var _index = elements.tab_searchFields.tabIndex
	var _form = elements.tab_searchFields.getTabFormNameAt(_index)
	if(forms[_form].controller.find())
	{
		for (var i = 0; i < vFields.length; i++) {
			forms[_form].controller.newRecord()
			forms[_form][vFields[i]] = '#'+ vSearch + '%'
			forms[_form].controller.newRecord()
			forms[_form][vFields[i]] = '#% '+ vSearch + '%'
		}
		forms[_form].controller.search()
	}
	forms[_form].elements[vElements[0]].requestFocus()
}

/**
 * Perform the element default action.
 * @protected
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B3E6F09-F1EC-4703-9ABF-21437C8BF338"}
 */
function newRecord(event) {
	/** @type {Number} */
	var _index = elements.tab_searchFields.tabIndex
	var _form = elements.tab_searchFields.getTabFormNameAt(_index)
	scopes.svyLookupWindows.showRecord(forms[_form].foundset,vProgram, true, controller.getName())//also new record
}

/**
 * Perform the element default action.
 * @protected
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3ABB63FD-FCBC-4FA9-9B47-3D7032CC1957"}
 */
function showRecord(event) {
	/** @type {Number} */
	var _index = elements.tab_searchFields.tabIndex
	var _form = elements.tab_searchFields.getTabFormNameAt(_index)
	return scopes.svyLookupWindows.showRecord(forms[_form].foundset,vProgram, false, controller.getName())
}

/**
 * Callback method for when form is shown.
 * @protected
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"51460444-4FBD-494B-A4C3-16200162138A"}
 */
function onShow(firstShow, event) {
	elements.fld_search.requestFocus()
}

/**
 * Perform the element default action.
 * @protected
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7F4DFAD-8EAD-4936-907C-68B25F1B69B5"}
 */
function cancel(event) {
	globals.svy_nav_closeForm(event)
}

/**
 * @protected
 * @param {JSEvent} event the event that triggered the action
 * @param {String} [_form]
 *
 * @properties={typeid:24,uuid:"EE5D0978-501D-4BDB-98A7-B753CC31733F"}
 */
function selectRecord(event, _form) {
	/** @type {Number} */
	var _index = elements.tab_searchFields.tabIndex
	_form = elements.tab_searchFields.getTabFormNameAt(_index)
	_super.selectRecord(event, _form)
}

/**
 * Perform the element default action.
 * @protected
 * @param {JSEvent} event the event that triggered the action
 * @return {Number} 1 success, -1 no success
 *
 * @properties={typeid:24,uuid:"1C748BBB-F50A-495A-A5C3-947DAF7D6B59"}
 */
function deleteRecord(event) {
	/** @type {Number} */
	var _index = elements.tab_searchFields.tabIndex
	var _form = elements.tab_searchFields.getTabFormNameAt(_index)
	var _program = vProgram
	// acquire a lock or not, based on the program properties
	if (globals.nav.program[_program].record_locking) {
		var success = databaseManager.acquireLock(forms[_form].foundset, 0)
		
		if (!success) {
			globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.warning'), i18n.getI18NMessage('svy.fr.dlg.record_lock'), i18n.getI18NMessage('svy.fr.lbl.ok'));
			return -1;
		}
	}

	var _message = i18n.getI18NMessage('i18n:svy.fr.dlg.delete');

	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer = globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), _message, _ok, _no);
	var _return = 1
	
	if (_answer == _ok) {
		databaseManager.startTransaction()
		var _succes = forms[_form].controller.deleteRecord()

		if (_succes) {
			databaseManager.commitTransaction(false)
		} else {
			databaseManager.rollbackTransaction()
			_return = -1
			globals.DIALOGS.showWarningDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete_cancel'), i18n.getI18NMessage('svy.fr.lbl.ok'))
		}
	}
	return _return
}
