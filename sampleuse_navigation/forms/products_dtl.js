/** *
 * @param _multiDelete
 *
 * @properties={typeid:24,uuid:"2D073062-3AE0-4CCD-BC80-22C879939E0C"}
 */
function dc_delete_message(_multiDelete) {
	
	if(_multiDelete)
	{
		return _super.dc_delete_message(_multiDelete)
	}
	else
	{
		return 'Weet je zeker dat je dit product wilt verwijderen '+ productname
	}
}

/**
 * @properties={typeid:24,uuid:"86390FB4-026F-48DD-9AA6-019C42764A43"}
 */
function myMethod() {
	globals.DIALOGS.showInfoDialog('Info', 'Succesfully selected a supplier!', 'OK');
}

/**
 * @param {JSFoundset} _foundset
 * @properties={typeid:24,uuid:"B4B67157-E88A-4F7D-99E4-C7142E0DB1ED"}
 */
function addSupplierFilters(_foundset) {
	_foundset.addFoundSetFilterParam('supplierid', '>=', 15);
	
	return _foundset;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"195EB80F-0886-46B9-A00F-A2BE988EFFA8"}
 */
function showCategory(event) {
	// get the mode of the current view
	var _mode = forms[getToolbarFormName()].vMode;
	
	var oParams = new Object();
	if (_mode == 'edit') {
		oParams.mode = "editNoCommit"; // Can be either "editCommit" or "editNoCommit"
		oParams.pk = foundset.categoryid
		oParams.fields = ["categoryname"];
		oParams.data = ["test garbage"];           

		scopes.svyLookupWindows.showLookupWindow(event, null, "Categories", null, null, oParams);
	} else {
		oParams.mode = "show";
		oParams.pk = foundset.categoryid
		scopes.svyLookupWindows.showLookupWindow(event, null, "Categories", null, null, oParams);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D6A71B9-4F08-40C3-B4C5-DD62851B7CEE"}
 */
function addCategory(event) {
    // Using "new" to create a new record, and passing an array of fields and data for the new child that will be created
	var _params = new Object();
	_params.mode = "newCommit";
	_params.fields = ["categoryname"];
	_params.data = ["test garbage"];   
	scopes.svyLookupWindows.showLookupWindow(event, null, "Categories", null, null, _params, null, null, false);
}

/**
 * @properties={typeid:24,uuid:"148D8AB3-9FF1-4C02-A38F-52C400D5799E"}
 */
function gotoEdit() {
	_super.gotoEdit.apply(this, arguments);
	elements.btn_lookup_category.enabled = true
	elements.btn_lookup_supplier.enabled = true
	elements.btn_addCategory.enabled = true
}

/**
 * @properties={typeid:24,uuid:"FA0DB8EC-1F1C-4FE6-A7A4-DDF7F854F0B8"}
 */
function gotoBrowse() {
	_super.gotoBrowse.apply(this, arguments); 
	elements.btn_lookup_category.enabled = false
	elements.btn_lookup_supplier.enabled = false
	elements.btn_addCategory.enabled = false
}
