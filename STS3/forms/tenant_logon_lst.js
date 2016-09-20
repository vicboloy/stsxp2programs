
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"97C13A4A-2295-41F1-915E-0AA251A7D63A"}
 */
function deleteRecord(event, index) {
	if (user_name == "P"){return}  // protect admin account
	return _super.deleteRecord(event, index)
}
