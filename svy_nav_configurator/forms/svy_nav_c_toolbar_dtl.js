/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"ADBC7905-1704-493E-9D55-CCF8308E50A2"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	controller.loadAllRecords()
	_super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7BFCBB95-1498-4B63-9D75-BDB5ED08D63F"}
 * @AllowToRunInFind
 */
function loadall(event) {
	controller.loadAllRecords()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A5EA4F12-C237-47D5-8E3F-B2778C4492AA"}
 */
function dc_duplicate(event) {
	var _rec_from = foundset.getRecord(controller.getSelectedIndex())
	var _answer = globals.DIALOGS.showInputDialog(i18n.getI18NMessage('svy.fr.lbl.toolbar'), i18n.getI18NMessage('svy.fr.lbl.toolbar_name'), _rec_from.name + '_copy')
	if(_answer == null || _answer == '') // cancel duplication
	{
		return
	}
	
	controller.duplicateRecord()
	var _rec_to = foundset.getRecord(controller.getSelectedIndex())
	
	_rec_to.name = _answer

	for (var i = 1; i <= _rec_from.nav_toolbar_to_nav_toolbar_item.getSize(); i++) {
		_rec_from.nav_toolbar_to_nav_toolbar_item.setSelectedIndex(i)
		_rec_from.nav_toolbar_to_nav_toolbar_item.duplicateRecord(i)
		_rec_from.nav_toolbar_to_nav_toolbar_item.toolbar_id = _rec_to.toolbar_id
		databaseManager.saveData()
	}
}
