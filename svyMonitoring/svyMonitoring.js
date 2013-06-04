/**
 * @param data
 *
 * @properties={typeid:24,uuid:"CB66EF27-700E-422A-AA82-AEED2DD3B3CB"}
 */
function pageTrackEventHandler(data) {
	scopes.modGoogleAnalytics.getClientSession().trackPageView(data.title, data.url, null);
}
