/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B84CE269-23AC-457F-BFD5-61412B274B1C"}
 */
var svy_sec_l_version = '4.0.0';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"611076AB-EF22-414F-8FD9-4484C7D0891C"}
 */
var svy_sec_l_startArg = '';

/**
 * @properties={typeid:24,uuid:"7872A87F-6BC0-4E97-AE41-D72D287D1074"}
 */
function svy_sec_openLink() {
	 
}

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"B0687F10-2EEF-4C1B-8D56-83C6626EFC97"}
 */
function svy_nav_lgn_onSolutionOpen(_startArg) {
	if (!globals.svy_sec_l_startArg) {
		globals.svy_sec_l_startArg = _startArg;
	}
}
