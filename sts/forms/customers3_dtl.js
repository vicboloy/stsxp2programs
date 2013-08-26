
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18A458C6-00B5-4A80-B1EE-A0ACE8816612"}
 */
function onActionLaunchWindow(event) {
	// TODO Auto-generated method stub
	// create and show a window, with specified title, initial location and size
	// type of the window can be one of JSWindow.DIALOG, JSWindow.MODAL_DIALOG, JSWindow.WINDOW
	// If parentWindow is not specified, the current window will be used as parent; parentWindow parameter is only used by dialogs
	var forms = solutionModel.getForms()
	for (var i in forms)
		application.output(forms[i].name)

	var ok = svyNavigation.cloneFormWithTabs("ly_Customer","Customer_Detail")
	if (ok)
	{
		var dialog = application.createWindow("Customer_Detail", JSWindow.WINDOW);
	 controller.show('Customer_Detail')
		//forms['orders_view'].controller.show()
		//forms.xyz.elements.myTabPanel.addTab(forms['orders_view'])
		//forms['orders_view'].elements.mylabel.setLocation(10,20)
	}
	return
/**
	var win = application.createWindow("customers3_dtl", JSWindow.WINDOW);
	win.setInitialBounds(10, 10, 700, 600);
	win.title = "Customer";
	controller.show(win);
	// create and show a non-modal dialog with default initial bounds/title
	//controller.showRecords(15, nmd); // 15 is a single-number pk in this case
**/
}
