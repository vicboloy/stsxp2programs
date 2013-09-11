/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F545C75F-A84C-43DF-BA74-1AB91158C183"}
 */
function delEmployeeRecord(event) {
		globals.doDialog("Remove Employee","Delete this Employee?","Remove","Cancel");
		if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}
	}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"C74EDC7C-1D05-4C89-A7DD-DDA85668ACD1"}
 */
function onRenderEmployeeButton(event) {
	elements.delCustomerButton.text = 'Delete '+employee_lastname+", "+employee_firstname;
}
