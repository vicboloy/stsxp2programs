/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5356BBE9-9C8C-4722-8841-B5F6DF7B1100"}
 */
var nav_program_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA8AD32A-EC7F-4F8D-903F-00F057A8E5CE"}
 */
var nav_startArgs = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9EEAE3FA-D89C-4DCE-9789-7E4D83CE6F83"}
 */
var nav_properties_user_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48AD0912-99B5-4E94-B6A0-671A84B9B3AA",variableType:4}
 */
var null_integer = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E2DCBC7C-AD9E-422F-BBCA-D23F37293420"}
 */
var null_text = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8E80EE7D-7236-439D-98D6-58797B234BFD"}
 */
var nav_currentPanel1Form = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F3DB63DF-20BC-4B44-9A55-D097217AACA7",variableType:8}
 */
var svy_nav_panel_nr = null;

/**
 * @type {UUID}
 *
 * @properties={typeid:35,uuid:"EB6563E6-35B2-4096-844B-81EA71F051CC",variableType:-4}
 */
var nav_layout_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B2634E5-DB18-481D-A1E7-F7EE78503F55"}
 */
var nav_toolbar_item_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2704ECDC-CE90-4209-901B-69F81C82951B"}
 */
var nav_styleForm = 'svy_nav_style';

/**
 * @type {{
 * 			activeView:Number,
 *          advancedSearchFormName,
 *          advancedSearchTableFormName,
 *          advancedSearchCriteriaFormName,
 *          advancedSearchCriteriaTableFormName,
 *          advancedSearchGroupFormName,
 * 			arrayField:String,
 * 			arrayForm:String,
 * 			baseFormName:String,
 * 			bookmarks:Array<{program: String, record_ids: String, bookmark_id: UUID, layout_id: UUID, layoutObject: String, text1: String, text2: String, image_name: String, image_name_bg: String}>,
 * 			browser_buttonbar:String,
 * 			buttonbar_lookup_window:String,
 * 			childRelation:{field:String,
 * 							form:String,
 * 							field_child:String},
 * 			currentEditForm:String,
 * 			currentEditProgram:String,
 * 			default_edit_template:Number,
 * 			desktopFormName:String,
 *  		documents:Array,
 * 			form_view_01:String,
 * 			form_view_02:String,
 * 			getCurrentFormName:Function,
 * 			getCurrentTabFormName:Function,
 * 			getTabForm:Function,
 * 			getTabProgram:Function,
 * 			getTabRelation:Function,
 * 			getTabSelected:Function,
 * 			getTemplate:Function,
 * 			hasRecordHistory:Boolean,
 * 			his:{foundset:Array,
 * 				parentProgram:String,
 * 				tabIndex:Number,
 * 				parentRec:JSRecord,
 * 				foundset_related_form:String,
 * 				foundset_related_text:String},
 * 			his_max_entries:Number,
 * 			keys:String,
 * 			lastView:Number,
 * 			lastProgram:String,
 * 			loadingFormName:String,
 * 			lookupWindowFormName:String,
 * 			mainFormName:String,
 * 			new_record_filter:Array,
 * 			noHistory: Boolean,
 * 			notFromTabs:Boolean,
 * 			openEdits:Array<{program:String, record:JSRecord, layout_id:UUID}>,
 * 			openLayoutFormName:String,
 * 			openNewTab:Boolean,
 * 			panelFormName: String,
 * 			postLoginFormName:String,
 * 			program:{name:String},
 * 			readOnlyset:Number,
 * 			recordHistory:Array<{text1: String, text2: String, image_name: String, record_ids: Array<String>, layout_id: UUID, record_names: Array<String>, record_types: Array<String>, program: String, layoutObj: Object, image_name_bg: String, view: String}>,
 * 			related_text:String,
 * 			related_form:String,
 * 			relatedForm:String,
 * 			setMenuTree:Boolean,
 * 			shortcuts:Array<{layout_id: UUID, shortcut_id: UUID, image_name: String, image_name_bg: String, text1: String}>,
 * 			shortkeys:{},
 * 			splitPanesDividerSize:Number,
 * 			splitPanesDividerColor:String,
 * 			stack:Array<{layout_id:String, openTab_id:String, panels:Array<{selectedTab:Number, foundset:JSFoundset, index:Number, view:String}>, foundset_related_text: String}>,
 * 			stack_position:Number,
 * 			styleObj:Object,
 * 			switchedForEdit:Boolean,
 * 			switchedForEditTabId: String,
 * 			tabSearchForms:String,
 *			template_types_notabs:Array,
 * 			template_types:Array,
 * 			toggle:Boolean,
 * 			switchedViewForEdit:Boolean,
 * 			validation_msg:String,
 * 			viewer_buttonbar:String,
 * 			viewHasTable:Function,
 * 			viewHasDetail:Function
 * }}
 *
 * @properties={typeid:35,uuid:"cbfd74e6-d583-452a-a487-1775e4dd01bb",variableType:-4}
 */
