/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF784A02-6A49-4660-937C-0D30DBA8AF76"}
 */
var company_name = "";

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Number} changeSelection
 *
 * @properties={typeid:24,uuid:"8BF3CF41-B432-497D-AE98-BBD03A0E3B6D"}
 */
function newRecord(event, location, changeSelection) {
	var index = _super.newRecord(event, location, changeSelection);
	if (index){
		//company_name = elements.companyEntry.titleText;
	}
	//elements.companyEntry.visible = true;
	return index;
}
