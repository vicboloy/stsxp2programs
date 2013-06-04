/**
 * @param {UUID} _layout_id
 * @param {String} _program
 * 
 * @properties={typeid:24,uuid:"AE84E5C6-91E9-4E12-8F2F-E4A2427DE69B"}
 */
function saveEditsToObject(_layout_id, _program) {
	var _edits = databaseManager.getEditedRecords()
	for (var i = 0; i < _edits.length; i++) {
		var _isInArray = false
		forOpenEdits:
		for (var j = 0; j < globals.nav.openEdits.length; j++) {
			if (_edits[i] == globals.nav.openEdits[j].record) {
				_isInArray = true
				break forOpenEdits
			}
		}
		if (!_isInArray) {
			globals.nav.openEdits.push({layout_id: _layout_id, program:_program, record:_edits[i]});
		}
	}
}

/**
 * Saves all the edits from the globals.nav.openEdits object for one program
 * @param {String} _program name of the program where you want to save edits for
 * 
 * @return {Array<JSRecord>} null if not successful, otherwise an array of the records that are saved
 * @properties={typeid:24,uuid:"33FDC24C-168E-4FE3-98C9-A4C208DB962A"}
 */
function saveEditsFromObject(_program) {
	var _programSuccess = true
	var _recordSuccess
	/** @type {Array<JSRecord>} */
	var _recordsSaved = []
	for (var i = 0; i < globals.nav.openEdits.length; i++) {
		if (_program == globals.nav.openEdits[i].program) {
			_recordSuccess = databaseManager.saveData(globals.nav.openEdits[i].record)
			_recordsSaved.push(globals.nav.openEdits[i].record)
			globals.nav.openEdits = globals.nav.openEdits.slice(0, i).concat(globals.nav.openEdits.slice(i + 1))
			i--
			if (!_recordSuccess) {
				_programSuccess = false
			}

		}
	}

	//Could not save all the records for this program successfully
	if (!_programSuccess) {
		var _failedArray = databaseManager.getFailedRecords()
		var _record;
		var _ex = "";
		
		for (i = 0; i < _failedArray.length; i++) {
			_record = _failedArray[i];
			if (_record.exception) {
				_ex += _record.exception.getMessage() + "\n";
				application.output(_record.exception.getStackTrace(), LOGGINGLEVEL.ERROR);
			}
			_record.revertChanges()
		}
		if (_ex != "") {
			globals.DIALOGS.showWarningDialog("i18n:svy.fr.dlg.error_saving_data", _ex, "OK");
		}

		for (var j = 0; j < _recordsSaved.length; j++) {
			_recordsSaved[j].revertChanges()
		}
		databaseManager.rollbackTransaction()
		databaseManager.releaseAllLocks(_program)
	}

	if (_programSuccess) {
		return _recordsSaved
	} else {
		return null
	}
}

/**
 * Rolls back all the edits from the globals.nav.openEdits object for one program
 * @param {Object} _program name of the program where you want to rollback edits for
 *
 * @properties={typeid:24,uuid:"6A6A90D3-97CC-4759-8D9B-D3A68AB5AD54"}
 */
function rollBackEditsFromObject(_program) {
	for (var i = (globals.nav.openEdits.length-1); i >= 0; i--) {
		if (_program == globals.nav.openEdits[i].program) {
			var _record = globals.nav.openEdits[i].record
			//first remove the record from the object then revert it, otherwise onRecordSelection is triggered and the record is still in the object.
			globals.nav.openEdits = globals.nav.openEdits.slice(0, i).concat(globals.nav.openEdits.slice(i + 1))
			databaseManager.revertEditedRecords(_record)
		}
	}
}

/**
 * Returns whether or not a program has edited records
 * 
 * @param {String} _program name of the program in which to check any open edits
 * 
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"1234FA49-AFEB-4BB0-94F4-435E615A8365"}
 */
function hasEditsInObject(_program) {
	for (var i = 0; i < globals.nav.openEdits.length; i++) {
		if (_program == globals.nav.openEdits[i].program) {
			return true;
		}
	}
	
	return false;
}
