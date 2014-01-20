/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"844EB2E7-4A92-488B-A0CD-56AED53A6E29"}
 */
var ARGUMENT_DELIMITER = '$';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1B872133-C239-4E44-9847-BE587AD5B64C"}
 */
var tabNavBGColor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECB7533D-16B3-423E-9F7F-4CAF87BAB7AE"}
 */
var tabNavBGColorSelected = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB9313C1-7014-469C-8824-A1A8CE3E945E"}
 */
var tabNavBorder = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D1BE20D2-04E8-4363-A69B-CDAF048B596C"}
 */
var tabNavBorderSelected = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC11DED1-CE2F-4AE3-B525-21BFD17B8B34"}
 */
var tabNavFGColor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE92B763-C6A4-43FA-8E3C-A632A06BE8F2"}
 */
var tabNavFGColorSelected = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A07C663A-1F8D-4E02-94EA-3FA02648B345"}
 */
var tabNavFont = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D8E10102-09D8-4B01-8708-345B7C61979B"}
 */
var tabNavFontSelected = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA21585C-560C-4565-A4A8-AC24496BD713"}
 */
var tabNavImageMedia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3413C72A-230C-49AB-ABBE-6AE62F23CCC3"}
 */
var tabNavImageMediaSelected = null;

/**
 * Sets the tabIndex property of a tab panel.
 * The trigger element should follow the naming convention: prefix$tabPanelName$tabIndex
 * The trigger element's name is used to determine which tab to show
 * If the tab is already on the specified index, then the contained form's onShow handler is invoked
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DF7C6248-A397-4CAB-9A68-CA1ACBE441BE"}
 */
function setTabIndex(event) {
																					//	Variable declarations:
	var elementName;																//	The name of the trigger element
	var args;																		//	Args that will be parsed from the element name	
	var tabPanelName;																//	The name of the tabpanel component
	var tabPanel;																	//	The tabpanel component
	var tabIndex;																	//	The index to switch to
	var jsForm;																		//	The design-time form object (used to determine onShow action)
	
	elementName = event.getElementName();											//	Get the trigger element
	if(!elementName)																//	cannot be null
		return;
	
	args = elementName.split(ARGUMENT_DELIMITER);									//	Parse arguments from trigger element
	tabPanelName = args[1];															//	[1] The name of the tabpanel	
	tabIndex = args[2];																//	[2] The index to show
	if(!(tabPanelName && tabIndex)){												//	validate arguments
		return;
	}
	tabPanel = elements[tabPanelName];												//	get the target tab panel element
	if(!tabPanel)																	//	cannot be null
		return;
	
	if(tabPanel.tabIndex != tabIndex){												//	Check if not already on the specified index
		tabPanel.tabIndex = tabIndex;												//	switch tabs
		
	}else{																			//	already on the specified index
		jsForm = solutionModel.getForm(tabPanel.getTabFormNameAt(tabIndex));		//	get the JSForm from the solution model
		if(jsForm && jsForm.onShow){												//	get the form's onShow event handler	
			forms[jsForm.name][jsForm.onShow.getName()].apply(this, [false, event]);//	call the onShow handler
		}
	}
}

/**
 * Callback method when the user changes tab in a tab panel.
 * Updates the UI for the controllers for the tabpanel
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 * @see updateElementsForTabPanel
 * @properties={typeid:24,uuid:"C35F1ED4-9D0B-4D39-938E-1380E6632611"}
 */
function onTabChange(previousIndex, event) {
	updateElementsForTabPanel(event.getElementName());								//	Update the UIs for controllers of tabpanel
}

/**
 * Updates the UI for all controllers of a named tabpanel component
 * The tab controller naming convention is reverse engineered
 * @param {String} tabName the name of the tabpanel
 * @properties={typeid:24,uuid:"3C298357-1407-4646-BD47-33D621C83304"}
 */
function updateElementsForTabPanel(tabName){
																					//	Variable declarations:
	var elementName;																//	The name of the trigger element
	var args;																		//	Args that will be parsed from the element name	
	var tabPanelName;																//	The name of the tabpanel component
	//var tabPanel;																	//	The tabpanel component
	var tabIndex;																	//	The current index of the tabpanel
	
	for(var i in elements.allnames){													//	search elements in form...
		elementName = elements.allnames[i];											//	the element name	
		args = elementName.split(ARGUMENT_DELIMITER);								//	parse tab arguments (if any)
		tabPanelName = args[1];														//	the name of the tab panel
		if(tabPanelName == tabName){												//	element is found to conrol the named tabpanel

			tabIndex = args[2];														//	the tabIndex the element controls
			if(elements[tabName].tabIndex == tabIndex){								//	element is the selected controller, 'highlight' the UI
				
				if(tabNavBGColorSelected){	
					elements[elementName].bgcolor = tabNavBGColorSelected;			//	set the BG color
				}
				if(tabNavBorderSelected){
					elements[elementName].setBorder(tabNavBorderSelected);			//	set the border
				}
				if(tabNavFGColorSelected){
					elements[elementName].fgcolor = tabNavFGColorSelected;			//	set the FG color
				}
				if(tabNavFontSelected){
					elements[elementName].setFont(tabNavFontSelected);				//	set the font
				}
//				if(tabNavImageMediaSelected){
					elements[elementName].setImageURL(tabNavImageMediaSelected);	//	set the image media
//				}

			} else{																	//	element is not the selected controller, 'dim' the UI
				if(tabNavBGColor){	
					elements[elementName].bgcolor = tabNavBGColor;					//	set the BG color
				}
				if(tabNavBorder){
					elements[elementName].setBorder(tabNavBorder);					//	set the border
				}
				if(tabNavFGColor){
					elements[elementName].fgcolor = tabNavFGColor;					//	set the FG color
				}
				if(tabNavFont){
					elements[elementName].setFont(tabNavFont);						//	set the font
				}
//				if(tabNavImageMedia){
					elements[elementName].setImageURL(tabNavImageMedia);			//	set the image media
//				}
			}
		}
	}
}

/**
 * Overrides the default updateUI implementation
 * Updates all tab controllers on the form
 * 
 * @param {JSEvent} [event] The event that triggered the action
 * @see updateElementsForTabPanel
 * @properties={typeid:24,uuid:"EA37B51A-8DD6-40FC-878A-75704C759280"}
 */
function updateUI(event) {
	var i;
	for(i in elements){																//	check each form element
		if(elements[i].getElementType() == ELEMENT_TYPES.TABPANEL){					//	element is a tabpanel component...
			updateElementsForTabPanel(elements[i].getName());						//	update controlles for the component
		}
	}
	return _super.updateUI(event);													//	default implementation
}
