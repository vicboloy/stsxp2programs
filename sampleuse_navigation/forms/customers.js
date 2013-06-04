/**
 *
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"8AA14D4B-D5FD-4FFD-B973-AF66721061F7"}
 */
function dc_new(_event, _triggerForm) {
	return _super.dc_new(_event, _triggerForm)
}

/** *
 * @param _value
 * @param _fields
 *
 * @properties={typeid:24,uuid:"37D3CFE2-FFE2-49EC-892C-0788DEDCC240"}
 */
function dc_fastSearch(_value, _fields) {
	_fields = ['companyname', 'contactname', 'country', 'address']
	return _super.dc_fastSearch(_value, _fields)
}
