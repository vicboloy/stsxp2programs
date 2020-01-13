/**
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"8BAA7B82-D724-4273-B405-4CD63373017E"}
 */
function onActionAdd(event){
	databaseManager.setAutoSave(false);
	foundset.newRecord();
	forms.status_description_rec.onActionEdit(event);
	tenant_uuid = globals.session.tenant_uuid;
	edit_date = new Date();
	var shops = application.getValueListArray('stsvl_fab_shops');
	var index = 0;
	var firstShop = "";
	for (var shop in shops){
		index++;
		if (!firstShop){firstShop = shop}
	}
	if (index > 1){
		forms.status_description_rec.elements.fab_shop.requestFocus();
	} else {
		association_id = shops[firstShop];
		forms.status_description_rec.elements.status_code.requestFocus();
	}
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B1DEAF0-97FB-4934-978E-B4418389DF96"}
 */
function onShow(firstShow, event) {
	var readOnly = false;
	globals.setUserFormPermissions(event,readOnly);
}
