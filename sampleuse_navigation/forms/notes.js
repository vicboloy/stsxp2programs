/** *
 * @param _multiDelete
 *
 * @properties={typeid:24,uuid:"79700B6D-5052-4C40-9E64-877C441FCD53"}
 */
function dc_delete_message(_multiDelete) {
	if (_multiDelete) {
		return i18n.getI18NMessage('i18n:svy.fr.dlg.deletes')
	} else {
		return 'Are you sure you want to delete the note "' + name + '"?'
	}
}
