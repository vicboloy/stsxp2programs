/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B99A3AA5-535D-490C-A573-85E2CE1906C7"}
 */
var windowList = "";
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
	//application.output(windowTitle);
	var formNameNew = formName;
	if (multiWindow){
		windowTitle = windowTitle+"_";
		formNameNew = formNameNew+"_";
		while (application.getWindow(windowTitle) != null){
			windowTitle = windowTitle+"o";
			formNameNew = formNameNew+"o";
		}
		// make a clone/copy from it
		//var clone = 
		createFormClone(formName,formNameNew);
	}
	var win = application.createWindow(windowTitle, JSWindow.WINDOW);
	var xBeg = xOrigin;
	var yBeg = yOrigin;
	var xEnd = xOrigin+xWidth;
	var yEnd = yOrigin+yHeight;
	win.setInitialBounds(xBeg, yBeg, xEnd, yEnd);
	win.title = windowTitle;
	win.show(formNameNew);
	addWindowList(windowTitle);	
}

// This code is from Servoy magazine for the cloning of forms.
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"0BD62770-5A9E-45E0-85B0-3DB856E01950"}
 */
function onActionTenants(event) {
	onActionClickMainButton(event,"Organizations",'tenants',50,50,730,450,false);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3CD18375-D0A0-466D-A181-6D585BEE8E70"}
 */
function onActionTenantGroups(event) {
	onActionClickMainButton(event,"Membership",'members',50,50,450,450,false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5E1968E2-1C90-4ED2-B0AC-C8860E10B2A4"}
 */
function onActionUserss(event) {
	onActionClickMainButton(event,"Users",'users',50,50,960,450,false);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"5426D223-B48C-4FF8-B12D-AAE9F4FDD1FA"}
 */
function onActionPermissions(event) {
	onActionClickMainButton(event,"Application Permissions",'app_permissions',50,50,960,450,false);
}

/**
 * @param {String} formName
 * @param {String} cloneName
 * @return {JSForm}
 * 
 *
 * @properties={typeid:24,uuid:"BA71A19F-6165-4C1E-A3A6-0184BEAB240F"}
 */
function createFormClone(formName, cloneName) {

	if (!forms[formName])
		throw new Error('Can\'t create a clone of form ' + formName + ' because that form does not exist.')
	
	if (forms[cloneName])
		throw new Error('Can\'t create a cloned form called ' + cloneName + ' because a form by that name already exists in the runtime model.')
	
	var clonedForm = solutionModel.cloneForm(cloneName, solutionModel.getForm(formName))
	clonedForm.namedFoundSet = JSForm.SEPARATE_FOUNDSET;
	globals.setWindowOpened(cloneName);

	// Now we will do a depth-first traversal through all the tabs in all the tabpanels of the original form (formName),
	// and for each tab we will make a clone of the form in that tab, and assign it
	// to the corresponding tab of the cloned form (cloneName).
	var aTabPanels = clonedForm.getTabPanels()
	for (var i in aTabPanels) {
		//var tabPanelName = aTabPanels[i].name
		var aTabs = aTabPanels[i].getTabs()
		for (var j in aTabs) {
			//var tabName = aTabs[j].name
			var tabForm = aTabs[j].containsForm
			var clonedTabForm = createFormClone(tabForm.name, tabForm.name + "_" + new Date().getTime());
			clonedTabForm.namedFoundSet = JSForm.SEPARATE_FOUNDSET;
  			aTabs[j].containsForm = clonedTabForm
		}
	}

	// Now the cloning process is complete and we return the cloned form
	
	return clonedForm
}

/**

 * @private
 * 
 * @param {String} tpName
 * @param {String} tabName
 * @return RuntimeForm
 *
 *
 * @properties={typeid:24,uuid:"E81664E2-9184-40DC-96E1-4293CFC5A91B"}
 */
function getTabForm(tpName, tabName) {
    /** @type {RuntimeTabPanel} */
    var tab = elements[tpName];
    if (!tab) {
       throw new Error('Tabpanel '+tpName+' is not an element of form '+controller.getName());
    } else {
        for(var i = 1; i <= tab.getMaxTabIndex(); i++) {  
             if (tab.getTabNameAt(i) == tabName) {
                 return forms[tab.getTabFormNameAt(i)];
             } 
        }
    }
    throw new Error('Tabpanel '+tpName+' of form '+controller.getName()+' has no tab named '+tabName);

}

/**
 * @return RuntimeForm
 *
 *
 * @properties={typeid:24,uuid:"DEDB2FF3-DB64-441B-A58C-1C3B4F84314F"}
 */
function getParentForm() {

	/** @type {JSDataSet} */
	var dataset = controller.getFormContext();
	if (dataset.getMaxRowIndex() > 1) {
		// form is in a tabpanel
		var parentFormName = dataset.getValue(dataset.getMaxRowIndex()-1, 2)
		return forms[parentFormName]
	}
	else {
		if (globals.debugtesting){
			throw new Error ('getParentForm() called from a form that is a top-level form and therefore has no parent.')
		}
	}
	return null;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param windowName
 *
 * @properties={typeid:24,uuid:"C6231BA9-FA7B-469D-91C5-C22E34A6B477"}
 */
function addWindowList(windowName){
	var length = globals.aTrackWindows.length;
	for (var i=0;i<length;i++){
		if (globals.aTrackWindows[i] == windowName) {return}
	}
	globals.aTrackWindows.push(windowName);
	application.setValueListItems('stsvl_nav_windows',globals.aTrackWindows);
}
/**
 * TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"29F2DCD5-FF81-47D9-B83B-8D0064EB5A43"}
 */
function focusWindow(){
	var windowName = elements.windows.getSelectedElements()[0];
	if (windowName == null){return}
	var windowx = application.getWindow(windowName);
	windowx.toFront();
}
/**
 * @properties={typeid:24,uuid:"F136BFBF-4BE1-48EC-87FE-5C11DFC2727D"}
 */
function removeWindowTrack(){
	var formName = controller.getName();
	var tempArray = new Array;
	//tempArray = globals.aTrackWindows;
	var tempLength = globals.aTrackWindows.length;
	var windowName = "";
	for (var index = 0; index < tempLength; index++){
		windowName = globals.aTrackWindows[index];
		if (windowName != formName){
			tempArray.push(windowName);
		}
	}
	globals.aTrackWindows = tempArray;
	application.setValueListItems('stsvl_nav_windows',tempArray);
}