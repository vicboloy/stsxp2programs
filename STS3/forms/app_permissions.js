
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"41C6029A-BC29-4525-B403-ACA73D655FD8"}
 */
function onHide(event) {
	globals.setWindowClosed("");
	return _super.onHide(event)
}


