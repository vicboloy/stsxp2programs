
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9838C26E-2FEB-4953-9D21-1B8DBAEAD65F"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		elements.split.dividerLocation = 0.40;
		forms.status_description_rec.onEdit(event,false);
		forms.status_description_rec.getFabShops(event);
		forms.status_description_rec.getStatusList();
	}
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
	return true
}
