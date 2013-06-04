/**
 * @param {Object} oldValue
 * @param {Object} newValue
 * @return {Object} addedItem
 * @properties={typeid:24,uuid:"54636DFE-0DEE-42B9-BF37-47F3C2649876"}
 */
function getCheckBoxValueListItemAdded(oldValue,newValue){
	var oldItems = (oldValue) ? oldValue.toString().split('\n') : [];
	var newItems = (newValue) ? newValue.toString().split('\n') : [];
	if (newItems.length <= oldItems.length) return null;
	newItems.sort();
	oldItems.sort();
	for (var i in oldItems) {
		if (oldItems[i] != newItems[i])
			return newItems[i];
	}
	return newItems[newItems.length - 1];
}

/**
 * @param {Object} oldValue
 * @param {Object} newValue
 * @return {Object} addedItem
 * @properties={typeid:24,uuid:"51C03A03-A22A-489A-B5E0-024D88BD52BE"}
 */
function getCheckBoxValueListItemRemoved(oldValue,newValue){
	var oldItems = (oldValue) ? oldValue.toString().split('\n') : [];
	var newItems = (newValue) ? newValue.toString().split('\n') : [];
	if (newItems.length >= oldItems.length) return null;
	newItems.sort();
	oldItems.sort();
	for (var i in newItems) {
		if (newItems[i] != oldItems[i])
			return oldItems[i];
	}
	return oldItems[oldItems.length - 1];
}

/**
 * Returns the JSForm hierarchy for the given form, from it's utmost base form up to and including the specified form itself
 * @param {JSForm|String} form
 * @return {Array<JSForm>} super forms first, given form included as last entry in the returned Array)
 *
 * @properties={typeid:24,uuid:"4E77988E-55A6-45FD-8D96-1DD5BAACFEEE"}
 */
function getJSFormHierarchy(form) {
	/** @type {Array<JSForm>} */
	var retval = [form instanceof JSForm ? form : solutionModel.getForm(form)] //Doesn't currently support RuntimeForm instances created with application.createNewFromInstance(...)
	var curForm = retval[0]
	while ((curForm = curForm.extendsForm)) {
		retval.push(curForm)
	}
	return retval.reverse()
}

/**
 * Returns true if the form is extending the parent form 
 * 
 * @param {JSForm|String} form
 * @param {JSForm|String} parentForm
 * 
 * @throws {scopes.modUtils$exceptions.IllegalArgumentException}
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"ABCE89C0-9151-4CD7-AF58-38D0913BD738"}
 */
function isJSFormInstanceOf(form, parentForm) {
	if (form instanceof String) {
		form = solutionModel.getForm(form);
	}
	if (parentForm instanceof String) {
		parentForm = solutionModel.getForm(parentForm);
	}
	if (!form) {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("Provide valid form");
	}
	if (!parentForm) {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("Provide valid parentForm");
	}
	
	//Go up the hierarchy until the parentForm is found or until there is no more parent.
	while (form && form != parentForm) {
		form = form.extendsForm;
	}
	
	if (form == parentForm) {
		return true;
	}
	
	return false;
}

/**
 * Returns all JSForms that are instances of a certain JSForm
 *
 * @param {JSForm} superForm
 *
 * @return {Array<JSForm>}
 *
 * @properties={typeid:24,uuid:"38527628-D0D4-4EEE-9EF0-87D65AAEF013"}
 */
function getJSFormInstances(superForm) {
	/**@type {Array<JSForm>}*/
	var retval = []
	var smForms = solutionModel.getForms() //Getting this once and holding a reference to it is faster
	var smForm, instances
	for (var i = 0; i < smForms.length; i++) {
		smForm = smForms[i]
		instances = []
		if (retval.indexOf(smForm) != -1) continue
		while (smForm.extendsForm != null) {
			instances.push(smForm)
			if (smForm.extendsForm == superForm || retval.indexOf(smForm.extendsForm) != -1) {
				retval = retval.concat(instances)
				break;
			}
			smForm = smForm.extendsForm
		}
	}
	return retval
}

/**
 * @param {JSForm|String} form
 * @properties={typeid:24,uuid:"4EC9D579-FAD3-4C56-8F34-2891379AF31E"}
 */
function getJSFormHeight(form) {
	/** @type {JSForm} */
	var smform = typeof form == 'string' ? solutionModel.getForm(form) : form
	var parts = smform.getParts(true)
	return parts.length ? parts.pop().height : 0;
}

/**
 * Sets the visibility of all toolbars at once
 * @param {Boolean} state
 * 
 * @see Also see {@link #plugins#window#setToolBarAreaVisible()}: hides/shows the entire toolbar area
 *
 * @properties={typeid:24,uuid:"BF888281-F9E0-4907-89FD-ECAAA037C4CB"}
 */
function setAllToolbarsVisibility(state) {
	plugins.window.getToolbarNames().forEach(function(value){
		application.setToolbarVisible(value, state);
	})
}

