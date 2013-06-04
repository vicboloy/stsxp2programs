/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B586B22-63EB-4E68-98EF-76B5AE329B0F"}
 */
var vSearch = null;

/**
 * Perform the element default action.
 * @protected
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECF5AF3F-8E07-4B16-91BE-F5834F5745FC"}
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
 * @properties={typeid:24,uuid:"4701A392-9B6D-425B-AA05-0DDC803E7814"}
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
 * @properties={typeid:24,uuid:"D92CAEC9-8629-4AA1-99FF-39FCC78159BA"}
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
 * @properties={typeid:24,uuid:"1F7068DD-71C7-429C-95D7-9C788A5071F9"}
 */
function onShow(firstShow, event) {
	elements.fld_search.requestFocus()
}

/**
 * Perform the element default action.
 * @protected
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"844F25EE-B727-4357-B5E3-D21930A2D120"}
 */
function cancel(event) {
	globals.svy_nav_closeForm(event)
}

/**
 * @protected
 * @param {JSEvent} event the event that triggered the action
 * @param {String} [_form]
 *
 * @properties={typeid:24,uuid:"F0D09DB8-BDC0-41CD-A9F6-5772D8EEA233"}
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
 * @properties={typeid:24,uuid:"B9EFAF52-0F85-497F-8388-5DE057468E3E"}
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
