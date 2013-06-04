/** *
 * @param _method
 *
 * @properties={typeid:24,uuid:"592FE388-0F57-4FC1-9F2E-77A4C2CAE12B"}
 */
function isMethodAllowed(_method) {
	var _allowed = true
	
	if(!globals.svy_doc_isSuperAdminOrAdmin()){
		_allowed = false
	}

	return _super.isMethodAllowed(_method) && _allowed 
}
