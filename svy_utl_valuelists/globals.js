/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D318B8D3-D24E-466D-B746-06CB031943E5"}
 */
var svy_val_version = '4.0.0';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"d27bab8a-636a-4676-85dc-a9ff1dd9fcc0",variableType:4}
 */
var utl_system_list = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"d80bbd76-ed04-4a38-97e6-b60c404cbeea"}
 */
var utl_languageCode = 'nl';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"fa89db66-2329-4264-827d-db9f5d32bdb2",variableType:4}
 */
var utl_valuelist_id;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0d05fc08-06c1-46c3-b5ca-346f6073b5c2",variableType:4}
 */
var utl_valuelistvalue_id;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0567b59c-75d0-44a8-854f-f3855036ce30",variableType:4}
 */
var utl_valuelistvalue_id2;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0236d61e-ed1b-48c1-a867-13f862532188"}
 */
var vlt_owner_id = '1';

/**
 *	Method to delete a record, is followed by svy_val_rec_delete_dialog
 *
 * @author Sanneke Aleman
 * @since 2006-11-07
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	_form name of the form you want to delete a record on
 * @return  none
 * 
 * @properties={typeid:24,uuid:"f8ed4d5a-53ec-45fb-a531-b1248947b3e8"}
 */
function svy_val_rec_delete(_event, _form)
{
	if(!_form)
	{
		_form = _event.getFormName();
	}
	var _ok = i18n.getI18NMessage('svy.fr.lbl.ok')
	var _no = i18n.getI18NMessage('svy.fr.lbl.no')
	var _answer =  globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), _ok, _no); 	
	if(_answer == _ok)
	{                      
		forms[_form].controller.deleteRecord()
	}

}

/**
 *	Creates a new record
 *
 * @author Sanneke Aleman
 * @since 2006-11-07
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String}	_form name of the form you want to delete a record on
 * @return  none
 * 
 * @properties={typeid:24,uuid:"207fed2a-ea1e-4a2d-833a-105309a2f05d"}
 */
function svy_val_rec_new(_event, _form)
{
	if(!_form)
	{
		_form = _event.getFormName();
	}
	forms[_form].controller.newRecord()

}

/**
 *	Loads the valuelist from table data into servoy based on the current language
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * @return  none
 * 
 * @properties={typeid:24,uuid:"c4948f86-37da-4e5c-b6bd-158216573f64"}
 */
function svy_val_startup_setvaluelists()
{
	var _maxReturnedRows = 2000; //limit valuelist to 2000 items
	var _queryValueLists = 	'select valuelist_id, '+
							'		name, '+
							'		sort_type, '+
							'		use_custom_sql, '+
							'		custom_sql, '+
							'		allow_null, '+
							'		server_name '+	
							'from 	vlt_valuelists';
	/** @type {String} */
	var _queryValues 
	var _datasetValues
	var _dataSetValueLists = databaseManager.getDataSetByQuery(globals.nav_db_framework, _queryValueLists, null , _maxReturnedRows);
	var j
	
	for ( var i = 1 ; i <= _dataSetValueLists.getMaxRowIndex() ; i++ )
	{
		if( _dataSetValueLists.getValue(i,4) != 1 /*not a VL based on a custom query*/)
		{
			var _args = new Array();
			
			_args[0] = i18n.getCurrentLanguage();
			_args[1] = globals.svy_sec_lgn_owner_id
			_args[2] = _dataSetValueLists.getValue(i,1);
			_args[3] = globals.svy_sec_lgn_owner_id
			
			
			//Get sort order. 1 = sort order, 2 = ascending, 3 = descending
			var _args2 = '';
			if ( _dataSetValueLists.getValue(i,3) == 1) /*Use sortOrder*/
			{
				_args2 = 'order by sort_order asc';
			}
			else if ( _dataSetValueLists.getValue(i,3) == 2)/*Ascending*/
			{
				_args2 = 'order by vv.display_value asc'; 
			}
			else if ( _dataSetValueLists.getValue(i,3) == 3)/*Decending*/
			{
				_args2 = 'order by vv.display_value desc'; 
			}
			_queryValues =  "select vt.translation_value, "+
								"		vv.return_value, "+
								"		vv.display_value "+
								"from 	vlt_valuelistvalues vv left outer join vlt_valuetranslations vt on vv.valuelistvalue_id = vt.valuelistvalue_id and 	vt.language_key = ? and	vt.owner_id in ('-1',?) "+
								"where 	vv.valuelist_id= ?  "+
								"and	vv.value_active = 1 "+
								"and	(vv.system_value = 1 or vv.owner_id in ('-1',?)) "+ _args2;
	
			_datasetValues = databaseManager.getDataSetByQuery(globals.nav_db_framework, _queryValues, _args, _maxReturnedRows);
		
			//Substitute default value if no translation is found.
			for (j = 1 ; j <= _datasetValues.getMaxRowIndex() ; j++ )
			{
				if (_datasetValues.getValue(j,1) == null || _datasetValues.getValue(j,1) == '')
				{
					_datasetValues.setValue(j,1,_datasetValues.getValue(j,3));
				}	
			}
			
			if ( _dataSetValueLists.getValue(i,3) == 2) /*Ascending*/
			{
				_datasetValues.sort(1,true);
			}
			else if ( _dataSetValueLists.getValue(i,3) == 3) /*Descending*/
			{
				_datasetValues.sort(1,false);
			}
		}
		else
		{
			if (_dataSetValueLists.getValue(i,5))
			{
				_queryValues = _dataSetValueLists.getValue(i,5)
				/** @type {String} */
				var _serverName = _dataSetValueLists.getValue(i,7)
				try {
					_datasetValues = databaseManager.getDataSetByQuery(_serverName, _queryValues, null, _maxReturnedRows);
				}
				catch (e) {
					application.output('ERROR: valuelist query is not working: '+ _queryValues, LOGGINGLEVEL.ERROR)
					continue
				}
			}
		}
	
		var _displayValues = _datasetValues.getColumnAsArray(1);
		var _returnValues = _datasetValues.getColumnAsArray(2);
		
		//Check if valueList needs to contain an empty value and if so, add if the list doesn't contain a null value
		if (_dataSetValueLists.getValue(i,6) == 1 /*Allow null*/)
		{
			var hasEmpty = false;
			for (j = 0 ; j < _returnValues.length; j++ )
			{
				if(_returnValues[j] == null || _returnValues[j] == '')
				{
					hasEmpty = true;
				}
			}
			if (hasEmpty == false)
			{
				_returnValues.unshift(null);
				_displayValues.unshift(null);
			}
		}
	
		var _valueListName = _dataSetValueLists.getValue(i,2);
		//as Servoy does not clear valuelist when no records in dataset
		if (_returnValues.length == 0) 
		{
			application.setValueListItems(_valueListName, new Array(null), new Array(null));
		}
		else 
		{
			application.setValueListItems(_valueListName, _displayValues,_returnValues, true );
		}
	
	}
}

/**
 *	To open the valuelist editor with the shortcut ctrl+5
 *
 * @author Erik Kramer
 * @since 2009-03-12
 *
 * @properties={showInMenu:true,typeid:24,uuid:"41176068-33a9-4787-81aa-42a1d8904c2c"}
 */
function _5_svy_nav_openValuelistEditor() {
	if (_to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER || _to_sec_user$user_id.admin_level == scopes.svySecurityManager.ADMIN_LEVEL.DEVELOPER) {
		globals.DIALOGS.showFormInModalDialog(forms.svy_utl_valuelists_dtl, -1, -1, -1, -1, 'Valuelists', true, false, 'Valuelists')
	}
}
