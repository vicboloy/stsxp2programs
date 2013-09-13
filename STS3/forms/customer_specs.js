/**
 * @properties={typeid:35,uuid:"4137BDC4-EC26-4862-85D9-B069B6EEE5C2",variableType:-4}
 */
var editCustomerFlag = false;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1FC02317-CBF4-4ED9-A5EF-EF22CD4EB0E3"}
 */
function onShow(firstShow, event) {
	//set this up for edit, save, cancel
	controller.readOnly = true;
}
