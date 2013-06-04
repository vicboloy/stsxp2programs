/**
 * @properties={typeid:24,uuid:"fc5b38a2-d863-4709-9e4e-d5e8bf9dd251"}
 */
function switch_text()
{
i18n.setI18NMessage('test.dummy', 'Hallo')
}

/** *
 * @param event
 *
 * @properties={typeid:24,uuid:"8B39007E-10B1-4F63-90A5-765473FF6C7F"}
 */
function onLoad(event) {
	vFixedElementsTable[0] = ['btn_template0', false];
	
	_super.onLoad(event);
}
