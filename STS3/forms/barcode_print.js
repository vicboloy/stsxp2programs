

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67FCCE4A-1B5E-4B17-B184-931356A3ABE7"}
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
