/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"95A8C6DF-47A7-4D77-AE6F-157C9A3F0331"}
 */
var debugText = 'start';
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2148D11C-E788-45DB-A736-BFF1D21C1ABA"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	globals.viewport = globals.viewportSrc;
	//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT && globals.clientUserAgent.search(/CE/)){
	//	plugins.WebClientUtils.executeClientSideJS('resize()');
	//}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E944293-C3F0-48D1-BAD8-DEBB11FD486A"}
 */
function onLoad(event) {
	//j2 elements.viewPort.putClientProperty(APP_UI_PROPERTY.TRUST_DATA_AS_HTML, true);
}
