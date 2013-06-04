/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E641307C-0BCC-42D5-BABC-5FBA1E1671A5"}
 */
var vToolbarItem = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"150C8F1C-86DD-4165-933F-710C23E2234D"}
 */
var vProgram = null;

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"259E005A-A744-4B85-A9F2-8BE561156F24"}
 * @AllowToRunInFind
 */
function loadToolbarItems(oldValue, newValue, event) {
	
	/** @type {JSFoundSet<db:/svy_framework/nav_program>} */
	var _fs = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_program')
	if(_fs.find())
	{
		_fs.program_id = newValue
		_fs.search()
	}
	
	if(_fs.getSize() == 1)
	{
		var _display = []
		var _real = []
		var _rec_t
		var _rec_ti
		for (var i = 1; i <= _fs.nav_program_to_nav_program_toolbar.getSize(); i++) {
			_rec_t = _fs.nav_program_to_nav_program_toolbar.getRecord(i)
			for (var j = 1; j <= _rec_t.nav_program_toolbar_to_nav_toolbar_item.getSize(); j++) {
				_rec_ti = _rec_t.nav_program_toolbar_to_nav_toolbar_item.getRecord(j)
				_real.push(_rec_ti.toolbar_item_id)
				_display.push(_rec_ti.i18n_description)
			}
			
			
		}
		
		//load the toolbarItems
		application.setValueListItems('nav_toolbar_items_flex',_display, _real, true)
		elements.vToolbarItem.visible = true
		
	}
	
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87191071-9DDF-4D26-91E0-E715E8495142"}
 */
function onShow(firstShow, event) {
	vProgram = vToolbarItem = null
	elements.vToolbarItem.visible = false
	elements.btn_save.enabled = false
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A644F31C-E448-43B7-A503-499623840B5B"}
 */
function onDataChange_toolbarItem(oldValue, newValue, event) {
	elements.btn_save.enabled = true
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D51250F-D50E-459C-93C2-A85286D7CDD3"}
 */
function btn_cancel(event) {
	globals.svy_nav_closeForm(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D182E1D-CC8D-48D8-8565-8AA06A9B27FF"}
 */
function btn_save(event) {
	
	var _formObj = forms[globals.svy_utl_getFrameworkFormName("sec_main_key_program_toolbar_item_tbl")]
	
	_formObj.controller.newRecord()
	_formObj['security_key_id'] = forms[globals.svy_utl_getFrameworkFormName("sec_main_key")].security_key_id
	_formObj['program_id'] = vProgram
	_formObj['toolbar_item_id'] = vToolbarItem
	
	databaseManager.saveData(_formObj.foundset.getSelectedRecord())
	
	globals.svy_nav_closeForm(event)
}
