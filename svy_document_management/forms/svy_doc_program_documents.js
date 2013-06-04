/**
 * Set up the foundset for the form
 * 
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"C261683A-A5EC-4190-998A-ECDA776F9329"}
 * @AllowToRunInFind
 */
function setUpFoundset(_event) {
	var _docFs = globals.svy_doc_getDocumentFoundset();
	controller.loadRecords(_docFs);
}
