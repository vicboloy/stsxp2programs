/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"110B1349-8114-4BC0-9094-034750AAFED4"}
 */
var groupKeys = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"984EECE4-83C1-48C3-92FF-2BAEC1FCBE2E"}
 */
var groupUsers = null;

/**
 * Handle changed data for the groupKeys variable
 * Which stores a carriage return-delimted list of linked Key ids
 * It is ideal for a checkbox valuelist
 * The action either adds or removes a related record for a Key link
 *
 * @param {Object} oldIDs old value
 * @param {Object} newIDs new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3C69A3EB-71D3-4671-B49F-4036E52915AD"}
 * @AllowToRunInFind
 */
function onDataChangeGroupKeys(oldIDs, newIDs, event) {
																			//	Variable Declarations
	var fs = groups_to_group_keys.duplicateFoundSet();						//	The related foundset 
	var idColumnName = 'key_uuid';											//	The name of the fk id column to set
	var id;																	//	the value of the fk id
	var recDate = new Date();
	var i;
	
	oldIDs = (oldIDs) ? new String(oldIDs).split('\n') : [];				//	split the old id list into an array by carriage return
	oldIDs.sort();															//	sort the array

	newIDs = (newIDs) ? new String(newIDs).split('\n') : [];				//	split the new id list into an array by carriage return
	newIDs.sort();															//	sort the array
	
	if (newIDs.length == oldIDs.length){return}
	
	if(newIDs.length > oldIDs.length){										//	check difference: id was ADDED
		id = newIDs[newIDs.length - 1];									//	determine the id, starting with the last element in the array
		for(i in oldIDs){													//	iterate by the old ids
			if(oldIDs[i] != newIDs[i])	{									//	until the corresponding new id doesn't match
				id = newIDs[i];												//	which gives the id that was added
				break;
			}
		}
		if(fs.newRecord()){													//	create the related record
			fs[idColumnName] = id;											//	set the foreign key column value
			fs.tenant_uuid = globals.secCurrentTenantID;
			fs.edit_date = recDate;
			databaseManager.saveData(fs.getSelectedRecord());				//	save data
		}
	} else {																//	id was REMOVED	
		id = oldIDs[oldIDs.length - 1];									//	determine the id, starting with the last element in the array
		for(i in newIDs){													//	iterate by the new ids
			if(oldIDs[i] != newIDs[i]){										//	until the corresponding old id doesn't match
				id = oldIDs[i];												//	which gives the id that was removed
				null;
				break;
			}
		}
		if(id && fs.find()){														//	search the foundset
			fs[idColumnName] = id;											//	by the fk column
			if(fs.search())																					
				fs.deleteRecord();											//	delete record
		}
	}
	updateUI(event);																//	update user interface
	return true;															//	allow data change
}

/**
 * Handle changed data for the groupUsers variable
 * Which stores a carriage return-delimted list of linked User ids
 * It is ideal for a checkbox valuelist
 * The action either adds or removes a related record for a User link
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3A902B76-6774-4FD5-9BDC-BA341C53474C"}
 * @AllowToRunInFind
 * 
 */
function onDataChangeGroupUsers(oldValue, newValue, event) {
																			//	Variable Declarations
	var fs = groups_to_user_groups.duplicateFoundSet();						//	The related foundset 
	var idColumnName = 'user_uuid';											//	The name of the fk id column to set
	var id;																	//	the value of the fk id
	var i;
	var newIDs =[];
	var oldIDs = [];
	var recDate = new Date();
	
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
			fs.edit_date = recDate;
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
	updateUI(event);																//	update user interface
	return true;															//	allow data change
}

/** *
 * Updates the user interface including form variables to reflect the state of the model
 * 
 * @param {JSEvent} event The event that triggered the action.
 * @properties={typeid:24,uuid:"CD7F46B7-E92F-42CF-80B4-52833E0E02C0"}
 */
function updateUI(event) {													//	set the values for linked-list form variables
	groupKeys = databaseManager.getFoundSetDataProviderAsArray(groups_to_group_keys,'key_uuid').join('\n');
	groupUsers = databaseManager.getFoundSetDataProviderAsArray(groups_to_user_groups,'user_uuid').join('\n');
	return _super.updateUI(event);											//	call to super
}

/**
 * Validates the state of the Group record
 * Group name cannot be null and must be unique in tenant or application (enforced by applied filters)
 * Display name cannot be null;
 * 
 * @param {JSEvent} event The event that triggerent the validation action
 * @returns {Boolean} true if the model is in a valid state
 *
 * @properties={typeid:24,uuid:"026BD883-BE45-4C43-8C93-0585BDDBC443"}
 */
function validate(event) {
	
	return !foundset.getSize() || validateGroupName() && _super.validate(event);
}

/**
 * Validates the presence and uniquness of the group name in the application or tenant
 * @returns {Boolean}
 * @properties={typeid:24,uuid:"A24797FA-14EB-4E95-9CF6-42B353A78397"}
 */
function validateGroupName(){
	errorMessage = null;													//	reset the error message
	if(!group_name){														//	Group Name must be non-null;
		errorMessage = i18n.getI18NMessage('sts.txt.provide.group.name');
		return false;														//	failed validation
	}
	/** @type {UUID} tenant_uuid */
	/** @type {Number} application_id */
	var id = globals.secGetGroupID(group_name,tenant_uuid, application_id);	//	Check group ID
	if(id && id != group_uuid){												//	It should be unique
		errorMessage = i18n.getI18NMessage('sts.txt.group.name.already.in.use');
		return false;														//	failed validation
	}
	return true;															//	validation success
}

/**
 * Handle changed data for group name
 * Will validate that the name is not null and unique, but only if not in transactional editing 
 *
 * @param {Object} oldValue old value
 * @param {Object} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EFEB8913-0AF9-4CB4-99D0-07632FC7AAE2"}
 */
function onDataChangeGroupName(oldValue, newValue, event) {
	return isEditing(event) || validateGroupName();								//	validates group name when not in transaction
}
