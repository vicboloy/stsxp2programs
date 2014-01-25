

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E07CC2F9-2DC1-4EB4-863B-F52DA90CB293"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	controller.loadAllRecords();
}
