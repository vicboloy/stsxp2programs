/** *
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"C3E35B8D-3787-452A-B4CF-DB2BEFBE4399"}
 */
function onShowForm(_firstShow, _event) {
	 _super.onShowForm(_firstShow, _event)
	 
//	 plugins.window.createShortcut('ENTER',forms.suppliers_tbl.outputit,controller.getName())
	 plugins.window.createShortcut('ENTER',forms.suppliers_tbl.outputit)


}

/**
 * @properties={typeid:24,uuid:"473CD40F-505C-4CFA-BC07-C99A910A1522"}
 */
function outputit()
{
	
}
