

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
	}
	//forms.barcode_print.elements.tabs.addTab('preferences_printer');
}
