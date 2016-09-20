
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A1782A88-F891-43F9-A8F7-68B63F084A65"}
 */
function onDataChangeDispName(oldValue, newValue, event) {
	databaseManager.saveData(foundset);
	//foundset.sort('display_name asc');
	return true
}
