
/**
 * Callback method for when solution is opened.
 * 
 * @param {String} [arg] The startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} [queryParams] all query parameters of the deeplink url with which the Client was started
 *
 * 
 *
 * @properties={typeid:24,uuid:"68845D96-E6BD-406C-AAE4-324BF971F0C0"}
 */
function onSolutionOpen(arg, queryParams) {
	globals.nav.mainFormName = "svy_nav_fr_p_main";
	globals.nav.openLayoutFormName = "svy_nav_fr_p_openTabs";
	globals.nav.postLoginFormName = "svy_nav_fr_p_postLogin";
	globals.nav.loadingFormName = "svy_nav_fr_p_loading";
	globals.nav.desktopFormName = "svy_nav_fr_p_desktop";
	globals.nav.panelFormName = "svy_nav_fr_p_panel";
	globals.nav.buttonbar_lookup_window = "svy_nav_fr_buttonbar_lookup_window_pv";
	globals.nav.lookupWindowFormName = "svy_nav_fr_lookup_window_pv";
	globals.nav.advancedSearchCriteriaFormName = "svy_sea_advanced_search_criteria_dtl_pv";
	globals.nav.advancedSearchFormName = "svy_sea_advanced_search_dtl_pv";
	globals.nav.advancedSearchGroupFormName = "svy_sea_advanced_search_Group_dtl_pv";
	globals.nav.advancedSearchCriteriaTableFormName = "svy_sea_advanced_search_criteria_tbl_pv";
	globals.nav.advancedSearchTableFormName = "svy_sea_advanced_search_tbl_pv";
	
	globals.svy_nav_onOpen(arg, queryParams);
}
