/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6560C912-3539-4B44-A692-D1A24AA85688"}
 */
var svy_nav_filter_country = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A60C57F-55C1-4A0F-A72E-90462C7F32FA",variableType:4}
 */
var vLoseFocus = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6B37061-F68E-4CF8-A721-526732FA5A84"}
 */
function onLoad(event) {
	if (_to_sec_owner$lgn.allow_org_filter_change && application.getValueListItems('svy_lgn_organizations').getMaxRowIndex() > 1) {
		elements.organization_filter.visible = true;
	} else {
		elements.organization_filter.visible = false;
	}
	
	if (globals['svy_nav_getFilters']) {
		var _filterObj = globals['svy_nav_getFilters']();
		
		if (_filterObj) {
			var _jsForm = solutionModel.getForm(controller.getName());

			var _jsField, _jsVar, _jsMethod, _xpos = 404
			for (var i in _filterObj) {
				
				_jsVar = solutionModel.newGlobalVariable('globals',"svy_nav_filter_" + i, JSVariable.TEXT);
				
				_jsMethod = solutionModel.newGlobalMethod('globals', '\
					function filter_'+i+' (oldValue, newValue, event) {\
						if (globals["svy_nav_getUserDBName"]) {\
							databaseManager.removeTableFilterParam(globals["svy_nav_getUserDBName"](), i+"_filter");\
							databaseManager.addTableFilterParam(globals["svy_nav_getUserDBName"](), null, _filterObj[i].column, "=", forms[controller.getName()]["svy_nav_filter_" + i], i+"_filter");\
						}\
					}'
				);
				
				_jsField = _jsForm.newField(_jsVar, JSField.COMBOBOX, _xpos, 11, 100, 20);

				_jsField.valuelist = solutionModel.getValueList(_filterObj[i].vlName);
				_jsField.onDataChange = _jsMethod;
				_jsField.formIndex = 11000;
				_jsField.editable = false;
				_xpos += 104
			}
			controller.recreateUI();
		}
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E556E565-19FC-4C10-B4AC-04E697D0C775"}
 */
function filter_country (oldValue, newValue, event) {
	if (globals["svy_nav_getUserDBName"]) {
		databaseManager.removeTableFilterParam(globals["svy_nav_getUserDBName"](), "country"+"_filter");
		databaseManager.addTableFilterParam(globals["svy_nav_getUserDBName"](), null, "country", "=", forms[controller.getName()]["svy_nav_filter_" + "country"], "country"+"_filter");
	}
}
