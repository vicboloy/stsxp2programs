// This code is from Servoy magazine for the cloning of forms.

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
 * @return {RuntimeForm}
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
 * @return {RuntimeForm}
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
}
