/**
 * @properties={typeid:35,uuid:"01F18381-836E-4BD7-BCD1-5D93D9BCEEF4",variableType:-4}
 */
var currentSort = null;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9838C26E-2FEB-4953-9D21-1B8DBAEAD65F"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (firstShow){
		elements.split.dividerLocation = 0.40;
		forms.status_description_rec.onEdit(event,false);
		forms.status_description_rec.getFabShops(event);
		forms.status_description_rec.getStatusList();
	}
	globals.setUserFormPermissions(event,'');
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"947CF75B-1CEB-47C7-A3FC-DE1155551082"}
 */
function onHide(event) {
	forms.status_description_rec.onActionCancelEdit(event);
	application.output('name '+event.getFormName());
	scopes.jobs.removeFormHist(event.getFormName());
	return true
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} buttonTextSrc
 *
 * @properties={typeid:24,uuid:"37D3D7F3-6840-4F40-8539-006D1C22B1D3"}
 */
function onRecordSelection(event, buttonTextSrc) {
	null;
	return _super.onRecordSelection(event, buttonTextSrc)
}
