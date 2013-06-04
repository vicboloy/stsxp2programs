/**
 *	 Closes the form in dialog
 * 
 * @author Sanneke Aleman
 * @since 2008-11-24
 * @param {JSEvent} _event
 * @return  none
 *
 * @properties={typeid:24,uuid:"939306E8-73DD-4174-AE8F-2104F8571081"}
 */
function closeWindow(_event)
{
	globals.svy_nav_closeForm(_event)
}

/**
 *
 * @properties={typeid:24,uuid:"9D5C7E3A-BEB4-4177-8ACC-9F2625A9E41D"}
 */
function setI18n() {

	if(flag_i18n)
	{
		elements.Description.visible = false
		elements.Description_i18n.visible = true
		elements.btn_i18n.visible = true
	}
	else
	{
		elements.Description.visible = true
		elements.Description_i18n.visible = false
		elements.btn_i18n.visible = false
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16EFE4CA-B788-4361-AC5E-D94E54D7D27B"}
 */
function getI18n(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.I18n_key_selector',i18n.getI18NMessage('svy.fr.dlg.I18n_key_selector'),'i18n:svy.fr.lbl.ok')
		return
	}
	description = application.showI18NDialog(description)
}

/**
 *
 * @param {JSEvent} _event
 * @param {Boolean} _all
 *
 * @properties={typeid:24,uuid:"532C9626-841D-4E03-98C8-B6358D94B075"}
 */
function dc_save(_event, _all) {
	_super.dc_save(_event, false)
	globals.svy_nav_closeForm(_event)
	
}

/**
 * @properties={typeid:24,uuid:"D630B6A4-1874-42FC-B8F7-B035835BE611"}
 */
function setPanelValuelist() {
	
	if(forms.svy_nav_c_layout_dtl.template_name)
	{
		/**@type {String}*/
		var _panel_nr = forms.svy_nav_c_layout_dtl.template_name.match(/\d+$/)[0]
		if(_panel_nr.length == 1) _panel_nr = '0' + _panel_nr
		var _panelCount = forms['svy_nav_fr_template_'+_panel_nr].getPanelCount();
		var _values = [1,2,3,4,5,6,7]
		_values = _values.slice(0, _panelCount)
		application.setValueListItems('nav_panels',_values)
	}
}

/**
 * @param {JSEvent} _event
 * @param {Boolean} _all
 * 
 * @properties={typeid:24,uuid:"A222F63B-556B-4AB9-8D01-34A6826D2B9A"}
 */
function dc_cancel(_event, _all) {
	_super.dc_cancel(_event)
	globals.svy_nav_closeForm(_event)
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"12D309FB-8BA7-4360-8690-044A7802A81C"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
}

/**
 * Gets all the relations from the tab to the progam and the global relation to the selected program.
 * @private 
 * @author Sanneke Aleman
 * @properties={typeid:24,uuid:"E8957784-8CB0-4F6D-A4F5-19790071E40F"}
 */
function setVLParentTabRelation() {
	
	var _values = []
	
	if(utils.hasRecords(nav_tab$to_parent) 
			&& utils.hasRecords(nav_tab$to_parent.nav_tab_to_nav_program)
			&& nav_tab$to_parent.nav_tab_to_nav_program.server_name 
			&& nav_tab$to_parent.nav_tab_to_nav_program.table_name
			&& utils.hasRecords(nav_tab_to_nav_program)
			&& nav_tab_to_nav_program.server_name
			&& nav_tab_to_nav_program.table_name)
	{
		var _relations = solutionModel.getRelations(nav_tab$to_parent.nav_tab_to_nav_program.server_name, nav_tab$to_parent.nav_tab_to_nav_program.table_name)
		var _relation
		for (var i = 0; i < _relations.length; i++) {
			_relation = _relations[i]
			if(databaseManager.getDataSourceServerName(_relation.foreignDataSource) == nav_tab_to_nav_program.server_name
				&& databaseManager.getDataSourceTableName(_relation.foreignDataSource) == nav_tab_to_nav_program.table_name)
			{
				_values.push(_relation.name)
			}
		}
		_values.sort()
		/** @type {Array<String>} */
		var _globals = solutionModel.getRelations(null).map(function (jsRelation) { return jsRelation.name }).sort(); //array of all global relations
		for (var j = 0; j < _globals.length; j++) {
			_relation = solutionModel.getRelation(_globals[j])
			if(databaseManager.getDataSourceServerName(_relation.foreignDataSource) == nav_tab_to_nav_program.server_name
				&& databaseManager.getDataSourceTableName(_relation.foreignDataSource) == nav_tab_to_nav_program.table_name)
			{
				_values.push(_relation.name)
			}
		}
		application.setValueListItems('nav_parent_tab_relation',_values)
	}
	else //empty list
	{
		application.setValueListItems('nav_parent_tab_relation',null)
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CF395D78-3AA6-464A-B5D7-A0E83B272296"}
 */
function onDataChangeParentTab(oldValue, newValue, event) {
	setVLParentTabRelation()
	return true
}

/**
 * @properties={typeid:24,uuid:"5EB46B21-B6DA-46C7-9B15-779573FDD86B"}
 */
function gotoEdit() {
	_super.gotoEdit.apply(this, arguments);
	setPanelValuelist();
	setParentTabValuelist();
	
}

/**
 * @properties={typeid:24,uuid:"4FC274FD-6932-4E9A-8863-F52E510C4C5D"}
 */
function setParentTabValuelist() {
	

	var _realValues = []
	var _displayValues = []
	var _rec
	
	nav_tab$other_tabs.sort('panel_id asc, sequence asc')
	for (var i = 1; i <= nav_tab$other_tabs.getSize(); i++) {
		_rec = nav_tab$other_tabs.getRecord(i)
		_realValues.push(_rec.tab_id)
		_displayValues.push(_rec.panel_id + ' - '+ _rec.display_description)
	}
	
	
	application.setValueListItems('nav_parent_tab_flex',_displayValues,_realValues,true)

	
}
