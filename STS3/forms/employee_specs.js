
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"EC2B3965-7A1D-4E43-83D4-8A09844BD098"}
 */
function onRenderEmployeeData(event) {
	// NOTE: a property set on the renderable, will be kept on the element only during onRender
	/**
	if (event.isRecordSelected()) {
		event.getRenderable().fgcolor = '#00ff00';
	} else if (event.getRecordIndex() % 2) {
		event.getRenderable().fgcolor = '#ff0000';
	}
	**/
	if (employee_lastname != null) {
		elements.employeeFullName.text = "RECORD: "+employee_firstname+" "+employee_middlename+" "+employee_lastname;
	}
}
