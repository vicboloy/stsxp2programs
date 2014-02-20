/** *
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"1B460724-30AD-44C9-B150-AA0E16562564"}
 */
function updateUI(event) {
	controller.readOnly = foundset.getSize() == 0;
	return _super.updateUI(event);
}
