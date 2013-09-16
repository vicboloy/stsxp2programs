
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"027567CC-C0C7-43F6-8F87-7A8878ED6B55"}
 */
function onActionClickCustomer(event) {
	var win = application.createWindow("customers", JSWindow.WINDOW);
	win.setInitialBounds(10, 10, 880, 475);
	win.title = "Customers";
	win.show('customers');
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B0C80879-16DA-4098-8801-18C1D7F24E96"}
 */
function onActionClickEmployee(event) {
	var win = application.createWindow("Employees", JSWindow.WINDOW);
	win.setInitialBounds(50, 50, 870, 540);
	win.title = "Employees";
	win.show('employees');
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"AE5DFB87-E846-4DFB-9C25-E57140EC29C3"}
 */
function onActionClickCarrier(event) {
	var win = application.createWindow("carriers", JSWindow.WINDOW);
	win.setInitialBounds(50, 50, 775, 585);
	win.title = "Carriers";
	win.show('carriers');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C61C110C-151B-4C9D-B0AB-FA32D9401D16"}
 */
function onActionClickEmployeeClass(event) {
	var win = application.createWindow("Employee Class", JSWindow.WINDOW);
	win.setInitialBounds(50, 50, 660, 310);
	win.title = "Employee Class Codes";
	win.show('emp_class_code');
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"BFF5857C-588C-4703-B859-CF9A5A1BF8B9"}
 */
function onActionClickUOM(event) {
	var win = application.createWindow("Units of Measure", JSWindow.WINDOW);
	win.setInitialBounds(50, 50, 660, 380);
	win.title = "Units of Measure";
	win.show('unit_of_measure');
}