/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB481151-FFA9-4D7F-9675-BCE69E8881EB"}
 */
var ltg_program_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"165090BD-74DF-41A1-BD16-6131EF788FA7"}
 */
var ltg_elementname = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C04CAF9-AD2C-4210-837F-88453F04DD22"}
 */
var ltg_print_list_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0FCDF39-D769-4732-85F0-9B205FB21795"}
 */
var ltg_program_field_id$sort = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A743C4BE-2D8E-479A-8FB3-118DCF8B6537"}
 */
var ltg_program_name = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65BFFDEF-0765-443D-BB6B-FAD49E6C708F"}
 */
var ltg_program_field_id = null;

/**
 * @param {String} _program
 * @param {JSFoundSet} _foundset
 * 
 * @properties={typeid:24,uuid:"A018E2DF-7D74-401D-A2BB-161C052F1258"}
 */
function svy_nav_create_print_list(_program, _foundset) {
	forms.ltg_main.show(_program,_foundset)
}

/**
 * @properties={typeid:24,uuid:"FDCAEA90-6653-4154-AEA1-8431DAEBC05C"}
 */
function svy_nav_create_print_list_from_reportMenu() {
	
	globals.svy_nav_create_print_list(globals.nav_program_name, forms[globals.nav_currentPanel1Form].foundset)
}
