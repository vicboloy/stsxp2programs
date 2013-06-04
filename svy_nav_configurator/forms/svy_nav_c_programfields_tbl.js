/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D909BC56-8F8F-4F3E-99DB-C455CA1A6C25"}
 */
function readFieldAutomatically(event) {

	if(forms.svy_nav_c_program_dtl.server_name && forms.svy_nav_c_program_dtl.table_name)
	{
		var _jsTable = databaseManager.getTable(forms.svy_nav_c_program_dtl.server_name, forms.svy_nav_c_program_dtl.table_name)
		var _columns = _jsTable.getColumnNames()
		for (var i = 0; i < _columns.length; i++) 
		{
			//first check if the field already exists
			var _fs = databaseManager.getFoundSet(foundset.getDataSource());
			_fs.addFoundSetFilterParam('dataprovider', '=', _columns[i])
			_fs.addFoundSetFilterParam('program_id', '=', forms.svy_nav_c_program_dtl.program_id)
			_fs.loadAllRecords()
			
			if(_fs.getSize() < 1)//only create a record if it does not exist already
			{
				foundset.newRecord()
				foundset.dataprovider = _columns[i]
				foundset.label = _columns[i]
				foundset.elementname = 'fld_'+_columns[i]
				foundset.flag_editable = 1
				foundset.flag_default = 1
				foundset.display_type = 'TEXT_FIELD'
			}
		}
	}
	else
	{
		
		plugins.dialogs.showInfoDialog('Read all fields','Servername and tablename have to be entered','OK')
	}
	databaseManager.saveData()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C42F7980-5CF2-45AC-87FA-9D79C7FA24E1"}
 */
function editField(event) {
	forms.svy_nav_c_programfields_dtl.controller.loadRecords(foundset)
	forms.svy_nav_c_programfields_dtl.mode = 'EDIT'
	forms.svy_nav_c_programfields_dtl.gotoEdit()
	forms.svy_nav_c_programfield_validation_tbl.mode = 'EDIT'
	forms.svy_nav_c_programfield_validation_tbl.gotoEdit()
	globals.DIALOGS.showFormInModalDialog(forms.svy_nav_c_programfields_dtl,null,null,null,null,null,true,false,'program_field_detail')
}

/** *
 * @param _event
 *
 * @properties={typeid:24,uuid:"F3D4A786-587E-4030-9EB6-F3AC079B1119"}
 */
function dc_new(_event) {
	_super.dc_new(_event)
	editField(_event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D003304-139B-4F2B-8FAA-209B82C4A8C7"}
 */
function deleteAll(event) {
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.deletes'), _ok, _no);
	if(_answer == _ok)
	{
		controller.deleteAllRecords()
	}
}