var nav = { 
			mainFormName:"svy_nav_fr_main",
			postLoginFormName:"svy_nav_fr_postLogin",
			openLayoutFormName:"svy_nav_fr_openTabs",
			loadingFormName:"svy_nav_fr_loading",
			baseFormName:"svy_nav_base",
			desktopFormName:"svy_nav_fr_desktop",
			panelFormName:"svy_nav_fr_panel_base",
			lookupWindowFormName:"svy_nav_fr_lookup_window",
			buttonbar_lookup_window: "svy_nav_fr_buttonbar_lookup_window",
			advancedSearchCriteriaFormName: "svy_sea_advanced_search_criteria_dtl",
			advancedSearchCriteriaTableFormName: "svy_sea_advanced_search_criteria_tbl",
			advancedSearchFormName: "svy_sea_advanced_search_dtl",
			advancedSearchTableFormName: "svy_sea_advanced_search_tbl",
			advancedSearchGroupFormName:"svy_sea_advanced_search_Group_dtl",
			openEdits:[]
		};

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3de680f4-3b63-4aea-b6cd-e3ab5ba19aee"}
 */
var nav_program_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9989cdd1-803a-4a47-a1f2-ffcbd2dca2af"}
 */
var a = 'a';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5934f02a-50a8-4249-9e1b-6d6c17d3178c"}
 */
var nav_base_form_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8982D2FD-0618-4C8C-ACF1-CA9B17F00303"}
 */
var svy_nav_bg_image_name = 'pv_bg_calm.png';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4DED79F2-3ACE-487B-A390-9AFDAD3C16C2",variableType:4}
 */
var nav_show_open_tabs = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9AC70209-2D23-449C-B805-16D72DA7AB85"}
 */
var bg_row_selected = "#3D80DF";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C13D89EA-D0DF-428E-9699-19B77646A6D3"}
 */
var bg_row_edited = "#F5F6BE";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"231ADA1C-AEC8-4B75-8D46-5EA5C8AECD90"}
 */
var bg_row_odd = "#f0f0f0";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45FED161-C79F-499B-A6CB-09B87F455235"}
 */
var bg_row_even = "#ffffff";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1130EED-6FEF-4D43-9522-96137C5B5954"}
 */
var nav_menu_item_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"fc39e399-8d51-4d07-8e95-7a57604c28d1"}
 */
var nav_btn_record_information = 'btn_record_information';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"e286bbea-bd64-4def-9d19-509f55429ea5"}
 */
var nav_properties = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"bc9bb11f-757c-45cf-9e7e-a0bccd391601"}
 */
var nav_btn_all_records = 'btn_all_records';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"21A70618-53FC-4559-AE83-F793F5A51767"}
 */
var nav_btn_required_fields = 'btn_required_fields';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"362a06c9-4fe0-4867-9b47-b9422f6c5f22"}
 */
var nav_btn_delete = 'btn_delete';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"535a1133-aa27-4aaa-8667-b28cae8d04bb"}
 */
var nav_btn_duplicate = 'btn_duplicate';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8536a34d-bb6c-4665-82a2-784754ea1a18"}
 */
var nav_btn_method = 'btn_method';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"c7dddd00-2f2e-4295-90bc-ba2da3cf0894"}
 */
var nav_btn_rec_nav = 'btn_rec_nav';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7338422f-bbad-48cd-852c-2ea664049cc0"}
 */
var nav_btn_search = 'btn_search';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"08a7780a-6254-4edf-bc9f-849e77f83eec"}
 */
var nav_btn_search_prop = 'btn_search_prop';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3253e6f6-9255-4052-8394-a2c251da7fea"}
 */
var nav_btn_export = 'btn_export';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"c9fcd745-6110-4cbb-86ee-01bc07cc467e"}
 */
var nav_btn_resettblheader = 'btn_resettblheader';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"13e3afa0-5748-4816-b37b-04321423e24a"}
 */
var nav_btn_help = 'btn_help';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"207adf86-261e-4777-9af2-fb898a29e28e"}
 */
var nav_current_formname = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0bdc7ecf-5174-49e0-a2a9-a64eee359e80"}
 */
var nav_element_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"29b4b02a-4c74-4acc-88f9-6f888ce1d3bf"}
 */
var nav_function = 'F';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4e1da578-444e-40b5-aca2-66fe82ddf13b"}
 */
var nav_key_program = 'program';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5de42e4b-6c7e-4010-9704-12cb1312073a"}
 */
var nav_menu_root_menutype = 'R';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"57251d34-cf8b-4be3-aa83-010b4c327666"}
 */
var nav_report = 'R';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3861551c-9896-43b4-ad67-096139463a24"}
 */
var layout_shortname = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"66fb8e86-3727-46be-bd5b-b79d7a6811c8"}
 */
var svy_nav_form_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"a47dc4ce-44e4-4110-9a9c-a56681239d70"}
 */
var svy_nav_search = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"de982a16-434e-4234-b600-bf4ea4e8f8fc"}
 */
var svy_nav_search_form = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"96d18e27-415c-4820-bd96-9c313fa9fd23"}
 */
var nav_searchCriteriaID = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54482dd8-c764-4bf5-9bb8-9ec294814cec"}
 */
