
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} _form
 *
 * @properties={typeid:24,uuid:"145B05C3-821D-402F-81A3-3FC93567AB8E"}
 */
function onRecordSelection(event, _form) {
	application.output("Current Index "+vCurrentIndex);
	return _super.onRecordSelection(event, _form)

}
