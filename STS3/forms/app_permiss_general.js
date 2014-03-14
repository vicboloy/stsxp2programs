/** *
 * @param event
 * @param location
 * @param changeSelection
 * @param transactional
 *
 *
 * @properties={typeid:24,uuid:"B35AB5E4-9762-4CB6-88CA-48E51C740645"}
 */
function newRecord(event, location, changeSelection, transactional) {

	forms.app_permiss_detail.controller.loadRecords(foundset);
	forms.app_permiss_detail.newRecord(event,location,changeSelection, transactional);
	forms.app_permiss_detail.showDialog(event);
}

/** *
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"9D6C9EDE-BB07-4BE7-821E-90A53BAF5F40"}
 */
function startEditing(event) {
	forms.app_permiss_detail.controller.loadRecords(foundset);
	forms.app_permiss_detail.showDialog(event);
}
