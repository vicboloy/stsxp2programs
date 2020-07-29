/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"104B8D17-05B9-4680-8BCD-DEF352464477"}
 */
var message = '';
/**
 * @properties={typeid:35,uuid:"CB9AF522-620C-490C-AF0A-698A396482DE",variableType:-4}
 */
var isMessagesWindow = true;
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0F4DD408-068C-49F2-BAD0-60F172027187"}
 */
function onHide(event) {
	if (scopes.jobs.importInProcess == true){scopes.jobs.stopImport = true}//if this window closed during import, then question about stopping import 
	scopes.jobs.warnWindow = null;
	return true
}
