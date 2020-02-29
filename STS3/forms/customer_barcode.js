/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE4CE75B-2400-4BB9-8B2A-7B9BDD1E6E93"}
 */
var vPreamble = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D51C929-DD16-4F82-B689-B3D8C762DB62"}
 */
var vJobNumber = "J1234";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE1755AB-08F6-45C0-87B3-E6301E9EC5D3"}
 */
var vBarcodeSample = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9037563-6428-40CA-8652-BE41A284816C"}
 */
var vSerial = "SSSSSSSS";
/**
 * Perform the element default action.
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3DFB0DE-C8E8-46A0-B6E0-D4D0402AAC01"}
 * @AllowToRunInFind
 */
function onActionStartingPosition(oldValue,newValue,event) {
		elements.barcode_fixed_length.editable = (newValue.search('Starting') == 0);
		barcode_fixed_length = (barcode_job_start != i18n.getI18NMessage('i18n:sts.txt.barcode.start.position')) ? 0 : barcode_fixed_length;
		calcBarcode();
}
/**
 * @param {JSEvent} event
 * @param {Boolean} editing
 *
 *
 * @properties={typeid:24,uuid:"7EC0215F-9139-4B31-A08E-BA857FFD8B33"}
 */
function onActionEdit(event,editing){
	controller.readOnly = !editing;
	elements.editMessage.visible = editing;
	globals.permissionsCacheHit(event,null);

}
/**
 * @properties={typeid:24,uuid:"F0D03ACB-F634-4279-891C-65F0CEB043F0"}
 */
function calcBarcode(){
	//var serial = vSerial;
	var barcodeLength = scopes.prefs.barcodeLength;
	vPreamble = (barcode_include_prefix == i18n.getI18NMessage('sts.txt.barcode.include.prefix')) ? barcode_prefix : "";
	var jobLength = (barcode_preamble_length == 4) ? 2 : 3;
	var serialLength = barcodeLength - barcode_preamble_length;//(barcode_preamble_length == 4) ? 6 : 5;
	if (vPreamble == ""){
		jobLength += 2;
	}
	barcode_job_length = jobLength;
	var padJobNumber = vJobNumber;
	vSerial = "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSs".substr(0,serialLength);//simplified
	var jobText = "";
	elements.barcode_fixed_length.editable = false;
	if (barcode_job_start == i18n.getI18NMessage('i18n:sts.txt.barcode.first.characters')){
		jobText = padJobNumber.substr(0,jobLength);
	} else if (barcode_job_start == i18n.getI18NMessage('i18n:sts.txt.barcode.last.characters')){
		var startPos = (jobLength > padJobNumber.length) ? 0 :  padJobNumber.length-jobLength;
		jobText = padJobNumber.substr(startPos,jobLength);
	} else {
		elements.barcode_fixed_length.editable = (elements.editMessage.visible);
		var jobStart = barcode_fixed_length;
		//if (jobStart > padJobNumber.length-1-jobLength){
		//var jobStart = padJobNumber.length-1-jobLength;
		//}
		jobText = padJobNumber.substr(jobStart-1,jobLength);
	}
	while (jobText.length < jobLength){
		jobText = "0"+jobText;
	}
	vPreamble = vPreamble+jobText;
	vBarcodeSample = vPreamble+vSerial;
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA1F3FAF-44CB-4CFD-9254-11AC247B61BE"}
 */
function onShow(firstShow, event) {
	if (foundset.getSize() != 0){calcBarcode();}
	globals.setUserFormPermissions(event,false);

}


/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"ED306CE5-7C90-460B-B1FD-F5F0D38789A7"}
 */
function onDataChangePreambleLength(oldValue, newValue, event) {
	calcBarcode();
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4ECBFE2D-B172-4C8C-8762-066FD7ED8549"}
 */
function onDataChangeIncludePrefix(oldValue, newValue, event) {
	calcBarcode();
	//scopes.jobs.numbersUp();
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"118B5F78-0FBE-483E-B629-8ED780DB907D"}
 */
function onDataChangeBarcodeJobStart(oldValue, newValue, event) {
	calcBarcode();
	return true
}
