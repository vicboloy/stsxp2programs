/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D82C1496-9162-4548-BC98-F727C8D3DCDC"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		versionForm = globals.getInstanceForm(event);
		baseForm = event.getFormName().replace(versionForm,'');
		globals.setUserFormPermissions(event,false);
		elements.tabs.setTabTextAt(1,i18n.getI18NMessage('sts.tab.print.labels'))
		elements.tabs.setTabTextAt(2,i18n.getI18NMessage('sts.tab.printer.settings'))
	}
	//forms.barcode_print.elements.tabs.addTab('preferences_printer');
}
