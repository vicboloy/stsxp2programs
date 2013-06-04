/**
 * @properties={typeid:24,uuid:"60C23A92-F4C0-457D-9F15-B5530A3CA064"}
 */
function setProgress(_percent) {
	
	var _max = 485
	
	var _lenght = (_max/100) * _percent
	
	elements.lbl_progress.setSize(_lenght,1)
	application.updateUI()
	
	
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4802B2F7-63DC-4CE4-9F7E-AAFEB72EA31B"}
 */
function onLoad(event) {
	
	elements.lbl_loading.text = i18n.getI18NMessage('svy.fr.lbl.loading...').toLocaleUpperCase()
	setProgress(0)
}
