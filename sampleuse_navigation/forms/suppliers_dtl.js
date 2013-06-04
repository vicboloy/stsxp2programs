/**
 * @properties={typeid:24,uuid:"14C694AB-902C-4FAE-BC61-528CE9BB8EE2"}
 */
function val_city(_table, _dataprovider, _newValue, _record) {

	if(utils.stringPatternCount(_newValue,'.')>0)
	{
		return 1
	}
	else
	{
		globals.nav.validation_msg += _dataprovider+ ", needs to have a . in it and doesn't have it" + '\n'
		return -1
	}
	
}

/**
 *
 * @param {JSEvent} _event
 * @param {Boolean} _noDialog
 *
 * @properties={typeid:24,uuid:"A2819FF8-74BD-4083-8609-35130322C05B"}
 */
function dc_delete(_event, _noDialog) {
	application.output(globals.nav_currentPanel1Form)
	
//	return _super.dc_delete(_event, _noDialog)
}
