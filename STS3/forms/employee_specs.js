
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"EC2B3965-7A1D-4E43-83D4-8A09844BD098"}
 */
function onRenderEmployeeData(event) {
	if (employee_lastname != null) {
		elements.employeeFullName.text = "RECORD: "+employee_firstname+" "+employee_middlename+" "+employee_lastname;
	}
}
