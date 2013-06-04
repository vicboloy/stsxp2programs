/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03BE94F5-2CB9-474E-BC13-994310F94D1E"}
 */
var mode = 'BROWSE';

/**
 *
 * @properties={typeid:24,uuid:"32736E02-5322-44EC-A988-35CE905B240B"}
 */
function dc_save(_event, _all)
{
	if (onPreSave) {
		onPreSave(_event);
	}
	
	if(_all)
	{
		databaseManager.saveData()
	}
	else
	{
		var _rec = foundset.getRecord(foundset.getSelectedIndex())
		databaseManager.saveData(_rec)
	}
	
	gotoBrowse()
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"2179AB0B-CBE6-4975-B8E7-38BEDB835CDF"}
 */
function onPreSave(event) {
	
}

/**
 *
 * @properties={typeid:24,uuid:"EAFBA1F7-CE1F-49E5-B102-CE44174ED6DB"}
 */
function dc_delete(_event) {
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no);
	if(_answer == _ok)
	{
		controller.deleteRecord()
	}
}

/**
 *
 * @properties={typeid:24,uuid:"D92355AC-B919-44FE-AEF2-5CE728FE69B2"}
 */
function dc_new(_event) {
	
	controller.newRecord()
	gotoEdit()
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"540B181E-8BFF-4393-A75F-6DD2CCEEFAD0"}
 */
function dc_edit(_event) {
	gotoEdit()
}

/**
 *
 * @properties={typeid:24,uuid:"FF2E4CF1-ECFD-42EE-B7C3-6A016FE2706E"}
 */
function gotoEdit() {
	databaseManager.setAutoSave(false)
	controller.readOnly = false
	
	if(elements['btn_save'])
	{
		elements['btn_save']['enabled'] = true
	}
	if(elements['btn_cancel'])
	{
		elements['btn_cancel']['enabled'] = true
	}
	
	
	var _buttons = ['btn_new', 'btn_delete', 'btn_edit', 'btn_duplicate', 'btn_refresh']
	for (var i = 0; i < _buttons.length; i++) {
		if(elements[_buttons[i]])
		{
			elements[_buttons[i]].enabled = false
		}
		
	}
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"DB3AA5F1-6D69-443A-95FB-BF3F061D5476"}
 */
function gotoBrowse() {
	databaseManager.setAutoSave(true)
	controller.readOnly = true
	if(elements['btn_save'])
	{
		elements['btn_save']['enabled'] = false
	}
	if(elements['btn_cancel'])
	{
		elements['btn_cancel']['enabled'] = false
	}
	var _buttons = ['btn_new', 'btn_delete', 'btn_edit', 'btn_duplicate', 'btn_refresh']
	for (var i = 0; i < _buttons.length; i++) {
		if(elements[_buttons[i]])
		{
			elements[_buttons[i]].enabled = true
		}
		
	}
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"37266C22-3FAB-45EC-AE4B-62D5B01A7850"}
 */
function dc_duplicate(_event) {
	gotoEdit()
	controller.duplicateRecord()
}

/**
 * @param {JSEvent} _event
 * @properties={typeid:24,uuid:"35380E12-6152-4A54-BAAC-87A0014B29CB"}
 */
function dc_cancel(_event) {
	databaseManager.revertEditedRecords()
	databaseManager.setAutoSave(true)
	gotoBrowse()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D111346-2624-449D-91B0-B73B5900EF38"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if(firstShow && mode == 'BROWSE')
	{
		gotoBrowse()
	}
	else if(mode == 'EDIT')
	{
		gotoEdit()
	}
}
