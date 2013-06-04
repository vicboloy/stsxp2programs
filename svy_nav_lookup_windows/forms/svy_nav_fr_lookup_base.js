/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"44093C9E-8408-43AC-A6CD-EEC4BD84B3C6"}
 */
var vBeforeInsertMethodName = null;

/**
 * @properties={typeid:35,uuid:"B214A5D2-6194-4429-B5AC-D8CF0D317AC5",variableType:-4}
 */
var vRecursivecall = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A048E0C-F639-49FB-A866-3F96519189E5"}
 */
var vFieldKey = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"14C6E4DF-4E96-4454-A0C7-C2500FA3098E"}
 */
var vSelectedElement = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3FAF09D2-7B02-4E59-AFE4-BFFA84B3DC1F"}
 */
var vAfterInsertMethodName = null;

/**
 * @properties={typeid:35,uuid:"4FDE360C-093F-4CC9-9138-1A720AB1C4C6",variableType:-4}
 */
var vElements = null;

/**
 * @type {Array}
 * 
 * @properties={typeid:35,uuid:"F4AC5F00-A64F-44E5-9D86-6CE4DAE577AA",variableType:-4}
 */
var vFields = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35C2553C-A8BA-4B01-BCE7-55163378C7AF"}
 */
var vReturnForm = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DD53AF64-0630-40D3-B092-C6FCF53A4A8A"}
 */
var vProgram = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E9CDE691-1BB9-4BB1-964F-322CC36F6E4F"}
 */
var vReturnField = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} _form
 *
 * @properties={typeid:24,uuid:"4A473FCF-2DFC-48B8-B026-ED782340BE46"}
 */
function selectRecord(event, _form) {

	var _method = true
	var form = forms[_form]
	
	//call the callback method
	if (vBeforeInsertMethodName) {

		if (vReturnForm && forms[vReturnForm][vBeforeInsertMethodName]) {
			_method = forms[vReturnForm][vBeforeInsertMethodName](form.foundset.getSelectedRecord());
		} else
			_method = globals[vBeforeInsertMethodName](form.foundset.getSelectedRecord());

	}

	if (_method) {
		if (vReturnForm && vReturnField) {
			if (vFieldKey)
				forms[vReturnForm][vReturnField] = form[vFieldKey];
			else
				forms[vReturnForm][vReturnField] = form.foundset.getSelectedRecord().getPKs()[0]
		}

		//call the callback method
		if (vAfterInsertMethodName) {
			if (vReturnForm && forms[vReturnForm][vAfterInsertMethodName]) {
				forms[vReturnForm][vAfterInsertMethodName](form.foundset.getSelectedRecord());
			} else
				globals[vAfterInsertMethodName](form.foundset.getSelectedRecord());
		}
	}
	if (vSelectedElement) //if there is a selected element, request the focus
	{
		if (forms[vReturnForm].elements[vSelectedElement] && forms[vReturnForm].elements[vSelectedElement].getElementType() == 'LABEL' && forms[vReturnForm].elements[vSelectedElement].getLabelForElementName) {
			var _fieldElement = forms[vReturnForm].elements[vSelectedElement].getLabelForElementName()
			if (_fieldElement) {
				forms[vReturnForm].elements[_fieldElement].requestFocus()
			}
		} else if (forms[vReturnForm].elements[vSelectedElement] && forms[vReturnForm].elements[vSelectedElement].getElementType() == 'BUTTON') {
			forms[vReturnForm].elements[vSelectedElement].requestFocus()
		}
	}

	globals.svy_nav_closeForm(event)

	if (vRecursivecall) {
		scopes.svyLookupWindows.showLookupWindow(new JSEvent, vRecursivecall[0], vRecursivecall[1], vRecursivecall[2], vRecursivecall[3])
	}
}

/**
 * Is called whenever a field in the lookuplist is clicked. Can be used to update things based on the clicked record/column
 * @protected
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"08CC0BAF-CD7B-46EF-8837-A11A639A42CE"}
 */
function onClick(event) {
	
}
