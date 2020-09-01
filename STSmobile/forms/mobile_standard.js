
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