/**
 * @param {RuntimeForm} form
 * 
 * @return {String} Returns the current parent form of a form or null when the form is not showing
 *
 * @properties={typeid:24,uuid:"13529874-DBDA-4655-B6CB-8DAF94DC6CDE"}
 */
function getParentFormName(form) {
	var ctx = form.controller.getFormContext()
	return ctx.getMaxRowIndex() > 0 ? ctx.getValue(ctx.getMaxRowIndex() - 1, 2) : null
}

/**
 * Clones a JSForm, but also makes clones for all forms contained in (nested) tabpanels
 * 
 * @see Also see {@link #deepCopyRuntimeForm}: more lightweight, but less ideal when using the SolutionModel on the copied
 * 
 * @param {String} newFormName the name to use for the clone
 * @param {JSForm} original the JSForm to clone
 * @param {String} [prefix] Optional prefix to use for the forms
 * 
 * @return {JSForm} The clone
 * 
 * @throws {scopes.modUtils$exceptions.UnsupportedOperationException}
 * 
 * @properties={typeid:24,uuid:"0B4DE5CF-0B58-44F2-B344-3E3B656E549D"}
 */
function deepCopyJSForm(newFormName, original, prefix) {
	if (solutionModel.getForm(newFormName)) {
		throw new scopes.modUtils$exceptions.UnsupportedOperationException("Cloning existing form is not supported");
	}
	
	var clone = solutionModel.cloneForm(newFormName, original)

	var tabPanels = clone.getTabPanels()
	var formName;
	for (var i = 0; i < tabPanels.length; i++) {
		var tabs = tabPanels[i].getTabs()
		for (var j = 0; j < tabs.length; j++) {
			formName = prefix ? prefix + tabs[j].containsForm.name.replace(original.name, "") : tabs[j].containsForm.name + application.getUUID();
			tabs[j].containsForm = deepCopyJSForm(formName, tabs[j].containsForm, prefix);
		}
	}
	return clone;
}

/**
 * Convenient method to set multiple properties of a SplitPane in one go
 * 
 * @param {String} formName
 * @param {String} elementName
 * @param {Number} resizeWeight
 * @param {Number} dividerLocation
 * @param {Number} dividerSize
 * @param {Boolean} continuousLayout
 * @param {String} [bgColor] If omitted, the SplitPane will be made transparent
 *
 * @properties={typeid:24,uuid:"B94825F2-EB16-49FD-BEBB-AA9A10EF65C1"}
 */
function initSplitPane(formName, elementName, resizeWeight, dividerLocation, dividerSize, continuousLayout, bgColor) {
	/** @type {RuntimeSplitPane} */
	var splitPane = forms[formName].elements[elementName]

	if (!(splitPane instanceof RuntimeSplitPane)) return;
	
	if (resizeWeight) 		splitPane.resizeWeight = resizeWeight
	if (dividerLocation) 	restoreSplitPaneDividerPosition(formName, elementName, dividerLocation)
	if (dividerSize)		splitPane.dividerSize = dividerSize
	if (continuousLayout)	splitPane.continuousLayout = continuousLayout
	if (bgColor && bgColor != 'transparent') {
		splitPane.transparent = false
		splitPane.bgcolor = bgColor
	} else {
		splitPane.transparent = true
	}
}

/**
 * Persists the position of the splitpane divider to be used by {@link #restoreSplitPaneDividerPosition()} in a next user session
 * @param {String} formName
 * @param {String} elementName
 *
 * @properties={typeid:24,uuid:"F335B47A-2FFC-4A39-BE4F-19B31C5108B6"}
 */
function persistSplitPaneDividerPosition(formName, elementName) {
	if (!formName || !elementName) {
		application.output('svy_utl_saveSplitTabDividerPosition called without mandatory params', LOGGINGLEVEL.ERROR);
		return;
	}
	var pos = forms[formName].elements[elementName].dividerLocation;
	scopes.modUtils$system.setUserProperty(application.getSolutionName() + '.' + formName + '.' + elementName + '.divLoc', pos)
}

/**
 * Restores the position of the splitpane divider persisted by {@link #persistSplitPaneDividerPosition()} between user sessions
 * @param {String} formName
 * @param {String} elementName
 * @param {Number} position
 *
 * @properties={typeid:24,uuid:"04FC34AA-629F-43BC-9C1E-6A7ED9735DA8"}
 */
function restoreSplitPaneDividerPosition(formName, elementName, position) {
	if (!formName || !elementName) {
		application.output('svy_utl_setSplitTabDividerPosition called without mandatory params', LOGGINGLEVEL.ERROR);
		return;
	}
	/** @type {String} */
	var pos = scopes.modUtils$system.getUserProperty(application.getSolutionName() + '.' + formName + '.' + elementName + '.divLoc');
	pos = utils.stringToNumber(pos);
	forms[formName].elements[elementName]['dividerLocation'] = pos ? pos : position;
}