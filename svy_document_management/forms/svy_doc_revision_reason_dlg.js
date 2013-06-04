/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"20C1363A-C4B7-4437-BED7-B8FD57E22D85"}
 */
var buttonClicked = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4083BFDE-5D6A-4D38-9DCF-4F458E9B22BA"}
 */
var vRevisionReason = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A49FE15D-CD0B-4619-AE5E-9464B0950332"}
 */
function onShow(firstShow, event) {
	forms.svy_doc_documents.btnSelect = 'cancel';
	forms.svy_doc_documents.revisionReason = null;
	vRevisionReason = null;
	buttonClicked = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA6FCB7C-316F-4345-9A4A-B6747B93BA1E"}
 */
function onCancel(event) {
	buttonClicked = 'cancel';
	forms.svy_doc_documents.btnSelect = 'cancel';
	controller.getWindow().destroy();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F459158-DCF2-4549-B510-10FB858AFF13"}
 */
function onSelect(event) {
	buttonClicked = 'select';
	forms.svy_doc_documents.btnSelect = 'select';	
	forms.svy_doc_documents.revisionReason = vRevisionReason;
	controller.getWindow().destroy();
}
