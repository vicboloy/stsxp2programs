/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7BF0D664-DE31-4535-A8DD-27F1B23AED37"}
 */
var vProgram_id = null;

/** *
 * @param _event
 *
 * @properties={typeid:24,uuid:"7717D817-292A-40D7-ADCE-D17359E68C19"}
 */
function dc_new(_event) {
	_super.dc_new(_event)
	if(!program_id)// the relation can fill it to
	{
		program_id = vProgram_id
	}
	forms.svy_nav_c_program_dtl.gotoEdit()
}
