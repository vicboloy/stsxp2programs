/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BCEE813F-8D20-4487-AA56-22B2BC2279AF"}
 */
var keyGroups = null;

/**
 * Validates the state of the Key record
 * Record is valid when:
 * key_name is nont null and unique
 * display_name is not null
 * 
 * @param {JSEvent} event The event that triggerent the validation action
 * @returns {Boolean} true if the model is in a valid state
 *
 * @properties={typeid:24,uuid:"F1530CCD-982A-4B9C-B2D7-66E5F9621C40"}
 */
function validate(event) {
	
	return !foundset.getSize() || validateKeyName() && _super.validate(event);
}

/**
 * Validates the presence and uniquness of the key name in the application
 * @returns {Boolean}
 * @properties={typeid:24,uuid:"A0DC2A7D-329C-4034-8E95-562685EEAD6E"}
 */
function validateKeyName(){
	errorMessage = null;													//	reset the error message
	if(!key_name){															//	Key Name must be non-null;
		errorMessage = 'Please provide a key name'							//	TODO: i18n HERE
		return false;														//	failed validation
	}
	var id = globals.secGetKeyID(key_name,application_id);					//	Check Key ID
	if(id && id != key_id){													//	It should be unique
		errorMessage = 'Key name is already in use';						//	TODO: i18n HERE
		return false;														//	failed validation
	}
	return true;															//	validation success
}

/**
 * Updates the user interface including form variables to reflect the state of the model
 * Ensures that the keyGroups variable reflects the associated related groups
 * 
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"E3CA4B60-D12D-4975-A022-349464BC3E20"}
 */
function updateUI(event) {
	keyGroups = databaseManager.getFoundSetDataProviderAsArray(keys_to_group_keys,'group_id').join('\n');
	return _super.updateUI(event);
}

/**
 * Handle changed data for the keyGroups variable
 * Which stores a carriage return-delimted list of linked group ids
 * It is ideal for a checkbox valuelist
 * The action either adds or removes a related record for a group link
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E3AD710B-81F4-451F-B6F1-BA39066F5AA5"}
 * @AllowToRunInFind
 */
function onDataChangeKeyGroups(oldValue, newValue, event) {	
																			//	Variable Declarations
	var fs = keys_to_group_keys.duplicateFoundSet();						//	The related foundset 
	var idColumnName = 'group_id';											//	The name of the fk id column to set
	var id;																	//	the value of the fk id
	
	oldIDs = (oldIDs) ? new String(oldIDs).split('\n') : [];				//	split the old id list into an array by carriage return
	oldIDs.sort();															//	sort the array

	newIDs = (newIDs) ? new String(newIDs).split('\n') : [];				//	split the new id list into an array by carriage return
	newIDs.sort();															//	sort the array
	
	if(newIDs.length > oldIDs.length){										//	check difference: id was ADDED
		id = newIDs[newIDs.length - 1];									//	determine the id, starting with the last element in the array
		for(i in oldIDs){													//	iterate by the old ids
			if(oldIDs[i] != newIDs[i])										//	until the corresponding new id doesn't match
				id = newIDs[i];												//	which gives the id that was added
		}
		if(fs.newRecord()){													//	create the related record
			fs[idColumnName] = id;											//	set the foreign key column value
			databaseManager.saveData(fs.getSelectedRecord());				//	save data
		}
	} else {																//	id was REMOVED	
		id = oldIDs[oldIDs.length - 1];									//	determine the id, starting with the last element in the array
		for(i in newIDs){													//	iterate by the new ids
			if(oldIDs[i] != newIDs[i])										//	until the corresponding old id doesn't match
				id = oldIDs[i];												//	which gives the id that was removed
		}
		if(fs.find()){														//	search the foundset
			fs[idColumnName] = id;											//	by the fk column
			if(fs.search())																					
				fs.deleteRecord();											//	delete record
		}
	}
	updateUI();																//	update user interface
	return true;															//	allow data change
}

/**
 * Handle changed data for key name
 * Will validate that the name is not null and unique, but only if not in transactional editing 
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7FB71AB8-D696-4BE8-90C1-206BB037E898"}
 */
function onDataChangeKeyName(oldValue, newValue, event) {
	return isEditing() || validateKeyName();								//	validates key name when not in transaction
}
