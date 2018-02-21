/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07193977-C97B-4987-AD8B-D9682E6ABD11"}
 */
var labelType = '';
/**
 * @properties={typeid:35,uuid:"70665BA5-2C5A-4DE1-9E4E-2CFE0A251D7C",variableType:-4}
 */
var prefsChanged = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FE38750B-C776-4EA6-9422-B9288D186F02"}
 */
var printerName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECFB8283-AB57-46B4-B004-F9A91E8505C1"}
 */
var labelName = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39452C4A-A572-4299-A82E-E3F10C84731B"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		scopes.prefs.getLocalPrinters();
		scopes.prefs.getBTLabelFormats();
		elements.btn_UpdatePreferences.enabled = false;
		elements.btn_SessionPreferences.enabled = false;
		labelType = i18n.getI18NMessage('sts.txt.id.label.default');
		printerName = scopes.printer.idBarcodePrinter;
		labelName = scopes.printer.idBarcodeLabelFormat;
	}
}
