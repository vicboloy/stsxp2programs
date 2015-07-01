/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BADC9EA2-CBA1-450E-93B3-77B0AD78BAA1"}
 */
var winderList = "";
/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event event that launched this function
 * @param tabName {String} identify the tab selected to open that form view
 *
 * @properties={typeid:24,uuid:"DAB11C9F-D47B-4C2A-AA3A-F07D4B9AFE63"}
 */
function onActionMenu(event,tabName){
	//application.output(tabName);
	//replaceTabIcon(tabName);
	switch (tabName){
		case 'edit':
			elements.split.setLeftForm(forms.sts_nav_edit,null);
			break;
		case 'import':
			elements.split.setLeftForm(forms.sts_nav_import,null);
			break;
		case 'view':
			elements.split.setLeftForm(forms.sts_nav_view,null);
			break;
		case 'reports':
		elements.split.setLeftForm(forms.sts_nav_reports,null);
			break;
		case 'labels':
			elements.split.setLeftForm(forms.sts_nav_labels,null);
			break
		default:
			elements.split.setLeftForm(forms.sts_nav_default,null);
	}
	replaceTabIcon(tabName);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param tabName
 *
 * @properties={typeid:24,uuid:"1866A7CB-D2A5-4FD5-92FA-ECC35CA24587"}
 */
function replaceTabIcon(tabName){
	var colorSelect = '#b7bcbf';
	var colorUnSelect = '#e5e5e5';
	var white = '#ffffff';
	var black = '#000000'
	elements.home.bgcolor = colorUnSelect;
	elements.imports.bgcolor = colorUnSelect;
	elements.labels.bgcolor = colorUnSelect;
	elements.reports.bgcolor = colorUnSelect;
	elements.view.bgcolor = colorUnSelect;
	elements.edit.bgcolor = colorUnSelect;
	
	/**elements.home.fgcolor = black;
	elements.imports.fgcolor = black;
	elements.labels.fgcolor = black;
	elements.reports.fgcolor = black;
	elements.view.fgcolor = black;
	elements.edit.fgcolor = black;*/
	switch (tabName){
	case 'edit':
		//elements.edit.fgcolor = white;
		elements.edit.bgcolor = colorSelect;
		break;
	case 'import':
		//elements.imports.fgcolor = white;
		elements.imports.bgcolor = colorSelect;
		break;
	case 'view':
		//elements.view.fgcolor = white;
		elements.view.bgcolor = colorSelect;
		break;
	case 'reports':
		//elements.reports.fgcolor = white;
		elements.reports.bgcolor = colorSelect;
		break;
	case 'labels':
		//elements.labels.fgcolor = white;
		elements.labels.bgcolor = colorSelect;
		break
	default:
		//elements.home.fgcolor = white;
		elements.home.bgcolor = colorSelect;
		//elements.home.text = elements.home.text.fontcolor('#ffffff');

}

}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35F5B55F-AE50-40D1-BF9F-6EA16BFBDD7D"}
 */
function onLoadMain(event) {
	globals.initStatusTypes();
	globals.initUomArray();
	application.setValueListItems('stsvl_rfPortableType',forms.preferences_main.arfPortableType);
	application.setValueListItems('stsvl_status_type',globals.aStatusTypes);
	globals.initLaborCodes();
	elements.split.rightFormMinSize = 40;
	elements.split.dividerLocation = 0.80;
	onActionMenu(event,'view');
	application.output('current tenant '+globals.secCurrentTenantID);
	//replaceTabIcon('');

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"090C0E7C-8BB9-4683-8822-491A39A5DF32"}
 */
function onActionLogout(event) {
	globals.doLogout();
}
