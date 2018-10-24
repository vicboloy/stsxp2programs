/**
 * @properties={typeid:35,uuid:"EF13FBFA-C4EA-42C2-8625-09C5121337D9",variableType:-4}
* @type abcPrinterList {Array} Array containing units of measure
 */
var abcPrinterList = new Array;
abcPrinterList.push('Allegro');
abcPrinterList.push('DataMax');
abcPrinterList.push('LabeLase 1000');
abcPrinterList.push('Pinnacle');
abcPrinterList.push('Prodigy Plus');
abcPrinterList.push('TEC B-400');
abcPrinterList.push('Zebra');

/**
 * @properties={typeid:35,uuid:"8587CE77-93D0-4A12-AAE1-E3AB85CB6CE9",variableType:-4}
 * @type aLabelType {Array} aLabelType Array containing units of measure
*/
var aLabelType = new Array;
aLabelType.push('Raw Matl');
aLabelType.push('Serial #');
aLabelType.push('Serial01');
aLabelType.push('Standard');

/**
 * @properties={typeid:35,uuid:"EAE37CDD-26F7-4CF8-9312-55774F700588",variableType:-4}
 * @type lanUsers {Array} lanUsers Array containing units of measure
 */
var lanUsers = new Array;

/**
 *
 * @param event
 * @param updateValue
 *
 * @properties={typeid:24,uuid:"FFF06255-B45A-457D-88BF-294263A595DE"}
 */
function onActionGetPrinters(event,updateValue) {
	scopes.prefs.getLocalPrinters();
	scopes.prefs.getBTLabelFormats();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84DD0203-ADAF-4756-9D1A-7548021A9DDE"}
 */
function onShow(firstShow, event) {
	onActionGetPrinters(event,null);
	if (!scopes.printer.default_label_name || scopes.printer.default_label_name == ""){
		scopes.printer.default_label_name = '<NONE>';
	}
}
