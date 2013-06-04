/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3F9FC2BE-BF0F-451D-8BA2-5963D55F672D"}
 */
var vProgramToolbarId = null;

/**
 *	Onrecordseletion set the forms and templates
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"BE748972-50BE-4EA3-B28D-4770A33CA942"}
 */
function onRecordSelection()
{
	setForms()
	
	if(!controller.readOnly)
	{
		forms.svy_nav_c_forms.mode = 'edit'
		forms.svy_nav_c_forms.gotoEdit()
		forms.svy_nav_c_programTemplates.mode = 'edit'
		forms.svy_nav_c_programTemplates.gotoEdit()
	}
	
}

/**
 *	Reset all the form info
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"6310A734-8728-4284-BD9B-26FFBF7BCCED"}
 */
function resetAllFormInfo()
{
	var _size = foundset.getSize()
	for (var i = 1; i <=_size; i++) 
	{
		foundset.setSelectedIndex(i)
		form_object = null
	}
}

/**
 *	Reset all the template info
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"660EB3B9-5953-4F4B-A71D-C3600D055B83"}
 */
function resetAllTemplateInfo()
{
	var _size = foundset.getSize()
	for (var i = 1; i <=_size; i++) 
	{
		foundset.setSelectedIndex(i)
		template_object = null
	}
}

/**
 *	Reset all the template and form info
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"BAFB4663-F281-4260-9F81-73237B559764"}
 */
function resetForms()
{
	form_object = null
	template_object = null

}

/**
 *	Translate the information of the form object to a form with fields so the user can change the information
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"EE9E66FA-1DE2-47A8-96EA-A5AD02B21ADC"}
 */
function setForms()
{
	elements.form_tab.removeAllTabs()
	history.removeForm('svy_nav_c_forms')
	var jsForm = solutionModel.revertForm('svy_nav_c_forms')
	var i
	var _form_object
	var _formName;
	if(base_form_name)
	{
		if(!form_object)
		{
			
			_form_object = new Array()
			var _types = scopes.svyProperties.getPropertyValue("form_types");
			/** @type {Array<String>} */
			var _conventions = scopes.svyProperties.getPropertyValues("form_conventions");			
			if (_types) {
				var _formTypes = _types.toString().split(", ");
				for (i = 0; i < _formTypes.length; i++) {
					_form_object[i] = new Array()
					_form_object[i][0] = i + 1
					_form_object[i][1] = _formTypes[i];
					_formName = eval(_conventions[i])||'';
					_form_object[i][2] = /-no form-/.test(_formName) ? null : _formName;
					_form_object[i][3] = 1				
				}
			}	
			
			//if there is no form, only table view should be available
			if(forms.svy_nav_c_program_dtl.base_form_name == '-no form-' )
			{
				_form_object[0][3] = 0
			}	
			form_object = _form_object
		}
		else
		{
			_form_object = form_object
		}
	

		var _dataset =  databaseManager.createEmptyDataSet(0,0)
		_dataset.addColumn('sort_field')
		_dataset.addColumn('form_type')
		_dataset.addColumn('form_name')
		_dataset.addColumn('flag_available')
		for (i = 0; i < _form_object.length; i++) {
			_dataset.addRow([_form_object[i][0],_form_object[i][1],_form_object[i][2],_form_object[i][3]])
		}
		
		var _datasource = _dataset.createDataSource('fo_table', [ JSColumn.INTEGER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.INTEGER]);
		jsForm.dataSource = _datasource
		var jsField = jsForm.getField('sort_field')
		jsField.dataProviderID = 'sort_field'
		jsField = jsForm.getField('form_type')
		jsField.dataProviderID = 'form_type'
		jsField = jsForm.getField('form_name')
		jsField.dataProviderID = 'form_name'
		jsField = jsForm.getField('flag_available')
		jsField.dataProviderID = 'flag_available'
			
		forms.svy_nav_c_forms.controller.recreateUI()
		elements.form_tab.addTab(forms.svy_nav_c_forms)
	}
}

/**
 * @properties={typeid:24,uuid:"8BDED008-9140-4971-ACFE-C7D1829982C7"}
 */
function gotoEdit() {
	_super.gotoEdit.apply(this, arguments)
	forms.svy_nav_c_forms.mode = 'edit'
	forms.svy_nav_c_forms.gotoEdit()
	forms.svy_nav_c_programTemplates.mode = 'edit'
	forms.svy_nav_c_programTemplates.gotoEdit()
}

/**
 * @properties={typeid:24,uuid:"DBE5A5C2-A39B-4FC0-A63D-207C0649B1CA"}
 */
function gotoBrowse() {
	_super.gotoBrowse.apply(this, arguments)
	forms.svy_nav_c_programTemplates.mode = 'browse'
	forms.svy_nav_c_programTemplates.gotoBrowse()
	forms.svy_nav_c_forms.mode = 'browse'
	forms.svy_nav_c_forms.gotoBrowse()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D02AC6D3-0085-48EF-AC52-E99C096DB442"}
 */
function refreshTableAndServer(event) {
	if (base_form_name && base_form_name != '-no form-') {
		for (var i = 0; i < form_object.length; i++) {
			if (form_object[i][3] && forms[form_object[i][2]]) { // 3-available 2-formname
				form_name = form_object[i][2]
				table_name = databaseManager.getDataSourceTableName(forms[form_object[i][2]].controller.getDataSource())
				server_name = databaseManager.getDataSourceServerName(forms[form_object[i][2]].controller.getDataSource())
				databaseManager.saveData()
			}
		}
	} else {
		forms.svy_nav_c_program_dtl.onDataChangeBaseFormName();
	}
}