var nav_btn_sort = 'btn_sort';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82e5a40e-ecc1-4d94-8bd0-1e5cfab4f09d"}
 */
var nav_btn_print = 'btn_print';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"dc8c9111-512b-4e61-a49d-4b121500586c"}
 */
var nav_btn_new = 'btn_new';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ba28b12e-1517-44ca-a527-b11fcd657819"}
 */
var nav_btn_edit = 'btn_edit';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3DC5660B-5068-47B6-8BBE-52106C32B146"}
 */
var i18n_filter = null;

/**
 * @properties={typeid:24,uuid:"61BD73E2-65AC-4AD7-889C-800DD1AE5380"}
 */
function svy_nav_setI18N(i18nFilter) {
	globals.i18n_filter = i18nFilter;
	if(i18nFilter)
	{
		i18n.setI18NMessagesFilter('i18n_organization_id', globals.i18n_filter);
	}
}

/**
 * Get a property, if user_id is provided for a specific user
 * @param {String} _property_name
 * @param {String} [_user_id]
 * 
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyProperties#getPropertyValues()} instead. 
 * 
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"2A0EE381-065D-4396-9CFD-9286B5E40FEF"}
 */
function svy_nav_getProperty(_property_name, _user_id) {
	var propValue = scopes.svyProperties.getPropertyValues(_property_name);
	if (!propValue) {
		application.output("Requested property " + _property_name + " is missing in the properties", LOGGINGLEVEL.WARNING);
		return [];
	} else {
		return propValue;
	}
}

/**
 * Get a boolean property, if user_id is provided for a specific user
 * 
 * @param {String} _property_name
 * @param {String} [_user_id]
 * @return {Boolean}
 * 
 * @deprecated use scopes.svyProperties.getPropertyValues instead
 * 
 * @properties={typeid:24,uuid:"AAE7343B-68F1-4B84-B8C9-DF28C858B1FF"}
 */
function svy_nav_getBooleanProperty(_property_name, _user_id) {
	return scopes.svyProperties.getPropertyValueAsBoolean(_property_name);
}

/**
 * Check if the data version is the provided version or better
 * 
 * @author Joas de Haan
 *
 * @param {String} _version
 * 
 * @return {Boolean} data version is the provided version or better
 * 
 * @properties={typeid:24,uuid:"25398A12-444D-4BF4-93D6-B5F799992820"}
 */
function svy_nav_checkDataVersion(_version) {
	var _actual = scopes.svyProperties.getPropertyValue("data_version");
	if (_actual && _actual >= _version) {
		return true;
	}
	return false;
}

/**
 * Set the data version property
 * 
 * @author Joas de Haan
 * 
 * @param {Object} _version
 *
 * @properties={typeid:24,uuid:"53EE3E31-0936-4025-9D32-DCB1245EE752"}
 */
function svy_nav_setDataVersion(_version) {
	scopes.svyProperties.setPropertyValue("data_version", _version);
}

/**
 * @param {String} _property_name
 * @param {Array} _value
 * @param {String|UUID} [_user_id] if it is for a specific user only
 * @return {Boolean} succes
 * @deprecated not used anymore; use scopes.svyProperties.setProperty() instead
 * @properties={typeid:24,uuid:"25EF1F4B-2866-4B04-ABA6-3545F4AC31EA"}
 */
function svy_nav_setProperty(_property_name, _value, _user_id) {
	if (!_user_id) {
		scopes.svyProperties.setPropertyValue(_property_name, _value);
	} else {
		scopes.svyProperties.setUserProperty(_property_name, _value, _user_id);
	}
	return true;
}

/**
 * @param {JSEvent} [_event]
 * @param {String} [_formName]
 * @properties={typeid:24,uuid:"8DAD3975-A449-4D9B-BC41-5C69EA416D84"}
 */
function svy_nav_closeForm(_event, _formName)
{
	if (!_formName) {
		_formName =  _event.getFormName();
	}
	var _context = forms[_formName].controller.getFormContext()
	/** @type {String} */
	var _window = _context.getValue(1,1)
	if(application.getWindow(_window))
	{
		var _windowObject = application.getWindow(_window)
		_windowObject.hide()
		
		if(_window != 'infoDialog') //infoDialog is reused
		{
			_windowObject.destroy()
		}
	}
}

/**
 * @properties={typeid:24,uuid:"9A755856-A67E-4BD3-B111-790F30781906"}
 */
function svy_nav_initServerVL() {
	var _servers = databaseManager.getServerNames()
	_servers.sort()
	application.setValueListItems('nav_server_names',  _servers )
}

/**
 * @param {String} _serverName
 *
 * @properties={typeid:24,uuid:"27EF1625-36FD-4420-873A-7E7B27EE6E72"}
 */
function svy_nav_initTableVL(_serverName) {
	if (_serverName) {
		var _tables = databaseManager.getTableNames(_serverName);
		var _views = databaseManager.getViewNames(_serverName);
		 _tables = _tables.concat(_views)
		_tables.sort()
		application.setValueListItems('nav_table_names', _tables)

	} else {
		application.setValueListItems('nav_table_names', null)
	}
}
