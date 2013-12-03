/**
 * Servoy implementation of MVC-style programming.
 * This method updates the form appearance based on the state of the model.
 * Called often - anytime the state of the model may have changed.
 * Including: onRecordSelection, onShow, onRecordEditStop
 * Implementation forms should override this method to update the user interface.
 * Implementation forms should call this method when the data model is programmatically changed.
 * 
 * @param {JSEevent} event The event that triggered the action.
 * @return {Boolean} Should always be true;
 * @properties={typeid:24,uuid:"9D9BD4F7-306C-46F9-929C-BF4B76CB52F9"}
 */
function updateUI(event) {
	return true;
}

/**
 * Handle record selected.
 * Invokes the updateUI() method
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B4DA9FD0-0287-4BA4-A6DD-21B9321AE891"}
 */
function onRecordSelection(event) {
	updateUI(event);
}

/**
 * Callback method for when form is shown.
 * Invokes the updateUI() method
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"327B0422-4DCE-4609-B8C5-742DF2BA1DCB"}
 */
function onShow(firstShow, event) {
	updateUI(event);
}

/**
 * Callback method form when editing is stopped.
 * Invokes the updateUI() method
 * 
 * @param {JSRecord} record record being saved
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0BBA9D8E-E1D5-4CAA-A62E-1A917AD8389C"}
 */
function onRecordEditStop(record, event) {
	updateUI(event);
	return true;
}
