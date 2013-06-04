/** *
 * @param _value
 * @param _fields
 *
 * @properties={typeid:24,uuid:"F88D214D-BF1E-4C34-8C1C-496746B5877A"}
 */
function dc_fastSearch(_value, _fields) {
	_fields = ['firstname', 'lastname', 'address']
	return _super.dc_fastSearch(_value, _fields)
}

/** *
 * @param _method
 *
 * @properties={typeid:24,uuid:"6864B990-5D42-4A7C-BC48-3F203D84D695"}
 */
function isMethodAllowed(_method) {
	var _allowed = true
	if(_method == 'dc_delete')
	{
		_allowed = false
	}
	return _super.isMethodAllowed(_method) && _allowed
}
