/**
 * TODO generated, please specify type and doc for the params
 * @param event System selection event
 * @param windowTitle Window bar title
 * @param formName Main form name for button selection
 * @param xOrigin Top form corner for displayed form
 * @param yOrigin Left form corner for displayed form
 * @param xWidth Width of displayed form
 * @param yHeight Height form bound for displayed form
 * @param multiWindow allow multiple windows to be created
 *
 * @properties={typeid:24,uuid:"AB5FA848-1D56-44C8-8B74-23EA4659F2D3"}
 * @AllowToRunInFind
 */
function onActionClickMainButton(event,windowTitle,formName,xOrigin,yOrigin,xWidth,yHeight,multiWindow){
	application.output(windowTitle);
	var formNameNew = formName;
	if (multiWindow){
		windowTitle = windowTitle+"_";
		formNameNew = formNameNew+"_";
		while (application.getWindow(windowTitle) != null){
			windowTitle = windowTitle+"o";
			formNameNew = formNameNew+"o";
		}
		// make a clone/copy from it
		var clone = createFormClone(formName,formNameNew);
	}
	var win = application.createWindow(windowTitle, JSWindow.WINDOW);
	var xBeg = xOrigin;
	var yBeg = yOrigin;
	var xEnd = xOrigin+xWidth;
	var yEnd = yOrigin+yHeight;
	win.setInitialBounds(xBeg, yBeg, xEnd, yEnd);
	win.title = windowTitle;
	win.show(formNameNew);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"027567CC-C0C7-43F6-8F87-7A8878ED6B55"}
 */
function onActionClickCustomer(event) {
	onActionClickMainButton(event,"Customers",'customers',10,10,890,550,false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B0C80879-16DA-4098-8801-18C1D7F24E96"}
 */
function onActionClickEmployee(event) {
	onActionClickMainButton(event,"Employees",'employees',50,50,880,490,false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"AE5DFB87-E846-4DFB-9C25-E57140EC29C3"}
 */
function onActionClickCarrier(event) {
	onActionClickMainButton(event,"Carriers",'carriers',50, 50, 775, 535,false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C61C110C-151B-4C9D-B0AB-FA32D9401D16"}
 */
function onActionClickEmployeeClass(event) {
	onActionClickMainButton(event,"Employee Class",'emp_class_code',50,50,610,270,true);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"BFF5857C-588C-4703-B859-CF9A5A1BF8B9"}
 */
function onActionClickUOM(event) {
	onActionClickMainButton(event,"Units of Measure",'unit_of_measure',50,50,610,330,false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"994929DE-14ED-4426-A743-D0A7169117EA"}
 */
function onActionClickEP(event) {
	onActionClickMainButton(event,"End Conditions",'end_conditions',50,50,610,330,false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B5B3AFA8-95D7-49CD-AB3E-256306625504"}
 */
function onActionClickSC(event) {
	onActionClickMainButton(event,"Status Codes",'status_descriptions',50,50,750,595,false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CCC7C093-1A7B-4EC7-A8E7-1E0A2B0DC5ED"}
 */
function onActionClickPref(event) {
	onActionClickMainButton(event,"Preferences",'preferences_main',50,50,700,580,false);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"F0E82BB1-3030-4DD4-973C-75E91FBA179A"}
 */
function onActionRoutings(event) {
	onActionClickMainButton(event,"Routings",'routing_codes',50,50,610,485,false);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CE4DD060-E710-49BA-9DAB-0760EE82DF4B"}
 */
function onActionJobs(event) {
	onActionClickMainButton(event,"Jobs",'jobs_tabs',50,50,960,450,false);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"62683739-AB1C-4C81-9DD8-C03DD2959842"}
 */
function onActionUserManage(event) {
	onActionClickMainButton(event,"User Management",'user_management',50,50,960,450,false);
}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35F5B55F-AE50-40D1-BF9F-6EA16BFBDD7D"}
 */
function onLoadMain(event) {
	globals.initStatusTypes();
	globals.initUomArray();
	application.setValueListItems('stsvl_rfPortableType',forms.preferences_main.arfPortableType);
	application.setValueListItems('stsvl_status_type',globals.aStatusTypes);
	globals.initLaborCodes();

}
