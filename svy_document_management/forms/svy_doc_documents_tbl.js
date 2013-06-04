/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"CCB1000C-ED1C-4101-B0EC-9F2D13F64633"}
 */
function onRenderCheckOutTracked(event) {
	// Check out to temporary location
	if (scopes.svyProperties.getPropertyValue("document_management_tracked_checkout")) {
		/** @type {JSRecord<db:/svy_framework/doc_document>} */
		var _rec = event.getRecord();
		
		if (_rec.doc_document_to_doc_revision)
			databaseManager.saveData(_rec.doc_document_to_doc_revision);
		var _revRec = _rec.doc_document_to_doc_revision$latest_revision;
		
		if (_rec.is_checked_out) {
			if (_revRec.checked_out_by_user == globals.svy_sec_lgn_user_id)
				event.getRenderable().enabled = true;
			else
				event.getRenderable().enabled = false;
		}
		else
			event.getRenderable().enabled = true;
	}
	else
		event.getRenderable().enabled = false;
}
