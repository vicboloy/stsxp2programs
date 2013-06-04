/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4BF4DD33-7788-40BD-8169-A0BA4B372526"}
 */
var vProgramToolbarId = null;

/**
 *	Onrecordseletion set the forms and templates
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"93C855C3-2AB0-4C2D-A5B4-75BE2C47C4BA"}
 */
function onRecordSelection()
{
	refreshTree();
	
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
 * @properties={typeid:24,uuid:"5AB774EE-BA37-43FF-B394-E895AF5376B4"}
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
 * @properties={typeid:24,uuid:"9A84A339-0241-43B1-8C38-FFC439C1C14A"}
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
 * @properties={typeid:24,uuid:"4CFFA712-0ADE-4D76-B3D8-F9C67CE1E61E"}
 */
function resetForms()
{
	form_object = null
	template_object = null

}

/**
 *	Onhide check startupview
 * 
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 *
 * @properties={typeid:24,uuid:"5050B1E5-EE6E-4278-808A-00EEA30A37C7"}
 */
function onHide()
{

 if (startup_view == null) {
  globals.DIALOGS.showWarningDialog("i18n:svy.fr.lbl.warning", i18n.getI18NMessage("svy.fr.dlg.value_empty", [i18n.getI18NMessage("svy.fr.lbl.startupview")]), "i18n:svy.fr.lbl.ok")
  forms.svy_nav_c_program_dtl.tabSwitch(null, 2);
  return false;
 }
 return true
}

/**
 * @properties={typeid:24,uuid:"E03A900A-E873-401D-9CDD-398F022AE86E"}
 */
function gotoEdit() {
	_super.gotoEdit.apply(this, arguments)
	elements.btn_new.enabled = true
	setProgramToolbarButtons()
	
}

/**
 * @properties={typeid:24,uuid:"50FAF72E-A94C-4700-BCCF-5266E3AA961D"}
 */
function gotoBrowse() {
	_super.gotoBrowse.apply(this, arguments)
	elements.btn_new.enabled = true
	setProgramToolbarButtons()
}

/**
 * @properties={typeid:24,uuid:"2E694184-DF58-4F12-A7B6-4458E4EC31EB"}
 */
function refreshTree() {
	
	//remove global
	globals.nav_toolbar_item_id = null
	vProgramToolbarId = null
	setProgramToolbarButtons()
	elements.toolbartree.removeAllRoots();
	
	var _binding = elements.toolbartree.createBinding(globals.nav_db_framework, "nav_program_toolbar");
	_binding.setNRelationName("nav_program_toolbar_to_nav_toolbar_item$roots");
	_binding.setTextDataprovider("nav_program_toolbar_to_nav_toolbar.name");
	_binding.setCallBackInfo(setProgramToolbarId, "program_toolbar_id")
	_binding.setChildSortDataprovider("calc_tree_sort");	
	
	_binding = elements.toolbartree.createBinding(globals.nav_db_framework, "nav_toolbar_item");
	_binding.setNRelationName("nav_toolbar_item_to_nav_toolbar_item$children");
	_binding.setTextDataprovider("i18n_description");
	_binding.setImageMediaDataprovider('image_18_18')
	_binding.setCallBackInfo(setToolbarItem, "toolbar_item_id");
	_binding.setChildSortDataprovider("calc_tree_sort");
	
	elements.toolbartree.addRoots(nav_program_to_nav_program_toolbar);
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} _nav_program_toolbar_item_id
 *
 * @properties={typeid:24,uuid:"B0E671E3-803E-4F72-B5BB-B50DDD5F7E28"}
 */
function setToolbarItem(_nav_program_toolbar_item_id) {
	globals.nav_toolbar_item_id = _nav_program_toolbar_item_id;
	elements.security_key_id.visible = true;
	vProgramToolbarId = null;
	setProgramToolbarButtons()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} _programToolbarId
 *
 * @properties={typeid:24,uuid:"C34FEAEF-AF54-4D15-932E-A6FA9FF644BA"}
 */
function setProgramToolbarId(_programToolbarId) {
	vProgramToolbarId = _programToolbarId;
	globals.nav_toolbar_item_id = null;
	setProgramToolbarButtons()
	elements.security_key_id.visible = false;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79E491B6-0CC4-4652-A984-F11CF88BC182"}
 */
function newProgramToolbar(event) {
	
	if (!forms.svy_nav_c_program_dtl.program_id) {
		globals.DIALOGS.showWarningDialog("i18n:svy.fr.lbl.create_tab", "i18n:svy.fr.dlg.warning_programtab", "i18n:svy.fr.lbl.ok")
	} else {
		forms.svy_nav_c_program_toolbar_dtl.dc_new(event)
		forms.svy_nav_c_program_toolbar_dtl.program_id = forms.svy_nav_c_program_dtl.program_id
		forms.svy_nav_c_program_toolbar_dtl.mode = 'EDIT'
		forms.svy_nav_c_program_toolbar_dtl.gotoEdit()
		globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_program_toolbar_dtl,null,null,null,null,null,true,false,'program_toolbar_detail')
		refreshTree()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5628379-670B-46F5-BAFA-2138DC63F4A0"}
 */
function deleteProgramToolbar(event) {
	if(vProgramToolbarId)
	{
		var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
		var _no = i18n.getI18NMessage('svy.fr.lbl.no')
		var _answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no);
		if(_answer == _ok)
		{
			var _fs = databaseManager.getFoundSet(globals.nav_db_framework,'nav_program_toolbar')
			_fs.loadRecords(application.getUUID(vProgramToolbarId))
				//foundset.loadRecords(application.getUUID('6b5e2f5d-047e-45b3-80ee-3a32267b1f20'));
			_fs.deleteRecord(1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"2BE8FF52-CF72-40D1-9B5B-CEA1E658E836"}
 */
function setProgramToolbarButtons() {
	elements.btn_delete.enabled = (vProgramToolbarId != null)
	elements.btn_down.enabled = (vProgramToolbarId != null)
	elements.btn_up.enabled = (vProgramToolbarId != null)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} _direction
 *
 * @properties={typeid:24,uuid:"424A9689-617B-444E-B5BA-3A1309241660"}
 */
function changeSequence(event, _direction) {
	var _rec1, _rec2;
	var _sequence 
	for (var i = 1; i <= nav_program_to_nav_program_toolbar.getSize(); i++) {
		_rec1 = nav_program_to_nav_program_toolbar.getRecord(i);
		if (_rec1.program_toolbar_id == vProgramToolbarId) {
			if(nav_program_to_nav_program_toolbar.getRecord(i+_direction))
			{
				_rec2 = nav_program_to_nav_program_toolbar.getRecord(i+_direction);
				
				//swicht the sequence of the records
				_sequence = _rec1.sequence
				_rec1.sequence = _rec2.sequence
				_rec2.sequence = _sequence
				databaseManager.saveData(_rec1)
				databaseManager.saveData(_rec2)
				nav_program_to_nav_program_toolbar.sort('sequence asc')
				refreshTree();
				return true
			}
			else
			{
				return false
			}
		}
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"15289271-13DF-485C-9A28-57F4433BFD21"}
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
	}
}
