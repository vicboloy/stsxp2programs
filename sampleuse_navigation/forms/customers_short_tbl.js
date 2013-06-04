/**
 * @properties={typeid:24,uuid:"031E0E67-8564-4537-B1C4-764CD0C8CE93"}
 */
function switch_text()
{
i18n.setI18NMessage('test.dummy', 'Hallo')
}

/** *
 * @param event
 *
 * @properties={typeid:24,uuid:"443A512B-DAB0-4BA3-AAC1-6B8B8762AAD7"}
 */
function onLoad(event) {
	vFixedElementsTable[0] = ['btn_template0', false];
	
	_super.onLoad(event);
}
