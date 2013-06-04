/**
 *	Loads the valuelist becuase they are used in the form, and load all valuelists
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * 
 * @properties={typeid:24,uuid:"262a4ec4-8318-4d36-ad5d-23213156c2a5"}
 * @AllowToRunInFind
 */
function onLoad()
{
	globals.svy_val_startup_setvaluelists();
	controller.loadAllRecords()
}

/**
 *	 Shows a dialog to edit the query
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * 
 * @properties={typeid:24,uuid:"eedbf5a0-98a1-49be-9d98-c5c11ef82b9b"}
 */
function open_sql_editor()
{
	globals.DIALOGS.showFormInModalDialog(forms.svy_utl_valuelists_sql_dtl,null,null,null,null,'i18n:svy.fr.lbl.custom_sql',false,false,'svy_utl_valuelists_sql_dtl')
}

/**
 *	 Enters some default valuelists
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * 
 * @properties={typeid:24,uuid:"d43ac86f-e0a7-4229-bf9d-ec7ab3bea789"}
 */
function createValuelistsData()
{
	//	_valuelist
//		-valuelistName1
//			-value1
//				-real
//				-display
//					-language1
//					-languate2
//			-value2
//				...
//		-valuelistName2
//				...
	
	var _valuelist = {
		"svy_val_sort_type":{
			"Sort order":{
				"real":1,
				"display":{"nl":"Sorteer volgorde", "en":"Sort order"}			           
			}, 
			"Ascending":{
				"real":2,
				"display":{"nl":"Oplopend", "en":"Ascending"}				           
			},
			"Descending":{
				"real":3,
				"display":{"nl":"Aflopend", "en":"Descending"}				           
			}
		},
		"svy_val_yesno":{
			"yes":{
				"real":1,
				"display":{"nl":"Ja", "en":"Yes"}				           
			},
			"no":{
				"real":-1,
				"display":{"nl":"Nee", "en":"No"}				           
			}
		}, 
		"svy_val_language_key":{
			"nl":{
				"real":"nl",
				"display":{"nl":"Nl", "en":"Nl"}				           
			},
			"en":{
				"real":"en",
				"display":{"nl":"En", "en":"En"}				           
			}
		}
	};

	var _sort_order;
	for (var i in _valuelist) {
		controller.newRecord();
		allow_null = 0;
		name = i;
		sort_type = 2;
		system_list = 1;
		_sort_order = 0;
		for (var j in _valuelist[i]) {
			valuelists_to_valuelistvalues.newRecord();
			 valuelists_to_valuelistvalues.display_value = j;
			valuelists_to_valuelistvalues.owner_id = -1;
			valuelists_to_valuelistvalues.return_value = _valuelist[i][j].real;
			valuelists_to_valuelistvalues.sort_order = _sort_order++;
			valuelists_to_valuelistvalues.system_value = 1;
			valuelists_to_valuelistvalues.value_active = 1;
			for (var k in _valuelist[i][j].display) {
				valuelists_to_valuelistvalues.valuelistvalues_to_valuetranslations.newRecord();
				valuelists_to_valuelistvalues.valuelistvalues_to_valuetranslations.language_key = k;
				valuelists_to_valuelistvalues.valuelistvalues_to_valuetranslations.translation_value =_valuelist[i][j].display[k];
			}
		}
	}
	databaseManager.saveData();
}
