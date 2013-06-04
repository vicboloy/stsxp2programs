/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"1BCD94C3-20D2-49BC-BB08-9D4D5FFB5471"}
 */
function onRenderTrackedCheckout(event) {
	// Check out to temporary location
	if (scopes.svyProperties.getPropertyValue('document_management_tracked_checkout')) {
		
		/** @type {JSRecord<db:/svy_framework/doc_revision>} */
		var _rec = event.getRecord();
		
		/** @type {JSRecord<db:/svy_framework/doc_document>} */
		var _docRec = _rec.doc_revision_to_doc_document;
		
		databaseManager.saveData(_docRec.doc_document_to_doc_revision);
		
		if (_docRec.is_checked_out) {
			if (_rec.checked_out_by_user == globals.svy_sec_lgn_user_id && _rec.revision_number == _docRec.doc_document_to_doc_revision$latest_revision.revision_number)
				event.getRenderable().enabled = true;
			else
				event.getRenderable().enabled = false;
		}
		else {
			if (_rec.revision_number < _docRec.doc_document_to_doc_revision$latest_revision.revision_number)
				event.getRenderable().enabled = false;
			else
				event.getRenderable().enabled = true;
		}
	}
	else {
		event.getRenderable().enabled = false;
	}
}
