/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1F483A8-BC70-472E-BF80-640A4762CE9A"}
 */
var elementId = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"40CD76A4-FC5D-4C26-A28F-AC39EA9C2A2F"}
 */
var formId = null;

/**
 *	closes the form in dialog
 *
 * @author Sanneke Aleman
 * @since 2000-05-04
 * @param {JSEvent} _event
 * 
 * @properties={typeid:24,uuid:"68c64a3e-382b-476e-9157-18f85d1df4d1"}
 */
function closeForm(_event)
{
	globals.svy_nav_closeForm(_event)
}

/**
 *	Creates a new element records, with a servoy element UUID and a formname
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * @param {JSEvent} _event
 * 
 * @properties={typeid:24,uuid:"6f86274f-53d6-4428-807c-9a847ea442e3"}
 */
function createElementItem(_event)
{
	if (formId != null) 
	{
		forms[globals.svy_utl_getFrameworkFormName("sec_main_key_element_tbl")].controller.newRecord() 
		
		/** @type {JSRecord<db:/svy_framework/sec_element>} */
		var _rec = forms[globals.svy_utl_getFrameworkFormName("sec_main_key_element_tbl")].foundset.getSelectedRecord()
		_rec.servoy_element_id = elementId;
		_rec.servoy_form_id = formId
		_rec.element_name = application.getValueListDisplayValue('svy_sec_elements', elementId)
		_rec.form_name = application.getValueListDisplayValue('svy_sec_forms', formId)
	
	} 
	else 
	{
		plugins.dialogs.showErrorDialog("i18n:svy.fr.dlg.no_form_selected",  "i18n:svy.fr.dlg.no_form_selected", 'i18n:svy.fr.lbl.ok')
	}
	databaseManager.saveData()
	
	globals.svy_nav_closeForm(_event)
}

/**
 *	Initalizes the element valuelist, needs the form (globals.svy_sec_form_id) to be filled in.
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * 
 * @properties={typeid:24,uuid:"d7e54265-c1e7-4761-945f-82619d3b8a7c"}
 */
function initElementVL()
{
	var _elements = security.getElementUUIDs(formId);
	 _elements.sort(1,true);
	 application.setValueListItems('svy_sec_elements',_elements.getColumnAsArray(1),_elements.getColumnAsArray(2));
	 elementId = null;
}

/**
 *	Initalizes the form valuelist and sorts it.
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * 
 * @properties={typeid:24,uuid:"a7398cb6-14a3-434a-87b8-03f693829ab1"}
 */
function initFormVL()
{
	
	var _form = solutionModel.getForms().map(function (jsForm) { return jsForm.name }).sort()
	
	application.setValueListItems('svy_sec_forms',  _form,  _form);
	formId = null;
	elementId = null;


}
