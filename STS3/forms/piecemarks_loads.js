
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C20ADDF-D645-4A3F-BA28-379575D2EBCC"}
 */
function onShow(firstShow, event) {
	var tableName = elements.tabs.getTabFormNameAt(1);
	forms['piecemark2'].elements.btn_EditSettingsLeftPanel.visible = (forms[tableName].foundset.getSize() > 0);
}
