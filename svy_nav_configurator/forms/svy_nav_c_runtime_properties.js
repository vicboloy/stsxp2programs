/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"221D66E1-49D1-4C3B-A7C8-4CB1946D3FB1"}
 */
function onLoad(event) {
	var editor = new scopes.svyPropertyEditor.PropertyEditor(scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER,null,false,"configuratorProperties");
	var mainForm = solutionModel.getForm("svy_nav_c_main");
	editor.styleName = mainForm.styleName;
	editor.mainForm.styleClass = "";
	editor.propertySetsForm.styleClass = "";
	editor.propertyValuesForm.styleClass = "";
	editor.propertyValuesForm.descriptionStyleClass = "transparent";
	editor.propertyValuesForm.labelStyleClass = "black";
	editor.propertyValuesForm.headerStyleClass = "field_group";
	editor.propertyValuesForm.headerBottomOffset = 25;
	editor.propertyValuesForm.setDescriptionStyleClass = "field_group";	
	editor.propertyValuesForm.checkboxStyleClass = "noborder";
	
	editor.propertySetsForm.textStyleClass = "black";
	editor.propertySetsForm.iconStyleClass = "black";
	editor.propertySetsForm.selectionBgStyleClass = "selectionBgStyleClass";
	
	var form = editor.createForm();
	elements.tabs.addTab(form);
}
