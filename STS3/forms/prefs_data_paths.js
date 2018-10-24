/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8A8E9DD3-A1C2-4005-A91A-C646EAEA69F8"}
 */
var baseDir = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A363968E-A228-4FA9-ADDA-41ECDD777F6A"}
 */
function onShow(firstShow, event) {
	var defaultLoc = plugins.file.getDefaultUploadLocation();
	application.output(defaultLoc);
	if (firstShow){
		baseDir = i18n.getI18NMessage('sts.server.default.dir')+': '+defaultLoc;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7C4C038-22C2-430C-8492-58642120843D"}
 */
function onActionCopyToClipboard(event) {
	var form = forms[event.getFormName()]
	var el = form.elements[event.getElementName()];
	var datProv = el.getDataProviderID();
	application.setClipboardContent(form[datProv]);
}
