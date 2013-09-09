
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2203CCD4-CBB2-4CC9-80BD-683AF4AB2C9A"}
 */
function onRecordSelection(event) {
	var textAddressDelete = "Selected";
	textAddressDelete = address_type;
	forms.addresses.elements.deleteButton.text = 'Delete \''+textAddressDelete+'\' address';
	if (textAddressDelete == null) {
		forms.addresses.elements.deleteButton.visible = false;
	} else {
		forms.addresses.elements.deleteButton.visible = true;
	}
	
}
