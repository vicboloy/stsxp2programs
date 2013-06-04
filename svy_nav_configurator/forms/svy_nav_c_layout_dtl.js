/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C558CEA9-48F4-406F-A35A-FD52F1D9D7B6",variableType:4}
 */
var vSplitter4 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5E7992AC-F71D-4BC7-BB26-E587CCD62277",variableType:4}
 */
var vSplitter3 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3226D28-FDE7-4265-AC07-CC2F3D19F693",variableType:4}
 */
var vSplitter1 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EA2C3416-DA1B-42E5-BE26-D28D9E9BEAC2",variableType:4}
 */
var vSplitter2 = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B7F3D2C-D2AA-4A30-B5E1-A7D9D47B271D"}
 */
function selectTemplate(event) {
	var _template = forms.svy_nav_c_template_dtl.open(template_name)
	if (_template) {
		template_name = _template
		template_form = 'svy_nav_fr_'+ _template.replace(/_(\d{1})$/, "_0$1")
		setTemplateImage()
		loadPanelData();
	}
}

/**
 * @properties={typeid:24,uuid:"367B4864-BB49-42E5-BC65-C86854CDA17D"}
 */
function setTemplateImage() {
	if (template_name) {
		elements.lbl_template_image.imageURL = "media:///" + template_name + ".png";

	} else {
		elements.lbl_template_image.imageURL = null
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2FA513F9-B771-4761-8342-CD1DC3B804D3"}
 */
function onRecordSelection(event) {
	setTemplateImage()
	set_i18n_field()
	forms.svy_nav_c_tab_dtl.setPanelValuelist()
	setParentTabValuelist()
	loadPanelData();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B1E6D90-D70E-4E58-B6A4-86C8196FEE67"}
 */
function reloadMenu(event) {
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"968E409C-E743-4225-BBA0-B3F1842452E9"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	controller.loadAllRecords()
	_super.onShow(firstShow, event)
	
	tabSwitch(null, 2)
	
	if (firstShow) {
		setPanelProperties();
		foundset.sort("name asc");
	}
}

/**
 * @properties={typeid:24,uuid:"0B8BA4C1-5D55-4619-AD30-20E1CF4D3E1A"}
 */
function gotoBrowse() {
	_super.gotoBrowse.apply(this, arguments); 
	elements.btn_selectTemplate.enabled = false
	forms.svy_nav_c_tab_tbl.elements.btn_new.enabled = true
}

/**
 * @properties={typeid:24,uuid:"80E0DD52-510A-4D53-93FC-3047B4EB89AB"}
 */
function gotoEdit() {
	_super.gotoEdit.apply(this, arguments); 
	elements.btn_selectTemplate.enabled = true
	forms.svy_nav_c_tab_tbl.elements.btn_new.enabled = false
}

/**
 * Get i18n label
 *
 * @properties={typeid:24,uuid:"78DF0A8B-C205-4500-A778-5E559D27E69F"}
 */
function getI18nLabel() {
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		globals.DIALOGS.showInfoDialog('i18n:svy.fr.lbl.I18n_key_selector', i18n.getI18NMessage('svy.fr.dlg.I18n_key_selector'), 'i18n:svy.fr.lbl.ok')
		return
	}
	description = application.showI18NDialog()
}

/**
 *  Show i18n field or normal description
 *
 * @author Sanneke Aleman
 * @since 2011-12-24
 * @return  none
 * @properties={typeid:24,uuid:"CA0BF5CD-F9E8-4784-8EDC-67A3C9B0E82F"}
 */
function set_i18n_field() {

	if (flag_i18n) {
		elements.Description_i18n.visible = true
		elements.Description.visible = false
		elements.btn_i18n.visible = true
	} else {
		elements.Description_i18n.visible = false
		elements.Description.visible = true
		elements.btn_i18n.visible = false
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2FB4763C-B635-4681-BCE8-975F4DFFA0A9"}
 */
function onDataChangeName(oldValue, newValue, event) {
	name = newValue.replace(/[^\w]/g, "");
	if (!description) { //auto fill the description if it is empty
		description = name;
	}
	return true;
}

/**
 * @properties={typeid:24,uuid:"89E14603-F362-401F-82B3-E3DE662BE5D0"}
 */
function setPanelProperties() {	
	if (!splitter_pos_array)	{
		splitter_pos_array = [];
	}
	
	if (!tabs_orientation_array) {
		tabs_orientation_array = [];
	}
	
	var _tabIndex = elements.metadata_layout_tab.tabIndex;
	elements.metadata_layout_tab.removeAllTabs();
	history.removeForm('svy_nav_c_panel_tbl');
	
	var jsForm = solutionModel.revertForm('svy_nav_c_panel_tbl');
	var _datasource = loadPanelData();
	jsForm.dataSource = _datasource;
	var jsField = jsForm.getField('sequence');
	jsField.dataProviderID = 'sequence';
	jsField = jsForm.getField('splitter_pos');
	jsField.dataProviderID = 'splitter_pos';
	jsField = jsForm.getField('tabs_orientation');
	jsField.dataProviderID = 'tabs_orientation';
	jsField.valuelist = solutionModel.getValueList('nav_orientation_tabs');
		
	forms.svy_nav_c_panel_tbl.controller.recreateUI();
	
	elements.metadata_layout_tab.addTab(forms.svy_nav_c_panel_tbl, null, null, null, null, null, null, null, 1);
	elements.metadata_layout_tab.addTab(forms.svy_nav_c_tab_tbl, null, null, null, null, null, null, 'nav_layout_to_nav_tab', 2);
	
	elements.metadata_layout_tab.tabIndex = _tabIndex;
}

/**
 *	Tab switch
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @param {JSEvent} [_event]
 * @param {Number} [_arg] number of the tab you want to navigate to
 * @return  none
 *
 * @properties={typeid:24,uuid:"2EF75F47-8DF5-4955-8478-73295F26E58B"}
 */
function tabSwitch(_event, _arg) {
	var _tab
	if (_arg == undefined) {
		_tab = _event.getElementName().replace(/[^0-9]/g, "")
	} else {
		_tab = _arg
	}

	//deactivated tabs
	for (var i = 0; i < 2; i++) {
		elements['tab_left_' + (i + 1)].setImageURL('media:///tab_grey_left.png')
		elements['tab_right_' + (i + 1)].setImageURL('media:///tab_grey_right.png')
		elements['tab_' + (i + 1)].setImageURL('media:///tab_grey_btw.png')
		elements['lbl_' + (i + 1)].setFont('Verdana,0,10');
		elements['lbl_' + (i + 1)].fgcolor = '#000000'
	}

	//activated
	elements['tab_left_' + _tab].setImageURL('media:///tab_blue_left.png')
	elements['tab_right_' + _tab].setImageURL('media:///tab_blue_right.png')
	elements['tab_' + _tab].setImageURL('media:///tab_blue_btw.png')
	elements['lbl_' + _tab].setFont('Verdana,1,10');
	elements['lbl_' + _tab].fgcolor = '#ffffff'

	elements.metadata_layout_tab.tabIndex = _tab
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"9F98FD02-F11F-44EF-88E4-19E7266BC331"}
 */
function loadPanelData() {
	var _dataset =  databaseManager.createEmptyDataSet(0, 0);
	_dataset.addColumn('sequence');
	_dataset.addColumn('splitter_pos');
	_dataset.addColumn('tabs_orientation');
	
	if (template_name && template_form && forms[template_form]) {
		var _panelCount = forms[template_form].getPanelCount();
//		var _splitters = forms[template_form].getSplitterCount();
		
		for (var i = 0; i < _panelCount; i++) {
			var _splitterPos = 0;
			if (splitter_pos_array && splitter_pos_array[i + 1]) {
				_splitterPos = splitter_pos_array[i + 1];
			} else {
				_splitterPos = null;
			}
			
			var _tabsOrientation = 0;
			if (tabs_orientation_array && tabs_orientation_array[i + 1]) {
				_tabsOrientation = tabs_orientation_array[i + 1];
			} else {
				_tabsOrientation = null;
			}
			
			_dataset.addRow([i + 1, _splitterPos, _tabsOrientation]);
		}
	}
	
	return _dataset.createDataSource('pn_table', [JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER]);
}

/**
 *
 * @param _event
 * @param _all
 *
 * @properties={typeid:24,uuid:"FAEAAED6-15C6-47EE-B44F-0505C86DE1BB"}
 */
function dc_save(_event, _all) {
	
	var _ok;
	if (!description || !template_form) {
		var _message = i18n.getI18NMessage('svy.fr.dlg.mandatory_fields')
		var _title = i18n.getI18NMessage('svy.fr.lbl.mandatory_fields')
		if (!description) {
			_message += '\n' + i18n.getI18NMessage('svy.fr.lbl.description')
		}
		if (!template_form) {
			_message += '\n' + i18n.getI18NMessage('svy.fr.lbl.template')
		}		
		_ok = i18n.getI18NMessage('svy.fr.lbl.ok')
		globals.DIALOGS.showWarningDialog(_title, _message, _ok)
		
		
		
		return
	}
	
	_super.dc_save(_event, _all)
}

/**
 * @properties={typeid:24,uuid:"F3F8019E-354B-423C-86C3-EE74323C9015"}
 */
function setParentTabValuelist() {
	

	var _realValues = []
	var _displayValues = []
	var _rec
	if(!utils.hasRecords(nav_layout_to_nav_tab)) return
	nav_layout_to_nav_tab.sort('panel_id asc, sequence asc')
	for (var i = 1; i <= nav_layout_to_nav_tab.getSize(); i++) {
		_rec = nav_layout_to_nav_tab.getRecord(i)
		_realValues.push(_rec.tab_id)
		_displayValues.push(_rec.panel_id + ' - '+ _rec.display_description)
	}
	
	
	application.setValueListItems('nav_parent_tab',_displayValues,_realValues,true)

	
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1495819E-C830-483A-A4C7-579FEEB4FF62"}
 */
function onDataChangeTemplateName(oldValue, newValue, event) {
	if (template_name && solutionModel.getForm(template_form)) {
		template_form = 'svy_nav_fr_'+ template_name.replace(/_(\d{1})$/, "_0$1")
		loadPanelData();
	}
	
	return true;
}

/**
 *
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"FA5A19F6-AF91-49BB-9D6B-CE070A5A79A5"}
 */
function dc_duplicate(_event) {
	
	gotoEdit();
	
	var original = foundset.getSelectedRecord();
	var duplicate = foundset.getRecord(foundset.duplicateRecord());
	duplicate.name += "_copy";
	var originalNavTabs = original.nav_layout_to_nav_tab;
	var parentMapping = new Array();
	for (var i = 1; i <= originalNavTabs.getSize(); i++) {
		var originalNavTabRecord = originalNavTabs.getRecord(i);
		var newNavTabRecord = duplicate.nav_layout_to_nav_tab.getRecord(duplicate.nav_layout_to_nav_tab.newRecord());
		// clear auto enter values
		newNavTabRecord.panel_id = null;
		newNavTabRecord.solution_name = null;
		// save new and old id mapping
		parentMapping.push([originalNavTabRecord.tab_id, newNavTabRecord.tab_id]);
		// copy values
		databaseManager.copyMatchingFields(originalNavTabRecord, newNavTabRecord);
	}
	
	// adjust parent_tab_id
	for (var j = 1; j <= duplicate.nav_layout_to_nav_tab.getSize(); j++) {
		newNavTabRecord = duplicate.nav_layout_to_nav_tab.getRecord(j);
		if (newNavTabRecord.parent_tab_id) {
			for (var m = 0; m < parentMapping.length; m++) {
				if (newNavTabRecord.parent_tab_id.toString() == parentMapping[m][0].toString()) {
					newNavTabRecord.parent_tab_id = parentMapping[m][1];
					break;
				}
			}
		}
		
	}
	onRecordSelection(null);
}
