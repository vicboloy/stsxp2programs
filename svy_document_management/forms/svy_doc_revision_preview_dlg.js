/**
 * The media variable to hold the preview of the document
 * 
 * @type {JSMedia}
 * 
 * @properties={typeid:35,uuid:"2908E86B-9A76-4385-84D1-B41742CE47F5",variableType:-4}
 */
var vRevisionPreview = null;

/**
 * The revision that is shown
 * 
 * @type {JSRecord<db:/svy_framework/doc_revision>}
 * 
 * @properties={typeid:35,uuid:"884B31AE-492D-41E9-9D05-4FD6FA4F7869",variableType:-4}
 */
var vRevisonRec = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3053E1D5-EB0C-451C-9299-47BDAB7E4D04"}
 */
function onClose(event) {
	application.getWindow('revision_preview').hide();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74E509D7-55E1-4E53-ACF3-415D9D15BD9E"}
 */
function downloadRevision(event) {
	
	if (vRevisonRec)
		_super.downloadCurrentRevision(event, vRevisonRec);
	else
		_super.downloadCurrentRevision(event)
}
