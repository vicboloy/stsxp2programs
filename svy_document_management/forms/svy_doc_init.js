/**
 * @author patrick
 * @since 14.09.2012
 *
 * @param {Object<Array<String>>} startupArguments
 *
 * @properties={typeid:24,uuid:"E7196A09-1E8D-4E03-85D6-0F6CBFF17724"}
 */
function moduleInit(startupArguments) {
	version = "1.0";
	id = "svyDocumentManagement";
}

/**
 * @properties={typeid:24,uuid:"0B282A15-05C6-44AC-97F2-B1A1B5C25132"}
 */
function getProperties() {
	return {
		propertySet: { name: "document_management", displayName: "i18n:svy.fr.property_set.document_management", description: "i18n:svy.fr.property_set_description.document_management", icon: "media:///svy_documents_preferences_48.png", sort: 40 },
		properties: [
			{ name: "document_management", value: 1, label: "i18n:svy.fr.property.document_management", securityLevel: scopes.svySecurityManager.ADMIN_LEVEL.TENANT_MANAGER, sort: 1 }, 
			{ name: "document_management_in_database", value: 1, label: "i18n:svy.fr.property.document_management_in_database", securityLevel: scopes.svySecurityManager.ADMIN_LEVEL.TENANT_MANAGER, sort: 2 }, 
			{ name: "document_management_revision", value: 1, label: "i18n:svy.fr.property.document_management_revision", securityLevel: scopes.svySecurityManager.ADMIN_LEVEL.TENANT_MANAGER, sort: 3 }, 
			{ name: "document_management_tracked_checkout", value: 1, label: "i18n:svy.fr.property.document_management_tracked_checkout", securityLevel: scopes.svySecurityManager.ADMIN_LEVEL.ORGANIZATION_MANAGER, sort: 4 }, 
			{ name: "document_management_allow_all_file_types", value: 0, label: "i18n:svy.fr.property.document_management_allow_all_file_types", securityLevel: scopes.svySecurityManager.ADMIN_LEVEL.ORGANIZATION_MANAGER, sort: 5 }
		]
	};
}
