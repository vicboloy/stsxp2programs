/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"90C6857D-DD7E-43F8-AC19-6E1DF29AAD38"}
 */
var sort = "";
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B2689C4-B08A-4740-827F-C3533BEE3F3A"}
 */
function onShow(firstShow, event) {
	permissionForm = 'app_permiss_general';
	foundset.sort('form_name asc');
	
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"17CA20A7-084C-4301-98F5-4528E628A338"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function deleteRecord(event, index) {
	return _super.deleteRecord(event, index);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"104B7DBA-4D9F-4F0F-98CC-26EBA538DA4D"}
 */
function onActionSort(event) {
	if (typeof sort === 'undefined'){
		sort = 'asc';
	} else if (sort == 'asc'){
		sort = 'desc';
	} else {
		sort = 'asc';
	}
	var sortText = 'form_name '+sort+', element_name';
	foundset.sort(sortText);
}
