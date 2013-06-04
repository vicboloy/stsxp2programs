/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"DC20AA77-0ADC-4DA0-A536-8503F793E357"}
 */
var sampleuse_version = '4.0.0';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"43043293-9CEC-4764-9AAC-347749DC8FCF"}
 */
var LDN = 'London';

/**
 * @param {JSFoundset<db:/example_data/employees>} _foundset
 * @properties={typeid:24,uuid:"ac8663e4-1dab-4def-bd2b-f397006e4838"}
 */
function validate_employees(_foundset) {
	if (!_foundset.lastname) {
		forms.employees_dtl.elements.lastname.bgcolor = '#ff0000'
		return -1
	} else {
		forms.employees_dtl.elements.lastname.bgcolor = '#ffffff'
	}

	if (!_foundset.firstname) {
		forms.employees_dtl.elements.firstname.bgcolor = '#ff0000'
		return -1
	} else {
		forms.employees_dtl.elements.firstname.bgcolor = '#ffffff'
	}
	return 0
}

/**
 * Record pre-update trigger.
 * Validate the record to be updated.
 * When false is returned the record will not be updated in the database.
 * When an exception is thrown the record will also not be updated in the database but it will be added to databaseManager.getFailedRecords(),
 * the thrown exception can be retrieved via record.exception.getValue().
 *
 * @param {JSRecord<db:/example_data/orders>} record record that will be updated
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3C08863F-7F25-4557-8DF4-3028BC76F0AF"}
 * @AllowToRunInFind
 */
function onRecordUpdateOrders(record) {
	var _rec
	if(record.orders_to_order_details.find())
	{
		record.orders_to_order_details.unitprice = '>0'
		record.orders_to_order_details.search()
	}
	
	for (var i = 1; i <= record.orders_to_order_details.getSize(); i++) {
		_rec = record.orders_to_order_details.getRecord(i)
		_rec.unitprice += record.freight
	}
	record.orders_to_order_details.loadAllRecords()
	return true
}

/**
 * @properties={typeid:24,uuid:"CF794AEB-5992-48E3-8510-1F7791D96E7E"}
 */
function val_hasDots(_table, _dataprovider, _newValue, _record) {
	if (utils.stringPatternCount(_newValue, '.') > 0) {
		//the string has dots in it
		return 1 
	} else {
		globals.nav.validation_msg += _dataprovider+ ", needs to have a . in it and doesn't have it" + '\n'
		return -1
	}
}

/**
 * @properties={typeid:24,uuid:"75EFD65C-B31B-4074-B434-A54FA28B49C1"}
 */
function val_hasNL(_table, _dataprovider, _newValue, _record) {
	if (utils.stringPatternCount(_newValue, 'nl') > 0) {
		return 1
	} else {
		globals.nav.validation_msg += _dataprovider+ ", needs to have a nl in it and doesn't have it" + '\n'
		return -1
	}
}

/**
 * @properties={typeid:24,uuid:"E371BEAA-B123-4704-B6BC-BC4F0EC69A99"}
 */
function applicationOutputTest() {
	application.output('Method is called from top menu')
}

/**
 * @properties={typeid:24,uuid:"31B0AF92-0292-457E-9F33-9BB5A6C06C8A"}
 */
function svy_nav_getUserDBName() {
	return "example_data";
}

/**
 * @properties={typeid:24,uuid:"D60B7E6F-B75F-43BE-B8AB-37F052033FBD"}
 */
function svy_nav_getFilters() {
	//	return {country:{vlName:"countries", column:"country", type:JSColumn.TEXT}};
}

/**
 * @properties={typeid:24,uuid:"644CCC70-7278-4CEF-9ABF-A65663CB20F8"}
 */
function loadImage(_fileName) {
	var _url = "http://i.imgur.com/" + _fileName;
	var _bytes = plugins.http.getMediaData(_url);

	forms.employees_dtl.photo = _bytes;
	application.output(_url);
	forms[globals.nav.mainFormName].controller.show();
}

/**
 * @properties={typeid:24,uuid:"2F109713-1D80-445A-AA99-F803FC87C50F"}
 */
function ownerTables() {
	var _tables = databaseManager.getTableNames(globals.nav_db_framework);
	var _result = [];
	
	for (var i = 0; i < _tables.length; i++) {
		var _jst = databaseManager.getTable(globals.nav_db_framework, _tables[i]);
		var _cn = _jst.getColumnNames();
		for (var j = 0; j < _cn.length; j++) {
			if (_cn[j] == "owner_id") {
				_result.push(_tables[i]);
			}
		}
	}
	application.output(_result.join("\n"));
}

/**
 * Callback method for when solution is opened.
 * 
 * @param {String} [arg] The startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} [queryParams] all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"9ACB94B4-7402-4DA3-96F5-1C1537A604CC"}
 */
function onSolutionOpen(arg, queryParams) {
	globals.nav.mainFormName = "svy_nav_fr_p_main";
	globals.nav.openLayoutFormName = "svy_nav_fr_p_openTabs";
	globals.nav.postLoginFormName = "svy_nav_fr_p_postLogin";
	globals.nav.loadingFormName = "svy_nav_fr_p_loading";
	globals.nav.desktopFormName = "svy_nav_fr_p_desktop";
	globals.nav.panelFormName = "svy_nav_fr_p_panel";
	globals.nav.buttonbar_lookup_window = "svy_nav_fr_buttonbar_lookup_window_pv";
	globals.nav.lookupWindowFormName = "svy_nav_fr_lookup_window_pv";
	globals.nav.advancedSearchCriteriaFormName = "svy_sea_advanced_search_criteria_dtl_pv";
	globals.nav.advancedSearchFormName = "svy_sea_advanced_search_dtl_pv";
	globals.nav.advancedSearchGroupFormName = "svy_sea_advanced_search_Group_dtl_pv";
	globals.nav.advancedSearchCriteriaTableFormName = "svy_sea_advanced_search_criteria_tbl_pv";
	globals.nav.advancedSearchTableFormName = "svy_sea_advanced_search_tbl_pv";
	
	globals.svy_nav_onOpen(arg, queryParams);
}
