/** *
 * @param event
 *
 * @properties={typeid:24,uuid:"C65B510E-5DA4-451B-A246-CB0B9CB39532"}
 */
function onLoad(event) {
	forms.orders_f_toolbar.vProgram = 'orders_f'
	forms.orders_f_toolbar.vFormname = 'orders_f_tbl'
	forms.orders_f_toolbar.updateUI('browse')
	//return _super.onLoad(event)
}

/** *
 * @param _event
 * @param _methodName
 *
 * @properties={typeid:24,uuid:"D697AE77-E05F-4001-9401-24D28C45C24C"}
 */
function switchForEdit(_event, _methodName) {
	return false
}

/**
 * @properties={typeid:24,uuid:"B0F1679D-8576-476E-9F30-CD0E48A81E8C"}
 */
function getToolbarFormName() {
	return 'orders_f_toolbar'
}

/** *
 * @param _program
 * @param _foundset
 *
 * @properties={typeid:24,uuid:"27729041-AE72-4029-9A04-8D42597BA43F"}
 */
function switchLayout(_program, _foundset) {
	return true
}

/** *
 * @param _foundset
 *
 * @properties={typeid:24,uuid:"0F164490-F026-48E4-A319-F877947150BE"}
 */
function syncFoundsets(_foundset) {
	return true
}

/**
 * @properties={typeid:24,uuid:"A3D44369-C630-41CF-885D-F97E20A86D7C"}
 */
function getChildFormsInEditMode() {
	return []
}
