/** *
 * @param _value
 * @param _fields
 *
 * @properties={typeid:24,uuid:"905FD9CF-D59A-4AC4-A1B2-0990F45E7608"}
 */
function dc_fastSearch(_value, _fields) {
	
	_fields = ['city', 'companyname','contactname']
	return _super.dc_fastSearch(_value, _fields)
}
