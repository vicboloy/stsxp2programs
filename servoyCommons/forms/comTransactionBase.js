/**
 * Base method to begin an in-memory transaction
 * 
 * @param {JSEvent} event The event that triggered the action.
 * 
 * @properties={typeid:24,uuid:"59DD7269-3917-4240-A175-8A17719533B0"}
 */
function startEditing(event) {

	databaseManager.setAutoSave(false);										//	begin in-memory transaction
	updateUI(event);														//	MVC: update the view based on the model
}

/**
 * Base method to close an in-memory transaction.
 * All edits are rolled back, so a save should have already been called
 * 
 * @param {JSEvent} event The event that triggered the action.
 * @returns {Boolean} True if in-memory transaction was closed
 * 
 * @properties={typeid:24,uuid:"EC0EA81E-2415-4CB4-8567-2C5C9575F224"}
 */
function stopEditing(event) {

	databaseManager.rollbackEditedRecords();								//	Rollback edits											
	databaseManager.setAutoSave(true);										//	Close in-memory transaction
	updateUI(event);														//	MVC: update the view based on the model
}

/**
 * Base method to save outstanding edits. This action does NOT close the in-memory transaction.
 * A form's validate() method is called Prior to saving data. Data is not saved when validation fails.
 * 
 * @param {JSEvent} event The event that triggered the action.
 * @param {JSRecord} [record] Optionally save only one record from the in-memory transaction
 * @param {Boolean} [stopEdit] Optionally close in-memory transaction, default is true
 * @returns {Boolean} true if form was validated and edits were saved.
 * 
 * @properties={typeid:24,uuid:"4EFE3557-7731-4C65-80A3-8EBA08C3BF04"}
 */
function saveEdits(event, record, stopEdit) {
	if(validate() && databaseManager.saveData(record)){						//	Validate the form and save data
		if(!(stopEdit instanceof Boolean) || stopEdit){						//	optionally close in-mem transaction
			stopEditing(event);												//	Default action is to stop editing
		}else{
			updateUI(event);												//	MVC: update the view based on the model
		}
		return true;														//	record was saved suvccessfully
	}
	return false;															//	Failed to save data
}

/**
 * Base method to determine if a form is editing.
 * This is a convenience method for checking auto-save.
 * 
 * @returns {Boolean} True if the form is editing
 * @properties={typeid:24,uuid:"B6A2AFB8-E77D-4651-A343-0A01D334297F"}
 */
function isEditing() {
	return !databaseManager.getAutoSave();									//	Check Auto-Save
}

/**
 * Will not enter find if already editing or record is invalid
 * 
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean} true when the form entered find mode
 *
 * @properties={typeid:24,uuid:"BA297A8A-FAB9-417A-BBCA-40CD90E95DB0"}
 */
function startFind(event) {
	return !isEditing() && validate(event) && _super.startFind(event);		//	enter find only if not editing and valid
}

/**
 * Adds a new record. Optionally opens an in-memory transaction.
 * New records cannot be added if an invalid state exists outside of a transaction
 * 
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} [location] The index where the new record should be inserted. Default is bottom.
 * @param {Number} [changeSelection] True if the selection should change. Default is true.
 * @param {Boolean} [transactional] Specifies if this record is created inside an in-memory transaction. Default is false.
 * @returns {Number} The index of the record that was added
 * 
 *
 * @properties={typeid:24,uuid:"5E85197C-4A42-4D56-B1EE-7C833A2AB724"}
 */
function newRecord(event, location, changeSelection, transactional) {
	if(!isEditing() && !validate(event)){									//	check if invalid state outside of in-mem transaction
		return null;														//	No record added
	}
	if(transactional){ 														//	default action is transactional
		startEditing(event);	 											//	start in-memory transaction	
	}
	return _super.newRecord(event, location, changeSelection);				//	pass control to super for new-record logic
}

/**
 * Will not change selection if editing
 * 
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"BCE0A9FC-4497-4647-B834-AA6672BBF7FB"}
 */
function nextRecord(event) {
	if(!isEditing() && validate(event)){									//	check if already editing or invalid state
		_super.nextRecord(event);											//	pass to super for logic
	}
}

/**
 * Will not change selection if editing
 * 
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"2553AA20-4C46-401E-B8C8-92B1EFD7BAF0"}
 */
function previousRecord(event) {
	if(!isEditing() && validate(event)){									//	check if already editing or invalid state
		_super.previousRecord(event);										//	pass to super for logic
	}
}

