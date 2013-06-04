/**
 * @param {Object} startupArguments
 *
 * @properties={typeid:24,uuid:"47BC49CB-5BB7-45A4-8CF6-E7868094B2EE"}
 */
function moduleInit(startupArguments) {
	version = '1.0';
	id = 'svyMonitoring'
	if (scopes.svyProperties.getPropertyValue("monitoring_google_analytics")) {
		var trackingCode = scopes.svyProperties.getPropertyValue("monitoring_google_analytics_tracking_code");
		if (trackingCode) {
			scopes.modGoogleAnalytics.initSession(trackingCode.toString(), true); // 'UA-34422739-1'

			//TODO: document how to send the originalReferer as deeplink query param
			//TODO: extract refererUrl from startupArguments and send into 1st Google Analytics track: 
			//if (startupArguments['original_referer'][0]) {...}
			
			scopes.modUtils$eventManager.addListener(scopes.svyNavigationManager, 'layout.show', scopes.svyMonitoring.pageTrackEventHandler)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"77AEA660-A45D-49AC-AF3F-B6B3C564B54C"}
 */
function getProperties() {
	return {
		propertySet: {
			name: "monitoring",
			displayName: "i18n:svy.fr.property_set.monitoring",
			description: "i18n:svy.fr.property_set_description.monitoring",
			icon: "media:///svy_debug_preferences_48.png",
			sort: 50
		},
		properties: [{
			name: "monitoring_google_analytics",
			value: true,
			label: "i18n:svy.fr.property.monitoring_google_analytics",
			dataType: JSVariable.INTEGER,
			displayType: JSField.CHECKS,
			securityLevel: scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER,
			sort: 1
		}, {
			name: "monitoring_google_analytics_tracking_code",
			value: "",
			label: "i18n:svy.fr.property.monitoring_google_analytics_tracking_code",
			dataType: JSVariable.TEXT,
			displayType: JSField.TEXT_FIELD,
			securityLevel: scopes.svySecurityManager.ADMIN_LEVEL.APPLICATION_MANAGER,
			sort: 2
		}]
	}; 
}