/** 
 * Will not change selection if editing
 * 
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"9330D986-2BAE-46D7-BF2A-0E7E8BD061D7"}
 */
function firstRecord(event) {
	if(!isEditing() && validate(event)){									//	check if already editing or invalid state
		_super.firstRecord(event);											//	pass to super for logic
	}
}

/**
 * Will not change selection if editing
 * 
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"34FC3ACC-AF56-495F-AC3A-0FE3223A4F76"}
 */
function lastRecord(event) {
	if(!isEditing() && validate(event)){									//	check if already editing or invalid state
		_super.lastRecord(event);											//	pass to super for logic
	}
}

/**
 * Deletes a record and optionally closes an in-memory transaction
 * Default action is to close the transaction
 * 
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} [index] The index of the record to delete. Default is selected index.
 * @param {Boolean} stopEdit optionally close any in-memory transaction. Default is true.
 * @returns {Boolean} true when record was deleted from database
 * 
 * @properties={typeid:24,uuid:"23DF4B40-3BF9-4277-A9FB-EEDA7CBCD90C"}
 */
function deleteRecord(event, index, stopEdit) {
	if(_super.deleteRecord(event, index)){									//	pass control to super for delete
		if(!(stopEdit instanceof Boolean)||stopEdit)						//	default to close transaction if not specified
			stopEditing(event);												//	close in-mem transaction
		return true;														//	delete was successfull
	}
	return false;															//	delete failed
}

/**
 * Default handler for record edit stop event.
 * Invokes the validate method when not in an in-memory transaction.
 * The net effect is that invalid record edits are denied.
 * 
 * @param {JSRecord} record that record was being edited
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean} true when record was deleted from database
 * 
 * @properties={typeid:24,uuid:"5CAA4819-E609-41BB-9AF5-1EC523FC19DB"}
 */
function onRecordEditStop(record, event) {	
	if(!isEditing()){														//	Validate when not in an in-memory transaction,
		return validate(event) && _super.onRecordEditStop(record,event);	
	}
	return _super.onRecordEditStop(record, event);							//	pass control to super
}

/**
 * Duplicates the record. 
 * The action will not be allowed if form is in an invalid state and not in an in-memory transaction.
 * 
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} [index] The index of the record to duplicate. Defaults to selected index.
 * @param {Number} [location] The index where the new record should be inserted. Default is bottom.
 * @param {Number} [changeSelection] True if the selection should change. Default is True.
 * @param {Boolean}[transactional] True if the record should be created within an in-memory transaction. Default is false.
 * 
 * @returns {Number} The index of the new record
 * 
 * @properties={typeid:24,uuid:"F7F14334-69DC-44B0-9C64-68499771735F"}
 */
function duplicateRecord(event, index, location, changeSelection, transactional) {
	if(transactional){														//	optionally open an in-mem transaction
		startEditing(event);												
	}
	return _super.duplicateRecord(event, index, location, changeSelection);	//	duplicate the record in super
}

/**
 * Inverts the foundset
 * Action is disallowed when editing or form is not in a valid state
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6CB84CF6-37D4-4702-8026-725CC784ABE9"}
 */
function invertRecords(event) {
	return !isEditing() && validate(event) && _super.invertRecords(event);
}

/**
 * Sorts the foundset based on the dataprovider and sort string
 * Action is disallowed when inside an in-mem transaction or when form is not valid
 * 
 * @param {String} dataProviderID element data provider
 * @param {Boolean} asc sort acscending [true] or descending [false]
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D3BB5B1D-F954-4774-B993-358774A31411"}
 */
function onSort(dataProviderID, asc, event) {
	return !isEditing() && validate(event) && _super.onSort(dataProviderID, asc, event);
}

/**
 * Shows all records. 
 * Action is disallowed when inside an in-memory transaction or when form is not valid.
 * 
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean} True when the show-all was successful
 * 
 * @properties={typeid:24,uuid:"CBD7EDCD-F4BC-400F-AAE7-C97634B57FBD"}
 */
function showAllRecords(event) {
	return !isEditing() && validate(event) && _super.showAllRecords(event);
}

/**
 * Loads ommited records
 * Action is disallowed when inside an in-memory transaction or when form is not valid.
 * 
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean} True when the load-omitted was successful
 * @properties={typeid:24,uuid:"3186C464-A8B0-44F8-BB37-03F4015E2EA4"}
 */
function showOmittedRecords(event) {
	return !isEditing() && validate(event) && _super.showOmittedRecords(event);
}
